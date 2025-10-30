## Cardano Transaction Decoder

Simple, fast Cardano transaction decoding in two modes:
- **Browser-only (recommended):** React + WASM using `@emurgo/cardano-serialization-lib-browser`, no backend needed.
- **Local Go server:** Uses `cardano-cli transaction view` under the hood.

### Features
- Web UI to paste CBOR hex (or JSON with `cborHex`)
- Pretty JSON output similar to `cardano-cli transaction view`
- Decodes outputs, amounts, address credential info, validity range, metadata, etc.
- Clean, responsive styling

### Project layout
- `main.go`: Go server with `/` and `/decode` endpoints, uses `cardano-cli`
- `src/` + `vite.config.ts`: Vite/React app (browser-only decoder)
- `docs/`: Built static site for GitHub Pages
- `static/style.css`: Shared styles
- `Makefile`: Convenience targets for Go and docs

## Prerequisites
- Go 1.21+
- Node.js 18+
- A web browser
- For Go server mode: `cardano-cli` available in `PATH`

## Quick start

### Option A: Browser-only (no backend)
1) Install web deps:
```bash
npm install
```
2) Run dev server:
```bash
npm run dev
```
3) Open the printed local URL and paste a CBOR hex string.

Build for static hosting (outputs to `docs/`):
```bash
npm run build
```
Preview the built site locally:
```bash
make serve-docs
```

### Option B: Go server (uses cardano-cli)
1) Install Go deps and verify `cardano-cli`:
```bash
make deps
make check-cli
```
2) Run the app:
```bash
make run
```
3) Open `http://localhost:8080`, paste CBOR hex, and decode.

Dev without building the binary:
```bash
make dev
```

## Hosting on GitHub Pages (browser-only)
1) Ensure Node 18+ is installed and run:
```bash
make build-docs
```
2) Commit and push the updated `docs/` folder.
3) In GitHub → Settings → Pages: set Source to "Deploy from a branch", Branch to your default branch, Folder to `/docs`.
4) Visit the published URL. The site runs entirely in your browser; no server required.

Notes:
- Input can be raw CBOR hex or JSON containing `cborHex`.
- Vite is configured with `base: './'` and `outDir: 'docs'` for Pages.

## How decoding works

### Browser-only path
The React app loads the Cardano Serialization Library WASM and:
- Parses CBOR bytes with `CSL.Transaction.from_bytes(...)`
- Produces a JSON object mirroring `cardano-cli transaction view` fields (inputs/outputs, amounts, metadata, validity range, etc.)
- Attempts to present multi-asset names as both hex and ASCII (when printable)

Key implementation: see `src/App.tsx` for conversion helpers and object shaping.

### Go server path
The server accepts `{ "cborHex": "..." }`, writes a temp file in the format expected by `cardano-cli`, then executes:
```
cardano-cli transaction view --tx-file <temp-file>
```
Raw output is returned; if it is valid JSON, it is pretty-printed before responding.

## Make targets
- `make help` – list targets
- `make deps` – download Go deps
- `make build` – build Go binary `tx-helper`
- `make run` – build then run the server at `http://localhost:8080`
- `make dev` – run `go run main.go`
- `make clean` – remove build artifacts
- `make test` – run Go tests
- `make check-cli` – verify `cardano-cli` is installed
- `make setup` – `deps + check-cli + build`
- `make build-docs` – `npm run build` (build React app into `docs/`)
- `make serve-docs` – serve `docs/` locally on `http://localhost:3000`

## NPM scripts
- `npm run dev` – Vite dev server
- `npm run build` – Vite build to `docs/`
- `npm run preview` – Vite preview

## Input examples

Raw CBOR hex:
```
84a500878258203b96b4adc176a992791be06e507c5303d2a98e98996afd1360b8fde1ae2e8a1f028258203b96b4adc176a992791be06e507c5303d2a98e98996afd1360b8fde1ae2e8a1f038258203b96b4adc176a992791be06e507c5303d2a98e98996afd1360b8fde1ae2e8a1f048258203b96b4adc176a992791be06e507c5303d2a98e98996afd1360b8fde1ae2e8a1f05825820666b4e3050fb0023417ad6d6b65d03cfa4aae10bfabfa547d7c36c50e937e37701825820668ed40480860348fd76d05e6475505e75576c209ec0610eb718b127657aac5e02825820d95984b2ab677caffb2a7e3d269c91aa86962a69c961ac591be22a249c4a44cc01018282583930628d74845c72fd95d192cc33d7693fbd3b82f584d6a479ceac489d7cd571edb6c04132bd98b83d732d8060771fca3ebcb058727edd6298b3821a0020f328a1581c64c6ea243c3133d44f2022299e74b027f02b1c13397324819e8465c7a14557415045581a0098968082583900480a177321af196c8d4440363aeef0dce9e7cdd7571e003279bc66ff025c632d8ded20a2b5d82356a160d499115e95e6234ba3cc67297aba821b00000001f4b7fbd0a1581c64c6ea243c3133d44f2022299e74b027f02b1c13397324819e8465c7a14557415045581a03197500021a0003422d031a05a9a07a0758202f98483575c0460ede325d872a0aa1a263b997a3b709b8abb87f8cd3a11c0519a0f5d90103a100a101a66164657072696d656266611a0020f328626f66006173837828616464725f74657374317170797135396d6e797868336a6d79646733717276776877377277776e6578283764366174337571706a30783778646c637a7433336a6d723064797a3374746b70723236736b7034781c79657a39306674653372667733756365656630326171796e7233776861746662726964676562747881a36161837828616464725f74657374317172363572686677787730303037637270683865366b766c656b7a71306578286e3768746e6530736b73773479766c6c3068766470387a32757530786d37646a327461333677736c781c78373537703471393439673470723032377836786173773772756664616d1a00989680626e7401
```

Or JSON body for the Go endpoint:
```json
{ "cborHex": "<hex string>" }
```

## Troubleshooting
- **cardano-cli not found (Go mode):** Install Cardano CLI and ensure it is in `PATH`.
- **Invalid/odd-length hex:** Provide a valid, even-length CBOR hex string.
- **WASM init errors:** Ensure Node 18+, `npm install` completed, and reload the page. Vite config includes `vite-plugin-wasm` and `vite-plugin-top-level-await`.
- **Blank page on GitHub Pages:** Ensure `vite.config.ts` has `base: './'` and you are serving from `docs/`.
- **Permission errors (Go mode):** The server writes temp files; ensure it can write to the temp directory.

## Acknowledgments
- `@emurgo/cardano-serialization-lib-browser`
- `github.com/gorilla/mux`
