// HELLO TO YOU! GOOD LUCK ON RE-WRITING THE CODE!


(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
            o
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
}
)();
function fc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Za = {
    exports: {}
}
    , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn = Symbol.for("react.element")
    , dc = Symbol.for("react.portal")
    , pc = Symbol.for("react.fragment")
    , mc = Symbol.for("react.strict_mode")
    , hc = Symbol.for("react.profiler")
    , vc = Symbol.for("react.provider")
    , gc = Symbol.for("react.context")
    , yc = Symbol.for("react.forward_ref")
    , wc = Symbol.for("react.suspense")
    , xc = Symbol.for("react.memo")
    , kc = Symbol.for("react.lazy")
    , Bi = Symbol.iterator;
function Ec(e) {
    return e === null || typeof e != "object" ? null : (e = Bi && e[Bi] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var Ja = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
}
    , qa = Object.assign
    , ba = {};
function sn(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = ba,
        this.updater = n || Ja
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
    ;
sn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
    ;
function eu() { }
eu.prototype = sn.prototype;
function $o(e, t, n) {
    this.props = e,
        this.context = t,
        this.refs = ba,
        this.updater = n || Ja
}
var Qo = $o.prototype = new eu;
Qo.constructor = $o;
qa(Qo, sn.prototype);
Qo.isPureReactComponent = !0;
var Ui = Array.isArray
    , tu = Object.prototype.hasOwnProperty
    , Ko = {
        current: null
    }
    , nu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function ru(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
            t.key !== void 0 && (o = "" + t.key),
            t)
            tu.call(t, r) && !nu.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        l.children = n;
    else if (1 < a) {
        for (var u = Array(a), f = 0; f < a; f++)
            u[f] = arguments[f + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
            a)
            l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: bn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Ko.current
    }
}
function Sc(e, t) {
    return {
        $$typeof: bn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Go(e) {
    return typeof e == "object" && e !== null && e.$$typeof === bn
}
function Nc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Wi = /\/+/g;
function Nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Nc("" + e.key) : t.toString(36)
}
function Sr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case bn:
                    case dc:
                        i = !0
                }
        }
    if (i)
        return i = e,
            l = l(i),
            e = r === "" ? "." + Nl(i, 0) : r,
            Ui(l) ? (n = "",
                e != null && (n = e.replace(Wi, "$&/") + "/"),
                Sr(l, t, n, "", function (f) {
                    return f
                })) : l != null && (Go(l) && (l = Sc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Wi, "$&/") + "/") + e)),
                    t.push(l)),
            1;
    if (i = 0,
        r = r === "" ? "." : r + ":",
        Ui(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Nl(o, a);
            i += Sr(o, t, n, u, l)
        }
    else if (u = Ec(e),
        typeof u == "function")
        for (e = u.call(e),
            a = 0; !(o = e.next()).done;)
            o = o.value,
                u = r + Nl(o, a++),
                i += Sr(o, t, n, u, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function ir(e, t, n) {
    if (e == null)
        return e;
    var r = []
        , l = 0;
    return Sr(e, r, "", "", function (o) {
        return t.call(n, o, l++)
    }),
        r
}
function _c(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
            t.then(function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = n)
            }, function (n) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = n)
            }),
            e._status === -1 && (e._status = 0,
                e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ae = {
    current: null
}
    , Nr = {
        transition: null
    }
    , Cc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: Nr,
        ReactCurrentOwner: Ko
    };
function lu() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: ir,
    forEach: function (e, t, n) {
        ir(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return ir(e, function () {
            t++
        }),
            t
    },
    toArray: function (e) {
        return ir(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Go(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = sn;
T.Fragment = pc;
T.Profiler = hc;
T.PureComponent = $o;
T.StrictMode = mc;
T.Suspense = wc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cc;
T.act = lu;
T.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qa({}, e.props)
        , l = e.key
        , o = e.ref
        , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
            i = Ko.current),
            t.key !== void 0 && (l = "" + t.key),
            e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (u in t)
            tu.call(t, u) && !nu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var f = 0; f < u; f++)
            a[f] = arguments[f + 2];
        r.children = a
    }
    return {
        $$typeof: bn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
    ;
T.createContext = function (e) {
    return e = {
        $$typeof: gc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
        e.Provider = {
            $$typeof: vc,
            _context: e
        },
        e.Consumer = e
}
    ;
T.createElement = ru;
T.createFactory = function (e) {
    var t = ru.bind(null, e);
    return t.type = e,
        t
}
    ;
T.createRef = function () {
    return {
        current: null
    }
}
    ;
T.forwardRef = function (e) {
    return {
        $$typeof: yc,
        render: e
    }
}
    ;
T.isValidElement = Go;
T.lazy = function (e) {
    return {
        $$typeof: kc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: _c
    }
}
    ;
T.memo = function (e, t) {
    return {
        $$typeof: xc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
    ;
T.startTransition = function (e) {
    var t = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = t
    }
}
    ;
T.unstable_act = lu;
T.useCallback = function (e, t) {
    return ae.current.useCallback(e, t)
}
    ;
T.useContext = function (e) {
    return ae.current.useContext(e)
}
    ;
T.useDebugValue = function () { }
    ;
T.useDeferredValue = function (e) {
    return ae.current.useDeferredValue(e)
}
    ;
T.useEffect = function (e, t) {
    return ae.current.useEffect(e, t)
}
    ;
T.useId = function () {
    return ae.current.useId()
}
    ;
T.useImperativeHandle = function (e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
}
    ;
T.useInsertionEffect = function (e, t) {
    return ae.current.useInsertionEffect(e, t)
}
    ;
T.useLayoutEffect = function (e, t) {
    return ae.current.useLayoutEffect(e, t)
}
    ;
T.useMemo = function (e, t) {
    return ae.current.useMemo(e, t)
}
    ;
T.useReducer = function (e, t, n) {
    return ae.current.useReducer(e, t, n)
}
    ;
T.useRef = function (e) {
    return ae.current.useRef(e)
}
    ;
T.useState = function (e) {
    return ae.current.useState(e)
}
    ;
T.useSyncExternalStore = function (e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
}
    ;
T.useTransition = function () {
    return ae.current.useTransition()
}
    ;
T.version = "18.3.1";
Za.exports = T;
var fe = Za.exports;
const s = fc(fe);
var Zl = {}
    , ou = {
        exports: {}
    }
    , we = {}
    , iu = {
        exports: {}
    }
    , au = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(N, z) {
        var L = N.length;
        N.push(z);
        e: for (; 0 < L;) {
            var $ = L - 1 >>> 1
                , X = N[$];
            if (0 < l(X, z))
                N[$] = z,
                    N[L] = X,
                    L = $;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var z = N[0]
            , L = N.pop();
        if (L !== z) {
            N[0] = L;
            e: for (var $ = 0, X = N.length, lr = X >>> 1; $ < lr;) {
                var gt = 2 * ($ + 1) - 1
                    , Sl = N[gt]
                    , yt = gt + 1
                    , or = N[yt];
                if (0 > l(Sl, L))
                    yt < X && 0 > l(or, Sl) ? (N[$] = or,
                        N[yt] = L,
                        $ = yt) : (N[$] = Sl,
                            N[gt] = L,
                            $ = gt);
                else if (yt < X && 0 > l(or, L))
                    N[$] = or,
                        N[yt] = L,
                        $ = yt;
                else
                    break e
            }
        }
        return z
    }
    function l(N, z) {
        var L = N.sortIndex - z.sortIndex;
        return L !== 0 ? L : N.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date
            , a = i.now();
        e.unstable_now = function () {
            return i.now() - a
        }
    }
    var u = []
        , f = []
        , v = 1
        , h = null
        , m = 3
        , w = !1
        , x = !1
        , k = !1
        , I = typeof setTimeout == "function" ? setTimeout : null
        , d = typeof clearTimeout == "function" ? clearTimeout : null
        , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(N) {
        for (var z = n(f); z !== null;) {
            if (z.callback === null)
                r(f);
            else if (z.startTime <= N)
                r(f),
                    z.sortIndex = z.expirationTime,
                    t(u, z);
            else
                break;
            z = n(f)
        }
    }
    function g(N) {
        if (k = !1,
            p(N),
            !x)
            if (n(u) !== null)
                x = !0,
                    kl(S);
            else {
                var z = n(f);
                z !== null && El(g, z.startTime - N)
            }
    }
    function S(N, z) {
        x = !1,
            k && (k = !1,
                d(P),
                P = -1),
            w = !0;
        var L = m;
        try {
            for (p(z),
                h = n(u); h !== null && (!(h.expirationTime > z) || N && !ze());) {
                var $ = h.callback;
                if (typeof $ == "function") {
                    h.callback = null,
                        m = h.priorityLevel;
                    var X = $(h.expirationTime <= z);
                    z = e.unstable_now(),
                        typeof X == "function" ? h.callback = X : h === n(u) && r(u),
                        p(z)
                } else
                    r(u);
                h = n(u)
            }
            if (h !== null)
                var lr = !0;
            else {
                var gt = n(f);
                gt !== null && El(g, gt.startTime - z),
                    lr = !1
            }
            return lr
        } finally {
            h = null,
                m = L,
                w = !1
        }
    }
    var _ = !1
        , C = null
        , P = -1
        , H = 5
        , M = -1;
    function ze() {
        return !(e.unstable_now() - M < H)
    }
    function dn() {
        if (C !== null) {
            var N = e.unstable_now();
            M = N;
            var z = !0;
            try {
                z = C(!0, N)
            } finally {
                z ? pn() : (_ = !1,
                    C = null)
            }
        } else
            _ = !1
    }
    var pn;
    if (typeof c == "function")
        pn = function () {
            c(dn)
        }
            ;
    else if (typeof MessageChannel < "u") {
        var Ai = new MessageChannel
            , cc = Ai.port2;
        Ai.port1.onmessage = dn,
            pn = function () {
                cc.postMessage(null)
            }
    } else
        pn = function () {
            I(dn, 0)
        }
            ;
    function kl(N) {
        C = N,
            _ || (_ = !0,
                pn())
    }
    function El(N, z) {
        P = I(function () {
            N(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (N) {
            N.callback = null
        }
        ,
        e.unstable_continueExecution = function () {
            x || w || (x = !0,
                kl(S))
        }
        ,
        e.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
            return m
        }
        ,
        e.unstable_getFirstCallbackNode = function () {
            return n(u)
        }
        ,
        e.unstable_next = function (N) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var z = 3;
                    break;
                default:
                    z = m
            }
            var L = m;
            m = z;
            try {
                return N()
            } finally {
                m = L
            }
        }
        ,
        e.unstable_pauseExecution = function () { }
        ,
        e.unstable_requestPaint = function () { }
        ,
        e.unstable_runWithPriority = function (N, z) {
            switch (N) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3
            }
            var L = m;
            m = N;
            try {
                return z()
            } finally {
                m = L
            }
        }
        ,
        e.unstable_scheduleCallback = function (N, z, L) {
            var $ = e.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay,
                L = typeof L == "number" && 0 < L ? $ + L : $) : L = $,
            N) {
                case 1:
                    var X = -1;
                    break;
                case 2:
                    X = 250;
                    break;
                case 5:
                    X = 1073741823;
                    break;
                case 4:
                    X = 1e4;
                    break;
                default:
                    X = 5e3
            }
            return X = L + X,
                N = {
                    id: v++,
                    callback: z,
                    priorityLevel: N,
                    startTime: L,
                    expirationTime: X,
                    sortIndex: -1
                },
                L > $ ? (N.sortIndex = L,
                    t(f, N),
                    n(u) === null && N === n(f) && (k ? (d(P),
                        P = -1) : k = !0,
                        El(g, L - $))) : (N.sortIndex = X,
                            t(u, N),
                            x || w || (x = !0,
                                kl(S))),
                N
        }
        ,
        e.unstable_shouldYield = ze,
        e.unstable_wrapCallback = function (N) {
            var z = m;
            return function () {
                var L = m;
                m = z;
                try {
                    return N.apply(this, arguments)
                } finally {
                    m = L
                }
            }
        }
}
)(au);
iu.exports = au;
var Pc = iu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = fe
    , ye = Pc;
function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var uu = new Set
    , Fn = {};
function Mt(e, t) {
    en(e, t),
        en(e + "Capture", t)
}
function en(e, t) {
    for (Fn[e] = t,
        e = 0; e < t.length; e++)
        uu.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , Jl = Object.prototype.hasOwnProperty
    , Lc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
    , Vi = {}
    , Hi = {};
function Tc(e) {
    return Jl.call(Hi, e) ? !0 : Jl.call(Vi, e) ? !1 : Lc.test(e) ? Hi[e] = !0 : (Vi[e] = !0,
        !1)
}
function Mc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
                e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}
function Rc(e, t, n, r) {
    if (t === null || typeof t > "u" || Mc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function ue(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = r,
        this.attributeNamespace = l,
        this.mustUseProperty = n,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = o,
        this.removeEmptyString = i
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ee[e] = new ue(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    ee[t] = new ue(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ee[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ee[e] = new ue(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    ee[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ee[e] = new ue(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    ee[e] = new ue(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ee[e] = new ue(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    ee[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Yo = /[\-:]([a-z])/g;
function Xo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Yo, Xo);
    ee[t] = new ue(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Yo, Xo);
    ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Yo, Xo);
    ee[t] = new ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ee.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function Zo(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rc(t, n, l, r) && (n = null),
        r || l === null ? Tc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
            r = l.attributeNamespace,
            n === null ? e.removeAttribute(t) : (l = l.type,
                n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ze = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
    , ar = Symbol.for("react.element")
    , Ft = Symbol.for("react.portal")
    , It = Symbol.for("react.fragment")
    , Jo = Symbol.for("react.strict_mode")
    , ql = Symbol.for("react.profiler")
    , su = Symbol.for("react.provider")
    , cu = Symbol.for("react.context")
    , qo = Symbol.for("react.forward_ref")
    , bl = Symbol.for("react.suspense")
    , eo = Symbol.for("react.suspense_list")
    , bo = Symbol.for("react.memo")
    , qe = Symbol.for("react.lazy")
    , fu = Symbol.for("react.offscreen")
    , $i = Symbol.iterator;
function mn(e) {
    return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"],
        typeof e == "function" ? e : null)
}
var W = Object.assign, _l;
function Sn(e) {
    if (_l === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            _l = t && t[1] || ""
        }
    return `
` + _l + e
}
var Cl = !1;
function Pl(e, t) {
    if (!e || Cl)
        return "";
    Cl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (f) {
                    r = f
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var l = f.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a];)
                a--;
            for (; 1 <= i && 0 <= a; i--,
                a--)
                if (l[i] !== o[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                                a--,
                                0 > a || l[i] !== o[a]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                    u
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Cl = !1,
            Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Sn(e) : ""
}
function jc(e) {
    switch (e.tag) {
        case 5:
            return Sn(e.type);
        case 16:
            return Sn("Lazy");
        case 13:
            return Sn("Suspense");
        case 19:
            return Sn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Pl(e.type, !1),
                e;
        case 11:
            return e = Pl(e.type.render, !1),
                e;
        case 1:
            return e = Pl(e.type, !0),
                e;
        default:
            return ""
    }
}
function to(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
        case It:
            return "Fragment";
        case Ft:
            return "Portal";
        case ql:
            return "Profiler";
        case Jo:
            return "StrictMode";
        case bl:
            return "Suspense";
        case eo:
            return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case cu:
                return (e.displayName || "Context") + ".Consumer";
            case su:
                return (e._context.displayName || "Context") + ".Provider";
            case qo:
                var t = e.render;
                return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                        e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
            case bo:
                return t = e.displayName || null,
                    t !== null ? t : to(e.type) || "Memo";
            case qe:
                t = e._payload,
                    e = e._init;
                try {
                    return to(e(t))
                } catch { }
        }
    return null
}
function Dc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
                e = e.displayName || e.name || "",
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return to(t);
        case 8:
            return t === Jo ? "StrictMode" : "Mode";
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
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
    }
    return null
}
function dt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}
function du(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Oc(e) {
    var t = du(e) ? "checked" : "value"
        , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
        , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
            , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return l.call(this)
            },
            set: function (i) {
                r = "" + i,
                    o.call(this, i)
            }
        }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
        {
            getValue: function () {
                return r
            },
            setValue: function (i) {
                r = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null,
                    delete e[t]
            }
        }
    }
}
function ur(e) {
    e._valueTracker || (e._valueTracker = Oc(e))
}
function pu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
        , r = "";
    return e && (r = du(e) ? e.checked ? "true" : "false" : e.value),
        e = r,
        e !== n ? (t.setValue(e),
            !0) : !1
}
function Or(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function no(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Qi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
        , r = t.checked != null ? t.checked : t.defaultChecked;
    n = dt(t.value != null ? t.value : n),
        e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
}
function mu(e, t) {
    t = t.checked,
        t != null && Zo(e, "checked", t, !1)
}
function ro(e, t) {
    mu(e, t);
    var n = dt(t.value)
        , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? lo(e, t.type, n) : t.hasOwnProperty("defaultValue") && lo(e, t.type, dt(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ki(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
            n || t === e.value || (e.value = t),
            e.defaultValue = t
    }
    n = e.name,
        n !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        n !== "" && (e.name = n)
}
function lo(e, t, n) {
    (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nn = Array.isArray;
function Yt(e, t, n, r) {
    if (e = e.options,
        t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + dt(n),
            t = null,
            l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                    r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function oo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(y(91));
    return W({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Gi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
            t = t.defaultValue,
            n != null) {
            if (t != null)
                throw Error(y(92));
            if (Nn(n)) {
                if (1 < n.length)
                    throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
            n = t
    }
    e._wrapperState = {
        initialValue: dt(n)
    }
}
function hu(e, t) {
    var n = dt(t.value)
        , r = dt(t.defaultValue);
    n != null && (n = "" + n,
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r)
}
function Yi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function vu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}
function io(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? vu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sr, gu = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
        })
    }
        : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (sr = sr || document.createElement("div"),
            sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = sr.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; t.firstChild;)
            e.appendChild(t.firstChild)
    }
});
function In(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Pn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
    , Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
    Fc.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Pn[t] = Pn[e]
    })
});
function yu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Pn.hasOwnProperty(e) && Pn[e] ? ("" + t).trim() : t + "px"
}
function wu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
                , l = yu(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, l) : e[n] = l
        }
}
var Ic = W({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ao(e, t) {
    if (t) {
        if (Ic[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(y(62))
    }
}
function uo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var so = null;
function ei(e) {
    return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
}
var co = null
    , Xt = null
    , Zt = null;
function Xi(e) {
    if (e = nr(e)) {
        if (typeof co != "function")
            throw Error(y(280));
        var t = e.stateNode;
        t && (t = cl(t),
            co(e.stateNode, e.type, t))
    }
}
function xu(e) {
    Xt ? Zt ? Zt.push(e) : Zt = [e] : Xt = e
}
function ku() {
    if (Xt) {
        var e = Xt
            , t = Zt;
        if (Zt = Xt = null,
            Xi(e),
            t)
            for (e = 0; e < t.length; e++)
                Xi(t[e])
    }
}
function Eu(e, t) {
    return e(t)
}
function Su() { }
var zl = !1;
function Nu(e, t, n) {
    if (zl)
        return e(t, n);
    zl = !0;
    try {
        return Eu(e, t, n)
    } finally {
        zl = !1,
            (Xt !== null || Zt !== null) && (Su(),
                ku())
    }
}
function An(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = cl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
            (r = !r.disabled) || (e = e.type,
                r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !r;
            break e;
        default:
            e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(y(231, t, typeof n));
    return n
}
var fo = !1;
if (Ke)
    try {
        var hn = {};
        Object.defineProperty(hn, "passive", {
            get: function () {
                fo = !0
            }
        }),
            window.addEventListener("test", hn, hn),
            window.removeEventListener("test", hn, hn)
    } catch {
        fo = !1
    }
function Ac(e, t, n, r, l, o, i, a, u) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f)
    } catch (v) {
        this.onError(v)
    }
}
var zn = !1
    , Fr = null
    , Ir = !1
    , po = null
    , Bc = {
        onError: function (e) {
            zn = !0,
                Fr = e
        }
    };
function Uc(e, t, n, r, l, o, i, a, u) {
    zn = !1,
        Fr = null,
        Ac.apply(Bc, arguments)
}
function Wc(e, t, n, r, l, o, i, a, u) {
    if (Uc.apply(this, arguments),
        zn) {
        if (zn) {
            var f = Fr;
            zn = !1,
                Fr = null
        } else
            throw Error(y(198));
        Ir || (Ir = !0,
            po = f)
    }
}
function Rt(e) {
    var t = e
        , n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do
            t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function _u(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
            return t.dehydrated
    }
    return null
}
function Zi(e) {
    if (Rt(e) !== e)
        throw Error(y(188))
}
function Vc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Rt(e),
            t === null)
            throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
                r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n)
                    return Zi(l),
                        e;
                if (o === r)
                    return Zi(l),
                        t;
                o = o.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return)
            n = l,
                r = o;
        else {
            for (var i = !1, a = l.child; a;) {
                if (a === n) {
                    i = !0,
                        n = l,
                        r = o;
                    break
                }
                if (a === r) {
                    i = !0,
                        r = l,
                        n = o;
                    break
                }
                a = a.sibling
            }
            if (!i) {
                for (a = o.child; a;) {
                    if (a === n) {
                        i = !0,
                            n = o,
                            r = l;
                        break
                    }
                    if (a === r) {
                        i = !0,
                            r = o,
                            n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!i)
                    throw Error(y(189))
            }
        }
        if (n.alternate !== r)
            throw Error(y(190))
    }
    if (n.tag !== 3)
        throw Error(y(188));
    return n.stateNode.current === n ? e : t
}
function Cu(e) {
    return e = Vc(e),
        e !== null ? Pu(e) : null
}
function Pu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = Pu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var zu = ye.unstable_scheduleCallback
    , Ji = ye.unstable_cancelCallback
    , Hc = ye.unstable_shouldYield
    , $c = ye.unstable_requestPaint
    , Q = ye.unstable_now
    , Qc = ye.unstable_getCurrentPriorityLevel
    , ti = ye.unstable_ImmediatePriority
    , Lu = ye.unstable_UserBlockingPriority
    , Ar = ye.unstable_NormalPriority
    , Kc = ye.unstable_LowPriority
    , Tu = ye.unstable_IdlePriority
    , il = null
    , Be = null;
function Gc(e) {
    if (Be && typeof Be.onCommitFiberRoot == "function")
        try {
            Be.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128)
        } catch { }
}
var je = Math.clz32 ? Math.clz32 : Zc
    , Yc = Math.log
    , Xc = Math.LN2;
