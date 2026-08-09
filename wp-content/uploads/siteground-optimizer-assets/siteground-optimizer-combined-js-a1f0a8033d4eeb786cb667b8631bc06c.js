/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+o[a] < +n[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.1";
        var t = Object.create(null);
        s.migrateDisablePatches = function() {
            for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
        }, s.migrateEnablePatches = function() {
            for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
        }, s.migrateIsPatchEnabled = function(e) {
            return !t[e]
        }, n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var o = {};

        function u(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n, o), r
                },
                set: function(e) {
                    u(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && u(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function c(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            return a(e, t, r, n, o), 0
        }

        function i(e, t, r, n) {
            return a(e, t, r, n), 0
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
        var d, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        for (d in i(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, i(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
        c(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), c(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && c(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "$1")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (c(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (c(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), c(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), c(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), c(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, i(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function x(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        i(s.fn, "removeAttr", function(e) {
            var r = this,
                n = !1;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && r.each(function() {
                    if (!1 !== s(this).prop(t)) return !(n = !0)
                }), n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), i(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var Q, A, R = !1,
            C = /^[a-z]/,
            N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return R = !0, e = r.apply(this, arguments), R = !1, e
            })
        }), i(s, "swap", function(e, t, r, n) {
            var o, a, i = {};
            for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"), t) i[a] = e.style[a], e.style[a] = t[a];
            for (a in o = r.apply(e, n || []), t) e.style[a] = i[a];
            return o
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") ? (A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A, {
            get: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return u("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        }) : s.cssNumber = A) : A = s.cssNumber, Q = s.fn.css, i(s.fn, "css", function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = x(e), n = r, C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        }, "css-number");
        var S, P, k, H, E = s.data;
        i(s, "data", function(e, t, r) {
            var n, o, a;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (a in n = s.hasData(e) && E.call(this, e), o = {}, t) a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                return E.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : E.apply(this, arguments)
        }, "data-camelCase"), s.fx && (k = s.Tween.prototype.run, H = function(e) {
            return e
        }, i(s.Tween.prototype, "run", function() {
            1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = H), k.apply(this, arguments)
        }, "easing-one-arg"), S = s.fx.interval, P = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u("fx-interval", P), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
            },
            set: function(e) {
                u("fx-interval", P), S = e
            }
        }));
        var M = s.fn.load,
            q = s.event.add,
            O = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), i(s.event, "fix", function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = O.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, "event-old-patch"), i(s.event, "add", function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), q.apply(this, arguments)
        }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
            i(s.fn, t, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }, "shorthand-removed-v3")
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            c(s.fn, r, function(e, t) {
                return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("ready-event", "'ready' event is deprecated")
            }
        }, c(s.fn, "bind", function(e, t, r) {
            return this.on(e, null, t, r)
        }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), c(s.fn, "unbind", function(e, t) {
            return this.off(e, null, t)
        }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), c(s.fn, "delegate", function(e, t, r, n) {
            return this.on(t, e, r, n)
        }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), c(s.fn, "undelegate", function(e, t, r) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
        }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), c(s.fn, "hover", function(e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e)
        }, "pre-on-methods", "jQuery.fn.hover() is deprecated");

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.migrateEnablePatches("self-closed-tags")
        }, i(s, "htmlPrefilter", function(e) {
            var t, r;
            return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(F, "<$1></$2>")
        }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags");
        var D, W, _, I = s.fn.offset;
        return i(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (D = s.param, i(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        }, "param-ajax-traditional")), c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (W = s.Deferred, _ = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], i(s, "Deferred", function(e) {
            var a = W(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(_, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = W.exceptionHook), s
    });;
// const burger = document.querySelector('.burger');
// const header = document.querySelector('header');

// burger.addEventListener('click', () => {
// 	header.classList.toggle('active-menu');
// });;
/*!
 * GSAP 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && Pe
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i););
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new qt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Mt(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ma() {
        var t, e, r = ct.length,
            i = ct.slice(0);
        for (dt = {}, t = ct.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t, e, r, i) {
        ct.length && !B && ma(), t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)), ct.length && !B && ma()
    }

    function oa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function pa(t) {
        return t
    }

    function qa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ta(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ua(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function va(t) {
        var e = t.parent || L,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }(Z(t.keyframes)) : qa;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function xa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function ya(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function za(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function Aa(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ca(t, e, r, i) {
        return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Ea(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ga(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ha(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0))
    }

    function Ia(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
    }

    function Ja(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e), (!e._dur || Ot(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -X
        }
    }

    function Ka(e, r, i, n) {
        return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
    }

    function La(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Ma(t, e, r, i, n) {
        return Kt(t, e, n), t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Ra(t, e, r, i) {
        var n = t._repeat,
            a = ja(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
    }

    function Sa(t) {
        return t instanceof Xt ? Aa(t) : Ra(t, t._dur)
    }

    function Va(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Jt(r[0], u, r[1 + o])
    }

    function Wa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Ya(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function _a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function cb(r) {
        return r = Mt(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Mt(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function db(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function eb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = jt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                    d = y[c];
                if (!d) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                        for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                        f--
                    }
                    for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Yt(_) : _
                }
                return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u
            }
    }

    function fb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
        }
    }

    function gb(h, e) {
        var l, f, r = Z(h);
        return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Mt(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
        } : fb(h))
    }

    function hb(t, e, r, i) {
        return Wa(Z(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return Z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function lb(e, r, t) {
        return Wa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function ob(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function rb(t, e, r) {
        var i, n, a, s = t.labels,
            o = U;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function tb(t) {
        return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!B), t.progress() < 1 && St(t, "onInterrupt"), t
    }

    function wb(t) {
        if (x()) {
            var e = (t = !t.name && t.default || t).name,
                r = s(t),
                i = e && !r && t.init ? function() {
                    this._props = []
                } : t,
                n = {
                    init: T,
                    render: fe,
                    add: Qt,
                    kill: _e,
                    modifier: pe,
                    rawVars: 0
                },
                a = {
                    targetTest: 0,
                    get: 0,
                    getSetter: re,
                    aliases: {},
                    register: 0
                };
            if (Ft(), t !== i) {
                if (pt[e]) return;
                qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            S(e, i), t.register && t.register(Pe, i, ge)
        } else Ct.push(t)
    }

    function zb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0
    }

    function Ab(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & Pt, e & Pt] : 0 : Dt.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Dt[e]) p = Dt[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Pt, p & Pt, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Pt, e & Pt]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = zb(o + 1 / 3, n, a), p[1] = zb(o, n, a), p[2] = zb(o - 1 / 3, n, a);
            else p = e.match(tt) || Dt.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / Pt, a = p[1] / Pt, s = p[2] / Pt, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Bb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(Et).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Cb(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(Et),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = Ab(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = Bb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(Et, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(Et)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Fb(t) {
        var e, r = t.join(" ");
        if (Et.lastIndex = 0, Et.test(r)) return e = zt.test(r), t[1] = Cb(t[1], e), t[0] = Cb(t[0], e, Bb(t[1])), !0
    }

    function Ob(t) {
        var e = (t + "").split("("),
            r = It[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Lt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(oa)) : It._CE && Bt.test(t) ? It._CE("", t) : r
    }

    function Qb(t, e) {
        for (var r, i = t._first; i;) i instanceof Xt ? Qb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Qb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Sb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in It[t] = ot[t] = a, It[n = t.toLowerCase()] = r, a) It[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = It[t + "." + e] = a[e]
        }), a
    }

    function Tb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Ub(r, t, e) {
        function Im(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * H((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / N * (Math.asin(1 / i) || 0),
            s = "out" === r ? Im : "in" === r ? function(t) {
                return 1 - Im(1 - t)
            } : Tb(Im);
        return n = N / n, s.config = function(t, e) {
            return Ub(r, t, e)
        }, s
    }

    function Vb(e, r) {
        function Qm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Qm : "in" === e ? function(t) {
            return 1 - Qm(1 - t)
        } : Tb(Qm);
        return t.config = function(t) {
            return Vb(e, t)
        }, t
    }
    var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, O, k, M, A, C, D, E, z, F, Y, j, V = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        q = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        U = 1e8,
        X = 1 / U,
        N = 2 * Math.PI,
        W = N / 4,
        K = 0,
        G = Math.sqrt,
        $ = Math.cos,
        H = Math.sin,
        J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Z = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ht = {
            suppressEvents: !0,
            kill: !1
        },
        lt = {
            suppressEvents: !0
        },
        ft = {},
        ct = [],
        dt = {},
        pt = {},
        _t = {},
        mt = 30,
        gt = [],
        vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Tt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        wt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || wt,
                h = t.duration() >= U ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (Z(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        Ot = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        kt = [].slice,
        Mt = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? Z(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || _a(t, 1) ? i.push.apply(i, Mt(t)) : i.push(t)
                }) || i
            }(t, i) : _a(t) ? kt.call(t, 0) : t ? [t] : [] : kt.call((e || a).querySelectorAll(t), 0)
        },
        At = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Wa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        St = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = [],
        Pt = 255,
        Dt = {
            aqua: [0, Pt, Pt],
            lime: [0, Pt, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Pt],
            navy: [0, 0, 128],
            white: [Pt, Pt, Pt],
            olive: [128, 128, 0],
            yellow: [Pt, Pt, 0],
            orange: [Pt, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Pt, 0, 0],
            pink: [Pt, 192, 203],
            cyan: [0, Pt, Pt],
            transparent: [Pt, Pt, Pt, 0]
        },
        Et = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Dt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        zt = /hsl[a]?\(/,
        Rt = (k = Date.now, M = 500, A = 33, C = k(), D = C, z = E = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                xl(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Pe, (h.gsapVersions || (h.gsapVersions = [])).push(Pe.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame, Ct.forEach(wb)), p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, z - 1e3 * g.time + 1 | 0)
                }, d = 1, xl(2))
            },
            sleep: function sleep() {
                (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                M = t || 1 / 0, A = Math.min(e || 33, M)
            },
            fps: function fps(t) {
                E = 1e3 / (t || 240), z = 1e3 * g.time + E
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), F[e ? "unshift" : "push"](a), Ft(), a
            },
            remove: function remove(t, e) {
                ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= O && O--
            },
            _listeners: F = []
        }),
        Ft = function _wake() {
            return !d && Rt.wake()
        },
        It = {},
        Bt = /^[\d.\-M][\d.\-,\s]/,
        Lt = /["']/g,
        Yt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        jt = function _parseEase(t, e) {
            return t && (s(t) ? t : It[t] || Ob(t)) || e
        };

    function xl(t) {
        var e, r, i, n, a = k() - D,
            s = !0 === t;
        if (M < a && (C += a - A), (0 < (e = (i = (D += a) - C) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(xl)), r)
            for (O = 0; O < F.length; O++) F[O](i, b, n, t)
    }

    function fn(t) {
        return t < j ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Sb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), It.Linear.easeNone = It.none = It.Linear.easeIn, Sb("Elastic", Ub("in"), Ub("out"), Ub()), Y = 7.5625, j = 1 / 2.75, Sb("Bounce", function(t) {
        return 1 - fn(1 - t)
    }, fn), Sb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Sb("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }), Sb("Sine", function(t) {
        return 1 === t ? 1 : 1 - $(t * W)
    }), Sb("Back", Vb("in"), Vb("out"), Vb()), It.SteppedEase = It.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Ot(0, .99999999, t) | 0) + n) * r
            }
        }
    }, q.ease = It["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Vt, qt = function GSCache(t, e) {
            this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : re
        },
        Ut = ((Vt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Vt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Vt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Vt.totalTime = function totalTime(t, e) {
            if (Ft(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
        }, Vt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Vt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Vt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Vt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
        }, Vt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -X ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, this.totalTime(Ot(-Math.abs(this._delay), this._tDur, e), !0), Ha(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Vt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps
        }, Vt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
            }
            return this._start
        }, Vt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Vt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
        }, Vt.revert = function revert(t) {
            void 0 === t && (t = lt);
            var e = B;
            return B = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), B = e, this
        }, Vt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
        }, Vt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Vt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Sa(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Vt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Vt.seek = function seek(t, e) {
            return this.totalTime(xt(this, t), w(e))
        }, Vt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e))
        }, Vt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Vt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Vt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Vt.resume = function resume() {
            return this.paused(!1)
        }, Vt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0
        }, Vt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -X, this
        }, Vt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X))
        }, Vt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Vt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function Ao() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : pa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Ao() : i._prom = Ao
            })
        }, Vt.kill = function kill() {
            tb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Rt.wake()
    }
    qa(Ut.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -X,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Xt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), L && Ka(t.parent || L, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Va(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Va(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Va(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ka(this, Jt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ja(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== L && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && this._tTime - c * o - this._dur <= 0 && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                        var T = d && 1 & c,
                            b = T === (d && 1 & s);
                        if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && St(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Qb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && !s && (St(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -X);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -X : X);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
                this._onUpdate && !e && St(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (St(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof Ut)) {
                if (Z(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = Jt.delayedCall(0, e)
            }
            return this !== e ? Ka(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Jt.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Nt !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Mt(e), s = this._first, o = t(r); s;) s instanceof Jt ? la(s._targets, a) && (o ? (!Nt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = xt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Jt.to(i, qa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, qa({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return Aa(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = U;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Ra(a, a === L && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (L._ts && (na(L, Ga(t, L)), f = Rt.frame), Rt.frame >= mt) {
                mt += V.autoSleep || 120;
                var e = L._first;
                if ((!e || !e._ts) && V.autoSleep && Rt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Rt.sleep()
                }
            }
        }, Timeline
    }(Ut);
    qa(Xt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function ac(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || Z(t) || J(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new ge(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function gc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (Z(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Nt, Wt, Qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var c, d = t[e],
                p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = s(d) ? l ? ee : te : Zt;
            if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new ge(this._pt, t, e, 0, 1, le, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new ge(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? oe : se, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
        },
        Kt = function _initTween(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                x = m.onUpdateParams,
                O = m.callbackScope,
                k = m.runBackwards,
                M = m.yoyoEase,
                A = m.keyframes,
                S = m.autoRevert,
                C = t._dur,
                P = t._startAt,
                D = t._targets,
                E = t.parent,
                z = E && "nested" === E.data ? E.vars.targets : D,
                R = "auto" === t._overwrite && !I,
                F = t.timeline;
            if (!F || A && g || (g = "none"), t._ease = jt(g, q.ease), t._yEase = M ? Yt(jt(!0 === M ? g : M, q.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), t._from = !F && !!m.runBackwards, !F || A && !m.stagger) {
                if (p = (l = D[0] ? fa(D[0]).harness : 0) && m[l.prop], i = ua(m, ft), P && (P._zTime < 0 && P.progress(1), e < 0 && k && y && !S ? P.render(-1, !0) : P.revert(k && C ? ht : ut), P._lazy = 0), v) {
                    if (za(t._startAt = Jt.set(D, qa({
                            data: "isStart",
                            overwrite: !1,
                            parent: E,
                            immediateRender: !0,
                            lazy: !P && w(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: x,
                            callbackScope: O,
                            stagger: 0
                        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B || !y && !S) && t._startAt.revert(ht), y && C && e <= 0 && r <= 0) return void(e && (t._zTime = e))
                } else if (k && C && !P)
                    if (e && (y = !1), a = qa({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !P && w(T),
                            immediateRender: y,
                            stagger: 0,
                            parent: E
                        }, i), p && (a[l.prop] = p), za(t._startAt = Jt.set(D, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                        if (!e) return
                    } else _initTween(t._startAt, X, X);
                for (t._pt = t._ptCache = 0, T = C && w(T) || T && !C, n = 0; n < D.length; n++) {
                    if (h = (o = D[n])._gsap || ea(D)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = z === D ? n : z.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, d, z) && (t._pt = s = new ge(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            c[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) pt[a] && (f = ac(a, i, t, d, o, z)) ? f.priority && (u = 1) : c[a] = s = Qt.call(t, o, a, "get", i[a], d, z, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), R && t._pt && (Nt = t, L.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Nt = 0), t._pt && T && (dt[h.id] = 1)
                }
                u && me(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, A && e <= 0 && F.render(U, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
        },
        $t = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ht = {};
    ha($t + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ht[t] = 1
    });
    var Jt = function(z) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                O = p.defaults,
                k = p.scrollTrigger,
                M = p.yoyoEase,
                A = r.parent || L,
                S = (Z(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Mt(e);
            if (a._targets = S.length ? ea(S) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Xt({
                        data: "nested",
                        defaults: O || {},
                        targets: A && "nested" === A.data ? A.vars.targets : S
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = S.length, c = T && eb(T), v(T))
                        for (l in T) ~$t.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = ua(r, Ht)).stagger = 0, M && (u.yoyoEase = M), d && yt(u, d), f = S[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, S), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, S) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, S) : 0), s._ease = It.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    va(qa(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = jt(x.ease || r.ease || "none");
                    var C, P, D, E = 0;
                    if (Z(x)) x.forEach(function(t) {
                        return s.to(S, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || gc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (C = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = E = 0; o < C.length; o++)(D = {
                                ease: (P = C[o]).e,
                                duration: (P.t - (o ? C[o - 1].t : 0)) / 100 * _
                            })[l] = P.v, s.to(S, D, E), E += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || I || (Nt = _assertThisInitialized(a), L.killTweensOf(S), Nt = 0), Ka(A, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(A._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -X, a.render(Math.max(0, -m) || 0)), k && La(_assertThisInitialized(a), k), a
        }
        _inheritsLoose(Tween, z);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time,
                d = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = d - X < t && !_ ? d : t < X ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Qb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (c !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && !a && (St(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), St(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && St(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (St(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = Ot(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || B || i || t._zTime === X || !e && t._zTime) {
                    if (!t._initted && Ma(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && St(t, "onUpdate"), l && t._repeat && !r && t.parent && St(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || B || (St(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i) {
            d || Rt.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Kt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                            if ((o = h[l][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                            if (!o) return Wt = 1, t.vars[e] = "+=0", Kt(t, s), Wt = 0, 1;
                            f.push(o)
                        }
                    for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Nt && !0 !== Nt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                c = t ? Mt(t) : f,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), tb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = yt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && tb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Va(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Va(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return L.killTweensOf(t, e, r)
        }, Tween
    }(Ut);
    qa(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Jt[r] = function() {
            var t = new Xt,
                e = kt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function oc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function wc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Zt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        te = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        ee = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        re = function _getSetter(t, e) {
            return s(t[e]) ? te : u(t[e]) && t.setAttribute ? oc : Zt
        },
        se = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        oe = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        le = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        fe = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        pe = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        _e = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        me = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ge = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = wc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || se, this.d = s || this, this.set = o || Zt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Xt, L = new Xt({
        sortChildren: !1,
        defaults: q,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), V.stringFilter = Fb;

    function Dc(t) {
        return (be[t] || xe).map(function(t) {
            return t()
        })
    }

    function Ec() {
        var t = Date.now(),
            o = [];
        2 < t - Oe && (Dc("matchMediaInit"), Te.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Dc("matchMediaRevert"), o.forEach(function(t) {
            return t.onMatch(t)
        }), Oe = t, Dc("matchMedia"))
    }
    var ye, Te = [],
        be = {},
        xe = [],
        Oe = 0,
        Me = ((ye = Context.prototype).add = function add(t, i, n) {
            function Dw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = Dw, t === s ? Dw(a) : t ? a[t] = Dw : Dw
        }, ye.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ye.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Jt && !(t.parent && "nested" === t.parent.data) && e.push(t)
            }), e
        }, ye.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ye.kill = function kill(e, t) {
            var r = this;
            if (e) {
                var i = this.getTweens();
                this.data.forEach(function(t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                        return i.splice(i.indexOf(t), 1)
                    }))
                }), i.map(function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1
                }).forEach(function(t) {
                    return t.t.revert(e)
                }), this.data.forEach(function(t) {
                    return !(t instanceof Ut) && t.revert && t.revert(e)
                }), this._r.forEach(function(t) {
                    return t(e, r)
                }), this.isReverted = !0
            } else this.data.forEach(function(t) {
                return t.kill && t.kill()
            });
            if (this.clear(), t) {
                var n = Te.indexOf(this);
                ~n && Te.splice(n, 1)
            }
        }, ye.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }
    var Ae, Se = ((Ae = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Me(0, r || this.scope),
            o = s.conditions = {};
        for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (Te.indexOf(s) < 0 && Te.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Ec) : i.addEventListener("change", Ec));
        return a && e(s), this
    }, Ae.revert = function revert(t) {
        this.kill(t || {})
    }, Ae.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t
    }
    var Ce = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return wb(t)
            })
        },
        timeline: function timeline(t) {
            return new Xt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return L.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Mt(i)[0]);
            var a = fa(i || {}).get,
                s = e ? pa : oa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Mt(r)).length) {
                var n = r.map(function(t) {
                        return Pe.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e],
                o = fa(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && fe(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Vx(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Pe.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return Vx.tween = n, Vx
        },
        isTweening: function isTweening(t) {
            return 0 < L.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = jt(t.ease, q.ease)), ta(q, t || {})
        },
        config: function config(t) {
            return ta(V, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function(t, e, r) {
                return n(Mt(t), qa(e || {}, a), r)
            }, r && (Xt.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            It[t] = jt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? jt(t, e) : It
        },
        getById: function getById(t) {
            return L.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Xt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r;) i = r._next, !e && !r._dur && r instanceof Jt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
            return Ka(L, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Me(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Se(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return Te.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Ec()
        },
        addEventListener: function addEventListener(t, e) {
            var r = be[t] || (be[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = be[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return Z(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return Z(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: eb,
            random: hb,
            snap: gb,
            normalize: function normalize(t, e, r) {
                return At(t, e, 0, 1, r)
            },
            getUnit: Ya,
            clamp: function clamp(e, r, t) {
                return Wa(t, function(t) {
                    return Ot(e, r, t)
                })
            },
            splitColor: Ab,
            toArray: Mt,
            selector: cb,
            mapRange: At,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Ya(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        c = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Z(e) && !Z(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt(Z(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Qt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return fe(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Wa(t, a)
            },
            shuffle: db
        },
        install: P,
        effects: _t,
        ticker: Rt,
        updateRoot: Xt.updateRoot,
        plugins: pt,
        globalTimeline: L,
        core: {
            PropTween: ge,
            globals: S,
            Tween: Jt,
            Timeline: Xt,
            Animation: Ut,
            getCache: fa,
            _removeLinkedListItem: ya,
            reverting: function reverting() {
                return B
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return I = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Ce[t] = Jt[t]
    }), Rt.add(Xt.updateRoot), c = Ce.to({}, {
        duration: 0
    });

    function Ic(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Ic(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Pe = Ce.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Kc("roundProps", fb), Kc("modifiers"), Kc("snap", gb)) || Ce;
    Jt.version = Xt.version = Pe.version = "3.11.5", o = 1, x() && Ft();

    function ud(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function vd(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function wd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function xd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function yd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function zd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Ad(t, e, r) {
        return t.style[e] = r
    }

    function Bd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Cd(t, e, r) {
        return t._gsap[e] = r
    }

    function Dd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Ed(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Fd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Id(t, e) {
        var r = this,
            i = this.target,
            n = i.style;
        if (t in nr) {
            if (this.tfm = this.tfm || {}, "transform" === t) return fr.transform.split(",").forEach(function(t) {
                return Id.call(r, t, e)
            });
            if (~(t = fr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return r.tfm[t] = vr(i, t)
                }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : vr(i, t), 0 <= this.props.indexOf(cr)) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(dr, e, "")), t = cr
        }(n || e) && this.props.push(t, e, n[t])
    }

    function Jd(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Kd() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ur, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Be()) && t.isStart || n[cr] || (Jd(n), a.uncache = 1)
        }
    }

    function Ld(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Kd,
            save: Id
        };
        return t._gsap || Pe.core.getCache(t), e && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Nd(t, e) {
        var r = Ee.createElementNS ? Ee.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ee.createElement(t);
        return r.style ? r : Ee.createElement(t)
    }

    function Od(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(ur, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Od(t, _r(e) || e, 1) || ""
    }

    function Rd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (De = window, Ee = De.document, ze = Ee.documentElement, Fe = Nd("div") || {
            style: {}
        }, Nd("div"), cr = _r(cr), dr = cr + "Origin", Fe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Le = !!_r("perspective"), Be = Pe.core.reverting, Re = 1)
    }

    function Sd(t) {
        var e, r = Nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (ze.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Sd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ze.removeChild(r), this.style.cssText = a, e
    }

    function Td(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Ud(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Sd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Sd || (r = Sd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Td(e, ["x", "cx", "x1"]) || 0,
            y: +Td(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Vd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ud(t))
    }

    function Wd(t, e) {
        if (e) {
            var r = t.style;
            e in nr && e !== dr && (e = cr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ur, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Xd(t, e, r, i, n, a) {
        var s = new ge(t._pt, e, r, 0, 1, a ? zd : yd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function $d(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Fe.style,
            f = hr.test(e),
            c = "svg" === t.tagName.toLowerCase(),
            d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        return i === h || !u || mr[i] || mr[h] ? u : ("px" === h || p || (u = $d(t, e, r, "px")), o = t.getCTM && Vd(t), !_ && "%" !== h || !nr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ee && a.appendChild || (a = Ee.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || gr[Od(a, "display")] || (l.position = Od(t, "position")), a === t && (l.position = "static"), a.appendChild(Fe), n = Fe[d], a.removeChild(Fe), l.position = "absolute", f && _ && ((s = fa(a)).time = Rt.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)))
    }

    function ae(t, e, r, i) {
        if (!r || "none" === r) {
            var n = _r(e, t, 1),
                a = n && Od(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Od(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new ge(this._pt, t.style, e, 0, 1, le),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Od(t, e) || i, t.style[e] = r), Fb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = $d(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? zd : yd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ce(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = yr[r] || r, e[1] = yr[i] || i, e.join(" ")
    }

    function de(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], nr[r] && (i = 1, r = "transformOrigin" === r ? dr : cr), Wd(a, r);
            i && (Wd(a, cr), u && (u.svg && a.removeAttribute("transform"), xr(a, 1), u.uncache = 1, Jd(s)))
        }
    }

    function he(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ie(t) {
        var e = Od(t, cr);
        return he(e) ? br : e.substr(7).match(et).map(ia)
    }

    function je(t, e) {
        var r, i, n, a, s = t._gsap || fa(t),
            o = t.style,
            u = ie(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? br : u : (u !== br || t.offsetParent || t === ze || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, ze.appendChild(t)), u = ie(t), n ? o.display = n : Wd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ze.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function ke(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || je(t, !0),
            f = h.xOrigin || 0,
            c = h.yOrigin || 0,
            d = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== br && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Ud(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[dr] = "0px 0px", a && (Xd(a, h, "xOrigin", f, w), Xd(a, h, "yOrigin", c, x), Xd(a, h, "xOffset", d, h.xOffset), Xd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function ne(t, e, r) {
        var i = Ya(e);
        return ia(parseFloat(e) + parseFloat($d(t, "x", r + "px", i))) + i
    }

    function ue(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? ar : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new ge(t._pt, e, i, n, l, vd), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function ve(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function we(t, e, r) {
        var i, n, a, s, o, u, h, l = ve({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[cr] = e, i = xr(r, 1), Wd(r, cr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[cr], f[cr] = e, i = xr(r, 1), f[cr] = a), nr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? $d(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ge(t._pt, i, n, o, u - o, ud), t._pt.u = h || 0, t._props.push(n));
        ve(i, l)
    }
    var De, Ee, ze, Re, Fe, Ie, Be, Le, Ye = It.Power0,
        Ve = It.Power1,
        qe = It.Power2,
        Ue = It.Power3,
        Xe = It.Power4,
        Ne = It.Linear,
        We = It.Quad,
        Qe = It.Cubic,
        Ke = It.Quart,
        Ge = It.Quint,
        $e = It.Strong,
        He = It.Elastic,
        Je = It.Back,
        Ze = It.SteppedEase,
        tr = It.Bounce,
        er = It.Sine,
        rr = It.Expo,
        ir = It.Circ,
        nr = {},
        ar = 180 / Math.PI,
        sr = Math.PI / 180,
        or = Math.atan2,
        ur = /([A-Z])/g,
        hr = /(left|right|width|margin|padding|x)/i,
        lr = /[\s,\(]\S/,
        fr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        cr = "transform",
        dr = cr + "Origin",
        pr = "O,Moz,ms,Ms,Webkit".split(","),
        _r = function _checkPropPrefix(t, e, r) {
            var i = (e || Fe).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(pr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? pr[n] : "") + t
        },
        mr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        gr = {
            grid: 1,
            flex: 1
        },
        vr = function _get(t, e, r, i) {
            var n;
            return Re || Rd(), e in fr && "transform" !== e && ~(e = fr[e]).indexOf(",") && (e = e.split(",")[0]), nr[e] && "transform" !== e ? (n = xr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Or(Od(t, dr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Tr[e] && Tr[e](t, e, r) || Od(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? $d(t, e, n, r) + r : n
        },
        yr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Tr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ge(t._pt, e, r, 0, 0, de);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        br = [1, 0, 0, 1, 0, 0],
        wr = {},
        xr = function _parseTransform(t, e) {
            var r = t._gsap || new qt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, O, k, M, A, S, C, P, D, E, z, R, F = t.style,
                I = r.scaleX < 0,
                B = "deg",
                L = getComputedStyle(t),
                Y = Od(t, dr) || "0";
            return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Vd(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[cr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[cr] ? L[cr] : "")), F.scale = F.rotate = F.translate = "none"), m = je(t, r.svg), r.svg && (M = r.uncache ? (A = t.getBBox(), Y = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), ke(t, M || Y, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== br && (T = m[0], b = m[1], w = m[2], x = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? or(b, T) * ar : 0, (f = w || x ? or(w, x) * ar + u : 0) && (o *= Math.abs(Math.cos(f * sr))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], E = m[7], C = m[8], P = m[9], D = m[10], z = m[11], i = m[12], n = m[13], a = m[14], h = (g = or(R, D)) * ar, g && (M = O * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), A = k * v + P * y, S = R * v + D * y, C = O * -y + C * v, P = k * -y + P * v, D = R * -y + D * v, z = E * -y + z * v, O = M, k = A, R = S), l = (g = or(-w, D)) * ar, g && (v = Math.cos(-g), z = x * (y = Math.sin(-g)) + z * v, T = M = T * v - C * y, b = A = b * v - P * y, w = S = w * v - D * y), u = (g = or(b, T)) * ar, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), A = O * v + k * y, b = b * v - T * y, k = k * v - O * y, T = M, O = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(k * k + R * R)), g = or(O, k), f = 2e-4 < Math.abs(g) ? g * ar : 0, d = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !he(Od(t, cr)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + B, r.rotationX = ia(h) + B, r.rotationY = ia(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[dr] = Or(Y)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Le ? Cr : kr, r.uncache = 0, r
        },
        Or = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        kr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Cr(t, e)
        },
        Mr = "0deg",
        Ar = "0px",
        Sr = ") ",
        Cr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                d = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Mr || h !== Mr)) {
                var b, w = parseFloat(h) * sr,
                    x = Math.sin(w),
                    O = Math.cos(w);
                w = parseFloat(l) * sr, b = Math.cos(w), a = ne(g, a, x * b * -v), s = ne(g, s, -Math.sin(w) * -v), o = ne(g, o, O * b * -v + v)
            }
            _ !== Ar && (y += "perspective(" + _ + Sr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ar && s === Ar && o === Ar || (y += o !== Ar || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Sr), u !== Mr && (y += "rotate(" + u + Sr), h !== Mr && (y += "rotateY(" + h + Sr), l !== Mr && (y += "rotateX(" + l + Sr), f === Mr && c === Mr || (y += "skew(" + f + ", " + c + Sr), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Sr), g.style[cr] = y || "translate(0, 0)"
        },
        Pr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                d = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                O = parseFloat(f);
            c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= sr, d *= sr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= sr, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = $d(g, "x", l, "px"), O = $d(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), O = ia(O + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), O = ia(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[cr] = s)
        };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        Tr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return vr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Dr, Er, zr, Rr = {
        name: "css",
        register: Rd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                O = i.vars.startAt;
            for (c in Re || Rd(), this.styles = this.styles || Ld(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== c && (o = e[c], !pt[c] || !ac(c, e, i, n, t, a)))
                    if (l = typeof o, f = Tr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Et.lastIndex = 0, Et.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = $d(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);
            else if ("undefined" !== l) {
                if (O && c in O ? (s = "function" == typeof O[c] ? O[c].call(i, n, t, a) : O[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += V.units[c] || Ya(vr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = vr(t, c))) : s = vr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in fr && ("autoAlpha" === c && (1 === h && "hidden" === vr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Xd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = fr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in nr)
                    if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || xr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ge(this._pt, x, cr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new ge(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, ud), this._pt.u = 0, w.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            b.push(dr, 0, x[dr]), o = ce(o), v.svg ? ke(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Xd(this, v, "zOrigin", v.zOrigin, p), Xd(this, x, c, Or(s), Or(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ke(t, o, 1, y, 0, this);
                            continue
                        }
                        if (c in wr) {
                            ue(this, v, c, h, _ ? ka(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Xd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            we(this, o, t);
                            continue
                        }
                    }
                else c in x || (c = _r(c) || c);
                if (m || (u || 0 === u) && (h || 0 === h) && !lr.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in V.units ? V.units[c] : d)) && (h = $d(t, c, s, p)), this._pt = new ge(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? ud : xd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = wd);
                else if (c in x) ae.call(this, t, c, s, _ ? _ + o : o);
                else if (c in t) this.add(t, c, s || t[c], _ ? _ + o : o, n, a);
                else if ("parseTransform" !== c) {
                    Q(c, o);
                    continue
                }
                m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c)
            }
            T && me(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Be())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: vr,
        aliases: fr,
        getSetter: function getSetter(t, e, r) {
            var i = fr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in nr && e !== dr && (t._gsap.x || vr(t, "x")) ? r && Ie === r ? "scale" === e ? Dd : Cd : (Ie = r || {}) && ("scale" === e ? Ed : Fd) : t.style && !u(t.style[e]) ? Ad : ~e.indexOf("-") ? Bd : re(t, e)
        },
        core: {
            _removeProperty: Wd,
            _getMatrix: je
        }
    };
    Pe.utils.checkPrefix = _r, Pe.core.getStyleSaver = Ld, zr = ha((Dr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Er = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        nr[t] = 1
    }), ha(Er, function(t) {
        V.units[t] = "deg", wr[t] = 1
    }), fr[zr[13]] = Dr + "," + Er, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        fr[e[1]] = zr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        V.units[t] = "px"
    }), Pe.registerPlugin(Rr);
    var Fr = Pe.registerPlugin(Rr) || Pe,
        Ir = Fr.core.Tween;
    e.Back = Je, e.Bounce = tr, e.CSSPlugin = Rr, e.Circ = ir, e.Cubic = Qe, e.Elastic = He, e.Expo = rr, e.Linear = Ne, e.Power0 = Ye, e.Power1 = Ve, e.Power2 = qe, e.Power3 = Ue, e.Power4 = Xe, e.Quad = We, e.Quart = Ke, e.Quint = Ge, e.Sine = er, e.SteppedEase = Ze, e.Strong = $e, e.TimelineLite = Xt, e.TimelineMax = Xt, e.TweenLite = Jt, e.TweenMax = Ir, e.default = Fr, e.gsap = Fr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
(function(b) {
    var a = {
        init: function(c) {
            var d = this;
            if (!d.data("jqv") || d.data("jqv") == null) {
                c = a._saveOptions(d, c);
                b(document).on("click", ".formError", function() {
                    b(this).fadeOut(150, function() {
                        b(this).parent(".formErrorOuter").remove();
                        b(this).remove()
                    })
                })
            }
            return this
        },
        attach: function(e) {
            var d = this;
            var c;
            if (e) {
                c = a._saveOptions(d, e)
            } else {
                c = d.data("jqv")
            }
            c.validateAttribute = (d.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
            if (c.binded) {
                d.on(c.validationEventTrigger, "[" + c.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", a._onFieldEvent);
                d.on("click", "[" + c.validateAttribute + "*=validate][type=checkbox],[" + c.validateAttribute + "*=validate][type=radio]", a._onFieldEvent);
                d.on(c.validationEventTrigger, "[" + c.validateAttribute + "*=validate][class*=datepicker]", {
                    delay: 300
                }, a._onFieldEvent)
            }
            if (c.autoPositionUpdate) {
                b(window).bind("resize", {
                    noAnimation: true,
                    formElem: d
                }, a.updatePromptsPosition)
            }
            d.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", a._submitButtonClick);
            d.removeData("jqv_submitButton");
            d.on("submit", a._onSubmitEvent);
            return this
        },
        detach: function() {
            var d = this;
            var c = d.data("jqv");
            d.find("[" + c.validateAttribute + "*=validate]").not("[type=checkbox]").off(c.validationEventTrigger, a._onFieldEvent);
            d.find("[" + c.validateAttribute + "*=validate][type=checkbox],[class*=validate][type=radio]").off("click", a._onFieldEvent);
            d.off("submit", a.onAjaxFormComplete);
            d.off("submit", a.onAjaxFormComplete);
            d.removeData("jqv");
            d.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", a._submitButtonClick);
            d.removeData("jqv_submitButton");
            if (c.autoPositionUpdate) {
                b(window).unbind("resize", a.updatePromptsPosition)
            }
            return this
        },
        validate: function() {
            var d = b(this);
            var f = null;
            if (d.is("form") || d.hasClass("validationEngineContainer")) {
                if (d.hasClass("validating")) {
                    return false
                } else {
                    d.addClass("validating");
                    var c = d.data("jqv");
                    var f = a._validateFields(this);
                    setTimeout(function() {
                        d.removeClass("validating")
                    }, 100);
                    if (f && c.onSuccess) {
                        c.onSuccess()
                    } else {
                        if (!f && c.onFailure) {
                            c.onFailure()
                        }
                    }
                }
            } else {
                if (d.is("form") || d.hasClass("validationEngineContainer")) {
                    d.removeClass("validating")
                } else {
                    var e = d.closest("form, .validationEngineContainer"),
                        c = (e.data("jqv")) ? e.data("jqv") : b.validationEngine.defaults,
                        f = a._validateField(d, c);
                    if (f && c.onFieldSuccess) {
                        c.onFieldSuccess()
                    } else {
                        if (c.onFieldFailure && c.InvalidFields.length > 0) {
                            c.onFieldFailure()
                        }
                    }
                }
            }
            if (c.onValidationComplete) {
                return !!c.onValidationComplete(e, f)
            }
            return f
        },
        updatePromptsPosition: function(f) {
            if (f && this == window) {
                var e = f.data.formElem;
                var c = f.data.noAnimation
            } else {
                var e = b(this.closest("form, .validationEngineContainer"))
            }
            var d = e.data("jqv");
            e.find("[" + d.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var i = b(this);
                if (d.prettySelect && i.is(":hidden")) {
                    i = e.find("#" + d.usePrefix + i.attr("id") + d.useSuffix)
                }
                var g = a._getPrompt(i);
                var h = b(g).find(".formErrorContent").html();
                if (g) {
                    a._updatePrompt(i, b(g), h, undefined, false, d, c)
                }
            });
            return this
        },
        showPrompt: function(d, f, h, e) {
            var g = this.closest("form, .validationEngineContainer");
            var c = g.data("jqv");
            if (!c) {
                c = a._saveOptions(this, c)
            }
            if (h) {
                c.promptPosition = h
            }
            c.showArrow = e == true;
            a._showPrompt(this, d, f, false, c);
            return this
        },
        hide: function() {
            var f = b(this).closest("form, .validationEngineContainer");
            var d = f.data("jqv");
            var e = (d && d.fadeDuration) ? d.fadeDuration : 0.3;
            var c;
            if (b(this).is("form") || b(this).hasClass("validationEngineContainer")) {
                c = "parentForm" + a._getClassName(b(this).attr("id"))
            } else {
                c = a._getClassName(b(this).attr("id")) + "formError"
            }
            b("." + c).fadeTo(e, 0.3, function() {
                b(this).parent(".formErrorOuter").remove();
                b(this).remove()
            });
            return this
        },
        hideAll: function() {
            var d = this;
            var c = d.data("jqv");
            var e = c ? c.fadeDuration : 300;
            b(".formError").fadeTo(e, 300, function() {
                b(this).parent(".formErrorOuter").remove();
                b(this).remove()
            });
            return this
        },
        _onFieldEvent: function(e) {
            var f = b(this);
            var d = f.closest("form, .validationEngineContainer");
            var c = d.data("jqv");
            c.eventTrigger = "field";
            window.setTimeout(function() {
                a._validateField(f, c);
                if (c.InvalidFields.length == 0 && c.onFieldSuccess) {
                    c.onFieldSuccess()
                } else {
                    if (c.InvalidFields.length > 0 && c.onFieldFailure) {
                        c.onFieldFailure()
                    }
                }
            }, (e.data) ? e.data.delay : 0)
        },
        _onSubmitEvent: function() {
            var f = b(this);
            var c = f.data("jqv");
            if (f.data("jqv_submitButton")) {
                var d = b("#" + f.data("jqv_submitButton"));
                if (d) {
                    if (d.length > 0) {
                        if (d.hasClass("validate-skip") || d.attr("data-validation-engine-skip") == "true") {
                            return true
                        }
                    }
                }
            }
            c.eventTrigger = "submit";
            var e = a._validateFields(f);
            if (e && c.ajaxFormValidation) {
                a._validateFormWithAjax(f, c);
                return false
            }
            if (c.onValidationComplete) {
                return !!c.onValidationComplete(f, e)
            }
            return e
        },
        _checkAjaxStatus: function(d) {
            var c = true;
            b.each(d.ajaxValidCache, function(e, f) {
                if (!f) {
                    c = false;
                    return false
                }
            });
            return c
        },
        _checkAjaxFieldStatus: function(c, d) {
            return d.ajaxValidCache[c] == true
        },
        _validateFields: function(e) {
            var m = e.data("jqv");
            var f = false;
            e.trigger("jqv.form.validating");
            var n = null;
            e.find("[" + m.validateAttribute + "*=validate]").not(":disabled").each(function() {
                var p = b(this);
                var o = [];
                if (b.inArray(p.attr("name"), o) < 0) {
                    f |= a._validateField(p, m);
                    if (f && n == null) {
                        if (p.is(":hidden") && m.prettySelect) {
                            n = p = e.find("#" + m.usePrefix + a._jqSelector(p.attr("id")) + m.useSuffix)
                        } else {
                            n = p
                        }
                    }
                    if (m.doNotShowAllErrosOnSubmit) {
                        return false
                    }
                    o.push(p.attr("name"));
                    if (m.showOneMessage == true && f) {
                        return false
                    }
                }
            });
            e.trigger("jqv.form.result", [f]);
            if (f) {
                if (m.scroll) {
                    var l = n.offset().top;
                    var h = n.offset().left;
                    var j = m.promptPosition;
                    if (typeof(j) == "string" && j.indexOf(":") != -1) {
                        j = j.substring(0, j.indexOf(":"))
                    }
                    if (j != "bottomRight" && j != "bottomLeft") {
                        var i = a._getPrompt(n);
                        if (i) {
                            l = i.offset().top
                        }
                    }
                    if (m.scrollOffset) {
                        l -= m.scrollOffset
                    }
                    if (m.isOverflown) {
                        var c = b(m.overflownDIV);
                        if (!c.length) {
                            return false
                        }
                        var d = c.scrollTop();
                        var g = -parseInt(c.offset().top);
                        l += d + g - 5;
                        var k = b(m.overflownDIV + ":not(:animated)");
                        k.animate({
                            scrollTop: l
                        }, 1100, function() {
                            if (m.focusFirstField) {
                                n.focus()
                            }
                        })
                    } else {
                        b("html, body").animate({
                            scrollTop: l
                        }, 1100, function() {
                            if (m.focusFirstField) {
                                n.focus()
                            }
                        });
                        b("html, body").animate({
                            scrollLeft: h
                        }, 1100)
                    }
                } else {
                    if (m.focusFirstField) {
                        n.focus()
                    }
                }
                return false
            }
            return true
        },
        _validateFormWithAjax: function(g, e) {
            var h = g.serialize();
            var f = (e.ajaxFormValidationMethod) ? e.ajaxFormValidationMethod : "GET";
            var d = (e.ajaxFormValidationURL) ? e.ajaxFormValidationURL : g.attr("action");
            var c = (e.dataType) ? e.dataType : "json";
            b.ajax({
                type: f,
                url: d,
                cache: false,
                dataType: c,
                data: h,
                form: g,
                methods: a,
                options: e,
                beforeSend: function() {
                    return e.onBeforeAjaxFormValidation(g, e)
                },
                error: function(i, j) {
                    a._ajaxError(i, j)
                },
                success: function(n) {
                    if ((c == "json") && (n !== true)) {
                        var l = false;
                        for (var m = 0; m < n.length; m++) {
                            var o = n[m];
                            var q = o[0];
                            var k = b(b("#" + q)[0]);
                            if (k.length == 1) {
                                var p = o[2];
                                if (o[1] == true) {
                                    if (p == "" || !p) {
                                        a._closePrompt(k)
                                    } else {
                                        if (e.allrules[p]) {
                                            var j = e.allrules[p].alertTextOk;
                                            if (j) {
                                                p = j
                                            }
                                        }
                                        if (e.showPrompts) {
                                            a._showPrompt(k, p, "pass", false, e, true)
                                        }
                                    }
                                } else {
                                    l |= true;
                                    if (e.allrules[p]) {
                                        var j = e.allrules[p].alertText;
                                        if (j) {
                                            p = j
                                        }
                                    }
                                    if (e.showPrompts) {
                                        a._showPrompt(k, p, "", false, e, true)
                                    }
                                }
                            }
                        }
                        e.onAjaxFormComplete(!l, g, n, e)
                    } else {
                        e.onAjaxFormComplete(true, g, n, e)
                    }
                }
            })
        },
        _validateField: function(d, l, s) {
            if (!d.attr("id")) {
                d.attr("id", "form-validation-field-" + b.validationEngine.fieldIdCounter);
                ++b.validationEngine.fieldIdCounter
            }
            if (!l.validateNonVisibleFields && (d.is(":hidden") && !l.prettySelect || d.parent().is(":hidden"))) {
                return false
            }
            var u = d.attr(l.validateAttribute);
            var z = /validate\[(.*)\]/.exec(u);
            if (!z) {
                return false
            }
            var v = z[1];
            var r = v.split(/\[|,|\]/);
            var o = false;
            var j = d.attr("name");
            var h = "";
            var y = "";
            var t = false;
            var A = false;
            l.isError = false;
            l.showArrow = true;
            if (l.maxErrorsPerField > 0) {
                A = true
            }
            var e = b(d.closest("form, .validationEngineContainer"));
            for (var x = 0; x < r.length; x++) {
                r[x] = r[x].replace(" ", "");
                if (r[x] === "") {
                    delete r[x]
                }
            }
            for (var x = 0, n = 0; x < r.length; x++) {
                if (A && n >= l.maxErrorsPerField) {
                    if (!t) {
                        var k = b.inArray("required", r);
                        t = (k != -1 && k >= x)
                    }
                    break
                }
                var g = undefined;
                switch (r[x]) {
                    case "required":
                        t = true;
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._required);
                        break;
                    case "custom":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._custom);
                        break;
                    case "groupRequired":
                        var w = "[" + l.validateAttribute + "*=" + r[x + 1] + "]";
                        var f = e.find(w).eq(0);
                        if (f[0] != d[0]) {
                            a._validateField(f, l, s);
                            l.showArrow = true
                        }
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._groupRequired);
                        if (g) {
                            t = true
                        }
                        l.showArrow = false;
                        break;
                    case "ajax":
                        g = a._ajax(d, r, x, l);
                        if (g) {
                            y = "load"
                        }
                        break;
                    case "minSize":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._minSize);
                        break;
                    case "maxSize":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._maxSize);
                        break;
                    case "min":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._min);
                        break;
                    case "max":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._max);
                        break;
                    case "past":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._past);
                        break;
                    case "future":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._future);
                        break;
                    case "dateRange":
                        var w = "[" + l.validateAttribute + "*=" + r[x + 1] + "]";
                        l.firstOfGroup = e.find(w).eq(0);
                        l.secondOfGroup = e.find(w).eq(1);
                        if (l.firstOfGroup[0].value || l.secondOfGroup[0].value) {
                            g = a._getErrorMessage(e, d, r[x], r, x, l, a._dateRange)
                        }
                        if (g) {
                            t = true
                        }
                        l.showArrow = false;
                        break;
                    case "dateTimeRange":
                        var w = "[" + l.validateAttribute + "*=" + r[x + 1] + "]";
                        l.firstOfGroup = e.find(w).eq(0);
                        l.secondOfGroup = e.find(w).eq(1);
                        if (l.firstOfGroup[0].value || l.secondOfGroup[0].value) {
                            g = a._getErrorMessage(e, d, r[x], r, x, l, a._dateTimeRange)
                        }
                        if (g) {
                            t = true
                        }
                        l.showArrow = false;
                        break;
                    case "maxCheckbox":
                        d = b(e.find("input[name='" + j + "']"));
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._maxCheckbox);
                        break;
                    case "minCheckbox":
                        d = b(e.find("input[name='" + j + "']"));
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._minCheckbox);
                        break;
                    case "equals":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._equals);
                        break;
                    case "funcCall":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._funcCall);
                        break;
                    case "creditCard":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._creditCard);
                        break;
                    case "condRequired":
                        g = a._getErrorMessage(e, d, r[x], r, x, l, a._condRequired);
                        if (g !== undefined) {
                            t = true
                        }
                        break;
                    default:
                }
                var m = false;
                if (typeof g == "object") {
                    switch (g.status) {
                        case "_break":
                            m = true;
                            break;
                        case "_error":
                            g = g.message;
                            break;
                        case "_error_no_prompt":
                            return true;
                            break;
                        default:
                            break
                    }
                }
                if (m) {
                    break
                }
                if (typeof g == "string") {
                    h += g + "<br/>";
                    l.isError = true;
                    n++
                }
            }
            if (!t && !(d.val()) && d.val().length < 1) {
                l.isError = false
            }
            var p = d.prop("type");
            var c = d.data("promptPosition") || l.promptPosition;
            if ((p == "radio" || p == "checkbox") && e.find("input[name='" + j + "']").size() > 1) {
                if (c === "inline") {
                    d = b(e.find("input[name='" + j + "'][type!=hidden]:last"))
                } else {
                    d = b(e.find("input[name='" + j + "'][type!=hidden]:first"))
                }
                l.showArrow = false
            }
            if (d.is(":hidden") && l.prettySelect) {
                d = e.find("#" + l.usePrefix + a._jqSelector(d.attr("id")) + l.useSuffix)
            }
            if (l.isError && l.showPrompts) {
                a._showPrompt(d, h, y, false, l)
            } else {
                if (!o) {
                    a._closePrompt(d)
                }
            }
            if (!o) {
                d.trigger("jqv.field.result", [d, l.isError, h])
            }
            var q = b.inArray(d[0], l.InvalidFields);
            if (q == -1) {
                if (l.isError) {
                    l.InvalidFields.push(d[0])
                }
            } else {
                if (!l.isError) {
                    l.InvalidFields.splice(q, 1)
                }
            }
            a._handleStatusCssClasses(d, l);
            if (l.isError && l.onFieldFailure) {
                l.onFieldFailure(d)
            }
            if (!l.isError && l.onFieldSuccess) {
                l.onFieldSuccess(d)
            }
            return l.isError
        },
        _handleStatusCssClasses: function(d, c) {
            if (c.addSuccessCssClassToField) {
                d.removeClass(c.addSuccessCssClassToField)
            }
            if (c.addFailureCssClassToField) {
                d.removeClass(c.addFailureCssClassToField)
            }
            if (c.addSuccessCssClassToField && !c.isError) {
                d.addClass(c.addSuccessCssClassToField)
            }
            if (c.addFailureCssClassToField && c.isError) {
                d.addClass(c.addFailureCssClassToField)
            }
        },
        _getErrorMessage: function(c, n, l, p, g, q, m) {
            var j = jQuery.inArray(l, p);
            if (l === "custom" || l === "funcCall") {
                var o = p[j + 1];
                l = l + "[" + o + "]";
                delete(p[j])
            }
            var d = l;
            var e = (n.attr("data-validation-engine")) ? n.attr("data-validation-engine") : n.attr("class");
            var h = e.split(" ");
            var k;
            if (l == "future" || l == "past" || l == "maxCheckbox" || l == "minCheckbox") {
                k = m(c, n, p, g, q)
            } else {
                k = m(n, p, g, q)
            }
            if (k != undefined) {
                var f = a._getCustomErrorMessage(b(n), h, d, q);
                if (f) {
                    k = f
                }
            }
            return k
        },
        _getCustomErrorMessage: function(j, e, h, l) {
            var f = false;
            var d = /^custom\[.*\]$/.test(h) ? a._validityProp.custom : a._validityProp[h];
            if (d != undefined) {
                f = j.attr("data-errormessage-" + d);
                if (f != undefined) {
                    return f
                }
            }
            f = j.attr("data-errormessage");
            if (f != undefined) {
                return f
            }
            var c = "#" + j.attr("id");
            if (typeof l.custom_error_messages[c] != "undefined" && typeof l.custom_error_messages[c][h] != "undefined") {
                f = l.custom_error_messages[c][h]["message"]
            } else {
                if (e.length > 0) {
                    for (var g = 0; g < e.length && e.length > 0; g++) {
                        var k = "." + e[g];
                        if (typeof l.custom_error_messages[k] != "undefined" && typeof l.custom_error_messages[k][h] != "undefined") {
                            f = l.custom_error_messages[k][h]["message"];
                            break
                        }
                    }
                }
            }
            if (!f && typeof l.custom_error_messages[h] != "undefined" && typeof l.custom_error_messages[h]["message"] != "undefined") {
                f = l.custom_error_messages[h]["message"]
            }
            return f
        },
        _validityProp: {
            required: "value-missing",
            custom: "custom-error",
            groupRequired: "value-missing",
            ajax: "custom-error",
            minSize: "range-underflow",
            maxSize: "range-overflow",
            min: "range-underflow",
            max: "range-overflow",
            past: "type-mismatch",
            future: "type-mismatch",
            dateRange: "type-mismatch",
            dateTimeRange: "type-mismatch",
            maxCheckbox: "range-overflow",
            minCheckbox: "range-underflow",
            equals: "pattern-mismatch",
            funcCall: "custom-error",
            creditCard: "pattern-mismatch",
            condRequired: "value-missing"
        },
        _required: function(h, k, f, m, g) {
            switch (h.prop("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                case "select-one":
                case "select-multiple":
                default:
                    var l = b.trim(h.val());
                    var e = b.trim(h.attr("data-validation-placeholder"));
                    var j = b.trim(h.attr("placeholder"));
                    if ((!l) || (e && l == e) || (j && l == j)) {
                        return m.allrules[k[f]].alertText
                    }
                    break;
                case "radio":
                case "checkbox":
                    if (g) {
                        if (!h.attr("checked")) {
                            return m.allrules[k[f]].alertTextCheckboxMultiple
                        }
                        break
                    }
                    var d = h.closest("form, .validationEngineContainer");
                    var c = h.attr("name");
                    if (d.find("input[name='" + c + "']:checked").size() == 0) {
                        if (d.find("input[name='" + c + "']:visible").size() == 1) {
                            return m.allrules[k[f]].alertTextCheckboxe
                        } else {
                            return m.allrules[k[f]].alertTextCheckboxMultiple
                        }
                    }
                    break
            }
        },
        _groupRequired: function(f, h, d, c) {
            var g = "[" + c.validateAttribute + "*=" + h[d + 1] + "]";
            var e = false;
            f.closest("form, .validationEngineContainer").find(g).each(function() {
                if (!a._required(b(this), h, d, c)) {
                    e = true;
                    return false
                }
            });
            if (!e) {
                return c.allrules[h[d]].alertText
            }
        },
        _custom: function(j, k, d, l) {
            var c = k[d + 1];
            var g = l.allrules[c];
            var h;
            if (!g) {
                alert("jqv:custom rule not found - " + c);
                return
            }
            if (g.regex) {
                var f = g.regex;
                if (!f) {
                    alert("jqv:custom regex not found - " + c);
                    return
                }
                var e = new RegExp(f);
                if (!e.test(j.val())) {
                    return l.allrules[c].alertText
                }
            } else {
                if (g.func) {
                    h = g.func;
                    if (typeof(h) !== "function") {
                        alert("jqv:custom parameter 'function' is no function - " + c);
                        return
                    }
                    if (!h(j, k, d, l)) {
                        return l.allrules[c].alertText
                    }
                } else {
                    alert("jqv:custom type not allowed " + c);
                    return
                }
            }
        },
        _funcCall: function(j, k, d, c) {
            var h = k[d + 1];
            var f;
            if (h.indexOf(".") > -1) {
                var g = h.split(".");
                var e = window;
                while (g.length) {
                    e = e[g.shift()]
                }
                f = e
            } else {
                f = window[h] || c.customFunctions[h]
            }
            if (typeof(f) == "function") {
                return f(j, k, d, c)
            }
        },
        _equals: function(f, g, e, d) {
            var c = g[e + 1];
            if (f.val() != b("#" + c).val()) {
                return d.allrules.equals.alertText
            }
        },
        _maxSize: function(h, j, f, e) {
            var d = j[f + 1];
            var c = h.val().length;
            if (c > d) {
                var g = e.allrules.maxSize;
                return g.alertText + d + g.alertText2
            }
        },
        _minSize: function(h, j, f, d) {
            var e = j[f + 1];
            var c = h.val().length;
            if (c < e) {
                var g = d.allrules.minSize;
                return g.alertText + e + g.alertText2
            }
        },
        _min: function(h, j, f, d) {
            var e = parseFloat(j[f + 1]);
            var c = parseFloat(h.val());
            if (c < e) {
                var g = d.allrules.min;
                if (g.alertText2) {
                    return g.alertText + e + g.alertText2
                }
                return g.alertText + e
            }
        },
        _max: function(h, j, f, e) {
            var d = parseFloat(j[f + 1]);
            var c = parseFloat(h.val());
            if (c > d) {
                var g = e.allrules.max;
                if (g.alertText2) {
                    return g.alertText + d + g.alertText2
                }
                return g.alertText + d
            }
        },
        _past: function(d, j, k, e, m) {
            var c = k[e + 1];
            var g = b(d.find("input[name='" + c.replace(/^#+/, "") + "']"));
            var f;
            if (c.toLowerCase() == "now") {
                f = new Date()
            } else {
                if (undefined != g.val()) {
                    if (g.is(":disabled")) {
                        return
                    }
                    f = a._parseDate(g.val())
                } else {
                    f = a._parseDate(c)
                }
            }
            var l = a._parseDate(j.val());
            if (l > f) {
                var h = m.allrules.past;
                if (h.alertText2) {
                    return h.alertText + a._dateToString(f) + h.alertText2
                }
                return h.alertText + a._dateToString(f)
            }
        },
        _future: function(d, j, k, e, m) {
            var c = k[e + 1];
            var g = b(d.find("input[name='" + c.replace(/^#+/, "") + "']"));
            var f;
            if (c.toLowerCase() == "now") {
                f = new Date()
            } else {
                if (undefined != g.val()) {
                    if (g.is(":disabled")) {
                        return
                    }
                    f = a._parseDate(g.val())
                } else {
                    f = a._parseDate(c)
                }
            }
            var l = a._parseDate(j.val());
            if (l < f) {
                var h = m.allrules.future;
                if (h.alertText2) {
                    return h.alertText + a._dateToString(f) + h.alertText2
                }
                return h.alertText + a._dateToString(f)
            }
        },
        _isDate: function(d) {
            var c = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return c.test(d)
        },
        _isDateTime: function(d) {
            var c = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return c.test(d)
        },
        _dateCompare: function(d, c) {
            return (new Date(d.toString()) < new Date(c.toString()))
        },
        _dateRange: function(e, f, d, c) {
            if ((!c.firstOfGroup[0].value && c.secondOfGroup[0].value) || (c.firstOfGroup[0].value && !c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
            if (!a._isDate(c.firstOfGroup[0].value) || !a._isDate(c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
            if (!a._dateCompare(c.firstOfGroup[0].value, c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
        },
        _dateTimeRange: function(e, f, d, c) {
            if ((!c.firstOfGroup[0].value && c.secondOfGroup[0].value) || (c.firstOfGroup[0].value && !c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
            if (!a._isDateTime(c.firstOfGroup[0].value) || !a._isDateTime(c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
            if (!a._dateCompare(c.firstOfGroup[0].value, c.secondOfGroup[0].value)) {
                return c.allrules[f[d]].alertText + c.allrules[f[d]].alertText2
            }
        },
        _maxCheckbox: function(h, j, k, g, f) {
            var d = k[g + 1];
            var e = j.attr("name");
            var c = h.find("input[name='" + e + "']:checked").size();
            if (c > d) {
                f.showArrow = false;
                if (f.allrules.maxCheckbox.alertText2) {
                    return f.allrules.maxCheckbox.alertText + " " + d + " " + f.allrules.maxCheckbox.alertText2
                }
                return f.allrules.maxCheckbox.alertText
            }
        },
        _minCheckbox: function(h, j, k, g, f) {
            var d = k[g + 1];
            var e = j.attr("name");
            var c = h.find("input[name='" + e + "']:checked").size();
            if (c < d) {
                f.showArrow = false;
                return f.allrules.minCheckbox.alertText + " " + d + " " + f.allrules.minCheckbox.alertText2
            }
        },
        _creditCard: function(k, l, f, n) {
            var d = false,
                m = k.val().replace(/ +/g, "").replace(/-+/g, "");
            var c = m.length;
            if (c >= 14 && c <= 16 && parseInt(m) > 0) {
                var g = 0,
                    f = c - 1,
                    j = 1,
                    h, e = new String();
                do {
                    h = parseInt(m.charAt(f));
                    e += (j++ % 2 == 0) ? h * 2 : h
                } while (--f >= 0);
                for (f = 0; f < e.length; f++) {
                    g += parseInt(e.charAt(f))
                }
                d = g % 10 == 0
            }
            if (!d) {
                return n.allrules.creditCard.alertText
            }
        },
        _ajax: function(o, r, j, s) {
            var q = r[j + 1];
            var n = s.allrules[q];
            var e = n.extraData;
            var l = n.extraDataDynamic;
            var h = {
                fieldId: o.attr("id"),
                fieldValue: o.val()
            };
            if (typeof e === "object") {
                b.extend(h, e)
            } else {
                if (typeof e === "string") {
                    var k = e.split("&");
                    for (var j = 0; j < k.length; j++) {
                        var p = k[j].split("=");
                        if (p[0] && p[0]) {
                            h[p[0]] = p[1]
                        }
                    }
                }
            }
            if (l) {
                var g = [];
                var m = String(l).split(",");
                for (var j = 0; j < m.length; j++) {
                    var c = m[j];
                    if (b(c).length) {
                        var d = o.closest("form, .validationEngineContainer").find(c).val();
                        var f = c.replace("#", "") + "=" + escape(d);
                        h[c.replace("#", "")] = d
                    }
                }
            }
            if (s.eventTrigger == "field") {
                delete(s.ajaxValidCache[o.attr("id")])
            }
            if (!s.isError && !a._checkAjaxFieldStatus(o.attr("id"), s)) {
                b.ajax({
                    type: s.ajaxFormValidationMethod,
                    url: n.url,
                    cache: false,
                    dataType: "json",
                    data: h,
                    field: o,
                    rule: n,
                    methods: a,
                    options: s,
                    beforeSend: function() {},
                    error: function(i, t) {
                        a._ajaxError(i, t)
                    },
                    success: function(v) {
                        var x = v[0];
                        var u = b("#" + x).eq(0);
                        if (u.length == 1) {
                            var t = v[1];
                            var w = v[2];
                            if (!t) {
                                s.ajaxValidCache[x] = false;
                                s.isError = true;
                                if (w) {
                                    if (s.allrules[w]) {
                                        var i = s.allrules[w].alertText;
                                        if (i) {
                                            w = i
                                        }
                                    }
                                } else {
                                    w = n.alertText
                                }
                                if (s.showPrompts) {
                                    a._showPrompt(u, w, "", true, s)
                                }
                            } else {
                                s.ajaxValidCache[x] = true;
                                if (w) {
                                    if (s.allrules[w]) {
                                        var i = s.allrules[w].alertTextOk;
                                        if (i) {
                                            w = i
                                        }
                                    }
                                } else {
                                    w = n.alertTextOk
                                }
                                if (s.showPrompts) {
                                    if (w) {
                                        a._showPrompt(u, w, "pass", true, s)
                                    } else {
                                        a._closePrompt(u)
                                    }
                                }
                                if (s.eventTrigger == "submit") {
                                    o.closest("form").submit()
                                }
                            }
                        }
                        u.trigger("jqv.field.result", [u, s.isError, w])
                    }
                });
                return n.alertTextLoad
            }
        },
        _ajaxError: function(c, d) {
            if (c.status == 0 && d == null) {
                alert("The page is not served from a server! ajax call failed")
            } else {
                if (typeof console != "undefined") {
                    console.log("Ajax error: " + c.status + " " + d)
                }
            }
        },
        _dateToString: function(c) {
            return c.getFullYear() + "-" + (c.getMonth() + 1) + "-" + c.getDate()
        },
        _parseDate: function(e) {
            var c = e.split("-");
            if (c == e) {
                c = e.split("/")
            }
            if (c == e) {
                c = e.split(".");
                return new Date(c[2], (c[1] - 1), c[0])
            }
            return new Date(c[0], (c[1] - 1), c[2])
        },
        _showPrompt: function(i, g, h, f, e, d) {
            var c = a._getPrompt(i);
            if (d) {
                c = false
            }
            if (b.trim(g)) {
                if (c) {
                    a._updatePrompt(i, c, g, h, f, e)
                } else {
                    a._buildPrompt(i, g, h, f, e)
                }
            }
        },
        _buildPrompt: function(i, c, g, k, m) {
            var d = b("<div>");
            d.addClass(a._getClassName(i.attr("id")) + "formError");
            d.addClass("parentForm" + a._getClassName(i.closest("form, .validationEngineContainer").attr("id")));
            d.addClass("formError");
            switch (g) {
                case "pass":
                    d.addClass("greenPopup");
                    break;
                case "load":
                    d.addClass("blackPopup");
                    break;
                default:
            }
            if (k) {
                d.addClass("ajaxed")
            }
            var n = b("<div>").addClass("formErrorContent").html(c).appendTo(d);
            var f = i.data("promptPosition") || m.promptPosition;
            if (m.showArrow) {
                var j = b("<div>").addClass("formErrorArrow");
                if (typeof(f) == "string") {
                    var h = f.indexOf(":");
                    if (h != -1) {
                        f = f.substring(0, h)
                    }
                }
                switch (f) {
                    case "bottomLeft":
                    case "bottomRight":
                        d.find(".formErrorContent").before(j);
                        j.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
                        break;
                    case "topLeft":
                    case "topRight":
                        j.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
                        d.append(j);
                        break
                }
            }
            if (m.addPromptClass) {
                d.addClass(m.addPromptClass)
            }
            var l = i.attr("data-required-class");
            if (l !== undefined) {
                d.addClass(l)
            } else {
                if (m.prettySelect) {
                    if (b("#" + i.attr("id")).next().is("select")) {
                        var e = b("#" + i.attr("id").substr(m.usePrefix.length).substring(m.useSuffix.length)).attr("data-required-class");
                        if (e !== undefined) {
                            d.addClass(e)
                        }
                    }
                }
            }
            d.css({
                opacity: 0
            });
            if (f === "inline") {
                d.addClass("inline");
                if (typeof i.attr("data-prompt-target") !== "undefined" && b("#" + i.attr("data-prompt-target")).length > 0) {
                    d.appendTo(b("#" + i.attr("data-prompt-target")))
                } else {
                    i.after(d)
                }
            } else {
                i.before(d)
            }
            var h = a._calculatePosition(i, d, m);
            d.css({
                position: f === "inline" ? "relative" : "absolute",
                top: h.callerTopPosition,
                left: h.callerleftPosition,
                marginTop: h.marginTopSize,
                opacity: 0
            }).data("callerField", i);
            if (m.autoHidePrompt) {
                setTimeout(function() {
                    d.animate({
                        opacity: 0
                    }, function() {
                        d.closest(".formErrorOuter").remove();
                        d.remove()
                    })
                }, m.autoHideDelay)
            }
            return d.animate({
                opacity: 0.87
            })
        },
        _updatePrompt: function(i, d, c, g, j, k, e) {
            if (d) {
                if (typeof g !== "undefined") {
                    if (g == "pass") {
                        d.addClass("greenPopup")
                    } else {
                        d.removeClass("greenPopup")
                    }
                    if (g == "load") {
                        d.addClass("blackPopup")
                    } else {
                        d.removeClass("blackPopup")
                    }
                }
                if (j) {
                    d.addClass("ajaxed")
                } else {
                    d.removeClass("ajaxed")
                }
                d.find(".formErrorContent").html(c);
                var h = a._calculatePosition(i, d, k);
                var f = {
                    top: h.callerTopPosition,
                    left: h.callerleftPosition,
                    marginTop: h.marginTopSize
                };
                if (e) {
                    d.css(f)
                } else {
                    d.animate(f)
                }
            }
        },
        _closePrompt: function(d) {
            var c = a._getPrompt(d);
            if (c) {
                c.fadeTo("fast", 0, function() {
                    c.parent(".formErrorOuter").remove();
                    c.remove()
                })
            }
        },
        closePrompt: function(c) {
            return a._closePrompt(c)
        },
        _getPrompt: function(e) {
            var f = b(e).closest("form, .validationEngineContainer").attr("id");
            var d = a._getClassName(e.attr("id")) + "formError";
            var c = b("." + a._escapeExpression(d) + ".parentForm" + f)[0];
            if (c) {
                return b(c)
            }
        },
        _escapeExpression: function(c) {
            return c.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(e) {
            var f = b(document);
            var c = b("body");
            var d = (e && e.hasClass("rtl")) || (e && (e.attr("dir") || "").toLowerCase() === "rtl") || f.hasClass("rtl") || (f.attr("dir") || "").toLowerCase() === "rtl" || c.hasClass("rtl") || (c.attr("dir") || "").toLowerCase() === "rtl";
            return Boolean(d)
        },
        _calculatePosition: function(m, f, r) {
            var e, n, k;
            var g = m.width();
            var c = m.position().left;
            var p = m.position().top;
            var d = m.height();
            var q = f.height();
            e = n = 0;
            k = -q;
            var j = m.data("promptPosition") || r.promptPosition;
            var i = "";
            var h = "";
            var o = 0;
            var l = 0;
            if (typeof(j) == "string") {
                if (j.indexOf(":") != -1) {
                    i = j.substring(j.indexOf(":") + 1);
                    j = j.substring(0, j.indexOf(":"));
                    if (i.indexOf(",") != -1) {
                        h = i.substring(i.indexOf(",") + 1);
                        i = i.substring(0, i.indexOf(","));
                        l = parseInt(h);
                        if (isNaN(l)) {
                            l = 0
                        }
                    }
                    o = parseInt(i);
                    if (isNaN(i)) {
                        i = 0
                    }
                }
            }
            switch (j) {
                default:
                    case "topRight":
                    n += c + g - 30;e += p;
                break;
                case "topLeft":
                        e += p;n += c;
                    break;
                case "centerRight":
                        e = p + 4;k = 0;n = c + m.outerWidth(true) + 5;
                    break;
                case "centerLeft":
                        n = c - (f.width() + 2);e = p + 4;k = 0;
                    break;
                case "bottomLeft":
                        e = p + m.height() + 5;k = 0;n = c;
                    break;
                case "bottomRight":
                        n = c + g - 30;e = p + m.height() + 5;k = 0;
                    break;
                case "inline":
                        n = 0;e = 0;k = 0
            }
            n += o;
            e += l;
            return {
                callerTopPosition: e + "px",
                callerleftPosition: n + "px",
                marginTopSize: k + "px"
            }
        },
        _saveOptions: function(e, d) {
            if (b.validationEngineLanguage) {
                var c = b.validationEngineLanguage.allRules
            } else {
                b.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page")
            }
            b.validationEngine.defaults.allrules = c;
            var f = b.extend(true, {}, b.validationEngine.defaults, d);
            e.data("jqv", f);
            return f
        },
        _getClassName: function(c) {
            if (c) {
                return c.replace(/:/g, "_").replace(/\./g, "_")
            }
        },
        _jqSelector: function(c) {
            return c.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
        },
        _condRequired: function(g, h, e, d) {
            var c, f;
            for (c = (e + 1); c < h.length; c++) {
                f = jQuery("#" + h[c]).first();
                if (f.length && a._required(f, ["required"], 0, d, true) == undefined) {
                    return a._required(g, ["required"], 0, d)
                }
            }
        },
        _submitButtonClick: function(e) {
            var c = b(this);
            var d = c.closest("form, .validationEngineContainer");
            d.data("jqv_submitButton", c.attr("id"))
        }
    };
    b.fn.validationEngine = function(d) {
        var c = b(this);
        if (!c[0]) {
            return c
        }
        if (typeof(d) == "string" && d.charAt(0) != "_" && a[d]) {
            if (d != "showPrompt" && d != "hide" && d != "hideAll") {
                a.init.apply(c)
            }
            return a[d].apply(c, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof d == "object" || !d) {
                a.init.apply(c, arguments);
                return a.attach.apply(c)
            } else {
                b.error("Method " + d + " does not exist in jQuery.validationEngine")
            }
        }
    };
    b.validationEngine = {
        fieldIdCounter: 0,
        defaults: {
            validationEventTrigger: "blur",
            scroll: true,
            focusFirstField: true,
            showPrompts: true,
            validateNonVisibleFields: false,
            promptPosition: "topRight",
            bindMethod: "bind",
            inlineAjax: false,
            ajaxFormValidation: false,
            ajaxFormValidationURL: false,
            ajaxFormValidationMethod: "get",
            onAjaxFormComplete: b.noop,
            onBeforeAjaxFormValidation: b.noop,
            onValidationComplete: false,
            doNotShowAllErrosOnSubmit: false,
            custom_error_messages: {},
            binded: true,
            showArrow: true,
            isError: false,
            maxErrorsPerField: false,
            ajaxValidCache: {},
            autoPositionUpdate: false,
            InvalidFields: [],
            onFieldSuccess: false,
            onFieldFailure: false,
            onSuccess: false,
            onFailure: false,
            validateAttribute: "class",
            addSuccessCssClassToField: "",
            addFailureCssClassToField: "",
            autoHidePrompt: false,
            autoHideDelay: 10000,
            fadeDuration: 0.3,
            prettySelect: false,
            addPromptClass: "",
            usePrefix: "",
            useSuffix: "",
            showOneMessage: false
        }
    };
    b(function() {
        b.validationEngine.defaults.promptPosition = a.isRTL() ? "topLeft" : "topRight"
    })
})(jQuery);;
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return Me || "undefined" != typeof window && (Me = window.gsap) && Me.registerPlugin && Me
    }

    function z(e, t) {
        return ~qe.indexOf(e) && qe[qe.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return Re && Re.isPressed || Ie.cache++
    }

    function G(r, n) {
        function Vc(e) {
            if (e || 0 === e) {
                o && (ke.history.scrollRestoration = "manual");
                var t = Re && Re.isPressed;
                e = Vc.v = Math.round(e) || (Re && Re.iOS ? 1 : 0), r(e), Vc.cacheID = Ie.cache, t && i("ss", e)
            } else(n || Ie.cache !== Vc.cacheID || i("ref")) && (Vc.cacheID = Ie.cache, Vc.v = r());
            return Vc.v + Vc.offset
        }
        return Vc.offset = 0, r && Vc
    }

    function J(e) {
        return Me.utils.toArray(e)[0] || ("string" == typeof e && !1 !== Me.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function K(t, e) {
        var r = e.s,
            n = e.sc;
        A(t) && (t = Ee.scrollingElement || Pe);
        var o = Ie.indexOf(t),
            i = n === je.sc ? 1 : 2;
        ~o || (o = Ie.push(t) - 1), Ie[o + i] || t.addEventListener("scroll", F);
        var a = Ie[o + i],
            s = a || (Ie[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
                return arguments.length ? t[r] = e : t[r]
            })));
        return s.target = t, a || (s.smooth = "smooth" === Me.getProperty(t, "scrollBehavior")), s
    }

    function L(e, t, o) {
        function rd(e, t) {
            var r = Ne();
            t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }
        var i = e,
            a = e,
            s = Ne(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: rd,
            reset: function reset() {
                a = i = o ? 0 : i, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Ne();
                return !e && 0 !== e || e === i || rd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }

    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function N(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function O() {
        (De = Me.core.globals().ScrollTrigger) && De.core && function _integrate() {
            var e = De.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, Ie), n.push.apply(n, qe), Ie = t, qe = n, i = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function P(e) {
        return (Me = e || r()) && "undefined" != typeof document && document.body && (ke = window, Pe = (Ee = document).documentElement, Oe = Ee.body, t = [ke, Ee, Pe, Oe], Me.utils.clamp, ze = Me.core.context || function() {}, Be = "onpointerenter" in Oe ? "pointer" : "mouse", Ae = k.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Le = k.eventTypes = ("ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return o = 0
        }, 500), O(), Ce = 1), Ce
    }
    var Me, Ce, ke, Ee, Pe, Oe, Ae, Be, De, t, Re, Le, ze, o = 1,
        Fe = [],
        Ie = [],
        qe = [],
        Ne = Date.now,
        i = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        a = "scrollTop",
        He = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function(e) {
                return arguments.length ? ke.scrollTo(e, je.sc()) : ke.pageXOffset || Ee[n] || Pe[n] || Oe[n] || 0
            })
        },
        je = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: He,
            sc: G(function(e) {
                return arguments.length ? ke.scrollTo(He.sc(), e) : ke.pageYOffset || Ee[a] || Pe[a] || Oe[a] || 0
            })
        };
    He.op = je, Ie.cache = 0;
    var k = (Observer.prototype.init = function init(e) {
        Ce || P(Me) || console.warn("Please gsap.registerPlugin(Observer)"), De || O();
        var o = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            i = e.target,
            r = e.lineHeight,
            n = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            p = e.event,
            d = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            w = e.onDown,
            _ = e.onChangeX,
            S = e.onChangeY,
            T = e.onChange,
            k = e.onToggleX,
            E = e.onToggleY,
            D = e.onHover,
            R = e.onHoverEnd,
            z = e.onMove,
            X = e.ignoreCheck,
            Y = e.isNormalizer,
            I = e.onGestureStart,
            q = e.onGestureEnd,
            V = e.onWheel,
            H = e.onEnable,
            W = e.onDisable,
            j = e.onClick,
            G = e.scrollSpeed,
            U = e.capture,
            Q = e.allowClicks,
            Z = e.lockAxis,
            $ = e.onLockAxis;

        function Se() {
            return ye = Ne()
        }

        function Te(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || X && X(e, t)
        }

        function Ve() {
            var e = se.deltaX = N(be),
                t = se.deltaY = N(me),
                r = Math.abs(e) >= o,
                n = Math.abs(t) >= o;
            T && (r || n) && T(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), S && S(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (z && z(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && $ && $(se), oe && (V(se), oe = !1), ee = 0
        }

        function We(e, t, r) {
            be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(Ve) : Ve()
        }

        function Xe(e, t) {
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(Ve) : Ve()
        }

        function Ye(e) {
            if (!Te(e, 1)) {
                var t = (e = M(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y,
                    i = se.isDragging;
                se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), Xe(n, o), i || d && d(se))
            }
        }

        function _e(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && I(e, se.isDragging)
        }

        function af() {
            return (se.isGesturing = !1) || q(se)
        }

        function bf(e) {
            if (!Te(e)) {
                var t = ue(),
                    r = fe();
                We((t - pe) * G, (r - de) * G, 1), pe = t, de = r, l && te.restart(!0)
            }
        }

        function cf(e) {
            if (!Te(e)) {
                e = M(e, s), V && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ke.innerHeight : 1) * f;
                We(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0)
            }
        }

        function df(e) {
            if (!Te(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || o) && Xe(n, o)
            }
        }

        function ef(e) {
            se.event = e, D(se)
        }

        function ff(e) {
            se.event = e, R(se)
        }

        function gf(e) {
            return Te(e) || M(e, s) && j(se)
        }
        this.target = i = J(i) || Pe, this.vars = e, u = u && Me.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, G = G || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(ke.getComputedStyle(Oe).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this,
            le = 0,
            ce = 0,
            ue = K(i, He),
            fe = K(i, je),
            pe = ue(),
            de = fe(),
            ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Le[0],
            he = A(i),
            ve = i.ownerDocument || Ee,
            be = [0, 0, 0],
            me = [0, 0, 0],
            ye = 0,
            xe = se.onPress = function(e) {
                Te(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(Y ? i : ve, Le[1], Ye, s, !0), se.deltaX = se.deltaY = 0, v && v(se))
            },
            we = se.onRelease = function(t) {
                if (!Te(t, 1)) {
                    C(Y ? i : ve, Le[1], Ye, !0);
                    var e = !isNaN(se.y - se.startY),
                        r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                        n = M(t);
                    !r && e && (se._vx.reset(), se._vy.reset(), s && Q && Me.delayedCall(.08, function() {
                        if (300 < Ne() - ye && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (ve.createEvent) {
                            var e = ve.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, ke, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !Y && te.restart(!0), g && r && g(se), b && b(se, r)
                }
            };
        te = se._dc = Me.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, ze(this), se.enable = function(e) {
            return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", bf, s, U), 0 <= t.indexOf("wheel") && B(i, "wheel", cf, s, U), (0 <= t.indexOf("touch") && Ae || 0 <= t.indexOf("pointer")) && (B(i, Le[0], xe, s, U), B(ve, Le[2], we), B(ve, Le[3], we), Q && B(i, "click", Se, !1, !0), j && B(i, "click", gf), I && B(ve, "gesturestart", _e), q && B(ve, "gestureend", af), D && B(i, Be + "enter", ef), R && B(i, Be + "leave", ff), z && B(i, Be + "move", df)), se.isEnabled = !0, e && e.type && xe(e), H && H(se)), se
        }, se.disable = function() {
            se.isEnabled && (Fe.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Le[1], Ye, !0)), C(he ? ve : i, "scroll", bf, U), C(i, "wheel", cf, U), C(i, Le[0], xe, U), C(ve, Le[2], we), C(ve, Le[3], we), C(i, "click", Se, !0), C(i, "click", gf), C(ve, "gesturestart", _e), C(ve, "gestureend", af), C(i, Be + "enter", ef), C(i, Be + "leave", ff), C(i, Be + "move", df), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se))
        }, se.kill = se.revert = function() {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Re === se && (Re = 0)
        }, Fe.push(se), Y && A(i) && (Re = se), se.enable(p)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    k.version = "3.11.5", k.create = function(e) {
        return new k(e)
    }, k.register = P, k.getAll = function() {
        return Fe.slice()
    }, k.getById = function(t) {
        return Fe.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, r() && Me.registerPlugin(k);

    function za() {
        return rt = 1
    }

    function Aa() {
        return rt = 0
    }

    function Ba(e) {
        return e
    }

    function Ca(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Da() {
        return "undefined" != typeof window
    }

    function Ea() {
        return Je || Da() && (Je = window.gsap) && Je.registerPlugin && Je
    }

    function Fa(e) {
        return !!~l.indexOf(e)
    }

    function Ga(e) {
        return z(e, "getBoundingClientRect") || (Fa(e) ? function() {
            return Lt.width = Ke.innerWidth, Lt.height = Ke.innerHeight, Lt
        } : function() {
            return Ct(e)
        })
    }

    function Ja(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - Ga(e)()[o] : Fa(e) ? (Ue[r] || Qe[r]) - (Ke["inner" + n] || Ue["client" + n] || Qe["client" + n]) : e[r] - e["offset" + n])
    }

    function Ka(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function La(e) {
        return "string" == typeof e
    }

    function Ma(e) {
        return "function" == typeof e
    }

    function Na(e) {
        return "number" == typeof e
    }

    function Oa(e) {
        return "object" == typeof e
    }

    function Pa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Qa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function fb(e) {
        return Ke.getComputedStyle(e)
    }

    function hb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function jb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function kb(e) {
        var t, r = [],
            n = e.labels,
            o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r
    }

    function mb(o) {
        var i = Je.utils.snap(o),
            a = Array.isArray(o) && o.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return i(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = i(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
        }
    }

    function ob(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function pb(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function qb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function rb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    }

    function vb(e, t) {
        if (La(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in R ? R[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function wb(e, t, r, n, o, i, a, s) {
        var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            p = o.fontWeight,
            d = Ge.createElement("div"),
            g = Fa(r) || "fixed" === z(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? Qe : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === je ? S : T) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = b, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], X(d, 0, n, b), d
    }

    function Bb() {
        return 34 < pt() - dt && (w = w || requestAnimationFrame(W))
    }

    function Cb() {
        v && v.isPressed && !(v.startX > Qe.clientWidth) || (Ie.cache++, v ? w = w || requestAnimationFrame(W) : W(), dt || q("scrollStart"), dt = pt())
    }

    function Db() {
        y = Ke.innerWidth, m = Ke.innerHeight
    }

    function Eb() {
        Ie.cache++, tt || h || Ge.fullscreenElement || Ge.webkitFullscreenElement || b && y === Ke.innerWidth && !(Math.abs(Ke.innerHeight - m) > .25 * Ke.innerHeight) || c.restart(!0)
    }

    function Hb() {
        return qb($, "scrollEnd", Hb) || Bt(!0)
    }

    function Kb(e) {
        for (var t = 0; t < V.length; t += 5)(!e || V[t + 4] && V[t + 4].query === e) && (V[t].style.cssText = V[t + 1], V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""), V[t + 3].uncache = 1)
    }

    function Lb(e, t) {
        var r;
        for (nt = 0; nt < Pt.length; nt++) !(r = Pt[nt]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Kb(t), t || q("revert")
    }

    function Mb(e, t) {
        Ie.cache++, !t && lt || Ie.forEach(function(e) {
            return Ma(e) && e.cacheID++ && (e.rec = 0)
        }), La(e) && (Ke.history.scrollRestoration = x = e)
    }

    function Zb(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = j.length, a = t.style, s = e.style; i--;) a[o = j[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[T] = s[S] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[vt] = jb(e, He) + Mt, a[bt] = jb(e, je) + Mt, a[_t] = s[St] = s.top = s.left = "0", Rt(n), s[vt] = s.maxWidth = r[vt], s[bt] = s.maxHeight = r[bt], s[_t] = r[_t], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function ac(e) {
        for (var t = U.length, r = e.style, n = [], o = 0; o < t; o++) n.push(U[o], r[U[o]]);
        return n.t = e, n
    }

    function dc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
        Ma(e) && (e = e(s)), La(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? vb("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0), Na(e)) p && (e = Je.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
        else {
            Ma(t) && (t = t(s));
            var b, m, y, x, w = (e || "0").split(" ");
            h = J(t) || Qe, (b = Ct(h) || {}) && (b.left || b.top) || "none" !== fb(h).display || (x = h.style.display, h.style.display = "block", b = Ct(h), x ? h.style.display = x : h.style.removeProperty("display")), m = vb(w[0], b[n.d]), y = vb(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + o - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (i) {
            var _ = e + r,
                S = i._isStart;
            d = "scroll" + n.d2, X(i, _, n, S && 20 < _ || !S && (u ? Math.max(Qe[d], Ue[d]) : i.parentNode[d]) <= _ + 1), u && (l = Ct(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Mt))
        }
        return p && h && (d = Ct(h), p.seek(f), g = Ct(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e)
    }

    function fc(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Qe) {
                for (o in e._stOrig = a.cssText, i = fb(e)) + o || Z.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Je.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function gc(r, e, n) {
        var o = e,
            i = o;
        return function(e) {
            var t = Math.round(r());
            return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && (e = t, n && n()), i = o, o = e
        }
    }

    function hc(c, e) {
        function _j(e, t, r, n, o) {
            var i = _j.tween,
                a = t.onComplete,
                s = {};
            r = r || u();
            var l = gc(u, r, function() {
                i.kill(), _j.tween = 0
            });
            return o = n && o || 0, n = n || e - r, i && i.kill(), t[f] = e, (t.modifiers = s)[f] = function() {
                return l(r + n * i.ratio + o * i.ratio * i.ratio)
            }, t.onUpdate = function() {
                Ie.cache++, W()
            }, t.onComplete = function() {
                _j.tween = 0, a && a.call(i)
            }, i = _j.tween = Je.to(c, t)
        }
        var u = K(c, e),
            f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function() {
            return _j.tween && _j.tween.kill() && (_j.tween = 0)
        }, pb(c, "wheel", u.wheelHandler), $.isTouch && pb(c, "touchmove", u.wheelHandler), _j
    }
    var Je, s, Ke, Ge, Ue, Qe, l, c, Ze, $e, et, u, tt, rt, f, nt, p, d, g, ot, it, h, v, b, m, y, E, at, x, st, w, lt, ct, ut, ft = 1,
        pt = Date.now,
        _ = pt(),
        dt = 0,
        gt = 0,
        ht = Math.abs,
        S = "right",
        T = "bottom",
        vt = "width",
        bt = "height",
        mt = "Right",
        yt = "Left",
        xt = "Top",
        wt = "Bottom",
        _t = "padding",
        St = "margin",
        Tt = "Width",
        D = "Height",
        Mt = "px",
        Ct = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== fb(e)[f] && Je.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        kt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Et = {
            toggleActions: "play",
            anticipatePin: 0
        },
        R = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var o = {
                    display: "block"
                },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + Tt] = 1, o["border" + a + Tt] = 0, o[r.p] = t + "px", Je.set(e, o)
        },
        Pt = [],
        Ot = {},
        Y = {},
        I = [],
        q = function _dispatch(e) {
            return Y[e] && Y[e].map(function(e) {
                return e()
            }) || I
        },
        V = [],
        At = 0,
        Bt = function _refreshAll(e, t) {
            if (!dt || e) {
                lt = $.isRefreshing = !0, Ie.forEach(function(e) {
                    return Ma(e) && e.cacheID++ && (e.rec = e())
                });
                var r = q("refreshInit");
                ot && $.sort(), t || Lb(), Ie.forEach(function(e) {
                    Ma(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), Pt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), Pt.forEach(function(e, t) {
                    if (e._subPinOffset && e.pin) {
                        var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            n = e.pin[r];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh()
                    }
                }), Pt.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ja(e.scroller, e._dir)))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), Ie.forEach(function(e) {
                    Ma(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Mb(x, 1), c.pause(), At++, W(lt = 2), Pt.forEach(function(e) {
                    return Ma(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), lt = $.isRefreshing = !1, q("refresh")
            } else pb($, "scrollEnd", Hb)
        },
        H = 0,
        Dt = 1,
        W = function _updateAll(e) {
            if (!lt || 2 === e) {
                $.isUpdating = !0, ut && ut.update(0);
                var t = Pt.length,
                    r = pt(),
                    n = 50 <= r - _,
                    o = t && Pt[0].scroll();
                if (Dt = o < H ? -1 : 1, lt || (H = o), n && (dt && !rt && 200 < r - dt && (dt = 0, q("scrollEnd")), et = _, _ = r), Dt < 0) {
                    for (nt = t; 0 < nt--;) Pt[nt] && Pt[nt].update(0, n);
                    Dt = 1
                } else
                    for (nt = 0; nt < t; nt++) Pt[nt] && Pt[nt].update(0, n);
                $.isUpdating = !1
            }
            w = 0
        },
        j = ["left", "top", T, S, St + wt, St + mt, St + xt, St + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        U = j.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", St, _t, _t + xt, _t + mt, _t + wt, _t + yt]),
        Q = /([A-Z])/g,
        Rt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    o = e.length,
                    i = 0;
                for ((e.t._gsap || Je.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Q, "-$1").toLowerCase())
            }
        },
        Lt = {
            left: 0,
            top: 0
        },
        Z = /(webkit|moz|length|cssText|inset)/i,
        $ = (ScrollTrigger.prototype.init = function init(M, C) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), gt) {
                var k, n, d, E, P, O, A, B, D, R, L, e, F, X, Y, I, q, t, N, b, V, H, m, W, y, j, x, r, w, _, G, o, g, U, Q, Z, $, S, i, T = (M = hb(La(M) || Na(M) || M.nodeType ? {
                        trigger: M
                    } : M, Et)).onUpdate,
                    ee = M.toggleClass,
                    a = M.id,
                    te = M.onToggle,
                    re = M.onRefresh,
                    ne = M.scrub,
                    oe = M.trigger,
                    ie = M.pin,
                    ae = M.pinSpacing,
                    se = M.invalidateOnRefresh,
                    le = M.anticipatePin,
                    s = M.onScrubComplete,
                    h = M.onSnapComplete,
                    ce = M.once,
                    ue = M.snap,
                    fe = M.pinReparent,
                    l = M.pinSpacer,
                    pe = M.containerAnimation,
                    de = M.fastScrollEnd,
                    ge = M.preventOverlaps,
                    he = M.horizontal || M.containerAnimation && !1 !== M.horizontal ? He : je,
                    ve = !ne && 0 !== ne,
                    be = J(M.scroller || Ke),
                    c = Je.core.getCache(be),
                    me = Fa(be),
                    ye = "fixed" === ("pinType" in M ? M.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [M.onEnter, M.onLeave, M.onEnterBack, M.onLeaveBack],
                    we = ve && M.toggleActions.split(" "),
                    u = "markers" in M ? M.markers : Et.markers,
                    _e = me ? 0 : parseFloat(fb(be)["border" + he.p2 + Tt]) || 0,
                    Se = this,
                    Te = M.onRefreshInit && function() {
                        return M.onRefreshInit(Se)
                    },
                    Me = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            o = r.d2,
                            i = r.a;
                        return (i = z(e, "getBoundingClientRect")) ? function() {
                            return i()[n]
                        } : function() {
                            return (t ? Ke["inner" + o] : e["client" + o]) || 0
                        }
                    }(be, me, he),
                    Ce = function _getOffsetsFunc(e, t) {
                        return !t || ~qe.indexOf(e) ? Ga(e) : function() {
                            return Lt
                        }
                    }(be, me),
                    ke = 0,
                    Ee = 0,
                    Pe = K(be, he);
                if (at(Se), Se._dir = he, le *= 45, Se.scroller = be, Se.scroll = pe ? pe.time.bind(pe) : Pe, E = Pe(), Se.vars = M, C = C || M.animation, "refreshPriority" in M && (ot = 1, -9999 === M.refreshPriority && (ut = Se)), c.tweenScroll = c.tweenScroll || {
                        top: hc(be, je),
                        left: hc(be, He)
                    }, Se.tweenTo = k = c.tweenScroll[he.p], Se.scrubDuration = function(e) {
                        (o = Na(e) && e) ? G ? G.duration(e) : G = Je.to(C, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: o,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Se)
                            }
                        }): (G && G.progress(1).kill(), G = 0)
                    }, C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== M.immediateRender && C.duration() && C.render(0, !0, !0), Se.animation = C.pause(), (C.scrollTrigger = Se).scrubDuration(ne), G && G.resetTo && G.resetTo("totalProgress", 0), w = 0, a = a || C.vars.id), Pt.push(Se), ue && (Oa(ue) && !ue.push || (ue = {
                        snapTo: ue
                    }), "scrollBehavior" in Qe.style && Je.set(me ? [Qe, Ue] : be, {
                        scrollBehavior: "auto"
                    }), Ie.forEach(function(e) {
                        return Ma(e) && e.target === (me ? Ge.scrollingElement || Ue : be) && (e.smooth = !1)
                    }), d = Ma(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return Je.utils.snap(kb(t), e)
                        }
                    }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return mb(kb(r))(e, t.direction)
                        }
                    }(C) : !1 !== ue.directional ? function(e, t) {
                        return mb(ue.snapTo)(e, pt() - Ee < 500 ? 0 : t.direction)
                    } : Je.utils.snap(ue.snapTo), g = ue.duration || {
                        min: .1,
                        max: 2
                    }, g = Oa(g) ? $e(g.min, g.max) : $e(g, g), U = Je.delayedCall(ue.delay || o / 2 || .1, function() {
                        var e = Pe(),
                            t = pt() - Ee < 500,
                            r = k.tween;
                        if (!(t || Math.abs(Se.getVelocity()) < 10) || r || rt || ke === e) Se.isActive && ke !== e && U.restart(!0);
                        else {
                            var n = (e - O) / F,
                                o = C && !ve ? C.totalProgress() : n,
                                i = t ? 0 : (o - _) / (pt() - et) * 1e3 || 0,
                                a = Je.utils.clamp(-n, 1 - n, ht(i / 2) * i / .185),
                                s = n + (!1 === ue.inertia ? 0 : a),
                                l = $e(0, 1, d(s, Se)),
                                c = Math.round(O + l * F),
                                u = ue.onStart,
                                f = ue.onInterrupt,
                                p = ue.onComplete;
                            if (e <= A && O <= e && c !== e) {
                                if (r && !r._initted && r.data <= ht(c - e)) return;
                                !1 === ue.inertia && (a = l - n), k(c, {
                                    duration: g(ht(.185 * Math.max(ht(s - o), ht(l - o)) / i / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: ht(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return U.restart(!0) && f && f(Se)
                                    },
                                    onComplete: function onComplete() {
                                        Se.update(), ke = Pe(), w = _ = C && !ve ? C.totalProgress() : Se.progress, h && h(Se), p && p(Se)
                                    }
                                }, e, a * F, c - e - a * F), u && u(Se, k.tween)
                            }
                        }
                    }).pause()), a && (Ot[a] = Se), i = (i = (oe = Se.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Se), ie = !0 === ie ? oe : J(ie), La(ee) && (ee = {
                        targets: oe,
                        className: ee
                    }), ie && (!1 === ae || ae === St || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === fb(ie.parentNode).display) && _t), Se.pin = ie, (n = Je.core.getCache(ie)).spacer ? X = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = ac(l))), n.spacer = q = l || Ge.createElement("div"), q.classList.add("pin-spacer"), a && q.classList.add("pin-spacer-" + a), n.pinState = X = ac(ie)), !1 !== M.force3D && Je.set(ie, {
                        force3D: !0
                    }), Se.spacer = q = n.spacer, r = fb(ie), m = r[ae + he.os2], N = Je.getProperty(ie), b = Je.quickSetter(ie, he.a, Mt), Zb(ie, q, r), I = ac(ie)), u) {
                    e = Oa(u) ? hb(u, kt) : kt, R = wb("scroller-start", a, be, he, e, 0), L = wb("scroller-end", a, be, he, e, 0, R), t = R["offset" + he.op.d2];
                    var f = J(z(be, "content") || be);
                    B = this.markerStart = wb("start", a, f, he, e, t, 0, pe), D = this.markerEnd = wb("end", a, f, he, e, t, 0, pe), pe && (S = Je.quickSetter([B, D], he.a, Mt)), ye || qe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = fb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? Qe : be), Je.set([R, L], {
                        force3D: !0
                    }), y = Je.quickSetter(R, he.a, Mt), x = Je.quickSetter(L, he.a, Mt))
                }
                if (pe) {
                    var p = pe.vars.onUpdate,
                        v = pe.vars.onUpdateParams;
                    pe.eventCallback("onUpdate", function() {
                        Se.update(0, 0, 1), p && p.apply(pe, v || [])
                    })
                }
                Se.previous = function() {
                    return Pt[Pt.indexOf(Se) - 1]
                }, Se.next = function() {
                    return Pt[Pt.indexOf(Se) + 1]
                }, Se.revert = function(e, t) {
                    if (!t) return Se.kill(!0);
                    var r = !1 !== e || !Se.enabled,
                        n = tt;
                    r !== Se.isReverted && (r && (Z = Math.max(Pe(), Se.scroll.rec || 0), Q = Se.progress, $ = C && C.progress()), B && [B, D, R, L].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }), r && (tt = Se).update(r), !ie || fe && Se.isActive || (r ? function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t), o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ie, q, X) : Zb(ie, q, fb(ie), W)), r || Se.update(r), tt = n, Se.isReverted = r)
                }, Se.refresh = function(e, t) {
                    if (!tt && Se.enabled || t)
                        if (ie && e && dt) pb(ScrollTrigger, "scrollEnd", Hb);
                        else {
                            !lt && Te && Te(Se), tt = Se, Ee = pt(), k.tween && (k.tween.kill(), k.tween = 0), G && G.pause(), se && C && C.revert({
                                kill: !1
                            }).invalidate(), Se.isReverted || Se.revert(!0, !0), Se._subPinOffset = !1;
                            for (var r, n, o, i, a, s, l, c, u, f, p, d = Me(), g = Ce(), h = pe ? pe.duration() : Ja(be, he), v = F <= .01, b = 0, m = 0, y = M.end, x = M.endTrigger || oe, w = M.start || (0 !== M.start && oe ? ie ? "0 0" : "0 100%" : 0), _ = Se.pinnedContainer = M.pinnedContainer && J(M.pinnedContainer), S = oe && Math.max(0, Pt.indexOf(Se)) || 0, T = S; T--;)(s = Pt[T]).end || s.refresh(0, 1) || (tt = Se), !(l = s.pin) || l !== oe && l !== ie && l !== _ || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== Pt[T] && (S--, T--);
                            for (Ma(w) && (w = w(Se)), O = dc(w, oe, d, he, Pe(), B, R, Se, g, _e, ye, h, pe) || (ie ? -.001 : 0), Ma(y) && (y = y(Se)), La(y) && !y.indexOf("+=") && (~y.indexOf(" ") ? y = (La(w) ? w.split(" ")[0] : "") + y : (b = vb(y.substr(2), d), y = La(w) ? w : (pe ? Je.utils.mapRange(0, pe.duration(), pe.scrollTrigger.start, pe.scrollTrigger.end, O) : O) + b, x = oe)), A = Math.max(O, dc(y || (x ? "100% 0" : h), x, d, he, Pe() + b, D, L, Se, g, _e, ye, h, pe)) || -.001, F = A - O || (O -= .01) && .001, b = 0, T = S; T--;)(l = (s = Pt[T]).pin) && s.start - s._pinPush <= O && !pe && 0 < s.end && (r = s.end - s.start, (l === oe && s.start - s._pinPush < O || l === _) && !Na(w) && (b += r * (1 - s.progress)), l === ie && (m += r));
                            if (O += b, A += b, v && (Q = Je.utils.clamp(0, 1, Je.utils.normalize(O, A, Z))), Se._pinPush = m, B && b && ((r = {})[he.a] = "+=" + b, _ && (r[he.p] = "-=" + Pe()), Je.set([B, D], r)), ie) r = fb(ie), i = he === je, o = Pe(), V = parseFloat(N(he.a)) + m, !h && 1 < A && ((p = {
                                style: p = (me ? Ge.scrollingElement || Ue : be).style,
                                value: p["overflow" + he.a.toUpperCase()]
                            }).style["overflow" + he.a.toUpperCase()] = "scroll"), Zb(ie, q, r), I = ac(ie), n = Ct(ie, !0), c = ye && K(be, i ? He : je)(), ae && ((W = [ae + he.os2, F + m + Mt]).t = q, (T = ae === _t ? jb(ie, he) + F + m : 0) && W.push(he.d, T + Mt), Rt(W), _ && Pt.forEach(function(e) {
                                e.pin === _ && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            }), ye && Pe(Z)), ye && ((a = {
                                top: n.top + (i ? o - O : c) + Mt,
                                left: n.left + (i ? c : o - O) + Mt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[vt] = a.maxWidth = Math.ceil(n.width) + Mt, a[bt] = a.maxHeight = Math.ceil(n.height) + Mt, a[St] = a[St + xt] = a[St + mt] = a[St + wt] = a[St + yt] = "0", a[_t] = r[_t], a[_t + xt] = r[_t + xt], a[_t + mt] = r[_t + mt], a[_t + wt] = r[_t + wt], a[_t + yt] = r[_t + yt], Y = function _copyState(e, t, r) {
                                for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                                return o.t = e.t, o
                            }(X, a, fe), lt && Pe(0)), C ? (u = C._initted, it(1), C.render(C.duration(), !0, !0), H = N(he.a) - V + F + m, j = 1 < Math.abs(F - H), ye && j && Y.splice(Y.length - 2, 2), C.render(0, !0, !0), u || C.invalidate(!0), C.parent || C.totalTime(C.totalTime()), it(0)) : H = F, p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a));
                            else if (oe && Pe() && !pe)
                                for (n = oe.parentNode; n && n !== Qe;) n._pinOffset && (O -= n._pinOffset, A -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1, !0)
                            }), Se.start = O, Se.end = A, E = P = lt ? Z : Pe(), pe || lt || (E < Z && Pe(Z), Se.scroll.rec = 0), Se.revert(!1, !0), U && (ke = -1, Se.isActive && Pe(O + F * Q), U.restart(!0)), tt = 0, C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0), (v || Q !== Se.progress || pe) && (C && !ve && C.totalProgress(pe && O < -.001 && !Q ? Je.utils.normalize(O, A, 0) : Q, !0), Se.progress = (E - O) / F === Q ? 0 : Q), ie && ae && (q._pinOffset = Math.round(Se.progress * H)), G && G.invalidate(), re && !lt && re(Se)
                        }
                }, Se.getVelocity = function() {
                    return (Pe() - P) / (pt() - et) * 1e3 || 0
                }, Se.endAnimation = function() {
                    Pa(Se.callbackAnimation), C && (G ? G.progress(1) : C.paused() ? ve || Pa(C, Se.direction < 0, 1) : Pa(C, C.reversed()))
                }, Se.labelToScroll = function(e) {
                    return C && C.labels && (O || Se.refresh() || O) + C.labels[e] / C.duration() * F || 0
                }, Se.getTrailing = function(t) {
                    var e = Pt.indexOf(Se),
                        r = 0 < Se.direction ? Pt.slice(0, e).reverse() : Pt.slice(e + 1);
                    return (La(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Se.direction ? e.end <= O : e.start >= A
                    })
                }, Se.update = function(e, t, r) {
                    if (!pe || r || e) {
                        var n, o, i, a, s, l, c, u = !0 === lt ? Z : Se.scroll(),
                            f = e ? 0 : (u - O) / F,
                            p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            d = Se.progress;
                        if (t && (P = E, E = pe ? Pe() : u, ue && (_ = w, w = C && !ve ? C.totalProgress() : p)), le && !p && ie && !tt && !ft && dt && O < u + (u - P) / (pt() - et) * le && (p = 1e-4), p !== d && Se.enabled) {
                            if (a = (s = (n = Se.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Se.direction = d < p ? 1 : -1, Se.progress = p, a && !tt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = C && ("complete" === i || "reset" === i || i in C))), ge && (s || c) && (c || ne || !C) && (Ma(ge) ? ge(Se) : Se.getTrailing(ge).forEach(function(e) {
                                    return e.endAnimation()
                                })), ve || (!G || tt || ft ? C && C.totalProgress(p, !!tt) : (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", p, C._tTime / C._tDur) : (G.vars.totalProgress = p, G.invalidate().restart()))), ie)
                                if (e && ae && (q.style[ae + he.os2] = m), ye) {
                                    if (a) {
                                        if (l = !e && d < p && u < A + 1 && u + 1 >= Ja(be, he), fe)
                                            if (e || !n && !l) fc(ie, q);
                                            else {
                                                var g = Ct(ie, !0),
                                                    h = u - O;
                                                fc(ie, Qe, g.top + (he === je ? h : 0) + Mt, g.left + (he === je ? 0 : h) + Mt)
                                            }
                                        Rt(n || l ? Y : I), j && p < 1 && n || b(V + (1 !== p || l ? 0 : H))
                                    }
                                } else b(Ca(V + H * p));
                            !ue || k.tween || tt || ft || U.restart(!0), ee && (s || ce && p && (p < 1 || !st)) && Ze(ee.targets).forEach(function(e) {
                                return e.classList[n || ce ? "add" : "remove"](ee.className)
                            }), !T || ve || e || T(Se), a && !tt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()), T && T(Se)), !s && st || (te && s && Qa(Se, te), xe[o] && Qa(Se, xe[o]), ce && (1 === p ? Se.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === p ? 1 : 3] && Qa(Se, xe[o])), de && !n && Math.abs(Se.getVelocity()) > (Na(de) ? de : 2500) && (Pa(Se.callbackAnimation), G ? G.progress(1) : Pa(C, "reverse" === i ? 1 : !p, 1))) : ve && T && !tt && T(Se)
                        }
                        if (x) {
                            var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
                            y(v + (R._isFlipped ? 1 : 0)), x(v)
                        }
                        S && S(-u / pe.duration() * (pe._caScrollDist || 0))
                    }
                }, Se.enable = function(e, t) {
                    Se.enabled || (Se.enabled = !0, pb(be, "resize", Eb), pb(me ? Ge : be, "scroll", Cb), Te && pb(ScrollTrigger, "refreshInit", Te), !1 !== e && (Se.progress = Q = 0, E = P = ke = Pe()), !1 !== t && Se.refresh())
                }, Se.getTween = function(e) {
                    return e && k ? k.tween : G
                }, Se.setPositions = function(e, t) {
                    ie && (V += e - O, H += t - e - F, ae === _t && Se.adjustPinSpacing(t - e - F)), Se.start = O = e, Se.end = A = t, F = t - e, Se.update()
                }, Se.adjustPinSpacing = function(e) {
                    if (W && e) {
                        var t = W.indexOf(he.d) + 1;
                        W[t] = parseFloat(W[t]) + e + Mt, W[1] = parseFloat(W[1]) + e + Mt, Rt(W)
                    }
                }, Se.disable = function(e, t) {
                    if (Se.enabled && (!1 !== e && Se.revert(!0, !0), Se.enabled = Se.isActive = !1, t || G && G.pause(), Z = 0, n && (n.uncache = 1), Te && qb(ScrollTrigger, "refreshInit", Te), U && (U.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !me)) {
                        for (var r = Pt.length; r--;)
                            if (Pt[r].scroller === be && Pt[r] !== Se) return;
                        qb(be, "resize", Eb), qb(be, "scroll", Cb)
                    }
                }, Se.kill = function(e, t) {
                    Se.disable(e, t), G && !t && G.kill(), a && delete Ot[a];
                    var r = Pt.indexOf(Se);
                    0 <= r && Pt.splice(r, 1), r === nt && 0 < Dt && nt--, r = 0, Pt.forEach(function(e) {
                        return e.scroller === Se.scroller && (r = 1)
                    }), r || lt || (Se.scroll.rec = 0), C && (C.scrollTrigger = null, e && C.revert({
                        kill: !1
                    }), t || C.kill()), B && [B, D, R, L].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), ut === Se && (ut = 0), ie && (n && (n.uncache = 1), r = 0, Pt.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), M.onKill && M.onKill(Se)
                }, Se.enable(!1, !1), i && i(Se), C && C.add && !F ? Je.delayedCall(.01, function() {
                    return O || A || Se.refresh()
                }) && (F = .01) && (O = A = 0) : Se.refresh(), ie && function _queueRefreshAll() {
                    if (ct !== At) {
                        var e = ct = At;
                        requestAnimationFrame(function() {
                            return e === At && Bt(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Ba
        }, ScrollTrigger.register = function register(e) {
            return s || (Je = e || Ea(), Da() && window.document && ScrollTrigger.enable(), s = gt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) Et[t] = e[t];
            return Et
        }, ScrollTrigger.disable = function disable(t, r) {
            gt = 0, Pt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), qb(Ke, "wheel", Cb), qb(Ge, "scroll", Cb), clearInterval(u), qb(Ge, "touchcancel", Ba), qb(Qe, "touchstart", Ba), ob(qb, Ge, "pointerdown,touchstart,mousedown", za), ob(qb, Ge, "pointerup,touchend,mouseup", Aa), c.kill(), Ka(qb);
            for (var e = 0; e < Ie.length; e += 3) rb(qb, Ie[e], Ie[e + 1]), rb(qb, Ie[e], Ie[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Ke = window, Ge = document, Ue = Ge.documentElement, Qe = Ge.body, Je && (Ze = Je.utils.toArray, $e = Je.utils.clamp, at = Je.core.context || Ba, it = Je.core.suppressOverwrites || Ba, x = Ke.history.scrollRestoration || "auto", H = Ke.pageYOffset, Je.core.globals("ScrollTrigger", ScrollTrigger), Qe)) {
                gt = 1,
                    function _rafBugFix() {
                        return gt && requestAnimationFrame(_rafBugFix)
                    }(), k.register(Je), ScrollTrigger.isTouch = k.isTouch, E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), pb(Ke, "wheel", Cb), l = [Ke, Ge, Ue, Qe], Je.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                        var t, r = Je.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r
                    }, Je.addEventListener("matchMediaInit", function() {
                        return Lb()
                    }), Je.addEventListener("matchMediaRevert", function() {
                        return Kb()
                    }), Je.addEventListener("matchMedia", function() {
                        Bt(0, 1), q("matchMedia")
                    }), Je.matchMedia("(orientation: portrait)", function() {
                        return Db(), Db
                    })) : console.warn("Requires GSAP 3.11.0 or later"), Db(), pb(Ge, "scroll", Cb);
                var e, t, r = Qe.style,
                    n = r.borderTopStyle,
                    o = Je.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", e = Ct(Qe), je.m = Math.round(e.top + je.sc()) || 0, He.m = Math.round(e.left + He.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Bb, 250), Je.delayedCall(.5, function() {
                        return ft = 0
                    }), pb(Ge, "touchcancel", Ba), pb(Qe, "touchstart", Ba), ob(pb, Ge, "pointerdown,touchstart,mousedown", za), ob(pb, Ge, "pointerup,touchend,mouseup", Aa), f = Je.utils.checkPrefix("transform"), U.push(f), s = pt(), c = Je.delayedCall(.2, Bt).pause(), g = [Ge, "visibilitychange", function() {
                        var e = Ke.innerWidth,
                            t = Ke.innerHeight;
                        Ge.hidden ? (p = e, d = t) : p === e && d === t || Eb()
                    }, Ge, "DOMContentLoaded", Bt, Ke, "load", Bt, Ke, "resize", Eb], Ka(pb), Pt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < Ie.length; t += 3) rb(qb, Ie[t], Ie[t + 1]), rb(qb, Ie[t], Ie[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (st = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Bb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ka(qb) || Ka(pb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e),
                n = Ie.indexOf(r),
                o = Fa(r);
            ~n && Ie.splice(n, o ? 6 : 2), t && (o ? qe.unshift(Ke, t, Qe, t, Ue, t) : qe.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            Pt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (La(e) ? J(e) : e).getBoundingClientRect(),
                o = n[r ? vt : bt] * t || 0;
            return r ? 0 < n.right - o && n.left + o < Ke.innerWidth : 0 < n.bottom - o && n.top + o < Ke.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            La(e) && (e = J(e));
            var n = e.getBoundingClientRect(),
                o = n[r ? vt : bt],
                i = null == t ? o / 2 : t in R ? R[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / Ke.innerWidth : (n.top + i) / Ke.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (Pt.slice(0).forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = Y.killAll || [];
                Y = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(Je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    $.version = "3.11.5", $.saveStyles = function(e) {
        return e ? Ze(e).forEach(function(e) {
            if (e && e.style) {
                var t = V.indexOf(e);
                0 <= t && V.splice(t, 5), V.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Je.core.getCache(e), at())
            }
        }) : V
    }, $.revert = function(e, t) {
        return Lb(!e, t)
    }, $.create = function(e, t) {
        return new $(e, t)
    }, $.refresh = function(e) {
        return e ? Eb() : (s || $.register()) && Bt(!0)
    }, $.update = function(e) {
        return ++Ie.cache && W(!0 === e ? 2 : 0)
    }, $.clearScrollMemory = Mb, $.maxScroll = function(e, t) {
        return Ja(e, t ? He : je)
    }, $.getScrollFunc = function(e, t) {
        return K(J(e), t ? He : je)
    }, $.getById = function(e) {
        return Ot[e]
    }, $.getAll = function() {
        return Pt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, $.isScrolling = function() {
        return !!dt
    }, $.snapDirectional = mb, $.addEventListener = function(e, t) {
        var r = Y[e] || (Y[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, $.removeEventListener = function(e, t) {
        var r = Y[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, $.batch = function(e, t) {
        function Qo(e, t) {
            var r = [],
                n = [],
                o = Je.delayedCall(i, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }
        var r, n = [],
            o = {},
            i = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && Ma(t[r]) && "onRefreshInit" !== r ? Qo(0, t[r]) : t[r];
        return Ma(a) && (a = a(), pb($, "refresh", function() {
            return a = t.batchMax()
        })), Ze(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push($.create(t))
        }), n
    };

    function jc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function kc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none", e === Ue && kc(Qe, t)
    }

    function mc(e) {
        var t, r = e.event,
            n = e.target,
            o = e.axis,
            i = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = i._gsap || Je.core.getCache(i),
            s = pt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== Qe && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = fb(i)).overflowY] && !te[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !Fa(i) && (te[(t = fb(i)).overflowY] || te[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function nc(e, t, r, n) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && mc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && pb(Ge, k.eventTypes[0], ne, !1, !0)
            },
            onDisable: function onDisable() {
                return qb(Ge, k.eventTypes[0], ne, !0)
            }
        })
    }

    function rc(e) {
        function Np() {
            return o = !1
        }

        function Qp() {
            i = Ja(d, je), M = $e(E ? 1 : 0, i), f && (T = $e(0, Ja(d, He))), l = At
        }

        function Rp() {
            v._gsap.y = Ca(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function Xp() {
            Qp(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i))
        }
        Oa(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            p = e.onRelease,
            d = J(e.target) || Ue,
            g = Je.core.globals().ScrollSmoother,
            h = g && g.get(),
            v = E && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            b = K(d, je),
            m = K(d, He),
            y = 1,
            x = (k.isTouch && Ke.visualViewport ? Ke.visualViewport.scale * Ke.visualViewport.width : Ke.outerWidth) / Ke.innerWidth,
            w = 0,
            _ = Ma(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            S = nc(d, e.type, !0, r),
            T = Ba,
            M = Ba;
        return v && Je.set(v, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return E && "touchmove" === e.type && function ignoreDrag() {
                if (o) {
                    requestAnimationFrame(Np);
                    var e = Ca(n.deltaY / 2),
                        t = M(b.v - e);
                    if (v && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = Ca((parseFloat(v && v._gsap.y) || 0) - b.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = Ie.cache, W()
                    }
                    return !0
                }
                b.offset && Rp(), o = !0
            }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            o = !1;
            var e = y;
            y = Ca((Ke.visualViewport && Ke.visualViewport.scale || 1) / x), a.pause(), e !== y && kc(d, 1.01 < y || !f && "x"), c = m(), u = b(), Qp(), l = At
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && Rp(), t) {
                Ie.cache++;
                var r, n, o = _();
                f && (n = (r = m()) + .05 * o * -e.velocityX / .227, o *= jc(m, r, n, Ja(d, He)), a.vars.scrollX = T(n)), n = (r = b()) + .05 * o * -e.velocityY / .227, o *= jc(b, r, n, Ja(d, je)), a.vars.scrollY = M(n), a.invalidate().duration(o).play(.01), (E && a.vars.scrollY >= i || i - 1 <= r) && Je.to({}, {
                    onUpdate: Xp,
                    duration: o
                })
            } else s.restart(!0);
            p && p(e)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < pt() - w && (l = 0, w = pt())
        }, e.onChange = function(e, t, r, n, o) {
            if (At !== l && Qp(), t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
                b.offset && Rp();
                var i = o[2] === r,
                    a = i ? u + e.startY - e.y : b() + r - o[1],
                    s = M(a);
                i && a !== s && (u += s - a), b(s)
            }(r || t) && W()
        }, e.onEnable = function() {
            kc(d, !f && "x"), $.addEventListener("refresh", Xp), pb(Ke, "resize", Xp), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), S.enable()
        }, e.onDisable = function() {
            kc(d, !0), qb(Ke, "resize", Xp), $.removeEventListener("refresh", Xp), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new k(e)).iOS = E) && !b() && b(1), E && Je.ticker.add(Ba), s = n._dc, a = Je.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: gc(b, b(), function() {
                    return a.pause()
                })
            },
            onUpdate: W,
            onComplete: s.vars.onComplete
        }), n
    }
    var ee, te = {
            auto: 1,
            scroll: 1
        },
        re = /(input|label|select|textarea)/i,
        ne = function _captureInputs(e) {
            var t = re.test(e.target.tagName);
            (t || ee) && (e._gsapAllow = !0, ee = t)
        };
    $.sort = function(e) {
        return Pt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, $.observe = function(e) {
        return new k(e)
    }, $.normalizeScroll = function(e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill();
        var t = e instanceof k ? e : rc(e);
        return v && v.target === t.target && v.kill(), Fa(t.target) && (v = t), t
    }, $.core = {
        _getVelocityProp: L,
        _inputObserver: nc,
        _scrollers: Ie,
        _proxies: qe,
        bridge: {
            ss: function ss() {
                dt || q("scrollStart"), dt = pt()
            },
            ref: function ref() {
                return tt
            }
        }
    }, Ea() && Je.registerPlugin($), e.ScrollTrigger = $, e.default = $;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});

;
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = !0, ot())
    }, S.fx.stop = function() {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    const t = "transitionend",
        e = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        i = t => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null
        },
        n = t => {
            const i = e(t);
            return i ? document.querySelector(i) : null
        },
        s = e => {
            e.dispatchEvent(new Event(t))
        },
        o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        a = (t, e, i) => {
            Object.keys(i).forEach((n => {
                const s = i[n],
                    r = e[n],
                    a = r && o(r) ? "element" : null == (l = r) ? `${l}` : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                var l;
                if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
            }))
        },
        l = t => !(!o(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        c = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        h = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null
        },
        d = () => {},
        u = t => {
            t.offsetHeight
        },
        f = () => {
            const {
                jQuery: t
            } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        },
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        g = t => {
            var e;
            e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", (() => {
                p.forEach((t => t()))
            })), p.push(e)) : e()
        },
        _ = t => {
            "function" == typeof t && t()
        },
        b = (e, i, n = !0) => {
            if (!n) return void _(e);
            const o = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const n = Number.parseFloat(e),
                    s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(i) + 5;
            let r = !1;
            const a = ({
                target: n
            }) => {
                n === i && (r = !0, i.removeEventListener(t, a), _(e))
            };
            i.addEventListener(t, a), setTimeout((() => {
                r || s(i)
            }), o)
        },
        v = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))]
        },
        y = /[^.]*(?=\..*)\.|.*/,
        w = /\..*/,
        E = /::\d+$/,
        A = {};
    let T = 1;
    const O = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        C = /^(mouseenter|mouseleave)/i,
        k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function L(t, e) {
        return e && `${e}::${T++}` || t.uidEvent || T++
    }

    function x(t) {
        const e = L(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function D(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o
        }
        return null
    }

    function S(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = P(t);
        return k.has(o) || (o = t), [n, s, o]
    }

    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if (i || (i = n, n = null), C.test(e)) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            n ? n = t(n) : i = t(i)
        }
        const [o, r, a] = S(e, i, n), l = x(t), c = l[a] || (l[a] = {}), h = D(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && s);
        const d = L(r, e.replace(y, "")),
            u = o ? function(t, e, i) {
                return function n(s) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = s; r && r !== this; r = r.parentNode)
                        for (let a = o.length; a--;)
                            if (o[a] === r) return s.delegateTarget = r, n.oneOff && j.off(t, s.type, e, i), i.apply(r, [s]);
                    return null
                }
            }(t, i, n) : function(t, e) {
                return function i(n) {
                    return n.delegateTarget = t, i.oneOff && j.off(t, n.type, e), e.apply(t, [n])
                }
            }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function I(t, e, i, n, s) {
        const o = D(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function P(t) {
        return t = t.replace(w, ""), O[t] || t
    }
    const j = {
            on(t, e, i, n) {
                N(t, e, i, n, !1)
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0)
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = S(e, i, n), a = r !== e, l = x(t), c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void I(t, l, r, o, s ? i : null)
                }
                c && Object.keys(l).forEach((i => {
                    ! function(t, e, i, n) {
                        const s = e[i] || {};
                        Object.keys(s).forEach((o => {
                            if (o.includes(n)) {
                                const n = s[o];
                                I(t, e, i, n.originalHandler, n.delegationSelector)
                            }
                        }))
                    }(t, l, i, e.slice(1))
                }));
                const h = l[r] || {};
                Object.keys(h).forEach((i => {
                    const n = i.replace(E, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        I(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                }))
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = f(),
                    s = P(e),
                    o = e !== s,
                    r = k.has(s);
                let a, l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== i && Object.keys(i).forEach((t => {
                    Object.defineProperty(d, t, {
                        get: () => i[t]
                    })
                })), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
            }
        },
        M = new Map,
        H = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map);
                const n = M.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (t, e) => M.has(t) && M.get(t).get(e) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t)
            }
        };
    class B {
        constructor(t) {
            (t = r(t)) && (this._element = t, H.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                this[t] = null
            }))
        }
        _queueCallback(t, e, i = !0) {
            b(t, e, i)
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const R = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        j.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)) return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]()
        }))
    };
    class W extends B {
        static get NAME() {
            return "alert"
        }
        close() {
            if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = W.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    R(W, "close"), g(W);
    const $ = '[data-bs-toggle="button"]';
    class z extends B {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = z.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    function q(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function F(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    j.on(document, "click.bs.button.data-api", $, (t => {
        t.preventDefault();
        const e = t.target.closest($);
        z.getOrCreateInstance(e).toggle()
    })), g(z);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute(`data-bs-${F(e)}`, i)
            },
            removeDataAttribute(t, e) {
                t.removeAttribute(`data-bs-${F(e)}`)
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q(t.dataset[i])
                })), e
            },
            getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset
                }
            },
            position: t => ({
                top: t.offsetTop,
                left: t.offsetLeft
            })
        },
        V = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                return this.find(e, t).filter((t => !c(t) && l(t)))
            }
        },
        K = "carousel",
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        Q = "next",
        G = "prev",
        Z = "left",
        J = "right",
        tt = {
            ArrowLeft: J,
            ArrowRight: Z
        },
        et = "slid.bs.carousel",
        it = "active",
        nt = ".active.carousel-item";
    class st extends B {
        constructor(t, e) {
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
        }
        static get Default() {
            return X
        }
        static get NAME() {
            return K
        }
        next() {
            this._slide(Q)
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next()
        }
        prev() {
            this._slide(G)
        }
        pause(t) {
            t || (this._isPaused = !0), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = V.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void j.one(this._element, et, (() => this.to(t)));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? Q : G;
            this._slide(i, this._items[t])
        }
        _getConfig(t) {
            return t = { ...X,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(K, t, Y), t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? J : Z)
        }
        _addEventListeners() {
            this._config.keyboard && j.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), j.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                e = e => {
                    t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                },
                i = t => {
                    this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                },
                n = e => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                };
            V.find(".carousel-item img", this._element).forEach((t => {
                j.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
            })), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", (t => e(t))), j.on(this._element, "pointerup.bs.carousel", (t => n(t))), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", (t => e(t))), j.on(this._element, "touchmove.bs.carousel", (t => i(t))), j.on(this._element, "touchend.bs.carousel", (t => n(t))))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = tt[t.key];
            e && (t.preventDefault(), this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? V.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === Q;
            return v(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(V.findOne(nt, this._element));
            return j.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = V.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(it), i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = V.findOne(nt, this._element),
                s = this._getItemIndex(n),
                o = e || this._getItemByOrder(i, n),
                r = this._getItemIndex(o),
                a = Boolean(this._interval),
                l = i === Q,
                c = l ? "carousel-item-start" : "carousel-item-end",
                h = l ? "carousel-item-next" : "carousel-item-prev",
                d = this._orderToDirection(i);
            if (o && o.classList.contains(it)) return void(this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = () => {
                j.trigger(this._element, et, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                })
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), this._isSliding = !1, setTimeout(f, 0)
                };
                this._queueCallback(t, n, !0)
            } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [J, Z].includes(t) ? m() ? t === Z ? G : Q : t === Z ? Q : G : t
        }
        _orderToDirection(t) {
            return [Q, G].includes(t) ? m() ? t === G ? Z : J : t === G ? J : Z : t
        }
        static carouselInterface(t, e) {
            const i = st.getOrCreateInstance(t, e);
            let {
                _config: n
            } = i;
            "object" == typeof e && (n = { ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]()
            } else n.interval && n.ride && (i.pause(), i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                st.carouselInterface(this, t)
            }))
        }
        static dataApiClickHandler(t) {
            const e = n(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = { ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this)
                },
                s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault()
        }
    }
    j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", (() => {
        const t = V.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++) st.carouselInterface(t[e], st.getInstance(t[e]))
    })), g(st);
    const ot = "collapse",
        rt = {
            toggle: !0,
            parent: null
        },
        at = {
            toggle: "boolean",
            parent: "(null|element)"
        },
        lt = "show",
        ct = "collapse",
        ht = "collapsing",
        dt = "collapsed",
        ut = ":scope .collapse .collapse",
        ft = '[data-bs-toggle="collapse"]';
    class pt extends B {
        constructor(t, e) {
            super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            const n = V.find(ft);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t],
                    s = i(e),
                    o = V.find(s).filter((t => t === this._element));
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e))
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return rt
        }
        static get NAME() {
            return ot
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t, e = [];
            if (this._config.parent) {
                const t = V.find(ut, this._config.parent);
                e = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e => !t.includes(e)))
            }
            const i = V.findOne(this._selector);
            if (e.length) {
                const n = e.find((t => i !== t));
                if (t = n ? pt.getInstance(n) : null, t && t._isTransitioning) return
            }
            if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e.forEach((e => {
                i !== e && pt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t || H.set(e, "bs.collapse", null)
            }));
            const n = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase()+n.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n] = "", j.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[n] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    i = n(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), j.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt)
        }
        _getConfig(t) {
            return (t = { ...rt,
                ...U.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = r(t.parent), a(ot, t, at), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = V.find(ut, this._config.parent);
            V.find(ft, this._config.parent).filter((e => !t.includes(e))).forEach((t => {
                const e = n(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }))
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t => {
                e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e)
            }))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    j.on(document, "click.bs.collapse.data-api", ft, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this);
        V.find(e).forEach((t => {
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }))
    })), g(pt);
    var mt = "top",
        gt = "bottom",
        _t = "right",
        bt = "left",
        vt = "auto",
        yt = [mt, gt, _t, bt],
        wt = "start",
        Et = "end",
        At = "clippingParents",
        Tt = "viewport",
        Ot = "popper",
        Ct = "reference",
        kt = yt.reduce((function(t, e) {
            return t.concat([e + "-" + wt, e + "-" + Et])
        }), []),
        Lt = [].concat(yt, [vt]).reduce((function(t, e) {
            return t.concat([e, e + "-" + wt, e + "-" + Et])
        }), []),
        xt = "beforeRead",
        Dt = "read",
        St = "afterRead",
        Nt = "beforeMain",
        It = "main",
        Pt = "afterMain",
        jt = "beforeWrite",
        Mt = "write",
        Ht = "afterWrite",
        Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];

    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element
    }

    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement
    }

    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot)
    }
    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        },
        effect: function(t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) {
                                return t[e] = "", t
                            }), {});
                        zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) {
                            n.removeAttribute(t)
                        })))
                    }))
                }
        },
        requires: ["computeStyles"]
    };

    function Ut(t) {
        return t.split("-")[0]
    }

    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1
        }
    }

    function Kt(t) {
        var e = Vt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function Yt(t) {
        return Wt(t).getComputedStyle(t)
    }

    function Qt(t) {
        return ["table", "td", "th"].indexOf(Rt(t)) >= 0
    }

    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Zt(t) {
        return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t)
    }

    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null
    }

    function te(t) {
        for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position;) i = Jt(i);
        return i && ("html" === Rt(i) || "body" === Rt(i) && "static" === Yt(i).position) ? e : i || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
            for (var i = Zt(t); zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;) {
                var n = Yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function ee(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var ie = Math.max,
        ne = Math.min,
        se = Math.round;

    function oe(t, e, i) {
        return ie(t, ne(e, i))
    }

    function re(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }

    function ae(t, e) {
        return e.reduce((function(e, i) {
            return e[i] = t, e
        }), {})
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Ut(i.placement),
                l = ee(a),
                c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                        return re("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : t) ? t : ae(t, yt))
                    }(s.padding, i),
                    d = Kt(o),
                    u = "y" === l ? mt : bt,
                    f = "y" === l ? gt : _t,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = te(o),
                    _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    E = oe(v, w, y),
                    A = l;
                i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e)
            }
        },
        effect: function(t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function ce(t) {
        return t.split("-")[1]
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function de(t) {
        var e, i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d = !0 === h ? function(t) {
                var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1;
                return {
                    x: se(se(e * n) / n) || 0,
                    y: se(se(i * n) / n) || 0
                }
            }(r) : "function" == typeof h ? h(r) : r,
            u = d.x,
            f = void 0 === u ? 0 : u,
            p = d.y,
            m = void 0 === p ? 0 : p,
            g = r.hasOwnProperty("x"),
            _ = r.hasOwnProperty("y"),
            b = bt,
            v = mt,
            y = window;
        if (c) {
            var w = te(i),
                E = "clientHeight",
                A = "clientWidth";
            w === Wt(i) && "static" !== Yt(w = Gt(i)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w = w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n.width, f *= l ? 1 : -1)
        }
        var T, O = Object.assign({
            position: a
        }, c && he);
        return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e = {})[v] = _ ? m + "px" : "", e[b] = g ? f + "px" : "", e.transform = "", e))
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Ut(e.placement),
                    variation: ce(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = Wt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                    t.addEventListener("scroll", i.update, fe)
                })), a && l.addEventListener("resize", i.update, fe),
                function() {
                    o && c.forEach((function(t) {
                        t.removeEventListener("scroll", i.update, fe)
                    })), a && l.removeEventListener("resize", i.update, fe)
                }
        },
        data: {}
    };
    var me = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function ge(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return me[t]
        }))
    }
    var _e = {
        start: "end",
        end: "start"
    };

    function be(t) {
        return t.replace(/start|end/g, (function(t) {
            return _e[t]
        }))
    }

    function ve(t) {
        var e = Wt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft
    }

    function we(t) {
        var e = Yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ee(t) {
        return ["html", "body", "#document"].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t))
    }

    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = Wt(n),
            r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)))
    }

    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Oe(t, e) {
        return e === Tt ? Te(function(t) {
            var e = Wt(t),
                i = Gt(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            }
        }(t)) : zt(e) ? function(t) {
            var e = Vt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Te(function(t) {
            var e, i = Gt(t),
                n = ve(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + ye(t),
                l = -n.scrollTop;
            return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Gt(t)))
    }

    function Ce(t) {
        var e, i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Ut(s) : null,
            r = s ? ce(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case mt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case gt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function ke(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? At : o,
            a = i.rootBoundary,
            l = void 0 === a ? Tt : a,
            c = i.elementContext,
            h = void 0 === c ? Ot : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = re("number" != typeof p ? p : ae(p, yt)),
            g = h === Ot ? Ct : Ot,
            _ = t.rects.popper,
            b = t.elements[u ? g : h],
            v = function(t, e, i) {
                var n = "clippingParents" === e ? function(t) {
                        var e = Ae(Zt(t)),
                            i = ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 && zt(t) ? te(t) : t;
                        return $t(i) ? e.filter((function(t) {
                            return $t(t) && Xt(t, i) && "body" !== Rt(t)
                        })) : []
                    }(t) : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce((function(e, i) {
                        var n = Oe(t, i);
                        return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e
                    }), Oe(t, o));
                return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
            }($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
            y = Vt(t.elements.reference),
            w = Ce({
                reference: y,
                element: _,
                strategy: "absolute",
                placement: s
            }),
            E = Te(Object.assign({}, _, w)),
            A = h === Ot ? E : y,
            T = {
                top: v.top - A.top + m.top,
                bottom: A.bottom - v.bottom + m.bottom,
                left: v.left - A.left + m.left,
                right: A.right - v.right + m.right
            },
            O = t.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s];
            Object.keys(T).forEach((function(t) {
                var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
                    i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e
            }))
        }
        return T
    }

    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? Lt : l,
            h = ce(n),
            d = h ? a ? kt : kt.filter((function(t) {
                return ce(t) === h
            })) : yt,
            u = d.filter((function(t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function(e, i) {
            return e[i] = ke(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Ut(i)], e
        }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }
    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                        if (Ut(t) === vt) return [];
                        var e = ge(t);
                        return [be(t), e, be(e)]
                    }(g) : [ge(g)]), v = [g].concat(b).reduce((function(t, i) {
                        return t.concat(Ut(i) === vt ? Le(e, {
                            placement: i,
                            boundary: h,
                            rootBoundary: d,
                            padding: c,
                            flipVariations: p,
                            allowedAutoPlacements: m
                        }) : i)
                    }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++) {
                    var C = v[O],
                        k = Ut(C),
                        L = ce(C) === wt,
                        x = [mt, gt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = ke(e, {
                            placement: C,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c
                        }),
                        N = x ? L ? _t : bt : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N),
                        P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every((function(t) {
                            return t
                        }))) {
                        T = C, A = !1;
                        break
                    }
                    E.set(C, P)
                }
                if (A)
                    for (var j = function(t) {
                            var e = v.find((function(e) {
                                var i = E.get(e);
                                if (i) return i.slice(0, t).every((function(t) {
                                    return t
                                }))
                            }));
                            if (e) return T = e, "break"
                        }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function Se(t) {
        return [mt, _t, gt, bt].some((function(e) {
            return t[e] >= 0
        }))
    }
    const Ne = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ke(e, {
                        elementContext: "reference"
                    }),
                    a = ke(e, {
                        altBoundary: !0
                    }),
                    l = De(r, n),
                    c = De(a, s, o),
                    h = Se(l),
                    d = Se(c);
                e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": d
                })
            }
        },
        Ie = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = Lt.reduce((function(t, i) {
                        return t[i] = function(t, e, i) {
                            var n = Ut(t),
                                s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                                o = "function" == typeof i ? i(Object.assign({}, e, {
                                    placement: t
                                })) : i,
                                r = o[0],
                                a = o[1];
                            return r = r || 0, a = (a || 0) * s, [bt, _t].indexOf(n) >= 0 ? {
                                x: a,
                                y: r
                            } : {
                                x: r,
                                y: a
                            }
                        }(i, e.rects, o), t
                    }), {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
            }
        },
        Pe = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Ce({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement
                })
            },
            data: {}
        },
        je = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ke(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h
                    }),
                    _ = Ut(e.placement),
                    b = ce(e.placement),
                    v = !b,
                    y = ee(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O = "function" == typeof m ? m(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : m,
                    C = {
                        x: 0,
                        y: 0
                    };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? mt : bt,
                            L = "y" === y ? gt : _t,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            N = E[y] - g[L],
                            I = f ? -T[x] / 2 : 0,
                            P = b === wt ? A[x] : T[x],
                            j = b === wt ? -T[x] : -A[x],
                            M = e.elements.arrow,
                            H = f && M ? Kt(M) : {
                                width: 0,
                                height: 0
                            },
                            B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            R = B[k],
                            W = B[L],
                            $ = oe(0, A[x], H[x]),
                            z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
                            q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
                            F = e.elements.arrow && te(e.elements.arrow),
                            U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                            V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                            K = E[y] + z - V - U,
                            X = E[y] + q - V;
                        if (o) {
                            var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                            E[y] = Y, C[y] = Y - D
                        }
                        if (a) {
                            var Q = "x" === y ? mt : bt,
                                G = "x" === y ? gt : _t,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                            E[w] = et, C[w] = et - Z
                        }
                    }
                    e.modifiersData[n] = C
                }
            },
            requiresIfExists: ["offset"]
        };

    function Me(t, e, i) {
        void 0 === i && (i = !1);
        var n = zt(e);
        zt(e) && function(t) {
            var e = t.getBoundingClientRect();
            e.width, t.offsetWidth, e.height, t.offsetHeight
        }(e);
        var s, o, r = Gt(e),
            a = Vt(t),
            l = {
                scrollLeft: 0,
                scrollTop: 0
            },
            c = {
                x: 0,
                y: 0
            };
        return (n || !n && !i) && (("body" !== Rt(e) || we(r)) && (l = (s = e) !== Wt(s) && zt(s) ? {
            scrollLeft: (o = s).scrollLeft,
            scrollTop: o.scrollTop
        } : ve(s)), zt(e) ? ((c = Vt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = ye(r))), {
            x: a.left + l.scrollLeft - c.x,
            y: a.top + l.scrollTop - c.y,
            width: a.width,
            height: a.height
        }
    }

    function He(t) {
        var e = new Map,
            i = new Set,
            n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            i.has(t.name) || s(t)
        })), n
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function We(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Be : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Be, o),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function(i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                            reference: $t(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
                            popper: Ae(e)
                        };
                        var r, c, u = function(t) {
                            var e = He(t);
                            return Bt.reduce((function(t, i) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === i
                                })))
                            }), [])
                        }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) {
                            var i = t[e.name];
                            return t[e.name] = i ? Object.assign({}, i, e, {
                                options: Object.assign({}, i.options, e.options),
                                data: Object.assign({}, i.data, e.data)
                            }) : e, t
                        }), {}), Object.keys(c).map((function(t) {
                            return c[t]
                        }))));
                        return a.orderedModifiers = u.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect;
                            if ("function" == typeof s) {
                                var o = s({
                                    state: a,
                                    name: e,
                                    instance: h,
                                    options: n
                                });
                                l.push(o || function() {})
                            }
                        })), h.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (Re(e, i)) {
                                a.rects = {
                                    reference: Me(e, te(i), "fixed" === a.options.strategy),
                                    popper: Kt(i)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o && (a = o({
                                            state: a,
                                            options: l,
                                            name: d,
                                            instance: h
                                        }) || a)
                                    } else a.reset = !1, n = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise((function(t) {
                            h.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return r || (r = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                r = void 0, t(s())
                            }))
                        }))), r
                    }),
                    destroy: function() {
                        d(), c = !0
                    }
                };
            if (!Re(t, e)) return h;

            function d() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return h.setOptions(i).then((function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }
    var $e = We(),
        ze = We({
            defaultModifiers: [pe, Pe, ue, Ft]
        }),
        qe = We({
            defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne]
        });
    const Fe = Object.freeze({
            __proto__: null,
            popperGenerator: We,
            detectOverflow: ke,
            createPopperBase: $e,
            createPopper: qe,
            createPopperLite: ze,
            top: mt,
            bottom: gt,
            right: _t,
            left: bt,
            auto: vt,
            basePlacements: yt,
            start: wt,
            end: Et,
            clippingParents: At,
            viewport: Tt,
            popper: Ot,
            reference: Ct,
            variationPlacements: kt,
            placements: Lt,
            beforeRead: xt,
            read: Dt,
            afterRead: St,
            beforeMain: Nt,
            main: It,
            afterMain: Pt,
            beforeWrite: jt,
            write: Mt,
            afterWrite: Ht,
            modifierPhases: Bt,
            applyStyles: Ft,
            arrow: le,
            computeStyles: ue,
            eventListeners: pe,
            flip: xe,
            hide: Ne,
            offset: Ie,
            popperOffsets: Pe,
            preventOverflow: je
        }),
        Ue = "dropdown",
        Ve = "Escape",
        Ke = "Space",
        Xe = "ArrowUp",
        Ye = "ArrowDown",
        Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
        Ge = "click.bs.dropdown.data-api",
        Ze = "keydown.bs.dropdown.data-api",
        Je = "show",
        ti = '[data-bs-toggle="dropdown"]',
        ei = ".dropdown-menu",
        ii = m() ? "top-end" : "top-start",
        ni = m() ? "top-start" : "top-end",
        si = m() ? "bottom-end" : "bottom-start",
        oi = m() ? "bottom-start" : "bottom-end",
        ri = m() ? "left-start" : "right-start",
        ai = m() ? "right-start" : "left-start",
        li = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        ci = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class hi extends B {
        constructor(t, e) {
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return li
        }
        static get DefaultType() {
            return ci
        }
        static get NAME() {
            return Ue
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (c(this._element) || this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t => j.on(t, "mouseover", d))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (c(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => j.off(t, "mouseover", d))), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = { ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t
                }, a(Ue, t, this.constructor.DefaultType), "object" == typeof t.reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : o(this._config.reference) ? e = r(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(),
                n = i.modifiers.find((t => "applyStyles" === t.name && !1 === t.enabled));
            this._popper = qe(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t = this._element) {
            return t.classList.contains(Je)
        }
        _getMenuElement() {
            return V.next(this._element, ei)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
            i.length && v(i, e, t === Ye, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e = V.find(ti);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t) {
                    const e = t.composedPath(),
                        i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                n._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return n(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
            const e = this.classList.contains(Je);
            if (!e && t.key === Ve) return;
            if (t.preventDefault(), t.stopPropagation(), c(this)) return;
            const i = this.matches(ti) ? this : V.prev(this, ti)[0],
                n = hi.getOrCreateInstance(i);
            if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void(e && t.key !== Ke || hi.clearMenus());
            n.hide()
        }
    }
    j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, (function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle()
    })), g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top";
    class fi {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(di, "paddingRight", (e => e + t)), this._setElementAttributes(ui, "marginRight", (e => e - t))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`
            }))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = U.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i)
            }))
        }
        _applyManipulationCallback(t, e) {
            o(t) ? e(t) : V.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const pi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        mi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        },
        gi = "show",
        _i = "mousedown.bs.backdrop";
    class bi {
        constructor(t) {
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation((() => {
                _(t)
            }))) : _(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation((() => {
                this.dispose(), _(t)
            }))) : _(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = { ...pi,
                ..."object" == typeof t ? t : {}
            }).rootElement = r(t.rootElement), a("backdrop", t, mi), t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, (() => {
                _(this._config.clickCallback)
            })), this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = !1)
        }
        _emulateAnimation(t) {
            b(t, this._getElement(), this._config.isAnimated)
        }
    }
    const vi = {
            trapElement: null,
            autofocus: !0
        },
        yi = {
            trapElement: "element",
            autofocus: "boolean"
        },
        wi = ".bs.focustrap",
        Ei = "backward";
    class Ai {
        constructor(t) {
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        activate() {
            const {
                trapElement: t,
                autofocus: e
            } = this._config;
            this._isActive || (e && t.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), j.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, j.off(document, wi))
        }
        _handleFocusin(t) {
            const {
                target: e
            } = t, {
                trapElement: i
            } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward")
        }
        _getConfig(t) {
            return t = { ...vi,
                ..."object" == typeof t ? t : {}
            }, a("focustrap", t, yi), t
        }
    }
    const Ti = "modal",
        Oi = "Escape",
        Ci = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        ki = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        },
        Li = "hidden.bs.modal",
        xi = "show.bs.modal",
        Di = "resize.bs.modal",
        Si = "click.dismiss.bs.modal",
        Ni = "keydown.dismiss.bs.modal",
        Ii = "mousedown.dismiss.bs.modal",
        Pi = "modal-open",
        ji = "show",
        Mi = "modal-static";
    class Hi extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi
        }
        static get Default() {
            return Ci
        }
        static get NAME() {
            return Ti
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || j.trigger(this._element, xi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, (() => {
                j.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }))
            })), this._showBackdrop((() => this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback((() => this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((t => j.off(t, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = { ...Ci,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(Ti, t, ki), t
        }
        _showElement(t) {
            const e = this._isAnimated(),
                i = V.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u(this._element), this._element.classList.add(ji), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }), this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? j.on(this._element, Ni, (t => {
                this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition()
            })) : j.off(this._element, Ni)
        }
        _setResizeEvent() {
            this._isShown ? j.on(window, Di, (() => this._adjustDialog())) : j.off(window, Di)
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, Li)
            }))
        }
        _showBackdrop(t) {
            j.on(this._element, Si, (t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            })), this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const {
                classList: t,
                scrollHeight: e,
                style: i
            } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback((() => {
                t.remove(Mi), n || this._queueCallback((() => {
                    i.overflowY = ""
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            (!i && t && !m() || i && !t && m()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m() || !i && t && m()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = Hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = n(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, xi, (t => {
            t.defaultPrevented || j.one(e, Li, (() => {
                l(this) && this.focus()
            }))
        }));
        const i = V.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this)
    })), R(Hi), g(Hi);
    const Bi = "offcanvas",
        Ri = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        Wi = {
            backdrop: "boolean",
            keyboard: "boolean",
            scroll: "boolean"
        },
        $i = "show",
        zi = ".offcanvas.show",
        qi = "hidden.bs.offcanvas";
    class Fi extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get NAME() {
            return Bi
        }
        static get Default() {
            return Ri
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || j.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(), j.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback((() => {
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new fi).reset(), j.trigger(this._element, qi)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _getConfig(t) {
            return t = { ...Ri,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a(Bi, t, Wi), t
        }
        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            j.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            }))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = n(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)) return;
        j.one(e, qi, (() => {
            l(this) && this.focus()
        }));
        const i = V.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this)
    })), j.on(window, "load.bs.offcanvas.data-api", (() => V.find(zi).forEach((t => Fi.getOrCreateInstance(t).show())))), R(Fi), g(Fi);
    const Ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Xi = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue));
            const n = e.filter((t => t instanceof RegExp));
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1
        };

    function Yi(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
            s = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t],
                n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue
            }
            const o = [].concat(...i.attributes),
                r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t => {
                Xi(t, r) || i.removeAttribute(t.nodeName)
            }))
        }
        return n.body.innerHTML
    }
    const Qi = "tooltip",
        Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Zi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        },
        Ji = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left"
        },
        tn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        en = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        nn = "fade",
        sn = "show",
        on = "show",
        rn = "out",
        an = ".tooltip-inner",
        ln = ".modal",
        cn = "hide.bs.modal",
        hn = "hover",
        dn = "focus";
    class un extends B {
        constructor(t, e) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        static get Default() {
            return tn
        }
        static get NAME() {
            return Qi
        }
        static get Event() {
            return en
        }
        static get DefaultType() {
            return Zi
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = j.trigger(this._element, this.constructor.Event.SHOW),
                e = h(this._element),
                i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(),
                s = (t => {
                    do {
                        t += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                })(this.constructor.NAME);
            n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement,
                r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const {
                container: a
            } = this._config;
            H.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                j.on(t, "mouseover", d)
            }));
            const c = this.tip.classList.contains(nn);
            this._queueCallback((() => {
                const t = this._hoverState;
                this._hoverState = null, j.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this)
            }), this.tip, c)
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => j.off(t, "mouseover", d))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(nn);
            this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._hoverState !== on && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
            }), this.tip, e), this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), an)
        }
        _sanitizeAndSetContent(t, e, i) {
            const n = V.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove()
        }
        setElementContent(t, e) {
            if (null !== t) return o(e) ? (e = r(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return Ji[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t => {
                if ("click" === t) j.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        i = t === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    j.on(this._element, e, this._config.selector, (t => this._enter(t))), j.on(this._element, i, this._config.selector, (t => this._leave(t)))
                }
            })), this._hideModalHandler = () => {
                this._element && this.hide()
            }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                e._hoverState === on && e.show()
            }), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                e._hoverState === rn && e.hide()
            }), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return Object.keys(e).forEach((t => {
                Gi.has(t) && delete e[t]
            })), (t = { ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a(Qi, t, this.constructor.DefaultType), t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t => t.trim())).forEach((e => t.classList.remove(e)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            const {
                state: e
            } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    g(un);
    const fn = { ...un.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        pn = { ...un.DefaultType,
            content: "(string|element|function)"
        },
        mn = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        };
    class gn extends un {
        static get Default() {
            return fn
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return mn
        }
        static get DefaultType() {
            return pn
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    g(gn);
    const _n = "scrollspy",
        bn = {
            offset: 10,
            method: "auto",
            target: ""
        },
        vn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        yn = "active",
        wn = ".nav-link, .list-group-item, .dropdown-item",
        En = "position";
    class An extends B {
        constructor(t, e) {
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process()
        }
        static get Default() {
            return bn
        }
        static get NAME() {
            return _n
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : En,
                e = "auto" === this._config.method ? t : this._config.method,
                n = e === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map((t => {
                const s = i(t),
                    o = s ? V.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [U[e](o).top + n, s]
                }
                return null
            })).filter((t => t)).sort(((t, e) => t[0] - e[0])).forEach((t => {
                this._offsets.push(t[0]), this._targets.push(t[1])
            }))
        }
        dispose() {
            j.off(this._scrollElement, ".bs.scrollspy"), super.dispose()
        }
        _getConfig(t) {
            return (t = { ...bn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = r(t.target) || document.documentElement, a(_n, t, vn), t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t, this._clear();
            const e = wn.split(",").map((e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)),
                i = V.findOne(e.join(","), this._config.target);
            i.classList.add(yn), i.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V.parents(i, ".nav, .list-group").forEach((t => {
                V.prev(t, ".nav-link, .list-group-item").forEach((t => t.classList.add(yn))), V.prev(t, ".nav-item").forEach((t => {
                    V.children(t, ".nav-link").forEach((t => t.classList.add(yn)))
                }))
            })), j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            V.find(wn, this._config.target).filter((t => t.classList.contains(yn))).forEach((t => t.classList.remove(yn)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = An.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    j.on(window, "load.bs.scrollspy.data-api", (() => {
        V.find('[data-bs-spy="scroll"]').forEach((t => new An(t)))
    })), g(An);
    const Tn = "active",
        On = "fade",
        Cn = "show",
        kn = ".active",
        Ln = ":scope > li > .active";
    class xn extends B {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t;
            const e = n(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                t = V.find(e, i), t = t[t.length - 1]
            }
            const s = t ? j.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (j.trigger(this._element, "show.bs.tab", {
                    relatedTarget: t
                }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const o = () => {
                j.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), j.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            };
            e ? this._activate(e, e.parentNode, o) : o()
        }
        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V.children(e, kn) : V.find(Ln, e))[0],
                s = i && n && n.classList.contains(On),
                o = () => this._transitionComplete(t, n, i);
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Tn);
                const t = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Tn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), u(t), t.classList.contains(On) && t.classList.add(Cn);
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && V.find(".dropdown-toggle", e).forEach((t => t.classList.add(Tn))), t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this) || xn.getOrCreateInstance(this).show()
    })), g(xn);
    const Dn = "toast",
        Sn = "hide",
        Nn = "show",
        In = "showing",
        Pn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jn = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class Mn extends B {
        constructor(t, e) {
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get DefaultType() {
            return Pn
        }
        static get Default() {
            return jn
        }
        static get NAME() {
            return Dn
        }
        show() {
            j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback((() => {
                this._element.classList.remove(In), j.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback((() => {
                this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose()
        }
        _getConfig(t) {
            return t = { ...jn,
                ...U.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, a(Dn, t, this.constructor.DefaultType), t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            j.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), j.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), j.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), j.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return R(Mn), g(Mn), {
        Alert: W,
        Button: z,
        Carousel: st,
        Collapse: pt,
        Dropdown: hi,
        Modal: Hi,
        Offcanvas: Fi,
        Popover: gn,
        ScrollSpy: An,
        Tab: xn,
        Toast: Mn,
        Tooltip: un
    }
}));

/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function(e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: l
                        }), t.addEventListener(e, l, n)
                    } else
                        for (p = 0; p < c.length; p += 1) {
                            const e = c[p];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: r,
                                proxyListener: o
                            }), t.addEventListener(e, o, n)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "),
                n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                    } else if (e instanceof n)
                    for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t],
                        r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {
            swiper: t,
            targetPosition: s,
            side: a
        } = e;
        const i = r(),
            n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
            p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                l = (new Date).getTime(), null === o && (o = l);
                const e = Math.max(Math.min((l - o) / d, 1), 0),
                    r = .5 - Math.cos(e * Math.PI) / 2;
                let c = n + r * (s - n);
                if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                        [a]: c
                    }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [a]: c
                    })
                })), void i.cancelAnimationFrame(t.cssModeFrameID);
                t.cssModeFrameID = i.requestAnimationFrame(u)
            };
        u()
    }
    let b, x, y;

    function E() {
        return b || (b = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function(e) {
            let {
                userAgent: t
            } = void 0 === e ? {} : e;
            const s = E(),
                a = r(),
                i = a.navigator.platform,
                n = t || a.navigator.userAgent,
                l = {
                    ios: !1,
                    android: !1
                },
                o = a.screen.width,
                d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }
    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params,
                {
                    $wrapperEl: i,
                    size: r,
                    rtlTranslate: n,
                    wrongRTL: l
                } = e,
                o = e.virtual && a.virtual.enabled,
                d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`),
                p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [],
                m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                b = e.slidesGrid.length;
            let x = a.spaceBetween,
                y = -f,
                E = 0,
                C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]),
                            l = n[0].style.transform,
                            o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width"),
                                t = s(r, "padding-left"),
                                a = s(r, "padding-right"),
                                i = s(r, "margin-left"),
                                l = s(r, "margin-right"),
                                o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l;
                            else {
                                const {
                                    clientWidth: s,
                                    offsetWidth: r
                                } = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e.virtualSize+a.spaceBetween}px`
                }), a.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({
                    [s]: `${x}px`
                })
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0],
                    s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`,
                    s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [],
                a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)(t.visibleSlides || d([])).each((e => {
                    s.push(e)
                }));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a) break;
                        s.push(n(e))
                    } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this,
                s = t.params,
                {
                    slides: a,
                    rtlTranslate: i,
                    snapGrid: r
                } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o),
                    u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params,
                a = t.maxTranslate() - t.minTranslate();
            let {
                progress: i,
                isBeginning: r,
                isEnd: n
            } = t;
            const l = r,
                o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    $wrapperEl: a,
                    activeIndex: i,
                    realIndex: r
                } = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: a,
                    snapGrid: i,
                    params: r,
                    activeIndex: n,
                    realIndex: l,
                    snapIndex: o
                } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                s = t.params,
                a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        r = !0, i = e;
                        break
                    }
            if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
                params: t,
                rtlTranslate: s,
                translate: a,
                $wrapperEl: i
            } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: a,
                    params: i,
                    $wrapperEl: r,
                    wrapperEl: n,
                    progress: l
                } = s;
            let o, d = 0,
                c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this,
                {
                    params: n,
                    wrapperEl: l
                } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(),
                d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {
            swiper: t,
            runCallbacks: s,
            direction: a,
            step: i
        } = e;
        const {
            activeIndex: r,
            previousIndex: n
        } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v),
                        s = Math.floor(100 * d[e]),
                        a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(),
                    s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    animating: i,
                    enabled: r,
                    params: n
                } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this,
                {
                    params: i,
                    animating: r,
                    snapGrid: n,
                    slidesGrid: l,
                    rtlTranslate: o,
                    enabled: d
                } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = c(o ? a.translate : -a.translate),
                u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r),
                l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    $wrapperEl: i
                } = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [],
                o = [];
            n.each(((e, t) => {
                d(e).attr("data-swiper-slide-index", t)
            }));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: s
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: c
            } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
            f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function(e, t) {
                return void 0 === t && (t = this),
                    function t(s) {
                        if (!s || s === a() || s === r()) return null;
                        s.assignedSlot && (s = s.assignedSlot);
                        const i = s.closest(e);
                        return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                    }(t)
            }(g, h[0]) : h.closest(g)[0])) return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX,
            b = o.currentY,
            x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null,
            v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f,
            b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let N = !1;

    function B() {}
    const H = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function() {
            const e = this,
                t = a(),
                {
                    params: s,
                    support: i
                } = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        },
        detachEvents: function() {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this,
                {
                    classNames: t,
                    params: s,
                    rtl: a,
                    $el: i,
                    device: r,
                    support: n
                } = e,
                l = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        })) : "string" == typeof e && s.push(t + e)
                    })), s
                }(["initialized", s.direction, {
                    "pointer-events": !n.touch
                }, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        },
        removeClasses: function() {
            const {
                $el: e,
                classNames: t
            } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function q(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const j = {
            eventsEmitter: $,
            update: S,
            translate: M,
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), P({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: k,
            loop: z,
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: X,
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: i,
                            $el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = Y(e, i),
                        c = Y(e, o),
                        p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = i[t] && i[t].enabled,
                            a = o[t] && o[t].enabled;
                        s && !a && e[t].disable(), !s && a && e[t].enable()
                    }));
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), g(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: R,
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        _ = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({
                userAgent: t.userAgent
            }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this,
                {
                    params: a,
                    $el: i,
                    $wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            g(_, e)
        }
        static get extendedDefaults() {
            return _
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function K(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: i,
                activeIndex: r
            } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {
            swiper: t,
            duration: s,
            transformEl: a,
            allSlides: i
        } = e;
        const {
            slides: r,
            activeIndex: n,
            $wrapperEl: l
        } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), i.append(r)), r
    }
    Object.keys(j).forEach((e => {
        Object.keys(j[e]).forEach((t => {
            V.prototype[t] = j[e][t]
        }))
    })), V.use([function(e) {
        let {
            swiper: t,
            on: s,
            emit: a
        } = e;
        const i = r();
        let n = null,
            l = null;
        const o = () => {
                t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
            },
            d = () => {
                t && !t.destroyed && t.initialized && a("orientationchange")
            };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {
                        width: s,
                        height: a
                    } = t;
                    let i = s,
                        r = a;
                    e.forEach((e => {
                        let {
                            contentBoxSize: s,
                            contentRect: a,
                            target: n
                        } = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = [],
            l = r(),
            o = function(e, t) {
                void 0 === t && (t = {});
                const s = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function() {
                        i("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.push(s)
            };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }), o(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function(e) {
        let t, {
            swiper: s,
            extendParams: a,
            on: i,
            emit: r
        } = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {
                slidesPerView: t,
                slidesPerGroup: a,
                centeredSlides: i
            } = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {
                from: d,
                to: c,
                slides: p,
                slidesGrid: u,
                offset: h
            } = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0),
                b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                    from: w,
                    to: b,
                    offset: x,
                    slidesGrid: s.slidesGrid
                }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function() {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void(s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [],
                C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = d; e <= c; e += 1)(e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
                else s.virtual.slides.push(e);
                l(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1,
                    i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache,
                        t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            },
            update: l
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: n
        } = e;
        const l = a(),
            o = r();

        function c(e) {
            if (!t.enabled) return;
            const {
                rtlTranslate: s
            } = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode,
                r = t.params.keyboard.pageUpDown,
                d = r && 33 === i,
                c = r && 34 === i,
                p = 37 === i,
                u = 39 === i,
                h = 38 === i,
                m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el,
                        i = a[0].clientWidth,
                        r = a[0].clientHeight,
                        n = o.innerWidth,
                        l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [
                        [d.left, d.top],
                        [d.left + i, d.top],
                        [d.left, d.top + r],
                        [d.left + i, d.top + r]
                    ];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        }, s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {
            enable: p,
            disable: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {
            enabled: !1
        };
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e,
                a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1,
                f = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                    c = -f.pixelX * m
                } else {
                    if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                    c = -f.pixelY
                }
            else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                        time: u(),
                        delta: Math.abs(c),
                        direction: Math.sign(c)
                    },
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning,
                        u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0,
                            a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);
                        else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c),
                    raw: e
                };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function(e) {
                        const s = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }
        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {
            enable: b,
            disable: x
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl),
                a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {
                $nextEl: e,
                $prevEl: s
            } = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {
                $nextEl: a,
                $prevEl: r
            } = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            },
            disable: h,
            update: l,
            init: p,
            destroy: u
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {
                bulletActiveClass: a
            } = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl,
                s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e),
                        a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                }));
                else {
                    const e = a.eq(p),
                        r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i),
                            n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else c(e, "prev"), c(n, "next");
                        else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1,
                    n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }
        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {
                $el: e
            } = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target,
                {
                    $el: r
                } = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            },
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: i,
            emit: r
        } = e;
        const n = a();
        let l, o, c, u, h = !1,
            m = null,
            f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e,
                rtlTranslate: s,
                progress: a
            } = t, {
                $dragEl: i,
                $el: r
            } = e, n = t.params.scrollbar;
            let l = o,
                d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {
                scrollbar: e
            } = t, {
                $dragEl: s,
                $el: a
            } = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = t, {
                $el: i
            } = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n,
                    $dragEl: o
                } = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {
                scrollbar: s,
                $wrapperEl: a
            } = t, {
                $el: i,
                $dragEl: n
            } = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: i
                } = t,
                {
                    $el: n
                } = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {
                scrollbar: s,
                touchEventsTouch: a,
                touchEventsDesktop: i,
                params: r,
                support: l
            } = t, o = s.$el;
            if (!o) return;
            const d = o[0],
                c = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                },
                p = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {
                scrollbar: e,
                $el: s
            } = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar,
                s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            ! function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {
                $el: e
            } = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            },
            disable: S,
            updateSize: v,
            setTranslate: g,
            init: T,
            destroy: $
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = (e, s) => {
                const {
                    rtl: a
                } = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"),
                    p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
            },
            r = () => {
                const {
                    $el: e,
                    slides: s,
                    progress: a,
                    snapGrid: r
                } = t;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, a)
                })), s.each(((e, s) => {
                    let n = e.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        i(e, n)
                    }))
                }))
            };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {
                    $el: s
                } = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {
            enabled: !1
        };
        let l, o, c, p = 1,
            u = !1;
        const m = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            g = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support,
                a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support,
                a = t.params.zoom,
                i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device,
                a = t.support,
                i = t.params.zoom,
                r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale,
                i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void(f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void(f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom,
                a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom,
                s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {
                passiveListener: s
            } = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support,
                {
                    passiveListener: a,
                    activeListenerWithCapture: i
                } = M(),
                r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {
                passiveListener: a,
                activeListenerWithCapture: i
            } = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => v,
            set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0,
                        s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void(f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = g.x * s,
                    r = f.currentX + i,
                    n = g.y * a,
                    l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale,
                    c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: $,
            toggle: S
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a,
            emit: i
        } = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1,
            l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"),
                    c = n.attr("data-src"),
                    p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"),
                    h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = d(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {
                $wrapperEl: e,
                params: s,
                slides: a,
                activeIndex: i
            } = t, r = t.virtual && s.virtual.enabled, n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            }));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1) p(e) && o(e);
            else o(i);
            if (n.loadPrevNext)
                if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    const e = n.loadPrevNextAmount,
                        t = Math.ceil(c),
                        s = Math.min(i + t + Math.max(e, t), a.length),
                        r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + t; e < s; e += 1) p(e) && o(e);
                    for (let e = r; e < i; e += 1) p(e) && o(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && o(u(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && o(u(a))
                }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth,
                l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(),
                {
                    rtlTranslate: u
                } = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [
                [o.left, o.top],
                [o.left + t.width, o.top],
                [o.left, o.top + t.height],
                [o.left + t.width, o.top + t.height]
            ];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }
        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {
                lazy: e,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: r
            } = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {
            load: c,
            loadInSlide: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;

        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {
            control: void 0
        }, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (! function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
                else a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor,
                    i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                else i instanceof a && s !== i && n(i)
            }
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {
            clicked: !1
        };
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y,
                a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }
        const v = (e, t, s) => {
                n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s),
                    function(e, t) {
                        e.attr("aria-controls", t)
                    }(e, t)
            },
            w = () => {
                t.a11y.clicked = !0
            },
            b = () => {
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    }))
                }))
            },
            x = e => {
                if (t.a11y.clicked) return;
                const s = e.target.closest(`.${t.params.slideClass}`);
                if (!s || !t.slides.includes(s)) return;
                const a = t.slides.indexOf(s) === t.activeIndex,
                    i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
                a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
            },
            y = () => {
                const e = t.params.a11y;
                e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
                const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                e.slideLabelMessage && t.slides.each(((a, i) => {
                    const r = d(a),
                        n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                    p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
                }))
            },
            E = () => {
                const e = t.params.a11y;
                t.$el.append(i);
                const s = t.$el;
                e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
                const a = t.$wrapperEl,
                    r = e.id || a.attr("id") || `swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                var n;
                const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                var o;
                let d, u;
                o = r, a.attr("id", o),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0)
            };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && E()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && y()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {
                    $nextEl: e,
                    $prevEl: s
                } = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function() {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1,
            n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d))
            },
            c = (e, s, a) => {
                if (s)
                    for (let i = 0, r = t.slides.length; i < r; i += 1) {
                        const r = t.slides.eq(i);
                        if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                            const s = r.index();
                            t.slideTo(s, e, a)
                        }
                    } else t.slideTo(0, e, a)
            },
            p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: i,
            on: n
        } = e, l = !1;
        const o = a(),
            c = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = () => {
                i("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === s) return;
                    t.slideTo(s)
                }
            },
            u = () => {
                if (l && t.params.hashNavigation.enabled)
                    if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet");
                    else {
                        const e = t.slides.eq(t.activeIndex),
                            s = e.attr("data-hash") || e.attr("data-history");
                        o.location.hash = s || "", i("hashSet")
                    }
            };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function(e) {
        let t, {
            swiper: s,
            extendParams: i,
            on: r,
            emit: n
        } = e;

        function l() {
            if (!s.size) return s.autoplay.running = !1, void(s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        }, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {
            pause: c,
            run: l,
            start: o,
            stop: d
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1,
            r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex,
                a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {
                thumbs: e
            } = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);
            else
                for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset,
                l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        }, a("beforeInit", (() => {
            const {
                thumbs: e
            } = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {
            init: l,
            update: o
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            emit: a,
            once: i
        } = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {
                        touchEventsData: e,
                        touches: s
                    } = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function(e) {
                    let {
                        currentPos: s
                    } = e;
                    const {
                        params: r,
                        $wrapperEl: n,
                        rtlTranslate: l,
                        snapGrid: o,
                        touchEventsData: d
                    } = t, c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(),
                                    s = d.velocities.pop(),
                                    a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1)
                                    if (o[t] > -c) {
                                        e = t;
                                        break
                                    }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }(!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function(e) {
        let t, s, a, {
            swiper: i,
            extendParams: r
        } = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), i.grid = {
            initSlides: e => {
                const {
                    slidesPerView: r
                } = i.params, {
                    rows: n,
                    fill: l
                } = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            },
            updateSlide: (e, r, n, l) => {
                const {
                    slidesPerGroup: o,
                    spaceBetween: d
                } = i.params, {
                    rows: c,
                    fill: p
                } = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)),
                        a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            },
            updateWrapperSize: (e, s, a) => {
                const {
                    spaceBetween: r,
                    centeredSlides: n,
                    roundLengths: l
                } = i.params, {
                    rows: o
                } = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({
                        [a("width")]: `${i.virtualSize+r}px`
                    }), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function(e) {
        let {
            swiper: t
        } = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e
                } = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    $el: e,
                    $wrapperEl: s,
                    slides: a,
                    width: r,
                    height: n,
                    rtlTranslate: l,
                    size: o,
                    browser: c
                } = t, p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
                    height: `${r}px`
                })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s,
                        n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0,
                        m = 0,
                        g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                        "-webkit-transform-origin": `50% 50% -${o/2}px`,
                        "transform-origin": `50% 50% -${o/2}px`
                    }), p.shadow)
                    if (u) m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale,
                            a = p.shadowScale / t,
                            i = p.shadowOffset;
                        m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)
                    }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {
                    $el: s,
                    slides: a
                } = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    rtlTranslate: s
                } = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l,
                        c = 0,
                        p = t.params.cssMode ? -o - t.translate : -o,
                        u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    width: e,
                    height: s,
                    slides: a,
                    slidesSizesGrid: i
                } = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = i[e],
                        l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0,
                        h = n ? 0 : d * p,
                        m = -c * Math.abs(p),
                        f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p,
                        v = n ? f * p : 0,
                        w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    $wrapperEl: s,
                    slidesSizesGrid: a
                } = t, r = t.params.creativeEffect, {
                    progressMultiplier: n
                } = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s),
                        o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset,
                        u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` : `scale(${1-(1-f.scale)*c*n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({
                        opacity: b
                    }), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function(e) {
        let {
            swiper: t,
            extendParams: s,
            on: a
        } = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {
                    slides: e,
                    activeIndex: s
                } = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l),
                        d = o[0].progress,
                        c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p,
                        h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1,
                        g = -a.perSlideRotate * c,
                        v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {
                    transformEl: s
                } = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }];
    return V.use(re), V
}));

/*!
 * Lightbox for Bootstrap 5 v1.7.8 (https://trvswgnr.github.io/bs5-lightbox/)
 * Copyright 2022 Travis Aaron Wagner (https://github.com/trvswgnr/)
 * Licensed under MIT (https://github.com/trvswgnr/bs5-lightbox/blob/main/LICENSE)
 */
! function() {
    var t = {
            728: function(t, e, i) {
                var s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(360),
                    o = s(i(127)),
                    r = s(i(591)),
                    a = s(i(802)),
                    l = s(i(642)),
                    c = "carousel",
                    d = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    u = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    h = "next",
                    f = "prev",
                    m = "left",
                    g = "right",
                    p = {
                        ArrowLeft: g,
                        ArrowRight: m
                    },
                    _ = "slid.bs.carousel",
                    b = "active",
                    v = ".active.carousel-item";
                class y extends l.default {
                    constructor(t, e) {
                        super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = a.default.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                    }
                    static get Default() {
                        return d
                    }
                    static get NAME() {
                        return c
                    }
                    next() {
                        this._slide(h)
                    }
                    nextWhenVisible() {
                        !document.hidden && (0, n.isVisible)(this._element) && this.next()
                    }
                    prev() {
                        this._slide(f)
                    }
                    pause(t) {
                        t || (this._isPaused = !0), a.default.findOne(".carousel-item-next, .carousel-item-prev", this._element) && ((0, n.triggerTransitionEnd)(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }
                    cycle(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    to(t) {
                        this._activeElement = a.default.findOne(v, this._element);
                        const e = this._getItemIndex(this._activeElement);
                        if (t > this._items.length - 1 || t < 0) return;
                        if (this._isSliding) return void o.default.one(this._element, _, (() => this.to(t)));
                        if (e === t) return this.pause(), void this.cycle();
                        const i = t > e ? h : f;
                        this._slide(i, this._items[t])
                    }
                    _getConfig(t) {
                        return t = Object.assign(Object.assign(Object.assign({}, d), r.default.getDataAttributes(this._element)), "object" == typeof t ? t : {}), (0, n.typeCheckConfig)(c, t, u), t
                    }
                    _handleSwipe() {
                        const t = Math.abs(this.touchDeltaX);
                        if (t <= 40) return;
                        const e = t / this.touchDeltaX;
                        this.touchDeltaX = 0, e && this._slide(e > 0 ? g : m)
                    }
                    _addEventListeners() {
                        this._config.keyboard && o.default.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (o.default.on(this._element, "mouseenter.bs.carousel", (t => this.pause(t))), o.default.on(this._element, "mouseleave.bs.carousel", (t => this.cycle(t)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                    }
                    dispose() {
                        Data.remove(this._element, this.constructor.DATA_KEY), o.default.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                            this[t] = null
                        }))
                    }
                    _addTouchEventListeners() {
                        const t = t => this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType),
                            e = e => {
                                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
                            },
                            i = t => {
                                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
                            },
                            s = e => {
                                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t => this.cycle(t)), 500 + this._config.interval))
                            };
                        a.default.find(".carousel-item img", this._element).forEach((t => {
                            o.default.on(t, "dragstart.bs.carousel", (t => t.preventDefault()))
                        })), this._pointerEvent ? (o.default.on(this._element, "pointerdown.bs.carousel", (t => e(t))), o.default.on(this._element, "pointerup.bs.carousel", (t => s(t))), this._element.classList.add("pointer-event")) : (o.default.on(this._element, "touchstart.bs.carousel", (t => e(t))), o.default.on(this._element, "touchmove.bs.carousel", (t => i(t))), o.default.on(this._element, "touchend.bs.carousel", (t => s(t))))
                    }
                    _keydown(t) {
                        if (/input|textarea/i.test(t.target.tagName)) return;
                        const e = p[t.key];
                        e && (t.preventDefault(), this._slide(e))
                    }
                    _getItemIndex(t) {
                        return this._items = t && t.parentNode ? a.default.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
                    }
                    _getItemByOrder(t, e) {
                        const i = t === h;
                        return (0, n.getNextActiveElement)(this._items, e, i, this._config.wrap)
                    }
                    _triggerSlideEvent(t, e) {
                        const i = this._getItemIndex(t),
                            s = this._getItemIndex(a.default.findOne(v, this._element));
                        return o.default.trigger(this._element, "slide.bs.carousel", {
                            relatedTarget: t,
                            direction: e,
                            from: s,
                            to: i
                        })
                    }
                    _setActiveIndicatorElement(t) {
                        if (this._indicatorsElement) {
                            const e = a.default.findOne(".active", this._indicatorsElement);
                            e.classList.remove(b), e.removeAttribute("aria-current");
                            const i = a.default.find("[data-bs-target]", this._indicatorsElement);
                            for (let e = 0; e < i.length; e++)
                                if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                                    i[e].classList.add(b), i[e].setAttribute("aria-current", "true");
                                    break
                                }
                        }
                    }
                    _updateInterval() {
                        const t = this._activeElement || a.default.findOne(v, this._element);
                        if (!t) return;
                        const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                    _slide(t, e) {
                        const i = this._directionToOrder(t),
                            s = a.default.findOne(v, this._element),
                            r = this._getItemIndex(s),
                            l = e || this._getItemByOrder(i, s),
                            c = this._getItemIndex(l),
                            d = Boolean(this._interval),
                            u = i === h,
                            f = u ? "carousel-item-start" : "carousel-item-end",
                            m = u ? "carousel-item-next" : "carousel-item-prev",
                            g = this._orderToDirection(i);
                        if (l && l.classList.contains(b)) return void(this._isSliding = !1);
                        if (this._isSliding) return;
                        if (this._triggerSlideEvent(l, g).defaultPrevented) return;
                        if (!s || !l) return;
                        this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l;
                        const p = () => {
                            o.default.trigger(this._element, _, {
                                relatedTarget: l,
                                direction: g,
                                from: r,
                                to: c
                            })
                        };
                        if (this._element.classList.contains("slide")) {
                            l.classList.add(m), (0, n.reflow)(l), s.classList.add(f), l.classList.add(f);
                            const t = () => {
                                l.classList.remove(f, m), l.classList.add(b), s.classList.remove(b, m, f), this._isSliding = !1, setTimeout(p, 0)
                            };
                            this._queueCallback(t, s, !0)
                        } else s.classList.remove(b), l.classList.add(b), this._isSliding = !1, p();
                        d && this.cycle()
                    }
                    _directionToOrder(t) {
                        return [g, m].includes(t) ? (0, n.isRTL)() ? t === m ? f : h : t === m ? h : f : t
                    }
                    _orderToDirection(t) {
                        return [h, f].includes(t) ? (0, n.isRTL)() ? t === f ? m : g : t === f ? g : m : t
                    }
                    static carouselInterface(t, e) {
                        const i = y.getOrCreateInstance(t, e);
                        let {
                            _config: s
                        } = i;
                        "object" == typeof e && (s = Object.assign(Object.assign({}, s), e));
                        const n = "string" == typeof e ? e : s.slide;
                        if ("number" == typeof e) i.to(e);
                        else if ("string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError(`No method named "${n}"`);
                            i[n]()
                        } else s.interval && s.ride && (i.pause(), i.cycle())
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            y.carouselInterface(this, t)
                        }))
                    }
                    static dataApiClickHandler(t) {
                        let e = (0, n.getElementFromSelector)(this);
                        if (!e || !e.classList.contains("carousel")) return;
                        const i = Object.assign(Object.assign({}, r.default.getDataAttributes(e)), r.default.getDataAttributes(this));
                        console.log(i);
                        const s = this.getAttribute("data-bs-slide-to");
                        s && (i.interval = !1), y.carouselInterface(e, i), s && y.getInstance(e).to(s), t.preventDefault()
                    }
                }
                e.default = y
            },
            315: function(t, e, i) {
                var s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = i(360),
                    o = s(i(127)),
                    r = s(i(591)),
                    a = s(i(802)),
                    l = s(i(189)),
                    c = s(i(642)),
                    d = s(i(836)),
                    u = s(i(574)),
                    h = "modal",
                    f = ".bs.modal",
                    m = "Escape",
                    g = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0
                    },
                    p = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean"
                    },
                    _ = "resize.bs.modal",
                    b = "click.dismiss.bs.modal",
                    v = "keydown.dismiss.bs.modal",
                    y = "mousedown.dismiss.bs.modal",
                    E = "modal-open",
                    w = "show",
                    A = "modal-static";
                class k extends c.default {
                    constructor(t, e) {
                        super(t), this._config = this._getConfig(e), this._dialog = a.default.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new l.default
                    }
                    static get Default() {
                        return g
                    }
                    static get NAME() {
                        return h
                    }
                    toggle(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }
                    show(t) {
                        if (this._isShown || this._isTransitioning) return;
                        o.default.trigger(this._element, "show.bs.modal", {
                            relatedTarget: t
                        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(E), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default.on(this._dialog, y, (() => {
                            o.default.one(this._element, "mouseup.dismiss.bs.modal", (t => {
                                t.target === this._element && (this._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((() => this._showElement(t))))
                    }
                    hide() {
                        if (!this._isShown || this._isTransitioning) return;
                        if (o.default.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                        this._isShown = !1;
                        const t = this._isAnimated();
                        t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(w), o.default.off(this._element, b), o.default.off(this._dialog, y), this._queueCallback((() => this._hideModal()), this._element, t)
                    }
                    dispose() {
                        [window, this._dialog].forEach((t => o.default.off(t, f))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    handleUpdate() {
                        this._adjustDialog()
                    }
                    _initializeBackDrop() {
                        return new d.default({
                            isVisible: Boolean(this._config.backdrop),
                            isAnimated: this._isAnimated()
                        })
                    }
                    _initializeFocusTrap() {
                        return new u.default({
                            trapElement: this._element
                        })
                    }
                    _getConfig(t) {
                        return t = Object.assign(Object.assign(Object.assign({}, g), r.default.getDataAttributes(this._element)), "object" == typeof t ? t : {}), (0, n.typeCheckConfig)(h, t, p), t
                    }
                    _showElement(t) {
                        const e = this._isAnimated(),
                            i = a.default.findOne(".modal-body", this._dialog);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && (0, n.reflow)(this._element), this._element.classList.add(w);
                        this._queueCallback((() => {
                            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, o.default.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: t
                            })
                        }), this._dialog, e)
                    }
                    _setEscapeEvent() {
                        this._isShown ? o.default.on(this._element, v, (t => {
                            this._config.keyboard && t.key === m ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== m || this._triggerBackdropTransition()
                        })) : o.default.off(this._element, v)
                    }
                    _setResizeEvent() {
                        this._isShown ? o.default.on(window, _, (() => this._adjustDialog())) : o.default.off(window, _)
                    }
                    _hideModal() {
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                            document.body.classList.remove(E), this._resetAdjustments(), this._scrollBar.reset(), o.default.trigger(this._element, "hidden.bs.modal")
                        }))
                    }
                    _showBackdrop(t) {
                        o.default.on(this._element, b, (t => {
                            this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                        })), this._backdrop.show(t)
                    }
                    _isAnimated() {
                        return this._element.classList.contains("fade")
                    }
                    _triggerBackdropTransition() {
                        if (o.default.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                        const {
                            classList: t,
                            scrollHeight: e,
                            style: i
                        } = this._element, s = e > document.documentElement.clientHeight;
                        !s && "hidden" === i.overflowY || t.contains(A) || (s || (i.overflowY = "hidden"), t.add(A), this._queueCallback((() => {
                            t.remove(A), s || this._queueCallback((() => {
                                i.overflowY = ""
                            }), this._dialog)
                        }), this._dialog), this._element.focus())
                    }
                    _adjustDialog() {
                        const t = this._element.scrollHeight > document.documentElement.clientHeight,
                            e = this._scrollBar.getWidth(),
                            i = e > 0;
                        (!i && t && !(0, n.isRTL)() || i && !t && (0, n.isRTL)()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !(0, n.isRTL)() || !i && t && (0, n.isRTL)()) && (this._element.style.paddingRight = `${e}px`)
                    }
                    _resetAdjustments() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }
                    static jQueryInterface(t, e) {
                        return this.each((function() {
                            const i = k.getOrCreateInstance(this, t);
                            if ("string" == typeof t) {
                                if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                                i[t](e)
                            }
                        }))
                    }
                }
                e.default = k
            },
            590: function(t, e, i) {
                var s = this && this.__importDefault || function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                const n = s(i(315)),
                    o = s(i(728)),
                    r = {
                        Modal: n.default,
                        Carousel: o.default
                    };
                class a {
                    constructor(t, e = {}) {
                        this.hash = this.randomHash(), this.settings = Object.assign(Object.assign(Object.assign({}, r.Modal.Default), r.Carousel.Default), {
                            interval: !1,
                            target: '[data-toggle="lightbox"]',
                            gallery: "",
                            size: "xl"
                        }), this.modalOptions = (() => this.setOptionsFromSettings(r.Modal.Default))(), this.carouselOptions = (() => this.setOptionsFromSettings(r.Carousel.Default))(), "string" == typeof t && (this.settings.target = t, t = document.querySelector(this.settings.target)), this.settings = Object.assign(Object.assign({}, this.settings), e), this.el = t, this.type = t.dataset.type || "image", this.src = this.getSrc(t), this.src = "image" !== this.type ? "embed" + this.src : this.src, this.sources = this.getGalleryItems(), this.createCarousel(), this.createModal()
                    }
                    show() {
                        document.body.appendChild(this.modalElement), this.modal.show()
                    }
                    hide() {
                        this.modal.hide()
                    }
                    setOptionsFromSettings(t) {
                        return Object.keys(t).reduce(((t, e) => Object.assign(t, {
                            [e]: this.settings[e]
                        })), {})
                    }
                    getSrc(t) {
                        let e = t.dataset.src || t.dataset.remote || t.href || "http://via.placeholder.com/1600x900";
                        /\:\/\//.test(e) || (e = window.location.origin + e);
                        const i = new URL(e);
                        return (t.dataset.footer || t.dataset.caption) && i.searchParams.set("caption", t.dataset.footer || t.dataset.caption), i.toString()
                    }
                    getGalleryItems() {
                        let t;
                        if (this.settings.gallery) {
                            if (Array.isArray(this.settings.gallery)) return this.settings.gallery;
                            t = this.settings.gallery
                        } else this.el.dataset.gallery && (t = this.el.dataset.gallery);
                        return t ? [...new Set(Array.from(document.querySelectorAll(`[data-gallery="${t}"]`), (t => `${t.dataset.type?"embed":""}${this.getSrc(t)}`)))] : [this.src]
                    }
                    getYoutubeId(t) {
                        if (!t) return !1;
                        const e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                        return !(!e || 11 !== e[2].length) && e[2]
                    }
                    getInstagramEmbed(t) {
                        if (/instagram/.test(t)) return `<iframe src="${t+=/\/embed$/.test(t)?"":"/embed"}" class="start-50 translate-middle-x" style="max-width: 500px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`
                    }
                    isEmbed(t) {
                        const e = new RegExp(a.allowedEmbedTypes.join("|")).test(t),
                            i = /\.(png|jpe?g|gif|svg|webp)/.test(t);
                        return e || !i
                    }
                    createCarousel() {
                        const t = document.createElement("template"),
                            e = this.sources.map(((t, e) => {
                                t = t.replace(/\/$/, "");
                                let i = "";
                                i += /\.png/.test(t) ? "this.add.previousSibling.remove()" : "";
                                let s = `<img src="${t}" class="d-block w-100 h-100 img-fluid" style="z-index: 1; object-fit: contain;" onload="${i}" />`,
                                    n = "";
                                const o = this.getInstagramEmbed(t),
                                    r = this.getYoutubeId(t);
                                this.isEmbed(t) && (/^embed/.test(t) && (t = t.substring(5)), r && (t = `https://www.youtube.com/embed/${r}`, n = 'title="YouTube video player" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"'), s = o || `<iframe src="${t}" ${n} allowfullscreen></iframe>`);
                                const a = new URLSearchParams(t.split("?")[1]);
                                let l = "";
                                return a.get("caption") && (l = `<p class="lightbox-caption m-0 p-2 text-center text-white small"><em>${a.get("caption")}</em></p>`), `\n\t\t\t\t<div class="carousel-item ${e?"":"active"}" style="min-height: 100px">\n\t\t\t\t\t<div class="position-absolute top-50 start-50 translate-middle text-white"><div class="spinner-border" style="width: 3rem height: 3rem" role="status"></div></div>\n\t\t\t\t\t<div class="ratio ratio-16x9" style="background-color: #000;">${s}</div>\n\t\t\t\t\t${l}\n\t\t\t\t</div>`
                            })).join(""),
                            i = this.sources.length < 2 ? "" : `\n\t\t\t<button id="#lightboxCarousel-${this.hash}-prev" class="carousel-control carousel-control-prev h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-${this.hash}" data-bs-slide="prev">\n\t\t\t\t<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Previous</span>\n\t\t\t</button>\n\t\t\t<button id="#lightboxCarousel-${this.hash}-next" class="carousel-control carousel-control-next h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-${this.hash}" data-bs-slide="next">\n\t\t\t\t<span class="carousel-control-next-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Next</span>\n\t\t\t</button>`;
                        let s = "lightbox-carousel carousel";
                        "fullscreen" === this.settings.size && (s += " position-absolute w-100 translate-middle top-50 start-50");
                        const n = `\n\t\t\t<div id="lightboxCarousel-${this.hash}" class="${s}" data-bs-ride="carousel" data-bs-interval="${this.carouselOptions.interval}">\n\t\t\t\t<div class="carousel-inner">\n\t\t\t\t\t${e}\n\t\t\t\t</div>\n\t\t\t\t${i}\n\t\t\t</div>`;
                        t.innerHTML = n.trim(), this.carouselElement = t.content.firstChild;
                        const o = Object.assign(Object.assign({}, this.carouselOptions), {
                            keyboard: !1
                        });
                        return this.carousel = new r.Carousel(this.carouselElement, o), this.carousel.to(this.sources.includes(this.src) ? this.sources.indexOf(this.src) : 0), !0 === this.carouselOptions.keyboard && document.addEventListener("keydown", (t => {
                            var e, i;
                            return "ArrowLeft" === t.code ? (null === (e = document.getElementById(`#lightboxCarousel-${this.hash}-prev`)) || void 0 === e || e.click(), !1) : "ArrowRight" === t.code ? (null === (i = document.getElementById(`#lightboxCarousel-${this.hash}-next`)) || void 0 === i || i.click(), !1) : void 0
                        })), this.carousel
                    }
                    createModal() {
                        const t = document.createElement("template"),
                            e = `\n\t\t\t<div class="modal lightbox fade" id="lightboxModal-${this.hash}" tabindex="-1" aria-hidden="true">\n\t\t\t\t<div class="modal-dialog modal-dialog-centered modal-${this.settings.size}">\n\t\t\t\t\t<div class="modal-content border-0 bg-transparent">\n\t\t\t\t\t\t<div class="modal-body p-0">\n\t\t\t\t\t\t\t<button type="button" class="btn-close position-absolute top-0 end-0 p-3" data-bs-dismiss="modal" aria-label="Close" style="z-index: 2; background: none;"><svg xmlns="http://www.w3.org/2000/svg" style="position: relative; top: -5px;" viewBox="0 0 16 16" fill="#fff"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`;
                        return t.innerHTML = e.trim(), this.modalElement = t.content.firstChild, this.modalElement.querySelector(".modal-body").appendChild(this.carouselElement), this.modalElement.addEventListener("hidden.bs.modal", (() => this.modalElement.remove())), this.modalElement.querySelector("[data-bs-dismiss]").addEventListener("click", (() => this.modal.hide())), this.modal = new r.Modal(this.modalElement, this.modalOptions), this.modal
                    }
                    randomHash(t = 8) {
                        return Array.from({
                            length: t
                        }, (() => Math.floor(36 * Math.random()).toString(36))).join("")
                    }
                }
                a.allowedEmbedTypes = ["embed", "youtube", "vimeo", "instagram", "url"], a.allowedMediaTypes = [...a.allowedEmbedTypes, "image"], a.defaultSelector = '[data-toggle="lightbox"]', a.initialize = function(t) {
                    t.preventDefault();
                    new a(this).show()
                }, document.querySelectorAll(a.defaultSelector).forEach((t => t.addEventListener("click", a.initialize))), e.default = a
            },
            642: function(t, e, i) {
                "use strict";
                i.r(e), i.d(e, {
                    default: function() {
                        return a
                    }
                });
                const s = new Map;
                var n = {
                        set(t, e, i) {
                            s.has(t) || s.set(t, new Map);
                            const n = s.get(t);
                            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
                        },
                        get: (t, e) => s.has(t) && s.get(t).get(e) || null,
                        remove(t, e) {
                            if (!s.has(t)) return;
                            const i = s.get(t);
                            i.delete(e), 0 === i.size && s.delete(t)
                        }
                    },
                    o = i(360),
                    r = i(127);
                var a = class {
                    constructor(t) {
                        (t = (0, o.getElement)(t)) && (this._element = t, n.set(this._element, this.constructor.DATA_KEY, this))
                    }
                    dispose() {
                        n.remove(this._element, this.constructor.DATA_KEY), r.default.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                            this[t] = null
                        }))
                    }
                    _queueCallback(t, e, i = !0) {
                        (0, o.executeAfterTransition)(t, e, i)
                    }
                    static getInstance(t) {
                        return n.get((0, o.getElement)(t), this.DATA_KEY)
                    }
                    static getOrCreateInstance(t, e = {}) {
                        return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
                    }
                    static get VERSION() {
                        return "5.1.1"
                    }
                    static get NAME() {
                        throw new Error('You have to implement the static method "NAME", for each component!')
                    }
                    static get DATA_KEY() {
                        return `bs.${this.NAME}`
                    }
                    static get EVENT_KEY() {
                        return `.${this.DATA_KEY}`
                    }
                }
            },
            127: function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(360);
                const n = /[^.]*(?=\..*)\.|.*/,
                    o = /\..*/,
                    r = /::\d+$/,
                    a = {};
                let l = 1;
                const c = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    d = /^(mouseenter|mouseleave)/i,
                    u = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function h(t, e) {
                    return e && `${e}::${l++}` || t.uidEvent || l++
                }

                function f(t) {
                    const e = h(t);
                    return t.uidEvent = e, a[e] = a[e] || {}, a[e]
                }

                function m(t, e, i = null) {
                    const s = Object.keys(t);
                    for (let n = 0, o = s.length; n < o; n++) {
                        const o = t[s[n]];
                        if (o.originalHandler === e && o.delegationSelector === i) return o
                    }
                    return null
                }

                function g(t, e, i) {
                    const s = "string" == typeof e,
                        n = s ? i : e;
                    let o = b(t);
                    return u.has(o) || (o = t), [s, n, o]
                }

                function p(t, e, i, s, o) {
                    if ("string" != typeof e || !t) return;
                    if (i || (i = s, s = null), d.test(e)) {
                        const t = t => function(e) {
                            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                        };
                        s ? s = t(s) : i = t(i)
                    }
                    const [r, a, l] = g(e, i, s), c = f(t), u = c[l] || (c[l] = {}), p = m(u, a, r ? i : null);
                    if (p) return void(p.oneOff = p.oneOff && o);
                    const _ = h(a, e.replace(n, "")),
                        b = r ? function(t, e, i) {
                            return function s(n) {
                                const o = t.querySelectorAll(e);
                                for (let {
                                        target: r
                                    } = n; r && r !== this; r = r.parentNode)
                                    for (let a = o.length; a--;)
                                        if (o[a] === r) return n.delegateTarget = r, s.oneOff && v.off(t, n.type, e, i), i.apply(r, [n]);
                                return null
                            }
                        }(t, i, s) : function(t, e) {
                            return function i(s) {
                                return s.delegateTarget = t, i.oneOff && v.off(t, s.type, e), e.apply(t, [s])
                            }
                        }(t, i);
                    b.delegationSelector = r ? i : null, b.originalHandler = a, b.oneOff = o, b.uidEvent = _, u[_] = b, t.addEventListener(l, b, r)
                }

                function _(t, e, i, s, n) {
                    const o = m(e[i], s, n);
                    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent])
                }

                function b(t) {
                    return t = t.replace(o, ""), c[t] || t
                }
                const v = {
                    on(t, e, i, s) {
                        p(t, e, i, s, !1)
                    },
                    one(t, e, i, s) {
                        p(t, e, i, s, !0)
                    },
                    off(t, e, i, s) {
                        if ("string" != typeof e || !t) return;
                        const [n, o, a] = g(e, i, s), l = a !== e, c = f(t), d = e.startsWith(".");
                        if (void 0 !== o) {
                            if (!c || !c[a]) return;
                            return void _(t, c, a, o, n ? i : null)
                        }
                        d && Object.keys(c).forEach((i => {
                            ! function(t, e, i, s) {
                                const n = e[i] || {};
                                Object.keys(n).forEach((o => {
                                    if (o.includes(s)) {
                                        const s = n[o];
                                        _(t, e, i, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, i, e.slice(1))
                        }));
                        const u = c[a] || {};
                        Object.keys(u).forEach((i => {
                            const s = i.replace(r, "");
                            if (!l || e.includes(s)) {
                                const e = u[i];
                                _(t, c, a, e.originalHandler, e.delegationSelector)
                            }
                        }))
                    },
                    trigger(t, e, i) {
                        if ("string" != typeof e || !t) return null;
                        const n = (0, s.getjQuery)(),
                            o = b(e),
                            r = e !== o,
                            a = u.has(o);
                        let l, c = !0,
                            d = !0,
                            h = !1,
                            f = null;
                        return r && n && (l = n.Event(e, i), n(t).trigger(l), c = !l.isPropagationStopped(), d = !l.isImmediatePropagationStopped(), h = l.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents"), f.initEvent(o, c, !0)) : f = new CustomEvent(e, {
                            bubbles: c,
                            cancelable: !0
                        }), void 0 !== i && Object.keys(i).forEach((t => {
                            Object.defineProperty(f, t, {
                                get: () => i[t]
                            })
                        })), h && f.preventDefault(), d && t.dispatchEvent(f), f.defaultPrevented && void 0 !== l && l.preventDefault(), f
                    }
                };
                e.default = v
            },
            591: function(t, e, i) {
                "use strict";

                function s(t) {
                    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
                }

                function n(t) {
                    return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
                }
                i.r(e);
                const o = {
                    setDataAttribute(t, e, i) {
                        t.setAttribute(`data-bs-${n(e)}`, i)
                    },
                    removeDataAttribute(t, e) {
                        t.removeAttribute(`data-bs-${n(e)}`)
                    },
                    getDataAttributes(t) {
                        if (!t) return {};
                        const e = {};
                        return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((i => {
                            let n = i.replace(/^bs/, "");
                            n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = s(t.dataset[i])
                        })), e
                    },
                    getDataAttribute: (t, e) => s(t.getAttribute(`data-bs-${n(e)}`)),
                    offset(t) {
                        const e = t.getBoundingClientRect();
                        return {
                            top: e.top + window.pageYOffset,
                            left: e.left + window.pageXOffset
                        }
                    },
                    position: t => ({
                        top: t.offsetTop,
                        left: t.offsetLeft
                    })
                };
                e.default = o
            },
            802: function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(360);
                const n = {
                    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                    children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                    parents(t, e) {
                        const i = [];
                        let s = t.parentNode;
                        for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;) s.matches(e) && i.push(s), s = s.parentNode;
                        return i
                    },
                    prev(t, e) {
                        let i = t.previousElementSibling;
                        for (; i;) {
                            if (i.matches(e)) return [i];
                            i = i.previousElementSibling
                        }
                        return []
                    },
                    next(t, e) {
                        let i = t.nextElementSibling;
                        for (; i;) {
                            if (i.matches(e)) return [i];
                            i = i.nextElementSibling
                        }
                        return []
                    },
                    focusableChildren(t) {
                        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(", ");
                        return this.find(e, t).filter((t => !(0, s.isDisabled)(t) && (0, s.isVisible)(t)))
                    }
                };
                e.default = n
            },
            836: function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(127),
                    n = i(360);
                const o = {
                        className: "modal-backdrop",
                        isVisible: !0,
                        isAnimated: !1,
                        rootElement: "body",
                        clickCallback: null
                    },
                    r = {
                        className: "string",
                        isVisible: "boolean",
                        isAnimated: "boolean",
                        rootElement: "(element|string)",
                        clickCallback: "(function|null)"
                    },
                    a = "backdrop",
                    l = "show",
                    c = `mousedown.bs.${a}`;
                e.default = class {
                    constructor(t) {
                        this._config = this._getConfig(t), this._isAppended = !1, this._element = null
                    }
                    show(t) {
                        this._config.isVisible ? (this._append(), this._config.isAnimated && (0, n.reflow)(this._getElement()), this._getElement().classList.add(l), this._emulateAnimation((() => {
                            (0, n.execute)(t)
                        }))) : (0, n.execute)(t)
                    }
                    hide(t) {
                        this._config.isVisible ? (this._getElement().classList.remove(l), this._emulateAnimation((() => {
                            this.dispose(), (0, n.execute)(t)
                        }))) : (0, n.execute)(t)
                    }
                    _getElement() {
                        if (!this._element) {
                            const t = document.createElement("div");
                            t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
                        }
                        return this._element
                    }
                    _getConfig(t) {
                        return (t = { ...o,
                            ..."object" == typeof t ? t : {}
                        }).rootElement = (0, n.getElement)(t.rootElement), (0, n.typeCheckConfig)(a, t, r), t
                    }
                    _append() {
                        this._isAppended || (this._config.rootElement.append(this._getElement()), s.default.on(this._getElement(), c, (() => {
                            (0, n.execute)(this._config.clickCallback)
                        })), this._isAppended = !0)
                    }
                    dispose() {
                        this._isAppended && (s.default.off(this._element, c), this._element.remove(), this._isAppended = !1)
                    }
                    _emulateAnimation(t) {
                        (0, n.executeAfterTransition)(t, this._getElement(), this._config.isAnimated)
                    }
                }
            },
            574: function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(127),
                    n = i(802),
                    o = i(360);
                const r = {
                        trapElement: null,
                        autofocus: !0
                    },
                    a = {
                        trapElement: "element",
                        autofocus: "boolean"
                    },
                    l = ".bs.focustrap",
                    c = `focusin${l}`,
                    d = `keydown.tab${l}`,
                    u = "backward";
                e.default = class {
                    constructor(t) {
                        this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
                    }
                    activate() {
                        const {
                            trapElement: t,
                            autofocus: e
                        } = this._config;
                        this._isActive || (e && t.focus(), s.default.off(document, l), s.default.on(document, c, (t => this._handleFocusin(t))), s.default.on(document, d, (t => this._handleKeydown(t))), this._isActive = !0)
                    }
                    deactivate() {
                        this._isActive && (this._isActive = !1, s.default.off(document, l))
                    }
                    _handleFocusin(t) {
                        const {
                            target: e
                        } = t, {
                            trapElement: i
                        } = this._config;
                        if (e === document || e === i || i.contains(e)) return;
                        const s = n.default.focusableChildren(i);
                        0 === s.length ? i.focus() : this._lastTabNavDirection === u ? s[s.length - 1].focus() : s[0].focus()
                    }
                    _handleKeydown(t) {
                        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? u : "forward")
                    }
                    _getConfig(t) {
                        return t = { ...r,
                            ..."object" == typeof t ? t : {}
                        }, (0, o.typeCheckConfig)("focustrap", t, a), t
                    }
                }
            },
            360: function(t, e, i) {
                "use strict";
                i.r(e), i.d(e, {
                    getElement: function() {
                        return u
                    },
                    getUID: function() {
                        return n
                    },
                    getSelectorFromElement: function() {
                        return r
                    },
                    getElementFromSelector: function() {
                        return a
                    },
                    getTransitionDurationFromElement: function() {
                        return l
                    },
                    triggerTransitionEnd: function() {
                        return c
                    },
                    isElement: function() {
                        return d
                    },
                    typeCheckConfig: function() {
                        return h
                    },
                    isVisible: function() {
                        return f
                    },
                    isDisabled: function() {
                        return m
                    },
                    findShadowRoot: function() {
                        return g
                    },
                    noop: function() {
                        return p
                    },
                    getNextActiveElement: function() {
                        return x
                    },
                    reflow: function() {
                        return _
                    },
                    getjQuery: function() {
                        return b
                    },
                    onDOMContentLoaded: function() {
                        return y
                    },
                    isRTL: function() {
                        return E
                    },
                    defineJQueryPlugin: function() {
                        return w
                    },
                    execute: function() {
                        return A
                    },
                    executeAfterTransition: function() {
                        return k
                    }
                });
                const s = "transitionend",
                    n = t => {
                        do {
                            t += Math.floor(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    o = t => {
                        let e = t.getAttribute("data-bs-target");
                        if (!e || "#" === e) {
                            let i = t.getAttribute("href");
                            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
                        }
                        return e
                    },
                    r = t => {
                        const e = o(t);
                        return e && document.querySelector(e) ? e : null
                    },
                    a = t => {
                        const e = o(t);
                        return e ? document.querySelector(e) : null
                    },
                    l = t => {
                        if (!t) return 0;
                        let {
                            transitionDuration: e,
                            transitionDelay: i
                        } = window.getComputedStyle(t);
                        const s = Number.parseFloat(e),
                            n = Number.parseFloat(i);
                        return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
                    },
                    c = t => {
                        t.dispatchEvent(new Event(s))
                    },
                    d = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                    u = t => d(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
                    h = (t, e, i) => {
                        Object.keys(i).forEach((s => {
                            const n = i[s],
                                o = e[s],
                                r = o && d(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                            var a;
                            if (!new RegExp(n).test(r)) throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
                        }))
                    },
                    f = t => !(!d(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                    m = t => !t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))),
                    g = t => {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof t.getRootNode) {
                            const e = t.getRootNode();
                            return e instanceof ShadowRoot ? e : null
                        }
                        return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null
                    },
                    p = () => {},
                    _ = t => {
                        t.offsetHeight
                    },
                    b = () => {
                        const {
                            jQuery: t
                        } = window;
                        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                    },
                    v = [],
                    y = t => {
                        "loading" === document.readyState ? (v.length || document.addEventListener("DOMContentLoaded", (() => {
                            v.forEach((t => t()))
                        })), v.push(t)) : t()
                    },
                    E = () => "rtl" === document.documentElement.dir,
                    w = t => {
                        y((() => {
                            const e = b();
                            if (e) {
                                const i = t.NAME,
                                    s = e.fn[i];
                                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface)
                            }
                        }))
                    },
                    A = t => {
                        "function" == typeof t && t()
                    },
                    k = (t, e, i = !0) => {
                        if (!i) return void A(t);
                        const n = l(e) + 5;
                        let o = !1;
                        const r = ({
                            target: i
                        }) => {
                            i === e && (o = !0, e.removeEventListener(s, r), A(t))
                        };
                        e.addEventListener(s, r), setTimeout((() => {
                            o || c(e)
                        }), n)
                    },
                    x = (t, e, i, s) => {
                        let n = t.indexOf(e);
                        if (-1 === n) return t[!i && s ? t.length - 1 : 0];
                        const o = t.length;
                        return n += i ? 1 : -1, s && (n = (n + o) % o), t[Math.max(0, Math.min(n, o - 1))]
                    }
            },
            189: function(t, e, i) {
                "use strict";
                i.r(e);
                var s = i(802),
                    n = i(591),
                    o = i(360);
                const r = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    a = ".sticky-top";
                e.default = class {
                    constructor() {
                        this._element = document.body
                    }
                    getWidth() {
                        const t = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - t)
                    }
                    hide() {
                        const t = this.getWidth();
                        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e => e + t)), this._setElementAttributes(r, "paddingRight", (e => e + t)), this._setElementAttributes(a, "marginRight", (e => e - t))
                    }
                    _disableOverFlow() {
                        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                    }
                    _setElementAttributes(t, e, i) {
                        const s = this.getWidth();
                        this._applyManipulationCallback(t, (t => {
                            if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                            this._saveInitialAttribute(t, e);
                            const n = window.getComputedStyle(t)[e];
                            t.style[e] = `${i(Number.parseFloat(n))}px`
                        }))
                    }
                    reset() {
                        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(r, "paddingRight"), this._resetElementAttributes(a, "marginRight")
                    }
                    _saveInitialAttribute(t, e) {
                        const i = t.style[e];
                        i && n.default.setDataAttribute(t, e, i)
                    }
                    _resetElementAttributes(t, e) {
                        this._applyManipulationCallback(t, (t => {
                            const i = n.default.getDataAttribute(t, e);
                            void 0 === i ? t.style.removeProperty(e) : (n.default.removeDataAttribute(t, e), t.style[e] = i)
                        }))
                    }
                    _applyManipulationCallback(t, e) {
                        (0, o.isElement)(t) ? e(t): s.default.find(t, this._element).forEach(e)
                    }
                    isOverflowing() {
                        return this.getWidth() > 0
                    }
                }
            }
        },
        e = {};

    function i(s) {
        var n = e[s];
        if (void 0 !== n) return n.exports;
        var o = e[s] = {
            exports: {}
        };
        return t[s].call(o.exports, o, o.exports, i), o.exports
    }
    i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(e, {
                a: e
            }), e
        }, i.d = function(t, e) {
            for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: e[s]
            })
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var t = i(590),
                e = i.n(t);
            window.bootstrap && (window.bootstrap.Lightbox = e())
        }()
}();
/*
 * HC-Sticky
 * =========
 * Version: 2.2.7
 * Author: Some Web Media
 * Author URL: https://github.com/somewebmedia
 * Plugin URL: https://github.com/somewebmedia/hc-sticky
 * Description: JavaScript library that makes any element on your page visible while you scroll
 * License: MIT
 */
