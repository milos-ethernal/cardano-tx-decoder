import { useEffect, useState } from 'react';
import * as CSL from '@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib.js';

function hexToBytes(hex: string): Uint8Array {
  const clean = hex.trim().toLowerCase().replace(/^0x/, '');
  if (clean.length % 2 !== 0) throw new Error('Hex string has odd length');
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) {
    bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  }
  return bytes;
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function hexToAscii(hex: string): string | null {
  try {
    if (hex.length % 2 !== 0) return null;
    let out = '';
    for (let i = 0; i < hex.length; i += 2) {
      const code = parseInt(hex.slice(i, i + 2), 16);
      if (code < 32 || code > 126) return null;
      out += String.fromCharCode(code);
    }
    return out || null;
  } catch {
    return null;
  }
}

function safeHex(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('{')) {
    try {
      const obj = JSON.parse(trimmed);
      if (obj && typeof obj.cborHex === 'string') return obj.cborHex;
    } catch {}
  }
  return trimmed;
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  // Mark ready once module is loaded (Vite bundles and initializes wasm internally)
  useEffect(() => {
    let cancelled = false;
    try {
      // Touch an export to ensure it's present
      if (typeof CSL.Transaction === 'function') {
        if (!cancelled) setReady(true);
      } else {
        setError('Cardano Serialization Lib not available');
      }
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
    return () => { cancelled = true; };
  }, []);

  // Autofill from ?cborHex= param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('cborHex');
    if (q) setInput(q);
  }, []);

  function buildAmountCliLike(value: any) {
    const lovelaceNum = Number(value.coin().to_str());
    const multi = value.multiasset();
    const amount: any = { lovelace: lovelaceNum };
    if (multi) {
      const policies = multi.keys();
      for (let i = 0; i < policies.len(); i++) {
        const policyId = policies.get(i);
        const assets = multi.get(policyId);
        const assetKeys = assets.keys();
        const policyHex = bytesToHex(policyId.to_bytes());
        const policyKey = `policy ${policyHex}`;
        const inner: Record<string, number> = {};
        for (let j = 0; j < assetKeys.len(); j++) {
          const name = assetKeys.get(j);
          const qty = Number(assets.get(name).to_str());
          const nameHex = bytesToHex(name.name());
          const ascii = hexToAscii(nameHex);
          const assetKey = ascii ? `asset ${nameHex} (${ascii})` : `asset ${nameHex}`;
          inner[assetKey] = qty;
        }
        amount[policyKey] = inner;
      }
    }
    return amount;
  }

  function getAddressInfo(addrBech32: string) {
    const a = CSL.Address.from_bech32(addrBech32);
    const network = addrBech32.startsWith('addr_test') ? 'Testnet' : 'Mainnet';
    let addressEra = 'Shelley';
    let paymentKey: string | null = null;
    let paymentScript: string | null = null;
    let stakeKey: string | null = null;
    let stakeScript: string | null = null;

    const base = CSL.BaseAddress.from_address(a);
    if (base) {
      const pcred = base.payment_cred();
      const sk = pcred.to_keyhash();
      const sh = pcred.to_scripthash();
      if (sk) paymentKey = bytesToHex(sk.to_bytes());
      if (sh) paymentScript = bytesToHex(sh.to_bytes());
      const scred = base.stake_cred();
      const ssk = scred.to_keyhash();
      const ssh = scred.to_scripthash();
      if (ssk) stakeKey = bytesToHex(ssk.to_bytes());
      if (ssh) stakeScript = bytesToHex(ssh.to_bytes());
    } else {
      const ent = CSL.EnterpriseAddress.from_address(a);
      if (ent) {
        const pcred = ent.payment_cred();
        const sk = pcred.to_keyhash();
        const sh = pcred.to_scripthash();
        if (sk) paymentKey = bytesToHex(sk.to_bytes());
        if (sh) paymentScript = bytesToHex(sh.to_bytes());
      }
    }

    const stakeReference = stakeKey || stakeScript
      ? (stakeKey ? { 'stake credential key hash': stakeKey } : { 'stake credential script hash': stakeScript as string })
      : null;

    const paymentField = paymentKey
      ? { 'payment credential key hash': paymentKey }
      : (paymentScript ? { 'payment credential script hash': paymentScript } : {});

    return { network, addressEra, paymentField, stakeReference, referenceScript: null };
  }

  function txToObject(tx: any) {
    const body = tx.body();
    const inputs = body.inputs();
    const outputs = body.outputs();

    const inputsArr: string[] = [];
    for (let i = 0; i < inputs.len(); i++) {
      const input = inputs.get(i);
      const txId = bytesToHex(input.transaction_id().to_bytes());
      inputsArr.push(`${txId}#${input.index()}`);
    }

    const outputsArr: any[] = [];
    for (let i = 0; i < outputs.len(); i++) {
      const output = outputs.get(i);
      const addrBech = output.address().to_bech32();
      const { network, addressEra, paymentField, stakeReference, referenceScript } = getAddressInfo(addrBech);
      const amount = buildAmountCliLike(output.amount());
      outputsArr.push({
        address: addrBech,
        'address era': addressEra,
        amount,
        network,
        ...paymentField,
        'reference script': referenceScript,
        'stake reference': stakeReference,
      });
    }

    const fee = `${body.fee().to_str()} Lovelace`;
    const ttl = body.ttl ? (typeof body.ttl === 'function' ? body.ttl() : null) : null;

    // Lower bound (a.k.a invalid_before / validity_start_interval)
    const lowerBound = (
      (typeof body.invalid_before === 'function' ? body.invalid_before() : null) ??
      (typeof (body as any).validity_start_interval === 'function' ? (body as any).validity_start_interval() : null)
    );

    // Collateral inputs (Babbage)
    const collateralInputsColl = (
      typeof body.collateral === 'function' ? body.collateral() :
      (typeof (body as any).collateral_inputs === 'function' ? (body as any).collateral_inputs() : null)
    );
    const collateralInputs: string[] = [];
    if (collateralInputsColl) {
      for (let i = 0; i < collateralInputsColl.len(); i++) {
        const ci = collateralInputsColl.get(i);
        const txId = bytesToHex(ci.transaction_id().to_bytes());
        collateralInputs.push(`${txId}#${ci.index()}`);
      }
    }

    // Reference inputs (Babbage)
    const refInputsColl = body.reference_inputs?.();
    const referenceInputs: string[] = [];
    if (refInputsColl) {
      for (let i = 0; i < refInputsColl.len(); i++) {
        const ri = refInputsColl.get(i);
        const txId = bytesToHex(ri.transaction_id().to_bytes());
        referenceInputs.push(`${txId}#${ri.index()}`);
      }
    }

    // Mint (policy -> asset -> int)
    function buildMintCliLike(mint: any) {
      if (!mint) return null;
      const policies = mint.keys();
      if (!policies || policies.len() === 0) return null;
      const out: any = {};
      for (let i = 0; i < policies.len(); i++) {
        const policyId = policies.get(i);
        const assets = mint.get(policyId);
        const assetKeys = assets.keys();
        const policyHex = bytesToHex(policyId.to_bytes());
        const policyKey = `policy ${policyHex}`;
        const inner: Record<string, number> = {};
        for (let j = 0; j < assetKeys.len(); j++) {
          const name = assetKeys.get(j);
          const qtyInt = assets.get(name);
          const qtyStr = qtyInt?.to_str?.() ?? String(qtyInt);
          const qtyNum = Number(qtyStr);
          const nameHex = bytesToHex(name.name());
          const ascii = hexToAscii(nameHex);
          const assetKey = ascii ? `asset ${nameHex} (${ascii})` : `asset ${nameHex}`;
          inner[assetKey] = qtyNum;
        }
        out[policyKey] = inner;
      }
      return out;
    }
    const mint = buildMintCliLike(body.mint?.());

    // Return collateral output (Babbage)
    function buildOutputObject(output: any) {
      const addrBech = output.address().to_bech32();
      const { network, addressEra, paymentField, stakeReference, referenceScript } = getAddressInfo(addrBech);
      const amount = buildAmountCliLike(output.amount());
      return {
        address: addrBech,
        'address era': addressEra,
        amount,
        network,
        ...paymentField,
        'reference script': referenceScript,
        'stake reference': stakeReference,
      };
    }
    const collateralReturn = body.collateral_return?.() ? buildOutputObject(body.collateral_return()) : null;
    const totalCollateral = body.total_collateral?.() ? Number(body.total_collateral().to_str()) : null;

    // Required signers (payment key hashes for scripts)
    const reqSigners = body.required_signers?.();
    const requiredSigners = reqSigners ? (() => {
      const arr: string[] = [];
      for (let i = 0; i < reqSigners.len(); i++) {
        arr.push(bytesToHex(reqSigners.get(i).to_bytes()));
      }
      return arr;
    })() : null;

    // Withdrawals (reward address -> coin)
    const withdrawalsMap = body.withdrawals?.();
    let withdrawals: any = null;
    if (withdrawalsMap) {
      const addrs = withdrawalsMap.keys();
      const w: Record<string, number> = {};
      for (let i = 0; i < addrs.len(); i++) {
        const rewardAddr = addrs.get(i);
        const amt = withdrawalsMap.get(rewardAddr);
        // Convert reward address to bech32 stake address for readability
        try {
          const bech = rewardAddr.to_address?.().to_bech32?.() ?? null;
          if (bech) w[bech] = Number(amt.to_str());
        } catch {
          // fallback to bytes hex key if needed
          const key = bytesToHex(rewardAddr.to_address?.().to_bytes?.() ?? new Uint8Array());
          if (key) w[key] = Number(amt.to_str());
        }
      }
      if (Object.keys(w).length > 0) withdrawals = w;
    }

    // Update proposal (expose raw bytes if present)
    const updateProposal = body.update?.() ? { raw: bytesToHex(body.update().to_bytes?.() ?? new Uint8Array()) } : null;

    // Witnesses summary (counts) if present
    const ws = tx.witness_set?.() ?? tx.witnesses?.();
    let witnesses: any = [];
    if (ws) {
      const summary: any = {
        vkeys: ws.vkeys?.()?.len?.() ?? 0,
        native_scripts: ws.native_scripts?.()?.len?.() ?? 0,
        bootstrap_witnesses: ws.bootstraps?.()?.len?.() ?? 0,
        plutus_v1_scripts: ws.plutus_scripts?.()?.len?.() ?? ws.plutus_v1_scripts?.()?.len?.() ?? 0,
        plutus_v2_scripts: ws.plutus_v2_scripts?.()?.len?.() ?? 0,
        redeemers: ws.redeemers?.()?.len?.() ?? 0,
        datums: ws.plutus_data?.()?.len?.() ?? 0,
      };
      witnesses = [summary];
    }

    // Era detection (best-effort)
    const era = (referenceInputs.length > 0 || collateralReturn || totalCollateral !== null) ? 'Babbage' : 'Alonzo';

    function decodeMetadatum(m: any): any {
      // Try kinds in order of cheapest checks
      try {
        const s = m.as_text();
        if (typeof s === 'string') return s;
      } catch {}
      try {
        const i = m.as_int();
        if (i) {
          // prefer number when safe
          const n = i.as_i32_or_nothing?.();
          return typeof n === 'number' ? n : Number(i.to_str());
        }
      } catch {}
      try {
        const b = m.as_bytes();
        if (b) return bytesToHex(b);
      } catch {}
      try {
        const list = m.as_list();
        if (list) {
          const out: any[] = [];
          for (let i = 0; i < list.len(); i++) out.push(decodeMetadatum(list.get(i)));
          return out;
        }
      } catch {}
      try {
        const map = m.as_map();
        if (map) {
          const keys = map.keys();
          const pairs: any[] = [];
          for (let i = 0; i < keys.len(); i++) {
            const k = keys.get(i);
            const v = map.get(k);
            pairs.push([decodeMetadatum(k), decodeMetadatum(v)]);
          }
          return pairs;
        }
      } catch {}
      return null;
    }

    // Decode metadata if present
    let metadata: any = null;
    const aux = tx.auxiliary_data?.() ?? tx.auxiliary_data();
    if (aux) {
      const md = aux.metadata?.() ?? aux.metadata();
      if (md) {
        const labels = md.keys();
        const obj: Record<string, any> = {};
        for (let i = 0; i < labels.len(); i++) {
          const label = labels.get(i);
          const meta = md.get(label);
          obj[label.to_str()] = decodeMetadatum(meta);
        }
        if (Object.keys(obj).length > 0) metadata = obj;
      }
    }

    const obj: any = {
      'auxiliary scripts': null,
      certificates: body.certs?.() ? 'present' : null,
      'collateral inputs': collateralInputs,
      era,
      fee,
      inputs: inputsArr,
      metadata,
      mint,
      outputs: outputsArr,
      'reference inputs': referenceInputs,
      'required signers (payment key hashes needed for scripts)': requiredSigners,
      'return collateral': collateralReturn,
      'total collateral': totalCollateral,
      'update proposal': updateProposal,
      'validity range': { 'lower bound': lowerBound, 'upper bound': ttl },
      withdrawals,
      witnesses,
    };

    // Include raw only if needed; comment out to match exactly
    // obj.raw = {
    //   body: bytesToHex(body.to_bytes()),
    //   hash: bytesToHex(CSL.hash_transaction(body).to_bytes()),
    // };

    return obj;
  }

  const onDecode = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      setError('');
      setOutput('');
      const cborHex = safeHex(input);
      if (!cborHex) throw new Error('Please enter a CBOR hex string');
      const tx = CSL.Transaction.from_bytes(hexToBytes(cborHex));
      const obj = txToObject(tx);
      setOutput(JSON.stringify(obj, null, 2));
    } catch (e: any) {
      setError(e?.message ?? String(e));
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Cardano Transaction Decoder</h1>
        <p>Paste your CBOR hex string to decode the transaction (runs fully in your browser)</p>
      </header>
      <div className="form-container">
        <form onSubmit={onDecode}>
          <div className="input-group">
            <label htmlFor="cbor">CBOR Hex String:</label>
            <textarea id="cbor" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Paste your CBOR hex string here...' rows={4} />
          </div>
          <button type="submit" disabled={!ready}>{ready ? 'Decode Transaction' : 'Loading CSL...'}</button>
        </form>
      </div>
      {output && (
        <div className="result-container">
          <h3>Decoded Transaction:</h3>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div className="error-container">
          <h3>Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}


