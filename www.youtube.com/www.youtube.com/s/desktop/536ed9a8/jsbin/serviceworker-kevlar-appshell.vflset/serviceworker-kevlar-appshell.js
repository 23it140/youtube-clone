'use strict';
var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}

function ea(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function r(a) {
    return ea(a())
}
da("Symbol.dispose", function(a) {
    return a ? a : Symbol("Symbol.dispose")
});
da("globalThis", function(a) {
    return a || ca
});
da("Object.values", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});

function fa(a, b) {
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
da("Array.prototype.values", function(a) {
    return a ? a : function() {
        return fa(this, function(b, c) {
            return c
        })
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    g[0] === "" && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t = this || self;

function ha(a, b) {
    var c = u("CLOSURE_FLAGS");
    a = c && c[a];
    return a != null ? a : b
}

function u(a, b) {
    a = a.split(".");
    b = b || t;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], b == null) return null;
    return b
}

function ia(a) {
    var b = typeof a;
    b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return b == "array" || b == "object" && typeof a.length == "number"
}

function ja(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ka(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function la(a, b, c) {
    la = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ja : ka;
    return la.apply(null, arguments)
}

function w(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function ma(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Ja = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.qb = function(d, e, f) {
        for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
        return b.prototype[e].apply(d, g)
    }
};

function na(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, na);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    b !== void 0 && (this.cause = b)
}
ma(na, Error);
na.prototype.name = "CustomError";
var oa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
let pa = globalThis.trustedTypes,
    qa;

function ra() {
    let a = null;
    if (!pa) return a;
    try {
        const b = c => c;
        a = pa.createPolicy("goog#html", {
            createHTML: b,
            createScript: b,
            createScriptURL: b
        })
    } catch (b) {}
    return a
};
var sa = class {
    constructor(a) {
        this.h = a
    }
    toString() {
        return this.h + ""
    }
};

function ta(a, b = `unexpected value ${a}!`) {
    throw Error(b);
};

function ua(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function va(a, b) {
    return Array.prototype.map.call(a, b, void 0)
}

function wa(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0);
    b >= 0 && Array.prototype.splice.call(a, b, 1)
}

function xa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (ia(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ya(a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b
};

function za(a) {
    var b = u("window.location.href");
    a == null && (a = 'Unknown Error of type "null/undefined"');
    if (typeof a === "string") return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || t.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = Aa(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (c ==
            null) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, Ba[c]) c = Ba[c];
                else {
                    c = String(c);
                    if (!Ba[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        Ba[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = Ba[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            typeof a.toString === "function" && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: b
    }
}

function Aa(a, b) {
    b || (b = {});
    b[Ca(a)] = !0;
    var c = a.stack || "";
    (a = a.cause) && !b[Ca(a)] && (c += "\nCaused by: ", a.stack && a.stack.indexOf(a.toString()) == 0 || (c += typeof a === "string" ? a : a.message + "\n"), c += Aa(a, b));
    return c
}

function Ca(a) {
    var b = "";
    typeof a.toString === "function" && (b = "" + a);
    return b + a.stack
}
var Ba = {};
var Da = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function Ea(a) {
    return a ? decodeURI(a) : a
}

function Ga(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ga(a, String(b[d]), c);
    else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
}

function Ha(a) {
    var b = [],
        c;
    for (c in a) Ga(c, a[c], b);
    return b.join("&")
};

function Ia() {
    throw Error("Invalid UTF8");
}

function Ja(a, b) {
    b = String.fromCharCode.apply(null, b);
    return a == null ? b : a + b
}
let Ka = void 0,
    La;
const Ma = typeof TextDecoder !== "undefined";

function Na(a) {
    t.setTimeout(() => {
        throw a;
    }, 0)
};
var Oa = ha(610401301, !1),
    Pa = ha(645172343, !0),
    Qa = ha(660014094, !1);

function Ra() {
    var a = t.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var Sa;
const Ta = t.navigator;
Sa = Ta ? Ta.userAgentData || null : null;

function Ua(a) {
    return Oa ? Sa ? Sa.brands.some(({
        brand: b
    }) => b && b.indexOf(a) != -1) : !1 : !1
}

function x(a) {
    return Ra().indexOf(a) != -1
};

function Va() {
    return Oa ? !!Sa && Sa.brands.length > 0 : !1
}

function Wa() {
    return Va() ? Ua("Chromium") : (x("Chrome") || x("CriOS")) && !(Va() ? 0 : x("Edge")) || x("Silk")
};
var Xa = Va() ? !1 : x("Trident") || x("MSIE");
!x("Android") || Wa();
Wa();
var Ya = x("Safari") && !(Wa() || (Va() ? 0 : x("Coast")) || (Va() ? 0 : x("Opera")) || (Va() ? 0 : x("Edge")) || (Va() ? Ua("Microsoft Edge") : x("Edg/")) || (Va() ? Ua("Opera") : x("OPR")) || x("Firefox") || x("FxiOS") || x("Silk") || x("Android")) && !(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod"));
var Za = {},
    $a = null;

function ab(a, b) {
    b === void 0 && (b = 0);
    bb();
    b = Za[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            k = a[e + 1],
            h = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | k >> 4];
        k = b[(k & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[f++] = "" + l + g + k + h
    }
    l = 0;
    h = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], h = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + h + d
    }
    return c.join("")
}

function cb(a) {
    var b = a.length,
        c = b * 3 / 4;
    c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    db(a, function(f) {
        d[e++] = f
    });
    return e !== c ? d.subarray(0, e) : d
}

function db(a, b) {
    function c(h) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                n = $a[l];
            if (n != null) return n;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return h
    }
    bb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);
        if (k === 64 && e === -1) break;
        b(e << 2 | f >> 4);
        g != 64 && (b(f << 4 & 240 | g >> 2), k != 64 && b(g << 6 & 192 | k))
    }
}

function bb() {
    if (!$a) {
        $a = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
            var d = a.concat(b[c].split(""));
            Za[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                $a[f] === void 0 && ($a[f] = e)
            }
        }
    }
};
var eb = typeof Uint8Array !== "undefined",
    fb = !Xa && typeof btoa === "function";

function gb(a) {
    if (!fb) return ab(a);
    let b = "",
        c = 0;
    const d = a.length - 10240;
    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
    return btoa(b)
}
const hb = /[-_.]/g,
    ib = {
        "-": "+",
        _: "/",
        ".": "="
    };

function jb(a) {
    return ib[a] || ""
}

function kb(a) {
    if (!fb) return cb(a);
    hb.test(a) && (a = a.replace(hb, jb));
    a = atob(a);
    const b = new Uint8Array(a.length);
    for (let c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
    return b
}

function lb(a) {
    return eb && a != null && a instanceof Uint8Array
}
var mb = {};
let nb;

function ob(a) {
    if (a !== mb) throw Error("illegal external caller");
}

function pb() {
    return nb || (nb = new qb(null, mb))
}

function rb(a) {
    ob(mb);
    var b = a.h;
    b = b == null || lb(b) ? b : typeof b === "string" ? kb(b) : null;
    return b == null ? b : a.h = b
}
var qb = class {
    constructor(a, b) {
        ob(b);
        this.h = a;
        if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
    }
    sizeBytes() {
        const a = rb(this);
        return a ? a.length : 0
    }
};
let sb;

function tb() {
    const a = Error();
    ya(a, "incident");
    Na(a)
}

function ub(a) {
    a = Error(a);
    ya(a, "warning");
    return a
};

function vb() {
    return typeof BigInt === "function"
};

function wb(a) {
    return Array.prototype.slice.call(a)
};
var xb = typeof Symbol === "function" && typeof Symbol() === "symbol";

function yb(a) {
    return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : a
}
var zb = yb(),
    Ab = yb("2ex"),
    Bb = yb("1oa");
[...Object.values({
    bb: 1,
    Za: 2,
    Ya: 4,
    hb: 8,
    gb: 16,
    fb: 32,
    Pa: 64,
    mb: 128,
    Xa: 256,
    Wa: 512,
    ab: 1024,
    Ua: 2048,
    lb: 4096,
    Va: 8192,
    Sa: 16384
})];
var Cb = xb ? (a, b) => {
        a[zb] |= b
    } : (a, b) => {
        a.h !== void 0 ? a.h |= b : Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    },
    Db = xb ? (a, b) => {
        a[zb] &= ~b
    } : (a, b) => {
        a.h !== void 0 && (a.h &= ~b)
    },
    y = xb ? a => a[zb] | 0 : a => a.h | 0,
    A = xb ? a => a[zb] : a => a.h,
    D = xb ? (a, b) => {
        a[zb] = b
    } : (a, b) => {
        a.h !== void 0 ? a.h = b : Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };

function Eb(a, b) {
    D(b, (a | 0) & -14591)
}

function Fb(a, b) {
    D(b, (a | 34) & -14557)
};
var Gb = {},
    Hb = {};

function Ib(a) {
    return !(!a || typeof a !== "object" || a.h !== Hb)
}

function Jb(a) {
    return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
}

function Kb(a) {
    return !Array.isArray(a) || a.length ? !1 : y(a) & 1 ? !0 : !1
}
var Lb;
const Mb = [];
D(Mb, 55);
Lb = Object.freeze(Mb);

function Nb(a) {
    if (a & 2) throw Error();
}
let Ob;

function Pb(a, b) {
    (b = Ob ? b[Ob] : void 0) && (a[Ob] = wb(b))
}
let Qb;
var Rb = Object.freeze({});

function Sb(a) {
    a.wb = !0;
    return a
};
var Tb = Sb(a => typeof a === "number"),
    Ub = Sb(a => typeof a === "string"),
    Vb = Sb(a => typeof a === "boolean");
var Wb = typeof t.BigInt === "function" && typeof t.BigInt(0) === "bigint";
var bc = Sb(a => Wb ? a >= Xb && a <= Yb : a[0] === "-" ? Zb(a, $b) : Zb(a, ac));
const $b = Number.MIN_SAFE_INTEGER.toString(),
    Xb = Wb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
    ac = Number.MAX_SAFE_INTEGER.toString(),
    Yb = Wb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

function Zb(a, b) {
    if (a.length > b.length) return !1;
    if (a.length < b.length || a === b) return !0;
    for (let c = 0; c < a.length; c++) {
        const d = a[c],
            e = b[c];
        if (d > e) return !1;
        if (d < e) return !0
    }
};
const cc = typeof Uint8Array.prototype.slice === "function";
let E = 0,
    F = 0;

function dc(a) {
    const b = a >>> 0;
    E = b;
    F = (a - b) / 4294967296 >>> 0
}

function ec(a) {
    if (a < 0) {
        dc(0 - a);
        const [b, c] = fc(E, F);
        E = b >>> 0;
        F = c >>> 0
    } else dc(a)
}

function gc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (b <= 2097151) var c = "" + (4294967296 * b + a);
    else vb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + hc(c) + hc(a));
    return c
}

function hc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a
}

function fc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b]
};

function ic(a) {
    return a.displayName || a.name || "unknown type name"
}
const jc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

function kc(a) {
    const b = typeof a;
    switch (b) {
        case "bigint":
            return !0;
        case "number":
            return Number.isFinite(a)
    }
    return b !== "string" ? !1 : jc.test(a)
}

function lc(a) {
    if (a == null) return a;
    if (typeof a === "string") {
        if (!a) return;
        a = +a
    }
    if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
}

function mc(a) {
    if (!kc(a)) throw ub("int64");
    switch (typeof a) {
        case "string":
            kc(a);
            var b = Math.trunc(Number(a));
            if (Number.isSafeInteger(b)) a = String(b);
            else if (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), !(a[0] === "-" ? a.length < 20 || a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 || a.length === 19 && Number(a.substring(0, 6)) < 922337)) {
                if (a.length < 16) ec(Number(a));
                else if (vb()) a = BigInt(a), E = Number(a & BigInt(4294967295)) >>> 0, F = Number(a >> BigInt(32) & BigInt(4294967295));
                else {
                    b = +(a[0] === "-");
                    F = E = 0;
                    var c =
                        a.length;
                    for (let d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) {
                        const f = Number(a.slice(d, e));
                        F *= 1E6;
                        E = E * 1E6 + f;
                        E >= 4294967296 && (F += Math.trunc(E / 4294967296), F >>>= 0, E >>>= 0)
                    }
                    if (b) {
                        const [d, e] = fc(E, F);
                        E = d;
                        F = e
                    }
                }
                a = E;
                b = F;
                if (b & 2147483648)
                    if (vb()) a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
                    else {
                        const [d, e] = fc(a, b);
                        a = "-" + gc(d, e)
                    }
                else a = gc(a, b)
            }
            return a;
        case "bigint":
            b = a = BigInt.asIntN(64, a);
            if (Ub(b)) {
                if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
            } else if (Tb(b) && !Number.isSafeInteger(b)) throw Error(String(b));
            Wb ? a = BigInt(a) : a = Vb(a) ? a ? "1" : "0" : Ub(a) ? a.trim() || "0" : String(a);
            return a;
        default:
            kc(a);
            a = Math.trunc(a);
            if (!Number.isSafeInteger(a)) {
                ec(a);
                b = E;
                c = F;
                if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
                b = c * 4294967296 + (b >>> 0);
                a = a ? -b : b
            }
            return a
    }
}

function nc(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a
}

function oc(a, b) {
    if (!(a instanceof b)) throw Error(`Expected instanceof ${ic(b)} but got ${a&&ic(a.constructor)}`);
    return a
}

function pc(a, b, c) {
    if (a != null && typeof a === "object" && a.T === Gb) return a;
    if (Array.isArray(a)) {
        var d = y(a),
            e = d;
        e === 0 && (e |= c & 32);
        e |= c & 2;
        e !== d && D(a, e);
        return new b(a)
    }
};

function qc(a) {
    var b = rc(a);
    if (b) return b;
    if (Math.random() > .01) return a;
    if (sc === void 0)
        if (typeof Proxy !== "function") sc = null;
        else try {
            sc = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
        } catch (c) {
            sc = null
        }
    b = sc;
    if (!b) return a;
    typeof Symbol !== "undefined" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0);
    b = new b(a, {
        set(c, d, e) {
            tc();
            c[d] = e;
            return !0
        }
    });
    uc(a, b);
    return b
}

function tc() {
    tb()
}
let vc = void 0,
    wc = void 0;

function rc(a) {
    let b;
    return (b = vc) == null ? void 0 : b.get(a)
}

function uc(a, b) {
    (vc || (vc = new WeakMap)).set(a, b);
    (wc || (wc = new WeakMap)).set(b, a)
}
let sc = void 0;
let xc, yc, zc;

function Ac(a) {
    switch (typeof a) {
        case "boolean":
            return yc || (yc = [0, void 0, !0]);
        case "number":
            return a > 0 ? void 0 : a === 0 ? zc || (zc = [0, void 0]) : [-a, void 0];
        case "string":
            return [0, a];
        case "object":
            return a
    }
}

function Bc(a, b) {
    a = Cc(a, b[0], b[1]);
    Cb(a, 16384);
    return a
}

function Cc(a, b, c) {
    a == null && (a = xc);
    xc = void 0;
    if (a == null) {
        var d = 96;
        c ? (a = [c], d |= 512) : a = [];
        b && (d = d & -33521665 | (b & 1023) << 15)
    } else {
        if (!Array.isArray(a)) throw Error("narr");
        d = y(a);
        if (d & 2048) throw Error("farr");
        if (d & 64) return a;
        d |= 64;
        if (c && (d |= 512, c !== a[0])) throw Error("mid");
        a: {
            c = a;
            const e = c.length;
            if (e) {
                const f = e - 1;
                if (Jb(c[f])) {
                    d |= 256;
                    b = f - (+!!(d & 512) - 1);
                    if (b >= 1024) throw Error("pvtlmt");
                    d = d & -33521665 | (b & 1023) << 15;
                    break a
                }
            }
            if (b) {
                b = Math.max(b, e - (+!!(d & 512) - 1));
                if (b > 1024) throw Error("spvt");
                d = d & -33521665 | (b &
                    1023) << 15
            }
        }
    }
    D(a, d);
    return a
};

function Dc(a, b) {
    return Ec(b)
}

function Ec(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "bigint":
            return bc(a) ? Number(a) : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a)
                if (Array.isArray(a)) {
                    if (Kb(a)) return
                } else {
                    if (lb(a)) return gb(a);
                    if (a instanceof qb) {
                        const b = a.h;
                        return b == null ? "" : typeof b === "string" ? b : a.h = gb(b)
                    }
                }
    }
    return a
};

function Fc(a, b, c) {
    const d = wb(a);
    var e = d.length;
    const f = b & 256 ? d[e - 1] : void 0;
    e += f ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
    if (f) {
        b = d[b] = {};
        for (const g in f) b[g] = c(f[g])
    }
    Pb(d, a);
    return d
}

function Gc(a, b, c, d, e) {
    if (a != null) {
        if (Array.isArray(a)) a = Kb(a) ? void 0 : e && y(a) & 2 ? a : Hc(a, b, c, d !== void 0, e);
        else if (Jb(a)) {
            const f = {};
            for (let g in a) f[g] = Gc(a[g], b, c, d, e);
            a = f
        } else a = b(a, d);
        return a
    }
}

function Hc(a, b, c, d, e) {
    const f = d || c ? y(a) : 0;
    d = d ? !!(f & 32) : void 0;
    const g = wb(a);
    for (let k = 0; k < g.length; k++) g[k] = Gc(g[k], b, c, d, e);
    c && (Pb(g, a), c(f, g));
    return g
}

function Ic(a) {
    return a.T === Gb ? a.toJSON() : Ec(a)
};

function Jc(a, b, c = Fb) {
    if (a != null) {
        if (eb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
            var d = y(a);
            if (d & 2) return a;
            b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
            return b ? (D(a, (d | 34) & -12293), a) : Hc(a, Jc, d & 4 ? Fb : c, !0, !0)
        }
        a.T === Gb && (c = a.o, d = A(c), a = d & 2 ? a : Kc(a, c, d, !0));
        return a
    }
}

function Kc(a, b, c, d) {
    a = a.constructor;
    xc = b = Lc(b, c, d);
    b = new a(b);
    xc = void 0;
    return b
}

function Lc(a, b, c) {
    const d = c || b & 2 ? Fb : Eb,
        e = !!(b & 32);
    a = Fc(a, b, f => Jc(f, e, d));
    Cb(a, 32 | (c ? 2 : 0));
    return a
}

function Mc(a) {
    const b = a.o,
        c = A(b);
    return c & 2 ? Kc(a, b, c, !1) : a
};

function Nc(a, b) {
    a = a.o;
    return Oc(a, A(a), b)
}

function Pc(a, b, c, d) {
    b = d + (+!!(b & 512) - 1);
    if (!(b < 0 || b >= a.length || b >= c)) return a[b]
}

function Oc(a, b, c, d) {
    if (c === -1) return null;
    const e = b >> 15 & 1023 || 536870912;
    if (c >= e) {
        if (b & 256) return a[a.length - 1][c]
    } else {
        var f = a.length;
        if (d && b & 256 && (d = a[f - 1][c], d != null)) {
            if (Pc(a, b, e, c) && Ab != null) {
                var g;
                a = (g = sb) != null ? g : sb = {};
                g = a[Ab] || 0;
                g >= 4 || (a[Ab] = g + 1, tb())
            }
            return d
        }
        return Pc(a, b, e, c)
    }
}

function Qc(a, b, c) {
    const d = a.o;
    let e = A(d);
    Nb(e);
    G(d, e, b, c);
    return a
}

function G(a, b, c, d, e) {
    const f = b >> 15 & 1023 || 536870912;
    if (c >= f || e && !Pa) {
        let g = b;
        if (b & 256) e = a[a.length - 1];
        else {
            if (d == null) return g;
            e = a[f + (+!!(b & 512) - 1)] = {};
            g |= 256
        }
        e[c] = d;
        c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
        g !== b && D(a, g);
        return g
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b
}

function Rc(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a)
}

function Sc(a, b, c, d) {
    const e = a.o;
    var f = A(e);
    Nb(f);
    if (d == null) {
        var g = Tc(e);
        if (Uc(g, e, f, c) === b) g.set(c, 0);
        else return a
    } else {
        c.includes(b);
        g = Tc(e);
        const k = Uc(g, e, f, c);
        k !== b && (k && (f = G(e, f, k)), g.set(c, b))
    }
    G(e, f, b, d);
    return a
}

function Tc(a) {
    if (xb) {
        var b;
        return (b = a[Bb]) != null ? b : a[Bb] = new Map
    }
    if (Bb in a) return a[Bb];
    b = new Map;
    Object.defineProperty(a, Bb, {
        value: b
    });
    return b
}

function Uc(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
        const g = d[f];
        Oc(b, c, g) != null && (e !== 0 && (c = G(b, c, e)), e = g)
    }
    a.set(d, e);
    return e
}

function Vc(a, b, c, d) {
    let e = A(a);
    const f = Oc(a, e, c, d);
    let g;
    if (f != null && f.T === Gb) return b = Mc(f), b !== f && G(a, e, c, b, d), b.o;
    if (Array.isArray(f)) {
        const k = y(f);
        k & 2 ? g = Lc(f, k, !1) : g = f;
        g = Bc(g, b)
    } else g = Bc(void 0, b);
    g !== f && G(a, e, c, g, d);
    return g
}

function Wc(a, b, c) {
    var d = a.o,
        e = A(d),
        f = Oc(d, e, c, !1);
    b = pc(f, b, e);
    b !== f && b != null && G(d, e, c, b, !1);
    d = b;
    if (d == null) return d;
    a = a.o;
    e = A(a);
    e & 2 || (f = Mc(d), f !== d && (d = f, G(a, e, c, d, !1)));
    return d
}

function Xc(a, b, c, d, e, f, g) {
    var k = !!(2 & b);
    e = k ? 1 : e;
    f = !!f;
    g && (g = !k);
    k = Oc(a, b, d);
    k = Array.isArray(k) ? k : Lb;
    var h = y(k),
        l = !!(4 & h);
    if (!l) {
        var n = h;
        n === 0 && (n = Yc(n, b));
        h = k;
        n |= 1;
        var q = b;
        const m = !!(2 & n);
        m && (q |= 2);
        let v = !m,
            z = !0,
            B = 0,
            C = 0;
        for (; B < h.length; B++) {
            const J = pc(h[B], c, q);
            if (J instanceof c) {
                if (!m) {
                    const Fa = !!(y(J.o) & 2);
                    v && (v = !Fa);
                    z && (z = Fa)
                }
                h[C++] = J
            }
        }
        C < B && (h.length = C);
        n |= 4;
        n = z ? n | 16 : n & -17;
        n = v ? n | 8 : n & -9;
        D(h, n);
        m && Object.freeze(h);
        h = n
    }
    if (g && !(8 & h || !k.length && (e === 1 || e === 4 && 32 & h))) {
        Rc(h) && (k = wb(k), h = Yc(h, b), b = G(a,
            b, d, k));
        c = k;
        g = h;
        for (h = 0; h < c.length; h++) n = c[h], q = Mc(n), n !== q && (c[h] = q);
        g |= 8;
        g = c.length ? g & -17 : g | 16;
        D(c, g);
        h = g
    }
    let p;
    e === 1 || e === 4 && 32 & h ? Rc(h) || (b = h, f = !!(32 & h), h |= !k.length || 16 & h && (!l || f) ? 2 : 2048, h !== b && D(k, h), Object.freeze(k)) : (l = e !== 5 ? !1 : !!(32 & h) || Rc(h) || !!rc(k), (e === 2 || l) && Rc(h) && (k = wb(k), h = Yc(h, b), h = Zc(h, b, f), D(k, h), b = G(a, b, d, k)), Rc(h) || (a = h, h = Zc(h, b, f), h !== a && D(k, h)), l && (p = qc(k)));
    return p || k
}

function H(a, b, c, d) {
    d != null ? oc(d, b) : d = void 0;
    return Qc(a, c, d)
}

function Yc(a, b) {
    a = (2 & b ? a | 2 : a & -3) | 32;
    return a &= -2049
}

function Zc(a, b, c) {
    32 & b && c || (a &= -33);
    return a
}

function $c(a, b, c, d) {
    a = a.o;
    const e = A(a);
    Nb(e);
    b = Xc(a, e, c, b, 2, !0);
    c = d != null ? oc(d, c) : new c;
    b.push(c);
    y(c.o) & 2 ? Db(b, 8) : Db(b, 16)
}

function ad(a, b) {
    a = Nc(a, b);
    return a == null || typeof a === "string" ? a : void 0
}

function bd(a, b) {
    a = ad(a, b);
    return a != null ? a : ""
}

function cd(a, b) {
    var c = dd;
    const d = a.o;
    c = Uc(Tc(d), d, A(d), c);
    return ad(a, c === b ? b : -1)
}

function ed(a, b, c) {
    if (c != null) {
        if (typeof c !== "number") throw ub("int32");
        if (!Number.isFinite(c)) throw ub("int32");
        c |= 0
    }
    Qc(a, b, c)
}

function I(a, b, c) {
    return Qc(a, b, nc(c))
}

function fd(a, b, c) {
    if (c != null) {
        if (!Number.isFinite(c)) throw ub("enum");
        c |= 0
    }
    return Qc(a, b, c)
};

function gd(a, b) {
    return Error(`Invalid wire type: ${a} (at position ${b})`)
}

function hd() {
    return Error("Failed to read varint, encoding is invalid.")
}

function id(a, b) {
    return Error(`Tried to read past the end of the data ${b} > ${a}`)
};