"use strict";
! function(t, e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        if (!t.document) throw new Error("HC-Sticky requires a browser to run.");
        module.exports = e(t)
    } else "function" == typeof define && define.amd ? define("hcSticky", [], e(t)) : e(t)
}("undefined" != typeof window ? window : this, function(V) {
    var i, n, Q = V.document,
        U = {
            top: 0,
            bottom: 0,
            bottomEnd: 0,
            innerTop: 0,
            innerSticker: null,
            stickyClass: "sticky",
            stickTo: null,
            followScroll: !0,
            responsive: null,
            mobileFirst: !1,
            onStart: null,
            onStop: null,
            onBeforeResize: null,
            onResize: null,
            resizeDebounce: 100,
            disable: !1
        },
        Y = function(t, e, o) {
            console.warn("%cHC Sticky:%c " + o + "%c '" + t + "'%c is now deprecated and will be removed. Use%c '" + e + "'%c instead.", "color: #fa253b", "color: default", "color: #5595c6", "color: default", "color: #5595c6", "color: default")
        },
        $ = function(n, f) {
            var o = this;
            if (f = f || {}, !(n = "string" == typeof n ? Q.querySelector(n) : n)) return !1;
            f.queries && Y("queries", "responsive", "option"), f.queryFlow && Y("queryFlow", "mobileFirst", "option");
            var p = {},
                u = $.Helpers,
                s = n.parentNode;
            "static" === u.getStyle(s, "position") && (s.style.position = "relative");

            function d(t) {
                u.isEmptyObject(t = t || {}) && !u.isEmptyObject(p) || (p = Object.assign({}, U, p, t))
            }

            function t() {
                return p.disable
            }

            function e() {
                var t, e = p.responsive || p.queries;
                if (e) {
                    var o = V.innerWidth;
                    if (t = f, (p = Object.assign({}, U, t || {})).mobileFirst)
                        for (var i in e) i <= o && !u.isEmptyObject(e[i]) && d(e[i]);
                    else {
                        var n, s = [];
                        for (n in e) {
                            var r = {};
                            r[n] = e[n], s.push(r)
                        }
                        for (var l = s.length - 1; 0 <= l; l--) {
                            var a = s[l],
                                c = Object.keys(a)[0];
                            o <= c && !u.isEmptyObject(a[c]) && d(a[c])
                        }
                    }
                }
            }

            function i() {
                var t, e, o, i;
                I.css = (t = n, e = u.getCascadedStyle(t), o = u.getStyle(t), i = {
                    height: t.offsetHeight + "px",
                    left: e.left,
                    right: e.right,
                    top: e.top,
                    bottom: e.bottom,
                    position: o.position,
                    display: o.display,
                    verticalAlign: o.verticalAlign,
                    boxSizing: o.boxSizing,
                    marginLeft: e.marginLeft,
                    marginRight: e.marginRight,
                    marginTop: e.marginTop,
                    marginBottom: e.marginBottom,
                    paddingLeft: e.paddingLeft,
                    paddingRight: e.paddingRight
                }, e.float && (i.float = e.float || "none"), e.cssFloat && (i.cssFloat = e.cssFloat || "none"), o.MozBoxSizing && (i.MozBoxSizing = o.MozBoxSizing), i.width = "auto" !== e.width ? e.width : "border-box" === i.boxSizing || "border-box" === i.MozBoxSizing ? t.offsetWidth + "px" : o.width, i), P.init(), y = !(!p.stickTo || !("document" === p.stickTo || p.stickTo.nodeType && 9 === p.stickTo.nodeType || "object" == typeof p.stickTo && p.stickTo instanceof("undefined" != typeof HTMLDocument ? HTMLDocument : Document))), h = p.stickTo ? y ? Q : u.getElement(p.stickTo) : s, z = (R = function() {
                    var t = n.offsetHeight + (parseInt(I.css.marginTop) || 0) + (parseInt(I.css.marginBottom) || 0),
                        e = (z || 0) - t;
                    return -1 <= e && e <= 1 ? z : t
                })(), v = (H = function() {
                    return y ? Math.max(Q.documentElement.clientHeight, Q.body.scrollHeight, Q.documentElement.scrollHeight, Q.body.offsetHeight, Q.documentElement.offsetHeight) : h.offsetHeight
                })(), S = y ? 0 : u.offset(h).top, w = p.stickTo ? y ? 0 : u.offset(s).top : S, E = V.innerHeight, N = n.offsetTop - (parseInt(I.css.marginTop) || 0), b = u.getElement(p.innerSticker), L = isNaN(p.top) && -1 < p.top.indexOf("%") ? parseFloat(p.top) / 100 * E : p.top, k = isNaN(p.bottom) && -1 < p.bottom.indexOf("%") ? parseFloat(p.bottom) / 100 * E : p.bottom, x = b ? b.offsetTop : p.innerTop || 0, T = isNaN(p.bottomEnd) && -1 < p.bottomEnd.indexOf("%") ? parseFloat(p.bottomEnd) / 100 * E : p.bottomEnd, j = S - L + x + N
            }

            function r() {
                z = R(), v = H(), O = S + v - L - T, C = E < z;
                var t, e = V.pageYOffset || Q.documentElement.scrollTop,
                    o = u.offset(n).top,
                    i = o - e;
                B = e < F ? "up" : "down", A = e - F, j < (F = e) ? O + L + (C ? k : 0) - (p.followScroll && C ? 0 : L) <= e + z - x - (E - (j - x) < z - x && p.followScroll && 0 < (t = z - E - x) ? t : 0) ? I.release({
                    position: "absolute",
                    bottom: w + s.offsetHeight - O - L
                }) : C && p.followScroll ? "down" == B ? i + z + k <= E + .9 ? I.stick({
                    bottom: k
                }) : "fixed" === I.position && I.release({
                    position: "absolute",
                    top: o - L - j - A + x
                }) : Math.ceil(i + x) < 0 && "fixed" === I.position ? I.release({
                    position: "absolute",
                    top: o - L - j + x - A
                }) : e + L - x <= o && I.stick({
                    top: L - x
                }) : I.stick({
                    top: L - x
                }) : I.release({
                    stop: !0
                })
            }

            function l() {
                M && (V.removeEventListener("scroll", r, u.supportsPassive), M = !1)
            }

            function a() {
                null !== n.offsetParent && "none" !== u.getStyle(n, "display") ? (i(), v < z ? l() : (r(), M || (V.addEventListener("scroll", r, u.supportsPassive), M = !0))) : l()
            }

            function c() {
                n.style.position = "", n.style.left = "", n.style.top = "", n.style.bottom = "", n.style.width = "", n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), I.css = {}, !(I.position = null) === P.isAttached && P.detach()
            }

            function g() {
                c(), e(), (t() ? l : a)()
            }

            function m() {
                q && (V.removeEventListener("resize", W, u.supportsPassive), q = !1), l()
            }
            var y, h, b, v, S, w, E, L, k, x, T, j, O, C, z, N, H, R, A, B, I = {
                    css: {},
                    position: null,
                    stick: function(t) {
                        t = t || {}, u.hasClass(n, p.stickyClass) || (!1 === P.isAttached && P.attach(), I.position = "fixed", n.style.position = "fixed", n.style.left = P.offsetLeft + "px", n.style.width = P.width, void 0 === t.bottom ? n.style.bottom = "auto" : n.style.bottom = t.bottom + "px", void 0 === t.top ? n.style.top = "auto" : n.style.top = t.top + "px", n.classList ? n.classList.add(p.stickyClass) : n.className += " " + p.stickyClass, p.onStart && p.onStart.call(n, Object.assign({}, p)))
                    },
                    release: function(t) {
                        var e;
                        (t = t || {}).stop = t.stop || !1, !0 !== t.stop && "fixed" !== I.position && null !== I.position && (void 0 === t.top && void 0 === t.bottom || void 0 !== t.top && (parseInt(u.getStyle(n, "top")) || 0) === t.top || void 0 !== t.bottom && (parseInt(u.getStyle(n, "bottom")) || 0) === t.bottom) || (!0 === t.stop ? !0 === P.isAttached && P.detach() : !1 === P.isAttached && P.attach(), e = t.position || I.css.position, I.position = e, n.style.position = e, n.style.left = !0 === t.stop ? I.css.left : P.positionLeft + "px", n.style.width = ("absolute" !== e ? I.css : P).width, void 0 === t.bottom ? n.style.bottom = !0 === t.stop ? "" : "auto" : n.style.bottom = t.bottom + "px", void 0 === t.top ? n.style.top = !0 === t.stop ? "" : "auto" : n.style.top = t.top + "px", n.classList ? n.classList.remove(p.stickyClass) : n.className = n.className.replace(new RegExp("(^|\\b)" + p.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), p.onStop && p.onStop.call(n, Object.assign({}, p)))
                    }
                },
                P = {
                    el: Q.createElement("div"),
                    offsetLeft: null,
                    positionLeft: null,
                    width: null,
                    isAttached: !1,
                    init: function() {
                        for (var t in P.el.className = "sticky-spacer", I.css) P.el.style[t] = I.css[t];
                        P.el.style["z-index"] = "-1";
                        var e = u.getStyle(n);
                        P.offsetLeft = u.offset(n).left - (parseInt(e.marginLeft) || 0), P.positionLeft = u.position(n).left, P.width = u.getStyle(n, "width")
                    },
                    attach: function() {
                        s.insertBefore(P.el, n), P.isAttached = !0
                    },
                    detach: function() {
                        P.el = s.removeChild(P.el), P.isAttached = !1
                    }
                },
                F = V.pageYOffset || Q.documentElement.scrollTop,
                M = !1,
                q = !1,
                D = function() {
                    p.onBeforeResize && p.onBeforeResize.call(n, Object.assign({}, p)), g(), p.onResize && p.onResize.call(n, Object.assign({}, p))
                },
                W = p.resizeDebounce ? u.debounce(D, p.resizeDebounce) : D,
                D = function() {
                    q || (V.addEventListener("resize", W, u.supportsPassive), q = !0), e(), (t() ? l : a)()
                };
            this.options = function(t) {
                return t ? p[t] : Object.assign({}, p)
            }, this.refresh = g, this.update = function(t) {
                d(t), f = Object.assign({}, f, t || {}), g()
            }, this.attach = D, this.detach = m, this.destroy = function() {
                m(), c()
            }, this.triggerMethod = function(t, e) {
                "function" == typeof o[t] && o[t](e)
            }, this.reinit = function() {
                Y("reinit", "refresh", "method"), g()
            }, d(f), D(), V.addEventListener("load", g)
        };
    return void 0 !== V.jQuery && (i = V.jQuery, n = "hcSticky", i.fn.extend({
        hcSticky: function(e, o) {
            return this.length ? "options" === e ? i.data(this.get(0), n).options() : this.each(function() {
                var t = i.data(this, n);
                t ? t.triggerMethod(e, o) : (t = new $(this, e), i.data(this, n, t))
            }) : this
        }
    })), V.hcSticky = V.hcSticky || $, $
}),
function(a) {
    var t = a.hcSticky,
        c = a.document;
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (null != n)
                    for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (o[s] = n[s])
            }
            return o
        },
        writable: !0,
        configurable: !0
    }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var e, o;
        if (null == this) throw new TypeError("this is null or not defined");
        var i, n = Object(this),
            s = n.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (1 < arguments.length && (e = arguments[1]), o = 0; o < s;) o in n && (i = n[o], t.call(e, i, o, n)), o++
    });
    var e = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function() {
                e = {
                    passive: !1
                }
            }
        });
        a.addEventListener("testPassive", null, o), a.removeEventListener("testPassive", null, o)
    } catch (t) {}

    function n(t, e) {
        return a.getComputedStyle ? e ? c.defaultView.getComputedStyle(t, null).getPropertyValue(e) : c.defaultView.getComputedStyle(t, null) : t.currentStyle ? e ? t.currentStyle[e.replace(/-\w/g, function(t) {
            return t.toUpperCase().replace("-", "")
        })] : t.currentStyle : void 0
    }

    function s(t) {
        var e = t.getBoundingClientRect(),
            o = a.pageYOffset || c.documentElement.scrollTop,
            t = a.pageXOffset || c.documentElement.scrollLeft;
        return {
            top: e.top + o,
            left: e.left + t
        }
    }
    t.Helpers = {
        supportsPassive: e,
        isEmptyObject: function(t) {
            for (var e in t) return !1;
            return !0
        },
        debounce: function(i, n, s) {
            var r;
            return function() {
                var t = this,
                    e = arguments,
                    o = s && !r;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, s || i.apply(t, e)
                }, n), o && i.apply(t, e)
            }
        },
        hasClass: function(t, e) {
            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
        },
        offset: s,
        position: function(t) {
            var e = t.offsetParent,
                o = s(e),
                i = s(t),
                e = n(e),
                t = n(t);
            return o.top += parseInt(e.borderTopWidth) || 0, o.left += parseInt(e.borderLeftWidth) || 0, {
                top: i.top - o.top - (parseInt(t.marginTop) || 0),
                left: i.left - o.left - (parseInt(t.marginLeft) || 0)
            }
        },
        getElement: function(t) {
            var e = null;
            return "string" == typeof t ? e = c.querySelector(t) : a.jQuery && t instanceof a.jQuery && t.length ? e = t[0] : t instanceof Element && (e = t), e
        },
        getStyle: n,
        getCascadedStyle: function(t) {
            var e, o = t.cloneNode(!0);
            o.style.display = "none", Array.prototype.slice.call(o.querySelectorAll('input[type="radio"]')).forEach(function(t) {
                t.removeAttribute("name")
            }), t.parentNode.insertBefore(o, t.nextSibling), o.currentStyle ? e = o.currentStyle : a.getComputedStyle && (e = c.defaultView.getComputedStyle(o, null));
            var i, n, s, r = {};
            for (i in e) !isNaN(i) || "string" != typeof e[i] && "number" != typeof e[i] || (r[i] = e[i]);
            if (Object.keys(r).length < 3)
                for (var l in r = {}, e) isNaN(l) || (r[e[l].replace(/-\w/g, function(t) {
                    return t.toUpperCase().replace("-", "")
                })] = e.getPropertyValue(e[l]));
            return r.margin || "auto" !== r.marginLeft ? r.margin || r.marginLeft !== r.marginRight || r.marginLeft !== r.marginTop || r.marginLeft !== r.marginBottom || (r.margin = r.marginLeft) : r.margin = "auto", r.margin || "0px" !== r.marginLeft || "0px" !== r.marginRight || (s = (n = t.offsetLeft - t.parentNode.offsetLeft) - (parseInt(r.left) || 0) - (parseInt(r.right) || 0), 0 != (s = t.parentNode.offsetWidth - t.offsetWidth - n - (parseInt(r.right) || 0) + (parseInt(r.left) || 0) - s) && 1 != s || (r.margin = "auto")), o.parentNode.removeChild(o), o = null, r
        }
    }
}(window);
/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
;
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function($) {
    $.fn.marquee = function(options) {
        return this.each(function() {
            // Extend the options if any provided
            var o = $.extend({}, $.fn.marquee.defaults, options),
                $this = $(this),
                $marqueeWrapper, containerWidth, animationCss, verticalDir, elWidth,
                loopCount = 3,
                playState = 'animation-play-state',
                css3AnimationIsSupported = false,

                // Private methods
                _prefixedEvent = function(element, type, callback) {
                    var pfx = ["webkit", "moz", "MS", "o", ""];
                    for (var p = 0; p < pfx.length; p++) {
                        if (!pfx[p]) type = type.toLowerCase();
                        element.addEventListener(pfx[p] + type, callback, false);
                    }
                },

                _objToString = function(obj) {
                    var tabjson = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            tabjson.push(p + ':' + obj[p]);
                        }
                    }
                    tabjson.push();
                    return '{' + tabjson.join(',') + '}';
                },

                _startAnimationWithDelay = function() {
                    $this.timer = setTimeout(animate, o.delayBeforeStart);
                },

                // Public methods
                methods = {
                    pause: function() {
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, 'paused');
                        } else {
                            // pause using pause plugin
                            if ($.fn.pause) {
                                $marqueeWrapper.pause();
                            }
                        }
                        // save the status
                        $this.data('runningStatus', 'paused');
                        // fire event
                        $this.trigger('paused');
                    },

                    resume: function() {
                        // resume using css3
                        if (css3AnimationIsSupported && o.allowCss3Support) {
                            $marqueeWrapper.css(playState, 'running');
                        } else {
                            // resume using pause plugin
                            if ($.fn.resume) {
                                $marqueeWrapper.resume();
                            }
                        }
                        // save the status
                        $this.data('runningStatus', 'resumed');
                        // fire event
                        $this.trigger('resumed');
                    },

                    toggle: function() {
                        methods[$this.data('runningStatus') === 'resumed' ? 'pause' : 'resume']();
                    },

                    destroy: function() {
                        // Clear timer
                        clearTimeout($this.timer);
                        // Unbind all events
                        $this.find("*").addBack().off();
                        // Just unwrap the elements that has been added using this plugin
                        $this.html($this.find('.js-marquee:first').html());
                    }
                };

            // Check for methods
            if (typeof options === 'string') {
                if ($.isFunction(methods[options])) {
                    // Following two IF statements to support public methods
                    if (!$marqueeWrapper) {
                        $marqueeWrapper = $this.find('.js-marquee-wrapper');
                    }
                    if ($this.data('css3AnimationIsSupported') === true) {
                        css3AnimationIsSupported = true;
                    }
                    methods[options]();
                }
                return;
            }

            /* Check if element has data attributes. They have top priority
               For details https://twitter.com/aamirafridi/status/403848044069679104 - Can't find a better solution :/
               jQuery 1.3.2 doesn't support $.data().KEY hence writting the following */
            var dataAttributes = {},
                attr;
            $.each(o, function(key) {
                // Check if element has this data attribute
                attr = $this.attr('data-' + key);
                if (typeof attr !== 'undefined') {
                    // Now check if value is boolean or not
                    switch (attr) {
                        case 'true':
                            attr = true;
                            break;
                        case 'false':
                            attr = false;
                            break;
                    }
                    o[key] = attr;
                }
            });

            // Reintroduce speed as an option. It calculates duration as a factor of the container width
            // measured in pixels per second.
            if (o.speed) {
                o.duration = parseInt($this.width(), 10) / o.speed * 1000;
            }

            // Shortcut to see if direction is upward or downward
            verticalDir = o.direction === 'up' || o.direction === 'down';

            // no gap if not duplicated
            o.gap = o.duplicated ? parseInt(o.gap) : 0;

            // wrap inner content into a div
            $this.wrapInner('<div class="js-marquee"></div>');

            // Make copy of the element
            var $el = $this.find('.js-marquee').css({
                'margin-right': o.gap,
                'float': 'left'
            });

            if (o.duplicated) {
                $el.clone(true).appendTo($this);
            }

            // wrap both inner elements into one div
            $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');

            // Save the reference of the wrapper
            $marqueeWrapper = $this.find('.js-marquee-wrapper');

            // If direction is up or down, get the height of main element
            if (verticalDir) {
                var containerHeight = $this.height();
                $marqueeWrapper.removeAttr('style');
                $this.height(containerHeight);

                // Change the CSS for js-marquee element
                $this.find('.js-marquee').css({
                    'float': 'none',
                    'margin-bottom': o.gap,
                    'margin-right': 0
                });

                // Remove bottom margin from 2nd element if duplicated
                if (o.duplicated) {
                    $this.find('.js-marquee:last').css({
                        'margin-bottom': 0
                    });
                }

                var elHeight = $this.find('.js-marquee:first').height() + o.gap;

                // adjust the animation duration according to the text length
                if (o.startVisible && !o.duplicated) {
                    // Compute the complete animation duration and save it for later reference
                    // formula is to: (Height of the text node + height of the main container / Height of the main container) * duration;
                    o._completeDuration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration;

                    // formula is to: (Height of the text node / height of the main container) * duration
                    o.duration = (parseInt(elHeight, 10) / parseInt(containerHeight, 10)) * o.duration;
                } else {
                    // formula is to: (Height of the text node + height of the main container / Height of the main container) * duration;
                    o.duration = ((parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10)) * o.duration;
                }

            } else {
                // Save the width of the each element so we can use it in animation
                elWidth = $this.find('.js-marquee:first').width() + o.gap;

                // container width
                containerWidth = $this.width();

                // adjust the animation duration according to the text length
                if (o.startVisible && !o.duplicated) {
                    // Compute the complete animation duration and save it for later reference
                    // formula is to: (Width of the text node + width of the main container / Width of the main container) * duration;
                    o._completeDuration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration;

                    // (Width of the text node / width of the main container) * duration
                    o.duration = (parseInt(elWidth, 10) / parseInt(containerWidth, 10)) * o.duration;
                } else {
                    // formula is to: (Width of the text node + width of the main container / Width of the main container) * duration;
                    o.duration = ((parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10)) * o.duration;
                }
            }

            // if duplicated then reduce the duration
            if (o.duplicated) {
                o.duration = o.duration / 2;
            }

            if (o.allowCss3Support) {
                var elm = document.body || document.createElement('div'),
                    animationName = 'marqueeAnimation-' + Math.floor(Math.random() * 10000000),
                    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
                    animationString = 'animation',
                    animationCss3Str = '',
                    keyframeString = '';

                // Check css3 support
                if (elm.style.animation !== undefined) {
                    keyframeString = '@keyframes ' + animationName + ' ';
                    css3AnimationIsSupported = true;
                }

                if (css3AnimationIsSupported === false) {
                    for (var i = 0; i < domPrefixes.length; i++) {
                        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                            var prefix = '-' + domPrefixes[i].toLowerCase() + '-';
                            animationString = prefix + animationString;
                            playState = prefix + playState;
                            keyframeString = '@' + prefix + 'keyframes ' + animationName + ' ';
                            css3AnimationIsSupported = true;
                            break;
                        }
                    }
                }

                if (css3AnimationIsSupported) {
                    animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's infinite ' + o.css3easing;
                    $this.data('css3AnimationIsSupported', true);
                }
            }

            var _rePositionVertically = function() {
                    $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? containerHeight + 'px' : '-' + elHeight + 'px') + ')');
                },
                _rePositionHorizontally = function() {
                    $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? containerWidth + 'px' : '-' + elWidth + 'px') + ')');
                };

            // if duplicated option is set to true than position the wrapper
            if (o.duplicated) {
                if (verticalDir) {
                    if (o.startVisible) {
                        $marqueeWrapper.css('transform', 'translateY(0)');
                    } else {
                        $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? containerHeight + 'px' : '-' + ((elHeight * 2) - o.gap) + 'px') + ')');
                    }
                } else {
                    if (o.startVisible) {
                        $marqueeWrapper.css('transform', 'translateX(0)');
                    } else {
                        $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? containerWidth + 'px' : '-' + ((elWidth * 2) - o.gap) + 'px') + ')');
                    }
                }

                // If the text starts out visible we can skip the two initial loops
                if (!o.startVisible) {
                    loopCount = 1;
                }
            } else if (o.startVisible) {
                // We only have two different loops if marquee is duplicated and starts visible
                loopCount = 2;
            } else {
                if (verticalDir) {
                    _rePositionVertically();
                } else {
                    _rePositionHorizontally();
                }
            }

            // Animate recursive method
            var animate = function() {
                if (o.duplicated) {
                    // When duplicated, the first loop will be scroll longer so double the duration
                    if (loopCount === 1) {
                        o._originalDuration = o.duration;
                        if (verticalDir) {
                            o.duration = o.direction === 'up' ? o.duration + (containerHeight / ((elHeight) / o.duration)) : o.duration * 2;
                        } else {
                            o.duration = o.direction === 'left' ? o.duration + (containerWidth / ((elWidth) / o.duration)) : o.duration * 2;
                        }
                        // Adjust the css3 animation as well
                        if (animationCss3Str) {
                            animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                        }
                        loopCount++;
                    }
                    // On 2nd loop things back to normal, normal duration for the rest of animations
                    else if (loopCount === 2) {
                        o.duration = o._originalDuration;
                        // Adjust the css3 animation as well
                        if (animationCss3Str) {
                            animationName = animationName + '0';
                            keyframeString = $.trim(keyframeString) + '0 ';
                            animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                        }
                        loopCount++;
                    }
                }

                if (verticalDir) {
                    if (o.duplicated) {

                        // Adjust the starting point of animation only when first loops finishes
                        if (loopCount > 2) {
                            $marqueeWrapper.css('transform', 'translateY(' + (o.direction === 'up' ? 0 : '-' + elHeight + 'px') + ')');
                        }

                        animationCss = {
                            'transform': 'translateY(' + (o.direction === 'up' ? '-' + elHeight + 'px' : 0) + ')'
                        };
                    } else if (o.startVisible) {
                        // This loop moves the marquee out of the container
                        if (loopCount === 2) {
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                            }
                            animationCss = {
                                'transform': 'translateY(' + (o.direction === 'up' ? '-' + elHeight + 'px' : containerHeight + 'px') + ')'
                            };
                            loopCount++;
                        } else if (loopCount === 3) {
                            // Set the duration for the animation that will run forever
                            o.duration = o._completeDuration;
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationName = animationName + '0';
                                keyframeString = $.trim(keyframeString) + '0 ';
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                            }
                            _rePositionVertically();
                        }
                    } else {
                        _rePositionVertically();
                        animationCss = {
                            'transform': 'translateY(' + (o.direction === 'up' ? '-' + ($marqueeWrapper.height()) + 'px' : containerHeight + 'px') + ')'
                        };
                    }
                } else {
                    if (o.duplicated) {

                        // Adjust the starting point of animation only when first loops finishes
                        if (loopCount > 2) {
                            $marqueeWrapper.css('transform', 'translateX(' + (o.direction === 'left' ? 0 : '-' + elWidth + 'px') + ')');
                        }

                        animationCss = {
                            'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : 0) + ')'
                        };

                    } else if (o.startVisible) {
                        // This loop moves the marquee out of the container
                        if (loopCount === 2) {
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's ' + o.delayBeforeStart / 1000 + 's ' + o.css3easing;
                            }
                            animationCss = {
                                'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')'
                            };
                            loopCount++;
                        } else if (loopCount === 3) {
                            // Set the duration for the animation that will run forever
                            o.duration = o._completeDuration;
                            // Adjust the css3 animation as well
                            if (animationCss3Str) {
                                animationName = animationName + '0';
                                keyframeString = $.trim(keyframeString) + '0 ';
                                animationCss3Str = animationName + ' ' + o.duration / 1000 + 's 0s infinite ' + o.css3easing;
                            }
                            _rePositionHorizontally();
                        }
                    } else {
                        _rePositionHorizontally();
                        animationCss = {
                            'transform': 'translateX(' + (o.direction === 'left' ? '-' + elWidth + 'px' : containerWidth + 'px') + ')'
                        };
                    }
                }

                // fire event
                $this.trigger('beforeStarting');

                // If css3 support is available than do it with css3, otherwise use jQuery as fallback
                if (css3AnimationIsSupported) {
                    // Add css3 animation to the element
                    $marqueeWrapper.css(animationString, animationCss3Str);
                    var keyframeCss = keyframeString + ' { 100%  ' + _objToString(animationCss) + '}',
                        $styles = $marqueeWrapper.find('style');

                    // Now add the keyframe animation to the marquee element
                    if ($styles.length !== 0) {
                        // Bug fixed for jQuery 1.3.x - Instead of using .last(), use following
                        $styles.filter(":last").html(keyframeCss);
                    } else {
                        $('head').append('<style>' + keyframeCss + '</style>');
                    }

                    // Animation iteration event
                    _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function() {
                        $this.trigger('finished');
                    });
                    // Animation stopped
                    _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function() {
                        animate();
                        $this.trigger('finished');
                    });

                } else {
                    // Start animating
                    $marqueeWrapper.animate(animationCss, o.duration, o.easing, function() {
                        // fire event
                        $this.trigger('finished');
                        // animate again
                        if (o.pauseOnCycle) {
                            _startAnimationWithDelay();
                        } else {
                            animate();
                        }
                    });
                }
                // save the status
                $this.data('runningStatus', 'resumed');
            };

            // bind pause and resume events
            $this.on('pause', methods.pause);
            $this.on('resume', methods.resume);

            if (o.pauseOnHover) {
                $this.on('mouseenter', methods.pause);
                $this.on('mouseleave', methods.resume);
            }

            // If css3 animation is supported than call animate method at once
            if (css3AnimationIsSupported && o.allowCss3Support) {
                animate();
            } else {
                // Starts the recursive method
                _startAnimationWithDelay();
            }

        });
    }; // End of Plugin
    // Public: plugin defaults options
    $.fn.marquee.defaults = {
        // If you wish to always animate using jQuery
        allowCss3Support: true,
        // works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
        css3easing: 'linear',
        // requires jQuery easing plugin. Default is 'linear'
        easing: 'linear',
        // pause time before the next animation turn in milliseconds
        delayBeforeStart: 1000,
        // 'left', 'right', 'up' or 'down'
        direction: 'left',
        // true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
        // duration in milliseconds of the marquee in milliseconds
        duration: 5000,
        // Speed allows you to set a relatively constant marquee speed regardless of the width of the containing element. Speed is measured in pixels per second.
        speed: 0,
        // gap in pixels between the tickers
        gap: 20,
        // on cycle pause the marquee
        pauseOnCycle: false,
        // on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
        pauseOnHover: false,
        // the marquee is visible initially positioned next to the border towards it will be moving
        startVisible: false
    };
});

