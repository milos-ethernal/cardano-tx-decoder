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
  function Au(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var zd = {
    exports: {}
  }, Fs = {}, Cd = {
    exports: {}
  }, H = {};
  var jo = Symbol.for("react.element"), Hu = Symbol.for("react.portal"), qu = Symbol.for("react.fragment"), Yu = Symbol.for("react.strict_mode"), Xu = Symbol.for("react.profiler"), Ku = Symbol.for("react.provider"), Zu = Symbol.for("react.context"), Ju = Symbol.for("react.forward_ref"), Gu = Symbol.for("react.suspense"), tp = Symbol.for("react.memo"), ep = Symbol.for("react.lazy"), gc = Symbol.iterator;
  function _p(r) {
    return r === null || typeof r != "object" ? null : (r = gc && r[gc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Od = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ld = Object.assign, Nd = {};
  function Nn(r, t, e) {
    this.props = r, this.context = t, this.refs = Nd, this.updater = e || Od;
  }
  Nn.prototype.isReactComponent = {};
  Nn.prototype.setState = function(r, t) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, t, "setState");
  };
  Nn.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Fd() {
  }
  Fd.prototype = Nn.prototype;
  function bi(r, t, e) {
    this.props = r, this.context = t, this.refs = Nd, this.updater = e || Od;
  }
  var hi = bi.prototype = new Fd();
  hi.constructor = bi;
  Ld(hi, Nn.prototype);
  hi.isPureReactComponent = true;
  var bc = Array.isArray, Td = Object.prototype.hasOwnProperty, yi = {
    current: null
  }, Pd = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Rd(r, t, e) {
    var s, o = {}, n = null, c = null;
    if (t != null) for (s in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (n = "" + t.key), t) Td.call(t, s) && !Pd.hasOwnProperty(s) && (o[s] = t[s]);
    var d = arguments.length - 2;
    if (d === 1) o.children = e;
    else if (1 < d) {
      for (var u = Array(d), l = 0; l < d; l++) u[l] = arguments[l + 2];
      o.children = u;
    }
    if (r && r.defaultProps) for (s in d = r.defaultProps, d) o[s] === void 0 && (o[s] = d[s]);
    return {
      $$typeof: jo,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: yi.current
    };
  }
  function rp(r, t) {
    return {
      $$typeof: jo,
      type: r.type,
      key: t,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function mi(r) {
    return typeof r == "object" && r !== null && r.$$typeof === jo;
  }
  function np(r) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var hc = /\/+/g;
  function Js(r, t) {
    return typeof r == "object" && r !== null && r.key != null ? np("" + r.key) : t.toString(36);
  }
  function Xo(r, t, e, s, o) {
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
          case jo:
          case Hu:
            c = true;
        }
    }
    if (c) return c = r, o = o(c), r = s === "" ? "." + Js(c, 0) : s, bc(o) ? (e = "", r != null && (e = r.replace(hc, "$&/") + "/"), Xo(o, t, e, "", function(l) {
      return l;
    })) : o != null && (mi(o) && (o = rp(o, e + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(hc, "$&/") + "/") + r)), t.push(o)), 1;
    if (c = 0, s = s === "" ? "." : s + ":", bc(r)) for (var d = 0; d < r.length; d++) {
      n = r[d];
      var u = s + Js(n, d);
      c += Xo(n, t, e, u, o);
    }
    else if (u = _p(r), typeof u == "function") for (r = u.call(r), d = 0; !(n = r.next()).done; ) n = n.value, u = s + Js(n, d++), c += Xo(n, t, e, u, o);
    else if (n === "object") throw t = String(r), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return c;
  }
  function Lo(r, t, e) {
    if (r == null) return r;
    var s = [], o = 0;
    return Xo(r, s, "", "", function(n) {
      return t.call(e, n, o++);
    }), s;
  }
  function op(r) {
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
  var Vt = {
    current: null
  }, Ko = {
    transition: null
  }, sp = {
    ReactCurrentDispatcher: Vt,
    ReactCurrentBatchConfig: Ko,
    ReactCurrentOwner: yi
  };
  function $d() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  H.Children = {
    map: Lo,
    forEach: function(r, t, e) {
      Lo(r, function() {
        t.apply(this, arguments);
      }, e);
    },
    count: function(r) {
      var t = 0;
      return Lo(r, function() {
        t++;
      }), t;
    },
    toArray: function(r) {
      return Lo(r, function(t) {
        return t;
      }) || [];
    },
    only: function(r) {
      if (!mi(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  };
  H.Component = Nn;
  H.Fragment = qu;
  H.Profiler = Xu;
  H.PureComponent = bi;
  H.StrictMode = Yu;
  H.Suspense = Gu;
  H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
  H.act = $d;
  H.cloneElement = function(r, t, e) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var s = Ld({}, r.props), o = r.key, n = r.ref, c = r._owner;
    if (t != null) {
      if (t.ref !== void 0 && (n = t.ref, c = yi.current), t.key !== void 0 && (o = "" + t.key), r.type && r.type.defaultProps) var d = r.type.defaultProps;
      for (u in t) Td.call(t, u) && !Pd.hasOwnProperty(u) && (s[u] = t[u] === void 0 && d !== void 0 ? d[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) s.children = e;
    else if (1 < u) {
      d = Array(u);
      for (var l = 0; l < u; l++) d[l] = arguments[l + 2];
      s.children = d;
    }
    return {
      $$typeof: jo,
      type: r.type,
      key: o,
      ref: n,
      props: s,
      _owner: c
    };
  };
  H.createContext = function(r) {
    return r = {
      $$typeof: Zu,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: Ku,
      _context: r
    }, r.Consumer = r;
  };
  H.createElement = Rd;
  H.createFactory = function(r) {
    var t = Rd.bind(null, r);
    return t.type = r, t;
  };
  H.createRef = function() {
    return {
      current: null
    };
  };
  H.forwardRef = function(r) {
    return {
      $$typeof: Ju,
      render: r
    };
  };
  H.isValidElement = mi;
  H.lazy = function(r) {
    return {
      $$typeof: ep,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: op
    };
  };
  H.memo = function(r, t) {
    return {
      $$typeof: tp,
      type: r,
      compare: t === void 0 ? null : t
    };
  };
  H.startTransition = function(r) {
    var t = Ko.transition;
    Ko.transition = {};
    try {
      r();
    } finally {
      Ko.transition = t;
    }
  };
  H.unstable_act = $d;
  H.useCallback = function(r, t) {
    return Vt.current.useCallback(r, t);
  };
  H.useContext = function(r) {
    return Vt.current.useContext(r);
  };
  H.useDebugValue = function() {
  };
  H.useDeferredValue = function(r) {
    return Vt.current.useDeferredValue(r);
  };
  H.useEffect = function(r, t) {
    return Vt.current.useEffect(r, t);
  };
  H.useId = function() {
    return Vt.current.useId();
  };
  H.useImperativeHandle = function(r, t, e) {
    return Vt.current.useImperativeHandle(r, t, e);
  };
  H.useInsertionEffect = function(r, t) {
    return Vt.current.useInsertionEffect(r, t);
  };
  H.useLayoutEffect = function(r, t) {
    return Vt.current.useLayoutEffect(r, t);
  };
  H.useMemo = function(r, t) {
    return Vt.current.useMemo(r, t);
  };
  H.useReducer = function(r, t, e) {
    return Vt.current.useReducer(r, t, e);
  };
  H.useRef = function(r) {
    return Vt.current.useRef(r);
  };
  H.useState = function(r) {
    return Vt.current.useState(r);
  };
  H.useSyncExternalStore = function(r, t, e) {
    return Vt.current.useSyncExternalStore(r, t, e);
  };
  H.useTransition = function() {
    return Vt.current.useTransition();
  };
  H.version = "18.3.1";
  Cd.exports = H;
  var ve = Cd.exports;
  const ap = Au(ve);
  var ip = ve, cp = Symbol.for("react.element"), dp = Symbol.for("react.fragment"), lp = Object.prototype.hasOwnProperty, up = ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pp = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Dd(r, t, e) {
    var s, o = {}, n = null, c = null;
    e !== void 0 && (n = "" + e), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (c = t.ref);
    for (s in t) lp.call(t, s) && !pp.hasOwnProperty(s) && (o[s] = t[s]);
    if (r && r.defaultProps) for (s in t = r.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
    return {
      $$typeof: cp,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: up.current
    };
  }
  Fs.Fragment = dp;
  Fs.jsx = Dd;
  Fs.jsxs = Dd;
  zd.exports = Fs;
  var B = zd.exports, Id = {
    exports: {}
  }, ae = {}, Ud = {
    exports: {}
  }, Md = {};
  (function(r) {
    function t(T, M) {
      var W = T.length;
      T.push(M);
      t: for (; 0 < W; ) {
        var ot = W - 1 >>> 1, wt = T[ot];
        if (0 < o(wt, M)) T[ot] = M, T[W] = wt, W = ot;
        else break t;
      }
    }
    function e(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var M = T[0], W = T.pop();
      if (W !== M) {
        T[0] = W;
        t: for (var ot = 0, wt = T.length, At = wt >>> 1; ot < At; ) {
          var Ne = 2 * (ot + 1) - 1, Pn = T[Ne], le = Ne + 1, Er = T[le];
          if (0 > o(Pn, W)) le < wt && 0 > o(Er, Pn) ? (T[ot] = Er, T[le] = W, ot = le) : (T[ot] = Pn, T[Ne] = W, ot = Ne);
          else if (le < wt && 0 > o(Er, W)) T[ot] = Er, T[le] = W, ot = le;
          else break t;
        }
      }
      return M;
    }
    function o(T, M) {
      var W = T.sortIndex - M.sortIndex;
      return W !== 0 ? W : T.id - M.id;
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
    var u = [], l = [], m = 1, x = null, k = 3, O = false, N = false, F = false, I = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
      for (var M = e(l); M !== null; ) {
        if (M.callback === null) s(l);
        else if (M.startTime <= T) s(l), M.sortIndex = M.expirationTime, t(u, M);
        else break;
        M = e(l);
      }
    }
    function E(T) {
      if (F = false, v(T), !N) if (e(u) !== null) N = true, de(L);
      else {
        var M = e(l);
        M !== null && f_(E, M.startTime - T);
      }
    }
    function L(T, M) {
      N = false, F && (F = false, b(D), D = -1), O = true;
      var W = k;
      try {
        for (v(M), x = e(u); x !== null && (!(x.expirationTime > M) || T && !nt()); ) {
          var ot = x.callback;
          if (typeof ot == "function") {
            x.callback = null, k = x.priorityLevel;
            var wt = ot(x.expirationTime <= M);
            M = r.unstable_now(), typeof wt == "function" ? x.callback = wt : x === e(u) && s(u), v(M);
          } else s(u);
          x = e(u);
        }
        if (x !== null) var At = true;
        else {
          var Ne = e(l);
          Ne !== null && f_(E, Ne.startTime - M), At = false;
        }
        return At;
      } finally {
        x = null, k = W, O = false;
      }
    }
    var P = false, R = null, D = -1, Z = 5, V = -1;
    function nt() {
      return !(r.unstable_now() - V < Z);
    }
    function gt() {
      if (R !== null) {
        var T = r.unstable_now();
        V = T;
        var M = true;
        try {
          M = R(true, T);
        } finally {
          M ? Lt() : (P = false, R = null);
        }
      } else P = false;
    }
    var Lt;
    if (typeof h == "function") Lt = function() {
      h(gt);
    };
    else if (typeof MessageChannel < "u") {
      var ce = new MessageChannel(), Le = ce.port2;
      ce.port1.onmessage = gt, Lt = function() {
        Le.postMessage(null);
      };
    } else Lt = function() {
      I(gt, 0);
    };
    function de(T) {
      R = T, P || (P = true, Lt());
    }
    function f_(T, M) {
      D = I(function() {
        T(r.unstable_now());
      }, M);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_continueExecution = function() {
      N || O || (N = true, de(L));
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return e(u);
    }, r.unstable_next = function(T) {
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
        return T();
      } finally {
        k = W;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = function() {
    }, r.unstable_runWithPriority = function(T, M) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var W = k;
      k = T;
      try {
        return M();
      } finally {
        k = W;
      }
    }, r.unstable_scheduleCallback = function(T, M, W) {
      var ot = r.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ot + W : ot) : W = ot, T) {
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
      return wt = W + wt, T = {
        id: m++,
        callback: M,
        priorityLevel: T,
        startTime: W,
        expirationTime: wt,
        sortIndex: -1
      }, W > ot ? (T.sortIndex = W, t(l, T), e(u) === null && T === e(l) && (F ? (b(D), D = -1) : F = true, f_(E, W - ot))) : (T.sortIndex = wt, t(u, T), N || O || (N = true, de(L))), T;
    }, r.unstable_shouldYield = nt, r.unstable_wrapCallback = function(T) {
      var M = k;
      return function() {
        var W = k;
        k = M;
        try {
          return T.apply(this, arguments);
        } finally {
          k = W;
        }
      };
    };
  })(Md);
  Ud.exports = Md;
  var wp = Ud.exports;
  var fp = ve, oe = wp;
  function z(r) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Wd = /* @__PURE__ */ new Set(), oo = {};
  function Jr(r, t) {
    jn(r, t), jn(r + "Capture", t);
  }
  function jn(r, t) {
    for (oo[r] = t, r = 0; r < t.length; r++) Wd.add(t[r]);
  }
  var c_ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ja = Object.prototype.hasOwnProperty, gp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yc = {}, mc = {};
  function bp(r) {
    return ja.call(mc, r) ? true : ja.call(yc, r) ? false : gp.test(r) ? mc[r] = true : (yc[r] = true, false);
  }
  function hp(r, t, e, s) {
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
  function yp(r, t, e, s) {
    if (t === null || typeof t > "u" || hp(r, t, e, s)) return true;
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
  function Bt(r, t, e, s, o, n, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = n, this.removeEmptyString = c;
  }
  var Ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Ot[r] = new Bt(r, 0, false, r, null, false, false);
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
    Ot[t] = new Bt(t, 1, false, r[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 2, false, r.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Ot[r] = new Bt(r, 3, false, r.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 3, true, r, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 4, false, r, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 6, false, r, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var vi = /[\-:]([a-z])/g;
  function ki(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var t = r.replace(vi, ki);
    Ot[t] = new Bt(t, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var t = r.replace(vi, ki);
    Ot[t] = new Bt(t, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(r) {
    var t = r.replace(vi, ki);
    Ot[t] = new Bt(t, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 1, false, r.toLowerCase(), null, false, false);
  });
  Ot.xlinkHref = new Bt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(r) {
    Ot[r] = new Bt(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function xi(r, t, e, s) {
    var o = Ot.hasOwnProperty(t) ? Ot[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yp(t, e, o, s) && (e = null), s || o === null ? bp(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : o.mustUseProperty ? r[o.propertyName] = e === null ? o.type === 3 ? false : "" : e : (t = o.attributeName, s = o.attributeNamespace, e === null ? r.removeAttribute(t) : (o = o.type, e = o === 3 || o === 4 && e === true ? "" : "" + e, s ? r.setAttributeNS(s, t, e) : r.setAttribute(t, e))));
  }
  var p_ = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, No = Symbol.for("react.element"), _n = Symbol.for("react.portal"), rn = Symbol.for("react.fragment"), ji = Symbol.for("react.strict_mode"), Sa = Symbol.for("react.profiler"), Qd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), Si = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), za = Symbol.for("react.suspense_list"), Ei = Symbol.for("react.memo"), h_ = Symbol.for("react.lazy"), Bd = Symbol.for("react.offscreen"), vc = Symbol.iterator;
  function Rn(r) {
    return r === null || typeof r != "object" ? null : (r = vc && r[vc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var ct = Object.assign, Gs;
  function Vn(r) {
    if (Gs === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Gs = t && t[1] || "";
    }
    return `
` + Gs + r;
  }
  var ta = false;
  function ea(r, t) {
    if (!r || ta) return "";
    ta = true;
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
              var u = `
` + o[c].replace(" at new ", " at ");
              return r.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", r.displayName)), u;
            }
          while (1 <= c && 0 <= d);
          break;
        }
      }
    } finally {
      ta = false, Error.prepareStackTrace = e;
    }
    return (r = r ? r.displayName || r.name : "") ? Vn(r) : "";
  }
  function mp(r) {
    switch (r.tag) {
      case 5:
        return Vn(r.type);
      case 16:
        return Vn("Lazy");
      case 13:
        return Vn("Suspense");
      case 19:
        return Vn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return r = ea(r.type, false), r;
      case 11:
        return r = ea(r.type.render, false), r;
      case 1:
        return r = ea(r.type, true), r;
      default:
        return "";
    }
  }
  function Ca(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case rn:
        return "Fragment";
      case _n:
        return "Portal";
      case Sa:
        return "Profiler";
      case ji:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case za:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case Vd:
        return (r.displayName || "Context") + ".Consumer";
      case Qd:
        return (r._context.displayName || "Context") + ".Provider";
      case Si:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case Ei:
        return t = r.displayName || null, t !== null ? t : Ca(r.type) || "Memo";
      case h_:
        t = r._payload, r = r._init;
        try {
          return Ca(r(t));
        } catch {
        }
    }
    return null;
  }
  function vp(r) {
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
        return Ca(t);
      case 8:
        return t === ji ? "StrictMode" : "Mode";
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
  function vr(r) {
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
  function Ad(r) {
    var t = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function kp(r) {
    var t = Ad(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), s = "" + r[t];
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
  function Fo(r) {
    r._valueTracker || (r._valueTracker = kp(r));
  }
  function Hd(r) {
    if (!r) return false;
    var t = r._valueTracker;
    if (!t) return true;
    var e = t.getValue(), s = "";
    return r && (s = Ad(r) ? r.checked ? "true" : "false" : r.value), r = s, r !== e ? (t.setValue(r), true) : false;
  }
  function is(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function Oa(r, t) {
    var e = t.checked;
    return ct({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: e ?? r._wrapperState.initialChecked
    });
  }
  function kc(r, t) {
    var e = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    e = vr(t.value != null ? t.value : e), r._wrapperState = {
      initialChecked: s,
      initialValue: e,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function qd(r, t) {
    t = t.checked, t != null && xi(r, "checked", t, false);
  }
  function La(r, t) {
    qd(r, t);
    var e = vr(t.value), s = t.type;
    if (e != null) s === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
    else if (s === "submit" || s === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Na(r, t.type, e) : t.hasOwnProperty("defaultValue") && Na(r, t.type, vr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function xc(r, t, e) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
    }
    e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
  }
  function Na(r, t, e) {
    (t !== "number" || is(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
  }
  var Bn = Array.isArray;
  function gn(r, t, e, s) {
    if (r = r.options, t) {
      t = {};
      for (var o = 0; o < e.length; o++) t["$" + e[o]] = true;
      for (e = 0; e < r.length; e++) o = t.hasOwnProperty("$" + r[e].value), r[e].selected !== o && (r[e].selected = o), o && s && (r[e].defaultSelected = true);
    } else {
      for (e = "" + vr(e), t = null, o = 0; o < r.length; o++) {
        if (r[o].value === e) {
          r[o].selected = true, s && (r[o].defaultSelected = true);
          return;
        }
        t !== null || r[o].disabled || (t = r[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Fa(r, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return ct({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue
    });
  }
  function jc(r, t) {
    var e = t.value;
    if (e == null) {
      if (e = t.children, t = t.defaultValue, e != null) {
        if (t != null) throw Error(z(92));
        if (Bn(e)) {
          if (1 < e.length) throw Error(z(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), e = t;
    }
    r._wrapperState = {
      initialValue: vr(e)
    };
  }
  function Yd(r, t) {
    var e = vr(t.value), s = vr(t.defaultValue);
    e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), s != null && (r.defaultValue = "" + s);
  }
  function Sc(r) {
    var t = r.textContent;
    t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
  }
  function Xd(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ta(r, t) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? Xd(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var To, Kd = function(r) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, e, s, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return r(t, e, s, o);
      });
    } : r;
  }(function(r, t) {
    if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r) r.innerHTML = t;
    else {
      for (To = To || document.createElement("div"), To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = To.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; t.firstChild; ) r.appendChild(t.firstChild);
    }
  });
  function so(r, t) {
    if (t) {
      var e = r.firstChild;
      if (e && e === r.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    r.textContent = t;
  }
  var qn = {
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
  }, xp = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(qn).forEach(function(r) {
    xp.forEach(function(t) {
      t = t + r.charAt(0).toUpperCase() + r.substring(1), qn[t] = qn[r];
    });
  });
  function Zd(r, t, e) {
    return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || qn.hasOwnProperty(r) && qn[r] ? ("" + t).trim() : t + "px";
  }
  function Jd(r, t) {
    r = r.style;
    for (var e in t) if (t.hasOwnProperty(e)) {
      var s = e.indexOf("--") === 0, o = Zd(e, t[e], s);
      e === "float" && (e = "cssFloat"), s ? r.setProperty(e, o) : r[e] = o;
    }
  }
  var jp = ct({
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
  function Pa(r, t) {
    if (t) {
      if (jp[r] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, r));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(z(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(z(62));
    }
  }
  function Ra(r, t) {
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
  var $a = null;
  function zi(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var Da = null, bn = null, hn = null;
  function Ec(r) {
    if (r = zo(r)) {
      if (typeof Da != "function") throw Error(z(280));
      var t = r.stateNode;
      t && (t = Ds(t), Da(r.stateNode, r.type, t));
    }
  }
  function Gd(r) {
    bn ? hn ? hn.push(r) : hn = [
      r
    ] : bn = r;
  }
  function tl() {
    if (bn) {
      var r = bn, t = hn;
      if (hn = bn = null, Ec(r), t) for (r = 0; r < t.length; r++) Ec(t[r]);
    }
  }
  function el(r, t) {
    return r(t);
  }
  function _l() {
  }
  var _a = false;
  function rl(r, t, e) {
    if (_a) return r(t, e);
    _a = true;
    try {
      return el(r, t, e);
    } finally {
      _a = false, (bn !== null || hn !== null) && (_l(), tl());
    }
  }
  function ao(r, t) {
    var e = r.stateNode;
    if (e === null) return null;
    var s = Ds(e);
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
    if (e && typeof e != "function") throw Error(z(231, t, typeof e));
    return e;
  }
  var Ia = false;
  if (c_) try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function() {
        Ia = true;
      }
    }), window.addEventListener("test", $n, $n), window.removeEventListener("test", $n, $n);
  } catch {
    Ia = false;
  }
  function Sp(r, t, e, s, o, n, c, d, u) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(e, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Yn = false, cs = null, ds = false, Ua = null, Ep = {
    onError: function(r) {
      Yn = true, cs = r;
    }
  };
  function zp(r, t, e, s, o, n, c, d, u) {
    Yn = false, cs = null, Sp.apply(Ep, arguments);
  }
  function Cp(r, t, e, s, o, n, c, d, u) {
    if (zp.apply(this, arguments), Yn) {
      if (Yn) {
        var l = cs;
        Yn = false, cs = null;
      } else throw Error(z(198));
      ds || (ds = true, Ua = l);
    }
  }
  function Gr(r) {
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
  function nl(r) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function zc(r) {
    if (Gr(r) !== r) throw Error(z(188));
  }
  function Op(r) {
    var t = r.alternate;
    if (!t) {
      if (t = Gr(r), t === null) throw Error(z(188));
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
          if (n === e) return zc(o), r;
          if (n === s) return zc(o), t;
          n = n.sibling;
        }
        throw Error(z(188));
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
          if (!c) throw Error(z(189));
        }
      }
      if (e.alternate !== s) throw Error(z(190));
    }
    if (e.tag !== 3) throw Error(z(188));
    return e.stateNode.current === e ? r : t;
  }
  function ol(r) {
    return r = Op(r), r !== null ? sl(r) : null;
  }
  function sl(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var t = sl(r);
      if (t !== null) return t;
      r = r.sibling;
    }
    return null;
  }
  var al = oe.unstable_scheduleCallback, Cc = oe.unstable_cancelCallback, Lp = oe.unstable_shouldYield, Np = oe.unstable_requestPaint, pt = oe.unstable_now, Fp = oe.unstable_getCurrentPriorityLevel, Ci = oe.unstable_ImmediatePriority, il = oe.unstable_UserBlockingPriority, ls = oe.unstable_NormalPriority, Tp = oe.unstable_LowPriority, cl = oe.unstable_IdlePriority, Ts = null, We = null;
  function Pp(r) {
    if (We && typeof We.onCommitFiberRoot == "function") try {
      We.onCommitFiberRoot(Ts, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var ze = Math.clz32 ? Math.clz32 : Dp, Rp = Math.log, $p = Math.LN2;
  function Dp(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Rp(r) / $p | 0) | 0;
  }
  var Po = 64, Ro = 4194304;
  function An(r) {
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
  function us(r, t) {
    var e = r.pendingLanes;
    if (e === 0) return 0;
    var s = 0, o = r.suspendedLanes, n = r.pingedLanes, c = e & 268435455;
    if (c !== 0) {
      var d = c & ~o;
      d !== 0 ? s = An(d) : (n &= c, n !== 0 && (s = An(n)));
    } else c = e & ~o, c !== 0 ? s = An(c) : n !== 0 && (s = An(n));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & o) && (o = s & -s, n = t & -t, o >= n || o === 16 && (n & 4194240) !== 0)) return t;
    if (s & 4 && (s |= e & 16), t = r.entangledLanes, t !== 0) for (r = r.entanglements, t &= s; 0 < t; ) e = 31 - ze(t), o = 1 << e, s |= r[e], t &= ~o;
    return s;
  }
  function Ip(r, t) {
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
  function Up(r, t) {
    for (var e = r.suspendedLanes, s = r.pingedLanes, o = r.expirationTimes, n = r.pendingLanes; 0 < n; ) {
      var c = 31 - ze(n), d = 1 << c, u = o[c];
      u === -1 ? (!(d & e) || d & s) && (o[c] = Ip(d, t)) : u <= t && (r.expiredLanes |= d), n &= ~d;
    }
  }
  function Ma(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function dl() {
    var r = Po;
    return Po <<= 1, !(Po & 4194240) && (Po = 64), r;
  }
  function ra(r) {
    for (var t = [], e = 0; 31 > e; e++) t.push(r);
    return t;
  }
  function So(r, t, e) {
    r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - ze(t), r[t] = e;
  }
  function Mp(r, t) {
    var e = r.pendingLanes & ~t;
    r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
    var s = r.eventTimes;
    for (r = r.expirationTimes; 0 < e; ) {
      var o = 31 - ze(e), n = 1 << o;
      t[o] = 0, s[o] = -1, r[o] = -1, e &= ~n;
    }
  }
  function Oi(r, t) {
    var e = r.entangledLanes |= t;
    for (r = r.entanglements; e; ) {
      var s = 31 - ze(e), o = 1 << s;
      o & t | r[s] & t && (r[s] |= t), e &= ~o;
    }
  }
  var K = 0;
  function ll(r) {
    return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ul, Li, pl, wl, fl, Wa = false, $o = [], pr = null, wr = null, fr = null, io = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), v_ = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Oc(r, t) {
    switch (r) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        wr = null;
        break;
      case "mouseover":
      case "mouseout":
        fr = null;
        break;
      case "pointerover":
      case "pointerout":
        io.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        co.delete(t.pointerId);
    }
  }
  function Dn(r, t, e, s, o, n) {
    return r === null || r.nativeEvent !== n ? (r = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: s,
      nativeEvent: n,
      targetContainers: [
        o
      ]
    }, t !== null && (t = zo(t), t !== null && Li(t)), r) : (r.eventSystemFlags |= s, t = r.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), r);
  }
  function Qp(r, t, e, s, o) {
    switch (t) {
      case "focusin":
        return pr = Dn(pr, r, t, e, s, o), true;
      case "dragenter":
        return wr = Dn(wr, r, t, e, s, o), true;
      case "mouseover":
        return fr = Dn(fr, r, t, e, s, o), true;
      case "pointerover":
        var n = o.pointerId;
        return io.set(n, Dn(io.get(n) || null, r, t, e, s, o)), true;
      case "gotpointercapture":
        return n = o.pointerId, co.set(n, Dn(co.get(n) || null, r, t, e, s, o)), true;
    }
    return false;
  }
  function gl(r) {
    var t = Fr(r.target);
    if (t !== null) {
      var e = Gr(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = nl(e), t !== null) {
            r.blockedOn = t, fl(r.priority, function() {
              pl(e);
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
  function Zo(r) {
    if (r.blockedOn !== null) return false;
    for (var t = r.targetContainers; 0 < t.length; ) {
      var e = Qa(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
      if (e === null) {
        e = r.nativeEvent;
        var s = new e.constructor(e.type, e);
        $a = s, e.target.dispatchEvent(s), $a = null;
      } else return t = zo(e), t !== null && Li(t), r.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function Lc(r, t, e) {
    Zo(r) && e.delete(t);
  }
  function Vp() {
    Wa = false, pr !== null && Zo(pr) && (pr = null), wr !== null && Zo(wr) && (wr = null), fr !== null && Zo(fr) && (fr = null), io.forEach(Lc), co.forEach(Lc);
  }
  function In(r, t) {
    r.blockedOn === t && (r.blockedOn = null, Wa || (Wa = true, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, Vp)));
  }
  function lo(r) {
    function t(o) {
      return In(o, r);
    }
    if (0 < $o.length) {
      In($o[0], r);
      for (var e = 1; e < $o.length; e++) {
        var s = $o[e];
        s.blockedOn === r && (s.blockedOn = null);
      }
    }
    for (pr !== null && In(pr, r), wr !== null && In(wr, r), fr !== null && In(fr, r), io.forEach(t), co.forEach(t), e = 0; e < v_.length; e++) s = v_[e], s.blockedOn === r && (s.blockedOn = null);
    for (; 0 < v_.length && (e = v_[0], e.blockedOn === null); ) gl(e), e.blockedOn === null && v_.shift();
  }
  var yn = p_.ReactCurrentBatchConfig, ps = true;
  function Bp(r, t, e, s) {
    var o = K, n = yn.transition;
    yn.transition = null;
    try {
      K = 1, Ni(r, t, e, s);
    } finally {
      K = o, yn.transition = n;
    }
  }
  function Ap(r, t, e, s) {
    var o = K, n = yn.transition;
    yn.transition = null;
    try {
      K = 4, Ni(r, t, e, s);
    } finally {
      K = o, yn.transition = n;
    }
  }
  function Ni(r, t, e, s) {
    if (ps) {
      var o = Qa(r, t, e, s);
      if (o === null) pa(r, t, s, ws, e), Oc(r, s);
      else if (Qp(o, r, t, e, s)) s.stopPropagation();
      else if (Oc(r, s), t & 4 && -1 < Wp.indexOf(r)) {
        for (; o !== null; ) {
          var n = zo(o);
          if (n !== null && ul(n), n = Qa(r, t, e, s), n === null && pa(r, t, s, ws, e), n === o) break;
          o = n;
        }
        o !== null && s.stopPropagation();
      } else pa(r, t, s, null, e);
    }
  }
  var ws = null;
  function Qa(r, t, e, s) {
    if (ws = null, r = zi(s), r = Fr(r), r !== null) if (t = Gr(r), t === null) r = null;
    else if (e = t.tag, e === 13) {
      if (r = nl(t), r !== null) return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else t !== r && (r = null);
    return ws = r, null;
  }
  function bl(r) {
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
        switch (Fp()) {
          case Ci:
            return 1;
          case il:
            return 4;
          case ls:
          case Tp:
            return 16;
          case cl:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var cr = null, Fi = null, Jo = null;
  function hl() {
    if (Jo) return Jo;
    var r, t = Fi, e = t.length, s, o = "value" in cr ? cr.value : cr.textContent, n = o.length;
    for (r = 0; r < e && t[r] === o[r]; r++) ;
    var c = e - r;
    for (s = 1; s <= c && t[e - s] === o[n - s]; s++) ;
    return Jo = o.slice(r, 1 < s ? 1 - s : void 0);
  }
  function Go(r) {
    var t = r.keyCode;
    return "charCode" in r ? (r = r.charCode, r === 0 && t === 13 && (r = 13)) : r = t, r === 10 && (r = 13), 32 <= r || r === 13 ? r : 0;
  }
  function Do() {
    return true;
  }
  function Nc() {
    return false;
  }
  function ie(r) {
    function t(e, s, o, n, c) {
      this._reactName = e, this._targetInst = o, this.type = s, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var d in r) r.hasOwnProperty(d) && (e = r[d], this[d] = e ? e(n) : n[d]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Do : Nc, this.isPropagationStopped = Nc, this;
    }
    return ct(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Do);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Do);
      },
      persist: function() {
      },
      isPersistent: Do
    }), t;
  }
  var Fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ti = ie(Fn), Eo = ct({}, Fn, {
    view: 0,
    detail: 0
  }), Hp = ie(Eo), na, oa, Un, Ps = ct({}, Eo, {
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
    getModifierState: Pi,
    button: 0,
    buttons: 0,
    relatedTarget: function(r) {
      return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
    },
    movementX: function(r) {
      return "movementX" in r ? r.movementX : (r !== Un && (Un && r.type === "mousemove" ? (na = r.screenX - Un.screenX, oa = r.screenY - Un.screenY) : oa = na = 0, Un = r), na);
    },
    movementY: function(r) {
      return "movementY" in r ? r.movementY : oa;
    }
  }), Fc = ie(Ps), qp = ct({}, Ps, {
    dataTransfer: 0
  }), Yp = ie(qp), Xp = ct({}, Eo, {
    relatedTarget: 0
  }), sa = ie(Xp), Kp = ct({}, Fn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zp = ie(Kp), Jp = ct({}, Fn, {
    clipboardData: function(r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    }
  }), Gp = ie(Jp), tw = ct({}, Fn, {
    data: 0
  }), Tc = ie(tw), ew = {
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
  }, _w = {
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
  }, rw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nw(r) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(r) : (r = rw[r]) ? !!t[r] : false;
  }
  function Pi() {
    return nw;
  }
  var ow = ct({}, Eo, {
    key: function(r) {
      if (r.key) {
        var t = ew[r.key] || r.key;
        if (t !== "Unidentified") return t;
      }
      return r.type === "keypress" ? (r = Go(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? _w[r.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pi,
    charCode: function(r) {
      return r.type === "keypress" ? Go(r) : 0;
    },
    keyCode: function(r) {
      return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    },
    which: function(r) {
      return r.type === "keypress" ? Go(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    }
  }), sw = ie(ow), aw = ct({}, Ps, {
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
  }), Pc = ie(aw), iw = ct({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pi
  }), cw = ie(iw), dw = ct({}, Fn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lw = ie(dw), uw = ct({}, Ps, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pw = ie(uw), ww = [
    9,
    13,
    27,
    32
  ], Ri = c_ && "CompositionEvent" in window, Xn = null;
  c_ && "documentMode" in document && (Xn = document.documentMode);
  var fw = c_ && "TextEvent" in window && !Xn, yl = c_ && (!Ri || Xn && 8 < Xn && 11 >= Xn), Rc = " ", $c = false;
  function ml(r, t) {
    switch (r) {
      case "keyup":
        return ww.indexOf(t.keyCode) !== -1;
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
  function vl(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var nn = false;
  function gw(r, t) {
    switch (r) {
      case "compositionend":
        return vl(t);
      case "keypress":
        return t.which !== 32 ? null : ($c = true, Rc);
      case "textInput":
        return r = t.data, r === Rc && $c ? null : r;
      default:
        return null;
    }
  }
  function bw(r, t) {
    if (nn) return r === "compositionend" || !Ri && ml(r, t) ? (r = hl(), Jo = Fi = cr = null, nn = false, r) : null;
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
        return yl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hw = {
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
  function Dc(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t === "input" ? !!hw[r.type] : t === "textarea";
  }
  function kl(r, t, e, s) {
    Gd(s), t = fs(t, "onChange"), 0 < t.length && (e = new Ti("onChange", "change", null, e, s), r.push({
      event: e,
      listeners: t
    }));
  }
  var Kn = null, uo = null;
  function yw(r) {
    Tl(r, 0);
  }
  function Rs(r) {
    var t = an(r);
    if (Hd(t)) return r;
  }
  function mw(r, t) {
    if (r === "change") return t;
  }
  var xl = false;
  if (c_) {
    var aa;
    if (c_) {
      var ia = "oninput" in document;
      if (!ia) {
        var Ic = document.createElement("div");
        Ic.setAttribute("oninput", "return;"), ia = typeof Ic.oninput == "function";
      }
      aa = ia;
    } else aa = false;
    xl = aa && (!document.documentMode || 9 < document.documentMode);
  }
  function Uc() {
    Kn && (Kn.detachEvent("onpropertychange", jl), uo = Kn = null);
  }
  function jl(r) {
    if (r.propertyName === "value" && Rs(uo)) {
      var t = [];
      kl(t, uo, r, zi(r)), rl(yw, t);
    }
  }
  function vw(r, t, e) {
    r === "focusin" ? (Uc(), Kn = t, uo = e, Kn.attachEvent("onpropertychange", jl)) : r === "focusout" && Uc();
  }
  function kw(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Rs(uo);
  }
  function xw(r, t) {
    if (r === "click") return Rs(t);
  }
  function jw(r, t) {
    if (r === "input" || r === "change") return Rs(t);
  }
  function Sw(r, t) {
    return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
  }
  var Oe = typeof Object.is == "function" ? Object.is : Sw;
  function po(r, t) {
    if (Oe(r, t)) return true;
    if (typeof r != "object" || r === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(r), s = Object.keys(t);
    if (e.length !== s.length) return false;
    for (s = 0; s < e.length; s++) {
      var o = e[s];
      if (!ja.call(t, o) || !Oe(r[o], t[o])) return false;
    }
    return true;
  }
  function Mc(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Wc(r, t) {
    var e = Mc(r);
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
      e = Mc(e);
    }
  }
  function Sl(r, t) {
    return r && t ? r === t ? true : r && r.nodeType === 3 ? false : t && t.nodeType === 3 ? Sl(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : false : false;
  }
  function El() {
    for (var r = window, t = is(); t instanceof r.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = false;
      }
      if (e) r = t.contentWindow;
      else break;
      t = is(r.document);
    }
    return t;
  }
  function $i(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
  }
  function Ew(r) {
    var t = El(), e = r.focusedElem, s = r.selectionRange;
    if (t !== e && e && e.ownerDocument && Sl(e.ownerDocument.documentElement, e)) {
      if (s !== null && $i(e)) {
        if (t = s.start, r = s.end, r === void 0 && (r = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
        else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var o = e.textContent.length, n = Math.min(s.start, o);
          s = s.end === void 0 ? n : Math.min(s.end, o), !r.extend && n > s && (o = s, s = n, n = o), o = Wc(e, n);
          var c = Wc(e, s);
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
  var zw = c_ && "documentMode" in document && 11 >= document.documentMode, on = null, Va = null, Zn = null, Ba = false;
  function Qc(r, t, e) {
    var s = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ba || on == null || on !== is(s) || (s = on, "selectionStart" in s && $i(s) ? s = {
      start: s.selectionStart,
      end: s.selectionEnd
    } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Zn && po(Zn, s) || (Zn = s, s = fs(Va, "onSelect"), 0 < s.length && (t = new Ti("onSelect", "select", null, t, e), r.push({
      event: t,
      listeners: s
    }), t.target = on)));
  }
  function Io(r, t) {
    var e = {};
    return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
  }
  var sn = {
    animationend: Io("Animation", "AnimationEnd"),
    animationiteration: Io("Animation", "AnimationIteration"),
    animationstart: Io("Animation", "AnimationStart"),
    transitionend: Io("Transition", "TransitionEnd")
  }, ca = {}, zl = {};
  c_ && (zl = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);
  function $s(r) {
    if (ca[r]) return ca[r];
    if (!sn[r]) return r;
    var t = sn[r], e;
    for (e in t) if (t.hasOwnProperty(e) && e in zl) return ca[r] = t[e];
    return r;
  }
  var Cl = $s("animationend"), Ol = $s("animationiteration"), Ll = $s("animationstart"), Nl = $s("transitionend"), Fl = /* @__PURE__ */ new Map(), Vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function xr(r, t) {
    Fl.set(r, t), Jr(t, [
      r
    ]);
  }
  for (var da = 0; da < Vc.length; da++) {
    var la = Vc[da], Cw = la.toLowerCase(), Ow = la[0].toUpperCase() + la.slice(1);
    xr(Cw, "on" + Ow);
  }
  xr(Cl, "onAnimationEnd");
  xr(Ol, "onAnimationIteration");
  xr(Ll, "onAnimationStart");
  xr("dblclick", "onDoubleClick");
  xr("focusin", "onFocus");
  xr("focusout", "onBlur");
  xr(Nl, "onTransitionEnd");
  jn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  jn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  jn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  jn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Jr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Jr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Jr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Jr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Jr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Jr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
  function Bc(r, t, e) {
    var s = r.type || "unknown-event";
    r.currentTarget = e, Cp(s, t, void 0, r), r.currentTarget = null;
  }
  function Tl(r, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < r.length; e++) {
      var s = r[e], o = s.event;
      s = s.listeners;
      t: {
        var n = void 0;
        if (t) for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c], u = d.instance, l = d.currentTarget;
          if (d = d.listener, u !== n && o.isPropagationStopped()) break t;
          Bc(o, d, l), n = u;
        }
        else for (c = 0; c < s.length; c++) {
          if (d = s[c], u = d.instance, l = d.currentTarget, d = d.listener, u !== n && o.isPropagationStopped()) break t;
          Bc(o, d, l), n = u;
        }
      }
    }
    if (ds) throw r = Ua, ds = false, Ua = null, r;
  }
  function tt(r, t) {
    var e = t[Xa];
    e === void 0 && (e = t[Xa] = /* @__PURE__ */ new Set());
    var s = r + "__bubble";
    e.has(s) || (Pl(t, r, 2, false), e.add(s));
  }
  function ua(r, t, e) {
    var s = 0;
    t && (s |= 4), Pl(e, r, s, t);
  }
  var Uo = "_reactListening" + Math.random().toString(36).slice(2);
  function wo(r) {
    if (!r[Uo]) {
      r[Uo] = true, Wd.forEach(function(e) {
        e !== "selectionchange" && (Lw.has(e) || ua(e, false, r), ua(e, true, r));
      });
      var t = r.nodeType === 9 ? r : r.ownerDocument;
      t === null || t[Uo] || (t[Uo] = true, ua("selectionchange", false, t));
    }
  }
  function Pl(r, t, e, s) {
    switch (bl(t)) {
      case 1:
        var o = Bp;
        break;
      case 4:
        o = Ap;
        break;
      default:
        o = Ni;
    }
    e = o.bind(null, t, e, r), o = void 0, !Ia || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), s ? o !== void 0 ? r.addEventListener(t, e, {
      capture: true,
      passive: o
    }) : r.addEventListener(t, e, true) : o !== void 0 ? r.addEventListener(t, e, {
      passive: o
    }) : r.addEventListener(t, e, false);
  }
  function pa(r, t, e, s, o) {
    var n = s;
    if (!(t & 1) && !(t & 2) && s !== null) t: for (; ; ) {
      if (s === null) return;
      var c = s.tag;
      if (c === 3 || c === 4) {
        var d = s.stateNode.containerInfo;
        if (d === o || d.nodeType === 8 && d.parentNode === o) break;
        if (c === 4) for (c = s.return; c !== null; ) {
          var u = c.tag;
          if ((u === 3 || u === 4) && (u = c.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
          c = c.return;
        }
        for (; d !== null; ) {
          if (c = Fr(d), c === null) return;
          if (u = c.tag, u === 5 || u === 6) {
            s = n = c;
            continue t;
          }
          d = d.parentNode;
        }
      }
      s = s.return;
    }
    rl(function() {
      var l = n, m = zi(e), x = [];
      t: {
        var k = Fl.get(r);
        if (k !== void 0) {
          var O = Ti, N = r;
          switch (r) {
            case "keypress":
              if (Go(e) === 0) break t;
            case "keydown":
            case "keyup":
              O = sw;
              break;
            case "focusin":
              N = "focus", O = sa;
              break;
            case "focusout":
              N = "blur", O = sa;
              break;
            case "beforeblur":
            case "afterblur":
              O = sa;
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
              O = Fc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Yp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = cw;
              break;
            case Cl:
            case Ol:
            case Ll:
              O = Zp;
              break;
            case Nl:
              O = lw;
              break;
            case "scroll":
              O = Hp;
              break;
            case "wheel":
              O = pw;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Gp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Pc;
          }
          var F = (t & 4) !== 0, I = !F && r === "scroll", b = F ? k !== null ? k + "Capture" : null : k;
          F = [];
          for (var h = l, v; h !== null; ) {
            v = h;
            var E = v.stateNode;
            if (v.tag === 5 && E !== null && (v = E, b !== null && (E = ao(h, b), E != null && F.push(fo(h, E, v)))), I) break;
            h = h.return;
          }
          0 < F.length && (k = new O(k, N, null, e, m), x.push({
            event: k,
            listeners: F
          }));
        }
      }
      if (!(t & 7)) {
        t: {
          if (k = r === "mouseover" || r === "pointerover", O = r === "mouseout" || r === "pointerout", k && e !== $a && (N = e.relatedTarget || e.fromElement) && (Fr(N) || N[d_])) break t;
          if ((O || k) && (k = m.window === m ? m : (k = m.ownerDocument) ? k.defaultView || k.parentWindow : window, O ? (N = e.relatedTarget || e.toElement, O = l, N = N ? Fr(N) : null, N !== null && (I = Gr(N), N !== I || N.tag !== 5 && N.tag !== 6) && (N = null)) : (O = null, N = l), O !== N)) {
            if (F = Fc, E = "onMouseLeave", b = "onMouseEnter", h = "mouse", (r === "pointerout" || r === "pointerover") && (F = Pc, E = "onPointerLeave", b = "onPointerEnter", h = "pointer"), I = O == null ? k : an(O), v = N == null ? k : an(N), k = new F(E, h + "leave", O, e, m), k.target = I, k.relatedTarget = v, E = null, Fr(m) === l && (F = new F(b, h + "enter", N, e, m), F.target = v, F.relatedTarget = I, E = F), I = E, O && N) e: {
              for (F = O, b = N, h = 0, v = F; v; v = tn(v)) h++;
              for (v = 0, E = b; E; E = tn(E)) v++;
              for (; 0 < h - v; ) F = tn(F), h--;
              for (; 0 < v - h; ) b = tn(b), v--;
              for (; h--; ) {
                if (F === b || b !== null && F === b.alternate) break e;
                F = tn(F), b = tn(b);
              }
              F = null;
            }
            else F = null;
            O !== null && Ac(x, k, O, F, false), N !== null && I !== null && Ac(x, I, N, F, true);
          }
        }
        t: {
          if (k = l ? an(l) : window, O = k.nodeName && k.nodeName.toLowerCase(), O === "select" || O === "input" && k.type === "file") var L = mw;
          else if (Dc(k)) if (xl) L = jw;
          else {
            L = kw;
            var P = vw;
          }
          else (O = k.nodeName) && O.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (L = xw);
          if (L && (L = L(r, l))) {
            kl(x, L, e, m);
            break t;
          }
          P && P(r, k, l), r === "focusout" && (P = k._wrapperState) && P.controlled && k.type === "number" && Na(k, "number", k.value);
        }
        switch (P = l ? an(l) : window, r) {
          case "focusin":
            (Dc(P) || P.contentEditable === "true") && (on = P, Va = l, Zn = null);
            break;
          case "focusout":
            Zn = Va = on = null;
            break;
          case "mousedown":
            Ba = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ba = false, Qc(x, e, m);
            break;
          case "selectionchange":
            if (zw) break;
          case "keydown":
          case "keyup":
            Qc(x, e, m);
        }
        var R;
        if (Ri) t: {
          switch (r) {
            case "compositionstart":
              var D = "onCompositionStart";
              break t;
            case "compositionend":
              D = "onCompositionEnd";
              break t;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break t;
          }
          D = void 0;
        }
        else nn ? ml(r, e) && (D = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && (D = "onCompositionStart");
        D && (yl && e.locale !== "ko" && (nn || D !== "onCompositionStart" ? D === "onCompositionEnd" && nn && (R = hl()) : (cr = m, Fi = "value" in cr ? cr.value : cr.textContent, nn = true)), P = fs(l, D), 0 < P.length && (D = new Tc(D, r, null, e, m), x.push({
          event: D,
          listeners: P
        }), R ? D.data = R : (R = vl(e), R !== null && (D.data = R)))), (R = fw ? gw(r, e) : bw(r, e)) && (l = fs(l, "onBeforeInput"), 0 < l.length && (m = new Tc("onBeforeInput", "beforeinput", null, e, m), x.push({
          event: m,
          listeners: l
        }), m.data = R));
      }
      Tl(x, t);
    });
  }
  function fo(r, t, e) {
    return {
      instance: r,
      listener: t,
      currentTarget: e
    };
  }
  function fs(r, t) {
    for (var e = t + "Capture", s = []; r !== null; ) {
      var o = r, n = o.stateNode;
      o.tag === 5 && n !== null && (o = n, n = ao(r, e), n != null && s.unshift(fo(r, n, o)), n = ao(r, t), n != null && s.push(fo(r, n, o))), r = r.return;
    }
    return s;
  }
  function tn(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Ac(r, t, e, s, o) {
    for (var n = t._reactName, c = []; e !== null && e !== s; ) {
      var d = e, u = d.alternate, l = d.stateNode;
      if (u !== null && u === s) break;
      d.tag === 5 && l !== null && (d = l, o ? (u = ao(e, n), u != null && c.unshift(fo(e, u, d))) : o || (u = ao(e, n), u != null && c.push(fo(e, u, d)))), e = e.return;
    }
    c.length !== 0 && r.push({
      event: t,
      listeners: c
    });
  }
  var Nw = /\r\n?/g, Fw = /\u0000|\uFFFD/g;
  function Hc(r) {
    return (typeof r == "string" ? r : "" + r).replace(Nw, `
`).replace(Fw, "");
  }
  function Mo(r, t, e) {
    if (t = Hc(t), Hc(r) !== t && e) throw Error(z(425));
  }
  function gs() {
  }
  var Aa = null, Ha = null;
  function qa(r, t) {
    return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ya = typeof setTimeout == "function" ? setTimeout : void 0, Tw = typeof clearTimeout == "function" ? clearTimeout : void 0, qc = typeof Promise == "function" ? Promise : void 0, Pw = typeof queueMicrotask == "function" ? queueMicrotask : typeof qc < "u" ? function(r) {
    return qc.resolve(null).then(r).catch(Rw);
  } : Ya;
  function Rw(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function wa(r, t) {
    var e = t, s = 0;
    do {
      var o = e.nextSibling;
      if (r.removeChild(e), o && o.nodeType === 8) if (e = o.data, e === "/$") {
        if (s === 0) {
          r.removeChild(o), lo(t);
          return;
        }
        s--;
      } else e !== "$" && e !== "$?" && e !== "$!" || s++;
      e = o;
    } while (e);
    lo(t);
  }
  function gr(r) {
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
  function Yc(r) {
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
  var Tn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + Tn, go = "__reactProps$" + Tn, d_ = "__reactContainer$" + Tn, Xa = "__reactEvents$" + Tn, $w = "__reactListeners$" + Tn, Dw = "__reactHandles$" + Tn;
  function Fr(r) {
    var t = r[$e];
    if (t) return t;
    for (var e = r.parentNode; e; ) {
      if (t = e[d_] || e[$e]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (r = Yc(r); r !== null; ) {
          if (e = r[$e]) return e;
          r = Yc(r);
        }
        return t;
      }
      r = e, e = r.parentNode;
    }
    return null;
  }
  function zo(r) {
    return r = r[$e] || r[d_], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function an(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(z(33));
  }
  function Ds(r) {
    return r[go] || null;
  }
  var Ka = [], cn = -1;
  function jr(r) {
    return {
      current: r
    };
  }
  function rt(r) {
    0 > cn || (r.current = Ka[cn], Ka[cn] = null, cn--);
  }
  function G(r, t) {
    cn++, Ka[cn] = r.current, r.current = t;
  }
  var kr = {}, Dt = jr(kr), Jt = jr(false), qr = kr;
  function Sn(r, t) {
    var e = r.type.contextTypes;
    if (!e) return kr;
    var s = r.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, n;
    for (n in e) o[n] = t[n];
    return s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Gt(r) {
    return r = r.childContextTypes, r != null;
  }
  function bs() {
    rt(Jt), rt(Dt);
  }
  function Xc(r, t, e) {
    if (Dt.current !== kr) throw Error(z(168));
    G(Dt, t), G(Jt, e);
  }
  function Rl(r, t, e) {
    var s = r.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return e;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(z(108, vp(r) || "Unknown", o));
    return ct({}, e, s);
  }
  function hs(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || kr, qr = Dt.current, G(Dt, r), G(Jt, Jt.current), true;
  }
  function Kc(r, t, e) {
    var s = r.stateNode;
    if (!s) throw Error(z(169));
    e ? (r = Rl(r, t, qr), s.__reactInternalMemoizedMergedChildContext = r, rt(Jt), rt(Dt), G(Dt, r)) : rt(Jt), G(Jt, e);
  }
  var He = null, Is = false, fa = false;
  function $l(r) {
    He === null ? He = [
      r
    ] : He.push(r);
  }
  function Iw(r) {
    Is = true, $l(r);
  }
  function Sr() {
    if (!fa && He !== null) {
      fa = true;
      var r = 0, t = K;
      try {
        var e = He;
        for (K = 1; r < e.length; r++) {
          var s = e[r];
          do
            s = s(true);
          while (s !== null);
        }
        He = null, Is = false;
      } catch (o) {
        throw He !== null && (He = He.slice(r + 1)), al(Ci, Sr), o;
      } finally {
        K = t, fa = false;
      }
    }
    return null;
  }
  var dn = [], ln = 0, ys = null, ms = 0, ue = [], pe = 0, Yr = null, o_ = 1, s_ = "";
  function zr(r, t) {
    dn[ln++] = ms, dn[ln++] = ys, ys = r, ms = t;
  }
  function Dl(r, t, e) {
    ue[pe++] = o_, ue[pe++] = s_, ue[pe++] = Yr, Yr = r;
    var s = o_;
    r = s_;
    var o = 32 - ze(s) - 1;
    s &= ~(1 << o), e += 1;
    var n = 32 - ze(t) + o;
    if (30 < n) {
      var c = o - o % 5;
      n = (s & (1 << c) - 1).toString(32), s >>= c, o -= c, o_ = 1 << 32 - ze(t) + o | e << o | s, s_ = n + r;
    } else o_ = 1 << n | e << o | s, s_ = r;
  }
  function Di(r) {
    r.return !== null && (zr(r, 1), Dl(r, 1, 0));
  }
  function Ii(r) {
    for (; r === ys; ) ys = dn[--ln], dn[ln] = null, ms = dn[--ln], dn[ln] = null;
    for (; r === Yr; ) Yr = ue[--pe], ue[pe] = null, s_ = ue[--pe], ue[pe] = null, o_ = ue[--pe], ue[pe] = null;
  }
  var ne = null, re = null, st = false, Se = null;
  function Il(r, t) {
    var e = fe(5, null, null, 0);
    e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [
      e
    ], r.flags |= 16) : t.push(e);
  }
  function Zc(r, t) {
    switch (r.tag) {
      case 5:
        var e = r.type;
        return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, ne = r, re = gr(t.firstChild), true) : false;
      case 6:
        return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, ne = r, re = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Yr !== null ? {
          id: o_,
          overflow: s_
        } : null, r.memoizedState = {
          dehydrated: t,
          treeContext: e,
          retryLane: 1073741824
        }, e = fe(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, ne = r, re = null, true) : false;
      default:
        return false;
    }
  }
  function Za(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function Ja(r) {
    if (st) {
      var t = re;
      if (t) {
        var e = t;
        if (!Zc(r, t)) {
          if (Za(r)) throw Error(z(418));
          t = gr(e.nextSibling);
          var s = ne;
          t && Zc(r, t) ? Il(s, e) : (r.flags = r.flags & -4097 | 2, st = false, ne = r);
        }
      } else {
        if (Za(r)) throw Error(z(418));
        r.flags = r.flags & -4097 | 2, st = false, ne = r;
      }
    }
  }
  function Jc(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    ne = r;
  }
  function Wo(r) {
    if (r !== ne) return false;
    if (!st) return Jc(r), st = true, false;
    var t;
    if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !qa(r.type, r.memoizedProps)), t && (t = re)) {
      if (Za(r)) throw Ul(), Error(z(418));
      for (; t; ) Il(r, t), t = gr(t.nextSibling);
    }
    if (Jc(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(z(317));
      t: {
        for (r = r.nextSibling, t = 0; r; ) {
          if (r.nodeType === 8) {
            var e = r.data;
            if (e === "/$") {
              if (t === 0) {
                re = gr(r.nextSibling);
                break t;
              }
              t--;
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          }
          r = r.nextSibling;
        }
        re = null;
      }
    } else re = ne ? gr(r.stateNode.nextSibling) : null;
    return true;
  }
  function Ul() {
    for (var r = re; r; ) r = gr(r.nextSibling);
  }
  function En() {
    re = ne = null, st = false;
  }
  function Ui(r) {
    Se === null ? Se = [
      r
    ] : Se.push(r);
  }
  var Uw = p_.ReactCurrentBatchConfig;
  function Mn(r, t, e) {
    if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (e._owner) {
        if (e = e._owner, e) {
          if (e.tag !== 1) throw Error(z(309));
          var s = e.stateNode;
        }
        if (!s) throw Error(z(147, r));
        var o = s, n = "" + r;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === n ? t.ref : (t = function(c) {
          var d = o.refs;
          c === null ? delete d[n] : d[n] = c;
        }, t._stringRef = n, t);
      }
      if (typeof r != "string") throw Error(z(284));
      if (!e._owner) throw Error(z(290, r));
    }
    return r;
  }
  function Qo(r, t) {
    throw r = Object.prototype.toString.call(t), Error(z(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
  }
  function Gc(r) {
    var t = r._init;
    return t(r._payload);
  }
  function Ml(r) {
    function t(b, h) {
      if (r) {
        var v = b.deletions;
        v === null ? (b.deletions = [
          h
        ], b.flags |= 16) : v.push(h);
      }
    }
    function e(b, h) {
      if (!r) return null;
      for (; h !== null; ) t(b, h), h = h.sibling;
      return null;
    }
    function s(b, h) {
      for (b = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? b.set(h.key, h) : b.set(h.index, h), h = h.sibling;
      return b;
    }
    function o(b, h) {
      return b = mr(b, h), b.index = 0, b.sibling = null, b;
    }
    function n(b, h, v) {
      return b.index = v, r ? (v = b.alternate, v !== null ? (v = v.index, v < h ? (b.flags |= 2, h) : v) : (b.flags |= 2, h)) : (b.flags |= 1048576, h);
    }
    function c(b) {
      return r && b.alternate === null && (b.flags |= 2), b;
    }
    function d(b, h, v, E) {
      return h === null || h.tag !== 6 ? (h = ka(v, b.mode, E), h.return = b, h) : (h = o(h, v), h.return = b, h);
    }
    function u(b, h, v, E) {
      var L = v.type;
      return L === rn ? m(b, h, v.props.children, E, v.key) : h !== null && (h.elementType === L || typeof L == "object" && L !== null && L.$$typeof === h_ && Gc(L) === h.type) ? (E = o(h, v.props), E.ref = Mn(b, h, v), E.return = b, E) : (E = ss(v.type, v.key, v.props, null, b.mode, E), E.ref = Mn(b, h, v), E.return = b, E);
    }
    function l(b, h, v, E) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = xa(v, b.mode, E), h.return = b, h) : (h = o(h, v.children || []), h.return = b, h);
    }
    function m(b, h, v, E, L) {
      return h === null || h.tag !== 7 ? (h = Hr(v, b.mode, E, L), h.return = b, h) : (h = o(h, v), h.return = b, h);
    }
    function x(b, h, v) {
      if (typeof h == "string" && h !== "" || typeof h == "number") return h = ka("" + h, b.mode, v), h.return = b, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case No:
            return v = ss(h.type, h.key, h.props, null, b.mode, v), v.ref = Mn(b, null, h), v.return = b, v;
          case _n:
            return h = xa(h, b.mode, v), h.return = b, h;
          case h_:
            var E = h._init;
            return x(b, E(h._payload), v);
        }
        if (Bn(h) || Rn(h)) return h = Hr(h, b.mode, v, null), h.return = b, h;
        Qo(b, h);
      }
      return null;
    }
    function k(b, h, v, E) {
      var L = h !== null ? h.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return L !== null ? null : d(b, h, "" + v, E);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case No:
            return v.key === L ? u(b, h, v, E) : null;
          case _n:
            return v.key === L ? l(b, h, v, E) : null;
          case h_:
            return L = v._init, k(b, h, L(v._payload), E);
        }
        if (Bn(v) || Rn(v)) return L !== null ? null : m(b, h, v, E, null);
        Qo(b, v);
      }
      return null;
    }
    function O(b, h, v, E, L) {
      if (typeof E == "string" && E !== "" || typeof E == "number") return b = b.get(v) || null, d(h, b, "" + E, L);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case No:
            return b = b.get(E.key === null ? v : E.key) || null, u(h, b, E, L);
          case _n:
            return b = b.get(E.key === null ? v : E.key) || null, l(h, b, E, L);
          case h_:
            var P = E._init;
            return O(b, h, v, P(E._payload), L);
        }
        if (Bn(E) || Rn(E)) return b = b.get(v) || null, m(h, b, E, L, null);
        Qo(h, E);
      }
      return null;
    }
    function N(b, h, v, E) {
      for (var L = null, P = null, R = h, D = h = 0, Z = null; R !== null && D < v.length; D++) {
        R.index > D ? (Z = R, R = null) : Z = R.sibling;
        var V = k(b, R, v[D], E);
        if (V === null) {
          R === null && (R = Z);
          break;
        }
        r && R && V.alternate === null && t(b, R), h = n(V, h, D), P === null ? L = V : P.sibling = V, P = V, R = Z;
      }
      if (D === v.length) return e(b, R), st && zr(b, D), L;
      if (R === null) {
        for (; D < v.length; D++) R = x(b, v[D], E), R !== null && (h = n(R, h, D), P === null ? L = R : P.sibling = R, P = R);
        return st && zr(b, D), L;
      }
      for (R = s(b, R); D < v.length; D++) Z = O(R, b, D, v[D], E), Z !== null && (r && Z.alternate !== null && R.delete(Z.key === null ? D : Z.key), h = n(Z, h, D), P === null ? L = Z : P.sibling = Z, P = Z);
      return r && R.forEach(function(nt) {
        return t(b, nt);
      }), st && zr(b, D), L;
    }
    function F(b, h, v, E) {
      var L = Rn(v);
      if (typeof L != "function") throw Error(z(150));
      if (v = L.call(v), v == null) throw Error(z(151));
      for (var P = L = null, R = h, D = h = 0, Z = null, V = v.next(); R !== null && !V.done; D++, V = v.next()) {
        R.index > D ? (Z = R, R = null) : Z = R.sibling;
        var nt = k(b, R, V.value, E);
        if (nt === null) {
          R === null && (R = Z);
          break;
        }
        r && R && nt.alternate === null && t(b, R), h = n(nt, h, D), P === null ? L = nt : P.sibling = nt, P = nt, R = Z;
      }
      if (V.done) return e(b, R), st && zr(b, D), L;
      if (R === null) {
        for (; !V.done; D++, V = v.next()) V = x(b, V.value, E), V !== null && (h = n(V, h, D), P === null ? L = V : P.sibling = V, P = V);
        return st && zr(b, D), L;
      }
      for (R = s(b, R); !V.done; D++, V = v.next()) V = O(R, b, D, V.value, E), V !== null && (r && V.alternate !== null && R.delete(V.key === null ? D : V.key), h = n(V, h, D), P === null ? L = V : P.sibling = V, P = V);
      return r && R.forEach(function(gt) {
        return t(b, gt);
      }), st && zr(b, D), L;
    }
    function I(b, h, v, E) {
      if (typeof v == "object" && v !== null && v.type === rn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case No:
            t: {
              for (var L = v.key, P = h; P !== null; ) {
                if (P.key === L) {
                  if (L = v.type, L === rn) {
                    if (P.tag === 7) {
                      e(b, P.sibling), h = o(P, v.props.children), h.return = b, b = h;
                      break t;
                    }
                  } else if (P.elementType === L || typeof L == "object" && L !== null && L.$$typeof === h_ && Gc(L) === P.type) {
                    e(b, P.sibling), h = o(P, v.props), h.ref = Mn(b, P, v), h.return = b, b = h;
                    break t;
                  }
                  e(b, P);
                  break;
                } else t(b, P);
                P = P.sibling;
              }
              v.type === rn ? (h = Hr(v.props.children, b.mode, E, v.key), h.return = b, b = h) : (E = ss(v.type, v.key, v.props, null, b.mode, E), E.ref = Mn(b, h, v), E.return = b, b = E);
            }
            return c(b);
          case _n:
            t: {
              for (P = v.key; h !== null; ) {
                if (h.key === P) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                  e(b, h.sibling), h = o(h, v.children || []), h.return = b, b = h;
                  break t;
                } else {
                  e(b, h);
                  break;
                }
                else t(b, h);
                h = h.sibling;
              }
              h = xa(v, b.mode, E), h.return = b, b = h;
            }
            return c(b);
          case h_:
            return P = v._init, I(b, h, P(v._payload), E);
        }
        if (Bn(v)) return N(b, h, v, E);
        if (Rn(v)) return F(b, h, v, E);
        Qo(b, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (e(b, h.sibling), h = o(h, v), h.return = b, b = h) : (e(b, h), h = ka(v, b.mode, E), h.return = b, b = h), c(b)) : e(b, h);
    }
    return I;
  }
  var zn = Ml(true), Wl = Ml(false), vs = jr(null), ks = null, un = null, Mi = null;
  function Wi() {
    Mi = un = ks = null;
  }
  function Qi(r) {
    var t = vs.current;
    rt(vs), r._currentValue = t;
  }
  function Ga(r, t, e) {
    for (; r !== null; ) {
      var s = r.alternate;
      if ((r.childLanes & t) !== t ? (r.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), r === e) break;
      r = r.return;
    }
  }
  function mn(r, t) {
    ks = r, Mi = un = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (Zt = true), r.firstContext = null);
  }
  function he(r) {
    var t = r._currentValue;
    if (Mi !== r) if (r = {
      context: r,
      memoizedValue: t,
      next: null
    }, un === null) {
      if (ks === null) throw Error(z(308));
      un = r, ks.dependencies = {
        lanes: 0,
        firstContext: r
      };
    } else un = un.next = r;
    return t;
  }
  var Tr = null;
  function Vi(r) {
    Tr === null ? Tr = [
      r
    ] : Tr.push(r);
  }
  function Ql(r, t, e, s) {
    var o = t.interleaved;
    return o === null ? (e.next = e, Vi(t)) : (e.next = o.next, o.next = e), t.interleaved = e, l_(r, s);
  }
  function l_(r, t) {
    r.lanes |= t;
    var e = r.alternate;
    for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; ) r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var y_ = false;
  function Bi(r) {
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
  function Vl(r, t) {
    r = r.updateQueue, t.updateQueue === r && (t.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects
    });
  }
  function i_(r, t) {
    return {
      eventTime: r,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function br(r, t, e) {
    var s = r.updateQueue;
    if (s === null) return null;
    if (s = s.shared, Y & 2) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, l_(r, e);
    }
    return o = s.interleaved, o === null ? (t.next = t, Vi(s)) : (t.next = o.next, o.next = t), s.interleaved = t, l_(r, e);
  }
  function ts(r, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Oi(r, e);
    }
  }
  function td(r, t) {
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
  function xs(r, t, e, s) {
    var o = r.updateQueue;
    y_ = false;
    var n = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var u = d, l = u.next;
      u.next = null, c === null ? n = l : c.next = l, c = u;
      var m = r.alternate;
      m !== null && (m = m.updateQueue, d = m.lastBaseUpdate, d !== c && (d === null ? m.firstBaseUpdate = l : d.next = l, m.lastBaseUpdate = u));
    }
    if (n !== null) {
      var x = o.baseState;
      c = 0, m = l = u = null, d = n;
      do {
        var k = d.lane, O = d.eventTime;
        if ((s & k) === k) {
          m !== null && (m = m.next = {
            eventTime: O,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          t: {
            var N = r, F = d;
            switch (k = t, O = e, F.tag) {
              case 1:
                if (N = F.payload, typeof N == "function") {
                  x = N.call(O, x, k);
                  break t;
                }
                x = N;
                break t;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = F.payload, k = typeof N == "function" ? N.call(O, x, k) : N, k == null) break t;
                x = ct({}, x, k);
                break t;
              case 2:
                y_ = true;
            }
          }
          d.callback !== null && d.lane !== 0 && (r.flags |= 64, k = o.effects, k === null ? o.effects = [
            d
          ] : k.push(d));
        } else O = {
          eventTime: O,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }, m === null ? (l = m = O, u = x) : m = m.next = O, c |= k;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null) break;
          k = d, d = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
        }
      } while (true);
      if (m === null && (u = x), o.baseState = u, o.firstBaseUpdate = l, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else n === null && (o.shared.lanes = 0);
      Kr |= c, r.lanes = c, r.memoizedState = x;
    }
  }
  function ed(r, t, e) {
    if (r = t.effects, t.effects = null, r !== null) for (t = 0; t < r.length; t++) {
      var s = r[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = e, typeof o != "function") throw Error(z(191, o));
        o.call(s);
      }
    }
  }
  var Co = {}, Qe = jr(Co), bo = jr(Co), ho = jr(Co);
  function Pr(r) {
    if (r === Co) throw Error(z(174));
    return r;
  }
  function Ai(r, t) {
    switch (G(ho, t), G(bo, r), G(Qe, Co), r = t.nodeType, r) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ta(null, "");
        break;
      default:
        r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = Ta(t, r);
    }
    rt(Qe), G(Qe, t);
  }
  function Cn() {
    rt(Qe), rt(bo), rt(ho);
  }
  function Bl(r) {
    Pr(ho.current);
    var t = Pr(Qe.current), e = Ta(t, r.type);
    t !== e && (G(bo, r), G(Qe, e));
  }
  function Hi(r) {
    bo.current === r && (rt(Qe), rt(bo));
  }
  var at = jr(0);
  function js(r) {
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
  var ga = [];
  function qi() {
    for (var r = 0; r < ga.length; r++) ga[r]._workInProgressVersionPrimary = null;
    ga.length = 0;
  }
  var es = p_.ReactCurrentDispatcher, ba = p_.ReactCurrentBatchConfig, Xr = 0, it = null, bt = null, kt = null, Ss = false, Jn = false, yo = 0, Mw = 0;
  function Ft() {
    throw Error(z(321));
  }
  function Yi(r, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < r.length; e++) if (!Oe(r[e], t[e])) return false;
    return true;
  }
  function Xi(r, t, e, s, o, n) {
    if (Xr = n, it = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, es.current = r === null || r.memoizedState === null ? Bw : Aw, r = e(s, o), Jn) {
      n = 0;
      do {
        if (Jn = false, yo = 0, 25 <= n) throw Error(z(301));
        n += 1, kt = bt = null, t.updateQueue = null, es.current = Hw, r = e(s, o);
      } while (Jn);
    }
    if (es.current = Es, t = bt !== null && bt.next !== null, Xr = 0, kt = bt = it = null, Ss = false, t) throw Error(z(300));
    return r;
  }
  function Ki() {
    var r = yo !== 0;
    return yo = 0, r;
  }
  function Te() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return kt === null ? it.memoizedState = kt = r : kt = kt.next = r, kt;
  }
  function ye() {
    if (bt === null) {
      var r = it.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = bt.next;
    var t = kt === null ? it.memoizedState : kt.next;
    if (t !== null) kt = t, bt = r;
    else {
      if (r === null) throw Error(z(310));
      bt = r, r = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }, kt === null ? it.memoizedState = kt = r : kt = kt.next = r;
    }
    return kt;
  }
  function mo(r, t) {
    return typeof t == "function" ? t(r) : t;
  }
  function ha(r) {
    var t = ye(), e = t.queue;
    if (e === null) throw Error(z(311));
    e.lastRenderedReducer = r;
    var s = bt, o = s.baseQueue, n = e.pending;
    if (n !== null) {
      if (o !== null) {
        var c = o.next;
        o.next = n.next, n.next = c;
      }
      s.baseQueue = o = n, e.pending = null;
    }
    if (o !== null) {
      n = o.next, s = s.baseState;
      var d = c = null, u = null, l = n;
      do {
        var m = l.lane;
        if ((Xr & m) === m) u !== null && (u = u.next = {
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
          u === null ? (d = u = x, c = s) : u = u.next = x, it.lanes |= m, Kr |= m;
        }
        l = l.next;
      } while (l !== null && l !== n);
      u === null ? c = s : u.next = d, Oe(s, t.memoizedState) || (Zt = true), t.memoizedState = s, t.baseState = c, t.baseQueue = u, e.lastRenderedState = s;
    }
    if (r = e.interleaved, r !== null) {
      o = r;
      do
        n = o.lane, it.lanes |= n, Kr |= n, o = o.next;
      while (o !== r);
    } else o === null && (e.lanes = 0);
    return [
      t.memoizedState,
      e.dispatch
    ];
  }
  function ya(r) {
    var t = ye(), e = t.queue;
    if (e === null) throw Error(z(311));
    e.lastRenderedReducer = r;
    var s = e.dispatch, o = e.pending, n = t.memoizedState;
    if (o !== null) {
      e.pending = null;
      var c = o = o.next;
      do
        n = r(n, c.action), c = c.next;
      while (c !== o);
      Oe(n, t.memoizedState) || (Zt = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [
      n,
      s
    ];
  }
  function Al() {
  }
  function Hl(r, t) {
    var e = it, s = ye(), o = t(), n = !Oe(s.memoizedState, o);
    if (n && (s.memoizedState = o, Zt = true), s = s.queue, Zi(Xl.bind(null, e, s, r), [
      r
    ]), s.getSnapshot !== t || n || kt !== null && kt.memoizedState.tag & 1) {
      if (e.flags |= 2048, vo(9, Yl.bind(null, e, s, o, t), void 0, null), jt === null) throw Error(z(349));
      Xr & 30 || ql(e, t, o);
    }
    return o;
  }
  function ql(r, t, e) {
    r.flags |= 16384, r = {
      getSnapshot: t,
      value: e
    }, t = it.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, it.updateQueue = t, t.stores = [
      r
    ]) : (e = t.stores, e === null ? t.stores = [
      r
    ] : e.push(r));
  }
  function Yl(r, t, e, s) {
    t.value = e, t.getSnapshot = s, Kl(t) && Zl(r);
  }
  function Xl(r, t, e) {
    return e(function() {
      Kl(t) && Zl(r);
    });
  }
  function Kl(r) {
    var t = r.getSnapshot;
    r = r.value;
    try {
      var e = t();
      return !Oe(r, e);
    } catch {
      return true;
    }
  }
  function Zl(r) {
    var t = l_(r, 1);
    t !== null && Ce(t, r, 1, -1);
  }
  function _d(r) {
    var t = Te();
    return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: r
    }, t.queue = r, r = r.dispatch = Vw.bind(null, it, r), [
      t.memoizedState,
      r
    ];
  }
  function vo(r, t, e, s) {
    return r = {
      tag: r,
      create: t,
      destroy: e,
      deps: s,
      next: null
    }, t = it.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, it.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (s = e.next, e.next = r, r.next = s, t.lastEffect = r)), r;
  }
  function Jl() {
    return ye().memoizedState;
  }
  function _s(r, t, e, s) {
    var o = Te();
    it.flags |= r, o.memoizedState = vo(1 | t, e, void 0, s === void 0 ? null : s);
  }
  function Us(r, t, e, s) {
    var o = ye();
    s = s === void 0 ? null : s;
    var n = void 0;
    if (bt !== null) {
      var c = bt.memoizedState;
      if (n = c.destroy, s !== null && Yi(s, c.deps)) {
        o.memoizedState = vo(t, e, n, s);
        return;
      }
    }
    it.flags |= r, o.memoizedState = vo(1 | t, e, n, s);
  }
  function rd(r, t) {
    return _s(8390656, 8, r, t);
  }
  function Zi(r, t) {
    return Us(2048, 8, r, t);
  }
  function Gl(r, t) {
    return Us(4, 2, r, t);
  }
  function tu(r, t) {
    return Us(4, 4, r, t);
  }
  function eu(r, t) {
    if (typeof t == "function") return r = r(), t(r), function() {
      t(null);
    };
    if (t != null) return r = r(), t.current = r, function() {
      t.current = null;
    };
  }
  function _u(r, t, e) {
    return e = e != null ? e.concat([
      r
    ]) : null, Us(4, 4, eu.bind(null, t, r), e);
  }
  function Ji() {
  }
  function ru(r, t) {
    var e = ye();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Yi(t, s[1]) ? s[0] : (e.memoizedState = [
      r,
      t
    ], r);
  }
  function nu(r, t) {
    var e = ye();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && Yi(t, s[1]) ? s[0] : (r = r(), e.memoizedState = [
      r,
      t
    ], r);
  }
  function ou(r, t, e) {
    return Xr & 21 ? (Oe(e, t) || (e = dl(), it.lanes |= e, Kr |= e, r.baseState = true), t) : (r.baseState && (r.baseState = false, Zt = true), r.memoizedState = e);
  }
  function Ww(r, t) {
    var e = K;
    K = e !== 0 && 4 > e ? e : 4, r(true);
    var s = ba.transition;
    ba.transition = {};
    try {
      r(false), t();
    } finally {
      K = e, ba.transition = s;
    }
  }
  function su() {
    return ye().memoizedState;
  }
  function Qw(r, t, e) {
    var s = yr(r);
    if (e = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, au(r)) iu(t, e);
    else if (e = Ql(r, t, e, s), e !== null) {
      var o = Qt();
      Ce(e, r, s, o), cu(e, t, s);
    }
  }
  function Vw(r, t, e) {
    var s = yr(r), o = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (au(r)) iu(t, o);
    else {
      var n = r.alternate;
      if (r.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, d = n(c, e);
        if (o.hasEagerState = true, o.eagerState = d, Oe(d, c)) {
          var u = t.interleaved;
          u === null ? (o.next = o, Vi(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      e = Ql(r, t, o, s), e !== null && (o = Qt(), Ce(e, r, s, o), cu(e, t, s));
    }
  }
  function au(r) {
    var t = r.alternate;
    return r === it || t !== null && t === it;
  }
  function iu(r, t) {
    Jn = Ss = true;
    var e = r.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
  }
  function cu(r, t, e) {
    if (e & 4194240) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Oi(r, e);
    }
  }
  var Es = {
    readContext: he,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useInsertionEffect: Ft,
    useLayoutEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useMutableSource: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    unstable_isNewReconciler: false
  }, Bw = {
    readContext: he,
    useCallback: function(r, t) {
      return Te().memoizedState = [
        r,
        t === void 0 ? null : t
      ], r;
    },
    useContext: he,
    useEffect: rd,
    useImperativeHandle: function(r, t, e) {
      return e = e != null ? e.concat([
        r
      ]) : null, _s(4194308, 4, eu.bind(null, t, r), e);
    },
    useLayoutEffect: function(r, t) {
      return _s(4194308, 4, r, t);
    },
    useInsertionEffect: function(r, t) {
      return _s(4, 2, r, t);
    },
    useMemo: function(r, t) {
      var e = Te();
      return t = t === void 0 ? null : t, r = r(), e.memoizedState = [
        r,
        t
      ], r;
    },
    useReducer: function(r, t, e) {
      var s = Te();
      return t = e !== void 0 ? e(t) : t, s.memoizedState = s.baseState = t, r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: t
      }, s.queue = r, r = r.dispatch = Qw.bind(null, it, r), [
        s.memoizedState,
        r
      ];
    },
    useRef: function(r) {
      var t = Te();
      return r = {
        current: r
      }, t.memoizedState = r;
    },
    useState: _d,
    useDebugValue: Ji,
    useDeferredValue: function(r) {
      return Te().memoizedState = r;
    },
    useTransition: function() {
      var r = _d(false), t = r[0];
      return r = Ww.bind(null, r[1]), Te().memoizedState = r, [
        t,
        r
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(r, t, e) {
      var s = it, o = Te();
      if (st) {
        if (e === void 0) throw Error(z(407));
        e = e();
      } else {
        if (e = t(), jt === null) throw Error(z(349));
        Xr & 30 || ql(s, t, e);
      }
      o.memoizedState = e;
      var n = {
        value: e,
        getSnapshot: t
      };
      return o.queue = n, rd(Xl.bind(null, s, n, r), [
        r
      ]), s.flags |= 2048, vo(9, Yl.bind(null, s, n, e, t), void 0, null), e;
    },
    useId: function() {
      var r = Te(), t = jt.identifierPrefix;
      if (st) {
        var e = s_, s = o_;
        e = (s & ~(1 << 32 - ze(s) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = yo++, 0 < e && (t += "H" + e.toString(32)), t += ":";
      } else e = Mw++, t = ":" + t + "r" + e.toString(32) + ":";
      return r.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Aw = {
    readContext: he,
    useCallback: ru,
    useContext: he,
    useEffect: Zi,
    useImperativeHandle: _u,
    useInsertionEffect: Gl,
    useLayoutEffect: tu,
    useMemo: nu,
    useReducer: ha,
    useRef: Jl,
    useState: function() {
      return ha(mo);
    },
    useDebugValue: Ji,
    useDeferredValue: function(r) {
      var t = ye();
      return ou(t, bt.memoizedState, r);
    },
    useTransition: function() {
      var r = ha(mo)[0], t = ye().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Al,
    useSyncExternalStore: Hl,
    useId: su,
    unstable_isNewReconciler: false
  }, Hw = {
    readContext: he,
    useCallback: ru,
    useContext: he,
    useEffect: Zi,
    useImperativeHandle: _u,
    useInsertionEffect: Gl,
    useLayoutEffect: tu,
    useMemo: nu,
    useReducer: ya,
    useRef: Jl,
    useState: function() {
      return ya(mo);
    },
    useDebugValue: Ji,
    useDeferredValue: function(r) {
      var t = ye();
      return bt === null ? t.memoizedState = r : ou(t, bt.memoizedState, r);
    },
    useTransition: function() {
      var r = ya(mo)[0], t = ye().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Al,
    useSyncExternalStore: Hl,
    useId: su,
    unstable_isNewReconciler: false
  };
  function ke(r, t) {
    if (r && r.defaultProps) {
      t = ct({}, t), r = r.defaultProps;
      for (var e in r) t[e] === void 0 && (t[e] = r[e]);
      return t;
    }
    return t;
  }
  function ti(r, t, e, s) {
    t = r.memoizedState, e = e(s, t), e = e == null ? t : ct({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
  }
  var Ms = {
    isMounted: function(r) {
      return (r = r._reactInternals) ? Gr(r) === r : false;
    },
    enqueueSetState: function(r, t, e) {
      r = r._reactInternals;
      var s = Qt(), o = yr(r), n = i_(s, o);
      n.payload = t, e != null && (n.callback = e), t = br(r, n, o), t !== null && (Ce(t, r, o, s), ts(t, r, o));
    },
    enqueueReplaceState: function(r, t, e) {
      r = r._reactInternals;
      var s = Qt(), o = yr(r), n = i_(s, o);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = br(r, n, o), t !== null && (Ce(t, r, o, s), ts(t, r, o));
    },
    enqueueForceUpdate: function(r, t) {
      r = r._reactInternals;
      var e = Qt(), s = yr(r), o = i_(e, s);
      o.tag = 2, t != null && (o.callback = t), t = br(r, o, s), t !== null && (Ce(t, r, s, e), ts(t, r, s));
    }
  };
  function nd(r, t, e, s, o, n, c) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, n, c) : t.prototype && t.prototype.isPureReactComponent ? !po(e, s) || !po(o, n) : true;
  }
  function du(r, t, e) {
    var s = false, o = kr, n = t.contextType;
    return typeof n == "object" && n !== null ? n = he(n) : (o = Gt(t) ? qr : Dt.current, s = t.contextTypes, n = (s = s != null) ? Sn(r, o) : kr), t = new t(e, n), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, r.stateNode = t, t._reactInternals = r, s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = n), t;
  }
  function od(r, t, e, s) {
    r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, s), t.state !== r && Ms.enqueueReplaceState(t, t.state, null);
  }
  function ei(r, t, e, s) {
    var o = r.stateNode;
    o.props = e, o.state = r.memoizedState, o.refs = {}, Bi(r);
    var n = t.contextType;
    typeof n == "object" && n !== null ? o.context = he(n) : (n = Gt(t) ? qr : Dt.current, o.context = Sn(r, n)), o.state = r.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (ti(r, t, n, e), o.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ms.enqueueReplaceState(o, o.state, null), xs(r, e, o, s), o.state = r.memoizedState), typeof o.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function On(r, t) {
    try {
      var e = "", s = t;
      do
        e += mp(s), s = s.return;
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
  function ma(r, t, e) {
    return {
      value: r,
      source: null,
      stack: e ?? null,
      digest: t ?? null
    };
  }
  function _i(r, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var qw = typeof WeakMap == "function" ? WeakMap : Map;
  function lu(r, t, e) {
    e = i_(-1, e), e.tag = 3, e.payload = {
      element: null
    };
    var s = t.value;
    return e.callback = function() {
      Cs || (Cs = true, ui = s), _i(r, t);
    }, e;
  }
  function uu(r, t, e) {
    e = i_(-1, e), e.tag = 3;
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      e.payload = function() {
        return s(o);
      }, e.callback = function() {
        _i(r, t);
      };
    }
    var n = r.stateNode;
    return n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      _i(r, t), typeof s != "function" && (hr === null ? hr = /* @__PURE__ */ new Set([
        this
      ]) : hr.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    }), e;
  }
  function sd(r, t, e) {
    var s = r.pingCache;
    if (s === null) {
      s = r.pingCache = new qw();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(e) || (o.add(e), r = af.bind(null, r, t, e), t.then(r, r));
  }
  function ad(r) {
    do {
      var t;
      if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function id(r, t, e, s, o) {
    return r.mode & 1 ? (r.flags |= 65536, r.lanes = o, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = i_(-1, 1), t.tag = 2, br(e, t, 1))), e.lanes |= 1), r);
  }
  var Yw = p_.ReactCurrentOwner, Zt = false;
  function Ut(r, t, e, s) {
    t.child = r === null ? Wl(t, null, e, s) : zn(t, r.child, e, s);
  }
  function cd(r, t, e, s, o) {
    e = e.render;
    var n = t.ref;
    return mn(t, o), s = Xi(r, t, e, s, n, o), e = Ki(), r !== null && !Zt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, u_(r, t, o)) : (st && e && Di(t), t.flags |= 1, Ut(r, t, s, o), t.child);
  }
  function dd(r, t, e, s, o) {
    if (r === null) {
      var n = e.type;
      return typeof n == "function" && !sc(n) && n.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = n, pu(r, t, n, s, o)) : (r = ss(e.type, null, s, t, t.mode, o), r.ref = t.ref, r.return = t, t.child = r);
    }
    if (n = r.child, !(r.lanes & o)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : po, e(c, s) && r.ref === t.ref) return u_(r, t, o);
    }
    return t.flags |= 1, r = mr(n, s), r.ref = t.ref, r.return = t, t.child = r;
  }
  function pu(r, t, e, s, o) {
    if (r !== null) {
      var n = r.memoizedProps;
      if (po(n, s) && r.ref === t.ref) if (Zt = false, t.pendingProps = s = n, (r.lanes & o) !== 0) r.flags & 131072 && (Zt = true);
      else return t.lanes = r.lanes, u_(r, t, o);
    }
    return ri(r, t, e, s, o);
  }
  function wu(r, t, e) {
    var s = t.pendingProps, o = s.children, n = r !== null ? r.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, G(wn, ee), ee |= e;
    else {
      if (!(e & 1073741824)) return r = n !== null ? n.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: r,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, G(wn, ee), ee |= r, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, s = n !== null ? n.baseLanes : e, G(wn, ee), ee |= s;
    }
    else n !== null ? (s = n.baseLanes | e, t.memoizedState = null) : s = e, G(wn, ee), ee |= s;
    return Ut(r, t, o, e), t.child;
  }
  function fu(r, t) {
    var e = t.ref;
    (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ri(r, t, e, s, o) {
    var n = Gt(e) ? qr : Dt.current;
    return n = Sn(t, n), mn(t, o), e = Xi(r, t, e, s, n, o), s = Ki(), r !== null && !Zt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, u_(r, t, o)) : (st && s && Di(t), t.flags |= 1, Ut(r, t, e, o), t.child);
  }
  function ld(r, t, e, s, o) {
    if (Gt(e)) {
      var n = true;
      hs(t);
    } else n = false;
    if (mn(t, o), t.stateNode === null) rs(r, t), du(t, e, s), ei(t, e, s, o), s = true;
    else if (r === null) {
      var c = t.stateNode, d = t.memoizedProps;
      c.props = d;
      var u = c.context, l = e.contextType;
      typeof l == "object" && l !== null ? l = he(l) : (l = Gt(e) ? qr : Dt.current, l = Sn(t, l));
      var m = e.getDerivedStateFromProps, x = typeof m == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      x || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== s || u !== l) && od(t, c, s, l), y_ = false;
      var k = t.memoizedState;
      c.state = k, xs(t, s, c, o), u = t.memoizedState, d !== s || k !== u || Jt.current || y_ ? (typeof m == "function" && (ti(t, e, m, s), u = t.memoizedState), (d = y_ || nd(t, e, d, s, k, u, l)) ? (x || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = u), c.props = s, c.state = u, c.context = l, s = d) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = false);
    } else {
      c = t.stateNode, Vl(r, t), d = t.memoizedProps, l = t.type === t.elementType ? d : ke(t.type, d), c.props = l, x = t.pendingProps, k = c.context, u = e.contextType, typeof u == "object" && u !== null ? u = he(u) : (u = Gt(e) ? qr : Dt.current, u = Sn(t, u));
      var O = e.getDerivedStateFromProps;
      (m = typeof O == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== x || k !== u) && od(t, c, s, u), y_ = false, k = t.memoizedState, c.state = k, xs(t, s, c, o);
      var N = t.memoizedState;
      d !== x || k !== N || Jt.current || y_ ? (typeof O == "function" && (ti(t, e, O, s), N = t.memoizedState), (l = y_ || nd(t, e, l, s, k, N, u) || false) ? (m || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, N, u), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, N, u)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = N), c.props = s, c.state = N, c.context = u, s = l) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), s = false);
    }
    return ni(r, t, e, s, n, o);
  }
  function ni(r, t, e, s, o, n) {
    fu(r, t);
    var c = (t.flags & 128) !== 0;
    if (!s && !c) return o && Kc(t, e, false), u_(r, t, n);
    s = t.stateNode, Yw.current = t;
    var d = c && typeof e.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, r !== null && c ? (t.child = zn(t, r.child, null, n), t.child = zn(t, null, d, n)) : Ut(r, t, d, n), t.memoizedState = s.state, o && Kc(t, e, true), t.child;
  }
  function gu(r) {
    var t = r.stateNode;
    t.pendingContext ? Xc(r, t.pendingContext, t.pendingContext !== t.context) : t.context && Xc(r, t.context, false), Ai(r, t.containerInfo);
  }
  function ud(r, t, e, s, o) {
    return En(), Ui(o), t.flags |= 256, Ut(r, t, e, s), t.child;
  }
  var oi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function si(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function bu(r, t, e) {
    var s = t.pendingProps, o = at.current, n = false, c = (t.flags & 128) !== 0, d;
    if ((d = c) || (d = r !== null && r.memoizedState === null ? false : (o & 2) !== 0), d ? (n = true, t.flags &= -129) : (r === null || r.memoizedState !== null) && (o |= 1), G(at, o & 1), r === null) return Ja(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = s.children, r = s.fallback, n ? (s = t.mode, n = t.child, c = {
      mode: "hidden",
      children: c
    }, !(s & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = c) : n = Vs(c, s, 0, null), r = Hr(r, s, e, null), n.return = t, r.return = t, n.sibling = r, t.child = n, t.child.memoizedState = si(e), t.memoizedState = oi, r) : Gi(t, c));
    if (o = r.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return Xw(r, t, c, s, d, o, e);
    if (n) {
      n = s.fallback, c = t.mode, o = r.child, d = o.sibling;
      var u = {
        mode: "hidden",
        children: s.children
      };
      return !(c & 1) && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = u, t.deletions = null) : (s = mr(o, u), s.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? n = mr(d, n) : (n = Hr(n, c, e, null), n.flags |= 2), n.return = t, s.return = t, s.sibling = n, t.child = s, s = n, n = t.child, c = r.child.memoizedState, c = c === null ? si(e) : {
        baseLanes: c.baseLanes | e,
        cachePool: null,
        transitions: c.transitions
      }, n.memoizedState = c, n.childLanes = r.childLanes & ~e, t.memoizedState = oi, s;
    }
    return n = r.child, r = n.sibling, s = mr(n, {
      mode: "visible",
      children: s.children
    }), !(t.mode & 1) && (s.lanes = e), s.return = t, s.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [
      r
    ], t.flags |= 16) : e.push(r)), t.child = s, t.memoizedState = null, s;
  }
  function Gi(r, t) {
    return t = Vs({
      mode: "visible",
      children: t
    }, r.mode, 0, null), t.return = r, r.child = t;
  }
  function Vo(r, t, e, s) {
    return s !== null && Ui(s), zn(t, r.child, null, e), r = Gi(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
  }
  function Xw(r, t, e, s, o, n, c) {
    if (e) return t.flags & 256 ? (t.flags &= -257, s = ma(Error(z(422))), Vo(r, t, c, s)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (n = s.fallback, o = t.mode, s = Vs({
      mode: "visible",
      children: s.children
    }, o, 0, null), n = Hr(n, o, c, null), n.flags |= 2, s.return = t, n.return = t, s.sibling = n, t.child = s, t.mode & 1 && zn(t, r.child, null, c), t.child.memoizedState = si(c), t.memoizedState = oi, n);
    if (!(t.mode & 1)) return Vo(r, t, c, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var d = s.dgst;
      return s = d, n = Error(z(419)), s = ma(n, s, void 0), Vo(r, t, c, s);
    }
    if (d = (c & r.childLanes) !== 0, Zt || d) {
      if (s = jt, s !== null) {
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
        o = o & (s.suspendedLanes | c) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, l_(r, o), Ce(s, r, o, -1));
      }
      return oc(), s = ma(Error(z(421))), Vo(r, t, c, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = r.child, t = cf.bind(null, r), o._reactRetry = t, null) : (r = n.treeContext, re = gr(o.nextSibling), ne = t, st = true, Se = null, r !== null && (ue[pe++] = o_, ue[pe++] = s_, ue[pe++] = Yr, o_ = r.id, s_ = r.overflow, Yr = t), t = Gi(t, s.children), t.flags |= 4096, t);
  }
  function pd(r, t, e) {
    r.lanes |= t;
    var s = r.alternate;
    s !== null && (s.lanes |= t), Ga(r.return, t, e);
  }
  function va(r, t, e, s, o) {
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
  function hu(r, t, e) {
    var s = t.pendingProps, o = s.revealOrder, n = s.tail;
    if (Ut(r, t, s.children, e), s = at.current, s & 2) s = s & 1 | 2, t.flags |= 128;
    else {
      if (r !== null && r.flags & 128) t: for (r = t.child; r !== null; ) {
        if (r.tag === 13) r.memoizedState !== null && pd(r, e, t);
        else if (r.tag === 19) pd(r, e, t);
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
    if (G(at, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (e = t.child, o = null; e !== null; ) r = e.alternate, r !== null && js(r) === null && (o = e), e = e.sibling;
        e = o, e === null ? (o = t.child, t.child = null) : (o = e.sibling, e.sibling = null), va(t, false, o, e, n);
        break;
      case "backwards":
        for (e = null, o = t.child, t.child = null; o !== null; ) {
          if (r = o.alternate, r !== null && js(r) === null) {
            t.child = o;
            break;
          }
          r = o.sibling, o.sibling = e, e = o, o = r;
        }
        va(t, true, e, null, n);
        break;
      case "together":
        va(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function rs(r, t) {
    !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function u_(r, t, e) {
    if (r !== null && (t.dependencies = r.dependencies), Kr |= t.lanes, !(e & t.childLanes)) return null;
    if (r !== null && t.child !== r.child) throw Error(z(153));
    if (t.child !== null) {
      for (r = t.child, e = mr(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; ) r = r.sibling, e = e.sibling = mr(r, r.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Kw(r, t, e) {
    switch (t.tag) {
      case 3:
        gu(t), En();
        break;
      case 5:
        Bl(t);
        break;
      case 1:
        Gt(t.type) && hs(t);
        break;
      case 4:
        Ai(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        G(vs, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (G(at, at.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? bu(r, t, e) : (G(at, at.current & 1), r = u_(r, t, e), r !== null ? r.sibling : null);
        G(at, at.current & 1);
        break;
      case 19:
        if (s = (e & t.childLanes) !== 0, r.flags & 128) {
          if (s) return hu(r, t, e);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), G(at, at.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wu(r, t, e);
    }
    return u_(r, t, e);
  }
  var yu, ai, mu, vu;
  yu = function(r, t) {
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
  ai = function() {
  };
  mu = function(r, t, e, s) {
    var o = r.memoizedProps;
    if (o !== s) {
      r = t.stateNode, Pr(Qe.current);
      var n = null;
      switch (e) {
        case "input":
          o = Oa(r, o), s = Oa(r, s), n = [];
          break;
        case "select":
          o = ct({}, o, {
            value: void 0
          }), s = ct({}, s, {
            value: void 0
          }), n = [];
          break;
        case "textarea":
          o = Fa(r, o), s = Fa(r, s), n = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (r.onclick = gs);
      }
      Pa(e, s);
      var c;
      e = null;
      for (l in o) if (!s.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if (l === "style") {
        var d = o[l];
        for (c in d) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
      } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (oo.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
      for (l in s) {
        var u = s[l];
        if (d = o == null ? void 0 : o[l], s.hasOwnProperty(l) && u !== d && (u != null || d != null)) if (l === "style") if (d) {
          for (c in d) !d.hasOwnProperty(c) || u && u.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
          for (c in u) u.hasOwnProperty(c) && d[c] !== u[c] && (e || (e = {}), e[c] = u[c]);
        } else e || (n || (n = []), n.push(l, e)), e = u;
        else l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, d = d ? d.__html : void 0, u != null && d !== u && (n = n || []).push(l, u)) : l === "children" ? typeof u != "string" && typeof u != "number" || (n = n || []).push(l, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (oo.hasOwnProperty(l) ? (u != null && l === "onScroll" && tt("scroll", r), n || d === u || (n = [])) : (n = n || []).push(l, u));
      }
      e && (n = n || []).push("style", e);
      var l = n;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  vu = function(r, t, e, s) {
    e !== s && (t.flags |= 4);
  };
  function Wn(r, t) {
    if (!st) switch (r.tailMode) {
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
  function Tt(r) {
    var t = r.alternate !== null && r.alternate.child === r.child, e = 0, s = 0;
    if (t) for (var o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = r, o = o.sibling;
    else for (o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = r, o = o.sibling;
    return r.subtreeFlags |= s, r.childLanes = e, t;
  }
  function Zw(r, t, e) {
    var s = t.pendingProps;
    switch (Ii(t), t.tag) {
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
        return Tt(t), null;
      case 1:
        return Gt(t.type) && bs(), Tt(t), null;
      case 3:
        return s = t.stateNode, Cn(), rt(Jt), rt(Dt), qi(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (r === null || r.child === null) && (Wo(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Se !== null && (fi(Se), Se = null))), ai(r, t), Tt(t), null;
      case 5:
        Hi(t);
        var o = Pr(ho.current);
        if (e = t.type, r !== null && t.stateNode != null) mu(r, t, e, s, o), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(z(166));
            return Tt(t), null;
          }
          if (r = Pr(Qe.current), Wo(t)) {
            s = t.stateNode, e = t.type;
            var n = t.memoizedProps;
            switch (s[$e] = t, s[go] = n, r = (t.mode & 1) !== 0, e) {
              case "dialog":
                tt("cancel", s), tt("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                tt("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hn.length; o++) tt(Hn[o], s);
                break;
              case "source":
                tt("error", s);
                break;
              case "img":
              case "image":
              case "link":
                tt("error", s), tt("load", s);
                break;
              case "details":
                tt("toggle", s);
                break;
              case "input":
                kc(s, n), tt("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!n.multiple
                }, tt("invalid", s);
                break;
              case "textarea":
                jc(s, n), tt("invalid", s);
            }
            Pa(e, n), o = null;
            for (var c in n) if (n.hasOwnProperty(c)) {
              var d = n[c];
              c === "children" ? typeof d == "string" ? s.textContent !== d && (n.suppressHydrationWarning !== true && Mo(s.textContent, d, r), o = [
                "children",
                d
              ]) : typeof d == "number" && s.textContent !== "" + d && (n.suppressHydrationWarning !== true && Mo(s.textContent, d, r), o = [
                "children",
                "" + d
              ]) : oo.hasOwnProperty(c) && d != null && c === "onScroll" && tt("scroll", s);
            }
            switch (e) {
              case "input":
                Fo(s), xc(s, n, true);
                break;
              case "textarea":
                Fo(s), Sc(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof n.onClick == "function" && (s.onclick = gs);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Xd(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof s.is == "string" ? r = c.createElement(e, {
              is: s.is
            }) : (r = c.createElement(e), e === "select" && (c = r, s.multiple ? c.multiple = true : s.size && (c.size = s.size))) : r = c.createElementNS(r, e), r[$e] = t, r[go] = s, yu(r, t, false, false), t.stateNode = r;
            t: {
              switch (c = Ra(e, s), e) {
                case "dialog":
                  tt("cancel", r), tt("close", r), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  tt("load", r), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Hn.length; o++) tt(Hn[o], r);
                  o = s;
                  break;
                case "source":
                  tt("error", r), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  tt("error", r), tt("load", r), o = s;
                  break;
                case "details":
                  tt("toggle", r), o = s;
                  break;
                case "input":
                  kc(r, s), o = Oa(r, s), tt("invalid", r);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, o = ct({}, s, {
                    value: void 0
                  }), tt("invalid", r);
                  break;
                case "textarea":
                  jc(r, s), o = Fa(r, s), tt("invalid", r);
                  break;
                default:
                  o = s;
              }
              Pa(e, o), d = o;
              for (n in d) if (d.hasOwnProperty(n)) {
                var u = d[n];
                n === "style" ? Jd(r, u) : n === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Kd(r, u)) : n === "children" ? typeof u == "string" ? (e !== "textarea" || u !== "") && so(r, u) : typeof u == "number" && so(r, "" + u) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (oo.hasOwnProperty(n) ? u != null && n === "onScroll" && tt("scroll", r) : u != null && xi(r, n, u, c));
              }
              switch (e) {
                case "input":
                  Fo(r), xc(r, s, false);
                  break;
                case "textarea":
                  Fo(r), Sc(r);
                  break;
                case "option":
                  s.value != null && r.setAttribute("value", "" + vr(s.value));
                  break;
                case "select":
                  r.multiple = !!s.multiple, n = s.value, n != null ? gn(r, !!s.multiple, n, false) : s.defaultValue != null && gn(r, !!s.multiple, s.defaultValue, true);
                  break;
                default:
                  typeof o.onClick == "function" && (r.onclick = gs);
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
        return Tt(t), null;
      case 6:
        if (r && t.stateNode != null) vu(r, t, r.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(z(166));
          if (e = Pr(ho.current), Pr(Qe.current), Wo(t)) {
            if (s = t.stateNode, e = t.memoizedProps, s[$e] = t, (n = s.nodeValue !== e) && (r = ne, r !== null)) switch (r.tag) {
              case 3:
                Mo(s.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== true && Mo(s.nodeValue, e, (r.mode & 1) !== 0);
            }
            n && (t.flags |= 4);
          } else s = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(s), s[$e] = t, t.stateNode = s;
        }
        return Tt(t), null;
      case 13:
        if (rt(at), s = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (st && re !== null && t.mode & 1 && !(t.flags & 128)) Ul(), En(), t.flags |= 98560, n = false;
          else if (n = Wo(t), s !== null && s.dehydrated !== null) {
            if (r === null) {
              if (!n) throw Error(z(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(z(317));
              n[$e] = t;
            } else En(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Tt(t), n = false;
          } else Se !== null && (fi(Se), Se = null), n = true;
          if (!n) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = e, t) : (s = s !== null, s !== (r !== null && r.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (r === null || at.current & 1 ? yt === 0 && (yt = 3) : oc())), t.updateQueue !== null && (t.flags |= 4), Tt(t), null);
      case 4:
        return Cn(), ai(r, t), r === null && wo(t.stateNode.containerInfo), Tt(t), null;
      case 10:
        return Qi(t.type._context), Tt(t), null;
      case 17:
        return Gt(t.type) && bs(), Tt(t), null;
      case 19:
        if (rt(at), n = t.memoizedState, n === null) return Tt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) Wn(n, false);
        else {
          if (yt !== 0 || r !== null && r.flags & 128) for (r = t.child; r !== null; ) {
            if (c = js(r), c !== null) {
              for (t.flags |= 128, Wn(n, false), s = c.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = e, e = t.child; e !== null; ) n = e, r = s, n.flags &= 14680066, c = n.alternate, c === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = c.childLanes, n.lanes = c.lanes, n.child = c.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = c.memoizedProps, n.memoizedState = c.memoizedState, n.updateQueue = c.updateQueue, n.type = c.type, r = c.dependencies, n.dependencies = r === null ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
              }), e = e.sibling;
              return G(at, at.current & 1 | 2), t.child;
            }
            r = r.sibling;
          }
          n.tail !== null && pt() > Ln && (t.flags |= 128, s = true, Wn(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (r = js(c), r !== null) {
            if (t.flags |= 128, s = true, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), Wn(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !st) return Tt(t), null;
          } else 2 * pt() - n.renderingStartTime > Ln && e !== 1073741824 && (t.flags |= 128, s = true, Wn(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = pt(), t.sibling = null, e = at.current, G(at, s ? e & 1 | 2 : e & 1), t) : (Tt(t), null);
      case 22:
      case 23:
        return nc(), s = t.memoizedState !== null, r !== null && r.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? ee & 1073741824 && (Tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Tt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(z(156, t.tag));
  }
  function Jw(r, t) {
    switch (Ii(t), t.tag) {
      case 1:
        return Gt(t.type) && bs(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 3:
        return Cn(), rt(Jt), rt(Dt), qi(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
      case 5:
        return Hi(t), null;
      case 13:
        if (rt(at), r = t.memoizedState, r !== null && r.dehydrated !== null) {
          if (t.alternate === null) throw Error(z(340));
          En();
        }
        return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 19:
        return rt(at), null;
      case 4:
        return Cn(), null;
      case 10:
        return Qi(t.type._context), null;
      case 22:
      case 23:
        return nc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = false, Rt = false, Gw = typeof WeakSet == "function" ? WeakSet : Set, $ = null;
  function pn(r, t) {
    var e = r.ref;
    if (e !== null) if (typeof e == "function") try {
      e(null);
    } catch (s) {
      lt(r, t, s);
    }
    else e.current = null;
  }
  function ii(r, t, e) {
    try {
      e();
    } catch (s) {
      lt(r, t, s);
    }
  }
  var wd = false;
  function tf(r, t) {
    if (Aa = ps, r = El(), $i(r)) {
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
          var c = 0, d = -1, u = -1, l = 0, m = 0, x = r, k = null;
          e: for (; ; ) {
            for (var O; x !== e || o !== 0 && x.nodeType !== 3 || (d = c + o), x !== n || s !== 0 && x.nodeType !== 3 || (u = c + s), x.nodeType === 3 && (c += x.nodeValue.length), (O = x.firstChild) !== null; ) k = x, x = O;
            for (; ; ) {
              if (x === r) break e;
              if (k === e && ++l === o && (d = c), k === n && ++m === s && (u = c), (O = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = O;
          }
          e = d === -1 || u === -1 ? null : {
            start: d,
            end: u
          };
        } else e = null;
      }
      e = e || {
        start: 0,
        end: 0
      };
    } else e = null;
    for (Ha = {
      focusedElem: r,
      selectionRange: e
    }, ps = false, $ = t; $ !== null; ) if (t = $, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, $ = r;
    else for (; $ !== null; ) {
      t = $;
      try {
        var N = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (N !== null) {
              var F = N.memoizedProps, I = N.memoizedState, b = t.stateNode, h = b.getSnapshotBeforeUpdate(t.elementType === t.type ? F : ke(t.type, F), I);
              b.__reactInternalSnapshotBeforeUpdate = h;
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
            throw Error(z(163));
        }
      } catch (E) {
        lt(t, t.return, E);
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, $ = r;
        break;
      }
      $ = t.return;
    }
    return N = wd, wd = false, N;
  }
  function Gn(r, t, e) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var n = o.destroy;
          o.destroy = void 0, n !== void 0 && ii(t, e, n);
        }
        o = o.next;
      } while (o !== s);
    }
  }
  function Ws(r, t) {
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
  function ci(r) {
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
  function ku(r) {
    var t = r.alternate;
    t !== null && (r.alternate = null, ku(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[$e], delete t[go], delete t[Xa], delete t[$w], delete t[Dw])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function xu(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function fd(r) {
    t: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || xu(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function di(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = gs));
    else if (s !== 4 && (r = r.child, r !== null)) for (di(r, t, e), r = r.sibling; r !== null; ) di(r, t, e), r = r.sibling;
  }
  function li(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
    else if (s !== 4 && (r = r.child, r !== null)) for (li(r, t, e), r = r.sibling; r !== null; ) li(r, t, e), r = r.sibling;
  }
  var zt = null, je = false;
  function b_(r, t, e) {
    for (e = e.child; e !== null; ) ju(r, t, e), e = e.sibling;
  }
  function ju(r, t, e) {
    if (We && typeof We.onCommitFiberUnmount == "function") try {
      We.onCommitFiberUnmount(Ts, e);
    } catch {
    }
    switch (e.tag) {
      case 5:
        Rt || pn(e, t);
      case 6:
        var s = zt, o = je;
        zt = null, b_(r, t, e), zt = s, je = o, zt !== null && (je ? (r = zt, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : zt.removeChild(e.stateNode));
        break;
      case 18:
        zt !== null && (je ? (r = zt, e = e.stateNode, r.nodeType === 8 ? wa(r.parentNode, e) : r.nodeType === 1 && wa(r, e), lo(r)) : wa(zt, e.stateNode));
        break;
      case 4:
        s = zt, o = je, zt = e.stateNode.containerInfo, je = true, b_(r, t, e), zt = s, je = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Rt && (s = e.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var n = o, c = n.destroy;
            n = n.tag, c !== void 0 && (n & 2 || n & 4) && ii(e, t, c), o = o.next;
          } while (o !== s);
        }
        b_(r, t, e);
        break;
      case 1:
        if (!Rt && (pn(e, t), s = e.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = e.memoizedProps, s.state = e.memoizedState, s.componentWillUnmount();
        } catch (d) {
          lt(e, t, d);
        }
        b_(r, t, e);
        break;
      case 21:
        b_(r, t, e);
        break;
      case 22:
        e.mode & 1 ? (Rt = (s = Rt) || e.memoizedState !== null, b_(r, t, e), Rt = s) : b_(r, t, e);
        break;
      default:
        b_(r, t, e);
    }
  }
  function gd(r) {
    var t = r.updateQueue;
    if (t !== null) {
      r.updateQueue = null;
      var e = r.stateNode;
      e === null && (e = r.stateNode = new Gw()), t.forEach(function(s) {
        var o = df.bind(null, r, s);
        e.has(s) || (e.add(s), s.then(o, o));
      });
    }
  }
  function me(r, t) {
    var e = t.deletions;
    if (e !== null) for (var s = 0; s < e.length; s++) {
      var o = e[s];
      try {
        var n = r, c = t, d = c;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              zt = d.stateNode, je = false;
              break t;
            case 3:
              zt = d.stateNode.containerInfo, je = true;
              break t;
            case 4:
              zt = d.stateNode.containerInfo, je = true;
              break t;
          }
          d = d.return;
        }
        if (zt === null) throw Error(z(160));
        ju(n, c, o), zt = null, je = false;
        var u = o.alternate;
        u !== null && (u.return = null), o.return = null;
      } catch (l) {
        lt(o, t, l);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Su(t, r), t = t.sibling;
  }
  function Su(r, t) {
    var e = r.alternate, s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (me(t, r), Fe(r), s & 4) {
          try {
            Gn(3, r, r.return), Ws(3, r);
          } catch (F) {
            lt(r, r.return, F);
          }
          try {
            Gn(5, r, r.return);
          } catch (F) {
            lt(r, r.return, F);
          }
        }
        break;
      case 1:
        me(t, r), Fe(r), s & 512 && e !== null && pn(e, e.return);
        break;
      case 5:
        if (me(t, r), Fe(r), s & 512 && e !== null && pn(e, e.return), r.flags & 32) {
          var o = r.stateNode;
          try {
            so(o, "");
          } catch (F) {
            lt(r, r.return, F);
          }
        }
        if (s & 4 && (o = r.stateNode, o != null)) {
          var n = r.memoizedProps, c = e !== null ? e.memoizedProps : n, d = r.type, u = r.updateQueue;
          if (r.updateQueue = null, u !== null) try {
            d === "input" && n.type === "radio" && n.name != null && qd(o, n), Ra(d, c);
            var l = Ra(d, n);
            for (c = 0; c < u.length; c += 2) {
              var m = u[c], x = u[c + 1];
              m === "style" ? Jd(o, x) : m === "dangerouslySetInnerHTML" ? Kd(o, x) : m === "children" ? so(o, x) : xi(o, m, x, l);
            }
            switch (d) {
              case "input":
                La(o, n);
                break;
              case "textarea":
                Yd(o, n);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!n.multiple;
                var O = n.value;
                O != null ? gn(o, !!n.multiple, O, false) : k !== !!n.multiple && (n.defaultValue != null ? gn(o, !!n.multiple, n.defaultValue, true) : gn(o, !!n.multiple, n.multiple ? [] : "", false));
            }
            o[go] = n;
          } catch (F) {
            lt(r, r.return, F);
          }
        }
        break;
      case 6:
        if (me(t, r), Fe(r), s & 4) {
          if (r.stateNode === null) throw Error(z(162));
          o = r.stateNode, n = r.memoizedProps;
          try {
            o.nodeValue = n;
          } catch (F) {
            lt(r, r.return, F);
          }
        }
        break;
      case 3:
        if (me(t, r), Fe(r), s & 4 && e !== null && e.memoizedState.isDehydrated) try {
          lo(t.containerInfo);
        } catch (F) {
          lt(r, r.return, F);
        }
        break;
      case 4:
        me(t, r), Fe(r);
        break;
      case 13:
        me(t, r), Fe(r), o = r.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (_c = pt())), s & 4 && gd(r);
        break;
      case 22:
        if (m = e !== null && e.memoizedState !== null, r.mode & 1 ? (Rt = (l = Rt) || m, me(t, r), Rt = l) : me(t, r), Fe(r), s & 8192) {
          if (l = r.memoizedState !== null, (r.stateNode.isHidden = l) && !m && r.mode & 1) for ($ = r, m = r.child; m !== null; ) {
            for (x = $ = m; $ !== null; ) {
              switch (k = $, O = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, k, k.return);
                  break;
                case 1:
                  pn(k, k.return);
                  var N = k.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    s = k, e = k.return;
                    try {
                      t = s, N.props = t.memoizedProps, N.state = t.memoizedState, N.componentWillUnmount();
                    } catch (F) {
                      lt(s, e, F);
                    }
                  }
                  break;
                case 5:
                  pn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    hd(x);
                    continue;
                  }
              }
              O !== null ? (O.return = k, $ = O) : hd(x);
            }
            m = m.sibling;
          }
          t: for (m = null, x = r; ; ) {
            if (x.tag === 5) {
              if (m === null) {
                m = x;
                try {
                  o = x.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (d = x.stateNode, u = x.memoizedProps.style, c = u != null && u.hasOwnProperty("display") ? u.display : null, d.style.display = Zd("display", c));
                } catch (F) {
                  lt(r, r.return, F);
                }
              }
            } else if (x.tag === 6) {
              if (m === null) try {
                x.stateNode.nodeValue = l ? "" : x.memoizedProps;
              } catch (F) {
                lt(r, r.return, F);
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
        me(t, r), Fe(r), s & 4 && gd(r);
        break;
      case 21:
        break;
      default:
        me(t, r), Fe(r);
    }
  }
  function Fe(r) {
    var t = r.flags;
    if (t & 2) {
      try {
        t: {
          for (var e = r.return; e !== null; ) {
            if (xu(e)) {
              var s = e;
              break t;
            }
            e = e.return;
          }
          throw Error(z(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (so(o, ""), s.flags &= -33);
            var n = fd(r);
            li(r, n, o);
            break;
          case 3:
          case 4:
            var c = s.stateNode.containerInfo, d = fd(r);
            di(r, d, c);
            break;
          default:
            throw Error(z(161));
        }
      } catch (u) {
        lt(r, r.return, u);
      }
      r.flags &= -3;
    }
    t & 4096 && (r.flags &= -4097);
  }
  function ef(r, t, e) {
    $ = r, Eu(r);
  }
  function Eu(r, t, e) {
    for (var s = (r.mode & 1) !== 0; $ !== null; ) {
      var o = $, n = o.child;
      if (o.tag === 22 && s) {
        var c = o.memoizedState !== null || Bo;
        if (!c) {
          var d = o.alternate, u = d !== null && d.memoizedState !== null || Rt;
          d = Bo;
          var l = Rt;
          if (Bo = c, (Rt = u) && !l) for ($ = o; $ !== null; ) c = $, u = c.child, c.tag === 22 && c.memoizedState !== null ? yd(o) : u !== null ? (u.return = c, $ = u) : yd(o);
          for (; n !== null; ) $ = n, Eu(n), n = n.sibling;
          $ = o, Bo = d, Rt = l;
        }
        bd(r);
      } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, $ = n) : bd(r);
    }
  }
  function bd(r) {
    for (; $ !== null; ) {
      var t = $;
      if (t.flags & 8772) {
        var e = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Rt || Ws(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Rt) if (e === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? e.memoizedProps : ke(t.type, e.memoizedProps);
                s.componentDidUpdate(o, e.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var n = t.updateQueue;
              n !== null && ed(t, n, s);
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
                ed(t, c, e);
              }
              break;
            case 5:
              var d = t.stateNode;
              if (e === null && t.flags & 4) {
                e = d;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && e.focus();
                    break;
                  case "img":
                    u.src && (e.src = u.src);
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
                    x !== null && lo(x);
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
              throw Error(z(163));
          }
          Rt || t.flags & 512 && ci(t);
        } catch (k) {
          lt(t, t.return, k);
        }
      }
      if (t === r) {
        $ = null;
        break;
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, $ = e;
        break;
      }
      $ = t.return;
    }
  }
  function hd(r) {
    for (; $ !== null; ) {
      var t = $;
      if (t === r) {
        $ = null;
        break;
      }
      var e = t.sibling;
      if (e !== null) {
        e.return = t.return, $ = e;
        break;
      }
      $ = t.return;
    }
  }
  function yd(r) {
    for (; $ !== null; ) {
      var t = $;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var e = t.return;
            try {
              Ws(4, t);
            } catch (u) {
              lt(t, e, u);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (u) {
                lt(t, o, u);
              }
            }
            var n = t.return;
            try {
              ci(t);
            } catch (u) {
              lt(t, n, u);
            }
            break;
          case 5:
            var c = t.return;
            try {
              ci(t);
            } catch (u) {
              lt(t, c, u);
            }
        }
      } catch (u) {
        lt(t, t.return, u);
      }
      if (t === r) {
        $ = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, $ = d;
        break;
      }
      $ = t.return;
    }
  }
  var _f = Math.ceil, zs = p_.ReactCurrentDispatcher, tc = p_.ReactCurrentOwner, be = p_.ReactCurrentBatchConfig, Y = 0, jt = null, ft = null, Ct = 0, ee = 0, wn = jr(0), yt = 0, ko = null, Kr = 0, Qs = 0, ec = 0, to = null, Kt = null, _c = 0, Ln = 1 / 0, Ae = null, Cs = false, ui = null, hr = null, Ao = false, dr = null, Os = 0, eo = 0, pi = null, ns = -1, os = 0;
  function Qt() {
    return Y & 6 ? pt() : ns !== -1 ? ns : ns = pt();
  }
  function yr(r) {
    return r.mode & 1 ? Y & 2 && Ct !== 0 ? Ct & -Ct : Uw.transition !== null ? (os === 0 && (os = dl()), os) : (r = K, r !== 0 || (r = window.event, r = r === void 0 ? 16 : bl(r.type)), r) : 1;
  }
  function Ce(r, t, e, s) {
    if (50 < eo) throw eo = 0, pi = null, Error(z(185));
    So(r, e, s), (!(Y & 2) || r !== jt) && (r === jt && (!(Y & 2) && (Qs |= e), yt === 4 && k_(r, Ct)), te(r, s), e === 1 && Y === 0 && !(t.mode & 1) && (Ln = pt() + 500, Is && Sr()));
  }
  function te(r, t) {
    var e = r.callbackNode;
    Up(r, t);
    var s = us(r, r === jt ? Ct : 0);
    if (s === 0) e !== null && Cc(e), r.callbackNode = null, r.callbackPriority = 0;
    else if (t = s & -s, r.callbackPriority !== t) {
      if (e != null && Cc(e), t === 1) r.tag === 0 ? Iw(md.bind(null, r)) : $l(md.bind(null, r)), Pw(function() {
        !(Y & 6) && Sr();
      }), e = null;
      else {
        switch (ll(s)) {
          case 1:
            e = Ci;
            break;
          case 4:
            e = il;
            break;
          case 16:
            e = ls;
            break;
          case 536870912:
            e = cl;
            break;
          default:
            e = ls;
        }
        e = Pu(e, zu.bind(null, r));
      }
      r.callbackPriority = t, r.callbackNode = e;
    }
  }
  function zu(r, t) {
    if (ns = -1, os = 0, Y & 6) throw Error(z(327));
    var e = r.callbackNode;
    if (vn() && r.callbackNode !== e) return null;
    var s = us(r, r === jt ? Ct : 0);
    if (s === 0) return null;
    if (s & 30 || s & r.expiredLanes || t) t = Ls(r, s);
    else {
      t = s;
      var o = Y;
      Y |= 2;
      var n = Ou();
      (jt !== r || Ct !== t) && (Ae = null, Ln = pt() + 500, Ar(r, t));
      do
        try {
          of();
          break;
        } catch (d) {
          Cu(r, d);
        }
      while (true);
      Wi(), zs.current = n, Y = o, ft !== null ? t = 0 : (jt = null, Ct = 0, t = yt);
    }
    if (t !== 0) {
      if (t === 2 && (o = Ma(r), o !== 0 && (s = o, t = wi(r, o))), t === 1) throw e = ko, Ar(r, 0), k_(r, s), te(r, pt()), e;
      if (t === 6) k_(r, s);
      else {
        if (o = r.current.alternate, !(s & 30) && !rf(o) && (t = Ls(r, s), t === 2 && (n = Ma(r), n !== 0 && (s = n, t = wi(r, n))), t === 1)) throw e = ko, Ar(r, 0), k_(r, s), te(r, pt()), e;
        switch (r.finishedWork = o, r.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(z(345));
          case 2:
            Cr(r, Kt, Ae);
            break;
          case 3:
            if (k_(r, s), (s & 130023424) === s && (t = _c + 500 - pt(), 10 < t)) {
              if (us(r, 0) !== 0) break;
              if (o = r.suspendedLanes, (o & s) !== s) {
                Qt(), r.pingedLanes |= r.suspendedLanes & o;
                break;
              }
              r.timeoutHandle = Ya(Cr.bind(null, r, Kt, Ae), t);
              break;
            }
            Cr(r, Kt, Ae);
            break;
          case 4:
            if (k_(r, s), (s & 4194240) === s) break;
            for (t = r.eventTimes, o = -1; 0 < s; ) {
              var c = 31 - ze(s);
              n = 1 << c, c = t[c], c > o && (o = c), s &= ~n;
            }
            if (s = o, s = pt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * _f(s / 1960)) - s, 10 < s) {
              r.timeoutHandle = Ya(Cr.bind(null, r, Kt, Ae), s);
              break;
            }
            Cr(r, Kt, Ae);
            break;
          case 5:
            Cr(r, Kt, Ae);
            break;
          default:
            throw Error(z(329));
        }
      }
    }
    return te(r, pt()), r.callbackNode === e ? zu.bind(null, r) : null;
  }
  function wi(r, t) {
    var e = to;
    return r.current.memoizedState.isDehydrated && (Ar(r, t).flags |= 256), r = Ls(r, t), r !== 2 && (t = Kt, Kt = e, t !== null && fi(t)), r;
  }
  function fi(r) {
    Kt === null ? Kt = r : Kt.push.apply(Kt, r);
  }
  function rf(r) {
    for (var t = r; ; ) {
      if (t.flags & 16384) {
        var e = t.updateQueue;
        if (e !== null && (e = e.stores, e !== null)) for (var s = 0; s < e.length; s++) {
          var o = e[s], n = o.getSnapshot;
          o = o.value;
          try {
            if (!Oe(n(), o)) return false;
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
  function k_(r, t) {
    for (t &= ~ec, t &= ~Qs, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
      var e = 31 - ze(t), s = 1 << e;
      r[e] = -1, t &= ~s;
    }
  }
  function md(r) {
    if (Y & 6) throw Error(z(327));
    vn();
    var t = us(r, 0);
    if (!(t & 1)) return te(r, pt()), null;
    var e = Ls(r, t);
    if (r.tag !== 0 && e === 2) {
      var s = Ma(r);
      s !== 0 && (t = s, e = wi(r, s));
    }
    if (e === 1) throw e = ko, Ar(r, 0), k_(r, t), te(r, pt()), e;
    if (e === 6) throw Error(z(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = t, Cr(r, Kt, Ae), te(r, pt()), null;
  }
  function rc(r, t) {
    var e = Y;
    Y |= 1;
    try {
      return r(t);
    } finally {
      Y = e, Y === 0 && (Ln = pt() + 500, Is && Sr());
    }
  }
  function Zr(r) {
    dr !== null && dr.tag === 0 && !(Y & 6) && vn();
    var t = Y;
    Y |= 1;
    var e = be.transition, s = K;
    try {
      if (be.transition = null, K = 1, r) return r();
    } finally {
      K = s, be.transition = e, Y = t, !(Y & 6) && Sr();
    }
  }
  function nc() {
    ee = wn.current, rt(wn);
  }
  function Ar(r, t) {
    r.finishedWork = null, r.finishedLanes = 0;
    var e = r.timeoutHandle;
    if (e !== -1 && (r.timeoutHandle = -1, Tw(e)), ft !== null) for (e = ft.return; e !== null; ) {
      var s = e;
      switch (Ii(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && bs();
          break;
        case 3:
          Cn(), rt(Jt), rt(Dt), qi();
          break;
        case 5:
          Hi(s);
          break;
        case 4:
          Cn();
          break;
        case 13:
          rt(at);
          break;
        case 19:
          rt(at);
          break;
        case 10:
          Qi(s.type._context);
          break;
        case 22:
        case 23:
          nc();
      }
      e = e.return;
    }
    if (jt = r, ft = r = mr(r.current, null), Ct = ee = t, yt = 0, ko = null, ec = Qs = Kr = 0, Kt = to = null, Tr !== null) {
      for (t = 0; t < Tr.length; t++) if (e = Tr[t], s = e.interleaved, s !== null) {
        e.interleaved = null;
        var o = s.next, n = e.pending;
        if (n !== null) {
          var c = n.next;
          n.next = o, s.next = c;
        }
        e.pending = s;
      }
      Tr = null;
    }
    return r;
  }
  function Cu(r, t) {
    do {
      var e = ft;
      try {
        if (Wi(), es.current = Es, Ss) {
          for (var s = it.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          Ss = false;
        }
        if (Xr = 0, kt = bt = it = null, Jn = false, yo = 0, tc.current = null, e === null || e.return === null) {
          yt = 1, ko = t, ft = null;
          break;
        }
        t: {
          var n = r, c = e.return, d = e, u = t;
          if (t = Ct, d.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
            var l = u, m = d, x = m.tag;
            if (!(m.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var k = m.alternate;
              k ? (m.updateQueue = k.updateQueue, m.memoizedState = k.memoizedState, m.lanes = k.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var O = ad(c);
            if (O !== null) {
              O.flags &= -257, id(O, c, d, n, t), O.mode & 1 && sd(n, l, t), t = O, u = l;
              var N = t.updateQueue;
              if (N === null) {
                var F = /* @__PURE__ */ new Set();
                F.add(u), t.updateQueue = F;
              } else N.add(u);
              break t;
            } else {
              if (!(t & 1)) {
                sd(n, l, t), oc();
                break t;
              }
              u = Error(z(426));
            }
          } else if (st && d.mode & 1) {
            var I = ad(c);
            if (I !== null) {
              !(I.flags & 65536) && (I.flags |= 256), id(I, c, d, n, t), Ui(On(u, d));
              break t;
            }
          }
          n = u = On(u, d), yt !== 4 && (yt = 2), to === null ? to = [
            n
          ] : to.push(n), n = c;
          do {
            switch (n.tag) {
              case 3:
                n.flags |= 65536, t &= -t, n.lanes |= t;
                var b = lu(n, u, t);
                td(n, b);
                break t;
              case 1:
                d = u;
                var h = n.type, v = n.stateNode;
                if (!(n.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (hr === null || !hr.has(v)))) {
                  n.flags |= 65536, t &= -t, n.lanes |= t;
                  var E = uu(n, d, t);
                  td(n, E);
                  break t;
                }
            }
            n = n.return;
          } while (n !== null);
        }
        Nu(e);
      } catch (L) {
        t = L, ft === e && e !== null && (ft = e = e.return);
        continue;
      }
      break;
    } while (true);
  }
  function Ou() {
    var r = zs.current;
    return zs.current = Es, r === null ? Es : r;
  }
  function oc() {
    (yt === 0 || yt === 3 || yt === 2) && (yt = 4), jt === null || !(Kr & 268435455) && !(Qs & 268435455) || k_(jt, Ct);
  }
  function Ls(r, t) {
    var e = Y;
    Y |= 2;
    var s = Ou();
    (jt !== r || Ct !== t) && (Ae = null, Ar(r, t));
    do
      try {
        nf();
        break;
      } catch (o) {
        Cu(r, o);
      }
    while (true);
    if (Wi(), Y = e, zs.current = s, ft !== null) throw Error(z(261));
    return jt = null, Ct = 0, yt;
  }
  function nf() {
    for (; ft !== null; ) Lu(ft);
  }
  function of() {
    for (; ft !== null && !Lp(); ) Lu(ft);
  }
  function Lu(r) {
    var t = Tu(r.alternate, r, ee);
    r.memoizedProps = r.pendingProps, t === null ? Nu(r) : ft = t, tc.current = null;
  }
  function Nu(r) {
    var t = r;
    do {
      var e = t.alternate;
      if (r = t.return, t.flags & 32768) {
        if (e = Jw(e, t), e !== null) {
          e.flags &= 32767, ft = e;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          yt = 6, ft = null;
          return;
        }
      } else if (e = Zw(e, t, ee), e !== null) {
        ft = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        ft = t;
        return;
      }
      ft = t = r;
    } while (t !== null);
    yt === 0 && (yt = 5);
  }
  function Cr(r, t, e) {
    var s = K, o = be.transition;
    try {
      be.transition = null, K = 1, sf(r, t, e, s);
    } finally {
      be.transition = o, K = s;
    }
    return null;
  }
  function sf(r, t, e, s) {
    do
      vn();
    while (dr !== null);
    if (Y & 6) throw Error(z(327));
    e = r.finishedWork;
    var o = r.finishedLanes;
    if (e === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, e === r.current) throw Error(z(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var n = e.lanes | e.childLanes;
    if (Mp(r, n), r === jt && (ft = jt = null, Ct = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || Ao || (Ao = true, Pu(ls, function() {
      return vn(), null;
    })), n = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || n) {
      n = be.transition, be.transition = null;
      var c = K;
      K = 1;
      var d = Y;
      Y |= 4, tc.current = null, tf(r, e), Su(e, r), Ew(Ha), ps = !!Aa, Ha = Aa = null, r.current = e, ef(e), Np(), Y = d, K = c, be.transition = n;
    } else r.current = e;
    if (Ao && (Ao = false, dr = r, Os = o), n = r.pendingLanes, n === 0 && (hr = null), Pp(e.stateNode), te(r, pt()), t !== null) for (s = r.onRecoverableError, e = 0; e < t.length; e++) o = t[e], s(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (Cs) throw Cs = false, r = ui, ui = null, r;
    return Os & 1 && r.tag !== 0 && vn(), n = r.pendingLanes, n & 1 ? r === pi ? eo++ : (eo = 0, pi = r) : eo = 0, Sr(), null;
  }
  function vn() {
    if (dr !== null) {
      var r = ll(Os), t = be.transition, e = K;
      try {
        if (be.transition = null, K = 16 > r ? 16 : r, dr === null) var s = false;
        else {
          if (r = dr, dr = null, Os = 0, Y & 6) throw Error(z(331));
          var o = Y;
          for (Y |= 4, $ = r.current; $ !== null; ) {
            var n = $, c = n.child;
            if ($.flags & 16) {
              var d = n.deletions;
              if (d !== null) {
                for (var u = 0; u < d.length; u++) {
                  var l = d[u];
                  for ($ = l; $ !== null; ) {
                    var m = $;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gn(8, m, n);
                    }
                    var x = m.child;
                    if (x !== null) x.return = m, $ = x;
                    else for (; $ !== null; ) {
                      m = $;
                      var k = m.sibling, O = m.return;
                      if (ku(m), m === l) {
                        $ = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = O, $ = k;
                        break;
                      }
                      $ = O;
                    }
                  }
                }
                var N = n.alternate;
                if (N !== null) {
                  var F = N.child;
                  if (F !== null) {
                    N.child = null;
                    do {
                      var I = F.sibling;
                      F.sibling = null, F = I;
                    } while (F !== null);
                  }
                }
                $ = n;
              }
            }
            if (n.subtreeFlags & 2064 && c !== null) c.return = n, $ = c;
            else t: for (; $ !== null; ) {
              if (n = $, n.flags & 2048) switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  Gn(9, n, n.return);
              }
              var b = n.sibling;
              if (b !== null) {
                b.return = n.return, $ = b;
                break t;
              }
              $ = n.return;
            }
          }
          var h = r.current;
          for ($ = h; $ !== null; ) {
            c = $;
            var v = c.child;
            if (c.subtreeFlags & 2064 && v !== null) v.return = c, $ = v;
            else t: for (c = h; $ !== null; ) {
              if (d = $, d.flags & 2048) try {
                switch (d.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ws(9, d);
                }
              } catch (L) {
                lt(d, d.return, L);
              }
              if (d === c) {
                $ = null;
                break t;
              }
              var E = d.sibling;
              if (E !== null) {
                E.return = d.return, $ = E;
                break t;
              }
              $ = d.return;
            }
          }
          if (Y = o, Sr(), We && typeof We.onPostCommitFiberRoot == "function") try {
            We.onPostCommitFiberRoot(Ts, r);
          } catch {
          }
          s = true;
        }
        return s;
      } finally {
        K = e, be.transition = t;
      }
    }
    return false;
  }
  function vd(r, t, e) {
    t = On(e, t), t = lu(r, t, 1), r = br(r, t, 1), t = Qt(), r !== null && (So(r, 1, t), te(r, t));
  }
  function lt(r, t, e) {
    if (r.tag === 3) vd(r, r, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        vd(t, r, e);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (hr === null || !hr.has(s))) {
          r = On(e, r), r = uu(t, r, 1), t = br(t, r, 1), r = Qt(), t !== null && (So(t, 1, r), te(t, r));
          break;
        }
      }
      t = t.return;
    }
  }
  function af(r, t, e) {
    var s = r.pingCache;
    s !== null && s.delete(t), t = Qt(), r.pingedLanes |= r.suspendedLanes & e, jt === r && (Ct & e) === e && (yt === 4 || yt === 3 && (Ct & 130023424) === Ct && 500 > pt() - _c ? Ar(r, 0) : ec |= e), te(r, t);
  }
  function Fu(r, t) {
    t === 0 && (r.mode & 1 ? (t = Ro, Ro <<= 1, !(Ro & 130023424) && (Ro = 4194304)) : t = 1);
    var e = Qt();
    r = l_(r, t), r !== null && (So(r, t, e), te(r, e));
  }
  function cf(r) {
    var t = r.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Fu(r, e);
  }
  function df(r, t) {
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
        throw Error(z(314));
    }
    s !== null && s.delete(t), Fu(r, e);
  }
  var Tu;
  Tu = function(r, t, e) {
    if (r !== null) if (r.memoizedProps !== t.pendingProps || Jt.current) Zt = true;
    else {
      if (!(r.lanes & e) && !(t.flags & 128)) return Zt = false, Kw(r, t, e);
      Zt = !!(r.flags & 131072);
    }
    else Zt = false, st && t.flags & 1048576 && Dl(t, ms, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        rs(r, t), r = t.pendingProps;
        var o = Sn(t, Dt.current);
        mn(t, e), o = Xi(null, t, s, r, o, e);
        var n = Ki();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Gt(s) ? (n = true, hs(t)) : n = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bi(t), o.updater = Ms, t.stateNode = o, o._reactInternals = t, ei(t, s, r, e), t = ni(null, t, s, true, n, e)) : (t.tag = 0, st && n && Di(t), Ut(null, t, o, e), t = t.child), t;
      case 16:
        s = t.elementType;
        t: {
          switch (rs(r, t), r = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = uf(s), r = ke(s, r), o) {
            case 0:
              t = ri(null, t, s, r, e);
              break t;
            case 1:
              t = ld(null, t, s, r, e);
              break t;
            case 11:
              t = cd(null, t, s, r, e);
              break t;
            case 14:
              t = dd(null, t, s, ke(s.type, r), e);
              break t;
          }
          throw Error(z(306, s, ""));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ke(s, o), ri(r, t, s, o, e);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ke(s, o), ld(r, t, s, o, e);
      case 3:
        t: {
          if (gu(t), r === null) throw Error(z(387));
          s = t.pendingProps, n = t.memoizedState, o = n.element, Vl(r, t), xs(t, s, null, e);
          var c = t.memoizedState;
          if (s = c.element, n.isDehydrated) if (n = {
            element: s,
            isDehydrated: false,
            cache: c.cache,
            pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
            transitions: c.transitions
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            o = On(Error(z(423)), t), t = ud(r, t, s, e, o);
            break t;
          } else if (s !== o) {
            o = On(Error(z(424)), t), t = ud(r, t, s, e, o);
            break t;
          } else for (re = gr(t.stateNode.containerInfo.firstChild), ne = t, st = true, Se = null, e = Wl(t, null, s, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (En(), s === o) {
              t = u_(r, t, e);
              break t;
            }
            Ut(r, t, s, e);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Bl(t), r === null && Ja(t), s = t.type, o = t.pendingProps, n = r !== null ? r.memoizedProps : null, c = o.children, qa(s, o) ? c = null : n !== null && qa(s, n) && (t.flags |= 32), fu(r, t), Ut(r, t, c, e), t.child;
      case 6:
        return r === null && Ja(t), null;
      case 13:
        return bu(r, t, e);
      case 4:
        return Ai(t, t.stateNode.containerInfo), s = t.pendingProps, r === null ? t.child = zn(t, null, s, e) : Ut(r, t, s, e), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ke(s, o), cd(r, t, s, o, e);
      case 7:
        return Ut(r, t, t.pendingProps, e), t.child;
      case 8:
        return Ut(r, t, t.pendingProps.children, e), t.child;
      case 12:
        return Ut(r, t, t.pendingProps.children, e), t.child;
      case 10:
        t: {
          if (s = t.type._context, o = t.pendingProps, n = t.memoizedProps, c = o.value, G(vs, s._currentValue), s._currentValue = c, n !== null) if (Oe(n.value, c)) {
            if (n.children === o.children && !Jt.current) {
              t = u_(r, t, e);
              break t;
            }
          } else for (n = t.child, n !== null && (n.return = t); n !== null; ) {
            var d = n.dependencies;
            if (d !== null) {
              c = n.child;
              for (var u = d.firstContext; u !== null; ) {
                if (u.context === s) {
                  if (n.tag === 1) {
                    u = i_(-1, e & -e), u.tag = 2;
                    var l = n.updateQueue;
                    if (l !== null) {
                      l = l.shared;
                      var m = l.pending;
                      m === null ? u.next = u : (u.next = m.next, m.next = u), l.pending = u;
                    }
                  }
                  n.lanes |= e, u = n.alternate, u !== null && (u.lanes |= e), Ga(n.return, e, t), d.lanes |= e;
                  break;
                }
                u = u.next;
              }
            } else if (n.tag === 10) c = n.type === t.type ? null : n.child;
            else if (n.tag === 18) {
              if (c = n.return, c === null) throw Error(z(341));
              c.lanes |= e, d = c.alternate, d !== null && (d.lanes |= e), Ga(c, e, t), c = n.sibling;
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
          Ut(r, t, o.children, e), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, mn(t, e), o = he(o), s = s(o), t.flags |= 1, Ut(r, t, s, e), t.child;
      case 14:
        return s = t.type, o = ke(s, t.pendingProps), o = ke(s.type, o), dd(r, t, s, o, e);
      case 15:
        return pu(r, t, t.type, t.pendingProps, e);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : ke(s, o), rs(r, t), t.tag = 1, Gt(s) ? (r = true, hs(t)) : r = false, mn(t, e), du(t, s, o), ei(t, s, o, e), ni(null, t, s, true, r, e);
      case 19:
        return hu(r, t, e);
      case 22:
        return wu(r, t, e);
    }
    throw Error(z(156, t.tag));
  };
  function Pu(r, t) {
    return al(r, t);
  }
  function lf(r, t, e, s) {
    this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fe(r, t, e, s) {
    return new lf(r, t, e, s);
  }
  function sc(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function uf(r) {
    if (typeof r == "function") return sc(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === Si) return 11;
      if (r === Ei) return 14;
    }
    return 2;
  }
  function mr(r, t) {
    var e = r.alternate;
    return e === null ? (e = fe(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
  }
  function ss(r, t, e, s, o, n) {
    var c = 2;
    if (s = r, typeof r == "function") sc(r) && (c = 1);
    else if (typeof r == "string") c = 5;
    else t: switch (r) {
      case rn:
        return Hr(e.children, o, n, t);
      case ji:
        c = 8, o |= 8;
        break;
      case Sa:
        return r = fe(12, e, t, o | 2), r.elementType = Sa, r.lanes = n, r;
      case Ea:
        return r = fe(13, e, t, o), r.elementType = Ea, r.lanes = n, r;
      case za:
        return r = fe(19, e, t, o), r.elementType = za, r.lanes = n, r;
      case Bd:
        return Vs(e, o, n, t);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case Qd:
            c = 10;
            break t;
          case Vd:
            c = 9;
            break t;
          case Si:
            c = 11;
            break t;
          case Ei:
            c = 14;
            break t;
          case h_:
            c = 16, s = null;
            break t;
        }
        throw Error(z(130, r == null ? r : typeof r, ""));
    }
    return t = fe(c, e, t, o), t.elementType = r, t.type = s, t.lanes = n, t;
  }
  function Hr(r, t, e, s) {
    return r = fe(7, r, s, t), r.lanes = e, r;
  }
  function Vs(r, t, e, s) {
    return r = fe(22, r, s, t), r.elementType = Bd, r.lanes = e, r.stateNode = {
      isHidden: false
    }, r;
  }
  function ka(r, t, e) {
    return r = fe(6, r, null, t), r.lanes = e, r;
  }
  function xa(r, t, e) {
    return t = fe(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    }, t;
  }
  function pf(r, t, e, s, o) {
    this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ra(0), this.expirationTimes = ra(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ra(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function ac(r, t, e, s, o, n, c, d, u) {
    return r = new pf(r, t, e, d, u), t === 1 ? (t = 1, n === true && (t |= 8)) : t = 0, n = fe(3, null, null, t), r.current = n, n.stateNode = r, n.memoizedState = {
      element: s,
      isDehydrated: e,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Bi(n), r;
  }
  function wf(r, t, e) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _n,
      key: s == null ? null : "" + s,
      children: r,
      containerInfo: t,
      implementation: e
    };
  }
  function Ru(r) {
    if (!r) return kr;
    r = r._reactInternals;
    t: {
      if (Gr(r) !== r || r.tag !== 1) throw Error(z(170));
      var t = r;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break t;
          case 1:
            if (Gt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(z(171));
    }
    if (r.tag === 1) {
      var e = r.type;
      if (Gt(e)) return Rl(r, e, t);
    }
    return t;
  }
  function $u(r, t, e, s, o, n, c, d, u) {
    return r = ac(e, s, true, r, o, n, c, d, u), r.context = Ru(null), e = r.current, s = Qt(), o = yr(e), n = i_(s, o), n.callback = t ?? null, br(e, n, o), r.current.lanes = o, So(r, o, s), te(r, s), r;
  }
  function Bs(r, t, e, s) {
    var o = t.current, n = Qt(), c = yr(o);
    return e = Ru(e), t.context === null ? t.context = e : t.pendingContext = e, t = i_(n, c), t.payload = {
      element: r
    }, s = s === void 0 ? null : s, s !== null && (t.callback = s), r = br(o, t, c), r !== null && (Ce(r, o, c, n), ts(r, o, c)), c;
  }
  function Ns(r) {
    if (r = r.current, !r.child) return null;
    switch (r.child.tag) {
      case 5:
        return r.child.stateNode;
      default:
        return r.child.stateNode;
    }
  }
  function kd(r, t) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var e = r.retryLane;
      r.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ic(r, t) {
    kd(r, t), (r = r.alternate) && kd(r, t);
  }
  function ff() {
    return null;
  }
  var Du = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function cc(r) {
    this._internalRoot = r;
  }
  As.prototype.render = cc.prototype.render = function(r) {
    var t = this._internalRoot;
    if (t === null) throw Error(z(409));
    Bs(r, t, null, null);
  };
  As.prototype.unmount = cc.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var t = r.containerInfo;
      Zr(function() {
        Bs(null, r, null, null);
      }), t[d_] = null;
    }
  };
  function As(r) {
    this._internalRoot = r;
  }
  As.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var t = wl();
      r = {
        blockedOn: null,
        target: r,
        priority: t
      };
      for (var e = 0; e < v_.length && t !== 0 && t < v_[e].priority; e++) ;
      v_.splice(e, 0, r), e === 0 && gl(r);
    }
  };
  function dc(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Hs(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function xd() {
  }
  function gf(r, t, e, s, o) {
    if (o) {
      if (typeof s == "function") {
        var n = s;
        s = function() {
          var l = Ns(c);
          n.call(l);
        };
      }
      var c = $u(t, s, r, 0, null, false, false, "", xd);
      return r._reactRootContainer = c, r[d_] = c.current, wo(r.nodeType === 8 ? r.parentNode : r), Zr(), c;
    }
    for (; o = r.lastChild; ) r.removeChild(o);
    if (typeof s == "function") {
      var d = s;
      s = function() {
        var l = Ns(u);
        d.call(l);
      };
    }
    var u = ac(r, 0, false, null, null, false, false, "", xd);
    return r._reactRootContainer = u, r[d_] = u.current, wo(r.nodeType === 8 ? r.parentNode : r), Zr(function() {
      Bs(t, u, e, s);
    }), u;
  }
  function qs(r, t, e, s, o) {
    var n = e._reactRootContainer;
    if (n) {
      var c = n;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var u = Ns(c);
          d.call(u);
        };
      }
      Bs(t, c, r, o);
    } else c = gf(e, t, r, o, s);
    return Ns(c);
  }
  ul = function(r) {
    switch (r.tag) {
      case 3:
        var t = r.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var e = An(t.pendingLanes);
          e !== 0 && (Oi(t, e | 1), te(t, pt()), !(Y & 6) && (Ln = pt() + 500, Sr()));
        }
        break;
      case 13:
        Zr(function() {
          var s = l_(r, 1);
          if (s !== null) {
            var o = Qt();
            Ce(s, r, 1, o);
          }
        }), ic(r, 1);
    }
  };
  Li = function(r) {
    if (r.tag === 13) {
      var t = l_(r, 134217728);
      if (t !== null) {
        var e = Qt();
        Ce(t, r, 134217728, e);
      }
      ic(r, 134217728);
    }
  };
  pl = function(r) {
    if (r.tag === 13) {
      var t = yr(r), e = l_(r, t);
      if (e !== null) {
        var s = Qt();
        Ce(e, r, t, s);
      }
      ic(r, t);
    }
  };
  wl = function() {
    return K;
  };
  fl = function(r, t) {
    var e = K;
    try {
      return K = r, t();
    } finally {
      K = e;
    }
  };
  Da = function(r, t, e) {
    switch (t) {
      case "input":
        if (La(r, e), t = e.name, e.type === "radio" && t != null) {
          for (e = r; e.parentNode; ) e = e.parentNode;
          for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
            var s = e[t];
            if (s !== r && s.form === r.form) {
              var o = Ds(s);
              if (!o) throw Error(z(90));
              Hd(s), La(s, o);
            }
          }
        }
        break;
      case "textarea":
        Yd(r, e);
        break;
      case "select":
        t = e.value, t != null && gn(r, !!e.multiple, t, false);
    }
  };
  el = rc;
  _l = Zr;
  var bf = {
    usingClientEntryPoint: false,
    Events: [
      zo,
      an,
      Ds,
      Gd,
      tl,
      rc
    ]
  }, Qn = {
    findFiberByHostInstance: Fr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, hf = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: p_.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(r) {
      return r = ol(r), r === null ? null : r.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || ff,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ho.isDisabled && Ho.supportsFiber) try {
      Ts = Ho.inject(hf), We = Ho;
    } catch {
    }
  }
  ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bf;
  ae.createPortal = function(r, t) {
    var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!dc(t)) throw Error(z(200));
    return wf(r, t, null, e);
  };
  ae.createRoot = function(r, t) {
    if (!dc(r)) throw Error(z(299));
    var e = false, s = "", o = Du;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ac(r, 1, false, null, null, e, false, s, o), r[d_] = t.current, wo(r.nodeType === 8 ? r.parentNode : r), new cc(t);
  };
  ae.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var t = r._reactInternals;
    if (t === void 0) throw typeof r.render == "function" ? Error(z(188)) : (r = Object.keys(r).join(","), Error(z(268, r)));
    return r = ol(t), r = r === null ? null : r.stateNode, r;
  };
  ae.flushSync = function(r) {
    return Zr(r);
  };
  ae.hydrate = function(r, t, e) {
    if (!Hs(t)) throw Error(z(200));
    return qs(null, r, t, true, e);
  };
  ae.hydrateRoot = function(r, t, e) {
    if (!dc(r)) throw Error(z(405));
    var s = e != null && e.hydratedSources || null, o = false, n = "", c = Du;
    if (e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), t = $u(t, null, r, 1, e ?? null, o, false, n, c), r[d_] = t.current, wo(r), s) for (r = 0; r < s.length; r++) e = s[r], o = e._getVersion, o = o(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      e,
      o
    ] : t.mutableSourceEagerHydrationData.push(e, o);
    return new As(t);
  };
  ae.render = function(r, t, e) {
    if (!Hs(t)) throw Error(z(200));
    return qs(null, r, t, false, e);
  };
  ae.unmountComponentAtNode = function(r) {
    if (!Hs(r)) throw Error(z(40));
    return r._reactRootContainer ? (Zr(function() {
      qs(null, null, r, false, function() {
        r._reactRootContainer = null, r[d_] = null;
      });
    }), true) : false;
  };
  ae.unstable_batchedUpdates = rc;
  ae.unstable_renderSubtreeIntoContainer = function(r, t, e, s) {
    if (!Hs(e)) throw Error(z(200));
    if (r == null || r._reactInternals === void 0) throw Error(z(38));
    return qs(r, t, e, false, s);
  };
  ae.version = "18.3.1-next-f1338f8080-20240426";
  function Iu() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iu);
    } catch (r) {
      console.error(r);
    }
  }
  Iu(), Id.exports = ae;
  var yf = Id.exports, Uu, jd = yf;
  Uu = jd.createRoot, jd.hydrateRoot;
  const mf = "" + new URL("cardano_serialization_lib_bg-DYSGQNOE.wasm", import.meta.url).href, vf = async (r = {}, t) => {
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
  function kf(r) {
    _ = r;
  }
  const t_ = new Array(128).fill(void 0);
  t_.push(void 0, null, true, false);
  function Q(r) {
    return t_[r];
  }
  let _o = t_.length;
  function xf(r) {
    r < 132 || (t_[r] = _o, _o = r);
  }
  function p(r) {
    const t = Q(r);
    return xf(r), t;
  }
  const jf = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Mu = new jf("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Mu.decode();
  let qo = null;
  function kn() {
    return (qo === null || qo.byteLength === 0) && (qo = new Uint8Array(_.memory.buffer)), qo;
  }
  function y(r, t) {
    return r = r >>> 0, Mu.decode(kn().subarray(r, r + t));
  }
  function q(r) {
    _o === t_.length && t_.push(t_.length + 1);
    const t = _o;
    return _o = t_[t], t_[t] = r, t;
  }
  let w = 0;
  const Sf = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let as = new Sf("utf-8");
  const Ef = typeof as.encodeInto == "function" ? function(r, t) {
    return as.encodeInto(r, t);
  } : function(r, t) {
    const e = as.encode(r);
    return t.set(e), {
      read: r.length,
      written: e.length
    };
  };
  function g(r, t, e) {
    if (e === void 0) {
      const d = as.encode(r), u = t(d.length, 1) >>> 0;
      return kn().subarray(u, u + d.length).set(d), w = d.length, u;
    }
    let s = r.length, o = t(s, 1) >>> 0;
    const n = kn();
    let c = 0;
    for (; c < s; c++) {
      const d = r.charCodeAt(c);
      if (d > 127) break;
      n[o + c] = d;
    }
    if (c !== s) {
      c !== 0 && (r = r.slice(c)), o = e(o, s, s = c + r.length * 3, 1) >>> 0;
      const d = kn().subarray(o + c, o + s), u = Ef(r, d);
      c += u.written;
    }
    return w = c, o;
  }
  function Ve(r) {
    return r == null;
  }
  let Yo = null;
  function a() {
    return (Yo === null || Yo.byteLength === 0) && (Yo = new Int32Array(_.memory.buffer)), Yo;
  }
  function gi(r) {
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
      o > 0 && (n += gi(r[0]));
      for (let c = 1; c < o; c++) n += ", " + gi(r[c]);
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
    return r = r >>> 0, kn().subarray(r / 1, r / 1 + t);
  }
  function j(r, t) {
    const e = t(r.length * 1, 1) >>> 0;
    return kn().set(r, e / 1), w = r.length, e;
  }
  function f(r, t) {
    if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return r.ptr;
  }
  function w_(r, t) {
    try {
      return r.apply(this, t);
    } catch (e) {
      _.__wbindgen_exn_store(q(e));
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
      _.__wbg_address_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.address_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $t.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $t.__wrap(e);
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
        var o = Ve(t) ? 0 : g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
        _.address_to_bech32(k, this.__wbg_ptr, o, n);
        var c = a()[k / 4 + 0], d = a()[k / 4 + 1], u = a()[k / 4 + 2], l = a()[k / 4 + 3], m = c, x = d;
        if (l) throw m = 0, x = 0, p(u);
        return e = m, s = x, y(m, x);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.address_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    network_id() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_network_id(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return t;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Wt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Wt.prototype);
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
        if (o) throw p(s);
        return Wt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Wt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Wt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.assetname_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Wt.__wrap(e);
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
        if (o) throw p(s);
        return x_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assetnames_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return x_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return x_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.assetnames_get(this.__wbg_ptr, t);
      return Wt.__wrap(e);
    }
    add(t) {
      f(t, Wt), _.assetnames_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class e_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(e_.prototype);
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
        if (o) throw p(s);
        return e_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return e_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.assets_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return e_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return e_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Wt), f(e, C);
      const s = _.assets_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : C.__wrap(s);
    }
    get(t) {
      f(t, Wt);
      const e = _.assets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : C.__wrap(e);
    }
    keys() {
      const t = _.assets_keys(this.__wbg_ptr);
      return x_.__wrap(t);
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
        if (o) throw p(s);
        return j_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return j_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydata_new();
      return j_.__wrap(t);
    }
    metadata() {
      const t = _.auxiliarydata_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : L_.__wrap(t);
    }
    set_metadata(t) {
      f(t, L_), _.auxiliarydata_set_metadata(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.auxiliarydata_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : se.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, se), _.auxiliarydata_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.auxiliarydata_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : De.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, De), _.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    prefer_alonzo_format() {
      return _.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr) !== 0;
    }
    set_prefer_alonzo_format(t) {
      _.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, t);
    }
  }
  class Rr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Rr.prototype);
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
        if (o) throw p(s);
        return Rr.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Rr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.auxiliarydatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ro {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ro.prototype);
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
      f(e, _t), f(s, _t);
      const o = _.baseaddress_new(t, e.__wbg_ptr, s.__wbg_ptr);
      return ro.__wrap(o);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    stake_cred() {
      const t = _.baseaddress_stake_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.baseaddress_to_address(this.__wbg_ptr);
      return $t.__wrap(t);
    }
    static from_address(t) {
      f(t, $t);
      const e = _.baseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : ro.__wrap(e);
    }
  }
  class Pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pt.prototype);
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
        if (o) throw p(s);
        return Pt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    is_zero() {
      return _.bigint_is_zero(this.__wbg_ptr) !== 0;
    }
    as_u64() {
      const t = _.bigint_as_u64(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_int() {
      const t = _.bigint_as_int(this.__wbg_ptr);
      return t === 0 ? void 0 : ut.__wrap(t);
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Pt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    add(t) {
      f(t, Pt);
      const e = _.bigint_add(this.__wbg_ptr, t.__wbg_ptr);
      return Pt.__wrap(e);
    }
    mul(t) {
      f(t, Pt);
      const e = _.bigint_mul(this.__wbg_ptr, t.__wbg_ptr);
      return Pt.__wrap(e);
    }
    static one() {
      const t = _.bigint_one();
      return Pt.__wrap(t);
    }
    increment() {
      const t = _.bigint_increment(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    div_ceil(t) {
      f(t, Pt);
      const e = _.bigint_div_ceil(this.__wbg_ptr, t.__wbg_ptr);
      return Pt.__wrap(e);
    }
  }
  class C {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(C.prototype);
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
        if (o) throw p(s);
        return C.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bignum_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bignum_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static zero() {
      const t = _.bignum_zero();
      return C.__wrap(t);
    }
    static one() {
      const t = _.bignum_one();
      return C.__wrap(t);
    }
    is_zero() {
      return _.bignum_is_zero(this.__wbg_ptr) !== 0;
    }
    div_floor(t) {
      f(t, C);
      const e = _.bignum_div_floor(this.__wbg_ptr, t.__wbg_ptr);
      return C.__wrap(e);
    }
    checked_mul(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_mul(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, C), _.bignum_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, C);
      const e = _.bignum_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return C.__wrap(e);
    }
    compare(t) {
      return f(t, C), _.bignum_compare(this.__wbg_ptr, t.__wbg_ptr);
    }
    less_than(t) {
      return f(t, C), _.bignum_less_than(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    static max_value() {
      const t = _.bignum_max_value();
      return C.__wrap(t);
    }
    static max(t, e) {
      f(t, C), f(e, C);
      const s = _.bignum_max(t.__wbg_ptr, e.__wbg_ptr);
      return C.__wrap(s);
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
        if (o) throw p(s);
        return S_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bootstrapwitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return Ue.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Me.__wrap(t);
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
      f(t, Ue), f(e, Me);
      const n = j(s, _.__wbindgen_malloc), c = w, d = j(o, _.__wbindgen_malloc), u = w, l = _.bootstrapwitness_new(t.__wbg_ptr, e.__wbg_ptr, n, c, d, u);
      return S_.__wrap(l);
    }
  }
  class xo {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xo.prototype);
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
      return xo.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.bootstrapwitnesses_get(this.__wbg_ptr, t);
      return S_.__wrap(e);
    }
    add(t) {
      f(t, S_), _.bootstrapwitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Ht {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ht.prototype);
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
        if (o) throw p(s);
        return Ht.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_stake_registration(t) {
      f(t, er);
      const e = _.certificate_new_stake_registration(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_stake_deregistration(t) {
      f(t, tr);
      const e = _.certificate_new_stake_deregistration(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_stake_delegation(t) {
      f(t, G_);
      const e = _.certificate_new_stake_delegation(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_pool_registration(t) {
      f(t, U_);
      const e = _.certificate_new_pool_registration(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_pool_retirement(t) {
      f(t, M_);
      const e = _.certificate_new_pool_retirement(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_genesis_key_delegation(t) {
      f(t, N_);
      const e = _.certificate_new_genesis_key_delegation(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    static new_move_instantaneous_rewards_cert(t) {
      f(t, R_);
      const e = _.certificate_new_move_instantaneous_rewards_cert(t.__wbg_ptr);
      return Ht.__wrap(e);
    }
    kind() {
      return _.certificate_kind(this.__wbg_ptr) >>> 0;
    }
    as_stake_registration() {
      const t = _.certificate_as_stake_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : er.__wrap(t);
    }
    as_stake_deregistration() {
      const t = _.certificate_as_stake_deregistration(this.__wbg_ptr);
      return t === 0 ? void 0 : tr.__wrap(t);
    }
    as_stake_delegation() {
      const t = _.certificate_as_stake_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : G_.__wrap(t);
    }
    as_pool_registration() {
      const t = _.certificate_as_pool_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : U_.__wrap(t);
    }
    as_pool_retirement() {
      const t = _.certificate_as_pool_retirement(this.__wbg_ptr);
      return t === 0 ? void 0 : M_.__wrap(t);
    }
    as_genesis_key_delegation() {
      const t = _.certificate_as_genesis_key_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : N_.__wrap(t);
    }
    as_move_instantaneous_rewards_cert() {
      const t = _.certificate_as_move_instantaneous_rewards_cert(this.__wbg_ptr);
      return t === 0 ? void 0 : R_.__wrap(t);
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
        if (o) throw p(s);
        return E_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.certificates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return E_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.certificates_get(this.__wbg_ptr, t);
      return Ht.__wrap(e);
    }
    add(t) {
      f(t, Ht), _.certificates_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class $r {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create($r.prototype);
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
        if (o) throw p(s);
        return $r.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.constrplutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    alternative() {
      const t = _.constrplutusdata_alternative(this.__wbg_ptr);
      return C.__wrap(t);
    }
    data() {
      const t = _.constrplutusdata_data(this.__wbg_ptr);
      return ge.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, ge);
      const s = _.constrplutusdata_new(t.__wbg_ptr, e.__wbg_ptr);
      return $r.__wrap(s);
    }
  }
  class __ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(__.prototype);
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
        if (o) throw p(s);
        return __.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return __.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmodel_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return __.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return __.__wrap(t);
    }
    set(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        f(e, ut), _.costmodel_set(c, this.__wbg_ptr, t, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw p(o);
        return ut.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_get(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
  }
  class qe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qe.prototype);
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
        if (o) throw p(s);
        return qe.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.costmdls_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmdls_new();
      return qe.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Mt), f(e, __);
      const s = _.costmdls_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : __.__wrap(s);
    }
    get(t) {
      f(t, Mt);
      const e = _.costmdls_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : __.__wrap(e);
    }
    keys() {
      const t = _.costmdls_keys(this.__wbg_ptr);
      return xn.__wrap(t);
    }
    retain_language_versions(t) {
      f(t, xn);
      const e = _.costmdls_retain_language_versions(this.__wbg_ptr, t.__wbg_ptr);
      return qe.__wrap(e);
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
        if (o) throw p(s);
        return z_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordaoraaaa_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return z_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
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
        if (o) throw p(s);
        return C_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.dnsrecordsrv_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return C_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class Dr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Dr.prototype);
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
        if (o) throw p(s);
        return Dr.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Dr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.datahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Dr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class xt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xt.prototype);
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
        if (o) throw p(s);
        return xt.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return xt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return xt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class we {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(we.prototype);
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
        if (o) throw p(s);
        return we.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return we.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519keyhashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return we.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return we.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.ed25519keyhashes_get(this.__wbg_ptr, t);
      return xt.__wrap(e);
    }
    add(t) {
      f(t, xt), _.ed25519keyhashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.ed25519keyhashes_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : we.__wrap(t);
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
        return t = s, e = o, y(s, o);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ed25519signature_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ed25519signature_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Me.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class no {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(no.prototype);
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
      f(e, _t);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return no.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.enterpriseaddress_to_address(this.__wbg_ptr);
      return $t.__wrap(t);
    }
    static from_address(t) {
      f(t, $t);
      const e = _.enterpriseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : no.__wrap(e);
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
        if (o) throw p(s);
        return O_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunitprices_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem_price() {
      const t = _.exunitprices_mem_price(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    step_price() {
      const t = _.exunitprices_step_price(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    static new(t, e) {
      f(t, ht), f(e, ht);
      const s = _.exunitprices_new(t.__wbg_ptr, e.__wbg_ptr);
      return O_.__wrap(s);
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
        if (o) throw p(s);
        return _e.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunits_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.exunits_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem() {
      const t = _.exunits_mem(this.__wbg_ptr);
      return C.__wrap(t);
    }
    steps() {
      const t = _.exunits_steps(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, C);
      const s = _.exunits_new(t.__wbg_ptr, e.__wbg_ptr);
      return _e.__wrap(s);
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
        if (o) throw p(s);
        return L_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.generaltransactionmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return L_.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, C), f(e, J);
      const s = _.generaltransactionmetadata_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    get(t) {
      f(t, C);
      const e = _.generaltransactionmetadata_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : J.__wrap(e);
    }
    keys() {
      const t = _.generaltransactionmetadata_keys(this.__wbg_ptr);
      return fn.__wrap(t);
    }
  }
  class Ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ir.prototype);
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
        if (o) throw p(s);
        return Ir.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ir.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesisdelegatehash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Ee {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ee.prototype);
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
        if (o) throw p(s);
        return Ee.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ee.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ee.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
        if (o) throw p(s);
        return Or.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesishashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Or.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.genesishashes_get(this.__wbg_ptr, t);
      return Ee.__wrap(e);
    }
    add(t) {
      f(t, Ee), _.genesishashes_add(this.__wbg_ptr, t.__wbg_ptr);
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
        if (o) throw p(s);
        return N_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.genesiskeydelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    genesishash() {
      const t = _.genesiskeydelegation_genesishash(this.__wbg_ptr);
      return Ee.__wrap(t);
    }
    genesis_delegate_hash() {
      const t = _.genesiskeydelegation_genesis_delegate_hash(this.__wbg_ptr);
      return Ir.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
      return a_.__wrap(t);
    }
    static new(t, e, s) {
      f(t, Ee), f(e, Ir), f(s, a_);
      const o = _.genesiskeydelegation_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return N_.__wrap(o);
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
        if (o) throw p(s);
        return ut.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.int_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, C);
      const e = _.int_new(t.__wbg_ptr);
      return ut.__wrap(e);
    }
    static new_negative(t) {
      f(t, C);
      const e = _.int_new_negative(t.__wbg_ptr);
      return ut.__wrap(e);
    }
    static new_i32(t) {
      const e = _.int_new_i32(t);
      return ut.__wrap(e);
    }
    is_positive() {
      return _.int_is_positive(this.__wbg_ptr) !== 0;
    }
    as_positive() {
      const t = _.int_as_positive(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_negative() {
      const t = _.int_as_negative(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
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
        if (s) throw p(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.int_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
        if (o) throw p(s);
        return F_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv4_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv4_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return F_.__wrap(e);
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
        if (o) throw p(s);
        return T_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.ipv6_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.ipv6_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return T_.__wrap(e);
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
  class Mt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Mt.prototype);
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
        if (o) throw p(s);
        return Mt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.language_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_plutus_v1() {
      const t = _.language_new_plutus_v1();
      return Mt.__wrap(t);
    }
    static new_plutus_v2() {
      const t = _.language_new_plutus_v2();
      return Mt.__wrap(t);
    }
    kind() {
      return _.language_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class xn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(xn.prototype);
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
      return xn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.languages_get(this.__wbg_ptr, t);
      return Mt.__wrap(e);
    }
    add(t) {
      f(t, Mt);
      var e = t.__destroy_into_raw();
      _.languages_add(this.__wbg_ptr, e);
    }
    static list() {
      const t = _.languages_list();
      return xn.__wrap(t);
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
        if (o) throw p(s);
        return P_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mirtostakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return P_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, _t), f(e, ut);
      const s = _.mirtostakecredentials_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : ut.__wrap(s);
    }
    get(t) {
      f(t, _t);
      const e = _.mirtostakecredentials_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ut.__wrap(e);
    }
    keys() {
      const t = _.mirtostakecredentials_keys(this.__wbg_ptr);
      return Nr.__wrap(t);
    }
  }
  class lr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(lr.prototype);
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
        if (o) throw p(s);
        return lr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatalist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return lr.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.metadatalist_get(this.__wbg_ptr, t);
      return J.__wrap(e);
    }
    add(t) {
      f(t, J), _.metadatalist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Ur {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ur.prototype);
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
        if (o) throw p(s);
        return Ur.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ur.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Ur.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, J), f(e, J);
      const s = _.metadatamap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    insert_str(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), u = w;
        f(e, J), _.metadatamap_insert_str(c, this.__wbg_ptr, d, u, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw p(o);
        return s === 0 ? void 0 : J.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    insert_i32(t, e) {
      f(e, J);
      const s = _.metadatamap_insert_i32(this.__wbg_ptr, t, e.__wbg_ptr);
      return s === 0 ? void 0 : J.__wrap(s);
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, J), _.metadatamap_get(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.metadatamap_get_str(n, this.__wbg_ptr, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    get_i32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_get_i32(n, this.__wbg_ptr, t);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    has(t) {
      return f(t, J), _.metadatamap_has(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    keys() {
      const t = _.metadatamap_keys(this.__wbg_ptr);
      return lr.__wrap(t);
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
        if (o) throw p(s);
        return Re.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mint_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.mint_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return Re.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, mt), f(e, ur);
      const s = _.mint_new_from_entry(t.__wbg_ptr, e.__wbg_ptr);
      return Re.__wrap(s);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, mt), f(e, ur);
      const s = _.mint_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : ur.__wrap(s);
    }
    get(t) {
      f(t, mt);
      const e = _.mint_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ur.__wrap(e);
    }
    get_all(t) {
      f(t, mt);
      const e = _.mint_get_all(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : lc.__wrap(e);
    }
    keys() {
      const t = _.mint_keys(this.__wbg_ptr);
      return Y_.__wrap(t);
    }
    as_positive_multiasset() {
      const t = _.mint_as_positive_multiasset(this.__wbg_ptr);
      return Yt.__wrap(t);
    }
    as_negative_multiasset() {
      const t = _.mint_as_negative_multiasset(this.__wbg_ptr);
      return Yt.__wrap(t);
    }
  }
  class ur {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ur.prototype);
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
      return ur.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, Wt), f(e, ut);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_new_from_entry(t.__wbg_ptr, s);
      return ur.__wrap(o);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Wt), f(e, ut);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_insert(this.__wbg_ptr, t.__wbg_ptr, s);
      return o === 0 ? void 0 : ut.__wrap(o);
    }
    get(t) {
      f(t, Wt);
      const e = _.mintassets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ut.__wrap(e);
    }
    keys() {
      const t = _.mintassets_keys(this.__wbg_ptr);
      return x_.__wrap(t);
    }
  }
  class lc {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(lc.prototype);
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
  class Ye {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ye.prototype);
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
        if (o) throw p(s);
        return Ye.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousreward_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ye.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_to_other_pot(t, e) {
      f(e, C);
      const s = _.moveinstantaneousreward_new_to_other_pot(t, e.__wbg_ptr);
      return Ye.__wrap(s);
    }
    static new_to_stake_creds(t, e) {
      f(e, P_);
      const s = _.moveinstantaneousreward_new_to_stake_creds(t, e.__wbg_ptr);
      return Ye.__wrap(s);
    }
    pot() {
      return _.moveinstantaneousreward_pot(this.__wbg_ptr) >>> 0;
    }
    kind() {
      return _.moveinstantaneousreward_kind(this.__wbg_ptr) >>> 0;
    }
    as_to_other_pot() {
      const t = _.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    as_to_stake_creds() {
      const t = _.moveinstantaneousreward_as_to_stake_creds(this.__wbg_ptr);
      return t === 0 ? void 0 : P_.__wrap(t);
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
        if (o) throw p(s);
        return R_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.moveinstantaneousrewardscert_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    move_instantaneous_reward() {
      const t = _.moveinstantaneousrewardscert_move_instantaneous_reward(this.__wbg_ptr);
      return Ye.__wrap(t);
    }
    static new(t) {
      f(t, Ye);
      const e = _.moveinstantaneousrewardscert_new(t.__wbg_ptr);
      return R_.__wrap(e);
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
        if (o) throw p(s);
        return Yt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multiasset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Yt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, mt), f(e, e_);
      const s = _.multiasset_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : e_.__wrap(s);
    }
    get(t) {
      f(t, mt);
      const e = _.multiasset_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : e_.__wrap(e);
    }
    set_asset(t, e, s) {
      f(t, mt), f(e, Wt), f(s, C);
      var o = s.__destroy_into_raw();
      const n = _.multiasset_set_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o);
      return n === 0 ? void 0 : C.__wrap(n);
    }
    get_asset(t, e) {
      f(t, mt), f(e, Wt);
      const s = _.multiasset_get_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return C.__wrap(s);
    }
    keys() {
      const t = _.multiasset_keys(this.__wbg_ptr);
      return Y_.__wrap(t);
    }
    sub(t) {
      f(t, Yt);
      const e = _.multiasset_sub(this.__wbg_ptr, t.__wbg_ptr);
      return Yt.__wrap(e);
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
        if (o) throw p(s);
        return $_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.multihostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return C_.__wrap(t);
    }
    static new(t) {
      f(t, C_);
      const e = _.multihostname_new(t.__wbg_ptr);
      return $_.__wrap(e);
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
        if (o) throw p(s);
        return It.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nativescript_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return It.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.nativescript_hash(this.__wbg_ptr);
      return mt.__wrap(t);
    }
    static new_script_pubkey(t) {
      f(t, K_);
      const e = _.nativescript_new_script_pubkey(t.__wbg_ptr);
      return It.__wrap(e);
    }
    static new_script_all(t) {
      f(t, H_);
      const e = _.nativescript_new_script_all(t.__wbg_ptr);
      return It.__wrap(e);
    }
    static new_script_any(t) {
      f(t, q_);
      const e = _.nativescript_new_script_any(t.__wbg_ptr);
      return It.__wrap(e);
    }
    static new_script_n_of_k(t) {
      f(t, X_);
      const e = _.nativescript_new_script_n_of_k(t.__wbg_ptr);
      return It.__wrap(e);
    }
    static new_timelock_start(t) {
      f(t, Je);
      const e = _.nativescript_new_timelock_start(t.__wbg_ptr);
      return It.__wrap(e);
    }
    static new_timelock_expiry(t) {
      f(t, Ze);
      const e = _.nativescript_new_timelock_expiry(t.__wbg_ptr);
      return It.__wrap(e);
    }
    kind() {
      return _.nativescript_kind(this.__wbg_ptr) >>> 0;
    }
    as_script_pubkey() {
      const t = _.nativescript_as_script_pubkey(this.__wbg_ptr);
      return t === 0 ? void 0 : K_.__wrap(t);
    }
    as_script_all() {
      const t = _.nativescript_as_script_all(this.__wbg_ptr);
      return t === 0 ? void 0 : H_.__wrap(t);
    }
    as_script_any() {
      const t = _.nativescript_as_script_any(this.__wbg_ptr);
      return t === 0 ? void 0 : q_.__wrap(t);
    }
    as_script_n_of_k() {
      const t = _.nativescript_as_script_n_of_k(this.__wbg_ptr);
      return t === 0 ? void 0 : X_.__wrap(t);
    }
    as_timelock_start() {
      const t = _.nativescript_as_timelock_start(this.__wbg_ptr);
      return t === 0 ? void 0 : Je.__wrap(t);
    }
    as_timelock_expiry() {
      const t = _.nativescript_as_timelock_expiry(this.__wbg_ptr);
      return t === 0 ? void 0 : Ze.__wrap(t);
    }
    get_required_signers() {
      const t = _.nativescript_get_required_signers(this.__wbg_ptr);
      return we.__wrap(t);
    }
  }
  class se {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(se.prototype);
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
      return se.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.nativescripts_get(this.__wbg_ptr, t);
      return It.__wrap(e);
    }
    add(t) {
      f(t, It), _.nativescripts_add(this.__wbg_ptr, t.__wbg_ptr);
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
        if (o) throw p(s);
        return Xe.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.networkid_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static testnet() {
      const t = _.networkid_testnet();
      return Xe.__wrap(t);
    }
    static mainnet() {
      const t = _.networkid_mainnet();
      return Xe.__wrap(t);
    }
    kind() {
      return _.networkid_kind(this.__wbg_ptr) >>> 0;
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
        if (o) throw p(s);
        return m_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.nonce_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_identity() {
      const t = _.nonce_new_identity();
      return m_.__wrap(t);
    }
    static new_from_hash(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_new_from_hash(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return m_.__wrap(e);
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
  class et {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(et.prototype);
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
        if (o) throw p(s);
        return et.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusdata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return et.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_constr_plutus_data(t) {
      f(t, $r);
      const e = _.plutusdata_new_constr_plutus_data(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_empty_constr_plutus_data(t) {
      f(t, C);
      const e = _.plutusdata_new_empty_constr_plutus_data(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_single_value_constr_plutus_data(t, e) {
      f(t, C), f(e, et);
      const s = _.plutusdata_new_single_value_constr_plutus_data(t.__wbg_ptr, e.__wbg_ptr);
      return et.__wrap(s);
    }
    static new_map(t) {
      f(t, Mr);
      const e = _.plutusdata_new_map(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_list(t) {
      f(t, ge);
      const e = _.plutusdata_new_list(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_integer(t) {
      f(t, Pt);
      const e = _.plutusdata_new_integer(t.__wbg_ptr);
      return et.__wrap(e);
    }
    static new_bytes(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusdata_new_bytes(e, s);
      return et.__wrap(o);
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_constr_plutus_data() {
      const t = _.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : $r.__wrap(t);
    }
    as_map() {
      const t = _.plutusdata_as_map(this.__wbg_ptr);
      return t === 0 ? void 0 : Mr.__wrap(t);
    }
    as_list() {
      const t = _.plutusdata_as_list(this.__wbg_ptr);
      return t === 0 ? void 0 : ge.__wrap(t);
    }
    as_integer() {
      const t = _.plutusdata_as_integer(this.__wbg_ptr);
      return t === 0 ? void 0 : Pt.__wrap(t);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_json(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), u = w;
        _.encode_json_str_to_plutus_datum(c, d, u, e);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw p(o);
        return et.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_address(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, $t), _.plutusdata_from_address(n, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return et.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ge.prototype);
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
        if (o) throw p(s);
        return ge.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutuslist_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ge.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutuslist_new();
      return ge.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutuslist_get(this.__wbg_ptr, t);
      return et.__wrap(e);
    }
    add(t) {
      f(t, et), _.plutuslist_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Mr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Mr.prototype);
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
        if (o) throw p(s);
        return Mr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusmap_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Mr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, et), f(e, et);
      const s = _.plutusmap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : et.__wrap(s);
    }
    get(t) {
      f(t, et);
      const e = _.plutusmap_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : et.__wrap(e);
    }
    keys() {
      const t = _.plutusmap_keys(this.__wbg_ptr);
      return ge.__wrap(t);
    }
  }
  class qt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(qt.prototype);
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
        if (o) throw p(s);
        return qt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscript_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return qt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new(e, s);
      return qt.__wrap(o);
    }
    static new_v2(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new_v2(e, s);
      return qt.__wrap(o);
    }
    static new_with_version(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      f(e, Mt);
      const n = _.plutusscript_new_with_version(s, o, e.__wbg_ptr);
      return qt.__wrap(n);
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
        if (o) throw p(s);
        return qt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = j(t, _.__wbindgen_malloc), u = w;
        f(e, Mt), _.plutusscript_from_bytes_with_version(c, d, u, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw p(o);
        return qt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), u = w;
        f(e, Mt), _.plutusscript_from_hex_with_version(c, d, u, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw p(o);
        return qt.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.plutusscript_hash(this.__wbg_ptr);
      return mt.__wrap(t);
    }
    language_version() {
      const t = _.plutusscript_language_version(this.__wbg_ptr);
      return Mt.__wrap(t);
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
        if (o) throw p(s);
        return De.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.plutusscripts_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return De.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutusscripts_new();
      return De.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutusscripts_get(this.__wbg_ptr, t);
      return qt.__wrap(e);
    }
    add(t) {
      f(t, qt), _.plutusscripts_add(this.__wbg_ptr, t.__wbg_ptr);
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
        if (o) throw p(s);
        return D_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadata_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      const t = _.poolmetadata_url(this.__wbg_ptr);
      return Sd.__wrap(t);
    }
    pool_metadata_hash() {
      const t = _.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
      return Wr.__wrap(t);
    }
    static new(t, e) {
      f(t, Sd), f(e, Wr);
      const s = _.poolmetadata_new(t.__wbg_ptr, e.__wbg_ptr);
      return D_.__wrap(s);
    }
  }
  class Wr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Wr.prototype);
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
        if (o) throw p(s);
        return Wr.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Wr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolmetadatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Wr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
        if (o) throw p(s);
        return I_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolparams_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return I_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    operator() {
      const t = _.poolparams_operator(this.__wbg_ptr);
      return xt.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.poolparams_vrf_keyhash(this.__wbg_ptr);
      return a_.__wrap(t);
    }
    pledge() {
      const t = _.poolparams_pledge(this.__wbg_ptr);
      return C.__wrap(t);
    }
    cost() {
      const t = _.poolparams_cost(this.__wbg_ptr);
      return C.__wrap(t);
    }
    margin() {
      const t = _.poolparams_margin(this.__wbg_ptr);
      return ht.__wrap(t);
    }
    reward_account() {
      const t = _.poolparams_reward_account(this.__wbg_ptr);
      return Be.__wrap(t);
    }
    pool_owners() {
      const t = _.poolparams_pool_owners(this.__wbg_ptr);
      return we.__wrap(t);
    }
    relays() {
      const t = _.poolparams_relays(this.__wbg_ptr);
      return A_.__wrap(t);
    }
    pool_metadata() {
      const t = _.poolparams_pool_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : D_.__wrap(t);
    }
    static new(t, e, s, o, n, c, d, u, l) {
      f(t, xt), f(e, a_), f(s, C), f(o, C), f(n, ht), f(c, Be), f(d, we), f(u, A_);
      let m = 0;
      Ve(l) || (f(l, D_), m = l.__destroy_into_raw());
      const x = _.poolparams_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr, n.__wbg_ptr, c.__wbg_ptr, d.__wbg_ptr, u.__wbg_ptr, m);
      return I_.__wrap(x);
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
        if (o) throw p(s);
        return U_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_params() {
      const t = _.poolregistration_pool_params(this.__wbg_ptr);
      return I_.__wrap(t);
    }
    static new(t) {
      f(t, I_);
      const e = _.poolregistration_new(t.__wbg_ptr);
      return U_.__wrap(e);
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
        if (o) throw p(s);
        return M_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.poolretirement_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_keyhash() {
      const t = _.poolretirement_pool_keyhash(this.__wbg_ptr);
      return xt.__wrap(t);
    }
    epoch() {
      return _.poolretirement_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, xt);
      const s = _.poolretirement_new(t.__wbg_ptr, e);
      return M_.__wrap(s);
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
        if (o) throw p(s);
        return W_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.proposedprotocolparameterupdates_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return W_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ee), f(e, r_);
      const s = _.proposedprotocolparameterupdates_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : r_.__wrap(s);
    }
    get(t) {
      f(t, Ee);
      const e = _.proposedprotocolparameterupdates_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : r_.__wrap(e);
    }
    keys() {
      const t = _.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
      return Or.__wrap(t);
    }
  }
  class r_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(r_.prototype);
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
        if (o) throw p(s);
        return r_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolparamupdate_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolparamupdate_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return r_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_minfee_a(t) {
      f(t, C), _.protocolparamupdate_set_minfee_a(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_a() {
      const t = _.protocolparamupdate_minfee_a(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_minfee_b(t) {
      f(t, C), _.protocolparamupdate_set_minfee_b(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_b() {
      const t = _.protocolparamupdate_minfee_b(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
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
      f(t, C), _.protocolparamupdate_set_key_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    key_deposit() {
      const t = _.protocolparamupdate_key_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_pool_deposit(t) {
      f(t, C), _.protocolparamupdate_set_pool_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_deposit() {
      const t = _.protocolparamupdate_pool_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
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
      f(t, ht), _.protocolparamupdate_set_pool_pledge_influence(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_pledge_influence() {
      const t = _.protocolparamupdate_pool_pledge_influence(this.__wbg_ptr);
      return t === 0 ? void 0 : ht.__wrap(t);
    }
    set_expansion_rate(t) {
      f(t, ht), _.protocolparamupdate_set_expansion_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    expansion_rate() {
      const t = _.protocolparamupdate_expansion_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : ht.__wrap(t);
    }
    set_treasury_growth_rate(t) {
      f(t, ht), _.protocolparamupdate_set_treasury_growth_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    treasury_growth_rate() {
      const t = _.protocolparamupdate_treasury_growth_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : ht.__wrap(t);
    }
    d() {
      const t = _.protocolparamupdate_d(this.__wbg_ptr);
      return t === 0 ? void 0 : ht.__wrap(t);
    }
    extra_entropy() {
      const t = _.protocolparamupdate_extra_entropy(this.__wbg_ptr);
      return t === 0 ? void 0 : m_.__wrap(t);
    }
    set_protocol_version(t) {
      f(t, Q_), _.protocolparamupdate_set_protocol_version(this.__wbg_ptr, t.__wbg_ptr);
    }
    protocol_version() {
      const t = _.protocolparamupdate_protocol_version(this.__wbg_ptr);
      return t === 0 ? void 0 : Q_.__wrap(t);
    }
    set_min_pool_cost(t) {
      f(t, C), _.protocolparamupdate_set_min_pool_cost(this.__wbg_ptr, t.__wbg_ptr);
    }
    min_pool_cost() {
      const t = _.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_ada_per_utxo_byte(t) {
      f(t, C), _.protocolparamupdate_set_ada_per_utxo_byte(this.__wbg_ptr, t.__wbg_ptr);
    }
    ada_per_utxo_byte() {
      const t = _.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_cost_models(t) {
      f(t, qe), _.protocolparamupdate_set_cost_models(this.__wbg_ptr, t.__wbg_ptr);
    }
    cost_models() {
      const t = _.protocolparamupdate_cost_models(this.__wbg_ptr);
      return t === 0 ? void 0 : qe.__wrap(t);
    }
    set_execution_costs(t) {
      f(t, O_), _.protocolparamupdate_set_execution_costs(this.__wbg_ptr, t.__wbg_ptr);
    }
    execution_costs() {
      const t = _.protocolparamupdate_execution_costs(this.__wbg_ptr);
      return t === 0 ? void 0 : O_.__wrap(t);
    }
    set_max_tx_ex_units(t) {
      f(t, _e), _.protocolparamupdate_set_max_tx_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_tx_ex_units() {
      const t = _.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : _e.__wrap(t);
    }
    set_max_block_ex_units(t) {
      f(t, _e), _.protocolparamupdate_set_max_block_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_block_ex_units() {
      const t = _.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : _e.__wrap(t);
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
      return r_.__wrap(t);
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
        if (o) throw p(s);
        return Q_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.protocolversion_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Q_.__wrap(e);
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
      return Q_.__wrap(s);
    }
  }
  class Qr {
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
      _.__wbg_publickey_free(t);
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Qr.__wrap(e);
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
        return t = s, e = o, y(s, o);
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
        if (o) throw p(s);
        return Qr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    verify(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      return f(e, Me), _.publickey_verify(this.__wbg_ptr, s, o, e.__wbg_ptr) !== 0;
    }
    hash() {
      const t = _.publickey_hash(this.__wbg_ptr);
      return xt.__wrap(t);
    }
    to_hex() {
      let t, e;
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.publickey_to_hex(n, this.__wbg_ptr);
        var s = a()[n / 4 + 0], o = a()[n / 4 + 1];
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Qr.__wrap(e);
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
        if (o) throw p(s);
        return V_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemer_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    tag() {
      const t = _.redeemer_tag(this.__wbg_ptr);
      return xe.__wrap(t);
    }
    index() {
      const t = _.redeemer_index(this.__wbg_ptr);
      return C.__wrap(t);
    }
    data() {
      const t = _.redeemer_data(this.__wbg_ptr);
      return et.__wrap(t);
    }
    ex_units() {
      const t = _.redeemer_ex_units(this.__wbg_ptr);
      return _e.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, xe), f(e, C), f(s, et), f(o, _e);
      const n = _.redeemer_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr);
      return V_.__wrap(n);
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
        if (o) throw p(s);
        return xe.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemertag_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemertag_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return xe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_spend() {
      const t = _.redeemertag_new_spend();
      return xe.__wrap(t);
    }
    static new_mint() {
      const t = _.redeemertag_new_mint();
      return xe.__wrap(t);
    }
    static new_cert() {
      const t = _.redeemertag_new_cert();
      return xe.__wrap(t);
    }
    static new_reward() {
      const t = _.redeemertag_new_reward();
      return xe.__wrap(t);
    }
    kind() {
      return _.redeemertag_kind(this.__wbg_ptr) >>> 0;
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
        if (o) throw p(s);
        return B_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.redeemers_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return B_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.redeemers_get(this.__wbg_ptr, t);
      return V_.__wrap(e);
    }
    add(t) {
      f(t, V_), _.redeemers_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_ex_units() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_total_ex_units(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return _e.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Pe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pe.prototype);
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
        if (o) throw p(s);
        return Pe.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relay_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relay_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_single_host_addr(t) {
      f(t, Z_);
      const e = _.relay_new_single_host_addr(t.__wbg_ptr);
      return Pe.__wrap(e);
    }
    static new_single_host_name(t) {
      f(t, J_);
      const e = _.relay_new_single_host_name(t.__wbg_ptr);
      return Pe.__wrap(e);
    }
    static new_multi_host_name(t) {
      f(t, $_);
      const e = _.relay_new_multi_host_name(t.__wbg_ptr);
      return Pe.__wrap(e);
    }
    kind() {
      return _.relay_kind(this.__wbg_ptr) >>> 0;
    }
    as_single_host_addr() {
      const t = _.relay_as_single_host_addr(this.__wbg_ptr);
      return t === 0 ? void 0 : Z_.__wrap(t);
    }
    as_single_host_name() {
      const t = _.relay_as_single_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : J_.__wrap(t);
    }
    as_multi_host_name() {
      const t = _.relay_as_multi_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : $_.__wrap(t);
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
        if (o) throw p(s);
        return A_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.relays_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return A_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.relays_get(this.__wbg_ptr, t);
      return Pe.__wrap(e);
    }
    add(t) {
      f(t, Pe), _.relays_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_rewardaddress_free(t);
    }
    static new(t, e) {
      f(e, _t);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return Be.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    to_address() {
      const t = _.rewardaddress_to_address(this.__wbg_ptr);
      return $t.__wrap(t);
    }
    static from_address(t) {
      f(t, $t);
      const e = _.rewardaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : Be.__wrap(e);
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
        if (o) throw p(s);
        return Lr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.rewardaddresses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Lr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Lr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.rewardaddresses_get(this.__wbg_ptr, t);
      return Be.__wrap(e);
    }
    add(t) {
      f(t, Be), _.rewardaddresses_add(this.__wbg_ptr, t.__wbg_ptr);
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
        if (o) throw p(s);
        return H_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptall_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return se.__wrap(t);
    }
    static new(t) {
      f(t, se);
      const e = _.scriptall_new(t.__wbg_ptr);
      return H_.__wrap(e);
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
        if (o) throw p(s);
        return q_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptany_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return se.__wrap(t);
    }
    static new(t) {
      f(t, se);
      const e = _.scriptall_new(t.__wbg_ptr);
      return q_.__wrap(e);
    }
  }
  class Vr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Vr.prototype);
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
        if (o) throw p(s);
        return Vr.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Vr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptdatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Vr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class mt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(mt.prototype);
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
        if (o) throw p(s);
        return mt.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return mt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
        if (o) throw p(s);
        return Y_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scripthashes_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Y_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.scripthashes_get(this.__wbg_ptr, t);
      return mt.__wrap(e);
    }
    add(t) {
      f(t, mt), _.scripthashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class X_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(X_.prototype);
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
        if (o) throw p(s);
        return X_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptnofk_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    n() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    native_scripts() {
      const t = _.scriptnofk_native_scripts(this.__wbg_ptr);
      return se.__wrap(t);
    }
    static new(t, e) {
      f(e, se);
      const s = _.scriptnofk_new(t, e.__wbg_ptr);
      return X_.__wrap(s);
    }
  }
  class K_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(K_.prototype);
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
        if (o) throw p(s);
        return K_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptpubkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    addr_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return xt.__wrap(t);
    }
    static new(t) {
      f(t, xt);
      const e = _.scriptpubkey_new(t.__wbg_ptr);
      return K_.__wrap(e);
    }
  }
  class Ke {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ke.prototype);
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
        if (o) throw p(s);
        return Ke.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.scriptref_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_native_script(t) {
      f(t, It);
      const e = _.scriptref_new_native_script(t.__wbg_ptr);
      return Ke.__wrap(e);
    }
    static new_plutus_script(t) {
      f(t, qt);
      const e = _.scriptref_new_plutus_script(t.__wbg_ptr);
      return Ke.__wrap(e);
    }
    is_native_script() {
      return _.scriptref_is_native_script(this.__wbg_ptr) !== 0;
    }
    is_plutus_script() {
      return _.scriptref_is_plutus_script(this.__wbg_ptr) !== 0;
    }
    native_script() {
      const t = _.scriptref_native_script(this.__wbg_ptr);
      return t === 0 ? void 0 : It.__wrap(t);
    }
    plutus_script() {
      const t = _.scriptref_plutus_script(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
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
        if (o) throw p(s);
        return Z_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostaddr_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Z_.__wrap(e);
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
      return t === 0 ? void 0 : F_.__wrap(t);
    }
    ipv6() {
      const t = _.singlehostaddr_ipv6(this.__wbg_ptr);
      return t === 0 ? void 0 : T_.__wrap(t);
    }
    static new(t, e, s) {
      let o = 0;
      Ve(e) || (f(e, F_), o = e.__destroy_into_raw());
      let n = 0;
      Ve(s) || (f(s, T_), n = s.__destroy_into_raw());
      const c = _.singlehostaddr_new(Ve(t) ? 16777215 : t, o, n);
      return Z_.__wrap(c);
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
        if (o) throw p(s);
        return J_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.singlehostname_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J_.__wrap(e);
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
      return z_.__wrap(t);
    }
    static new(t, e) {
      f(e, z_);
      const s = _.singlehostname_new(Ve(t) ? 16777215 : t, e.__wbg_ptr);
      return J_.__wrap(s);
    }
  }
  class _t {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(_t.prototype);
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
      f(t, xt);
      const e = _.stakecredential_from_keyhash(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static from_scripthash(t) {
      f(t, mt);
      const e = _.stakecredential_from_scripthash(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    to_keyhash() {
      const t = _.stakecredential_to_keyhash(this.__wbg_ptr);
      return t === 0 ? void 0 : xt.__wrap(t);
    }
    to_scripthash() {
      const t = _.stakecredential_to_scripthash(this.__wbg_ptr);
      return t === 0 ? void 0 : mt.__wrap(t);
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
        if (o) throw p(s);
        return _t.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredential_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
        if (o) throw p(s);
        return Nr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakecredentials_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Nr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.stakecredentials_get(this.__wbg_ptr, t);
      return _t.__wrap(e);
    }
    add(t) {
      f(t, _t), _.stakecredentials_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class G_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(G_.prototype);
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
        if (o) throw p(s);
        return G_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return G_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakedelegation_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return G_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakedelegation_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    pool_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return xt.__wrap(t);
    }
    static new(t, e) {
      f(t, _t), f(e, xt);
      const s = _.stakedelegation_new(t.__wbg_ptr, e.__wbg_ptr);
      return G_.__wrap(s);
    }
  }
  class tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(tr.prototype);
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
        if (o) throw p(s);
        return tr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakederegistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    static new(t) {
      f(t, _t);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return tr.__wrap(e);
    }
  }
  class er {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(er.prototype);
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
        if (o) throw p(s);
        return er.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.stakeregistration_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    static new(t) {
      f(t, _t);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return er.__wrap(e);
    }
  }
  class Ze {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ze.prototype);
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
        if (o) throw p(s);
        return Ze.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ze.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockexpiry_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ze.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Ze.__wrap(e);
    }
    static new_timelockexpiry(t) {
      f(t, C);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Ze.__wrap(e);
    }
  }
  class Je {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Je.prototype);
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
        if (o) throw p(s);
        return Je.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.timelockstart_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_slot(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return t >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    slot_bignum() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Je.__wrap(e);
    }
    static new_timelockstart(t) {
      f(t, C);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Je.__wrap(e);
    }
  }
  class _r {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(_r.prototype);
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
        if (o) throw p(s);
        return _r.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transaction_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return _r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    body() {
      const t = _.transaction_body(this.__wbg_ptr);
      return Ge.__wrap(t);
    }
    witness_set() {
      const t = _.transaction_witness_set(this.__wbg_ptr);
      return nr.__wrap(t);
    }
    is_valid() {
      return _.transaction_is_valid(this.__wbg_ptr) !== 0;
    }
    auxiliary_data() {
      const t = _.transaction_auxiliary_data(this.__wbg_ptr);
      return t === 0 ? void 0 : j_.__wrap(t);
    }
    set_is_valid(t) {
      _.transaction_set_is_valid(this.__wbg_ptr, t);
    }
    static new(t, e, s) {
      f(t, Ge), f(e, nr);
      let o = 0;
      Ve(s) || (f(s, j_), o = s.__destroy_into_raw());
      const n = _.transaction_new(t.__wbg_ptr, e.__wbg_ptr, o);
      return _r.__wrap(n);
    }
  }
  class Ge {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ge.prototype);
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
        if (o) throw p(s);
        return Ge.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ge.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionbody_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ge.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    inputs() {
      const t = _.transactionbody_inputs(this.__wbg_ptr);
      return Xt.__wrap(t);
    }
    outputs() {
      const t = _.transactionbody_outputs(this.__wbg_ptr);
      return n_.__wrap(t);
    }
    fee() {
      const t = _.transactionbody_fee(this.__wbg_ptr);
      return C.__wrap(t);
    }
    ttl() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_ttl(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw p(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ttl_bignum() {
      const t = _.transactionbody_ttl_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    set_ttl(t) {
      f(t, C), _.transactionbody_set_ttl(this.__wbg_ptr, t.__wbg_ptr);
    }
    remove_ttl() {
      _.transactionbody_remove_ttl(this.__wbg_ptr);
    }
    set_certs(t) {
      f(t, E_), _.transactionbody_set_certs(this.__wbg_ptr, t.__wbg_ptr);
    }
    certs() {
      const t = _.transactionbody_certs(this.__wbg_ptr);
      return t === 0 ? void 0 : E_.__wrap(t);
    }
    set_withdrawals(t) {
      f(t, ir), _.transactionbody_set_withdrawals(this.__wbg_ptr, t.__wbg_ptr);
    }
    withdrawals() {
      const t = _.transactionbody_withdrawals(this.__wbg_ptr);
      return t === 0 ? void 0 : ir.__wrap(t);
    }
    set_update(t) {
      f(t, or), _.transactionbody_set_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    update() {
      const t = _.transactionbody_update(this.__wbg_ptr);
      return t === 0 ? void 0 : or.__wrap(t);
    }
    set_auxiliary_data_hash(t) {
      f(t, Rr), _.transactionbody_set_auxiliary_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    auxiliary_data_hash() {
      const t = _.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Rr.__wrap(t);
    }
    set_validity_start_interval(t) {
      _.transactionbody_set_validity_start_interval(this.__wbg_ptr, t);
    }
    set_validity_start_interval_bignum(t) {
      f(t, C);
      var e = t.__destroy_into_raw();
      _.transactionbody_set_validity_start_interval_bignum(this.__wbg_ptr, e);
    }
    validity_start_interval_bignum() {
      const t = _.transactionbody_validity_start_interval_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    validity_start_interval() {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_validity_start_interval(n, this.__wbg_ptr);
        var t = a()[n / 4 + 0], e = a()[n / 4 + 1], s = a()[n / 4 + 2], o = a()[n / 4 + 3];
        if (o) throw p(s);
        return t === 0 ? void 0 : e >>> 0;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_mint(t) {
      f(t, Re), _.transactionbody_set_mint(this.__wbg_ptr, t.__wbg_ptr);
    }
    mint() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Re.__wrap(t);
    }
    multiassets() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Re.__wrap(t);
    }
    set_reference_inputs(t) {
      f(t, Xt), _.transactionbody_set_reference_inputs(this.__wbg_ptr, t.__wbg_ptr);
    }
    reference_inputs() {
      const t = _.transactionbody_reference_inputs(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
    }
    set_script_data_hash(t) {
      f(t, Vr), _.transactionbody_set_script_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    script_data_hash() {
      const t = _.transactionbody_script_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Vr.__wrap(t);
    }
    set_collateral(t) {
      f(t, Xt), _.transactionbody_set_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral() {
      const t = _.transactionbody_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
    }
    set_required_signers(t) {
      f(t, we), _.transactionbody_set_required_signers(this.__wbg_ptr, t.__wbg_ptr);
    }
    required_signers() {
      const t = _.transactionbody_required_signers(this.__wbg_ptr);
      return t === 0 ? void 0 : we.__wrap(t);
    }
    set_network_id(t) {
      f(t, Xe), _.transactionbody_set_network_id(this.__wbg_ptr, t.__wbg_ptr);
    }
    network_id() {
      const t = _.transactionbody_network_id(this.__wbg_ptr);
      return t === 0 ? void 0 : Xe.__wrap(t);
    }
    set_collateral_return(t) {
      f(t, Ie), _.transactionbody_set_collateral_return(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral_return() {
      const t = _.transactionbody_collateral_return(this.__wbg_ptr);
      return t === 0 ? void 0 : Ie.__wrap(t);
    }
    set_total_collateral(t) {
      f(t, C), _.transactionbody_set_total_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_collateral() {
      const t = _.transactionbody_total_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : C.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, Xt), f(e, n_), f(s, C);
      const n = _.transactionbody_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, !Ve(o), Ve(o) ? 0 : o);
      return Ge.__wrap(n);
    }
    static new_tx_body(t, e, s) {
      f(t, Xt), f(e, n_), f(s, C);
      const o = _.transactionbody_new_tx_body(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return Ge.__wrap(o);
    }
  }
  class Br {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Br.prototype);
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
        if (o) throw p(s);
        return Br.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Br.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Br.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class rr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(rr.prototype);
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
        if (o) throw p(s);
        return rr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    transaction_id() {
      const t = _.transactioninput_transaction_id(this.__wbg_ptr);
      return Br.__wrap(t);
    }
    index() {
      return _.transactioninput_index(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, Br);
      const s = _.transactioninput_new(t.__wbg_ptr, e);
      return rr.__wrap(s);
    }
  }
  class Xt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Xt.prototype);
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
        if (o) throw p(s);
        return Xt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Xt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactioninputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Xt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return Xt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactioninputs_get(this.__wbg_ptr, t);
      return rr.__wrap(e);
    }
    add(t) {
      f(t, rr), _.transactioninputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.transactioninputs_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : Xt.__wrap(t);
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
        if (o) throw p(s);
        return J.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_map(t) {
      f(t, Ur);
      const e = _.transactionmetadatum_new_map(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_list(t) {
      f(t, lr);
      const e = _.transactionmetadatum_new_list(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_int(t) {
      f(t, ut);
      const e = _.transactionmetadatum_new_int(t.__wbg_ptr);
      return J.__wrap(e);
    }
    static new_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_new_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_text(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatum_new_text(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return J.__wrap(e);
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
        if (s) throw p(e);
        return Ur.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_list() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_list(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return lr.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_int() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_int(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return ut.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    as_bytes() {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionmetadatum_as_bytes(c, this.__wbg_ptr);
        var t = a()[c / 4 + 0], e = a()[c / 4 + 1], s = a()[c / 4 + 2], o = a()[c / 4 + 3];
        if (o) throw p(s);
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
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  }
  class fn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(fn.prototype);
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
        if (o) throw p(s);
        return fn.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionmetadatumlabels_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return fn.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return fn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionmetadatumlabels_get(this.__wbg_ptr, t);
      return C.__wrap(e);
    }
    add(t) {
      f(t, C), _.transactionmetadatumlabels_add(this.__wbg_ptr, t.__wbg_ptr);
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
        if (o) throw p(s);
        return Ie.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutput_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ie.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    address() {
      const t = _.transactionoutput_address(this.__wbg_ptr);
      return $t.__wrap(t);
    }
    amount() {
      const t = _.transactionoutput_amount(this.__wbg_ptr);
      return vt.__wrap(t);
    }
    data_hash() {
      const t = _.transactionoutput_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Dr.__wrap(t);
    }
    plutus_data() {
      const t = _.transactionoutput_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : et.__wrap(t);
    }
    script_ref() {
      const t = _.transactionoutput_script_ref(this.__wbg_ptr);
      return t === 0 ? void 0 : Ke.__wrap(t);
    }
    set_script_ref(t) {
      f(t, Ke), _.transactionoutput_set_script_ref(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_plutus_data(t) {
      f(t, et), _.transactionoutput_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_data_hash(t) {
      f(t, Dr), _.transactionoutput_set_data_hash(this.__wbg_ptr, t.__wbg_ptr);
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
      f(t, $t), f(e, vt);
      const s = _.transactionoutput_new(t.__wbg_ptr, e.__wbg_ptr);
      return Ie.__wrap(s);
    }
    serialization_format() {
      const t = _.transactionoutput_serialization_format(this.__wbg_ptr);
      return t === 2 ? void 0 : t;
    }
  }
  class n_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(n_.prototype);
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
        if (o) throw p(s);
        return n_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return n_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionoutputs_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return n_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return n_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionoutputs_get(this.__wbg_ptr, t);
      return Ie.__wrap(e);
    }
    add(t) {
      f(t, Ie), _.transactionoutputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class nr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(nr.prototype);
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
        if (o) throw p(s);
        return nr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.transactionwitnessset_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_vkeys(t) {
      f(t, ar), _.transactionwitnessset_set_vkeys(this.__wbg_ptr, t.__wbg_ptr);
    }
    vkeys() {
      const t = _.transactionwitnessset_vkeys(this.__wbg_ptr);
      return t === 0 ? void 0 : ar.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, se), _.transactionwitnessset_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.transactionwitnessset_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : se.__wrap(t);
    }
    set_bootstraps(t) {
      f(t, xo), _.transactionwitnessset_set_bootstraps(this.__wbg_ptr, t.__wbg_ptr);
    }
    bootstraps() {
      const t = _.transactionwitnessset_bootstraps(this.__wbg_ptr);
      return t === 0 ? void 0 : xo.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, De), _.transactionwitnessset_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : De.__wrap(t);
    }
    set_plutus_data(t) {
      f(t, ge), _.transactionwitnessset_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_data() {
      const t = _.transactionwitnessset_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : ge.__wrap(t);
    }
    set_redeemers(t) {
      f(t, B_), _.transactionwitnessset_set_redeemers(this.__wbg_ptr, t.__wbg_ptr);
    }
    redeemers() {
      const t = _.transactionwitnessset_redeemers(this.__wbg_ptr);
      return t === 0 ? void 0 : B_.__wrap(t);
    }
    static new() {
      const t = _.transactionwitnessset_new();
      return nr.__wrap(t);
    }
  }
  let Sd = class en {
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
        if (o) throw p(s);
        return en.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return en.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return en.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.url_new(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return en.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
  };
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
        if (o) throw p(s);
        return ht.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.unitinterval_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.unitinterval_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    numerator() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return C.__wrap(t);
    }
    denominator() {
      const t = _.unitinterval_denominator(this.__wbg_ptr);
      return C.__wrap(t);
    }
    static new(t, e) {
      f(t, C), f(e, C);
      const s = _.unitinterval_new(t.__wbg_ptr, e.__wbg_ptr);
      return ht.__wrap(s);
    }
  }
  class or {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(or.prototype);
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
        if (o) throw p(s);
        return or.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.update_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return or.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    proposed_protocol_parameter_updates() {
      const t = _.update_proposed_protocol_parameter_updates(this.__wbg_ptr);
      return W_.__wrap(t);
    }
    epoch() {
      return _.update_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, W_);
      const s = _.update_new(t.__wbg_ptr, e);
      return or.__wrap(s);
    }
  }
  class a_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(a_.prototype);
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
        if (o) throw p(s);
        return a_.__wrap(e);
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
        var o = a()[m / 4 + 0], n = a()[m / 4 + 1], c = a()[m / 4 + 2], d = a()[m / 4 + 3], u = o, l = n;
        if (d) throw u = 0, l = 0, p(c);
        return e = u, s = l, y(u, l);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(e, s, 1);
      }
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return a_.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vrfkeyhash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return a_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class vt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(vt.prototype);
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
        if (o) throw p(s);
        return vt.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return vt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.value_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return vt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, C);
      const e = _.value_new(t.__wbg_ptr);
      return vt.__wrap(e);
    }
    static new_from_assets(t) {
      f(t, Yt);
      const e = _.value_new_from_assets(t.__wbg_ptr);
      return vt.__wrap(e);
    }
    static new_with_assets(t, e) {
      f(t, C), f(e, Yt);
      const s = _.value_new_with_assets(t.__wbg_ptr, e.__wbg_ptr);
      return vt.__wrap(s);
    }
    static zero() {
      const t = _.value_zero();
      return vt.__wrap(t);
    }
    is_zero() {
      return _.value_is_zero(this.__wbg_ptr) !== 0;
    }
    coin() {
      const t = _.value_coin(this.__wbg_ptr);
      return C.__wrap(t);
    }
    set_coin(t) {
      f(t, C), _.value_set_coin(this.__wbg_ptr, t.__wbg_ptr);
    }
    multiasset() {
      const t = _.value_multiasset(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
    set_multiasset(t) {
      f(t, Yt), _.value_set_multiasset(this.__wbg_ptr, t.__wbg_ptr);
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, vt), _.value_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return vt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, vt), _.value_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return vt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, vt);
      const e = _.value_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return vt.__wrap(e);
    }
    compare(t) {
      f(t, vt);
      const e = _.value_compare(this.__wbg_ptr, t.__wbg_ptr);
      return e === 16777215 ? void 0 : e;
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
        if (o) throw p(s);
        return Ue.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkey_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return Ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, Qr);
      const e = _.vkey_new(t.__wbg_ptr);
      return Ue.__wrap(e);
    }
    public_key() {
      const t = _.vkey_public_key(this.__wbg_ptr);
      return Qr.__wrap(t);
    }
  }
  class sr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(sr.prototype);
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
        if (o) throw p(s);
        return sr.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitness_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e) {
      f(t, Ue), f(e, Me);
      const s = _.vkeywitness_new(t.__wbg_ptr, e.__wbg_ptr);
      return sr.__wrap(s);
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return Ue.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return Me.__wrap(t);
    }
  }
  class ar {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ar.prototype);
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
        if (o) throw p(s);
        return ar.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ar.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.vkeywitnesses_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ar.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.publickeys_new();
      return ar.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.vkeywitnesses_get(this.__wbg_ptr, t);
      return sr.__wrap(e);
    }
    add(t) {
      f(t, sr), _.vkeywitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class ir {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ir.prototype);
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
        if (o) throw p(s);
        return ir.__wrap(e);
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
        return t = s, e = o, y(s, o);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    static from_hex(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json() {
      let t, e;
      try {
        const l = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_json(l, this.__wbg_ptr);
        var s = a()[l / 4 + 0], o = a()[l / 4 + 1], n = a()[l / 4 + 2], c = a()[l / 4 + 3], d = s, u = o;
        if (c) throw d = 0, u = 0, p(n);
        return t = d, e = u, y(d, u);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t, e, 1);
      }
    }
    to_js_value() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_js_value(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw p(e);
        return p(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_json(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.withdrawals_from_json(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw p(s);
        return ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return ir.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Be), f(e, C);
      const s = _.withdrawals_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : C.__wrap(s);
    }
    get(t) {
      f(t, Be);
      const e = _.withdrawals_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : C.__wrap(e);
    }
    keys() {
      const t = _.withdrawals_keys(this.__wbg_ptr);
      return Lr.__wrap(t);
    }
  }
  function zf(r) {
    p(r);
  }
  function Cf(r, t) {
    const e = y(r, t);
    return q(e);
  }
  function Of(r, t) {
    const e = new Error(y(r, t));
    return q(e);
  }
  function Lf(r, t) {
    const e = Q(t), s = typeof e == "string" ? e : void 0;
    var o = Ve(s) ? 0 : g(s, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
    a()[r / 4 + 1] = n, a()[r / 4 + 0] = o;
  }
  function Nf(r) {
    return q(r);
  }
  function Ff(r) {
    const t = Q(r);
    return q(t);
  }
  function Tf(r) {
    const t = Q(r);
    return typeof t == "object" && t !== null;
  }
  function Pf(r, t, e) {
    Q(r)[p(t)] = p(e);
  }
  function Rf(r, t) {
    const e = String(Q(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function $f() {
    return w_(function(r, t) {
      Q(r).randomFillSync(p(t));
    }, arguments);
  }
  function Df() {
    return w_(function(r, t) {
      Q(r).getRandomValues(Q(t));
    }, arguments);
  }
  function If(r) {
    const t = Q(r).crypto;
    return q(t);
  }
  function Uf(r) {
    const t = Q(r).process;
    return q(t);
  }
  function Mf(r) {
    const t = Q(r).versions;
    return q(t);
  }
  function Wf(r) {
    const t = Q(r).node;
    return q(t);
  }
  function Qf(r) {
    return typeof Q(r) == "string";
  }
  function Vf() {
    return w_(function() {
      const r = module.require;
      return q(r);
    }, arguments);
  }
  function Bf(r) {
    const t = Q(r).msCrypto;
    return q(t);
  }
  function Af() {
    const r = new Array();
    return q(r);
  }
  function Hf(r) {
    return typeof Q(r) == "function";
  }
  function qf(r, t) {
    const e = new Function(y(r, t));
    return q(e);
  }
  function Yf() {
    return q(/* @__PURE__ */ new Map());
  }
  function Xf() {
    return w_(function(r, t) {
      const e = Q(r).call(Q(t));
      return q(e);
    }, arguments);
  }
  function Kf() {
    const r = new Object();
    return q(r);
  }
  function Zf() {
    return w_(function() {
      const r = self.self;
      return q(r);
    }, arguments);
  }
  function Jf() {
    return w_(function() {
      const r = window.window;
      return q(r);
    }, arguments);
  }
  function Gf() {
    return w_(function() {
      const r = globalThis.globalThis;
      return q(r);
    }, arguments);
  }
  function tg() {
    return w_(function() {
      const r = global.global;
      return q(r);
    }, arguments);
  }
  function eg(r) {
    return Q(r) === void 0;
  }
  function _g(r, t, e) {
    Q(r)[t >>> 0] = p(e);
  }
  function rg() {
    return w_(function(r, t, e) {
      const s = Q(r).call(Q(t), Q(e));
      return q(s);
    }, arguments);
  }
  function ng(r, t, e) {
    const s = Q(r).set(Q(t), Q(e));
    return q(s);
  }
  function og(r) {
    const t = Q(r).buffer;
    return q(t);
  }
  function sg(r, t, e) {
    const s = new Uint8Array(Q(r), t >>> 0, e >>> 0);
    return q(s);
  }
  function ag(r) {
    const t = new Uint8Array(Q(r));
    return q(t);
  }
  function ig(r, t, e) {
    Q(r).set(Q(t), e >>> 0);
  }
  function cg(r) {
    const t = new Uint8Array(r >>> 0);
    return q(t);
  }
  function dg(r, t, e) {
    const s = Q(r).subarray(t >>> 0, e >>> 0);
    return q(s);
  }
  function lg(r, t) {
    const e = new Function(y(r, t));
    return q(e);
  }
  function ug(r, t) {
    const e = Q(r).call(Q(t));
    return q(e);
  }
  function pg(r, t) {
    return Q(r) === Q(t);
  }
  function wg(r) {
    const t = Q(r).self;
    return q(t);
  }
  function fg(r) {
    const t = Q(r).crypto;
    return q(t);
  }
  function gg(r) {
    const t = Q(r).getRandomValues;
    return q(t);
  }
  function bg(r, t) {
    const e = require(y(r, t));
    return q(e);
  }
  function hg(r, t, e) {
    Q(r).randomFillSync(S(t, e));
  }
  function yg(r, t, e) {
    Q(r).getRandomValues(S(t, e));
  }
  function mg(r, t) {
    const e = gi(Q(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function vg(r, t) {
    throw new Error(y(r, t));
  }
  function kg() {
    const r = _.memory;
    return q(r);
  }
  URL = globalThis.URL;
  const i = await vf({
    "./cardano_serialization_lib_bg.js": {
      __wbindgen_object_drop_ref: zf,
      __wbindgen_string_new: Cf,
      __wbindgen_error_new: Of,
      __wbindgen_string_get: Lf,
      __wbindgen_number_new: Nf,
      __wbindgen_object_clone_ref: Ff,
      __wbindgen_is_object: Tf,
      __wbg_set_20cbc34131e76824: Pf,
      __wbg_String_91fba7ded13ba54c: Rf,
      __wbg_randomFillSync_dc1e9a60c158336d: $f,
      __wbg_getRandomValues_37fa2ca9e4e07fab: Df,
      __wbg_crypto_c48a774b022d20ac: If,
      __wbg_process_298734cf255a885d: Uf,
      __wbg_versions_e2e78e134e3e5d01: Mf,
      __wbg_node_1cd7a5d853dbea79: Wf,
      __wbindgen_is_string: Qf,
      __wbg_require_8f08ceecec0f4fee: Vf,
      __wbg_msCrypto_bcb970640f50a1e8: Bf,
      __wbg_new_1d9a920c6bfc44a8: Af,
      __wbindgen_is_function: Hf,
      __wbg_newnoargs_b5b063fc6c2f0376: qf,
      __wbg_new_268f7b7dd3430798: Yf,
      __wbg_call_97ae9d8645dc388b: Xf,
      __wbg_new_0b9bfdd97583284e: Kf,
      __wbg_self_6d479506f72c6a71: Zf,
      __wbg_window_f2557cc78490aceb: Jf,
      __wbg_globalThis_7f206bda628d5286: Gf,
      __wbg_global_ba75c50d1cf384f4: tg,
      __wbindgen_is_undefined: eg,
      __wbg_set_a68214f35c417fa9: _g,
      __wbg_call_168da88779e35f61: rg,
      __wbg_set_933729cf5b66ac11: ng,
      __wbg_buffer_3f3d764d4747d564: og,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: sg,
      __wbg_new_8c3f0052272a457a: ag,
      __wbg_set_83db9690f9353e79: ig,
      __wbg_newwithlength_f5933855e4f48a19: cg,
      __wbg_subarray_58ad4efbb5bcb886: dg,
      __wbg_new_d87f272aec784ec0: lg,
      __wbg_call_eae29933372a39be: ug,
      __wbindgen_jsval_eq: pg,
      __wbg_self_e0b3266d2d9eba1a: wg,
      __wbg_crypto_e95a6e54c5c2e37f: fg,
      __wbg_getRandomValues_dc67302a7bd1aec5: gg,
      __wbg_require_0993fe224bf8e202: bg,
      __wbg_randomFillSync_dd2297de5917c74e: hg,
      __wbg_getRandomValues_02639197c8166a96: yg,
      __wbindgen_debug_string: mg,
      __wbindgen_throw: vg,
      __wbindgen_memory: kg
    }
  }, mf), xg = i.memory, jg = i.unitinterval_to_bytes, Sg = i.unitinterval_from_bytes, Eg = i.unitinterval_to_hex, zg = i.unitinterval_from_hex, Cg = i.unitinterval_to_json, Og = i.unitinterval_to_js_value, Lg = i.unitinterval_from_json, Ng = i.unitinterval_denominator, Fg = i.unitinterval_new, Tg = i.__wbg_transaction_free, Pg = i.transaction_to_bytes, Rg = i.transaction_from_bytes, $g = i.transaction_to_hex, Dg = i.transaction_from_hex, Ig = i.transaction_to_json, Ug = i.transaction_to_js_value, Mg = i.transaction_from_json, Wg = i.transaction_body, Qg = i.transaction_witness_set, Vg = i.transaction_is_valid, Bg = i.transaction_auxiliary_data, Ag = i.transaction_set_is_valid, Hg = i.transaction_new, qg = i.__wbg_transactioninputs_free, Yg = i.transactioninputs_to_bytes, Xg = i.transactioninputs_from_bytes, Kg = i.transactioninputs_to_hex, Zg = i.transactioninputs_from_hex, Jg = i.transactioninputs_to_json, Gg = i.transactioninputs_to_js_value, tb = i.transactioninputs_from_json, eb = i.transactioninputs_get, _b = i.transactioninputs_add, rb = i.transactioninputs_to_option, nb = i.__wbg_transactionoutputs_free, ob = i.transactionoutputs_to_bytes, sb = i.transactionoutputs_from_bytes, ab = i.transactionoutputs_to_hex, ib = i.transactionoutputs_from_hex, cb = i.transactionoutputs_to_json, db = i.transactionoutputs_to_js_value, lb = i.transactionoutputs_from_json, ub = i.transactionoutputs_get, pb = i.transactionoutputs_add, wb = i.__wbg_datacost_free, fb = i.datacost_new_coins_per_word, gb = i.datacost_new_coins_per_byte, bb = i.datacost_coins_per_byte, hb = i.__wbg_certificates_free, yb = i.certificates_to_bytes, mb = i.certificates_from_bytes, vb = i.certificates_to_hex, kb = i.certificates_from_hex, xb = i.certificates_to_json, jb = i.certificates_to_js_value, Sb = i.certificates_from_json, Eb = i.certificates_new, zb = i.certificates_get, Cb = i.certificates_add, Ob = i.__wbg_transactionbody_free, Lb = i.transactionbody_to_bytes, Nb = i.transactionbody_from_bytes, Fb = i.transactionbody_to_hex, Tb = i.transactionbody_from_hex, Pb = i.transactionbody_to_json, Rb = i.transactionbody_to_js_value, $b = i.transactionbody_from_json, Db = i.transactionbody_inputs, Ib = i.transactionbody_outputs, Ub = i.transactionbody_fee, Mb = i.transactionbody_ttl, Wb = i.transactionbody_ttl_bignum, Qb = i.transactionbody_set_ttl, Vb = i.transactionbody_remove_ttl, Bb = i.transactionbody_set_certs, Ab = i.transactionbody_certs, Hb = i.transactionbody_set_withdrawals, qb = i.transactionbody_withdrawals, Yb = i.transactionbody_set_update, Xb = i.transactionbody_update, Kb = i.transactionbody_set_auxiliary_data_hash, Zb = i.transactionbody_auxiliary_data_hash, Jb = i.transactionbody_set_validity_start_interval, Gb = i.transactionbody_set_validity_start_interval_bignum, th = i.transactionbody_validity_start_interval_bignum, eh = i.transactionbody_validity_start_interval, _h = i.transactionbody_set_mint, rh = i.transactionbody_mint, nh = i.transactionbody_set_reference_inputs, oh = i.transactionbody_reference_inputs, sh = i.transactionbody_set_script_data_hash, ah = i.transactionbody_script_data_hash, ih = i.transactionbody_set_collateral, ch = i.transactionbody_collateral, dh = i.transactionbody_set_required_signers, lh = i.transactionbody_required_signers, uh = i.transactionbody_set_network_id, ph = i.transactionbody_network_id, wh = i.transactionbody_set_collateral_return, fh = i.transactionbody_collateral_return, gh = i.transactionbody_set_total_collateral, bh = i.transactionbody_total_collateral, hh = i.transactionbody_new, yh = i.transactionbody_new_tx_body, mh = i.__wbg_transactioninput_free, vh = i.transactioninput_to_bytes, kh = i.transactioninput_from_bytes, xh = i.transactioninput_to_hex, jh = i.transactioninput_from_hex, Sh = i.transactioninput_to_json, Eh = i.transactioninput_to_js_value, zh = i.transactioninput_from_json, Ch = i.transactioninput_transaction_id, Oh = i.transactioninput_index, Lh = i.transactioninput_new, Nh = i.__wbg_transactionoutput_free, Fh = i.transactionoutput_to_bytes, Th = i.transactionoutput_from_bytes, Ph = i.transactionoutput_to_hex, Rh = i.transactionoutput_from_hex, $h = i.transactionoutput_to_json, Dh = i.transactionoutput_to_js_value, Ih = i.transactionoutput_from_json, Uh = i.transactionoutput_address, Mh = i.transactionoutput_amount, Wh = i.transactionoutput_data_hash, Qh = i.transactionoutput_plutus_data, Vh = i.transactionoutput_script_ref, Bh = i.transactionoutput_set_script_ref, Ah = i.transactionoutput_set_plutus_data, Hh = i.transactionoutput_set_data_hash, qh = i.transactionoutput_has_plutus_data, Yh = i.transactionoutput_has_data_hash, Xh = i.transactionoutput_has_script_ref, Kh = i.transactionoutput_new, Zh = i.transactionoutput_serialization_format, Jh = i.stakeregistration_to_bytes, Gh = i.stakeregistration_from_bytes, ty = i.stakeregistration_to_hex, ey = i.stakeregistration_from_hex, _y = i.stakeregistration_to_js_value, ry = i.stakeregistration_from_json, ny = i.__wbg_stakederegistration_free, oy = i.stakederegistration_to_bytes, sy = i.stakederegistration_from_bytes, ay = i.stakederegistration_to_hex, iy = i.stakederegistration_from_hex, cy = i.stakederegistration_to_json, dy = i.stakederegistration_to_js_value, ly = i.stakederegistration_from_json, uy = i.stakederegistration_stake_credential, py = i.stakederegistration_new, wy = i.__wbg_stakedelegation_free, fy = i.stakedelegation_to_bytes, gy = i.stakedelegation_from_bytes, by = i.stakedelegation_to_hex, hy = i.stakedelegation_from_hex, yy = i.stakedelegation_to_json, my = i.stakedelegation_to_js_value, vy = i.stakedelegation_from_json, ky = i.stakedelegation_stake_credential, xy = i.stakedelegation_new, jy = i.__wbg_ed25519keyhashes_free, Sy = i.ed25519keyhashes_to_bytes, Ey = i.ed25519keyhashes_from_bytes, zy = i.ed25519keyhashes_to_hex, Cy = i.ed25519keyhashes_from_hex, Oy = i.ed25519keyhashes_to_json, Ly = i.ed25519keyhashes_to_js_value, Ny = i.ed25519keyhashes_from_json, Fy = i.ed25519keyhashes_new, Ty = i.ed25519keyhashes_get, Py = i.ed25519keyhashes_add, Ry = i.ed25519keyhashes_to_option, $y = i.__wbg_relays_free, Dy = i.relays_to_bytes, Iy = i.relays_from_bytes, Uy = i.relays_to_hex, My = i.relays_from_hex, Wy = i.relays_to_json, Qy = i.relays_to_js_value, Vy = i.relays_from_json, By = i.relays_get, Ay = i.relays_add, Hy = i.__wbg_poolparams_free, qy = i.poolparams_to_bytes, Yy = i.poolparams_from_bytes, Xy = i.poolparams_to_hex, Ky = i.poolparams_from_hex, Zy = i.poolparams_to_json, Jy = i.poolparams_to_js_value, Gy = i.poolparams_from_json, tm = i.poolparams_operator, em = i.poolparams_vrf_keyhash, _m = i.poolparams_pledge, rm = i.poolparams_cost, nm = i.poolparams_margin, om = i.poolparams_reward_account, sm = i.poolparams_pool_owners, am = i.poolparams_relays, im = i.poolparams_pool_metadata, cm = i.poolparams_new, dm = i.__wbg_poolregistration_free, lm = i.poolregistration_to_bytes, um = i.poolregistration_from_bytes, pm = i.poolregistration_to_hex, wm = i.poolregistration_from_hex, fm = i.poolregistration_to_json, gm = i.poolregistration_to_js_value, bm = i.poolregistration_from_json, hm = i.poolregistration_pool_params, ym = i.poolregistration_new, mm = i.__wbg_poolretirement_free, vm = i.poolretirement_to_bytes, km = i.poolretirement_from_bytes, xm = i.poolretirement_to_hex, jm = i.poolretirement_from_hex, Sm = i.poolretirement_to_json, Em = i.poolretirement_to_js_value, zm = i.poolretirement_from_json, Cm = i.poolretirement_pool_keyhash, Om = i.poolretirement_epoch, Lm = i.poolretirement_new, Nm = i.__wbg_genesiskeydelegation_free, Fm = i.genesiskeydelegation_to_bytes, Tm = i.genesiskeydelegation_from_bytes, Pm = i.genesiskeydelegation_to_hex, Rm = i.genesiskeydelegation_from_hex, $m = i.genesiskeydelegation_to_json, Dm = i.genesiskeydelegation_to_js_value, Im = i.genesiskeydelegation_from_json, Um = i.genesiskeydelegation_genesishash, Mm = i.genesiskeydelegation_genesis_delegate_hash, Wm = i.genesiskeydelegation_vrf_keyhash, Qm = i.genesiskeydelegation_new, Vm = i.__wbg_moveinstantaneousrewardscert_free, Bm = i.moveinstantaneousrewardscert_to_bytes, Am = i.moveinstantaneousrewardscert_from_bytes, Hm = i.moveinstantaneousrewardscert_to_hex, qm = i.moveinstantaneousrewardscert_from_hex, Ym = i.moveinstantaneousrewardscert_to_json, Xm = i.moveinstantaneousrewardscert_to_js_value, Km = i.moveinstantaneousrewardscert_from_json, Zm = i.moveinstantaneousrewardscert_move_instantaneous_reward, Jm = i.moveinstantaneousrewardscert_new, Gm = i.__wbg_certificate_free, tv = i.certificate_to_bytes, ev = i.certificate_from_bytes, _v = i.certificate_to_hex, rv = i.certificate_from_hex, nv = i.certificate_to_json, ov = i.certificate_to_js_value, sv = i.certificate_from_json, av = i.certificate_new_stake_registration, iv = i.certificate_new_stake_deregistration, cv = i.certificate_new_stake_delegation, dv = i.certificate_new_pool_registration, lv = i.certificate_new_pool_retirement, uv = i.certificate_new_genesis_key_delegation, pv = i.certificate_new_move_instantaneous_rewards_cert, wv = i.certificate_kind, fv = i.certificate_as_stake_registration, gv = i.certificate_as_stake_deregistration, bv = i.certificate_as_stake_delegation, hv = i.certificate_as_pool_registration, yv = i.certificate_as_pool_retirement, mv = i.certificate_as_genesis_key_delegation, vv = i.certificate_as_move_instantaneous_rewards_cert, kv = i.__wbg_mirtostakecredentials_free, xv = i.mirtostakecredentials_to_bytes, jv = i.mirtostakecredentials_from_bytes, Sv = i.mirtostakecredentials_to_hex, Ev = i.mirtostakecredentials_from_hex, zv = i.mirtostakecredentials_to_json, Cv = i.mirtostakecredentials_to_js_value, Ov = i.mirtostakecredentials_from_json, Lv = i.mirtostakecredentials_insert, Nv = i.mirtostakecredentials_get, Fv = i.mirtostakecredentials_keys, Tv = i.__wbg_moveinstantaneousreward_free, Pv = i.moveinstantaneousreward_to_bytes, Rv = i.moveinstantaneousreward_from_bytes, $v = i.moveinstantaneousreward_to_hex, Dv = i.moveinstantaneousreward_from_hex, Iv = i.moveinstantaneousreward_to_json, Uv = i.moveinstantaneousreward_to_js_value, Mv = i.moveinstantaneousreward_from_json, Wv = i.moveinstantaneousreward_new_to_other_pot, Qv = i.moveinstantaneousreward_new_to_stake_creds, Vv = i.moveinstantaneousreward_pot, Bv = i.moveinstantaneousreward_kind, Av = i.moveinstantaneousreward_as_to_other_pot, Hv = i.moveinstantaneousreward_as_to_stake_creds, qv = i.__wbg_ipv4_free, Yv = i.ipv4_to_bytes, Xv = i.ipv4_from_bytes, Kv = i.ipv4_to_hex, Zv = i.ipv4_from_hex, Jv = i.ipv4_to_json, Gv = i.ipv4_to_js_value, t1 = i.ipv4_from_json, e1 = i.ipv4_new, _1 = i.ipv4_ip, r1 = i.__wbg_ipv6_free, n1 = i.ipv6_to_bytes, o1 = i.ipv6_from_bytes, s1 = i.ipv6_to_hex, a1 = i.ipv6_from_hex, i1 = i.ipv6_to_json, c1 = i.ipv6_to_js_value, d1 = i.ipv6_from_json, l1 = i.ipv6_new, u1 = i.ipv6_ip, p1 = i.url_to_bytes, w1 = i.url_from_bytes, f1 = i.url_to_hex, g1 = i.url_from_hex, b1 = i.url_from_json, h1 = i.url_new, y1 = i.__wbg_dnsrecordaoraaaa_free, m1 = i.dnsrecordaoraaaa_to_bytes, v1 = i.dnsrecordaoraaaa_from_bytes, k1 = i.dnsrecordaoraaaa_to_hex, x1 = i.dnsrecordaoraaaa_from_hex, j1 = i.dnsrecordaoraaaa_to_json, S1 = i.dnsrecordaoraaaa_to_js_value, E1 = i.dnsrecordaoraaaa_from_json, z1 = i.dnsrecordaoraaaa_new, C1 = i.dnsrecordaoraaaa_record, O1 = i.dnsrecordsrv_to_bytes, L1 = i.dnsrecordsrv_from_bytes, N1 = i.dnsrecordsrv_to_hex, F1 = i.dnsrecordsrv_from_hex, T1 = i.dnsrecordsrv_from_json, P1 = i.dnsrecordsrv_new, R1 = i.__wbg_singlehostaddr_free, $1 = i.singlehostaddr_to_bytes, D1 = i.singlehostaddr_from_bytes, I1 = i.singlehostaddr_to_hex, U1 = i.singlehostaddr_from_hex, M1 = i.singlehostaddr_to_json, W1 = i.singlehostaddr_to_js_value, Q1 = i.singlehostaddr_from_json, V1 = i.singlehostaddr_port, B1 = i.singlehostaddr_ipv4, A1 = i.singlehostaddr_ipv6, H1 = i.singlehostaddr_new, q1 = i.__wbg_singlehostname_free, Y1 = i.singlehostname_to_bytes, X1 = i.singlehostname_from_bytes, K1 = i.singlehostname_to_hex, Z1 = i.singlehostname_from_hex, J1 = i.singlehostname_to_json, G1 = i.singlehostname_to_js_value, tk = i.singlehostname_from_json, ek = i.singlehostname_port, _k = i.singlehostname_new, rk = i.__wbg_multihostname_free, nk = i.multihostname_to_bytes, ok = i.multihostname_from_bytes, sk = i.multihostname_to_hex, ak = i.multihostname_from_hex, ik = i.multihostname_to_json, ck = i.multihostname_to_js_value, dk = i.multihostname_from_json, lk = i.multihostname_dns_name, uk = i.multihostname_new, pk = i.__wbg_relay_free, wk = i.relay_to_bytes, fk = i.relay_from_bytes, gk = i.relay_to_hex, bk = i.relay_from_hex, hk = i.relay_to_json, yk = i.relay_to_js_value, mk = i.relay_from_json, vk = i.relay_new_single_host_addr, kk = i.relay_new_single_host_name, xk = i.relay_new_multi_host_name, jk = i.relay_kind, Sk = i.relay_as_single_host_addr, Ek = i.relay_as_single_host_name, zk = i.relay_as_multi_host_name, Ck = i.__wbg_poolmetadata_free, Ok = i.poolmetadata_to_bytes, Lk = i.poolmetadata_from_bytes, Nk = i.poolmetadata_to_hex, Fk = i.poolmetadata_from_hex, Tk = i.poolmetadata_to_json, Pk = i.poolmetadata_to_js_value, Rk = i.poolmetadata_from_json, $k = i.poolmetadata_url, Dk = i.poolmetadata_pool_metadata_hash, Ik = i.poolmetadata_new, Uk = i.__wbg_stakecredentials_free, Mk = i.stakecredentials_to_bytes, Wk = i.stakecredentials_from_bytes, Qk = i.stakecredentials_to_hex, Vk = i.stakecredentials_from_hex, Bk = i.stakecredentials_to_json, Ak = i.stakecredentials_to_js_value, Hk = i.stakecredentials_from_json, qk = i.stakecredentials_get, Yk = i.stakecredentials_add, Xk = i.__wbg_rewardaddresses_free, Kk = i.rewardaddresses_to_bytes, Zk = i.rewardaddresses_from_bytes, Jk = i.rewardaddresses_to_hex, Gk = i.rewardaddresses_from_hex, t0 = i.rewardaddresses_to_json, e0 = i.rewardaddresses_to_js_value, _0 = i.rewardaddresses_from_json, r0 = i.rewardaddresses_get, n0 = i.rewardaddresses_add, o0 = i.__wbg_withdrawals_free, s0 = i.withdrawals_to_bytes, a0 = i.withdrawals_from_bytes, i0 = i.withdrawals_to_hex, c0 = i.withdrawals_from_hex, d0 = i.withdrawals_to_json, l0 = i.withdrawals_to_js_value, u0 = i.withdrawals_from_json, p0 = i.withdrawals_insert, w0 = i.withdrawals_get, f0 = i.withdrawals_keys, g0 = i.__wbg_transactionwitnessset_free, b0 = i.transactionwitnessset_to_bytes, h0 = i.transactionwitnessset_from_bytes, y0 = i.transactionwitnessset_to_hex, m0 = i.transactionwitnessset_from_hex, v0 = i.transactionwitnessset_to_json, k0 = i.transactionwitnessset_to_js_value, x0 = i.transactionwitnessset_from_json, j0 = i.transactionwitnessset_set_vkeys, S0 = i.transactionwitnessset_vkeys, E0 = i.transactionwitnessset_set_native_scripts, z0 = i.transactionwitnessset_native_scripts, C0 = i.transactionwitnessset_set_bootstraps, O0 = i.transactionwitnessset_bootstraps, L0 = i.transactionwitnessset_set_plutus_scripts, N0 = i.transactionwitnessset_plutus_scripts, F0 = i.transactionwitnessset_set_plutus_data, T0 = i.transactionwitnessset_plutus_data, P0 = i.transactionwitnessset_set_redeemers, R0 = i.transactionwitnessset_redeemers, $0 = i.transactionwitnessset_new, D0 = i.__wbg_scriptpubkey_free, I0 = i.scriptpubkey_to_bytes, U0 = i.scriptpubkey_from_bytes, M0 = i.scriptpubkey_to_hex, W0 = i.scriptpubkey_from_hex, Q0 = i.scriptpubkey_to_json, V0 = i.scriptpubkey_to_js_value, B0 = i.scriptpubkey_from_json, A0 = i.scriptpubkey_addr_keyhash, H0 = i.scriptpubkey_new, q0 = i.__wbg_scriptall_free, Y0 = i.scriptall_to_bytes, X0 = i.scriptall_from_bytes, K0 = i.scriptall_to_hex, Z0 = i.scriptall_from_hex, J0 = i.scriptall_to_json, G0 = i.scriptall_to_js_value, t4 = i.scriptall_from_json, e4 = i.scriptall_native_scripts, _4 = i.scriptall_new, r4 = i.scriptany_to_bytes, n4 = i.scriptany_from_bytes, o4 = i.scriptany_to_hex, s4 = i.scriptany_from_hex, a4 = i.scriptany_to_js_value, i4 = i.scriptany_from_json, c4 = i.__wbg_scriptnofk_free, d4 = i.scriptnofk_to_bytes, l4 = i.scriptnofk_from_bytes, u4 = i.scriptnofk_to_hex, p4 = i.scriptnofk_from_hex, w4 = i.scriptnofk_to_json, f4 = i.scriptnofk_to_js_value, g4 = i.scriptnofk_from_json, b4 = i.scriptnofk_native_scripts, h4 = i.scriptnofk_new, y4 = i.timelockstart_to_bytes, m4 = i.timelockstart_from_bytes, v4 = i.timelockstart_to_hex, k4 = i.timelockstart_from_hex, x4 = i.timelockstart_to_js_value, j4 = i.timelockstart_from_json, S4 = i.__wbg_timelockexpiry_free, E4 = i.timelockexpiry_to_bytes, z4 = i.timelockexpiry_from_bytes, C4 = i.timelockexpiry_to_hex, O4 = i.timelockexpiry_from_hex, L4 = i.timelockexpiry_to_json, N4 = i.timelockexpiry_to_js_value, F4 = i.timelockexpiry_from_json, T4 = i.timelockexpiry_slot, P4 = i.timelockexpiry_slot_bignum, R4 = i.timelockexpiry_new, $4 = i.timelockexpiry_new_timelockexpiry, D4 = i.__wbg_scriptref_free, I4 = i.scriptref_to_bytes, U4 = i.scriptref_from_bytes, M4 = i.scriptref_to_hex, W4 = i.scriptref_from_hex, Q4 = i.scriptref_to_json, V4 = i.scriptref_to_js_value, B4 = i.scriptref_from_json, A4 = i.scriptref_new_native_script, H4 = i.scriptref_new_plutus_script, q4 = i.scriptref_is_native_script, Y4 = i.scriptref_is_plutus_script, X4 = i.scriptref_native_script, K4 = i.scriptref_plutus_script, Z4 = i.__wbg_outputdatum_free, J4 = i.outputdatum_new_data_hash, G4 = i.outputdatum_new_data, t6 = i.outputdatum_data_hash, e6 = i.outputdatum_data, _6 = i.__wbg_nativescript_free, r6 = i.nativescript_to_bytes, n6 = i.nativescript_from_bytes, o6 = i.nativescript_to_hex, s6 = i.nativescript_from_hex, a6 = i.nativescript_to_json, i6 = i.nativescript_to_js_value, c6 = i.nativescript_from_json, d6 = i.nativescript_hash, l6 = i.nativescript_new_script_pubkey, u6 = i.nativescript_new_script_all, p6 = i.nativescript_new_script_any, w6 = i.nativescript_new_script_n_of_k, f6 = i.nativescript_new_timelock_start, g6 = i.nativescript_new_timelock_expiry, b6 = i.nativescript_kind, h6 = i.nativescript_as_script_pubkey, y6 = i.nativescript_as_script_all, m6 = i.nativescript_as_script_any, v6 = i.nativescript_as_script_n_of_k, k6 = i.nativescript_as_timelock_start, x6 = i.nativescript_as_timelock_expiry, j6 = i.nativescript_get_required_signers, S6 = i.__wbg_nativescripts_free, E6 = i.nativescripts_get, z6 = i.nativescripts_add, C6 = i.__wbg_update_free, O6 = i.update_to_bytes, L6 = i.update_from_bytes, N6 = i.update_to_hex, F6 = i.update_from_hex, T6 = i.update_to_json, P6 = i.update_to_js_value, R6 = i.update_from_json, $6 = i.update_proposed_protocol_parameter_updates, D6 = i.update_epoch, I6 = i.update_new, U6 = i.__wbg_genesishashes_free, M6 = i.genesishashes_to_bytes, W6 = i.genesishashes_from_bytes, Q6 = i.genesishashes_to_hex, V6 = i.genesishashes_from_hex, B6 = i.genesishashes_to_json, A6 = i.genesishashes_to_js_value, H6 = i.genesishashes_from_json, q6 = i.genesishashes_get, Y6 = i.genesishashes_add, X6 = i.__wbg_scripthashes_free, K6 = i.scripthashes_to_bytes, Z6 = i.scripthashes_from_bytes, J6 = i.scripthashes_to_hex, G6 = i.scripthashes_from_hex, tx = i.scripthashes_to_json, ex = i.scripthashes_to_js_value, _x = i.scripthashes_from_json, rx = i.scripthashes_get, nx = i.scripthashes_add, ox = i.__wbg_proposedprotocolparameterupdates_free, sx = i.proposedprotocolparameterupdates_to_bytes, ax = i.proposedprotocolparameterupdates_from_bytes, ix = i.proposedprotocolparameterupdates_to_hex, cx = i.proposedprotocolparameterupdates_from_hex, dx = i.proposedprotocolparameterupdates_to_json, lx = i.proposedprotocolparameterupdates_to_js_value, ux = i.proposedprotocolparameterupdates_from_json, px = i.proposedprotocolparameterupdates_insert, wx = i.proposedprotocolparameterupdates_get, fx = i.proposedprotocolparameterupdates_keys, gx = i.__wbg_protocolversion_free, bx = i.protocolversion_to_bytes, hx = i.protocolversion_from_bytes, yx = i.protocolversion_to_hex, mx = i.protocolversion_from_hex, vx = i.protocolversion_to_json, kx = i.protocolversion_to_js_value, xx = i.protocolversion_from_json, jx = i.protocolversion_major, Sx = i.protocolversion_minor, Ex = i.protocolversion_new, zx = i.__wbg_protocolparamupdate_free, Cx = i.protocolparamupdate_to_bytes, Ox = i.protocolparamupdate_from_bytes, Lx = i.protocolparamupdate_to_hex, Nx = i.protocolparamupdate_from_hex, Fx = i.protocolparamupdate_to_json, Tx = i.protocolparamupdate_to_js_value, Px = i.protocolparamupdate_from_json, Rx = i.protocolparamupdate_set_minfee_a, $x = i.protocolparamupdate_minfee_a, Dx = i.protocolparamupdate_set_minfee_b, Ix = i.protocolparamupdate_minfee_b, Ux = i.protocolparamupdate_set_max_block_body_size, Mx = i.protocolparamupdate_max_block_body_size, Wx = i.protocolparamupdate_set_max_tx_size, Qx = i.protocolparamupdate_max_tx_size, Vx = i.protocolparamupdate_set_max_block_header_size, Bx = i.protocolparamupdate_max_block_header_size, Ax = i.protocolparamupdate_set_key_deposit, Hx = i.protocolparamupdate_key_deposit, qx = i.protocolparamupdate_set_pool_deposit, Yx = i.protocolparamupdate_pool_deposit, Xx = i.protocolparamupdate_set_max_epoch, Kx = i.protocolparamupdate_max_epoch, Zx = i.protocolparamupdate_set_n_opt, Jx = i.protocolparamupdate_n_opt, Gx = i.protocolparamupdate_set_pool_pledge_influence, t2 = i.protocolparamupdate_pool_pledge_influence, e2 = i.protocolparamupdate_set_expansion_rate, _2 = i.protocolparamupdate_expansion_rate, r2 = i.protocolparamupdate_set_treasury_growth_rate, n2 = i.protocolparamupdate_treasury_growth_rate, o2 = i.protocolparamupdate_d, s2 = i.protocolparamupdate_extra_entropy, a2 = i.protocolparamupdate_set_protocol_version, i2 = i.protocolparamupdate_protocol_version, c2 = i.protocolparamupdate_set_min_pool_cost, d2 = i.protocolparamupdate_min_pool_cost, l2 = i.protocolparamupdate_set_ada_per_utxo_byte, u2 = i.protocolparamupdate_ada_per_utxo_byte, p2 = i.protocolparamupdate_set_cost_models, w2 = i.protocolparamupdate_cost_models, f2 = i.protocolparamupdate_set_execution_costs, g2 = i.protocolparamupdate_execution_costs, b2 = i.protocolparamupdate_set_max_tx_ex_units, h2 = i.protocolparamupdate_max_tx_ex_units, y2 = i.protocolparamupdate_set_max_block_ex_units, m2 = i.protocolparamupdate_max_block_ex_units, v2 = i.protocolparamupdate_set_max_value_size, k2 = i.protocolparamupdate_max_value_size, x2 = i.protocolparamupdate_set_collateral_percentage, j2 = i.protocolparamupdate_collateral_percentage, S2 = i.protocolparamupdate_set_max_collateral_inputs, E2 = i.protocolparamupdate_max_collateral_inputs, z2 = i.protocolparamupdate_new, C2 = i.__wbg_transactionbodies_free, O2 = i.transactionbodies_to_bytes, L2 = i.transactionbodies_from_bytes, N2 = i.transactionbodies_to_hex, F2 = i.transactionbodies_from_hex, T2 = i.transactionbodies_to_json, P2 = i.transactionbodies_to_js_value, R2 = i.transactionbodies_from_json, $2 = i.transactionbodies_get, D2 = i.transactionbodies_add, I2 = i.__wbg_transactionwitnesssets_free, U2 = i.transactionwitnesssets_to_bytes, M2 = i.transactionwitnesssets_from_bytes, W2 = i.transactionwitnesssets_to_hex, Q2 = i.transactionwitnesssets_from_hex, V2 = i.transactionwitnesssets_to_json, B2 = i.transactionwitnesssets_to_js_value, A2 = i.transactionwitnesssets_from_json, H2 = i.transactionwitnesssets_get, q2 = i.transactionwitnesssets_add, Y2 = i.__wbg_auxiliarydataset_free, X2 = i.auxiliarydataset_new, K2 = i.auxiliarydataset_len, Z2 = i.auxiliarydataset_insert, J2 = i.auxiliarydataset_get, G2 = i.auxiliarydataset_indices, tj = i.__wbg_block_free, ej = i.block_to_bytes, _j = i.block_from_bytes, rj = i.block_to_hex, nj = i.block_from_hex, oj = i.block_to_json, sj = i.block_to_js_value, aj = i.block_from_json, ij = i.block_header, cj = i.block_transaction_bodies, dj = i.block_transaction_witness_sets, lj = i.block_auxiliary_data_set, uj = i.block_invalid_transactions, pj = i.block_new, wj = i.__wbg_header_free, fj = i.header_to_bytes, gj = i.header_from_bytes, bj = i.header_to_hex, hj = i.header_from_hex, yj = i.header_to_json, mj = i.header_to_js_value, vj = i.header_from_json, kj = i.header_header_body, xj = i.header_body_signature, jj = i.header_new, Sj = i.__wbg_operationalcert_free, Ej = i.operationalcert_to_bytes, zj = i.operationalcert_from_bytes, Cj = i.operationalcert_to_hex, Oj = i.operationalcert_from_hex, Lj = i.operationalcert_to_json, Nj = i.operationalcert_to_js_value, Fj = i.operationalcert_from_json, Tj = i.operationalcert_hot_vkey, Pj = i.operationalcert_sequence_number, Rj = i.operationalcert_kes_period, $j = i.operationalcert_sigma, Dj = i.operationalcert_new, Ij = i.__wbg_headerbody_free, Uj = i.headerbody_to_bytes, Mj = i.headerbody_from_bytes, Wj = i.headerbody_to_hex, Qj = i.headerbody_from_hex, Vj = i.headerbody_to_json, Bj = i.headerbody_to_js_value, Aj = i.headerbody_from_json, Hj = i.headerbody_block_number, qj = i.headerbody_slot, Yj = i.headerbody_slot_bignum, Xj = i.headerbody_prev_hash, Kj = i.headerbody_issuer_vkey, Zj = i.headerbody_vrf_vkey, Jj = i.headerbody_has_nonce_and_leader_vrf, Gj = i.headerbody_nonce_vrf_or_nothing, t3 = i.headerbody_leader_vrf_or_nothing, e3 = i.headerbody_has_vrf_result, _3 = i.headerbody_vrf_result_or_nothing, r3 = i.headerbody_block_body_size, n3 = i.headerbody_block_body_hash, o3 = i.headerbody_operational_cert, s3 = i.headerbody_protocol_version, a3 = i.headerbody_new, i3 = i.headerbody_new_headerbody, c3 = i.__wbg_assetname_free, d3 = i.assetname_to_bytes, l3 = i.assetname_from_bytes, u3 = i.assetname_to_hex, p3 = i.assetname_from_hex, w3 = i.assetname_to_json, f3 = i.assetname_to_js_value, g3 = i.assetname_from_json, b3 = i.assetname_new, h3 = i.assetname_name, y3 = i.__wbg_assetnames_free, m3 = i.assetnames_to_bytes, v3 = i.assetnames_from_bytes, k3 = i.assetnames_to_hex, x3 = i.assetnames_from_hex, j3 = i.assetnames_to_json, S3 = i.assetnames_to_js_value, E3 = i.assetnames_from_json, z3 = i.assetnames_new, C3 = i.assetnames_len, O3 = i.assetnames_get, L3 = i.assetnames_add, N3 = i.__wbg_assets_free, F3 = i.assets_to_bytes, T3 = i.assets_from_bytes, P3 = i.assets_to_hex, R3 = i.assets_from_hex, $3 = i.assets_to_json, D3 = i.assets_to_js_value, I3 = i.assets_from_json, U3 = i.assets_new, M3 = i.assets_insert, W3 = i.assets_get, Q3 = i.assets_keys, V3 = i.__wbg_multiasset_free, B3 = i.multiasset_to_bytes, A3 = i.multiasset_from_bytes, H3 = i.multiasset_to_hex, q3 = i.multiasset_from_hex, Y3 = i.multiasset_to_json, X3 = i.multiasset_to_js_value, K3 = i.multiasset_from_json, Z3 = i.multiasset_insert, J3 = i.multiasset_get, G3 = i.multiasset_set_asset, t5 = i.multiasset_get_asset, e5 = i.multiasset_keys, _5 = i.multiasset_sub, r5 = i.__wbg_mintsassets_free, n5 = i.__wbg_mintassets_free, o5 = i.mintassets_new_from_entry, s5 = i.mintassets_insert, a5 = i.mintassets_get, i5 = i.mintassets_keys, c5 = i.__wbg_mint_free, d5 = i.mint_to_bytes, l5 = i.mint_from_bytes, u5 = i.mint_to_hex, p5 = i.mint_from_hex, w5 = i.mint_to_json, f5 = i.mint_to_js_value, g5 = i.mint_from_json, b5 = i.mint_new_from_entry, h5 = i.mint_insert, y5 = i.mint_get, m5 = i.mint_get_all, v5 = i.mint_keys, k5 = i.mint_as_positive_multiasset, x5 = i.mint_as_negative_multiasset, j5 = i.__wbg_networkid_free, S5 = i.networkid_to_bytes, E5 = i.networkid_from_bytes, z5 = i.networkid_to_hex, C5 = i.networkid_from_hex, O5 = i.networkid_to_json, L5 = i.networkid_to_js_value, N5 = i.networkid_from_json, F5 = i.networkid_testnet, T5 = i.networkid_mainnet, P5 = i.networkid_kind, R5 = i.__wbg_unitinterval_free, $5 = i.transactionoutputs_len, D5 = i.transactioninputs_len, I5 = i.ed25519keyhashes_len, U5 = i.relays_len, M5 = i.stakecredentials_len, W5 = i.rewardaddresses_len, Q5 = i.withdrawals_len, V5 = i.nativescripts_len, B5 = i.genesishashes_len, A5 = i.scripthashes_len, H5 = i.proposedprotocolparameterupdates_len, q5 = i.scriptnofk_n, Y5 = i.transactionbodies_len, X5 = i.transactionwitnesssets_len, K5 = i.mirtostakecredentials_len, Z5 = i.certificates_len, J5 = i.assets_len, G5 = i.multiasset_len, tS = i.mintassets_len, eS = i.mint_len, _S = i.scriptany_native_scripts, rS = i.unitinterval_numerator, nS = i.timelockstart_slot_bignum, oS = i.timelockstart_slot, sS = i.transactionbody_multiassets, aS = i.stakeregistration_stake_credential, iS = i.url_url, cS = i.dnsrecordsrv_record, dS = i.url_to_js_value, lS = i.dnsrecordsrv_to_js_value, uS = i.__wbg_url_free, pS = i.__wbg_dnsrecordsrv_free, wS = i.__wbg_scriptany_free, fS = i.stakedelegation_pool_keyhash, gS = i.timelockstart_new, bS = i.__wbg_timelockstart_free, hS = i.withdrawals_new, yS = i.proposedprotocolparameterupdates_new, mS = i.mirtostakecredentials_new, vS = i.timelockstart_new_timelockstart, kS = i.transactioninputs_new, xS = i.stakeregistration_new, jS = i.relays_new, SS = i.singlehostname_dns_name, ES = i.stakecredentials_new, zS = i.rewardaddresses_new, CS = i.scriptany_new, OS = i.transactionoutputs_new, LS = i.genesishashes_new, NS = i.scripthashes_new, FS = i.transactionbodies_new, TS = i.transactionwitnesssets_new, PS = i.nativescripts_new, RS = i.multiasset_new, $S = i.mintassets_new, DS = i.mint_new, IS = i.__wbg_stakeregistration_free, US = i.stakeregistration_to_json, MS = i.scriptany_to_json, WS = i.timelockstart_to_json, QS = i.url_to_json, VS = i.dnsrecordsrv_to_json, BS = i.encrypt_with_password, AS = i.decrypt_with_password, HS = i.__wbg_transactionoutputbuilder_free, qS = i.transactionoutputbuilder_new, YS = i.transactionoutputbuilder_with_address, XS = i.transactionoutputbuilder_with_data_hash, KS = i.transactionoutputbuilder_with_plutus_data, ZS = i.transactionoutputbuilder_with_script_ref, JS = i.transactionoutputbuilder_next, GS = i.__wbg_transactionoutputamountbuilder_free, tE = i.transactionoutputamountbuilder_with_value, eE = i.transactionoutputamountbuilder_with_coin, _E = i.transactionoutputamountbuilder_with_coin_and_asset, rE = i.transactionoutputamountbuilder_with_asset_and_min_required_coin, nE = i.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost, oE = i.transactionoutputamountbuilder_build, sE = i.__wbg_transactionunspentoutput_free, aE = i.transactionunspentoutput_to_bytes, iE = i.transactionunspentoutput_from_bytes, cE = i.transactionunspentoutput_to_hex, dE = i.transactionunspentoutput_from_hex, lE = i.transactionunspentoutput_to_json, uE = i.transactionunspentoutput_to_js_value, pE = i.transactionunspentoutput_from_json, wE = i.transactionunspentoutput_new, fE = i.transactionunspentoutput_input, gE = i.transactionunspentoutput_output, bE = i.__wbg_transactionunspentoutputs_free, hE = i.transactionunspentoutputs_to_json, yE = i.transactionunspentoutputs_to_js_value, mE = i.transactionunspentoutputs_from_json, vE = i.transactionunspentoutputs_new, kE = i.transactionunspentoutputs_len, xE = i.transactionunspentoutputs_get, jE = i.transactionunspentoutputs_add, SE = i.__wbg_bignum_free, EE = i.bignum_to_bytes, zE = i.bignum_from_bytes, CE = i.bignum_to_hex, OE = i.bignum_from_hex, LE = i.bignum_to_json, NE = i.bignum_to_js_value, FE = i.bignum_from_json, TE = i.bignum_from_str, PE = i.bignum_to_str, RE = i.bignum_zero, $E = i.bignum_one, DE = i.bignum_is_zero, IE = i.bignum_div_floor, UE = i.bignum_checked_mul, ME = i.bignum_checked_add, WE = i.bignum_checked_sub, QE = i.bignum_clamped_sub, VE = i.bignum_compare, BE = i.bignum_less_than, AE = i.bignum_max_value, HE = i.bignum_max, qE = i.__wbg_value_free, YE = i.value_to_bytes, XE = i.value_from_bytes, KE = i.value_to_hex, ZE = i.value_from_hex, JE = i.value_to_json, GE = i.value_to_js_value, t8 = i.value_from_json, e8 = i.value_new, _8 = i.value_new_from_assets, r8 = i.value_new_with_assets, n8 = i.value_zero, o8 = i.value_is_zero, s8 = i.value_coin, a8 = i.value_set_coin, i8 = i.value_multiasset, c8 = i.value_set_multiasset, d8 = i.value_checked_add, l8 = i.value_checked_sub, u8 = i.value_clamped_sub, p8 = i.value_compare, w8 = i.__wbg_int_free, f8 = i.int_to_bytes, g8 = i.int_from_bytes, b8 = i.int_to_hex, h8 = i.int_from_hex, y8 = i.int_to_json, m8 = i.int_to_js_value, v8 = i.int_from_json, k8 = i.int_new, x8 = i.int_new_negative, j8 = i.int_new_i32, S8 = i.int_is_positive, E8 = i.int_as_positive, z8 = i.int_as_negative, C8 = i.int_as_i32, O8 = i.int_as_i32_or_fail, L8 = i.int_to_str, N8 = i.int_from_str, F8 = i.__wbg_bigint_free, T8 = i.bigint_to_bytes, P8 = i.bigint_from_bytes, R8 = i.bigint_to_hex, $8 = i.bigint_from_hex, D8 = i.bigint_to_json, I8 = i.bigint_to_js_value, U8 = i.bigint_from_json, M8 = i.bigint_is_zero, W8 = i.bigint_as_u64, Q8 = i.bigint_as_int, V8 = i.bigint_from_str, B8 = i.bigint_to_str, A8 = i.bigint_add, H8 = i.bigint_mul, q8 = i.bigint_one, Y8 = i.bigint_increment, X8 = i.bigint_div_ceil, K8 = i.make_daedalus_bootstrap_witness, Z8 = i.make_icarus_bootstrap_witness, J8 = i.make_vkey_witness, G8 = i.hash_auxiliary_data, tz = i.hash_transaction, ez = i.hash_plutus_data, _z = i.hash_script_data, rz = i.get_implicit_input, nz = i.get_deposit, oz = i.min_ada_for_output, sz = i.min_ada_required, az = i.encode_json_str_to_native_script, iz = i.int_as_i32_or_nothing, cz = i.__wbg_bip32privatekey_free, dz = i.bip32privatekey_derive, lz = i.bip32privatekey_from_128_xprv, uz = i.bip32privatekey_to_128_xprv, pz = i.bip32privatekey_generate_ed25519_bip32, wz = i.bip32privatekey_to_raw_key, fz = i.bip32privatekey_to_public, gz = i.bip32privatekey_from_bytes, bz = i.bip32privatekey_as_bytes, hz = i.bip32privatekey_from_bech32, yz = i.bip32privatekey_to_bech32, mz = i.bip32privatekey_from_bip39_entropy, vz = i.bip32privatekey_chaincode, kz = i.bip32privatekey_to_hex, xz = i.bip32privatekey_from_hex, jz = i.__wbg_bip32publickey_free, Sz = i.bip32publickey_derive, Ez = i.bip32publickey_to_raw_key, zz = i.bip32publickey_from_bytes, Cz = i.bip32publickey_as_bytes, Oz = i.bip32publickey_from_bech32, Lz = i.bip32publickey_to_bech32, Nz = i.bip32publickey_chaincode, Fz = i.bip32publickey_to_hex, Tz = i.bip32publickey_from_hex, Pz = i.__wbg_privatekey_free, Rz = i.privatekey_to_public, $z = i.privatekey_generate_ed25519, Dz = i.privatekey_generate_ed25519extended, Iz = i.privatekey_from_bech32, Uz = i.privatekey_to_bech32, Mz = i.privatekey_as_bytes, Wz = i.privatekey_from_extended_bytes, Qz = i.privatekey_from_normal_bytes, Vz = i.privatekey_sign, Bz = i.privatekey_to_hex, Az = i.privatekey_from_hex, Hz = i.__wbg_publickey_free, qz = i.publickey_from_bech32, Yz = i.publickey_to_bech32, Xz = i.publickey_from_bytes, Kz = i.publickey_verify, Zz = i.publickey_hash, Jz = i.publickey_to_hex, Gz = i.publickey_from_hex, t9 = i.__wbg_vkey_free, e9 = i.vkey_to_bytes, _9 = i.vkey_from_bytes, r9 = i.vkey_to_hex, n9 = i.vkey_from_hex, o9 = i.vkey_to_json, s9 = i.vkey_to_js_value, a9 = i.vkey_from_json, i9 = i.vkey_new, c9 = i.vkey_public_key, d9 = i.__wbg_vkeys_free, l9 = i.vkeys_get, u9 = i.vkeys_add, p9 = i.__wbg_vkeywitness_free, w9 = i.vkeywitness_to_bytes, f9 = i.vkeywitness_from_bytes, g9 = i.vkeywitness_to_hex, b9 = i.vkeywitness_from_hex, h9 = i.vkeywitness_to_json, y9 = i.vkeywitness_to_js_value, m9 = i.vkeywitness_from_json, v9 = i.vkeywitness_new, k9 = i.__wbg_vkeywitnesses_free, x9 = i.vkeywitnesses_to_bytes, j9 = i.vkeywitnesses_from_bytes, S9 = i.vkeywitnesses_to_hex, E9 = i.vkeywitnesses_from_hex, z9 = i.vkeywitnesses_to_json, C9 = i.vkeywitnesses_to_js_value, O9 = i.vkeywitnesses_from_json, L9 = i.vkeywitnesses_get, N9 = i.vkeywitnesses_add, F9 = i.__wbg_bootstrapwitness_free, T9 = i.bootstrapwitness_to_bytes, P9 = i.bootstrapwitness_from_bytes, R9 = i.bootstrapwitness_to_hex, $9 = i.bootstrapwitness_from_hex, D9 = i.bootstrapwitness_to_json, I9 = i.bootstrapwitness_to_js_value, U9 = i.bootstrapwitness_from_json, M9 = i.bootstrapwitness_vkey, W9 = i.bootstrapwitness_signature, Q9 = i.bootstrapwitness_chain_code, V9 = i.bootstrapwitness_attributes, B9 = i.bootstrapwitness_new, A9 = i.__wbg_bootstrapwitnesses_free, H9 = i.bootstrapwitnesses_new, q9 = i.bootstrapwitnesses_len, Y9 = i.bootstrapwitnesses_get, X9 = i.bootstrapwitnesses_add, K9 = i.__wbg_publickeys_free, Z9 = i.publickeys_new, J9 = i.publickeys_get, G9 = i.publickeys_add, tC = i.__wbg_ed25519signature_free, eC = i.ed25519signature_to_bytes, _C = i.ed25519signature_to_bech32, rC = i.ed25519signature_to_hex, nC = i.ed25519signature_from_bech32, oC = i.ed25519signature_from_hex, sC = i.ed25519signature_from_bytes, aC = i.__wbg_legacydaedalusprivatekey_free, iC = i.legacydaedalusprivatekey_from_bytes, cC = i.legacydaedalusprivatekey_as_bytes, dC = i.legacydaedalusprivatekey_chaincode, lC = i.__wbg_ed25519keyhash_free, uC = i.ed25519keyhash_from_bytes, pC = i.ed25519keyhash_to_bytes, wC = i.ed25519keyhash_to_bech32, fC = i.ed25519keyhash_from_bech32, gC = i.ed25519keyhash_to_hex, bC = i.ed25519keyhash_from_hex, hC = i.scripthash_from_bytes, yC = i.scripthash_from_bech32, mC = i.scripthash_from_hex, vC = i.transactionhash_from_bytes, kC = i.transactionhash_from_bech32, xC = i.transactionhash_from_hex, jC = i.genesisdelegatehash_from_bytes, SC = i.genesisdelegatehash_from_bech32, EC = i.genesisdelegatehash_from_hex, zC = i.genesishash_from_bytes, CC = i.genesishash_from_bech32, OC = i.genesishash_from_hex, LC = i.__wbg_auxiliarydatahash_free, NC = i.auxiliarydatahash_from_bytes, FC = i.auxiliarydatahash_to_bytes, TC = i.auxiliarydatahash_to_bech32, PC = i.auxiliarydatahash_from_bech32, RC = i.auxiliarydatahash_to_hex, $C = i.auxiliarydatahash_from_hex, DC = i.poolmetadatahash_from_bytes, IC = i.poolmetadatahash_from_bech32, UC = i.poolmetadatahash_from_hex, MC = i.vrfkeyhash_from_bytes, WC = i.vrfkeyhash_from_bech32, QC = i.vrfkeyhash_from_hex, VC = i.blockhash_from_bytes, BC = i.blockhash_from_bech32, AC = i.blockhash_from_hex, HC = i.datahash_from_bytes, qC = i.datahash_from_bech32, YC = i.datahash_from_hex, XC = i.scriptdatahash_from_bytes, KC = i.scriptdatahash_from_bech32, ZC = i.scriptdatahash_from_hex, JC = i.vrfvkey_from_bytes, GC = i.vrfvkey_from_bech32, tO = i.vrfvkey_from_hex, eO = i.kesvkey_from_bytes, _O = i.kesvkey_from_bech32, rO = i.kesvkey_from_hex, nO = i.__wbg_kessignature_free, oO = i.kessignature_to_bytes, sO = i.kessignature_from_bytes, aO = i.__wbg_nonce_free, iO = i.nonce_to_bytes, cO = i.nonce_from_bytes, dO = i.nonce_to_hex, lO = i.nonce_from_hex, uO = i.nonce_to_json, pO = i.nonce_to_js_value, wO = i.nonce_from_json, fO = i.nonce_new_identity, gO = i.nonce_new_from_hash, bO = i.nonce_get_hash, hO = i.__wbg_vrfcert_free, yO = i.vrfcert_to_bytes, mO = i.vrfcert_from_bytes, vO = i.vrfcert_to_hex, kO = i.vrfcert_from_hex, xO = i.vrfcert_to_json, jO = i.vrfcert_to_js_value, SO = i.vrfcert_from_json, EO = i.vrfcert_proof, zO = i.vrfcert_new, CO = i.vkeywitnesses_len, OO = i.vkeys_len, LO = i.publickeys_size, NO = i.vrfcert_output, FO = i.scripthash_to_hex, TO = i.genesisdelegatehash_to_hex, PO = i.genesishash_to_hex, RO = i.transactionhash_to_hex, $O = i.poolmetadatahash_to_hex, DO = i.vrfkeyhash_to_hex, IO = i.blockhash_to_hex, UO = i.datahash_to_hex, MO = i.scriptdatahash_to_hex, WO = i.vrfvkey_to_hex, QO = i.kesvkey_to_hex, VO = i.vkeywitness_vkey, BO = i.vkeywitness_signature, AO = i.scripthash_to_bech32, HO = i.genesisdelegatehash_to_bech32, qO = i.genesishash_to_bech32, YO = i.transactionhash_to_bech32, XO = i.poolmetadatahash_to_bech32, KO = i.vrfkeyhash_to_bech32, ZO = i.blockhash_to_bech32, JO = i.datahash_to_bech32, GO = i.scriptdatahash_to_bech32, t7 = i.vrfvkey_to_bech32, e7 = i.kesvkey_to_bech32, _7 = i.scripthash_to_bytes, r7 = i.transactionhash_to_bytes, n7 = i.genesisdelegatehash_to_bytes, o7 = i.genesishash_to_bytes, s7 = i.publickey_as_bytes, a7 = i.poolmetadatahash_to_bytes, i7 = i.vrfkeyhash_to_bytes, c7 = i.blockhash_to_bytes, d7 = i.datahash_to_bytes, l7 = i.scriptdatahash_to_bytes, u7 = i.vrfvkey_to_bytes, p7 = i.kesvkey_to_bytes, w7 = i.vkeywitnesses_new, f7 = i.vkeys_new, g7 = i.__wbg_scripthash_free, b7 = i.__wbg_genesisdelegatehash_free, h7 = i.__wbg_genesishash_free, y7 = i.__wbg_kesvkey_free, m7 = i.__wbg_poolmetadatahash_free, v7 = i.__wbg_transactionhash_free, k7 = i.__wbg_vrfkeyhash_free, x7 = i.__wbg_blockhash_free, j7 = i.__wbg_scriptdatahash_free, S7 = i.__wbg_datahash_free, E7 = i.__wbg_vrfvkey_free, z7 = i.__wbg_inputwithscriptwitness_free, C7 = i.inputwithscriptwitness_new_with_native_script_witness, O7 = i.inputwithscriptwitness_new_with_plutus_witness, L7 = i.inputwithscriptwitness_input, N7 = i.__wbg_inputswithscriptwitness_free, F7 = i.inputswithscriptwitness_new, T7 = i.inputswithscriptwitness_add, P7 = i.inputswithscriptwitness_get, R7 = i.inputswithscriptwitness_len, $7 = i.__wbg_plutusscriptsource_free, D7 = i.plutusscriptsource_new, I7 = i.plutusscriptsource_new_ref_input, U7 = i.plutusscriptsource_new_ref_input_with_lang_ver, M7 = i.__wbg_datumsource_free, W7 = i.datumsource_new, Q7 = i.datumsource_new_ref_input, V7 = i.__wbg_plutuswitness_free, B7 = i.plutuswitness_new, A7 = i.plutuswitness_new_with_ref, H7 = i.plutuswitness_new_without_datum, q7 = i.plutuswitness_new_with_ref_without_datum, Y7 = i.plutuswitness_script, X7 = i.plutuswitness_datum, K7 = i.plutuswitness_redeemer, Z7 = i.__wbg_plutuswitnesses_free, J7 = i.plutuswitnesses_get, G7 = i.plutuswitnesses_add, tL = i.__wbg_txinputsbuilder_free, eL = i.txinputsbuilder_new, _L = i.txinputsbuilder_add_key_input, rL = i.txinputsbuilder_add_script_input, nL = i.txinputsbuilder_add_native_script_input, oL = i.txinputsbuilder_add_plutus_script_input, sL = i.txinputsbuilder_add_bootstrap_input, aL = i.txinputsbuilder_add_input, iL = i.txinputsbuilder_count_missing_input_scripts, cL = i.txinputsbuilder_add_required_native_input_scripts, dL = i.txinputsbuilder_add_required_plutus_input_scripts, lL = i.txinputsbuilder_add_required_script_input_witnesses, uL = i.txinputsbuilder_get_ref_inputs, pL = i.txinputsbuilder_get_native_input_scripts, wL = i.txinputsbuilder_get_plutus_input_scripts, fL = i.txinputsbuilder_len, gL = i.txinputsbuilder_add_required_signer, bL = i.txinputsbuilder_add_required_signers, hL = i.txinputsbuilder_total_value, yL = i.txinputsbuilder_inputs, mL = i.txinputsbuilder_inputs_option, vL = i.__wbg_txbuilderconstants_free, kL = i.txbuilderconstants_plutus_default_cost_models, xL = i.txbuilderconstants_plutus_alonzo_cost_models, jL = i.plutuswitnesses_len, SL = i.txbuilderconstants_plutus_vasil_cost_models, EL = i.plutuswitnesses_new, zL = i.__wbg_metadatamap_free, CL = i.metadatamap_to_bytes, OL = i.metadatamap_from_bytes, LL = i.metadatamap_to_hex, NL = i.metadatamap_from_hex, FL = i.metadatamap_insert, TL = i.metadatamap_insert_str, PL = i.metadatamap_insert_i32, RL = i.metadatamap_get, $L = i.metadatamap_get_str, DL = i.metadatamap_get_i32, IL = i.metadatamap_has, UL = i.metadatamap_keys, ML = i.__wbg_metadatalist_free, WL = i.metadatalist_to_bytes, QL = i.metadatalist_from_bytes, VL = i.metadatalist_to_hex, BL = i.metadatalist_from_hex, AL = i.metadatalist_get, HL = i.metadatalist_add, qL = i.__wbg_transactionmetadatum_free, YL = i.transactionmetadatum_to_bytes, XL = i.transactionmetadatum_from_bytes, KL = i.transactionmetadatum_to_hex, ZL = i.transactionmetadatum_from_hex, JL = i.transactionmetadatum_new_map, GL = i.transactionmetadatum_new_list, tN = i.transactionmetadatum_new_int, eN = i.transactionmetadatum_new_bytes, _N = i.transactionmetadatum_new_text, rN = i.transactionmetadatum_as_map, nN = i.transactionmetadatum_as_list, oN = i.transactionmetadatum_as_int, sN = i.transactionmetadatum_as_bytes, aN = i.transactionmetadatum_as_text, iN = i.__wbg_transactionmetadatumlabels_free, cN = i.transactionmetadatumlabels_to_bytes, dN = i.transactionmetadatumlabels_from_bytes, lN = i.transactionmetadatumlabels_to_hex, uN = i.transactionmetadatumlabels_from_hex, pN = i.transactionmetadatumlabels_get, wN = i.transactionmetadatumlabels_add, fN = i.__wbg_generaltransactionmetadata_free, gN = i.generaltransactionmetadata_to_bytes, bN = i.generaltransactionmetadata_from_bytes, hN = i.generaltransactionmetadata_to_hex, yN = i.generaltransactionmetadata_from_hex, mN = i.generaltransactionmetadata_to_json, vN = i.generaltransactionmetadata_to_js_value, kN = i.generaltransactionmetadata_from_json, xN = i.generaltransactionmetadata_new, jN = i.generaltransactionmetadata_len, SN = i.generaltransactionmetadata_insert, EN = i.generaltransactionmetadata_get, zN = i.generaltransactionmetadata_keys, CN = i.__wbg_auxiliarydata_free, ON = i.auxiliarydata_to_bytes, LN = i.auxiliarydata_from_bytes, NN = i.auxiliarydata_to_hex, FN = i.auxiliarydata_from_hex, TN = i.auxiliarydata_to_json, PN = i.auxiliarydata_to_js_value, RN = i.auxiliarydata_from_json, $N = i.auxiliarydata_new, DN = i.auxiliarydata_metadata, IN = i.auxiliarydata_set_metadata, UN = i.auxiliarydata_native_scripts, MN = i.auxiliarydata_set_native_scripts, WN = i.auxiliarydata_plutus_scripts, QN = i.auxiliarydata_set_plutus_scripts, VN = i.auxiliarydata_prefer_alonzo_format, BN = i.auxiliarydata_set_prefer_alonzo_format, AN = i.encode_arbitrary_bytes_as_metadatum, HN = i.decode_arbitrary_bytes_from_metadatum, qN = i.encode_json_str_to_metadatum, YN = i.decode_metadatum_to_json_str, XN = i.__wbg_plutusscript_free, KN = i.plutusscript_to_bytes, ZN = i.plutusscript_from_bytes, JN = i.plutusscript_to_hex, GN = i.plutusscript_from_hex, tF = i.plutusscript_new, eF = i.plutusscript_new_v2, _F = i.plutusscript_new_with_version, rF = i.plutusscript_bytes, nF = i.plutusscript_from_bytes_v2, oF = i.plutusscript_from_bytes_with_version, sF = i.plutusscript_from_hex_with_version, aF = i.plutusscript_hash, iF = i.plutusscript_language_version, cF = i.__wbg_plutusscripts_free, dF = i.plutusscripts_to_bytes, lF = i.plutusscripts_from_bytes, uF = i.plutusscripts_to_hex, pF = i.plutusscripts_from_hex, wF = i.plutusscripts_to_json, fF = i.plutusscripts_to_js_value, gF = i.plutusscripts_from_json, bF = i.plutusscripts_new, hF = i.plutusscripts_get, yF = i.plutusscripts_add, mF = i.__wbg_constrplutusdata_free, vF = i.constrplutusdata_to_bytes, kF = i.constrplutusdata_from_bytes, xF = i.constrplutusdata_to_hex, jF = i.constrplutusdata_from_hex, SF = i.constrplutusdata_alternative, EF = i.constrplutusdata_data, zF = i.constrplutusdata_new, CF = i.__wbg_costmodel_free, OF = i.costmodel_to_bytes, LF = i.costmodel_from_bytes, NF = i.costmodel_to_hex, FF = i.costmodel_from_hex, TF = i.costmodel_to_json, PF = i.costmodel_to_js_value, RF = i.costmodel_from_json, $F = i.costmodel_new, DF = i.costmodel_set, IF = i.costmodel_get, UF = i.__wbg_costmdls_free, MF = i.costmdls_to_bytes, WF = i.costmdls_from_bytes, QF = i.costmdls_to_hex, VF = i.costmdls_from_hex, BF = i.costmdls_to_json, AF = i.costmdls_to_js_value, HF = i.costmdls_from_json, qF = i.costmdls_new, YF = i.costmdls_len, XF = i.costmdls_insert, KF = i.costmdls_get, ZF = i.costmdls_keys, JF = i.costmdls_retain_language_versions, GF = i.__wbg_exunitprices_free, tT = i.exunitprices_to_bytes, eT = i.exunitprices_from_bytes, _T = i.exunitprices_to_hex, rT = i.exunitprices_from_hex, nT = i.exunitprices_to_json, oT = i.exunitprices_to_js_value, sT = i.exunitprices_from_json, aT = i.exunitprices_mem_price, iT = i.exunitprices_step_price, cT = i.exunitprices_new, dT = i.__wbg_exunits_free, lT = i.exunits_to_bytes, uT = i.exunits_from_bytes, pT = i.exunits_to_hex, wT = i.exunits_from_hex, fT = i.exunits_to_json, gT = i.exunits_to_js_value, bT = i.exunits_from_json, hT = i.exunits_mem, yT = i.exunits_steps, mT = i.exunits_new, vT = i.__wbg_language_free, kT = i.language_to_bytes, xT = i.language_from_bytes, jT = i.language_to_hex, ST = i.language_from_hex, ET = i.language_to_json, zT = i.language_to_js_value, CT = i.language_from_json, OT = i.language_new_plutus_v1, LT = i.language_new_plutus_v2, NT = i.language_kind, FT = i.__wbg_languages_free, TT = i.languages_new, PT = i.languages_get, RT = i.languages_add, $T = i.languages_list, DT = i.__wbg_plutusmap_free, IT = i.plutusmap_to_bytes, UT = i.plutusmap_from_bytes, MT = i.plutusmap_to_hex, WT = i.plutusmap_from_hex, QT = i.plutusmap_insert, VT = i.plutusmap_get, BT = i.plutusmap_keys, AT = i.__wbg_plutusdata_free, HT = i.plutusdata_to_bytes, qT = i.plutusdata_from_bytes, YT = i.plutusdata_to_hex, XT = i.plutusdata_from_hex, KT = i.plutusdata_new_constr_plutus_data, ZT = i.plutusdata_new_empty_constr_plutus_data, JT = i.plutusdata_new_single_value_constr_plutus_data, GT = i.plutusdata_new_map, tP = i.plutusdata_new_list, eP = i.plutusdata_new_integer, _P = i.plutusdata_new_bytes, rP = i.plutusdata_kind, nP = i.plutusdata_as_constr_plutus_data, oP = i.plutusdata_as_map, sP = i.plutusdata_as_list, aP = i.plutusdata_as_integer, iP = i.plutusdata_as_bytes, cP = i.plutusdata_from_address, dP = i.__wbg_plutuslist_free, lP = i.plutuslist_to_bytes, uP = i.plutuslist_from_bytes, pP = i.plutuslist_to_hex, wP = i.plutuslist_from_hex, fP = i.plutuslist_new, gP = i.plutuslist_get, bP = i.plutuslist_add, hP = i.__wbg_redeemer_free, yP = i.redeemer_to_bytes, mP = i.redeemer_from_bytes, vP = i.redeemer_to_hex, kP = i.redeemer_from_hex, xP = i.redeemer_to_json, jP = i.redeemer_to_js_value, SP = i.redeemer_from_json, EP = i.redeemer_tag, zP = i.redeemer_index, CP = i.redeemer_data, OP = i.redeemer_ex_units, LP = i.redeemer_new, NP = i.__wbg_redeemertag_free, FP = i.redeemertag_to_bytes, TP = i.redeemertag_from_bytes, PP = i.redeemertag_to_hex, RP = i.redeemertag_from_hex, $P = i.redeemertag_to_json, DP = i.redeemertag_to_js_value, IP = i.redeemertag_from_json, UP = i.redeemertag_new_spend, MP = i.redeemertag_new_mint, WP = i.redeemertag_new_cert, QP = i.redeemertag_new_reward, VP = i.redeemertag_kind, BP = i.__wbg_redeemers_free, AP = i.redeemers_to_bytes, HP = i.redeemers_from_bytes, qP = i.redeemers_to_hex, YP = i.redeemers_from_hex, XP = i.redeemers_to_json, KP = i.redeemers_to_js_value, ZP = i.redeemers_from_json, JP = i.redeemers_get, GP = i.redeemers_add, tR = i.redeemers_total_ex_units, eR = i.__wbg_strings_free, _R = i.strings_get, rR = i.strings_add, nR = i.encode_json_str_to_plutus_datum, oR = i.decode_plutus_datum_to_json_str, sR = i.transactionmetadatumlabels_len, aR = i.metadatamap_len, iR = i.plutusscripts_len, cR = i.metadatalist_len, dR = i.costmodel_len, lR = i.languages_len, uR = i.plutusmap_len, pR = i.transactionmetadatum_kind, wR = i.plutuslist_len, fR = i.redeemers_len, gR = i.strings_len, bR = i.plutusdata_from_json, hR = i.plutusdata_to_json, yR = i.plutusmap_new, mR = i.metadatamap_new, vR = i.transactionmetadatumlabels_new, kR = i.strings_new, xR = i.metadatalist_new, jR = i.redeemers_new, SR = i.__wbg_fixedtransaction_free, ER = i.fixedtransaction_to_bytes, zR = i.fixedtransaction_from_bytes, CR = i.fixedtransaction_to_hex, OR = i.fixedtransaction_from_hex, LR = i.fixedtransaction_new, NR = i.fixedtransaction_new_with_auxiliary, FR = i.fixedtransaction_body, TR = i.fixedtransaction_raw_body, PR = i.fixedtransaction_set_body, RR = i.fixedtransaction_set_witness_set, $R = i.fixedtransaction_witness_set, DR = i.fixedtransaction_raw_witness_set, IR = i.fixedtransaction_set_is_valid, UR = i.fixedtransaction_is_valid, MR = i.fixedtransaction_set_auxiliary_data, WR = i.fixedtransaction_auxiliary_data, QR = i.fixedtransaction_raw_auxiliary_data, VR = i.__wbg_transactionbuilderconfig_free, BR = i.__wbg_transactionbuilderconfigbuilder_free, AR = i.transactionbuilderconfigbuilder_new, HR = i.transactionbuilderconfigbuilder_fee_algo, qR = i.transactionbuilderconfigbuilder_coins_per_utxo_word, YR = i.transactionbuilderconfigbuilder_coins_per_utxo_byte, XR = i.transactionbuilderconfigbuilder_ex_unit_prices, KR = i.transactionbuilderconfigbuilder_pool_deposit, ZR = i.transactionbuilderconfigbuilder_key_deposit, JR = i.transactionbuilderconfigbuilder_max_value_size, GR = i.transactionbuilderconfigbuilder_max_tx_size, t$ = i.transactionbuilderconfigbuilder_prefer_pure_change, e$ = i.transactionbuilderconfigbuilder_build, _$ = i.__wbg_transactionbuilder_free, r$ = i.transactionbuilder_add_inputs_from, n$ = i.transactionbuilder_set_inputs, o$ = i.transactionbuilder_set_collateral, s$ = i.transactionbuilder_set_collateral_return, a$ = i.transactionbuilder_set_collateral_return_and_total, i$ = i.transactionbuilder_set_total_collateral, c$ = i.transactionbuilder_set_total_collateral_and_return, d$ = i.transactionbuilder_add_reference_input, l$ = i.transactionbuilder_add_key_input, u$ = i.transactionbuilder_add_script_input, p$ = i.transactionbuilder_add_native_script_input, w$ = i.transactionbuilder_add_plutus_script_input, f$ = i.transactionbuilder_add_bootstrap_input, g$ = i.transactionbuilder_add_input, b$ = i.transactionbuilder_count_missing_input_scripts, h$ = i.transactionbuilder_add_required_native_input_scripts, y$ = i.transactionbuilder_add_required_plutus_input_scripts, m$ = i.transactionbuilder_get_native_input_scripts, v$ = i.transactionbuilder_get_plutus_input_scripts, k$ = i.transactionbuilder_fee_for_input, x$ = i.transactionbuilder_add_output, j$ = i.transactionbuilder_fee_for_output, S$ = i.transactionbuilder_set_fee, E$ = i.transactionbuilder_set_ttl, z$ = i.transactionbuilder_set_ttl_bignum, C$ = i.transactionbuilder_set_validity_start_interval, O$ = i.transactionbuilder_set_validity_start_interval_bignum, L$ = i.transactionbuilder_set_certs, N$ = i.transactionbuilder_set_withdrawals, F$ = i.transactionbuilder_get_auxiliary_data, T$ = i.transactionbuilder_set_auxiliary_data, P$ = i.transactionbuilder_set_metadata, R$ = i.transactionbuilder_add_metadatum, $$ = i.transactionbuilder_add_json_metadatum, D$ = i.transactionbuilder_add_json_metadatum_with_schema, I$ = i.transactionbuilder_set_mint_builder, U$ = i.transactionbuilder_get_mint_builder, M$ = i.transactionbuilder_set_mint, W$ = i.transactionbuilder_get_mint, Q$ = i.transactionbuilder_get_mint_scripts, V$ = i.transactionbuilder_set_mint_asset, B$ = i.transactionbuilder_add_mint_asset, A$ = i.transactionbuilder_add_mint_asset_and_output, H$ = i.transactionbuilder_add_mint_asset_and_output_min_required_coin, q$ = i.transactionbuilder_new, Y$ = i.transactionbuilder_get_reference_inputs, X$ = i.transactionbuilder_get_explicit_input, K$ = i.transactionbuilder_get_implicit_input, Z$ = i.transactionbuilder_get_total_input, J$ = i.transactionbuilder_get_total_output, G$ = i.transactionbuilder_get_explicit_output, tD = i.transactionbuilder_get_deposit, eD = i.transactionbuilder_get_fee_if_set, _D = i.transactionbuilder_add_change_if_needed, rD = i.transactionbuilder_add_change_if_needed_with_datum, nD = i.transactionbuilder_calc_script_data_hash, oD = i.transactionbuilder_set_script_data_hash, sD = i.transactionbuilder_remove_script_data_hash, aD = i.transactionbuilder_add_required_signer, iD = i.transactionbuilder_full_size, cD = i.transactionbuilder_output_sizes, dD = i.transactionbuilder_build, lD = i.transactionbuilder_build_tx, uD = i.transactionbuilder_build_tx_unsafe, pD = i.transactionbuilder_min_fee, wD = i.__wbg_linearfee_free, fD = i.linearfee_constant, gD = i.linearfee_coefficient, bD = i.linearfee_new, hD = i.min_fee, yD = i.calculate_ex_units_ceil_cost, mD = i.min_script_fee, vD = i.__wbg_transactionbatchlist_free, kD = i.transactionbatchlist_get, xD = i.__wbg_transactionbatch_free, jD = i.transactionbatch_len, SD = i.transactionbatch_get, ED = i.create_send_all, zD = i.transactionbatchlist_len, CD = i.__wbg_networkinfo_free, OD = i.networkinfo_new, LD = i.networkinfo_network_id, ND = i.networkinfo_protocol_magic, FD = i.networkinfo_testnet_preview, TD = i.networkinfo_testnet_preprod, PD = i.networkinfo_testnet, RD = i.networkinfo_mainnet, $D = i.__wbg_stakecredential_free, DD = i.stakecredential_from_keyhash, ID = i.stakecredential_from_scripthash, UD = i.stakecredential_to_keyhash, MD = i.stakecredential_to_scripthash, WD = i.stakecredential_kind, QD = i.stakecredential_to_bytes, VD = i.stakecredential_from_bytes, BD = i.stakecredential_to_hex, AD = i.stakecredential_from_hex, HD = i.stakecredential_to_json, qD = i.stakecredential_to_js_value, YD = i.stakecredential_from_json, XD = i.__wbg_byronaddress_free, KD = i.byronaddress_to_base58, ZD = i.byronaddress_to_bytes, JD = i.byronaddress_from_bytes, GD = i.byronaddress_byron_protocol_magic, tI = i.byronaddress_attributes, eI = i.byronaddress_network_id, _I = i.byronaddress_from_base58, rI = i.byronaddress_icarus_from_key, nI = i.byronaddress_is_valid, oI = i.byronaddress_to_address, sI = i.byronaddress_from_address, aI = i.__wbg_address_free, iI = i.address_from_bytes, cI = i.address_to_json, dI = i.address_to_js_value, lI = i.address_from_json, uI = i.address_to_hex, pI = i.address_from_hex, wI = i.address_to_bytes, fI = i.address_to_bech32, gI = i.address_from_bech32, bI = i.address_network_id, hI = i.__wbg_baseaddress_free, yI = i.baseaddress_new, mI = i.baseaddress_payment_cred, vI = i.baseaddress_stake_cred, kI = i.baseaddress_to_address, xI = i.baseaddress_from_address, jI = i.__wbg_enterpriseaddress_free, SI = i.enterpriseaddress_new, EI = i.enterpriseaddress_to_address, zI = i.enterpriseaddress_from_address, CI = i.rewardaddress_to_address, OI = i.rewardaddress_from_address, LI = i.__wbg_pointer_free, NI = i.pointer_new, FI = i.pointer_new_pointer, TI = i.pointer_slot, PI = i.pointer_tx_index, RI = i.pointer_cert_index, $I = i.pointer_slot_bignum, DI = i.pointer_tx_index_bignum, II = i.pointer_cert_index_bignum, UI = i.__wbg_pointeraddress_free, MI = i.pointeraddress_new, WI = i.pointeraddress_payment_cred, QI = i.pointeraddress_stake_pointer, VI = i.pointeraddress_to_address, BI = i.pointeraddress_from_address, AI = i.__wbg_mintwitness_free, HI = i.mintwitness_new_native_script, qI = i.mintwitness_new_plutus_script, YI = i.__wbg_mintbuilder_free, XI = i.mintbuilder_new, KI = i.mintbuilder_add_asset, ZI = i.mintbuilder_set_asset, JI = i.mintbuilder_build, GI = i.mintbuilder_get_native_scripts, tU = i.mintbuilder_get_plutus_witnesses, eU = i.mintbuilder_get_ref_inputs, _U = i.mintbuilder_get_redeeemers, rU = i.mintbuilder_has_plutus_scripts, nU = i.mintbuilder_has_native_scripts, oU = i.enterpriseaddress_payment_cred, sU = i.rewardaddress_payment_cred, aU = i.rewardaddress_new, iU = i.__wbg_rewardaddress_free, cU = i.__wbindgen_malloc, dU = i.__wbindgen_realloc, lU = i.__wbindgen_add_to_stack_pointer, uU = i.__wbindgen_free, pU = i.__wbindgen_exn_store, wU = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_address_free: aI,
    __wbg_assetname_free: c3,
    __wbg_assetnames_free: y3,
    __wbg_assets_free: N3,
    __wbg_auxiliarydata_free: CN,
    __wbg_auxiliarydatahash_free: LC,
    __wbg_auxiliarydataset_free: Y2,
    __wbg_baseaddress_free: hI,
    __wbg_bigint_free: F8,
    __wbg_bignum_free: SE,
    __wbg_bip32privatekey_free: cz,
    __wbg_bip32publickey_free: jz,
    __wbg_block_free: tj,
    __wbg_blockhash_free: x7,
    __wbg_bootstrapwitness_free: F9,
    __wbg_bootstrapwitnesses_free: A9,
    __wbg_byronaddress_free: XD,
    __wbg_certificate_free: Gm,
    __wbg_certificates_free: hb,
    __wbg_constrplutusdata_free: mF,
    __wbg_costmdls_free: UF,
    __wbg_costmodel_free: CF,
    __wbg_datacost_free: wb,
    __wbg_datahash_free: S7,
    __wbg_datumsource_free: M7,
    __wbg_dnsrecordaoraaaa_free: y1,
    __wbg_dnsrecordsrv_free: pS,
    __wbg_ed25519keyhash_free: lC,
    __wbg_ed25519keyhashes_free: jy,
    __wbg_ed25519signature_free: tC,
    __wbg_enterpriseaddress_free: jI,
    __wbg_exunitprices_free: GF,
    __wbg_exunits_free: dT,
    __wbg_fixedtransaction_free: SR,
    __wbg_generaltransactionmetadata_free: fN,
    __wbg_genesisdelegatehash_free: b7,
    __wbg_genesishash_free: h7,
    __wbg_genesishashes_free: U6,
    __wbg_genesiskeydelegation_free: Nm,
    __wbg_header_free: wj,
    __wbg_headerbody_free: Ij,
    __wbg_inputswithscriptwitness_free: N7,
    __wbg_inputwithscriptwitness_free: z7,
    __wbg_int_free: w8,
    __wbg_ipv4_free: qv,
    __wbg_ipv6_free: r1,
    __wbg_kessignature_free: nO,
    __wbg_kesvkey_free: y7,
    __wbg_language_free: vT,
    __wbg_languages_free: FT,
    __wbg_legacydaedalusprivatekey_free: aC,
    __wbg_linearfee_free: wD,
    __wbg_metadatalist_free: ML,
    __wbg_metadatamap_free: zL,
    __wbg_mint_free: c5,
    __wbg_mintassets_free: n5,
    __wbg_mintbuilder_free: YI,
    __wbg_mintsassets_free: r5,
    __wbg_mintwitness_free: AI,
    __wbg_mirtostakecredentials_free: kv,
    __wbg_moveinstantaneousreward_free: Tv,
    __wbg_moveinstantaneousrewardscert_free: Vm,
    __wbg_multiasset_free: V3,
    __wbg_multihostname_free: rk,
    __wbg_nativescript_free: _6,
    __wbg_nativescripts_free: S6,
    __wbg_networkid_free: j5,
    __wbg_networkinfo_free: CD,
    __wbg_nonce_free: aO,
    __wbg_operationalcert_free: Sj,
    __wbg_outputdatum_free: Z4,
    __wbg_plutusdata_free: AT,
    __wbg_plutuslist_free: dP,
    __wbg_plutusmap_free: DT,
    __wbg_plutusscript_free: XN,
    __wbg_plutusscripts_free: cF,
    __wbg_plutusscriptsource_free: $7,
    __wbg_plutuswitness_free: V7,
    __wbg_plutuswitnesses_free: Z7,
    __wbg_pointer_free: LI,
    __wbg_pointeraddress_free: UI,
    __wbg_poolmetadata_free: Ck,
    __wbg_poolmetadatahash_free: m7,
    __wbg_poolparams_free: Hy,
    __wbg_poolregistration_free: dm,
    __wbg_poolretirement_free: mm,
    __wbg_privatekey_free: Pz,
    __wbg_proposedprotocolparameterupdates_free: ox,
    __wbg_protocolparamupdate_free: zx,
    __wbg_protocolversion_free: gx,
    __wbg_publickey_free: Hz,
    __wbg_publickeys_free: K9,
    __wbg_redeemer_free: hP,
    __wbg_redeemers_free: BP,
    __wbg_redeemertag_free: NP,
    __wbg_relay_free: pk,
    __wbg_relays_free: $y,
    __wbg_rewardaddress_free: iU,
    __wbg_rewardaddresses_free: Xk,
    __wbg_scriptall_free: q0,
    __wbg_scriptany_free: wS,
    __wbg_scriptdatahash_free: j7,
    __wbg_scripthash_free: g7,
    __wbg_scripthashes_free: X6,
    __wbg_scriptnofk_free: c4,
    __wbg_scriptpubkey_free: D0,
    __wbg_scriptref_free: D4,
    __wbg_singlehostaddr_free: R1,
    __wbg_singlehostname_free: q1,
    __wbg_stakecredential_free: $D,
    __wbg_stakecredentials_free: Uk,
    __wbg_stakedelegation_free: wy,
    __wbg_stakederegistration_free: ny,
    __wbg_stakeregistration_free: IS,
    __wbg_strings_free: eR,
    __wbg_timelockexpiry_free: S4,
    __wbg_timelockstart_free: bS,
    __wbg_transaction_free: Tg,
    __wbg_transactionbatch_free: xD,
    __wbg_transactionbatchlist_free: vD,
    __wbg_transactionbodies_free: C2,
    __wbg_transactionbody_free: Ob,
    __wbg_transactionbuilder_free: _$,
    __wbg_transactionbuilderconfig_free: VR,
    __wbg_transactionbuilderconfigbuilder_free: BR,
    __wbg_transactionhash_free: v7,
    __wbg_transactioninput_free: mh,
    __wbg_transactioninputs_free: qg,
    __wbg_transactionmetadatum_free: qL,
    __wbg_transactionmetadatumlabels_free: iN,
    __wbg_transactionoutput_free: Nh,
    __wbg_transactionoutputamountbuilder_free: GS,
    __wbg_transactionoutputbuilder_free: HS,
    __wbg_transactionoutputs_free: nb,
    __wbg_transactionunspentoutput_free: sE,
    __wbg_transactionunspentoutputs_free: bE,
    __wbg_transactionwitnessset_free: g0,
    __wbg_transactionwitnesssets_free: I2,
    __wbg_txbuilderconstants_free: vL,
    __wbg_txinputsbuilder_free: tL,
    __wbg_unitinterval_free: R5,
    __wbg_update_free: C6,
    __wbg_url_free: uS,
    __wbg_value_free: qE,
    __wbg_vkey_free: t9,
    __wbg_vkeys_free: d9,
    __wbg_vkeywitness_free: p9,
    __wbg_vkeywitnesses_free: k9,
    __wbg_vrfcert_free: hO,
    __wbg_vrfkeyhash_free: k7,
    __wbg_vrfvkey_free: E7,
    __wbg_withdrawals_free: o0,
    __wbindgen_add_to_stack_pointer: lU,
    __wbindgen_exn_store: pU,
    __wbindgen_free: uU,
    __wbindgen_malloc: cU,
    __wbindgen_realloc: dU,
    address_from_bech32: gI,
    address_from_bytes: iI,
    address_from_hex: pI,
    address_from_json: lI,
    address_network_id: bI,
    address_to_bech32: fI,
    address_to_bytes: wI,
    address_to_hex: uI,
    address_to_js_value: dI,
    address_to_json: cI,
    assetname_from_bytes: l3,
    assetname_from_hex: p3,
    assetname_from_json: g3,
    assetname_name: h3,
    assetname_new: b3,
    assetname_to_bytes: d3,
    assetname_to_hex: u3,
    assetname_to_js_value: f3,
    assetname_to_json: w3,
    assetnames_add: L3,
    assetnames_from_bytes: v3,
    assetnames_from_hex: x3,
    assetnames_from_json: E3,
    assetnames_get: O3,
    assetnames_len: C3,
    assetnames_new: z3,
    assetnames_to_bytes: m3,
    assetnames_to_hex: k3,
    assetnames_to_js_value: S3,
    assetnames_to_json: j3,
    assets_from_bytes: T3,
    assets_from_hex: R3,
    assets_from_json: I3,
    assets_get: W3,
    assets_insert: M3,
    assets_keys: Q3,
    assets_len: J5,
    assets_new: U3,
    assets_to_bytes: F3,
    assets_to_hex: P3,
    assets_to_js_value: D3,
    assets_to_json: $3,
    auxiliarydata_from_bytes: LN,
    auxiliarydata_from_hex: FN,
    auxiliarydata_from_json: RN,
    auxiliarydata_metadata: DN,
    auxiliarydata_native_scripts: UN,
    auxiliarydata_new: $N,
    auxiliarydata_plutus_scripts: WN,
    auxiliarydata_prefer_alonzo_format: VN,
    auxiliarydata_set_metadata: IN,
    auxiliarydata_set_native_scripts: MN,
    auxiliarydata_set_plutus_scripts: QN,
    auxiliarydata_set_prefer_alonzo_format: BN,
    auxiliarydata_to_bytes: ON,
    auxiliarydata_to_hex: NN,
    auxiliarydata_to_js_value: PN,
    auxiliarydata_to_json: TN,
    auxiliarydatahash_from_bech32: PC,
    auxiliarydatahash_from_bytes: NC,
    auxiliarydatahash_from_hex: $C,
    auxiliarydatahash_to_bech32: TC,
    auxiliarydatahash_to_bytes: FC,
    auxiliarydatahash_to_hex: RC,
    auxiliarydataset_get: J2,
    auxiliarydataset_indices: G2,
    auxiliarydataset_insert: Z2,
    auxiliarydataset_len: K2,
    auxiliarydataset_new: X2,
    baseaddress_from_address: xI,
    baseaddress_new: yI,
    baseaddress_payment_cred: mI,
    baseaddress_stake_cred: vI,
    baseaddress_to_address: kI,
    bigint_add: A8,
    bigint_as_int: Q8,
    bigint_as_u64: W8,
    bigint_div_ceil: X8,
    bigint_from_bytes: P8,
    bigint_from_hex: $8,
    bigint_from_json: U8,
    bigint_from_str: V8,
    bigint_increment: Y8,
    bigint_is_zero: M8,
    bigint_mul: H8,
    bigint_one: q8,
    bigint_to_bytes: T8,
    bigint_to_hex: R8,
    bigint_to_js_value: I8,
    bigint_to_json: D8,
    bigint_to_str: B8,
    bignum_checked_add: ME,
    bignum_checked_mul: UE,
    bignum_checked_sub: WE,
    bignum_clamped_sub: QE,
    bignum_compare: VE,
    bignum_div_floor: IE,
    bignum_from_bytes: zE,
    bignum_from_hex: OE,
    bignum_from_json: FE,
    bignum_from_str: TE,
    bignum_is_zero: DE,
    bignum_less_than: BE,
    bignum_max: HE,
    bignum_max_value: AE,
    bignum_one: $E,
    bignum_to_bytes: EE,
    bignum_to_hex: CE,
    bignum_to_js_value: NE,
    bignum_to_json: LE,
    bignum_to_str: PE,
    bignum_zero: RE,
    bip32privatekey_as_bytes: bz,
    bip32privatekey_chaincode: vz,
    bip32privatekey_derive: dz,
    bip32privatekey_from_128_xprv: lz,
    bip32privatekey_from_bech32: hz,
    bip32privatekey_from_bip39_entropy: mz,
    bip32privatekey_from_bytes: gz,
    bip32privatekey_from_hex: xz,
    bip32privatekey_generate_ed25519_bip32: pz,
    bip32privatekey_to_128_xprv: uz,
    bip32privatekey_to_bech32: yz,
    bip32privatekey_to_hex: kz,
    bip32privatekey_to_public: fz,
    bip32privatekey_to_raw_key: wz,
    bip32publickey_as_bytes: Cz,
    bip32publickey_chaincode: Nz,
    bip32publickey_derive: Sz,
    bip32publickey_from_bech32: Oz,
    bip32publickey_from_bytes: zz,
    bip32publickey_from_hex: Tz,
    bip32publickey_to_bech32: Lz,
    bip32publickey_to_hex: Fz,
    bip32publickey_to_raw_key: Ez,
    block_auxiliary_data_set: lj,
    block_from_bytes: _j,
    block_from_hex: nj,
    block_from_json: aj,
    block_header: ij,
    block_invalid_transactions: uj,
    block_new: pj,
    block_to_bytes: ej,
    block_to_hex: rj,
    block_to_js_value: sj,
    block_to_json: oj,
    block_transaction_bodies: cj,
    block_transaction_witness_sets: dj,
    blockhash_from_bech32: BC,
    blockhash_from_bytes: VC,
    blockhash_from_hex: AC,
    blockhash_to_bech32: ZO,
    blockhash_to_bytes: c7,
    blockhash_to_hex: IO,
    bootstrapwitness_attributes: V9,
    bootstrapwitness_chain_code: Q9,
    bootstrapwitness_from_bytes: P9,
    bootstrapwitness_from_hex: $9,
    bootstrapwitness_from_json: U9,
    bootstrapwitness_new: B9,
    bootstrapwitness_signature: W9,
    bootstrapwitness_to_bytes: T9,
    bootstrapwitness_to_hex: R9,
    bootstrapwitness_to_js_value: I9,
    bootstrapwitness_to_json: D9,
    bootstrapwitness_vkey: M9,
    bootstrapwitnesses_add: X9,
    bootstrapwitnesses_get: Y9,
    bootstrapwitnesses_len: q9,
    bootstrapwitnesses_new: H9,
    byronaddress_attributes: tI,
    byronaddress_byron_protocol_magic: GD,
    byronaddress_from_address: sI,
    byronaddress_from_base58: _I,
    byronaddress_from_bytes: JD,
    byronaddress_icarus_from_key: rI,
    byronaddress_is_valid: nI,
    byronaddress_network_id: eI,
    byronaddress_to_address: oI,
    byronaddress_to_base58: KD,
    byronaddress_to_bytes: ZD,
    calculate_ex_units_ceil_cost: yD,
    certificate_as_genesis_key_delegation: mv,
    certificate_as_move_instantaneous_rewards_cert: vv,
    certificate_as_pool_registration: hv,
    certificate_as_pool_retirement: yv,
    certificate_as_stake_delegation: bv,
    certificate_as_stake_deregistration: gv,
    certificate_as_stake_registration: fv,
    certificate_from_bytes: ev,
    certificate_from_hex: rv,
    certificate_from_json: sv,
    certificate_kind: wv,
    certificate_new_genesis_key_delegation: uv,
    certificate_new_move_instantaneous_rewards_cert: pv,
    certificate_new_pool_registration: dv,
    certificate_new_pool_retirement: lv,
    certificate_new_stake_delegation: cv,
    certificate_new_stake_deregistration: iv,
    certificate_new_stake_registration: av,
    certificate_to_bytes: tv,
    certificate_to_hex: _v,
    certificate_to_js_value: ov,
    certificate_to_json: nv,
    certificates_add: Cb,
    certificates_from_bytes: mb,
    certificates_from_hex: kb,
    certificates_from_json: Sb,
    certificates_get: zb,
    certificates_len: Z5,
    certificates_new: Eb,
    certificates_to_bytes: yb,
    certificates_to_hex: vb,
    certificates_to_js_value: jb,
    certificates_to_json: xb,
    constrplutusdata_alternative: SF,
    constrplutusdata_data: EF,
    constrplutusdata_from_bytes: kF,
    constrplutusdata_from_hex: jF,
    constrplutusdata_new: zF,
    constrplutusdata_to_bytes: vF,
    constrplutusdata_to_hex: xF,
    costmdls_from_bytes: WF,
    costmdls_from_hex: VF,
    costmdls_from_json: HF,
    costmdls_get: KF,
    costmdls_insert: XF,
    costmdls_keys: ZF,
    costmdls_len: YF,
    costmdls_new: qF,
    costmdls_retain_language_versions: JF,
    costmdls_to_bytes: MF,
    costmdls_to_hex: QF,
    costmdls_to_js_value: AF,
    costmdls_to_json: BF,
    costmodel_from_bytes: LF,
    costmodel_from_hex: FF,
    costmodel_from_json: RF,
    costmodel_get: IF,
    costmodel_len: dR,
    costmodel_new: $F,
    costmodel_set: DF,
    costmodel_to_bytes: OF,
    costmodel_to_hex: NF,
    costmodel_to_js_value: PF,
    costmodel_to_json: TF,
    create_send_all: ED,
    datacost_coins_per_byte: bb,
    datacost_new_coins_per_byte: gb,
    datacost_new_coins_per_word: fb,
    datahash_from_bech32: qC,
    datahash_from_bytes: HC,
    datahash_from_hex: YC,
    datahash_to_bech32: JO,
    datahash_to_bytes: d7,
    datahash_to_hex: UO,
    datumsource_new: W7,
    datumsource_new_ref_input: Q7,
    decode_arbitrary_bytes_from_metadatum: HN,
    decode_metadatum_to_json_str: YN,
    decode_plutus_datum_to_json_str: oR,
    decrypt_with_password: AS,
    dnsrecordaoraaaa_from_bytes: v1,
    dnsrecordaoraaaa_from_hex: x1,
    dnsrecordaoraaaa_from_json: E1,
    dnsrecordaoraaaa_new: z1,
    dnsrecordaoraaaa_record: C1,
    dnsrecordaoraaaa_to_bytes: m1,
    dnsrecordaoraaaa_to_hex: k1,
    dnsrecordaoraaaa_to_js_value: S1,
    dnsrecordaoraaaa_to_json: j1,
    dnsrecordsrv_from_bytes: L1,
    dnsrecordsrv_from_hex: F1,
    dnsrecordsrv_from_json: T1,
    dnsrecordsrv_new: P1,
    dnsrecordsrv_record: cS,
    dnsrecordsrv_to_bytes: O1,
    dnsrecordsrv_to_hex: N1,
    dnsrecordsrv_to_js_value: lS,
    dnsrecordsrv_to_json: VS,
    ed25519keyhash_from_bech32: fC,
    ed25519keyhash_from_bytes: uC,
    ed25519keyhash_from_hex: bC,
    ed25519keyhash_to_bech32: wC,
    ed25519keyhash_to_bytes: pC,
    ed25519keyhash_to_hex: gC,
    ed25519keyhashes_add: Py,
    ed25519keyhashes_from_bytes: Ey,
    ed25519keyhashes_from_hex: Cy,
    ed25519keyhashes_from_json: Ny,
    ed25519keyhashes_get: Ty,
    ed25519keyhashes_len: I5,
    ed25519keyhashes_new: Fy,
    ed25519keyhashes_to_bytes: Sy,
    ed25519keyhashes_to_hex: zy,
    ed25519keyhashes_to_js_value: Ly,
    ed25519keyhashes_to_json: Oy,
    ed25519keyhashes_to_option: Ry,
    ed25519signature_from_bech32: nC,
    ed25519signature_from_bytes: sC,
    ed25519signature_from_hex: oC,
    ed25519signature_to_bech32: _C,
    ed25519signature_to_bytes: eC,
    ed25519signature_to_hex: rC,
    encode_arbitrary_bytes_as_metadatum: AN,
    encode_json_str_to_metadatum: qN,
    encode_json_str_to_native_script: az,
    encode_json_str_to_plutus_datum: nR,
    encrypt_with_password: BS,
    enterpriseaddress_from_address: zI,
    enterpriseaddress_new: SI,
    enterpriseaddress_payment_cred: oU,
    enterpriseaddress_to_address: EI,
    exunitprices_from_bytes: eT,
    exunitprices_from_hex: rT,
    exunitprices_from_json: sT,
    exunitprices_mem_price: aT,
    exunitprices_new: cT,
    exunitprices_step_price: iT,
    exunitprices_to_bytes: tT,
    exunitprices_to_hex: _T,
    exunitprices_to_js_value: oT,
    exunitprices_to_json: nT,
    exunits_from_bytes: uT,
    exunits_from_hex: wT,
    exunits_from_json: bT,
    exunits_mem: hT,
    exunits_new: mT,
    exunits_steps: yT,
    exunits_to_bytes: lT,
    exunits_to_hex: pT,
    exunits_to_js_value: gT,
    exunits_to_json: fT,
    fixedtransaction_auxiliary_data: WR,
    fixedtransaction_body: FR,
    fixedtransaction_from_bytes: zR,
    fixedtransaction_from_hex: OR,
    fixedtransaction_is_valid: UR,
    fixedtransaction_new: LR,
    fixedtransaction_new_with_auxiliary: NR,
    fixedtransaction_raw_auxiliary_data: QR,
    fixedtransaction_raw_body: TR,
    fixedtransaction_raw_witness_set: DR,
    fixedtransaction_set_auxiliary_data: MR,
    fixedtransaction_set_body: PR,
    fixedtransaction_set_is_valid: IR,
    fixedtransaction_set_witness_set: RR,
    fixedtransaction_to_bytes: ER,
    fixedtransaction_to_hex: CR,
    fixedtransaction_witness_set: $R,
    generaltransactionmetadata_from_bytes: bN,
    generaltransactionmetadata_from_hex: yN,
    generaltransactionmetadata_from_json: kN,
    generaltransactionmetadata_get: EN,
    generaltransactionmetadata_insert: SN,
    generaltransactionmetadata_keys: zN,
    generaltransactionmetadata_len: jN,
    generaltransactionmetadata_new: xN,
    generaltransactionmetadata_to_bytes: gN,
    generaltransactionmetadata_to_hex: hN,
    generaltransactionmetadata_to_js_value: vN,
    generaltransactionmetadata_to_json: mN,
    genesisdelegatehash_from_bech32: SC,
    genesisdelegatehash_from_bytes: jC,
    genesisdelegatehash_from_hex: EC,
    genesisdelegatehash_to_bech32: HO,
    genesisdelegatehash_to_bytes: n7,
    genesisdelegatehash_to_hex: TO,
    genesishash_from_bech32: CC,
    genesishash_from_bytes: zC,
    genesishash_from_hex: OC,
    genesishash_to_bech32: qO,
    genesishash_to_bytes: o7,
    genesishash_to_hex: PO,
    genesishashes_add: Y6,
    genesishashes_from_bytes: W6,
    genesishashes_from_hex: V6,
    genesishashes_from_json: H6,
    genesishashes_get: q6,
    genesishashes_len: B5,
    genesishashes_new: LS,
    genesishashes_to_bytes: M6,
    genesishashes_to_hex: Q6,
    genesishashes_to_js_value: A6,
    genesishashes_to_json: B6,
    genesiskeydelegation_from_bytes: Tm,
    genesiskeydelegation_from_hex: Rm,
    genesiskeydelegation_from_json: Im,
    genesiskeydelegation_genesis_delegate_hash: Mm,
    genesiskeydelegation_genesishash: Um,
    genesiskeydelegation_new: Qm,
    genesiskeydelegation_to_bytes: Fm,
    genesiskeydelegation_to_hex: Pm,
    genesiskeydelegation_to_js_value: Dm,
    genesiskeydelegation_to_json: $m,
    genesiskeydelegation_vrf_keyhash: Wm,
    get_deposit: nz,
    get_implicit_input: rz,
    hash_auxiliary_data: G8,
    hash_plutus_data: ez,
    hash_script_data: _z,
    hash_transaction: tz,
    header_body_signature: xj,
    header_from_bytes: gj,
    header_from_hex: hj,
    header_from_json: vj,
    header_header_body: kj,
    header_new: jj,
    header_to_bytes: fj,
    header_to_hex: bj,
    header_to_js_value: mj,
    header_to_json: yj,
    headerbody_block_body_hash: n3,
    headerbody_block_body_size: r3,
    headerbody_block_number: Hj,
    headerbody_from_bytes: Mj,
    headerbody_from_hex: Qj,
    headerbody_from_json: Aj,
    headerbody_has_nonce_and_leader_vrf: Jj,
    headerbody_has_vrf_result: e3,
    headerbody_issuer_vkey: Kj,
    headerbody_leader_vrf_or_nothing: t3,
    headerbody_new: a3,
    headerbody_new_headerbody: i3,
    headerbody_nonce_vrf_or_nothing: Gj,
    headerbody_operational_cert: o3,
    headerbody_prev_hash: Xj,
    headerbody_protocol_version: s3,
    headerbody_slot: qj,
    headerbody_slot_bignum: Yj,
    headerbody_to_bytes: Uj,
    headerbody_to_hex: Wj,
    headerbody_to_js_value: Bj,
    headerbody_to_json: Vj,
    headerbody_vrf_result_or_nothing: _3,
    headerbody_vrf_vkey: Zj,
    inputswithscriptwitness_add: T7,
    inputswithscriptwitness_get: P7,
    inputswithscriptwitness_len: R7,
    inputswithscriptwitness_new: F7,
    inputwithscriptwitness_input: L7,
    inputwithscriptwitness_new_with_native_script_witness: C7,
    inputwithscriptwitness_new_with_plutus_witness: O7,
    int_as_i32: C8,
    int_as_i32_or_fail: O8,
    int_as_i32_or_nothing: iz,
    int_as_negative: z8,
    int_as_positive: E8,
    int_from_bytes: g8,
    int_from_hex: h8,
    int_from_json: v8,
    int_from_str: N8,
    int_is_positive: S8,
    int_new: k8,
    int_new_i32: j8,
    int_new_negative: x8,
    int_to_bytes: f8,
    int_to_hex: b8,
    int_to_js_value: m8,
    int_to_json: y8,
    int_to_str: L8,
    ipv4_from_bytes: Xv,
    ipv4_from_hex: Zv,
    ipv4_from_json: t1,
    ipv4_ip: _1,
    ipv4_new: e1,
    ipv4_to_bytes: Yv,
    ipv4_to_hex: Kv,
    ipv4_to_js_value: Gv,
    ipv4_to_json: Jv,
    ipv6_from_bytes: o1,
    ipv6_from_hex: a1,
    ipv6_from_json: d1,
    ipv6_ip: u1,
    ipv6_new: l1,
    ipv6_to_bytes: n1,
    ipv6_to_hex: s1,
    ipv6_to_js_value: c1,
    ipv6_to_json: i1,
    kessignature_from_bytes: sO,
    kessignature_to_bytes: oO,
    kesvkey_from_bech32: _O,
    kesvkey_from_bytes: eO,
    kesvkey_from_hex: rO,
    kesvkey_to_bech32: e7,
    kesvkey_to_bytes: p7,
    kesvkey_to_hex: QO,
    language_from_bytes: xT,
    language_from_hex: ST,
    language_from_json: CT,
    language_kind: NT,
    language_new_plutus_v1: OT,
    language_new_plutus_v2: LT,
    language_to_bytes: kT,
    language_to_hex: jT,
    language_to_js_value: zT,
    language_to_json: ET,
    languages_add: RT,
    languages_get: PT,
    languages_len: lR,
    languages_list: $T,
    languages_new: TT,
    legacydaedalusprivatekey_as_bytes: cC,
    legacydaedalusprivatekey_chaincode: dC,
    legacydaedalusprivatekey_from_bytes: iC,
    linearfee_coefficient: gD,
    linearfee_constant: fD,
    linearfee_new: bD,
    make_daedalus_bootstrap_witness: K8,
    make_icarus_bootstrap_witness: Z8,
    make_vkey_witness: J8,
    memory: xg,
    metadatalist_add: HL,
    metadatalist_from_bytes: QL,
    metadatalist_from_hex: BL,
    metadatalist_get: AL,
    metadatalist_len: cR,
    metadatalist_new: xR,
    metadatalist_to_bytes: WL,
    metadatalist_to_hex: VL,
    metadatamap_from_bytes: OL,
    metadatamap_from_hex: NL,
    metadatamap_get: RL,
    metadatamap_get_i32: DL,
    metadatamap_get_str: $L,
    metadatamap_has: IL,
    metadatamap_insert: FL,
    metadatamap_insert_i32: PL,
    metadatamap_insert_str: TL,
    metadatamap_keys: UL,
    metadatamap_len: aR,
    metadatamap_new: mR,
    metadatamap_to_bytes: CL,
    metadatamap_to_hex: LL,
    min_ada_for_output: oz,
    min_ada_required: sz,
    min_fee: hD,
    min_script_fee: mD,
    mint_as_negative_multiasset: x5,
    mint_as_positive_multiasset: k5,
    mint_from_bytes: l5,
    mint_from_hex: p5,
    mint_from_json: g5,
    mint_get: y5,
    mint_get_all: m5,
    mint_insert: h5,
    mint_keys: v5,
    mint_len: eS,
    mint_new: DS,
    mint_new_from_entry: b5,
    mint_to_bytes: d5,
    mint_to_hex: u5,
    mint_to_js_value: f5,
    mint_to_json: w5,
    mintassets_get: a5,
    mintassets_insert: s5,
    mintassets_keys: i5,
    mintassets_len: tS,
    mintassets_new: $S,
    mintassets_new_from_entry: o5,
    mintbuilder_add_asset: KI,
    mintbuilder_build: JI,
    mintbuilder_get_native_scripts: GI,
    mintbuilder_get_plutus_witnesses: tU,
    mintbuilder_get_redeeemers: _U,
    mintbuilder_get_ref_inputs: eU,
    mintbuilder_has_native_scripts: nU,
    mintbuilder_has_plutus_scripts: rU,
    mintbuilder_new: XI,
    mintbuilder_set_asset: ZI,
    mintwitness_new_native_script: HI,
    mintwitness_new_plutus_script: qI,
    mirtostakecredentials_from_bytes: jv,
    mirtostakecredentials_from_hex: Ev,
    mirtostakecredentials_from_json: Ov,
    mirtostakecredentials_get: Nv,
    mirtostakecredentials_insert: Lv,
    mirtostakecredentials_keys: Fv,
    mirtostakecredentials_len: K5,
    mirtostakecredentials_new: mS,
    mirtostakecredentials_to_bytes: xv,
    mirtostakecredentials_to_hex: Sv,
    mirtostakecredentials_to_js_value: Cv,
    mirtostakecredentials_to_json: zv,
    moveinstantaneousreward_as_to_other_pot: Av,
    moveinstantaneousreward_as_to_stake_creds: Hv,
    moveinstantaneousreward_from_bytes: Rv,
    moveinstantaneousreward_from_hex: Dv,
    moveinstantaneousreward_from_json: Mv,
    moveinstantaneousreward_kind: Bv,
    moveinstantaneousreward_new_to_other_pot: Wv,
    moveinstantaneousreward_new_to_stake_creds: Qv,
    moveinstantaneousreward_pot: Vv,
    moveinstantaneousreward_to_bytes: Pv,
    moveinstantaneousreward_to_hex: $v,
    moveinstantaneousreward_to_js_value: Uv,
    moveinstantaneousreward_to_json: Iv,
    moveinstantaneousrewardscert_from_bytes: Am,
    moveinstantaneousrewardscert_from_hex: qm,
    moveinstantaneousrewardscert_from_json: Km,
    moveinstantaneousrewardscert_move_instantaneous_reward: Zm,
    moveinstantaneousrewardscert_new: Jm,
    moveinstantaneousrewardscert_to_bytes: Bm,
    moveinstantaneousrewardscert_to_hex: Hm,
    moveinstantaneousrewardscert_to_js_value: Xm,
    moveinstantaneousrewardscert_to_json: Ym,
    multiasset_from_bytes: A3,
    multiasset_from_hex: q3,
    multiasset_from_json: K3,
    multiasset_get: J3,
    multiasset_get_asset: t5,
    multiasset_insert: Z3,
    multiasset_keys: e5,
    multiasset_len: G5,
    multiasset_new: RS,
    multiasset_set_asset: G3,
    multiasset_sub: _5,
    multiasset_to_bytes: B3,
    multiasset_to_hex: H3,
    multiasset_to_js_value: X3,
    multiasset_to_json: Y3,
    multihostname_dns_name: lk,
    multihostname_from_bytes: ok,
    multihostname_from_hex: ak,
    multihostname_from_json: dk,
    multihostname_new: uk,
    multihostname_to_bytes: nk,
    multihostname_to_hex: sk,
    multihostname_to_js_value: ck,
    multihostname_to_json: ik,
    nativescript_as_script_all: y6,
    nativescript_as_script_any: m6,
    nativescript_as_script_n_of_k: v6,
    nativescript_as_script_pubkey: h6,
    nativescript_as_timelock_expiry: x6,
    nativescript_as_timelock_start: k6,
    nativescript_from_bytes: n6,
    nativescript_from_hex: s6,
    nativescript_from_json: c6,
    nativescript_get_required_signers: j6,
    nativescript_hash: d6,
    nativescript_kind: b6,
    nativescript_new_script_all: u6,
    nativescript_new_script_any: p6,
    nativescript_new_script_n_of_k: w6,
    nativescript_new_script_pubkey: l6,
    nativescript_new_timelock_expiry: g6,
    nativescript_new_timelock_start: f6,
    nativescript_to_bytes: r6,
    nativescript_to_hex: o6,
    nativescript_to_js_value: i6,
    nativescript_to_json: a6,
    nativescripts_add: z6,
    nativescripts_get: E6,
    nativescripts_len: V5,
    nativescripts_new: PS,
    networkid_from_bytes: E5,
    networkid_from_hex: C5,
    networkid_from_json: N5,
    networkid_kind: P5,
    networkid_mainnet: T5,
    networkid_testnet: F5,
    networkid_to_bytes: S5,
    networkid_to_hex: z5,
    networkid_to_js_value: L5,
    networkid_to_json: O5,
    networkinfo_mainnet: RD,
    networkinfo_network_id: LD,
    networkinfo_new: OD,
    networkinfo_protocol_magic: ND,
    networkinfo_testnet: PD,
    networkinfo_testnet_preprod: TD,
    networkinfo_testnet_preview: FD,
    nonce_from_bytes: cO,
    nonce_from_hex: lO,
    nonce_from_json: wO,
    nonce_get_hash: bO,
    nonce_new_from_hash: gO,
    nonce_new_identity: fO,
    nonce_to_bytes: iO,
    nonce_to_hex: dO,
    nonce_to_js_value: pO,
    nonce_to_json: uO,
    operationalcert_from_bytes: zj,
    operationalcert_from_hex: Oj,
    operationalcert_from_json: Fj,
    operationalcert_hot_vkey: Tj,
    operationalcert_kes_period: Rj,
    operationalcert_new: Dj,
    operationalcert_sequence_number: Pj,
    operationalcert_sigma: $j,
    operationalcert_to_bytes: Ej,
    operationalcert_to_hex: Cj,
    operationalcert_to_js_value: Nj,
    operationalcert_to_json: Lj,
    outputdatum_data: e6,
    outputdatum_data_hash: t6,
    outputdatum_new_data: G4,
    outputdatum_new_data_hash: J4,
    plutusdata_as_bytes: iP,
    plutusdata_as_constr_plutus_data: nP,
    plutusdata_as_integer: aP,
    plutusdata_as_list: sP,
    plutusdata_as_map: oP,
    plutusdata_from_address: cP,
    plutusdata_from_bytes: qT,
    plutusdata_from_hex: XT,
    plutusdata_from_json: bR,
    plutusdata_kind: rP,
    plutusdata_new_bytes: _P,
    plutusdata_new_constr_plutus_data: KT,
    plutusdata_new_empty_constr_plutus_data: ZT,
    plutusdata_new_integer: eP,
    plutusdata_new_list: tP,
    plutusdata_new_map: GT,
    plutusdata_new_single_value_constr_plutus_data: JT,
    plutusdata_to_bytes: HT,
    plutusdata_to_hex: YT,
    plutusdata_to_json: hR,
    plutuslist_add: bP,
    plutuslist_from_bytes: uP,
    plutuslist_from_hex: wP,
    plutuslist_get: gP,
    plutuslist_len: wR,
    plutuslist_new: fP,
    plutuslist_to_bytes: lP,
    plutuslist_to_hex: pP,
    plutusmap_from_bytes: UT,
    plutusmap_from_hex: WT,
    plutusmap_get: VT,
    plutusmap_insert: QT,
    plutusmap_keys: BT,
    plutusmap_len: uR,
    plutusmap_new: yR,
    plutusmap_to_bytes: IT,
    plutusmap_to_hex: MT,
    plutusscript_bytes: rF,
    plutusscript_from_bytes: ZN,
    plutusscript_from_bytes_v2: nF,
    plutusscript_from_bytes_with_version: oF,
    plutusscript_from_hex: GN,
    plutusscript_from_hex_with_version: sF,
    plutusscript_hash: aF,
    plutusscript_language_version: iF,
    plutusscript_new: tF,
    plutusscript_new_v2: eF,
    plutusscript_new_with_version: _F,
    plutusscript_to_bytes: KN,
    plutusscript_to_hex: JN,
    plutusscripts_add: yF,
    plutusscripts_from_bytes: lF,
    plutusscripts_from_hex: pF,
    plutusscripts_from_json: gF,
    plutusscripts_get: hF,
    plutusscripts_len: iR,
    plutusscripts_new: bF,
    plutusscripts_to_bytes: dF,
    plutusscripts_to_hex: uF,
    plutusscripts_to_js_value: fF,
    plutusscripts_to_json: wF,
    plutusscriptsource_new: D7,
    plutusscriptsource_new_ref_input: I7,
    plutusscriptsource_new_ref_input_with_lang_ver: U7,
    plutuswitness_datum: X7,
    plutuswitness_new: B7,
    plutuswitness_new_with_ref: A7,
    plutuswitness_new_with_ref_without_datum: q7,
    plutuswitness_new_without_datum: H7,
    plutuswitness_redeemer: K7,
    plutuswitness_script: Y7,
    plutuswitnesses_add: G7,
    plutuswitnesses_get: J7,
    plutuswitnesses_len: jL,
    plutuswitnesses_new: EL,
    pointer_cert_index: RI,
    pointer_cert_index_bignum: II,
    pointer_new: NI,
    pointer_new_pointer: FI,
    pointer_slot: TI,
    pointer_slot_bignum: $I,
    pointer_tx_index: PI,
    pointer_tx_index_bignum: DI,
    pointeraddress_from_address: BI,
    pointeraddress_new: MI,
    pointeraddress_payment_cred: WI,
    pointeraddress_stake_pointer: QI,
    pointeraddress_to_address: VI,
    poolmetadata_from_bytes: Lk,
    poolmetadata_from_hex: Fk,
    poolmetadata_from_json: Rk,
    poolmetadata_new: Ik,
    poolmetadata_pool_metadata_hash: Dk,
    poolmetadata_to_bytes: Ok,
    poolmetadata_to_hex: Nk,
    poolmetadata_to_js_value: Pk,
    poolmetadata_to_json: Tk,
    poolmetadata_url: $k,
    poolmetadatahash_from_bech32: IC,
    poolmetadatahash_from_bytes: DC,
    poolmetadatahash_from_hex: UC,
    poolmetadatahash_to_bech32: XO,
    poolmetadatahash_to_bytes: a7,
    poolmetadatahash_to_hex: $O,
    poolparams_cost: rm,
    poolparams_from_bytes: Yy,
    poolparams_from_hex: Ky,
    poolparams_from_json: Gy,
    poolparams_margin: nm,
    poolparams_new: cm,
    poolparams_operator: tm,
    poolparams_pledge: _m,
    poolparams_pool_metadata: im,
    poolparams_pool_owners: sm,
    poolparams_relays: am,
    poolparams_reward_account: om,
    poolparams_to_bytes: qy,
    poolparams_to_hex: Xy,
    poolparams_to_js_value: Jy,
    poolparams_to_json: Zy,
    poolparams_vrf_keyhash: em,
    poolregistration_from_bytes: um,
    poolregistration_from_hex: wm,
    poolregistration_from_json: bm,
    poolregistration_new: ym,
    poolregistration_pool_params: hm,
    poolregistration_to_bytes: lm,
    poolregistration_to_hex: pm,
    poolregistration_to_js_value: gm,
    poolregistration_to_json: fm,
    poolretirement_epoch: Om,
    poolretirement_from_bytes: km,
    poolretirement_from_hex: jm,
    poolretirement_from_json: zm,
    poolretirement_new: Lm,
    poolretirement_pool_keyhash: Cm,
    poolretirement_to_bytes: vm,
    poolretirement_to_hex: xm,
    poolretirement_to_js_value: Em,
    poolretirement_to_json: Sm,
    privatekey_as_bytes: Mz,
    privatekey_from_bech32: Iz,
    privatekey_from_extended_bytes: Wz,
    privatekey_from_hex: Az,
    privatekey_from_normal_bytes: Qz,
    privatekey_generate_ed25519: $z,
    privatekey_generate_ed25519extended: Dz,
    privatekey_sign: Vz,
    privatekey_to_bech32: Uz,
    privatekey_to_hex: Bz,
    privatekey_to_public: Rz,
    proposedprotocolparameterupdates_from_bytes: ax,
    proposedprotocolparameterupdates_from_hex: cx,
    proposedprotocolparameterupdates_from_json: ux,
    proposedprotocolparameterupdates_get: wx,
    proposedprotocolparameterupdates_insert: px,
    proposedprotocolparameterupdates_keys: fx,
    proposedprotocolparameterupdates_len: H5,
    proposedprotocolparameterupdates_new: yS,
    proposedprotocolparameterupdates_to_bytes: sx,
    proposedprotocolparameterupdates_to_hex: ix,
    proposedprotocolparameterupdates_to_js_value: lx,
    proposedprotocolparameterupdates_to_json: dx,
    protocolparamupdate_ada_per_utxo_byte: u2,
    protocolparamupdate_collateral_percentage: j2,
    protocolparamupdate_cost_models: w2,
    protocolparamupdate_d: o2,
    protocolparamupdate_execution_costs: g2,
    protocolparamupdate_expansion_rate: _2,
    protocolparamupdate_extra_entropy: s2,
    protocolparamupdate_from_bytes: Ox,
    protocolparamupdate_from_hex: Nx,
    protocolparamupdate_from_json: Px,
    protocolparamupdate_key_deposit: Hx,
    protocolparamupdate_max_block_body_size: Mx,
    protocolparamupdate_max_block_ex_units: m2,
    protocolparamupdate_max_block_header_size: Bx,
    protocolparamupdate_max_collateral_inputs: E2,
    protocolparamupdate_max_epoch: Kx,
    protocolparamupdate_max_tx_ex_units: h2,
    protocolparamupdate_max_tx_size: Qx,
    protocolparamupdate_max_value_size: k2,
    protocolparamupdate_min_pool_cost: d2,
    protocolparamupdate_minfee_a: $x,
    protocolparamupdate_minfee_b: Ix,
    protocolparamupdate_n_opt: Jx,
    protocolparamupdate_new: z2,
    protocolparamupdate_pool_deposit: Yx,
    protocolparamupdate_pool_pledge_influence: t2,
    protocolparamupdate_protocol_version: i2,
    protocolparamupdate_set_ada_per_utxo_byte: l2,
    protocolparamupdate_set_collateral_percentage: x2,
    protocolparamupdate_set_cost_models: p2,
    protocolparamupdate_set_execution_costs: f2,
    protocolparamupdate_set_expansion_rate: e2,
    protocolparamupdate_set_key_deposit: Ax,
    protocolparamupdate_set_max_block_body_size: Ux,
    protocolparamupdate_set_max_block_ex_units: y2,
    protocolparamupdate_set_max_block_header_size: Vx,
    protocolparamupdate_set_max_collateral_inputs: S2,
    protocolparamupdate_set_max_epoch: Xx,
    protocolparamupdate_set_max_tx_ex_units: b2,
    protocolparamupdate_set_max_tx_size: Wx,
    protocolparamupdate_set_max_value_size: v2,
    protocolparamupdate_set_min_pool_cost: c2,
    protocolparamupdate_set_minfee_a: Rx,
    protocolparamupdate_set_minfee_b: Dx,
    protocolparamupdate_set_n_opt: Zx,
    protocolparamupdate_set_pool_deposit: qx,
    protocolparamupdate_set_pool_pledge_influence: Gx,
    protocolparamupdate_set_protocol_version: a2,
    protocolparamupdate_set_treasury_growth_rate: r2,
    protocolparamupdate_to_bytes: Cx,
    protocolparamupdate_to_hex: Lx,
    protocolparamupdate_to_js_value: Tx,
    protocolparamupdate_to_json: Fx,
    protocolparamupdate_treasury_growth_rate: n2,
    protocolversion_from_bytes: hx,
    protocolversion_from_hex: mx,
    protocolversion_from_json: xx,
    protocolversion_major: jx,
    protocolversion_minor: Sx,
    protocolversion_new: Ex,
    protocolversion_to_bytes: bx,
    protocolversion_to_hex: yx,
    protocolversion_to_js_value: kx,
    protocolversion_to_json: vx,
    publickey_as_bytes: s7,
    publickey_from_bech32: qz,
    publickey_from_bytes: Xz,
    publickey_from_hex: Gz,
    publickey_hash: Zz,
    publickey_to_bech32: Yz,
    publickey_to_hex: Jz,
    publickey_verify: Kz,
    publickeys_add: G9,
    publickeys_get: J9,
    publickeys_new: Z9,
    publickeys_size: LO,
    redeemer_data: CP,
    redeemer_ex_units: OP,
    redeemer_from_bytes: mP,
    redeemer_from_hex: kP,
    redeemer_from_json: SP,
    redeemer_index: zP,
    redeemer_new: LP,
    redeemer_tag: EP,
    redeemer_to_bytes: yP,
    redeemer_to_hex: vP,
    redeemer_to_js_value: jP,
    redeemer_to_json: xP,
    redeemers_add: GP,
    redeemers_from_bytes: HP,
    redeemers_from_hex: YP,
    redeemers_from_json: ZP,
    redeemers_get: JP,
    redeemers_len: fR,
    redeemers_new: jR,
    redeemers_to_bytes: AP,
    redeemers_to_hex: qP,
    redeemers_to_js_value: KP,
    redeemers_to_json: XP,
    redeemers_total_ex_units: tR,
    redeemertag_from_bytes: TP,
    redeemertag_from_hex: RP,
    redeemertag_from_json: IP,
    redeemertag_kind: VP,
    redeemertag_new_cert: WP,
    redeemertag_new_mint: MP,
    redeemertag_new_reward: QP,
    redeemertag_new_spend: UP,
    redeemertag_to_bytes: FP,
    redeemertag_to_hex: PP,
    redeemertag_to_js_value: DP,
    redeemertag_to_json: $P,
    relay_as_multi_host_name: zk,
    relay_as_single_host_addr: Sk,
    relay_as_single_host_name: Ek,
    relay_from_bytes: fk,
    relay_from_hex: bk,
    relay_from_json: mk,
    relay_kind: jk,
    relay_new_multi_host_name: xk,
    relay_new_single_host_addr: vk,
    relay_new_single_host_name: kk,
    relay_to_bytes: wk,
    relay_to_hex: gk,
    relay_to_js_value: yk,
    relay_to_json: hk,
    relays_add: Ay,
    relays_from_bytes: Iy,
    relays_from_hex: My,
    relays_from_json: Vy,
    relays_get: By,
    relays_len: U5,
    relays_new: jS,
    relays_to_bytes: Dy,
    relays_to_hex: Uy,
    relays_to_js_value: Qy,
    relays_to_json: Wy,
    rewardaddress_from_address: OI,
    rewardaddress_new: aU,
    rewardaddress_payment_cred: sU,
    rewardaddress_to_address: CI,
    rewardaddresses_add: n0,
    rewardaddresses_from_bytes: Zk,
    rewardaddresses_from_hex: Gk,
    rewardaddresses_from_json: _0,
    rewardaddresses_get: r0,
    rewardaddresses_len: W5,
    rewardaddresses_new: zS,
    rewardaddresses_to_bytes: Kk,
    rewardaddresses_to_hex: Jk,
    rewardaddresses_to_js_value: e0,
    rewardaddresses_to_json: t0,
    scriptall_from_bytes: X0,
    scriptall_from_hex: Z0,
    scriptall_from_json: t4,
    scriptall_native_scripts: e4,
    scriptall_new: _4,
    scriptall_to_bytes: Y0,
    scriptall_to_hex: K0,
    scriptall_to_js_value: G0,
    scriptall_to_json: J0,
    scriptany_from_bytes: n4,
    scriptany_from_hex: s4,
    scriptany_from_json: i4,
    scriptany_native_scripts: _S,
    scriptany_new: CS,
    scriptany_to_bytes: r4,
    scriptany_to_hex: o4,
    scriptany_to_js_value: a4,
    scriptany_to_json: MS,
    scriptdatahash_from_bech32: KC,
    scriptdatahash_from_bytes: XC,
    scriptdatahash_from_hex: ZC,
    scriptdatahash_to_bech32: GO,
    scriptdatahash_to_bytes: l7,
    scriptdatahash_to_hex: MO,
    scripthash_from_bech32: yC,
    scripthash_from_bytes: hC,
    scripthash_from_hex: mC,
    scripthash_to_bech32: AO,
    scripthash_to_bytes: _7,
    scripthash_to_hex: FO,
    scripthashes_add: nx,
    scripthashes_from_bytes: Z6,
    scripthashes_from_hex: G6,
    scripthashes_from_json: _x,
    scripthashes_get: rx,
    scripthashes_len: A5,
    scripthashes_new: NS,
    scripthashes_to_bytes: K6,
    scripthashes_to_hex: J6,
    scripthashes_to_js_value: ex,
    scripthashes_to_json: tx,
    scriptnofk_from_bytes: l4,
    scriptnofk_from_hex: p4,
    scriptnofk_from_json: g4,
    scriptnofk_n: q5,
    scriptnofk_native_scripts: b4,
    scriptnofk_new: h4,
    scriptnofk_to_bytes: d4,
    scriptnofk_to_hex: u4,
    scriptnofk_to_js_value: f4,
    scriptnofk_to_json: w4,
    scriptpubkey_addr_keyhash: A0,
    scriptpubkey_from_bytes: U0,
    scriptpubkey_from_hex: W0,
    scriptpubkey_from_json: B0,
    scriptpubkey_new: H0,
    scriptpubkey_to_bytes: I0,
    scriptpubkey_to_hex: M0,
    scriptpubkey_to_js_value: V0,
    scriptpubkey_to_json: Q0,
    scriptref_from_bytes: U4,
    scriptref_from_hex: W4,
    scriptref_from_json: B4,
    scriptref_is_native_script: q4,
    scriptref_is_plutus_script: Y4,
    scriptref_native_script: X4,
    scriptref_new_native_script: A4,
    scriptref_new_plutus_script: H4,
    scriptref_plutus_script: K4,
    scriptref_to_bytes: I4,
    scriptref_to_hex: M4,
    scriptref_to_js_value: V4,
    scriptref_to_json: Q4,
    singlehostaddr_from_bytes: D1,
    singlehostaddr_from_hex: U1,
    singlehostaddr_from_json: Q1,
    singlehostaddr_ipv4: B1,
    singlehostaddr_ipv6: A1,
    singlehostaddr_new: H1,
    singlehostaddr_port: V1,
    singlehostaddr_to_bytes: $1,
    singlehostaddr_to_hex: I1,
    singlehostaddr_to_js_value: W1,
    singlehostaddr_to_json: M1,
    singlehostname_dns_name: SS,
    singlehostname_from_bytes: X1,
    singlehostname_from_hex: Z1,
    singlehostname_from_json: tk,
    singlehostname_new: _k,
    singlehostname_port: ek,
    singlehostname_to_bytes: Y1,
    singlehostname_to_hex: K1,
    singlehostname_to_js_value: G1,
    singlehostname_to_json: J1,
    stakecredential_from_bytes: VD,
    stakecredential_from_hex: AD,
    stakecredential_from_json: YD,
    stakecredential_from_keyhash: DD,
    stakecredential_from_scripthash: ID,
    stakecredential_kind: WD,
    stakecredential_to_bytes: QD,
    stakecredential_to_hex: BD,
    stakecredential_to_js_value: qD,
    stakecredential_to_json: HD,
    stakecredential_to_keyhash: UD,
    stakecredential_to_scripthash: MD,
    stakecredentials_add: Yk,
    stakecredentials_from_bytes: Wk,
    stakecredentials_from_hex: Vk,
    stakecredentials_from_json: Hk,
    stakecredentials_get: qk,
    stakecredentials_len: M5,
    stakecredentials_new: ES,
    stakecredentials_to_bytes: Mk,
    stakecredentials_to_hex: Qk,
    stakecredentials_to_js_value: Ak,
    stakecredentials_to_json: Bk,
    stakedelegation_from_bytes: gy,
    stakedelegation_from_hex: hy,
    stakedelegation_from_json: vy,
    stakedelegation_new: xy,
    stakedelegation_pool_keyhash: fS,
    stakedelegation_stake_credential: ky,
    stakedelegation_to_bytes: fy,
    stakedelegation_to_hex: by,
    stakedelegation_to_js_value: my,
    stakedelegation_to_json: yy,
    stakederegistration_from_bytes: sy,
    stakederegistration_from_hex: iy,
    stakederegistration_from_json: ly,
    stakederegistration_new: py,
    stakederegistration_stake_credential: uy,
    stakederegistration_to_bytes: oy,
    stakederegistration_to_hex: ay,
    stakederegistration_to_js_value: dy,
    stakederegistration_to_json: cy,
    stakeregistration_from_bytes: Gh,
    stakeregistration_from_hex: ey,
    stakeregistration_from_json: ry,
    stakeregistration_new: xS,
    stakeregistration_stake_credential: aS,
    stakeregistration_to_bytes: Jh,
    stakeregistration_to_hex: ty,
    stakeregistration_to_js_value: _y,
    stakeregistration_to_json: US,
    strings_add: rR,
    strings_get: _R,
    strings_len: gR,
    strings_new: kR,
    timelockexpiry_from_bytes: z4,
    timelockexpiry_from_hex: O4,
    timelockexpiry_from_json: F4,
    timelockexpiry_new: R4,
    timelockexpiry_new_timelockexpiry: $4,
    timelockexpiry_slot: T4,
    timelockexpiry_slot_bignum: P4,
    timelockexpiry_to_bytes: E4,
    timelockexpiry_to_hex: C4,
    timelockexpiry_to_js_value: N4,
    timelockexpiry_to_json: L4,
    timelockstart_from_bytes: m4,
    timelockstart_from_hex: k4,
    timelockstart_from_json: j4,
    timelockstart_new: gS,
    timelockstart_new_timelockstart: vS,
    timelockstart_slot: oS,
    timelockstart_slot_bignum: nS,
    timelockstart_to_bytes: y4,
    timelockstart_to_hex: v4,
    timelockstart_to_js_value: x4,
    timelockstart_to_json: WS,
    transaction_auxiliary_data: Bg,
    transaction_body: Wg,
    transaction_from_bytes: Rg,
    transaction_from_hex: Dg,
    transaction_from_json: Mg,
    transaction_is_valid: Vg,
    transaction_new: Hg,
    transaction_set_is_valid: Ag,
    transaction_to_bytes: Pg,
    transaction_to_hex: $g,
    transaction_to_js_value: Ug,
    transaction_to_json: Ig,
    transaction_witness_set: Qg,
    transactionbatch_get: SD,
    transactionbatch_len: jD,
    transactionbatchlist_get: kD,
    transactionbatchlist_len: zD,
    transactionbodies_add: D2,
    transactionbodies_from_bytes: L2,
    transactionbodies_from_hex: F2,
    transactionbodies_from_json: R2,
    transactionbodies_get: $2,
    transactionbodies_len: Y5,
    transactionbodies_new: FS,
    transactionbodies_to_bytes: O2,
    transactionbodies_to_hex: N2,
    transactionbodies_to_js_value: P2,
    transactionbodies_to_json: T2,
    transactionbody_auxiliary_data_hash: Zb,
    transactionbody_certs: Ab,
    transactionbody_collateral: ch,
    transactionbody_collateral_return: fh,
    transactionbody_fee: Ub,
    transactionbody_from_bytes: Nb,
    transactionbody_from_hex: Tb,
    transactionbody_from_json: $b,
    transactionbody_inputs: Db,
    transactionbody_mint: rh,
    transactionbody_multiassets: sS,
    transactionbody_network_id: ph,
    transactionbody_new: hh,
    transactionbody_new_tx_body: yh,
    transactionbody_outputs: Ib,
    transactionbody_reference_inputs: oh,
    transactionbody_remove_ttl: Vb,
    transactionbody_required_signers: lh,
    transactionbody_script_data_hash: ah,
    transactionbody_set_auxiliary_data_hash: Kb,
    transactionbody_set_certs: Bb,
    transactionbody_set_collateral: ih,
    transactionbody_set_collateral_return: wh,
    transactionbody_set_mint: _h,
    transactionbody_set_network_id: uh,
    transactionbody_set_reference_inputs: nh,
    transactionbody_set_required_signers: dh,
    transactionbody_set_script_data_hash: sh,
    transactionbody_set_total_collateral: gh,
    transactionbody_set_ttl: Qb,
    transactionbody_set_update: Yb,
    transactionbody_set_validity_start_interval: Jb,
    transactionbody_set_validity_start_interval_bignum: Gb,
    transactionbody_set_withdrawals: Hb,
    transactionbody_to_bytes: Lb,
    transactionbody_to_hex: Fb,
    transactionbody_to_js_value: Rb,
    transactionbody_to_json: Pb,
    transactionbody_total_collateral: bh,
    transactionbody_ttl: Mb,
    transactionbody_ttl_bignum: Wb,
    transactionbody_update: Xb,
    transactionbody_validity_start_interval: eh,
    transactionbody_validity_start_interval_bignum: th,
    transactionbody_withdrawals: qb,
    transactionbuilder_add_bootstrap_input: f$,
    transactionbuilder_add_change_if_needed: _D,
    transactionbuilder_add_change_if_needed_with_datum: rD,
    transactionbuilder_add_input: g$,
    transactionbuilder_add_inputs_from: r$,
    transactionbuilder_add_json_metadatum: $$,
    transactionbuilder_add_json_metadatum_with_schema: D$,
    transactionbuilder_add_key_input: l$,
    transactionbuilder_add_metadatum: R$,
    transactionbuilder_add_mint_asset: B$,
    transactionbuilder_add_mint_asset_and_output: A$,
    transactionbuilder_add_mint_asset_and_output_min_required_coin: H$,
    transactionbuilder_add_native_script_input: p$,
    transactionbuilder_add_output: x$,
    transactionbuilder_add_plutus_script_input: w$,
    transactionbuilder_add_reference_input: d$,
    transactionbuilder_add_required_native_input_scripts: h$,
    transactionbuilder_add_required_plutus_input_scripts: y$,
    transactionbuilder_add_required_signer: aD,
    transactionbuilder_add_script_input: u$,
    transactionbuilder_build: dD,
    transactionbuilder_build_tx: lD,
    transactionbuilder_build_tx_unsafe: uD,
    transactionbuilder_calc_script_data_hash: nD,
    transactionbuilder_count_missing_input_scripts: b$,
    transactionbuilder_fee_for_input: k$,
    transactionbuilder_fee_for_output: j$,
    transactionbuilder_full_size: iD,
    transactionbuilder_get_auxiliary_data: F$,
    transactionbuilder_get_deposit: tD,
    transactionbuilder_get_explicit_input: X$,
    transactionbuilder_get_explicit_output: G$,
    transactionbuilder_get_fee_if_set: eD,
    transactionbuilder_get_implicit_input: K$,
    transactionbuilder_get_mint: W$,
    transactionbuilder_get_mint_builder: U$,
    transactionbuilder_get_mint_scripts: Q$,
    transactionbuilder_get_native_input_scripts: m$,
    transactionbuilder_get_plutus_input_scripts: v$,
    transactionbuilder_get_reference_inputs: Y$,
    transactionbuilder_get_total_input: Z$,
    transactionbuilder_get_total_output: J$,
    transactionbuilder_min_fee: pD,
    transactionbuilder_new: q$,
    transactionbuilder_output_sizes: cD,
    transactionbuilder_remove_script_data_hash: sD,
    transactionbuilder_set_auxiliary_data: T$,
    transactionbuilder_set_certs: L$,
    transactionbuilder_set_collateral: o$,
    transactionbuilder_set_collateral_return: s$,
    transactionbuilder_set_collateral_return_and_total: a$,
    transactionbuilder_set_fee: S$,
    transactionbuilder_set_inputs: n$,
    transactionbuilder_set_metadata: P$,
    transactionbuilder_set_mint: M$,
    transactionbuilder_set_mint_asset: V$,
    transactionbuilder_set_mint_builder: I$,
    transactionbuilder_set_script_data_hash: oD,
    transactionbuilder_set_total_collateral: i$,
    transactionbuilder_set_total_collateral_and_return: c$,
    transactionbuilder_set_ttl: E$,
    transactionbuilder_set_ttl_bignum: z$,
    transactionbuilder_set_validity_start_interval: C$,
    transactionbuilder_set_validity_start_interval_bignum: O$,
    transactionbuilder_set_withdrawals: N$,
    transactionbuilderconfigbuilder_build: e$,
    transactionbuilderconfigbuilder_coins_per_utxo_byte: YR,
    transactionbuilderconfigbuilder_coins_per_utxo_word: qR,
    transactionbuilderconfigbuilder_ex_unit_prices: XR,
    transactionbuilderconfigbuilder_fee_algo: HR,
    transactionbuilderconfigbuilder_key_deposit: ZR,
    transactionbuilderconfigbuilder_max_tx_size: GR,
    transactionbuilderconfigbuilder_max_value_size: JR,
    transactionbuilderconfigbuilder_new: AR,
    transactionbuilderconfigbuilder_pool_deposit: KR,
    transactionbuilderconfigbuilder_prefer_pure_change: t$,
    transactionhash_from_bech32: kC,
    transactionhash_from_bytes: vC,
    transactionhash_from_hex: xC,
    transactionhash_to_bech32: YO,
    transactionhash_to_bytes: r7,
    transactionhash_to_hex: RO,
    transactioninput_from_bytes: kh,
    transactioninput_from_hex: jh,
    transactioninput_from_json: zh,
    transactioninput_index: Oh,
    transactioninput_new: Lh,
    transactioninput_to_bytes: vh,
    transactioninput_to_hex: xh,
    transactioninput_to_js_value: Eh,
    transactioninput_to_json: Sh,
    transactioninput_transaction_id: Ch,
    transactioninputs_add: _b,
    transactioninputs_from_bytes: Xg,
    transactioninputs_from_hex: Zg,
    transactioninputs_from_json: tb,
    transactioninputs_get: eb,
    transactioninputs_len: D5,
    transactioninputs_new: kS,
    transactioninputs_to_bytes: Yg,
    transactioninputs_to_hex: Kg,
    transactioninputs_to_js_value: Gg,
    transactioninputs_to_json: Jg,
    transactioninputs_to_option: rb,
    transactionmetadatum_as_bytes: sN,
    transactionmetadatum_as_int: oN,
    transactionmetadatum_as_list: nN,
    transactionmetadatum_as_map: rN,
    transactionmetadatum_as_text: aN,
    transactionmetadatum_from_bytes: XL,
    transactionmetadatum_from_hex: ZL,
    transactionmetadatum_kind: pR,
    transactionmetadatum_new_bytes: eN,
    transactionmetadatum_new_int: tN,
    transactionmetadatum_new_list: GL,
    transactionmetadatum_new_map: JL,
    transactionmetadatum_new_text: _N,
    transactionmetadatum_to_bytes: YL,
    transactionmetadatum_to_hex: KL,
    transactionmetadatumlabels_add: wN,
    transactionmetadatumlabels_from_bytes: dN,
    transactionmetadatumlabels_from_hex: uN,
    transactionmetadatumlabels_get: pN,
    transactionmetadatumlabels_len: sR,
    transactionmetadatumlabels_new: vR,
    transactionmetadatumlabels_to_bytes: cN,
    transactionmetadatumlabels_to_hex: lN,
    transactionoutput_address: Uh,
    transactionoutput_amount: Mh,
    transactionoutput_data_hash: Wh,
    transactionoutput_from_bytes: Th,
    transactionoutput_from_hex: Rh,
    transactionoutput_from_json: Ih,
    transactionoutput_has_data_hash: Yh,
    transactionoutput_has_plutus_data: qh,
    transactionoutput_has_script_ref: Xh,
    transactionoutput_new: Kh,
    transactionoutput_plutus_data: Qh,
    transactionoutput_script_ref: Vh,
    transactionoutput_serialization_format: Zh,
    transactionoutput_set_data_hash: Hh,
    transactionoutput_set_plutus_data: Ah,
    transactionoutput_set_script_ref: Bh,
    transactionoutput_to_bytes: Fh,
    transactionoutput_to_hex: Ph,
    transactionoutput_to_js_value: Dh,
    transactionoutput_to_json: $h,
    transactionoutputamountbuilder_build: oE,
    transactionoutputamountbuilder_with_asset_and_min_required_coin: rE,
    transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost: nE,
    transactionoutputamountbuilder_with_coin: eE,
    transactionoutputamountbuilder_with_coin_and_asset: _E,
    transactionoutputamountbuilder_with_value: tE,
    transactionoutputbuilder_new: qS,
    transactionoutputbuilder_next: JS,
    transactionoutputbuilder_with_address: YS,
    transactionoutputbuilder_with_data_hash: XS,
    transactionoutputbuilder_with_plutus_data: KS,
    transactionoutputbuilder_with_script_ref: ZS,
    transactionoutputs_add: pb,
    transactionoutputs_from_bytes: sb,
    transactionoutputs_from_hex: ib,
    transactionoutputs_from_json: lb,
    transactionoutputs_get: ub,
    transactionoutputs_len: $5,
    transactionoutputs_new: OS,
    transactionoutputs_to_bytes: ob,
    transactionoutputs_to_hex: ab,
    transactionoutputs_to_js_value: db,
    transactionoutputs_to_json: cb,
    transactionunspentoutput_from_bytes: iE,
    transactionunspentoutput_from_hex: dE,
    transactionunspentoutput_from_json: pE,
    transactionunspentoutput_input: fE,
    transactionunspentoutput_new: wE,
    transactionunspentoutput_output: gE,
    transactionunspentoutput_to_bytes: aE,
    transactionunspentoutput_to_hex: cE,
    transactionunspentoutput_to_js_value: uE,
    transactionunspentoutput_to_json: lE,
    transactionunspentoutputs_add: jE,
    transactionunspentoutputs_from_json: mE,
    transactionunspentoutputs_get: xE,
    transactionunspentoutputs_len: kE,
    transactionunspentoutputs_new: vE,
    transactionunspentoutputs_to_js_value: yE,
    transactionunspentoutputs_to_json: hE,
    transactionwitnessset_bootstraps: O0,
    transactionwitnessset_from_bytes: h0,
    transactionwitnessset_from_hex: m0,
    transactionwitnessset_from_json: x0,
    transactionwitnessset_native_scripts: z0,
    transactionwitnessset_new: $0,
    transactionwitnessset_plutus_data: T0,
    transactionwitnessset_plutus_scripts: N0,
    transactionwitnessset_redeemers: R0,
    transactionwitnessset_set_bootstraps: C0,
    transactionwitnessset_set_native_scripts: E0,
    transactionwitnessset_set_plutus_data: F0,
    transactionwitnessset_set_plutus_scripts: L0,
    transactionwitnessset_set_redeemers: P0,
    transactionwitnessset_set_vkeys: j0,
    transactionwitnessset_to_bytes: b0,
    transactionwitnessset_to_hex: y0,
    transactionwitnessset_to_js_value: k0,
    transactionwitnessset_to_json: v0,
    transactionwitnessset_vkeys: S0,
    transactionwitnesssets_add: q2,
    transactionwitnesssets_from_bytes: M2,
    transactionwitnesssets_from_hex: Q2,
    transactionwitnesssets_from_json: A2,
    transactionwitnesssets_get: H2,
    transactionwitnesssets_len: X5,
    transactionwitnesssets_new: TS,
    transactionwitnesssets_to_bytes: U2,
    transactionwitnesssets_to_hex: W2,
    transactionwitnesssets_to_js_value: B2,
    transactionwitnesssets_to_json: V2,
    txbuilderconstants_plutus_alonzo_cost_models: xL,
    txbuilderconstants_plutus_default_cost_models: kL,
    txbuilderconstants_plutus_vasil_cost_models: SL,
    txinputsbuilder_add_bootstrap_input: sL,
    txinputsbuilder_add_input: aL,
    txinputsbuilder_add_key_input: _L,
    txinputsbuilder_add_native_script_input: nL,
    txinputsbuilder_add_plutus_script_input: oL,
    txinputsbuilder_add_required_native_input_scripts: cL,
    txinputsbuilder_add_required_plutus_input_scripts: dL,
    txinputsbuilder_add_required_script_input_witnesses: lL,
    txinputsbuilder_add_required_signer: gL,
    txinputsbuilder_add_required_signers: bL,
    txinputsbuilder_add_script_input: rL,
    txinputsbuilder_count_missing_input_scripts: iL,
    txinputsbuilder_get_native_input_scripts: pL,
    txinputsbuilder_get_plutus_input_scripts: wL,
    txinputsbuilder_get_ref_inputs: uL,
    txinputsbuilder_inputs: yL,
    txinputsbuilder_inputs_option: mL,
    txinputsbuilder_len: fL,
    txinputsbuilder_new: eL,
    txinputsbuilder_total_value: hL,
    unitinterval_denominator: Ng,
    unitinterval_from_bytes: Sg,
    unitinterval_from_hex: zg,
    unitinterval_from_json: Lg,
    unitinterval_new: Fg,
    unitinterval_numerator: rS,
    unitinterval_to_bytes: jg,
    unitinterval_to_hex: Eg,
    unitinterval_to_js_value: Og,
    unitinterval_to_json: Cg,
    update_epoch: D6,
    update_from_bytes: L6,
    update_from_hex: F6,
    update_from_json: R6,
    update_new: I6,
    update_proposed_protocol_parameter_updates: $6,
    update_to_bytes: O6,
    update_to_hex: N6,
    update_to_js_value: P6,
    update_to_json: T6,
    url_from_bytes: w1,
    url_from_hex: g1,
    url_from_json: b1,
    url_new: h1,
    url_to_bytes: p1,
    url_to_hex: f1,
    url_to_js_value: dS,
    url_to_json: QS,
    url_url: iS,
    value_checked_add: d8,
    value_checked_sub: l8,
    value_clamped_sub: u8,
    value_coin: s8,
    value_compare: p8,
    value_from_bytes: XE,
    value_from_hex: ZE,
    value_from_json: t8,
    value_is_zero: o8,
    value_multiasset: i8,
    value_new: e8,
    value_new_from_assets: _8,
    value_new_with_assets: r8,
    value_set_coin: a8,
    value_set_multiasset: c8,
    value_to_bytes: YE,
    value_to_hex: KE,
    value_to_js_value: GE,
    value_to_json: JE,
    value_zero: n8,
    vkey_from_bytes: _9,
    vkey_from_hex: n9,
    vkey_from_json: a9,
    vkey_new: i9,
    vkey_public_key: c9,
    vkey_to_bytes: e9,
    vkey_to_hex: r9,
    vkey_to_js_value: s9,
    vkey_to_json: o9,
    vkeys_add: u9,
    vkeys_get: l9,
    vkeys_len: OO,
    vkeys_new: f7,
    vkeywitness_from_bytes: f9,
    vkeywitness_from_hex: b9,
    vkeywitness_from_json: m9,
    vkeywitness_new: v9,
    vkeywitness_signature: BO,
    vkeywitness_to_bytes: w9,
    vkeywitness_to_hex: g9,
    vkeywitness_to_js_value: y9,
    vkeywitness_to_json: h9,
    vkeywitness_vkey: VO,
    vkeywitnesses_add: N9,
    vkeywitnesses_from_bytes: j9,
    vkeywitnesses_from_hex: E9,
    vkeywitnesses_from_json: O9,
    vkeywitnesses_get: L9,
    vkeywitnesses_len: CO,
    vkeywitnesses_new: w7,
    vkeywitnesses_to_bytes: x9,
    vkeywitnesses_to_hex: S9,
    vkeywitnesses_to_js_value: C9,
    vkeywitnesses_to_json: z9,
    vrfcert_from_bytes: mO,
    vrfcert_from_hex: kO,
    vrfcert_from_json: SO,
    vrfcert_new: zO,
    vrfcert_output: NO,
    vrfcert_proof: EO,
    vrfcert_to_bytes: yO,
    vrfcert_to_hex: vO,
    vrfcert_to_js_value: jO,
    vrfcert_to_json: xO,
    vrfkeyhash_from_bech32: WC,
    vrfkeyhash_from_bytes: MC,
    vrfkeyhash_from_hex: QC,
    vrfkeyhash_to_bech32: KO,
    vrfkeyhash_to_bytes: i7,
    vrfkeyhash_to_hex: DO,
    vrfvkey_from_bech32: GC,
    vrfvkey_from_bytes: JC,
    vrfvkey_from_hex: tO,
    vrfvkey_to_bech32: t7,
    vrfvkey_to_bytes: u7,
    vrfvkey_to_hex: WO,
    withdrawals_from_bytes: a0,
    withdrawals_from_hex: c0,
    withdrawals_from_json: u0,
    withdrawals_get: w0,
    withdrawals_insert: p0,
    withdrawals_keys: f0,
    withdrawals_len: Q5,
    withdrawals_new: hS,
    withdrawals_to_bytes: s0,
    withdrawals_to_hex: i0,
    withdrawals_to_js_value: l0,
    withdrawals_to_json: d0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  kf(wU);
  function fU(r) {
    const t = r.trim().toLowerCase().replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Hex string has odd length");
    const e = new Uint8Array(t.length / 2);
    for (let s = 0; s < t.length; s += 2) e[s / 2] = parseInt(t.slice(s, s + 2), 16);
    return e;
  }
  function Et(r) {
    return Array.from(r).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function Ed(r) {
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
  function gU(r) {
    const t = r.trim();
    if (!t) return "";
    if (t.startsWith("{")) try {
      const e = JSON.parse(t);
      if (e && typeof e.cborHex == "string") return e.cborHex;
    } catch {
    }
    return t;
  }
  function bU() {
    const [r, t] = ve.useState(false), [e, s] = ve.useState(""), [o, n] = ve.useState(""), [c, d] = ve.useState(""), [u, l] = ve.useState(false);
    ve.useEffect(() => {
      let I = false;
      try {
        typeof _r == "function" ? I || t(true) : d("Cardano Serialization Lib not available");
      } catch (b) {
        d((b == null ? void 0 : b.message) ?? String(b));
      }
      return () => {
        I = true;
      };
    }, []), ve.useEffect(() => {
      const b = new URLSearchParams(window.location.search).get("cborHex");
      b && s(b);
    }, []);
    function m(I) {
      const b = Number(I.coin().to_str()), h = I.multiasset(), v = {
        lovelace: b
      };
      if (h) {
        const E = h.keys();
        for (let L = 0; L < E.len(); L++) {
          const P = E.get(L), R = h.get(P), D = R.keys(), V = `policy ${Et(P.to_bytes())}`, nt = {};
          for (let gt = 0; gt < D.len(); gt++) {
            const Lt = D.get(gt), ce = Number(R.get(Lt).to_str()), Le = Et(Lt.name()), de = Ed(Le), f_ = de ? `asset ${Le} (${de})` : `asset ${Le}`;
            nt[f_] = ce;
          }
          v[V] = nt;
        }
      }
      return v;
    }
    function x(I) {
      const b = $t.from_bech32(I), h = I.startsWith("addr_test") ? "Testnet" : "Mainnet";
      let v = "Shelley", E = null, L = null, P = null, R = null;
      const D = ro.from_address(b);
      if (D) {
        const nt = D.payment_cred(), gt = nt.to_keyhash(), Lt = nt.to_scripthash();
        gt && (E = Et(gt.to_bytes())), Lt && (L = Et(Lt.to_bytes()));
        const ce = D.stake_cred(), Le = ce.to_keyhash(), de = ce.to_scripthash();
        Le && (P = Et(Le.to_bytes())), de && (R = Et(de.to_bytes()));
      } else {
        const nt = no.from_address(b);
        if (nt) {
          const gt = nt.payment_cred(), Lt = gt.to_keyhash(), ce = gt.to_scripthash();
          Lt && (E = Et(Lt.to_bytes())), ce && (L = Et(ce.to_bytes()));
        }
      }
      return {
        network: h,
        addressEra: v,
        paymentField: E ? {
          "payment credential key hash": E
        } : L ? {
          "payment credential script hash": L
        } : {},
        stakeReference: P || R ? P ? {
          "stake credential key hash": P
        } : {
          "stake credential script hash": R
        } : null,
        referenceScript: null
      };
    }
    function k(I) {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2, _A, _B, _C2, _D2, _E2, _F2, _G, _H, _I2, _J, _K, _L2, _M, _N2, _O2, _P2, _Q, _R2;
      const b = I.body(), h = b.inputs(), v = b.outputs(), E = [];
      for (let A = 0; A < h.len(); A++) {
        const U = h.get(A), X = Et(U.transaction_id().to_bytes());
        E.push(`${X}#${U.index()}`);
      }
      const L = [];
      for (let A = 0; A < v.len(); A++) {
        const U = v.get(A), X = U.address().to_bech32(), { network: dt, addressEra: Nt, paymentField: St, stakeReference: g_, referenceScript: Oo } = x(X), Xs = m(U.amount());
        L.push({
          address: X,
          "address era": Nt,
          amount: Xs,
          network: dt,
          ...St,
          "reference script": Oo,
          "stake reference": g_
        });
      }
      const P = `${b.fee().to_str()} Lovelace`, R = b.ttl && typeof b.ttl == "function" ? b.ttl() : null, D = (typeof b.invalid_before == "function" ? b.invalid_before() : null) ?? (typeof b.validity_start_interval == "function" ? b.validity_start_interval() : null), Z = typeof b.collateral == "function" ? b.collateral() : typeof b.collateral_inputs == "function" ? b.collateral_inputs() : null, V = [];
      if (Z) for (let A = 0; A < Z.len(); A++) {
        const U = Z.get(A), X = Et(U.transaction_id().to_bytes());
        V.push(`${X}#${U.index()}`);
      }
      const nt = (_a2 = b.reference_inputs) == null ? void 0 : _a2.call(b), gt = [];
      if (nt) for (let A = 0; A < nt.len(); A++) {
        const U = nt.get(A), X = Et(U.transaction_id().to_bytes());
        gt.push(`${X}#${U.index()}`);
      }
      function Lt(A) {
        var _a3;
        if (!A) return null;
        const U = A.keys();
        if (!U || U.len() === 0) return null;
        const X = {};
        for (let dt = 0; dt < U.len(); dt++) {
          const Nt = U.get(dt), St = A.get(Nt), g_ = St.keys(), Xs = `policy ${Et(Nt.to_bytes())}`, uc = {};
          for (let Ks = 0; Ks < g_.len(); Ks++) {
            const pc = g_.get(Ks), wc = St.get(pc), Qu = ((_a3 = wc == null ? void 0 : wc.to_str) == null ? void 0 : _a3.call(wc)) ?? String(wc), Vu = Number(Qu), Zs = Et(pc.name()), fc = Ed(Zs), Bu = fc ? `asset ${Zs} (${fc})` : `asset ${Zs}`;
            uc[Bu] = Vu;
          }
          X[Xs] = uc;
        }
        return X;
      }
      const ce = Lt((_b2 = b.mint) == null ? void 0 : _b2.call(b));
      function Le(A) {
        const U = A.address().to_bech32(), { network: X, addressEra: dt, paymentField: Nt, stakeReference: St, referenceScript: g_ } = x(U), Oo = m(A.amount());
        return {
          address: U,
          "address era": dt,
          amount: Oo,
          network: X,
          ...Nt,
          "reference script": g_,
          "stake reference": St
        };
      }
      const de = ((_c2 = b.collateral_return) == null ? void 0 : _c2.call(b)) ? Le(b.collateral_return()) : null, f_ = ((_d2 = b.total_collateral) == null ? void 0 : _d2.call(b)) ? Number(b.total_collateral().to_str()) : null, T = (_e2 = b.required_signers) == null ? void 0 : _e2.call(b), M = T ? (() => {
        const A = [];
        for (let U = 0; U < T.len(); U++) A.push(Et(T.get(U).to_bytes()));
        return A;
      })() : null, W = (_f2 = b.withdrawals) == null ? void 0 : _f2.call(b);
      let ot = null;
      if (W) {
        const A = W.keys(), U = {};
        for (let X = 0; X < A.len(); X++) {
          const dt = A.get(X), Nt = W.get(dt);
          try {
            const St = ((_i2 = (_g2 = dt.to_address) == null ? void 0 : (_h2 = _g2.call(dt)).to_bech32) == null ? void 0 : _i2.call(_h2)) ?? null;
            St && (U[St] = Number(Nt.to_str()));
          } catch {
            const St = Et(((_l2 = (_j2 = dt.to_address) == null ? void 0 : (_k2 = _j2.call(dt)).to_bytes) == null ? void 0 : _l2.call(_k2)) ?? new Uint8Array());
            St && (U[St] = Number(Nt.to_str()));
          }
        }
        Object.keys(U).length > 0 && (ot = U);
      }
      const wt = ((_m2 = b.update) == null ? void 0 : _m2.call(b)) ? {
        raw: Et(((_o2 = (_n2 = b.update()).to_bytes) == null ? void 0 : _o2.call(_n2)) ?? new Uint8Array())
      } : null, At = ((_p2 = I.witness_set) == null ? void 0 : _p2.call(I)) ?? ((_q = I.witnesses) == null ? void 0 : _q.call(I));
      let Ne = [];
      At && (Ne = [
        {
          vkeys: ((_t2 = (_s2 = (_r2 = At.vkeys) == null ? void 0 : _r2.call(At)) == null ? void 0 : _s2.len) == null ? void 0 : _t2.call(_s2)) ?? 0,
          native_scripts: ((_w2 = (_v2 = (_u2 = At.native_scripts) == null ? void 0 : _u2.call(At)) == null ? void 0 : _v2.len) == null ? void 0 : _w2.call(_v2)) ?? 0,
          bootstrap_witnesses: ((_z2 = (_y2 = (_x2 = At.bootstraps) == null ? void 0 : _x2.call(At)) == null ? void 0 : _y2.len) == null ? void 0 : _z2.call(_y2)) ?? 0,
          plutus_v1_scripts: ((_C2 = (_B = (_A = At.plutus_scripts) == null ? void 0 : _A.call(At)) == null ? void 0 : _B.len) == null ? void 0 : _C2.call(_B)) ?? ((_F2 = (_E2 = (_D2 = At.plutus_v1_scripts) == null ? void 0 : _D2.call(At)) == null ? void 0 : _E2.len) == null ? void 0 : _F2.call(_E2)) ?? 0,
          plutus_v2_scripts: ((_I2 = (_H = (_G = At.plutus_v2_scripts) == null ? void 0 : _G.call(At)) == null ? void 0 : _H.len) == null ? void 0 : _I2.call(_H)) ?? 0,
          redeemers: ((_L2 = (_K = (_J = At.redeemers) == null ? void 0 : _J.call(At)) == null ? void 0 : _K.len) == null ? void 0 : _L2.call(_K)) ?? 0,
          datums: ((_O2 = (_N2 = (_M = At.plutus_data) == null ? void 0 : _M.call(At)) == null ? void 0 : _N2.len) == null ? void 0 : _O2.call(_N2)) ?? 0
        }
      ]);
      const Pn = gt.length > 0 || de || f_ !== null ? "Babbage" : "Alonzo";
      function le(A) {
        var _a3;
        try {
          const U = A.as_text();
          if (typeof U == "string") return U;
        } catch {
        }
        try {
          const U = A.as_int();
          if (U) {
            const X = (_a3 = U.as_i32_or_nothing) == null ? void 0 : _a3.call(U);
            return typeof X == "number" ? X : Number(U.to_str());
          }
        } catch {
        }
        try {
          const U = A.as_bytes();
          if (U) return Et(U);
        } catch {
        }
        try {
          const U = A.as_list();
          if (U) {
            const X = [];
            for (let dt = 0; dt < U.len(); dt++) X.push(le(U.get(dt)));
            return X;
          }
        } catch {
        }
        try {
          const U = A.as_map();
          if (U) {
            const X = U.keys(), dt = [];
            for (let Nt = 0; Nt < X.len(); Nt++) {
              const St = X.get(Nt), g_ = U.get(St);
              dt.push([
                le(St),
                le(g_)
              ]);
            }
            return dt;
          }
        } catch {
        }
        return null;
      }
      let Er = null;
      const Ys = ((_P2 = I.auxiliary_data) == null ? void 0 : _P2.call(I)) ?? I.auxiliary_data();
      if (Ys) {
        const A = ((_Q = Ys.metadata) == null ? void 0 : _Q.call(Ys)) ?? Ys.metadata();
        if (A) {
          const U = A.keys(), X = {};
          for (let dt = 0; dt < U.len(); dt++) {
            const Nt = U.get(dt), St = A.get(Nt);
            X[Nt.to_str()] = le(St);
          }
          Object.keys(X).length > 0 && (Er = X);
        }
      }
      return {
        "auxiliary scripts": null,
        certificates: ((_R2 = b.certs) == null ? void 0 : _R2.call(b)) ? "present" : null,
        "collateral inputs": V,
        era: Pn,
        fee: P,
        inputs: E,
        metadata: Er,
        mint: ce,
        outputs: L,
        "reference inputs": gt,
        "required signers (payment key hashes needed for scripts)": M,
        "return collateral": de,
        "total collateral": f_,
        "update proposal": wt,
        "validity range": {
          "lower bound": D,
          "upper bound": R
        },
        withdrawals: ot,
        witnesses: Ne
      };
    }
    const O = (I) => {
      I && I.preventDefault();
      try {
        d(""), n("");
        const b = gU(e);
        if (!b) throw new Error("Please enter a CBOR hex string");
        const h = _r.from_bytes(fU(b)), v = k(h);
        n(JSON.stringify(v, null, 2));
      } catch (b) {
        d((b == null ? void 0 : b.message) ?? String(b));
      }
    }, N = "https://github.com/milos-ethernal/cardano-tx-decoder", F = "https://github.com/milos-ethernal/cardano-tx-decoder/issues";
    return ve.useEffect(() => {
      if (document.querySelector('script[src="https://buttons.github.io/buttons.js"]')) return;
      const I = document.createElement("script");
      I.src = "https://buttons.github.io/buttons.js", I.async = true, I.defer = true, document.body.appendChild(I);
    }, []), B.jsxs("div", {
      className: "container",
      children: [
        B.jsxs("div", {
          className: "header-corner",
          children: [
            B.jsx("a", {
              className: "github-button",
              href: N,
              "data-color-scheme": "no-preference: light; light: light; dark: dark;",
              "data-icon": "octicon-star",
              "data-size": "large",
              "aria-label": "Star milos-ethernal/cardano-tx-decoder on GitHub",
              children: "Star"
            }),
            B.jsx("a", {
              className: "github-button",
              href: F,
              "data-color-scheme": "no-preference: light; light: light; dark: dark;",
              "data-icon": "octicon-issue-opened",
              "data-size": "large",
              "aria-label": "Issue milos-ethernal/cardano-tx-decoder on GitHub",
              children: "Issue"
            })
          ]
        }),
        B.jsxs("header", {
          children: [
            B.jsx("h1", {
              children: "Cardano Transaction Decoder"
            }),
            B.jsx("p", {
              children: "Paste your CBOR hex string to decode the transaction (runs fully in your browser)"
            })
          ]
        }),
        B.jsx("div", {
          className: "form-container",
          children: B.jsxs("form", {
            onSubmit: O,
            children: [
              B.jsxs("div", {
                className: "input-group",
                children: [
                  B.jsx("label", {
                    htmlFor: "cbor",
                    children: "CBOR Hex String:"
                  }),
                  B.jsx("textarea", {
                    id: "cbor",
                    value: e,
                    onChange: (I) => s(I.target.value),
                    placeholder: "Paste your CBOR hex string here...",
                    rows: 4
                  })
                ]
              }),
              B.jsx("button", {
                type: "submit",
                disabled: !r,
                children: r ? "Decode Transaction" : "Loading CSL..."
              })
            ]
          })
        }),
        o && B.jsxs("div", {
          className: "result-container",
          children: [
            B.jsxs("div", {
              className: "result-header",
              children: [
                B.jsx("h3", {
                  children: "Decoded Transaction:"
                }),
                B.jsx("button", {
                  type: "button",
                  className: "copy-btn",
                  title: u ? "Copied!" : "Copy to clipboard",
                  "aria-label": u ? "Copied!" : "Copy to clipboard",
                  onClick: () => {
                    navigator.clipboard.writeText(o).then(() => {
                      l(true), setTimeout(() => l(false), 2e3);
                    });
                  },
                  children: u ? B.jsx("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": true,
                    children: B.jsx("path", {
                      d: "M20 6L9 17l-5-5"
                    })
                  }) : B.jsxs("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": true,
                    children: [
                      B.jsx("rect", {
                        x: "9",
                        y: "9",
                        width: "13",
                        height: "13",
                        rx: "2",
                        ry: "2"
                      }),
                      B.jsx("path", {
                        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                      })
                    ]
                  })
                })
              ]
            }),
            B.jsx("pre", {
              children: o
            })
          ]
        }),
        c && B.jsxs("div", {
          className: "error-container",
          children: [
            B.jsx("h3", {
              children: "Error:"
            }),
            B.jsx("pre", {
              children: c
            })
          ]
        }),
        B.jsxs("section", {
          className: "seo-copy",
          style: {
            marginTop: "1rem"
          },
          children: [
            B.jsx("h2", {
              children: "Free Cardano TX Decoder (CBOR)"
            }),
            B.jsx("p", {
              children: "Decode Cardano transactions directly in your browser. This Cardano TX decoder parses CBOR and shows inputs, outputs, multi-asset mint/burn, metadata, collateral inputs, reference inputs, required signers, validity range, withdrawals and more."
            }),
            B.jsx("h3", {
              style: {
                marginTop: "0.75rem"
              },
              children: "FAQ"
            }),
            B.jsxs("p", {
              children: [
                B.jsx("strong", {
                  children: "Is it safe?"
                }),
                " Yes. Decoding happens locally in your browser using WebAssembly."
              ]
            }),
            B.jsxs("p", {
              children: [
                B.jsx("strong", {
                  children: "What formats are supported?"
                }),
                " Paste raw CBOR hex or JSON containing a ",
                B.jsx("code", {
                  children: "cborHex"
                }),
                " field."
              ]
            }),
            B.jsxs("p", {
              children: [
                B.jsx("strong", {
                  children: "Which fields are decoded?"
                }),
                " We display a JSON similar to ",
                B.jsx("code", {
                  children: "cardano-cli transaction view"
                }),
                ", including mint, metadata, collateral, and reference inputs when present."
              ]
            })
          ]
        })
      ]
    });
  }
  const Wu = document.getElementById("root");
  if (!Wu) throw new Error("Root container not found");
  Uu(Wu).render(B.jsx(ap.StrictMode, {
    children: B.jsx(bU, {})
  }));
})();
