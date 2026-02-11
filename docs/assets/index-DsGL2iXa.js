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
  function Bp(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  var Ed = {
    exports: {}
  }, Fs = {}, zd = {
    exports: {}
  }, A = {};
  var jo = Symbol.for("react.element"), Ap = Symbol.for("react.portal"), Hp = Symbol.for("react.fragment"), qp = Symbol.for("react.strict_mode"), Yp = Symbol.for("react.profiler"), Xp = Symbol.for("react.provider"), Kp = Symbol.for("react.context"), Zp = Symbol.for("react.forward_ref"), Jp = Symbol.for("react.suspense"), Gp = Symbol.for("react.memo"), tu = Symbol.for("react.lazy"), fc = Symbol.iterator;
  function eu(r) {
    return r === null || typeof r != "object" ? null : (r = fc && r[fc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Cd = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Od = Object.assign, Ld = {};
  function Ln(r, t, e) {
    this.props = r, this.context = t, this.refs = Ld, this.updater = e || Cd;
  }
  Ln.prototype.isReactComponent = {};
  Ln.prototype.setState = function(r, t) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, t, "setState");
  };
  Ln.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Nd() {
  }
  Nd.prototype = Ln.prototype;
  function gi(r, t, e) {
    this.props = r, this.context = t, this.refs = Ld, this.updater = e || Cd;
  }
  var bi = gi.prototype = new Nd();
  bi.constructor = gi;
  Od(bi, Ln.prototype);
  bi.isPureReactComponent = true;
  var gc = Array.isArray, Fd = Object.prototype.hasOwnProperty, hi = {
    current: null
  }, Td = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Pd(r, t, e) {
    var s, o = {}, n = null, c = null;
    if (t != null) for (s in t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (n = "" + t.key), t) Fd.call(t, s) && !Td.hasOwnProperty(s) && (o[s] = t[s]);
    var d = arguments.length - 2;
    if (d === 1) o.children = e;
    else if (1 < d) {
      for (var p = Array(d), l = 0; l < d; l++) p[l] = arguments[l + 2];
      o.children = p;
    }
    if (r && r.defaultProps) for (s in d = r.defaultProps, d) o[s] === void 0 && (o[s] = d[s]);
    return {
      $$typeof: jo,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: hi.current
    };
  }
  function _u(r, t) {
    return {
      $$typeof: jo,
      type: r.type,
      key: t,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function yi(r) {
    return typeof r == "object" && r !== null && r.$$typeof === jo;
  }
  function ru(r) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function(e) {
      return t[e];
    });
  }
  var bc = /\/+/g;
  function Zs(r, t) {
    return typeof r == "object" && r !== null && r.key != null ? ru("" + r.key) : t.toString(36);
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
          case Ap:
            c = true;
        }
    }
    if (c) return c = r, o = o(c), r = s === "" ? "." + Zs(c, 0) : s, gc(o) ? (e = "", r != null && (e = r.replace(bc, "$&/") + "/"), Xo(o, t, e, "", function(l) {
      return l;
    })) : o != null && (yi(o) && (o = _u(o, e + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(bc, "$&/") + "/") + r)), t.push(o)), 1;
    if (c = 0, s = s === "" ? "." : s + ":", gc(r)) for (var d = 0; d < r.length; d++) {
      n = r[d];
      var p = s + Zs(n, d);
      c += Xo(n, t, e, p, o);
    }
    else if (p = eu(r), typeof p == "function") for (r = p.call(r), d = 0; !(n = r.next()).done; ) n = n.value, p = s + Zs(n, d++), c += Xo(n, t, e, p, o);
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
  function nu(r) {
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
  var Qt = {
    current: null
  }, Ko = {
    transition: null
  }, ou = {
    ReactCurrentDispatcher: Qt,
    ReactCurrentBatchConfig: Ko,
    ReactCurrentOwner: hi
  };
  function Rd() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  A.Children = {
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
      if (!yi(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  };
  A.Component = Ln;
  A.Fragment = Hp;
  A.Profiler = Yp;
  A.PureComponent = gi;
  A.StrictMode = qp;
  A.Suspense = Jp;
  A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ou;
  A.act = Rd;
  A.cloneElement = function(r, t, e) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var s = Od({}, r.props), o = r.key, n = r.ref, c = r._owner;
    if (t != null) {
      if (t.ref !== void 0 && (n = t.ref, c = hi.current), t.key !== void 0 && (o = "" + t.key), r.type && r.type.defaultProps) var d = r.type.defaultProps;
      for (p in t) Fd.call(t, p) && !Td.hasOwnProperty(p) && (s[p] = t[p] === void 0 && d !== void 0 ? d[p] : t[p]);
    }
    var p = arguments.length - 2;
    if (p === 1) s.children = e;
    else if (1 < p) {
      d = Array(p);
      for (var l = 0; l < p; l++) d[l] = arguments[l + 2];
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
  A.createContext = function(r) {
    return r = {
      $$typeof: Kp,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: Xp,
      _context: r
    }, r.Consumer = r;
  };
  A.createElement = Pd;
  A.createFactory = function(r) {
    var t = Pd.bind(null, r);
    return t.type = r, t;
  };
  A.createRef = function() {
    return {
      current: null
    };
  };
  A.forwardRef = function(r) {
    return {
      $$typeof: Zp,
      render: r
    };
  };
  A.isValidElement = yi;
  A.lazy = function(r) {
    return {
      $$typeof: tu,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: nu
    };
  };
  A.memo = function(r, t) {
    return {
      $$typeof: Gp,
      type: r,
      compare: t === void 0 ? null : t
    };
  };
  A.startTransition = function(r) {
    var t = Ko.transition;
    Ko.transition = {};
    try {
      r();
    } finally {
      Ko.transition = t;
    }
  };
  A.unstable_act = Rd;
  A.useCallback = function(r, t) {
    return Qt.current.useCallback(r, t);
  };
  A.useContext = function(r) {
    return Qt.current.useContext(r);
  };
  A.useDebugValue = function() {
  };
  A.useDeferredValue = function(r) {
    return Qt.current.useDeferredValue(r);
  };
  A.useEffect = function(r, t) {
    return Qt.current.useEffect(r, t);
  };
  A.useId = function() {
    return Qt.current.useId();
  };
  A.useImperativeHandle = function(r, t, e) {
    return Qt.current.useImperativeHandle(r, t, e);
  };
  A.useInsertionEffect = function(r, t) {
    return Qt.current.useInsertionEffect(r, t);
  };
  A.useLayoutEffect = function(r, t) {
    return Qt.current.useLayoutEffect(r, t);
  };
  A.useMemo = function(r, t) {
    return Qt.current.useMemo(r, t);
  };
  A.useReducer = function(r, t, e) {
    return Qt.current.useReducer(r, t, e);
  };
  A.useRef = function(r) {
    return Qt.current.useRef(r);
  };
  A.useState = function(r) {
    return Qt.current.useState(r);
  };
  A.useSyncExternalStore = function(r, t, e) {
    return Qt.current.useSyncExternalStore(r, t, e);
  };
  A.useTransition = function() {
    return Qt.current.useTransition();
  };
  A.version = "18.3.1";
  zd.exports = A;
  var Le = zd.exports;
  const su = Bp(Le);
  var au = Le, iu = Symbol.for("react.element"), cu = Symbol.for("react.fragment"), du = Object.prototype.hasOwnProperty, lu = au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pu = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function $d(r, t, e) {
    var s, o = {}, n = null, c = null;
    e !== void 0 && (n = "" + e), t.key !== void 0 && (n = "" + t.key), t.ref !== void 0 && (c = t.ref);
    for (s in t) du.call(t, s) && !pu.hasOwnProperty(s) && (o[s] = t[s]);
    if (r && r.defaultProps) for (s in t = r.defaultProps, t) o[s] === void 0 && (o[s] = t[s]);
    return {
      $$typeof: iu,
      type: r,
      key: n,
      ref: c,
      props: o,
      _owner: lu.current
    };
  }
  Fs.Fragment = cu;
  Fs.jsx = $d;
  Fs.jsxs = $d;
  Ed.exports = Fs;
  var B = Ed.exports, Dd = {
    exports: {}
  }, se = {}, Id = {
    exports: {}
  }, Ud = {};
  (function(r) {
    function t(T, M) {
      var Q = T.length;
      T.push(M);
      t: for (; 0 < Q; ) {
        var K = Q - 1 >>> 1, ut = T[K];
        if (0 < o(ut, M)) T[K] = M, T[Q] = ut, Q = K;
        else break t;
      }
    }
    function e(T) {
      return T.length === 0 ? null : T[0];
    }
    function s(T) {
      if (T.length === 0) return null;
      var M = T[0], Q = T.pop();
      if (Q !== M) {
        T[0] = Q;
        t: for (var K = 0, ut = T.length, Zr = ut >>> 1; K < Zr; ) {
          var ie = 2 * (K + 1) - 1, Jr = T[ie], he = ie + 1, Pn = T[he];
          if (0 > o(Jr, Q)) he < ut && 0 > o(Pn, Jr) ? (T[K] = Pn, T[he] = Q, K = he) : (T[K] = Jr, T[ie] = Q, K = ie);
          else if (he < ut && 0 > o(Pn, Q)) T[K] = Pn, T[he] = Q, K = he;
          else break t;
        }
      }
      return M;
    }
    function o(T, M) {
      var Q = T.sortIndex - M.sortIndex;
      return Q !== 0 ? Q : T.id - M.id;
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
    var p = [], l = [], y = 1, x = null, k = 3, N = false, C = false, S = false, H = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(T) {
      for (var M = e(l); M !== null; ) {
        if (M.callback === null) s(l);
        else if (M.startTime <= T) s(l), M.sortIndex = M.expirationTime, t(p, M);
        else break;
        M = e(l);
      }
    }
    function z(T) {
      if (S = false, v(T), !C) if (e(p) !== null) C = true, kr(F);
      else {
        var M = e(l);
        M !== null && Tn(z, M.startTime - T);
      }
    }
    function F(T, M) {
      C = false, S && (S = false, m(D), D = -1), N = true;
      var Q = k;
      try {
        for (v(M), x = e(p); x !== null && (!(x.expirationTime > M) || T && !ct()); ) {
          var K = x.callback;
          if (typeof K == "function") {
            x.callback = null, k = x.priorityLevel;
            var ut = K(x.expirationTime <= M);
            M = r.unstable_now(), typeof ut == "function" ? x.callback = ut : x === e(p) && s(p), v(M);
          } else s(p);
          x = e(p);
        }
        if (x !== null) var Zr = true;
        else {
          var ie = e(l);
          ie !== null && Tn(z, ie.startTime - M), Zr = false;
        }
        return Zr;
      } finally {
        x = null, k = Q, N = false;
      }
    }
    var P = false, $ = null, D = -1, q = 5, I = -1;
    function ct() {
      return !(r.unstable_now() - I < q);
    }
    function $t() {
      if ($ !== null) {
        var T = r.unstable_now();
        I = T;
        var M = true;
        try {
          M = $(true, T);
        } finally {
          M ? Bt() : (P = false, $ = null);
        }
      } else P = false;
    }
    var Bt;
    if (typeof b == "function") Bt = function() {
      b($t);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), Kr = be.port2;
      be.port1.onmessage = $t, Bt = function() {
        Kr.postMessage(null);
      };
    } else Bt = function() {
      H($t, 0);
    };
    function kr(T) {
      $ = T, P || (P = true, Bt());
    }
    function Tn(T, M) {
      D = H(function() {
        T(r.unstable_now());
      }, M);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, r.unstable_continueExecution = function() {
      C || N || (C = true, kr(F));
    }, r.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < T ? Math.floor(1e3 / T) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, r.unstable_getFirstCallbackNode = function() {
      return e(p);
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
      var Q = k;
      k = M;
      try {
        return T();
      } finally {
        k = Q;
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
      var Q = k;
      k = T;
      try {
        return M();
      } finally {
        k = Q;
      }
    }, r.unstable_scheduleCallback = function(T, M, Q) {
      var K = r.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? K + Q : K) : Q = K, T) {
        case 1:
          var ut = -1;
          break;
        case 2:
          ut = 250;
          break;
        case 5:
          ut = 1073741823;
          break;
        case 4:
          ut = 1e4;
          break;
        default:
          ut = 5e3;
      }
      return ut = Q + ut, T = {
        id: y++,
        callback: M,
        priorityLevel: T,
        startTime: Q,
        expirationTime: ut,
        sortIndex: -1
      }, Q > K ? (T.sortIndex = Q, t(l, T), e(p) === null && T === e(l) && (S ? (m(D), D = -1) : S = true, Tn(z, Q - K))) : (T.sortIndex = ut, t(p, T), C || N || (C = true, kr(F))), T;
    }, r.unstable_shouldYield = ct, r.unstable_wrapCallback = function(T) {
      var M = k;
      return function() {
        var Q = k;
        k = M;
        try {
          return T.apply(this, arguments);
        } finally {
          k = Q;
        }
      };
    };
  })(Ud);
  Id.exports = Ud;
  var uu = Id.exports;
  var wu = Le, ne = uu;
  function O(r) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 1; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e]);
    return "Minified React error #" + r + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Md = /* @__PURE__ */ new Set(), oo = {};
  function Yr(r, t) {
    xn(r, t), xn(r + "Capture", t);
  }
  function xn(r, t) {
    for (oo[r] = t, r = 0; r < t.length; r++) Md.add(t[r]);
  }
  var s_ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xa = Object.prototype.hasOwnProperty, fu = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, hc = {}, yc = {};
  function gu(r) {
    return xa.call(yc, r) ? true : xa.call(hc, r) ? false : fu.test(r) ? yc[r] = true : (hc[r] = true, false);
  }
  function bu(r, t, e, s) {
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
  function hu(r, t, e, s) {
    if (t === null || typeof t > "u" || bu(r, t, e, s)) return true;
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
  function Vt(r, t, e, s, o, n, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = o, this.mustUseProperty = e, this.propertyName = r, this.type = t, this.sanitizeURL = n, this.removeEmptyString = c;
  }
  var Ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
    Ct[r] = new Vt(r, 0, false, r, null, false, false);
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
    Ct[t] = new Vt(t, 1, false, r[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 2, false, r.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 2, false, r, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
    Ct[r] = new Vt(r, 3, false, r.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 3, true, r, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 4, false, r, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 6, false, r, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 5, false, r.toLowerCase(), null, false, false);
  });
  var mi = /[\-:]([a-z])/g;
  function vi(r) {
    return r[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
    var t = r.replace(mi, vi);
    Ct[t] = new Vt(t, 1, false, r, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
    var t = r.replace(mi, vi);
    Ct[t] = new Vt(t, 1, false, r, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(r) {
    var t = r.replace(mi, vi);
    Ct[t] = new Vt(t, 1, false, r, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 1, false, r.toLowerCase(), null, false, false);
  });
  Ct.xlinkHref = new Vt("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(r) {
    Ct[r] = new Vt(r, 1, false, r.toLowerCase(), null, true, true);
  });
  function ki(r, t, e, s) {
    var o = Ct.hasOwnProperty(t) ? Ct[t] : null;
    (o !== null ? o.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hu(t, e, o, s) && (e = null), s || o === null ? gu(t) && (e === null ? r.removeAttribute(t) : r.setAttribute(t, "" + e)) : o.mustUseProperty ? r[o.propertyName] = e === null ? o.type === 3 ? false : "" : e : (t = o.attributeName, s = o.attributeNamespace, e === null ? r.removeAttribute(t) : (o = o.type, e = o === 3 || o === 4 && e === true ? "" : "" + e, s ? r.setAttributeNS(s, t, e) : r.setAttribute(t, e))));
  }
  var d_ = wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, No = Symbol.for("react.element"), en = Symbol.for("react.portal"), _n = Symbol.for("react.fragment"), xi = Symbol.for("react.strict_mode"), ja = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Qd = Symbol.for("react.context"), ji = Symbol.for("react.forward_ref"), Sa = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Si = Symbol.for("react.memo"), w_ = Symbol.for("react.lazy"), Vd = Symbol.for("react.offscreen"), mc = Symbol.iterator;
  function Rn(r) {
    return r === null || typeof r != "object" ? null : (r = mc && r[mc] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var it = Object.assign, Js;
  function Vn(r) {
    if (Js === void 0) try {
      throw Error();
    } catch (e) {
      var t = e.stack.trim().match(/\n( *(at )?)/);
      Js = t && t[1] || "";
    }
    return `
` + Js + r;
  }
  var Gs = false;
  function ta(r, t) {
    if (!r || Gs) return "";
    Gs = true;
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
      Gs = false, Error.prepareStackTrace = e;
    }
    return (r = r ? r.displayName || r.name : "") ? Vn(r) : "";
  }
  function yu(r) {
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
        return r = ta(r.type, false), r;
      case 11:
        return r = ta(r.type.render, false), r;
      case 1:
        return r = ta(r.type, true), r;
      default:
        return "";
    }
  }
  function za(r) {
    if (r == null) return null;
    if (typeof r == "function") return r.displayName || r.name || null;
    if (typeof r == "string") return r;
    switch (r) {
      case _n:
        return "Fragment";
      case en:
        return "Portal";
      case ja:
        return "Profiler";
      case xi:
        return "StrictMode";
      case Sa:
        return "Suspense";
      case Ea:
        return "SuspenseList";
    }
    if (typeof r == "object") switch (r.$$typeof) {
      case Qd:
        return (r.displayName || "Context") + ".Consumer";
      case Wd:
        return (r._context.displayName || "Context") + ".Provider";
      case ji:
        var t = r.render;
        return r = r.displayName, r || (r = t.displayName || t.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
      case Si:
        return t = r.displayName || null, t !== null ? t : za(r.type) || "Memo";
      case w_:
        t = r._payload, r = r._init;
        try {
          return za(r(t));
        } catch {
        }
    }
    return null;
  }
  function mu(r) {
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
        return za(t);
      case 8:
        return t === xi ? "StrictMode" : "Mode";
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
  function br(r) {
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
  function Bd(r) {
    var t = r.type;
    return (r = r.nodeName) && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vu(r) {
    var t = Bd(r) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(r.constructor.prototype, t), s = "" + r[t];
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
    r._valueTracker || (r._valueTracker = vu(r));
  }
  function Ad(r) {
    if (!r) return false;
    var t = r._valueTracker;
    if (!t) return true;
    var e = t.getValue(), s = "";
    return r && (s = Bd(r) ? r.checked ? "true" : "false" : r.value), r = s, r !== e ? (t.setValue(r), true) : false;
  }
  function is(r) {
    if (r = r || (typeof document < "u" ? document : void 0), typeof r > "u") return null;
    try {
      return r.activeElement || r.body;
    } catch {
      return r.body;
    }
  }
  function Ca(r, t) {
    var e = t.checked;
    return it({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: e ?? r._wrapperState.initialChecked
    });
  }
  function vc(r, t) {
    var e = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    e = br(t.value != null ? t.value : e), r._wrapperState = {
      initialChecked: s,
      initialValue: e,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Hd(r, t) {
    t = t.checked, t != null && ki(r, "checked", t, false);
  }
  function Oa(r, t) {
    Hd(r, t);
    var e = br(t.value), s = t.type;
    if (e != null) s === "number" ? (e === 0 && r.value === "" || r.value != e) && (r.value = "" + e) : r.value !== "" + e && (r.value = "" + e);
    else if (s === "submit" || s === "reset") {
      r.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? La(r, t.type, e) : t.hasOwnProperty("defaultValue") && La(r, t.type, br(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
  }
  function kc(r, t, e) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + r._wrapperState.initialValue, e || t === r.value || (r.value = t), r.defaultValue = t;
    }
    e = r.name, e !== "" && (r.name = ""), r.defaultChecked = !!r._wrapperState.initialChecked, e !== "" && (r.name = e);
  }
  function La(r, t, e) {
    (t !== "number" || is(r.ownerDocument) !== r) && (e == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + e && (r.defaultValue = "" + e));
  }
  var Bn = Array.isArray;
  function fn(r, t, e, s) {
    if (r = r.options, t) {
      t = {};
      for (var o = 0; o < e.length; o++) t["$" + e[o]] = true;
      for (e = 0; e < r.length; e++) o = t.hasOwnProperty("$" + r[e].value), r[e].selected !== o && (r[e].selected = o), o && s && (r[e].defaultSelected = true);
    } else {
      for (e = "" + br(e), t = null, o = 0; o < r.length; o++) {
        if (r[o].value === e) {
          r[o].selected = true, s && (r[o].defaultSelected = true);
          return;
        }
        t !== null || r[o].disabled || (t = r[o]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Na(r, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return it({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + r._wrapperState.initialValue
    });
  }
  function xc(r, t) {
    var e = t.value;
    if (e == null) {
      if (e = t.children, t = t.defaultValue, e != null) {
        if (t != null) throw Error(O(92));
        if (Bn(e)) {
          if (1 < e.length) throw Error(O(93));
          e = e[0];
        }
        t = e;
      }
      t == null && (t = ""), e = t;
    }
    r._wrapperState = {
      initialValue: br(e)
    };
  }
  function qd(r, t) {
    var e = br(t.value), s = br(t.defaultValue);
    e != null && (e = "" + e, e !== r.value && (r.value = e), t.defaultValue == null && r.defaultValue !== e && (r.defaultValue = e)), s != null && (r.defaultValue = "" + s);
  }
  function jc(r) {
    var t = r.textContent;
    t === r._wrapperState.initialValue && t !== "" && t !== null && (r.value = t);
  }
  function Yd(r) {
    switch (r) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fa(r, t) {
    return r == null || r === "http://www.w3.org/1999/xhtml" ? Yd(t) : r === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r;
  }
  var To, Xd = function(r) {
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
  }, ku = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(qn).forEach(function(r) {
    ku.forEach(function(t) {
      t = t + r.charAt(0).toUpperCase() + r.substring(1), qn[t] = qn[r];
    });
  });
  function Kd(r, t, e) {
    return t == null || typeof t == "boolean" || t === "" ? "" : e || typeof t != "number" || t === 0 || qn.hasOwnProperty(r) && qn[r] ? ("" + t).trim() : t + "px";
  }
  function Zd(r, t) {
    r = r.style;
    for (var e in t) if (t.hasOwnProperty(e)) {
      var s = e.indexOf("--") === 0, o = Kd(e, t[e], s);
      e === "float" && (e = "cssFloat"), s ? r.setProperty(e, o) : r[e] = o;
    }
  }
  var xu = it({
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
  function Ta(r, t) {
    if (t) {
      if (xu[r] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, r));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(O(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(O(62));
    }
  }
  function Pa(r, t) {
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
  var Ra = null;
  function Ei(r) {
    return r = r.target || r.srcElement || window, r.correspondingUseElement && (r = r.correspondingUseElement), r.nodeType === 3 ? r.parentNode : r;
  }
  var $a = null, gn = null, bn = null;
  function Sc(r) {
    if (r = zo(r)) {
      if (typeof $a != "function") throw Error(O(280));
      var t = r.stateNode;
      t && (t = Ds(t), $a(r.stateNode, r.type, t));
    }
  }
  function Jd(r) {
    gn ? bn ? bn.push(r) : bn = [
      r
    ] : gn = r;
  }
  function Gd() {
    if (gn) {
      var r = gn, t = bn;
      if (bn = gn = null, Sc(r), t) for (r = 0; r < t.length; r++) Sc(t[r]);
    }
  }
  function tl(r, t) {
    return r(t);
  }
  function el() {
  }
  var ea = false;
  function _l(r, t, e) {
    if (ea) return r(t, e);
    ea = true;
    try {
      return tl(r, t, e);
    } finally {
      ea = false, (gn !== null || bn !== null) && (el(), Gd());
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
    if (e && typeof e != "function") throw Error(O(231, t, typeof e));
    return e;
  }
  var Da = false;
  if (s_) try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function() {
        Da = true;
      }
    }), window.addEventListener("test", $n, $n), window.removeEventListener("test", $n, $n);
  } catch {
    Da = false;
  }
  function ju(r, t, e, s, o, n, c, d, p) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(e, l);
    } catch (y) {
      this.onError(y);
    }
  }
  var Yn = false, cs = null, ds = false, Ia = null, Su = {
    onError: function(r) {
      Yn = true, cs = r;
    }
  };
  function Eu(r, t, e, s, o, n, c, d, p) {
    Yn = false, cs = null, ju.apply(Su, arguments);
  }
  function zu(r, t, e, s, o, n, c, d, p) {
    if (Eu.apply(this, arguments), Yn) {
      if (Yn) {
        var l = cs;
        Yn = false, cs = null;
      } else throw Error(O(198));
      ds || (ds = true, Ia = l);
    }
  }
  function Xr(r) {
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
  function rl(r) {
    if (r.tag === 13) {
      var t = r.memoizedState;
      if (t === null && (r = r.alternate, r !== null && (t = r.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ec(r) {
    if (Xr(r) !== r) throw Error(O(188));
  }
  function Cu(r) {
    var t = r.alternate;
    if (!t) {
      if (t = Xr(r), t === null) throw Error(O(188));
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
          if (n === e) return Ec(o), r;
          if (n === s) return Ec(o), t;
          n = n.sibling;
        }
        throw Error(O(188));
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
          if (!c) throw Error(O(189));
        }
      }
      if (e.alternate !== s) throw Error(O(190));
    }
    if (e.tag !== 3) throw Error(O(188));
    return e.stateNode.current === e ? r : t;
  }
  function nl(r) {
    return r = Cu(r), r !== null ? ol(r) : null;
  }
  function ol(r) {
    if (r.tag === 5 || r.tag === 6) return r;
    for (r = r.child; r !== null; ) {
      var t = ol(r);
      if (t !== null) return t;
      r = r.sibling;
    }
    return null;
  }
  var sl = ne.unstable_scheduleCallback, zc = ne.unstable_cancelCallback, Ou = ne.unstable_shouldYield, Lu = ne.unstable_requestPaint, wt = ne.unstable_now, Nu = ne.unstable_getCurrentPriorityLevel, zi = ne.unstable_ImmediatePriority, al = ne.unstable_UserBlockingPriority, ls = ne.unstable_NormalPriority, Fu = ne.unstable_LowPriority, il = ne.unstable_IdlePriority, Ts = null, Ie = null;
  function Tu(r) {
    if (Ie && typeof Ie.onCommitFiberRoot == "function") try {
      Ie.onCommitFiberRoot(Ts, r, void 0, (r.current.flags & 128) === 128);
    } catch {
    }
  }
  var Se = Math.clz32 ? Math.clz32 : $u, Pu = Math.log, Ru = Math.LN2;
  function $u(r) {
    return r >>>= 0, r === 0 ? 32 : 31 - (Pu(r) / Ru | 0) | 0;
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
  function ps(r, t) {
    var e = r.pendingLanes;
    if (e === 0) return 0;
    var s = 0, o = r.suspendedLanes, n = r.pingedLanes, c = e & 268435455;
    if (c !== 0) {
      var d = c & ~o;
      d !== 0 ? s = An(d) : (n &= c, n !== 0 && (s = An(n)));
    } else c = e & ~o, c !== 0 ? s = An(c) : n !== 0 && (s = An(n));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && !(t & o) && (o = s & -s, n = t & -t, o >= n || o === 16 && (n & 4194240) !== 0)) return t;
    if (s & 4 && (s |= e & 16), t = r.entangledLanes, t !== 0) for (r = r.entanglements, t &= s; 0 < t; ) e = 31 - Se(t), o = 1 << e, s |= r[e], t &= ~o;
    return s;
  }
  function Du(r, t) {
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
  function Iu(r, t) {
    for (var e = r.suspendedLanes, s = r.pingedLanes, o = r.expirationTimes, n = r.pendingLanes; 0 < n; ) {
      var c = 31 - Se(n), d = 1 << c, p = o[c];
      p === -1 ? (!(d & e) || d & s) && (o[c] = Du(d, t)) : p <= t && (r.expiredLanes |= d), n &= ~d;
    }
  }
  function Ua(r) {
    return r = r.pendingLanes & -1073741825, r !== 0 ? r : r & 1073741824 ? 1073741824 : 0;
  }
  function cl() {
    var r = Po;
    return Po <<= 1, !(Po & 4194240) && (Po = 64), r;
  }
  function _a(r) {
    for (var t = [], e = 0; 31 > e; e++) t.push(r);
    return t;
  }
  function So(r, t, e) {
    r.pendingLanes |= t, t !== 536870912 && (r.suspendedLanes = 0, r.pingedLanes = 0), r = r.eventTimes, t = 31 - Se(t), r[t] = e;
  }
  function Uu(r, t) {
    var e = r.pendingLanes & ~t;
    r.pendingLanes = t, r.suspendedLanes = 0, r.pingedLanes = 0, r.expiredLanes &= t, r.mutableReadLanes &= t, r.entangledLanes &= t, t = r.entanglements;
    var s = r.eventTimes;
    for (r = r.expirationTimes; 0 < e; ) {
      var o = 31 - Se(e), n = 1 << o;
      t[o] = 0, s[o] = -1, r[o] = -1, e &= ~n;
    }
  }
  function Ci(r, t) {
    var e = r.entangledLanes |= t;
    for (r = r.entanglements; e; ) {
      var s = 31 - Se(e), o = 1 << s;
      o & t | r[s] & t && (r[s] |= t), e &= ~o;
    }
  }
  var J = 0;
  function dl(r) {
    return r &= -r, 1 < r ? 4 < r ? r & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ll, Oi, pl, ul, wl, Ma = false, $o = [], cr = null, dr = null, lr = null, io = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), b_ = [], Mu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Cc(r, t) {
    switch (r) {
      case "focusin":
      case "focusout":
        cr = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
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
    }, t !== null && (t = zo(t), t !== null && Oi(t)), r) : (r.eventSystemFlags |= s, t = r.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), r);
  }
  function Wu(r, t, e, s, o) {
    switch (t) {
      case "focusin":
        return cr = Dn(cr, r, t, e, s, o), true;
      case "dragenter":
        return dr = Dn(dr, r, t, e, s, o), true;
      case "mouseover":
        return lr = Dn(lr, r, t, e, s, o), true;
      case "pointerover":
        var n = o.pointerId;
        return io.set(n, Dn(io.get(n) || null, r, t, e, s, o)), true;
      case "gotpointercapture":
        return n = o.pointerId, co.set(n, Dn(co.get(n) || null, r, t, e, s, o)), true;
    }
    return false;
  }
  function fl(r) {
    var t = Cr(r.target);
    if (t !== null) {
      var e = Xr(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = rl(e), t !== null) {
            r.blockedOn = t, wl(r.priority, function() {
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
      var e = Wa(r.domEventName, r.eventSystemFlags, t[0], r.nativeEvent);
      if (e === null) {
        e = r.nativeEvent;
        var s = new e.constructor(e.type, e);
        Ra = s, e.target.dispatchEvent(s), Ra = null;
      } else return t = zo(e), t !== null && Oi(t), r.blockedOn = e, false;
      t.shift();
    }
    return true;
  }
  function Oc(r, t, e) {
    Zo(r) && e.delete(t);
  }
  function Qu() {
    Ma = false, cr !== null && Zo(cr) && (cr = null), dr !== null && Zo(dr) && (dr = null), lr !== null && Zo(lr) && (lr = null), io.forEach(Oc), co.forEach(Oc);
  }
  function In(r, t) {
    r.blockedOn === t && (r.blockedOn = null, Ma || (Ma = true, ne.unstable_scheduleCallback(ne.unstable_NormalPriority, Qu)));
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
    for (cr !== null && In(cr, r), dr !== null && In(dr, r), lr !== null && In(lr, r), io.forEach(t), co.forEach(t), e = 0; e < b_.length; e++) s = b_[e], s.blockedOn === r && (s.blockedOn = null);
    for (; 0 < b_.length && (e = b_[0], e.blockedOn === null); ) fl(e), e.blockedOn === null && b_.shift();
  }
  var hn = d_.ReactCurrentBatchConfig, us = true;
  function Vu(r, t, e, s) {
    var o = J, n = hn.transition;
    hn.transition = null;
    try {
      J = 1, Li(r, t, e, s);
    } finally {
      J = o, hn.transition = n;
    }
  }
  function Bu(r, t, e, s) {
    var o = J, n = hn.transition;
    hn.transition = null;
    try {
      J = 4, Li(r, t, e, s);
    } finally {
      J = o, hn.transition = n;
    }
  }
  function Li(r, t, e, s) {
    if (us) {
      var o = Wa(r, t, e, s);
      if (o === null) pa(r, t, s, ws, e), Cc(r, s);
      else if (Wu(o, r, t, e, s)) s.stopPropagation();
      else if (Cc(r, s), t & 4 && -1 < Mu.indexOf(r)) {
        for (; o !== null; ) {
          var n = zo(o);
          if (n !== null && ll(n), n = Wa(r, t, e, s), n === null && pa(r, t, s, ws, e), n === o) break;
          o = n;
        }
        o !== null && s.stopPropagation();
      } else pa(r, t, s, null, e);
    }
  }
  var ws = null;
  function Wa(r, t, e, s) {
    if (ws = null, r = Ei(s), r = Cr(r), r !== null) if (t = Xr(r), t === null) r = null;
    else if (e = t.tag, e === 13) {
      if (r = rl(t), r !== null) return r;
      r = null;
    } else if (e === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      r = null;
    } else t !== r && (r = null);
    return ws = r, null;
  }
  function gl(r) {
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
        switch (Nu()) {
          case zi:
            return 1;
          case al:
            return 4;
          case ls:
          case Fu:
            return 16;
          case il:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var or = null, Ni = null, Jo = null;
  function bl() {
    if (Jo) return Jo;
    var r, t = Ni, e = t.length, s, o = "value" in or ? or.value : or.textContent, n = o.length;
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
  function Lc() {
    return false;
  }
  function ae(r) {
    function t(e, s, o, n, c) {
      this._reactName = e, this._targetInst = o, this.type = s, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var d in r) r.hasOwnProperty(d) && (e = r[d], this[d] = e ? e(n) : n[d]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Do : Lc, this.isPropagationStopped = Lc, this;
    }
    return it(t.prototype, {
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
  var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fi = ae(Nn), Eo = it({}, Nn, {
    view: 0,
    detail: 0
  }), Au = ae(Eo), ra, na, Un, Ps = it({}, Eo, {
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
    getModifierState: Ti,
    button: 0,
    buttons: 0,
    relatedTarget: function(r) {
      return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget;
    },
    movementX: function(r) {
      return "movementX" in r ? r.movementX : (r !== Un && (Un && r.type === "mousemove" ? (ra = r.screenX - Un.screenX, na = r.screenY - Un.screenY) : na = ra = 0, Un = r), ra);
    },
    movementY: function(r) {
      return "movementY" in r ? r.movementY : na;
    }
  }), Nc = ae(Ps), Hu = it({}, Ps, {
    dataTransfer: 0
  }), qu = ae(Hu), Yu = it({}, Eo, {
    relatedTarget: 0
  }), oa = ae(Yu), Xu = it({}, Nn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ku = ae(Xu), Zu = it({}, Nn, {
    clipboardData: function(r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    }
  }), Ju = ae(Zu), Gu = it({}, Nn, {
    data: 0
  }), Fc = ae(Gu), tw = {
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
  }, ew = {
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
  }, _w = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rw(r) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(r) : (r = _w[r]) ? !!t[r] : false;
  }
  function Ti() {
    return rw;
  }
  var nw = it({}, Eo, {
    key: function(r) {
      if (r.key) {
        var t = tw[r.key] || r.key;
        if (t !== "Unidentified") return t;
      }
      return r.type === "keypress" ? (r = Go(r), r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? ew[r.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ti,
    charCode: function(r) {
      return r.type === "keypress" ? Go(r) : 0;
    },
    keyCode: function(r) {
      return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    },
    which: function(r) {
      return r.type === "keypress" ? Go(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0;
    }
  }), ow = ae(nw), sw = it({}, Ps, {
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
  }), Tc = ae(sw), aw = it({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti
  }), iw = ae(aw), cw = it({}, Nn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dw = ae(cw), lw = it({}, Ps, {
    deltaX: function(r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function(r) {
      return "deltaY" in r ? r.deltaY : "wheelDeltaY" in r ? -r.wheelDeltaY : "wheelDelta" in r ? -r.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pw = ae(lw), uw = [
    9,
    13,
    27,
    32
  ], Pi = s_ && "CompositionEvent" in window, Xn = null;
  s_ && "documentMode" in document && (Xn = document.documentMode);
  var ww = s_ && "TextEvent" in window && !Xn, hl = s_ && (!Pi || Xn && 8 < Xn && 11 >= Xn), Pc = " ", Rc = false;
  function yl(r, t) {
    switch (r) {
      case "keyup":
        return uw.indexOf(t.keyCode) !== -1;
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
  function ml(r) {
    return r = r.detail, typeof r == "object" && "data" in r ? r.data : null;
  }
  var rn = false;
  function fw(r, t) {
    switch (r) {
      case "compositionend":
        return ml(t);
      case "keypress":
        return t.which !== 32 ? null : (Rc = true, Pc);
      case "textInput":
        return r = t.data, r === Pc && Rc ? null : r;
      default:
        return null;
    }
  }
  function gw(r, t) {
    if (rn) return r === "compositionend" || !Pi && yl(r, t) ? (r = bl(), Jo = Ni = or = null, rn = false, r) : null;
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
        return hl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var bw = {
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
  function $c(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t === "input" ? !!bw[r.type] : t === "textarea";
  }
  function vl(r, t, e, s) {
    Jd(s), t = fs(t, "onChange"), 0 < t.length && (e = new Fi("onChange", "change", null, e, s), r.push({
      event: e,
      listeners: t
    }));
  }
  var Kn = null, po = null;
  function hw(r) {
    Fl(r, 0);
  }
  function Rs(r) {
    var t = sn(r);
    if (Ad(t)) return r;
  }
  function yw(r, t) {
    if (r === "change") return t;
  }
  var kl = false;
  if (s_) {
    var sa;
    if (s_) {
      var aa = "oninput" in document;
      if (!aa) {
        var Dc = document.createElement("div");
        Dc.setAttribute("oninput", "return;"), aa = typeof Dc.oninput == "function";
      }
      sa = aa;
    } else sa = false;
    kl = sa && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    Kn && (Kn.detachEvent("onpropertychange", xl), po = Kn = null);
  }
  function xl(r) {
    if (r.propertyName === "value" && Rs(po)) {
      var t = [];
      vl(t, po, r, Ei(r)), _l(hw, t);
    }
  }
  function mw(r, t, e) {
    r === "focusin" ? (Ic(), Kn = t, po = e, Kn.attachEvent("onpropertychange", xl)) : r === "focusout" && Ic();
  }
  function vw(r) {
    if (r === "selectionchange" || r === "keyup" || r === "keydown") return Rs(po);
  }
  function kw(r, t) {
    if (r === "click") return Rs(t);
  }
  function xw(r, t) {
    if (r === "input" || r === "change") return Rs(t);
  }
  function jw(r, t) {
    return r === t && (r !== 0 || 1 / r === 1 / t) || r !== r && t !== t;
  }
  var ze = typeof Object.is == "function" ? Object.is : jw;
  function uo(r, t) {
    if (ze(r, t)) return true;
    if (typeof r != "object" || r === null || typeof t != "object" || t === null) return false;
    var e = Object.keys(r), s = Object.keys(t);
    if (e.length !== s.length) return false;
    for (s = 0; s < e.length; s++) {
      var o = e[s];
      if (!xa.call(t, o) || !ze(r[o], t[o])) return false;
    }
    return true;
  }
  function Uc(r) {
    for (; r && r.firstChild; ) r = r.firstChild;
    return r;
  }
  function Mc(r, t) {
    var e = Uc(r);
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
      e = Uc(e);
    }
  }
  function jl(r, t) {
    return r && t ? r === t ? true : r && r.nodeType === 3 ? false : t && t.nodeType === 3 ? jl(r, t.parentNode) : "contains" in r ? r.contains(t) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(t) & 16) : false : false;
  }
  function Sl() {
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
  function Ri(r) {
    var t = r && r.nodeName && r.nodeName.toLowerCase();
    return t && (t === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || t === "textarea" || r.contentEditable === "true");
  }
  function Sw(r) {
    var t = Sl(), e = r.focusedElem, s = r.selectionRange;
    if (t !== e && e && e.ownerDocument && jl(e.ownerDocument.documentElement, e)) {
      if (s !== null && Ri(e)) {
        if (t = s.start, r = s.end, r === void 0 && (r = t), "selectionStart" in e) e.selectionStart = t, e.selectionEnd = Math.min(r, e.value.length);
        else if (r = (t = e.ownerDocument || document) && t.defaultView || window, r.getSelection) {
          r = r.getSelection();
          var o = e.textContent.length, n = Math.min(s.start, o);
          s = s.end === void 0 ? n : Math.min(s.end, o), !r.extend && n > s && (o = s, s = n, n = o), o = Mc(e, n);
          var c = Mc(e, s);
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
  var Ew = s_ && "documentMode" in document && 11 >= document.documentMode, nn = null, Qa = null, Zn = null, Va = false;
  function Wc(r, t, e) {
    var s = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Va || nn == null || nn !== is(s) || (s = nn, "selectionStart" in s && Ri(s) ? s = {
      start: s.selectionStart,
      end: s.selectionEnd
    } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
      anchorNode: s.anchorNode,
      anchorOffset: s.anchorOffset,
      focusNode: s.focusNode,
      focusOffset: s.focusOffset
    }), Zn && uo(Zn, s) || (Zn = s, s = fs(Qa, "onSelect"), 0 < s.length && (t = new Fi("onSelect", "select", null, t, e), r.push({
      event: t,
      listeners: s
    }), t.target = nn)));
  }
  function Io(r, t) {
    var e = {};
    return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit" + r] = "webkit" + t, e["Moz" + r] = "moz" + t, e;
  }
  var on = {
    animationend: Io("Animation", "AnimationEnd"),
    animationiteration: Io("Animation", "AnimationIteration"),
    animationstart: Io("Animation", "AnimationStart"),
    transitionend: Io("Transition", "TransitionEnd")
  }, ia = {}, El = {};
  s_ && (El = document.createElement("div").style, "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation), "TransitionEvent" in window || delete on.transitionend.transition);
  function $s(r) {
    if (ia[r]) return ia[r];
    if (!on[r]) return r;
    var t = on[r], e;
    for (e in t) if (t.hasOwnProperty(e) && e in El) return ia[r] = t[e];
    return r;
  }
  var zl = $s("animationend"), Cl = $s("animationiteration"), Ol = $s("animationstart"), Ll = $s("transitionend"), Nl = /* @__PURE__ */ new Map(), Qc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yr(r, t) {
    Nl.set(r, t), Yr(t, [
      r
    ]);
  }
  for (var ca = 0; ca < Qc.length; ca++) {
    var da = Qc[ca], zw = da.toLowerCase(), Cw = da[0].toUpperCase() + da.slice(1);
    yr(zw, "on" + Cw);
  }
  yr(zl, "onAnimationEnd");
  yr(Cl, "onAnimationIteration");
  yr(Ol, "onAnimationStart");
  yr("dblclick", "onDoubleClick");
  yr("focusin", "onFocus");
  yr("focusout", "onBlur");
  yr(Ll, "onTransitionEnd");
  xn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  xn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  xn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  xn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  Yr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  Yr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  Yr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  Yr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  Yr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  Yr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ow = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
  function Vc(r, t, e) {
    var s = r.type || "unknown-event";
    r.currentTarget = e, zu(s, t, void 0, r), r.currentTarget = null;
  }
  function Fl(r, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < r.length; e++) {
      var s = r[e], o = s.event;
      s = s.listeners;
      t: {
        var n = void 0;
        if (t) for (var c = s.length - 1; 0 <= c; c--) {
          var d = s[c], p = d.instance, l = d.currentTarget;
          if (d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Vc(o, d, l), n = p;
        }
        else for (c = 0; c < s.length; c++) {
          if (d = s[c], p = d.instance, l = d.currentTarget, d = d.listener, p !== n && o.isPropagationStopped()) break t;
          Vc(o, d, l), n = p;
        }
      }
    }
    if (ds) throw r = Ia, ds = false, Ia = null, r;
  }
  function et(r, t) {
    var e = t[Ya];
    e === void 0 && (e = t[Ya] = /* @__PURE__ */ new Set());
    var s = r + "__bubble";
    e.has(s) || (Tl(t, r, 2, false), e.add(s));
  }
  function la(r, t, e) {
    var s = 0;
    t && (s |= 4), Tl(e, r, s, t);
  }
  var Uo = "_reactListening" + Math.random().toString(36).slice(2);
  function wo(r) {
    if (!r[Uo]) {
      r[Uo] = true, Md.forEach(function(e) {
        e !== "selectionchange" && (Ow.has(e) || la(e, false, r), la(e, true, r));
      });
      var t = r.nodeType === 9 ? r : r.ownerDocument;
      t === null || t[Uo] || (t[Uo] = true, la("selectionchange", false, t));
    }
  }
  function Tl(r, t, e, s) {
    switch (gl(t)) {
      case 1:
        var o = Vu;
        break;
      case 4:
        o = Bu;
        break;
      default:
        o = Li;
    }
    e = o.bind(null, t, e, r), o = void 0, !Da || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), s ? o !== void 0 ? r.addEventListener(t, e, {
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
          var p = c.tag;
          if ((p === 3 || p === 4) && (p = c.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o)) return;
          c = c.return;
        }
        for (; d !== null; ) {
          if (c = Cr(d), c === null) return;
          if (p = c.tag, p === 5 || p === 6) {
            s = n = c;
            continue t;
          }
          d = d.parentNode;
        }
      }
      s = s.return;
    }
    _l(function() {
      var l = n, y = Ei(e), x = [];
      t: {
        var k = Nl.get(r);
        if (k !== void 0) {
          var N = Fi, C = r;
          switch (r) {
            case "keypress":
              if (Go(e) === 0) break t;
            case "keydown":
            case "keyup":
              N = ow;
              break;
            case "focusin":
              C = "focus", N = oa;
              break;
            case "focusout":
              C = "blur", N = oa;
              break;
            case "beforeblur":
            case "afterblur":
              N = oa;
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
              N = Nc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = qu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = iw;
              break;
            case zl:
            case Cl:
            case Ol:
              N = Ku;
              break;
            case Ll:
              N = dw;
              break;
            case "scroll":
              N = Au;
              break;
            case "wheel":
              N = pw;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Ju;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Tc;
          }
          var S = (t & 4) !== 0, H = !S && r === "scroll", m = S ? k !== null ? k + "Capture" : null : k;
          S = [];
          for (var b = l, v; b !== null; ) {
            v = b;
            var z = v.stateNode;
            if (v.tag === 5 && z !== null && (v = z, m !== null && (z = ao(b, m), z != null && S.push(fo(b, z, v)))), H) break;
            b = b.return;
          }
          0 < S.length && (k = new N(k, C, null, e, y), x.push({
            event: k,
            listeners: S
          }));
        }
      }
      if (!(t & 7)) {
        t: {
          if (k = r === "mouseover" || r === "pointerover", N = r === "mouseout" || r === "pointerout", k && e !== Ra && (C = e.relatedTarget || e.fromElement) && (Cr(C) || C[a_])) break t;
          if ((N || k) && (k = y.window === y ? y : (k = y.ownerDocument) ? k.defaultView || k.parentWindow : window, N ? (C = e.relatedTarget || e.toElement, N = l, C = C ? Cr(C) : null, C !== null && (H = Xr(C), C !== H || C.tag !== 5 && C.tag !== 6) && (C = null)) : (N = null, C = l), N !== C)) {
            if (S = Nc, z = "onMouseLeave", m = "onMouseEnter", b = "mouse", (r === "pointerout" || r === "pointerover") && (S = Tc, z = "onPointerLeave", m = "onPointerEnter", b = "pointer"), H = N == null ? k : sn(N), v = C == null ? k : sn(C), k = new S(z, b + "leave", N, e, y), k.target = H, k.relatedTarget = v, z = null, Cr(y) === l && (S = new S(m, b + "enter", C, e, y), S.target = v, S.relatedTarget = H, z = S), H = z, N && C) e: {
              for (S = N, m = C, b = 0, v = S; v; v = Gr(v)) b++;
              for (v = 0, z = m; z; z = Gr(z)) v++;
              for (; 0 < b - v; ) S = Gr(S), b--;
              for (; 0 < v - b; ) m = Gr(m), v--;
              for (; b--; ) {
                if (S === m || m !== null && S === m.alternate) break e;
                S = Gr(S), m = Gr(m);
              }
              S = null;
            }
            else S = null;
            N !== null && Bc(x, k, N, S, false), C !== null && H !== null && Bc(x, H, C, S, true);
          }
        }
        t: {
          if (k = l ? sn(l) : window, N = k.nodeName && k.nodeName.toLowerCase(), N === "select" || N === "input" && k.type === "file") var F = yw;
          else if ($c(k)) if (kl) F = xw;
          else {
            F = vw;
            var P = mw;
          }
          else (N = k.nodeName) && N.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (F = kw);
          if (F && (F = F(r, l))) {
            vl(x, F, e, y);
            break t;
          }
          P && P(r, k, l), r === "focusout" && (P = k._wrapperState) && P.controlled && k.type === "number" && La(k, "number", k.value);
        }
        switch (P = l ? sn(l) : window, r) {
          case "focusin":
            ($c(P) || P.contentEditable === "true") && (nn = P, Qa = l, Zn = null);
            break;
          case "focusout":
            Zn = Qa = nn = null;
            break;
          case "mousedown":
            Va = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Va = false, Wc(x, e, y);
            break;
          case "selectionchange":
            if (Ew) break;
          case "keydown":
          case "keyup":
            Wc(x, e, y);
        }
        var $;
        if (Pi) t: {
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
        else rn ? yl(r, e) && (D = "onCompositionEnd") : r === "keydown" && e.keyCode === 229 && (D = "onCompositionStart");
        D && (hl && e.locale !== "ko" && (rn || D !== "onCompositionStart" ? D === "onCompositionEnd" && rn && ($ = bl()) : (or = y, Ni = "value" in or ? or.value : or.textContent, rn = true)), P = fs(l, D), 0 < P.length && (D = new Fc(D, r, null, e, y), x.push({
          event: D,
          listeners: P
        }), $ ? D.data = $ : ($ = ml(e), $ !== null && (D.data = $)))), ($ = ww ? fw(r, e) : gw(r, e)) && (l = fs(l, "onBeforeInput"), 0 < l.length && (y = new Fc("onBeforeInput", "beforeinput", null, e, y), x.push({
          event: y,
          listeners: l
        }), y.data = $));
      }
      Fl(x, t);
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
  function Gr(r) {
    if (r === null) return null;
    do
      r = r.return;
    while (r && r.tag !== 5);
    return r || null;
  }
  function Bc(r, t, e, s, o) {
    for (var n = t._reactName, c = []; e !== null && e !== s; ) {
      var d = e, p = d.alternate, l = d.stateNode;
      if (p !== null && p === s) break;
      d.tag === 5 && l !== null && (d = l, o ? (p = ao(e, n), p != null && c.unshift(fo(e, p, d))) : o || (p = ao(e, n), p != null && c.push(fo(e, p, d)))), e = e.return;
    }
    c.length !== 0 && r.push({
      event: t,
      listeners: c
    });
  }
  var Lw = /\r\n?/g, Nw = /\u0000|\uFFFD/g;
  function Ac(r) {
    return (typeof r == "string" ? r : "" + r).replace(Lw, `
`).replace(Nw, "");
  }
  function Mo(r, t, e) {
    if (t = Ac(t), Ac(r) !== t && e) throw Error(O(425));
  }
  function gs() {
  }
  var Ba = null, Aa = null;
  function Ha(r, t) {
    return r === "textarea" || r === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var qa = typeof setTimeout == "function" ? setTimeout : void 0, Fw = typeof clearTimeout == "function" ? clearTimeout : void 0, Hc = typeof Promise == "function" ? Promise : void 0, Tw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hc < "u" ? function(r) {
    return Hc.resolve(null).then(r).catch(Pw);
  } : qa;
  function Pw(r) {
    setTimeout(function() {
      throw r;
    });
  }
  function ua(r, t) {
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
  function pr(r) {
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
  function qc(r) {
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
  var Fn = Math.random().toString(36).slice(2), Te = "__reactFiber$" + Fn, go = "__reactProps$" + Fn, a_ = "__reactContainer$" + Fn, Ya = "__reactEvents$" + Fn, Rw = "__reactListeners$" + Fn, $w = "__reactHandles$" + Fn;
  function Cr(r) {
    var t = r[Te];
    if (t) return t;
    for (var e = r.parentNode; e; ) {
      if (t = e[a_] || e[Te]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (r = qc(r); r !== null; ) {
          if (e = r[Te]) return e;
          r = qc(r);
        }
        return t;
      }
      r = e, e = r.parentNode;
    }
    return null;
  }
  function zo(r) {
    return r = r[Te] || r[a_], !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r;
  }
  function sn(r) {
    if (r.tag === 5 || r.tag === 6) return r.stateNode;
    throw Error(O(33));
  }
  function Ds(r) {
    return r[go] || null;
  }
  var Xa = [], an = -1;
  function mr(r) {
    return {
      current: r
    };
  }
  function nt(r) {
    0 > an || (r.current = Xa[an], Xa[an] = null, an--);
  }
  function tt(r, t) {
    an++, Xa[an] = r.current, r.current = t;
  }
  var hr = {}, Rt = mr(hr), Zt = mr(false), Vr = hr;
  function jn(r, t) {
    var e = r.type.contextTypes;
    if (!e) return hr;
    var s = r.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var o = {}, n;
    for (n in e) o[n] = t[n];
    return s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = t, r.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Jt(r) {
    return r = r.childContextTypes, r != null;
  }
  function bs() {
    nt(Zt), nt(Rt);
  }
  function Yc(r, t, e) {
    if (Rt.current !== hr) throw Error(O(168));
    tt(Rt, t), tt(Zt, e);
  }
  function Pl(r, t, e) {
    var s = r.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return e;
    s = s.getChildContext();
    for (var o in s) if (!(o in t)) throw Error(O(108, mu(r) || "Unknown", o));
    return it({}, e, s);
  }
  function hs(r) {
    return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || hr, Vr = Rt.current, tt(Rt, r), tt(Zt, Zt.current), true;
  }
  function Xc(r, t, e) {
    var s = r.stateNode;
    if (!s) throw Error(O(169));
    e ? (r = Pl(r, t, Vr), s.__reactInternalMemoizedMergedChildContext = r, nt(Zt), nt(Rt), tt(Rt, r)) : nt(Zt), tt(Zt, e);
  }
  var Ve = null, Is = false, wa = false;
  function Rl(r) {
    Ve === null ? Ve = [
      r
    ] : Ve.push(r);
  }
  function Dw(r) {
    Is = true, Rl(r);
  }
  function vr() {
    if (!wa && Ve !== null) {
      wa = true;
      var r = 0, t = J;
      try {
        var e = Ve;
        for (J = 1; r < e.length; r++) {
          var s = e[r];
          do
            s = s(true);
          while (s !== null);
        }
        Ve = null, Is = false;
      } catch (o) {
        throw Ve !== null && (Ve = Ve.slice(r + 1)), sl(zi, vr), o;
      } finally {
        J = t, wa = false;
      }
    }
    return null;
  }
  var cn = [], dn = 0, ys = null, ms = 0, ce = [], de = 0, Br = null, __ = 1, r_ = "";
  function xr(r, t) {
    cn[dn++] = ms, cn[dn++] = ys, ys = r, ms = t;
  }
  function $l(r, t, e) {
    ce[de++] = __, ce[de++] = r_, ce[de++] = Br, Br = r;
    var s = __;
    r = r_;
    var o = 32 - Se(s) - 1;
    s &= ~(1 << o), e += 1;
    var n = 32 - Se(t) + o;
    if (30 < n) {
      var c = o - o % 5;
      n = (s & (1 << c) - 1).toString(32), s >>= c, o -= c, __ = 1 << 32 - Se(t) + o | e << o | s, r_ = n + r;
    } else __ = 1 << n | e << o | s, r_ = r;
  }
  function $i(r) {
    r.return !== null && (xr(r, 1), $l(r, 1, 0));
  }
  function Di(r) {
    for (; r === ys; ) ys = cn[--dn], cn[dn] = null, ms = cn[--dn], cn[dn] = null;
    for (; r === Br; ) Br = ce[--de], ce[de] = null, r_ = ce[--de], ce[de] = null, __ = ce[--de], ce[de] = null;
  }
  var re = null, _e = null, ot = false, xe = null;
  function Dl(r, t) {
    var e = pe(5, null, null, 0);
    e.elementType = "DELETED", e.stateNode = t, e.return = r, t = r.deletions, t === null ? (r.deletions = [
      e
    ], r.flags |= 16) : t.push(e);
  }
  function Kc(r, t) {
    switch (r.tag) {
      case 5:
        var e = r.type;
        return t = t.nodeType !== 1 || e.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (r.stateNode = t, re = r, _e = pr(t.firstChild), true) : false;
      case 6:
        return t = r.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (r.stateNode = t, re = r, _e = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (e = Br !== null ? {
          id: __,
          overflow: r_
        } : null, r.memoizedState = {
          dehydrated: t,
          treeContext: e,
          retryLane: 1073741824
        }, e = pe(18, null, null, 0), e.stateNode = t, e.return = r, r.child = e, re = r, _e = null, true) : false;
      default:
        return false;
    }
  }
  function Ka(r) {
    return (r.mode & 1) !== 0 && (r.flags & 128) === 0;
  }
  function Za(r) {
    if (ot) {
      var t = _e;
      if (t) {
        var e = t;
        if (!Kc(r, t)) {
          if (Ka(r)) throw Error(O(418));
          t = pr(e.nextSibling);
          var s = re;
          t && Kc(r, t) ? Dl(s, e) : (r.flags = r.flags & -4097 | 2, ot = false, re = r);
        }
      } else {
        if (Ka(r)) throw Error(O(418));
        r.flags = r.flags & -4097 | 2, ot = false, re = r;
      }
    }
  }
  function Zc(r) {
    for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; ) r = r.return;
    re = r;
  }
  function Wo(r) {
    if (r !== re) return false;
    if (!ot) return Zc(r), ot = true, false;
    var t;
    if ((t = r.tag !== 3) && !(t = r.tag !== 5) && (t = r.type, t = t !== "head" && t !== "body" && !Ha(r.type, r.memoizedProps)), t && (t = _e)) {
      if (Ka(r)) throw Il(), Error(O(418));
      for (; t; ) Dl(r, t), t = pr(t.nextSibling);
    }
    if (Zc(r), r.tag === 13) {
      if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(O(317));
      t: {
        for (r = r.nextSibling, t = 0; r; ) {
          if (r.nodeType === 8) {
            var e = r.data;
            if (e === "/$") {
              if (t === 0) {
                _e = pr(r.nextSibling);
                break t;
              }
              t--;
            } else e !== "$" && e !== "$!" && e !== "$?" || t++;
          }
          r = r.nextSibling;
        }
        _e = null;
      }
    } else _e = re ? pr(r.stateNode.nextSibling) : null;
    return true;
  }
  function Il() {
    for (var r = _e; r; ) r = pr(r.nextSibling);
  }
  function Sn() {
    _e = re = null, ot = false;
  }
  function Ii(r) {
    xe === null ? xe = [
      r
    ] : xe.push(r);
  }
  var Iw = d_.ReactCurrentBatchConfig;
  function Mn(r, t, e) {
    if (r = e.ref, r !== null && typeof r != "function" && typeof r != "object") {
      if (e._owner) {
        if (e = e._owner, e) {
          if (e.tag !== 1) throw Error(O(309));
          var s = e.stateNode;
        }
        if (!s) throw Error(O(147, r));
        var o = s, n = "" + r;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === n ? t.ref : (t = function(c) {
          var d = o.refs;
          c === null ? delete d[n] : d[n] = c;
        }, t._stringRef = n, t);
      }
      if (typeof r != "string") throw Error(O(284));
      if (!e._owner) throw Error(O(290, r));
    }
    return r;
  }
  function Qo(r, t) {
    throw r = Object.prototype.toString.call(t), Error(O(31, r === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : r));
  }
  function Jc(r) {
    var t = r._init;
    return t(r._payload);
  }
  function Ul(r) {
    function t(m, b) {
      if (r) {
        var v = m.deletions;
        v === null ? (m.deletions = [
          b
        ], m.flags |= 16) : v.push(b);
      }
    }
    function e(m, b) {
      if (!r) return null;
      for (; b !== null; ) t(m, b), b = b.sibling;
      return null;
    }
    function s(m, b) {
      for (m = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? m.set(b.key, b) : m.set(b.index, b), b = b.sibling;
      return m;
    }
    function o(m, b) {
      return m = gr(m, b), m.index = 0, m.sibling = null, m;
    }
    function n(m, b, v) {
      return m.index = v, r ? (v = m.alternate, v !== null ? (v = v.index, v < b ? (m.flags |= 2, b) : v) : (m.flags |= 2, b)) : (m.flags |= 1048576, b);
    }
    function c(m) {
      return r && m.alternate === null && (m.flags |= 2), m;
    }
    function d(m, b, v, z) {
      return b === null || b.tag !== 6 ? (b = va(v, m.mode, z), b.return = m, b) : (b = o(b, v), b.return = m, b);
    }
    function p(m, b, v, z) {
      var F = v.type;
      return F === _n ? y(m, b, v.props.children, z, v.key) : b !== null && (b.elementType === F || typeof F == "object" && F !== null && F.$$typeof === w_ && Jc(F) === b.type) ? (z = o(b, v.props), z.ref = Mn(m, b, v), z.return = m, z) : (z = ss(v.type, v.key, v.props, null, m.mode, z), z.ref = Mn(m, b, v), z.return = m, z);
    }
    function l(m, b, v, z) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== v.containerInfo || b.stateNode.implementation !== v.implementation ? (b = ka(v, m.mode, z), b.return = m, b) : (b = o(b, v.children || []), b.return = m, b);
    }
    function y(m, b, v, z, F) {
      return b === null || b.tag !== 7 ? (b = Qr(v, m.mode, z, F), b.return = m, b) : (b = o(b, v), b.return = m, b);
    }
    function x(m, b, v) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = va("" + b, m.mode, v), b.return = m, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case No:
            return v = ss(b.type, b.key, b.props, null, m.mode, v), v.ref = Mn(m, null, b), v.return = m, v;
          case en:
            return b = ka(b, m.mode, v), b.return = m, b;
          case w_:
            var z = b._init;
            return x(m, z(b._payload), v);
        }
        if (Bn(b) || Rn(b)) return b = Qr(b, m.mode, v, null), b.return = m, b;
        Qo(m, b);
      }
      return null;
    }
    function k(m, b, v, z) {
      var F = b !== null ? b.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return F !== null ? null : d(m, b, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case No:
            return v.key === F ? p(m, b, v, z) : null;
          case en:
            return v.key === F ? l(m, b, v, z) : null;
          case w_:
            return F = v._init, k(m, b, F(v._payload), z);
        }
        if (Bn(v) || Rn(v)) return F !== null ? null : y(m, b, v, z, null);
        Qo(m, v);
      }
      return null;
    }
    function N(m, b, v, z, F) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return m = m.get(v) || null, d(b, m, "" + z, F);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case No:
            return m = m.get(z.key === null ? v : z.key) || null, p(b, m, z, F);
          case en:
            return m = m.get(z.key === null ? v : z.key) || null, l(b, m, z, F);
          case w_:
            var P = z._init;
            return N(m, b, v, P(z._payload), F);
        }
        if (Bn(z) || Rn(z)) return m = m.get(v) || null, y(b, m, z, F, null);
        Qo(b, z);
      }
      return null;
    }
    function C(m, b, v, z) {
      for (var F = null, P = null, $ = b, D = b = 0, q = null; $ !== null && D < v.length; D++) {
        $.index > D ? (q = $, $ = null) : q = $.sibling;
        var I = k(m, $, v[D], z);
        if (I === null) {
          $ === null && ($ = q);
          break;
        }
        r && $ && I.alternate === null && t(m, $), b = n(I, b, D), P === null ? F = I : P.sibling = I, P = I, $ = q;
      }
      if (D === v.length) return e(m, $), ot && xr(m, D), F;
      if ($ === null) {
        for (; D < v.length; D++) $ = x(m, v[D], z), $ !== null && (b = n($, b, D), P === null ? F = $ : P.sibling = $, P = $);
        return ot && xr(m, D), F;
      }
      for ($ = s(m, $); D < v.length; D++) q = N($, m, D, v[D], z), q !== null && (r && q.alternate !== null && $.delete(q.key === null ? D : q.key), b = n(q, b, D), P === null ? F = q : P.sibling = q, P = q);
      return r && $.forEach(function(ct) {
        return t(m, ct);
      }), ot && xr(m, D), F;
    }
    function S(m, b, v, z) {
      var F = Rn(v);
      if (typeof F != "function") throw Error(O(150));
      if (v = F.call(v), v == null) throw Error(O(151));
      for (var P = F = null, $ = b, D = b = 0, q = null, I = v.next(); $ !== null && !I.done; D++, I = v.next()) {
        $.index > D ? (q = $, $ = null) : q = $.sibling;
        var ct = k(m, $, I.value, z);
        if (ct === null) {
          $ === null && ($ = q);
          break;
        }
        r && $ && ct.alternate === null && t(m, $), b = n(ct, b, D), P === null ? F = ct : P.sibling = ct, P = ct, $ = q;
      }
      if (I.done) return e(m, $), ot && xr(m, D), F;
      if ($ === null) {
        for (; !I.done; D++, I = v.next()) I = x(m, I.value, z), I !== null && (b = n(I, b, D), P === null ? F = I : P.sibling = I, P = I);
        return ot && xr(m, D), F;
      }
      for ($ = s(m, $); !I.done; D++, I = v.next()) I = N($, m, D, I.value, z), I !== null && (r && I.alternate !== null && $.delete(I.key === null ? D : I.key), b = n(I, b, D), P === null ? F = I : P.sibling = I, P = I);
      return r && $.forEach(function($t) {
        return t(m, $t);
      }), ot && xr(m, D), F;
    }
    function H(m, b, v, z) {
      if (typeof v == "object" && v !== null && v.type === _n && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case No:
            t: {
              for (var F = v.key, P = b; P !== null; ) {
                if (P.key === F) {
                  if (F = v.type, F === _n) {
                    if (P.tag === 7) {
                      e(m, P.sibling), b = o(P, v.props.children), b.return = m, m = b;
                      break t;
                    }
                  } else if (P.elementType === F || typeof F == "object" && F !== null && F.$$typeof === w_ && Jc(F) === P.type) {
                    e(m, P.sibling), b = o(P, v.props), b.ref = Mn(m, P, v), b.return = m, m = b;
                    break t;
                  }
                  e(m, P);
                  break;
                } else t(m, P);
                P = P.sibling;
              }
              v.type === _n ? (b = Qr(v.props.children, m.mode, z, v.key), b.return = m, m = b) : (z = ss(v.type, v.key, v.props, null, m.mode, z), z.ref = Mn(m, b, v), z.return = m, m = z);
            }
            return c(m);
          case en:
            t: {
              for (P = v.key; b !== null; ) {
                if (b.key === P) if (b.tag === 4 && b.stateNode.containerInfo === v.containerInfo && b.stateNode.implementation === v.implementation) {
                  e(m, b.sibling), b = o(b, v.children || []), b.return = m, m = b;
                  break t;
                } else {
                  e(m, b);
                  break;
                }
                else t(m, b);
                b = b.sibling;
              }
              b = ka(v, m.mode, z), b.return = m, m = b;
            }
            return c(m);
          case w_:
            return P = v._init, H(m, b, P(v._payload), z);
        }
        if (Bn(v)) return C(m, b, v, z);
        if (Rn(v)) return S(m, b, v, z);
        Qo(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, b !== null && b.tag === 6 ? (e(m, b.sibling), b = o(b, v), b.return = m, m = b) : (e(m, b), b = va(v, m.mode, z), b.return = m, m = b), c(m)) : e(m, b);
    }
    return H;
  }
  var En = Ul(true), Ml = Ul(false), vs = mr(null), ks = null, ln = null, Ui = null;
  function Mi() {
    Ui = ln = ks = null;
  }
  function Wi(r) {
    var t = vs.current;
    nt(vs), r._currentValue = t;
  }
  function Ja(r, t, e) {
    for (; r !== null; ) {
      var s = r.alternate;
      if ((r.childLanes & t) !== t ? (r.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), r === e) break;
      r = r.return;
    }
  }
  function yn(r, t) {
    ks = r, Ui = ln = null, r = r.dependencies, r !== null && r.firstContext !== null && (r.lanes & t && (Kt = true), r.firstContext = null);
  }
  function fe(r) {
    var t = r._currentValue;
    if (Ui !== r) if (r = {
      context: r,
      memoizedValue: t,
      next: null
    }, ln === null) {
      if (ks === null) throw Error(O(308));
      ln = r, ks.dependencies = {
        lanes: 0,
        firstContext: r
      };
    } else ln = ln.next = r;
    return t;
  }
  var Or = null;
  function Qi(r) {
    Or === null ? Or = [
      r
    ] : Or.push(r);
  }
  function Wl(r, t, e, s) {
    var o = t.interleaved;
    return o === null ? (e.next = e, Qi(t)) : (e.next = o.next, o.next = e), t.interleaved = e, i_(r, s);
  }
  function i_(r, t) {
    r.lanes |= t;
    var e = r.alternate;
    for (e !== null && (e.lanes |= t), e = r, r = r.return; r !== null; ) r.childLanes |= t, e = r.alternate, e !== null && (e.childLanes |= t), e = r, r = r.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var f_ = false;
  function Vi(r) {
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
  function Ql(r, t) {
    r = r.updateQueue, t.updateQueue === r && (t.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects
    });
  }
  function o_(r, t) {
    return {
      eventTime: r,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ur(r, t, e) {
    var s = r.updateQueue;
    if (s === null) return null;
    if (s = s.shared, X & 2) {
      var o = s.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), s.pending = t, i_(r, e);
    }
    return o = s.interleaved, o === null ? (t.next = t, Qi(s)) : (t.next = o.next, o.next = t), s.interleaved = t, i_(r, e);
  }
  function ts(r, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194240) !== 0)) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Ci(r, e);
    }
  }
  function Gc(r, t) {
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
    f_ = false;
    var n = o.firstBaseUpdate, c = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var p = d, l = p.next;
      p.next = null, c === null ? n = l : c.next = l, c = p;
      var y = r.alternate;
      y !== null && (y = y.updateQueue, d = y.lastBaseUpdate, d !== c && (d === null ? y.firstBaseUpdate = l : d.next = l, y.lastBaseUpdate = p));
    }
    if (n !== null) {
      var x = o.baseState;
      c = 0, y = l = p = null, d = n;
      do {
        var k = d.lane, N = d.eventTime;
        if ((s & k) === k) {
          y !== null && (y = y.next = {
            eventTime: N,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          t: {
            var C = r, S = d;
            switch (k = t, N = e, S.tag) {
              case 1:
                if (C = S.payload, typeof C == "function") {
                  x = C.call(N, x, k);
                  break t;
                }
                x = C;
                break t;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = S.payload, k = typeof C == "function" ? C.call(N, x, k) : C, k == null) break t;
                x = it({}, x, k);
                break t;
              case 2:
                f_ = true;
            }
          }
          d.callback !== null && d.lane !== 0 && (r.flags |= 64, k = o.effects, k === null ? o.effects = [
            d
          ] : k.push(d));
        } else N = {
          eventTime: N,
          lane: k,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null
        }, y === null ? (l = y = N, p = x) : y = y.next = N, c |= k;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null) break;
          k = d, d = k.next, k.next = null, o.lastBaseUpdate = k, o.shared.pending = null;
        }
      } while (true);
      if (y === null && (p = x), o.baseState = p, o.firstBaseUpdate = l, o.lastBaseUpdate = y, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          c |= o.lane, o = o.next;
        while (o !== t);
      } else n === null && (o.shared.lanes = 0);
      Hr |= c, r.lanes = c, r.memoizedState = x;
    }
  }
  function td(r, t, e) {
    if (r = t.effects, t.effects = null, r !== null) for (t = 0; t < r.length; t++) {
      var s = r[t], o = s.callback;
      if (o !== null) {
        if (s.callback = null, s = e, typeof o != "function") throw Error(O(191, o));
        o.call(s);
      }
    }
  }
  var Co = {}, Ue = mr(Co), bo = mr(Co), ho = mr(Co);
  function Lr(r) {
    if (r === Co) throw Error(O(174));
    return r;
  }
  function Bi(r, t) {
    switch (tt(ho, t), tt(bo, r), tt(Ue, Co), r = t.nodeType, r) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fa(null, "");
        break;
      default:
        r = r === 8 ? t.parentNode : t, t = r.namespaceURI || null, r = r.tagName, t = Fa(t, r);
    }
    nt(Ue), tt(Ue, t);
  }
  function zn() {
    nt(Ue), nt(bo), nt(ho);
  }
  function Vl(r) {
    Lr(ho.current);
    var t = Lr(Ue.current), e = Fa(t, r.type);
    t !== e && (tt(bo, r), tt(Ue, e));
  }
  function Ai(r) {
    bo.current === r && (nt(Ue), nt(bo));
  }
  var st = mr(0);
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
  var fa = [];
  function Hi() {
    for (var r = 0; r < fa.length; r++) fa[r]._workInProgressVersionPrimary = null;
    fa.length = 0;
  }
  var es = d_.ReactCurrentDispatcher, ga = d_.ReactCurrentBatchConfig, Ar = 0, at = null, gt = null, vt = null, Ss = false, Jn = false, yo = 0, Uw = 0;
  function Lt() {
    throw Error(O(321));
  }
  function qi(r, t) {
    if (t === null) return false;
    for (var e = 0; e < t.length && e < r.length; e++) if (!ze(r[e], t[e])) return false;
    return true;
  }
  function Yi(r, t, e, s, o, n) {
    if (Ar = n, at = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, es.current = r === null || r.memoizedState === null ? Vw : Bw, r = e(s, o), Jn) {
      n = 0;
      do {
        if (Jn = false, yo = 0, 25 <= n) throw Error(O(301));
        n += 1, vt = gt = null, t.updateQueue = null, es.current = Aw, r = e(s, o);
      } while (Jn);
    }
    if (es.current = Es, t = gt !== null && gt.next !== null, Ar = 0, vt = gt = at = null, Ss = false, t) throw Error(O(300));
    return r;
  }
  function Xi() {
    var r = yo !== 0;
    return yo = 0, r;
  }
  function Oe() {
    var r = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? at.memoizedState = vt = r : vt = vt.next = r, vt;
  }
  function ge() {
    if (gt === null) {
      var r = at.alternate;
      r = r !== null ? r.memoizedState : null;
    } else r = gt.next;
    var t = vt === null ? at.memoizedState : vt.next;
    if (t !== null) vt = t, gt = r;
    else {
      if (r === null) throw Error(O(310));
      gt = r, r = {
        memoizedState: gt.memoizedState,
        baseState: gt.baseState,
        baseQueue: gt.baseQueue,
        queue: gt.queue,
        next: null
      }, vt === null ? at.memoizedState = vt = r : vt = vt.next = r;
    }
    return vt;
  }
  function mo(r, t) {
    return typeof t == "function" ? t(r) : t;
  }
  function ba(r) {
    var t = ge(), e = t.queue;
    if (e === null) throw Error(O(311));
    e.lastRenderedReducer = r;
    var s = gt, o = s.baseQueue, n = e.pending;
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
        var y = l.lane;
        if ((Ar & y) === y) p !== null && (p = p.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), s = l.hasEagerState ? l.eagerState : r(s, l.action);
        else {
          var x = {
            lane: y,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          p === null ? (d = p = x, c = s) : p = p.next = x, at.lanes |= y, Hr |= y;
        }
        l = l.next;
      } while (l !== null && l !== n);
      p === null ? c = s : p.next = d, ze(s, t.memoizedState) || (Kt = true), t.memoizedState = s, t.baseState = c, t.baseQueue = p, e.lastRenderedState = s;
    }
    if (r = e.interleaved, r !== null) {
      o = r;
      do
        n = o.lane, at.lanes |= n, Hr |= n, o = o.next;
      while (o !== r);
    } else o === null && (e.lanes = 0);
    return [
      t.memoizedState,
      e.dispatch
    ];
  }
  function ha(r) {
    var t = ge(), e = t.queue;
    if (e === null) throw Error(O(311));
    e.lastRenderedReducer = r;
    var s = e.dispatch, o = e.pending, n = t.memoizedState;
    if (o !== null) {
      e.pending = null;
      var c = o = o.next;
      do
        n = r(n, c.action), c = c.next;
      while (c !== o);
      ze(n, t.memoizedState) || (Kt = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [
      n,
      s
    ];
  }
  function Bl() {
  }
  function Al(r, t) {
    var e = at, s = ge(), o = t(), n = !ze(s.memoizedState, o);
    if (n && (s.memoizedState = o, Kt = true), s = s.queue, Ki(Yl.bind(null, e, s, r), [
      r
    ]), s.getSnapshot !== t || n || vt !== null && vt.memoizedState.tag & 1) {
      if (e.flags |= 2048, vo(9, ql.bind(null, e, s, o, t), void 0, null), xt === null) throw Error(O(349));
      Ar & 30 || Hl(e, t, o);
    }
    return o;
  }
  function Hl(r, t, e) {
    r.flags |= 16384, r = {
      getSnapshot: t,
      value: e
    }, t = at.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, at.updateQueue = t, t.stores = [
      r
    ]) : (e = t.stores, e === null ? t.stores = [
      r
    ] : e.push(r));
  }
  function ql(r, t, e, s) {
    t.value = e, t.getSnapshot = s, Xl(t) && Kl(r);
  }
  function Yl(r, t, e) {
    return e(function() {
      Xl(t) && Kl(r);
    });
  }
  function Xl(r) {
    var t = r.getSnapshot;
    r = r.value;
    try {
      var e = t();
      return !ze(r, e);
    } catch {
      return true;
    }
  }
  function Kl(r) {
    var t = i_(r, 1);
    t !== null && Ee(t, r, 1, -1);
  }
  function ed(r) {
    var t = Oe();
    return typeof r == "function" && (r = r()), t.memoizedState = t.baseState = r, r = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: r
    }, t.queue = r, r = r.dispatch = Qw.bind(null, at, r), [
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
    }, t = at.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, at.updateQueue = t, t.lastEffect = r.next = r) : (e = t.lastEffect, e === null ? t.lastEffect = r.next = r : (s = e.next, e.next = r, r.next = s, t.lastEffect = r)), r;
  }
  function Zl() {
    return ge().memoizedState;
  }
  function _s(r, t, e, s) {
    var o = Oe();
    at.flags |= r, o.memoizedState = vo(1 | t, e, void 0, s === void 0 ? null : s);
  }
  function Us(r, t, e, s) {
    var o = ge();
    s = s === void 0 ? null : s;
    var n = void 0;
    if (gt !== null) {
      var c = gt.memoizedState;
      if (n = c.destroy, s !== null && qi(s, c.deps)) {
        o.memoizedState = vo(t, e, n, s);
        return;
      }
    }
    at.flags |= r, o.memoizedState = vo(1 | t, e, n, s);
  }
  function _d(r, t) {
    return _s(8390656, 8, r, t);
  }
  function Ki(r, t) {
    return Us(2048, 8, r, t);
  }
  function Jl(r, t) {
    return Us(4, 2, r, t);
  }
  function Gl(r, t) {
    return Us(4, 4, r, t);
  }
  function tp(r, t) {
    if (typeof t == "function") return r = r(), t(r), function() {
      t(null);
    };
    if (t != null) return r = r(), t.current = r, function() {
      t.current = null;
    };
  }
  function ep(r, t, e) {
    return e = e != null ? e.concat([
      r
    ]) : null, Us(4, 4, tp.bind(null, t, r), e);
  }
  function Zi() {
  }
  function _p(r, t) {
    var e = ge();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && qi(t, s[1]) ? s[0] : (e.memoizedState = [
      r,
      t
    ], r);
  }
  function rp(r, t) {
    var e = ge();
    t = t === void 0 ? null : t;
    var s = e.memoizedState;
    return s !== null && t !== null && qi(t, s[1]) ? s[0] : (r = r(), e.memoizedState = [
      r,
      t
    ], r);
  }
  function np(r, t, e) {
    return Ar & 21 ? (ze(e, t) || (e = cl(), at.lanes |= e, Hr |= e, r.baseState = true), t) : (r.baseState && (r.baseState = false, Kt = true), r.memoizedState = e);
  }
  function Mw(r, t) {
    var e = J;
    J = e !== 0 && 4 > e ? e : 4, r(true);
    var s = ga.transition;
    ga.transition = {};
    try {
      r(false), t();
    } finally {
      J = e, ga.transition = s;
    }
  }
  function op() {
    return ge().memoizedState;
  }
  function Ww(r, t, e) {
    var s = fr(r);
    if (e = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, sp(r)) ap(t, e);
    else if (e = Wl(r, t, e, s), e !== null) {
      var o = Wt();
      Ee(e, r, s, o), ip(e, t, s);
    }
  }
  function Qw(r, t, e) {
    var s = fr(r), o = {
      lane: s,
      action: e,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (sp(r)) ap(t, o);
    else {
      var n = r.alternate;
      if (r.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var c = t.lastRenderedState, d = n(c, e);
        if (o.hasEagerState = true, o.eagerState = d, ze(d, c)) {
          var p = t.interleaved;
          p === null ? (o.next = o, Qi(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      e = Wl(r, t, o, s), e !== null && (o = Wt(), Ee(e, r, s, o), ip(e, t, s));
    }
  }
  function sp(r) {
    var t = r.alternate;
    return r === at || t !== null && t === at;
  }
  function ap(r, t) {
    Jn = Ss = true;
    var e = r.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), r.pending = t;
  }
  function ip(r, t, e) {
    if (e & 4194240) {
      var s = t.lanes;
      s &= r.pendingLanes, e |= s, t.lanes = e, Ci(r, e);
    }
  }
  var Es = {
    readContext: fe,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useInsertionEffect: Lt,
    useLayoutEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useMutableSource: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    unstable_isNewReconciler: false
  }, Vw = {
    readContext: fe,
    useCallback: function(r, t) {
      return Oe().memoizedState = [
        r,
        t === void 0 ? null : t
      ], r;
    },
    useContext: fe,
    useEffect: _d,
    useImperativeHandle: function(r, t, e) {
      return e = e != null ? e.concat([
        r
      ]) : null, _s(4194308, 4, tp.bind(null, t, r), e);
    },
    useLayoutEffect: function(r, t) {
      return _s(4194308, 4, r, t);
    },
    useInsertionEffect: function(r, t) {
      return _s(4, 2, r, t);
    },
    useMemo: function(r, t) {
      var e = Oe();
      return t = t === void 0 ? null : t, r = r(), e.memoizedState = [
        r,
        t
      ], r;
    },
    useReducer: function(r, t, e) {
      var s = Oe();
      return t = e !== void 0 ? e(t) : t, s.memoizedState = s.baseState = t, r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: t
      }, s.queue = r, r = r.dispatch = Ww.bind(null, at, r), [
        s.memoizedState,
        r
      ];
    },
    useRef: function(r) {
      var t = Oe();
      return r = {
        current: r
      }, t.memoizedState = r;
    },
    useState: ed,
    useDebugValue: Zi,
    useDeferredValue: function(r) {
      return Oe().memoizedState = r;
    },
    useTransition: function() {
      var r = ed(false), t = r[0];
      return r = Mw.bind(null, r[1]), Oe().memoizedState = r, [
        t,
        r
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(r, t, e) {
      var s = at, o = Oe();
      if (ot) {
        if (e === void 0) throw Error(O(407));
        e = e();
      } else {
        if (e = t(), xt === null) throw Error(O(349));
        Ar & 30 || Hl(s, t, e);
      }
      o.memoizedState = e;
      var n = {
        value: e,
        getSnapshot: t
      };
      return o.queue = n, _d(Yl.bind(null, s, n, r), [
        r
      ]), s.flags |= 2048, vo(9, ql.bind(null, s, n, e, t), void 0, null), e;
    },
    useId: function() {
      var r = Oe(), t = xt.identifierPrefix;
      if (ot) {
        var e = r_, s = __;
        e = (s & ~(1 << 32 - Se(s) - 1)).toString(32) + e, t = ":" + t + "R" + e, e = yo++, 0 < e && (t += "H" + e.toString(32)), t += ":";
      } else e = Uw++, t = ":" + t + "r" + e.toString(32) + ":";
      return r.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Bw = {
    readContext: fe,
    useCallback: _p,
    useContext: fe,
    useEffect: Ki,
    useImperativeHandle: ep,
    useInsertionEffect: Jl,
    useLayoutEffect: Gl,
    useMemo: rp,
    useReducer: ba,
    useRef: Zl,
    useState: function() {
      return ba(mo);
    },
    useDebugValue: Zi,
    useDeferredValue: function(r) {
      var t = ge();
      return np(t, gt.memoizedState, r);
    },
    useTransition: function() {
      var r = ba(mo)[0], t = ge().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Bl,
    useSyncExternalStore: Al,
    useId: op,
    unstable_isNewReconciler: false
  }, Aw = {
    readContext: fe,
    useCallback: _p,
    useContext: fe,
    useEffect: Ki,
    useImperativeHandle: ep,
    useInsertionEffect: Jl,
    useLayoutEffect: Gl,
    useMemo: rp,
    useReducer: ha,
    useRef: Zl,
    useState: function() {
      return ha(mo);
    },
    useDebugValue: Zi,
    useDeferredValue: function(r) {
      var t = ge();
      return gt === null ? t.memoizedState = r : np(t, gt.memoizedState, r);
    },
    useTransition: function() {
      var r = ha(mo)[0], t = ge().memoizedState;
      return [
        r,
        t
      ];
    },
    useMutableSource: Bl,
    useSyncExternalStore: Al,
    useId: op,
    unstable_isNewReconciler: false
  };
  function me(r, t) {
    if (r && r.defaultProps) {
      t = it({}, t), r = r.defaultProps;
      for (var e in r) t[e] === void 0 && (t[e] = r[e]);
      return t;
    }
    return t;
  }
  function Ga(r, t, e, s) {
    t = r.memoizedState, e = e(s, t), e = e == null ? t : it({}, t, e), r.memoizedState = e, r.lanes === 0 && (r.updateQueue.baseState = e);
  }
  var Ms = {
    isMounted: function(r) {
      return (r = r._reactInternals) ? Xr(r) === r : false;
    },
    enqueueSetState: function(r, t, e) {
      r = r._reactInternals;
      var s = Wt(), o = fr(r), n = o_(s, o);
      n.payload = t, e != null && (n.callback = e), t = ur(r, n, o), t !== null && (Ee(t, r, o, s), ts(t, r, o));
    },
    enqueueReplaceState: function(r, t, e) {
      r = r._reactInternals;
      var s = Wt(), o = fr(r), n = o_(s, o);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ur(r, n, o), t !== null && (Ee(t, r, o, s), ts(t, r, o));
    },
    enqueueForceUpdate: function(r, t) {
      r = r._reactInternals;
      var e = Wt(), s = fr(r), o = o_(e, s);
      o.tag = 2, t != null && (o.callback = t), t = ur(r, o, s), t !== null && (Ee(t, r, s, e), ts(t, r, s));
    }
  };
  function rd(r, t, e, s, o, n, c) {
    return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, n, c) : t.prototype && t.prototype.isPureReactComponent ? !uo(e, s) || !uo(o, n) : true;
  }
  function cp(r, t, e) {
    var s = false, o = hr, n = t.contextType;
    return typeof n == "object" && n !== null ? n = fe(n) : (o = Jt(t) ? Vr : Rt.current, s = t.contextTypes, n = (s = s != null) ? jn(r, o) : hr), t = new t(e, n), r.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, r.stateNode = t, t._reactInternals = r, s && (r = r.stateNode, r.__reactInternalMemoizedUnmaskedChildContext = o, r.__reactInternalMemoizedMaskedChildContext = n), t;
  }
  function nd(r, t, e, s) {
    r = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, s), t.state !== r && Ms.enqueueReplaceState(t, t.state, null);
  }
  function ti(r, t, e, s) {
    var o = r.stateNode;
    o.props = e, o.state = r.memoizedState, o.refs = {}, Vi(r);
    var n = t.contextType;
    typeof n == "object" && n !== null ? o.context = fe(n) : (n = Jt(t) ? Vr : Rt.current, o.context = jn(r, n)), o.state = r.memoizedState, n = t.getDerivedStateFromProps, typeof n == "function" && (Ga(r, t, n, e), o.state = r.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ms.enqueueReplaceState(o, o.state, null), xs(r, e, o, s), o.state = r.memoizedState), typeof o.componentDidMount == "function" && (r.flags |= 4194308);
  }
  function Cn(r, t) {
    try {
      var e = "", s = t;
      do
        e += yu(s), s = s.return;
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
  function ya(r, t, e) {
    return {
      value: r,
      source: null,
      stack: e ?? null,
      digest: t ?? null
    };
  }
  function ei(r, t) {
    try {
      console.error(t.value);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  var Hw = typeof WeakMap == "function" ? WeakMap : Map;
  function dp(r, t, e) {
    e = o_(-1, e), e.tag = 3, e.payload = {
      element: null
    };
    var s = t.value;
    return e.callback = function() {
      Cs || (Cs = true, li = s), ei(r, t);
    }, e;
  }
  function lp(r, t, e) {
    e = o_(-1, e), e.tag = 3;
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = t.value;
      e.payload = function() {
        return s(o);
      }, e.callback = function() {
        ei(r, t);
      };
    }
    var n = r.stateNode;
    return n !== null && typeof n.componentDidCatch == "function" && (e.callback = function() {
      ei(r, t), typeof s != "function" && (wr === null ? wr = /* @__PURE__ */ new Set([
        this
      ]) : wr.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    }), e;
  }
  function od(r, t, e) {
    var s = r.pingCache;
    if (s === null) {
      s = r.pingCache = new Hw();
      var o = /* @__PURE__ */ new Set();
      s.set(t, o);
    } else o = s.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), s.set(t, o));
    o.has(e) || (o.add(e), r = sf.bind(null, r, t, e), t.then(r, r));
  }
  function sd(r) {
    do {
      var t;
      if ((t = r.tag === 13) && (t = r.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return r;
      r = r.return;
    } while (r !== null);
    return null;
  }
  function ad(r, t, e, s, o) {
    return r.mode & 1 ? (r.flags |= 65536, r.lanes = o, r) : (r === t ? r.flags |= 65536 : (r.flags |= 128, e.flags |= 131072, e.flags &= -52805, e.tag === 1 && (e.alternate === null ? e.tag = 17 : (t = o_(-1, 1), t.tag = 2, ur(e, t, 1))), e.lanes |= 1), r);
  }
  var qw = d_.ReactCurrentOwner, Kt = false;
  function It(r, t, e, s) {
    t.child = r === null ? Ml(t, null, e, s) : En(t, r.child, e, s);
  }
  function id(r, t, e, s, o) {
    e = e.render;
    var n = t.ref;
    return yn(t, o), s = Yi(r, t, e, s, n, o), e = Xi(), r !== null && !Kt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, c_(r, t, o)) : (ot && e && $i(t), t.flags |= 1, It(r, t, s, o), t.child);
  }
  function cd(r, t, e, s, o) {
    if (r === null) {
      var n = e.type;
      return typeof n == "function" && !oc(n) && n.defaultProps === void 0 && e.compare === null && e.defaultProps === void 0 ? (t.tag = 15, t.type = n, pp(r, t, n, s, o)) : (r = ss(e.type, null, s, t, t.mode, o), r.ref = t.ref, r.return = t, t.child = r);
    }
    if (n = r.child, !(r.lanes & o)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : uo, e(c, s) && r.ref === t.ref) return c_(r, t, o);
    }
    return t.flags |= 1, r = gr(n, s), r.ref = t.ref, r.return = t, t.child = r;
  }
  function pp(r, t, e, s, o) {
    if (r !== null) {
      var n = r.memoizedProps;
      if (uo(n, s) && r.ref === t.ref) if (Kt = false, t.pendingProps = s = n, (r.lanes & o) !== 0) r.flags & 131072 && (Kt = true);
      else return t.lanes = r.lanes, c_(r, t, o);
    }
    return _i(r, t, e, s, o);
  }
  function up(r, t, e) {
    var s = t.pendingProps, o = s.children, n = r !== null ? r.memoizedState : null;
    if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, tt(un, te), te |= e;
    else {
      if (!(e & 1073741824)) return r = n !== null ? n.baseLanes | e : e, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: r,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, tt(un, te), te |= r, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, s = n !== null ? n.baseLanes : e, tt(un, te), te |= s;
    }
    else n !== null ? (s = n.baseLanes | e, t.memoizedState = null) : s = e, tt(un, te), te |= s;
    return It(r, t, o, e), t.child;
  }
  function wp(r, t) {
    var e = t.ref;
    (r === null && e !== null || r !== null && r.ref !== e) && (t.flags |= 512, t.flags |= 2097152);
  }
  function _i(r, t, e, s, o) {
    var n = Jt(e) ? Vr : Rt.current;
    return n = jn(t, n), yn(t, o), e = Yi(r, t, e, s, n, o), s = Xi(), r !== null && !Kt ? (t.updateQueue = r.updateQueue, t.flags &= -2053, r.lanes &= ~o, c_(r, t, o)) : (ot && s && $i(t), t.flags |= 1, It(r, t, e, o), t.child);
  }
  function dd(r, t, e, s, o) {
    if (Jt(e)) {
      var n = true;
      hs(t);
    } else n = false;
    if (yn(t, o), t.stateNode === null) rs(r, t), cp(t, e, s), ti(t, e, s, o), s = true;
    else if (r === null) {
      var c = t.stateNode, d = t.memoizedProps;
      c.props = d;
      var p = c.context, l = e.contextType;
      typeof l == "object" && l !== null ? l = fe(l) : (l = Jt(e) ? Vr : Rt.current, l = jn(t, l));
      var y = e.getDerivedStateFromProps, x = typeof y == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      x || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== s || p !== l) && nd(t, c, s, l), f_ = false;
      var k = t.memoizedState;
      c.state = k, xs(t, s, c, o), p = t.memoizedState, d !== s || k !== p || Zt.current || f_ ? (typeof y == "function" && (Ga(t, e, y, s), p = t.memoizedState), (d = f_ || rd(t, e, d, s, k, p, l)) ? (x || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = p), c.props = s, c.state = p, c.context = l, s = d) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), s = false);
    } else {
      c = t.stateNode, Ql(r, t), d = t.memoizedProps, l = t.type === t.elementType ? d : me(t.type, d), c.props = l, x = t.pendingProps, k = c.context, p = e.contextType, typeof p == "object" && p !== null ? p = fe(p) : (p = Jt(e) ? Vr : Rt.current, p = jn(t, p));
      var N = e.getDerivedStateFromProps;
      (y = typeof N == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (d !== x || k !== p) && nd(t, c, s, p), f_ = false, k = t.memoizedState, c.state = k, xs(t, s, c, o);
      var C = t.memoizedState;
      d !== x || k !== C || Zt.current || f_ ? (typeof N == "function" && (Ga(t, e, N, s), C = t.memoizedState), (l = f_ || rd(t, e, l, s, k, C, p) || false) ? (y || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(s, C, p), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(s, C, p)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = C), c.props = s, c.state = C, c.context = p, s = l) : (typeof c.componentDidUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || d === r.memoizedProps && k === r.memoizedState || (t.flags |= 1024), s = false);
    }
    return ri(r, t, e, s, n, o);
  }
  function ri(r, t, e, s, o, n) {
    wp(r, t);
    var c = (t.flags & 128) !== 0;
    if (!s && !c) return o && Xc(t, e, false), c_(r, t, n);
    s = t.stateNode, qw.current = t;
    var d = c && typeof e.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, r !== null && c ? (t.child = En(t, r.child, null, n), t.child = En(t, null, d, n)) : It(r, t, d, n), t.memoizedState = s.state, o && Xc(t, e, true), t.child;
  }
  function fp(r) {
    var t = r.stateNode;
    t.pendingContext ? Yc(r, t.pendingContext, t.pendingContext !== t.context) : t.context && Yc(r, t.context, false), Bi(r, t.containerInfo);
  }
  function ld(r, t, e, s, o) {
    return Sn(), Ii(o), t.flags |= 256, It(r, t, e, s), t.child;
  }
  var ni = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function oi(r) {
    return {
      baseLanes: r,
      cachePool: null,
      transitions: null
    };
  }
  function gp(r, t, e) {
    var s = t.pendingProps, o = st.current, n = false, c = (t.flags & 128) !== 0, d;
    if ((d = c) || (d = r !== null && r.memoizedState === null ? false : (o & 2) !== 0), d ? (n = true, t.flags &= -129) : (r === null || r.memoizedState !== null) && (o |= 1), tt(st, o & 1), r === null) return Za(t), r = t.memoizedState, r !== null && (r = r.dehydrated, r !== null) ? (t.mode & 1 ? r.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = s.children, r = s.fallback, n ? (s = t.mode, n = t.child, c = {
      mode: "hidden",
      children: c
    }, !(s & 1) && n !== null ? (n.childLanes = 0, n.pendingProps = c) : n = Vs(c, s, 0, null), r = Qr(r, s, e, null), n.return = t, r.return = t, n.sibling = r, t.child = n, t.child.memoizedState = oi(e), t.memoizedState = ni, r) : Ji(t, c));
    if (o = r.memoizedState, o !== null && (d = o.dehydrated, d !== null)) return Yw(r, t, c, s, d, o, e);
    if (n) {
      n = s.fallback, c = t.mode, o = r.child, d = o.sibling;
      var p = {
        mode: "hidden",
        children: s.children
      };
      return !(c & 1) && t.child !== o ? (s = t.child, s.childLanes = 0, s.pendingProps = p, t.deletions = null) : (s = gr(o, p), s.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? n = gr(d, n) : (n = Qr(n, c, e, null), n.flags |= 2), n.return = t, s.return = t, s.sibling = n, t.child = s, s = n, n = t.child, c = r.child.memoizedState, c = c === null ? oi(e) : {
        baseLanes: c.baseLanes | e,
        cachePool: null,
        transitions: c.transitions
      }, n.memoizedState = c, n.childLanes = r.childLanes & ~e, t.memoizedState = ni, s;
    }
    return n = r.child, r = n.sibling, s = gr(n, {
      mode: "visible",
      children: s.children
    }), !(t.mode & 1) && (s.lanes = e), s.return = t, s.sibling = null, r !== null && (e = t.deletions, e === null ? (t.deletions = [
      r
    ], t.flags |= 16) : e.push(r)), t.child = s, t.memoizedState = null, s;
  }
  function Ji(r, t) {
    return t = Vs({
      mode: "visible",
      children: t
    }, r.mode, 0, null), t.return = r, r.child = t;
  }
  function Vo(r, t, e, s) {
    return s !== null && Ii(s), En(t, r.child, null, e), r = Ji(t, t.pendingProps.children), r.flags |= 2, t.memoizedState = null, r;
  }
  function Yw(r, t, e, s, o, n, c) {
    if (e) return t.flags & 256 ? (t.flags &= -257, s = ya(Error(O(422))), Vo(r, t, c, s)) : t.memoizedState !== null ? (t.child = r.child, t.flags |= 128, null) : (n = s.fallback, o = t.mode, s = Vs({
      mode: "visible",
      children: s.children
    }, o, 0, null), n = Qr(n, o, c, null), n.flags |= 2, s.return = t, n.return = t, s.sibling = n, t.child = s, t.mode & 1 && En(t, r.child, null, c), t.child.memoizedState = oi(c), t.memoizedState = ni, n);
    if (!(t.mode & 1)) return Vo(r, t, c, null);
    if (o.data === "$!") {
      if (s = o.nextSibling && o.nextSibling.dataset, s) var d = s.dgst;
      return s = d, n = Error(O(419)), s = ya(n, s, void 0), Vo(r, t, c, s);
    }
    if (d = (c & r.childLanes) !== 0, Kt || d) {
      if (s = xt, s !== null) {
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
        o = o & (s.suspendedLanes | c) ? 0 : o, o !== 0 && o !== n.retryLane && (n.retryLane = o, i_(r, o), Ee(s, r, o, -1));
      }
      return nc(), s = ya(Error(O(421))), Vo(r, t, c, s);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = r.child, t = af.bind(null, r), o._reactRetry = t, null) : (r = n.treeContext, _e = pr(o.nextSibling), re = t, ot = true, xe = null, r !== null && (ce[de++] = __, ce[de++] = r_, ce[de++] = Br, __ = r.id, r_ = r.overflow, Br = t), t = Ji(t, s.children), t.flags |= 4096, t);
  }
  function pd(r, t, e) {
    r.lanes |= t;
    var s = r.alternate;
    s !== null && (s.lanes |= t), Ja(r.return, t, e);
  }
  function ma(r, t, e, s, o) {
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
  function bp(r, t, e) {
    var s = t.pendingProps, o = s.revealOrder, n = s.tail;
    if (It(r, t, s.children, e), s = st.current, s & 2) s = s & 1 | 2, t.flags |= 128;
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
    if (tt(st, s), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (e = t.child, o = null; e !== null; ) r = e.alternate, r !== null && js(r) === null && (o = e), e = e.sibling;
        e = o, e === null ? (o = t.child, t.child = null) : (o = e.sibling, e.sibling = null), ma(t, false, o, e, n);
        break;
      case "backwards":
        for (e = null, o = t.child, t.child = null; o !== null; ) {
          if (r = o.alternate, r !== null && js(r) === null) {
            t.child = o;
            break;
          }
          r = o.sibling, o.sibling = e, e = o, o = r;
        }
        ma(t, true, e, null, n);
        break;
      case "together":
        ma(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function rs(r, t) {
    !(t.mode & 1) && r !== null && (r.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function c_(r, t, e) {
    if (r !== null && (t.dependencies = r.dependencies), Hr |= t.lanes, !(e & t.childLanes)) return null;
    if (r !== null && t.child !== r.child) throw Error(O(153));
    if (t.child !== null) {
      for (r = t.child, e = gr(r, r.pendingProps), t.child = e, e.return = t; r.sibling !== null; ) r = r.sibling, e = e.sibling = gr(r, r.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Xw(r, t, e) {
    switch (t.tag) {
      case 3:
        fp(t), Sn();
        break;
      case 5:
        Vl(t);
        break;
      case 1:
        Jt(t.type) && hs(t);
        break;
      case 4:
        Bi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, o = t.memoizedProps.value;
        tt(vs, s._currentValue), s._currentValue = o;
        break;
      case 13:
        if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (tt(st, st.current & 1), t.flags |= 128, null) : e & t.child.childLanes ? gp(r, t, e) : (tt(st, st.current & 1), r = c_(r, t, e), r !== null ? r.sibling : null);
        tt(st, st.current & 1);
        break;
      case 19:
        if (s = (e & t.childLanes) !== 0, r.flags & 128) {
          if (s) return bp(r, t, e);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), tt(st, st.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, up(r, t, e);
    }
    return c_(r, t, e);
  }
  var hp, si, yp, mp;
  hp = function(r, t) {
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
  si = function() {
  };
  yp = function(r, t, e, s) {
    var o = r.memoizedProps;
    if (o !== s) {
      r = t.stateNode, Lr(Ue.current);
      var n = null;
      switch (e) {
        case "input":
          o = Ca(r, o), s = Ca(r, s), n = [];
          break;
        case "select":
          o = it({}, o, {
            value: void 0
          }), s = it({}, s, {
            value: void 0
          }), n = [];
          break;
        case "textarea":
          o = Na(r, o), s = Na(r, s), n = [];
          break;
        default:
          typeof o.onClick != "function" && typeof s.onClick == "function" && (r.onclick = gs);
      }
      Ta(e, s);
      var c;
      e = null;
      for (l in o) if (!s.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null) if (l === "style") {
        var d = o[l];
        for (c in d) d.hasOwnProperty(c) && (e || (e = {}), e[c] = "");
      } else l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (oo.hasOwnProperty(l) ? n || (n = []) : (n = n || []).push(l, null));
      for (l in s) {
        var p = s[l];
        if (d = o == null ? void 0 : o[l], s.hasOwnProperty(l) && p !== d && (p != null || d != null)) if (l === "style") if (d) {
          for (c in d) !d.hasOwnProperty(c) || p && p.hasOwnProperty(c) || (e || (e = {}), e[c] = "");
          for (c in p) p.hasOwnProperty(c) && d[c] !== p[c] && (e || (e = {}), e[c] = p[c]);
        } else e || (n || (n = []), n.push(l, e)), e = p;
        else l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (n = n || []).push(l, p)) : l === "children" ? typeof p != "string" && typeof p != "number" || (n = n || []).push(l, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (oo.hasOwnProperty(l) ? (p != null && l === "onScroll" && et("scroll", r), n || d === p || (n = [])) : (n = n || []).push(l, p));
      }
      e && (n = n || []).push("style", e);
      var l = n;
      (t.updateQueue = l) && (t.flags |= 4);
    }
  };
  mp = function(r, t, e, s) {
    e !== s && (t.flags |= 4);
  };
  function Wn(r, t) {
    if (!ot) switch (r.tailMode) {
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
  function Nt(r) {
    var t = r.alternate !== null && r.alternate.child === r.child, e = 0, s = 0;
    if (t) for (var o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags & 14680064, s |= o.flags & 14680064, o.return = r, o = o.sibling;
    else for (o = r.child; o !== null; ) e |= o.lanes | o.childLanes, s |= o.subtreeFlags, s |= o.flags, o.return = r, o = o.sibling;
    return r.subtreeFlags |= s, r.childLanes = e, t;
  }
  function Kw(r, t, e) {
    var s = t.pendingProps;
    switch (Di(t), t.tag) {
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
        return Nt(t), null;
      case 1:
        return Jt(t.type) && bs(), Nt(t), null;
      case 3:
        return s = t.stateNode, zn(), nt(Zt), nt(Rt), Hi(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (r === null || r.child === null) && (Wo(t) ? t.flags |= 4 : r === null || r.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xe !== null && (wi(xe), xe = null))), si(r, t), Nt(t), null;
      case 5:
        Ai(t);
        var o = Lr(ho.current);
        if (e = t.type, r !== null && t.stateNode != null) yp(r, t, e, s, o), r.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(O(166));
            return Nt(t), null;
          }
          if (r = Lr(Ue.current), Wo(t)) {
            s = t.stateNode, e = t.type;
            var n = t.memoizedProps;
            switch (s[Te] = t, s[go] = n, r = (t.mode & 1) !== 0, e) {
              case "dialog":
                et("cancel", s), et("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hn.length; o++) et(Hn[o], s);
                break;
              case "source":
                et("error", s);
                break;
              case "img":
              case "image":
              case "link":
                et("error", s), et("load", s);
                break;
              case "details":
                et("toggle", s);
                break;
              case "input":
                vc(s, n), et("invalid", s);
                break;
              case "select":
                s._wrapperState = {
                  wasMultiple: !!n.multiple
                }, et("invalid", s);
                break;
              case "textarea":
                xc(s, n), et("invalid", s);
            }
            Ta(e, n), o = null;
            for (var c in n) if (n.hasOwnProperty(c)) {
              var d = n[c];
              c === "children" ? typeof d == "string" ? s.textContent !== d && (n.suppressHydrationWarning !== true && Mo(s.textContent, d, r), o = [
                "children",
                d
              ]) : typeof d == "number" && s.textContent !== "" + d && (n.suppressHydrationWarning !== true && Mo(s.textContent, d, r), o = [
                "children",
                "" + d
              ]) : oo.hasOwnProperty(c) && d != null && c === "onScroll" && et("scroll", s);
            }
            switch (e) {
              case "input":
                Fo(s), kc(s, n, true);
                break;
              case "textarea":
                Fo(s), jc(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof n.onClick == "function" && (s.onclick = gs);
            }
            s = o, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            c = o.nodeType === 9 ? o : o.ownerDocument, r === "http://www.w3.org/1999/xhtml" && (r = Yd(e)), r === "http://www.w3.org/1999/xhtml" ? e === "script" ? (r = c.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild)) : typeof s.is == "string" ? r = c.createElement(e, {
              is: s.is
            }) : (r = c.createElement(e), e === "select" && (c = r, s.multiple ? c.multiple = true : s.size && (c.size = s.size))) : r = c.createElementNS(r, e), r[Te] = t, r[go] = s, hp(r, t, false, false), t.stateNode = r;
            t: {
              switch (c = Pa(e, s), e) {
                case "dialog":
                  et("cancel", r), et("close", r), o = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  et("load", r), o = s;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Hn.length; o++) et(Hn[o], r);
                  o = s;
                  break;
                case "source":
                  et("error", r), o = s;
                  break;
                case "img":
                case "image":
                case "link":
                  et("error", r), et("load", r), o = s;
                  break;
                case "details":
                  et("toggle", r), o = s;
                  break;
                case "input":
                  vc(r, s), o = Ca(r, s), et("invalid", r);
                  break;
                case "option":
                  o = s;
                  break;
                case "select":
                  r._wrapperState = {
                    wasMultiple: !!s.multiple
                  }, o = it({}, s, {
                    value: void 0
                  }), et("invalid", r);
                  break;
                case "textarea":
                  xc(r, s), o = Na(r, s), et("invalid", r);
                  break;
                default:
                  o = s;
              }
              Ta(e, o), d = o;
              for (n in d) if (d.hasOwnProperty(n)) {
                var p = d[n];
                n === "style" ? Zd(r, p) : n === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Xd(r, p)) : n === "children" ? typeof p == "string" ? (e !== "textarea" || p !== "") && so(r, p) : typeof p == "number" && so(r, "" + p) : n !== "suppressContentEditableWarning" && n !== "suppressHydrationWarning" && n !== "autoFocus" && (oo.hasOwnProperty(n) ? p != null && n === "onScroll" && et("scroll", r) : p != null && ki(r, n, p, c));
              }
              switch (e) {
                case "input":
                  Fo(r), kc(r, s, false);
                  break;
                case "textarea":
                  Fo(r), jc(r);
                  break;
                case "option":
                  s.value != null && r.setAttribute("value", "" + br(s.value));
                  break;
                case "select":
                  r.multiple = !!s.multiple, n = s.value, n != null ? fn(r, !!s.multiple, n, false) : s.defaultValue != null && fn(r, !!s.multiple, s.defaultValue, true);
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
        return Nt(t), null;
      case 6:
        if (r && t.stateNode != null) mp(r, t, r.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(O(166));
          if (e = Lr(ho.current), Lr(Ue.current), Wo(t)) {
            if (s = t.stateNode, e = t.memoizedProps, s[Te] = t, (n = s.nodeValue !== e) && (r = re, r !== null)) switch (r.tag) {
              case 3:
                Mo(s.nodeValue, e, (r.mode & 1) !== 0);
                break;
              case 5:
                r.memoizedProps.suppressHydrationWarning !== true && Mo(s.nodeValue, e, (r.mode & 1) !== 0);
            }
            n && (t.flags |= 4);
          } else s = (e.nodeType === 9 ? e : e.ownerDocument).createTextNode(s), s[Te] = t, t.stateNode = s;
        }
        return Nt(t), null;
      case 13:
        if (nt(st), s = t.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
          if (ot && _e !== null && t.mode & 1 && !(t.flags & 128)) Il(), Sn(), t.flags |= 98560, n = false;
          else if (n = Wo(t), s !== null && s.dehydrated !== null) {
            if (r === null) {
              if (!n) throw Error(O(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(O(317));
              n[Te] = t;
            } else Sn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Nt(t), n = false;
          } else xe !== null && (wi(xe), xe = null), n = true;
          if (!n) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = e, t) : (s = s !== null, s !== (r !== null && r.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (r === null || st.current & 1 ? ht === 0 && (ht = 3) : nc())), t.updateQueue !== null && (t.flags |= 4), Nt(t), null);
      case 4:
        return zn(), si(r, t), r === null && wo(t.stateNode.containerInfo), Nt(t), null;
      case 10:
        return Wi(t.type._context), Nt(t), null;
      case 17:
        return Jt(t.type) && bs(), Nt(t), null;
      case 19:
        if (nt(st), n = t.memoizedState, n === null) return Nt(t), null;
        if (s = (t.flags & 128) !== 0, c = n.rendering, c === null) if (s) Wn(n, false);
        else {
          if (ht !== 0 || r !== null && r.flags & 128) for (r = t.child; r !== null; ) {
            if (c = js(r), c !== null) {
              for (t.flags |= 128, Wn(n, false), s = c.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = e, e = t.child; e !== null; ) n = e, r = s, n.flags &= 14680066, c = n.alternate, c === null ? (n.childLanes = 0, n.lanes = r, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = c.childLanes, n.lanes = c.lanes, n.child = c.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = c.memoizedProps, n.memoizedState = c.memoizedState, n.updateQueue = c.updateQueue, n.type = c.type, r = c.dependencies, n.dependencies = r === null ? null : {
                lanes: r.lanes,
                firstContext: r.firstContext
              }), e = e.sibling;
              return tt(st, st.current & 1 | 2), t.child;
            }
            r = r.sibling;
          }
          n.tail !== null && wt() > On && (t.flags |= 128, s = true, Wn(n, false), t.lanes = 4194304);
        }
        else {
          if (!s) if (r = js(c), r !== null) {
            if (t.flags |= 128, s = true, e = r.updateQueue, e !== null && (t.updateQueue = e, t.flags |= 4), Wn(n, true), n.tail === null && n.tailMode === "hidden" && !c.alternate && !ot) return Nt(t), null;
          } else 2 * wt() - n.renderingStartTime > On && e !== 1073741824 && (t.flags |= 128, s = true, Wn(n, false), t.lanes = 4194304);
          n.isBackwards ? (c.sibling = t.child, t.child = c) : (e = n.last, e !== null ? e.sibling = c : t.child = c, n.last = c);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = wt(), t.sibling = null, e = st.current, tt(st, s ? e & 1 | 2 : e & 1), t) : (Nt(t), null);
      case 22:
      case 23:
        return rc(), s = t.memoizedState !== null, r !== null && r.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? te & 1073741824 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(O(156, t.tag));
  }
  function Zw(r, t) {
    switch (Di(t), t.tag) {
      case 1:
        return Jt(t.type) && bs(), r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 3:
        return zn(), nt(Zt), nt(Rt), Hi(), r = t.flags, r & 65536 && !(r & 128) ? (t.flags = r & -65537 | 128, t) : null;
      case 5:
        return Ai(t), null;
      case 13:
        if (nt(st), r = t.memoizedState, r !== null && r.dehydrated !== null) {
          if (t.alternate === null) throw Error(O(340));
          Sn();
        }
        return r = t.flags, r & 65536 ? (t.flags = r & -65537 | 128, t) : null;
      case 19:
        return nt(st), null;
      case 4:
        return zn(), null;
      case 10:
        return Wi(t.type._context), null;
      case 22:
      case 23:
        return rc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Bo = false, Tt = false, Jw = typeof WeakSet == "function" ? WeakSet : Set, R = null;
  function pn(r, t) {
    var e = r.ref;
    if (e !== null) if (typeof e == "function") try {
      e(null);
    } catch (s) {
      lt(r, t, s);
    }
    else e.current = null;
  }
  function ai(r, t, e) {
    try {
      e();
    } catch (s) {
      lt(r, t, s);
    }
  }
  var ud = false;
  function Gw(r, t) {
    if (Ba = us, r = Sl(), Ri(r)) {
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
          var c = 0, d = -1, p = -1, l = 0, y = 0, x = r, k = null;
          e: for (; ; ) {
            for (var N; x !== e || o !== 0 && x.nodeType !== 3 || (d = c + o), x !== n || s !== 0 && x.nodeType !== 3 || (p = c + s), x.nodeType === 3 && (c += x.nodeValue.length), (N = x.firstChild) !== null; ) k = x, x = N;
            for (; ; ) {
              if (x === r) break e;
              if (k === e && ++l === o && (d = c), k === n && ++y === s && (p = c), (N = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = N;
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
    for (Aa = {
      focusedElem: r,
      selectionRange: e
    }, us = false, R = t; R !== null; ) if (t = R, r = t.child, (t.subtreeFlags & 1028) !== 0 && r !== null) r.return = t, R = r;
    else for (; R !== null; ) {
      t = R;
      try {
        var C = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var S = C.memoizedProps, H = C.memoizedState, m = t.stateNode, b = m.getSnapshotBeforeUpdate(t.elementType === t.type ? S : me(t.type, S), H);
              m.__reactInternalSnapshotBeforeUpdate = b;
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
            throw Error(O(163));
        }
      } catch (z) {
        lt(t, t.return, z);
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, R = r;
        break;
      }
      R = t.return;
    }
    return C = ud, ud = false, C;
  }
  function Gn(r, t, e) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var o = s = s.next;
      do {
        if ((o.tag & r) === r) {
          var n = o.destroy;
          o.destroy = void 0, n !== void 0 && ai(t, e, n);
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
  function ii(r) {
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
  function vp(r) {
    var t = r.alternate;
    t !== null && (r.alternate = null, vp(t)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (t = r.stateNode, t !== null && (delete t[Te], delete t[go], delete t[Ya], delete t[Rw], delete t[$w])), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
  }
  function kp(r) {
    return r.tag === 5 || r.tag === 3 || r.tag === 4;
  }
  function wd(r) {
    t: for (; ; ) {
      for (; r.sibling === null; ) {
        if (r.return === null || kp(r.return)) return null;
        r = r.return;
      }
      for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
        if (r.flags & 2 || r.child === null || r.tag === 4) continue t;
        r.child.return = r, r = r.child;
      }
      if (!(r.flags & 2)) return r.stateNode;
    }
  }
  function ci(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.nodeType === 8 ? e.parentNode.insertBefore(r, t) : e.insertBefore(r, t) : (e.nodeType === 8 ? (t = e.parentNode, t.insertBefore(r, e)) : (t = e, t.appendChild(r)), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = gs));
    else if (s !== 4 && (r = r.child, r !== null)) for (ci(r, t, e), r = r.sibling; r !== null; ) ci(r, t, e), r = r.sibling;
  }
  function di(r, t, e) {
    var s = r.tag;
    if (s === 5 || s === 6) r = r.stateNode, t ? e.insertBefore(r, t) : e.appendChild(r);
    else if (s !== 4 && (r = r.child, r !== null)) for (di(r, t, e), r = r.sibling; r !== null; ) di(r, t, e), r = r.sibling;
  }
  var Et = null, ke = false;
  function u_(r, t, e) {
    for (e = e.child; e !== null; ) xp(r, t, e), e = e.sibling;
  }
  function xp(r, t, e) {
    if (Ie && typeof Ie.onCommitFiberUnmount == "function") try {
      Ie.onCommitFiberUnmount(Ts, e);
    } catch {
    }
    switch (e.tag) {
      case 5:
        Tt || pn(e, t);
      case 6:
        var s = Et, o = ke;
        Et = null, u_(r, t, e), Et = s, ke = o, Et !== null && (ke ? (r = Et, e = e.stateNode, r.nodeType === 8 ? r.parentNode.removeChild(e) : r.removeChild(e)) : Et.removeChild(e.stateNode));
        break;
      case 18:
        Et !== null && (ke ? (r = Et, e = e.stateNode, r.nodeType === 8 ? ua(r.parentNode, e) : r.nodeType === 1 && ua(r, e), lo(r)) : ua(Et, e.stateNode));
        break;
      case 4:
        s = Et, o = ke, Et = e.stateNode.containerInfo, ke = true, u_(r, t, e), Et = s, ke = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (s = e.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          o = s = s.next;
          do {
            var n = o, c = n.destroy;
            n = n.tag, c !== void 0 && (n & 2 || n & 4) && ai(e, t, c), o = o.next;
          } while (o !== s);
        }
        u_(r, t, e);
        break;
      case 1:
        if (!Tt && (pn(e, t), s = e.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = e.memoizedProps, s.state = e.memoizedState, s.componentWillUnmount();
        } catch (d) {
          lt(e, t, d);
        }
        u_(r, t, e);
        break;
      case 21:
        u_(r, t, e);
        break;
      case 22:
        e.mode & 1 ? (Tt = (s = Tt) || e.memoizedState !== null, u_(r, t, e), Tt = s) : u_(r, t, e);
        break;
      default:
        u_(r, t, e);
    }
  }
  function fd(r) {
    var t = r.updateQueue;
    if (t !== null) {
      r.updateQueue = null;
      var e = r.stateNode;
      e === null && (e = r.stateNode = new Jw()), t.forEach(function(s) {
        var o = cf.bind(null, r, s);
        e.has(s) || (e.add(s), s.then(o, o));
      });
    }
  }
  function ye(r, t) {
    var e = t.deletions;
    if (e !== null) for (var s = 0; s < e.length; s++) {
      var o = e[s];
      try {
        var n = r, c = t, d = c;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              Et = d.stateNode, ke = false;
              break t;
            case 3:
              Et = d.stateNode.containerInfo, ke = true;
              break t;
            case 4:
              Et = d.stateNode.containerInfo, ke = true;
              break t;
          }
          d = d.return;
        }
        if (Et === null) throw Error(O(160));
        xp(n, c, o), Et = null, ke = false;
        var p = o.alternate;
        p !== null && (p.return = null), o.return = null;
      } catch (l) {
        lt(o, t, l);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) jp(t, r), t = t.sibling;
  }
  function jp(r, t) {
    var e = r.alternate, s = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ye(t, r), Ce(r), s & 4) {
          try {
            Gn(3, r, r.return), Ws(3, r);
          } catch (S) {
            lt(r, r.return, S);
          }
          try {
            Gn(5, r, r.return);
          } catch (S) {
            lt(r, r.return, S);
          }
        }
        break;
      case 1:
        ye(t, r), Ce(r), s & 512 && e !== null && pn(e, e.return);
        break;
      case 5:
        if (ye(t, r), Ce(r), s & 512 && e !== null && pn(e, e.return), r.flags & 32) {
          var o = r.stateNode;
          try {
            so(o, "");
          } catch (S) {
            lt(r, r.return, S);
          }
        }
        if (s & 4 && (o = r.stateNode, o != null)) {
          var n = r.memoizedProps, c = e !== null ? e.memoizedProps : n, d = r.type, p = r.updateQueue;
          if (r.updateQueue = null, p !== null) try {
            d === "input" && n.type === "radio" && n.name != null && Hd(o, n), Pa(d, c);
            var l = Pa(d, n);
            for (c = 0; c < p.length; c += 2) {
              var y = p[c], x = p[c + 1];
              y === "style" ? Zd(o, x) : y === "dangerouslySetInnerHTML" ? Xd(o, x) : y === "children" ? so(o, x) : ki(o, y, x, l);
            }
            switch (d) {
              case "input":
                Oa(o, n);
                break;
              case "textarea":
                qd(o, n);
                break;
              case "select":
                var k = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!n.multiple;
                var N = n.value;
                N != null ? fn(o, !!n.multiple, N, false) : k !== !!n.multiple && (n.defaultValue != null ? fn(o, !!n.multiple, n.defaultValue, true) : fn(o, !!n.multiple, n.multiple ? [] : "", false));
            }
            o[go] = n;
          } catch (S) {
            lt(r, r.return, S);
          }
        }
        break;
      case 6:
        if (ye(t, r), Ce(r), s & 4) {
          if (r.stateNode === null) throw Error(O(162));
          o = r.stateNode, n = r.memoizedProps;
          try {
            o.nodeValue = n;
          } catch (S) {
            lt(r, r.return, S);
          }
        }
        break;
      case 3:
        if (ye(t, r), Ce(r), s & 4 && e !== null && e.memoizedState.isDehydrated) try {
          lo(t.containerInfo);
        } catch (S) {
          lt(r, r.return, S);
        }
        break;
      case 4:
        ye(t, r), Ce(r);
        break;
      case 13:
        ye(t, r), Ce(r), o = r.child, o.flags & 8192 && (n = o.memoizedState !== null, o.stateNode.isHidden = n, !n || o.alternate !== null && o.alternate.memoizedState !== null || (ec = wt())), s & 4 && fd(r);
        break;
      case 22:
        if (y = e !== null && e.memoizedState !== null, r.mode & 1 ? (Tt = (l = Tt) || y, ye(t, r), Tt = l) : ye(t, r), Ce(r), s & 8192) {
          if (l = r.memoizedState !== null, (r.stateNode.isHidden = l) && !y && r.mode & 1) for (R = r, y = r.child; y !== null; ) {
            for (x = R = y; R !== null; ) {
              switch (k = R, N = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, k, k.return);
                  break;
                case 1:
                  pn(k, k.return);
                  var C = k.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    s = k, e = k.return;
                    try {
                      t = s, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                    } catch (S) {
                      lt(s, e, S);
                    }
                  }
                  break;
                case 5:
                  pn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    bd(x);
                    continue;
                  }
              }
              N !== null ? (N.return = k, R = N) : bd(x);
            }
            y = y.sibling;
          }
          t: for (y = null, x = r; ; ) {
            if (x.tag === 5) {
              if (y === null) {
                y = x;
                try {
                  o = x.stateNode, l ? (n = o.style, typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none") : (d = x.stateNode, p = x.memoizedProps.style, c = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Kd("display", c));
                } catch (S) {
                  lt(r, r.return, S);
                }
              }
            } else if (x.tag === 6) {
              if (y === null) try {
                x.stateNode.nodeValue = l ? "" : x.memoizedProps;
              } catch (S) {
                lt(r, r.return, S);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === r) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === r) break t;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === r) break t;
              y === x && (y = null), x = x.return;
            }
            y === x && (y = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ye(t, r), Ce(r), s & 4 && fd(r);
        break;
      case 21:
        break;
      default:
        ye(t, r), Ce(r);
    }
  }
  function Ce(r) {
    var t = r.flags;
    if (t & 2) {
      try {
        t: {
          for (var e = r.return; e !== null; ) {
            if (kp(e)) {
              var s = e;
              break t;
            }
            e = e.return;
          }
          throw Error(O(160));
        }
        switch (s.tag) {
          case 5:
            var o = s.stateNode;
            s.flags & 32 && (so(o, ""), s.flags &= -33);
            var n = wd(r);
            di(r, n, o);
            break;
          case 3:
          case 4:
            var c = s.stateNode.containerInfo, d = wd(r);
            ci(r, d, c);
            break;
          default:
            throw Error(O(161));
        }
      } catch (p) {
        lt(r, r.return, p);
      }
      r.flags &= -3;
    }
    t & 4096 && (r.flags &= -4097);
  }
  function tf(r, t, e) {
    R = r, Sp(r);
  }
  function Sp(r, t, e) {
    for (var s = (r.mode & 1) !== 0; R !== null; ) {
      var o = R, n = o.child;
      if (o.tag === 22 && s) {
        var c = o.memoizedState !== null || Bo;
        if (!c) {
          var d = o.alternate, p = d !== null && d.memoizedState !== null || Tt;
          d = Bo;
          var l = Tt;
          if (Bo = c, (Tt = p) && !l) for (R = o; R !== null; ) c = R, p = c.child, c.tag === 22 && c.memoizedState !== null ? hd(o) : p !== null ? (p.return = c, R = p) : hd(o);
          for (; n !== null; ) R = n, Sp(n), n = n.sibling;
          R = o, Bo = d, Tt = l;
        }
        gd(r);
      } else o.subtreeFlags & 8772 && n !== null ? (n.return = o, R = n) : gd(r);
    }
  }
  function gd(r) {
    for (; R !== null; ) {
      var t = R;
      if (t.flags & 8772) {
        var e = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Tt || Ws(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Tt) if (e === null) s.componentDidMount();
              else {
                var o = t.elementType === t.type ? e.memoizedProps : me(t.type, e.memoizedProps);
                s.componentDidUpdate(o, e.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var n = t.updateQueue;
              n !== null && td(t, n, s);
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
                td(t, c, e);
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
                  var y = l.memoizedState;
                  if (y !== null) {
                    var x = y.dehydrated;
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
              throw Error(O(163));
          }
          Tt || t.flags & 512 && ii(t);
        } catch (k) {
          lt(t, t.return, k);
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
  function bd(r) {
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
  function hd(r) {
    for (; R !== null; ) {
      var t = R;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var e = t.return;
            try {
              Ws(4, t);
            } catch (p) {
              lt(t, e, p);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var o = t.return;
              try {
                s.componentDidMount();
              } catch (p) {
                lt(t, o, p);
              }
            }
            var n = t.return;
            try {
              ii(t);
            } catch (p) {
              lt(t, n, p);
            }
            break;
          case 5:
            var c = t.return;
            try {
              ii(t);
            } catch (p) {
              lt(t, c, p);
            }
        }
      } catch (p) {
        lt(t, t.return, p);
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
  var ef = Math.ceil, zs = d_.ReactCurrentDispatcher, Gi = d_.ReactCurrentOwner, we = d_.ReactCurrentBatchConfig, X = 0, xt = null, ft = null, zt = 0, te = 0, un = mr(0), ht = 0, ko = null, Hr = 0, Qs = 0, tc = 0, to = null, Xt = null, ec = 0, On = 1 / 0, Qe = null, Cs = false, li = null, wr = null, Ao = false, sr = null, Os = 0, eo = 0, pi = null, ns = -1, os = 0;
  function Wt() {
    return X & 6 ? wt() : ns !== -1 ? ns : ns = wt();
  }
  function fr(r) {
    return r.mode & 1 ? X & 2 && zt !== 0 ? zt & -zt : Iw.transition !== null ? (os === 0 && (os = cl()), os) : (r = J, r !== 0 || (r = window.event, r = r === void 0 ? 16 : gl(r.type)), r) : 1;
  }
  function Ee(r, t, e, s) {
    if (50 < eo) throw eo = 0, pi = null, Error(O(185));
    So(r, e, s), (!(X & 2) || r !== xt) && (r === xt && (!(X & 2) && (Qs |= e), ht === 4 && h_(r, zt)), Gt(r, s), e === 1 && X === 0 && !(t.mode & 1) && (On = wt() + 500, Is && vr()));
  }
  function Gt(r, t) {
    var e = r.callbackNode;
    Iu(r, t);
    var s = ps(r, r === xt ? zt : 0);
    if (s === 0) e !== null && zc(e), r.callbackNode = null, r.callbackPriority = 0;
    else if (t = s & -s, r.callbackPriority !== t) {
      if (e != null && zc(e), t === 1) r.tag === 0 ? Dw(yd.bind(null, r)) : Rl(yd.bind(null, r)), Tw(function() {
        !(X & 6) && vr();
      }), e = null;
      else {
        switch (dl(s)) {
          case 1:
            e = zi;
            break;
          case 4:
            e = al;
            break;
          case 16:
            e = ls;
            break;
          case 536870912:
            e = il;
            break;
          default:
            e = ls;
        }
        e = Tp(e, Ep.bind(null, r));
      }
      r.callbackPriority = t, r.callbackNode = e;
    }
  }
  function Ep(r, t) {
    if (ns = -1, os = 0, X & 6) throw Error(O(327));
    var e = r.callbackNode;
    if (mn() && r.callbackNode !== e) return null;
    var s = ps(r, r === xt ? zt : 0);
    if (s === 0) return null;
    if (s & 30 || s & r.expiredLanes || t) t = Ls(r, s);
    else {
      t = s;
      var o = X;
      X |= 2;
      var n = Cp();
      (xt !== r || zt !== t) && (Qe = null, On = wt() + 500, Wr(r, t));
      do
        try {
          nf();
          break;
        } catch (d) {
          zp(r, d);
        }
      while (true);
      Mi(), zs.current = n, X = o, ft !== null ? t = 0 : (xt = null, zt = 0, t = ht);
    }
    if (t !== 0) {
      if (t === 2 && (o = Ua(r), o !== 0 && (s = o, t = ui(r, o))), t === 1) throw e = ko, Wr(r, 0), h_(r, s), Gt(r, wt()), e;
      if (t === 6) h_(r, s);
      else {
        if (o = r.current.alternate, !(s & 30) && !_f(o) && (t = Ls(r, s), t === 2 && (n = Ua(r), n !== 0 && (s = n, t = ui(r, n))), t === 1)) throw e = ko, Wr(r, 0), h_(r, s), Gt(r, wt()), e;
        switch (r.finishedWork = o, r.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(O(345));
          case 2:
            jr(r, Xt, Qe);
            break;
          case 3:
            if (h_(r, s), (s & 130023424) === s && (t = ec + 500 - wt(), 10 < t)) {
              if (ps(r, 0) !== 0) break;
              if (o = r.suspendedLanes, (o & s) !== s) {
                Wt(), r.pingedLanes |= r.suspendedLanes & o;
                break;
              }
              r.timeoutHandle = qa(jr.bind(null, r, Xt, Qe), t);
              break;
            }
            jr(r, Xt, Qe);
            break;
          case 4:
            if (h_(r, s), (s & 4194240) === s) break;
            for (t = r.eventTimes, o = -1; 0 < s; ) {
              var c = 31 - Se(s);
              n = 1 << c, c = t[c], c > o && (o = c), s &= ~n;
            }
            if (s = o, s = wt() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * ef(s / 1960)) - s, 10 < s) {
              r.timeoutHandle = qa(jr.bind(null, r, Xt, Qe), s);
              break;
            }
            jr(r, Xt, Qe);
            break;
          case 5:
            jr(r, Xt, Qe);
            break;
          default:
            throw Error(O(329));
        }
      }
    }
    return Gt(r, wt()), r.callbackNode === e ? Ep.bind(null, r) : null;
  }
  function ui(r, t) {
    var e = to;
    return r.current.memoizedState.isDehydrated && (Wr(r, t).flags |= 256), r = Ls(r, t), r !== 2 && (t = Xt, Xt = e, t !== null && wi(t)), r;
  }
  function wi(r) {
    Xt === null ? Xt = r : Xt.push.apply(Xt, r);
  }
  function _f(r) {
    for (var t = r; ; ) {
      if (t.flags & 16384) {
        var e = t.updateQueue;
        if (e !== null && (e = e.stores, e !== null)) for (var s = 0; s < e.length; s++) {
          var o = e[s], n = o.getSnapshot;
          o = o.value;
          try {
            if (!ze(n(), o)) return false;
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
  function h_(r, t) {
    for (t &= ~tc, t &= ~Qs, r.suspendedLanes |= t, r.pingedLanes &= ~t, r = r.expirationTimes; 0 < t; ) {
      var e = 31 - Se(t), s = 1 << e;
      r[e] = -1, t &= ~s;
    }
  }
  function yd(r) {
    if (X & 6) throw Error(O(327));
    mn();
    var t = ps(r, 0);
    if (!(t & 1)) return Gt(r, wt()), null;
    var e = Ls(r, t);
    if (r.tag !== 0 && e === 2) {
      var s = Ua(r);
      s !== 0 && (t = s, e = ui(r, s));
    }
    if (e === 1) throw e = ko, Wr(r, 0), h_(r, t), Gt(r, wt()), e;
    if (e === 6) throw Error(O(345));
    return r.finishedWork = r.current.alternate, r.finishedLanes = t, jr(r, Xt, Qe), Gt(r, wt()), null;
  }
  function _c(r, t) {
    var e = X;
    X |= 1;
    try {
      return r(t);
    } finally {
      X = e, X === 0 && (On = wt() + 500, Is && vr());
    }
  }
  function qr(r) {
    sr !== null && sr.tag === 0 && !(X & 6) && mn();
    var t = X;
    X |= 1;
    var e = we.transition, s = J;
    try {
      if (we.transition = null, J = 1, r) return r();
    } finally {
      J = s, we.transition = e, X = t, !(X & 6) && vr();
    }
  }
  function rc() {
    te = un.current, nt(un);
  }
  function Wr(r, t) {
    r.finishedWork = null, r.finishedLanes = 0;
    var e = r.timeoutHandle;
    if (e !== -1 && (r.timeoutHandle = -1, Fw(e)), ft !== null) for (e = ft.return; e !== null; ) {
      var s = e;
      switch (Di(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && bs();
          break;
        case 3:
          zn(), nt(Zt), nt(Rt), Hi();
          break;
        case 5:
          Ai(s);
          break;
        case 4:
          zn();
          break;
        case 13:
          nt(st);
          break;
        case 19:
          nt(st);
          break;
        case 10:
          Wi(s.type._context);
          break;
        case 22:
        case 23:
          rc();
      }
      e = e.return;
    }
    if (xt = r, ft = r = gr(r.current, null), zt = te = t, ht = 0, ko = null, tc = Qs = Hr = 0, Xt = to = null, Or !== null) {
      for (t = 0; t < Or.length; t++) if (e = Or[t], s = e.interleaved, s !== null) {
        e.interleaved = null;
        var o = s.next, n = e.pending;
        if (n !== null) {
          var c = n.next;
          n.next = o, s.next = c;
        }
        e.pending = s;
      }
      Or = null;
    }
    return r;
  }
  function zp(r, t) {
    do {
      var e = ft;
      try {
        if (Mi(), es.current = Es, Ss) {
          for (var s = at.memoizedState; s !== null; ) {
            var o = s.queue;
            o !== null && (o.pending = null), s = s.next;
          }
          Ss = false;
        }
        if (Ar = 0, vt = gt = at = null, Jn = false, yo = 0, Gi.current = null, e === null || e.return === null) {
          ht = 1, ko = t, ft = null;
          break;
        }
        t: {
          var n = r, c = e.return, d = e, p = t;
          if (t = zt, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var l = p, y = d, x = y.tag;
            if (!(y.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var k = y.alternate;
              k ? (y.updateQueue = k.updateQueue, y.memoizedState = k.memoizedState, y.lanes = k.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var N = sd(c);
            if (N !== null) {
              N.flags &= -257, ad(N, c, d, n, t), N.mode & 1 && od(n, l, t), t = N, p = l;
              var C = t.updateQueue;
              if (C === null) {
                var S = /* @__PURE__ */ new Set();
                S.add(p), t.updateQueue = S;
              } else C.add(p);
              break t;
            } else {
              if (!(t & 1)) {
                od(n, l, t), nc();
                break t;
              }
              p = Error(O(426));
            }
          } else if (ot && d.mode & 1) {
            var H = sd(c);
            if (H !== null) {
              !(H.flags & 65536) && (H.flags |= 256), ad(H, c, d, n, t), Ii(Cn(p, d));
              break t;
            }
          }
          n = p = Cn(p, d), ht !== 4 && (ht = 2), to === null ? to = [
            n
          ] : to.push(n), n = c;
          do {
            switch (n.tag) {
              case 3:
                n.flags |= 65536, t &= -t, n.lanes |= t;
                var m = dp(n, p, t);
                Gc(n, m);
                break t;
              case 1:
                d = p;
                var b = n.type, v = n.stateNode;
                if (!(n.flags & 128) && (typeof b.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (wr === null || !wr.has(v)))) {
                  n.flags |= 65536, t &= -t, n.lanes |= t;
                  var z = lp(n, d, t);
                  Gc(n, z);
                  break t;
                }
            }
            n = n.return;
          } while (n !== null);
        }
        Lp(e);
      } catch (F) {
        t = F, ft === e && e !== null && (ft = e = e.return);
        continue;
      }
      break;
    } while (true);
  }
  function Cp() {
    var r = zs.current;
    return zs.current = Es, r === null ? Es : r;
  }
  function nc() {
    (ht === 0 || ht === 3 || ht === 2) && (ht = 4), xt === null || !(Hr & 268435455) && !(Qs & 268435455) || h_(xt, zt);
  }
  function Ls(r, t) {
    var e = X;
    X |= 2;
    var s = Cp();
    (xt !== r || zt !== t) && (Qe = null, Wr(r, t));
    do
      try {
        rf();
        break;
      } catch (o) {
        zp(r, o);
      }
    while (true);
    if (Mi(), X = e, zs.current = s, ft !== null) throw Error(O(261));
    return xt = null, zt = 0, ht;
  }
  function rf() {
    for (; ft !== null; ) Op(ft);
  }
  function nf() {
    for (; ft !== null && !Ou(); ) Op(ft);
  }
  function Op(r) {
    var t = Fp(r.alternate, r, te);
    r.memoizedProps = r.pendingProps, t === null ? Lp(r) : ft = t, Gi.current = null;
  }
  function Lp(r) {
    var t = r;
    do {
      var e = t.alternate;
      if (r = t.return, t.flags & 32768) {
        if (e = Zw(e, t), e !== null) {
          e.flags &= 32767, ft = e;
          return;
        }
        if (r !== null) r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null;
        else {
          ht = 6, ft = null;
          return;
        }
      } else if (e = Kw(e, t, te), e !== null) {
        ft = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        ft = t;
        return;
      }
      ft = t = r;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function jr(r, t, e) {
    var s = J, o = we.transition;
    try {
      we.transition = null, J = 1, of(r, t, e, s);
    } finally {
      we.transition = o, J = s;
    }
    return null;
  }
  function of(r, t, e, s) {
    do
      mn();
    while (sr !== null);
    if (X & 6) throw Error(O(327));
    e = r.finishedWork;
    var o = r.finishedLanes;
    if (e === null) return null;
    if (r.finishedWork = null, r.finishedLanes = 0, e === r.current) throw Error(O(177));
    r.callbackNode = null, r.callbackPriority = 0;
    var n = e.lanes | e.childLanes;
    if (Uu(r, n), r === xt && (ft = xt = null, zt = 0), !(e.subtreeFlags & 2064) && !(e.flags & 2064) || Ao || (Ao = true, Tp(ls, function() {
      return mn(), null;
    })), n = (e.flags & 15990) !== 0, e.subtreeFlags & 15990 || n) {
      n = we.transition, we.transition = null;
      var c = J;
      J = 1;
      var d = X;
      X |= 4, Gi.current = null, Gw(r, e), jp(e, r), Sw(Aa), us = !!Ba, Aa = Ba = null, r.current = e, tf(e), Lu(), X = d, J = c, we.transition = n;
    } else r.current = e;
    if (Ao && (Ao = false, sr = r, Os = o), n = r.pendingLanes, n === 0 && (wr = null), Tu(e.stateNode), Gt(r, wt()), t !== null) for (s = r.onRecoverableError, e = 0; e < t.length; e++) o = t[e], s(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
    if (Cs) throw Cs = false, r = li, li = null, r;
    return Os & 1 && r.tag !== 0 && mn(), n = r.pendingLanes, n & 1 ? r === pi ? eo++ : (eo = 0, pi = r) : eo = 0, vr(), null;
  }
  function mn() {
    if (sr !== null) {
      var r = dl(Os), t = we.transition, e = J;
      try {
        if (we.transition = null, J = 16 > r ? 16 : r, sr === null) var s = false;
        else {
          if (r = sr, sr = null, Os = 0, X & 6) throw Error(O(331));
          var o = X;
          for (X |= 4, R = r.current; R !== null; ) {
            var n = R, c = n.child;
            if (R.flags & 16) {
              var d = n.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var l = d[p];
                  for (R = l; R !== null; ) {
                    var y = R;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Gn(8, y, n);
                    }
                    var x = y.child;
                    if (x !== null) x.return = y, R = x;
                    else for (; R !== null; ) {
                      y = R;
                      var k = y.sibling, N = y.return;
                      if (vp(y), y === l) {
                        R = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = N, R = k;
                        break;
                      }
                      R = N;
                    }
                  }
                }
                var C = n.alternate;
                if (C !== null) {
                  var S = C.child;
                  if (S !== null) {
                    C.child = null;
                    do {
                      var H = S.sibling;
                      S.sibling = null, S = H;
                    } while (S !== null);
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
                  Gn(9, n, n.return);
              }
              var m = n.sibling;
              if (m !== null) {
                m.return = n.return, R = m;
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
                    Ws(9, d);
                }
              } catch (F) {
                lt(d, d.return, F);
              }
              if (d === c) {
                R = null;
                break t;
              }
              var z = d.sibling;
              if (z !== null) {
                z.return = d.return, R = z;
                break t;
              }
              R = d.return;
            }
          }
          if (X = o, vr(), Ie && typeof Ie.onPostCommitFiberRoot == "function") try {
            Ie.onPostCommitFiberRoot(Ts, r);
          } catch {
          }
          s = true;
        }
        return s;
      } finally {
        J = e, we.transition = t;
      }
    }
    return false;
  }
  function md(r, t, e) {
    t = Cn(e, t), t = dp(r, t, 1), r = ur(r, t, 1), t = Wt(), r !== null && (So(r, 1, t), Gt(r, t));
  }
  function lt(r, t, e) {
    if (r.tag === 3) md(r, r, e);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        md(t, r, e);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (wr === null || !wr.has(s))) {
          r = Cn(e, r), r = lp(t, r, 1), t = ur(t, r, 1), r = Wt(), t !== null && (So(t, 1, r), Gt(t, r));
          break;
        }
      }
      t = t.return;
    }
  }
  function sf(r, t, e) {
    var s = r.pingCache;
    s !== null && s.delete(t), t = Wt(), r.pingedLanes |= r.suspendedLanes & e, xt === r && (zt & e) === e && (ht === 4 || ht === 3 && (zt & 130023424) === zt && 500 > wt() - ec ? Wr(r, 0) : tc |= e), Gt(r, t);
  }
  function Np(r, t) {
    t === 0 && (r.mode & 1 ? (t = Ro, Ro <<= 1, !(Ro & 130023424) && (Ro = 4194304)) : t = 1);
    var e = Wt();
    r = i_(r, t), r !== null && (So(r, t, e), Gt(r, e));
  }
  function af(r) {
    var t = r.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Np(r, e);
  }
  function cf(r, t) {
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
        throw Error(O(314));
    }
    s !== null && s.delete(t), Np(r, e);
  }
  var Fp;
  Fp = function(r, t, e) {
    if (r !== null) if (r.memoizedProps !== t.pendingProps || Zt.current) Kt = true;
    else {
      if (!(r.lanes & e) && !(t.flags & 128)) return Kt = false, Xw(r, t, e);
      Kt = !!(r.flags & 131072);
    }
    else Kt = false, ot && t.flags & 1048576 && $l(t, ms, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        rs(r, t), r = t.pendingProps;
        var o = jn(t, Rt.current);
        yn(t, e), o = Yi(null, t, s, r, o, e);
        var n = Xi();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Jt(s) ? (n = true, hs(t)) : n = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Vi(t), o.updater = Ms, t.stateNode = o, o._reactInternals = t, ti(t, s, r, e), t = ri(null, t, s, true, n, e)) : (t.tag = 0, ot && n && $i(t), It(null, t, o, e), t = t.child), t;
      case 16:
        s = t.elementType;
        t: {
          switch (rs(r, t), r = t.pendingProps, o = s._init, s = o(s._payload), t.type = s, o = t.tag = lf(s), r = me(s, r), o) {
            case 0:
              t = _i(null, t, s, r, e);
              break t;
            case 1:
              t = dd(null, t, s, r, e);
              break t;
            case 11:
              t = id(null, t, s, r, e);
              break t;
            case 14:
              t = cd(null, t, s, me(s.type, r), e);
              break t;
          }
          throw Error(O(306, s, ""));
        }
        return t;
      case 0:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : me(s, o), _i(r, t, s, o, e);
      case 1:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : me(s, o), dd(r, t, s, o, e);
      case 3:
        t: {
          if (fp(t), r === null) throw Error(O(387));
          s = t.pendingProps, n = t.memoizedState, o = n.element, Ql(r, t), xs(t, s, null, e);
          var c = t.memoizedState;
          if (s = c.element, n.isDehydrated) if (n = {
            element: s,
            isDehydrated: false,
            cache: c.cache,
            pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
            transitions: c.transitions
          }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            o = Cn(Error(O(423)), t), t = ld(r, t, s, e, o);
            break t;
          } else if (s !== o) {
            o = Cn(Error(O(424)), t), t = ld(r, t, s, e, o);
            break t;
          } else for (_e = pr(t.stateNode.containerInfo.firstChild), re = t, ot = true, xe = null, e = Ml(t, null, s, e), t.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Sn(), s === o) {
              t = c_(r, t, e);
              break t;
            }
            It(r, t, s, e);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Vl(t), r === null && Za(t), s = t.type, o = t.pendingProps, n = r !== null ? r.memoizedProps : null, c = o.children, Ha(s, o) ? c = null : n !== null && Ha(s, n) && (t.flags |= 32), wp(r, t), It(r, t, c, e), t.child;
      case 6:
        return r === null && Za(t), null;
      case 13:
        return gp(r, t, e);
      case 4:
        return Bi(t, t.stateNode.containerInfo), s = t.pendingProps, r === null ? t.child = En(t, null, s, e) : It(r, t, s, e), t.child;
      case 11:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : me(s, o), id(r, t, s, o, e);
      case 7:
        return It(r, t, t.pendingProps, e), t.child;
      case 8:
        return It(r, t, t.pendingProps.children, e), t.child;
      case 12:
        return It(r, t, t.pendingProps.children, e), t.child;
      case 10:
        t: {
          if (s = t.type._context, o = t.pendingProps, n = t.memoizedProps, c = o.value, tt(vs, s._currentValue), s._currentValue = c, n !== null) if (ze(n.value, c)) {
            if (n.children === o.children && !Zt.current) {
              t = c_(r, t, e);
              break t;
            }
          } else for (n = t.child, n !== null && (n.return = t); n !== null; ) {
            var d = n.dependencies;
            if (d !== null) {
              c = n.child;
              for (var p = d.firstContext; p !== null; ) {
                if (p.context === s) {
                  if (n.tag === 1) {
                    p = o_(-1, e & -e), p.tag = 2;
                    var l = n.updateQueue;
                    if (l !== null) {
                      l = l.shared;
                      var y = l.pending;
                      y === null ? p.next = p : (p.next = y.next, y.next = p), l.pending = p;
                    }
                  }
                  n.lanes |= e, p = n.alternate, p !== null && (p.lanes |= e), Ja(n.return, e, t), d.lanes |= e;
                  break;
                }
                p = p.next;
              }
            } else if (n.tag === 10) c = n.type === t.type ? null : n.child;
            else if (n.tag === 18) {
              if (c = n.return, c === null) throw Error(O(341));
              c.lanes |= e, d = c.alternate, d !== null && (d.lanes |= e), Ja(c, e, t), c = n.sibling;
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
          It(r, t, o.children, e), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, s = t.pendingProps.children, yn(t, e), o = fe(o), s = s(o), t.flags |= 1, It(r, t, s, e), t.child;
      case 14:
        return s = t.type, o = me(s, t.pendingProps), o = me(s.type, o), cd(r, t, s, o, e);
      case 15:
        return pp(r, t, t.type, t.pendingProps, e);
      case 17:
        return s = t.type, o = t.pendingProps, o = t.elementType === s ? o : me(s, o), rs(r, t), t.tag = 1, Jt(s) ? (r = true, hs(t)) : r = false, yn(t, e), cp(t, s, o), ti(t, s, o, e), ri(null, t, s, true, r, e);
      case 19:
        return bp(r, t, e);
      case 22:
        return up(r, t, e);
    }
    throw Error(O(156, t.tag));
  };
  function Tp(r, t) {
    return sl(r, t);
  }
  function df(r, t, e, s) {
    this.tag = r, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pe(r, t, e, s) {
    return new df(r, t, e, s);
  }
  function oc(r) {
    return r = r.prototype, !(!r || !r.isReactComponent);
  }
  function lf(r) {
    if (typeof r == "function") return oc(r) ? 1 : 0;
    if (r != null) {
      if (r = r.$$typeof, r === ji) return 11;
      if (r === Si) return 14;
    }
    return 2;
  }
  function gr(r, t) {
    var e = r.alternate;
    return e === null ? (e = pe(r.tag, t, r.key, r.mode), e.elementType = r.elementType, e.type = r.type, e.stateNode = r.stateNode, e.alternate = r, r.alternate = e) : (e.pendingProps = t, e.type = r.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = r.flags & 14680064, e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, e.sibling = r.sibling, e.index = r.index, e.ref = r.ref, e;
  }
  function ss(r, t, e, s, o, n) {
    var c = 2;
    if (s = r, typeof r == "function") oc(r) && (c = 1);
    else if (typeof r == "string") c = 5;
    else t: switch (r) {
      case _n:
        return Qr(e.children, o, n, t);
      case xi:
        c = 8, o |= 8;
        break;
      case ja:
        return r = pe(12, e, t, o | 2), r.elementType = ja, r.lanes = n, r;
      case Sa:
        return r = pe(13, e, t, o), r.elementType = Sa, r.lanes = n, r;
      case Ea:
        return r = pe(19, e, t, o), r.elementType = Ea, r.lanes = n, r;
      case Vd:
        return Vs(e, o, n, t);
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case Wd:
            c = 10;
            break t;
          case Qd:
            c = 9;
            break t;
          case ji:
            c = 11;
            break t;
          case Si:
            c = 14;
            break t;
          case w_:
            c = 16, s = null;
            break t;
        }
        throw Error(O(130, r == null ? r : typeof r, ""));
    }
    return t = pe(c, e, t, o), t.elementType = r, t.type = s, t.lanes = n, t;
  }
  function Qr(r, t, e, s) {
    return r = pe(7, r, s, t), r.lanes = e, r;
  }
  function Vs(r, t, e, s) {
    return r = pe(22, r, s, t), r.elementType = Vd, r.lanes = e, r.stateNode = {
      isHidden: false
    }, r;
  }
  function va(r, t, e) {
    return r = pe(6, r, null, t), r.lanes = e, r;
  }
  function ka(r, t, e) {
    return t = pe(4, r.children !== null ? r.children : [], r.key, t), t.lanes = e, t.stateNode = {
      containerInfo: r.containerInfo,
      pendingChildren: null,
      implementation: r.implementation
    }, t;
  }
  function pf(r, t, e, s, o) {
    this.tag = t, this.containerInfo = r, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _a(0), this.expirationTimes = _a(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _a(0), this.identifierPrefix = s, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function sc(r, t, e, s, o, n, c, d, p) {
    return r = new pf(r, t, e, d, p), t === 1 ? (t = 1, n === true && (t |= 8)) : t = 0, n = pe(3, null, null, t), r.current = n, n.stateNode = r, n.memoizedState = {
      element: s,
      isDehydrated: e,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Vi(n), r;
  }
  function uf(r, t, e) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: en,
      key: s == null ? null : "" + s,
      children: r,
      containerInfo: t,
      implementation: e
    };
  }
  function Pp(r) {
    if (!r) return hr;
    r = r._reactInternals;
    t: {
      if (Xr(r) !== r || r.tag !== 1) throw Error(O(170));
      var t = r;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break t;
          case 1:
            if (Jt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(O(171));
    }
    if (r.tag === 1) {
      var e = r.type;
      if (Jt(e)) return Pl(r, e, t);
    }
    return t;
  }
  function Rp(r, t, e, s, o, n, c, d, p) {
    return r = sc(e, s, true, r, o, n, c, d, p), r.context = Pp(null), e = r.current, s = Wt(), o = fr(e), n = o_(s, o), n.callback = t ?? null, ur(e, n, o), r.current.lanes = o, So(r, o, s), Gt(r, s), r;
  }
  function Bs(r, t, e, s) {
    var o = t.current, n = Wt(), c = fr(o);
    return e = Pp(e), t.context === null ? t.context = e : t.pendingContext = e, t = o_(n, c), t.payload = {
      element: r
    }, s = s === void 0 ? null : s, s !== null && (t.callback = s), r = ur(o, t, c), r !== null && (Ee(r, o, c, n), ts(r, o, c)), c;
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
  function vd(r, t) {
    if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
      var e = r.retryLane;
      r.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ac(r, t) {
    vd(r, t), (r = r.alternate) && vd(r, t);
  }
  function wf() {
    return null;
  }
  var $p = typeof reportError == "function" ? reportError : function(r) {
    console.error(r);
  };
  function ic(r) {
    this._internalRoot = r;
  }
  As.prototype.render = ic.prototype.render = function(r) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    Bs(r, t, null, null);
  };
  As.prototype.unmount = ic.prototype.unmount = function() {
    var r = this._internalRoot;
    if (r !== null) {
      this._internalRoot = null;
      var t = r.containerInfo;
      qr(function() {
        Bs(null, r, null, null);
      }), t[a_] = null;
    }
  };
  function As(r) {
    this._internalRoot = r;
  }
  As.prototype.unstable_scheduleHydration = function(r) {
    if (r) {
      var t = ul();
      r = {
        blockedOn: null,
        target: r,
        priority: t
      };
      for (var e = 0; e < b_.length && t !== 0 && t < b_[e].priority; e++) ;
      b_.splice(e, 0, r), e === 0 && fl(r);
    }
  };
  function cc(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11);
  }
  function Hs(r) {
    return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "));
  }
  function kd() {
  }
  function ff(r, t, e, s, o) {
    if (o) {
      if (typeof s == "function") {
        var n = s;
        s = function() {
          var l = Ns(c);
          n.call(l);
        };
      }
      var c = Rp(t, s, r, 0, null, false, false, "", kd);
      return r._reactRootContainer = c, r[a_] = c.current, wo(r.nodeType === 8 ? r.parentNode : r), qr(), c;
    }
    for (; o = r.lastChild; ) r.removeChild(o);
    if (typeof s == "function") {
      var d = s;
      s = function() {
        var l = Ns(p);
        d.call(l);
      };
    }
    var p = sc(r, 0, false, null, null, false, false, "", kd);
    return r._reactRootContainer = p, r[a_] = p.current, wo(r.nodeType === 8 ? r.parentNode : r), qr(function() {
      Bs(t, p, e, s);
    }), p;
  }
  function qs(r, t, e, s, o) {
    var n = e._reactRootContainer;
    if (n) {
      var c = n;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var p = Ns(c);
          d.call(p);
        };
      }
      Bs(t, c, r, o);
    } else c = ff(e, t, r, o, s);
    return Ns(c);
  }
  ll = function(r) {
    switch (r.tag) {
      case 3:
        var t = r.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var e = An(t.pendingLanes);
          e !== 0 && (Ci(t, e | 1), Gt(t, wt()), !(X & 6) && (On = wt() + 500, vr()));
        }
        break;
      case 13:
        qr(function() {
          var s = i_(r, 1);
          if (s !== null) {
            var o = Wt();
            Ee(s, r, 1, o);
          }
        }), ac(r, 1);
    }
  };
  Oi = function(r) {
    if (r.tag === 13) {
      var t = i_(r, 134217728);
      if (t !== null) {
        var e = Wt();
        Ee(t, r, 134217728, e);
      }
      ac(r, 134217728);
    }
  };
  pl = function(r) {
    if (r.tag === 13) {
      var t = fr(r), e = i_(r, t);
      if (e !== null) {
        var s = Wt();
        Ee(e, r, t, s);
      }
      ac(r, t);
    }
  };
  ul = function() {
    return J;
  };
  wl = function(r, t) {
    var e = J;
    try {
      return J = r, t();
    } finally {
      J = e;
    }
  };
  $a = function(r, t, e) {
    switch (t) {
      case "input":
        if (Oa(r, e), t = e.name, e.type === "radio" && t != null) {
          for (e = r; e.parentNode; ) e = e.parentNode;
          for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < e.length; t++) {
            var s = e[t];
            if (s !== r && s.form === r.form) {
              var o = Ds(s);
              if (!o) throw Error(O(90));
              Ad(s), Oa(s, o);
            }
          }
        }
        break;
      case "textarea":
        qd(r, e);
        break;
      case "select":
        t = e.value, t != null && fn(r, !!e.multiple, t, false);
    }
  };
  tl = _c;
  el = qr;
  var gf = {
    usingClientEntryPoint: false,
    Events: [
      zo,
      sn,
      Ds,
      Jd,
      Gd,
      _c
    ]
  }, Qn = {
    findFiberByHostInstance: Cr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, bf = {
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
    currentDispatcherRef: d_.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(r) {
      return r = nl(r), r === null ? null : r.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || wf,
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
      Ts = Ho.inject(bf), Ie = Ho;
    } catch {
    }
  }
  se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gf;
  se.createPortal = function(r, t) {
    var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!cc(t)) throw Error(O(200));
    return uf(r, t, null, e);
  };
  se.createRoot = function(r, t) {
    if (!cc(r)) throw Error(O(299));
    var e = false, s = "", o = $p;
    return t != null && (t.unstable_strictMode === true && (e = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = sc(r, 1, false, null, null, e, false, s, o), r[a_] = t.current, wo(r.nodeType === 8 ? r.parentNode : r), new ic(t);
  };
  se.findDOMNode = function(r) {
    if (r == null) return null;
    if (r.nodeType === 1) return r;
    var t = r._reactInternals;
    if (t === void 0) throw typeof r.render == "function" ? Error(O(188)) : (r = Object.keys(r).join(","), Error(O(268, r)));
    return r = nl(t), r = r === null ? null : r.stateNode, r;
  };
  se.flushSync = function(r) {
    return qr(r);
  };
  se.hydrate = function(r, t, e) {
    if (!Hs(t)) throw Error(O(200));
    return qs(null, r, t, true, e);
  };
  se.hydrateRoot = function(r, t, e) {
    if (!cc(r)) throw Error(O(405));
    var s = e != null && e.hydratedSources || null, o = false, n = "", c = $p;
    if (e != null && (e.unstable_strictMode === true && (o = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (c = e.onRecoverableError)), t = Rp(t, null, r, 1, e ?? null, o, false, n, c), r[a_] = t.current, wo(r), s) for (r = 0; r < s.length; r++) e = s[r], o = e._getVersion, o = o(e._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      e,
      o
    ] : t.mutableSourceEagerHydrationData.push(e, o);
    return new As(t);
  };
  se.render = function(r, t, e) {
    if (!Hs(t)) throw Error(O(200));
    return qs(null, r, t, false, e);
  };
  se.unmountComponentAtNode = function(r) {
    if (!Hs(r)) throw Error(O(40));
    return r._reactRootContainer ? (qr(function() {
      qs(null, null, r, false, function() {
        r._reactRootContainer = null, r[a_] = null;
      });
    }), true) : false;
  };
  se.unstable_batchedUpdates = _c;
  se.unstable_renderSubtreeIntoContainer = function(r, t, e, s) {
    if (!Hs(e)) throw Error(O(200));
    if (r == null || r._reactInternals === void 0) throw Error(O(38));
    return qs(r, t, e, false, s);
  };
  se.version = "18.3.1-next-f1338f8080-20240426";
  function Dp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp);
    } catch (r) {
      console.error(r);
    }
  }
  Dp(), Dd.exports = se;
  var hf = Dd.exports, Ip, xd = hf;
  Ip = xd.createRoot, xd.hydrateRoot;
  const yf = "" + new URL("cardano_serialization_lib_bg-DYSGQNOE.wasm", import.meta.url).href, mf = async (r = {}, t) => {
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
  function vf(r) {
    _ = r;
  }
  const Ze = new Array(128).fill(void 0);
  Ze.push(void 0, null, true, false);
  function W(r) {
    return Ze[r];
  }
  let _o = Ze.length;
  function kf(r) {
    r < 132 || (Ze[r] = _o, _o = r);
  }
  function u(r) {
    const t = W(r);
    return kf(r), t;
  }
  const xf = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Up = new xf("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Up.decode();
  let qo = null;
  function vn() {
    return (qo === null || qo.byteLength === 0) && (qo = new Uint8Array(_.memory.buffer)), qo;
  }
  function h(r, t) {
    return r = r >>> 0, Up.decode(vn().subarray(r, r + t));
  }
  function Y(r) {
    _o === Ze.length && Ze.push(Ze.length + 1);
    const t = _o;
    return _o = Ze[t], Ze[t] = r, t;
  }
  let w = 0;
  const jf = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let as = new jf("utf-8");
  const Sf = typeof as.encodeInto == "function" ? function(r, t) {
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
      const d = as.encode(r), p = t(d.length, 1) >>> 0;
      return vn().subarray(p, p + d.length).set(d), w = d.length, p;
    }
    let s = r.length, o = t(s, 1) >>> 0;
    const n = vn();
    let c = 0;
    for (; c < s; c++) {
      const d = r.charCodeAt(c);
      if (d > 127) break;
      n[o + c] = d;
    }
    if (c !== s) {
      c !== 0 && (r = r.slice(c)), o = e(o, s, s = c + r.length * 3, 1) >>> 0;
      const d = vn().subarray(o + c, o + s), p = Sf(r, d);
      c += p.written;
    }
    return w = c, o;
  }
  function Me(r) {
    return r == null;
  }
  let Yo = null;
  function a() {
    return (Yo === null || Yo.byteLength === 0) && (Yo = new Int32Array(_.memory.buffer)), Yo;
  }
  function fi(r) {
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
      o > 0 && (n += fi(r[0]));
      for (let c = 1; c < o; c++) n += ", " + fi(r[c]);
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
  function E(r, t) {
    return r = r >>> 0, vn().subarray(r / 1, r / 1 + t);
  }
  function j(r, t) {
    const e = t(r.length * 1, 1) >>> 0;
    return vn().set(r, e / 1), w = r.length, e;
  }
  function f(r, t) {
    if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
    return r.ptr;
  }
  function l_(r, t) {
    try {
      return r.apply(this, t);
    } catch (e) {
      _.__wbindgen_exn_store(Y(e));
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
      _.__wbg_address_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.address_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Pt.__wrap(e);
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
        return Pt.__wrap(e);
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
        return Pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.address_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const k = _.__wbindgen_add_to_stack_pointer(-16);
        var o = Me(t) ? 0 : g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
        _.address_to_bech32(k, this.__wbg_ptr, o, n);
        var c = a()[k / 4 + 0], d = a()[k / 4 + 1], p = a()[k / 4 + 2], l = a()[k / 4 + 3], y = c, x = d;
        if (l) throw y = 0, x = 0, u(p);
        return e = y, s = x, h(y, x);
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
        return Pt.__wrap(e);
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
      _.__wbg_assetname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Mt.__wrap(e);
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
        return Mt.__wrap(e);
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
        return Mt.__wrap(e);
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
        return Mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    name() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetname_name(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
      _.__wbg_assetnames_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assetnames_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return y_.__wrap(e);
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
        return y_.__wrap(e);
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
        return y_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return y_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.assetnames_get(this.__wbg_ptr, t);
      return Mt.__wrap(e);
    }
    add(t) {
      f(t, Mt), _.assetnames_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_assets_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.assets_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Je.__wrap(e);
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
        return Je.__wrap(e);
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
        return Je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return Je.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Mt), f(e, L);
      const s = _.assets_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : L.__wrap(s);
    }
    get(t) {
      f(t, Mt);
      const e = _.assets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : L.__wrap(e);
    }
    keys() {
      const t = _.assets_keys(this.__wbg_ptr);
      return y_.__wrap(t);
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
      _.__wbg_auxiliarydata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return m_.__wrap(e);
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
        return m_.__wrap(e);
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
        return m_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydata_new();
      return m_.__wrap(t);
    }
    metadata() {
      const t = _.auxiliarydata_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : E_.__wrap(t);
    }
    set_metadata(t) {
      f(t, E_), _.auxiliarydata_set_metadata(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.auxiliarydata_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : oe.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, oe), _.auxiliarydata_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.auxiliarydata_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Pe.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, Pe), _.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    prefer_alonzo_format() {
      return _.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr) !== 0;
    }
    set_prefer_alonzo_format(t) {
      _.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, t);
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
      _.__wbg_auxiliarydatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.auxiliarydatahash_from_bytes(n, c, d);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        _.auxiliarydatahash_from_hex(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Nr.__wrap(e);
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
      f(e, rt), f(s, rt);
      const o = _.baseaddress_new(t, e.__wbg_ptr, s.__wbg_ptr);
      return ro.__wrap(o);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    stake_cred() {
      const t = _.baseaddress_stake_cred(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    to_address() {
      const t = _.baseaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.baseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : ro.__wrap(e);
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
      _.__wbg_bigint_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bigint_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ft.__wrap(e);
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
        return Ft.__wrap(e);
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
        return Ft.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    is_zero() {
      return _.bigint_is_zero(this.__wbg_ptr) !== 0;
    }
    as_u64() {
      const t = _.bigint_as_u64(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    as_int() {
      const t = _.bigint_as_int(this.__wbg_ptr);
      return t === 0 ? void 0 : pt.__wrap(t);
    }
    static from_str(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.bigint_from_str(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ft.__wrap(e);
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
      f(t, Ft);
      const e = _.bigint_add(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
    mul(t) {
      f(t, Ft);
      const e = _.bigint_mul(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
    static one() {
      const t = _.bigint_one();
      return Ft.__wrap(t);
    }
    increment() {
      const t = _.bigint_increment(this.__wbg_ptr);
      return Ft.__wrap(t);
    }
    div_ceil(t) {
      f(t, Ft);
      const e = _.bigint_div_ceil(this.__wbg_ptr, t.__wbg_ptr);
      return Ft.__wrap(e);
    }
  }
  class L {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(L.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return L.__wrap(e);
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
        return L.__wrap(e);
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
        return L.__wrap(e);
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
        return L.__wrap(e);
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
      return L.__wrap(t);
    }
    static one() {
      const t = _.bignum_one();
      return L.__wrap(t);
    }
    is_zero() {
      return _.bignum_is_zero(this.__wbg_ptr) !== 0;
    }
    div_floor(t) {
      f(t, L);
      const e = _.bignum_div_floor(this.__wbg_ptr, t.__wbg_ptr);
      return L.__wrap(e);
    }
    checked_mul(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, L), _.bignum_checked_mul(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, L), _.bignum_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, L), _.bignum_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return L.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, L);
      const e = _.bignum_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return L.__wrap(e);
    }
    compare(t) {
      return f(t, L), _.bignum_compare(this.__wbg_ptr, t.__wbg_ptr);
    }
    less_than(t) {
      return f(t, L), _.bignum_less_than(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    static max_value() {
      const t = _.bignum_max_value();
      return L.__wrap(t);
    }
    static max(t, e) {
      f(t, L), f(e, L);
      const s = _.bignum_max(t.__wbg_ptr, e.__wbg_ptr);
      return L.__wrap(s);
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
      _.__wbg_bootstrapwitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return v_.__wrap(e);
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
        return v_.__wrap(e);
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
        return v_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return $e.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return De.__wrap(t);
    }
    chain_code() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_chain_code(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    attributes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.bootstrapwitness_attributes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e, s, o) {
      f(t, $e), f(e, De);
      const n = j(s, _.__wbindgen_malloc), c = w, d = j(o, _.__wbindgen_malloc), p = w, l = _.bootstrapwitness_new(t.__wbg_ptr, e.__wbg_ptr, n, c, d, p);
      return v_.__wrap(l);
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
      return v_.__wrap(e);
    }
    add(t) {
      f(t, v_), _.bootstrapwitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class At {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(At.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return At.__wrap(e);
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
        return At.__wrap(e);
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
        return At.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_stake_registration(t) {
      f(t, Z_);
      const e = _.certificate_new_stake_registration(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_stake_deregistration(t) {
      f(t, K_);
      const e = _.certificate_new_stake_deregistration(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_stake_delegation(t) {
      f(t, X_);
      const e = _.certificate_new_stake_delegation(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_pool_registration(t) {
      f(t, R_);
      const e = _.certificate_new_pool_registration(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_pool_retirement(t) {
      f(t, $_);
      const e = _.certificate_new_pool_retirement(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_genesis_key_delegation(t) {
      f(t, z_);
      const e = _.certificate_new_genesis_key_delegation(t.__wbg_ptr);
      return At.__wrap(e);
    }
    static new_move_instantaneous_rewards_cert(t) {
      f(t, N_);
      const e = _.certificate_new_move_instantaneous_rewards_cert(t.__wbg_ptr);
      return At.__wrap(e);
    }
    kind() {
      return _.certificate_kind(this.__wbg_ptr) >>> 0;
    }
    as_stake_registration() {
      const t = _.certificate_as_stake_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : Z_.__wrap(t);
    }
    as_stake_deregistration() {
      const t = _.certificate_as_stake_deregistration(this.__wbg_ptr);
      return t === 0 ? void 0 : K_.__wrap(t);
    }
    as_stake_delegation() {
      const t = _.certificate_as_stake_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : X_.__wrap(t);
    }
    as_pool_registration() {
      const t = _.certificate_as_pool_registration(this.__wbg_ptr);
      return t === 0 ? void 0 : R_.__wrap(t);
    }
    as_pool_retirement() {
      const t = _.certificate_as_pool_retirement(this.__wbg_ptr);
      return t === 0 ? void 0 : $_.__wrap(t);
    }
    as_genesis_key_delegation() {
      const t = _.certificate_as_genesis_key_delegation(this.__wbg_ptr);
      return t === 0 ? void 0 : z_.__wrap(t);
    }
    as_move_instantaneous_rewards_cert() {
      const t = _.certificate_as_move_instantaneous_rewards_cert(this.__wbg_ptr);
      return t === 0 ? void 0 : N_.__wrap(t);
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
      _.__wbg_certificates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.certificates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return k_.__wrap(e);
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
        return k_.__wrap(e);
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
        return k_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return k_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.certificates_get(this.__wbg_ptr, t);
      return At.__wrap(e);
    }
    add(t) {
      f(t, At), _.certificates_add(this.__wbg_ptr, t.__wbg_ptr);
    }
  }
  class Fr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fr.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Fr.__wrap(e);
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
        return Fr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    alternative() {
      const t = _.constrplutusdata_alternative(this.__wbg_ptr);
      return L.__wrap(t);
    }
    data() {
      const t = _.constrplutusdata_data(this.__wbg_ptr);
      return ue.__wrap(t);
    }
    static new(t, e) {
      f(t, L), f(e, ue);
      const s = _.constrplutusdata_new(t.__wbg_ptr, e.__wbg_ptr);
      return Fr.__wrap(s);
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
      _.__wbg_costmodel_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmodel_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ge.__wrap(e);
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
        return Ge.__wrap(e);
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
        return Ge.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return Ge.__wrap(t);
    }
    set(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16);
        f(e, pt), _.costmodel_set(c, this.__wbg_ptr, t, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return pt.__wrap(s);
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
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
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
      _.__wbg_costmdls_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.costmdls_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Be.__wrap(e);
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
        return Be.__wrap(e);
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
        return Be.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmdls_new();
      return Be.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Ut), f(e, Ge);
      const s = _.costmdls_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Ge.__wrap(s);
    }
    get(t) {
      f(t, Ut);
      const e = _.costmdls_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Ge.__wrap(e);
    }
    keys() {
      const t = _.costmdls_keys(this.__wbg_ptr);
      return kn.__wrap(t);
    }
    retain_language_versions(t) {
      f(t, kn);
      const e = _.costmdls_retain_language_versions(this.__wbg_ptr, t.__wbg_ptr);
      return Be.__wrap(e);
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
      _.__wbg_dnsrecordaoraaaa_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordaoraaaa_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return x_.__wrap(e);
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
        return x_.__wrap(e);
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
        return x_.__wrap(e);
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
        return x_.__wrap(e);
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
      _.__wbg_dnsrecordsrv_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.dnsrecordsrv_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return j_.__wrap(e);
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
        return j_.__wrap(e);
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
        return j_.__wrap(e);
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
        return j_.__wrap(e);
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
  class Tr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Tr.prototype);
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
        return Tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return Tr.__wrap(e);
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
        return Tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class kt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kt.prototype);
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
        return kt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return kt.__wrap(e);
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
        return kt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class le {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(le.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return le.__wrap(e);
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
        return le.__wrap(e);
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
        return le.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return le.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.ed25519keyhashes_get(this.__wbg_ptr, t);
      return kt.__wrap(e);
    }
    add(t) {
      f(t, kt), _.ed25519keyhashes_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.ed25519keyhashes_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : le.__wrap(t);
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
      _.__wbg_ed25519signature_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519signature_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return De.__wrap(e);
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
        return De.__wrap(e);
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
        return De.__wrap(e);
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
      f(e, rt);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return no.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    to_address() {
      const t = _.enterpriseaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.enterpriseaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : no.__wrap(e);
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
      _.__wbg_exunitprices_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.exunitprices_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return S_.__wrap(e);
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
        return S_.__wrap(e);
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
        return S_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem_price() {
      const t = _.exunitprices_mem_price(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    step_price() {
      const t = _.exunitprices_step_price(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    static new(t, e) {
      f(t, bt), f(e, bt);
      const s = _.exunitprices_new(t.__wbg_ptr, e.__wbg_ptr);
      return S_.__wrap(s);
    }
  }
  class ee {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ee.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return ee.__wrap(e);
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
        return ee.__wrap(e);
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
        return ee.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    mem() {
      const t = _.exunits_mem(this.__wbg_ptr);
      return L.__wrap(t);
    }
    steps() {
      const t = _.exunits_steps(this.__wbg_ptr);
      return L.__wrap(t);
    }
    static new(t, e) {
      f(t, L), f(e, L);
      const s = _.exunits_new(t.__wbg_ptr, e.__wbg_ptr);
      return ee.__wrap(s);
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
      _.__wbg_generaltransactionmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.generaltransactionmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return E_.__wrap(e);
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
        return E_.__wrap(e);
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
        return E_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return E_.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, L), f(e, G);
      const s = _.generaltransactionmetadata_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : G.__wrap(s);
    }
    get(t) {
      f(t, L);
      const e = _.generaltransactionmetadata_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : G.__wrap(e);
    }
    keys() {
      const t = _.generaltransactionmetadata_keys(this.__wbg_ptr);
      return wn.__wrap(t);
    }
  }
  class Pr {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Pr.prototype);
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
        return Pr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return Pr.__wrap(e);
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
        return Pr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_genesishash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.genesishash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return je.__wrap(e);
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
        return je.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_genesishashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesishashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Sr.__wrap(e);
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
        return Sr.__wrap(e);
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
        return Sr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Sr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.genesishashes_get(this.__wbg_ptr, t);
      return je.__wrap(e);
    }
    add(t) {
      f(t, je), _.genesishashes_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_genesiskeydelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.genesiskeydelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return z_.__wrap(e);
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
        return z_.__wrap(e);
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
        return z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    genesishash() {
      const t = _.genesiskeydelegation_genesishash(this.__wbg_ptr);
      return je.__wrap(t);
    }
    genesis_delegate_hash() {
      const t = _.genesiskeydelegation_genesis_delegate_hash(this.__wbg_ptr);
      return Pr.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
      return n_.__wrap(t);
    }
    static new(t, e, s) {
      f(t, je), f(e, Pr), f(s, n_);
      const o = _.genesiskeydelegation_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return z_.__wrap(o);
    }
  }
  class pt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(pt.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return pt.__wrap(e);
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
        return pt.__wrap(e);
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
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, L);
      const e = _.int_new(t.__wbg_ptr);
      return pt.__wrap(e);
    }
    static new_negative(t) {
      f(t, L);
      const e = _.int_new_negative(t.__wbg_ptr);
      return pt.__wrap(e);
    }
    static new_i32(t) {
      const e = _.int_new_i32(t);
      return pt.__wrap(e);
    }
    is_positive() {
      return _.int_is_positive(this.__wbg_ptr) !== 0;
    }
    as_positive() {
      const t = _.int_as_positive(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    as_negative() {
      const t = _.int_as_negative(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
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
        return pt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
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
      _.__wbg_ipv4_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return C_.__wrap(e);
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
        return C_.__wrap(e);
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
        return C_.__wrap(e);
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
        return C_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv4_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
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
      _.__wbg_ipv6_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return O_.__wrap(e);
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
        return O_.__wrap(e);
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
        return O_.__wrap(e);
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
        return O_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    ip() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ipv6_ip(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_language_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.language_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ut.__wrap(e);
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
        return Ut.__wrap(e);
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
        return Ut.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_plutus_v1() {
      const t = _.language_new_plutus_v1();
      return Ut.__wrap(t);
    }
    static new_plutus_v2() {
      const t = _.language_new_plutus_v2();
      return Ut.__wrap(t);
    }
    kind() {
      return _.language_kind(this.__wbg_ptr) >>> 0;
    }
  }
  class kn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(kn.prototype);
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
      return kn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.languages_get(this.__wbg_ptr, t);
      return Ut.__wrap(e);
    }
    add(t) {
      f(t, Ut);
      var e = t.__destroy_into_raw();
      _.languages_add(this.__wbg_ptr, e);
    }
    static list() {
      const t = _.languages_list();
      return kn.__wrap(t);
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
      _.__wbg_mirtostakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.mirtostakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return L_.__wrap(e);
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
        return L_.__wrap(e);
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
        return L_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return L_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, rt), f(e, pt);
      const s = _.mirtostakecredentials_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : pt.__wrap(s);
    }
    get(t) {
      f(t, rt);
      const e = _.mirtostakecredentials_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : pt.__wrap(e);
    }
    keys() {
      const t = _.mirtostakecredentials_keys(this.__wbg_ptr);
      return zr.__wrap(t);
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
      _.__wbg_metadatalist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatalist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return ar.__wrap(e);
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
        return ar.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return ar.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.metadatalist_get(this.__wbg_ptr, t);
      return G.__wrap(e);
    }
    add(t) {
      f(t, G), _.metadatalist_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_metadatamap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.metadatamap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Rr.__wrap(e);
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
        return Rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return Rr.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, G), f(e, G);
      const s = _.metadatamap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : G.__wrap(s);
    }
    insert_str(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, G), _.metadatamap_insert_str(c, this.__wbg_ptr, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return s === 0 ? void 0 : G.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    insert_i32(t, e) {
      f(e, G);
      const s = _.metadatamap_insert_i32(this.__wbg_ptr, t, e.__wbg_ptr);
      return s === 0 ? void 0 : G.__wrap(s);
    }
    get(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, G), _.metadatamap_get(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return G.__wrap(e);
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
        return G.__wrap(e);
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
        return G.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    has(t) {
      return f(t, G), _.metadatamap_has(this.__wbg_ptr, t.__wbg_ptr) !== 0;
    }
    keys() {
      const t = _.metadatamap_keys(this.__wbg_ptr);
      return ar.__wrap(t);
    }
  }
  class Fe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Fe.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Fe.__wrap(e);
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
        return Fe.__wrap(e);
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
        return Fe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return Fe.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, yt), f(e, ir);
      const s = _.mint_new_from_entry(t.__wbg_ptr, e.__wbg_ptr);
      return Fe.__wrap(s);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, yt), f(e, ir);
      const s = _.mint_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : ir.__wrap(s);
    }
    get(t) {
      f(t, yt);
      const e = _.mint_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : ir.__wrap(e);
    }
    get_all(t) {
      f(t, yt);
      const e = _.mint_get_all(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : dc.__wrap(e);
    }
    keys() {
      const t = _.mint_keys(this.__wbg_ptr);
      return B_.__wrap(t);
    }
    as_positive_multiasset() {
      const t = _.mint_as_positive_multiasset(this.__wbg_ptr);
      return qt.__wrap(t);
    }
    as_negative_multiasset() {
      const t = _.mint_as_negative_multiasset(this.__wbg_ptr);
      return qt.__wrap(t);
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
      _.__wbg_mintassets_free(t);
    }
    static new() {
      const t = _.assets_new();
      return ir.__wrap(t);
    }
    static new_from_entry(t, e) {
      f(t, Mt), f(e, pt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_new_from_entry(t.__wbg_ptr, s);
      return ir.__wrap(o);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, Mt), f(e, pt);
      var s = e.__destroy_into_raw();
      const o = _.mintassets_insert(this.__wbg_ptr, t.__wbg_ptr, s);
      return o === 0 ? void 0 : pt.__wrap(o);
    }
    get(t) {
      f(t, Mt);
      const e = _.mintassets_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : pt.__wrap(e);
    }
    keys() {
      const t = _.mintassets_keys(this.__wbg_ptr);
      return y_.__wrap(t);
    }
  }
  class dc {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(dc.prototype);
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
      _.__wbg_moveinstantaneousreward_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousreward_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ae.__wrap(e);
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
        return Ae.__wrap(e);
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
        return Ae.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_to_other_pot(t, e) {
      f(e, L);
      const s = _.moveinstantaneousreward_new_to_other_pot(t, e.__wbg_ptr);
      return Ae.__wrap(s);
    }
    static new_to_stake_creds(t, e) {
      f(e, L_);
      const s = _.moveinstantaneousreward_new_to_stake_creds(t, e.__wbg_ptr);
      return Ae.__wrap(s);
    }
    pot() {
      return _.moveinstantaneousreward_pot(this.__wbg_ptr) >>> 0;
    }
    kind() {
      return _.moveinstantaneousreward_kind(this.__wbg_ptr) >>> 0;
    }
    as_to_other_pot() {
      const t = _.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    as_to_stake_creds() {
      const t = _.moveinstantaneousreward_as_to_stake_creds(this.__wbg_ptr);
      return t === 0 ? void 0 : L_.__wrap(t);
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
      _.__wbg_moveinstantaneousrewardscert_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.moveinstantaneousrewardscert_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return N_.__wrap(e);
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
        return N_.__wrap(e);
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
        return N_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    move_instantaneous_reward() {
      const t = _.moveinstantaneousrewardscert_move_instantaneous_reward(this.__wbg_ptr);
      return Ae.__wrap(t);
    }
    static new(t) {
      f(t, Ae);
      const e = _.moveinstantaneousrewardscert_new(t.__wbg_ptr);
      return N_.__wrap(e);
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
      _.__wbg_multiasset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multiasset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return qt.__wrap(e);
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
        return qt.__wrap(e);
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
        return qt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assets_new();
      return qt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, yt), f(e, Je);
      const s = _.multiasset_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : Je.__wrap(s);
    }
    get(t) {
      f(t, yt);
      const e = _.multiasset_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : Je.__wrap(e);
    }
    set_asset(t, e, s) {
      f(t, yt), f(e, Mt), f(s, L);
      var o = s.__destroy_into_raw();
      const n = _.multiasset_set_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr, o);
      return n === 0 ? void 0 : L.__wrap(n);
    }
    get_asset(t, e) {
      f(t, yt), f(e, Mt);
      const s = _.multiasset_get_asset(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return L.__wrap(s);
    }
    keys() {
      const t = _.multiasset_keys(this.__wbg_ptr);
      return B_.__wrap(t);
    }
    sub(t) {
      f(t, qt);
      const e = _.multiasset_sub(this.__wbg_ptr, t.__wbg_ptr);
      return qt.__wrap(e);
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
      _.__wbg_multihostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.multihostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return F_.__wrap(e);
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
        return F_.__wrap(e);
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
        return F_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    dns_name() {
      const t = _.multihostname_dns_name(this.__wbg_ptr);
      return j_.__wrap(t);
    }
    static new(t) {
      f(t, j_);
      const e = _.multihostname_new(t.__wbg_ptr);
      return F_.__wrap(e);
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
      _.__wbg_nativescript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nativescript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Dt.__wrap(e);
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
        return Dt.__wrap(e);
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
        return Dt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.nativescript_hash(this.__wbg_ptr);
      return yt.__wrap(t);
    }
    static new_script_pubkey(t) {
      f(t, H_);
      const e = _.nativescript_new_script_pubkey(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    static new_script_all(t) {
      f(t, Q_);
      const e = _.nativescript_new_script_all(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    static new_script_any(t) {
      f(t, V_);
      const e = _.nativescript_new_script_any(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    static new_script_n_of_k(t) {
      f(t, A_);
      const e = _.nativescript_new_script_n_of_k(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    static new_timelock_start(t) {
      f(t, Xe);
      const e = _.nativescript_new_timelock_start(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    static new_timelock_expiry(t) {
      f(t, Ye);
      const e = _.nativescript_new_timelock_expiry(t.__wbg_ptr);
      return Dt.__wrap(e);
    }
    kind() {
      return _.nativescript_kind(this.__wbg_ptr) >>> 0;
    }
    as_script_pubkey() {
      const t = _.nativescript_as_script_pubkey(this.__wbg_ptr);
      return t === 0 ? void 0 : H_.__wrap(t);
    }
    as_script_all() {
      const t = _.nativescript_as_script_all(this.__wbg_ptr);
      return t === 0 ? void 0 : Q_.__wrap(t);
    }
    as_script_any() {
      const t = _.nativescript_as_script_any(this.__wbg_ptr);
      return t === 0 ? void 0 : V_.__wrap(t);
    }
    as_script_n_of_k() {
      const t = _.nativescript_as_script_n_of_k(this.__wbg_ptr);
      return t === 0 ? void 0 : A_.__wrap(t);
    }
    as_timelock_start() {
      const t = _.nativescript_as_timelock_start(this.__wbg_ptr);
      return t === 0 ? void 0 : Xe.__wrap(t);
    }
    as_timelock_expiry() {
      const t = _.nativescript_as_timelock_expiry(this.__wbg_ptr);
      return t === 0 ? void 0 : Ye.__wrap(t);
    }
    get_required_signers() {
      const t = _.nativescript_get_required_signers(this.__wbg_ptr);
      return le.__wrap(t);
    }
  }
  class oe {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(oe.prototype);
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
      return oe.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.nativescripts_get(this.__wbg_ptr, t);
      return Dt.__wrap(e);
    }
    add(t) {
      f(t, Dt), _.nativescripts_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_networkid_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.networkid_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return He.__wrap(e);
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
        return He.__wrap(e);
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
        return He.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static testnet() {
      const t = _.networkid_testnet();
      return He.__wrap(t);
    }
    static mainnet() {
      const t = _.networkid_mainnet();
      return He.__wrap(t);
    }
    kind() {
      return _.networkid_kind(this.__wbg_ptr) >>> 0;
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
      _.__wbg_nonce_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.nonce_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return g_.__wrap(e);
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
        return g_.__wrap(e);
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
        return g_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_identity() {
      const t = _.nonce_new_identity();
      return g_.__wrap(t);
    }
    static new_from_hash(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.nonce_new_from_hash(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return g_.__wrap(e);
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
        return t !== 0 && (o = E(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_plutusdata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return _t.__wrap(e);
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
        return _t.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_constr_plutus_data(t) {
      f(t, Fr);
      const e = _.plutusdata_new_constr_plutus_data(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static new_empty_constr_plutus_data(t) {
      f(t, L);
      const e = _.plutusdata_new_empty_constr_plutus_data(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static new_single_value_constr_plutus_data(t, e) {
      f(t, L), f(e, _t);
      const s = _.plutusdata_new_single_value_constr_plutus_data(t.__wbg_ptr, e.__wbg_ptr);
      return _t.__wrap(s);
    }
    static new_map(t) {
      f(t, $r);
      const e = _.plutusdata_new_map(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static new_list(t) {
      f(t, ue);
      const e = _.plutusdata_new_list(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static new_integer(t) {
      f(t, Ft);
      const e = _.plutusdata_new_integer(t.__wbg_ptr);
      return _t.__wrap(e);
    }
    static new_bytes(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusdata_new_bytes(e, s);
      return _t.__wrap(o);
    }
    kind() {
      return _.plutusdata_kind(this.__wbg_ptr) >>> 0;
    }
    as_constr_plutus_data() {
      const t = _.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : Fr.__wrap(t);
    }
    as_map() {
      const t = _.plutusdata_as_map(this.__wbg_ptr);
      return t === 0 ? void 0 : $r.__wrap(t);
    }
    as_list() {
      const t = _.plutusdata_as_list(this.__wbg_ptr);
      return t === 0 ? void 0 : ue.__wrap(t);
    }
    as_integer() {
      const t = _.plutusdata_as_integer(this.__wbg_ptr);
      return t === 0 ? void 0 : Ft.__wrap(t);
    }
    as_bytes() {
      try {
        const s = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusdata_as_bytes(s, this.__wbg_ptr);
        var t = a()[s / 4 + 0], e = a()[s / 4 + 1];
        let o;
        return t !== 0 && (o = E(t, e).slice(), _.__wbindgen_free(t, e * 1)), o;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_json(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16);
        _.decode_plutus_datum_to_json_str(y, this.__wbg_ptr, t);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return _t.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_address(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, Pt), _.plutusdata_from_address(n, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return _t.__wrap(e);
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
      _.__wbg_plutuslist_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutuslist_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return ue.__wrap(e);
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
        return ue.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutuslist_new();
      return ue.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutuslist_get(this.__wbg_ptr, t);
      return _t.__wrap(e);
    }
    add(t) {
      f(t, _t), _.plutuslist_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_plutusmap_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusmap_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return $r.__wrap(e);
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
        return $r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.generaltransactionmetadata_new();
      return $r.__wrap(t);
    }
    len() {
      return _.generaltransactionmetadata_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, _t), f(e, _t);
      const s = _.plutusmap_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : _t.__wrap(s);
    }
    get(t) {
      f(t, _t);
      const e = _.plutusmap_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : _t.__wrap(e);
    }
    keys() {
      const t = _.plutusmap_keys(this.__wbg_ptr);
      return ue.__wrap(t);
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
      _.__wbg_plutusscript_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ht.__wrap(e);
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
        return Ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new(e, s);
      return Ht.__wrap(o);
    }
    static new_v2(t) {
      const e = j(t, _.__wbindgen_malloc), s = w, o = _.plutusscript_new_v2(e, s);
      return Ht.__wrap(o);
    }
    static new_with_version(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      f(e, Ut);
      const n = _.plutusscript_new_with_version(s, o, e.__wbg_ptr);
      return Ht.__wrap(n);
    }
    bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscript_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ht.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_bytes_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = j(t, _.__wbindgen_malloc), p = w;
        f(e, Ut), _.plutusscript_from_bytes_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Ht.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static from_hex_with_version(t, e) {
      try {
        const c = _.__wbindgen_add_to_stack_pointer(-16), d = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), p = w;
        f(e, Ut), _.plutusscript_from_hex_with_version(c, d, p, e.__wbg_ptr);
        var s = a()[c / 4 + 0], o = a()[c / 4 + 1], n = a()[c / 4 + 2];
        if (n) throw u(o);
        return Ht.__wrap(s);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    hash() {
      const t = _.plutusscript_hash(this.__wbg_ptr);
      return yt.__wrap(t);
    }
    language_version() {
      const t = _.plutusscript_language_version(this.__wbg_ptr);
      return Ut.__wrap(t);
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
      _.__wbg_plutusscripts_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.plutusscripts_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Pe.__wrap(e);
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
        return Pe.__wrap(e);
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
        return Pe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.plutusscripts_new();
      return Pe.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.plutusscripts_get(this.__wbg_ptr, t);
      return Ht.__wrap(e);
    }
    add(t) {
      f(t, Ht), _.plutusscripts_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_poolmetadata_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolmetadata_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return T_.__wrap(e);
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
        return T_.__wrap(e);
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
        return T_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    url() {
      const t = _.poolmetadata_url(this.__wbg_ptr);
      return jd.__wrap(t);
    }
    pool_metadata_hash() {
      const t = _.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
      return Dr.__wrap(t);
    }
    static new(t, e) {
      f(t, jd), f(e, Dr);
      const s = _.poolmetadata_new(t.__wbg_ptr, e.__wbg_ptr);
      return T_.__wrap(s);
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
      _.__wbg_poolmetadatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.poolmetadatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Dr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return Dr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_poolparams_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolparams_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return P_.__wrap(e);
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
        return P_.__wrap(e);
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
        return P_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    operator() {
      const t = _.poolparams_operator(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    vrf_keyhash() {
      const t = _.poolparams_vrf_keyhash(this.__wbg_ptr);
      return n_.__wrap(t);
    }
    pledge() {
      const t = _.poolparams_pledge(this.__wbg_ptr);
      return L.__wrap(t);
    }
    cost() {
      const t = _.poolparams_cost(this.__wbg_ptr);
      return L.__wrap(t);
    }
    margin() {
      const t = _.poolparams_margin(this.__wbg_ptr);
      return bt.__wrap(t);
    }
    reward_account() {
      const t = _.poolparams_reward_account(this.__wbg_ptr);
      return We.__wrap(t);
    }
    pool_owners() {
      const t = _.poolparams_pool_owners(this.__wbg_ptr);
      return le.__wrap(t);
    }
    relays() {
      const t = _.poolparams_relays(this.__wbg_ptr);
      return W_.__wrap(t);
    }
    pool_metadata() {
      const t = _.poolparams_pool_metadata(this.__wbg_ptr);
      return t === 0 ? void 0 : T_.__wrap(t);
    }
    static new(t, e, s, o, n, c, d, p, l) {
      f(t, kt), f(e, n_), f(s, L), f(o, L), f(n, bt), f(c, We), f(d, le), f(p, W_);
      let y = 0;
      Me(l) || (f(l, T_), y = l.__destroy_into_raw());
      const x = _.poolparams_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr, n.__wbg_ptr, c.__wbg_ptr, d.__wbg_ptr, p.__wbg_ptr, y);
      return P_.__wrap(x);
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
      _.__wbg_poolregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return R_.__wrap(e);
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
        return R_.__wrap(e);
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
        return R_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_params() {
      const t = _.poolregistration_pool_params(this.__wbg_ptr);
      return P_.__wrap(t);
    }
    static new(t) {
      f(t, P_);
      const e = _.poolregistration_new(t.__wbg_ptr);
      return R_.__wrap(e);
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
      _.__wbg_poolretirement_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.poolretirement_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return $_.__wrap(e);
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
        return $_.__wrap(e);
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
        return $_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    pool_keyhash() {
      const t = _.poolretirement_pool_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    epoch() {
      return _.poolretirement_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, kt);
      const s = _.poolretirement_new(t.__wbg_ptr, e);
      return $_.__wrap(s);
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
      _.__wbg_proposedprotocolparameterupdates_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.proposedprotocolparameterupdates_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return D_.__wrap(e);
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
        return D_.__wrap(e);
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
        return D_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return D_.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, je), f(e, t_);
      const s = _.proposedprotocolparameterupdates_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : t_.__wrap(s);
    }
    get(t) {
      f(t, je);
      const e = _.proposedprotocolparameterupdates_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : t_.__wrap(e);
    }
    keys() {
      const t = _.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
      return Sr.__wrap(t);
    }
  }
  class t_ {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(t_.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return t_.__wrap(e);
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
        return t_.__wrap(e);
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
        return t_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_minfee_a(t) {
      f(t, L), _.protocolparamupdate_set_minfee_a(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_a() {
      const t = _.protocolparamupdate_minfee_a(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    set_minfee_b(t) {
      f(t, L), _.protocolparamupdate_set_minfee_b(this.__wbg_ptr, t.__wbg_ptr);
    }
    minfee_b() {
      const t = _.protocolparamupdate_minfee_b(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
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
      f(t, L), _.protocolparamupdate_set_key_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    key_deposit() {
      const t = _.protocolparamupdate_key_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    set_pool_deposit(t) {
      f(t, L), _.protocolparamupdate_set_pool_deposit(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_deposit() {
      const t = _.protocolparamupdate_pool_deposit(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
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
      f(t, bt), _.protocolparamupdate_set_pool_pledge_influence(this.__wbg_ptr, t.__wbg_ptr);
    }
    pool_pledge_influence() {
      const t = _.protocolparamupdate_pool_pledge_influence(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    set_expansion_rate(t) {
      f(t, bt), _.protocolparamupdate_set_expansion_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    expansion_rate() {
      const t = _.protocolparamupdate_expansion_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    set_treasury_growth_rate(t) {
      f(t, bt), _.protocolparamupdate_set_treasury_growth_rate(this.__wbg_ptr, t.__wbg_ptr);
    }
    treasury_growth_rate() {
      const t = _.protocolparamupdate_treasury_growth_rate(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    d() {
      const t = _.protocolparamupdate_d(this.__wbg_ptr);
      return t === 0 ? void 0 : bt.__wrap(t);
    }
    extra_entropy() {
      const t = _.protocolparamupdate_extra_entropy(this.__wbg_ptr);
      return t === 0 ? void 0 : g_.__wrap(t);
    }
    set_protocol_version(t) {
      f(t, I_), _.protocolparamupdate_set_protocol_version(this.__wbg_ptr, t.__wbg_ptr);
    }
    protocol_version() {
      const t = _.protocolparamupdate_protocol_version(this.__wbg_ptr);
      return t === 0 ? void 0 : I_.__wrap(t);
    }
    set_min_pool_cost(t) {
      f(t, L), _.protocolparamupdate_set_min_pool_cost(this.__wbg_ptr, t.__wbg_ptr);
    }
    min_pool_cost() {
      const t = _.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    set_ada_per_utxo_byte(t) {
      f(t, L), _.protocolparamupdate_set_ada_per_utxo_byte(this.__wbg_ptr, t.__wbg_ptr);
    }
    ada_per_utxo_byte() {
      const t = _.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    set_cost_models(t) {
      f(t, Be), _.protocolparamupdate_set_cost_models(this.__wbg_ptr, t.__wbg_ptr);
    }
    cost_models() {
      const t = _.protocolparamupdate_cost_models(this.__wbg_ptr);
      return t === 0 ? void 0 : Be.__wrap(t);
    }
    set_execution_costs(t) {
      f(t, S_), _.protocolparamupdate_set_execution_costs(this.__wbg_ptr, t.__wbg_ptr);
    }
    execution_costs() {
      const t = _.protocolparamupdate_execution_costs(this.__wbg_ptr);
      return t === 0 ? void 0 : S_.__wrap(t);
    }
    set_max_tx_ex_units(t) {
      f(t, ee), _.protocolparamupdate_set_max_tx_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_tx_ex_units() {
      const t = _.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : ee.__wrap(t);
    }
    set_max_block_ex_units(t) {
      f(t, ee), _.protocolparamupdate_set_max_block_ex_units(this.__wbg_ptr, t.__wbg_ptr);
    }
    max_block_ex_units() {
      const t = _.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
      return t === 0 ? void 0 : ee.__wrap(t);
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
      return t_.__wrap(t);
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
      _.__wbg_protocolversion_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.protocolversion_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return I_.__wrap(e);
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
        return I_.__wrap(e);
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
        return I_.__wrap(e);
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
      return I_.__wrap(s);
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
      _.__wbg_publickey_free(t);
    }
    static from_bech32(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), d = w;
        _.publickey_from_bech32(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ir.__wrap(e);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    verify(t, e) {
      const s = j(t, _.__wbindgen_malloc), o = w;
      return f(e, De), _.publickey_verify(this.__wbg_ptr, s, o, e.__wbg_ptr) !== 0;
    }
    hash() {
      const t = _.publickey_hash(this.__wbg_ptr);
      return kt.__wrap(t);
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
        return Ir.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_redeemer_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemer_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return U_.__wrap(e);
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
        return U_.__wrap(e);
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
        return U_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    tag() {
      const t = _.redeemer_tag(this.__wbg_ptr);
      return ve.__wrap(t);
    }
    index() {
      const t = _.redeemer_index(this.__wbg_ptr);
      return L.__wrap(t);
    }
    data() {
      const t = _.redeemer_data(this.__wbg_ptr);
      return _t.__wrap(t);
    }
    ex_units() {
      const t = _.redeemer_ex_units(this.__wbg_ptr);
      return ee.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, ve), f(e, L), f(s, _t), f(o, ee);
      const n = _.redeemer_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, o.__wbg_ptr);
      return U_.__wrap(n);
    }
  }
  class ve {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(ve.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return ve.__wrap(e);
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
        return ve.__wrap(e);
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
        return ve.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_spend() {
      const t = _.redeemertag_new_spend();
      return ve.__wrap(t);
    }
    static new_mint() {
      const t = _.redeemertag_new_mint();
      return ve.__wrap(t);
    }
    static new_cert() {
      const t = _.redeemertag_new_cert();
      return ve.__wrap(t);
    }
    static new_reward() {
      const t = _.redeemertag_new_reward();
      return ve.__wrap(t);
    }
    kind() {
      return _.redeemertag_kind(this.__wbg_ptr) >>> 0;
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
      _.__wbg_redeemers_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return M_.__wrap(e);
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
        return M_.__wrap(e);
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
        return M_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return M_.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.redeemers_get(this.__wbg_ptr, t);
      return U_.__wrap(e);
    }
    add(t) {
      f(t, U_), _.redeemers_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_ex_units() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.redeemers_total_ex_units(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = a()[o / 4 + 2];
        if (s) throw u(e);
        return ee.__wrap(t);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class Ne {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(Ne.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ne.__wrap(e);
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
        return Ne.__wrap(e);
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
        return Ne.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_single_host_addr(t) {
      f(t, q_);
      const e = _.relay_new_single_host_addr(t.__wbg_ptr);
      return Ne.__wrap(e);
    }
    static new_single_host_name(t) {
      f(t, Y_);
      const e = _.relay_new_single_host_name(t.__wbg_ptr);
      return Ne.__wrap(e);
    }
    static new_multi_host_name(t) {
      f(t, F_);
      const e = _.relay_new_multi_host_name(t.__wbg_ptr);
      return Ne.__wrap(e);
    }
    kind() {
      return _.relay_kind(this.__wbg_ptr) >>> 0;
    }
    as_single_host_addr() {
      const t = _.relay_as_single_host_addr(this.__wbg_ptr);
      return t === 0 ? void 0 : q_.__wrap(t);
    }
    as_single_host_name() {
      const t = _.relay_as_single_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : Y_.__wrap(t);
    }
    as_multi_host_name() {
      const t = _.relay_as_multi_host_name(this.__wbg_ptr);
      return t === 0 ? void 0 : F_.__wrap(t);
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
      _.__wbg_relays_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.relays_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return W_.__wrap(e);
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
        return W_.__wrap(e);
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
        return W_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return W_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.relays_get(this.__wbg_ptr, t);
      return Ne.__wrap(e);
    }
    add(t) {
      f(t, Ne), _.relays_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_rewardaddress_free(t);
    }
    static new(t, e) {
      f(e, rt);
      const s = _.enterpriseaddress_new(t, e.__wbg_ptr);
      return We.__wrap(s);
    }
    payment_cred() {
      const t = _.baseaddress_payment_cred(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    to_address() {
      const t = _.rewardaddress_to_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    static from_address(t) {
      f(t, Pt);
      const e = _.rewardaddress_from_address(t.__wbg_ptr);
      return e === 0 ? void 0 : We.__wrap(e);
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
      _.__wbg_rewardaddresses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.rewardaddresses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Er.__wrap(e);
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
        return Er.__wrap(e);
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
        return Er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return Er.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.rewardaddresses_get(this.__wbg_ptr, t);
      return We.__wrap(e);
    }
    add(t) {
      f(t, We), _.rewardaddresses_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_scriptall_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptall_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Q_.__wrap(e);
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
        return Q_.__wrap(e);
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
        return Q_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return oe.__wrap(t);
    }
    static new(t) {
      f(t, oe);
      const e = _.scriptall_new(t.__wbg_ptr);
      return Q_.__wrap(e);
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
      _.__wbg_scriptany_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptany_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return V_.__wrap(e);
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
        return V_.__wrap(e);
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
        return V_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    native_scripts() {
      const t = _.scriptall_native_scripts(this.__wbg_ptr);
      return oe.__wrap(t);
    }
    static new(t) {
      f(t, oe);
      const e = _.scriptall_new(t.__wbg_ptr);
      return V_.__wrap(e);
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
      _.__wbg_scriptdatahash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.scriptdatahash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Ur.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return Ur.__wrap(e);
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
        return Ur.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class yt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(yt.prototype);
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
        return yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.ed25519keyhash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.ed25519keyhash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return yt.__wrap(e);
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
        return yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_scripthashes_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scripthashes_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return B_.__wrap(e);
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
        return B_.__wrap(e);
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
        return B_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return B_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.scripthashes_get(this.__wbg_ptr, t);
      return yt.__wrap(e);
    }
    add(t) {
      f(t, yt), _.scripthashes_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_scriptnofk_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptnofk_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return A_.__wrap(e);
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
        return A_.__wrap(e);
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
        return A_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    n() {
      return _.protocolversion_major(this.__wbg_ptr) >>> 0;
    }
    native_scripts() {
      const t = _.scriptnofk_native_scripts(this.__wbg_ptr);
      return oe.__wrap(t);
    }
    static new(t, e) {
      f(e, oe);
      const s = _.scriptnofk_new(t, e.__wbg_ptr);
      return A_.__wrap(s);
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
      _.__wbg_scriptpubkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptpubkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return H_.__wrap(e);
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
        return H_.__wrap(e);
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
        return H_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    addr_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    static new(t) {
      f(t, kt);
      const e = _.scriptpubkey_new(t.__wbg_ptr);
      return H_.__wrap(e);
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
      _.__wbg_scriptref_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.scriptref_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return qe.__wrap(e);
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
        return qe.__wrap(e);
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
        return qe.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_native_script(t) {
      f(t, Dt);
      const e = _.scriptref_new_native_script(t.__wbg_ptr);
      return qe.__wrap(e);
    }
    static new_plutus_script(t) {
      f(t, Ht);
      const e = _.scriptref_new_plutus_script(t.__wbg_ptr);
      return qe.__wrap(e);
    }
    is_native_script() {
      return _.scriptref_is_native_script(this.__wbg_ptr) !== 0;
    }
    is_plutus_script() {
      return _.scriptref_is_plutus_script(this.__wbg_ptr) !== 0;
    }
    native_script() {
      const t = _.scriptref_native_script(this.__wbg_ptr);
      return t === 0 ? void 0 : Dt.__wrap(t);
    }
    plutus_script() {
      const t = _.scriptref_plutus_script(this.__wbg_ptr);
      return t === 0 ? void 0 : Ht.__wrap(t);
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
      _.__wbg_singlehostaddr_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostaddr_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return q_.__wrap(e);
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
        return q_.__wrap(e);
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
        return q_.__wrap(e);
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
      return t === 0 ? void 0 : C_.__wrap(t);
    }
    ipv6() {
      const t = _.singlehostaddr_ipv6(this.__wbg_ptr);
      return t === 0 ? void 0 : O_.__wrap(t);
    }
    static new(t, e, s) {
      let o = 0;
      Me(e) || (f(e, C_), o = e.__destroy_into_raw());
      let n = 0;
      Me(s) || (f(s, O_), n = s.__destroy_into_raw());
      const c = _.singlehostaddr_new(Me(t) ? 16777215 : t, o, n);
      return q_.__wrap(c);
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
      _.__wbg_singlehostname_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.singlehostname_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Y_.__wrap(e);
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
        return Y_.__wrap(e);
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
        return Y_.__wrap(e);
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
      return x_.__wrap(t);
    }
    static new(t, e) {
      f(e, x_);
      const s = _.singlehostname_new(Me(t) ? 16777215 : t, e.__wbg_ptr);
      return Y_.__wrap(s);
    }
  }
  class rt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(rt.prototype);
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
      f(t, kt);
      const e = _.stakecredential_from_keyhash(t.__wbg_ptr);
      return rt.__wrap(e);
    }
    static from_scripthash(t) {
      f(t, yt);
      const e = _.stakecredential_from_scripthash(t.__wbg_ptr);
      return rt.__wrap(e);
    }
    to_keyhash() {
      const t = _.stakecredential_to_keyhash(this.__wbg_ptr);
      return t === 0 ? void 0 : kt.__wrap(t);
    }
    to_scripthash() {
      const t = _.stakecredential_to_scripthash(this.__wbg_ptr);
      return t === 0 ? void 0 : yt.__wrap(t);
    }
    kind() {
      return _.stakecredential_kind(this.__wbg_ptr) >>> 0;
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredential_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return rt.__wrap(e);
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
        return rt.__wrap(e);
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
        return rt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_stakecredentials_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakecredentials_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return zr.__wrap(e);
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
        return zr.__wrap(e);
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
        return zr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.ed25519keyhashes_new();
      return zr.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.stakecredentials_get(this.__wbg_ptr, t);
      return rt.__wrap(e);
    }
    add(t) {
      f(t, rt), _.stakecredentials_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_stakedelegation_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakedelegation_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return X_.__wrap(e);
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
        return X_.__wrap(e);
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
        return X_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakedelegation_stake_credential(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    pool_keyhash() {
      const t = _.scriptpubkey_addr_keyhash(this.__wbg_ptr);
      return kt.__wrap(t);
    }
    static new(t, e) {
      f(t, rt), f(e, kt);
      const s = _.stakedelegation_new(t.__wbg_ptr, e.__wbg_ptr);
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
      _.__wbg_stakederegistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakederegistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return K_.__wrap(e);
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
        return K_.__wrap(e);
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
        return K_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    static new(t) {
      f(t, rt);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return K_.__wrap(e);
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
      _.__wbg_stakeregistration_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.stakeregistration_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Z_.__wrap(e);
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
        return Z_.__wrap(e);
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
        return Z_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    stake_credential() {
      const t = _.stakederegistration_stake_credential(this.__wbg_ptr);
      return rt.__wrap(t);
    }
    static new(t) {
      f(t, rt);
      const e = _.stakederegistration_new(t.__wbg_ptr);
      return Z_.__wrap(e);
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
      _.__wbg_timelockexpiry_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockexpiry_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ye.__wrap(e);
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
        return Ye.__wrap(e);
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
        return Ye.__wrap(e);
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
      return L.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Ye.__wrap(e);
    }
    static new_timelockexpiry(t) {
      f(t, L);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Ye.__wrap(e);
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
      _.__wbg_timelockstart_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.timelockstart_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Xe.__wrap(e);
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
        return Xe.__wrap(e);
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
        return Xe.__wrap(e);
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
      return L.__wrap(t);
    }
    static new(t) {
      const e = _.timelockexpiry_new(t);
      return Xe.__wrap(e);
    }
    static new_timelockstart(t) {
      f(t, L);
      const e = _.timelockexpiry_new_timelockexpiry(t.__wbg_ptr);
      return Xe.__wrap(e);
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
      _.__wbg_transaction_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transaction_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return J_.__wrap(e);
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
        return J_.__wrap(e);
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
        return J_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    body() {
      const t = _.transaction_body(this.__wbg_ptr);
      return Ke.__wrap(t);
    }
    witness_set() {
      const t = _.transaction_witness_set(this.__wbg_ptr);
      return tr.__wrap(t);
    }
    is_valid() {
      return _.transaction_is_valid(this.__wbg_ptr) !== 0;
    }
    auxiliary_data() {
      const t = _.transaction_auxiliary_data(this.__wbg_ptr);
      return t === 0 ? void 0 : m_.__wrap(t);
    }
    set_is_valid(t) {
      _.transaction_set_is_valid(this.__wbg_ptr, t);
    }
    static new(t, e, s) {
      f(t, Ke), f(e, tr);
      let o = 0;
      Me(s) || (f(s, m_), o = s.__destroy_into_raw());
      const n = _.transaction_new(t.__wbg_ptr, e.__wbg_ptr, o);
      return J_.__wrap(n);
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
      _.__wbg_transactionbody_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionbody_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Ke.__wrap(e);
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
        return Ke.__wrap(e);
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
        return Ke.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    inputs() {
      const t = _.transactionbody_inputs(this.__wbg_ptr);
      return Yt.__wrap(t);
    }
    outputs() {
      const t = _.transactionbody_outputs(this.__wbg_ptr);
      return e_.__wrap(t);
    }
    fee() {
      const t = _.transactionbody_fee(this.__wbg_ptr);
      return L.__wrap(t);
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
      return t === 0 ? void 0 : L.__wrap(t);
    }
    set_ttl(t) {
      f(t, L), _.transactionbody_set_ttl(this.__wbg_ptr, t.__wbg_ptr);
    }
    remove_ttl() {
      _.transactionbody_remove_ttl(this.__wbg_ptr);
    }
    set_certs(t) {
      f(t, k_), _.transactionbody_set_certs(this.__wbg_ptr, t.__wbg_ptr);
    }
    certs() {
      const t = _.transactionbody_certs(this.__wbg_ptr);
      return t === 0 ? void 0 : k_.__wrap(t);
    }
    set_withdrawals(t) {
      f(t, nr), _.transactionbody_set_withdrawals(this.__wbg_ptr, t.__wbg_ptr);
    }
    withdrawals() {
      const t = _.transactionbody_withdrawals(this.__wbg_ptr);
      return t === 0 ? void 0 : nr.__wrap(t);
    }
    set_update(t) {
      f(t, er), _.transactionbody_set_update(this.__wbg_ptr, t.__wbg_ptr);
    }
    update() {
      const t = _.transactionbody_update(this.__wbg_ptr);
      return t === 0 ? void 0 : er.__wrap(t);
    }
    set_auxiliary_data_hash(t) {
      f(t, Nr), _.transactionbody_set_auxiliary_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    auxiliary_data_hash() {
      const t = _.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Nr.__wrap(t);
    }
    set_validity_start_interval(t) {
      _.transactionbody_set_validity_start_interval(this.__wbg_ptr, t);
    }
    set_validity_start_interval_bignum(t) {
      f(t, L);
      var e = t.__destroy_into_raw();
      _.transactionbody_set_validity_start_interval_bignum(this.__wbg_ptr, e);
    }
    validity_start_interval_bignum() {
      const t = _.transactionbody_validity_start_interval_bignum(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
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
      f(t, Fe), _.transactionbody_set_mint(this.__wbg_ptr, t.__wbg_ptr);
    }
    mint() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Fe.__wrap(t);
    }
    multiassets() {
      const t = _.transactionbody_mint(this.__wbg_ptr);
      return t === 0 ? void 0 : Fe.__wrap(t);
    }
    set_reference_inputs(t) {
      f(t, Yt), _.transactionbody_set_reference_inputs(this.__wbg_ptr, t.__wbg_ptr);
    }
    reference_inputs() {
      const t = _.transactionbody_reference_inputs(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
    set_script_data_hash(t) {
      f(t, Ur), _.transactionbody_set_script_data_hash(this.__wbg_ptr, t.__wbg_ptr);
    }
    script_data_hash() {
      const t = _.transactionbody_script_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Ur.__wrap(t);
    }
    set_collateral(t) {
      f(t, Yt), _.transactionbody_set_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral() {
      const t = _.transactionbody_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
    set_required_signers(t) {
      f(t, le), _.transactionbody_set_required_signers(this.__wbg_ptr, t.__wbg_ptr);
    }
    required_signers() {
      const t = _.transactionbody_required_signers(this.__wbg_ptr);
      return t === 0 ? void 0 : le.__wrap(t);
    }
    set_network_id(t) {
      f(t, He), _.transactionbody_set_network_id(this.__wbg_ptr, t.__wbg_ptr);
    }
    network_id() {
      const t = _.transactionbody_network_id(this.__wbg_ptr);
      return t === 0 ? void 0 : He.__wrap(t);
    }
    set_collateral_return(t) {
      f(t, Re), _.transactionbody_set_collateral_return(this.__wbg_ptr, t.__wbg_ptr);
    }
    collateral_return() {
      const t = _.transactionbody_collateral_return(this.__wbg_ptr);
      return t === 0 ? void 0 : Re.__wrap(t);
    }
    set_total_collateral(t) {
      f(t, L), _.transactionbody_set_total_collateral(this.__wbg_ptr, t.__wbg_ptr);
    }
    total_collateral() {
      const t = _.transactionbody_total_collateral(this.__wbg_ptr);
      return t === 0 ? void 0 : L.__wrap(t);
    }
    static new(t, e, s, o) {
      f(t, Yt), f(e, e_), f(s, L);
      const n = _.transactionbody_new(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr, !Me(o), Me(o) ? 0 : o);
      return Ke.__wrap(n);
    }
    static new_tx_body(t, e, s) {
      f(t, Yt), f(e, e_), f(s, L);
      const o = _.transactionbody_new_tx_body(t.__wbg_ptr, e.__wbg_ptr, s.__wbg_ptr);
      return Ke.__wrap(o);
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
      _.__wbg_transactionhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return Mr.__wrap(e);
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
        return Mr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
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
      _.__wbg_transactioninput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return G_.__wrap(e);
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
        return G_.__wrap(e);
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
        return G_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    transaction_id() {
      const t = _.transactioninput_transaction_id(this.__wbg_ptr);
      return Mr.__wrap(t);
    }
    index() {
      return _.transactioninput_index(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, Mr);
      const s = _.transactioninput_new(t.__wbg_ptr, e);
      return G_.__wrap(s);
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
      _.__wbg_transactioninputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactioninputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Yt.__wrap(e);
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
        return Yt.__wrap(e);
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
        return Yt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.assetnames_new();
      return Yt.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactioninputs_get(this.__wbg_ptr, t);
      return G_.__wrap(e);
    }
    add(t) {
      f(t, G_), _.transactioninputs_add(this.__wbg_ptr, t.__wbg_ptr);
    }
    to_option() {
      const t = _.transactioninputs_to_option(this.__wbg_ptr);
      return t === 0 ? void 0 : Yt.__wrap(t);
    }
  }
  class G {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(G.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return G.__wrap(e);
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
        return G.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new_map(t) {
      f(t, Rr);
      const e = _.transactionmetadatum_new_map(t.__wbg_ptr);
      return G.__wrap(e);
    }
    static new_list(t) {
      f(t, ar);
      const e = _.transactionmetadatum_new_list(t.__wbg_ptr);
      return G.__wrap(e);
    }
    static new_int(t) {
      f(t, pt);
      const e = _.transactionmetadatum_new_int(t.__wbg_ptr);
      return G.__wrap(e);
    }
    static new_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.transactionmetadatum_new_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return G.__wrap(e);
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
        return G.__wrap(e);
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
        return Rr.__wrap(t);
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
        return ar.__wrap(t);
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
        return pt.__wrap(t);
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
        var n = E(t, e).slice();
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
  class wn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(wn.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return wn.__wrap(e);
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
        return wn.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.costmodel_new();
      return wn.__wrap(t);
    }
    len() {
      return _.costmdls_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionmetadatumlabels_get(this.__wbg_ptr, t);
      return L.__wrap(e);
    }
    add(t) {
      f(t, L), _.transactionmetadatumlabels_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_transactionoutput_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutput_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return Re.__wrap(e);
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
        return Re.__wrap(e);
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
        return Re.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    address() {
      const t = _.transactionoutput_address(this.__wbg_ptr);
      return Pt.__wrap(t);
    }
    amount() {
      const t = _.transactionoutput_amount(this.__wbg_ptr);
      return mt.__wrap(t);
    }
    data_hash() {
      const t = _.transactionoutput_data_hash(this.__wbg_ptr);
      return t === 0 ? void 0 : Tr.__wrap(t);
    }
    plutus_data() {
      const t = _.transactionoutput_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : _t.__wrap(t);
    }
    script_ref() {
      const t = _.transactionoutput_script_ref(this.__wbg_ptr);
      return t === 0 ? void 0 : qe.__wrap(t);
    }
    set_script_ref(t) {
      f(t, qe), _.transactionoutput_set_script_ref(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_plutus_data(t) {
      f(t, _t), _.transactionoutput_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    set_data_hash(t) {
      f(t, Tr), _.transactionoutput_set_data_hash(this.__wbg_ptr, t.__wbg_ptr);
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
      f(t, Pt), f(e, mt);
      const s = _.transactionoutput_new(t.__wbg_ptr, e.__wbg_ptr);
      return Re.__wrap(s);
    }
    serialization_format() {
      const t = _.transactionoutput_serialization_format(this.__wbg_ptr);
      return t === 2 ? void 0 : t;
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
      _.__wbg_transactionoutputs_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionoutputs_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return e_.__wrap(e);
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
        return e_.__wrap(e);
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
        return e_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.certificates_new();
      return e_.__wrap(t);
    }
    len() {
      return _.assetnames_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.transactionoutputs_get(this.__wbg_ptr, t);
      return Re.__wrap(e);
    }
    add(t) {
      f(t, Re), _.transactionoutputs_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_transactionwitnessset_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.transactionwitnessset_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return tr.__wrap(e);
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
        return tr.__wrap(e);
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
        return tr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    set_vkeys(t) {
      f(t, rr), _.transactionwitnessset_set_vkeys(this.__wbg_ptr, t.__wbg_ptr);
    }
    vkeys() {
      const t = _.transactionwitnessset_vkeys(this.__wbg_ptr);
      return t === 0 ? void 0 : rr.__wrap(t);
    }
    set_native_scripts(t) {
      f(t, oe), _.transactionwitnessset_set_native_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    native_scripts() {
      const t = _.transactionwitnessset_native_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : oe.__wrap(t);
    }
    set_bootstraps(t) {
      f(t, xo), _.transactionwitnessset_set_bootstraps(this.__wbg_ptr, t.__wbg_ptr);
    }
    bootstraps() {
      const t = _.transactionwitnessset_bootstraps(this.__wbg_ptr);
      return t === 0 ? void 0 : xo.__wrap(t);
    }
    set_plutus_scripts(t) {
      f(t, Pe), _.transactionwitnessset_set_plutus_scripts(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_scripts() {
      const t = _.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
      return t === 0 ? void 0 : Pe.__wrap(t);
    }
    set_plutus_data(t) {
      f(t, ue), _.transactionwitnessset_set_plutus_data(this.__wbg_ptr, t.__wbg_ptr);
    }
    plutus_data() {
      const t = _.transactionwitnessset_plutus_data(this.__wbg_ptr);
      return t === 0 ? void 0 : ue.__wrap(t);
    }
    set_redeemers(t) {
      f(t, M_), _.transactionwitnessset_set_redeemers(this.__wbg_ptr, t.__wbg_ptr);
    }
    redeemers() {
      const t = _.transactionwitnessset_redeemers(this.__wbg_ptr);
      return t === 0 ? void 0 : M_.__wrap(t);
    }
    static new() {
      const t = _.transactionwitnessset_new();
      return tr.__wrap(t);
    }
  }
  let jd = class tn {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(tn.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return tn.__wrap(e);
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
        return tn.__wrap(e);
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
        return tn.__wrap(e);
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
        return tn.__wrap(e);
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
  class bt {
    static __wrap(t) {
      t = t >>> 0;
      const e = Object.create(bt.prototype);
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
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return bt.__wrap(e);
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
        return bt.__wrap(e);
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
        return bt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    numerator() {
      const t = _.timelockexpiry_slot_bignum(this.__wbg_ptr);
      return L.__wrap(t);
    }
    denominator() {
      const t = _.unitinterval_denominator(this.__wbg_ptr);
      return L.__wrap(t);
    }
    static new(t, e) {
      f(t, L), f(e, L);
      const s = _.unitinterval_new(t.__wbg_ptr, e.__wbg_ptr);
      return bt.__wrap(s);
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
      _.__wbg_update_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.update_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return er.__wrap(e);
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
        return er.__wrap(e);
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
        return er.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    proposed_protocol_parameter_updates() {
      const t = _.update_proposed_protocol_parameter_updates(this.__wbg_ptr);
      return D_.__wrap(t);
    }
    epoch() {
      return _.update_epoch(this.__wbg_ptr) >>> 0;
    }
    static new(t, e) {
      f(t, D_);
      const s = _.update_new(t.__wbg_ptr, e);
      return er.__wrap(s);
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
      _.__wbg_vrfkeyhash_free(t);
    }
    static from_bytes(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16), c = j(t, _.__wbindgen_malloc), d = w;
        _.vrfkeyhash_from_bytes(n, c, d);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return n_.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.auxiliarydatahash_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
        return _.__wbindgen_free(t, e * 1), s;
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    to_bech32(t) {
      let e, s;
      try {
        const y = _.__wbindgen_add_to_stack_pointer(-16), x = g(t, _.__wbindgen_malloc, _.__wbindgen_realloc), k = w;
        _.auxiliarydatahash_to_bech32(y, this.__wbg_ptr, x, k);
        var o = a()[y / 4 + 0], n = a()[y / 4 + 1], c = a()[y / 4 + 2], d = a()[y / 4 + 3], p = o, l = n;
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
        return n_.__wrap(e);
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
        return n_.__wrap(e);
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
      _.__wbg_value_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.value_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return mt.__wrap(e);
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
        return mt.__wrap(e);
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
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, L);
      const e = _.value_new(t.__wbg_ptr);
      return mt.__wrap(e);
    }
    static new_from_assets(t) {
      f(t, qt);
      const e = _.value_new_from_assets(t.__wbg_ptr);
      return mt.__wrap(e);
    }
    static new_with_assets(t, e) {
      f(t, L), f(e, qt);
      const s = _.value_new_with_assets(t.__wbg_ptr, e.__wbg_ptr);
      return mt.__wrap(s);
    }
    static zero() {
      const t = _.value_zero();
      return mt.__wrap(t);
    }
    is_zero() {
      return _.value_is_zero(this.__wbg_ptr) !== 0;
    }
    coin() {
      const t = _.value_coin(this.__wbg_ptr);
      return L.__wrap(t);
    }
    set_coin(t) {
      f(t, L), _.value_set_coin(this.__wbg_ptr, t.__wbg_ptr);
    }
    multiasset() {
      const t = _.value_multiasset(this.__wbg_ptr);
      return t === 0 ? void 0 : qt.__wrap(t);
    }
    set_multiasset(t) {
      f(t, qt), _.value_set_multiasset(this.__wbg_ptr, t.__wbg_ptr);
    }
    checked_add(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, mt), _.value_checked_add(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    checked_sub(t) {
      try {
        const n = _.__wbindgen_add_to_stack_pointer(-16);
        f(t, mt), _.value_checked_sub(n, this.__wbg_ptr, t.__wbg_ptr);
        var e = a()[n / 4 + 0], s = a()[n / 4 + 1], o = a()[n / 4 + 2];
        if (o) throw u(s);
        return mt.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    clamped_sub(t) {
      f(t, mt);
      const e = _.value_clamped_sub(this.__wbg_ptr, t.__wbg_ptr);
      return mt.__wrap(e);
    }
    compare(t) {
      f(t, mt);
      const e = _.value_compare(this.__wbg_ptr, t.__wbg_ptr);
      return e === 16777215 ? void 0 : e;
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
      _.__wbg_vkey_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkey_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return $e.__wrap(e);
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
        return $e.__wrap(e);
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
        return $e.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t) {
      f(t, Ir);
      const e = _.vkey_new(t.__wbg_ptr);
      return $e.__wrap(e);
    }
    public_key() {
      const t = _.vkey_public_key(this.__wbg_ptr);
      return Ir.__wrap(t);
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
      _.__wbg_vkeywitness_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitness_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return _r.__wrap(e);
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
        return _r.__wrap(e);
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
        return _r.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new(t, e) {
      f(t, $e), f(e, De);
      const s = _.vkeywitness_new(t.__wbg_ptr, e.__wbg_ptr);
      return _r.__wrap(s);
    }
    vkey() {
      const t = _.bootstrapwitness_vkey(this.__wbg_ptr);
      return $e.__wrap(t);
    }
    signature() {
      const t = _.bootstrapwitness_signature(this.__wbg_ptr);
      return De.__wrap(t);
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
      _.__wbg_vkeywitnesses_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.vkeywitnesses_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return rr.__wrap(e);
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
        return rr.__wrap(e);
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
        return rr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.publickeys_new();
      return rr.__wrap(t);
    }
    len() {
      return _.bootstrapwitnesses_len(this.__wbg_ptr) >>> 0;
    }
    get(t) {
      const e = _.vkeywitnesses_get(this.__wbg_ptr, t);
      return _r.__wrap(e);
    }
    add(t) {
      f(t, _r), _.vkeywitnesses_add(this.__wbg_ptr, t.__wbg_ptr);
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
      _.__wbg_withdrawals_free(t);
    }
    to_bytes() {
      try {
        const o = _.__wbindgen_add_to_stack_pointer(-16);
        _.withdrawals_to_bytes(o, this.__wbg_ptr);
        var t = a()[o / 4 + 0], e = a()[o / 4 + 1], s = E(t, e).slice();
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
        return nr.__wrap(e);
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
        return nr.__wrap(e);
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
        return nr.__wrap(e);
      } finally {
        _.__wbindgen_add_to_stack_pointer(16);
      }
    }
    static new() {
      const t = _.auxiliarydataset_new();
      return nr.__wrap(t);
    }
    len() {
      return _.auxiliarydataset_len(this.__wbg_ptr) >>> 0;
    }
    insert(t, e) {
      f(t, We), f(e, L);
      const s = _.withdrawals_insert(this.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr);
      return s === 0 ? void 0 : L.__wrap(s);
    }
    get(t) {
      f(t, We);
      const e = _.withdrawals_get(this.__wbg_ptr, t.__wbg_ptr);
      return e === 0 ? void 0 : L.__wrap(e);
    }
    keys() {
      const t = _.withdrawals_keys(this.__wbg_ptr);
      return Er.__wrap(t);
    }
  }
  function Ef(r) {
    u(r);
  }
  function zf(r, t) {
    const e = h(r, t);
    return Y(e);
  }
  function Cf(r, t) {
    const e = new Error(h(r, t));
    return Y(e);
  }
  function Of(r, t) {
    const e = W(t), s = typeof e == "string" ? e : void 0;
    var o = Me(s) ? 0 : g(s, _.__wbindgen_malloc, _.__wbindgen_realloc), n = w;
    a()[r / 4 + 1] = n, a()[r / 4 + 0] = o;
  }
  function Lf(r) {
    return Y(r);
  }
  function Nf(r) {
    const t = W(r);
    return Y(t);
  }
  function Ff(r) {
    const t = W(r);
    return typeof t == "object" && t !== null;
  }
  function Tf(r, t, e) {
    W(r)[u(t)] = u(e);
  }
  function Pf(r, t) {
    const e = String(W(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function Rf() {
    return l_(function(r, t) {
      W(r).randomFillSync(u(t));
    }, arguments);
  }
  function $f() {
    return l_(function(r, t) {
      W(r).getRandomValues(W(t));
    }, arguments);
  }
  function Df(r) {
    const t = W(r).crypto;
    return Y(t);
  }
  function If(r) {
    const t = W(r).process;
    return Y(t);
  }
  function Uf(r) {
    const t = W(r).versions;
    return Y(t);
  }
  function Mf(r) {
    const t = W(r).node;
    return Y(t);
  }
  function Wf(r) {
    return typeof W(r) == "string";
  }
  function Qf() {
    return l_(function() {
      const r = module.require;
      return Y(r);
    }, arguments);
  }
  function Vf(r) {
    const t = W(r).msCrypto;
    return Y(t);
  }
  function Bf() {
    const r = new Array();
    return Y(r);
  }
  function Af(r) {
    return typeof W(r) == "function";
  }
  function Hf(r, t) {
    const e = new Function(h(r, t));
    return Y(e);
  }
  function qf() {
    return Y(/* @__PURE__ */ new Map());
  }
  function Yf() {
    return l_(function(r, t) {
      const e = W(r).call(W(t));
      return Y(e);
    }, arguments);
  }
  function Xf() {
    const r = new Object();
    return Y(r);
  }
  function Kf() {
    return l_(function() {
      const r = self.self;
      return Y(r);
    }, arguments);
  }
  function Zf() {
    return l_(function() {
      const r = window.window;
      return Y(r);
    }, arguments);
  }
  function Jf() {
    return l_(function() {
      const r = globalThis.globalThis;
      return Y(r);
    }, arguments);
  }
  function Gf() {
    return l_(function() {
      const r = global.global;
      return Y(r);
    }, arguments);
  }
  function tg(r) {
    return W(r) === void 0;
  }
  function eg(r, t, e) {
    W(r)[t >>> 0] = u(e);
  }
  function _g() {
    return l_(function(r, t, e) {
      const s = W(r).call(W(t), W(e));
      return Y(s);
    }, arguments);
  }
  function rg(r, t, e) {
    const s = W(r).set(W(t), W(e));
    return Y(s);
  }
  function ng(r) {
    const t = W(r).buffer;
    return Y(t);
  }
  function og(r, t, e) {
    const s = new Uint8Array(W(r), t >>> 0, e >>> 0);
    return Y(s);
  }
  function sg(r) {
    const t = new Uint8Array(W(r));
    return Y(t);
  }
  function ag(r, t, e) {
    W(r).set(W(t), e >>> 0);
  }
  function ig(r) {
    const t = new Uint8Array(r >>> 0);
    return Y(t);
  }
  function cg(r, t, e) {
    const s = W(r).subarray(t >>> 0, e >>> 0);
    return Y(s);
  }
  function dg(r, t) {
    const e = new Function(h(r, t));
    return Y(e);
  }
  function lg(r, t) {
    const e = W(r).call(W(t));
    return Y(e);
  }
  function pg(r, t) {
    return W(r) === W(t);
  }
  function ug(r) {
    const t = W(r).self;
    return Y(t);
  }
  function wg(r) {
    const t = W(r).crypto;
    return Y(t);
  }
  function fg(r) {
    const t = W(r).getRandomValues;
    return Y(t);
  }
  function gg(r, t) {
    const e = require(h(r, t));
    return Y(e);
  }
  function bg(r, t, e) {
    W(r).randomFillSync(E(t, e));
  }
  function hg(r, t, e) {
    W(r).getRandomValues(E(t, e));
  }
  function yg(r, t) {
    const e = fi(W(t)), s = g(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = w;
    a()[r / 4 + 1] = o, a()[r / 4 + 0] = s;
  }
  function mg(r, t) {
    throw new Error(h(r, t));
  }
  function vg() {
    const r = _.memory;
    return Y(r);
  }
  URL = globalThis.URL;
  const i = await mf({
    "./cardano_serialization_lib_bg.js": {
      __wbindgen_object_drop_ref: Ef,
      __wbindgen_string_new: zf,
      __wbindgen_error_new: Cf,
      __wbindgen_string_get: Of,
      __wbindgen_number_new: Lf,
      __wbindgen_object_clone_ref: Nf,
      __wbindgen_is_object: Ff,
      __wbg_set_20cbc34131e76824: Tf,
      __wbg_String_91fba7ded13ba54c: Pf,
      __wbg_randomFillSync_dc1e9a60c158336d: Rf,
      __wbg_getRandomValues_37fa2ca9e4e07fab: $f,
      __wbg_crypto_c48a774b022d20ac: Df,
      __wbg_process_298734cf255a885d: If,
      __wbg_versions_e2e78e134e3e5d01: Uf,
      __wbg_node_1cd7a5d853dbea79: Mf,
      __wbindgen_is_string: Wf,
      __wbg_require_8f08ceecec0f4fee: Qf,
      __wbg_msCrypto_bcb970640f50a1e8: Vf,
      __wbg_new_1d9a920c6bfc44a8: Bf,
      __wbindgen_is_function: Af,
      __wbg_newnoargs_b5b063fc6c2f0376: Hf,
      __wbg_new_268f7b7dd3430798: qf,
      __wbg_call_97ae9d8645dc388b: Yf,
      __wbg_new_0b9bfdd97583284e: Xf,
      __wbg_self_6d479506f72c6a71: Kf,
      __wbg_window_f2557cc78490aceb: Zf,
      __wbg_globalThis_7f206bda628d5286: Jf,
      __wbg_global_ba75c50d1cf384f4: Gf,
      __wbindgen_is_undefined: tg,
      __wbg_set_a68214f35c417fa9: eg,
      __wbg_call_168da88779e35f61: _g,
      __wbg_set_933729cf5b66ac11: rg,
      __wbg_buffer_3f3d764d4747d564: ng,
      __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: og,
      __wbg_new_8c3f0052272a457a: sg,
      __wbg_set_83db9690f9353e79: ag,
      __wbg_newwithlength_f5933855e4f48a19: ig,
      __wbg_subarray_58ad4efbb5bcb886: cg,
      __wbg_new_d87f272aec784ec0: dg,
      __wbg_call_eae29933372a39be: lg,
      __wbindgen_jsval_eq: pg,
      __wbg_self_e0b3266d2d9eba1a: ug,
      __wbg_crypto_e95a6e54c5c2e37f: wg,
      __wbg_getRandomValues_dc67302a7bd1aec5: fg,
      __wbg_require_0993fe224bf8e202: gg,
      __wbg_randomFillSync_dd2297de5917c74e: bg,
      __wbg_getRandomValues_02639197c8166a96: hg,
      __wbindgen_debug_string: yg,
      __wbindgen_throw: mg,
      __wbindgen_memory: vg
    }
  }, yf), kg = i.memory, xg = i.unitinterval_to_bytes, jg = i.unitinterval_from_bytes, Sg = i.unitinterval_to_hex, Eg = i.unitinterval_from_hex, zg = i.unitinterval_to_json, Cg = i.unitinterval_to_js_value, Og = i.unitinterval_from_json, Lg = i.unitinterval_denominator, Ng = i.unitinterval_new, Fg = i.__wbg_transaction_free, Tg = i.transaction_to_bytes, Pg = i.transaction_from_bytes, Rg = i.transaction_to_hex, $g = i.transaction_from_hex, Dg = i.transaction_to_json, Ig = i.transaction_to_js_value, Ug = i.transaction_from_json, Mg = i.transaction_body, Wg = i.transaction_witness_set, Qg = i.transaction_is_valid, Vg = i.transaction_auxiliary_data, Bg = i.transaction_set_is_valid, Ag = i.transaction_new, Hg = i.__wbg_transactioninputs_free, qg = i.transactioninputs_to_bytes, Yg = i.transactioninputs_from_bytes, Xg = i.transactioninputs_to_hex, Kg = i.transactioninputs_from_hex, Zg = i.transactioninputs_to_json, Jg = i.transactioninputs_to_js_value, Gg = i.transactioninputs_from_json, tb = i.transactioninputs_get, eb = i.transactioninputs_add, _b = i.transactioninputs_to_option, rb = i.__wbg_transactionoutputs_free, nb = i.transactionoutputs_to_bytes, ob = i.transactionoutputs_from_bytes, sb = i.transactionoutputs_to_hex, ab = i.transactionoutputs_from_hex, ib = i.transactionoutputs_to_json, cb = i.transactionoutputs_to_js_value, db = i.transactionoutputs_from_json, lb = i.transactionoutputs_get, pb = i.transactionoutputs_add, ub = i.__wbg_datacost_free, wb = i.datacost_new_coins_per_word, fb = i.datacost_new_coins_per_byte, gb = i.datacost_coins_per_byte, bb = i.__wbg_certificates_free, hb = i.certificates_to_bytes, yb = i.certificates_from_bytes, mb = i.certificates_to_hex, vb = i.certificates_from_hex, kb = i.certificates_to_json, xb = i.certificates_to_js_value, jb = i.certificates_from_json, Sb = i.certificates_new, Eb = i.certificates_get, zb = i.certificates_add, Cb = i.__wbg_transactionbody_free, Ob = i.transactionbody_to_bytes, Lb = i.transactionbody_from_bytes, Nb = i.transactionbody_to_hex, Fb = i.transactionbody_from_hex, Tb = i.transactionbody_to_json, Pb = i.transactionbody_to_js_value, Rb = i.transactionbody_from_json, $b = i.transactionbody_inputs, Db = i.transactionbody_outputs, Ib = i.transactionbody_fee, Ub = i.transactionbody_ttl, Mb = i.transactionbody_ttl_bignum, Wb = i.transactionbody_set_ttl, Qb = i.transactionbody_remove_ttl, Vb = i.transactionbody_set_certs, Bb = i.transactionbody_certs, Ab = i.transactionbody_set_withdrawals, Hb = i.transactionbody_withdrawals, qb = i.transactionbody_set_update, Yb = i.transactionbody_update, Xb = i.transactionbody_set_auxiliary_data_hash, Kb = i.transactionbody_auxiliary_data_hash, Zb = i.transactionbody_set_validity_start_interval, Jb = i.transactionbody_set_validity_start_interval_bignum, Gb = i.transactionbody_validity_start_interval_bignum, th = i.transactionbody_validity_start_interval, eh = i.transactionbody_set_mint, _h = i.transactionbody_mint, rh = i.transactionbody_set_reference_inputs, nh = i.transactionbody_reference_inputs, oh = i.transactionbody_set_script_data_hash, sh = i.transactionbody_script_data_hash, ah = i.transactionbody_set_collateral, ih = i.transactionbody_collateral, ch = i.transactionbody_set_required_signers, dh = i.transactionbody_required_signers, lh = i.transactionbody_set_network_id, ph = i.transactionbody_network_id, uh = i.transactionbody_set_collateral_return, wh = i.transactionbody_collateral_return, fh = i.transactionbody_set_total_collateral, gh = i.transactionbody_total_collateral, bh = i.transactionbody_new, hh = i.transactionbody_new_tx_body, yh = i.__wbg_transactioninput_free, mh = i.transactioninput_to_bytes, vh = i.transactioninput_from_bytes, kh = i.transactioninput_to_hex, xh = i.transactioninput_from_hex, jh = i.transactioninput_to_json, Sh = i.transactioninput_to_js_value, Eh = i.transactioninput_from_json, zh = i.transactioninput_transaction_id, Ch = i.transactioninput_index, Oh = i.transactioninput_new, Lh = i.__wbg_transactionoutput_free, Nh = i.transactionoutput_to_bytes, Fh = i.transactionoutput_from_bytes, Th = i.transactionoutput_to_hex, Ph = i.transactionoutput_from_hex, Rh = i.transactionoutput_to_json, $h = i.transactionoutput_to_js_value, Dh = i.transactionoutput_from_json, Ih = i.transactionoutput_address, Uh = i.transactionoutput_amount, Mh = i.transactionoutput_data_hash, Wh = i.transactionoutput_plutus_data, Qh = i.transactionoutput_script_ref, Vh = i.transactionoutput_set_script_ref, Bh = i.transactionoutput_set_plutus_data, Ah = i.transactionoutput_set_data_hash, Hh = i.transactionoutput_has_plutus_data, qh = i.transactionoutput_has_data_hash, Yh = i.transactionoutput_has_script_ref, Xh = i.transactionoutput_new, Kh = i.transactionoutput_serialization_format, Zh = i.stakeregistration_to_bytes, Jh = i.stakeregistration_from_bytes, Gh = i.stakeregistration_to_hex, ty = i.stakeregistration_from_hex, ey = i.stakeregistration_to_js_value, _y = i.stakeregistration_from_json, ry = i.__wbg_stakederegistration_free, ny = i.stakederegistration_to_bytes, oy = i.stakederegistration_from_bytes, sy = i.stakederegistration_to_hex, ay = i.stakederegistration_from_hex, iy = i.stakederegistration_to_json, cy = i.stakederegistration_to_js_value, dy = i.stakederegistration_from_json, ly = i.stakederegistration_stake_credential, py = i.stakederegistration_new, uy = i.__wbg_stakedelegation_free, wy = i.stakedelegation_to_bytes, fy = i.stakedelegation_from_bytes, gy = i.stakedelegation_to_hex, by = i.stakedelegation_from_hex, hy = i.stakedelegation_to_json, yy = i.stakedelegation_to_js_value, my = i.stakedelegation_from_json, vy = i.stakedelegation_stake_credential, ky = i.stakedelegation_new, xy = i.__wbg_ed25519keyhashes_free, jy = i.ed25519keyhashes_to_bytes, Sy = i.ed25519keyhashes_from_bytes, Ey = i.ed25519keyhashes_to_hex, zy = i.ed25519keyhashes_from_hex, Cy = i.ed25519keyhashes_to_json, Oy = i.ed25519keyhashes_to_js_value, Ly = i.ed25519keyhashes_from_json, Ny = i.ed25519keyhashes_new, Fy = i.ed25519keyhashes_get, Ty = i.ed25519keyhashes_add, Py = i.ed25519keyhashes_to_option, Ry = i.__wbg_relays_free, $y = i.relays_to_bytes, Dy = i.relays_from_bytes, Iy = i.relays_to_hex, Uy = i.relays_from_hex, My = i.relays_to_json, Wy = i.relays_to_js_value, Qy = i.relays_from_json, Vy = i.relays_get, By = i.relays_add, Ay = i.__wbg_poolparams_free, Hy = i.poolparams_to_bytes, qy = i.poolparams_from_bytes, Yy = i.poolparams_to_hex, Xy = i.poolparams_from_hex, Ky = i.poolparams_to_json, Zy = i.poolparams_to_js_value, Jy = i.poolparams_from_json, Gy = i.poolparams_operator, tm = i.poolparams_vrf_keyhash, em = i.poolparams_pledge, _m = i.poolparams_cost, rm = i.poolparams_margin, nm = i.poolparams_reward_account, om = i.poolparams_pool_owners, sm = i.poolparams_relays, am = i.poolparams_pool_metadata, im = i.poolparams_new, cm = i.__wbg_poolregistration_free, dm = i.poolregistration_to_bytes, lm = i.poolregistration_from_bytes, pm = i.poolregistration_to_hex, um = i.poolregistration_from_hex, wm = i.poolregistration_to_json, fm = i.poolregistration_to_js_value, gm = i.poolregistration_from_json, bm = i.poolregistration_pool_params, hm = i.poolregistration_new, ym = i.__wbg_poolretirement_free, mm = i.poolretirement_to_bytes, vm = i.poolretirement_from_bytes, km = i.poolretirement_to_hex, xm = i.poolretirement_from_hex, jm = i.poolretirement_to_json, Sm = i.poolretirement_to_js_value, Em = i.poolretirement_from_json, zm = i.poolretirement_pool_keyhash, Cm = i.poolretirement_epoch, Om = i.poolretirement_new, Lm = i.__wbg_genesiskeydelegation_free, Nm = i.genesiskeydelegation_to_bytes, Fm = i.genesiskeydelegation_from_bytes, Tm = i.genesiskeydelegation_to_hex, Pm = i.genesiskeydelegation_from_hex, Rm = i.genesiskeydelegation_to_json, $m = i.genesiskeydelegation_to_js_value, Dm = i.genesiskeydelegation_from_json, Im = i.genesiskeydelegation_genesishash, Um = i.genesiskeydelegation_genesis_delegate_hash, Mm = i.genesiskeydelegation_vrf_keyhash, Wm = i.genesiskeydelegation_new, Qm = i.__wbg_moveinstantaneousrewardscert_free, Vm = i.moveinstantaneousrewardscert_to_bytes, Bm = i.moveinstantaneousrewardscert_from_bytes, Am = i.moveinstantaneousrewardscert_to_hex, Hm = i.moveinstantaneousrewardscert_from_hex, qm = i.moveinstantaneousrewardscert_to_json, Ym = i.moveinstantaneousrewardscert_to_js_value, Xm = i.moveinstantaneousrewardscert_from_json, Km = i.moveinstantaneousrewardscert_move_instantaneous_reward, Zm = i.moveinstantaneousrewardscert_new, Jm = i.__wbg_certificate_free, Gm = i.certificate_to_bytes, tv = i.certificate_from_bytes, ev = i.certificate_to_hex, _v = i.certificate_from_hex, rv = i.certificate_to_json, nv = i.certificate_to_js_value, ov = i.certificate_from_json, sv = i.certificate_new_stake_registration, av = i.certificate_new_stake_deregistration, iv = i.certificate_new_stake_delegation, cv = i.certificate_new_pool_registration, dv = i.certificate_new_pool_retirement, lv = i.certificate_new_genesis_key_delegation, pv = i.certificate_new_move_instantaneous_rewards_cert, uv = i.certificate_kind, wv = i.certificate_as_stake_registration, fv = i.certificate_as_stake_deregistration, gv = i.certificate_as_stake_delegation, bv = i.certificate_as_pool_registration, hv = i.certificate_as_pool_retirement, yv = i.certificate_as_genesis_key_delegation, mv = i.certificate_as_move_instantaneous_rewards_cert, vv = i.__wbg_mirtostakecredentials_free, kv = i.mirtostakecredentials_to_bytes, xv = i.mirtostakecredentials_from_bytes, jv = i.mirtostakecredentials_to_hex, Sv = i.mirtostakecredentials_from_hex, Ev = i.mirtostakecredentials_to_json, zv = i.mirtostakecredentials_to_js_value, Cv = i.mirtostakecredentials_from_json, Ov = i.mirtostakecredentials_insert, Lv = i.mirtostakecredentials_get, Nv = i.mirtostakecredentials_keys, Fv = i.__wbg_moveinstantaneousreward_free, Tv = i.moveinstantaneousreward_to_bytes, Pv = i.moveinstantaneousreward_from_bytes, Rv = i.moveinstantaneousreward_to_hex, $v = i.moveinstantaneousreward_from_hex, Dv = i.moveinstantaneousreward_to_json, Iv = i.moveinstantaneousreward_to_js_value, Uv = i.moveinstantaneousreward_from_json, Mv = i.moveinstantaneousreward_new_to_other_pot, Wv = i.moveinstantaneousreward_new_to_stake_creds, Qv = i.moveinstantaneousreward_pot, Vv = i.moveinstantaneousreward_kind, Bv = i.moveinstantaneousreward_as_to_other_pot, Av = i.moveinstantaneousreward_as_to_stake_creds, Hv = i.__wbg_ipv4_free, qv = i.ipv4_to_bytes, Yv = i.ipv4_from_bytes, Xv = i.ipv4_to_hex, Kv = i.ipv4_from_hex, Zv = i.ipv4_to_json, Jv = i.ipv4_to_js_value, Gv = i.ipv4_from_json, t1 = i.ipv4_new, e1 = i.ipv4_ip, _1 = i.__wbg_ipv6_free, r1 = i.ipv6_to_bytes, n1 = i.ipv6_from_bytes, o1 = i.ipv6_to_hex, s1 = i.ipv6_from_hex, a1 = i.ipv6_to_json, i1 = i.ipv6_to_js_value, c1 = i.ipv6_from_json, d1 = i.ipv6_new, l1 = i.ipv6_ip, p1 = i.url_to_bytes, u1 = i.url_from_bytes, w1 = i.url_to_hex, f1 = i.url_from_hex, g1 = i.url_from_json, b1 = i.url_new, h1 = i.__wbg_dnsrecordaoraaaa_free, y1 = i.dnsrecordaoraaaa_to_bytes, m1 = i.dnsrecordaoraaaa_from_bytes, v1 = i.dnsrecordaoraaaa_to_hex, k1 = i.dnsrecordaoraaaa_from_hex, x1 = i.dnsrecordaoraaaa_to_json, j1 = i.dnsrecordaoraaaa_to_js_value, S1 = i.dnsrecordaoraaaa_from_json, E1 = i.dnsrecordaoraaaa_new, z1 = i.dnsrecordaoraaaa_record, C1 = i.dnsrecordsrv_to_bytes, O1 = i.dnsrecordsrv_from_bytes, L1 = i.dnsrecordsrv_to_hex, N1 = i.dnsrecordsrv_from_hex, F1 = i.dnsrecordsrv_from_json, T1 = i.dnsrecordsrv_new, P1 = i.__wbg_singlehostaddr_free, R1 = i.singlehostaddr_to_bytes, $1 = i.singlehostaddr_from_bytes, D1 = i.singlehostaddr_to_hex, I1 = i.singlehostaddr_from_hex, U1 = i.singlehostaddr_to_json, M1 = i.singlehostaddr_to_js_value, W1 = i.singlehostaddr_from_json, Q1 = i.singlehostaddr_port, V1 = i.singlehostaddr_ipv4, B1 = i.singlehostaddr_ipv6, A1 = i.singlehostaddr_new, H1 = i.__wbg_singlehostname_free, q1 = i.singlehostname_to_bytes, Y1 = i.singlehostname_from_bytes, X1 = i.singlehostname_to_hex, K1 = i.singlehostname_from_hex, Z1 = i.singlehostname_to_json, J1 = i.singlehostname_to_js_value, G1 = i.singlehostname_from_json, tk = i.singlehostname_port, ek = i.singlehostname_new, _k = i.__wbg_multihostname_free, rk = i.multihostname_to_bytes, nk = i.multihostname_from_bytes, ok = i.multihostname_to_hex, sk = i.multihostname_from_hex, ak = i.multihostname_to_json, ik = i.multihostname_to_js_value, ck = i.multihostname_from_json, dk = i.multihostname_dns_name, lk = i.multihostname_new, pk = i.__wbg_relay_free, uk = i.relay_to_bytes, wk = i.relay_from_bytes, fk = i.relay_to_hex, gk = i.relay_from_hex, bk = i.relay_to_json, hk = i.relay_to_js_value, yk = i.relay_from_json, mk = i.relay_new_single_host_addr, vk = i.relay_new_single_host_name, kk = i.relay_new_multi_host_name, xk = i.relay_kind, jk = i.relay_as_single_host_addr, Sk = i.relay_as_single_host_name, Ek = i.relay_as_multi_host_name, zk = i.__wbg_poolmetadata_free, Ck = i.poolmetadata_to_bytes, Ok = i.poolmetadata_from_bytes, Lk = i.poolmetadata_to_hex, Nk = i.poolmetadata_from_hex, Fk = i.poolmetadata_to_json, Tk = i.poolmetadata_to_js_value, Pk = i.poolmetadata_from_json, Rk = i.poolmetadata_url, $k = i.poolmetadata_pool_metadata_hash, Dk = i.poolmetadata_new, Ik = i.__wbg_stakecredentials_free, Uk = i.stakecredentials_to_bytes, Mk = i.stakecredentials_from_bytes, Wk = i.stakecredentials_to_hex, Qk = i.stakecredentials_from_hex, Vk = i.stakecredentials_to_json, Bk = i.stakecredentials_to_js_value, Ak = i.stakecredentials_from_json, Hk = i.stakecredentials_get, qk = i.stakecredentials_add, Yk = i.__wbg_rewardaddresses_free, Xk = i.rewardaddresses_to_bytes, Kk = i.rewardaddresses_from_bytes, Zk = i.rewardaddresses_to_hex, Jk = i.rewardaddresses_from_hex, Gk = i.rewardaddresses_to_json, t0 = i.rewardaddresses_to_js_value, e0 = i.rewardaddresses_from_json, _0 = i.rewardaddresses_get, r0 = i.rewardaddresses_add, n0 = i.__wbg_withdrawals_free, o0 = i.withdrawals_to_bytes, s0 = i.withdrawals_from_bytes, a0 = i.withdrawals_to_hex, i0 = i.withdrawals_from_hex, c0 = i.withdrawals_to_json, d0 = i.withdrawals_to_js_value, l0 = i.withdrawals_from_json, p0 = i.withdrawals_insert, u0 = i.withdrawals_get, w0 = i.withdrawals_keys, f0 = i.__wbg_transactionwitnessset_free, g0 = i.transactionwitnessset_to_bytes, b0 = i.transactionwitnessset_from_bytes, h0 = i.transactionwitnessset_to_hex, y0 = i.transactionwitnessset_from_hex, m0 = i.transactionwitnessset_to_json, v0 = i.transactionwitnessset_to_js_value, k0 = i.transactionwitnessset_from_json, x0 = i.transactionwitnessset_set_vkeys, j0 = i.transactionwitnessset_vkeys, S0 = i.transactionwitnessset_set_native_scripts, E0 = i.transactionwitnessset_native_scripts, z0 = i.transactionwitnessset_set_bootstraps, C0 = i.transactionwitnessset_bootstraps, O0 = i.transactionwitnessset_set_plutus_scripts, L0 = i.transactionwitnessset_plutus_scripts, N0 = i.transactionwitnessset_set_plutus_data, F0 = i.transactionwitnessset_plutus_data, T0 = i.transactionwitnessset_set_redeemers, P0 = i.transactionwitnessset_redeemers, R0 = i.transactionwitnessset_new, $0 = i.__wbg_scriptpubkey_free, D0 = i.scriptpubkey_to_bytes, I0 = i.scriptpubkey_from_bytes, U0 = i.scriptpubkey_to_hex, M0 = i.scriptpubkey_from_hex, W0 = i.scriptpubkey_to_json, Q0 = i.scriptpubkey_to_js_value, V0 = i.scriptpubkey_from_json, B0 = i.scriptpubkey_addr_keyhash, A0 = i.scriptpubkey_new, H0 = i.__wbg_scriptall_free, q0 = i.scriptall_to_bytes, Y0 = i.scriptall_from_bytes, X0 = i.scriptall_to_hex, K0 = i.scriptall_from_hex, Z0 = i.scriptall_to_json, J0 = i.scriptall_to_js_value, G0 = i.scriptall_from_json, t4 = i.scriptall_native_scripts, e4 = i.scriptall_new, _4 = i.scriptany_to_bytes, r4 = i.scriptany_from_bytes, n4 = i.scriptany_to_hex, o4 = i.scriptany_from_hex, s4 = i.scriptany_to_js_value, a4 = i.scriptany_from_json, i4 = i.__wbg_scriptnofk_free, c4 = i.scriptnofk_to_bytes, d4 = i.scriptnofk_from_bytes, l4 = i.scriptnofk_to_hex, p4 = i.scriptnofk_from_hex, u4 = i.scriptnofk_to_json, w4 = i.scriptnofk_to_js_value, f4 = i.scriptnofk_from_json, g4 = i.scriptnofk_native_scripts, b4 = i.scriptnofk_new, h4 = i.timelockstart_to_bytes, y4 = i.timelockstart_from_bytes, m4 = i.timelockstart_to_hex, v4 = i.timelockstart_from_hex, k4 = i.timelockstart_to_js_value, x4 = i.timelockstart_from_json, j4 = i.__wbg_timelockexpiry_free, S4 = i.timelockexpiry_to_bytes, E4 = i.timelockexpiry_from_bytes, z4 = i.timelockexpiry_to_hex, C4 = i.timelockexpiry_from_hex, O4 = i.timelockexpiry_to_json, L4 = i.timelockexpiry_to_js_value, N4 = i.timelockexpiry_from_json, F4 = i.timelockexpiry_slot, T4 = i.timelockexpiry_slot_bignum, P4 = i.timelockexpiry_new, R4 = i.timelockexpiry_new_timelockexpiry, $4 = i.__wbg_scriptref_free, D4 = i.scriptref_to_bytes, I4 = i.scriptref_from_bytes, U4 = i.scriptref_to_hex, M4 = i.scriptref_from_hex, W4 = i.scriptref_to_json, Q4 = i.scriptref_to_js_value, V4 = i.scriptref_from_json, B4 = i.scriptref_new_native_script, A4 = i.scriptref_new_plutus_script, H4 = i.scriptref_is_native_script, q4 = i.scriptref_is_plutus_script, Y4 = i.scriptref_native_script, X4 = i.scriptref_plutus_script, K4 = i.__wbg_outputdatum_free, Z4 = i.outputdatum_new_data_hash, J4 = i.outputdatum_new_data, G4 = i.outputdatum_data_hash, t6 = i.outputdatum_data, e6 = i.__wbg_nativescript_free, _6 = i.nativescript_to_bytes, r6 = i.nativescript_from_bytes, n6 = i.nativescript_to_hex, o6 = i.nativescript_from_hex, s6 = i.nativescript_to_json, a6 = i.nativescript_to_js_value, i6 = i.nativescript_from_json, c6 = i.nativescript_hash, d6 = i.nativescript_new_script_pubkey, l6 = i.nativescript_new_script_all, p6 = i.nativescript_new_script_any, u6 = i.nativescript_new_script_n_of_k, w6 = i.nativescript_new_timelock_start, f6 = i.nativescript_new_timelock_expiry, g6 = i.nativescript_kind, b6 = i.nativescript_as_script_pubkey, h6 = i.nativescript_as_script_all, y6 = i.nativescript_as_script_any, m6 = i.nativescript_as_script_n_of_k, v6 = i.nativescript_as_timelock_start, k6 = i.nativescript_as_timelock_expiry, x6 = i.nativescript_get_required_signers, j6 = i.__wbg_nativescripts_free, S6 = i.nativescripts_get, E6 = i.nativescripts_add, z6 = i.__wbg_update_free, C6 = i.update_to_bytes, O6 = i.update_from_bytes, L6 = i.update_to_hex, N6 = i.update_from_hex, F6 = i.update_to_json, T6 = i.update_to_js_value, P6 = i.update_from_json, R6 = i.update_proposed_protocol_parameter_updates, $6 = i.update_epoch, D6 = i.update_new, I6 = i.__wbg_genesishashes_free, U6 = i.genesishashes_to_bytes, M6 = i.genesishashes_from_bytes, W6 = i.genesishashes_to_hex, Q6 = i.genesishashes_from_hex, V6 = i.genesishashes_to_json, B6 = i.genesishashes_to_js_value, A6 = i.genesishashes_from_json, H6 = i.genesishashes_get, q6 = i.genesishashes_add, Y6 = i.__wbg_scripthashes_free, X6 = i.scripthashes_to_bytes, K6 = i.scripthashes_from_bytes, Z6 = i.scripthashes_to_hex, J6 = i.scripthashes_from_hex, G6 = i.scripthashes_to_json, tx = i.scripthashes_to_js_value, ex = i.scripthashes_from_json, _x = i.scripthashes_get, rx = i.scripthashes_add, nx = i.__wbg_proposedprotocolparameterupdates_free, ox = i.proposedprotocolparameterupdates_to_bytes, sx = i.proposedprotocolparameterupdates_from_bytes, ax = i.proposedprotocolparameterupdates_to_hex, ix = i.proposedprotocolparameterupdates_from_hex, cx = i.proposedprotocolparameterupdates_to_json, dx = i.proposedprotocolparameterupdates_to_js_value, lx = i.proposedprotocolparameterupdates_from_json, px = i.proposedprotocolparameterupdates_insert, ux = i.proposedprotocolparameterupdates_get, wx = i.proposedprotocolparameterupdates_keys, fx = i.__wbg_protocolversion_free, gx = i.protocolversion_to_bytes, bx = i.protocolversion_from_bytes, hx = i.protocolversion_to_hex, yx = i.protocolversion_from_hex, mx = i.protocolversion_to_json, vx = i.protocolversion_to_js_value, kx = i.protocolversion_from_json, xx = i.protocolversion_major, jx = i.protocolversion_minor, Sx = i.protocolversion_new, Ex = i.__wbg_protocolparamupdate_free, zx = i.protocolparamupdate_to_bytes, Cx = i.protocolparamupdate_from_bytes, Ox = i.protocolparamupdate_to_hex, Lx = i.protocolparamupdate_from_hex, Nx = i.protocolparamupdate_to_json, Fx = i.protocolparamupdate_to_js_value, Tx = i.protocolparamupdate_from_json, Px = i.protocolparamupdate_set_minfee_a, Rx = i.protocolparamupdate_minfee_a, $x = i.protocolparamupdate_set_minfee_b, Dx = i.protocolparamupdate_minfee_b, Ix = i.protocolparamupdate_set_max_block_body_size, Ux = i.protocolparamupdate_max_block_body_size, Mx = i.protocolparamupdate_set_max_tx_size, Wx = i.protocolparamupdate_max_tx_size, Qx = i.protocolparamupdate_set_max_block_header_size, Vx = i.protocolparamupdate_max_block_header_size, Bx = i.protocolparamupdate_set_key_deposit, Ax = i.protocolparamupdate_key_deposit, Hx = i.protocolparamupdate_set_pool_deposit, qx = i.protocolparamupdate_pool_deposit, Yx = i.protocolparamupdate_set_max_epoch, Xx = i.protocolparamupdate_max_epoch, Kx = i.protocolparamupdate_set_n_opt, Zx = i.protocolparamupdate_n_opt, Jx = i.protocolparamupdate_set_pool_pledge_influence, Gx = i.protocolparamupdate_pool_pledge_influence, t2 = i.protocolparamupdate_set_expansion_rate, e2 = i.protocolparamupdate_expansion_rate, _2 = i.protocolparamupdate_set_treasury_growth_rate, r2 = i.protocolparamupdate_treasury_growth_rate, n2 = i.protocolparamupdate_d, o2 = i.protocolparamupdate_extra_entropy, s2 = i.protocolparamupdate_set_protocol_version, a2 = i.protocolparamupdate_protocol_version, i2 = i.protocolparamupdate_set_min_pool_cost, c2 = i.protocolparamupdate_min_pool_cost, d2 = i.protocolparamupdate_set_ada_per_utxo_byte, l2 = i.protocolparamupdate_ada_per_utxo_byte, p2 = i.protocolparamupdate_set_cost_models, u2 = i.protocolparamupdate_cost_models, w2 = i.protocolparamupdate_set_execution_costs, f2 = i.protocolparamupdate_execution_costs, g2 = i.protocolparamupdate_set_max_tx_ex_units, b2 = i.protocolparamupdate_max_tx_ex_units, h2 = i.protocolparamupdate_set_max_block_ex_units, y2 = i.protocolparamupdate_max_block_ex_units, m2 = i.protocolparamupdate_set_max_value_size, v2 = i.protocolparamupdate_max_value_size, k2 = i.protocolparamupdate_set_collateral_percentage, x2 = i.protocolparamupdate_collateral_percentage, j2 = i.protocolparamupdate_set_max_collateral_inputs, S2 = i.protocolparamupdate_max_collateral_inputs, E2 = i.protocolparamupdate_new, z2 = i.__wbg_transactionbodies_free, C2 = i.transactionbodies_to_bytes, O2 = i.transactionbodies_from_bytes, L2 = i.transactionbodies_to_hex, N2 = i.transactionbodies_from_hex, F2 = i.transactionbodies_to_json, T2 = i.transactionbodies_to_js_value, P2 = i.transactionbodies_from_json, R2 = i.transactionbodies_get, $2 = i.transactionbodies_add, D2 = i.__wbg_transactionwitnesssets_free, I2 = i.transactionwitnesssets_to_bytes, U2 = i.transactionwitnesssets_from_bytes, M2 = i.transactionwitnesssets_to_hex, W2 = i.transactionwitnesssets_from_hex, Q2 = i.transactionwitnesssets_to_json, V2 = i.transactionwitnesssets_to_js_value, B2 = i.transactionwitnesssets_from_json, A2 = i.transactionwitnesssets_get, H2 = i.transactionwitnesssets_add, q2 = i.__wbg_auxiliarydataset_free, Y2 = i.auxiliarydataset_new, X2 = i.auxiliarydataset_len, K2 = i.auxiliarydataset_insert, Z2 = i.auxiliarydataset_get, J2 = i.auxiliarydataset_indices, G2 = i.__wbg_block_free, tj = i.block_to_bytes, ej = i.block_from_bytes, _j = i.block_to_hex, rj = i.block_from_hex, nj = i.block_to_json, oj = i.block_to_js_value, sj = i.block_from_json, aj = i.block_header, ij = i.block_transaction_bodies, cj = i.block_transaction_witness_sets, dj = i.block_auxiliary_data_set, lj = i.block_invalid_transactions, pj = i.block_new, uj = i.__wbg_header_free, wj = i.header_to_bytes, fj = i.header_from_bytes, gj = i.header_to_hex, bj = i.header_from_hex, hj = i.header_to_json, yj = i.header_to_js_value, mj = i.header_from_json, vj = i.header_header_body, kj = i.header_body_signature, xj = i.header_new, jj = i.__wbg_operationalcert_free, Sj = i.operationalcert_to_bytes, Ej = i.operationalcert_from_bytes, zj = i.operationalcert_to_hex, Cj = i.operationalcert_from_hex, Oj = i.operationalcert_to_json, Lj = i.operationalcert_to_js_value, Nj = i.operationalcert_from_json, Fj = i.operationalcert_hot_vkey, Tj = i.operationalcert_sequence_number, Pj = i.operationalcert_kes_period, Rj = i.operationalcert_sigma, $j = i.operationalcert_new, Dj = i.__wbg_headerbody_free, Ij = i.headerbody_to_bytes, Uj = i.headerbody_from_bytes, Mj = i.headerbody_to_hex, Wj = i.headerbody_from_hex, Qj = i.headerbody_to_json, Vj = i.headerbody_to_js_value, Bj = i.headerbody_from_json, Aj = i.headerbody_block_number, Hj = i.headerbody_slot, qj = i.headerbody_slot_bignum, Yj = i.headerbody_prev_hash, Xj = i.headerbody_issuer_vkey, Kj = i.headerbody_vrf_vkey, Zj = i.headerbody_has_nonce_and_leader_vrf, Jj = i.headerbody_nonce_vrf_or_nothing, Gj = i.headerbody_leader_vrf_or_nothing, t3 = i.headerbody_has_vrf_result, e3 = i.headerbody_vrf_result_or_nothing, _3 = i.headerbody_block_body_size, r3 = i.headerbody_block_body_hash, n3 = i.headerbody_operational_cert, o3 = i.headerbody_protocol_version, s3 = i.headerbody_new, a3 = i.headerbody_new_headerbody, i3 = i.__wbg_assetname_free, c3 = i.assetname_to_bytes, d3 = i.assetname_from_bytes, l3 = i.assetname_to_hex, p3 = i.assetname_from_hex, u3 = i.assetname_to_json, w3 = i.assetname_to_js_value, f3 = i.assetname_from_json, g3 = i.assetname_new, b3 = i.assetname_name, h3 = i.__wbg_assetnames_free, y3 = i.assetnames_to_bytes, m3 = i.assetnames_from_bytes, v3 = i.assetnames_to_hex, k3 = i.assetnames_from_hex, x3 = i.assetnames_to_json, j3 = i.assetnames_to_js_value, S3 = i.assetnames_from_json, E3 = i.assetnames_new, z3 = i.assetnames_len, C3 = i.assetnames_get, O3 = i.assetnames_add, L3 = i.__wbg_assets_free, N3 = i.assets_to_bytes, F3 = i.assets_from_bytes, T3 = i.assets_to_hex, P3 = i.assets_from_hex, R3 = i.assets_to_json, $3 = i.assets_to_js_value, D3 = i.assets_from_json, I3 = i.assets_new, U3 = i.assets_insert, M3 = i.assets_get, W3 = i.assets_keys, Q3 = i.__wbg_multiasset_free, V3 = i.multiasset_to_bytes, B3 = i.multiasset_from_bytes, A3 = i.multiasset_to_hex, H3 = i.multiasset_from_hex, q3 = i.multiasset_to_json, Y3 = i.multiasset_to_js_value, X3 = i.multiasset_from_json, K3 = i.multiasset_insert, Z3 = i.multiasset_get, J3 = i.multiasset_set_asset, G3 = i.multiasset_get_asset, t5 = i.multiasset_keys, e5 = i.multiasset_sub, _5 = i.__wbg_mintsassets_free, r5 = i.__wbg_mintassets_free, n5 = i.mintassets_new_from_entry, o5 = i.mintassets_insert, s5 = i.mintassets_get, a5 = i.mintassets_keys, i5 = i.__wbg_mint_free, c5 = i.mint_to_bytes, d5 = i.mint_from_bytes, l5 = i.mint_to_hex, p5 = i.mint_from_hex, u5 = i.mint_to_json, w5 = i.mint_to_js_value, f5 = i.mint_from_json, g5 = i.mint_new_from_entry, b5 = i.mint_insert, h5 = i.mint_get, y5 = i.mint_get_all, m5 = i.mint_keys, v5 = i.mint_as_positive_multiasset, k5 = i.mint_as_negative_multiasset, x5 = i.__wbg_networkid_free, j5 = i.networkid_to_bytes, S5 = i.networkid_from_bytes, E5 = i.networkid_to_hex, z5 = i.networkid_from_hex, C5 = i.networkid_to_json, O5 = i.networkid_to_js_value, L5 = i.networkid_from_json, N5 = i.networkid_testnet, F5 = i.networkid_mainnet, T5 = i.networkid_kind, P5 = i.__wbg_unitinterval_free, R5 = i.transactionoutputs_len, $5 = i.transactioninputs_len, D5 = i.ed25519keyhashes_len, I5 = i.relays_len, U5 = i.stakecredentials_len, M5 = i.rewardaddresses_len, W5 = i.withdrawals_len, Q5 = i.nativescripts_len, V5 = i.genesishashes_len, B5 = i.scripthashes_len, A5 = i.proposedprotocolparameterupdates_len, H5 = i.scriptnofk_n, q5 = i.transactionbodies_len, Y5 = i.transactionwitnesssets_len, X5 = i.mirtostakecredentials_len, K5 = i.certificates_len, Z5 = i.assets_len, J5 = i.multiasset_len, G5 = i.mintassets_len, tS = i.mint_len, eS = i.scriptany_native_scripts, _S = i.unitinterval_numerator, rS = i.timelockstart_slot_bignum, nS = i.timelockstart_slot, oS = i.transactionbody_multiassets, sS = i.stakeregistration_stake_credential, aS = i.url_url, iS = i.dnsrecordsrv_record, cS = i.url_to_js_value, dS = i.dnsrecordsrv_to_js_value, lS = i.__wbg_url_free, pS = i.__wbg_dnsrecordsrv_free, uS = i.__wbg_scriptany_free, wS = i.stakedelegation_pool_keyhash, fS = i.timelockstart_new, gS = i.__wbg_timelockstart_free, bS = i.withdrawals_new, hS = i.proposedprotocolparameterupdates_new, yS = i.mirtostakecredentials_new, mS = i.timelockstart_new_timelockstart, vS = i.transactioninputs_new, kS = i.stakeregistration_new, xS = i.relays_new, jS = i.singlehostname_dns_name, SS = i.stakecredentials_new, ES = i.rewardaddresses_new, zS = i.scriptany_new, CS = i.transactionoutputs_new, OS = i.genesishashes_new, LS = i.scripthashes_new, NS = i.transactionbodies_new, FS = i.transactionwitnesssets_new, TS = i.nativescripts_new, PS = i.multiasset_new, RS = i.mintassets_new, $S = i.mint_new, DS = i.__wbg_stakeregistration_free, IS = i.stakeregistration_to_json, US = i.scriptany_to_json, MS = i.timelockstart_to_json, WS = i.url_to_json, QS = i.dnsrecordsrv_to_json, VS = i.encrypt_with_password, BS = i.decrypt_with_password, AS = i.__wbg_transactionoutputbuilder_free, HS = i.transactionoutputbuilder_new, qS = i.transactionoutputbuilder_with_address, YS = i.transactionoutputbuilder_with_data_hash, XS = i.transactionoutputbuilder_with_plutus_data, KS = i.transactionoutputbuilder_with_script_ref, ZS = i.transactionoutputbuilder_next, JS = i.__wbg_transactionoutputamountbuilder_free, GS = i.transactionoutputamountbuilder_with_value, tE = i.transactionoutputamountbuilder_with_coin, eE = i.transactionoutputamountbuilder_with_coin_and_asset, _E = i.transactionoutputamountbuilder_with_asset_and_min_required_coin, rE = i.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost, nE = i.transactionoutputamountbuilder_build, oE = i.__wbg_transactionunspentoutput_free, sE = i.transactionunspentoutput_to_bytes, aE = i.transactionunspentoutput_from_bytes, iE = i.transactionunspentoutput_to_hex, cE = i.transactionunspentoutput_from_hex, dE = i.transactionunspentoutput_to_json, lE = i.transactionunspentoutput_to_js_value, pE = i.transactionunspentoutput_from_json, uE = i.transactionunspentoutput_new, wE = i.transactionunspentoutput_input, fE = i.transactionunspentoutput_output, gE = i.__wbg_transactionunspentoutputs_free, bE = i.transactionunspentoutputs_to_json, hE = i.transactionunspentoutputs_to_js_value, yE = i.transactionunspentoutputs_from_json, mE = i.transactionunspentoutputs_new, vE = i.transactionunspentoutputs_len, kE = i.transactionunspentoutputs_get, xE = i.transactionunspentoutputs_add, jE = i.__wbg_bignum_free, SE = i.bignum_to_bytes, EE = i.bignum_from_bytes, zE = i.bignum_to_hex, CE = i.bignum_from_hex, OE = i.bignum_to_json, LE = i.bignum_to_js_value, NE = i.bignum_from_json, FE = i.bignum_from_str, TE = i.bignum_to_str, PE = i.bignum_zero, RE = i.bignum_one, $E = i.bignum_is_zero, DE = i.bignum_div_floor, IE = i.bignum_checked_mul, UE = i.bignum_checked_add, ME = i.bignum_checked_sub, WE = i.bignum_clamped_sub, QE = i.bignum_compare, VE = i.bignum_less_than, BE = i.bignum_max_value, AE = i.bignum_max, HE = i.__wbg_value_free, qE = i.value_to_bytes, YE = i.value_from_bytes, XE = i.value_to_hex, KE = i.value_from_hex, ZE = i.value_to_json, JE = i.value_to_js_value, GE = i.value_from_json, t8 = i.value_new, e8 = i.value_new_from_assets, _8 = i.value_new_with_assets, r8 = i.value_zero, n8 = i.value_is_zero, o8 = i.value_coin, s8 = i.value_set_coin, a8 = i.value_multiasset, i8 = i.value_set_multiasset, c8 = i.value_checked_add, d8 = i.value_checked_sub, l8 = i.value_clamped_sub, p8 = i.value_compare, u8 = i.__wbg_int_free, w8 = i.int_to_bytes, f8 = i.int_from_bytes, g8 = i.int_to_hex, b8 = i.int_from_hex, h8 = i.int_to_json, y8 = i.int_to_js_value, m8 = i.int_from_json, v8 = i.int_new, k8 = i.int_new_negative, x8 = i.int_new_i32, j8 = i.int_is_positive, S8 = i.int_as_positive, E8 = i.int_as_negative, z8 = i.int_as_i32, C8 = i.int_as_i32_or_fail, O8 = i.int_to_str, L8 = i.int_from_str, N8 = i.__wbg_bigint_free, F8 = i.bigint_to_bytes, T8 = i.bigint_from_bytes, P8 = i.bigint_to_hex, R8 = i.bigint_from_hex, $8 = i.bigint_to_json, D8 = i.bigint_to_js_value, I8 = i.bigint_from_json, U8 = i.bigint_is_zero, M8 = i.bigint_as_u64, W8 = i.bigint_as_int, Q8 = i.bigint_from_str, V8 = i.bigint_to_str, B8 = i.bigint_add, A8 = i.bigint_mul, H8 = i.bigint_one, q8 = i.bigint_increment, Y8 = i.bigint_div_ceil, X8 = i.make_daedalus_bootstrap_witness, K8 = i.make_icarus_bootstrap_witness, Z8 = i.make_vkey_witness, J8 = i.hash_auxiliary_data, G8 = i.hash_transaction, tz = i.hash_plutus_data, ez = i.hash_script_data, _z = i.get_implicit_input, rz = i.get_deposit, nz = i.min_ada_for_output, oz = i.min_ada_required, sz = i.encode_json_str_to_native_script, az = i.int_as_i32_or_nothing, iz = i.__wbg_bip32privatekey_free, cz = i.bip32privatekey_derive, dz = i.bip32privatekey_from_128_xprv, lz = i.bip32privatekey_to_128_xprv, pz = i.bip32privatekey_generate_ed25519_bip32, uz = i.bip32privatekey_to_raw_key, wz = i.bip32privatekey_to_public, fz = i.bip32privatekey_from_bytes, gz = i.bip32privatekey_as_bytes, bz = i.bip32privatekey_from_bech32, hz = i.bip32privatekey_to_bech32, yz = i.bip32privatekey_from_bip39_entropy, mz = i.bip32privatekey_chaincode, vz = i.bip32privatekey_to_hex, kz = i.bip32privatekey_from_hex, xz = i.__wbg_bip32publickey_free, jz = i.bip32publickey_derive, Sz = i.bip32publickey_to_raw_key, Ez = i.bip32publickey_from_bytes, zz = i.bip32publickey_as_bytes, Cz = i.bip32publickey_from_bech32, Oz = i.bip32publickey_to_bech32, Lz = i.bip32publickey_chaincode, Nz = i.bip32publickey_to_hex, Fz = i.bip32publickey_from_hex, Tz = i.__wbg_privatekey_free, Pz = i.privatekey_to_public, Rz = i.privatekey_generate_ed25519, $z = i.privatekey_generate_ed25519extended, Dz = i.privatekey_from_bech32, Iz = i.privatekey_to_bech32, Uz = i.privatekey_as_bytes, Mz = i.privatekey_from_extended_bytes, Wz = i.privatekey_from_normal_bytes, Qz = i.privatekey_sign, Vz = i.privatekey_to_hex, Bz = i.privatekey_from_hex, Az = i.__wbg_publickey_free, Hz = i.publickey_from_bech32, qz = i.publickey_to_bech32, Yz = i.publickey_from_bytes, Xz = i.publickey_verify, Kz = i.publickey_hash, Zz = i.publickey_to_hex, Jz = i.publickey_from_hex, Gz = i.__wbg_vkey_free, t9 = i.vkey_to_bytes, e9 = i.vkey_from_bytes, _9 = i.vkey_to_hex, r9 = i.vkey_from_hex, n9 = i.vkey_to_json, o9 = i.vkey_to_js_value, s9 = i.vkey_from_json, a9 = i.vkey_new, i9 = i.vkey_public_key, c9 = i.__wbg_vkeys_free, d9 = i.vkeys_get, l9 = i.vkeys_add, p9 = i.__wbg_vkeywitness_free, u9 = i.vkeywitness_to_bytes, w9 = i.vkeywitness_from_bytes, f9 = i.vkeywitness_to_hex, g9 = i.vkeywitness_from_hex, b9 = i.vkeywitness_to_json, h9 = i.vkeywitness_to_js_value, y9 = i.vkeywitness_from_json, m9 = i.vkeywitness_new, v9 = i.__wbg_vkeywitnesses_free, k9 = i.vkeywitnesses_to_bytes, x9 = i.vkeywitnesses_from_bytes, j9 = i.vkeywitnesses_to_hex, S9 = i.vkeywitnesses_from_hex, E9 = i.vkeywitnesses_to_json, z9 = i.vkeywitnesses_to_js_value, C9 = i.vkeywitnesses_from_json, O9 = i.vkeywitnesses_get, L9 = i.vkeywitnesses_add, N9 = i.__wbg_bootstrapwitness_free, F9 = i.bootstrapwitness_to_bytes, T9 = i.bootstrapwitness_from_bytes, P9 = i.bootstrapwitness_to_hex, R9 = i.bootstrapwitness_from_hex, $9 = i.bootstrapwitness_to_json, D9 = i.bootstrapwitness_to_js_value, I9 = i.bootstrapwitness_from_json, U9 = i.bootstrapwitness_vkey, M9 = i.bootstrapwitness_signature, W9 = i.bootstrapwitness_chain_code, Q9 = i.bootstrapwitness_attributes, V9 = i.bootstrapwitness_new, B9 = i.__wbg_bootstrapwitnesses_free, A9 = i.bootstrapwitnesses_new, H9 = i.bootstrapwitnesses_len, q9 = i.bootstrapwitnesses_get, Y9 = i.bootstrapwitnesses_add, X9 = i.__wbg_publickeys_free, K9 = i.publickeys_new, Z9 = i.publickeys_get, J9 = i.publickeys_add, G9 = i.__wbg_ed25519signature_free, tC = i.ed25519signature_to_bytes, eC = i.ed25519signature_to_bech32, _C = i.ed25519signature_to_hex, rC = i.ed25519signature_from_bech32, nC = i.ed25519signature_from_hex, oC = i.ed25519signature_from_bytes, sC = i.__wbg_legacydaedalusprivatekey_free, aC = i.legacydaedalusprivatekey_from_bytes, iC = i.legacydaedalusprivatekey_as_bytes, cC = i.legacydaedalusprivatekey_chaincode, dC = i.__wbg_ed25519keyhash_free, lC = i.ed25519keyhash_from_bytes, pC = i.ed25519keyhash_to_bytes, uC = i.ed25519keyhash_to_bech32, wC = i.ed25519keyhash_from_bech32, fC = i.ed25519keyhash_to_hex, gC = i.ed25519keyhash_from_hex, bC = i.scripthash_from_bytes, hC = i.scripthash_from_bech32, yC = i.scripthash_from_hex, mC = i.transactionhash_from_bytes, vC = i.transactionhash_from_bech32, kC = i.transactionhash_from_hex, xC = i.genesisdelegatehash_from_bytes, jC = i.genesisdelegatehash_from_bech32, SC = i.genesisdelegatehash_from_hex, EC = i.genesishash_from_bytes, zC = i.genesishash_from_bech32, CC = i.genesishash_from_hex, OC = i.__wbg_auxiliarydatahash_free, LC = i.auxiliarydatahash_from_bytes, NC = i.auxiliarydatahash_to_bytes, FC = i.auxiliarydatahash_to_bech32, TC = i.auxiliarydatahash_from_bech32, PC = i.auxiliarydatahash_to_hex, RC = i.auxiliarydatahash_from_hex, $C = i.poolmetadatahash_from_bytes, DC = i.poolmetadatahash_from_bech32, IC = i.poolmetadatahash_from_hex, UC = i.vrfkeyhash_from_bytes, MC = i.vrfkeyhash_from_bech32, WC = i.vrfkeyhash_from_hex, QC = i.blockhash_from_bytes, VC = i.blockhash_from_bech32, BC = i.blockhash_from_hex, AC = i.datahash_from_bytes, HC = i.datahash_from_bech32, qC = i.datahash_from_hex, YC = i.scriptdatahash_from_bytes, XC = i.scriptdatahash_from_bech32, KC = i.scriptdatahash_from_hex, ZC = i.vrfvkey_from_bytes, JC = i.vrfvkey_from_bech32, GC = i.vrfvkey_from_hex, tO = i.kesvkey_from_bytes, eO = i.kesvkey_from_bech32, _O = i.kesvkey_from_hex, rO = i.__wbg_kessignature_free, nO = i.kessignature_to_bytes, oO = i.kessignature_from_bytes, sO = i.__wbg_nonce_free, aO = i.nonce_to_bytes, iO = i.nonce_from_bytes, cO = i.nonce_to_hex, dO = i.nonce_from_hex, lO = i.nonce_to_json, pO = i.nonce_to_js_value, uO = i.nonce_from_json, wO = i.nonce_new_identity, fO = i.nonce_new_from_hash, gO = i.nonce_get_hash, bO = i.__wbg_vrfcert_free, hO = i.vrfcert_to_bytes, yO = i.vrfcert_from_bytes, mO = i.vrfcert_to_hex, vO = i.vrfcert_from_hex, kO = i.vrfcert_to_json, xO = i.vrfcert_to_js_value, jO = i.vrfcert_from_json, SO = i.vrfcert_proof, EO = i.vrfcert_new, zO = i.vkeywitnesses_len, CO = i.vkeys_len, OO = i.publickeys_size, LO = i.vrfcert_output, NO = i.scripthash_to_hex, FO = i.genesisdelegatehash_to_hex, TO = i.genesishash_to_hex, PO = i.transactionhash_to_hex, RO = i.poolmetadatahash_to_hex, $O = i.vrfkeyhash_to_hex, DO = i.blockhash_to_hex, IO = i.datahash_to_hex, UO = i.scriptdatahash_to_hex, MO = i.vrfvkey_to_hex, WO = i.kesvkey_to_hex, QO = i.vkeywitness_vkey, VO = i.vkeywitness_signature, BO = i.scripthash_to_bech32, AO = i.genesisdelegatehash_to_bech32, HO = i.genesishash_to_bech32, qO = i.transactionhash_to_bech32, YO = i.poolmetadatahash_to_bech32, XO = i.vrfkeyhash_to_bech32, KO = i.blockhash_to_bech32, ZO = i.datahash_to_bech32, JO = i.scriptdatahash_to_bech32, GO = i.vrfvkey_to_bech32, t7 = i.kesvkey_to_bech32, e7 = i.scripthash_to_bytes, _7 = i.transactionhash_to_bytes, r7 = i.genesisdelegatehash_to_bytes, n7 = i.genesishash_to_bytes, o7 = i.publickey_as_bytes, s7 = i.poolmetadatahash_to_bytes, a7 = i.vrfkeyhash_to_bytes, i7 = i.blockhash_to_bytes, c7 = i.datahash_to_bytes, d7 = i.scriptdatahash_to_bytes, l7 = i.vrfvkey_to_bytes, p7 = i.kesvkey_to_bytes, u7 = i.vkeywitnesses_new, w7 = i.vkeys_new, f7 = i.__wbg_scripthash_free, g7 = i.__wbg_genesisdelegatehash_free, b7 = i.__wbg_genesishash_free, h7 = i.__wbg_kesvkey_free, y7 = i.__wbg_poolmetadatahash_free, m7 = i.__wbg_transactionhash_free, v7 = i.__wbg_vrfkeyhash_free, k7 = i.__wbg_blockhash_free, x7 = i.__wbg_scriptdatahash_free, j7 = i.__wbg_datahash_free, S7 = i.__wbg_vrfvkey_free, E7 = i.__wbg_inputwithscriptwitness_free, z7 = i.inputwithscriptwitness_new_with_native_script_witness, C7 = i.inputwithscriptwitness_new_with_plutus_witness, O7 = i.inputwithscriptwitness_input, L7 = i.__wbg_inputswithscriptwitness_free, N7 = i.inputswithscriptwitness_new, F7 = i.inputswithscriptwitness_add, T7 = i.inputswithscriptwitness_get, P7 = i.inputswithscriptwitness_len, R7 = i.__wbg_plutusscriptsource_free, $7 = i.plutusscriptsource_new, D7 = i.plutusscriptsource_new_ref_input, I7 = i.plutusscriptsource_new_ref_input_with_lang_ver, U7 = i.__wbg_datumsource_free, M7 = i.datumsource_new, W7 = i.datumsource_new_ref_input, Q7 = i.__wbg_plutuswitness_free, V7 = i.plutuswitness_new, B7 = i.plutuswitness_new_with_ref, A7 = i.plutuswitness_new_without_datum, H7 = i.plutuswitness_new_with_ref_without_datum, q7 = i.plutuswitness_script, Y7 = i.plutuswitness_datum, X7 = i.plutuswitness_redeemer, K7 = i.__wbg_plutuswitnesses_free, Z7 = i.plutuswitnesses_get, J7 = i.plutuswitnesses_add, G7 = i.__wbg_txinputsbuilder_free, tL = i.txinputsbuilder_new, eL = i.txinputsbuilder_add_key_input, _L = i.txinputsbuilder_add_script_input, rL = i.txinputsbuilder_add_native_script_input, nL = i.txinputsbuilder_add_plutus_script_input, oL = i.txinputsbuilder_add_bootstrap_input, sL = i.txinputsbuilder_add_input, aL = i.txinputsbuilder_count_missing_input_scripts, iL = i.txinputsbuilder_add_required_native_input_scripts, cL = i.txinputsbuilder_add_required_plutus_input_scripts, dL = i.txinputsbuilder_add_required_script_input_witnesses, lL = i.txinputsbuilder_get_ref_inputs, pL = i.txinputsbuilder_get_native_input_scripts, uL = i.txinputsbuilder_get_plutus_input_scripts, wL = i.txinputsbuilder_len, fL = i.txinputsbuilder_add_required_signer, gL = i.txinputsbuilder_add_required_signers, bL = i.txinputsbuilder_total_value, hL = i.txinputsbuilder_inputs, yL = i.txinputsbuilder_inputs_option, mL = i.__wbg_txbuilderconstants_free, vL = i.txbuilderconstants_plutus_default_cost_models, kL = i.txbuilderconstants_plutus_alonzo_cost_models, xL = i.plutuswitnesses_len, jL = i.txbuilderconstants_plutus_vasil_cost_models, SL = i.plutuswitnesses_new, EL = i.__wbg_metadatamap_free, zL = i.metadatamap_to_bytes, CL = i.metadatamap_from_bytes, OL = i.metadatamap_to_hex, LL = i.metadatamap_from_hex, NL = i.metadatamap_insert, FL = i.metadatamap_insert_str, TL = i.metadatamap_insert_i32, PL = i.metadatamap_get, RL = i.metadatamap_get_str, $L = i.metadatamap_get_i32, DL = i.metadatamap_has, IL = i.metadatamap_keys, UL = i.__wbg_metadatalist_free, ML = i.metadatalist_to_bytes, WL = i.metadatalist_from_bytes, QL = i.metadatalist_to_hex, VL = i.metadatalist_from_hex, BL = i.metadatalist_get, AL = i.metadatalist_add, HL = i.__wbg_transactionmetadatum_free, qL = i.transactionmetadatum_to_bytes, YL = i.transactionmetadatum_from_bytes, XL = i.transactionmetadatum_to_hex, KL = i.transactionmetadatum_from_hex, ZL = i.transactionmetadatum_new_map, JL = i.transactionmetadatum_new_list, GL = i.transactionmetadatum_new_int, tN = i.transactionmetadatum_new_bytes, eN = i.transactionmetadatum_new_text, _N = i.transactionmetadatum_as_map, rN = i.transactionmetadatum_as_list, nN = i.transactionmetadatum_as_int, oN = i.transactionmetadatum_as_bytes, sN = i.transactionmetadatum_as_text, aN = i.__wbg_transactionmetadatumlabels_free, iN = i.transactionmetadatumlabels_to_bytes, cN = i.transactionmetadatumlabels_from_bytes, dN = i.transactionmetadatumlabels_to_hex, lN = i.transactionmetadatumlabels_from_hex, pN = i.transactionmetadatumlabels_get, uN = i.transactionmetadatumlabels_add, wN = i.__wbg_generaltransactionmetadata_free, fN = i.generaltransactionmetadata_to_bytes, gN = i.generaltransactionmetadata_from_bytes, bN = i.generaltransactionmetadata_to_hex, hN = i.generaltransactionmetadata_from_hex, yN = i.generaltransactionmetadata_to_json, mN = i.generaltransactionmetadata_to_js_value, vN = i.generaltransactionmetadata_from_json, kN = i.generaltransactionmetadata_new, xN = i.generaltransactionmetadata_len, jN = i.generaltransactionmetadata_insert, SN = i.generaltransactionmetadata_get, EN = i.generaltransactionmetadata_keys, zN = i.__wbg_auxiliarydata_free, CN = i.auxiliarydata_to_bytes, ON = i.auxiliarydata_from_bytes, LN = i.auxiliarydata_to_hex, NN = i.auxiliarydata_from_hex, FN = i.auxiliarydata_to_json, TN = i.auxiliarydata_to_js_value, PN = i.auxiliarydata_from_json, RN = i.auxiliarydata_new, $N = i.auxiliarydata_metadata, DN = i.auxiliarydata_set_metadata, IN = i.auxiliarydata_native_scripts, UN = i.auxiliarydata_set_native_scripts, MN = i.auxiliarydata_plutus_scripts, WN = i.auxiliarydata_set_plutus_scripts, QN = i.auxiliarydata_prefer_alonzo_format, VN = i.auxiliarydata_set_prefer_alonzo_format, BN = i.encode_arbitrary_bytes_as_metadatum, AN = i.decode_arbitrary_bytes_from_metadatum, HN = i.encode_json_str_to_metadatum, qN = i.decode_metadatum_to_json_str, YN = i.__wbg_plutusscript_free, XN = i.plutusscript_to_bytes, KN = i.plutusscript_from_bytes, ZN = i.plutusscript_to_hex, JN = i.plutusscript_from_hex, GN = i.plutusscript_new, tF = i.plutusscript_new_v2, eF = i.plutusscript_new_with_version, _F = i.plutusscript_bytes, rF = i.plutusscript_from_bytes_v2, nF = i.plutusscript_from_bytes_with_version, oF = i.plutusscript_from_hex_with_version, sF = i.plutusscript_hash, aF = i.plutusscript_language_version, iF = i.__wbg_plutusscripts_free, cF = i.plutusscripts_to_bytes, dF = i.plutusscripts_from_bytes, lF = i.plutusscripts_to_hex, pF = i.plutusscripts_from_hex, uF = i.plutusscripts_to_json, wF = i.plutusscripts_to_js_value, fF = i.plutusscripts_from_json, gF = i.plutusscripts_new, bF = i.plutusscripts_get, hF = i.plutusscripts_add, yF = i.__wbg_constrplutusdata_free, mF = i.constrplutusdata_to_bytes, vF = i.constrplutusdata_from_bytes, kF = i.constrplutusdata_to_hex, xF = i.constrplutusdata_from_hex, jF = i.constrplutusdata_alternative, SF = i.constrplutusdata_data, EF = i.constrplutusdata_new, zF = i.__wbg_costmodel_free, CF = i.costmodel_to_bytes, OF = i.costmodel_from_bytes, LF = i.costmodel_to_hex, NF = i.costmodel_from_hex, FF = i.costmodel_to_json, TF = i.costmodel_to_js_value, PF = i.costmodel_from_json, RF = i.costmodel_new, $F = i.costmodel_set, DF = i.costmodel_get, IF = i.__wbg_costmdls_free, UF = i.costmdls_to_bytes, MF = i.costmdls_from_bytes, WF = i.costmdls_to_hex, QF = i.costmdls_from_hex, VF = i.costmdls_to_json, BF = i.costmdls_to_js_value, AF = i.costmdls_from_json, HF = i.costmdls_new, qF = i.costmdls_len, YF = i.costmdls_insert, XF = i.costmdls_get, KF = i.costmdls_keys, ZF = i.costmdls_retain_language_versions, JF = i.__wbg_exunitprices_free, GF = i.exunitprices_to_bytes, tT = i.exunitprices_from_bytes, eT = i.exunitprices_to_hex, _T = i.exunitprices_from_hex, rT = i.exunitprices_to_json, nT = i.exunitprices_to_js_value, oT = i.exunitprices_from_json, sT = i.exunitprices_mem_price, aT = i.exunitprices_step_price, iT = i.exunitprices_new, cT = i.__wbg_exunits_free, dT = i.exunits_to_bytes, lT = i.exunits_from_bytes, pT = i.exunits_to_hex, uT = i.exunits_from_hex, wT = i.exunits_to_json, fT = i.exunits_to_js_value, gT = i.exunits_from_json, bT = i.exunits_mem, hT = i.exunits_steps, yT = i.exunits_new, mT = i.__wbg_language_free, vT = i.language_to_bytes, kT = i.language_from_bytes, xT = i.language_to_hex, jT = i.language_from_hex, ST = i.language_to_json, ET = i.language_to_js_value, zT = i.language_from_json, CT = i.language_new_plutus_v1, OT = i.language_new_plutus_v2, LT = i.language_kind, NT = i.__wbg_languages_free, FT = i.languages_new, TT = i.languages_get, PT = i.languages_add, RT = i.languages_list, $T = i.__wbg_plutusmap_free, DT = i.plutusmap_to_bytes, IT = i.plutusmap_from_bytes, UT = i.plutusmap_to_hex, MT = i.plutusmap_from_hex, WT = i.plutusmap_insert, QT = i.plutusmap_get, VT = i.plutusmap_keys, BT = i.__wbg_plutusdata_free, AT = i.plutusdata_to_bytes, HT = i.plutusdata_from_bytes, qT = i.plutusdata_to_hex, YT = i.plutusdata_from_hex, XT = i.plutusdata_new_constr_plutus_data, KT = i.plutusdata_new_empty_constr_plutus_data, ZT = i.plutusdata_new_single_value_constr_plutus_data, JT = i.plutusdata_new_map, GT = i.plutusdata_new_list, tP = i.plutusdata_new_integer, eP = i.plutusdata_new_bytes, _P = i.plutusdata_kind, rP = i.plutusdata_as_constr_plutus_data, nP = i.plutusdata_as_map, oP = i.plutusdata_as_list, sP = i.plutusdata_as_integer, aP = i.plutusdata_as_bytes, iP = i.plutusdata_from_address, cP = i.__wbg_plutuslist_free, dP = i.plutuslist_to_bytes, lP = i.plutuslist_from_bytes, pP = i.plutuslist_to_hex, uP = i.plutuslist_from_hex, wP = i.plutuslist_new, fP = i.plutuslist_get, gP = i.plutuslist_add, bP = i.__wbg_redeemer_free, hP = i.redeemer_to_bytes, yP = i.redeemer_from_bytes, mP = i.redeemer_to_hex, vP = i.redeemer_from_hex, kP = i.redeemer_to_json, xP = i.redeemer_to_js_value, jP = i.redeemer_from_json, SP = i.redeemer_tag, EP = i.redeemer_index, zP = i.redeemer_data, CP = i.redeemer_ex_units, OP = i.redeemer_new, LP = i.__wbg_redeemertag_free, NP = i.redeemertag_to_bytes, FP = i.redeemertag_from_bytes, TP = i.redeemertag_to_hex, PP = i.redeemertag_from_hex, RP = i.redeemertag_to_json, $P = i.redeemertag_to_js_value, DP = i.redeemertag_from_json, IP = i.redeemertag_new_spend, UP = i.redeemertag_new_mint, MP = i.redeemertag_new_cert, WP = i.redeemertag_new_reward, QP = i.redeemertag_kind, VP = i.__wbg_redeemers_free, BP = i.redeemers_to_bytes, AP = i.redeemers_from_bytes, HP = i.redeemers_to_hex, qP = i.redeemers_from_hex, YP = i.redeemers_to_json, XP = i.redeemers_to_js_value, KP = i.redeemers_from_json, ZP = i.redeemers_get, JP = i.redeemers_add, GP = i.redeemers_total_ex_units, tR = i.__wbg_strings_free, eR = i.strings_get, _R = i.strings_add, rR = i.encode_json_str_to_plutus_datum, nR = i.decode_plutus_datum_to_json_str, oR = i.transactionmetadatumlabels_len, sR = i.metadatamap_len, aR = i.plutusscripts_len, iR = i.metadatalist_len, cR = i.costmodel_len, dR = i.languages_len, lR = i.plutusmap_len, pR = i.transactionmetadatum_kind, uR = i.plutuslist_len, wR = i.redeemers_len, fR = i.strings_len, gR = i.plutusdata_from_json, bR = i.plutusdata_to_json, hR = i.plutusmap_new, yR = i.metadatamap_new, mR = i.transactionmetadatumlabels_new, vR = i.strings_new, kR = i.metadatalist_new, xR = i.redeemers_new, jR = i.__wbg_fixedtransaction_free, SR = i.fixedtransaction_to_bytes, ER = i.fixedtransaction_from_bytes, zR = i.fixedtransaction_to_hex, CR = i.fixedtransaction_from_hex, OR = i.fixedtransaction_new, LR = i.fixedtransaction_new_with_auxiliary, NR = i.fixedtransaction_body, FR = i.fixedtransaction_raw_body, TR = i.fixedtransaction_set_body, PR = i.fixedtransaction_set_witness_set, RR = i.fixedtransaction_witness_set, $R = i.fixedtransaction_raw_witness_set, DR = i.fixedtransaction_set_is_valid, IR = i.fixedtransaction_is_valid, UR = i.fixedtransaction_set_auxiliary_data, MR = i.fixedtransaction_auxiliary_data, WR = i.fixedtransaction_raw_auxiliary_data, QR = i.__wbg_transactionbuilderconfig_free, VR = i.__wbg_transactionbuilderconfigbuilder_free, BR = i.transactionbuilderconfigbuilder_new, AR = i.transactionbuilderconfigbuilder_fee_algo, HR = i.transactionbuilderconfigbuilder_coins_per_utxo_word, qR = i.transactionbuilderconfigbuilder_coins_per_utxo_byte, YR = i.transactionbuilderconfigbuilder_ex_unit_prices, XR = i.transactionbuilderconfigbuilder_pool_deposit, KR = i.transactionbuilderconfigbuilder_key_deposit, ZR = i.transactionbuilderconfigbuilder_max_value_size, JR = i.transactionbuilderconfigbuilder_max_tx_size, GR = i.transactionbuilderconfigbuilder_prefer_pure_change, t$ = i.transactionbuilderconfigbuilder_build, e$ = i.__wbg_transactionbuilder_free, _$ = i.transactionbuilder_add_inputs_from, r$ = i.transactionbuilder_set_inputs, n$ = i.transactionbuilder_set_collateral, o$ = i.transactionbuilder_set_collateral_return, s$ = i.transactionbuilder_set_collateral_return_and_total, a$ = i.transactionbuilder_set_total_collateral, i$ = i.transactionbuilder_set_total_collateral_and_return, c$ = i.transactionbuilder_add_reference_input, d$ = i.transactionbuilder_add_key_input, l$ = i.transactionbuilder_add_script_input, p$ = i.transactionbuilder_add_native_script_input, u$ = i.transactionbuilder_add_plutus_script_input, w$ = i.transactionbuilder_add_bootstrap_input, f$ = i.transactionbuilder_add_input, g$ = i.transactionbuilder_count_missing_input_scripts, b$ = i.transactionbuilder_add_required_native_input_scripts, h$ = i.transactionbuilder_add_required_plutus_input_scripts, y$ = i.transactionbuilder_get_native_input_scripts, m$ = i.transactionbuilder_get_plutus_input_scripts, v$ = i.transactionbuilder_fee_for_input, k$ = i.transactionbuilder_add_output, x$ = i.transactionbuilder_fee_for_output, j$ = i.transactionbuilder_set_fee, S$ = i.transactionbuilder_set_ttl, E$ = i.transactionbuilder_set_ttl_bignum, z$ = i.transactionbuilder_set_validity_start_interval, C$ = i.transactionbuilder_set_validity_start_interval_bignum, O$ = i.transactionbuilder_set_certs, L$ = i.transactionbuilder_set_withdrawals, N$ = i.transactionbuilder_get_auxiliary_data, F$ = i.transactionbuilder_set_auxiliary_data, T$ = i.transactionbuilder_set_metadata, P$ = i.transactionbuilder_add_metadatum, R$ = i.transactionbuilder_add_json_metadatum, $$ = i.transactionbuilder_add_json_metadatum_with_schema, D$ = i.transactionbuilder_set_mint_builder, I$ = i.transactionbuilder_get_mint_builder, U$ = i.transactionbuilder_set_mint, M$ = i.transactionbuilder_get_mint, W$ = i.transactionbuilder_get_mint_scripts, Q$ = i.transactionbuilder_set_mint_asset, V$ = i.transactionbuilder_add_mint_asset, B$ = i.transactionbuilder_add_mint_asset_and_output, A$ = i.transactionbuilder_add_mint_asset_and_output_min_required_coin, H$ = i.transactionbuilder_new, q$ = i.transactionbuilder_get_reference_inputs, Y$ = i.transactionbuilder_get_explicit_input, X$ = i.transactionbuilder_get_implicit_input, K$ = i.transactionbuilder_get_total_input, Z$ = i.transactionbuilder_get_total_output, J$ = i.transactionbuilder_get_explicit_output, G$ = i.transactionbuilder_get_deposit, tD = i.transactionbuilder_get_fee_if_set, eD = i.transactionbuilder_add_change_if_needed, _D = i.transactionbuilder_add_change_if_needed_with_datum, rD = i.transactionbuilder_calc_script_data_hash, nD = i.transactionbuilder_set_script_data_hash, oD = i.transactionbuilder_remove_script_data_hash, sD = i.transactionbuilder_add_required_signer, aD = i.transactionbuilder_full_size, iD = i.transactionbuilder_output_sizes, cD = i.transactionbuilder_build, dD = i.transactionbuilder_build_tx, lD = i.transactionbuilder_build_tx_unsafe, pD = i.transactionbuilder_min_fee, uD = i.__wbg_linearfee_free, wD = i.linearfee_constant, fD = i.linearfee_coefficient, gD = i.linearfee_new, bD = i.min_fee, hD = i.calculate_ex_units_ceil_cost, yD = i.min_script_fee, mD = i.__wbg_transactionbatchlist_free, vD = i.transactionbatchlist_get, kD = i.__wbg_transactionbatch_free, xD = i.transactionbatch_len, jD = i.transactionbatch_get, SD = i.create_send_all, ED = i.transactionbatchlist_len, zD = i.__wbg_networkinfo_free, CD = i.networkinfo_new, OD = i.networkinfo_network_id, LD = i.networkinfo_protocol_magic, ND = i.networkinfo_testnet_preview, FD = i.networkinfo_testnet_preprod, TD = i.networkinfo_testnet, PD = i.networkinfo_mainnet, RD = i.__wbg_stakecredential_free, $D = i.stakecredential_from_keyhash, DD = i.stakecredential_from_scripthash, ID = i.stakecredential_to_keyhash, UD = i.stakecredential_to_scripthash, MD = i.stakecredential_kind, WD = i.stakecredential_to_bytes, QD = i.stakecredential_from_bytes, VD = i.stakecredential_to_hex, BD = i.stakecredential_from_hex, AD = i.stakecredential_to_json, HD = i.stakecredential_to_js_value, qD = i.stakecredential_from_json, YD = i.__wbg_byronaddress_free, XD = i.byronaddress_to_base58, KD = i.byronaddress_to_bytes, ZD = i.byronaddress_from_bytes, JD = i.byronaddress_byron_protocol_magic, GD = i.byronaddress_attributes, tI = i.byronaddress_network_id, eI = i.byronaddress_from_base58, _I = i.byronaddress_icarus_from_key, rI = i.byronaddress_is_valid, nI = i.byronaddress_to_address, oI = i.byronaddress_from_address, sI = i.__wbg_address_free, aI = i.address_from_bytes, iI = i.address_to_json, cI = i.address_to_js_value, dI = i.address_from_json, lI = i.address_to_hex, pI = i.address_from_hex, uI = i.address_to_bytes, wI = i.address_to_bech32, fI = i.address_from_bech32, gI = i.address_network_id, bI = i.__wbg_baseaddress_free, hI = i.baseaddress_new, yI = i.baseaddress_payment_cred, mI = i.baseaddress_stake_cred, vI = i.baseaddress_to_address, kI = i.baseaddress_from_address, xI = i.__wbg_enterpriseaddress_free, jI = i.enterpriseaddress_new, SI = i.enterpriseaddress_to_address, EI = i.enterpriseaddress_from_address, zI = i.rewardaddress_to_address, CI = i.rewardaddress_from_address, OI = i.__wbg_pointer_free, LI = i.pointer_new, NI = i.pointer_new_pointer, FI = i.pointer_slot, TI = i.pointer_tx_index, PI = i.pointer_cert_index, RI = i.pointer_slot_bignum, $I = i.pointer_tx_index_bignum, DI = i.pointer_cert_index_bignum, II = i.__wbg_pointeraddress_free, UI = i.pointeraddress_new, MI = i.pointeraddress_payment_cred, WI = i.pointeraddress_stake_pointer, QI = i.pointeraddress_to_address, VI = i.pointeraddress_from_address, BI = i.__wbg_mintwitness_free, AI = i.mintwitness_new_native_script, HI = i.mintwitness_new_plutus_script, qI = i.__wbg_mintbuilder_free, YI = i.mintbuilder_new, XI = i.mintbuilder_add_asset, KI = i.mintbuilder_set_asset, ZI = i.mintbuilder_build, JI = i.mintbuilder_get_native_scripts, GI = i.mintbuilder_get_plutus_witnesses, tU = i.mintbuilder_get_ref_inputs, eU = i.mintbuilder_get_redeeemers, _U = i.mintbuilder_has_plutus_scripts, rU = i.mintbuilder_has_native_scripts, nU = i.enterpriseaddress_payment_cred, oU = i.rewardaddress_payment_cred, sU = i.rewardaddress_new, aU = i.__wbg_rewardaddress_free, iU = i.__wbindgen_malloc, cU = i.__wbindgen_realloc, dU = i.__wbindgen_add_to_stack_pointer, lU = i.__wbindgen_free, pU = i.__wbindgen_exn_store, uU = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_address_free: sI,
    __wbg_assetname_free: i3,
    __wbg_assetnames_free: h3,
    __wbg_assets_free: L3,
    __wbg_auxiliarydata_free: zN,
    __wbg_auxiliarydatahash_free: OC,
    __wbg_auxiliarydataset_free: q2,
    __wbg_baseaddress_free: bI,
    __wbg_bigint_free: N8,
    __wbg_bignum_free: jE,
    __wbg_bip32privatekey_free: iz,
    __wbg_bip32publickey_free: xz,
    __wbg_block_free: G2,
    __wbg_blockhash_free: k7,
    __wbg_bootstrapwitness_free: N9,
    __wbg_bootstrapwitnesses_free: B9,
    __wbg_byronaddress_free: YD,
    __wbg_certificate_free: Jm,
    __wbg_certificates_free: bb,
    __wbg_constrplutusdata_free: yF,
    __wbg_costmdls_free: IF,
    __wbg_costmodel_free: zF,
    __wbg_datacost_free: ub,
    __wbg_datahash_free: j7,
    __wbg_datumsource_free: U7,
    __wbg_dnsrecordaoraaaa_free: h1,
    __wbg_dnsrecordsrv_free: pS,
    __wbg_ed25519keyhash_free: dC,
    __wbg_ed25519keyhashes_free: xy,
    __wbg_ed25519signature_free: G9,
    __wbg_enterpriseaddress_free: xI,
    __wbg_exunitprices_free: JF,
    __wbg_exunits_free: cT,
    __wbg_fixedtransaction_free: jR,
    __wbg_generaltransactionmetadata_free: wN,
    __wbg_genesisdelegatehash_free: g7,
    __wbg_genesishash_free: b7,
    __wbg_genesishashes_free: I6,
    __wbg_genesiskeydelegation_free: Lm,
    __wbg_header_free: uj,
    __wbg_headerbody_free: Dj,
    __wbg_inputswithscriptwitness_free: L7,
    __wbg_inputwithscriptwitness_free: E7,
    __wbg_int_free: u8,
    __wbg_ipv4_free: Hv,
    __wbg_ipv6_free: _1,
    __wbg_kessignature_free: rO,
    __wbg_kesvkey_free: h7,
    __wbg_language_free: mT,
    __wbg_languages_free: NT,
    __wbg_legacydaedalusprivatekey_free: sC,
    __wbg_linearfee_free: uD,
    __wbg_metadatalist_free: UL,
    __wbg_metadatamap_free: EL,
    __wbg_mint_free: i5,
    __wbg_mintassets_free: r5,
    __wbg_mintbuilder_free: qI,
    __wbg_mintsassets_free: _5,
    __wbg_mintwitness_free: BI,
    __wbg_mirtostakecredentials_free: vv,
    __wbg_moveinstantaneousreward_free: Fv,
    __wbg_moveinstantaneousrewardscert_free: Qm,
    __wbg_multiasset_free: Q3,
    __wbg_multihostname_free: _k,
    __wbg_nativescript_free: e6,
    __wbg_nativescripts_free: j6,
    __wbg_networkid_free: x5,
    __wbg_networkinfo_free: zD,
    __wbg_nonce_free: sO,
    __wbg_operationalcert_free: jj,
    __wbg_outputdatum_free: K4,
    __wbg_plutusdata_free: BT,
    __wbg_plutuslist_free: cP,
    __wbg_plutusmap_free: $T,
    __wbg_plutusscript_free: YN,
    __wbg_plutusscripts_free: iF,
    __wbg_plutusscriptsource_free: R7,
    __wbg_plutuswitness_free: Q7,
    __wbg_plutuswitnesses_free: K7,
    __wbg_pointer_free: OI,
    __wbg_pointeraddress_free: II,
    __wbg_poolmetadata_free: zk,
    __wbg_poolmetadatahash_free: y7,
    __wbg_poolparams_free: Ay,
    __wbg_poolregistration_free: cm,
    __wbg_poolretirement_free: ym,
    __wbg_privatekey_free: Tz,
    __wbg_proposedprotocolparameterupdates_free: nx,
    __wbg_protocolparamupdate_free: Ex,
    __wbg_protocolversion_free: fx,
    __wbg_publickey_free: Az,
    __wbg_publickeys_free: X9,
    __wbg_redeemer_free: bP,
    __wbg_redeemers_free: VP,
    __wbg_redeemertag_free: LP,
    __wbg_relay_free: pk,
    __wbg_relays_free: Ry,
    __wbg_rewardaddress_free: aU,
    __wbg_rewardaddresses_free: Yk,
    __wbg_scriptall_free: H0,
    __wbg_scriptany_free: uS,
    __wbg_scriptdatahash_free: x7,
    __wbg_scripthash_free: f7,
    __wbg_scripthashes_free: Y6,
    __wbg_scriptnofk_free: i4,
    __wbg_scriptpubkey_free: $0,
    __wbg_scriptref_free: $4,
    __wbg_singlehostaddr_free: P1,
    __wbg_singlehostname_free: H1,
    __wbg_stakecredential_free: RD,
    __wbg_stakecredentials_free: Ik,
    __wbg_stakedelegation_free: uy,
    __wbg_stakederegistration_free: ry,
    __wbg_stakeregistration_free: DS,
    __wbg_strings_free: tR,
    __wbg_timelockexpiry_free: j4,
    __wbg_timelockstart_free: gS,
    __wbg_transaction_free: Fg,
    __wbg_transactionbatch_free: kD,
    __wbg_transactionbatchlist_free: mD,
    __wbg_transactionbodies_free: z2,
    __wbg_transactionbody_free: Cb,
    __wbg_transactionbuilder_free: e$,
    __wbg_transactionbuilderconfig_free: QR,
    __wbg_transactionbuilderconfigbuilder_free: VR,
    __wbg_transactionhash_free: m7,
    __wbg_transactioninput_free: yh,
    __wbg_transactioninputs_free: Hg,
    __wbg_transactionmetadatum_free: HL,
    __wbg_transactionmetadatumlabels_free: aN,
    __wbg_transactionoutput_free: Lh,
    __wbg_transactionoutputamountbuilder_free: JS,
    __wbg_transactionoutputbuilder_free: AS,
    __wbg_transactionoutputs_free: rb,
    __wbg_transactionunspentoutput_free: oE,
    __wbg_transactionunspentoutputs_free: gE,
    __wbg_transactionwitnessset_free: f0,
    __wbg_transactionwitnesssets_free: D2,
    __wbg_txbuilderconstants_free: mL,
    __wbg_txinputsbuilder_free: G7,
    __wbg_unitinterval_free: P5,
    __wbg_update_free: z6,
    __wbg_url_free: lS,
    __wbg_value_free: HE,
    __wbg_vkey_free: Gz,
    __wbg_vkeys_free: c9,
    __wbg_vkeywitness_free: p9,
    __wbg_vkeywitnesses_free: v9,
    __wbg_vrfcert_free: bO,
    __wbg_vrfkeyhash_free: v7,
    __wbg_vrfvkey_free: S7,
    __wbg_withdrawals_free: n0,
    __wbindgen_add_to_stack_pointer: dU,
    __wbindgen_exn_store: pU,
    __wbindgen_free: lU,
    __wbindgen_malloc: iU,
    __wbindgen_realloc: cU,
    address_from_bech32: fI,
    address_from_bytes: aI,
    address_from_hex: pI,
    address_from_json: dI,
    address_network_id: gI,
    address_to_bech32: wI,
    address_to_bytes: uI,
    address_to_hex: lI,
    address_to_js_value: cI,
    address_to_json: iI,
    assetname_from_bytes: d3,
    assetname_from_hex: p3,
    assetname_from_json: f3,
    assetname_name: b3,
    assetname_new: g3,
    assetname_to_bytes: c3,
    assetname_to_hex: l3,
    assetname_to_js_value: w3,
    assetname_to_json: u3,
    assetnames_add: O3,
    assetnames_from_bytes: m3,
    assetnames_from_hex: k3,
    assetnames_from_json: S3,
    assetnames_get: C3,
    assetnames_len: z3,
    assetnames_new: E3,
    assetnames_to_bytes: y3,
    assetnames_to_hex: v3,
    assetnames_to_js_value: j3,
    assetnames_to_json: x3,
    assets_from_bytes: F3,
    assets_from_hex: P3,
    assets_from_json: D3,
    assets_get: M3,
    assets_insert: U3,
    assets_keys: W3,
    assets_len: Z5,
    assets_new: I3,
    assets_to_bytes: N3,
    assets_to_hex: T3,
    assets_to_js_value: $3,
    assets_to_json: R3,
    auxiliarydata_from_bytes: ON,
    auxiliarydata_from_hex: NN,
    auxiliarydata_from_json: PN,
    auxiliarydata_metadata: $N,
    auxiliarydata_native_scripts: IN,
    auxiliarydata_new: RN,
    auxiliarydata_plutus_scripts: MN,
    auxiliarydata_prefer_alonzo_format: QN,
    auxiliarydata_set_metadata: DN,
    auxiliarydata_set_native_scripts: UN,
    auxiliarydata_set_plutus_scripts: WN,
    auxiliarydata_set_prefer_alonzo_format: VN,
    auxiliarydata_to_bytes: CN,
    auxiliarydata_to_hex: LN,
    auxiliarydata_to_js_value: TN,
    auxiliarydata_to_json: FN,
    auxiliarydatahash_from_bech32: TC,
    auxiliarydatahash_from_bytes: LC,
    auxiliarydatahash_from_hex: RC,
    auxiliarydatahash_to_bech32: FC,
    auxiliarydatahash_to_bytes: NC,
    auxiliarydatahash_to_hex: PC,
    auxiliarydataset_get: Z2,
    auxiliarydataset_indices: J2,
    auxiliarydataset_insert: K2,
    auxiliarydataset_len: X2,
    auxiliarydataset_new: Y2,
    baseaddress_from_address: kI,
    baseaddress_new: hI,
    baseaddress_payment_cred: yI,
    baseaddress_stake_cred: mI,
    baseaddress_to_address: vI,
    bigint_add: B8,
    bigint_as_int: W8,
    bigint_as_u64: M8,
    bigint_div_ceil: Y8,
    bigint_from_bytes: T8,
    bigint_from_hex: R8,
    bigint_from_json: I8,
    bigint_from_str: Q8,
    bigint_increment: q8,
    bigint_is_zero: U8,
    bigint_mul: A8,
    bigint_one: H8,
    bigint_to_bytes: F8,
    bigint_to_hex: P8,
    bigint_to_js_value: D8,
    bigint_to_json: $8,
    bigint_to_str: V8,
    bignum_checked_add: UE,
    bignum_checked_mul: IE,
    bignum_checked_sub: ME,
    bignum_clamped_sub: WE,
    bignum_compare: QE,
    bignum_div_floor: DE,
    bignum_from_bytes: EE,
    bignum_from_hex: CE,
    bignum_from_json: NE,
    bignum_from_str: FE,
    bignum_is_zero: $E,
    bignum_less_than: VE,
    bignum_max: AE,
    bignum_max_value: BE,
    bignum_one: RE,
    bignum_to_bytes: SE,
    bignum_to_hex: zE,
    bignum_to_js_value: LE,
    bignum_to_json: OE,
    bignum_to_str: TE,
    bignum_zero: PE,
    bip32privatekey_as_bytes: gz,
    bip32privatekey_chaincode: mz,
    bip32privatekey_derive: cz,
    bip32privatekey_from_128_xprv: dz,
    bip32privatekey_from_bech32: bz,
    bip32privatekey_from_bip39_entropy: yz,
    bip32privatekey_from_bytes: fz,
    bip32privatekey_from_hex: kz,
    bip32privatekey_generate_ed25519_bip32: pz,
    bip32privatekey_to_128_xprv: lz,
    bip32privatekey_to_bech32: hz,
    bip32privatekey_to_hex: vz,
    bip32privatekey_to_public: wz,
    bip32privatekey_to_raw_key: uz,
    bip32publickey_as_bytes: zz,
    bip32publickey_chaincode: Lz,
    bip32publickey_derive: jz,
    bip32publickey_from_bech32: Cz,
    bip32publickey_from_bytes: Ez,
    bip32publickey_from_hex: Fz,
    bip32publickey_to_bech32: Oz,
    bip32publickey_to_hex: Nz,
    bip32publickey_to_raw_key: Sz,
    block_auxiliary_data_set: dj,
    block_from_bytes: ej,
    block_from_hex: rj,
    block_from_json: sj,
    block_header: aj,
    block_invalid_transactions: lj,
    block_new: pj,
    block_to_bytes: tj,
    block_to_hex: _j,
    block_to_js_value: oj,
    block_to_json: nj,
    block_transaction_bodies: ij,
    block_transaction_witness_sets: cj,
    blockhash_from_bech32: VC,
    blockhash_from_bytes: QC,
    blockhash_from_hex: BC,
    blockhash_to_bech32: KO,
    blockhash_to_bytes: i7,
    blockhash_to_hex: DO,
    bootstrapwitness_attributes: Q9,
    bootstrapwitness_chain_code: W9,
    bootstrapwitness_from_bytes: T9,
    bootstrapwitness_from_hex: R9,
    bootstrapwitness_from_json: I9,
    bootstrapwitness_new: V9,
    bootstrapwitness_signature: M9,
    bootstrapwitness_to_bytes: F9,
    bootstrapwitness_to_hex: P9,
    bootstrapwitness_to_js_value: D9,
    bootstrapwitness_to_json: $9,
    bootstrapwitness_vkey: U9,
    bootstrapwitnesses_add: Y9,
    bootstrapwitnesses_get: q9,
    bootstrapwitnesses_len: H9,
    bootstrapwitnesses_new: A9,
    byronaddress_attributes: GD,
    byronaddress_byron_protocol_magic: JD,
    byronaddress_from_address: oI,
    byronaddress_from_base58: eI,
    byronaddress_from_bytes: ZD,
    byronaddress_icarus_from_key: _I,
    byronaddress_is_valid: rI,
    byronaddress_network_id: tI,
    byronaddress_to_address: nI,
    byronaddress_to_base58: XD,
    byronaddress_to_bytes: KD,
    calculate_ex_units_ceil_cost: hD,
    certificate_as_genesis_key_delegation: yv,
    certificate_as_move_instantaneous_rewards_cert: mv,
    certificate_as_pool_registration: bv,
    certificate_as_pool_retirement: hv,
    certificate_as_stake_delegation: gv,
    certificate_as_stake_deregistration: fv,
    certificate_as_stake_registration: wv,
    certificate_from_bytes: tv,
    certificate_from_hex: _v,
    certificate_from_json: ov,
    certificate_kind: uv,
    certificate_new_genesis_key_delegation: lv,
    certificate_new_move_instantaneous_rewards_cert: pv,
    certificate_new_pool_registration: cv,
    certificate_new_pool_retirement: dv,
    certificate_new_stake_delegation: iv,
    certificate_new_stake_deregistration: av,
    certificate_new_stake_registration: sv,
    certificate_to_bytes: Gm,
    certificate_to_hex: ev,
    certificate_to_js_value: nv,
    certificate_to_json: rv,
    certificates_add: zb,
    certificates_from_bytes: yb,
    certificates_from_hex: vb,
    certificates_from_json: jb,
    certificates_get: Eb,
    certificates_len: K5,
    certificates_new: Sb,
    certificates_to_bytes: hb,
    certificates_to_hex: mb,
    certificates_to_js_value: xb,
    certificates_to_json: kb,
    constrplutusdata_alternative: jF,
    constrplutusdata_data: SF,
    constrplutusdata_from_bytes: vF,
    constrplutusdata_from_hex: xF,
    constrplutusdata_new: EF,
    constrplutusdata_to_bytes: mF,
    constrplutusdata_to_hex: kF,
    costmdls_from_bytes: MF,
    costmdls_from_hex: QF,
    costmdls_from_json: AF,
    costmdls_get: XF,
    costmdls_insert: YF,
    costmdls_keys: KF,
    costmdls_len: qF,
    costmdls_new: HF,
    costmdls_retain_language_versions: ZF,
    costmdls_to_bytes: UF,
    costmdls_to_hex: WF,
    costmdls_to_js_value: BF,
    costmdls_to_json: VF,
    costmodel_from_bytes: OF,
    costmodel_from_hex: NF,
    costmodel_from_json: PF,
    costmodel_get: DF,
    costmodel_len: cR,
    costmodel_new: RF,
    costmodel_set: $F,
    costmodel_to_bytes: CF,
    costmodel_to_hex: LF,
    costmodel_to_js_value: TF,
    costmodel_to_json: FF,
    create_send_all: SD,
    datacost_coins_per_byte: gb,
    datacost_new_coins_per_byte: fb,
    datacost_new_coins_per_word: wb,
    datahash_from_bech32: HC,
    datahash_from_bytes: AC,
    datahash_from_hex: qC,
    datahash_to_bech32: ZO,
    datahash_to_bytes: c7,
    datahash_to_hex: IO,
    datumsource_new: M7,
    datumsource_new_ref_input: W7,
    decode_arbitrary_bytes_from_metadatum: AN,
    decode_metadatum_to_json_str: qN,
    decode_plutus_datum_to_json_str: nR,
    decrypt_with_password: BS,
    dnsrecordaoraaaa_from_bytes: m1,
    dnsrecordaoraaaa_from_hex: k1,
    dnsrecordaoraaaa_from_json: S1,
    dnsrecordaoraaaa_new: E1,
    dnsrecordaoraaaa_record: z1,
    dnsrecordaoraaaa_to_bytes: y1,
    dnsrecordaoraaaa_to_hex: v1,
    dnsrecordaoraaaa_to_js_value: j1,
    dnsrecordaoraaaa_to_json: x1,
    dnsrecordsrv_from_bytes: O1,
    dnsrecordsrv_from_hex: N1,
    dnsrecordsrv_from_json: F1,
    dnsrecordsrv_new: T1,
    dnsrecordsrv_record: iS,
    dnsrecordsrv_to_bytes: C1,
    dnsrecordsrv_to_hex: L1,
    dnsrecordsrv_to_js_value: dS,
    dnsrecordsrv_to_json: QS,
    ed25519keyhash_from_bech32: wC,
    ed25519keyhash_from_bytes: lC,
    ed25519keyhash_from_hex: gC,
    ed25519keyhash_to_bech32: uC,
    ed25519keyhash_to_bytes: pC,
    ed25519keyhash_to_hex: fC,
    ed25519keyhashes_add: Ty,
    ed25519keyhashes_from_bytes: Sy,
    ed25519keyhashes_from_hex: zy,
    ed25519keyhashes_from_json: Ly,
    ed25519keyhashes_get: Fy,
    ed25519keyhashes_len: D5,
    ed25519keyhashes_new: Ny,
    ed25519keyhashes_to_bytes: jy,
    ed25519keyhashes_to_hex: Ey,
    ed25519keyhashes_to_js_value: Oy,
    ed25519keyhashes_to_json: Cy,
    ed25519keyhashes_to_option: Py,
    ed25519signature_from_bech32: rC,
    ed25519signature_from_bytes: oC,
    ed25519signature_from_hex: nC,
    ed25519signature_to_bech32: eC,
    ed25519signature_to_bytes: tC,
    ed25519signature_to_hex: _C,
    encode_arbitrary_bytes_as_metadatum: BN,
    encode_json_str_to_metadatum: HN,
    encode_json_str_to_native_script: sz,
    encode_json_str_to_plutus_datum: rR,
    encrypt_with_password: VS,
    enterpriseaddress_from_address: EI,
    enterpriseaddress_new: jI,
    enterpriseaddress_payment_cred: nU,
    enterpriseaddress_to_address: SI,
    exunitprices_from_bytes: tT,
    exunitprices_from_hex: _T,
    exunitprices_from_json: oT,
    exunitprices_mem_price: sT,
    exunitprices_new: iT,
    exunitprices_step_price: aT,
    exunitprices_to_bytes: GF,
    exunitprices_to_hex: eT,
    exunitprices_to_js_value: nT,
    exunitprices_to_json: rT,
    exunits_from_bytes: lT,
    exunits_from_hex: uT,
    exunits_from_json: gT,
    exunits_mem: bT,
    exunits_new: yT,
    exunits_steps: hT,
    exunits_to_bytes: dT,
    exunits_to_hex: pT,
    exunits_to_js_value: fT,
    exunits_to_json: wT,
    fixedtransaction_auxiliary_data: MR,
    fixedtransaction_body: NR,
    fixedtransaction_from_bytes: ER,
    fixedtransaction_from_hex: CR,
    fixedtransaction_is_valid: IR,
    fixedtransaction_new: OR,
    fixedtransaction_new_with_auxiliary: LR,
    fixedtransaction_raw_auxiliary_data: WR,
    fixedtransaction_raw_body: FR,
    fixedtransaction_raw_witness_set: $R,
    fixedtransaction_set_auxiliary_data: UR,
    fixedtransaction_set_body: TR,
    fixedtransaction_set_is_valid: DR,
    fixedtransaction_set_witness_set: PR,
    fixedtransaction_to_bytes: SR,
    fixedtransaction_to_hex: zR,
    fixedtransaction_witness_set: RR,
    generaltransactionmetadata_from_bytes: gN,
    generaltransactionmetadata_from_hex: hN,
    generaltransactionmetadata_from_json: vN,
    generaltransactionmetadata_get: SN,
    generaltransactionmetadata_insert: jN,
    generaltransactionmetadata_keys: EN,
    generaltransactionmetadata_len: xN,
    generaltransactionmetadata_new: kN,
    generaltransactionmetadata_to_bytes: fN,
    generaltransactionmetadata_to_hex: bN,
    generaltransactionmetadata_to_js_value: mN,
    generaltransactionmetadata_to_json: yN,
    genesisdelegatehash_from_bech32: jC,
    genesisdelegatehash_from_bytes: xC,
    genesisdelegatehash_from_hex: SC,
    genesisdelegatehash_to_bech32: AO,
    genesisdelegatehash_to_bytes: r7,
    genesisdelegatehash_to_hex: FO,
    genesishash_from_bech32: zC,
    genesishash_from_bytes: EC,
    genesishash_from_hex: CC,
    genesishash_to_bech32: HO,
    genesishash_to_bytes: n7,
    genesishash_to_hex: TO,
    genesishashes_add: q6,
    genesishashes_from_bytes: M6,
    genesishashes_from_hex: Q6,
    genesishashes_from_json: A6,
    genesishashes_get: H6,
    genesishashes_len: V5,
    genesishashes_new: OS,
    genesishashes_to_bytes: U6,
    genesishashes_to_hex: W6,
    genesishashes_to_js_value: B6,
    genesishashes_to_json: V6,
    genesiskeydelegation_from_bytes: Fm,
    genesiskeydelegation_from_hex: Pm,
    genesiskeydelegation_from_json: Dm,
    genesiskeydelegation_genesis_delegate_hash: Um,
    genesiskeydelegation_genesishash: Im,
    genesiskeydelegation_new: Wm,
    genesiskeydelegation_to_bytes: Nm,
    genesiskeydelegation_to_hex: Tm,
    genesiskeydelegation_to_js_value: $m,
    genesiskeydelegation_to_json: Rm,
    genesiskeydelegation_vrf_keyhash: Mm,
    get_deposit: rz,
    get_implicit_input: _z,
    hash_auxiliary_data: J8,
    hash_plutus_data: tz,
    hash_script_data: ez,
    hash_transaction: G8,
    header_body_signature: kj,
    header_from_bytes: fj,
    header_from_hex: bj,
    header_from_json: mj,
    header_header_body: vj,
    header_new: xj,
    header_to_bytes: wj,
    header_to_hex: gj,
    header_to_js_value: yj,
    header_to_json: hj,
    headerbody_block_body_hash: r3,
    headerbody_block_body_size: _3,
    headerbody_block_number: Aj,
    headerbody_from_bytes: Uj,
    headerbody_from_hex: Wj,
    headerbody_from_json: Bj,
    headerbody_has_nonce_and_leader_vrf: Zj,
    headerbody_has_vrf_result: t3,
    headerbody_issuer_vkey: Xj,
    headerbody_leader_vrf_or_nothing: Gj,
    headerbody_new: s3,
    headerbody_new_headerbody: a3,
    headerbody_nonce_vrf_or_nothing: Jj,
    headerbody_operational_cert: n3,
    headerbody_prev_hash: Yj,
    headerbody_protocol_version: o3,
    headerbody_slot: Hj,
    headerbody_slot_bignum: qj,
    headerbody_to_bytes: Ij,
    headerbody_to_hex: Mj,
    headerbody_to_js_value: Vj,
    headerbody_to_json: Qj,
    headerbody_vrf_result_or_nothing: e3,
    headerbody_vrf_vkey: Kj,
    inputswithscriptwitness_add: F7,
    inputswithscriptwitness_get: T7,
    inputswithscriptwitness_len: P7,
    inputswithscriptwitness_new: N7,
    inputwithscriptwitness_input: O7,
    inputwithscriptwitness_new_with_native_script_witness: z7,
    inputwithscriptwitness_new_with_plutus_witness: C7,
    int_as_i32: z8,
    int_as_i32_or_fail: C8,
    int_as_i32_or_nothing: az,
    int_as_negative: E8,
    int_as_positive: S8,
    int_from_bytes: f8,
    int_from_hex: b8,
    int_from_json: m8,
    int_from_str: L8,
    int_is_positive: j8,
    int_new: v8,
    int_new_i32: x8,
    int_new_negative: k8,
    int_to_bytes: w8,
    int_to_hex: g8,
    int_to_js_value: y8,
    int_to_json: h8,
    int_to_str: O8,
    ipv4_from_bytes: Yv,
    ipv4_from_hex: Kv,
    ipv4_from_json: Gv,
    ipv4_ip: e1,
    ipv4_new: t1,
    ipv4_to_bytes: qv,
    ipv4_to_hex: Xv,
    ipv4_to_js_value: Jv,
    ipv4_to_json: Zv,
    ipv6_from_bytes: n1,
    ipv6_from_hex: s1,
    ipv6_from_json: c1,
    ipv6_ip: l1,
    ipv6_new: d1,
    ipv6_to_bytes: r1,
    ipv6_to_hex: o1,
    ipv6_to_js_value: i1,
    ipv6_to_json: a1,
    kessignature_from_bytes: oO,
    kessignature_to_bytes: nO,
    kesvkey_from_bech32: eO,
    kesvkey_from_bytes: tO,
    kesvkey_from_hex: _O,
    kesvkey_to_bech32: t7,
    kesvkey_to_bytes: p7,
    kesvkey_to_hex: WO,
    language_from_bytes: kT,
    language_from_hex: jT,
    language_from_json: zT,
    language_kind: LT,
    language_new_plutus_v1: CT,
    language_new_plutus_v2: OT,
    language_to_bytes: vT,
    language_to_hex: xT,
    language_to_js_value: ET,
    language_to_json: ST,
    languages_add: PT,
    languages_get: TT,
    languages_len: dR,
    languages_list: RT,
    languages_new: FT,
    legacydaedalusprivatekey_as_bytes: iC,
    legacydaedalusprivatekey_chaincode: cC,
    legacydaedalusprivatekey_from_bytes: aC,
    linearfee_coefficient: fD,
    linearfee_constant: wD,
    linearfee_new: gD,
    make_daedalus_bootstrap_witness: X8,
    make_icarus_bootstrap_witness: K8,
    make_vkey_witness: Z8,
    memory: kg,
    metadatalist_add: AL,
    metadatalist_from_bytes: WL,
    metadatalist_from_hex: VL,
    metadatalist_get: BL,
    metadatalist_len: iR,
    metadatalist_new: kR,
    metadatalist_to_bytes: ML,
    metadatalist_to_hex: QL,
    metadatamap_from_bytes: CL,
    metadatamap_from_hex: LL,
    metadatamap_get: PL,
    metadatamap_get_i32: $L,
    metadatamap_get_str: RL,
    metadatamap_has: DL,
    metadatamap_insert: NL,
    metadatamap_insert_i32: TL,
    metadatamap_insert_str: FL,
    metadatamap_keys: IL,
    metadatamap_len: sR,
    metadatamap_new: yR,
    metadatamap_to_bytes: zL,
    metadatamap_to_hex: OL,
    min_ada_for_output: nz,
    min_ada_required: oz,
    min_fee: bD,
    min_script_fee: yD,
    mint_as_negative_multiasset: k5,
    mint_as_positive_multiasset: v5,
    mint_from_bytes: d5,
    mint_from_hex: p5,
    mint_from_json: f5,
    mint_get: h5,
    mint_get_all: y5,
    mint_insert: b5,
    mint_keys: m5,
    mint_len: tS,
    mint_new: $S,
    mint_new_from_entry: g5,
    mint_to_bytes: c5,
    mint_to_hex: l5,
    mint_to_js_value: w5,
    mint_to_json: u5,
    mintassets_get: s5,
    mintassets_insert: o5,
    mintassets_keys: a5,
    mintassets_len: G5,
    mintassets_new: RS,
    mintassets_new_from_entry: n5,
    mintbuilder_add_asset: XI,
    mintbuilder_build: ZI,
    mintbuilder_get_native_scripts: JI,
    mintbuilder_get_plutus_witnesses: GI,
    mintbuilder_get_redeeemers: eU,
    mintbuilder_get_ref_inputs: tU,
    mintbuilder_has_native_scripts: rU,
    mintbuilder_has_plutus_scripts: _U,
    mintbuilder_new: YI,
    mintbuilder_set_asset: KI,
    mintwitness_new_native_script: AI,
    mintwitness_new_plutus_script: HI,
    mirtostakecredentials_from_bytes: xv,
    mirtostakecredentials_from_hex: Sv,
    mirtostakecredentials_from_json: Cv,
    mirtostakecredentials_get: Lv,
    mirtostakecredentials_insert: Ov,
    mirtostakecredentials_keys: Nv,
    mirtostakecredentials_len: X5,
    mirtostakecredentials_new: yS,
    mirtostakecredentials_to_bytes: kv,
    mirtostakecredentials_to_hex: jv,
    mirtostakecredentials_to_js_value: zv,
    mirtostakecredentials_to_json: Ev,
    moveinstantaneousreward_as_to_other_pot: Bv,
    moveinstantaneousreward_as_to_stake_creds: Av,
    moveinstantaneousreward_from_bytes: Pv,
    moveinstantaneousreward_from_hex: $v,
    moveinstantaneousreward_from_json: Uv,
    moveinstantaneousreward_kind: Vv,
    moveinstantaneousreward_new_to_other_pot: Mv,
    moveinstantaneousreward_new_to_stake_creds: Wv,
    moveinstantaneousreward_pot: Qv,
    moveinstantaneousreward_to_bytes: Tv,
    moveinstantaneousreward_to_hex: Rv,
    moveinstantaneousreward_to_js_value: Iv,
    moveinstantaneousreward_to_json: Dv,
    moveinstantaneousrewardscert_from_bytes: Bm,
    moveinstantaneousrewardscert_from_hex: Hm,
    moveinstantaneousrewardscert_from_json: Xm,
    moveinstantaneousrewardscert_move_instantaneous_reward: Km,
    moveinstantaneousrewardscert_new: Zm,
    moveinstantaneousrewardscert_to_bytes: Vm,
    moveinstantaneousrewardscert_to_hex: Am,
    moveinstantaneousrewardscert_to_js_value: Ym,
    moveinstantaneousrewardscert_to_json: qm,
    multiasset_from_bytes: B3,
    multiasset_from_hex: H3,
    multiasset_from_json: X3,
    multiasset_get: Z3,
    multiasset_get_asset: G3,
    multiasset_insert: K3,
    multiasset_keys: t5,
    multiasset_len: J5,
    multiasset_new: PS,
    multiasset_set_asset: J3,
    multiasset_sub: e5,
    multiasset_to_bytes: V3,
    multiasset_to_hex: A3,
    multiasset_to_js_value: Y3,
    multiasset_to_json: q3,
    multihostname_dns_name: dk,
    multihostname_from_bytes: nk,
    multihostname_from_hex: sk,
    multihostname_from_json: ck,
    multihostname_new: lk,
    multihostname_to_bytes: rk,
    multihostname_to_hex: ok,
    multihostname_to_js_value: ik,
    multihostname_to_json: ak,
    nativescript_as_script_all: h6,
    nativescript_as_script_any: y6,
    nativescript_as_script_n_of_k: m6,
    nativescript_as_script_pubkey: b6,
    nativescript_as_timelock_expiry: k6,
    nativescript_as_timelock_start: v6,
    nativescript_from_bytes: r6,
    nativescript_from_hex: o6,
    nativescript_from_json: i6,
    nativescript_get_required_signers: x6,
    nativescript_hash: c6,
    nativescript_kind: g6,
    nativescript_new_script_all: l6,
    nativescript_new_script_any: p6,
    nativescript_new_script_n_of_k: u6,
    nativescript_new_script_pubkey: d6,
    nativescript_new_timelock_expiry: f6,
    nativescript_new_timelock_start: w6,
    nativescript_to_bytes: _6,
    nativescript_to_hex: n6,
    nativescript_to_js_value: a6,
    nativescript_to_json: s6,
    nativescripts_add: E6,
    nativescripts_get: S6,
    nativescripts_len: Q5,
    nativescripts_new: TS,
    networkid_from_bytes: S5,
    networkid_from_hex: z5,
    networkid_from_json: L5,
    networkid_kind: T5,
    networkid_mainnet: F5,
    networkid_testnet: N5,
    networkid_to_bytes: j5,
    networkid_to_hex: E5,
    networkid_to_js_value: O5,
    networkid_to_json: C5,
    networkinfo_mainnet: PD,
    networkinfo_network_id: OD,
    networkinfo_new: CD,
    networkinfo_protocol_magic: LD,
    networkinfo_testnet: TD,
    networkinfo_testnet_preprod: FD,
    networkinfo_testnet_preview: ND,
    nonce_from_bytes: iO,
    nonce_from_hex: dO,
    nonce_from_json: uO,
    nonce_get_hash: gO,
    nonce_new_from_hash: fO,
    nonce_new_identity: wO,
    nonce_to_bytes: aO,
    nonce_to_hex: cO,
    nonce_to_js_value: pO,
    nonce_to_json: lO,
    operationalcert_from_bytes: Ej,
    operationalcert_from_hex: Cj,
    operationalcert_from_json: Nj,
    operationalcert_hot_vkey: Fj,
    operationalcert_kes_period: Pj,
    operationalcert_new: $j,
    operationalcert_sequence_number: Tj,
    operationalcert_sigma: Rj,
    operationalcert_to_bytes: Sj,
    operationalcert_to_hex: zj,
    operationalcert_to_js_value: Lj,
    operationalcert_to_json: Oj,
    outputdatum_data: t6,
    outputdatum_data_hash: G4,
    outputdatum_new_data: J4,
    outputdatum_new_data_hash: Z4,
    plutusdata_as_bytes: aP,
    plutusdata_as_constr_plutus_data: rP,
    plutusdata_as_integer: sP,
    plutusdata_as_list: oP,
    plutusdata_as_map: nP,
    plutusdata_from_address: iP,
    plutusdata_from_bytes: HT,
    plutusdata_from_hex: YT,
    plutusdata_from_json: gR,
    plutusdata_kind: _P,
    plutusdata_new_bytes: eP,
    plutusdata_new_constr_plutus_data: XT,
    plutusdata_new_empty_constr_plutus_data: KT,
    plutusdata_new_integer: tP,
    plutusdata_new_list: GT,
    plutusdata_new_map: JT,
    plutusdata_new_single_value_constr_plutus_data: ZT,
    plutusdata_to_bytes: AT,
    plutusdata_to_hex: qT,
    plutusdata_to_json: bR,
    plutuslist_add: gP,
    plutuslist_from_bytes: lP,
    plutuslist_from_hex: uP,
    plutuslist_get: fP,
    plutuslist_len: uR,
    plutuslist_new: wP,
    plutuslist_to_bytes: dP,
    plutuslist_to_hex: pP,
    plutusmap_from_bytes: IT,
    plutusmap_from_hex: MT,
    plutusmap_get: QT,
    plutusmap_insert: WT,
    plutusmap_keys: VT,
    plutusmap_len: lR,
    plutusmap_new: hR,
    plutusmap_to_bytes: DT,
    plutusmap_to_hex: UT,
    plutusscript_bytes: _F,
    plutusscript_from_bytes: KN,
    plutusscript_from_bytes_v2: rF,
    plutusscript_from_bytes_with_version: nF,
    plutusscript_from_hex: JN,
    plutusscript_from_hex_with_version: oF,
    plutusscript_hash: sF,
    plutusscript_language_version: aF,
    plutusscript_new: GN,
    plutusscript_new_v2: tF,
    plutusscript_new_with_version: eF,
    plutusscript_to_bytes: XN,
    plutusscript_to_hex: ZN,
    plutusscripts_add: hF,
    plutusscripts_from_bytes: dF,
    plutusscripts_from_hex: pF,
    plutusscripts_from_json: fF,
    plutusscripts_get: bF,
    plutusscripts_len: aR,
    plutusscripts_new: gF,
    plutusscripts_to_bytes: cF,
    plutusscripts_to_hex: lF,
    plutusscripts_to_js_value: wF,
    plutusscripts_to_json: uF,
    plutusscriptsource_new: $7,
    plutusscriptsource_new_ref_input: D7,
    plutusscriptsource_new_ref_input_with_lang_ver: I7,
    plutuswitness_datum: Y7,
    plutuswitness_new: V7,
    plutuswitness_new_with_ref: B7,
    plutuswitness_new_with_ref_without_datum: H7,
    plutuswitness_new_without_datum: A7,
    plutuswitness_redeemer: X7,
    plutuswitness_script: q7,
    plutuswitnesses_add: J7,
    plutuswitnesses_get: Z7,
    plutuswitnesses_len: xL,
    plutuswitnesses_new: SL,
    pointer_cert_index: PI,
    pointer_cert_index_bignum: DI,
    pointer_new: LI,
    pointer_new_pointer: NI,
    pointer_slot: FI,
    pointer_slot_bignum: RI,
    pointer_tx_index: TI,
    pointer_tx_index_bignum: $I,
    pointeraddress_from_address: VI,
    pointeraddress_new: UI,
    pointeraddress_payment_cred: MI,
    pointeraddress_stake_pointer: WI,
    pointeraddress_to_address: QI,
    poolmetadata_from_bytes: Ok,
    poolmetadata_from_hex: Nk,
    poolmetadata_from_json: Pk,
    poolmetadata_new: Dk,
    poolmetadata_pool_metadata_hash: $k,
    poolmetadata_to_bytes: Ck,
    poolmetadata_to_hex: Lk,
    poolmetadata_to_js_value: Tk,
    poolmetadata_to_json: Fk,
    poolmetadata_url: Rk,
    poolmetadatahash_from_bech32: DC,
    poolmetadatahash_from_bytes: $C,
    poolmetadatahash_from_hex: IC,
    poolmetadatahash_to_bech32: YO,
    poolmetadatahash_to_bytes: s7,
    poolmetadatahash_to_hex: RO,
    poolparams_cost: _m,
    poolparams_from_bytes: qy,
    poolparams_from_hex: Xy,
    poolparams_from_json: Jy,
    poolparams_margin: rm,
    poolparams_new: im,
    poolparams_operator: Gy,
    poolparams_pledge: em,
    poolparams_pool_metadata: am,
    poolparams_pool_owners: om,
    poolparams_relays: sm,
    poolparams_reward_account: nm,
    poolparams_to_bytes: Hy,
    poolparams_to_hex: Yy,
    poolparams_to_js_value: Zy,
    poolparams_to_json: Ky,
    poolparams_vrf_keyhash: tm,
    poolregistration_from_bytes: lm,
    poolregistration_from_hex: um,
    poolregistration_from_json: gm,
    poolregistration_new: hm,
    poolregistration_pool_params: bm,
    poolregistration_to_bytes: dm,
    poolregistration_to_hex: pm,
    poolregistration_to_js_value: fm,
    poolregistration_to_json: wm,
    poolretirement_epoch: Cm,
    poolretirement_from_bytes: vm,
    poolretirement_from_hex: xm,
    poolretirement_from_json: Em,
    poolretirement_new: Om,
    poolretirement_pool_keyhash: zm,
    poolretirement_to_bytes: mm,
    poolretirement_to_hex: km,
    poolretirement_to_js_value: Sm,
    poolretirement_to_json: jm,
    privatekey_as_bytes: Uz,
    privatekey_from_bech32: Dz,
    privatekey_from_extended_bytes: Mz,
    privatekey_from_hex: Bz,
    privatekey_from_normal_bytes: Wz,
    privatekey_generate_ed25519: Rz,
    privatekey_generate_ed25519extended: $z,
    privatekey_sign: Qz,
    privatekey_to_bech32: Iz,
    privatekey_to_hex: Vz,
    privatekey_to_public: Pz,
    proposedprotocolparameterupdates_from_bytes: sx,
    proposedprotocolparameterupdates_from_hex: ix,
    proposedprotocolparameterupdates_from_json: lx,
    proposedprotocolparameterupdates_get: ux,
    proposedprotocolparameterupdates_insert: px,
    proposedprotocolparameterupdates_keys: wx,
    proposedprotocolparameterupdates_len: A5,
    proposedprotocolparameterupdates_new: hS,
    proposedprotocolparameterupdates_to_bytes: ox,
    proposedprotocolparameterupdates_to_hex: ax,
    proposedprotocolparameterupdates_to_js_value: dx,
    proposedprotocolparameterupdates_to_json: cx,
    protocolparamupdate_ada_per_utxo_byte: l2,
    protocolparamupdate_collateral_percentage: x2,
    protocolparamupdate_cost_models: u2,
    protocolparamupdate_d: n2,
    protocolparamupdate_execution_costs: f2,
    protocolparamupdate_expansion_rate: e2,
    protocolparamupdate_extra_entropy: o2,
    protocolparamupdate_from_bytes: Cx,
    protocolparamupdate_from_hex: Lx,
    protocolparamupdate_from_json: Tx,
    protocolparamupdate_key_deposit: Ax,
    protocolparamupdate_max_block_body_size: Ux,
    protocolparamupdate_max_block_ex_units: y2,
    protocolparamupdate_max_block_header_size: Vx,
    protocolparamupdate_max_collateral_inputs: S2,
    protocolparamupdate_max_epoch: Xx,
    protocolparamupdate_max_tx_ex_units: b2,
    protocolparamupdate_max_tx_size: Wx,
    protocolparamupdate_max_value_size: v2,
    protocolparamupdate_min_pool_cost: c2,
    protocolparamupdate_minfee_a: Rx,
    protocolparamupdate_minfee_b: Dx,
    protocolparamupdate_n_opt: Zx,
    protocolparamupdate_new: E2,
    protocolparamupdate_pool_deposit: qx,
    protocolparamupdate_pool_pledge_influence: Gx,
    protocolparamupdate_protocol_version: a2,
    protocolparamupdate_set_ada_per_utxo_byte: d2,
    protocolparamupdate_set_collateral_percentage: k2,
    protocolparamupdate_set_cost_models: p2,
    protocolparamupdate_set_execution_costs: w2,
    protocolparamupdate_set_expansion_rate: t2,
    protocolparamupdate_set_key_deposit: Bx,
    protocolparamupdate_set_max_block_body_size: Ix,
    protocolparamupdate_set_max_block_ex_units: h2,
    protocolparamupdate_set_max_block_header_size: Qx,
    protocolparamupdate_set_max_collateral_inputs: j2,
    protocolparamupdate_set_max_epoch: Yx,
    protocolparamupdate_set_max_tx_ex_units: g2,
    protocolparamupdate_set_max_tx_size: Mx,
    protocolparamupdate_set_max_value_size: m2,
    protocolparamupdate_set_min_pool_cost: i2,
    protocolparamupdate_set_minfee_a: Px,
    protocolparamupdate_set_minfee_b: $x,
    protocolparamupdate_set_n_opt: Kx,
    protocolparamupdate_set_pool_deposit: Hx,
    protocolparamupdate_set_pool_pledge_influence: Jx,
    protocolparamupdate_set_protocol_version: s2,
    protocolparamupdate_set_treasury_growth_rate: _2,
    protocolparamupdate_to_bytes: zx,
    protocolparamupdate_to_hex: Ox,
    protocolparamupdate_to_js_value: Fx,
    protocolparamupdate_to_json: Nx,
    protocolparamupdate_treasury_growth_rate: r2,
    protocolversion_from_bytes: bx,
    protocolversion_from_hex: yx,
    protocolversion_from_json: kx,
    protocolversion_major: xx,
    protocolversion_minor: jx,
    protocolversion_new: Sx,
    protocolversion_to_bytes: gx,
    protocolversion_to_hex: hx,
    protocolversion_to_js_value: vx,
    protocolversion_to_json: mx,
    publickey_as_bytes: o7,
    publickey_from_bech32: Hz,
    publickey_from_bytes: Yz,
    publickey_from_hex: Jz,
    publickey_hash: Kz,
    publickey_to_bech32: qz,
    publickey_to_hex: Zz,
    publickey_verify: Xz,
    publickeys_add: J9,
    publickeys_get: Z9,
    publickeys_new: K9,
    publickeys_size: OO,
    redeemer_data: zP,
    redeemer_ex_units: CP,
    redeemer_from_bytes: yP,
    redeemer_from_hex: vP,
    redeemer_from_json: jP,
    redeemer_index: EP,
    redeemer_new: OP,
    redeemer_tag: SP,
    redeemer_to_bytes: hP,
    redeemer_to_hex: mP,
    redeemer_to_js_value: xP,
    redeemer_to_json: kP,
    redeemers_add: JP,
    redeemers_from_bytes: AP,
    redeemers_from_hex: qP,
    redeemers_from_json: KP,
    redeemers_get: ZP,
    redeemers_len: wR,
    redeemers_new: xR,
    redeemers_to_bytes: BP,
    redeemers_to_hex: HP,
    redeemers_to_js_value: XP,
    redeemers_to_json: YP,
    redeemers_total_ex_units: GP,
    redeemertag_from_bytes: FP,
    redeemertag_from_hex: PP,
    redeemertag_from_json: DP,
    redeemertag_kind: QP,
    redeemertag_new_cert: MP,
    redeemertag_new_mint: UP,
    redeemertag_new_reward: WP,
    redeemertag_new_spend: IP,
    redeemertag_to_bytes: NP,
    redeemertag_to_hex: TP,
    redeemertag_to_js_value: $P,
    redeemertag_to_json: RP,
    relay_as_multi_host_name: Ek,
    relay_as_single_host_addr: jk,
    relay_as_single_host_name: Sk,
    relay_from_bytes: wk,
    relay_from_hex: gk,
    relay_from_json: yk,
    relay_kind: xk,
    relay_new_multi_host_name: kk,
    relay_new_single_host_addr: mk,
    relay_new_single_host_name: vk,
    relay_to_bytes: uk,
    relay_to_hex: fk,
    relay_to_js_value: hk,
    relay_to_json: bk,
    relays_add: By,
    relays_from_bytes: Dy,
    relays_from_hex: Uy,
    relays_from_json: Qy,
    relays_get: Vy,
    relays_len: I5,
    relays_new: xS,
    relays_to_bytes: $y,
    relays_to_hex: Iy,
    relays_to_js_value: Wy,
    relays_to_json: My,
    rewardaddress_from_address: CI,
    rewardaddress_new: sU,
    rewardaddress_payment_cred: oU,
    rewardaddress_to_address: zI,
    rewardaddresses_add: r0,
    rewardaddresses_from_bytes: Kk,
    rewardaddresses_from_hex: Jk,
    rewardaddresses_from_json: e0,
    rewardaddresses_get: _0,
    rewardaddresses_len: M5,
    rewardaddresses_new: ES,
    rewardaddresses_to_bytes: Xk,
    rewardaddresses_to_hex: Zk,
    rewardaddresses_to_js_value: t0,
    rewardaddresses_to_json: Gk,
    scriptall_from_bytes: Y0,
    scriptall_from_hex: K0,
    scriptall_from_json: G0,
    scriptall_native_scripts: t4,
    scriptall_new: e4,
    scriptall_to_bytes: q0,
    scriptall_to_hex: X0,
    scriptall_to_js_value: J0,
    scriptall_to_json: Z0,
    scriptany_from_bytes: r4,
    scriptany_from_hex: o4,
    scriptany_from_json: a4,
    scriptany_native_scripts: eS,
    scriptany_new: zS,
    scriptany_to_bytes: _4,
    scriptany_to_hex: n4,
    scriptany_to_js_value: s4,
    scriptany_to_json: US,
    scriptdatahash_from_bech32: XC,
    scriptdatahash_from_bytes: YC,
    scriptdatahash_from_hex: KC,
    scriptdatahash_to_bech32: JO,
    scriptdatahash_to_bytes: d7,
    scriptdatahash_to_hex: UO,
    scripthash_from_bech32: hC,
    scripthash_from_bytes: bC,
    scripthash_from_hex: yC,
    scripthash_to_bech32: BO,
    scripthash_to_bytes: e7,
    scripthash_to_hex: NO,
    scripthashes_add: rx,
    scripthashes_from_bytes: K6,
    scripthashes_from_hex: J6,
    scripthashes_from_json: ex,
    scripthashes_get: _x,
    scripthashes_len: B5,
    scripthashes_new: LS,
    scripthashes_to_bytes: X6,
    scripthashes_to_hex: Z6,
    scripthashes_to_js_value: tx,
    scripthashes_to_json: G6,
    scriptnofk_from_bytes: d4,
    scriptnofk_from_hex: p4,
    scriptnofk_from_json: f4,
    scriptnofk_n: H5,
    scriptnofk_native_scripts: g4,
    scriptnofk_new: b4,
    scriptnofk_to_bytes: c4,
    scriptnofk_to_hex: l4,
    scriptnofk_to_js_value: w4,
    scriptnofk_to_json: u4,
    scriptpubkey_addr_keyhash: B0,
    scriptpubkey_from_bytes: I0,
    scriptpubkey_from_hex: M0,
    scriptpubkey_from_json: V0,
    scriptpubkey_new: A0,
    scriptpubkey_to_bytes: D0,
    scriptpubkey_to_hex: U0,
    scriptpubkey_to_js_value: Q0,
    scriptpubkey_to_json: W0,
    scriptref_from_bytes: I4,
    scriptref_from_hex: M4,
    scriptref_from_json: V4,
    scriptref_is_native_script: H4,
    scriptref_is_plutus_script: q4,
    scriptref_native_script: Y4,
    scriptref_new_native_script: B4,
    scriptref_new_plutus_script: A4,
    scriptref_plutus_script: X4,
    scriptref_to_bytes: D4,
    scriptref_to_hex: U4,
    scriptref_to_js_value: Q4,
    scriptref_to_json: W4,
    singlehostaddr_from_bytes: $1,
    singlehostaddr_from_hex: I1,
    singlehostaddr_from_json: W1,
    singlehostaddr_ipv4: V1,
    singlehostaddr_ipv6: B1,
    singlehostaddr_new: A1,
    singlehostaddr_port: Q1,
    singlehostaddr_to_bytes: R1,
    singlehostaddr_to_hex: D1,
    singlehostaddr_to_js_value: M1,
    singlehostaddr_to_json: U1,
    singlehostname_dns_name: jS,
    singlehostname_from_bytes: Y1,
    singlehostname_from_hex: K1,
    singlehostname_from_json: G1,
    singlehostname_new: ek,
    singlehostname_port: tk,
    singlehostname_to_bytes: q1,
    singlehostname_to_hex: X1,
    singlehostname_to_js_value: J1,
    singlehostname_to_json: Z1,
    stakecredential_from_bytes: QD,
    stakecredential_from_hex: BD,
    stakecredential_from_json: qD,
    stakecredential_from_keyhash: $D,
    stakecredential_from_scripthash: DD,
    stakecredential_kind: MD,
    stakecredential_to_bytes: WD,
    stakecredential_to_hex: VD,
    stakecredential_to_js_value: HD,
    stakecredential_to_json: AD,
    stakecredential_to_keyhash: ID,
    stakecredential_to_scripthash: UD,
    stakecredentials_add: qk,
    stakecredentials_from_bytes: Mk,
    stakecredentials_from_hex: Qk,
    stakecredentials_from_json: Ak,
    stakecredentials_get: Hk,
    stakecredentials_len: U5,
    stakecredentials_new: SS,
    stakecredentials_to_bytes: Uk,
    stakecredentials_to_hex: Wk,
    stakecredentials_to_js_value: Bk,
    stakecredentials_to_json: Vk,
    stakedelegation_from_bytes: fy,
    stakedelegation_from_hex: by,
    stakedelegation_from_json: my,
    stakedelegation_new: ky,
    stakedelegation_pool_keyhash: wS,
    stakedelegation_stake_credential: vy,
    stakedelegation_to_bytes: wy,
    stakedelegation_to_hex: gy,
    stakedelegation_to_js_value: yy,
    stakedelegation_to_json: hy,
    stakederegistration_from_bytes: oy,
    stakederegistration_from_hex: ay,
    stakederegistration_from_json: dy,
    stakederegistration_new: py,
    stakederegistration_stake_credential: ly,
    stakederegistration_to_bytes: ny,
    stakederegistration_to_hex: sy,
    stakederegistration_to_js_value: cy,
    stakederegistration_to_json: iy,
    stakeregistration_from_bytes: Jh,
    stakeregistration_from_hex: ty,
    stakeregistration_from_json: _y,
    stakeregistration_new: kS,
    stakeregistration_stake_credential: sS,
    stakeregistration_to_bytes: Zh,
    stakeregistration_to_hex: Gh,
    stakeregistration_to_js_value: ey,
    stakeregistration_to_json: IS,
    strings_add: _R,
    strings_get: eR,
    strings_len: fR,
    strings_new: vR,
    timelockexpiry_from_bytes: E4,
    timelockexpiry_from_hex: C4,
    timelockexpiry_from_json: N4,
    timelockexpiry_new: P4,
    timelockexpiry_new_timelockexpiry: R4,
    timelockexpiry_slot: F4,
    timelockexpiry_slot_bignum: T4,
    timelockexpiry_to_bytes: S4,
    timelockexpiry_to_hex: z4,
    timelockexpiry_to_js_value: L4,
    timelockexpiry_to_json: O4,
    timelockstart_from_bytes: y4,
    timelockstart_from_hex: v4,
    timelockstart_from_json: x4,
    timelockstart_new: fS,
    timelockstart_new_timelockstart: mS,
    timelockstart_slot: nS,
    timelockstart_slot_bignum: rS,
    timelockstart_to_bytes: h4,
    timelockstart_to_hex: m4,
    timelockstart_to_js_value: k4,
    timelockstart_to_json: MS,
    transaction_auxiliary_data: Vg,
    transaction_body: Mg,
    transaction_from_bytes: Pg,
    transaction_from_hex: $g,
    transaction_from_json: Ug,
    transaction_is_valid: Qg,
    transaction_new: Ag,
    transaction_set_is_valid: Bg,
    transaction_to_bytes: Tg,
    transaction_to_hex: Rg,
    transaction_to_js_value: Ig,
    transaction_to_json: Dg,
    transaction_witness_set: Wg,
    transactionbatch_get: jD,
    transactionbatch_len: xD,
    transactionbatchlist_get: vD,
    transactionbatchlist_len: ED,
    transactionbodies_add: $2,
    transactionbodies_from_bytes: O2,
    transactionbodies_from_hex: N2,
    transactionbodies_from_json: P2,
    transactionbodies_get: R2,
    transactionbodies_len: q5,
    transactionbodies_new: NS,
    transactionbodies_to_bytes: C2,
    transactionbodies_to_hex: L2,
    transactionbodies_to_js_value: T2,
    transactionbodies_to_json: F2,
    transactionbody_auxiliary_data_hash: Kb,
    transactionbody_certs: Bb,
    transactionbody_collateral: ih,
    transactionbody_collateral_return: wh,
    transactionbody_fee: Ib,
    transactionbody_from_bytes: Lb,
    transactionbody_from_hex: Fb,
    transactionbody_from_json: Rb,
    transactionbody_inputs: $b,
    transactionbody_mint: _h,
    transactionbody_multiassets: oS,
    transactionbody_network_id: ph,
    transactionbody_new: bh,
    transactionbody_new_tx_body: hh,
    transactionbody_outputs: Db,
    transactionbody_reference_inputs: nh,
    transactionbody_remove_ttl: Qb,
    transactionbody_required_signers: dh,
    transactionbody_script_data_hash: sh,
    transactionbody_set_auxiliary_data_hash: Xb,
    transactionbody_set_certs: Vb,
    transactionbody_set_collateral: ah,
    transactionbody_set_collateral_return: uh,
    transactionbody_set_mint: eh,
    transactionbody_set_network_id: lh,
    transactionbody_set_reference_inputs: rh,
    transactionbody_set_required_signers: ch,
    transactionbody_set_script_data_hash: oh,
    transactionbody_set_total_collateral: fh,
    transactionbody_set_ttl: Wb,
    transactionbody_set_update: qb,
    transactionbody_set_validity_start_interval: Zb,
    transactionbody_set_validity_start_interval_bignum: Jb,
    transactionbody_set_withdrawals: Ab,
    transactionbody_to_bytes: Ob,
    transactionbody_to_hex: Nb,
    transactionbody_to_js_value: Pb,
    transactionbody_to_json: Tb,
    transactionbody_total_collateral: gh,
    transactionbody_ttl: Ub,
    transactionbody_ttl_bignum: Mb,
    transactionbody_update: Yb,
    transactionbody_validity_start_interval: th,
    transactionbody_validity_start_interval_bignum: Gb,
    transactionbody_withdrawals: Hb,
    transactionbuilder_add_bootstrap_input: w$,
    transactionbuilder_add_change_if_needed: eD,
    transactionbuilder_add_change_if_needed_with_datum: _D,
    transactionbuilder_add_input: f$,
    transactionbuilder_add_inputs_from: _$,
    transactionbuilder_add_json_metadatum: R$,
    transactionbuilder_add_json_metadatum_with_schema: $$,
    transactionbuilder_add_key_input: d$,
    transactionbuilder_add_metadatum: P$,
    transactionbuilder_add_mint_asset: V$,
    transactionbuilder_add_mint_asset_and_output: B$,
    transactionbuilder_add_mint_asset_and_output_min_required_coin: A$,
    transactionbuilder_add_native_script_input: p$,
    transactionbuilder_add_output: k$,
    transactionbuilder_add_plutus_script_input: u$,
    transactionbuilder_add_reference_input: c$,
    transactionbuilder_add_required_native_input_scripts: b$,
    transactionbuilder_add_required_plutus_input_scripts: h$,
    transactionbuilder_add_required_signer: sD,
    transactionbuilder_add_script_input: l$,
    transactionbuilder_build: cD,
    transactionbuilder_build_tx: dD,
    transactionbuilder_build_tx_unsafe: lD,
    transactionbuilder_calc_script_data_hash: rD,
    transactionbuilder_count_missing_input_scripts: g$,
    transactionbuilder_fee_for_input: v$,
    transactionbuilder_fee_for_output: x$,
    transactionbuilder_full_size: aD,
    transactionbuilder_get_auxiliary_data: N$,
    transactionbuilder_get_deposit: G$,
    transactionbuilder_get_explicit_input: Y$,
    transactionbuilder_get_explicit_output: J$,
    transactionbuilder_get_fee_if_set: tD,
    transactionbuilder_get_implicit_input: X$,
    transactionbuilder_get_mint: M$,
    transactionbuilder_get_mint_builder: I$,
    transactionbuilder_get_mint_scripts: W$,
    transactionbuilder_get_native_input_scripts: y$,
    transactionbuilder_get_plutus_input_scripts: m$,
    transactionbuilder_get_reference_inputs: q$,
    transactionbuilder_get_total_input: K$,
    transactionbuilder_get_total_output: Z$,
    transactionbuilder_min_fee: pD,
    transactionbuilder_new: H$,
    transactionbuilder_output_sizes: iD,
    transactionbuilder_remove_script_data_hash: oD,
    transactionbuilder_set_auxiliary_data: F$,
    transactionbuilder_set_certs: O$,
    transactionbuilder_set_collateral: n$,
    transactionbuilder_set_collateral_return: o$,
    transactionbuilder_set_collateral_return_and_total: s$,
    transactionbuilder_set_fee: j$,
    transactionbuilder_set_inputs: r$,
    transactionbuilder_set_metadata: T$,
    transactionbuilder_set_mint: U$,
    transactionbuilder_set_mint_asset: Q$,
    transactionbuilder_set_mint_builder: D$,
    transactionbuilder_set_script_data_hash: nD,
    transactionbuilder_set_total_collateral: a$,
    transactionbuilder_set_total_collateral_and_return: i$,
    transactionbuilder_set_ttl: S$,
    transactionbuilder_set_ttl_bignum: E$,
    transactionbuilder_set_validity_start_interval: z$,
    transactionbuilder_set_validity_start_interval_bignum: C$,
    transactionbuilder_set_withdrawals: L$,
    transactionbuilderconfigbuilder_build: t$,
    transactionbuilderconfigbuilder_coins_per_utxo_byte: qR,
    transactionbuilderconfigbuilder_coins_per_utxo_word: HR,
    transactionbuilderconfigbuilder_ex_unit_prices: YR,
    transactionbuilderconfigbuilder_fee_algo: AR,
    transactionbuilderconfigbuilder_key_deposit: KR,
    transactionbuilderconfigbuilder_max_tx_size: JR,
    transactionbuilderconfigbuilder_max_value_size: ZR,
    transactionbuilderconfigbuilder_new: BR,
    transactionbuilderconfigbuilder_pool_deposit: XR,
    transactionbuilderconfigbuilder_prefer_pure_change: GR,
    transactionhash_from_bech32: vC,
    transactionhash_from_bytes: mC,
    transactionhash_from_hex: kC,
    transactionhash_to_bech32: qO,
    transactionhash_to_bytes: _7,
    transactionhash_to_hex: PO,
    transactioninput_from_bytes: vh,
    transactioninput_from_hex: xh,
    transactioninput_from_json: Eh,
    transactioninput_index: Ch,
    transactioninput_new: Oh,
    transactioninput_to_bytes: mh,
    transactioninput_to_hex: kh,
    transactioninput_to_js_value: Sh,
    transactioninput_to_json: jh,
    transactioninput_transaction_id: zh,
    transactioninputs_add: eb,
    transactioninputs_from_bytes: Yg,
    transactioninputs_from_hex: Kg,
    transactioninputs_from_json: Gg,
    transactioninputs_get: tb,
    transactioninputs_len: $5,
    transactioninputs_new: vS,
    transactioninputs_to_bytes: qg,
    transactioninputs_to_hex: Xg,
    transactioninputs_to_js_value: Jg,
    transactioninputs_to_json: Zg,
    transactioninputs_to_option: _b,
    transactionmetadatum_as_bytes: oN,
    transactionmetadatum_as_int: nN,
    transactionmetadatum_as_list: rN,
    transactionmetadatum_as_map: _N,
    transactionmetadatum_as_text: sN,
    transactionmetadatum_from_bytes: YL,
    transactionmetadatum_from_hex: KL,
    transactionmetadatum_kind: pR,
    transactionmetadatum_new_bytes: tN,
    transactionmetadatum_new_int: GL,
    transactionmetadatum_new_list: JL,
    transactionmetadatum_new_map: ZL,
    transactionmetadatum_new_text: eN,
    transactionmetadatum_to_bytes: qL,
    transactionmetadatum_to_hex: XL,
    transactionmetadatumlabels_add: uN,
    transactionmetadatumlabels_from_bytes: cN,
    transactionmetadatumlabels_from_hex: lN,
    transactionmetadatumlabels_get: pN,
    transactionmetadatumlabels_len: oR,
    transactionmetadatumlabels_new: mR,
    transactionmetadatumlabels_to_bytes: iN,
    transactionmetadatumlabels_to_hex: dN,
    transactionoutput_address: Ih,
    transactionoutput_amount: Uh,
    transactionoutput_data_hash: Mh,
    transactionoutput_from_bytes: Fh,
    transactionoutput_from_hex: Ph,
    transactionoutput_from_json: Dh,
    transactionoutput_has_data_hash: qh,
    transactionoutput_has_plutus_data: Hh,
    transactionoutput_has_script_ref: Yh,
    transactionoutput_new: Xh,
    transactionoutput_plutus_data: Wh,
    transactionoutput_script_ref: Qh,
    transactionoutput_serialization_format: Kh,
    transactionoutput_set_data_hash: Ah,
    transactionoutput_set_plutus_data: Bh,
    transactionoutput_set_script_ref: Vh,
    transactionoutput_to_bytes: Nh,
    transactionoutput_to_hex: Th,
    transactionoutput_to_js_value: $h,
    transactionoutput_to_json: Rh,
    transactionoutputamountbuilder_build: nE,
    transactionoutputamountbuilder_with_asset_and_min_required_coin: _E,
    transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost: rE,
    transactionoutputamountbuilder_with_coin: tE,
    transactionoutputamountbuilder_with_coin_and_asset: eE,
    transactionoutputamountbuilder_with_value: GS,
    transactionoutputbuilder_new: HS,
    transactionoutputbuilder_next: ZS,
    transactionoutputbuilder_with_address: qS,
    transactionoutputbuilder_with_data_hash: YS,
    transactionoutputbuilder_with_plutus_data: XS,
    transactionoutputbuilder_with_script_ref: KS,
    transactionoutputs_add: pb,
    transactionoutputs_from_bytes: ob,
    transactionoutputs_from_hex: ab,
    transactionoutputs_from_json: db,
    transactionoutputs_get: lb,
    transactionoutputs_len: R5,
    transactionoutputs_new: CS,
    transactionoutputs_to_bytes: nb,
    transactionoutputs_to_hex: sb,
    transactionoutputs_to_js_value: cb,
    transactionoutputs_to_json: ib,
    transactionunspentoutput_from_bytes: aE,
    transactionunspentoutput_from_hex: cE,
    transactionunspentoutput_from_json: pE,
    transactionunspentoutput_input: wE,
    transactionunspentoutput_new: uE,
    transactionunspentoutput_output: fE,
    transactionunspentoutput_to_bytes: sE,
    transactionunspentoutput_to_hex: iE,
    transactionunspentoutput_to_js_value: lE,
    transactionunspentoutput_to_json: dE,
    transactionunspentoutputs_add: xE,
    transactionunspentoutputs_from_json: yE,
    transactionunspentoutputs_get: kE,
    transactionunspentoutputs_len: vE,
    transactionunspentoutputs_new: mE,
    transactionunspentoutputs_to_js_value: hE,
    transactionunspentoutputs_to_json: bE,
    transactionwitnessset_bootstraps: C0,
    transactionwitnessset_from_bytes: b0,
    transactionwitnessset_from_hex: y0,
    transactionwitnessset_from_json: k0,
    transactionwitnessset_native_scripts: E0,
    transactionwitnessset_new: R0,
    transactionwitnessset_plutus_data: F0,
    transactionwitnessset_plutus_scripts: L0,
    transactionwitnessset_redeemers: P0,
    transactionwitnessset_set_bootstraps: z0,
    transactionwitnessset_set_native_scripts: S0,
    transactionwitnessset_set_plutus_data: N0,
    transactionwitnessset_set_plutus_scripts: O0,
    transactionwitnessset_set_redeemers: T0,
    transactionwitnessset_set_vkeys: x0,
    transactionwitnessset_to_bytes: g0,
    transactionwitnessset_to_hex: h0,
    transactionwitnessset_to_js_value: v0,
    transactionwitnessset_to_json: m0,
    transactionwitnessset_vkeys: j0,
    transactionwitnesssets_add: H2,
    transactionwitnesssets_from_bytes: U2,
    transactionwitnesssets_from_hex: W2,
    transactionwitnesssets_from_json: B2,
    transactionwitnesssets_get: A2,
    transactionwitnesssets_len: Y5,
    transactionwitnesssets_new: FS,
    transactionwitnesssets_to_bytes: I2,
    transactionwitnesssets_to_hex: M2,
    transactionwitnesssets_to_js_value: V2,
    transactionwitnesssets_to_json: Q2,
    txbuilderconstants_plutus_alonzo_cost_models: kL,
    txbuilderconstants_plutus_default_cost_models: vL,
    txbuilderconstants_plutus_vasil_cost_models: jL,
    txinputsbuilder_add_bootstrap_input: oL,
    txinputsbuilder_add_input: sL,
    txinputsbuilder_add_key_input: eL,
    txinputsbuilder_add_native_script_input: rL,
    txinputsbuilder_add_plutus_script_input: nL,
    txinputsbuilder_add_required_native_input_scripts: iL,
    txinputsbuilder_add_required_plutus_input_scripts: cL,
    txinputsbuilder_add_required_script_input_witnesses: dL,
    txinputsbuilder_add_required_signer: fL,
    txinputsbuilder_add_required_signers: gL,
    txinputsbuilder_add_script_input: _L,
    txinputsbuilder_count_missing_input_scripts: aL,
    txinputsbuilder_get_native_input_scripts: pL,
    txinputsbuilder_get_plutus_input_scripts: uL,
    txinputsbuilder_get_ref_inputs: lL,
    txinputsbuilder_inputs: hL,
    txinputsbuilder_inputs_option: yL,
    txinputsbuilder_len: wL,
    txinputsbuilder_new: tL,
    txinputsbuilder_total_value: bL,
    unitinterval_denominator: Lg,
    unitinterval_from_bytes: jg,
    unitinterval_from_hex: Eg,
    unitinterval_from_json: Og,
    unitinterval_new: Ng,
    unitinterval_numerator: _S,
    unitinterval_to_bytes: xg,
    unitinterval_to_hex: Sg,
    unitinterval_to_js_value: Cg,
    unitinterval_to_json: zg,
    update_epoch: $6,
    update_from_bytes: O6,
    update_from_hex: N6,
    update_from_json: P6,
    update_new: D6,
    update_proposed_protocol_parameter_updates: R6,
    update_to_bytes: C6,
    update_to_hex: L6,
    update_to_js_value: T6,
    update_to_json: F6,
    url_from_bytes: u1,
    url_from_hex: f1,
    url_from_json: g1,
    url_new: b1,
    url_to_bytes: p1,
    url_to_hex: w1,
    url_to_js_value: cS,
    url_to_json: WS,
    url_url: aS,
    value_checked_add: c8,
    value_checked_sub: d8,
    value_clamped_sub: l8,
    value_coin: o8,
    value_compare: p8,
    value_from_bytes: YE,
    value_from_hex: KE,
    value_from_json: GE,
    value_is_zero: n8,
    value_multiasset: a8,
    value_new: t8,
    value_new_from_assets: e8,
    value_new_with_assets: _8,
    value_set_coin: s8,
    value_set_multiasset: i8,
    value_to_bytes: qE,
    value_to_hex: XE,
    value_to_js_value: JE,
    value_to_json: ZE,
    value_zero: r8,
    vkey_from_bytes: e9,
    vkey_from_hex: r9,
    vkey_from_json: s9,
    vkey_new: a9,
    vkey_public_key: i9,
    vkey_to_bytes: t9,
    vkey_to_hex: _9,
    vkey_to_js_value: o9,
    vkey_to_json: n9,
    vkeys_add: l9,
    vkeys_get: d9,
    vkeys_len: CO,
    vkeys_new: w7,
    vkeywitness_from_bytes: w9,
    vkeywitness_from_hex: g9,
    vkeywitness_from_json: y9,
    vkeywitness_new: m9,
    vkeywitness_signature: VO,
    vkeywitness_to_bytes: u9,
    vkeywitness_to_hex: f9,
    vkeywitness_to_js_value: h9,
    vkeywitness_to_json: b9,
    vkeywitness_vkey: QO,
    vkeywitnesses_add: L9,
    vkeywitnesses_from_bytes: x9,
    vkeywitnesses_from_hex: S9,
    vkeywitnesses_from_json: C9,
    vkeywitnesses_get: O9,
    vkeywitnesses_len: zO,
    vkeywitnesses_new: u7,
    vkeywitnesses_to_bytes: k9,
    vkeywitnesses_to_hex: j9,
    vkeywitnesses_to_js_value: z9,
    vkeywitnesses_to_json: E9,
    vrfcert_from_bytes: yO,
    vrfcert_from_hex: vO,
    vrfcert_from_json: jO,
    vrfcert_new: EO,
    vrfcert_output: LO,
    vrfcert_proof: SO,
    vrfcert_to_bytes: hO,
    vrfcert_to_hex: mO,
    vrfcert_to_js_value: xO,
    vrfcert_to_json: kO,
    vrfkeyhash_from_bech32: MC,
    vrfkeyhash_from_bytes: UC,
    vrfkeyhash_from_hex: WC,
    vrfkeyhash_to_bech32: XO,
    vrfkeyhash_to_bytes: a7,
    vrfkeyhash_to_hex: $O,
    vrfvkey_from_bech32: JC,
    vrfvkey_from_bytes: ZC,
    vrfvkey_from_hex: GC,
    vrfvkey_to_bech32: GO,
    vrfvkey_to_bytes: l7,
    vrfvkey_to_hex: MO,
    withdrawals_from_bytes: s0,
    withdrawals_from_hex: i0,
    withdrawals_from_json: l0,
    withdrawals_get: u0,
    withdrawals_insert: p0,
    withdrawals_keys: w0,
    withdrawals_len: W5,
    withdrawals_new: bS,
    withdrawals_to_bytes: o0,
    withdrawals_to_hex: a0,
    withdrawals_to_js_value: d0,
    withdrawals_to_json: c0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  vf(uU);
  function wU(r) {
    const t = r.trim().toLowerCase().replace(/^0x/, "");
    if (t.length % 2 !== 0) throw new Error("Hex string has odd length");
    const e = new Uint8Array(t.length / 2);
    for (let s = 0; s < t.length; s += 2) e[s / 2] = parseInt(t.slice(s, s + 2), 16);
    return e;
  }
  function St(r) {
    return Array.from(r).map((t) => t.toString(16).padStart(2, "0")).join("");
  }
  function Sd(r) {
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
  function fU(r) {
    const t = r.trim();
    if (!t) return "";
    if (t.startsWith("{")) try {
      const e = JSON.parse(t);
      if (e && typeof e.cborHex == "string") return e.cborHex;
    } catch {
    }
    return t;
  }
  function gU() {
    const [r, t] = Le.useState(false), [e, s] = Le.useState(""), [o, n] = Le.useState(""), [c, d] = Le.useState(""), [p, l] = Le.useState(false);
    Le.useEffect(() => {
      let C = false;
      try {
        typeof J_ == "function" ? C || t(true) : d("Cardano Serialization Lib not available");
      } catch (S) {
        d((S == null ? void 0 : S.message) ?? String(S));
      }
      return () => {
        C = true;
      };
    }, []), Le.useEffect(() => {
      const S = new URLSearchParams(window.location.search).get("cborHex");
      S && s(S);
    }, []);
    function y(C) {
      const S = Number(C.coin().to_str()), H = C.multiasset(), m = {
        lovelace: S
      };
      if (H) {
        const b = H.keys();
        for (let v = 0; v < b.len(); v++) {
          const z = b.get(v), F = H.get(z), P = F.keys(), D = `policy ${St(z.to_bytes())}`, q = {};
          for (let I = 0; I < P.len(); I++) {
            const ct = P.get(I), $t = Number(F.get(ct).to_str()), Bt = St(ct.name()), be = Sd(Bt), Kr = be ? `asset ${Bt} (${be})` : `asset ${Bt}`;
            q[Kr] = $t;
          }
          m[D] = q;
        }
      }
      return m;
    }
    function x(C) {
      const S = Pt.from_bech32(C), H = C.startsWith("addr_test") ? "Testnet" : "Mainnet";
      let m = "Shelley", b = null, v = null, z = null, F = null;
      const P = ro.from_address(S);
      if (P) {
        const q = P.payment_cred(), I = q.to_keyhash(), ct = q.to_scripthash();
        I && (b = St(I.to_bytes())), ct && (v = St(ct.to_bytes()));
        const $t = P.stake_cred(), Bt = $t.to_keyhash(), be = $t.to_scripthash();
        Bt && (z = St(Bt.to_bytes())), be && (F = St(be.to_bytes()));
      } else {
        const q = no.from_address(S);
        if (q) {
          const I = q.payment_cred(), ct = I.to_keyhash(), $t = I.to_scripthash();
          ct && (b = St(ct.to_bytes())), $t && (v = St($t.to_bytes()));
        }
      }
      return {
        network: H,
        addressEra: m,
        paymentField: b ? {
          "payment credential key hash": b
        } : v ? {
          "payment credential script hash": v
        } : {},
        stakeReference: z || F ? z ? {
          "stake credential key hash": z
        } : {
          "stake credential script hash": F
        } : null,
        referenceScript: null
      };
    }
    function k(C) {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v2, _w2, _x2, _y2, _z2, _A, _B, _C2, _D2, _E2, _F2, _G, _H, _I2, _J, _K, _L2, _M, _N2, _O2, _P2, _Q, _R2;
      const S = C.body(), H = S.inputs(), m = S.outputs(), b = [];
      for (let V = 0; V < H.len(); V++) {
        const U = H.get(V), Z = St(U.transaction_id().to_bytes());
        b.push(`${Z}#${U.index()}`);
      }
      const v = [];
      for (let V = 0; V < m.len(); V++) {
        const U = m.get(V), Z = U.address().to_bech32(), { network: dt, addressEra: Ot, paymentField: jt, stakeReference: p_, referenceScript: Oo } = x(Z), Ys = y(U.amount());
        v.push({
          address: Z,
          "address era": Ot,
          amount: Ys,
          network: dt,
          ...jt,
          "reference script": Oo,
          "stake reference": p_
        });
      }
      const z = `${S.fee().to_str()} Lovelace`, F = S.ttl && typeof S.ttl == "function" ? S.ttl() : null, P = (typeof S.invalid_before == "function" ? S.invalid_before() : null) ?? (typeof S.validity_start_interval == "function" ? S.validity_start_interval() : null), $ = typeof S.collateral == "function" ? S.collateral() : typeof S.collateral_inputs == "function" ? S.collateral_inputs() : null, D = [];
      if ($) for (let V = 0; V < $.len(); V++) {
        const U = $.get(V), Z = St(U.transaction_id().to_bytes());
        D.push(`${Z}#${U.index()}`);
      }
      const q = (_a2 = S.reference_inputs) == null ? void 0 : _a2.call(S), I = [];
      if (q) for (let V = 0; V < q.len(); V++) {
        const U = q.get(V), Z = St(U.transaction_id().to_bytes());
        I.push(`${Z}#${U.index()}`);
      }
      function ct(V) {
        var _a3;
        if (!V) return null;
        const U = V.keys();
        if (!U || U.len() === 0) return null;
        const Z = {};
        for (let dt = 0; dt < U.len(); dt++) {
          const Ot = U.get(dt), jt = V.get(Ot), p_ = jt.keys(), Ys = `policy ${St(Ot.to_bytes())}`, lc = {};
          for (let Xs = 0; Xs < p_.len(); Xs++) {
            const pc = p_.get(Xs), uc = jt.get(pc), Wp = ((_a3 = uc == null ? void 0 : uc.to_str) == null ? void 0 : _a3.call(uc)) ?? String(uc), Qp = Number(Wp), Ks = St(pc.name()), wc = Sd(Ks), Vp = wc ? `asset ${Ks} (${wc})` : `asset ${Ks}`;
            lc[Vp] = Qp;
          }
          Z[Ys] = lc;
        }
        return Z;
      }
      const $t = ct((_b2 = S.mint) == null ? void 0 : _b2.call(S));
      function Bt(V) {
        const U = V.address().to_bech32(), { network: Z, addressEra: dt, paymentField: Ot, stakeReference: jt, referenceScript: p_ } = x(U), Oo = y(V.amount());
        return {
          address: U,
          "address era": dt,
          amount: Oo,
          network: Z,
          ...Ot,
          "reference script": p_,
          "stake reference": jt
        };
      }
      const be = ((_c2 = S.collateral_return) == null ? void 0 : _c2.call(S)) ? Bt(S.collateral_return()) : null, Kr = ((_d2 = S.total_collateral) == null ? void 0 : _d2.call(S)) ? Number(S.total_collateral().to_str()) : null, kr = (_e2 = S.required_signers) == null ? void 0 : _e2.call(S), Tn = kr ? (() => {
        const V = [];
        for (let U = 0; U < kr.len(); U++) V.push(St(kr.get(U).to_bytes()));
        return V;
      })() : null, T = (_f2 = S.withdrawals) == null ? void 0 : _f2.call(S);
      let M = null;
      if (T) {
        const V = T.keys(), U = {};
        for (let Z = 0; Z < V.len(); Z++) {
          const dt = V.get(Z), Ot = T.get(dt);
          try {
            const jt = ((_i2 = (_g2 = dt.to_address) == null ? void 0 : (_h2 = _g2.call(dt)).to_bech32) == null ? void 0 : _i2.call(_h2)) ?? null;
            jt && (U[jt] = Number(Ot.to_str()));
          } catch {
            const jt = St(((_l2 = (_j2 = dt.to_address) == null ? void 0 : (_k2 = _j2.call(dt)).to_bytes) == null ? void 0 : _l2.call(_k2)) ?? new Uint8Array());
            jt && (U[jt] = Number(Ot.to_str()));
          }
        }
        Object.keys(U).length > 0 && (M = U);
      }
      const Q = ((_m2 = S.update) == null ? void 0 : _m2.call(S)) ? {
        raw: St(((_o2 = (_n2 = S.update()).to_bytes) == null ? void 0 : _o2.call(_n2)) ?? new Uint8Array())
      } : null, K = ((_p2 = C.witness_set) == null ? void 0 : _p2.call(C)) ?? ((_q = C.witnesses) == null ? void 0 : _q.call(C));
      let ut = [];
      K && (ut = [
        {
          vkeys: ((_t2 = (_s2 = (_r2 = K.vkeys) == null ? void 0 : _r2.call(K)) == null ? void 0 : _s2.len) == null ? void 0 : _t2.call(_s2)) ?? 0,
          native_scripts: ((_w2 = (_v2 = (_u2 = K.native_scripts) == null ? void 0 : _u2.call(K)) == null ? void 0 : _v2.len) == null ? void 0 : _w2.call(_v2)) ?? 0,
          bootstrap_witnesses: ((_z2 = (_y2 = (_x2 = K.bootstraps) == null ? void 0 : _x2.call(K)) == null ? void 0 : _y2.len) == null ? void 0 : _z2.call(_y2)) ?? 0,
          plutus_v1_scripts: ((_C2 = (_B = (_A = K.plutus_scripts) == null ? void 0 : _A.call(K)) == null ? void 0 : _B.len) == null ? void 0 : _C2.call(_B)) ?? ((_F2 = (_E2 = (_D2 = K.plutus_v1_scripts) == null ? void 0 : _D2.call(K)) == null ? void 0 : _E2.len) == null ? void 0 : _F2.call(_E2)) ?? 0,
          plutus_v2_scripts: ((_I2 = (_H = (_G = K.plutus_v2_scripts) == null ? void 0 : _G.call(K)) == null ? void 0 : _H.len) == null ? void 0 : _I2.call(_H)) ?? 0,
          redeemers: ((_L2 = (_K = (_J = K.redeemers) == null ? void 0 : _J.call(K)) == null ? void 0 : _K.len) == null ? void 0 : _L2.call(_K)) ?? 0,
          datums: ((_O2 = (_N2 = (_M = K.plutus_data) == null ? void 0 : _M.call(K)) == null ? void 0 : _N2.len) == null ? void 0 : _O2.call(_N2)) ?? 0
        }
      ]);
      const Zr = I.length > 0 || be || Kr !== null ? "Babbage" : "Alonzo";
      function ie(V) {
        var _a3;
        try {
          const U = V.as_text();
          if (typeof U == "string") return U;
        } catch {
        }
        try {
          const U = V.as_int();
          if (U) {
            const Z = (_a3 = U.as_i32_or_nothing) == null ? void 0 : _a3.call(U);
            return typeof Z == "number" ? Z : Number(U.to_str());
          }
        } catch {
        }
        try {
          const U = V.as_bytes();
          if (U) return St(U);
        } catch {
        }
        try {
          const U = V.as_list();
          if (U) {
            const Z = [];
            for (let dt = 0; dt < U.len(); dt++) Z.push(ie(U.get(dt)));
            return Z;
          }
        } catch {
        }
        try {
          const U = V.as_map();
          if (U) {
            const Z = U.keys(), dt = [];
            for (let Ot = 0; Ot < Z.len(); Ot++) {
              const jt = Z.get(Ot), p_ = U.get(jt);
              dt.push([
                ie(jt),
                ie(p_)
              ]);
            }
            return dt;
          }
        } catch {
        }
        return null;
      }
      let Jr = null;
      const he = ((_P2 = C.auxiliary_data) == null ? void 0 : _P2.call(C)) ?? C.auxiliary_data();
      if (he) {
        const V = ((_Q = he.metadata) == null ? void 0 : _Q.call(he)) ?? he.metadata();
        if (V) {
          const U = V.keys(), Z = {};
          for (let dt = 0; dt < U.len(); dt++) {
            const Ot = U.get(dt), jt = V.get(Ot);
            Z[Ot.to_str()] = ie(jt);
          }
          Object.keys(Z).length > 0 && (Jr = Z);
        }
      }
      return {
        "auxiliary scripts": null,
        certificates: ((_R2 = S.certs) == null ? void 0 : _R2.call(S)) ? "present" : null,
        "collateral inputs": D,
        era: Zr,
        fee: z,
        inputs: b,
        metadata: Jr,
        mint: $t,
        outputs: v,
        "reference inputs": I,
        "required signers (payment key hashes needed for scripts)": Tn,
        "return collateral": be,
        "total collateral": Kr,
        "update proposal": Q,
        "validity range": {
          "lower bound": P,
          "upper bound": F
        },
        withdrawals: M,
        witnesses: ut
      };
    }
    const N = (C) => {
      C && C.preventDefault();
      try {
        d(""), n("");
        const S = fU(e);
        if (!S) throw new Error("Please enter a CBOR hex string");
        const H = J_.from_bytes(wU(S)), m = k(H);
        n(JSON.stringify(m, null, 2));
      } catch (S) {
        d((S == null ? void 0 : S.message) ?? String(S));
      }
    };
    return B.jsxs("div", {
      className: "container",
      children: [
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
            onSubmit: N,
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
                    onChange: (C) => s(C.target.value),
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
                  title: p ? "Copied!" : "Copy to clipboard",
                  "aria-label": p ? "Copied!" : "Copy to clipboard",
                  onClick: () => {
                    navigator.clipboard.writeText(o).then(() => {
                      l(true), setTimeout(() => l(false), 2e3);
                    });
                  },
                  children: p ? B.jsx("svg", {
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
  const Mp = document.getElementById("root");
  if (!Mp) throw new Error("Root container not found");
  Ip(Mp).render(B.jsx(su.StrictMode, {
    children: B.jsx(gU, {})
  }));
})();