function t(t, e, i) {
    return Math.max(t, Math.min(e, i))
}
var e = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(e) {
        if (!this.isRunning) return;
        let i = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            const s = t(0, this.currentTime / this.duration, 1);
            i = s >= 1;
            const o = i ? 1 : this.easing(s);
            this.value = this.from + (this.to - this.from) * o
        } else this.lerp ? (this.value = function(t, e, i, s) {
            return function(t, e, i) {
                return (1 - i) * t + i * e
            }(t, e, 1 - Math.exp(-i * s))
        }(this.value, this.to, 60 * this.lerp, e), Math.round(this.value) === this.to && (this.value = this.to, i = !0)) : (this.value = this.to, i = !0);
        i && this.stop(), this.onUpdate ? .(this.value, i)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(t, e, {
        lerp: i,
        duration: s,
        easing: o,
        onStart: n,
        onUpdate: r
    }) {
        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n ? .(), this.onUpdate = r
    }
};
var i = class {
        constructor(t, e, {
            autoResize: i = !0,
            debounce: s = 250
        } = {}) {
            this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
                let i;
                return function(...s) {
                    let o = this;
                    clearTimeout(i), i = setTimeout((() => {
                        i = void 0, t.apply(o, s)
                    }), e)
                }
            }(this.resize, s), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
            this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
        }
        resize = () => {
            this.onWrapperResize(), this.onContentResize()
        };
        onWrapperResize = () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        };
        onContentResize = () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        };
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    },
    s = class {
        events = {};
        emit(t, ...e) {
            let i = this.events[t] || [];
            for (let t = 0, s = i.length; t < s; t++) i[t] ? .(...e)
        }
        on(t, e) {
            return this.events[t] ? .push(e) || (this.events[t] = [e]), () => {
                this.events[t] = this.events[t] ? .filter((t => e !== t))
            }
        }
        off(t, e) {
            this.events[t] = this.events[t] ? .filter((t => e !== t))
        }
        destroy() {
            this.events = {}
        }
    },
    o = 100 / 6,
    n = {
        passive: !1
    },
    r = class {
        constructor(t, e = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, n), this.element.addEventListener("touchstart", this.onTouchStart, n), this.element.addEventListener("touchmove", this.onTouchMove, n), this.element.addEventListener("touchend", this.onTouchEnd, n)
        }
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new s;
        on(t, e) {
            return this.emitter.on(t, e)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, n), this.element.removeEventListener("touchstart", this.onTouchStart, n), this.element.removeEventListener("touchmove", this.onTouchMove, n), this.element.removeEventListener("touchend", this.onTouchEnd, n)
        }
        onTouchStart = t => {
            const {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        };
        onTouchMove = t => {
            const {
                clientX: e,
                clientY: i
            } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.options.touchMultiplier, o = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                x: s,
                y: o
            }, this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: o,
                event: t
            })
        };
        onTouchEnd = t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        };
        onWheel = t => {
            let {
                deltaX: e,
                deltaY: i,
                deltaMode: s
            } = t;
            e *= 1 === s ? o : 2 === s ? this.window.width : 1, i *= 1 === s ? o : 2 === s ? this.window.height : 1, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: i,
                event: t
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    },
    l = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    Lenis = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new e;
        emitter = new s;
        dimensions;
        virtualScroll;
        constructor({
            wrapper: t = window,
            content: e = document.documentElement,
            eventsTarget: s = t,
            smoothWheel: o = !0,
            syncTouch: n = !1,
            syncTouchLerp: h = .075,
            touchInertiaExponent: a = 1.7,
            duration: c,
            easing: p,
            lerp: d = .1,
            infinite: u = !1,
            orientation: m = "vertical",
            gestureOrientation: v = "vertical",
            touchMultiplier: g = 1,
            wheelMultiplier: S = 1,
            autoResize: w = !0,
            prevent: f,
            virtualScroll: y,
            overscroll: E = !0,
            autoRaf: T = !1,
            anchors: b = !1,
            autoToggle: z = !1,
            allowNestedScroll: _ = !1,
            __experimental__naiveDimensions: L = !1
        } = {}) {
            window.lenisVersion = "1.3.8", t && t !== document.documentElement || (t = window), "number" == typeof c && "function" != typeof p ? p = l : "function" == typeof p && "number" != typeof c && (c = 1), this.options = {
                wrapper: t,
                content: e,
                eventsTarget: s,
                smoothWheel: o,
                syncTouch: n,
                syncTouchLerp: h,
                touchInertiaExponent: a,
                duration: c,
                easing: p,
                lerp: d,
                infinite: u,
                gestureOrientation: v,
                orientation: m,
                touchMultiplier: g,
                wheelMultiplier: S,
                autoResize: w,
                prevent: f,
                virtualScroll: y,
                overscroll: E,
                autoRaf: T,
                anchors: b,
                autoToggle: z,
                allowNestedScroll: _,
                __experimental__naiveDimensions: L
            }, this.dimensions = new i(t, e, {
                autoResize: w
            }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new r(s, {
                touchMultiplier: g,
                wheelMultiplier: S
            }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                passive: !0
            }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        }
        destroy() {
            this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                capture: !0
            }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
        }
        on(t, e) {
            return this.emitter.on(t, e)
        }
        off(t, e) {
            return this.emitter.off(t, e)
        }
        onScrollEnd = t => {
            t instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || t.stopPropagation()
        };
        dispatchScrollendEvent = () => {
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        };
        onTransitionEnd = t => {
            if (t.propertyName.includes("overflow")) {
                const t = this.isHorizontal ? "overflow-x" : "overflow-y",
                    e = getComputedStyle(this.rootElement)[t];
                ["hidden", "clip"].includes(e) ? this.internalStop() : this.internalStart()
            }
        };
        setScroll(t) {
            this.isHorizontal ? this.options.wrapper.scrollTo({
                left: t,
                behavior: "instant"
            }) : this.options.wrapper.scrollTo({
                top: t,
                behavior: "instant"
            })
        }
        onClick = t => {
            const e = t.composedPath().find((t => t instanceof HTMLAnchorElement && (t.getAttribute("href") ? .startsWith("#") || t.getAttribute("href") ? .startsWith("/#") || t.getAttribute("href") ? .startsWith("./#"))));
            if (e) {
                const t = e.getAttribute("href");
                if (t) {
                    const e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0;
                    let i = `#${t.split("#")[1]}`;
                    ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(t) && (i = 0), this.scrollTo(i, e)
                }
            }
        };
        onPointerDown = t => {
            1 === t.button && this.reset()
        };
        onVirtualScroll = t => {
            if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
            const {
                deltaX: e,
                deltaY: i,
                event: s
            } = t;
            if (this.emitter.emit("virtual-scroll", {
                    deltaX: e,
                    deltaY: i,
                    event: s
                }), s.ctrlKey) return;
            if (s.lenisStopPropagation) return;
            const o = s.type.includes("touch"),
                n = s.type.includes("wheel");
            this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
            const r = 0 === e && 0 === i;
            if (this.options.syncTouch && o && "touchstart" === s.type && r && !this.isStopped && !this.isLocked) return void this.reset();
            const l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
            if (r || l) return;
            let h = s.composedPath();
            h = h.slice(0, h.indexOf(this.rootElement));
            const a = this.options.prevent;
            if (h.find((t => t instanceof HTMLElement && ("function" == typeof a && a ? .(t) || t.hasAttribute ? .("data-lenis-prevent") || o && t.hasAttribute ? .("data-lenis-prevent-touch") || n && t.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(t, {
                    deltaX: e,
                    deltaY: i
                }))))) return;
            if (this.isStopped || this.isLocked) return void(s.cancelable && s.preventDefault());
            if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) return this.isScrolling = "native", this.animate.stop(), void(s.lenisStopPropagation = !0);
            let c = i;
            "both" === this.options.gestureOrientation ? c = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (c = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = !0), s.cancelable && s.preventDefault();
            const p = o && this.options.syncTouch,
                d = o && "touchend" === s.type;
            d && (c = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + c, {
                programmatic: !1,
                ...p ? {
                    lerp: d ? this.options.syncTouchLerp : 1
                } : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        };
        resize() {
            this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        onNativeScroll = () => {
            if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) this._preventNextNativeScrollEvent = !1;
            else if (!1 === this.isScrolling || "native" === this.isScrolling) {
                const t = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout((() => {
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                }), 400))
            }
        };
        reset() {
            this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
        }
        start() {
            this.isStopped && (this.options.autoToggle ? this.rootElement.style.removeProperty("overflow") : this.internalStart())
        }
        internalStart() {
            this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
        }
        stop() {
            this.isStopped || (this.options.autoToggle ? this.rootElement.style.setProperty("overflow", "clip") : this.internalStop())
        }
        internalStop() {
            this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
        }
        raf = t => {
            const e = t - (this.time || t);
            this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        };
        scrollTo(e, {
            offset: i = 0,
            immediate: s = !1,
            lock: o = !1,
            duration: n = this.options.duration,
            easing: r = this.options.easing,
            lerp: h = this.options.lerp,
            onStart: a,
            onComplete: c,
            force: p = !1,
            programmatic: d = !0,
            userData: u
        } = {}) {
            if (!this.isStopped && !this.isLocked || p) {
                if ("string" == typeof e && ["top", "left", "start"].includes(e)) e = 0;
                else if ("string" == typeof e && ["bottom", "right", "end"].includes(e)) e = this.limit;
                else {
                    let t;
                    if ("string" == typeof e ? t = document.querySelector(e) : e instanceof HTMLElement && e ? .nodeType && (t = e), t) {
                        if (this.options.wrapper !== window) {
                            const t = this.rootElement.getBoundingClientRect();
                            i -= this.isHorizontal ? t.left : t.top
                        }
                        const s = t.getBoundingClientRect();
                        e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                    }
                }
                if ("number" == typeof e) {
                    if (e += i, e = Math.round(e), this.options.infinite) {
                        if (d) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            const t = e - this.animatedScroll;
                            t > this.limit / 2 ? e -= this.limit : t < -this.limit / 2 && (e += this.limit)
                        }
                    } else e = t(0, e, this.limit);
                    if (e === this.targetScroll) return a ? .(this), void c ? .(this);
                    if (this.userData = u ? ? {}, s) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c ? .(this), this.userData = {}, void requestAnimationFrame((() => {
                        this.dispatchScrollendEvent()
                    }));
                    d || (this.targetScroll = e), "number" == typeof n && "function" != typeof r ? r = l : "function" == typeof r && "number" != typeof n && (n = 1), this.animate.fromTo(this.animatedScroll, e, {
                        duration: n,
                        easing: r,
                        lerp: h,
                        onStart: () => {
                            o && (this.isLocked = !0), this.isScrolling = "smooth", a ? .(this)
                        },
                        onUpdate: (t, e) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), d && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), c ? .(this), this.userData = {}, requestAnimationFrame((() => {
                                this.dispatchScrollendEvent()
                            })), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0, requestAnimationFrame((() => {
                this._preventNextNativeScrollEvent = !1
            }))
        }
        checkNestedScroll(t, {
            deltaX: e,
            deltaY: i
        }) {
            const s = Date.now(),
                o = t._lenis ? ? = {};
            let n, r, l, h, a, c, p, d;
            const u = this.options.gestureOrientation;
            if (s - (o.time ? ? 0) > 2e3) {
                o.time = Date.now();
                const e = window.getComputedStyle(t);
                o.computedStyle = e;
                const i = e.overflowX,
                    s = e.overflowY;
                if (n = ["auto", "overlay", "scroll"].includes(i), r = ["auto", "overlay", "scroll"].includes(s), o.hasOverflowX = n, o.hasOverflowY = r, !n && !r) return !1;
                if ("vertical" === u && !r) return !1;
                if ("horizontal" === u && !n) return !1;
                a = t.scrollWidth, c = t.scrollHeight, p = t.clientWidth, d = t.clientHeight, l = a > p, h = c > d, o.isScrollableX = l, o.isScrollableY = h, o.scrollWidth = a, o.scrollHeight = c, o.clientWidth = p, o.clientHeight = d
            } else l = o.isScrollableX, h = o.isScrollableY, n = o.hasOverflowX, r = o.hasOverflowY, a = o.scrollWidth, c = o.scrollHeight, p = o.clientWidth, d = o.clientHeight;
            if (!n && !r || !l && !h) return !1;
            if (!("vertical" !== u || r && h)) return !1;
            if (!("horizontal" !== u || n && l)) return !1;
            let m, v, g, S, w, f;
            if ("horizontal" === u) m = "x";
            else if ("vertical" === u) m = "y";
            else {
                0 !== e && n && l && (m = "x"), 0 !== i && r && h && (m = "y")
            }
            if (!m) return !1;
            if ("x" === m) v = t.scrollLeft, g = a - p, S = e, w = n, f = l;
            else {
                if ("y" !== m) return !1;
                v = t.scrollTop, g = c - d, S = i, w = r, f = h
            }
            return (S > 0 ? v < g : v > 0) && w && f
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return "horizontal" === this.options.orientation
        }
        get actualScroll() {
            const t = this.options.wrapper;
            return this.isHorizontal ? t.scrollX ? ? t.scrollLeft : t.scrollY ? ? t.scrollTop
        }
        get scroll() {
            return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
            var t, e
        }
        get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(t) {
            this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(t) {
            this._isStopped !== t && (this._isStopped = t, this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(t) {
            this._isLocked !== t && (this._isLocked = t, this.updateClassName())
        }
        get isSmooth() {
            return "smooth" === this.isScrolling
        }
        get className() {
            let t = "lenis";
            return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
        }
        updateClassName() {
            this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
        }
        cleanUpClassName() {
            this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
        }
    };
globalThis.Lenis = Lenis, globalThis.Lenis.prototype = Lenis.prototype; //# sourceMappingURL=lenis.min.js.map
// Variables globales
let lenis;
let customCursor;

// Mantener control manual del scroll
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya se vio la intro para ocultarla inmediatamente si es necesario
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';
    const introHome = document.querySelector('.intro-home');

    if (hasSeenIntro && introHome) {
        // Si ya se vio la intro, ocultarla inmediatamente sin transición
        introHome.style.display = 'none';
    }

    // Inicializar cursor una sola vez - FUERA de Barba
    customCursor = new CustomCursor();

    // Solo inicializar Barba.js si el usuario NO está logueado
    if (typeof ajax_forms !== 'undefined' && ajax_forms.isUserLoggedIn === 'false') {
        barbaJsInit();
    } else {
        // Usuario logueado: inicializar todo directamente sin Barba
        initSmoothScroll();
        marquee();
        contentAnimation();

        // Inicializar imágenes de magazine (para usuarios logueados)
        if (typeof initMagazineImages === 'function') {
            initMagazineImages();
        }

        // Inicializar scroll animations archive (para usuarios logueados)
        initMagazineArchiveScroll();

        // Asegurar que la intro esté oculta para usuarios logueados
        if (introHome) {
            introHome.style.display = 'none';
        }

        // Reproducir videos
        if (document.querySelectorAll('video').length) {
            document.querySelectorAll('video').forEach((video) => {
                video.play();
            });
        }
    }
});

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function contentAnimation() {
    scrollElementos();
    menu();
    formulariosAjax();
    inputFilledStates();
    initCustomValidation();

    // Inicializar scroll animations para magazine archive
    initMagazineArchiveScroll();

    // Actualizar referencias del cursor para nuevos elementos
    if (customCursor) {
        customCursor.refreshHoverElements();
    }

    if (document.querySelectorAll('video').length) {
        document.querySelectorAll('video').forEach((video) => {
            video.play();
        });
    }
}

/* ------------------ GSAP ------------------ */

// Sistema de cursor personalizado - Implementación moderna con quickTo
class CustomCursor {
    constructor() {
        this.element = null;
        this.xTo = null;
        this.yTo = null;
        this.isInitialized = false;

        this.init();
    }

    init() {
        if (this.isInitialized) return;

        this.element = document.querySelector('.puntero');
        if (!this.element) {
            console.warn('Cursor element .puntero not found');
            return;
        }

        // Configuración inicial
        gsap.set(this.element, {
            xPercent: -50,
            yPercent: -50,
            scale: 1,
            visibility: 'visible',
            force3D: true
        });

        // Configurar quickTo para movimiento suave y sin delay
        this.xTo = gsap.quickTo(this.element, "x", {
            duration: 0.2,
            ease: "power3",
            overwrite: true
        });

        this.yTo = gsap.quickTo(this.element, "y", {
            duration: 0.2,
            ease: "power3",
            overwrite: true
        });

        // Event listener para movimiento del mouse
        window.addEventListener('mousemove', (e) => {
            this.xTo(e.clientX);
            this.yTo(e.clientY);
        });

        // Configurar efectos hover
        this.setupHoverEffects();

        this.isInitialized = true;
        console.log('✅ Custom cursor initialized with quickTo');
    }

    setupHoverEffects() {
        // Inputs, checkboxes, radios y labels - cursor pequeño
        const inputElements = document.querySelectorAll('input[type="checkbox"], input[type="radio"], input[type="text"], input[type="email"], input[type="tel"], input[type="number"], input[type="password"], textarea, select, label');

        inputElements.forEach(element => {
            element.addEventListener('mouseenter', () => this.addInputHoverEffect());
            element.addEventListener('mouseleave', () => this.removeInputHoverEffect());
        });

        // Enlaces y botones - cursor grande (después para tener prioridad)
        const interactiveElements = document.querySelectorAll('a, .link, button');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                // Remover clase input-hover si estaba activa
                this.removeInputHoverEffect();
                this.addHoverEffect();
                e.stopPropagation(); // Evitar que se propague al label padre
            });
            element.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect();
                // Si el elemento padre es un label, restaurar el cursor pequeño
                if (element.closest('label')) {
                    this.addInputHoverEffect();
                }
                e.stopPropagation();
            });
        });
    }

    addHoverEffect() {
        if (this.element) {
            this.element.classList.add('enlace');
        }
    }

    removeHoverEffect() {
        if (this.element) {
            this.element.classList.remove('enlace');
        }
    }

    addInputHoverEffect() {
        if (this.element) {
            this.element.classList.add('input-hover');
        }
    }

    removeInputHoverEffect() {
        if (this.element) {
            this.element.classList.remove('input-hover');
        }
    }

    refreshHoverElements() {
        // Actualizar referencia del elemento después de transiciones
        const newElement = document.querySelector('.puntero');
        if (newElement && newElement !== this.element) {
            this.element = newElement;

            // Reconfigurar quickTo con el nuevo elemento
            this.xTo = gsap.quickTo(this.element, "x", {
                duration: 0.2,
                ease: "power3",
                overwrite: true
            });

            this.yTo = gsap.quickTo(this.element, "y", {
                duration: 0.2,
                ease: "power3",
                overwrite: true
            });

            // Configuración inicial del nuevo elemento
            gsap.set(this.element, {
                xPercent: -50,
                yPercent: -50,
                scale: 1,
                visibility: 'visible',
                force3D: true
            });
        }

        // IMPORTANTE: Limpiar estado hover al actualizar elementos
        this.resetCursor();

        // Reconfigurar efectos hover para nuevos elementos
        this.setupHoverEffects();
    }

    resetCursor() {
        // Método para limpiar completamente el estado del cursor
        if (this.element) {
            this.element.classList.remove('enlace', 'input-hover');
        }
    }


    destroy() {
        if (this.element) {
            window.removeEventListener('mousemove', this.handleMouseMove);
            this.xTo = null;
            this.yTo = null;
            this.element = null;
            this.isInitialized = false;
        }
    }
}