function Zc(e) {
    return e >>>= 0,
        e === 0 ? 32 : 31 - (Yc(e) / Xc | 0) | 0
}
var cr = 64
    , fr = 4194304;
function _n(e) {
    switch (e & -e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}
function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
        , l = e.suspendedLanes
        , o = e.pingedLanes
        , i = n & 268435455;
    if (i !== 0) {
        var a = i & ~l;
        a !== 0 ? r = _n(a) : (o &= i,
            o !== 0 && (r = _n(o)))
    } else
        i = n & ~l,
            i !== 0 ? r = _n(i) : o !== 0 && (r = _n(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
        o = t & -t,
        l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
        t = e.entangledLanes,
        t !== 0)
        for (e = e.entanglements,
            t &= r; 0 < t;)
            n = 31 - je(t),
                l = 1 << n,
                r |= e[n],
                t &= ~l;
    return r
}
function Jc(e, t) {
    switch (e) {
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
            return -1
    }
}
function qc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - je(o)
            , a = 1 << i
            , u = l[i];
        u === -1 ? (!(a & n) || a & r) && (l[i] = Jc(a, t)) : u <= t && (e.expiredLanes |= a),
            o &= ~a
    }
}
function mo(e) {
    return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Mu() {
    var e = cr;
    return cr <<= 1,
        !(cr & 4194240) && (cr = 64),
        e
}
function Ll(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function er(e, t, n) {
    e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
            e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - je(t),
        e[t] = n
}
function bc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - je(n)
            , o = 1 << l;
        t[l] = 0,
            r[l] = -1,
            e[l] = -1,
            n &= ~o
    }
}
function ni(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - je(n)
            , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
            n &= ~l
    }
}
var j = 0;
function Ru(e) {
    return e &= -e,
        1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ju, ri, Du, Ou, Fu, ho = !1, dr = [], lt = null, ot = null, it = null, Bn = new Map, Un = new Map, et = [], ef = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qi(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            Bn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Un.delete(t.pointerId)
    }
}
function vn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
        t !== null && (t = nr(t),
            t !== null && ri(t)),
        e) : (e.eventSystemFlags |= r,
            t = e.targetContainers,
            l !== null && t.indexOf(l) === -1 && t.push(l),
            e)
}
function tf(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = vn(lt, e, t, n, r, l),
                !0;
        case "dragenter":
            return ot = vn(ot, e, t, n, r, l),
                !0;
        case "mouseover":
            return it = vn(it, e, t, n, r, l),
                !0;
        case "pointerover":
            var o = l.pointerId;
            return Bn.set(o, vn(Bn.get(o) || null, e, t, n, r, l)),
                !0;
        case "gotpointercapture":
            return o = l.pointerId,
                Un.set(o, vn(Un.get(o) || null, e, t, n, r, l)),
                !0
    }
    return !1
}
function Iu(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Rt(t);
        if (n !== null) {
            if (t = n.tag,
                t === 13) {
                if (t = _u(n),
                    t !== null) {
                    e.blockedOn = t,
                        Fu(e.priority, function () {
                            Du(n)
                        });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function _r(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            so = r,
                n.target.dispatchEvent(r),
                so = null
        } else
            return t = nr(n),
                t !== null && ri(t),
                e.blockedOn = n,
                !1;
        t.shift()
    }
    return !0
}
function bi(e, t, n) {
    _r(e) && n.delete(t)
}
function nf() {
    ho = !1,
        lt !== null && _r(lt) && (lt = null),
        ot !== null && _r(ot) && (ot = null),
        it !== null && _r(it) && (it = null),
        Bn.forEach(bi),
        Un.forEach(bi)
}
function gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
        ho || (ho = !0,
            ye.unstable_scheduleCallback(ye.unstable_NormalPriority, nf)))
}
function Wn(e) {
    function t(l) {
        return gn(l, e)
    }
    if (0 < dr.length) {
        gn(dr[0], e);
        for (var n = 1; n < dr.length; n++) {
            var r = dr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && gn(lt, e),
        ot !== null && gn(ot, e),
        it !== null && gn(it, e),
        Bn.forEach(t),
        Un.forEach(t),
        n = 0; n < et.length; n++)
        r = et[n],
            r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0],
        n.blockedOn === null);)
        Iu(n),
            n.blockedOn === null && et.shift()
}
var Jt = Ze.ReactCurrentBatchConfig
    , Ur = !0;
function rf(e, t, n, r) {
    var l = j
        , o = Jt.transition;
    Jt.transition = null;
    try {
        j = 1,
            li(e, t, n, r)
    } finally {
        j = l,
            Jt.transition = o
    }
}
function lf(e, t, n, r) {
    var l = j
        , o = Jt.transition;
    Jt.transition = null;
    try {
        j = 4,
            li(e, t, n, r)
    } finally {
        j = l,
            Jt.transition = o
    }
}
function li(e, t, n, r) {
    if (Ur) {
        var l = vo(e, t, n, r);
        if (l === null)
            Bl(e, t, r, Wr, n),
                qi(e, r);
        else if (tf(l, e, t, n, r))
            r.stopPropagation();
        else if (qi(e, r),
            t & 4 && -1 < ef.indexOf(e)) {
            for (; l !== null;) {
                var o = nr(l);
                if (o !== null && ju(o),
                    o = vo(e, t, n, r),
                    o === null && Bl(e, t, r, Wr, n),
                    o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            Bl(e, t, r, null, n)
    }
}
var Wr = null;
function vo(e, t, n, r) {
    if (Wr = null,
        e = ei(r),
        e = kt(e),
        e !== null)
        if (t = Rt(e),
            t === null)
            e = null;
        else if (n = t.tag,
            n === 13) {
            if (e = _u(t),
                e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Wr = e,
        null
}
function Au(e) {
    switch (e) {
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
            switch (Qc()) {
                case ti:
                    return 1;
                case Lu:
                    return 4;
                case Ar:
                case Kc:
                    return 16;
                case Tu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null
    , oi = null
    , Cr = null;
function Bu() {
    if (Cr)
        return Cr;
    var e, t = oi, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return Cr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Pr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
}
function pr() {
    return !0
}
function ea() {
    return !1
}
function xe(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
            this._targetInst = l,
            this.type = r,
            this.nativeEvent = o,
            this.target = i,
            this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
                this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? pr : ea,
            this.isPropagationStopped = ea,
            this
    }
    return W(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = pr)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = pr)
        },
        persist: function () { },
        isPersistent: pr
    }),
        t
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ii = xe(cn), tr = W({}, cn, {
    view: 0,
    detail: 0
}), of = xe(tr), Tl, Ml, yn, al = W({}, tr, {
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
    getModifierState: ai,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function (e) {
        return "movementX" in e ? e.movementX : (e !== yn && (yn && e.type === "mousemove" ? (Tl = e.screenX - yn.screenX,
            Ml = e.screenY - yn.screenY) : Ml = Tl = 0,
            yn = e),
            Tl)
    },
    movementY: function (e) {
        return "movementY" in e ? e.movementY : Ml
    }
}), ta = xe(al), af = W({}, al, {
    dataTransfer: 0
}), uf = xe(af), sf = W({}, tr, {
    relatedTarget: 0
}), Rl = xe(sf), cf = W({}, cn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), ff = xe(cf), df = W({}, cn, {
    clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), pf = xe(df), mf = W({}, cn, {
    data: 0
}), na = xe(mf), hf = {
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
}, vf = {
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
}, gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function yf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1
}
function ai() {
    return yf
}
var wf = W({}, tr, {
    key: function (e) {
        if (e.key) {
            var t = hf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Pr(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ai,
    charCode: function (e) {
        return e.type === "keypress" ? Pr(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? Pr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
    , xf = xe(wf)
    , kf = W({}, al, {
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
    })
    , ra = xe(kf)
    , Ef = W({}, tr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ai
    })
    , Sf = xe(Ef)
    , Nf = W({}, cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
    , _f = xe(Nf)
    , Cf = W({}, al, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
    , Pf = xe(Cf)
    , zf = [9, 13, 27, 32]
    , ui = Ke && "CompositionEvent" in window
    , Ln = null;
Ke && "documentMode" in document && (Ln = document.documentMode);
var Lf = Ke && "TextEvent" in window && !Ln
    , Uu = Ke && (!ui || Ln && 8 < Ln && 11 >= Ln)
    , la = " "
    , oa = !1;
function Wu(e, t) {
    switch (e) {
        case "keyup":
            return zf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}
function Vu(e) {
    return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
}
var At = !1;
function Tf(e, t) {
    switch (e) {
        case "compositionend":
            return Vu(t);
        case "keypress":
            return t.which !== 32 ? null : (oa = !0,
                la);
        case "textInput":
            return e = t.data,
                e === la && oa ? null : e;
        default:
            return null
    }
}
function Mf(e, t) {
    if (At)
        return e === "compositionend" || !ui && Wu(e, t) ? (e = Bu(),
            Cr = oi = nt = null,
            At = !1,
            e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Uu && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Rf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rf[e.type] : t === "textarea"
}
function Hu(e, t, n, r) {
    xu(r),
        t = Vr(t, "onChange"),
        0 < t.length && (n = new ii("onChange", "change", null, n, r),
            e.push({
                event: n,
                listeners: t
            }))
}
var Tn = null
    , Vn = null;
function jf(e) {
    es(e, 0)
}
function ul(e) {
    var t = Wt(e);
    if (pu(t))
        return e
}
function Df(e, t) {
    if (e === "change")
        return t
}
var $u = !1;
if (Ke) {
    var jl;
    if (Ke) {
        var Dl = "oninput" in document;
        if (!Dl) {
            var aa = document.createElement("div");
            aa.setAttribute("oninput", "return;"),
                Dl = typeof aa.oninput == "function"
        }
        jl = Dl
    } else
        jl = !1;
    $u = jl && (!document.documentMode || 9 < document.documentMode)
}
function ua() {
    Tn && (Tn.detachEvent("onpropertychange", Qu),
        Vn = Tn = null)
}
function Qu(e) {
    if (e.propertyName === "value" && ul(Vn)) {
        var t = [];
        Hu(t, Vn, e, ei(e)),
            Nu(jf, t)
    }
}
function Of(e, t, n) {
    e === "focusin" ? (ua(),
        Tn = t,
        Vn = n,
        Tn.attachEvent("onpropertychange", Qu)) : e === "focusout" && ua()
}
function Ff(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ul(Vn)
}
function If(e, t) {
    if (e === "click")
        return ul(t)
}
function Af(e, t) {
    if (e === "input" || e === "change")
        return ul(t)
}
function Bf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Oe = typeof Object.is == "function" ? Object.is : Bf;
function Hn(e, t) {
    if (Oe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
        , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Jl.call(t, l) || !Oe(e[l], t[l]))
            return !1
    }
    return !0
}
function sa(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function ca(e, t) {
    var n = sa(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
                e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = sa(n)
    }
}
function Ku(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ku(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gu() {
    for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Or(e.document)
    }
    return t
}
function si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Uf(e) {
    var t = Gu()
        , n = e.focusedElem
        , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ku(n.ownerDocument.documentElement, n)) {
        if (r !== null && si(n)) {
            if (t = r.start,
                e = r.end,
                e === void 0 && (e = t),
                "selectionStart" in n)
                n.selectionStart = t,
                    n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                    , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                    !e.extend && o > r && (l = r,
                        r = o,
                        o = l),
                    l = ca(n, o);
                var i = ca(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t),
                        e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                            e.addRange(t)))
            }
        }
        for (t = [],
            e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
            n = 0; n < t.length; n++)
            e = t[n],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
    }
}
var Wf = Ke && "documentMode" in document && 11 >= document.documentMode
    , Bt = null
    , go = null
    , Mn = null
    , yo = !1;
function fa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yo || Bt == null || Bt !== Or(r) || (r = Bt,
        "selectionStart" in r && si(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
            r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset
            }),
        Mn && Hn(Mn, r) || (Mn = r,
            r = Vr(go, "onSelect"),
            0 < r.length && (t = new ii("onSelect", "select", null, t, n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = Bt)))
}
function mr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
}
var Ut = {
    animationend: mr("Animation", "AnimationEnd"),
    animationiteration: mr("Animation", "AnimationIteration"),
    animationstart: mr("Animation", "AnimationStart"),
    transitionend: mr("Transition", "TransitionEnd")
}
    , Ol = {}
    , Yu = {};
Ke && (Yu = document.createElement("div").style,
    "AnimationEvent" in window || (delete Ut.animationend.animation,
        delete Ut.animationiteration.animation,
        delete Ut.animationstart.animation),
    "TransitionEvent" in window || delete Ut.transitionend.transition);
function sl(e) {
    if (Ol[e])
        return Ol[e];
    if (!Ut[e])
        return e;
    var t = Ut[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Yu)
            return Ol[e] = t[n];
    return e
}
var Xu = sl("animationend")
    , Zu = sl("animationiteration")
    , Ju = sl("animationstart")
    , qu = sl("transitionend")
    , bu = new Map
    , da = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
    bu.set(e, t),
        Mt(t, [e])
}
for (var Fl = 0; Fl < da.length; Fl++) {
    var Il = da[Fl]
        , Vf = Il.toLowerCase()
        , Hf = Il[0].toUpperCase() + Il.slice(1);
    mt(Vf, "on" + Hf)
}
mt(Xu, "onAnimationEnd");
mt(Zu, "onAnimationIteration");
mt(Ju, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(qu, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function pa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
        Wc(r, t, void 0, e),
        e.currentTarget = null
}
function es(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
            , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var a = r[i]
                        , u = a.instance
                        , f = a.currentTarget;
                    if (a = a.listener,
                        u !== o && l.isPropagationStopped())
                        break e;
                    pa(l, a, f),
                        o = u
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (a = r[i],
                        u = a.instance,
                        f = a.currentTarget,
                        a = a.listener,
                        u !== o && l.isPropagationStopped())
                        break e;
                    pa(l, a, f),
                        o = u
                }
        }
    }
    if (Ir)
        throw e = po,
        Ir = !1,
        po = null,
        e
}
function O(e, t) {
    var n = t[So];
    n === void 0 && (n = t[So] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ts(t, e, 2, !1),
        n.add(r))
}
function Al(e, t, n) {
    var r = 0;
    t && (r |= 4),
        ts(n, e, r, t)
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
    if (!e[hr]) {
        e[hr] = !0,
            uu.forEach(function (n) {
                n !== "selectionchange" && ($f.has(n) || Al(n, !1, e),
                    Al(n, !0, e))
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hr] || (t[hr] = !0,
            Al("selectionchange", !1, t))
    }
}
function ts(e, t, n, r) {
    switch (Au(t)) {
        case 1:
            var l = rf;
            break;
        case 4:
            l = lf;
            break;
        default:
            l = li
    }
    n = l.bind(null, t, n, e),
        l = void 0,
        !fo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
        r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
}
function Bl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ;) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var a = r.stateNode.containerInfo;
                if (a === l || a.nodeType === 8 && a.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null;) {
                        var u = i.tag;
                        if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo,
                            u === l || u.nodeType === 8 && u.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; a !== null;) {
                    if (i = kt(a),
                        i === null)
                        return;
                    if (u = i.tag,
                        u === 5 || u === 6) {
                        r = o = i;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    Nu(function () {
        var f = o
            , v = ei(n)
            , h = [];
        e: {
            var m = bu.get(e);
            if (m !== void 0) {
                var w = ii
                    , x = e;
                switch (e) {
                    case "keypress":
                        if (Pr(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        w = xf;
                        break;
                    case "focusin":
                        x = "focus",
                            w = Rl;
                        break;
                    case "focusout":
                        x = "blur",
                            w = Rl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Rl;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        w = ta;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = uf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = Sf;
                        break;
                    case Xu:
                    case Zu:
                    case Ju:
                        w = ff;
                        break;
                    case qu:
                        w = _f;
                        break;
                    case "scroll":
                        w = of;
                        break;
                    case "wheel":
                        w = Pf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = pf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = ra
                }
                var k = (t & 4) !== 0
                    , I = !k && e === "scroll"
                    , d = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = f, p; c !== null;) {
                    p = c;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g,
                        d !== null && (g = An(c, d),
                            g != null && k.push(Qn(c, g, p)))),
                        I)
                        break;
                    c = c.return
                }
                0 < k.length && (m = new w(m, x, null, n, v),
                    h.push({
                        event: m,
                        listeners: k
                    }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                    w = e === "mouseout" || e === "pointerout",
                    m && n !== so && (x = n.relatedTarget || n.fromElement) && (kt(x) || x[Ge]))
                    break e;
                if ((w || m) && (m = v.window === v ? v : (m = v.ownerDocument) ? m.defaultView || m.parentWindow : window,
                    w ? (x = n.relatedTarget || n.toElement,
                        w = f,
                        x = x ? kt(x) : null,
                        x !== null && (I = Rt(x),
                            x !== I || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null,
                                x = f),
                    w !== x)) {
                    if (k = ta,
                        g = "onMouseLeave",
                        d = "onMouseEnter",
                        c = "mouse",
                        (e === "pointerout" || e === "pointerover") && (k = ra,
                            g = "onPointerLeave",
                            d = "onPointerEnter",
                            c = "pointer"),
                        I = w == null ? m : Wt(w),
                        p = x == null ? m : Wt(x),
                        m = new k(g, c + "leave", w, n, v),
                        m.target = I,
                        m.relatedTarget = p,
                        g = null,
                        kt(v) === f && (k = new k(d, c + "enter", x, n, v),
                            k.target = p,
                            k.relatedTarget = I,
                            g = k),
                        I = g,
                        w && x)
                        t: {
                            for (k = w,
                                d = x,
                                c = 0,
                                p = k; p; p = jt(p))
                                c++;
                            for (p = 0,
                                g = d; g; g = jt(g))
                                p++;
                            for (; 0 < c - p;)
                                k = jt(k),
                                    c--;
                            for (; 0 < p - c;)
                                d = jt(d),
                                    p--;
                            for (; c--;) {
                                if (k === d || d !== null && k === d.alternate)
                                    break t;
                                k = jt(k),
                                    d = jt(d)
                            }
                            k = null
                        }
                    else
                        k = null;
                    w !== null && ma(h, m, w, k, !1),
                        x !== null && I !== null && ma(h, I, x, k, !0)
                }
            }
            e: {
                if (m = f ? Wt(f) : window,
                    w = m.nodeName && m.nodeName.toLowerCase(),
                    w === "select" || w === "input" && m.type === "file")
                    var S = Df;
                else if (ia(m))
                    if ($u)
                        S = Af;
                    else {
                        S = Ff;
                        var _ = Of
                    }
                else
                    (w = m.nodeName) && w.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = If);
                if (S && (S = S(e, f))) {
                    Hu(h, S, n, v);
                    break e
                }
                _ && _(e, m, f),
                    e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && lo(m, "number", m.value)
            }
            switch (_ = f ? Wt(f) : window,
            e) {
                case "focusin":
                    (ia(_) || _.contentEditable === "true") && (Bt = _,
                        go = f,
                        Mn = null);
                    break;
                case "focusout":
                    Mn = go = Bt = null;
                    break;
                case "mousedown":
                    yo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    yo = !1,
                        fa(h, n, v);
                    break;
                case "selectionchange":
                    if (Wf)
                        break;
                case "keydown":
                case "keyup":
                    fa(h, n, v)
            }
            var C;
            if (ui)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e
                    }
                    P = void 0
                }
            else
                At ? Wu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (Uu && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (C = Bu()) : (nt = v,
                oi = "value" in nt ? nt.value : nt.textContent,
                At = !0)),
                _ = Vr(f, P),
                0 < _.length && (P = new na(P, e, null, n, v),
                    h.push({
                        event: P,
                        listeners: _
                    }),
                    C ? P.data = C : (C = Vu(n),
                        C !== null && (P.data = C)))),
                (C = Lf ? Tf(e, n) : Mf(e, n)) && (f = Vr(f, "onBeforeInput"),
                    0 < f.length && (v = new na("onBeforeInput", "beforeinput", null, n, v),
                        h.push({
                            event: v,
                            listeners: f
                        }),
                        v.data = C))
        }
        es(h, t)
    })
}
function Qn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Vr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e
            , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
            o = An(e, n),
            o != null && r.unshift(Qn(e, o, l)),
            o = An(e, t),
            o != null && r.push(Qn(e, o, l))),
            e = e.return
    }
    return r
}
function jt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ma(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var a = n
            , u = a.alternate
            , f = a.stateNode;
        if (u !== null && u === r)
            break;
        a.tag === 5 && f !== null && (a = f,
            l ? (u = An(n, o),
                u != null && i.unshift(Qn(n, u, a))) : l || (u = An(n, o),
                    u != null && i.push(Qn(n, u, a)))),
            n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Qf = /\r\n?/g
    , Kf = /\u0000|\uFFFD/g;
function ha(e) {
    return (typeof e == "string" ? e : "" + e).replace(Qf, `
`).replace(Kf, "")
}
function vr(e, t, n) {
    if (t = ha(t),
        ha(e) !== t && n)
        throw Error(y(425))
}
function Hr() { }
var wo = null
    , xo = null;
function ko(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Eo = typeof setTimeout == "function" ? setTimeout : void 0
    , Gf = typeof clearTimeout == "function" ? clearTimeout : void 0
    , va = typeof Promise == "function" ? Promise : void 0
    , Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof va < "u" ? function (e) {
        return va.resolve(null).then(e).catch(Xf)
    }
        : Eo;
function Xf(e) {
    setTimeout(function () {
        throw e
    })
}
function Ul(e, t) {
    var n = t
        , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
            l && l.nodeType === 8)
            if (n = l.data,
                n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                        Wn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Wn(t)
}
function at(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function ga(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fn = Math.random().toString(36).slice(2)
    , Ae = "__reactFiber$" + fn
    , Kn = "__reactProps$" + fn
    , Ge = "__reactContainer$" + fn
    , So = "__reactEvents$" + fn
    , Zf = "__reactListeners$" + fn
    , Jf = "__reactHandles$" + fn;
function kt(e) {
    var t = e[Ae];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ge] || n[Ae]) {
            if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                for (e = ga(e); e !== null;) {
                    if (n = e[Ae])
                        return n;
                    e = ga(e)
                }
            return t
        }
        e = n,
            n = e.parentNode
    }
    return null
}
function nr(e) {
    return e = e[Ae] || e[Ge],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Wt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(y(33))
}
function cl(e) {
    return e[Kn] || null
}
var No = []
    , Vt = -1;
function ht(e) {
    return {
        current: e
    }
}
function F(e) {
    0 > Vt || (e.current = No[Vt],
        No[Vt] = null,
        Vt--)
}
function D(e, t) {
    Vt++,
        No[Vt] = e.current,
        e.current = t
}
var pt = {}
    , le = ht(pt)
    , de = ht(!1)
    , Ct = pt;
function tn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = l),
        l
}
function pe(e) {
    return e = e.childContextTypes,
        e != null
}
function $r() {
    F(de),
        F(le)
}
function ya(e, t, n) {
    if (le.current !== pt)
        throw Error(y(168));
    D(le, t),
        D(de, n)
}
function ns(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
        typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(y(108, Dc(e) || "Unknown", l));
    return W({}, n, r)
}
function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt,
        Ct = le.current,
        D(le, e),
        D(de, de.current),
        !0
}
function wa(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(y(169));
    n ? (e = ns(e, t, Ct),
        r.__reactInternalMemoizedMergedChildContext = e,
        F(de),
        F(le),
        D(le, e)) : F(de),
        D(de, n)
}
var Ve = null
    , fl = !1
    , Wl = !1;
