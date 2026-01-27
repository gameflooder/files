import { c as t, m as e, V as s, Q as i, P as n, a as o, l as a, O as r, M as l, S as h, B as c, D as d, b as u, d as p, e as g, W as m, s as f, f as y, L as w, g as v, h as S, i as b, G as x, t as C, r as M, j as P, k as A, n as E, o as L, p as k, q as T, u as B, A as z, v as N, T as F, w as I, x as _, C as R } from "./TypedMessenger-8bc6584b.js";

!function() {
    if ("undefined" != typeof document && !("adoptedStyleSheets" in document)) {
        var t = "ShadyCSS" in window && !ShadyCSS.nativeShadow, e = document.implementation.createHTMLDocument(""), s = new WeakMap, i = "object" == typeof DOMException ? Error : DOMException, n = Object.defineProperty, o = Array.prototype.forEach, a = /@import.+?;?$/gm, r = CSSStyleSheet.prototype;
        r.replace = function() {
            return Promise.reject(new i("Can't call replace on non-constructed CSSStyleSheets."));
        }, r.replaceSync = function() {
            throw new i("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
        };
        var l = new WeakMap, h = new WeakMap, c = new WeakMap, d = new WeakMap, u = E.prototype;
        u.replace = function(t) {
            try {
                return this.replaceSync(t), Promise.resolve(this);
            } catch (t) {
                return Promise.reject(t);
            }
        }, u.replaceSync = function(t) {
            if (A(this), "string" == typeof t) {
                var e = this;
                l.get(e).textContent = function(t) {
                    var e = t.replace(a, "");
                    return e !== t && console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), 
                    e.trim();
                }(t), d.set(e, []), h.get(e).forEach((function(t) {
                    t.isConnected() && P(e, M(e, t));
                }));
            }
        }, n(u, "cssRules", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return A(this), l.get(this).sheet.cssRules;
            }
        }), n(u, "media", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return A(this), l.get(this).sheet.media;
            }
        }), [ "addRule", "deleteRule", "insertRule", "removeRule" ].forEach((function(t) {
            u[t] = function() {
                var e = this;
                A(e);
                var s = arguments;
                d.get(e).push({
                    method: t,
                    args: s
                }), h.get(e).forEach((function(i) {
                    if (i.isConnected()) {
                        var n = M(e, i).sheet;
                        n[t].apply(n, s);
                    }
                }));
                var i = l.get(e).sheet;
                return i[t].apply(i, s);
            };
        })), n(E, Symbol.hasInstance, {
            configurable: !0,
            value: x
        });
        var p = {
            childList: !0,
            subtree: !0
        }, g = new WeakMap, m = new WeakMap, f = new WeakMap, y = new WeakMap;
        if (N.prototype = {
            isConnected: function() {
                var t = m.get(this);
                return t instanceof Document ? "loading" !== t.readyState : function(t) {
                    return "isConnected" in t ? t.isConnected : document.contains(t);
                }(t.host);
            },
            connect: function() {
                var t = B(this);
                y.get(this).observe(t, p), f.get(this).length > 0 && z(this), T(t, (function(t) {
                    L(t).connect();
                }));
            },
            disconnect: function() {
                y.get(this).disconnect();
            },
            update: function(t) {
                var e = this, s = m.get(e) === document ? "Document" : "ShadowRoot";
                if (!Array.isArray(t)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + s + ": Iterator getter is not callable.");
                if (!t.every(x)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + s + ": Failed to convert value to 'CSSStyleSheet'");
                if (t.some(C)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + s + ": Can't adopt non-constructed stylesheets");
                e.sheets = t;
                var i, n, o = f.get(e), a = (i = t).filter((function(t, e) {
                    return i.indexOf(t) === e;
                }));
                (n = a, o.filter((function(t) {
                    return -1 === n.indexOf(t);
                }))).forEach((function(t) {
                    var s;
                    (s = M(t, e)).parentNode.removeChild(s), function(t, e) {
                        c.get(t).delete(e), h.set(t, h.get(t).filter((function(t) {
                            return t !== e;
                        })));
                    }(t, e);
                })), f.set(e, a), e.isConnected() && a.length > 0 && z(e);
            }
        }, window.CSSStyleSheet = E, k(Document), "ShadowRoot" in window) {
            k(ShadowRoot);
            var w = Element.prototype, v = w.attachShadow;
            w.attachShadow = function(t) {
                var e = v.call(this, t);
                return "closed" === t.mode && s.set(this, e), e;
            };
        }
        var S = L(document);
        S.isConnected() ? S.connect() : document.addEventListener("DOMContentLoaded", S.connect.bind(S));
    }
    function b(t) {
        return t.shadowRoot || s.get(t);
    }
    function x(t) {
        return "object" == typeof t && (u.isPrototypeOf(t) || r.isPrototypeOf(t));
    }
    function C(t) {
        return "object" == typeof t && r.isPrototypeOf(t);
    }
    function M(t, e) {
        return c.get(t).get(e);
    }
    function P(t, e) {
        requestAnimationFrame((function() {
            e.textContent = l.get(t).textContent, d.get(t).forEach((function(t) {
                return e.sheet[t.method].apply(e.sheet, t.args);
            }));
        }));
    }
    function A(t) {
        if (!l.has(t)) throw new TypeError("Illegal invocation");
    }
    function E() {
        var t = this, s = document.createElement("style");
        e.body.appendChild(s), l.set(t, s), h.set(t, []), c.set(t, new WeakMap), d.set(t, []);
    }
    function L(t) {
        var e = g.get(t);
        return e || (e = new N(t), g.set(t, e)), e;
    }
    function k(t) {
        n(t.prototype, "adoptedStyleSheets", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return L(this).sheets;
            },
            set: function(t) {
                L(this).update(t);
            }
        });
    }
    function T(t, e) {
        for (var s = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, (function(t) {
            return b(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }), null, !1), i = void 0; i = s.nextNode(); ) e(b(i));
    }
    function B(t) {
        var e = m.get(t);
        return e instanceof Document ? e.body : e;
    }
    function z(t) {
        var e = document.createDocumentFragment(), s = f.get(t), i = y.get(t), n = B(t);
        i.disconnect(), s.forEach((function(s) {
            e.appendChild(M(s, t) || function(t, e) {
                var s = document.createElement("style");
                return c.get(t).set(e, s), h.get(t).push(e), s;
            }(s, t));
        })), n.insertBefore(e, null), i.observe(n, p), s.forEach((function(e) {
            P(e, M(e, t));
        }));
    }
    function N(e) {
        var s = this;
        s.sheets = [], m.set(s, e), f.set(s, []), y.set(s, new MutationObserver((function(e, i) {
            document ? e.forEach((function(e) {
                t || o.call(e.addedNodes, (function(t) {
                    t instanceof Element && T(t, (function(t) {
                        L(t).connect();
                    }));
                })), o.call(e.removedNodes, (function(e) {
                    e instanceof Element && (function(t, e) {
                        return e instanceof HTMLStyleElement && f.get(t).some((function(e) {
                            return M(e, t);
                        }));
                    }(s, e) && z(s), t || T(e, (function(t) {
                        L(t).disconnect();
                    })));
                }));
            })) : i.disconnect();
        })));
    }
}();

const D = new CSSStyleSheet;

D.replaceSync(".main-canvas {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\nbutton {\n\tbackground-color: var(--button-bg-color);\n\tborder: var(--default-border-size) solid var(--button-border-color);\n\tborder-radius: var(--default-border-radius);\n\tbox-shadow: var(--button-shadow-color) var(--default-shadow-offset) 0px;\n\ttransition: transform 0.1s, filter 0.1s;\n\tcolor: var(--button-content-color);\n\tfont-weight: bold;\n\tfont-size: 18pt;\n\tpadding: 3px 8px;\n}\nbutton:disabled {\n\tcolor: var(--button-disabled-content-color);\n}\n.button-image {\n\tbackground-color: var(--button-content-color);\n}\n\nbutton:not(:disabled) {\n\tcursor: pointer;\n}\n\nbutton:hover:not(:disabled) {\n\ttransform: scale(1.1);\n\tfilter: brightness(1.1);\n}\n\nbutton:active:not(:disabled) {\n\ttransform: scale(0.95);\n\tfilter: brightness(0.9);\n}\n\n.masked-image {\n\tmask: var(--image);\n\t-webkit-mask: center / contain var(--image) no-repeat;\n\tmask: center / contain var(--image) no-repeat;\n}\n\n.flashing-red {\n\tanimation: flashing-red 0.2s linear infinite alternate;\n}\n\n@keyframes flashing-red {\n\tfrom {\n\t\tbackground-color: red;\n\t}\n\n\tto {\n\t\tbackground-color: var(--flashing-default-color);\n\t}\n}\n\n.shake-animation {\n\tanimation: shake-animation 4s infinite;\n}\n\n@keyframes shake-animation {\n\t0%  { transform: rotate(0deg); }\n\t2%  { transform: rotate(10deg); }\n\t4%  { transform: rotate(-8deg); }\n\t6%  { transform: rotate(6deg); }\n\t8%  { transform: rotate(-4deg); }\n\t10% { transform: rotate(2deg); }\n\t12% { transform: rotate(0deg); }\n}\n");

const j = new CSSStyleSheet;

j.replaceSync("html {\n\t--dialog-bg-color: #bdd278;\n\t--dialog-border-color: #859955;\n\t--dialog-shadow-color: #54683d;\n\n\t--dialog-header-bg-color: #ffffff;\n\n\t--section-bg-color: #d6ed8b;\n\t--section-border-color: #a3b664;\n\n\t--button-content-color: #643c00;\n\t--button-disabled-content-color: #cea23b;\n\t--button-bg-color: #fdd863;\n\t--button-border-color: #cea23b;\n\t--button-shadow-color: #a3802f;\n\n\t--button-notification-color: #f53636;\n\t--button-notification-shadow-color: #d32020;\n\n\t--tutorial-key-content-color: #374526;\n\t--tutorial-key-bg-color: #bdd278;\n\t--tutorial-key-border-color: #859955;\n\t--tutorial-key-shadow-color: #54683d;\n\n\t--icon-color: #3b462d;\n\t--icon-bg-color: #f4f9fe;\n\t--icon-border-color: #859955;\n\t--icon-shadow-color: #54683d;\n\n\t--default-border-radius: 22px;\n\t--tutorial-key-border-radius: 8px;\n\t--default-border-size: 6px;\n\t--default-shadow-offset-x: 0px;\n\t--default-shadow-offset-y: 4px;\n\t--default-shadow-offset: var(--default-shadow-offset-x) var(--default-shadow-offset-y);\n}\n");

const O = new CSSStyleSheet;

O.replaceSync('dialog {\n\tbackground-color: var(--dialog-bg-color);\n\tborder: var(--default-border-size) solid var(--dialog-border-color);\n\tbox-shadow: var(--dialog-shadow-color) var(--default-shadow-offset) 0px;\n\tborder-radius: var(--default-border-radius);\n\tpadding: 0;\n}\n\ndialog::backdrop {\n\tbackground-color: rgba(0,0,0,0.3);\n}\n\ndialog h1 {\n\tbackground-color: var(--dialog-header-bg-color);\n\tfont-size: 26pt;\n\tpadding: 5px 0px 5px 40px;\n}\ndialog h1::after {\n\tcontent: "";\n\tdisplay: block;\n    position: absolute;\n    width: 100%;\n    height: 5px;\n\tleft: 0;\n    transform: translateY(12px);\n    background-color: var(--dialog-header-bg-color);\n    padding-top: 5px;\n}\n\ndialog > .close-button {\n\tbackground: url("static/icons/closeDialog.svg");\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tborder: none;\n\tbox-shadow: none;\n\twidth: 30px;\n\theight: 30px;\n\tposition: absolute;\n\ttop: 34px;\n\tright: 15px;\n}\n');

const U = new CSSStyleSheet;

U.replaceSync('.money-button {\n\twidth: 140px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tuser-select: none;\n}\n\n.money-icon {\n\tcontent: "";\n\twidth: 35px;\n\theight: 35px;\n\tbackground: url("static/icons/coin.svg");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tdisplay: inline-block;\n}\n\n.money-button > .text {\n\tflex-grow: 1;\n}\n');

const V = new CSSStyleSheet;

V.replaceSync('.corner-score-container {\n\tposition: absolute;\n\tfont-size: 20pt;\n\ttop: 0;\n\tleft: 20px;\n\tfont-weight: bold;\n\tbackground: white;\n\tbox-shadow: 8px 13px 20px rgba(0, 0, 0, 0.2);\n\t--ink-color: #2c2c2c;\n\tcolor: var(--ink-color);\n\ttransition: transform 1s linear;\n\ttransform-origin: top left;\n}\n.corner-score-container::after {\n\tcontent: "";\n\tposition: absolute;\n\tdisplay: block;\n\theight: 10px;\n\twidth: 100%;\n\tbackground: linear-gradient( 45deg, transparent 33.333%, white 33.333%, white 66.667%, transparent 66.667%), linear-gradient( -45deg, transparent 30%, rgb(147, 147, 147) 31%, white 33.333%, white 66.667%, transparent 66.667%);\n\tbackground-size: 8px 20px;\n\tbackground-position: 0 -10px;\n}\n\n.corner-score-container.hidden {\n\ttransform: translateY(-110%);\n}\n\n.corner-score-container > .content {\n\tmargin: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n@media (max-width: 360px), (max-height: 500px) {\n\t.corner-score-container {\n\t\ttransform: scale(0.65);\n\t}\n}\n\n.score-item {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 7px;\n\n}\n\n.score-icon {\n\twidth: 20px;\n\theight: 20px;\n}\n.score-icon.masked-image {\n\tbackground: var(--ink-color);\n}\n\n.storage-icon {\n\t--image: url("static/icons/storageSpaceUsed.svg");\n}\n\n.wallet-icon {\n\t--image: url("static/icons/wallet.svg");\n}\n\n.storage-score-item {\n\tmargin-bottom: 5px;\n}\n\n.storage-bar {\n\twidth: 200px;\n\tborder: 1px var(--ink-color) dashed;\n\tborder-left: none;\n\tborder-right: none;\n}\n\n.storage-bar > .value {\n\twidth: 0;\n\theight: 10px;\n\tbackground: var(--ink-color);\n\tmargin: 3px 0px;\n\t--flashing-default-color: var(--ink-color);\n}\n');

const q = new CSSStyleSheet;

q.replaceSync('.corner-buttons-container {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tdisplay: flex;\n\tgap: 10px;\n\tpadding: 10px;\n\ttransition: transform 0.3s;\n}\n\n@media (max-width: 500px) {\n\t.corner-buttons-container {\n\t\tflex-direction: column;\n\t}\n}\n\n.corner-buttons-container.hidden {\n\ttransform: translateY(-100%);\n}\n\n.corner-buttons-container > button {\n\tposition: relative;\n\tpadding: 0;\n}\n\n.corner-buttons-container > button:hover {\n\ttransform: scale(1.1);\n\tfilter: brightness(1.1);\n}\n\n.corner-buttons-container > button > .button-image {\n\twidth: 50px;\n\theight: 50px;\n}\n\n.tutorial-arrow {\n\twidth: 70px;\n\theight: 70px;\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 50%;\n\tbackground: url("static/icons/tutorialArrow.svg");\n\tanimation: tutorial-arrow-bounce 0.4s ease-in-out alternate infinite;\n}\n\n@keyframes tutorial-arrow-bounce {\n\tfrom {\n\t\ttransform: translate(-50%, -10px);\n\t}\n\n\tto {\n\t\ttransform: translate(-50%, 20px);\n\t}\n}\n\n.corner-buttons-container button.upgrade-available-notification::before {\n\tcontent: "";\n\twidth: 20px;\n\theight: 20px;\n\tbackground: var(--button-notification-color);\n\tbox-shadow: var(--default-shadow-offset) 0 var(--button-notification-shadow-color);\n\tborder-radius: 50%;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(50%, -50%);\n}\n');

const W = new CSSStyleSheet;

W.replaceSync('.rewarded-upgrade-container {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 0;\n}\n\n.rewarded-upgrade-button > .shine {\n\tposition: absolute;\n\tdisplay: block;\n\twidth: 300px;\n\theight: 300px;\n\ttop: 70%;\n\tleft: 50%;\n\tbackground: url("static/icons/rewardedUpgrades/shine.svg");\n\tz-index: 1;\n\tanimation: shine-rotate 4s infinite linear;\n}\n\n.rewarded-upgrade-button > .shine-0 {\n\tanimation-duration: 8s;\n}\n\n.rewarded-upgrade-button > .shine-1 {\n\tanimation-duration: 6s;\n}\n\n@keyframes shine-rotate {\n\tfrom {\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\tto {\n\t\ttransform: translate(-50%, -50%) rotate(360deg);\n\t}\n}\n\n.rewarded-upgrade-button {\n\tmargin-left: 30px;\n\tz-index: 1;\n\tpadding: 5px;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.reward-icons {\n\tdisplay: flex;\n\tflex-direction: column;\n\tz-index: 2;\n\tposition: relative;\n\talign-items: center;\n}\n\n.reward-icons > .reward-icon {\n\twidth: 100px;\n\theight: 40px;\n}\n\n.reward-icons > .play-button {\n\twidth: 50px;\n\theight: 40px;\n}\n');

const G = new CSSStyleSheet;

G.replaceSync(".alert-dialog {\n\twidth: 50vw;\n\tmax-width: 600px;\n\tbox-sizing: border-box;\n}\n\n@media (max-width: 500px) {\n\t.alert-dialog {\n\t\twidth: calc(100vw - 30px);\n\t}\n}\n\n.alert-dialog p {\n\tmargin: 10px;\n}\n\n.buttons-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin: 10px;\n}\n");

const H = new CSSStyleSheet;

H.replaceSync(".upgrades-dialog {\n\toverflow: hidden;\n}\n\n.upgrades-dialog-content {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: calc(100vh - 30px);\n\tmax-height: 600px;\n}\n\n@media (max-height: 830px) {\n\t.upgrades-dialog.with-banner {\n\t\tmargin-top: 5px;\n\t}\n\n\t.upgrades-dialog.with-banner .upgrades-dialog-content {\n\t\tmax-height: min(600px, calc(100vh - 130px));\n\t}\n}\n\n.upgrades-list {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\toverflow-y: auto;\n\theight: 100%;\n}\n\n.upgrades-list > li {\n\tbackground: url(static/icons/bgIcon.svg?abfdsffdfds), var(--section-bg-color);\n\tbackground-size: 90px;\n\tbackground-position: -25px -20px;\n\tborder: var(--default-border-size) solid var(--section-border-color);\n\tborder-radius: var(--default-border-radius);\n\tpadding: 10px;\n\tmargin: 10px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 15px;\n}\n\n.upgrade-description > h3 {\n\tfont-size: 18pt;\n}\n\n.upgrade-icon-container {\n\tbackground-color: var(--icon-bg-color);\n\tborder: var(--default-border-size) solid var(--icon-border-color);\n\tbox-shadow: var(--icon-shadow-color) var(--default-shadow-offset) 0px;\n\tborder-radius: var(--default-border-radius);\n\tpadding: 7px;\n}\n\n.upgrade-icon {\n\twidth: 60px;\n\theight: 60px;\n\tbackground: var(--icon-color);\n}\n\n.upgrades-list > li.unavailable > .upgrade-description {\n\topacity: 0.6;\n}\n\n.upgrades-list > li > section {\n\twidth: 330px;\n}\n");

const K = new CSSStyleSheet;

K.replaceSync('.tutorial-keyboard {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 30%;\n\tdisplay: grid;\n    grid-template-columns: repeat(9, 40px);\n    grid-template-rows: repeat(2,40px);\n\tgap: 5px;\n\ttransform: translate(-50%, -50%);\n\tgrid-template-areas:\n\t\t"i0 i1 i2 i3 i4 i5 up i6 i7"\n\t\t"i8 space space space i9 left down right i10";\n\tgrid-auto-flow: dense;\n\tpadding: 20px;\n\ttransition: opacity 0.5s;\n}\n\n.tutorial-keyboard.hidden {\n\topacity: 0;\n}\n\n.keyboard-key {\n\tbackground-color: var(--tutorial-key-bg-color);\n\tborder: var(--default-border-size) solid var(--tutorial-key-border-color);\n\tborder-radius: var(--tutorial-key-border-radius);\n\tbox-shadow: var(--tutorial-key-shadow-color) var(--default-shadow-offset) 0px;\n}\n\n.keyboard-key-arrow {\n\twidth: 100%;\n\theight: 100%;\n\tbackground: var(--tutorial-key-content-color);\n\t--image: url("static/icons/tutorialArrowKey.svg");\n}\n\n.keyboard-key.active {\n\tanimation: tutorial-key-bounce 0.4s ease-in-out alternate infinite;\n}\n\n.keyboard-key:not(.active) {\n\topacity: 0.5;\n}\n\n@keyframes tutorial-key-bounce {\n\tfrom {\n\t\ttransform: translateY(-3px);\n\t\tbox-shadow: var(--tutorial-key-shadow-color) var(--default-shadow-offset-x) calc(var(--default-shadow-offset-y) + 3px) 0px;\n\t}\n\n\tto {\n\t\ttransform: translateY(+2px);\n\t\tbox-shadow: var(--tutorial-key-shadow-color) var(--default-shadow-offset-x) calc(var(--default-shadow-offset-y) - 2px) 0px;\n\t}\n}\n');

const Y = new CSSStyleSheet;

Y.replaceSync('.alerts-compass {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n}\n\n.alert-container {\n\twidth: 60px;\n\theight: 60px;\n\tbackground-color: white;\n\t--image: url("static/icons/alertCompass.svg");\n\tposition: absolute;\n\t--flashing-default-color: white;\n\ttransform: translateX(-50%) rotate(var(--angle)) translateY(300px);\n}\n');

const X = new CSSStyleSheet;

X.replaceSync(".touch-joystick-area {\n\twidth: 200px;\n\theight: 200px;\n\tborder-radius: 200px;\n\tbackground: rgba(0, 0, 0, 0.425);\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 10;\n\ttransition: opacity 0.2s;\n\tpointer-events: none;\n}\n\n.touch-joystick-area.hidden {\n\topacity: 0;\n\ttransition: opacity 1.0s;\n}\n\n.touch-joystick {\n\twidth: 60px;\n\theight: 60px;\n\tleft: 50%;\n\ttop: 50%;\n\tposition: absolute;\n\tborder-radius: 60px;\n\tbackground: var(--button-bg-color);\n\tborder: var(--default-border-size) solid var(--button-border-color);\n\tbox-shadow: var(--button-shadow-color) var(--default-shadow-offset) 0px;\n}\n");

const Q = new CSSStyleSheet;

Q.replaceSync(".ad {\n\tbackground: rgba(0,0,0,0.2);\n\tdisplay: block;\n\tposition: absolute;\n\tz-index: 10;\n\tbottom: 0;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\twidth: 100%;\n\theight: 50px;\n}\n\n.ad.dialog-banner {\n\tposition: fixed;\n}\n\n@container (min-width: 350px) {\n\t.ad {\n\t\twidth: 320px;\n\t}\n}\n\n@container (min-width: 500px) {\n\t.ad {\n\t\twidth: 468px;\n\t\theight: 60px;\n\t\tbottom: 10px;\n\t}\n}\n\n@container (min-width: 800px) {\n\t.ad {\n\t\twidth: 728px;\n\t\theight: 90px;\n\t}\n}\n\n@container (min-width: 1024px) {\n\t.ad {\n\t\twidth: 970px;\n\t\theight: 90px;\n\t}\n}\n"), 
document.adoptedStyleSheets = [ D, j, O, U, V, q, W, G, H, K, Y, X, Q ];

class $ {
    constructor({startValue: t = 0, springMultiplier: e = .02, maxSpring: s = 1 / 0, dampening: i = .6, loopValue: n = !1, loopStart: o = -Math.PI, loopEnd: a = Math.PI} = {}) {
        this.value = t, this.target = t, this.velocity = 0, this.springMultiplier = e, this.maxSpring = s, 
        this.dampening = i, this.loopValue = n, this.loopStart = o, this.loopEnd = a;
    }
    loop(e) {
        let s = this.target - this.value;
        if (this.loopValue) {
            this.target = this.performValueLoop(this.target);
            const t = this.loopEnd - this.loopStart, e = this.target, i = this.target - t, n = this.target + t, o = e - this.value, a = i - this.value, r = n - this.value;
            s = o, Math.abs(a) < Math.abs(s) && (s = a), Math.abs(r) < Math.abs(s) && (s = r);
        }
        s *= this.springMultiplier, s = t(s, -this.maxSpring, this.maxSpring), this.velocity += s, 
        this.velocity *= this.dampening, this.value += this.velocity * e, this.loopValue && (this.value = this.performValueLoop(this.value));
    }
    performValueLoop(t) {
        return e(t, this.loopStart, this.loopEnd);
    }
}

class Z {
    constructor({startValue: t = new s, springMultiplier: e = .02, maxSpring: i = 1 / 0, dampening: n = .6} = {}) {
        this.xValue = new $({
            startValue: t.x,
            springMultiplier: e,
            maxSpring: i,
            dampening: n
        }), this.yValue = new $({
            startValue: t.y,
            springMultiplier: e,
            maxSpring: i,
            dampening: n
        }), this.zValue = new $({
            startValue: t.z,
            springMultiplier: e,
            maxSpring: i,
            dampening: n
        });
    }
    loop(t) {
        this.xValue.loop(t), this.yValue.loop(t), this.zValue.loop(t);
    }
    get value() {
        return new s(this.xValue.value, this.yValue.value, this.zValue.value);
    }
    set value(t) {
        this.xValue.value = t.x, this.yValue.value = t.y, this.zValue.value = t.z;
    }
    get target() {
        return new s(this.xValue.target, this.yValue.target, this.zValue.target);
    }
    set target(t) {
        this.xValue.target = t.x, this.yValue.target = t.y, this.zValue.target = t.z;
    }
    addImpulse(t) {
        this.xValue.velocity += t.x, this.yValue.velocity += t.y, this.zValue.velocity += t.z;
    }
}

let J = 0, tt = 0;

const et = new Set;

function st() {
    const t = window.innerWidth, e = window.innerHeight;
    t == J && e == tt || (J = t, tt = e, et.forEach((t => t())));
}

function it(t) {
    et.add(t);
}

window.addEventListener("resize", (() => {
    st();
})), function t() {
    st(), setTimeout((() => {
        t();
    }), 1e3);
}();

class nt {
    constructor(t) {
        void 0 === t && (t = [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), this.elements = t;
    }
    identity() {
        const t = this.elements;
        t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, 
        t[8] = 1;
    }
    setZero() {
        const t = this.elements;
        t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, 
        t[8] = 0;
    }
    setTrace(t) {
        const e = this.elements;
        e[0] = t.x, e[4] = t.y, e[8] = t.z;
    }
    getTrace(t) {
        void 0 === t && (t = new at);
        const e = this.elements;
        return t.x = e[0], t.y = e[4], t.z = e[8], t;
    }
    vmult(t, e) {
        void 0 === e && (e = new at);
        const s = this.elements, i = t.x, n = t.y, o = t.z;
        return e.x = s[0] * i + s[1] * n + s[2] * o, e.y = s[3] * i + s[4] * n + s[5] * o, 
        e.z = s[6] * i + s[7] * n + s[8] * o, e;
    }
    smult(t) {
        for (let e = 0; e < this.elements.length; e++) this.elements[e] *= t;
    }
    mmult(t, e) {
        void 0 === e && (e = new nt);
        const s = this.elements, i = t.elements, n = e.elements, o = s[0], a = s[1], r = s[2], l = s[3], h = s[4], c = s[5], d = s[6], u = s[7], p = s[8], g = i[0], m = i[1], f = i[2], y = i[3], w = i[4], v = i[5], S = i[6], b = i[7], x = i[8];
        return n[0] = o * g + a * y + r * S, n[1] = o * m + a * w + r * b, n[2] = o * f + a * v + r * x, 
        n[3] = l * g + h * y + c * S, n[4] = l * m + h * w + c * b, n[5] = l * f + h * v + c * x, 
        n[6] = d * g + u * y + p * S, n[7] = d * m + u * w + p * b, n[8] = d * f + u * v + p * x, 
        e;
    }
    scale(t, e) {
        void 0 === e && (e = new nt);
        const s = this.elements, i = e.elements;
        for (let e = 0; 3 !== e; e++) i[3 * e + 0] = t.x * s[3 * e + 0], i[3 * e + 1] = t.y * s[3 * e + 1], 
        i[3 * e + 2] = t.z * s[3 * e + 2];
        return e;
    }
    solve(t, e) {
        void 0 === e && (e = new at);
        const s = [];
        let i, n;
        for (i = 0; i < 12; i++) s.push(0);
        for (i = 0; i < 3; i++) for (n = 0; n < 3; n++) s[i + 4 * n] = this.elements[i + 3 * n];
        s[3] = t.x, s[7] = t.y, s[11] = t.z;
        let o = 3;
        const a = o;
        let r;
        let l;
        do {
            if (i = a - o, 0 === s[i + 4 * i]) for (n = i + 1; n < a; n++) if (0 !== s[i + 4 * n]) {
                r = 4;
                do {
                    l = 4 - r, s[l + 4 * i] += s[l + 4 * n];
                } while (--r);
                break;
            }
            if (0 !== s[i + 4 * i]) for (n = i + 1; n < a; n++) {
                const t = s[i + 4 * n] / s[i + 4 * i];
                r = 4;
                do {
                    l = 4 - r, s[l + 4 * n] = l <= i ? 0 : s[l + 4 * n] - s[l + 4 * i] * t;
                } while (--r);
            }
        } while (--o);
        if (e.z = s[11] / s[10], e.y = (s[7] - s[6] * e.z) / s[5], e.x = (s[3] - s[2] * e.z - s[1] * e.y) / s[0], 
        isNaN(e.x) || isNaN(e.y) || isNaN(e.z) || e.x === 1 / 0 || e.y === 1 / 0 || e.z === 1 / 0) throw `Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;
        return e;
    }
    e(t, e, s) {
        if (void 0 === s) return this.elements[e + 3 * t];
        this.elements[e + 3 * t] = s;
    }
    copy(t) {
        for (let e = 0; e < t.elements.length; e++) this.elements[e] = t.elements[e];
        return this;
    }
    toString() {
        let t = "";
        for (let e = 0; e < 9; e++) t += this.elements[e] + ",";
        return t;
    }
    reverse(t) {
        void 0 === t && (t = new nt);
        const e = ot;
        let s, i;
        for (s = 0; s < 3; s++) for (i = 0; i < 3; i++) e[s + 6 * i] = this.elements[s + 3 * i];
        e[3] = 1, e[9] = 0, e[15] = 0, e[4] = 0, e[10] = 1, e[16] = 0, e[5] = 0, e[11] = 0, 
        e[17] = 1;
        let n = 3;
        const o = n;
        let a;
        let r;
        do {
            if (s = o - n, 0 === e[s + 6 * s]) for (i = s + 1; i < o; i++) if (0 !== e[s + 6 * i]) {
                a = 6;
                do {
                    r = 6 - a, e[r + 6 * s] += e[r + 6 * i];
                } while (--a);
                break;
            }
            if (0 !== e[s + 6 * s]) for (i = s + 1; i < o; i++) {
                const t = e[s + 6 * i] / e[s + 6 * s];
                a = 6;
                do {
                    r = 6 - a, e[r + 6 * i] = r <= s ? 0 : e[r + 6 * i] - e[r + 6 * s] * t;
                } while (--a);
            }
        } while (--n);
        s = 2;
        do {
            i = s - 1;
            do {
                const t = e[s + 6 * i] / e[s + 6 * s];
                a = 6;
                do {
                    r = 6 - a, e[r + 6 * i] = e[r + 6 * i] - e[r + 6 * s] * t;
                } while (--a);
            } while (i--);
        } while (--s);
        s = 2;
        do {
            const t = 1 / e[s + 6 * s];
            a = 6;
            do {
                r = 6 - a, e[r + 6 * s] = e[r + 6 * s] * t;
            } while (--a);
        } while (s--);
        s = 2;
        do {
            i = 2;
            do {
                if (r = e[3 + i + 6 * s], isNaN(r) || r === 1 / 0) throw `Could not reverse! A=[${this.toString()}]`;
                t.e(s, i, r);
            } while (i--);
        } while (s--);
        return t;
    }
    setRotationFromQuaternion(t) {
        const e = t.x, s = t.y, i = t.z, n = t.w, o = e + e, a = s + s, r = i + i, l = e * o, h = e * a, c = e * r, d = s * a, u = s * r, p = i * r, g = n * o, m = n * a, f = n * r, y = this.elements;
        return y[0] = 1 - (d + p), y[1] = h - f, y[2] = c + m, y[3] = h + f, y[4] = 1 - (l + p), 
        y[5] = u - g, y[6] = c - m, y[7] = u + g, y[8] = 1 - (l + d), this;
    }
    transpose(t) {
        void 0 === t && (t = new nt);
        const e = this.elements, s = t.elements;
        let i;
        return s[0] = e[0], s[4] = e[4], s[8] = e[8], i = e[1], s[1] = e[3], s[3] = i, i = e[2], 
        s[2] = e[6], s[6] = i, i = e[5], s[5] = e[7], s[7] = i, t;
    }
}

const ot = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

class at {
    constructor(t, e, s) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === s && (s = 0), this.x = t, 
        this.y = e, this.z = s;
    }
    cross(t, e) {
        void 0 === e && (e = new at);
        const s = t.x, i = t.y, n = t.z, o = this.x, a = this.y, r = this.z;
        return e.x = a * n - r * i, e.y = r * s - o * n, e.z = o * i - a * s, e;
    }
    set(t, e, s) {
        return this.x = t, this.y = e, this.z = s, this;
    }
    setZero() {
        this.x = this.y = this.z = 0;
    }
    vadd(t, e) {
        if (!e) return new at(this.x + t.x, this.y + t.y, this.z + t.z);
        e.x = t.x + this.x, e.y = t.y + this.y, e.z = t.z + this.z;
    }
    vsub(t, e) {
        if (!e) return new at(this.x - t.x, this.y - t.y, this.z - t.z);
        e.x = this.x - t.x, e.y = this.y - t.y, e.z = this.z - t.z;
    }
    crossmat() {
        return new nt([ 0, -this.z, this.y, this.z, 0, -this.x, -this.y, this.x, 0 ]);
    }
    normalize() {
        const t = this.x, e = this.y, s = this.z, i = Math.sqrt(t * t + e * e + s * s);
        if (i > 0) {
            const t = 1 / i;
            this.x *= t, this.y *= t, this.z *= t;
        } else this.x = 0, this.y = 0, this.z = 0;
        return i;
    }
    unit(t) {
        void 0 === t && (t = new at);
        const e = this.x, s = this.y, i = this.z;
        let n = Math.sqrt(e * e + s * s + i * i);
        return n > 0 ? (n = 1 / n, t.x = e * n, t.y = s * n, t.z = i * n) : (t.x = 1, t.y = 0, 
        t.z = 0), t;
    }
    length() {
        const t = this.x, e = this.y, s = this.z;
        return Math.sqrt(t * t + e * e + s * s);
    }
    lengthSquared() {
        return this.dot(this);
    }
    distanceTo(t) {
        const e = this.x, s = this.y, i = this.z, n = t.x, o = t.y, a = t.z;
        return Math.sqrt((n - e) * (n - e) + (o - s) * (o - s) + (a - i) * (a - i));
    }
    distanceSquared(t) {
        const e = this.x, s = this.y, i = this.z, n = t.x, o = t.y, a = t.z;
        return (n - e) * (n - e) + (o - s) * (o - s) + (a - i) * (a - i);
    }
    scale(t, e) {
        void 0 === e && (e = new at);
        const s = this.x, i = this.y, n = this.z;
        return e.x = t * s, e.y = t * i, e.z = t * n, e;
    }
    vmul(t, e) {
        return void 0 === e && (e = new at), e.x = t.x * this.x, e.y = t.y * this.y, e.z = t.z * this.z, 
        e;
    }
    addScaledVector(t, e, s) {
        return void 0 === s && (s = new at), s.x = this.x + t * e.x, s.y = this.y + t * e.y, 
        s.z = this.z + t * e.z, s;
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    isZero() {
        return 0 === this.x && 0 === this.y && 0 === this.z;
    }
    negate(t) {
        return void 0 === t && (t = new at), t.x = -this.x, t.y = -this.y, t.z = -this.z, 
        t;
    }
    tangents(t, e) {
        const s = this.length();
        if (s > 0) {
            const i = rt, n = 1 / s;
            i.set(this.x * n, this.y * n, this.z * n);
            const o = lt;
            Math.abs(i.x) < .9 ? (o.set(1, 0, 0), i.cross(o, t)) : (o.set(0, 1, 0), i.cross(o, t)), 
            i.cross(t, e);
        } else t.set(1, 0, 0), e.set(0, 1, 0);
    }
    toString() {
        return `${this.x},${this.y},${this.z}`;
    }
    toArray() {
        return [ this.x, this.y, this.z ];
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this;
    }
    lerp(t, e, s) {
        const i = this.x, n = this.y, o = this.z;
        s.x = i + (t.x - i) * e, s.y = n + (t.y - n) * e, s.z = o + (t.z - o) * e;
    }
    almostEquals(t, e) {
        return void 0 === e && (e = 1e-6), !(Math.abs(this.x - t.x) > e || Math.abs(this.y - t.y) > e || Math.abs(this.z - t.z) > e);
    }
    almostZero(t) {
        return void 0 === t && (t = 1e-6), !(Math.abs(this.x) > t || Math.abs(this.y) > t || Math.abs(this.z) > t);
    }
    isAntiparallelTo(t, e) {
        return this.negate(ht), ht.almostEquals(t, e);
    }
    clone() {
        return new at(this.x, this.y, this.z);
    }
}

at.ZERO = new at(0, 0, 0), at.UNIT_X = new at(1, 0, 0), at.UNIT_Y = new at(0, 1, 0), 
at.UNIT_Z = new at(0, 0, 1);

const rt = new at, lt = new at, ht = new at;

class ct {
    constructor(t) {
        void 0 === t && (t = {}), this.lowerBound = new at, this.upperBound = new at, t.lowerBound && this.lowerBound.copy(t.lowerBound), 
        t.upperBound && this.upperBound.copy(t.upperBound);
    }
    setFromPoints(t, e, s, i) {
        const n = this.lowerBound, o = this.upperBound, a = s;
        n.copy(t[0]), a && a.vmult(n, n), o.copy(n);
        for (let e = 1; e < t.length; e++) {
            let s = t[e];
            a && (a.vmult(s, dt), s = dt), s.x > o.x && (o.x = s.x), s.x < n.x && (n.x = s.x), 
            s.y > o.y && (o.y = s.y), s.y < n.y && (n.y = s.y), s.z > o.z && (o.z = s.z), s.z < n.z && (n.z = s.z);
        }
        return e && (e.vadd(n, n), e.vadd(o, o)), i && (n.x -= i, n.y -= i, n.z -= i, o.x += i, 
        o.y += i, o.z += i), this;
    }
    copy(t) {
        return this.lowerBound.copy(t.lowerBound), this.upperBound.copy(t.upperBound), this;
    }
    clone() {
        return (new ct).copy(this);
    }
    extend(t) {
        this.lowerBound.x = Math.min(this.lowerBound.x, t.lowerBound.x), this.upperBound.x = Math.max(this.upperBound.x, t.upperBound.x), 
        this.lowerBound.y = Math.min(this.lowerBound.y, t.lowerBound.y), this.upperBound.y = Math.max(this.upperBound.y, t.upperBound.y), 
        this.lowerBound.z = Math.min(this.lowerBound.z, t.lowerBound.z), this.upperBound.z = Math.max(this.upperBound.z, t.upperBound.z);
    }
    overlaps(t) {
        const e = this.lowerBound, s = this.upperBound, i = t.lowerBound, n = t.upperBound, o = i.x <= s.x && s.x <= n.x || e.x <= n.x && n.x <= s.x, a = i.y <= s.y && s.y <= n.y || e.y <= n.y && n.y <= s.y, r = i.z <= s.z && s.z <= n.z || e.z <= n.z && n.z <= s.z;
        return o && a && r;
    }
    volume() {
        const t = this.lowerBound, e = this.upperBound;
        return (e.x - t.x) * (e.y - t.y) * (e.z - t.z);
    }
    contains(t) {
        const e = this.lowerBound, s = this.upperBound, i = t.lowerBound, n = t.upperBound;
        return e.x <= i.x && s.x >= n.x && e.y <= i.y && s.y >= n.y && e.z <= i.z && s.z >= n.z;
    }
    getCorners(t, e, s, i, n, o, a, r) {
        const l = this.lowerBound, h = this.upperBound;
        t.copy(l), e.set(h.x, l.y, l.z), s.set(h.x, h.y, l.z), i.set(l.x, h.y, h.z), n.set(h.x, l.y, h.z), 
        o.set(l.x, h.y, l.z), a.set(l.x, l.y, h.z), r.copy(h);
    }
    toLocalFrame(t, e) {
        const s = ut, i = s[0], n = s[1], o = s[2], a = s[3], r = s[4], l = s[5], h = s[6], c = s[7];
        this.getCorners(i, n, o, a, r, l, h, c);
        for (let e = 0; 8 !== e; e++) {
            const i = s[e];
            t.pointToLocal(i, i);
        }
        return e.setFromPoints(s);
    }
    toWorldFrame(t, e) {
        const s = ut, i = s[0], n = s[1], o = s[2], a = s[3], r = s[4], l = s[5], h = s[6], c = s[7];
        this.getCorners(i, n, o, a, r, l, h, c);
        for (let e = 0; 8 !== e; e++) {
            const i = s[e];
            t.pointToWorld(i, i);
        }
        return e.setFromPoints(s);
    }
    overlapsRay(t) {
        const {direction: e, from: s} = t, i = 1 / e.x, n = 1 / e.y, o = 1 / e.z, a = (this.lowerBound.x - s.x) * i, r = (this.upperBound.x - s.x) * i, l = (this.lowerBound.y - s.y) * n, h = (this.upperBound.y - s.y) * n, c = (this.lowerBound.z - s.z) * o, d = (this.upperBound.z - s.z) * o, u = Math.max(Math.max(Math.min(a, r), Math.min(l, h)), Math.min(c, d)), p = Math.min(Math.min(Math.max(a, r), Math.max(l, h)), Math.max(c, d));
        return !(p < 0) && !(u > p);
    }
}

const dt = new at, ut = [ new at, new at, new at, new at, new at, new at, new at, new at ];

class pt {
    constructor() {
        this.matrix = [];
    }
    get(t, e) {
        let {index: s} = t, {index: i} = e;
        if (i > s) {
            const t = i;
            i = s, s = t;
        }
        return this.matrix[(s * (s + 1) >> 1) + i - 1];
    }
    set(t, e, s) {
        let {index: i} = t, {index: n} = e;
        if (n > i) {
            const t = n;
            n = i, i = t;
        }
        this.matrix[(i * (i + 1) >> 1) + n - 1] = s ? 1 : 0;
    }
    reset() {
        for (let t = 0, e = this.matrix.length; t !== e; t++) this.matrix[t] = 0;
    }
    setNumObjects(t) {
        this.matrix.length = t * (t - 1) >> 1;
    }
}

class gt {
    addEventListener(t, e) {
        void 0 === this._listeners && (this._listeners = {});
        const s = this._listeners;
        return void 0 === s[t] && (s[t] = []), s[t].includes(e) || s[t].push(e), this;
    }
    hasEventListener(t, e) {
        if (void 0 === this._listeners) return !1;
        const s = this._listeners;
        return !(void 0 === s[t] || !s[t].includes(e));
    }
    hasAnyEventListener(t) {
        if (void 0 === this._listeners) return !1;
        return void 0 !== this._listeners[t];
    }
    removeEventListener(t, e) {
        if (void 0 === this._listeners) return this;
        const s = this._listeners;
        if (void 0 === s[t]) return this;
        const i = s[t].indexOf(e);
        return -1 !== i && s[t].splice(i, 1), this;
    }
    dispatchEvent(t) {
        if (void 0 === this._listeners) return this;
        const e = this._listeners[t.type];
        if (void 0 !== e) {
            t.target = this;
            for (let s = 0, i = e.length; s < i; s++) e[s].call(this, t);
        }
        return this;
    }
}

class mt {
    constructor(t, e, s, i) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === s && (s = 0), void 0 === i && (i = 1), 
        this.x = t, this.y = e, this.z = s, this.w = i;
    }
    set(t, e, s, i) {
        return this.x = t, this.y = e, this.z = s, this.w = i, this;
    }
    toString() {
        return `${this.x},${this.y},${this.z},${this.w}`;
    }
    toArray() {
        return [ this.x, this.y, this.z, this.w ];
    }
    setFromAxisAngle(t, e) {
        const s = Math.sin(.5 * e);
        return this.x = t.x * s, this.y = t.y * s, this.z = t.z * s, this.w = Math.cos(.5 * e), 
        this;
    }
    toAxisAngle(t) {
        void 0 === t && (t = new at), this.normalize();
        const e = 2 * Math.acos(this.w), s = Math.sqrt(1 - this.w * this.w);
        return s < .001 ? (t.x = this.x, t.y = this.y, t.z = this.z) : (t.x = this.x / s, 
        t.y = this.y / s, t.z = this.z / s), [ t, e ];
    }
    setFromVectors(t, e) {
        if (t.isAntiparallelTo(e)) {
            const e = ft, s = yt;
            t.tangents(e, s), this.setFromAxisAngle(e, Math.PI);
        } else {
            const s = t.cross(e);
            this.x = s.x, this.y = s.y, this.z = s.z, this.w = Math.sqrt(t.length() ** 2 * e.length() ** 2) + t.dot(e), 
            this.normalize();
        }
        return this;
    }
    mult(t, e) {
        void 0 === e && (e = new mt);
        const s = this.x, i = this.y, n = this.z, o = this.w, a = t.x, r = t.y, l = t.z, h = t.w;
        return e.x = s * h + o * a + i * l - n * r, e.y = i * h + o * r + n * a - s * l, 
        e.z = n * h + o * l + s * r - i * a, e.w = o * h - s * a - i * r - n * l, e;
    }
    inverse(t) {
        void 0 === t && (t = new mt);
        const e = this.x, s = this.y, i = this.z, n = this.w;
        this.conjugate(t);
        const o = 1 / (e * e + s * s + i * i + n * n);
        return t.x *= o, t.y *= o, t.z *= o, t.w *= o, t;
    }
    conjugate(t) {
        return void 0 === t && (t = new mt), t.x = -this.x, t.y = -this.y, t.z = -this.z, 
        t.w = this.w, t;
    }
    normalize() {
        let t = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (t = 1 / t, 
        this.x *= t, this.y *= t, this.z *= t, this.w *= t), this;
    }
    normalizeFast() {
        const t = (3 - (this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)) / 2;
        return 0 === t ? (this.x = 0, this.y = 0, this.z = 0, this.w = 0) : (this.x *= t, 
        this.y *= t, this.z *= t, this.w *= t), this;
    }
    vmult(t, e) {
        void 0 === e && (e = new at);
        const s = t.x, i = t.y, n = t.z, o = this.x, a = this.y, r = this.z, l = this.w, h = l * s + a * n - r * i, c = l * i + r * s - o * n, d = l * n + o * i - a * s, u = -o * s - a * i - r * n;
        return e.x = h * l + u * -o + c * -r - d * -a, e.y = c * l + u * -a + d * -o - h * -r, 
        e.z = d * l + u * -r + h * -a - c * -o, e;
    }
    copy(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this;
    }
    toEuler(t, e) {
        let s, i, n;
        void 0 === e && (e = "YZX");
        const o = this.x, a = this.y, r = this.z, l = this.w;
        if ("YZX" !== e) throw new Error(`Euler order ${e} not supported yet.`);
        {
            const t = o * a + r * l;
            if (t > .499 && (s = 2 * Math.atan2(o, l), i = Math.PI / 2, n = 0), t < -.499 && (s = -2 * Math.atan2(o, l), 
            i = -Math.PI / 2, n = 0), void 0 === s) {
                const e = o * o, h = a * a, c = r * r;
                s = Math.atan2(2 * a * l - 2 * o * r, 1 - 2 * h - 2 * c), i = Math.asin(2 * t), 
                n = Math.atan2(2 * o * l - 2 * a * r, 1 - 2 * e - 2 * c);
            }
        }
        t.y = s, t.z = i, t.x = n;
    }
    setFromEuler(t, e, s, i) {
        void 0 === i && (i = "XYZ");
        const n = Math.cos(t / 2), o = Math.cos(e / 2), a = Math.cos(s / 2), r = Math.sin(t / 2), l = Math.sin(e / 2), h = Math.sin(s / 2);
        return "XYZ" === i ? (this.x = r * o * a + n * l * h, this.y = n * l * a - r * o * h, 
        this.z = n * o * h + r * l * a, this.w = n * o * a - r * l * h) : "YXZ" === i ? (this.x = r * o * a + n * l * h, 
        this.y = n * l * a - r * o * h, this.z = n * o * h - r * l * a, this.w = n * o * a + r * l * h) : "ZXY" === i ? (this.x = r * o * a - n * l * h, 
        this.y = n * l * a + r * o * h, this.z = n * o * h + r * l * a, this.w = n * o * a - r * l * h) : "ZYX" === i ? (this.x = r * o * a - n * l * h, 
        this.y = n * l * a + r * o * h, this.z = n * o * h - r * l * a, this.w = n * o * a + r * l * h) : "YZX" === i ? (this.x = r * o * a + n * l * h, 
        this.y = n * l * a + r * o * h, this.z = n * o * h - r * l * a, this.w = n * o * a - r * l * h) : "XZY" === i && (this.x = r * o * a - n * l * h, 
        this.y = n * l * a - r * o * h, this.z = n * o * h + r * l * a, this.w = n * o * a + r * l * h), 
        this;
    }
    clone() {
        return new mt(this.x, this.y, this.z, this.w);
    }
    slerp(t, e, s) {
        void 0 === s && (s = new mt);
        const i = this.x, n = this.y, o = this.z, a = this.w;
        let r, l, h, c, d, u = t.x, p = t.y, g = t.z, m = t.w;
        return l = i * u + n * p + o * g + a * m, l < 0 && (l = -l, u = -u, p = -p, g = -g, 
        m = -m), 1 - l > 1e-6 ? (r = Math.acos(l), h = Math.sin(r), c = Math.sin((1 - e) * r) / h, 
        d = Math.sin(e * r) / h) : (c = 1 - e, d = e), s.x = c * i + d * u, s.y = c * n + d * p, 
        s.z = c * o + d * g, s.w = c * a + d * m, s;
    }
    integrate(t, e, s, i) {
        void 0 === i && (i = new mt);
        const n = t.x * s.x, o = t.y * s.y, a = t.z * s.z, r = this.x, l = this.y, h = this.z, c = this.w, d = .5 * e;
        return i.x += d * (n * c + o * h - a * l), i.y += d * (o * c + a * r - n * h), i.z += d * (a * c + n * l - o * r), 
        i.w += d * (-n * r - o * l - a * h), i;
    }
}

const ft = new at, yt = new at;

class wt {
    constructor(t) {
        void 0 === t && (t = {}), this.id = wt.idCounter++, this.type = t.type || 0, this.boundingSphereRadius = 0, 
        this.collisionResponse = !t.collisionResponse || t.collisionResponse, this.collisionFilterGroup = void 0 !== t.collisionFilterGroup ? t.collisionFilterGroup : 1, 
        this.collisionFilterMask = void 0 !== t.collisionFilterMask ? t.collisionFilterMask : -1, 
        this.material = t.material ? t.material : null, this.body = null;
    }
    updateBoundingSphereRadius() {
        throw `computeBoundingSphereRadius() not implemented for shape type ${this.type}`;
    }
    volume() {
        throw `volume() not implemented for shape type ${this.type}`;
    }
    calculateLocalInertia(t, e) {
        throw `calculateLocalInertia() not implemented for shape type ${this.type}`;
    }
    calculateWorldAABB(t, e, s, i) {
        throw `calculateWorldAABB() not implemented for shape type ${this.type}`;
    }
}

wt.idCounter = 0, wt.types = {
    SPHERE: 1,
    PLANE: 2,
    BOX: 4,
    COMPOUND: 8,
    CONVEXPOLYHEDRON: 16,
    HEIGHTFIELD: 32,
    PARTICLE: 64,
    CYLINDER: 128,
    TRIMESH: 256
};

class vt {
    constructor(t) {
        void 0 === t && (t = {}), this.position = new at, this.quaternion = new mt, t.position && this.position.copy(t.position), 
        t.quaternion && this.quaternion.copy(t.quaternion);
    }
    pointToLocal(t, e) {
        return vt.pointToLocalFrame(this.position, this.quaternion, t, e);
    }
    pointToWorld(t, e) {
        return vt.pointToWorldFrame(this.position, this.quaternion, t, e);
    }
    vectorToWorldFrame(t, e) {
        return void 0 === e && (e = new at), this.quaternion.vmult(t, e), e;
    }
    static pointToLocalFrame(t, e, s, i) {
        return void 0 === i && (i = new at), s.vsub(t, i), e.conjugate(St), St.vmult(i, i), 
        i;
    }
    static pointToWorldFrame(t, e, s, i) {
        return void 0 === i && (i = new at), e.vmult(s, i), i.vadd(t, i), i;
    }
    static vectorToWorldFrame(t, e, s) {
        return void 0 === s && (s = new at), t.vmult(e, s), s;
    }
    static vectorToLocalFrame(t, e, s, i) {
        return void 0 === i && (i = new at), e.w *= -1, e.vmult(s, i), e.w *= -1, i;
    }
}

const St = new mt;

class bt extends wt {
    constructor(t) {
        void 0 === t && (t = {});
        const {vertices: e = [], faces: s = [], normals: i = [], axes: n, boundingSphereRadius: o} = t;
        super({
            type: wt.types.CONVEXPOLYHEDRON
        }), this.vertices = e, this.faces = s, this.faceNormals = i, 0 === this.faceNormals.length && this.computeNormals(), 
        o ? this.boundingSphereRadius = o : this.updateBoundingSphereRadius(), this.worldVertices = [], 
        this.worldVerticesNeedsUpdate = !0, this.worldFaceNormals = [], this.worldFaceNormalsNeedsUpdate = !0, 
        this.uniqueAxes = n ? n.slice() : null, this.uniqueEdges = [], this.computeEdges();
    }
    computeEdges() {
        const t = this.faces, e = this.vertices, s = this.uniqueEdges;
        s.length = 0;
        const i = new at;
        for (let n = 0; n !== t.length; n++) {
            const o = t[n], a = o.length;
            for (let t = 0; t !== a; t++) {
                const n = (t + 1) % a;
                e[o[t]].vsub(e[o[n]], i), i.normalize();
                let r = !1;
                for (let t = 0; t !== s.length; t++) if (s[t].almostEquals(i) || s[t].almostEquals(i)) {
                    r = !0;
                    break;
                }
                r || s.push(i.clone());
            }
        }
    }
    computeNormals() {
        this.faceNormals.length = this.faces.length;
        for (let t = 0; t < this.faces.length; t++) {
            for (let e = 0; e < this.faces[t].length; e++) if (!this.vertices[this.faces[t][e]]) throw new Error(`Vertex ${this.faces[t][e]} not found!`);
            const e = this.faceNormals[t] || new at;
            this.getFaceNormal(t, e), e.negate(e), this.faceNormals[t] = e;
            const s = this.vertices[this.faces[t][0]];
            if (e.dot(s) < 0) {
                console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);
                for (let e = 0; e < this.faces[t].length; e++) console.warn(`.vertices[${this.faces[t][e]}] = Vec3(${this.vertices[this.faces[t][e]].toString()})`);
            }
        }
    }
    getFaceNormal(t, e) {
        const s = this.faces[t], i = this.vertices[s[0]], n = this.vertices[s[1]], o = this.vertices[s[2]];
        bt.computeNormal(i, n, o, e);
    }
    static computeNormal(t, e, s, i) {
        const n = new at, o = new at;
        e.vsub(t, o), s.vsub(e, n), n.cross(o, i), i.isZero() || i.normalize();
    }
    clipAgainstHull(t, e, s, i, n, o, a, r, l) {
        const h = new at;
        let c = -1, d = -Number.MAX_VALUE;
        for (let t = 0; t < s.faces.length; t++) {
            h.copy(s.faceNormals[t]), n.vmult(h, h);
            const e = h.dot(o);
            e > d && (d = e, c = t);
        }
        const u = [];
        for (let t = 0; t < s.faces[c].length; t++) {
            const e = s.vertices[s.faces[c][t]], o = new at;
            o.copy(e), n.vmult(o, o), i.vadd(o, o), u.push(o);
        }
        c >= 0 && this.clipFaceAgainstHull(o, t, e, u, a, r, l);
    }
    findSeparatingAxis(t, e, s, i, n, o, a, r) {
        const l = new at, h = new at, c = new at, d = new at, u = new at, p = new at;
        let g = Number.MAX_VALUE;
        const m = this;
        if (m.uniqueAxes) for (let a = 0; a !== m.uniqueAxes.length; a++) {
            s.vmult(m.uniqueAxes[a], l);
            const r = m.testSepAxis(l, t, e, s, i, n);
            if (!1 === r) return !1;
            r < g && (g = r, o.copy(l));
        } else {
            const r = a ? a.length : m.faces.length;
            for (let h = 0; h < r; h++) {
                const r = a ? a[h] : h;
                l.copy(m.faceNormals[r]), s.vmult(l, l);
                const c = m.testSepAxis(l, t, e, s, i, n);
                if (!1 === c) return !1;
                c < g && (g = c, o.copy(l));
            }
        }
        if (t.uniqueAxes) for (let a = 0; a !== t.uniqueAxes.length; a++) {
            n.vmult(t.uniqueAxes[a], h);
            const r = m.testSepAxis(h, t, e, s, i, n);
            if (!1 === r) return !1;
            r < g && (g = r, o.copy(h));
        } else {
            const a = r ? r.length : t.faces.length;
            for (let l = 0; l < a; l++) {
                const a = r ? r[l] : l;
                h.copy(t.faceNormals[a]), n.vmult(h, h);
                const c = m.testSepAxis(h, t, e, s, i, n);
                if (!1 === c) return !1;
                c < g && (g = c, o.copy(h));
            }
        }
        for (let a = 0; a !== m.uniqueEdges.length; a++) {
            s.vmult(m.uniqueEdges[a], d);
            for (let a = 0; a !== t.uniqueEdges.length; a++) if (n.vmult(t.uniqueEdges[a], u), 
            d.cross(u, p), !p.almostZero()) {
                p.normalize();
                const a = m.testSepAxis(p, t, e, s, i, n);
                if (!1 === a) return !1;
                a < g && (g = a, o.copy(p));
            }
        }
        return i.vsub(e, c), c.dot(o) > 0 && o.negate(o), !0;
    }
    testSepAxis(t, e, s, i, n, o) {
        bt.project(this, t, s, i, xt), bt.project(e, t, n, o, Ct);
        const a = xt[0], r = xt[1], l = Ct[0], h = Ct[1];
        if (a < h || l < r) return !1;
        const c = a - h, d = l - r;
        return c < d ? c : d;
    }
    calculateLocalInertia(t, e) {
        const s = new at, i = new at;
        this.computeLocalAABB(i, s);
        const n = s.x - i.x, o = s.y - i.y, a = s.z - i.z;
        e.x = 1 / 12 * t * (2 * o * 2 * o + 2 * a * 2 * a), e.y = 1 / 12 * t * (2 * n * 2 * n + 2 * a * 2 * a), 
        e.z = 1 / 12 * t * (2 * o * 2 * o + 2 * n * 2 * n);
    }
    getPlaneConstantOfFace(t) {
        const e = this.faces[t], s = this.faceNormals[t], i = this.vertices[e[0]];
        return -s.dot(i);
    }
    clipFaceAgainstHull(t, e, s, i, n, o, a) {
        const r = new at, l = new at, h = new at, c = new at, d = new at, u = new at, p = new at, g = new at, m = this, f = i, y = [];
        let w = -1, v = Number.MAX_VALUE;
        for (let e = 0; e < m.faces.length; e++) {
            r.copy(m.faceNormals[e]), s.vmult(r, r);
            const i = r.dot(t);
            i < v && (v = i, w = e);
        }
        if (w < 0) return;
        const S = m.faces[w];
        S.connectedFaces = [];
        for (let t = 0; t < m.faces.length; t++) for (let e = 0; e < m.faces[t].length; e++) -1 !== S.indexOf(m.faces[t][e]) && t !== w && -1 === S.connectedFaces.indexOf(t) && S.connectedFaces.push(t);
        const b = S.length;
        for (let t = 0; t < b; t++) {
            const i = m.vertices[S[t]], n = m.vertices[S[(t + 1) % b]];
            i.vsub(n, l), h.copy(l), s.vmult(h, h), e.vadd(h, h), c.copy(this.faceNormals[w]), 
            s.vmult(c, c), e.vadd(c, c), h.cross(c, d), d.negate(d), u.copy(i), s.vmult(u, u), 
            e.vadd(u, u);
            const o = S.connectedFaces[t];
            p.copy(this.faceNormals[o]);
            const a = this.getPlaneConstantOfFace(o);
            g.copy(p), s.vmult(g, g);
            const r = a - g.dot(e);
            for (this.clipFaceAgainstPlane(f, y, g, r); f.length; ) f.shift();
            for (;y.length; ) f.push(y.shift());
        }
        p.copy(this.faceNormals[w]);
        const x = this.getPlaneConstantOfFace(w);
        g.copy(p), s.vmult(g, g);
        const C = x - g.dot(e);
        for (let t = 0; t < f.length; t++) {
            let e = g.dot(f[t]) + C;
            if (e <= n && (console.log(`clamped: depth=${e} to minDist=${n}`), e = n), e <= o) {
                const s = f[t];
                if (e <= 1e-6) {
                    const t = {
                        point: s,
                        normal: g,
                        depth: e
                    };
                    a.push(t);
                }
            }
        }
    }
    clipFaceAgainstPlane(t, e, s, i) {
        let n, o;
        const a = t.length;
        if (a < 2) return e;
        let r = t[t.length - 1], l = t[0];
        n = s.dot(r) + i;
        for (let h = 0; h < a; h++) {
            if (l = t[h], o = s.dot(l) + i, n < 0) if (o < 0) {
                const t = new at;
                t.copy(l), e.push(t);
            } else {
                const t = new at;
                r.lerp(l, n / (n - o), t), e.push(t);
            } else if (o < 0) {
                const t = new at;
                r.lerp(l, n / (n - o), t), e.push(t), e.push(l);
            }
            r = l, n = o;
        }
        return e;
    }
    computeWorldVertices(t, e) {
        for (;this.worldVertices.length < this.vertices.length; ) this.worldVertices.push(new at);
        const s = this.vertices, i = this.worldVertices;
        for (let n = 0; n !== this.vertices.length; n++) e.vmult(s[n], i[n]), t.vadd(i[n], i[n]);
        this.worldVerticesNeedsUpdate = !1;
    }
    computeLocalAABB(t, e) {
        const s = this.vertices;
        t.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), e.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for (let i = 0; i < this.vertices.length; i++) {
            const n = s[i];
            n.x < t.x ? t.x = n.x : n.x > e.x && (e.x = n.x), n.y < t.y ? t.y = n.y : n.y > e.y && (e.y = n.y), 
            n.z < t.z ? t.z = n.z : n.z > e.z && (e.z = n.z);
        }
    }
    computeWorldFaceNormals(t) {
        const e = this.faceNormals.length;
        for (;this.worldFaceNormals.length < e; ) this.worldFaceNormals.push(new at);
        const s = this.faceNormals, i = this.worldFaceNormals;
        for (let n = 0; n !== e; n++) t.vmult(s[n], i[n]);
        this.worldFaceNormalsNeedsUpdate = !1;
    }
    updateBoundingSphereRadius() {
        let t = 0;
        const e = this.vertices;
        for (let s = 0; s !== e.length; s++) {
            const i = e[s].lengthSquared();
            i > t && (t = i);
        }
        this.boundingSphereRadius = Math.sqrt(t);
    }
    calculateWorldAABB(t, e, s, i) {
        const n = this.vertices;
        let o, a, r, l, h, c, d = new at;
        for (let s = 0; s < n.length; s++) {
            d.copy(n[s]), e.vmult(d, d), t.vadd(d, d);
            const i = d;
            (void 0 === o || i.x < o) && (o = i.x), (void 0 === l || i.x > l) && (l = i.x), 
            (void 0 === a || i.y < a) && (a = i.y), (void 0 === h || i.y > h) && (h = i.y), 
            (void 0 === r || i.z < r) && (r = i.z), (void 0 === c || i.z > c) && (c = i.z);
        }
        s.set(o, a, r), i.set(l, h, c);
    }
    volume() {
        return 4 * Math.PI * this.boundingSphereRadius / 3;
    }
    getAveragePointLocal(t) {
        void 0 === t && (t = new at);
        const e = this.vertices;
        for (let s = 0; s < e.length; s++) t.vadd(e[s], t);
        return t.scale(1 / e.length, t), t;
    }
    transformAllPoints(t, e) {
        const s = this.vertices.length, i = this.vertices;
        if (e) {
            for (let t = 0; t < s; t++) {
                const s = i[t];
                e.vmult(s, s);
            }
            for (let t = 0; t < this.faceNormals.length; t++) {
                const s = this.faceNormals[t];
                e.vmult(s, s);
            }
        }
        if (t) for (let e = 0; e < s; e++) {
            const s = i[e];
            s.vadd(t, s);
        }
    }
    pointIsInside(t) {
        const e = this.vertices, s = this.faces, i = this.faceNormals, n = new at;
        this.getAveragePointLocal(n);
        for (let o = 0; o < this.faces.length; o++) {
            let a = i[o];
            const r = e[s[o][0]], l = new at;
            t.vsub(r, l);
            const h = a.dot(l), c = new at;
            n.vsub(r, c);
            const d = a.dot(c);
            if (h < 0 && d > 0 || h > 0 && d < 0) return !1;
        }
        return -1;
    }
    static project(t, e, s, i, n) {
        const o = t.vertices.length, a = Mt;
        let r = 0, l = 0;
        const h = Pt, c = t.vertices;
        h.setZero(), vt.vectorToLocalFrame(s, i, e, a), vt.pointToLocalFrame(s, i, h, h);
        const d = h.dot(a);
        l = r = c[0].dot(a);
        for (let t = 1; t < o; t++) {
            const e = c[t].dot(a);
            e > r && (r = e), e < l && (l = e);
        }
        if (l -= d, r -= d, l > r) {
            const t = l;
            l = r, r = t;
        }
        n[0] = r, n[1] = l;
    }
}

const xt = [], Ct = [];

new at;

const Mt = new at, Pt = new at;

class At extends wt {
    constructor(t) {
        super({
            type: wt.types.BOX
        }), this.halfExtents = t, this.convexPolyhedronRepresentation = null, this.updateConvexPolyhedronRepresentation(), 
        this.updateBoundingSphereRadius();
    }
    updateConvexPolyhedronRepresentation() {
        const t = this.halfExtents.x, e = this.halfExtents.y, s = this.halfExtents.z, i = at, n = [ new i(-t, -e, -s), new i(t, -e, -s), new i(t, e, -s), new i(-t, e, -s), new i(-t, -e, s), new i(t, -e, s), new i(t, e, s), new i(-t, e, s) ], o = [ new i(0, 0, 1), new i(0, 1, 0), new i(1, 0, 0) ], a = new bt({
            vertices: n,
            faces: [ [ 3, 2, 1, 0 ], [ 4, 5, 6, 7 ], [ 5, 4, 0, 1 ], [ 2, 3, 7, 6 ], [ 0, 4, 7, 3 ], [ 1, 2, 6, 5 ] ],
            axes: o
        });
        this.convexPolyhedronRepresentation = a, a.material = this.material;
    }
    calculateLocalInertia(t, e) {
        return void 0 === e && (e = new at), At.calculateInertia(this.halfExtents, t, e), 
        e;
    }
    static calculateInertia(t, e, s) {
        const i = t;
        s.x = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.z * 2 * i.z), s.y = 1 / 12 * e * (2 * i.x * 2 * i.x + 2 * i.z * 2 * i.z), 
        s.z = 1 / 12 * e * (2 * i.y * 2 * i.y + 2 * i.x * 2 * i.x);
    }
    getSideNormals(t, e) {
        const s = t, i = this.halfExtents;
        if (s[0].set(i.x, 0, 0), s[1].set(0, i.y, 0), s[2].set(0, 0, i.z), s[3].set(-i.x, 0, 0), 
        s[4].set(0, -i.y, 0), s[5].set(0, 0, -i.z), void 0 !== e) for (let t = 0; t !== s.length; t++) e.vmult(s[t], s[t]);
        return s;
    }
    volume() {
        return 8 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
    }
    updateBoundingSphereRadius() {
        this.boundingSphereRadius = this.halfExtents.length();
    }
    forEachWorldCorner(t, e, s) {
        const i = this.halfExtents, n = [ [ i.x, i.y, i.z ], [ -i.x, i.y, i.z ], [ -i.x, -i.y, i.z ], [ -i.x, -i.y, -i.z ], [ i.x, -i.y, -i.z ], [ i.x, i.y, -i.z ], [ -i.x, i.y, -i.z ], [ i.x, -i.y, i.z ] ];
        for (let i = 0; i < n.length; i++) Et.set(n[i][0], n[i][1], n[i][2]), e.vmult(Et, Et), 
        t.vadd(Et, Et), s(Et.x, Et.y, Et.z);
    }
    calculateWorldAABB(t, e, s, i) {
        const n = this.halfExtents;
        Lt[0].set(n.x, n.y, n.z), Lt[1].set(-n.x, n.y, n.z), Lt[2].set(-n.x, -n.y, n.z), 
        Lt[3].set(-n.x, -n.y, -n.z), Lt[4].set(n.x, -n.y, -n.z), Lt[5].set(n.x, n.y, -n.z), 
        Lt[6].set(-n.x, n.y, -n.z), Lt[7].set(n.x, -n.y, n.z);
        const o = Lt[0];
        e.vmult(o, o), t.vadd(o, o), i.copy(o), s.copy(o);
        for (let n = 1; n < 8; n++) {
            const o = Lt[n];
            e.vmult(o, o), t.vadd(o, o);
            const a = o.x, r = o.y, l = o.z;
            a > i.x && (i.x = a), r > i.y && (i.y = r), l > i.z && (i.z = l), a < s.x && (s.x = a), 
            r < s.y && (s.y = r), l < s.z && (s.z = l);
        }
    }
}

const Et = new at, Lt = [ new at, new at, new at, new at, new at, new at, new at, new at ], kt = 1, Tt = 2, Bt = 4, zt = 0, Nt = 1, Ft = 2;

class It extends gt {
    constructor(t) {
        void 0 === t && (t = {}), super(), this.id = It.idCounter++, this.index = -1, this.world = null, 
        this.vlambda = new at, this.collisionFilterGroup = "number" == typeof t.collisionFilterGroup ? t.collisionFilterGroup : 1, 
        this.collisionFilterMask = "number" == typeof t.collisionFilterMask ? t.collisionFilterMask : -1, 
        this.collisionResponse = "boolean" != typeof t.collisionResponse || t.collisionResponse, 
        this.position = new at, this.previousPosition = new at, this.interpolatedPosition = new at, 
        this.initPosition = new at, t.position && (this.position.copy(t.position), this.previousPosition.copy(t.position), 
        this.interpolatedPosition.copy(t.position), this.initPosition.copy(t.position)), 
        this.velocity = new at, t.velocity && this.velocity.copy(t.velocity), this.initVelocity = new at, 
        this.force = new at;
        const e = "number" == typeof t.mass ? t.mass : 0;
        this.mass = e, this.invMass = e > 0 ? 1 / e : 0, this.material = t.material || null, 
        this.linearDamping = "number" == typeof t.linearDamping ? t.linearDamping : .01, 
        this.type = e <= 0 ? It.STATIC : It.DYNAMIC, typeof t.type == typeof It.STATIC && (this.type = t.type), 
        this.allowSleep = void 0 === t.allowSleep || t.allowSleep, this.sleepState = It.AWAKE, 
        this.sleepSpeedLimit = void 0 !== t.sleepSpeedLimit ? t.sleepSpeedLimit : .1, this.sleepTimeLimit = void 0 !== t.sleepTimeLimit ? t.sleepTimeLimit : 1, 
        this.timeLastSleepy = 0, this.wakeUpAfterNarrowphase = !1, this.torque = new at, 
        this.quaternion = new mt, this.initQuaternion = new mt, this.previousQuaternion = new mt, 
        this.interpolatedQuaternion = new mt, t.quaternion && (this.quaternion.copy(t.quaternion), 
        this.initQuaternion.copy(t.quaternion), this.previousQuaternion.copy(t.quaternion), 
        this.interpolatedQuaternion.copy(t.quaternion)), this.angularVelocity = new at, 
        t.angularVelocity && this.angularVelocity.copy(t.angularVelocity), this.initAngularVelocity = new at, 
        this.shapes = [], this.shapeOffsets = [], this.shapeOrientations = [], this.inertia = new at, 
        this.invInertia = new at, this.invInertiaWorld = new nt, this.invMassSolve = 0, 
        this.invInertiaSolve = new at, this.invInertiaWorldSolve = new nt, this.fixedRotation = void 0 !== t.fixedRotation && t.fixedRotation, 
        this.angularDamping = void 0 !== t.angularDamping ? t.angularDamping : .01, this.linearFactor = new at(1, 1, 1), 
        t.linearFactor && this.linearFactor.copy(t.linearFactor), this.angularFactor = new at(1, 1, 1), 
        t.angularFactor && this.angularFactor.copy(t.angularFactor), this.aabb = new ct, 
        this.aabbNeedsUpdate = !0, this.boundingRadius = 0, this.wlambda = new at, this.isTrigger = Boolean(t.isTrigger), 
        t.shape && this.addShape(t.shape), this.updateMassProperties();
    }
    wakeUp() {
        const t = this.sleepState;
        this.sleepState = It.AWAKE, this.wakeUpAfterNarrowphase = !1, t === It.SLEEPING && this.dispatchEvent(It.wakeupEvent);
    }
    sleep() {
        this.sleepState = It.SLEEPING, this.velocity.set(0, 0, 0), this.angularVelocity.set(0, 0, 0), 
        this.wakeUpAfterNarrowphase = !1;
    }
    sleepTick(t) {
        if (this.allowSleep) {
            const e = this.sleepState, s = this.velocity.lengthSquared() + this.angularVelocity.lengthSquared(), i = this.sleepSpeedLimit ** 2;
            e === It.AWAKE && s < i ? (this.sleepState = It.SLEEPY, this.timeLastSleepy = t, 
            this.dispatchEvent(It.sleepyEvent)) : e === It.SLEEPY && s > i ? this.wakeUp() : e === It.SLEEPY && t - this.timeLastSleepy > this.sleepTimeLimit && (this.sleep(), 
            this.dispatchEvent(It.sleepEvent));
        }
    }
    updateSolveMassProperties() {
        this.sleepState === It.SLEEPING || this.type === It.KINEMATIC ? (this.invMassSolve = 0, 
        this.invInertiaSolve.setZero(), this.invInertiaWorldSolve.setZero()) : (this.invMassSolve = this.invMass, 
        this.invInertiaSolve.copy(this.invInertia), this.invInertiaWorldSolve.copy(this.invInertiaWorld));
    }
    pointToLocalFrame(t, e) {
        return void 0 === e && (e = new at), t.vsub(this.position, e), this.quaternion.conjugate().vmult(e, e), 
        e;
    }
    vectorToLocalFrame(t, e) {
        return void 0 === e && (e = new at), this.quaternion.conjugate().vmult(t, e), e;
    }
    pointToWorldFrame(t, e) {
        return void 0 === e && (e = new at), this.quaternion.vmult(t, e), e.vadd(this.position, e), 
        e;
    }
    vectorToWorldFrame(t, e) {
        return void 0 === e && (e = new at), this.quaternion.vmult(t, e), e;
    }
    addShape(t, e, s) {
        const i = new at, n = new mt;
        return e && i.copy(e), s && n.copy(s), this.shapes.push(t), this.shapeOffsets.push(i), 
        this.shapeOrientations.push(n), this.updateMassProperties(), this.updateBoundingRadius(), 
        this.aabbNeedsUpdate = !0, t.body = this, this;
    }
    removeShape(t) {
        const e = this.shapes.indexOf(t);
        return -1 === e ? (console.warn("Shape does not belong to the body"), this) : (this.shapes.splice(e, 1), 
        this.shapeOffsets.splice(e, 1), this.shapeOrientations.splice(e, 1), this.updateMassProperties(), 
        this.updateBoundingRadius(), this.aabbNeedsUpdate = !0, t.body = null, this);
    }
    updateBoundingRadius() {
        const t = this.shapes, e = this.shapeOffsets, s = t.length;
        let i = 0;
        for (let n = 0; n !== s; n++) {
            const s = t[n];
            s.updateBoundingSphereRadius();
            const o = e[n].length(), a = s.boundingSphereRadius;
            o + a > i && (i = o + a);
        }
        this.boundingRadius = i;
    }
    updateAABB() {
        const t = this.shapes, e = this.shapeOffsets, s = this.shapeOrientations, i = t.length, n = _t, o = Rt, a = this.quaternion, r = this.aabb, l = Dt;
        for (let h = 0; h !== i; h++) {
            const i = t[h];
            a.vmult(e[h], n), n.vadd(this.position, n), a.mult(s[h], o), i.calculateWorldAABB(n, o, l.lowerBound, l.upperBound), 
            0 === h ? r.copy(l) : r.extend(l);
        }
        this.aabbNeedsUpdate = !1;
    }
    updateInertiaWorld(t) {
        const e = this.invInertia;
        if (e.x !== e.y || e.y !== e.z || t) {
            const t = jt, s = Ot;
            t.setRotationFromQuaternion(this.quaternion), t.transpose(s), t.scale(e, t), t.mmult(s, this.invInertiaWorld);
        } else ;
    }
    applyForce(t, e) {
        if (void 0 === e && (e = new at), this.type !== It.DYNAMIC) return;
        this.sleepState === It.SLEEPING && this.wakeUp();
        const s = Ut;
        e.cross(t, s), this.force.vadd(t, this.force), this.torque.vadd(s, this.torque);
    }
    applyLocalForce(t, e) {
        if (void 0 === e && (e = new at), this.type !== It.DYNAMIC) return;
        const s = Vt, i = qt;
        this.vectorToWorldFrame(t, s), this.vectorToWorldFrame(e, i), this.applyForce(s, i);
    }
    applyTorque(t) {
        this.type === It.DYNAMIC && (this.sleepState === It.SLEEPING && this.wakeUp(), this.torque.vadd(t, this.torque));
    }
    applyImpulse(t, e) {
        if (void 0 === e && (e = new at), this.type !== It.DYNAMIC) return;
        this.sleepState === It.SLEEPING && this.wakeUp();
        const s = e, i = Wt;
        i.copy(t), i.scale(this.invMass, i), this.velocity.vadd(i, this.velocity);
        const n = Gt;
        s.cross(t, n), this.invInertiaWorld.vmult(n, n), this.angularVelocity.vadd(n, this.angularVelocity);
    }
    applyLocalImpulse(t, e) {
        if (void 0 === e && (e = new at), this.type !== It.DYNAMIC) return;
        const s = Ht, i = Kt;
        this.vectorToWorldFrame(t, s), this.vectorToWorldFrame(e, i), this.applyImpulse(s, i);
    }
    updateMassProperties() {
        const t = Yt;
        this.invMass = this.mass > 0 ? 1 / this.mass : 0;
        const e = this.inertia, s = this.fixedRotation;
        this.updateAABB(), t.set((this.aabb.upperBound.x - this.aabb.lowerBound.x) / 2, (this.aabb.upperBound.y - this.aabb.lowerBound.y) / 2, (this.aabb.upperBound.z - this.aabb.lowerBound.z) / 2), 
        At.calculateInertia(t, this.mass, e), this.invInertia.set(e.x > 0 && !s ? 1 / e.x : 0, e.y > 0 && !s ? 1 / e.y : 0, e.z > 0 && !s ? 1 / e.z : 0), 
        this.updateInertiaWorld(!0);
    }
    getVelocityAtWorldPoint(t, e) {
        const s = new at;
        return t.vsub(this.position, s), this.angularVelocity.cross(s, e), this.velocity.vadd(e, e), 
        e;
    }
    integrate(t, e, s) {
        if (this.previousPosition.copy(this.position), this.previousQuaternion.copy(this.quaternion), 
        this.type !== It.DYNAMIC && this.type !== It.KINEMATIC || this.sleepState === It.SLEEPING) return;
        const i = this.velocity, n = this.angularVelocity, o = this.position, a = this.force, r = this.torque, l = this.quaternion, h = this.invMass, c = this.invInertiaWorld, d = this.linearFactor, u = h * t;
        i.x += a.x * u * d.x, i.y += a.y * u * d.y, i.z += a.z * u * d.z;
        const p = c.elements, g = this.angularFactor, m = r.x * g.x, f = r.y * g.y, y = r.z * g.z;
        n.x += t * (p[0] * m + p[1] * f + p[2] * y), n.y += t * (p[3] * m + p[4] * f + p[5] * y), 
        n.z += t * (p[6] * m + p[7] * f + p[8] * y), o.x += i.x * t, o.y += i.y * t, o.z += i.z * t, 
        l.integrate(this.angularVelocity, t, this.angularFactor, l), e && (s ? l.normalizeFast() : l.normalize()), 
        this.aabbNeedsUpdate = !0, this.updateInertiaWorld();
    }
}

It.idCounter = 0, It.COLLIDE_EVENT_NAME = "collide", It.DYNAMIC = kt, It.STATIC = Tt, 
It.KINEMATIC = Bt, It.AWAKE = zt, It.SLEEPY = Nt, It.SLEEPING = Ft, It.wakeupEvent = {
    type: "wakeup"
}, It.sleepyEvent = {
    type: "sleepy"
}, It.sleepEvent = {
    type: "sleep"
};

const _t = new at, Rt = new mt, Dt = new ct, jt = new nt, Ot = new nt;

new nt;

const Ut = new at, Vt = new at, qt = new at, Wt = new at, Gt = new at, Ht = new at, Kt = new at, Yt = new at;

const Xt = new at;

new at, new mt, new at;

const Qt = {
    keys: []
}, $t = [], Zt = [];

new at, new at, new at;

class Jt extends class {
    constructor() {
        this.world = null, this.useBoundingBoxes = !1, this.dirty = !0;
    }
    collisionPairs(t, e, s) {
        throw new Error("collisionPairs not implemented for this BroadPhase class!");
    }
    needBroadphaseCollision(t, e) {
        return 0 != (t.collisionFilterGroup & e.collisionFilterMask) && 0 != (e.collisionFilterGroup & t.collisionFilterMask) && (0 == (t.type & It.STATIC) && t.sleepState !== It.SLEEPING || 0 == (e.type & It.STATIC) && e.sleepState !== It.SLEEPING);
    }
    intersectionTest(t, e, s, i) {
        this.useBoundingBoxes ? this.doBoundingBoxBroadphase(t, e, s, i) : this.doBoundingSphereBroadphase(t, e, s, i);
    }
    doBoundingSphereBroadphase(t, e, s, i) {
        const n = Xt;
        e.position.vsub(t.position, n);
        const o = (t.boundingRadius + e.boundingRadius) ** 2;
        n.lengthSquared() < o && (s.push(t), i.push(e));
    }
    doBoundingBoxBroadphase(t, e, s, i) {
        t.aabbNeedsUpdate && t.updateAABB(), e.aabbNeedsUpdate && e.updateAABB(), t.aabb.overlaps(e.aabb) && (s.push(t), 
        i.push(e));
    }
    makePairsUnique(t, e) {
        const s = Qt, i = $t, n = Zt, o = t.length;
        for (let s = 0; s !== o; s++) i[s] = t[s], n[s] = e[s];
        t.length = 0, e.length = 0;
        for (let t = 0; t !== o; t++) {
            const e = i[t].id, o = n[t].id, a = e < o ? `${e},${o}` : `${o},${e}`;
            s[a] = t, s.keys.push(a);
        }
        for (let o = 0; o !== s.keys.length; o++) {
            const o = s.keys.pop(), a = s[o];
            t.push(i[a]), e.push(n[a]), delete s[o];
        }
    }
    setWorld(t) {}
    static boundingSphereCheck(t, e) {
        const s = new at;
        t.position.vsub(e.position, s);
        const i = t.shapes[0], n = e.shapes[0];
        return Math.pow(i.boundingSphereRadius + n.boundingSphereRadius, 2) > s.lengthSquared();
    }
    aabbQuery(t, e, s) {
        return console.warn(".aabbQuery is not implemented in this Broadphase subclass."), 
        [];
    }
} {
    constructor() {
        super();
    }
    collisionPairs(t, e, s) {
        const i = t.bodies, n = i.length;
        let o, a;
        for (let t = 0; t !== n; t++) for (let n = 0; n !== t; n++) o = i[t], a = i[n], 
        this.needBroadphaseCollision(o, a) && this.intersectionTest(o, a, e, s);
    }
    aabbQuery(t, e, s) {
        void 0 === s && (s = []);
        for (let i = 0; i < t.bodies.length; i++) {
            const n = t.bodies[i];
            n.aabbNeedsUpdate && n.updateAABB(), n.aabb.overlaps(e) && s.push(n);
        }
        return s;
    }
}

class te {
    constructor() {
        this.rayFromWorld = new at, this.rayToWorld = new at, this.hitNormalWorld = new at, 
        this.hitPointWorld = new at, this.hasHit = !1, this.shape = null, this.body = null, 
        this.hitFaceIndex = -1, this.distance = -1, this.shouldStop = !1;
    }
    reset() {
        this.rayFromWorld.setZero(), this.rayToWorld.setZero(), this.hitNormalWorld.setZero(), 
        this.hitPointWorld.setZero(), this.hasHit = !1, this.shape = null, this.body = null, 
        this.hitFaceIndex = -1, this.distance = -1, this.shouldStop = !1;
    }
    abort() {
        this.shouldStop = !0;
    }
    set(t, e, s, i, n, o, a) {
        this.rayFromWorld.copy(t), this.rayToWorld.copy(e), this.hitNormalWorld.copy(s), 
        this.hitPointWorld.copy(i), this.shape = n, this.body = o, this.distance = a;
    }
}

let ee, se, ie, ne, oe, ae, re;

const le = 1, he = 2, ce = 4;

ee = wt.types.SPHERE, se = wt.types.PLANE, ie = wt.types.BOX, ne = wt.types.CYLINDER, 
oe = wt.types.CONVEXPOLYHEDRON, ae = wt.types.HEIGHTFIELD, re = wt.types.TRIMESH;

class de {
    get [ee]() {
        return this._intersectSphere;
    }
    get [se]() {
        return this._intersectPlane;
    }
    get [ie]() {
        return this._intersectBox;
    }
    get [ne]() {
        return this._intersectConvex;
    }
    get [oe]() {
        return this._intersectConvex;
    }
    get [ae]() {
        return this._intersectHeightfield;
    }
    get [re]() {
        return this._intersectTrimesh;
    }
    constructor(t, e) {
        void 0 === t && (t = new at), void 0 === e && (e = new at), this.from = t.clone(), 
        this.to = e.clone(), this.direction = new at, this.precision = 1e-4, this.checkCollisionResponse = !0, 
        this.skipBackfaces = !1, this.collisionFilterMask = -1, this.collisionFilterGroup = -1, 
        this.mode = de.ANY, this.result = new te, this.hasHit = !1, this.callback = t => {};
    }
    intersectWorld(t, e) {
        return this.mode = e.mode || de.ANY, this.result = e.result || new te, this.skipBackfaces = !!e.skipBackfaces, 
        this.collisionFilterMask = void 0 !== e.collisionFilterMask ? e.collisionFilterMask : -1, 
        this.collisionFilterGroup = void 0 !== e.collisionFilterGroup ? e.collisionFilterGroup : -1, 
        this.checkCollisionResponse = void 0 === e.checkCollisionResponse || e.checkCollisionResponse, 
        e.from && this.from.copy(e.from), e.to && this.to.copy(e.to), this.callback = e.callback || (() => {}), 
        this.hasHit = !1, this.result.reset(), this.updateDirection(), this.getAABB(ue), 
        pe.length = 0, t.broadphase.aabbQuery(t, ue, pe), this.intersectBodies(pe), this.hasHit;
    }
    intersectBody(t, e) {
        e && (this.result = e, this.updateDirection());
        const s = this.checkCollisionResponse;
        if (s && !t.collisionResponse) return;
        if (0 == (this.collisionFilterGroup & t.collisionFilterMask) || 0 == (t.collisionFilterGroup & this.collisionFilterMask)) return;
        const i = fe, n = ye;
        for (let e = 0, o = t.shapes.length; e < o; e++) {
            const o = t.shapes[e];
            if ((!s || o.collisionResponse) && (t.quaternion.mult(t.shapeOrientations[e], n), 
            t.quaternion.vmult(t.shapeOffsets[e], i), i.vadd(t.position, i), this.intersectShape(o, n, i, t), 
            this.result.shouldStop)) break;
        }
    }
    intersectBodies(t, e) {
        e && (this.result = e, this.updateDirection());
        for (let e = 0, s = t.length; !this.result.shouldStop && e < s; e++) this.intersectBody(t[e]);
    }
    updateDirection() {
        this.to.vsub(this.from, this.direction), this.direction.normalize();
    }
    intersectShape(t, e, s, i) {
        const n = function(t, e, s) {
            s.vsub(t, De);
            const i = De.dot(e);
            e.scale(i, je), je.vadd(t, je);
            return s.distanceTo(je);
        }(this.from, this.direction, s);
        if (n > t.boundingSphereRadius) return;
        const o = this[t.type];
        o && o.call(this, t, e, s, i, t);
    }
    _intersectBox(t, e, s, i, n) {
        return this._intersectConvex(t.convexPolyhedronRepresentation, e, s, i, n);
    }
    _intersectPlane(t, e, s, i, n) {
        const o = this.from, a = this.to, r = this.direction, l = new at(0, 0, 1);
        e.vmult(l, l);
        const h = new at;
        o.vsub(s, h);
        const c = h.dot(l);
        a.vsub(s, h);
        if (c * h.dot(l) > 0) return;
        if (o.distanceTo(a) < c) return;
        const d = l.dot(r);
        if (Math.abs(d) < this.precision) return;
        const u = new at, p = new at, g = new at;
        o.vsub(s, u);
        const m = -l.dot(u) / d;
        r.scale(m, p), o.vadd(p, g), this.reportIntersection(l, g, n, i, -1);
    }
    getAABB(t) {
        const {lowerBound: e, upperBound: s} = t, i = this.to, n = this.from;
        e.x = Math.min(i.x, n.x), e.y = Math.min(i.y, n.y), e.z = Math.min(i.z, n.z), s.x = Math.max(i.x, n.x), 
        s.y = Math.max(i.y, n.y), s.z = Math.max(i.z, n.z);
    }
    _intersectHeightfield(t, e, s, i, n) {
        t.data, t.elementSize;
        const o = Me;
        o.from.copy(this.from), o.to.copy(this.to), vt.pointToLocalFrame(s, e, o.from, o.from), 
        vt.pointToLocalFrame(s, e, o.to, o.to), o.updateDirection();
        const a = Pe;
        let r, l, h, c;
        r = l = 0, h = c = t.data.length - 1;
        const d = new ct;
        o.getAABB(d), t.getIndexOfPosition(d.lowerBound.x, d.lowerBound.y, a, !0), r = Math.max(r, a[0]), 
        l = Math.max(l, a[1]), t.getIndexOfPosition(d.upperBound.x, d.upperBound.y, a, !0), 
        h = Math.min(h, a[0] + 1), c = Math.min(c, a[1] + 1);
        for (let a = r; a < h; a++) for (let r = l; r < c; r++) {
            if (this.result.shouldStop) return;
            if (t.getAabbAtIndex(a, r, d), d.overlapsRay(o)) {
                if (t.getConvexTrianglePillar(a, r, !1), vt.pointToWorldFrame(s, e, t.pillarOffset, Ce), 
                this._intersectConvex(t.pillarConvex, e, Ce, i, n, xe), this.result.shouldStop) return;
                t.getConvexTrianglePillar(a, r, !0), vt.pointToWorldFrame(s, e, t.pillarOffset, Ce), 
                this._intersectConvex(t.pillarConvex, e, Ce, i, n, xe);
            }
        }
    }
    _intersectSphere(t, e, s, i, n) {
        const o = this.from, a = this.to, r = t.radius, l = (a.x - o.x) ** 2 + (a.y - o.y) ** 2 + (a.z - o.z) ** 2, h = 2 * ((a.x - o.x) * (o.x - s.x) + (a.y - o.y) * (o.y - s.y) + (a.z - o.z) * (o.z - s.z)), c = h ** 2 - 4 * l * ((o.x - s.x) ** 2 + (o.y - s.y) ** 2 + (o.z - s.z) ** 2 - r ** 2), d = Ae, u = Ee;
        if (!(c < 0)) if (0 === c) o.lerp(a, c, d), d.vsub(s, u), u.normalize(), this.reportIntersection(u, d, n, i, -1); else {
            const t = (-h - Math.sqrt(c)) / (2 * l), e = (-h + Math.sqrt(c)) / (2 * l);
            if (t >= 0 && t <= 1 && (o.lerp(a, t, d), d.vsub(s, u), u.normalize(), this.reportIntersection(u, d, n, i, -1)), 
            this.result.shouldStop) return;
            e >= 0 && e <= 1 && (o.lerp(a, e, d), d.vsub(s, u), u.normalize(), this.reportIntersection(u, d, n, i, -1));
        }
    }
    _intersectConvex(t, e, s, i, n, o) {
        const a = Le, r = ke, l = o && o.faceList || null, h = t.faces, c = t.vertices, d = t.faceNormals, u = this.direction, p = this.from, g = this.to, m = p.distanceTo(g), f = l ? l.length : h.length, y = this.result;
        for (let t = 0; !y.shouldStop && t < f; t++) {
            const o = l ? l[t] : t, g = h[o], f = d[o], w = e, v = s;
            r.copy(c[g[0]]), w.vmult(r, r), r.vadd(v, r), r.vsub(p, r), w.vmult(f, a);
            const S = u.dot(a);
            if (Math.abs(S) < this.precision) continue;
            const b = a.dot(r) / S;
            if (!(b < 0)) {
                u.scale(b, we), we.vadd(p, we), ve.copy(c[g[0]]), w.vmult(ve, ve), v.vadd(ve, ve);
                for (let t = 1; !y.shouldStop && t < g.length - 1; t++) {
                    Se.copy(c[g[t]]), be.copy(c[g[t + 1]]), w.vmult(Se, Se), w.vmult(be, be), v.vadd(Se, Se), 
                    v.vadd(be, be);
                    const e = we.distanceTo(p);
                    !de.pointInTriangle(we, ve, Se, be) && !de.pointInTriangle(we, Se, ve, be) || e > m || this.reportIntersection(a, we, n, i, o);
                }
            }
        }
    }
    _intersectTrimesh(t, e, s, i, n, o) {
        const a = Te, r = _e, l = Re, h = ke, c = Be, d = ze, u = Ne, p = Ie, g = Fe, m = t.indices;
        t.vertices;
        const f = this.from, y = this.to, w = this.direction;
        l.position.copy(s), l.quaternion.copy(e), vt.vectorToLocalFrame(s, e, w, c), vt.pointToLocalFrame(s, e, f, d), 
        vt.pointToLocalFrame(s, e, y, u), u.x *= t.scale.x, u.y *= t.scale.y, u.z *= t.scale.z, 
        d.x *= t.scale.x, d.y *= t.scale.y, d.z *= t.scale.z, u.vsub(d, c), c.normalize();
        const v = d.distanceSquared(u);
        t.tree.rayQuery(this, l, r);
        for (let o = 0, l = r.length; !this.result.shouldStop && o !== l; o++) {
            const l = r[o];
            t.getNormal(l, a), t.getVertex(m[3 * l], ve), ve.vsub(d, h);
            const u = c.dot(a), f = a.dot(h) / u;
            if (f < 0) continue;
            c.scale(f, we), we.vadd(d, we), t.getVertex(m[3 * l + 1], Se), t.getVertex(m[3 * l + 2], be);
            const y = we.distanceSquared(d);
            !de.pointInTriangle(we, Se, ve, be) && !de.pointInTriangle(we, ve, Se, be) || y > v || (vt.vectorToWorldFrame(e, a, g), 
            vt.pointToWorldFrame(s, e, we, p), this.reportIntersection(g, p, n, i, l));
        }
        r.length = 0;
    }
    reportIntersection(t, e, s, i, n) {
        const o = this.from, a = this.to, r = o.distanceTo(e), l = this.result;
        if (!(this.skipBackfaces && t.dot(this.direction) > 0)) switch (l.hitFaceIndex = void 0 !== n ? n : -1, 
        this.mode) {
          case de.ALL:
            this.hasHit = !0, l.set(o, a, t, e, s, i, r), l.hasHit = !0, this.callback(l);
            break;

          case de.CLOSEST:
            (r < l.distance || !l.hasHit) && (this.hasHit = !0, l.hasHit = !0, l.set(o, a, t, e, s, i, r));
            break;

          case de.ANY:
            this.hasHit = !0, l.hasHit = !0, l.set(o, a, t, e, s, i, r), l.shouldStop = !0;
        }
    }
    static pointInTriangle(t, e, s, i) {
        i.vsub(e, De), s.vsub(e, ge), t.vsub(e, me);
        const n = De.dot(De), o = De.dot(ge), a = De.dot(me), r = ge.dot(ge), l = ge.dot(me);
        let h, c;
        return (h = r * a - o * l) >= 0 && (c = n * l - o * a) >= 0 && h + c < n * r - o * o;
    }
}

de.CLOSEST = le, de.ANY = he, de.ALL = ce;

const ue = new ct, pe = [], ge = new at, me = new at, fe = new at, ye = new mt, we = new at, ve = new at, Se = new at, be = new at;

new at, new te;

const xe = {
    faceList: [ 0 ]
}, Ce = new at, Me = new de, Pe = [], Ae = new at, Ee = new at, Le = new at;

new at, new at;

const ke = new at, Te = new at, Be = new at, ze = new at, Ne = new at, Fe = new at, Ie = new at;

new ct;

const _e = [], Re = new vt, De = new at, je = new at;

class Oe {
    constructor() {
        this.spatial = new at, this.rotational = new at;
    }
    multiplyElement(t) {
        return t.spatial.dot(this.spatial) + t.rotational.dot(this.rotational);
    }
    multiplyVectors(t, e) {
        return t.dot(this.spatial) + e.dot(this.rotational);
    }
}

class Ue {
    constructor(t, e, s, i) {
        void 0 === s && (s = -1e6), void 0 === i && (i = 1e6), this.id = Ue.idCounter++, 
        this.minForce = s, this.maxForce = i, this.bi = t, this.bj = e, this.a = 0, this.b = 0, 
        this.eps = 0, this.jacobianElementA = new Oe, this.jacobianElementB = new Oe, this.enabled = !0, 
        this.multiplier = 0, this.setSpookParams(1e7, 4, 1 / 60);
    }
    setSpookParams(t, e, s) {
        const i = e, n = t, o = s;
        this.a = 4 / (o * (1 + 4 * i)), this.b = 4 * i / (1 + 4 * i), this.eps = 4 / (o * o * n * (1 + 4 * i));
    }
    computeB(t, e, s) {
        const i = this.computeGW();
        return -this.computeGq() * t - i * e - this.computeGiMf() * s;
    }
    computeGq() {
        const t = this.jacobianElementA, e = this.jacobianElementB, s = this.bi, i = this.bj, n = s.position, o = i.position;
        return t.spatial.dot(n) + e.spatial.dot(o);
    }
    computeGW() {
        const t = this.jacobianElementA, e = this.jacobianElementB, s = this.bi, i = this.bj, n = s.velocity, o = i.velocity, a = s.angularVelocity, r = i.angularVelocity;
        return t.multiplyVectors(n, a) + e.multiplyVectors(o, r);
    }
    computeGWlambda() {
        const t = this.jacobianElementA, e = this.jacobianElementB, s = this.bi, i = this.bj, n = s.vlambda, o = i.vlambda, a = s.wlambda, r = i.wlambda;
        return t.multiplyVectors(n, a) + e.multiplyVectors(o, r);
    }
    computeGiMf() {
        const t = this.jacobianElementA, e = this.jacobianElementB, s = this.bi, i = this.bj, n = s.force, o = s.torque, a = i.force, r = i.torque, l = s.invMassSolve, h = i.invMassSolve;
        return n.scale(l, Ve), a.scale(h, qe), s.invInertiaWorldSolve.vmult(o, We), i.invInertiaWorldSolve.vmult(r, Ge), 
        t.multiplyVectors(Ve, We) + e.multiplyVectors(qe, Ge);
    }
    computeGiMGt() {
        const t = this.jacobianElementA, e = this.jacobianElementB, s = this.bi, i = this.bj, n = s.invMassSolve, o = i.invMassSolve, a = s.invInertiaWorldSolve, r = i.invInertiaWorldSolve;
        let l = n + o;
        return a.vmult(t.rotational, He), l += He.dot(t.rotational), r.vmult(e.rotational, He), 
        l += He.dot(e.rotational), l;
    }
    addToWlambda(t) {
        const e = this.jacobianElementA, s = this.jacobianElementB, i = this.bi, n = this.bj, o = Ke;
        i.vlambda.addScaledVector(i.invMassSolve * t, e.spatial, i.vlambda), n.vlambda.addScaledVector(n.invMassSolve * t, s.spatial, n.vlambda), 
        i.invInertiaWorldSolve.vmult(e.rotational, o), i.wlambda.addScaledVector(t, o, i.wlambda), 
        n.invInertiaWorldSolve.vmult(s.rotational, o), n.wlambda.addScaledVector(t, o, n.wlambda);
    }
    computeC() {
        return this.computeGiMGt() + this.eps;
    }
}

Ue.idCounter = 0;

const Ve = new at, qe = new at, We = new at, Ge = new at, He = new at, Ke = new at;

class Ye extends Ue {
    constructor(t, e, s) {
        void 0 === s && (s = 1e6), super(t, e, 0, s), this.restitution = 0, this.ri = new at, 
        this.rj = new at, this.ni = new at;
    }
    computeB(t) {
        const e = this.a, s = this.b, i = this.bi, n = this.bj, o = this.ri, a = this.rj, r = Xe, l = Qe, h = i.velocity, c = i.angularVelocity;
        i.force, i.torque;
        const d = n.velocity, u = n.angularVelocity;
        n.force, n.torque;
        const p = $e, g = this.jacobianElementA, m = this.jacobianElementB, f = this.ni;
        o.cross(f, r), a.cross(f, l), f.negate(g.spatial), r.negate(g.rotational), m.spatial.copy(f), 
        m.rotational.copy(l), p.copy(n.position), p.vadd(a, p), p.vsub(i.position, p), p.vsub(o, p);
        const y = f.dot(p), w = this.restitution + 1;
        return -y * e - (w * d.dot(f) - w * h.dot(f) + u.dot(l) - c.dot(r)) * s - t * this.computeGiMf();
    }
    getImpactVelocityAlongNormal() {
        const t = Ze, e = Je, s = ts, i = es, n = ss;
        return this.bi.position.vadd(this.ri, s), this.bj.position.vadd(this.rj, i), this.bi.getVelocityAtWorldPoint(s, t), 
        this.bj.getVelocityAtWorldPoint(i, e), t.vsub(e, n), this.ni.dot(n);
    }
}

const Xe = new at, Qe = new at, $e = new at, Ze = new at, Je = new at, ts = new at, es = new at, ss = new at;

new at, new at, new at, new at, new at, new at, new at, new at, new at, new at;

class is extends Ue {
    constructor(t, e, s) {
        super(t, e, -s, s), this.ri = new at, this.rj = new at, this.t = new at;
    }
    computeB(t) {
        this.a;
        const e = this.b;
        this.bi, this.bj;
        const s = this.ri, i = this.rj, n = ns, o = os, a = this.t;
        s.cross(a, n), i.cross(a, o);
        const r = this.jacobianElementA, l = this.jacobianElementB;
        a.negate(r.spatial), n.negate(r.rotational), l.spatial.copy(a), l.rotational.copy(o);
        return -this.computeGW() * e - t * this.computeGiMf();
    }
}

const ns = new at, os = new at;

class as {
    constructor(t, e, s) {
        s = class {
            static defaults(t, e) {
                void 0 === t && (t = {});
                for (let s in e) s in t || (t[s] = e[s]);
                return t;
            }
        }.defaults(s, {
            friction: .3,
            restitution: .3,
            contactEquationStiffness: 1e7,
            contactEquationRelaxation: 3,
            frictionEquationStiffness: 1e7,
            frictionEquationRelaxation: 3
        }), this.id = as.idCounter++, this.materials = [ t, e ], this.friction = s.friction, 
        this.restitution = s.restitution, this.contactEquationStiffness = s.contactEquationStiffness, 
        this.contactEquationRelaxation = s.contactEquationRelaxation, this.frictionEquationStiffness = s.frictionEquationStiffness, 
        this.frictionEquationRelaxation = s.frictionEquationRelaxation;
    }
}

as.idCounter = 0;

class rs {
    constructor(t) {
        void 0 === t && (t = {});
        let e = "";
        "string" == typeof t && (e = t, t = {}), this.name = e, this.id = rs.idCounter++, 
        this.friction = void 0 !== t.friction ? t.friction : -1, this.restitution = void 0 !== t.restitution ? t.restitution : -1;
    }
}

rs.idCounter = 0, new at, new at, new at, new at, new at, new at, new at, new at, 
new at, new at, new at, new at, new at, new at, new at, new at, new at, new at, 
new at, new de, new at, new at, new at, new at(1, 0, 0), new at(0, 1, 0), new at(0, 0, 1), 
new at, new at, new at, new at, new at, new at, new at, new at, new at, new at, 
new at;

class ls extends wt {
    constructor(t) {
        if (super({
            type: wt.types.SPHERE
        }), this.radius = void 0 !== t ? t : 1, this.radius < 0) throw new Error("The sphere radius cannot be negative.");
        this.updateBoundingSphereRadius();
    }
    calculateLocalInertia(t, e) {
        void 0 === e && (e = new at);
        const s = 2 * t * this.radius * this.radius / 5;
        return e.x = s, e.y = s, e.z = s, e;
    }
    volume() {
        return 4 * Math.PI * Math.pow(this.radius, 3) / 3;
    }
    updateBoundingSphereRadius() {
        this.boundingSphereRadius = this.radius;
    }
    calculateWorldAABB(t, e, s, i) {
        const n = this.radius, o = [ "x", "y", "z" ];
        for (let e = 0; e < o.length; e++) {
            const a = o[e];
            s[a] = t[a] - n, i[a] = t[a] + n;
        }
    }
}

new at, new at, new at, new at, new at, new at, new at, new at, new at;

class hs extends bt {
    constructor(t, e, s, i) {
        if (void 0 === t && (t = 1), void 0 === e && (e = 1), void 0 === s && (s = 1), void 0 === i && (i = 8), 
        t < 0) throw new Error("The cylinder radiusTop cannot be negative.");
        if (e < 0) throw new Error("The cylinder radiusBottom cannot be negative.");
        const n = i, o = [], a = [], r = [], l = [], h = [], c = Math.cos, d = Math.sin;
        o.push(new at(-e * d(0), .5 * -s, e * c(0))), l.push(0), o.push(new at(-t * d(0), .5 * s, t * c(0))), 
        h.push(1);
        for (let i = 0; i < n; i++) {
            const u = 2 * Math.PI / n * (i + 1), p = 2 * Math.PI / n * (i + .5);
            i < n - 1 ? (o.push(new at(-e * d(u), .5 * -s, e * c(u))), l.push(2 * i + 2), o.push(new at(-t * d(u), .5 * s, t * c(u))), 
            h.push(2 * i + 3), r.push([ 2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2 ])) : r.push([ 2 * i, 2 * i + 1, 1, 0 ]), 
            (n % 2 == 1 || i < n / 2) && a.push(new at(-d(p), 0, c(p)));
        }
        r.push(l), a.push(new at(0, 1, 0));
        const u = [];
        for (let t = 0; t < h.length; t++) u.push(h[h.length - t - 1]);
        r.push(u), super({
            vertices: o,
            faces: r,
            axes: a
        }), this.type = wt.types.CYLINDER, this.radiusTop = t, this.radiusBottom = e, this.height = s, 
        this.numSegments = i;
    }
}

class cs extends wt {
    constructor() {
        super({
            type: wt.types.PLANE
        }), this.worldNormal = new at, this.worldNormalNeedsUpdate = !0, this.boundingSphereRadius = Number.MAX_VALUE;
    }
    computeWorldNormal(t) {
        const e = this.worldNormal;
        e.set(0, 0, 1), t.vmult(e, e), this.worldNormalNeedsUpdate = !1;
    }
    calculateLocalInertia(t, e) {
        return void 0 === e && (e = new at), e;
    }
    volume() {
        return Number.MAX_VALUE;
    }
    calculateWorldAABB(t, e, s, i) {
        ds.set(0, 0, 1), e.vmult(ds, ds);
        const n = Number.MAX_VALUE;
        s.set(-n, -n, -n), i.set(n, n, n), 1 === ds.x ? i.x = t.x : -1 === ds.x && (s.x = t.x), 
        1 === ds.y ? i.y = t.y : -1 === ds.y && (s.y = t.y), 1 === ds.z ? i.z = t.z : -1 === ds.z && (s.z = t.z);
    }
    updateBoundingSphereRadius() {
        this.boundingSphereRadius = Number.MAX_VALUE;
    }
}

const ds = new at;

new at, new at, new at, new at, new at, new at, new at, new at, new at, new at, 
new ct, new at, new ct, new at, new at, new at, new at, new at, new at, new at, 
new ct, new at, new vt, new ct;

class us {
    constructor() {
        this.equations = [];
    }
    solve(t, e) {
        return 0;
    }
    addEquation(t) {
        !t.enabled || t.bi.isTrigger || t.bj.isTrigger || this.equations.push(t);
    }
    removeEquation(t) {
        const e = this.equations, s = e.indexOf(t);
        -1 !== s && e.splice(s, 1);
    }
    removeAllEquations() {
        this.equations.length = 0;
    }
}

class ps extends us {
    constructor() {
        super(), this.iterations = 10, this.tolerance = 1e-7;
    }
    solve(t, e) {
        let s = 0;
        const i = this.iterations, n = this.tolerance * this.tolerance, o = this.equations, a = o.length, r = e.bodies, l = r.length, h = t;
        let c, d, u, p, g, m;
        if (0 !== a) for (let t = 0; t !== l; t++) r[t].updateSolveMassProperties();
        const f = ms, y = fs, w = gs;
        f.length = a, y.length = a, w.length = a;
        for (let t = 0; t !== a; t++) {
            const e = o[t];
            w[t] = 0, y[t] = e.computeB(h), f[t] = 1 / e.computeC();
        }
        if (0 !== a) {
            for (let t = 0; t !== l; t++) {
                const e = r[t], s = e.vlambda, i = e.wlambda;
                s.set(0, 0, 0), i.set(0, 0, 0);
            }
            for (s = 0; s !== i; s++) {
                p = 0;
                for (let t = 0; t !== a; t++) {
                    const e = o[t];
                    c = y[t], d = f[t], m = w[t], g = e.computeGWlambda(), u = d * (c - g - e.eps * m), 
                    m + u < e.minForce ? u = e.minForce - m : m + u > e.maxForce && (u = e.maxForce - m), 
                    w[t] += u, p += u > 0 ? u : -u, e.addToWlambda(u);
                }
                if (p * p < n) break;
            }
            for (let t = 0; t !== l; t++) {
                const e = r[t], s = e.velocity, i = e.angularVelocity;
                e.vlambda.vmul(e.linearFactor, e.vlambda), s.vadd(e.vlambda, s), e.wlambda.vmul(e.angularFactor, e.wlambda), 
                i.vadd(e.wlambda, i);
            }
            let t = o.length;
            const e = 1 / h;
            for (;t--; ) o[t].multiplier = w[t] * e;
        }
        return s;
    }
}

const gs = [], ms = [], fs = [];

class ys extends us {
    constructor(t) {
        for (super(), this.iterations = 10, this.tolerance = 1e-7, this.subsolver = t, this.nodes = [], 
        this.nodePool = []; this.nodePool.length < 128; ) this.nodePool.push(this.createNode());
    }
    createNode() {
        return {
            body: null,
            children: [],
            eqs: [],
            visited: !1
        };
    }
    solve(t, e) {
        const s = ws, i = this.nodePool, n = e.bodies, o = this.equations, a = o.length, r = n.length, l = this.subsolver;
        for (;i.length < r; ) i.push(this.createNode());
        s.length = r;
        for (let t = 0; t < r; t++) s[t] = i[t];
        for (let t = 0; t !== r; t++) {
            const e = s[t];
            e.body = n[t], e.children.length = 0, e.eqs.length = 0, e.visited = !1;
        }
        for (let t = 0; t !== a; t++) {
            const e = o[t], i = n.indexOf(e.bi), a = n.indexOf(e.bj), r = s[i], l = s[a];
            r.children.push(l), r.eqs.push(e), l.children.push(r), l.eqs.push(e);
        }
        let h, c = 0, d = vs;
        l.tolerance = this.tolerance, l.iterations = this.iterations;
        const u = Ss;
        for (;h = xs(s); ) {
            d.length = 0, u.bodies.length = 0, Ms(h, Ps, u.bodies, d);
            const e = d.length;
            d = d.sort(As);
            for (let t = 0; t !== e; t++) l.addEquation(d[t]);
            l.solve(t, u), l.removeAllEquations(), c++;
        }
        return c;
    }
}

const ws = [], vs = [], Ss = {
    bodies: []
}, bs = It.STATIC;

function xs(t) {
    const e = t.length;
    for (let s = 0; s !== e; s++) {
        const e = t[s];
        if (!(e.visited || e.body.type & bs)) return e;
    }
    return !1;
}

const Cs = [];

function Ms(t, e, s, i) {
    for (Cs.push(t), t.visited = !0, e(t, s, i); Cs.length; ) {
        const t = Cs.pop();
        let n;
        for (;n = xs(t.children); ) n.visited = !0, e(n, s, i), Cs.push(n);
    }
}

function Ps(t, e, s) {
    e.push(t.body);
    const i = t.eqs.length;
    for (let e = 0; e !== i; e++) {
        const i = t.eqs[e];
        s.includes(i) || s.push(i);
    }
}

function As(t, e) {
    return e.id - t.id;
}

class Es extends class {
    constructor() {
        this.objects = [], this.type = Object;
    }
    release() {
        const t = arguments.length;
        for (let e = 0; e !== t; e++) this.objects.push(e < 0 || arguments.length <= e ? void 0 : arguments[e]);
        return this;
    }
    get() {
        return 0 === this.objects.length ? this.constructObject() : this.objects.pop();
    }
    constructObject() {
        throw new Error("constructObject() not implemented in this Pool subclass yet!");
    }
    resize(t) {
        const e = this.objects;
        for (;e.length > t; ) e.pop();
        for (;e.length < t; ) e.push(this.constructObject());
        return this;
    }
} {
    constructor() {
        super(...arguments), this.type = at;
    }
    constructObject() {
        return new at;
    }
}

const Ls = wt.types.SPHERE, ks = wt.types.SPHERE | wt.types.PLANE, Ts = wt.types.BOX | wt.types.BOX, Bs = wt.types.SPHERE | wt.types.BOX, zs = wt.types.PLANE | wt.types.BOX, Ns = wt.types.CONVEXPOLYHEDRON, Fs = wt.types.SPHERE | wt.types.CONVEXPOLYHEDRON, Is = wt.types.PLANE | wt.types.CONVEXPOLYHEDRON, _s = wt.types.BOX | wt.types.CONVEXPOLYHEDRON, Rs = wt.types.SPHERE | wt.types.HEIGHTFIELD, Ds = wt.types.BOX | wt.types.HEIGHTFIELD, js = wt.types.CONVEXPOLYHEDRON | wt.types.HEIGHTFIELD, Os = wt.types.PARTICLE | wt.types.SPHERE, Us = wt.types.PLANE | wt.types.PARTICLE, Vs = wt.types.BOX | wt.types.PARTICLE, qs = wt.types.PARTICLE | wt.types.CONVEXPOLYHEDRON, Ws = wt.types.CYLINDER, Gs = wt.types.SPHERE | wt.types.CYLINDER, Hs = wt.types.PLANE | wt.types.CYLINDER, Ks = wt.types.BOX | wt.types.CYLINDER, Ys = wt.types.CONVEXPOLYHEDRON | wt.types.CYLINDER, Xs = wt.types.HEIGHTFIELD | wt.types.CYLINDER, Qs = wt.types.PARTICLE | wt.types.CYLINDER, $s = wt.types.SPHERE | wt.types.TRIMESH, Zs = wt.types.PLANE | wt.types.TRIMESH;

class Js {
    get [Ls]() {
        return this.sphereSphere;
    }
    get [ks]() {
        return this.spherePlane;
    }
    get [Ts]() {
        return this.boxBox;
    }
    get [Bs]() {
        return this.sphereBox;
    }
    get [zs]() {
        return this.planeBox;
    }
    get [Ns]() {
        return this.convexConvex;
    }
    get [Fs]() {
        return this.sphereConvex;
    }
    get [Is]() {
        return this.planeConvex;
    }
    get [_s]() {
        return this.boxConvex;
    }
    get [Rs]() {
        return this.sphereHeightfield;
    }
    get [Ds]() {
        return this.boxHeightfield;
    }
    get [js]() {
        return this.convexHeightfield;
    }
    get [Os]() {
        return this.sphereParticle;
    }
    get [Us]() {
        return this.planeParticle;
    }
    get [Vs]() {
        return this.boxParticle;
    }
    get [qs]() {
        return this.convexParticle;
    }
    get [Ws]() {
        return this.convexConvex;
    }
    get [Gs]() {
        return this.sphereConvex;
    }
    get [Hs]() {
        return this.planeConvex;
    }
    get [Ks]() {
        return this.boxConvex;
    }
    get [Ys]() {
        return this.convexConvex;
    }
    get [Xs]() {
        return this.heightfieldCylinder;
    }
    get [Qs]() {
        return this.particleCylinder;
    }
    get [$s]() {
        return this.sphereTrimesh;
    }
    get [Zs]() {
        return this.planeTrimesh;
    }
    constructor(t) {
        this.contactPointPool = [], this.frictionEquationPool = [], this.result = [], this.frictionResult = [], 
        this.v3pool = new Es, this.world = t, this.currentContactMaterial = t.defaultContactMaterial, 
        this.enableFrictionReduction = !1;
    }
    createContactEquation(t, e, s, i, n, o) {
        let a;
        this.contactPointPool.length ? (a = this.contactPointPool.pop(), a.bi = t, a.bj = e) : a = new Ye(t, e), 
        a.enabled = t.collisionResponse && e.collisionResponse && s.collisionResponse && i.collisionResponse;
        const r = this.currentContactMaterial;
        a.restitution = r.restitution, a.setSpookParams(r.contactEquationStiffness, r.contactEquationRelaxation, this.world.dt);
        const l = s.material || t.material, h = i.material || e.material;
        return l && h && l.restitution >= 0 && h.restitution >= 0 && (a.restitution = l.restitution * h.restitution), 
        a.si = n || s, a.sj = o || i, a;
    }
    createFrictionEquationsFromContact(t, e) {
        const s = t.bi, i = t.bj, n = t.si, o = t.sj, a = this.world, r = this.currentContactMaterial;
        let l = r.friction;
        const h = n.material || s.material, c = o.material || i.material;
        if (h && c && h.friction >= 0 && c.friction >= 0 && (l = h.friction * c.friction), 
        l > 0) {
            const n = l * (a.frictionGravity || a.gravity).length();
            let o = s.invMass + i.invMass;
            o > 0 && (o = 1 / o);
            const h = this.frictionEquationPool, c = h.length ? h.pop() : new is(s, i, n * o), d = h.length ? h.pop() : new is(s, i, n * o);
            return c.bi = d.bi = s, c.bj = d.bj = i, c.minForce = d.minForce = -n * o, c.maxForce = d.maxForce = n * o, 
            c.ri.copy(t.ri), c.rj.copy(t.rj), d.ri.copy(t.ri), d.rj.copy(t.rj), t.ni.tangents(c.t, d.t), 
            c.setSpookParams(r.frictionEquationStiffness, r.frictionEquationRelaxation, a.dt), 
            d.setSpookParams(r.frictionEquationStiffness, r.frictionEquationRelaxation, a.dt), 
            c.enabled = d.enabled = t.enabled, e.push(c, d), !0;
        }
        return !1;
    }
    createFrictionFromAverage(t) {
        let e = this.result[this.result.length - 1];
        if (!this.createFrictionEquationsFromContact(e, this.frictionResult) || 1 === t) return;
        const s = this.frictionResult[this.frictionResult.length - 2], i = this.frictionResult[this.frictionResult.length - 1];
        ti.setZero(), ei.setZero(), si.setZero();
        const n = e.bi;
        e.bj;
        for (let s = 0; s !== t; s++) e = this.result[this.result.length - 1 - s], e.bi !== n ? (ti.vadd(e.ni, ti), 
        ei.vadd(e.ri, ei), si.vadd(e.rj, si)) : (ti.vsub(e.ni, ti), ei.vadd(e.rj, ei), si.vadd(e.ri, si));
        const o = 1 / t;
        ei.scale(o, s.ri), si.scale(o, s.rj), i.ri.copy(s.ri), i.rj.copy(s.rj), ti.normalize(), 
        ti.tangents(s.t, i.t);
    }
    getContacts(t, e, s, i, n, o, a) {
        this.contactPointPool = n, this.frictionEquationPool = a, this.result = i, this.frictionResult = o;
        const r = oi, l = ai, h = ii, c = ni;
        for (let i = 0, n = t.length; i !== n; i++) {
            const n = t[i], o = e[i];
            let a = null;
            n.material && o.material && (a = s.getContactMaterial(n.material, o.material) || null);
            const d = n.type & It.KINEMATIC && o.type & It.STATIC || n.type & It.STATIC && o.type & It.KINEMATIC || n.type & It.KINEMATIC && o.type & It.KINEMATIC;
            for (let t = 0; t < n.shapes.length; t++) {
                n.quaternion.mult(n.shapeOrientations[t], r), n.quaternion.vmult(n.shapeOffsets[t], h), 
                h.vadd(n.position, h);
                const e = n.shapes[t];
                for (let t = 0; t < o.shapes.length; t++) {
                    o.quaternion.mult(o.shapeOrientations[t], l), o.quaternion.vmult(o.shapeOffsets[t], c), 
                    c.vadd(o.position, c);
                    const i = o.shapes[t];
                    if (!(e.collisionFilterMask & i.collisionFilterGroup && i.collisionFilterMask & e.collisionFilterGroup)) continue;
                    if (h.distanceTo(c) > e.boundingSphereRadius + i.boundingSphereRadius) continue;
                    let u = null;
                    e.material && i.material && (u = s.getContactMaterial(e.material, i.material) || null), 
                    this.currentContactMaterial = u || a || s.defaultContactMaterial;
                    const p = this[e.type | i.type];
                    if (p) {
                        let t = !1;
                        t = e.type < i.type ? p.call(this, e, i, h, c, r, l, n, o, e, i, d) : p.call(this, i, e, c, h, l, r, o, n, e, i, d), 
                        t && d && (s.shapeOverlapKeeper.set(e.id, i.id), s.bodyOverlapKeeper.set(n.id, o.id));
                    }
                }
            }
        }
    }
    sphereSphere(t, e, s, i, n, o, a, r, l, h, c) {
        if (c) return s.distanceSquared(i) < (t.radius + e.radius) ** 2;
        const d = this.createContactEquation(a, r, t, e, l, h);
        i.vsub(s, d.ni), d.ni.normalize(), d.ri.copy(d.ni), d.rj.copy(d.ni), d.ri.scale(t.radius, d.ri), 
        d.rj.scale(-e.radius, d.rj), d.ri.vadd(s, d.ri), d.ri.vsub(a.position, d.ri), d.rj.vadd(i, d.rj), 
        d.rj.vsub(r.position, d.rj), this.result.push(d), this.createFrictionEquationsFromContact(d, this.frictionResult);
    }
    spherePlane(t, e, s, i, n, o, a, r, l, h, c) {
        const d = this.createContactEquation(a, r, t, e, l, h);
        if (d.ni.set(0, 0, 1), o.vmult(d.ni, d.ni), d.ni.negate(d.ni), d.ni.normalize(), 
        d.ni.scale(t.radius, d.ri), s.vsub(i, Pi), d.ni.scale(d.ni.dot(Pi), Ai), Pi.vsub(Ai, d.rj), 
        -Pi.dot(d.ni) <= t.radius) {
            if (c) return !0;
            const t = d.ri, e = d.rj;
            t.vadd(s, t), t.vsub(a.position, t), e.vadd(i, e), e.vsub(r.position, e), this.result.push(d), 
            this.createFrictionEquationsFromContact(d, this.frictionResult);
        }
    }
    boxBox(t, e, s, i, n, o, a, r, l, h, c) {
        return t.convexPolyhedronRepresentation.material = t.material, e.convexPolyhedronRepresentation.material = e.material, 
        t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, 
        this.convexConvex(t.convexPolyhedronRepresentation, e.convexPolyhedronRepresentation, s, i, n, o, a, r, t, e, c);
    }
    sphereBox(t, e, s, i, n, o, a, r, l, h, c) {
        const d = this.v3pool, u = Ii;
        s.vsub(i, Bi), e.getSideNormals(u, o);
        const p = t.radius;
        let g = !1;
        const m = Ri, f = Di, y = ji;
        let w = null, v = 0, S = 0, b = 0, x = null;
        for (let t = 0, e = u.length; t !== e && !1 === g; t++) {
            const e = zi;
            e.copy(u[t]);
            const s = e.length();
            e.normalize();
            const i = Bi.dot(e);
            if (i < s + p && i > 0) {
                const n = Ni, o = Fi;
                n.copy(u[(t + 1) % 3]), o.copy(u[(t + 2) % 3]);
                const a = n.length(), r = o.length();
                n.normalize(), o.normalize();
                const l = Bi.dot(n), h = Bi.dot(o);
                if (l < a && l > -a && h < r && h > -r) {
                    const t = Math.abs(i - s - p);
                    if ((null === x || t < x) && (x = t, S = l, b = h, w = s, m.copy(e), f.copy(n), 
                    y.copy(o), v++, c)) return !0;
                }
            }
        }
        if (v) {
            g = !0;
            const n = this.createContactEquation(a, r, t, e, l, h);
            m.scale(-p, n.ri), n.ni.copy(m), n.ni.negate(n.ni), m.scale(w, m), f.scale(S, f), 
            m.vadd(f, m), y.scale(b, y), m.vadd(y, n.rj), n.ri.vadd(s, n.ri), n.ri.vsub(a.position, n.ri), 
            n.rj.vadd(i, n.rj), n.rj.vsub(r.position, n.rj), this.result.push(n), this.createFrictionEquationsFromContact(n, this.frictionResult);
        }
        let C = d.get();
        const M = _i;
        for (let n = 0; 2 !== n && !g; n++) for (let o = 0; 2 !== o && !g; o++) for (let d = 0; 2 !== d && !g; d++) if (C.set(0, 0, 0), 
        n ? C.vadd(u[0], C) : C.vsub(u[0], C), o ? C.vadd(u[1], C) : C.vsub(u[1], C), d ? C.vadd(u[2], C) : C.vsub(u[2], C), 
        i.vadd(C, M), M.vsub(s, M), M.lengthSquared() < p * p) {
            if (c) return !0;
            g = !0;
            const n = this.createContactEquation(a, r, t, e, l, h);
            n.ri.copy(M), n.ri.normalize(), n.ni.copy(n.ri), n.ri.scale(p, n.ri), n.rj.copy(C), 
            n.ri.vadd(s, n.ri), n.ri.vsub(a.position, n.ri), n.rj.vadd(i, n.rj), n.rj.vsub(r.position, n.rj), 
            this.result.push(n), this.createFrictionEquationsFromContact(n, this.frictionResult);
        }
        d.release(C), C = null;
        const P = d.get(), A = d.get(), E = d.get(), L = d.get(), k = d.get(), T = u.length;
        for (let n = 0; n !== T && !g; n++) for (let o = 0; o !== T && !g; o++) if (n % 3 != o % 3) {
            u[o].cross(u[n], P), P.normalize(), u[n].vadd(u[o], A), E.copy(s), E.vsub(A, E), 
            E.vsub(i, E);
            const d = E.dot(P);
            P.scale(d, L);
            let m = 0;
            for (;m === n % 3 || m === o % 3; ) m++;
            k.copy(s), k.vsub(L, k), k.vsub(A, k), k.vsub(i, k);
            const f = Math.abs(d), y = k.length();
            if (f < u[m].length() && y < p) {
                if (c) return !0;
                g = !0;
                const n = this.createContactEquation(a, r, t, e, l, h);
                A.vadd(L, n.rj), n.rj.copy(n.rj), k.negate(n.ni), n.ni.normalize(), n.ri.copy(n.rj), 
                n.ri.vadd(i, n.ri), n.ri.vsub(s, n.ri), n.ri.normalize(), n.ri.scale(p, n.ri), n.ri.vadd(s, n.ri), 
                n.ri.vsub(a.position, n.ri), n.rj.vadd(i, n.rj), n.rj.vsub(r.position, n.rj), this.result.push(n), 
                this.createFrictionEquationsFromContact(n, this.frictionResult);
            }
        }
        d.release(P, A, E, L, k);
    }
    planeBox(t, e, s, i, n, o, a, r, l, h, c) {
        return e.convexPolyhedronRepresentation.material = e.material, e.convexPolyhedronRepresentation.collisionResponse = e.collisionResponse, 
        e.convexPolyhedronRepresentation.id = e.id, this.planeConvex(t, e.convexPolyhedronRepresentation, s, i, n, o, a, r, t, e, c);
    }
    convexConvex(t, e, s, i, n, o, a, r, l, h, c, d, u) {
        const p = tn;
        if (!(s.distanceTo(i) > t.boundingSphereRadius + e.boundingSphereRadius) && t.findSeparatingAxis(e, s, n, i, o, p, d, u)) {
            const d = [], u = en;
            t.clipAgainstHull(s, n, e, i, o, p, -100, 100, d);
            let g = 0;
            for (let n = 0; n !== d.length; n++) {
                if (c) return !0;
                const o = this.createContactEquation(a, r, t, e, l, h), m = o.ri, f = o.rj;
                p.negate(o.ni), d[n].normal.negate(u), u.scale(d[n].depth, u), d[n].point.vadd(u, m), 
                f.copy(d[n].point), m.vsub(s, m), f.vsub(i, f), m.vadd(s, m), m.vsub(a.position, m), 
                f.vadd(i, f), f.vsub(r.position, f), this.result.push(o), g++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(o, this.frictionResult);
            }
            this.enableFrictionReduction && g && this.createFrictionFromAverage(g);
        }
    }
    sphereConvex(t, e, s, i, n, o, a, r, l, h, c) {
        const d = this.v3pool;
        s.vsub(i, Oi);
        const u = e.faceNormals, p = e.faces, g = e.vertices, m = t.radius;
        let f = !1;
        for (let n = 0; n !== g.length; n++) {
            const d = g[n], u = Wi;
            o.vmult(d, u), i.vadd(u, u);
            const p = qi;
            if (u.vsub(s, p), p.lengthSquared() < m * m) {
                if (c) return !0;
                f = !0;
                const n = this.createContactEquation(a, r, t, e, l, h);
                return n.ri.copy(p), n.ri.normalize(), n.ni.copy(n.ri), n.ri.scale(m, n.ri), u.vsub(i, n.rj), 
                n.ri.vadd(s, n.ri), n.ri.vsub(a.position, n.ri), n.rj.vadd(i, n.rj), n.rj.vsub(r.position, n.rj), 
                this.result.push(n), void this.createFrictionEquationsFromContact(n, this.frictionResult);
            }
        }
        for (let n = 0, y = p.length; n !== y && !1 === f; n++) {
            const y = u[n], w = p[n], v = Gi;
            o.vmult(y, v);
            const S = Hi;
            o.vmult(g[w[0]], S), S.vadd(i, S);
            const b = Ki;
            v.scale(-m, b), s.vadd(b, b);
            const x = Yi;
            b.vsub(S, x);
            const C = x.dot(v), M = Xi;
            if (s.vsub(S, M), C < 0 && M.dot(v) > 0) {
                const n = [];
                for (let t = 0, e = w.length; t !== e; t++) {
                    const e = d.get();
                    o.vmult(g[w[t]], e), i.vadd(e, e), n.push(e);
                }
                if (Ti(n, v, s)) {
                    if (c) return !0;
                    f = !0;
                    const o = this.createContactEquation(a, r, t, e, l, h);
                    v.scale(-m, o.ri), v.negate(o.ni);
                    const u = d.get();
                    v.scale(-C, u);
                    const p = d.get();
                    v.scale(-m, p), s.vsub(i, o.rj), o.rj.vadd(p, o.rj), o.rj.vadd(u, o.rj), o.rj.vadd(i, o.rj), 
                    o.rj.vsub(r.position, o.rj), o.ri.vadd(s, o.ri), o.ri.vsub(a.position, o.ri), d.release(u), 
                    d.release(p), this.result.push(o), this.createFrictionEquationsFromContact(o, this.frictionResult);
                    for (let t = 0, e = n.length; t !== e; t++) d.release(n[t]);
                    return;
                }
                for (let u = 0; u !== w.length; u++) {
                    const p = d.get(), f = d.get();
                    o.vmult(g[w[(u + 1) % w.length]], p), o.vmult(g[w[(u + 2) % w.length]], f), i.vadd(p, p), 
                    i.vadd(f, f);
                    const y = Ui;
                    f.vsub(p, y);
                    const v = Vi;
                    y.unit(v);
                    const S = d.get(), b = d.get();
                    s.vsub(p, b);
                    const x = b.dot(v);
                    v.scale(x, S), S.vadd(p, S);
                    const C = d.get();
                    if (S.vsub(s, C), x > 0 && x * x < y.lengthSquared() && C.lengthSquared() < m * m) {
                        if (c) return !0;
                        const o = this.createContactEquation(a, r, t, e, l, h);
                        S.vsub(i, o.rj), S.vsub(s, o.ni), o.ni.normalize(), o.ni.scale(m, o.ri), o.rj.vadd(i, o.rj), 
                        o.rj.vsub(r.position, o.rj), o.ri.vadd(s, o.ri), o.ri.vsub(a.position, o.ri), this.result.push(o), 
                        this.createFrictionEquationsFromContact(o, this.frictionResult);
                        for (let t = 0, e = n.length; t !== e; t++) d.release(n[t]);
                        return d.release(p), d.release(f), d.release(S), d.release(C), void d.release(b);
                    }
                    d.release(p), d.release(f), d.release(S), d.release(C), d.release(b);
                }
                for (let t = 0, e = n.length; t !== e; t++) d.release(n[t]);
            }
        }
    }
    planeConvex(t, e, s, i, n, o, a, r, l, h, c) {
        const d = Qi, u = $i;
        u.set(0, 0, 1), n.vmult(u, u);
        let p = 0;
        const g = Zi;
        for (let n = 0; n !== e.vertices.length; n++) {
            d.copy(e.vertices[n]), o.vmult(d, d), i.vadd(d, d), d.vsub(s, g);
            if (u.dot(g) <= 0) {
                if (c) return !0;
                const n = this.createContactEquation(a, r, t, e, l, h), o = Ji;
                u.scale(u.dot(g), o), d.vsub(o, o), o.vsub(s, n.ri), n.ni.copy(u), d.vsub(i, n.rj), 
                n.ri.vadd(s, n.ri), n.ri.vsub(a.position, n.ri), n.rj.vadd(i, n.rj), n.rj.vsub(r.position, n.rj), 
                this.result.push(n), p++, this.enableFrictionReduction || this.createFrictionEquationsFromContact(n, this.frictionResult);
            }
        }
        this.enableFrictionReduction && p && this.createFrictionFromAverage(p);
    }
    boxConvex(t, e, s, i, n, o, a, r, l, h, c) {
        return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
        this.convexConvex(t.convexPolyhedronRepresentation, e, s, i, n, o, a, r, t, e, c);
    }
    sphereHeightfield(t, e, s, i, n, o, a, r, l, h, c) {
        const d = e.data, u = t.radius, p = e.elementSize, g = fn, m = mn;
        vt.pointToLocalFrame(i, o, s, m);
        let f = Math.floor((m.x - u) / p) - 1, y = Math.ceil((m.x + u) / p) + 1, w = Math.floor((m.y - u) / p) - 1, v = Math.ceil((m.y + u) / p) + 1;
        if (y < 0 || v < 0 || f > d.length || w > d[0].length) return;
        f < 0 && (f = 0), y < 0 && (y = 0), w < 0 && (w = 0), v < 0 && (v = 0), f >= d.length && (f = d.length - 1), 
        y >= d.length && (y = d.length - 1), v >= d[0].length && (v = d[0].length - 1), 
        w >= d[0].length && (w = d[0].length - 1);
        const S = [];
        e.getRectMinMax(f, w, y, v, S);
        const b = S[0], x = S[1];
        if (m.z - u > x || m.z + u < b) return;
        const C = this.result;
        for (let l = f; l < y; l++) for (let h = w; h < v; h++) {
            const d = C.length;
            let u = !1;
            if (e.getConvexTrianglePillar(l, h, !1), vt.pointToWorldFrame(i, o, e.pillarOffset, g), 
            s.distanceTo(g) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (u = this.sphereConvex(t, e.pillarConvex, s, g, n, o, a, r, t, e, c)), 
            c && u) return !0;
            if (e.getConvexTrianglePillar(l, h, !0), vt.pointToWorldFrame(i, o, e.pillarOffset, g), 
            s.distanceTo(g) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (u = this.sphereConvex(t, e.pillarConvex, s, g, n, o, a, r, t, e, c)), 
            c && u) return !0;
            if (C.length - d > 2) return;
        }
    }
    boxHeightfield(t, e, s, i, n, o, a, r, l, h, c) {
        return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
        this.convexHeightfield(t.convexPolyhedronRepresentation, e, s, i, n, o, a, r, t, e, c);
    }
    convexHeightfield(t, e, s, i, n, o, a, r, l, h, c) {
        const d = e.data, u = e.elementSize, p = t.boundingSphereRadius, g = pn, m = gn, f = un;
        vt.pointToLocalFrame(i, o, s, f);
        let y = Math.floor((f.x - p) / u) - 1, w = Math.ceil((f.x + p) / u) + 1, v = Math.floor((f.y - p) / u) - 1, S = Math.ceil((f.y + p) / u) + 1;
        if (w < 0 || S < 0 || y > d.length || v > d[0].length) return;
        y < 0 && (y = 0), w < 0 && (w = 0), v < 0 && (v = 0), S < 0 && (S = 0), y >= d.length && (y = d.length - 1), 
        w >= d.length && (w = d.length - 1), S >= d[0].length && (S = d[0].length - 1), 
        v >= d[0].length && (v = d[0].length - 1);
        const b = [];
        e.getRectMinMax(y, v, w, S, b);
        const x = b[0], C = b[1];
        if (!(f.z - p > C || f.z + p < x)) for (let l = y; l < w; l++) for (let h = v; h < S; h++) {
            let d = !1;
            if (e.getConvexTrianglePillar(l, h, !1), vt.pointToWorldFrame(i, o, e.pillarOffset, g), 
            s.distanceTo(g) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (d = this.convexConvex(t, e.pillarConvex, s, g, n, o, a, r, null, null, c, m, null)), 
            c && d) return !0;
            if (e.getConvexTrianglePillar(l, h, !0), vt.pointToWorldFrame(i, o, e.pillarOffset, g), 
            s.distanceTo(g) < e.pillarConvex.boundingSphereRadius + t.boundingSphereRadius && (d = this.convexConvex(t, e.pillarConvex, s, g, n, o, a, r, null, null, c, m, null)), 
            c && d) return !0;
        }
    }
    sphereParticle(t, e, s, i, n, o, a, r, l, h, c) {
        const d = an;
        d.set(0, 0, 1), i.vsub(s, d);
        if (d.lengthSquared() <= t.radius * t.radius) {
            if (c) return !0;
            const s = this.createContactEquation(r, a, e, t, l, h);
            d.normalize(), s.rj.copy(d), s.rj.scale(t.radius, s.rj), s.ni.copy(d), s.ni.negate(s.ni), 
            s.ri.set(0, 0, 0), this.result.push(s), this.createFrictionEquationsFromContact(s, this.frictionResult);
        }
    }
    planeParticle(t, e, s, i, n, o, a, r, l, h, c) {
        const d = sn;
        d.set(0, 0, 1), a.quaternion.vmult(d, d);
        const u = nn;
        i.vsub(a.position, u);
        if (d.dot(u) <= 0) {
            if (c) return !0;
            const s = this.createContactEquation(r, a, e, t, l, h);
            s.ni.copy(d), s.ni.negate(s.ni), s.ri.set(0, 0, 0);
            const n = on;
            d.scale(d.dot(i), n), i.vsub(n, n), s.rj.copy(n), this.result.push(s), this.createFrictionEquationsFromContact(s, this.frictionResult);
        }
    }
    boxParticle(t, e, s, i, n, o, a, r, l, h, c) {
        return t.convexPolyhedronRepresentation.material = t.material, t.convexPolyhedronRepresentation.collisionResponse = t.collisionResponse, 
        this.convexParticle(t.convexPolyhedronRepresentation, e, s, i, n, o, a, r, t, e, c);
    }
    convexParticle(t, e, s, i, n, o, a, r, l, h, c) {
        let d = -1;
        const u = hn, p = dn;
        let g = null;
        const m = ln;
        if (m.copy(i), m.vsub(s, m), n.conjugate(rn), rn.vmult(m, m), t.pointIsInside(m)) {
            t.worldVerticesNeedsUpdate && t.computeWorldVertices(s, n), t.worldFaceNormalsNeedsUpdate && t.computeWorldFaceNormals(n);
            for (let e = 0, s = t.faces.length; e !== s; e++) {
                const s = [ t.worldVertices[t.faces[e][0]] ], n = t.worldFaceNormals[e];
                i.vsub(s[0], cn);
                const o = -n.dot(cn);
                if (null === g || Math.abs(o) < Math.abs(g)) {
                    if (c) return !0;
                    g = o, d = e, u.copy(n);
                }
            }
            if (-1 !== d) {
                const n = this.createContactEquation(r, a, e, t, l, h);
                u.scale(g, p), p.vadd(i, p), p.vsub(s, p), n.rj.copy(p), u.negate(n.ni), n.ri.set(0, 0, 0);
                const o = n.ri, c = n.rj;
                o.vadd(i, o), o.vsub(r.position, o), c.vadd(s, c), c.vsub(a.position, c), this.result.push(n), 
                this.createFrictionEquationsFromContact(n, this.frictionResult);
            } else console.warn("Point found inside convex, but did not find penetrating face!");
        }
    }
    heightfieldCylinder(t, e, s, i, n, o, a, r, l, h, c) {
        return this.convexHeightfield(e, t, i, s, o, n, r, a, l, h, c);
    }
    particleCylinder(t, e, s, i, n, o, a, r, l, h, c) {
        return this.convexParticle(e, t, i, s, o, n, r, a, l, h, c);
    }
    sphereTrimesh(t, e, s, i, n, o, a, r, l, h, c) {
        const d = gi, u = mi, p = fi, g = yi, m = wi, f = vi, y = Ci, w = pi, v = di, S = Mi;
        vt.pointToLocalFrame(i, o, s, m);
        const b = t.radius;
        y.lowerBound.set(m.x - b, m.y - b, m.z - b), y.upperBound.set(m.x + b, m.y + b, m.z + b), 
        e.getTrianglesInAABB(y, S);
        const x = ui, C = t.radius * t.radius;
        for (let n = 0; n < S.length; n++) for (let d = 0; d < 3; d++) if (e.getVertex(e.indices[3 * S[n] + d], x), 
        x.vsub(m, v), v.lengthSquared() <= C) {
            if (w.copy(x), vt.pointToWorldFrame(i, o, w, x), x.vsub(s, v), c) return !0;
            let n = this.createContactEquation(a, r, t, e, l, h);
            n.ni.copy(v), n.ni.normalize(), n.ri.copy(n.ni), n.ri.scale(t.radius, n.ri), n.ri.vadd(s, n.ri), 
            n.ri.vsub(a.position, n.ri), n.rj.copy(x), n.rj.vsub(r.position, n.rj), this.result.push(n), 
            this.createFrictionEquationsFromContact(n, this.frictionResult);
        }
        for (let n = 0; n < S.length; n++) for (let y = 0; y < 3; y++) {
            e.getVertex(e.indices[3 * S[n] + y], d), e.getVertex(e.indices[3 * S[n] + (y + 1) % 3], u), 
            u.vsub(d, p), m.vsub(u, f);
            const w = f.dot(p);
            m.vsub(d, f);
            let v = f.dot(p);
            if (v > 0 && w < 0) {
                m.vsub(d, f), g.copy(p), g.normalize(), v = f.dot(g), g.scale(v, f), f.vadd(d, f);
                if (f.distanceTo(m) < t.radius) {
                    if (c) return !0;
                    const n = this.createContactEquation(a, r, t, e, l, h);
                    f.vsub(m, n.ni), n.ni.normalize(), n.ni.scale(t.radius, n.ri), n.ri.vadd(s, n.ri), 
                    n.ri.vsub(a.position, n.ri), vt.pointToWorldFrame(i, o, f, f), f.vsub(r.position, n.rj), 
                    vt.vectorToWorldFrame(o, n.ni, n.ni), vt.vectorToWorldFrame(o, n.ri, n.ri), this.result.push(n), 
                    this.createFrictionEquationsFromContact(n, this.frictionResult);
                }
            }
        }
        const M = Si, P = bi, A = xi, E = ci;
        for (let n = 0, d = S.length; n !== d; n++) {
            e.getTriangleVertices(S[n], M, P, A), e.getNormal(S[n], E), m.vsub(M, f);
            let d = f.dot(E);
            if (E.scale(d, f), m.vsub(f, f), d = f.distanceTo(m), de.pointInTriangle(f, M, P, A) && d < t.radius) {
                if (c) return !0;
                let n = this.createContactEquation(a, r, t, e, l, h);
                f.vsub(m, n.ni), n.ni.normalize(), n.ni.scale(t.radius, n.ri), n.ri.vadd(s, n.ri), 
                n.ri.vsub(a.position, n.ri), vt.pointToWorldFrame(i, o, f, f), f.vsub(r.position, n.rj), 
                vt.vectorToWorldFrame(o, n.ni, n.ni), vt.vectorToWorldFrame(o, n.ri, n.ri), this.result.push(n), 
                this.createFrictionEquationsFromContact(n, this.frictionResult);
            }
        }
        S.length = 0;
    }
    planeTrimesh(t, e, s, i, n, o, a, r, l, h, c) {
        const d = new at, u = ri;
        u.set(0, 0, 1), n.vmult(u, u);
        for (let n = 0; n < e.vertices.length / 3; n++) {
            e.getVertex(n, d);
            const p = new at;
            p.copy(d), vt.pointToWorldFrame(i, o, p, d);
            const g = li;
            d.vsub(s, g);
            if (u.dot(g) <= 0) {
                if (c) return !0;
                const s = this.createContactEquation(a, r, t, e, l, h);
                s.ni.copy(u);
                const i = hi;
                u.scale(g.dot(u), i), d.vsub(i, i), s.ri.copy(i), s.ri.vsub(a.position, s.ri), s.rj.copy(d), 
                s.rj.vsub(r.position, s.rj), this.result.push(s), this.createFrictionEquationsFromContact(s, this.frictionResult);
            }
        }
    }
}

const ti = new at, ei = new at, si = new at, ii = new at, ni = new at, oi = new mt, ai = new mt, ri = new at, li = new at, hi = new at, ci = new at, di = new at;

new at;

const ui = new at, pi = new at, gi = new at, mi = new at, fi = new at, yi = new at, wi = new at, vi = new at, Si = new at, bi = new at, xi = new at, Ci = new ct, Mi = [], Pi = new at, Ai = new at, Ei = new at, Li = new at, ki = new at;

function Ti(t, e, s) {
    let i = null;
    const n = t.length;
    for (let o = 0; o !== n; o++) {
        const a = t[o], r = Ei;
        t[(o + 1) % n].vsub(a, r);
        const l = Li;
        r.cross(e, l);
        const h = ki;
        s.vsub(a, h);
        const c = l.dot(h);
        if (!(null === i || c > 0 && !0 === i || c <= 0 && !1 === i)) return !1;
        null === i && (i = c > 0);
    }
    return !0;
}

const Bi = new at, zi = new at, Ni = new at, Fi = new at, Ii = [ new at, new at, new at, new at, new at, new at ], _i = new at, Ri = new at, Di = new at, ji = new at, Oi = new at, Ui = new at, Vi = new at, qi = new at, Wi = new at, Gi = new at, Hi = new at, Ki = new at, Yi = new at, Xi = new at;

new at, new at;

const Qi = new at, $i = new at, Zi = new at, Ji = new at, tn = new at, en = new at, sn = new at, nn = new at, on = new at, an = new at, rn = new mt, ln = new at;

new at;

const hn = new at, cn = new at, dn = new at, un = new at, pn = new at, gn = [ 0 ], mn = new at, fn = new at;

class yn {
    constructor() {
        this.current = [], this.previous = [];
    }
    getKey(t, e) {
        if (e < t) {
            const s = e;
            e = t, t = s;
        }
        return t << 16 | e;
    }
    set(t, e) {
        const s = this.getKey(t, e), i = this.current;
        let n = 0;
        for (;s > i[n]; ) n++;
        if (s !== i[n]) {
            for (let t = i.length - 1; t >= n; t--) i[t + 1] = i[t];
            i[n] = s;
        }
    }
    tick() {
        const t = this.current;
        this.current = this.previous, this.previous = t, this.current.length = 0;
    }
    getDiff(t, e) {
        const s = this.current, i = this.previous, n = s.length, o = i.length;
        let a = 0;
        for (let e = 0; e < n; e++) {
            let n = !1;
            const o = s[e];
            for (;o > i[a]; ) a++;
            n = o === i[a], n || wn(t, o);
        }
        a = 0;
        for (let t = 0; t < o; t++) {
            let n = !1;
            const o = i[t];
            for (;o > s[a]; ) a++;
            n = s[a] === o, n || wn(e, o);
        }
    }
}

function wn(t, e) {
    t.push((4294901760 & e) >> 16, 65535 & e);
}

const vn = (t, e) => t < e ? `${t}-${e}` : `${e}-${t}`;

class Sn {
    constructor() {
        this.data = {
            keys: []
        };
    }
    get(t, e) {
        const s = vn(t, e);
        return this.data[s];
    }
    set(t, e, s) {
        const i = vn(t, e);
        this.get(t, e) || this.data.keys.push(i), this.data[i] = s;
    }
    delete(t, e) {
        const s = vn(t, e), i = this.data.keys.indexOf(s);
        -1 !== i && this.data.keys.splice(i, 1), delete this.data[s];
    }
    reset() {
        const t = this.data, e = t.keys;
        for (;e.length > 0; ) {
            delete t[e.pop()];
        }
    }
}

class bn extends gt {
    constructor(t) {
        void 0 === t && (t = {}), super(), this.dt = -1, this.allowSleep = !!t.allowSleep, 
        this.contacts = [], this.frictionEquations = [], this.quatNormalizeSkip = void 0 !== t.quatNormalizeSkip ? t.quatNormalizeSkip : 0, 
        this.quatNormalizeFast = void 0 !== t.quatNormalizeFast && t.quatNormalizeFast, 
        this.time = 0, this.stepnumber = 0, this.default_dt = 1 / 60, this.nextId = 0, this.gravity = new at, 
        t.gravity && this.gravity.copy(t.gravity), t.frictionGravity && (this.frictionGravity = new at, 
        this.frictionGravity.copy(t.frictionGravity)), this.broadphase = void 0 !== t.broadphase ? t.broadphase : new Jt, 
        this.bodies = [], this.hasActiveBodies = !1, this.solver = void 0 !== t.solver ? t.solver : new ps, 
        this.constraints = [], this.narrowphase = new Js(this), this.collisionMatrix = new pt, 
        this.collisionMatrixPrevious = new pt, this.bodyOverlapKeeper = new yn, this.shapeOverlapKeeper = new yn, 
        this.contactmaterials = [], this.contactMaterialTable = new Sn, this.defaultMaterial = new rs("default"), 
        this.defaultContactMaterial = new as(this.defaultMaterial, this.defaultMaterial, {
            friction: .3,
            restitution: 0
        }), this.doProfiling = !1, this.profile = {
            solve: 0,
            makeContactConstraints: 0,
            broadphase: 0,
            integrate: 0,
            narrowphase: 0
        }, this.accumulator = 0, this.subsystems = [], this.addBodyEvent = {
            type: "addBody",
            body: null
        }, this.removeBodyEvent = {
            type: "removeBody",
            body: null
        }, this.idToBodyMap = {}, this.broadphase.setWorld(this);
    }
    getContactMaterial(t, e) {
        return this.contactMaterialTable.get(t.id, e.id);
    }
    collisionMatrixTick() {
        const t = this.collisionMatrixPrevious;
        this.collisionMatrixPrevious = this.collisionMatrix, this.collisionMatrix = t, this.collisionMatrix.reset(), 
        this.bodyOverlapKeeper.tick(), this.shapeOverlapKeeper.tick();
    }
    addConstraint(t) {
        this.constraints.push(t);
    }
    removeConstraint(t) {
        const e = this.constraints.indexOf(t);
        -1 !== e && this.constraints.splice(e, 1);
    }
    rayTest(t, e, s) {
        s instanceof te ? this.raycastClosest(t, e, {
            skipBackfaces: !0
        }, s) : this.raycastAll(t, e, {
            skipBackfaces: !0
        }, s);
    }
    raycastAll(t, e, s, i) {
        return void 0 === s && (s = {}), s.mode = de.ALL, s.from = t, s.to = e, s.callback = i, 
        xn.intersectWorld(this, s);
    }
    raycastAny(t, e, s, i) {
        return void 0 === s && (s = {}), s.mode = de.ANY, s.from = t, s.to = e, s.result = i, 
        xn.intersectWorld(this, s);
    }
    raycastClosest(t, e, s, i) {
        return void 0 === s && (s = {}), s.mode = de.CLOSEST, s.from = t, s.to = e, s.result = i, 
        xn.intersectWorld(this, s);
    }
    addBody(t) {
        this.bodies.includes(t) || (t.index = this.bodies.length, this.bodies.push(t), t.world = this, 
        t.initPosition.copy(t.position), t.initVelocity.copy(t.velocity), t.timeLastSleepy = this.time, 
        t instanceof It && (t.initAngularVelocity.copy(t.angularVelocity), t.initQuaternion.copy(t.quaternion)), 
        this.collisionMatrix.setNumObjects(this.bodies.length), this.addBodyEvent.body = t, 
        this.idToBodyMap[t.id] = t, this.dispatchEvent(this.addBodyEvent));
    }
    removeBody(t) {
        t.world = null;
        const e = this.bodies.length - 1, s = this.bodies, i = s.indexOf(t);
        if (-1 !== i) {
            s.splice(i, 1);
            for (let t = 0; t !== s.length; t++) s[t].index = t;
            this.collisionMatrix.setNumObjects(e), this.removeBodyEvent.body = t, delete this.idToBodyMap[t.id], 
            this.dispatchEvent(this.removeBodyEvent);
        }
    }
    getBodyById(t) {
        return this.idToBodyMap[t];
    }
    getShapeById(t) {
        const e = this.bodies;
        for (let s = 0; s < e.length; s++) {
            const i = e[s].shapes;
            for (let e = 0; e < i.length; e++) {
                const s = i[e];
                if (s.id === t) return s;
            }
        }
        return null;
    }
    addContactMaterial(t) {
        this.contactmaterials.push(t), this.contactMaterialTable.set(t.materials[0].id, t.materials[1].id, t);
    }
    removeContactMaterial(t) {
        const e = this.contactmaterials.indexOf(t);
        -1 !== e && (this.contactmaterials.splice(e, 1), this.contactMaterialTable.delete(t.materials[0].id, t.materials[1].id));
    }
    fixedStep(t, e) {
        void 0 === t && (t = 1 / 60), void 0 === e && (e = 10);
        const s = Cn.now() / 1e3;
        if (this.lastCallTime) {
            const i = s - this.lastCallTime;
            this.step(t, i, e);
        } else this.step(t, void 0, e);
        this.lastCallTime = s;
    }
    step(t, e, s) {
        if (void 0 === s && (s = 10), void 0 === e) this.internalStep(t), this.time += t; else {
            this.accumulator += e;
            const i = Cn.now();
            let n = 0;
            for (;this.accumulator >= t && n < s && (this.internalStep(t), this.accumulator -= t, 
            n++, !(Cn.now() - i > 1e3 * t)); ) ;
            this.accumulator = this.accumulator % t;
            const o = this.accumulator / t;
            for (let t = 0; t !== this.bodies.length; t++) {
                const e = this.bodies[t];
                e.previousPosition.lerp(e.position, o, e.interpolatedPosition), e.previousQuaternion.slerp(e.quaternion, o, e.interpolatedQuaternion), 
                e.previousQuaternion.normalize();
            }
            this.time += e;
        }
    }
    internalStep(t) {
        this.dt = t;
        const e = this.contacts, s = kn, i = Tn, n = this.bodies.length, o = this.bodies, a = this.solver, r = this.gravity, l = this.doProfiling, h = this.profile, c = It.DYNAMIC;
        let d = -1 / 0;
        const u = this.constraints, p = Ln;
        r.length();
        const g = r.x, m = r.y, f = r.z;
        let y = 0;
        for (l && (d = Cn.now()), y = 0; y !== n; y++) {
            const t = o[y];
            if (t.type === c) {
                const e = t.force, s = t.mass;
                e.x += s * g, e.y += s * m, e.z += s * f;
            }
        }
        for (let t = 0, e = this.subsystems.length; t !== e; t++) this.subsystems[t].update();
        l && (d = Cn.now()), s.length = 0, i.length = 0, this.broadphase.collisionPairs(this, s, i), 
        l && (h.broadphase = Cn.now() - d);
        let w = u.length;
        for (y = 0; y !== w; y++) {
            const t = u[y];
            if (!t.collideConnected) for (let e = s.length - 1; e >= 0; e -= 1) (t.bodyA === s[e] && t.bodyB === i[e] || t.bodyB === s[e] && t.bodyA === i[e]) && (s.splice(e, 1), 
            i.splice(e, 1));
        }
        this.collisionMatrixTick(), l && (d = Cn.now());
        const v = En, S = e.length;
        for (y = 0; y !== S; y++) v.push(e[y]);
        e.length = 0;
        const b = this.frictionEquations.length;
        for (y = 0; y !== b; y++) p.push(this.frictionEquations[y]);
        for (this.frictionEquations.length = 0, this.narrowphase.getContacts(s, i, this, e, v, this.frictionEquations, p), 
        l && (h.narrowphase = Cn.now() - d), l && (d = Cn.now()), y = 0; y < this.frictionEquations.length; y++) a.addEquation(this.frictionEquations[y]);
        const x = e.length;
        for (let t = 0; t !== x; t++) {
            const s = e[t], i = s.bi, n = s.bj, o = s.si, r = s.sj;
            let l;
            if (l = i.material && n.material && this.getContactMaterial(i.material, n.material) || this.defaultContactMaterial, 
            l.friction, i.material && n.material && (i.material.friction >= 0 && n.material.friction >= 0 && (i.material.friction, 
            n.material.friction), i.material.restitution >= 0 && n.material.restitution >= 0 && (s.restitution = i.material.restitution * n.material.restitution)), 
            a.addEquation(s), i.allowSleep && i.type === It.DYNAMIC && i.sleepState === It.SLEEPING && n.sleepState === It.AWAKE && n.type !== It.STATIC) {
                n.velocity.lengthSquared() + n.angularVelocity.lengthSquared() >= 2 * n.sleepSpeedLimit ** 2 && (i.wakeUpAfterNarrowphase = !0);
            }
            if (n.allowSleep && n.type === It.DYNAMIC && n.sleepState === It.SLEEPING && i.sleepState === It.AWAKE && i.type !== It.STATIC) {
                i.velocity.lengthSquared() + i.angularVelocity.lengthSquared() >= 2 * i.sleepSpeedLimit ** 2 && (n.wakeUpAfterNarrowphase = !0);
            }
            this.collisionMatrix.set(i, n, !0), this.collisionMatrixPrevious.get(i, n) || (An.body = n, 
            An.contact = s, i.dispatchEvent(An), An.body = i, n.dispatchEvent(An)), this.bodyOverlapKeeper.set(i.id, n.id), 
            this.shapeOverlapKeeper.set(o.id, r.id);
        }
        for (this.emitContactEvents(), l && (h.makeContactConstraints = Cn.now() - d, d = Cn.now()), 
        y = 0; y !== n; y++) {
            const t = o[y];
            t.wakeUpAfterNarrowphase && (t.wakeUp(), t.wakeUpAfterNarrowphase = !1);
        }
        for (w = u.length, y = 0; y !== w; y++) {
            const t = u[y];
            t.update();
            for (let e = 0, s = t.equations.length; e !== s; e++) {
                const s = t.equations[e];
                a.addEquation(s);
            }
        }
        a.solve(t, this), l && (h.solve = Cn.now() - d), a.removeAllEquations();
        const C = Math.pow;
        for (y = 0; y !== n; y++) {
            const e = o[y];
            if (e.type & c) {
                const s = C(1 - e.linearDamping, t), i = e.velocity;
                i.scale(s, i);
                const n = e.angularVelocity;
                if (n) {
                    const s = C(1 - e.angularDamping, t);
                    n.scale(s, n);
                }
            }
        }
        this.dispatchEvent(Pn), l && (d = Cn.now());
        const M = this.stepnumber % (this.quatNormalizeSkip + 1) == 0, P = this.quatNormalizeFast;
        for (y = 0; y !== n; y++) o[y].integrate(t, M, P);
        this.clearForces(), this.broadphase.dirty = !0, l && (h.integrate = Cn.now() - d), 
        this.stepnumber += 1, this.dispatchEvent(Mn);
        let A = !0;
        if (this.allowSleep) for (A = !1, y = 0; y !== n; y++) {
            const t = o[y];
            t.sleepTick(this.time), t.sleepState !== It.SLEEPING && (A = !0);
        }
        this.hasActiveBodies = A;
    }
    emitContactEvents() {
        const t = this.hasAnyEventListener("beginContact"), e = this.hasAnyEventListener("endContact");
        if ((t || e) && this.bodyOverlapKeeper.getDiff(Bn, zn), t) {
            for (let t = 0, e = Bn.length; t < e; t += 2) Nn.bodyA = this.getBodyById(Bn[t]), 
            Nn.bodyB = this.getBodyById(Bn[t + 1]), this.dispatchEvent(Nn);
            Nn.bodyA = Nn.bodyB = null;
        }
        if (e) {
            for (let t = 0, e = zn.length; t < e; t += 2) Fn.bodyA = this.getBodyById(zn[t]), 
            Fn.bodyB = this.getBodyById(zn[t + 1]), this.dispatchEvent(Fn);
            Fn.bodyA = Fn.bodyB = null;
        }
        Bn.length = zn.length = 0;
        const s = this.hasAnyEventListener("beginShapeContact"), i = this.hasAnyEventListener("endShapeContact");
        if ((s || i) && this.shapeOverlapKeeper.getDiff(Bn, zn), s) {
            for (let t = 0, e = Bn.length; t < e; t += 2) {
                const e = this.getShapeById(Bn[t]), s = this.getShapeById(Bn[t + 1]);
                In.shapeA = e, In.shapeB = s, e && (In.bodyA = e.body), s && (In.bodyB = s.body), 
                this.dispatchEvent(In);
            }
            In.bodyA = In.bodyB = In.shapeA = In.shapeB = null;
        }
        if (i) {
            for (let t = 0, e = zn.length; t < e; t += 2) {
                const e = this.getShapeById(zn[t]), s = this.getShapeById(zn[t + 1]);
                _n.shapeA = e, _n.shapeB = s, e && (_n.bodyA = e.body), s && (_n.bodyB = s.body), 
                this.dispatchEvent(_n);
            }
            _n.bodyA = _n.bodyB = _n.shapeA = _n.shapeB = null;
        }
    }
    clearForces() {
        const t = this.bodies, e = t.length;
        for (let s = 0; s !== e; s++) {
            const e = t[s];
            e.force, e.torque, e.force.set(0, 0, 0), e.torque.set(0, 0, 0);
        }
    }
}

new ct;

const xn = new de, Cn = globalThis.performance || {};

if (!Cn.now) {
    let t = Date.now();
    Cn.timing && Cn.timing.navigationStart && (t = Cn.timing.navigationStart), Cn.now = () => Date.now() - t;
}

new at;

const Mn = {
    type: "postStep"
}, Pn = {
    type: "preStep"
}, An = {
    type: It.COLLIDE_EVENT_NAME,
    body: null,
    contact: null
}, En = [], Ln = [], kn = [], Tn = [], Bn = [], zn = [], Nn = {
    type: "beginContact",
    bodyA: null,
    bodyB: null
}, Fn = {
    type: "endContact",
    bodyA: null,
    bodyB: null
}, In = {
    type: "beginShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null
}, _n = {
    type: "endShapeContact",
    bodyA: null,
    bodyB: null,
    shapeA: null,
    shapeB: null
};

function Rn(t) {
    let e;
    if (t instanceof s) e = at; else {
        if (!(t instanceof at)) throw new Error("Unexpected type passed");
        e = s;
    }
    return new e(t.x, t.y, t.z);
}

function Dn(t) {
    let e;
    if (t instanceof i) e = mt; else {
        if (!(t instanceof mt)) throw new Error("Unexpected type passed");
        e = i;
    }
    return new e(t.x, t.y, t.z, t.w);
}

class jn {
    constructor() {
        this.cam = new n(70, 1, .08, 900), this.cam.name = "cam", this.cam.fov = 70, this.smoothCamRotFlat = new i, 
        this.smoothCamOffset = new s, this.smoothCamDownAngle = -.7, this.initialCameraStopTime = 0, 
        this.parsedPhysicsSteps = 0, this.prevPhysicsValue = this.cam.position.clone(), 
        this.velocityPhysicsValue1 = new Z({
            springMultiplier: .04,
            dampening: .3
        }), this.velocityPhysicsValue2 = new Z({
            springMultiplier: .3,
            dampening: .005
        }), this.useFollowingCamera = !0, this.currentDolly = null, this.currentDollyT = 0, 
        this.currentDollyDidShowParticles = !1, this.onIsShowingDollyChangeCbs = new Set, 
        this.onUpgradeDollyParticlesSpawnedCbs = new Set, this.flatCamRot = new i, it((() => {
            this.onResize();
        })), this.onResize();
    }
    onResize() {
        this.cam.aspect = window.innerWidth / window.innerHeight, this.cam.updateProjectionMatrix();
    }
    loop(t, e) {
        const n = fa().game;
        let r = !1;
        if (this.currentDolly) if (this.currentDollyT += 2e-4 * e, this.currentDollyT > 1) this.currentDolly = null, 
        this.cam.fov = 70, this.cam.updateProjectionMatrix(), this.onIsShowingDollyChangeCbs.forEach((t => t())), 
        fa().adLad.showFullScreenAd(); else {
            const t = new s, e = this.currentDolly.rot.clone(), i = this.currentDolly.endPos.clone();
            let o;
            this.currentDolly.relativeToVehicle && n && (t.copy(n.cleaningMachine.obj.position), 
            e.premultiply(n.cleaningMachine.obj.quaternion)), i.addScaledVector(this.currentDolly.dir, .4 * this.currentDollyT), 
            this.currentDolly.relativeToVehicle && n && i.applyQuaternion(n.cleaningMachine.obj.quaternion), 
            t.add(i), this.cam.position.copy(t), this.cam.quaternion.copy(e), o = this.currentDolly.relativeToVehicle && n ? n.cleaningMachine.obj.position : this.currentDolly.particlesPos, 
            o && !this.currentDollyDidShowParticles && this.currentDollyT > .2 && (this.currentDollyDidShowParticles = !0, 
            fa().particleManager.createGroup("star", o, 50), this.onUpgradeDollyParticlesSpawnedCbs.forEach((t => t()))), 
            r = !0;
        }
        if (!r && n) {
            const t = n.cleaningMachine.obj;
            let r;
            if (this.useFollowingCamera) {
                const e = new s(0, 0, 1), i = e.clone().applyQuaternion(t.quaternion);
                i.y = 0, r = i.angleTo(e), i.cross(e).y > 0 && (r *= -1);
            } else r = Math.PI;
            const l = new i;
            l.setFromAxisAngle(new s(0, 1, 0), r + Math.PI), this.smoothCamRotFlat.slerp(l, .06);
            const h = o(n.cleaningMachine.getVelocityScalar(), 0, 5, 0, 1), c = new i;
            let d = -.7;
            n.isShowingTitleScreen ? d = -1 : n.loadingScreenActive && (d = -1.1), this.smoothCamDownAngle = a(this.smoothCamDownAngle, d, .02), 
            c.setFromAxisAngle(new s(1, 0, 0), this.smoothCamDownAngle);
            const u = this.smoothCamRotFlat.clone();
            u.multiply(c), this.cam.quaternion.copy(u);
            const p = t.position.clone();
            let g = new s;
            if (n.isShowingTitleScreen ? g.set(0, 1.5, -.9) : n.isShowingInitialCamera ? g.set(0, 2.5, .5) : n.loadingScreenActive ? g.set(0, 3, 1.5) : (g.set(0, 2, 2), 
            g.lerp(new s(0, 2.5, 3), h)), n.isShowingTitleScreen) this.smoothCamOffset.copy(g), 
            this.smoothCamRotFlat.copy(l); else {
                const t = fa().now - this.initialCameraStopTime, e = o(t, 300, 1e3, .008, .01);
                this.smoothCamOffset.lerp(g, e);
            }
            const m = this.smoothCamOffset.clone();
            m.applyQuaternion(this.smoothCamRotFlat), p.add(m), this.cam.position.copy(p);
            const f = Rn(n.cleaningMachine.body.velocity);
            f.multiplyScalar(-.1), this.velocityPhysicsValue1.target = f, this.velocityPhysicsValue1.loop(e), 
            this.cam.position.add(this.velocityPhysicsValue1.value);
            const y = Rn(n.cleaningMachine.body.velocity);
            y.multiplyScalar(.17), this.velocityPhysicsValue2.target = y, this.velocityPhysicsValue2.loop(e), 
            this.cam.position.add(this.velocityPhysicsValue2.value);
        }
        {
            const t = new s(0, 0, 1), e = t.clone().applyQuaternion(fa().cam.cam.quaternion);
            e.y = 0, e.normalize();
            let i = e.angleTo(t);
            e.cross(t).y > 0 && (i = -i), this.flatCamRot.setFromAxisAngle(new s(0, 1, 0), i);
        }
    }
    get useWorldSpaceInput() {
        return !this.currentDolly && !this.useFollowingCamera;
    }
    get isShowingDollyCamera() {
        return Boolean(this.currentDolly);
    }
    worldToScreenPos(t) {
        const e = this.cam.projectionMatrix.clone().multiply(this.cam.matrixWorldInverse), s = t.clone();
        return s.applyMatrix4(e), s.z > 1 && (s.x *= -1, s.y *= -1), s;
    }
    showUpgradeDolly(t) {
        const e = t.endPos.clone(), s = t.dir.clone().normalize(), i = new r;
        i.lookAt(s.clone().multiplyScalar(-1)), this.currentDolly = {
            endPos: e,
            dir: s,
            rot: i.quaternion,
            relativeToVehicle: t.relativeToVehicle,
            particlesPos: t.particlesPos
        }, this.currentDollyT = 0, this.currentDollyDidShowParticles = !1, this.cam.fov = 50, 
        this.cam.updateProjectionMatrix(), this.onIsShowingDollyChangeCbs.forEach((t => t()));
    }
    onIsShowingDollyChange(t) {
        this.onIsShowingDollyChangeCbs.add(t);
    }
    onUpgradeDollyParticlesSpawned(t) {
        this.onUpgradeDollyParticlesSpawnedCbs.add(t);
    }
}

const On = new l;

class Un {
    constructor(t) {
        t = t || {}, this.vertices = {
            near: [ new s, new s, new s, new s ],
            far: [ new s, new s, new s, new s ]
        }, void 0 !== t.projectionMatrix && this.setFromProjectionMatrix(t.projectionMatrix, t.maxFar || 1e4);
    }
    setFromProjectionMatrix(t, e) {
        const s = 0 === t.elements[11];
        return On.copy(t).invert(), this.vertices.near[0].set(1, 1, -1), this.vertices.near[1].set(1, -1, -1), 
        this.vertices.near[2].set(-1, -1, -1), this.vertices.near[3].set(-1, 1, -1), this.vertices.near.forEach((function(t) {
            t.applyMatrix4(On);
        })), this.vertices.far[0].set(1, 1, 1), this.vertices.far[1].set(1, -1, 1), this.vertices.far[2].set(-1, -1, 1), 
        this.vertices.far[3].set(-1, 1, 1), this.vertices.far.forEach((function(t) {
            t.applyMatrix4(On);
            const i = Math.abs(t.z);
            s ? t.z *= Math.min(e / i, 1) : t.multiplyScalar(Math.min(e / i, 1));
        })), this.vertices;
    }
    split(t, e) {
        for (;t.length > e.length; ) e.push(new Un);
        e.length = t.length;
        for (let s = 0; s < t.length; s++) {
            const i = e[s];
            if (0 === s) for (let t = 0; t < 4; t++) i.vertices.near[t].copy(this.vertices.near[t]); else for (let e = 0; e < 4; e++) i.vertices.near[e].lerpVectors(this.vertices.near[e], this.vertices.far[e], t[s - 1]);
            if (s === t.length - 1) for (let t = 0; t < 4; t++) i.vertices.far[t].copy(this.vertices.far[t]); else for (let e = 0; e < 4; e++) i.vertices.far[e].lerpVectors(this.vertices.near[e], this.vertices.far[e], t[s]);
        }
    }
    toSpace(t, e) {
        for (let s = 0; s < 4; s++) e.vertices.near[s].copy(this.vertices.near[s]).applyMatrix4(t), 
        e.vertices.far[s].copy(this.vertices.far[s]).applyMatrix4(t);
    }
}

const Vn = {
    lights_fragment_begin: "\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\tfloat linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#if defined( USE_SHADOWMAP ) && defined( CSM_FADE )\n\tvec2 cascade;\n\tfloat cascadeCenter;\n\tfloat closestEdge;\n\tfloat margin;\n\tfloat csmx;\n\tfloat csmy;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t  \t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\t\t// NOTE: Depth gets larger away from the camera.\n\t\t\t// cascade.x is closer, cascade.y is further\n\t\t\tcascade = CSM_cascades[ i ];\n\t\t\tcascadeCenter = ( cascade.x + cascade.y ) / 2.0;\n\t\t\tclosestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;\n\t\t\tmargin = 0.25 * pow( closestEdge, 2.0 );\n\t\t\tcsmx = cascade.x - margin / 2.0;\n\t\t\tcsmy = cascade.y + margin / 2.0;\n\t\t\tif( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {\n\n\t\t\t\tfloat dist = min( linearDepth - csmx, csmy - linearDepth );\n\t\t\t\tfloat ratio = clamp( dist / margin, 0.0, 1.0 );\n\n\t\t\t\tvec3 prevColor = directLight.color;\n\t\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\t\tbool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;\n\t\t\t\tdirectLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );\n\n\t\t\t\tReflectedLight prevLight = reflectedLight;\n\t\t\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t\t\tbool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;\n\t\t\t\tfloat blendRatio = shouldBlend ? ratio : 1.0;\n\n\t\t\t\treflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );\n\t\t\t\treflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );\n\t\t\t\treflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );\n\t\t\t\treflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );\n\n\t\t\t}\n\t  \t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\t#else\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\t\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\n\t\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t\t\tif(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t\t#endif\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)\n\t\t// compute the lights not casting shadows (if any)\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\t\tdirectionalLight = directionalLights[ i ];\n\n\t\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
    lights_pars_begin: "\n#if defined( USE_CSM ) && defined( CSM_CASCADES )\nuniform vec2 CSM_cascades[CSM_CASCADES];\nuniform float cameraNear;\nuniform float shadowFar;\n#endif\n\t" + h.lights_pars_begin
}, qn = new l, Wn = new Un, Gn = new s, Hn = new c, Kn = [], Yn = [];

class Xn {
    constructor(t) {
        t = t || {}, this.camera = t.camera, this.parent = t.parent, this.cascades = t.cascades || 3, 
        this.maxFar = t.maxFar || 1e5, this.mode = t.mode || "practical", this.shadowMapSize = t.shadowMapSize || 2048, 
        this.shadowBias = t.shadowBias || 1e-6, this.lightDirection = t.lightDirection || new s(1, -1, 1).normalize(), 
        this.lightIntensity = t.lightIntensity || 1, this.lightNear = t.lightNear || 1, 
        this.lightFar = t.lightFar || 2e3, this.lightMargin = t.lightMargin || 200, this.customSplitsCallback = t.customSplitsCallback, 
        this.fade = !1, this.mainFrustum = new Un, this.frustums = [], this.breaks = [], 
        this.lights = [], this.shaders = new Map, this.createLights(), this.updateFrustums(), 
        this.injectInclude();
    }
    createLights() {
        for (let t = 0; t < this.cascades; t++) {
            const t = new d(16777215, this.lightIntensity);
            t.castShadow = !0, t.shadow.mapSize.width = this.shadowMapSize, t.shadow.mapSize.height = this.shadowMapSize, 
            t.shadow.camera.near = this.lightNear, t.shadow.camera.far = this.lightFar, t.shadow.bias = this.shadowBias, 
            this.parent.add(t), this.parent.add(t.target), this.lights.push(t);
        }
    }
    initCascades() {
        const t = this.camera;
        t.updateProjectionMatrix(), this.mainFrustum.setFromProjectionMatrix(t.projectionMatrix, this.maxFar), 
        this.mainFrustum.split(this.breaks, this.frustums);
    }
    updateShadowBounds() {
        const t = this.frustums;
        for (let e = 0; e < t.length; e++) {
            const t = this.lights[e].shadow.camera, s = this.frustums[e], i = s.vertices.near, n = s.vertices.far, o = n[0];
            let a;
            a = o.distanceTo(n[2]) > o.distanceTo(i[2]) ? n[2] : i[2];
            let r = o.distanceTo(a);
            if (this.fade) {
                const t = this.camera, e = Math.max(t.far, this.maxFar), i = s.vertices.far[0].z / (e - t.near);
                r += .25 * Math.pow(i, 2) * (e - t.near);
            }
            t.left = -r / 2, t.right = r / 2, t.top = r / 2, t.bottom = -r / 2, t.updateProjectionMatrix();
        }
    }
    getBreaks() {
        const t = this.camera, e = Math.min(t.far, this.maxFar);
        switch (this.breaks.length = 0, this.mode) {
          case "uniform":
            s(this.cascades, t.near, e, this.breaks);
            break;

          case "logarithmic":
            i(this.cascades, t.near, e, this.breaks);
            break;

          case "practical":
            !function(t, e, n, o, a) {
                Kn.length = 0, Yn.length = 0, i(t, e, n, Yn), s(t, e, n, Kn);
                for (let e = 1; e < t; e++) a.push(u.lerp(Kn[e - 1], Yn[e - 1], o));
                a.push(1);
            }(this.cascades, t.near, e, .5, this.breaks);
            break;

          case "custom":
            void 0 === this.customSplitsCallback && console.error("CSM: Custom split scheme callback not defined."), 
            this.customSplitsCallback(this.cascades, t.near, e, this.breaks);
        }
        function s(t, e, s, i) {
            for (let n = 1; n < t; n++) i.push((e + (s - e) * n / t) / s);
            i.push(1);
        }
        function i(t, e, s, i) {
            for (let n = 1; n < t; n++) i.push(e * (s / e) ** (n / t) / s);
            i.push(1);
        }
    }
    update() {
        const t = this.camera, e = this.frustums;
        for (let s = 0; s < e.length; s++) {
            const i = this.lights[s], n = i.shadow.camera, o = (n.right - n.left) / this.shadowMapSize, a = (n.top - n.bottom) / this.shadowMapSize;
            i.shadow.camera.updateMatrixWorld(!0), qn.multiplyMatrices(i.shadow.camera.matrixWorldInverse, t.matrixWorld), 
            e[s].toSpace(qn, Wn);
            const r = Wn.vertices.near, l = Wn.vertices.far;
            Hn.makeEmpty();
            for (let t = 0; t < 4; t++) Hn.expandByPoint(r[t]), Hn.expandByPoint(l[t]);
            Hn.getCenter(Gn), Gn.z = Hn.max.z + this.lightMargin, Gn.x = Math.floor(Gn.x / o) * o, 
            Gn.y = Math.floor(Gn.y / a) * a, Gn.applyMatrix4(i.shadow.camera.matrixWorld), i.position.copy(Gn), 
            i.target.position.copy(Gn), i.target.position.x += this.lightDirection.x, i.target.position.y += this.lightDirection.y, 
            i.target.position.z += this.lightDirection.z;
        }
    }
    injectInclude() {
        h.lights_fragment_begin = Vn.lights_fragment_begin, h.lights_pars_begin = Vn.lights_pars_begin;
    }
    setupMaterial(t) {
        t.defines = t.defines || {}, t.defines.USE_CSM = 1, t.defines.CSM_CASCADES = this.cascades, 
        this.fade && (t.defines.CSM_FADE = "");
        const e = [], s = this, i = this.shaders;
        t.onBeforeCompile = function(n) {
            const o = Math.min(s.camera.far, s.maxFar);
            s.getExtendedBreaks(e), n.uniforms.CSM_cascades = {
                value: e
            }, n.uniforms.cameraNear = {
                value: s.camera.near
            }, n.uniforms.shadowFar = {
                value: o
            }, i.set(t, n);
        }, i.set(t, null);
    }
    updateUniforms() {
        const t = Math.min(this.camera.far, this.maxFar);
        this.shaders.forEach((function(e, s) {
            if (null !== e) {
                const s = e.uniforms;
                this.getExtendedBreaks(s.CSM_cascades.value), s.cameraNear.value = this.camera.near, 
                s.shadowFar.value = t;
            }
            !this.fade && "CSM_FADE" in s.defines ? (delete s.defines.CSM_FADE, s.needsUpdate = !0) : this.fade && !("CSM_FADE" in s.defines) && (s.defines.CSM_FADE = "", 
            s.needsUpdate = !0);
        }), this);
    }
    getExtendedBreaks(t) {
        for (;t.length < this.breaks.length; ) t.push(new p);
        t.length = this.breaks.length;
        for (let e = 0; e < this.cascades; e++) {
            const s = this.breaks[e], i = this.breaks[e - 1] || 0;
            t[e].x = i, t[e].y = s;
        }
    }
    updateFrustums() {
        this.getBreaks(), this.initCascades(), this.updateShadowBounds(), this.updateUniforms();
    }
    remove() {
        for (let t = 0; t < this.lights.length; t++) this.parent.remove(this.lights[t].target), 
        this.parent.remove(this.lights[t]);
    }
    dispose() {
        const t = this.shaders;
        t.forEach((function(t, e) {
            delete e.onBeforeCompile, delete e.defines.USE_CSM, delete e.defines.CSM_CASCADES, 
            delete e.defines.CSM_FADE, null !== t && (delete t.uniforms.CSM_cascades, delete t.uniforms.cameraNear, 
            delete t.uniforms.shadowFar), e.needsUpdate = !0;
        })), t.clear();
    }
}

let Qn = new g({
    vertexColors: !0
});

class $n {
    constructor() {
        this.webglCreationFailed = !1, this.renderer = null, this.canvas = null, this.csm = null, 
        this.waitForFrameRenderCbs = new Set;
    }
    init(t) {
        try {
            this.renderer = new m({
                antialias: !0,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            });
        } catch (t) {
            try {
                this.renderer = new m({
                    antialias: !0,
                    alpha: !0,
                    failIfMajorPerformanceCaveat: !0
                });
            } catch (t) {
                try {
                    this.renderer = new m({
                        antialias: !1,
                        alpha: !0,
                        failIfMajorPerformanceCaveat: !0
                    });
                } catch (t) {
                    try {
                        this.renderer = new m;
                    } catch (t) {
                        console.error("Failed to create WebGLRenderer:", t), this.webglCreationFailed = !0;
                    }
                }
            }
        }
        this.renderer && (this.renderer.outputEncoding = f, this.renderer.autoClear = !1, 
        this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = y, this.csm = new Xn({
            parent: fa().scene,
            shadowMapSize: 512,
            camera: fa().cam.cam,
            lightDirection: new s(-.5, -1, .5).normalize(),
            lightIntensity: .3
        }), this.csm.fade = !0, this.csm.maxFar = 10, this.csm.updateFrustums(), this.csm.setupMaterial(Qn), 
        this.canvas = this.renderer.domElement, this.canvas.classList.add("main-canvas"), 
        this.canvas.inert = !0, t.appendChild(this.canvas)), it((() => {
            this.onResize();
        })), this.onResize();
    }
    onResize() {
        this.csm && this.csm.updateFrustums(), this.renderer && this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    loop(t, e) {
        this.csm && this.csm.update(), this.renderer && (this.renderer.render(fa().scene, fa().cam.cam), 
        this.waitForFrameRenderCbs.forEach((t => t())), this.waitForFrameRenderCbs.clear());
    }
    waitForFrameRender() {
        return new Promise((t => {
            this.waitForFrameRenderCbs.add(t);
        }));
    }
}

class Zn {
    static setCurrentScene(t) {
        this.scene = t, this.drawLinesNextFrame = [], this.removeLinesNextFrame = [], this.material || (this.material = new w({
            color: 16777215,
            vertexColors: !0
        }));
    }
    static loop() {
        if (this.drawLinesNextFrame && this.removeLinesNextFrame) {
            for (const t of this.removeLinesNextFrame) {
                const e = t.line;
                e && (e.parent && e.parent.remove(e), e.geometry.dispose());
            }
            this.removeLinesNextFrame = [];
            for (const t of this.drawLinesNextFrame) {
                const e = new v, s = new Float32Array([ ...t.from.toArray(), ...t.to.toArray() ]);
                e.setAttribute("position", new S(s, 3));
                let i = this.material;
                t.color && (i = new w({
                    color: t.color
                }));
                const n = new b(e, i);
                if (t.line = n, !this.scene) throw new Error("Unable to draw debug lines, no scene provided");
                this.scene.add(n), this.removeLinesNextFrame.push(t);
            }
            this.drawLinesNextFrame = [];
        }
    }
    static drawLine(t, e, s) {
        this.drawLinesNextFrame && this.drawLinesNextFrame.push({
            from: t.clone(),
            to: e.clone(),
            color: s,
            line: null
        });
    }
    static drawRay(t, e, s = 16777215) {
        const i = (t = t.clone()).clone();
        i.add(e), this.drawLine(t, i, s);
    }
}

const Jn = new at(4, 0, 5), to = [ {
    objectName: "boostUpgrade",
    upgradeType: "boost"
}, {
    objectName: "customerCautionUpgrade",
    upgradeType: "customerCaution"
}, {
    objectName: "gripUpgrade",
    upgradeType: "grip"
}, {
    objectName: "trashStorageUpgrade1",
    upgradeType: "trashStorage"
}, {
    objectName: "trashStorageUpgrade2",
    upgradeType: "trashStorage",
    minimumLevel: 2
}, {
    objectName: "trashStorageUpgrade3",
    upgradeType: "trashStorage",
    minimumLevel: 3
}, {
    objectName: "safetyGuardUpgrade1",
    upgradeType: "safetyGuard"
}, {
    objectName: "safetyGuardUpgrade2",
    upgradeType: "safetyGuard",
    minimumLevel: 2
}, {
    objectName: "speedUpgrade1",
    upgradeType: "speed",
    minimumLevel: 1
}, {
    objectName: "speedUpgrade2",
    upgradeType: "speed",
    minimumLevel: 2
}, {
    objectName: "speedUpgrade3",
    upgradeType: "speed",
    minimumLevel: 3
} ];

class eo {
    constructor(t, e) {
        this.game = t, this.body = new It({
            mass: 5,
            material: this.game.cleaningMachineMaterial,
            linearDamping: .995,
            angularDamping: .9999,
            allowSleep: !1
        }), this.body.angularFactor = new at(0, 1, 0);
        const i = new At(new at(.4, .2, .8));
        this.body.addShape(i, new at(0, .2, .6));
        const n = new At(new at(.3, .3, .6));
        this.body.addShape(n, new at(0, .6, .45));
        const o = new At(new at(.2, .4, .2));
        this.body.addShape(o, new at(0, .8, 1.2));
        const a = new ls(.4);
        this.body.addShape(a, new at(0, .9, .15));
        const l = new ls(.4);
        this.body.addShape(l, new at(0, .95, .4)), t.physicsWorld.addBody(this.body), this.obj = new x, 
        e.add(this.obj), this.boostKey = fa().input.getKey("boost"), this.boostAccumulator = 0, 
        this.storageSpaceUsed = 0, this.onStorageSpaceChangedCbs = new Set, this.lastGarbageBagCreateTime = 0, 
        this.lastStorageFullSfxPlayTime = 0, this.prevDeltaAngleForLoop = 0, this.inputAngleLoop = 0, 
        this.lastLoopInputTime = 0, this.lastInputDirection = new s(0, 0, 1), this.lastFrameWasBackwardsInput = !1, 
        this.wheelObjects = [], this.headObject = null, this.headLookAtHelper = new r, this.obj.add(this.headLookAtHelper), 
        this.lastLookatPosChangeTime = -1 / 0, this.currentLookatPos = null, this.storageFullAlertRef = null;
        for (const {upgradeType: t} of to) fa().upgradeManager.onUpgradeLevelChange(t, (() => {
            this.updateUpgradeObjects();
        }));
        fa().cam.onUpgradeDollyParticlesSpawned((() => {
            this.updateUpgradeObjects();
        })), fa().upgradeManager.onUpgradeLevelChange("trashStorage", (() => {
            this.clearStorageFullAlert();
        })), this.loadAsset(), this.resetPosition();
    }
    async loadAsset() {
        const t = await fa().assets.loadCleaningMachine();
        for (const e of C(t)) e.castShadow = !0, e.receiveShadow = !0;
        this.obj.add(t), this.updateUpgradeObjects();
        const e = e => {
            const s = t.getObjectByName(e);
            s && this.wheelObjects.push(s);
        };
        e("wheelLeftFront"), e("wheelLeftBack"), e("wheelRightFront"), e("wheelRightBack"), 
        this.headObject = t.getObjectByName("raccoonHead") || null, this.headObject && this.headLookAtHelper.position.copy(this.headObject.position);
    }
    resetPosition() {
        this.body.position.copy(Jn), this.body.quaternion.setFromAxisAngle(new at(0, 1, 0), Math.PI);
    }
    updateUpgradeObjects() {
        const t = fa().cam;
        if (t.isShowingDollyCamera && !t.currentDollyDidShowParticles) return;
        const e = fa().upgradeManager;
        for (const t of to) {
            const s = this.obj.getObjectByName(t.objectName);
            if (!s) continue;
            const i = t.minimumLevel || 1;
            s.visible = e.getUpgradeLevel(t.upgradeType) >= i;
        }
    }
    getPosition() {
        return this.obj.position.clone();
    }
    getVelocityScalar() {
        return Rn(this.body.velocity).length();
    }
    loop(e, n) {
        const r = fa(), l = r.input, h = new s(0, 0, 1);
        h.applyQuaternion(this.obj.quaternion);
        const c = Rn(this.body.velocity).dot(h), d = this.body.angularVelocity.y;
        let u;
        Math.abs(c) < .6 ? u = .6 * Math.PI : (u = Math.abs(d) > .6 ? Math.PI : Math.PI * o(Math.abs(c), .2, 2, .6, .95), 
        c < 0 && (u = this.lastFrameWasBackwardsInput ? Math.PI - u : .6 * Math.PI));
        let p = !1, g = !1;
        for (const P of this.game.stains) {
            P.pos.distanceTo(this.getPosition()) < P.getTriggerRadius() && (P.isSticky && (g = !0), 
            P.isSlippery && (p = !0));
        }
        let m = .995, f = .9999, y = 1;
        g && (m = .99999), p && (0 == fa().upgradeManager.getUpgradeLevel("grip") ? (m = .4, 
        f = .996, y = .5) : (m = .8, f = .9994, y = .3)), this.body.linearDamping = m, this.body.angularDamping = f;
        const w = fa().cam.useWorldSpaceInput;
        if (this.lastFrameWasBackwardsInput = !1, l.moveInput.length() > .01) {
            const A = new s(0, 0, 1);
            if (A.applyQuaternion(this.obj.quaternion), A.normalize(), w) {
                const k = new s(l.moveInput.x, 0, l.moveInput.y), T = k.length();
                k.applyQuaternion(r.cam.cam.quaternion), k.y = 0, k.setLength(T);
                const B = h.angleTo(k) > u;
                B && A.multiplyScalar(-1), this.lastFrameWasBackwardsInput = B, this.lastInputDirection = k.clone(), 
                A.multiplyScalar(T);
            } else {
                let z = -Math.sign(l.moveInput.y);
                0 == z && Math.abs(l.moveInput.x) > .1 && (z = 1), A.multiplyScalar(z);
            }
            const E = this.boostKey.pressed && fa().upgradeManager.getUpgradeLevel("boost") > 0;
            A.multiplyScalar(E ? 25 : 13), A.multiplyScalar(a(.9, 2.5, fa().upgradeManager.getUpgradeValue("speed"))), 
            A.multiplyScalar(y), A.multiplyScalar(n / 1e3);
            const L = Rn(A);
            if (this.body.velocity.vadd(L, this.body.velocity), this.body.wakeUp(), E && (this.boostAccumulator += n, 
            this.boostAccumulator > 1e3)) {
                const N = fa().game;
                N && N.dismissBoostTutorialKeyboard();
            }
        } else this.inputAngleLoop = 0;
        let v;
        if (w) {
            if (v = h.angleTo(this.lastInputDirection), v > u) {
                const F = h.clone().multiplyScalar(-1);
                v = F.angleTo(this.lastInputDirection);
                F.clone().cross(this.lastInputDirection).y < 0 && (v *= -1);
            } else {
                h.clone().cross(this.lastInputDirection).y < 0 && (v *= -1);
            }
            Math.abs(this.prevDeltaAngleForLoop) > .5 * Math.PI && Math.abs(v) > .5 * Math.PI && Math.sign(this.prevDeltaAngleForLoop) != Math.sign(v) && (this.prevDeltaAngleForLoop < v ? this.inputAngleLoop++ : this.inputAngleLoop--), 
            this.prevDeltaAngleForLoop = v, this.inputAngleLoop = t(this.inputAngleLoop, -1, 1), 
            v -= this.inputAngleLoop * Math.PI * 2, v = t(v, -1, 1);
        } else v = -l.moveInput.x, l.moveInput.y > 0 && (v *= -1);
        v *= 3;
        const S = Math.abs(this.body.velocity.length());
        let b = Math.pow(S, 2.5);
        b = Math.min(10, b), b *= a(.9, 1.5, fa().upgradeManager.getUpgradeValue("speed")), 
        this.body.angularVelocity.y += v * b * n / 1e3, this.game.loadingScreenActive && this.clampPosition(3);
        const x = this.body.position.distanceTo(Jn);
        x > .5 && (this.game.stopShowingTitle(), fa().initialGameplayStarted()), x > 2 && this.game.stopShowingInitialCamera();
        let C = 1 / 0, M = null;
        for (const I of this.game.dumpsterPositions) {
            const _ = this.obj.position.distanceTo(I);
            _ < C && (M = I, C = _);
        }
        if (this.storageFullAlertRef && M) {
            const R = M.clone();
            R.y = 1, R.z += 1, this.storageFullAlertRef.setPos(R);
        }
        if (C < 3 && this.storageSpaceUsed > 0) {
            const D = .04 * n;
            let j;
            j = this.storageSpaceUsed > 0 ? D / this.storageSpaceUsed : 1, this.storageSpaceUsed -= D, 
            this.storageSpaceUsed = Math.max(0, this.storageSpaceUsed), 0 == this.storageSpaceUsed && (j = 1);
            const O = this.game.rewardedCoinMultiplierActive ? 2 : 1;
            fa().coins.transferStorageCoins(j, O), this.fireOnStorageSpaceChangedCbs(), M && e - this.lastGarbageBagCreateTime > 200 && (this.lastGarbageBagCreateTime = e, 
            this.game.createGarbageBag(this.getPosition(), M)), this.clearStorageFullAlert();
        }
        for (const U of this.wheelObjects) U.rotation.x += c * n * .003;
        if (e - this.lastLookatPosChangeTime > 1500) {
            this.lastLookatPosChangeTime = e, this.currentLookatPos = null;
            let V = 8;
            for (const q of this.game.fallenProducts) {
                const W = Rn(q.body.position), G = W.distanceTo(this.obj.position);
                G < V && (V = G, this.currentLookatPos = W);
            }
        }
        if (this.currentLookatPos) {
            this.currentLookatPos.distanceTo(this.obj.position) > 8 && this.clearCurrentLookatPos();
        }
        if (this.headObject) {
            this.currentLookatPos ? this.headLookAtHelper.lookAt(this.currentLookatPos) : this.headLookAtHelper.quaternion.identity();
            const H = this.headLookAtHelper.quaternion, K = new s(0, 0, 1);
            function Y(t) {
                const e = K.clone().applyQuaternion(H);
                t ? e.y = 0 : e.x = 0;
                let s = e.angleTo(K);
                const i = e.cross(K);
                return t ? i.y > 0 && (s *= -1) : i.x > 0 && (s *= -1), s;
            }
            let X = Y(!0);
            Math.abs(X) > 2 && this.clearCurrentLookatPos();
            let Q = Y(!1);
            X = t(X, -1.3, 1.3), Q = t(Q, -.2, .2);
            const $ = new i;
            $.setFromAxisAngle(new s(0, 1, 0), X);
            const Z = new i;
            Z.setFromAxisAngle(new s(1, 0, 0), Q);
            const J = $.clone().multiply(Z);
            this.headObject.quaternion.slerp(J, .2);
        }
    }
    clampPosition(t) {
        this.body.position.x = e(this.body.position.x, Jn.x - t, Jn.x + t), this.body.position.z = e(this.body.position.z, Jn.z - t, Jn.z + t);
    }
    clearCurrentLookatPos() {
        this.currentLookatPos = null, this.lastLookatPosChangeTime = fa().now;
    }
    clearStorageFullAlert() {
        this.storageFullAlertRef && (this.storageFullAlertRef.destroy(), this.storageFullAlertRef = null, 
        this.game.cornerScore.setStorageFlashing(!1));
    }
    afterPhysicsLoop(t, e) {
        const i = Dn(this.body.quaternion);
        this.obj.quaternion.copy(i);
        const n = Rn(this.body.position), o = new s(0, 0, .5);
        o.applyQuaternion(i), n.add(o), this.obj.position.copy(n);
    }
    getTotalStorageSpace() {
        const t = fa().upgradeManager.getUpgradeValue("trashStorage");
        return a(100, 300, t);
    }
    hasStorageSpaceLeft(t) {
        return this.getTotalStorageSpace() - this.storageSpaceUsed > t;
    }
    triedCleaningTooBigItem() {
        const t = fa().now;
        if (t - this.lastStorageFullSfxPlayTime > 3e3) {
            if (!this.storageFullAlertRef) {
                const t = this.game.alerts.createStandaloneAlert({
                    priority: 100,
                    flashing: !0
                });
                this.storageFullAlertRef = t.createReference(), this.game.cornerScore.setStorageFlashing(!0);
            }
            fa().sfx.playSound("storageFull", {
                pos: this.getPosition()
            });
        }
        this.lastStorageFullSfxPlayTime = t;
    }
    incrementStorageSpace(t) {
        this.storageSpaceUsed += t, this.storageSpaceUsed = Math.min(this.storageSpaceUsed, this.getTotalStorageSpace()), 
        this.fireOnStorageSpaceChangedCbs();
    }
    onStorageSpaceChanged(t) {
        this.onStorageSpaceChangedCbs.add(t);
    }
    removeOnStorageSpaceChanged(t) {
        this.onStorageSpaceChangedCbs.delete(t);
    }
    fireOnStorageSpaceChangedCbs() {
        const t = this.storageSpaceUsed / this.getTotalStorageSpace();
        this.onStorageSpaceChangedCbs.forEach((e => e(t)));
    }
}

const so = new i;

so.setFromAxisAngle(new s(0, 1, 0), .5 * Math.PI);

class io {
    constructor(t, e, s, i, n, o) {
        this.game = t, this.object = e, e.matrixAutoUpdate = !1, e.matrixWorldAutoUpdate = !1, 
        this.objectCenter = i, this.objectCenterWorld = i.clone(), this.objectCenterWorld.add(this.object.position), 
        this.fallingProductTypes = n, this.exactFallingProductCount = o, this.body = s, 
        s.addEventListener("collide", this.onCollide.bind(this)), this.rotationPhysics = new Z, 
        this.matrix1 = new l, this.matrix1.setPosition(i.clone().multiplyScalar(-1)), this.matrix3 = e.matrixWorld.clone();
        const a = new l;
        a.setPosition(i), this.matrix3.multiply(a), this.lastHitSfxTime = -1 / 0, this.lastSpillTime = -1 / 0, 
        this.recentPlayerSpillsMultiplier = 1;
    }
    onCollide(t) {
        if (t.contact && (t.body == this.game.cleaningMachine.body || t.target == this.game.cleaningMachine.body)) {
            const e = Math.abs(this.game.cleaningMachine.body.velocity.dot(t.contact.ni));
            fa().now - this.lastHitSfxTime > 300 && (this.lastHitSfxTime = fa().now, fa().sfx.playSound("shelfHit", {
                pos: this.objectCenterWorld,
                volume: o(e, 1.8, 3, .2, .9)
            }));
            let s = !1, i = o(e, 1.5, 2.5, 1, 4, !1);
            i /= a(1, 4, fa().upgradeManager.getUpgradeValue("safetyGuard")), i *= this.recentPlayerSpillsMultiplier, 
            s = this.spillProducts(i, "player");
            const n = o(fa().upgradeManager.getUpgradeLevel("storeShelves"), 0, 3, .3, 1);
            s && (this.recentPlayerSpillsMultiplier *= n);
            const r = Rn(t.contact.ni);
            r.y = 0, r.normalize(), r.applyQuaternion(so);
            const l = s ? .004 : .001, h = r.multiplyScalar(e * l);
            this.rotationPhysics.addImpulse(h);
        }
    }
    getRandomProductType() {
        const t = M(this.fallingProductTypes);
        if (!t) return null;
        const e = M(t);
        return e ? Array.isArray(e) ? M(e) || null : e : null;
    }
    spillProducts(t, e, i = "cam") {
        if (0 == t) return !1;
        if (fa().now - this.lastSpillTime < 1e3) return !1;
        this.lastSpillTime = fa().now;
        const n = this.object.position.x + this.objectCenter.x;
        let o;
        o = "left" == i || "right" != i && n - fa().cam.cam.position.x > 0;
        const a = new s(o ? -1 : 1, 0, 0);
        null != this.exactFallingProductCount ? t = this.exactFallingProductCount : (t = Math.floor(t), 
        "customer" == e && (t = Math.max(1, t)));
        let r = !1;
        for (let s = 0; s < this.fallingProductTypes.length; s++) {
            const [i, n] = this.fallingProductTypes[s], l = o ? i : n, h = this.object.position.clone();
            h.y += 1, o ? h.x -= .1 : h.x += 2.1, h.z += 2 * s + 1;
            for (let s = 0; s < t; s++) {
                let t;
                t = "string" == typeof l || null == l ? l : M(l) || null, this.game.createFallenProduct(t, h, a, e), 
                r = !0;
            }
        }
        return r;
    }
    loop(t, e) {
        this.recentPlayerSpillsMultiplier += 4e-5 * e, this.recentPlayerSpillsMultiplier = P(this.recentPlayerSpillsMultiplier), 
        this.rotationPhysics.loop(e);
        const s = this.rotationPhysics.value, n = s.length();
        s.normalize();
        const o = new i;
        o.setFromAxisAngle(s, n);
        const a = new l;
        a.makeRotationFromQuaternion(o), this.object.matrix.copy(this.matrix1), this.object.matrix.premultiply(a), 
        this.object.matrix.premultiply(this.matrix3);
    }
}

class no {
    constructor(t, {assetNames: e = [], shapes: i = [], cleanDuration: n = 300, mass: o = .01, scoreMultiplier: a = 1, storageSpaceMultiplier: r = 1, stainTypes: l = []}) {
        this.game = t.game, this.spilledBy = t.spilledBy, this.creationTime = t.creationTime, 
        this.body = new It({
            mass: o,
            sleepSpeedLimit: 1
        });
        for (const t of i) this.body.addShape(...t);
        if (this.game.physicsWorld.addBody(this.body), this.didPlayFloorHitSfx = !1, this.didSpawnStain = !1, 
        this.stainTypes = l, this.createdStains = [], this.despawnTimer = 0, this.destructed = !1, 
        this.body.addEventListener("collide", this.onCollision), this.cleanAccumulator = 0, 
        this.cleanDuration = n, this.penaltyClamp = 0, this.scoreMultiplier = a, this.storageSpaceMultiplier = r, 
        this.isBeingCleaned = !1, this.isBeingCleanedBy = null, this.bodyRemoved = !1, this.cleanedStartPos = null, 
        this.cleanedStartScale = new s(1, 1, 1), this.cleanedT = 0, this.onDespawnCbs = new Set, 
        this.asset = null, "string" == typeof e) this.loadAsset(e); else {
            const t = M(e);
            t && this.loadAsset(t);
        }
    }
    destructor() {
        this.destructed = !0, this.asset && fa().scene.remove(this.asset);
    }
    async loadAsset(t) {
        if (!t) return;
        const e = await fa().assets.loadGlbViaWorker(`fallenProducts/${t}.glb`);
        if (!e) throw new Error(`Failed to load fallen product asset "${t}"`);
        for (const t of C(e)) t.castShadow = !0;
        this.destructed || (this.asset = e, fa().scene.add(e));
    }
    onCollision=t => {
        if (!this.isBeingCleaned && !this.destructed) if (t.body == this.game.floorBody) {
            if (this.didPlayFloorHitSfx || (this.didPlayFloorHitSfx = !0, fa().sfx.playSound("objectCollision", {
                pos: Rn(this.body.position)
            })), this.onFloorCollision(), this.stainTypes && !this.didSpawnStain) {
                let t;
                t = Array.isArray(this.stainTypes) ? this.stainTypes : [ this.stainTypes ], this.createStains(t, this.spilledBy), 
                this.didSpawnStain = !0;
            }
        } else if (t.body == this.game.cleaningMachine.body && t.contact) {
            const e = t.contact.bi.position.clone();
            if (e.vadd(t.contact.ri, e), e.y < .3) {
                const t = this.game.cleaningMachine;
                t.hasStorageSpaceLeft(this.storageSpaceMultiplier) ? this.clean(t) : t.triedCleaningTooBigItem();
            }
        }
    };
    onFloorCollision() {}
    createStains(t, e) {
        const n = Rn(this.body.position);
        n.y = 0;
        const o = Rn(this.body.velocity);
        o.y = 0;
        const a = new s(-1, 0, 0);
        let r = a.angleTo(o);
        a.cross(o).y < 0 && (r *= -1);
        const l = (new i).setFromAxisAngle(new s(0, 1, 0), r);
        for (const s of t) {
            const t = this.game.createStain(s, n, l, e);
            this.createdStains.push(t), t.onDespawn((() => {
                this.createdStains = this.createdStains.filter((e => e != t));
            }));
        }
    }
    clean(t) {
        if (!this.isBeingCleaned) {
            t && (t.incrementStorageSpace(this.storageSpaceMultiplier), fa().sfx.playSound("cleanObject", {
                pos: Rn(this.body.position)
            })), this.isBeingCleaned = !0, this.isBeingCleanedBy = t, this.cleanedStartPos = Rn(this.body.position), 
            this.asset && this.cleanedStartScale.copy(this.asset.scale);
            for (const t of this.createdStains) t.creatorIsBeingCleanedUp();
        }
    }
    getSpillPenalty() {
        return "player" == this.spilledBy || "preventable" == this.spilledBy ? this.scoreMultiplier : 0;
    }
    setPenaltyClamp(t) {
        this.penaltyClamp = t;
    }
    getCleanUpScore() {
        return this.scoreMultiplier - this.penaltyClamp;
    }
    startFall(t, e) {
        this.body.position.copy(Rn(t));
        const s = e.clone();
        s.multiplyScalar(3), this.body.velocity.copy(Rn(s));
    }
    loop(t, e) {
        if (this.cleanAccumulator > 0 && (this.cleanAccumulator -= e, this.cleanAccumulator = Math.max(0, this.cleanAccumulator)), 
        this.isBeingCleaned && (this.bodyRemoved || (this.game.physicsWorld.removeBody(this.body), 
        this.bodyRemoved = !0), this.cleanedT += e / 1e3, this.asset && this.cleanedStartPos)) {
            const t = 20 * Math.pow(this.cleanedT, 2);
            if (this.isBeingCleanedBy && this.asset.position.lerpVectors(this.cleanedStartPos, this.isBeingCleanedBy.getPosition(), t), 
            this.asset.scale.lerpVectors(this.cleanedStartScale, new s, t), t > 1) {
                const t = this.asset;
                this.onDespawnCbs.forEach((e => e(this.isBeingCleanedBy, t.position.clone()))), 
                this.isBeingCleaned = !1, this.isBeingCleanedBy = null;
            }
        }
        this.game.cleaningMachine.getPosition().distanceTo(Rn(this.body.position)) > 7 && (this.despawnTimer += e, 
        this.despawnTimer > 9e4 && this.clean(null));
    }
    afterPhysicsLoop(t, e) {
        this.isBeingCleaned || this.asset && (this.asset.position.copy(Rn(this.body.position)), 
        this.asset.quaternion.copy(Dn(this.body.quaternion)));
    }
    onDespawn(t) {
        this.onDespawnCbs.add(t);
    }
}

function oo(t) {
    return co([ class extends no {
        constructor(e) {
            super(e, {
                shapes: [ [ new At(new at(.15, .2, .15)) ] ],
                assetNames: `iceCream${t}BottomBroken`,
                stainTypes: [ `iceCreamBall${t}`, `iceCreamMelted${t}` ],
                storageSpaceMultiplier: 1.3
            });
        }
    }, class extends no {
        constructor(e) {
            const s = new At(new at(.15, .05, .15));
            super(e, {
                assetNames: `iceCream${t}LidBroken`,
                shapes: [ [ s ] ],
                storageSpaceMultiplier: 1.3
            });
        }
    } ]);
}

function ao(t) {
    const e = `${t}Juice`;
    return co(class extends no {
        constructor(s) {
            super(s, {
                shapes: [ [ new At(new at(.15, .3, .15)) ] ],
                assetNames: `${t}JuiceBoxBroken`,
                stainTypes: e,
                scoreMultiplier: 1.8
            });
        }
    });
}

function ro(t) {
    return co(class extends no {
        constructor(e) {
            super(e, {
                shapes: [ [ new At(new at(.15, .3, .15)) ] ],
                assetNames: `${t}BottleBroken`,
                stainTypes: t,
                scoreMultiplier: 2.3
            });
        }
    });
}

function lo(t) {
    const e = `iceCreamOnStick${t}`;
    return co(class extends no {
        constructor(s) {
            super(s, {
                shapes: [ [ new At(new at(.08, .05, .2)) ] ],
                assetNames: `iceCreamOnStickBroken${t}`,
                stainTypes: e,
                scoreMultiplier: 4
            });
        }
    });
}

class ho extends no {
    constructor(t, e) {
        super(t, e), this.nextJumpTime = 0;
    }
    loop(t, e) {
        if (super.loop(t, e), t > this.nextJumpTime) {
            this.nextJumpTime = t + A(500, 1500), this.body.wakeUp();
            const e = new at(A(-.1, .1), 0, A(-.1, .1));
            this.body.applyImpulse(new at(0, .04, 0), e);
        }
    }
}

function co(t) {
    return () => Array.isArray(t) ? t : [ t ];
}

function uo(t, e = 0, s = 3) {
    return () => {
        const i = [], n = E(e, s + 1);
        for (let e = 0; e < n; e++) i.push(t);
        return i;
    };
}

const po = {
    appleJuice: ao("apple"),
    cherryJuice: ao("cherry"),
    orangeJuice: ao("orange"),
    pineappleJuice: ao("pineapple"),
    wine: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.07, .15, .07)) ] ],
                assetNames: [ "wineBottleBroken", "wineBottleBroken2" ],
                stainTypes: "wine"
            });
        }
    }),
    milk: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.13, .3, .13)) ] ],
                assetNames: "milkJugBroken",
                stainTypes: "milk",
                scoreMultiplier: .2
            });
        }
    }),
    lemonJuice: [ co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.06, .2, .1)) ] ],
                assetNames: "lemonJuiceBroken",
                scoreMultiplier: .2,
                stainTypes: "lemonJuice"
            });
        }
    }), co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.03, .15, .03)) ] ],
                assetNames: "lemonJuiceStrawBroken",
                scoreMultiplier: .2
            });
        }
    }) ],
    eggBox: [ co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.15, .1, .2)) ] ],
                assetNames: "eggBoxBroken",
                scoreMultiplier: .2
            });
        }
    }), uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .1, .1)) ] ],
                assetNames: [ "eggShellBroken1", "eggShellBroken2" ],
                stainTypes: "egg",
                scoreMultiplier: .3
            });
        }
    }) ],
    tea: [ co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .2, .1)) ] ],
                assetNames: "teaBoxBroken",
                scoreMultiplier: .2
            });
        }
    }), uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .03, .1)) ] ],
                assetNames: [ "teaBagBroken" ],
                scoreMultiplier: .2
            });
        }
    }, 2, 5) ],
    leek: uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.15, .04, .04)) ] ],
                assetNames: [ "leekBottomBroken", "leekTopBroken" ],
                scoreMultiplier: .11
            });
        }
    }, 1, 2),
    carrot: uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .05, .05)) ] ],
                assetNames: [ "carrotBottomBroken", "carrotTopBroken" ],
                scoreMultiplier: .1
            });
        }
    }, 1, 2),
    watermelon: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.2, .05, .2)) ] ],
                assetNames: "watermelonBroken",
                stainTypes: "watermelon",
                scoreMultiplier: .15
            });
        }
    }),
    tunaCan: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.18, .07, .18)) ] ],
                assetNames: "tunaCanBroken",
                stainTypes: "tunaCan",
                scoreMultiplier: .2
            });
        }
    }),
    tomatoSauce: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.18, .15, .09)) ] ],
                assetNames: "tomatoSauceBroken",
                stainTypes: "tomatoSauce",
                scoreMultiplier: 1.4
            });
        }
    }),
    eggplant: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .2, .1)) ] ],
                assetNames: "eggplantBroken",
                scoreMultiplier: .08
            });
        }
    }),
    banana: uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .1, .1)) ] ],
                assetNames: [ "bananaBroken1", "bananaBroken2" ],
                scoreMultiplier: .07
            });
        }
    }, 1, 3),
    iceCreamBrown: oo("Brown"),
    iceCreamMint: oo("Mint"),
    iceCreamPink: oo("Pink"),
    iceCreamYellow: oo("Yellow"),
    iceCreamBox: [ co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.25, .09, .2)) ] ],
                assetNames: [ "iceCreamBox1Broken", "iceCreamBox2Broken", "iceCreamBox3Broken" ],
                scoreMultiplier: 2.5,
                storageSpaceMultiplier: 2
            });
        }
    }), uo(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.05, .03, .2)) ] ],
                assetNames: "iceCreamStickBroken",
                scoreMultiplier: .7
            });
        }
    }, 2, 5) ],
    iceCreamOnStick1: lo("1"),
    iceCreamOnStick2: lo("2"),
    iceCreamOnStick3: lo("3"),
    oliveOilBottle: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.07, .15, .07)) ] ],
                assetNames: [ "oliveOilBottleBroken1", "oliveOilBottleBroken2", "oliveOilBottleBroken3" ],
                stainTypes: "oliveOilBottle",
                scoreMultiplier: 2
            });
        }
    }),
    oliveOilBarrel: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.4, .25, .15)) ] ],
                assetNames: "oliveOilBarrelBroken",
                stainTypes: "oliveOilBarrel",
                scoreMultiplier: 3.5,
                storageSpaceMultiplier: 2
            });
        }
    }),
    bellPepper: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .12, .1)) ] ],
                assetNames: [ "bellPepperGreenBroken", "bellPepperRedBroken", "bellPepperYellowBroken" ],
                scoreMultiplier: .12
            });
        }
    }),
    bubblegum: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.05, .02, .1)) ] ],
                assetNames: [ "bubblegumBroken", "bubblegumPieceBroken" ],
                stainTypes: "bubblegum",
                scoreMultiplier: 1.2
            });
        }
    }),
    mayonnaise: ro("mayonnaise"),
    ketchup: ro("ketchup"),
    mustard: ro("mustard"),
    pizza: co([ class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.25, .04, .25)) ] ],
                assetNames: "pizzaBoxBroken",
                scoreMultiplier: .2
            });
        }
    }, class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.25, .04, .25)) ] ],
                assetNames: "pizzaSliceBroken",
                stainTypes: "pizza",
                scoreMultiplier: .55
            });
        }
    } ]),
    steak: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.12, .05, .2)) ] ],
                assetNames: "steakBroken",
                scoreMultiplier: 40,
                storageSpaceMultiplier: 6
            }), this.isWalking = !1, this.walkT = 0, this.walkSpeed = A(.4, .6), this.prevScale = 0, 
            this.nudgeAccumulator = 0, this.lastStainPos = new s, this.pos = new s, this.alertRef = null;
        }
        destructor() {
            super.destructor(), this.alertRef && (this.alertRef.destroy(), this.alertRef = null);
        }
        loop(t, e) {
            if (super.loop(t, e), !this.isBeingCleaned) if (this.isWalking) {
                if (this.asset) {
                    this.walkT += .001 * e * this.walkSpeed;
                    const s = .5 + Math.atan(Math.sin(2 * this.walkT * Math.PI) / .1) / Math.PI;
                    this.asset.scale.z = a(1.2, .8, s), this.asset.scale.x = a(.9, 1.1, s);
                    const i = s - this.prevScale;
                    if (this.prevScale = s, i < 0) {
                        this.body.applyLocalForce(new at(0, 0, 3 * i));
                        const e = .01 * Math.cos(1e-4 * t) + .01 * Math.cos(6e-4 * t);
                        this.body.applyLocalForce(new at(.04 * e, 0, 0), new at(0, 0, .2));
                    }
                }
            } else if (this.body.position.y < .2) {
                const t = new s(0, 1, 0);
                t.applyQuaternion(Dn(this.body.quaternion));
                const i = t.dot(new s(0, 1, 0));
                if (Math.abs(i) > .999) {
                    this.isWalking = !0, this.body.material = this.game.slipperyProductMaterial, this.body.linearDamping = .999, 
                    this.body.angularDamping = .9999;
                    const t = Rn(this.body.position);
                    this.pos.copy(t);
                    const e = this.game.alerts.createStandaloneAlert();
                    this.alertRef = e.createReference(), this.alertRef.setPos(t);
                }
                if (this.body.velocity.length() < .2 && (this.nudgeAccumulator += e), this.nudgeAccumulator > 2e3) {
                    this.nudgeAccumulator = 0, this.body.wakeUp();
                    const t = new at(A(-.1, .1), 0, A(-.1, .1));
                    this.body.applyImpulse(new at(0, .02, 0), t);
                }
            }
            const i = this.createdStains[0];
            i && this.alertRef && this.alertRef.setPos(i.pos);
        }
        afterPhysicsLoop(t, e) {
            if (super.afterPhysicsLoop(t, e), !this.isBeingCleaned && this.isWalking && this.asset) {
                const t = this.asset.position.clone();
                t.y = 0;
                if (t.distanceTo(this.lastStainPos) > .3) {
                    this.lastStainPos.copy(t);
                    const [e, n] = this.body.quaternion.toAxisAngle();
                    (new i).setFromAxisAngle(new s(0, e.y, 0), n), this.createStains([ "steakTrail" ], "preventable");
                }
            }
        }
    }),
    bleachBottleBig: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .25, .1)) ] ],
                assetNames: "bleachBottleBigBroken",
                stainTypes: "bleach",
                scoreMultiplier: 2
            });
        }
    }),
    bleachBottleSmall: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .25, .1)) ] ],
                assetNames: "bleachBottleSmallBroken",
                stainTypes: "bleach",
                scoreMultiplier: 1.5
            });
        }
    }),
    smallFish: co(class extends ho {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.08, .05, .27)) ] ],
                assetNames: "fishSmallBroken",
                stainTypes: "fish",
                scoreMultiplier: 6
            });
        }
    }),
    bigFish: co(class extends ho {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .05, .27)) ] ],
                assetNames: "fishBigBroken",
                stainTypes: "fish",
                scoreMultiplier: 7
            });
        }
    }),
    swordFish: co(class extends ho {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .05, .4)) ] ],
                assetNames: "swordFishBroken",
                scoreMultiplier: 15
            });
        }
    }),
    squid: co(class extends ho {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.1, .05, .4)) ] ],
                assetNames: "squidBroken",
                scoreMultiplier: 60
            }), this.lastInkTime = -1 / 0;
            const e = this.game.alerts.createStandaloneAlert();
            this.alertRef = e.createReference();
        }
        destructor() {
            super.destructor(), this.alertRef && this.alertRef.destroy();
        }
        loop(t, e) {
            super.loop(t, e), this.alertRef.setPos(Rn(this.body.position));
        }
        onFloorCollision() {
            fa().now - this.lastInkTime > 800 && (this.lastInkTime = fa().now, this.createStains([ "squidInk" ], "preventable"));
        }
    }),
    crab: co(class extends no {
        constructor(t) {
            super(t, {
                shapes: [ [ new At(new at(.2, .08, .13)) ] ],
                assetNames: "crabBroken",
                scoreMultiplier: 4
            }), this.nudgeAccumulator = 0;
        }
        loop(t, e) {
            if (super.loop(t, e), !this.isBeingCleaned) {
                let i = !1;
                if (this.body.position.y < .2) {
                    const n = new s(0, 1, 0);
                    n.applyQuaternion(Dn(this.body.quaternion));
                    if (n.dot(new s(0, 1, 0)) > .85) i = !0, this.body.material = this.game.slipperyProductMaterial, 
                    this.body.linearDamping = .999, this.body.angularDamping = .9999; else if (this.body.velocity.length() < .2 && (this.nudgeAccumulator += e), 
                    this.nudgeAccumulator > 2e3) {
                        this.nudgeAccumulator = 0, this.body.wakeUp();
                        const o = new at(A(-.1, .1), 0, A(-.1, .1)), a = A(.02, .03);
                        this.body.applyImpulse(new at(0, a, 0), o);
                    }
                }
                if (i) {
                    const r = this.game.cleaningMachine.getPosition().sub(Rn(this.body.position));
                    if (r.length() < 4) {
                        const l = r.clone().normalize(), h = l.clone().multiplyScalar(-.18);
                        this.body.applyForce(Rn(h));
                        const c = new s(0, 0, -1), d = Dn(this.body.quaternion);
                        function u(t) {
                            let e = t.angleTo(l);
                            return t.clone().cross(l).y > 0 && (e *= -1), e;
                        }
                        d.normalize(), c.applyQuaternion(d), c.y = 0, c.normalize();
                        const p = u(c), g = u(c.clone().negate()), m = Math.abs(p) < Math.abs(g) ? p : g;
                        this.body.angularVelocity.y += m * e * .03;
                    }
                }
            }
        }
    })
};

class go {
    constructor(t, {asset: e, growSpeed: n = 1, cleanSpeed: o = 1, autoCleanSize: a = .5, maxSize: r = 1, scoreMultiplier: l = 1, storageSpaceMultiplier: h = 1, isSlippery: c = !1, isSticky: d = !1, showAlert: u = !1, onlyShowAlertWhileGrowing: p = !1, footstepStainType: g = null}) {
        this.game = t.game, this.spilledBy = t.spilledBy, this.creationTime = t.creationTime, 
        this.isGrowing = !0, this.growT = 0, this.size = 0, this.growSpeed = n, this.cleanSpeed = o, 
        this.cleanedByPlayer = null, this.isAutoCleaning = !1, this.onDespawnCbs = new Set, 
        this.autoCleanSize = a, this.maxSize = r, this.penaltyClamp = 0, this.scoreMultiplier = l, 
        this.storageSpaceMultiplier = h, this.isSlippery = c, this.isSticky = d, this.footstepStainType = g, 
        this.pos = new s, this.rot = new i, this.setTransformation(t.pos, t.rot), this.despawnTimer = 0, 
        this.destructed = !1, this.asset = null, this.loadAsset(e), this.onlyShowAlertWhileGrowing = p, 
        this.alert = null, u && (this.alert = this.game.alerts.createAlertReference(this.pos));
    }
    destructor() {
        this.destructed = !0, this.asset && fa().scene.remove(this.asset);
    }
    async loadAsset(t) {
        if (!t) return;
        const e = await fa().assets.loadGlbViaWorker(`fallenProducts/${t}.glb`);
        if (!e) throw new Error(`Failed to load fallen product asset "${t}"`);
        for (const t of C(e)) t.receiveShadow = !0;
        this.destructed || (this.asset = e, this.asset.position.copy(this.pos), this.asset.quaternion.copy(this.rot), 
        fa().scene.add(e));
    }
    setTransformation(t, e) {
        this.pos.copy(t), this.rot.copy(e), this.asset && (this.asset.position.copy(t), 
        this.asset.quaternion.copy(e));
    }
    despawn(t) {
        t && t.incrementStorageSpace(this.storageSpaceMultiplier), this.cleanedByPlayer = t, 
        this.isAutoCleaning = !0, this.destroyAlert();
    }
    destroyAlert() {
        this.alert && (this.alert.destroy(), this.alert = null);
    }
    loop(t, e) {
        if (this.isAutoCleaning) this.size -= .001 * e, this.size < 0 && (this.size = 0, 
        this.onDespawnCbs.forEach((t => t(this.cleanedByPlayer, this.pos))), this.isAutoCleaning = !1, 
        this.cleanedByPlayer = null); else {
            const t = this.game.cleaningMachine.getPosition().distanceTo(this.pos), s = this.game.cleaningMachine;
            if (t < this.getTriggerRadius()) if (s.hasStorageSpaceLeft(this.storageSpaceMultiplier)) {
                this.isGrowing = !1, this.onlyShowAlertWhileGrowing && this.destroyAlert();
                const t = o(this.game.cleaningMachine.getVelocityScalar(), 0, 1, 1, 3);
                this.size -= .001 * e * this.cleanSpeed * t, this.size < this.autoCleanSize && (fa().sfx.playSound("cleanStain", {
                    pos: this.pos
                }), this.despawn(s));
            } else s.triedCleaningTooBigItem(); else t > 9 && (this.despawnTimer += e, this.despawnTimer > 9e4 && this.despawn(null));
            this.isGrowing && (this.growT += .001 * e * this.growSpeed, this.size = (1 - 1 / (this.growT + 1)) * this.maxSize, 
            this.onlyShowAlertWhileGrowing && this.size > .65 * this.maxSize && this.destroyAlert());
        }
        this.asset && this.asset.scale.set(this.size, this.size, this.size);
    }
    getTriggerRadius() {
        return Math.max(1, this.size);
    }
    creatorIsBeingCleanedUp() {
        this.isGrowing = !1;
    }
    onDespawn(t) {
        this.onDespawnCbs.add(t);
    }
    getSpillPenalty() {
        return "player" == this.spilledBy || "preventable" == this.spilledBy ? this.scoreMultiplier : 0;
    }
    setPenaltyClamp(t) {
        this.penaltyClamp = t;
    }
    getCleanUpScore() {
        return this.scoreMultiplier - this.penaltyClamp;
    }
}

function mo(t) {
    return class extends go {
        constructor(e) {
            super(e, {
                asset: `iceCreamBall${t}Broken`,
                growSpeed: 50,
                maxSize: .1,
                scoreMultiplier: 2,
                storageSpaceMultiplier: 1.8
            });
        }
    };
}

function fo(t, e) {
    return class extends go {
        constructor(s) {
            super(s, {
                asset: t,
                growSpeed: .03,
                cleanSpeed: .15,
                autoCleanSize: .2,
                maxSize: 2,
                showAlert: !0,
                footstepStainType: e,
                scoreMultiplier: 6,
                storageSpaceMultiplier: 2.5
            });
        }
    };
}

function yo(t) {
    return class extends go {
        constructor(e) {
            super(e, {
                asset: t,
                growSpeed: .05,
                cleanSpeed: .3,
                maxSize: 4,
                scoreMultiplier: 1.3,
                showAlert: !0,
                onlyShowAlertWhileGrowing: !0,
                storageSpaceMultiplier: 1.5
            });
        }
    };
}

function wo(t, e = null) {
    return class extends go {
        constructor(s) {
            super(s, {
                asset: `${t}Stain`,
                growSpeed: 20,
                maxSize: .5,
                scoreMultiplier: 2.3,
                storageSpaceMultiplier: 2,
                footstepStainType: e,
                showAlert: Boolean(e)
            });
        }
    };
}

function vo(t) {
    return class extends go {
        constructor(e) {
            super(e, {
                asset: t,
                growSpeed: 20,
                maxSize: .2
            });
        }
    };
}

const So = {
    appleJuice: yo("appleJuiceStain"),
    cherryJuice: yo("cherryJuiceStain"),
    orangeJuice: yo("orangeJuiceStain"),
    pineappleJuice: yo("pineappleJuiceStain"),
    wine: yo("wineStain"),
    milk: yo("milkJugStain"),
    lemonJuice: class extends go {
        constructor(t) {
            super(t, {
                asset: "lemonJuiceStain",
                growSpeed: 20,
                maxSize: .5,
                scoreMultiplier: 1.9
            });
        }
    },
    egg: class extends go {
        constructor(t) {
            super(t, {
                asset: "eggStain",
                growSpeed: 50,
                maxSize: .2,
                scoreMultiplier: .45
            });
        }
    },
    pizza: class extends go {
        constructor(t) {
            super(t, {
                asset: "tomatoSauceStain",
                growSpeed: 20,
                maxSize: .5,
                scoreMultiplier: .1
            });
        }
    },
    watermelon: class extends go {
        constructor(t) {
            super(t, {
                asset: "watermelonStain",
                growSpeed: 20,
                maxSize: .5,
                scoreMultiplier: .1
            });
        }
    },
    tunaCan: class extends go {
        constructor(t) {
            super(t, {
                asset: "tunaCanStain",
                growSpeed: 20,
                maxSize: .4,
                scoreMultiplier: .35
            });
        }
    },
    tomatoSauce: class extends go {
        constructor(t) {
            super(t, {
                asset: "tomatoSauceStain",
                growSpeed: 20,
                maxSize: .5,
                scoreMultiplier: 1.9,
                storageSpaceMultiplier: 2,
                footstepStainType: "footstepRed",
                showAlert: !0
            });
        }
    },
    iceCreamBallBrown: mo("Brown"),
    iceCreamBallMint: mo("Mint"),
    iceCreamBallPink: mo("Pink"),
    iceCreamBallYellow: mo("Yellow"),
    iceCreamMeltedBrown: fo("iceCreamBrownStain", "footstepBrown"),
    iceCreamMeltedMint: fo("iceCreamMintStain", "footstepMint"),
    iceCreamMeltedPink: fo("iceCreamPinkStain", "footstepPink"),
    iceCreamMeltedYellow: fo("iceCreamYellowStain", "footstepYellow"),
    iceCreamOnStick1: fo("iceCreamOnStickStain1", "footstepPink"),
    iceCreamOnStick2: fo("iceCreamOnStickStain2", "footstepYellow"),
    iceCreamOnStick3: fo("iceCreamOnStickStain3", "footstepBrown"),
    oliveOilBarrel: class extends go {
        constructor(t) {
            super(t, {
                asset: "oliveOilBottleStain",
                growSpeed: .05,
                cleanSpeed: .3,
                maxSize: 3,
                isSlippery: !0,
                showAlert: !0,
                onlyShowAlertWhileGrowing: !0,
                scoreMultiplier: 4,
                storageSpaceMultiplier: 4
            });
        }
    },
    oliveOilBottle: class extends go {
        constructor(t) {
            super(t, {
                asset: "oliveOilBottleStain",
                growSpeed: .05,
                cleanSpeed: .7,
                maxSize: 1,
                isSlippery: !0,
                scoreMultiplier: 2,
                storageSpaceMultiplier: 2
            });
        }
    },
    bubblegum: class extends go {
        constructor(t) {
            super(t, {
                asset: "bubblegumStain",
                growSpeed: 20,
                maxSize: .3,
                autoCleanSize: .04,
                cleanSpeed: .04,
                isSticky: !0,
                scoreMultiplier: 2.9,
                storageSpaceMultiplier: 1.5
            });
        }
    },
    mayonnaise: wo("mayonnaise", "footstepWhite"),
    ketchup: wo("ketchup", "footstepRed"),
    mustard: wo("mustard", "footstepYellow"),
    steakTrail: class extends go {
        constructor(t) {
            super(t, {
                asset: "meatStain",
                growSpeed: 20,
                maxSize: .2,
                storageSpaceMultiplier: .9
            });
        }
    },
    bleach: class extends go {
        constructor(t) {
            super(t, {
                asset: "bleachStain",
                growSpeed: .05,
                cleanSpeed: .7,
                maxSize: 1.7,
                showAlert: !0,
                onlyShowAlertWhileGrowing: !0,
                scoreMultiplier: 10,
                storageSpaceMultiplier: 6
            });
        }
    },
    fish: class extends go {
        constructor(t) {
            super(t, {
                asset: "fishStain",
                growSpeed: 20,
                maxSize: .5,
                isSlippery: !0
            });
        }
    },
    squidInk: class extends go {
        constructor(t) {
            super(t, {
                asset: "squidInkStain",
                growSpeed: 20,
                maxSize: .5,
                storageSpaceMultiplier: .05
            });
        }
    },
    footstepBrown: vo("footstepBrownStain"),
    footstepMint: vo("footstepMintStain"),
    footstepPink: vo("footstepPinkStain"),
    footstepRed: vo("footstepRedStain"),
    footstepYellow: vo("footstepYellowStain"),
    footstepWhite: vo("footstepWhiteStain")
};

class bo {
    constructor(t, e) {
        this.coinsManager = t, this.cleaningMachine = e, this.el = document.createElement("div"), 
        this.el.classList.add("corner-score-container", "hidden"), this.contentEl = document.createElement("div"), 
        this.contentEl.classList.add("content"), this.el.appendChild(this.contentEl);
        const s = (t, e) => {
            const s = document.createElement("div");
            s.classList.add("score-item"), e && s.classList.add(e), this.contentEl.appendChild(s);
            const i = document.createElement("div");
            i.classList.add("score-icon"), t && i.classList.add("masked-image", t), s.appendChild(i);
            const n = document.createElement("div");
            return s.appendChild(n), {
                el: s,
                iconEl: i,
                valueEl: n
            };
        }, {valueEl: i} = s("storage-icon", "storage-score-item"), n = document.createElement("div");
        n.classList.add("storage-bar"), i.appendChild(n), this.storageValueEl = document.createElement("div"), 
        this.storageValueEl.classList.add("value"), n.appendChild(this.storageValueEl);
        const {valueEl: o, el: a} = s("wallet-icon");
        this.coinsEl = o, this.coinsScoreEl = a;
        const {el: r, valueEl: l} = s();
        this.storageCoinsValueEl = l, this.coinMultiplierEl = document.createElement("span"), 
        this.coinMultiplierEl.textContent = "x2", r.appendChild(this.coinMultiplierEl), 
        this.boundSetStorageCoins = this.setStorageCoins.bind(this), this.boundSetCoins = this.setCoins.bind(this), 
        t.onStorageCoinCountChange(this.boundSetStorageCoins), t.onCoinCountChange(this.boundSetCoins), 
        this.boundSetGarbageStorage = this.setGarbageStorage.bind(this), e.onStorageSpaceChanged(this.boundSetGarbageStorage), 
        this.multiplierVisible = !1, this.updateMultiplierVisibility();
    }
    destructor() {
        this.coinsManager.removeOnStorageCoinCountChange(this.boundSetStorageCoins), this.coinsManager.removeOnCoinCountChange(this.boundSetCoins), 
        this.cleaningMachine.removeOnStorageSpaceChanged(this.boundSetGarbageStorage);
    }
    setVisibility(t) {
        this.el.classList.toggle("hidden", !t);
    }
    setGarbageStorage(t) {
        this.storageValueEl.style.width = 100 * t + "%";
    }
    setStorageFlashing(t) {
        this.storageValueEl.classList.toggle("flashing-red", t);
    }
    flashCoins() {
        this.coinsScoreEl.animate([ {
            filter: "sepia(0%) saturate(5000%) hue-rotate(359deg) brightness(80%)",
            offset: 0
        }, {
            filter: "sepia(100%) saturate(5000%) hue-rotate(359deg) brightness(80%)",
            offset: .01
        }, {
            filter: "sepia(100%) saturate(5000%) hue-rotate(359deg) brightness(80%)",
            offset: .5
        }, {
            filter: "sepia(0%) saturate(5000%) hue-rotate(359deg) brightness(80%)",
            offset: .51
        } ], {
            duration: 150,
            iterations: 5
        });
    }
    setStorageCoins(t) {
        this.storageCoinsValueEl.textContent = t > 0 ? "+" + this.getScoreStr(t) : "", this.updateMultiplierVisibility();
    }
    setMultiplierVisibility(t) {
        this.multiplierVisible = t, this.updateMultiplierVisibility();
    }
    updateMultiplierVisibility() {
        const t = this.multiplierVisible && "" != this.storageCoinsValueEl.textContent;
        this.coinMultiplierEl.style.display = t ? "" : "none";
    }
    setCoins(t) {
        this.coinsEl.textContent = this.getScoreStr(t);
    }
    getScoreStr(t) {
        let e = String(t);
        const s = e.indexOf(".");
        if (-1 == s) e += ".00"; else {
            let t = e.slice(s + 1);
            t = t.padEnd(2, "0"), t = t.slice(0, 2);
            const i = e.slice(0, s);
            e = i + "." + t;
        }
        return e;
    }
}

function xo(t) {
    return Math.pow(t, 4);
}

function Co(t) {
    return 1 - Math.pow(1 - t, 4);
}

class Mo {
    constructor(t, e, n) {
        this.game = t, this.scene = e, this.path = n, this.horizontalSpeed = 1 / Math.abs(this.path.minX - this.path.maxX), 
        this.verticalSpeed = 1 / Math.abs(this.path.minZ - this.path.maxZ), this.walkCycleT = 0, 
        this.currentYRot = new i, this.isLookingAtPlayer = !1, this.didSpillProductsDuringLook = !1, 
        this.lastHitSfxTime = -1 / 0, this.obj = new x, e.add(this.obj), this.body = new It({
            mass: 1,
            type: It.KINEMATIC
        }), this.boundOnCollide = this.onCollide.bind(this), this.body.addEventListener("collide", this.boundOnCollide);
        const o = new hs(.3, .3, .8, 12);
        this.body.addShape(o, new at(0, -.1, 0));
        const a = new ls(.3);
        this.body.addShape(a, new at(0, .4, 0)), this.body.angularFactor = new at(0, 0, 0), 
        this.game.physicsWorld.addBody(this.body), this.currentWalkPosition = A(0, 4), this.currentWalkTarget = 0, 
        this.currentWalkDirection = 0, this.nextTargetChangeTime = 1 / 0, this.prevOffsetPosition = 0, 
        this.steppedInStainType = null, this.createdFootStepStainCount = 0, this.lastFootstepSpawnPos = new s, 
        this.destructed = !1, this.loadAsset();
    }
    async loadAsset() {
        const t = await fa().assets.loadGlbViaWorker("customer.glb");
        if (!this.destructed) {
            if (!t) throw new Error("failed to load cleaning machine asset");
            for (const e of C(t)) e.castShadow = !0, e.receiveShadow = !0;
            this.obj.add(t);
        }
    }
    destructor() {
        this.destructed || (this.body.removeEventListener("collide", this.boundOnCollide), 
        this.game.physicsWorld.removeBody(this.body), this.scene.remove(this.obj), this.destructed = !0);
    }
    loop(t, e) {
        let n = !1;
        if (fa().upgradeManager.getUpgradeLevel("customerCaution") > 0) {
            this.game.cleaningMachine.getPosition().distanceTo(this.obj.position) < 2.5 && (n = !0);
        }
        if (!n) {
            let t;
            t = Math.floor(this.currentWalkPosition) % 2 == 0 ? this.horizontalSpeed : this.verticalSpeed, 
            this.currentWalkPosition += e * t * this.currentWalkDirection * .001, this.currentWalkPosition = L(this.currentWalkPosition, 4);
        }
        const o = L(this.currentWalkPosition - this.currentWalkTarget, 4);
        if (o > 2 != this.prevOffsetPosition > 2 && (o < 1 || o > 3) && this.stopWalkingForRandomDuration(), 
        this.prevOffsetPosition = o, 0 == this.currentWalkDirection && t > this.nextTargetChangeTime && (this.currentWalkDirection = Math.random() > .5 ? -1 : 1, 
        this.isLookingAtPlayer = !1, this.didSpillProductsDuringLook = !1, this.currentWalkTarget > .5 && this.currentWalkTarget < 2.5 ? this.currentWalkTarget = A(3.1, 3.9) : this.currentWalkTarget = A(1.1, 1.9), 
        this.game.customersShoulSpillProducts)) {
            const t = this.game.getClosestShelf(Rn(this.body.position));
            if (t) {
                let e;
                e = t.body.position.x - this.body.position.x > 0 ? "left" : "right", t.spillProducts(5, "customer", e);
            }
        }
        let r, l, h = this.currentWalkPosition;
        Math.floor(this.currentWalkPosition) % 2 == 0 ? h < 1 ? (r = a(this.path.minX, this.path.maxX, h), 
        l = this.path.minZ) : (h -= 2, r = a(this.path.maxX, this.path.minX, h), l = this.path.maxZ) : h < 3 ? (h -= 1, 
        r = this.path.maxX, l = a(this.path.minZ, this.path.maxZ, h)) : (h -= 3, r = this.path.minX, 
        l = a(this.path.maxZ, this.path.minZ, h)), this.body.position.set(r, .5, l), this.obj.position.set(r, 0, l);
        let c = 0;
        if (this.isLookingAtPlayer || n) {
            const t = this.game.cleaningMachine.getPosition();
            t.sub(this.obj.position), t.y = 0;
            const e = new s(0, 0, -1);
            let i = t.angleTo(e);
            t.cross(e).y > 0 && (i *= -1), c = i + .5 * Math.PI;
        } else c = -Math.floor(this.currentWalkPosition) * Math.PI * .5, 0 == this.currentWalkDirection ? c -= .5 * Math.PI : this.currentWalkDirection < 0 && (c += Math.PI);
        const d = new i;
        d.setFromAxisAngle(new s(0, 1, 0), c);
        const u = 0 != this.currentWalkDirection && !n || d.angleTo(this.currentYRot) > .4;
        (u || this.walkCycleT > 0) && (this.walkCycleT += .002 * e, this.walkCycleT > 1 && (this.walkCycleT = u ? L(this.walkCycleT, 1) : 0));
        const p = Math.abs(Math.sin(this.walkCycleT * Math.PI * 2));
        this.currentRotAngle = a(this.currentRotAngle, c, .1 * p), this.obj.position.y += .06 * p, 
        this.currentYRot.slerp(d, .1 * p), this.obj.quaternion.copy(this.currentYRot);
        const g = new i;
        if (g.setFromAxisAngle(new s(1, 0, 0), .1 * Math.sin(this.walkCycleT * Math.PI)), 
        this.obj.quaternion.multiply(g), this.steppedInStainType) {
            const t = this.obj.position;
            t.distanceTo(this.lastFootstepSpawnPos) > .8 && (this.game.createStain(this.steppedInStainType, t.clone(), new i, "preventable"), 
            this.lastFootstepSpawnPos.copy(t), this.createdFootStepStainCount++, this.createdFootStepStainCount > 10 && (this.steppedInStainType = null));
        } else for (const e of this.game.stains) {
            if (!e.footstepStainType) continue;
            if (t - e.creationTime < 1e4) continue;
            if (e.pos.distanceTo(this.obj.position) < e.getTriggerRadius()) {
                this.steppedInStainType = e.footstepStainType, this.createdFootStepStainCount = 0, 
                this.lastFootstepSpawnPos.copy(this.obj.position);
                break;
            }
        }
    }
    stopWalkingForRandomDuration(t = !0) {
        this.currentWalkDirection = 0;
        let e = A(t ? 2 : 0, 4);
        e *= 1e3, e *= this.game.customers.size, this.nextTargetChangeTime = fa().now + e, 
        this.currentWalkTarget = this.currentWalkPosition;
    }
    onCollide(t) {
        if (t.contact && (t.body == this.game.cleaningMachine.body || t.target == this.game.cleaningMachine.body)) {
            this.isLookingAtPlayer = !0, this.stopWalkingForRandomDuration();
            const e = Math.abs(this.game.cleaningMachine.body.velocity.dot(t.contact.ni));
            if (fa().now - this.lastHitSfxTime > 500 && (this.lastHitSfxTime = fa().now, fa().sfx.playSound("customerHit", {
                pos: this.obj.position,
                volume: o(e, 1.8, 3, .2, .9)
            })), !this.didSpillProductsDuringLook) {
                let t = o(e, 1.2, 5, 1, 4, !0);
                if (t /= a(1, 4, fa().upgradeManager.getUpgradeValue("safetyGuard")), t = Math.floor(t), 
                t > 0) {
                    this.didSpillProductsDuringLook = !0;
                    const e = this.obj.position.clone();
                    e.y = 1;
                    for (let i = 0; i < t; i++) {
                        const t = new s(A(-1, 1), 1, A(-1, 1)), i = this.game.getRandomProductType();
                        i && this.game.createFallenProduct(i, e, t, "player");
                    }
                }
            }
        }
    }
}

class Po {
    constructor({className: t = ""} = {}) {
        this.el = document.createElement("dialog"), t && this.el.classList.add(t), this.el.addEventListener("close", (() => {
            this.destructor();
        })), this.el.addEventListener("click", (t => {
            t.target == this.el && this.el.close();
        })), document.body.appendChild(this.el), this.el.showModal();
        const e = document.createElement("button");
        e.classList.add("close-button"), e.title = "Close Dialog", e.addEventListener("click", (() => {
            this.close();
        })), this.el.appendChild(e), this.onCloseCbs = new Set;
    }
    destructor() {
        this.onCloseCbs.forEach((t => t())), document.body.removeChild(this.el);
    }
    close() {
        this.el.close();
    }
    onClose(t) {
        this.onCloseCbs.add(t);
    }
}

class Ao {
    constructor({cb: t = (() => {})} = {}) {
        this.el = document.createElement("button"), this.el.classList.add("money-button"), 
        this.el.addEventListener("click", t);
        const e = document.createElement("span");
        e.classList.add("money-icon"), this.el.appendChild(e), this.textEl = document.createElement("span"), 
        this.textEl.classList.add("text"), this.el.appendChild(this.textEl);
    }
    setText(t) {
        this.textEl.textContent = t;
    }
    get disabled() {
        return this.el.disabled;
    }
    set disabled(t) {
        this.el.disabled = t;
    }
}

class Eo extends Po {
    constructor() {
        super({
            className: "upgrades-dialog"
        }), this.purchasedItem = !1, fa().adLad.canShowBannerAd && this.el.classList.add("with-banner");
        const t = document.createElement("div");
        t.classList.add("upgrades-dialog-content"), this.el.appendChild(t);
        const e = document.createElement("h1");
        e.textContent = "Upgrades", t.appendChild(e), this.upgradesListEl = document.createElement("ul"), 
        this.upgradesListEl.classList.add("upgrades-list"), t.appendChild(this.upgradesListEl), 
        this.createdItems = new Map, this.updateList(), this.boundUpdateList = this.updateList.bind(this), 
        fa().upgradeManager.onUpgradesListChange(this.boundUpdateList);
        const s = fa().bannerAdManager.requestDialogBannerEl("upgrades");
        s && this.el.appendChild(s);
    }
    destructor() {
        super.destructor(), fa().upgradeManager.removeOnUpgradesListChange(this.boundUpdateList);
    }
    updateList() {
        for (const t of fa().upgradeManager.listUpgrades()) {
            let e = this.createdItems.get(t.type);
            if (!e) {
                const s = document.createElement("li");
                this.upgradesListEl.appendChild(s);
                const i = document.createElement("div");
                i.classList.add("upgrade-icon-container"), s.appendChild(i);
                const n = document.createElement("div");
                n.classList.add("upgrade-icon", "masked-image"), k(n, `static/icons/upgrades/${t.type}.svg`), 
                i.appendChild(n);
                const o = document.createElement("section");
                o.classList.add("upgrade-description"), s.appendChild(o);
                const a = document.createElement("h3");
                o.appendChild(a);
                const r = document.createElement("p");
                r.textContent = t.config.description, o.appendChild(r);
                const l = new Ao({
                    cb: () => {
                        this.purchasedItem = !0, this.el.close(), fa().upgradeManager.purchaseUpgrade(t.type);
                    }
                });
                s.appendChild(l.el), e = {
                    listEl: s,
                    purchaseButton: l,
                    headerEl: a,
                    available: !1
                }, this.createdItems.set(t.type, e);
            }
            let s = t.config.title;
            t.level >= 0 && (s += " Level " + t.level), e.headerEl.textContent = s, e.purchaseButton.setText(-1 == t.price ? "Purchased" : String(t.price)), 
            e.available = t.available;
        }
        for (const t of this.createdItems.values()) t.purchaseButton.disabled = !t.available, 
        t.listEl.classList.toggle("unavailable", !t.available);
    }
}

class Lo {
    constructor() {
        this.el = document.createElement("div"), this.el.classList.add("corner-buttons-container", "hidden"), 
        this.upgradesDialog = null, this.upgradesButton = this.addButton({
            title: "Upgrades",
            icon: "upgrade.svg",
            onClick: () => {
                if (this.upgradesDialog) return;
                fa().adLad.gameplayStop();
                const t = new Eo;
                this.upgradesDialog = t, this.updateUpgradeAvailable(), t.onClose((() => {
                    this.upgradesDialog = null, this.updateUpgradeAvailable();
                    const e = fa().adLad;
                    (async () => {
                        t.purchasedItem || "coolmathgames" == e.activePlugin || await e.showFullScreenAd(), 
                        e.gameplayStart();
                    })();
                }));
            }
        }), fa().adLad.onNeedsPauseChange((t => {
            t && this.upgradesDialog && this.upgradesDialog.close();
        })), this.upgradesTutorialEl = document.createElement("div"), this.upgradesTutorialEl.classList.add("tutorial-arrow"), 
        this.upgradesButton.el.appendChild(this.upgradesTutorialEl), fa().upgradeManager.onUpgradesListChange((() => {
            this.updateUpgradeAvailable();
        })), this.updateUpgradeAvailable();
        const t = fa().sfx;
        this.sfxButton = this.addButton({
            title: "Toggle Sound Effects",
            icon: "sfx.svg",
            onClick: () => {
                t.setMutedSettings(!t.settingsMuted), T("sfxMuted", String(t.settingsMuted)), this.updateMutedButton();
            }
        }), t.setMutedSettings("true" == B("sfxMuted")), this.updateMutedButton();
        const e = this.addButton({
            title: "Toggle Rotating Camera",
            icon: "cameraFollowing.svg",
            onClick: () => {
                const t = fa().cam;
                t.useFollowingCamera = !t.useFollowingCamera, this.updateButtonIcon(e, t.useFollowingCamera ? "cameraFollowing.svg" : "cameraStill.svg");
            }
        });
    }
    setVisibility(t) {
        this.el.classList.toggle("hidden", !t);
    }
    addButton({title: t, icon: e, onClick: s}) {
        const i = document.createElement("button");
        i.title = t;
        const n = document.createElement("div");
        n.classList.add("button-image", "masked-image"), i.appendChild(n), this.el.appendChild(i), 
        i.addEventListener("click", s);
        const o = {
            el: i,
            imageEl: n
        };
        return this.updateButtonIcon(o, e), o;
    }
    updateButtonIcon(t, e) {
        k(t.imageEl, `static/icons/${e}`);
    }
    updateMutedButton() {
        const t = fa().sfx.settingsMuted;
        this.updateButtonIcon(this.sfxButton, t ? "sfxMuted.svg" : "sfx.svg");
    }
    updateUpgradeAvailable() {
        const t = fa().upgradeManager, e = 0 == t.getUpgradeLevel("storeShelves"), s = t.anyUpgradeAvailable && !this.upgradesDialog;
        this.upgradesTutorialEl.style.display = s && e ? "" : "none", this.upgradesButton.el.classList.toggle("shake-animation", s && !e), 
        this.upgradesButton.el.classList.toggle("upgrade-available-notification", s);
    }
}

class ko {
    constructor(t, {once: e = !1} = {}) {
        this.once = e, this.promiseFn = t, this._queue = [], this._isEmptyingQueue = !1, 
        this.hasRun = !1, this._onceReturnValue = void 0, this._onFinishCbs = new Set;
    }
    async run(...t) {
        if (this.hasRun && this.once) return this._onceReturnValue;
        const e = new Promise((e => this._queue.push({
            resolve: e,
            args: t
        })));
        return this._emptyQueue(), await e;
    }
    async _emptyQueue() {
        if (!this._isEmptyingQueue) {
            for (this._isEmptyingQueue = !0; this._queue.length > 0; ) {
                if (this.once && this.hasRun) {
                    const t = this._onceReturnValue;
                    this._queue.forEach((e => e.resolve(t))), this._queue = [];
                    break;
                }
                const t = this._queue;
                this._queue = [];
                const e = t[t.length - 1];
                if (!e) throw new Error("Assertion failed, queue is empty.");
                this._isEmptyingQueue = !0;
                const s = await this.promiseFn(...e.args);
                this._isEmptyingQueue = !1, this.hasRun = !0, this._onFinishCbs.forEach((t => t())), 
                this._onFinishCbs.clear(), this.once && (this._onceReturnValue = s);
                for (const {resolve: e} of t) e(s);
            }
            this._isEmptyingQueue = !1;
        }
    }
    async waitForFinish() {
        if (this.hasRun) return;
        const t = new Promise((t => this._onFinishCbs.add(t)));
        await t;
    }
    async waitForFinishIfRunning() {
        if (!this._isEmptyingQueue) return;
        const t = new Promise((t => this._onFinishCbs.add(t)));
        await t;
    }
}

class To {
    constructor(t, e, i) {
        this.asset = t, this.fromPos = e.clone(), this.fromPos.y = .5, this.toPos = i.clone(), 
        this.toPos.y = 1, this.axis = new s(A(-1, 1), A(-1, 1), A(-1, 1)), this.axis.normalize(), 
        this.angle = Math.random() * Math.PI, this.t = 0, this.updatePosition();
    }
    destructor() {
        this.asset.parent && this.asset.parent.remove(this.asset);
    }
    loop(t, e) {
        this.t += .002 * e, this.updatePosition();
    }
    updatePosition() {
        let t = 1 - Math.pow(2 * this.t - 1, 2);
        t *= 1.3, this.asset.position.lerpVectors(this.fromPos, this.toPos, this.t), this.asset.position.y += t;
        const e = this.angle + 3 * this.t;
        this.asset.quaternion.setFromAxisAngle(this.axis, e);
    }
    needsDestruction() {
        return this.t > 1;
    }
}

class Bo {
    constructor() {
        this.destroyed = !1, this.onDestroyCbs = new Set, this.onPosChangeCbs = new Set, 
        this.pos = new s;
    }
    destroy() {
        this.destroyed || (this.destroyed = !0, this.onDestroyCbs.forEach((t => t())));
    }
    onDestroy(t) {
        this.onDestroyCbs.add(t);
    }
    setPos(t) {
        this.pos.copy(t), this.onPosChangeCbs.forEach((t => t()));
    }
    onPosChange(t) {
        this.onPosChangeCbs.add(t);
    }
}

class zo {
    constructor({priority: t = 0, flashing: e = !1} = {}) {
        this.priority = t, this.hasValidAveragePos = !1, this.averagePos = new s, this.smoothPos = new s, 
        this.creationTime = fa().now, this.el = document.createElement("div"), this.el.classList.add("alert-container", "masked-image"), 
        this.el.classList.toggle("flashing-red", e), this.obj = new r, this.obj.name = "Alert", 
        this.references = new Set, this.isAnimatingOut = !1, this.animateOutStartTime = 0, 
        this.destroyed = !1, this.destructed = !1, this.onDestructedCbs = new Set, fa().sfx.playSound("alert"), 
        this.loadAsset();
    }
    destructor() {
        this.destructed || (this.destructed = !0, this.onDestructedCbs.forEach((t => t())));
    }
    async loadAsset() {
        if (this.destructed) return;
        const t = await fa().assets.loadGlbViaWorker("alert.glb");
        if (!t) throw new Error("Failed to load alert.glb");
        this.obj.add(t);
    }
    loop(t, e) {
        this.smoothPos.lerp(this.averagePos, .03);
        const i = (t - this.creationTime) / 1e3;
        this.obj.position.copy(this.smoothPos);
        const n = 1 - 1 / (30 * i + 1);
        this.obj.position.y = a(.2, 1, n), this.obj.position.y += .06 * Math.cos(4 * i);
        const o = 1 - Co(P(.5 * i));
        if (this.obj.rotation.z = Math.cos(20 * i) * o, this.isAnimatingOut) {
            const e = (t - this.animateOutStartTime) / 300;
            this.obj.scale.setScalar(1 - xo(e)), e > 1 && (this.destroyed = !0);
        } else this.obj.scale.setScalar(n);
        const r = fa().cam.worldToScreenPos(this.obj.position);
        r.z = 0;
        const l = new s(0, -1, 0);
        let h = r.angleTo(l);
        r.cross(l).z < 0 && (h *= -1);
        const c = h / Math.PI * 180;
        this.el.style.setProperty("--angle", `${c}deg`);
    }
    createReference() {
        const t = new Bo;
        return this.references.add(t), t.onDestroy((() => {
            this.references.delete(t), 0 == this.references.size && (this.isAnimatingOut = !0, 
            this.animateOutStartTime = fa().now), this.computeAveragePos();
        })), t.onPosChange((() => {
            this.computeAveragePos();
        })), t;
    }
    setPriorityVisibility(t) {
        this.obj.visible = t, this.el.style.display = t ? "" : "none";
    }
    computeAveragePos() {
        if (this.references.size > 0) {
            this.averagePos.set(0, 0, 0);
            for (const t of this.references) this.averagePos.add(t.pos);
            this.averagePos.divideScalar(this.references.size), this.hasValidAveragePos || (this.hasValidAveragePos = !0, 
            this.smoothPos.copy(this.averagePos));
        }
    }
    onDestructed(t) {
        this.onDestructedCbs.add(t);
    }
}

class No {
    constructor(t) {
        this.scene = t, this.el = document.createElement("div"), this.el.classList.add("alerts-compass"), 
        fa().gameContainer.appendChild(this.el), this.referencedAlerts = new Set, this.standaloneAlerts = new Set;
    }
    createAlert(t) {
        const e = new zo(t);
        return this.scene.add(e.obj), this.el.appendChild(e.el), e;
    }
    createAlertReference(t) {
        let e = 1 / 0, s = null;
        for (const i of this.referencedAlerts) {
            if (i.isAnimatingOut || i.destroyed) continue;
            const n = i.averagePos.distanceTo(t);
            n < e && (e = n, s = i);
        }
        let i = null;
        i = s && e < 3.5 ? s : this.createAlert(), this.referencedAlerts.add(i), this.updatePriorityVisibilities();
        const n = i.createReference();
        return n.setPos(t), n;
    }
    createStandaloneAlert(t) {
        const e = this.createAlert(t);
        return this.standaloneAlerts.add(e), this.updatePriorityVisibilities(), e;
    }
    * getAlerts() {
        yield* this.referencedAlerts, yield* this.standaloneAlerts;
    }
    getAlertCount() {
        return this.referencedAlerts.size + this.standaloneAlerts.size;
    }
    loop(t, e) {
        for (const s of this.getAlerts()) s.loop(t, e), s.destroyed && this.removeAlert(s);
    }
    updatePriorityVisibilities() {
        let t = -1 / 0;
        for (const e of this.getAlerts()) t = Math.max(t, e.priority);
        for (const e of this.getAlerts()) e.setPriorityVisibility(e.priority == t);
    }
    removeAlert(t) {
        t.destructor(), this.referencedAlerts.delete(t), this.standaloneAlerts.delete(t), 
        this.scene.remove(t.obj), this.el.removeChild(t.el), this.updatePriorityVisibilities();
    }
}

class Fo {
    constructor(t) {
        this.el = document.createElement("div"), this.el.classList.add("tutorial-keyboard"), 
        document.body.appendChild(this.el);
        this.addKey("space").classList.toggle("active", "space" == t);
        const e = [ this.addArrowKey("up", 0, 180), this.addArrowKey("left", -.1, 90), this.addArrowKey("down", 0, 0), this.addArrowKey("right", .1, -90) ];
        for (const s of e) s.classList.toggle("active", "arrows" == t);
        for (let t = 0; t < 11; t++) this.addKey("i" + t);
    }
    dismiss() {
        this.el.classList.add("hidden"), setTimeout((() => {
            this.el.remove();
        }), 1e3);
    }
    addKey(t) {
        const e = document.createElement("div");
        return e.classList.add("keyboard-key"), e.style.setProperty("grid-area", t), this.el.appendChild(e), 
        e;
    }
    addArrowKey(t, e, s) {
        const i = this.addKey(t);
        i.style.setProperty("animation-delay", e + "s");
        const n = document.createElement("div");
        return n.classList.add("keyboard-key-arrow", "masked-image"), n.style.transform = `rotate(${s}deg)`, 
        i.appendChild(n), i;
    }
}

class Io extends Po {
    constructor({title: t, text: e}) {
        super({
            className: "alert-dialog"
        });
        const s = document.createElement("h1");
        s.textContent = t, this.el.appendChild(s);
        const i = document.createElement("p");
        i.textContent = e, this.el.appendChild(i);
        const n = document.createElement("div");
        n.classList.add("buttons-container"), this.el.appendChild(n);
        const o = document.createElement("button");
        o.textContent = "Ok", n.appendChild(o), o.addEventListener("click", (() => {
            this.close();
        }));
    }
}

class _o {
    constructor({icon: t, onClick: e}) {
        this.el = document.createElement("div"), this.el.classList.add("rewarded-upgrade-container"), 
        this.buttonEl = document.createElement("button"), this.buttonEl.classList.add("rewarded-upgrade-button"), 
        this.buttonEl.addEventListener("click", (() => {
            e();
        })), this.el.appendChild(this.buttonEl);
        for (let t = 0; t < 2; t++) {
            const e = document.createElement("div");
            e.classList.add("shine", "shine-" + t), this.buttonEl.appendChild(e);
        }
        const s = document.createElement("div");
        s.classList.add("reward-icons"), this.buttonEl.appendChild(s);
        const i = document.createElement("div");
        i.classList.add("button-image", "masked-image", "reward-icon"), k(i, `static/icons/rewardedUpgrades/${t}.svg`), 
        s.appendChild(i);
        const n = document.createElement("div");
        n.classList.add("button-image", "masked-image", "play-button"), k(n, "static/icons/rewardedUpgrades/playButton.svg"), 
        s.appendChild(n);
    }
    destructor() {
        this.el.remove();
    }
}

class Ro {
    constructor(t, e) {
        this.rewardConfigs = e, this.parentEl = t, this.nextRewardTimer = 0, this.currentButton = null, 
        this.currentConfig = null, this.timer = 0;
    }
    loop(t, e) {
        this.currentConfig && this.currentConfig.available && !this.currentConfig.available() && (this.currentConfig = null), 
        this.currentConfig || this.pickRandomConfig();
        const s = fa().adLad;
        this.timer += e, !this.currentButton && s.canShowRewardedAd ? this.timer > 6e4 && this.currentConfig && (this.timer = 0, 
        this.currentButton = new _o({
            icon: this.currentConfig.icon,
            onClick: () => {
                const t = this.currentConfig;
                (async () => {
                    const e = await s.showRewardedAd();
                    if (t && e.didShowAd) t.receiveReward(), this.pickRandomConfig(); else if ("adblocker" == e.errorReason) new Io({
                        title: "The ad was blocked",
                        text: "Please disable your adblocker to receive your reward"
                    }); else if ("user-dismissed" == e.errorReason) ; else if ("no-ad-available" == e.errorReason) {
                        new Io({
                            title: "No ad available",
                            text: "There is no ad available, but you'll receive your reward anyway!"
                        }).onClose((() => {
                            t && t.receiveReward(), this.pickRandomConfig();
                        }));
                    } else new Io({
                        title: "An unknown error occurred",
                        text: "Please try again"
                    });
                })();
            }
        }), this.parentEl.appendChild(this.currentButton.el)) : this.timer > 3e4 && this.pickRandomConfig();
    }
    pickRandomConfig() {
        this.currentButton && (this.currentButton.destructor(), this.currentButton = null, 
        this.timer = 0);
        const t = this.rewardConfigs.filter((t => !t.available || t.available())), e = M(t);
        this.currentConfig = e || null;
    }
}

class Do {
    constructor(t) {
        this.obj = new r, this.obj.position.copy(t), this.asset = null, this.isHiding = !1, 
        this.hidden = !1, this.hideT = 0, this.loadAsset();
    }
    async loadAsset() {
        if (this.asset = await fa().assets.loadGlbViaWorker("titleScreenStain.glb", {
            packageName: "initial"
        }), !this.asset) throw new Error("TitleScreenStain asset is not an object");
        this.isHiding || this.obj.add(this.asset);
    }
    hide() {
        this.isHiding = !0;
    }
    loop(t, e) {
        if (this.isHiding && !this.hidden) {
            this.hideT += .001 * e;
            const t = 1 - xo(this.hideT);
            this.obj.scale.setScalar(t), this.hideT > 1 && (this.hidden = !0, this.asset && this.obj.remove(this.asset));
        }
    }
}

class jo {
    constructor(t, e) {
        this.mainInstance = t, this.scene = e, this.physicsWorld = new bn, this.physicsWorld.allowSleep = !0;
        const i = new ps;
        this.physicsWorld.solver = new ys(i), this.physicsWorld.gravity.set(0, -20, 0), 
        this.arrowsTutorialKeyboard = null, this.isShowingTitleScreen = !0, this.isShowingInitialCamera = !0, 
        this.initialCameraShowDuration = 0, this.boostTutorialDismissed = "true" == B("boostTutorialKeyboardDismissed"), 
        this.boostTutorialKeyboard = null, this.updateNeedsBoostTutorialKeyboard(), this.cornerButtons = new Lo, 
        t.gameContainer.appendChild(this.cornerButtons.el), this.alerts = new No(e), this.rewardedCoinMultiplierTimer = 0, 
        this.rewardManager = new Ro(this.mainInstance.gameContainer, [ {
            icon: "coinMultiplier",
            receiveReward: () => {
                this.cornerScore.setMultiplierVisibility(!0), this.rewardedCoinMultiplierTimer = 12e4;
            },
            available: () => !this.rewardedCoinMultiplierActive
        }, {
            icon: "30coins",
            receiveReward: async () => {
                this.mainInstance.coins.addRewardedCoins(30);
            },
            available: () => fa().upgradeManager.getUpgradeLevel("storeShelves") < 4
        }, {
            icon: "200coins",
            receiveReward: async () => {
                this.mainInstance.coins.addRewardedCoins(200);
            },
            available: () => fa().upgradeManager.getUpgradeLevel("storeShelves") >= 4
        } ]), this.customersShoulSpillProducts = !1, this.waveT = 0, this.titleScreenStain = new Do(new s(4, 0, 2.3)), 
        this.scene.add(this.titleScreenStain.obj);
        const n = new d;
        n.intensity = .6, n.position.set(10, 10, -10), n.lookAt(0, 0, 0), e.add(n), this.cleaningMachineMaterial = new rs("cleaning machine");
        const o = new rs("floor");
        this.productMaterial = new rs("product"), this.slipperyProductMaterial = new rs("slippery product");
        const a = new as(o, this.slipperyProductMaterial, {
            friction: 0,
            restitution: .3,
            contactEquationStiffness: 1e8,
            contactEquationRelaxation: 3
        });
        this.physicsWorld.addContactMaterial(a);
        const r = {
            friction: 0,
            restitution: .3,
            contactEquationStiffness: 1e8,
            contactEquationRelaxation: 3
        }, l = [ o, this.productMaterial, this.slipperyProductMaterial ];
        for (const t of l) {
            const e = new as(t, this.cleaningMachineMaterial, r);
            this.physicsWorld.addContactMaterial(e);
        }
        this.floorBody = new It({
            mass: 0,
            material: o
        }), this.floorBody.addShape(new cs), this.floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0), 
        this.physicsWorld.addBody(this.floorBody);
        const h = new z;
        h.intensity = .3, e.add(h), this.staticAssets = null, this.staticBodies = [], this.cleaningMachine = new eo(this, e), 
        this.shelves = [], this.dumpsterPositions = [], this.garbageBagAsset = null, this.garbageBags = new Set, 
        this.fallenProducts = new Set, this.stains = new Set, this.customers = new Set, 
        this.cornerScore = new bo(this.mainInstance.coins, this.cleaningMachine), t.gameContainer.appendChild(this.cornerScore.el), 
        this.loadLevelInstance = new ko((async () => {
            await this.loadLevel();
        })), t.upgradeManager.onUpgradeLevelChange("storeShelves", (() => {
            this.setAdLadCurrentLevel(!1), this.loadLevelInstance.run();
        })), this.setAdLadCurrentLevel(!0), t.upgradeManager.onUpgradeLevelChange("storeDecoration", (() => {
            this.loadLevelInstance.run();
        })), t.upgradeManager.onUpgradeLevelChange("boost", (() => {
            this.updateNeedsBoostTutorialKeyboard();
        })), t.cam.onIsShowingDollyChange((() => {
            this.updateNeedsBoostTutorialKeyboard();
        })), t.input.onLastInputWasTouchChange((() => {
            this.updateNeedsBoostTutorialKeyboard();
        })), this.loadLevelInstance.run(), this.loadGarbageBagAsset(), this.floorLoaded = !1, 
        this.loadingScreenActive = !0, this.loadScreenFloorVisible = !1, this.loadLoadScreenFloor();
    }
    async loadLoadScreenFloor() {
        const t = await this.mainInstance.assets.buildLoadScreenFloor();
        this.staticAssets || (this.staticAssets = t, this.scene.add(t), this.loadScreenFloorVisible = !0, 
        this.floorLoaded = !0, await this.mainInstance.renderer.waitForFrameRender(), fa().setProgressLoadStep2());
    }
    setAdLadCurrentLevel(t) {
        const e = this.mainInstance.upgradeManager.getUpgradeLevel("storeShelves");
        this.mainInstance.adLad.customRequestSpecific("coolmathgames", "setCurrentLevel", String(e), t);
    }
    async loadLevel() {
        const t = this.mainInstance.upgradeManager.getUpgradeLevel("storeShelves"), e = this.mainInstance.upgradeManager.getUpgradeLevel("storeDecoration"), {staticAssets: i, staticBodies: n, shelves: o, customerPaths: a, dumpsterPositions: r} = await this.mainInstance.assets.buildLevel(t, e);
        this.staticAssets && this.scene.remove(this.staticAssets), this.scene.add(i), this.staticAssets = i, 
        this.floorLoaded = !0, this.loadingScreenActive && (this.loadingScreenActive = !1, 
        this.loadScreenFloorVisible = !1, this.updateUiVisibility(), fa().updateProgressVisibility(), 
        this.cleaningMachine.clampPosition(1));
        for (const t of this.staticBodies) this.physicsWorld.removeBody(t);
        for (const t of n) {
            const e = new It({
                mass: 0
            }), s = new at(...t.size), i = new At(s);
            e.addShape(i), e.position.set(...t.center), this.physicsWorld.addBody(e), this.staticBodies.push(e);
        }
        for (const t of this.shelves) this.scene.remove(t.object), this.physicsWorld.removeBody(t.body);
        this.shelves = [];
        for (const t of o) {
            for (const e of C(t.asset)) e.castShadow = !0;
            this.scene.add(t.asset);
            const e = new at(...t.colliderSize), i = new At(e), n = new It({
                mass: 0
            });
            n.addShape(i);
            const o = new at(...t.colliderCenter);
            n.position.copy(o), this.physicsWorld.addBody(n);
            const a = new s(...t.objectCenter), r = new io(this, t.asset, n, a, t.fallingProductTypes, t.exactFallingProductCount);
            this.shelves.push(r);
        }
        this.dumpsterPositions = [];
        for (const t of r) {
            const e = new s(...t);
            e.y = 0, this.dumpsterPositions.push(e);
        }
        for (const t of this.customers) t.destructor();
        this.customers.clear();
        for (const t of a) {
            const e = new Mo(this, this.scene, t);
            this.customers.add(e);
        }
        for (const t of this.customers) t.stopWalkingForRandomDuration(!1);
        for (const t of C(i)) t.castShadow = !0, t.receiveShadow = !0;
    }
    async loadGarbageBagAsset() {
        const t = await this.mainInstance.assets.loadGlbViaWorker("garbageBag.glb");
        t && (this.garbageBagAsset = t);
    }
    loop(t, e) {
        if (this.floorLoaded && !fa().adLad.needsPause) {
            if (this.arrowsTutorialKeyboard) this.customersShoulSpillProducts = !1; else if (this.waveT < 120) this.waveT += e / 1e3, 
            this.customersShoulSpillProducts = this.alerts.getAlertCount() < 2; else {
                this.customersShoulSpillProducts = !1;
                (this.fallenProducts.size + this.stains.size < 3 * this.customers.size || !fa().upgradeManager.anyUpgradeAvailable) && (this.waveT = 0);
            }
            this.isShowingInitialCamera && this.floorLoaded && (this.initialCameraShowDuration += .001 * e, 
            this.initialCameraShowDuration > 4 && this.titleScreenStain.hide(), this.initialCameraShowDuration > 5 && !this.arrowsTutorialKeyboard && !fa().input.lastInputWasTouch && (this.arrowsTutorialKeyboard = new Fo("arrows"))), 
            this.arrowsTutorialKeyboard && fa().input.lastInputWasTouch && (this.arrowsTutorialKeyboard.dismiss(), 
            this.arrowsTutorialKeyboard = null), this.titleScreenStain.loop(t, e), this.cleaningMachine.loop(t, e);
            for (const s of this.shelves) s.loop(t, e);
            for (const s of this.fallenProducts) s.loop(t, e);
            for (const s of this.stains) s.loop(t, e);
            for (const s of this.customers) s.loop(t, e);
            for (const s of this.garbageBags) s.loop(t, e), s.needsDestruction() && (s.destructor(), 
            this.garbageBags.delete(s), fa().particleManager.createGroup("coin", s.toPos), fa().sfx.playSound("scorePoints", {
                volume: .3
            }));
            this.rewardManager.loop(t, e), this.rewardedCoinMultiplierActive && (this.rewardedCoinMultiplierTimer -= e, 
            this.rewardedCoinMultiplierActive || this.cornerScore.setMultiplierVisibility(!1)), 
            this.alerts.loop(t, e), this.physicsWorld.fixedStep(), this.cleaningMachine.afterPhysicsLoop(t, e);
            for (const s of this.fallenProducts) s.afterPhysicsLoop(t, e);
        }
    }
    stopShowingTitle() {
        this.isShowingTitleScreen = !1, this.titleScreenStain.hide(), this.updateUiVisibility();
    }
    stopShowingInitialCamera() {
        this.isShowingInitialCamera = !1, this.arrowsTutorialKeyboard && (this.arrowsTutorialKeyboard.dismiss(), 
        this.arrowsTutorialKeyboard = null), fa().setArrowsTutorialKeyboardDismissed();
    }
    updateUiVisibility() {
        const t = !this.loadingScreenActive && !this.isShowingTitleScreen;
        this.cornerScore.setVisibility(t), this.cornerButtons.setVisibility(t);
    }
    get rewardedCoinMultiplierActive() {
        return this.rewardedCoinMultiplierTimer > 0;
    }
    updateNeedsBoostTutorialKeyboard() {
        const t = fa();
        let e = t.upgradeManager.getUpgradeLevel("boost") > 0;
        (this.boostTutorialDismissed || t.cam.isShowingDollyCamera || t.input.lastInputWasTouch) && (e = !1), 
        e ? this.boostTutorialKeyboard || (this.boostTutorialKeyboard = new Fo("space")) : this.boostTutorialKeyboard && (this.boostTutorialKeyboard.dismiss(), 
        this.boostTutorialKeyboard = null);
    }
    dismissBoostTutorialKeyboard() {
        this.boostTutorialDismissed || (this.boostTutorialDismissed = !0, T("boostTutorialKeyboardDismissed", "true"), 
        this.updateNeedsBoostTutorialKeyboard());
    }
    getClosestShelf(t) {
        let e = 1 / 0, s = null;
        for (const i of this.shelves) {
            const n = Rn(i.body.position).distanceTo(t);
            n < e && (e = n, s = i);
        }
        return s;
    }
    getRandomProductType() {
        const t = M(Array.from(this.shelves));
        return t ? t.getRandomProductType() : null;
    }
    createFallenProduct(t, e, s, i) {
        if (!i && this.fallenProducts.size >= 100) return;
        if (null == t) return;
        const n = po[t], o = [];
        if (Array.isArray(n)) for (const t of n) o.push(...t()); else o.push(...n());
        for (const t of o) {
            const n = new t({
                game: this,
                spilledBy: i,
                creationTime: this.mainInstance.now
            });
            this.fallenProducts.add(n);
            const o = e.clone();
            o.y += A(-.5, .5), o.z += A(-.5, .5);
            const a = n.getSpillPenalty(), r = this.mainInstance.coins.applyPenaltyWithDeltaClamp(a, i);
            "customer" != i && fa().particleManager.createGroup("negative", e), n.setPenaltyClamp(r), 
            n.onDespawn(((t, e) => {
                if (t == this.cleaningMachine) {
                    if (this.mainInstance.coins.applyCleanupScore(n.getCleanUpScore(), i)) {
                        const t = e.clone();
                        t.y += 1.5, fa().particleManager.createGroup("positive", t);
                    }
                }
                n.destructor(), this.fallenProducts.delete(n);
            })), n.startFall(o, s);
        }
        const a = Math.max(0, this.fallenProducts.size - 250), r = this.fallenProducts.values();
        for (let t = 0; t < a; t++) {
            const t = r.next();
            if (t.done) break;
            t.value && t.value.clean(null);
        }
    }
    createStain(t, e, s, i) {
        const n = new (0, So[t])({
            game: this,
            spilledBy: i,
            creationTime: this.mainInstance.now,
            pos: e,
            rot: s
        });
        n.setTransformation(e, s), this.stains.add(n);
        const o = n.getSpillPenalty(), a = this.mainInstance.coins.applyPenaltyWithDeltaClamp(o, i);
        return n.setPenaltyClamp(a), "customer" != i && fa().particleManager.createGroup("negative", e), 
        n.onDespawn(((t, e) => {
            if (t == this.cleaningMachine) {
                if (this.mainInstance.coins.applyCleanupScore(n.getCleanUpScore(), i)) {
                    const t = e.clone();
                    t.y += 1.5, fa().particleManager.createGroup("positive", t);
                }
            }
            n.destructor(), this.stains.delete(n);
        })), n;
    }
    createGarbageBag(t, e) {
        if (!this.garbageBagAsset) return;
        const s = this.garbageBagAsset.clone();
        this.scene.add(s);
        const i = new To(s, t, e);
        this.garbageBags.add(i), this.mainInstance.sfx.playSound("emptyTrashStorage", {
            pos: t
        });
    }
}

class Oo {
    constructor({keyCodes: t = [], mouseButtons: e = [], gamepadButtons: s = []} = {}) {
        this.keyCodes = t, this.mouseButtons = e, this.gamepadButtons = s, this.pressed = !1, 
        this.pressedGamepad = !1, this.onPressedChangeCbs = new Set, this.onPressedDownCbs = new Set, 
        this.onPressedUpCbs = new Set;
    }
    setKeyCodePressed(t, e, s) {
        let i = !1, n = !1;
        return this.keyCodes.includes(t) && (n = this.setKeyPressed(e, s), i = !0), {
            needsPreventDefault: i,
            preventOthers: n
        };
    }
    setMouseButtonPressed(t, e, s) {
        return !!this.mouseButtons.includes(t) && this.setKeyPressed(e, s);
    }
    setPressedGamepadButtons(t, e) {
        let s = !1;
        for (const e of this.gamepadButtons) if (t.includes(e)) {
            s = !0;
            break;
        }
        return this.pressedGamepad != s && (this.pressedGamepad = s, this.setKeyPressed(s, e));
    }
    setKeyPressed(t, e = !1) {
        let s = !1;
        if (t != this.pressed && (this.pressed = t, !e)) {
            for (const e of this.onPressedChangeCbs) {
                e(t) && (s = !0);
            }
            if (t) for (const t of this.onPressedDownCbs) {
                t() && (s = !0);
            } else for (const t of this.onPressedUpCbs) {
                t() && (s = !0);
            }
        }
        return s;
    }
    onPressedChange(t) {
        this.onPressedChangeCbs.add(t);
    }
    onPressedDown(t) {
        this.onPressedDownCbs.add(t);
    }
    onPressedUp(t) {
        this.onPressedUpCbs.add(t);
    }
    removeCb(t) {
        const e = t;
        this.onPressedChangeCbs.delete(e), this.onPressedDownCbs.delete(e), this.onPressedUpCbs.delete(e);
    }
}

class Uo {
    constructor(t, e, s = !1) {
        this.cb = t, this.id = -1, this.ms = e, this.isDestructed = !1, s && this.start();
    }
    destructor() {
        this.stop(), this.isDestructed = !0;
    }
    get isRunning() {
        return -1 != this.id;
    }
    stop() {
        if (!this.isDestructed) return this.id >= 0 && (clearTimeout(this.id), this.id = -1, 
        !0);
    }
    start(t = this.ms) {
        this.isDestructed || (this.stop(), this.id = setTimeout(this.execute.bind(this), t));
    }
    execute() {
        this.id = -1, this.cb && this.cb();
    }
    static promise(t) {
        return new Promise(((e, s) => {
            setTimeout((() => {
                e();
            }), t);
        }));
    }
}

class Vo {
    constructor(t, e) {
        this.gameContainerEl = t, this.joyStickAreaEl = document.createElement("div"), this.joyStickAreaEl.classList.add("touch-joystick-area", "hidden"), 
        document.body.appendChild(this.joyStickAreaEl), this.joyStickEl = document.createElement("div"), 
        this.joyStickEl.classList.add("touch-joystick"), this.joyStickAreaEl.appendChild(this.joyStickEl), 
        this.currentTouch = null, this.joyStickPos = new p, this.joyStickVisible = !1, this.registerMainTouchListeners(), 
        this.currentInput = new p, this.onInputChangeCbs = new Set, this.isBoosting = !1, 
        this.boostKey = e, this.hideTimeout = new Uo((() => {
            this.joyStickVisible = !1, this.joyStickAreaEl.classList.add("hidden");
        }), 5e3);
    }
    registerMainTouchListeners() {
        this.gameContainerEl.addEventListener("touchstart", (t => {
            if (null != this.currentTouch) return;
            let e = !1;
            if ((t.target == this.gameContainerEl || t.target instanceof Node && this.joyStickAreaEl.contains(t.target)) && (e = !0), 
            e) for (const e of t.touches) {
                this.currentTouch = e.identifier, this.setJoystickPos(e.clientX, e.clientY), this.updateJoystickPos(e.clientX, e.clientY), 
                t.preventDefault();
                break;
            }
        }), {
            passive: !1
        }), this.gameContainerEl.addEventListener("touchmove", (t => {
            if (null != this.currentTouch) for (const e of t.touches) if (e.identifier == this.currentTouch) {
                this.updateJoystickPos(e.clientX, e.clientY), t.preventDefault();
                break;
            }
        }), {
            passive: !1
        }), this.gameContainerEl.addEventListener("touchend", (t => {
            if (null == this.currentTouch) return;
            let e = !1;
            for (const s of t.touches) if (s.identifier == this.currentTouch) {
                e = !0;
                break;
            }
            e || (this.currentTouch = null, this.updateJoystickPos(null, null), t.preventDefault());
        }), {
            passive: !1
        });
    }
    setJoystickPos(t, e) {
        this.joyStickPos.set(t, e), this.joyStickAreaEl.style.opacity = "0", this.joyStickAreaEl.style.transition = "none", 
        getComputedStyle(this.joyStickAreaEl).getPropertyValue("top"), this.joyStickAreaEl.style.opacity = "", 
        this.joyStickAreaEl.style.transition = "";
    }
    updateJoystickPos(t, e) {
        if (!this.joyStickAreaEl || !this.joyStickEl) throw new Error("Assertion failed, touch not initialized");
        let s;
        null == t || null == e ? (s = this.joyStickPos.clone(), this.hideTimeout.start()) : (s = new p(t, e), 
        this.hideTimeout.stop(), this.joyStickAreaEl.classList.remove("hidden"), this.joyStickVisible = !0);
        const i = s.clone().sub(this.joyStickPos);
        i.clampLength(0, 200), this.joyStickPos.copy(s).sub(i), this.joyStickAreaEl.style.transform = `translate(-50%, -50%) translate(${this.joyStickPos.x}px, ${this.joyStickPos.y}px)`, 
        i.clampLength(0, 100), this.joyStickEl.style.transform = `translate(-50%, -50%) translate(${i.x}px, ${i.y}px)`, 
        this.currentInput.copy(i), this.currentInput.divideScalar(100), this.isBoosting ? this.currentInput.length() < .9 && (this.isBoosting = !1, 
        this.boostKey.setKeyPressed(!1)) : this.currentInput.length() > .95 && (this.isBoosting = !0, 
        this.boostKey.setKeyPressed(!0)), this.onInputChangeCbs.forEach((t => t()));
    }
    onInputChange(t) {
        this.onInputChangeCbs.add(t);
    }
}

class qo {
    constructor(t) {
        this.keys = new Map, this.keys.set("left", new Oo({
            keyCodes: [ "KeyA", "ArrowLeft" ]
        })), this.keys.set("right", new Oo({
            keyCodes: [ "KeyD", "ArrowRight" ]
        })), this.keys.set("up", new Oo({
            keyCodes: [ "KeyW", "ArrowUp" ]
        })), this.keys.set("down", new Oo({
            keyCodes: [ "KeyS", "ArrowDown" ]
        }));
        const e = new Oo({
            keyCodes: [ "Space", "ShiftLeft", "ShiftRight" ]
        });
        this.keys.set("boost", e), window.addEventListener("keydown", (t => {
            this.setKeyCodePressed(t, !0);
        })), window.addEventListener("keyup", (t => {
            this.setKeyCodePressed(t, !1);
        })), window.addEventListener("focus", (t => {
            this.unpressAll();
        })), this.cursorVisible = !0, window.addEventListener("mousemove", (() => {
            this.cursorVisible = !0, this.updateCursorVisibility();
        })), this.stickDeadZone = .1, this.gamepadLookSensivity = 1.2, this.moveInput = new p, 
        this.gamepadAxes = [], this.lastInputWasTouch = !1, this.onLastInputWasTouchChangeCbs = new Set, 
        this.touch = new Vo(t, e), this.touch.onInputChange((() => {
            this.updateAxisInputs();
        })), this.updateCursorVisibility();
    }
    loop(t, e) {
        this.updateGamepadStates(t, e);
    }
    updateGamepadStates(t, e) {
        this.gamepadAxes = [];
        const s = navigator.getGamepads(), i = [];
        let n = !1;
        for (const t of s) {
            if (!t) continue;
            if (t.axes) {
                const e = t.axes;
                for (let t = 0; t < e.length - 1; t += 2) {
                    const s = new p(e[t], e[t + 1]), i = o(s.length(), this.stickDeadZone, 1, 0, 1, !0);
                    s.setLength(i), this.gamepadAxes.push(s);
                }
                n = !0;
            }
            const e = t.buttons;
            if (e) for (let t = 0; t < e.length; t++) {
                const s = e[t];
                s && (s.pressed && i.push(t));
            }
        }
        this.setPressedGamepadButtons(i), n && this.updateAxisInputs();
    }
    setKeyCodePressed(t, e) {
        if (e && document.activeElement && "INPUT" == document.activeElement.tagName) return;
        let s = !1, i = !1;
        for (const n of this.keys.values()) {
            const {preventOthers: o, needsPreventDefault: a} = n.setKeyCodePressed(t.code, e, s);
            o && (s = !0), a && !i && (t.preventDefault(), i = !0);
        }
        this.updateAxisInputs(), i && (this.cursorVisible = !1, this.updateCursorVisibility());
    }
    setPressedGamepadButtons(t) {
        let e = !1;
        for (const s of this.keys.values()) {
            s.setPressedGamepadButtons(t, e) && (e = !0);
        }
    }
    unpressAll() {
        for (const t of this.keys.values()) t.setKeyPressed(!1, !1);
        this.updateAxisInputs();
    }
    updateAxisInputs() {
        this.moveInput.set(0, 0);
        const t = new p;
        this.getKey("left").pressed && (t.x = -1), this.getKey("right").pressed && (t.x = 1), 
        this.getKey("up").pressed && (t.y = -1), this.getKey("down").pressed && (t.y = 1), 
        t.length() > .001 && (t.setLength(1), this.moveInput.add(t)), this.gamepadAxes.length > 0 && this.moveInput.add(this.gamepadAxes[0]), 
        this.moveInput.add(this.touch.currentInput), this.touch.currentInput.length() > 0 || this.touch.joyStickVisible ? (this.lastInputWasTouch = !0, 
        this.onLastInputWasTouchChangeCbs.forEach((t => t()))) : t.length() > 0 && (this.lastInputWasTouch = !1, 
        this.onLastInputWasTouchChangeCbs.forEach((t => t()))), this.moveInput.clampLength(0, 1);
    }
    getKey(t) {
        const e = this.keys.get(t);
        if (!e) throw new Error(`Key ${t} not found`);
        return e;
    }
    updateCursorVisibility() {
        document.body.style.cursor = this.cursorVisible ? "auto" : "none";
    }
    onLastInputWasTouchChange(t) {
        this.onLastInputWasTouchChangeCbs.add(t);
    }
}

class Wo {
    constructor(t) {
        this.isDownloading = !1, this.loaded = !1, this.url = t, this.arrayBuffer = null, 
        this.fileLocations = [], this.onLoadCbs = [], this.onProgressCbs = [], this.lastProgressValue = 0, 
        this.textureCache = {};
    }
    async startDownloading() {
        if (this.loaded) return;
        if (this.isDownloading) return await this.waitForLoad();
        this.isDownloading = !0;
        const t = await N(this.url, (t => {
            for (const e of this.onProgressCbs) e(t);
            this.lastProgressValue = t;
        }));
        this.arrayBuffer = await new Response(t).arrayBuffer(), this.parseFilePositions(this.arrayBuffer), 
        this.loaded = !0;
        for (const t of this.onLoadCbs) t();
        this.onLoadCbs = [], this.onProgressCbs = [], this.isDownloading = !1;
    }
    parseFilePositions(t) {
        let e = 0;
        for (;e < t.byteLength; ) {
            let s = new Uint32Array(t, e, 1)[0];
            const i = new Uint8Array(t, e + 4, s), n = new TextDecoder("utf-8").decode(i);
            s % 4 != 0 && (s = 4 * Math.ceil(s / 4));
            let o = new Uint32Array(t, e + 4 + s, 1)[0];
            this.fileLocations.push({
                path: n,
                start: e + 4 + s + 4,
                length: o
            }), o % 4 != 0 && (o = 4 * Math.ceil(o / 4)), e += 4 + s + 4 + o;
        }
    }
    onLoad(t) {
        this.loaded ? t() : this.onLoadCbs.push(t);
    }
    onProgress(t) {
        this.loaded ? t(1) : this.onProgressCbs.push(t);
    }
    async waitForLoad() {
        if (this.loaded) return;
        const t = new Promise(((t, e) => {
            this.onLoad((() => {
                t();
            }));
        }));
        await t;
    }
    async hasFile(t) {
        return this.loaded || await this.waitForLoad(), this.fileLocations.some((e => e.path == t));
    }
    async getFileAsBuffer(t) {
        if (this.loaded || await this.waitForLoad(), !this.arrayBuffer) throw new Error("Assertion failed, arrayBuffer not loaded");
        for (const e of this.fileLocations) if (e.path == t) return this.arrayBuffer.slice(e.start, e.start + e.length);
        throw new Error(`Trying to load asset at ${t} but it doesn't exist!`);
    }
    async getAsObjectUrl(t, e) {
        const s = await this.getFileAsBuffer(t);
        if (!s) return null;
        const i = new Blob([ new Uint8Array(s) ], {
            type: e
        });
        return URL.createObjectURL(i);
    }
    async getAsSvg(t) {
        return await this.getAsObjectUrl(t, "image/svg+xml");
    }
    async getAsText(t) {
        const e = await this.getFileAsBuffer(t), s = new Uint8Array(e);
        return new TextDecoder("utf-8").decode(s);
    }
    async getAsJSON(t) {
        const e = await this.getAsText(t);
        return JSON.parse(e);
    }
    async blobToArrayBuffer(t) {
        return await new Response(t).arrayBuffer();
    }
}

class Go {
    constructor() {
        this.onPackageAddCbs = [], this.packages = {}, this.initialPackage = this.addPackage("initial"), 
        this.mainPackage = this.addPackage("main", {
            waitForOtherPackages: [ "initial" ]
        }), this.workerMessenger = new F, this.workerMessenger.setResponseHandlers(this.getWorkerResponseHandlers()), 
        this.workerMessenger.setSendHandler((async t => {
            (await this.workerPromise).postMessage(t.sendData, t.transfer);
        })), this.workerPromise = this.loadWorker();
    }
    async loadWorker() {
        const {worker: t} = await import("./assetWorkerPreload-0f92288d.js");
        return t.addEventListener("message", (t => {
            this.workerMessenger.handleReceivedMessage(t.data);
        })), t.addEventListener("error", (t => {
            console.error("error occurred while initializing asset loader worker", t);
        })), t;
    }
    getWorkerResponseHandlers() {
        return {
            getAssetBuffer: async t => await this.getFileAsBuffer(t)
        };
    }
    addPackage(t, {waitForOtherPackages: e = null, expectedOtherPackageCount: s = 1, manualDownload: i = !1} = {}) {
        let n = null;
        if (t in this.packages) n = this.packages[t]; else {
            n = new Wo("assetPackages" + "/" + t + ".bin?v=1702403754"), this.packages[t] = n;
            for (const t of this.onPackageAddCbs) t();
            this.onPackageAddCbs = [];
        }
        return i || this.waitAndDownloadPack(n, e, s), n;
    }
    async waitAndDownloadPack(t, e, s) {
        if (e) for (;;) {
            const i = [];
            for (const [s, n] of Object.entries(this.packages)) for (const o of e) s.startsWith(o) && n != t && i.push(n);
            if (!(i.length < s)) {
                for (const t of i) await t.waitForLoad();
                break;
            }
            await this.waitForPackageAdd();
        }
        t.startDownloading();
    }
    async waitForPackageAdd() {
        const t = new Promise((t => this.onPackageAddCbs.push(t)));
        await t;
    }
    getPackage(t) {
        return this.packages[t];
    }
    async getPackageAsync(t) {
        for (;;) {
            const e = this.packages[t];
            if (e) return e;
            await this.waitForPackageAdd();
        }
    }
    static deserializeThreeObject(t) {
        if (!t) return null;
        const e = [];
        for (const s of t.geometries) {
            const t = new v;
            for (const e of s.attributes) t.setAttribute(e.name, new S(e.array, e.itemSize, e.normalized));
            s.index && t.setIndex(new S(s.index.array, 1));
            for (const {start: e, count: i, materialIndex: n} of s.groups) t.addGroup(e, i, n);
            e.push(t);
        }
        const s = this.deserializeThreeObjectRecursive(t.object, e);
        return s.updateWorldMatrix(!1, !0), s;
    }
    static deserializeThreeObjectRecursive(t, e) {
        let s = null;
        null != t.geo && t.geo >= 0 && (s = new I(e[t.geo], Qn)), s || (s = new r), s.name = t.name;
        const i = (new l).fromArray(t.matrix);
        s.applyMatrix4(i);
        for (const i of t.children) {
            const t = this.deserializeThreeObjectRecursive(i, e);
            s.add(t);
        }
        return s;
    }
    async getFileAsBuffer(t) {
        for (const e of Object.values(this.packages)) if (await e.hasFile(t)) return await e.getFileAsBuffer(t);
        throw new Error(`Trying to load asset at ${t} but it doesn't exist!`);
    }
    async loadGlbViaWorker(t, {packageName: e = "main", keepCustomProperties: s = [], merge: i = !0} = {}) {
        const n = await this.getPackage(e).getFileAsBuffer(t), o = await this.workerMessenger.send("loadGlbAsset", {
            glbBuffer: n,
            keepCustomProperties: s,
            merge: i
        });
        return Go.deserializeThreeObject(o);
    }
    async buildLoadScreenFloor() {
        const t = await this.workerMessenger.send("buildLoadScreenFloor");
        return Go.deserializeThreeObject(t);
    }
    async buildLevel(t, e) {
        const s = await this.workerMessenger.send("buildLevel", t, e), i = [];
        for (const t of s.shelves) i.push({
            asset: Go.deserializeThreeObject(t.asset),
            ...t.extraData
        });
        return {
            staticAssets: Go.deserializeThreeObject(s.staticAssets),
            shelves: i,
            ...s.extra
        };
    }
    async loadCleaningMachine() {
        const t = await this.workerMessenger.send("loadCleaningMachine");
        return Go.deserializeThreeObject(t);
    }
}

const Ho = {
    boost: {
        title: "Boost",
        description: "Allows you to move faster when holding spacebar.",
        costs: [ 310 ],
        dollyConfig: {
            endPos: new s(1.1, 1.3, -1.3),
            dir: new s(-.51, -.63, .56),
            relativeToVehicle: !0
        }
    },
    speed: {
        title: "Speed",
        description: "Make your vehicle faster.",
        costs: [ 3, 220, 3200 ],
        dollyConfig: {
            endPos: new s(.7, .9, -1.9),
            dir: new s(-.43, -.51, .73),
            relativeToVehicle: !0
        }
    },
    safetyGuard: {
        title: "Safety Guard",
        description: "Spill less products when hitting shelves.",
        costs: [ 500, 3800 ],
        dollyConfig: {
            endPos: new s(1.1, 1, 1.8),
            dir: new s(-.43, -.43, -.79),
            relativeToVehicle: !0
        }
    },
    grip: {
        title: "Grip",
        description: "Make some spills less slippery.",
        costs: [ 4e3 ],
        dollyConfig: {
            endPos: new s(.8, 1.7, -1),
            dir: new s(-.73, -.49, .46),
            relativeToVehicle: !0
        }
    },
    trashStorage: {
        title: "Trash Storage",
        description: "Clean up more items before you have to empty your cleaning machine.",
        costs: [ 380, 2700, 5e3 ],
        dollyConfig: {
            endPos: new s(-1, 1.6, .3),
            dir: new s(.64, -.6, -.46),
            relativeToVehicle: !0
        }
    },
    customerCaution: {
        title: "Warn Customers",
        description: "Make customers stop walking when you approach them.",
        costs: [ 1200 ],
        dollyConfig: {
            endPos: new s(-1.3, 1.4, -1.5),
            dir: new s(.58, -.54, .59),
            relativeToVehicle: !0
        }
    },
    storeShelves: {
        title: "Product research",
        description: "Research new product types that yield more money when spilled.",
        costs: [ 5, 50, 100, 250, 680, 2300, 3600, 6300, 8e3 ],
        getCostForLevel(t) {
            return t -= this.costs.length, 15e3 * (Math.pow(t, 2) + 1);
        },
        dollyConfig: {
            endPos: new s(-2.1, 2.5, -.7),
            dir: new s(1, -.8, .5),
            relativeToVehicle: !1,
            particlesPos: new s(1, .2, 1)
        }
    },
    storeDecoration: {
        title: "Store Decoration",
        description: "Multiplies all received coins by 2.",
        costs: [ 25, 500, 920 ],
        dollyConfig: {
            endPos: new s(-.68, 1.7, -3.65),
            dir: new s(.8, -.5, -1),
            relativeToVehicle: !1,
            particlesPos: new s(.2, .4, -5.7)
        }
    }
}, Ko = Object.keys(Ho);

class Yo {
    constructor(t) {
        this.coinsManager = t, this.upgradeLevels = new Map, this.onUpgradesListChangeCbs = new Set, 
        this.onUpgradeLevelChangeCbs = new Map, this.anyUpgradeAvailable = !1, this.previousAvailableUpgradesStr = "", 
        t.onCoinCountChange((() => {
            this.updateAnyUpgradeAvailable();
        })), this.loadLevels();
    }
    init() {}
    loadLevels() {
        let t;
        try {
            t = JSON.parse(B("upgradeLevels") || "");
        } catch {}
        if (t) {
            for (const [e, s] of Object.entries(t)) {
                const t = e;
                if (Ko.includes(t)) {
                    let e = Math.round(s);
                    isFinite(e) || (e = 0), this.upgradeLevels.set(t, e);
                }
            }
            this.updateAnyUpgradeAvailable(), this.fireAllOnUpgradeLevelChangeCbs(), this.fireOnUpgradesListChangeCbs();
        }
    }
    saveLevels() {
        const t = {};
        for (const [e, s] of this.upgradeLevels) t[e] = s;
        const e = JSON.stringify(t);
        try {
            localStorage.upgradeLevels = e;
        } catch {}
    }
    getUpgradeLevel(t) {
        return this.upgradeLevels.get(t) || 0;
    }
    getUpgradeValue(t) {
        const e = this.getUpgradeLevel(t), s = Ho[t];
        return s.costs.length <= 0 ? e : e / s.costs.length;
    }
    getUpgradePrice(t) {
        const e = this.getUpgradeLevel(t), s = Ho[t];
        return s.costs.length <= e ? s.getCostForLevel ? s.getCostForLevel(e) : -1 : s.costs[e];
    }
    purchaseUpgrade(t) {
        const e = this.getUpgradePrice(t);
        if (-1 == e) return;
        if (!this.coinsManager.subtractUpgradePrice(e)) return;
        let s = this.upgradeLevels.get(t) || 0;
        this.upgradeLevels.set(t, s + 1), this.updateAnyUpgradeAvailable(), this.saveLevels(), 
        fa().sfx.playSound("upgrade");
        const i = Ho[t];
        if (i.dollyConfig) {
            const t = fa().game;
            t && t.cleaningMachine.resetPosition(), fa().cam.showUpgradeDolly(i.dollyConfig);
        }
        this.fireOnUpgradesListChangeCbs(), this.fireOnUpgradeLevelChangeCbs(t);
    }
    * listUpgrades() {
        const t = [];
        for (const e of Ko) t.push({
            type: e,
            price: this.getUpgradePrice(e)
        });
        t.sort(((t, e) => "storeShelves" == t.type ? -1 : "storeShelves" == e.type ? 1 : t.price == e.price ? 0 : -1 == t.price ? 1 : -1 == e.price ? -1 : t.price - e.price));
        for (const {type: e, price: s} of t) {
            let t = this.getUpgradeLevel(e) + 1;
            1 == Ho[e].costs.length && (t = -1), yield {
                type: e,
                price: s,
                available: this.upgradeIsAvailable(e),
                level: t,
                config: Ho[e]
            };
        }
    }
    updateAnyUpgradeAvailable() {
        const t = [];
        for (const e of Ko) this.upgradeIsAvailable(e) && t.push(e);
        const e = t.sort().join(",");
        this.previousAvailableUpgradesStr != e && (this.previousAvailableUpgradesStr = e, 
        this.anyUpgradeAvailable = t.length > 0, this.fireOnUpgradesListChangeCbs());
    }
    upgradeIsAvailable(t) {
        const e = this.coinsManager.coins, s = this.getUpgradePrice(t);
        return -1 != s && e > s;
    }
    onUpgradesListChange(t) {
        this.onUpgradesListChangeCbs.add(t);
    }
    removeOnUpgradesListChange(t) {
        this.onUpgradesListChangeCbs.delete(t);
    }
    fireOnUpgradesListChangeCbs() {
        this.onUpgradesListChangeCbs.forEach((t => t()));
    }
    onUpgradeLevelChange(t, e) {
        let s = this.onUpgradeLevelChangeCbs.get(t);
        s || (s = new Set, this.onUpgradeLevelChangeCbs.set(t, s)), s.add(e);
    }
    removeOnUpgradeLevelChange(t, e) {
        const s = this.onUpgradeLevelChangeCbs.get(t);
        s && s.delete(e);
    }
    fireOnUpgradeLevelChangeCbs(t) {
        const e = this.onUpgradeLevelChangeCbs.get(t);
        e && e.forEach((t => t()));
    }
    fireAllOnUpgradeLevelChangeCbs() {
        for (const t of Ko) this.fireOnUpgradeLevelChangeCbs(t);
    }
}

class Xo {
    constructor(t, e) {
        this.opts = t, this.ctx = e, this.loaded = !1, this.loading = !1, this.buffer = null, 
        this.onLoadCbs = [];
    }
    async init() {
        if (this.loaded) return;
        if (this.loading) {
            const t = new Promise((t => {
                this.onLoadCbs.push(t);
            }));
            return await t;
        }
        this.loading = !0;
        const t = fa().assets.getPackage("sfx" + $o.audioFormatCamelCase), e = await t.getFileAsBuffer(this.opts.name + "." + $o.audioFormat);
        this.buffer = await new Promise((t => {
            this.ctx.decodeAudioData(e, t);
        })), this.loaded = !0;
        for (const t of this.onLoadCbs) t();
        this.onLoadCbs = [];
    }
    async waitForLoad() {
        if (this.loaded) return;
        const t = new Promise((t => this.onLoadCbs.push(t)));
        return await t;
    }
    async getBuffer() {
        return await this.waitForLoad(), this.buffer;
    }
}

class Qo {
    constructor(t, e = {}) {
        this.cachedSfx = t, this.opts = {
            autoPlay: !0,
            volume: 1,
            minPitch: 1,
            maxPitch: 1,
            volumeFront: 1,
            volumeBack: 0,
            isMusic: !1,
            loop: !1,
            allowWithoutUserEvent: !1,
            overrideMute: !1,
            pos: null,
            connectToDestination: !0,
            ...t.opts,
            ...e
        }, this.destructed = !1, this.sourceNode = null, this.gainNode = null, this.frontGainNode = null, 
        this.frontSplitterNode = null, this.backGainNode = null, this.backSplitterNode = null, 
        this.channelMergerNode = null, this.finalNode = null, this.pannerNode = null, this.preventDestructOnNextStop = !1, 
        this.lastSetVolume = 0, this.isLoopPlaying = null, this.muted = !1, this.forceMuted = !1, 
        this.startTime = 0;
        const s = this.opts.minPitch || 0, i = this.opts.maxPitch || 0;
        this.pitch = A(s, i);
    }
    destructor() {
        this.destructed = !0, fa().sfx.sfxDestructed(this);
    }
    async init() {
        return !fa().sfx.muted || this.opts.loop || this.opts.overrideMute ? (this.setVolume(this.opts.volume || 0, !0), 
        this.opts.autoPlay && await this.start(!0), this.setMuted(fa().sfx.muted), !0) : (this.destructor(), 
        !1);
    }
    setVolume(t, e = !1) {
        const s = fa().sfx.ctx;
        if (!s) return;
        this.lastSetVolume = t;
        t *= 1, this.gainNode && (e ? this.gainNode.gain.value = t : this.gainNode.gain.linearRampToValueAtTime(t, s.currentTime + .1));
    }
    volumeSettingChanged(t) {
        this.setVolume(this.lastSetVolume);
    }
    setMuted(t, e = !1) {
        if (this.muted = t, this.forceMuted = e, this.opts.overrideMute && !e && (t = !1), 
        this.opts.loop) if (t) {
            const t = this.isLoopPlaying;
            this.pause(!0), this.isLoopPlaying = t;
        } else this.isLoopPlaying && this.resume(!0); else t && this.stop();
    }
    async start(t = !1) {
        if (!this.sourceNode) {
            const e = fa().sfx.ctx;
            if (!e) return;
            this.sourceNode = e.createBufferSource(), this.sourceNode.buffer = await this.cachedSfx.getBuffer(), 
            this.sourceNode.loop = this.opts.loop || !1, this.sourceNode.playbackRate.value = this.pitch, 
            this.finalNode = this.sourceNode, this.gainNode = e.createGain(), this.finalNode.connect(this.gainNode), 
            this.finalNode = this.gainNode, this.opts.pos && (this.pannerNode = e.createPanner(), 
            this.pannerNode.panningModel = "HRTF", this.pannerNode.distanceModel = "inverse", 
            this.pannerNode.refDistance = 1, this.pannerNode.maxDistance = 1e3, this.pannerNode.rolloffFactor = 1, 
            this.pannerNode.positionX ? (this.pannerNode.positionX.value = this.opts.pos.x, 
            this.pannerNode.positionY.value = this.opts.pos.y, this.pannerNode.positionZ.value = this.opts.pos.z) : this.pannerNode.setPosition(this.opts.pos.x, this.opts.pos.y, this.opts.pos.z), 
            this.finalNode.connect(this.pannerNode), this.finalNode = this.pannerNode), e.destination.maxChannelCount >= 6 && (this.frontGainNode = e.createGain(), 
            this.frontGainNode.gain.value = this.opts.volumeFront, this.finalNode.connect(this.frontGainNode), 
            this.frontSplitterNode = e.createChannelSplitter(2), this.frontGainNode.connect(this.frontSplitterNode), 
            this.backGainNode = e.createGain(), this.backGainNode.gain.value = this.opts.volumeBack, 
            this.finalNode.connect(this.backGainNode), this.backSplitterNode = e.createChannelSplitter(2), 
            this.backGainNode.connect(this.backSplitterNode), this.channelMergerNode = e.createChannelMerger(6), 
            this.frontSplitterNode.connect(this.channelMergerNode, 0, 0), this.frontSplitterNode.connect(this.channelMergerNode, 1, 1), 
            this.backSplitterNode.connect(this.channelMergerNode, 0, 4), this.backSplitterNode.connect(this.channelMergerNode, 1, 5), 
            this.finalNode = this.channelMergerNode), this.opts.connectToDestination && this.finalNode.connect(e.destination);
            const s = () => {
                this.sourceNode && this.sourceNode.removeEventListener("ended", s), this.preventDestructOnNextStop || this.destructor(), 
                this.preventDestructOnNextStop = !1;
            };
            this.sourceNode.addEventListener("ended", s), this.setVolume(this.lastSetVolume, t), 
            this.sourceNode.start(), this.startTime = e.currentTime, !1 === this.isLoopPlaying && this.pause(!0);
        }
        this.opts.loop && (this.isLoopPlaying = !0);
    }
    stop(t = !0) {
        if (this.destructed) return;
        const e = fa().sfx.ctx;
        e && (this.preventDestructOnNextStop = !t, this.sourceNode && (this.sourceNode.stop(), 
        this.sourceNode = null, this.opts.connectToDestination && this.finalNode && this.finalNode.disconnect(e.destination), 
        this.finalNode = null), this.opts.loop && (this.isLoopPlaying = !1));
    }
    pause(t = !1) {
        this.isLoopPlaying = !1, this.sourceNode && (this.sourceNode.playbackRate.value = 1e-4);
    }
    resume(t = !1) {
        this.isLoopPlaying = !0, (!this.muted || !this.opts.loop || this.opts.overrideMute && !this.forceMuted || t) && this.sourceNode && (this.sourceNode.playbackRate.value = this.pitch);
    }
    getEstimatedTime() {
        const t = fa().sfx.ctx;
        if (!t) return 0;
        if (!this.sourceNode) return 0;
        if (!this.sourceNode.buffer) return 0;
        const e = t.currentTime - this.startTime;
        return L(e, this.sourceNode.buffer.duration);
    }
}

class $o {
    constructor() {
        if (window.AudioContext = window.AudioContext || window.webkitAudioContext, this.supported = !!AudioContext, 
        this.packageName = "sfx" + $o.audioFormatCamelCase, this.cachedSfx = {}, this.createdSfx = [], 
        this.settingsMuted = !0, this.adsMuted = !1, this.muted = !0, this.supported) {
            this.ctx = new AudioContext, this.ctx.destination.maxChannelCount >= 6 && (this.ctx.destination.channelCount = 6), 
            this.ctx.onstatechange = () => {
                this.onCtxStatechange();
            }, this.boundUserEvent = this.userEvent.bind(this), this.addedUserEventListeners = !1, 
            this.onCtxStatechange(), this.soundsConfig = [ {
                name: "backgroundMusic",
                isMusic: !0,
                loop: !0,
                volume: .1
            }, {
                name: "ambient",
                isMusic: !0,
                loop: !0,
                volume: .11
            }, {
                name: "cleanObject",
                volume: .28,
                minPitch: .8,
                maxPitch: 1.2
            }, {
                name: "cleanStain",
                volume: .32,
                minPitch: .8,
                maxPitch: 1.2
            }, {
                name: "scorePoints"
            }, {
                name: "losePoints"
            }, {
                name: "objectCollision",
                volume: .25,
                minPitch: .4,
                maxPitch: 1.5
            }, {
                name: "shelfHit",
                volume: .9,
                minPitch: .9,
                maxPitch: 1.1
            }, {
                name: "customerHit",
                volume: .9,
                minPitch: .9,
                maxPitch: 1.1
            }, {
                name: "upgrade",
                volume: .5
            }, {
                name: "storageFull",
                volume: .9
            }, {
                name: "emptyTrashStorage",
                volume: .5,
                minPitch: .85,
                maxPitch: 1.2
            }, {
                name: "alert",
                volume: .16
            } ];
            for (const t of this.soundsConfig) this.cachedSfx[t.name] = new Xo(t, this.ctx);
            this.ctxStatePossiblyInvalid = !1, document.addEventListener("visibilitychange", (t => {
                document.hidden ? this.ctx && this.ctx.suspend() : (this.ctxStatePossiblyInvalid = !0, 
                window.setTimeout((() => {
                    this.ctx && this.ctx.resume();
                }), 300));
            }), !1), this.updateMuted();
        }
    }
    static get audioFormat() {
        if (!this._audioFormatSet) {
            const t = document.createElement("audio");
            t.canPlayType("audio/webm;codecs=opus") ? this._audioFormat = "webm" : t.canPlayType("audio/mp3") ? this._audioFormat = "mp3" : (this._audioFormat = null, 
            this.supported = !1), this._audioFormatSet = !0;
        }
        return this._audioFormat;
    }
    static get audioFormatCamelCase() {
        const t = this.audioFormat;
        return t ? t.charAt(0).toUpperCase() + t.substring(1) : null;
    }
    init() {
        if (this.supported) {
            fa().assets.addPackage(this.packageName, {
                waitForOtherPackages: [ "main" ]
            });
            for (const t of Object.values(this.cachedSfx)) t.init();
        }
    }
    loop(t, e) {
        if (this.supported && this.ctx && "running" == this.ctx.state && this.ctx.listener) {
            const t = fa().cam.cam.position, e = fa().cam.cam.quaternion;
            this.ctx.listener.positionX ? (this.ctx.listener.positionX.value = t.x, this.ctx.listener.positionY.value = t.y, 
            this.ctx.listener.positionZ.value = t.z) : this.ctx.listener.setPosition(t.x, t.y, t.z);
            const i = new s(0, 0, -1);
            i.applyQuaternion(e);
            const n = new s(0, 1, 0);
            n.applyQuaternion(e), this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.value = i.x, 
            this.ctx.listener.forwardY.value = i.y, this.ctx.listener.forwardZ.value = i.z, 
            this.ctx.listener.upX.value = n.x, this.ctx.listener.upY.value = n.y, this.ctx.listener.upZ.value = n.z) : this.ctx.listener.setOrientation(i.x, i.y, i.z, n.x, n.y, n.z);
        }
    }
    onCtxStatechange() {
        this.supported && this.ctx && ("running" != this.ctx.state || this.ctxStatePossiblyInvalid ? this.addUserEventListeners() : this.removeUserEventListeners());
    }
    addUserEventListeners() {
        this.supported && this.boundUserEvent && (this.addedUserEventListeners || (window.addEventListener("touchstart", this.boundUserEvent), 
        window.addEventListener("touchend", this.boundUserEvent), window.addEventListener("click", this.boundUserEvent), 
        window.addEventListener("keydown", this.boundUserEvent), this.addedUserEventListeners = !0));
    }
    removeUserEventListeners() {
        this.supported && this.boundUserEvent && this.addedUserEventListeners && (window.removeEventListener("touchstart", this.boundUserEvent), 
        window.removeEventListener("touchend", this.boundUserEvent), window.removeEventListener("click", this.boundUserEvent), 
        window.removeEventListener("keydown", this.boundUserEvent), this.addedUserEventListeners = !1);
    }
    async userEvent() {
        this.supported && this.ctx && (this.ctxStatePossiblyInvalid && await this.ctx.suspend(), 
        await this.ctx.resume(), this.ctxStatePossiblyInvalid = !1);
    }
    async playSound(t, e) {
        const s = this.cachedSfx[t];
        if (!s) return void console.warn("attempted to play sound " + t + " but it doesn't exist");
        const i = new Qo(s, e);
        return await i.init() ? (this.createdSfx.push(i), i) : null;
    }
    setMutedSettings(t) {
        this.settingsMuted = t, this.updateMuted();
    }
    setMutedAds(t) {
        this.adsMuted = t, this.updateMuted();
    }
    updateMuted() {
        this.muted = this.settingsMuted || this.adsMuted;
        for (let t = this.createdSfx.length - 1; t >= 0; t--) this.createdSfx[t].setMuted(this.muted, this.adsMuted);
    }
    sfxDestructed(t) {
        const e = this.createdSfx.indexOf(t);
        e >= 0 && this.createdSfx.splice(e, 1);
    }
}

class Zo {
    constructor() {
        this.storageCoins = 0, this.coins = 0, this.loadCoins(), this.onStorageCoinCountChangeCbs = new Set, 
        this.onCoinCountChangeCbs = new Set, this.lastSoundTime = 0;
    }
    init() {}
    loadCoins() {
        this.coins = parseFloat(B("coins") || "0"), isFinite(this.coins) || (this.coins = 0), 
        this.roundCoins();
    }
    roundStorageCoins() {
        this.storageCoins = Math.round(100 * this.storageCoins) / 100;
    }
    roundCoins() {
        this.coins = Math.round(100 * this.coins) / 100;
    }
    storageRoundAndFireEvents() {
        this.roundStorageCoins(), this.fireStorageCoinCountChangeEvent();
    }
    roundSaveAndFireEvents() {
        this.roundCoins(), T("coins", String(this.coins)), this.fireCoinCountChangeEvent();
    }
    getScoreMultiplier() {
        const t = fa().upgradeManager.getUpgradeLevel("storeDecoration");
        return Math.pow(2, t);
    }
    applyPenaltyWithDeltaClamp(t, e) {
        if ((t *= this.getScoreMultiplier()) <= 0) return 0;
        this.coins -= t, this.roundCoins();
        let s = this.coins;
        if (this.coins = Math.max(0, this.coins), s = this.coins - s, s < t) {
            const t = fa().game;
            t && t.cornerScore.flashCoins(), this.playSound("losePoints", "player" == e);
        }
        return this.roundSaveAndFireEvents(), s;
    }
    applyCleanupScore(t, e) {
        return !((t *= this.getScoreMultiplier()) <= 0) && (this.storageCoins += t, this.storageRoundAndFireEvents(), 
        this.playSound("scorePoints", !0), !0);
    }
    playSound(t, e) {
        fa().now - this.lastSoundTime < 50 || (this.lastSoundTime = fa().now, fa().sfx.playSound(t, {
            volume: e ? .3 : .018
        }));
    }
    transferStorageCoins(t, e) {
        const s = this.storageCoins * t;
        this.storageCoins -= s, this.coins += s * e, this.storageRoundAndFireEvents(), this.roundSaveAndFireEvents();
    }
    subtractUpgradePrice(t) {
        return !(this.coins < t) && (this.coins -= t, this.roundSaveAndFireEvents(), !0);
    }
    addRewardedCoins(t) {
        this.coins += t, this.roundSaveAndFireEvents();
    }
    onStorageCoinCountChange(t, e = !0) {
        this.onStorageCoinCountChangeCbs.add(t), e && t(this.storageCoins);
    }
    removeOnStorageCoinCountChange(t) {
        this.onStorageCoinCountChangeCbs.delete(t);
    }
    fireStorageCoinCountChangeEvent() {
        this.onStorageCoinCountChangeCbs.forEach((t => t(this.storageCoins)));
    }
    onCoinCountChange(t, e = !0) {
        this.onCoinCountChangeCbs.add(t), e && t(this.coins);
    }
    removeOnCoinCountChange(t) {
        this.onCoinCountChangeCbs.delete(t);
    }
    fireCoinCountChangeEvent() {
        this.onCoinCountChangeCbs.forEach((t => t(this.coins)));
    }
}

class Jo {
    constructor({defaultState: t = !1, defaultPluginState: e = !1, pluginInitializePromise: s = null, trueCall: i, falseCall: n, stateName: o, pluginName: a}) {
        this.pluginInitializePromise = s, this.pluginInitialized = !1, this.trueCall = i, 
        this.falseCall = n, this.stateName = o, this.pluginName = a, this.lastSentState = e, 
        this.stateQueue = [ t ], this.onEmptyQueueCallbacks = new Set, this.lastSentStatePromise = Promise.resolve(), 
        this.lastUpdateSymbol = Symbol(), (async () => {
            await this.pluginInitializePromise, await this.updateState(), this.pluginInitialized = !0;
        })();
    }
    setState(t) {
        this.stateQueue.push(t), this.updateState();
    }
    async updateState() {
        const t = Symbol();
        if (this.lastUpdateSymbol = t, this.pluginInitializePromise && await this.pluginInitializePromise, 
        this.lastSentStatePromise && await this.lastSentStatePromise, this.lastUpdateSymbol == t) {
            if (this.pluginInitialized) {
                if (this.stateQueue.length > 0) {
                    const t = this.stateQueue[this.stateQueue.length - 1];
                    t == this.lastSentState ? this.stateQueue = [] : this.stateQueue = [ t ];
                }
            } else this.stateQueue = function(t, e) {
                (e = ta(t, e)).length > 0 && (e = [ e[0], e[e.length - 1] ]);
                return ta(t, e);
            }(this.lastSentState, this.stateQueue);
            if (this.stateQueue.length > 0) {
                const t = this.stateQueue.shift(), e = t ? this.trueCall : this.falseCall;
                this.lastSentStatePromise = (async () => {
                    try {
                        const t = e() || Promise.resolve();
                        await t;
                    } catch (t) {
                        console.error(`An error occurred while trying to change the ${this.stateName} state of the "${this.pluginName}" plugin:`, t);
                    }
                })(), this.lastSentState = t, this.updateState();
            } else this.onEmptyQueueCallbacks.forEach((t => t())), this.onEmptyQueueCallbacks.clear();
        }
    }
    async waitForEmptyQueue() {
        if (0 == this.stateQueue.length) return;
        const t = new Promise((t => {
            this.onEmptyQueueCallbacks.add(t);
        }));
        await t;
    }
}

function ta(t, e) {
    const s = [];
    let i = t;
    for (const t of e) t != i && (s.push(t), i = t);
    return s;
}

class ea {
    constructor(t) {
        this._value = t, this._onChangeCbs = new Set;
    }
    get value() {
        return this._value;
    }
    onChange(t) {
        this._onChangeCbs.add(t);
    }
    removeOnChange(t) {
        this._onChangeCbs.delete(t);
    }
    setValue(t) {
        t != this._value && (this._value = t, this._onChangeCbs.forEach((e => e(t))));
    }
}

const sa = [ "error", "fallback", "none" ];

class ia {
    constructor(t) {
        let e = [], s = null, i = !0, n = "adlad", o = "fallback", a = !1;
        t && (Array.isArray(t) ? e = t : (e = t.plugins || [], void 0 !== t.plugin && (s = t.plugin), 
        !1 === t.allowQueryStringPluginSelection && (i = !1), t.pluginSelectQueryStringKey && (n = t.pluginSelectQueryStringKey), 
        t.invalidQueryStringPluginBehaviour && sa.includes(t.invalidQueryStringPluginBehaviour) && (o = t.invalidQueryStringPluginBehaviour), 
        t.useTestAds && (a = !0)));
        for (const t of e) if (!t.name.match(/^[a-z]([a-z_-]*[a-z])?$/)) throw new Error(`The plugin "${t.name}" has an invalid name.`);
        this._plugin = null;
        let r = !1;
        if (i && window.location) {
            const t = new URL(window.location.href).searchParams.get(n);
            if (t) {
                const s = e.find((e => e.name == t)) || null;
                if (!s) {
                    if ("error" == o) throw new Error(`The plugin "${t}" does not exist.`);
                    "fallback" == o || "none" == o && (r = !0);
                }
                s && (r = !0, this._plugin = s);
            }
        }
        if (!r && null != s) {
            if ("none" != s) {
                const t = e.find((t => t.name == s));
                if (!t) throw new Error(`The plugin "${s}" does not exist.`);
                this._plugin = t;
            }
            r = !0;
        }
        r || (this._plugin = function(t = []) {
            const e = t.filter((t => !t.shouldBeActive || t.shouldBeActive()));
            return e.length > 0 ? e[0] : null;
        }(e), r = !0), this._manualNeedsPause = !1, this._plugin && this._plugin.manualNeedsPause && (this._manualNeedsPause = !0), 
        this._manualNeedsMute = !1, this._plugin && this._plugin.manualNeedsMute && (this._manualNeedsMute = !0), 
        this._needsPauseState = new ea(!1), this._needsMuteState = new ea(!1), this._canShowFullScreenAdState = new ea(!1), 
        this._canShowRewardedAdState = new ea(!1), this._canShowBannerAdState = new ea(!1);
        let l = null;
        if (this._plugin) if (this._plugin.initialize) {
            const t = this._plugin.initialize, e = this._plugin.manualNeedsPause, s = this._plugin.manualNeedsMute, i = this._plugin.name;
            let n = !1, o = !1;
            const r = this._plugin.showFullScreenAd, h = this._plugin.showRewardedAd, c = this._plugin.showBannerAd;
            l = (async () => {
                try {
                    await t({
                        useTestAds: a,
                        setNeedsPause: t => {
                            if (!e) throw new Error("Plugin is not allowed to modify needsPause because 'manualNeedsPause' is not set.");
                            this._needsPauseState.setValue(t);
                        },
                        setNeedsMute: t => {
                            if (!s) throw new Error("Plugin is not allowed to modify needsMute because 'manualNeedsMute' is not set.");
                            this._needsMuteState.setValue(t);
                        },
                        setCanShowFullScreenAd: t => {
                            n = !0, this._canShowFullScreenAdState.setValue(t);
                        },
                        setCanShowRewardedAd: t => {
                            o = !0, this._canShowRewardedAdState.setValue(t);
                        },
                        loadScriptTag(t) {
                            const e = document.createElement("script");
                            return e.src = t, document.body.appendChild(e), new Promise(((t, s) => {
                                e.addEventListener("load", (() => {
                                    t();
                                })), e.addEventListener("error", (t => {
                                    s(t.error);
                                }));
                            }));
                        }
                    });
                } catch (t) {
                    console.warn(`The "${i}" AdLad plugin failed to initialize`, t);
                }
                !n && r && this._canShowFullScreenAdState.setValue(!0), !o && h && this._canShowRewardedAdState.setValue(!0), 
                c && this._canShowBannerAdState.setValue(!0);
            })();
        } else this._plugin.showFullScreenAd && this._canShowFullScreenAdState.setValue(!0), 
        this._plugin.showRewardedAd && this._canShowRewardedAdState.setValue(!0);
        this._pluginInitializePromise = l, this._isShowingAd = !1, this._loadingState = new Jo({
            defaultState: !0,
            defaultPluginState: !1,
            pluginInitializePromise: this._pluginInitializePromise,
            trueCall: () => {
                if (this._plugin && this._plugin.loadStart) return this._plugin.loadStart();
            },
            falseCall: () => {
                if (this._plugin && this._plugin.loadStop) return this._plugin.loadStop();
            },
            pluginName: this._plugin?.name || "",
            stateName: "loading"
        }), this._gameplayStartState = new Jo({
            pluginInitializePromise: this._pluginInitializePromise,
            trueCall: () => {
                if (this._plugin && this._plugin.gameplayStart) {
                    const t = this._lastGameplayStartCallArgs;
                    return this._plugin.gameplayStart(...t);
                }
            },
            falseCall: () => {
                if (this._plugin && this._plugin.gameplayStop) {
                    const t = this._lastGameplayStopCallArgs;
                    return this._plugin.gameplayStop(...t);
                }
            },
            pluginName: this._plugin?.name || "",
            stateName: "gameplay start/stop"
        }), this._lastGameplayStartState = !1, this._lastGameplayStartCallArgs = [], this._lastGameplayStopCallArgs = [], 
        this.gameplayStart = t => {
            if (this._lastGameplayStartState = !0, t && this.activePlugin && Object.prototype.hasOwnProperty.call(t, this.activePlugin)) {
                const e = t;
                this._lastGameplayStartCallArgs = [ e[this.activePlugin] ];
            } else this._lastGameplayStartCallArgs = [];
            this._updateGameplayStartState();
        }, this.gameplayStop = t => {
            if (this._lastGameplayStartState = !1, t && this.activePlugin && Object.prototype.hasOwnProperty.call(t, this.activePlugin)) {
                const e = t;
                this._lastGameplayStopCallArgs = [ e[this.activePlugin] ];
            } else this._lastGameplayStopCallArgs = [];
            this._updateGameplayStartState();
        };
    }
    get activePlugin() {
        return this._plugin ? this._plugin.name : null;
    }
    async _updateGameplayStartState() {
        this._gameplayStartState.setState(this._lastGameplayStartState && !this._isShowingAd), 
        await this._gameplayStartState.waitForEmptyQueue();
    }
    loadStart() {
        this._loadingState.setState(!0);
    }
    loadStop() {
        this._loadingState.setState(!1);
    }
    get needsPause() {
        return this._needsPauseState.value;
    }
    get needsMute() {
        return this._needsMuteState.value;
    }
    onNeedsPauseChange(t) {
        this._needsPauseState.onChange(t);
    }
    removeOnNeedsPauseChange(t) {
        this._needsPauseState.removeOnChange(t);
    }
    onNeedsMuteChange(t) {
        this._needsMuteState.onChange(t);
    }
    removeOnNeedsMuteChange(t) {
        this._needsMuteState.removeOnChange(t);
    }
    async _showPluginFullScreenAd(t) {
        if (this._isShowingAd) return {
            didShowAd: !1,
            errorReason: "already-playing"
        };
        this._isShowingAd = !0, await this._updateGameplayStartState();
        try {
            if (!this._plugin) return {
                didShowAd: !1,
                errorReason: "no-active-plugin"
            };
            if (!t) return {
                didShowAd: !1,
                errorReason: "not-supported"
            };
            let e;
            this._pluginInitializePromise && await this._pluginInitializePromise, this._manualNeedsPause || this._needsPauseState.setValue(!0), 
            this._manualNeedsMute || this._needsMuteState.setValue(!0);
            try {
                e = await t();
            } catch (t) {
                console.error(`An error occurred while trying to display an ad from the "${this._plugin.name}" plugin:`, t);
            }
            return e ? function(t) {
                let e;
                if (t && "object" == typeof t) if (!0 === t.didShowAd || null === t.didShowAd) e = {
                    didShowAd: t.didShowAd,
                    errorReason: null
                }; else {
                    const s = [ "not-supported", "no-ad-available", "adblocker", "time-constraint", "user-dismissed", "unknown" ], i = s.indexOf(t.errorReason);
                    let n = s[i];
                    n || (n = "unknown"), e = {
                        didShowAd: !1,
                        errorReason: n
                    };
                } else e = {
                    didShowAd: !1,
                    errorReason: "unknown"
                };
                return e;
            }(e) : {
                didShowAd: !1,
                errorReason: "unknown"
            };
        } finally {
            this._isShowingAd = !1, this._manualNeedsMute || this._needsMuteState.setValue(!1), 
            this._manualNeedsPause || this._needsPauseState.setValue(!1), this._updateGameplayStartState();
        }
    }
    get canShowFullScreenAd() {
        return this._canShowFullScreenAdState.value;
    }
    onCanShowFullScreenAdChange(t) {
        this._canShowFullScreenAdState.onChange(t);
    }
    removeOnCanShowFullScreenAdChange(t) {
        this._canShowFullScreenAdState.removeOnChange(t);
    }
    async showFullScreenAd() {
        let t;
        return this._plugin && (t = this._plugin.showFullScreenAd), await this._showPluginFullScreenAd(t);
    }
    get canShowRewardedAd() {
        return this._canShowRewardedAdState.value;
    }
    onCanShowRewardedAdChange(t) {
        this._canShowRewardedAdState.onChange(t);
    }
    removeOnCanShowRewardedAdChange(t) {
        this._canShowRewardedAdState.removeOnChange(t);
    }
    async showRewardedAd() {
        let t;
        return this._plugin && (t = this._plugin.showRewardedAd), await this._showPluginFullScreenAd(t);
    }
    get canShowBannerAd() {
        return this._canShowBannerAdState.value;
    }
    onCanShowBannerAdChange(t) {
        this._canShowBannerAdState.onChange(t);
    }
    removeOnCanShowBannerAdChange(t) {
        this._canShowBannerAdState.removeOnChange(t);
    }
    async showBannerAd(t, e = {}) {
        if ("string" == typeof t) {
            const e = document.getElementById(t);
            if (!e) throw new Error(`Element with id "${t}" was not found.`);
            t = e;
        }
        if (!this._plugin || !this.activePlugin || !this._plugin.showBannerAd) return;
        this._pluginInitializePromise && await this._pluginInitializePromise;
        const s = t.getBoundingClientRect(), i = document.createElement("div");
        t.appendChild(i), i.id = function() {
            let t = (new Date).getTime(), e = performance && performance.now && 1e3 * performance.now() || 0;
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (s => {
                let i = 16 * Math.random();
                return t > 0 ? (i = (t + i) % 16 | 0, t = Math.floor(t / 16)) : (i = (e + i) % 16 | 0, 
                e = Math.floor(e / 16)), ("x" === s ? i : 3 & i | 8).toString(16);
            }));
        }(), i.style.width = "100%", i.style.height = "100%";
        const n = (e.pluginOptions || {})[this.activePlugin];
        await this._plugin.showBannerAd({
            el: i,
            id: i.id,
            width: s.width,
            height: s.height
        }, n);
    }
    async destroyBannerAd(t, e = {}) {
        if ("string" == typeof t) {
            const e = document.getElementById(t);
            if (!e) throw new Error(`Element with id "${t}" was not found.`);
            t = e;
        }
        if (!this._plugin || !this.activePlugin || !this._plugin.destroyBannerAd) return;
        this._pluginInitializePromise && await this._pluginInitializePromise;
        const s = t.children[0];
        if (!(s instanceof HTMLElement)) return;
        const i = (e.pluginOptions || {})[this.activePlugin];
        await this._plugin.destroyBannerAd({
            el: s,
            id: s.id
        }, i), t.removeChild(s);
    }
    async customRequest(t, ...e) {
        if (this.activePlugin) return await this.customRequestSpecific(this.activePlugin, t, ...e);
    }
    async customRequestSpecific(t, e, ...s) {
        if (t != this.activePlugin || !this._plugin || !this._plugin.customRequests) return;
        this._pluginInitializePromise && await this._pluginInitializePromise;
        const i = this._plugin.customRequests[e];
        return i ? i(...s) : void 0;
    }
}

class na {
    constructor(t, e, s) {
        this.obj = t, this.pos = e.clone();
        const i = s.volumeArea;
        this.pos.x += A(-i, i), this.pos.y += A(-i, i), this.pos.z += A(-i, i), this.scale = A(s.minScale, s.maxScale), 
        this.t = 0, this.moveSpeed = A(s.minSpeed, s.maxSpeed), this.lifeTime = A(s.minLifetime, s.maxLifetime), 
        this.rotate = s.rotate, this.startRot = Math.random() > .5 ? 1 : -1;
    }
    loop(t, e, i) {
        this.t += .001 * e, this.obj.position.copy(this.pos), this.obj.position.y += this.t * this.moveSpeed;
        const n = (o = P(this.t / .3)) < .5 ? 8 * o * o * o * o : 1 - Math.pow(-2 * o + 2, 4) / 2;
        var o;
        const a = Co(P(this.lifeTime - this.t)), r = this.scale * n * a;
        if (this.obj.scale.set(r, r, r), this.rotate) {
            const t = 50, e = 30 * this.startRot / (this.t * t + 1);
            this.obj.quaternion.setFromAxisAngle(new s(0, 1, 0), e), this.obj.quaternion.multiply(i);
        } else this.obj.quaternion.copy(i);
    }
    getShouldBeDestroyed() {
        return this.t > this.lifeTime;
    }
}

class oa {
    constructor(t) {
        this.particles = new Set, this.obj = new r, t.add(this.obj), this.loadedAssets = new Map, 
        this.groupConfigs = new Map, this.groupConfigs.set("positive", {
            volumeArea: .3,
            minSpeed: .1,
            maxSpeed: .3,
            minScale: .03,
            maxScale: .08,
            minLifetime: .8,
            maxLifetime: 2
        }), this.groupConfigs.set("negative", {
            volumeArea: .3,
            minSpeed: .1,
            maxSpeed: .3,
            minScale: .03,
            maxScale: .08,
            minLifetime: .8,
            maxLifetime: 2
        }), this.groupConfigs.set("star", {
            volumeArea: 1.8,
            minSpeed: .1,
            maxSpeed: .3,
            minScale: .05,
            maxScale: .2,
            minLifetime: 2,
            maxLifetime: 5,
            rotate: !0
        }), this.groupConfigs.set("coin", {
            volumeArea: .4,
            minSpeed: .8,
            maxSpeed: 3,
            minScale: .05,
            maxScale: .2,
            minLifetime: .8,
            maxLifetime: 2,
            rotate: !0
        });
    }
    loadAssets() {
        this.loadAsset("positive"), this.loadAsset("negative"), this.loadAsset("star"), 
        this.loadAsset("coin");
    }
    async loadAsset(t) {
        const e = await fa().assets.loadGlbViaWorker(`particles/${t}.glb`);
        e && this.loadedAssets.set(t, e);
    }
    createGroup(t, e, s = 4) {
        const i = this.loadedAssets.get(t), n = this.groupConfigs.get(t);
        if (i && n && !(this.particles.size > 30)) for (let t = 0; t < s; t++) {
            const t = i.clone();
            this.obj.add(t);
            const s = new na(t, e, n);
            this.particles.add(s);
        }
    }
    loop(t, e) {
        const s = fa().cam.flatCamRot;
        for (const i of this.particles) i.loop(t, e, s), i.getShouldBeDestroyed() && this.particles.delete(i);
    }
}

let aa = "serviceWorker" in navigator;

navigator.userAgent.includes("AppleWebKit/605.1.15") && (aa = !1), aa = !1;

let ra = !1, la = null;

const ha = new Set;

function ca() {
    ha.forEach((t => t()));
}

window.addEventListener("beforeinstallprompt", (t => {
    da.forEach((t => t())), t.preventDefault();
}));

const da = new Set;

class ua {
    constructor(t, e) {
        this.adLad = t, this.gameContainer = e;
        const s = new URL(location.href).searchParams.get("featureflags") || "";
        this.bannersEnabled = s.split(",").includes("banner"), this.initialBannerHidden = !1, 
        this.mainBannerEl = null, this.adLad.canShowBannerAd && this.updateInitialBannerAd(), 
        this.adLad.onCanShowBannerAdChange((() => {
            this.updateInitialBannerAd();
        }));
    }
    updateInitialBannerAd() {
        const t = this.bannersEnabled && this.adLad.canShowBannerAd && !this.initialBannerHidden;
        t && !this.mainBannerEl ? (this.mainBannerEl = document.createElement("div"), this.mainBannerEl.classList.add("ad", "bottom-banner"), 
        this.gameContainer.appendChild(this.mainBannerEl), this.adLad.showBannerAd(this.mainBannerEl)) : !t && this.mainBannerEl && (this.gameContainer.removeChild(this.mainBannerEl), 
        this.mainBannerEl = null);
    }
    initialGameplayStarted() {
        setTimeout((() => {
            this.initialBannerHidden = !0, this.updateInitialBannerAd();
        }), 6e3);
    }
    requestDialogBannerEl(t) {
        if (!this.bannersEnabled || !this.adLad.canShowBannerAd || !this.initialBannerHidden) return null;
        if ("upgrades" == t && "crazygames" == this.adLad.activePlugin) return null;
        const e = document.createElement("div");
        return e.classList.add("ad", "dialog-banner"), this.adLad.showBannerAd(e), e;
    }
}

class pa {
    constructor() {
        if (this.scene = new _, this.scene.background = new R(0, 0, 0), this.maxDt = 100, 
        this.now = 0, this.prevNow = 0, this.dt = 0, Zn.setCurrentScene(this.scene), this.gameWrapper = document.getElementById("gameWrapper"), 
        this.gameContainer = document.getElementById("gameContainer"), !this.gameContainer || !this.gameWrapper) throw new Error("game elements not found");
        this.coins = new Zo, this.input = new qo(this.gameContainer), this.renderer = new $n, 
        this.assets = new Go, this.game = null, this.cam = new jn, this.sfx = new $o, this.upgradeManager = new Yo(this.coins), 
        this.particleManager = new oa(this.scene);
        const t = [], e = {
            plugins: t,
            plugin: "google-ad-placement",
            pluginSelectQueryStringKey: "ads",
            invalidQueryStringPluginBehaviour: "none",
            useTestAds: !1
        };
        t.push(function() {
            let t = !1, e = !1;
            const s = new Set;
            let i, n = !1;
            function o() {
                n ? parent.cmgGameEvent("replay", i) : parent.cmgGameEvent("start", i);
            }
            return {
                name: "coolmathgames",
                async initialize(i) {
                    if (t) throw new Error("CoolmathGames plugin is being initialized more than once");
                    function n(t) {
                        const e = document.createElement("script");
                        return e.src = t, document.body.appendChild(e), new Promise(((t, s) => {
                            e.addEventListener("load", (() => {
                                t();
                            })), e.addEventListener("error", (t => {
                                s(t.error);
                            }));
                        }));
                    }
                    t = !0, document.addEventListener("adBreakStart", (() => {
                        i.setNeedsPause(!0), i.setNeedsMute(!0), e = !0;
                    })), document.addEventListener("adBreakComplete", (() => {
                        i.setNeedsPause(!1), i.setNeedsMute(!1), s.forEach((t => t())), s.clear();
                    })), await n("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), 
                    await n("https://www.coolmathgames.com/sites/default/files/cmg-ads.js");
                },
                manualNeedsPause: !0,
                manualNeedsMute: !0,
                async gameplayStart() {
                    o();
                },
                async showFullScreenAd() {
                    e = !1;
                    const t = new Promise((t => {
                        s.add(t);
                    }));
                    return cmgAdBreak(), await t, e ? {
                        didShowAd: !0,
                        errorReason: null
                    } : {
                        didShowAd: !1,
                        errorReason: "time-constraint"
                    };
                },
                customRequests: {
                    setCurrentLevel(t, e) {
                        i = t, n = e, o();
                    }
                }
            };
        }()), e.plugin = "coolmathgames", this.adLad = new ia(e), this.adLad.onNeedsMuteChange((t => {
            this.sfx.setMutedAds(t);
        })), "google-ad-placement" == this.adLad.activePlugin && function() {
            try {
                var t = window.location.hostname, e = document.createElement("script"), s = document.getElementsByTagName("script")[0], i = "https://cmp.quantcast.com".concat("/choice/", "A-YH9MP3vgq7x", "/", t, "/choice.js?tag_version=V2"), n = 0;
                e.async = !0, e.type = "text/javascript", e.src = i, s.parentNode.insertBefore(e, s), 
                function() {
                    for (var t, e = "__tcfapiLocator", s = [], i = window; i; ) {
                        try {
                            if (i.frames.__tcfapiLocator) {
                                t = i;
                                break;
                            }
                        } catch (t) {}
                        if (i === window.top) break;
                        i = i.parent;
                    }
                    t || (function t() {
                        var s = i.document, n = !!i.frames.__tcfapiLocator;
                        if (!n) if (s.body) {
                            var o = s.createElement("iframe");
                            o.style.cssText = "display:none", o.name = e, s.body.appendChild(o);
                        } else setTimeout(t, 5);
                        return !n;
                    }(), i.__tcfapi = function() {
                        var t, e = arguments;
                        if (!e.length) return s;
                        if ("setGdprApplies" === e[0]) e.length > 3 && 2 === e[2] && "boolean" == typeof e[3] && (t = e[3], 
                        "function" == typeof e[2] && e[2]("set", !0)); else if ("ping" === e[0]) {
                            var i = {
                                gdprApplies: t,
                                cmpLoaded: !1,
                                cmpStatus: "stub"
                            };
                            "function" == typeof e[2] && e[2](i);
                        } else "init" === e[0] && "object" == typeof e[3] && (e[3] = Object.assign(e[3], {
                            tag_version: "V2"
                        })), s.push(e);
                    }, i.addEventListener("message", (function(t) {
                        var e = "string" == typeof t.data, s = {};
                        try {
                            s = e ? JSON.parse(t.data) : t.data;
                        } catch (t) {}
                        var i = s.__tcfapiCall;
                        i && window.__tcfapi(i.command, i.version, (function(s, n) {
                            var o = {
                                __tcfapiReturn: {
                                    returnValue: s,
                                    success: n,
                                    callId: i.callId
                                }
                            };
                            e && (o = JSON.stringify(o)), t && t.source && t.source.postMessage && t.source.postMessage(o, "*");
                        }), i.parameter);
                    }), !1));
                }();
                var o = function() {
                    var t = arguments;
                    typeof window.__uspapi !== o && setTimeout((function() {
                        void 0 !== window.__uspapi && window.__uspapi.apply(window.__uspapi, t);
                    }), 500);
                };
                if (void 0 === window.__uspapi) {
                    window.__uspapi = o;
                    var a = setInterval((function() {
                        n++, window.__uspapi === o && n < 3 ? console.warn("USP is not accessible") : clearInterval(a);
                    }), 6e3);
                }
            } catch (t) {
                console.error("Quantcast is terrible and not pleasant to use. No personalized ads for us I guess. This is the error they gave us:", t);
            }
        }(), "gamedistribution" == this.adLad.activePlugin && this.adLad.showFullScreenAd(), 
        this.bannerAdManager = new ua(this.adLad, this.gameContainer), this.progressEl = document.getElementById("progress"), 
        this.loadScreenEl = document.getElementById("loadScreen"), this.assets.initialPackage.onProgress((t => {
            this.progressEl.value = 80 * t;
        })), this.assets.mainPackage.onProgress((t => {
            this.game && this.game.loadScreenFloorVisible && (this.progressEl.value = 80 * t);
        })), this.isInProgressLoadStep2 = !1;
        {
            document.title = "Raccoon Retail - Play it now at CoolmathGames.com";
            const t = document.createElement("div");
            t.style.cssText = "\n\t\t\t\tbackground: url(./static/coolmathSplash.png) center / contain no-repeat, #242424;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\ttransition: transform 1s;\n\t\t\t\tz-index: 100;\n\t\t\t", 
            document.body.appendChild(t), setTimeout((() => {
                t.style.transform = "rotate(360deg) scale(0)", setTimeout((() => {
                    document.body.removeChild(t);
                }), 1e3);
            }), 1500);
        }
        this.boundLoop = this.vsyncLoop.bind(this);
    }
    init() {
        this.coins.init(), this.renderer.init(this.gameContainer), this.upgradeManager.init(), 
        this.game = new jo(this, this.scene), this.sfx.init(), this.sfx.playSound("backgroundMusic"), 
        this.sfx.playSound("ambient"), this.particleManager.loadAssets(), this.adLad.loadStop(), 
        this.adLad.gameplayStart(), window.requestAnimationFrame(this.boundLoop), async function() {
            if (ra) throw new Error("install() is already called");
            if (ra = !0, !aa) return;
            let t;
            t = "../sw.js";
            const e = new URL("../sw.js", import.meta.url), s = await navigator.serviceWorker.register(e.href, {
                scope: "./"
            });
            la = s, s.addEventListener("updatefound", (t => {
                const e = s.installing;
                s.active && e && e.addEventListener("statechange", (t => {
                    "installed" == e.state && ca();
                }));
            })), la.waiting && ca(), navigator.serviceWorker.addEventListener("controllerchange", (() => {
                window.location.reload();
            }));
        }();
    }
    vsyncLoop() {
        this.loop(), window.requestAnimationFrame(this.boundLoop);
    }
    loop() {
        let t = performance.now();
        this.prevNow <= 0 && (this.prevNow = t);
        const e = t - this.prevNow;
        if (0 == e) return;
        const s = Math.min(e, this.maxDt);
        this.prevNow = t, this.now += s, t = this.now, this.dt = s, this.input.loop(t, s), 
        this.game && this.game.loop(t, s), this.sfx.loop(t, s), this.cam.loop(t, s), Zn.loop(), 
        this.particleManager.loop(t, s), this.renderer.loop(t, s);
    }
    setProgressLoadStep2() {
        this.loadScreenEl.style.display = "none", this.isInProgressLoadStep2 = !0, this.updateProgressVisibility();
    }
    setArrowsTutorialKeyboardDismissed() {
        this.arrowstutorialKeyboardDismissed = !0, this.updateProgressVisibility();
    }
    updateProgressVisibility() {
        let t = !1;
        this.isInProgressLoadStep2 ? this.game && this.game.loadingScreenActive && this.arrowstutorialKeyboardDismissed && (t = !0) : t = !0, 
        this.progressEl.style.display = t ? "" : "none";
    }
    initialGameplayStarted() {
        this.gameWrapper.classList.add("borderless"), this.bannerAdManager.initialGameplayStarted();
    }
}

let ga = "";

if (window.Intl && Intl.RelativeTimeFormat) {
    const t = new Intl.RelativeTimeFormat, e = Date.now() / 1e3 - Number("1702403754");
    ga = e < 60 ? t.format(-Math.floor(e), "second") : e < 3600 ? t.format(-Math.floor(e / 60), "minute") : e < 86400 ? t.format(-Math.floor(e / 60 / 60), "hour") : e < 31536e3 ? t.format(-Math.floor(e / 60 / 60 / 24), "day") : t.format(-Math.floor(e / 60 / 60 / 24 / 365), "year"), 
    ga = " (" + ga + ")";
}

console.log("loading v1702403754" + ga);

const ma = new pa;

function fa() {
    return ma;
}

ma.init();

export { pa as Main, fa as getMainInstance };