function sectionProyecto() {
    if (document.querySelectorAll('.prod-imgs__img.effect').length) {
        var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));

        if ('IntersectionObserver' in window) {
            var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];
                            if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove('lazy');
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function(lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        }

        gsap.utils.toArray('.prod-imgs__img.effect').forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                markers: false,
                onEnter: () => {
                    // if (section.querySelectorAll('video').length) {
                    // 	section.querySelectorAll('video').forEach((video) => {
                    // 		video.play();
                    // 	});
                    // }
                },
                onEnterBack: () => {
                    // if (section.querySelectorAll('video').length) {
                    // 	section.querySelectorAll('video').forEach((video) => {
                    // 		video.play();
                    // 	});
                    // }
                },
                onLeave: () => {
                    // if (section.querySelectorAll('video').length) {
                    // 	section.querySelectorAll('video').forEach((video) => {
                    // 		video.play();
                    // 	});
                    // }
                },
                onLeaveBack: () => {
                    // if (section.querySelectorAll('video').length) {
                    // 	section
                    // 		.querySelectorAll('video')
                    // 		.forEach((video) => {
                    // 			video.pause();
                    // 		});
                    // }
                },
            });
        });
    }
}

function pageTransition() {
    return new Promise((resolve) => {
        const transition = document.querySelector('.page-transition');

        if (transition) {
            // Mostrar el fundido blanco
            transition.classList.add('active');

            // Esperar a que la transición termine y resolver la promesa
            setTimeout(() => {
                resolve();
            }, 700); // Esperar un poco más que la duración de la transición CSS (0.6s)
        } else {
            resolve();
        }
    });
}