function rs(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function qf(e) {
    fl = !0,
        rs(e)
}
function vt() {
    if (!Wl && Ve !== null) {
        Wl = !0;
        var e = 0
            , t = j;
        try {
            var n = Ve;
            for (j = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ve = null,
                fl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            zu(ti, vt),
            l
        } finally {
            j = t,
                Wl = !1
        }
    }
    return null
}
var Ht = []
    , $t = 0
    , Kr = null
    , Gr = 0
    , Ee = []
    , Se = 0
    , Pt = null
    , He = 1
    , $e = "";
function wt(e, t) {
    Ht[$t++] = Gr,
        Ht[$t++] = Kr,
        Kr = e,
        Gr = t
}
function ls(e, t, n) {
    Ee[Se++] = He,
        Ee[Se++] = $e,
        Ee[Se++] = Pt,
        Pt = e;
    var r = He;
    e = $e;
    var l = 32 - je(r) - 1;
    r &= ~(1 << l),
        n += 1;
    var o = 32 - je(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
            r >>= i,
            l -= i,
            He = 1 << 32 - je(t) + l | n << l | r,
            $e = o + e
    } else
        He = 1 << o | n << l | r,
            $e = e
}
function ci(e) {
    e.return !== null && (wt(e, 1),
        ls(e, 1, 0))
}
function fi(e) {
    for (; e === Kr;)
        Kr = Ht[--$t],
            Ht[$t] = null,
            Gr = Ht[--$t],
            Ht[$t] = null;
    for (; e === Pt;)
        Pt = Ee[--Se],
            Ee[Se] = null,
            $e = Ee[--Se],
            Ee[Se] = null,
            He = Ee[--Se],
            Ee[Se] = null
}
var ge = null
    , ve = null
    , A = !1
    , Re = null;
function os(e, t) {
    var n = Ne(5, null, null, 0);
    n.elementType = "DELETED",
        n.stateNode = t,
        n.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [n],
            e.flags |= 16) : t.push(n)
}
function xa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
                t !== null ? (e.stateNode = t,
                    ge = e,
                    ve = at(t.firstChild),
                    !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
                t !== null ? (e.stateNode = t,
                    ge = e,
                    ve = null,
                    !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
                t !== null ? (n = Pt !== null ? {
                    id: He,
                    overflow: $e
                } : null,
                    e.memoizedState = {
                        dehydrated: t,
                        treeContext: n,
                        retryLane: 1073741824
                    },
                    n = Ne(18, null, null, 0),
                    n.stateNode = t,
                    n.return = e,
                    e.child = n,
                    ge = e,
                    ve = null,
                    !0) : !1;
        default:
            return !1
    }
}
function _o(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Co(e) {
    if (A) {
        var t = ve;
        if (t) {
            var n = t;
            if (!xa(e, t)) {
                if (_o(e))
                    throw Error(y(418));
                t = at(n.nextSibling);
                var r = ge;
                t && xa(e, t) ? os(r, n) : (e.flags = e.flags & -4097 | 2,
                    A = !1,
                    ge = e)
            }
        } else {
            if (_o(e))
                throw Error(y(418));
            e.flags = e.flags & -4097 | 2,
                A = !1,
                ge = e
        }
    }
}
function ka(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    ge = e
}
function gr(e) {
    if (e !== ge)
        return !1;
    if (!A)
        return ka(e),
            A = !0,
            !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps)),
        t && (t = ve)) {
        if (_o(e))
            throw is(),
            Error(y(418));
        for (; t;)
            os(e, t),
                t = at(t.nextSibling)
    }
    if (ka(e),
        e.tag === 13) {
        if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
            throw Error(y(317));
        e: {
            for (e = e.nextSibling,
                t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = at(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = ge ? at(e.stateNode.nextSibling) : null;
    return !0
}
function is() {
    for (var e = ve; e;)
        e = at(e.nextSibling)
}
function nn() {
    ve = ge = null,
        A = !1
}
function di(e) {
    Re === null ? Re = [e] : Re.push(e)
}
var bf = Ze.ReactCurrentBatchConfig;
function wn(e, t, n) {
    if (e = n.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
                n) {
                if (n.tag !== 1)
                    throw Error(y(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(y(147, e));
            var l = r
                , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (i) {
                var a = l.refs;
                i === null ? delete a[o] : a[o] = i
            }
                ,
                t._stringRef = o,
                t)
        }
        if (typeof e != "string")
            throw Error(y(284));
        if (!n._owner)
            throw Error(y(290, e))
    }
    return e
}
function yr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Ea(e) {
    var t = e._init;
    return t(e._payload)
}
function as(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? (d.deletions = [c],
                d.flags |= 16) : p.push(c)
        }
    }
    function n(d, c) {
        if (!e)
            return null;
        for (; c !== null;)
            t(d, c),
                c = c.sibling;
        return null
    }
    function r(d, c) {
        for (d = new Map; c !== null;)
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
                c = c.sibling;
        return d
    }
    function l(d, c) {
        return d = ft(d, c),
            d.index = 0,
            d.sibling = null,
            d
    }
    function o(d, c, p) {
        return d.index = p,
            e ? (p = d.alternate,
                p !== null ? (p = p.index,
                    p < c ? (d.flags |= 2,
                        c) : p) : (d.flags |= 2,
                            c)) : (d.flags |= 1048576,
                                c)
    }
    function i(d) {
        return e && d.alternate === null && (d.flags |= 2),
            d
    }
    function a(d, c, p, g) {
        return c === null || c.tag !== 6 ? (c = Yl(p, d.mode, g),
            c.return = d,
            c) : (c = l(c, p),
                c.return = d,
                c)
    }
    function u(d, c, p, g) {
        var S = p.type;
        return S === It ? v(d, c, p.props.children, g, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && Ea(S) === c.type) ? (g = l(c, p.props),
            g.ref = wn(d, c, p),
            g.return = d,
            g) : (g = Dr(p.type, p.key, p.props, null, d.mode, g),
                g.ref = wn(d, c, p),
                g.return = d,
                g)
    }
    function f(d, c, p, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Xl(p, d.mode, g),
            c.return = d,
            c) : (c = l(c, p.children || []),
                c.return = d,
                c)
    }
    function v(d, c, p, g, S) {
        return c === null || c.tag !== 7 ? (c = _t(p, d.mode, g, S),
            c.return = d,
            c) : (c = l(c, p),
                c.return = d,
                c)
    }
    function h(d, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Yl("" + c, d.mode, p),
                c.return = d,
                c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case ar:
                    return p = Dr(c.type, c.key, c.props, null, d.mode, p),
                        p.ref = wn(d, null, c),
                        p.return = d,
                        p;
                case Ft:
                    return c = Xl(c, d.mode, p),
                        c.return = d,
                        c;
                case qe:
                    var g = c._init;
                    return h(d, g(c._payload), p)
            }
            if (Nn(c) || mn(c))
                return c = _t(c, d.mode, p, null),
                    c.return = d,
                    c;
            yr(d, c)
        }
        return null
    }
    function m(d, c, p, g) {
        var S = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return S !== null ? null : a(d, c, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ar:
                    return p.key === S ? u(d, c, p, g) : null;
                case Ft:
                    return p.key === S ? f(d, c, p, g) : null;
                case qe:
                    return S = p._init,
                        m(d, c, S(p._payload), g)
            }
            if (Nn(p) || mn(p))
                return S !== null ? null : v(d, c, p, g, null);
            yr(d, p)
        }
        return null
    }
    function w(d, c, p, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return d = d.get(p) || null,
                a(c, d, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case ar:
                    return d = d.get(g.key === null ? p : g.key) || null,
                        u(c, d, g, S);
                case Ft:
                    return d = d.get(g.key === null ? p : g.key) || null,
                        f(c, d, g, S);
                case qe:
                    var _ = g._init;
                    return w(d, c, p, _(g._payload), S)
            }
            if (Nn(g) || mn(g))
                return d = d.get(p) || null,
                    v(c, d, g, S, null);
            yr(c, g)
        }
        return null
    }
    function x(d, c, p, g) {
        for (var S = null, _ = null, C = c, P = c = 0, H = null; C !== null && P < p.length; P++) {
            C.index > P ? (H = C,
                C = null) : H = C.sibling;
            var M = m(d, C, p[P], g);
            if (M === null) {
                C === null && (C = H);
                break
            }
            e && C && M.alternate === null && t(d, C),
                c = o(M, c, P),
                _ === null ? S = M : _.sibling = M,
                _ = M,
                C = H
        }
        if (P === p.length)
            return n(d, C),
                A && wt(d, P),
                S;
        if (C === null) {
            for (; P < p.length; P++)
                C = h(d, p[P], g),
                    C !== null && (c = o(C, c, P),
                        _ === null ? S = C : _.sibling = C,
                        _ = C);
            return A && wt(d, P),
                S
        }
        for (C = r(d, C); P < p.length; P++)
            H = w(C, d, P, p[P], g),
                H !== null && (e && H.alternate !== null && C.delete(H.key === null ? P : H.key),
                    c = o(H, c, P),
                    _ === null ? S = H : _.sibling = H,
                    _ = H);
        return e && C.forEach(function (ze) {
            return t(d, ze)
        }),
            A && wt(d, P),
            S
    }
    function k(d, c, p, g) {
        var S = mn(p);
        if (typeof S != "function")
            throw Error(y(150));
        if (p = S.call(p),
            p == null)
            throw Error(y(151));
        for (var _ = S = null, C = c, P = c = 0, H = null, M = p.next(); C !== null && !M.done; P++,
            M = p.next()) {
            C.index > P ? (H = C,
                C = null) : H = C.sibling;
            var ze = m(d, C, M.value, g);
            if (ze === null) {
                C === null && (C = H);
                break
            }
            e && C && ze.alternate === null && t(d, C),
                c = o(ze, c, P),
                _ === null ? S = ze : _.sibling = ze,
                _ = ze,
                C = H
        }
        if (M.done)
            return n(d, C),
                A && wt(d, P),
                S;
        if (C === null) {
            for (; !M.done; P++,
                M = p.next())
                M = h(d, M.value, g),
                    M !== null && (c = o(M, c, P),
                        _ === null ? S = M : _.sibling = M,
                        _ = M);
            return A && wt(d, P),
                S
        }
        for (C = r(d, C); !M.done; P++,
            M = p.next())
            M = w(C, d, P, M.value, g),
                M !== null && (e && M.alternate !== null && C.delete(M.key === null ? P : M.key),
                    c = o(M, c, P),
                    _ === null ? S = M : _.sibling = M,
                    _ = M);
        return e && C.forEach(function (dn) {
            return t(d, dn)
        }),
            A && wt(d, P),
            S
    }
    function I(d, c, p, g) {
        if (typeof p == "object" && p !== null && p.type === It && p.key === null && (p = p.props.children),
            typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ar:
                    e: {
                        for (var S = p.key, _ = c; _ !== null;) {
                            if (_.key === S) {
                                if (S = p.type,
                                    S === It) {
                                    if (_.tag === 7) {
                                        n(d, _.sibling),
                                            c = l(_, p.props.children),
                                            c.return = d,
                                            d = c;
                                        break e
                                    }
                                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === qe && Ea(S) === _.type) {
                                    n(d, _.sibling),
                                        c = l(_, p.props),
                                        c.ref = wn(d, _, p),
                                        c.return = d,
                                        d = c;
                                    break e
                                }
                                n(d, _);
                                break
                            } else
                                t(d, _);
                            _ = _.sibling
                        }
                        p.type === It ? (c = _t(p.props.children, d.mode, g, p.key),
                            c.return = d,
                            d = c) : (g = Dr(p.type, p.key, p.props, null, d.mode, g),
                                g.ref = wn(d, c, p),
                                g.return = d,
                                d = g)
                    }
                    return i(d);
                case Ft:
                    e: {
                        for (_ = p.key; c !== null;) {
                            if (c.key === _)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(d, c.sibling),
                                        c = l(c, p.children || []),
                                        c.return = d,
                                        d = c;
                                    break e
                                } else {
                                    n(d, c);
                                    break
                                }
                            else
                                t(d, c);
                            c = c.sibling
                        }
                        c = Xl(p, d.mode, g),
                            c.return = d,
                            d = c
                    }
                    return i(d);
                case qe:
                    return _ = p._init,
                        I(d, c, _(p._payload), g)
            }
            if (Nn(p))
                return x(d, c, p, g);
            if (mn(p))
                return k(d, c, p, g);
            yr(d, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
            c !== null && c.tag === 6 ? (n(d, c.sibling),
                c = l(c, p),
                c.return = d,
                d = c) : (n(d, c),
                    c = Yl(p, d.mode, g),
                    c.return = d,
                    d = c),
            i(d)) : n(d, c)
    }
    return I
}
var rn = as(!0)
    , us = as(!1)
    , Yr = ht(null)
    , Xr = null
    , Qt = null
    , pi = null;
function mi() {
    pi = Qt = Xr = null
}
function hi(e) {
    var t = Yr.current;
    F(Yr),
        e._currentValue = t
}
function Po(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
            break;
        e = e.return
    }
}
function qt(e, t) {
    Xr = e,
        pi = Qt = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && (e.lanes & t && (ce = !0),
            e.firstContext = null)
}
function Ce(e) {
    var t = e._currentValue;
    if (pi !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
            Qt === null) {
            if (Xr === null)
                throw Error(y(308));
            Qt = e,
                Xr.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
        } else
            Qt = Qt.next = e;
    return t
}
var Et = null;
function vi(e) {
    Et === null ? Et = [e] : Et.push(e)
}
function ss(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
        vi(t)) : (n.next = l.next,
            l.next = n),
        t.interleaved = n,
        Ye(e, r)
}
function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
        n = e,
        e = e.return; e !== null;)
        e.childLanes |= t,
            n = e.alternate,
            n !== null && (n.childLanes |= t),
            n = e,
            e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;
function gi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function cs(e, t) {
    e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
}
function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
        R & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
            l.next = t),
            r.pending = t,
            Ye(e, n)
    }
    return l = r.interleaved,
        l === null ? (t.next = t,
            vi(r)) : (t.next = l.next,
                l.next = t),
        r.interleaved = t,
        Ye(e, n)
}
function zr(e, t, n) {
    if (t = t.updateQueue,
        t !== null && (t = t.shared,
            (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            ni(e, n)
    }
}
function Sa(e, t) {
    var n = e.updateQueue
        , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
        n === r)) {
        var l = null
            , o = null;
        if (n = n.firstBaseUpdate,
            n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                    n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
            e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
}
function Zr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate
        , i = l.lastBaseUpdate
        , a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a
            , f = u.next;
        u.next = null,
            i === null ? o = f : i.next = f,
            i = u;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
            a = v.lastBaseUpdate,
            a !== i && (a === null ? v.firstBaseUpdate = f : a.next = f,
                v.lastBaseUpdate = u))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0,
            v = f = u = null,
            a = o;
        do {
            var m = a.lane
                , w = a.eventTime;
            if ((r & m) === m) {
                v !== null && (v = v.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                        , k = a;
                    switch (m = t,
                    w = n,
                    k.tag) {
                        case 1:
                            if (x = k.payload,
                                typeof x == "function") {
                                h = x.call(w, h, m);
                                break e
                            }
                            h = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = k.payload,
                                m = typeof x == "function" ? x.call(w, h, m) : x,
                                m == null)
                                break e;
                            h = W({}, h, m);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                    m = l.effects,
                    m === null ? l.effects = [a] : m.push(a))
            } else
                w = {
                    eventTime: w,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                    v === null ? (f = v = w,
                        u = h) : v = v.next = w,
                    i |= m;
            if (a = a.next,
                a === null) {
                if (a = l.shared.pending,
                    a === null)
                    break;
                m = a,
                    a = m.next,
                    m.next = null,
                    l.lastBaseUpdate = m,
                    l.shared.pending = null
            }
        } while (!0);
        if (v === null && (u = h),
            l.baseState = u,
            l.firstBaseUpdate = f,
            l.lastBaseUpdate = v,
            t = l.shared.interleaved,
            t !== null) {
            l = t;
            do
                i |= l.lane,
                    l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Lt |= i,
            e.lanes = i,
            e.memoizedState = h
    }
}
function Na(e, t, n) {
    if (e = t.effects,
        t.effects = null,
        e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
                , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                    r = n,
                    typeof l != "function")
                    throw Error(y(191, l));
                l.call(r)
            }
        }
}
var rr = {}
    , Ue = ht(rr)
    , Gn = ht(rr)
    , Yn = ht(rr);
function St(e) {
    if (e === rr)
        throw Error(y(174));
    return e
}
function yi(e, t) {
    switch (D(Yn, t),
    D(Gn, e),
    D(Ue, rr),
    e = t.nodeType,
    e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : io(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
                t = e.namespaceURI || null,
                e = e.tagName,
                t = io(t, e)
    }
    F(Ue),
        D(Ue, t)
}
function ln() {
    F(Ue),
        F(Gn),
        F(Yn)
}
function fs(e) {
    St(Yn.current);
    var t = St(Ue.current)
        , n = io(t, e.type);
    t !== n && (D(Gn, e),
        D(Ue, n))
}
function wi(e) {
    Gn.current === e && (F(Ue),
        F(Gn))
}
var B = ht(0);
function Jr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
                t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
            t = t.sibling
    }
    return null
}
var Vl = [];
function xi() {
    for (var e = 0; e < Vl.length; e++)
        Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0
}
var Lr = Ze.ReactCurrentDispatcher
    , Hl = Ze.ReactCurrentBatchConfig
    , zt = 0
    , U = null
    , G = null
    , Z = null
    , qr = !1
    , Rn = !1
    , Xn = 0
    , ed = 0;
