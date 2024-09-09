(function() {
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof l && l];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);

    function ea(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ea("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    });
    ea("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });

    function fa(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ha(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    ea("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ha(this, function(b) {
                return b
            })
        }
    });
    ea("globalThis", function(a) {
        return a || da
    });
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var ia = {};

    function ja() {
        if (ia !== ia) throw Error("Bad secret");
    };
    var ka = globalThis.trustedTypes,
        la;

    function ma() {
        var a = null;
        if (!ka) return a;
        try {
            var b = function(c) {
                return c
            };
            a = ka.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {
            throw c;
        }
        return a
    }

    function na() {
        la === void 0 && (la = ma());
        return la
    };

    function oa(a) {
        ja();
        this.g = a
    }
    oa.prototype.toString = function() {
        return this.g + ""
    };

    function pa(a) {
        ja();
        this.g = a
    }
    pa.prototype.toString = function() {
        return this.g
    };
    new pa("about:blank");
    new pa("about:invalid#zClosurez");
    var qa = [];

    function sa(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    }
    qa.indexOf(sa) === -1 && qa.push(sa);

    function ta(a) {
        ja();
        this.g = a
    }
    ta.prototype.toString = function() {
        return this.g + ""
    };

    function ua(a, b) {
        if (a.nodeType === 1) {
            var c = a.tagName;
            if (c === "SCRIPT" || c === "STYLE") throw Error(c === "SCRIPT" ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.");
        }
        if (b instanceof ta) b = b.g;
        else throw Error("Unexpected type when unwrapping SafeHtml");
        a.innerHTML = b
    };

    function va(a, b) {
        if (b instanceof oa) b = b.g;
        else throw Error("Unexpected type when unwrapping TrustedResourceUrl");
        a.src = b;
        var c, d;
        (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function wa(a) {
        a = xa(a);
        if (typeof a !== "string") throw Error("Expected a string");
        var b = na();
        return new ta(b ? b.createHTML(a) : a)
    }

    function ya(a) {
        a = xa(a);
        if (typeof a !== "string") throw Error("Expected a string");
        var b = na();
        return new oa(b ? b.createScriptURL(a) : a)
    }

    function xa(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };

    function n(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = d.slice();
            e.push.apply(e, arguments);
            return a.apply(b, e)
        }
    }

    function za(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments, 1);
            try {
                return a.apply(null, c)
            } catch (d) {
                return d
            }
        }
    }

    function p(a, b) {
        if (document.createEvent) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, !0, !0, b);
            return document.dispatchEvent(c)
        }
        return !0
    }
    var q = window.performance && window.performance.timing && window.performance.now ? function() {
        return window.performance.timing.navigationStart + window.performance.now()
    } : function() {
        return (new Date).getTime()
    };

    function Aa() {};

    function r(a, b) {
        if (a.forEach) a.forEach(b, void 0);
        else
            for (var c = 0, d = a.length; c < d; c++) c in a && b.call(void 0, a[c], c, a)
    }

    function Ba(a, b) {
        if (a.every) return a.every(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (c in a && !b.call(void 0, a[c], c, a)) return !1;
        return !0
    }

    function Ca(a, b) {
        if (a.some) return a.some(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (c in a && b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Da(a, b) {
        if (a.filter) return a.filter(b, void 0);
        var c = [];
        r(a, function(d, e, f) {
            b.call(void 0, d, e, f) && c.push(d)
        });
        return c
    }

    function Ea(a, b) {
        if (a.map) return a.map(b, void 0);
        var c = [];
        c.length = a.length;
        r(a, function(d, e, f) {
            c[e] = b.call(void 0, d, e, f)
        });
        return c
    }

    function v(a) {
        return Object.prototype.toString.call(a) == "[object Array]" ? a : [a]
    };

    function w(a, b) {
        return x[a] = b
    }
    var x = window._spf_state || {};
    window._spf_state = x;

    function y(a, b) {
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    }

    function Fa(a) {
        return Object.prototype.toString.call(a) == "[object String]"
    }
    var Ga = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    };

    function z(a, b) {
        a = a.split(b);
        var c = a.length == 1;
        return [a[0], c ? "" : b, c ? "" : a.slice(1).join(b)]
    }

    function Ha() {
        return "spfName".replace(/([A-Z])/g, "-$1").toLowerCase()
    };

    function Ia(a) {
        a.data && Fa(a.data) && a.data.lastIndexOf("spf:", 0) == 0 && Ja(a.data.substring(4))
    }

    function Ja(a) {
        var b = Ka[a];
        b && (delete Ka[a], b())
    }

    function La(a) {
        window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a)
    }

    function Ma(a) {
        window.removeEventListener ? window.removeEventListener("message", a, !1) : window.detachEvent && window.detachEvent("onmessage", a)
    }
    var Na = function() {
            function a() {
                b = !1
            }
            if (!window.postMessage) return !1;
            var b = !0;
            La(a);
            window.postMessage("", "*");
            Ma(a);
            return b
        }(),
        Ka = {};
    "async-defers" in x || w("async-defers", Ka);
    Ka = x["async-defers"];
    Na && ("async-listener" in x && Ma(x["async-listener"]), La(Ia), w("async-listener", Ia));
    var Oa = {
            "animation-class": "spf-animate",
            "animation-duration": 425,
            "cache-lifetime": 6E5,
            "cache-max": 50,
            "cache-unified": !1,
            "link-class": "spf-link",
            "nolink-class": "spf-nolink",
            "navigate-limit": 20,
            "navigate-lifetime": 864E5,
            "reload-identifier": null,
            "request-timeout": 0,
            "url-identifier": "?spf=__type__"
        },
        A = {};
    "config" in x || w("config", A);
    A = x.config;

    function Pa(a) {
        var b = D();
        a in b && delete b[a]
    }

    function Qa() {
        var a = D();
        for (b in a) Ra(a[b]) || delete a[b];
        a = D();
        var b = parseInt(A["cache-max"], 10);
        b = isNaN(b) ? Infinity : b;
        b = Object.keys(a).length - b;
        if (!(b <= 0))
            for (var c = 0; c < b; c++) {
                var d = Infinity,
                    e;
                for (e in a)
                    if (a[e].count < d) {
                        var f = e;
                        d = a[e].count
                    }
                delete a[f]
            }
    }

    function Ra(a) {
        if (!(a && "data" in a)) return !1;
        var b = a.life;
        b = isNaN(b) ? Infinity : b;
        a = a.time;
        return q() - a < b
    }

    function Sa(a) {
        var b = parseInt(x["cache-counter"], 10) || 0;
        b++;
        w("cache-counter", b);
        a.count = b
    }

    function D(a) {
        return !a && "cache-storage" in x ? x["cache-storage"] : w("cache-storage", a || {})
    };

    function Ta(a) {
        return a.classList ? a.classList : a.className && a.className.match(/\S+/g) || []
    }

    function Ua(a, b) {
        if (b) {
            if (a.classList) return a.classList.contains(b);
            a = Ta(a);
            return Ca(a, function(c) {
                return c == b
            })
        }
        return !1
    }

    function E(a, b) {
        b && (a.classList ? a.classList.add(b) : Ua(a, b) || (a.className += " " + b))
    }

    function F(a, b) {
        if (b)
            if (a.classList) a.classList.remove(b);
            else {
                var c = Ta(a);
                c = Da(c, function(d) {
                    return d != b
                });
                a.className = c.join(" ")
            }
    };

    function Wa(a) {
        var b = document.body;
        b.dataset ? b.dataset.spfName = a : b.setAttribute("data-" + Ha(), a)
    };

    function Xa(a, b) {
        b = b || document;
        return b.querySelectorAll ? b.querySelectorAll(a) : []
    }

    function Ya(a, b, c) {
        for (; a;) {
            if (b(a)) return a;
            if (c && a == c) break;
            a = a.parentNode
        }
        return null
    }

    function Za(a, b, c) {
        b = b || document;
        var d = b.createElement("iframe");
        d.id = a || "";
        d.src = 'javascript:""';
        d.style.display = "none";
        c && (d.onload = n(c, null, d));
        b.body.appendChild(d);
        return d
    };

    function $a(a, b, c) {
        var d = null,
            e = window.history.state;
        if (e) {
            d = {};
            for (var f in e) d[f] = e[f]
        }
        if (b)
            for (f in d = d || {}, b) d[f] = b[f];
        ab(!0, a, d, c)
    }

    function ab(a, b, c, d) {
        if (b || c) {
            b = b || window.location.href;
            c = c || {};
            var e = q();
            w("history-timestamp", e);
            c["spf-timestamp"] = e;
            if (a) bb(c, b);
            else if (a = cb().contentWindow.history.pushState, typeof a == "function") a.call(window.history, c, "", b);
            else throw Error("history.pushState is not a function.");
            w("history-url", b);
            d && (d = x["history-callback"]) && d(b, c)
        }
    }

    function db(a) {
        var b = window.location.href;
        if (x["history-ignore-pop"]) w("history-ignore-pop", !1);
        else if (a.state) {
            a = a.state;
            var c = a["spf-timestamp"];
            b == x["history-url"] ? (w("history-timestamp", c), bb(a, b)) : (a["spf-back"] = c < parseInt(x["history-timestamp"], 10), a["spf-current"] = x["history-url"], w("history-timestamp", c), w("history-url", b), (c = x["history-callback"]) && c(b, a))
        }
    }

    function bb(a, b) {
        var c = cb().contentWindow.history.replaceState;
        if (typeof c == "function") c.call(window.history, a, "", b);
        else throw Error("history.replaceState is not a function");
    }

    function cb() {
        var a = document.getElementById("history-iframe");
        a || (a = Za("history-iframe"));
        return a
    };

    function eb(a, b) {
        a && b && (a in G || (G[a] = []), G[a].push(b))
    }

    function fb(a, b) {
        a in G && b && Ba(G[a], function(c, d, e) {
            return c == b ? (e[d] = null, !1) : !0
        })
    }

    function gb(a) {
        a in G && r(G[a], function(b, c, d) {
            d[c] = null;
            b && b()
        })
    }
    var G = {};
    "ps-s" in x || w("ps-s", G);
    G = x["ps-s"];

    function J(a, b, c) {
        var d = K[a];
        return a && b ? (d || (d = K[a] = {
            items: [],
            A: 0,
            v: 0,
            G: 1
        }), d.items.push({
            I: b,
            delay: c || 0
        })) : d && d.items.length || 0
    }

    function L(a, b) {
        var c = K[a];
        if (c) {
            var d = !!c.A || !!c.v;
            c.G > 0 && (b || !d) && hb(a, b)
        }
    }

    function ib(a) {
        (a = K[a]) && a.G--
    }

    function jb(a, b) {
        var c = K[a];
        c && (c.G++, L(a, b))
    }

    function kb(a) {
        var b = K[a];
        b && (lb(b), delete K[a])
    }

    function hb(a, b) {
        var c = K[a];
        if (c && (lb(c), c.G > 0 && c.items.length)) {
            var d = c.items[0];
            d && (a = n(function(e, f) {
                f();
                e()
            }, null, n(hb, null, a, b)), b ? (c.items.shift(), a(d.I)) : mb(c, d, a))
        }
    }

    function mb(a, b, c) {
        b.delay ? (c = n(c, null, Aa), a.v = setTimeout(c, b.delay), b.delay = 0) : (a.items.shift(), c = n(c, null, b.I), (b = (b = A["advanced-task-scheduler"]) && b.addTask) ? a.A = b(c) : a.v = setTimeout(c, 0))
    }

    function lb(a) {
        if (a.A) {
            var b = A["advanced-task-scheduler"];
            (b = b && b.cancelTask) && b(a.A);
            a.A = 0
        }
        a.v && (clearTimeout(a.v), a.v = 0)
    }
    var K = {};

    function nb(a) {
        var b = document.createElement("a");
        b.href = a;
        b.href = b.href;
        a = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: b.hostname,
            port: b.port,
            pathname: b.pathname,
            search: b.search,
            hash: b.hash,
            username: b.username,
            password: b.password
        };
        a.origin = a.protocol + "//" + a.host;
        a.pathname && a.pathname[0] == "/" || (a.pathname = "/" + a.pathname);
        return a
    }

    function N(a, b) {
        a = nb(a);
        return b ? a.href : z(a.href, "#")[0]
    }

    function ob(a, b) {
        var c = z(a, "#");
        a = c[0];
        r(b, function(d) {
            a = a.replace(new RegExp("([?&])" + d + "(?:=[^&]*)?(?:(?=[&])|$)", "g"), function(e, f) {
                return f == "?" ? f : ""
            })
        });
        y(a, "?") && (a = a.slice(0, -1));
        return a + c[1] + c[2]
    }

    function pb(a) {
        var b = A["advanced-persistent-parameters"] || "",
            c = z(a, "#");
        a = c[0];
        var d = a.indexOf("?") != -1 ? "&" : "?";
        a += b ? d + b : "";
        return a + c[1] + c[2]
    };
    /*

     SPF
     (c) 2012-2017 Google Inc.
     https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
    */
    function qb(a, b, c, d) {
        var e = a == "js";
        b = O(a, b);
        var f = c || "^" + b,
            g = P(a, f),
            h;
        c && (h = Q[P(a, c)]) && b != h && (p(e ? "spfjsbeforeunload" : "spfcssbeforeunload", {
            name: c,
            url: h
        }), e = h, delete Q[P(a, c)], e && delete S[P(a, e)], delete G[P(a, c)], eb(g, n(rb, null, a, c, h)));
        if ((e = S[P(a, b)]) && f != e) {
            delete Q[P(a, e)];
            delete S[P(a, b)];
            var k = P(a, e);
            k && g && k in G && (G[g] = (G[g] || []).concat(G[k]), delete G[k])
        }
        S[P(a, b)] = f;
        Q[P(a, f)] = b;
        eb(g, d);
        d = n(sb, null, a);
        T[P(a, b)] ? (e && f != e && (a = tb(a, b)) && a.setAttribute("name", c || ""), d()) : (a = ub(a, b, d, void 0, void 0,
            h)) && c && a.setAttribute("name", c)
    }

    function vb(a, b) {
        var c = Q[P(a, b)];
        delete Q[P(a, b)];
        c && delete S[P(a, c)];
        delete G[P(a, b)];
        rb(a, b, c)
    }

    function rb(a, b, c) {
        c && (p(a == "js" ? "spfjsunload" : "spfcssunload", {
            name: b,
            url: c
        }), wb(a, c))
    }

    function sb(a) {
        var b = P(a, ""),
            c;
        for (c in G) c.indexOf(b) == 0 && Ba(c.substring(b.length).split("|"), n(xb, null, a)) && gb(c)
    }

    function ub(a, b, c, d, e, f) {
        function g() {
            T[P(a, b, e)] && (T[P(a, b, e)] = 2);
            h && m && m.parentNode && k == document && m.parentNode.removeChild(m);
            c && setTimeout(c, 0);
            return null
        }
        var h = a == "js";
        b = O(a, b);
        T[P(a, b, e)] = 1;
        var k = d || document,
            m = k.createElement(h ? "script" : "link");
        if (!b) return g();
        d = yb(b);
        m.className = P(a, d);
        "onload" in m ? m.onerror = m.onload = g : m.onreadystatechange = function() {
            /^c|loade/.test(m.readyState) && g()
        };
        d = k.getElementsByTagName("head")[0] || k.body;
        h ? (m.async = !0, va(m, ya(b)), d.insertBefore(m, d.firstChild)) : (m.rel =
            "stylesheet", m.href = b, (f = f ? tb(a, f, d) : null) ? d.insertBefore(m, f) : d.appendChild(m));
        return m
    }

    function wb(a, b) {
        b = O(a, b);
        var c = tb(a, b);
        c && c.parentNode && c.parentNode.removeChild(c);
        delete T[P(a, b)]
    }

    function tb(a, b, c) {
        b = yb(b);
        return Xa("." + P(a, b), c)[0]
    }

    function zb(a) {
        var b = a == "js",
            c = [];
        r(Xa(b ? "script[src]" : 'link[rel~="stylesheet"]'), function(d) {
            var e = b ? d.src : d.href;
            e = O(a, e);
            if (!T[P(a, e)]) {
                T[P(a, e)] = 2;
                var f = yb(e);
                E(d, P(a, f));
                if (f = d.getAttribute("name")) S[P(a, e)] = f, Q[P(a, f)] = e;
                c.push(d)
            }
        })
    }

    function Ab(a, b, c) {
        if (b && (b = O(a, b), c || !T[P(a, b)]))
            if (c && a == "img") Bb(b);
            else {
                var d = yb(b),
                    e = P(a, d),
                    f = P(a, "prefetch");
                d = document.getElementById(f);
                if (!d) d = Za(f, null, function(g) {
                    g.title = f;
                    L(f, !0)
                });
                else if (!c && d.contentWindow.document.getElementById(e)) return;
                a = n(Cb, null, d, a, b, e, f);
                d.title ? a() : J(f, a)
            }
    }

    function Cb(a, b, c, d, e) {
        var f = b == "js",
            g = b == "css";
        a = a.contentWindow.document;
        var h = a.getElementById(d);
        h && h.parentNode.removeChild(h);
        f ? (h = a.createElement("object"), Db ? a.createElement("script").src = c : h.data = c, h.id = d, a.body.appendChild(h)) : g ? (h = ub(b, c, null, a, e), h.id = d) : (h = a.createElement("img"), Db && (c = c + "#" + q()), h.src = c, h.id = d, a.body.appendChild(h))
    }

    function Bb(a) {
        var b = new Image;
        Db && (a = a + "#" + q());
        b.src = a
    }

    function Eb(a, b, c) {
        var d = a == "js",
            e = Q[P(a, c)],
            f = b.replace(/\s/g, "");
        f = f || "";
        for (var g = 0, h = 0, k = f.length; h < k; ++h) g = 31 * g + f.charCodeAt(h), g %= 4294967296;
        f = "hash-" + g;
        Q[P(a, c)] = f;
        !Fb(a, f) && (b = Gb(a, b)) && (T[P(a, f)] = 2, b && !d && (d = yb(f), b.className = P(a, d), b.setAttribute("name", c)), (e = e && e[0]) && wb(a, e))
    }

    function Gb(a, b) {
        b = Ga(b);
        if (!b) return null;
        var c = document.getElementsByTagName("head")[0] || document.body;
        a == "js" ? (a = document.createElement("script"), a.text = b, c.appendChild(a), c.removeChild(a)) : (a = document.createElement("style"), c.appendChild(a), "styleSheet" in a ? a.styleSheet.cssText = b : a.appendChild(document.createTextNode(b)));
        return a
    }

    function O(a, b) {
        var c = "rsrc-p-" + a;
        if (b) {
            var d = b.indexOf("//");
            if (d < 0) {
                if (b.lastIndexOf("hash-", 0) == 0) return b;
                c = x[c] || "";
                if (Fa(c)) b = c + b;
                else
                    for (var e in c) b = b.replace(e, c[e]);
                a != "img" && (b = b.indexOf("." + a) < 0 ? b + "." + a : b);
                b = N(b)
            } else d == 0 && (b = N(b))
        }
        return b
    }

    function P(a, b, c) {
        return a + "-" + b + (c ? "-" + c : "")
    }

    function yb(a) {
        return a ? String(a).replace(/[^\w]/g, "") : ""
    }

    function Fb(a, b) {
        a = T[P(a, b)];
        return b == "" || a == 2
    }

    function xb(a, b) {
        b = Q[P(a, b)];
        return b != void 0 && Fb(a, b)
    }
    var T = {},
        S = {},
        Q = {},
        Db = navigator.userAgent.indexOf(" Trident/") != -1;
    "rsrc-s" in x || w("rsrc-s", T);
    T = x["rsrc-s"];
    "rsrc-n" in x || w("rsrc-n", S);
    S = x["rsrc-n"];
    "rsrc-u" in x || w("rsrc-u", Q);
    Q = x["rsrc-u"];

    function Hb(a) {
        a = v(a);
        r(a, function(b) {
            Ab("img", b, !0)
        })
    };

    function Ib(a, b, c) {
        qb("js", a, b, c)
    }

    function Jb(a) {
        vb("js", a)
    }

    function Kb(a, b) {
        ub("js", a, b)
    }

    function Lb(a) {
        a = v(a);
        r(a, function(b) {
            Ab("js", b)
        })
    }

    function Mb(a, b, c) {
        a = v(a);
        a = Da(a, function(g) {
            return !!g
        });
        var d = [];
        r(a, function(g) {
            Q[P("js", g)] == void 0 && d.push(g)
        });
        var e = !d.length;
        if (b) {
            var f = Ba(a, n(xb, null, "js"));
            e && f ? b() : (a = P("js", a.sort().join("|")), eb(a, b))
        }
        c && !e && c(d)
    }

    function Nb(a, b) {
        a = v(a);
        r(a, function(c) {
            if (c) {
                var d = Ob[c] || c;
                d = O("js", d);
                var e = Q[P("js", c)];
                e && d != e && Pb(c)
            }
        });
        Mb(a, b, Qb)
    }

    function Qb(a) {
        r(a, function(b) {
            function c() {
                Ib(e, b)
            }
            var d = U[b],
                e = Ob[b] || b;
            d ? Nb(d, c) : c()
        })
    }

    function Pb(a) {
        a = v(a);
        r(a, function(b) {
            var c = [],
                d;
            for (d in U) {
                var e = U[d];
                e = v(e);
                r(e, function(f) {
                    f == b && c.push(d)
                })
            }
            r(c, function(f) {
                Pb(f)
            });
            Jb(b)
        })
    }

    function Rb(a, b) {
        Eb("js", a, b)
    }

    function Sb(a) {
        Gb("js", a)
    }
    var U = {};
    "js-d" in x || w("js-d", U);
    U = x["js-d"];
    var Ob = {};
    "js-u" in x || w("js-u", Ob);
    Ob = x["js-u"];

    function Tb(a, b, c) {
        qb("css", a, b, c)
    }

    function Ub(a, b) {
        ub("css", a, b)
    }

    function Vb(a) {
        a = v(a);
        r(a, function(b) {
            Ab("css", b)
        })
    };
    /*

     Copyright 2012-2017 Google Inc. All Rights Reserved.
     Use of this source code is governed by The MIT License.
     SPDX-License-Identifier: MIT
    */
    function Wb(a, b, c) {
        if (b) {
            b = [];
            var d = 0;
            c && (a += "\r\n");
            var e = a.indexOf("[\r\n", d);
            for (e > -1 && (d = e + 3);
                (e = a.indexOf(",\r\n", d)) > -1;) {
                var f = Ga(a.substring(d, e));
                d = e + 3;
                f && b.push(JSON.parse(f))
            }
            e = a.indexOf("]\r\n", d);
            e > -1 && (f = Ga(a.substring(d, e)), d = e + 3, f && b.push(JSON.parse(f)));
            f = "";
            a.length > d && (f = a.substring(d), c && y(f, "\r\n") && (f = f.substring(0, f.length - 2)));
            b = Xb(b);
            return {
                F: b,
                l: f
            }
        }
        a = JSON.parse(a);
        b = Xb(v(a));
        return {
            F: b,
            l: ""
        }
    }

    function V(a, b, c, d) {
        var e = c && c.type.lastIndexOf("navigate", 0) == 0,
            f = c && c.reverse,
            g = c && !!c.position,
            h = c && c.s,
            k = b.name || "",
            m = "process " + N(a),
            B = !A["experimental-process-async"];
        var u = 0;
        b.timing || (b.timing = {});
        b.title && (document.title = b.title);
        e && b.url && N(b.url) != N(window.location.href) && $a(b.url + window.location.hash);
        b.head && (u = n(function(t, C) {
            t = W(t);
            Yb(t);
            Zb(t);
            ib(m);
            $b(t, function() {
                C.spfProcessHead = q();
                jb(m, B)
            })
        }, null, b.head, b.timing), u = J(m, u));
        b.attr && (u = n(function(t, C) {
            for (var H in t) {
                var M = document.getElementById(H);
                if (M) {
                    var R = void 0,
                        bc = t[H];
                    for (R in bc) {
                        var ra = bc[R];
                        R == "class" ? M.className = ra : R == "style" ? M.style.cssText = ra : (M.setAttribute(R, ra), R == "value" && (M[R] = ra))
                    }
                }
            }
            C.spfProcessAttr = q()
        }, null, b.attr, b.timing), u = J(m, u));
        var I = b.body || {},
            ad = u,
            Va;
        for (Va in I) u = n(function(t, C) {
            if (t = document.getElementById(t)) {
                !e || g || h || (w("nav-scroll-position", null), w("nav-scroll-url", null), window.scroll(0, 0), h = !0, c && (c.s = !0));
                var H = W(C);
                Zb(H);
                var M = function() {
                    ib(m);
                    $b(H, function() {
                        jb(m, B)
                    })
                };
                C = A["animation-class"];
                ac && Ua(t, C) ?
                    (t = new cc(t, H.html, C, k, !!f), ib(m), L(t.key, !0), J(t.key, n(dc, null, t), 0), J(t.key, n(ec, null, t), 17), J(t.key, n(fc, null, t), t.duration), J(t.key, n(function() {
                        M();
                        jb(m, B)
                    }, null), 0), L(t.key)) : (C = A["experimental-html-handler"]) ? (ib(m), C(H.html, t, function() {
                        M();
                        jb(m, B)
                    })) : (ua(t, wa(H.html)), M())
            }
        }, null, Va, I[Va], b.timing), u = J(m, u);
        I = u - ad;
        b.foot ? (u = n(function(t, C, H) {
            H && (C.spfProcessBody = q());
            t = W(t);
            Zb(t);
            ib(m);
            $b(t, function() {
                C.spfProcessFoot = q();
                jb(m, B)
            })
        }, null, b.foot, b.timing, I), u = J(m, u)) : I && (u = n(function(t) {
            t.spfProcessBody =
                q()
        }, null, b.timing), u = J(m, u));
        d && (u = J(m, n(d, null, a, b)));
        L(m, B)
    }

    function gc(a, b, c, d) {
        c = "preprocess " + N(a);
        if (b.head) {
            var e = n(function(h) {
                h = W(h);
                Yb(h);
                hc(h);
                ic(h)
            }, null, b.head);
            J(c, e)
        }
        var f = b.body || {},
            g;
        for (g in f) f[g] && (e = n(function(h, k) {
            h = W(k);
            hc(h);
            ic(h)
        }, null, g, f[g]), J(c, e));
        b.foot && (e = n(function(h) {
            h = W(h);
            hc(h);
            ic(h)
        }, null, b.foot), J(c, e));
        d && J(c, n(d, null, a, b));
        L(c)
    }

    function dc(a) {
        E(a.g, a.B);
        E(a.g, a.L);
        E(a.g, a.T);
        E(a.g, a.P);
        E(a.g, a.S);
        a.u = document.createElement("div");
        a.u.className = a.W;
        var b = a.g,
            c = a.u;
        if (c) {
            for (var d; d = b.firstChild;) c.appendChild(d);
            b.appendChild(c)
        }
        a.j = document.createElement("div");
        a.j.className = a.V;
        ua(a.j, wa(a.U));
        a.reverse ? (b = a.u, b.parentNode.insertBefore(a.j, b)) : (b = a.u, b.parentNode.insertBefore(a.j, b.nextSibling))
    }

    function ec(a) {
        F(a.g, a.P);
        F(a.g, a.S);
        E(a.g, a.J);
        E(a.g, a.K)
    }

    function fc(a) {
        a.g.removeChild(a.u);
        var b = a.j,
            c, d = b.parentNode;
        if (d && d.nodeType != 11)
            if (b.removeNode) b.removeNode(!1);
            else {
                for (; c = b.firstChild;) d.insertBefore(c, b);
                d.removeChild(b)
            }
        F(a.g, a.J);
        F(a.g, a.K);
        F(a.g, a.L);
        F(a.g, a.T);
        F(a.g, a.B)
    }

    function Xb(a) {
        var b = v(a);
        r(b, function(c) {
            if (c) {
                c.head && (c.head = W(c.head));
                if (c.body)
                    for (var d in c.body) c.body[d] = W(c.body[d]);
                c.foot && (c.foot = W(c.foot))
            }
        });
        return a
    }

    function W(a) {
        var b = new jc;
        if (!a) return b;
        if (!Fa(a)) return a.scripts && r(a.scripts, function(c) {
            b.scripts.push({
                url: c.url || "",
                text: c.text || "",
                name: c.name || "",
                async: c.async || !1
            })
        }), a.styles && r(a.styles, function(c) {
            b.styles.push({
                url: c.url || "",
                text: c.text || "",
                name: c.name || ""
            })
        }), a.links && r(a.links, function(c) {
            c.rel == "spf-preconnect" && b.links.push({
                url: c.url || "",
                rel: c.rel || ""
            })
        }), b.html = a.html || "", b;
        a = a.replace(kc, function(c, d, e, f) {
            if (d == "script") {
                d = (d = e.match(lc)) ? d[1] : "";
                var g = e.match(mc);
                g = g ? g[1] : "";
                var h = nc.test(e);
                e = oc.exec(e);
                return (e = !e || e[1].indexOf("/javascript") != -1 || e[1].indexOf("/x-javascript") != -1 || e[1].indexOf("/ecmascript") != -1) ? (b.scripts.push({
                    url: g,
                    text: f,
                    name: d,
                    async: h
                }), "") : c
            }
            return d == "style" && (d = (d = e.match(lc)) ? d[1] : "", e = oc.exec(e), e = !e || e[1].indexOf("text/css") != -1) ? (b.styles.push({
                url: "",
                text: f,
                name: d
            }), "") : c
        });
        a = a.replace(pc, function(c, d) {
            var e = d.match(qc);
            e = e ? e[1] : "";
            return e == "stylesheet" ? (e = (e = d.match(lc)) ? e[1] : "", d = (d = d.match(rc)) ? d[1] : "", b.styles.push({
                url: d,
                text: "",
                name: e
            }), "") : e == "spf-preconnect" ? (d = (d = d.match(rc)) ? d[1] : "", b.links.push({
                url: d,
                rel: e
            }), "") : c
        });
        b.html = a;
        return b
    }

    function $b(a, b) {
        if (a.scripts.length <= 0) b && b();
        else {
            var c = -1,
                d = function() {
                    c++;
                    if (c < a.scripts.length) {
                        var e = a.scripts[c],
                            f = function() {};
                        e.url ? f = e.name ? n(Ib, null, e.url, e.name) : n(Kb, null, e.url) : e.text && (f = e.name ? n(Rb, null, e.text, e.name) : n(Sb, null, e.text));
                        e.url && !e.async ? f(d) : (f(), d())
                    } else b && b()
                };
            d()
        }
    }

    function ic(a) {
        a.scripts.length <= 0 || (a = Ea(a.scripts, function(b) {
            return b.url
        }), Lb(a))
    }

    function Zb(a) {
        a.styles.length <= 0 || r(a.styles, function(b) {
            b.url ? b.name ? Tb(b.url, b.name) : Ub(b.url) : b.text && (b.name ? Eb("css", b.text, b.name) : Gb("css", b.text))
        })
    }

    function hc(a) {
        a.styles.length <= 0 || (a = Ea(a.styles, function(b) {
            return b.url
        }), Vb(a))
    }

    function Yb(a) {
        a.links.length <= 0 || (a = Ea(a.links, function(b) {
            return b.rel == "spf-preconnect" ? b.url : ""
        }), Hb(a))
    }

    function cc(a, b, c, d, e) {
        var f = parseInt(A["animation-duration"], 10);
        this.g = a;
        this.U = b;
        this.duration = f;
        this.reverse = e;
        b = document.body;
        b = (b.dataset ? b.dataset.spfName : b.getAttribute("data-" + Ha())) || "";
        f = parseInt(x.uid, 10) || 0;
        f++;
        this.key = a["spf-key"] || (a["spf-key"] = "" + w("uid", f));
        this.L = b && c + "-from-" + b;
        this.T = d && c + "-to-" + d;
        this.u = null;
        this.W = c + "-old";
        this.j = null;
        this.V = c + "-new";
        this.B = c + (e ? "-reverse" : "-forward");
        this.P = c + "-start";
        this.S = this.B + "-start";
        this.J = c + "-end";
        this.K = this.B + "-end"
    }

    function jc() {
        this.html = "";
        this.scripts = [];
        this.styles = [];
        this.links = []
    }
    var ac = function() {
            var a = document.createElement("div");
            return "transition" in a.style ? !0 : Ca(["webkit", "Moz", "Ms", "O", "Khtml"], function(b) {
                return b + "Transition" in a.style
            })
        }(),
        pc = /\x3clink([\s\S]*?)\x3e/ig,
        kc = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,
        nc = /(?:\s|^)async(?:\s|=|$)/i,
        rc = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,
        lc = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,
        qc = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,
        mc = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,
        oc = /(?:\s|^)type\s*=\s*["']([^"']+)["']/i;

    function sc(a, b, c, d) {
        var e = d || {},
            f = !1,
            g = 0,
            h, k = new XMLHttpRequest;
        k.open(a, b, !0);
        k.timing = {};
        var m = k.abort;
        k.abort = function() {
            clearTimeout(h);
            k.onreadystatechange = null;
            m.call(k)
        };
        k.onreadystatechange = function() {
            var u = k.timing;
            if (k.readyState == 2) {
                u.responseStart = u.responseStart || q();
                if (k.responseType == "json") f = !1;
                else if (A["assume-all-json-requests-chunked"] || (k.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked") > -1) f = !0;
                else {
                    u = k.getResponseHeader("X-Firefox-Spdy");
                    var I = window.chrome &&
                        chrome.loadTimes && chrome.loadTimes();
                    I = I && I.wasFetchedViaSpdy;
                    f = !(!u && !I)
                }
                e.N && e.N(k)
            } else k.readyState == 3 ? f && e.C && (u = k.responseText.substring(g), g = k.responseText.length, e.C(k, u)) : k.readyState == 4 && (u.responseEnd = u.responseEnd || q(), window.performance && window.performance.getEntriesByName && (k.resourceTiming = window.performance.getEntriesByName(b).pop()), f && e.C && k.responseText.length > g && (u = k.responseText.substring(g), g = k.responseText.length, e.C(k, u)), clearTimeout(h), e.M && e.M(k))
        };
        "responseType" in k && e.responseType ==
            "json" && (k.responseType = "json");
        e.withCredentials && (k.withCredentials = e.withCredentials);
        d = "FormData" in window && c instanceof FormData;
        a = a == "POST" && !d;
        if (e.headers)
            for (var B in e.headers) k.setRequestHeader(B, e.headers[B]), "content-type" == B.toLowerCase() && (a = !1);
        a && k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.R > 0 && (h = setTimeout(function() {
            k.abort();
            e.O && e.O(k)
        }, e.R));
        k.timing.fetchStart = q();
        k.send(c);
        return k
    };

    function tc(a, b) {
        b = b || {};
        b.method = ((b.method || "GET") + "").toUpperCase();
        b.type = b.type || "request";
        var c = a,
            d = A["url-identifier"] || "";
        if (d) {
            d = d.replace("__type__", b.type || "");
            var e = z(c, "#"),
                f = z(e[0], "?");
            c = f[0];
            var g = f[1];
            f = f[2];
            var h = e[1];
            e = e[2];
            if (d.lastIndexOf("?", 0) == 0) g && (d = d.replace("?", "&")), f += d;
            else {
                if (d.lastIndexOf(".", 0) == 0)
                    if (y(c, "/")) d = "index" + d;
                    else {
                        var k = c.lastIndexOf(".");
                        k > -1 && (c = c.substring(0, k))
                    }
                else y(c, "/") && d.lastIndexOf("/", 0) == 0 && (d = d.substring(1));
                c += d
            }
            c = c + g + f + h + e
        }
        d = N(c);
        c = {};
        c.spfUrl = d;
        c.startTime = q();
        c.fetchStart = c.startTime;
        g = uc(a, b.current, null, b.type, !1);
        g = vc(g, b.current);
        c.spfPrefetched = !!g && g.type == "prefetch";
        c.spfCached = !!g;
        if (g) {
            a = n(wc, null, a, b, c, g.key, g.response);
            b = window._spf_state = window._spf_state || {};
            var m = parseInt(b.uid, 10) || 0;
            m++;
            b = b.uid = m;
            Ka[b] = a;
            Na ? window.postMessage("spf:" + b, "*") : window.setTimeout(n(Ja, null, b), 0);
            return null
        }
        g = {};
        if (f = A["request-headers"])
            for (m in f) h = f[m], g[m] = h == null ? "" : String(h);
        if (b.headers)
            for (m in b.headers) h = b.headers[m], g[m] =
                h == null ? "" : String(h);
        b.i != null && (g["X-SPF-Referer"] = b.i);
        b.current != null && (g["X-SPF-Previous"] = b.current);
        if (m = A["advanced-header-identifier"]) g["X-SPF-Request"] = m.replace("__type__", b.type), g.Accept = "application/json";
        m = new xc;
        f = n(yc, null, a, b, c, m);
        a = {
            headers: g,
            R: A["request-timeout"],
            N: n(zc, null, a, m),
            C: n(Ac, null, a, b, c, m),
            M: f,
            O: f
        };
        b.withCredentials && (a.withCredentials = b.withCredentials);
        A["advanced-response-type-json"] && (a.responseType = "json");
        return b.method == "POST" ? sc("POST", d, b.H, a) : sc("GET", d,
            null, a)
    }

    function wc(a, b, c, d, e) {
        var f = !1;
        c.responseStart = c.responseEnd = q();
        b.type && b.type.lastIndexOf("navigate", 0) == 0 && (c.navigationStart = c.startTime, A["cache-unified"] || (Pa(d), f = !0));
        b.o && e.type == "multipart" && r(e.parts, function(g) {
            g.timing || (g.timing = {});
            g.timing.spfCached = !!c.spfCached;
            g.timing.spfPrefetched = !!c.spfPrefetched;
            b.o(a, g)
        });
        Bc(a, b, c, e, f)
    }

    function zc(a, b, c) {
        a = c.getResponseHeader("X-SPF-Response-Type") || "";
        b.j = a.toLowerCase().indexOf("multipart") != -1
    }

    function Ac(a, b, c, d, e, f, g) {
        if (d.j) {
            f = d.l + f;
            try {
                var h = Wb(f, !0, g)
            } catch (k) {
                e.abort();
                b.m && b.m(a, k, e);
                return
            }
            b.o && r(h.F, function(k) {
                k.timing || (k.timing = {});
                k.timing.spfCached = !!c.spfCached;
                k.timing.spfPrefetched = !!c.spfPrefetched;
                b.o(a, k)
            });
            d.g = d.g.concat(h.F);
            d.l = h.l
        }
    }

    function yc(a, b, c, d, e) {
        if (e.timing)
            for (var f in e.timing) c[f] = e.timing[f];
        if (e.resourceTiming)
            if (b.type == "load")
                for (var g in e.resourceTiming) c[g] = e.resourceTiming[g];
            else if (window.performance && window.performance.timing && (f = window.performance.timing.navigationStart, f + e.resourceTiming.startTime >= c.startTime))
            for (var h in e.resourceTiming) g = e.resourceTiming[h], g !== void 0 && (y(h, "Start") || y(h, "End") || h == "startTime") && (c[h] = f + Math.round(g));
        b.type != "load" && (c.navigationStart = c.startTime);
        d.g.length &&
            (d.l = Ga(d.l), d.l && Ac(a, b, c, d, e, "", !0));
        if (e.responseType == "json") {
            if (!e.response) {
                b.m && b.m(a, Error("JSON response parsing failed"), e);
                return
            }
            var k = Xb(v(e.response))
        } else try {
            k = Wb(e.responseText).F
        } catch (B) {
            b.m && b.m(a, B, e);
            return
        }
        if (b.o && k.length > 1)
            for (d = d.g.length; d < k.length; d++) e = k[d], e.timing || (e.timing = {}), e.timing.spfCached = !!c.spfCached, e.timing.spfPrefetched = !!c.spfPrefetched, b.o(a, e);
        if (k.length > 1) {
            var m;
            r(k, function(B) {
                B.cacheType && (m = B.cacheType)
            });
            k = {
                parts: k,
                type: "multipart"
            };
            m && (k.cacheType =
                m)
        } else k = k.length == 1 ? k[0] : {};
        Bc(a, b, c, k, !0)
    }

    function Bc(a, b, c, d, e) {
        if (e && b.method != "POST" && (e = uc(a, b.current, d.cacheType, b.type, !0))) {
            d.cacheKey = e;
            var f = {
                    response: d,
                    type: b.type || ""
                },
                g = parseInt(A["cache-lifetime"], 10),
                h = parseInt(A["cache-max"], 10);
            g <= 0 || h <= 0 || (h = D(), f = {
                data: f,
                life: g,
                time: q(),
                count: 0
            }, Sa(f), h[e] = f, setTimeout(Qa, 1E3))
        }
        d.timing = c;
        b.D && b.D(a, d)
    }

    function uc(a, b, c, d, e) {
        a = N(a);
        var f;
        A["cache-unified"] ? f = a : d == "navigate-back" || d == "navigate-forward" ? f = "history " + a : d == "navigate" ? f = (e ? "history " : "prefetch ") + a : d == "prefetch" && (f = e ? "prefetch " + a : "");
        b && c == "url" ? f += " previous " + b : b && c == "path" && (f += " previous " + nb(b).pathname);
        return f || ""
    }

    function vc(a, b) {
        var c = [];
        b && (c.push(a + " previous " + b), c.push(a + " previous " + nb(b).pathname));
        c.push(a);
        var d = null;
        Ca(c, function(e) {
            a: {
                var f = D();
                if (e in f) {
                    f = f[e];
                    if (Ra(f)) {
                        Sa(f);
                        f = f.data;
                        break a
                    }
                    Pa(e)
                }
                f = void 0
            }
            f && (d = {
                key: e,
                response: f.response,
                type: f.type
            });
            return !!f
        });
        return d
    }

    function xc() {
        this.j = !1;
        this.l = "";
        this.g = []
    };

    function Cc(a) {
        return Ya(a, function(b) {
            return Ua(b, A["link-class"])
        })
    }

    function Dc(a) {
        return Ya(a, function(b) {
            return Ua(b, A["nolink-class"])
        })
    }

    function Ec(a, b) {
        return Ya(a, function(c) {
            return c.href && c.tagName.toLowerCase() != "img"
        }, b)
    }

    function Fc(a) {
        if (a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || a.button > 0) return null;
        var b = Cc(a.target);
        return !b || A["nolink-class"] && Dc(a.target) ? null : (a = Ec(a.target, b)) ? a.href : null
    }

    function Gc(a) {
        return nb(a).origin != nb(window.location.href).origin ? !1 : !0
    }

    function Hc() {
        if (!x["nav-init"]) return !1;
        var a = parseInt(x["nav-counter"], 10) || 0;
        a++;
        var b = parseInt(A["navigate-limit"], 10);
        b = isNaN(b) ? Infinity : b;
        if (a > b) return !1;
        a = parseInt(x["nav-init-time"], 10);
        a--;
        a = q() - a;
        b = parseInt(A["navigate-lifetime"], 10);
        b = isNaN(b) ? Infinity : b;
        return a > b ? !1 : !0
    }

    function Ic(a, b) {
        b = b || window.location.href;
        return a.indexOf("#") != -1 && (a = N(a), b = N(b), a == b) ? !1 : !0
    }

    function Jc(a) {
        if (!a.defaultPrevented) {
            var b = Fc(a);
            b && (b = pb(b), Gc(b) && Hc() && p("spfclick", {
                url: b,
                target: a.target
            }) && (Kc(b, {}, new Lc), a.preventDefault()))
        }
    }

    function Mc(a) {
        var b = Fc(a);
        b && setTimeout(function() {
            Nc(b)
        }, 0)
    }

    function Oc() {
        var a = x["nav-scroll-position"] || null;
        var b = x["nav-scroll-url"] || "";
        a = a && b == window.location.href ? a : null;
        Pc();
        a && window.scroll.apply(null, a)
    }

    function Qc(a, b) {
        b = new Lc({
            current: b && b["spf-current"],
            history: !0,
            position: b && b["spf-position"],
            i: b && b["spf-referer"],
            reverse: !(!b || !b["spf-back"])
        });
        var c = A["reload-identifier"];
        c && (a = ob(a, [c]));
        Gc(a) ? Hc() ? p("spfhistory", {
            url: a,
            referer: b.i,
            previous: b.current
        }) && (b.position && (w("nav-scroll-position", [window.pageXOffset, window.pageYOffset]), w("nav-scroll-url", window.location.href)), Kc(a, {}, b)) : X(a, "1") : X(a, "9")
    }

    function Kc(a, b, c) {
        Rc();
        if (Ic(a, c.current))
            if (Sc(a, c.i, c.current, b)) {
                w("nav-counter", (parseInt(x["nav-counter"], 10) || 0) + 1);
                Tc(a);
                var d = N(a),
                    e = "preprocess " + N(d);
                for (f in K) e != f && f.lastIndexOf("preprocess", 0) == 0 && kb(f);
                d = Uc()[d];
                w("nav-request", d);
                w("nav-promote", null);
                w("nav-promote-time", null);
                if (d && d.readyState != 4) d = "preprocess " + N(a), e = "promote " + N(a), w("nav-promote", a), w("nav-promote-time", q()), kb(d), L(e, !0), c.history || Vc(a, c.i, n(Y, null, b));
                else {
                    d = n(Y, null, b);
                    e = n(Wc, null, b, c);
                    var f = n(Xc, null,
                        b, c);
                    A["advanced-navigate-persist-timing"] || Yc();
                    c.type = "navigate";
                    c.history && (c.type += c.reverse ? "-back" : "-forward");
                    b = tc(a, {
                        method: b.method,
                        headers: b.headers,
                        o: e,
                        m: d,
                        D: f,
                        H: b.postData,
                        type: c.type,
                        current: c.current,
                        i: c.i
                    });
                    w("nav-request", b);
                    c.history || Vc(a, c.i, d)
                }
            } else X(a, "2");
        else c.history || Vc(a, c.i, n(Y, null, b)), Zc(a, c)
    }

    function Zc(a, b) {
        if (b.position) Pc(), window.scroll.apply(null, b.position), b.s = !0;
        else if (a = z(a, "#"), a[2]) {
            if (a = document.getElementById(a[2])) Pc(), a.scrollIntoView(), b.s = !0
        } else b.s || (Pc(), window.scroll(0, 0), b.s = !0)
    }

    function Vc(a, b, c) {
        try {
            $a(null, {
                "spf-position": [window.pageXOffset, window.pageYOffset]
            }), N(a, !0) != window.location.href && ab(!1, a, {
                "spf-referer": b
            })
        } catch (d) {
            Rc(), c(a, d)
        }
    }

    function Y(a, b, c, d) {
        w("nav-request", null);
        $c(b, c, a, void 0, d) && X(b, "10", c)
    }

    function Wc(a, b, c, d) {
        if (bd(c, d, a))
            if (d.reload) X(c, "5");
            else if (d.redirect) cd(a, d.redirect);
        else try {
            V(c, d, b, function() {
                dd(c, d, a)
            })
        } catch (e) {
            Y(a, c, e)
        } else X(c, "3")
    }

    function Xc(a, b, c, d) {
        w("nav-request", null);
        if (x["nav-promote"] == b.h) {
            var e = d.timing || {};
            e.navigationStart = x["nav-promote-time"];
            e.spfPrefetched = !0
        }
        var f = d.type == "multipart";
        if (!f) {
            if (!ed(c, d, a)) {
                X(c, "4");
                return
            }
            if (d.reload) {
                X(c, "5");
                return
            }
            if (d.redirect) {
                cd(a, d.redirect);
                return
            }
        }
        try {
            V(c, f ? {} : d, b, function() {
                var g = d.name || "";
                f && r(d.parts, function(h) {
                    g = h.name || g
                });
                Wa(g);
                Zc(c, b);
                fd(c, d, a)
            })
        } catch (g) {
            Y(a, c, g)
        }
    }

    function cd(a, b) {
        try {
            b += window.location.hash, $a(b, null, !0)
        } catch (c) {
            Rc(), Y(a, b, c)
        }
    }

    function Rc() {
        var a = x["nav-request"];
        a && (a.abort(), w("nav-request", null))
    }

    function Z(a, b) {
        if (a) {
            var c = Array.prototype.slice.call(arguments);
            c[0] = a;
            c = za.apply(null, c)
        }
        return c !== !1
    }

    function X(a, b, c) {
        c = c ? c.message : "";
        Rc();
        Tc();
        var d = b;
        c && (d += " Message: " + c);
        p("spfreload", {
            url: a,
            reason: d
        });
        var e = window.location.href;
        A["experimental-remove-history"] && e == a && (w("history-ignore-pop", !0), window.history.back());
        setTimeout(function() {
            var f = A["reload-identifier"];
            if (f) {
                var g = {};
                g[f] = encodeURIComponent(b);
                f = a;
                var h = z(f, "#");
                f = h[0];
                var k = f.indexOf("?") != -1 ? "&" : "?",
                    m;
                for (m in g) f += k + m, g[m] && (f += "=" + g[m]), k = "&";
                a = f + h[1] + h[2]
            }
            window.location.href = a;
            Ic(a, e) || window.location.reload()
        }, 0)
    }

    function gd(a, b, c) {
        c.h = c.h || a;
        if (Sc(a, void 0, void 0, b, !0)) {
            var d = n(hd, null, !1, b, c),
                e = n(id, null, !1, b, c),
                f = n(jd, null, !1, b, c);
            c.type = "load";
            tc(a, {
                method: b.method,
                headers: b.headers,
                o: e,
                m: d,
                D: f,
                H: b.postData,
                type: c.type,
                withCredentials: b.withCredentials
            })
        }
    }

    function Nc(a, b) {
        a = pb(a);
        kd(a, b || {}, new Lc)
    }

    function kd(a, b, c) {
        c.h = c.h || a;
        if (Sc(a, void 0, void 0, b, !0)) {
            var d = n(hd, null, !0, b, c),
                e = n(id, null, !0, b, c),
                f = n(jd, null, !0, b, c);
            c.type = "prefetch";
            b = tc(a, {
                method: b.method,
                headers: b.headers,
                o: e,
                m: d,
                D: f,
                H: b.postData,
                type: c.type,
                current: c.current
            });
            a = N(a);
            Uc()[a] = b
        }
    }

    function hd(a, b, c, d, e) {
        a && ld(d);
        a && x["nav-promote"] == c.h ? Y(b, d, e) : $c(d, e, b, !0)
    }

    function id(a, b, c, d, e) {
        if (bd(d, e, b, !0)) {
            if (e.reload) {
                if (!a) return;
                if (x["nav-promote"] == c.h) {
                    X(d, "5");
                    return
                }
            }
            if (e.redirect) md(a, b, c, e.redirect);
            else {
                if (a) {
                    var f = n(Wc, null, b, c, d, e),
                        g = "promote " + N(c.h);
                    J(g, f);
                    if (x["nav-promote"] == c.h) {
                        L(g, !0);
                        return
                    }
                }(a ? gc : V)(d, e, c, function() {
                    dd(d, e, b, !0)
                })
            }
        }
    }

    function jd(a, b, c, d, e) {
        var f = e.type == "multipart";
        if (!f) {
            if (!ed(d, e, b, !0)) {
                X(d, "4");
                return
            }
            if (e.reload) {
                if (!a) return;
                if (x["nav-promote"] == c.h) {
                    X(d, "5");
                    return
                }
            }
            if (e.redirect) {
                md(a, b, c, e.redirect);
                return
            }
        }
        var g = "promote " + N(c.h);
        if (a) {
            ld(d);
            if (x["nav-promote"] == c.h) {
                J(g, n(Xc, null, b, c, d, e));
                L(g, !0);
                return
            }
            kb(g)
        }
        g = a ? gc : V;
        try {
            g(d, f ? {} : e, c, function() {
                fd(d, e, b, !0)
            })
        } catch (h) {
            hd(a, b, c, d, h)
        }
    }

    function md(a, b, c, d) {
        a = a ? kd : gd;
        var e = {};
        r("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "), function(f) {
            e[f] = b[f]
        });
        a(d, e, c)
    }

    function $c(a, b, c, d, e) {
        a = {
            url: a,
            err: b,
            xhr: e
        };
        (c = Z((c || {}).onError, a)) && !d && (c = p("spferror", a));
        return c
    }

    function Sc(a, b, c, d, e) {
        a = {
            url: a,
            referer: b,
            previous: c
        };
        (d = Z((d || {}).onRequest, a)) && !e && (d = p("spfrequest", a));
        return d
    }

    function bd(a, b, c, d) {
        a = {
            url: a,
            part: b
        };
        (c = Z((c || {}).onPartProcess, a)) && !d && (c = p("spfpartprocess", a));
        return c
    }

    function dd(a, b, c, d) {
        a = {
            url: a,
            part: b
        };
        Z((c || {}).onPartDone, a) && !d && p("spfpartdone", a)
    }

    function ed(a, b, c, d) {
        a = {
            url: a,
            response: b
        };
        (c = Z((c || {}).onProcess, a)) && !d && (c = p("spfprocess", a));
        return c
    }

    function fd(a, b, c, d) {
        a = {
            url: a,
            response: b
        };
        Z((c || {}).onDone, a) && !d && p("spfdone", a)
    }

    function ld(a) {
        a = N(a);
        var b = Uc(),
            c = b[a];
        c && c.abort();
        delete b[a]
    }

    function Tc(a) {
        var b = Uc();
        a = a && N(a);
        for (var c in b) a != c && ld(c)
    }
    var Yc, nd = window.performance && (window.performance.clearResourceTimings || window.performance.webkitClearResourceTimings || window.performance.mozClearResourceTimings || window.performance.msClearResourceTimings || window.performance.oClearResourceTimings);
    Yc = nd ? n(nd, window.performance) : Aa;

    function Uc() {
        return "nav-prefetches" in x ? x["nav-prefetches"] : w("nav-prefetches", {})
    }

    function Pc() {
        w("nav-scroll-position", null);
        w("nav-scroll-url", null)
    }

    function Lc(a) {
        a = a || {};
        this.current = a.history && a.current ? a.current : window.location.href;
        this.history = !!a.history;
        this.h = a.h || "";
        this.position = a.position || null;
        this.i = a.i != void 0 ? a.i : window.location.href;
        this.reverse = !!a.reverse;
        this.s = !!a.s;
        this.type = a.type || ""
    };

    function od() {
        zb("js");
        zb("css");
        document.readyState == "complete" && (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", od, !1) : document.detachEvent && document.detachEvent("onreadystatechange", od))
    }
    document.addEventListener ? document.addEventListener("DOMContentLoaded", od, !1) : document.attachEvent && document.attachEvent("onreadystatechange", od);
    od();
    var pd = {
            init: function(a) {
                var b = !(typeof window.history.pushState != "function" && !cb().contentWindow.history.pushState);
                a = a || {};
                for (var c in Oa) A[c] = c in a ? a[c] : Oa[c];
                for (c in a) c in Oa || (A[c] = a[c]);
                if (b) {
                    c = $c;
                    if (!x["history-init"] && window.addEventListener) {
                        a = window.location.href;
                        window.addEventListener("popstate", db, !1);
                        w("history-init", !0);
                        w("history-callback", Qc);
                        w("history-error-callback", c);
                        w("history-listener", db);
                        w("history-url", a);
                        w("history-timestamp", q());
                        var d = {
                            "spf-referer": document.referrer
                        };
                        try {
                            $a(a, d)
                        } catch (e) {
                            c && c(a, e)
                        }
                    }!x["nav-init"] && document.addEventListener && (w("nav-init", !0), w("nav-init-time", q()), w("nav-counter", 0), document.addEventListener("click", Jc, !1), w("nav-listener", Jc), !A["experimental-prefetch-mousedown"] || "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || (document.addEventListener("mousedown", Mc, !1), w("nav-mousedown-listener", Mc)), document.addEventListener("scroll", Oc, !1), w("nav-scroll-listener", Oc))
                }
                return b
            },
            dispose: function() {
                typeof History !=
                    "undefined" && History.prototype.pushState && (Rc(), x["nav-init"] && (document.removeEventListener && (document.removeEventListener("click", x["nav-listener"], !1), document.removeEventListener("mousedown", x["nav-mousedown-listener"], !1), document.removeEventListener("scroll", x["nav-scroll-listener"], !1)), w("nav-listener", null), w("nav-mousedown-listener", null), w("nav-scroll-listener", null), w("nav-scroll-position", null), w("nav-scroll-url", null), w("nav-init", !1), w("nav-init-time", null), w("nav-counter", null)), x["history-init"] &&
                        (window.removeEventListener && window.removeEventListener("popstate", x["history-listener"], !1), w("history-init", !1), w("history-callback", null), w("history-error-callback", null), w("history-listener", null), w("history-url", null), w("history-timestamp", 0)));
                for (var a in A) delete A[a]
            },
            navigate: function(a, b) {
                a && (a = pb(a), Gc(a) ? Hc() ? Kc(a, b || {}, new Lc) : X(a, "1") : X(a, "9"))
            },
            load: function(a, b) {
                a = pb(a);
                gd(a, b || {}, new Lc)
            },
            prefetch: Nc,
            process: function(a, b) {
                function c(f, g, h, k) {
                    f == g && b && b(k)
                }
                var d = window.location.href;
                if (a.type == "multipart") {
                    a = a.parts;
                    var e = a.length - 1;
                    r(a, function(f, g) {
                        V(d, f, null, n(c, null, g, e))
                    })
                } else V(d, a, null, n(c, null, 0, 0))
            }
        },
        qd = {
            cache: {
                remove: Pa,
                clear: function() {
                    D({})
                }
            },
            script: {
                load: Ib,
                get: Kb,
                ready: Mb,
                done: function(a) {
                    Q[P("js", a)] = "";
                    sb("js")
                },
                require: Nb,
                declare: function(a, b) {
                    if (a) {
                        for (var c in a) U[c] = a[c];
                        if (b)
                            for (c in b) Ob[c] = b[c]
                    }
                },
                path: function(a) {
                    w("rsrc-p-js", a)
                },
                unload: Jb,
                ignore: function(a, b) {
                    a = v(a);
                    a = P("js", a.sort().join("|"));
                    fb(a, b)
                },
                unrequire: Pb,
                prefetch: Lb
            },
            style: {
                load: Tb,
                get: Ub,
                unload: function(a) {
                    vb("css", a)
                },
                path: function(a) {
                    w("rsrc-p-css", a)
                },
                prefetch: Vb
            }
        },
        l = this;
    l.spf = l.spf || {};
    var rd = l.spf,
        sd;
    for (sd in pd) rd[sd] = pd[sd];
    for (var td in qd)
        for (var ud in qd[td]) rd[td] = rd[td] || {}, rd[td][ud] = qd[td][ud];
    p("spfready");
}).call(this);