function efectoLetrasHome() {
    if (document.querySelectorAll('.animation-intro-2').length || document.querySelectorAll('.animation-intro-3').length) {
        // .content-intro tiene CONTENT para la intro (letra a letra)
        // .clip--rotating está oculto en CSS (display:none) hasta que termine la intro
        const textos2 = new SplitType('.animation-intro-2', {
            types: 'words, chars'
        });
        const textos3 = new SplitType('.animation-intro-3 .clip:not(.clip--rotating)', {
            types: 'words, chars'
        });

        const introHome = document.querySelector('.intro-home');
        const isIntro = introHome && introHome.style.display !== 'none' && window.getComputedStyle(introHome).display !== 'none';
        const delay = isIntro ? 2.5 : 0.1;

        detenerRotacionPalabras();

        const tl = gsap.timeline({
            delay: delay
        });

        // GOOD + CONTENT animan letra a letra (SplitType procesa .content-intro)
        tl.set(['.animation-intro-2 .word', '.animation-intro-3 .word'], {
                opacity: 1
            })
            .to('.animation-intro-2 .char', {
                y: 0,
                stagger: 0.05,
                duration: 0.1,
                ease: 'power2.out'
            })
            .to('.animation-intro-3 .char', {
                y: 0,
                stagger: 0.05,
                duration: 0.1,
                ease: 'power2.out'
            }, "-=0.1")
            .call(() => {
                // Ocultar .content-intro y mostrar .clip--rotating con CONTENT ya visible
                gsap.set('.content-intro', {
                    display: 'none'
                });
                gsap.set('.clip--rotating', {
                    display: 'inline-block'
                });
                gsap.set('.clip--rotating .rotating-word', {
                    y: '100%',
                    opacity: 0,
                    visibility: 'visible'
                });
                gsap.set('.clip--rotating .rotating-word:first-child', {
                    y: 0,
                    opacity: 1
                });
                setTimeout(iniciarRotacionPalabras, 0);
            });
    }
}