function te() {
    throw Error(y(321))
}
function ki(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Oe(e[n], t[n]))
            return !1;
    return !0
}
function Ei(e, t, n, r, l, o) {
    if (zt = o,
        U = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Lr.current = e === null || e.memoizedState === null ? ld : od,
        e = n(r, l),
        Rn) {
        o = 0;
        do {
            if (Rn = !1,
                Xn = 0,
                25 <= o)
                throw Error(y(301));
            o += 1,
                Z = G = null,
                t.updateQueue = null,
                Lr.current = id,
                e = n(r, l)
        } while (Rn)
    }
    if (Lr.current = br,
        t = G !== null && G.next !== null,
        zt = 0,
        Z = G = U = null,
        qr = !1,
        t)
        throw Error(y(300));
    return e
}
function Si() {
    var e = Xn !== 0;
    return Xn = 0,
        e
}
function Ie() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? U.memoizedState = Z = e : Z = Z.next = e,
        Z
}
function Pe() {
    if (G === null) {
        var e = U.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = G.next;
    var t = Z === null ? U.memoizedState : Z.next;
    if (t !== null)
        Z = t,
            G = e;
    else {
        if (e === null)
            throw Error(y(310));
        G = e,
            e = {
                memoizedState: G.memoizedState,
                baseState: G.baseState,
                baseQueue: G.baseQueue,
                queue: G.queue,
                next: null
            },
            Z === null ? U.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function Zn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function $l(e) {
    var t = Pe()
        , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = G
        , l = r.baseQueue
        , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
                o.next = i
        }
        r.baseQueue = l = o,
            n.pending = null
    }
    if (l !== null) {
        o = l.next,
            r = r.baseState;
        var a = i = null
            , u = null
            , f = o;
        do {
            var v = f.lane;
            if ((zt & v) === v)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                }),
                    r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var h = {
                    lane: v,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                u === null ? (a = u = h,
                    i = r) : u = u.next = h,
                    U.lanes |= v,
                    Lt |= v
            }
            f = f.next
        } while (f !== null && f !== o);
        u === null ? i = r : u.next = a,
            Oe(r, t.memoizedState) || (ce = !0),
            t.memoizedState = r,
            t.baseState = i,
            t.baseQueue = u,
            n.lastRenderedState = r
    }
    if (e = n.interleaved,
        e !== null) {
        l = e;
        do
            o = l.lane,
                U.lanes |= o,
                Lt |= o,
                l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ql(e) {
    var t = Pe()
        , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
        , l = n.pending
        , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
                i = i.next;
        while (i !== l);
        Oe(o, t.memoizedState) || (ce = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
    }
    return [o, r]
}
function ds() { }
function ps(e, t) {
    var n = U
        , r = Pe()
        , l = t()
        , o = !Oe(r.memoizedState, l);
    if (o && (r.memoizedState = l,
        ce = !0),
        r = r.queue,
        Ni(vs.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
            Jn(9, hs.bind(null, n, r, l, t), void 0, null),
            J === null)
            throw Error(y(349));
        zt & 30 || ms(n, t, l)
    }
    return l
}
function ms(e, t, n) {
    e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = U.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            U.updateQueue = t,
            t.stores = [e]) : (n = t.stores,
                n === null ? t.stores = [e] : n.push(e))
}
function hs(e, t, n, r) {
    t.value = n,
        t.getSnapshot = r,
        gs(t) && ys(e)
}
function vs(e, t, n) {
    return n(function () {
        gs(t) && ys(e)
    })
}
function gs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Oe(e, n)
    } catch {
        return !0
    }
}
function ys(e) {
    var t = Ye(e, 1);
    t !== null && De(t, e, 1, -1)
}
function _a(e) {
    var t = Ie();
    return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zn,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = rd.bind(null, U, e),
        [t.memoizedState, e]
}
function Jn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
        t = U.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
            U.updateQueue = t,
            t.lastEffect = e.next = e) : (n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e)),
        e
}
function ws() {
    return Pe().memoizedState
}
function Tr(e, t, n, r) {
    var l = Ie();
    U.flags |= e,
        l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r)
}
function dl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var i = G.memoizedState;
        if (o = i.destroy,
            r !== null && ki(r, i.deps)) {
            l.memoizedState = Jn(t, n, o, r);
            return
        }
    }
    U.flags |= e,
        l.memoizedState = Jn(1 | t, n, o, r)
}
function Ca(e, t) {
    return Tr(8390656, 8, e, t)
}
function Ni(e, t) {
    return dl(2048, 8, e, t)
}
function xs(e, t) {
    return dl(4, 2, e, t)
}
function ks(e, t) {
    return dl(4, 4, e, t)
}
function Es(e, t) {
    if (typeof t == "function")
        return e = e(),
            t(e),
            function () {
                t(null)
            }
            ;
    if (t != null)
        return e = e(),
            t.current = e,
            function () {
                t.current = null
            }
}
function Ss(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
        dl(4, 4, Es.bind(null, t, e), n)
}
function _i() { }
function Ns(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
}
function _s(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ki(t, r[1]) ? r[0] : (e = e(),
        n.memoizedState = [e, t],
        e)
}
function Cs(e, t, n) {
    return zt & 21 ? (Oe(n, t) || (n = Mu(),
        U.lanes |= n,
        Lt |= n,
        e.baseState = !0),
        t) : (e.baseState && (e.baseState = !1,
            ce = !0),
            e.memoizedState = n)
}
function td(e, t) {
    var n = j;
    j = n !== 0 && 4 > n ? n : 4,
        e(!0);
    var r = Hl.transition;
    Hl.transition = {};
    try {
        e(!1),
            t()
    } finally {
        j = n,
            Hl.transition = r
    }
}
function Ps() {
    return Pe().memoizedState
}
function nd(e, t, n) {
    var r = ct(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
        zs(e))
        Ls(t, n);
    else if (n = ss(e, t, n, r),
        n !== null) {
        var l = ie();
        De(n, e, r, l),
            Ts(n, t, r)
    }
}
function rd(e, t, n) {
    var r = ct(e)
        , l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (zs(e))
        Ls(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
            o !== null))
            try {
                var i = t.lastRenderedState
                    , a = o(i, n);
                if (l.hasEagerState = !0,
                    l.eagerState = a,
                    Oe(a, i)) {
                    var u = t.interleaved;
                    u === null ? (l.next = l,
                        vi(t)) : (l.next = u.next,
                            u.next = l),
                        t.interleaved = l;
                    return
                }
            } catch { } finally { }
        n = ss(e, t, l, r),
            n !== null && (l = ie(),
                De(n, e, r, l),
                Ts(n, t, r))
    }
}
function zs(e) {
    var t = e.alternate;
    return e === U || t !== null && t === U
}
function Ls(e, t) {
    Rn = qr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
}
function Ts(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            ni(e, n)
    }
}
var br = {
    readContext: Ce,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1
}
    , ld = {
        readContext: Ce,
        useCallback: function (e, t) {
            return Ie().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Ce,
        useEffect: Ca,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null,
                Tr(4194308, 4, Es.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Tr(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Tr(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Ie();
            return t = t === void 0 ? null : t,
                e = e(),
                n.memoizedState = [e, t],
                e
        },
        useReducer: function (e, t, n) {
            var r = Ie();
            return t = n !== void 0 ? n(t) : t,
                r.memoizedState = r.baseState = t,
                e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                },
                r.queue = e,
                e = e.dispatch = nd.bind(null, U, e),
                [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = Ie();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: _a,
        useDebugValue: _i,
        useDeferredValue: function (e) {
            return Ie().memoizedState = e
        },
        useTransition: function () {
            var e = _a(!1)
                , t = e[0];
            return e = td.bind(null, e[1]),
                Ie().memoizedState = e,
                [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = U
                , l = Ie();
            if (A) {
                if (n === void 0)
                    throw Error(y(407));
                n = n()
            } else {
                if (n = t(),
                    J === null)
                    throw Error(y(349));
                zt & 30 || ms(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o,
                Ca(vs.bind(null, r, o, e), [e]),
                r.flags |= 2048,
                Jn(9, hs.bind(null, r, o, n, t), void 0, null),
                n
        },
        useId: function () {
            var e = Ie()
                , t = J.identifierPrefix;
            if (A) {
                var n = $e
                    , r = He;
                n = (r & ~(1 << 32 - je(r) - 1)).toString(32) + n,
                    t = ":" + t + "R" + n,
                    n = Xn++,
                    0 < n && (t += "H" + n.toString(32)),
                    t += ":"
            } else
                n = ed++,
                    t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
    , od = {
        readContext: Ce,
        useCallback: Ns,
        useContext: Ce,
        useEffect: Ni,
        useImperativeHandle: Ss,
        useInsertionEffect: xs,
        useLayoutEffect: ks,
        useMemo: _s,
        useReducer: $l,
        useRef: ws,
        useState: function () {
            return $l(Zn)
        },
        useDebugValue: _i,
        useDeferredValue: function (e) {
            var t = Pe();
            return Cs(t, G.memoizedState, e)
        },
        useTransition: function () {
            var e = $l(Zn)[0]
                , t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: ds,
        useSyncExternalStore: ps,
        useId: Ps,
        unstable_isNewReconciler: !1
    }
    , id = {
        readContext: Ce,
        useCallback: Ns,
        useContext: Ce,
        useEffect: Ni,
        useImperativeHandle: Ss,
        useInsertionEffect: xs,
        useLayoutEffect: ks,
        useMemo: _s,
        useReducer: Ql,
        useRef: ws,
        useState: function () {
            return Ql(Zn)
        },
        useDebugValue: _i,
        useDeferredValue: function (e) {
            var t = Pe();
            return G === null ? t.memoizedState = e : Cs(t, G.memoizedState, e)
        },
        useTransition: function () {
            var e = Ql(Zn)[0]
                , t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: ds,
        useSyncExternalStore: ps,
        useId: Ps,
        unstable_isNewReconciler: !1
    };
function Te(e, t) {
    if (e && e.defaultProps) {
        t = W({}, t),
            e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function zo(e, t, n, r) {
    t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : W({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var pl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Rt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ie()
            , l = ct(e)
            , o = Qe(r, l);
        o.payload = t,
            n != null && (o.callback = n),
            t = ut(e, o, l),
            t !== null && (De(t, e, l, r),
                zr(t, e, l))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ie()
            , l = ct(e)
            , o = Qe(r, l);
        o.tag = 1,
            o.payload = t,
            n != null && (o.callback = n),
            t = ut(e, o, l),
            t !== null && (De(t, e, l, r),
                zr(t, e, l))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ie()
            , r = ct(e)
            , l = Qe(n, r);
        l.tag = 2,
            t != null && (l.callback = t),
            t = ut(e, l, r),
            t !== null && (De(t, e, r, n),
                zr(t, e, r))
    }
};
function Pa(e, t, n, r, l, o, i) {
    return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Hn(n, r) || !Hn(l, o) : !0
}
function Ms(e, t, n) {
    var r = !1
        , l = pt
        , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ce(o) : (l = pe(t) ? Ct : le.current,
        r = t.contextTypes,
        o = (r = r != null) ? tn(e, l) : pt),
        t = new t(n, o),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = pl,
        e.stateNode = t,
        t._reactInternals = e,
        r && (e = e.stateNode,
            e.__reactInternalMemoizedUnmaskedChildContext = l,
            e.__reactInternalMemoizedMaskedChildContext = o),
        t
}
function za(e, t, n, r) {
    e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && pl.enqueueReplaceState(t, t.state, null)
}
function Lo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
        l.state = e.memoizedState,
        l.refs = {},
        gi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Ce(o) : (o = pe(t) ? Ct : le.current,
        l.context = tn(e, o)),
        l.state = e.memoizedState,
        o = t.getDerivedStateFromProps,
        typeof o == "function" && (zo(e, t, o, n),
            l.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
            typeof l.componentWillMount == "function" && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
            t !== l.state && pl.enqueueReplaceState(l, l.state, null),
            Zr(e, n, l, r),
            l.state = e.memoizedState),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function on(e, t) {
    try {
        var n = ""
            , r = t;
        do
            n += jc(r),
                r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function To(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var ad = typeof WeakMap == "function" ? WeakMap : Map;
function Rs(e, t, n) {
    n = Qe(-1, n),
        n.tag = 3,
        n.payload = {
            element: null
        };
    var r = t.value;
    return n.callback = function () {
        tl || (tl = !0,
            Uo = r),
            To(e, t)
    }
        ,
        n
}
function js(e, t, n) {
    n = Qe(-1, n),
        n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function () {
            return r(l)
        }
            ,
            n.callback = function () {
                To(e, t)
            }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        To(e, t),
            typeof r != "function" && (st === null ? st = new Set([this]) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
        n
}
function La(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ad;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
            l === void 0 && (l = new Set,
                r.set(t, l));
    l.has(n) || (l.add(n),
        e = kd.bind(null, e, t, n),
        t.then(e, e))
}
function Ta(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ma(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
        e.lanes = l,
        e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
            n.flags |= 131072,
            n.flags &= -52805,
            n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1),
                t.tag = 2,
                ut(n, t, 1))),
            n.lanes |= 1),
            e)
}
var ud = Ze.ReactCurrentOwner
    , ce = !1;
function oe(e, t, n, r) {
    t.child = e === null ? us(t, null, n, r) : rn(t, e.child, n, r)
}
function Ra(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return qt(t, l),
        r = Ei(e, t, n, r, o, l),
        n = Si(),
        e !== null && !ce ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~l,
            Xe(e, t, l)) : (A && n && ci(t),
                t.flags |= 1,
                oe(e, t, r, l),
                t.child)
}
function ja(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ji(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
            t.type = o,
            Ds(e, t, o, r, l)) : (e = Dr(n.type, null, r, t, t.mode, l),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
    }
    if (o = e.child,
        !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
            n = n !== null ? n : Hn,
            n(i, r) && e.ref === t.ref)
            return Xe(e, t, l)
    }
    return t.flags |= 1,
        e = ft(o, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
}
function Ds(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Hn(o, r) && e.ref === t.ref)
            if (ce = !1,
                t.pendingProps = r = o,
                (e.lanes & l) !== 0)
                e.flags & 131072 && (ce = !0);
            else
                return t.lanes = e.lanes,
                    Xe(e, t, l)
    }
    return Mo(e, t, n, r, l)
}
function Os(e, t, n) {
    var r = t.pendingProps
        , l = r.children
        , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                D(Gt, he),
                he |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    D(Gt, he),
                    he |= e,
                    null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
                r = o !== null ? o.baseLanes : n,
                D(Gt, he),
                he |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
            t.memoizedState = null) : r = n,
            D(Gt, he),
            he |= r;
    return oe(e, t, l, n),
        t.child
}
function Fs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
        t.flags |= 2097152)
}
function Mo(e, t, n, r, l) {
    var o = pe(n) ? Ct : le.current;
    return o = tn(t, o),
        qt(t, l),
        n = Ei(e, t, n, r, o, l),
        r = Si(),
        e !== null && !ce ? (t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~l,
            Xe(e, t, l)) : (A && r && ci(t),
                t.flags |= 1,
                oe(e, t, n, l),
                t.child)
}
function Da(e, t, n, r, l) {
    if (pe(n)) {
        var o = !0;
        Qr(t)
    } else
        o = !1;
    if (qt(t, l),
        t.stateNode === null)
        Mr(e, t),
            Ms(t, n, r),
            Lo(t, n, r, l),
            r = !0;
    else if (e === null) {
        var i = t.stateNode
            , a = t.memoizedProps;
        i.props = a;
        var u = i.context
            , f = n.contextType;
        typeof f == "object" && f !== null ? f = Ce(f) : (f = pe(n) ? Ct : le.current,
            f = tn(t, f));
        var v = n.getDerivedStateFromProps
            , h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || u !== f) && za(t, i, r, f),
            be = !1;
        var m = t.memoizedState;
        i.state = m,
            Zr(t, r, i, l),
            u = t.memoizedState,
            a !== r || m !== u || de.current || be ? (typeof v == "function" && (zo(t, n, v, r),
                u = t.memoizedState),
                (a = be || Pa(t, n, a, r, m, u, f)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                    typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        t.memoizedProps = r,
                        t.memoizedState = u),
                i.props = r,
                i.state = u,
                i.context = f,
                r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                    r = !1)
    } else {
        i = t.stateNode,
            cs(e, t),
            a = t.memoizedProps,
            f = t.type === t.elementType ? a : Te(t.type, a),
            i.props = f,
            h = t.pendingProps,
            m = i.context,
            u = n.contextType,
            typeof u == "object" && u !== null ? u = Ce(u) : (u = pe(n) ? Ct : le.current,
                u = tn(t, u));
        var w = n.getDerivedStateFromProps;
        (v = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== h || m !== u) && za(t, i, r, u),
            be = !1,
            m = t.memoizedState,
            i.state = m,
            Zr(t, r, i, l);
        var x = t.memoizedState;
        a !== h || m !== x || de.current || be ? (typeof w == "function" && (zo(t, n, w, r),
            x = t.memoizedState),
            (f = be || Pa(t, n, f, r, m, x, u) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, u),
                typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, u)),
                typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
                    t.memoizedProps = r,
                    t.memoizedState = x),
            i.props = r,
            i.state = x,
            i.context = u,
            r = f) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
                r = !1)
    }
    return Ro(e, t, n, r, o, l)
}
function Ro(e, t, n, r, l, o) {
    Fs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && wa(t, n, !1),
            Xe(e, t, o);
    r = t.stateNode,
        ud.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
        e !== null && i ? (t.child = rn(t, e.child, null, o),
            t.child = rn(t, null, a, o)) : oe(e, t, a, o),
        t.memoizedState = r.state,
        l && wa(t, n, !0),
        t.child
}
function Is(e) {
    var t = e.stateNode;
    t.pendingContext ? ya(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(e, t.context, !1),
        yi(e, t.containerInfo)
}
function Oa(e, t, n, r, l) {
    return nn(),
        di(l),
        t.flags |= 256,
        oe(e, t, n, r),
        t.child
}
var jo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Do(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function As(e, t, n) {
    var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        a ? (o = !0,
            t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
        D(B, l & 1),
        e === null)
        return Co(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
                e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
                    null) : (i = r.children,
                        e = r.fallback,
                        o ? (r = t.mode,
                            o = t.child,
                            i = {
                                mode: "hidden",
                                children: i
                            },
                            !(r & 1) && o !== null ? (o.childLanes = 0,
                                o.pendingProps = i) : o = vl(i, r, 0, null),
                            e = _t(e, r, n, null),
                            o.return = t,
                            e.return = t,
                            o.sibling = e,
                            t.child = o,
                            t.child.memoizedState = Do(n),
                            t.memoizedState = jo,
                            e) : Ci(t, i));
    if (l = e.memoizedState,
        l !== null && (a = l.dehydrated,
            a !== null))
        return sd(e, t, i, r, a, l, n);
    if (o) {
        o = r.fallback,
            i = t.mode,
            l = e.child,
            a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
            r.childLanes = 0,
            r.pendingProps = u,
            t.deletions = null) : (r = ft(l, u),
                r.subtreeFlags = l.subtreeFlags & 14680064),
            a !== null ? o = ft(a, o) : (o = _t(o, i, n, null),
                o.flags |= 2),
            o.return = t,
            r.return = t,
            r.sibling = o,
            t.child = r,
            r = o,
            o = t.child,
            i = e.child.memoizedState,
            i = i === null ? Do(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            },
            o.memoizedState = i,
            o.childLanes = e.childLanes & ~n,
            t.memoizedState = jo,
            r
    }
    return o = e.child,
        e = o.sibling,
        r = ft(o, {
            mode: "visible",
            children: r.children
        }),
        !(t.mode & 1) && (r.lanes = n),
        r.return = t,
        r.sibling = null,
        e !== null && (n = t.deletions,
            n === null ? (t.deletions = [e],
                t.flags |= 16) : n.push(e)),
        t.child = r,
        t.memoizedState = null,
        r
}
function Ci(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
        t.return = e,
        e.child = t
}
function wr(e, t, n, r) {
    return r !== null && di(r),
        rn(t, e.child, null, n),
        e = Ci(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
}
function sd(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
            r = Kl(Error(y(422))),
            wr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
                t.flags |= 128,
                null) : (o = r.fallback,
                    l = t.mode,
                    r = vl({
                        mode: "visible",
                        children: r.children
                    }, l, 0, null),
                    o = _t(o, l, i, null),
                    o.flags |= 2,
                    r.return = t,
                    o.return = t,
                    r.sibling = o,
                    t.child = r,
                    t.mode & 1 && rn(t, e.child, null, i),
                    t.child.memoizedState = Do(i),
                    t.memoizedState = jo,
                    o);
    if (!(t.mode & 1))
        return wr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
            r)
            var a = r.dgst;
        return r = a,
            o = Error(y(419)),
            r = Kl(o, r, void 0),
            wr(e, t, i, r)
    }
    if (a = (i & e.childLanes) !== 0,
        ce || a) {
        if (r = J,
            r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
                l !== 0 && l !== o.retryLane && (o.retryLane = l,
                    Ye(e, l),
                    De(r, e, l, -1))
        }
        return Ri(),
            r = Kl(Error(y(421))),
            wr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = Ed.bind(null, e),
        l._reactRetry = t,
        null) : (e = o.treeContext,
            ve = at(l.nextSibling),
            ge = t,
            A = !0,
            Re = null,
            e !== null && (Ee[Se++] = He,
                Ee[Se++] = $e,
                Ee[Se++] = Pt,
                He = e.id,
                $e = e.overflow,
                Pt = t),
            t = Ci(t, r.children),
            t.flags |= 4096,
            t)
}
function Fa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
        Po(e.return, t, n)
}
function Gl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = l)
}
function Bs(e, t, n) {
    var r = t.pendingProps
        , l = r.revealOrder
        , o = r.tail;
    if (oe(e, t, r.children, n),
        r = B.current,
        r & 2)
        r = r & 1 | 2,
            t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && Fa(e, n, t);
                else if (e.tag === 19)
                    Fa(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        r &= 1
    }
    if (D(B, r),
        !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
            case "forwards":
                for (n = t.child,
                    l = null; n !== null;)
                    e = n.alternate,
                        e !== null && Jr(e) === null && (l = n),
                        n = n.sibling;
                n = l,
                    n === null ? (l = t.child,
                        t.child = null) : (l = n.sibling,
                            n.sibling = null),
                    Gl(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null,
                    l = t.child,
                    t.child = null; l !== null;) {
                    if (e = l.alternate,
                        e !== null && Jr(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling,
                        l.sibling = n,
                        n = l,
                        l = e
                }
                Gl(t, !0, n, null, o);
                break;
            case "together":
                Gl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
    return t.child
}
function Mr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
}
function Xe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
        Lt |= t.lanes,
        !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child,
            n = ft(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null;)
            e = e.sibling,
                n = n.sibling = ft(e, e.pendingProps),
                n.return = t;
        n.sibling = null
    }
    return t.child
}
function cd(e, t, n) {
    switch (t.tag) {
        case 3:
            Is(t),
                nn();
            break;
        case 5:
            fs(t);
            break;
        case 1:
            pe(t.type) && Qr(t);
            break;
        case 4:
            yi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context
                , l = t.memoizedProps.value;
            D(Yr, r._currentValue),
                r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState,
                r !== null)
                return r.dehydrated !== null ? (D(B, B.current & 1),
                    t.flags |= 128,
                    null) : n & t.child.childLanes ? As(e, t, n) : (D(B, B.current & 1),
                        e = Xe(e, t, n),
                        e !== null ? e.sibling : null);
            D(B, B.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0,
                e.flags & 128) {
                if (r)
                    return Bs(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState,
                l !== null && (l.rendering = null,
                    l.tail = null,
                    l.lastEffect = null),
                D(B, B.current),
                r)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
                Os(e, t, n)
    }
    return Xe(e, t, n)
}
var Us, Oo, Ws, Vs;
Us = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
                n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
            n = n.sibling
    }
}
    ;
Oo = function () { }
    ;
Ws = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
            St(Ue.current);
        var o = null;
        switch (n) {
            case "input":
                l = no(e, l),
                    r = no(e, r),
                    o = [];
                break;
            case "select":
                l = W({}, l, {
                    value: void 0
                }),
                    r = W({}, r, {
                        value: void 0
                    }),
                    o = [];
                break;
            case "textarea":
                l = oo(e, l),
                    r = oo(e, r),
                    o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr)
        }
        ao(n, r);
        var i;
        n = null;
        for (f in l)
            if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
                if (f === "style") {
                    var a = l[f];
                    for (i in a)
                        a.hasOwnProperty(i) && (n || (n = {}),
                            n[i] = "")
                } else
                    f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Fn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
        for (f in r) {
            var u = r[f];
            if (a = l != null ? l[f] : void 0,
                r.hasOwnProperty(f) && u !== a && (u != null || a != null))
                if (f === "style")
                    if (a) {
                        for (i in a)
                            !a.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}),
                                n[i] = "");
                        for (i in u)
                            u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}),
                                n[i] = u[i])
                    } else
                        n || (o || (o = []),
                            o.push(f, n)),
                            n = u;
                else
                    f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                        a = a ? a.__html : void 0,
                        u != null && a !== u && (o = o || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Fn.hasOwnProperty(f) ? (u != null && f === "onScroll" && O("scroll", e),
                            o || a === u || (o = [])) : (o = o || []).push(f, u))
        }
        n && (o = o || []).push("style", n);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4)
    }
}
    ;
Vs = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
    ;