function jd(a) {
    if (typeof a === "string") return {
        buffer: kb(a),
        I: !1
    };
    if (Array.isArray(a)) return {
        buffer: new Uint8Array(a),
        I: !1
    };
    if (a.constructor === Uint8Array) return {
        buffer: a,
        I: !1
    };
    if (a.constructor === ArrayBuffer) return {
        buffer: new Uint8Array(a),
        I: !1
    };
    if (a.constructor === qb) return {
        buffer: rb(a) || new Uint8Array(0),
        I: !0
    };
    if (a instanceof Uint8Array) return {
        buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
        I: !1
    };
    throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
};

function kd(a) {
    const b = a.j;
    let c = a.h,
        d = b[c++],
        e = d & 127;
    if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw hd();
    ld(a, c);
    return e
}

function ld(a, b) {
    a.h = b;
    if (b > a.i) throw id(a.i, b);
}

function md(a, b) {
    if (b < 0) throw Error(`Tried to read a negative byte length: ${b}`);
    const c = a.h,
        d = c + b;
    if (d > a.i) throw id(b, a.i - c);
    a.h = d;
    return c
}
var nd = class {
        constructor(a, b) {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.init(a, void 0, void 0, b)
        }
        init(a, b, c, {
            X: d = !1
        } = {}) {
            this.X = d;
            a && (a = jd(a), this.j = a.buffer, this.m = a.I, this.l = b || 0, this.i = c !== void 0 ? this.l + c : this.j.length, this.h = this.l)
        }
        clear() {
            this.j = null;
            this.m = !1;
            this.h = this.i = this.l = 0;
            this.X = !1
        }
        reset() {
            this.h = this.l
        }
    },
    od = [];

function pd(a, {
    ga: b = !1
} = {}) {
    a.ga = b
}

function qd(a) {
    var b = a.h;
    if (b.h == b.i) return !1;
    a.j = a.h.h;
    var c = kd(a.h) >>> 0;
    b = c >>> 3;
    c &= 7;
    if (!(c >= 0 && c <= 5)) throw gd(c, a.j);
    if (b < 1) throw Error(`Invalid field number: ${b} (at position ${a.j})`);
    a.l = b;
    a.i = c;
    return !0
}

function rd(a) {
    switch (a.i) {
        case 0:
            if (a.i != 0) rd(a);
            else a: {
                a = a.h;
                var b = a.h;
                const c = b + 10,
                    d = a.j;
                for (; b < c;)
                    if ((d[b++] & 128) === 0) {
                        ld(a, b);
                        break a
                    }
                throw hd();
            }
            break;
        case 1:
            a = a.h;
            ld(a, a.h + 8);
            break;
        case 2:
            a.i != 2 ? rd(a) : (b = kd(a.h) >>> 0, a = a.h, ld(a, a.h + b));
            break;
        case 5:
            a = a.h;
            ld(a, a.h + 4);
            break;
        case 3:
            b = a.l;
            do {
                if (!qd(a)) throw Error("Unmatched start-group tag: stream EOF");
                if (a.i == 4) {
                    if (a.l != b) throw Error("Unmatched end-group tag");
                    break
                }
                rd(a)
            } while (1);
            break;
        default:
            throw gd(a.i, a.j);
    }
}

function sd(a, b, c) {
    const d = a.h.i,
        e = kd(a.h) >>> 0,
        f = a.h.h + e;
    let g = f - d;
    g <= 0 && (a.h.i = f, c(b, a, void 0, void 0, void 0), g = f - a.h.h);
    if (g) throw Error("Message parsing ended unexpectedly. Expected to read " + `${e} bytes, instead read ${e-g} bytes, either the ` + "data ended unexpectedly or the message misreported its own length");
    a.h.h = f;
    a.h.i = d
}
var td = class {
        constructor(a, b) {
            if (od.length) {
                const c = od.pop();
                c.init(a, void 0, void 0, b);
                a = c
            } else a = new nd(a, b);
            this.h = a;
            this.j = this.h.h;
            this.i = this.l = -1;
            pd(this, b)
        }
        reset() {
            this.h.reset();
            this.j = this.h.h;
            this.i = this.l = -1
        }
    },
    ud = [];
let vd;
var K = class {
    constructor(a, b, c) {
        this.o = Cc(a, b, c)
    }
    toJSON() {
        return wd(this)
    }
    clone() {
        const a = this.o;
        return Kc(this, a, A(a), !1)
    }
    I() {
        return !!(y(this.o) & 2)
    }
};
K.prototype.T = Gb;

function wd(a) {
    a = vd ? a.o : Hc(a.o, Ic, void 0, void 0, !1); {
        var b = !vd;
        let l = a.length;
        if (l) {
            var c = a[l - 1],
                d = Jb(c);
            d ? l-- : c = void 0;
            var e = a;
            if (d) {
                b: {
                    var f = c;
                    var g = {};d = !1;
                    if (f)
                        for (var k in f) {
                            if (isNaN(+k)) {
                                g[k] = f[k];
                                continue
                            }
                            let n = f[k];
                            Array.isArray(n) && (Kb(n) || Ib(n) && n.size === 0) && (n = null);
                            n == null && (d = !0);
                            n != null && (g[k] = n)
                        }
                    if (d) {
                        for (let n in g) break b;
                        g = null
                    } else g = f
                }
                f = g == null ? c != null : g !== c
            }
            for (; l > 0; l--) {
                k = e[l - 1];
                if (!(k == null || Kb(k) || Ib(k) && k.size === 0)) break;
                var h = !0
            }
            if (e !== a || f || h) {
                if (!b) e = Array.prototype.slice.call(e,
                    0, l);
                else if (h || f || g) e.length = l;
                g && e.push(g)
            }
            h = e
        } else h = a
    }
    return h
};
class xd {
    constructor(a, b, c) {
        this.i = a;
        this.h = b;
        this.na = c
    }
};
const yd = Symbol();

function zd(a) {
    let b = a[yd];
    if (!b) {
        const c = Ad(a),
            d = Bd(a),
            e = d.j;
        b = e ? (f, g) => e(f, g, d) : (f, g) => {
            for (; qd(g) && g.i != 4;) {
                var k = g.l;
                let n = d[k];
                const q = !n;
                let p = !1;
                if (!n) {
                    var h = d.extensions;
                    if (h) {
                        var l = h[k];
                        if (l) {
                            let m;
                            p = (m = h.h) == null ? void 0 : m[k];
                            (!Qa || p) && (h = Cd(l)) && (n = d[k] = h)
                        }
                    }
                }
                if (!n || !n(g, f, k)) {
                    h = g;
                    k = h.j;
                    rd(h);
                    if (h.ga) h = void 0;
                    else {
                        l = h.h.h - k;
                        h.h.h = k;
                        b: {
                            h = h.h;k = l;
                            if (k == 0) {
                                h = pb();
                                break b
                            }
                            const m = md(h, k);h.X && h.m ? k = h.j.subarray(m, m + k) : (h = h.j, l = m, k = m + k, k = l === k ? new Uint8Array(0) : cc ? h.slice(l, k) : new Uint8Array(h.subarray(l, k)));h = k.length == 0 ? pb() : new qb(k, mb)
                        }
                    }
                    k = f;
                    h && (Ob || (Ob = Symbol()), (l = k[Ob]) ? l.push(h) : k[Ob] = [h])
                }
                q && n && !p && Dd++ <
                    5 && tb()
            }
            c === Ed || c === Fd || c.l || (f[Qb || (Qb = Symbol())] = c)
        };
        a[yd] = b
    }
    return b
}

function Cd(a) {
    a = Array.isArray(a) ? a[0] instanceof xd ? a : [Gd, a] : [a, void 0];
    const b = a[0].i;
    if (a = a[1]) {
        const c = zd(a),
            d = Bd(a).S;
        return (e, f, g) => b(e, f, g, d, c)
    }
    return b
}
class Hd {}
let Ed, Fd;
const Id = Symbol();

function Jd(a, b, c) {
    const d = c[1];
    let e;
    if (d) {
        const f = d[Id];
        e = f ? f.S : Ac(d[0]);
        a[b] = f != null ? f : d
    }
    e && e === yc ? (a.h || (a.h = new Set)).add(b) : c[0] && (a.i || (a.i = new Set)).add(b)
}

function Kd(a, b) {
    return [a.h, !b || b[0] > 0 ? void 0 : b]
}

function Ad(a) {
    var b = a[Id];
    if (b) return b;
    b = Ld(a, a[Id] = new Hd, Kd, Kd, Jd);
    if (!b.extensions && !b.i && !b.h) {
        let c = !0;
        for (let d in b) isNaN(d) || (c = !1);
        c ? (Ac(a[0]) === yc ? Fd ? b = Fd : (b = new Hd, b.S = Ac(!0), b = Fd = b) : b = Ed || (Ed = new Hd), b = a[Id] = b) : b.l = !0
    }
    return b
}

function Md(a, b, c) {
    a[b] = c
}

function Ld(a, b, c, d, e = Md) {
    b.S = Ac(a[0]);
    let f = 0;
    var g = a[++f];
    g && g.constructor === Object && (b.extensions = g, g = a[++f], typeof g === "function" && (b.j = g, b.m = a[++f], g = a[++f]));
    const k = {};
    for (; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0;) {
        for (var h = 0; h < g.length; h++) k[g[h]] = g;
        g = a[++f]
    }
    for (h = 1; g !== void 0;) {
        typeof g === "number" && (h += g, g = a[++f]);
        let q;
        var l = void 0;
        g instanceof xd ? q = g : (q = Nd, f--);
        if (q.na) {
            g = a[++f];
            l = a;
            var n = f;
            typeof g == "function" && (g = g(), l[n] = g);
            l = g
        }
        g = a[++f];
        n = h + 1;
        typeof g === "number" && g < 0 && (n -=
            g, g = a[++f]);
        for (; h < n; h++) {
            const p = k[h];
            e(b, h, l ? d(q, l, p) : c(q, p))
        }
    }
    return b
}
const Od = Symbol(),
    Pd = Symbol();

function Qd(a, b) {
    const c = a.i;
    return b ? (d, e, f) => c(d, e, f, b) : c
}

function Rd(a, b, c) {
    const d = a.i;
    let e, f;
    return (g, k, h) => d(g, k, h, f || (f = Bd(b).S), e || (e = zd(b)), c)
}

function Bd(a) {
    let b = a[Pd];
    if (b) return b;
    Ad(a);
    b = Ld(a, a[Pd] = {}, Qd, Rd);
    Pd in a && Id in a && Od in a && (a.length = 0);
    return b
}
let Dd = 0;
var Sd;
Sd = new xd(function(a, b, c) {
    if (a.i !== 2) return !1;
    var d = kd(a.h) >>> 0;
    a = a.h;
    var e = md(a, d);
    a = a.j;
    if (Ma) {
        var f = a,
            g;
        (g = La) || (g = La = new TextDecoder("utf-8", {
            fatal: !0
        }));
        d = e + d;
        f = e === 0 && d === f.length ? f : f.subarray(e, d);
        try {
            var k = g.decode(f)
        } catch (l) {
            if (Ka === void 0) {
                try {
                    g.decode(new Uint8Array([128]))
                } catch (n) {}
                try {
                    g.decode(new Uint8Array([97])), Ka = !0
                } catch (n) {
                    Ka = !1
                }
            }!Ka && (La = void 0);
            throw l;
        }
    } else {
        k = e;
        d = k + d;
        e = [];
        let l = null;
        let n;
        for (; k < d;) {
            var h = a[k++];
            h < 128 ? e.push(h) : h < 224 ? k >= d ? Ia() : (n = a[k++], h < 194 || (n & 192) !==
                128 ? (k--, Ia()) : e.push((h & 31) << 6 | n & 63)) : h < 240 ? k >= d - 1 ? Ia() : (n = a[k++], (n & 192) !== 128 || h === 224 && n < 160 || h === 237 && n >= 160 || ((g = a[k++]) & 192) !== 128 ? (k--, Ia()) : e.push((h & 15) << 12 | (n & 63) << 6 | g & 63)) : h <= 244 ? k >= d - 2 ? Ia() : (n = a[k++], (n & 192) !== 128 || (h << 28) + (n - 144) >> 30 !== 0 || ((g = a[k++]) & 192) !== 128 || ((f = a[k++]) & 192) !== 128 ? (k--, Ia()) : (h = (h & 7) << 18 | (n & 63) << 12 | (g & 63) << 6 | f & 63, h -= 65536, e.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : Ia();
            e.length >= 8192 && (l = Ja(l, e), e.length = 0)
        }
        k = Ja(l, e)
    }
    G(b, A(b), c, k);
    return !0
}, !1, !1);
var Gd = new xd(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        sd(a, Vc(b, d, c, !0), e);
        return !0
    }, !1, !0),
    Nd = new xd(function(a, b, c, d, e) {
        if (a.i !== 2) return !1;
        sd(a, Vc(b, d, c), e);
        return !0
    }, !1, !0),
    Td;
Td = new xd(function(a, b, c, d, e) {
    if (a.i !== 2) return !1;
    d = Bc(void 0, d);
    var f = A(b);
    Nb(f);
    var g = f;
    const k = g & 2;
    f = Oc(b, g, c);
    Array.isArray(f) || (f = Lb);
    var h = y(f);
    h === 0 && g & 32 && !k ? (h |= 33, D(f, h)) : h & 1 || (h |= 1, D(f, h));
    k && (g = !1, h & 2 || (Cb(f, 34), g = !!(4 & h)), g && Object.freeze(f));
    h = f;
    f = A(b);
    y(h) & 4 && (h = wb(h), D(h, (y(h) | 1) & -2079), G(b, f, c, h));
    h.push(d);
    sd(a, d, e);
    return !0
}, !0, !0);

function Ud() {};

function Vd(a) {
    for (const b in a) return !1;
    return !0
}

function Wd(a) {
    if (!a || typeof a !== "object") return a;
    if (typeof a.clone === "function") return a.clone();
    if (typeof Map !== "undefined" && a instanceof Map) return new Map(a);
    if (typeof Set !== "undefined" && a instanceof Set) return new Set(a);
    if (a instanceof Date) return new Date(a.getTime());
    const b = Array.isArray(a) ? [] : typeof ArrayBuffer !== "function" || typeof ArrayBuffer.isView !== "function" || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = Wd(a[c]);
    return b
}
const Xd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Yd(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < Xd.length; f++) c = Xd[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};

function Zd(a, b) {
    this.h = a === $d && b || ""
}
Zd.prototype.toString = function() {
    return this.h
};
var $d = {};
new Zd($d, "");

function ae(a) {
    if (!a) return "";
    if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
    a.indexOf("blob:") === 0 && (a = a.substring(5));
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    a.indexOf("//") == 0 && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/");
    c != -1 && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if (c !== "http" && c !== "https" && c !== "chrome-extension" &&
        c !== "moz-extension" && c !== "file" && c !== "android-app" && c !== "chrome-search" && c !== "chrome-untrusted" && c !== "chrome" && c !== "app" && c !== "devtools") throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (d != -1) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (c === "http" && e !== "80" || c === "https" && e !== "443") a = ":" + e
    }
    return c + "://" + b + a
};

function be() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }

    function b(q) {
        for (var p = g, m = 0; m < 64; m += 4) p[m / 4] = q[m] << 24 | q[m + 1] << 16 | q[m + 2] << 8 | q[m + 3];
        for (m = 16; m < 80; m++) q = p[m - 3] ^ p[m - 8] ^ p[m - 14] ^ p[m - 16], p[m] = (q << 1 | q >>> 31) & 4294967295;
        q = e[0];
        var v = e[1],
            z = e[2],
            B = e[3],
            C = e[4];
        for (m = 0; m < 80; m++) {
            if (m < 40)
                if (m < 20) {
                    var J = B ^ v & (z ^ B);
                    var Fa = 1518500249
                } else J = v ^ z ^ B, Fa = 1859775393;
            else m < 60 ? (J = v & z | B & (v | z), Fa = 2400959708) : (J = v ^ z ^ B, Fa = 3395469782);
            J = ((q << 5 | q >>> 27) & 4294967295) + J + C + Fa + p[m] & 4294967295;
            C = B;
            B = z;
            z = (v << 30 | v >>> 2) & 4294967295;
            v = q;
            q = J
        }
        e[0] = e[0] + q & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + z & 4294967295;
        e[3] = e[3] + B & 4294967295;
        e[4] = e[4] + C & 4294967295
    }

    function c(q, p) {
        if (typeof q === "string") {
            q = unescape(encodeURIComponent(q));
            for (var m = [], v = 0, z = q.length; v < z; ++v) m.push(q.charCodeAt(v));
            q = m
        }
        p || (p = q.length);
        m = 0;
        if (l == 0)
            for (; m + 64 < p;) b(q.slice(m, m + 64)), m += 64, n += 64;
        for (; m < p;)
            if (f[l++] = q[m++], n++, l == 64)
                for (l = 0, b(f); m + 64 < p;) b(q.slice(m, m + 64)), m += 64, n += 64
    }

    function d() {
        var q = [],
            p = n * 8;
        l < 56 ? c(k, 56 - l) : c(k, 64 - (l - 56));
        for (var m = 63; m >= 56; m--) f[m] = p & 255, p >>>= 8;
        b(f);
        for (m = p = 0; m < 5; m++)
            for (var v = 24; v >= 0; v -= 8) q[p++] = e[m] >> v & 255;
        return q
    }
    for (var e = [], f = [], g = [], k = [128], h = 1; h < 64; ++h) k[h] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ya: function() {
            for (var q = d(), p = "", m = 0; m < q.length; m++) p += "0123456789ABCDEF".charAt(Math.floor(q[m] / 16)) + "0123456789ABCDEF".charAt(q[m] % 16);
            return p
        }
    }
};

function ce(a, b, c) {
    var d = String(t.location.href);
    return d && a && b ? [b, de(ae(d), a, c || null)].join(" ") : null
}

function de(a, b, c) {
    var d = [],
        e = [];
    if ((Array.isArray(c) ? 2 : 1) == 1) return e = [b, a], ua(d, function(k) {
        e.push(k)
    }), ee(e.join(" "));
    var f = [],
        g = [];
    ua(c, function(k) {
        g.push(k.key);
        f.push(k.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = f.length == 0 ? [c, b, a] : [f.join(":"), c, b, a];
    ua(d, function(k) {
        e.push(k)
    });
    a = ee(e.join(" "));
    a = [c, a];
    g.length == 0 || a.push(g.join(""));
    return a.join("_")
}

function ee(a) {
    var b = be();
    b.update(a);
    return b.ya().toLowerCase()
};
const fe = {};

function ge() {
    this.h = document || {
        cookie: ""
    }
}
ge.prototype.isEnabled = function() {
    if (!t.navigator.cookieEnabled) return !1;
    if (this.h.cookie) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ka: 60
    });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
ge.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        k;
    typeof c === "object" && (k = c.Jb, g = c.Kb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ka);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    d === void 0 && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (k != null ? ";samesite=" + k : "")
};
ge.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = oa(d[e]);
        if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};
ge.prototype.remove = function(a, b, c) {
    const d = this.get(a) !== void 0;
    this.set(a, "", {
        ka: 0,
        path: b,
        domain: c
    });
    return d
};
ge.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = oa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
};

function he() {
    return !!fe.FPA_SAMESITE_PHASE2_MOD || !1
}

function ie(a, b, c, d) {
    (a = t[a]) || typeof document === "undefined" || (a = (new ge).get(b));
    return a ? ce(a, c, d) : null
};

function je() {
    this.l = this.l;
    this.i = this.i
}
je.prototype.l = !1;
je.prototype.dispose = function() {
    this.l || (this.l = !0, this.m())
};
je.prototype[Symbol.dispose] = function() {
    this.dispose()
};
je.prototype.addOnDisposeCallback = function(a, b) {
    this.l ? b !== void 0 ? a.call(b) : a() : (this.i || (this.i = []), b && (a = a.bind(b)), this.i.push(a))
};
je.prototype.m = function() {
    if (this.i)
        for (; this.i.length;) this.i.shift()()
};

function ke(a, b) {
    a.l(b);
    a.i < 100 && (a.i++, b.next = a.h, a.h = b)
}
class le {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        this.i > 0 ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
};
class me {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = ne.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var ne = new le(() => new oe, a => a.reset());
class oe {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};
let pe, qe = !1,
    re = new me,
    te = (a, b) => {
        pe || se();
        qe || (pe(), qe = !0);
        re.add(a, b)
    },
    se = () => {
        const a = t.Promise.resolve(void 0);
        pe = () => {
            a.then(ue)
        }
    };
var ue = () => {
    let a;
    for (; a = re.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            Na(b)
        }
        ke(ne, a)
    }
    qe = !1
};

function L(a) {
    this.h = 0;
    this.v = void 0;
    this.l = this.i = this.j = null;
    this.m = this.s = !1;
    if (a != Ud) try {
        var b = this;
        a.call(void 0, function(c) {
            ve(b, 2, c)
        }, function(c) {
            ve(b, 3, c)
        })
    } catch (c) {
        ve(this, 3, c)
    }
}

function we() {
    this.next = this.context = this.i = this.j = this.h = null;
    this.l = !1
}
we.prototype.reset = function() {
    this.context = this.i = this.j = this.h = null;
    this.l = !1
};
var xe = new le(function() {
    return new we
}, function(a) {
    a.reset()
});

function ye(a, b, c) {
    var d = xe.get();
    d.j = a;
    d.i = b;
    d.context = c;
    return d
}

function ze(a) {
    if (a instanceof L) return a;
    var b = new L(Ud);
    ve(b, 2, a);
    return b
}
L.prototype.then = function(a, b, c) {
    return Ae(this, typeof a === "function" ? a : null, typeof b === "function" ? b : null, c)
};
L.prototype.$goog_Thenable = !0;
L.prototype.C = function(a, b) {
    return Ae(this, null, a, b)
};
L.prototype.catch = L.prototype.C;
L.prototype.cancel = function(a) {
    if (this.h == 0) {
        var b = new Be(a);
        te(function() {
            Ce(this, b)
        }, this)
    }
};

function Ce(a, b) {
    if (a.h == 0)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.l || (d++, g.h == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                e && (c.h == 0 && d == 1 ? Ce(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : De(c), Ee(c, e, 3, b)))
            }
            a.j = null
        } else ve(a, 3, b)
}