function iniciarRotacionPalabras() {
    const container = document.querySelector('.clip--rotating');
    if (!container) return;

    const words = container.querySelectorAll('.rotating-word');
    if (words.length < 2) return;

    let current = 0;
    let count = 0;
    const totalPasos = words.length * 2; // 2 vueltas completas

    const rotarPalabra = () => {
        if (count >= totalPasos) {
            clearInterval(window._wordRotationInterval);
            window._wordRotationInterval = null;
            return;
        }

        const next = (current + 1) % words.length;

        gsap.to(words[current], {
            y: '-100%',
            duration: 0.55,
            ease: 'power2.inOut'
        });

        gsap.fromTo(words[next], {
            y: '100%',
            opacity: 1,
            visibility: 'visible'
        }, {
            y: 0,
            duration: 0.55,
            ease: 'power2.inOut'
        });

        current = next;
        count++;
    };

    window._wordRotationInterval = setInterval(rotarPalabra, 1800);
}

function detenerRotacionPalabras() {
    if (window._wordRotationInterval) {
        clearInterval(window._wordRotationInterval);
        window._wordRotationInterval = null;
    }
}

function scrollElementos() {
    if (document.querySelectorAll('.animation-scroll').length) {
        gsap.registerPlugin(ScrollTrigger);

        // Usar la misma técnica: SplitType con words y chars, pero excluir contenedores con enlaces
        const animationElements = document.querySelectorAll('.animation-scroll');
        const textElements = Array.from(animationElements).filter(el => !el.querySelector('.link'));

        let textos3 = new SplitType(textElements, {
            types: 'words, chars',
            // Configuración para prevenir saltos
            lineClass: 'line',
            wordClass: 'word',
            charClass: 'char',
            preserveWhitespace: true
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.section',
                start: 'top center',
                toggleClass: 'animado',
                toggleActions: 'play none none none',
            },
        });

        // Hacer visibles tanto las palabras como los elementos directos
        tl.set('.animation-scroll', {
                opacity: 1
            }) // Para elementos sin words
            .set('.animation-scroll .word', {
                opacity: 1
            }) // Para palabras
            .to('.animation-scroll .char', {
                y: 0,
                stagger: 0.05,
                delay: 0,
                duration: 0.1,
            })
            // Animar enlaces por separado con el mismo timing que las letras
            .to('.animation-scroll .link.char', {
                y: 0,
                delay: 0.1, // Pequeño delay adicional para que aparezca después del texto
                duration: 0.1, // Misma duración que las letras
                // Sin ease definido - usar el por defecto como las letras
            }, "-=0.05"); // Ajustado para sincronizar mejor
    }
}