function xn(e, t) {
    if (!A)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;)
                    t.alternate !== null && (n = t),
                        t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;)
                    n.alternate !== null && (r = n),
                        n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
        , n = 0
        , r = 0;
    if (t)
        for (var l = e.child; l !== null;)
            n |= l.lanes | l.childLanes,
                r |= l.subtreeFlags & 14680064,
                r |= l.flags & 14680064,
                l.return = e,
                l = l.sibling;
    else
        for (l = e.child; l !== null;)
            n |= l.lanes | l.childLanes,
                r |= l.subtreeFlags,
                r |= l.flags,
                l.return = e,
                l = l.sibling;
    return e.subtreeFlags |= r,
        e.childLanes = n,
        t
}
function fd(e, t, n) {
    var r = t.pendingProps;
    switch (fi(t),
    t.tag) {
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
            return ne(t),
                null;
        case 1:
            return pe(t.type) && $r(),
                ne(t),
                null;
        case 3:
            return r = t.stateNode,
                ln(),
                F(de),
                F(le),
                xi(),
                r.pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                (e === null || e.child === null) && (gr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                    Re !== null && (Ho(Re),
                        Re = null))),
                Oo(e, t),
                ne(t),
                null;
        case 5:
            wi(t);
            var l = St(Yn.current);
            if (n = t.type,
                e !== null && t.stateNode != null)
                Ws(e, t, n, r, l),
                    e.ref !== t.ref && (t.flags |= 512,
                        t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(y(166));
                    return ne(t),
                        null
                }
                if (e = St(Ue.current),
                    gr(t)) {
                    r = t.stateNode,
                        n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ae] = t,
                    r[Kn] = o,
                    e = (t.mode & 1) !== 0,
                    n) {
                        case "dialog":
                            O("cancel", r),
                                O("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            O("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Cn.length; l++)
                                O(Cn[l], r);
                            break;
                        case "source":
                            O("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            O("error", r),
                                O("load", r);
                            break;
                        case "details":
                            O("toggle", r);
                            break;
                        case "input":
                            Qi(r, o),
                                O("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            },
                                O("invalid", r);
                            break;
                        case "textarea":
                            Gi(r, o),
                                O("invalid", r)
                    }
                    ao(n, o),
                        l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var a = o[i];
                            i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && vr(r.textContent, a, e),
                                l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && vr(r.textContent, a, e),
                                    l = ["children", "" + a]) : Fn.hasOwnProperty(i) && a != null && i === "onScroll" && O("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            ur(r),
                                Ki(r, o, !0);
                            break;
                        case "textarea":
                            ur(r),
                                Yi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Hr)
                    }
                    r = l,
                        t.updateQueue = r,
                        r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument,
                        e === "http://www.w3.org/1999/xhtml" && (e = vu(n)),
                        e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                            e.innerHTML = "<script><\script>",
                            e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                                is: r.is
                            }) : (e = i.createElement(n),
                                n === "select" && (i = e,
                                    r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                        e[Ae] = t,
                        e[Kn] = r,
                        Us(e, t, !1, !1),
                        t.stateNode = e;
                    e: {
                        switch (i = uo(n, r),
                        n) {
                            case "dialog":
                                O("cancel", e),
                                    O("close", e),
                                    l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                O("load", e),
                                    l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Cn.length; l++)
                                    O(Cn[l], e);
                                l = r;
                                break;
                            case "source":
                                O("error", e),
                                    l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                O("error", e),
                                    O("load", e),
                                    l = r;
                                break;
                            case "details":
                                O("toggle", e),
                                    l = r;
                                break;
                            case "input":
                                Qi(e, r),
                                    l = no(e, r),
                                    O("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                    l = W({}, r, {
                                        value: void 0
                                    }),
                                    O("invalid", e);
                                break;
                            case "textarea":
                                Gi(e, r),
                                    l = oo(e, r),
                                    O("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ao(n, l),
                            a = l;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style" ? wu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                                    u != null && gu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && In(e, u) : typeof u == "number" && In(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Fn.hasOwnProperty(o) ? u != null && o === "onScroll" && O("scroll", e) : u != null && Zo(e, o, u, i))
                            }
                        switch (n) {
                            case "input":
                                ur(e),
                                    Ki(e, r, !1);
                                break;
                            case "textarea":
                                ur(e),
                                    Yi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + dt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                    o = r.value,
                                    o != null ? Yt(e, !!r.multiple, o, !1) : r.defaultValue != null && Yt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Hr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                    t.flags |= 2097152)
            }
            return ne(t),
                null;
        case 6:
            if (e && t.stateNode != null)
                Vs(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(y(166));
                if (n = St(Yn.current),
                    St(Ue.current),
                    gr(t)) {
                    if (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Ae] = t,
                        (o = r.nodeValue !== n) && (e = ge,
                            e !== null))
                        switch (e.tag) {
                            case 3:
                                vr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && vr(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                        r[Ae] = t,
                        t.stateNode = r
            }
            return ne(t),
                null;
        case 13:
            if (F(B),
                r = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (A && ve !== null && t.mode & 1 && !(t.flags & 128))
                    is(),
                        nn(),
                        t.flags |= 98560,
                        o = !1;
                else if (o = gr(t),
                    r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o)
                            throw Error(y(318));
                        if (o = t.memoizedState,
                            o = o !== null ? o.dehydrated : null,
                            !o)
                            throw Error(y(317));
                        o[Ae] = t
                    } else
                        nn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            t.flags |= 4;
                    ne(t),
                        o = !1
                } else
                    Re !== null && (Ho(Re),
                        Re = null),
                        o = !0;
                if (!o)
                    return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n,
                t) : (r = r !== null,
                    r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
                        t.mode & 1 && (e === null || B.current & 1 ? Y === 0 && (Y = 3) : Ri())),
                    t.updateQueue !== null && (t.flags |= 4),
                    ne(t),
                    null);
        case 4:
            return ln(),
                Oo(e, t),
                e === null && $n(t.stateNode.containerInfo),
                ne(t),
                null;
        case 10:
            return hi(t.type._context),
                ne(t),
                null;
        case 17:
            return pe(t.type) && $r(),
                ne(t),
                null;
        case 19:
            if (F(B),
                o = t.memoizedState,
                o === null)
                return ne(t),
                    null;
            if (r = (t.flags & 128) !== 0,
                i = o.rendering,
                i === null)
                if (r)
                    xn(o, !1);
                else {
                    if (Y !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Jr(e),
                                i !== null) {
                                for (t.flags |= 128,
                                    xn(o, !1),
                                    r = i.updateQueue,
                                    r !== null && (t.updateQueue = r,
                                        t.flags |= 4),
                                    t.subtreeFlags = 0,
                                    r = n,
                                    n = t.child; n !== null;)
                                    o = n,
                                        e = r,
                                        o.flags &= 14680066,
                                        i = o.alternate,
                                        i === null ? (o.childLanes = 0,
                                            o.lanes = e,
                                            o.child = null,
                                            o.subtreeFlags = 0,
                                            o.memoizedProps = null,
                                            o.memoizedState = null,
                                            o.updateQueue = null,
                                            o.dependencies = null,
                                            o.stateNode = null) : (o.childLanes = i.childLanes,
                                                o.lanes = i.lanes,
                                                o.child = i.child,
                                                o.subtreeFlags = 0,
                                                o.deletions = null,
                                                o.memoizedProps = i.memoizedProps,
                                                o.memoizedState = i.memoizedState,
                                                o.updateQueue = i.updateQueue,
                                                o.type = i.type,
                                                e = i.dependencies,
                                                o.dependencies = e === null ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }),
                                        n = n.sibling;
                                return D(B, B.current & 1 | 2),
                                    t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Q() > an && (t.flags |= 128,
                        r = !0,
                        xn(o, !1),
                        t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Jr(i),
                        e !== null) {
                        if (t.flags |= 128,
                            r = !0,
                            n = e.updateQueue,
                            n !== null && (t.updateQueue = n,
                                t.flags |= 4),
                            xn(o, !0),
                            o.tail === null && o.tailMode === "hidden" && !i.alternate && !A)
                            return ne(t),
                                null
                    } else
                        2 * Q() - o.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128,
                            r = !0,
                            xn(o, !1),
                            t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child,
                    t.child = i) : (n = o.last,
                        n !== null ? n.sibling = i : t.child = i,
                        o.last = i)
            }
            return o.tail !== null ? (t = o.tail,
                o.rendering = t,
                o.tail = t.sibling,
                o.renderingStartTime = Q(),
                t.sibling = null,
                n = B.current,
                D(B, r ? n & 1 | 2 : n & 1),
                t) : (ne(t),
                    null);
        case 22:
        case 23:
            return Mi(),
                r = t.memoizedState !== null,
                e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
                r && t.mode & 1 ? he & 1073741824 && (ne(t),
                    t.subtreeFlags & 6 && (t.flags |= 8192)) : ne(t),
                null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, t.tag))
}
function dd(e, t) {
    switch (fi(t),
    t.tag) {
        case 1:
            return pe(t.type) && $r(),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 3:
            return ln(),
                F(de),
                F(le),
                xi(),
                e = t.flags,
                e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 5:
            return wi(t),
                null;
        case 13:
            if (F(B),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(y(340));
                nn()
            }
            return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                    t) : null;
        case 19:
            return F(B),
                null;
        case 4:
            return ln(),
                null;
        case 10:
            return hi(t.type._context),
                null;
        case 22:
        case 23:
            return Mi(),
                null;
        case 24:
            return null;
        default:
            return null
    }
}
var xr = !1
    , re = !1
    , pd = typeof WeakSet == "function" ? WeakSet : Set
    , E = null;
function Kt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                V(e, t, r)
            }
        else
            n.current = null
}
function Fo(e, t, n) {
    try {
        n()
    } catch (r) {
        V(e, t, r)
    }
}
var Ia = !1;
function md(e, t) {
    if (wo = Ur,
        e = Gu(),
        si(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                        , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                            o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                        , a = -1
                        , u = -1
                        , f = 0
                        , v = 0
                        , h = e
                        , m = null;
                    t: for (; ;) {
                        for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (a = i + l),
                            h !== o || r !== 0 && h.nodeType !== 3 || (u = i + r),
                            h.nodeType === 3 && (i += h.nodeValue.length),
                            (w = h.firstChild) !== null;)
                            m = h,
                                h = w;
                        for (; ;) {
                            if (h === e)
                                break t;
                            if (m === n && ++f === l && (a = i),
                                m === o && ++v === r && (u = i),
                                (w = h.nextSibling) !== null)
                                break;
                            h = m,
                                m = h.parentNode
                        }
                        h = w
                    }
                    n = a === -1 || u === -1 ? null : {
                        start: a,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (xo = {
        focusedElem: e,
        selectionRange: n
    },
        Ur = !1,
        E = t; E !== null;)
        if (t = E,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
                E = e;
        else
            for (; E !== null;) {
                t = E;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (x !== null) {
                                    var k = x.memoizedProps
                                        , I = x.memoizedState
                                        , d = t.stateNode
                                        , c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), I);
                                    d.__reactInternalSnapshotBeforeUpdate = c
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(y(163))
                        }
                } catch (g) {
                    V(t, t.return, g)
                }
                if (e = t.sibling,
                    e !== null) {
                    e.return = t.return,
                        E = e;
                    break
                }
                E = t.return
            }
    return x = Ia,
        Ia = !1,
        x
}
function jn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
        r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                    o !== void 0 && Fo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function ml(e, t) {
    if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Io(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Hs(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
        Hs(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
            t !== null && (delete t[Ae],
                delete t[Kn],
                delete t[So],
                delete t[Zf],
                delete t[Jf])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
}
function $s(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Aa(e) {
    e: for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || $s(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
                e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
                t.insertBefore(e, n)) : (t = n,
                    t.appendChild(e)),
                n = n._reactRootContainer,
                n != null || t.onclick !== null || (t.onclick = Hr));
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Ao(e, t, n),
            e = e.sibling; e !== null;)
            Ao(e, t, n),
                e = e.sibling
}
function Bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
        e !== null))
        for (Bo(e, t, n),
            e = e.sibling; e !== null;)
            Bo(e, t, n),
                e = e.sibling
}
var q = null
    , Me = !1;
