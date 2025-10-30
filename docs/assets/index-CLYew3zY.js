(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
    new MutationObserver((o) => {
      for (const n of o) if (n.type === "childList") for (const c of n.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function e(o) {
      const n = {};
      return o.integrity && (n.integrity = o.integrity), o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? n.credentials = "include" : o.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
    }
    function s(o) {
      if (o.ep) return;
      o.ep = true;
      const n = e(o);
      fetch(o.href, n);
    }
  })();
  function Sp(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var cd = {
    exports: {}
  }, ys = {}, dd = {
    exports: {}
  }, Q = {};
  var co = Symbol.for("react.element"), Ep = Symbol.for("react.portal"), zp = Symbol.for("react.fragment"), Cp = Symbol.for("react.strict_mode"), Op = Symbol.for("react.profiler"), Lp = Symbol.for("react.provider"), Np = Symbol.for("react.context"), Fp = Symbol.for("react.forward_ref"), Pp = Symbol.for("react.suspense"), Tp = Symbol.for("react.memo"), Rp = Symbol.for("react.lazy"), Gi = Symbol.iterator;
  function $p(r) {
    return r === null || typeof r != "object" ? null : (r = Gi && r[Gi] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var ld = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, pd = Object.assign, ud = {};
  function hn(r, t, e) {
    this.props = r, this.context = t, this.refs = ud, this.updater = e || ld;
  }
  hn.prototype.isReactComponent = {};
  hn.prototype.setState = function(r, t) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, t, "setState");
  };
  hn.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function wd() {
  }
  wd.prototype = hn.prototype;
  function ri(r, t, e) {
    this.props = r, this.context = t, this.refs = ud, this.updater = e || ld;
  }
  var ni = ri.prototype = new wd();
  ni.constructor = ri;
  pd(ni, hn.prototype);
  ni.isPureReactComponent = true;
  var tc = Array.isArray, fd = Object.prototype.hasOwnProperty, oi = {
    current: null
  }, gd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function bd(r, t, e) {
    var s, o = {}, n = null, c = null;
    if (t != null) for (s in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (n = "" + t.key), t) fd.call(t, s) && !gd.hasOwnProperty(s) && (o[s] = t[s]);
    var d = arguments.length - 2;
    if (d === 1) o.children = e;
    else if (1 < d) {
      for (var p = Array(d), l = 0; l < d; l++) p[l] = arguments[l + 2];
      o.children = p;
    }
    if (r && r.defaultProps) for (s in d = r.defaultProps, d) o[s] === void 0 && (o[s] = d[s]);
    return {
      $$typeof: co,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: oi.current
    };
  }
  function Dp(r, t) {
    return {
      $$typeof: co,
      type: r.type,
      key: t,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function si(r) {
    return typeof r == "object" && r !== null && r.$$typeof === co;
  }
  function Up(r) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var ec = /\/+/g;
  function Us(r, t) {
    return typeof r == "object" && r !== null && r.key != null ? Up("" + r.key) : t.toString(36);
  }
  function $o(r, t, e, s, o) {
    var n = typeof r;
    (n === "undefined" || n === "boolean") && (r = null);
    var c = false;
    if (r === null) c = true;
    else switch (n) {
      case "string":
      case "number":
        c = true;
        break;
      case "object":
        switch (r.$$typeof) {
          case co:
          case Ep:
            c = true;
        }
    }
    if (c) return c = r, o = o(c), r = s === "" ? "." + Us(c, 0) : s, tc(o) ? (e = "", r != null && (e = r.replace(ec, "$&/") + "/"), $o(o, t, e, "", function(l) {
      return l;
    })) : o != null && (si(o) && (o = Dp(o, e + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(ec, "$&/") + "/") + r)), t.push(o)), 1;
    if (c = 0, s = s === "" ? "." : s + ":", tc(r)) for (var d = 0; d < r.length; d++) {
      n = r[d];
      var p = s + Us(n, d);
      c += $o(n, t, e, p, o);
    }
    else if (p = $p(r), typeof p == "function") for (r = p.call(r), d = 0; !(n = r.next()).done; ) n = n.value, p = s + Us(n, d++), c += $o(n, t, e, p, o);
    else if (n === "object") throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return c;
  }
  function bo(r, t, e) {
    if (r == null) return r;
    var s = [], o = 0;
    return $o(r, s, "", "", function(n) {
      return t.call(e, n, o++);
    }), s;
  }
  function Ip(r) {
    if (r._status === -1) {
      var t = r._result;
      t = t(), t.then(function(e) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = e);
      }, function(e) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = e);
      }), r._status === -1 && (r._status = 0, r._result = t);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var Tt = {
    current: null
  }, Do = {
    transition: null
  }, Mp = {
    ReactCurrentDispatcher: Tt,
    ReactCurrentBatchConfig: Do,
    ReactCurrentOwner: oi
  };
  function hd() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Q.Children = {
    map: bo,
    forEach: function(r, t, e) {
      bo(r, function() {
        t.apply(this, arguments);
      }, e);
    },
    count: function(r) {
      var t = 0;
      return bo(r, function() {
        t++;
      }), t;
    },
    toArray: function(r) {
      return bo(r, function(t) {
        return t;
      }) || [];
    },
    only: function(r) {
      if (!si(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  };
  Q.Component = hn;
  Q.Fragment = zp;
  Q.Profiler = Op;
  Q.PureComponent = ri;
  Q.StrictMode = Cp;
  Q.Suspense = Pp;
  Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
  Q.act = hd;
  Q.cloneElement = function(r, t, e) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var s = pd({}, r.props), o = r.key, n = r.ref, c = r._owner;
    if (t != null) {
      if (t.ref !== void 0 && (n = t.ref, c = oi.current), t.key !== void 0 && (o = "" + t.key), r.type && r.type.defaultProps) var d = r.type.defaultProps;
      for (p in t) fd.call(t, p) && !gd.hasOwnProperty(p) && (s[p] = t[p] === void 0 && d !== void 0 ? d[p] : t[p]);
    }
    var p = arguments.length - 2;
    if (p === 1) s.children = e;
    else if (1 < p) {
      d = Array(p);
      for (var l = 0; l < p; l++) d[l] = arguments[l + 2];
      s.children = d;
    }
    return {
      $$typeof: co,
      type: r.type,
      key: o,
      ref: n,
      props: s,
      _owner: c
    };
  };
  Q.createContext = function(r) {
    return r = {
      $$typeof: Np,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: Lp,
      _context: r
    }, r.Consumer = r;
  };
  Q.createElement = bd;
  Q.createFactory = function(r) {
    var t = bd.bind(null, r);
    return t.type = r, t;
  };
  Q.createRef = function() {
    return {
      current: null
    };
  };
  Q.forwardRef = function(r) {
    return {
      $$typeof: Fp,
      render: r
    };
  };
  Q.isValidElement = si;
  Q.lazy = function(r) {
    return {
      $$typeof: Rp,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: Ip
    };
  };
  Q.memo = function(r, t) {
    return {
      $$typeof: Tp,
      type: r,
      compare: t === void 0 ? null : t
    };
  };
  Q.startTransition = function(r) {
    var t = Do.transition;
    Do.transition = {};
    try {
      r();
    } finally {
      Do.transition = t;
    }
  };
  Q.unstable_act = hd;
  Q.useCallback = function(r, t) {
    return Tt.current.useCallback(r, t);
  };
  Q.useContext = function(r) {
    return Tt.current.useContext(r);
  };
  Q.useDebugValue = function() {
  };
  Q.useDeferredValue = function(r) {
    return Tt.current.useDeferredValue(r);
  };
  Q.useEffect = function(r, t) {
    return Tt.current.useEffect(r, t);
  };
  Q.useId = function() {
    return Tt.current.useId();
  };
  Q.useImperativeHandle = function(r, t, e) {
    return Tt.current.useImperativeHandle(r, t, e);
  };
  Q.useInsertionEffect = function(r, t) {
    return Tt.current.useInsertionEffect(r, t);
  };
  Q.useLayoutEffect = function(r, t) {
    return Tt.current.useLayoutEffect(r, t);
  };
  Q.useMemo = function(r, t) {
    return Tt.current.useMemo(r, t);
  };
  Q.useReducer = function(r, t, e) {
    return Tt.current.useReducer(r, t, e);
  };
  Q.useRef = function(r) {
    return Tt.current.useRef(r);
  };
  Q.useState = function(r) {
    return Tt.current.useState(r);
  };
  Q.useSyncExternalStore = function(r, t, e) {
    return Tt.current.useSyncExternalStore(r, t, e);
  };
  Q.useTransition = function() {
    return Tt.current.useTransition();
  };
  Q.version = "18.3.1";
  dd.exports = Q;
  var Pe = dd.exports;
  const Wp = Sp(Pe);
  var Qp = Pe, Vp = Symbol.for("react.element"), Bp = Symbol.for("react.fragment"), Ap = Object.prototype.hasOwnProperty, Hp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yp = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function yd(r, t, e) {
    var s, o = {}, n = null, c = null;
    e !== void 0 && (n = "" + e), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (c = t.ref);
    for (s in t) Ap.call(t, s) && !Yp.hasOwnProperty(s) && (o[s] = t[s]);
    if (r && r.defaultProps) for (s in t = r.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
    return {
      $$typeof: Vp,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: Hp.current
    };
  }
  ys.Fragment = Bp;
  ys.jsx = yd;
  ys.jsxs = yd;
  cd.exports = ys;
  var ft = cd.exports, md = {
    exports: {}
  }, Jt = {}, vd = {
    exports: {}
  }, kd = {};
  (function(r) {
    function t(D, M) {
      var W = D.length;
      D.push(M);
      t: for (; 0 < W; ) {
        var st = W - 1 >>> 1, wt = D[st];
        if (0 < o(wt, M)) D[st] = M, D[W] = wt, W = st;
        else break t;
      }
    }
    function e(D) {
      return D.length === 0 ? null : D[0];
    }
    function s(D) {
      if (D.length === 0) return null;
      var M = D[0], W = D.pop();
      if (W !== M) {
        D[0] = W;
        t: for (var st = 0, wt = D.length, fo = wt >>> 1; st < fo; ) {
          var pr = 2 * (st + 1) - 1, Ds = D[pr], ur = pr + 1, go = D[ur];
          if (0 > o(Ds, W)) ur < wt && 0 > o(go, Ds) ? (D[st] = go, D[ur] = W, st = ur) : (D[st] = Ds, D[pr] = W, st = pr);
          else if (ur < wt && 0 > o(go, W)) D[st] = go, D[ur] = W, st = ur;
          else break t;
        }
      }
      return M;
    }
    function o(D, M) {
      var W = D.sortIndex - M.sortIndex;
      return W !== 0 ? W : D.id - M.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var n = performance;
      r.unstable_now = function() {
        return n.now();
      };
    } else {
      var c = Date, d = c.now();
      r.unstable_now = function() {
        return c.now() - d;
      };
    }
    var p = [], l = [], m = 1, x = null, k = 3, z = false, L = false, N = false, V = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(D) {
      for (var M = e(l); M !== null; ) {
        if (M.callback === null) s(l);
        else if (M.startTime <= D) s(l), M.sortIndex = M.expirationTime, t(p, M);
        else break;
        M = e(l);
      }
    }
    function E(D) {
      if (N = false, v(D), !L) if (e(p) !== null) L = true, Rs(F);
      else {
        var M = e(l);
        M !== null && $s(E, M.startTime - D);
      }
    }
    function F(D, M) {
      L = false, N && (N = false, y($), $ = -1), z = true;
      var W = k;
      try {
        for (v(M), x = e(p); x !== null && (!(x.expirationTime > M) || D && !it()); ) {
          var st = x.callback;
          if (typeof st == "function") {
            x.callback = null, k = x.priorityLevel;
            var wt = st(x.expirationTime <= M);
            M = r.unstable_now(), typeof wt == "function" ? x.callback = wt : x === e(p) && s(p), v(M);
          } else s(p);
          x = e(p);
        }
        if (x !== null) var fo = true;
        else {
          var pr = e(l);
          pr !== null && $s(E, pr.startTime - M), fo = false;
        }
        return fo;
      } finally {
        x = null, k = W, z = false;
      }
    }
    var T = false, P = null, $ = -1, H = 5, U = -1;
    function it() {
      return !(r.unstable_now() - U < H);
    }
    function At() {
      if (P !== null) {
        var D = r.unstable_now();
        U = D;
        var M = true;
        try {
          M = P(true, D);
        } finally {
          M ? Le() : (T = false, P = null);
        }
      } else T = false;
    }
    var Le;
    if (typeof b == "function") Le = function() {
      b(At);
    };
    else if (typeof MessageChannel < "u") {
      var Ji = new MessageChannel(), jp = Ji.port2;
      Ji.port1.onmessage = At, Le = function() {
        jp.postMessage(null);
      };
    } else Le = function() {
      V(At, 0);
    };
    function Rs(D) {
      P = D, T || (T = true, Le());
    }
    function $s(D, M) {
      $ = V(function() {
        D(r.unstable_now());
      }, M);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, r.unstable_continueExecution = function() {
      L || z || (L = true, Rs(F));
    }, r.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < D ? Math.floor(1e3 / D) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return e(p);
    }, r.unstable_next = function(D) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = k;
      }
      var W = k;
      k = M;
      try {
        return D();
      } finally {
        k = W;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(D, M) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var W = k;
      k = D;
      try {
        return M();
      } finally {
        k = W;
      }
    }, r.unstable_scheduleCallback = function(D, M, W) {
      var st = r.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? st + W : st) : W = st, D) {
        case 1:
          var wt = -1;
          break;
        case 2:
          wt = 250;
          break;
        case 5:
          wt = 1073741823;
          break;
        case 4:
          wt = 1e4;
          break;
        default:
          wt = 5e3;
      }
      return wt = W + wt, D = {
        id: m++,
        callback: M,
        priorityLevel: D,
        startTime: W,
        expirationTime: wt,
        sortIndex: -1
      }, W > st ? (D.sortIndex = W, t(l, D), e(p) === null && D === e(l) && (N ? (y($), $ = -1) : N = true, $s(E, W - st))) : (D.sortIndex = wt, t(p, D), L || z || (L = true, Rs(F))), D;
    }, r.unstable_shouldYield = it, r.unstable_wrapCallback = function(D) {
      var M = k;
      return function() {
        var W = k;
        k = M;
        try {
          return D.apply(this, arguments);
        } finally {
          k = W;
        }
      };
    };
  })(kd);
  vd.exports = kd;
  var qp = vd.exports;
  var Xp = Pe, Kt = qp;
  function C(r) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xd = /* @__PURE__ */ new Set(), An = {};
  function Ir(r, t) {
    ln(r, t), ln(r + "Capture", t);
  }
  function ln(r, t) {
    for (An[r] = t, r = 0; r < t.length; r++) xd.add(t[r]);
  }
  var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), da = Object.prototype.hasOwnProperty, Kp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _c = {}, rc = {};
  function Zp(r) {
    return da.call(rc, r) ? true : da.call(_c, r) ? false : Kp.test(r) ? rc[r] = true : (_c[r] = true, false);
  }
  function Jp(r, t, e, s) {
    if (e !== null && e.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return s ? false : e !== null ? !e.acceptsBooleans : (r = r.toLowerCase().slice(0, 5), r !== "data-" && r !== "aria-");
      default:
        return false;
    }
  }
  function Gp(r, t, e, s) {
    if (t === null || typeof t > "u" || Jp(r, t, e, s)) return true;
    if (s) return false;
    if (e !== null) switch (e.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function Rt(r, t, e, s, o, n, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = n, this.removeEmptyString = c;
  }
  var kt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    kt[r] = new Rt(r, 0, false, r, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(r) {
    var t = r[0];
    kt[t] = new Rt(t, 1, false, r[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 2, false, r.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    kt[r] = new Rt(r, 3, false, r.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 3, true, r, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 4, false, r, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 6, false, r, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var ai = /[\-:]([a-z])/g;
  function ii(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var t = r.replace(ai, ii);
    kt[t] = new Rt(t, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var t = r.replace(ai, ii);
    kt[t] = new Rt(t, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(r) {
    var t = r.replace(ai, ii);
    kt[t] = new Rt(t, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 1, false, r.toLowerCase(), null, false, false);
  });
  kt.xlinkHref = new Rt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(r) {
    kt[r] = new Rt(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function ci(r, t, e, s) {
    var o = kt.hasOwnProperty(t) ? kt[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gp(t, e, o, s) && (e = null), s || o === null ? Zp(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : o.mustUseProperty ? r[o.propertyName] = e === null ? o.type === 3 ? false : "" : e : (t = o.attributeName, s = o.attributeNamespace, e === null ? r.removeAttribute(t) : (o = o.type, e = o === 3 || o === 4 && e === true ? "" : "" + e, s ? r.setAttributeNS(s, t, e) : r.setAttribute(t, e))));
  }
  var e_ = Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ho = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), Br = Symbol.for("react.fragment"), di = Symbol.for("react.strict_mode"), la = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), Sd = Symbol.for("react.context"), li = Symbol.for("react.forward_ref"), pa = Symbol.for("react.suspense"), ua = Symbol.for("react.suspense_list"), pi = Symbol.for("react.memo"), n_ = Symbol.for("react.lazy"), Ed = Symbol.for("react.offscreen"), nc = Symbol.iterator;
  function vn(r) {
    return r === null || typeof r != "object" ? null : (r = nc && r[nc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var rt = Object.assign, Is;
  function On(r) {
    if (Is === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Is = t && t[1] || "";
    }
    return `
` + Is + r;
  }
  var Ms = false;
  function Ws(r, t) {
    if (!r || Ms) return "";
    Ms = true;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (l) {
          var s = l;
        }
        Reflect.construct(r, [], t);
      } else {
        try {
          t.call();
        } catch (l) {
          s = l;
        }
        r.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          s = l;
        }
        r();
      }
    } catch (l) {
      if (l && s && typeof l.stack == "string") {
        for (var o = l.stack.split(`
`), n = s.stack.split(`
`), c = o.length - 1, d = n.length - 1; 1 <= c && 0 <= d && o[c] !== n[d]; ) d--;
        for (; 1 <= c && 0 <= d; c--, d--) if (o[c] !== n[d]) {
          if (c !== 1 || d !== 1) do
            if (c--, d--, 0 > d || o[c] !== n[d]) {
              var p = `
` + o[c].replace(" at new ", " at ");
              return r.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", r.displayName)), p;
            }
          while (1 <= c && 0 <= d);
          break;
        }
      }
    } finally {
      Ms = false, Error.prepareStackTrace = e;
    }
    return (r = r ? r.displayName || r.name : "") ? On(r) : "";
  }
  function tu(r) {
    switch (r.tag) {
      case 5:
        return On(r.type);
      case 16:
        return On("Lazy");
      case 13:
        return On("Suspense");
      case 19:
        return On("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = Ws(r.type, false), r;
      case 11:
        return r = Ws(r.type.render, false), r;
      case 1:
        return r = Ws(r.type, true), r;
      default:
        return "";
    }
  }
  function wa(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case Br:
        return "Fragment";
      case Vr:
        return "Portal";
      case la:
        return "Profiler";
      case di:
        return "StrictMode";
      case pa:
        return "Suspense";
      case ua:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case Sd:
        return (r.displayName || "Context") + ".Consumer";
      case jd:
        return (r._context.displayName || "Context") + ".Provider";
      case li:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case pi:
        return t = r.displayName || null, t !== null ? t : wa(r.type) || "Memo";
      case n_:
        t = r._payload, r = r._init;
        try {
          return wa(r(t));
        } catch {
        }
    }
    return null;
  }
  function eu(r) {
    var t = r.type;
    switch (r.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return r = t.render, r = r.displayName || r.name || "", t.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return wa(t);
      case 8:
        return t === di ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ar(r) {
    switch (typeof r) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return r;
      case "object":
        return r;
      default:
        return "";
    }
  }
  function zd(r) {
    var t = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function _u(r) {
    var t = zd(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), s = "" + r[t];
    if (!r.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var o = e.get, n = e.set;
      return Object.defineProperty(r, t, {
        configurable: true,
        get: function() {
          return o.call(this);
        },
        set: function(c) {
          s = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(r, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return s;
        },
        setValue: function(c) {
          s = "" + c;
        },
        stopTracking: function() {
          r._valueTracker = null, delete r[t];
        }
      };
    }
  }
  function yo(r) {
    r._valueTracker || (r._valueTracker = _u(r));
  }
  function Cd(r) {
    if (!r) return false;
    var t = r._valueTracker;
    if (!t) return true;
    var e = t.getValue(), s = "";
    return r && (s = zd(r) ? r.checked ? "true" : "false" : r.value), r = s, r !== e ? (t.setValue(r), true) : false;
  }
  function Xo(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function fa(r, t) {
    var e = t.checked;
    return rt({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: e ?? r._wrapperState.initialChecked
    });
  }
  function oc(r, t) {
    var e = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    e = ar(t.value != null ? t.value : e), r._wrapperState = {
      initialChecked: s,
      initialValue: e,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Od(r, t) {
    t = t.checked, t != null && ci(r, "checked", t, false);
  }
  function ga(r, t) {
    Od(r, t);
    var e = ar(t.value), s = t.type;
    if (e != null) s === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
    else if (s === "submit" || s === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ba(r, t.type, e) : t.hasOwnProperty("defaultValue") && ba(r, t.type, ar(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function sc(r, t, e) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
    }
    e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
  }
  function ba(r, t, e) {
    (t !== "number" || Xo(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
  }
  var Ln = Array.isArray;
  function _n(r, t, e, s) {
    if (r = r.options, t) {
      t = {};
      for (var o = 0; o < e.length; o++) t["$" + e[o]] = true;
      for (e = 0; e < r.length; e++) o = t.hasOwnProperty("$" + r[e].value), r[e].selected !== o && (r[e].selected = o), o && s && (r[e].defaultSelected = true);
    } else {
      for (e = "" + ar(e), t = null, o = 0; o < r.length; o++) {
        if (r[o].value === e) {
          r[o].selected = true, s && (r[o].defaultSelected = true);
          return;
        }
        t !== null || r[o].disabled || (t = r[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function ha(r, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return rt({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue
    });
  }
  function ac(r, t) {
    var e = t.value;
    if (e == null) {
      if (e = t.children, t = t.defaultValue, e != null) {
        if (t != null) throw Error(C(92));
        if (Ln(e)) {
          if (1 < e.length) throw Error(C(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), e = t;
    }
    r._wrapperState = {
      initialValue: ar(e)
    };
  }
  function Ld(r, t) {
    var e = ar(t.value), s = ar(t.defaultValue);
    e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), s != null && (r.defaultValue = "" + s);
  }
  function ic(r) {
    var t = r.textContent;
    t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
  }
  function Nd(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ya(r, t) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? Nd(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var mo, Fd = function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, e, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(t, e, s, o);
      });
    } : r;
  }(function(r, t) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = t;
    else {
      for (mo = mo || document.createElement("div"), mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mo.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; t.firstChild; ) r.appendChild(t.firstChild);
    }
  });
  function Hn(r, t) {
    if (t) {
      var e = r.firstChild;
      if (e && e === r.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    r.textContent = t;
  }
  var Pn = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, ru = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(Pn).forEach(function(r) {
    ru.forEach(function(t) {
      t = t + r.charAt(0).toUpperCase() + r.substring(1), Pn[t] = Pn[r];
    });
  });
  function Pd(r, t, e) {
    return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || Pn.hasOwnProperty(r) && Pn[r] ? ("" + t).trim() : t + "px";
  }
  function Td(r, t) {
    r = r.style;
    for (var e in t) if (t.hasOwnProperty(e)) {
      var s = e.indexOf("--") === 0, o = Pd(e, t[e], s);
      e === "float" && (e = "cssFloat"), s ? r.setProperty(e, o) : r[e] = o;
    }
  }
  var nu = rt({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function ma(r, t) {
    if (t) {
      if (nu[r] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, r));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(C(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(C(62));
    }
  }
  function va(r, t) {
    if (r.indexOf("-") === -1) return typeof t.is == "string";
    switch (r) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ka = null;
  function ui(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var xa = null, rn = null, nn = null;
  function cc(r) {
    if (r = uo(r)) {
      if (typeof xa != "function") throw Error(C(280));
      var t = r.stateNode;
      t && (t = js(t), xa(r.stateNode, r.type, t));
    }
  }
  function Rd(r) {
    rn ? nn ? nn.push(r) : nn = [
      r
    ] : rn = r;
  }
  function $d() {
    if (rn) {
      var r = rn, t = nn;
      if (nn = rn = null, cc(r), t) for (r = 0; r < t.length; r++) cc(t[r]);
    }
  }
  function Dd(r, t) {
    return r(t);
  }
  function Ud() {
  }
  var Qs = false;
  function Id(r, t, e) {
    if (Qs) return r(t, e);
    Qs = true;
    try {
      return Dd(r, t, e);
    } finally {
      Qs = false, (rn !== null || nn !== null) && (Ud(), $d());
    }
  }
  function Yn(r, t) {
    var e = r.stateNode;
    if (e === null) return null;
    var s = js(e);
    if (s === null) return null;
    e = s[t];
    t: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (s = !s.disabled) || (r = r.type, s = !(r === "button" || r === "input" || r === "select" || r === "textarea")), r = !s;
        break t;
      default:
        r = false;
    }
    if (r) return null;
    if (e && typeof e != "function") throw Error(C(231, t, typeof e));
    return e;
  }
  var ja = false;
  if (Ze) try {
    var kn = {};
    Object.defineProperty(kn, "passive", {
      get: function() {
        ja = true;
      }
    }), window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    ja = false;
  }
  function ou(r, t, e, s, o, n, c, d, p) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(e, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Tn = false, Ko = null, Zo = false, Sa = null, su = {
    onError: function(r) {
      Tn = true, Ko = r;
    }
  };
  function au(r, t, e, s, o, n, c, d, p) {
    Tn = false, Ko = null, ou.apply(su, arguments);
  }
  function iu(r, t, e, s, o, n, c, d, p) {
    if (au.apply(this, arguments), Tn) {
      if (Tn) {
        var l = Ko;
        Tn = false, Ko = null;
      } else throw Error(C(198));
      Zo || (Zo = true, Sa = l);
    }
  }
  function Mr(r) {
    var t = r, e = r;
    if (r.alternate) for (; t.return; ) t = t.return;
    else {
      r = t;
      do
        t = r, t.flags & 4098 && (e = t.return), r = t.return;
      while (r);
    }
    return t.tag === 3 ? e : null;
  }
  function Md(r) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function dc(r) {
    if (Mr(r) !== r) throw Error(C(188));
  }
  function cu(r) {
    var t = r.alternate;
    if (!t) {
      if (t = Mr(r), t === null) throw Error(C(188));
      return t !== r ? null : r;
    }
    for (var e = r, s = t; ; ) {
      var o = e.return;
      if (o === null) break;
      var n = o.alternate;
      if (n === null) {
        if (s = o.return, s !== null) {
          e = s;
          continue;
        }
        break;
      }
      if (o.child === n.child) {
        for (n = o.child; n; ) {
          if (n === e) return dc(o), r;
          if (n === s) return dc(o), t;
          n = n.sibling;
        }
        throw Error(C(188));
      }
      if (e.return !== s.return) e = o, s = n;
      else {
        for (var c = false, d = o.child; d; ) {
          if (d === e) {
            c = true, e = o, s = n;
            break;
          }
          if (d === s) {
            c = true, s = o, e = n;
            break;
          }
          d = d.sibling;
        }
        if (!c) {
          for (d = n.child; d; ) {
            if (d === e) {
              c = true, e = n, s = o;
              break;
            }
            if (d === s) {
              c = true, s = n, e = o;
              break;
            }
            d = d.sibling;
          }
          if (!c) throw Error(C(189));
        }
      }
      if (e.alternate !== s) throw Error(C(190));
    }
    if (e.tag !== 3) throw Error(C(188));
    return e.stateNode.current === e ? r : t;
  }
  function Wd(r) {
    return r = cu(r), r !== null ? Qd(r) : null;
  }
  function Qd(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var t = Qd(r);
      if (t !== null) return t;
      r = r.sibling;
    }
    return null;
  }
  var Vd = Kt.unstable_scheduleCallback, lc = Kt.unstable_cancelCallback, du = Kt.unstable_shouldYield, lu = Kt.unstable_requestPaint, at = Kt.unstable_now, pu = Kt.unstable_getCurrentPriorityLevel, wi = Kt.unstable_ImmediatePriority, Bd = Kt.unstable_UserBlockingPriority, Jo = Kt.unstable_NormalPriority, uu = Kt.unstable_LowPriority, Ad = Kt.unstable_IdlePriority, ms = null, Ee = null;
  function wu(r) {
    if (Ee && typeof Ee.onCommitFiberRoot == "function") try {
      Ee.onCommitFiberRoot(ms, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var we = Math.clz32 ? Math.clz32 : bu, fu = Math.log, gu = Math.LN2;
  function bu(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (fu(r) / gu | 0) | 0;
  }
  var vo = 64, ko = 4194304;
  function Nn(r) {
    switch (r & -r) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return r & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return r;
    }
  }
  function Go(r, t) {
    var e = r.pendingLanes;
    if (e === 0) return 0;
    var s = 0, o = r.suspendedLanes, n = r.pingedLanes, c = e & 268435455;
    if (c !== 0) {
      var d = c & ~o;
      d !== 0 ? s = Nn(d) : (n &= c, n !== 0 && (s = Nn(n)));
    } else c = e & ~o, c !== 0 ? s = Nn(c) : n !== 0 && (s = Nn(n));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & o) && (o = s & -s, n = t & -t, o >= n || o === 16 && (n & 4194240) !== 0)) return t;
    if (s & 4 && (s |= e & 16), t = r.entangledLanes, t !== 0) for (r = r.entanglements, t &= s; 0 < t; ) e = 31 - we(t), o = 1 << e, s |= r[e], t &= ~o;
    return s;
  }
  function hu(r, t) {
    switch (r) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yu(r, t) {
    for (var e = r.suspendedLanes, s = r.pingedLanes, o = r.expirationTimes, n = r.pendingLanes; 0 < n; ) {
      var c = 31 - we(n), d = 1 << c, p = o[c];
      p === -1 ? (!(d & e) || d & s) && (o[c] = hu(d, t)) : p <= t && (r.expiredLanes |= d), n &= ~d;
    }
  }
  function Ea(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function Hd() {
    var r = vo;
    return vo <<= 1, !(vo & 4194240) && (vo = 64), r;
  }
  function Vs(r) {
    for (var t = [], e = 0; 31 > e; e++) t.push(r);
    return t;
  }
  function lo(r, t, e) {
    r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - we(t), r[t] = e;
  }
  function mu(r, t) {
    var e = r.pendingLanes & ~t;
    r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
    var s = r.eventTimes;
    for (r = r.expirationTimes; 0 < e; ) {
      var o = 31 - we(e), n = 1 << o;
      t[o] = 0, s[o] = -1, r[o] = -1, e &= ~n;
    }
  }
  function fi(r, t) {
    var e = r.entangledLanes |= t;
    for (r = r.entanglements; e; ) {
      var s = 31 - we(e), o = 1 << s;
      o & t | r[s] & t && (r[s] |= t), e &= ~o;
    }
  }
  var Y = 0;
  function Yd(r) {
    return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qd, gi, Xd, Kd, Zd, za = false, xo = [], G_ = null, tr = null, er = null, qn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), a_ = [], vu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function pc(r, t) {
    switch (r) {
      case "focusin":
      case "focusout":
        G_ = null;
        break;
      case "dragenter":
      case "dragleave":
        tr = null;
        break;
      case "mouseover":
      case "mouseout":
        er = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }
  function xn(r, t, e, s, o, n) {
    return r === null || r.nativeEvent !== n ? (r = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: s,
      nativeEvent: n,
      targetContainers: [
        o
      ]
    }, t !== null && (t = uo(t), t !== null && gi(t)), r) : (r.eventSystemFlags |= s, t = r.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), r);
  }
  function ku(r, t, e, s, o) {
    switch (t) {
      case "focusin":
        return G_ = xn(G_, r, t, e, s, o), true;
      case "dragenter":
        return tr = xn(tr, r, t, e, s, o), true;
      case "mouseover":
        return er = xn(er, r, t, e, s, o), true;
      case "pointerover":
        var n = o.pointerId;
        return qn.set(n, xn(qn.get(n) || null, r, t, e, s, o)), true;
      case "gotpointercapture":
        return n = o.pointerId, Xn.set(n, xn(Xn.get(n) || null, r, t, e, s, o)), true;
    }
    return false;
  }
  function Jd(r) {
    var t = yr(r.target);
    if (t !== null) {
      var e = Mr(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = Md(e), t !== null) {
            r.blockedOn = t, Zd(r.priority, function() {
              Xd(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          r.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    r.blockedOn = null;
  }
  function Uo(r) {
    if (r.blockedOn !== null) return false;
    for (var t = r.targetContainers; 0 < t.length; ) {
      var e = Ca(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
      if (e === null) {
        e = r.nativeEvent;
        var s = new e.constructor(e.type, e);
        ka = s, e.target.dispatchEvent(s), ka = null;
      } else return t = uo(e), t !== null && gi(t), r.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function uc(r, t, e) {
    Uo(r) && e.delete(t);
  }
  function xu() {
    za = false, G_ !== null && Uo(G_) && (G_ = null), tr !== null && Uo(tr) && (tr = null), er !== null && Uo(er) && (er = null), qn.forEach(uc), Xn.forEach(uc);
  }
  function jn(r, t) {
    r.blockedOn === t && (r.blockedOn = null, za || (za = true, Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority, xu)));
  }
  function Kn(r) {
    function t(o) {
      return jn(o, r);
    }
    if (0 < xo.length) {
      jn(xo[0], r);
      for (var e = 1; e < xo.length; e++) {
        var s = xo[e];
        s.blockedOn === r && (s.blockedOn = null);
      }
    }
    for (G_ !== null && jn(G_, r), tr !== null && jn(tr, r), er !== null && jn(er, r), qn.forEach(t), Xn.forEach(t), e = 0; e < a_.length; e++) s = a_[e], s.blockedOn === r && (s.blockedOn = null);
    for (; 0 < a_.length && (e = a_[0], e.blockedOn === null); ) Jd(e), e.blockedOn === null && a_.shift();
  }
  var on = e_.ReactCurrentBatchConfig, ts = true;
  function ju(r, t, e, s) {
    var o = Y, n = on.transition;
    on.transition = null;
    try {
      Y = 1, bi(r, t, e, s);
    } finally {
      Y = o, on.transition = n;
    }
  }
  function Su(r, t, e, s) {
    var o = Y, n = on.transition;
    on.transition = null;
    try {
      Y = 4, bi(r, t, e, s);
    } finally {
      Y = o, on.transition = n;
    }
  }
  function bi(r, t, e, s) {
    if (ts) {
      var o = Ca(r, t, e, s);
      if (o === null) Gs(r, t, s, es, e), pc(r, s);
      else if (ku(o, r, t, e, s)) s.stopPropagation();
      else if (pc(r, s), t & 4 && -1 < vu.indexOf(r)) {
        for (; o !== null; ) {
          var n = uo(o);
          if (n !== null && qd(n), n = Ca(r, t, e, s), n === null && Gs(r, t, s, es, e), n === o) break;
          o = n;
        }
        o !== null && s.stopPropagation();
      } else Gs(r, t, s, null, e);
    }
  }
  var es = null;
  function Ca(r, t, e, s) {
    if (es = null, r = ui(s), r = yr(r), r !== null) if (t = Mr(r), t === null) r = null;
    else if (e = t.tag, e === 13) {
      if (r = Md(t), r !== null) return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else t !== r && (r = null);
    return es = r, null;
  }
  function Gd(r) {
    switch (r) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (pu()) {
          case wi:
            return 1;
          case Bd:
            return 4;
          case Jo:
          case uu:
            return 16;
          case Ad:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var X_ = null, hi = null, Io = null;
  function tl() {
    if (Io) return Io;
    var r, t = hi, e = t.length, s, o = "value" in X_ ? X_.value : X_.textContent, n = o.length;
    for (r = 0; r < e && t[r] === o[r]; r++) ;
    var c = e - r;
    for (s = 1; s <= c && t[e - s] === o[n - s]; s++) ;
    return Io = o.slice(r, 1 < s ? 1 - s : void 0);
  }
  function Mo(r) {
    var t = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && t === 13 && (r = 13)) : r = t, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function jo() {
    return true;
  }
  function wc() {
    return false;
  }
  function Gt(r) {
    function t(e, s, o, n, c) {
      this._reactName = e, this._targetInst = o, this.type = s, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var d in r) r.hasOwnProperty(d) && (e = r[d], this[d] = e ? e(n) : n[d]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? jo : wc, this.isPropagationStopped = wc, this;
    }
    return rt(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = jo);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = jo);
      },
      persist: function() {
      },
      isPersistent: jo
    }), t;
  }
  var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yi = Gt(yn), po = rt({}, yn, {
    view: 0,
    detail: 0
  }), Eu = Gt(po), Bs, As, Sn, vs = rt({}, po, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mi,
    button: 0,
    buttons: 0,
    relatedTarget: function(r) {
      return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
    },
    movementX: function(r) {
      return "movementX" in r ? r.movementX : (r !== Sn && (Sn && r.type === "mousemove" ? (Bs = r.screenX - Sn.screenX, As = r.screenY - Sn.screenY) : As = Bs = 0, Sn = r), Bs);
    },
    movementY: function(r) {
      return "movementY" in r ? r.movementY : As;
    }
  }), fc = Gt(vs), zu = rt({}, vs, {
    dataTransfer: 0
  }), Cu = Gt(zu), Ou = rt({}, po, {
    relatedTarget: 0
  }), Hs = Gt(Ou), Lu = rt({}, yn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nu = Gt(Lu), Fu = rt({}, yn, {
    clipboardData: function(r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    }
  }), Pu = Gt(Fu), Tu = rt({}, yn, {
    data: 0
  }), gc = Gt(Tu), Ru = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, $u = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Du = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Uu(r) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(r) : (r = Du[r]) ? !!t[r] : false;
  }
  function mi() {
    return Uu;
  }
  var Iu = rt({}, po, {
    key: function(r) {
      if (r.key) {
        var t = Ru[r.key] || r.key;
        if (t !== "Unidentified") return t;
      }
      return r.type === "keypress" ? (r = Mo(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? $u[r.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mi,
    charCode: function(r) {
      return r.type === "keypress" ? Mo(r) : 0;
    },
    keyCode: function(r) {
      return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    },
    which: function(r) {
      return r.type === "keypress" ? Mo(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    }
  }), Mu = Gt(Iu), Wu = rt({}, vs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bc = Gt(Wu), Qu = rt({}, po, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi
  }), Vu = Gt(Qu), Bu = rt({}, yn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Au = Gt(Bu), Hu = rt({}, vs, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yu = Gt(Hu), qu = [
    9,
    13,
    27,
    32
  ], vi = Ze && "CompositionEvent" in window, Rn = null;
  Ze && "documentMode" in document && (Rn = document.documentMode);
  var Xu = Ze && "TextEvent" in window && !Rn, el = Ze && (!vi || Rn && 8 < Rn && 11 >= Rn), hc = " ", yc = false;
  function _l(r, t) {
    switch (r) {
      case "keyup":
        return qu.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function rl(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var Ar = false;
  function Ku(r, t) {
    switch (r) {
      case "compositionend":
        return rl(t);
      case "keypress":
        return t.which !== 32 ? null : (yc = true, hc);
      case "textInput":
        return r = t.data, r === hc && yc ? null : r;
      default:
        return null;
    }
  }
  function Zu(r, t) {
    if (Ar) return r === "compositionend" || !vi && _l(r, t) ? (r = tl(), Io = hi = X_ = null, Ar = false, r) : null;
    switch (r) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return el && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ju = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function mc(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t === "input" ? !!Ju[r.type] : t === "textarea";
  }
  function nl(r, t, e, s) {
    Rd(s), t = _s(t, "onChange"), 0 < t.length && (e = new yi("onChange", "change", null, e, s), r.push({
      event: e,
      listeners: t
    }));
  }
  var $n = null, Zn = null;
  function Gu(r) {
    fl(r, 0);
  }
  function ks(r) {
    var t = qr(r);
    if (Cd(t)) return r;
  }
  function tw(r, t) {
    if (r === "change") return t;
  }
  var ol = false;
  if (Ze) {
    var Ys;
    if (Ze) {
      var qs = "oninput" in document;
      if (!qs) {
        var vc = document.createElement("div");
        vc.setAttribute("oninput", "return;"), qs = typeof vc.oninput == "function";
      }
      Ys = qs;
    } else Ys = false;
    ol = Ys && (!document.documentMode || 9 < document.documentMode);
  }
  function kc() {
    $n && ($n.detachEvent("onpropertychange", sl), Zn = $n = null);
  }
  function sl(r) {
    if (r.propertyName === "value" && ks(Zn)) {
      var t = [];
      nl(t, Zn, r, ui(r)), Id(Gu, t);
    }
  }
  function ew(r, t, e) {
    r === "focusin" ? (kc(), $n = t, Zn = e, $n.attachEvent("onpropertychange", sl)) : r === "focusout" && kc();
  }
  function _w(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return ks(Zn);
  }
  function rw(r, t) {
    if (r === "click") return ks(t);
  }
  function nw(r, t) {
    if (r === "input" || r === "change") return ks(t);
  }
  function ow(r, t) {
    return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
  }
  var ge = typeof Object.is == "function" ? Object.is : ow;
  function Jn(r, t) {
    if (ge(r, t)) return true;
    if (typeof r != "object" || r === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(r), s = Object.keys(t);
    if (e.length !== s.length) return false;
    for (s = 0; s < e.length; s++) {
      var o = e[s];
      if (!da.call(t, o) || !ge(r[o], t[o])) return false;
    }
    return true;
  }
  function xc(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function jc(r, t) {
    var e = xc(r);
    r = 0;
    for (var s; e; ) {
      if (e.nodeType === 3) {
        if (s = r + e.textContent.length, r <= t && s >= t) return {
          node: e,
          offset: t - r
        };
        r = s;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = xc(e);
    }
  }
  function al(r, t) {
    return r && t ? r === t ? true : r && r.nodeType === 3 ? false : t && t.nodeType === 3 ? al(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : false : false;
  }
  function il() {
    for (var r = window, t = Xo(); t instanceof r.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) r = t.contentWindow;
      else break;
      t = Xo(r.document);
    }
    return t;
  }
  function ki(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
  }
  function sw(r) {
    var t = il(), e = r.focusedElem, s = r.selectionRange;
    if (t !== e && e && e.ownerDocument && al(e.ownerDocument.documentElement, e)) {
      if (s !== null && ki(e)) {
        if (t = s.start, r = s.end, r === void 0 && (r = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
        else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var o = e.textContent.length, n = Math.min(s.start, o);
          s = s.end === void 0 ? n : Math.min(s.end, o), !r.extend && n > s && (o = s, s = n, n = o), o = jc(e, n);
          var c = jc(e, s);
          o && c && (r.rangeCount !== 1 || r.anchorNode !== o.node || r.anchorOffset !== o.offset || r.focusNode !== c.node || r.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), r.removeAllRanges(), n > s ? (r.addRange(t), r.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), r.addRange(t)));
        }
      }
      for (t = [], r = e; r = r.parentNode; ) r.nodeType === 1 && t.push({
        element: r,
        left: r.scrollLeft,
        top: r.scrollTop
      });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++) r = t[e], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }
  }
  var aw = Ze && "documentMode" in document && 11 >= document.documentMode, Hr = null, Oa = null, Dn = null, La = false;
  function Sc(r, t, e) {
    var s = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    La || Hr == null || Hr !== Xo(s) || (s = Hr, "selectionStart" in s && ki(s) ? s = {
      start: s.selectionStart,
      end: s.selectionEnd
    } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Dn && Jn(Dn, s) || (Dn = s, s = _s(Oa, "onSelect"), 0 < s.length && (t = new yi("onSelect", "select", null, t, e), r.push({
      event: t,
      listeners: s
    }), t.target = Hr)));
  }
  function So(r, t) {
    var e = {};
    return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
  }
  var Yr = {
    animationend: So("Animation", "AnimationEnd"),
    animationiteration: So("Animation", "AnimationIteration"),
    animationstart: So("Animation", "AnimationStart"),
    transitionend: So("Transition", "TransitionEnd")
  }, Xs = {}, cl = {};
  Ze && (cl = document.createElement("div").style, "AnimationEvent" in window || (delete Yr.animationend.animation, delete Yr.animationiteration.animation, delete Yr.animationstart.animation), "TransitionEvent" in window || delete Yr.transitionend.transition);
  function xs(r) {
    if (Xs[r]) return Xs[r];
    if (!Yr[r]) return r;
    var t = Yr[r], e;
    for (e in t) if (t.hasOwnProperty(e) && e in cl) return Xs[r] = t[e];
    return r;
  }
  var dl = xs("animationend"), ll = xs("animationiteration"), pl = xs("animationstart"), ul = xs("transitionend"), wl = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function cr(r, t) {
    wl.set(r, t), Ir(t, [
      r
    ]);
  }
  for (var Ks = 0; Ks < Ec.length; Ks++) {
    var Zs = Ec[Ks], iw = Zs.toLowerCase(), cw = Zs[0].toUpperCase() + Zs.slice(1);
    cr(iw, "on" + cw);
  }
  cr(dl, "onAnimationEnd");
  cr(ll, "onAnimationIteration");
  cr(pl, "onAnimationStart");
  cr("dblclick", "onDoubleClick");
  cr("focusin", "onFocus");
  cr("focusout", "onBlur");
  cr(ul, "onTransitionEnd");
  ln("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  ln("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  ln("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  ln("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Ir("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
  function zc(r, t, e) {
    var s = r.type || "unknown-event";
    r.currentTarget = e, iu(s, t, void 0, r), r.currentTarget = null;
  }
  function fl(r, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < r.length; e++) {
      var s = r[e], o = s.event;
      s = s.listeners;
      t: {
        var n = void 0;
        if (t) for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c], p = d.instance, l = d.currentTarget;
          if (d = d.listener, p !== n && o.isPropagationStopped()) break t;
          zc(o, d, l), n = p;
        }
        else for (c = 0; c < s.length; c++) {
          if (d = s[c], p = d.instance, l = d.currentTarget, d = d.listener, p !== n && o.isPropagationStopped()) break t;
          zc(o, d, l), n = p;
        }
      }
    }
    if (Zo) throw r = Sa, Zo = false, Sa = null, r;
  }
  function K(r, t) {
    var e = t[Ra];
    e === void 0 && (e = t[Ra] = /* @__PURE__ */ new Set());
    var s = r + "__bubble";
    e.has(s) || (gl(t, r, 2, false), e.add(s));
  }
  function Js(r, t, e) {
    var s = 0;
    t && (s |= 4), gl(e, r, s, t);
  }
  var Eo = "_reactListening" + Math.random().toString(36).slice(2);
  function Gn(r) {
    if (!r[Eo]) {
      r[Eo] = true, xd.forEach(function(e) {
        e !== "selectionchange" && (dw.has(e) || Js(e, false, r), Js(e, true, r));
      });
      var t = r.nodeType === 9 ? r : r.ownerDocument;
      t === null || t[Eo] || (t[Eo] = true, Js("selectionchange", false, t));
    }
  }
  function gl(r, t, e, s) {
    switch (Gd(t)) {
      case 1:
        var o = ju;
        break;
      case 4:
        o = Su;
        break;
      default:
        o = bi;
    }
    e = o.bind(null, t, e, r), o = void 0, !ja || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), s ? o !== void 0 ? r.addEventListener(t, e, {
      capture: true,
      passive: o
    }) : r.addEventListener(t, e, true) : o !== void 0 ? r.addEventListener(t, e, {
      passive: o
    }) : r.addEventListener(t, e, false);
  }
  function Gs(r, t, e, s, o) {
    var n = s;
    if (!(t & 1) && !(t & 2) && s !== null) t: for (; ; ) {
      if (s === null) return;
      var c = s.tag;
      if (c === 3 || c === 4) {
        var d = s.stateNode.containerInfo;
        if (d === o || d.nodeType === 8 && d.parentNode === o) break;
        if (c === 4) for (c = s.return; c !== null; ) {
          var p = c.tag;
          if ((p === 3 || p === 4) && (p = c.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o)) return;
          c = c.return;
        }
        for (; d !== null; ) {
          if (c = yr(d), c === null) return;
          if (p = c.tag, p === 5 || p === 6) {
            s = n = c;
            continue t;
          }
          d = d.parentNode;
        }
      }
      s = s.return;
    }
    Id(function() {
      var l = n, m = ui(e), x = [];
      t: {
        var k = wl.get(r);
        if (k !== void 0) {
          var z = yi, L = r;
          switch (r) {
            case "keypress":
              if (Mo(e) === 0) break t;
            case "keydown":
            case "keyup":
              z = Mu;
              break;
            case "focusin":
              L = "focus", z = Hs;
              break;
            case "focusout":
              L = "blur", z = Hs;
              break;
            case "beforeblur":
            case "afterblur":
              z = Hs;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = fc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Cu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Vu;
              break;
            case dl:
            case ll:
            case pl:
              z = Nu;
              break;
            case ul:
              z = Au;
              break;
            case "scroll":
              z = Eu;
              break;
            case "wheel":
              z = Yu;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Pu;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = bc;
          }
          var N = (t & 4) !== 0, V = !N && r === "scroll", y = N ? k !== null ? k + "Capture" : null : k;
          N = [];
          for (var b = l, v; b !== null; ) {
            v = b;
            var E = v.stateNode;
            if (v.tag === 5 && E !== null && (v = E, y !== null && (E = Yn(b, y), E != null && N.push(to(b, E, v)))), V) break;
            b = b.return;
          }
          0 < N.length && (k = new z(k, L, null, e, m), x.push({
            event: k,
            listeners: N
          }));
        }
      }
      if (!(t & 7)) {
        t: {
          if (k = r === "mouseover" || r === "pointerover", z = r === "mouseout" || r === "pointerout", k && e !== ka && (L = e.relatedTarget || e.fromElement) && (yr(L) || L[Je])) break t;
          if ((z || k) && (k = m.window === m ? m : (k = m.ownerDocument) ? k.defaultView || k.parentWindow : window, z ? (L = e.relatedTarget || e.toElement, z = l, L = L ? yr(L) : null, L !== null && (V = Mr(L), L !== V || L.tag !== 5 && L.tag !== 6) && (L = null)) : (z = null, L = l), z !== L)) {
            if (N = fc, E = "onMouseLeave", y = "onMouseEnter", b = "mouse", (r === "pointerout" || r === "pointerover") && (N = bc, E = "onPointerLeave", y = "onPointerEnter", b = "pointer"), V = z == null ? k : qr(z), v = L == null ? k : qr(L), k = new N(E, b + "leave", z, e, m), k.target = V, k.relatedTarget = v, E = null, yr(m) === l && (N = new N(y, b + "enter", L, e, m), N.target = v, N.relatedTarget = V, E = N), V = E, z && L) e: {
              for (N = z, y = L, b = 0, v = N; v; v = Wr(v)) b++;
              for (v = 0, E = y; E; E = Wr(E)) v++;
              for (; 0 < b - v; ) N = Wr(N), b--;
              for (; 0 < v - b; ) y = Wr(y), v--;
              for (; b--; ) {
                if (N === y || y !== null && N === y.alternate) break e;
                N = Wr(N), y = Wr(y);
              }
              N = null;
            }
            else N = null;
            z !== null && Cc(x, k, z, N, false), L !== null && V !== null && Cc(x, V, L, N, true);
          }
        }
        t: {
          if (k = l ? qr(l) : window, z = k.nodeName && k.nodeName.toLowerCase(), z === "select" || z === "input" && k.type === "file") var F = tw;
          else if (mc(k)) if (ol) F = nw;
          else {
            F = _w;
            var T = ew;
          }
          else (z = k.nodeName) && z.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (F = rw);
          if (F && (F = F(r, l))) {
            nl(x, F, e, m);
            break t;
          }
          T && T(r, k, l), r === "focusout" && (T = k._wrapperState) && T.controlled && k.type === "number" && ba(k, "number", k.value);
        }
        switch (T = l ? qr(l) : window, r) {
          case "focusin":
            (mc(T) || T.contentEditable === "true") && (Hr = T, Oa = l, Dn = null);
            break;
          case "focusout":
            Dn = Oa = Hr = null;
            break;
          case "mousedown":
            La = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            La = false, Sc(x, e, m);
            break;
          case "selectionchange":
            if (aw) break;
          case "keydown":
          case "keyup":
            Sc(x, e, m);
        }
        var P;
        if (vi) t: {
          switch (r) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break t;
            case "compositionend":
              $ = "onCompositionEnd";
              break t;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break t;
          }
          $ = void 0;
        }
        else Ar ? _l(r, e) && ($ = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && ($ = "onCompositionStart");
        $ && (el && e.locale !== "ko" && (Ar || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ar && (P = tl()) : (X_ = m, hi = "value" in X_ ? X_.value : X_.textContent, Ar = true)), T = _s(l, $), 0 < T.length && ($ = new gc($, r, null, e, m), x.push({
          event: $,
          listeners: T
        }), P ? $.data = P : (P = rl(e), P !== null && ($.data = P)))), (P = Xu ? Ku(r, e) : Zu(r, e)) && (l = _s(l, "onBeforeInput"), 0 < l.length && (m = new gc("onBeforeInput", "beforeinput", null, e, m), x.push({
          event: m,
          listeners: l
        }), m.data = P));
      }
      fl(x, t);
    });
  }
  function to(r, t, e) {
    return {
      instance: r,
      listener: t,
      currentTarget: e
    };
  }
  function _s(r, t) {
    for (var e = t + "Capture", s = []; r !== null; ) {
      var o = r, n = o.stateNode;
      o.tag === 5 && n !== null && (o = n, n = Yn(r, e), n != null && s.unshift(to(r, n, o)), n = Yn(r, t), n != null && s.push(to(r, n, o))), r = r.return;
    }
    return s;
  }
  function Wr(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Cc(r, t, e, s, o) {
    for (var n = t._reactName, c = []; e !== null && e !== s; ) {
      var d = e, p = d.alternate, l = d.stateNode;
      if (p !== null && p === s) break;
      d.tag === 5 && l !== null && (d = l, o ? (p = Yn(e, n), p != null && c.unshift(to(e, p, d))) : o || (p = Yn(e, n), p != null && c.push(to(e, p, d)))), e = e.return;
    }
    c.length !== 0 && r.push({
      event: t,
      listeners: c
    });
  }
  var lw = /\r\n?/g, pw = /\u0000|\uFFFD/g;
  function Oc(r) {
    return (typeof r == "string" ? r : "" + r).replace(lw, `
`).replace(pw, "");
  }
  function zo(r, t, e) {
    if (t = Oc(t), Oc(r) !== t && e) throw Error(C(425));
  }
  function rs() {
  }
  var Na = null, Fa = null;
  function Pa(r, t) {
    return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ta = typeof setTimeout == "function" ? setTimeout : void 0, uw = typeof clearTimeout == "function" ? clearTimeout : void 0, Lc = typeof Promise == "function" ? Promise : void 0, ww = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lc < "u" ? function(r) {
    return Lc.resolve(null).then(r).catch(fw);
  } : Ta;
  function fw(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function ta(r, t) {
    var e = t, s = 0;
    do {
      var o = e.nextSibling;
      if (r.removeChild(e), o && o.nodeType === 8) if (e = o.data, e === "/$") {
        if (s === 0) {
          r.removeChild(o), Kn(t);
          return;
        }
        s--;
      } else e !== "$" && e !== "$?" && e !== "$!" || s++;
      e = o;
    } while (e);
    Kn(t);
  }
  function _r(r) {
    for (; r != null; r = r.nextSibling) {
      var t = r.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = r.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return r;
  }
  function Nc(r) {
    r = r.previousSibling;
    for (var t = 0; r; ) {
      if (r.nodeType === 8) {
        var e = r.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (t === 0) return r;
          t--;
        } else e === "/$" && t++;
      }
      r = r.previousSibling;
    }
    return null;
  }
  var mn = Math.random().toString(36).slice(2), ve = "__reactFiber$" + mn, eo = "__reactProps$" + mn, Je = "__reactContainer$" + mn, Ra = "__reactEvents$" + mn, gw = "__reactListeners$" + mn, bw = "__reactHandles$" + mn;
  function yr(r) {
    var t = r[ve];
    if (t) return t;
    for (var e = r.parentNode; e; ) {
      if (t = e[Je] || e[ve]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (r = Nc(r); r !== null; ) {
          if (e = r[ve]) return e;
          r = Nc(r);
        }
        return t;
      }
      r = e, e = r.parentNode;
    }
    return null;
  }
  function uo(r) {
    return r = r[ve] || r[Je], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function qr(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(C(33));
  }
  function js(r) {
    return r[eo] || null;
  }
  var $a = [], Xr = -1;
  function dr(r) {
    return {
      current: r
    };
  }
  function G(r) {
    0 > Xr || (r.current = $a[Xr], $a[Xr] = null, Xr--);
  }
  function X(r, t) {
    Xr++, $a[Xr] = r.current, r.current = t;
  }
  var ir = {}, Ct = dr(ir), Qt = dr(false), Tr = ir;
  function pn(r, t) {
    var e = r.type.contextTypes;
    if (!e) return ir;
    var s = r.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, n;
    for (n in e) o[n] = t[n];
    return s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Vt(r) {
    return r = r.childContextTypes, r != null;
  }
  function ns() {
    G(Qt), G(Ct);
  }
  function Fc(r, t, e) {
    if (Ct.current !== ir) throw Error(C(168));
    X(Ct, t), X(Qt, e);
  }
  function bl(r, t, e) {
    var s = r.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return e;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(C(108, eu(r) || "Unknown", o));
    return rt({}, e, s);
  }
  function os(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || ir, Tr = Ct.current, X(Ct, r), X(Qt, Qt.current), true;
  }
  function Pc(r, t, e) {
    var s = r.stateNode;
    if (!s) throw Error(C(169));
    e ? (r = bl(r, t, Tr), s.__reactInternalMemoizedMergedChildContext = r, G(Qt), G(Ct), X(Ct, r)) : G(Qt), X(Qt, e);
  }
  var Te = null, Ss = false, ea = false;
  function hl(r) {
    Te === null ? Te = [
      r
    ] : Te.push(r);
  }
  function hw(r) {
    Ss = true, hl(r);
  }
  function lr() {
    if (!ea && Te !== null) {
      ea = true;
      var r = 0, t = Y;
      try {
        var e = Te;
        for (Y = 1; r < e.length; r++) {
          var s = e[r];
          do
            s = s(true);
          while (s !== null);
        }
        Te = null, Ss = false;
      } catch (o) {
        throw Te !== null && (Te = Te.slice(r + 1)), Vd(wi, lr), o;
      } finally {
        Y = t, ea = false;
      }
    }
    return null;
  }
  var Kr = [], Zr = 0, ss = null, as = 0, te = [], ee = 0, Rr = null, Ye = 1, qe = "";
  function wr(r, t) {
    Kr[Zr++] = as, Kr[Zr++] = ss, ss = r, as = t;
  }
  function yl(r, t, e) {
    te[ee++] = Ye, te[ee++] = qe, te[ee++] = Rr, Rr = r;
    var s = Ye;
    r = qe;
    var o = 32 - we(s) - 1;
    s &= ~(1 << o), e += 1;
    var n = 32 - we(t) + o;
    if (30 < n) {
      var c = o - o % 5;
      n = (s & (1 << c) - 1).toString(32), s >>= c, o -= c, Ye = 1 << 32 - we(t) + o | e << o | s, qe = n + r;
    } else Ye = 1 << n | e << o | s, qe = r;
  }
  function xi(r) {
    r.return !== null && (wr(r, 1), yl(r, 1, 0));
  }
  function ji(r) {
    for (; r === ss; ) ss = Kr[--Zr], Kr[Zr] = null, as = Kr[--Zr], Kr[Zr] = null;
    for (; r === Rr; ) Rr = te[--ee], te[ee] = null, qe = te[--ee], te[ee] = null, Ye = te[--ee], te[ee] = null;
  }
  var Xt = null, qt = null, tt = false, pe = null;
  function ml(r, t) {
    var e = re(5, null, null, 0);
    e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [
      e
    ], r.flags |= 16) : t.push(e);
  }
  function Tc(r, t) {
    switch (r.tag) {
      case 5:
        var e = r.type;
        return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, Xt = r, qt = _r(t.firstChild), true) : false;
      case 6:
        return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, Xt = r, qt = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Rr !== null ? {
          id: Ye,
          overflow: qe
        } : null, r.memoizedState = {
          dehydrated: t,
          treeContext: e,
          retryLane: 1073741824
        }, e = re(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, Xt = r, qt = null, true) : false;
      default:
        return false;
    }
  }
  function Da(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function Ua(r) {
    if (tt) {
      var t = qt;
      if (t) {
        var e = t;
        if (!Tc(r, t)) {
          if (Da(r)) throw Error(C(418));
          t = _r(e.nextSibling);
          var s = Xt;
          t && Tc(r, t) ? ml(s, e) : (r.flags = r.flags & -4097 | 2, tt = false, Xt = r);
        }
      } else {
        if (Da(r)) throw Error(C(418));
        r.flags = r.flags & -4097 | 2, tt = false, Xt = r;
      }
    }
  }
  function Rc(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    Xt = r;
  }
  function Co(r) {
    if (r !== Xt) return false;
    if (!tt) return Rc(r), tt = true, false;
    var t;
    if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !Pa(r.type, r.memoizedProps)), t && (t = qt)) {
      if (Da(r)) throw vl(), Error(C(418));
      for (; t; ) ml(r, t), t = _r(t.nextSibling);
    }
    if (Rc(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(C(317));
      t: {
        for (r = r.nextSibling, t = 0; r; ) {
          if (r.nodeType === 8) {
            var e = r.data;
            if (e === "/$") {
              if (t === 0) {
                qt = _r(r.nextSibling);
                break t;
              }
              t--;
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          }
          r = r.nextSibling;
        }
        qt = null;
      }
    } else qt = Xt ? _r(r.stateNode.nextSibling) : null;
    return true;
  }
  function vl() {
    for (var r = qt; r; ) r = _r(r.nextSibling);
  }
  function un() {
    qt = Xt = null, tt = false;
  }
  function Si(r) {
    pe === null ? pe = [
      r
    ] : pe.push(r);
  }
  var yw = e_.ReactCurrentBatchConfig;
  function En(r, t, e) {
    if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (e._owner) {
        if (e = e._owner, e) {
          if (e.tag !== 1) throw Error(C(309));
          var s = e.stateNode;
        }
        if (!s) throw Error(C(147, r));
        var o = s, n = "" + r;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === n ? t.ref : (t = function(c) {
          var d = o.refs;
          c === null ? delete d[n] : d[n] = c;
        }, t._stringRef = n, t);
      }
      if (typeof r != "string") throw Error(C(284));
      if (!e._owner) throw Error(C(290, r));
    }
    return r;
  }
  function Oo(r, t) {
    throw r = Object.prototype.toString.call(t), Error(C(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
  }
  function $c(r) {
    var t = r._init;
    return t(r._payload);
  }
  function kl(r) {
    function t(y, b) {
      if (r) {
        var v = y.deletions;
        v === null ? (y.deletions = [
          b
        ], y.flags |= 16) : v.push(b);
      }
    }
    function e(y, b) {
      if (!r) return null;
      for (; b !== null; ) t(y, b), b = b.sibling;
      return null;
    }
    function s(y, b) {
      for (y = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? y.set(b.key, b) : y.set(b.index, b), b = b.sibling;
      return y;
    }
    function o(y, b) {
      return y = sr(y, b), y.index = 0, y.sibling = null, y;
    }
    function n(y, b, v) {
      return y.index = v, r ? (v = y.alternate, v !== null ? (v = v.index, v < b ? (y.flags |= 2, b) : v) : (y.flags |= 2, b)) : (y.flags |= 1048576, b);
    }
    function c(y) {
      return r && y.alternate === null && (y.flags |= 2), y;
    }
    function d(y, b, v, E) {
      return b === null || b.tag !== 6 ? (b = ia(v, y.mode, E), b.return = y, b) : (b = o(b, v), b.return = y, b);
    }
    function p(y, b, v, E) {
      var F = v.type;
      return F === Br ? m(y, b, v.props.children, E, v.key) : b !== null && (b.elementType === F || typeof F == "object" && F !== null && F.$$typeof === n_ && $c(F) === b.type) ? (E = o(b, v.props), E.ref = En(y, b, v), E.return = y, E) : (E = Yo(v.type, v.key, v.props, null, y.mode, E), E.ref = En(y, b, v), E.return = y, E);
    }
    function l(y, b, v, E) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== v.containerInfo || b.stateNode.implementation !== v.implementation ? (b = ca(v, y.mode, E), b.return = y, b) : (b = o(b, v.children || []), b.return = y, b);
    }
    function m(y, b, v, E, F) {
      return b === null || b.tag !== 7 ? (b = Pr(v, y.mode, E, F), b.return = y, b) : (b = o(b, v), b.return = y, b);
    }
    function x(y, b, v) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = ia("" + b, y.mode, v), b.return = y, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case ho:
            return v = Yo(b.type, b.key, b.props, null, y.mode, v), v.ref = En(y, null, b), v.return = y, v;
          case Vr:
            return b = ca(b, y.mode, v), b.return = y, b;
          case n_:
            var E = b._init;
            return x(y, E(b._payload), v);
        }
        if (Ln(b) || vn(b)) return b = Pr(b, y.mode, v, null), b.return = y, b;
        Oo(y, b);
      }
      return null;
    }
    function k(y, b, v, E) {
      var F = b !== null ? b.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return F !== null ? null : d(y, b, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ho:
            return v.key === F ? p(y, b, v, E) : null;
          case Vr:
            return v.key === F ? l(y, b, v, E) : null;
          case n_:
            return F = v._init, k(y, b, F(v._payload), E);
        }
        if (Ln(v) || vn(v)) return F !== null ? null : m(y, b, v, E, null);
        Oo(y, v);
      }
      return null;
    }
    function z(y, b, v, E, F) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return y = y.get(v) || null, d(b, y, "" + E, F);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ho:
            return y = y.get(E.key === null ? v : E.key) || null, p(b, y, E, F);
          case Vr:
            return y = y.get(E.key === null ? v : E.key) || null, l(b, y, E, F);
          case n_:
            var T = E._init;
            return z(y, b, v, T(E._payload), F);
        }
        if (Ln(E) || vn(E)) return y = y.get(v) || null, m(b, y, E, F, null);
        Oo(b, E);
      }
      return null;
    }
    function L(y, b, v, E) {
      for (var F = null, T = null, P = b, $ = b = 0, H = null; P !== null && $ < v.length; $++) {
        P.index > $ ? (H = P, P = null) : H = P.sibling;
        var U = k(y, P, v[$], E);
        if (U === null) {
          P === null && (P = H);
          break;
        }
        r && P && U.alternate === null && t(y, P), b = n(U, b, $), T === null ? F = U : T.sibling = U, T = U, P = H;
      }
      if ($ === v.length) return e(y, P), tt && wr(y, $), F;
      if (P === null) {
        for (; $ < v.length; $++) P = x(y, v[$], E), P !== null && (b = n(P, b, $), T === null ? F = P : T.sibling = P, T = P);
        return tt && wr(y, $), F;
      }
      for (P = s(y, P); $ < v.length; $++) H = z(P, y, $, v[$], E), H !== null && (r && H.alternate !== null && P.delete(H.key === null ? $ : H.key), b = n(H, b, $), T === null ? F = H : T.sibling = H, T = H);
      return r && P.forEach(function(it) {
        return t(y, it);
      }), tt && wr(y, $), F;
    }
    function N(y, b, v, E) {
      var F = vn(v);
      if (typeof F != "function") throw Error(C(150));
      if (v = F.call(v), v == null) throw Error(C(151));
      for (var T = F = null, P = b, $ = b = 0, H = null, U = v.next(); P !== null && !U.done; $++, U = v.next()) {
        P.index > $ ? (H = P, P = null) : H = P.sibling;
        var it = k(y, P, U.value, E);
        if (it === null) {
          P === null && (P = H);
          break;
        }
        r && P && it.alternate === null && t(y, P), b = n(it, b, $), T === null ? F = it : T.sibling = it, T = it, P = H;
      }
      if (U.done) return e(y, P), tt && wr(y, $), F;
      if (P === null) {
        for (; !U.done; $++, U = v.next()) U = x(y, U.value, E), U !== null && (b = n(U, b, $), T === null ? F = U : T.sibling = U, T = U);
        return tt && wr(y, $), F;
      }
      for (P = s(y, P); !U.done; $++, U = v.next()) U = z(P, y, $, U.value, E), U !== null && (r && U.alternate !== null && P.delete(U.key === null ? $ : U.key), b = n(U, b, $), T === null ? F = U : T.sibling = U, T = U);
      return r && P.forEach(function(At) {
        return t(y, At);
      }), tt && wr(y, $), F;
    }
    function V(y, b, v, E) {
      if (typeof v == "object" && v !== null && v.type === Br && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ho:
            t: {
              for (var F = v.key, T = b; T !== null; ) {
                if (T.key === F) {
                  if (F = v.type, F === Br) {
                    if (T.tag === 7) {
                      e(y, T.sibling), b = o(T, v.props.children), b.return = y, y = b;
                      break t;
                    }
                  } else if (T.elementType === F || typeof F == "object" && F !== null && F.$$typeof === n_ && $c(F) === T.type) {
                    e(y, T.sibling), b = o(T, v.props), b.ref = En(y, T, v), b.return = y, y = b;
                    break t;
                  }
                  e(y, T);
                  break;
                } else t(y, T);
                T = T.sibling;
              }
              v.type === Br ? (b = Pr(v.props.children, y.mode, E, v.key), b.return = y, y = b) : (E = Yo(v.type, v.key, v.props, null, y.mode, E), E.ref = En(y, b, v), E.return = y, y = E);
            }
            return c(y);
          case Vr:
            t: {
              for (T = v.key; b !== null; ) {
                if (b.key === T) if (b.tag === 4 && b.stateNode.containerInfo === v.containerInfo && b.stateNode.implementation === v.implementation) {
                  e(y, b.sibling), b = o(b, v.children || []), b.return = y, y = b;
                  break t;
                } else {
                  e(y, b);
                  break;
                }
                else t(y, b);
                b = b.sibling;
              }
              b = ca(v, y.mode, E), b.return = y, y = b;
            }
            return c(y);
          case n_:
            return T = v._init, V(y, b, T(v._payload), E);
        }
        if (Ln(v)) return L(y, b, v, E);
        if (vn(v)) return N(y, b, v, E);
        Oo(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, b !== null && b.tag === 6 ? (e(y, b.sibling), b = o(b, v), b.return = y, y = b) : (e(y, b), b = ia(v, y.mode, E), b.return = y, y = b), c(y)) : e(y, b);
    }
    return V;
  }
  var wn = kl(true), xl = kl(false), is = dr(null), cs = null, Jr = null, Ei = null;
  function zi() {
    Ei = Jr = cs = null;
  }
  function Ci(r) {
    var t = is.current;
    G(is), r._currentValue = t;
  }
  function Ia(r, t, e) {
    for (; r !== null; ) {
      var s = r.alternate;
      if ((r.childLanes & t) !== t ? (r.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), r === e) break;
      r = r.return;
    }
  }
  function sn(r, t) {
    cs = r, Ei = Jr = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (Wt = true), r.firstContext = null);
  }
  function se(r) {
    var t = r._currentValue;
    if (Ei !== r) if (r = {
      context: r,
      memoizedValue: t,
      next: null
    }, Jr === null) {
      if (cs === null) throw Error(C(308));
      Jr = r, cs.dependencies = {
        lanes: 0,
        firstContext: r
      };
    } else Jr = Jr.next = r;
    return t;
  }
  var mr = null;
  function Oi(r) {
    mr === null ? mr = [
      r
    ] : mr.push(r);
  }
  function jl(r, t, e, s) {
    var o = t.interleaved;
    return o === null ? (e.next = e, Oi(t)) : (e.next = o.next, o.next = e), t.interleaved = e, Ge(r, s);
  }
  function Ge(r, t) {
    r.lanes |= t;
    var e = r.alternate;
    for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; ) r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var o_ = false;
  function Li(r) {
    r.updateQueue = {
      baseState: r.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Sl(r, t) {
    r = r.updateQueue, t.updateQueue === r && (t.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects
    });
  }
  function Ke(r, t) {
    return {
      eventTime: r,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function rr(r, t, e) {
    var s = r.updateQueue;
    if (s === null) return null;
    if (s = s.shared, A & 2) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, Ge(r, e);
    }
    return o = s.interleaved, o === null ? (t.next = t, Oi(s)) : (t.next = o.next, o.next = t), s.interleaved = t, Ge(r, e);
  }
  function Wo(r, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, fi(r, e);
    }
  }
  function Dc(r, t) {
    var e = r.updateQueue, s = r.alternate;
    if (s !== null && (s = s.updateQueue, e === s)) {
      var o = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            eventTime: e.eventTime,
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: e.callback,
            next: null
          };
          n === null ? o = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? o = n = t : n = n.next = t;
      } else o = n = t;
      e = {
        baseState: s.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: n,
        shared: s.shared,
        effects: s.effects
      }, r.updateQueue = e;
      return;
    }
    r = e.lastBaseUpdate, r === null ? e.firstBaseUpdate = t : r.next = t, e.lastBaseUpdate = t;
  }
  function ds(r, t, e, s) {
    var o = r.updateQueue;
    o_ = false;
    var n = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var p = d, l = p.next;
      p.next = null, c === null ? n = l : c.next = l, c = p;
      var m = r.alternate;
      m !== null && (m = m.updateQueue, d = m.lastBaseUpdate, d !== c && (d === null ? m.firstBaseUpdate = l : d.next = l, m.lastBaseUpdate = p));
    }
    if (n !== null) {
      var x = o.baseState;
      c = 0, m = l = p = null, d = n;
      do {
        var k = d.lane, z = d.eventTime;
        if ((s & k) === k) {
          m !== null && (m = m.next = {
            eventTime: z,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          t: {
            var L = r, N = d;
            switch (k = t, z = e, N.tag) {
              case 1:
                if (L = N.payload, typeof L == "function") {
                  x = L.call(z, x, k);
                  break t;
                }
                x = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = N.payload, k = typeof L == "function" ? L.call(z, x, k) : L, k == null) break t;
                x = rt({}, x, k);
                break t;
              case 2:
                o_ = true;
            }
          }
          d.callback !== null && d.lane !== 0 && (r.flags |= 64, k = o.effects, k === null ? o.effects = [
            d
          ] : k.push(d));
        } else z = {
          eventTime: z,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }, m === null ? (l = m = z, p = x) : m = m.next = z, c |= k;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null) break;
          k = d, d = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
        }
      } while (true);
      if (m === null && (p = x), o.baseState = p, o.firstBaseUpdate = l, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else n === null && (o.shared.lanes = 0);
      Dr |= c, r.lanes = c, r.memoizedState = x;
    }
  }
  function Uc(r, t, e) {
    if (r = t.effects, t.effects = null, r !== null) for (t = 0; t < r.length; t++) {
      var s = r[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = e, typeof o != "function") throw Error(C(191, o));
        o.call(s);
      }
    }
  }
  var wo = {}, ze = dr(wo), _o = dr(wo), ro = dr(wo);
  function vr(r) {
    if (r === wo) throw Error(C(174));
    return r;
  }
  function Ni(r, t) {
    switch (X(ro, t), X(_o, r), X(ze, wo), r = t.nodeType, r) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ya(null, "");
        break;
      default:
        r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = ya(t, r);
    }
    G(ze), X(ze, t);
  }
  function fn() {
    G(ze), G(_o), G(ro);
  }
  function El(r) {
    vr(ro.current);
    var t = vr(ze.current), e = ya(t, r.type);
    t !== e && (X(_o, r), X(ze, e));
  }
  function Fi(r) {
    _o.current === r && (G(ze), G(_o));
  }
  var et = dr(0);
  function ls(r) {
    for (var t = r; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || e.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === r) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === r) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var _a = [];
  function Pi() {
    for (var r = 0; r < _a.length; r++) _a[r]._workInProgressVersionPrimary = null;
    _a.length = 0;
  }
  var Qo = e_.ReactCurrentDispatcher, ra = e_.ReactCurrentBatchConfig, $r = 0, _t = null, dt = null, bt = null, ps = false, Un = false, no = 0, mw = 0;
  function xt() {
    throw Error(C(321));
  }
  function Ti(r, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < r.length; e++) if (!ge(r[e], t[e])) return false;
    return true;
  }
  function Ri(r, t, e, s, o, n) {
    if ($r = n, _t = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qo.current = r === null || r.memoizedState === null ? jw : Sw, r = e(s, o), Un) {
      n = 0;
      do {
        if (Un = false, no = 0, 25 <= n) throw Error(C(301));
        n += 1, bt = dt = null, t.updateQueue = null, Qo.current = Ew, r = e(s, o);
      } while (Un);
    }
    if (Qo.current = us, t = dt !== null && dt.next !== null, $r = 0, bt = dt = _t = null, ps = false, t) throw Error(C(300));
    return r;
  }
  function $i() {
    var r = no !== 0;
    return no = 0, r;
  }
  function he() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? _t.memoizedState = bt = r : bt = bt.next = r, bt;
  }
  function ae() {
    if (dt === null) {
      var r = _t.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = dt.next;
    var t = bt === null ? _t.memoizedState : bt.next;
    if (t !== null) bt = t, dt = r;
    else {
      if (r === null) throw Error(C(310));
      dt = r, r = {
        memoizedState: dt.memoizedState,
        baseState: dt.baseState,
        baseQueue: dt.baseQueue,
        queue: dt.queue,
        next: null
      }, bt === null ? _t.memoizedState = bt = r : bt = bt.next = r;
    }
    return bt;
  }
  function oo(r, t) {
    return typeof t == "function" ? t(r) : t;
  }
  function na(r) {
    var t = ae(), e = t.queue;
    if (e === null) throw Error(C(311));
    e.lastRenderedReducer = r;
    var s = dt, o = s.baseQueue, n = e.pending;
    if (n !== null) {
      if (o !== null) {
        var c = o.next;
        o.next = n.next, n.next = c;
      }
      s.baseQueue = o = n, e.pending = null;
    }
    if (o !== null) {
      n = o.next, s = s.baseState;
      var d = c = null, p = null, l = n;
      do {
        var m = l.lane;
        if (($r & m) === m) p !== null && (p = p.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), s = l.hasEagerState ? l.eagerState : r(s, l.action);
        else {
          var x = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          p === null ? (d = p = x, c = s) : p = p.next = x, _t.lanes |= m, Dr |= m;
        }
        l = l.next;
      } while (l !== null && l !== n);
      p === null ? c = s : p.next = d, ge(s, t.memoizedState) || (Wt = true), t.memoizedState = s, t.baseState = c, t.baseQueue = p, e.lastRenderedState = s;
    }
    if (r = e.interleaved, r !== null) {
      o = r;
      do
        n = o.lane, _t.lanes |= n, Dr |= n, o = o.next;
      while (o !== r);
    } else o === null && (e.lanes = 0);
    return [
      t.memoizedState,
      e.dispatch
    ];
  }
  function oa(r) {
    var t = ae(), e = t.queue;
    if (e === null) throw Error(C(311));
    e.lastRenderedReducer = r;
    var s = e.dispatch, o = e.pending, n = t.memoizedState;
    if (o !== null) {
      e.pending = null;
      var c = o = o.next;
      do
        n = r(n, c.action), c = c.next;
      while (c !== o);
      ge(n, t.memoizedState) || (Wt = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [
      n,
      s
    ];
  }
  function zl() {
  }
  function Cl(r, t) {
    var e = _t, s = ae(), o = t(), n = !ge(s.memoizedState, o);
    if (n && (s.memoizedState = o, Wt = true), s = s.queue, Di(Nl.bind(null, e, s, r), [
      r
    ]), s.getSnapshot !== t || n || bt !== null && bt.memoizedState.tag & 1) {
      if (e.flags |= 2048, so(9, Ll.bind(null, e, s, o, t), void 0, null), yt === null) throw Error(C(349));
      $r & 30 || Ol(e, t, o);
    }
    return o;
  }
  function Ol(r, t, e) {
    r.flags |= 16384, r = {
      getSnapshot: t,
      value: e
    }, t = _t.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, _t.updateQueue = t, t.stores = [
      r
    ]) : (e = t.stores, e === null ? t.stores = [
      r
    ] : e.push(r));
  }
  function Ll(r, t, e, s) {
    t.value = e, t.getSnapshot = s, Fl(t) && Pl(r);
  }
  function Nl(r, t, e) {
    return e(function() {
      Fl(t) && Pl(r);
    });
  }
  function Fl(r) {
    var t = r.getSnapshot;
    r = r.value;
    try {
      var e = t();
      return !ge(r, e);
    } catch {
      return true;
    }
  }
  function Pl(r) {
    var t = Ge(r, 1);
    t !== null && fe(t, r, 1, -1);
  }
  function Ic(r) {
    var t = he();
    return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: r
    }, t.queue = r, r = r.dispatch = xw.bind(null, _t, r), [
      t.memoizedState,
      r
    ];
  }
  function so(r, t, e, s) {
    return r = {
      tag: r,
      create: t,
      destroy: e,
      deps: s,
      next: null
    }, t = _t.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, _t.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (s = e.next, e.next = r, r.next = s, t.lastEffect = r)), r;
  }
  function Tl() {
    return ae().memoizedState;
  }
  function Vo(r, t, e, s) {
    var o = he();
    _t.flags |= r, o.memoizedState = so(1 | t, e, void 0, s === void 0 ? null : s);
  }
  function Es(r, t, e, s) {
    var o = ae();
    s = s === void 0 ? null : s;
    var n = void 0;
    if (dt !== null) {
      var c = dt.memoizedState;
      if (n = c.destroy, s !== null && Ti(s, c.deps)) {
        o.memoizedState = so(t, e, n, s);
        return;
      }
    }
    _t.flags |= r, o.memoizedState = so(1 | t, e, n, s);
  }
  function Mc(r, t) {
    return Vo(8390656, 8, r, t);
  }
  function Di(r, t) {
    return Es(2048, 8, r, t);
  }
  function Rl(r, t) {
    return Es(4, 2, r, t);
  }
  function $l(r, t) {
    return Es(4, 4, r, t);
  }
  function Dl(r, t) {
    if (typeof t == "function") return r = r(), t(r), function() {
      t(null);
    };
    if (t != null) return r = r(), t.current = r, function() {
      t.current = null;
    };
  }
  function Ul(r, t, e) {
    return e = e != null ? e.concat([
      r
    ]) : null, Es(4, 4, Dl.bind(null, t, r), e);
  }
  function Ui() {
  }
  function Il(r, t) {
    var e = ae();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Ti(t, s[1]) ? s[0] : (e.memoizedState = [
      r,
      t
    ], r);
  }
  function Ml(r, t) {
    var e = ae();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Ti(t, s[1]) ? s[0] : (r = r(), e.memoizedState = [
      r,
      t
    ], r);
  }
  function Wl(r, t, e) {
    return $r & 21 ? (ge(e, t) || (e = Hd(), _t.lanes |= e, Dr |= e, r.baseState = true), t) : (r.baseState && (r.baseState = false, Wt = true), r.memoizedState = e);
  }
  function vw(r, t) {
    var e = Y;
    Y = e !== 0 && 4 > e ? e : 4, r(true);
    var s = ra.transition;
    ra.transition = {};
    try {
      r(false), t();
    } finally {
      Y = e, ra.transition = s;
    }
  }
  function Ql() {
    return ae().memoizedState;
  }
  function kw(r, t, e) {
    var s = or(r);
    if (e = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, Vl(r)) Bl(t, e);
    else if (e = jl(r, t, e, s), e !== null) {
      var o = Pt();
      fe(e, r, s, o), Al(e, t, s);
    }
  }
  function xw(r, t, e) {
    var s = or(r), o = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (Vl(r)) Bl(t, o);
    else {
      var n = r.alternate;
      if (r.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, d = n(c, e);
        if (o.hasEagerState = true, o.eagerState = d, ge(d, c)) {
          var p = t.interleaved;
          p === null ? (o.next = o, Oi(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      e = jl(r, t, o, s), e !== null && (o = Pt(), fe(e, r, s, o), Al(e, t, s));
    }
  }
  function Vl(r) {
    var t = r.alternate;
    return r === _t || t !== null && t === _t;
  }
  function Bl(r, t) {
    Un = ps = true;
    var e = r.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
  }
  function Al(r, t, e) {
    if (e & 4194240) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, fi(r, e);
    }
  }
  var us = {
    readContext: se,
    useCallback: xt,
    useContext: xt,
    useEffect: xt,
    useImperativeHandle: xt,
    useInsertionEffect: xt,
    useLayoutEffect: xt,
    useMemo: xt,
    useReducer: xt,
    useRef: xt,
    useState: xt,
    useDebugValue: xt,
    useDeferredValue: xt,
    useTransition: xt,
    useMutableSource: xt,
    useSyncExternalStore: xt,
    useId: xt,
    unstable_isNewReconciler: false
  }, jw = {
    readContext: se,
    useCallback: function(r, t) {
      return he().memoizedState = [
        r,
        t === void 0 ? null : t
      ], r;
    },
    useContext: se,
    useEffect: Mc,
    useImperativeHandle: function(r, t, e) {
      return e = e != null ? e.concat([
        r
      ]) : null, Vo(4194308, 4, Dl.bind(null, t, r), e);
    },
    useLayoutEffect: function(r, t) {
      return Vo(4194308, 4, r, t);
    },
    useInsertionEffect: function(r, t) {
      return Vo(4, 2, r, t);
    },
    useMemo: function(r, t) {
      var e = he();
      return t = t === void 0 ? null : t, r = r(), e.memoizedState = [
        r,
        t
      ], r;
    },
    useReducer: function(r, t, e) {
      var s = he();
      return t = e !== void 0 ? e(t) : t, s.memoizedState = s.baseState = t, r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: t
      }, s.queue = r, r = r.dispatch = kw.bind(null, _t, r), [
        s.memoizedState,
        r
      ];
    },
    useRef: function(r) {
      var t = he();
      return r = {
        current: r
      }, t.memoizedState = r;
    },
    useState: Ic,
    useDebugValue: Ui,
    useDeferredValue: function(r) {
      return he().memoizedState = r;
    },
    useTransition: function() {
      var r = Ic(false), t = r[0];
      return r = vw.bind(null, r[1]), he().memoizedState = r, [
        t,
        r
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(r, t, e) {
      var s = _t, o = he();
      if (tt) {
        if (e === void 0) throw Error(C(407));
        e = e();
      } else {
        if (e = t(), yt === null) throw Error(C(349));
        $r & 30 || Ol(s, t, e);
      }
      o.memoizedState = e;
      var n = {
        value: e,
        getSnapshot: t
      };
      return o.queue = n, Mc(Nl.bind(null, s, n, r), [
        r
      ]), s.flags |= 2048, so(9, Ll.bind(null, s, n, e, t), void 0, null), e;
    },
    useId: function() {
      var r = he(), t = yt.identifierPrefix;
      if (tt) {
        var e = qe, s = Ye;
        e = (s & ~(1 << 32 - we(s) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = no++, 0 < e && (t += "H" + e.toString(32)), t += ":";
      } else e = mw++, t = ":" + t + "r" + e.toString(32) + ":";
      return r.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Sw = {
    readContext: se,
    useCallback: Il,
    useContext: se,
    useEffect: Di,
    useImperativeHandle: Ul,
    useInsertionEffect: Rl,
    useLayoutEffect: $l,
    useMemo: Ml,
    useReducer: na,
    useRef: Tl,
    useState: function() {
      return na(oo);
    },
    useDebugValue: Ui,
    useDeferredValue: function(r) {
      var t = ae();
      return Wl(t, dt.memoizedState, r);
    },
    useTransition: function() {
      var r = na(oo)[0], t = ae().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: zl,
    useSyncExternalStore: Cl,
    useId: Ql,
    unstable_isNewReconciler: false
  }, Ew = {
    readContext: se,
    useCallback: Il,
    useContext: se,
    useEffect: Di,
    useImperativeHandle: Ul,
    useInsertionEffect: Rl,
    useLayoutEffect: $l,
    useMemo: Ml,
    useReducer: oa,
    useRef: Tl,
    useState: function() {
      return oa(oo);
    },
    useDebugValue: Ui,
    useDeferredValue: function(r) {
      var t = ae();
      return dt === null ? t.memoizedState = r : Wl(t, dt.memoizedState, r);
    },
    useTransition: function() {
      var r = oa(oo)[0], t = ae().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: zl,
    useSyncExternalStore: Cl,
    useId: Ql,
    unstable_isNewReconciler: false
  };
  function ce(r, t) {
    if (r && r.defaultProps) {
      t = rt({}, t), r = r.defaultProps;
      for (var e in r) t[e] === void 0 && (t[e] = r[e]);
      return t;
    }
    return t;
  }
  function Ma(r, t, e, s) {
    t = r.memoizedState, e = e(s, t), e = e == null ? t : rt({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
  }
  var zs = {
    isMounted: function(r) {
      return (r = r._reactInternals) ? Mr(r) === r : false;
    },
    enqueueSetState: function(r, t, e) {
      r = r._reactInternals;
      var s = Pt(), o = or(r), n = Ke(s, o);
      n.payload = t, e != null && (n.callback = e), t = rr(r, n, o), t !== null && (fe(t, r, o, s), Wo(t, r, o));
    },
    enqueueReplaceState: function(r, t, e) {
      r = r._reactInternals;
      var s = Pt(), o = or(r), n = Ke(s, o);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = rr(r, n, o), t !== null && (fe(t, r, o, s), Wo(t, r, o));
    },
    enqueueForceUpdate: function(r, t) {
      r = r._reactInternals;
      var e = Pt(), s = or(r), o = Ke(e, s);
      o.tag = 2, t != null && (o.callback = t), t = rr(r, o, s), t !== null && (fe(t, r, s, e), Wo(t, r, s));
    }
  };
  function Wc(r, t, e, s, o, n, c) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Jn(e, s) || !Jn(o, n) : true;
  }
  function Hl(r, t, e) {
    var s = false, o = ir, n = t.contextType;
    return typeof n == "object" && n !== null ? n = se(n) : (o = Vt(t) ? Tr : Ct.current, s = t.contextTypes, n = (s = s != null) ? pn(r, o) : ir), t = new t(e, n), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zs, r.stateNode = t, t._reactInternals = r, s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = n), t;
  }
  function Qc(r, t, e, s) {
    r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, s), t.state !== r && zs.enqueueReplaceState(t, t.state, null);
  }
  function Wa(r, t, e, s) {
    var o = r.stateNode;
    o.props = e, o.state = r.memoizedState, o.refs = {}, Li(r);
    var n = t.contextType;
    typeof n == "object" && n !== null ? o.context = se(n) : (n = Vt(t) ? Tr : Ct.current, o.context = pn(r, n)), o.state = r.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (Ma(r, t, n, e), o.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && zs.enqueueReplaceState(o, o.state, null), ds(r, e, o, s), o.state = r.memoizedState), typeof o.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function gn(r, t) {
    try {
      var e = "", s = t;
      do
        e += tu(s), s = s.return;
      while (s);
      var o = e;
    } catch (n) {
      o = `
Error generating stack: ` + n.message + `
` + n.stack;
    }
    return {
      value: r,
      source: t,
      stack: o,
      digest: null
    };
  }
  function sa(r, t, e) {
    return {
      value: r,
      source: null,
      stack: e ?? null,
      digest: t ?? null
    };
  }
  function Qa(r, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var zw = typeof WeakMap == "function" ? WeakMap : Map;
  function Yl(r, t, e) {
    e = Ke(-1, e), e.tag = 3, e.payload = {
      element: null
    };
    var s = t.value;
    return e.callback = function() {
      fs || (fs = true, Ja = s), Qa(r, t);
    }, e;
  }
  function ql(r, t, e) {
    e = Ke(-1, e), e.tag = 3;
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      e.payload = function() {
        return s(o);
      }, e.callback = function() {
        Qa(r, t);
      };
    }
    var n = r.stateNode;
    return n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      Qa(r, t), typeof s != "function" && (nr === null ? nr = /* @__PURE__ */ new Set([
        this
      ]) : nr.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    }), e;
  }
  function Vc(r, t, e) {
    var s = r.pingCache;
    if (s === null) {
      s = r.pingCache = new zw();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(e) || (o.add(e), r = Ww.bind(null, r, t, e), t.then(r, r));
  }
  function Bc(r) {
    do {
      var t;
      if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function Ac(r, t, e, s, o) {
    return r.mode & 1 ? (r.flags |= 65536, r.lanes = o, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = Ke(-1, 1), t.tag = 2, rr(e, t, 1))), e.lanes |= 1), r);
  }
  var Cw = e_.ReactCurrentOwner, Wt = false;
  function Lt(r, t, e, s) {
    t.child = r === null ? xl(t, null, e, s) : wn(t, r.child, e, s);
  }
  function Hc(r, t, e, s, o) {
    e = e.render;
    var n = t.ref;
    return sn(t, o), s = Ri(r, t, e, s, n, o), e = $i(), r !== null && !Wt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, t_(r, t, o)) : (tt && e && xi(t), t.flags |= 1, Lt(r, t, s, o), t.child);
  }
  function Yc(r, t, e, s, o) {
    if (r === null) {
      var n = e.type;
      return typeof n == "function" && !Hi(n) && n.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = n, Xl(r, t, n, s, o)) : (r = Yo(e.type, null, s, t, t.mode, o), r.ref = t.ref, r.return = t, t.child = r);
    }
    if (n = r.child, !(r.lanes & o)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Jn, e(c, s) && r.ref === t.ref) return t_(r, t, o);
    }
    return t.flags |= 1, r = sr(n, s), r.ref = t.ref, r.return = t, t.child = r;
  }
  function Xl(r, t, e, s, o) {
    if (r !== null) {
      var n = r.memoizedProps;
      if (Jn(n, s) && r.ref === t.ref) if (Wt = false, t.pendingProps = s = n, (r.lanes & o) !== 0) r.flags & 131072 && (Wt = true);
      else return t.lanes = r.lanes, t_(r, t, o);
    }
    return Va(r, t, e, s, o);
  }
  function Kl(r, t, e) {
    var s = t.pendingProps, o = s.children, n = r !== null ? r.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, X(tn, Ht), Ht |= e;
    else {
      if (!(e & 1073741824)) return r = n !== null ? n.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: r,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, X(tn, Ht), Ht |= r, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, s = n !== null ? n.baseLanes : e, X(tn, Ht), Ht |= s;
    }
    else n !== null ? (s = n.baseLanes | e, t.memoizedState = null) : s = e, X(tn, Ht), Ht |= s;
    return Lt(r, t, o, e), t.child;
  }
  function Zl(r, t) {
    var e = t.ref;
    (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Va(r, t, e, s, o) {
    var n = Vt(e) ? Tr : Ct.current;
    return n = pn(t, n), sn(t, o), e = Ri(r, t, e, s, n, o), s = $i(), r !== null && !Wt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, t_(r, t, o)) : (tt && s && xi(t), t.flags |= 1, Lt(r, t, e, o), t.child);
  }
  function qc(r, t, e, s, o) {
    if (Vt(e)) {
      var n = true;
      os(t);
    } else n = false;
    if (sn(t, o), t.stateNode === null) Bo(r, t), Hl(t, e, s), Wa(t, e, s, o), s = true;
    else if (r === null) {
      var c = t.stateNode, d = t.memoizedProps;
      c.props = d;
      var p = c.context, l = e.contextType;
      typeof l == "object" && l !== null ? l = se(l) : (l = Vt(e) ? Tr : Ct.current, l = pn(t, l));
      var m = e.getDerivedStateFromProps, x = typeof m == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      x || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== s || p !== l) && Qc(t, c, s, l), o_ = false;
      var k = t.memoizedState;
      c.state = k, ds(t, s, c, o), p = t.memoizedState, d !== s || k !== p || Qt.current || o_ ? (typeof m == "function" && (Ma(t, e, m, s), p = t.memoizedState), (d = o_ || Wc(t, e, d, s, k, p, l)) ? (x || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = p), c.props = s, c.state = p, c.context = l, s = d) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = false);
    } else {
      c = t.stateNode, Sl(r, t), d = t.memoizedProps, l = t.type === t.elementType ? d : ce(t.type, d), c.props = l, x = t.pendingProps, k = c.context, p = e.contextType, typeof p == "object" && p !== null ? p = se(p) : (p = Vt(e) ? Tr : Ct.current, p = pn(t, p));
      var z = e.getDerivedStateFromProps;
      (m = typeof z == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== x || k !== p) && Qc(t, c, s, p), o_ = false, k = t.memoizedState, c.state = k, ds(t, s, c, o);
      var L = t.memoizedState;
      d !== x || k !== L || Qt.current || o_ ? (typeof z == "function" && (Ma(t, e, z, s), L = t.memoizedState), (l = o_ || Wc(t, e, l, s, k, L, p) || false) ? (m || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, L, p), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, L, p)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = L), c.props = s, c.state = L, c.context = p, s = l) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), s = false);
    }
    return Ba(r, t, e, s, n, o);
  }
  function Ba(r, t, e, s, o, n) {
    Zl(r, t);
    var c = (t.flags & 128) !== 0;
    if (!s && !c) return o && Pc(t, e, false), t_(r, t, n);
    s = t.stateNode, Cw.current = t;
    var d = c && typeof e.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, r !== null && c ? (t.child = wn(t, r.child, null, n), t.child = wn(t, null, d, n)) : Lt(r, t, d, n), t.memoizedState = s.state, o && Pc(t, e, true), t.child;
  }
  function Jl(r) {
    var t = r.stateNode;
    t.pendingContext ? Fc(r, t.pendingContext, t.pendingContext !== t.context) : t.context && Fc(r, t.context, false), Ni(r, t.containerInfo);
  }
  function Xc(r, t, e, s, o) {
    return un(), Si(o), t.flags |= 256, Lt(r, t, e, s), t.child;
  }
  var Aa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Ha(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function Gl(r, t, e) {
    var s = t.pendingProps, o = et.current, n = false, c = (t.flags & 128) !== 0, d;
    if ((d = c) || (d = r !== null && r.memoizedState === null ? false : (o & 2) !== 0), d ? (n = true, t.flags &= -129) : (r === null || r.memoizedState !== null) && (o |= 1), X(et, o & 1), r === null) return Ua(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = s.children, r = s.fallback, n ? (s = t.mode, n = t.child, c = {
      mode: "hidden",
      children: c
    }, !(s & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = c) : n = Ls(c, s, 0, null), r = Pr(r, s, e, null), n.return = t, r.return = t, n.sibling = r, t.child = n, t.child.memoizedState = Ha(e), t.memoizedState = Aa, r) : Ii(t, c));
    if (o = r.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return Ow(r, t, c, s, d, o, e);
    if (n) {
      n = s.fallback, c = t.mode, o = r.child, d = o.sibling;
      var p = {
        mode: "hidden",
        children: s.children
      };
      return !(c & 1) && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = p, t.deletions = null) : (s = sr(o, p), s.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? n = sr(d, n) : (n = Pr(n, c, e, null), n.flags |= 2), n.return = t, s.return = t, s.sibling = n, t.child = s, s = n, n = t.child, c = r.child.memoizedState, c = c === null ? Ha(e) : {
        baseLanes: c.baseLanes | e,
        cachePool: null,
        transitions: c.transitions
      }, n.memoizedState = c, n.childLanes = r.childLanes & ~e, t.memoizedState = Aa, s;
    }
    return n = r.child, r = n.sibling, s = sr(n, {
      mode: "visible",
      children: s.children
    }), !(t.mode & 1) && (s.lanes = e), s.return = t, s.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [
      r
    ], t.flags |= 16) : e.push(r)), t.child = s, t.memoizedState = null, s;
  }
  function Ii(r, t) {
    return t = Ls({
      mode: "visible",
      children: t
    }, r.mode, 0, null), t.return = r, r.child = t;
  }
  function Lo(r, t, e, s) {
    return s !== null && Si(s), wn(t, r.child, null, e), r = Ii(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
  }
  function Ow(r, t, e, s, o, n, c) {
    if (e) return t.flags & 256 ? (t.flags &= -257, s = sa(Error(C(422))), Lo(r, t, c, s)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (n = s.fallback, o = t.mode, s = Ls({
      mode: "visible",
      children: s.children
    }, o, 0, null), n = Pr(n, o, c, null), n.flags |= 2, s.return = t, n.return = t, s.sibling = n, t.child = s, t.mode & 1 && wn(t, r.child, null, c), t.child.memoizedState = Ha(c), t.memoizedState = Aa, n);
    if (!(t.mode & 1)) return Lo(r, t, c, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var d = s.dgst;
      return s = d, n = Error(C(419)), s = sa(n, s, void 0), Lo(r, t, c, s);
    }
    if (d = (c & r.childLanes) !== 0, Wt || d) {
      if (s = yt, s !== null) {
        switch (c & -c) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = o & (s.suspendedLanes | c) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, Ge(r, o), fe(s, r, o, -1));
      }
      return Ai(), s = sa(Error(C(421))), Lo(r, t, c, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = r.child, t = Qw.bind(null, r), o._reactRetry = t, null) : (r = n.treeContext, qt = _r(o.nextSibling), Xt = t, tt = true, pe = null, r !== null && (te[ee++] = Ye, te[ee++] = qe, te[ee++] = Rr, Ye = r.id, qe = r.overflow, Rr = t), t = Ii(t, s.children), t.flags |= 4096, t);
  }
  function Kc(r, t, e) {
    r.lanes |= t;
    var s = r.alternate;
    s !== null && (s.lanes |= t), Ia(r.return, t, e);
  }
  function aa(r, t, e, s, o) {
    var n = r.memoizedState;
    n === null ? r.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: s,
      tail: e,
      tailMode: o
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = s, n.tail = e, n.tailMode = o);
  }
  function tp(r, t, e) {
    var s = t.pendingProps, o = s.revealOrder, n = s.tail;
    if (Lt(r, t, s.children, e), s = et.current, s & 2) s = s & 1 | 2, t.flags |= 128;
    else {
      if (r !== null && r.flags & 128) t: for (r = t.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && Kc(r, e, t);
        else if (r.tag === 19) Kc(r, e, t);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t) break t;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) break t;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      s &= 1;
    }
    if (X(et, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (e = t.child, o = null; e !== null; ) r = e.alternate, r !== null && ls(r) === null && (o = e), e = e.sibling;
        e = o, e === null ? (o = t.child, t.child = null) : (o = e.sibling, e.sibling = null), aa(t, false, o, e, n);
        break;
      case "backwards":
        for (e = null, o = t.child, t.child = null; o !== null; ) {
          if (r = o.alternate, r !== null && ls(r) === null) {
            t.child = o;
            break;
          }
          r = o.sibling, o.sibling = e, e = o, o = r;
        }
        aa(t, true, e, null, n);
        break;
      case "together":
        aa(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Bo(r, t) {
    !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function t_(r, t, e) {
    if (r !== null && (t.dependencies = r.dependencies), Dr |= t.lanes, !(e & t.childLanes)) return null;
    if (r !== null && t.child !== r.child) throw Error(C(153));
    if (t.child !== null) {
      for (r = t.child, e = sr(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; ) r = r.sibling, e = e.sibling = sr(r, r.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Lw(r, t, e) {
    switch (t.tag) {
      case 3:
        Jl(t), un();
        break;
      case 5:
        El(t);
        break;
      case 1:
        Vt(t.type) && os(t);
        break;
      case 4:
        Ni(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        X(is, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (X(et, et.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? Gl(r, t, e) : (X(et, et.current & 1), r = t_(r, t, e), r !== null ? r.sibling : null);
        X(et, et.current & 1);
        break;
      case 19:
        if (s = (e & t.childLanes) !== 0, r.flags & 128) {
          if (s) return tp(r, t, e);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), X(et, et.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Kl(r, t, e);
    }
    return t_(r, t, e);
  }
  var ep, Ya, _p, rp;
  ep = function(r, t) {
    for (var e = t.child; e !== null; ) {
      if (e.tag === 5 || e.tag === 6) r.appendChild(e.stateNode);
      else if (e.tag !== 4 && e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  };
  Ya = function() {
  };
  _p = function(r, t, e, s) {
    var o = r.memoizedProps;
    if (o !== s) {
      r = t.stateNode, vr(ze.current);
      var n = null;
      switch (e) {
        case "input":
          o = fa(r, o), s = fa(r, s), n = [];
          break;
        case "select":
          o = rt({}, o, {
            value: void 0
          }), s = rt({}, s, {
            value: void 0
          }), n = [];
          break;
        case "textarea":
          o = ha(r, o), s = ha(r, s), n = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (r.onclick = rs);
      }
      ma(e, s);
      var c;
      e = null;
      for (l in o) if (!s.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if (l === "style") {
        var d = o[l];
        for (c in d) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
      } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (An.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
      for (l in s) {
        var p = s[l];
        if (d = o == null ? void 0 : o[l], s.hasOwnProperty(l) && p !== d && (p != null || d != null)) if (l === "style") if (d) {
          for (c in d) !d.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
          for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (e || (e = {}), e[c] = p[c]);
        } else e || (n || (n = []), n.push(l, e)), e = p;
        else l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (n = n || []).push(l, p)) : l === "children" ? typeof p != "string" && typeof p != "number" || (n = n || []).push(l, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (An.hasOwnProperty(l) ? (p != null && l === "onScroll" && K("scroll", r), n || d === p || (n = [])) : (n = n || []).push(l, p));
      }
      e && (n = n || []).push("style", e);
      var l = n;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  rp = function(r, t, e, s) {
    e !== s && (t.flags |= 4);
  };
  function zn(r, t) {
    if (!tt) switch (r.tailMode) {
      case "hidden":
        t = r.tail;
        for (var e = null; t !== null; ) t.alternate !== null && (e = t), t = t.sibling;
        e === null ? r.tail = null : e.sibling = null;
        break;
      case "collapsed":
        e = r.tail;
        for (var s = null; e !== null; ) e.alternate !== null && (s = e), e = e.sibling;
        s === null ? t || r.tail === null ? r.tail = null : r.tail.sibling = null : s.sibling = null;
    }
  }
  function jt(r) {
    var t = r.alternate !== null && r.alternate.child === r.child, e = 0, s = 0;
    if (t) for (var o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = r, o = o.sibling;
    else for (o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = r, o = o.sibling;
    return r.subtreeFlags |= s, r.childLanes = e, t;
  }
  function Nw(r, t, e) {
    var s = t.pendingProps;
    switch (ji(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return jt(t), null;
      case 1:
        return Vt(t.type) && ns(), jt(t), null;
      case 3:
        return s = t.stateNode, fn(), G(Qt), G(Ct), Pi(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (r === null || r.child === null) && (Co(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pe !== null && (ei(pe), pe = null))), Ya(r, t), jt(t), null;
      case 5:
        Fi(t);
        var o = vr(ro.current);
        if (e = t.type, r !== null && t.stateNode != null) _p(r, t, e, s, o), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(C(166));
            return jt(t), null;
          }
          if (r = vr(ze.current), Co(t)) {
            s = t.stateNode, e = t.type;
            var n = t.memoizedProps;
            switch (s[ve] = t, s[eo] = n, r = (t.mode & 1) !== 0, e) {
              case "dialog":
                K("cancel", s), K("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Fn.length; o++) K(Fn[o], s);
                break;
              case "source":
                K("error", s);
                break;
              case "img":
              case "image":
              case "link":
                K("error", s), K("load", s);
                break;
              case "details":
                K("toggle", s);
                break;
              case "input":
                oc(s, n), K("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!n.multiple
                }, K("invalid", s);
                break;
              case "textarea":
                ac(s, n), K("invalid", s);
            }
            ma(e, n), o = null;
            for (var c in n) if (n.hasOwnProperty(c)) {
              var d = n[c];
              c === "children" ? typeof d == "string" ? s.textContent !== d && (n.suppressHydrationWarning !== true && zo(s.textContent, d, r), o = [
                "children",
                d
              ]) : typeof d == "number" && s.textContent !== "" + d && (n.suppressHydrationWarning !== true && zo(s.textContent, d, r), o = [
                "children",
                "" + d
              ]) : An.hasOwnProperty(c) && d != null && c === "onScroll" && K("scroll", s);
            }
            switch (e) {
              case "input":
                yo(s), sc(s, n, true);
                break;
              case "textarea":
                yo(s), ic(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof n.onClick == "function" && (s.onclick = rs);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Nd(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof s.is == "string" ? r = c.createElement(e, {
              is: s.is
            }) : (r = c.createElement(e), e === "select" && (c = r, s.multiple ? c.multiple = true : s.size && (c.size = s.size))) : r = c.createElementNS(r, e), r[ve] = t, r[eo] = s, ep(r, t, false, false), t.stateNode = r;
            t: {
              switch (c = va(e, s), e) {
                case "dialog":
                  K("cancel", r), K("close", r), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  K("load", r), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Fn.length; o++) K(Fn[o], r);
                  o = s;
                  break;
                case "source":
                  K("error", r), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  K("error", r), K("load", r), o = s;
                  break;
                case "details":
                  K("toggle", r), o = s;
                  break;
                case "input":
                  oc(r, s), o = fa(r, s), K("invalid", r);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, o = rt({}, s, {
                    value: void 0
                  }), K("invalid", r);
                  break;
                case "textarea":
                  ac(r, s), o = ha(r, s), K("invalid", r);
                  break;
                default:
                  o = s;
              }
              ma(e, o), d = o;
              for (n in d) if (d.hasOwnProperty(n)) {
                var p = d[n];
                n === "style" ? Td(r, p) : n === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Fd(r, p)) : n === "children" ? typeof p == "string" ? (e !== "textarea" || p !== "") && Hn(r, p) : typeof p == "number" && Hn(r, "" + p) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (An.hasOwnProperty(n) ? p != null && n === "onScroll" && K("scroll", r) : p != null && ci(r, n, p, c));
              }
              switch (e) {
                case "input":
                  yo(r), sc(r, s, false);
                  break;
                case "textarea":
                  yo(r), ic(r);
                  break;
                case "option":
                  s.value != null && r.setAttribute("value", "" + ar(s.value));
                  break;
                case "select":
                  r.multiple = !!s.multiple, n = s.value, n != null ? _n(r, !!s.multiple, n, false) : s.defaultValue != null && _n(r, !!s.multiple, s.defaultValue, true);
                  break;
                default:
                  typeof o.onClick == "function" && (r.onclick = rs);
              }
              switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break t;
                case "img":
                  s = true;
                  break t;
                default:
                  s = false;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return jt(t), null;
      case 6:
        if (r && t.stateNode != null) rp(r, t, r.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(C(166));
          if (e = vr(ro.current), vr(ze.current), Co(t)) {
            if (s = t.stateNode, e = t.memoizedProps, s[ve] = t, (n = s.nodeValue !== e) && (r = Xt, r !== null)) switch (r.tag) {
              case 3:
                zo(s.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== true && zo(s.nodeValue, e, (r.mode & 1) !== 0);
            }
            n && (t.flags |= 4);
          } else s = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(s), s[ve] = t, t.stateNode = s;
        }
        return jt(t), null;
      case 13:
        if (G(et), s = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (tt && qt !== null && t.mode & 1 && !(t.flags & 128)) vl(), un(), t.flags |= 98560, n = false;
          else if (n = Co(t), s !== null && s.dehydrated !== null) {
            if (r === null) {
              if (!n) throw Error(C(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(C(317));
              n[ve] = t;
            } else un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            jt(t), n = false;
          } else pe !== null && (ei(pe), pe = null), n = true;
          if (!n) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = e, t) : (s = s !== null, s !== (r !== null && r.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (r === null || et.current & 1 ? pt === 0 && (pt = 3) : Ai())), t.updateQueue !== null && (t.flags |= 4), jt(t), null);
      case 4:
        return fn(), Ya(r, t), r === null && Gn(t.stateNode.containerInfo), jt(t), null;
      case 10:
        return Ci(t.type._context), jt(t), null;
      case 17:
        return Vt(t.type) && ns(), jt(t), null;
      case 19:
        if (G(et), n = t.memoizedState, n === null) return jt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) zn(n, false);
        else {
          if (pt !== 0 || r !== null && r.flags & 128) for (r = t.child; r !== null; ) {
            if (c = ls(r), c !== null) {
              for (t.flags |= 128, zn(n, false), s = c.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = e, e = t.child; e !== null; ) n = e, r = s, n.flags &= 14680066, c = n.alternate, c === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = c.childLanes, n.lanes = c.lanes, n.child = c.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = c.memoizedProps, n.memoizedState = c.memoizedState, n.updateQueue = c.updateQueue, n.type = c.type, r = c.dependencies, n.dependencies = r === null ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
              }), e = e.sibling;
              return X(et, et.current & 1 | 2), t.child;
            }
            r = r.sibling;
          }
          n.tail !== null && at() > bn && (t.flags |= 128, s = true, zn(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (r = ls(c), r !== null) {
            if (t.flags |= 128, s = true, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), zn(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !tt) return jt(t), null;
          } else 2 * at() - n.renderingStartTime > bn && e !== 1073741824 && (t.flags |= 128, s = true, zn(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = at(), t.sibling = null, e = et.current, X(et, s ? e & 1 | 2 : e & 1), t) : (jt(t), null);
      case 22:
      case 23:
        return Bi(), s = t.memoizedState !== null, r !== null && r.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? Ht & 1073741824 && (jt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : jt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, t.tag));
  }
  function Fw(r, t) {
    switch (ji(t), t.tag) {
      case 1:
        return Vt(t.type) && ns(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 3:
        return fn(), G(Qt), G(Ct), Pi(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
      case 5:
        return Fi(t), null;
      case 13:
        if (G(et), r = t.memoizedState, r !== null && r.dehydrated !== null) {
          if (t.alternate === null) throw Error(C(340));
          un();
        }
        return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 19:
        return G(et), null;
      case 4:
        return fn(), null;
      case 10:
        return Ci(t.type._context), null;
      case 22:
      case 23:
        return Bi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var No = false, Et = false, Pw = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function Gr(r, t) {
    var e = r.ref;
    if (e !== null) if (typeof e == "function") try {
      e(null);
    } catch (s) {
      nt(r, t, s);
    }
    else e.current = null;
  }
  function qa(r, t, e) {
    try {
      e();
    } catch (s) {
      nt(r, t, s);
    }
  }
  var Zc = false;
  function Tw(r, t) {
    if (Na = ts, r = il(), ki(r)) {
      if ("selectionStart" in r) var e = {
        start: r.selectionStart,
        end: r.selectionEnd
      };
      else t: {
        e = (e = r.ownerDocument) && e.defaultView || window;
        var s = e.getSelection && e.getSelection();
        if (s && s.rangeCount !== 0) {
          e = s.anchorNode;
          var o = s.anchorOffset, n = s.focusNode;
          s = s.focusOffset;
          try {
            e.nodeType, n.nodeType;
          } catch {
            e = null;
            break t;
          }
          var c = 0, d = -1, p = -1, l = 0, m = 0, x = r, k = null;
          e: for (; ; ) {
            for (var z; x !== e || o !== 0 && x.nodeType !== 3 || (d = c + o), x !== n || s !== 0 && x.nodeType !== 3 || (p = c + s), x.nodeType === 3 && (c += x.nodeValue.length), (z = x.firstChild) !== null; ) k = x, x = z;
            for (; ; ) {
              if (x === r) break e;
              if (k === e && ++l === o && (d = c), k === n && ++m === s && (p = c), (z = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = z;
          }
          e = d === -1 || p === -1 ? null : {
            start: d,
            end: p
          };
        } else e = null;
      }
      e = e || {
        start: 0,
        end: 0
      };
    } else e = null;
    for (Fa = {
      focusedElem: r,
      selectionRange: e
    }, ts = false, R = t; R !== null; ) if (t = R, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, R = r;
    else for (; R !== null; ) {
      t = R;
      try {
        var L = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (L !== null) {
              var N = L.memoizedProps, V = L.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? N : ce(t.type, N), V);
              y.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var v = t.stateNode.containerInfo;
            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(C(163));
        }
      } catch (E) {
        nt(t, t.return, E);
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, R = r;
        break;
      }
      R = t.return;
    }
    return L = Zc, Zc = false, L;
  }
  function In(r, t, e) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var n = o.destroy;
          o.destroy = void 0, n !== void 0 && qa(t, e, n);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Cs(r, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var e = t = t.next;
      do {
        if ((e.tag & r) === r) {
          var s = e.create;
          e.destroy = s();
        }
        e = e.next;
      } while (e !== t);
    }
  }
  function Xa(r) {
    var t = r.ref;
    if (t !== null) {
      var e = r.stateNode;
      switch (r.tag) {
        case 5:
          r = e;
          break;
        default:
          r = e;
      }
      typeof t == "function" ? t(r) : t.current = r;
    }
  }
  function np(r) {
    var t = r.alternate;
    t !== null && (r.alternate = null, np(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[ve], delete t[eo], delete t[Ra], delete t[gw], delete t[bw])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function op(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function Jc(r) {
    t: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || op(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function Ka(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = rs));
    else if (s !== 4 && (r = r.child, r !== null)) for (Ka(r, t, e), r = r.sibling; r !== null; ) Ka(r, t, e), r = r.sibling;
  }
  function Za(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
    else if (s !== 4 && (r = r.child, r !== null)) for (Za(r, t, e), r = r.sibling; r !== null; ) Za(r, t, e), r = r.sibling;
  }
  var mt = null, le = false;
  function r_(r, t, e) {
    for (e = e.child; e !== null; ) sp(r, t, e), e = e.sibling;
  }
  function sp(r, t, e) {
    if (Ee && typeof Ee.onCommitFiberUnmount == "function") try {
      Ee.onCommitFiberUnmount(ms, e);
    } catch {
    }
    switch (e.tag) {
      case 5:
        Et || Gr(e, t);
      case 6:
        var s = mt, o = le;
        mt = null, r_(r, t, e), mt = s, le = o, mt !== null && (le ? (r = mt, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : mt.removeChild(e.stateNode));
        break;
      case 18:
        mt !== null && (le ? (r = mt, e = e.stateNode, r.nodeType === 8 ? ta(r.parentNode, e) : r.nodeType === 1 && ta(r, e), Kn(r)) : ta(mt, e.stateNode));
        break;
      case 4:
        s = mt, o = le, mt = e.stateNode.containerInfo, le = true, r_(r, t, e), mt = s, le = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Et && (s = e.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var n = o, c = n.destroy;
            n = n.tag, c !== void 0 && (n & 2 || n & 4) && qa(e, t, c), o = o.next;
          } while (o !== s);
        }
        r_(r, t, e);
        break;
      case 1:
        if (!Et && (Gr(e, t), s = e.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = e.memoizedProps, s.state = e.memoizedState, s.componentWillUnmount();
        } catch (d) {
          nt(e, t, d);
        }
        r_(r, t, e);
        break;
      case 21:
        r_(r, t, e);
        break;
      case 22:
        e.mode & 1 ? (Et = (s = Et) || e.memoizedState !== null, r_(r, t, e), Et = s) : r_(r, t, e);
        break;
      default:
        r_(r, t, e);
    }
  }
  function Gc(r) {
    var t = r.updateQueue;
    if (t !== null) {
      r.updateQueue = null;
      var e = r.stateNode;
      e === null && (e = r.stateNode = new Pw()), t.forEach(function(s) {
        var o = Vw.bind(null, r, s);
        e.has(s) || (e.add(s), s.then(o, o));
      });
    }
  }
  function ie(r, t) {
    var e = t.deletions;
    if (e !== null) for (var s = 0; s < e.length; s++) {
      var o = e[s];
      try {
        var n = r, c = t, d = c;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              mt = d.stateNode, le = false;
              break t;
            case 3:
              mt = d.stateNode.containerInfo, le = true;
              break t;
            case 4:
              mt = d.stateNode.containerInfo, le = true;
              break t;
          }
          d = d.return;
        }
        if (mt === null) throw Error(C(160));
        sp(n, c, o), mt = null, le = false;
        var p = o.alternate;
        p !== null && (p.return = null), o.return = null;
      } catch (l) {
        nt(o, t, l);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ap(t, r), t = t.sibling;
  }
  function ap(r, t) {
    var e = r.alternate, s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ie(t, r), be(r), s & 4) {
          try {
            In(3, r, r.return), Cs(3, r);
          } catch (N) {
            nt(r, r.return, N);
          }
          try {
            In(5, r, r.return);
          } catch (N) {
            nt(r, r.return, N);
          }
        }
        break;
      case 1:
        ie(t, r), be(r), s & 512 && e !== null && Gr(e, e.return);
        break;
      case 5:
        if (ie(t, r), be(r), s & 512 && e !== null && Gr(e, e.return), r.flags & 32) {
          var o = r.stateNode;
          try {
            Hn(o, "");
          } catch (N) {
            nt(r, r.return, N);
          }
        }
        if (s & 4 && (o = r.stateNode, o != null)) {
          var n = r.memoizedProps, c = e !== null ? e.memoizedProps : n, d = r.type, p = r.updateQueue;
          if (r.updateQueue = null, p !== null) try {
            d === "input" && n.type === "radio" && n.name != null && Od(o, n), va(d, c);
            var l = va(d, n);
            for (c = 0; c < p.length; c += 2) {
              var m = p[c], x = p[c + 1];
              m === "style" ? Td(o, x) : m === "dangerouslySetInnerHTML" ? Fd(o, x) : m === "children" ? Hn(o, x) : ci(o, m, x, l);
            }
            switch (d) {
              case "input":
                ga(o, n);
                break;
              case "textarea":
                Ld(o, n);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!n.multiple;
                var z = n.value;
                z != null ? _n(o, !!n.multiple, z, false) : k !== !!n.multiple && (n.defaultValue != null ? _n(o, !!n.multiple, n.defaultValue, true) : _n(o, !!n.multiple, n.multiple ? [] : "", false));
            }
            o[eo] = n;
          } catch (N) {
            nt(r, r.return, N);
          }
        }
        break;
      case 6:
        if (ie(t, r), be(r), s & 4) {
          if (r.stateNode === null) throw Error(C(162));
          o = r.stateNode, n = r.memoizedProps;
          try {
            o.nodeValue = n;
          } catch (N) {
            nt(r, r.return, N);
          }
        }
        break;
      case 3:
        if (ie(t, r), be(r), s & 4 && e !== null && e.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (N) {
          nt(r, r.return, N);
        }
        break;
      case 4:
        ie(t, r), be(r);
        break;
      case 13:
        ie(t, r), be(r), o = r.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (Qi = at())), s & 4 && Gc(r);
        break;
      case 22:
        if (m = e !== null && e.memoizedState !== null, r.mode & 1 ? (Et = (l = Et) || m, ie(t, r), Et = l) : ie(t, r), be(r), s & 8192) {
          if (l = r.memoizedState !== null, (r.stateNode.isHidden = l) && !m && r.mode & 1) for (R = r, m = r.child; m !== null; ) {
            for (x = R = m; R !== null; ) {
              switch (k = R, z = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, k, k.return);
                  break;
                case 1:
                  Gr(k, k.return);
                  var L = k.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    s = k, e = k.return;
                    try {
                      t = s, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount();
                    } catch (N) {
                      nt(s, e, N);
                    }
                  }
                  break;
                case 5:
                  Gr(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    ed(x);
                    continue;
                  }
              }
              z !== null ? (z.return = k, R = z) : ed(x);
            }
            m = m.sibling;
          }
          t: for (m = null, x = r; ; ) {
            if (x.tag === 5) {
              if (m === null) {
                m = x;
                try {
                  o = x.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (d = x.stateNode, p = x.memoizedProps.style, c = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Pd("display", c));
                } catch (N) {
                  nt(r, r.return, N);
                }
              }
            } else if (x.tag === 6) {
              if (m === null) try {
                x.stateNode.nodeValue = l ? "" : x.memoizedProps;
              } catch (N) {
                nt(r, r.return, N);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === r) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === r) break t;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === r) break t;
              m === x && (m = null), x = x.return;
            }
            m === x && (m = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ie(t, r), be(r), s & 4 && Gc(r);
        break;
      case 21:
        break;
      default:
        ie(t, r), be(r);
    }
  }
  function be(r) {
    var t = r.flags;
    if (t & 2) {
      try {
        t: {
          for (var e = r.return; e !== null; ) {
            if (op(e)) {
              var s = e;
              break t;
            }
            e = e.return;
          }
          throw Error(C(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (Hn(o, ""), s.flags &= -33);
            var n = Jc(r);
            Za(r, n, o);
            break;
          case 3:
          case 4:
            var c = s.stateNode.containerInfo, d = Jc(r);
            Ka(r, d, c);
            break;
          default:
            throw Error(C(161));
        }
      } catch (p) {
        nt(r, r.return, p);
      }
      r.flags &= -3;
    }
    t & 4096 && (r.flags &= -4097);
  }
  function Rw(r, t, e) {
    R = r, ip(r);
  }
  function ip(r, t, e) {
    for (var s = (r.mode & 1) !== 0; R !== null; ) {
      var o = R, n = o.child;
      if (o.tag === 22 && s) {
        var c = o.memoizedState !== null || No;
        if (!c) {
          var d = o.alternate, p = d !== null && d.memoizedState !== null || Et;
          d = No;
          var l = Et;
          if (No = c, (Et = p) && !l) for (R = o; R !== null; ) c = R, p = c.child, c.tag === 22 && c.memoizedState !== null ? _d(o) : p !== null ? (p.return = c, R = p) : _d(o);
          for (; n !== null; ) R = n, ip(n), n = n.sibling;
          R = o, No = d, Et = l;
        }
        td(r);
      } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, R = n) : td(r);
    }
  }
  function td(r) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var e = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Et || Cs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Et) if (e === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? e.memoizedProps : ce(t.type, e.memoizedProps);
                s.componentDidUpdate(o, e.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var n = t.updateQueue;
              n !== null && Uc(t, n, s);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (e = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    e = t.child.stateNode;
                    break;
                  case 1:
                    e = t.child.stateNode;
                }
                Uc(t, c, e);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (e === null && t.flags & 4) {
                e = d;
                var p = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    p.autoFocus && e.focus();
                    break;
                  case "img":
                    p.src && (e.src = p.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate;
                if (l !== null) {
                  var m = l.memoizedState;
                  if (m !== null) {
                    var x = m.dehydrated;
                    x !== null && Kn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
          Et || t.flags & 512 && Xa(t);
        } catch (k) {
          nt(t, t.return, k);
        }
      }
      if (t === r) {
        R = null;
        break;
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, R = e;
        break;
      }
      R = t.return;
    }
  }
  function ed(r) {
    for (; R !== null; ) {
      var t = R;
      if (t === r) {
        R = null;
        break;
      }
      var e = t.sibling;
      if (e !== null) {
        e.return = t.return, R = e;
        break;
      }
      R = t.return;
    }
  }
  function _d(r) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var e = t.return;
            try {
              Cs(4, t);
            } catch (p) {
              nt(t, e, p);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (p) {
                nt(t, o, p);
              }
            }
            var n = t.return;
            try {
              Xa(t);
            } catch (p) {
              nt(t, n, p);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Xa(t);
            } catch (p) {
              nt(t, c, p);
            }
        }
      } catch (p) {
        nt(t, t.return, p);
      }
      if (t === r) {
        R = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, R = d;
        break;
      }
      R = t.return;
    }
  }
  var $w = Math.ceil, ws = e_.ReactCurrentDispatcher, Mi = e_.ReactCurrentOwner, oe = e_.ReactCurrentBatchConfig, A = 0, yt = null, ct = null, vt = 0, Ht = 0, tn = dr(0), pt = 0, ao = null, Dr = 0, Os = 0, Wi = 0, Mn = null, Mt = null, Qi = 0, bn = 1 / 0, Fe = null, fs = false, Ja = null, nr = null, Fo = false, K_ = null, gs = 0, Wn = 0, Ga = null, Ao = -1, Ho = 0;
  function Pt() {
    return A & 6 ? at() : Ao !== -1 ? Ao : Ao = at();
  }
  function or(r) {
    return r.mode & 1 ? A & 2 && vt !== 0 ? vt & -vt : yw.transition !== null ? (Ho === 0 && (Ho = Hd()), Ho) : (r = Y, r !== 0 || (r = window.event, r = r === void 0 ? 16 : Gd(r.type)), r) : 1;
  }
  function fe(r, t, e, s) {
    if (50 < Wn) throw Wn = 0, Ga = null, Error(C(185));
    lo(r, e, s), (!(A & 2) || r !== yt) && (r === yt && (!(A & 2) && (Os |= e), pt === 4 && i_(r, vt)), Bt(r, s), e === 1 && A === 0 && !(t.mode & 1) && (bn = at() + 500, Ss && lr()));
  }
  function Bt(r, t) {
    var e = r.callbackNode;
    yu(r, t);
    var s = Go(r, r === yt ? vt : 0);
    if (s === 0) e !== null && lc(e), r.callbackNode = null, r.callbackPriority = 0;
    else if (t = s & -s, r.callbackPriority !== t) {
      if (e != null && lc(e), t === 1) r.tag === 0 ? hw(rd.bind(null, r)) : hl(rd.bind(null, r)), ww(function() {
        !(A & 6) && lr();
      }), e = null;
      else {
        switch (Yd(s)) {
          case 1:
            e = wi;
            break;
          case 4:
            e = Bd;
            break;
          case 16:
            e = Jo;
            break;
          case 536870912:
            e = Ad;
            break;
          default:
            e = Jo;
        }
        e = gp(e, cp.bind(null, r));
      }
      r.callbackPriority = t, r.callbackNode = e;
    }
  }
  function cp(r, t) {
    if (Ao = -1, Ho = 0, A & 6) throw Error(C(327));
    var e = r.callbackNode;
    if (an() && r.callbackNode !== e) return null;
    var s = Go(r, r === yt ? vt : 0);
    if (s === 0) return null;
    if (s & 30 || s & r.expiredLanes || t) t = bs(r, s);
    else {
      t = s;
      var o = A;
      A |= 2;
      var n = lp();
      (yt !== r || vt !== t) && (Fe = null, bn = at() + 500, Fr(r, t));
      do
        try {
          Iw();
          break;
        } catch (d) {
          dp(r, d);
        }
      while (true);
      zi(), ws.current = n, A = o, ct !== null ? t = 0 : (yt = null, vt = 0, t = pt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Ea(r), o !== 0 && (s = o, t = ti(r, o))), t === 1) throw e = ao, Fr(r, 0), i_(r, s), Bt(r, at()), e;
      if (t === 6) i_(r, s);
      else {
        if (o = r.current.alternate, !(s & 30) && !Dw(o) && (t = bs(r, s), t === 2 && (n = Ea(r), n !== 0 && (s = n, t = ti(r, n))), t === 1)) throw e = ao, Fr(r, 0), i_(r, s), Bt(r, at()), e;
        switch (r.finishedWork = o, r.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            fr(r, Mt, Fe);
            break;
          case 3:
            if (i_(r, s), (s & 130023424) === s && (t = Qi + 500 - at(), 10 < t)) {
              if (Go(r, 0) !== 0) break;
              if (o = r.suspendedLanes, (o & s) !== s) {
                Pt(), r.pingedLanes |= r.suspendedLanes & o;
                break;
              }
              r.timeoutHandle = Ta(fr.bind(null, r, Mt, Fe), t);
              break;
            }
            fr(r, Mt, Fe);
            break;
          case 4:
            if (i_(r, s), (s & 4194240) === s) break;
            for (t = r.eventTimes, o = -1; 0 < s; ) {
              var c = 31 - we(s);
              n = 1 << c, c = t[c], c > o && (o = c), s &= ~n;
            }
            if (s = o, s = at() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * $w(s / 1960)) - s, 10 < s) {
              r.timeoutHandle = Ta(fr.bind(null, r, Mt, Fe), s);
              break;
            }
            fr(r, Mt, Fe);
            break;
          case 5:
            fr(r, Mt, Fe);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return Bt(r, at()), r.callbackNode === e ? cp.bind(null, r) : null;
  }
  function ti(r, t) {
    var e = Mn;
    return r.current.memoizedState.isDehydrated && (Fr(r, t).flags |= 256), r = bs(r, t), r !== 2 && (t = Mt, Mt = e, t !== null && ei(t)), r;
  }
  function ei(r) {
    Mt === null ? Mt = r : Mt.push.apply(Mt, r);
  }
  function Dw(r) {
    for (var t = r; ; ) {
      if (t.flags & 16384) {
        var e = t.updateQueue;
        if (e !== null && (e = e.stores, e !== null)) for (var s = 0; s < e.length; s++) {
          var o = e[s], n = o.getSnapshot;
          o = o.value;
          try {
            if (!ge(n(), o)) return false;
          } catch {
            return false;
          }
        }
      }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e;
      else {
        if (t === r) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === r) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function i_(r, t) {
    for (t &= ~Wi, t &= ~Os, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
      var e = 31 - we(t), s = 1 << e;
      r[e] = -1, t &= ~s;
    }
  }
  function rd(r) {
    if (A & 6) throw Error(C(327));
    an();
    var t = Go(r, 0);
    if (!(t & 1)) return Bt(r, at()), null;
    var e = bs(r, t);
    if (r.tag !== 0 && e === 2) {
      var s = Ea(r);
      s !== 0 && (t = s, e = ti(r, s));
    }
    if (e === 1) throw e = ao, Fr(r, 0), i_(r, t), Bt(r, at()), e;
    if (e === 6) throw Error(C(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = t, fr(r, Mt, Fe), Bt(r, at()), null;
  }
  function Vi(r, t) {
    var e = A;
    A |= 1;
    try {
      return r(t);
    } finally {
      A = e, A === 0 && (bn = at() + 500, Ss && lr());
    }
  }
  function Ur(r) {
    K_ !== null && K_.tag === 0 && !(A & 6) && an();
    var t = A;
    A |= 1;
    var e = oe.transition, s = Y;
    try {
      if (oe.transition = null, Y = 1, r) return r();
    } finally {
      Y = s, oe.transition = e, A = t, !(A & 6) && lr();
    }
  }
  function Bi() {
    Ht = tn.current, G(tn);
  }
  function Fr(r, t) {
    r.finishedWork = null, r.finishedLanes = 0;
    var e = r.timeoutHandle;
    if (e !== -1 && (r.timeoutHandle = -1, uw(e)), ct !== null) for (e = ct.return; e !== null; ) {
      var s = e;
      switch (ji(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && ns();
          break;
        case 3:
          fn(), G(Qt), G(Ct), Pi();
          break;
        case 5:
          Fi(s);
          break;
        case 4:
          fn();
          break;
        case 13:
          G(et);
          break;
        case 19:
          G(et);
          break;
        case 10:
          Ci(s.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      e = e.return;
    }
    if (yt = r, ct = r = sr(r.current, null), vt = Ht = t, pt = 0, ao = null, Wi = Os = Dr = 0, Mt = Mn = null, mr !== null) {
      for (t = 0; t < mr.length; t++) if (e = mr[t], s = e.interleaved, s !== null) {
        e.interleaved = null;
        var o = s.next, n = e.pending;
        if (n !== null) {
          var c = n.next;
          n.next = o, s.next = c;
        }
        e.pending = s;
      }
      mr = null;
    }
    return r;
  }
  function dp(r, t) {
    do {
      var e = ct;
      try {
        if (zi(), Qo.current = us, ps) {
          for (var s = _t.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          ps = false;
        }
        if ($r = 0, bt = dt = _t = null, Un = false, no = 0, Mi.current = null, e === null || e.return === null) {
          pt = 1, ao = t, ct = null;
          break;
        }
        t: {
          var n = r, c = e.return, d = e, p = t;
          if (t = vt, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var l = p, m = d, x = m.tag;
            if (!(m.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var k = m.alternate;
              k ? (m.updateQueue = k.updateQueue, m.memoizedState = k.memoizedState, m.lanes = k.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var z = Bc(c);
            if (z !== null) {
              z.flags &= -257, Ac(z, c, d, n, t), z.mode & 1 && Vc(n, l, t), t = z, p = l;
              var L = t.updateQueue;
              if (L === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(p), t.updateQueue = N;
              } else L.add(p);
              break t;
            } else {
              if (!(t & 1)) {
                Vc(n, l, t), Ai();
                break t;
              }
              p = Error(C(426));
            }
          } else if (tt && d.mode & 1) {
            var V = Bc(c);
            if (V !== null) {
              !(V.flags & 65536) && (V.flags |= 256), Ac(V, c, d, n, t), Si(gn(p, d));
              break t;
            }
          }
          n = p = gn(p, d), pt !== 4 && (pt = 2), Mn === null ? Mn = [
            n
          ] : Mn.push(n), n = c;
          do {
            switch (n.tag) {
              case 3:
                n.flags |= 65536, t &= -t, n.lanes |= t;
                var y = Yl(n, p, t);
                Dc(n, y);
                break t;
              case 1:
                d = p;
                var b = n.type, v = n.stateNode;
                if (!(n.flags & 128) && (typeof b.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nr === null || !nr.has(v)))) {
                  n.flags |= 65536, t &= -t, n.lanes |= t;
                  var E = ql(n, d, t);
                  Dc(n, E);
                  break t;
                }
            }
            n = n.return;
          } while (n !== null);
        }
        up(e);
      } catch (F) {
        t = F, ct === e && e !== null && (ct = e = e.return);
        continue;
      }
      break;
    } while (true);
  }
  function lp() {
    var r = ws.current;
    return ws.current = us, r === null ? us : r;
  }
  function Ai() {
    (pt === 0 || pt === 3 || pt === 2) && (pt = 4), yt === null || !(Dr & 268435455) && !(Os & 268435455) || i_(yt, vt);
  }
  function bs(r, t) {
    var e = A;
    A |= 2;
    var s = lp();
    (yt !== r || vt !== t) && (Fe = null, Fr(r, t));
    do
      try {
        Uw();
        break;
      } catch (o) {
        dp(r, o);
      }
    while (true);
    if (zi(), A = e, ws.current = s, ct !== null) throw Error(C(261));
    return yt = null, vt = 0, pt;
  }
  function Uw() {
    for (; ct !== null; ) pp(ct);
  }
  function Iw() {
    for (; ct !== null && !du(); ) pp(ct);
  }
  function pp(r) {
    var t = fp(r.alternate, r, Ht);
    r.memoizedProps = r.pendingProps, t === null ? up(r) : ct = t, Mi.current = null;
  }
  function up(r) {
    var t = r;
    do {
      var e = t.alternate;
      if (r = t.return, t.flags & 32768) {
        if (e = Fw(e, t), e !== null) {
          e.flags &= 32767, ct = e;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          pt = 6, ct = null;
          return;
        }
      } else if (e = Nw(e, t, Ht), e !== null) {
        ct = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        ct = t;
        return;
      }
      ct = t = r;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function fr(r, t, e) {
    var s = Y, o = oe.transition;
    try {
      oe.transition = null, Y = 1, Mw(r, t, e, s);
    } finally {
      oe.transition = o, Y = s;
    }
    return null;
  }
  function Mw(r, t, e, s) {
    do
      an();
    while (K_ !== null);
    if (A & 6) throw Error(C(327));
    e = r.finishedWork;
    var o = r.finishedLanes;
    if (e === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, e === r.current) throw Error(C(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var n = e.lanes | e.childLanes;
    if (mu(r, n), r === yt && (ct = yt = null, vt = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || Fo || (Fo = true, gp(Jo, function() {
      return an(), null;
    })), n = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || n) {
      n = oe.transition, oe.transition = null;
      var c = Y;
      Y = 1;
      var d = A;
      A |= 4, Mi.current = null, Tw(r, e), ap(e, r), sw(Fa), ts = !!Na, Fa = Na = null, r.current = e, Rw(e), lu(), A = d, Y = c, oe.transition = n;
    } else r.current = e;
    if (Fo && (Fo = false, K_ = r, gs = o), n = r.pendingLanes, n === 0 && (nr = null), wu(e.stateNode), Bt(r, at()), t !== null) for (s = r.onRecoverableError, e = 0; e < t.length; e++) o = t[e], s(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (fs) throw fs = false, r = Ja, Ja = null, r;
    return gs & 1 && r.tag !== 0 && an(), n = r.pendingLanes, n & 1 ? r === Ga ? Wn++ : (Wn = 0, Ga = r) : Wn = 0, lr(), null;
  }
  function an() {
    if (K_ !== null) {
      var r = Yd(gs), t = oe.transition, e = Y;
      try {
        if (oe.transition = null, Y = 16 > r ? 16 : r, K_ === null) var s = false;
        else {
          if (r = K_, K_ = null, gs = 0, A & 6) throw Error(C(331));
          var o = A;
          for (A |= 4, R = r.current; R !== null; ) {
            var n = R, c = n.child;
            if (R.flags & 16) {
              var d = n.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var l = d[p];
                  for (R = l; R !== null; ) {
                    var m = R;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        In(8, m, n);
                    }
                    var x = m.child;
                    if (x !== null) x.return = m, R = x;
                    else for (; R !== null; ) {
                      m = R;
                      var k = m.sibling, z = m.return;
                      if (np(m), m === l) {
                        R = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = z, R = k;
                        break;
                      }
                      R = z;
                    }
                  }
                }
                var L = n.alternate;
                if (L !== null) {
                  var N = L.child;
                  if (N !== null) {
                    L.child = null;
                    do {
                      var V = N.sibling;
                      N.sibling = null, N = V;
                    } while (N !== null);
                  }
                }
                R = n;
              }
            }
            if (n.subtreeFlags & 2064 && c !== null) c.return = n, R = c;
            else t: for (; R !== null; ) {
              if (n = R, n.flags & 2048) switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  In(9, n, n.return);
              }
              var y = n.sibling;
              if (y !== null) {
                y.return = n.return, R = y;
                break t;
              }
              R = n.return;
            }
          }
          var b = r.current;
          for (R = b; R !== null; ) {
            c = R;
            var v = c.child;
            if (c.subtreeFlags & 2064 && v !== null) v.return = c, R = v;
            else t: for (c = b; R !== null; ) {
              if (d = R, d.flags & 2048) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cs(9, d);
                }
              } catch (F) {
                nt(d, d.return, F);
              }
              if (d === c) {
                R = null;
                break t;
              }
              var E = d.sibling;
              if (E !== null) {
                E.return = d.return, R = E;
                break t;
              }
              R = d.return;
            }
          }
          if (A = o, lr(), Ee && typeof Ee.onPostCommitFiberRoot == "function") try {
            Ee.onPostCommitFiberRoot(ms, r);
          } catch {
          }
          s = true;
        }
        return s;
      } finally {
        Y = e, oe.transition = t;
      }
    }
    return false;
  }
  function nd(r, t, e) {
    t = gn(e, t), t = Yl(r, t, 1), r = rr(r, t, 1), t = Pt(), r !== null && (lo(r, 1, t), Bt(r, t));
  }
  function nt(r, t, e) {
    if (r.tag === 3) nd(r, r, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        nd(t, r, e);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (nr === null || !nr.has(s))) {
          r = gn(e, r), r = ql(t, r, 1), t = rr(t, r, 1), r = Pt(), t !== null && (lo(t, 1, r), Bt(t, r));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ww(r, t, e) {
    var s = r.pingCache;
    s !== null && s.delete(t), t = Pt(), r.pingedLanes |= r.suspendedLanes & e, yt === r && (vt & e) === e && (pt === 4 || pt === 3 && (vt & 130023424) === vt && 500 > at() - Qi ? Fr(r, 0) : Wi |= e), Bt(r, t);
  }
  function wp(r, t) {
    t === 0 && (r.mode & 1 ? (t = ko, ko <<= 1, !(ko & 130023424) && (ko = 4194304)) : t = 1);
    var e = Pt();
    r = Ge(r, t), r !== null && (lo(r, t, e), Bt(r, e));
  }
  function Qw(r) {
    var t = r.memoizedState, e = 0;
    t !== null && (e = t.retryLane), wp(r, e);
  }
  function Vw(r, t) {
    var e = 0;
    switch (r.tag) {
      case 13:
        var s = r.stateNode, o = r.memoizedState;
        o !== null && (e = o.retryLane);
        break;
      case 19:
        s = r.stateNode;
        break;
      default:
        throw Error(C(314));
    }
    s !== null && s.delete(t), wp(r, e);
  }
  var fp;
  fp = function(r, t, e) {
    if (r !== null) if (r.memoizedProps !== t.pendingProps || Qt.current) Wt = true;
    else {
      if (!(r.lanes & e) && !(t.flags & 128)) return Wt = false, Lw(r, t, e);
      Wt = !!(r.flags & 131072);
    }
    else Wt = false, tt && t.flags & 1048576 && yl(t, as, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Bo(r, t), r = t.pendingProps;
        var o = pn(t, Ct.current);
        sn(t, e), o = Ri(null, t, s, r, o, e);
        var n = $i();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Vt(s) ? (n = true, os(t)) : n = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Li(t), o.updater = zs, t.stateNode = o, o._reactInternals = t, Wa(t, s, r, e), t = Ba(null, t, s, true, n, e)) : (t.tag = 0, tt && n && xi(t), Lt(null, t, o, e), t = t.child), t;
      case 16:
        s = t.elementType;
        t: {
          switch (Bo(r, t), r = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = Aw(s), r = ce(s, r), o) {
            case 0:
              t = Va(null, t, s, r, e);
              break t;
            case 1:
              t = qc(null, t, s, r, e);
              break t;
            case 11:
              t = Hc(null, t, s, r, e);
              break t;
            case 14:
              t = Yc(null, t, s, ce(s.type, r), e);
              break t;
          }
          throw Error(C(306, s, ""));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ce(s, o), Va(r, t, s, o, e);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ce(s, o), qc(r, t, s, o, e);
      case 3:
        t: {
          if (Jl(t), r === null) throw Error(C(387));
          s = t.pendingProps, n = t.memoizedState, o = n.element, Sl(r, t), ds(t, s, null, e);
          var c = t.memoizedState;
          if (s = c.element, n.isDehydrated) if (n = {
            element: s,
            isDehydrated: false,
            cache: c.cache,
            pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
            transitions: c.transitions
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            o = gn(Error(C(423)), t), t = Xc(r, t, s, e, o);
            break t;
          } else if (s !== o) {
            o = gn(Error(C(424)), t), t = Xc(r, t, s, e, o);
            break t;
          } else for (qt = _r(t.stateNode.containerInfo.firstChild), Xt = t, tt = true, pe = null, e = xl(t, null, s, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (un(), s === o) {
              t = t_(r, t, e);
              break t;
            }
            Lt(r, t, s, e);
          }
          t = t.child;
        }
        return t;
      case 5:
        return El(t), r === null && Ua(t), s = t.type, o = t.pendingProps, n = r !== null ? r.memoizedProps : null, c = o.children, Pa(s, o) ? c = null : n !== null && Pa(s, n) && (t.flags |= 32), Zl(r, t), Lt(r, t, c, e), t.child;
      case 6:
        return r === null && Ua(t), null;
      case 13:
        return Gl(r, t, e);
      case 4:
        return Ni(t, t.stateNode.containerInfo), s = t.pendingProps, r === null ? t.child = wn(t, null, s, e) : Lt(r, t, s, e), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ce(s, o), Hc(r, t, s, o, e);
      case 7:
        return Lt(r, t, t.pendingProps, e), t.child;
      case 8:
        return Lt(r, t, t.pendingProps.children, e), t.child;
      case 12:
        return Lt(r, t, t.pendingProps.children, e), t.child;
      case 10:
        t: {
          if (s = t.type._context, o = t.pendingProps, n = t.memoizedProps, c = o.value, X(is, s._currentValue), s._currentValue = c, n !== null) if (ge(n.value, c)) {
            if (n.children === o.children && !Qt.current) {
              t = t_(r, t, e);
              break t;
            }
          } else for (n = t.child, n !== null && (n.return = t); n !== null; ) {
            var d = n.dependencies;
            if (d !== null) {
              c = n.child;
              for (var p = d.firstContext; p !== null; ) {
                if (p.context === s) {
                  if (n.tag === 1) {
                    p = Ke(-1, e & -e), p.tag = 2;
                    var l = n.updateQueue;
                    if (l !== null) {
                      l = l.shared;
                      var m = l.pending;
                      m === null ? p.next = p : (p.next = m.next, m.next = p), l.pending = p;
                    }
                  }
                  n.lanes |= e, p = n.alternate, p !== null && (p.lanes |= e), Ia(n.return, e, t), d.lanes |= e;
                  break;
                }
                p = p.next;
              }
            } else if (n.tag === 10) c = n.type === t.type ? null : n.child;
            else if (n.tag === 18) {
              if (c = n.return, c === null) throw Error(C(341));
              c.lanes |= e, d = c.alternate, d !== null && (d.lanes |= e), Ia(c, e, t), c = n.sibling;
            } else c = n.child;
            if (c !== null) c.return = n;
            else for (c = n; c !== null; ) {
              if (c === t) {
                c = null;
                break;
              }
              if (n = c.sibling, n !== null) {
                n.return = c.return, c = n;
                break;
              }
              c = c.return;
            }
            n = c;
          }
          Lt(r, t, o.children, e), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, sn(t, e), o = se(o), s = s(o), t.flags |= 1, Lt(r, t, s, e), t.child;
      case 14:
        return s = t.type, o = ce(s, t.pendingProps), o = ce(s.type, o), Yc(r, t, s, o, e);
      case 15:
        return Xl(r, t, t.type, t.pendingProps, e);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ce(s, o), Bo(r, t), t.tag = 1, Vt(s) ? (r = true, os(t)) : r = false, sn(t, e), Hl(t, s, o), Wa(t, s, o, e), Ba(null, t, s, true, r, e);
      case 19:
        return tp(r, t, e);
      case 22:
        return Kl(r, t, e);
    }
    throw Error(C(156, t.tag));
  };
  function gp(r, t) {
    return Vd(r, t);
  }
  function Bw(r, t, e, s) {
    this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function re(r, t, e, s) {
    return new Bw(r, t, e, s);
  }
  function Hi(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function Aw(r) {
    if (typeof r == "function") return Hi(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === li) return 11;
      if (r === pi) return 14;
    }
    return 2;
  }
  function sr(r, t) {
    var e = r.alternate;
    return e === null ? (e = re(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
  }
  function Yo(r, t, e, s, o, n) {
    var c = 2;
    if (s = r, typeof r == "function") Hi(r) && (c = 1);
    else if (typeof r == "string") c = 5;
    else t: switch (r) {
      case Br:
        return Pr(e.children, o, n, t);
      case di:
        c = 8, o |= 8;
        break;
      case la:
        return r = re(12, e, t, o | 2), r.elementType = la, r.lanes = n, r;
      case pa:
        return r = re(13, e, t, o), r.elementType = pa, r.lanes = n, r;
      case ua:
        return r = re(19, e, t, o), r.elementType = ua, r.lanes = n, r;
      case Ed:
        return Ls(e, o, n, t);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case jd:
            c = 10;
            break t;
          case Sd:
            c = 9;
            break t;
          case li:
            c = 11;
            break t;
          case pi:
            c = 14;
            break t;
          case n_:
            c = 16, s = null;
            break t;
        }
        throw Error(C(130, r == null ? r : typeof r, ""));
    }
    return t = re(c, e, t, o), t.elementType = r, t.type = s, t.lanes = n, t;
  }
  function Pr(r, t, e, s) {
    return r = re(7, r, s, t), r.lanes = e, r;
  }
  function Ls(r, t, e, s) {
    return r = re(22, r, s, t), r.elementType = Ed, r.lanes = e, r.stateNode = {
      isHidden: false
    }, r;
  }
  function ia(r, t, e) {
    return r = re(6, r, null, t), r.lanes = e, r;
  }
  function ca(r, t, e) {
    return t = re(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    }, t;
  }
  function Hw(r, t, e, s, o) {
    this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vs(0), this.expirationTimes = Vs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vs(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Yi(r, t, e, s, o, n, c, d, p) {
    return r = new Hw(r, t, e, d, p), t === 1 ? (t = 1, n === true && (t |= 8)) : t = 0, n = re(3, null, null, t), r.current = n, n.stateNode = r, n.memoizedState = {
      element: s,
      isDehydrated: e,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Li(n), r;
  }
  function Yw(r, t, e) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Vr,
      key: s == null ? null : "" + s,
      children: r,
      containerInfo: t,
      implementation: e
    };
  }
  function bp(r) {
    if (!r) return ir;
    r = r._reactInternals;
    t: {
      if (Mr(r) !== r || r.tag !== 1) throw Error(C(170));
      var t = r;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break t;
          case 1:
            if (Vt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(C(171));
    }
    if (r.tag === 1) {
      var e = r.type;
      if (Vt(e)) return bl(r, e, t);
    }
    return t;
  }
  function hp(r, t, e, s, o, n, c, d, p) {
    return r = Yi(e, s, true, r, o, n, c, d, p), r.context = bp(null), e = r.current, s = Pt(), o = or(e), n = Ke(s, o), n.callback = t ?? null, rr(e, n, o), r.current.lanes = o, lo(r, o, s), Bt(r, s), r;
  }
  function Ns(r, t, e, s) {
    var o = t.current, n = Pt(), c = or(o);
    return e = bp(e), t.context === null ? t.context = e : t.pendingContext = e, t = Ke(n, c), t.payload = {
      element: r
    }, s = s === void 0 ? null : s, s !== null && (t.callback = s), r = rr(o, t, c), r !== null && (fe(r, o, c, n), Wo(r, o, c)), c;
  }
  function hs(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function od(r, t) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var e = r.retryLane;
      r.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function qi(r, t) {
    od(r, t), (r = r.alternate) && od(r, t);
  }
  function qw() {
    return null;
  }
  var yp = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function Xi(r) {
    this._internalRoot = r;
  }
  Fs.prototype.render = Xi.prototype.render = function(r) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Ns(r, t, null, null);
  };
  Fs.prototype.unmount = Xi.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var t = r.containerInfo;
      Ur(function() {
        Ns(null, r, null, null);
      }), t[Je] = null;
    }
  };
  function Fs(r) {
    this._internalRoot = r;
  }
  Fs.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var t = Kd();
      r = {
        blockedOn: null,
        target: r,
        priority: t
      };
      for (var e = 0; e < a_.length && t !== 0 && t < a_[e].priority; e++) ;
      a_.splice(e, 0, r), e === 0 && Jd(r);
    }
  };
  function Ki(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Ps(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function sd() {
  }
  function Xw(r, t, e, s, o) {
    if (o) {
      if (typeof s == "function") {
        var n = s;
        s = function() {
          var l = hs(c);
          n.call(l);
        };
      }
      var c = hp(t, s, r, 0, null, false, false, "", sd);
      return r._reactRootContainer = c, r[Je] = c.current, Gn(r.nodeType === 8 ? r.parentNode : r), Ur(), c;
    }
    for (; o = r.lastChild; ) r.removeChild(o);
    if (typeof s == "function") {
      var d = s;
      s = function() {
        var l = hs(p);
        d.call(l);
      };
    }
    var p = Yi(r, 0, false, null, null, false, false, "", sd);
    return r._reactRootContainer = p, r[Je] = p.current, Gn(r.nodeType === 8 ? r.parentNode : r), Ur(function() {
      Ns(t, p, e, s);
    }), p;
  }
  function Ts(r, t, e, s, o) {
    var n = e._reactRootContainer;
    if (n) {
      var c = n;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var p = hs(c);
          d.call(p);
        };
      }
      Ns(t, c, r, o);
    } else c = Xw(e, t, r, o, s);
    return hs(c);
  }
  qd = function(r) {
    switch (r.tag) {
      case 3:
        var t = r.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var e = Nn(t.pendingLanes);
          e !== 0 && (fi(t, e | 1), Bt(t, at()), !(A & 6) && (bn = at() + 500, lr()));
        }
        break;
      case 13:
        Ur(function() {
          var s = Ge(r, 1);
          if (s !== null) {
            var o = Pt();
            fe(s, r, 1, o);
          }
        }), qi(r, 1);
    }
  };
  gi = function(r) {
    if (r.tag === 13) {
      var t = Ge(r, 134217728);
      if (t !== null) {
        var e = Pt();
        fe(t, r, 134217728, e);
      }
      qi(r, 134217728);
    }
  };
  Xd = function(r) {
    if (r.tag === 13) {
      var t = or(r), e = Ge(r, t);
      if (e !== null) {
        var s = Pt();
        fe(e, r, t, s);
      }
      qi(r, t);
    }
  };
  Kd = function() {
    return Y;
  };
  Zd = function(r, t) {
    var e = Y;
    try {
      return Y = r, t();
    } finally {
      Y = e;
    }
  };
  xa = function(r, t, e) {
    switch (t) {
      case "input":
        if (ga(r, e), t = e.name, e.type === "radio" && t != null) {
          for (e = r; e.parentNode; ) e = e.parentNode;
          for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
            var s = e[t];
            if (s !== r && s.form === r.form) {
              var o = js(s);
              if (!o) throw Error(C(90));
              Cd(s), ga(s, o);
            }
          }
        }
        break;
      case "textarea":
        Ld(r, e);
        break;
      case "select":
        t = e.value, t != null && _n(r, !!e.multiple, t, false);
    }
  };
  Dd = Vi;
  Ud = Ur;
  var Kw = {
    usingClientEntryPoint: false,
    Events: [
      uo,
      qr,
      js,
      Rd,
      $d,
      Vi
    ]
  }, Cn = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Zw = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: e_.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(r) {
      return r = Wd(r), r === null ? null : r.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || qw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Po.isDisabled && Po.supportsFiber) try {
      ms = Po.inject(Zw), Ee = Po;
    } catch {
    }
  }
  Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kw;
  Jt.createPortal = function(r, t) {
    var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ki(t)) throw Error(C(200));
    return Yw(r, t, null, e);
  };
  Jt.createRoot = function(r, t) {
    if (!Ki(r)) throw Error(C(299));
    var e = false, s = "", o = yp;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Yi(r, 1, false, null, null, e, false, s, o), r[Je] = t.current, Gn(r.nodeType === 8 ? r.parentNode : r), new Xi(t);
  };
  Jt.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var t = r._reactInternals;
    if (t === void 0) throw typeof r.render == "function" ? Error(C(188)) : (r = Object.keys(r).join(","), Error(C(268, r)));
    return r = Wd(t), r = r === null ? null : r.stateNode, r;
  };
  Jt.flushSync = function(r) {
    return Ur(r);
  };
  Jt.hydrate = function(r, t, e) {
    if (!Ps(t)) throw Error(C(200));
    return Ts(null, r, t, true, e);
  };
  Jt.hydrateRoot = function(r, t, e) {
    if (!Ki(r)) throw Error(C(405));
    var s = e != null && e.hydratedSources || null, o = false, n = "", c = yp;
    if (e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), t = hp(t, null, r, 1, e ?? null, o, false, n, c), r[Je] = t.current, Gn(r), s) for (r = 0; r < s.length; r++) e = s[r], o = e._getVersion, o = o(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      e,
      o
    ] : t.mutableSourceEagerHydrationData.push(e, o);
    return new Fs(t);
  };
  Jt.render = function(r, t, e) {
    if (!Ps(t)) throw Error(C(200));
    return Ts(null, r, t, false, e);
  };
  Jt.unmountComponentAtNode = function(r) {
    if (!Ps(r)) throw Error(C(40));
    return r._reactRootContainer ? (Ur(function() {
      Ts(null, null, r, false, function() {
        r._reactRootContainer = null, r[Je] = null;
      });
    }), true) : false;
  };
  Jt.unstable_batchedUpdates = Vi;
  Jt.unstable_renderSubtreeIntoContainer = function(r, t, e, s) {
    if (!Ps(e)) throw Error(C(200));
    if (r == null || r._reactInternals === void 0) throw Error(C(38));
    return Ts(r, t, e, false, s);
  };
  Jt.version = "18.3.1-next-f1338f8080-20240426";
  function mp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp);
    } catch (r) {
      console.error(r);
    }
  }
  mp(), md.exports = Jt;
  var Jw = md.exports, vp, ad = Jw;
  vp = ad.createRoot, ad.hydrateRoot;
  const Gw = "" + new URL("cardano_serialization_lib_bg-DYSGQNOE.wasm", import.meta.url).href, tf = async (r = {}, t) => {
    let e;
    if (t.startsWith("data:")) {
      const s = t.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(s, "base64");
      else if (typeof atob == "function") {
        const n = atob(s);
        o = new Uint8Array(n.length);
        for (let c = 0; c < n.length; c++) o[c] = n.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      e = await WebAssembly.instantiate(o, r);
    } else {
      const s = await fetch(t), o = s.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(s, r);
      else {
        const n = await s.arrayBuffer();
        e = await WebAssembly.instantiate(n, r);
      }
    }
    return e.instance.exports;
  };
  let _;
  function ef(r) {
    _ = r;
  }
  const Qe = new Array(128).fill(void 0);
  Qe.push(void 0, null, true, false);
  function I(r) {
    return Qe[r];
  }
  let Qn = Qe.length;
  function _f(r) {
    r < 132 || (Qe[r] = Qn, Qn = r);
  }
  function u(r) {
    const t = I(r);
    return _f(r), t;
  }
  const rf = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let kp = new rf("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  kp.decode();
  let To = null;
  function cn() {
    return (To === null || To.byteLength === 0) && (To = new Uint8Array(_.memory.buffer)), To;
  }
  function h(r, t) {
    return r = r >>> 0, kp.decode(cn().subarray(r, r + t));
  }
  function B(r) {
    Qn === Qe.length && Qe.push(Qe.length + 1);
    const t = Qn;
    return Qn = Qe[t], Qe[t] = r, t;
  }
  let w = 0;
  const nf = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let qo = new nf("utf-8");
  const of = typeof qo.encodeInto == "function" ? function(r, t) {
    return qo.encodeInto(r, t);
  } : function(r, t) {
    const e = qo.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    };
  };
  function g(r, t, e) {
    if (e === void 0) {
      const d = qo.encode(r), p = t(d.length, 1) >>> 0;
      return cn().subarray(p, p + d.length).set(d), w = d.length, p;
    }
    let s = r.length, o = t(s, 1) >>> 0;
    const n = cn();
    let c = 0;
    for (; c < s; c++) {
      const d = r.charCodeAt(c);
      if (d > 127) break;
      n[o + c] = d;
    }
    if (c !== s) {
      c !== 0 && (r = r.slice(c)), o = e(o, s, s = c + r.length * 3, 1) >>> 0;
      const d = cn().subarray(o + c, o + s), p = of(r, d);
      c += p.written;
    }
    return w = c, o;
  }
  function Ce(r) {
    return r == null;
  }
  let Ro = null;
  function a() {
    return (Ro === null || Ro.byteLength === 0) && (Ro = new Int32Array(_.memory.buffer)), Ro;
  }
  function _i(r) {
    const t = typeof r;
    if (t == "number" || t == "boolean" || r == null) return `${r}`;
    if (t == "string") return `"${r}"`;
    if (t == "symbol") {
      const o = r.description;
      return o == null ? "Symbol" : `Symbol(${o})`;
    }
    if (t == "function") {
      const o = r.name;
      return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
    }
    if (Array.isArray(r)) {
      const o = r.length;
      let n = "[";
      o > 0 && (n += _i(r[0]));
      for (let c = 1; c < o; c++) n += ", " + _i(r[c]);
      return n += "]", n;
    }
    const e = /\[object ([^\]]+)\]/.exec(toString.call(r));
    let s;
    if (e.length > 1) s = e[1];
    else return toString.call(r);
    if (s == "Object") try {
      return "Object(" + JSON.stringify(r) + ")";
    } catch {
      return "Object";
    }
    return r instanceof Error ? `${r.name}: ${r.message}
${r.stack}` : s;
  }
  function S(r, t) {
    return r = r >>> 0, cn().subarray(r / 1, r / 1 + t);
  }
  function j(r, t) {
    const e = t(r.length * 1, 1) >>> 0;
    return cn().set(r, e / 1), w = r.length, e;
  }
  function f(r, t) {
    if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return r.ptr;
  }
  function __(r, t) {
    try {
      return r.apply(this, t);
    } catch (e) {
      _.__wbindgen_exn_store(B(e));
    }
  }
  class zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_address_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.address_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const k = _.__wbindgen_add_to_stack_pointer(-16);
        var o = Ce(t) ? 0 : g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
        _.address_to_bech32(k, this.__wbg_ptr, o, n);
        var c = a()[k / 4 + 0], d = a()[k / 4 + 1], p = a()[k / 4 + 2], l = a()[k / 4 + 3], m = c, x = d;
        if (l) throw m = 0, x = 0, u(p);
        return e = m, s = x, h(m, x);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    network_id() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_network_id(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Ft {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ft.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assetname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetname_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    name() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_name(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class c_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(c_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assetnames_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetnames_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return c_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return c_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.assetnames_get(this.__wbg_ptr, t);
      return Ft.__wrap(e);
    }
    add(t) {
      f(t, Ft), _.assetnames_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ve.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_assets_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assets_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Ve.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ft), f(e, O);
      const s = _.assets_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : O.__wrap(s);
    }
    get(t) {
      f(t, Ft);
      const e = _.assets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : O.__wrap(e);
    }
    keys() {
      const t = _.assets_keys(this.__wbg_ptr);
      return c_.__wrap(t);
    }
  }
  class d_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(d_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_auxiliarydata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return d_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydata_new();
      return d_.__wrap(t);
    }
    metadata() {
      const t = _.auxiliarydata_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : g_.__wrap(t);
    }
    set_metadata(t) {
      f(t, g_), _.auxiliarydata_set_metadata(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.auxiliarydata_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Zt.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, Zt), _.auxiliarydata_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.auxiliarydata_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ke.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, ke), _.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    prefer_alonzo_format() {
      return _.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr) !== 0;
    }
    set_prefer_alonzo_format(t) {
      _.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, t);
    }
  }
  class kr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_auxiliarydatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return kr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Vn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Vn.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_baseaddress_free(t);
    }
    static new(t, e, s) {
      f(e, J), f(s, J);
      const o = _.baseaddress_new(t, e.__wbg_ptr, s.__wbg_ptr);
      return Vn.__wrap(o);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return J.__wrap(t);
    }
    stake_cred() {
      const t = _.baseaddress_stake_cred(this.__wbg_ptr);
      return J.__wrap(t);
    }
    to_address() {
      const t = _.baseaddress_to_address(this.__wbg_ptr);
      return zt.__wrap(t);
    }
    static from_address(t) {
      f(t, zt);
      const e = _.baseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Vn.__wrap(e);
    }
  }
  class St {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(St.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bigint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bigint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return St.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return St.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return St.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    is_zero() {
      return _.bigint_is_zero(this.__wbg_ptr) !== 0;
    }
    as_u64() {
      const t = _.bigint_as_u64(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_int() {
      const t = _.bigint_as_int(this.__wbg_ptr);
      return t === 0 ? void 0 : ot.__wrap(t);
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return St.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    add(t) {
      f(t, St);
      const e = _.bigint_add(this.__wbg_ptr, t.__wbg_ptr);
      return St.__wrap(e);
    }
    mul(t) {
      f(t, St);
      const e = _.bigint_mul(this.__wbg_ptr, t.__wbg_ptr);
      return St.__wrap(e);
    }
    static one() {
      const t = _.bigint_one();
      return St.__wrap(t);
    }
    increment() {
      const t = _.bigint_increment(this.__wbg_ptr);
      return St.__wrap(t);
    }
    div_ceil(t) {
      f(t, St);
      const e = _.bigint_div_ceil(this.__wbg_ptr, t.__wbg_ptr);
      return St.__wrap(e);
    }
  }
  class O {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(O.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bignum_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bignum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static zero() {
      const t = _.bignum_zero();
      return O.__wrap(t);
    }
    static one() {
      const t = _.bignum_one();
      return O.__wrap(t);
    }
    is_zero() {
      return _.bignum_is_zero(this.__wbg_ptr) !== 0;
    }
    div_floor(t) {
      f(t, O);
      const e = _.bignum_div_floor(this.__wbg_ptr, t.__wbg_ptr);
      return O.__wrap(e);
    }
    checked_mul(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_mul(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, O), _.bignum_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, O);
      const e = _.bignum_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return O.__wrap(e);
    }
    compare(t) {
      return f(t, O), _.bignum_compare(this.__wbg_ptr, t.__wbg_ptr);
    }
    less_than(t) {
      return f(t, O), _.bignum_less_than(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    static max_value() {
      const t = _.bignum_max_value();
      return O.__wrap(t);
    }
    static max(t, e) {
      f(t, O), f(e, O);
      const s = _.bignum_max(t.__wbg_ptr, e.__wbg_ptr);
      return O.__wrap(s);
    }
  }
  class l_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(l_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bootstrapwitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.bootstrapwitness_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return l_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return je.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Se.__wrap(t);
    }
    chain_code() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_chain_code(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    attributes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_attributes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e, s, o) {
      f(t, je), f(e, Se);
      const n = j(s, _.__wbindgen_malloc), c = w, d = j(o, _.__wbindgen_malloc), p = w, l = _.bootstrapwitness_new(t.__wbg_ptr, e.__wbg_ptr, n, c, d, p);
      return l_.__wrap(l);
    }
  }
  class io {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(io.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_bootstrapwitnesses_free(t);
    }
    static new() {
      const t = _.bootstrapwitnesses_new();
      return io.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.bootstrapwitnesses_get(this.__wbg_ptr, t);
      return l_.__wrap(e);
    }
    add(t) {
      f(t, l_), _.bootstrapwitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class $t {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($t.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_certificate_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.certificate_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_stake_registration(t) {
      f(t, W_);
      const e = _.certificate_new_stake_registration(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_stake_deregistration(t) {
      f(t, M_);
      const e = _.certificate_new_stake_deregistration(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_stake_delegation(t) {
      f(t, I_);
      const e = _.certificate_new_stake_delegation(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_pool_registration(t) {
      f(t, S_);
      const e = _.certificate_new_pool_registration(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_pool_retirement(t) {
      f(t, E_);
      const e = _.certificate_new_pool_retirement(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_genesis_key_delegation(t) {
      f(t, b_);
      const e = _.certificate_new_genesis_key_delegation(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    static new_move_instantaneous_rewards_cert(t) {
      f(t, v_);
      const e = _.certificate_new_move_instantaneous_rewards_cert(t.__wbg_ptr);
      return $t.__wrap(e);
    }
    kind() {
      return _.certificate_kind(this.__wbg_ptr) >>> 0;
    }
    as_stake_registration() {
      const t = _.certificate_as_stake_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : W_.__wrap(t);
    }
    as_stake_deregistration() {
      const t = _.certificate_as_stake_deregistration(this.__wbg_ptr);
      return t === 0 ? void 0 : M_.__wrap(t);
    }
    as_stake_delegation() {
      const t = _.certificate_as_stake_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : I_.__wrap(t);
    }
    as_pool_registration() {
      const t = _.certificate_as_pool_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : S_.__wrap(t);
    }
    as_pool_retirement() {
      const t = _.certificate_as_pool_retirement(this.__wbg_ptr);
      return t === 0 ? void 0 : E_.__wrap(t);
    }
    as_genesis_key_delegation() {
      const t = _.certificate_as_genesis_key_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : b_.__wrap(t);
    }
    as_move_instantaneous_rewards_cert() {
      const t = _.certificate_as_move_instantaneous_rewards_cert(this.__wbg_ptr);
      return t === 0 ? void 0 : v_.__wrap(t);
    }
  }
  class p_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(p_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_certificates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.certificates_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return p_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return p_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.certificates_get(this.__wbg_ptr, t);
      return $t.__wrap(e);
    }
    add(t) {
      f(t, $t), _.certificates_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class xr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_constrplutusdata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.constrplutusdata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.constrplutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.constrplutusdata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.constrplutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    alternative() {
      const t = _.constrplutusdata_alternative(this.__wbg_ptr);
      return O.__wrap(t);
    }
    data() {
      const t = _.constrplutusdata_data(this.__wbg_ptr);
      return ne.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, ne);
      const s = _.constrplutusdata_new(t.__wbg_ptr, e.__wbg_ptr);
      return xr.__wrap(s);
    }
  }
  class Be {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Be.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_costmodel_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.costmodel_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Be.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Be.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Be.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return Be.__wrap(t);
    }
    set(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        f(e, ot), _.costmodel_set(c, this.__wbg_ptr, t, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return ot.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_get(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
  }
  class Re {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Re.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_costmdls_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.costmdls_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmdls_new();
      return Re.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Nt), f(e, Be);
      const s = _.costmdls_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Be.__wrap(s);
    }
    get(t) {
      f(t, Nt);
      const e = _.costmdls_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Be.__wrap(e);
    }
    keys() {
      const t = _.costmdls_keys(this.__wbg_ptr);
      return dn.__wrap(t);
    }
    retain_language_versions(t) {
      f(t, dn);
      const e = _.costmdls_retain_language_versions(this.__wbg_ptr, t.__wbg_ptr);
      return Re.__wrap(e);
    }
  }
  class u_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(u_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_dnsrecordaoraaaa_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordaoraaaa_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return u_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    record() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class w_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(w_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_dnsrecordsrv_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.dnsrecordsrv_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return w_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    record() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class jr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(jr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_datahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.datahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return jr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ht {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ht.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519keyhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class _e {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(_e.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519keyhashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519keyhashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return _e.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.ed25519keyhashes_get(this.__wbg_ptr, t);
      return ht.__wrap(e);
    }
    add(t) {
      f(t, ht), _.ed25519keyhashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.ed25519keyhashes_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : _e.__wrap(t);
    }
  }
  class Se {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Se.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ed25519signature_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bech32(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519signature_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Se.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Bn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Bn.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_enterpriseaddress_free(t);
    }
    static new(t, e) {
      f(e, J);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return Bn.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return J.__wrap(t);
    }
    to_address() {
      const t = _.enterpriseaddress_to_address(this.__wbg_ptr);
      return zt.__wrap(t);
    }
    static from_address(t) {
      f(t, zt);
      const e = _.enterpriseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Bn.__wrap(e);
    }
  }
  class f_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(f_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_exunitprices_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.exunitprices_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return f_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem_price() {
      const t = _.exunitprices_mem_price(this.__wbg_ptr);
      return lt.__wrap(t);
    }
    step_price() {
      const t = _.exunitprices_step_price(this.__wbg_ptr);
      return lt.__wrap(t);
    }
    static new(t, e) {
      f(t, lt), f(e, lt);
      const s = _.exunitprices_new(t.__wbg_ptr, e.__wbg_ptr);
      return f_.__wrap(s);
    }
  }
  class Yt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Yt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_exunits_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.exunits_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem() {
      const t = _.exunits_mem(this.__wbg_ptr);
      return O.__wrap(t);
    }
    steps() {
      const t = _.exunits_steps(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, O);
      const s = _.exunits_new(t.__wbg_ptr, e.__wbg_ptr);
      return Yt.__wrap(s);
    }
  }
  class g_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(g_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_generaltransactionmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.generaltransactionmetadata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return g_.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, O), f(e, q);
      const s = _.generaltransactionmetadata_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : q.__wrap(s);
    }
    get(t) {
      f(t, O);
      const e = _.generaltransactionmetadata_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : q.__wrap(e);
    }
    keys() {
      const t = _.generaltransactionmetadata_keys(this.__wbg_ptr);
      return en.__wrap(t);
    }
  }
  class Sr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Sr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesisdelegatehash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesisdelegatehash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ue {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ue.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesishash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesishash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class gr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(gr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesishashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesishashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return gr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.genesishashes_get(this.__wbg_ptr, t);
      return ue.__wrap(e);
    }
    add(t) {
      f(t, ue), _.genesishashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class b_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(b_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_genesiskeydelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesiskeydelegation_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return b_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    genesishash() {
      const t = _.genesiskeydelegation_genesishash(this.__wbg_ptr);
      return ue.__wrap(t);
    }
    genesis_delegate_hash() {
      const t = _.genesiskeydelegation_genesis_delegate_hash(this.__wbg_ptr);
      return Sr.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
      return Xe.__wrap(t);
    }
    static new(t, e, s) {
      f(t, ue), f(e, Sr), f(s, Xe);
      const o = _.genesiskeydelegation_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return b_.__wrap(o);
    }
  }
  class ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ot.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_int_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.int_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, O);
      const e = _.int_new(t.__wbg_ptr);
      return ot.__wrap(e);
    }
    static new_negative(t) {
      f(t, O);
      const e = _.int_new_negative(t.__wbg_ptr);
      return ot.__wrap(e);
    }
    static new_i32(t) {
      const e = _.int_new_i32(t);
      return ot.__wrap(e);
    }
    is_positive() {
      return _.int_is_positive(this.__wbg_ptr) !== 0;
    }
    as_positive() {
      const t = _.int_as_positive(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_negative() {
      const t = _.int_as_negative(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_i32() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_i32_or_nothing() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_i32_or_fail() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_as_i32_or_fail(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_str() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_str(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class h_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(h_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ipv4_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv4_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv4_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return h_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class y_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(y_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_ipv6_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv6_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv6_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Nt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Nt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_language_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.language_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_plutus_v1() {
      const t = _.language_new_plutus_v1();
      return Nt.__wrap(t);
    }
    static new_plutus_v2() {
      const t = _.language_new_plutus_v2();
      return Nt.__wrap(t);
    }
    kind() {
      return _.language_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class dn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(dn.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_languages_free(t);
    }
    static new() {
      const t = _.languages_new();
      return dn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.languages_get(this.__wbg_ptr, t);
      return Nt.__wrap(e);
    }
    add(t) {
      f(t, Nt);
      var e = t.__destroy_into_raw();
      _.languages_add(this.__wbg_ptr, e);
    }
    static list() {
      const t = _.languages_list();
      return dn.__wrap(t);
    }
  }
  class m_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(m_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mirtostakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.mirtostakecredentials_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return m_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, J), f(e, ot);
      const s = _.mirtostakecredentials_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : ot.__wrap(s);
    }
    get(t) {
      f(t, J);
      const e = _.mirtostakecredentials_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ot.__wrap(e);
    }
    keys() {
      const t = _.mirtostakecredentials_keys(this.__wbg_ptr);
      return hr.__wrap(t);
    }
  }
  class Z_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Z_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_metadatalist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatalist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.metadatalist_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatalist_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatalist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return Z_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.metadatalist_get(this.__wbg_ptr, t);
      return q.__wrap(e);
    }
    add(t) {
      f(t, q), _.metadatalist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Er {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Er.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_metadatamap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.metadatamap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Er.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, q), f(e, q);
      const s = _.metadatamap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : q.__wrap(s);
    }
    insert_str(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, q), _.metadatamap_insert_str(c, this.__wbg_ptr, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return s === 0 ? void 0 : q.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    insert_i32(t, e) {
      f(e, q);
      const s = _.metadatamap_insert_i32(this.__wbg_ptr, t, e.__wbg_ptr);
      return s === 0 ? void 0 : q.__wrap(s);
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, q), _.metadatamap_get(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_get_str(n, this.__wbg_ptr, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_i32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_get_i32(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    has(t) {
      return f(t, q), _.metadatamap_has(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    keys() {
      const t = _.metadatamap_keys(this.__wbg_ptr);
      return Z_.__wrap(t);
    }
  }
  class me {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(me.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.mint_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return me.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, ut), f(e, J_);
      const s = _.mint_new_from_entry(t.__wbg_ptr, e.__wbg_ptr);
      return me.__wrap(s);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, ut), f(e, J_);
      const s = _.mint_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : J_.__wrap(s);
    }
    get(t) {
      f(t, ut);
      const e = _.mint_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : J_.__wrap(e);
    }
    get_all(t) {
      f(t, ut);
      const e = _.mint_get_all(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Zi.__wrap(e);
    }
    keys() {
      const t = _.mint_keys(this.__wbg_ptr);
      return T_.__wrap(t);
    }
    as_positive_multiasset() {
      const t = _.mint_as_positive_multiasset(this.__wbg_ptr);
      return Ut.__wrap(t);
    }
    as_negative_multiasset() {
      const t = _.mint_as_negative_multiasset(this.__wbg_ptr);
      return Ut.__wrap(t);
    }
  }
  class J_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mintassets_free(t);
    }
    static new() {
      const t = _.assets_new();
      return J_.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, Ft), f(e, ot);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_new_from_entry(t.__wbg_ptr, s);
      return J_.__wrap(o);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ft), f(e, ot);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_insert(this.__wbg_ptr, t.__wbg_ptr, s);
      return o === 0 ? void 0 : ot.__wrap(o);
    }
    get(t) {
      f(t, Ft);
      const e = _.mintassets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ot.__wrap(e);
    }
    keys() {
      const t = _.mintassets_keys(this.__wbg_ptr);
      return c_.__wrap(t);
    }
  }
  class Zi {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Zi.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_mintsassets_free(t);
    }
  }
  class $e {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($e.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_moveinstantaneousreward_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousreward_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_to_other_pot(t, e) {
      f(e, O);
      const s = _.moveinstantaneousreward_new_to_other_pot(t, e.__wbg_ptr);
      return $e.__wrap(s);
    }
    static new_to_stake_creds(t, e) {
      f(e, m_);
      const s = _.moveinstantaneousreward_new_to_stake_creds(t, e.__wbg_ptr);
      return $e.__wrap(s);
    }
    pot() {
      return _.moveinstantaneousreward_pot(this.__wbg_ptr) >>> 0;
    }
    kind() {
      return _.moveinstantaneousreward_kind(this.__wbg_ptr) >>> 0;
    }
    as_to_other_pot() {
      const t = _.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    as_to_stake_creds() {
      const t = _.moveinstantaneousreward_as_to_stake_creds(this.__wbg_ptr);
      return t === 0 ? void 0 : m_.__wrap(t);
    }
  }
  class v_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(v_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_moveinstantaneousrewardscert_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.moveinstantaneousrewardscert_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    move_instantaneous_reward() {
      const t = _.moveinstantaneousrewardscert_move_instantaneous_reward(this.__wbg_ptr);
      return $e.__wrap(t);
    }
    static new(t) {
      f(t, $e);
      const e = _.moveinstantaneousrewardscert_new(t.__wbg_ptr);
      return v_.__wrap(e);
    }
  }
  class Ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ut.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_multiasset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.multiasset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Ut.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, ut), f(e, Ve);
      const s = _.multiasset_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ve.__wrap(s);
    }
    get(t) {
      f(t, ut);
      const e = _.multiasset_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ve.__wrap(e);
    }
    set_asset(t, e, s) {
      f(t, ut), f(e, Ft), f(s, O);
      var o = s.__destroy_into_raw();
      const n = _.multiasset_set_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o);
      return n === 0 ? void 0 : O.__wrap(n);
    }
    get_asset(t, e) {
      f(t, ut), f(e, Ft);
      const s = _.multiasset_get_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return O.__wrap(s);
    }
    keys() {
      const t = _.multiasset_keys(this.__wbg_ptr);
      return T_.__wrap(t);
    }
    sub(t) {
      f(t, Ut);
      const e = _.multiasset_sub(this.__wbg_ptr, t.__wbg_ptr);
      return Ut.__wrap(e);
    }
  }
  class k_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(k_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_multihostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.multihostname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return w_.__wrap(t);
    }
    static new(t) {
      f(t, w_);
      const e = _.multihostname_new(t.__wbg_ptr);
      return k_.__wrap(e);
    }
  }
  class Ot {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ot.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nativescript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nativescript_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ot.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.nativescript_hash(this.__wbg_ptr);
      return ut.__wrap(t);
    }
    static new_script_pubkey(t) {
      f(t, $_);
      const e = _.nativescript_new_script_pubkey(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    static new_script_all(t) {
      f(t, F_);
      const e = _.nativescript_new_script_all(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    static new_script_any(t) {
      f(t, P_);
      const e = _.nativescript_new_script_any(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    static new_script_n_of_k(t) {
      f(t, R_);
      const e = _.nativescript_new_script_n_of_k(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    static new_timelock_start(t) {
      f(t, Me);
      const e = _.nativescript_new_timelock_start(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    static new_timelock_expiry(t) {
      f(t, Ie);
      const e = _.nativescript_new_timelock_expiry(t.__wbg_ptr);
      return Ot.__wrap(e);
    }
    kind() {
      return _.nativescript_kind(this.__wbg_ptr) >>> 0;
    }
    as_script_pubkey() {
      const t = _.nativescript_as_script_pubkey(this.__wbg_ptr);
      return t === 0 ? void 0 : $_.__wrap(t);
    }
    as_script_all() {
      const t = _.nativescript_as_script_all(this.__wbg_ptr);
      return t === 0 ? void 0 : F_.__wrap(t);
    }
    as_script_any() {
      const t = _.nativescript_as_script_any(this.__wbg_ptr);
      return t === 0 ? void 0 : P_.__wrap(t);
    }
    as_script_n_of_k() {
      const t = _.nativescript_as_script_n_of_k(this.__wbg_ptr);
      return t === 0 ? void 0 : R_.__wrap(t);
    }
    as_timelock_start() {
      const t = _.nativescript_as_timelock_start(this.__wbg_ptr);
      return t === 0 ? void 0 : Me.__wrap(t);
    }
    as_timelock_expiry() {
      const t = _.nativescript_as_timelock_expiry(this.__wbg_ptr);
      return t === 0 ? void 0 : Ie.__wrap(t);
    }
    get_required_signers() {
      const t = _.nativescript_get_required_signers(this.__wbg_ptr);
      return _e.__wrap(t);
    }
  }
  class Zt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Zt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nativescripts_free(t);
    }
    static new() {
      const t = _.certificates_new();
      return Zt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.nativescripts_get(this.__wbg_ptr, t);
      return Ot.__wrap(e);
    }
    add(t) {
      f(t, Ot), _.nativescripts_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class De {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(De.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_networkid_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.networkid_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static testnet() {
      const t = _.networkid_testnet();
      return De.__wrap(t);
    }
    static mainnet() {
      const t = _.networkid_mainnet();
      return De.__wrap(t);
    }
    kind() {
      return _.networkid_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class s_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(s_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_nonce_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_identity() {
      const t = _.nonce_new_identity();
      return s_.__wrap(t);
    }
    static new_from_hash(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_new_from_hash(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return s_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_hash() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_get_hash(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = S(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Z {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Z.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusdata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusdata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_constr_plutus_data(t) {
      f(t, xr);
      const e = _.plutusdata_new_constr_plutus_data(t.__wbg_ptr);
      return Z.__wrap(e);
    }
    static new_empty_constr_plutus_data(t) {
      f(t, O);
      const e = _.plutusdata_new_empty_constr_plutus_data(t.__wbg_ptr);
      return Z.__wrap(e);
    }
    static new_single_value_constr_plutus_data(t, e) {
      f(t, O), f(e, Z);
      const s = _.plutusdata_new_single_value_constr_plutus_data(t.__wbg_ptr, e.__wbg_ptr);
      return Z.__wrap(s);
    }
    static new_map(t) {
      f(t, zr);
      const e = _.plutusdata_new_map(t.__wbg_ptr);
      return Z.__wrap(e);
    }
    static new_list(t) {
      f(t, ne);
      const e = _.plutusdata_new_list(t.__wbg_ptr);
      return Z.__wrap(e);
    }
    static new_integer(t) {
      f(t, St);
      const e = _.plutusdata_new_integer(t.__wbg_ptr);
      return Z.__wrap(e);
    }
    static new_bytes(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusdata_new_bytes(e, s);
      return Z.__wrap(o);
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_constr_plutus_data() {
      const t = _.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : xr.__wrap(t);
    }
    as_map() {
      const t = _.plutusdata_as_map(this.__wbg_ptr);
      return t === 0 ? void 0 : zr.__wrap(t);
    }
    as_list() {
      const t = _.plutusdata_as_list(this.__wbg_ptr);
      return t === 0 ? void 0 : ne.__wrap(t);
    }
    as_integer() {
      const t = _.plutusdata_as_integer(this.__wbg_ptr);
      return t === 0 ? void 0 : St.__wrap(t);
    }
    as_bytes() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_as_bytes(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = S(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16);
        _.decode_plutus_datum_to_json_str(m, this.__wbg_ptr, t);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_json(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        _.encode_json_str_to_plutus_datum(c, d, p, e);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Z.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_address(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, zt), _.plutusdata_from_address(n, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Z.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ne.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutuslist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutuslist_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ne.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutuslist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ne.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutuslist_new();
      return ne.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutuslist_get(this.__wbg_ptr, t);
      return Z.__wrap(e);
    }
    add(t) {
      f(t, Z), _.plutuslist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class zr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(zr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusmap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusmap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusmap_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusmap_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusmap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return zr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Z), f(e, Z);
      const s = _.plutusmap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Z.__wrap(s);
    }
    get(t) {
      f(t, Z);
      const e = _.plutusmap_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Z.__wrap(e);
    }
    keys() {
      const t = _.plutusmap_keys(this.__wbg_ptr);
      return ne.__wrap(t);
    }
  }
  class Dt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Dt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusscript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new(e, s);
      return Dt.__wrap(o);
    }
    static new_v2(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new_v2(e, s);
      return Dt.__wrap(o);
    }
    static new_with_version(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      f(e, Nt);
      const n = _.plutusscript_new_with_version(s, o, e.__wbg_ptr);
      return Dt.__wrap(n);
    }
    bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_v2(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscript_from_bytes_v2(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = j(t, _.__wbindgen_malloc), p = w;
        f(e, Nt), _.plutusscript_from_bytes_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Dt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, Nt), _.plutusscript_from_hex_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Dt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.plutusscript_hash(this.__wbg_ptr);
      return ut.__wrap(t);
    }
    language_version() {
      const t = _.plutusscript_language_version(this.__wbg_ptr);
      return Nt.__wrap(t);
    }
  }
  class ke {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ke.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_plutusscripts_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.plutusscripts_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutusscripts_new();
      return ke.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutusscripts_get(this.__wbg_ptr, t);
      return Dt.__wrap(e);
    }
    add(t) {
      f(t, Dt), _.plutusscripts_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class x_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(x_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolmetadata_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      const t = _.poolmetadata_url(this.__wbg_ptr);
      return id.__wrap(t);
    }
    pool_metadata_hash() {
      const t = _.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
      return Cr.__wrap(t);
    }
    static new(t, e) {
      f(t, id), f(e, Cr);
      const s = _.poolmetadata_new(t.__wbg_ptr, e.__wbg_ptr);
      return x_.__wrap(s);
    }
  }
  class Cr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Cr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolmetadatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolmetadatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Cr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class j_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(j_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolparams_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolparams_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    operator() {
      const t = _.poolparams_operator(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.poolparams_vrf_keyhash(this.__wbg_ptr);
      return Xe.__wrap(t);
    }
    pledge() {
      const t = _.poolparams_pledge(this.__wbg_ptr);
      return O.__wrap(t);
    }
    cost() {
      const t = _.poolparams_cost(this.__wbg_ptr);
      return O.__wrap(t);
    }
    margin() {
      const t = _.poolparams_margin(this.__wbg_ptr);
      return lt.__wrap(t);
    }
    reward_account() {
      const t = _.poolparams_reward_account(this.__wbg_ptr);
      return Oe.__wrap(t);
    }
    pool_owners() {
      const t = _.poolparams_pool_owners(this.__wbg_ptr);
      return _e.__wrap(t);
    }
    relays() {
      const t = _.poolparams_relays(this.__wbg_ptr);
      return N_.__wrap(t);
    }
    pool_metadata() {
      const t = _.poolparams_pool_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : x_.__wrap(t);
    }
    static new(t, e, s, o, n, c, d, p, l) {
      f(t, ht), f(e, Xe), f(s, O), f(o, O), f(n, lt), f(c, Oe), f(d, _e), f(p, N_);
      let m = 0;
      Ce(l) || (f(l, x_), m = l.__destroy_into_raw());
      const x = _.poolparams_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr, n.__wbg_ptr, c.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, m);
      return j_.__wrap(x);
    }
  }
  class S_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(S_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolregistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_params() {
      const t = _.poolregistration_pool_params(this.__wbg_ptr);
      return j_.__wrap(t);
    }
    static new(t) {
      f(t, j_);
      const e = _.poolregistration_new(t.__wbg_ptr);
      return S_.__wrap(e);
    }
  }
  class E_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(E_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_poolretirement_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolretirement_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_keyhash() {
      const t = _.poolretirement_pool_keyhash(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    epoch() {
      return _.poolretirement_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, ht);
      const s = _.poolretirement_new(t.__wbg_ptr, e);
      return E_.__wrap(s);
    }
  }
  class z_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(z_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_proposedprotocolparameterupdates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.proposedprotocolparameterupdates_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return z_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, ue), f(e, Ae);
      const s = _.proposedprotocolparameterupdates_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ae.__wrap(s);
    }
    get(t) {
      f(t, ue);
      const e = _.proposedprotocolparameterupdates_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ae.__wrap(e);
    }
    keys() {
      const t = _.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
      return gr.__wrap(t);
    }
  }
  class Ae {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ae.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_protocolparamupdate_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.protocolparamupdate_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ae.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ae.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ae.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_minfee_a(t) {
      f(t, O), _.protocolparamupdate_set_minfee_a(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_a() {
      const t = _.protocolparamupdate_minfee_a(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_minfee_b(t) {
      f(t, O), _.protocolparamupdate_set_minfee_b(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_b() {
      const t = _.protocolparamupdate_minfee_b(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_max_block_body_size(t) {
      _.protocolparamupdate_set_max_block_body_size(this.__wbg_ptr, t);
    }
    max_block_body_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_block_body_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_tx_size(t) {
      _.protocolparamupdate_set_max_tx_size(this.__wbg_ptr, t);
    }
    max_tx_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_tx_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_block_header_size(t) {
      _.protocolparamupdate_set_max_block_header_size(this.__wbg_ptr, t);
    }
    max_block_header_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_block_header_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_key_deposit(t) {
      f(t, O), _.protocolparamupdate_set_key_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    key_deposit() {
      const t = _.protocolparamupdate_key_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_pool_deposit(t) {
      f(t, O), _.protocolparamupdate_set_pool_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_deposit() {
      const t = _.protocolparamupdate_pool_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_max_epoch(t) {
      _.protocolparamupdate_set_max_epoch(this.__wbg_ptr, t);
    }
    max_epoch() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_epoch(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_n_opt(t) {
      _.protocolparamupdate_set_n_opt(this.__wbg_ptr, t);
    }
    n_opt() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_n_opt(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_pool_pledge_influence(t) {
      f(t, lt), _.protocolparamupdate_set_pool_pledge_influence(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_pledge_influence() {
      const t = _.protocolparamupdate_pool_pledge_influence(this.__wbg_ptr);
      return t === 0 ? void 0 : lt.__wrap(t);
    }
    set_expansion_rate(t) {
      f(t, lt), _.protocolparamupdate_set_expansion_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    expansion_rate() {
      const t = _.protocolparamupdate_expansion_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : lt.__wrap(t);
    }
    set_treasury_growth_rate(t) {
      f(t, lt), _.protocolparamupdate_set_treasury_growth_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    treasury_growth_rate() {
      const t = _.protocolparamupdate_treasury_growth_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : lt.__wrap(t);
    }
    d() {
      const t = _.protocolparamupdate_d(this.__wbg_ptr);
      return t === 0 ? void 0 : lt.__wrap(t);
    }
    extra_entropy() {
      const t = _.protocolparamupdate_extra_entropy(this.__wbg_ptr);
      return t === 0 ? void 0 : s_.__wrap(t);
    }
    set_protocol_version(t) {
      f(t, C_), _.protocolparamupdate_set_protocol_version(this.__wbg_ptr, t.__wbg_ptr);
    }
    protocol_version() {
      const t = _.protocolparamupdate_protocol_version(this.__wbg_ptr);
      return t === 0 ? void 0 : C_.__wrap(t);
    }
    set_min_pool_cost(t) {
      f(t, O), _.protocolparamupdate_set_min_pool_cost(this.__wbg_ptr, t.__wbg_ptr);
    }
    min_pool_cost() {
      const t = _.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_ada_per_utxo_byte(t) {
      f(t, O), _.protocolparamupdate_set_ada_per_utxo_byte(this.__wbg_ptr, t.__wbg_ptr);
    }
    ada_per_utxo_byte() {
      const t = _.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_cost_models(t) {
      f(t, Re), _.protocolparamupdate_set_cost_models(this.__wbg_ptr, t.__wbg_ptr);
    }
    cost_models() {
      const t = _.protocolparamupdate_cost_models(this.__wbg_ptr);
      return t === 0 ? void 0 : Re.__wrap(t);
    }
    set_execution_costs(t) {
      f(t, f_), _.protocolparamupdate_set_execution_costs(this.__wbg_ptr, t.__wbg_ptr);
    }
    execution_costs() {
      const t = _.protocolparamupdate_execution_costs(this.__wbg_ptr);
      return t === 0 ? void 0 : f_.__wrap(t);
    }
    set_max_tx_ex_units(t) {
      f(t, Yt), _.protocolparamupdate_set_max_tx_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_tx_ex_units() {
      const t = _.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
    set_max_block_ex_units(t) {
      f(t, Yt), _.protocolparamupdate_set_max_block_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_block_ex_units() {
      const t = _.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
    set_max_value_size(t) {
      _.protocolparamupdate_set_max_value_size(this.__wbg_ptr, t);
    }
    max_value_size() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_value_size(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_collateral_percentage(t) {
      _.protocolparamupdate_set_collateral_percentage(this.__wbg_ptr, t);
    }
    collateral_percentage() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_collateral_percentage(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_max_collateral_inputs(t) {
      _.protocolparamupdate_set_max_collateral_inputs(this.__wbg_ptr, t);
    }
    max_collateral_inputs() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_max_collateral_inputs(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.protocolparamupdate_new();
      return Ae.__wrap(t);
    }
  }
  class C_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(C_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_protocolversion_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.protocolversion_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    major() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    minor() {
      return _.protocolversion_minor(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      const s = _.protocolversion_new(t, e);
      return C_.__wrap(s);
    }
  }
  class Or {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Or.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_publickey_free(t);
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_bech32(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    as_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.publickey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    verify(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      return f(e, Se), _.publickey_verify(this.__wbg_ptr, s, o, e.__wbg_ptr) !== 0;
    }
    hash() {
      const t = _.publickey_hash(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class O_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(O_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemer_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemer_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    tag() {
      const t = _.redeemer_tag(this.__wbg_ptr);
      return de.__wrap(t);
    }
    index() {
      const t = _.redeemer_index(this.__wbg_ptr);
      return O.__wrap(t);
    }
    data() {
      const t = _.redeemer_data(this.__wbg_ptr);
      return Z.__wrap(t);
    }
    ex_units() {
      const t = _.redeemer_ex_units(this.__wbg_ptr);
      return Yt.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, de), f(e, O), f(s, Z), f(o, Yt);
      const n = _.redeemer_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr);
      return O_.__wrap(n);
    }
  }
  class de {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(de.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemertag_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemertag_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return de.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return de.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return de.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_spend() {
      const t = _.redeemertag_new_spend();
      return de.__wrap(t);
    }
    static new_mint() {
      const t = _.redeemertag_new_mint();
      return de.__wrap(t);
    }
    static new_cert() {
      const t = _.redeemertag_new_cert();
      return de.__wrap(t);
    }
    static new_reward() {
      const t = _.redeemertag_new_reward();
      return de.__wrap(t);
    }
    kind() {
      return _.redeemertag_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class L_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_redeemers_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.redeemers_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return L_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.redeemers_get(this.__wbg_ptr, t);
      return O_.__wrap(e);
    }
    add(t) {
      f(t, O_), _.redeemers_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_ex_units() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_total_ex_units(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return Yt.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ye {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ye.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_relay_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.relay_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_single_host_addr(t) {
      f(t, D_);
      const e = _.relay_new_single_host_addr(t.__wbg_ptr);
      return ye.__wrap(e);
    }
    static new_single_host_name(t) {
      f(t, U_);
      const e = _.relay_new_single_host_name(t.__wbg_ptr);
      return ye.__wrap(e);
    }
    static new_multi_host_name(t) {
      f(t, k_);
      const e = _.relay_new_multi_host_name(t.__wbg_ptr);
      return ye.__wrap(e);
    }
    kind() {
      return _.relay_kind(this.__wbg_ptr) >>> 0;
    }
    as_single_host_addr() {
      const t = _.relay_as_single_host_addr(this.__wbg_ptr);
      return t === 0 ? void 0 : D_.__wrap(t);
    }
    as_single_host_name() {
      const t = _.relay_as_single_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : U_.__wrap(t);
    }
    as_multi_host_name() {
      const t = _.relay_as_multi_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : k_.__wrap(t);
    }
  }
  class N_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(N_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_relays_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.relays_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return N_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.relays_get(this.__wbg_ptr, t);
      return ye.__wrap(e);
    }
    add(t) {
      f(t, ye), _.relays_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Oe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_rewardaddress_free(t);
    }
    static new(t, e) {
      f(e, J);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return Oe.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return J.__wrap(t);
    }
    to_address() {
      const t = _.rewardaddress_to_address(this.__wbg_ptr);
      return zt.__wrap(t);
    }
    static from_address(t) {
      f(t, zt);
      const e = _.rewardaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Oe.__wrap(e);
    }
  }
  class br {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(br.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_rewardaddresses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.rewardaddresses_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return br.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return br.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return br.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return br.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.rewardaddresses_get(this.__wbg_ptr, t);
      return Oe.__wrap(e);
    }
    add(t) {
      f(t, Oe), _.rewardaddresses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class F_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(F_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptall_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptall_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return Zt.__wrap(t);
    }
    static new(t) {
      f(t, Zt);
      const e = _.scriptall_new(t.__wbg_ptr);
      return F_.__wrap(e);
    }
  }
  class P_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(P_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptany_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptany_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return Zt.__wrap(t);
    }
    static new(t) {
      f(t, Zt);
      const e = _.scriptall_new(t.__wbg_ptr);
      return P_.__wrap(e);
    }
  }
  class Lr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Lr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptdatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptdatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ut {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ut.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scripthash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scripthash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class T_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(T_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scripthashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scripthashes_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return T_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.scripthashes_get(this.__wbg_ptr, t);
      return ut.__wrap(e);
    }
    add(t) {
      f(t, ut), _.scripthashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class R_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(R_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptnofk_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptnofk_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    n() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    native_scripts() {
      const t = _.scriptnofk_native_scripts(this.__wbg_ptr);
      return Zt.__wrap(t);
    }
    static new(t, e) {
      f(e, Zt);
      const s = _.scriptnofk_new(t, e.__wbg_ptr);
      return R_.__wrap(s);
    }
  }
  class $_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptpubkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptpubkey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    addr_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    static new(t) {
      f(t, ht);
      const e = _.scriptpubkey_new(t.__wbg_ptr);
      return $_.__wrap(e);
    }
  }
  class Ue {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ue.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_scriptref_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptref_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_native_script(t) {
      f(t, Ot);
      const e = _.scriptref_new_native_script(t.__wbg_ptr);
      return Ue.__wrap(e);
    }
    static new_plutus_script(t) {
      f(t, Dt);
      const e = _.scriptref_new_plutus_script(t.__wbg_ptr);
      return Ue.__wrap(e);
    }
    is_native_script() {
      return _.scriptref_is_native_script(this.__wbg_ptr) !== 0;
    }
    is_plutus_script() {
      return _.scriptref_is_plutus_script(this.__wbg_ptr) !== 0;
    }
    native_script() {
      const t = _.scriptref_native_script(this.__wbg_ptr);
      return t === 0 ? void 0 : Ot.__wrap(t);
    }
    plutus_script() {
      const t = _.scriptref_plutus_script(this.__wbg_ptr);
      return t === 0 ? void 0 : Dt.__wrap(t);
    }
  }
  class D_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(D_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_singlehostaddr_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.singlehostaddr_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    port() {
      const t = _.singlehostaddr_port(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t;
    }
    ipv4() {
      const t = _.singlehostaddr_ipv4(this.__wbg_ptr);
      return t === 0 ? void 0 : h_.__wrap(t);
    }
    ipv6() {
      const t = _.singlehostaddr_ipv6(this.__wbg_ptr);
      return t === 0 ? void 0 : y_.__wrap(t);
    }
    static new(t, e, s) {
      let o = 0;
      Ce(e) || (f(e, h_), o = e.__destroy_into_raw());
      let n = 0;
      Ce(s) || (f(s, y_), n = s.__destroy_into_raw());
      const c = _.singlehostaddr_new(Ce(t) ? 16777215 : t, o, n);
      return D_.__wrap(c);
    }
  }
  class U_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(U_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_singlehostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.singlehostname_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    port() {
      const t = _.singlehostname_port(this.__wbg_ptr);
      return t === 16777215 ? void 0 : t;
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return u_.__wrap(t);
    }
    static new(t, e) {
      f(e, u_);
      const s = _.singlehostname_new(Ce(t) ? 16777215 : t, e.__wbg_ptr);
      return U_.__wrap(s);
    }
  }
  class J {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(J.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakecredential_free(t);
    }
    static from_keyhash(t) {
      f(t, ht);
      const e = _.stakecredential_from_keyhash(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static from_scripthash(t) {
      f(t, ut);
      const e = _.stakecredential_from_scripthash(t.__wbg_ptr);
      return J.__wrap(e);
    }
    to_keyhash() {
      const t = _.stakecredential_to_keyhash(this.__wbg_ptr);
      return t === 0 ? void 0 : ht.__wrap(t);
    }
    to_scripthash() {
      const t = _.stakecredential_to_scripthash(this.__wbg_ptr);
      return t === 0 ? void 0 : ut.__wrap(t);
    }
    kind() {
      return _.stakecredential_kind(this.__wbg_ptr) >>> 0;
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakecredential_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class hr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(hr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakecredentials_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return hr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return hr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return hr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return hr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.stakecredentials_get(this.__wbg_ptr, t);
      return J.__wrap(e);
    }
    add(t) {
      f(t, J), _.stakecredentials_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class I_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(I_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakedelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakedelegation_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakedelegation_stake_credential(this.__wbg_ptr);
      return J.__wrap(t);
    }
    pool_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    static new(t, e) {
      f(t, J), f(e, ht);
      const s = _.stakedelegation_new(t.__wbg_ptr, e.__wbg_ptr);
      return I_.__wrap(s);
    }
  }
  class M_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(M_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakederegistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakederegistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return J.__wrap(t);
    }
    static new(t) {
      f(t, J);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return M_.__wrap(e);
    }
  }
  class W_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(W_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_stakeregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.stakeregistration_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return J.__wrap(t);
    }
    static new(t) {
      f(t, J);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return W_.__wrap(e);
    }
  }
  class Ie {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ie.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_timelockexpiry_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.timelockexpiry_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Ie.__wrap(e);
    }
    static new_timelockexpiry(t) {
      f(t, O);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Ie.__wrap(e);
    }
  }
  class Me {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Me.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_timelockstart_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.timelockstart_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Me.__wrap(e);
    }
    static new_timelockstart(t) {
      f(t, O);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Me.__wrap(e);
    }
  }
  class Q_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Q_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transaction_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transaction_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    body() {
      const t = _.transaction_body(this.__wbg_ptr);
      return We.__wrap(t);
    }
    witness_set() {
      const t = _.transaction_witness_set(this.__wbg_ptr);
      return B_.__wrap(t);
    }
    is_valid() {
      return _.transaction_is_valid(this.__wbg_ptr) !== 0;
    }
    auxiliary_data() {
      const t = _.transaction_auxiliary_data(this.__wbg_ptr);
      return t === 0 ? void 0 : d_.__wrap(t);
    }
    set_is_valid(t) {
      _.transaction_set_is_valid(this.__wbg_ptr, t);
    }
    static new(t, e, s) {
      f(t, We), f(e, B_);
      let o = 0;
      Ce(s) || (f(s, d_), o = s.__destroy_into_raw());
      const n = _.transaction_new(t.__wbg_ptr, e.__wbg_ptr, o);
      return Q_.__wrap(n);
    }
  }
  class We {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(We.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionbody_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionbody_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return We.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    inputs() {
      const t = _.transactionbody_inputs(this.__wbg_ptr);
      return It.__wrap(t);
    }
    outputs() {
      const t = _.transactionbody_outputs(this.__wbg_ptr);
      return He.__wrap(t);
    }
    fee() {
      const t = _.transactionbody_fee(this.__wbg_ptr);
      return O.__wrap(t);
    }
    ttl() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_ttl(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw u(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ttl_bignum() {
      const t = _.transactionbody_ttl_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    set_ttl(t) {
      f(t, O), _.transactionbody_set_ttl(this.__wbg_ptr, t.__wbg_ptr);
    }
    remove_ttl() {
      _.transactionbody_remove_ttl(this.__wbg_ptr);
    }
    set_certs(t) {
      f(t, p_), _.transactionbody_set_certs(this.__wbg_ptr, t.__wbg_ptr);
    }
    certs() {
      const t = _.transactionbody_certs(this.__wbg_ptr);
      return t === 0 ? void 0 : p_.__wrap(t);
    }
    set_withdrawals(t) {
      f(t, q_), _.transactionbody_set_withdrawals(this.__wbg_ptr, t.__wbg_ptr);
    }
    withdrawals() {
      const t = _.transactionbody_withdrawals(this.__wbg_ptr);
      return t === 0 ? void 0 : q_.__wrap(t);
    }
    set_update(t) {
      f(t, A_), _.transactionbody_set_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    update() {
      const t = _.transactionbody_update(this.__wbg_ptr);
      return t === 0 ? void 0 : A_.__wrap(t);
    }
    set_auxiliary_data_hash(t) {
      f(t, kr), _.transactionbody_set_auxiliary_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    auxiliary_data_hash() {
      const t = _.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : kr.__wrap(t);
    }
    set_validity_start_interval(t) {
      _.transactionbody_set_validity_start_interval(this.__wbg_ptr, t);
    }
    set_validity_start_interval_bignum(t) {
      f(t, O);
      var e = t.__destroy_into_raw();
      _.transactionbody_set_validity_start_interval_bignum(this.__wbg_ptr, e);
    }
    validity_start_interval_bignum() {
      const t = _.transactionbody_validity_start_interval_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    validity_start_interval() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_validity_start_interval(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw u(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_mint(t) {
      f(t, me), _.transactionbody_set_mint(this.__wbg_ptr, t.__wbg_ptr);
    }
    mint() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : me.__wrap(t);
    }
    multiassets() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : me.__wrap(t);
    }
    set_reference_inputs(t) {
      f(t, It), _.transactionbody_set_reference_inputs(this.__wbg_ptr, t.__wbg_ptr);
    }
    reference_inputs() {
      const t = _.transactionbody_reference_inputs(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    set_script_data_hash(t) {
      f(t, Lr), _.transactionbody_set_script_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    script_data_hash() {
      const t = _.transactionbody_script_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Lr.__wrap(t);
    }
    set_collateral(t) {
      f(t, It), _.transactionbody_set_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral() {
      const t = _.transactionbody_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    set_required_signers(t) {
      f(t, _e), _.transactionbody_set_required_signers(this.__wbg_ptr, t.__wbg_ptr);
    }
    required_signers() {
      const t = _.transactionbody_required_signers(this.__wbg_ptr);
      return t === 0 ? void 0 : _e.__wrap(t);
    }
    set_network_id(t) {
      f(t, De), _.transactionbody_set_network_id(this.__wbg_ptr, t.__wbg_ptr);
    }
    network_id() {
      const t = _.transactionbody_network_id(this.__wbg_ptr);
      return t === 0 ? void 0 : De.__wrap(t);
    }
    set_collateral_return(t) {
      f(t, xe), _.transactionbody_set_collateral_return(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral_return() {
      const t = _.transactionbody_collateral_return(this.__wbg_ptr);
      return t === 0 ? void 0 : xe.__wrap(t);
    }
    set_total_collateral(t) {
      f(t, O), _.transactionbody_set_total_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_collateral() {
      const t = _.transactionbody_total_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : O.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, It), f(e, He), f(s, O);
      const n = _.transactionbody_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, !Ce(o), Ce(o) ? 0 : o);
      return We.__wrap(n);
    }
    static new_tx_body(t, e, s) {
      f(t, It), f(e, He), f(s, O);
      const o = _.transactionbody_new_tx_body(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return We.__wrap(o);
    }
  }
  class Nr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Nr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class V_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(V_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactioninput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactioninput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    transaction_id() {
      const t = _.transactioninput_transaction_id(this.__wbg_ptr);
      return Nr.__wrap(t);
    }
    index() {
      return _.transactioninput_index(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, Nr);
      const s = _.transactioninput_new(t.__wbg_ptr, e);
      return V_.__wrap(s);
    }
  }
  class It {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(It.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactioninputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactioninputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return It.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactioninputs_get(this.__wbg_ptr, t);
      return V_.__wrap(e);
    }
    add(t) {
      f(t, V_), _.transactioninputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.transactioninputs_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
  }
  class q {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(q.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionmetadatum_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_map(t) {
      f(t, Er);
      const e = _.transactionmetadatum_new_map(t.__wbg_ptr);
      return q.__wrap(e);
    }
    static new_list(t) {
      f(t, Z_);
      const e = _.transactionmetadatum_new_list(t.__wbg_ptr);
      return q.__wrap(e);
    }
    static new_int(t) {
      f(t, ot);
      const e = _.transactionmetadatum_new_int(t.__wbg_ptr);
      return q.__wrap(e);
    }
    static new_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_new_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_text(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_new_text(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_map() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_map(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return Er.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_list() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_list(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return Z_.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_int() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_int(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return ot.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_bytes() {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_bytes(c, this.__wbg_ptr);
        var t = a()[c / 4 + 0], e = a()[c / 4 + 1], s = a()[c / 4 + 2], o = a()[c / 4 + 3];
        if (o) throw u(s);
        var n = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), n;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_text() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_text(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class en {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(en.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionmetadatumlabels_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatumlabels_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatumlabels_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return en.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatumlabels_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatumlabels_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return en.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return en.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionmetadatumlabels_get(this.__wbg_ptr, t);
      return O.__wrap(e);
    }
    add(t) {
      f(t, O), _.transactionmetadatumlabels_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class xe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionoutput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionoutput_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    address() {
      const t = _.transactionoutput_address(this.__wbg_ptr);
      return zt.__wrap(t);
    }
    amount() {
      const t = _.transactionoutput_amount(this.__wbg_ptr);
      return gt.__wrap(t);
    }
    data_hash() {
      const t = _.transactionoutput_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : jr.__wrap(t);
    }
    plutus_data() {
      const t = _.transactionoutput_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : Z.__wrap(t);
    }
    script_ref() {
      const t = _.transactionoutput_script_ref(this.__wbg_ptr);
      return t === 0 ? void 0 : Ue.__wrap(t);
    }
    set_script_ref(t) {
      f(t, Ue), _.transactionoutput_set_script_ref(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_plutus_data(t) {
      f(t, Z), _.transactionoutput_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_data_hash(t) {
      f(t, jr), _.transactionoutput_set_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    has_plutus_data() {
      return _.transactionoutput_has_plutus_data(this.__wbg_ptr) !== 0;
    }
    has_data_hash() {
      return _.transactionoutput_has_data_hash(this.__wbg_ptr) !== 0;
    }
    has_script_ref() {
      return _.transactionoutput_has_script_ref(this.__wbg_ptr) !== 0;
    }
    static new(t, e) {
      f(t, zt), f(e, gt);
      const s = _.transactionoutput_new(t.__wbg_ptr, e.__wbg_ptr);
      return xe.__wrap(s);
    }
    serialization_format() {
      const t = _.transactionoutput_serialization_format(this.__wbg_ptr);
      return t === 2 ? void 0 : t;
    }
  }
  class He {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(He.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionoutputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionoutputs_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return He.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionoutputs_get(this.__wbg_ptr, t);
      return xe.__wrap(e);
    }
    add(t) {
      f(t, xe), _.transactionoutputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class B_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(B_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_transactionwitnessset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionwitnessset_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_vkeys(t) {
      f(t, Y_), _.transactionwitnessset_set_vkeys(this.__wbg_ptr, t.__wbg_ptr);
    }
    vkeys() {
      const t = _.transactionwitnessset_vkeys(this.__wbg_ptr);
      return t === 0 ? void 0 : Y_.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, Zt), _.transactionwitnessset_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.transactionwitnessset_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Zt.__wrap(t);
    }
    set_bootstraps(t) {
      f(t, io), _.transactionwitnessset_set_bootstraps(this.__wbg_ptr, t.__wbg_ptr);
    }
    bootstraps() {
      const t = _.transactionwitnessset_bootstraps(this.__wbg_ptr);
      return t === 0 ? void 0 : io.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, ke), _.transactionwitnessset_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : ke.__wrap(t);
    }
    set_plutus_data(t) {
      f(t, ne), _.transactionwitnessset_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_data() {
      const t = _.transactionwitnessset_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : ne.__wrap(t);
    }
    set_redeemers(t) {
      f(t, L_), _.transactionwitnessset_set_redeemers(this.__wbg_ptr, t.__wbg_ptr);
    }
    redeemers() {
      const t = _.transactionwitnessset_redeemers(this.__wbg_ptr);
      return t === 0 ? void 0 : L_.__wrap(t);
    }
    static new() {
      const t = _.transactionwitnessset_new();
      return B_.__wrap(t);
    }
  }
  let id = class Qr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Qr.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_url_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.url_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.url_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.url_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Qr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_record(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  };
  class lt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(lt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_unitinterval_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.unitinterval_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return lt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    numerator() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return O.__wrap(t);
    }
    denominator() {
      const t = _.unitinterval_denominator(this.__wbg_ptr);
      return O.__wrap(t);
    }
    static new(t, e) {
      f(t, O), f(e, O);
      const s = _.unitinterval_new(t.__wbg_ptr, e.__wbg_ptr);
      return lt.__wrap(s);
    }
  }
  class A_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(A_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_update_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.update_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    proposed_protocol_parameter_updates() {
      const t = _.update_proposed_protocol_parameter_updates(this.__wbg_ptr);
      return z_.__wrap(t);
    }
    epoch() {
      return _.update_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, z_);
      const s = _.update_new(t.__wbg_ptr, e);
      return A_.__wrap(s);
    }
  }
  class Xe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Xe.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vrfkeyhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vrfkeyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const m = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(m, this.__wbg_ptr, x, k);
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], p = o, l = n;
        if (d) throw p = 0, l = 0, u(c);
        return e = p, s = l, h(p, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class gt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(gt.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_value_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.value_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, O);
      const e = _.value_new(t.__wbg_ptr);
      return gt.__wrap(e);
    }
    static new_from_assets(t) {
      f(t, Ut);
      const e = _.value_new_from_assets(t.__wbg_ptr);
      return gt.__wrap(e);
    }
    static new_with_assets(t, e) {
      f(t, O), f(e, Ut);
      const s = _.value_new_with_assets(t.__wbg_ptr, e.__wbg_ptr);
      return gt.__wrap(s);
    }
    static zero() {
      const t = _.value_zero();
      return gt.__wrap(t);
    }
    is_zero() {
      return _.value_is_zero(this.__wbg_ptr) !== 0;
    }
    coin() {
      const t = _.value_coin(this.__wbg_ptr);
      return O.__wrap(t);
    }
    set_coin(t) {
      f(t, O), _.value_set_coin(this.__wbg_ptr, t.__wbg_ptr);
    }
    multiasset() {
      const t = _.value_multiasset(this.__wbg_ptr);
      return t === 0 ? void 0 : Ut.__wrap(t);
    }
    set_multiasset(t) {
      f(t, Ut), _.value_set_multiasset(this.__wbg_ptr, t.__wbg_ptr);
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, gt), _.value_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, gt), _.value_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return gt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, gt);
      const e = _.value_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return gt.__wrap(e);
    }
    compare(t) {
      f(t, gt);
      const e = _.value_compare(this.__wbg_ptr, t.__wbg_ptr);
      return e === 16777215 ? void 0 : e;
    }
  }
  class je {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(je.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkey_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, Or);
      const e = _.vkey_new(t.__wbg_ptr);
      return je.__wrap(e);
    }
    public_key() {
      const t = _.vkey_public_key(this.__wbg_ptr);
      return Or.__wrap(t);
    }
  }
  class H_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(H_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkeywitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkeywitness_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e) {
      f(t, je), f(e, Se);
      const s = _.vkeywitness_new(t.__wbg_ptr, e.__wbg_ptr);
      return H_.__wrap(s);
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return je.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Se.__wrap(t);
    }
  }
  class Y_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Y_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_vkeywitnesses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vkeywitnesses_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.publickeys_new();
      return Y_.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.vkeywitnesses_get(this.__wbg_ptr, t);
      return H_.__wrap(e);
    }
    add(t) {
      f(t, H_), _.vkeywitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class q_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(q_.prototype);
      return e.__wbg_ptr = t, e;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      _.__wbg_withdrawals_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = S(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.withdrawals_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, h(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, p = o;
        if (c) throw d = 0, p = 0, u(n);
        return t = d, e = p, h(d, p);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return u(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return q_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Oe), f(e, O);
      const s = _.withdrawals_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : O.__wrap(s);
    }
    get(t) {
      f(t, Oe);
      const e = _.withdrawals_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : O.__wrap(e);
    }
    keys() {
      const t = _.withdrawals_keys(this.__wbg_ptr);
      return br.__wrap(t);
    }
  }
  function sf(r) {
    u(r);
  }
  function af(r, t) {
    const e = h(r, t);
    return B(e);
  }
  function cf(r, t) {
    const e = new Error(h(r, t));
    return B(e);
  }
  function df(r, t) {
    const e = I(t), s = typeof e == "string" ? e : void 0;
    var o = Ce(s) ? 0 : g(s, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
    a()[r / 4 + 1] = n, a()[r / 4 + 0] = o;
  }
  function lf(r) {
    return B(r);
  }
  function pf(r) {
    const t = I(r);
    return B(t);
  }
  function uf(r) {
    const t = I(r);
    return typeof t == "object" && t !== null;
  }
  function wf(r, t, e) {
    I(r)[u(t)] = u(e);
  }
  function ff(r, t) {
    const e = String(I(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function gf() {
    return __(function(r, t) {
      I(r).randomFillSync(u(t));
    }, arguments);
  }
  function bf() {
    return __(function(r, t) {
      I(r).getRandomValues(I(t));
    }, arguments);
  }
  function hf(r) {
    const t = I(r).crypto;
    return B(t);
  }
  function yf(r) {
    const t = I(r).process;
    return B(t);
  }
  function mf(r) {
    const t = I(r).versions;
    return B(t);
  }
  function vf(r) {
    const t = I(r).node;
    return B(t);
  }
  function kf(r) {
    return typeof I(r) == "string";
  }
  function xf() {
    return __(function() {
      const r = module.require;
      return B(r);
    }, arguments);
  }
  function jf(r) {
    const t = I(r).msCrypto;
    return B(t);
  }
  function Sf() {
    const r = new Array();
    return B(r);
  }
  function Ef(r) {
    return typeof I(r) == "function";
  }
  function zf(r, t) {
    const e = new Function(h(r, t));
    return B(e);
  }
  function Cf() {
    return B(/* @__PURE__ */ new Map());
  }
  function Of() {
    return __(function(r, t) {
      const e = I(r).call(I(t));
      return B(e);
    }, arguments);
  }
  function Lf() {
    const r = new Object();
    return B(r);
  }
  function Nf() {
    return __(function() {
      const r = self.self;
      return B(r);
    }, arguments);
  }
  function Ff() {
    return __(function() {
      const r = window.window;
      return B(r);
    }, arguments);
  }
  function Pf() {
    return __(function() {
      const r = globalThis.globalThis;
      return B(r);
    }, arguments);
  }
  function Tf() {
    return __(function() {
      const r = global.global;
      return B(r);
    }, arguments);
  }
  function Rf(r) {
    return I(r) === void 0;
  }
  function $f(r, t, e) {
    I(r)[t >>> 0] = u(e);
  }
  function Df() {
    return __(function(r, t, e) {
      const s = I(r).call(I(t), I(e));
      return B(s);
    }, arguments);
  }
  function Uf(r, t, e) {
    const s = I(r).set(I(t), I(e));
    return B(s);
  }
  function If(r) {
    const t = I(r).buffer;
    return B(t);
  }
  function Mf(r, t, e) {
    const s = new Uint8Array(I(r), t >>> 0, e >>> 0);
    return B(s);
  }
  function Wf(r) {
    const t = new Uint8Array(I(r));
    return B(t);
  }
  function Qf(r, t, e) {
    I(r).set(I(t), e >>> 0);
  }
  function Vf(r) {
    const t = new Uint8Array(r >>> 0);
    return B(t);
  }
  function Bf(r, t, e) {
    const s = I(r).subarray(t >>> 0, e >>> 0);
    return B(s);
  }
  function Af(r, t) {
    const e = new Function(h(r, t));
    return B(e);
  }
  function Hf(r, t) {
    const e = I(r).call(I(t));
    return B(e);
  }
  function Yf(r, t) {
    return I(r) === I(t);
  }
  function qf(r) {
    const t = I(r).self;
    return B(t);
  }
  function Xf(r) {
    const t = I(r).crypto;
    return B(t);
  }
  function Kf(r) {
    const t = I(r).getRandomValues;
    return B(t);
  }
  function Zf(r, t) {
    const e = require(h(r, t));
    return B(e);
  }
  function Jf(r, t, e) {
    I(r).randomFillSync(S(t, e));
  }
  function Gf(r, t, e) {
    I(r).getRandomValues(S(t, e));
  }
  function tg(r, t) {
    const e = _i(I(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function eg(r, t) {
    throw new Error(h(r, t));
  }
  function _g() {
    const r = _.memory;
    return B(r);
  }
  URL = globalThis.URL;
  const i = await tf({
    "./cardano_serialization_lib_bg.js": {
      __wbindgen_object_drop_ref: sf,
      __wbindgen_string_new: af,
      __wbindgen_error_new: cf,
      __wbindgen_string_get: df,
      __wbindgen_number_new: lf,
      __wbindgen_object_clone_ref: pf,
      __wbindgen_is_object: uf,
      __wbg_set_20cbc34131e76824: wf,
      __wbg_String_91fba7ded13ba54c: ff,
      __wbg_randomFillSync_dc1e9a60c158336d: gf,
      __wbg_getRandomValues_37fa2ca9e4e07fab: bf,
      __wbg_crypto_c48a774b022d20ac: hf,
      __wbg_process_298734cf255a885d: yf,
      __wbg_versions_e2e78e134e3e5d01: mf,
      __wbg_node_1cd7a5d853dbea79: vf,
      __wbindgen_is_string: kf,
      __wbg_require_8f08ceecec0f4fee: xf,
      __wbg_msCrypto_bcb970640f50a1e8: jf,
      __wbg_new_1d9a920c6bfc44a8: Sf,
      __wbindgen_is_function: Ef,
      __wbg_newnoargs_b5b063fc6c2f0376: zf,
      __wbg_new_268f7b7dd3430798: Cf,
      __wbg_call_97ae9d8645dc388b: Of,
      __wbg_new_0b9bfdd97583284e: Lf,
      __wbg_self_6d479506f72c6a71: Nf,
      __wbg_window_f2557cc78490aceb: Ff,
      __wbg_globalThis_7f206bda628d5286: Pf,
      __wbg_global_ba75c50d1cf384f4: Tf,
      __wbindgen_is_undefined: Rf,
      __wbg_set_a68214f35c417fa9: $f,
      __wbg_call_168da88779e35f61: Df,
      __wbg_set_933729cf5b66ac11: Uf,
      __wbg_buffer_3f3d764d4747d564: If,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: Mf,
      __wbg_new_8c3f0052272a457a: Wf,
      __wbg_set_83db9690f9353e79: Qf,
      __wbg_newwithlength_f5933855e4f48a19: Vf,
      __wbg_subarray_58ad4efbb5bcb886: Bf,
      __wbg_new_d87f272aec784ec0: Af,
      __wbg_call_eae29933372a39be: Hf,
      __wbindgen_jsval_eq: Yf,
      __wbg_self_e0b3266d2d9eba1a: qf,
      __wbg_crypto_e95a6e54c5c2e37f: Xf,
      __wbg_getRandomValues_dc67302a7bd1aec5: Kf,
      __wbg_require_0993fe224bf8e202: Zf,
      __wbg_randomFillSync_dd2297de5917c74e: Jf,
      __wbg_getRandomValues_02639197c8166a96: Gf,
      __wbindgen_debug_string: tg,
      __wbindgen_throw: eg,
      __wbindgen_memory: _g
    }
  }, Gw), rg = i.memory, ng = i.unitinterval_to_bytes, og = i.unitinterval_from_bytes, sg = i.unitinterval_to_hex, ag = i.unitinterval_from_hex, ig = i.unitinterval_to_json, cg = i.unitinterval_to_js_value, dg = i.unitinterval_from_json, lg = i.unitinterval_denominator, pg = i.unitinterval_new, ug = i.__wbg_transaction_free, wg = i.transaction_to_bytes, fg = i.transaction_from_bytes, gg = i.transaction_to_hex, bg = i.transaction_from_hex, hg = i.transaction_to_json, yg = i.transaction_to_js_value, mg = i.transaction_from_json, vg = i.transaction_body, kg = i.transaction_witness_set, xg = i.transaction_is_valid, jg = i.transaction_auxiliary_data, Sg = i.transaction_set_is_valid, Eg = i.transaction_new, zg = i.__wbg_transactioninputs_free, Cg = i.transactioninputs_to_bytes, Og = i.transactioninputs_from_bytes, Lg = i.transactioninputs_to_hex, Ng = i.transactioninputs_from_hex, Fg = i.transactioninputs_to_json, Pg = i.transactioninputs_to_js_value, Tg = i.transactioninputs_from_json, Rg = i.transactioninputs_get, $g = i.transactioninputs_add, Dg = i.transactioninputs_to_option, Ug = i.__wbg_transactionoutputs_free, Ig = i.transactionoutputs_to_bytes, Mg = i.transactionoutputs_from_bytes, Wg = i.transactionoutputs_to_hex, Qg = i.transactionoutputs_from_hex, Vg = i.transactionoutputs_to_json, Bg = i.transactionoutputs_to_js_value, Ag = i.transactionoutputs_from_json, Hg = i.transactionoutputs_get, Yg = i.transactionoutputs_add, qg = i.__wbg_datacost_free, Xg = i.datacost_new_coins_per_word, Kg = i.datacost_new_coins_per_byte, Zg = i.datacost_coins_per_byte, Jg = i.__wbg_certificates_free, Gg = i.certificates_to_bytes, tb = i.certificates_from_bytes, eb = i.certificates_to_hex, _b = i.certificates_from_hex, rb = i.certificates_to_json, nb = i.certificates_to_js_value, ob = i.certificates_from_json, sb = i.certificates_new, ab = i.certificates_get, ib = i.certificates_add, cb = i.__wbg_transactionbody_free, db = i.transactionbody_to_bytes, lb = i.transactionbody_from_bytes, pb = i.transactionbody_to_hex, ub = i.transactionbody_from_hex, wb = i.transactionbody_to_json, fb = i.transactionbody_to_js_value, gb = i.transactionbody_from_json, bb = i.transactionbody_inputs, hb = i.transactionbody_outputs, yb = i.transactionbody_fee, mb = i.transactionbody_ttl, vb = i.transactionbody_ttl_bignum, kb = i.transactionbody_set_ttl, xb = i.transactionbody_remove_ttl, jb = i.transactionbody_set_certs, Sb = i.transactionbody_certs, Eb = i.transactionbody_set_withdrawals, zb = i.transactionbody_withdrawals, Cb = i.transactionbody_set_update, Ob = i.transactionbody_update, Lb = i.transactionbody_set_auxiliary_data_hash, Nb = i.transactionbody_auxiliary_data_hash, Fb = i.transactionbody_set_validity_start_interval, Pb = i.transactionbody_set_validity_start_interval_bignum, Tb = i.transactionbody_validity_start_interval_bignum, Rb = i.transactionbody_validity_start_interval, $b = i.transactionbody_set_mint, Db = i.transactionbody_mint, Ub = i.transactionbody_set_reference_inputs, Ib = i.transactionbody_reference_inputs, Mb = i.transactionbody_set_script_data_hash, Wb = i.transactionbody_script_data_hash, Qb = i.transactionbody_set_collateral, Vb = i.transactionbody_collateral, Bb = i.transactionbody_set_required_signers, Ab = i.transactionbody_required_signers, Hb = i.transactionbody_set_network_id, Yb = i.transactionbody_network_id, qb = i.transactionbody_set_collateral_return, Xb = i.transactionbody_collateral_return, Kb = i.transactionbody_set_total_collateral, Zb = i.transactionbody_total_collateral, Jb = i.transactionbody_new, Gb = i.transactionbody_new_tx_body, th = i.__wbg_transactioninput_free, eh = i.transactioninput_to_bytes, _h = i.transactioninput_from_bytes, rh = i.transactioninput_to_hex, nh = i.transactioninput_from_hex, oh = i.transactioninput_to_json, sh = i.transactioninput_to_js_value, ah = i.transactioninput_from_json, ih = i.transactioninput_transaction_id, ch = i.transactioninput_index, dh = i.transactioninput_new, lh = i.__wbg_transactionoutput_free, ph = i.transactionoutput_to_bytes, uh = i.transactionoutput_from_bytes, wh = i.transactionoutput_to_hex, fh = i.transactionoutput_from_hex, gh = i.transactionoutput_to_json, bh = i.transactionoutput_to_js_value, hh = i.transactionoutput_from_json, yh = i.transactionoutput_address, mh = i.transactionoutput_amount, vh = i.transactionoutput_data_hash, kh = i.transactionoutput_plutus_data, xh = i.transactionoutput_script_ref, jh = i.transactionoutput_set_script_ref, Sh = i.transactionoutput_set_plutus_data, Eh = i.transactionoutput_set_data_hash, zh = i.transactionoutput_has_plutus_data, Ch = i.transactionoutput_has_data_hash, Oh = i.transactionoutput_has_script_ref, Lh = i.transactionoutput_new, Nh = i.transactionoutput_serialization_format, Fh = i.stakeregistration_to_bytes, Ph = i.stakeregistration_from_bytes, Th = i.stakeregistration_to_hex, Rh = i.stakeregistration_from_hex, $h = i.stakeregistration_to_js_value, Dh = i.stakeregistration_from_json, Uh = i.__wbg_stakederegistration_free, Ih = i.stakederegistration_to_bytes, Mh = i.stakederegistration_from_bytes, Wh = i.stakederegistration_to_hex, Qh = i.stakederegistration_from_hex, Vh = i.stakederegistration_to_json, Bh = i.stakederegistration_to_js_value, Ah = i.stakederegistration_from_json, Hh = i.stakederegistration_stake_credential, Yh = i.stakederegistration_new, qh = i.__wbg_stakedelegation_free, Xh = i.stakedelegation_to_bytes, Kh = i.stakedelegation_from_bytes, Zh = i.stakedelegation_to_hex, Jh = i.stakedelegation_from_hex, Gh = i.stakedelegation_to_json, ty = i.stakedelegation_to_js_value, ey = i.stakedelegation_from_json, _y = i.stakedelegation_stake_credential, ry = i.stakedelegation_new, ny = i.__wbg_ed25519keyhashes_free, oy = i.ed25519keyhashes_to_bytes, sy = i.ed25519keyhashes_from_bytes, ay = i.ed25519keyhashes_to_hex, iy = i.ed25519keyhashes_from_hex, cy = i.ed25519keyhashes_to_json, dy = i.ed25519keyhashes_to_js_value, ly = i.ed25519keyhashes_from_json, py = i.ed25519keyhashes_new, uy = i.ed25519keyhashes_get, wy = i.ed25519keyhashes_add, fy = i.ed25519keyhashes_to_option, gy = i.__wbg_relays_free, by = i.relays_to_bytes, hy = i.relays_from_bytes, yy = i.relays_to_hex, my = i.relays_from_hex, vy = i.relays_to_json, ky = i.relays_to_js_value, xy = i.relays_from_json, jy = i.relays_get, Sy = i.relays_add, Ey = i.__wbg_poolparams_free, zy = i.poolparams_to_bytes, Cy = i.poolparams_from_bytes, Oy = i.poolparams_to_hex, Ly = i.poolparams_from_hex, Ny = i.poolparams_to_json, Fy = i.poolparams_to_js_value, Py = i.poolparams_from_json, Ty = i.poolparams_operator, Ry = i.poolparams_vrf_keyhash, $y = i.poolparams_pledge, Dy = i.poolparams_cost, Uy = i.poolparams_margin, Iy = i.poolparams_reward_account, My = i.poolparams_pool_owners, Wy = i.poolparams_relays, Qy = i.poolparams_pool_metadata, Vy = i.poolparams_new, By = i.__wbg_poolregistration_free, Ay = i.poolregistration_to_bytes, Hy = i.poolregistration_from_bytes, Yy = i.poolregistration_to_hex, qy = i.poolregistration_from_hex, Xy = i.poolregistration_to_json, Ky = i.poolregistration_to_js_value, Zy = i.poolregistration_from_json, Jy = i.poolregistration_pool_params, Gy = i.poolregistration_new, tm = i.__wbg_poolretirement_free, em = i.poolretirement_to_bytes, _m = i.poolretirement_from_bytes, rm = i.poolretirement_to_hex, nm = i.poolretirement_from_hex, om = i.poolretirement_to_json, sm = i.poolretirement_to_js_value, am = i.poolretirement_from_json, im = i.poolretirement_pool_keyhash, cm = i.poolretirement_epoch, dm = i.poolretirement_new, lm = i.__wbg_genesiskeydelegation_free, pm = i.genesiskeydelegation_to_bytes, um = i.genesiskeydelegation_from_bytes, wm = i.genesiskeydelegation_to_hex, fm = i.genesiskeydelegation_from_hex, gm = i.genesiskeydelegation_to_json, bm = i.genesiskeydelegation_to_js_value, hm = i.genesiskeydelegation_from_json, ym = i.genesiskeydelegation_genesishash, mm = i.genesiskeydelegation_genesis_delegate_hash, vm = i.genesiskeydelegation_vrf_keyhash, km = i.genesiskeydelegation_new, xm = i.__wbg_moveinstantaneousrewardscert_free, jm = i.moveinstantaneousrewardscert_to_bytes, Sm = i.moveinstantaneousrewardscert_from_bytes, Em = i.moveinstantaneousrewardscert_to_hex, zm = i.moveinstantaneousrewardscert_from_hex, Cm = i.moveinstantaneousrewardscert_to_json, Om = i.moveinstantaneousrewardscert_to_js_value, Lm = i.moveinstantaneousrewardscert_from_json, Nm = i.moveinstantaneousrewardscert_move_instantaneous_reward, Fm = i.moveinstantaneousrewardscert_new, Pm = i.__wbg_certificate_free, Tm = i.certificate_to_bytes, Rm = i.certificate_from_bytes, $m = i.certificate_to_hex, Dm = i.certificate_from_hex, Um = i.certificate_to_json, Im = i.certificate_to_js_value, Mm = i.certificate_from_json, Wm = i.certificate_new_stake_registration, Qm = i.certificate_new_stake_deregistration, Vm = i.certificate_new_stake_delegation, Bm = i.certificate_new_pool_registration, Am = i.certificate_new_pool_retirement, Hm = i.certificate_new_genesis_key_delegation, Ym = i.certificate_new_move_instantaneous_rewards_cert, qm = i.certificate_kind, Xm = i.certificate_as_stake_registration, Km = i.certificate_as_stake_deregistration, Zm = i.certificate_as_stake_delegation, Jm = i.certificate_as_pool_registration, Gm = i.certificate_as_pool_retirement, tv = i.certificate_as_genesis_key_delegation, ev = i.certificate_as_move_instantaneous_rewards_cert, _v = i.__wbg_mirtostakecredentials_free, rv = i.mirtostakecredentials_to_bytes, nv = i.mirtostakecredentials_from_bytes, ov = i.mirtostakecredentials_to_hex, sv = i.mirtostakecredentials_from_hex, av = i.mirtostakecredentials_to_json, iv = i.mirtostakecredentials_to_js_value, cv = i.mirtostakecredentials_from_json, dv = i.mirtostakecredentials_insert, lv = i.mirtostakecredentials_get, pv = i.mirtostakecredentials_keys, uv = i.__wbg_moveinstantaneousreward_free, wv = i.moveinstantaneousreward_to_bytes, fv = i.moveinstantaneousreward_from_bytes, gv = i.moveinstantaneousreward_to_hex, bv = i.moveinstantaneousreward_from_hex, hv = i.moveinstantaneousreward_to_json, yv = i.moveinstantaneousreward_to_js_value, mv = i.moveinstantaneousreward_from_json, vv = i.moveinstantaneousreward_new_to_other_pot, kv = i.moveinstantaneousreward_new_to_stake_creds, xv = i.moveinstantaneousreward_pot, jv = i.moveinstantaneousreward_kind, Sv = i.moveinstantaneousreward_as_to_other_pot, Ev = i.moveinstantaneousreward_as_to_stake_creds, zv = i.__wbg_ipv4_free, Cv = i.ipv4_to_bytes, Ov = i.ipv4_from_bytes, Lv = i.ipv4_to_hex, Nv = i.ipv4_from_hex, Fv = i.ipv4_to_json, Pv = i.ipv4_to_js_value, Tv = i.ipv4_from_json, Rv = i.ipv4_new, $v = i.ipv4_ip, Dv = i.__wbg_ipv6_free, Uv = i.ipv6_to_bytes, Iv = i.ipv6_from_bytes, Mv = i.ipv6_to_hex, Wv = i.ipv6_from_hex, Qv = i.ipv6_to_json, Vv = i.ipv6_to_js_value, Bv = i.ipv6_from_json, Av = i.ipv6_new, Hv = i.ipv6_ip, Yv = i.url_to_bytes, qv = i.url_from_bytes, Xv = i.url_to_hex, Kv = i.url_from_hex, Zv = i.url_from_json, Jv = i.url_new, Gv = i.__wbg_dnsrecordaoraaaa_free, t1 = i.dnsrecordaoraaaa_to_bytes, e1 = i.dnsrecordaoraaaa_from_bytes, _1 = i.dnsrecordaoraaaa_to_hex, r1 = i.dnsrecordaoraaaa_from_hex, n1 = i.dnsrecordaoraaaa_to_json, o1 = i.dnsrecordaoraaaa_to_js_value, s1 = i.dnsrecordaoraaaa_from_json, a1 = i.dnsrecordaoraaaa_new, i1 = i.dnsrecordaoraaaa_record, c1 = i.dnsrecordsrv_to_bytes, d1 = i.dnsrecordsrv_from_bytes, l1 = i.dnsrecordsrv_to_hex, p1 = i.dnsrecordsrv_from_hex, u1 = i.dnsrecordsrv_from_json, w1 = i.dnsrecordsrv_new, f1 = i.__wbg_singlehostaddr_free, g1 = i.singlehostaddr_to_bytes, b1 = i.singlehostaddr_from_bytes, h1 = i.singlehostaddr_to_hex, y1 = i.singlehostaddr_from_hex, m1 = i.singlehostaddr_to_json, v1 = i.singlehostaddr_to_js_value, k1 = i.singlehostaddr_from_json, x1 = i.singlehostaddr_port, j1 = i.singlehostaddr_ipv4, S1 = i.singlehostaddr_ipv6, E1 = i.singlehostaddr_new, z1 = i.__wbg_singlehostname_free, C1 = i.singlehostname_to_bytes, O1 = i.singlehostname_from_bytes, L1 = i.singlehostname_to_hex, N1 = i.singlehostname_from_hex, F1 = i.singlehostname_to_json, P1 = i.singlehostname_to_js_value, T1 = i.singlehostname_from_json, R1 = i.singlehostname_port, $1 = i.singlehostname_new, D1 = i.__wbg_multihostname_free, U1 = i.multihostname_to_bytes, I1 = i.multihostname_from_bytes, M1 = i.multihostname_to_hex, W1 = i.multihostname_from_hex, Q1 = i.multihostname_to_json, V1 = i.multihostname_to_js_value, B1 = i.multihostname_from_json, A1 = i.multihostname_dns_name, H1 = i.multihostname_new, Y1 = i.__wbg_relay_free, q1 = i.relay_to_bytes, X1 = i.relay_from_bytes, K1 = i.relay_to_hex, Z1 = i.relay_from_hex, J1 = i.relay_to_json, G1 = i.relay_to_js_value, tk = i.relay_from_json, ek = i.relay_new_single_host_addr, _k = i.relay_new_single_host_name, rk = i.relay_new_multi_host_name, nk = i.relay_kind, ok = i.relay_as_single_host_addr, sk = i.relay_as_single_host_name, ak = i.relay_as_multi_host_name, ik = i.__wbg_poolmetadata_free, ck = i.poolmetadata_to_bytes, dk = i.poolmetadata_from_bytes, lk = i.poolmetadata_to_hex, pk = i.poolmetadata_from_hex, uk = i.poolmetadata_to_json, wk = i.poolmetadata_to_js_value, fk = i.poolmetadata_from_json, gk = i.poolmetadata_url, bk = i.poolmetadata_pool_metadata_hash, hk = i.poolmetadata_new, yk = i.__wbg_stakecredentials_free, mk = i.stakecredentials_to_bytes, vk = i.stakecredentials_from_bytes, kk = i.stakecredentials_to_hex, xk = i.stakecredentials_from_hex, jk = i.stakecredentials_to_json, Sk = i.stakecredentials_to_js_value, Ek = i.stakecredentials_from_json, zk = i.stakecredentials_get, Ck = i.stakecredentials_add, Ok = i.__wbg_rewardaddresses_free, Lk = i.rewardaddresses_to_bytes, Nk = i.rewardaddresses_from_bytes, Fk = i.rewardaddresses_to_hex, Pk = i.rewardaddresses_from_hex, Tk = i.rewardaddresses_to_json, Rk = i.rewardaddresses_to_js_value, $k = i.rewardaddresses_from_json, Dk = i.rewardaddresses_get, Uk = i.rewardaddresses_add, Ik = i.__wbg_withdrawals_free, Mk = i.withdrawals_to_bytes, Wk = i.withdrawals_from_bytes, Qk = i.withdrawals_to_hex, Vk = i.withdrawals_from_hex, Bk = i.withdrawals_to_json, Ak = i.withdrawals_to_js_value, Hk = i.withdrawals_from_json, Yk = i.withdrawals_insert, qk = i.withdrawals_get, Xk = i.withdrawals_keys, Kk = i.__wbg_transactionwitnessset_free, Zk = i.transactionwitnessset_to_bytes, Jk = i.transactionwitnessset_from_bytes, Gk = i.transactionwitnessset_to_hex, t0 = i.transactionwitnessset_from_hex, e0 = i.transactionwitnessset_to_json, _0 = i.transactionwitnessset_to_js_value, r0 = i.transactionwitnessset_from_json, n0 = i.transactionwitnessset_set_vkeys, o0 = i.transactionwitnessset_vkeys, s0 = i.transactionwitnessset_set_native_scripts, a0 = i.transactionwitnessset_native_scripts, i0 = i.transactionwitnessset_set_bootstraps, c0 = i.transactionwitnessset_bootstraps, d0 = i.transactionwitnessset_set_plutus_scripts, l0 = i.transactionwitnessset_plutus_scripts, p0 = i.transactionwitnessset_set_plutus_data, u0 = i.transactionwitnessset_plutus_data, w0 = i.transactionwitnessset_set_redeemers, f0 = i.transactionwitnessset_redeemers, g0 = i.transactionwitnessset_new, b0 = i.__wbg_scriptpubkey_free, h0 = i.scriptpubkey_to_bytes, y0 = i.scriptpubkey_from_bytes, m0 = i.scriptpubkey_to_hex, v0 = i.scriptpubkey_from_hex, k0 = i.scriptpubkey_to_json, x0 = i.scriptpubkey_to_js_value, j0 = i.scriptpubkey_from_json, S0 = i.scriptpubkey_addr_keyhash, E0 = i.scriptpubkey_new, z0 = i.__wbg_scriptall_free, C0 = i.scriptall_to_bytes, O0 = i.scriptall_from_bytes, L0 = i.scriptall_to_hex, N0 = i.scriptall_from_hex, F0 = i.scriptall_to_json, P0 = i.scriptall_to_js_value, T0 = i.scriptall_from_json, R0 = i.scriptall_native_scripts, $0 = i.scriptall_new, D0 = i.scriptany_to_bytes, U0 = i.scriptany_from_bytes, I0 = i.scriptany_to_hex, M0 = i.scriptany_from_hex, W0 = i.scriptany_to_js_value, Q0 = i.scriptany_from_json, V0 = i.__wbg_scriptnofk_free, B0 = i.scriptnofk_to_bytes, A0 = i.scriptnofk_from_bytes, H0 = i.scriptnofk_to_hex, Y0 = i.scriptnofk_from_hex, q0 = i.scriptnofk_to_json, X0 = i.scriptnofk_to_js_value, K0 = i.scriptnofk_from_json, Z0 = i.scriptnofk_native_scripts, J0 = i.scriptnofk_new, G0 = i.timelockstart_to_bytes, t4 = i.timelockstart_from_bytes, e4 = i.timelockstart_to_hex, _4 = i.timelockstart_from_hex, r4 = i.timelockstart_to_js_value, n4 = i.timelockstart_from_json, o4 = i.__wbg_timelockexpiry_free, s4 = i.timelockexpiry_to_bytes, a4 = i.timelockexpiry_from_bytes, i4 = i.timelockexpiry_to_hex, c4 = i.timelockexpiry_from_hex, d4 = i.timelockexpiry_to_json, l4 = i.timelockexpiry_to_js_value, p4 = i.timelockexpiry_from_json, u4 = i.timelockexpiry_slot, w4 = i.timelockexpiry_slot_bignum, f4 = i.timelockexpiry_new, g4 = i.timelockexpiry_new_timelockexpiry, b4 = i.__wbg_scriptref_free, h4 = i.scriptref_to_bytes, y4 = i.scriptref_from_bytes, m4 = i.scriptref_to_hex, v4 = i.scriptref_from_hex, k4 = i.scriptref_to_json, x4 = i.scriptref_to_js_value, j4 = i.scriptref_from_json, S4 = i.scriptref_new_native_script, E4 = i.scriptref_new_plutus_script, z4 = i.scriptref_is_native_script, C4 = i.scriptref_is_plutus_script, O4 = i.scriptref_native_script, L4 = i.scriptref_plutus_script, N4 = i.__wbg_outputdatum_free, F4 = i.outputdatum_new_data_hash, P4 = i.outputdatum_new_data, T4 = i.outputdatum_data_hash, R4 = i.outputdatum_data, $4 = i.__wbg_nativescript_free, D4 = i.nativescript_to_bytes, U4 = i.nativescript_from_bytes, I4 = i.nativescript_to_hex, M4 = i.nativescript_from_hex, W4 = i.nativescript_to_json, Q4 = i.nativescript_to_js_value, V4 = i.nativescript_from_json, B4 = i.nativescript_hash, A4 = i.nativescript_new_script_pubkey, H4 = i.nativescript_new_script_all, Y4 = i.nativescript_new_script_any, q4 = i.nativescript_new_script_n_of_k, X4 = i.nativescript_new_timelock_start, K4 = i.nativescript_new_timelock_expiry, Z4 = i.nativescript_kind, J4 = i.nativescript_as_script_pubkey, G4 = i.nativescript_as_script_all, t6 = i.nativescript_as_script_any, e6 = i.nativescript_as_script_n_of_k, _6 = i.nativescript_as_timelock_start, r6 = i.nativescript_as_timelock_expiry, n6 = i.nativescript_get_required_signers, o6 = i.__wbg_nativescripts_free, s6 = i.nativescripts_get, a6 = i.nativescripts_add, i6 = i.__wbg_update_free, c6 = i.update_to_bytes, d6 = i.update_from_bytes, l6 = i.update_to_hex, p6 = i.update_from_hex, u6 = i.update_to_json, w6 = i.update_to_js_value, f6 = i.update_from_json, g6 = i.update_proposed_protocol_parameter_updates, b6 = i.update_epoch, h6 = i.update_new, y6 = i.__wbg_genesishashes_free, m6 = i.genesishashes_to_bytes, v6 = i.genesishashes_from_bytes, k6 = i.genesishashes_to_hex, x6 = i.genesishashes_from_hex, j6 = i.genesishashes_to_json, S6 = i.genesishashes_to_js_value, E6 = i.genesishashes_from_json, z6 = i.genesishashes_get, C6 = i.genesishashes_add, O6 = i.__wbg_scripthashes_free, L6 = i.scripthashes_to_bytes, N6 = i.scripthashes_from_bytes, F6 = i.scripthashes_to_hex, P6 = i.scripthashes_from_hex, T6 = i.scripthashes_to_json, R6 = i.scripthashes_to_js_value, $6 = i.scripthashes_from_json, D6 = i.scripthashes_get, U6 = i.scripthashes_add, I6 = i.__wbg_proposedprotocolparameterupdates_free, M6 = i.proposedprotocolparameterupdates_to_bytes, W6 = i.proposedprotocolparameterupdates_from_bytes, Q6 = i.proposedprotocolparameterupdates_to_hex, V6 = i.proposedprotocolparameterupdates_from_hex, B6 = i.proposedprotocolparameterupdates_to_json, A6 = i.proposedprotocolparameterupdates_to_js_value, H6 = i.proposedprotocolparameterupdates_from_json, Y6 = i.proposedprotocolparameterupdates_insert, q6 = i.proposedprotocolparameterupdates_get, X6 = i.proposedprotocolparameterupdates_keys, K6 = i.__wbg_protocolversion_free, Z6 = i.protocolversion_to_bytes, J6 = i.protocolversion_from_bytes, G6 = i.protocolversion_to_hex, tx = i.protocolversion_from_hex, ex = i.protocolversion_to_json, _x = i.protocolversion_to_js_value, rx = i.protocolversion_from_json, nx = i.protocolversion_major, ox = i.protocolversion_minor, sx = i.protocolversion_new, ax = i.__wbg_protocolparamupdate_free, ix = i.protocolparamupdate_to_bytes, cx = i.protocolparamupdate_from_bytes, dx = i.protocolparamupdate_to_hex, lx = i.protocolparamupdate_from_hex, px = i.protocolparamupdate_to_json, ux = i.protocolparamupdate_to_js_value, wx = i.protocolparamupdate_from_json, fx = i.protocolparamupdate_set_minfee_a, gx = i.protocolparamupdate_minfee_a, bx = i.protocolparamupdate_set_minfee_b, hx = i.protocolparamupdate_minfee_b, yx = i.protocolparamupdate_set_max_block_body_size, mx = i.protocolparamupdate_max_block_body_size, vx = i.protocolparamupdate_set_max_tx_size, kx = i.protocolparamupdate_max_tx_size, xx = i.protocolparamupdate_set_max_block_header_size, jx = i.protocolparamupdate_max_block_header_size, Sx = i.protocolparamupdate_set_key_deposit, Ex = i.protocolparamupdate_key_deposit, zx = i.protocolparamupdate_set_pool_deposit, Cx = i.protocolparamupdate_pool_deposit, Ox = i.protocolparamupdate_set_max_epoch, Lx = i.protocolparamupdate_max_epoch, Nx = i.protocolparamupdate_set_n_opt, Fx = i.protocolparamupdate_n_opt, Px = i.protocolparamupdate_set_pool_pledge_influence, Tx = i.protocolparamupdate_pool_pledge_influence, Rx = i.protocolparamupdate_set_expansion_rate, $x = i.protocolparamupdate_expansion_rate, Dx = i.protocolparamupdate_set_treasury_growth_rate, Ux = i.protocolparamupdate_treasury_growth_rate, Ix = i.protocolparamupdate_d, Mx = i.protocolparamupdate_extra_entropy, Wx = i.protocolparamupdate_set_protocol_version, Qx = i.protocolparamupdate_protocol_version, Vx = i.protocolparamupdate_set_min_pool_cost, Bx = i.protocolparamupdate_min_pool_cost, Ax = i.protocolparamupdate_set_ada_per_utxo_byte, Hx = i.protocolparamupdate_ada_per_utxo_byte, Yx = i.protocolparamupdate_set_cost_models, qx = i.protocolparamupdate_cost_models, Xx = i.protocolparamupdate_set_execution_costs, Kx = i.protocolparamupdate_execution_costs, Zx = i.protocolparamupdate_set_max_tx_ex_units, Jx = i.protocolparamupdate_max_tx_ex_units, Gx = i.protocolparamupdate_set_max_block_ex_units, t2 = i.protocolparamupdate_max_block_ex_units, e2 = i.protocolparamupdate_set_max_value_size, _2 = i.protocolparamupdate_max_value_size, r2 = i.protocolparamupdate_set_collateral_percentage, n2 = i.protocolparamupdate_collateral_percentage, o2 = i.protocolparamupdate_set_max_collateral_inputs, s2 = i.protocolparamupdate_max_collateral_inputs, a2 = i.protocolparamupdate_new, i2 = i.__wbg_transactionbodies_free, c2 = i.transactionbodies_to_bytes, d2 = i.transactionbodies_from_bytes, l2 = i.transactionbodies_to_hex, p2 = i.transactionbodies_from_hex, u2 = i.transactionbodies_to_json, w2 = i.transactionbodies_to_js_value, f2 = i.transactionbodies_from_json, g2 = i.transactionbodies_get, b2 = i.transactionbodies_add, h2 = i.__wbg_transactionwitnesssets_free, y2 = i.transactionwitnesssets_to_bytes, m2 = i.transactionwitnesssets_from_bytes, v2 = i.transactionwitnesssets_to_hex, k2 = i.transactionwitnesssets_from_hex, x2 = i.transactionwitnesssets_to_json, j2 = i.transactionwitnesssets_to_js_value, S2 = i.transactionwitnesssets_from_json, E2 = i.transactionwitnesssets_get, z2 = i.transactionwitnesssets_add, C2 = i.__wbg_auxiliarydataset_free, O2 = i.auxiliarydataset_new, L2 = i.auxiliarydataset_len, N2 = i.auxiliarydataset_insert, F2 = i.auxiliarydataset_get, P2 = i.auxiliarydataset_indices, T2 = i.__wbg_block_free, R2 = i.block_to_bytes, $2 = i.block_from_bytes, D2 = i.block_to_hex, U2 = i.block_from_hex, I2 = i.block_to_json, M2 = i.block_to_js_value, W2 = i.block_from_json, Q2 = i.block_header, V2 = i.block_transaction_bodies, B2 = i.block_transaction_witness_sets, A2 = i.block_auxiliary_data_set, H2 = i.block_invalid_transactions, Y2 = i.block_new, q2 = i.__wbg_header_free, X2 = i.header_to_bytes, K2 = i.header_from_bytes, Z2 = i.header_to_hex, J2 = i.header_from_hex, G2 = i.header_to_json, tj = i.header_to_js_value, ej = i.header_from_json, _j = i.header_header_body, rj = i.header_body_signature, nj = i.header_new, oj = i.__wbg_operationalcert_free, sj = i.operationalcert_to_bytes, aj = i.operationalcert_from_bytes, ij = i.operationalcert_to_hex, cj = i.operationalcert_from_hex, dj = i.operationalcert_to_json, lj = i.operationalcert_to_js_value, pj = i.operationalcert_from_json, uj = i.operationalcert_hot_vkey, wj = i.operationalcert_sequence_number, fj = i.operationalcert_kes_period, gj = i.operationalcert_sigma, bj = i.operationalcert_new, hj = i.__wbg_headerbody_free, yj = i.headerbody_to_bytes, mj = i.headerbody_from_bytes, vj = i.headerbody_to_hex, kj = i.headerbody_from_hex, xj = i.headerbody_to_json, jj = i.headerbody_to_js_value, Sj = i.headerbody_from_json, Ej = i.headerbody_block_number, zj = i.headerbody_slot, Cj = i.headerbody_slot_bignum, Oj = i.headerbody_prev_hash, Lj = i.headerbody_issuer_vkey, Nj = i.headerbody_vrf_vkey, Fj = i.headerbody_has_nonce_and_leader_vrf, Pj = i.headerbody_nonce_vrf_or_nothing, Tj = i.headerbody_leader_vrf_or_nothing, Rj = i.headerbody_has_vrf_result, $j = i.headerbody_vrf_result_or_nothing, Dj = i.headerbody_block_body_size, Uj = i.headerbody_block_body_hash, Ij = i.headerbody_operational_cert, Mj = i.headerbody_protocol_version, Wj = i.headerbody_new, Qj = i.headerbody_new_headerbody, Vj = i.__wbg_assetname_free, Bj = i.assetname_to_bytes, Aj = i.assetname_from_bytes, Hj = i.assetname_to_hex, Yj = i.assetname_from_hex, qj = i.assetname_to_json, Xj = i.assetname_to_js_value, Kj = i.assetname_from_json, Zj = i.assetname_new, Jj = i.assetname_name, Gj = i.__wbg_assetnames_free, t3 = i.assetnames_to_bytes, e3 = i.assetnames_from_bytes, _3 = i.assetnames_to_hex, r3 = i.assetnames_from_hex, n3 = i.assetnames_to_json, o3 = i.assetnames_to_js_value, s3 = i.assetnames_from_json, a3 = i.assetnames_new, i3 = i.assetnames_len, c3 = i.assetnames_get, d3 = i.assetnames_add, l3 = i.__wbg_assets_free, p3 = i.assets_to_bytes, u3 = i.assets_from_bytes, w3 = i.assets_to_hex, f3 = i.assets_from_hex, g3 = i.assets_to_json, b3 = i.assets_to_js_value, h3 = i.assets_from_json, y3 = i.assets_new, m3 = i.assets_insert, v3 = i.assets_get, k3 = i.assets_keys, x3 = i.__wbg_multiasset_free, j3 = i.multiasset_to_bytes, S3 = i.multiasset_from_bytes, E3 = i.multiasset_to_hex, z3 = i.multiasset_from_hex, C3 = i.multiasset_to_json, O3 = i.multiasset_to_js_value, L3 = i.multiasset_from_json, N3 = i.multiasset_insert, F3 = i.multiasset_get, P3 = i.multiasset_set_asset, T3 = i.multiasset_get_asset, R3 = i.multiasset_keys, $3 = i.multiasset_sub, D3 = i.__wbg_mintsassets_free, U3 = i.__wbg_mintassets_free, I3 = i.mintassets_new_from_entry, M3 = i.mintassets_insert, W3 = i.mintassets_get, Q3 = i.mintassets_keys, V3 = i.__wbg_mint_free, B3 = i.mint_to_bytes, A3 = i.mint_from_bytes, H3 = i.mint_to_hex, Y3 = i.mint_from_hex, q3 = i.mint_to_json, X3 = i.mint_to_js_value, K3 = i.mint_from_json, Z3 = i.mint_new_from_entry, J3 = i.mint_insert, G3 = i.mint_get, t5 = i.mint_get_all, e5 = i.mint_keys, _5 = i.mint_as_positive_multiasset, r5 = i.mint_as_negative_multiasset, n5 = i.__wbg_networkid_free, o5 = i.networkid_to_bytes, s5 = i.networkid_from_bytes, a5 = i.networkid_to_hex, i5 = i.networkid_from_hex, c5 = i.networkid_to_json, d5 = i.networkid_to_js_value, l5 = i.networkid_from_json, p5 = i.networkid_testnet, u5 = i.networkid_mainnet, w5 = i.networkid_kind, f5 = i.__wbg_unitinterval_free, g5 = i.transactionoutputs_len, b5 = i.transactioninputs_len, h5 = i.ed25519keyhashes_len, y5 = i.relays_len, m5 = i.stakecredentials_len, v5 = i.rewardaddresses_len, k5 = i.withdrawals_len, x5 = i.nativescripts_len, j5 = i.genesishashes_len, S5 = i.scripthashes_len, E5 = i.proposedprotocolparameterupdates_len, z5 = i.scriptnofk_n, C5 = i.transactionbodies_len, O5 = i.transactionwitnesssets_len, L5 = i.mirtostakecredentials_len, N5 = i.certificates_len, F5 = i.assets_len, P5 = i.multiasset_len, T5 = i.mintassets_len, R5 = i.mint_len, $5 = i.scriptany_native_scripts, D5 = i.unitinterval_numerator, U5 = i.timelockstart_slot_bignum, I5 = i.timelockstart_slot, M5 = i.transactionbody_multiassets, W5 = i.stakeregistration_stake_credential, Q5 = i.url_url, V5 = i.dnsrecordsrv_record, B5 = i.url_to_js_value, A5 = i.dnsrecordsrv_to_js_value, H5 = i.__wbg_url_free, Y5 = i.__wbg_dnsrecordsrv_free, q5 = i.__wbg_scriptany_free, X5 = i.stakedelegation_pool_keyhash, K5 = i.timelockstart_new, Z5 = i.__wbg_timelockstart_free, J5 = i.withdrawals_new, G5 = i.proposedprotocolparameterupdates_new, tS = i.mirtostakecredentials_new, eS = i.timelockstart_new_timelockstart, _S = i.transactioninputs_new, rS = i.stakeregistration_new, nS = i.relays_new, oS = i.singlehostname_dns_name, sS = i.stakecredentials_new, aS = i.rewardaddresses_new, iS = i.scriptany_new, cS = i.transactionoutputs_new, dS = i.genesishashes_new, lS = i.scripthashes_new, pS = i.transactionbodies_new, uS = i.transactionwitnesssets_new, wS = i.nativescripts_new, fS = i.multiasset_new, gS = i.mintassets_new, bS = i.mint_new, hS = i.__wbg_stakeregistration_free, yS = i.stakeregistration_to_json, mS = i.scriptany_to_json, vS = i.timelockstart_to_json, kS = i.url_to_json, xS = i.dnsrecordsrv_to_json, jS = i.encrypt_with_password, SS = i.decrypt_with_password, ES = i.__wbg_transactionoutputbuilder_free, zS = i.transactionoutputbuilder_new, CS = i.transactionoutputbuilder_with_address, OS = i.transactionoutputbuilder_with_data_hash, LS = i.transactionoutputbuilder_with_plutus_data, NS = i.transactionoutputbuilder_with_script_ref, FS = i.transactionoutputbuilder_next, PS = i.__wbg_transactionoutputamountbuilder_free, TS = i.transactionoutputamountbuilder_with_value, RS = i.transactionoutputamountbuilder_with_coin, $S = i.transactionoutputamountbuilder_with_coin_and_asset, DS = i.transactionoutputamountbuilder_with_asset_and_min_required_coin, US = i.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost, IS = i.transactionoutputamountbuilder_build, MS = i.__wbg_transactionunspentoutput_free, WS = i.transactionunspentoutput_to_bytes, QS = i.transactionunspentoutput_from_bytes, VS = i.transactionunspentoutput_to_hex, BS = i.transactionunspentoutput_from_hex, AS = i.transactionunspentoutput_to_json, HS = i.transactionunspentoutput_to_js_value, YS = i.transactionunspentoutput_from_json, qS = i.transactionunspentoutput_new, XS = i.transactionunspentoutput_input, KS = i.transactionunspentoutput_output, ZS = i.__wbg_transactionunspentoutputs_free, JS = i.transactionunspentoutputs_to_json, GS = i.transactionunspentoutputs_to_js_value, tE = i.transactionunspentoutputs_from_json, eE = i.transactionunspentoutputs_new, _E = i.transactionunspentoutputs_len, rE = i.transactionunspentoutputs_get, nE = i.transactionunspentoutputs_add, oE = i.__wbg_bignum_free, sE = i.bignum_to_bytes, aE = i.bignum_from_bytes, iE = i.bignum_to_hex, cE = i.bignum_from_hex, dE = i.bignum_to_json, lE = i.bignum_to_js_value, pE = i.bignum_from_json, uE = i.bignum_from_str, wE = i.bignum_to_str, fE = i.bignum_zero, gE = i.bignum_one, bE = i.bignum_is_zero, hE = i.bignum_div_floor, yE = i.bignum_checked_mul, mE = i.bignum_checked_add, vE = i.bignum_checked_sub, kE = i.bignum_clamped_sub, xE = i.bignum_compare, jE = i.bignum_less_than, SE = i.bignum_max_value, EE = i.bignum_max, zE = i.__wbg_value_free, CE = i.value_to_bytes, OE = i.value_from_bytes, LE = i.value_to_hex, NE = i.value_from_hex, FE = i.value_to_json, PE = i.value_to_js_value, TE = i.value_from_json, RE = i.value_new, $E = i.value_new_from_assets, DE = i.value_new_with_assets, UE = i.value_zero, IE = i.value_is_zero, ME = i.value_coin, WE = i.value_set_coin, QE = i.value_multiasset, VE = i.value_set_multiasset, BE = i.value_checked_add, AE = i.value_checked_sub, HE = i.value_clamped_sub, YE = i.value_compare, qE = i.__wbg_int_free, XE = i.int_to_bytes, KE = i.int_from_bytes, ZE = i.int_to_hex, JE = i.int_from_hex, GE = i.int_to_json, t8 = i.int_to_js_value, e8 = i.int_from_json, _8 = i.int_new, r8 = i.int_new_negative, n8 = i.int_new_i32, o8 = i.int_is_positive, s8 = i.int_as_positive, a8 = i.int_as_negative, i8 = i.int_as_i32, c8 = i.int_as_i32_or_fail, d8 = i.int_to_str, l8 = i.int_from_str, p8 = i.__wbg_bigint_free, u8 = i.bigint_to_bytes, w8 = i.bigint_from_bytes, f8 = i.bigint_to_hex, g8 = i.bigint_from_hex, b8 = i.bigint_to_json, h8 = i.bigint_to_js_value, y8 = i.bigint_from_json, m8 = i.bigint_is_zero, v8 = i.bigint_as_u64, k8 = i.bigint_as_int, x8 = i.bigint_from_str, j8 = i.bigint_to_str, S8 = i.bigint_add, E8 = i.bigint_mul, z8 = i.bigint_one, C8 = i.bigint_increment, O8 = i.bigint_div_ceil, L8 = i.make_daedalus_bootstrap_witness, N8 = i.make_icarus_bootstrap_witness, F8 = i.make_vkey_witness, P8 = i.hash_auxiliary_data, T8 = i.hash_transaction, R8 = i.hash_plutus_data, $8 = i.hash_script_data, D8 = i.get_implicit_input, U8 = i.get_deposit, I8 = i.min_ada_for_output, M8 = i.min_ada_required, W8 = i.encode_json_str_to_native_script, Q8 = i.int_as_i32_or_nothing, V8 = i.__wbg_bip32privatekey_free, B8 = i.bip32privatekey_derive, A8 = i.bip32privatekey_from_128_xprv, H8 = i.bip32privatekey_to_128_xprv, Y8 = i.bip32privatekey_generate_ed25519_bip32, q8 = i.bip32privatekey_to_raw_key, X8 = i.bip32privatekey_to_public, K8 = i.bip32privatekey_from_bytes, Z8 = i.bip32privatekey_as_bytes, J8 = i.bip32privatekey_from_bech32, G8 = i.bip32privatekey_to_bech32, tz = i.bip32privatekey_from_bip39_entropy, ez = i.bip32privatekey_chaincode, _z = i.bip32privatekey_to_hex, rz = i.bip32privatekey_from_hex, nz = i.__wbg_bip32publickey_free, oz = i.bip32publickey_derive, sz = i.bip32publickey_to_raw_key, az = i.bip32publickey_from_bytes, iz = i.bip32publickey_as_bytes, cz = i.bip32publickey_from_bech32, dz = i.bip32publickey_to_bech32, lz = i.bip32publickey_chaincode, pz = i.bip32publickey_to_hex, uz = i.bip32publickey_from_hex, wz = i.__wbg_privatekey_free, fz = i.privatekey_to_public, gz = i.privatekey_generate_ed25519, bz = i.privatekey_generate_ed25519extended, hz = i.privatekey_from_bech32, yz = i.privatekey_to_bech32, mz = i.privatekey_as_bytes, vz = i.privatekey_from_extended_bytes, kz = i.privatekey_from_normal_bytes, xz = i.privatekey_sign, jz = i.privatekey_to_hex, Sz = i.privatekey_from_hex, Ez = i.__wbg_publickey_free, zz = i.publickey_from_bech32, Cz = i.publickey_to_bech32, Oz = i.publickey_from_bytes, Lz = i.publickey_verify, Nz = i.publickey_hash, Fz = i.publickey_to_hex, Pz = i.publickey_from_hex, Tz = i.__wbg_vkey_free, Rz = i.vkey_to_bytes, $z = i.vkey_from_bytes, Dz = i.vkey_to_hex, Uz = i.vkey_from_hex, Iz = i.vkey_to_json, Mz = i.vkey_to_js_value, Wz = i.vkey_from_json, Qz = i.vkey_new, Vz = i.vkey_public_key, Bz = i.__wbg_vkeys_free, Az = i.vkeys_get, Hz = i.vkeys_add, Yz = i.__wbg_vkeywitness_free, qz = i.vkeywitness_to_bytes, Xz = i.vkeywitness_from_bytes, Kz = i.vkeywitness_to_hex, Zz = i.vkeywitness_from_hex, Jz = i.vkeywitness_to_json, Gz = i.vkeywitness_to_js_value, t9 = i.vkeywitness_from_json, e9 = i.vkeywitness_new, _9 = i.__wbg_vkeywitnesses_free, r9 = i.vkeywitnesses_to_bytes, n9 = i.vkeywitnesses_from_bytes, o9 = i.vkeywitnesses_to_hex, s9 = i.vkeywitnesses_from_hex, a9 = i.vkeywitnesses_to_json, i9 = i.vkeywitnesses_to_js_value, c9 = i.vkeywitnesses_from_json, d9 = i.vkeywitnesses_get, l9 = i.vkeywitnesses_add, p9 = i.__wbg_bootstrapwitness_free, u9 = i.bootstrapwitness_to_bytes, w9 = i.bootstrapwitness_from_bytes, f9 = i.bootstrapwitness_to_hex, g9 = i.bootstrapwitness_from_hex, b9 = i.bootstrapwitness_to_json, h9 = i.bootstrapwitness_to_js_value, y9 = i.bootstrapwitness_from_json, m9 = i.bootstrapwitness_vkey, v9 = i.bootstrapwitness_signature, k9 = i.bootstrapwitness_chain_code, x9 = i.bootstrapwitness_attributes, j9 = i.bootstrapwitness_new, S9 = i.__wbg_bootstrapwitnesses_free, E9 = i.bootstrapwitnesses_new, z9 = i.bootstrapwitnesses_len, C9 = i.bootstrapwitnesses_get, O9 = i.bootstrapwitnesses_add, L9 = i.__wbg_publickeys_free, N9 = i.publickeys_new, F9 = i.publickeys_get, P9 = i.publickeys_add, T9 = i.__wbg_ed25519signature_free, R9 = i.ed25519signature_to_bytes, $9 = i.ed25519signature_to_bech32, D9 = i.ed25519signature_to_hex, U9 = i.ed25519signature_from_bech32, I9 = i.ed25519signature_from_hex, M9 = i.ed25519signature_from_bytes, W9 = i.__wbg_legacydaedalusprivatekey_free, Q9 = i.legacydaedalusprivatekey_from_bytes, V9 = i.legacydaedalusprivatekey_as_bytes, B9 = i.legacydaedalusprivatekey_chaincode, A9 = i.__wbg_ed25519keyhash_free, H9 = i.ed25519keyhash_from_bytes, Y9 = i.ed25519keyhash_to_bytes, q9 = i.ed25519keyhash_to_bech32, X9 = i.ed25519keyhash_from_bech32, K9 = i.ed25519keyhash_to_hex, Z9 = i.ed25519keyhash_from_hex, J9 = i.scripthash_from_bytes, G9 = i.scripthash_from_bech32, tC = i.scripthash_from_hex, eC = i.transactionhash_from_bytes, _C = i.transactionhash_from_bech32, rC = i.transactionhash_from_hex, nC = i.genesisdelegatehash_from_bytes, oC = i.genesisdelegatehash_from_bech32, sC = i.genesisdelegatehash_from_hex, aC = i.genesishash_from_bytes, iC = i.genesishash_from_bech32, cC = i.genesishash_from_hex, dC = i.__wbg_auxiliarydatahash_free, lC = i.auxiliarydatahash_from_bytes, pC = i.auxiliarydatahash_to_bytes, uC = i.auxiliarydatahash_to_bech32, wC = i.auxiliarydatahash_from_bech32, fC = i.auxiliarydatahash_to_hex, gC = i.auxiliarydatahash_from_hex, bC = i.poolmetadatahash_from_bytes, hC = i.poolmetadatahash_from_bech32, yC = i.poolmetadatahash_from_hex, mC = i.vrfkeyhash_from_bytes, vC = i.vrfkeyhash_from_bech32, kC = i.vrfkeyhash_from_hex, xC = i.blockhash_from_bytes, jC = i.blockhash_from_bech32, SC = i.blockhash_from_hex, EC = i.datahash_from_bytes, zC = i.datahash_from_bech32, CC = i.datahash_from_hex, OC = i.scriptdatahash_from_bytes, LC = i.scriptdatahash_from_bech32, NC = i.scriptdatahash_from_hex, FC = i.vrfvkey_from_bytes, PC = i.vrfvkey_from_bech32, TC = i.vrfvkey_from_hex, RC = i.kesvkey_from_bytes, $C = i.kesvkey_from_bech32, DC = i.kesvkey_from_hex, UC = i.__wbg_kessignature_free, IC = i.kessignature_to_bytes, MC = i.kessignature_from_bytes, WC = i.__wbg_nonce_free, QC = i.nonce_to_bytes, VC = i.nonce_from_bytes, BC = i.nonce_to_hex, AC = i.nonce_from_hex, HC = i.nonce_to_json, YC = i.nonce_to_js_value, qC = i.nonce_from_json, XC = i.nonce_new_identity, KC = i.nonce_new_from_hash, ZC = i.nonce_get_hash, JC = i.__wbg_vrfcert_free, GC = i.vrfcert_to_bytes, tO = i.vrfcert_from_bytes, eO = i.vrfcert_to_hex, _O = i.vrfcert_from_hex, rO = i.vrfcert_to_json, nO = i.vrfcert_to_js_value, oO = i.vrfcert_from_json, sO = i.vrfcert_proof, aO = i.vrfcert_new, iO = i.vkeywitnesses_len, cO = i.vkeys_len, dO = i.publickeys_size, lO = i.vrfcert_output, pO = i.scripthash_to_hex, uO = i.genesisdelegatehash_to_hex, wO = i.genesishash_to_hex, fO = i.transactionhash_to_hex, gO = i.poolmetadatahash_to_hex, bO = i.vrfkeyhash_to_hex, hO = i.blockhash_to_hex, yO = i.datahash_to_hex, mO = i.scriptdatahash_to_hex, vO = i.vrfvkey_to_hex, kO = i.kesvkey_to_hex, xO = i.vkeywitness_vkey, jO = i.vkeywitness_signature, SO = i.scripthash_to_bech32, EO = i.genesisdelegatehash_to_bech32, zO = i.genesishash_to_bech32, CO = i.transactionhash_to_bech32, OO = i.poolmetadatahash_to_bech32, LO = i.vrfkeyhash_to_bech32, NO = i.blockhash_to_bech32, FO = i.datahash_to_bech32, PO = i.scriptdatahash_to_bech32, TO = i.vrfvkey_to_bech32, RO = i.kesvkey_to_bech32, $O = i.scripthash_to_bytes, DO = i.transactionhash_to_bytes, UO = i.genesisdelegatehash_to_bytes, IO = i.genesishash_to_bytes, MO = i.publickey_as_bytes, WO = i.poolmetadatahash_to_bytes, QO = i.vrfkeyhash_to_bytes, VO = i.blockhash_to_bytes, BO = i.datahash_to_bytes, AO = i.scriptdatahash_to_bytes, HO = i.vrfvkey_to_bytes, YO = i.kesvkey_to_bytes, qO = i.vkeywitnesses_new, XO = i.vkeys_new, KO = i.__wbg_scripthash_free, ZO = i.__wbg_genesisdelegatehash_free, JO = i.__wbg_genesishash_free, GO = i.__wbg_kesvkey_free, t7 = i.__wbg_poolmetadatahash_free, e7 = i.__wbg_transactionhash_free, _7 = i.__wbg_vrfkeyhash_free, r7 = i.__wbg_blockhash_free, n7 = i.__wbg_scriptdatahash_free, o7 = i.__wbg_datahash_free, s7 = i.__wbg_vrfvkey_free, a7 = i.__wbg_inputwithscriptwitness_free, i7 = i.inputwithscriptwitness_new_with_native_script_witness, c7 = i.inputwithscriptwitness_new_with_plutus_witness, d7 = i.inputwithscriptwitness_input, l7 = i.__wbg_inputswithscriptwitness_free, p7 = i.inputswithscriptwitness_new, u7 = i.inputswithscriptwitness_add, w7 = i.inputswithscriptwitness_get, f7 = i.inputswithscriptwitness_len, g7 = i.__wbg_plutusscriptsource_free, b7 = i.plutusscriptsource_new, h7 = i.plutusscriptsource_new_ref_input, y7 = i.plutusscriptsource_new_ref_input_with_lang_ver, m7 = i.__wbg_datumsource_free, v7 = i.datumsource_new, k7 = i.datumsource_new_ref_input, x7 = i.__wbg_plutuswitness_free, j7 = i.plutuswitness_new, S7 = i.plutuswitness_new_with_ref, E7 = i.plutuswitness_new_without_datum, z7 = i.plutuswitness_new_with_ref_without_datum, C7 = i.plutuswitness_script, O7 = i.plutuswitness_datum, L7 = i.plutuswitness_redeemer, N7 = i.__wbg_plutuswitnesses_free, F7 = i.plutuswitnesses_get, P7 = i.plutuswitnesses_add, T7 = i.__wbg_txinputsbuilder_free, R7 = i.txinputsbuilder_new, $7 = i.txinputsbuilder_add_key_input, D7 = i.txinputsbuilder_add_script_input, U7 = i.txinputsbuilder_add_native_script_input, I7 = i.txinputsbuilder_add_plutus_script_input, M7 = i.txinputsbuilder_add_bootstrap_input, W7 = i.txinputsbuilder_add_input, Q7 = i.txinputsbuilder_count_missing_input_scripts, V7 = i.txinputsbuilder_add_required_native_input_scripts, B7 = i.txinputsbuilder_add_required_plutus_input_scripts, A7 = i.txinputsbuilder_add_required_script_input_witnesses, H7 = i.txinputsbuilder_get_ref_inputs, Y7 = i.txinputsbuilder_get_native_input_scripts, q7 = i.txinputsbuilder_get_plutus_input_scripts, X7 = i.txinputsbuilder_len, K7 = i.txinputsbuilder_add_required_signer, Z7 = i.txinputsbuilder_add_required_signers, J7 = i.txinputsbuilder_total_value, G7 = i.txinputsbuilder_inputs, tL = i.txinputsbuilder_inputs_option, eL = i.__wbg_txbuilderconstants_free, _L = i.txbuilderconstants_plutus_default_cost_models, rL = i.txbuilderconstants_plutus_alonzo_cost_models, nL = i.plutuswitnesses_len, oL = i.txbuilderconstants_plutus_vasil_cost_models, sL = i.plutuswitnesses_new, aL = i.__wbg_metadatamap_free, iL = i.metadatamap_to_bytes, cL = i.metadatamap_from_bytes, dL = i.metadatamap_to_hex, lL = i.metadatamap_from_hex, pL = i.metadatamap_insert, uL = i.metadatamap_insert_str, wL = i.metadatamap_insert_i32, fL = i.metadatamap_get, gL = i.metadatamap_get_str, bL = i.metadatamap_get_i32, hL = i.metadatamap_has, yL = i.metadatamap_keys, mL = i.__wbg_metadatalist_free, vL = i.metadatalist_to_bytes, kL = i.metadatalist_from_bytes, xL = i.metadatalist_to_hex, jL = i.metadatalist_from_hex, SL = i.metadatalist_get, EL = i.metadatalist_add, zL = i.__wbg_transactionmetadatum_free, CL = i.transactionmetadatum_to_bytes, OL = i.transactionmetadatum_from_bytes, LL = i.transactionmetadatum_to_hex, NL = i.transactionmetadatum_from_hex, FL = i.transactionmetadatum_new_map, PL = i.transactionmetadatum_new_list, TL = i.transactionmetadatum_new_int, RL = i.transactionmetadatum_new_bytes, $L = i.transactionmetadatum_new_text, DL = i.transactionmetadatum_as_map, UL = i.transactionmetadatum_as_list, IL = i.transactionmetadatum_as_int, ML = i.transactionmetadatum_as_bytes, WL = i.transactionmetadatum_as_text, QL = i.__wbg_transactionmetadatumlabels_free, VL = i.transactionmetadatumlabels_to_bytes, BL = i.transactionmetadatumlabels_from_bytes, AL = i.transactionmetadatumlabels_to_hex, HL = i.transactionmetadatumlabels_from_hex, YL = i.transactionmetadatumlabels_get, qL = i.transactionmetadatumlabels_add, XL = i.__wbg_generaltransactionmetadata_free, KL = i.generaltransactionmetadata_to_bytes, ZL = i.generaltransactionmetadata_from_bytes, JL = i.generaltransactionmetadata_to_hex, GL = i.generaltransactionmetadata_from_hex, tN = i.generaltransactionmetadata_to_json, eN = i.generaltransactionmetadata_to_js_value, _N = i.generaltransactionmetadata_from_json, rN = i.generaltransactionmetadata_new, nN = i.generaltransactionmetadata_len, oN = i.generaltransactionmetadata_insert, sN = i.generaltransactionmetadata_get, aN = i.generaltransactionmetadata_keys, iN = i.__wbg_auxiliarydata_free, cN = i.auxiliarydata_to_bytes, dN = i.auxiliarydata_from_bytes, lN = i.auxiliarydata_to_hex, pN = i.auxiliarydata_from_hex, uN = i.auxiliarydata_to_json, wN = i.auxiliarydata_to_js_value, fN = i.auxiliarydata_from_json, gN = i.auxiliarydata_new, bN = i.auxiliarydata_metadata, hN = i.auxiliarydata_set_metadata, yN = i.auxiliarydata_native_scripts, mN = i.auxiliarydata_set_native_scripts, vN = i.auxiliarydata_plutus_scripts, kN = i.auxiliarydata_set_plutus_scripts, xN = i.auxiliarydata_prefer_alonzo_format, jN = i.auxiliarydata_set_prefer_alonzo_format, SN = i.encode_arbitrary_bytes_as_metadatum, EN = i.decode_arbitrary_bytes_from_metadatum, zN = i.encode_json_str_to_metadatum, CN = i.decode_metadatum_to_json_str, ON = i.__wbg_plutusscript_free, LN = i.plutusscript_to_bytes, NN = i.plutusscript_from_bytes, FN = i.plutusscript_to_hex, PN = i.plutusscript_from_hex, TN = i.plutusscript_new, RN = i.plutusscript_new_v2, $N = i.plutusscript_new_with_version, DN = i.plutusscript_bytes, UN = i.plutusscript_from_bytes_v2, IN = i.plutusscript_from_bytes_with_version, MN = i.plutusscript_from_hex_with_version, WN = i.plutusscript_hash, QN = i.plutusscript_language_version, VN = i.__wbg_plutusscripts_free, BN = i.plutusscripts_to_bytes, AN = i.plutusscripts_from_bytes, HN = i.plutusscripts_to_hex, YN = i.plutusscripts_from_hex, qN = i.plutusscripts_to_json, XN = i.plutusscripts_to_js_value, KN = i.plutusscripts_from_json, ZN = i.plutusscripts_new, JN = i.plutusscripts_get, GN = i.plutusscripts_add, tF = i.__wbg_constrplutusdata_free, eF = i.constrplutusdata_to_bytes, _F = i.constrplutusdata_from_bytes, rF = i.constrplutusdata_to_hex, nF = i.constrplutusdata_from_hex, oF = i.constrplutusdata_alternative, sF = i.constrplutusdata_data, aF = i.constrplutusdata_new, iF = i.__wbg_costmodel_free, cF = i.costmodel_to_bytes, dF = i.costmodel_from_bytes, lF = i.costmodel_to_hex, pF = i.costmodel_from_hex, uF = i.costmodel_to_json, wF = i.costmodel_to_js_value, fF = i.costmodel_from_json, gF = i.costmodel_new, bF = i.costmodel_set, hF = i.costmodel_get, yF = i.__wbg_costmdls_free, mF = i.costmdls_to_bytes, vF = i.costmdls_from_bytes, kF = i.costmdls_to_hex, xF = i.costmdls_from_hex, jF = i.costmdls_to_json, SF = i.costmdls_to_js_value, EF = i.costmdls_from_json, zF = i.costmdls_new, CF = i.costmdls_len, OF = i.costmdls_insert, LF = i.costmdls_get, NF = i.costmdls_keys, FF = i.costmdls_retain_language_versions, PF = i.__wbg_exunitprices_free, TF = i.exunitprices_to_bytes, RF = i.exunitprices_from_bytes, $F = i.exunitprices_to_hex, DF = i.exunitprices_from_hex, UF = i.exunitprices_to_json, IF = i.exunitprices_to_js_value, MF = i.exunitprices_from_json, WF = i.exunitprices_mem_price, QF = i.exunitprices_step_price, VF = i.exunitprices_new, BF = i.__wbg_exunits_free, AF = i.exunits_to_bytes, HF = i.exunits_from_bytes, YF = i.exunits_to_hex, qF = i.exunits_from_hex, XF = i.exunits_to_json, KF = i.exunits_to_js_value, ZF = i.exunits_from_json, JF = i.exunits_mem, GF = i.exunits_steps, tP = i.exunits_new, eP = i.__wbg_language_free, _P = i.language_to_bytes, rP = i.language_from_bytes, nP = i.language_to_hex, oP = i.language_from_hex, sP = i.language_to_json, aP = i.language_to_js_value, iP = i.language_from_json, cP = i.language_new_plutus_v1, dP = i.language_new_plutus_v2, lP = i.language_kind, pP = i.__wbg_languages_free, uP = i.languages_new, wP = i.languages_get, fP = i.languages_add, gP = i.languages_list, bP = i.__wbg_plutusmap_free, hP = i.plutusmap_to_bytes, yP = i.plutusmap_from_bytes, mP = i.plutusmap_to_hex, vP = i.plutusmap_from_hex, kP = i.plutusmap_insert, xP = i.plutusmap_get, jP = i.plutusmap_keys, SP = i.__wbg_plutusdata_free, EP = i.plutusdata_to_bytes, zP = i.plutusdata_from_bytes, CP = i.plutusdata_to_hex, OP = i.plutusdata_from_hex, LP = i.plutusdata_new_constr_plutus_data, NP = i.plutusdata_new_empty_constr_plutus_data, FP = i.plutusdata_new_single_value_constr_plutus_data, PP = i.plutusdata_new_map, TP = i.plutusdata_new_list, RP = i.plutusdata_new_integer, $P = i.plutusdata_new_bytes, DP = i.plutusdata_kind, UP = i.plutusdata_as_constr_plutus_data, IP = i.plutusdata_as_map, MP = i.plutusdata_as_list, WP = i.plutusdata_as_integer, QP = i.plutusdata_as_bytes, VP = i.plutusdata_from_address, BP = i.__wbg_plutuslist_free, AP = i.plutuslist_to_bytes, HP = i.plutuslist_from_bytes, YP = i.plutuslist_to_hex, qP = i.plutuslist_from_hex, XP = i.plutuslist_new, KP = i.plutuslist_get, ZP = i.plutuslist_add, JP = i.__wbg_redeemer_free, GP = i.redeemer_to_bytes, tT = i.redeemer_from_bytes, eT = i.redeemer_to_hex, _T = i.redeemer_from_hex, rT = i.redeemer_to_json, nT = i.redeemer_to_js_value, oT = i.redeemer_from_json, sT = i.redeemer_tag, aT = i.redeemer_index, iT = i.redeemer_data, cT = i.redeemer_ex_units, dT = i.redeemer_new, lT = i.__wbg_redeemertag_free, pT = i.redeemertag_to_bytes, uT = i.redeemertag_from_bytes, wT = i.redeemertag_to_hex, fT = i.redeemertag_from_hex, gT = i.redeemertag_to_json, bT = i.redeemertag_to_js_value, hT = i.redeemertag_from_json, yT = i.redeemertag_new_spend, mT = i.redeemertag_new_mint, vT = i.redeemertag_new_cert, kT = i.redeemertag_new_reward, xT = i.redeemertag_kind, jT = i.__wbg_redeemers_free, ST = i.redeemers_to_bytes, ET = i.redeemers_from_bytes, zT = i.redeemers_to_hex, CT = i.redeemers_from_hex, OT = i.redeemers_to_json, LT = i.redeemers_to_js_value, NT = i.redeemers_from_json, FT = i.redeemers_get, PT = i.redeemers_add, TT = i.redeemers_total_ex_units, RT = i.__wbg_strings_free, $T = i.strings_get, DT = i.strings_add, UT = i.encode_json_str_to_plutus_datum, IT = i.decode_plutus_datum_to_json_str, MT = i.transactionmetadatumlabels_len, WT = i.metadatamap_len, QT = i.plutusscripts_len, VT = i.metadatalist_len, BT = i.costmodel_len, AT = i.languages_len, HT = i.plutusmap_len, YT = i.transactionmetadatum_kind, qT = i.plutuslist_len, XT = i.redeemers_len, KT = i.strings_len, ZT = i.plutusdata_from_json, JT = i.plutusdata_to_json, GT = i.plutusmap_new, tR = i.metadatamap_new, eR = i.transactionmetadatumlabels_new, _R = i.strings_new, rR = i.metadatalist_new, nR = i.redeemers_new, oR = i.__wbg_fixedtransaction_free, sR = i.fixedtransaction_to_bytes, aR = i.fixedtransaction_from_bytes, iR = i.fixedtransaction_to_hex, cR = i.fixedtransaction_from_hex, dR = i.fixedtransaction_new, lR = i.fixedtransaction_new_with_auxiliary, pR = i.fixedtransaction_body, uR = i.fixedtransaction_raw_body, wR = i.fixedtransaction_set_body, fR = i.fixedtransaction_set_witness_set, gR = i.fixedtransaction_witness_set, bR = i.fixedtransaction_raw_witness_set, hR = i.fixedtransaction_set_is_valid, yR = i.fixedtransaction_is_valid, mR = i.fixedtransaction_set_auxiliary_data, vR = i.fixedtransaction_auxiliary_data, kR = i.fixedtransaction_raw_auxiliary_data, xR = i.__wbg_transactionbuilderconfig_free, jR = i.__wbg_transactionbuilderconfigbuilder_free, SR = i.transactionbuilderconfigbuilder_new, ER = i.transactionbuilderconfigbuilder_fee_algo, zR = i.transactionbuilderconfigbuilder_coins_per_utxo_word, CR = i.transactionbuilderconfigbuilder_coins_per_utxo_byte, OR = i.transactionbuilderconfigbuilder_ex_unit_prices, LR = i.transactionbuilderconfigbuilder_pool_deposit, NR = i.transactionbuilderconfigbuilder_key_deposit, FR = i.transactionbuilderconfigbuilder_max_value_size, PR = i.transactionbuilderconfigbuilder_max_tx_size, TR = i.transactionbuilderconfigbuilder_prefer_pure_change, RR = i.transactionbuilderconfigbuilder_build, $R = i.__wbg_transactionbuilder_free, DR = i.transactionbuilder_add_inputs_from, UR = i.transactionbuilder_set_inputs, IR = i.transactionbuilder_set_collateral, MR = i.transactionbuilder_set_collateral_return, WR = i.transactionbuilder_set_collateral_return_and_total, QR = i.transactionbuilder_set_total_collateral, VR = i.transactionbuilder_set_total_collateral_and_return, BR = i.transactionbuilder_add_reference_input, AR = i.transactionbuilder_add_key_input, HR = i.transactionbuilder_add_script_input, YR = i.transactionbuilder_add_native_script_input, qR = i.transactionbuilder_add_plutus_script_input, XR = i.transactionbuilder_add_bootstrap_input, KR = i.transactionbuilder_add_input, ZR = i.transactionbuilder_count_missing_input_scripts, JR = i.transactionbuilder_add_required_native_input_scripts, GR = i.transactionbuilder_add_required_plutus_input_scripts, t$ = i.transactionbuilder_get_native_input_scripts, e$ = i.transactionbuilder_get_plutus_input_scripts, _$ = i.transactionbuilder_fee_for_input, r$ = i.transactionbuilder_add_output, n$ = i.transactionbuilder_fee_for_output, o$ = i.transactionbuilder_set_fee, s$ = i.transactionbuilder_set_ttl, a$ = i.transactionbuilder_set_ttl_bignum, i$ = i.transactionbuilder_set_validity_start_interval, c$ = i.transactionbuilder_set_validity_start_interval_bignum, d$ = i.transactionbuilder_set_certs, l$ = i.transactionbuilder_set_withdrawals, p$ = i.transactionbuilder_get_auxiliary_data, u$ = i.transactionbuilder_set_auxiliary_data, w$ = i.transactionbuilder_set_metadata, f$ = i.transactionbuilder_add_metadatum, g$ = i.transactionbuilder_add_json_metadatum, b$ = i.transactionbuilder_add_json_metadatum_with_schema, h$ = i.transactionbuilder_set_mint_builder, y$ = i.transactionbuilder_get_mint_builder, m$ = i.transactionbuilder_set_mint, v$ = i.transactionbuilder_get_mint, k$ = i.transactionbuilder_get_mint_scripts, x$ = i.transactionbuilder_set_mint_asset, j$ = i.transactionbuilder_add_mint_asset, S$ = i.transactionbuilder_add_mint_asset_and_output, E$ = i.transactionbuilder_add_mint_asset_and_output_min_required_coin, z$ = i.transactionbuilder_new, C$ = i.transactionbuilder_get_reference_inputs, O$ = i.transactionbuilder_get_explicit_input, L$ = i.transactionbuilder_get_implicit_input, N$ = i.transactionbuilder_get_total_input, F$ = i.transactionbuilder_get_total_output, P$ = i.transactionbuilder_get_explicit_output, T$ = i.transactionbuilder_get_deposit, R$ = i.transactionbuilder_get_fee_if_set, $$ = i.transactionbuilder_add_change_if_needed, D$ = i.transactionbuilder_add_change_if_needed_with_datum, U$ = i.transactionbuilder_calc_script_data_hash, I$ = i.transactionbuilder_set_script_data_hash, M$ = i.transactionbuilder_remove_script_data_hash, W$ = i.transactionbuilder_add_required_signer, Q$ = i.transactionbuilder_full_size, V$ = i.transactionbuilder_output_sizes, B$ = i.transactionbuilder_build, A$ = i.transactionbuilder_build_tx, H$ = i.transactionbuilder_build_tx_unsafe, Y$ = i.transactionbuilder_min_fee, q$ = i.__wbg_linearfee_free, X$ = i.linearfee_constant, K$ = i.linearfee_coefficient, Z$ = i.linearfee_new, J$ = i.min_fee, G$ = i.calculate_ex_units_ceil_cost, tD = i.min_script_fee, eD = i.__wbg_transactionbatchlist_free, _D = i.transactionbatchlist_get, rD = i.__wbg_transactionbatch_free, nD = i.transactionbatch_len, oD = i.transactionbatch_get, sD = i.create_send_all, aD = i.transactionbatchlist_len, iD = i.__wbg_networkinfo_free, cD = i.networkinfo_new, dD = i.networkinfo_network_id, lD = i.networkinfo_protocol_magic, pD = i.networkinfo_testnet_preview, uD = i.networkinfo_testnet_preprod, wD = i.networkinfo_testnet, fD = i.networkinfo_mainnet, gD = i.__wbg_stakecredential_free, bD = i.stakecredential_from_keyhash, hD = i.stakecredential_from_scripthash, yD = i.stakecredential_to_keyhash, mD = i.stakecredential_to_scripthash, vD = i.stakecredential_kind, kD = i.stakecredential_to_bytes, xD = i.stakecredential_from_bytes, jD = i.stakecredential_to_hex, SD = i.stakecredential_from_hex, ED = i.stakecredential_to_json, zD = i.stakecredential_to_js_value, CD = i.stakecredential_from_json, OD = i.__wbg_byronaddress_free, LD = i.byronaddress_to_base58, ND = i.byronaddress_to_bytes, FD = i.byronaddress_from_bytes, PD = i.byronaddress_byron_protocol_magic, TD = i.byronaddress_attributes, RD = i.byronaddress_network_id, $D = i.byronaddress_from_base58, DD = i.byronaddress_icarus_from_key, UD = i.byronaddress_is_valid, ID = i.byronaddress_to_address, MD = i.byronaddress_from_address, WD = i.__wbg_address_free, QD = i.address_from_bytes, VD = i.address_to_json, BD = i.address_to_js_value, AD = i.address_from_json, HD = i.address_to_hex, YD = i.address_from_hex, qD = i.address_to_bytes, XD = i.address_to_bech32, KD = i.address_from_bech32, ZD = i.address_network_id, JD = i.__wbg_baseaddress_free, GD = i.baseaddress_new, tU = i.baseaddress_payment_cred, eU = i.baseaddress_stake_cred, _U = i.baseaddress_to_address, rU = i.baseaddress_from_address, nU = i.__wbg_enterpriseaddress_free, oU = i.enterpriseaddress_new, sU = i.enterpriseaddress_to_address, aU = i.enterpriseaddress_from_address, iU = i.rewardaddress_to_address, cU = i.rewardaddress_from_address, dU = i.__wbg_pointer_free, lU = i.pointer_new, pU = i.pointer_new_pointer, uU = i.pointer_slot, wU = i.pointer_tx_index, fU = i.pointer_cert_index, gU = i.pointer_slot_bignum, bU = i.pointer_tx_index_bignum, hU = i.pointer_cert_index_bignum, yU = i.__wbg_pointeraddress_free, mU = i.pointeraddress_new, vU = i.pointeraddress_payment_cred, kU = i.pointeraddress_stake_pointer, xU = i.pointeraddress_to_address, jU = i.pointeraddress_from_address, SU = i.__wbg_mintwitness_free, EU = i.mintwitness_new_native_script, zU = i.mintwitness_new_plutus_script, CU = i.__wbg_mintbuilder_free, OU = i.mintbuilder_new, LU = i.mintbuilder_add_asset, NU = i.mintbuilder_set_asset, FU = i.mintbuilder_build, PU = i.mintbuilder_get_native_scripts, TU = i.mintbuilder_get_plutus_witnesses, RU = i.mintbuilder_get_ref_inputs, $U = i.mintbuilder_get_redeeemers, DU = i.mintbuilder_has_plutus_scripts, UU = i.mintbuilder_has_native_scripts, IU = i.enterpriseaddress_payment_cred, MU = i.rewardaddress_payment_cred, WU = i.rewardaddress_new, QU = i.__wbg_rewardaddress_free, VU = i.__wbindgen_malloc, BU = i.__wbindgen_realloc, AU = i.__wbindgen_add_to_stack_pointer, HU = i.__wbindgen_free, YU = i.__wbindgen_exn_store, qU = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_address_free: WD,
    __wbg_assetname_free: Vj,
    __wbg_assetnames_free: Gj,
    __wbg_assets_free: l3,
    __wbg_auxiliarydata_free: iN,
    __wbg_auxiliarydatahash_free: dC,
    __wbg_auxiliarydataset_free: C2,
    __wbg_baseaddress_free: JD,
    __wbg_bigint_free: p8,
    __wbg_bignum_free: oE,
    __wbg_bip32privatekey_free: V8,
    __wbg_bip32publickey_free: nz,
    __wbg_block_free: T2,
    __wbg_blockhash_free: r7,
    __wbg_bootstrapwitness_free: p9,
    __wbg_bootstrapwitnesses_free: S9,
    __wbg_byronaddress_free: OD,
    __wbg_certificate_free: Pm,
    __wbg_certificates_free: Jg,
    __wbg_constrplutusdata_free: tF,
    __wbg_costmdls_free: yF,
    __wbg_costmodel_free: iF,
    __wbg_datacost_free: qg,
    __wbg_datahash_free: o7,
    __wbg_datumsource_free: m7,
    __wbg_dnsrecordaoraaaa_free: Gv,
    __wbg_dnsrecordsrv_free: Y5,
    __wbg_ed25519keyhash_free: A9,
    __wbg_ed25519keyhashes_free: ny,
    __wbg_ed25519signature_free: T9,
    __wbg_enterpriseaddress_free: nU,
    __wbg_exunitprices_free: PF,
    __wbg_exunits_free: BF,
    __wbg_fixedtransaction_free: oR,
    __wbg_generaltransactionmetadata_free: XL,
    __wbg_genesisdelegatehash_free: ZO,
    __wbg_genesishash_free: JO,
    __wbg_genesishashes_free: y6,
    __wbg_genesiskeydelegation_free: lm,
    __wbg_header_free: q2,
    __wbg_headerbody_free: hj,
    __wbg_inputswithscriptwitness_free: l7,
    __wbg_inputwithscriptwitness_free: a7,
    __wbg_int_free: qE,
    __wbg_ipv4_free: zv,
    __wbg_ipv6_free: Dv,
    __wbg_kessignature_free: UC,
    __wbg_kesvkey_free: GO,
    __wbg_language_free: eP,
    __wbg_languages_free: pP,
    __wbg_legacydaedalusprivatekey_free: W9,
    __wbg_linearfee_free: q$,
    __wbg_metadatalist_free: mL,
    __wbg_metadatamap_free: aL,
    __wbg_mint_free: V3,
    __wbg_mintassets_free: U3,
    __wbg_mintbuilder_free: CU,
    __wbg_mintsassets_free: D3,
    __wbg_mintwitness_free: SU,
    __wbg_mirtostakecredentials_free: _v,
    __wbg_moveinstantaneousreward_free: uv,
    __wbg_moveinstantaneousrewardscert_free: xm,
    __wbg_multiasset_free: x3,
    __wbg_multihostname_free: D1,
    __wbg_nativescript_free: $4,
    __wbg_nativescripts_free: o6,
    __wbg_networkid_free: n5,
    __wbg_networkinfo_free: iD,
    __wbg_nonce_free: WC,
    __wbg_operationalcert_free: oj,
    __wbg_outputdatum_free: N4,
    __wbg_plutusdata_free: SP,
    __wbg_plutuslist_free: BP,
    __wbg_plutusmap_free: bP,
    __wbg_plutusscript_free: ON,
    __wbg_plutusscripts_free: VN,
    __wbg_plutusscriptsource_free: g7,
    __wbg_plutuswitness_free: x7,
    __wbg_plutuswitnesses_free: N7,
    __wbg_pointer_free: dU,
    __wbg_pointeraddress_free: yU,
    __wbg_poolmetadata_free: ik,
    __wbg_poolmetadatahash_free: t7,
    __wbg_poolparams_free: Ey,
    __wbg_poolregistration_free: By,
    __wbg_poolretirement_free: tm,
    __wbg_privatekey_free: wz,
    __wbg_proposedprotocolparameterupdates_free: I6,
    __wbg_protocolparamupdate_free: ax,
    __wbg_protocolversion_free: K6,
    __wbg_publickey_free: Ez,
    __wbg_publickeys_free: L9,
    __wbg_redeemer_free: JP,
    __wbg_redeemers_free: jT,
    __wbg_redeemertag_free: lT,
    __wbg_relay_free: Y1,
    __wbg_relays_free: gy,
    __wbg_rewardaddress_free: QU,
    __wbg_rewardaddresses_free: Ok,
    __wbg_scriptall_free: z0,
    __wbg_scriptany_free: q5,
    __wbg_scriptdatahash_free: n7,
    __wbg_scripthash_free: KO,
    __wbg_scripthashes_free: O6,
    __wbg_scriptnofk_free: V0,
    __wbg_scriptpubkey_free: b0,
    __wbg_scriptref_free: b4,
    __wbg_singlehostaddr_free: f1,
    __wbg_singlehostname_free: z1,
    __wbg_stakecredential_free: gD,
    __wbg_stakecredentials_free: yk,
    __wbg_stakedelegation_free: qh,
    __wbg_stakederegistration_free: Uh,
    __wbg_stakeregistration_free: hS,
    __wbg_strings_free: RT,
    __wbg_timelockexpiry_free: o4,
    __wbg_timelockstart_free: Z5,
    __wbg_transaction_free: ug,
    __wbg_transactionbatch_free: rD,
    __wbg_transactionbatchlist_free: eD,
    __wbg_transactionbodies_free: i2,
    __wbg_transactionbody_free: cb,
    __wbg_transactionbuilder_free: $R,
    __wbg_transactionbuilderconfig_free: xR,
    __wbg_transactionbuilderconfigbuilder_free: jR,
    __wbg_transactionhash_free: e7,
    __wbg_transactioninput_free: th,
    __wbg_transactioninputs_free: zg,
    __wbg_transactionmetadatum_free: zL,
    __wbg_transactionmetadatumlabels_free: QL,
    __wbg_transactionoutput_free: lh,
    __wbg_transactionoutputamountbuilder_free: PS,
    __wbg_transactionoutputbuilder_free: ES,
    __wbg_transactionoutputs_free: Ug,
    __wbg_transactionunspentoutput_free: MS,
    __wbg_transactionunspentoutputs_free: ZS,
    __wbg_transactionwitnessset_free: Kk,
    __wbg_transactionwitnesssets_free: h2,
    __wbg_txbuilderconstants_free: eL,
    __wbg_txinputsbuilder_free: T7,
    __wbg_unitinterval_free: f5,
    __wbg_update_free: i6,
    __wbg_url_free: H5,
    __wbg_value_free: zE,
    __wbg_vkey_free: Tz,
    __wbg_vkeys_free: Bz,
    __wbg_vkeywitness_free: Yz,
    __wbg_vkeywitnesses_free: _9,
    __wbg_vrfcert_free: JC,
    __wbg_vrfkeyhash_free: _7,
    __wbg_vrfvkey_free: s7,
    __wbg_withdrawals_free: Ik,
    __wbindgen_add_to_stack_pointer: AU,
    __wbindgen_exn_store: YU,
    __wbindgen_free: HU,
    __wbindgen_malloc: VU,
    __wbindgen_realloc: BU,
    address_from_bech32: KD,
    address_from_bytes: QD,
    address_from_hex: YD,
    address_from_json: AD,
    address_network_id: ZD,
    address_to_bech32: XD,
    address_to_bytes: qD,
    address_to_hex: HD,
    address_to_js_value: BD,
    address_to_json: VD,
    assetname_from_bytes: Aj,
    assetname_from_hex: Yj,
    assetname_from_json: Kj,
    assetname_name: Jj,
    assetname_new: Zj,
    assetname_to_bytes: Bj,
    assetname_to_hex: Hj,
    assetname_to_js_value: Xj,
    assetname_to_json: qj,
    assetnames_add: d3,
    assetnames_from_bytes: e3,
    assetnames_from_hex: r3,
    assetnames_from_json: s3,
    assetnames_get: c3,
    assetnames_len: i3,
    assetnames_new: a3,
    assetnames_to_bytes: t3,
    assetnames_to_hex: _3,
    assetnames_to_js_value: o3,
    assetnames_to_json: n3,
    assets_from_bytes: u3,
    assets_from_hex: f3,
    assets_from_json: h3,
    assets_get: v3,
    assets_insert: m3,
    assets_keys: k3,
    assets_len: F5,
    assets_new: y3,
    assets_to_bytes: p3,
    assets_to_hex: w3,
    assets_to_js_value: b3,
    assets_to_json: g3,
    auxiliarydata_from_bytes: dN,
    auxiliarydata_from_hex: pN,
    auxiliarydata_from_json: fN,
    auxiliarydata_metadata: bN,
    auxiliarydata_native_scripts: yN,
    auxiliarydata_new: gN,
    auxiliarydata_plutus_scripts: vN,
    auxiliarydata_prefer_alonzo_format: xN,
    auxiliarydata_set_metadata: hN,
    auxiliarydata_set_native_scripts: mN,
    auxiliarydata_set_plutus_scripts: kN,
    auxiliarydata_set_prefer_alonzo_format: jN,
    auxiliarydata_to_bytes: cN,
    auxiliarydata_to_hex: lN,
    auxiliarydata_to_js_value: wN,
    auxiliarydata_to_json: uN,
    auxiliarydatahash_from_bech32: wC,
    auxiliarydatahash_from_bytes: lC,
    auxiliarydatahash_from_hex: gC,
    auxiliarydatahash_to_bech32: uC,
    auxiliarydatahash_to_bytes: pC,
    auxiliarydatahash_to_hex: fC,
    auxiliarydataset_get: F2,
    auxiliarydataset_indices: P2,
    auxiliarydataset_insert: N2,
    auxiliarydataset_len: L2,
    auxiliarydataset_new: O2,
    baseaddress_from_address: rU,
    baseaddress_new: GD,
    baseaddress_payment_cred: tU,
    baseaddress_stake_cred: eU,
    baseaddress_to_address: _U,
    bigint_add: S8,
    bigint_as_int: k8,
    bigint_as_u64: v8,
    bigint_div_ceil: O8,
    bigint_from_bytes: w8,
    bigint_from_hex: g8,
    bigint_from_json: y8,
    bigint_from_str: x8,
    bigint_increment: C8,
    bigint_is_zero: m8,
    bigint_mul: E8,
    bigint_one: z8,
    bigint_to_bytes: u8,
    bigint_to_hex: f8,
    bigint_to_js_value: h8,
    bigint_to_json: b8,
    bigint_to_str: j8,
    bignum_checked_add: mE,
    bignum_checked_mul: yE,
    bignum_checked_sub: vE,
    bignum_clamped_sub: kE,
    bignum_compare: xE,
    bignum_div_floor: hE,
    bignum_from_bytes: aE,
    bignum_from_hex: cE,
    bignum_from_json: pE,
    bignum_from_str: uE,
    bignum_is_zero: bE,
    bignum_less_than: jE,
    bignum_max: EE,
    bignum_max_value: SE,
    bignum_one: gE,
    bignum_to_bytes: sE,
    bignum_to_hex: iE,
    bignum_to_js_value: lE,
    bignum_to_json: dE,
    bignum_to_str: wE,
    bignum_zero: fE,
    bip32privatekey_as_bytes: Z8,
    bip32privatekey_chaincode: ez,
    bip32privatekey_derive: B8,
    bip32privatekey_from_128_xprv: A8,
    bip32privatekey_from_bech32: J8,
    bip32privatekey_from_bip39_entropy: tz,
    bip32privatekey_from_bytes: K8,
    bip32privatekey_from_hex: rz,
    bip32privatekey_generate_ed25519_bip32: Y8,
    bip32privatekey_to_128_xprv: H8,
    bip32privatekey_to_bech32: G8,
    bip32privatekey_to_hex: _z,
    bip32privatekey_to_public: X8,
    bip32privatekey_to_raw_key: q8,
    bip32publickey_as_bytes: iz,
    bip32publickey_chaincode: lz,
    bip32publickey_derive: oz,
    bip32publickey_from_bech32: cz,
    bip32publickey_from_bytes: az,
    bip32publickey_from_hex: uz,
    bip32publickey_to_bech32: dz,
    bip32publickey_to_hex: pz,
    bip32publickey_to_raw_key: sz,
    block_auxiliary_data_set: A2,
    block_from_bytes: $2,
    block_from_hex: U2,
    block_from_json: W2,
    block_header: Q2,
    block_invalid_transactions: H2,
    block_new: Y2,
    block_to_bytes: R2,
    block_to_hex: D2,
    block_to_js_value: M2,
    block_to_json: I2,
    block_transaction_bodies: V2,
    block_transaction_witness_sets: B2,
    blockhash_from_bech32: jC,
    blockhash_from_bytes: xC,
    blockhash_from_hex: SC,
    blockhash_to_bech32: NO,
    blockhash_to_bytes: VO,
    blockhash_to_hex: hO,
    bootstrapwitness_attributes: x9,
    bootstrapwitness_chain_code: k9,
    bootstrapwitness_from_bytes: w9,
    bootstrapwitness_from_hex: g9,
    bootstrapwitness_from_json: y9,
    bootstrapwitness_new: j9,
    bootstrapwitness_signature: v9,
    bootstrapwitness_to_bytes: u9,
    bootstrapwitness_to_hex: f9,
    bootstrapwitness_to_js_value: h9,
    bootstrapwitness_to_json: b9,
    bootstrapwitness_vkey: m9,
    bootstrapwitnesses_add: O9,
    bootstrapwitnesses_get: C9,
    bootstrapwitnesses_len: z9,
    bootstrapwitnesses_new: E9,
    byronaddress_attributes: TD,
    byronaddress_byron_protocol_magic: PD,
    byronaddress_from_address: MD,
    byronaddress_from_base58: $D,
    byronaddress_from_bytes: FD,
    byronaddress_icarus_from_key: DD,
    byronaddress_is_valid: UD,
    byronaddress_network_id: RD,
    byronaddress_to_address: ID,
    byronaddress_to_base58: LD,
    byronaddress_to_bytes: ND,
    calculate_ex_units_ceil_cost: G$,
    certificate_as_genesis_key_delegation: tv,
    certificate_as_move_instantaneous_rewards_cert: ev,
    certificate_as_pool_registration: Jm,
    certificate_as_pool_retirement: Gm,
    certificate_as_stake_delegation: Zm,
    certificate_as_stake_deregistration: Km,
    certificate_as_stake_registration: Xm,
    certificate_from_bytes: Rm,
    certificate_from_hex: Dm,
    certificate_from_json: Mm,
    certificate_kind: qm,
    certificate_new_genesis_key_delegation: Hm,
    certificate_new_move_instantaneous_rewards_cert: Ym,
    certificate_new_pool_registration: Bm,
    certificate_new_pool_retirement: Am,
    certificate_new_stake_delegation: Vm,
    certificate_new_stake_deregistration: Qm,
    certificate_new_stake_registration: Wm,
    certificate_to_bytes: Tm,
    certificate_to_hex: $m,
    certificate_to_js_value: Im,
    certificate_to_json: Um,
    certificates_add: ib,
    certificates_from_bytes: tb,
    certificates_from_hex: _b,
    certificates_from_json: ob,
    certificates_get: ab,
    certificates_len: N5,
    certificates_new: sb,
    certificates_to_bytes: Gg,
    certificates_to_hex: eb,
    certificates_to_js_value: nb,
    certificates_to_json: rb,
    constrplutusdata_alternative: oF,
    constrplutusdata_data: sF,
    constrplutusdata_from_bytes: _F,
    constrplutusdata_from_hex: nF,
    constrplutusdata_new: aF,
    constrplutusdata_to_bytes: eF,
    constrplutusdata_to_hex: rF,
    costmdls_from_bytes: vF,
    costmdls_from_hex: xF,
    costmdls_from_json: EF,
    costmdls_get: LF,
    costmdls_insert: OF,
    costmdls_keys: NF,
    costmdls_len: CF,
    costmdls_new: zF,
    costmdls_retain_language_versions: FF,
    costmdls_to_bytes: mF,
    costmdls_to_hex: kF,
    costmdls_to_js_value: SF,
    costmdls_to_json: jF,
    costmodel_from_bytes: dF,
    costmodel_from_hex: pF,
    costmodel_from_json: fF,
    costmodel_get: hF,
    costmodel_len: BT,
    costmodel_new: gF,
    costmodel_set: bF,
    costmodel_to_bytes: cF,
    costmodel_to_hex: lF,
    costmodel_to_js_value: wF,
    costmodel_to_json: uF,
    create_send_all: sD,
    datacost_coins_per_byte: Zg,
    datacost_new_coins_per_byte: Kg,
    datacost_new_coins_per_word: Xg,
    datahash_from_bech32: zC,
    datahash_from_bytes: EC,
    datahash_from_hex: CC,
    datahash_to_bech32: FO,
    datahash_to_bytes: BO,
    datahash_to_hex: yO,
    datumsource_new: v7,
    datumsource_new_ref_input: k7,
    decode_arbitrary_bytes_from_metadatum: EN,
    decode_metadatum_to_json_str: CN,
    decode_plutus_datum_to_json_str: IT,
    decrypt_with_password: SS,
    dnsrecordaoraaaa_from_bytes: e1,
    dnsrecordaoraaaa_from_hex: r1,
    dnsrecordaoraaaa_from_json: s1,
    dnsrecordaoraaaa_new: a1,
    dnsrecordaoraaaa_record: i1,
    dnsrecordaoraaaa_to_bytes: t1,
    dnsrecordaoraaaa_to_hex: _1,
    dnsrecordaoraaaa_to_js_value: o1,
    dnsrecordaoraaaa_to_json: n1,
    dnsrecordsrv_from_bytes: d1,
    dnsrecordsrv_from_hex: p1,
    dnsrecordsrv_from_json: u1,
    dnsrecordsrv_new: w1,
    dnsrecordsrv_record: V5,
    dnsrecordsrv_to_bytes: c1,
    dnsrecordsrv_to_hex: l1,
    dnsrecordsrv_to_js_value: A5,
    dnsrecordsrv_to_json: xS,
    ed25519keyhash_from_bech32: X9,
    ed25519keyhash_from_bytes: H9,
    ed25519keyhash_from_hex: Z9,
    ed25519keyhash_to_bech32: q9,
    ed25519keyhash_to_bytes: Y9,
    ed25519keyhash_to_hex: K9,
    ed25519keyhashes_add: wy,
    ed25519keyhashes_from_bytes: sy,
    ed25519keyhashes_from_hex: iy,
    ed25519keyhashes_from_json: ly,
    ed25519keyhashes_get: uy,
    ed25519keyhashes_len: h5,
    ed25519keyhashes_new: py,
    ed25519keyhashes_to_bytes: oy,
    ed25519keyhashes_to_hex: ay,
    ed25519keyhashes_to_js_value: dy,
    ed25519keyhashes_to_json: cy,
    ed25519keyhashes_to_option: fy,
    ed25519signature_from_bech32: U9,
    ed25519signature_from_bytes: M9,
    ed25519signature_from_hex: I9,
    ed25519signature_to_bech32: $9,
    ed25519signature_to_bytes: R9,
    ed25519signature_to_hex: D9,
    encode_arbitrary_bytes_as_metadatum: SN,
    encode_json_str_to_metadatum: zN,
    encode_json_str_to_native_script: W8,
    encode_json_str_to_plutus_datum: UT,
    encrypt_with_password: jS,
    enterpriseaddress_from_address: aU,
    enterpriseaddress_new: oU,
    enterpriseaddress_payment_cred: IU,
    enterpriseaddress_to_address: sU,
    exunitprices_from_bytes: RF,
    exunitprices_from_hex: DF,
    exunitprices_from_json: MF,
    exunitprices_mem_price: WF,
    exunitprices_new: VF,
    exunitprices_step_price: QF,
    exunitprices_to_bytes: TF,
    exunitprices_to_hex: $F,
    exunitprices_to_js_value: IF,
    exunitprices_to_json: UF,
    exunits_from_bytes: HF,
    exunits_from_hex: qF,
    exunits_from_json: ZF,
    exunits_mem: JF,
    exunits_new: tP,
    exunits_steps: GF,
    exunits_to_bytes: AF,
    exunits_to_hex: YF,
    exunits_to_js_value: KF,
    exunits_to_json: XF,
    fixedtransaction_auxiliary_data: vR,
    fixedtransaction_body: pR,
    fixedtransaction_from_bytes: aR,
    fixedtransaction_from_hex: cR,
    fixedtransaction_is_valid: yR,
    fixedtransaction_new: dR,
    fixedtransaction_new_with_auxiliary: lR,
    fixedtransaction_raw_auxiliary_data: kR,
    fixedtransaction_raw_body: uR,
    fixedtransaction_raw_witness_set: bR,
    fixedtransaction_set_auxiliary_data: mR,
    fixedtransaction_set_body: wR,
    fixedtransaction_set_is_valid: hR,
    fixedtransaction_set_witness_set: fR,
    fixedtransaction_to_bytes: sR,
    fixedtransaction_to_hex: iR,
    fixedtransaction_witness_set: gR,
    generaltransactionmetadata_from_bytes: ZL,
    generaltransactionmetadata_from_hex: GL,
    generaltransactionmetadata_from_json: _N,
    generaltransactionmetadata_get: sN,
    generaltransactionmetadata_insert: oN,
    generaltransactionmetadata_keys: aN,
    generaltransactionmetadata_len: nN,
    generaltransactionmetadata_new: rN,
    generaltransactionmetadata_to_bytes: KL,
    generaltransactionmetadata_to_hex: JL,
    generaltransactionmetadata_to_js_value: eN,
    generaltransactionmetadata_to_json: tN,
    genesisdelegatehash_from_bech32: oC,
    genesisdelegatehash_from_bytes: nC,
    genesisdelegatehash_from_hex: sC,
    genesisdelegatehash_to_bech32: EO,
    genesisdelegatehash_to_bytes: UO,
    genesisdelegatehash_to_hex: uO,
    genesishash_from_bech32: iC,
    genesishash_from_bytes: aC,
    genesishash_from_hex: cC,
    genesishash_to_bech32: zO,
    genesishash_to_bytes: IO,
    genesishash_to_hex: wO,
    genesishashes_add: C6,
    genesishashes_from_bytes: v6,
    genesishashes_from_hex: x6,
    genesishashes_from_json: E6,
    genesishashes_get: z6,
    genesishashes_len: j5,
    genesishashes_new: dS,
    genesishashes_to_bytes: m6,
    genesishashes_to_hex: k6,
    genesishashes_to_js_value: S6,
    genesishashes_to_json: j6,
    genesiskeydelegation_from_bytes: um,
    genesiskeydelegation_from_hex: fm,
    genesiskeydelegation_from_json: hm,
    genesiskeydelegation_genesis_delegate_hash: mm,
    genesiskeydelegation_genesishash: ym,
    genesiskeydelegation_new: km,
    genesiskeydelegation_to_bytes: pm,
    genesiskeydelegation_to_hex: wm,
    genesiskeydelegation_to_js_value: bm,
    genesiskeydelegation_to_json: gm,
    genesiskeydelegation_vrf_keyhash: vm,
    get_deposit: U8,
    get_implicit_input: D8,
    hash_auxiliary_data: P8,
    hash_plutus_data: R8,
    hash_script_data: $8,
    hash_transaction: T8,
    header_body_signature: rj,
    header_from_bytes: K2,
    header_from_hex: J2,
    header_from_json: ej,
    header_header_body: _j,
    header_new: nj,
    header_to_bytes: X2,
    header_to_hex: Z2,
    header_to_js_value: tj,
    header_to_json: G2,
    headerbody_block_body_hash: Uj,
    headerbody_block_body_size: Dj,
    headerbody_block_number: Ej,
    headerbody_from_bytes: mj,
    headerbody_from_hex: kj,
    headerbody_from_json: Sj,
    headerbody_has_nonce_and_leader_vrf: Fj,
    headerbody_has_vrf_result: Rj,
    headerbody_issuer_vkey: Lj,
    headerbody_leader_vrf_or_nothing: Tj,
    headerbody_new: Wj,
    headerbody_new_headerbody: Qj,
    headerbody_nonce_vrf_or_nothing: Pj,
    headerbody_operational_cert: Ij,
    headerbody_prev_hash: Oj,
    headerbody_protocol_version: Mj,
    headerbody_slot: zj,
    headerbody_slot_bignum: Cj,
    headerbody_to_bytes: yj,
    headerbody_to_hex: vj,
    headerbody_to_js_value: jj,
    headerbody_to_json: xj,
    headerbody_vrf_result_or_nothing: $j,
    headerbody_vrf_vkey: Nj,
    inputswithscriptwitness_add: u7,
    inputswithscriptwitness_get: w7,
    inputswithscriptwitness_len: f7,
    inputswithscriptwitness_new: p7,
    inputwithscriptwitness_input: d7,
    inputwithscriptwitness_new_with_native_script_witness: i7,
    inputwithscriptwitness_new_with_plutus_witness: c7,
    int_as_i32: i8,
    int_as_i32_or_fail: c8,
    int_as_i32_or_nothing: Q8,
    int_as_negative: a8,
    int_as_positive: s8,
    int_from_bytes: KE,
    int_from_hex: JE,
    int_from_json: e8,
    int_from_str: l8,
    int_is_positive: o8,
    int_new: _8,
    int_new_i32: n8,
    int_new_negative: r8,
    int_to_bytes: XE,
    int_to_hex: ZE,
    int_to_js_value: t8,
    int_to_json: GE,
    int_to_str: d8,
    ipv4_from_bytes: Ov,
    ipv4_from_hex: Nv,
    ipv4_from_json: Tv,
    ipv4_ip: $v,
    ipv4_new: Rv,
    ipv4_to_bytes: Cv,
    ipv4_to_hex: Lv,
    ipv4_to_js_value: Pv,
    ipv4_to_json: Fv,
    ipv6_from_bytes: Iv,
    ipv6_from_hex: Wv,
    ipv6_from_json: Bv,
    ipv6_ip: Hv,
    ipv6_new: Av,
    ipv6_to_bytes: Uv,
    ipv6_to_hex: Mv,
    ipv6_to_js_value: Vv,
    ipv6_to_json: Qv,
    kessignature_from_bytes: MC,
    kessignature_to_bytes: IC,
    kesvkey_from_bech32: $C,
    kesvkey_from_bytes: RC,
    kesvkey_from_hex: DC,
    kesvkey_to_bech32: RO,
    kesvkey_to_bytes: YO,
    kesvkey_to_hex: kO,
    language_from_bytes: rP,
    language_from_hex: oP,
    language_from_json: iP,
    language_kind: lP,
    language_new_plutus_v1: cP,
    language_new_plutus_v2: dP,
    language_to_bytes: _P,
    language_to_hex: nP,
    language_to_js_value: aP,
    language_to_json: sP,
    languages_add: fP,
    languages_get: wP,
    languages_len: AT,
    languages_list: gP,
    languages_new: uP,
    legacydaedalusprivatekey_as_bytes: V9,
    legacydaedalusprivatekey_chaincode: B9,
    legacydaedalusprivatekey_from_bytes: Q9,
    linearfee_coefficient: K$,
    linearfee_constant: X$,
    linearfee_new: Z$,
    make_daedalus_bootstrap_witness: L8,
    make_icarus_bootstrap_witness: N8,
    make_vkey_witness: F8,
    memory: rg,
    metadatalist_add: EL,
    metadatalist_from_bytes: kL,
    metadatalist_from_hex: jL,
    metadatalist_get: SL,
    metadatalist_len: VT,
    metadatalist_new: rR,
    metadatalist_to_bytes: vL,
    metadatalist_to_hex: xL,
    metadatamap_from_bytes: cL,
    metadatamap_from_hex: lL,
    metadatamap_get: fL,
    metadatamap_get_i32: bL,
    metadatamap_get_str: gL,
    metadatamap_has: hL,
    metadatamap_insert: pL,
    metadatamap_insert_i32: wL,
    metadatamap_insert_str: uL,
    metadatamap_keys: yL,
    metadatamap_len: WT,
    metadatamap_new: tR,
    metadatamap_to_bytes: iL,
    metadatamap_to_hex: dL,
    min_ada_for_output: I8,
    min_ada_required: M8,
    min_fee: J$,
    min_script_fee: tD,
    mint_as_negative_multiasset: r5,
    mint_as_positive_multiasset: _5,
    mint_from_bytes: A3,
    mint_from_hex: Y3,
    mint_from_json: K3,
    mint_get: G3,
    mint_get_all: t5,
    mint_insert: J3,
    mint_keys: e5,
    mint_len: R5,
    mint_new: bS,
    mint_new_from_entry: Z3,
    mint_to_bytes: B3,
    mint_to_hex: H3,
    mint_to_js_value: X3,
    mint_to_json: q3,
    mintassets_get: W3,
    mintassets_insert: M3,
    mintassets_keys: Q3,
    mintassets_len: T5,
    mintassets_new: gS,
    mintassets_new_from_entry: I3,
    mintbuilder_add_asset: LU,
    mintbuilder_build: FU,
    mintbuilder_get_native_scripts: PU,
    mintbuilder_get_plutus_witnesses: TU,
    mintbuilder_get_redeeemers: $U,
    mintbuilder_get_ref_inputs: RU,
    mintbuilder_has_native_scripts: UU,
    mintbuilder_has_plutus_scripts: DU,
    mintbuilder_new: OU,
    mintbuilder_set_asset: NU,
    mintwitness_new_native_script: EU,
    mintwitness_new_plutus_script: zU,
    mirtostakecredentials_from_bytes: nv,
    mirtostakecredentials_from_hex: sv,
    mirtostakecredentials_from_json: cv,
    mirtostakecredentials_get: lv,
    mirtostakecredentials_insert: dv,
    mirtostakecredentials_keys: pv,
    mirtostakecredentials_len: L5,
    mirtostakecredentials_new: tS,
    mirtostakecredentials_to_bytes: rv,
    mirtostakecredentials_to_hex: ov,
    mirtostakecredentials_to_js_value: iv,
    mirtostakecredentials_to_json: av,
    moveinstantaneousreward_as_to_other_pot: Sv,
    moveinstantaneousreward_as_to_stake_creds: Ev,
    moveinstantaneousreward_from_bytes: fv,
    moveinstantaneousreward_from_hex: bv,
    moveinstantaneousreward_from_json: mv,
    moveinstantaneousreward_kind: jv,
    moveinstantaneousreward_new_to_other_pot: vv,
    moveinstantaneousreward_new_to_stake_creds: kv,
    moveinstantaneousreward_pot: xv,
    moveinstantaneousreward_to_bytes: wv,
    moveinstantaneousreward_to_hex: gv,
    moveinstantaneousreward_to_js_value: yv,
    moveinstantaneousreward_to_json: hv,
    moveinstantaneousrewardscert_from_bytes: Sm,
    moveinstantaneousrewardscert_from_hex: zm,
    moveinstantaneousrewardscert_from_json: Lm,
    moveinstantaneousrewardscert_move_instantaneous_reward: Nm,
    moveinstantaneousrewardscert_new: Fm,
    moveinstantaneousrewardscert_to_bytes: jm,
    moveinstantaneousrewardscert_to_hex: Em,
    moveinstantaneousrewardscert_to_js_value: Om,
    moveinstantaneousrewardscert_to_json: Cm,
    multiasset_from_bytes: S3,
    multiasset_from_hex: z3,
    multiasset_from_json: L3,
    multiasset_get: F3,
    multiasset_get_asset: T3,
    multiasset_insert: N3,
    multiasset_keys: R3,
    multiasset_len: P5,
    multiasset_new: fS,
    multiasset_set_asset: P3,
    multiasset_sub: $3,
    multiasset_to_bytes: j3,
    multiasset_to_hex: E3,
    multiasset_to_js_value: O3,
    multiasset_to_json: C3,
    multihostname_dns_name: A1,
    multihostname_from_bytes: I1,
    multihostname_from_hex: W1,
    multihostname_from_json: B1,
    multihostname_new: H1,
    multihostname_to_bytes: U1,
    multihostname_to_hex: M1,
    multihostname_to_js_value: V1,
    multihostname_to_json: Q1,
    nativescript_as_script_all: G4,
    nativescript_as_script_any: t6,
    nativescript_as_script_n_of_k: e6,
    nativescript_as_script_pubkey: J4,
    nativescript_as_timelock_expiry: r6,
    nativescript_as_timelock_start: _6,
    nativescript_from_bytes: U4,
    nativescript_from_hex: M4,
    nativescript_from_json: V4,
    nativescript_get_required_signers: n6,
    nativescript_hash: B4,
    nativescript_kind: Z4,
    nativescript_new_script_all: H4,
    nativescript_new_script_any: Y4,
    nativescript_new_script_n_of_k: q4,
    nativescript_new_script_pubkey: A4,
    nativescript_new_timelock_expiry: K4,
    nativescript_new_timelock_start: X4,
    nativescript_to_bytes: D4,
    nativescript_to_hex: I4,
    nativescript_to_js_value: Q4,
    nativescript_to_json: W4,
    nativescripts_add: a6,
    nativescripts_get: s6,
    nativescripts_len: x5,
    nativescripts_new: wS,
    networkid_from_bytes: s5,
    networkid_from_hex: i5,
    networkid_from_json: l5,
    networkid_kind: w5,
    networkid_mainnet: u5,
    networkid_testnet: p5,
    networkid_to_bytes: o5,
    networkid_to_hex: a5,
    networkid_to_js_value: d5,
    networkid_to_json: c5,
    networkinfo_mainnet: fD,
    networkinfo_network_id: dD,
    networkinfo_new: cD,
    networkinfo_protocol_magic: lD,
    networkinfo_testnet: wD,
    networkinfo_testnet_preprod: uD,
    networkinfo_testnet_preview: pD,
    nonce_from_bytes: VC,
    nonce_from_hex: AC,
    nonce_from_json: qC,
    nonce_get_hash: ZC,
    nonce_new_from_hash: KC,
    nonce_new_identity: XC,
    nonce_to_bytes: QC,
    nonce_to_hex: BC,
    nonce_to_js_value: YC,
    nonce_to_json: HC,
    operationalcert_from_bytes: aj,
    operationalcert_from_hex: cj,
    operationalcert_from_json: pj,
    operationalcert_hot_vkey: uj,
    operationalcert_kes_period: fj,
    operationalcert_new: bj,
    operationalcert_sequence_number: wj,
    operationalcert_sigma: gj,
    operationalcert_to_bytes: sj,
    operationalcert_to_hex: ij,
    operationalcert_to_js_value: lj,
    operationalcert_to_json: dj,
    outputdatum_data: R4,
    outputdatum_data_hash: T4,
    outputdatum_new_data: P4,
    outputdatum_new_data_hash: F4,
    plutusdata_as_bytes: QP,
    plutusdata_as_constr_plutus_data: UP,
    plutusdata_as_integer: WP,
    plutusdata_as_list: MP,
    plutusdata_as_map: IP,
    plutusdata_from_address: VP,
    plutusdata_from_bytes: zP,
    plutusdata_from_hex: OP,
    plutusdata_from_json: ZT,
    plutusdata_kind: DP,
    plutusdata_new_bytes: $P,
    plutusdata_new_constr_plutus_data: LP,
    plutusdata_new_empty_constr_plutus_data: NP,
    plutusdata_new_integer: RP,
    plutusdata_new_list: TP,
    plutusdata_new_map: PP,
    plutusdata_new_single_value_constr_plutus_data: FP,
    plutusdata_to_bytes: EP,
    plutusdata_to_hex: CP,
    plutusdata_to_json: JT,
    plutuslist_add: ZP,
    plutuslist_from_bytes: HP,
    plutuslist_from_hex: qP,
    plutuslist_get: KP,
    plutuslist_len: qT,
    plutuslist_new: XP,
    plutuslist_to_bytes: AP,
    plutuslist_to_hex: YP,
    plutusmap_from_bytes: yP,
    plutusmap_from_hex: vP,
    plutusmap_get: xP,
    plutusmap_insert: kP,
    plutusmap_keys: jP,
    plutusmap_len: HT,
    plutusmap_new: GT,
    plutusmap_to_bytes: hP,
    plutusmap_to_hex: mP,
    plutusscript_bytes: DN,
    plutusscript_from_bytes: NN,
    plutusscript_from_bytes_v2: UN,
    plutusscript_from_bytes_with_version: IN,
    plutusscript_from_hex: PN,
    plutusscript_from_hex_with_version: MN,
    plutusscript_hash: WN,
    plutusscript_language_version: QN,
    plutusscript_new: TN,
    plutusscript_new_v2: RN,
    plutusscript_new_with_version: $N,
    plutusscript_to_bytes: LN,
    plutusscript_to_hex: FN,
    plutusscripts_add: GN,
    plutusscripts_from_bytes: AN,
    plutusscripts_from_hex: YN,
    plutusscripts_from_json: KN,
    plutusscripts_get: JN,
    plutusscripts_len: QT,
    plutusscripts_new: ZN,
    plutusscripts_to_bytes: BN,
    plutusscripts_to_hex: HN,
    plutusscripts_to_js_value: XN,
    plutusscripts_to_json: qN,
    plutusscriptsource_new: b7,
    plutusscriptsource_new_ref_input: h7,
    plutusscriptsource_new_ref_input_with_lang_ver: y7,
    plutuswitness_datum: O7,
    plutuswitness_new: j7,
    plutuswitness_new_with_ref: S7,
    plutuswitness_new_with_ref_without_datum: z7,
    plutuswitness_new_without_datum: E7,
    plutuswitness_redeemer: L7,
    plutuswitness_script: C7,
    plutuswitnesses_add: P7,
    plutuswitnesses_get: F7,
    plutuswitnesses_len: nL,
    plutuswitnesses_new: sL,
    pointer_cert_index: fU,
    pointer_cert_index_bignum: hU,
    pointer_new: lU,
    pointer_new_pointer: pU,
    pointer_slot: uU,
    pointer_slot_bignum: gU,
    pointer_tx_index: wU,
    pointer_tx_index_bignum: bU,
    pointeraddress_from_address: jU,
    pointeraddress_new: mU,
    pointeraddress_payment_cred: vU,
    pointeraddress_stake_pointer: kU,
    pointeraddress_to_address: xU,
    poolmetadata_from_bytes: dk,
    poolmetadata_from_hex: pk,
    poolmetadata_from_json: fk,
    poolmetadata_new: hk,
    poolmetadata_pool_metadata_hash: bk,
    poolmetadata_to_bytes: ck,
    poolmetadata_to_hex: lk,
    poolmetadata_to_js_value: wk,
    poolmetadata_to_json: uk,
    poolmetadata_url: gk,
    poolmetadatahash_from_bech32: hC,
    poolmetadatahash_from_bytes: bC,
    poolmetadatahash_from_hex: yC,
    poolmetadatahash_to_bech32: OO,
    poolmetadatahash_to_bytes: WO,
    poolmetadatahash_to_hex: gO,
    poolparams_cost: Dy,
    poolparams_from_bytes: Cy,
    poolparams_from_hex: Ly,
    poolparams_from_json: Py,
    poolparams_margin: Uy,
    poolparams_new: Vy,
    poolparams_operator: Ty,
    poolparams_pledge: $y,
    poolparams_pool_metadata: Qy,
    poolparams_pool_owners: My,
    poolparams_relays: Wy,
    poolparams_reward_account: Iy,
    poolparams_to_bytes: zy,
    poolparams_to_hex: Oy,
    poolparams_to_js_value: Fy,
    poolparams_to_json: Ny,
    poolparams_vrf_keyhash: Ry,
    poolregistration_from_bytes: Hy,
    poolregistration_from_hex: qy,
    poolregistration_from_json: Zy,
    poolregistration_new: Gy,
    poolregistration_pool_params: Jy,
    poolregistration_to_bytes: Ay,
    poolregistration_to_hex: Yy,
    poolregistration_to_js_value: Ky,
    poolregistration_to_json: Xy,
    poolretirement_epoch: cm,
    poolretirement_from_bytes: _m,
    poolretirement_from_hex: nm,
    poolretirement_from_json: am,
    poolretirement_new: dm,
    poolretirement_pool_keyhash: im,
    poolretirement_to_bytes: em,
    poolretirement_to_hex: rm,
    poolretirement_to_js_value: sm,
    poolretirement_to_json: om,
    privatekey_as_bytes: mz,
    privatekey_from_bech32: hz,
    privatekey_from_extended_bytes: vz,
    privatekey_from_hex: Sz,
    privatekey_from_normal_bytes: kz,
    privatekey_generate_ed25519: gz,
    privatekey_generate_ed25519extended: bz,
    privatekey_sign: xz,
    privatekey_to_bech32: yz,
    privatekey_to_hex: jz,
    privatekey_to_public: fz,
    proposedprotocolparameterupdates_from_bytes: W6,
    proposedprotocolparameterupdates_from_hex: V6,
    proposedprotocolparameterupdates_from_json: H6,
    proposedprotocolparameterupdates_get: q6,
    proposedprotocolparameterupdates_insert: Y6,
    proposedprotocolparameterupdates_keys: X6,
    proposedprotocolparameterupdates_len: E5,
    proposedprotocolparameterupdates_new: G5,
    proposedprotocolparameterupdates_to_bytes: M6,
    proposedprotocolparameterupdates_to_hex: Q6,
    proposedprotocolparameterupdates_to_js_value: A6,
    proposedprotocolparameterupdates_to_json: B6,
    protocolparamupdate_ada_per_utxo_byte: Hx,
    protocolparamupdate_collateral_percentage: n2,
    protocolparamupdate_cost_models: qx,
    protocolparamupdate_d: Ix,
    protocolparamupdate_execution_costs: Kx,
    protocolparamupdate_expansion_rate: $x,
    protocolparamupdate_extra_entropy: Mx,
    protocolparamupdate_from_bytes: cx,
    protocolparamupdate_from_hex: lx,
    protocolparamupdate_from_json: wx,
    protocolparamupdate_key_deposit: Ex,
    protocolparamupdate_max_block_body_size: mx,
    protocolparamupdate_max_block_ex_units: t2,
    protocolparamupdate_max_block_header_size: jx,
    protocolparamupdate_max_collateral_inputs: s2,
    protocolparamupdate_max_epoch: Lx,
    protocolparamupdate_max_tx_ex_units: Jx,
    protocolparamupdate_max_tx_size: kx,
    protocolparamupdate_max_value_size: _2,
    protocolparamupdate_min_pool_cost: Bx,
    protocolparamupdate_minfee_a: gx,
    protocolparamupdate_minfee_b: hx,
    protocolparamupdate_n_opt: Fx,
    protocolparamupdate_new: a2,
    protocolparamupdate_pool_deposit: Cx,
    protocolparamupdate_pool_pledge_influence: Tx,
    protocolparamupdate_protocol_version: Qx,
    protocolparamupdate_set_ada_per_utxo_byte: Ax,
    protocolparamupdate_set_collateral_percentage: r2,
    protocolparamupdate_set_cost_models: Yx,
    protocolparamupdate_set_execution_costs: Xx,
    protocolparamupdate_set_expansion_rate: Rx,
    protocolparamupdate_set_key_deposit: Sx,
    protocolparamupdate_set_max_block_body_size: yx,
    protocolparamupdate_set_max_block_ex_units: Gx,
    protocolparamupdate_set_max_block_header_size: xx,
    protocolparamupdate_set_max_collateral_inputs: o2,
    protocolparamupdate_set_max_epoch: Ox,
    protocolparamupdate_set_max_tx_ex_units: Zx,
    protocolparamupdate_set_max_tx_size: vx,
    protocolparamupdate_set_max_value_size: e2,
    protocolparamupdate_set_min_pool_cost: Vx,
    protocolparamupdate_set_minfee_a: fx,
    protocolparamupdate_set_minfee_b: bx,
    protocolparamupdate_set_n_opt: Nx,
    protocolparamupdate_set_pool_deposit: zx,
    protocolparamupdate_set_pool_pledge_influence: Px,
    protocolparamupdate_set_protocol_version: Wx,
    protocolparamupdate_set_treasury_growth_rate: Dx,
    protocolparamupdate_to_bytes: ix,
    protocolparamupdate_to_hex: dx,
    protocolparamupdate_to_js_value: ux,
    protocolparamupdate_to_json: px,
    protocolparamupdate_treasury_growth_rate: Ux,
    protocolversion_from_bytes: J6,
    protocolversion_from_hex: tx,
    protocolversion_from_json: rx,
    protocolversion_major: nx,
    protocolversion_minor: ox,
    protocolversion_new: sx,
    protocolversion_to_bytes: Z6,
    protocolversion_to_hex: G6,
    protocolversion_to_js_value: _x,
    protocolversion_to_json: ex,
    publickey_as_bytes: MO,
    publickey_from_bech32: zz,
    publickey_from_bytes: Oz,
    publickey_from_hex: Pz,
    publickey_hash: Nz,
    publickey_to_bech32: Cz,
    publickey_to_hex: Fz,
    publickey_verify: Lz,
    publickeys_add: P9,
    publickeys_get: F9,
    publickeys_new: N9,
    publickeys_size: dO,
    redeemer_data: iT,
    redeemer_ex_units: cT,
    redeemer_from_bytes: tT,
    redeemer_from_hex: _T,
    redeemer_from_json: oT,
    redeemer_index: aT,
    redeemer_new: dT,
    redeemer_tag: sT,
    redeemer_to_bytes: GP,
    redeemer_to_hex: eT,
    redeemer_to_js_value: nT,
    redeemer_to_json: rT,
    redeemers_add: PT,
    redeemers_from_bytes: ET,
    redeemers_from_hex: CT,
    redeemers_from_json: NT,
    redeemers_get: FT,
    redeemers_len: XT,
    redeemers_new: nR,
    redeemers_to_bytes: ST,
    redeemers_to_hex: zT,
    redeemers_to_js_value: LT,
    redeemers_to_json: OT,
    redeemers_total_ex_units: TT,
    redeemertag_from_bytes: uT,
    redeemertag_from_hex: fT,
    redeemertag_from_json: hT,
    redeemertag_kind: xT,
    redeemertag_new_cert: vT,
    redeemertag_new_mint: mT,
    redeemertag_new_reward: kT,
    redeemertag_new_spend: yT,
    redeemertag_to_bytes: pT,
    redeemertag_to_hex: wT,
    redeemertag_to_js_value: bT,
    redeemertag_to_json: gT,
    relay_as_multi_host_name: ak,
    relay_as_single_host_addr: ok,
    relay_as_single_host_name: sk,
    relay_from_bytes: X1,
    relay_from_hex: Z1,
    relay_from_json: tk,
    relay_kind: nk,
    relay_new_multi_host_name: rk,
    relay_new_single_host_addr: ek,
    relay_new_single_host_name: _k,
    relay_to_bytes: q1,
    relay_to_hex: K1,
    relay_to_js_value: G1,
    relay_to_json: J1,
    relays_add: Sy,
    relays_from_bytes: hy,
    relays_from_hex: my,
    relays_from_json: xy,
    relays_get: jy,
    relays_len: y5,
    relays_new: nS,
    relays_to_bytes: by,
    relays_to_hex: yy,
    relays_to_js_value: ky,
    relays_to_json: vy,
    rewardaddress_from_address: cU,
    rewardaddress_new: WU,
    rewardaddress_payment_cred: MU,
    rewardaddress_to_address: iU,
    rewardaddresses_add: Uk,
    rewardaddresses_from_bytes: Nk,
    rewardaddresses_from_hex: Pk,
    rewardaddresses_from_json: $k,
    rewardaddresses_get: Dk,
    rewardaddresses_len: v5,
    rewardaddresses_new: aS,
    rewardaddresses_to_bytes: Lk,
    rewardaddresses_to_hex: Fk,
    rewardaddresses_to_js_value: Rk,
    rewardaddresses_to_json: Tk,
    scriptall_from_bytes: O0,
    scriptall_from_hex: N0,
    scriptall_from_json: T0,
    scriptall_native_scripts: R0,
    scriptall_new: $0,
    scriptall_to_bytes: C0,
    scriptall_to_hex: L0,
    scriptall_to_js_value: P0,
    scriptall_to_json: F0,
    scriptany_from_bytes: U0,
    scriptany_from_hex: M0,
    scriptany_from_json: Q0,
    scriptany_native_scripts: $5,
    scriptany_new: iS,
    scriptany_to_bytes: D0,
    scriptany_to_hex: I0,
    scriptany_to_js_value: W0,
    scriptany_to_json: mS,
    scriptdatahash_from_bech32: LC,
    scriptdatahash_from_bytes: OC,
    scriptdatahash_from_hex: NC,
    scriptdatahash_to_bech32: PO,
    scriptdatahash_to_bytes: AO,
    scriptdatahash_to_hex: mO,
    scripthash_from_bech32: G9,
    scripthash_from_bytes: J9,
    scripthash_from_hex: tC,
    scripthash_to_bech32: SO,
    scripthash_to_bytes: $O,
    scripthash_to_hex: pO,
    scripthashes_add: U6,
    scripthashes_from_bytes: N6,
    scripthashes_from_hex: P6,
    scripthashes_from_json: $6,
    scripthashes_get: D6,
    scripthashes_len: S5,
    scripthashes_new: lS,
    scripthashes_to_bytes: L6,
    scripthashes_to_hex: F6,
    scripthashes_to_js_value: R6,
    scripthashes_to_json: T6,
    scriptnofk_from_bytes: A0,
    scriptnofk_from_hex: Y0,
    scriptnofk_from_json: K0,
    scriptnofk_n: z5,
    scriptnofk_native_scripts: Z0,
    scriptnofk_new: J0,
    scriptnofk_to_bytes: B0,
    scriptnofk_to_hex: H0,
    scriptnofk_to_js_value: X0,
    scriptnofk_to_json: q0,
    scriptpubkey_addr_keyhash: S0,
    scriptpubkey_from_bytes: y0,
    scriptpubkey_from_hex: v0,
    scriptpubkey_from_json: j0,
    scriptpubkey_new: E0,
    scriptpubkey_to_bytes: h0,
    scriptpubkey_to_hex: m0,
    scriptpubkey_to_js_value: x0,
    scriptpubkey_to_json: k0,
    scriptref_from_bytes: y4,
    scriptref_from_hex: v4,
    scriptref_from_json: j4,
    scriptref_is_native_script: z4,
    scriptref_is_plutus_script: C4,
    scriptref_native_script: O4,
    scriptref_new_native_script: S4,
    scriptref_new_plutus_script: E4,
    scriptref_plutus_script: L4,
    scriptref_to_bytes: h4,
    scriptref_to_hex: m4,
    scriptref_to_js_value: x4,
    scriptref_to_json: k4,
    singlehostaddr_from_bytes: b1,
    singlehostaddr_from_hex: y1,
    singlehostaddr_from_json: k1,
    singlehostaddr_ipv4: j1,
    singlehostaddr_ipv6: S1,
    singlehostaddr_new: E1,
    singlehostaddr_port: x1,
    singlehostaddr_to_bytes: g1,
    singlehostaddr_to_hex: h1,
    singlehostaddr_to_js_value: v1,
    singlehostaddr_to_json: m1,
    singlehostname_dns_name: oS,
    singlehostname_from_bytes: O1,
    singlehostname_from_hex: N1,
    singlehostname_from_json: T1,
    singlehostname_new: $1,
    singlehostname_port: R1,
    singlehostname_to_bytes: C1,
    singlehostname_to_hex: L1,
    singlehostname_to_js_value: P1,
    singlehostname_to_json: F1,
    stakecredential_from_bytes: xD,
    stakecredential_from_hex: SD,
    stakecredential_from_json: CD,
    stakecredential_from_keyhash: bD,
    stakecredential_from_scripthash: hD,
    stakecredential_kind: vD,
    stakecredential_to_bytes: kD,
    stakecredential_to_hex: jD,
    stakecredential_to_js_value: zD,
    stakecredential_to_json: ED,
    stakecredential_to_keyhash: yD,
    stakecredential_to_scripthash: mD,
    stakecredentials_add: Ck,
    stakecredentials_from_bytes: vk,
    stakecredentials_from_hex: xk,
    stakecredentials_from_json: Ek,
    stakecredentials_get: zk,
    stakecredentials_len: m5,
    stakecredentials_new: sS,
    stakecredentials_to_bytes: mk,
    stakecredentials_to_hex: kk,
    stakecredentials_to_js_value: Sk,
    stakecredentials_to_json: jk,
    stakedelegation_from_bytes: Kh,
    stakedelegation_from_hex: Jh,
    stakedelegation_from_json: ey,
    stakedelegation_new: ry,
    stakedelegation_pool_keyhash: X5,
    stakedelegation_stake_credential: _y,
    stakedelegation_to_bytes: Xh,
    stakedelegation_to_hex: Zh,
    stakedelegation_to_js_value: ty,
    stakedelegation_to_json: Gh,
    stakederegistration_from_bytes: Mh,
    stakederegistration_from_hex: Qh,
    stakederegistration_from_json: Ah,
    stakederegistration_new: Yh,
    stakederegistration_stake_credential: Hh,
    stakederegistration_to_bytes: Ih,
    stakederegistration_to_hex: Wh,
    stakederegistration_to_js_value: Bh,
    stakederegistration_to_json: Vh,
    stakeregistration_from_bytes: Ph,
    stakeregistration_from_hex: Rh,
    stakeregistration_from_json: Dh,
    stakeregistration_new: rS,
    stakeregistration_stake_credential: W5,
    stakeregistration_to_bytes: Fh,
    stakeregistration_to_hex: Th,
    stakeregistration_to_js_value: $h,
    stakeregistration_to_json: yS,
    strings_add: DT,
    strings_get: $T,
    strings_len: KT,
    strings_new: _R,
    timelockexpiry_from_bytes: a4,
    timelockexpiry_from_hex: c4,
    timelockexpiry_from_json: p4,
    timelockexpiry_new: f4,
    timelockexpiry_new_timelockexpiry: g4,
    timelockexpiry_slot: u4,
    timelockexpiry_slot_bignum: w4,
    timelockexpiry_to_bytes: s4,
    timelockexpiry_to_hex: i4,
    timelockexpiry_to_js_value: l4,
    timelockexpiry_to_json: d4,
    timelockstart_from_bytes: t4,
    timelockstart_from_hex: _4,
    timelockstart_from_json: n4,
    timelockstart_new: K5,
    timelockstart_new_timelockstart: eS,
    timelockstart_slot: I5,
    timelockstart_slot_bignum: U5,
    timelockstart_to_bytes: G0,
    timelockstart_to_hex: e4,
    timelockstart_to_js_value: r4,
    timelockstart_to_json: vS,
    transaction_auxiliary_data: jg,
    transaction_body: vg,
    transaction_from_bytes: fg,
    transaction_from_hex: bg,
    transaction_from_json: mg,
    transaction_is_valid: xg,
    transaction_new: Eg,
    transaction_set_is_valid: Sg,
    transaction_to_bytes: wg,
    transaction_to_hex: gg,
    transaction_to_js_value: yg,
    transaction_to_json: hg,
    transaction_witness_set: kg,
    transactionbatch_get: oD,
    transactionbatch_len: nD,
    transactionbatchlist_get: _D,
    transactionbatchlist_len: aD,
    transactionbodies_add: b2,
    transactionbodies_from_bytes: d2,
    transactionbodies_from_hex: p2,
    transactionbodies_from_json: f2,
    transactionbodies_get: g2,
    transactionbodies_len: C5,
    transactionbodies_new: pS,
    transactionbodies_to_bytes: c2,
    transactionbodies_to_hex: l2,
    transactionbodies_to_js_value: w2,
    transactionbodies_to_json: u2,
    transactionbody_auxiliary_data_hash: Nb,
    transactionbody_certs: Sb,
    transactionbody_collateral: Vb,
    transactionbody_collateral_return: Xb,
    transactionbody_fee: yb,
    transactionbody_from_bytes: lb,
    transactionbody_from_hex: ub,
    transactionbody_from_json: gb,
    transactionbody_inputs: bb,
    transactionbody_mint: Db,
    transactionbody_multiassets: M5,
    transactionbody_network_id: Yb,
    transactionbody_new: Jb,
    transactionbody_new_tx_body: Gb,
    transactionbody_outputs: hb,
    transactionbody_reference_inputs: Ib,
    transactionbody_remove_ttl: xb,
    transactionbody_required_signers: Ab,
    transactionbody_script_data_hash: Wb,
    transactionbody_set_auxiliary_data_hash: Lb,
    transactionbody_set_certs: jb,
    transactionbody_set_collateral: Qb,
    transactionbody_set_collateral_return: qb,
    transactionbody_set_mint: $b,
    transactionbody_set_network_id: Hb,
    transactionbody_set_reference_inputs: Ub,
    transactionbody_set_required_signers: Bb,
    transactionbody_set_script_data_hash: Mb,
    transactionbody_set_total_collateral: Kb,
    transactionbody_set_ttl: kb,
    transactionbody_set_update: Cb,
    transactionbody_set_validity_start_interval: Fb,
    transactionbody_set_validity_start_interval_bignum: Pb,
    transactionbody_set_withdrawals: Eb,
    transactionbody_to_bytes: db,
    transactionbody_to_hex: pb,
    transactionbody_to_js_value: fb,
    transactionbody_to_json: wb,
    transactionbody_total_collateral: Zb,
    transactionbody_ttl: mb,
    transactionbody_ttl_bignum: vb,
    transactionbody_update: Ob,
    transactionbody_validity_start_interval: Rb,
    transactionbody_validity_start_interval_bignum: Tb,
    transactionbody_withdrawals: zb,
    transactionbuilder_add_bootstrap_input: XR,
    transactionbuilder_add_change_if_needed: $$,
    transactionbuilder_add_change_if_needed_with_datum: D$,
    transactionbuilder_add_input: KR,
    transactionbuilder_add_inputs_from: DR,
    transactionbuilder_add_json_metadatum: g$,
    transactionbuilder_add_json_metadatum_with_schema: b$,
    transactionbuilder_add_key_input: AR,
    transactionbuilder_add_metadatum: f$,
    transactionbuilder_add_mint_asset: j$,
    transactionbuilder_add_mint_asset_and_output: S$,
    transactionbuilder_add_mint_asset_and_output_min_required_coin: E$,
    transactionbuilder_add_native_script_input: YR,
    transactionbuilder_add_output: r$,
    transactionbuilder_add_plutus_script_input: qR,
    transactionbuilder_add_reference_input: BR,
    transactionbuilder_add_required_native_input_scripts: JR,
    transactionbuilder_add_required_plutus_input_scripts: GR,
    transactionbuilder_add_required_signer: W$,
    transactionbuilder_add_script_input: HR,
    transactionbuilder_build: B$,
    transactionbuilder_build_tx: A$,
    transactionbuilder_build_tx_unsafe: H$,
    transactionbuilder_calc_script_data_hash: U$,
    transactionbuilder_count_missing_input_scripts: ZR,
    transactionbuilder_fee_for_input: _$,
    transactionbuilder_fee_for_output: n$,
    transactionbuilder_full_size: Q$,
    transactionbuilder_get_auxiliary_data: p$,
    transactionbuilder_get_deposit: T$,
    transactionbuilder_get_explicit_input: O$,
    transactionbuilder_get_explicit_output: P$,
    transactionbuilder_get_fee_if_set: R$,
    transactionbuilder_get_implicit_input: L$,
    transactionbuilder_get_mint: v$,
    transactionbuilder_get_mint_builder: y$,
    transactionbuilder_get_mint_scripts: k$,
    transactionbuilder_get_native_input_scripts: t$,
    transactionbuilder_get_plutus_input_scripts: e$,
    transactionbuilder_get_reference_inputs: C$,
    transactionbuilder_get_total_input: N$,
    transactionbuilder_get_total_output: F$,
    transactionbuilder_min_fee: Y$,
    transactionbuilder_new: z$,
    transactionbuilder_output_sizes: V$,
    transactionbuilder_remove_script_data_hash: M$,
    transactionbuilder_set_auxiliary_data: u$,
    transactionbuilder_set_certs: d$,
    transactionbuilder_set_collateral: IR,
    transactionbuilder_set_collateral_return: MR,
    transactionbuilder_set_collateral_return_and_total: WR,
    transactionbuilder_set_fee: o$,
    transactionbuilder_set_inputs: UR,
    transactionbuilder_set_metadata: w$,
    transactionbuilder_set_mint: m$,
    transactionbuilder_set_mint_asset: x$,
    transactionbuilder_set_mint_builder: h$,
    transactionbuilder_set_script_data_hash: I$,
    transactionbuilder_set_total_collateral: QR,
    transactionbuilder_set_total_collateral_and_return: VR,
    transactionbuilder_set_ttl: s$,
    transactionbuilder_set_ttl_bignum: a$,
    transactionbuilder_set_validity_start_interval: i$,
    transactionbuilder_set_validity_start_interval_bignum: c$,
    transactionbuilder_set_withdrawals: l$,
    transactionbuilderconfigbuilder_build: RR,
    transactionbuilderconfigbuilder_coins_per_utxo_byte: CR,
    transactionbuilderconfigbuilder_coins_per_utxo_word: zR,
    transactionbuilderconfigbuilder_ex_unit_prices: OR,
    transactionbuilderconfigbuilder_fee_algo: ER,
    transactionbuilderconfigbuilder_key_deposit: NR,
    transactionbuilderconfigbuilder_max_tx_size: PR,
    transactionbuilderconfigbuilder_max_value_size: FR,
    transactionbuilderconfigbuilder_new: SR,
    transactionbuilderconfigbuilder_pool_deposit: LR,
    transactionbuilderconfigbuilder_prefer_pure_change: TR,
    transactionhash_from_bech32: _C,
    transactionhash_from_bytes: eC,
    transactionhash_from_hex: rC,
    transactionhash_to_bech32: CO,
    transactionhash_to_bytes: DO,
    transactionhash_to_hex: fO,
    transactioninput_from_bytes: _h,
    transactioninput_from_hex: nh,
    transactioninput_from_json: ah,
    transactioninput_index: ch,
    transactioninput_new: dh,
    transactioninput_to_bytes: eh,
    transactioninput_to_hex: rh,
    transactioninput_to_js_value: sh,
    transactioninput_to_json: oh,
    transactioninput_transaction_id: ih,
    transactioninputs_add: $g,
    transactioninputs_from_bytes: Og,
    transactioninputs_from_hex: Ng,
    transactioninputs_from_json: Tg,
    transactioninputs_get: Rg,
    transactioninputs_len: b5,
    transactioninputs_new: _S,
    transactioninputs_to_bytes: Cg,
    transactioninputs_to_hex: Lg,
    transactioninputs_to_js_value: Pg,
    transactioninputs_to_json: Fg,
    transactioninputs_to_option: Dg,
    transactionmetadatum_as_bytes: ML,
    transactionmetadatum_as_int: IL,
    transactionmetadatum_as_list: UL,
    transactionmetadatum_as_map: DL,
    transactionmetadatum_as_text: WL,
    transactionmetadatum_from_bytes: OL,
    transactionmetadatum_from_hex: NL,
    transactionmetadatum_kind: YT,
    transactionmetadatum_new_bytes: RL,
    transactionmetadatum_new_int: TL,
    transactionmetadatum_new_list: PL,
    transactionmetadatum_new_map: FL,
    transactionmetadatum_new_text: $L,
    transactionmetadatum_to_bytes: CL,
    transactionmetadatum_to_hex: LL,
    transactionmetadatumlabels_add: qL,
    transactionmetadatumlabels_from_bytes: BL,
    transactionmetadatumlabels_from_hex: HL,
    transactionmetadatumlabels_get: YL,
    transactionmetadatumlabels_len: MT,
    transactionmetadatumlabels_new: eR,
    transactionmetadatumlabels_to_bytes: VL,
    transactionmetadatumlabels_to_hex: AL,
    transactionoutput_address: yh,
    transactionoutput_amount: mh,
    transactionoutput_data_hash: vh,
    transactionoutput_from_bytes: uh,
    transactionoutput_from_hex: fh,
    transactionoutput_from_json: hh,
    transactionoutput_has_data_hash: Ch,
    transactionoutput_has_plutus_data: zh,
    transactionoutput_has_script_ref: Oh,
    transactionoutput_new: Lh,
    transactionoutput_plutus_data: kh,
    transactionoutput_script_ref: xh,
    transactionoutput_serialization_format: Nh,
    transactionoutput_set_data_hash: Eh,
    transactionoutput_set_plutus_data: Sh,
    transactionoutput_set_script_ref: jh,
    transactionoutput_to_bytes: ph,
    transactionoutput_to_hex: wh,
    transactionoutput_to_js_value: bh,
    transactionoutput_to_json: gh,
    transactionoutputamountbuilder_build: IS,
    transactionoutputamountbuilder_with_asset_and_min_required_coin: DS,
    transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost: US,
    transactionoutputamountbuilder_with_coin: RS,
    transactionoutputamountbuilder_with_coin_and_asset: $S,
    transactionoutputamountbuilder_with_value: TS,
    transactionoutputbuilder_new: zS,
    transactionoutputbuilder_next: FS,
    transactionoutputbuilder_with_address: CS,
    transactionoutputbuilder_with_data_hash: OS,
    transactionoutputbuilder_with_plutus_data: LS,
    transactionoutputbuilder_with_script_ref: NS,
    transactionoutputs_add: Yg,
    transactionoutputs_from_bytes: Mg,
    transactionoutputs_from_hex: Qg,
    transactionoutputs_from_json: Ag,
    transactionoutputs_get: Hg,
    transactionoutputs_len: g5,
    transactionoutputs_new: cS,
    transactionoutputs_to_bytes: Ig,
    transactionoutputs_to_hex: Wg,
    transactionoutputs_to_js_value: Bg,
    transactionoutputs_to_json: Vg,
    transactionunspentoutput_from_bytes: QS,
    transactionunspentoutput_from_hex: BS,
    transactionunspentoutput_from_json: YS,
    transactionunspentoutput_input: XS,
    transactionunspentoutput_new: qS,
    transactionunspentoutput_output: KS,
    transactionunspentoutput_to_bytes: WS,
    transactionunspentoutput_to_hex: VS,
    transactionunspentoutput_to_js_value: HS,
    transactionunspentoutput_to_json: AS,
    transactionunspentoutputs_add: nE,
    transactionunspentoutputs_from_json: tE,
    transactionunspentoutputs_get: rE,
    transactionunspentoutputs_len: _E,
    transactionunspentoutputs_new: eE,
    transactionunspentoutputs_to_js_value: GS,
    transactionunspentoutputs_to_json: JS,
    transactionwitnessset_bootstraps: c0,
    transactionwitnessset_from_bytes: Jk,
    transactionwitnessset_from_hex: t0,
    transactionwitnessset_from_json: r0,
    transactionwitnessset_native_scripts: a0,
    transactionwitnessset_new: g0,
    transactionwitnessset_plutus_data: u0,
    transactionwitnessset_plutus_scripts: l0,
    transactionwitnessset_redeemers: f0,
    transactionwitnessset_set_bootstraps: i0,
    transactionwitnessset_set_native_scripts: s0,
    transactionwitnessset_set_plutus_data: p0,
    transactionwitnessset_set_plutus_scripts: d0,
    transactionwitnessset_set_redeemers: w0,
    transactionwitnessset_set_vkeys: n0,
    transactionwitnessset_to_bytes: Zk,
    transactionwitnessset_to_hex: Gk,
    transactionwitnessset_to_js_value: _0,
    transactionwitnessset_to_json: e0,
    transactionwitnessset_vkeys: o0,
    transactionwitnesssets_add: z2,
    transactionwitnesssets_from_bytes: m2,
    transactionwitnesssets_from_hex: k2,
    transactionwitnesssets_from_json: S2,
    transactionwitnesssets_get: E2,
    transactionwitnesssets_len: O5,
    transactionwitnesssets_new: uS,
    transactionwitnesssets_to_bytes: y2,
    transactionwitnesssets_to_hex: v2,
    transactionwitnesssets_to_js_value: j2,
    transactionwitnesssets_to_json: x2,
    txbuilderconstants_plutus_alonzo_cost_models: rL,
    txbuilderconstants_plutus_default_cost_models: _L,
    txbuilderconstants_plutus_vasil_cost_models: oL,
    txinputsbuilder_add_bootstrap_input: M7,
    txinputsbuilder_add_input: W7,
    txinputsbuilder_add_key_input: $7,
    txinputsbuilder_add_native_script_input: U7,
    txinputsbuilder_add_plutus_script_input: I7,
    txinputsbuilder_add_required_native_input_scripts: V7,
    txinputsbuilder_add_required_plutus_input_scripts: B7,
    txinputsbuilder_add_required_script_input_witnesses: A7,
    txinputsbuilder_add_required_signer: K7,
    txinputsbuilder_add_required_signers: Z7,
    txinputsbuilder_add_script_input: D7,
    txinputsbuilder_count_missing_input_scripts: Q7,
    txinputsbuilder_get_native_input_scripts: Y7,
    txinputsbuilder_get_plutus_input_scripts: q7,
    txinputsbuilder_get_ref_inputs: H7,
    txinputsbuilder_inputs: G7,
    txinputsbuilder_inputs_option: tL,
    txinputsbuilder_len: X7,
    txinputsbuilder_new: R7,
    txinputsbuilder_total_value: J7,
    unitinterval_denominator: lg,
    unitinterval_from_bytes: og,
    unitinterval_from_hex: ag,
    unitinterval_from_json: dg,
    unitinterval_new: pg,
    unitinterval_numerator: D5,
    unitinterval_to_bytes: ng,
    unitinterval_to_hex: sg,
    unitinterval_to_js_value: cg,
    unitinterval_to_json: ig,
    update_epoch: b6,
    update_from_bytes: d6,
    update_from_hex: p6,
    update_from_json: f6,
    update_new: h6,
    update_proposed_protocol_parameter_updates: g6,
    update_to_bytes: c6,
    update_to_hex: l6,
    update_to_js_value: w6,
    update_to_json: u6,
    url_from_bytes: qv,
    url_from_hex: Kv,
    url_from_json: Zv,
    url_new: Jv,
    url_to_bytes: Yv,
    url_to_hex: Xv,
    url_to_js_value: B5,
    url_to_json: kS,
    url_url: Q5,
    value_checked_add: BE,
    value_checked_sub: AE,
    value_clamped_sub: HE,
    value_coin: ME,
    value_compare: YE,
    value_from_bytes: OE,
    value_from_hex: NE,
    value_from_json: TE,
    value_is_zero: IE,
    value_multiasset: QE,
    value_new: RE,
    value_new_from_assets: $E,
    value_new_with_assets: DE,
    value_set_coin: WE,
    value_set_multiasset: VE,
    value_to_bytes: CE,
    value_to_hex: LE,
    value_to_js_value: PE,
    value_to_json: FE,
    value_zero: UE,
    vkey_from_bytes: $z,
    vkey_from_hex: Uz,
    vkey_from_json: Wz,
    vkey_new: Qz,
    vkey_public_key: Vz,
    vkey_to_bytes: Rz,
    vkey_to_hex: Dz,
    vkey_to_js_value: Mz,
    vkey_to_json: Iz,
    vkeys_add: Hz,
    vkeys_get: Az,
    vkeys_len: cO,
    vkeys_new: XO,
    vkeywitness_from_bytes: Xz,
    vkeywitness_from_hex: Zz,
    vkeywitness_from_json: t9,
    vkeywitness_new: e9,
    vkeywitness_signature: jO,
    vkeywitness_to_bytes: qz,
    vkeywitness_to_hex: Kz,
    vkeywitness_to_js_value: Gz,
    vkeywitness_to_json: Jz,
    vkeywitness_vkey: xO,
    vkeywitnesses_add: l9,
    vkeywitnesses_from_bytes: n9,
    vkeywitnesses_from_hex: s9,
    vkeywitnesses_from_json: c9,
    vkeywitnesses_get: d9,
    vkeywitnesses_len: iO,
    vkeywitnesses_new: qO,
    vkeywitnesses_to_bytes: r9,
    vkeywitnesses_to_hex: o9,
    vkeywitnesses_to_js_value: i9,
    vkeywitnesses_to_json: a9,
    vrfcert_from_bytes: tO,
    vrfcert_from_hex: _O,
    vrfcert_from_json: oO,
    vrfcert_new: aO,
    vrfcert_output: lO,
    vrfcert_proof: sO,
    vrfcert_to_bytes: GC,
    vrfcert_to_hex: eO,
    vrfcert_to_js_value: nO,
    vrfcert_to_json: rO,
    vrfkeyhash_from_bech32: vC,
    vrfkeyhash_from_bytes: mC,
    vrfkeyhash_from_hex: kC,
    vrfkeyhash_to_bech32: LO,
    vrfkeyhash_to_bytes: QO,
    vrfkeyhash_to_hex: bO,
    vrfvkey_from_bech32: PC,
    vrfvkey_from_bytes: FC,
    vrfvkey_from_hex: TC,
    vrfvkey_to_bech32: TO,
    vrfvkey_to_bytes: HO,
    vrfvkey_to_hex: vO,
    withdrawals_from_bytes: Wk,
    withdrawals_from_hex: Vk,
    withdrawals_from_json: Hk,
    withdrawals_get: qk,
    withdrawals_insert: Yk,
    withdrawals_keys: Xk,
    withdrawals_len: k5,
    withdrawals_new: J5,
    withdrawals_to_bytes: Mk,
    withdrawals_to_hex: Qk,
    withdrawals_to_js_value: Ak,
    withdrawals_to_json: Bk
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ef(qU);
  function XU(r) {
    const t = r.trim().toLowerCase().replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Hex string has odd length");
    const e = new Uint8Array(t.length / 2);
    for (let s = 0; s < t.length; s += 2) e[s / 2] = parseInt(t.slice(s, s + 2), 16);
    return e;
  }
  function Ne(r) {
    return Array.from(r).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function KU(r) {
    try {
      if (r.length % 2 !== 0) return null;
      let t = "";
      for (let e = 0; e < r.length; e += 2) {
        const s = parseInt(r.slice(e, e + 2), 16);
        if (s < 32 || s > 126) return null;
        t += String.fromCharCode(s);
      }
      return t || null;
    } catch {
      return null;
    }
  }
  function ZU(r) {
    const t = r.trim();
    if (!t) return "";
    if (t.startsWith("{")) try {
      const e = JSON.parse(t);
      if (e && typeof e.cborHex == "string") return e.cborHex;
    } catch {
    }
    return t;
  }
  function JU() {
    const [r, t] = Pe.useState(false), [e, s] = Pe.useState(""), [o, n] = Pe.useState(""), [c, d] = Pe.useState("");
    Pe.useEffect(() => {
      let k = false;
      try {
        typeof Q_ == "function" ? k || t(true) : d("Cardano Serialization Lib not available");
      } catch (z) {
        d((z == null ? void 0 : z.message) ?? String(z));
      }
      return () => {
        k = true;
      };
    }, []), Pe.useEffect(() => {
      const z = new URLSearchParams(window.location.search).get("cborHex");
      z && s(z);
    }, []);
    function p(k) {
      const z = Number(k.coin().to_str()), L = k.multiasset(), N = {
        lovelace: z
      };
      if (L) {
        const V = L.keys();
        for (let y = 0; y < V.len(); y++) {
          const b = V.get(y), v = L.get(b), E = v.keys(), T = `policy ${Ne(b.to_bytes())}`, P = {};
          for (let $ = 0; $ < E.len(); $++) {
            const H = E.get($), U = Number(v.get(H).to_str()), it = Ne(H.name()), At = KU(it), Le = At ? `asset ${it} (${At})` : `asset ${it}`;
            P[Le] = U;
          }
          N[T] = P;
        }
      }
      return N;
    }
    function l(k) {
      const z = zt.from_bech32(k), L = k.startsWith("addr_test") ? "Testnet" : "Mainnet";
      let N = "Shelley", V = null, y = null, b = null, v = null;
      const E = Vn.from_address(z);
      if (E) {
        const P = E.payment_cred(), $ = P.to_keyhash(), H = P.to_scripthash();
        $ && (V = Ne($.to_bytes())), H && (y = Ne(H.to_bytes()));
        const U = E.stake_cred(), it = U.to_keyhash(), At = U.to_scripthash();
        it && (b = Ne(it.to_bytes())), At && (v = Ne(At.to_bytes()));
      } else {
        const P = Bn.from_address(z);
        if (P) {
          const $ = P.payment_cred(), H = $.to_keyhash(), U = $.to_scripthash();
          H && (V = Ne(H.to_bytes())), U && (y = Ne(U.to_bytes()));
        }
      }
      return {
        network: L,
        addressEra: N,
        paymentField: V ? {
          "payment credential key hash": V
        } : y ? {
          "payment credential script hash": y
        } : {},
        stakeReference: b || v ? b ? {
          "stake credential key hash": b
        } : {
          "stake credential script hash": v
        } : null,
        referenceScript: null
      };
    }
    function m(k) {
      const z = k.body(), L = z.inputs(), N = z.outputs(), V = [];
      for (let F = 0; F < L.len(); F++) {
        const T = L.get(F), P = Ne(T.transaction_id().to_bytes());
        V.push(`${P}#${T.index()}`);
      }
      const y = [];
      for (let F = 0; F < N.len(); F++) {
        const T = N.get(F), P = T.address().to_bech32(), { network: $, addressEra: H, paymentField: U, stakeReference: it, referenceScript: At } = l(P), Le = p(T.amount());
        y.push({
          address: P,
          "address era": H,
          amount: Le,
          network: $,
          ...U,
          "reference script": At,
          "stake reference": it
        });
      }
      const b = `${z.fee().to_str()} Lovelace`, v = z.ttl() ? z.ttl() : null;
      return {
        "auxiliary scripts": null,
        certificates: null,
        "collateral inputs": [],
        era: "Babbage",
        fee: b,
        inputs: V,
        metadata: null,
        mint: null,
        outputs: y,
        "reference inputs": [],
        "required signers (payment key hashes needed for scripts)": null,
        "return collateral": null,
        "total collateral": null,
        "update proposal": null,
        "validity range": {
          "lower bound": null,
          "upper bound": v
        },
        withdrawals: null,
        witnesses: []
      };
    }
    const x = (k) => {
      k && k.preventDefault();
      try {
        d(""), n("");
        const z = ZU(e);
        if (!z) throw new Error("Please enter a CBOR hex string");
        const L = Q_.from_bytes(XU(z)), N = m(L);
        n(JSON.stringify(N, null, 2));
      } catch (z) {
        d((z == null ? void 0 : z.message) ?? String(z));
      }
    };
    return ft.jsxs("div", {
      className: "container",
      children: [
        ft.jsxs("header", {
          children: [
            ft.jsx("h1", {
              children: "Cardano Transaction Decoder"
            }),
            ft.jsx("p", {
              children: "Paste your CBOR hex string to decode the transaction (runs fully in your browser)"
            })
          ]
        }),
        ft.jsx("div", {
          className: "form-container",
          children: ft.jsxs("form", {
            onSubmit: x,
            children: [
              ft.jsxs("div", {
                className: "input-group",
                children: [
                  ft.jsx("label", {
                    htmlFor: "cbor",
                    children: "CBOR Hex String:"
                  }),
                  ft.jsx("textarea", {
                    id: "cbor",
                    value: e,
                    onChange: (k) => s(k.target.value),
                    placeholder: "Paste your CBOR hex string here...",
                    rows: 4
                  })
                ]
              }),
              ft.jsx("button", {
                type: "submit",
                disabled: !r,
                children: r ? "Decode Transaction" : "Loading CSL..."
              })
            ]
          })
        }),
        o && ft.jsxs("div", {
          className: "result-container",
          children: [
            ft.jsx("h3", {
              children: "Decoded Transaction:"
            }),
            ft.jsx("pre", {
              children: o
            })
          ]
        }),
        c && ft.jsxs("div", {
          className: "error-container",
          children: [
            ft.jsx("h3", {
              children: "Error:"
            }),
            ft.jsx("pre", {
              children: c
            })
          ]
        })
      ]
    });
  }
  const xp = document.getElementById("root");
  if (!xp) throw new Error("Root container not found");
  vp(xp).render(ft.jsx(Wp.StrictMode, {
    children: ft.jsx(JU, {})
  }));
})();