function menu() {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('header');

    burger.addEventListener('click', () => {
        header.classList.toggle('active-menu');
    });
}

/* ------------------ VANILLA ANIMACIONES ------------------ */
function marquee() {
    const marquees = document.querySelectorAll('div.marquee');
    let currentScrollSpeedMultiplier = 1; // Velocidad actual (interpolada)
    let scrollDirection = 1; // 1 = hacia abajo, -1 = hacia arriba
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let scrollVelocity = 0;

    // Sistema de ease-out progresivo como Lenis (más suave)
    const lenisEasing = 0.05; // Interpolación más lenta para suavidad
    const maxMultiplier = 15; // Multiplicador reducido para menos brusquedad
    const velocityThreshold = 0.3; // Menos sensible para evitar cambios bruscos

    // Detectar scroll y calcular velocidad y dirección
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const currentTime = performance.now();
        const timeDelta = currentTime - lastScrollTime;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);

        // Detectar dirección del scroll
        if (currentScrollY > lastScrollY) {
            scrollDirection = 1; // Scroll hacia abajo
        } else if (currentScrollY < lastScrollY) {
            scrollDirection = -1; // Scroll hacia arriba
        }

        // Calcular velocidad de scroll (píxeles por ms)
        if (timeDelta > 0) {
            scrollVelocity = scrollDelta / timeDelta;
        }

        lastScrollY = currentScrollY;
        lastScrollTime = currentTime;
    });

    marquees.forEach(function(element) {
        let tick = 1;
        let value = element.dataset.speed;
        element.innerHTML += element.innerHTML;
        element.innerHTML += element.innerHTML;

        const innerTags = element.querySelectorAll('div.inner');
        innerTags.forEach((inner, index) => {
            inner.style.left = inner.offsetWidth * index + 'px';
        });

        const ticker = function() {
            // Calcular objetivo basado en velocidad actual de scroll (más suave)
            const targetMultiplier = scrollVelocity > velocityThreshold ?
                1 + (scrollVelocity * 1.5) : 1; // Reducido a 1.5 para transiciones más suaves

            // Limitar el máximo
            const clampedTarget = Math.min(targetMultiplier, maxMultiplier);

            // Interpolación continua hacia el objetivo calculado
            currentScrollSpeedMultiplier += (clampedTarget - currentScrollSpeedMultiplier) * lenisEasing;

            // Decay natural más progresivo (como Lenis)
            scrollVelocity *= 0.92;

            tick += parseInt(value) * 0.2 * currentScrollSpeedMultiplier * scrollDirection; // Aplicar dirección y velocidad
            //element.innerHTML = tick;
            //element.style.left = tick + "px";
            innerTags.forEach((inner, index) => {
                let width = inner.offsetWidth;
                let normalizedMarqueeX = ((tick % width) + width) % width;
                let pos = width * (index - 1) + normalizedMarqueeX;

                inner.style.left = pos + 'px';
            });
            requestAnimationFrame(ticker);
        };
        ticker();
    });
}