function Je(e, t, n) {
    for (n = n.child; n !== null;)
        Qs(e, t, n),
            n = n.sibling
}
function Qs(e, t, n) {
    if (Be && typeof Be.onCommitFiberUnmount == "function")
        try {
            Be.onCommitFiberUnmount(il, n)
        } catch { }
    switch (n.tag) {
        case 5:
            re || Kt(n, t);
        case 6:
            var r = q
                , l = Me;
            q = null,
                Je(e, t, n),
                q = r,
                Me = l,
                q !== null && (Me ? (e = q,
                    n = n.stateNode,
                    e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
            break;
        case 18:
            q !== null && (Me ? (e = q,
                n = n.stateNode,
                e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n),
                Wn(e)) : Ul(q, n.stateNode));
            break;
        case 4:
            r = q,
                l = Me,
                q = n.stateNode.containerInfo,
                Me = !0,
                Je(e, t, n),
                q = r,
                Me = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!re && (r = n.updateQueue,
                r !== null && (r = r.lastEffect,
                    r !== null))) {
                l = r = r.next;
                do {
                    var o = l
                        , i = o.destroy;
                    o = o.tag,
                        i !== void 0 && (o & 2 || o & 4) && Fo(n, t, i),
                        l = l.next
                } while (l !== r)
            }
            Je(e, t, n);
            break;
        case 1:
            if (!re && (Kt(n, t),
                r = n.stateNode,
                typeof r.componentWillUnmount == "function"))
                try {
                    r.props = n.memoizedProps,
                        r.state = n.memoizedState,
                        r.componentWillUnmount()
                } catch (a) {
                    V(n, t, a)
                }
            Je(e, t, n);
            break;
        case 21:
            Je(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (re = (r = re) || n.memoizedState !== null,
                Je(e, t, n),
                re = r) : Je(e, t, n);
            break;
        default:
            Je(e, t, n)
    }
}
function Ba(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new pd),
            t.forEach(function (r) {
                var l = Sd.bind(null, e, r);
                n.has(r) || (n.add(r),
                    r.then(l, l))
            })
    }
}
function Le(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                    , i = t
                    , a = i;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            q = a.stateNode,
                                Me = !1;
                            break e;
                        case 3:
                            q = a.stateNode.containerInfo,
                                Me = !0;
                            break e;
                        case 4:
                            q = a.stateNode.containerInfo,
                                Me = !0;
                            break e
                    }
                    a = a.return
                }
                if (q === null)
                    throw Error(y(160));
                Qs(o, i, l),
                    q = null,
                    Me = !1;
                var u = l.alternate;
                u !== null && (u.return = null),
                    l.return = null
            } catch (f) {
                V(l, t, f)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            Ks(t, e),
                t = t.sibling
}
function Ks(e, t) {
    var n = e.alternate
        , r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Le(t, e),
                Fe(e),
                r & 4) {
                try {
                    jn(3, e, e.return),
                        ml(3, e)
                } catch (k) {
                    V(e, e.return, k)
                }
                try {
                    jn(5, e, e.return)
                } catch (k) {
                    V(e, e.return, k)
                }
            }
            break;
        case 1:
            Le(t, e),
                Fe(e),
                r & 512 && n !== null && Kt(n, n.return);
            break;
        case 5:
            if (Le(t, e),
                Fe(e),
                r & 512 && n !== null && Kt(n, n.return),
                e.flags & 32) {
                var l = e.stateNode;
                try {
                    In(l, "")
                } catch (k) {
                    V(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode,
                l != null)) {
                var o = e.memoizedProps
                    , i = n !== null ? n.memoizedProps : o
                    , a = e.type
                    , u = e.updateQueue;
                if (e.updateQueue = null,
                    u !== null)
                    try {
                        a === "input" && o.type === "radio" && o.name != null && mu(l, o),
                            uo(a, i);
                        var f = uo(a, o);
                        for (i = 0; i < u.length; i += 2) {
                            var v = u[i]
                                , h = u[i + 1];
                            v === "style" ? wu(l, h) : v === "dangerouslySetInnerHTML" ? gu(l, h) : v === "children" ? In(l, h) : Zo(l, v, h, f)
                        }
                        switch (a) {
                            case "input":
                                ro(l, o);
                                break;
                            case "textarea":
                                hu(l, o);
                                break;
                            case "select":
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var w = o.value;
                                w != null ? Yt(l, !!o.multiple, w, !1) : m !== !!o.multiple && (o.defaultValue != null ? Yt(l, !!o.multiple, o.defaultValue, !0) : Yt(l, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        l[Kn] = o
                    } catch (k) {
                        V(e, e.return, k)
                    }
            }
            break;
        case 6:
            if (Le(t, e),
                Fe(e),
                r & 4) {
                if (e.stateNode === null)
                    throw Error(y(162));
                l = e.stateNode,
                    o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (k) {
                    V(e, e.return, k)
                }
            }
            break;
        case 3:
            if (Le(t, e),
                Fe(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Wn(t.containerInfo)
                } catch (k) {
                    V(e, e.return, k)
                }
            break;
        case 4:
            Le(t, e),
                Fe(e);
            break;
        case 13:
            Le(t, e),
                Fe(e),
                l = e.child,
                l.flags & 8192 && (o = l.memoizedState !== null,
                    l.stateNode.isHidden = o,
                    !o || l.alternate !== null && l.alternate.memoizedState !== null || (Li = Q())),
                r & 4 && Ba(e);
            break;
        case 22:
            if (v = n !== null && n.memoizedState !== null,
                e.mode & 1 ? (re = (f = re) || v,
                    Le(t, e),
                    re = f) : Le(t, e),
                Fe(e),
                r & 8192) {
                if (f = e.memoizedState !== null,
                    (e.stateNode.isHidden = f) && !v && e.mode & 1)
                    for (E = e,
                        v = e.child; v !== null;) {
                        for (h = E = v; E !== null;) {
                            switch (m = E,
                            w = m.child,
                            m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    jn(4, m, m.return);
                                    break;
                                case 1:
                                    Kt(m, m.return);
                                    var x = m.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = m,
                                            n = m.return;
                                        try {
                                            t = r,
                                                x.props = t.memoizedProps,
                                                x.state = t.memoizedState,
                                                x.componentWillUnmount()
                                        } catch (k) {
                                            V(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Wa(h);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = m,
                                E = w) : Wa(h)
                        }
                        v = v.sibling
                    }
                e: for (v = null,
                    h = e; ;) {
                    if (h.tag === 5) {
                        if (v === null) {
                            v = h;
                            try {
                                l = h.stateNode,
                                    f ? (o = l.style,
                                        typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = h.stateNode,
                                            u = h.memoizedProps.style,
                                            i = u != null && u.hasOwnProperty("display") ? u.display : null,
                                            a.style.display = yu("display", i))
                            } catch (k) {
                                V(e, e.return, k)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (v === null)
                            try {
                                h.stateNode.nodeValue = f ? "" : h.memoizedProps
                            } catch (k) {
                                V(e, e.return, k)
                            }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h,
                            h = h.child;
                        continue
                    }
                    if (h === e)
                        break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e)
                            break e;
                        v === h && (v = null),
                            h = h.return
                    }
                    v === h && (v = null),
                        h.sibling.return = h.return,
                        h = h.sibling
                }
            }
            break;
        case 19:
            Le(t, e),
                Fe(e),
                r & 4 && Ba(e);
            break;
        case 21:
            break;
        default:
            Le(t, e),
                Fe(e)
    }
}
function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if ($s(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (In(l, ""),
                        r.flags &= -33);
                    var o = Aa(e);
                    Bo(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo
                        , a = Aa(e);
                    Ao(e, a, i);
                    break;
                default:
                    throw Error(y(161))
            }
        } catch (u) {
            V(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function hd(e, t, n) {
    E = e,
        Gs(e)
}
function Gs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null;) {
        var l = E
            , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || xr;
            if (!i) {
                var a = l.alternate
                    , u = a !== null && a.memoizedState !== null || re;
                a = xr;
                var f = re;
                if (xr = i,
                    (re = u) && !f)
                    for (E = l; E !== null;)
                        i = E,
                            u = i.child,
                            i.tag === 22 && i.memoizedState !== null ? Va(l) : u !== null ? (u.return = i,
                                E = u) : Va(l);
                for (; o !== null;)
                    E = o,
                        Gs(o),
                        o = o.sibling;
                E = l,
                    xr = a,
                    re = f
            }
            Ua(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
                E = o) : Ua(e)
    }
}
function Ua(e) {
    for (; E !== null;) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            re || ml(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !re)
                                if (n === null)
                                    r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && Na(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null,
                                    t.child !== null)
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                Na(t, i, n)
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src)
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
                                var f = t.alternate;
                                if (f !== null) {
                                    var v = f.memoizedState;
                                    if (v !== null) {
                                        var h = v.dehydrated;
                                        h !== null && Wn(h)
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
                            throw Error(y(163))
                    }
                re || t.flags & 512 && Io(t)
            } catch (m) {
                V(t, t.return, m)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling,
            n !== null) {
            n.return = t.return,
                E = n;
            break
        }
        E = t.return
    }
}
function Wa(e) {
    for (; E !== null;) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
                E = n;
            break
        }
        E = t.return
    }
}
function Va(e) {
    for (; E !== null;) {
        var t = E;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ml(4, t)
                    } catch (u) {
                        V(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            V(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        Io(t)
                    } catch (u) {
                        V(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Io(t)
                    } catch (u) {
                        V(t, i, u)
                    }
            }
        } catch (u) {
            V(t, t.return, u)
        }
        if (t === e) {
            E = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
                E = a;
            break
        }
        E = t.return
    }
}
var vd = Math.ceil
    , el = Ze.ReactCurrentDispatcher
    , Pi = Ze.ReactCurrentOwner
    , _e = Ze.ReactCurrentBatchConfig
    , R = 0
    , J = null
    , K = null
    , b = 0
    , he = 0
    , Gt = ht(0)
    , Y = 0
    , qn = null
    , Lt = 0
    , hl = 0
    , zi = 0
    , Dn = null
    , se = null
    , Li = 0
    , an = 1 / 0
    , We = null
    , tl = !1
    , Uo = null
    , st = null
    , kr = !1
    , rt = null
    , nl = 0
    , On = 0
    , Wo = null
    , Rr = -1
    , jr = 0;
function ie() {
    return R & 6 ? Q() : Rr !== -1 ? Rr : Rr = Q()
}
function ct(e) {
    return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : bf.transition !== null ? (jr === 0 && (jr = Mu()),
        jr) : (e = j,
            e !== 0 || (e = window.event,
                e = e === void 0 ? 16 : Au(e.type)),
            e) : 1
}
function De(e, t, n, r) {
    if (50 < On)
        throw On = 0,
        Wo = null,
        Error(y(185));
    er(e, n, r),
        (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (hl |= n),
            Y === 4 && tt(e, b)),
            me(e, r),
            n === 1 && R === 0 && !(t.mode & 1) && (an = Q() + 500,
                fl && vt()))
}
function me(e, t) {
    var n = e.callbackNode;
    qc(e, t);
    var r = Br(e, e === J ? b : 0);
    if (r === 0)
        n !== null && Ji(n),
            e.callbackNode = null,
            e.callbackPriority = 0;
    else if (t = r & -r,
        e.callbackPriority !== t) {
        if (n != null && Ji(n),
            t === 1)
            e.tag === 0 ? qf(Ha.bind(null, e)) : rs(Ha.bind(null, e)),
                Yf(function () {
                    !(R & 6) && vt()
                }),
                n = null;
        else {
            switch (Ru(r)) {
                case 1:
                    n = ti;
                    break;
                case 4:
                    n = Lu;
                    break;
                case 16:
                    n = Ar;
                    break;
                case 536870912:
                    n = Tu;
                    break;
                default:
                    n = Ar
            }
            n = tc(n, Ys.bind(null, e))
        }
        e.callbackPriority = t,
            e.callbackNode = n
    }
}
function Ys(e, t) {
    if (Rr = -1,
        jr = 0,
        R & 6)
        throw Error(y(327));
    var n = e.callbackNode;
    if (bt() && e.callbackNode !== n)
        return null;
    var r = Br(e, e === J ? b : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = rl(e, r);
    else {
        t = r;
        var l = R;
        R |= 2;
        var o = Zs();
        (J !== e || b !== t) && (We = null,
            an = Q() + 500,
            Nt(e, t));
        do
            try {
                wd();
                break
            } catch (a) {
                Xs(e, a)
            }
        while (!0);
        mi(),
            el.current = o,
            R = l,
            K !== null ? t = 0 : (J = null,
                b = 0,
                t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = mo(e),
            l !== 0 && (r = l,
                t = Vo(e, l))),
            t === 1)
            throw n = qn,
            Nt(e, 0),
            tt(e, r),
            me(e, Q()),
            n;
        if (t === 6)
            tt(e, r);
        else {
            if (l = e.current.alternate,
                !(r & 30) && !gd(l) && (t = rl(e, r),
                    t === 2 && (o = mo(e),
                        o !== 0 && (r = o,
                            t = Vo(e, o))),
                    t === 1))
                throw n = qn,
                Nt(e, 0),
                tt(e, r),
                me(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    xt(e, se, We);
                    break;
                case 3:
                    if (tt(e, r),
                        (r & 130023424) === r && (t = Li + 500 - Q(),
                            10 < t)) {
                        if (Br(e, 0) !== 0)
                            break;
                        if (l = e.suspendedLanes,
                            (l & r) !== r) {
                            ie(),
                                e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Eo(xt.bind(null, e, se, We), t);
                        break
                    }
                    xt(e, se, We);
                    break;
                case 4:
                    if (tt(e, r),
                        (r & 4194240) === r)
                        break;
                    for (t = e.eventTimes,
                        l = -1; 0 < r;) {
                        var i = 31 - je(r);
                        o = 1 << i,
                            i = t[i],
                            i > l && (l = i),
                            r &= ~o
                    }
                    if (r = l,
                        r = Q() - r,
                        r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vd(r / 1960)) - r,
                        10 < r) {
                        e.timeoutHandle = Eo(xt.bind(null, e, se, We), r);
                        break
                    }
                    xt(e, se, We);
                    break;
                case 5:
                    xt(e, se, We);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return me(e, Q()),
        e.callbackNode === n ? Ys.bind(null, e) : null
}
function Vo(e, t) {
    var n = Dn;
    return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
        e = rl(e, t),
        e !== 2 && (t = se,
            se = n,
            t !== null && Ho(t)),
        e
}
function Ho(e) {
    se === null ? se = e : se.push.apply(se, e)
}
function gd(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
                n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                        , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Oe(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
            n.return = t,
                t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
    }
    return !0
}
function tt(e, t) {
    for (t &= ~zi,
        t &= ~hl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t;) {
        var n = 31 - je(t)
            , r = 1 << n;
        e[n] = -1,
            t &= ~r
    }
}
function Ha(e) {
    if (R & 6)
        throw Error(y(327));
    bt();
    var t = Br(e, 0);
    if (!(t & 1))
        return me(e, Q()),
            null;
    var n = rl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mo(e);
        r !== 0 && (t = r,
            n = Vo(e, r))
    }
    if (n === 1)
        throw n = qn,
        Nt(e, 0),
        tt(e, t),
        me(e, Q()),
        n;
    if (n === 6)
        throw Error(y(345));
    return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        xt(e, se, We),
        me(e, Q()),
        null
}
function Ti(e, t) {
    var n = R;
    R |= 1;
    try {
        return e(t)
    } finally {
        R = n,
            R === 0 && (an = Q() + 500,
                fl && vt())
    }
}
function Tt(e) {
    rt !== null && rt.tag === 0 && !(R & 6) && bt();
    var t = R;
    R |= 1;
    var n = _e.transition
        , r = j;
    try {
        if (_e.transition = null,
            j = 1,
            e)
            return e()
    } finally {
        j = r,
            _e.transition = n,
            R = t,
            !(R & 6) && vt()
    }
}
function Mi() {
    he = Gt.current,
        F(Gt)
}
function Nt(e, t) {
    e.finishedWork = null,
        e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
        Gf(n)),
        K !== null)
        for (n = K.return; n !== null;) {
            var r = n;
            switch (fi(r),
            r.tag) {
                case 1:
                    r = r.type.childContextTypes,
                        r != null && $r();
                    break;
                case 3:
                    ln(),
                        F(de),
                        F(le),
                        xi();
                    break;
                case 5:
                    wi(r);
                    break;
                case 4:
                    ln();
                    break;
                case 13:
                    F(B);
                    break;
                case 19:
                    F(B);
                    break;
                case 10:
                    hi(r.type._context);
                    break;
                case 22:
                case 23:
                    Mi()
            }
            n = n.return
        }
    if (J = e,
        K = e = ft(e.current, null),
        b = he = t,
        Y = 0,
        qn = null,
        zi = hl = Lt = 0,
        se = Dn = null,
        Et !== null) {
        for (t = 0; t < Et.length; t++)
            if (n = Et[t],
                r = n.interleaved,
                r !== null) {
                n.interleaved = null;
                var l = r.next
                    , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                        r.next = i
                }
                n.pending = r
            }
        Et = null
    }
    return e
}
function Xs(e, t) {
    do {
        var n = K;
        try {
            if (mi(),
                Lr.current = br,
                qr) {
                for (var r = U.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                        r = r.next
                }
                qr = !1
            }
            if (zt = 0,
                Z = G = U = null,
                Rn = !1,
                Xn = 0,
                Pi.current = null,
                n === null || n.return === null) {
                Y = 1,
                    qn = t,
                    K = null;
                break
            }
            e: {
                var o = e
                    , i = n.return
                    , a = n
                    , u = t;
                if (t = b,
                    a.flags |= 32768,
                    u !== null && typeof u == "object" && typeof u.then == "function") {
                    var f = u
                        , v = a
                        , h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = v.alternate;
                        m ? (v.updateQueue = m.updateQueue,
                            v.memoizedState = m.memoizedState,
                            v.lanes = m.lanes) : (v.updateQueue = null,
                                v.memoizedState = null)
                    }
                    var w = Ta(i);
                    if (w !== null) {
                        w.flags &= -257,
                            Ma(w, i, a, o, t),
                            w.mode & 1 && La(o, f, t),
                            t = w,
                            u = f;
                        var x = t.updateQueue;
                        if (x === null) {
                            var k = new Set;
                            k.add(u),
                                t.updateQueue = k
                        } else
                            x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            La(o, f, t),
                                Ri();
                            break e
                        }
                        u = Error(y(426))
                    }
                } else if (A && a.mode & 1) {
                    var I = Ta(i);
                    if (I !== null) {
                        !(I.flags & 65536) && (I.flags |= 256),
                            Ma(I, i, a, o, t),
                            di(on(u, a));
                        break e
                    }
                }
                o = u = on(u, a),
                    Y !== 4 && (Y = 2),
                    Dn === null ? Dn = [o] : Dn.push(o),
                    o = i;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536,
                                t &= -t,
                                o.lanes |= t;
                            var d = Rs(o, u, t);
                            Sa(o, d);
                            break e;
                        case 1:
                            a = u;
                            var c = o.type
                                , p = o.stateNode;
                            if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (st === null || !st.has(p)))) {
                                o.flags |= 65536,
                                    t &= -t,
                                    o.lanes |= t;
                                var g = js(o, a, t);
                                Sa(o, g);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            qs(n)
        } catch (S) {
            t = S,
                K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Zs() {
    var e = el.current;
    return el.current = br,
        e === null ? br : e
}
function Ri() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
        J === null || !(Lt & 268435455) && !(hl & 268435455) || tt(J, b)
}
function rl(e, t) {
    var n = R;
    R |= 2;
    var r = Zs();
    (J !== e || b !== t) && (We = null,
        Nt(e, t));
    do
        try {
            yd();
            break
        } catch (l) {
            Xs(e, l)
        }
    while (!0);
    if (mi(),
        R = n,
        el.current = r,
        K !== null)
        throw Error(y(261));
    return J = null,
        b = 0,
        Y
}
function yd() {
    for (; K !== null;)
        Js(K)
}
function wd() {
    for (; K !== null && !Hc();)
        Js(K)
}
function Js(e) {
    var t = ec(e.alternate, e, he);
    e.memoizedProps = e.pendingProps,
        t === null ? qs(e) : K = t,
        Pi.current = null
}
function qs(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
            t.flags & 32768) {
            if (n = dd(n, t),
                n !== null) {
                n.flags &= 32767,
                    K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
            else {
                Y = 6,
                    K = null;
                return
            }
        } else if (n = fd(n, t, he),
            n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
            t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}
function xt(e, t, n) {
    var r = j
        , l = _e.transition;
    try {
        _e.transition = null,
            j = 1,
            xd(e, t, n, r)
    } finally {
        _e.transition = l,
            j = r
    }
    return null
}
function xd(e, t, n, r) {
    do
        bt();
    while (rt !== null);
    if (R & 6)
        throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
        e.finishedLanes = 0,
        n === e.current)
        throw Error(y(177));
    e.callbackNode = null,
        e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (bc(e, o),
        e === J && (K = J = null,
            b = 0),
        !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0,
            tc(Ar, function () {
                return bt(),
                    null
            })),
        o = (n.flags & 15990) !== 0,
        n.subtreeFlags & 15990 || o) {
        o = _e.transition,
            _e.transition = null;
        var i = j;
        j = 1;
        var a = R;
        R |= 4,
            Pi.current = null,
            md(e, n),
            Ks(n, e),
            Uf(xo),
            Ur = !!wo,
            xo = wo = null,
            e.current = n,
            hd(n),
            $c(),
            R = a,
            j = i,
            _e.transition = o
    } else
        e.current = n;
    if (kr && (kr = !1,
        rt = e,
        nl = l),
        o = e.pendingLanes,
        o === 0 && (st = null),
        Gc(n.stateNode),
        me(e, Q()),
        t !== null)
        for (r = e.onRecoverableError,
            n = 0; n < t.length; n++)
            l = t[n],
                r(l.value, {
                    componentStack: l.stack,
                    digest: l.digest
                });
    if (tl)
        throw tl = !1,
        e = Uo,
        Uo = null,
        e;
    return nl & 1 && e.tag !== 0 && bt(),
        o = e.pendingLanes,
        o & 1 ? e === Wo ? On++ : (On = 0,
            Wo = e) : On = 0,
        vt(),
        null
}
function bt() {
    if (rt !== null) {
        var e = Ru(nl)
            , t = _e.transition
            , n = j;
        try {
            if (_e.transition = null,
                j = 16 > e ? 16 : e,
                rt === null)
                var r = !1;
            else {
                if (e = rt,
                    rt = null,
                    nl = 0,
                    R & 6)
                    throw Error(y(331));
                var l = R;
                for (R |= 4,
                    E = e.current; E !== null;) {
                    var o = E
                        , i = o.child;
                    if (E.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var f = a[u];
                                for (E = f; E !== null;) {
                                    var v = E;
                                    switch (v.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            jn(8, v, o)
                                    }
                                    var h = v.child;
                                    if (h !== null)
                                        h.return = v,
                                            E = h;
                                    else
                                        for (; E !== null;) {
                                            v = E;
                                            var m = v.sibling
                                                , w = v.return;
                                            if (Hs(v),
                                                v === f) {
                                                E = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = w,
                                                    E = m;
                                                break
                                            }
                                            E = w
                                        }
                                }
                            }
                            var x = o.alternate;
                            if (x !== null) {
                                var k = x.child;
                                if (k !== null) {
                                    x.child = null;
                                    do {
                                        var I = k.sibling;
                                        k.sibling = null,
                                            k = I
                                    } while (k !== null)
                                }
                            }
                            E = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                            E = i;
                    else
                        e: for (; E !== null;) {
                            if (o = E,
                                o.flags & 2048)
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        jn(9, o, o.return)
                                }
                            var d = o.sibling;
                            if (d !== null) {
                                d.return = o.return,
                                    E = d;
                                break e
                            }
                            E = o.return
                        }
                }
                var c = e.current;
                for (E = c; E !== null;) {
                    i = E;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null)
                        p.return = i,
                            E = p;
                    else
                        e: for (i = c; E !== null;) {
                            if (a = E,
                                a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ml(9, a)
                                    }
                                } catch (S) {
                                    V(a, a.return, S)
                                }
                            if (a === i) {
                                E = null;
                                break e
                            }
                            var g = a.sibling;
                            if (g !== null) {
                                g.return = a.return,
                                    E = g;
                                break e
                            }
                            E = a.return
                        }
                }
                if (R = l,
                    vt(),
                    Be && typeof Be.onPostCommitFiberRoot == "function")
                    try {
                        Be.onPostCommitFiberRoot(il, e)
                    } catch { }
                r = !0
            }
            return r
        } finally {
            j = n,
                _e.transition = t
        }
    }
    return !1
}
function $a(e, t, n) {
    t = on(n, t),
        t = Rs(e, t, 1),
        e = ut(e, t, 1),
        t = ie(),
        e !== null && (er(e, 1, t),
            me(e, t))
}
function V(e, t, n) {
    if (e.tag === 3)
        $a(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                $a(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (st === null || !st.has(r))) {
                    e = on(n, e),
                        e = js(t, e, 1),
                        t = ut(t, e, 1),
                        e = ie(),
                        t !== null && (er(t, 1, e),
                            me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function kd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        t = ie(),
        e.pingedLanes |= e.suspendedLanes & n,
        J === e && (b & n) === n && (Y === 4 || Y === 3 && (b & 130023424) === b && 500 > Q() - Li ? Nt(e, 0) : zi |= n),
        me(e, t)
}
function bs(e, t) {
    t === 0 && (e.mode & 1 ? (t = fr,
        fr <<= 1,
        !(fr & 130023424) && (fr = 4194304)) : t = 1);
    var n = ie();
    e = Ye(e, t),
        e !== null && (er(e, t, n),
            me(e, n))
}
function Ed(e) {
    var t = e.memoizedState
        , n = 0;
    t !== null && (n = t.retryLane),
        bs(e, n)
}
function Sd(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode
                , l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    r !== null && r.delete(t),
        bs(e, n)
}
var ec;
ec = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || de.current)
            ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ce = !1,
                    cd(e, t, n);
            ce = !!(e.flags & 131072)
        }
    else
        ce = !1,
            A && t.flags & 1048576 && ls(t, Gr, t.index);
    switch (t.lanes = 0,
    t.tag) {
        case 2:
            var r = t.type;
            Mr(e, t),
                e = t.pendingProps;
            var l = tn(t, le.current);
            qt(t, n),
                l = Ei(null, t, r, e, l, n);
            var o = Si();
            return t.flags |= 1,
                typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
                    t.memoizedState = null,
                    t.updateQueue = null,
                    pe(r) ? (o = !0,
                        Qr(t)) : o = !1,
                    t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
                    gi(t),
                    l.updater = pl,
                    t.stateNode = l,
                    l._reactInternals = t,
                    Lo(t, r, e, n),
                    t = Ro(null, t, r, !0, o, n)) : (t.tag = 0,
                        A && o && ci(t),
                        oe(null, t, l, n),
                        t = t.child),
                t;
        case 16:
            r = t.elementType;
            e: {
                switch (Mr(e, t),
                e = t.pendingProps,
                l = r._init,
                r = l(r._payload),
                t.type = r,
                l = t.tag = _d(r),
                e = Te(r, e),
                l) {
                    case 0:
                        t = Mo(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Da(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ra(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ja(null, t, r, Te(r.type, e), n);
                        break e
                }
                throw Error(y(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type,
                l = t.pendingProps,
                l = t.elementType === r ? l : Te(r, l),
                Mo(e, t, r, l, n);
        case 1:
            return r = t.type,
                l = t.pendingProps,
                l = t.elementType === r ? l : Te(r, l),
                Da(e, t, r, l, n);
        case 3:
            e: {
                if (Is(t),
                    e === null)
                    throw Error(y(387));
                r = t.pendingProps,
                    o = t.memoizedState,
                    l = o.element,
                    cs(e, t),
                    Zr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element,
                    o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    },
                        t.updateQueue.baseState = o,
                        t.memoizedState = o,
                        t.flags & 256) {
                        l = on(Error(y(423)), t),
                            t = Oa(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                        l = on(Error(y(424)), t),
                            t = Oa(e, t, r, n, l);
                        break e
                    } else
                        for (ve = at(t.stateNode.containerInfo.firstChild),
                            ge = t,
                            A = !0,
                            Re = null,
                            n = us(t, null, r, n),
                            t.child = n; n;)
                            n.flags = n.flags & -3 | 4096,
                                n = n.sibling;
                else {
                    if (nn(),
                        r === l) {
                        t = Xe(e, t, n);
                        break e
                    }
                    oe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return fs(t),
                e === null && Co(t),
                r = t.type,
                l = t.pendingProps,
                o = e !== null ? e.memoizedProps : null,
                i = l.children,
                ko(r, l) ? i = null : o !== null && ko(r, o) && (t.flags |= 32),
                Fs(e, t),
                oe(e, t, i, n),
                t.child;
        case 6:
            return e === null && Co(t),
                null;
        case 13:
            return As(e, t, n);
        case 4:
            return yi(t, t.stateNode.containerInfo),
                r = t.pendingProps,
                e === null ? t.child = rn(t, null, r, n) : oe(e, t, r, n),
                t.child;
        case 11:
            return r = t.type,
                l = t.pendingProps,
                l = t.elementType === r ? l : Te(r, l),
                Ra(e, t, r, l, n);
        case 7:
            return oe(e, t, t.pendingProps, n),
                t.child;
        case 8:
            return oe(e, t, t.pendingProps.children, n),
                t.child;
        case 12:
            return oe(e, t, t.pendingProps.children, n),
                t.child;
        case 10:
            e: {
                if (r = t.type._context,
                    l = t.pendingProps,
                    o = t.memoizedProps,
                    i = l.value,
                    D(Yr, r._currentValue),
                    r._currentValue = i,
                    o !== null)
                    if (Oe(o.value, i)) {
                        if (o.children === l.children && !de.current) {
                            t = Xe(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child,
                            o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                i = o.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Qe(-1, n & -n),
                                                u.tag = 2;
                                            var f = o.updateQueue;
                                            if (f !== null) {
                                                f = f.shared;
                                                var v = f.pending;
                                                v === null ? u.next = u : (u.next = v.next,
                                                    v.next = u),
                                                    f.pending = u
                                            }
                                        }
                                        o.lanes |= n,
                                            u = o.alternate,
                                            u !== null && (u.lanes |= n),
                                            Po(o.return, n, t),
                                            a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return,
                                    i === null)
                                    throw Error(y(341));
                                i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Po(i, n, t),
                                    i = o.sibling
                            } else
                                i = o.child;
                            if (i !== null)
                                i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling,
                                        o !== null) {
                                        o.return = i.return,
                                            i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                oe(e, t, l.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return l = t.type,
                r = t.pendingProps.children,
                qt(t, n),
                l = Ce(l),
                r = r(l),
                t.flags |= 1,
                oe(e, t, r, n),
                t.child;
        case 14:
            return r = t.type,
                l = Te(r, t.pendingProps),
                l = Te(r.type, l),
                ja(e, t, r, l, n);
        case 15:
            return Ds(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type,
                l = t.pendingProps,
                l = t.elementType === r ? l : Te(r, l),
                Mr(e, t),
                t.tag = 1,
                pe(r) ? (e = !0,
                    Qr(t)) : e = !1,
                qt(t, n),
                Ms(t, r, l),
                Lo(t, r, l, n),
                Ro(null, t, r, !0, e, n);
        case 19:
            return Bs(e, t, n);
        case 22:
            return Os(e, t, n)
    }
    throw Error(y(156, t.tag))
}
    ;
function tc(e, t) {
    return zu(e, t)
}
function Nd(e, t, n, r) {
    this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
}
function Ne(e, t, n, r) {
    return new Nd(e, t, n, r)
}
function ji(e) {
    return e = e.prototype,
        !(!e || !e.isReactComponent)
}
function _d(e) {
    if (typeof e == "function")
        return ji(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
            e === qo)
            return 11;
        if (e === bo)
            return 14
    }
    return 2
}
function ft(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ne(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
            n.type = e.type,
            n.flags = 0,
            n.subtreeFlags = 0,
            n.deletions = null),
        n.flags = e.flags & 14680064,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n
}
function Dr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
        typeof e == "function")
        ji(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
            case It:
                return _t(n.children, l, o, t);
            case Jo:
                i = 8,
                    l |= 8;
                break;
            case ql:
                return e = Ne(12, n, t, l | 2),
                    e.elementType = ql,
                    e.lanes = o,
                    e;
            case bl:
                return e = Ne(13, n, t, l),
                    e.elementType = bl,
                    e.lanes = o,
                    e;
            case eo:
                return e = Ne(19, n, t, l),
                    e.elementType = eo,
                    e.lanes = o,
                    e;
            case fu:
                return vl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case su:
                            i = 10;
                            break e;
                        case cu:
                            i = 9;
                            break e;
                        case qo:
                            i = 11;
                            break e;
                        case bo:
                            i = 14;
                            break e;
                        case qe:
                            i = 16,
                                r = null;
                            break e
                    }
                throw Error(y(130, e == null ? e : typeof e, ""))
        }
    return t = Ne(i, n, t, l),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
}
function _t(e, t, n, r) {
    return e = Ne(7, e, r, t),
        e.lanes = n,
        e
}
function vl(e, t, n, r) {
    return e = Ne(22, e, r, t),
        e.elementType = fu,
        e.lanes = n,
        e.stateNode = {
            isHidden: !1
        },
        e
}
function Yl(e, t, n) {
    return e = Ne(6, e, null, t),
        e.lanes = n,
        e
}
function Xl(e, t, n) {
    return t = Ne(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
}
function Cd(e, t, n, r, l) {
    this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = Ll(0),
        this.expirationTimes = Ll(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Ll(0),
        this.identifierPrefix = r,
        this.onRecoverableError = l,
        this.mutableSourceEagerHydrationData = null
}
function Di(e, t, n, r, l, o, i, a, u) {
    return e = new Cd(e, t, n, a, u),
        t === 1 ? (t = 1,
            o === !0 && (t |= 8)) : t = 0,
        o = Ne(3, null, null, t),
        e.current = o,
        o.stateNode = e,
        o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        gi(o),
        e
}
function Pd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ft,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function nc(e) {
    if (!e)
        return pt;
    e = e._reactInternals;
    e: {
        if (Rt(e) !== e || e.tag !== 1)
            throw Error(y(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (pe(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (pe(n))
            return ns(e, n, t)
    }
    return t
}
function rc(e, t, n, r, l, o, i, a, u) {
    return e = Di(n, r, !0, e, l, o, i, a, u),
        e.context = nc(null),
        n = e.current,
        r = ie(),
        l = ct(n),
        o = Qe(r, l),
        o.callback = t ?? null,
        ut(n, o, l),
        e.current.lanes = l,
        er(e, l, r),
        me(e, r),
        e
}
function gl(e, t, n, r) {
    var l = t.current
        , o = ie()
        , i = ct(l);
    return n = nc(n),
        t.context === null ? t.context = n : t.pendingContext = n,
        t = Qe(o, i),
        t.payload = {
            element: e
        },
        r = r === void 0 ? null : r,
        r !== null && (t.callback = r),
        e = ut(l, t, i),
        e !== null && (De(e, l, i, o),
            zr(e, l, i)),
        i
}
function ll(e) {
    if (e = e.current,
        !e.child)
        return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}
function Qa(e, t) {
    if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Oi(e, t) {
    Qa(e, t),
        (e = e.alternate) && Qa(e, t)
}
function zd() {
    return null
}
var lc = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
}
    ;
function Fi(e) {
    this._internalRoot = e
}
yl.prototype.render = Fi.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(y(409));
    gl(e, t, null, null)
}
    ;
yl.prototype.unmount = Fi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function () {
            gl(null, e, null, null)
        }),
            t[Ge] = null
    }
}
    ;
function yl(e) {
    this._internalRoot = e
}
yl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ou();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++)
            ;
        et.splice(n, 0, e),
            n === 0 && Iu(e)
    }
}
    ;
function Ii(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ka() { }
function Ld(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var f = ll(i);
                o.call(f)
            }
        }
        var i = rc(t, r, e, 0, null, !1, !1, "", Ka);
        return e._reactRootContainer = i,
            e[Ge] = i.current,
            $n(e.nodeType === 8 ? e.parentNode : e),
            Tt(),
            i
    }
    for (; l = e.lastChild;)
        e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var f = ll(u);
            a.call(f)
        }
    }
    var u = Di(e, 0, !1, null, null, !1, !1, "", Ka);
    return e._reactRootContainer = u,
        e[Ge] = u.current,
        $n(e.nodeType === 8 ? e.parentNode : e),
        Tt(function () {
            gl(t, u, n, r)
        }),
        u
}
function xl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var a = l;
            l = function () {
                var u = ll(i);
                a.call(u)
            }
        }
        gl(t, i, e, l)
    } else
        i = Ld(n, t, e, l, r);
    return ll(i)
}
ju = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = _n(t.pendingLanes);
                n !== 0 && (ni(t, n | 1),
                    me(t, Q()),
                    !(R & 6) && (an = Q() + 500,
                        vt()))
            }
            break;
        case 13:
            Tt(function () {
                var r = Ye(e, 1);
                if (r !== null) {
                    var l = ie();
                    De(r, e, 1, l)
                }
            }),
                Oi(e, 1)
    }
}
    ;