function Fe(a, b) {
    a.i || a.h != 2 && a.h != 3 || Ge(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function Ae(a, b, c, d) {
    var e = ye(null, null, null);
    e.h = new L(function(f, g) {
        e.j = b ? function(k) {
            try {
                var h = b.call(d, k);
                f(h)
            } catch (l) {
                g(l)
            }
        } : f;
        e.i = c ? function(k) {
            try {
                var h = c.call(d, k);
                h === void 0 && k instanceof Be ? g(k) : f(h)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    Fe(a, e);
    return e.h
}
L.prototype.H = function(a) {
    this.h = 0;
    ve(this, 2, a)
};
L.prototype.J = function(a) {
    this.h = 0;
    ve(this, 3, a)
};

function ve(a, b, c) {
    if (a.h == 0) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.H,
                f = a.J;
            if (d instanceof L) {
                Fe(d, ye(e || Ud, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var k = !!d.$goog_Thenable
                } catch (l) {
                    k = !1
                } else k = !1;
                if (k) d.then(e, f, a), g = !0;
                else {
                    k = typeof d;
                    if (k == "object" && d != null || k == "function") try {
                        var h = d.then;
                        if (typeof h === "function") {
                            He(d, h, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.v = c, a.h = b, a.j = null, Ge(a), b != 3 || c instanceof Be || Ie(a, c))
    }
}

function He(a, b, c, d, e) {
    function f(h) {
        k || (k = !0, d.call(e, h))
    }

    function g(h) {
        k || (k = !0, c.call(e, h))
    }
    var k = !1;
    try {
        b.call(a, g, f)
    } catch (h) {
        f(h)
    }
}

function Ge(a) {
    a.s || (a.s = !0, te(a.A, a))
}

function De(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
L.prototype.A = function() {
    for (var a; a = De(this);) Ee(this, a, this.h, this.v);
    this.s = !1
};

function Ee(a, b, c, d) {
    if (c == 3 && b.i && !b.l)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, Je(b, c, d);
    else try {
        b.l ? b.j.call(b.context) : Je(b, c, d)
    } catch (e) {
        Ke.call(null, e)
    }
    ke(xe, b)
}

function Je(a, b, c) {
    b == 2 ? a.j.call(a.context, c) : a.i && a.i.call(a.context, c)
}

function Ie(a, b) {
    a.m = !0;
    te(function() {
        a.m && Ke.call(null, b)
    })
}
var Ke = Na;

function Be(a) {
    na.call(this, a)
}
ma(Be, na);
Be.prototype.name = "cancel";
const Le = self;
class Me {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.resolve = a;
            this.reject = b
        })
    }
};

function M(a) {
    je.call(this);
    this.H = 1;
    this.s = [];
    this.v = 0;
    this.h = [];
    this.j = {};
    this.W = !!a
}
ma(M, je);
M.prototype.J = function(a, b, c) {
    var d = this.j[a];
    d || (d = this.j[a] = []);
    var e = this.H;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.H = e + 3;
    d.push(e);
    return e
};
M.prototype.C = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.j[b];
        this.v != 0 ? (this.s.push(a), this.h[a + 1] = () => {}) : (c && wa(c, a), delete this.h[a], delete this.h[a + 1], delete this.h[a + 2])
    }
    return !!b
};
M.prototype.A = function(a, b) {
    var c = this.j[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.W)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Ne(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.v++;
                try {
                    for (e = 0, f = c.length; e < f && !this.l; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.v--, this.s.length > 0 && this.v == 0)
                        for (; c = this.s.pop();) this.C(c)
                }
            }
        return e != 0
    }
    return !1
};

function Ne(a, b, c) {
    te(function() {
        a.apply(b, c)
    })
}
M.prototype.clear = function(a) {
    if (a) {
        var b = this.j[a];
        b && (b.forEach(this.C, this), delete this.j[a])
    } else this.h.length = 0, this.j = {}
};
M.prototype.m = function() {
    M.Ja.m.call(this);
    this.clear();
    this.s.length = 0
};
/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let N = {};
var Oe = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
N.assign = function(a) {
    for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
        var c = b.shift();
        if (c) {
            if (typeof c !== "object") throw new TypeError(c + "must be non-object");
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
    }
    return a
};
N.Nb = function(a, b) {
    if (a.length === b) return a;
    if (a.subarray) return a.subarray(0, b);
    a.length = b;
    return a
};
var Pe = {
        va: function(a, b, c, d, e) {
            if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
            else
                for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        za: function(a) {
            var b, c;
            var d = c = 0;
            for (b = a.length; d < b; d++) c += a[d].length;
            var e = new Uint8Array(c);
            d = c = 0;
            for (b = a.length; d < b; d++) {
                var f = a[d];
                e.set(f, c);
                c += f.length
            }
            return e
        }
    },
    Qe = {
        va: function(a, b, c, d, e) {
            for (var f = 0; f < d; f++) a[e + f] = b[c + f]
        },
        za: function(a) {
            return [].concat.apply([], a)
        }
    };
N.Ia = function() {
    Oe ? (N.qa = Uint8Array, N.oa = Uint16Array, N.pa = Int32Array, N.assign(N, Pe)) : (N.qa = Array, N.oa = Array, N.pa = Array, N.assign(N, Qe))
};
N.Ia();
try {
    new Uint8Array(1)
} catch (a) {};

function Re(a) {
    for (var b = a.length; --b >= 0;) a[b] = 0
}
Re(Array(576));
Re(Array(60));
Re(Array(512));
Re(Array(256));
Re(Array(29));
Re(Array(30));
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Se = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Te = class {
    constructor(a) {
        this.name = a
    }
};
var Ue = new Te("rawColdConfigGroup");
var Ve = new Te("rawHotConfigGroup");
var We = class extends K {
    constructor(a) {
        super(a)
    }
};
var Xe = class extends K {
    constructor(a) {
        super(a)
    }
};
var Ye = class extends K {
    constructor(a) {
        super(a)
    }
};
var Ze = class extends K {
    constructor(a) {
        super(a)
    }
    getPlayerType() {
        var a = Nc(this, 36);
        a = a == null ? a : Number.isFinite(a) ? a | 0 : void 0;
        return a != null ? a : 0
    }
    setHomeGroupInfo(a) {
        return H(this, Ye, 81, a)
    }
    clearLocationPlayabilityToken() {
        return Qc(this, 89)
    }
};
var $e = class extends K {
        constructor(a) {
            super(a)
        }
        getKey() {
            return bd(this, 1)
        }
    },
    af = [2, 3, 4, 5, 6];
var bf = class extends K {
    constructor(a) {
        super(a)
    }
    setTrackingParams(a) {
        if (a != null)
            if (typeof a === "string") a = a ? new qb(a, mb) : pb();
            else if (a.constructor !== qb)
            if (lb(a)) a = a.length ? new qb(new Uint8Array(a), mb) : pb();
            else throw Error();
        return Qc(this, 1, a)
    }
};
var cf = class extends K {
    constructor(a) {
        super(a)
    }
};
var df = class extends K {
    constructor(a) {
        super(a)
    }
};
var ef = class extends K {
    constructor(a) {
        super(a)
    }
};
var ff = class extends K {
    constructor(a) {
        super(a)
    }
    setSafetyMode(a) {
        return fd(this, 5, a)
    }
};
var gf = class extends K {
    constructor(a) {
        super(a)
    }
    j(a) {
        return H(this, Ze, 1, a)
    }
};
var hf = new Te("signalServiceEndpoint");
var jf = class extends K {
    constructor(a) {
        super(a, 497)
    }
};
var kf = class extends K {
    constructor(a) {
        super(a)
    }
};
var lf = class extends K {
        constructor(a) {
            super(a)
        }
        setVideoId(a) {
            return Sc(this, 1, dd, nc(a))
        }
        getPlaylistId() {
            return cd(this, 2)
        }
    },
    dd = [1, 2];
var mf = class extends K {
    constructor() {
        super()
    }
};
var nf = new Te("recordNotificationInteractionsEndpoint");
var of = ["notification/convert_endpoint_to_url"], pf = ["notification/record_interactions"], qf = ["notification_registration/set_registration"];
var rf = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var sf = ["notifications_register", "notifications_check_registration"];
var tf = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let uf = null;

function O(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return vf().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function wf() {
    return O("IndexedDBCheck", "testing IndexedDB").then(() => xf("IndexedDBCheck")).then(a => a === "testing IndexedDB" ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function xf(a) {
    const b = new tf("Error accessing DB");
    return vf().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function vf() {
    return uf ? Promise.resolve(uf) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) uf = d, a(uf);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), vf()
        };
        c.onupgradeneeded = yf
    })
}

function yf(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const zf = {
    WEB_UNPLUGGED: "^unplugged/",
    WEB_UNPLUGGED_ONBOARDING: "^unplugged/",
    WEB_UNPLUGGED_OPS: "^unplugged/",
    WEB_UNPLUGGED_PUBLIC: "^unplugged/",
    WEB_CREATOR: "^creator/",
    WEB_KIDS: "^kids/",
    WEB_EXPERIMENTS: "^experiments/",
    WEB_MUSIC: "^music/",
    WEB_REMIX: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^music/",
    WEB_MUSIC_EMBEDDED_PLAYER: "^main_app/|^sfv/"
};

function Af(a) {
    if (a.length === 1) return a[0];
    var b = zf.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(zf).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Bf(a) {
    return `/youtubei/v1/${Af(a)}`
};
var Cf = class extends K {
    constructor(a) {
        super(a)
    }
};
var Df = class extends K {
    constructor(a) {
        super(a, 0, "yt.sw.adr")
    }
};
const Ef = t.window;
let Ff, Gf;
const Hf = (Ef == null ? void 0 : (Ff = Ef.yt) == null ? void 0 : Ff.config_) || (Ef == null ? void 0 : (Gf = Ef.ytcfg) == null ? void 0 : Gf.data_) || {};
w("yt.config_", Hf);

function P(...a) {
    a = arguments;
    a.length > 1 ? Hf[a[0]] = a[1] : a.length === 1 && Object.assign(Hf, a[0])
}

function Q(a, b) {
    return a in Hf ? Hf[a] : b
};
const If = [];

function Jf(a) {
    If.forEach(b => b(a))
}

function R(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            Kf(b)
        }
    } : a
}

function Kf(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0, void 0, void 0]), P("ERRORS", b));
    Jf(a)
}

function Lf(a) {
    var b = u("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0, void 0, void 0]), P("ERRORS", b))
};
const Mf = /^[\w.]*$/,
    Nf = {
        q: !0,
        search_query: !0
    };

function Of(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const k = b[f].split("=");
        if (k.length === 1 && k[0] || k.length === 2) try {
            const h = Pf(k[0] || ""),
                l = Pf(k[1] || "");
            if (h in c) {
                const n = c[h];
                Array.isArray(n) ? xa(n, l) : c[h] = [n, l]
            } else c[h] = l
        } catch (h) {
            var d = h,
                e = k[0];
            const l = String(Of);
            d.args = [{
                key: e,
                value: k[1],
                query: a,
                method: Qf === l ? "unchanged" : l
            }];
            Nf.hasOwnProperty(e) || Lf(d)
        }
    }
    return c
}
const Qf = String(Of);

function Rf(a) {
    a.charAt(0) === "?" && (a = a.substring(1));
    return Of(a, "&")
}

function Sf(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = d.length > 1 ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = Rf(e[1] || "");
    for (var f in b) !c && e !== null && f in e || (e[f] = b[f]);
    b = a;
    a = Ha(e);
    a ? (c = b.indexOf("#"), c < 0 && (c = b.length), f = b.indexOf("?"), f < 0 || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.slice(0, f), e, b.slice(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Tf(a) {
    if (!b) var b = window.location.href;
    const c = a.match(Da)[1] || null,
        d = Ea(a.match(Da)[3] || null);
    c && d ? (a = a.match(Da), b = b.match(Da), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? Ea(b.match(Da)[3] || null) === d && (Number(b.match(Da)[4] || null) || null) === (Number(a.match(Da)[4] || null) || null) : !0;
    return a
}

function Pf(a) {
    return a && a.match(Mf) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};

function Uf(a, b) {
    typeof a === "function" && (a = R(a));
    return window.setTimeout(a, b)
};
var Vf = "client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),
    Wf = [...Vf, "client_dev_set_cookie"];

function S(a) {
    a = Xf(a);
    return typeof a === "string" && a === "false" ? !1 : !!a
}

function T(a, b) {
    a = Xf(a);
    return a === void 0 && b !== void 0 ? b : Number(a || 0)
}

function Yf() {
    return Q("EXPERIMENTS_TOKEN", "")
}

function Xf(a) {
    return Q("EXPERIMENT_FLAGS", {})[a]
}

function Zf() {
    const a = [],
        b = Q("EXPERIMENTS_FORCED_FLAGS", {});
    for (var c of Object.keys(b)) a.push({
        key: c,
        value: String(b[c])
    });
    c = Q("EXPERIMENT_FLAGS", {});
    for (const d of Object.keys(c)) d.startsWith("force_") && b[d] === void 0 && a.push({
        key: d,
        value: String(c[d])
    });
    return a
};
[...Vf];
let $f = !1;

function ag(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = bg(a, b);
    const d = cg(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || t;
    let f = !1,
        g;
    fetch(a, c).then(k => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var h = k.ok,
                l = n => {
                    n = n || {};
                    h ? b.onSuccess && b.onSuccess.call(e, n, k) : b.onError && b.onError.call(e, n, k);
                    b.onFinish && b.onFinish.call(e, n, k)
                };
            (b.format || "JSON") === "JSON" && (h || k.status >= 400 && k.status < 500) ? k.json().then(l, () => {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    a = b.timeout || 0;
    b.onFetchTimeout && a > 0 && (g = Uf(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || t))
    }, a))
}

function bg(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = Q("XSRF_FIELD_NAME");
    if (b = b.urlParams) b[c] && delete b[c], a = Sf(a, b || {}, !0);
    return a
}

function cg(a, b) {
    const c = Q("XSRF_FIELD_NAME"),
        d = Q("XSRF_TOKEN");
    var e = b.postBody || "",
        f = b.postParams;
    const g = Q("XSRF_FIELD_NAME");
    let k;
    b.headers && (k = b.headers["Content-Type"]);
    b.excludeXsrf || Ea(a.match(Da)[3] || null) && !b.withCredentials && Ea(a.match(Da)[3] || null) !== document.location.hostname || b.method !== "POST" || k && k !== "application/x-www-form-urlencoded" || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    (S("ajax_parse_query_data_only_when_filled") && f && Object.keys(f).length > 0 || f) && typeof e === "string" &&
        (e = Rf(e), Yd(e, f), e = b.postBodyFormat && b.postBodyFormat === "JSON" ? JSON.stringify(e) : Ha(e));
    f = e || f && !Vd(f);
    !$f && f && b.method !== "POST" && ($f = !0, Kf(Error("AJAX request with postData should use POST")));
    return e
};
const dg = [{
    aa: a => `Cannot read property '${a.key}'`,
    U: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    aa: a => `Cannot call '${a.key}'`,
    U: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    aa: a => `${a.key} is not defined`,
    U: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var fg = {
    F: [],
    D: [{
        callback: eg,
        weight: 500
    }]
};

function eg(a) {
    if (a.name === "JavaException") return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function gg() {
    if (!hg) {
        var a = hg = new ig;
        a.F.length = 0;
        a.D.length = 0;
        jg(a, fg)
    }
    return hg
}

function jg(a, b) {
    b.F && a.F.push.apply(a.F, b.F);
    b.D && a.D.push.apply(a.D, b.D)
}
var ig = class {
        constructor() {
            this.D = [];
            this.F = []
        }
    },
    hg;
const kg = new M;

function lg(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = mg(d);
        if (e === Infinity) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = mg(d);
                if (f === 2) return e;
                break;
            case 1:
                if (f === 2) return;
                c += 8;
                break;
            case 2:
                e = mg(d);
                if (f === 2) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (f === 2) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function mg(a) {
    let b = a(),
        c = b & 127;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 7;
    if (b < 128) return c;
    b = a();
    c |= (b & 127) << 14;
    if (b < 128) return c;
    b = a();
    return b < 128 ? c | (b & 127) << 21 : Infinity
};

function ng(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += og(d, a[d], b, c), e > 500)); d++);
            d = e
        } else if (typeof a === "object")
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    k = b,
                    h = c;
                f = typeof g !== "string" || f !== "clickTrackingParams" && f !== "trackingParams" ? 0 : (g = lg(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? og(`${f}.ve`, g, k, h) : 0;
                d += f;
                d += og(e, a[e], b, c);
                if (d > 500) break
            }
        } else c[b] = pg(a), d += c[b].length;
    else c[b] = pg(a), d += c[b].length;
    return d
}

function og(a, b, c, d) {
    c += `.${a}`;
    a = pg(b);
    d[c] = a;
    return c.length + a.length
}

function pg(a) {
    try {
        return (typeof a === "string" ? a : String(JSON.stringify(a))).substr(0, 500)
    } catch (b) {
        return `unable to serialize ${typeof a} (${b.message})`
    }
};

function qg() {
    rg.h || (rg.h = new rg);
    return rg.h
}

function sg(a, b) {
    a = {};
    var c = [],
        d = S("enable_first_party_auth_v2") || (b == null ? void 0 : b.ha) && S("enable_first_party_auth_v2_on_get_account_menu");
    "USER_SESSION_ID" in Hf && d && c.push({
        key: "u",
        value: Q("USER_SESSION_ID")
    });
    var e = ae(String(t.location.href));
    d = [];
    var f = t.__SAPISID || t.__APISID || t.__3PSAPISID || t.__OVERRIDE_SID;
    he() && (f = f || t.__1PSAPISID);
    if (f) f = !0;
    else {
        if (typeof document !== "undefined") {
            const g = new ge;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID");
            he() && (f = f || g.get("__Secure-1PAPISID"))
        }
        f = !!f
    }
    f && (f = (e = e.indexOf("https:") == 0 || e.indexOf("chrome-extension:") == 0 || e.indexOf("chrome-untrusted://new-tab-page") == 0 || e.indexOf("moz-extension:") == 0) ? t.__SAPISID : t.__APISID, f || typeof document === "undefined" || (f = new ge, f = f.get(e ? "SAPISID" : "APISID") || f.get("__Secure-3PAPISID")), (f = f ? ce(f, e ? "SAPISIDHASH" : "APISIDHASH", c) : null) && d.push(f), e && he() && ((e = ie("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", c)) && d.push(e), (c = ie("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", c)) && d.push(c)));
    if (c = d.length ==
        0 ? null : d.join(" ")) a.Authorization = c, c = b = b == null ? void 0 : b.sessionIndex, c === void 0 && (c = Number(Q("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), S("voice_search_auth_header_removal") || (a["X-Goog-AuthUser"] = c.toString()), "INNERTUBE_HOST_OVERRIDE" in Hf || (a["X-Origin"] = window.location.origin), b === void 0 && "DELEGATED_SESSION_ID" in Hf && (a["X-Goog-PageId"] = Q("DELEGATED_SESSION_ID"));
    return a
}
var rg = class {
    constructor() {
        this.Ka = !0
    }
};
var tg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};

function ug(a) {
    switch (a) {
        case "DESKTOP":
            return 1;
        case "UNKNOWN_PLATFORM":
            return 0;
        case "TV":
            return 2;
        case "GAME_CONSOLE":
            return 3;
        case "MOBILE":
            return 4;
        case "TABLET":
            return 5
    }
};
w("ytglobal.prefsUserPrefsPrefs_", u("ytglobal.prefsUserPrefsPrefs_") || {});

function vg() {
    if (Q("DATASYNC_ID") !== void 0) return Q("DATASYNC_ID");
    throw new tf("Datasync ID not set", "unknown");
};

function wg(a, b) {
    return xg(a, 0, b)
}

function yg(a) {
    const b = u("yt.scheduler.instance.addImmediateJob");
    b ? b(a) : a()
}
var zg = class {
    h(a) {
        xg(a, 1)
    }
};

function Ag() {
    Bg.h || (Bg.h = new Bg);
    return Bg.h
}

function xg(a, b, c) {
    c !== void 0 && Number.isNaN(Number(c)) && (c = void 0);
    const d = u("yt.scheduler.instance.addJob");
    return d ? d(a, b, c) : c === void 0 ? (a(), NaN) : Uf(a, c || 0)
}
var Bg = class extends zg {
        P(a) {
            if (a === void 0 || !Number.isNaN(Number(a))) {
                var b = u("yt.scheduler.instance.cancelJob");
                b ? b(a) : window.clearTimeout(a)
            }
        }
        start() {
            const a = u("yt.scheduler.instance.start");
            a && a()
        }
    },
    Cg = Ag();
const Dg = [];
let Eg, Fg = !1;

function Gg(a) {
    Fg || (Eg ? Eg.handleError(a) : (Dg.push({
        type: "ERROR",
        payload: a
    }), Dg.length > 10 && Dg.shift()))
}

function Hg(a, b) {
    Fg || (Eg ? Eg.R(a, b) : (Dg.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), Dg.length > 10 && Dg.shift()))
};

function Ig(a) {
    if (a.indexOf(":") >= 0) throw Error("Database name cannot contain ':'");
}

function Jg(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const Kg = {
        AUTH_INVALID: "No user identifier specified.",
        EXPLICIT_ABORT: "Transaction was explicitly aborted.",
        IDB_NOT_SUPPORTED: "IndexedDB is not supported.",
        MISSING_INDEX: "Index not created.",
        MISSING_OBJECT_STORES: "Object stores not created.",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "Database is deleted because expected object stores were not created.",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "Database is reopened because expected object stores were not created.",
        UNKNOWN_ABORT: "Transaction was aborted for unknown reasons.",
        QUOTA_EXCEEDED: "The current transaction exceeded its quota limitations.",
        QUOTA_MAYBE_EXCEEDED: "The current transaction may have failed because of exceeding quota limitations.",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "Can't start a transaction on a closed database",
        INCOMPATIBLE_DB_VERSION: "The binary is incompatible with the database version"
    },
    Lg = {
        AUTH_INVALID: "ERROR",
        EXECUTE_TRANSACTION_ON_CLOSED_DB: "WARNING",
        EXPLICIT_ABORT: "IGNORED",
        IDB_NOT_SUPPORTED: "ERROR",
        MISSING_INDEX: "WARNING",
        MISSING_OBJECT_STORES: "ERROR",
        DB_DELETED_BY_MISSING_OBJECT_STORES: "WARNING",
        DB_REOPENED_BY_MISSING_OBJECT_STORES: "WARNING",
        QUOTA_EXCEEDED: "WARNING",
        QUOTA_MAYBE_EXCEEDED: "WARNING",
        UNKNOWN_ABORT: "WARNING",
        INCOMPATIBLE_DB_VERSION: "WARNING"
    },
    Mg = {
        AUTH_INVALID: !1,
        EXECUTE_TRANSACTION_ON_CLOSED_DB: !1,
        EXPLICIT_ABORT: !1,
        IDB_NOT_SUPPORTED: !1,
        MISSING_INDEX: !1,
        MISSING_OBJECT_STORES: !1,
        DB_DELETED_BY_MISSING_OBJECT_STORES: !1,
        DB_REOPENED_BY_MISSING_OBJECT_STORES: !1,
        QUOTA_EXCEEDED: !1,
        QUOTA_MAYBE_EXCEEDED: !0,
        UNKNOWN_ABORT: !0,
        INCOMPATIBLE_DB_VERSION: !1
    };
var U = class extends tf {
        constructor(a, b = {}, c = Kg[a], d = Lg[a], e = Mg[a]) {
            super(c, Object.assign({}, {
                name: "YtIdbKnownError",
                isSw: self.document === void 0,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, U.prototype)
        }
    },
    Ng = class extends U {
        constructor(a, b) {
            super("MISSING_OBJECT_STORES", {
                expectedObjectStores: b,
                foundObjectStores: a
            }, Kg.MISSING_OBJECT_STORES);
            Object.setPrototypeOf(this, Ng.prototype)
        }
    },
    Og = class extends Error {
        constructor(a, b) {
            super();
            this.index =
                a;
            this.objectStore = b;
            Object.setPrototypeOf(this, Og.prototype)
        }
    };
const Pg = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Qg(a, b, c, d) {
    b = Jg(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof U) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if (e.name === "QuotaExceededError") return new U("QUOTA_EXCEEDED", a);
    if (Ya && e.name === "UnknownError") return new U("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Og) return new U("MISSING_INDEX", Object.assign({}, a, {
        objectStore: e.objectStore,
        index: e.index
    }));
    if (e.name === "InvalidStateError" && Pg.some(f => e.message.includes(f))) return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if (e.name === "AbortError") return new U("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign({}, a, {
        name: "IdbError",
        Ab: e.name
    })];
    e.level = "WARNING";
    return e
}

function Rg(a, b, c) {
    return new U("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Sg(a) {
    if (!a) throw Error();
    throw a;
}

function Tg(a) {
    return a
}
var Ug = class {
    constructor(a) {
        this.h = a
    }
};

function Vg(a, b, c, d, e) {
    try {
        if (a.state.status !== "FULFILLED") throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof Wg ? Xg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Yg(a, b, c, d, e) {
    try {
        if (a.state.status !== "REJECTED") throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof Wg ? Xg(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Xg(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof Wg ? Xg(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var Wg = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.i = [];
        a = a.h;
        const b = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if (this.state.status === "PENDING") {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.i) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new Wg(new Ug((b, c) => {
            const d = [];
            let e = a.length;
            e === 0 && b(d);
            for (let f = 0; f < a.length; ++f) Wg.resolve(a[f]).then(g => {
                d[f] = g;
                e--;
                e === 0 && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static resolve(a) {
        return new Wg(new Ug((b, c) => {
            a instanceof Wg ? a.then(b, c) : b(a)
        }))
    }
    static reject(a) {
        return new Wg(new Ug((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = a != null ? a : Tg,
            d = b != null ? b : Sg;
        return new Wg(new Ug((e, f) => {
            this.state.status === "PENDING" ? (this.h.push(() => {
                Vg(this, this, c, e, f)
            }), this.i.push(() => {
                Yg(this, this, d, e, f)
            })) : this.state.status === "FULFILLED" ? Vg(this, this, c, e, f) : this.state.status === "REJECTED" && Yg(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Zg(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function $g(a) {
    return new Promise((b, c) => {
        Zg(a, b, c)
    })
}

function V(a) {
    return new Wg(new Ug((b, c) => {
        Zg(a, b, c)
    }))
};

function ah(a, b) {
    return new Wg(new Ug((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};
const bh = window;
var W = bh.ytcsi && bh.ytcsi.now ? bh.ytcsi.now : bh.performance && bh.performance.timing && bh.performance.now && bh.performance.timing.navigationStart ? () => bh.performance.timing.navigationStart + bh.performance.now() : () => (new Date).getTime();

function X(a, b, c, d) {
    return r(function*() {
        const e = {
            mode: "readonly",
            B: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        typeof c === "string" ? e.mode = c : Object.assign(e, c);
        a.transactionCount++;
        const f = e.B ? 3 : 1;
        let g = 0,
            k;
        for (; !k;) {
            g++;
            const n = Math.round(W());
            try {
                var h = a.h.transaction(b, e.mode),
                    l = d;
                const q = new ch(h),
                    p = yield dh(q, l), m = Math.round(W());
                eh(a, n, m, g, void 0, b.join(), e);
                return p
            } catch (q) {
                l = Math.round(W());
                const p = Qg(q, a.h.name, b.join(), a.h.version);
                if (p instanceof U && !p.h || g >= f) eh(a, n, l, g, p, b.join(), e), k = p
            }
        }
        return Promise.reject(k)
    })
}

function fh(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new gh(a)
}

function hh(a, b, c, d) {
    return X(a, [b], {
        mode: "readwrite",
        B: !0
    }, e => {
        e = e.objectStore(b);
        return V(e.h.put(c, d))
    })
}

function eh(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof U && (e.type === "QUOTA_EXCEEDED" || e.type === "QUOTA_MAYBE_EXCEEDED") && Hg("QUOTA_EXCEEDED", {
        dbName: Jg(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof U && e.type === "UNKNOWN_ABORT" && (c -= a.j, c < 0 && c >= Math.pow(2, 31) && (c = 0), Hg("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), ih(a, !1, d, f, b, g.tag), Gg(e)) : ih(a, !0, d, f, b, g.tag)
}

function ih(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    Hg("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var jh = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(W());
        this.i = !1
    }
    add(a, b, c) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        this.h.close();
        let a;
        ((a = this.options) == null ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return X(this, [a], {
            mode: "readwrite",
            B: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, c => c.objectStore(a).get(b))
    }
    getAll(a, b, c) {
        return X(this, [a], {
            mode: "readonly",
            B: !0
        }, d => d.objectStore(a).getAll(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function kh(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return lh(a).then(d => ah(d, c))
}

function mh(a, b) {
    return kh(a, {
        query: b
    }, c => c.delete().then(() => nh(c))).then(() => {})
}

function oh(a, b, c) {
    const d = [];
    return kh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), nh(e)
    }).then(() => d)
}
var gh = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return V(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return V(this.h.clear()).then(() => {})
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? mh(this, a) : V(this.h.delete(a))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBObjectStore.prototype ? V(this.h.getAll(a, b)) : oh(this, a, b)
    }
    index(a) {
        try {
            return new ph(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && b.name === "NotFoundError") throw new Og(a,
                this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
};

function dh(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var ch = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = U;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const k = e.item(g);
                        if (k === null) throw Error("Invariant: item in DOMStringList is null");
                        f.push(k)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new U("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new gh(a), this.j.set(a, b));
        return b
    }
};

function qh(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return lh(a).then(f => ah(f, c))
}

function rh(a, b, c) {
    const d = [];
    return qh(a, {
        query: b
    }, e => {
        if (!(c !== void 0 && d.length >= c)) return d.push(e.cursor.value), nh(e)
    }).then(() => d)
}
var ph = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return V(this.h.count(a))
    }
    delete(a) {
        return qh(this, {
            query: a
        }, b => b.delete().then(() => nh(b)))
    }
    get(a) {
        return V(this.h.get(a))
    }
    getAll(a, b) {
        return "getAll" in IDBIndex.prototype ? V(this.h.getAll(a, b)) : rh(this, a, b)
    }
    getKey(a) {
        return V(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function lh(a) {
    return V(a).then(b => b ? new sh(a, b) : null)
}

function nh(a) {
    a.cursor.continue(void 0);
    return lh(a.request)
}

function th(a) {
    a.cursor.advance(5);
    return lh(a.request)
}
var sh = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    delete() {
        return V(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return V(this.cursor.update(a))
    }
};

function uh(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = b !== void 0 ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.wa,
            k = c.blocking,
            h = c.La,
            l = c.upgrade,
            n = c.closed;
        let q;
        const p = () => {
            q || (q = new jh(f.result, {
                closed: n
            }));
            return q
        };
        f.addEventListener("upgradeneeded", m => {
            try {
                if (m.newVersion === null) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (f.transaction === null) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && m.dataLoss !== "none" && Hg("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: Jg(a)
                });
                const v = p(),
                    z = new ch(f.transaction);
                l && l(v, B => m.oldVersion < B && m.newVersion >= B, z);
                z.done.catch(B => {
                    e(B)
                })
            } catch (v) {
                e(v)
            }
        });
        f.addEventListener("success", () => {
            const m = f.result;
            k && m.addEventListener("versionchange", () => {
                k(p())
            });
            m.addEventListener("close", () => {
                Hg("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: Jg(a),
                    dbVersion: m.version
                });
                h && h()
            });
            d(p())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function vh(a, b, c = {}) {
    return uh(a, b, c)
}

function wh(a, b = {}) {
    return r(function*() {
        try {
            const c = self.indexedDB.deleteDatabase(a),
                d = b.wa;
            d && c.addEventListener("blocked", () => {
                d()
            });
            yield $g(c)
        } catch (c) {
            throw Qg(c, a, "", -1);
        }
    })
};

function xh(a, b) {
    return new U("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function yh(a, b) {
    if (!b) throw Rg("openWithToken", Jg(a.name));
    return a.open()
}
var zh = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.j = !0;
        this.m = this.l = 0
    }
    i(a, b, c = {}) {
        return vh(a, b, c)
    }
    delete(a = {}) {
        return wh(this.name, a)
    }
    open() {
        if (!this.j) throw xh(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                La: b,
                upgrade: this.options.upgrade
            },
            d = () => {
                const e = this;
                return r(function*() {
                    var f, g = (f = Error().stack) != null ? f : "";
                    try {
                        const h = yield e.i(e.name, e.options.version, c);
                        f = h;
                        var k = e.options;
                        const l = [];
                        for (const n of Object.keys(k.L)) {
                            const {
                                K: q,
                                Fb: p = Number.MAX_VALUE
                            } = k.L[n];
                            !(f.h.version >= q) || f.h.version >= p || f.h.objectStoreNames.contains(n) || l.push(n)
                        }
                        if (l.length !== 0) {
                            const n = Object.keys(e.options.L),
                                q = h.objectStoreNames();
                            if (e.m < T("ytidb_reopen_db_retries", 0)) return e.m++, h.close(), Gg(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: q
                            })), d();
                            if (e.l < T("ytidb_remake_db_retries", 1)) return e.l++, yield e.delete(), Gg(new U("DB_DELETED_BY_MISSING_OBJECT_STORES", {
                                dbName: e.name,
                                expectedObjectStores: n,
                                foundObjectStores: q
                            })), d();
                            throw new Ng(q, n);
                        }
                        return h
                    } catch (h) {
                        if (h instanceof DOMException ? h.name === "VersionError" : "DOMError" in self && h instanceof DOMError ? h.name === "VersionError" : h instanceof Object && "message" in h && h.message === "An attempt was made to open a database using a lower version than the existing version.") {
                            g =
                                yield e.i(e.name, void 0, Object.assign({}, c, {
                                    upgrade: void 0
                                }));
                            k = g.h.version;
                            if (e.options.version !== void 0 && k > e.options.version + 1) throw g.close(), e.j = !1, xh(e, k);
                            return g
                        }
                        b();
                        h instanceof Error && !S("ytidb_async_stack_killswitch") && (h.stack = `${h.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                        let l;
                        throw Qg(h, e.name, "", (l = e.options.version) != null ? l : -1);
                    }
                })
            };
        return this.h = a = d()
    }
};
const Ah = new zh("YtIdbMeta", {
    L: {
        databases: {
            K: 1
        }
    },
    upgrade(a, b) {
        b(1) && fh(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function Bh(a, b) {
    return r(function*() {
        return X(yield yh(Ah, b), ["databases"], {
            B: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return V(d.h.put(a, void 0)).then(() => {})
            })
        })
    })
}

function Ch(a, b) {
    return r(function*() {
        if (a) return (yield yh(Ah, b)).delete("databases", a)
    })
};
let Dh;
const Eh = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function Fh() {
    return r(function*() {
        return !0
    })
}

function Gh() {
    if (Dh !== void 0) return Dh;
    Fg = !0;
    return Dh = Fh().then(a => {
        Fg = !1;
        return a
    })
}

function Hh() {
    return u("ytglobal.idbToken_") || void 0
}

function Ih() {
    const a = Hh();
    return a ? Promise.resolve(a) : Gh().then(b => {
        (b = b ? Eh : void 0) && w("ytglobal.idbToken_", b);
        return b
    })
};
new Me;

function Jh(a) {
    try {
        vg();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new U("AUTH_INVALID", {
        dbName: a
    }), Gg(a), a;
    b = vg();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function Kh(a, b, c, d) {
    return r(function*() {
        var e, f = (e = Error().stack) != null ? e : "";
        e = yield Ih();
        if (!e) throw e = Rg("openDbImpl", a, b), S("ytidb_async_stack_killswitch") || (e.stack = `${e.stack}\n${f.substring(f.indexOf("\n")+1)}`), Gg(e), e;
        Ig(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : Jh(a);
        try {
            return yield Bh(f, e), yield vh(f.actualName, b, d)
        } catch (g) {
            try {
                yield Ch(f.actualName, e)
            } catch (k) {}
            throw g;
        }
    })
}

function Lh(a, b, c = {}) {
    return Kh(a, b, !1, c)
}

function Mh(a, b, c = {}) {
    return Kh(a, b, !0, c)
}

function Nh(a, b = {}) {
    return r(function*() {
        const c = yield Ih();
        if (c) {
            Ig(a);
            var d = Jh(a);
            yield wh(d.actualName, b);
            yield Ch(d.actualName, c)
        }
    })
}

function Oh(a, b = {}) {
    return r(function*() {
        const c = yield Ih();
        c && (Ig(a), yield wh(a, b), yield Ch(a, c))
    })
};

function Ph(a, b) {
    let c;
    return () => {
        c || (c = new Qh(a, b));
        return c
    }
}
var Qh = class extends zh {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        Ig(a)
    }
    i(a, b, c = {}) {
        return (this.options.shared ? Mh : Lh)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.shared ? Oh : Nh)(this.name, a)
    }
};

function Rh(a, b) {
    return Ph(a, b)
};
var Sh = Rh("ytGcfConfig", {
    L: {
        coldConfigStore: {
            K: 1
        },
        hotConfigStore: {
            K: 1
        }
    },
    shared: !1,
    upgrade(a, b) {
        b(1) && (fh(a, "hotConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("hotTimestampIndex", "timestamp", {
            unique: !1
        }), fh(a, "coldConfigStore", {
            keyPath: "key",
            autoIncrement: !0
        }).h.createIndex("coldTimestampIndex", "timestamp", {
            unique: !1
        }))
    },
    version: 1
});

function Th(a) {
    return yh(Sh(), a)
}

function Uh(a, b, c) {
    return r(function*() {
        const d = {
                config: a,
                hashData: b,
                timestamp: W()
            },
            e = yield Th(c);
        yield e.clear("hotConfigStore");
        return yield hh(e, "hotConfigStore", d)
    })
}

function Vh(a, b, c, d) {
    return r(function*() {
        const e = {
                config: a,
                hashData: b,
                configData: c,
                timestamp: W()
            },
            f = yield Th(d);
        yield f.clear("coldConfigStore");
        return yield hh(f, "coldConfigStore", e)
    })
}

function Wh(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield Th(a), ["coldConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => qh(c.objectStore("coldConfigStore").index("coldTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
}

function Xh(a) {
    return r(function*() {
        let b = void 0;
        yield X(yield Th(a), ["hotConfigStore"], {
            mode: "readwrite",
            B: !0
        }, c => qh(c.objectStore("hotConfigStore").index("hotTimestampIndex"), {
            direction: "prev"
        }, d => {
            b = d.cursor.value
        }));
        return b
    })
};
var Yh = class extends je {
    constructor() {
        super();
        this.j = [];
        this.h = [];
        const a = u("yt.gcf.config.hotUpdateCallbacks");
        a ? (this.j = [...a], this.h = a) : (this.h = [], w("yt.gcf.config.hotUpdateCallbacks", this.h))
    }
    m() {
        for (const b of this.j) {
            var a = this.h;
            const c = a.indexOf(b);
            c >= 0 && a.splice(c, 1)
        }
        this.j.length = 0;
        super.m()
    }
};

function Zh(a, b, c) {
    return r(function*() {
        if (S("start_client_gcf")) {
            c && (a.j = c, w("yt.gcf.config.hotConfigGroup", a.j || null));
            a.hotHashData = b;
            w("yt.gcf.config.hotHashData", a.hotHashData || null);
            var d = Hh();
            if (d) {
                if (!c) {
                    var e;
                    c = (e = yield Xh(d)) == null ? void 0 : e.config
                }
                yield Uh(c, b, d)
            }
            if (c) {
                d = a.i;
                e = c;
                for (const f of d.h) f(e)
            }
        }
    })
}

function $h(a, b, c) {
    return r(function*() {
        if (S("start_client_gcf")) {
            a.coldHashData = b;
            w("yt.gcf.config.coldHashData", a.coldHashData || null);
            const d = Hh();
            if (d) {
                if (!c) {
                    let e;
                    c = (e = yield Wh(d)) == null ? void 0 : e.config
                }
                c && (yield Vh(c, b, c.configData, d))
            }
        }
    })
}
var ai = class {
    constructor() {
        this.h = 0;
        this.i = new Yh
    }
};

function bi() {
    return "INNERTUBE_API_KEY" in Hf && "INNERTUBE_API_VERSION" in Hf
}

function ci() {
    return {
        innertubeApiKey: Q("INNERTUBE_API_KEY"),
        innertubeApiVersion: Q("INNERTUBE_API_VERSION"),
        Y: Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        Aa: Q("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        Ba: Q("INNERTUBE_CONTEXT_CLIENT_NAME", 1),
        innertubeContextClientVersion: Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),
        ja: Q("INNERTUBE_CONTEXT_HL"),
        ia: Q("INNERTUBE_CONTEXT_GL"),
        Ca: Q("INNERTUBE_HOST_OVERRIDE") || "",
        Ea: !!Q("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        Da: !!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: Q("SERIALIZED_CLIENT_CONFIG_DATA")
    }
}

function di(a) {
    const b = {
        client: {
            hl: a.ja,
            gl: a.ia,
            clientName: a.Aa,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.Y
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = t.devicePixelRatio;
    c && c != 1 && (b.client.screenDensityFloat = String(c));
    c = Yf();
    c !== "" && (b.client.experimentsToken = c);
    c = Zf();
    c.length > 0 && (b.request = {
        internalExperimentFlags: c
    });
    ei(void 0, b);
    fi(a, void 0, b);
    S("start_client_gcf") && gi(void 0, b);
    Q("DELEGATED_SESSION_ID") && !S("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: Q("DELEGATED_SESSION_ID")
    });
    !S("fill_delegate_context_in_gel_killswitch") && (a = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) && (b.user = Object.assign({}, b.user, {
        serializedDelegationContext: a
    }));
    a = Object;
    c = a.assign;
    var d = b.client,
        e = Q("DEVICE", "");
    const f = {};
    for (const [g, k] of Object.entries(Rf(e))) {
        e = g;
        const h = k;
        e === "cbrand" ? f.deviceMake = h : e === "cmodel" ? f.deviceModel = h : e === "cbr" ? f.browserName = h : e === "cbrver" ? f.browserVersion = h : e === "cos" ? f.osName = h : e === "cosver" ? f.osVersion = h : e === "cplatform" &&
            (f.platform = h)
    }
    b.client = c.call(a, d, f);
    return b
}

function ei(a, b) {
    const c = u("yt.embedded_player.embed_url");
    c && (a ? (b = Wc(a, df, 7) || new df, I(b, 4, c), H(a, df, 7, b)) : b && (b.thirdParty = {
        embedUrl: c
    }))
}

function fi(a, b, c) {
    if (a.appInstallData)
        if (b) {
            let d;
            c = (d = Wc(b, Xe, 62)) != null ? d : new Xe;
            I(c, 6, a.appInstallData);
            H(b, Xe, 62, c)
        } else c && (c.client.configInfo = c.client.configInfo || {}, c.client.configInfo.appInstallData = a.appInstallData)
}

function hi(a, b, c = {}) {
    let d = {};
    Q("EOM_VISITOR_DATA") ? d = {
        "X-Goog-EOM-Visitor-Id": Q("EOM_VISITOR_DATA")
    } : d = {
        "X-Goog-Visitor-Id": c.visitorData || Q("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    b = c.pb || Q("AUTHORIZATION");
    b || (a ? b = `Bearer ${u("gapi.auth.getToken")().ob}` : (a = sg(qg()), S("pageid_as_header_web") || delete a["X-Goog-PageId"], d = Object.assign({}, d, a)));
    b && (d.Authorization = b);
    return d
}

function gi(a, b) {
    if (!ai.h) {
        var c = new ai;
        ai.h = c
    }
    c = ai.h;
    var d = W() - c.h;
    if (c.h !== 0 && d < T("send_config_hash_timer")) c = void 0;
    else {
        d = u("yt.gcf.config.coldConfigData");
        var e = u("yt.gcf.config.hotHashData"),
            f = u("yt.gcf.config.coldHashData");
        d && e && f && (c.h = W());
        c = {
            coldConfigData: d,
            hotHashData: e,
            coldHashData: f
        }
    }
    if (d = c)
        if (e = d.coldConfigData, c = d.coldHashData, d = d.hotHashData, a) {
            var g;
            b = (g = Wc(a, Xe, 62)) != null ? g : new Xe;
            g = I(b, 1, e);
            g = I(g, 3, c);
            I(g, 5, d);
            H(a, Xe, 62, b)
        } else b && (b.client.configInfo = b.client.configInfo || {},
            e && (b.client.configInfo.coldConfigData = e), c && (b.client.configInfo.coldHashData = c), d && (b.client.configInfo.hotHashData = d))
};
typeof TextEncoder !== "undefined" && new TextEncoder;

function ii(a) {
    this.version = 1;
    this.args = a
};

function ji() {
    var a = ki;
    this.topic = "screen-created";
    this.h = a
}
ji.prototype.toString = function() {
    return this.topic
};
const li = u("ytPubsub2Pubsub2Instance") || new M;
M.prototype.subscribe = M.prototype.J;
M.prototype.unsubscribeByKey = M.prototype.C;
M.prototype.publish = M.prototype.A;
M.prototype.clear = M.prototype.clear;
w("ytPubsub2Pubsub2Instance", li);
const mi = u("ytPubsub2Pubsub2SubscribedKeys") || {};
w("ytPubsub2Pubsub2SubscribedKeys", mi);
const ni = u("ytPubsub2Pubsub2TopicToKeys") || {};
w("ytPubsub2Pubsub2TopicToKeys", ni);
const oi = u("ytPubsub2Pubsub2IsAsync") || {};
w("ytPubsub2Pubsub2IsAsync", oi);
w("ytPubsub2Pubsub2SkipSubKey", null);

function pi(a, b) {
    const c = qi();
    c && c.publish.call(c, a.toString(), a, b)
}

function ri(a) {
    var b = si;
    const c = qi();
    if (!c) return 0;
    const d = c.subscribe(b.toString(), (e, f) => {
        var g = u("ytPubsub2Pubsub2SkipSubKey");
        g && g == d || (g = () => {
            if (mi[d]) try {
                if (f && b instanceof ji && b != e) try {
                    var k = b.h,
                        h = f;
                    if (!h.args || !h.version) throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
                    try {
                        if (!k.ma) {
                            const m = new k;
                            k.ma = m.version
                        }
                        var l = k.ma
                    } catch (m) {}
                    if (!l || h.version != l) throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
                    try {
                        l = Reflect;
                        var n = l.construct; {
                            var q = h.args;
                            const m = q.length;
                            if (m > 0) {
                                const v = Array(m);
                                for (h = 0; h < m; h++) v[h] = q[h];
                                var p = v
                            } else p = []
                        }
                        f = n.call(l, k, p)
                    } catch (m) {
                        throw m.message = "yt.pubsub2.Data.deserialize(): " + m.message, m;
                    }
                } catch (m) {
                    throw m.message = "yt.pubsub2.pubsub2 cross-binary conversion error for " + b.toString() + ": " + m.message, m;
                }
                a.call(window, f)
            } catch (m) {
                Kf(m)
            }
        }, oi[b.toString()] ? u("yt.scheduler.instance") ? Cg.h(g) : Uf(g, 0) : g())
    });
    mi[d] = !0;
    ni[b.toString()] || (ni[b.toString()] = []);
    ni[b.toString()].push(d);
    return d
}

function ti() {
    var a = ui;
    const b = ri(function(c) {
        a.apply(void 0, arguments);
        vi(b)
    });
    return b
}

function vi(a) {
    const b = qi();
    b && (typeof a === "number" && (a = [a]), ua(a, c => {
        b.unsubscribeByKey(c);
        delete mi[c]
    }))
}

function qi() {
    return u("ytPubsub2Pubsub2Instance")
};
let wi = void 0,
    xi = void 0;
var yi = {
    accountStateChangeSignedIn: 23,
    accountStateChangeSignedOut: 24,
    delayedEventMetricCaptured: 11,
    latencyActionBaselined: 6,
    latencyActionInfo: 7,
    latencyActionTicked: 5,
    offlineTransferStatusChanged: 2,
    offlineImageDownload: 335,
    playbackStartStateChanged: 9,
    systemHealthCaptured: 3,
    mangoOnboardingCompleted: 10,
    mangoPushNotificationReceived: 230,
    mangoUnforkDbMigrationError: 121,
    mangoUnforkDbMigrationSummary: 122,
    mangoUnforkDbMigrationPreunforkDbVersionNumber: 133,
    mangoUnforkDbMigrationPhoneMetadata: 134,
    mangoUnforkDbMigrationPhoneStorage: 135,
    mangoUnforkDbMigrationStep: 142,
    mangoAsyncApiMigrationEvent: 223,
    mangoDownloadVideoResult: 224,
    mangoHomepageVideoCount: 279,
    mangoHomeV3State: 295,
    mangoImageClientCacheHitEvent: 273,
    sdCardStatusChanged: 98,
    framesDropped: 12,
    thumbnailHovered: 13,
    deviceRetentionInfoCaptured: 14,
    thumbnailLoaded: 15,
    backToAppEvent: 318,
    streamingStatsCaptured: 17,
    offlineVideoShared: 19,
    appCrashed: 20,
    youThere: 21,
    offlineStateSnapshot: 22,
    mdxSessionStarted: 25,
    mdxSessionConnected: 26,
    mdxSessionDisconnected: 27,
    bedrockResourceConsumptionSnapshot: 28,
    nextGenWatchWatchSwiped: 29,
    kidsAccountsSnapshot: 30,
    zeroStepChannelCreated: 31,
    tvhtml5SearchCompleted: 32,
    offlineSharePairing: 34,
    offlineShareUnlock: 35,
    mdxRouteDistributionSnapshot: 36,
    bedrockRepetitiveActionTimed: 37,
    unpluggedDegradationInfo: 229,
    uploadMp4HeaderMoved: 38,
    uploadVideoTranscoded: 39,
    uploadProcessorStarted: 46,
    uploadProcessorEnded: 47,
    uploadProcessorReady: 94,
    uploadProcessorRequirementPending: 95,
    uploadProcessorInterrupted: 96,
    uploadFrontendEvent: 241,
    assetPackDownloadStarted: 41,
    assetPackDownloaded: 42,
    assetPackApplied: 43,
    assetPackDeleted: 44,
    appInstallAttributionEvent: 459,
    playbackSessionStopped: 45,
    adBlockerMessagingShown: 48,
    distributionChannelCaptured: 49,
    dataPlanCpidRequested: 51,
    detailedNetworkTypeCaptured: 52,
    sendStateUpdated: 53,
    receiveStateUpdated: 54,
    sendDebugStateUpdated: 55,
    receiveDebugStateUpdated: 56,
    kidsErrored: 57,
    mdxMsnSessionStatsFinished: 58,
    appSettingsCaptured: 59,
    mdxWebSocketServerHttpError: 60,
    mdxWebSocketServer: 61,
    startupCrashesDetected: 62,
    coldStartInfo: 435,
    offlinePlaybackStarted: 63,
    liveChatMessageSent: 225,
    liveChatUserPresent: 434,
    liveChatBeingModerated: 457,
    liveCreationCameraUpdated: 64,
    liveCreationEncodingCaptured: 65,
    liveCreationError: 66,
    liveCreationHealthUpdated: 67,
    liveCreationVideoEffectsCaptured: 68,
    liveCreationStageOccured: 75,
    liveCreationBroadcastScheduled: 123,
    liveCreationArchiveReplacement: 149,
    liveCreationCostreamingConnection: 421,
    liveCreationStreamWebrtcStats: 288,
    mdxSessionRecoveryStarted: 69,
    mdxSessionRecoveryCompleted: 70,
    mdxSessionRecoveryStopped: 71,
    visualElementShown: 72,
    visualElementHidden: 73,
    visualElementGestured: 78,
    visualElementStateChanged: 208,
    screenCreated: 156,
    playbackAssociated: 202,
    visualElementAttached: 215,
    playbackContextEvent: 214,
    cloudCastingPlaybackStarted: 74,
    webPlayerApiCalled: 76,
    tvhtml5AccountDialogOpened: 79,
    foregroundHeartbeat: 80,
    foregroundHeartbeatScreenAssociated: 111,
    kidsOfflineSnapshot: 81,
    mdxEncryptionSessionStatsFinished: 82,
    playerRequestCompleted: 83,
    liteSchedulerStatistics: 84,
    mdxSignIn: 85,
    spacecastMetadataLookupRequested: 86,
    spacecastBatchLookupRequested: 87,
    spacecastSummaryRequested: 88,
    spacecastPlayback: 89,
    spacecastDiscovery: 90,
    tvhtml5LaunchUrlComponentChanged: 91,
    mdxBackgroundPlaybackRequestCompleted: 92,
    mdxBrokenAdditionalDataDeviceDetected: 93,
    tvhtml5LocalStorage: 97,
    tvhtml5DeviceStorageStatus: 147,
    autoCaptionsAvailable: 99,
    playbackScrubbingEvent: 339,
    flexyState: 100,
    interfaceOrientationCaptured: 101,
    mainAppBrowseFragmentCache: 102,
    offlineCacheVerificationFailure: 103,
    offlinePlaybackExceptionDigest: 217,
    vrCopresenceStats: 104,
    vrCopresenceSyncStats: 130,
    vrCopresenceCommsStats: 137,
    vrCopresencePartyStats: 153,
    vrCopresenceEmojiStats: 213,
    vrCopresenceEvent: 141,
    vrCopresenceFlowTransitEvent: 160,
    vrCowatchPartyEvent: 492,
    vrCowatchUserStartOrJoinEvent: 504,
    vrPlaybackEvent: 345,
    kidsAgeGateTracking: 105,
    offlineDelayAllowedTracking: 106,
    mainAppAutoOfflineState: 107,
    videoAsThumbnailDownload: 108,
    videoAsThumbnailPlayback: 109,
    liteShowMore: 110,
    renderingError: 118,
    kidsProfilePinGateTracking: 119,
    abrTrajectory: 124,
    scrollEvent: 125,
    streamzIncremented: 126,
    kidsProfileSwitcherTracking: 127,
    kidsProfileCreationTracking: 129,
    buyFlowStarted: 136,
    mbsConnectionInitiated: 138,
    mbsPlaybackInitiated: 139,
    mbsLoadChildren: 140,
    liteProfileFetcher: 144,
    mdxRemoteTransaction: 146,
    reelPlaybackError: 148,
    reachabilityDetectionEvent: 150,
    mobilePlaybackEvent: 151,
    courtsidePlayerStateChanged: 152,
    musicPersistentCacheChecked: 154,
    musicPersistentCacheCleared: 155,
    playbackInterrupted: 157,
    playbackInterruptionResolved: 158,
    fixFopFlow: 159,
    anrDetection: 161,
    backstagePostCreationFlowEnded: 162,
    clientError: 163,
    gamingAccountLinkStatusChanged: 164,
    liteHousewarming: 165,
    buyFlowEvent: 167,
    kidsParentalGateTracking: 168,
    kidsSignedOutSettingsStatus: 437,
    kidsSignedOutPauseHistoryFixStatus: 438,
    tvhtml5WatchdogViolation: 444,
    ypcUpgradeFlow: 169,
    yongleStudy: 170,
    ypcUpdateFlowStarted: 171,
    ypcUpdateFlowCancelled: 172,
    ypcUpdateFlowSucceeded: 173,
    ypcUpdateFlowFailed: 174,
    liteGrowthkitPromo: 175,
    paymentFlowStarted: 341,
    transactionFlowShowPaymentDialog: 405,
    transactionFlowStarted: 176,
    transactionFlowSecondaryDeviceStarted: 222,
    transactionFlowSecondaryDeviceSignedOutStarted: 383,
    transactionFlowCancelled: 177,
    transactionFlowPaymentCallBackReceived: 387,
    transactionFlowPaymentSubmitted: 460,
    transactionFlowPaymentSucceeded: 329,
    transactionFlowSucceeded: 178,
    transactionFlowFailed: 179,
    transactionFlowPlayBillingConnectionStartEvent: 428,
    transactionFlowSecondaryDeviceSuccess: 458,
    transactionFlowErrorEvent: 411,
    liteVideoQualityChanged: 180,
    watchBreakEnablementSettingEvent: 181,
    watchBreakFrequencySettingEvent: 182,
    videoEffectsCameraPerformanceMetrics: 183,
    adNotify: 184,
    startupTelemetry: 185,
    playbackOfflineFallbackUsed: 186,
    outOfMemory: 187,
    ypcPauseFlowStarted: 188,
    ypcPauseFlowCancelled: 189,
    ypcPauseFlowSucceeded: 190,
    ypcPauseFlowFailed: 191,
    uploadFileSelected: 192,
    ypcResumeFlowStarted: 193,
    ypcResumeFlowCancelled: 194,
    ypcResumeFlowSucceeded: 195,
    ypcResumeFlowFailed: 196,
    adsClientStateChange: 197,
    ypcCancelFlowStarted: 198,
    ypcCancelFlowCancelled: 199,
    ypcCancelFlowSucceeded: 200,
    ypcCancelFlowFailed: 201,
    ypcCancelFlowGoToPaymentProcessor: 402,
    ypcDeactivateFlowStarted: 320,
    ypcRedeemFlowStarted: 203,
    ypcRedeemFlowCancelled: 204,
    ypcRedeemFlowSucceeded: 205,
    ypcRedeemFlowFailed: 206,
    ypcFamilyCreateFlowStarted: 258,
    ypcFamilyCreateFlowCancelled: 259,
    ypcFamilyCreateFlowSucceeded: 260,
    ypcFamilyCreateFlowFailed: 261,
    ypcFamilyManageFlowStarted: 262,
    ypcFamilyManageFlowCancelled: 263,
    ypcFamilyManageFlowSucceeded: 264,
    ypcFamilyManageFlowFailed: 265,
    restoreContextEvent: 207,
    embedsAdEvent: 327,
    autoplayTriggered: 209,
    clientDataErrorEvent: 210,
    experimentalVssValidation: 211,
    tvhtml5TriggeredEvent: 212,
    tvhtml5FrameworksFieldTrialResult: 216,
    tvhtml5FrameworksFieldTrialStart: 220,
    musicOfflinePreferences: 218,
    watchTimeSegment: 219,
    appWidthLayoutError: 221,
    accountRegistryChange: 226,
    userMentionAutoCompleteBoxEvent: 227,
    downloadRecommendationEnablementSettingEvent: 228,
    musicPlaybackContentModeChangeEvent: 231,
    offlineDbOpenCompleted: 232,
    kidsFlowEvent: 233,
    kidsFlowCorpusSelectedEvent: 234,
    videoEffectsEvent: 235,
    unpluggedOpsEogAnalyticsEvent: 236,
    playbackAudioRouteEvent: 237,
    interactionLoggingDebugModeError: 238,
    offlineYtbRefreshed: 239,
    kidsFlowError: 240,
    musicAutoplayOnLaunchAttempted: 242,
    deviceContextActivityEvent: 243,
    deviceContextEvent: 244,
    templateResolutionException: 245,
    musicSideloadedPlaylistServiceCalled: 246,
    embedsStorageAccessNotChecked: 247,
    embedsHasStorageAccessResult: 248,
    embedsItpPlayedOnReload: 249,
    embedsRequestStorageAccessResult: 250,
    embedsShouldRequestStorageAccessResult: 251,
    embedsRequestStorageAccessState: 256,
    embedsRequestStorageAccessFailedState: 257,
    embedsItpWatchLaterResult: 266,
    searchSuggestDecodingPayloadFailure: 252,
    siriShortcutActivated: 253,
    tvhtml5KeyboardPerformance: 254,
    latencyActionSpan: 255,
    elementsLog: 267,
    ytbFileOpened: 268,
    tfliteModelError: 269,
    apiTest: 270,
    yongleUsbSetup: 271,
    touStrikeInterstitialEvent: 272,
    liteStreamToSave: 274,
    appBundleClientEvent: 275,
    ytbFileCreationFailed: 276,
    adNotifyFailure: 278,
    ytbTransferFailed: 280,
    blockingRequestFailed: 281,
    liteAccountSelector: 282,
    liteAccountUiCallbacks: 283,
    dummyPayload: 284,
    browseResponseValidationEvent: 285,
    entitiesError: 286,
    musicIosBackgroundFetch: 287,
    mdxNotificationEvent: 289,
    layersValidationError: 290,
    musicPwaInstalled: 291,
    liteAccountCleanup: 292,
    html5PlayerHealthEvent: 293,
    watchRestoreAttempt: 294,
    liteAccountSignIn: 296,
    notaireEvent: 298,
    kidsVoiceSearchEvent: 299,
    adNotifyFilled: 300,
    delayedEventDropped: 301,
    analyticsSearchEvent: 302,
    systemDarkThemeOptOutEvent: 303,
    flowEvent: 304,
    networkConnectivityBaselineEvent: 305,
    ytbFileImported: 306,
    downloadStreamUrlExpired: 307,
    directSignInEvent: 308,
    lyricImpressionEvent: 309,
    accessibilityStateEvent: 310,
    tokenRefreshEvent: 311,
    genericAttestationExecution: 312,
    tvhtml5VideoSeek: 313,
    unpluggedAutoPause: 314,
    scrubbingEvent: 315,
    bedtimeReminderEvent: 317,
    tvhtml5UnexpectedRestart: 319,
    tvhtml5StabilityTraceEvent: 478,
    tvhtml5OperationHealth: 467,
    tvhtml5WatchKeyEvent: 321,
    voiceLanguageChanged: 322,
    tvhtml5LiveChatStatus: 323,
    parentToolsCorpusSelectedEvent: 324,
    offerAdsEnrollmentInitiated: 325,
    networkQualityIntervalEvent: 326,
    deviceStartupMetrics: 328,
    heartbeatActionPlayerTransitioned: 330,
    tvhtml5Lifecycle: 331,
    heartbeatActionPlayerHalted: 332,
    adaptiveInlineMutedSettingEvent: 333,
    mainAppLibraryLoadingState: 334,
    thirdPartyLogMonitoringEvent: 336,
    appShellAssetLoadReport: 337,
    tvhtml5AndroidAttestation: 338,
    tvhtml5StartupSoundEvent: 340,
    iosBackgroundRefreshTask: 342,
    iosBackgroundProcessingTask: 343,
    sliEventBatch: 344,
    postImpressionEvent: 346,
    musicSideloadedPlaylistExport: 347,
    idbUnexpectedlyClosed: 348,
    voiceSearchEvent: 349,
    mdxSessionCastEvent: 350,
    idbQuotaExceeded: 351,
    idbTransactionEnded: 352,
    idbTransactionAborted: 353,
    tvhtml5KeyboardLogging: 354,
    idbIsSupportedCompleted: 355,
    creatorStudioMobileEvent: 356,
    idbDataCorrupted: 357,
    parentToolsAppChosenEvent: 358,
    webViewBottomSheetResized: 359,
    activeStateControllerScrollPerformanceSummary: 360,
    navigatorValidation: 361,
    mdxSessionHeartbeat: 362,
    clientHintsPolyfillDiagnostics: 363,
    clientHintsPolyfillEvent: 364,
    proofOfOriginTokenError: 365,
    kidsAddedAccountSummary: 366,
    musicWearableDevice: 367,
    ypcRefundFlowEvent: 368,
    tvhtml5PlaybackMeasurementEvent: 369,
    tvhtml5WatermarkMeasurementEvent: 370,
    clientExpGcfPropagationEvent: 371,
    mainAppReferrerIntent: 372,
    leaderLockEnded: 373,
    leaderLockAcquired: 374,
    googleHatsEvent: 375,
    persistentLensLaunchEvent: 376,
    parentToolsChildWelcomeChosenEvent: 378,
    browseThumbnailPreloadEvent: 379,
    finalPayload: 380,
    mdxDialAdditionalDataUpdateEvent: 381,
    webOrchestrationTaskLifecycleRecord: 382,
    startupSignalEvent: 384,
    accountError: 385,
    gmsDeviceCheckEvent: 386,
    accountSelectorEvent: 388,
    accountUiCallbacks: 389,
    mdxDialAdditionalDataProbeEvent: 390,
    downloadsSearchIcingApiStats: 391,
    downloadsSearchIndexUpdatedEvent: 397,
    downloadsSearchIndexSnapshot: 398,
    dataPushClientEvent: 392,
    kidsCategorySelectedEvent: 393,
    mdxDeviceManagementSnapshotEvent: 394,
    prefetchRequested: 395,
    prefetchableCommandExecuted: 396,
    gelDebuggingEvent: 399,
    webLinkTtsPlayEnd: 400,
    clipViewInvalid: 401,
    persistentStorageStateChecked: 403,
    cacheWipeoutEvent: 404,
    playerEvent: 410,
    sfvEffectPipelineStartedEvent: 412,
    sfvEffectPipelinePausedEvent: 429,
    sfvEffectPipelineEndedEvent: 413,
    sfvEffectChosenEvent: 414,
    sfvEffectLoadedEvent: 415,
    sfvEffectUserInteractionEvent: 465,
    sfvEffectFirstFrameProcessedLatencyEvent: 416,
    sfvEffectAggregatedFramesProcessedLatencyEvent: 417,
    sfvEffectAggregatedFramesDroppedEvent: 418,
    sfvEffectPipelineErrorEvent: 430,
    sfvEffectGraphFrozenEvent: 419,
    sfvEffectGlThreadBlockedEvent: 420,
    mdeVideoChangedEvent: 442,
    mdePlayerPerformanceMetrics: 472,
    mdeExporterEvent: 497,
    genericClientExperimentEvent: 423,
    homePreloadTaskScheduled: 424,
    homePreloadTaskExecuted: 425,
    homePreloadCacheHit: 426,
    polymerPropertyChangedInObserver: 427,
    applicationStarted: 431,
    networkCronetRttBatch: 432,
    networkCronetRttSummary: 433,
    repeatChapterLoopEvent: 436,
    seekCancellationEvent: 462,
    lockModeTimeoutEvent: 483,
    externalVideoShareToYoutubeAttempt: 501,
    parentCodeEvent: 502,
    offlineTransferStarted: 4,
    musicOfflineMixtapePreferencesChanged: 16,
    mangoDailyNewVideosNotificationAttempt: 40,
    mangoDailyNewVideosNotificationError: 77,
    dtwsPlaybackStarted: 112,
    dtwsTileFetchStarted: 113,
    dtwsTileFetchCompleted: 114,
    dtwsTileFetchStatusChanged: 145,
    dtwsKeyframeDecoderBufferSent: 115,
    dtwsTileUnderflowedOnNonkeyframe: 116,
    dtwsBackfillFetchStatusChanged: 143,
    dtwsBackfillUnderflowed: 117,
    dtwsAdaptiveLevelChanged: 128,
    blockingVisitorIdTimeout: 277,
    liteSocial: 18,
    mobileJsInvocation: 297,
    biscottiBasedDetection: 439,
    coWatchStateChange: 440,
    embedsVideoDataDidChange: 441,
    shortsFirst: 443,
    cruiseControlEvent: 445,
    qoeClientLoggingContext: 446,
    atvRecommendationJobExecuted: 447,
    tvhtml5UserFeedback: 448,
    producerProjectCreated: 449,
    producerProjectOpened: 450,
    producerProjectDeleted: 451,
    producerProjectElementAdded: 453,
    producerProjectElementRemoved: 454,
    tvhtml5ShowClockEvent: 455,
    deviceCapabilityCheckMetrics: 456,
    youtubeClearcutEvent: 461,
    offlineBrowseFallbackEvent: 463,
    getCtvTokenEvent: 464,
    startupDroppedFramesSummary: 466,
    screenshotEvent: 468,
    miniAppPlayEvent: 469,
    elementsDebugCounters: 470,
    fontLoadEvent: 471,
    webKillswitchReceived: 473,
    webKillswitchExecuted: 474,
    cameraOpenEvent: 475,
    manualSmoothnessMeasurement: 476,
    tvhtml5AppQualityEvent: 477,
    polymerPropertyAccessEvent: 479,
    miniAppSdkUsage: 480,
    cobaltTelemetryEvent: 481,
    crossDevicePlayback: 482,
    channelCreatedWithObakeImage: 484,
    channelEditedWithObakeImage: 485,
    offlineDeleteEvent: 486,
    crossDeviceNotificationTransfer: 487,
    androidIntentEvent: 488,
    unpluggedAmbientInterludesCounterfactualEvent: 489,
    keyPlaysPlayback: 490,
    shortsCreationFallbackEvent: 493,
    vssData: 491,
    castMatch: 494,
    miniAppPerformanceMetrics: 495,
    userFeedbackEvent: 496,
    kidsGuestSessionMismatch: 498,
    musicSideloadedPlaylistMigrationEvent: 499,
    sleepTimerSessionFinishEvent: 500,
    watchEpPromoConflict: 503
};
const zi = ["client.name", "client.version"];

function Ai(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? zi.includes(b.key) : !1);
    return a
};
var Bi = Rh("ServiceWorkerLogsDatabase", {
    L: {
        SWHealthLog: {
            K: 1
        }
    },
    shared: !0,
    upgrade: (a, b) => {
        b(1) && fh(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function Ci(a, b) {
    return r(function*() {
        var c = yield yh(Bi(), b), d = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const e = Object.assign({}, a);
        e.clientError && (e.clientError = Ai(e.clientError));
        e.interface = d;
        return hh(c, "SWHealthLog", e)
    })
};
w("ytNetworklessLoggingInitializationOptions", t.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1
});

function Di(a, b, c, d) {
    !Q("VISITOR_DATA") && b !== "visitor_id" && Math.random() < .01 && Lf(new tf("Missing VISITOR_DATA when sending innertube request.", b, c, d));
    if (!a.isReady()) throw a = new tf("innertube xhrclient not ready", b, c, d), Kf(a), a;
    c = {
        headers: d.headers || {},
        method: "POST",
        postParams: c,
        postBody: d.postBody,
        postBodyFormat: d.postBodyFormat || "JSON",
        onTimeout: () => {
            d.onTimeout()
        },
        onFetchTimeout: d.onTimeout,
        onSuccess: (h, l) => {
            if (d.onSuccess) d.onSuccess(l)
        },
        onFetchSuccess: h => {
            if (d.onSuccess) d.onSuccess(h)
        },
        onError: (h, l) => {
            if (d.onError) d.onError(l)
        },
        onFetchError: h => {
            if (d.onError) d.onError(h)
        },
        timeout: d.timeout,
        withCredentials: !0,
        compress: d.compress
    };
    c.headers["Content-Type"] || (c.headers["Content-Type"] = "application/json");
    let e = "";
    var f = a.config_.Ca;
    f && (e = f);
    var g = a.config_.Ea || !1;
    f = hi(g, e, d);
    Object.assign(c.headers, f);
    (f = c.headers.Authorization) && !e && g && (c.headers["x-origin"] = window.location.origin);
    b = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${b}`;
    g = {
        alt: "json"
    };
    let k = a.config_.Da && f;
    k = k && f.startsWith("Bearer");
    k || (g.key = a.config_.innertubeApiKey);
    a = Sf(`${e}${b}`, g || {}, !0);
    try {
        ag(a,
            c)
    } catch (h) {
        if (h.name === "InvalidAccessError") Lf(Error("An extension is blocking network request."));
        else throw h;
    }
}
var Ei = class {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : bi() && (this.config_ = ci())
    }
    isReady() {
        !this.config_ && bi() && (this.config_ = ci());
        return !!this.config_
    }
};
let Fi = 0;
w("ytDomDomGetNextId", u("ytDomDomGetNextId") || (() => ++Fi));
w("ytEventsEventsListeners", t.ytEventsEventsListeners || {});
w("ytEventsEventsCounter", t.ytEventsEventsCounter || {
    count: 0
});
t.ytPubsubPubsubInstance || new M;
var Gi = Symbol("injectionDeps"),
    Hi = class {
        constructor() {
            this.name = "INNERTUBE_TRANSPORT_TOKEN"
        }
        toString() {
            return `InjectionToken(${this.name})`
        }
    },
    Ii = class {
        constructor() {
            this.key = ai
        }
    };

function Ji(a) {
    var b = {
        ba: Ki,
        la: Li.h
    };
    a.i.set(b.ba, b);
    const c = a.j.get(b.ba);
    if (c) try {
        c.Hb(a.resolve(b.ba))
    } catch (d) {
        c.Eb(d)
    }
}

function Mi(a, b, c, d = !1) {
    if (c.indexOf(b) > -1) throw Error(`Deps cycle for: ${b}`);
    if (a.h.has(b)) return a.h.get(b);
    if (!a.i.has(b)) {
        if (d) return;
        throw Error(`No provider for: ${b}`);
    }
    d = a.i.get(b);
    c.push(b);
    if (d.la !== void 0) var e = d.la;
    else if (d.Na) e = d[Gi] ? Ni(a, d[Gi], c) : [], e = d.Na(...e);
    else if (d.Ma) {
        e = d.Ma;
        const f = e[Gi] ? Ni(a, e[Gi], c) : [];
        e = new e(...f)
    } else throw Error(`Could not resolve providers for: ${b}`);
    c.pop();
    d.Ob || a.h.set(b, e);
    return e
}

function Ni(a, b, c) {
    return b ? b.map(d => d instanceof Ii ? Mi(a, d.key, c, !0) : Mi(a, d, c)) : []
}
var Oi = class {
    constructor() {
        this.i = new Map;
        this.j = new Map;
        this.h = new Map
    }
    resolve(a) {
        return a instanceof Ii ? Mi(this, a.key, [], !0) : Mi(this, a, [])
    }
};
let Pi;

function Qi() {
    Pi || (Pi = new Oi);
    return Pi
};
let Ri = window;

function Si() {
    let a, b;
    return "h5vcc" in Ri && ((a = Ri.h5vcc.traceEvent) == null ? 0 : a.traceBegin) && ((b = Ri.h5vcc.traceEvent) == null ? 0 : b.traceEnd) ? 1 : "performance" in Ri && Ri.performance.mark && Ri.performance.measure ? 2 : 0
}

function Ti(a) {
    const b = Si();
    switch (b) {
        case 1:
            Ri.h5vcc.traceEvent.traceBegin("YTLR", a);
            break;
        case 2:
            Ri.performance.mark(`${a}-start`);
            break;
        case 0:
            break;
        default:
            ta(b, "unknown trace type")
    }
}

function Ui(a) {
    var b = Si();
    switch (b) {
        case 1:
            Ri.h5vcc.traceEvent.traceEnd("YTLR", a);
            break;
        case 2:
            b = `${a}-start`;
            const c = `${a}-end`;
            Ri.performance.mark(c);
            Ri.performance.measure(a, b, c);
            break;
        case 0:
            break;
        default:
            ta(b, "unknown trace type")
    }
};
var Vi = S("web_enable_lifecycle_monitoring") && Si() !== 0,
    Wi = S("web_enable_lifecycle_monitoring");

function Xi(a) {
    let b;
    return (b = a.priority) != null ? b : 0
}

function Yi(a) {
    var b = Array.from(a.h.keys()).sort((c, d) => Xi(a.h[d]) - Xi(a.h[c]));
    for (const c of b) b = a.h[c], b.jobId === void 0 || b.V || (a.scheduler.P(b.jobId), xg(b.Z, 10))
}
var Zi = class {
    constructor(a) {
        this.scheduler = Ag();
        this.i = new Me;
        this.h = a;
        for (let b = 0; b < this.h.length; b++) {
            const c = this.h[b];
            a = () => {
                c.Z();
                this.h[b].V = !0;
                this.h.every(e => e.V === !0) && this.i.resolve()
            };
            const d = xg(a, Xi(c));
            this.h[b] = Object.assign({}, c, {
                Z: a,
                jobId: d
            })
        }
    }
    cancel() {
        for (const a of this.h) a.jobId === void 0 || a.V || this.scheduler.P(a.jobId), a.V = !0;
        this.i.resolve()
    }
};

function $i(a, b, c) {
    Wi && console.groupCollapsed && console.groupEnd && (console.groupCollapsed(`[${a.constructor.name}] '${a.state}' to '${b}'`), console.log("with message: ", c), console.groupEnd())
}

function aj(a, b) {
    const c = b.filter(e => bj(a, e) === 10),
        d = b.filter(e => bj(a, e) !== 10);
    return a.l.Mb ? (...e) => r(function*() {
        yield cj(c, ...e);
        dj(a, d, ...e)
    }) : (...e) => {
        ej(c, ...e);
        dj(a, d, ...e)
    }
}

function bj(a, b) {
    let c, d;
    return (d = (c = a.j) != null ? c : b.priority) != null ? d : 0
}

function cj(a, ...b) {
    return r(function*() {
        Ag();
        for (const c of a) {
            let d;
            yg(() => {
                fj(c.name);
                const e = c.callback(...b);
                typeof(e == null ? void 0 : e.then) === "function" ? d = e.then(() => {
                    gj(c.name)
                }): gj(c.name)
            });
            d && (yield d)
        }
    })
}

function dj(a, b, ...c) {
    b = b.map(d => ({
        Z: () => {
            fj(d.name);
            d.callback(...c);
            gj(d.name)
        },
        priority: bj(a, d)
    }));
    b.length && (a.i = new Zi(b))
}

function ej(a, ...b) {
    Ag();
    for (const c of a) yg(() => {
        fj(c.name);
        c.callback(...b);
        gj(c.name)
    })
}

function fj(a) {
    Vi && a && Ti(a)
}

function gj(a) {
    Vi && a && Ui(a)
}
var hj = class {
    constructor() {
        this.state = "none";
        this.plugins = [];
        this.j = void 0;
        this.l = {};
        Vi && Ti(this.state)
    }
    get currentState() {
        return this.state
    }
    install(a) {
        this.plugins.push(a);
        return this
    }
    transition(a, b) {
        Vi && Ui(this.state);
        var c = this.transitions.find(d => Array.isArray(d.from) ? d.from.find(e => e === this.state && d.O === a) : d.from === this.state && d.O === a);
        if (c) {
            this.i && (Yi(this.i), this.i = void 0);
            $i(this, a, b);
            this.state = a;
            Vi && Ti(this.state);
            c = c.action.bind(this);
            const d = this.plugins.filter(e => e[a]).map(e => e[a]);
            c(aj(this, d), b)
        } else throw Error(`no transition specified from ${this.state} to ${a}`);
    }
};

function ij() {
    jj || (jj = new kj);
    return jj
}
var kj = class extends hj {
        constructor() {
            super();
            this.h = null;
            this.j = 10;
            this.transitions = [{
                    from: "none",
                    O: "application_navigating",
                    action: this.m
                }, {
                    from: "application_navigating",
                    O: "none",
                    action: this.s
                }, {
                    from: "application_navigating",
                    O: "application_navigating",
                    action: () => {}
                },
                {
                    from: "none",
                    O: "none",
                    action: () => {}
                }
            ]
        }
        m(a, b) {
            this.h = wg(() => {
                this.currentState === "application_navigating" && this.transition("none")
            }, 5E3);
            a(b == null ? void 0 : b.event)
        }
        s(a, b) {
            this.h && (Cg.P(this.h), this.h = null);
            a(b == null ? void 0 : b.event)
        }
    },
    jj;
let lj = [];
w("yt.logging.transport.getScrapedGelPayloads", function() {
    return lj
});

function mj(a, b) {
    const c = nj(b);
    if (a.h[c]) return a.h[c];
    const d = Object.keys(a.store) || [];
    if (d.length <= 1 && nj(b) === d[0]) return d;
    const e = [];
    for (let g = 0; g < d.length; g++) {
        const k = d[g].split("/");
        if (oj(b.auth, k[0])) {
            var f = b.isJspb;
            oj(f === void 0 ? "undefined" : f ? "true" : "false", k[1]) && oj(b.cttAuthInfo, k[2]) && (f = b.tier, f = f === void 0 ? "undefined" : JSON.stringify(f), oj(f, k[3]) && e.push(d[g]))
        }
    }
    return a.h[c] = e
}

function oj(a, b) {
    return a === void 0 || a === "undefined" ? !0 : a === b
}
var pj = class {
    constructor() {
        this.store = {};
        this.h = {}
    }
    storePayload(a, b) {
        a = nj(a);
        this.store[a] ? this.store[a].push(b) : (this.h = {}, this.store[a] = [b]);
        return a
    }
    smartExtractMatchingEntries(a) {
        if (!a.keys.length) return [];
        const b = mj(this, a.keys.splice(0, 1)[0]),
            c = [];
        for (let d = 0; d < b.length; d++) this.store[b[d]] && a.sizeLimit && (this.store[b[d]].length <= a.sizeLimit ? (c.push(...this.store[b[d]]), delete this.store[b[d]]) : c.push(...this.store[b[d]].splice(0, a.sizeLimit)));
        (a == null ? 0 : a.sizeLimit) && c.length < (a == null ? void 0 :
            a.sizeLimit) && (a.sizeLimit -= c.length, c.push(...this.smartExtractMatchingEntries(a)));
        return c
    }
    extractMatchingEntries(a) {
        a = mj(this, a);
        const b = [];
        for (let c = 0; c < a.length; c++) this.store[a[c]] && (b.push(...this.store[a[c]]), delete this.store[a[c]]);
        return b
    }
    getSequenceCount(a) {
        a = mj(this, a);
        let b = 0;
        for (let c = 0; c < a.length; c++) {
            let d;
            b += ((d = this.store[a[c]]) == null ? void 0 : d.length) || 0
        }
        return b
    }
};
pj.prototype.getSequenceCount = pj.prototype.getSequenceCount;
pj.prototype.extractMatchingEntries = pj.prototype.extractMatchingEntries;
pj.prototype.smartExtractMatchingEntries = pj.prototype.smartExtractMatchingEntries;
pj.prototype.storePayload = pj.prototype.storePayload;

function nj(a) {
    return [a.auth === void 0 ? "undefined" : a.auth, a.isJspb === void 0 ? "undefined" : a.isJspb, a.cttAuthInfo === void 0 ? "undefined" : a.cttAuthInfo, a.tier === void 0 ? "undefined" : a.tier].join("/")
};

function qj(a, b) {
    if (a) return a[b.name]
};
const rj = T("initial_gel_batch_timeout", 2E3),
    sj = T("gel_queue_timeout_max_ms", 6E4),
    tj = Math.pow(2, 16) - 1,
    uj = T("gel_min_batch_size", 5);
let vj = void 0;
class wj {
    constructor() {
        this.l = this.h = this.i = 0;
        this.j = !1
    }
}
const xj = new wj,
    yj = new wj,
    zj = new wj,
    Aj = new wj;
let Bj, Cj = !0,
    Dj = 1;
const Ej = new Map,
    Fj = t.ytLoggingTransportTokensToCttTargetIds_ || {},
    Gj = t.ytLoggingTransportTokensToJspbCttTargetIds_ || {};
let Hj = {};

function Ij() {
    let a = u("yt.logging.ims");
    a || (a = new pj, w("yt.logging.ims", a));
    return a
}

function Jj(a, b) {
    if (a.endpoint === "log_event") {
        Kj();
        var c = Lj(a),
            d = Mj(a.payload) || "";
        a: {
            if (S("enable_web_tiered_gel")) {
                var e = yi[d || ""];
                var f, g;
                if (Qi().resolve(new Ii) == null) var k = void 0;
                else {
                    let h;
                    k = (h = u("yt.gcf.config.hotConfigGroup")) != null ? h : Q("RAW_HOT_CONFIG_GROUP");
                    k = k == null ? void 0 : (f = k.loggingHotConfig) == null ? void 0 : (g = f.eventLoggingConfig) == null ? void 0 : g.payloadPolicies
                }
                if (f = k)
                    for (g = 0; g < f.length; g++)
                        if (f[g].payloadNumber === e) {
                            e = f[g];
                            break a
                        }
            }
            e = void 0
        }
        f = 200;
        if (e) {
            if (e.enabled === !1 && !S("web_payload_policy_disabled_killswitch")) return;
            f = Nj(e.tier);
            if (f === 400) {
                Oj(a, b);
                return
            }
        }
        Hj[c] = !0;
        e = {
            cttAuthInfo: c,
            isJspb: !1,
            tier: f
        };
        Ij().storePayload(e, a.payload);
        Pj(b, c, e, d === "gelDebuggingEvent")
    }
}

function Pj(a, b, c, d = !1) {
    a && (vj = new a);
    a = T("tvhtml5_logging_max_batch_ads_fork") || T("tvhtml5_logging_max_batch") || T("web_logging_max_batch") || 100;
    const e = W(),
        f = Qj(!1, c.tier),
        g = f.l;
    d && (f.j = !0);
    d = 0;
    c && (d = Ij().getSequenceCount(c));
    const k = () => {
        Rj({
            writeThenSend: !0
        }, S("flush_only_full_queue") ? b : void 0, !1, c.tier)
    };
    d >= 1E3 ? k() : d >= a ? Bj || (Bj = Sj(() => {
        k();
        Bj = void 0
    }, 0)) : e - g >= 10 && (Tj(!1, c.tier), f.l = e)
}

function Oj(a, b) {
    if (a.endpoint === "log_event") {
        Kj();
        var c = Lj(a),
            d = new Map;
        d.set(c, [a.payload]);
        var e = Mj(a.payload) || "";
        b && (vj = new b);
        return new L((f, g) => {
            vj && vj.isReady() ? Uj(d, vj, f, g, {
                bypassNetworkless: !0
            }, !0, e === "gelDebuggingEvent") : f()
        })
    }
}

function Lj(a) {
    var b = "";
    if (a.dangerousLogToVisitorSession) b = "visitorOnlyApprovedKey";
    else if (a.cttAuthInfo) {
        b = a.cttAuthInfo;
        const c = {};
        b.videoId ? c.videoId = b.videoId : b.playlistId && (c.playlistId = b.playlistId);
        Fj[a.cttAuthInfo.token] = c;
        b = a.cttAuthInfo.token
    }
    return b
}

function Rj(a = {}, b, c = !1, d) {
    new L((e, f) => {
        const g = Qj(c, d),
            k = g.j;
        g.j = !1;
        Vj(g.i);
        Vj(g.h);
        g.h = 0;
        vj && vj.isReady() ? d === void 0 && S("enable_web_tiered_gel") ? Wj(e, f, a, b, c, 300, k) : Wj(e, f, a, b, c, d, k) : (Tj(c, d), e())
    })
}

function Wj(a, b, c = {}, d, e = !1, f = 200, g = !1) {
    var k = vj,
        h = new Map;
    const l = new Map,
        n = {
            isJspb: e,
            cttAuthInfo: d,
            tier: f
        },
        q = {
            isJspb: e,
            cttAuthInfo: d
        };
    if (d !== void 0) e ? (b = S("enable_web_tiered_gel") ? Ij().smartExtractMatchingEntries({
        keys: [n, q],
        sizeLimit: 1E3
    }) : Ij().extractMatchingEntries(q), h.set(d, b), Xj(h, k, a, c, g)) : (h = S("enable_web_tiered_gel") ? Ij().smartExtractMatchingEntries({
        keys: [n, q],
        sizeLimit: 1E3
    }) : Ij().extractMatchingEntries(q), l.set(d, h), Uj(l, k, a, b, c, !1, g));
    else if (e) {
        for (const p of Object.keys(Hj)) b = S("enable_web_tiered_gel") ?
            Ij().smartExtractMatchingEntries({
                keys: [n, q],
                sizeLimit: 1E3
            }) : Ij().extractMatchingEntries({
                isJspb: !0,
                cttAuthInfo: p
            }), b.length > 0 && h.set(p, b), (S("web_fp_via_jspb_and_json") && c.writeThenSend || !S("web_fp_via_jspb_and_json")) && delete Hj[p];
        Xj(h, k, a, c, g)
    } else {
        for (const p of Object.keys(Hj)) d = S("enable_web_tiered_gel") ? Ij().smartExtractMatchingEntries({
            keys: [{
                isJspb: !1,
                cttAuthInfo: p,
                tier: f
            }, {
                isJspb: !1,
                cttAuthInfo: p
            }],
            sizeLimit: 1E3
        }) : Ij().extractMatchingEntries({
            isJspb: !1,
            cttAuthInfo: p
        }), d.length > 0 && l.set(p,
            d), (S("web_fp_via_jspb_and_json") && c.writeThenSend || !S("web_fp_via_jspb_and_json")) && delete Hj[p];
        Uj(l, k, a, b, c, !1, g)
    }
}

function Tj(a = !1, b = 200) {
    const c = () => {
            Rj({
                writeThenSend: !0
            }, void 0, a, b)
        },
        d = Qj(a, b);
    var e = d === Aj || d === zj ? 5E3 : sj;
    S("web_gel_timeout_cap") && !d.h && (e = Sj(() => {
        c()
    }, e), d.h = e);
    Vj(d.i);
    e = Q("LOGGING_BATCH_TIMEOUT", T("web_gel_debounce_ms", 1E4));
    S("shorten_initial_gel_batch_timeout") && Cj && (e = rj);
    e = Sj(() => {
        T("gel_min_batch_size") > 0 ? Ij().getSequenceCount({
            cttAuthInfo: void 0,
            isJspb: a,
            tier: b
        }) >= uj && c() : c()
    }, e);
    d.i = e
}

function Uj(a, b, c, d, e = {}, f, g) {
    const k = Math.round(W());
    let h = a.size;
    const l = Yj(g);
    for (const [n, q] of a) {
        a = n;
        g = q;
        const p = Wd({
            context: di(b.config_ || ci())
        });
        if (!ia(g) && !S("throw_err_when_logevent_malformed_killswitch")) {
            d();
            break
        }
        p.events = g;
        (g = Fj[a]) && Zj(p, a, g);
        delete Fj[a];
        const m = a === "visitorOnlyApprovedKey";
        ak(p, k, m);
        bk(e);
        const v = C => {
            S("start_client_gcf") && Cg.h(() => r(function*() {
                yield ck(C)
            }));
            h--;
            h || c()
        };
        let z = 0;
        const B = () => {
            z++;
            if (e.bypassNetworkless && z === 1) try {
                Di(b, l, p, dk({
                    writeThenSend: !0
                }, m, v, B, f)), Cj = !1
            } catch (C) {
                Kf(C), d()
            }
            h--;
            h || c()
        };
        try {
            Di(b, l, p, dk(e, m, v, B, f)), Cj = !1
        } catch (C) {
            Kf(C), d()
        }
    }
}

function Xj(a, b, c, d = {}, e) {
    const f = Math.round(W()),
        g = {
            value: a.size
        };
    var k = new Map([...a]);
    for (const [B] of k) {
        var h = B,
            l = a.get(h);
        k = new mf;
        var n = b.config_ || ci(),
            q = new gf,
            p = new Ze;
        I(p, 1, n.ja);
        I(p, 2, n.ia);
        fd(p, 16, n.Ba);
        I(p, 17, n.innertubeContextClientVersion);
        if (n.Y) {
            var m = n.Y,
                v = new Xe;
            m.coldConfigData && I(v, 1, m.coldConfigData);
            m.appInstallData && I(v, 6, m.appInstallData);
            m.coldHashData && I(v, 3, m.coldHashData);
            m.hotHashData && I(v, 5, m.hotHashData);
            H(p, Xe, 62, v)
        }
        if ((m = t.devicePixelRatio) && m != 1) {
            if (m != null && typeof m !==
                "number") throw Error(`Value of float/double field must be a number, found ${typeof m}: ${m}`);
            Qc(p, 65, m)
        }
        m = Yf();
        m !== "" && I(p, 54, m);
        m = Zf();
        if (m.length > 0) {
            v = new cf;
            for (let C = 0; C < m.length; C++) {
                const J = new $e;
                I(J, 1, m[C].key);
                Sc(J, 2, af, nc(m[C].value));
                $c(v, 15, $e, J)
            }
            H(q, cf, 5, v)
        }
        ei(q);
        fi(n, p);
        S("start_client_gcf") && gi(p);
        Q("DELEGATED_SESSION_ID") && !S("pageid_as_header_web") && (n = new ff, I(n, 3, Q("DELEGATED_SESSION_ID")));
        !S("fill_delegate_context_in_gel_killswitch") && (m = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) &&
            (v = Wc(q, ff, 3) || new ff, n = q, m = I(v, 18, m), H(n, ff, 3, m));
        n = p;
        m = Q("DEVICE", "");
        for (const [C, J] of Object.entries(Rf(m))) m = C, v = J, m === "cbrand" ? I(n, 12, v) : m === "cmodel" ? I(n, 13, v) : m === "cbr" ? I(n, 87, v) : m === "cbrver" ? I(n, 88, v) : m === "cos" ? I(n, 18, v) : m === "cosver" ? I(n, 19, v) : m === "cplatform" && fd(n, 42, ug(v));
        q.j(p);
        H(k, gf, 1, q);
        if (p = Gj[h]) a: {
            if (cd(p, 1)) q = 1;
            else if (p.getPlaylistId()) q = 2;
            else break a;H(k, lf, 4, p);p = Wc(k, gf, 1) || new gf;n = Wc(p, ff, 3) || new ff;m = new ef;I(m, 2, h);fd(m, 1, q);$c(n, 12, ef, m);H(p, ff, 3, n)
        }
        delete Gj[h];
        h = h ===
            "visitorOnlyApprovedKey";
        ek() || Qc(k, 2, f == null ? f : mc(f));
        !h && (q = Q("EVENT_ID")) && (p = fk(), n = new kf, I(n, 1, q), Qc(n, 2, p == null ? p : mc(p)), H(k, kf, 5, n));
        bk(d);
        if (S("jspb_serialize_with_worker")) {
            xi || ((q = Q("WORKER_SERIALIZATION_URL")) ? ((q = q.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue) ? (qa === void 0 && (qa = ra()), p = qa, q = new sa(p ? p.createScriptURL(q) : q)) : q = null, xi = q) : xi = null);
            p = xi || void 0;
            if (!wi && p !== void 0) {
                q = Worker;
                if (p instanceof sa) p = p.h;
                else throw Error("");
                wi = new q(p, void 0)
            }
            if ((q = wi) && d.writeThenSend) {
                Ej.set(Dj, {
                    client: b,
                    resolve: c,
                    networklessOptions: d,
                    isIsolated: !1,
                    useVSSEndpoint: e,
                    dangerousLogToVisitorSession: h,
                    requestsOutstanding: g
                });
                a = q;
                b = a.postMessage;
                c = wd(k);
                b.call(a, {
                    op: "gelBatchToSerialize",
                    batchRequest: c,
                    clientEvents: l,
                    key: Dj
                });
                Dj++;
                break
            }
        }
        if (l) {
            q = [];
            for (p = 0; p < l.length; p++) try {
                q.push(new jf(l[p]))
            } catch (C) {
                Kf(new tf("Transport failed to deserialize " + String(l[p])))
            }
            l = q
        } else l = [];
        for (const C of l) $c(k, 3, jf, C);
        l = {
            startTime: W(),
            ticks: {},
            infos: {}
        };
        try {
            vd = !0;
            var z = JSON.stringify(wd(k), Dc)
        } finally {
            vd = !1
        }
        k = z;
        l.ticks.geljspc = W();
        S("log_jspb_serialize_latency") && Math.random() < .001 && pi("meta_logging_csi_event", {
            timerName: "gel_jspb_serialize",
            Pb: l
        });
        gk(k, b, c, d, e, h, g)
    }
}

function gk(a, b, c, d = {}, e, f, g = {
    value: 0
}) {
    e = Yj(e);
    d = dk(d, f, k => {
        S("start_client_gcf") && Cg.h(() => r(function*() {
            yield ck(k)
        }));
        g.value--;
        g.value || c()
    }, () => {
        g.value--;
        g.value || c()
    }, !1);
    d.headers["Content-Type"] = "application/json+protobuf";
    d.postBodyFormat = "JSPB";
    d.postBody = a;
    Di(b, e, "", d);
    Cj = !1
}

function bk(a) {
    S("always_send_and_write") && (a.writeThenSend = !1)
}

function dk(a, b, c, d, e) {
    a = {
        retry: !0,
        onSuccess: c,
        onError: d,
        networklessOptions: a,
        dangerousLogToVisitorSession: b,
        rb: !!e,
        headers: {},
        postBodyFormat: "",
        postBody: "",
        compress: S("compress_gel") || S("compress_gel_lr")
    };
    ek() && (a.headers["X-Goog-Request-Time"] = JSON.stringify(Math.round(W())));
    return a
}

function ak(a, b, c) {
    ek() || (a.requestTimeMs = String(b));
    S("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = Q("EVENT_ID")) && (c = fk(), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function fk() {
    let a = Q("BATCH_CLIENT_COUNTER") || 0;
    a || (a = Math.floor(Math.random() * tj / 2));
    a++;
    a > tj && (a = 1);
    P("BATCH_CLIENT_COUNTER", a);
    return a
}

function Zj(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function Kj() {
    var a;
    (a = u("yt.logging.transport.enableScrapingForTest")) || (a = Xf("il_payload_scraping"), a = (a !== void 0 ? String(a) : "") !== "enable_il_payload_scraping");
    a || (lj = [], w("yt.logging.transport.enableScrapingForTest", !0), w("yt.logging.transport.scrapedPayloadsForTesting", lj), w("yt.logging.transport.payloadToScrape", "visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")), w("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
        w("yt.logging.transport.scrapeClientEvent", !0))
}

function ek() {
    return S("use_request_time_ms_header") || S("lr_use_request_time_ms_header")
}

function Sj(a, b) {
    return S("transport_use_scheduler") === !1 ? Uf(a, b) : S("logging_avoid_blocking_during_navigation") || S("lr_logging_avoid_blocking_during_navigation") ? wg(() => {
        ij().currentState === "none" ? a() : ij().install({
            none: {
                callback: a
            }
        })
    }, b) : wg(a, b)
}

function Vj(a) {
    S("transport_use_scheduler") ? Cg.P(a) : window.clearTimeout(a)
}

function ck(a) {
    return r(function*() {
        var b, c = a == null ? void 0 : (b = a.responseContext) == null ? void 0 : b.globalConfigGroup;
        b = qj(c, Ve);
        const d = c == null ? void 0 : c.hotHashData,
            e = qj(c, Ue);
        c = c == null ? void 0 : c.coldHashData;
        const f = Qi().resolve(new Ii);
        f && (d && (b ? yield Zh(f, d, b): yield Zh(f, d)), c && (e ? yield $h(f, c, e): yield $h(f, c)))
    })
}

function Qj(a, b = 200) {
    return a ? b === 300 ? Aj : yj : b === 300 ? zj : xj
}

function Mj(a) {
    a = Object.keys(a);
    for (const b of a)
        if (yi[b]) return b
}

function Nj(a) {
    switch (a) {
        case "DELAYED_EVENT_TIER_UNSPECIFIED":
            return 0;
        case "DELAYED_EVENT_TIER_DEFAULT":
            return 100;
        case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":
            return 200;
        case "DELAYED_EVENT_TIER_FAST":
            return 300;
        case "DELAYED_EVENT_TIER_IMMEDIATE":
            return 400;
        default:
            return 200
    }
}

function Yj(a = !1) {
    return a && S("vss_through_gel_video_stats") ? "video_stats" : "log_event"
};
const hk = t.ytLoggingGelSequenceIdObj_ || {};

function ik(a, b, c, d = {}) {
    const e = {},
        f = Math.round(d.timestamp || W());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = u("_lact", window);
    a = a == null ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    d.sequenceGroup && !S("web_gel_sequence_info_killswitch") && (a = e.context, b = d.sequenceGroup, hk[b] = b in hk ? hk[b] + 1 : 0, a.sequence = {
        index: hk[b],
        groupKey: b
    }, d.endOfSequence && delete hk[d.sequenceGroup]);
    (d.sendIsolatedPayload ? Oj : Jj)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        dangerousLogToVisitorSession: d.dangerousLogToVisitorSession
    }, c)
}

function jk(a = !1) {
    Rj(void 0, void 0, a)
};
let kk = [];

function Y(a, b, c = {}) {
    let d = Ei;
    Q("ytLoggingEventsDefaultDisabled", !1) && Ei === Ei && (d = null);
    ik(a, b, d, c)
};
var lk = new Set,
    mk = 0,
    nk = 0,
    ok = 0,
    pk = [];
const qk = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function rk(a) {
    sk(a)
}

function tk(a) {
    sk(a, "WARNING")
}

function sk(a, b = "ERROR") {
    var c = {};
    c.name = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = Q("INNERTUBE_CONTEXT_CLIENT_VERSION");
    uk(a, c, b)
}

function uk(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (S("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(mk >= 5)) {
            var e = za(a);
            d = e.message || "Unknown Error";
            const q =
                e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${q}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let p = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var k = 0; k < a.args.length && !(p = ng(a.args[k], `params.${k}`, b, p), p >= 500); k++);
            else if (a.hasOwnProperty("params") && a.params) {
                const m = a.params;
                if (typeof a.params === "object")
                    for (k in m) {
                        if (!m[k]) continue;
                        const v = `params.${k}`,
                            z = pg(m[k]);
                        b[v] = z;
                        p += v.length +
                            z.length;
                        if (p > 500) break
                    } else b.params = pg(m)
            }
            if (pk.length)
                for (k = 0; k < pk.length && !(p = ng(pk[k], `params.context.${k}`, b, p), p >= 500); k++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: q,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if (a.level === "IGNORED") var h = 0;
            else a: {
                a = gg();
                for (h of a.F)
                    if (b.message && b.message.match(h.Fa)) {
                        h = h.weight;
                        break a
                    }
                for (var l of a.D)
                    if (l.callback(b)) {
                        h =
                            l.weight;
                        break a
                    }
                h = 1
            }
            b.sampleWeight = h;
            h = b;
            for (var n of dg)
                if (n.U[h.name]) {
                    l = n.U[h.name];
                    for (const m of l)
                        if (l = h.message.match(m.u)) {
                            h.params["params.error.original"] = l[0];
                            a = m.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], h.params[`params.error.${a[d]}`] = l[d + 1];
                            h.message = n.aa(b);
                            break
                        }
                }
            h.params || (h.params = {});
            n = gg();
            h.params["params.errorServiceSignature"] = `msg=${n.F.length}&cb=${n.D.length}`;
            h.params["params.serviceWorker"] = "true";
            t.document && t.document.querySelectorAll && (h.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            (new Zd($d, "sample")).constructor !== Zd && (h.params["params.fconst"] = "true");
            window.yterr && typeof window.yterr === "function" && window.yterr(h);
            h.sampleWeight === 0 || lk.has(h.message) || vk(h, c)
        }
    }
}

function vk(a, b = "ERROR") {
    if (b === "ERROR") {
        kg.A("handleError", a);
        if (S("record_app_crashed_web") && ok === 0 && a.sampleWeight === 1) {
            ok++;
            var c = {
                appCrashType: "APP_CRASH_TYPE_BREAKPAD"
            };
            S("report_client_error_with_app_crash_ks") || (c.systemHealth = {
                crashData: {
                    clientError: {
                        logMessage: {
                            message: a.message
                        }
                    }
                }
            });
            Y("appCrashed", c)
        }
        nk++
    } else b === "WARNING" && kg.A("handleWarning", a);
    c = {};
    b: {
        for (e of qk) {
            var d = Ra();
            if (d && d.toLowerCase().indexOf(e.toLowerCase()) >= 0) {
                var e = !0;
                break b
            }
        }
        e = !1
    }
    if (e) c = void 0;
    else {
        d = {
            stackTrace: a.stack
        };
        a.fileName && (d.filename = a.fileName);
        e = a.lineNumber && a.lineNumber.split ? a.lineNumber.split(":") : [];
        e.length !== 0 && (e.length !== 1 || isNaN(Number(e[0])) ? e.length !== 2 || isNaN(Number(e[0])) || isNaN(Number(e[1])) || (d.lineNumber = Number(e[0]), d.columnNumber = Number(e[1])) : d.lineNumber = Number(e[0]));
        e = {
            level: "ERROR_LEVEL_UNKNOWN",
            message: a.message,
            errorClassName: a.name,
            sampleWeight: a.sampleWeight
        };
        b === "ERROR" ? e.level = "ERROR_LEVEL_ERROR" : b === "WARNING" && (e.level = "ERROR_LEVEL_WARNNING");
        d = {
            isObfuscated: !0,
            browserStackInfo: d
        };
        c.pageUrl = window.location.href;
        c.kvPairs = [];
        Q("FEXP_EXPERIMENTS") && (c.experimentIds = Q("FEXP_EXPERIMENTS"));
        var f = Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
        const h = Hf.EXPERIMENT_FLAGS;
        if ((!h || !h.web_disable_gel_stp_ecatcher_killswitch) && f)
            for (var g of Object.keys(f)) c.kvPairs.push({
                key: g,
                value: String(f[g])
            });
        if (g = a.params)
            for (var k of Object.keys(g)) c.kvPairs.push({
                key: `client.${k}`,
                value: String(g[k])
            });
        k = Q("SERVER_NAME");
        g = Q("SERVER_VERSION");
        k && g && (c.kvPairs.push({
                key: "server.name",
                value: k
            }),
            c.kvPairs.push({
                key: "server.version",
                value: g
            }));
        c = {
            errorMetadata: c,
            stackTrace: d,
            logMessage: e
        }
    }
    if (c && (Y("clientError", c), b === "ERROR" || S("errors_flush_gel_always_killswitch"))) a: {
        if (S("web_fp_via_jspb")) {
            b = kk;
            kk = [];
            if (b)
                for (const h of b) ik(h.M, h.payload, Ei, h.options);
            jk(!0);
            if (!S("web_fp_via_jspb_and_json")) break a
        }
        jk()
    }
    try {
        lk.add(a.message)
    } catch (h) {}
    mk++
}

function wk(a, ...b) {
    a.args || (a.args = []);
    a.args.push(...b)
};

function xk(a) {
    return r(function*() {
        var b = yield t.fetch(a.i);
        if (b.status !== 200) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === "yt.sw.adr") {
                    b = new Df(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function yk(a = !1) {
    const b = zk.h;
    return r(function*() {
        if (a || !b.h) b.h = xk(b).then(b.j).catch(c => {
            delete b.h;
            sk(c)
        });
        return b.h
    })
}
var zk = class {
    constructor() {
        this.i = Ak("/sw.js_data")
    }
    j(a) {
        const b = Wc(a, Cf, 2);
        if (b) {
            var c = bd(b, 5);
            c && (t.__SAPISID = c);
            ad(b, 10) != null ? P("EOM_VISITOR_DATA", bd(b, 10)) : ad(b, 7) != null && P("VISITOR_DATA", bd(b, 7));
            if (lc(Nc(b, 4)) != null) {
                c = String;
                var d = lc(Nc(b, 4));
                P("SESSION_INDEX", c(d != null ? d : 0))
            }
            ad(b, 8) != null && P("DELEGATED_SESSION_ID", bd(b, 8));
            ad(b, 12) != null && P("USER_SESSION_ID", bd(b, 12));
            ad(b, 11) != null && P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", bd(b, 11))
        }
        return a
    }
};

function Bk(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, typeof b.expirationSeconds === "string" && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, Number(b.expirationSeconds) * 1E3))
}
var Ck = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        if (!b) throw Error("request needs to be passed into ConsistencyService");
        let c, d;
        b = ((c = b.G.context) == null ? void 0 : (d = c.request) == null ? void 0 : d.consistencyTokenJars) || [];
        let e;
        if (a = (e = a.responseContext) == null ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            Bk(this, a)
        }
    }
};
let Dk = Date.now().toString();

function Ek() {
    if (window.crypto && window.crypto.getRandomValues) try {
        var a = Array(16),
            b = new Uint8Array(16);
        window.crypto.getRandomValues(b);
        for (var c = 0; c < a.length; c++) a[c] = b[c];
        return a
    } catch (d) {}
    a = Array(16);
    for (b = 0; b < 16; b++) {
        c = Date.now();
        for (let d = 0; d < c % 23; d++) a[b] = Math.random();
        a[b] = Math.floor(Math.random() * 256)
    }
    if (Dk)
        for (b = 1, c = 0; c < Dk.length; c++) a[b % 16] = a[b % 16] ^ a[(b - 1) % 16] / 4 ^ Dk.charCodeAt(c), b++;
    return a
};
var Fk;
let Gk = t.ytLoggingDocDocumentNonce_;
if (!Gk) {
    const a = Ek(),
        b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    Gk = b.join("")
}
Fk = Gk;
var Hk = {
    Ra: 0,
    Oa: 1,
    Qa: 2,
    cb: 3,
    Ta: 4,
    nb: 5,
    eb: 6,
    kb: 7,
    ib: 8,
    jb: 9,
    0: "DEFAULT",
    1: "CHAT",
    2: "CONVERSATIONS",
    3: "MINIPLAYER",
    4: "DIALOG",
    5: "VOZ",
    6: "MUSIC_WATCH_TABS",
    7: "SHARE",
    8: "PUSH_NOTIFICATIONS",
    9: "RICH_GRID_WATCH"
};
let Ik = 1;

function Jk(a) {
    return new Kk({
        trackingParams: a
    })
}

function Lk(a) {
    const b = Ik++;
    return new Kk({
        veType: a,
        veCounter: b,
        elementIndex: void 0,
        dataElement: void 0,
        youtubeData: void 0,
        jspbYoutubeData: void 0,
        loggingDirectives: void 0
    })
}
var Kk = class {
    constructor(a) {
        this.h = a
    }
    getAsJson() {
        const a = {};
        this.h.trackingParams !== void 0 ? a.trackingParams = this.h.trackingParams : (a.veType = this.h.veType, this.h.veCounter !== void 0 && (a.veCounter = this.h.veCounter), this.h.elementIndex !== void 0 && (a.elementIndex = this.h.elementIndex));
        this.h.dataElement !== void 0 && (a.dataElement = this.h.dataElement.getAsJson());
        this.h.youtubeData !== void 0 && (a.youtubeData = this.h.youtubeData);
        this.h.isCounterfactual && (a.isCounterfactual = !0);
        return a
    }
    getAsJspb() {
        const a = new bf;
        this.h.trackingParams !== void 0 ? a.setTrackingParams(this.h.trackingParams) : (this.h.veType !== void 0 && ed(a, 2, this.h.veType), this.h.veCounter !== void 0 && ed(a, 6, this.h.veCounter), this.h.elementIndex !== void 0 && ed(a, 3, this.h.elementIndex), this.h.isCounterfactual && Qc(a, 5, !0));
        if (this.h.dataElement !== void 0) {
            var b = this.h.dataElement.getAsJspb();
            H(a, bf, 7, b)
        }
        this.h.youtubeData !== void 0 && H(a, We, 8, this.h.jspbYoutubeData);
        return a
    }
    toString() {
        return JSON.stringify(this.getAsJson())
    }
    isClientVe() {
        return !this.h.trackingParams &&
            !!this.h.veType
    }
    getLoggingDirectives() {
        return this.h.loggingDirectives
    }
};

function Mk(a = 0) {
    return Q("client-screen-nonce-store", {})[a]
}

function Nk(a, b = 0) {
    let c = Q("client-screen-nonce-store");
    c || (c = {}, P("client-screen-nonce-store", c));
    c[b] = a
}

function Ok(a = 0) {
    return a === 0 ? "ROOT_VE_TYPE" : `${"ROOT_VE_TYPE"}.${a}`
}

function Pk(a = 0) {
    return Q(Ok(a))
}

function Qk(a = 0) {
    return (a = Pk(a)) ? new Kk({
        veType: a,
        youtubeData: void 0,
        jspbYoutubeData: void 0
    }) : null
}

function Rk() {
    let a = Q("csn-to-ctt-auth-info");
    a || (a = {}, P("csn-to-ctt-auth-info", a));
    return a
}

function Sk() {
    return Object.values(Q("client-screen-nonce-store", {})).filter(a => a !== void 0)
}

function Z(a = 0) {
    a = Mk(a);
    if (!a && !Q("USE_CSN_FALLBACK", !0)) return null;
    a || (a = "UNDEFINED_CSN");
    return a ? a : null
}

function Tk(a) {
    for (const b of Object.values(Hk))
        if (Z(b) === a) return !0;
    return !1
}

function Uk(a, b, c) {
    const d = Rk();
    (c = Z(c)) && delete d[c];
    b && (d[a] = b)
}

function Vk(a) {
    return Rk()[a]
}

function Wk(a, b, c = 0, d) {
    if (a !== Mk(c) || b !== Q(Ok(c)))
        if (Uk(a, d, c), Nk(a, c), P(Ok(c), b), b = () => {
                setTimeout(() => {
                    a && Y("foregroundHeartbeatScreenAssociated", {
                        clientDocumentNonce: Fk,
                        clientScreenNonce: a
                    })
                }, 0)
            }, "requestAnimationFrame" in window) try {
            window.requestAnimationFrame(b)
        } catch (e) {
            b()
        } else b()
};

function Xk() {
    var a = Q("INNERTUBE_CONTEXT");
    if (!a) return sk(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = Wd(a);
    S("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Yf();
    c ? b.experimentsToken = c : delete b.experimentsToken;
    Ck.h || (Ck.h = new Ck);
    b = Ck.h.h;
    c = [];
    let d = 0;
    for (var e in b) c[d++] = b[e];
    a.request = Object.assign({}, a.request, {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    if (e = Q("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT")) a.user.serializedDelegationContext = e;
    return a
};

function Yk(a) {
    var b = a;
    if (a = Q("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Da);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};

function Zk(a) {
    const b = {
        "Content-Type": "application/json"
    };
    Q("EOM_VISITOR_DATA") ? b["X-Goog-EOM-Visitor-Id"] = Q("EOM_VISITOR_DATA") : Q("VISITOR_DATA") && (b["X-Goog-Visitor-Id"] = Q("VISITOR_DATA"));
    b["X-Youtube-Bootstrap-Logged-In"] = Q("LOGGED_IN", !1);
    Q("DEBUG_SETTINGS_METADATA") && (b["X-Debug-Settings-Metadata"] = Q("DEBUG_SETTINGS_METADATA"));
    a !== "cors" && ((a = Q("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = Q("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a =
        Q("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), (a = Q("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
};
var $k = class {
    constructor() {
        this.h = {}
    }
    get(a) {
        if (Object.prototype.hasOwnProperty.call(this.h, a)) return this.h[a]
    }
    set(a, b) {
        this.h[a] = b
    }
    remove(a) {
        delete this.h[a]
    }
};
new class {
    constructor() {
        this.mappings = new $k
    }
    get(a) {
        a: {
            var b = this.mappings.get(a.toString());
            switch (b.type) {
                case "mapping":
                    a = b.value;
                    break a;
                case "factory":
                    b = b.value();
                    this.mappings.set(a.toString(), {
                        type: "mapping",
                        value: b
                    });
                    a = b;
                    break a;
                default:
                    a = ta(b, void 0)
            }
        }
        return a
    }
};
var al = class {},
    bl = class extends al {};
const cl = {
    GET_DATASYNC_IDS: function(a) {
        return () => new a
    }(class extends bl {})
};
class ki extends ii {
    constructor(a) {
        super(arguments);
        this.csn = a
    }
}
const si = new ji,
    dl = [];
let fl = el,
    gl = 0;
const hl = new Map,
    il = new Map,
    jl = new Map;

function kl(a, b, c, d, e, f, g, k) {
    const h = fl(),
        l = new Kk({
            veType: b,
            youtubeData: f,
            jspbYoutubeData: void 0
        });
    f = ll({}, h);
    e && (f.cttAuthInfo = e);
    e = {
        csn: h,
        pageVe: l.getAsJson()
    };
    S("expectation_logging") && k && k.screenCreatedLoggingExpectations && (e.screenCreatedLoggingExpectations = k.screenCreatedLoggingExpectations);
    c && c.visualElement ? (e.implicitGesture = {
        parentCsn: c.clientScreenNonce,
        gesturedVe: c.visualElement.getAsJson()
    }, g && (e.implicitGesture.gestureType = g)) : c && tk(new tf("newScreen() parent element does not have a VE - rootVe",
        b));
    d && (e.cloneCsn = d);
    a ? ik("screenCreated", e, a, f) : Y("screenCreated", e, f);
    pi(si, new ki(h));
    hl.clear();
    il.clear();
    jl.clear();
    return h
}

function ml(a, b, c, d, e = !1) {
    nl(a, b, c, [d], e)
}

function nl(a, b, c, d, e = !1) {
    const f = ll({
        cttAuthInfo: Vk(b) || void 0
    }, b);
    for (const k of d) {
        var g = k.getAsJson();
        (Vd(g) || !g.trackingParams && !g.veType) && tk(Error("Child VE logged with no data"));
        if (S("no_client_ve_attach_unless_shown")) {
            const h = ol(k, b);
            if (g.veType && !il.has(h) && !jl.has(h) && !e) {
                if (!S("il_attach_cache_limit") || hl.size < 1E3) {
                    hl.set(h, [a, b, c, k]);
                    return
                }
                S("il_attach_cache_limit") && hl.size > 1E3 && tk(new tf("IL Attach cache exceeded limit"))
            }
            g = ol(c, b);
            hl.has(g) ? pl(c, b) : jl.set(g, !0)
        }
    }
    d = d.filter(k => {
        k.csn !==
            b ? (k.csn = b, k = !0) : k = !1;
        return k
    });
    c = {
        csn: b,
        parentVe: c.getAsJson(),
        childVes: va(d, k => k.getAsJson())
    };
    b === "UNDEFINED_CSN" ? ql("visualElementAttached", f, c) : a ? ik("visualElementAttached", c, a, f) : Y("visualElementAttached", c, f)
}

function rl(a, b, c, d, e) {
    sl(a, b, c, e)
}

function sl(a, b, c, d) {
    tl(c, b);
    const e = ll({
        cttAuthInfo: Vk(b) || void 0
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: 1
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? ql("visualElementShown", e, c) : a ? ik("visualElementShown", c, a, e) : Y("visualElementShown", c, e)
}

function ul(a, b, c, d = !1) {
    const e = d ? 16 : 8;
    d = ll({
        cttAuthInfo: Vk(b) || void 0,
        endOfSequence: d
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        eventType: e
    };
    b === "UNDEFINED_CSN" ? ql("visualElementHidden", d, c) : a ? ik("visualElementHidden", c, a, d) : Y("visualElementHidden", c, d)
}

function vl(a, b, c, d) {
    var e = void 0;
    tl(c, b);
    e = e || "INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";
    const f = ll({
        cttAuthInfo: Vk(b) || void 0
    }, b);
    c = {
        csn: b,
        ve: c.getAsJson(),
        gestureType: e
    };
    d && (c.clientData = d);
    b === "UNDEFINED_CSN" ? ql("visualElementGestured", f, c) : a ? ik("visualElementGestured", c, a, f) : Y("visualElementGestured", c, f)
}

function el() {
    let a;
    a = Ek();
    const b = [];
    for (let c = 0; c < a.length; c++) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c] & 63));
    return b.join("")
}

function ql(a, b, c) {
    dl.push({
        M: a,
        payload: c,
        xb: void 0,
        options: b
    });
    gl || (gl = ti())
}

function ui(a) {
    if (dl) {
        for (const b of dl) b.payload && (b.payload.csn = a.csn, Y(b.M, b.payload, b.options));
        dl.length = 0
    }
    gl = 0
}

function ol(a, b) {
    return `${a.getAsJson().veType}${a.getAsJson().veCounter}${b}`
}

function tl(a, b) {
    if (S("no_client_ve_attach_unless_shown")) {
        var c = ol(a, b);
        il.set(c, !0);
        pl(a, b)
    }
}

function pl(a, b) {
    a = ol(a, b);
    hl.has(a) && (b = hl.get(a) || [], ml(b[0], b[1], b[2], b[3], !0), hl.delete(a))
}

function ll(a, b) {
    S("log_sequence_info_on_gel_web") && (a.sequenceGroup = b);
    return a
};
w("ytLoggingLatencyUsageStats_", t.ytLoggingLatencyUsageStats_ || {});
const wl = window;
class xl {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var yl = wl.performance || wl.mozPerformance || wl.msPerformance || wl.webkitPerformance || new xl;
la(yl.clearResourceTimings || yl.webkitClearResourceTimings || yl.mozClearResourceTimings || yl.msClearResourceTimings || yl.oClearResourceTimings || Ud, yl);
const zl = ["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse", "type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];

function Al(a) {
    var b = {
            tb: {}
        },
        c = qg();
    if (Li.h !== void 0) {
        const d = Li.h;
        a = [b !== d.m, a !== d.l, c !== d.j, !1, !1, !1, void 0 !== d.i];
        if (a.some(e => e)) throw new tf("InnerTubeTransportService is already initialized", a);
    } else Li.h = new Li(b, a, c)
}

function Bl(a, b) {
    return r(function*() {
        var c, d = a == null ? void 0 : (c = a.da) == null ? void 0 : c.sessionIndex;
        let e;
        c = ((e = qj(a == null ? void 0 : a.command, hf)) == null ? void 0 : e.signal) === "GET_ACCOUNT_MENU" ? !0 : !1;
        d = yield ze(sg(0, {
            sessionIndex: d,
            ha: c
        }));
        return Promise.resolve(Object.assign({}, Zk(b), d))
    })
}

function Cl(a, b, c, d = () => {}) {
    return r(function*() {
        var e;
        if (b == null ? 0 : (e = b.G) == null ? 0 : e.context) {
            e = b.G.context;
            for (var f of []) yield f.Db(e)
        }
        var g;
        if ((g = a.i) == null ? 0 : g.Lb(b.input, b.G)) return yield a.i.zb(b.input, b.G);
        var k;
        if ((g = (k = b.config) == null ? void 0 : k.Gb) && a.h.has(g)) var h = a.h.get(g);
        else {
            k = JSON.stringify(b.G);
            let p;
            f = (p = (h = b.N) == null ? void 0 : h.headers) != null ? p : {};
            b.N = Object.assign({}, b.N, {
                headers: Object.assign({}, f, c)
            });
            h = Object.assign({}, b.N);
            b.N.method === "POST" && (h = Object.assign({}, h, {
                body: k
            }));
            h = a.l.fetch(b.input, h, b.config);
            g && a.h.set(g, h)
        }
        h = yield h;
        var l;
        let n;
        if (h && "error" in h && ((l = h) == null ? 0 : (n = l.error) == null ? 0 : n.details)) {
            l = h.error.details;
            for (const p of l)(l = p["@type"]) && zl.indexOf(l) > -1 && (delete p["@type"], h = p)
        }
        g && a.h.has(g) && a.h.delete(g);
        let q;
        !h && ((q = a.i) == null ? 0 : q.sb(b.input, b.G)) && (h = yield a.i.yb(b.input, b.G));
        d();
        return h || void 0
    })
}

function Dl(a, b, c) {
    var d = {
        da: {
            identity: tg
        }
    };
    let e = () => {};
    b.context || (b.context = Xk());
    return new L(f => r(function*() {
        var g = Yk(c);
        g = Tf(g) ? "same-origin" : "cors";
        if (a.j.Ka) {
            var k, h = d == null ? void 0 : (k = d.da) == null ? void 0 : k.sessionIndex,
                l;
            k = ((l = qj(d == null ? void 0 : d.command, hf)) == null ? void 0 : l.signal) === "GET_ACCOUNT_MENU" ? !0 : !1;
            l = sg(0, {
                sessionIndex: h,
                ha: k
            });
            g = Object.assign({}, Zk(g), l)
        } else g = yield Bl(d, g);
        l = Yk(c);
        k = {};
        S("web_api_key_killswitch") && (Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (g == null ? 0 : g.Authorization) || (k.key = Q("INNERTUBE_API_KEY")));
        S("json_condensed_response") && (k.prettyPrint = "false");
        l = Sf(l, k || {}, !1);
        k = {
            method: "POST",
            mode: Tf(l) ? "same-origin" : "cors",
            credentials: Tf(l) ? "same-origin" : "include"
        };
        h = {};
        const n = {};
        for (const q of Object.keys(h)) h[q] && (n[q] = h[q]);
        Object.keys(n).length > 0 && (k.headers = n);
        f(Cl(a, {
            input: l,
            N: k,
            G: b,
            config: d
        }, g, e))
    }))
}
var Li = class {
    constructor(a, b, c) {
        this.m = a;
        this.l = b;
        this.j = c;
        this.i = void 0;
        this.h = new Map;
        a.ca || (a.ca = {});
        a.ca = Object.assign({}, cl, a.ca)
    }
};
var Ki = new Hi;
let El;

function Fl() {
    if (!El) {
        const a = Qi();
        Al({
            fetch: (b, c) => ze(fetch(new Request(b, c)))
        });
        Ji(a);
        El = a.resolve(Ki)
    }
    return El
};

function Gl(a) {
    return r(function*() {
        yield Hl();
        tk(a)
    })
}

function Il(a) {
    return r(function*() {
        yield Hl();
        sk(a)
    })
}

function Jl(a) {
    r(function*() {
        var b = yield Ih();
        b ? yield Ci(a, b): (yield yk(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            M: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            M: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && Y(b.M, b.payload))
    })
}

function Hl() {
    return r(function*() {
        try {
            yield yk()
        } catch (a) {}
    })
};
var Kl = Symbol("trackingData"),
    Ll = new WeakMap;

function Ml() {
    Nl.h || (Nl.h = new Nl);
    return Nl.h
}

function Ol(a, b, c) {
    const d = Z(c);
    return a.csn === null || d === a.csn || c ? d : (a = new tf("VisibilityLogger called before newScreen", {
        caller: b.tagName,
        previous_csn: a.csn,
        current_csn: d
    }), tk(a), null)
}

function Pl(a) {
    let b;
    return !((b = Ql(a)) == null || !b.loggingDirectives)
}

function Rl(a) {
    a = Ql(a);
    return Math.floor(Number(a && a.loggingDirectives && a.loggingDirectives.visibility && a.loggingDirectives.visibility.types || "")) || 1
}

function Ql(a) {
    let b, c = a.data || ((b = a.props) == null ? void 0 : b.data);
    if (!c && a.isWebComponentWrapper && S("read_data_from_web_component_wrapper")) {
        let d;
        c = (d = Ll.get(a)) == null ? void 0 : d[Kl]
    }
    return c
}
var Nl = class {
    constructor() {
        this.m = new Set;
        this.l = new Set;
        this.h = new Map;
        this.client = void 0;
        this.csn = null
    }
    j(a) {
        this.client = a
    }
    s() {
        this.clear();
        this.csn = Z()
    }
    clear() {
        this.m.clear();
        this.l.clear();
        this.h.clear();
        this.csn = null
    }
    A(a, b, c) {
        var d = this.i(a),
            e = a.visualElement ? a.visualElement : d;
        b = this.m.has(e);
        var f = this.h.get(e);
        this.m.add(e);
        this.h.set(e, !0);
        a.impressionLog && !b && a.impressionLog();
        if (d || a.visualElement)
            if (c = Ol(this, a, c)) {
                var g = Pl(a);
                if (Rl(a) || g) e = a.visualElement ? a.visualElement : Jk(d), d = a.interactionLoggingClientData,
                    g || b ? Rl(a) & 4 ? f || (a = this.client, tl(e, c), b = ll({
                        cttAuthInfo: Vk(c) || void 0
                    }, c), f = {
                        csn: c,
                        ve: e.getAsJson(),
                        eventType: 4
                    }, d && (f.clientData = d), c === "UNDEFINED_CSN" ? ql("visualElementShown", b, f) : a ? ik("visualElementShown", f, a, b) : Y("visualElementShown", f, b)) : Rl(a) & 1 && !b && sl(this.client, c, e, d) : sl(this.client, c, e, d)
            }
    }
    v(a, b, c) {
        var d = this.i(a);
        const e = a.visualElement ? a.visualElement : d;
        b = this.l.has(e);
        const f = this.h.get(e);
        this.l.add(e);
        this.h.set(e, !1);
        if (f === !1) return !0;
        if (!d && !a.visualElement) return !1;
        c = Ol(this,
            a, c);
        if (!c || !Rl(a) && Pl(a)) return !1;
        d = a.visualElement ? a.visualElement : Jk(d);
        Rl(a) & 8 ? ul(this.client, c, d) : Rl(a) & 2 && !b && (a = this.client, b = ll({
            cttAuthInfo: Vk(c) || void 0
        }, c), d = {
            csn: c,
            ve: d.getAsJson(),
            eventType: 2
        }, c === "UNDEFINED_CSN" ? ql("visualElementHidden", b, d) : a ? ik("visualElementHidden", d, a, b) : Y("visualElementHidden", d, b));
        return !0
    }
    i(a) {
        const b = Ql(a);
        let c, d;
        if (S("il_use_view_model_logging_context") && (b == null ? 0 : (c = b.context) == null ? 0 : (d = c.loggingContext) == null ? 0 : d.loggingDirectives)) return b.context.loggingContext.loggingDirectives.trackingParams ||
            "";
        let e, f;
        if (b == null ? 0 : (e = b.rendererContext) == null ? 0 : (f = e.loggingContext) == null ? 0 : f.loggingDirectives) return b.rendererContext.loggingContext.loggingDirectives.trackingParams || "";
        if (b == null ? 0 : b.loggingDirectives) return b.loggingDirectives.trackingParams || "";
        let g;
        return ((g = a.veContainer) == null ? 0 : g.trackingParams) ? a.veContainer.trackingParams : (b == null ? void 0 : b.trackingParams) || ""
    }
};

function Sl() {
    Tl.h || (Tl.h = new Tl)
}

function Ul(a) {
    Sl();
    R(Ml().A).bind(Ml())(a, void 0, 8)
}

function Vl(a) {
    Sl();
    R(Ml().v).bind(Ml())(a, void 0, 8)
}
var Tl = class {
    j(a) {
        R(Ml().j).bind(Ml())(a)
    }
    clear() {
        R(Ml().clear).bind(Ml())()
    }
};

function Wl() {
    Xl.h || (Xl.h = new Xl);
    return Xl.h
}

function Yl(a, b, c = {}) {
    a.i.add(c.layer || 0);
    a.m = () => {
        Zl(a, b, c);
        const d = Qk(c.layer);
        if (d) {
            for (const e of a.A) $l(a, e[0], e[1] || d, c.layer);
            for (const e of a.C) am(a, e[0], e[1])
        }
    };
    Z(c.layer) || a.m();
    if (c.fa)
        for (const d of c.fa) bm(a, d, c.layer);
    else sk(Error("Delayed screen needs a data promise."))
}

function Zl(a, b, c = {}) {
    var d = void 0;
    c.layer || (c.layer = 0);
    d = c.Ga !== void 0 ? c.Ga : c.layer;
    const e = Z(d);
    d = Qk(d);
    let f;
    d && (c.parentCsn !== void 0 ? f = {
        clientScreenNonce: c.parentCsn,
        visualElement: d
    } : e && e !== "UNDEFINED_CSN" && (f = {
        clientScreenNonce: e,
        visualElement: d
    }));
    let g;
    const k = Q("EVENT_ID");
    e === "UNDEFINED_CSN" && k && (g = {
        servletData: {
            serializedServletEventId: k
        }
    });
    S("combine_ve_grafts") && e && cm(a, e);
    S("no_client_ve_attach_unless_shown") && d && e && pl(d, e);
    let h;
    try {
        h = kl(a.client, b, f, c.ea, c.cttAuthInfo, g, c.vb, c.loggingExpectations)
    } catch (q) {
        wk(q, {
            Ib: b,
            rootVe: d,
            Cb: void 0,
            ub: e,
            Bb: f,
            ea: c.ea
        });
        sk(q);
        return
    }
    Wk(h, b, c.layer, c.cttAuthInfo);
    e && e !== "UNDEFINED_CSN" && d && !Tk(e) && ul(a.client, e, d, !0);
    a.h[a.h.length - 1] && !a.h[a.h.length - 1].csn && (a.h[a.h.length - 1].csn = h || "");
    Sl();
    R(Ml().s).bind(Ml())();
    const l = Qk(c.layer);
    e && e !== "UNDEFINED_CSN" && l && (S("web_mark_root_visible") || S("music_web_mark_root_visible")) && R(rl)(void 0, h, l, void 0, void 0, void 0);
    a.i.delete(c.layer || 0);
    a.m = void 0;
    let n;
    (n = a.W.get(c.layer)) == null || n.forEach((q, p) => {
        q ? $l(a, p, q, c.layer) : l &&
            $l(a, p, l, c.layer)
    });
    dm(a)
}

function em(a) {
    var b = 28631,
        c = {
            layer: 8
        };
    R(() => {
        [28631].includes(b) || (tk(new tf("createClientScreen() called with a non-page VE", b)), b = 83769);
        c.isHistoryNavigation || a.h.push({
            rootVe: b,
            key: c.key || ""
        });
        a.A = [];
        a.C = [];
        c.fa ? Yl(a, b, c) : Zl(a, b, c)
    })()
}

function bm(a, b, c = 0) {
    R(() => {
        b.then(d => {
            a.i.has(c) && a.m && a.m();
            const e = Z(c),
                f = Qk(c);
            if (e && f) {
                var g;
                (d == null ? 0 : (g = d.response) == null ? 0 : g.trackingParams) && ml(a.client, e, f, Jk(d.response.trackingParams));
                var k;
                (d == null ? 0 : (k = d.playerResponse) == null ? 0 : k.trackingParams) && ml(a.client, e, f, Jk(d.playerResponse.trackingParams))
            }
        })
    })()
}

function $l(a, b, c, d = 0) {
    R(() => {
        if (a.i.has(d)) return a.A.push([b, c]), !0;
        const e = Z(d),
            f = c || Qk(d);
        if (e && f) {
            if (S("combine_ve_grafts")) {
                const g = a.l.get(f.toString());
                g ? g.push(b) : (a.v.set(f.toString(), f), a.l.set(f.toString(), [b]));
                a.J || (a.J = wg(() => {
                    cm(a, e)
                }, 1200))
            } else ml(a.client, e, f, b);
            return !0
        }
        return !1
    })()
}

function fm(a, b) {
    return R(() => {
        const c = Jk(b);
        $l(a, c, void 0, 8);
        return c
    })()
}

function cm(a, b) {
    if (b === void 0) {
        const c = Sk();
        for (let d = 0; d < c.length; d++) c[d] !== void 0 && cm(a, c[d])
    } else a.l.forEach((c, d) => {
        (d = a.v.get(d)) && nl(a.client, b, d, c)
    }), a.l.clear(), a.v.clear(), a.J = void 0
}

function gm(a, b, c = 0) {
    (c = Z(c)) && vl(a.client, c, b)
}

function hm(a, b, c, d = 0) {
    if (!b) return !1;
    d = Z(d);
    if (!d) return !1;
    vl(a.client, d, Jk(b), c);
    return !0
}

function im(a, b) {
    const c = b.getScreenLayer && b.getScreenLayer();
    b.visualElement ? gm(a, b.visualElement, c) : (Sl(), b = R(Ml().i).bind(Ml())(b), hm(a, b, void 0, c))
}

function am(a, b, c, d = 0) {
    const e = Z(d);
    b = b || Qk(d);
    e && b && (a = a.client, d = ll({
        cttAuthInfo: Vk(e) || void 0
    }, e), c = {
        csn: e,
        ve: b.getAsJson(),
        clientData: c
    }, e === "UNDEFINED_CSN" ? ql("visualElementStateChanged", d, c) : a ? ik("visualElementStateChanged", c, a, d) : Y("visualElementStateChanged", c, d))
}

function dm(a) {
    for (var b = 0; b < a.s.length; b++) {
        var c = a.s[b];
        try {
            c()
        } catch (d) {
            sk(d)
        }
    }
    a.s.length = 0;
    for (b = 0; b < a.H.length; b++) {
        c = a.H[b];
        try {
            c()
        } catch (d) {
            sk(d)
        }
    }
}
var Xl = class {
    constructor() {
        this.A = [];
        this.C = [];
        this.h = [];
        this.s = [];
        this.H = [];
        this.l = new Map;
        this.v = new Map;
        this.i = new Set;
        this.W = new Map
    }
    j(a) {
        this.client = a
    }
    clickCommand(a, b, c = 0) {
        return hm(this, a.clickTrackingParams, b, c)
    }
    stateChanged(a, b, c = 0) {
        this.visualElementStateChanged(Jk(a), b, c)
    }
    visualElementStateChanged(a, b, c = 0) {
        c === 0 && this.i.has(c) ? this.C.push([a, b]) : am(this, a, b, c)
    }
};
const jm = {
        granted: "GRANTED",
        denied: "DENIED",
        unknown: "UNKNOWN"
    },
    km = RegExp("^(?:[a-z]+:)?//", "i");

function lm(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    a === "notifications_register" ? (O("IDToken", b), mm()) : a === "notifications_check_registration" && nm(b)
}

function om() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function pm(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function qm(a) {
    return r(function*() {
        const b = pm(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Bf( of );
        return rm().then(e => Dl(e, c, d).then(f => {
            f.json().then(g => g && g.endpointUrl ? sm(a, g.endpointUrl) : Promise.resolve()).catch(g => {
                Il(g);
                Promise.reject(g)
            })
        }))
    })
}

function tm(a, b) {
    var c = Z(8);
    if (c == null || !b) return a;
    a = km.test(a) ? new URL(a) : new URL(a, self.registration.scope);
    a.searchParams.set("parentCsn", c);
    a.searchParams.set("parentTrackingParams", b);
    return a.toString()
}

function sm(a, b) {
    a.deviceId && O("DeviceId", a.deviceId);
    a.timestampSec && O("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome,
        d = Wl();
    em(d);
    var e;
    const f = (e = c.postedEndpoint) == null ? void 0 : e.clickTrackingParams;
    e = c.title;
    const g = {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: tm(b, f),
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint,
            postedEndpoint: c.postedEndpoint,
            clickTrackingParams: f,
            isDismissed: !0
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    };
    return self.registration.showNotification(e, g).then(() => {
        var k;
        ((k = g.data) == null ? 0 : k.postedEndpoint) && um(g.data.postedEndpoint);
        let h;
        if ((h = g.data) == null ? 0 : h.clickTrackingParams) k = {
            screenLayer: 8,
            visualElement: fm(d, g.data.clickTrackingParams)
        }, Ul(k);
        vm(a.displayCap)
    }).catch(() => {})
}

function um(a) {
    if (!qj(a, nf)) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: qj(a, nf).serializedInteractionsRequest
        },
        c = Bf(pf);
    return rm().then(d => Dl(d, b, c)).then(d => d)
}

function vm(a) {
    a !== -1 && self.registration.getNotifications().then(b => {
        for (let d = 0; d < b.length - a; d++) {
            b[d].data.isDismissed = !1;
            b[d].close();
            let e;
            if ((e = b[d].data) == null ? 0 : e.clickTrackingParams) {
                let f;
                var c = Jk((f = b[d].data) == null ? void 0 : f.clickTrackingParams);
                const g = {
                        screenLayer: 8,
                        visualElement: c
                    },
                    k = Lk(82046),
                    h = Wl();
                $l(h, k, c, 8);
                c = {
                    screenLayer: 8,
                    visualElement: k
                };
                Ul(c);
                im(h, c);
                Vl(g)
            }
        }
    })
}

function nm(a) {
    const b = [wm(a), xf("RegistrationTimestamp").then(xm), ym(), zm(), Am()];
    Promise.all(b).catch(() => {
        O("IDToken", a);
        mm();
        return Promise.resolve()
    })
}

function xm(a) {
    return Date.now() - (a || 0) <= 9E7 ? Promise.resolve() : Promise.reject()
}

function wm(a) {
    return xf("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function ym() {
    return xf("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function zm() {
    return xf("Endpoint").then(a => Bm().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Am() {
    return xf("application_server_key").then(a => Cm().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Dm() {
    var a = Notification.permission;
    if (jm[a]) return jm[a]
}

function mm() {
    O("RegistrationTimestamp", 0);
    Promise.all([Bm(), Em(), Fm(), Cm()]).then(([a, b, c, d]) => {
        b = b ? rf(b) : null;
        c = c ? rf(c) : null;
        d = d ? ab(new Uint8Array(d), 4) : null;
        Gm(a, b, c, d)
    }).catch(() => {
        Gm()
    })
}

function Gm(a = null, b = null, c = null, d = null) {
    wf().then(e => {
        e && (O("Endpoint", a), O("P256dhKey", b), O("AuthKey", c), O("application_server_key", d), O("Permission", Notification.permission), Promise.all([xf("DeviceId"), xf("NotificationsDisabled")]).then(([f, g]) => {
            if (f != null) var k = f;
            else {
                f = [];
                var h;
                k = k || Se.length;
                for (h = 0; h < 256; h++) f[h] = Se[0 | Math.random() * k];
                k = f.join("")
            }
            Hm(k, a != null ? a : void 0, b != null ? b : void 0, c != null ? c : void 0, d != null ? d : void 0, g != null ? g : void 0)
        }))
    })
}

function Hm(a, b, c, d, e, f) {
    r(function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Dm()
                    }
                }
            },
            k = Bf(qf);
        return rm().then(h => Dl(h, g, k).then(() => {
            O("DeviceId", a);
            O("RegistrationTimestamp", Date.now());
            O("TimestampLowerBound", Date.now())
        }, l => {
            Gl(l)
        }))
    })
}

function Bm() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Em() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Fm() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Cm() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function rm() {
    return r(function*() {
        try {
            return yield yk(!0), Fl()
        } catch (a) {
            return yield Gl(a), Promise.reject(a)
        }
    })
};
let Im = self.location.origin + "/";

function Ak(a) {
    let b = typeof ServiceWorkerGlobalScope !== "undefined" && self instanceof ServiceWorkerGlobalScope ? Le.registration.scope : Im;
    b.endsWith("/") && (b = b.slice(0, -1));
    return b + a
};
let Jm = void 0;

function Km(a) {
    return r(function*() {
        Jm || (Jm = yield a.open("yt-appshell-assets"));
        return Jm
    })
}

function Lm(a, b) {
    return r(function*() {
        const c = yield Km(a), d = b.map(e => Mm(c, e));
        return Promise.all(d)
    })
}

function Nm(a, b) {
    return r(function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Om(a, b) {
    return r(function*() {
        const c = yield Km(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Pm(a, b, c) {
    return r(function*() {
        yield(yield Km(a)).put(b, c)
    })
}

function Qm(a, b) {
    r(function*() {
        yield(yield Km(a)).delete(b)
    })
}

function Mm(a, b) {
    return r(function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Rm = Rh("yt-serviceworker-metadata", {
    L: {
        auth: {
            K: 1
        },
        ["resource-manifest-assets"]: {
            K: 2
        }
    },
    shared: !0,
    upgrade(a, b) {
        b(1) && fh(a, "resource-manifest-assets");
        b(2) && fh(a, "auth")
    },
    version: 2
});
let Sm = null;

function Tm(a) {
    return yh(Rm(), a)
}

function Um() {
    return r(function*() {
        const a = yield Ih();
        if (a) return Vm.h || (Vm.h = new Vm(a)), Vm.h
    })
}

function Wm(a, b) {
    return r(function*() {
        yield X(yield Tm(a.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return V(d.h.put(b, e)).then(() => {
                Sm = e;
                let f = !0;
                return kh(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, th(g)) : d.delete(g.getKey()).then(() => nh(g)))
            })
        })
    })
}

function Xm(a, b) {
    return r(function*() {
        let c = !1,
            d = 0;
        yield X(yield Tm(a.token), ["resource-manifest-assets"], "readonly", e => kh(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, nh(f)
        }));
        return c ? d : -1
    })
}

function Ym(a) {
    return r(function*() {
        Sm || (yield X(yield Tm(a.token), ["resource-manifest-assets"], "readonly", b => kh(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Sm = c.getKey()
        })));
        return Sm
    })
}
var Vm = class {
    constructor(a) {
        this.token = a
    }
};

function Zm() {
    return r(function*() {
        const a = yield Ih();
        if (a) return $m.h || ($m.h = new $m(a)), $m.h
    })
}

function an(a, b) {
    return r(function*() {
        yield hh(yield Tm(a.token), "auth", b, "shell_identifier_key")
    })
}

function bn(a) {
    return r(function*() {
        return (yield(yield Tm(a.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function cn(a) {
    return r(function*() {
        yield(yield Tm(a.token)).clear("auth")
    })
}
var $m = class {
    constructor(a) {
        this.token = a
    }
};

function dn() {
    r(function*() {
        const a = yield Zm();
        a && (yield cn(a))
    })
};
var en = class extends K {
    constructor(a) {
        super(a)
    }
    hasUrl() {
        return ad(this, 1) != null
    }
};

function fn(a) {
    var b;
    void 0 === Rb ? b = 2 : b = 5;
    a = a.o;
    const c = A(a);
    return Xc(a, c, en, 1, b, !1, !(2 & c))
}
var gn = function(a, b) {
    return (c, d) => {
        if (ud.length) {
            const f = ud.pop();
            pd(f, d);
            f.h.init(c, void 0, void 0, d);
            c = f
        } else c = new td(c, d);
        try {
            const f = new a,
                g = f.o;
            zd(b)(g, c);
            var e = f
        } finally {
            c.h.clear(), c.l = -1, c.i = -1, ud.length < 100 && ud.push(c)
        }
        return e
    }
}(class extends K {
    constructor(a) {
        super(a)
    }
}, [0,
    Td, [0, Sd]
]);

function hn(a) {
    return r(function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(jn(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function jn(a) {
    return fn(gn(decodeURIComponent(a))).reduce((b, c) => {
        (c = bd(c, 1)) && b.push(c);
        return b
    }, [])
};

function kn(a) {
    return r(function*() {
        const b = yield yk();
        if (b && ad(b, 3) != null) {
            var c = yield Zm();
            c && (c = yield bn(c), ad(b, 3) !== c && (Qm(a.caches, a.h), dn()))
        }
    })
}

function ln(a) {
    return r(function*() {
        let b, c;
        try {
            c = yield mn(a.i), b = yield hn(c), yield Lm(a.caches, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield nn(), yield Pm(a.caches, a.h, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield on(a, b, a.h)
        } catch (d) {}
        return Promise.resolve()
    })
}

function pn(a) {
    return r(function*() {
        yield kn(a);
        return ln(a)
    })
}

function mn(a) {
    return r(function*() {
        try {
            return yield t.fetch(new Request(a))
        } catch (b) {
            return Promise.reject(b)
        }
    })
}

function nn() {
    return r(function*() {
        var a = yield yk();
        let b;
        a && ad(a, 3) != null && (b = bd(a, 3));
        return b ? (a = yield Zm()) ? Promise.resolve(an(a, b)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function on(a, b, c) {
    return r(function*() {
        const d = yield Um();
        if (d) try {
            yield Wm(d, b)
        } catch (e) {
            yield Gl(e)
        }
        b.push(c);
        try {
            yield Om(a.caches, b)
        } catch (e) {
            yield Gl(e)
        }
        return Promise.resolve()
    })
}

function qn(a, b) {
    return r(function*() {
        return Nm(a.caches, b)
    })
}

function rn(a) {
    return r(function*() {
        return Nm(a.caches, a.h)
    })
}
var sn = class {
    constructor() {
        var a = self.caches;
        let b = Ak("/app_shell");
        S("service_worker_forward_exp_params") && (b += self.location.search);
        var c = Ak("/app_shell_home");
        this.caches = a;
        this.i = b;
        this.h = c
    }
};
var tn = class {
    constructor() {
        const a = this;
        this.stream = new ReadableStream({
            start(b) {
                a.close = () => void b.close();
                a.h = c => {
                    const d = c.getReader();
                    return d.read().then(function k({
                        done: f,
                        value: g
                    }) {
                        if (f) return Promise.resolve();
                        b.enqueue(g);
                        return d.read().then(k)
                    })
                };
                a.i = () => {
                    const c = (new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");
                    b.enqueue(c)
                }
            }
        })
    }
};

function un(a, b) {
    return r(function*() {
        const c = b.request,
            d = yield qn(a.h, c.url);
        if (d) return a.i && Jl({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: W()
        }), d;
        vn(a, c);
        return wn(b)
    })
}

function xn(a, b) {
    return r(function*() {
        const c = yield yn(b);
        if (c.response && (c.response.ok || c.response.type === "opaqueredirect" || c.response.status === 429 || c.response.status === 303 || c.response.status >= 300 && c.response.status < 400)) return c.response;
        const d = yield rn(a.h);
        if (d) return zn(a), An(d, b);
        Bn(a);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Cn(a, b) {
    b = new URL(b);
    if (!a.config.ra.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    b = new URLSearchParams(b.search);
    for (const c of a.config.ta)
        if (a = b.get(c.key), c.value === void 0 || a === c.value)
            if (b.delete(c.key), !b.toString()) return !0;
    return !1
}

function Dn(a, b) {
    return r(function*() {
        const c = yield rn(a.h);
        if (!c) return Bn(a), wn(b);
        zn(a);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(W() - d);
                break a
            }
            d = -1
        }
        if (!(d > -1 && d / 864E5 >= 7)) return An(c, b);
        d = yield yn(b);
        return d.response && d.response.ok ? d.response : An(c, b)
    })
}

function wn(a) {
    return Promise.resolve(a.preloadResponse).then(b => b && !En(b) ? b : t.fetch(a.request))
}

function vn(a, b) {
    if (a.i) {
        var c = {
            assetPath: b.url,
            cacheHit: !1
        };
        Um().then(d => {
            if (d) {
                var e = Ym(d).then(f => {
                    f && (c.currentAppBundleTimestampSec = String(Math.floor(f / 1E3)))
                });
                d = Xm(d, b.url).then(f => {
                    c.appBundleVersionDiffCount = f
                });
                Promise.all([e, d]).catch(f => {
                    Gl(f)
                }).finally(() => {
                    Jl({
                        appShellAssetLoadReport: c,
                        timestamp: W()
                    })
                })
            } else Jl({
                appShellAssetLoadReport: c,
                timestamp: W()
            })
        })
    }
}

function zn(a) {
    a.i && Jl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !0
        },
        timestamp: W()
    })
}

function Bn(a) {
    a.i && Jl({
        appShellAssetLoadReport: {
            assetPath: a.h.h,
            cacheHit: !1
        },
        timestamp: W()
    })
}

function An(a, b) {
    if (!S("sw_nav_preload_pbj")) return a;
    const c = new tn,
        d = c.h(a.body);
    Promise.resolve(b.preloadResponse).then(e => {
        if (!e || !En(e)) throw Error("no pbj preload response available");
        d.then(() => c.h(e.body)).then(() => void c.close())
    }).catch(() => {
        d.then(() => {
            c.i();
            c.close()
        })
    });
    return new Response(c.stream, {
        status: a.status,
        statusText: a.statusText,
        headers: a.headers
    })
}

function yn(a) {
    return r(function*() {
        try {
            return {
                response: yield wn(a)
            }
        } catch (b) {
            return {
                error: b
            }
        }
    })
}

function En(a) {
    return a.headers.get("x-navigation-preload-response-type") === "pbj"
}
var Nn = class {
    constructor() {
        var a = Fn;
        var b = {
            xa: Gn,
            Ha: Hn([In, /\/signin/, /\/logout/]),
            ra: ["/", "/feed/downloads"],
            ta: Jn([{
                key: "feature",
                value: "ytca"
            }]),
            sa: Kn(S("kevlar_sw_app_wide_fallback") ? Ln : Mn)
        };
        this.h = a;
        this.config = b;
        a = T("app_shell_asset_log_fraction");
        this.i = !0;
        a && (this.i = Math.random() < a)
    }
};
const On = /^\/$/,
    Mn = [On, /^\/feed\/downloads$/],
    Ln = [On, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Kn(a) {
    return new RegExp(a.map(b => b.source).join("|"))
}
const Pn = /^https:\/\/([\w-]*\.)*youtube\.com.*/;

function Hn(a) {
    a = Kn(a);
    return new RegExp(`${Pn.source}(${a.source})`)
}
const Qn = Kn([/\.css$/, /\.js$/, /\.ico$/, /\/ytmweb\/_\/js\//, /\/ytmweb\/_\/ss\//, /\/kabuki\/_\/js\//, /\/kabuki\/_\/ss\//, /\/ytmainappweb\/_\/ss\//]),
    Gn = new RegExp(`${Pn.source}(${Qn.source})`),
    In = /purge_shell=1/;

function Jn(a = []) {
    const b = [];
    for (const c of Wf) b.push({
        key: c
    });
    for (const c of a) b.push(c);
    return b
}
Hn([In]);
Jn();
var Sn = class {
    constructor() {
        var a = Fn,
            b = Rn,
            c = self;
        if (t.URLPattern) {
            var d = [];
            S("service_worker_static_routing_exclude_embed") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/embed*"
                    })
                },
                source: "network"
            });
            S("service_worker_static_routing_exclude_innertube") && d.push({
                condition: {
                    urlPattern: new URLPattern({
                        pathname: "/youtubei/v1/*"
                    })
                },
                source: "network"
            })
        } else d = [];
        this.h = c;
        this.i = a;
        this.s = b;
        this.C = sf;
        this.j = d
    }
    init() {
        this.h.oninstall = this.v.bind(this);
        this.h.onactivate = this.l.bind(this);
        this.h.onfetch =
            this.m.bind(this);
        this.h.onmessage = this.A.bind(this)
    }
    v(a) {
        this.h.skipWaiting();
        if (S("service_worker_static_routing_registration") && this.j.length > 0 && a.addRoutes) try {
            a.addRoutes(this.j)
        } catch (c) {}
        const b = pn(this.i).catch(c => {
            Gl(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    l(a) {
        const b = [this.h.clients.claim()],
            c = this.h.registration;
        c.navigationPreload && (b.push(c.navigationPreload.enable()), S("sw_nav_preload_pbj") && b.push(c.navigationPreload.setHeaderValue("pbj")));
        a.waitUntil(Promise.all(b))
    }
    m(a) {
        const b = this;
        return r(function*() {
            var c = b.s,
                d = !!b.h.registration.navigationPreload;
            const e = a.request;
            if (c.config.Ha.test(e.url)) zk.h && (delete zk.h.h, t.__SAPISID = void 0, P("VISITOR_DATA", void 0), P("SESSION_INDEX", void 0), P("DELEGATED_SESSION_ID", void 0), P("USER_SESSION_ID",
                void 0), P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT", void 0)), d = a.respondWith, c = c.h, Qm(c.caches, c.h), dn(), c = wn(a), d.call(a, c);
            else if (c.config.xa.test(e.url)) a.respondWith(un(c, a));
            else if (e.mode === "navigate") {
                const f = new URL(e.url);
                c.config.sa.test(f.pathname) ? a.respondWith(xn(c, a)) : Cn(c, e.url) ? a.respondWith(Dn(c, a)) : d && a.respondWith(wn(a))
            }
        })
    }
    A(a) {
        const b = a.data;
        this.C.includes(b.type) ? lm(a) : b.type === "refresh_shell" && ln(this.i).catch(c => {
            Gl(c)
        })
    }
};

function Tn() {
    let a = u("ytglobal.storage_");
    a || (a = new Un, w("ytglobal.storage_", a));
    return a
}
var Un = class {
    estimate() {
        return r(function*() {
            const a = navigator;
            let b;
            if ((b = a.storage) == null ? 0 : b.estimate) return a.storage.estimate();
            let c;
            if ((c = a.webkitTemporaryStorage) == null ? 0 : c.queryUsageAndQuota) return Vn()
        })
    }
};

function Vn() {
    const a = navigator;
    return new Promise((b, c) => {
        let d;
        (d = a.webkitTemporaryStorage) != null && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
w("ytglobal.storageClass_", Un);

function Wn(a, b) {
    Tn().estimate().then(c => {
        c = Object.assign({}, b, {
            isSw: self.document === void 0,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Xn(c == null ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Xn(c == null ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Yn {
    constructor() {
        var a = Zn;
        this.handleError = $n;
        this.h = a;
        this.i = !1;
        self.document === void 0 || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= .2
    }
    R(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                S("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                S("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Wn(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && Math.random() <= .1 && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a = Object.assign({},
                    b, {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Xn(a) {
    return typeof a === "undefined" ? "-1" : String(Math.ceil(a / 1048576))
};
jg(gg(), {
    F: [{
        Fa: /Failed to fetch/,
        weight: 500
    }],
    D: []
});
({
    handleError: $n = rk,
    R: Zn = Y
} = {
    handleError: Il,
    R: function(a, b) {
        return r(function*() {
            yield Hl();
            Y(a, b)
        })
    }
});
var Zn, $n;
for (Eg = new Yn; Dg.length > 0;) {
    const a = Dg.shift();
    switch (a.type) {
        case "ERROR":
            Eg.handleError(a.payload);
            break;
        case "EVENT":
            Eg.R(a.eventType, a.payload)
    }
}
zk.h = new zk;
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data;
    b.isDismissed = !1;
    const c = self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(um(b.clickEndpoint))
};
self.onnotificationclose = function(a) {
    var b = a.notification.data;
    if (b == null ? 0 : b.clickTrackingParams) {
        var c = Jk(b.clickTrackingParams);
        a = {
            screenLayer: 8,
            visualElement: c
        };
        if (b.isDismissed) {
            const d = Lk(74726);
            b = Wl();
            $l(b, d, c, 8);
            c = {
                screenLayer: 8,
                visualElement: d
            };
            Ul(c);
            im(b, c)
        }
        Vl(a)
    }
};
self.onpush = function(a) {
    a.waitUntil(xf("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return qm(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(om())
};
self.onpushsubscriptionchange = function() {
    mm()
};
const Fn = new sn,
    Rn = new Nn;
(new Sn).init();