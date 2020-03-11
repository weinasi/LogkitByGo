/** layui-v2.5.4 MIT License By https://www.layui.com */
if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (target, firstSource) {
            "use strict";
            if (target === undefined || target === null)
                throw new TypeError("Cannot convert first argument to object");
            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) continue;
                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
                }
            }
            return to;
        }
    });
}
!function (e) {
    "use strict";
    var okmodules = {
        "okTab": "okmodules/okTab",
        "countUp": "okmodules/countUp",
        "okUtils": "okmodules/okUtils",
        "okGVerify": "okmodules/okGVerify",
        "qrcode": "okmodules/qrcode",
        "jQqrcode": "okmodules/jQqrcode",
        "okAddlink": "okmodules/okAddlink",
        "okLayer": "okmodules/okLayer",
        "okMock": "okmodules/okMock",
        "jQContextMenu": "okmodules/jQContextMenu",
        "okCookie": "okmodules/okCookie",
        "okMd5": "okmodules/okMd5",
        "okToastr": "okmodules/okToastr",
        "okBarcode": "okmodules/okBarcode",
        "okNprogress": "okmodules/okNprogress",
        "okSweetAlert2": "okmodules/okSweetAlert2",
        "siamConfig": "okmodules/siamConfig",
    };
    var modulePath = Object.assign({
        layer: "modules/layer",
        laydate: "modules/laydate",
        laypage: "modules/laypage",
        laytpl: "modules/laytpl",
        layim: "modules/layim",
        layedit: "modules/layedit",
        form: "modules/form",
        upload: "modules/upload",
        transfer: "modules/transfer",
        tree: "modules/tree",
        table: "modules/table",
        element: "modules/element",
        rate: "modules/rate",
        colorpicker: "modules/colorpicker",
        slider: "modules/slider",
        carousel: "modules/carousel",
        flow: "modules/flow",
        util: "modules/util",
        code: "modules/code",
        jquery: "modules/jquery",
        mobile: "modules/mobile",
        "layui.all": "../layui.all"
    }, okmodules);

    var t = document, o = {modules: {}, status: {}, timeout: 10, event: {}}, n = function () {
        this.v = "2.5.4"
    }, r = function () {
        var e = t.currentScript ? t.currentScript.src : function () {
            for (var e, o = t.scripts, n = o.length - 1, r = n; r > 0; r--) if ("interactive" === o[r].readyState) {
                e = o[r].src;
                break
            }
            return e || o[n].src
        }();
        return e.substring(0, e.lastIndexOf("/") + 1)
    }(), i = function (t) {
        e.console && console.error && console.error("Layui hint: " + t)
    }, a = "undefined" != typeof opera && "[object Opera]" === opera.toString(), u = modulePath;
    n.prototype.cache = o, n.prototype.define = function (e, t) {
        var n = this, r = "function" == typeof e, i = function () {
            var e = function (e, t) {
                layui[e] = t, o.status[e] = !0
            };
            return "function" == typeof t && t(function (n, r) {
                e(n, r), o.callback[n] = function () {
                    t(e)
                }
            }), this
        };
        return r && (t = e, e = []), !layui["layui.all"] && layui["layui.mobile"] ? i.call(n) : (n.use(e, i), n)
    }, n.prototype.use = function (e, n, l) {
        function s(e, t) {
            var n = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
            ("load" === e.type || n.test((e.currentTarget || e.srcElement).readyState)) && (o.modules[f] = t, d.removeChild(v), function r() {
                return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void (o.status[f] ? c() : setTimeout(r, 4))
            }())
        }

        function c() {
            l.push(layui[f]), e.length > 1 ? y.use(e.slice(1), n, l) : "function" == typeof n && n.apply(layui, l)
        }

        var y = this, p = o.dir = o.dir ? o.dir : r, d = t.getElementsByTagName("head")[0];
        e = "string" == typeof e ? [e] : e, window.jQuery && jQuery.fn.on && (y.each(e, function (t, o) {
            "jquery" === o && e.splice(t, 1)
        }), layui.jquery = layui.$ = jQuery);
        var f = e[0], m = 0;
        if (l = l || [], o.host = o.host || (p.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === e.length || layui["layui.all"] && u[f] || !layui["layui.all"] && layui["layui.mobile"] && u[f]) return c(), y;
        if (o.modules[f]) !function g() {
            return ++m > 1e3 * o.timeout / 4 ? i(f + " is not a valid module") : void ("string" == typeof o.modules[f] && o.status[f] ? c() : setTimeout(g, 4))
        }(); else {
            var v = t.createElement("script"),
                h = (u[f] ? p + "lay/" : /^\{\/\}/.test(y.modules[f]) ? "" : o.base || "") + (y.modules[f] || f) + ".js";
            h = h.replace(/^\{\/\}/, ""), v.async = !0, v.charset = "utf-8", v.src = h + function () {
                var e = o.version === !0 ? o.v || (new Date).getTime() : o.version || "";
                return e ? "?v=" + e : ""
            }(), d.appendChild(v), !v.attachEvent || v.attachEvent.toString && v.attachEvent.toString().indexOf("[native code") < 0 || a ? v.addEventListener("load", function (e) {
                s(e, h)
            }, !1) : v.attachEvent("onreadystatechange", function (e) {
                s(e, h)
            }), o.modules[f] = h
        }
        return y
    }, n.prototype.getStyle = function (t, o) {
        var n = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
        return n[n.getPropertyValue ? "getPropertyValue" : "getAttribute"](o)
    }, n.prototype.link = function (e, n, r) {
        var a = this, u = t.createElement("link"), l = t.getElementsByTagName("head")[0];
        "string" == typeof n && (r = n);
        var s = (r || e).replace(/\.|\//g, ""), c = u.id = "layuicss-" + s, y = 0;
        return u.rel = "stylesheet", u.href = e + (o.debug ? "?v=" + (new Date).getTime() : ""), u.media = "all", t.getElementById(c) || l.appendChild(u), "function" != typeof n ? a : (function p() {
            return ++y > 1e3 * o.timeout / 100 ? i(e + " timeout") : void (1989 === parseInt(a.getStyle(t.getElementById(c), "width")) ? function () {
                n()
            }() : setTimeout(p, 100))
        }(), a)
    }, o.callback = {}, n.prototype.factory = function (e) {
        if (layui[e]) return "function" == typeof o.callback[e] ? o.callback[e] : null
    }, n.prototype.addcss = function (e, t, n) {
        return layui.link(o.dir + "css/" + e, t, n)
    }, n.prototype.img = function (e, t, o) {
        var n = new Image;
        return n.src = e, n.complete ? t(n) : (n.onload = function () {
            n.onload = null, "function" == typeof t && t(n)
        }, void (n.onerror = function (e) {
            n.onerror = null, "function" == typeof o && o(e)
        }))
    }, n.prototype.config = function (e) {
        e = e || {};
        for (var t in e) o[t] = e[t];
        return this
    }, n.prototype.modules = function () {
        var e = {};
        for (var t in u) e[t] = u[t];
        return e
    }(), n.prototype.extend = function (e) {
        var t = this;
        e = e || {};
        for (var o in e) t[o] || t.modules[o] ? i("模块名 " + o + " 已被占用") : t.modules[o] = e[o];
        return t
    }, n.prototype.router = function (e) {
        var t = this, e = e || location.hash, o = {path: [], search: {}, hash: (e.match(/[^#](#.*$)/) || [])[1] || ""};
        return /^#\//.test(e) ? (e = e.replace(/^#\//, ""), o.href = "/" + e, e = e.replace(/([^#])(#.*$)/, "$1").split("/") || [], t.each(e, function (e, t) {
            /^\w+=/.test(t) ? function () {
                t = t.split("="), o.search[t[0]] = t[1]
            }() : o.path.push(t)
        }), o) : o
    }, n.prototype.data = function (t, o, n) {
        if (t = t || "layui", n = n || localStorage, e.JSON && e.JSON.parse) {
            if (null === o) return delete n[t];
            o = "object" == typeof o ? o : {key: o};
            try {
                var r = JSON.parse(n[t])
            } catch (i) {
                var r = {}
            }
            return "value" in o && (r[o.key] = o.value), o.remove && delete r[o.key], n[t] = JSON.stringify(r), o.key ? r[o.key] : r
        }
    }, n.prototype.sessionData = function (e, t) {
        return this.data(e, t, sessionStorage)
    }, n.prototype.device = function (t) {
        var o = navigator.userAgent.toLowerCase(), n = function (e) {
            var t = new RegExp(e + "/([^\\s\\_\\-]+)");
            return e = (o.match(t) || [])[1], e || !1
        }, r = {
            os: function () {
                return /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ? "ios" : /mac/.test(o) ? "mac" : void 0
            }(), ie: function () {
                return !!(e.ActiveXObject || "ActiveXObject" in e) && ((o.match(/msie\s(\d+)/) || [])[1] || "11")
            }(), weixin: n("micromessenger")
        };
        return t && !r[t] && (r[t] = n(t)), r.android = /android/.test(o), r.ios = "ios" === r.os, r
    }, n.prototype.hint = function () {
        return {error: i}
    }, n.prototype.each = function (e, t) {
        var o, n = this;
        if ("function" != typeof t) return n;
        if (e = e || [], e.constructor === Object) {
            for (o in e) if (t.call(e[o], o, e[o])) break
        } else for (o = 0; o < e.length && !t.call(e[o], o, e[o]); o++) ;
        return n
    }, n.prototype.sort = function (e, t, o) {
        var n = JSON.parse(JSON.stringify(e || []));
        return t ? (n.sort(function (e, o) {
            var n = /^-?\d+$/, r = e[t], i = o[t];
            return n.test(r) && (r = parseFloat(r)), n.test(i) && (i = parseFloat(i)), r && !i ? 1 : !r && i ? -1 : r > i ? 1 : r < i ? -1 : 0
        }), o && n.reverse(), n) : n
    }, n.prototype.stope = function (t) {
        t = t || e.event;
        try {
            t.stopPropagation()
        } catch (o) {
            t.cancelBubble = !0
        }
    }, n.prototype.onevent = function (e, t, o) {
        return "string" != typeof e || "function" != typeof o ? this : n.event(e, t, null, o)
    }, n.prototype.event = n.event = function (e, t, n, r) {
        var i = this, a = null, u = t.match(/\((.*)\)$/) || [], l = (e + "." + t).replace(u[0], ""), s = u[1] || "",
            c = function (e, t) {
                var o = t && t.call(i, n);
                o === !1 && null === a && (a = !1)
            };
        return r ? (o.event[l] = o.event[l] || {}, o.event[l][s] = [r], this) : (layui.each(o.event[l], function (e, t) {
            return "{*}" === s ? void layui.each(t, c) : ("" === e && layui.each(t, c), void (s && e === s && layui.each(t, c)))
        }), a)
    }, e.layui = new n
}(window);