ri = function (e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = ie();
            De(t, e, 134217728, n)
        }
        Oi(e, 134217728)
    }
}
    ;
Du = function (e) {
    if (e.tag === 13) {
        var t = ct(e)
            , n = Ye(e, t);
        if (n !== null) {
            var r = ie();
            De(n, e, t, r)
        }
        Oi(e, t)
    }
}
    ;
Ou = function () {
    return j
}
    ;
Fu = function (e, t) {
    var n = j;
    try {
        return j = e,
            t()
    } finally {
        j = n
    }
}
    ;
co = function (e, t, n) {
    switch (t) {
        case "input":
            if (ro(e, n),
                t = n.name,
                n.type === "radio" && t != null) {
                for (n = e; n.parentNode;)
                    n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                    t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = cl(r);
                        if (!l)
                            throw Error(y(90));
                        pu(r),
                            ro(r, l)
                    }
                }
            }
            break;
        case "textarea":
            hu(e, n);
            break;
        case "select":
            t = n.value,
                t != null && Yt(e, !!n.multiple, t, !1)
    }
}
    ;
Eu = Ti;
Su = Tt;
var Td = {
    usingClientEntryPoint: !1,
    Events: [nr, Wt, cl, xu, ku, Ti]
}
    , kn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
    , Md = {
        bundleType: kn.bundleType,
        version: kn.version,
        rendererPackageName: kn.rendererPackageName,
        rendererConfig: kn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ze.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Cu(e),
                e === null ? null : e.stateNode
        },
        findFiberByHostInstance: kn.findFiberByHostInstance || zd,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Er.isDisabled && Er.supportsFiber)
        try {
            il = Er.inject(Md),
                Be = Er
        } catch { }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Td;
we.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ii(t))
        throw Error(y(200));
    return Pd(e, t, null, n)
}
    ;
we.createRoot = function (e, t) {
    if (!Ii(e))
        throw Error(y(299));
    var n = !1
        , r = ""
        , l = lc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        t = Di(e, 1, !1, null, null, n, !1, r, l),
        e[Ge] = t.current,
        $n(e.nodeType === 8 ? e.parentNode : e),
        new Fi(t)
}
    ;
we.findDOMNode = function (e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","),
            Error(y(268, e)));
    return e = Cu(t),
        e = e === null ? null : e.stateNode,
        e
}
    ;
we.flushSync = function (e) {
    return Tt(e)
}
    ;
we.hydrate = function (e, t, n) {
    if (!wl(t))
        throw Error(y(200));
    return xl(null, e, t, !0, n)
}
    ;
we.hydrateRoot = function (e, t, n) {
    if (!Ii(e))
        throw Error(y(405));
    var r = n != null && n.hydratedSources || null
        , l = !1
        , o = ""
        , i = lc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        t = rc(t, null, e, 1, n ?? null, l, !1, o, i),
        e[Ge] = t.current,
        $n(e),
        r)
        for (e = 0; e < r.length; e++)
            n = r[e],
                l = n._getVersion,
                l = l(n._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new yl(t)
}
    ;
we.render = function (e, t, n) {
    if (!wl(t))
        throw Error(y(200));
    return xl(null, e, t, !1, n)
}
    ;
we.unmountComponentAtNode = function (e) {
    if (!wl(e))
        throw Error(y(40));
    return e._reactRootContainer ? (Tt(function () {
        xl(null, null, e, !1, function () {
            e._reactRootContainer = null,
                e[Ge] = null
        })
    }),
        !0) : !1
}
    ;
we.unstable_batchedUpdates = Ti;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!wl(n))
        throw Error(y(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(y(38));
    return xl(e, t, n, !1, r)
}
    ;
we.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)
        } catch (e) {
            console.error(e)
        }
}
oc(),
    ou.exports = we;
var Rd = ou.exports
    , Ga = Rd;