/*-------------- Validaciones Personalizadas ------------------- */

function initCustomValidation() {
    console.log('🔧 Inicializando sistema de validación personalizado');

    // Agregar patrón estricto a todos los campos de email
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        if (!input.hasAttribute('pattern')) {
            input.setAttribute('pattern', '[a-zA-Z0-9._%\\+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}');
        }
    });

    // Crear sistema de notificaciones globales
    initGlobalNotifications();

    // Función para obtener mensaje de error específico
    function getErrorMessage(field) {
        // Para checkboxes de grupo (tags), siempre devolver mensaje específico
        if (field.type === 'checkbox' && field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags') {
            return 'Selecciona al menos una opción';
        }

        if (field.validity.valueMissing) {
            if (field.type === 'email') {
                return 'Por favor, introduce tu email';
            } else if (field.type === 'checkbox') {
                return 'Debes aceptar los términos para continuar';
            } else {
                return `Por favor, completa el campo "${field.placeholder || field.name || 'requerido'}"`;
            }
        } else if (field.validity.typeMismatch || field.validity.patternMismatch) {
            if (field.type === 'email') {
                return 'Introduce un email válido';
            } else {
                return 'El formato no es válido';
            }
        } else if (field.validity.tooShort) {
            return `El texto es demasiado corto (mínimo ${field.minLength} caracteres)`;
        }
        return 'Este campo no es válido';
    }

    // Función para validar grupo de checkboxes (tags)
    function validateCheckboxGroup(container) {
        const checkboxes = container.querySelectorAll('input[type="checkbox"][data-option="tags"]');

        // Verificar si algún checkbox del grupo es requerido
        const hasRequiredCheckbox = Array.from(checkboxes).some(cb => cb.hasAttribute('data-required') && cb.getAttribute('data-required') === 'required');

        // Solo validar si hay al menos un checkbox requerido en el grupo
        if (!hasRequiredCheckbox) {
            // Limpiar validación si no es requerido
            checkboxes.forEach(cb => cb.setCustomValidity(''));
            return null;
        }

        const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);

        if (!isAnyChecked) {
            // Marcar como inválido el primer checkbox del grupo para mostrar el error
            const firstCheckbox = checkboxes[0];
            if (firstCheckbox) {
                firstCheckbox.setCustomValidity('Selecciona al menos una opción');
                return firstCheckbox;
            }
        } else {
            // Limpiar validación personalizada de todos los checkboxes del grupo
            checkboxes.forEach(cb => cb.setCustomValidity(''));
        }
        return null;
    }

    // Función para mostrar mensaje de error en un campo específico
    function showFieldError(field, message) {
        // Buscar wrapper (input-wrapper, check o checkboxs para grupos)
        let wrapper = field.closest('.input-wrapper') || field.closest('.check');

        // Para checkboxes de grupo (tags), usar el .field-wrapper.checkboxs
        if (!wrapper && field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags') {
            wrapper = field.closest('.field-wrapper.checkboxs');
        }

        if (!wrapper) return;

        // Buscar mensaje existente o crear uno nuevo
        let errorElement = wrapper.querySelector('.field-error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error-message';
            // Insertar el mensaje al final del wrapper para que aparezca debajo de todo
            wrapper.appendChild(errorElement);
        }

        errorElement.textContent = message;
        wrapper.classList.add('input-error');
    }

    // Función para limpiar error de un campo específico
    function clearFieldError(field) {
        // Buscar wrapper (input-wrapper, check o checkboxs para grupos)
        let wrapper = field.closest('.input-wrapper') || field.closest('.check');

        // Para checkboxes de grupo (tags), usar el .field-wrapper.checkboxs
        if (!wrapper && field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags') {
            wrapper = field.closest('.field-wrapper.checkboxs');
        }

        if (!wrapper) return;

        wrapper.classList.remove('input-error');
        const errorElement = wrapper.querySelector('.field-error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    // Interceptar envíos de formularios para validación personalizada
    // EXCLUIR formularios que tienen lógica AJAX específica (newsletter y contact)
    const forms = document.querySelectorAll('form:not([data-form="newsletter"]):not([data-form="contact"])');
    console.log(`📝 Encontrados ${forms.length} formularios para validación estándar`);

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Limpiar errores previos
            clearAllFieldErrors(form);

            // Validar grupos de checkboxes antes de la validación HTML5
            const checkboxContainers = form.querySelectorAll('.field-wrapper.checkboxs');
            let hasCheckboxErrors = false;

            checkboxContainers.forEach(container => {
                const invalidCheckbox = validateCheckboxGroup(container);
                if (invalidCheckbox) {
                    hasCheckboxErrors = true;
                    const message = getErrorMessage(invalidCheckbox);
                    showFieldError(invalidCheckbox, message);
                }
            });

            // Verificar validez del formulario HTML5
            const isFormValid = form.checkValidity();

            if (!isFormValid || hasCheckboxErrors) {
                e.preventDefault();

                // Mostrar mensajes de error individuales para cada campo inválido
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    // Solo mostrar error si no es un checkbox de grupo (ya procesado arriba)
                    if (!(field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags')) {
                        const message = getErrorMessage(field);
                        showFieldError(field, message);
                    }
                });

                // Hacer focus en el primer campo inválido
                const firstInvalidField = form.querySelector(':invalid') || form.querySelector('.field-wrapper.checkboxs.input-error input[type="checkbox"]');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            } else {
                // Si el formulario es válido, limpiar cualquier error previo
                clearAllFieldErrors(form);
            }
        });

        // Validación en tiempo real cuando el usuario escribe
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Limpiar errores cuando el usuario empiece a escribir
            input.addEventListener('input', function() {
                if (input.checkValidity()) {
                    clearFieldError(input);
                } else {
                    // Mostrar error en tiempo real solo si ya había un error previo
                    const wrapper = input.closest('.input-wrapper');
                    if (wrapper && wrapper.classList.contains('input-error')) {
                        const message = getErrorMessage(input);
                        showFieldError(input, message);
                    }
                }
            });

            // Validar al salir del campo (blur)
            input.addEventListener('blur', function() {
                if (input.value.trim() !== '' && !input.checkValidity()) {
                    const message = getErrorMessage(input);
                    showFieldError(input, message);
                }
            });
        });

        // Validación en tiempo real para grupos de checkboxes
        const checkboxGroups = form.querySelectorAll('input[type="checkbox"][data-option="tags"]');
        checkboxGroups.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const container = checkbox.closest('.field-wrapper.checkboxs');
                if (container) {
                    // Validar el grupo completo cuando cambie cualquier checkbox
                    const invalidCheckbox = validateCheckboxGroup(container);
                    if (invalidCheckbox) {
                        // Mantener el error si todavía no hay ninguno seleccionado
                        const message = getErrorMessage(invalidCheckbox);
                        showFieldError(invalidCheckbox, message);
                    } else {
                        // Limpiar el error cuando se seleccione al menos uno
                        const firstCheckbox = container.querySelector('input[type="checkbox"][data-option="tags"]');
                        if (firstCheckbox) {
                            clearFieldError(firstCheckbox);
                        }
                    }
                }
            });
        });

        // Deshabilitar validación HTML nativa
        form.setAttribute('novalidate', 'novalidate');
    });

    // Agregar validación personalizada COMPLETA a formularios AJAX 
    const ajaxForms = document.querySelectorAll('form[data-form="newsletter"], form[data-form="contact"]');
    console.log(`📧 Encontrados ${ajaxForms.length} formularios AJAX para validación personalizada`);

    ajaxForms.forEach(form => {
        // INTERCEPTAR ENVÍO para validación personalizada
        form.addEventListener('submit', function(e) {
            // Limpiar errores previos
            clearAllFieldErrors(form);

            // Validar grupos de checkboxes antes de la validación HTML5
            const checkboxContainers = form.querySelectorAll('.field-wrapper.checkboxs');
            let hasCheckboxErrors = false;

            checkboxContainers.forEach(container => {
                const invalidCheckbox = validateCheckboxGroup(container);
                if (invalidCheckbox) {
                    hasCheckboxErrors = true;
                    const message = getErrorMessage(invalidCheckbox);
                    showFieldError(invalidCheckbox, message);
                }
            });

            // Verificar validez del formulario HTML5
            const isFormValid = form.checkValidity();

            if (!isFormValid || hasCheckboxErrors) {
                e.preventDefault();
                e.stopPropagation();

                // Mostrar mensajes de error individuales para cada campo inválido
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    // Solo mostrar error si no es un checkbox de grupo (ya procesado arriba)
                    if (!(field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags')) {
                        const message = getErrorMessage(field);
                        showFieldError(field, message);
                    }
                });

                // Hacer focus en el primer campo inválido
                const firstInvalidField = form.querySelector(':invalid') || form.querySelector('.field-wrapper.checkboxs.input-error input[type="checkbox"]');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }

                return false; // Evitar que se envíe
            }
            // Si el formulario es válido, permitir que el AJAX lo maneje
        });

        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Validación en tiempo real cuando el usuario escribe
            input.addEventListener('input', function() {
                if (input.checkValidity()) {
                    clearFieldError(input);
                } else {
                    // Mostrar error en tiempo real solo si ya había un error previo
                    const wrapper = input.closest('.input-wrapper');
                    if (wrapper && wrapper.classList.contains('input-error')) {
                        const message = getErrorMessage(input);
                        showFieldError(input, message);
                    }
                }
            });

            // Validar al salir del campo (blur)
            input.addEventListener('blur', function() {
                if (input.value.trim() !== '' && !input.checkValidity()) {
                    const message = getErrorMessage(input);
                    showFieldError(input, message);
                }
            });
        });

        // Validación en tiempo real para grupos de checkboxes
        const checkboxGroups = form.querySelectorAll('input[type="checkbox"][data-option="tags"]');
        checkboxGroups.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const container = checkbox.closest('.field-wrapper.checkboxs');
                if (container) {
                    // Validar el grupo completo cuando cambie cualquier checkbox
                    const invalidCheckbox = validateCheckboxGroup(container);
                    if (invalidCheckbox) {
                        // Mantener el error si todavía no hay ninguno seleccionado
                        const message = getErrorMessage(invalidCheckbox);
                        showFieldError(invalidCheckbox, message);
                    } else {
                        // Limpiar el error cuando se seleccione al menos uno
                        const firstCheckbox = container.querySelector('input[type="checkbox"][data-option="tags"]');
                        if (firstCheckbox) {
                            clearFieldError(firstCheckbox);
                        }
                    }
                }
            });
        });

        // Deshabilitar validación HTML nativa
        form.setAttribute('novalidate', 'novalidate');
    });

    // Función para limpiar todos los errores de un formulario
    function clearAllFieldErrors(form) {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            clearFieldError(input);
        });
    }
}

/*-------------- Estados de Inputs ------------------- */

function inputFilledStates() {
    const inputWrappers = document.querySelectorAll('.input-wrapper');

    inputWrappers.forEach(wrapper => {
        const input = wrapper.querySelector('input, textarea');
        if (!input) return;

        // Función para verificar si el input está lleno
        const checkFilled = () => {
            if (input.value.trim() !== '') {
                wrapper.classList.add('input-filled');
            } else {
                wrapper.classList.remove('input-filled');
            }
        };

        // Verificar estado inicial
        checkFilled();

        // Event listeners para cambios
        input.addEventListener('input', checkFilled);
        input.addEventListener('change', checkFilled);
        input.addEventListener('blur', checkFilled);
    });
}

/*-------------- Formularios ------------------- */

function formulariosAjax() {
    const btnNews = document.querySelector('.newsletter-link'),
        formsContainer = document.querySelector('.newsletter'),
        formsExit = document.querySelector('.newsletter__exit'),
        formNews = document.querySelector('.newsletter #frm-contact');

    // Verificar que los elementos existen antes de agregar event listeners
    if (!btnNews || !formsContainer || !formsExit || !formNews) {
        console.warn('Newsletter elements not found:', {
            btnNews: !!btnNews,
            formsContainer: !!formsContainer,
            formsExit: !!formsExit,
            formNews: !!formNews
        });
        return;
    }

    // Cuando hago click en la x de la newsletter
    formsExit.addEventListener('click', () => {
        formsContainer.classList.remove('ver');
    });
    // Cuando hago click en el enlace del footer
    btnNews.addEventListener('click', () => {
        formsContainer.classList.toggle('ver');
    });
    // REMOVIDO: El newsletter ya no se cierra automáticamente con scroll
    // para mejorar la UX del usuario
    // Cuando hago click fuera del elemento elimino la clase ver
    formsContainer.addEventListener('click', function(event) {
        if (!formNews.contains(event.target)) {
            formsContainer.classList.remove('ver');
        }
    });

    $('#frm-contact').on('submit', function(e) {
        e.preventDefault();

        // VALIDAR FORMULARIO ANTES DE ENVIAR AJAX
        const form = this;
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
            console.log('❌ Newsletter form validation failed');
            // Mostrar errores de validación - SIMPLIFICADO
            const invalidFields = form.querySelectorAll(':invalid');
            invalidFields.forEach(field => {
                let message = 'Este campo es requerido';
                if (field.type === 'email') {
                    message = field.validity.valueMissing ? 'Por favor, introduce tu email' : 'Introduce un email válido';
                } else if (field.type === 'checkbox') {
                    message = 'Debes aceptar los términos para continuar';
                }

                // Mostrar error simplificado
                let wrapper = field.closest('.input-wrapper') || field.closest('.check');
                if (wrapper) {
                    wrapper.classList.add('input-error');
                    let errorElement = wrapper.querySelector('.field-error-message');
                    if (!errorElement) {
                        errorElement = document.createElement('div');
                        errorElement.className = 'field-error-message';
                        wrapper.appendChild(errorElement);
                    }
                    errorElement.textContent = message;
                }
            });
            // Hacer focus en el primer campo inválido
            const firstInvalidField = form.querySelector(':invalid');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
            return false; // NO enviar AJAX si hay errores
        }

        console.log('✅ Newsletter form validation passed');
        var formData = $(this).serializeArray();
        console.log('📧 Newsletter form data:', formData);
        formData.push({
            name: 'action',
            value: 'avellana_ajax_frm_contact'
        });
        formData.push({
            name: 'nonce',
            value: ajax_forms.frmNonce
        });
        $.ajax({
                url: ajax_forms.ajaxUrl,
                type: 'post',
                dataType: 'json',
                data: formData,
                beforeSend: function() {
                    $('#frm-contact .newsletter__svgs ').removeClass(['init', 'success']).addClass(['load']);
                    $('#frm-contact .frm-message').removeClass('error').text(''); // Limpiar mensaje previo
                    $('#frm-contact #submit').prop('disabled', true);
                },
            })
            .done(function(res) {
                console.log('📧 Newsletter response:', res);
                if (res.status === 1) {
                    $('#frm-contact .newsletter__svgs ').removeClass(['init', 'load']).addClass(['success']);
                    $('#frm-contact .frm-message').removeClass('error').text(''); // No mostrar mensaje en newsletter success
                    $('#frm-contact')[0].reset();
                } else {
                    $('#frm-contact .newsletter__svgs ').removeClass(['init', 'load']).addClass(['error']);
                    // NO mostrar NINGÚN error en .frm-message del newsletter
                    // Todos los errores del newsletter (validación y wp_mail) se manejan externamente
                    $('#frm-contact .frm-message').removeClass('error').text('');
                    console.log('📧 Newsletter error, but NOT showing in .frm-message:', res.message);
                }
            })
            .always(function() {
                $('#frm-contact #submit').prop('disabled', false);
            });
    });

    $('#formulario-contacto').on('submit', function(e) {
        e.preventDefault();

        // VALIDAR FORMULARIO ANTES DE ENVIAR AJAX
        const form = this;

        // Limpiar errores previos - SIMPLIFICADO para evitar problemas de scope
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Limpiar validación personalizada
            input.setCustomValidity('');
            // Limpiar clases de error
            let wrapper = input.closest('.input-wrapper') || input.closest('.check') || input.closest('.field-wrapper.checkboxs');
            if (wrapper) {
                wrapper.classList.remove('input-error');
                const errorMsg = wrapper.querySelector('.field-error-message');
                if (errorMsg) errorMsg.remove();
            }
        });

        // Validar grupos de checkboxes - SIMPLIFICADO
        const checkboxContainers = form.querySelectorAll('.field-wrapper.checkboxs');
        let hasCheckboxErrors = false;

        checkboxContainers.forEach(container => {
            const checkboxes = container.querySelectorAll('input[type="checkbox"][data-option="tags"]');

            // Verificar si algún checkbox del grupo es requerido
            const hasRequiredCheckbox = Array.from(checkboxes).some(cb => cb.hasAttribute('data-required') && cb.getAttribute('data-required') === 'required');

            // Solo validar si hay al menos un checkbox requerido en el grupo
            if (!hasRequiredCheckbox) {
                return; // Saltar validación si no es requerido
            }

            const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);

            if (!isAnyChecked) {
                hasCheckboxErrors = true;
                const firstCheckbox = checkboxes[0];
                if (firstCheckbox) {
                    firstCheckbox.setCustomValidity('Selecciona al menos una opción');
                    // Mostrar error en el container
                    container.classList.add('input-error');
                    let errorElement = container.querySelector('.field-error-message');
                    if (!errorElement) {
                        errorElement = document.createElement('div');
                        errorElement.className = 'field-error-message';
                        container.appendChild(errorElement);
                    }
                    errorElement.textContent = 'Selecciona al menos una opción';
                }
            }
        });

        // Verificar validez del formulario HTML5
        const isFormValid = form.checkValidity();

        if (!isFormValid || hasCheckboxErrors) {
            console.log('❌ Contact form validation failed');
            // Mostrar mensajes de error individuales para cada campo inválido - SIMPLIFICADO
            const invalidFields = form.querySelectorAll(':invalid');
            invalidFields.forEach(field => {
                // Solo mostrar error si no es un checkbox de grupo (ya procesado arriba)
                if (!(field.hasAttribute('data-option') && field.getAttribute('data-option') === 'tags')) {
                    // Mensaje de error simplificado
                    let message = 'Este campo es requerido';
                    if (field.type === 'email') {
                        message = field.validity.valueMissing ? 'Por favor, introduce tu email' : 'Introduce un email válido';
                    } else if (field.type === 'checkbox') {
                        message = 'Debes aceptar los términos para continuar';
                    }

                    // Mostrar error simplificado
                    let wrapper = field.closest('.input-wrapper') || field.closest('.check');
                    if (wrapper) {
                        wrapper.classList.add('input-error');
                        let errorElement = wrapper.querySelector('.field-error-message');
                        if (!errorElement) {
                            errorElement = document.createElement('div');
                            errorElement.className = 'field-error-message';
                            wrapper.appendChild(errorElement);
                        }
                        errorElement.textContent = message;
                    }
                }
            });

            // Hacer focus en el primer campo inválido
            const firstInvalidField = form.querySelector(':invalid') || form.querySelector('.field-wrapper.checkboxs.input-error input[type="checkbox"]');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }

            return false; // NO enviar AJAX si hay errores
        }

        console.log('✅ Contact form validation passed');
        var formData = $(this).serializeArray();
        console.log(formData);

        // Obtener checkboxes marcados
        var checkboxes = $(this).find('input[type="checkbox"]');
        checkboxes.each(function() {
            var checkbox = $(this);
            if (checkbox.is(':checked')) {
                formData.push({
                    name: checkbox.attr('name'),
                    value: checkbox.val(),
                });
            }
        });

        // Agregar acción y nonce a los datos del formulario
        formData.push({
            name: 'action',
            value: 'avellana_ajax_frm_contact'
        });
        formData.push({
            name: 'nonce',
            value: ajax_forms.frmNonce
        });

        $.ajax({
                url: ajax_forms.ajaxUrl,
                type: 'post',
                dataType: 'json',
                data: formData,
                beforeSend: function() {
                    // Solo manejar el formulario de contacto, NO tocar newsletter
                    $('#formulario-contacto button[type="submit"]').prop('disabled', true).text('Enviando...');
                },
            })
            .done(function(res) {
                console.log('📝 Contact form response:', res);
                // NO tocar elementos del newsletter - Las notificaciones globales se manejan automáticamente
                if (res.status === 1) {
                    $('#formulario-contacto')[0].reset();
                    // El éxito se muestra en notificación global automáticamente
                } else {
                    // Los errores se muestran en notificación global automáticamente
                    // NO mostrar en .frm-message del newsletter
                }
            })
            .always(function() {
                $('#formulario-contacto button[type="submit"]').prop('disabled', false).text('Enviar →');
            });
    });
}

/* ------------------ BARBAJS ------------------ */
function barbaJsInit() {
    barba.init({
        sync: true,
        debug: false,
        transitions: [{
            // Primera carga de la página
            once(data) {
                // Verificar si es primera visita
                const hasSeenIntro = sessionStorage.getItem('hasSeenIntro') === 'true';

                if (!hasSeenIntro) {
                    // Primera visita: mostrar intro
                    sessionStorage.setItem('hasSeenIntro', 'true');
                    initWebAnimation();
                    initSmoothScroll();
                    marquee();
                } else {
                    // Ya visitó: iniciar todo normal
                    initSmoothScroll();
                    marquee();
                    contentAnimation();
                }

                // Inicializar imágenes de magazine (para primera carga)
                if (typeof initMagazineImages === 'function') {
                    initMagazineImages();
                }

                // Inicializar scroll animations archive (para primera carga con Barba)
                initMagazineArchiveScroll();

                // Reproducir videos
                if (document.querySelectorAll('video').length) {
                    document.querySelectorAll('video').forEach((video) => {
                        video.play();
                    });
                }
            },

            // Antes de salir de la página - animar cierre visual del menú
            beforeLeave(data) {
                const header = document.querySelector('header');
                const menuOverlay = document.querySelector('.menu-mobile');
                const menuUl = document.querySelector('.menu-mobile ul');

                if (header && header.classList.contains('active-menu')) {
                    // X → hamburguesa (quitar active-menu del header)
                    header.classList.remove('active-menu');

                    // Mantener overlay visible durante transición
                    if (menuOverlay) {
                        menuOverlay.classList.add('transitioning');
                    }

                    // Letras → opacity 0 (transición suave)
                    if (menuUl) {
                        menuUl.style.opacity = '0';
                    }

                    // NO esperar - las transiciones de menú y página ocurren en paralelo
                }
            },

            // Salir de la página
            async leave(data) {
                const done = this.async();

                // Resetear cursor antes de la transición
                if (customCursor) {
                    customCursor.resetCursor();
                }

                // Mostrar transición
                await pageTransition();
                await delay(200);
                done();
            },

            // Antes de entrar a la nueva página
            beforeEnter(data) {
                // Resetear cursor al cambiar de página
                if (customCursor) {
                    customCursor.resetCursor();
                }

                // Scroll to top usando Lenis si está disponible
                if (window.lenis) {
                    window.lenis.scrollTo(0, {
                        immediate: true
                    });
                } else {
                    window.scrollTo(0, 0);
                }
            },

            // Entrar a la nueva página
            enter(data) {
                // Limpiar estado de transición del menú
                const menuOverlay = document.querySelector('.menu-mobile');
                const menuUl = document.querySelector('.menu-mobile ul');

                if (menuOverlay) {
                    menuOverlay.classList.remove('transitioning');
                }
                if (menuUl) {
                    menuUl.style.opacity = ''; // Resetear opacity inline
                }

                // Ocultar transición
                const transition = document.querySelector('.page-transition');
                if (transition) {
                    transition.classList.remove('active');
                }

                // Pequeño delay para asegurar que el DOM esté listo
                setTimeout(() => {
                    // Inicializar scripts
                    marquee();
                    efectoLetrasHome(); // Solo para transiciones entre páginas
                    contentAnimation();

                    // Inicializar imágenes de magazine (para navegación con Barba.js)
                    if (typeof initMagazineImages === 'function') {
                        initMagazineImages();
                    }

                    // Reproducir videos
                    if (document.querySelectorAll('video').length) {
                        document.querySelectorAll('video').forEach((video) => {
                            video.play();
                        });
                    }
                }, 50); // Delay mínimo de 50ms
            }
        }]
    });

    // Hooks globales para manejo del scroll
    barba.hooks.enter(() => {
        // Scroll al top en cada navegación
        if (window.lenis) {
            window.lenis.scrollTo(0, {
                immediate: true
            });
        }

        // El cursor ya no necesita reinicialización porque está fuera del contenedor de Barba.js
    });
}

function initWebAnimation() {
    const introHome = document.querySelector('.intro-home');
    if (introHome) {
        // La intro ya está visible por defecto en CSS, solo agregar animación

        // Después de un momento, agregar la clase load para la animación
        setTimeout(() => {
            introHome.classList.add('load');
            efectoLetrasHome();

            // Esperar a que termine la transición CSS (opacity 1s + delay 2s = 3s)
            setTimeout(() => {
                introHome.style.display = 'none';
                contentAnimation();
            }, 3500); // 3.5 segundos para que termine toda la transición
        }, 100);
    }

    // Limpiar sessionStorage solo en recarga de página
    window.addEventListener('beforeunload', function() {
        sessionStorage.removeItem('hasSeenIntro');
    });
}

/**
 * Sistema de scroll suave con Lenis - Implementación optimizada
 */
function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
        // Solo inicializar si no existe ya
        if (window.lenis) {
            window.lenis.destroy();
        }

        // Inicializar Lenis con configuración optimizada
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true
        });

        // RAF loop optimizado
        function raf(time) {
            if (lenis) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
        }
        requestAnimationFrame(raf);

        // Hacer Lenis disponible globalmente
        window.lenis = lenis;

        console.log('✅ Lenis smooth scroll initialized');
    } else {
        console.warn('⚠️ Lenis library not found');
    }
}

/*-------------- Sistema de Notificaciones Globales ------------------- */

function initGlobalNotifications() {
    // Crear el elemento de notificación global si no existe
    let globalNotification = document.querySelector('.global-notification');
    if (!globalNotification) {
        globalNotification = document.createElement('div');
        globalNotification.className = 'global-notification';
        document.body.appendChild(globalNotification);
    }

    // Función global para mostrar notificaciones
    window.showGlobalNotification = function(message, type = 'error', duration = 6000) {
        console.log(`🔔 showGlobalNotification called: "${message}", type: ${type}`);
        globalNotification.textContent = message;
        globalNotification.className = `global-notification ${type}`;

        // DEBUG: Verificar posición en pantalla
        console.log('📍 Element position before show:', globalNotification.getBoundingClientRect());
        console.log('📍 Element computed styles before show:', {
            position: window.getComputedStyle(globalNotification).position,
            top: window.getComputedStyle(globalNotification).top,
            right: window.getComputedStyle(globalNotification).right,
            zIndex: window.getComputedStyle(globalNotification).zIndex,
            opacity: window.getComputedStyle(globalNotification).opacity,
            visibility: window.getComputedStyle(globalNotification).visibility,
            display: window.getComputedStyle(globalNotification).display
        });

        // FORZAR la clase show con setTimeout para evitar problemas de timing
        setTimeout(() => {
            globalNotification.classList.add('show');
            console.log('📍 Classes after forced show:', globalNotification.className);
            console.log('📍 Element position after show:', globalNotification.getBoundingClientRect());
            console.log('📍 Element computed styles after show:', {
                opacity: window.getComputedStyle(globalNotification).opacity,
                visibility: window.getComputedStyle(globalNotification).visibility,
                transform: window.getComputedStyle(globalNotification).transform
            });
        }, 10);

        // Auto-ocultar después del tiempo especificado
        setTimeout(() => {
            globalNotification.classList.remove('show');
            console.log('⏰ Auto-hiding notification after', duration, 'ms');
        }, duration);
    };

    // TEST MANUAL: Agregar función de test global
    window.testNotification = function() {
        console.log('🧪 Testing notification manually...');
        showGlobalNotification('Test notification - should be visible!', 'error', 10000);
    };

    // Función global para ocultar notificaciones
    window.hideGlobalNotification = function() {
        globalNotification.classList.remove('show');
    };

    // Interceptar errores AJAX de WordPress (wp_mail, etc.)
    $(document).ajaxComplete(function(event, xhr, settings) {
        // Solo procesar respuestas JSON de nuestros formularios
        if (settings.data && settings.data.indexOf('avellana_ajax_frm_contact') !== -1) {
            try {
                const response = JSON.parse(xhr.responseText);

                // Identificar qué formulario envió la petición
                let formType = 'unknown';
                if (settings.data.indexOf('tipo=newsletter') !== -1) {
                    formType = 'newsletter';
                } else if (settings.data.indexOf('tipo=contacto') !== -1) {
                    formType = 'contact';
                }

                console.log(`📧 AJAX respuesta de formulario: ${formType}`, response);

                if (response.status === 0 && response.message) {
                    // Error del servidor (wp_mail, etc.) - Solo mostrar notificación global para contacto
                    if (formType === 'contact') {
                        showGlobalNotification(response.message, 'error');
                        console.log('🔔 Mostrando notificación global para error en contacto');
                    } else {
                        // Ahora SIEMPRE mostramos notificación global
                        showGlobalNotification(response.message, 'error');
                    }
                } else if (response.status === 1 && response.message) {
                    // Éxito - Solo mostrar notificación global para contacto
                    if (formType === 'contact') {
                        showGlobalNotification(response.message, 'success', 4000);
                        console.log('🔔 Mostrando notificación global para éxito en contacto');
                    } else {
                        // Ahora SIEMPRE mostramos notificación global  
                        showGlobalNotification(response.message, 'success', 4000);
                    }
                }
            } catch (e) {
                // Si no es JSON válido, ignorar
                console.warn('Error parsing AJAX response:', e);
            }
        }
    });

    // Inicializar Swiper para Magazine
    const magazineSwiper = document.querySelector('.magazine-swiper .swiper-wrapper');

    if (magazineSwiper) {
        const swiper = new Swiper('.magazine-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.2,
                    spaceBetween: 30,
                }
            }
        });
    }
}

/*-------------- Magazine Archive Scroll Animations ------------------- */

function initMagazineArchiveScroll() {
    // Solo ejecutar en desktop
    const isDesktop = window.matchMedia('(min-width: 1200px)').matches;
    if (!isDesktop) return;

    // Buscar todas las imágenes del archive
    const archiveImages = document.querySelectorAll('.magazine-desktop.magazine-archive .magazine-image[data-image-id]');

    if (archiveImages.length === 0) {
        console.log('📰 No magazine archive images found');
        return;
    }

    console.log(`📰 Initializing magazine archive scroll for ${archiveImages.length} images`);

    // Configurar IntersectionObserver
    const observerOptions = {
        root: null, // viewport
        rootMargin: '-20% 0px -20% 0px', // Activar cuando esté en el centro vertical
        threshold: 0.5 // 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const imageId = entry.target.getAttribute('data-image-id');
            const correspondingText = document.querySelector(`.magazine-text-sticky[data-text-id="${imageId}"]`);

            if (!correspondingText) {
                console.warn(`⚠️ No text found for image ID: ${imageId}`);
                return;
            }

            if (entry.isIntersecting) {
                // Imagen entra en viewport → activar su texto
                // Primero desactivar todos los textos
                document.querySelectorAll('.magazine-text-sticky').forEach(text => {
                    text.classList.remove('active');
                });

                // Luego activar el texto correspondiente
                correspondingText.classList.add('active');
                console.log(`✅ Activating text for image ${imageId}`);
            }
        });
    }, observerOptions);

    // Observar todas las imágenes
    archiveImages.forEach(image => {
        observer.observe(image);
    });

    // Activar el primer texto por defecto al cargar
    const firstText = document.querySelector('.magazine-text-sticky[data-text-id="0"]');
    if (firstText) {
        firstText.classList.add('active');
        console.log('✅ First text activated by default');
    }
}
/**
 * Solución para border-radius con object-fit: contain
 * Crea un elemento overlay que se adapta exactamente al tamaño de la imagen
 */

// Función global para inicializar imágenes de magazine
function initMagazineImages() {
    // Solo ejecutar si estamos en una página con elementos magazine
    if (!document.querySelector('.magazine-images, .magazine-swiper')) {
        return;
    }

    console.log('Initializing magazine images...');

    function processImages() {
        // Seleccionar todas las imágenes dentro de .magazine-images y .magazine-swiper (más específico)
        const magazineImages = document.querySelectorAll('.magazine-images .magazine-image img, .magazine-images .magazine-image video, .magazine-swiper .swiper-slide img, .magazine-swiper .swiper-slide video');
        console.log('Found magazine images:', magazineImages.length);

        magazineImages.forEach(function(img) {
            // Encontrar el contenedor (.magazine-image o .swiper-slide)
            const container = img.closest('.magazine-image') || img.closest('.swiper-slide');

            if (container && !container.querySelector('[data-magazine-overlay]')) {
                createBorderOverlay(container, img);
            }
        });
    }

    function createBorderOverlay(magazineContainer, img) {
        // Crear el elemento overlay
        const overlay = document.createElement('div');
        overlay.className = 'border-overlay';
        overlay.setAttribute('data-magazine-overlay', 'true');

        // Función para calcular las dimensiones reales de la imagen con object-fit: contain
        function calculateImageDimensions() {
            // Usar las dimensiones del contenedor padre, no de la imagen
            const containerWidth = magazineContainer.offsetWidth;
            const containerHeight = magazineContainer.offsetHeight;
            const imageAspectRatio = img.naturalWidth / img.naturalHeight;
            const containerAspectRatio = containerWidth / containerHeight;

            let renderedWidth, renderedHeight, offsetX, offsetY;

            if (imageAspectRatio > containerAspectRatio) {
                // La imagen es más ancha proporcionalmente, se ajusta al ancho
                renderedWidth = containerWidth;
                renderedHeight = containerWidth / imageAspectRatio;
                offsetX = 0;
                offsetY = (containerHeight - renderedHeight) / 2;
            } else {
                // La imagen es más alta proporcionalmente, se ajusta a la altura
                renderedWidth = containerHeight * imageAspectRatio;
                renderedHeight = containerHeight;
                offsetX = (containerWidth - renderedWidth) / 2;
                offsetY = 0;
            }

            return {
                renderedWidth,
                renderedHeight,
                offsetX,
                offsetY
            };
        }

        // Función para actualizar el overlay basado en el tamaño real de la imagen
        function updateOverlay() {
            // Verificar si la imagen tiene dimensiones naturales cargadas
            if (!img.naturalWidth || !img.naturalHeight) {
                return;
            }

            // Calcular las dimensiones reales de la imagen con object-fit: contain
            const {
                renderedWidth,
                renderedHeight,
                offsetX,
                offsetY
            } = calculateImageDimensions();

            // Ocultar la imagen original
            img.style.opacity = '0';

            // Crear un elemento que muestre solo la parte recortada de la imagen
            overlay.style.cssText = `
                position: absolute;
                left: ${offsetX}px;
                top: ${offsetY}px;
                width: ${renderedWidth}px;
                height: ${renderedHeight}px;
                background-image: url('${img.src}');
                background-size: ${renderedWidth}px ${renderedHeight}px;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 0.5rem;
                overflow: hidden;
                pointer-events: none;
                z-index: 10;
            `;

            console.log('Overlay updated:', {
                container: {
                    width: img.offsetWidth,
                    height: img.offsetHeight
                },
                image: {
                    width: img.naturalWidth,
                    height: img.naturalHeight
                },
                rendered: {
                    width: renderedWidth,
                    height: renderedHeight
                },
                position: {
                    x: offsetX,
                    y: offsetY
                }
            });
        }

        // Añadir el overlay al contenedor
        magazineContainer.appendChild(overlay);

        // Actualizar inicialmente
        if (img.complete || img.tagName === 'VIDEO') {
            updateOverlay();
        } else {
            img.addEventListener('load', updateOverlay);
        }

        // Actualizar en resize para mantener la sincronización
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateOverlay, 100);
        });

        // También observar cambios en el tamaño de la imagen
        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(function(entries) {
                for (let entry of entries) {
                    if (entry.target === img) {
                        updateOverlay();
                        break;
                    }
                }
            });
            resizeObserver.observe(img);
        }

        console.log('Border overlay created for:', magazineContainer);
    }

    // Procesar imágenes existentes
    processImages();

    // Reinicializar si se cargan nuevas imágenes dinámicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                processImages();
            }
        });
    });

    // Observar cambios en el contenedor de imágenes magazine
    const magazineContainer = document.querySelector('.magazine-images');
    if (magazineContainer) {
        observer.observe(magazineContainer, {
            childList: true,
            subtree: true
        });
    }

    // También observar cambios en el swiper
    const swiperContainer = document.querySelector('.magazine-swiper');
    if (swiperContainer) {
        observer.observe(swiperContainer, {
            childList: true,
            subtree: true
        });
    }
}

// Ejecutar en la carga inicial del DOM
document.addEventListener('DOMContentLoaded', function() {
    initMagazineImages();
});