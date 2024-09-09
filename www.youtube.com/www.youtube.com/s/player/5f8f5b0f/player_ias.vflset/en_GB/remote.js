(function(g) {
    var window = this;
    'use strict';
    var d7 = function(a) {
            g.uk(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Xa()).toString(36));
            return a
        },
        e7 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.$ga(a.D, b, c)
        },
        Jqb = function(a) {
            if (a instanceof g.dn) return a;
            if (typeof a.Gm == "function") return a.Gm(!1);
            if (g.Qa(a)) {
                var b = 0,
                    c = new g.dn;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.p1;
                        if (b in a) return g.en(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Kqb = function(a, b, c) {
            if (g.Qa(a)) g.ic(a, b, c);
            else
                for (a = Jqb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        Lqb = function(a, b) {
            var c = [];
            Kqb(b, function(d) {
                try {
                    var e = g.Dp.prototype.B.call(this, d, !0)
                } catch (f) {
                    if (f == "Storage: Invalid value was encountered") return;
                    throw f;
                }
                e === void 0 ? c.push(d) : g.bma(e) && c.push(d)
            }, a);
            return c
        },
        Mqb = function(a, b) {
            Lqb(a, b).forEach(function(c) {
                g.Dp.prototype.remove.call(this, c)
            }, a)
        },
        Nqb = function(a) {
            if (a.oa) {
                if (a.oa.locationOverrideToken) return {
                    locationOverrideToken: a.oa.locationOverrideToken
                };
                if (a.oa.latitudeE7 != null && a.oa.longitudeE7 != null) return {
                    latitudeE7: a.oa.latitudeE7,
                    longitudeE7: a.oa.longitudeE7
                }
            }
            return null
        },
        Oqb = function(a, b) {
            g.Tb(a, b) || a.push(b)
        },
        Pqb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Qqb = function(a, b) {
            return g.xg(a, b)
        },
        Rqb = function(a) {
            try {
                return g.La.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        f7 = function(a) {
            if (g.La.JSON) try {
                return g.La.JSON.parse(a)
            } catch (b) {}
            return Rqb(a)
        },
        Sqb = function(a) {
            if (a.Wm && typeof a.Wm == "function") return a.Wm();
            if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
            if (typeof a === "string") return a.split("");
            if (g.Qa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.ug(a)
        },
        Tqb = function(a) {
            if (a.Co && typeof a.Co == "function") return a.Co();
            if (!a.Wm || typeof a.Wm != "function") {
                if (typeof Map !== "undefined" && a instanceof Map) return Array.from(a.keys());
                if (!(typeof Set !== "undefined" && a instanceof Set)) {
                    if (g.Qa(a) || typeof a === "string") {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.vg(a)
                }
            }
        },
        Uqb = function(a, b) {
            if (a.forEach && typeof a.forEach == "function") a.forEach(b, void 0);
            else if (g.Qa(a) || typeof a === "string") Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = Tqb(a), d = Sqb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        Vqb = function(a, b, c, d) {
            var e = new g.mk(null);
            a && g.nk(e, a);
            b && g.ok(e, b);
            c && g.pk(e, c);
            d && (e.B = d);
            return e
        },
        Wqb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/channel/opened", g.ib("channel_type"))
        },
        Xqb = function(a, b) {
            a.j.Cm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Yqb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/channel/closed", g.ib("channel_type"))
        },
        Zqb = function(a, b) {
            a.j.Cm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        $qb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/channel/message_received", g.ib("channel_type"))
        },
        arb = function(a, b) {
            a.j.Cm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        brb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/channel/error", g.ib("channel_type"))
        },
        crb = function(a, b) {
            a.j.Cm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        drb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        erb = function() {
            var a = g7();
            this.j = a;
            a.lk("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        frb = function(a, b) {
            return new g.cp(a, b)
        },
        h7 = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        i7 = function(a, b) {
            this.B = {};
            this.j = [];
            this.Rv = this.size = 0;
            var c = arguments.length;
            if (c > 1) {
                if (c % 2) throw Error("Uneven number of arguments");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof i7)
                    for (c = a.Co(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        },
        j7 = function(a) {
            if (a.size != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    h7(a.B, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.size != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], h7(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        },
        jrb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new i7;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = a.ownerObfuscatedGaiaId || "", this.theme = a.theme || "u", grb(this, a.capabilities || ""), hrb(this, a.compatibleSenderThemes || ""), irb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        grb = function(a, b) {
            a.capabilities.clear();
            g.jn(b.split(","), g.Wa(Qqb, krb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        hrb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.jn(b.split(","), g.Wa(Qqb, lrb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        irb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        k7 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        l7 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        mrb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        nrb = function(a) {
            return new k7(a)
        },
        orb = function(a) {
            return Array.isArray(a) ? g.Al(a, nrb) : []
        },
        m7 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        prb = function(a) {
            return Array.isArray(a) ? "[" + g.Al(a, m7).join(",") + "]" : "null"
        },
        qrb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = Math.random() * 16 | 0;
                    return (a == "x" ? b : b & 3 | 8).toString(16)
                })
        },
        rrb = function(a) {
            return g.Al(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        srb = function(a, b) {
            return g.Rb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        n7 = function(a, b) {
            return g.Rb(a, function(c) {
                return l7(c, b)
            })
        },
        trb = function() {
            var a = (0, g.Fs)();
            a && Mqb(a, a.j.Gm(!0))
        },
        o7 = function() {
            var a = g.Is("yt-remote-connected-devices") || [];
            g.fc(a);
            return a
        },
        urb = function(a) {
            if (a.length == 0) return [];
            var b = a[0].indexOf("#"),
                c = b == -1 ? a[0] : a[0].substring(0, b);
            return g.Al(a, function(d, e) {
                return e == 0 ? d : d.substring(c.length)
            })
        },
        vrb = function(a) {
            g.Hs("yt-remote-connected-devices", a, 86400)
        },
        p7 = function() {
            if (wrb) return wrb;
            var a = g.Is("yt-remote-device-id");
            a || (a = qrb(), g.Hs("yt-remote-device-id", a, 31536E3));
            for (var b = o7(), c = 1, d = a; g.Tb(b, d);) c++, d = a + "#" + c;
            return wrb = d
        },
        xrb = function() {
            var a = o7(),
                b = p7();
            g.Ks() && g.hc(a, b);
            a = urb(a);
            if (a.length == 0) try {
                g.Kr("remote_sid")
            } catch (c) {} else try {
                g.Ir("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        yrb = function() {
            return g.Is("yt-remote-session-browser-channel")
        },
        zrb = function() {
            return g.Is("yt-remote-local-screens") || []
        },
        Arb = function() {
            g.Hs("yt-remote-lounge-token-expiration", !0, 86400)
        },
        Brb = function(a) {
            a.length > 5 && (a = a.slice(a.length - 5));
            var b = g.Al(zrb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Al(a, function(d) {
                    return d.loungeToken
                });
            g.Bl(c, function(d) {
                return !g.Tb(b, d)
            }) && Arb();
            g.Hs("yt-remote-local-screens", a, 31536E3)
        },
        q7 = function(a) {
            a || (g.Js("yt-remote-session-screen-id"), g.Js("yt-remote-session-video-id"));
            xrb();
            a = o7();
            g.Vb(a, p7());
            vrb(a)
        },
        Crb = function() {
            if (!r7) {
                var a = g.Jp();
                a && (r7 = new g.Ap(a))
            }
        },
        Drb = function() {
            Crb();
            return r7 ? !!r7.get("yt-remote-use-staging-server") : !1
        },
        s7 = function(a, b) {
            g.gv[a] = !0;
            var c = g.ev();
            c && c.publish.apply(c, arguments);
            g.gv[a] = !1
        },
        Erb = function() {},
        g7 = function() {
            if (!t7) {
                t7 = new g.zi(new Erb);
                var a = g.ur("client_streamz_web_flush_count", -1);
                a !== -1 && (t7.C = a)
            }
            return t7
        },
        Frb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        Grb = function(a) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + a) != -1 || document.currentScript.src.indexOf("&" + a) != -1)
        },
        Hrb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        u7 = function(a) {
            a.length ? Irb(a.shift(), function() {
                u7(a)
            }) : Jrb()
        },
        Krb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        Irb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Yf(d, g.xq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        Lrb = function() {
            var a = Frb(),
                b = [];
            if (a > 1) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        Jrb = function() {
            var a = Hrb();
            a && a(!1, "No cast extension found")
        },
        Nrb = function() {
            if (Mrb) {
                var a = 2,
                    b = Hrb(),
                    c = function() {
                        a--;
                        a == 0 && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                Irb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", Jrb, c)
            }
        },
        Orb = function() {
            Nrb();
            var a = Lrb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            u7(a)
        },
        Qrb = function() {
            Nrb();
            var a = Lrb();
            a.push.apply(a, g.x(Prb.map(Krb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            u7(a)
        },
        v7 = function(a, b, c) {
            g.O.call(this);
            this.K = c != null ? (0, g.Va)(a, c) : a;
            this.ej = b;
            this.G = (0, g.Va)(this.w5, this);
            this.j = !1;
            this.B = 0;
            this.C = this.qd = null;
            this.D = []
        },
        w7 = function(a, b, c) {
            g.O.call(this);
            this.D = c != null ? a.bind(c) : a;
            this.ej = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.qd = null
        },
        Rrb = function(a) {
            a.qd = g.xi(function() {
                a.qd = null;
                a.j && !a.B && (a.j = !1, Rrb(a))
            }, a.ej);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        x7 = function() {},
        Srb = function() {
            g.Jh.call(this, "p")
        },
        Trb = function() {
            g.Jh.call(this, "o")
        },
        Vrb = function() {
            return Urb = Urb || new g.ai
        },
        Wrb = function(a) {
            g.Jh.call(this, "serverreachability", a)
        },
        y7 = function(a) {
            var b = Vrb();
            b.dispatchEvent(new Wrb(b, a))
        },
        Xrb = function(a) {
            g.Jh.call(this, "statevent", a)
        },
        z7 = function(a) {
            var b = Vrb();
            b.dispatchEvent(new Xrb(b, a))
        },
        Yrb = function(a, b, c, d) {
            g.Jh.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        A7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.La.setTimeout(function() {
                a()
            }, b)
        },
        B7 = function() {},
        C7 = function(a, b, c, d) {
            this.C = a;
            this.D = b;
            this.Sb = c;
            this.Nb = d || 1;
            this.rb = new g.zk(this);
            this.fb = 45E3;
            this.Ma = null;
            this.K = !1;
            this.Y = this.Xa = this.Z = this.Qa = this.Ba = this.qb = this.oa = null;
            this.qa = [];
            this.j = null;
            this.N = 0;
            this.G = this.Da = null;
            this.Kb = -1;
            this.Ka = !1;
            this.Wa = 0;
            this.Va = null;
            this.Hb = this.Ua = this.Cb = this.Ga = !1;
            this.B = new Zrb
        },
        Zrb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        asb = function(a, b, c) {
            a.Qa = 1;
            a.Z = d7(b.clone());
            a.Y = c;
            a.Ga = !0;
            $rb(a, null)
        },
        $rb = function(a, b) {
            a.Ba = Date.now();
            D7(a);
            a.Xa = a.Z.clone();
            e7(a.Xa, "t", a.Nb);
            a.N = 0;
            var c = a.C.Qa;
            a.B = new Zrb;
            a.j = bsb(a.C, c ? b : null, !a.Y);
            a.Wa > 0 && (a.Va = new w7((0, g.Va)(a.BV, a, a.j), a.Wa));
            a.rb.listen(a.j, "readystatechange", a.y5);
            b = a.Ma ? g.Cg(a.Ma) : {};
            a.Y ? (a.Da || (a.Da = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Xa, a.Da, a.Y, b)) : (a.Da = "GET", a.j.send(a.Xa, a.Da, null, b));
            y7(1)
        },
        dsb = function(a) {
            if (!csb(a)) return g.$i(a.j);
            var b = g.aj(a.j);
            if (b === "") return "";
            var c = "",
                d = b.length,
                e = g.Yi(a.j) == 4;
            if (!a.B.C) {
                if (typeof TextDecoder === "undefined") return E7(a), F7(a), "";
                a.B.C = new g.La.TextDecoder
            }
            for (var f = 0; f < d; f++) a.B.B = !0, c += a.B.C.decode(b[f], {
                stream: !(e && f == d - 1)
            });
            b.length = 0;
            a.B.j += c;
            a.N = 0;
            return a.B.j
        },
        csb = function(a) {
            return a.j ? a.Da == "GET" && a.Qa != 2 && a.C.gf : !1
        },
        gsb = function(a, b) {
            var c = a.N,
                d = b.indexOf("\n", c);
            if (d == -1) return esb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return fsb;
            d += 1;
            if (d + c > b.length) return esb;
            b = b.slice(d, d + c);
            a.N = d + c;
            return b
        },
        D7 = function(a) {
            a.qb = Date.now() + a.fb;
            hsb(a, a.fb)
        },
        hsb = function(a, b) {
            if (a.oa != null) throw Error("WatchDog timer not null");
            a.oa = A7((0, g.Va)(a.x5, a), b)
        },
        isb = function(a) {
            a.oa && (g.La.clearTimeout(a.oa), a.oa = null)
        },
        F7 = function(a) {
            a.C.Og() || a.Ka || jsb(a.C, a)
        },
        E7 = function(a) {
            isb(a);
            g.ig(a.Va);
            a.Va = null;
            a.rb.removeAll();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        rsb = function(a, b) {
            try {
                var c = a.C;
                if (c.Xh != 0 && (c.j == a || ksb(c.B, a)))
                    if (!a.Ua && ksb(c.B, a) && c.Xh == 3) {
                        try {
                            var d = c.hf.j.parse(b)
                        } catch (y) {
                            d = null
                        }
                        if (Array.isArray(d) && d.length == 3) {
                            var e = d;
                            if (e[0] == 0) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) G7(c), H7(c);
                                        else break a;
                                    lsb(c);
                                    z7(18)
                                }
                            }
                            else c.Je = e[1], 0 < c.Je - c.Va && e[2] < 37500 && c.Ua && c.qa == 0 && !c.oa && (c.oa = A7((0, g.Va)(c.z5, c), 6E3));
                            if (msb(c.B) <= 1 && c.Sc) {
                                try {
                                    c.Sc()
                                } catch (y) {}
                                c.Sc = void 0
                            }
                        } else I7(c, 11)
                    } else if ((a.Ua || c.j == a) && G7(c), !g.sb(b))
                    for (e = c.hf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Va = f[0];
                        f = f[1];
                        if (c.Xh == 2)
                            if (f[0] == "c") {
                                c.D = f[1];
                                c.Nb = f[2];
                                var h = f[3];
                                h != null && (c.CV = h);
                                var l = f[5];
                                l != null && typeof l === "number" && l > 0 && (c.Wa = 1.5 * l);
                                d = c;
                                var m = a.HQ();
                                if (m) {
                                    var n = g.bj(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.tb(n, "spdy") || g.tb(n, "quic") || g.tb(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (nsb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.bj(m, "X-HTTP-Session-Id");
                                        q && (d.ze = q, g.uk(d.Ma, d.Ga, q))
                                    }
                                }
                                c.Xh = 3;
                                c.G && c.G.JV();
                                c.yc && (c.Ed = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.Ad = osb(d, d.Qa ? d.Nb : null, d.Sb);
                                if (r.Ua) {
                                    psb(d.B,
                                        r);
                                    var t = r,
                                        u = d.Wa;
                                    u && t.setTimeout(u);
                                    t.oa && (isb(t), D7(t));
                                    d.j = r
                                } else qsb(d);
                                c.C.length > 0 && J7(c)
                            } else f[0] != "stop" && f[0] != "close" || I7(c, 7);
                        else c.Xh == 3 && (f[0] == "stop" || f[0] == "close" ? f[0] == "stop" ? I7(c, 7) : c.disconnect() : f[0] != "noop" && c.G && c.G.IV(f), c.qa = 0)
                    }
                y7(4)
            } catch (y) {}
        },
        ssb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        tsb = function(a) {
            this.G = a || 10;
            g.La.PerformanceNavigationTiming ? (a = g.La.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(g.La.chrome && g.La.chrome.loadTimes && g.La.chrome.loadTimes() && g.La.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            this.D > 1 && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        usb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        msb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        ksb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        nsb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        psb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        vsb = function(a) {
            if (a.B != null) return a.C.concat(a.B.qa);
            if (a.j != null && a.j.size !== 0) {
                var b = a.C;
                a = g.w(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.qa);
                return b
            }
            return g.Yb(a.C)
        },
        wsb = function(a, b) {
            var c = new B7;
            if (g.La.Image) {
                var d = new Image;
                d.onload = g.Wa(K7, c, "TestLoadImage: loaded", !0, b, d);
                d.onerror = g.Wa(K7, c, "TestLoadImage: error", !1, b, d);
                d.onabort = g.Wa(K7, c, "TestLoadImage: abort", !1, b, d);
                d.ontimeout = g.Wa(K7, c, "TestLoadImage: timeout", !1, b, d);
                g.La.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        xsb = function(a, b) {
            var c = new B7,
                d = new AbortController,
                e = setTimeout(function() {
                    d.abort();
                    K7(c, "TestPingServer: timeout", !1, b)
                }, 1E4);
            fetch(a, {
                signal: d.signal
            }).then(function(f) {
                clearTimeout(e);
                f.ok ? K7(c, "TestPingServer: ok", !0, b) : K7(c, "TestPingServer: server error", !1, b)
            }).catch(function() {
                clearTimeout(e);
                K7(c, "TestPingServer: error", !1, b)
            })
        },
        K7 = function(a, b, c, d, e) {
            try {
                e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c)
            } catch (f) {}
        },
        ysb = function() {
            this.j = new x7
        },
        zsb = function(a, b, c) {
            var d = c || "";
            try {
                Uqb(a, function(e, f) {
                    var h = e;
                    g.Ra(e) && (h = g.Bi(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        L7 = function(a, b, c) {
            return c && c.x$ ? c.x$[a] || b : b
        },
        Asb = function(a) {
            this.C = [];
            this.Nb = this.Ad = this.Ma = this.Sb = this.j = this.ze = this.Ga = this.Ka = this.N = this.Kb = this.Y = null;
            this.Uf = this.Xa = 0;
            this.zf = L7("failFast", !1, a);
            this.Ua = this.oa = this.Z = this.K = this.G = null;
            this.wc = !0;
            this.Je = this.Va = -1;
            this.Hb = this.qa = this.Ba = 0;
            this.yf = L7("baseRetryDelayMs", 5E3, a);
            this.Vf = L7("retryDelaySeedMs", 1E4, a);
            this.dh = L7("forwardChannelMaxRetries", 2, a);
            this.Cd = L7("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ge = a && a.Aqa || void 0;
            this.Xf = a && a.ppa || void 0;
            this.gf = a && a.yqa || !1;
            this.Wa = void 0;
            this.Qa = a && a.Zea ||
                !1;
            this.D = "";
            this.B = new tsb(a && a.qna);
            this.hf = new ysb;
            this.rb = a && a.Hna || !1;
            this.qb = a && a.wna || !1;
            this.rb && this.qb && (this.qb = !1);
            this.Wf = a && a.gna || !1;
            a && a.Kna && (this.wc = !1);
            this.yc = !this.rb && this.wc && a && a.una || !1;
            this.hd = void 0;
            a && a.K_ && a.K_ > 0 && (this.hd = a.K_);
            this.Sc = void 0;
            this.Ed = 0;
            this.fb = !1;
            this.Cb = this.Da = null
        },
        H7 = function(a) {
            a.j && (Bsb(a), a.j.cancel(), a.j = null)
        },
        Csb = function(a) {
            H7(a);
            a.Z && (g.La.clearTimeout(a.Z), a.Z = null);
            G7(a);
            a.B.cancel();
            a.K && (typeof a.K === "number" && g.La.clearTimeout(a.K), a.K = null)
        },
        J7 = function(a) {
            usb(a.B) || a.K || (a.K = !0, g.ni(a.FV, a), a.Ba = 0)
        },
        Esb = function(a, b) {
            if (msb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.qa.concat(a.C), !0;
            if (a.Xh == 1 || a.Xh == 2 || a.Ba >= (a.zf ? 0 : a.dh)) return !1;
            a.K = A7((0, g.Va)(a.FV, a, b), Dsb(a, a.Ba));
            a.Ba++;
            return !0
        },
        Gsb = function(a, b) {
            var c;
            b ? c = b.Sb : c = a.Xa++;
            var d = a.Ma.clone();
            g.uk(d, "SID", a.D);
            g.uk(d, "RID", c);
            g.uk(d, "AID", a.Va);
            M7(a, d);
            a.N && a.Y && g.yk(d, a.N, a.Y);
            c = new C7(a, a.D, c, a.Ba + 1);
            a.N === null && (c.Ma = a.Y);
            b && (a.C = b.qa.concat(a.C));
            b = Fsb(a, c, 1E3);
            c.setTimeout(Math.round(a.Cd * .5) + Math.round(a.Cd * .5 * Math.random()));
            nsb(a.B, c);
            asb(c, d, b)
        },
        M7 = function(a, b) {
            a.Ka && g.pg(a.Ka, function(c, d) {
                g.uk(b, d, c)
            });
            a.G && Uqb({}, function(c, d) {
                g.uk(b, d, c)
            })
        },
        Fsb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.Va)(a.G.A5, a.G, a) : null;
            a: {
                for (var e = a.C, f = -1;;) {
                    var h = ["count=" + c];
                    f == -1 ? c > 0 ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                    for (var l = !0, m = 0; m < c; m++) {
                        var n = e[m].j,
                            p = e[m].map;
                        n -= f;
                        if (n < 0) f = Math.max(0, e[m].j - 100), l = !1;
                        else try {
                            zsb(p, h, "req" + n + "_")
                        } catch (q) {
                            d && d(p)
                        }
                    }
                    if (l) {
                        d = h.join("&");
                        break a
                    }
                }
                d = void 0
            }
            a = a.C.splice(0, c);
            b.qa = a;
            return d
        },
        qsb = function(a) {
            a.j || a.Z || (a.Hb = 1, g.ni(a.EV, a), a.qa = 0)
        },
        lsb = function(a) {
            if (a.j || a.Z || a.qa >= 3) return !1;
            a.Hb++;
            a.Z = A7((0, g.Va)(a.EV, a), Dsb(a, a.qa));
            a.qa++;
            return !0
        },
        Bsb = function(a) {
            a.Da != null && (g.La.clearTimeout(a.Da), a.Da = null)
        },
        Hsb = function(a) {
            a.j = new C7(a, a.D, "rpc", a.Hb);
            a.N === null && (a.j.Ma = a.Y);
            a.j.Wa = 0;
            var b = a.Ad.clone();
            g.uk(b, "RID", "rpc");
            g.uk(b, "SID", a.D);
            g.uk(b, "AID", a.Va);
            g.uk(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.hd && g.uk(b, "TO", a.hd);
            g.uk(b, "TYPE", "xmlhttp");
            M7(a, b);
            a.N && a.Y && g.yk(b, a.N, a.Y);
            a.Wa && a.j.setTimeout(a.Wa);
            var c = a.j;
            a = a.Nb;
            c.Qa = 1;
            c.Z = d7(b.clone());
            c.Y = null;
            c.Ga = !0;
            $rb(c, a)
        },
        G7 = function(a) {
            a.oa != null && (g.La.clearTimeout(a.oa), a.oa = null)
        },
        jsb = function(a, b) {
            var c = null;
            if (a.j == b) {
                G7(a);
                Bsb(a);
                a.j = null;
                var d = 2
            } else if (ksb(a.B, b)) c = b.qa, psb(a.B, b), d = 1;
            else return;
            if (a.Xh != 0)
                if (b.K)
                    if (d == 1) {
                        c = b.Y ? b.Y.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = Vrb();
                        d.dispatchEvent(new Yrb(d, c, b, e));
                        J7(a)
                    } else qsb(a);
            else {
                var f = b.Kb;
                e = b.getLastError();
                if (e == 3 || e == 0 && f > 0 || !(d == 1 && Esb(a, b) || d == 2 && lsb(a))) switch (c && c.length > 0 && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        I7(a, 5);
                        break;
                    case 4:
                        I7(a, 10);
                        break;
                    case 3:
                        I7(a, 6);
                        break;
                    default:
                        I7(a, 2)
                }
            }
        },
        Dsb = function(a, b) {
            var c = a.yf + Math.floor(Math.random() *
                a.Vf);
            a.isActive() || (c *= 2);
            return c * b
        },
        I7 = function(a, b) {
            if (b == 2) {
                var c = (0, g.Va)(a.gfa, a),
                    d = a.Xf,
                    e = !d;
                d = new g.mk(d || "//www.google.com/images/cleardot.gif");
                g.La.location && g.La.location.protocol == "http" || g.nk(d, "https");
                d7(d);
                e ? wsb(d.toString(), c) : xsb(d.toString(), c)
            } else z7(2);
            a.Xh = 0;
            a.G && a.G.HV(b);
            Isb(a);
            Csb(a)
        },
        Isb = function(a) {
            a.Xh = 0;
            a.Cb = [];
            if (a.G) {
                var b = vsb(a.B);
                if (b.length != 0 || a.C.length != 0) g.Zb(a.Cb, b), g.Zb(a.Cb, a.C), a.B.C.length = 0, g.Yb(a.C), a.C.length = 0;
                a.G.GV()
            }
        },
        Jsb = function(a) {
            if (a.Xh == 0) return a.Cb;
            var b = [];
            g.Zb(b, vsb(a.B));
            g.Zb(b, a.C);
            return b
        },
        osb = function(a, b, c) {
            var d = g.vk(c);
            d.j != "" ? (b && g.ok(d, b + "." + d.j), g.pk(d, d.C)) : (d = g.La.location, d = Vqb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.ze;
            b && c && g.uk(d, b, c);
            g.uk(d, "VER", a.CV);
            M7(a, d);
            return d
        },
        bsb = function(a, b, c) {
            if (b && !a.Qa) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.gf && !a.ge ? new g.Vi(new g.ik({
                d3: c
            })) : new g.Vi(a.ge);
            b.K = a.Qa;
            return b
        },
        Ksb = function() {},
        Lsb = function() {},
        O7 = function(a, b) {
            g.ai.call(this);
            this.j = new Asb(b);
            this.G = a;
            this.B = b && b.raa || null;
            a = b && b.qaa || null;
            b && b.ona && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.Y = a;
            a = b && b.Poa || null;
            b && b.V_ && (a ? a["X-WebChannel-Content-Type"] = b.V_ : a = {
                "X-WebChannel-Content-Type": b.V_
            });
            b && b.UX && (a ? a["X-WebChannel-Client-Profile"] = b.UX : a = {
                "X-WebChannel-Client-Profile": b.UX
            });
            this.j.Kb = a;
            (a = b && b.Ooa) && !g.sb(a) && (this.j.N = a);
            this.K = b && b.Zea || !1;
            this.D = b && b.Tpa || !1;
            (b = b && b.u$) && !g.sb(b) && (this.j.Ga = b, g.wg(this.B, b) && (a =
                this.B, b in a && delete a[b]));
            this.C = new N7(this)
        },
        Msb = function(a) {
            Srb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.tg(b)) ? g.Ag(b, this.j) : b : this.data = a
        },
        Nsb = function(a) {
            Trb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        N7 = function(a) {
            this.j = a
        },
        Osb = function(a, b) {
            this.B = a;
            this.j = b
        },
        Psb = function(a) {
            return Jsb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? Rqb(b) : b) : c = b;
                return c
            })
        },
        P7 = function(a, b) {
            if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
            return g.La.setTimeout(function() {
                a()
            }, b)
        },
        R7 = function(a) {
            Q7.dispatchEvent(new Qsb(Q7, a))
        },
        Qsb = function(a) {
            g.Jh.call(this, "statevent", a)
        },
        S7 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.zk(this);
            this.G = new g.wi;
            this.G.setInterval(250)
        },
        Ssb = function(a, b, c) {
            a.LI = 1;
            a.zD = d7(b.clone());
            a.mw = c;
            a.Ga = !0;
            Rsb(a, null)
        },
        Tsb = function(a, b, c, d, e) {
            a.LI = 1;
            a.zD = d7(b.clone());
            a.mw = null;
            a.Ga = c;
            e && (a.B2 = !1);
            Rsb(a, d)
        },
        Rsb = function(a, b) {
            a.CD = Date.now();
            Usb(a);
            a.KI = a.zD.clone();
            e7(a.KI, "t", a.K);
            a.NI = 0;
            a.xj = a.j.SN(a.j.DD() ? b : null);
            a.QN > 0 && (a.JI = new w7((0, g.Va)(a.KV, a, a.xj), a.QN));
            a.C.listen(a.xj, "readystatechange", a.C5);
            b = a.jw ? g.Cg(a.jw) : {};
            a.mw ? (a.MI = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.xj.send(a.KI, a.MI, a.mw, b)) : (a.MI = "GET", a.B2 && !g.Yg && (b.Connection = "close"), a.xj.send(a.KI, a.MI, null, b));
            a.j.Fs(1)
        },
        Xsb = function(a, b) {
            var c = a.NI,
                d = b.indexOf("\n", c);
            if (d == -1) return Vsb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Wsb;
            d += 1;
            if (d + c > b.length) return Vsb;
            b = b.slice(d, d + c);
            a.NI = d + c;
            return b
        },
        Usb = function(a) {
            a.RN = Date.now() + a.B;
            Ysb(a, a.B)
        },
        Ysb = function(a, b) {
            if (a.Gz != null) throw Error("WatchDog timer not null");
            a.Gz = P7((0, g.Va)(a.B5, a), b)
        },
        Zsb = function(a) {
            a.Gz && (g.La.clearTimeout(a.Gz), a.Gz = null)
        },
        $sb = function(a) {
            a.j.Og() || a.AD || a.j.UN(a)
        },
        T7 = function(a) {
            Zsb(a);
            g.ig(a.JI);
            a.JI = null;
            a.G.stop();
            a.C.removeAll();
            if (a.xj) {
                var b = a.xj;
                a.xj = null;
                b.abort();
                b.dispose()
            }
            a.A3 && (a.A3 = null)
        },
        atb = function(a, b) {
            try {
                a.j.LV(a, b), a.j.Fs(4)
            } catch (c) {}
        },
        ctb = function(a, b, c, d, e) {
            if (d == 0) c(!1);
            else {
                var f = e || 0;
                d--;
                btb(a, b, function(h) {
                    h ? c(!0) : g.La.setTimeout(function() {
                        ctb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        btb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    U7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    U7(d), c(!1)
                } catch (e) {}
            };
            g.La.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        U7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        dtb = function(a) {
            this.j = a;
            this.B = new x7
        },
        etb = function(a) {
            var b = V7(a.j, a.HE, "/mail/images/cleardot.gif");
            d7(b);
            ctb(b.toString(), 5E3, (0, g.Va)(a.O7, a), 3, 2E3);
            a.Fs(1)
        },
        ftb = function(a) {
            var b = a.j.K;
            b != null ? (R7(5), b ? (R7(11), W7(a.j, a, !1)) : (R7(12), W7(a.j, a, !0))) : (a.yl = new S7(a), a.yl.jw = a.TN, b = a.j, b = V7(b, b.DD() ? a.OI : null, a.VN), R7(5), e7(b, "TYPE", "xmlhttp"), Tsb(a.yl, b, !1, a.OI, !1))
        },
        gtb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new x7;
            this.Y = a || null;
            this.K = b != null ? b : null;
            this.Z = c || !1
        },
        htb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        itb = function(a, b, c, d) {
            g.Jh.call(this, "timingevent", a);
            this.size = b;
            this.rtt = c;
            this.retries = d
        },
        jtb = function(a) {
            g.Jh.call(this, "serverreachability", a)
        },
        ltb = function(a) {
            a.D5(1, 0);
            a.QI = V7(a, null, a.XN);
            ktb(a)
        },
        mtb = function(a) {
            a.Pt && (a.Pt.abort(), a.Pt = null);
            a.Yg && (a.Yg.cancel(), a.Yg = null);
            a.Er && (g.La.clearTimeout(a.Er), a.Er = null);
            X7(a);
            a.Bk && (a.Bk.cancel(), a.Bk = null);
            a.Bt && (g.La.clearTimeout(a.Bt), a.Bt = null)
        },
        ntb = function(a, b) {
            if (a.j == 0) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new htb(a.E5++, b));
            a.j != 2 && a.j != 3 || ktb(a)
        },
        otb = function(a) {
            var b = 0;
            a.Yg && b++;
            a.Bk && b++;
            return b
        },
        ktb = function(a) {
            a.Bk || a.Bt || (a.Bt = P7((0, g.Va)(a.PV, a), 0), a.Iz = 0)
        },
        rtb = function(a, b) {
            if (a.j == 1) {
                if (!b) {
                    a.FD = Math.floor(Math.random() * 1E5);
                    b = a.FD++;
                    var c = new S7(a, "", b);
                    c.jw = a.Gp;
                    var d = ptb(a),
                        e = a.QI.clone();
                    g.uk(e, "RID", b);
                    g.uk(e, "CVER", "1");
                    Y7(a, e);
                    Ssb(c, e, d);
                    a.Bk = c;
                    a.j = 2
                }
            } else a.j == 3 && (b ? qtb(a, b) : a.B.length == 0 || a.Bk || qtb(a))
        },
        qtb = function(a, b) {
            if (b)
                if (a.nw > 6) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.FD - 1;
                    b = ptb(a)
                } else c = b.N, b = b.mw;
            else c = a.FD++, b = ptb(a);
            var d = a.QI.clone();
            g.uk(d, "SID", a.D);
            g.uk(d, "RID", c);
            g.uk(d, "AID", a.Jz);
            Y7(a, d);
            c = new S7(a, a.D, c, a.Iz + 1);
            c.jw = a.Gp;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Bk = c;
            Ssb(c, d, b)
        },
        Y7 = function(a, b) {
            a.Ui && (a = a.Ui.TV()) && g.pg(a, function(c, d) {
                g.uk(b, d, c)
            })
        },
        ptb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (a.nw > 6 && b > 0) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    BG: void 0
                }, f++) {
                e.BG = a.B[f].j;
                var h = a.B[f].map;
                e.BG = a.nw <= 6 ? f : e.BG - d;
                try {
                    g.pg(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.BG + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.BG + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        stb = function(a) {
            a.Yg || a.Er || (a.N = 1, a.Er = P7((0, g.Va)(a.OV, a), 0), a.Hz = 0)
        },
        utb = function(a) {
            if (a.Yg || a.Er || a.Hz >= 3) return !1;
            a.N++;
            a.Er = P7((0, g.Va)(a.OV, a), ttb(a, a.Hz));
            a.Hz++;
            return !0
        },
        W7 = function(a, b, c) {
            a.BN = a.K == null ? c : !a.K;
            a.Hp = b.Dr;
            a.Z || ltb(a)
        },
        X7 = function(a) {
            a.ow != null && (g.La.clearTimeout(a.ow), a.ow = null)
        },
        ttb = function(a, b) {
            var c = 5E3 + Math.floor(Math.random() * 1E4);
            a.isActive() || (c *= 2);
            return c * b
        },
        Z7 = function(a, b) {
            if (b == 2 || b == 9) {
                var c = null;
                a.Ui && (c = null);
                var d = (0, g.Va)(a.ffa, a);
                c || (c = new g.mk("//www.google.com/images/cleardot.gif"), d7(c));
                btb(c.toString(), 1E4, d)
            } else R7(2);
            vtb(a, b)
        },
        vtb = function(a, b) {
            a.j = 0;
            a.Ui && a.Ui.QV(b);
            wtb(a);
            mtb(a)
        },
        wtb = function(a) {
            a.j = 0;
            a.Hp = -1;
            if (a.Ui)
                if (a.C.length == 0 && a.B.length == 0) a.Ui.YN();
                else {
                    var b = g.Yb(a.C),
                        c = g.Yb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Ui.YN(b, c)
                }
        },
        V7 = function(a, b, c) {
            var d = g.vk(c);
            if (d.j != "") b && g.ok(d, b + "." + d.j), g.pk(d, d.C);
            else {
                var e = window.location;
                d = Vqb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.ED && g.pg(a.ED, function(f, h) {
                g.uk(d, h, f)
            });
            g.uk(d, "VER", a.nw);
            Y7(a, d);
            return d
        },
        xtb = function() {},
        ytb = function() {
            this.j = [];
            this.B = []
        },
        ztb = function(a) {
            g.Jh.call(this, "channelMessage");
            this.message = a
        },
        Atb = function(a) {
            g.Jh.call(this, "channelError");
            this.error = a
        },
        Btb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        $7 = function(a, b) {
            g.O.call(this);
            this.j = new g.Zo(this.Vca, 0, this);
            g.P(this, this.j);
            this.ej = 5E3;
            this.B = 0;
            if (typeof a === "function") b && (a = (0, g.Va)(a, b));
            else if (a && typeof a.handleEvent === "function") a = (0, g.Va)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        Ctb = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            d = d === void 0 ? function() {
                return ""
            } : d;
            e = e === void 0 ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.zp;
            this.B = new $7(this.oea, this);
            this.j = null;
            this.oa = !1;
            this.K = null;
            this.Y = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Qa = c;
            this.qa = d;
            this.Ua = e;
            this.Ma = new Wqb;
            this.Da = new Yqb;
            this.Ka = new $qb;
            this.Ga = new brb;
            this.Va = new drb;
            this.Xa = new erb
        },
        Dtb = function(a) {
            if (a.j) {
                var b = a.qa(),
                    c = a.j.Gp || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Gp = c
            }
        },
        a8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Ki(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Li(a) || "";
            a = g.zb();
            a.search("MSIE") >= 0 && (a = a.match(/MSIE ([\d.]+)/)[1], g.xb(a, "10.0") < 0 && (this.B = !1))
        },
        b8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.Ri(c + b, {})
        },
        Etb = function(a, b) {
            g.ai.call(this);
            var c = this;
            this.Gd = a();
            this.Gd.subscribe("handlerOpened", this.G5, this);
            this.Gd.subscribe("handlerClosed", this.onClosed, this);
            this.Gd.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Gd.subscribe("handlerMessage", this.onMessage, this);
            this.j = b
        },
        Ftb = function(a, b, c) {
            var d = this;
            c = c === void 0 ? function() {
                return ""
            } : c;
            var e = e === void 0 ? new Lsb : e;
            var f = f === void 0 ? new g.zp : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.Y = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new $7(function() {
                d.C.isActive();
                var h;
                ((h = d.channel) == null ? void 0 : msb((new Osb(h, h.j)).j.B)) === 0 && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.oa = !1;
            this.logger = null;
            this.qa = [];
            this.Cg = void 0;
            this.Ma = new Wqb;
            this.Da = new Yqb;
            this.Ka = new $qb;
            this.Ga = new brb
        },
        Gtb = function(a) {
            g.Rh(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.w(a.qa), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.qa = [];
                a.publish("webChannelOpened");
                Xqb(a.Ma, "WEB_CHANNEL")
            });
            g.Rh(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.publish("webChannelClosed");
                var b, c = (b = a.channel) == null ? void 0 : Psb(new Osb(b, b.j));
                c && (a.qa = [].concat(g.x(c)));
                Zqb(a.Da, "WEB_CHANNEL")
            });
            g.Rh(a.channel, "p", function(b) {
                var c = b.data;
                c[0] === "gracefulReconnect" ? (a.C.start(), a.channel && a.channel.close()) : a.publish("webChannelMessage", new Btb(c[0], c[1]));
                a.Cg = b.statusCode;
                arb(a.Ka, "WEB_CHANNEL")
            });
            g.Rh(a.channel, "o", function() {
                a.Cg === 401 || a.C.start();
                a.publish("webChannelError");
                crb(a.Ga, "WEB_CHANNEL")
            })
        },
        Htb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        Itb = function(a) {
            g.ai.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.H5, this);
            this.j.subscribe("webChannelClosed", this.onClosed, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.onMessage, this)
        },
        Jtb = function(a, b, c, d, e) {
            function f() {
                return new Ctb(b8(a, "/bc"), b, !1, c, d)
            }
            c = c === void 0 ? function() {
                return ""
            } : c;
            return g.tr("enable_mdx_web_channel_desktop") ? new Itb(function() {
                return new Ftb(b8(a, "/wc"), b, c)
            }) : new Etb(f, e)
        },
        Ntb = function() {
            var a = Ktb;
            Ltb();
            c8.push(a);
            Mtb()
        },
        d8 = function(a, b) {
            Ltb();
            var c = Otb(a, String(b));
            c8.length == 0 ? Ptb(c) : (Mtb(), g.ic(c8, function(d) {
                d(c)
            }))
        },
        e8 = function(a) {
            d8("CP", a)
        },
        Ltb = function() {
            c8 || (c8 = g.Na("yt.mdx.remote.debug.handlers_") || [], g.Ma("yt.mdx.remote.debug.handlers_", c8))
        },
        Ptb = function(a) {
            var b = (f8 + 1) % 50;
            f8 = b;
            g8[b] = a;
            h8 || (h8 = b == 49)
        },
        Mtb = function() {
            var a = c8;
            if (g8[0]) {
                var b = h8 ? f8 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = g8[b];
                    g.ic(a, function(d) {
                        d(c)
                    })
                } while (b != f8);
                g8 = Array(50);
                f8 = -1;
                h8 = !1
            }
        },
        Otb = function(a, b) {
            var c = (Date.now() - Qtb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        i8 = function(a) {
            g.gx.call(this);
            this.K = a;
            this.screens = []
        },
        Rtb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        Stb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.jn(a.screens, function(f) {
                return !!srb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = Rtb(a, b[d]) || c;
            return c
        },
        Ttb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.jn(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        Utb = function(a, b, c, d, e) {
            g.gx.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.qd = NaN
        },
        k8 = function(a) {
            i8.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            j8(this);
            this.info("Initializing with " + prb(this.screens))
        },
        Vtb = function(a) {
            if (a.screens.length) {
                var b = g.Al(a.screens, function(d) {
                        return d.id
                    }),
                    c = b8(a.B, "/pairing/get_lounge_token_batch");
                a.B.sendRequest("POST", c, {
                    screen_ids: b.join(",")
                }, (0, g.Va)(a.U9, a), (0, g.Va)(a.T9, a))
            }
        },
        j8 = function(a) {
            if (g.tr("deprecate_pair_servlet_enabled")) return Stb(a, []);
            var b = orb(zrb());
            b = g.jn(b, function(c) {
                return !c.uuid
            });
            return Stb(a, b)
        },
        l8 = function(a, b) {
            Brb(g.Al(a.screens, mrb));
            b && Arb()
        },
        Xtb = function(a, b) {
            g.gx.call(this);
            this.K = b;
            b = (b = g.Is("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Tb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            Wtb("Initialized with " + g.Bi(this.j))
        },
        Ytb = function(a, b, c) {
            var d = b8(a.G, "/pairing/get_screen_availability");
            a.G.sendRequest("POST", d, {
                lounge_token: b.token
            }, (0, g.Va)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c(e[h].status == "online");
                        return
                    }
                c(!1)
            }, a), (0, g.Va)(function() {
                c(!1)
            }, a))
        },
        $tb = function(a, b) {
            a: if (Pqb(b) != Pqb(a.j)) var c = !1;
                else {
                    c = g.vg(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (Wtb("Updated online screens: " + g.Bi(a.j)), a.j = b, a.publish("screenChange"));Ztb(a)
        },
        m8 = function(a) {
            isNaN(a.C) || g.qr(a.C);
            a.C = g.or((0, g.Va)(a.GT, a), a.D > 0 && a.D < g.Xa() ? 2E4 : 1E4)
        },
        Wtb = function(a) {
            d8("OnlineScreenService", a)
        },
        aub = function(a) {
            var b = {};
            g.ic(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.pg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        Ztb = function(a) {
            a = g.vg(g.qg(a.j, function(b) {
                return b
            }));
            g.fc(a);
            a.length ? g.Hs("yt-remote-online-screen-ids", a.join(","), 60) : g.Js("yt-remote-online-screen-ids")
        },
        n8 = function(a, b) {
            b = b === void 0 ? !1 : b;
            i8.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            bub(this)
        },
        dub = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Ml(),
                l = c ? n7(h, c) : null;
            c && (a.N || l) || (l = n7(h, b));
            if (l) {
                l.uuid = b;
                var m = o8(a, l);
                Ytb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? cub(a, c, (0, g.Va)(function(n) {
                var p = o8(this, new k7({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                Ytb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        eub = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        fub = function(a, b, c) {
            Ytb(a.j, b, c)
        },
        cub = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.yr(b8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        gub = function(a) {
            a.screens = a.B.Ml();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + prb(a.screens))
        },
        bub = function(a) {
            hub(a);
            a.B = new k8(a.D);
            a.B.subscribe("screenChange", (0, g.Va)(a.e$, a));
            gub(a);
            a.N || (a.C = orb(g.Is("yt-remote-automatic-screen-cache") || []));
            hub(a);
            a.info("Initializing automatic screens: " + prb(a.C));
            a.j = new Xtb(a.D, (0, g.Va)(a.Ml, a, !0));
            a.j.subscribe("screenChange", (0, g.Va)(function() {
                this.publish("onlineScreenChange")
            }, a))
        },
        o8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = n7(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || iub(a));
            hub(a);
            a.G[b.uuid] = b.id;
            g.Hs("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        iub = function(a) {
            a = g.jn(a.C, function(b) {
                return b.idType != "shortLived"
            });
            g.Hs("yt-remote-automatic-screen-cache", g.Al(a, mrb))
        },
        hub = function(a) {
            a.G = g.Is("yt-remote-device-id-map") || {}
        },
        p8 = function(a, b, c) {
            g.gx.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        q8 = function(a, b) {
            a.j = b;
            a.publish("sessionScreen", a.j)
        },
        jub = function(a, b) {
            a.j && (a.j.token = b, o8(a.D, a.j));
            a.publish("sessionScreen", a.j)
        },
        r8 = function(a, b) {
            d8(a.Ga, b)
        },
        s8 = function(a, b, c) {
            p8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.qa = (0, g.Va)(this.M5, this);
            this.Da = (0, g.Va)(this.kda, this);
            this.oa = g.or(function() {
                kub(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.Y = "unknown"
        },
        mub = function(a, b) {
            g.qr(a.N);
            a.N = 0;
            b == 0 ? lub(a) : a.N = g.or(function() {
                lub(a)
            }, b)
        },
        lub = function(a) {
            nub(a, "getLoungeToken");
            g.qr(a.G);
            a.G = g.or(function() {
                oub(a, null)
            }, 3E4)
        },
        nub = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Bi());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.Va)(function() {
                r8(this, "Failed to send message: " + b + ".")
            }, a)) : r8(a, "Sending yt message without session: " + g.Bi(c))
        },
        pub = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.eZ(b, function(c) {
                q8(a, c)
            }, function() {
                return a.Rj()
            }, 5)) : a.Rj(Error("Waiting for session status timed out."))
        },
        rub = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new k7(b);
            qub(a, d, function(e) {
                e ? (a.Ba = !0, o8(a.D, d), q8(a, d), a.Y = "unknown", mub(a, c)) : (g.Xq(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Rj())
            }, 5)
        },
        kub = function(a, b) {
            g.qr(a.oa);
            a.oa = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? rub(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.Xq(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), pub(a, b.screenId))) : (g.Xq(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), pub(a, b.screenId)) :
                pub(a, b.screenId) : a.Rj(Error("Waiting for session status timed out."))
        },
        oub = function(a, b) {
            g.qr(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Y = c, mub(a, 3E4)) : (jub(a, b.loungeToken), a.Ba = !1, a.Y = "unknown", mub(a, b.loungeTokenRefreshIntervalMs))
        },
        qub = function(a, b, c, d) {
            g.qr(a.K);
            a.K = 0;
            fub(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.or(function() {
                    qub(a, b, c, d - 1)
                }, 300)
            })
        },
        sub = function(a) {
            g.qr(a.Z);
            a.Z = 0;
            g.qr(a.K);
            a.K = 0;
            g.qr(a.oa);
            a.oa = 0;
            g.qr(a.G);
            a.G = 0;
            g.qr(a.N);
            a.N = 0
        },
        t8 = function(a, b, c, d) {
            p8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Da = "";
            this.Qa = c;
            this.Ma = null;
            this.oa = function() {};
            this.Y = NaN;
            this.Ka = (0, g.Va)(this.N5, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.qa = !1;
            this.Ba = "unknown"
        },
        u8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && ((b = a.C) == null ? 0 : b.getDialAppInfo))
        },
        tub = function(a) {
            a.G = a.D.VV(a.Da, a.B.label, a.B.friendlyName, u8(a), function(b, c) {
                a.G = function() {};
                a.qa = !0;
                q8(a, b);
                b.idType == "shortLived" && c > 0 && v8(a, c)
            }, function(b) {
                a.G = function() {};
                a.Rj(b)
            })
        },
        uub = function(a) {
            var b = {};
            b.pairingCode = a.Da;
            b.theme = a.Qa;
            Drb() && (b.env_useStageMdx = 1);
            return g.Qi(b)
        },
        vub = function(a) {
            return new Promise(function(b) {
                a.Da = qrb();
                if (a.Ma) {
                    var c = new chrome.cast.DialLaunchResponse(!0, uub(a));
                    b(c);
                    tub(a)
                } else a.oa = function() {
                    g.qr(a.Y);
                    a.oa = function() {};
                    a.Y = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, uub(a));
                    b(d);
                    tub(a)
                }, a.Y = g.or(function() {
                    a.oa()
                }, 100)
            })
        },
        xub = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new k7(b);
            return (new Promise(function(e) {
                wub(a, d, function(f) {
                    f ? (a.qa = !0, o8(a.D, d), q8(a, d), v8(a, c)) : g.Xq(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : vub(a)
            })
        },
        yub = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                dub(a.D, c, b, d, function(f) {
                    f && f.token && q8(a, f);
                    e(f)
                }, function(f) {
                    r8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : vub(a)
            })
        },
        wub = function(a, b, c, d) {
            g.qr(a.K);
            a.K = 0;
            fub(a.D, b, function(e) {
                e || d < 0 ? c(e) : a.K = g.or(function() {
                    wub(a, b, c, d - 1)
                }, 300)
            })
        },
        v8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            u8(a) && (g.qr(a.N), a.N = 0, b == 0 ? zub(a) : a.N = g.or(function() {
                zub(a)
            }, b))
        },
        zub = function(a) {
            u8(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    ((d = a.j) == null ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, v8(a, 3E4)) : (a.qa = !1, a.Ba = "unknown", jub(a, b.loungeToken), v8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                v8(a, 3E4)
            })
        },
        Aub = function(a) {
            g.qr(a.K);
            a.K = 0;
            g.qr(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.qr(a.Y)
        },
        w8 = function(a, b) {
            p8.call(this, a, b, "ManualSession");
            this.C = g.or((0, g.Va)(this.oB, this, null), 150)
        },
        x8 = function(a, b) {
            g.gx.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.Y = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.Va)(this.hca, this)
        },
        Bub = function(a, b) {
            return b ? g.Rb(a.C, function(c) {
                return l7(b, c.label)
            }, a) : null
        },
        y8 = function(a) {
            d8("Controller", a)
        },
        Ktb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        z8 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        A8 = function(a, b, c) {
            b != a.j && (g.ig(a.j), (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed",
                b.B) : a.publish("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.Va)(a.T0, a, b)), b.subscribe("sessionFailed", function() {
                return Cub(a, b)
            }), b.j ? a.publish("yt-remote-cast2-session-change", b.j) : c && a.j.oB(null)) : a.publish("yt-remote-cast2-session-change", null))
        },
        Cub = function(a, b) {
            a.j == b && a.publish("yt-remote-cast2-session-failed")
        },
        Dub = function(a) {
            var b = a.B.UV(),
                c = a.j && a.j.B;
            a = g.Al(b, function(d) {
                c && l7(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = Bub(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        Kub = function(a, b, c, d) {
            d.disableCastApi ? B8("Cannot initialize because disabled by Mdx config.") : Eub() ? Fub(b, d) && (Gub(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Hub(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? Hub(a, c) : (C8("Failed to load cast API: " + f), Iub(!1), Gub(!1), g.Js("yt-remote-cast-available"), g.Js("yt-remote-cast-receiver"),
                    Jub(), c(!1))
            }, d.loadCastApiSetupScript ? g.lv("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? Frb() >= 60 && Orb() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? Jrb() : Frb() >= 89 ? Qrb() : (Nrb(), u7(Prb.map(Krb))))) : B8("Cannot initialize because not running Chrome")
        },
        Jub = function() {
            B8("dispose");
            var a = D8();
            a && a.dispose();
            g.Ma("yt.mdx.remote.cloudview.instance_", null);
            Lub(!1);
            g.jv(Mub);
            Mub.length = 0
        },
        E8 = function() {
            return !!g.Is("yt-remote-cast-installed")
        },
        Nub = function() {
            var a = g.Is("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        Oub = function() {
            B8("clearCurrentReceiver");
            g.Js("yt-remote-cast-receiver")
        },
        Pub = function() {
            return E8() ? D8() ? D8().getCastSession() : (C8("getCastSelector: Cast is not initialized."), null) : (C8("getCastSelector: Cast API is not installed!"), null)
        },
        Qub = function() {
            E8() ? D8() ? F8() ? (B8("Requesting cast selector."), D8().requestSession()) : (B8("Wait for cast API to be ready to request the session."), Mub.push(g.iv("yt-remote-cast2-api-ready", Qub))) : C8("requestCastSelector: Cast is not initialized.") : C8("requestCastSelector: Cast API is not installed!")
        },
        G8 = function(a, b) {
            F8() ? D8().setConnectedScreenStatus(a, b) : C8("setConnectedScreenStatus called before ready.")
        },
        Eub = function() {
            var a = g.zb().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.zE || a
        },
        Rub = function(a, b) {
            D8().init(a, b)
        },
        Fub = function(a, b) {
            var c = !1;
            D8() || (a = new x8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.Hs("yt-remote-cast-available", d);
                s7("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                B8("onReceiverSelected: " + d.friendlyName);
                g.Hs("yt-remote-cast-receiver", d);
                s7("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                B8("onReceiverResumed: " + d.friendlyName);
                g.Hs("yt-remote-cast-receiver", d);
                s7("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                B8("onSessionChange: " + m7(d));
                d || g.Js("yt-remote-cast-receiver");
                s7("yt-remote-cast2-session-change", d)
            }), g.Ma("yt.mdx.remote.cloudview.instance_", a), c = !0);
            B8("cloudview.createSingleton_: " + c);
            return c
        },
        D8 = function() {
            return g.Na("yt.mdx.remote.cloudview.instance_")
        },
        Hub = function(a, b) {
            Iub(!0);
            Gub(!1);
            Rub(a, function(c) {
                c ? (Lub(!0), g.kv("yt-remote-cast2-api-ready")) : (C8("Failed to initialize cast API."), Iub(!1), g.Js("yt-remote-cast-available"), g.Js("yt-remote-cast-receiver"), Jub());
                b(c)
            })
        },
        B8 = function(a) {
            d8("cloudview", a)
        },
        C8 = function(a) {
            d8("cloudview", a)
        },
        Iub = function(a) {
            B8("setCastInstalled_ " + a);
            g.Hs("yt-remote-cast-installed", a)
        },
        F8 = function() {
            return !!g.Na("yt.mdx.remote.cloudview.apiReady_")
        },
        Lub = function(a) {
            B8("setApiReady_ " + a);
            g.Ma("yt.mdx.remote.cloudview.apiReady_", a)
        },
        Gub = function(a) {
            g.Ma("yt.mdx.remote.cloudview.initializing_", a)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Pl = this.mq = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        Sub = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.mq = !1;
            a.Pl = !1;
            a.N = 0;
            a.K = g.Xa();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        I8 = function(a) {
            return a.isPlaying() ? (g.Xa() - a.K) / 1E3 : 0
        },
        J8 = function(a, b) {
            a.N = b;
            a.K = g.Xa()
        },
        K8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Xa() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        L8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && Sub(a)
        },
        Tub = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.Dg(a.trackData);
            b.hasPrevious = a.mq;
            b.hasNext = a.Pl;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        N8 = function(a, b) {
            g.gx.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new ytb;
            this.B = this.j = null;
            this.Y = (0, g.Va)(this.Uaa, this);
            this.N = (0, g.Va)(this.NG, this);
            this.Z = (0, g.Va)(this.Taa, this);
            this.oa = (0, g.Va)(this.Waa, this);
            var d = 0;
            a ? (d = a.getProxyState(), d != 3 && (a.subscribe("proxyStateChange", this.fU, this), Uub(this))) : d = 3;
            d != 0 && (b ? this.fU(d) : g.or(function() {
                c.fU(d)
            }, 0));
            (a = Pub()) && M8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.oa)
        },
        O8 = function(a) {
            return new H8(a.D.getPlayerContextData())
        },
        Uub = function(a) {
            g.ic("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.Wa(this.fca, b), this))
            }, a)
        },
        Vub = function(a) {
            g.ic(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        P8 = function(a) {
            return a.getState() == 1
        },
        Q8 = function(a, b) {
            var c = a.G;
            c.j.length + c.B.length < 50 && a.G.enqueue(b)
        },
        Wub = function(a, b, c) {
            var d = O8(a);
            J8(d, c);
            d.playerState != -1E3 && (d.playerState = b);
            R8(a, d)
        },
        S8 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        R8 = function(a, b) {
            Vub(a);
            a.D.setPlayerContextData(Tub(b));
            Uub(a)
        },
        M8 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.Y), a.B.removeMediaListener(a.N), a.NG(null));
            a.B = b;
            a.B && (e8("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.Y), a.B.addMediaListener(a.N), a.B.media.length && a.NG(a.B.media[0]))
        },
        Xub = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = O8(a);
                b.contentId != d.videoId && e8("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                J8(d, a.j.getEstimatedTime());
                R8(a, d)
            } else e8("No cast media video. Ignoring state update.")
        },
        T8 = function(a, b, c) {
            return (0, g.Va)(function(d) {
                this.pg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.pg("Retrying " + b + " using MDx browser channel."), S8(this, b, c))
            }, a)
        },
        W8 = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            g.gx.call(this);
            var e = this;
            this.K = NaN;
            this.Da = !1;
            this.Y = this.Z = this.qa = this.Ba = NaN;
            this.oa = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Ma = a;
            this.Ka = d;
            this.oa.push(g.ws(window, "beforeunload", function() {
                e.rA(2)
            }));
            this.C = [];
            this.j = new H8;
            this.Qa = b.id;
            this.Ga = b.idType;
            this.B = Jtb(this.Ma, c, this.ZV, this.Ga == "shortLived", this.Qa);
            this.B.listen("channelOpened", function() {
                Yub(e)
            });
            this.B.listen("channelClosed", function() {
                U8("Channel closed");
                isNaN(e.K) ? q7(!0) : q7();
                e.dispose()
            });
            this.B.listen("channelError", function(f) {
                q7();
                isNaN(e.MF()) ? (f == 1 && e.Ga == "shortLived" && e.publish("browserChannelAuthError", f), U8("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Da = !0, U8("Channel error: " + f + " with reconnection in " + e.MF() + " ms"), V8(e, 2))
            });
            this.B.listen("channelMessage", function(f) {
                Zub(e, f)
            });
            this.B.Rs(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.Ks() && g.Hs("yt-remote-session-video-id", f)
            })
        },
        $ub = function(a) {
            return g.Rb(a.C, function(b) {
                return b.type == "LOUNGE_SCREEN"
            })
        },
        U8 = function(a) {
            d8("conn", a)
        },
        V8 = function(a, b) {
            a.publish("proxyStateChange", b)
        },
        avb = function(a) {
            a.K = g.or(function() {
                U8("Connecting timeout");
                a.rA(1)
            }, 2E4)
        },
        bvb = function(a) {
            g.qr(a.K);
            a.K = NaN
        },
        cvb = function(a) {
            g.qr(a.Ba);
            a.Ba = NaN
        },
        evb = function(a) {
            dvb(a);
            a.qa = g.or(function() {
                X8(a, "getNowPlaying")
            }, 2E4)
        },
        dvb = function(a) {
            g.qr(a.qa);
            a.qa = NaN
        },
        Yub = function(a) {
            U8("Channel opened");
            a.Da && (a.Da = !1, cvb(a), a.Ba = g.or(function() {
                U8("Timing out waiting for a screen.");
                a.rA(1)
            }, 15E3))
        },
        gvb = function(a, b) {
            var c = null;
            if (b) {
                var d = $ub(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ma("yt.mdx.remote.remoteClient_", c);
            b && (bvb(a), cvb(a));
            c = a.B.bB() && isNaN(a.K);
            b == c ? b && (V8(a, 1), X8(a, "getSubtitlesTrack")) : b ? (a.ZY() && a.j.reset(), V8(a, 1), X8(a, "getNowPlaying"), fvb(a)) : a.rA(1)
        },
        hvb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.zg(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.publish("remotePlayerChange"))
        },
        ivb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            L8(a.j, d, e);
            a.publish("remoteQueueChange", c)
        },
        kvb = function(a, b) {
            b.params = b.params || {};
            ivb(a, b, "NOW_PLAYING_MAY_CHANGE");
            jvb(a, b);
            a.publish("autoplayDismissed")
        },
        jvb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            J8(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c;
            c == -1 && a.j.playerState == -1E3 && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.er(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            a.j.playerState == 1 ? evb(a) : dvb(a);
            a.publish("remotePlayerChange")
        },
        lvb = function(a, b) {
            if (a.j.playerState != -1E3) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                J8(a.j, isNaN(b) ? 0 : b);
                a.publish("remotePlayerChange")
            }
        },
        mvb = function(a, b) {
            var c = b.params.muted == "true";
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.publish("remotePlayerChange")
        },
        nvb = function(a, b) {
            a.N = b.params.videoId;
            a.publish("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        ovb = function(a, b) {
            a.N = b.params.videoId || null;
            a.publish("autoplayUpNext", a.N)
        },
        pvb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.publish("autoplayModeChange", a.G);
            a.G == "DISABLED" && a.publish("autoplayDismissed")
        },
        qvb = function(a, b) {
            var c = b.params.hasNext == "true";
            a.j.mq = b.params.hasPrevious == "true";
            a.j.Pl = c;
            a.publish("previousNextChange")
        },
        Zub = function(a, b) {
            b = b.message;
            b.params ? U8("Received: action=" + b.action + ", params=" + g.Bi(b.params)) : U8("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = f7(b.params.devices);
                    a.C = g.Al(b, function(d) {
                        return new jrb(d)
                    });
                    b = !!g.Rb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    gvb(a, b);
                    b = a.d_("mlm");
                    a.publish("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Wb(a.C, function(d) {
                        return d.type == "LOUNGE_SCREEN"
                    });
                    gvb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new jrb(f7(b.params.device));
                    g.Rb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || Oqb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new jrb(f7(b.params.device));
                    g.Wb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    ivb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    kvb(a, b);
                    break;
                case "onStateChange":
                    jvb(a, b);
                    break;
                case "onAdStateChange":
                    lvb(a, b);
                    break;
                case "onVolumeChanged":
                    mvb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    hvb(a, b);
                    break;
                case "nowAutoplaying":
                    nvb(a, b);
                    break;
                case "autoplayDismissed":
                    a.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    ovb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    pvb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    qvb(a,
                        b);
                    break;
                case "requestAssistedSignIn":
                    a.publish("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.publish("loopModeChange", b.params.loopMode);
                    break;
                default:
                    U8("Unrecognized action: " + b.action)
            }
        },
        fvb = function(a) {
            g.qr(a.Y);
            a.Y = g.or(function() {
                a.rA(1)
            }, 864E5)
        },
        X8 = function(a, b, c) {
            c ? U8("Sending: action=" + b + ", params=" + g.Bi(c)) : U8("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        rvb = function(a) {
            i8.call(this, "ScreenServiceProxy");
            this.lh = a;
            this.j = [];
            this.j.push(this.lh.$_s("screenChange", (0, g.Va)(this.R5, this)));
            this.j.push(this.lh.$_s("onlineScreenChange", (0, g.Va)(this.Oba, this)))
        },
        wvb = function(a, b) {
            Crb();
            if (!r7 || !r7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.Uq("MDX_CONFIG") || b;
                trb();
                xrb();
                Y8 || (Y8 = new a8(b ? b.loungeApiHost : void 0), Drb() && (Y8.j = "/api/loungedev"));
                Z8 || (Z8 = g.Na("yt.mdx.remote.deferredProxies_") || [], g.Ma("yt.mdx.remote.deferredProxies_", Z8));
                svb();
                var c = $8();
                if (!c) {
                    var d = new n8(Y8, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ma("yt.mdx.remote.screenService_", d);
                    c = $8();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ma("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    Kub(a, d, function(f) {
                        f ? a9() && G8(a9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            s7("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Na("yt.mdx.remote.initialized_") && (g.Ma("yt.mdx.remote.initialized_", !0), b9("Initializing: " + g.Bi(b)),
                    c9.push(g.iv("yt-remote-cast2-api-ready", function() {
                        s7("yt-remote-api-ready")
                    })), c9.push(g.iv("yt-remote-cast2-availability-change", function() {
                        s7("yt-remote-receiver-availability-change")
                    })), c9.push(g.iv("yt-remote-cast2-receiver-selected", function() {
                        d9(null);
                        s7("yt-remote-auto-connect", "cast-selector-receiver")
                    })), c9.push(g.iv("yt-remote-cast2-receiver-resumed", function() {
                        s7("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), c9.push(g.iv("yt-remote-cast2-session-change", tvb)), c9.push(g.iv("yt-remote-connection-change", function(f) {
                        f ? G8(a9(), "YouTube TV") : e9() || (G8(null, null), Oub())
                    })), c9.push(g.iv("yt-remote-cast2-session-failed", function() {
                        s7("yt-remote-connection-failed")
                    })), a = uvb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.tr("desktop_enable_autoplay") &&
                    e.push("atp"), e.length > 0 && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), b9(" -- with channel params: " + g.Bi(a)), a ? (g.Hs("yt-remote-session-app", a.app), g.Hs("yt-remote-session-name", a.name)) : (g.Js("yt-remote-session-app"), g.Js("yt-remote-session-name")), g.Ma("yt.mdx.remote.channelParams_", a), c.start(), a9() || vvb())
            }
        },
        xvb = function() {
            var a = $8().lh.$_gos();
            var b = f9();
            b && g9() && (srb(a, b) || a.push(b));
            return rrb(a)
        },
        zvb = function() {
            var a = yvb();
            !a && E8() && Nub() && (a = {
                key: "cast-selector-receiver",
                name: Nub()
            });
            return a
        },
        yvb = function() {
            var a = xvb(),
                b = f9();
            b || (b = e9());
            return g.Rb(a, function(c) {
                return b && l7(b, c.key) ? !0 : !1
            })
        },
        f9 = function() {
            var a = a9();
            if (!a) return null;
            var b = $8().Ml();
            return n7(b, a)
        },
        tvb = function(a) {
            b9("remote.onCastSessionChange_: " + m7(a));
            if (a) {
                var b = f9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), a.idType == "shortLived" && (a = a.token)) h9 && (h9.token = a), (b = g9()) && b.Rs(a)
                } else b && i9(), j9(a, 1)
            } else g9() && i9()
        },
        i9 = function() {
            F8() ? D8().stopSession() : C8("stopSession called before API ready.");
            var a = g9();
            a && (a.disconnect(1), Avb(null))
        },
        Bvb = function() {
            var a = g9();
            return !!a && a.getProxyState() != 3
        },
        b9 = function(a) {
            d8("remote", a)
        },
        $8 = function() {
            if (!Cvb) {
                var a = g.Na("yt.mdx.remote.screenService_");
                Cvb = a ? new rvb(a) : null
            }
            return Cvb
        },
        a9 = function() {
            return g.Na("yt.mdx.remote.currentScreenId_")
        },
        Dvb = function(a) {
            g.Ma("yt.mdx.remote.currentScreenId_", a)
        },
        Evb = function() {
            return g.Na("yt.mdx.remote.connectData_")
        },
        d9 = function(a) {
            g.Ma("yt.mdx.remote.connectData_", a)
        },
        g9 = function() {
            return g.Na("yt.mdx.remote.connection_")
        },
        Avb = function(a) {
            var b = g9();
            d9(null);
            a || Dvb("");
            g.Ma("yt.mdx.remote.connection_", a);
            Z8 && (g.ic(Z8, function(c) {
                c(a)
            }), Z8.length = 0);
            b && !a ? s7("yt-remote-connection-change", !1) : !b && a && s7("yt-remote-connection-change", !0)
        },
        e9 = function() {
            var a = g.Ks();
            if (!a) return null;
            var b = $8();
            if (!b) return null;
            b = b.Ml();
            return n7(b, a)
        },
        j9 = function(a, b) {
            a9();
            f9() && f9();
            if (k9) h9 = a;
            else {
                Dvb(a.id);
                var c = g.Na("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new W8(Y8, a, uvb(), c);
                a.connect(b, Evb());
                a.subscribe("beforeDisconnect", function(d) {
                    s7("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    g9() && (g9(), Avb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = f9();
                    d && d.idType == "shortLived" && (F8() ? D8().handleBrowserChannelAuthError() : C8("refreshLoungeToken called before API ready."))
                });
                Avb(a)
            }
        },
        vvb = function() {
            var a = e9();
            a ? (b9("Resume connection to: " + m7(a)), j9(a, 0)) : (q7(), Oub(), b9("Skipping connecting because no session screen found."))
        },
        svb = function() {
            var a = uvb();
            if (g.zg(a)) {
                a = p7();
                var b = g.Is("yt-remote-session-name") || "",
                    c = g.Is("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.Uq("SESSION_INDEX", "0"));
                (b = g.Uq("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ma("yt.mdx.remote.channelParams_", a)
            }
        },
        uvb = function() {
            return g.Na("yt.mdx.remote.channelParams_") || {}
        },
        Hvb = function(a, b, c) {
            g.O.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Hc = c;
            this.events = new g.DE(this);
            this.D = !1;
            this.G = new g.AF(64);
            this.j = new g.Zo(this.X2, 500, this);
            this.B = new g.Zo(this.Y2, 1E3, this);
            this.N = new v7(this.Efa, 0, this);
            this.C = {};
            this.Z = new g.Zo(this.W3, 1E3, this);
            this.K = new w7(this.seekTo, 1E3, this);
            this.Y = this.events.T(this.J, "onVolumeChange", function(e) {
                Fvb(d, e)
            });
            g.P(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.zba);
            this.events.T(b, "captionschanged", this.Raa);
            this.events.T(b, "captionssettingschanged", this.j3);
            this.events.T(b, "videoplayerreset", this.fM);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Hc.kY()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                Gvb(d.module) || l9(d) || m9(d, 0)
            });
            a = this.Hc;
            a.Ja();
            a.subscribe("proxyStateChange", this.P0, this);
            a.subscribe("remotePlayerChange", this.YG, this);
            a.subscribe("remoteQueueChange", this.fM, this);
            a.subscribe("previousNextChange", this.M0, this);
            a.subscribe("nowAutoplaying", this.I0, this);
            a.subscribe("autoplayDismissed", this.r0, this);
            g.P(this, this.j);
            g.P(this, this.B);
            g.P(this, this.N);
            g.P(this, this.Z);
            g.P(this, this.K);
            this.j3();
            this.fM();
            this.YG()
        },
        Fvb = function(a, b) {
            if (l9(a)) {
                a.Hc.unsubscribe("remotePlayerChange", a.YG, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = O8(a.Hc);
                if (c !== d.volume || b !== d.muted) a.Hc.setVolume(c, b), a.Z.start();
                a.Hc.subscribe("remotePlayerChange", a.YG, a)
            }
        },
        Ivb = function(a) {
            a.Rc(0);
            a.j.stop();
            a.Ec(new g.AF(64))
        },
        Jvb = function(a, b) {
            if (l9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.Eg(c, b));
                a.Hc.YV(a.J.getVideoData(1).videoId, c);
                a.C = O8(a.Hc).trackData
            }
        },
        m9 = function(a, b) {
            var c = a.J.getPlaylist();
            if (c == null ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Hc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ga, Nqb(c));
            a.Ec(new g.AF(1))
        },
        Kvb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    MZ: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        l9 = function(a) {
            return O8(a.Hc).videoId === a.J.getVideoData(1).videoId
        },
        n9 = function() {
            g.T.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        va: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        va: "Videos that you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            La: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            va: "Cancel"
                        }, {
                            I: "button",
                            La: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            va: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.cy(this, 250);
            this.cancelButton = this.Ea("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ea("ytp-mdx-privacy-popup-confirm");
            g.P(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        o9 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.nsa()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.cy(this, 250);
            g.P(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.ud(a.getPlayerStateObject())
        },
        p9 = function(a, b) {
            g.vX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.uv = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        Lvb = function(a) {
            g.VX.call(this, a);
            this.Fq = {
                key: qrb(),
                name: "This computer"
            };
            this.Im = null;
            this.subscriptions = [];
            this.mT = this.Hc = null;
            this.uv = [this.Fq];
            this.Rt = this.Fq;
            this.Ee = new g.AF(64);
            this.p_ = 0;
            this.zi = -1;
            this.qH = !1;
            this.pH = this.iC = null;
            if (!g.cP(this.player.U()) && !g.Ly(this.player.U())) {
                a = this.player;
                var b = g.CR(a);
                b && (b = b.Vm()) && (b = new p9(a, b), g.P(this, b));
                b = new o9(a);
                g.P(this, b);
                g.tS(a, b.element, 4);
                this.iC = new n9;
                g.P(this, this.iC);
                g.tS(a, this.iC.element, 4);
                this.qH = !!e9()
            }
        },
        q9 = function(a) {
            a.pH && (a.player.removeEventListener("presentingplayerstatechange",
                a.pH), a.pH = null)
        },
        Mvb = function(a, b, c) {
            a.Ee = c;
            a.player.publish("presentingplayerstatechange", new g.ny(c, b))
        },
        r9 = function(a, b) {
            if (b.key !== a.Rt.key)
                if (b.key === a.Fq.key) i9();
                else if (Gvb(a) && Nvb(a), a.Rt = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.Ly(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (a.player.getAppState() === 2 || a.player.getAppState() === 1) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.SX(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ga,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: f === 0 ? void 0 : f
                    };
                    (d = Nqb(d)) && (a.locationInfo = d);
                    d = a
                }
                b9("Connecting to: " + g.Bi(b));
                b.key == "cast-selector-receiver" ? (d9(d || null), b = d || null, F8() ? D8().setLaunchParams(b) : C8("setLaunchParams called before ready.")) : !d && Bvb() && a9() == b.key ? s7("yt-remote-connection-change", !0) : (i9(), d9(d || null), d = $8().Ml(), (b = n7(d, b.key)) && j9(b, 1))
            }
        },
        Gvb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.qH || !a.iC ? !1 : g.qP(b) || g.sP(b)
        },
        Nvb = function(a) {
            a.player.getPlayerStateObject().isPlaying() ? a.player.pauseVideo() : (a.pH = function(b) {
                !a.qH && g.py(b, 8) && (a.player.pauseVideo(), q9(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.pH));
            a.iC && a.iC.md();
            g9() || (k9 = !0)
        };
    g.k = i7.prototype;
    g.k.Wm = function() {
        j7(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.B[this.j[b]]);
        return a
    };
    g.k.Co = function() {
        j7(this);
        return this.j.concat()
    };
    g.k.has = function(a) {
        return h7(this.B, a)
    };
    g.k.isEmpty = function() {
        return this.size == 0
    };
    g.k.clear = function() {
        this.B = {};
        this.Rv = this.size = this.j.length = 0
    };
    g.k.remove = function(a) {
        return this.delete(a)
    };
    g.k.delete = function(a) {
        return h7(this.B, a) ? (delete this.B[a], --this.size, this.Rv++, this.j.length > 2 * this.size && j7(this), !0) : !1
    };
    g.k.get = function(a, b) {
        return h7(this.B, a) ? this.B[a] : b
    };
    g.k.set = function(a, b) {
        h7(this.B, a) || (this.size += 1, this.j.push(a), this.Rv++);
        this.B[a] = b
    };
    g.k.forEach = function(a, b) {
        for (var c = this.Co(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.k.clone = function() {
        return new i7(this)
    };
    g.k.keys = function() {
        return g.tp(this.Gm(!0)).j()
    };
    g.k.values = function() {
        return g.tp(this.Gm(!1)).j()
    };
    g.k.entries = function() {
        var a = this;
        return frb(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    g.k.Gm = function(a) {
        j7(this);
        var b = 0,
            c = this.Rv,
            d = this,
            e = new g.dn;
        e.next = function() {
            if (c != d.Rv) throw Error("The map has changed since the iterator was created");
            if (b >= d.j.length) return g.p1;
            var f = d.j[b++];
            return g.en(a ? f : d.B[f])
        };
        return e
    };
    var krb = {
            Tga: "atp",
            tla: "ska",
            Lka: "que",
            Xja: "mus",
            rla: "sus",
            Bia: "dsp",
            dla: "seq",
            Oja: "mic",
            Nha: "dpa",
            aha: "cds",
            Vja: "mlm",
            Lha: "dsdtr",
            fka: "ntb",
            ema: "vsp",
            Yha: "scn",
            Nka: "rpe",
            Iha: "dcn",
            Jha: "dcp",
            uka: "pas",
            Kha: "drq",
            kka: "opf",
            Xha: "els",
            ila: "svq",
            Wja: "mvp"
        },
        lrb = {
            dma: "u",
            lha: "cl",
            uja: "k",
            Ria: "i",
            Aha: "cr",
            Yja: "m",
            oia: "g",
            r7: "up"
        },
        wrb = "",
        r7 = null;
    Erb.prototype.flush = function(a, b) {
        a = a === void 0 ? [] : a;
        b = b === void 0 ? !1 : b;
        if (g.tr("enable_client_streamz_web")) {
            a = g.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Cda(c.value), c = {
                serializedIncrementBatch: g.mc(c.j())
            }, g.jt("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var t7, Mrb = Grb("loadCastFramework") || Grb("loadCastApplicationFramework"),
        Prb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.Ya(v7, g.O);
    g.k = v7.prototype;
    g.k.v5 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.qd ? this.C = g.Xa() + this.ej : this.qd = g.xi(this.G, this.ej)
    };
    g.k.stop = function() {
        this.qd && (g.La.clearTimeout(this.qd), this.qd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        v7.Tf.xa.call(this)
    };
    g.k.w5 = function() {
        this.qd && (g.La.clearTimeout(this.qd), this.qd = null);
        this.C ? (this.qd = g.xi(this.G, this.C - g.Xa()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.z(w7, g.O);
    g.k = w7.prototype;
    g.k.PN = function(a) {
        this.C = arguments;
        this.qd || this.B ? this.j = !0 : Rrb(this)
    };
    g.k.stop = function() {
        this.qd && (g.La.clearTimeout(this.qd), this.qd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.qd || (this.j = !1, Rrb(this))
    };
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.stop()
    };
    x7.prototype.stringify = function(a) {
        return g.La.JSON.stringify(a, void 0)
    };
    x7.prototype.parse = function(a) {
        return g.La.JSON.parse(a, void 0)
    };
    g.Ya(Srb, g.Jh);
    g.Ya(Trb, g.Jh);
    var Urb = null;
    g.Ya(Wrb, g.Jh);
    g.Ya(Xrb, g.Jh);
    g.Ya(Yrb, g.Jh);
    B7.prototype.debug = function() {};
    B7.prototype.info = function() {};
    B7.prototype.warning = function() {};
    var fsb = {},
        esb = {};
    g.k = C7.prototype;
    g.k.setTimeout = function(a) {
        this.fb = a
    };
    g.k.y5 = function(a) {
        a = a.target;
        var b = this.Va;
        b && g.Yi(a) == 3 ? b.PN() : this.BV(a)
    };
    g.k.BV = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Yi(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(b < 3) && (b != 3 || this.j && (this.B.B || g.$i(this.j) || g.aj(this.j)))) {
                    this.Ka || b != 4 || c == 7 || (c == 8 || d <= 0 ? y7(3) : y7(2));
                    isb(this);
                    var e = this.j.getStatus();
                    this.Kb = e;
                    var f = dsb(this);
                    if (this.K = e == 200) {
                        if (this.Cb && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var h = g.bj(this.j, "X-HTTP-Initial-Response");
                                    if (h && !g.sb(h)) {
                                        var l = h;
                                        break b
                                    }
                                }
                                l = null
                            }
                            if (a = l) this.Ua = !0,
                            rsb(this, a);
                            else {
                                this.K = !1;
                                this.G = 3;
                                z7(12);
                                E7(this);
                                F7(this);
                                break a
                            }
                        }
                        if (this.Ga) {
                            a = !0;
                            for (var m; !this.Ka && this.N < f.length;)
                                if (m = gsb(this, f), m == esb) {
                                    b == 4 && (this.G = 4, z7(14), a = !1);
                                    break
                                } else if (m == fsb) {
                                this.G = 4;
                                z7(15);
                                a = !1;
                                break
                            } else rsb(this, m);
                            csb(this) && this.N != 0 && (this.B.j = this.B.j.slice(this.N), this.N = 0);
                            b != 4 || f.length != 0 || this.B.B || (this.G = 1, z7(16), a = !1);
                            this.K = this.K && a;
                            a ? f.length > 0 && !this.Hb && (this.Hb = !0, this.C.uS(this)) : (E7(this), F7(this))
                        } else rsb(this, f);
                        b == 4 && E7(this);
                        this.K && !this.Ka && (b == 4 ? jsb(this.C, this) : (this.K = !1, D7(this)))
                    } else g.Zfa(this.j), e == 400 && f.indexOf("Unknown SID") >
                        0 ? (this.G = 3, z7(12)) : (this.G = 0, z7(13)), E7(this), F7(this)
                }
            }
        } catch (n) {} finally {}
    };
    g.k.cancel = function() {
        this.Ka = !0;
        E7(this)
    };
    g.k.x5 = function() {
        this.oa = null;
        var a = Date.now();
        a - this.qb >= 0 ? (this.Qa != 2 && (y7(3), z7(17)), E7(this), this.G = 2, F7(this)) : hsb(this, this.qb - a)
    };
    g.k.getLastError = function() {
        return this.G
    };
    g.k.HQ = function() {
        return this.j
    };
    tsb.prototype.cancel = function() {
        this.C = vsb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && this.j.size !== 0) {
            for (var a = g.w(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = Asb.prototype;
    g.k.CV = 8;
    g.k.Xh = 1;
    g.k.connect = function(a, b, c, d) {
        z7(0);
        this.Sb = a;
        this.Ka = b || {};
        c && d !== void 0 && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Ua = this.wc;
        this.Ma = osb(this, null, this.Sb);
        J7(this)
    };
    g.k.disconnect = function() {
        Csb(this);
        if (this.Xh == 3) {
            var a = this.Xa++,
                b = this.Ma.clone();
            g.uk(b, "SID", this.D);
            g.uk(b, "RID", a);
            g.uk(b, "TYPE", "terminate");
            M7(this, b);
            a = new C7(this, this.D, a);
            a.Qa = 2;
            a.Z = d7(b.clone());
            b = !1;
            if (g.La.navigator && g.La.navigator.sendBeacon) try {
                b = g.La.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.La.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = bsb(a.C, null), a.j.send(a.Z));
            a.Ba = Date.now();
            D7(a)
        }
        Isb(this)
    };
    g.k.Og = function() {
        return this.Xh == 0
    };
    g.k.getState = function() {
        return this.Xh
    };
    g.k.FV = function(a) {
        if (this.K)
            if (this.K = null, this.Xh == 1) {
                if (!a) {
                    this.Xa = Math.floor(Math.random() * 1E5);
                    a = this.Xa++;
                    var b = new C7(this, "", a),
                        c = this.Y;
                    this.Kb && (c ? (c = g.Cg(c), g.Eg(c, this.Kb)) : c = this.Kb);
                    this.N !== null || this.qb || (b.Ma = c, c = null);
                    var d;
                    if (this.rb) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, typeof f === "string")) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (f === void 0) break;d += f;
                            if (d > 4096) {
                                d = e;
                                break a
                            }
                            if (d === 4096 || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = Fsb(this, b, d);
                    e = this.Ma.clone();
                    g.uk(e, "RID", a);
                    g.uk(e, "CVER", 22);
                    this.Ga && g.uk(e, "X-HTTP-Session-Id", this.Ga);
                    M7(this, e);
                    c && (this.qb ? d = "headers=" + g.$f(g.aha(c)) + "&" + d : this.N && g.yk(e, this.N, c));
                    nsb(this.B, b);
                    this.Wf && g.uk(e, "TYPE", "init");
                    this.rb ? (g.uk(e, "$req", d), g.uk(e, "SID", "null"), b.Cb = !0, asb(b, e, null)) : asb(b, e, d);
                    this.Xh = 2
                }
            } else this.Xh == 3 && (a ? Gsb(this, a) : this.C.length == 0 || usb(this.B) || Gsb(this))
    };
    g.k.EV = function() {
        this.Z = null;
        Hsb(this);
        if (this.yc && !(this.fb || this.j == null || this.Ed <= 0)) {
            var a = 2 * this.Ed;
            this.Da = A7((0, g.Va)(this.Qaa, this), a)
        }
    };
    g.k.Qaa = function() {
        this.Da && (this.Da = null, this.Ua = !1, this.fb = !0, z7(10), H7(this), Hsb(this))
    };
    g.k.uS = function(a) {
        this.j == a && this.yc && !this.fb && (Bsb(this), this.fb = !0, z7(11))
    };
    g.k.z5 = function() {
        this.oa != null && (this.oa = null, H7(this), lsb(this), z7(19))
    };
    g.k.gfa = function(a) {
        a ? z7(2) : z7(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = Ksb.prototype;
    g.k.JV = function() {};
    g.k.IV = function() {};
    g.k.HV = function() {};
    g.k.GV = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.A5 = function() {};
    g.Ya(O7, g.ai);
    O7.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Qa = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    O7.prototype.close = function() {
        this.j.disconnect()
    };
    O7.prototype.send = function(a) {
        var b = this.j;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Bi(a), a = c);
        b.C.push(new ssb(b.Uf++, a));
        b.Xh == 3 && J7(b)
    };
    O7.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        O7.Tf.xa.call(this)
    };
    g.Ya(Msb, Srb);
    g.Ya(Nsb, Trb);
    g.Ya(N7, Ksb);
    N7.prototype.JV = function() {
        this.j.dispatchEvent("m")
    };
    N7.prototype.IV = function(a) {
        this.j.dispatchEvent(new Msb(a))
    };
    N7.prototype.HV = function(a) {
        this.j.dispatchEvent(new Nsb(a))
    };
    N7.prototype.GV = function() {
        this.j.dispatchEvent("n")
    };
    var Q7 = new g.ai;
    g.z(Qsb, g.Jh);
    g.k = S7.prototype;
    g.k.jw = null;
    g.k.At = !1;
    g.k.Gz = null;
    g.k.RN = null;
    g.k.CD = null;
    g.k.LI = null;
    g.k.zD = null;
    g.k.KI = null;
    g.k.mw = null;
    g.k.xj = null;
    g.k.NI = 0;
    g.k.A3 = null;
    g.k.MI = null;
    g.k.lw = null;
    g.k.BD = -1;
    g.k.B2 = !0;
    g.k.AD = !1;
    g.k.QN = 0;
    g.k.JI = null;
    var Wsb = {},
        Vsb = {};
    g.k = S7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.C5 = function(a) {
        a = a.target;
        var b = this.JI;
        b && g.Yi(a) == 3 ? b.PN() : this.KV(a)
    };
    g.k.KV = function(a) {
        try {
            if (a == this.xj) a: {
                var b = g.Yi(this.xj),
                    c = this.xj.B,
                    d = this.xj.getStatus();
                if (g.Yg && !g.lc("420+")) {
                    if (b < 4) break a
                } else if (b < 3 || b == 3 && !g.$i(this.xj)) break a;this.AD || b != 4 || c == 7 || (c == 8 || d <= 0 ? this.j.Fs(3) : this.j.Fs(2));Zsb(this);
                var e = this.xj.getStatus();this.BD = e;
                var f = g.$i(this.xj);
                if (this.At = e == 200) {
                    b == 4 && T7(this);
                    if (this.Ga) {
                        for (a = !0; !this.AD && this.NI < f.length;) {
                            var h = Xsb(this, f);
                            if (h == Vsb) {
                                b == 4 && (this.lw = 4, R7(15), a = !1);
                                break
                            } else if (h == Wsb) {
                                this.lw = 4;
                                R7(16);
                                a = !1;
                                break
                            } else atb(this,
                                h)
                        }
                        b == 4 && f.length == 0 && (this.lw = 1, R7(17), a = !1);
                        this.At = this.At && a;
                        a || (T7(this), $sb(this))
                    } else atb(this, f);
                    this.At && !this.AD && (b == 4 ? this.j.UN(this) : (this.At = !1, Usb(this)))
                } else e == 400 && f.indexOf("Unknown SID") > 0 ? (this.lw = 3, R7(13)) : (this.lw = 0, R7(14)),
                T7(this),
                $sb(this)
            }
        } catch (l) {} finally {}
    };
    g.k.cancel = function() {
        this.AD = !0;
        T7(this)
    };
    g.k.B5 = function() {
        this.Gz = null;
        var a = Date.now();
        a - this.RN >= 0 ? (this.LI != 2 && this.j.Fs(3), T7(this), this.lw = 2, R7(18), $sb(this)) : Ysb(this, this.RN - a)
    };
    g.k.getLastError = function() {
        return this.lw
    };
    g.k = dtb.prototype;
    g.k.TN = null;
    g.k.yl = null;
    g.k.EM = !1;
    g.k.VN = null;
    g.k.Am = null;
    g.k.Dr = -1;
    g.k.OI = null;
    g.k.HE = null;
    g.k.connect = function(a) {
        this.VN = a;
        a = V7(this.j, null, this.VN);
        R7(3);
        Date.now();
        var b = this.j.Y;
        b != null ? (this.OI = b[0], (this.HE = b[1]) ? (this.Am = 1, etb(this)) : (this.Am = 2, ftb(this))) : (e7(a, "MODE", "init"), this.yl = new S7(this), this.yl.jw = this.TN, Tsb(this.yl, a, !1, null, !0), this.Am = 0)
    };
    g.k.O7 = function(a) {
        if (a) this.Am = 2, ftb(this);
        else {
            R7(4);
            var b = this.j;
            b.Hp = b.Pt.Dr;
            Z7(b, 9)
        }
        a && this.Fs(2)
    };
    g.k.SN = function(a) {
        return this.j.SN(a)
    };
    g.k.abort = function() {
        this.yl && (this.yl.cancel(), this.yl = null);
        this.Dr = -1
    };
    g.k.Og = function() {
        return !1
    };
    g.k.LV = function(a, b) {
        this.Dr = a.BD;
        if (this.Am == 0)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Hp = this.Dr;
                    Z7(a, 2);
                    return
                }
                this.OI = c[0];
                this.HE = c[1]
            } else a = this.j, a.Hp = this.Dr, Z7(a, 2);
        else this.Am == 2 && (this.EM ? (R7(7), Date.now()) : b == "11111" ? (R7(6), this.EM = !0, Date.now(), this.Dr = 200, this.yl.cancel(), R7(12), W7(this.j, this, !0)) : (R7(8), Date.now(), this.EM = !1))
    };
    g.k.UN = function() {
        this.Dr = this.yl.BD;
        if (this.yl.At) this.Am == 0 ? this.HE ? (this.Am = 1, etb(this)) : (this.Am = 2, ftb(this)) : this.Am == 2 && (this.EM ? (R7(12), W7(this.j, this, !0)) : (R7(11), W7(this.j, this, !1)));
        else {
            this.Am == 0 ? R7(9) : this.Am == 2 && R7(10);
            var a = this.j;
            this.yl.getLastError();
            a.Hp = this.Dr;
            Z7(a, 2)
        }
    };
    g.k.DD = function() {
        return this.j.DD()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Fs = function(a) {
        this.j.Fs(a)
    };
    g.k = gtb.prototype;
    g.k.Gp = null;
    g.k.ED = null;
    g.k.Bk = null;
    g.k.Yg = null;
    g.k.XN = null;
    g.k.QI = null;
    g.k.MV = null;
    g.k.WN = null;
    g.k.FD = 0;
    g.k.E5 = 0;
    g.k.Ui = null;
    g.k.Bt = null;
    g.k.Er = null;
    g.k.ow = null;
    g.k.Pt = null;
    g.k.BN = null;
    g.k.Jz = -1;
    g.k.NV = -1;
    g.k.Hp = -1;
    g.k.Iz = 0;
    g.k.Hz = 0;
    g.k.nw = 8;
    g.Ya(itb, g.Jh);
    g.Ya(jtb, g.Jh);
    g.k = gtb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        R7(0);
        this.XN = b;
        this.ED = c || {};
        d && e !== void 0 && (this.ED.OSID = d, this.ED.OAID = e);
        this.Z ? (P7((0, g.Va)(this.XX, this, a), 100), ltb(this)) : this.XX(a)
    };
    g.k.disconnect = function() {
        mtb(this);
        if (this.j == 3) {
            var a = this.FD++,
                b = this.QI.clone();
            g.uk(b, "SID", this.D);
            g.uk(b, "RID", a);
            g.uk(b, "TYPE", "terminate");
            Y7(this, b);
            a = new S7(this, this.D, a);
            a.LI = 2;
            a.zD = d7(b.clone());
            (new Image).src = a.zD.toString();
            a.CD = Date.now();
            Usb(a)
        }
        wtb(this)
    };
    g.k.XX = function(a) {
        this.Pt = new dtb(this);
        this.Pt.TN = this.Gp;
        this.Pt.B = this.G;
        this.Pt.connect(a)
    };
    g.k.Og = function() {
        return this.j == 0
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.PV = function(a) {
        this.Bt = null;
        rtb(this, a)
    };
    g.k.OV = function() {
        this.Er = null;
        this.Yg = new S7(this, this.D, "rpc", this.N);
        this.Yg.jw = this.Gp;
        this.Yg.QN = 0;
        var a = this.MV.clone();
        g.uk(a, "RID", "rpc");
        g.uk(a, "SID", this.D);
        g.uk(a, "CI", this.BN ? "0" : "1");
        g.uk(a, "AID", this.Jz);
        Y7(this, a);
        g.uk(a, "TYPE", "xmlhttp");
        Tsb(this.Yg, a, !0, this.WN, !1)
    };
    g.k.LV = function(a, b) {
        if (this.j != 0 && (this.Yg == a || this.Bk == a))
            if (this.Hp = a.BD, this.Bk == a && this.j == 3)
                if (this.nw > 7) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && c.length == 3)
                        if (a = c, a[0] == 0) a: {
                            if (!this.Er) {
                                if (this.Yg)
                                    if (this.Yg.CD + 3E3 < this.Bk.CD) X7(this), this.Yg.cancel(), this.Yg = null;
                                    else break a;
                                utb(this);
                                R7(19)
                            }
                        }
                    else this.NV = a[1], 0 < this.NV - this.Jz && a[2] < 37500 && this.BN && this.Hz == 0 && !this.ow && (this.ow = P7((0, g.Va)(this.F5, this), 6E3));
                    else Z7(this, 11)
                } else b != null && Z7(this, 11);
        else if (this.Yg ==
            a && X7(this), !g.sb(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Jz = c[0], c = c[1], this.j == 2 ? c[0] == "c" ? (this.D = c[1], this.WN = c[2], c = c[3], c != null ? this.nw = c : this.nw = 6, this.j = 3, this.Ui && this.Ui.SV(), this.MV = V7(this, this.DD() ? this.WN : null, this.XN), stb(this)) : c[0] == "stop" && Z7(this, 7) : this.j == 3 && (c[0] == "stop" ? Z7(this, 7) : c[0] != "noop" && this.Ui && this.Ui.RV(c), this.Hz = 0)
    };
    g.k.F5 = function() {
        this.ow != null && (this.ow = null, this.Yg.cancel(), this.Yg = null, utb(this), R7(20))
    };
    g.k.UN = function(a) {
        if (this.Yg == a) {
            X7(this);
            this.Yg = null;
            var b = 2
        } else if (this.Bk == a) this.Bk = null, b = 1;
        else return;
        this.Hp = a.BD;
        if (this.j != 0)
            if (a.At)
                if (b == 1) {
                    b = a.mw ? a.mw.length : 0;
                    a = Date.now() - a.CD;
                    var c = Q7;
                    c.dispatchEvent(new itb(c, b, a, this.Iz));
                    ktb(this);
                    this.C.length = 0
                } else stb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = c == 3 || c == 7 || c == 0 && this.Hp > 0)) {
                if (d = b == 1) this.Bk || this.Bt || this.j == 1 || this.Iz >= 2 ? d = !1 : (this.Bt = P7((0, g.Va)(this.PV, this, a), ttb(this, this.Iz)), this.Iz++, d = !0);
                d = !(d || b == 2 && utb(this))
            }
            if (d) switch (c) {
                case 1:
                    Z7(this,
                        5);
                    break;
                case 4:
                    Z7(this, 10);
                    break;
                case 3:
                    Z7(this, 6);
                    break;
                case 7:
                    Z7(this, 12);
                    break;
                default:
                    Z7(this, 2)
            }
        }
    };
    g.k.D5 = function(a) {
        if (!g.Tb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.ffa = function(a) {
        a ? R7(2) : (R7(1), vtb(this, 8))
    };
    g.k.SN = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Vi;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Ui && this.Ui.isActive(this)
    };
    g.k.Fs = function(a) {
        var b = Q7;
        b.dispatchEvent(new jtb(b, a))
    };
    g.k.DD = function() {
        return !1
    };
    g.k = xtb.prototype;
    g.k.SV = function() {};
    g.k.RV = function() {};
    g.k.QV = function() {};
    g.k.YN = function() {};
    g.k.TV = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = ytb.prototype;
    g.k.enqueue = function(a) {
        this.B.push(a)
    };
    g.k.isEmpty = function() {
        return this.j.length === 0 && this.B.length === 0
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Tb(this.j, a) || g.Tb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.L9a)(b, a);
        c >= 0 ? (g.Ub(b, c), b = !0) : b = !1;
        return b || g.Vb(this.B, a)
    };
    g.k.Wm = function() {
        for (var a = [], b = this.j.length - 1; b >= 0; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.z(ztb, g.Jh);
    g.z(Atb, g.Jh);
    g.Ya($7, g.O);
    g.k = $7.prototype;
    g.k.Vca = function() {
        this.ej = Math.min(3E5, this.ej * 2);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.ej + 15E3 * Math.random();
        g.$o(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.ej = 5E3
    };
    g.Ya(Ctb, xtb);
    g.k = Ctb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Bh = function(a) {
        return this.C.Bh(a)
    };
    g.k.publish = function(a, b) {
        return this.C.publish.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.ig(this.C), this.disconnect(), g.ig(this.B), this.B = null, this.qa = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.oa
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || this.j.getState() != 2) {
            this.Y = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new gtb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Qa),
                e = this.j;
            e && (e.Ui = null);
            d.Ui = this;
            this.j = d;
            Dtb(this);
            if (this.j) {
                d = g.Uq("ID_TOKEN");
                var f = this.j.Gp || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Gp = f
            }
            e ? (e.getState() != 3 && otb(e) == 0 || e.getState(), this.j.connect(a, b, this.N, e.D, e.Jz)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        Dtb(this);
        this.j && (this.j.getState() == 3 && rtb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.Eg(a, b);
        this.B.isActive() || (this.j ? this.j.getState() : 0) == 2 ? this.D.push(a) : this.bB() && (Dtb(this), ntb(this.j, a))
    };
    g.k.SV = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) ntb(this.j, a[b])
        }
        this.publish("handlerOpened");
        Xqb(this.Ma, "BROWSER_CHANNEL")
    };
    g.k.QV = function(a) {
        var b = a == 2 && this.j.Hp == 401;
        a == 4 || b || this.B.start();
        this.publish("handlerError", a, b);
        crb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.YN = function(a, b) {
        if (!this.B.isActive()) this.publish("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        Zqb(this.Da, "BROWSER_CHANNEL");
        a && this.Va.j.aO("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Xa.j.aO("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.TV = function() {
        var a = {
            v: 2
        };
        this.Y && (a.gsessionid = this.Y);
        this.G != 0 && (a.ui = "" + this.G);
        this.Z != 0 && (a.ui = "" + this.Z);
        this.K && g.Eg(a, this.K);
        return a
    };
    g.k.RV = function(a) {
        a[0] == "S" ? this.Y = a[1] : a[0] == "gracefulReconnect" ? (this.B.start(), this.j.disconnect()) : this.publish("handlerMessage", new Btb(a[0], a[1]));
        arb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.bB = function() {
        return !!this.j && this.j.getState() == 3
    };
    g.k.Rs = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Ua && this.j) {
            var b = this.j.Gp || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Gp = b
        }
    };
    g.k.getDeviceId = function() {
        return this.N.id
    };
    g.k.nu = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Ty = function() {
        var a = this.B;
        g.ap(a.j);
        a.start()
    };
    g.k.oea = function() {
        this.B.isActive();
        otb(this.j) == 0 && this.connect(this.K, this.G)
    };
    a8.prototype.sendRequest = function(a, b, c, d, e, f, h) {
        a = {
            format: f ? "RAW" : "JSON",
            method: a,
            context: this,
            timeout: 5E3,
            withCredentials: !!h,
            onSuccess: g.Wa(this.D, d, !f),
            onError: g.Wa(this.C, e),
            onTimeout: g.Wa(this.G, e)
        };
        c && (a.postParams = c, a.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.yr(b, a)
    };
    a8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    a8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    a8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.z(Etb, g.ai);
    g.k = Etb.prototype;
    g.k.connect = function(a, b, c) {
        this.Gd.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Gd.disconnect(a)
    };
    g.k.Ty = function() {
        this.Gd.Ty()
    };
    g.k.getDeviceId = function() {
        return this.Gd.getDeviceId()
    };
    g.k.nu = function() {
        return this.Gd.nu()
    };
    g.k.bB = function() {
        return this.Gd.bB()
    };
    g.k.G5 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Gd,
            b = this.j;
        g.Hs("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.BN,
            sessionId: a.j.D,
            arrayId: a.j.Jz
        });
        g.Hs("yt-remote-session-screen-id", b);
        a = o7();
        b = p7();
        g.Tb(a, b) || a.push(b);
        vrb(a);
        xrb()
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new ztb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new Atb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Gd.sendMessage(a, b)
    };
    g.k.Rs = function(a) {
        this.Gd.Rs(a)
    };
    g.k.dispose = function() {
        this.Gd.dispose()
    };
    g.k = Ftb.prototype;
    g.k.connect = function(a, b) {
        a = a === void 0 ? {} : a;
        b = b === void 0 ? 0 : b;
        this.K !== 2 && (this.C.stop(), this.Z = a, this.N = b, Htb(this), (a = g.Uq("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.maa && (this.B.mdxVersion = "" + this.j.maa), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.f8 && (this.B.cst = this.j.f8),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), this.N !== 0 ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new O7(this.pathPrefix, {
            u$: "gsessionid",
            qaa: this.D,
            raa: this.B
        }), this.channel.open(), this.K = 2, Gtb(this))
    };
    g.k.disconnect = function(a) {
        this.Y = a === void 0 ? 0 : a;
        this.C.stop();
        Htb(this);
        this.channel && (this.Y !== 0 ? this.B.ui = "" + this.Y : delete this.B.ui, this.channel.close());
        this.Y = 0
    };
    g.k.nu = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Ty = function() {
        var a = this.C;
        g.ap(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (Htb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.Rs = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.getDeviceId = function() {
        return this.j ? this.j.id : ""
    };
    g.k.publish = function(a) {
        return this.G.publish.apply(this.G, [a].concat(g.x(g.Da.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Bh = function(a) {
        return this.G.Bh(a)
    };
    g.k.dispose = function() {
        this.oa || (this.oa = !0, g.ig(this.G), this.disconnect(), g.ig(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.Ja = function() {
        return this.oa
    };
    g.z(Itb, g.ai);
    g.k = Itb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Ty = function() {
        this.j.Ty()
    };
    g.k.getDeviceId = function() {
        return this.j.getDeviceId()
    };
    g.k.nu = function() {
        return this.j.nu()
    };
    g.k.bB = function() {
        return this.j.K === 3
    };
    g.k.H5 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.onMessage = function(a) {
        this.dispatchEvent(new ztb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new Atb(this.j.Cg === 401 ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.Rs = function(a) {
        this.j.Rs(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var Qtb = Date.now(),
        c8 = null,
        g8 = Array(50),
        f8 = -1,
        h8 = !1;
    g.Ya(i8, g.gx);
    i8.prototype.Ml = function() {
        return this.screens
    };
    i8.prototype.contains = function(a) {
        return !!srb(this.screens, a)
    };
    i8.prototype.get = function(a) {
        return a ? n7(this.screens, a) : null
    };
    i8.prototype.info = function(a) {
        d8(this.K, a)
    };
    g.z(Utb, g.gx);
    g.k = Utb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.qd) && this.D1()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.qd) || (g.qr(this.qd), this.qd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.gx.prototype.xa.call(this)
    };
    g.k.D1 = function() {
        this.qd = NaN;
        this.j = g.yr(b8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.Va)(this.J5, this),
            onError: (0, g.Va)(this.I5, this),
            onTimeout: (0, g.Va)(this.K5, this)
        })
    };
    g.k.J5 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new k7(a), b)
    };
    g.k.I5 = function(a) {
        this.j = null;
        a.status && a.status == 404 ? this.B >= Ovb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Ovb[this.B], this.qd = g.or((0, g.Va)(this.D1, this), a), this.B++) : this.publish("pairingFailed", Error("Server error " + a.status))
    };
    g.k.K5 = function() {
        this.j = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var Ovb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ya(k8, i8);
    g.k = k8.prototype;
    g.k.start = function() {
        j8(this) && this.publish("screenChange");
        !g.Is("yt-remote-lounge-token-expiration") && Vtb(this);
        g.qr(this.j);
        this.j = g.or((0, g.Va)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        j8(this);
        Rtb(this, a);
        l8(this, !1);
        this.publish("screenChange");
        b(a);
        a.token || Vtb(this)
    };
    g.k.remove = function(a, b) {
        var c = j8(this);
        Ttb(this, a) && (l8(this, !1), c = !0);
        b(a);
        c && this.publish("screenChange")
    };
    g.k.AN = function(a, b, c, d) {
        var e = j8(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, l8(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.publish("screenChange")
    };
    g.k.xa = function() {
        g.qr(this.j);
        k8.Tf.xa.call(this)
    };
    g.k.U9 = function(a) {
        j8(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        l8(this, !b);
        b && d8(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.T9 = function(a) {
        d8(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.z(Xtb, g.gx);
    g.k = Xtb.prototype;
    g.k.start = function() {
        var a = parseInt(g.Is("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.Xa() - 144E5 < a ? 0 : a) ? m8(this): (this.D = g.Xa() + 3E5, g.Hs("yt-remote-fast-check-period", this.D), this.GT())
    };
    g.k.isEmpty = function() {
        return g.zg(this.j)
    };
    g.k.update = function() {
        Wtb("Updating availability on schedule.");
        var a = this.K(),
            b = g.qg(this.j, function(c, d) {
                return c && !!n7(a, d)
            }, this);
        $tb(this, b)
    };
    g.k.xa = function() {
        g.qr(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.gx.prototype.xa.call(this)
    };
    g.k.GT = function() {
        g.qr(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = aub(this);
        if (Pqb(a)) {
            var b = b8(this.G, "/pairing/get_screen_availability");
            this.B = this.G.sendRequest("POST", b, {
                lounge_token: g.vg(a).join(",")
            }, (0, g.Va)(this.Dca, this, a), (0, g.Va)(this.Cca, this))
        } else $tb(this, {}), m8(this)
    };
    g.k.Dca = function(a, b) {
        this.B = null;
        var c = g.vg(aub(this));
        if (g.gc(c, g.vg(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = b[e].status == "online";
            $tb(this, c);
            m8(this)
        } else this.pg("Changing Screen set during request."), this.GT()
    };
    g.k.Cca = function(a) {
        this.pg("Screen availability failed: " + a);
        this.B = null;
        m8(this)
    };
    g.k.pg = function(a) {
        d8("OnlineScreenService", a)
    };
    g.Ya(n8, i8);
    g.k = n8.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.AN = function(a, b, c, d) {
        this.B.contains(a) ? this.B.AN(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, d8(this.K, a), d(Error(a)))
    };
    g.k.Ml = function(a) {
        return a ? this.screens : g.Xb(this.screens, g.jn(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.UV = function() {
        return g.jn(this.Ml(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.VV = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new Utb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.ig(l);
            e(o8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.ig(l);
            f(m)
        });
        l.start();
        return (0, g.Va)(l.stop, l)
    };
    g.k.L5 = function(a, b, c, d) {
        g.yr(b8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.Va)(function(e, f) {
                e = new k7(f.screen || {});
                if (!e.name || eub(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); eub(this, l);) {
                            h++;
                            if (h > 20) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(o8(this, e))
            }, this),
            onError: (0, g.Va)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.Va)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.ig(this.B);
        g.ig(this.j);
        n8.Tf.xa.call(this)
    };
    g.k.e$ = function() {
        gub(this);
        this.publish("screenChange");
        this.j.update()
    };
    n8.prototype.dispose = n8.prototype.dispose;
    g.Ya(p8, g.gx);
    g.k = p8.prototype;
    g.k.Rj = function(a) {
        this.Ja() || (a && (r8(this, "" + a), this.publish("sessionFailed")), this.j = null, this.publish("sessionScreen", null))
    };
    g.k.info = function(a) {
        d8(this.Ga, a)
    };
    g.k.WV = function() {
        return null
    };
    g.k.bU = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.Va)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.Va)(function() {
            r8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.bU("");
        p8.Tf.xa.call(this)
    };
    g.z(s8, p8);
    g.k = s8.prototype;
    g.k.ZT = function(a) {
        if (this.C) {
            if (this.C == a) return;
            r8(this, "Overriding cast session with new session object");
            sub(this);
            this.Ba = !1;
            this.Y = "unknown";
            this.C.removeUpdateListener(this.qa);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da)
        }
        this.C = a;
        this.C.addUpdateListener(this.qa);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da);
        nub(this, "getMdxSessionStatus")
    };
    g.k.oB = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Bi(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.Va)(function() {
            this.Rj()
        }, this), (0, g.Va)(function() {
            this.Rj(Error("Failed to stop receiver app."))
        }, this)) : this.Rj(Error("Stopping cast device without session."))
    };
    g.k.bU = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        sub(this);
        this.C && (this.C.removeUpdateListener(this.qa), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Da));
        this.C = null;
        p8.prototype.xa.call(this)
    };
    g.k.kda = function(a, b) {
        if (!this.Ja())
            if (b)
                if (b = f7(b), g.Ra(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Bi(b)), a) {
                    case "mdxSessionStatus":
                        kub(this, b);
                        break;
                    case "loungeToken":
                        oub(this, b);
                        break;
                    default:
                        r8(this, "Unknown youtube message: " + a)
                } else r8(this, "Unable to parse message.");
                else r8(this, "No data in message.")
    };
    g.k.eZ = function(a, b, c, d) {
        g.qr(this.Z);
        this.Z = 0;
        dub(this.D, this.B.label, a, this.B.friendlyName, (0, g.Va)(function(e) {
            e ? b(e) : d >= 0 ? (r8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.or((0, g.Va)(this.eZ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.WV = function() {
        return this.C
    };
    g.k.M5 = function(a) {
        this.Ja() || a || (r8(this, "Cast session died."), this.Rj())
    };
    g.z(t8, p8);
    g.k = t8.prototype;
    g.k.ZT = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ka)
    };
    g.k.oB = function(a) {
        this.Ma = a;
        this.oa()
    };
    g.k.stop = function() {
        Aub(this);
        this.C ? this.C.stop((0, g.Va)(this.Rj, this, null), (0, g.Va)(this.Rj, this, "Failed to stop DIAL device.")) : this.Rj()
    };
    g.k.xa = function() {
        Aub(this);
        this.C && this.C.removeUpdateListener(this.Ka);
        this.C = null;
        p8.prototype.xa.call(this)
    };
    g.k.N5 = function(a) {
        this.Ja() || a || (r8(this, "DIAL session died."), this.G(), this.G = function() {}, this.Rj())
    };
    g.z(w8, p8);
    w8.prototype.stop = function() {
        this.Rj()
    };
    w8.prototype.ZT = function() {};
    w8.prototype.oB = function() {
        g.qr(this.C);
        this.C = NaN;
        var a = n7(this.D.Ml(), this.B.label);
        a ? q8(this, a) : this.Rj(Error("No such screen"))
    };
    w8.prototype.xa = function() {
        g.qr(this.C);
        this.C = NaN;
        p8.prototype.xa.call(this)
    };
    g.z(x8, g.gx);
    g.k = x8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        g.tr("desktop_enable_cast_connect") && (c.androidReceiverCompatible = !0);
        this.Y || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.Va)(this.kca, this);
        c = new chrome.cast.ApiConfig(c, (0, g.Va)(this.R0,
            this), e, d, a);
        c.customDialLaunchCallback = (0, g.Va)(this.dba, this);
        chrome.cast.initialize(c, (0, g.Va)(function() {
            this.Ja() || (chrome.cast.addReceiverActionListener(this.G), Ntb(), this.B.subscribe("onlineScreenChange", (0, g.Va)(this.XV, this)), this.C = Dub(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Va)(function(f) {
                this.pg("Failed to set initial custom receivers: " + g.Bi(f))
            }, this)), this.publish("yt-remote-cast2-availability-change", z8(this)), b(!0))
        }, this), (0, g.Va)(function(f) {
            this.pg("Failed to initialize API: " +
                g.Bi(f));
            b(!1)
        }, this))
    };
    g.k.Aea = function(a, b) {
        y8("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) y8("Unsetting old screen status: " + this.j.B.friendlyName), A8(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = n7(this.B.Ml(), a);
                if (!a) {
                    y8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (a.idType == "shortLived") {
                    y8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = Bub(this, a);
                c || (y8("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Va)(function(d) {
                    this.pg("Failed to set initial custom receivers: " + g.Bi(d))
                }, this)));
                y8("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                A8(this, new w8(this.B, c), !0)
            }
            this.j.bU(b)
        } else y8("setConnectedScreenStatus: no screen.")
    };
    g.k.Dea = function(a) {
        this.Ja() ? this.pg("Setting connection data on disposed cast v2") : this.j ? this.j.oB(a) : this.pg("Setting connection data without a session")
    };
    g.k.P5 = function() {
        this.Ja() ? this.pg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), A8(this, null)) : y8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.Va)(this.R0, this), (0, g.Va)(this.Gca, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.Va)(this.XV, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = Ktb,
            b = g.Na("yt.mdx.remote.debug.handlers_");
        g.Vb(b || [], a);
        g.ig(this.j);
        g.gx.prototype.xa.call(this)
    };
    g.k.pg = function(a) {
        d8("Controller", a)
    };
    g.k.T0 = function(a, b) {
        this.j == a && (b || A8(this, null), this.publish("yt-remote-cast2-session-change", b))
    };
    g.k.hca = function(a, b) {
        if (!this.Ja())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), y8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) y8("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            y8("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.publish("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            A8(this,
                                new w8(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            A8(this, new t8(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            A8(this, new s8(this.B, a, this.config_));
                            break;
                        default:
                            this.pg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.pg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.pg("onReceiverAction_ called without receiver.")
    };
    g.k.dba = function(a) {
        if (this.Ja()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.pg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.pg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return y8("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.pg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            A8(this, new t8(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, u8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = xub(b, {
            name: b.B.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.Z.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Xq(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = yub(b, c)) : a = yub(b, c)) : a = vub(b);
        return a
    };
    g.k.R0 = function(a) {
        var b = this;
        if (!this.Ja() && !this.K) {
            y8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) y8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), A8(this, new s8(this.B, c, this.config_), !0);
                    else {
                        this.pg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = n7(this.B.Ml(),
                        d.label);
                e && l7(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (y8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.ig(this.j), this.j = new s8(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Va)(this.T0, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return Cub(b, b.j)
                }), this.j.oB(null));
                this.j.ZT(a)
            }
        }
    };
    g.k.O5 = function() {
        return this.j ? this.j.WV() : null
    };
    g.k.Gca = function(a) {
        this.Ja() || (this.pg("Failed to estabilish a session: " + g.Bi(a)), a.code != chrome.cast.ErrorCode.CANCEL && A8(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.k.kca = function(a) {
        y8("Receiver availability updated: " + a);
        if (!this.Ja()) {
            var b = z8(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            z8(this) != b && this.publish("yt-remote-cast2-availability-change", z8(this))
        }
    };
    g.k.XV = function() {
        this.Ja() || (this.C = Dub(this), y8("Updating custom receivers: " + g.Bi(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.Va)(function() {
            this.pg("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", z8(this)))
    };
    x8.prototype.setLaunchParams = x8.prototype.Dea;
    x8.prototype.setConnectedScreenStatus = x8.prototype.Aea;
    x8.prototype.stopSession = x8.prototype.P5;
    x8.prototype.getCastSession = x8.prototype.O5;
    x8.prototype.requestSession = x8.prototype.requestSession;
    x8.prototype.init = x8.prototype.init;
    x8.prototype.dispose = x8.prototype.dispose;
    var Mub = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        Sub(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.mq = a.hasPrevious, this.Pl = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return this.playerState == 1
    };
    g.k.isBuffering = function() {
        return this.playerState == 3
    };
    g.k.Rl = function() {
        return this.playerState == 1081
    };
    g.k.er = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + I8(this) : this.G
    };
    g.k.clone = function() {
        return new H8(Tub(this))
    };
    g.z(N8, g.gx);
    g.k = N8.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.nu = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Ty = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        P8(this) ? (this.j ? this.j.play(null, g.ei, T8(this, "play")) : S8(this, "play"), Wub(this, 1, K8(O8(this))), this.publish("remotePlayerChange")) : Q8(this, this.play)
    };
    g.k.pause = function() {
        P8(this) ? (this.j ? this.j.pause(null, g.ei, T8(this, "pause")) : S8(this, "pause"), Wub(this, 2, K8(O8(this))), this.publish("remotePlayerChange")) : Q8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (P8(this)) {
            if (this.j) {
                var b = O8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || b.isBuffering() ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.ei, T8(this, "seekTo", {
                    newTime: a
                }))
            } else S8(this, "seekTo", {
                newTime: a
            });
            Wub(this, 3, a);
            this.publish("remotePlayerChange")
        } else Q8(this, g.Wa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (P8(this)) {
            this.j ? this.j.stop(null, g.ei, T8(this, "stopVideo")) : S8(this, "stopVideo");
            var a = O8(this);
            a.index = -1;
            a.videoId = "";
            Sub(a);
            R8(this, a);
            this.publish("remotePlayerChange")
        } else Q8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (P8(this)) {
            var c = O8(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.Va)(function() {
                        e8("set receiver volume: " + d)
                    }, this), (0, g.Va)(function() {
                        this.pg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.Va)(function() {
                    e8("set receiver muted: " + b)
                }, this), (0, g.Va)(function() {
                    this.pg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                };
                c.volume != -1 && (e.delta = a - c.volume);
                S8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            R8(this, c)
        } else Q8(this, g.Wa(this.setVolume, a, b))
    };
    g.k.YV = function(a, b) {
        if (P8(this)) {
            var c = O8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Bi(b.style), g.Eg(a, c.trackData));
            S8(this, "setSubtitlesTrack", a);
            R8(this, c)
        } else Q8(this, g.Wa(this.YV, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        P8(this) ? (b = b.getLanguageInfo().getId(), S8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = O8(this), a.audioTrackId = b, R8(this, a)) : Q8(this, g.Wa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = d === void 0 ? null : d;
        e = e === void 0 ? null : e;
        f = f === void 0 ? null : f;
        h = h === void 0 ? null : h;
        var l = O8(this),
            m = {
                videoId: a
            };
        c !== void 0 && (m.currentIndex = c);
        L8(l, a, c || 0);
        b !== void 0 && (J8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Bi(h));
        S8(this, "setPlaylist", m);
        d || R8(this, l)
    };
    g.k.yM = function(a, b) {
        if (P8(this)) {
            if (a && b) {
                var c = O8(this);
                L8(c, a, b);
                R8(this, c)
            }
            S8(this, "previous")
        } else Q8(this, g.Wa(this.yM, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (P8(this)) {
            if (a && b) {
                var c = O8(this);
                L8(c, a, b);
                R8(this, c)
            }
            S8(this, "next")
        } else Q8(this, g.Wa(this.nextVideo, a, b))
    };
    g.k.iP = function() {
        if (P8(this)) {
            S8(this, "clearPlaylist");
            var a = O8(this);
            a.reset();
            R8(this, a);
            this.publish("remotePlayerChange")
        } else Q8(this, this.iP)
    };
    g.k.kY = function() {
        P8(this) ? S8(this, "dismissAutoplay") : Q8(this, this.kY)
    };
    g.k.dispose = function() {
        if (this.C != 3) {
            var a = this.C;
            this.C = 3;
            this.publish("proxyStateChange", a, this.C)
        }
        g.gx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        Vub(this);
        this.D = null;
        this.G.clear();
        M8(this, null);
        g.gx.prototype.xa.call(this)
    };
    g.k.fU = function(a) {
        if ((a != this.C || a == 2) && this.C != 3 && a != 0) {
            var b = this.C;
            this.C = a;
            this.publish("proxyStateChange", b, a);
            if (a == 1)
                for (; !this.G.isEmpty();) b = a = this.G, b.j.length === 0 && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else a == 3 && this.dispose()
        }
    };
    g.k.fca = function(a, b) {
        this.publish(a, b)
    };
    g.k.Uaa = function(a) {
        if (!a) this.NG(null), M8(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = O8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) e8("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, R8(this, b)
        }
    };
    g.k.NG = function(a) {
        e8("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), Xub(this), this.publish("remotePlayerChange")
    };
    g.k.Taa = function(a) {
        a ? (Xub(this), this.publish("remotePlayerChange")) : this.NG(null)
    };
    g.k.MU = function() {
        S8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.Waa = function() {
        var a = Pub();
        a && M8(this, a)
    };
    g.k.pg = function(a) {
        d8("CP", a)
    };
    g.z(W8, g.gx);
    g.k = W8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            n !== void 0 && (m.currentTime = n <= 5 ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && e.length > 0 && (m.videoIds = e.join(","));
            l !== void 0 && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            J8(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            U8("Connecting with " + c + " and params: " + g.Bi(m));
            this.B.connect({
                method: c,
                params: g.Bi(m)
            }, a, yrb())
        } else U8("Connecting without params"), this.B.connect({}, a, yrb());
        avb(this)
    };
    g.k.Rs = function(a) {
        this.B.Rs(a)
    };
    g.k.dispose = function() {
        this.Ja() || (g.Ma("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), V8(this, 3));
        g.gx.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        bvb(this);
        dvb(this);
        cvb(this);
        g.qr(this.Z);
        this.Z = NaN;
        g.qr(this.Y);
        this.Y = NaN;
        this.D = null;
        g.xs(this.oa);
        this.oa.length = 0;
        this.B.dispose();
        g.gx.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.d_ = function(a) {
        if (!this.C || this.C.length === 0) return !1;
        for (var b = g.w(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.B9 = function() {
        var a = 3;
        this.Ja() || (a = 0, isNaN(this.MF()) ? this.B.bB() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.rA = function(a) {
        U8("Disconnecting with " + a);
        g.Ma("yt.mdx.remote.remoteClient_", null);
        bvb(this);
        this.publish("beforeDisconnect", a);
        a == 1 && q7();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.v9 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), L8(a, this.D, a.index));
        return Tub(a)
    };
    g.k.Gea = function(a) {
        var b = this,
            c = new H8(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.qr(this.Z), this.Z = g.or(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && X8(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && K8(this.j) == K8(c) && g.Bi(this.j.trackData) == g.Bi(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.ic(d, function(e) {
            this.publish(e)
        }, this)
    };
    g.k.ZY = function() {
        var a = this.B.getDeviceId(),
            b = g.Rb(this.C, function(c) {
                return c.type == "REMOTE_CONTROL" && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.MF = function() {
        return this.B.nu()
    };
    g.k.f9 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.g9 = function() {
        return this.N || ""
    };
    g.k.Q5 = function() {
        !isNaN(this.MF()) && this.B.Ty()
    };
    g.k.xea = function(a, b) {
        X8(this, a, b);
        fvb(this)
    };
    g.k.ZV = function() {
        var a = g.Jr("SAPISID", "") || g.Jr("__Secure-1PAPISID") || "",
            b = g.Jr("__Secure-3PAPISID", "") || "";
        if (!a && !b) return "";
        a = g.mc(g.pb(a), 2);
        b = g.mc(g.pb(b), 2);
        return g.mc(g.pb("," + a + "," + b), 2)
    };
    W8.prototype.subscribe = W8.prototype.subscribe;
    W8.prototype.unsubscribeByKey = W8.prototype.Bh;
    W8.prototype.getProxyState = W8.prototype.B9;
    W8.prototype.disconnect = W8.prototype.rA;
    W8.prototype.getPlayerContextData = W8.prototype.v9;
    W8.prototype.setPlayerContextData = W8.prototype.Gea;
    W8.prototype.getOtherConnectedRemoteId = W8.prototype.ZY;
    W8.prototype.getReconnectTimeout = W8.prototype.MF;
    W8.prototype.getAutoplayMode = W8.prototype.f9;
    W8.prototype.getAutoplayVideoId = W8.prototype.g9;
    W8.prototype.reconnect = W8.prototype.Q5;
    W8.prototype.sendMessage = W8.prototype.xea;
    W8.prototype.getXsrfToken = W8.prototype.ZV;
    W8.prototype.isCapabilitySupportedOnConnectedDevices = W8.prototype.d_;
    g.z(rvb, i8);
    g.k = rvb.prototype;
    g.k.Ml = function(a) {
        return this.lh.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.lh.$_c(a)
    };
    g.k.get = function(a) {
        return this.lh.$_g(a)
    };
    g.k.start = function() {
        this.lh.$_st()
    };
    g.k.add = function(a, b, c) {
        this.lh.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.lh.$_r(a, b, c)
    };
    g.k.AN = function(a, b, c, d) {
        this.lh.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.lh.$_ubk(this.j[a]);
        this.j.length = 0;
        this.lh = null;
        i8.prototype.xa.call(this)
    };
    g.k.R5 = function() {
        this.publish("screenChange")
    };
    g.k.Oba = function() {
        this.publish("onlineScreenChange")
    };
    n8.prototype.$_st = n8.prototype.start;
    n8.prototype.$_gspc = n8.prototype.L5;
    n8.prototype.$_gsppc = n8.prototype.VV;
    n8.prototype.$_c = n8.prototype.contains;
    n8.prototype.$_g = n8.prototype.get;
    n8.prototype.$_a = n8.prototype.add;
    n8.prototype.$_un = n8.prototype.AN;
    n8.prototype.$_r = n8.prototype.remove;
    n8.prototype.$_gs = n8.prototype.Ml;
    n8.prototype.$_gos = n8.prototype.UV;
    n8.prototype.$_s = n8.prototype.subscribe;
    n8.prototype.$_ubk = n8.prototype.Bh;
    var h9 = null,
        k9 = !1,
        Y8 = null,
        Z8 = null,
        Cvb = null,
        c9 = [];
    g.z(Hvb, g.O);
    g.k = Hvb.prototype;
    g.k.xa = function() {
        g.O.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Hc;
        a.unsubscribe("proxyStateChange", this.P0, this);
        a.unsubscribe("remotePlayerChange", this.YG, this);
        a.unsubscribe("remoteQueueChange", this.fM, this);
        a.unsubscribe("previousNextChange", this.M0, this);
        a.unsubscribe("nowAutoplaying", this.I0, this);
        a.unsubscribe("autoplayDismissed", this.r0, this);
        this.Hc = this.module = null
    };
    g.k.Ol = function(a) {
        var b = g.Da.apply(1, arguments);
        if (this.Hc.C != 2)
            if (l9(this)) {
                if (!O8(this.Hc).Rl() || a !== "control_seek") switch (a) {
                    case "control_toggle_play_pause":
                        O8(this.Hc).isPlaying() ? this.Hc.pause() : this.Hc.play();
                        break;
                    case "control_play":
                        this.Hc.play();
                        break;
                    case "control_pause":
                        this.Hc.pause();
                        break;
                    case "control_seek":
                        this.K.PN(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        Jvb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    m9(this, b === 0 ? void 0 : b);
                    break;
                case "control_seek":
                    m9(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    Jvb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.Raa = function(a) {
        this.N.v5(a)
    };
    g.k.Efa = function(a) {
        this.Ol("control_subtitles_set_track", g.zg(a) ? null : a)
    };
    g.k.j3 = function() {
        var a = this.J.getOption("captions", "track");
        g.zg(a) || Jvb(this, a)
    };
    g.k.Rc = function(a) {
        this.module.Rc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.zba = function() {
        g.zg(this.C) || Kvb(this, this.C);
        this.D = !1
    };
    g.k.P0 = function(a, b) {
        this.B.stop();
        b === 2 && this.Y2()
    };
    g.k.YG = function() {
        if (l9(this)) {
            this.j.stop();
            var a = O8(this.Hc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.zi = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.zi = 0;
                    break;
                default:
                    this.module.zi = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Ec(new g.AF(8));
                    this.X2();
                    break;
                case 1085:
                case 3:
                    this.Ec(new g.AF(9));
                    break;
                case 1083:
                case 0:
                    this.Ec(new g.AF(2));
                    this.K.stop();
                    this.Rc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Ec(new g.AF(4));
                    break;
                case 2:
                    this.Ec(new g.AF(4));
                    this.Rc(K8(a));
                    break;
                case -1:
                    this.Ec(new g.AF(64));
                    break;
                case -1E3:
                    this.Ec(new g.AF(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        tA: 2
                    }))
            }
            a = O8(this.Hc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, Kvb(this, a));
            a = O8(this.Hc);
            a.volume === -1 || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.W3()
        } else Ivb(this)
    };
    g.k.M0 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.k.fM = function() {
        l9(this) || Ivb(this)
    };
    g.k.I0 = function(a) {
        isNaN(a) || this.J.publish("mdxnowautoplaying", a)
    };
    g.k.r0 = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        l9(this) && this.Hc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        O8(this.Hc).playerState === -1 ? m9(this, a) : b && this.Hc.seekTo(a)
    };
    g.k.W3 = function() {
        var a = this;
        if (l9(this)) {
            var b = O8(this.Hc);
            this.events.Mc(this.Y);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.Y = this.events.T(this.J, "onVolumeChange", function(c) {
                Fvb(a, c)
            })
        }
    };
    g.k.X2 = function() {
        this.j.stop();
        if (!this.Hc.Ja()) {
            var a = O8(this.Hc);
            a.isPlaying() && this.Ec(new g.AF(8));
            this.Rc(K8(a));
            this.j.start()
        }
    };
    g.k.Y2 = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Hc.nu();
        this.Hc.C == 2 && !isNaN(a) && this.B.start()
    };
    g.k.Ec = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.GF(b, a)) {
            var c = g.Z(a, 2);
            c !== g.Z(this.G, 2) && this.J.EC(c);
            this.G = a;
            Mvb(this.module, b, a)
        }
    };
    g.z(n9, g.T);
    n9.prototype.md = function() {
        this.j.show()
    };
    n9.prototype.Mb = function() {
        this.j.hide()
    };
    n9.prototype.B = function() {
        s7("mdx-privacy-popup-cancel");
        this.Mb()
    };
    n9.prototype.C = function() {
        s7("mdx-privacy-popup-confirm");
        this.Mb()
    };
    g.z(o9, g.T);
    o9.prototype.onStateChange = function(a) {
        this.ud(a.state)
    };
    o9.prototype.ud = function(a) {
        if (this.api.getPresentingPlayerType() === 3) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.Z(a, 128) ? g.qD("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.qD("Playing on $RECEIVER_NAME", b) : g.qD("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.z(p9, g.vX);
    p9.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && a.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.uv = g.jc(a, this.j, this), this.Bl(g.Al(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Gi(a), this.enable(!0)) : this.enable(!1)
    };
    p9.prototype.j = function(a) {
        return a.key
    };
    p9.prototype.Al = function(a) {
        return a === "cast-selector-receiver" ? "Cast..." : this.uv[a].name
    };
    p9.prototype.Zg = function(a) {
        g.vX.prototype.Zg.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.uv[a]);
        this.Db.Mb()
    };
    g.z(Lvb, g.VX);
    g.k = Lvb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.bP(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        wvb(b, a);
        this.subscriptions.push(g.iv("yt-remote-before-disconnect", this.Paa, this));
        this.subscriptions.push(g.iv("yt-remote-connection-change", this.mca, this));
        this.subscriptions.push(g.iv("yt-remote-receiver-availability-change", this.O0,
            this));
        this.subscriptions.push(g.iv("yt-remote-auto-connect", this.jca, this));
        this.subscriptions.push(g.iv("yt-remote-receiver-resumed", this.ica, this));
        this.subscriptions.push(g.iv("mdx-privacy-popup-confirm", this.Kda, this));
        this.subscriptions.push(g.iv("mdx-privacy-popup-cancel", this.Jda, this));
        this.O0()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.VX.prototype.load.call(this);
        this.Im = new Hvb(this, this.player, this.Hc);
        var a = (a = Evb()) ? a.currentTime : 0;
        var b = Bvb() ? new N8(g9(), void 0) : null;
        a == 0 && b && (a = K8(O8(b)));
        a !== 0 && this.Rc(a);
        Mvb(this, this.Ee, this.Ee);
        this.player.Zq(6)
    };
    g.k.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Rt = this.Fq;
        g.jg(this.Im, this.Hc);
        this.Hc = this.Im = null;
        g.VX.prototype.unload.call(this);
        this.player.Zq(5);
        q9(this)
    };
    g.k.xa = function() {
        g.jv(this.subscriptions);
        g.VX.prototype.xa.call(this)
    };
    g.k.SG = function(a) {
        var b = g.Da.apply(1, arguments);
        this.loaded && this.Im.Ol.apply(this.Im, [a].concat(g.x(b)))
    };
    g.k.getAdState = function() {
        return this.zi
    };
    g.k.mq = function() {
        return this.Hc ? O8(this.Hc).mq : !1
    };
    g.k.Pl = function() {
        return this.Hc ? O8(this.Hc).Pl : !1
    };
    g.k.Rc = function(a, b) {
        this.p_ = a || 0;
        this.player.publish("progresssync", a, b);
        this.player.yd("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.p_
    };
    g.k.getProgressState = function() {
        var a = O8(this.Hc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !a.Rl() && this.player.Nh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + I8(a) : a.C,
            isAtLiveHead: (a.B ? a.j + I8(a) : a.j) - this.getCurrentTime() <= 1,
            loaded: a.Z,
            seekableEnd: a.B ? a.j + I8(a) : a.j,
            seekableStart: a.D > 0 ? a.D + I8(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Hc && this.Hc.nextVideo()
    };
    g.k.yM = function() {
        this.Hc && this.Hc.yM()
    };
    g.k.Paa = function(a) {
        a === 1 && (this.mT = this.Hc ? O8(this.Hc) : null)
    };
    g.k.mca = function() {
        var a = Bvb() ? new N8(g9(), void 0) : null;
        if (a) {
            var b = this.Rt;
            this.loaded && this.unload();
            this.Hc = a;
            this.mT = null;
            b.key !== this.Fq.key && (this.Rt = b, this.load())
        } else g.ig(this.Hc), this.Hc = null, this.loaded && (this.unload(), (a = this.mT) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, K8(a)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.O0 = function() {
        var a = [this.Fq],
            b = a.concat,
            c = xvb();
        E8() && g.Is("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.uv = b.call(a, c);
        a = zvb() || this.Fq;
        r9(this, a);
        this.player.yd("onMdxReceiversChange")
    };
    g.k.jca = function() {
        var a = zvb();
        r9(this, a)
    };
    g.k.ica = function() {
        this.Rt = zvb()
    };
    g.k.Kda = function() {
        this.qH = !0;
        q9(this);
        k9 = !1;
        h9 && j9(h9, 1);
        h9 = null
    };
    g.k.Jda = function() {
        this.qH = !1;
        q9(this);
        r9(this, this.Fq);
        this.Rt = this.Fq;
        k9 = !1;
        h9 = null;
        this.player.playVideo()
    };
    g.k.ai = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.uv;
            case "currentReceiver":
                return b && (b.key === "cast-selector-receiver" ? Qub() : r9(this, b)), this.loaded ? this.Rt : this.Fq;
            case "quickCast":
                return this.uv.length === 2 && this.uv[1].key === "cast-selector-receiver" ? (b && Qub(), !0) : !1
        }
    };
    g.k.MU = function() {
        this.Hc.MU()
    };
    g.k.Dn = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return ((a = g.Uq("PLAYER_CONFIG")) == null ? void 0 : (b = a.args) == null ? void 0 : b.authuser) !== void 0 ? !0 : !(!g.Uq("SESSION_INDEX") && !g.Uq("LOGGED_IN"))
    };
    g.UX("remote", Lvb);
})(_yt_player);