Zl.createRoot = Ga.createRoot,
    Zl.hydrateRoot = Ga.hydrateRoot;
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jd = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
    , ke = (e, t) => {
        const n = fe.forwardRef(({ color: r = "currentColor", size: l = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, className: a = "", children: u, ...f }, v) => fe.createElement("svg", {
            ref: v,
            ...jd,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? Number(o) * 24 / Number(l) : o,
            className: ["lucide", `lucide-${Dd(e)}`, a].join(" "),
            ...f
        }, [...t.map(([h, m]) => fe.createElement(h, m)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`,
            n
    }
    ;
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = ke("Activity", [["path", {
    d: "M22 12h-4l-3 9L9 3l-3 9H2",
    key: "d5dnw9"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = ke("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = ke("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = ke("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = ke("Headphones", [["path", {
    d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
    key: "1xhozi"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = ke("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = ke("ShieldCheck", [["path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
    key: "1irkt0"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = ke("Smartphone", [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = ke("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = ke("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = ke("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = ke("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = ke("Zap", [["polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
    key: "45s27k"
}]])
    , un = "https://drive.google.com/uc?export=download&id=1TY-uEdbmTaVJoh5D5ycejCN-eXbAqSoB"
    , sc = "https://i.q-chats.com/chatlink.html?tag=78c1f22373cc1982cc078c2dfd6c1c80&language=en"
    , Ya = ["Aarav P.", "Vihaan S.", "Aditya K.", "Arjun M.", "Reyansh J.", "Aryan D.", "Ishaan B.", "Dhruv G.", "Kabir R.", "Vivaan L.", "Ansh T.", "Rohan V.", "Rahul S.", "Amit K.", "Sumit P.", "Karan M.", "Rohit S.", "Vikas D.", "Ajay B.", "Vijay N.", "Suresh K.", "Ramesh J.", "Manoj T.", "Sanjay G.", "Deepak R.", "Sunil L.", "Vinod P.", "Raj K.", "Anjali S.", "Pooja M.", "Neha D.", "Sneha B.", "Priya G.", "Kavya R.", "Diya T.", "Aditi L.", "Kiara S.", "Riya K.", "Ananya M.", "Pari D.", "Vikram S.", "Siddharth J.", "Manish K.", "Varun P.", "Nikhil R.", "Abhishek S.", "Gaurav T.", "Harsh V.", "Yash M.", "Kartik D.", "Pranav B.", "Rishabh G.", "Chetan K.", "Lalit R.", "Mukesh S."]
    , Xa = ["Rummy", "Teen Patti", "Dragon Tiger", "Aviator", "Ludo", "Poker", "Roulette", "Blackjack"]
    , En = [{
        id: 0,
        icon: "assets/task_center/e_01.png",
        title: "Promo Code",
        headline: "Unlock Rewards with Promo Codes",
        desc: "Get exclusive bonuses by entering special promo codes! Whether it's free cash, spins, or entries into tournaments, promo codes are your gateway to surprise rewards. Available for new users, festive events, and loyalty players."
    }, {
        id: 1,
        icon: "assets/task_center/e_02.png",
        title: "Voucher",
        headline: "Boost Your Play with Vouchers",
        desc: "Claim powerful vouchers to level up your game: Deposit Vouchers - Get bonus cash or extra chips on every deposit. Game Vouchers - Enjoy free spins or entries in specific games like slots or fishing. Easily redeem vouchers inside the app for instant rewards."
    }, {
        id: 2,
        icon: "assets/task_center/e_03.png",
        title: "Tournament",
        headline: "Compete. Climb. Conquer.",
        desc: "Join thrilling real-time tournaments across Rummy, Slots, Aviator, and more. Timed rounds, Leaderboards with live updates, Win cash, bonuses, or exclusive badges. Enter for glory — and big prizes."
    }, {
        id: 3,
        icon: "assets/task_center/e_04.png",
        title: "Jackpot",
        headline: "One Spin Can Change Everything",
        desc: "Every spin or round you play brings you closer to hitting the Yono jackpot. Progressive pool grows daily. Winners announced live. Play eligible games to qualify. You never know when luck strikes!"
    }, {
        id: 4,
        icon: "assets/task_center/e_05.png",
        title: "Lucky Wheel",
        headline: "Spin the Wheel Every Day!",
        desc: "Log in daily and take your free shot at the Lucky Wheel. Prizes include: Bonus coins, Free tournament entries, Game vouchers, Real cash boosts. More spins = more chances to win!"
    }, {
        id: 5,
        icon: "assets/task_center/e_06.png",
        title: "Task Center",
        headline: "Complete. Earn. Repeat.",
        desc: "Daily and weekly missions designed to reward your gameplay: Play 3 JaihoSlot Games, Win 1,000 coins in Slots, Refer a friend today. Each completed task unlocks instant bonuses, vouchers, or XP."
    }]
    , $d = ({ isScrolled: e, toggleMenu: t, isMenuOpen: n }) => s.createElement("nav", {
        className: `fixed w-full z-50 transition-all duration-500 border-b border-transparent ${e ? "bg-[#005c4b]/95 backdrop-blur-xl border-emerald-400/20 shadow-[0_0_15px_rgba(0,156,77,0.3)] py-3" : "bg-transparent py-6"}`
    }, s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    }, s.createElement("div", {
        className: "flex items-center gap-3 group cursor-pointer"
    }, s.createElement("img", {
        src: "assets/js_logo.png",
        alt: "Jaiho Slots Logo",
        className: "h-12 w-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.3)] group-hover:scale-105 transition-transform duration-300",
        onError: r => {
            r.target.onerror = null,
                r.target.src = "https://via.placeholder.com/50x50?text=JAIHO"
        }
    }), s.createElement("div", {
        className: "hidden sm:flex flex-col -space-y-1"
    }, s.createElement("span", {
        className: "text-xl font-bold text-white tracking-wider font-display"
    }, "JAIHO"), s.createElement("span", {
        className: "text-xs font-bold text-yellow-400 tracking-[0.2em] uppercase"
    }, "SLOTS"))), s.createElement("div", {
        className: "hidden md:flex items-center space-x-1"
    }, ["Games", "Features", "Winners", "FAQ"].map(r => s.createElement("a", {
        key: r,
        href: `#${r.toLowerCase()}`,
        className: "px-5 py-2 text-emerald-100 hover:text-white hover:bg-emerald-500/10 rounded-full transition-all text-sm font-medium tracking-wide"
    }, r)), s.createElement("a", {
        href: un,
        className: "ml-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 text-slate-950 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-2 border border-yellow-400/50 relative overflow-hidden group",
        target: "_blank"    
    }, s.createElement("span", {
        className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
    }), s.createElement(ol, {
        size: 18,
        className: "animate-pulse relative z-10"
    }), s.createElement("span", {
        className: "tracking-wide relative z-10 text-sm font-black"
    }, "DOWNLOAD APK"))), s.createElement("div", {
        className: "md:hidden"
    }, s.createElement("button", {
        onClick: t,
        className: "text-white p-2 rounded-lg hover:bg-emerald-500/10 transition-colors"
    }, n ? s.createElement(Vd, {
        size: 24
    }) : s.createElement(Bd, {
        size: 24
    })))), n && s.createElement("div", {
        className: "md:hidden bg-[#005c4b] border-t border-emerald-400/20 absolute w-full shadow-2xl backdrop-blur-xl"
    }, s.createElement("div", {
        className: "px-4 pt-2 pb-8 space-y-1"
    }, ["Games", "Features", "Winners"].map(r => s.createElement("a", {
        key: r,
        href: `#${r.toLowerCase()}`,
        onClick: t,
        className: "block px-4 py-4 text-base font-bold text-emerald-100 hover:text-white hover:bg-emerald-500/10 rounded-xl border border-transparent hover:border-emerald-500/20"
    }, r)), s.createElement("a", {
        href: un,
        className: "w-full mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_20px_-10px_rgba(234,179,8,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(234,179,8,0.7)] transition-all",
        target: "_blank"
    }, s.createElement(ol, {
        size: 20
    }), " INSTALL NOW"))))
    , Qd = () => s.createElement("div", {
        className: "fixed right-4 bottom-24 flex flex-col gap-4 z-40"
    }, s.createElement("a", {
        href: "http://jaihoslots.club/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:scale-110 transition-all cursor-pointer border-2 border-emerald-400/20 bg-[#005c4b] overflow-hidden"
    }, s.createElement("img", {
        src: "assets/Wa.png",
        alt: "WhatsApp",
        className: "w-full h-full object-cover"
    }), s.createElement("span", {
        className: "absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    }, "Chat Support")), s.createElement("a", {
        href: "https://t.me/JaiHoSlots",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,136,204,0.4)] hover:shadow-[0_4px_25px_rgba(0,136,204,0.6)] hover:scale-110 transition-all cursor-pointer border-2 border-emerald-400/20 bg-[#005c4b] overflow-hidden"
    }, s.createElement("img", {
        src: "assets/Tg.png",
        alt: "Telegram",
        className: "w-full h-full object-cover"
    }), s.createElement("span", {
        className: "absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    }, "Join Channel")), s.createElement("a", {
        href: "https://www.facebook.com/JaiHoSlotsOfficial",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(24,119,242,0.4)] hover:shadow-[0_4px_25px_rgba(24,119,242,0.6)] hover:scale-110 transition-all cursor-pointer border-2 border-emerald-400/20 bg-[#005c4b] overflow-hidden"
    }, s.createElement("img", {
        src: "assets/Fb.png",
        alt: "Facebook",
        className: "w-full h-full object-cover"
    }), s.createElement("span", {
        className: "absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    }, "Follow Us")), s.createElement("a", {
        href: sc,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(234,179,8,0.4)] hover:shadow-[0_4px_25px_rgba(234,179,8,0.6)] hover:scale-110 transition-all cursor-pointer border-2 border-emerald-400/20 bg-[#005c4b] overflow-hidden"
    }, s.createElement("img", {
        src: "assets/CS.png",
        alt: "Support",
        className: "w-full h-full object-cover scale-75"
    }), s.createElement("span", {
        className: "absolute right-16 bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    }, "24/7 Help")))
    , Kd = () => {
        const [e, t] = fe.useState(0)
            , n = [{
                id: 3,
                bg: "assets/hero_3_bg.jpg",
                logo: "assets/hero_3_title_1.png",
                text: "assets/hero_3_title_2.png",
                character: "assets/hero_3.png",
                sizeClass: "w-64 md:w-80 lg:w-full max-w-2xl",
                color: "from-red-600 to-rose-900"
            }, {
                id: 1,
                bg: "assets/hero_1_bg.jpg",
                logo: "assets/hero_1_title_1.png",
                text: "assets/hero_1_title_2.png",
                character: "assets/hero_1.png",
                sizeClass: "w-52 md:w-64 lg:w-4/5 max-w-xl",
                color: "from-emerald-500 to-teal-900"
            }, {
                id: 2,
                bg: "assets/hero_2_bg.jpg",
                logo: "assets/hero_2_title_1.png",
                text: "assets/hero_2_title_2.png",
                character: "assets/hero_2.png",
                sizeClass: "w-[19rem] md:w-[25rem] lg:w-[120%] max-w-3xl",
                color: "from-blue-500 to-indigo-900"
            }];
        return fe.useEffect(() => {
            const r = setInterval(() => {
                t(l => (l + 1) % n.length)
            }
                , 4e3);
            return () => clearInterval(r)
        }
            , []),
            s.createElement("section", {
                className: "relative h-[60vh] lg:h-[80vh] min-h-[500px] overflow-hidden bg-[#00241d]"
            }, n.map((r, l) => s.createElement("div", {
                key: r.id,
                className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${l === e ? "opacity-100 z-10" : "opacity-0 z-0"}`
            }, s.createElement("div", {
                className: "absolute inset-0 z-0"
            }, s.createElement("img", {
                src: r.bg,
                alt: "Hero Background",
                className: `w-full h-full object-cover transition-transform duration-[4000ms] ease-linear ${l === e ? "scale-110" : "scale-100"}`
            })), s.createElement("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-20 flex items-center justify-center"
            }, s.createElement("div", {
                className: "flex flex-col lg:flex-row gap-4 lg:gap-32 w-full items-center justify-center lg:justify-between"
            }, s.createElement("div", {
                className: `flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 transition-all duration-1000 delay-300 w-full lg:w-1/2 ${l === e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
            }, s.createElement("div", {
                className: "mx-auto lg:mx-0 text-center lg:text-left"
            }, s.createElement("img", {
                src: r.logo,
                alt: "Game Title Mobile",
                className: "block lg:hidden h-auto w-3/4 md:w-1/2 object-contain mx-auto"
            })), s.createElement("img", {
                src: r.text,
                alt: "Game Title Desktop",
                className: "hidden lg:block h-auto w-3/4 object-contain"
            })), s.createElement("div", {
                className: `flex justify-center lg:justify-end w-full lg:w-1/2 transition-all duration-1000 delay-500 ${l === e ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-90"}`
            }, s.createElement("img", {
                src: r.character,
                alt: "Character",
                className: `${r.sizeClass} h-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-float-slow`
            })))))), s.createElement("style", null, `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `))
    }
    , Gd = () => {
        const [e, t] = fe.useState([]);
        return fe.useEffect(() => {
            const n = Array.from({
                length: 50
            }, (r, l) => {
                const o = Math.random() > .5
                    , i = Math.floor(Math.random() * 49501 + 500)
                    , a = new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0
                    }).format(i)
                    , u = Ya[Math.floor(Math.random() * Ya.length)]
                    , f = Xa[Math.floor(Math.random() * Xa.length)];
                return {
                    id: l,
                    name: u,
                    amount: a,
                    action: o ? "withdrew" : "won in",
                    target: o ? "via UPI" : f,
                    type: o ? "withdraw" : "win"
                }
            }
            );
            t(n)
        }
            , []),
            s.createElement("div", {
                className: "w-full bg-[#009174] border-y border-emerald-400/10 relative overflow-hidden h-14 flex items-center"
            }, s.createElement("div", {
                className: "absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#009174] to-transparent z-10"
            }), s.createElement("div", {
                className: "absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#009174] to-transparent z-10"
            }), s.createElement("div", {
                className: "flex animate-marquee whitespace-nowrap"
            }, [...e, ...e].map((n, r) => s.createElement("div", {
                key: `${n.id}-${r}`,
                className: "flex items-center gap-2 mx-6 text-sm font-medium text-emerald-100"
            }, s.createElement("div", {
                className: `w-2 h-2 rounded-full ${n.type === "win" ? "bg-[#009c4d]" : "bg-yellow-500"} animate-pulse`
            }), s.createElement("span", {
                className: "text-white font-bold"
            }, n.name), s.createElement("span", null, n.action), s.createElement("span", {
                className: `${n.type === "win" ? "text-white" : "text-yellow-300"} font-bold`
            }, n.target), s.createElement("span", {
                className: "text-white font-black bg-white/20 px-2 py-0.5 rounded text-xs"
            }, n.amount)))), s.createElement("style", null, `
         @keyframes marquee {
           0% { transform: translateX(0); }
           100% { transform: translateX(-50%); }
         }
         .animate-marquee {
           animation: marquee 100s linear infinite;
         }
         .animate-marquee:hover {
           animation-play-state: paused;
         }
       `))
    }
    , Yd = () => s.createElement("div", {
        className: "bg-[#009174] border-b border-emerald-400/10 py-10 relative overflow-hidden"
    }, s.createElement("div", {
        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-100%] animate-shimmer"
    }), s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6"
    }, s.createElement("p", {
        className: "text-emerald-100 text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap"
    }, "Trusted By 10M+ Users for Payments"), s.createElement("div", {
        className: "flex items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-all duration-500"
    }, [{
        name: "UPI",
        src: "assets/B26B6BBB.png"
    }, {
        name: "RuPay",
        src: "assets/6492062C.png"
    }, {
        name: "Visa",
        src: "assets/239513C.png"
    }, {
        name: "Mastercard",
        src: "assets/B89814B2.png"
    }, {
        name: "PayU",
        src: "assets/ED6B310C.png"
    }, {
        name: "IMPS",
        src: "assets/FD8E2BC9.png"
    }].map((e, t) => s.createElement("img", {
        key: t,
        src: e.src,
        alt: e.name,
        className: "h-6 md:h-10 object-contain hover:scale-110 transition-transform duration-300"
    })))))
    , Xd = () => {
        const [e, t] = fe.useState(0);
        return fe.useEffect(() => {
            const n = setInterval(() => {
                t(r => (r + 1) % En.length)
            }
                , 4e3);
            return () => clearInterval(n)
        }
            , []),
            s.createElement("section", {
                className: "py-24 bg-white relative"
            }, s.createElement("div", {
                className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
            }), s.createElement("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            }, s.createElement("div", {
                className: "md:border-l-4 md:border-[#009c4d] md:pl-4 text-center md:text-left mb-10"
            }, s.createElement("h2", {
                className: "text-4xl font-bold text-slate-900"
            }, "Features")), s.createElement("div", {
                className: "grid grid-cols-6 gap-1 md:gap-4 mb-8 md:mb-14 relative z-10"
            }, En.map((n, r) => s.createElement("div", {
                key: n.id,
                onClick: () => t(r),
                className: "flex flex-col items-center cursor-pointer group relative"
            }, s.createElement("div", {
                className: `w-12 h-12 sm:w-16 sm:h-16 md:w-32 md:h-32 rounded-xl md:rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-md ${e === r ? "border-[#009c4d] bg-white shadow-[0_0_15px_rgba(0,156,77,0.3)] scale-110" : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"}`
            }, s.createElement("img", {
                src: n.icon,
                alt: n.title,
                className: "w-7 h-7 sm:w-10 sm:h-10 md:w-20 md:h-20 object-contain"
            })), s.createElement("span", {
                className: `mt-2 md:mt-3 text-[9px] sm:text-xs md:text-sm font-bold tracking-wide transition-colors text-center leading-tight break-words w-full ${e === r ? "text-[#009c4d]" : "text-slate-500 group-hover:text-slate-800"}`
            }, n.title), e === r && s.createElement("div", {
                className: "absolute -bottom-[2.5rem] md:-bottom-[3.6rem] left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-[#005c4b] border-t border-l border-white/10 rotate-45 z-20"
            })))), s.createElement("div", {
                className: "bg-[#005c4b] rounded-3xl p-8 md:p-12 border border-emerald-400/20 animate-fade-in key={activeFeature} relative z-0 shadow-xl"
            }, s.createElement("div", {
                className: "max-w-3xl"
            }, s.createElement("h3", {
                className: "text-2xl md:text-3xl font-black text-yellow-400 mb-2"
            }, En[e].title), s.createElement("h4", {
                className: "text-xl text-white font-bold mb-4"
            }, En[e].headline), s.createElement("p", {
                className: "text-emerald-50 leading-relaxed text-lg"
            }, En[e].desc)))), s.createElement("style", null, `
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `))
    }
    , Dt = ({ icon: e, title: t, desc: n, delay: r }) => s.createElement("div", {
        className: "relative group p-[1px] rounded-3xl bg-gradient-to-b from-[#005c4b]/50 to-transparent hover:from-[#009c4d]/50 hover:to-yellow-500/50 transition-all duration-500 hover:-translate-y-2"
    }, s.createElement("div", {
        className: "bg-[#007a5e] h-full rounded-[23px] p-8 relative overflow-hidden shadow-lg"
    }, s.createElement("div", {
        className: "absolute -right-10 -top-10 w-32 h-32 bg-[#009174]/30 rounded-full blur-2xl group-hover:bg-[#009c4d]/40 transition-colors"
    }), s.createElement("div", {
        className: "w-16 h-16 bg-[#005c4b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-emerald-400/20 shadow-inner"
    }, s.createElement(e, {
        className: "text-emerald-100 w-8 h-8 group-hover:text-white transition-colors"
    })), s.createElement("h3", {
        className: "text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors"
    }, t), s.createElement("p", {
        className: "text-emerald-50 leading-relaxed text-sm font-medium"
    }, n)))
    , Zd = () => s.createElement("section", {
        id: "features",
        className: "py-24 bg-[#009174] relative overflow-hidden"
    }, s.createElement("div", {
        className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
    }), s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, s.createElement("div", {
        className: "text-center mb-16 relative z-10"
    }, s.createElement("h2", {
        className: "text-white/80 font-bold tracking-widest uppercase text-sm mb-3"
    }, "Premium Features"), s.createElement("h3", {
        className: "text-3xl md:text-5xl font-black text-white"
    }, "WHY WE ARE #1")), s.createElement("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    }, s.createElement(Dt, {
        icon: Hd,
        title: "Lightning Withdrawals",
        desc: "Automated payment processing system ensures your winnings hit your account in under 60 seconds."
    }), s.createElement(Dt, {
        icon: ic,
        title: "World-Class Security",
        desc: "ISO Certified RNG & 256-bit SSL encryption. Your data and money are safer than a bank vault."
    }), s.createElement(Dt, {
        icon: Ad,
        title: "24/7 VIP Concierge",
        desc: "Please contact our online customer service directly. We can resolve 95% of your issues within 2 minutes."
    }), s.createElement(Dt, {
        icon: uc,
        title: "Referral Empire",
        desc: "Earn up to ₹10,000 per referral. Build your passive income stream by inviting your jaiho slots circle."
    }), s.createElement(Dt, {
        icon: Ud,
        title: "Battery Optimized",
        desc: "Play for hours without draining your battery. Ultra-lightweight app designed for performance."
    }), s.createElement(Dt, {
        icon: ac,
        title: "Mega Tournaments",
        desc: "Hourly freerolls and mega jackpot tournaments. Compete with the best and win crores."
    }))))
    , Ot = ({ title: e, type: t, maxWin: n, volatility: r, image: l, badge: o }) => s.createElement("div", {
        className: "group relative bg-[#005c4b] rounded-xl overflow-hidden border border-emerald-400/20 hover:border-[#009c4d] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#009c4d]/30 flex flex-row h-44 shadow-md"
    }, s.createElement("div", {
        className: "w-5/12 relative overflow-hidden bg-[#005c4b] flex items-center justify-center"
    }, l && s.createElement("img", {
        src: l,
        alt: e,
        className: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
    }), !l && s.createElement("div", {
        className: "w-full h-full bg-gradient-to-br from-[#009174] to-[#009c4d] flex items-center justify-center"
    }, s.createElement(Id, {
        className: "text-white/20 w-12 h-12"
    })), o && s.createElement("div", {
        className: "absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm"
    }, o)), s.createElement("div", {
        className: "w-7/12 p-3 flex flex-col justify-between"
    }, s.createElement("div", null, s.createElement("h4", {
        className: "text-white font-bold text-lg leading-tight mb-2 line-clamp-1"
    }, e), s.createElement("div", {
        className: "grid grid-cols-2 gap-x-2 gap-y-3 mb-2"
    }, s.createElement("div", null, s.createElement("p", {
        className: "text-[10px] text-emerald-100/70 uppercase font-bold flex items-center gap-1"
    }, s.createElement(Od, {
        size: 10
    }), " Volatility"), s.createElement("p", {
        className: "text-xs text-white font-medium"
    }, r)), s.createElement("div", null, s.createElement("p", {
        className: "text-[10px] text-emerald-100/70 uppercase font-bold flex items-center gap-1"
    }, s.createElement(ac, {
        size: 10
    }), " Max Win"), s.createElement("p", {
        className: "text-xs text-white font-medium"
    }, n))), s.createElement("div", {
        className: "flex gap-0.5 mt-1"
    }, [1, 2, 3, 4, 5].map(i => s.createElement(Fd, {
        key: i,
        size: 12,
        className: "text-orange-500 fill-orange-500"
    })))), s.createElement("div", {
        className: "flex items-center justify-between mt-1"
    }, s.createElement("div", {
        className: "text-[10px] text-emerald-100/60 font-mono flex items-center gap-1"
    }, s.createElement(uc, {
        size: 10
    }), " 12k+"), s.createElement("a", {
        href: un,
        className: "bg-[#009c4d] hover:bg-[#00b057] text-white shadow-lg shadow-[#009c4d]/30 text-xs font-bold px-6 py-2 rounded-full transition-all hover:scale-105 active:scale-95 inline-block text-center",
        target: "_blank"
    }, "Join"))))
    , Jd = () => s.createElement("section", {
        id: "games",
        className: "py-24 bg-white relative"
    }, s.createElement("div", {
        className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
    }), s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    }, s.createElement("div", {
        className: "flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6"
    }, s.createElement("div", {
        className: "md:border-l-4 md:border-[#009c4d] md:pl-4 text-center md:text-left"
    }, s.createElement("h2", {
        className: "text-[#009c4d] font-bold tracking-widest uppercase text-sm mb-1"
    }, "Earn 9999 rupees daily by playing various popular games."), s.createElement("h3", {
        className: "text-4xl font-black text-slate-900"
    }, "Popular Games")), s.createElement("a", {
        href: un,
        className: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 text-slate-950 px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-1 flex items-center gap-2 border border-yellow-400/50 relative overflow-hidden group",
        target: "_blank"
    }, s.createElement("span", {
        className: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
    }), s.createElement(ol, {
        size: 18,
        className: "animate-pulse relative z-10"
    }), s.createElement("span", {
        className: "tracking-wide relative z-10 text-sm font-black"
    }, "DOWNLOAD APK"))), s.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6"
    }, s.createElement(Ot, {
        title: "Jungle Delight",
        volatility: "High",
        maxWin: "x5000",
        badge: "HOT",
        image: "assets/game-jungle.png"
    }), s.createElement(Ot, {
        title: "Aviator",
        volatility: "High",
        maxWin: "Unlimited",
        badge: "TRENDING",
        image: "assets/game-aviator.png"
    }), s.createElement(Ot, {
        title: "Chicken Road 2",
        volatility: "Medium",
        maxWin: "x2500",
        image: "assets/game-luffy2.png"
    }), s.createElement(Ot, {
        title: "Fortune Gems 500",
        volatility: "High",
        maxWin: "x10000",
        badge: "NEW",
        image: "assets/sjyx.png"
    }), s.createElement(Ot, {
        title: "Lucky 777",
        volatility: "Medium",
        maxWin: "x7777",
        image: "assets/Lucky777.png"
    }), s.createElement(Ot, {
        title: "Dragon Vs Tiger",
        volatility: "High",
        maxWin: "x10000",
        image: "assets/dragon-tige1r.png"
    }))))
    , qd = () => s.createElement("div", {
        className: "w-full bg-[#005C4B] border-y-4 border-yellow-500/50 py-6 px-2 shadow-2xl relative z-20"
    }, s.createElement("div", {
        className: "max-w-7xl mx-auto flex justify-center"
    }, s.createElement("img", {
        src: "assets/Banner_desktop.png",
        alt: "Special Offer",
        className: "hidden md:block w-full h-auto object-cover rounded-lg shadow-lg border border-white/10"
    }), s.createElement("img", {
        src: "assets/Banner_mobile.png",
        alt: "Special Offer",
        className: "block md:hidden w-full h-auto object-cover rounded-md shadow-lg border border-white/10"
    })))
    , bd = () => s.createElement("section", {
        id: "testimonials",
        className: "py-24 bg-slate-50 relative overflow-hidden"
    }, s.createElement("div", {
        className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-multiply"
    }), s.createElement("div", {
        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-100/50 rounded-full blur-[120px] pointer-events-none"
    }), s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    }, s.createElement("div", {
        className: "text-center mb-16"
    }, s.createElement("h3", {
        className: "text-3xl md:text-5xl font-black text-slate-900"
    }, "HALL OF FAME"), s.createElement("p", {
        className: "text-slate-500 mt-4"
    }, "Real players, real winnings.")), s.createElement("div", {
        className: "grid md:grid-cols-3 gap-8"
    }, [{
        name: "Rahul K.",
        loc: "Mumbai",
        win: "1.2 Lakhs",
        quote: "Fastest withdrawal I've ever seen. Money in bank in 30 seconds!",
        color: "from-yellow-300",
        img: "assets/761A7EFB.png"
    }, {
        name: "Priya S.",
        loc: "Bangalore",
        win: "45,000",
        quote: "The interface is so premium. Feels like playing in a real casino.",
        color: "from-purple-300",
        img: "assets/9B0DD21A.png"
    }, {
        name: "Amit V.",
        loc: "Delhi",
        win: "85,000",
        quote: "VIP support is actually VIP. They helped me instantly at 2 AM.",
        color: "from-green-300",
        img: "assets/936E3920.png"
    }].map((e, t) => s.createElement("div", {
        key: t,
        className: "relative group p-[1px] rounded-3xl bg-gradient-to-b from-emerald-100 to-transparent hover:from-emerald-200 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
    }, s.createElement("div", {
        className: "bg-[#005c4b] h-full rounded-[23px] p-8 relative overflow-hidden flex flex-col"
    }, s.createElement("div", {
        className: `absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${e.color} to-transparent opacity-80`
    }), s.createElement("div", {
        className: "flex gap-1 mb-6"
    }, [1, 2, 3, 4, 5].map(n => s.createElement(Wd, {
        key: n,
        size: 14,
        className: "text-yellow-400 fill-current"
    }))), s.createElement("p", {
        className: "text-emerald-50 italic mb-8 text-lg font-light leading-relaxed flex-grow"
    }, '"', e.quote, '"'), s.createElement("div", {
        className: "flex items-center gap-4 border-t border-white/20 pt-6 mt-auto"
    }, s.createElement("div", {
        className: "w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-white/50 to-transparent"
    }, s.createElement("div", {
        className: "w-full h-full rounded-full overflow-hidden bg-black/20"
    }, s.createElement("img", {
        src: e.img,
        alt: e.name,
        className: "w-full h-full object-cover",
        onError: n => {
            n.target.onerror = null,
                n.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white font-bold">${e.name.charAt(0)}</div>`
        }
    }))), s.createElement("div", null, s.createElement("h5", {
        className: "font-bold text-white text-lg"
    }, e.name), s.createElement("p", {
        className: "text-xs text-emerald-200 uppercase tracking-wider font-bold"
    }, e.loc)), s.createElement("div", {
        className: "ml-auto text-right"
    }, s.createElement("p", {
        className: "text-[10px] text-emerald-200 uppercase tracking-widest font-bold mb-0.5"
    }, "Won"), s.createElement("p", {
        className: "text-white font-black text-xl"
    }, "₹ ", e.win)))))))))
    , ep = () => s.createElement("footer", {
        className: "bg-[#004d40] text-emerald-100/70 pt-20 pb-10 border-t border-emerald-400/20"
    }, s.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    }, s.createElement("div", {
        className: "grid md:grid-cols-4 gap-12 mb-16"
    }, s.createElement("div", {
        className: "col-span-1 md:col-span-2"
    }, s.createElement("div", {
        className: "flex items-center gap-3 mb-6"
    }, s.createElement("img", {
        src: "assets/js_logo.png",
        alt: "Jaiho Slots Logo",
        className: "h-10 w-auto",
        onError: e => {
            e.target.onerror = null,
                e.target.src = "https://via.placeholder.com/50x50?text=JAIHO"
        }
    }), s.createElement("span", {
        className: "text-2xl font-bold text-white tracking-wide"
    }, "JAIHO", s.createElement("span", {
        className: "text-yellow-500"
    }, "SLOTS"))), s.createElement("p", {
        className: "mb-8 max-w-sm leading-relaxed text-emerald-100/60"
    }, "The gold standard in online real-money gaming. Fair play certified, secure, and built for champions."), s.createElement("div", {
        className: "flex gap-4"
    }, s.createElement("a", {
        href: "https://www.facebook.com/JaiHoSlotsOfficial",
        target: "_blank",
        className: "w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-emerald-400/20 overflow-hidden"
    }, s.createElement("img", {
        src: "assets/Fb.png",
        alt: "Facebook",
        className: "w-full h-full object-cover"
    })), s.createElement("a", {
        href: "https://t.me/JaiHoSlots",
        target: "_blank",
        className: "w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-emerald-400/20 overflow-hidden"
    }, s.createElement("img", {
        src: "assets/Tg.png",
        alt: "Telegram",
        className: "w-full h-full object-cover"
    })), s.createElement("a", {
        href: sc,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all border border-emerald-400/20 overflow-hidden"
    }, s.createElement("img", {
        src: "assets/CS.png",
        alt: "Support",
        className: "w-full h-full object-cover scale-75"
    })))), s.createElement("div", null, s.createElement("h4", {
        className: "text-white font-bold mb-6 tracking-wide uppercase text-sm"
    }, "Legal"), s.createElement("ul", {
        className: "space-y-3 text-sm font-medium"
    }, s.createElement("li", null, s.createElement("a", {
        href: "#",
        className: "hover:text-yellow-500 transition-colors"
    }, "Terms of Service")), s.createElement("li", null, s.createElement("a", {
        href: "#",
        className: "hover:text-yellow-500 transition-colors"
    }, "Privacy Policy")), s.createElement("li", null, s.createElement("a", {
        href: "#",
        className: "hover:text-yellow-500 transition-colors"
    }, "Fair Play Policy")), s.createElement("li", null, s.createElement("a", {
        href: "#",
        className: "hover:text-yellow-500 transition-colors"
    }, "Responsible Gaming")))), s.createElement("div", null, s.createElement("h4", {
        className: "text-white font-bold mb-6 tracking-wide uppercase text-sm"
    }, "Secure Payment"), s.createElement("div", {
        className: "grid grid-cols-3 gap-2"
    }, ["assets/B26B6BBB.png", "assets/239513C.png", "assets/B89814B2.png", "assets/ED6B310C.png", "assets/62D3E387.png", "assets/FD8E2BC9.png"].map((e, t) => s.createElement("div", {
        key: t,
        className: "flex items-center justify-center overflow-hidden h-10"
    }, s.createElement("img", {
        src: e,
        alt: "Payment",
        className: "h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
    })))), s.createElement("div", {
        className: "mt-8 p-4 bg-[#00695c]/30 border border-[#009c4d]/30 rounded-xl"
    }, s.createElement("h4", {
        className: "text-[#009c4d] font-bold mb-1 text-xs uppercase flex items-center gap-2"
    }, s.createElement(ic, {
        size: 14
    }), " 18+ Only"), s.createElement("p", {
        className: "text-[10px] text-emerald-100/60 leading-tight"
    }, "This game involves financial risk. Please play responsibly.")))), s.createElement("div", {
        className: "border-t border-emerald-400/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-emerald-100/50"
    }, s.createElement("p", null, "© 2025 Jaiho Slots. All rights reserved."), s.createElement("p", null, "Crafted for Legends."))))
    , tp = () => {
        const [e, t] = fe.useState(!1)
            , [n, r] = fe.useState(!1);
        fe.useEffect(() => {
            const o = () => {
                t(window.scrollY > 20)
            }
                ;
            return window.addEventListener("scroll", o),
                () => window.removeEventListener("scroll", o)
        }
            , []);
        const l = () => r(!n);
        return s.createElement("div", {
            className: "font-sans antialiased text-emerald-100 bg-[#00241d] selection:bg-yellow-500 selection:text-black"
        }, s.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap');
        :root {
          font-family: 'Titillium Web', sans-serif;
        }
        body, .font-sans {
          font-family: 'Titillium Web', sans-serif;
        }
      `), s.createElement($d, {
            isScrolled: e,
            toggleMenu: l,
            isMenuOpen: n
        }), s.createElement(Qd, null), s.createElement("main", null, s.createElement(Kd, null), s.createElement(Gd, null), s.createElement(Yd, null), s.createElement(Jd, null), s.createElement(qd, null), s.createElement(Xd, null), s.createElement(Zd, null), s.createElement(bd, null), s.createElement("section", {
            className: "py-20 relative overflow-hidden"
        }, s.createElement("div", {
            className: "absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600"
        }), s.createElement("div", {
            className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"
        }), s.createElement("div", {
            className: "max-w-4xl mx-auto px-4 text-center relative z-10"
        }, s.createElement("h2", {
            className: "text-4xl md:text-6xl font-black text-slate-950 mb-8 tracking-tight"
        }, "READY TO BE THE BOSS?"), s.createElement("p", {
            className: "text-slate-900/80 text-xl mb-10 font-bold max-w-2xl mx-auto"
        }, "Download the app now and claim your exclusive ₹500 Welcome Bonus + 100% Cash Back on first deposit!"), s.createElement("a", {
            href: un,
            className: "bg-gradient-to-r from-slate-900 to-slate-950 hover:from-slate-800 hover:to-slate-900 text-white px-10 py-5 rounded-full font-black text-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(0,0,0,0.7)] hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto border-2 border-white/10 relative overflow-hidden group min-w-[280px]",
            target: "_blank"
        }, s.createElement("span", {
            className: "absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        }), s.createElement(ol, {
            className: "w-7 h-7 relative z-10"
        }), s.createElement("span", {
            className: "relative z-10"
        }, "DOWNLOAD APK"))))), s.createElement(ep, null), s.createElement("div", {
            className: "fixed bottom-0 w-full bg-[#00241d]/90 backdrop-blur-xl p-4 border-t border-emerald-400/20 md:hidden z-50 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.5)] safe-area-bottom"
        }, s.createElement("div", null, s.createElement("p", {
            className: "text-white font-black text-sm tracking-wide"
        }, "JAIHO SLOTS"), s.createElement("p", {
            className: "text-yellow-400 text-xs font-bold animate-pulse"
        }, "Get ₹500 Bonus")), s.createElement("a", {
            href: un,
            className: "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-slate-950 px-8 py-2.5 rounded-xl font-black text-sm shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-0.5 inline-block text-center",
            target: "_blank"
        }, "DOWNLOAD APK")))
    }
    ;
Zl.createRoot(document.getElementById("root")).render(s.createElement(s.StrictMode, null, s.createElement(tp, null)));
