(function(g) {
    var window = this;
    'use strict';
    var L5 = function(a, b) {
            g.T.call(this, {
                I: "button",
                La: ["ytp-miniplayer-expand-watch-page-button", "ytp-button", "ytp-miniplayer-button-top-left"],
                W: {
                    title: "{{title}}",
                    "data-tooltip-target-id": "ytp-miniplayer-expand-watch-page-button",
                    "aria-keyshortcuts": "i",
                    "data-title-no-tooltip": "{{data-title-no-tooltip}}"
                },
                V: [{
                    I: "svg",
                    W: {
                        height: "24px",
                        version: "1.1",
                        viewBox: "0 0 24 24",
                        width: "24px"
                    },
                    V: [{
                        I: "g",
                        W: {
                            fill: "none",
                            "fill-rule": "evenodd",
                            stroke: "none",
                            "stroke-width": "1"
                        },
                        V: [{
                            I: "g",
                            W: {
                                transform: "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
                            },
                            V: [{
                                I: "path",
                                W: {
                                    d: "M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
                                    fill: "#fff",
                                    "fill-rule": "nonzero"
                                }
                            }]
                        }]
                    }]
                }]
            });
            this.J = a;
            this.listen("click", this.onClick, this);
            this.updateValue("title", g.MR(a, "Expand", "i"));
            this.update({
                "data-title-no-tooltip": "Expand"
            });
            this.addOnDisposeCallback(g.KR(b.Re(), this.element))
        },
        Fkb = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-miniplayer-ui"
            });
            this.N = this.G = !1;
            this.player = a;
            this.T(a, "minimized", this.uh);
            this.T(a, "onStateChange", this.Sea);
            this.T(a, "documentpictureinpicturechange", this.hba)
        },
        Gkb = function(a, b) {
            g.kp(a.player.getRootNode(), "ytp-player-minimized", b);
            a.player.L("web_cairo_modern_miniplayer") && g.kp(a.player.getRootNode(), "ytp-modern-miniplayer", b);
            a.player.L("web_cairo_modern_miniplayer_inset_progress_bar") && g.kp(a.player.getRootNode(), "ytp-miniplayer-alternate-ui", b)
        },
        Hkb = function(a) {
            var b = a.player.ob().getPlayerSize().width,
                c = 0,
                d = b;
            if (a.player.L("web_cairo_modern_miniplayer") && !a.N && !a.player.L("web_cairo_modern_miniplayer_infobar") || a.player.L("web_cairo_modern_miniplayer_inset_progress_bar")) c = 12, d = b - 24;
            g.c3a(a.progressBar, c, d, !1);
            g.nZ(a.progressBar)
        },
        Ikb = function(a) {
            g.VX.call(this, a);
            this.B = new g.DE(this);
            this.j = new Fkb(this.player);
            this.j.hide();
            g.tS(this.player, this.j.element, 4);
            a.isMinimized() && (this.load(), g.kp(a.getRootNode(), "ytp-player-minimized", !0))
        };
    g.z(L5, g.T);
    L5.prototype.onClick = function() {
        this.J.gb("onExpandMiniplayer")
    };
    g.z(Fkb, g.T);
    g.k = Fkb.prototype;
    g.k.show = function() {
        this.j = new g.Yo(this.s5, null, this);
        this.j.start();
        if (!this.G) {
            this.tooltip = new g.WZ(this.player, this);
            g.P(this, this.tooltip);
            g.tS(this.player, this.tooltip.element, 4);
            this.tooltip.scale = .6;
            this.je = new g.xY(this.player);
            g.P(this, this.je);
            this.progressBar = new g.mZ(this.player, this);
            g.P(this, this.progressBar);
            g.tS(this.player, this.progressBar.element, 4);
            this.player.L("web_cairo_modern_miniplayer_infobar") && g.gp(this.player.getRootNode(), "ytp-always-showing-infobar");
            this.B = new g.T({
                I: "div",
                S: "ytp-miniplayer-scrim"
            });
            g.P(this, this.B);
            this.B.Ia(this.element);
            this.T(this.B.element, "click", this.Q0);
            var a = new g.T({
                I: "button",
                La: ["ytp-miniplayer-close-button", "ytp-button"],
                W: {
                    "aria-label": "Close"
                },
                V: [g.wx()]
            });
            g.P(this, a);
            a.Ia(this.B.element);
            this.T(a.element, "click", this.zV);
            a = new L5(this.player, this);
            g.P(this, a);
            a.Ia(this.B.element);
            this.C = new g.T({
                I: "div",
                S: "ytp-miniplayer-controls"
            });
            g.P(this, this.C);
            this.C.Ia(this.B.element);
            this.player.L("web_cairo_modern_miniplayer") || this.T(this.C.element,
                "click", this.Q0);
            var b = new g.T({
                I: "div",
                S: "ytp-miniplayer-button-container"
            });
            g.P(this, b);
            b.Ia(this.C.element);
            a = new g.T({
                I: "div",
                S: "ytp-miniplayer-play-button-container"
            });
            g.P(this, a);
            a.Ia(this.C.element);
            var c = new g.T({
                I: "div",
                S: "ytp-miniplayer-button-container"
            });
            g.P(this, c);
            c.Ia(this.C.element);
            this.Y = new g.hZ(this.player, this, !1);
            g.P(this, this.Y);
            this.Y.Ia(b.element);
            b = new g.gZ(this.player, this);
            g.P(this, b);
            b.Ia(a.element);
            this.nextButton = new g.hZ(this.player, this, !0);
            g.P(this, this.nextButton);
            this.nextButton.Ia(c.element);
            this.K = this.player.L("web_cairo_modern_miniplayer") ? new g.PZ(this.player, this, 0) : new g.PZ(this.player, this);
            g.P(this, this.K);
            this.K.Ia(this.B.element);
            this.D = new g.T({
                I: "div",
                S: "ytp-miniplayer-buttons"
            });
            g.P(this, this.D);
            g.tS(this.player, this.D.element, 4);
            a = new g.T({
                I: "button",
                La: ["ytp-miniplayer-close-button", "ytp-button"],
                W: {
                    "aria-label": "Close"
                },
                V: [g.wx()]
            });
            g.P(this, a);
            a.Ia(this.D.element);
            this.T(a.element, "click", this.zV);
            a = new g.T({
                I: "button",
                La: ["ytp-miniplayer-replay-button",
                    "ytp-button"
                ],
                W: {
                    "aria-label": "Close"
                },
                V: [g.Cx()]
            });
            g.P(this, a);
            a.Ia(this.D.element);
            this.T(a.element, "click", this.oca);
            this.player.L("web_cairo_modern_miniplayer") && (a = new L5(this.player, this), g.P(this, a), a.Ia(this.D.element));
            this.T(this.player, "presentingplayerstatechange", this.t5);
            this.T(this.player, "appresize", this.kc);
            this.T(this.player, "fullscreentoggled", this.kc);
            this.player.L("web_cairo_modern_miniplayer") && this.T(this.player, "onPlaylistUpdate", this.KS);
            this.kc();
            this.G = !0
        }
        this.player.getPlayerState() !==
            0 && g.T.prototype.show.call(this);
        this.progressBar.show();
        this.player.unloadModule("annotations_module")
    };
    g.k.hide = function() {
        this.j && (this.j.dispose(), this.j = void 0);
        g.T.prototype.hide.call(this);
        this.player.isMinimized() || (this.G && this.progressBar.hide(), this.player.loadModule("annotations_module"))
    };
    g.k.xa = function() {
        this.j && (this.j.dispose(), this.j = void 0);
        g.T.prototype.xa.call(this)
    };
    g.k.zV = function() {
        this.player.stopVideo();
        this.player.gb("onCloseMiniplayer")
    };
    g.k.oca = function() {
        this.player.playVideo()
    };
    g.k.Q0 = function(a) {
        if (a.target === this.B.element || a.target === this.C.element) this.player.getPlayerStateObject().isOrWillBePlaying() ? this.player.pauseVideo() : this.player.playVideo()
    };
    g.k.uh = function() {
        Gkb(this, this.player.isMinimized());
        this.player.L("web_cairo_modern_miniplayer") && this.KS()
    };
    g.k.hba = function() {
        Gkb(this, this.player.hj());
        this.player.L("web_cairo_modern_miniplayer") && this.KS();
        g.kp(this.player.getRootNode(), "ytp-player-document-picture-in-picture", this.player.hj())
    };
    g.k.Eg = function() {
        this.progressBar.Rc();
        this.K.Rc()
    };
    g.k.s5 = function() {
        this.Eg();
        this.j && this.j.start()
    };
    g.k.t5 = function(a) {
        g.Z(a.state, 32) && this.tooltip.hide()
    };
    g.k.KS = function() {
        this.N = (this.player.isMinimized() || this.player.hj()) && !!this.player.getPlaylist();
        g.kp(this.player.getRootNode(), "ytp-has-playlist-data", this.N);
        Hkb(this)
    };
    g.k.kc = function() {
        Hkb(this)
    };
    g.k.Sea = function(a) {
        this.player.isMinimized() && (a === 0 ? this.hide() : this.show())
    };
    g.k.Re = function() {
        return this.tooltip
    };
    g.k.Oy = function(a, b, c, d, e) {
        var f = 0,
            h = 0,
            l = 0,
            m = g.zm(a);
        d = b && (g.fp(b, "ytp-prev-button") || g.fp(b, "ytp-next-button"));
        if (b) {
            c = g.fp(b, "ytp-play-button");
            var n = g.fp(b, "ytp-miniplayer-expand-watch-page-button");
            d ? f = l = 12 : c ? (b = g.xm(b, this.element), l = b.x, f = b.y - 12) : n && (l = g.fp(b, "ytp-miniplayer-button-top-left"), f = g.xm(b, this.element), b = g.zm(b), l ? (l = 8, f = f.y + 40) : (l = f.x - m.width + b.width, f = f.y - 20))
        } else l = c - m.width / 2, h = 25 + (e || 0);
        b = this.player.ob().getPlayerSize();
        e = f + (e || 0);
        m = g.Gg(l, 0, b.width - m.width - 12);
        e ? (a.style.top =
            e + "px", a.style.bottom = "") : (a.style.top = "", a.style.bottom = h + "px");
        a.style.left = m + "px";
        this.player.L("web_cairo_modern_miniplayer") && (h = g.fp(a, "ytp-preview"), a.style.visibility = d && h && b.height < 225 ? "hidden" : "")
    };
    g.z(Ikb, g.VX);
    g.k = Ikb.prototype;
    g.k.onVideoDataChange = function() {
        if (this.player.getVideoData()) {
            var a = this.player.getVideoAspectRatio(),
                b = 16 / 9;
            a = a > b + .1 || a < b - .1;
            g.kp(this.player.getRootNode(), "ytp-rounded-miniplayer-not-regular-wide-video", a)
        }
    };
    g.k.create = function() {
        g.VX.prototype.create.call(this);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.onVideoDataChange()
    };
    g.k.Dn = function() {
        return !1
    };
    g.k.load = function() {
        this.player.hideControls();
        this.j.show()
    };
    g.k.unload = function() {
        this.player.showControls();
        this.j.hide()
    };
    g.UX("miniplayer", Ikb);
})(_yt_player);