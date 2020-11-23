/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 * 
 *
 * 
 * 
 * FUELED BY:
 *  - the wonderful Constructive Solid Geometry library by Evan Wallace (http://madebyevan.com)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/csg/LICENSE
 *
 *  - parts of the Google Closure Library (http://code.google.com/closure/library)
 *    LICENSE: https://raw.github.com/xtk/google-closure-library/master/LICENSE
 *
 *  - zlib.js, the ultimate gzip/zlib javascript implementation (https://github.com/imaya/zlib.js)
 *    LICENSE: https://raw.github.com/imaya/zlib.js/master/LICENSE
 *
 * MORE CREDITS: https://raw.github.com/xtk/X/master/LICENSE
 *
 */
function m(a) {
    throw a;
}
var p = void 0,
q = !0,
t = null,
u = !1;
function aa() {
    return function() {}
}
function ca(a) {
    return function(b) {
        this[a] = b
    }
}
function v(a) {
    return function() {
        return this[a]
    }
}
var w, fa = this;
function ga() {}
function ha(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}
function ia(a) {
    return a !== p
}
function la(a) {
    return "array" == ha(a)
}
function ma(a) {
    var b = ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function na(a) {
    return "string" == typeof a
}
function x(a) {
    return "number" == typeof a
}
function oa(a) {
    return "function" == ha(a)
}
function pa(a) {
    var b = typeof a;
    return "object" == b && a != t || "function" == b
}
function qa(a) {
    return a[ra] || (a[ra] = ++sa)
}
var ra = "closure_uid_" + (1E9 * Math.random() >>> 0),
sa = 0;
function ta(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function ua(a, b, c) {
    a || m(Error());
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, e);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function va(a, b, c) {
    va = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta: ua;
    return va.apply(t, arguments)
}
function wa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var xa = Date.now ||
function() {
    return + new Date
};
function A(a, b) {
    var c = a.split("."),
    e = fa; ! (c[0] in e) && e.execScript && e.execScript("var " + c[0]);
    for (var d; c.length && (d = c.shift());) ! c.length && ia(b) ? e[d] = b: e = e[d] ? e[d] : e[d] = {}
}
function C(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.u = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
function ya(a, b, c) {
    this.Za = this.Ya = this.Xa = 0;
    3 == arguments.length ? (this.Xa = Number(a), this.Ya = Number(b), this.Za = Number(c)) : a instanceof ya ? (this.Xa = Number(a.x()), this.Ya = Number(a.y()), this.Za = Number(a.d())) : (this.Xa = Number(a[0]), this.Ya = Number(a[1]), this.Za = Number(a[2]))
}
ya.prototype = {
    l: function() {
        return new ya(this.Xa, this.Ya, this.Za)
    },
    ac: function(a) {
        return this.Xa * a.x() + this.Ya * a.y() + this.Za * a.d()
    },
    se: function(a, b) {
        return za(this, Aa(Ca(a, this), b))
    },
    length: function() {
        return Math.sqrt(this.ac(this))
    },
    sc: function(a) {
        return new ya(this.Ya * a.d() - this.Za * a.y(), this.Za * a.x() - this.Xa * a.d(), this.Xa * a.y() - this.Ya * a.x())
    },
    x: v("Xa"),
    y: v("Ya"),
    d: v("Za")
};
function Da(a) {
    var b = a.length();
    return new ya(a.Xa / b, a.Ya / b, a.Za / b)
}
function Aa(a, b) {
    return new ya(a.Xa * b, a.Ya * b, a.Za * b)
}
function Ca(a, b) {
    return new ya(a.Xa - b.x(), a.Ya - b.y(), a.Za - b.d())
}
function za(a, b) {
    return new ya(a.Xa + b.x(), a.Ya + b.y(), a.Za + b.d())
}
function Ea(a) {
    return new ya( - a.Xa, -a.Ya, -a.Za)
};
var D = D || {};
D.zk = q;
D.Ja = function(a) {
    eval("X.DEV === undefined") || window.console.time(a)
};
D.Da = function(a) {
    eval("X.DEV === undefined") || window.console.timeEnd(a)
};
window["X.counter"] = new
function() {
    this.Wh = 0;
    this.qk = function() {
        return this.Wh++
    }
};
function Fa(a, b) {
    for (var c in b) {
        var e = b.__lookupGetter__(c),
        d = b.__lookupSetter__(c);
        c in a || (e || d ? (e && a.__defineGetter__(c, e), d && a.__defineSetter__(c, d)) : a[c] = b[c])
    }
}
var Ha = window.Lh;
Function.prototype.bind || (Function.prototype.bind = function(a) {
    function b() {
        return f.apply(this instanceof c ? this: a || window, d.concat(e.call(arguments)))
    }
    function c() {}
    "function" !== typeof this && m(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var e = Array.prototype.slice,
    d = e.call(arguments, 1),
    f = this;
    c.prototype = this.prototype;
    b.prototype = new c;
    return b
});
for (var Ia = 0,
Ja = ["ms", "moz", "webkit", "o"], Ka = 0; Ka < Ja.length && !window.requestAnimationFrame; ++Ka) window.requestAnimationFrame = window[Ja[Ka] + "RequestAnimationFrame"],
window.cancelAnimationFrame = window[Ja[Ka] + "CancelAnimationFrame"] || window[Ja[Ka] + "CancelRequestAnimationFrame"];
window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
    var b = Date.now(),
    c = Math.max(0, 16 - (b - Ia)),
    e = window.setTimeout(function() {
        a(b + c)
    },
    c);
    Ia = b + c;
    return e
});
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    clearTimeout(a)
});
"slice" in ArrayBuffer.prototype || (ArrayBuffer.prototype.slice = function(a, b) {
    a === p && m(Error("Not enough arguments."));
    var c = b || this.byteLength;
    0 > a && (a = this.byteLength + a);
    0 > c && (c = this.byteLength + c);
    c < a && (c = a = 0);
    0 > a && (a = 0);
    0 > c && (c = 0);
    a > this.byteLength && (a = this.byteLength);
    c > this.byteLength && (c = this.byteLength);
    for (var e = new ArrayBuffer(c - a), d = new Uint8Array(this), f = new Uint8Array(e), g = a, h = 0; g < c; ++g, ++h) f[h] = d[g];
    return e
});
A("$", Ha);
A("Function.prototype.bind", Function.prototype.bind);
A("window.requestAnimationFrame", window.requestAnimationFrame);
A("window.cancelAnimationFrame", window.cancelAnimationFrame);
var La = 0;
function Ma() {}
w = Ma.prototype;
w.key = 0;
w.xc = u;
w.ie = u;
w.Ca = function(a, b, c, e, d, f) {
    oa(a) ? this.Ug = q: a && a.handleEvent && oa(a.handleEvent) ? this.Ug = u: m(Error("Invalid listener argument"));
    this.bc = a;
    this.oh = b;
    this.src = c;
    this.type = e;
    this.capture = !!d;
    this.tf = f;
    this.ie = u;
    this.key = ++La;
    this.xc = u
};
w.handleEvent = function(a) {
    return this.Ug ? this.bc.call(this.tf || this.src, a) : this.bc.handleEvent.call(this.bc, a)
};
function Na(a, b) {
    for (var c in a) b.call(p, a[c], c, a)
}
function Oa(a) {
    var b = [],
    c = 0,
    e;
    for (e in a) b[c++] = a[e];
    return b
}
var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Qa(a, b) {
    for (var c, e, d = 1; d < arguments.length; d++) {
        e = arguments[d];
        for (c in e) a[c] = e[c];
        for (var f = 0; f < Pa.length; f++) c = Pa[f],
        Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
    }
};
function Ra(a) {
    if (!Sa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Va, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Wa, "&quot;"));
    return a
}
var Ta = /&/g,
Ua = /</g,
Va = />/g,
Wa = /\"/g,
Sa = /[&<>\"]/;
var Xa, Ya, Za, $a, ab, bb, db;
function eb() {
    return fa.navigator ? fa.navigator.userAgent: t
}
function fb() {
    return fa.navigator
}
$a = Za = Ya = Xa = u;
var gb;
if (gb = eb()) {
    var hb = fb();
    Xa = 0 == gb.indexOf("Opera");
    Ya = !Xa && -1 != gb.indexOf("MSIE");
    Za = !Xa && -1 != gb.indexOf("WebKit");
    $a = !Xa && !Za && "Gecko" == hb.product
}
var ib = Xa,
K = Ya,
jb = $a,
lb = Za,
mb, pb = fb();
mb = pb && pb.platform || "";
ab = -1 != mb.indexOf("Mac");
bb = -1 != mb.indexOf("Win");
db = -1 != mb.indexOf("Linux");
var qb = !!fb() && -1 != (fb().appVersion || "").indexOf("X11");
function rb() {
    var a = fa.document;
    return a ? a.documentMode: p
}
var sb;
a: {
    var wb = "",
    xb;
    if (ib && fa.opera) var yb = fa.opera.version,
    wb = "function" == typeof yb ? yb() : yb;
    else if (jb ? xb = /rv\:([^\);]+)(\)|;)/: K ? xb = /MSIE\s+([^\);]+)(\)|;)/: lb && (xb = /WebKit\/(\S+)/), xb) var zb = xb.exec(eb()),
    wb = zb ? zb[1] : "";
    if (K) {
        var Ab = rb();
        if (Ab > parseFloat(wb)) {
            sb = String(Ab);
            break a
        }
    }
    sb = wb
}
var Bb = {};
function Cb(a) {
    var b;
    if (! (b = Bb[a])) {
        b = 0;
        for (var c = String(sb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(c.length, e.length), f = 0; 0 == b && f < d; f++) {
            var g = c[f] || "",
            h = e[f] || "",
            l = RegExp("(\\d*)(\\D*)", "g"),
            j = RegExp("(\\d*)(\\D*)", "g");
            do {
                var k = l.exec(g) || ["", "", ""], n = j.exec(h) || ["", "", ""];
                if (0 == k[0].length && 0 == n[0].length) break;
                b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1], 10)) > (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == n[2].length) ? -1 : (0 == k[2].length) > (0 == n[2].length) ? 1 : 0) || (k[2] < n[2] ? -1 : k[2] > n[2] ? 1 : 0)
            } while ( 0 == b )
        }
        b = Bb[a] = 0 <= b
    }
    return b
}
var Db = fa.document,
Eb = !Db || !K ? p: rb() || ("CSS1Compat" == Db.compatMode ? parseInt(sb, 10) : 5);
var Fb = !K || K && 9 <= Eb,
Gb = K && !Cb("9"); ! lb || Cb("528");
jb && Cb("1.9b") || K && Cb("8") || ib && Cb("9.5") || lb && Cb("528");
jb && !Cb("8") || K && Cb("9");
var Hb = Array.prototype,
Ib = Hb.indexOf ?
function(a, b, c) {
    return Hb.indexOf.call(a, b, c)
}: function(a, b, c) {
    c = c == t ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (na(a)) return ! na(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return - 1
},
Jb = Hb.forEach ?
function(a, b, c) {
    Hb.forEach.call(a, b, c)
}: function(a, b, c) {
    for (var e = a.length,
    d = na(a) ? a.split("") : a, f = 0; f < e; f++) f in d && b.call(c, d[f], f, a)
},
Lb = Hb.map ?
function(a, b, c) {
    return Hb.map.call(a, b, c)
}: function(a, b, c) {
    for (var e = a.length,
    d = Array(e), f = na(a) ? a.split("") : a, g = 0; g < e; g++) g in f && (d[g] = b.call(c, f[g], g, a));
    return d
},
Mb = Hb.some ?
function(a, b, c) {
    return Hb.some.call(a, b, c)
}: function(a, b, c) {
    for (var e = a.length,
    d = na(a) ? a.split("") : a, f = 0; f < e; f++) if (f in d && b.call(c, d[f], f, a)) return q;
    return u
};
function Nb(a, b) {
    var c = Ib(a, b);
    0 <= c && Hb.splice.call(a, c, 1)
}
function Ob(a, b, c) {
    return 2 >= arguments.length ? Hb.slice.call(a, b) : Hb.slice.call(a, b, c)
};
function Pb() {
    0 != Qb && (this.xl = Error().stack, qa(this))
}
var Qb = 0;
function Rb(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
w = Rb.prototype;
w.wc = u;
w.defaultPrevented = u;
w.xe = q;
w.stopPropagation = function() {
    this.wc = q
};
w.preventDefault = function() {
    this.defaultPrevented = q;
    this.xe = u
};
function Sb(a) {
    Sb[" "](a);
    return a
}
Sb[" "] = ga;
function Tb(a, b) {
    a && this.Ca(a, b)
}
C(Tb, Rb);
w = Tb.prototype;
w.target = t;
w.relatedTarget = t;
w.offsetX = 0;
w.offsetY = 0;
w.clientX = 0;
w.clientY = 0;
w.screenX = 0;
w.screenY = 0;
w.button = 0;
w.keyCode = 0;
w.charCode = 0;
w.ctrlKey = u;
w.altKey = u;
w.shiftKey = u;
w.metaKey = u;
w.Wj = u;
w.sb = t;
w.Ca = function(a, b) {
    var c = this.type = a.type;
    Rb.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
        if (jb) {
            var d;
            a: {
                try {
                    Sb(e.nodeName);
                    d = q;
                    break a
                } catch(f) {}
                d = u
            }
            d || (e = t)
        }
    } else "mouseover" == c ? e = a.fromElement: "mouseout" == c && (e = a.toElement);
    this.relatedTarget = e;
    this.offsetX = lb || a.offsetX !== p ? a.offsetX: a.layerX;
    this.offsetY = lb || a.offsetY !== p ? a.offsetY: a.layerY;
    this.clientX = a.clientX !== p ? a.clientX: a.pageX;
    this.clientY = a.clientY !== p ? a.clientY: a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode: 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Wj = ab ? a.metaKey: a.ctrlKey;
    this.state = a.state;
    this.sb = a;
    a.defaultPrevented && this.preventDefault();
    delete this.wc
};
w.stopPropagation = function() {
    Tb.u.stopPropagation.call(this);
    this.sb.stopPropagation ? this.sb.stopPropagation() : this.sb.cancelBubble = q
};
w.preventDefault = function() {
    Tb.u.preventDefault.call(this);
    var a = this.sb;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = u, Gb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch(b) {}
};
w.Gi = v("sb");
var Ub = {},
Vb = {},
Wb = {},
Xb = {};
function L(a, b, c, e, d) {
    if (la(b)) {
        for (var f = 0; f < b.length; f++) L(a, b[f], c, e, d);
        return t
    }
    a = Yb(a, b, c, u, e, d);
    b = a.key;
    Ub[b] = a;
    return b
}
function Yb(a, b, c, e, d, f) {
    b || m(Error("Invalid event type"));
    d = !!d;
    var g = Vb;
    b in g || (g[b] = {
        oa: 0,
        Na: 0
    });
    g = g[b];
    d in g || (g[d] = {
        oa: 0,
        Na: 0
    },
    g.oa++);
    var g = g[d],
    h = qa(a),
    l;
    g.Na++;
    if (g[h]) {
        l = g[h];
        for (var j = 0; j < l.length; j++) if (g = l[j], g.bc == c && g.tf == f) {
            if (g.xc) break;
            e || (l[j].ie = u);
            return l[j]
        }
    } else l = g[h] = [],
    g.oa++;
    var k = Zb,
    n = Fb ?
    function(a) {
        return k.call(n.src, n.bc, a)
    }: function(a) {
        a = k.call(n.src, n.bc, a);
        if (!a) return a
    },
    j = n,
    g = new Ma;
    g.Ca(c, j, a, b, d, f);
    g.ie = e;
    j.src = a;
    j.bc = g;
    l.push(g);
    Wb[h] || (Wb[h] = []);
    Wb[h].push(g);
    a.addEventListener ? (a == fa || !a.customEvent_) && a.addEventListener(b, j, d) : a.attachEvent(b in Xb ? Xb[b] : Xb[b] = "on" + b, j);
    return g
}
function $b(a, b, c, e, d) {
    if (la(b)) for (var f = 0; f < b.length; f++) $b(a, b[f], c, e, d);
    else a = Yb(a, b, c, q, e, d),
    Ub[a.key] = a
}
function ac(a, b, c, e, d) {
    if (la(b)) for (var f = 0; f < b.length; f++) ac(a, b[f], c, e, d);
    else {
        e = !!e;
        a: {
            f = Vb;
            if (b in f && (f = f[b], e in f && (f = f[e], a = qa(a), f[a]))) {
                a = f[a];
                break a
            }
            a = t
        }
        if (a) for (f = 0; f < a.length; f++) if (a[f].bc == c && a[f].capture == e && a[f].tf == d) {
            bc(a[f].key);
            break
        }
    }
}
function bc(a) {
    var b = Ub[a];
    if (!b || b.xc) return u;
    var c = b.src,
    e = b.type,
    d = b.oh,
    f = b.capture;
    c.removeEventListener ? (c == fa || !c.customEvent_) && c.removeEventListener(e, d, f) : c.detachEvent && c.detachEvent(e in Xb ? Xb[e] : Xb[e] = "on" + e, d);
    c = qa(c);
    Wb[c] && (d = Wb[c], Nb(d, b), 0 == d.length && delete Wb[c]);
    b.xc = q;
    if (b = Vb[e][f][c]) b.fh = q,
    cc(e, f, c, b);
    delete Ub[a];
    return q
}
function cc(a, b, c, e) {
    if (!e.te && e.fh) {
        for (var d = 0,
        f = 0; d < e.length; d++) e[d].xc ? e[d].oh.src = t: (d != f && (e[f] = e[d]), f++);
        e.length = f;
        e.fh = u;
        0 == f && (delete Vb[a][b][c], Vb[a][b].oa--, 0 == Vb[a][b].oa && (delete Vb[a][b], Vb[a].oa--), 0 == Vb[a].oa && delete Vb[a])
    }
}
function dc(a) {
    var b = 0;
    if (a != t) {
        if (a = qa(a), Wb[a]) {
            a = Wb[a];
            for (var c = a.length - 1; 0 <= c; c--) bc(a[c].key),
            b++
        }
    } else Na(Ub,
    function(a, c) {
        bc(c);
        b++
    })
}
function ec(a, b) {
    var c = qa(a),
    e = Wb[c];
    if (e) {
        var d = ia(b),
        f = ia(p);
        return d && f ? (e = Vb[b], !!e && !!e[p] && c in e[p]) : !d && !f ? q: Mb(e,
        function(a) {
            return d && a.type == b || f && a.capture == p
        })
    }
    return u
}
function fc(a, b, c, e, d) {
    var f = 1;
    b = qa(b);
    if (a[b]) {
        var g = --a.Na,
        h = a[b];
        h.te ? h.te++:h.te = 1;
        try {
            for (var l = h.length,
            j = 0; j < l; j++) {
                var k = h[j];
                k && !k.xc && (f &= gc(k, d) !== u)
            }
        } finally {
            a.Na = Math.max(g, a.Na),
            h.te--,
            cc(c, e, b, h)
        }
    }
    return Boolean(f)
}
function gc(a, b) {
    a.ie && bc(a.key);
    return a.handleEvent(b)
}
function Zb(a, b) {
    if (a.xc) return q;
    var c = a.type,
    e = Vb;
    if (! (c in e)) return q;
    var e = e[c],
    d,
    f;
    if (!Fb) {
        var g;
        if (! (g = b)) a: {
            g = ["window", "event"];
            for (var h = fa; d = g.shift();) if (h[d] != t) h = h[d];
            else {
                g = t;
                break a
            }
            g = h
        }
        d = g;
        g = q in e;
        h = u in e;
        if (g) {
            if (0 > d.keyCode || d.returnValue != p) return q;
            a: {
                var l = u;
                if (0 == d.keyCode) try {
                    d.keyCode = -1;
                    break a
                } catch(j) {
                    l = q
                }
                if (l || d.returnValue == p) d.returnValue = q
            }
        }
        l = new Tb;
        l.Ca(d, this);
        d = q;
        try {
            if (g) {
                for (var k = [], n = l.currentTarget; n; n = n.parentNode) k.push(n);
                f = e[q];
                f.Na = f.oa;
                for (var s = k.length - 1; ! l.wc && 0 <= s && f.Na; s--) l.currentTarget = k[s],
                d &= fc(f, k[s], c, q, l);
                if (h) {
                    f = e[u];
                    f.Na = f.oa;
                    for (s = 0; ! l.wc && s < k.length && f.Na; s++) l.currentTarget = k[s],
                    d &= fc(f, k[s], c, u, l)
                }
            } else d = gc(a, l)
        } finally {
            k && (k.length = 0)
        }
        return d
    }
    c = new Tb(b, this);
    return d = gc(a, c)
}
var hc = 0;
function ic(a) {
    return a + "_" + hc++
};
function jc() {
    Pb.call(this);
    this.Bl = {};
    this.ul = this
}
C(jc, Pb);
jc.prototype.customEvent_ = q;
w = jc.prototype;
w.Lf = t;
w.Qf = ca("Lf");
w.addEventListener = function(a, b, c, e) {
    L(this, a, b, c, e)
};
w.removeEventListener = function(a, b, c, e) {
    ac(this, a, b, c, e)
};
w.dispatchEvent = function(a) {
    var b = a.type || a,
    c = Vb;
    if (b in c) {
        if (na(a)) a = new Rb(a, this);
        else if (a instanceof Rb) a.target = a.target || this;
        else {
            var e = a;
            a = new Rb(b, this);
            Qa(a, e)
        }
        var e = 1,
        d, c = c[b],
        b = q in c,
        f;
        if (b) {
            d = [];
            for (f = this; f; f = f.Lf) d.push(f);
            f = c[q];
            f.Na = f.oa;
            for (var g = d.length - 1; ! a.wc && 0 <= g && f.Na; g--) a.currentTarget = d[g],
            e &= fc(f, d[g], a.type, q, a) && a.xe != u
        }
        if (u in c) if (f = c[u], f.Na = f.oa, b) for (g = 0; ! a.wc && g < d.length && f.Na; g++) a.currentTarget = d[g],
        e &= fc(f, d[g], a.type, u, a) && a.xe != u;
        else for (d = this; ! a.wc && d && f.Na; d = d.Lf) a.currentTarget = d,
        e &= fc(f, d, a.type, u, a) && a.xe != u;
        a = Boolean(e)
    } else a = q;
    return a
};
function M() {
    jc.call(this);
    this.f = "base";
    this.qa = window["X.counter"].qk();
    this.j = u
}
C(M, jc);
M.prototype.__defineGetter__("classname", v("f"));
M.prototype.__defineGetter__("id", v("qa"));
A("X.base", M);
function kc(a, b) {
    this.Wa = new ya(a);
    this.va = new ya(b)
}
kc.prototype = {
    l: function() {
        return new kc(this.Wa.l(), this.va.l())
    },
    uc: function() {
        this.va = Ea(this.va)
    }
};
function lc(a, b) {
    this.va = a;
    this.Pd = b
}
lc.prototype = {
    l: function() {
        return new lc(this.va.l(), this.Pd)
    },
    uc: function() {
        this.va = Ea(this.va);
        this.Pd = -this.Pd
    }
};
function mc(a, b) {
    this.Lb = a;
    this.De = b;
    var c = a[0].Wa,
    e = a[2].Wa,
    e = Da(Ca(a[1].Wa, c).sc(Ca(e, c)));
    this.Va = new lc(e, e.ac(c))
}
mc.prototype = {
    l: function() {
        var a = this.Lb.map(function(a) {
            return a.l()
        });
        return new mc(a, this.De)
    },
    uc: function() {
        this.Lb.reverse().map(function(a) {
            a.uc()
        });
        this.Va.uc()
    }
};
function nc(a, b, c, e, d, f) {
    for (var g = 0,
    h = [], l = 0; l < a.Lb.length; l++) {
        var j = b.va.ac(a.Lb[l].Wa) - b.Pd,
        j = -1E-5 > j ? 2 : 1E-5 < j ? 1 : 0,
        g = g | j;
        h.push(j)
    }
    switch (g) {
    case 0:
        (0 < b.va.ac(a.Va.va) ? c: e).push(a);
        break;
    case 1:
        d.push(a);
        break;
    case 2:
        f.push(a);
        break;
    case 3:
        c = [];
        e = [];
        for (l = 0; l < a.Lb.length; l++) {
            var k = (l + 1) % a.Lb.length,
            j = h[l],
            n = h[k],
            g = a.Lb[l],
            k = a.Lb[k];
            2 != j && c.push(g);
            1 != j && e.push(2 != j ? g.l() : g);
            3 == (j | n) && (j = (b.Pd - b.va.ac(g.Wa)) / b.va.ac(Ca(k.Wa, g.Wa)), j = new kc(g.Wa.se(k.Wa, j), g.va.se(k.va, j)), c.push(j), e.push(j.l()))
        }
        3 <= c.length && d.push(new mc(c, a.De));
        3 <= e.length && f.push(new mc(e, a.De))
    }
};
function oc(a) {
    this.Aa = this.Ba = this.Va = t;
    this.Z = [];
    a && pc(this, a)
}
oc.prototype = {
    l: function() {
        var a = new oc,
        b = this.Va && this.Va.l();
        a.Va = b;
        b = this.Ba && this.Ba.l();
        a.Ba = b;
        b = this.Aa && this.Aa.l();
        a.Aa = b;
        a.Ce(this.Z.map(function(a) {
            return a.l()
        }));
        return a
    },
    Y: function() {
        for (var a = 0; a < this.Z.length; a++) this.Z[a].uc();
        this.Va.uc();
        this.Ba && this.Ba.Y();
        this.Aa && this.Aa.Y();
        a = this.Ba;
        this.Ba = this.Aa;
        this.Aa = a
    },
    Ce: ca("Z")
};
function pc(a, b) {
    if (b.length) {
        a.Va || (a.Va = b[0].Va.l());
        for (var c = [], e = [], d = 0; d < b.length; d++) nc(b[d], a.Va, a.Z, a.Z, c, e);
        c.length && (a.Ba || (a.Ba = new oc), pc(a.Ba, c));
        e.length && (a.Aa || (a.Aa = new oc), pc(a.Aa, e))
    }
}
function qc(a) {
    var b = a.Z.slice();
    a.Ba && (b = b.concat(qc(a.Ba)));
    a.Aa && (b = b.concat(qc(a.Aa)));
    return b
}
function rc(a, b) {
    a.Z = sc(b, a.Z);
    a.Ba && rc(a.Ba, b);
    a.Aa && rc(a.Aa, b)
}
function sc(a, b) {
    if (!a.Va) return b.slice();
    for (var c = [], e = [], d = 0; d < b.length; d++) nc(b[d], a.Va, c, e, c, e);
    a.Ba && (c = sc(a.Ba, c));
    e = a.Aa ? sc(a.Aa, e) : [];
    return c.concat(e)
};
function tc() {
    this.Z = []
}
function uc(a) {
    var b = new tc;
    b.Ce(a);
    return b
}
tc.prototype = {
    l: function() {
        var a = new tc;
        a.Ce(this.Z.map(function(a) {
            return a.l()
        }));
        return a
    },
    Xf: function(a) {
        var b = new oc(this.l().Z);
        a = new oc(a.l().Z);
        rc(b, a);
        rc(a, b);
        a.Y();
        rc(a, b);
        a.Y();
        pc(b, qc(a));
        return uc(qc(b))
    },
    wa: function(a) {
        var b = new oc(this.l().Z);
        a = new oc(a.l().Z);
        b.Y();
        rc(b, a);
        rc(a, b);
        a.Y();
        rc(a, b);
        a.Y();
        pc(b, qc(a));
        b.Y();
        return uc(qc(b))
    },
    vf: function(a) {
        var b = new oc(this.l().Z);
        a = new oc(a.l().Z);
        b.Y();
        rc(a, b);
        a.Y();
        rc(b, a);
        rc(a, b);
        pc(b, qc(a));
        b.Y();
        return uc(qc(b))
    },
    inverse: function() {
        var a = this.l();
        a.Z.map(function(a) {
            a.uc()
        });
        return a
    },
    Ce: ca("Z")
};
function vc() {
    M.call(this);
    this.f = "indexer";
    this.bf = [];
    this.pl = [];
    this.Ka = {}
}
C(vc, M);
vc.prototype.add = function(a) {
    a == t && m(Error("Invalid object."));
    var b = window.JSON.stringify(a);
    b in this.Ka || (this.Ka[b] = this.bf.length, this.bf.push(a));
    return this.Ka[b]
};
vc.prototype.unique = v("bf");
function wc(a) {
    M.call(this);
    this.f = "file";
    this.$d = a;
    this.j = q
}
C(wc, M);
//xc  这个函数是X.loadable 在X.volume()中通过inject(this, new X.loadable())注入进来的
function xc() {
    this.$a = this.r = t
}
xc.prototype.__defineSetter__("file",
function(a) {
    if (a == t || la(a) && 0 == a.length) this.r = t;
    else {
        if (la(a)) {
            if (1 == a.length) {
                this.r = new wc(a[0]);
                return
            }
            this.r = Lb(a,
            function(a) {
                var c = new P;
                c.r = new wc(a);
                return c
            })
        } else this.r = new wc(a);
        this.$a = t
    }
});
xc.prototype.__defineGetter__("file",
function() {
    return ! this.r ? "": la(this.r) ? this.r.map(function(a) {
        return a.r.$d
    }) : this.r.$d
});
xc.prototype.__defineGetter__("filedata",
function() {
    return la(this.r) ? this.r.map(function(a) {
        return a.$a
    }) : this.$a
});
xc.prototype.__defineSetter__("filedata",
function(a) {
    if (a == t || la(a) && 0 == a.length) this.$a = t;
    if (la(a)) if (1 == a.length) this.$a = a[0];
    else {
        var b = this.r.length,
        c;
        for (c = 0; c < b; c++) this.r[c].$a = a[c]
    } else this.$a = a
});
function yc(a) {
    if ("function" == typeof a.Dd) return a.Dd();
    if (na(a)) return a.split("");
    if (ma(a)) {
        for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
        return b
    }
    return Oa(a)
};
function zc(a, b) {
    this.ga = {};
    this.S = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && m(Error("Uneven number of arguments"));
        for (var e = 0; e < c; e += 2) this.set(arguments[e], arguments[e + 1])
    } else a && this.df(a)
}
w = zc.prototype;
w.oa = 0;
w.Zf = 0;
w.sf = v("oa");
w.Dd = function() {
    Ac(this);
    for (var a = [], b = 0; b < this.S.length; b++) a.push(this.ga[this.S[b]]);
    return a
};
function Bc(a) {
    for (var b = 0; b < a.S.length; b++) {
        var c = a.S[b];
        if (Cc(a.ga, c) && a.ga[c] == u) return q
    }
    return u
}
w.clear = function() {
    this.ga = {};
    this.Zf = this.oa = this.S.length = 0
};
w.remove = function(a) {
    return Cc(this.ga, a) ? (delete this.ga[a], this.oa--, this.Zf++, this.S.length > 2 * this.oa && Ac(this), q) : u
};
function Ac(a) {
    if (a.oa != a.S.length) {
        for (var b = 0,
        c = 0; b < a.S.length;) {
            var e = a.S[b];
            Cc(a.ga, e) && (a.S[c++] = e);
            b++
        }
        a.S.length = c
    }
    if (a.oa != a.S.length) {
        for (var d = {},
        c = b = 0; b < a.S.length;) e = a.S[b],
        Cc(d, e) || (a.S[c++] = e, d[e] = 1),
        b++;
        a.S.length = c
    }
}
w.get = function(a, b) {
    return Cc(this.ga, a) ? this.ga[a] : b
};
w.set = function(a, b) {
    Cc(this.ga, a) || (this.oa++, this.S.push(a), this.Zf++);
    this.ga[a] = b
};
w.df = function(a) {
    var b;
    if (a instanceof zc) Ac(a),
    b = a.S.concat(),
    a = a.Dd();
    else {
        b = [];
        var c = 0,
        e;
        for (e in a) b[c++] = e;
        a = Oa(a)
    }
    for (c = 0; c < b.length; c++) this.set(b[c], a[c])
};
w.l = function() {
    return new zc(this)
};
w.Wf = function() {
    for (var a = new zc,
    b = 0; b < this.S.length; b++) {
        var c = this.S[b];
        a.set(this.ga[c], c)
    }
    return a
};
function Cc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
function Dc() {
    M.call(this);
    this.f = "colortable";
    this.Ka = new zc;
    Fa(this, new xc)
}
C(Dc, M);
Dc.prototype.add = function(a, b, c, e, d, f) { (!x(a) || !x(c) || !x(e) || !x(d) || !x(f)) && m(Error("Invalid color table entry."));
    this.Ka.set(a, [b, c, e, d, f]);
    this.j = q
};
Dc.prototype.get = function(a) {
    return this.Ka.get(a)
};
A("X.colortable.prototype.get", Dc.prototype.get);
function Ec(a, b, c) {
    this.x = ia(a) ? a: 0;
    this.y = ia(b) ? b: 0;
    this.d = ia(c) ? c: 0
}
Ec.prototype.l = function() {
    return new Ec(this.x, this.y, this.d)
};
function R(a, b, c) {
    this.x = a;
    this.y = b;
    this.d = c
}
C(R, Ec);
w = R.prototype;
w.l = function() {
    return new R(this.x, this.y, this.d)
};
w.Ib = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.d * this.d)
};
w.scale = function(a) {
    this.x *= a;
    this.y *= a;
    this.d *= a;
    return this
};
w.Y = function() {
    this.x = -this.x;
    this.y = -this.y;
    this.d = -this.d;
    return this
};
w.normalize = function() {
    return this.scale(1 / this.Ib())
};
w.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    this.d += a.d;
    return this
};
w.wa = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.d -= a.d;
    return this
};
function Fc(a, b) {
    var c = a.x - b.x,
    e = a.y - b.y,
    d = a.d - b.d;
    return Math.sqrt(c * c + e * e + d * d)
}
function Gc(a, b) {
    var c = a.x - b.x,
    e = a.y - b.y,
    d = a.d - b.d;
    return c * c + e * e + d * d
}
function Hc(a, b) {
    return new R(a.x + b.x, a.y + b.y, a.d + b.d)
}
function Ic(a, b) {
    return new R(a.y * b.d - a.d * b.y, a.d * b.x - a.x * b.d, a.x * b.y - a.y * b.x)
};
D.m = R;
w = D.m.prototype;
w.l = R.prototype.l;
w.Ib = R.prototype.Ib;
w.scale = R.prototype.scale;
w.Y = R.prototype.Y;
w.add = R.prototype.add;
w.wa = R.prototype.wa;
w.normalize = function() {
    var a = this.Ib();
    return 0 == a ? this.scale(0) : this.scale(1 / a)
};
D.m.ac = function(a, b) {
    return a.x * b.x + a.y * b.y + a.d * b.d
};
D.m.sc = Ic;
D.m.rf = Fc;
D.m.se = function(a, b, c) {
    return new R(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y), a.d + c * (b.d - a.d))
};
D.m.prototype.__defineGetter__("xx", v("x"));
D.m.prototype.__defineGetter__("yy", v("y"));
D.m.prototype.__defineGetter__("zz", v("d"));
A("X.vector", D.m);
A("X.vector.prototype.clone", D.m.prototype.l);
A("X.vector.prototype.magnitude", D.m.prototype.Ib);
A("X.vector.prototype.scale", D.m.prototype.scale);
A("X.vector.prototype.invert", D.m.prototype.Y);
A("X.vector.prototype.normalize", D.m.prototype.normalize);
A("X.vector.prototype.add", D.m.prototype.add);
A("X.vector.prototype.subtract", D.m.prototype.wa);
A("X.vector.dot", D.m.ac);
A("X.vector.cross", D.m.sc);
A("X.vector.distance", D.m.rf);
A("X.vector.lerp", D.m.se);
function Jc(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
}
Jc.prototype.BYTES_PER_ELEMENT = 8;
Jc.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};
Jc.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
    try {
        Jc.BYTES_PER_ELEMENT = 8
    } catch(Kc) {}
    Jc.prototype.BYTES_PER_ELEMENT = Jc.prototype.BYTES_PER_ELEMENT;
    Jc.prototype.set = Jc.prototype.set;
    Jc.prototype.toString = Jc.prototype.toString;
    A("Float64Array", Jc)
};
function Lc(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
}
Lc.prototype.BYTES_PER_ELEMENT = 4;
Lc.prototype.set = function(a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};
Lc.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Lc.BYTES_PER_ELEMENT = 4, Lc.prototype.BYTES_PER_ELEMENT = Lc.prototype.BYTES_PER_ELEMENT, Lc.prototype.set = Lc.prototype.set, Lc.prototype.toString = Lc.prototype.toString, A("Float32Array", Lc));
function Mc() {
    return new Float32Array(3)
}
function Nc(a, b, c) {
    var e = Mc();
    e[0] = a;
    e[1] = b;
    e[2] = c;
    return e
}
function Oc(a, b) {
    var c = a[0],
    e = a[1],
    d = a[2],
    c = 1 / Math.sqrt(c * c + e * e + d * d);
    b[0] = a[0] * c;
    b[1] = a[1] * c;
    b[2] = a[2] * c
};
function Pc() {
    return new Float32Array(4)
}
function Qc(a, b, c, e) {
    var d = Pc();
    d[0] = a;
    d[1] = b;
    d[2] = c;
    d[3] = e;
    return d
};
function Rc() {
    return new Float32Array(16)
}
function Sc() {
    var a = Rc();
    a[0] = a[5] = a[10] = a[15] = 1;
    return a
}
function Tc(a, b, c, e, d, f, g, h, l, j, k, n, s, r, y, z, F) {
    a[0] = b;
    a[1] = c;
    a[2] = e;
    a[3] = d;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = j;
    a[9] = k;
    a[10] = n;
    a[11] = s;
    a[12] = r;
    a[13] = y;
    a[14] = z;
    a[15] = F;
    return a
}
function Uc(a, b, c, e, d) {
    a[12] = b;
    a[13] = c;
    a[14] = e;
    a[15] = d;
    return a
}
function Vc(a, b, c) {
    b *= 4;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3]
}
function Wc(a, b, c) {
    b *= 4;
    c[0] = a[b];
    c[1] = a[b + 1];
    c[2] = a[b + 2];
    c[3] = a[b + 3]
}
function T(a, b, c, e, d, f) {
    a[b] = c;
    a[b + 4] = e;
    a[b + 8] = d;
    a[b + 12] = f
}
function Xc(a, b, c) {
    a[b] = c[0];
    a[b + 4] = c[1];
    a[b + 8] = c[2];
    a[b + 12] = c[3]
}
function Yc(a, b, c) {
    c[0] = a[b];
    c[1] = a[b + 4];
    c[2] = a[b + 8];
    c[3] = a[b + 12]
}
function $c(a, b, c) {
    var e = a[0],
    d = a[1],
    f = a[2],
    g = a[3],
    h = a[4],
    l = a[5],
    j = a[6],
    k = a[7],
    n = a[8],
    s = a[9],
    r = a[10],
    y = a[11],
    z = a[12],
    F = a[13],
    G = a[14];
    a = a[15];
    var H = b[0],
    B = b[1],
    E = b[2],
    I = b[3],
    N = b[4],
    Q = b[5],
    O = b[6],
    S = b[7],
    da = b[8],
    J = b[9],
    ba = b[10],
    ka = b[11],
    U = b[12],
    V = b[13],
    Ga = b[14];
    b = b[15];
    c[0] = e * H + h * B + n * E + z * I;
    c[1] = d * H + l * B + s * E + F * I;
    c[2] = f * H + j * B + r * E + G * I;
    c[3] = g * H + k * B + y * E + a * I;
    c[4] = e * N + h * Q + n * O + z * S;
    c[5] = d * N + l * Q + s * O + F * S;
    c[6] = f * N + j * Q + r * O + G * S;
    c[7] = g * N + k * Q + y * O + a * S;
    c[8] = e * da + h * J + n * ba + z * ka;
    c[9] = d * da + l * J + s * ba + F * ka;
    c[10] = f * da + j * J + r * ba + G * ka;
    c[11] = g * da + k * J + y * ba + a * ka;
    c[12] = e * U + h * V + n * Ga + z * b;
    c[13] = d * U + l * V + s * Ga + F * b;
    c[14] = f * U + j * V + r * Ga + G * b;
    c[15] = g * U + k * V + y * Ga + a * b;
    return c
}
function ad(a, b) {
    var c = a[0],
    e = a[1],
    d = a[2],
    f = a[3],
    g = a[4],
    h = a[5],
    l = a[6],
    j = a[7],
    k = a[8],
    n = a[9],
    s = a[10],
    r = a[11],
    y = a[12],
    z = a[13],
    F = a[14],
    G = a[15],
    H = c * h - e * g,
    B = c * l - d * g,
    E = c * j - f * g,
    I = e * l - d * h,
    N = e * j - f * h,
    Q = d * j - f * l,
    O = k * z - n * y,
    S = k * F - s * y,
    da = k * G - r * y,
    J = n * F - s * z,
    ba = n * G - r * z,
    ka = s * G - r * F,
    U = H * ka - B * ba + E * J + I * da - N * S + Q * O;
    if (0 == U) return u;
    U = 1 / U;
    b[0] = (h * ka - l * ba + j * J) * U;
    b[1] = ( - e * ka + d * ba - f * J) * U;
    b[2] = (z * Q - F * N + G * I) * U;
    b[3] = ( - n * Q + s * N - r * I) * U;
    b[4] = ( - g * ka + l * da - j * S) * U;
    b[5] = (c * ka - d * da + f * S) * U;
    b[6] = ( - y * Q + F * E - G * B) * U;
    b[7] = (k * Q - s * E + r * B) * U;
    b[8] = (g * ba - h * da + j * O) * U;
    b[9] = ( - c * ba + e * da - f * O) * U;
    b[10] = (y * N - z * E + G * H) * U;
    b[11] = ( - k * N + n * E - r * H) * U;
    b[12] = ( - g * J + h * S - l * O) * U;
    b[13] = (c * J - e * S + d * O) * U;
    b[14] = ( - y * I + z * B - F * H) * U;
    b[15] = (k * I - n * B + s * H) * U;
    return q
}
function bd(a, b, c) {
    var e = b[0],
    d = b[1];
    b = b[2];
    c[0] = e * a[0] + d * a[4] + b * a[8] + a[12];
    c[1] = e * a[1] + d * a[5] + b * a[9] + a[13];
    c[2] = e * a[2] + d * a[6] + b * a[10] + a[14]
}
function cd(a, b, c) {
    var e = b[0],
    d = b[1],
    f = b[2];
    b = b[3];
    c[0] = e * a[0] + d * a[4] + f * a[8] + b * a[12];
    c[1] = e * a[1] + d * a[5] + f * a[9] + b * a[13];
    c[2] = e * a[2] + d * a[6] + f * a[10] + b * a[14];
    c[3] = e * a[3] + d * a[7] + f * a[11] + b * a[15];
    return c
}
function dd(a, b, c, e) {
    return Uc(a, a[0] * b + a[4] * c + a[8] * e + a[12], a[1] * b + a[5] * c + a[9] * e + a[13], a[2] * b + a[6] * c + a[10] * e + a[14], a[3] * b + a[7] * c + a[11] * e + a[15])
}
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
D.g = {};
D.g.Xg = function(a, b, c, e) {
    c = c.wa(b);
    c.normalize();
    e = D.m.sc(c, e);
    e.normalize();
    var d = D.m.sc(e, c);
    d.normalize();
    c.Y();
    T(a, 0, e.x, e.y, e.d, 0);
    T(a, 1, d.x, d.y, d.d, 0);
    T(a, 2, c.x, c.y, c.d, 0);
    dd(a, -b.x, -b.y, -b.d);
    return a
};
D.g.ba = function(a, b, c, e) {
    var d = 1 / (b * a[3] + c * a[7] + e * a[11] + a[15]);
    return new D.m((b * a[0] + c * a[4] + e * a[8] + a[12]) * d, (b * a[1] + c * a[5] + e * a[9] + a[13]) * d, (b * a[2] + c * a[6] + e * a[10] + a[14]) * d)
};
D.g.nk = function(a, b, c) {
    var e = new Float32Array(4),
    d = new Float32Array(4);
    Yc(a, b, e);
    Yc(a, c, d);
    Xc(a, b, d);
    Xc(a, c, e);
    return a
};
D.g.mk = function(a, b, c) {
    var e = new Float32Array(4),
    d = new Float32Array(4);
    Wc(a, b, e);
    Wc(a, c, d);
    Vc(a, b, d);
    Vc(a, c, e);
    return a
};
D.g.Ed = Sc;
D.g.l = function(a) {
    var b = Rc();
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b
};
D.g.Wf = function(a, b) {
    if (b == a) {
        var c = a[1],
        e = a[2],
        d = a[3],
        f = a[6],
        g = a[7],
        h = a[11];
        b[1] = a[4];
        b[2] = a[8];
        b[3] = a[12];
        b[4] = c;
        b[6] = a[9];
        b[7] = a[13];
        b[8] = e;
        b[9] = f;
        b[11] = a[14];
        b[12] = d;
        b[13] = g;
        b[14] = h
    } else b[0] = a[0],
    b[1] = a[4],
    b[2] = a[8],
    b[3] = a[12],
    b[4] = a[1],
    b[5] = a[5],
    b[6] = a[9],
    b[7] = a[13],
    b[8] = a[2],
    b[9] = a[6],
    b[10] = a[10],
    b[11] = a[14],
    b[12] = a[3],
    b[13] = a[7],
    b[14] = a[11],
    b[15] = a[15];
    return b
};
D.g.ti = function(a) {
    var b = a[0],
    c = a[1],
    e = a[2],
    d = a[3],
    f = a[4],
    g = a[5],
    h = a[6],
    l = a[7],
    j = a[8],
    k = a[9],
    n = a[10],
    s = a[11],
    r = a[12],
    y = a[13],
    z = a[14];
    a = a[15];
    return (b * g - c * f) * (n * a - s * z) - (b * h - e * f) * (k * a - s * y) + (b * l - d * f) * (k * z - n * y) + (c * h - e * g) * (j * a - s * r) - (c * l - d * g) * (j * z - n * r) + (e * l - d * h) * (j * y - k * r)
};
D.g.Y = ad;
D.g.yf = function(a, b, c, e, d) {
    var f = b / 2;
    b = d - e;
    var g = Math.sin(f);
    if (0 == b || 0 == g || 0 == c) return a;
    f = Math.cos(f) / g;
    return Tc(a, f / c, 0, 0, 0, 0, f, 0, 0, 0, 0, -(d + e) / b, -1, 0, 0, -(2 * e * d) / b, 0)
};
D.g.dj = function(a, b, c, e, d, f, g) {
    return Tc(a, 2 * f / (c - b), 0, 0, 0, 0, 2 * f / (d - e), 0, 0, (c + b) / (c - b), (d + e) / (d - e), -(g + f) / (g - f), -1, 0, 0, -(2 * g * f) / (g - f), 0)
};
D.g.ej = function(a, b, c, e, d, f, g) {
    return Tc(a, 2 / (c - b), 0, 0, 0, 0, 2 / (d - e), 0, 0, 0, 0, -2 / (g - f), 0, -(c + b) / (c - b), -(d + e) / (d - e), -(g + f) / (g - f), 1)
};
D.g.multiply = $c;
D.g.ah = cd;
D.g.translate = dd;
D.g.scale = function(a, b, c, e) {
    return Tc(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * e, a[9] * e, a[10] * e, a[11] * e, a[12], a[13], a[14], a[15])
};
D.g.rotate = function(a, b, c, e, d) {
    var f = a[0],
    g = a[1],
    h = a[2],
    l = a[3],
    j = a[4],
    k = a[5],
    n = a[6],
    s = a[7],
    r = a[8],
    y = a[9],
    z = a[10],
    F = a[11],
    G = Math.cos(b),
    H = Math.sin(b),
    B = 1 - G;
    b = c * c * B + G;
    var E = c * e * B + d * H,
    I = c * d * B - e * H,
    N = c * e * B - d * H,
    Q = e * e * B + G,
    O = e * d * B + c * H,
    S = c * d * B + e * H;
    c = e * d * B - c * H;
    d = d * d * B + G;
    return Tc(a, f * b + j * E + r * I, g * b + k * E + y * I, h * b + n * E + z * I, l * b + s * E + F * I, f * N + j * Q + r * O, g * N + k * Q + y * O, h * N + n * Q + z * O, l * N + s * Q + F * O, f * S + j * c + r * d, g * S + k * c + y * d, h * S + n * c + z * d, l * S + s * c + F * d, a[12], a[13], a[14], a[15])
};
D.g.ye = function(a, b) {
    var c = a[4],
    e = a[5],
    d = a[6],
    f = a[7],
    g = a[8],
    h = a[9],
    l = a[10],
    j = a[11],
    k = Math.cos(b),
    n = Math.sin(b);
    a[4] = c * k + g * n;
    a[5] = e * k + h * n;
    a[6] = d * k + l * n;
    a[7] = f * k + j * n;
    a[8] = c * -n + g * k;
    a[9] = e * -n + h * k;
    a[10] = d * -n + l * k;
    a[11] = f * -n + j * k;
    return a
};
D.g.ze = function(a, b) {
    var c = a[0],
    e = a[1],
    d = a[2],
    f = a[3],
    g = a[8],
    h = a[9],
    l = a[10],
    j = a[11],
    k = Math.cos(b),
    n = Math.sin(b);
    a[0] = c * k + g * -n;
    a[1] = e * k + h * -n;
    a[2] = d * k + l * -n;
    a[3] = f * k + j * -n;
    a[8] = c * n + g * k;
    a[9] = e * n + h * k;
    a[10] = d * n + l * k;
    a[11] = f * n + j * k;
    return a
};
D.g.Ae = function(a, b) {
    var c = a[0],
    e = a[1],
    d = a[2],
    f = a[3],
    g = a[4],
    h = a[5],
    l = a[6],
    j = a[7],
    k = Math.cos(b),
    n = Math.sin(b);
    a[0] = c * k + g * n;
    a[1] = e * k + h * n;
    a[2] = d * k + l * n;
    a[3] = f * k + j * n;
    a[4] = c * -n + g * k;
    a[5] = e * -n + h * k;
    a[6] = d * -n + l * k;
    a[7] = f * -n + j * k;
    return a
};
A("X.matrix.identity", D.g.Ed);
A("X.matrix.clone", D.g.l);
A("X.matrix.transpose", D.g.Wf);
A("X.matrix.determinant", D.g.ti);
A("X.matrix.invert", D.g.Y);
A("X.matrix.multiply", D.g.multiply);
A("X.matrix.multiplyByVector", D.g.ba);
A("X.matrix.multiplyByVec4", D.g.ah);
A("X.matrix.makePerspective", D.g.yf);
A("X.matrix.makeFrustum", D.g.dj);
A("X.matrix.makeOrtho", D.g.ej);
A("X.matrix.makeLookAt", D.g.Xg);
A("X.matrix.translate", D.g.translate);
A("X.matrix.scale", D.g.scale);
A("X.matrix.rotate", D.g.rotate);
A("X.matrix.rotateX", D.g.ye);
A("X.matrix.rotateY", D.g.ze);
A("X.matrix.rotateZ", D.g.Ae);
A("X.matrix.swapRows", D.g.nk);
A("X.matrix.swapCols", D.g.mk);
function ed() {
    M.call(this);
    this.f = "transform";
    this.Q = D.g.Ed()
}
C(ed, M);
ed.prototype.__defineGetter__("matrix", v("Q"));
ed.prototype.__defineSetter__("matrix",
function(a) { (a == t || !(a instanceof Float32Array)) && m(Error("Invalid matrix."));
    this.Q = a;
    this.q()
});
w = ed.prototype;
w.ye = function(a) { (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.ye(this.Q, a * Math.PI / 180);
    this.q()
};
w.ze = function(a) { (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.ze(this.Q, a * Math.PI / 180);
    this.q()
};
w.Ae = function(a) { (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.Ae(this.Q, a * Math.PI / 180);
    this.q()
};
w.Dh = function(a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, a, 0, 0);
    this.q()
};
w.Eh = function(a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, 0, a, 0);
    this.q()
};
w.Fh = function(a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, 0, 0, a);
    this.q()
};
function fd(a, b, c) {
    a.Q[b + 4 * c] *= -1;
    a.q()
}
w.Bi = function() {
    fd(this, 0, 0)
};
w.Ci = function() {
    fd(this, 1, 1)
};
w.Di = function() {
    fd(this, 2, 2)
};
w.q = function() {
    this.j = q
};
A("X.transform", ed);
A("X.transform.prototype.rotateX", ed.prototype.ye);
A("X.transform.prototype.rotateY", ed.prototype.ze);
A("X.transform.prototype.rotateZ", ed.prototype.Ae);
A("X.transform.prototype.translateX", ed.prototype.Dh);
A("X.transform.prototype.translateY", ed.prototype.Eh);
A("X.transform.prototype.translateZ", ed.prototype.Fh);
A("X.transform.prototype.flipX", ed.prototype.Bi);
A("X.transform.prototype.flipY", ed.prototype.Ci);
A("X.transform.prototype.flipZ", ed.prototype.Di);
A("X.transform.prototype.modified", ed.prototype.q);
function gd() {
    M.call(this);
    this.f = "texture";
    this.Wb = this.ib = this.r = t;
    this.We = this.Xe = 0;
    this.hg = u;
    Fa(this, new xc)
}
C(gd, M);
gd.prototype.__defineSetter__("rawData",
function(a) {
    this.Wb = a;
    this.j = q
});
gd.prototype.__defineSetter__("rawDataHeight",
function(a) {
    this.We = a;
    this.j = q
});
gd.prototype.__defineSetter__("rawDataWidth",
function(a) {
    this.Xe = a;
    this.j = q
});
gd.prototype.__defineSetter__("grayscale",
function(a) {
    this.hg = a;
    this.j = q
});
A("X.texture", gd);
function W(a, b) {
    M.call(this);
    this.f = "triplets";
    this.mb = Infinity;
    this.jb = -Infinity;
    this.nb = Infinity;
    this.kb = -Infinity;
    this.ob = Infinity;
    this.lb = -Infinity;
    this.Rd = [0, 0, 0];
    this.gg = q;
    this.C = 0;
    this.da = new Float32Array(a);
    b != t && (this.da = b.da.subarray(0, b.da.length), this.C = this.da.length, this.mb = b.mb, this.jb = b.jb, this.nb = b.nb, this.kb = b.kb, this.ob = b.ob, this.lb = b.lb, this.Rd = b.Rd.slice(), this.gg = u)
}
C(W, M);
w = W.prototype;
w.add = function(a, b, c) {
    this.mb = Math.min(this.mb, a);
    this.jb = Math.max(this.jb, a);
    this.nb = Math.min(this.nb, b);
    this.kb = Math.max(this.kb, b);
    this.ob = Math.min(this.ob, c);
    this.lb = Math.max(this.lb, c);
    this.Rd = [(this.mb + this.jb) / 2, (this.nb + this.kb) / 2, (this.ob + this.lb) / 2];
    this.gg = u;
    this.j = q;
    this.da[this.C++] = a;
    this.da[this.C++] = b;
    this.da[this.C++] = c;
    return this.C / 3
};
w.Jb = function() {
    if (this.C != this.da.length) {
        var a = new Float32Array(this.C);
        a.set(this.da.subarray(0, this.C));
        this.da = a
    }
};
w.get = function(a) {
    a *= 3;
    return [this.da[a], this.da[a + 1], this.da[a + 2]]
};
w.remove = function() {
    m(Error("Not implemented."))
};
w.clear = function() {
    this.da = new Float32Array(this.da.length);
    this.j = q
};
W.prototype.__defineGetter__("count",
function() {
    this.Jb();
    return this.da.length / 3
});
W.prototype.__defineGetter__("length",
function() {
    this.Jb();
    return this.da.length
});
A("X.triplets", W);
A("X.triplets.prototype.add", W.prototype.add);
A("X.triplets.prototype.resize", W.prototype.Jb);
A("X.triplets.prototype.get", W.prototype.get);
A("X.triplets.prototype.remove", W.prototype.remove);
A("X.triplets.prototype.clear", W.prototype.clear);
function hd() {
    this.Ia = id;
    this.ja = new ed;
    this.w = [1, 1, 1];
    this.nc = this.G = this.pa = this.n = this.h = t;
    this.Nc = [];
    this.O = q;
    this.Lc = this.sd = 1;
    this.Dc = t;
    this.jd = u;
    this.za = 1;
    this.ya = 0;
    this.rd = q
}
var id = "TRIANGLES";
hd.prototype.__defineSetter__("type",
function(a) {
    return this.Ia = a
});
hd.prototype.__defineGetter__("type", v("Ia"));
hd.prototype.__defineGetter__("texture",
function() {
    this.G || (this.G = new gd);
    return this.G
});
hd.prototype.__defineGetter__("transform", v("ja"));
hd.prototype.__defineGetter__("points", v("h"));
hd.prototype.__defineSetter__("points", ca("h"));
hd.prototype.__defineGetter__("normals", v("n"));
hd.prototype.__defineSetter__("normals", ca("n"));
hd.prototype.__defineGetter__("colors", v("pa"));
hd.prototype.__defineSetter__("colors", ca("pa"));
hd.prototype.__defineGetter__("color", v("w"));
hd.prototype.__defineSetter__("color",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid color."));
    for (var b = this.c,
    c = b.length,
    e = 0,
    e = 0; e < c; e++) b[e].color = a;
    this.w = a;
    this.j = q
});
hd.prototype.__defineGetter__("opacity", v("za"));
hd.prototype.__defineSetter__("opacity",
function(a) { (!x(a) || 1 < a || 0 > a) && m(Error("Invalid opacity."));
    for (var b = this.c,
    c = b.length,
    e = 0,
    e = 0; e < c; e++) b[e] != t && (b[e].opacity = a);
    this.za = a;
    this.j = q
});
hd.prototype.__defineGetter__("caption", v("Dc"));
hd.prototype.__defineSetter__("caption",
function(a) {
    this.Dc = a;
    this.j = q
});
hd.prototype.__defineGetter__("visible", v("O"));
hd.prototype.__defineSetter__("visible",
function(a) {
    for (var b = this.c,
    c = b.length,
    e = 0,
    e = 0; e < c; e++) b[e] != t && (b[e].visible = a);
    this.O = a;
    this.j = q
});
hd.prototype.__defineGetter__("pointsize", v("sd"));
hd.prototype.__defineSetter__("pointsize",
function(a) {
    x(a) || m(Error("Invalid point size."));
    this.sd = a;
    this.j = q
});
hd.prototype.__defineGetter__("magicmode", v("jd"));
hd.prototype.__defineSetter__("magicmode",
function(a) {
    "boolean" != typeof a && m(Error("Invalid magic mode setting."));
    this.jd = a;
    this.j = q
});
hd.prototype.__defineGetter__("linewidth", v("Lc"));
hd.prototype.__defineSetter__("linewidth",
function(a) {
    x(a) || m(Error("Invalid line width."));
    this.Lc = a;
    this.j = q
});
hd.prototype.__defineGetter__("pickable", v("rd"));
hd.prototype.__defineSetter__("pickable",
function(a) {
    "boolean" != typeof a && m(Error("Invalid pickable setting."));
    this.rd = a;
    this.j = q
});
hd.prototype.__defineGetter__("textureCoordinateMap", v("nc"));
hd.prototype.__defineSetter__("textureCoordinateMap", ca("sl"));
function jd() {
    this.ra = Infinity;
    this.U = this.ia = -Infinity;
    this.W = Infinity;
    this.Rb = [0, 0, 0];
    this.Pb = [1, 1, 1]
}
jd.prototype.__defineGetter__("lowerThreshold", v("U"));
jd.prototype.__defineSetter__("lowerThreshold", ca("U"));
jd.prototype.__defineGetter__("upperThreshold", v("W"));
jd.prototype.__defineSetter__("upperThreshold", ca("W"));
jd.prototype.__defineGetter__("min", v("ra"));
jd.prototype.__defineGetter__("max", v("ia"));
jd.prototype.__defineGetter__("minColor", v("Rb"));
jd.prototype.__defineSetter__("minColor",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid min. color."));
    this.Rb = a
});
jd.prototype.__defineGetter__("maxColor", v("Pb"));
jd.prototype.__defineSetter__("maxColor",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid max. color."));
    this.Pb = a
});
function kd() {
    M.call(this);
    this.f = "scalars";
    this.dd = this.I = t;
    this.ug = q;
    this.Le = 0;
    Fa(this, new xc);
    Fa(this, new jd);
    this.Rb = [0, 1, 0];
    this.Pb = [1, 0, 0]
}
C(kd, M);
kd.prototype.__defineGetter__("array", v("I"));
kd.prototype.__defineSetter__("array",
function(a) {
    this.dd = this.I = a;
    this.j = q
});
kd.prototype.__defineGetter__("interpolation", v("Le"));
kd.prototype.__defineSetter__("interpolation", ca("Le"));
A("X.scalars", kd);
function Y(a) {
    M.call(this);
    this.f = "object";
    this.c = [];
    this.F = this.xa = t;
    Fa(this, new hd);
    a != t && this.rc(a)
}
C(Y, M);
Y.prototype.rc = function(a) {
    this.Ia = a.Ia;
    this.ja = new ed;
    this.ja.Q = new Float32Array(a.ja.Q);
    this.w = a.w.slice();
    a.h && (this.h = new W(a.h.length, a.h));
    a.n && (this.n = new W(a.n.length, a.n));
    a.pa && (this.pa = new W(a.pa.length, a.pa));
    this.G = a.G;
    this.nc = a.nc;
    a.r && (this.r = new wc((new String(a.r.$d)).toString()));
    this.za = a.za;
    this.c.length = 0;
    var b = a.c;
    if (b) for (var c = b.length,
    e = 0,
    e = 0; e < c; e++) this.c.push(new D[b[e].f](b[e]));
    this.O = a.O;
    this.sd = a.sd;
    this.Lc = a.Lc;
    a.Dc && (this.Dc = (new String(a.Dc)).toString());
    this.jd = a.jd;
    this.rd = a.rd;
    this.Nc = a.Nc.slice();
    this.j = q
};
Y.prototype.__defineGetter__("colortable",
function() {
    this.xa || (this.xa = new Dc);
    return this.xa
});
Y.prototype.__defineGetter__("scalars",
function() {
    this.F || (this.F = new kd);
    return this.F
});
Y.prototype.__defineGetter__("children", v("c"));
//X.object.prototype.modified()
Y.prototype.q = function() {
    var a = new ld;
    a.D = this;
    this.dispatchEvent(a)
};
Y.prototype.remove = function() {
    var a = new md;
    a.D = this;
    this.dispatchEvent(a)
};
Y.prototype.Ta = function() {
    dc(this);
    if (0 < this.c.length) for (var a = this.c,
    b = a.length,
    c = 0,
    c = 0; c < b; c++)"undefined" != typeof a[c] && this.c[c].Ta();
    this.c.length = 0;
    this.F = this.xa = t
};
function nd(a, b) { (a == t || b == t || !(a instanceof Y) || !(b instanceof Y)) && m(Error("Fatal: Two valid X.objects are required for comparison."));
    return 1 == a.za ? -1 : 1 == b.za ? 1 : a.ya != t && b.ya != t && a.ya > b.ya ? -1 : 1
}
A("X.object", Y);
A("X.object.prototype.modified", Y.prototype.q);
A("X.object.prototype.remove", Y.prototype.remove);
A("X.object.prototype.destroy", Y.prototype.Ta);
function od() {}
function pd(a) {
    for (var b = a.h.count,
    c = [], e = 0, e = 0; e < b; e += 3) {
        var d = a.h.get(e),
        f = a.h.get(e + 1),
        g = a.h.get(e + 2),
        h = a.n.get(e),
        l = a.n.get(e + 1),
        j = a.n.get(e + 2),
        k = a.w;
        a.pa && 0 < a.pa.length && (k = a.pa.get(e));
        var n = [];
        n.push(new kc(d, h));
        n.push(new kc(f, l));
        n.push(new kc(g, j));
        c.push(new mc(n, k))
    }
    return uc(c)
}
function qd(a, b) { (b == t || !(b instanceof tc)) && m(Error("Invalid CSG object."));
    var c = new vc,
    e = [];
    Lb(b.Z,
    function(a) {
        var b = [],
        g = a.De,
        b = Lb(a.Lb,
        function(a) {
            a.color = g;
            return c.add(a)
        });
        for (a = a = 2; a < b.length; a++) e.push([b[0], b[a - 1], b[a]])
    }.bind(a));
    a.Vh = Lb(c.unique(),
    function(a) {
        return [a.Wa.x(), a.Wa.y(), a.Wa.d()]
    });
    a.Uh = Lb(c.unique(),
    function(a) {
        return [a.va.x(), a.va.y(), a.va.d()]
    });
    a.Th = Lb(c.unique(),
    function(a) {
        return ! a.color ? t: [a.color[0], a.color[1], a.color[2]]
    });
    a.h = new W(9 * e.length);
    a.n = new W(9 * e.length);
    a.pa = new W(9 * e.length);
    Lb(e,
    function(a) {
        var b = a[0],
        c = a[1];
        a = a[2];
        var e = this.Vh,
        l = this.Uh,
        j = this.Th;
        this.h.add(e[b][0], e[b][1], e[b][2]);
        this.h.add(e[c][0], e[c][1], e[c][2]);
        this.h.add(e[a][0], e[a][1], e[a][2]);
        this.n.add(l[b][0], l[b][1], l[b][2]);
        this.n.add(l[c][0], l[c][1], l[c][2]);
        this.n.add(l[a][0], l[a][1], l[a][2]);
        j[b] && this.pa.add(j[b][0], j[b][1], j[b][2]);
        j[c] && this.pa.add(j[c][0], j[c][1], j[c][2]);
        j[a] && this.pa.add(j[a][0], j[a][1], j[a][2])
    }.bind(a));
    0 == a.pa.C && (a.pa = t);
    a.Ia = id
}
od.prototype.Xf = function(a) { (a == t || !(a instanceof tc) && !(a instanceof Y)) && m(Error("Invalid object."));
    var b = a;
    a instanceof Y && (b = pd(b));
    a = new Y;
    Fa(a, new od);
    qd(a, pd(this).Xf(b));
    return a
};
od.prototype.wa = function(a) { (a == t || !(a instanceof tc) && !(a instanceof Y)) && m(Error("Invalid object."));
    var b = a;
    a instanceof Y && (b = pd(b));
    a = new Y;
    Fa(a, new od);
    qd(a, pd(this).wa(b));
    return a
};
od.prototype.vf = function(a) { (a == t || !(a instanceof tc) && !(a instanceof Y)) && m(Error("Invalid object."));
    var b = a;
    a instanceof Y && (b = pd(b));
    a = new Y;
    Fa(a, new od);
    qd(a, pd(this).vf(b));
    return a
};
od.prototype.inverse = function() {
    var a = new Y;
    Fa(a, new od);
    qd(a, pd(this).inverse());
    return a
};
A("X.constructable", od);
A("X.constructable.prototype.intersect", od.prototype.vf);
A("X.constructable.prototype.inverse", od.prototype.inverse);
A("X.constructable.prototype.subtract", od.prototype.wa);
A("X.constructable.prototype.union", od.prototype.Xf);
function rd(a) {
    Rb.call(this, a);
    this.f = "event"
}
C(rd, Rb);
var sd = ic("pan"),
td = ic("rotate"),
ud = ic("zoom"),
vd = ic("scroll");
ic("render");
var wd = ic("resetview"),
xd = ic("windowlevel"),
yd = ic("modified"),
zd = ic("remove"),
Ad = ic("progress"),
Bd = ic("hover"),
Cd = ic("hover_end"),
Dd = ic("computing"),
Ed = ic("computing_end"),
Fd = ic("computing_progress");
function Gd() {
    rd.call(this, xd);
    this.Qe = this.cf = 0
}
C(Gd, rd);
function Hd() {
    rd.call(this, sd);
    this.ya = new D.m(0, 0, 0)
}
C(Hd, rd);
function Id() {
    rd.call(this, td);
    this.ya = new D.m(0, 0, 0)
}
C(Id, rd);
function Jd() {
    rd.call(this, ud);
    this.hb = this.vb = u
}
C(Jd, rd);
function Kd() {
    rd.call(this, vd);
    this.V = u
}
C(Kd, rd);
function Ld() {
    rd.call(this, Bd);
    this.ge = this.fe = 0
}
C(Ld, rd);
function Md() {
    rd.call(this, Cd)
}
C(Md, rd);
function Nd() {
    rd.call(this, wd)
}
C(Nd, rd);
function ld() {
    rd.call(this, yd);
    this.v = this.D = t
}
C(ld, rd);
function md() {
    rd.call(this, zd);
    this.v = this.D = t
}
C(md, rd);
function Od() {
    rd.call(this, Ad);
    this.Ad = 0
}
C(Od, rd);
function Pd() {
    rd.call(this, Dd);
    this.D = t
}
C(Pd, rd);
function Qd() {
    rd.call(this, Fd);
    this.Ad = 0
}
C(Qd, rd);
function Rd() {
    rd.call(this, Ed);
    this.D = t
}
C(Rd, rd);
A("X.event.events.PAN", sd);
A("X.event.events.ROTATE", td);
A("X.event.events.ZOOM", ud);
A("X.event.events.SCROLL", vd);
function Sd(a, b, c) {
    a == t && m(Error("Invalid GL Buffer."));
    b == t && m(Error("Invalid number of items."));
    c == t && m(Error("Invalid item size."));
    M.call(this);
    this.f = "buffer";
    this.P = a;
    this.ed = b;
    this.Ob = c
}
C(Sd, M);
var Td;
function Ud(a, b) {
    var c;
    c = a.className;
    c = na(c) && c.match(/\S+/g) || [];
    for (var e = Ob(arguments, 1), d = c.length + e.length, f = c, g = 0; g < e.length; g++) 0 <= Ib(f, e[g]) || f.push(e[g]);
    a.className = c.join(" ");
    return c.length == d
};
function Vd(a, b) {
    this.width = a;
    this.height = b
}
w = Vd.prototype;
w.l = function() {
    return new Vd(this.width, this.height)
};
w.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
w.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
w.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
w.scale = function(a, b) {
    var c = x(b) ? b: a;
    this.width *= a;
    this.height *= c;
    return this
};
var Wd = !K || K && 9 <= Eb; ! jb && !K || K && K && 9 <= Eb || jb && Cb("1.9.1");
K && Cb("9");
function Xd(a, b) {
    this.x = ia(a) ? a: 0;
    this.y = ia(b) ? b: 0
}
w = Xd.prototype;
w.l = function() {
    return new Xd(this.x, this.y)
};
function Yd(a, b) {
    return new Xd(a.x - b.x, a.y - b.y)
}
w.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
w.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
w.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
w.translate = function(a, b) {
    a instanceof Xd ? (this.x += a.x, this.y += a.y) : (this.x += a, x(b) && (this.y += b));
    return this
};
w.scale = function(a, b) {
    var c = x(b) ? b: a;
    this.x *= a;
    this.y *= c;
    return this
};
function Zd(a) {
    return a ? new $d(ae(a)) : Td || (Td = new $d)
}
function be(a) {
    return na(a) ? document.getElementById(a) : a
}
var ce = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function de(a, b, c) {
    return ee(document, arguments)
}
function ee(a, b) {
    var c = b[0],
    e = b[1];
    if (!Wd && e && (e.name || e.type)) {
        c = ["<", c];
        e.name && c.push(' name="', Ra(e.name), '"');
        if (e.type) {
            c.push(' type="', Ra(e.type), '"');
            var d = {};
            Qa(d, e);
            delete d.type;
            e = d
        }
        c.push(">");
        c = c.join("")
    }
    var f = a.createElement(c);
    e && (na(e) ? f.className = e: la(e) ? Ud.apply(t, [f].concat(e)) : Na(e,
    function(a, b) {
        "style" == b ? f.style.cssText = a: "class" == b ? f.className = a: "for" == b ? f.htmlFor = a: b in ce ? f.setAttribute(ce[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? f.setAttribute(b, a) : f[b] = a
    }));
    if (2 < b.length) {
        e = function(b) {
            b && f.appendChild(na(b) ? a.createTextNode(b) : b)
        };
        for (c = 2; c < b.length; c++) {
            var g = b[c];
            if (ma(g) && !(pa(g) && 0 < g.nodeType)) {
                var d = Jb,
                h;
                a: {
                    if ((h = g) && "number" == typeof h.length) {
                        if (pa(h)) {
                            h = "function" == typeof h.item || "string" == typeof h.item;
                            break a
                        }
                        if (oa(h)) {
                            h = "function" == typeof h.item;
                            break a
                        }
                    }
                    h = u
                }
                if (h) if (h = g.length, 0 < h) {
                    for (var l = Array(h), j = 0; j < h; j++) l[j] = g[j];
                    g = l
                } else g = [];
                d(g, e)
            } else e(g)
        }
    }
    return f
}
function fe(a) {
    return "CSS1Compat" == a.compatMode
}
function ge(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}
function he(a) {
    for (; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
}
function ie(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}
function ae(a) {
    return 9 == a.nodeType ? a: a.ownerDocument || a.document
}
function $d(a) {
    this.ka = a || fa.document || document
}
w = $d.prototype;
w.ne = Zd;
w.t = function(a) {
    return na(a) ? this.ka.getElementById(a) : a
};
w.Lh = $d.prototype.t;
w.Wc = function(a, b, c) {
    return ee(this.ka, arguments)
};
w.createElement = function(a) {
    return this.ka.createElement(a)
};
w.createTextNode = function(a) {
    return this.ka.createTextNode(String(a))
};
function je(a) {
    return fe(a.ka)
}
function ke(a) {
    var b = a.ka;
    a = !lb && fe(b) ? b.documentElement: b.body;
    b = b.parentWindow || b.defaultView;
    return K && Cb("10") && b.pageYOffset != a.scrollTop ? new Xd(a.scrollLeft, a.scrollTop) : new Xd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
w.appendChild = function(a, b) {
    a.appendChild(b)
};
w.contains = ie;
function le(a, b, c, e) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e
}
w = le.prototype;
w.l = function() {
    return new le(this.top, this.right, this.bottom, this.left)
};
w.contains = function(a) {
    return ! this || !a ? u: a instanceof le ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
w.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
w.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
w.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
w.translate = function(a, b) {
    a instanceof Xd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, x(b) && (this.top += b, this.bottom += b));
    return this
};
w.scale = function(a, b) {
    var c = x(b) ? b: a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
function me(a, b, c, e) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = e
}
w = me.prototype;
w.l = function() {
    return new me(this.left, this.top, this.width, this.height)
};
w.Tg = function(a) {
    var b = Math.max(this.left, a.left),
    c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var e = Math.max(this.top, a.top);
        a = Math.min(this.top + this.height, a.top + a.height);
        if (e <= a) return this.left = b,
        this.top = e,
        this.width = c - b,
        this.height = a - e,
        q
    }
    return u
};
w.contains = function(a) {
    return a instanceof me ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height: a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
function ne(a, b) {
    var c = b.x < a.left ? a.left - b.x: Math.max(b.x - (a.left + a.width), 0),
    e = b.y < a.top ? a.top - b.y: Math.max(b.y - (a.top + a.height), 0);
    return c * c + e * e
}
w.rf = function(a) {
    return Math.sqrt(ne(this, a))
};
w.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
w.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
w.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
w.translate = function(a, b) {
    a instanceof Xd ? (this.left += a.x, this.top += a.y) : (this.left += a, x(b) && (this.top += b));
    return this
};
w.scale = function(a, b) {
    var c = x(b) ? b: a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
function oe(a, b) {
    var c = ae(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, t)) ? c[b] || c.getPropertyValue(b) || "": ""
}
function pe(a, b) {
    return oe(a, b) || (a.currentStyle ? a.currentStyle[b] : t) || a.style && a.style[b]
}
function qe(a) {
    a = a ? ae(a) : document;
    return K && !(K && 9 <= Eb) && !je(Zd(a)) ? a.body: a.documentElement
}
function re(a) {
    var b = a.getBoundingClientRect();
    K && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function se(a) {
    if (K && !(K && 8 <= Eb)) return a.offsetParent;
    var b = ae(a),
    c = pe(a, "position"),
    e = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = pe(a, "position"), e = e && "static" == c && a != b.documentElement && a != b.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return t
}
function te(a) {
    for (var b = new le(0, Infinity, Infinity, 0), c = Zd(a), e = c.ka.body, d = c.ka.documentElement, f = !lb && fe(c.ka) ? c.ka.documentElement: c.ka.body; a = se(a);) if ((!K || 0 != a.clientWidth) && (!lb || 0 != a.clientHeight || a != e) && a != e && a != d && "visible" != pe(a, "overflow")) {
        var g = ue(a),
        h;
        h = a;
        if (jb && !Cb("1.9")) {
            var l = parseFloat(oe(h, "borderLeftWidth"));
            if (ve(h)) var j = h.offsetWidth - h.clientWidth - l - parseFloat(oe(h, "borderRightWidth")),
            l = l + j;
            h = new Xd(l, parseFloat(oe(h, "borderTopWidth")))
        } else h = new Xd(h.clientLeft, h.clientTop);
        g.x += h.x;
        g.y += h.y;
        b.top = Math.max(b.top, g.y);
        b.right = Math.min(b.right, g.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
        b.left = Math.max(b.left, g.x)
    }
    e = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, e);
    b.top = Math.max(b.top, f);
    c = (c.ka.parentWindow || c.ka.defaultView || window).document;
    c = fe(c) ? c.documentElement: c.body;
    c = new Vd(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, e + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b: t
}
function ue(a) {
    var b, c = ae(a),
    e = pe(a, "position"),
    d = jb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
    f = new Xd(0, 0),
    g = qe(c);
    if (a == g) return f;
    if (a.getBoundingClientRect) b = re(a),
    a = ke(Zd(c)),
    f.x = b.left + a.x,
    f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !d) b = c.getBoxObjectFor(a),
    a = c.getBoxObjectFor(g),
    f.x = b.screenX - a.screenX,
    f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (lb && "fixed" == pe(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while ( b && b != a );
        if (ib || lb && "absolute" == e) f.y -= c.body.offsetTop;
        for (b = a; (b = se(b)) && b != c.body && b != g;) if (f.x -= b.scrollLeft, !ib || "TR" != b.tagName) f.y -= b.scrollTop
    }
    return f
}
function we(a) {
    var b = new Xd;
    if (1 == a.nodeType) {
        if (a.getBoundingClientRect) {
            var c = re(a);
            b.x = c.left;
            b.y = c.top
        } else {
            var c = ke(Zd(a)),
            e = ue(a);
            b.x = e.x - c.x;
            b.y = e.y - c.y
        }
        if (jb && !Cb(12)) {
            var d;
            K ? d = "-ms-transform": lb ? d = "-webkit-transform": ib ? d = "-o-transform": jb && (d = "-moz-transform");
            var f;
            d && (f = pe(a, d));
            f || (f = pe(a, "transform"));
            f ? (a = f.match(xe), a = !a ? new Xd(0, 0) : new Xd(parseFloat(a[1]), parseFloat(a[2]))) : a = new Xd(0, 0);
            b = new Xd(b.x + a.x, b.y + a.y)
        }
    } else d = oa(a.Gi),
    f = a,
    a.targetTouches ? f = a.targetTouches[0] : d && a.sb.targetTouches && (f = a.sb.targetTouches[0]),
    b.x = f.clientX,
    b.y = f.clientY;
    return b
}
function ye(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function ze(a) {
    if ("none" != pe(a, "display")) return Ae(a);
    var b = a.style,
    c = b.display,
    e = b.visibility,
    d = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = Ae(a);
    b.display = c;
    b.position = d;
    b.visibility = e;
    return a
}
function Ae(a) {
    var b = a.offsetWidth,
    c = a.offsetHeight,
    e = lb && !b && !c;
    return (!ia(b) || e) && a.getBoundingClientRect ? (a = re(a), new Vd(a.right - a.left, a.bottom - a.top)) : new Vd(b, c)
}
function Be(a, b) {
    a.style.display = b ? "": "none"
}
function ve(a) {
    return "rtl" == pe(a, "direction")
}
function Ce(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
    e = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var d = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = e;
    return d
}
function De(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : t;
    return c ? Ce(a, c) : 0
}
var Ee = {
    thin: 2,
    medium: 4,
    thick: 6
};
function Fe(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : t)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : t;
    return c in Ee ? Ee[c] : Ce(a, c)
}
var xe = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function Ge(a, b) {
    jc.call(this);
    this.H = a;
    var c = pa(this.H) && 1 == this.H.nodeType ? this.H: this.H ? this.H.body: t;
    this.aj = !!c && ve(c);
    this.Jl = L(this.H, jb ? "DOMMouseScroll": "mousewheel", this, b)
}
C(Ge, jc);
Ge.prototype.handleEvent = function(a) {
    var b = 0,
    c = 0,
    e = 0;
    a = a.sb;
    if ("mousewheel" == a.type) {
        c = 1;
        if (K || lb && (bb || Cb("532.0"))) c = 40;
        e = He( - a.wheelDelta, c);
        ia(a.wheelDeltaX) ? (b = He( - a.wheelDeltaX, c), c = He( - a.wheelDeltaY, c)) : c = e
    } else e = a.detail,
    100 < e ? e = 3 : -100 > e && (e = -3),
    ia(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = e: c = e;
    x(this.Yg) && (b = Math.min(Math.max(b, -this.Yg), this.Yg));
    x(this.Zg) && (c = Math.min(Math.max(c, -this.Zg), this.Zg));
    this.aj && (b = -b);
    b = new Ie(e, a, b, c);
    this.dispatchEvent(b)
};
function He(a, b) {
    return lb && (ab || db) && 0 != a % b ? a: a / b
}
function Ie(a, b, c, e) {
    b && this.Ca(b, p);
    this.type = "mousewheel";
    this.detail = a;
    this.yl = c;
    this.Xc = e
}
C(Ie, Tb);
K || lb && Cb("525");
function Je(a) {
    M.call(this);
    this.f = "interactor";
    this.Oa = a;
    this.Re = this.og = this.ng = this.pg = this.mg = this.qg = t;
    this.Yd = q;
    this.Xb = this.Qb = this.wb = u;
    this.ua = [0, 0];
    this.Me = new D.m(0, 0, 0);
    this.gd = new D.m(0, 0, 0);
    this.Vg = 0;
    this.xg = this.Wd = t;
    this.wg = u;
    this.R = {
        MOUSEWHEEL_ENABLED: q,
        MOUSECLICKS_ENABLED: q,
        KEYBOARD_ENABLED: q,
        HOVERING_ENABLED: q,
        CONTEXTMENU_ENABLED: u,
        TOUCH_ENABLED: q,
        TOUCH_BOUNCING_ENABLED: u
    }
}
C(Je, M);
Je.prototype.__defineGetter__("config", v("R"));
Je.prototype.__defineGetter__("leftButtonDown", v("wb"));
Je.prototype.__defineGetter__("middleButtonDown", v("Qb"));
Je.prototype.__defineGetter__("rightButtonDown", v("Xb"));
Je.prototype.Ca = function() {
    this.R.MOUSEWHEEL_ENABLED ? (this.Re = new Ge(this.Oa), this.qg = L(this.Re, "mousewheel", this.Kd.bind(this))) : (bc(this.qg), this.Re = t);
    this.R.MOUSECLICKS_ENABLED ? (this.mg = L(this.Oa, "mousedown", this.vj.bind(this)), this.pg = L(this.Oa, "mouseup", this.Aj.bind(this))) : (bc(this.mg), bc(this.pg));
    this.Oa.oncontextmenu = this.R.CONTEXTMENU_ENABLED ? t: function() {
        return u
    };
    window.onkeydown = this.R.KEYBOARD_ENABLED ? this.ih.bind(this) : t;
    this.R.TOUCH_ENABLED ? (this.R.TOUCH_BOUNCING_ENABLED || document.body.addEventListener("touchmove",
    function(a) {
        a.preventDefault()
    },
    u), this.ci = L(this.Oa, "touchstart", this.Pj.bind(this)), this.bi = L(this.Oa, "touchmove", this.Nj.bind(this)), this.ai = L(this.Oa, "touchend", this.Jj.bind(this))) : (bc(this.ci), bc(this.bi), bc(this.ai));
    bc(this.ng);
    bc(this.og);
    this.ng = L(this.Oa, "mousemove", this.xj.bind(this));
    this.og = L(this.Oa, "mouseout", this.yj.bind(this))
};
Je.prototype.vj = function(a) {
    0 == a.button ? this.wb = q: 1 == a.button ? this.Qb = q: 2 == a.button && (this.Xb = q);
    eval("this.onMouseDown(" + this.wb + "," + this.Qb + "," + this.Xb + ")");
    Ke(this);
    a.preventDefault()
};
Je.prototype.uj = aa();
Je.prototype.Aj = function(a) {
    0 == a.button ? this.wb = u: 1 == a.button ? this.Qb = u: 2 == a.button && (this.Xb = u);
    eval("this.onMouseUp(" + this.wb + "," + this.Qb + "," + this.Xb + ")");
    Ke(this);
    a.preventDefault()
};
Je.prototype.__defineGetter__("mousePosition", v("ua"));
w = Je.prototype;
w.zj = aa();
w.yj = function(a) {
    this.Yd = u;
    this.R.KEYBOARD_ENABLED && (window.onkeydown = t);
    this.Xb = this.Qb = this.wb = u;
    Ke(this);
    this.Me = new D.m(0, 0, 0);
    a.preventDefault()
};
w.wj = aa();
w.Pj = function(a) {
    a.preventDefault();
    a.Ca(a.sb.targetTouches[0], a.currentTarget);
    eval("this.onTouchStart(" + a.clientX + "," + a.clientY + ")");
    this.gd = new D.m(a.clientX, a.clientY, 0);
    this.xg = setTimeout(this.Lj.bind(this, a), 500)
};
w.Oj = aa();
w.Lj = function(a) {
    eval("this.onTouchHover(" + a.clientX + "," + a.clientY + ")");
    a = new Jd;
    a.vb = q;
    a.hb = this instanceof Le;
    this.dispatchEvent(a);
    this.be = q
};
w.Kj = aa();
function Me(a) {
    clearTimeout(a.xg);
    if (a.be) {
        var b = new Jd;
        b.vb = u;
        b.hb = a instanceof Le;
        a.dispatchEvent(b)
    }
    a.be = u
}
w.Jj = function(a) {
    a.preventDefault();
    eval("this.onTouchEnd()");
    Me(this)
};
w.Ij = aa();
w.Nj = function(a) {
    a.preventDefault();
    this.be || Me(this);
    this.touchmoveEvent = a = a.sb;
    eval("this.onTouchMove(this['touchmoveEvent'])");
    var b = a.targetTouches;
    if (1 == b.length) {
        a = b[0];
        var c = [a.clientX, a.clientY];
        a = new D.m(c[0], c[1], 0);
        var b = c[0] > 3 * this.Oa.clientWidth / 4,
        e = c[0] < this.Oa.clientWidth / 4,
        d = c[1] < this.Oa.clientHeight / 4,
        c = c[1] > 3 * this.Oa.clientHeight / 4,
        c = !b && !e && !d && !c,
        d = this.gd.wa(a);
        this.gd = a.l();
        if (this.be) a = new Hd,
        5 < d.x ? d.x = 1 : -5 > d.x && (d.x = -1),
        5 < d.y ? d.y = 1 : -5 > d.y && (d.y = -1),
        a.ya = d,
        this.dispatchEvent(a);
        else if (this instanceof Ne && (b || e)) a = new Kd,
        a.V = 0 > d.y,
        this.dispatchEvent(a);
        else if (this instanceof Le || c) d.scale(3),
        a = new Id,
        a.ya = d,
        this.dispatchEvent(a)
    } else 2 == b.length && (a = b[0], b = b[1], a = [a.clientX, a.clientY], b = [b.clientX, b.clientY], a = new D.m(a[0], a[1], 0), b = new D.m(b[0], b[1], 0), d = Gc(a, b), b = d - this.Vg, this.Vg = d, this.gd.wa(a), this.gd = a.l(), 10 < Math.abs(b) && (a = new Jd, a.vb = 0 < b, a.hb = this instanceof Le, this.dispatchEvent(a)))
};
w.Mj = aa();
w.xj = function(a) {
    this.mousemoveEvent = a;
    eval("this.onMouseMove(this['mousemoveEvent'])");
    this.Yd = q;
    this.R.KEYBOARD_ENABLED && window.onkeydown == t && (window.onkeydown = this.ih.bind(this));
    a.preventDefault();
    var b = a.shiftKey;
    this.wg = b;
    this.ua = [a.offsetX, a.offsetY];
    var c = new D.m(this.ua[0], this.ua[1], 0);
    a = this.Me.wa(c);
    this.Me = c.l();
    this.R.HOVERING_ENABLED && ((0 < Math.abs(a.x) || 0 < Math.abs(a.y) || this.Qb || this.wb || this.Xb) && Ke(this), this.Wd = setTimeout(function() {
        Ke(this);
        var a = new Ld;
        a.fe = c.x;
        a.ge = c.y;
        this.dispatchEvent(a);
        this.Wd = t
    }.bind(this), 300));
    0 != a.Ib() && (this.wb && !b ? (b = new Id, a.scale(3), b.ya = a, this.dispatchEvent(b)) : this.Qb || this.wb && b ? (b = new Hd, b.ya = a, this.dispatchEvent(b)) : this.Xb && (b = new Jd, b.vb = 0 < a.y, b.hb = u, this.dispatchEvent(b)))
};
function Ke(a) {
    a.Wd && clearTimeout(a.Wd);
    a.dispatchEvent(new Md)
}
w.Bj = aa();
w.Kd = function(a) {
    this.mouseWheelEvent = a;
    eval("this.onMouseWheel(this['mouseWheelEvent'])");
    Ke(this);
    a.preventDefault()
};
w.sj = aa();
w.ih = function(a) {
    if (this.Yd) {
        this.keyEvent = a;
        eval("this.onKey(this['keyEvent'])");
        Ke(this);
        var b = a.altKey,
        c = a.ctrlKey,
        e = a.metaKey,
        d = a.shiftKey,
        f = a.keyCode;
        82 == f && !b && !c && !e && !d ? (a.preventDefault(), a = new Nd, this.dispatchEvent(a)) : 37 <= f && 40 >= f && (a.preventDefault(), d ? a = new Hd: b ? a = new Jd: (a = new Id, this instanceof Ne && (a = new Kd)), a && (c = new D.m(0, 0, 0), 37 == f ? (c.x = 5, a.V = u, b && (a.V = q, a.vb = q, a.hb = u)) : 39 == f ? (c.x = -5, a.V = q, b && (a.vb = u, a.hb = u)) : 38 == f ? (c.y = 5, a.V = q, b && (a.vb = q, a.hb = q)) : 40 == f && (c.y = -5, a.V = u, b && (a.vb = u, a.hb = q)), a.ya = c, this.dispatchEvent(a)))
    }
};
A("X.interactor", Je);
A("X.interactor.prototype.init", Je.prototype.Ca);
A("X.interactor.prototype.onMouseDown", Je.prototype.uj);
A("X.interactor.prototype.onMouseUp", Je.prototype.zj);
A("X.interactor.prototype.onMouseMove", Je.prototype.wj);
A("X.interactor.prototype.onMouseWheel", Je.prototype.Bj);
A("X.interactor.prototype.onKey", Je.prototype.sj);
A("X.interactor.prototype.onTouchStart", Je.prototype.Oj);
A("X.interactor.prototype.onTouchMove", Je.prototype.Mj);
A("X.interactor.prototype.onTouchEnd", Je.prototype.Ij);
A("X.interactor.prototype.onTouchHover", Je.prototype.Kj);
function Ne(a) {
    Je.call(this, a);
    this.f = "interactor2D"
}
C(Ne, Je);
//X.interactor2D.prototype.onMouseWheel_()
Ne.prototype.Kd = function(a) {
    Ne.u.Kd.call(this, a);
    var b = new Kd;
    a.Xc == t && (a.Xc = 0);
    b.V = 0 > a.Xc;
    this.dispatchEvent(b)
};
function Oe(a, b) { (!x(a) || !x(b)) && m(Error("A camera needs valid width and height values."));
    M.call(this);
    this.f = "camera";
    this.ic = new D.m(0, 100, 0);
    this.Fc = new D.m(0, 0, 0);
    this.V = new D.m(0, 0, 1);
    this.K = a;
    this.A = b;
    this.o = this.ue(this.ic, this.Fc)
}
C(Oe, M);
Oe.prototype.observe = function(a) { (a == t || !(a instanceof Je)) && m(Error("Could not observe the interactor."));
    L(a, td, this.Fj.bind(this));
    L(a, sd, this.Cj.bind(this));
    L(a, ud, this.Sj.bind(this))
};
Oe.prototype.Fj = function(a) {
    a instanceof Id || m(Error("Received no valid rotate event."));
    this.rotate(a.ya)
};
Oe.prototype.Sj = function(a) {
    a instanceof Jd || m(Error("Received no valid zoom event."));
    a.vb ? this.$f(a.hb) : this.ag(a.hb)
};
Oe.prototype.Cj = function(a) {
    a instanceof Hd || m(Error("Received no valid pan event."));
    this.Kf(a.ya)
};
Oe.prototype.__defineGetter__("view", v("o"));
Oe.prototype.__defineSetter__("view",
function(a) { (a == t || !(a instanceof Float32Array)) && m(Error("Invalid view matrix."));
    this.o = a
});
Oe.prototype.__defineGetter__("position",
function() {
    return [this.ic.x, this.ic.y, this.ic.d]
});
Oe.prototype.__defineSetter__("position",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid position."));
    this.ic = new D.m(a[0], a[1], a[2]);
    this.reset()
});
Oe.prototype.__defineGetter__("focus",
function() {
    return [this.Fc.x, this.Fc.y, this.Fc.d]
});
Oe.prototype.__defineSetter__("focus",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid focus"));
    this.Fc = new D.m(a[0], a[1], a[2]);
    this.reset()
});
Oe.prototype.__defineGetter__("up",
function() {
    return [this.V.x, this.V.y, this.V.d]
});
Oe.prototype.__defineSetter__("up",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid up vector."));
    this.V = new D.m(a[0], a[1], a[2]);
    this.reset()
});
w = Oe.prototype;
w.reset = function() {
    this.o = this.ue(this.ic, this.Fc)
};
w.rotate = function(a) {
    la(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for rotate operation."));
    return a
};
w.Kf = function(a) {
    la(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for pan operation."));
    this.o[12] -= a.x;
    this.o[13] += a.y
};
w.$f = function(a) {
    var b = 20;
    a != t && !a && (b = 1);
    this.o[14] += b
};
w.ag = function(a) {
    var b = 20;
    a != t && !a && (b = 1);
    this.o[14] -= b
};
w.ue = function(a, b) { (!(a instanceof D.m) || !(b instanceof D.m)) && m(Error("3D vectors required for calculating the view."));
    return D.g.Ed()
};
A("X.camera", Oe);
A("X.camera.prototype.pan", Oe.prototype.Kf);
A("X.camera.prototype.rotate", Oe.prototype.rotate);
A("X.camera.prototype.zoomIn", Oe.prototype.$f);
A("X.camera.prototype.zoomOut", Oe.prototype.ag);
function Pe(a, b) {
    Oe.call(this, a, b);
    this.f = "camera3D";
    this.eg = 45;
    this.Ve = D.g.yf(D.g.Ed(), this.eg, a / b, 1, 1E4)
}
C(Pe, Oe);
Pe.prototype.rotate = function(a) {
    a = Pe.u.rotate.call(this, a);
    var b = -a.x / 5 * Math.PI / 180;
    a = -a.y / 5 * Math.PI / 180;
    var c = new D.m(this.o[1], this.o[5], this.o[9]),
    e = new D.m(this.o[0], this.o[4], this.o[8]);
    c.normalize();
    e.normalize();
    D.g.rotate(this.o, b, c.x, c.y, c.d);
    D.g.rotate(this.o, a, e.x, e.y, e.d)
};
Pe.prototype.ue = function(a, b) {
    var c = Pe.u.ue.call(this, a, b);
    D.g.Xg(c, a, b, this.V);
    return c
};
function Qe(a, b, c, e) {
    var d = new Float32Array(4),
    f = new Float32Array(4),
    g = new Float32Array(16),
    h = new Float32Array(16);
    new Float32Array(16);
    D.g.multiply(a.Ve, a.o, h);
    D.g.Y(h, g);
    d[0] = b;
    d[1] = c;
    d[2] = 2 * e - 1;
    d[3] = 1;
    D.g.ah(g, d, f);
    f[3] = 1 / f[3];
    f[0] *= f[3];
    f[1] *= f[3];
    f[2] *= f[3];
    return f
}
A("X.camera3D", Pe);
function Re() {
    M.call(this);
    this.f = "parser";
    this.J = t;
    this.C = 0;
    this.Zh = 0 < (new Int8Array((new Int16Array([1])).buffer))[0];
    this.Mc = q;
    this.rl = -Infinity;
    this.ql = Infinity
}
C(Re, M);
Re.prototype.parse = function() {
    m(Error("The function parse() should be overloaded."))
};
function Se(a) {
    for (var b = Infinity,
    c = -Infinity,
    e = a.length,
    d = 0,
    d = 0; d < e; d++) if (!isNaN(a[d])) var f = a[d],
    b = Math.min(b, f),
    c = Math.max(c, f);
    return [b, c]
}
function Te(a, b, c) {
    b === p && (b = 0);
    c === p && (c = a.length);
    for (var e = "",
    d = 0,
    d = b; d < c; ++d) e += String.fromCharCode(a[d]);
    return e
}
function Z(a, b, c) {
    c != t || (c = 1);
    var e = 1,
    d = Uint8Array;
    switch (b) {
    case "schar":
        d = Int8Array;
        break;
    case "ushort":
        d = Uint16Array;
        e = 2;
        break;
    case "sshort":
        d = Int16Array;
        e = 2;
        break;
    case "uint":
        d = Uint32Array;
        e = 4;
        break;
    case "sint":
        d = Int32Array;
        e = 4;
        break;
    case "float":
        d = Float32Array;
        e = 4;
        break;
    case "complex":
        d = Float64Array;
        e = 8;
        break;
    case "double":
        d = Float64Array,
        e = 8
    }
    b = new d(a.J.slice(a.C, a.C += c * e));
    if (a.Zh != a.Mc) {
        a = b;
        b = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        for (d = 0; d < a.byteLength; d += e) for (var f = d + e - 1,
        g = d; f > g; f--, g++) {
            var h = b[g];
            b[g] = b[f];
            b[f] = h
        }
        b = a
    }
    return 1 == c ? b[0] : b
}
function Ue(a, b) {
    var c = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE],
    e = Qc(0, 0, 0, 1),
    d = Pc();
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(0, 0, b[2] - 1, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(0, b[1] - 1, 0, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(b[0] - 1, 0, 0, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(b[0] - 1, b[1] - 1, 0, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(b[0] - 1, 0, b[2] - 1, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(0, b[1] - 1, b[2] - 1, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Qc(b[0] - 1, b[1] - 1, b[2] - 1, 1);
    cd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    return c
}
function Ve(a, b) {
    var c = Sc();
    if (! (a.length == b.length && a[0] == b[0] && a[1] == b[1] && a[2] == b[2])) {
        var e = Math.acos(a[2]),
        d = Mc(),
        f = a[0],
        g = a[1],
        h = a[2],
        l = b[0],
        j = b[1],
        k = b[2];
        d[0] = g * k - h * j;
        d[1] = h * l - f * k;
        d[2] = f * j - g * l;
        Oc(d, d);
        f = Math.cos(e / 2);
        g = Math.sin(e / 2) * d[0];
        h = Math.sin(e / 2) * d[1];
        e = Math.sin(e / 2) * d[2];
        T(c, 0, f * f + g * g - h * h - e * e, 2 * (g * h - f * e), 2 * (g * e + f * h), 0);
        T(c, 1, 2 * (g * h + f * e), f * f + h * h - g * g - e * e, 2 * (h * e - f * g), 0);
        T(c, 2, 2 * (g * e - f * h), 2 * (h * e + f * g), f * f + e * e - h * h - g * g, 0)
    }
    e = Rc();
    ad(c, e);
    return [c, e]
}
//X.parser.reslice2
function We(a, b, c, e, d, f, g, h, l) {
	debugger;
    var j = new Xe;
    Oc(c, c);
    for (var k = [], n = [], s = 0; 6 > s; s++) for (var r = Math.floor(s / 2), y = (r + 1) % 3, z = (r + 2) % 3, F = (4 + 2 * r) % 6, G = 0; 2 > G; G++) {
        var H = (2 + G + 2 * r) % 6,
        B = -(c[r] * (d[s] - a[r]) + c[y] * (d[H] - a[y])) / c[z] + a[z];
        if (B >= d[F] && B <= d[F + 1] || B <= d[F] && B >= d[F + 1]) {
            var E = [];
            E[r] = d[s];
            E[y] = d[H];
            E[z] = B;
            k.push(E)
        } else E = [],
        E[r] = d[s],
        E[y] = d[H],
        E[z] = B,
        n.push(E)
    }
    debugger;
    a = Nc(0, 0, 1);
    a = Ve(c, a);
    d = a[0];
    a = a[1];
    r = [];
    for (n = 0; n < k.length; ++n) s = Qc(k[n][0], k[n][1], k[n][2], 1),
    y = Pc(),
    cd(d, s, y),
    r.push([y[0], y[1], y[2]]);
    d = Nc(1, 0, 0);
    k = Mc();
    bd(a, d, k);
    n = Nc(0, 1, 0);
    d = Mc();
    bd(a, n, d);
    s = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
    for (n = n = 0; n < r.length; ++n) r[n][0] < s[0] && (s[0] = r[n][0]),
    r[n][0] > s[1] && (s[1] = r[n][0]),
    r[n][1] < s[2] && (s[2] = r[n][1]),
    r[n][1] > s[3] && (s[3] = r[n][1]),
    r[n][2] < s[4] && (s[4] = r[n][2]),
    r[n][2] > s[5] && (s[5] = r[n][2]);
    n = Qc(s[0] + (s[1] - s[0]) / 2, s[2] + (s[3] - s[2]) / 2, s[4] + (s[5] - s[4]) / 2, 0);
    r = Pc();
    $c(a, n, r);
    y = Math.floor(s[0]);
    z = Math.ceil(s[1]);
    y == z && z++;
    F = z - y;
    G = Math.floor(s[2]);
    H = Math.ceil(s[3]);
    G == H && H++;
    B = H - G;
    E = b[0];
    b = b[1];
    var n = Math.ceil(F / E),
    I = Math.ceil(B / b),
    N = new Uint8Array(4 * n * I),
    Q = new gd;
    Q.Xe = n;
    Q.We = I;
    var I = Pc(),
    O = Qc(0, 0, s[4], 1),
    S = Rc();
    $c(g.Qh, a, S);
    for (var da = H - 1E-7,
    J = z - 1E-7,
    ba = 0,
    ka = 0,
    U = 0,
    V = G,
    V = G; V <= da; V += b) {
        U++;
        ka = 0;
        O[1] = V;
        for (n = y; n <= J; n += E) {
            ka++;
            O[0] = n;
            cd(S, O, I);
            var Ga = 4 * ba,
            tb = Math.floor(I[2]),
            ub = Math.floor(I[1]),
            vb = Math.floor(I[0]);
            if (0 <= vb && vb < g.ca[0] && 0 <= ub && ub < g.ca[1] && 0 <= tb && tb < g.ca[2]) {
                var kb = f[tb][ub][vb],
                Zc = vb = ub = tb = 0;
                l ? ((kb = l.get(kb)) || (kb = [0, 0.61, 0, 0, 1]), tb = 255 * kb[1], ub = 255 * kb[2], vb = 255 * kb[3], Zc = 255 * kb[4]) : (tb = ub = vb = 255 * ((kb - g.ra) / (g.ia - g.ra)), Zc = 255);
                N[Ga] = tb;
                N[++Ga] = ub;
                N[++Ga] = vb;
                N[++Ga] = Zc
            } else N[Ga] = 0,
            N[++Ga] = 0,
            N[++Ga] = 0,
            N[++Ga] = 0;
            ba++
        }
    }
    Q.Wb = N;
    j.G = Q;
    j.ei = s;
    j.Sh = a;
    j.Rh = S;
    j.Yh = G;
    j.ol = H;
    j.di = y;
    j.tl = z;
    j.jg = ka;
    j.ig = U;
    j.Vc = E;
    j.K = F;
    j.Gc = b;
    j.A = B;
    j.z = [r[0], r[1], r[2]];
    j.gc = [c[0], c[1], c[2]];
    j.Oc = [k[0], k[1], k[2]];
    j.V = [d[0], d[1], d[2]];
    j.O = u;
    j.yb = g;
    j.Bb = g.yb != t && !h ? u: q;
    j.ec = e;
    j.Gb();
    j.O = u;
    return j
}
function Ye(a, b, c, e) {
    var d;
    d = e.ma;
    for (var f = [], g = [], h = 0; 6 > h; h++) {
        var l = Math.floor(h / 2),
        j = (l + 1) % 3,
        k = (l + 2) % 3,
        n = (2 + 2 * l) % 6,
        s = (4 + 2 * l) % 6,
        r = (d[h] - b[l]) * (1 / c[l]);
        if (Infinity != r && -Infinity != r) {
            var y = b[j] + c[j] * r,
            r = b[k] + c[k] * r;
            y >= d[n] && y <= d[n + 1] && r >= d[s] && r <= d[s + 1] ? (n = [], n[l] = d[h], n[j] = y, n[k] = r, f.push(n)) : (n = [], n[l] = d[h], n[j] = y, n[k] = r, g.push(n))
        }
    }
    d = [f, g];
    b = d[0];
    e.b[a].k = d;
    d = Fc(new R(b[0][0], b[0][1], b[0][2]), new R(b[1][0], b[1][1], b[1][2]));
    e.b[a].nl = d;
    f = Nc(0, 0, 1);
    g = Ve(c, f)[0];
    h = Qc(e.ad[0], e.ad[1], e.ad[2], 0);
    f = Pc();
    cd(g, h, f);
    g = Pc();
    h = f[2];
    g[0] = c[0] * h;
    g[1] = c[1] * h;
    g[2] = c[2] * h;
    g[3] = c[3] * h;
    0.1 > Math.abs(f[0]) && (f[0] = 0.1);
    0.1 > Math.abs(f[1]) && (f[1] = 0.1);
    f[0] /= e.ae;
    f[1] /= e.ae;
    e.b[a].Ga = [Math.abs(f[0]), Math.abs(f[1])];
    e.b[a].Sc = f[2];
    e.b[a].B = g;
    d = Math.floor(Math.abs(d / f[2]));
    e.ud[a] = d + 1;
    e.b[a].p = d + 1;
    e.b[a].k[0][0][0] > e.b[a].k[0][1][0] ? 0 < g[0] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][0] < e.b[a].k[0][1][0] ? 0 > g[0] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][1] > e.b[a].k[0][1][1] ? 0 < g[1] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][1] < e.b[a].k[0][1][1] ? 0 > g[1] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][2] > e.b[a].k[0][1][2] ? 0 < g[2] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][2] < e.b[a].k[0][1][2] && 0 > g[2] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d);
    e.b[a].Te = -(c[0] * b[0][0] + c[1] * b[0][1] + c[2] * b[0][2])
}
//X.parser.prototype.reslice()
function af(a, b) {
	debugger;
    var c;
    c = b.J;
    for (var e = b.ca,
    d = b.ia,
    f = b.ra,
    g = Array(e[2]), h = Array(e[2]), l = e[1] * e[0], j = 0, k = 0, n = 0, s = 0, r = 0, s = 0; s < e[2]; s++) {
        var y = c.subarray(s * l, (s + 1) * l),
        r = 0;
        h[s] = Array(e[1]);
        g[s] = Array(e[1]);
        for (n = 0; n < e[1]; n++) {
            h[s][n] = new c.constructor(e[0]);
            g[s][n] = new c.constructor(e[0]);
            for (k = 0; k < e[0]; k++) j = y[r],
            h[s][n][k] = 255 * ((j - f) / (d - f)),
            g[s][n][k] = j,
            r++
        }
    }
    debugger;
    c = [g, h];
    b.$ = c[0];
    b.bg = c[1];
    D.Ja(a.f + ".reslice");
    b.L = b.e != t;
    b.xa && (b.cd = b.xa.Ka);
    b.Sl = [0, 0, 0];
    b.s = [b.Ea[0] + (b.gb[0] - 1) / 2, b.Ea[1] + (b.gb[1] - 1) / 2, b.Ea[2] + (b.gb[2] - 1) / 2];
    b.ma = [Math.min(b.Ea[0], b.Ea[0] + b.gb[0] - 1), Math.max(b.Ea[0], b.Ea[0] + b.gb[0] - 1), Math.min(b.Ea[1], b.Ea[1] + b.gb[1] - 1), Math.max(b.Ea[1], b.Ea[1] + b.gb[1] - 1), Math.min(b.Ea[2], b.Ea[2] + b.gb[2] - 1), Math.max(b.Ea[2], b.Ea[2] + b.gb[2] - 1)];
    b.b = [{},
    {},
    {}];
    c = Nc(b.s[0], b.s[1], b.s[2]);
    b.b[0].vd = c;
    e = Nc(1, 0, 0);
    debugger;
    Oc(e, e);
    b.b[0].i = e;
    d = [1, 0, 0];
    b.b[0].w = d;
    Ye(0, c, e, b);
    b.c[0].c = Array(b.b[0].p);
    c[0] = b.b[0].k[0][0][0] + b.b[0].B[0] * Math.floor(b.b[0].p / 2);
    c[1] = b.b[0].k[0][0][1] + b.b[0].B[1] * Math.floor(b.b[0].p / 2);
    c[2] = b.b[0].k[0][0][2] + b.b[0].B[2] * Math.floor(b.b[0].p / 2);
    c = We(c, b.b[0].Ga, b.b[0].i, b.b[0].w, b.ma, b.$, b, b.L, b.cd);
    b.L && (c.e = b.e.c[0].c[Math.floor(b.b[0].p / 2)].G);
    b.c[0].c[Math.floor(b.b[0].p / 2)] = c;
    b.Cb = Math.floor(b.b[0].p / 2);
    b.Hc = Math.floor(b.b[0].p / 2);
    c = Nc(b.s[0], b.s[1], b.s[2]);
    b.b[1].vd = c;
    e = Nc(0, 1, 0);
    Oc(e, e);
    b.b[1].i = e;
    d = [0, 1, 0];
    b.b[1].w = d;
    Ye(1, c, e, b);
    b.c[1].c = Array(b.b[1].p);
    c[0] = b.b[1].k[0][0][0] + b.b[1].B[0] * Math.floor(b.b[1].p / 2);
    c[1] = b.b[1].k[0][0][1] + b.b[1].B[1] * Math.floor(b.b[1].p / 2);
    c[2] = b.b[1].k[0][0][2] + b.b[1].B[2] * Math.floor(b.b[1].p / 2);
    c = We(c, b.b[1].Ga, b.b[1].i, b.b[1].w, b.ma, b.$, b, b.L, b.cd);
    b.L && (c.e = b.e.c[1].c[Math.floor(b.b[1].p / 2)].G);
    b.c[1].c[Math.floor(b.b[1].p / 2)] = c;
    b.Db = Math.floor(b.b[1].p / 2);
    b.Ic = Math.floor(b.b[1].p / 2);
    c = Nc(b.s[0], b.s[1], b.s[2]);
    b.b[2].vd = c;
    e = Nc(0, 0, 1);
    Oc(e, e);
    b.b[2].i = e;
    d = [0, 0.392, 0.804];
    b.b[2].w = d;
    Ye(2, c, e, b);
    b.c[2].c = Array(b.b[2].p);
    c[0] = b.b[2].k[0][0][0] + b.b[2].B[0] * Math.floor(b.b[2].p / 2);
    c[1] = b.b[2].k[0][0][1] + b.b[2].B[1] * Math.floor(b.b[2].p / 2);
    c[2] = b.b[2].k[0][0][2] + b.b[2].B[2] * Math.floor(b.b[2].p / 2);
    c = We(c, b.b[2].Ga, b.b[2].i, b.b[2].w, b.ma, b.$, b, b.L, b.cd);
    b.L && (c.e = b.e.c[2].c[Math.floor(b.b[2].p / 2)].G);
    b.c[2].c[Math.floor(b.b[2].p / 2)] = c;
    b.Eb = Math.floor(b.b[2].p / 2);
    b.Jc = Math.floor(b.b[2].p / 2);
    D.Da(a.f + ".reslice");
    return b.$
};
function bf() {
    Re.call(this);
    this.f = "parserIMAGE"
}
C(bf, Re);
bf.prototype.parse = function(a, b, c, e) {
    c instanceof ArrayBuffer || m(Error());
    for (var d = new Uint8Array(c), f = d.length, g = Array(f); f--;) g[f] = String.fromCharCode(d[f]);
    d = window.btoa(g.join(""));
    f = new Image;
    $b(f, "load", this.Uj.bind(this, f, a, b, c, e));
    f.src = "data:image/" + e + ";base64," + d
};
bf.prototype.Uj = function(a, b, c) {
    b.ib = a;
    b.Wb = t;
    a = new ld;
    a.D = c;
    a.v = b;
    this.dispatchEvent(a)
};
A("X.parserIMAGE", bf);
A("X.parserIMAGE.prototype.parse", bf.prototype.parse);
function cf(a, b) {
    Oe.call(this, a, b);
    this.f = "camera2D"
}
C(cf, Oe);
cf.prototype.rotate = function(a) {
    a = cf.u.rotate.call(this, a);
    var b = new Gd;
    0 < a.x ? b.cf--:0 > a.x && b.cf++;
    0 < a.y ? b.Qe++:0 > a.y && b.Qe--;
    this.dispatchEvent(b)
};
cf.prototype.$f = function(a) {
    var b = 20;
    a != t && !a && (b = 0.02);
    this.o[14] += b
};
cf.prototype.ag = function(a) {
    var b = 20;
    a != t && !a && (b = 0.02);
    this.o[14] -= b
};
cf.prototype.Kf = function(a) {
    la(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for pan operation."));
    this.o[12] -= a.x / this.o[14];
    this.o[13] += a.y / this.o[14]
};
function df() {
    M.call(this);
    this.f = "shaders";
    this.ce = "";
    var a;
    a = "precision mediump float;\n\n";
    a += "attribute vec3 vertexPosition;\n";
    a += "attribute vec3 vertexNormal;\n";
    a += "attribute vec3 vertexColor;\n";
    a += "attribute vec2 vertexTexturePos;\n";
    a += "attribute float vertexScalar;\n";
    a += "\n";
    a += "uniform mat4 view;\n";
    a += "uniform mat4 perspective;\n";
    a += "uniform vec3 center;\n";
    a += "uniform mat4 objectTransform;\n";
    a += "uniform bool useObjectColor;\n";
    a += "uniform bool useScalars;\n";
    a += "uniform bool scalarsReplaceMode;\n";
    a += "uniform float scalarsMin;\n";
    a += "uniform float scalarsMax;\n";
    a += "uniform vec3 scalarsMinColor;\n";
    a += "uniform vec3 scalarsMaxColor;\n";
    a += "uniform float scalarsMinThreshold;\n";
    a += "uniform float scalarsMaxThreshold;\n";
    a += "uniform int scalarsInterpolation;\n";
    a += "uniform vec3 objectColor;\n";
    a += "uniform float pointSize;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += "  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * ";
    a += "mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * ";
    a += "vertexNormal;\n";
    a += "  fVertexNormal = vertexNormal;\n";
    a += "  fDiscardNow = 0.0;\n";
    a += "  vec3 vertexPosition2 = vertexPosition - center;\n";
    a += "  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n";
    a += "  fragmentTexturePos = vertexTexturePos;\n";
    a += "  if (useScalars) {\n";
    a += "    float scalarValue = vertexScalar;\n";
    a += "    if (scalarValue < scalarsMinThreshold || scalarValue > scalarsMaxThreshold) {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        fragmentColor = objectColor;\n";
    a += "      } else {\n";
    a += "        fDiscardNow = 1.0;\n";
    a += "      }\n";
    a += "    } else {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        if (scalarsInterpolation == 1) {\n";
    a += "            vec3 zeroMaxColor;\n";
    a += "            vec3 zeroMinColor;\n";
    a += "            zeroMaxColor[0] = scalarsMaxColor[0]*0.33;\n";
    a += "            zeroMaxColor[1] = scalarsMaxColor[1]*0.33;\n";
    a += "            zeroMaxColor[2] = scalarsMaxColor[2]*0.33;\n";
    a += "            zeroMinColor[0] = scalarsMinColor[0]*0.33;\n";
    a += "            zeroMinColor[1] = scalarsMinColor[1]*0.33;\n";
    a += "            zeroMinColor[2] = scalarsMinColor[2]*0.33;\n";
    a += "            if(scalarValue < 0.0) {fragmentColor = scalarValue/(scalarsMin) * scalarsMinColor + (1.0 - scalarValue/(scalarsMin)) * (zeroMinColor);}\n";
    a += "            else {fragmentColor = scalarValue/(scalarsMax) * scalarsMaxColor + (1.0 - scalarValue/(scalarsMax)) * (zeroMaxColor);}\n";
    a += "        } else {\n";
    a += "            fragmentColor = scalarValue * scalarsMaxColor + (1.0 - scalarValue) * scalarsMinColor;\n";
    a += "          }\n";
    a += "      } else {\n";
    a += "        fragmentColor = vertexColor;\n";
    a += "      }\n";
    a += "    }\n";
    a += "  } else if (useObjectColor) {\n";
    a += "    fragmentColor = objectColor;\n";
    a += "  } else {\n";
    a += "    fragmentColor = vertexColor;\n";
    a += "  }\n";
    a += "  gl_PointSize = pointSize;\n";
    a += "  gl_Position = perspective * fVertexPosition;\n";
    this.ce = a += "}\n";
    this.Ud = "";
    a = "precision mediump float;\n\n";
    a += "uniform bool usePicking;\n";
    a += "uniform bool useTexture;\n";
    a += "uniform bool volumeTexture;\n";
    a += "uniform bool useLabelMapTexture;\n";
    a += "uniform sampler2D textureSampler;\n";
    a += "uniform sampler2D textureSampler2;\n";
    a += "uniform float objectOpacity;\n";
    a += "uniform float labelmapOpacity;\n";
    a += "uniform vec4 labelmapColor;\n";
    a += "uniform float volumeLowerThreshold;\n";
    a += "uniform float volumeUpperThreshold;\n";
    a += "uniform float volumeScalarMin;\n";
    a += "uniform float volumeScalarMax;\n";
    a += "uniform vec3 volumeScalarMinColor;\n";
    a += "uniform vec3 volumeScalarMaxColor;\n";
    a += "uniform float volumeWindowLow;\n";
    a += "uniform float volumeWindowHigh;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += " if (fDiscardNow > 0.0) {\n";
    a += "   discard;\n";
    a += " }\n";
    a += " if (usePicking) {\n";
    a += "   gl_FragColor = vec4(fragmentColor, 1.0);\n";
    a += " } else if (useTexture) {\n";
    a += "   vec4 texture1 = texture2D(textureSampler,fragmentTexturePos);\n";
    a += "   vec4 textureSum = texture1;\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _windowLow = ((volumeWindowLow - volumeScalarMin)/ (volumeScalarMax - volumeScalarMin));\n";
    a += "     float _windowHigh = ((volumeWindowHigh - volumeScalarMin)/ (volumeScalarMax - volumeScalarMin));\n";
    a += "     vec3 _minrange = vec3(_windowLow,_windowLow,_windowLow);\n";
    a += "     vec3 _maxrange = vec3(_windowHigh,_windowHigh,_windowHigh);\n";
    a += "     vec3 fac = _maxrange - _minrange;\n";
    a += "     textureSum = vec4((textureSum.r - _minrange)/fac,1);\n";
    a += "     textureSum = textureSum.r * vec4(volumeScalarMaxColor,1) + (1.0 - textureSum.r) * vec4(volumeScalarMinColor,1);\n";
    a += "   }\n";
    a += "   if (useLabelMapTexture) {\n";
    a += "     vec4 texture2 = texture2D(textureSampler2,fragmentTexturePos);\n";
    a += "     if (texture2.a > 0.0) {\n";
    a += "         if (labelmapColor.a != -255.0) {\n";
    a += "           if (all(equal(floor(texture2 * vec4(255)), labelmapColor))) {\n";
    a += "             if (labelmapOpacity < 1.0) {\n";
    a += "               textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n";
    a += "             } else {\n";
    a += "               textureSum = texture2;\n";
    a += "             }\n";
    a += "           }\n";
    a += "         } else {\n";
    a += "           if (labelmapOpacity < 1.0) {\n";
    a += "             textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n";
    a += "           } else {\n";
    a += "             textureSum = texture2;\n";
    a += "           }\n";
    a += "         }\n";
    a += "     }\n";
    a += "   }\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _volumeLowerThreshold = (volumeLowerThreshold - volumeScalarMin)/ (volumeScalarMax - volumeScalarMin);\n";
    a += "     float _volumeUpperThreshold = (volumeUpperThreshold - volumeScalarMin)/ (volumeScalarMax - volumeScalarMin);\n";
    a += "     if (texture1.r < _volumeLowerThreshold ||\n";
    a += "         texture1.r > _volumeUpperThreshold ||\n";
    a += "         texture1.a == 0.0 ) {\n";
    a += "       discard;\n";
    a += "     };\n";
    a += "   };\n";
    a += "   gl_FragColor = textureSum;\n";
    a += "   gl_FragColor.a = objectOpacity;\n";
    a += " } else {\n";
    a += "   vec3 nNormal = normalize(fTransformedVertexNormal);\n";
    a += "   if (fVertexNormal == vec3(0.0,0.0,0.0)) {\n";
    a += "     gl_FragColor = vec4(fragmentColor,1.0);\n";
    a += "     return;\n";
    a += "   }\n";
    a += "   vec3 light = vec3(0.0, 0.0, 1.0);\n";
    a += "   vec3 lightDirection = vec3(0,0,-10);\n";
    a += "   lightDirection = normalize(lightDirection);\n";
    a += "   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n";
    a += "   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n";
    a += "   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n";
    a += "   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n";
    a += "   float ambient = 0.3;\n";
    a += "   gl_FragColor = vec4(fragmentColor * ambient +\n";
    a += "                       fragmentColor * diffuse +\n";
    a += "                       vec3(0.2, 0.2, 0.2) * specular,\n";
    a += "                       objectOpacity);\n";
    a += " }\n";
    this.Ud = a += "}\n"
}
C(df, M);
var ef = {
    $k: "vertexPosition",
    Zk: "vertexNormal",
    Yk: "vertexColor",
    bl: "vertexTexturePos",
    al: "vertexScalar"
},
ff = {
    cl: "view",
    Hk: "perspective",
    yk: "center",
    Gk: "objectTransform",
    Uk: "useObjectColor",
    Ek: "objectColor",
    Wk: "useScalars",
    Qk: "scalarsReplaceMode",
    Nk: "scalarsMin",
    Kk: "scalarsMax",
    Ok: "scalarsMinColor",
    Lk: "scalarsMaxColor",
    Pk: "scalarsMinThreshold",
    Mk: "scalarsMaxThreshold",
    Jk: "scalarsInterpolation",
    Ik: "pointSize",
    Fk: "objectOpacity",
    Dk: "normal",
    Vk: "usePicking",
    Xk: "useTexture",
    Tk: "useLabelMapTexture",
    Bk: "labelmapOpacity",
    Ak: "labelmapColor",
    Rk: "textureSampler",
    Sk: "textureSampler2",
    dl: "volumeLowerThreshold",
    jl: "volumeUpperThreshold",
    gl: "volumeScalarMin",
    el: "volumeScalarMax",
    hl: "volumeScalarMinColor",
    fl: "volumeScalarMaxColor",
    ll: "volumeWindowLow",
    kl: "volumeWindowHigh",
    il: "volumeTexture"
};
function Xe(a) {
    Y.call(this);
    this.f = "slice";
    this.z = [0, 0, 0];
    this.gc = [0, 0, 1];
    this.V = [0, 1, 0];
    this.Oc = [1, 0, 0];
    this.A = this.K = 10;
    this.nc = [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
    this.e = this.yb = t;
    this.Bb = q;
    this.ec = [1, 1, 1];
    a != t && this.rc(a)
}
C(Xe, Y);
Xe.prototype.rc = function(a) {
    this.z = a.z.slice();
    this.gc = a.gc.slice();
    this.V = a.V.slice();
    this.K = a.K;
    this.A = a.A;
    this.yb = a.yb;
    this.e = a.e;
    this.Bb = a.Bb;
    this.ec = a.ec;
    this.Xh = a.Xh;
    Xe.u.rc.call(this, a)
};
Xe.prototype.__defineSetter__("height", ca("A"));
Xe.prototype.__defineSetter__("width", ca("K"));
Xe.prototype.__defineGetter__("up", v("V"));
Xe.prototype.__defineGetter__("right", v("Oc"));
Xe.prototype.create = function() {
    this.Gb()
};
Xe.prototype.Ta = function() {
    Xe.u.Ta.call(this);
    this.z.length = 0;
    this.gc.length = 0;
    this.V.length = 0;
    this.Oc.length = 0;
    this.nc.length = 0;
    this.e = this.yb = t;
    this.ec.length = 0
};
Xe.prototype.Gb = function() {
    var a = (new R(this.gc[0], this.gc[1], this.gc[2])).normalize(),
    b = new R(this.V[0], this.V[1], this.V[2]),
    c = new R(this.Oc[0], this.Oc[1], this.Oc[2]),
    e = new R(this.z[0], this.z[1], this.z[2]),
    d = Hc(c.l().Y().scale(this.K / 2), b.l().Y().scale(this.A / 2)),
    f = new R(d.x + e.x, d.y + e.y, d.d + e.d),
    d = Hc(c.l().Y().scale(this.K / 2), b.l().scale(this.A / 2)),
    g = new R(d.x + e.x, d.y + e.y, d.d + e.d),
    d = Hc(c.l().scale(this.K / 2), b.l().Y().scale(this.A / 2)),
    h = new R(d.x + e.x, d.y + e.y, d.d + e.d),
    d = Hc(c.l().scale(this.K / 2), b.l().scale(this.A / 2)),
    b = new R(d.x + e.x, d.y + e.y, d.d + e.d);
    this.h = new W(18);
    this.n = new W(18);
    this.h.add(f.x, f.y, f.d);
    this.h.add(g.x, g.y, g.d);
    this.h.add(h.x, h.y, h.d);
    this.h.add(h.x, h.y, h.d);
    this.h.add(b.x, b.y, b.d);
    this.h.add(g.x, g.y, g.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.Bb && (a = new Y, a.h = new W(24), a.n = new W(24), a.h.add(f.x, f.y, f.d), a.h.add(g.x, g.y, g.d), a.h.add(g.x, g.y, g.d), a.h.add(b.x, b.y, b.d), a.h.add(b.x, b.y, b.d), a.h.add(h.x, h.y, h.d), a.h.add(h.x, h.y, h.d), a.h.add(f.x, f.y, f.d), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.w = [this.ec[0], this.ec[1], this.ec[2]], a.Ia = "LINES", a.Lc = 2, this.c.push(a))
};
A("X.slice", Xe);
A("X.slice.prototype.create", Xe.prototype.create);
A("X.slice.prototype.destroy", Xe.prototype.Ta);
function P(a) {
    Y.call(this);
    this.f = "volume";
    this.z = [0, 0, 0];
    this.ca = [10, 10, 10];
    this.ma = [1, 1, 1];
    this.ud = [10, 10, 10];
    this.qb = [1, 1, 1];
    this.ib = [];
    this.Jc = this.Eb = this.Ic = this.Db = this.Hc = this.Cb = 0;
    this.kc = new Y;
    this.lc = new Y;
    this.mc = new Y;
    this.ee = this.Ra = u;
    this.X = -1;
    this.de = [];
    this.e = t;
    this.Bb = q;
    this.fa = Infinity;
    this.ea = -Infinity;
    this.vg = q;
    this.ae = 1;
    this.ia = 0;
    this.J = t;
    this.b = [];
    this.s = [0, 0, 0];
    this.gb = [0, 0, 0];
    this.ad = [0, 0, 0];
    this.$ = [];
    this.bg = [];
    this.$a = t;
    Fa(this, new xc);
    Fa(this, new jd);
    a != t && this.rc(a)
}
C(P, Y);
P.prototype.rc = function(a) {
    this.z = a.z.slice();
    this.ca = a.ca.slice();
    this.qb = a.qb.slice();
    this.Cb = a.Cb;
    this.Hc = a.Hc;
    this.Db = a.Db;
    this.Ic = a.Ic;
    this.Eb = a.Eb;
    this.Jc = a.Jc;
    this.dg = a.dg.slice();
    this.kc = new Y(a.kc);
    this.lc = new Y(a.lc);
    this.mc = new Y(a.mc);
    this.ia = a.ia;
    this.J = a.J;
    this.Ra = a.Ra;
    this.ee = a.ee;
    this.X = a.X;
    this.e = a.e;
    this.Bb = a.Bb;
    P.u.rc.call(this, a)
};
P.prototype.Gb = function(a) {
    this.c.length = 0;
    this.kc.c.length = 0;
    this.lc.c.length = 0;
    this.mc.c.length = 0;
    this.c.push(this.kc);
    this.c.push(this.lc);
    this.c.push(this.mc);
    this.Ea = a.Ac;
    this.ad = a.Bc;
    this.gb = a.zc;
    this.Cc = a.cb;
    this.Qh = a.fb;
    this.ia = a.max;
    this.J = a.data;
    this.j = q
};
P.prototype.Ta = function() {
    P.u.Ta.call(this);
    this.ib.length = 0;
    this.c.length = 0;
    this.kc.c.length = 0;
    this.kc.length = 0;
    this.lc.c.length = 0;
    this.lc.length = 0;
    this.mc.c.length = 0;
    this.mc.length = 0;
    this.J = t;
    this.ma.length = 0;
    this.b.length = 0;
    this.s.length = 0;
    this.gb.length = 0;
    this.ad.length = 0;
    this.$.length = 0;
    this.bg.length = 0;
    this.$a = t
};
//X.volume.prototype.modified
//鼠标滚动触发的回调函数
P.prototype.q = function(a) {
    a = "undefined" !== typeof a ? a: q;
    if (0 < this.c.length) {
        this.Ra != this.ee && (!this.Ra && -1 != this.X && (this.c[this.X].visible = u), this.j = q, this.ee = this.Ra);
        if (!this.O) return;
        for (var b = 0,
        b = 0; 3 > b; b++) {
            var c = this.c[b],
            e = 0,
            d = 0;
            0 == b ? (e = this.Cb, d = this.Hc, this.Hc = this.Cb) : 1 == b ? (e = this.Db, d = this.Ic, this.Ic = this.Db) : 2 == b && (e = this.Eb, d = this.Jc, this.Jc = this.Eb);
            if (this.c[b].c[parseInt(e, 10)] == t) {
                var f = Mc();
                f[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * parseInt(e, 10);
                f[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * parseInt(e, 10);
                f[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * parseInt(e, 10);
                if (this.L) {
                    var g = We(f, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka);
                    this.e.c[b].c[parseInt(e, 10)] = g;
                    this.e.c[b].q(q)
                }
                f = We(f, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                this.L && (f.e = f.G, f.e = this.e.c[b].c[parseInt(e, 10)].G);
                c.c[parseInt(e, 10)] = f;
                this.c[b].q(q)
            }
            d = c.c[parseInt(d, 10)];
            this.Ra || (d.visible = u);
            c = c.c[parseInt(e, 10)];
            c.visible = q;
            c.za = 1;
            this.Ra && (c.c[0].O = u, b != this.X && (c.visible = u, c.za = 0))
        }
        this.Ra && -1 != this.X && gf(this, this.X)
    }
    a && P.u.q.call(this)
};
P.prototype.__defineGetter__("dimensions", v("ca"));
P.prototype.__defineSetter__("dimensions", ca("ca"));
P.prototype.__defineGetter__("spacing", v("qb"));
P.prototype.__defineSetter__("spacing", ca("qb"));
P.prototype.__defineGetter__("bbox", v("ma"));
P.prototype.__defineGetter__("range", v("ud"));
P.prototype.__defineGetter__("dimensionsRAS", v("dg"));
P.prototype.__defineGetter__("volumeRendering", v("Ra"));
P.prototype.__defineSetter__("volumeRendering",
function(a) {
    this.Ra = a;
    this.q(u)
});
P.prototype.__defineGetter__("visible", v("O"));
P.prototype.__defineSetter__("visible",
function(a) {
    if (a) this.O = a,
    this.q(u);
    else {
        for (var b = this.c,
        c = b.length,
        e = 0,
        e = 0; e < c; e++) b[e].visible = a;
        this.O = a;
        this.j = q
    }
});
P.prototype.__defineGetter__("center", v("z"));
P.prototype.__defineSetter__("center",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid center."));
    this.z = a
});
P.prototype.__defineGetter__("volumeRenderingCache", v("de"));
P.prototype.__defineSetter__("volumeRenderingCache",
function(a) { (a == t || !la(a) || !(3 >= a.length)) && m(Error("Invalid volumeRederingCache."));
    this.de = a
});
P.prototype.__defineGetter__("image", v("ib"));
P.prototype.__defineGetter__("labelmap",
function() {
    this.e || (this.e = new hf(this));
    return this.e
});
P.prototype.__defineGetter__("indexX", v("Cb"));
P.prototype.__defineSetter__("indexX",
function(a) {
    x(a) && (0 <= a && a < this.kc.c.length) && (this.Cb = a, this.q(u))
});
P.prototype.__defineGetter__("indexY", v("Db"));
P.prototype.__defineSetter__("indexY",
function(a) {
    x(a) && (0 <= a && a < this.lc.c.length) && (this.Db = a, this.q(u))
});
P.prototype.__defineGetter__("indexZ", v("Eb"));
P.prototype.__defineSetter__("indexZ",
function(a) {
    x(a) && (0 <= a && a < this.mc.c.length) && (this.Eb = a, this.q(u))
});
P.prototype.__defineGetter__("windowLow", v("fa"));
P.prototype.__defineSetter__("windowLow", ca("fa"));
P.prototype.__defineGetter__("windowHigh", v("ea"));
P.prototype.__defineSetter__("windowHigh", ca("ea"));
P.prototype.__defineGetter__("borders", v("Bb"));
P.prototype.__defineSetter__("borders", ca("Bb"));
P.prototype.__defineGetter__("reslicing", v("vg"));
P.prototype.__defineSetter__("reslicing", ca("vg"));
P.prototype.__defineGetter__("resolutionFactor", v("ae"));
P.prototype.__defineSetter__("resolutionFactor", ca("ae"));
P.prototype.__defineSetter__("xNormX",
function(a) {
    this.b[0].i[0] = a
});
P.prototype.__defineGetter__("xNormX",
function() {
    return this.b[0].i[0]
});
P.prototype.__defineSetter__("xNormY",
function(a) {
    this.b[0].i[1] = a
});
P.prototype.__defineGetter__("xNormY",
function() {
    return this.b[0].i[1]
});
P.prototype.__defineSetter__("xNormZ",
function(a) {
    this.b[0].i[2] = a
});
P.prototype.__defineGetter__("xNormZ",
function() {
    return this.b[0].i[2]
});
P.prototype.__defineSetter__("xColor",
function(a) {
    this.b[0].w = a
});
P.prototype.__defineGetter__("xColor",
function() {
    return this.b[0].w
});
P.prototype.__defineSetter__("yNormX",
function(a) {
    this.b[1].i[0] = a
});
P.prototype.__defineGetter__("yNormX",
function() {
    return this.b[1].i[0]
});
P.prototype.__defineSetter__("yNormY",
function(a) {
    this.b[1].i[1] = a
});
P.prototype.__defineGetter__("yNormY",
function() {
    return this.b[1].i[1]
});
P.prototype.__defineSetter__("yNormZ",
function(a) {
    this.b[1].i[2] = a
});
P.prototype.__defineGetter__("yNormZ",
function() {
    return this.b[1].i[2]
});
P.prototype.__defineSetter__("yColor",
function(a) {
    this.b[1].w = a
});
P.prototype.__defineGetter__("yColor",
function() {
    return this.b[1].w
});
P.prototype.__defineSetter__("zNormX",
function(a) {
    this.b[2].i[0] = a
});
P.prototype.__defineGetter__("zNormX",
function() {
    return this.b[2].i[0]
});
P.prototype.__defineSetter__("zNormY",
function(a) {
    this.b[2].i[1] = a
});
P.prototype.__defineGetter__("zNormY",
function() {
    return this.b[2].i[1]
});
P.prototype.__defineSetter__("zNormZ",
function(a) {
    this.b[2].i[2] = a
});
P.prototype.__defineGetter__("zNormZ",
function() {
    return this.b[2].i[2]
});
P.prototype.__defineSetter__("zColor",
function(a) {
    this.b[2].w = a
});
P.prototype.__defineGetter__("zColor",
function() {
    return this.b[2].w
});
P.prototype.gk = function(a) {
    this.c[a].visible = u;
    for (var b = 0; b < this.c[a].c.length; b++)"undefined" != typeof this.c[a].c[b] && (this.L && (this.e.c[a].c[b].remove(), this.e.c[a].c[b] = t), this.c[a].c[b].remove(), this.c[a].c[b] = t);
    Oc(this.b[a].i, this.b[a].i);
    Ye(a, this.b[a].vd, this.b[a].i, this);
    this.c[a].c = [];
    this.c[a].c = Array(this.b[a].p);
    this.L && (b = We(this.b[a].vd, this.b[a].Ga, this.b[a].i, this.b[a].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka), this.e.c[a].c = [], this.e.c[a].c = Array(this.b[a].p), this.e.c[a].c[Math.floor(this.b[a].p / 2)] = b, this.e.c[a].q());
    b = We(this.b[a].vd, this.b[a].Ga, this.b[a].i, this.b[a].w, this.ma, this.$, this, q, t);
    window.console.log("modified!");
    this.L && (b.e = b.G, b.e = this.e.c[a].c[Math.floor(this.b[a].p / 2)].G);
    this.c[a].c[Math.floor(this.b[a].p / 2)] = b;
    0 == a ? (this.Cb = Math.floor(this.b[a].p / 2), this.Hc = Math.floor(this.b[a].p / 2)) : 1 == a ? (this.Db = Math.floor(this.b[a].p / 2), this.Ic = Math.floor(this.b[a].p / 2)) : (this.Eb = Math.floor(this.b[a].p / 2), this.Jc = Math.floor(this.b[a].p / 2));
    this.c[a].q();
    this.c[a].c[Math.floor(this.b[a].p / 2)].O = q
};
function gf(a, b) {
    if (!a.Sd) if (!a.Ra || !a.j && b == a.X) a.X = b;
    else if ( - 1 == a.de.indexOf(b)) {
        a.de.push(b);
        a.Sd = q;
        var c = new Pd;
        c.D = a;
        a.dispatchEvent(c);
        a.onComputing(b);
        setTimeout(function() {
            var a = t;
            0 <= this.X && (a = this.c[this.X], a.visible = u);
            var a = this.c[b],
            c = a.c.length,
            d = Math.floor(c / 4),
            e;
            for (e = 0; e < 1 * d; e++) {
                if (a.c[e] == t) {
                    var j = Mc();
                    j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                    j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                    j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                    if (this.L) {
                        var k = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka);
                        this.e.c[b].c[e] = k;
                        this.e.c[b].q(q)
                    }
                    j = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                    j.c[0].O = u;
                    this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                    a.c[e] = j
                }
                a.c[e].O = q
            }
            jf(this, 0.25);
            setTimeout(function() {
                for (; e < 2 * d; e++) {
                    if (a.c[e] == t) {
                        var j = Mc();
                        j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                        j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                        j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                        if (this.L) {
                            var k = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka);
                            this.e.c[b].c[e] = k;
                            this.e.c[b].q(q)
                        }
                        j = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                        j.c[0].O = u;
                        this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                        a.c[e] = j
                    }
                    a.c[e].O = q
                }
                jf(this, 0.5);
                setTimeout(function() {
                    for (; e < 3 * d; e++) {
                        if (a.c[e] == t) {
                            var j = Mc();
                            j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                            j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                            j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                            if (this.L) {
                                var k = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka);
                                this.e.c[b].c[e] = k;
                                this.e.c[b].q(q)
                            }
                            j = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                            j.c[0].O = u;
                            this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                            a.c[e] = j
                        }
                        a.c[e].O = q
                    }
                    jf(this, 0.75);
                    setTimeout(function() {
                        for (e = 3 * d; e < c; e++) {
                            if (a.c[e] == t) {
                                var j = Mc();
                                j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                                j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                                j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                                if (this.L) {
                                    var k = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ka);
                                    this.e.c[b].c[e] = k;
                                    this.e.c[b].q(q)
                                }
                                j = We(j, this.b[b].Ga, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                                j.c[0].O = u;
                                this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                                a.c[e] = j
                            }
                            a.c[e].O = q
                        }
                        jf(this, 1);
                        setTimeout(function() {
                            this.Sd && this.c[b].q(q);
                            this.X = b;
                            this.j = u;
                            if (this.Sd) {
                                var a = new Rd;
                                a.D = this;
                                this.dispatchEvent(a);
                                this.onComputingEnd(b)
                            }
                            this.Sd = u
                        }.bind(this), 10)
                    }.bind(this), 10)
                }.bind(this), 10)
            }.bind(this), 10)
        }.bind(a), 10)
    } else {
        c = a.c[a.X];
        c.visible = u;
        var c = a.c[b],
        e = c.c.length,
        d;
        for (d = 0; d < e; d++) c.c[d].O = q;
        a.X = b;
        a.j = u
    }
}
function jf(a, b) {
    var c = new Qd;
    c.Ad = b;
    a.dispatchEvent(c);
    a.onComputingProgress(100 * b)
}
P.prototype.Ef = aa();
P.prototype.Gf = aa();
P.prototype.Ff = aa();
A("X.volume", P);
A("X.volume.prototype.modified", P.prototype.q);
A("X.volume.prototype.destroy", P.prototype.Ta);
A("X.volume.prototype.sliceInfoChanged", P.prototype.gk);
A("X.volume.prototype.onComputing", P.prototype.Ef);
A("X.volume.prototype.onComputingProgress", P.prototype.Gf);
A("X.volume.prototype.onComputingEnd", P.prototype.Ff);
function kf() {
    Re.call(this);
    this.f = "parserOFF"
}
C(kf, Re);
kf.prototype.parse = function(a, b, c) {
    function e() {
        l === d && m(Error("End of file reached unexpectedly."));
        for (var a = l; a < d; ++a) if (10 === f[a]) {
            var b = Te(f, l, a);
            l = a + 1;
            return b
        }
        l = d;
        return Te(f, l, d - 1)
    }
    D.Ja(this.f + ".parse");
    this.J = c;
    var d = c.byteLength,
    f = Z(this, "uchar", d);
    c = [];
    b.h = new W(d);
    b.n = new W(d);
    for (var g = b.h,
    h = b.n,
    l = 0,
    j = e(), j = ("OFF" === j ? e() : j).split(" "), k = j[0], j = j[1]; k--;) {
        var n = e(),
        n = n.split(" ");
        c.push([parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2])])
    }
    for (; j--;) {
        var n = e(),
        n = n.split(" "),
        s = c[parseInt(n[1], 10)],
        k = c[parseInt(n[2], 10)],
        n = c[parseInt(n[3], 10)];
        g.add(s[0], s[1], s[2]);
        g.add(k[0], k[1], k[2]);
        g.add(n[0], n[1], n[2]);
        s = new R(s[0], s[1], s[2]);
        n = new R(n[0], n[1], n[2]);
        k = Ic((new R(k[0], k[1], k[2])).wa(s), n.wa(s));
        k.normalize();
        h.add(k.x, k.y, k.d);
        h.add(k.x, k.y, k.d);
        h.add(k.x, k.y, k.d)
    }
    D.Da(this.f + ".parse");
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserOFF", kf);
A("X.parserOFF.prototype.parse", kf.prototype.parse);
function lf() {
    Re.call(this);
    this.f = "parserDCM"
}
C(lf, Re);
//lf是X.parseDCM()
//  X.parserDCM.prototype.parse()
lf.prototype.parse = function(a, b, c) {
    b.yc = {};
    b.yc.xf = 0;
    this.vc(c, b);
    if (b.r.length == t || b.ta.length == b.r.length) {
    	debugger;
        b.yc.xf = b.r.length;
        var e = {};
        c = {};
        for (var d = 0; d < b.ta.length; d++) e.hasOwnProperty(b.ta[d].series_instance_uid) || (e[b.ta[d].series_instance_uid] = [], c[b.ta[d].series_instance_uid] = {}),
        c[b.ta[d].series_instance_uid].hasOwnProperty(b.ta[d].sop_instance_uid) || (c[b.ta[d].series_instance_uid][b.ta[d].sop_instance_uid] = q, e[b.ta[d].series_instance_uid].push(b.ta[d]));
        debugger;
        var f = Object.keys(e)[0],
        d = e[f],
        g = d.length;
        c = {};
        var h = "image_position_patient";
        1 == g ? (h = "image_position_patient", e[f][0].dist = 0) : d[0].image_position_patient[0] != d[1].image_position_patient[0] || d[0].image_position_patient[1] != d[1].image_position_patient[1] || d[0].image_position_patient[2] != d[1].image_position_patient[2] ? (h = "image_position_patient", e = new R(d[0].image_orientation_patient[0], d[0].image_orientation_patient[1], d[0].image_orientation_patient[2]), f = new R(d[0].image_orientation_patient[3], d[0].image_orientation_patient[4], d[0].image_orientation_patient[5]), e = Ic(e, f), d.map(function(a, b) {
            b.dist = b.image_position_patient[0] * a.x + b.image_position_patient[1] * a.y + b.image_position_patient[2] * a.d;
            return b
        }.bind(t, e)), d.sort(function(a, b) {
            return a.dist - b.dist
        })) : d[0].instance_number != d[1].instance_number ? (h = "instance_number", d.sort(function(a, b) {
            return a.instance_number - b.instance_number
        })) : window.console.log("Could not resolve the ordering mode");
        isNaN(d[0].pixel_spacing[0]) && (d[0].pixel_spacing[0] = 1);
        isNaN(d[0].pixel_spacing[1]) && (d[0].pixel_spacing[1] = 1);
        if (1 < g) switch (h) {
        case "image_position_patient":
            var l = d[0].image_position_patient,
            e = d[1].image_position_patient,
            f = e[0] - l[0],
            j = e[1] - l[1],
            k = e[2] - l[2];
            d[0].pixel_spacing[2] = Math.sqrt(f * f + j * j + k * k);
            break;
        case "instance_number":
            d[0].pixel_spacing[2] = 1;
            break;
        default:
            window.console.log("Unkown ordering mode - returning: " + h)
        } else d[0].pixel_spacing[2] = 1;
        e = 1;
        switch (h) {
        case "image_position_patient":
            var l = d[0].image_position_patient,
            n = d[g - 1].image_position_patient,
            f = n[0] - l[0],
            j = n[1] - l[1],
            k = n[2] - l[2],
            f = Math.sqrt(f * f + j * j + k * k),
            e = e + Math.round(f / d[0].pixel_spacing[2]);
            break;
        case "instance_number":
            e += Math.abs(d[g - 1].instance_number - d[0].instance_number);
            break;
        default:
            window.console.log("Unkown ordering mode - returning: " + h)
        }
        l = d[0].columns * d[0].rows;
        f = l * e;
        n = t;
        switch (d[0].ff) {
        case 8:
            n = new Uint8Array(f);
            break;
        case 16:
            n = new Uint16Array(f);
            break;
        case 32:
            n = new Uint32Array(f);
        default:
            window.console.log("Unknown number of bits allocated - using default: 32 bits")
        }
        b.qb = d[0].pixel_spacing;
        for (var s = 0; s < g; s++) {
            var r = d[s].data,
            f = 0;
            switch (h) {
            case "image_position_patient":
                f = d[s].image_position_patient[0] - d[0].image_position_patient[0];
                j = d[s].image_position_patient[1] - d[0].image_position_patient[1];
                k = d[s].image_position_patient[2] - d[0].image_position_patient[2];
                f = Math.round(Math.sqrt(f * f + j * j + k * k) / d[0].pixel_spacing[2]);
                break;
            case "instance_number":
                f = d[s].instance_number - d[0].instance_number;
                break;
            default:
                window.console.log("Unkown ordering mode - returning: " + h)
            }
            n.set(r, f * l)
        }
        c.data = n;
        b.J = n;
        b.ca = [d[0].columns, d[0].rows, e];
        c.zl = b.ca;
        e = Se(n);
        g = e[0];
        e = e[1];
        c.min = b.ra = b.fa = g;
        c.max = b.ia = b.ea = e; - Infinity == b.U && (b.U = g);
        Infinity == b.W && (b.W = e);
        j = d[0].image_position_patient;
        g = Rc();
        if ("false" == b.reslicing || b.reslicing == u) T(g, 0, d[0].pixel_spacing[0], 0, 0, 0),
        T(g, 1, 0, d[0].pixel_spacing[1], 0, 0),
        T(g, 2, 0, 0, d[0].pixel_spacing[2], 0),
        T(g, 3, 0, 0, 0, 1);
        else switch (h) {
        case "image_position_patient":
            e = new R(d[0].image_orientation_patient[0], d[0].image_orientation_patient[1], d[0].image_orientation_patient[2]);
            f = new R(d[0].image_orientation_patient[3], d[0].image_orientation_patient[4], d[0].image_orientation_patient[5]);
            e = Ic(e, f);
            T(g, 0, -d[0].image_orientation_patient[0] * d[0].pixel_spacing[0], -d[0].image_orientation_patient[3] * d[0].pixel_spacing[1], -e.x * d[0].pixel_spacing[2], -j[0]);
            T(g, 1, -d[0].image_orientation_patient[1] * d[0].pixel_spacing[0], -d[0].image_orientation_patient[4] * d[0].pixel_spacing[1], -e.y * d[0].pixel_spacing[2], -j[1]);
            T(g, 2, d[0].image_orientation_patient[2] * d[0].pixel_spacing[0], d[0].image_orientation_patient[5] * d[0].pixel_spacing[1], e.d * d[0].pixel_spacing[2], j[2]);
            T(g, 3, 0, 0, 0, 1);
            break;
        case "instance_number":
            T(g, 0, -1, 0, 0, -j[0]);
            T(g, 1, -0, -1, -0, -j[1]);
            T(g, 2, 0, 0, 1, j[2]);
            T(g, 3, 0, 0, 0, 1);
            break;
        default:
            window.console.log("Unkown ordering mode - returning: " + h)
        }
        c.cb = g;
        c.fb = Rc();
        ad(c.cb, c.fb);
        h = Qc(0, 0, 0, 1);
        d = Pc();
        cd(g, h, d);
        h = Qc(1, 1, 1, 1);
        e = Pc();
        cd(g, h, e);
        c.Bc = [e[0] - d[0], e[1] - d[1], e[2] - d[2]];
        d = Ue(g, [b.ca[0], b.ca[1], b.ca[2]]);
        c.zc = [d[1] - d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
        c.Ac = [d[0], d[2], d[4]];
        b.Gb(c);
        debugger;
        b.ib = af(this, b)
    }
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
function mf(a, b, c, e) {
    switch (c) {
    case 16975:
    case 20819:
    case 20053:
    case 22351:
        c = function(a) {
            for (var b = "",
            c = 128; 1 <= c; c /= 2) b += a & c ? "1": "0";
            return b
        };
        e = a[b++];
        a = a[b++];
        e = parseInt(c((a & 65280) >> 8) + c(a & 255) + (c((e & 65280) >> 8) + c(e & 255)), 2);
        4294967295 == e && (e = 0);
        b += e / 2;
        break;
    default:
        b += e / 2
    }
    return b
}
//X.parserDCM.prototype.parseStream 
lf.prototype.vc = function(a, b) {
	//debugger;
    this.J = a;
    if ("undefined" == typeof b.ta || b.ta == t) b.ta = [];
    for (var c = {
        pixel_spacing: [0.1, 0.1, Infinity],
        image_orientation_patient: [1, 0, 0, 0, 1, 0],
        image_position_patient: [0, 0, 0],
        transfer_syntax_uid: "no_transfer_syntax_uid"
    },
    e = Z(this, "ushort", this.J.byteLength), d = 66, f = t, g = t, h = t, l = t; d < e.length;) switch (f = e[d++], g = e[d++], h = e[d++], l = e[d++], "1.2.840.10008.1.2" == c.transfer_syntax_uid && 0 == l && (l = h), f) {
    case 2:
        switch (g) {
        case 16:
            for (var j = "",
            f = f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            j += String.fromCharCode(g),
            j += String.fromCharCode(h);
            c.transfer_syntax_uid = j.replace(/\0/g, "");
            break;
        default:
            d = mf(e, d, h, l)
        }
        break;
    case 40:
        switch (g) {
        case 16:
            c.rows = e[d];
            d += l / 2;
            break;
        case 17:
            c.columns = e[d];
            d += l / 2;
            break;
        case 256:
            c.ff = e[d];
            d += l / 2;
            break;
        case 257:
            c.bits_stored = e[d];
            d += l / 2;
            break;
        case 2:
            c.number_of_images = e[d];
            d += l / 2;
            break;
        case 48:
            j = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            j += String.fromCharCode(g),
            j += String.fromCharCode(h);
            j = j.split("\\");
            c.pixel_spacing = [parseFloat(j[0]), parseFloat(j[1]), Infinity];
            break;
        default:
            d = mf(e, d, h, l)
        }
        break;
    case 32:
        switch (g) {
        case 14:
            c.series_instance_uid = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            c.series_instance_uid += String.fromCharCode(g),
            c.series_instance_uid += String.fromCharCode(h);
            break;
        case 19:
            j = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            j += String.fromCharCode(g),
            j += String.fromCharCode(h);
            c.instance_number = parseInt(j, 10);
            break;
        case 50:
            j = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            j += String.fromCharCode(g),
            j += String.fromCharCode(h);
            j = j.split("\\");
            c.image_position_patient = [parseFloat(j[0]), parseFloat(j[1]), parseFloat(j[2])];
            break;
        case 55:
            j = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            j += String.fromCharCode(g),
            j += String.fromCharCode(h);
            j = j.split("\\");
            c.image_orientation_patient = [parseFloat(j[0]), parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3]), parseFloat(j[4]), parseFloat(j[5])];
            break;
        default:
            d = mf(e, d, h, l)
        }
        break;
    case 65534:
        switch (g) {
        default:
            l = 0,
            d += l / 2
        }
        break;
    case 8:
        switch (g) {
        case 24:
            c.sop_instance_uid = "";
            for (f = 0; f < l / 2; f++) h = e[d++],
            g = h & 255,
            h = (h & 65280) >> 8,
            c.sop_instance_uid += String.fromCharCode(g),
            c.sop_instance_uid += String.fromCharCode(h);
            break;
        default:
            d = mf(e, d, h, l)
        }
        break;
    case 16:
        switch (g) {
        case 8720:
            for (f = 0; f < l / 2; f++) d++;
            break;
        default:
            d = mf(e, d, h, l)
        }
        break;
    default:
        d = mf(e, d, h, l)
    }
    switch (c.ff) {
    case 8:
        c.data = new Uint8Array(c.columns * c.rows);
        break;
    case 16:
        c.data = new Uint16Array(c.columns * c.rows);
        break;
    case 32:
        c.data = new Uint32Array(c.columns * c.rows)
    }
    this.C = this.J.byteLength - 2 * c.columns * c.rows;
    e = t;
    switch (c.ff) {
    case 8:
        e = Z(this, "uchar", c.columns * c.rows);
        break;
    case 16:
        e = Z(this, "ushort", c.columns * c.rows);
        break;
    case 32:
        e = Z(this, "uint", c.columns * c.rows)
    }
    c.data = e;
    b.ta.push(c);
    return b
};
A("X.parserDCM", lf);
A("X.parserDCM.prototype.parse", lf.prototype.parse);
function nf() {
    Re.call(this);
    this.f = "parserVTK"
}
C(nf, Re);
nf.prototype.parse = function(a, b, c) {
	debugger;
    D.Ja(this.f + ".parse");
    var e = b.h,
    d = b.n,
    f = new Uint8Array(c),
    g = "";
    b.h = e = new W(c.byteLength);
    b.n = d = new W(c.byteLength);
    c = 0;
    for (var h = f.length; c < h; c += 32768) g += Te(f, c, Math.min(c + 32768, h));
    f = g.split("\n");
    g = f.length;
    this.yd = this.zd = t;
    this.hc = [];
    this.Pa = id;
    this.Se = this.Tb = this.Nb = this.Ub = u;
    c = 0;
    for (h = g % 8; h--;) of(this, f[c]),
    c++;
    for (h = 0.125 * g ^ 0; h--;) of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++,
    of(this, f[c]),
    c++;
    c = this.zd;
    debugger;
    var f = this.yd,
    g = f.length,
    l = h = this.hc.length;
    do {
        var j = this.hc[h - l], k = j.length, n;
        for (n = 0; n < k && !("LINES" == this.Pa && n + 1 >= k); n++) {
            var s = parseInt(j[n], 10),
            r = c.get(s);
            e.add(r[0], r[1], r[2]);
            var y = s,
            z = r;
            "LINES" == this.Pa ? (y = parseInt(j[n + 1], 10), z = c.get(y), e.add(z[0], z[1], z[2])) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && e.add(r[0], r[1], r[2]);
            s < g ? (z = f.get(s), d.add(z[0], z[1], z[2]), "LINES" == this.Pa ? (y = f.get(y), d.add(y[0], y[1], y[2])) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && d.add(z[0], z[1], z[2])) : (y = new R(r[0], r[1], r[2]), y.normalize(), d.add(y.x, y.y, y.d), "LINES" == this.Pa ? (y = new R(z[0], z[1], z[2]), y.normalize(), d.add(y.x, y.y, y.d)) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && d.add(y.x, y.y, y.d))
        }
        l--
    } while ( 0 < l );
    b.Ia = this.Pa;
    D.Da(this.f + ".parse");
    e = new ld;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
function of(a, b) {
    b = b.replace(/^\s+|\s+$/g, "");
    var c = b.split(" "),
    e = c.length,
    d = c[0];
    switch (d) {
    case "POINTS":
        a.Ub = q;
        a.Nb = u;
        a.Tb = u;
        c = parseInt(c[1], 10);
        a.zd = new W(3 * c);
        a.yd = new W(3 * c);
        return;
    case "VERTICES":
        a.Nb = q;
        a.Ub = u;
        a.Tb = u;
        c = parseInt(c[1], 10);
        3 <= c ? a.Pa = id: 1 == c ? a.Pa = "POINTS": m(Error("This VTK file is not supported!"));
        a.hc = [];
        return;
    case "TRIANGLE_STRIPS":
    	debugger;
        a.Nb = q;
        a.Ub = u;
        a.Tb = u;
        a.Pa = "TRIANGLE_STRIPS";
        a.hc = [];
        return;
    case "LINES":
    	debugger;
        a.Nb = q;
        a.Ub = u;
        a.Tb = u;
        a.Pa = "LINES";
        a.hc = [];
        return;
    case "POLYGONS":
        a.Nb = q;
        a.Ub = u;
        a.Tb = u;
        a.Pa = "POLYGONS";
        a.hc = [];
        return;
    case "POINT_DATA":
        a.Tb = q;
        a.Ub = u;
        a.Nb = u;
        return
    }
    if (a.Ub) if (1 == e || isNaN(parseFloat(d))) a.Ub = u;
    else {
        if (3 <= e) {
            var d = parseFloat(c[0]),
            f = parseFloat(c[1]),
            g = parseFloat(c[2]);
            a.zd.add(d, f, g)
        }
        6 <= e && (d = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.zd.add(d, f, g));
        9 <= e && (e = parseFloat(c[6]), d = parseFloat(c[7]), c = parseFloat(c[8]), a.zd.add(e, d, c))
    } else a.Nb ? 1 == e || isNaN(parseFloat(d)) ? a.Nb = u: (c = c.slice(1), a.hc.push(c)) : a.Tb && ("NORMALS" == d ? a.Se = q: 1 == e || isNaN(parseFloat(d)) ? (a.Tb = u, a.Se = u) : a.Se && (3 <= e && (d = parseFloat(c[0]), f = parseFloat(c[1]), g = parseFloat(c[2]), a.yd.add(d, f, g)), 6 <= e && (d = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.yd.add(d, f, g)), 9 <= e && (e = parseFloat(c[6]), d = parseFloat(c[7]), c = parseFloat(c[8]), a.yd.add(e, d, c))))
}
A("X.parserVTK", nf);
A("X.parserVTK.prototype.parse", nf.prototype.parse);
function pf() {
    Re.call(this);
    this.f = "parserFSM";
    this.Mc = u
}
C(pf, Re);
pf.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    this.J = c;
    var e = b.h,
    d = b.n;
    b.Nc = [];
    var f = b.Nc;
    c = 0;
    var g;
    do g = Z(this, "uchar"),
    c++;
    while (200 > c && 10 != g);
    Z(this, "uchar");
    d = Z(this, "uint");
    c = Z(this, "uint");
    var h = Z(this, "float", 3 * d);
    g = Z(this, "uint", 3 * c);
    var l = new Uint32Array(d),
    j = new Float32Array(9 * c);
    b.h = e = new W(9 * c);
    b.n = d = new W(9 * c);
    var k;
    for (k = 0; k < c; k++) {
        var n = 3 * k,
        s = g[n],
        r = g[n + 1],
        y = g[n + 2];
        f.push(s);
        f.push(r);
        f.push(y);
        l[s] += 1;
        l[r] += 1;
        l[y] += 1;
        var n = 3 * s,
        z = 3 * r,
        F = 3 * y,
        G = h[n],
        H = h[n + 1],
        B = h[n + 2],
        r = h[z],
        y = h[z + 1],
        s = h[z + 2],
        E = h[F],
        I = h[F + 1],
        N = h[F + 2];
        e.add(G, H, B);
        e.add(r, y, s);
        e.add(E, I, N);
        G = new R(G, H, B);
        E = new R(E, I, N);
        r = (new R(r, y, s)).l().wa(G);
        y = E.l().wa(G);
        r = Ic(r, y).normalize();
        j[n] += r.x;
        j[n + 1] += r.y;
        j[n + 2] += r.d;
        j[z] += r.x;
        j[z + 1] += r.y;
        j[z + 2] += r.d;
        j[F] += r.x;
        j[F + 1] += r.y;
        j[F + 2] += r.d
    }
    for (k = 0; k < c; k++) n = 3 * k,
    s = g[n],
    r = g[n + 1],
    y = g[n + 2],
    n = 3 * s,
    z = 3 * r,
    F = 3 * y,
    f = new R(j[z], j[z + 1], j[z + 2]),
    h = new R(j[F], j[F + 1], j[F + 2]),
    n = (new R(j[n], j[n + 1], j[n + 2])).scale(1 / l[s]).normalize(),
    f = f.scale(1 / l[r]).normalize(),
    h = h.scale(1 / l[y]).normalize(),
    d.add(n.x, n.y, n.d),
    d.add(f.x, f.y, f.d),
    d.add(h.x, h.y, h.d);
    c = Z(this, "uchar", this.J.byteLength - this.C);
    g = t;
    for (n = 0; n < c.length; n++) if (99 == c[n] && 114 == c[n + 1] && 97 == c[n + 2] && 115 == c[n + 3]) {
        for (d = g = n + 9; 10 != c[n] && n < c.length;) d++,
        n++;
        g = Te(c.subarray(g, d)).split(" ");
        break
    }
    g && (b.ja.Dh(parseFloat(g[0])), b.ja.Eh(parseFloat(g[1])), b.ja.Fh(parseFloat(g[2])));
    b.Ia = id;
    D.Da(this.f + ".parse");
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserFSM", pf);
A("X.parserFSM.prototype.parse", pf.prototype.parse);
var qf = {
    kf: function(a, b, c) {
        return qf.update(a, 0, b, c)
    },
    update: function(a, b, c, e) {
        var d = qf.Mh,
        f = "number" === typeof c ? c: c = 0;
        e = "number" === typeof e ? e: a.length;
        b ^= 4294967295;
        for (f = e & 7; f--; ++c) b = b >>> 8 ^ d[(b ^ a[c]) & 255];
        for (f = e >> 3; f--; c += 8) b = b >>> 8 ^ d[(b ^ a[c]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 1]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 2]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 3]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 4]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 5]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 6]) & 255],
        b = b >>> 8 ^ d[(b ^ a[c + 7]) & 255];
        return (b ^ 4294967295) >>> 0
    }
};
qf.Mh = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
function rf(a) {
    var b = a.length,
    c = 0,
    e = Number.POSITIVE_INFINITY,
    d, f, g, h, l, j, k, n, s;
    for (n = 0; n < b; ++n) a[n] > c && (c = a[n]),
    a[n] < e && (e = a[n]);
    d = 1 << c;
    f = new Uint32Array(d);
    g = 1;
    h = 0;
    for (l = 2; g <= c;) {
        for (n = 0; n < b; ++n) if (a[n] === g) {
            j = 0;
            k = h;
            for (s = 0; s < g; ++s) j = j << 1 | k & 1,
            k >>= 1;
            for (s = j; s < d; s += l) f[s] = g << 16 | n; ++h
        }++g;
        h <<= 1;
        l <<= 1
    }
    return [f, c, e]
};
function sf(a, b) {
    this.gf = [];
    this.hf = 32768;
    this.rb = this.Bd = this.M = this.Vf = 0;
    this.input = new Uint8Array(a);
    this.Ag = u;
    this.jf = tf;
    this.Jb = u;
    if (b || !(b = {})) b.index && (this.M = b.index),
    b.bufferSize && (this.hf = b.bufferSize),
    b.bufferType && (this.jf = b.bufferType),
    b.resize && (this.Jb = b.resize);
    switch (this.jf) {
    case uf:
        this.la = 32768;
        this.Ua = new Uint8Array(32768 + this.hf + 258);
        break;
    case tf:
        this.la = 0;
        this.Ua = new Uint8Array(this.hf);
        this.tc = this.xi;
        this.Dg = this.mi;
        this.qf = this.ri;
        break;
    default:
        m(Error("invalid inflate mode"))
    }
}
var uf = 0,
tf = 1;
sf.prototype.Yb = function() {
    for (; ! this.Ag;) {
        var a = vf(this, 3);
        a & 1 && (this.Ag = q);
        a >>>= 1;
        switch (a) {
        case 0:
            var a = this.input,
            b = this.M,
            c = this.Ua,
            e = this.la,
            d = p,
            f = p,
            g = p,
            h = c.length,
            d = p;
            this.rb = this.Bd = 0;
            d = a[b++];
            d === p && m(Error("invalid uncompressed block header: LEN (first byte)"));
            f = d;
            d = a[b++];
            d === p && m(Error("invalid uncompressed block header: LEN (second byte)"));
            f |= d << 8;
            d = a[b++];
            d === p && m(Error("invalid uncompressed block header: NLEN (first byte)"));
            g = d;
            d = a[b++];
            d === p && m(Error("invalid uncompressed block header: NLEN (second byte)"));
            g |= d << 8;
            f === ~g && m(Error("invalid uncompressed block header: length verify"));
            b + f > a.length && m(Error("input buffer is broken"));
            switch (this.jf) {
            case uf:
                for (; e + f > c.length;) d = h - e,
                f -= d,
                c.set(a.subarray(b, b + d), e),
                e += d,
                b += d,
                this.la = e,
                c = this.tc(),
                e = this.la;
                break;
            case tf:
                for (; e + f > c.length;) c = this.tc({
                    Jg: 2
                });
                break;
            default:
                m(Error("invalid inflate mode"))
            }
            c.set(a.subarray(b, b + f), e);
            e += f;
            this.M = b += f;
            this.la = e;
            this.Ua = c;
            break;
        case 1:
            this.qf(wf, xf);
            break;
        case 2:
            yf(this);
            break;
        default:
            m(Error("unknown BTYPE: " + a))
        }
    }
    return this.Dg()
};
var zf = new Uint16Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
Af = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]),
Bf = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]),
Cf = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]),
Df = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
Ef = new Uint8Array(288),
Ff,
Gf;
Ff = 0;
for (Gf = Ef.length; Ff < Gf; ++Ff) Ef[Ff] = 143 >= Ff ? 8 : 255 >= Ff ? 9 : 279 >= Ff ? 7 : 8;
var wf = rf(Ef),
Hf = new Uint8Array(30),
If,
Jf;
If = 0;
for (Jf = Hf.length; If < Jf; ++If) Hf[If] = 5;
var xf = rf(Hf);
function vf(a, b) {
    for (var c = a.Bd,
    e = a.rb,
    d = a.input,
    f = a.M,
    g; e < b;) g = d[f++],
    g === p && m(Error("input buffer is broken")),
    c |= g << e,
    e += 8;
    g = c & (1 << b) - 1;
    a.Bd = c >>> b;
    a.rb = e - b;
    a.M = f;
    return g
}
function Kf(a, b) {
    for (var c = a.Bd,
    e = a.rb,
    d = a.input,
    f = a.M,
    g = b[0], h = b[1], l; e < h;) l = d[f++],
    l === p && m(Error("input buffer is broken")),
    c |= l << e,
    e += 8;
    d = g[c & (1 << h) - 1];
    g = d >>> 16;
    a.Bd = c >> g;
    a.rb = e - g;
    a.M = f;
    return d & 65535
}
function yf(a) {
    function b(a, b, c) {
        var d, e, f;
        for (f = 0; f < a;) switch (d = Kf(this, b), d) {
        case 16:
            for (d = 3 + vf(this, 2); d--;) c[f++] = e;
            break;
        case 17:
            for (d = 3 + vf(this, 3); d--;) c[f++] = 0;
            e = 0;
            break;
        case 18:
            for (d = 11 + vf(this, 7); d--;) c[f++] = 0;
            e = 0;
            break;
        default:
            e = c[f++] = d
        }
        return c
    }
    var c = vf(a, 5) + 257,
    e = vf(a, 5) + 1,
    d = vf(a, 4) + 4,
    f = new Uint8Array(zf.length),
    g;
    for (g = 0; g < d; ++g) f[zf[g]] = vf(a, 3);
    d = rf(f);
    f = new Uint8Array(c);
    g = new Uint8Array(e);
    a.qf(rf(b.call(a, c, d, f)), rf(b.call(a, e, d, g)))
}
w = sf.prototype;
w.qf = function(a, b) {
    var c = this.Ua,
    e = this.la;
    this.Gg = a;
    for (var d = c.length - 258,
    f, g, h; 256 !== (f = Kf(this, a));) if (256 > f) e >= d && (this.la = e, c = this.tc(), e = this.la),
    c[e++] = f;
    else {
        f -= 257;
        h = Af[f];
        0 < Bf[f] && (h += vf(this, Bf[f]));
        f = Kf(this, b);
        g = Cf[f];
        0 < Df[f] && (g += vf(this, Df[f]));
        e >= d && (this.la = e, c = this.tc(), e = this.la);
        for (; h--;) c[e] = c[e++-g]
    }
    for (; 8 <= this.rb;) this.rb -= 8,
    this.M--;
    this.la = e
};
w.ri = function(a, b) {
    var c = this.Ua,
    e = this.la;
    this.Gg = a;
    for (var d = c.length,
    f, g, h; 256 !== (f = Kf(this, a));) if (256 > f) e >= d && (c = this.tc(), d = c.length),
    c[e++] = f;
    else {
        f -= 257;
        h = Af[f];
        0 < Bf[f] && (h += vf(this, Bf[f]));
        f = Kf(this, b);
        g = Cf[f];
        0 < Df[f] && (g += vf(this, Df[f]));
        e + h > d && (c = this.tc(), d = c.length);
        for (; h--;) c[e] = c[e++-g]
    }
    for (; 8 <= this.rb;) this.rb -= 8,
    this.M--;
    this.la = e
};
w.tc = function() {
    var a = new Uint8Array(this.la - 32768),
    b = this.la - 32768,
    c = this.Ua;
    a.set(c.subarray(32768, a.length));
    this.gf.push(a);
    this.Vf += a.length;
    c.set(c.subarray(b, b + 32768));
    this.la = 32768;
    return c
};
w.xi = function(a) {
    var b = this.input.length / this.M + 1 | 0,
    c = this.input,
    e = this.Ua;
    a && ("number" === typeof a.Jg && (b = a.Jg), "number" === typeof a.fi && (b += a.fi));
    2 > b ? (a = (c.length - this.M) / this.Gg[2], a = 258 * (a / 2) | 0, a = a < e.length ? e.length + a: e.length << 1) : a = e.length * b;
    a = new Uint8Array(a);
    a.set(e);
    return this.Ua = a
};
w.Dg = function() {
    var a = 0,
    b = this.Ua,
    c = this.gf,
    e, d = new Uint8Array(this.Vf + (this.la - 32768)),
    f,
    g,
    h,
    l;
    if (0 === c.length) return this.Ua.subarray(32768, this.la);
    f = 0;
    for (g = c.length; f < g; ++f) {
        e = c[f];
        h = 0;
        for (l = e.length; h < l; ++h) d[a++] = e[h]
    }
    f = 32768;
    for (g = this.la; f < g; ++f) d[a++] = b[f];
    this.gf = [];
    return this.buffer = d
};
w.mi = function() {
    var a, b = this.la;
    this.Jb ? (a = new Uint8Array(b), a.set(this.Ua.subarray(0, b))) : a = this.Ua.subarray(0, b);
    return this.buffer = a
};
new Uint8Array(256);
var Lf;
for (Lf = 0; 256 > Lf; ++Lf) for (var Mf = Lf,
Nf = 7,
Mf = Mf >>> 1; Mf; Mf >>>= 1)--Nf;
var Of = [],
Pf;
for (Pf = 0; 288 > Pf; Pf++) switch (q) {
case 143 >= Pf: Of.push([Pf + 48, 8]);
    break;
case 255 >= Pf: Of.push([Pf - 144 + 400, 9]);
    break;
case 279 >= Pf: Of.push([Pf - 256 + 0, 7]);
    break;
case 287 >= Pf: Of.push([Pf - 280 + 192, 8]);
    break;
default:
    m("invalid literal: " + Pf)
}
function Qf() {
    var a = Rf;
    switch (q) {
    case 3 === a: return [257, a - 3, 0];
    case 4 === a: return [258, a - 4, 0];
    case 5 === a: return [259, a - 5, 0];
    case 6 === a: return [260, a - 6, 0];
    case 7 === a: return [261, a - 7, 0];
    case 8 === a: return [262, a - 8, 0];
    case 9 === a: return [263, a - 9, 0];
    case 10 === a: return [264, a - 10, 0];
    case 12 >= a: return [265, a - 11, 1];
    case 14 >= a: return [266, a - 13, 1];
    case 16 >= a: return [267, a - 15, 1];
    case 18 >= a: return [268, a - 17, 1];
    case 22 >= a: return [269, a - 19, 2];
    case 26 >= a: return [270, a - 23, 2];
    case 30 >= a: return [271, a - 27, 2];
    case 34 >= a: return [272, a - 31, 2];
    case 42 >= a: return [273, a - 35, 3];
    case 50 >= a: return [274, a - 43, 3];
    case 58 >= a: return [275, a - 51, 3];
    case 66 >= a: return [276, a - 59, 3];
    case 82 >= a: return [277, a - 67, 4];
    case 98 >= a: return [278, a - 83, 4];
    case 114 >= a: return [279, a - 99, 4];
    case 130 >= a: return [280, a - 115, 4];
    case 162 >= a: return [281, a - 131, 5];
    case 194 >= a: return [282, a - 163, 5];
    case 226 >= a: return [283, a - 195, 5];
    case 257 >= a: return [284, a - 227, 5];
    case 258 === a: return [285, a - 258, 0];
    default:
        m("invalid length: " + a)
    }
}
var Sf = [],
Rf,
Tf;
for (Rf = 3; 258 >= Rf; Rf++) Tf = Qf(),
Sf[Rf] = Tf[2] << 24 | Tf[1] << 16 | Tf[0];
new Uint32Array(Sf);
function Uf() {};
function Vf(a) {
    this.input = a;
    this.M = 0;
    this.member = []
}
Vf.prototype.Yb = function() {
    for (var a = this.input.length; this.M < a;) {
        var b = new Uf,
        c = p,
        e = p,
        d = p,
        f = c = d = p,
        g = p,
        c = c = p,
        h = this.input,
        e = this.M;
        b.Pg = h[e++];
        b.Qg = h[e++]; (31 !== b.Pg || 139 !== b.Qg) && m(Error("invalid file signature:", b.Pg, b.Qg));
        b.Cg = h[e++];
        switch (b.Cg) {
        case 8:
            break;
        default:
            m(Error("unknown compression method: " + b.Cg))
        }
        b.me = h[e++];
        c = h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24;
        b.Ml = new Date(1E3 * c);
        b.Xl = h[e++];
        b.Rl = h[e++];
        0 < (b.me & 4) && (b.Ge = h[e++] | h[e++] << 8, e += b.Ge);
        if (0 < (b.me & 8)) {
            g = [];
            for (f = 0; 0 < (c = h[e++]);) g[f++] = String.fromCharCode(c);
            b.name = g.join("")
        }
        if (0 < (b.me & 16)) {
            g = [];
            for (f = 0; 0 < (c = h[e++]);) g[f++] = String.fromCharCode(c);
            b.comment = g.join("")
        }
        0 < (b.me & 2) && (b.ni = qf.kf(h, 0, e) & 65535, b.ni !== (h[e++] | h[e++] << 8) && m(Error("invalid header crc16")));
        c = h[h.length - 4] | h[h.length - 3] << 8 | h[h.length - 2] << 16 | h[h.length - 1] << 24;
        h.length - e - 4 - 4 < 512 * c && (d = c);
        e = new sf(h, {
            index: e,
            bufferSize: d
        });
        b.data = d = e.Yb();
        e = e.M;
        b.wl = c = (h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24) >>> 0;
        qf.kf(d) !== c && m(Error("invalid CRC-32 checksum: 0x" + qf.kf(d).toString(16) + " / 0x" + c.toString(16)));
        b.Fl = c = (h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24) >>> 0; (d.length & 4294967295) !== c && m(Error("invalid input size: " + (d.length & 4294967295) + " / " + c));
        this.member.push(b);
        this.M = e
    }
    a = this.member;
    b = d = e = 0;
    for (h = a.length; b < h; ++b) d += a[b].data.length;
    d = new Uint8Array(d);
    for (b = 0; b < h; ++b) d.set(a[b].data, e),
    e += a[b].data.length;
    return d
};
function Wf() {
    Re.call(this);
    this.f = "parserMGZ";
    this.Mc = u
}
C(Wf, Re);
Wf.prototype.parse = function(a, b, c, e) {
    D.Ja(this.f + ".parse");
    window.console.log(b);
    e && (c = (new Vf(new Uint8Array(c))).Yb(), c = c.buffer);
    e = this.vc(c);
    var d = [e.Af, e.Bf, e.Cf];
    b.ca = d;
    var f = e.Gh;
    b.qb = f;
    c = e.min;
    var g = e.max;
    b.ra = b.fa = c;
    b.ia = b.ea = g; - Infinity == b.U && (b.U = c);
    Infinity == b.W && (b.W = g);
    c = Rc();
    if ("false" == b.reslicing || b.reslicing == u) T(c, 0, b.qb[0], 0, 0, 0),
    T(c, 1, 0, b.qb[1], 0, 0),
    T(c, 2, 0, 0, b.qb[2], 0),
    T(c, 3, 0, 0, 0, 1),
    Uc(c, 0, 0, 0, 1);
    else {
        T(c, 0, e.eb[0][0], e.eb[1][0], e.eb[2][0], 0);
        T(c, 1, e.eb[0][1], e.eb[1][1], e.eb[2][1], 0);
        T(c, 2, e.eb[0][2], e.eb[1][2], e.eb[2][2], 0);
        T(c, 3, 0, 0, 0, 1);
        for (var g = d[0] / 2, h = d[1] / 2, d = d[2] / 2, l = [0, 0, 0], j = 0; 3 > j; ++j) l[j] = e.eb[3][j] - (c[j + 0] * f[0] * g + c[j + 4] * f[1] * h + c[j + 8] * f[2] * d);
        Uc(c, l[0], l[1], l[2], 1)
    }
    e.cb = c;
    e.fb = Rc();
    ad(e.cb, e.fb);
    g = Qc(0, 0, 0, 1);
    f = Pc();
    cd(c, g, f);
    h = Qc(1, 1, 1, 1);
    g = Pc();
    cd(c, h, g);
    c = Ue(c, b.ca);
    e.Bc = [g[0] - f[0], g[1] - f[1], g[2] - f[2]];
    e.zc = [c[1] - c[0] + 1, c[3] - c[2] + 1, c[5] - c[4] + 1];
    e.Ac = [c[0], c[2], c[4]];
    b.Gb(e);
    D.Da(this.f + ".parse");
    b.ib = af(this, b);
    e = new ld;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
Wf.prototype.vc = function(a) {
    this.J = a;
    a = {
        version: 0,
        Ph: 0,
        Nh: 0,
        Ei: 0,
        Oh: 0,
        Af: 0,
        Bf: 0,
        Cf: 0,
        nj: 0,
        type: 0,
        vi: 0,
        vh: 0,
        Ck: t,
        eb: t,
        Gh: t,
        data: t,
        min: Infinity,
        max: -Infinity
    };
    a.version = Z(this, "uint");
    a.Af = Z(this, "uint");
    a.Bf = Z(this, "uint");
    a.Cf = Z(this, "uint");
    a.nj = Z(this, "uint");
    a.type = Z(this, "uint");
    a.vi = Z(this, "uint");
    a.vh = Z(this, "ushort");
    if (0 < a.vh) {
        a.Gh = Z(this, "float", 3);
        var b = [];
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        a.eb = b
    }
    this.C = 284;
    b = a.Af * a.Bf * a.Cf;
    switch (a.type) {
    case 0:
        a.data = Z(this, "uchar", b);
        break;
    case 1:
        a.data = Z(this, "uint", b);
        break;
    case 3:
        a.data = Z(this, "float", b);
        break;
    case 4:
        a.data = Z(this, "ushort", b);
        break;
    default:
        m(Error("Unsupported MGH/MGZ data type: " + a.type))
    }
    b = Se(a.data);
    a.min = b[0];
    a.max = b[1];
    this.C + 16 < this.J.byteLength && (a.Ph = Z(this, "float"), a.Ei = Z(this, "float"), a.Nh = Z(this, "float"), a.Oh = Z(this, "float"));
    return a
};
A("X.parserMGZ", Wf);
A("X.parserMGZ.prototype.parse", Wf.prototype.parse);
function Xf() {
    Re.call(this);
    this.f = "parserLBL"
}
C(Xf, Re);
Xf.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    var e = b.Nc,
    d = e.length;
    0 == d && m(Error("No _pointIndices defined on the X.object."));
    this.J = c;
    var f = [],
    g = Z(this, "uchar", c.byteLength),
    h = g.length,
    l = u,
    j = 0;
    for (c = 1; c < h; c++) 10 == g[c - 1] ? (j = c, l = q) : l && 32 == g[c] && (f.push(parseInt(Te(g, j, c), 10)), l = u);
    g = b.F.I ? b.F.I: new Float32Array(d);
    h = f.length;
    for (c = 0; c < h; c++) g[f[c]] = 1;
    f = new Float32Array(3 * d);
    for (c = h = 0; c < d; c++) l = e[c],
    l > d && m(Error("Could not find scalar for vertex.")),
    l = g[l],
    f[h++] = l,
    f[h++] = l,
    f[h++] = l;
    b.F.I = g;
    b.F.dd = f;
    b.F.j = q;
    D.Da(this.f + ".parse");
    e = new ld;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserLBL", Xf);
A("X.parserLBL.prototype.parse", Xf.prototype.parse);
function Yf() {
    Re.call(this);
    this.f = "parserCRV";
    this.Mc = u
}
C(Yf, Re);
Yf.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    var e = b.Nc;
    0 == e.length && m(Error("No _pointIndices defined on the X.object."));
    this.J = c;
    this.C = 3;
    var d = Z(this, "uint");
    Z(this, "uint");
    Z(this, "uint");
    var f = 0,
    g = 0,
    h = 0,
    l = 0,
    j = 0,
    k = 0,
    n = 0,
    s = 0,
    r = 0,
    y = 0,
    z = 0;
    c = Array(2);
    var F = Array(2),
    G = Z(this, "float", d),
    H;
    for (H = 0; H < d; H++) {
        var B = G[H];
        0 == H && (c[0] = F[0] = B);
        0 <= B ? (f++, l += B) : (g++, h += B);
        r += B;
        z++;
        F[0] = Math.max(B, F[0]);
        c[0] = Math.min(B, c[0]);
        G[H] = B
    }
    0 != f && (j = l / f);
    0 != g && (k = h / g);
    0 != z && (y = r / z);
    for (z = r = h = l = 0; z < d; z++) B = G[z],
    H = 0,
    0 <= B ? (H = Math.pow(B - j, 2), l += H) : (H = Math.pow(B - k, 2), h += H),
    H = Math.pow(B - y, 2),
    r += H;
    1 < f && (n = Math.sqrt(l / (f - 1)));
    1 < g && (s = Math.sqrt(h / (g - 1)));
    c[1] = k - 2.5 * s;
    F[1] = j + 2.5 * n;
    d = e.length;
    f = new Float32Array(3 * d);
    for (z = 0; z < d; z++) g = G[e[z]],
    h = 3 * z,
    f[h] = g,
    f[h + 1] = g,
    f[h + 2] = g;
    b.F.ra = c[1];
    b.F.ia = F[1]; - Infinity == b.F.U && (b.F.U = c[1]);
    Infinity == b.F.W && (b.F.W = F[1]);
    b.F.I = G;
    b.F.dd = f;
    b.F.j = q;
    D.Da(this.f + ".parse");
    e = new ld;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserCRV", Yf);
A("X.parserCRV.prototype.parse", Yf.prototype.parse);
function Zf(a, b) {
    var c, e;
    this.input = a;
    this.M = 0;
    if (b || !(b = {})) b.index && (this.M = b.index),
    b.verify && (this.tk = b.verify);
    c = a[this.M++];
    e = a[this.M++];
    switch (c & 15) {
    case 8:
        this.method = 8;
        break;
    default:
        m(Error("unsupported compression method"))
    }
    0 !== ((c << 8) + e) % 31 && m(Error("invalid fcheck flag:" + ((c << 8) + e) % 31));
    e & 32 && m(Error("fdict flag is not supported"));
    this.wh = new sf(a, {
        index: this.M,
        bufferSize: b.bufferSize,
        bufferType: b.bufferType,
        resize: b.resize
    })
}
Zf.prototype.Yb = function() {
    var a = this.input,
    b;
    b = this.wh.Yb();
    this.M = this.wh.M;
    if (this.tk) {
        var a = (a[this.M++] << 24 | a[this.M++] << 16 | a[this.M++] << 8 | a[this.M++]) >>> 0,
        c = b;
        if ("string" === typeof c) {
            var c = c.split(""),
            e,
            d;
            e = 0;
            for (d = c.length; e < d; e++) c[e] = (c[e].charCodeAt(0) & 255) >>> 0
        }
        e = 1;
        d = 0;
        for (var f = c.length,
        g, h = 0; 0 < f;) {
            g = 1024 < f ? 1024 : f;
            f -= g;
            do e += c[h++],
            d += e;
            while (--g);
            e %= 65521;
            d %= 65521
        }
        a !== (d << 16 | e) >>> 0 && m(Error("invalid adler-32 checksum"))
    }
    return b
};
function $f() {
    Re.call(this);
    this.f = "parserRAW"
}
C($f, Re);
$f.prototype.parse = function(a, b, c, e) {
    D.Ja(this.f + ".parse");
    e && (c = (new Zf(new Uint8Array(c))).Yb(), c = c.buffer);
    e = {};
    e.data = new Uint8Array(c);
    var d = Se(e.data);
    c = d[0];
    d = d[1];
    e.min = b.ra = b.fa = c;
    e.max = b.ia = b.ea = d; - Infinity == b.U && (b.U = c);
    Infinity == b.W && (b.W = d);
    d = Sc();
    e.cb = d;
    e.fb = Sc();
    var f = Qc(0, 0, 0, 1);
    c = Pc();
    cd(d, f, c);
    var g = Qc(1, 1, 1, 1),
    f = Pc();
    cd(d, g, f);
    d = Ue(d, b.ca);
    e.Bc = [f[0] - c[0], f[1] - c[1], f[2] - c[2]];
    e.zc = [d[1] - d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
    e.Ac = [d[0], d[2], d[4]];
    b.Gb(e);
    D.Da(this.f + ".parse");
    b.ib = af(this, b);
    e = new ld;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserRAW", $f);
A("X.parserRAW.prototype.parse", $f.prototype.parse);
function ag() {
    Re.call(this);
    this.f = "parserLUT"
}
C(ag, Re);
ag.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    this.J = c;
    c = Z(this, "uchar", c.byteLength);
    var e = c.length,
    d = 0,
    f;
    for (f = 0; f < e; f++) if (10 == c[f]) {
        var g = Te(c, d, f),
        d = f + 1,
        g = g.replace(/^\s+|\s+$/g, "");
        "#" != g[0] && (g = g.split(" "), g = g.filter(function(a) {
            return "" != a
        }), 6 == g.length && (g[2] = parseInt(g[2], 10) / 255, g[3] = parseInt(g[3], 10) / 255, g[4] = parseInt(g[4], 10) / 255, g[5] = parseInt(g[5], 10) / 255, a.add(parseInt(g[0], 10), g[1], g[2], g[3], g[4], g[5], 10)))
    }
    D.Da(this.f + ".parse");
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserLUT", ag);
A("X.parserLUT.prototype.parse", ag.prototype.parse);
function bg() {
    Re.call(this);
    this.f = "parserMRC"
}
C(bg, Re);
bg.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    c = this.vc(c);
    var e = c.min,
    d = c.max;
    b.ca = [c.Hd, c.Id, c.Jd];
    b.qb = [c.Ge / c.bh, c.Jh / c.dh, c.Kh / c.eh];
    b.ra = b.fa = e;
    b.ia = b.ea = d; - Infinity == b.U && (b.U = e);
    Infinity == b.W && (b.W = d);
    d = Rc();
    T(d, 3, 0, 0, 0, 1);
    T(d, 0, -1, 0, 0, c.Hd);
    T(d, 1, 0, 0, -1, c.Id);
    T(d, 2, 0, -1, 0, c.Jd);
    c.cb = d;
    c.fb = Rc();
    ad(c.cb, c.fb);
    var f = Qc(0, 0, 0, 1),
    e = Pc();
    cd(d, f, e);
    var g = Qc(1, 1, 1, 1),
    f = Pc();
    cd(d, g, f);
    g = [c.Hd, c.Id, c.Jd];
    d = Ue(d, g);
    c.Bc = [f[0] - e[0], f[1] - e[1], f[2] - e[2]];
    c.zc = [d[1] + d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
    c.Ac = [d[0], d[2], d[4]];
    b.ca = g;
    b.Gb(c);
    b.ib = af(this, b);
    D.Da(this.f + ".parse");
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
bg.prototype.vc = function(a) {
    this.J = a;
    a = {
        Hd: 0,
        Id: 0,
        Jd: 0,
        mode: 0,
        Ol: 0,
        Pl: 0,
        Ql: 0,
        bh: 0,
        dh: 0,
        eh: 0,
        Ge: 0,
        Jh: 0,
        Kh: 0,
        alpha: 0,
        ii: 0,
        Fi: 0,
        fj: 0,
        gj: 0,
        hj: 0,
        ef: 0,
        he: 0,
        qc: 0,
        Hl: 0,
        next: 0,
        oi: 0,
        zi: t,
        oj: 0,
        qj: 0,
        zi: t,
        Ti: 0,
        El: 0,
        Ri: 0,
        bj: 0,
        kj: 0,
        lj: 0,
        rk: 0,
        sk: 0,
        ok: t,
        uk: 0,
        wk: 0,
        xk: 0,
        vl: 0,
        Wl: 0,
        ak: 0,
        pj: 0,
        data: t,
        min: Infinity,
        max: -Infinity,
        Ll: 0,
        zh: t,
        Vl: t,
        Tl: t,
        orientation: t,
        Nl: t
    };
    this.C = 0;
    a.Hd = Z(this, "sint");
    a.Id = Z(this, "sint");
    a.Jd = Z(this, "sint");
    a.mode = Z(this, "sint");
    var b = a.Hd * a.Id * a.Jd;
    this.C = 1024;
    switch (a.mode) {
    case 0:
        a.data = Z(this, "schar", b);
        break;
    case 1:
        a.data = Z(this, "sshort", b);
        break;
    case 2:
        a.data = Z(this, "float", b);
        break;
    case 3:
        a.data = Z(this, "uint", b);
        break;
    case 4:
        a.data = Z(this, "double", b);
        break;
    case 6:
        a.data = Z(this, "ushort", b);
        break;
    case 16:
        a.data = Z(this, "uchar", b);
        break;
    default:
        m(Error("Unsupported MRC data type: " + a.mode))
    }
    this.C = 28;
    a.bh = Z(this, "sint");
    a.dh = Z(this, "sint");
    a.eh = Z(this, "sint");
    a.Ge = Z(this, "float");
    a.Jh = Z(this, "float");
    a.Kh = Z(this, "float");
    a.alpha = Z(this, "float");
    a.ii = Z(this, "float");
    a.Fi = Z(this, "float");
    a.fj = Z(this, "sint");
    a.gj = Z(this, "sint");
    a.hj = Z(this, "sint");
    a.ef = Z(this, "float");
    a.he = Z(this, "float");
    a.qc = Z(this, "float");
    a.Gl = Z(this, "sint");
    a.next = Z(this, "sint");
    a.oi = Z(this, "short");
    a.oj = Z(this, "short");
    a.qj = Z(this, "short");
    a.Ti = Z(this, "sint");
    a.Dl = Z(this, "sint");
    a.Ri = Z(this, "short");
    a.bj = Z(this, "short");
    a.kj = Z(this, "short");
    a.lj = Z(this, "short");
    a.rk = Z(this, "short");
    a.sk = Z(this, "short");
    a.ok = Z(this, "float", 6);
    this.C = 196;
    a.uk = Z(this, "float");
    a.wk = Z(this, "float");
    a.xk = Z(this, "float");
    this.C = 216;
    a.ak = Z(this, "float");
    a.pj = Z(this, "sint");
    a.Il = Z(this, "schar", 10);
    if (0 != a.next) switch (this.C = parseInt(a.next + 1024, 10), a.mode) {
    case 0:
        a.data = Z(this, "schar", b);
        break;
    case 1:
        a.data = Z(this, "sshort", b);
        break;
    case 2:
        a.data = Z(this, "float", b);
        break;
    case 3:
        a.data = Z(this, "uint", b);
        break;
    case 4:
        a.data = Z(this, "double", b);
        break;
    case 6:
        a.data = Z(this, "ushort", b);
        break;
    case 16:
        a.data = Z(this, "uchar", b);
        break;
    default:
        m(Error("Unsupported MRC data type: " + a.mode))
    }
    0 > a.qc - (a.he - a.qc) ? (a.min = a.ef, a.max = a.qc + (a.qc - a.ef)) : (a.min = a.qc - (a.he - a.qc), a.max = a.he);
    return a
};
A("X.parserMRC", bg);
A("X.parserMRC.prototype.parse", bg.prototype.parse);
function cg() {
    Re.call(this);
    this.f = "parserNRRD"
}
C(cg, Re);
cg.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    this.J = c;
    c = Z(this, "uchar", c.byteLength);
    var e = c.length,
    d = t,
    f = 0,
    g;
    for (g = 1; g < e; g++) if (10 == c[g - 1] && 10 == c[g]) {
        d = Te(c, 0, g - 2);
        f = g + 1;
        break
    }
    var h, l, j, k, e = d.split(/\r?\n/),
    d = 0;
    for (g = e.length; d < g; d++) if (h = e[d], h.match(/NRRD\d+/)) this.$i = q;
    else if (!h.match(/^#/) && (k = h.match(/(.*):(.*)/))) l = k[1].trim(),
    h = k[2].trim(),
    (j = this.Ai[l]) ? j.call(this, h) : this[l] = h;
    this.$i || m(Error("Not an NRRD file"));
    "raw" !== this.encoding && ("gzip" !== this.encoding && "gz" !== this.encoding) && m(Error("Only raw or gz/gzip encoding is allowed"));
    if (!this.ha && (this.ha = [new R(1, 0, 0), new R(0, 1, 0), new R(0, 0, 1)], this.Tf)) {
        e = [];
        for (k = 0; 2 >= k; k++) e.push(!isNaN(this.Tf[k]) ? this.ha[k].scale(this.Tf[k]) : p)
    }
    f = c.subarray(f);
    if ("gzip" == this.encoding || "gz" == this.encoding) f = (new Vf(new Uint8Array(f))).Yb();
    f = f.buffer;
    c = {
        data: t,
        min: Infinity,
        max: -Infinity
    };
    c.data = new this.Mb(f);
    k = Se(c.data);
    f = c.min = k[0];
    k = c.max = k[1];
    b.ra = b.fa = f;
    b.ia = b.ea = k;
    b.ca = [this.Rf[0], this.Rf[1], this.Rf[2]];
    e = (new R(this.ha[0][0], this.ha[0][1], this.ha[0][2])).Ib();
    d = (new R(this.ha[1][0], this.ha[1][1], this.ha[1][2])).Ib();
    g = (new R(this.ha[2][0], this.ha[2][1], this.ha[2][2])).Ib();
    b.qb = [e, d, g]; - Infinity == b.U && (b.U = f);
    Infinity == b.W && (b.W = k);
    e = k = 1;
    "left-posterior-superior" == this.zh && (e = k = -1);
    f = Sc();
    "false" == b.reslicing || b.reslicing == u ? (T(f, 0, k, 0, 0, 0), T(f, 1, 0, e, 0, 0), T(f, 2, 0, 0, 1, 0)) : (T(f, 0, k * this.ha[0][0], k * this.ha[1][0], k * this.ha[2][0], k * this.Sf[0]), T(f, 1, e * this.ha[0][1], e * this.ha[1][1], e * this.ha[2][1], e * this.Sf[1]), T(f, 2, 1 * this.ha[0][2], 1 * this.ha[1][2], 1 * this.ha[2][2], 1 * this.Sf[2]));
    T(f, 3, 0, 0, 0, 1);
    c.cb = f;
    c.fb = Rc();
    ad(c.cb, c.fb);
    e = Qc(0, 0, 0, 1);
    k = Pc();
    cd(f, e, k);
    d = Qc(1, 1, 1, 1);
    e = Pc();
    cd(f, d, e);
    f = Ue(f, b.ca);
    c.Bc = [e[0] - k[0], e[1] - k[1], e[2] - k[2]];
    c.zc = [f[1] - f[0] + 1, f[3] - f[2] + 1, f[5] - f[4] + 1];
    c.Ac = [f[0], f[2], f[4]];
    b.Gb(c);
    D.Da(this.f + ".parse");
    b.ib = af(this, b);
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
cg.prototype.Ai = {
    type: function(a) {
        switch (a) {
        case "uchar":
        case "unsigned char":
        case "uint8":
        case "uint8_t":
            this.Mb = Uint8Array;
            break;
        case "signed char":
        case "int8":
        case "int8_t":
            this.Mb = Int8Array;
            break;
        case "short":
        case "short int":
        case "signed short":
        case "signed short int":
        case "int16":
        case "int16_t":
            this.Mb = Int16Array;
            break;
        case "ushort":
        case "unsigned short":
        case "unsigned short int":
        case "uint16":
        case "uint16_t":
            this.Mb = Uint16Array;
            break;
        case "int":
        case "signed int":
        case "int32":
        case "int32_t":
            this.Mb = Int32Array;
            break;
        case "uint":
        case "unsigned int":
        case "uint32":
        case "uint32_t":
            this.Mb = Uint32Array;
            break;
        case "float":
            this.Mb = Float32Array;
            break;
        case "double":
            this.Mb = Float64Array;
            break;
        default:
            m(Error("Unsupported NRRD data type: " + a))
        }
        return this.type = a
    },
    endian: function(a) {
        return this.Al = a
    },
    encoding: function(a) {
        return this.encoding = a
    },
    dimension: function(a) {
        return this.Zb = parseInt(a, 10)
    },
    sizes: function(a) {
        var b, c, e, d;
        e = a.split(/\s+/);
        d = [];
        b = 0;
        for (c = e.length; b < c; b++) a = e[b],
        d.push(parseInt(a, 10));
        return this.Rf = d
    },
    space: function(a) {
        return this.zh = a
    },
    "space origin": function(a) {
        return this.Sf = a.split("(")[1].split(")")[0].split(",")
    },
    "space directions": function(a) {
        var b, c;
        a = a.match(/\(.*?\)/g);
        var e, d, f;
        f = [];
        e = 0;
        for (d = a.length; e < d; e++) c = a[e],
        f.push(function() {
            var a, d, e, f;
            e = c.slice(1, -1).split(/,/);
            f = [];
            a = 0;
            for (d = e.length; a < d; a++) b = e[a],
            f.push(parseFloat(b));
            return f
        } ());
        return this.ha = f
    },
    spacings: function(a) {
        var b;
        b = a.split(/\s+/);
        var c, e, d;
        d = [];
        c = 0;
        for (e = b.length; c < e; c++) a = b[c],
        d.push(parseFloat(a));
        return this.Tf = d
    }
};
A("X.parserNRRD", cg);
A("X.parserNRRD.prototype.parse", cg.prototype.parse);
function dg() {
    Re.call(this);
    this.f = "parserSTL"
}
C(dg, Re);
dg.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    this.J = c;
    var e = b.h,
    d = b.n;
    if ("solid" == Te(Z(this, "uchar", 5))) {
        b.h = e = new W(c.byteLength);
        b.n = d = new W(c.byteLength);
        var f = e,
        e = d,
        d = Z(this, "uchar", c.byteLength - 5);
        c = d.length;
        var g = u,
        h = u,
        l = 0,
        j;
        for (j = 0; j < c; j++) if (10 == d[j]) {
            if (g || h) {
                var k = Te(d, l, j).split(" "),
                h = parseFloat(k[0]),
                n = parseFloat(k[1]),
                k = parseFloat(k[2]);
                g ? (e.add(h, n, k), e.add(h, n, k), e.add(h, n, k)) : f.add(h, n, k);
                h = g = u
            }
        } else 32 == d[j - 1] && (102 == d[j] ? (l = j += 13, g = q) : 118 == d[j] && (l = j += 7, h = q))
    } else {
        this.C = 80;
        f = Z(this, "uint");
        b.h = e = new W(9 * f);
        b.n = d = new W(9 * f);
        for (c = c = 0; c < f; c++) g = Z(this, "float", 12),
        l = g[0],
        j = g[1],
        h = g[2],
        d.add(l, j, h),
        d.add(l, j, h),
        d.add(l, j, h),
        e.add(g[3], g[4], g[5]),
        e.add(g[6], g[7], g[8]),
        e.add(g[9], g[10], g[11]),
        this.C += 2
    }
    D.Da(this.f + ".parse");
    f = new ld;
    f.D = b;
    f.v = a;
    this.dispatchEvent(f)
};
A("X.parserSTL", dg);
A("X.parserSTL.prototype.parse", dg.prototype.parse);
function eg() {
    Re.call(this);
    this.f = "parserNII"
}
C(eg, Re);
eg.prototype.parse = function(a, b, c) {
    if (!fg(c)) try {
        c = (new Vf(new Uint8Array(c))).Yb().buffer,
        fg(c) || (this.Mc = u)
    } catch(e) {
        this.Mc = u
    }
    c = this.vc(c);
    var d = c.min,
    f = c.max;
    b.ra = b.fa = d;
    b.ia = b.ea = f; - Infinity == b.U && (b.U = d);
    Infinity == b.W && (b.W = f);
    d = Rc();
    T(d, 3, 0, 0, 0, 1);
    if ("false" == b.reslicing || b.reslicing == u) {
        var g = f = 1,
        h = 1;
        0 < c.sa[1] && (f = c.sa[1]);
        0 < c.sa[2] && (g = c.sa[2]);
        0 < c.sa[2] && (h = c.sa[3]);
        0 > c.sa[0] && (h = -h);
        T(d, 0, f, 0, 0, 0);
        T(d, 1, 0, g, 0, 0);
        T(d, 2, 0, 0, h, 0)
    } else if (0 < c.Nf) {
        var l = 0,
        j = c.sh,
        k = c.th,
        n = c.uh,
        h = g = f = 1,
        s = c.ph,
        r = c.qh,
        y = c.rh,
        l = 1 - (j * j + k * k + n * n);
        1E-7 > l ? (l = 1 / Math.sqrt(j * j + k * k + n * n), j *= l, k *= l, n *= l, l = 0) : l = Math.sqrt(l);
        0 < c.sa[1] && (f = c.sa[1]);
        0 < c.sa[2] && (g = c.sa[2]);
        0 < c.sa[2] && (h = c.sa[3]);
        0 > c.sa[0] && (h = -h);
        T(d, 0, (l * l + j * j - k * k - n * n) * f, 2 * (j * k - l * n) * g, 2 * (j * n + l * k) * h, s);
        T(d, 1, 2 * (j * k + l * n) * f, (l * l + k * k - j * j - n * n) * g, 2 * (k * n - l * j) * h, r);
        T(d, 2, 2 * (j * n - l * k) * f, 2 * (k * n + l * j) * g, (l * l + n * n - k * k - j * j) * h, y)
    } else 0 < c.xh ? (f = c.Ah, g = c.Bh, h = c.Ch, T(d, 0, f[0], f[1], f[2], f[3]), T(d, 1, g[0], g[1], g[2], g[3]), T(d, 2, h[0], h[1], h[2], h[3])) : 0 == c.Nf ? (T(d, 0, c.sa[1], 0, 0, 0), T(d, 1, 0, c.sa[2], 0, 0), T(d, 2, 0, 0, c.sa[3], 0)) : window.console.log("UNKNOWN METHOD IN PARSER NII");
    c.cb = d;
    c.fb = Rc();
    ad(c.cb, c.fb);
    g = Qc(0, 0, 0, 1);
    f = Pc();
    cd(d, g, f);
    h = Qc(1, 1, 1, 1);
    g = Pc();
    cd(d, h, g);
    h = [c.Zb[1], c.Zb[2], c.Zb[3]];
    d = Ue(d, h);
    c.Bc = [g[0] - f[0], g[1] - f[1], g[2] - f[2]];
    c.zc = [d[1] - d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
    c.Ac = [d[0], d[2], d[4]];
    b.ca = h;
    b.Gb(c);
    b.ib = af(this, b);
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
eg.prototype.vc = function(a) {
    this.J = a;
    a = {
        fk: 0,
        pi: t,
        qi: t,
        yi: 0,
        dk: 0,
        Yj: 0,
        ui: t,
        Zb: t,
        Wi: 0,
        Xi: 0,
        Yi: 0,
        Ui: 0,
        pf: 0,
        ji: 0,
        kk: 0,
        sa: t,
        Hh: 0,
        ck: 0,
        bk: 0,
        jk: 0,
        hk: t,
        vk: t,
        ki: 0,
        li: 0,
        ik: 0,
        pk: 0,
        Hi: 0,
        Ii: 0,
        si: t,
        hi: t,
        Nf: 0,
        xh: 0,
        sh: 0,
        th: 0,
        uh: 0,
        ph: 0,
        qh: 0,
        rh: 0,
        Ah: t,
        Bh: t,
        Ch: t,
        Vi: t,
        cj: t,
        data: t,
        min: Infinity,
        max: -Infinity
    };
    a.fk = Z(this, "uint");
    a.pi = Z(this, "uchar", 10);
    a.qi = Z(this, "uchar", 18);
    a.yi = Z(this, "uint");
    a.dk = Z(this, "ushort");
    a.Yj = Z(this, "uchar");
    a.ui = Z(this, "uchar");
    a.Zb = Z(this, "ushort", 8);
    a.Wi = Z(this, "float");
    a.Xi = Z(this, "float");
    a.Yi = Z(this, "float");
    a.Ui = Z(this, "ushort");
    a.pf = Z(this, "ushort");
    a.ji = Z(this, "ushort");
    a.kk = Z(this, "ushort");
    a.sa = Z(this, "float", 8);
    a.Hh = Z(this, "float");
    a.ck = Z(this, "float");
    a.bk = Z(this, "float");
    a.jk = Z(this, "ushort");
    a.hk = Z(this, "uchar");
    a.vk = Z(this, "uchar");
    a.ki = Z(this, "float");
    a.li = Z(this, "float");
    a.ik = Z(this, "float");
    a.pk = Z(this, "float");
    a.Hi = Z(this, "uint", 1);
    a.Ii = Z(this, "uint", 1);
    a.si = Z(this, "uchar", 80);
    a.hi = Z(this, "uchar", 24);
    a.Nf = Z(this, "ushort");
    a.xh = Z(this, "ushort");
    a.sh = Z(this, "float");
    a.th = Z(this, "float");
    a.uh = Z(this, "float");
    a.ph = Z(this, "float");
    a.qh = Z(this, "float");
    a.rh = Z(this, "float");
    a.Ah = Z(this, "float", 4);
    a.Bh = Z(this, "float", 4);
    a.Ch = Z(this, "float", 4);
    a.Vi = Z(this, "uchar", 16);
    a.cj = Z(this, "uchar", 4);
    this.C = parseInt(a.Hh, 10);
    var b = a.Zb[1] * a.Zb[2] * a.Zb[3];
    switch (a.pf) {
    case 2:
        a.data = Z(this, "uchar", b);
        break;
    case 4:
        a.data = Z(this, "sshort", b);
        break;
    case 8:
        a.data = Z(this, "sint", b);
        break;
    case 16:
        a.data = Z(this, "float", b);
        break;
    case 32:
        a.data = Z(this, "complex", b);
        break;
    case 64:
        a.data = Z(this, "double", b);
        break;
    case 256:
        a.data = Z(this, "schar", b);
        break;
    case 512:
        a.data = Z(this, "ushort", b);
        break;
    case 768:
        a.data = Z(this, "uint", b);
        break;
    default:
        m(Error("Unsupported NII data type: " + a.pf))
    }
    b = Se(a.data);
    a.min = b[0];
    a.max = b[1];
    return a
};
function fg(a) {
    var b = -1,
    b = "undefined" == typeof DataView ? (new Int32Array(a, 0, 1))[0] : (new DataView(a, 0)).getInt32(0, q);
    return 348 == b ? q: u
}
A("X.parserNII", eg);
A("X.parserNII.prototype.parse", eg.prototype.parse);
function gg() {
    Re.call(this);
    this.f = "parserTRK"
}
C(gg, Re);
gg.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    var e = b.h,
    d = b.n,
    f = b.pa;
    this.J = c;
    Z(this, "uchar", 6);
    Z(this, "ushort", 3);
    var g = Z(this, "float", 3);
    Z(this, "float", 3);
    var h = Z(this, "ushort");
    Z(this, "uchar", 200);
    Z(this, "ushort");
    Z(this, "uchar", 200);
    c = Z(this, "float", 16);
    Z(this, "uchar", 444);
    Z(this, "uchar", 4);
    Z(this, "uchar", 4);
    Z(this, "float", 6);
    Z(this, "uchar", 2);
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    var l = Z(this, "uint");
    Z(this, "uint");
    var j = Z(this, "uint"),
    k = 0 === l ? Infinity: l,
    n = [],
    s = [],
    l = Infinity,
    r = -Infinity,
    y = t,
    z = t,
    F = t,
    G = t,
    d = e = t,
    H = Z(this, "uint", (this.J.byteLength - 1E3) / 4);
    this.C = j;
    for (var B = Z(this, "float", (this.J.byteLength - 1E3) / 4), E = 0, j = f = 0; j < k; j++) {
        if ("undefined" === typeof H[E]) {
            k = j;
            break
        }
        for (var I = H[E], N = new W(3 * I), Q = 0, O = 0; O < I; O++) {
            var S = B[E + 3 * O + O * h + 1],
            da = B[E + 3 * O + O * h + 2],
            J = B[E + 3 * O + O * h + 3],
            S = S / g[0],
            da = da / g[1],
            J = J / g[2];
            N.add(S, da, J);
            if (0 < O) var ba = N.get(O - 1),
            Q = Q + Math.sqrt(Math.pow(S - ba[0], 2) + Math.pow(da - ba[1], 2) + Math.pow(J - ba[2], 2));
            O < I - 1 && (f += 6)
        }
        E += 3 * I + I * h + 1;
        O = N.mb;
        I = N.jb;
        S = N.nb;
        da = N.kb;
        J = N.ob;
        ba = N.lb;
        if (!y || O < y) y = O;
        if (!z || I > z) z = I;
        if (!F || S < F) F = S;
        if (!G || da > G) G = da;
        if (!e || J < e) e = J;
        if (!d || ba > d) d = ba;
        n.push(N);
        s.push(Q)
    }
    g = (y + z) / 2;
    h = (F + G) / 2;
    G = (e + d) / 2;
    F = new Float32Array(f);
    b.h = e = new W(f);
    b.n = d = new W(f);
    b.pa = f = new W(f);
    for (j = y = 0; j < k; j++) {
        z = n[j];
        H = z.count;
        Q = s[j];
        l = Math.min(l, Q);
        r = Math.max(r, Q);
        for (O = 0; O < H - 1; O++) {
            E = z.get(O);
            B = z.get(O + 1);
            e.add(E[0], E[1], E[2]);
            e.add(B[0], B[1], B[2]);
            var N = E[0] - g,
            I = E[1] - h,
            S = E[2] - G,
            da = Math.sqrt(N * N + I * I + S * S),
            J = B[0] - g,
            ba = B[1] - h,
            ka = B[2] - G,
            U = Math.sqrt(J * J + ba * ba + ka * ka);
            d.add(N / da, I / da, S / da);
            d.add(J / U, ba / U, ka / U);
            B = [Math.abs(B[0] - E[0]), Math.abs(B[1] - E[1]), Math.abs(B[2] - E[2])];
            E = Math.sqrt(B[0] * B[0] + B[1] * B[1] + B[2] * B[2]);
            B[0] /= E;
            B[1] /= E;
            B[2] /= E;
            f.add(B[0], B[1], B[2]);
            f.add(B[0], B[1], B[2]);
            F[y++] = Q;
            F[y++] = Q;
            F[y++] = Q;
            F[y++] = Q;
            F[y++] = Q;
            F[y++] = Q
        }
    }
    b.Ia = "LINES";
    k = new kd;
    k.ra = l;
    k.ia = r;
    k.U = l;
    k.W = r;
    k.dd = F;
    k.ug = u;
    k.j = q;
    b.F = k;
    l = u;
    for (j = 0; 16 > j; j++) if (0 != c[j]) {
        l = q;
        break
    }
    l == u && (c[0] = c[5] = c[10] = c[15] = 1);
    D.Da(this.f + ".parse");
    D.g.Wf(c, b.ja.Q);
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserTRK", gg);
A("X.parserTRK.prototype.parse", gg.prototype.parse);
function hg() {
    Re.call(this);
    this.f = "parserOBJ"
}
C(hg, Re);
hg.prototype.parse = function(a, b, c) {
    D.Ja(this.f + ".parse");
    this.J = c;
    c = c.byteLength;
    var e = Z(this, "uchar", c),
    d = [];
    b.h = new W(c);
    b.n = new W(c);
    var f = b.h,
    g = b.n,
    h = 0,
    l;
    for (l = 0; l < c; ++l) if (10 == e[l]) {
        var j = Te(e, h, l).replace(/\s{2,}/g, " ").split(" ");
        if ("v" == j[0]) d.push([parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3])]);
        else if ("f" == j[0]) {
            var k = d[parseInt(j[1], 10) - 1],
            h = d[parseInt(j[2], 10) - 1],
            j = d[parseInt(j[3], 10) - 1];
            f.add(k[0], k[1], k[2]);
            f.add(h[0], h[1], h[2]);
            f.add(j[0], j[1], j[2]);
            k = new R(k[0], k[1], k[2]);
            j = new R(j[0], j[1], j[2]);
            h = Ic((new R(h[0], h[1], h[2])).wa(k), j.wa(k));
            h.normalize();
            g.add(h.x, h.y, h.d);
            g.add(h.x, h.y, h.d);
            g.add(h.x, h.y, h.d)
        }
        h = l + 1
    }
    D.Da(this.f + ".parse");
    c = new ld;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserOBJ", hg);
A("X.parserOBJ.prototype.parse", hg.prototype.parse);
//ig()相当于X.loader()
function ig() {
    M.call(this);
    this.f = "loader";
    this.Kc = new zc;
    this.td = 0
}
C(ig, M);
function jg(a, b) {
    a.td += b / a.Kc.sf() / 3;
    a.td = Math.min(1, a.td);
    var c = new Od;
    c.Ad = a.td;
    a.dispatchEvent(c)
}
function kg(a) {
    a = a.r.$d;
    var b = a.split(".").pop().toUpperCase();
    b == a.toUpperCase() && (b = "");
    b in lg || m(Error("The " + b + " file format is not supported."));
    return [a, b, lg[b][0], lg[b][1], lg[b][2]]
}
//X.loader.prototype.load 
ig.prototype.load = function(a, b) { (!a || !b) && m(Error("No container or object to load."));
    if (!Cc(this.Kc.ga, a.qa) || this.Kc.get(a.qa)) {
        this.Kc.set(a.qa, u);
        var c = kg(a)[0];
        if (a.$a != t) this.parse(t, a, b);
        else {
            var e = new XMLHttpRequest;
            L(e, "abort", this.Ig.bind(this, e, a, b));
            L(e, "error", this.Ig.bind(this, e, a, b));
            L(e, "load", this.parse.bind(this, e, a, b));
            e.open("GET", c, q);
            e.responseType = "arraybuffer";
            e.send(t)
        }
    }
};
//X.loader.prototype.parse
ig.prototype.parse = function(a, b, c) {
	//debugger;
    jg(this, 1);
    setTimeout(function() {
    	//debugger;
        var e = kg(b),
        d = e[3],
        e = new e[2];
        $b(e, yd, this.complete.bind(this));
        var f = b.$a;
        f == t && (f = a.response, b.$a = f);
        e.parse(b, c, f, d)
    }.bind(this), 100)
};
ig.prototype.complete = function(a) {
    jg(this, 1);
    setTimeout(function() {
        var b = a.v,
        c = a.D;
        b.r.j = u;
        b.j = q;
        c.q();
        this.Kc.set(b.qa, q)
    }.bind(this), 100)
};
ig.prototype.Ig = function(a, b, c) {
    m(Error("Loading failed: ", b, c))
};
var lg = {
    OBJ: [hg, t],
    OFF: [kf, t],
    STL: [dg, t],
    VTK: [nf, t],
    TRK: [gg, t],
    MRC: [bg, t],
    ST: [bg, t],
    FSM: [pf, t],
    INFLATED: [pf, t],
    SMOOTHWM: [pf, t],
    SPHERE: [pf, t],
    PIAL: [pf, t],
    ORIG: [pf, t],
    NRRD: [cg, t],
    NII: [eg, t],
    GZ: [eg, t],
    DCM: [lf, t],
    DICOM: [lf, t],
    "": [lf, t],
    CRV: [Yf, t],
    LABEL: [Xf, t],
    MGH: [Wf, u],
    MGZ: [Wf, q],
    RAW: [$f, u],
    RZ: [$f, q],
    TXT: [ag, t],
    LUT: [ag, t],
    PNG: [bf, "png"],
    JPG: [bf, "jpeg"],
    JPEG: [bf, "jpeg"],
    GIF: [bf, "gif"]
};
function mg(a) {
    function b(a, b, e) {
        b = 2 * b * Math.PI;
        b = za(Aa(l, Math.cos(b)), Aa(j, Math.sin(b)));
        a = za(za(c, Aa(d, a)), Aa(b, f));
        e = za(Aa(b, 1 - Math.abs(e)), Aa(g, e));
        return new kc(a, e)
    }
    this.Z = [];
    a = a || {};
    var c = new ya(a.start || [0, -1, 0]),
    e = new ya(a.end || [0, 1, 0]),
    d = Ca(e, c),
    f = a.zb || 1;
    a = a.ta || 16;
    for (var g = Da(d), h = 0.5 < Math.abs(g.y()), l = Da((new ya(h, !h, 0)).sc(g)), j = Da(l.sc(g)), h = new kc(c, Ea(g)), e = new kc(e, Da(g)), k = [], n = 0; n < a; n++) {
        var s = n / a,
        r = (n + 1) / a;
        k.push(new mc([h, b(0, s, -1), b(0, r, -1)]));
        k.push(new mc([b(0, r, 0), b(0, s, 0), b(1, s, 0), b(1, r, 0)]));
        k.push(new mc([e, b(1, r, 1), b(1, s, 1)]))
    }
    return uc(k)
}
C(mg, tc);
function ng() {
    Y.call(this);
    this.f = "cylinder";
    this.af = [ - 10, -10, -10];
    this.Ke = [10, 10, 10];
    this.jc = 10;
    this.bb = 32;
    Fa(this, new od)
}
C(ng, Y);
ng.prototype.__defineGetter__("start", v("af"));
ng.prototype.__defineSetter__("start",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid start"));
    this.af = a
});
ng.prototype.__defineGetter__("end", v("Ke"));
ng.prototype.__defineSetter__("end",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid end"));
    this.Ke = a
});
ng.prototype.__defineGetter__("radius", v("jc"));
ng.prototype.__defineSetter__("radius",
function(a) {
    x(a) || m(Error("Invalid radius."));
    this.jc = a
});
ng.prototype.q = function() {
    qd(this, new mg({
        start: this.af,
        end: this.Ke,
        zb: this.jc,
        ta: this.bb
    }));
    ng.u.q.call(this)
};
A("X.cylinder", ng);
A("X.cylinder.prototype.modified", ng.prototype.q);
function og(a) {
    function b(a, b) {
        a *= 2 * Math.PI;
        b *= Math.PI;
        var d = new ya(Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b));
        g.push(new kc(za(c, Aa(d, e)), d))
    }
    this.Z = [];
    a = a || {};
    var c = new ya(a.lf || [0, 0, 0]),
    e = a.zb || 1,
    d = a.ta || 16;
    a = a.lk || 8;
    for (var f = [], g = [], h = 0; h < d; h++) for (var l = 0; l < a; l++) g = [],
    b(h / d, l / a),
    0 < l && b((h + 1) / d, l / a),
    l < a - 1 && b((h + 1) / d, (l + 1) / a),
    b(h / d, (l + 1) / a),
    f.push(new mc(g));
    return uc(f)
}
C(og, tc);
function pg() {
    Y.call(this);
    this.f = "sphere";
    this.z = [0, 0, 0];
    this.jc = 5;
    this.bb = 32;
    this.$h = 16;
    Fa(this, new od)
}
C(pg, Y);
pg.prototype.__defineGetter__("center", v("z"));
pg.prototype.__defineSetter__("center",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid center"));
    this.z = a
});
pg.prototype.__defineGetter__("radius", v("jc"));
pg.prototype.__defineSetter__("radius",
function(a) {
    x(a) || m(Error("Invalid radius."));
    this.jc = a
});
pg.prototype.q = function() {
    qd(this, new og({
        lf: this.z,
        zb: this.jc,
        ta: this.bb,
        lk: this.$h
    }));
    pg.u.q.call(this)
};
A("X.sphere", pg);
A("X.sphere.prototype.modified", pg.prototype.q);
function hf(a) {
    P.call(this);
    this.f = "labelmap";
    this.yb = a;
    this.$e = new Float32Array([ - 255, -255, -255, -255])
}
C(hf, P);
hf.prototype.q = function() {
    var a = new ld;
    a.D = this;
    this.dispatchEvent(a);
    this.yb.q()
};
hf.prototype.__defineSetter__("showOnly",
function(a) {
    var b = [ - 1, -1, -1, -1];
    a != t && (la(a) && 4 == a.length ? b = a: (this.xa || m(Error("No colortable assigned.")), b = this.xa.Ka.get(a).slice(1, 5)));
    this.$e = new Float32Array([Math.floor(255 * b[0]), Math.floor(255 * b[1]), Math.floor(255 * b[2]), Math.floor(255 * b[3])])
});
A("X.labelmap", hf);
function qg(a) {
    this.Z = [];
    a = a || {};
    var b = new ya(a.lf || [0, 0, 0]),
    c = !a.zb ? [1, 1, 1] : a.zb.length ? a.zb: [a.zb, a.zb, a.zb];
    return uc([[[0, 4, 6, 2], [ - 1, 0, 0]], [[1, 3, 7, 5], [1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, 1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, 1]]].map(function(a) {
        return new mc(a[0].map(function(d) {
            d = new ya(b.x() + c[0] * (2 * !!(d & 1) - 1), b.y() + c[1] * (2 * !!(d & 2) - 1), b.d() + c[2] * (2 * !!(d & 4) - 1));
            return new kc(d, new ya(a[1]))
        }))
    }))
}
C(qg, tc);
function rg() {
    Y.call(this);
    this.f = "cube";
    this.z = [0, 0, 0];
    this.Pe = this.Oe = this.Ne = 20;
    this.nc = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    Fa(this, new od)
}
C(rg, Y);
rg.prototype.__defineGetter__("center", v("z"));
rg.prototype.__defineSetter__("center",
function(a) { (a == t || !la(a) || 3 != a.length) && m(Error("Invalid center"));
    this.z = a
});
rg.prototype.__defineGetter__("lengthX", v("Ne"));
rg.prototype.__defineSetter__("lengthX",
function(a) {
    x(a) || m(Error("Invalid lengthX."));
    this.Ne = a
});
rg.prototype.__defineGetter__("lengthY", v("Oe"));
rg.prototype.__defineSetter__("lengthY",
function(a) {
    x(a) || m(Error("Invalid lengthY."));
    this.Oe = a
});
rg.prototype.__defineGetter__("lengthZ", v("Pe"));
rg.prototype.__defineSetter__("lengthZ",
function(a) {
    x(a) || m(Error("Invalid lengthZ."));
    this.Pe = a
});
rg.prototype.q = function() {
    qd(this, new qg({
        lf: this.z,
        zb: [this.Ne / 2, this.Oe / 2, this.Pe / 2]
    }));
    rg.u.q.call(this)
};
A("X.cube", rg);
A("X.cube.prototype.modified", rg.prototype.q);
function Le(a) {
    Je.call(this, a);
    this.f = "interactor3D";
    this.ml = u
}
C(Le, Je);
Le.prototype.Kd = function(a) {
    Le.u.Kd.call(this, a);
    var b = new Jd;
    a.Xc == t && (a.Xc = 0);
    b.vb = 0 > a.Xc;
    b.hb = q;
    this.dispatchEvent(b)
};
function sg(a) {
    M.call(this);
    this.f = "array";
    this.I = [];
    this.cg = a
}
C(sg, M);
function tg(a, b, c) {
    for (var e = 0; 4 > e; e++) if (a[e + 0] !== b[e + c]) return u;
    return q
}
sg.prototype.add = function(a) {
    this.I.push(a);
    return q
};
sg.prototype.remove = function(a) {
    a = this.I.indexOf(a); - 1 < a && this.I.splice(a, 1);
    return q
};
sg.prototype.clear = function() {
    this.I.length = 0
};
function ug(a, b, c) {
    var e = c - b;
    if (! (2 > e)) {
        e = b + Math.floor(e / 2);
        ug(a, b, e);
        for (ug(a, e, c); b < e; ++b) if (0 < a.cg(a.I[b], a.I[e])) {
            var d = a.I[b];
            a.I[b] = a.I[e];
            for (var f = a,
            g = e,
            h = c; g + 1 < h && 0 > f.cg(f.I[g + 1], d);) {
                var l = f,
                j = g + 1,
                k = l.I[g];
                l.I[g] = l.I[j];
                l.I[j] = k; ++g
            }
            f.I[g] = d
        }
    }
}
sg.prototype.sort = function() {
    ug(this, 0, this.I.length)
};
function vg(a) {
    Pb.call(this);
    this.Hb = a;
    this.S = []
}
C(vg, Pb);
var wg = [];
function xg(a, b, c, e, d) {
    la(c) || (wg[0] = c, c = wg);
    for (var f = 0; f < c.length; f++) {
        var g = L(b, c[f], e || a, d || u, a.Hb || a);
        a.S.push(g)
    }
}
vg.prototype.Of = function() {
    Jb(this.S, bc);
    this.S.length = 0
};
vg.prototype.handleEvent = function() {
    m(Error("EventHandler.handleEvent not implemented"))
};
function yg() {}
yg.Kg = function() {
    return yg.Sg ? yg.Sg: yg.Sg = new yg
};
yg.prototype.mj = 0;
yg.Kg();
function zg(a) {
    jc.call(this);
    this.$b = a || Zd();
    this.$j = Ag
}
C(zg, jc);
zg.prototype.Qi = yg.Kg();
var Ag = t;
w = zg.prototype;
w.Rg = t;
w.Zc = u;
w.H = t;
w.$j = t;
w.Ld = t;
w.Cd = t;
w.mf = t;
w.t = v("H");
w.Qf = function(a) {
    this.Ld && this.Ld != a && m(Error("Method not supported"));
    zg.u.Qf.call(this, a)
};
w.ne = v("$b");
w.Wc = function() {
    this.H = this.$b.createElement("div")
};
w.cc = function(a) {
    this.dc(a)
};
w.dc = function(a, b) {
    this.Zc && m(Error("Component already rendered"));
    this.H || this.Wc();
    a ? a.insertBefore(this.H, b || t) : this.$b.ka.body.appendChild(this.H); (!this.Ld || this.Ld.Zc) && this.ke()
};
w.ke = function() {
    function a(a) { ! a.Zc && a.t() && a.ke()
    }
    this.Zc = q;
    this.Cd && Jb(this.Cd, a, p)
};
w.le = function() {
    function a(a) {
        a.Zc && a.le()
    }
    this.Cd && Jb(this.Cd, a, p);
    this.Ji && this.Ji.Of();
    this.Zc = u
};
w.removeChild = function(a, b) {
    if (a) {
        var c = na(a) ? a: a.Rg || (a.Rg = ":" + (a.Qi.mj++).toString(36)),
        e;
        this.mf && c ? (e = this.mf, e = (c in e ? e[c] : p) || t) : e = t;
        a = e;
        c && a && (e = this.mf, c in e && delete e[c], Nb(this.Cd, a), b && (a.le(), a.H && ge(a.H)), c = a, c == t && m(Error("Unable to set parent component")), c.Ld = t, zg.u.Qf.call(c, t))
    }
    a || m(Error("Child is not in parent component"));
    return a
};
function Cg() {
    jc.call(this)
}
C(Cg, jc);
w = Cg.prototype;
w.Yf = 0;
w.Gd = 0;
w.zf = 100;
w.Hg = 0;
w.Uf = 1;
w.Zi = u;
w.jj = u;
w.Od = function(a) {
    a = Dg(this, a);
    this.Yf != a && (this.Yf = a + this.Hg > this.zf ? this.zf - this.Hg: a < this.Gd ? this.Gd: a, !this.Zi && !this.jj && this.dispatchEvent("change"))
};
w.qe = function() {
    return Dg(this, this.Yf)
};
w.pe = function() {
    return Dg(this, this.Gd)
};
w.oe = function() {
    return Dg(this, this.zf)
};
function Dg(a, b) {
    return a.Uf == t ? b: a.Gd + Math.round((b - a.Gd) / a.Uf) * a.Uf
};
function Eg(a) {
    zg.call(this, a);
    this.Md = new Cg;
    L(this.Md, "change", this.Ki, u, this)
}
C(Eg, zg);
var Fg = {
    vertical: "progress-bar-vertical",
    horizontal: "progress-bar-horizontal"
};
w = Eg.prototype;
w.Wc = function() {
    this.Ab = this.ne().Wc("div", "progress-bar-thumb");
    var a = Fg[this.mh];
    this.H = this.ne().Wc("div", a, this.Ab);
    Gg(this);
    a = this.pe();
    this.t().setAttribute("aria-valuemin", a);
    a = this.oe();
    this.t().setAttribute("aria-valuemax", a)
};
w.ke = function() {
    Eg.u.ke.call(this);
    K && 7 > sb && L(this.t(), "resize", this.Fe, u, this);
    this.Fe();
    var a = this.t();
    a.setAttribute("role", "progressbar");
    a.setAttribute("aria-live", "polite")
};
w.le = function() {
    Eg.u.le.call(this);
    K && 7 > sb && ac(this.t(), "resize", this.Fe, u, this)
};
w.qe = function() {
    return this.Md.qe()
};
w.Od = function(a) {
    this.Md.Od(a);
    this.t() && Gg(this)
};
function Gg(a) {
    var b = a.qe();
    a.t().setAttribute("aria-valuenow", b)
}
w.pe = function() {
    return this.Md.pe()
};
w.oe = function() {
    return this.Md.oe()
};
w.mh = "horizontal";
w.Ki = function() {
    this.Fe();
    this.dispatchEvent("change")
};
w.Fe = function() {
    if (this.Ab) {
        var a = this.pe(),
        b = this.oe(),
        a = (this.qe() - a) / (b - a),
        b = Math.round(100 * a);
        "vertical" == this.mh ? K && 7 > sb ? (this.Ab.style.top = 0, this.Ab.style.height = "100%", b = this.Ab.offsetHeight, a = Math.round(a * b), this.Ab.style.top = b - a + "px", this.Ab.style.height = a + "px") : (this.Ab.style.top = 100 - b + "%", this.Ab.style.height = b + "%") : this.Ab.style.width = b + "%"
    }
};
function Hg(a, b) {
    a == t && m(Error("No valid parent element."));
    b == t && m(Error("Invalid initial value."));
    Eg.call(this);
    this.f = "progressbar";
    this.ab = a;
    this.Ue = "";
    this.Td = this.Fb = t;
    this.fc = [];
    var c;
    c = ".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n";
    c += "  background: white;\n";
    c += "  padding: 1px;\n";
    c += "  overflow: hidden;\n";
    c += "  margin: 2px;\n";
    c += "  width: 100px;\n";
    c += "  height: 5px;\n";
    c += "}";
    var e;
    e = ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n";
    e += "  overflow: hidden;\n";
    e += "  width: 0%;\n";
    e += "  height: 100%;\n";
    e += "}";
    var d;
    d = ".progress-bar-thumb-done {\n  background: #57E964;\n}";
    this.fc = [c, e, d];
    this.Od(b);
    this.uf()
}
C(Hg, Eg);
Hg.prototype.uf = function() {
    var a = oe(this.ab, "position");
    if ("static" == a || "" == a) this.Ue = this.ab.style.position,
    this.ab.style.position = "relative";
    var a = document.getElementsByTagName("head")[0],
    b = de("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(String(this.fc[0])),
    e = document.createTextNode(String(this.fc[1])),
    d = document.createTextNode(String(this.fc[2]));
    a.appendChild(b);
    b.appendChild(c);
    b.appendChild(e);
    b.appendChild(d);
    this.Fb = b;
    this.cc(this.ab);
    a = this.t();
    a.style.position = "absolute";
    a.style.top = (this.ab.clientHeight - 5) / 2 + "px";
    a.style.left = (this.ab.clientWidth - 100) / 2 + "px";
    a.classList.add("xtk-progress-bar")
};
function Ig(a) {
    var b = a.t().style.top,
    c = a.t().style.left;
    ge(a.t());
    var e = new Hg(a.ab, 100),
    d = e.t();
    d.style.position = "absolute";
    d.style.top = b;
    d.style.left = c;
    d.classList.add("xtk-progress-bar"); (d.firstElementChild != p ? d.firstElementChild: he(d.firstChild)).classList.add("progress-bar-thumb-done");
    a.Td = e
}
Hg.prototype.Fd = function() {
    this.Fb && ge(this.Fb);
    this.t() && ge(this.t());
    this.Td && ge(this.Td.t());
    this.Td = this.Fb = t;
    this.Ue && (this.ab.style.position = this.Ue)
};
function Jg(a, b, c) {
    oa(a) ? c && (a = va(a, c)) : a && "function" == typeof a.handleEvent ? a = va(a.handleEvent, a) : m(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : fa.setTimeout(a, b || 0)
};
function Kg() {
    M.call(this);
    this.f = "renderer";
    this.v = window.document.body;
    this.K = this.v.clientWidth;
    this.A = this.v.clientHeight;
    this.T = this.N = this.na = t;
    this.pb = new sg(nd);
    this.Ha = [];
    this.aa = t;
    this.Zd = this.hd = this.Xd = u;
    this.a = this.Vb = this.La = t;
    this.R = {
        PROGRESSBAR_ENABLED: q,
        INTERMEDIATE_RENDERING: u,
        SLICENAVIGATORS: q
    };
    this.He = -1;
    window.console.log("XTK release 10 -- 2015-01-14 14:18:53 -- http://www.goXTK.com -- @goXTK")
}
C(Kg, M);
w = Kg.prototype;
w.Ef = function() {
    window.cancelAnimationFrame(this.He);
    this.R.PROGRESSBAR_ENABLED && (this.Vb = new Hg(this.v, 3))
};
w.Ff = function() {
    this.R.PROGRESSBAR_ENABLED && this.Vb && (Ig(this.Vb), this.Qd = Jg(function() {
        this.Qd = t;
        this.Vb && (this.Vb.Fd(), this.Vb = t);
        this.hd = this.Zd = q;
        this.cc()
    }.bind(this), 700))
};
w.Gf = function(a) {
    this.Vb && this.Vb.Od(100 * a.Ad)
};
w.Dj = function(a) {
    this.La && this.La.Od(100 * a.Ad)
};
w.tj = function(a) {
    a != t && a instanceof ld && a.D && this.ub(a.D)
};
w.Ej = function(a) {
    a != t && a instanceof md && a.D && this.remove(a.D)
};
w.If = function(a) { (a == t || !(a instanceof Ld)) && m(Error("Invalid hover event."))
};
w.ve = function() {
    var a = be(this.v);
    this.K = a.clientWidth;
    this.A = a.clientHeight;
    a = be(this.na);
    a.width = this.K;
    a.height = this.A;
    "renderer3D" == this.f && (this.a.viewport(0, 0, this.K, this.A), this.N.Ve = D.g.yf(D.g.Ed(), this.N.eg, this.na.width / this.na.height, 1, 1E4))
};
w.Jf = function(a) { (a == t || !(a instanceof Kd)) && m(Error("Invalid scroll event."))
};
Kg.prototype.__defineGetter__("config", v("R"));
Kg.prototype.__defineGetter__("interactor", v("T"));
Kg.prototype.__defineGetter__("camera", v("N"));
Kg.prototype.__defineGetter__("loadingCompleted", v("hd"));
Kg.prototype.__defineGetter__("container", v("v"));
Kg.prototype.__defineSetter__("container",
//下面的匿名function相当于X.renderer.prototype.__defineSetter__   是X.renderer2D中_container属性的set方法（因为renderer2D继承renderer）
function(a) {
    a == t && m(Error("An ID to a valid container (<div>..) is required."));
    var b = a;
    na(b) && (b = be(a));
    pa(b) && 1 == b.nodeType || m(Error("Could not find the given container."));
    this.v = b
});
w = Kg.prototype;
w.Nd = function() {
    this.N.reset()
};
w.Ca = function(a) {
    var b = de("canvas");
    this.v.appendChild(b);
    this.K = this.v.clientWidth;
    this.A = this.v.clientHeight;
    b.width = this.K;
    b.height = this.A;
    try {
        var c = b.getContext(a);
        c || m(Error())
    } catch(e) {
        var d = "Sorry, " + a + ' context is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..';
        this.v.innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">' + d + "</p>";
        m(Error(d))
    }
    this.aa = new ig;
    L(this.aa, Ad, this.Dj.bind(this));
    this.na = b;
    this.a = c;
    b = new Le(this.na);
    "2d" == a && (b = new Ne(this.na));
    b.Ca();
    L(b, wd, this.Nd.bind(this));
    L(b, Bd, this.If.bind(this));
    L(b, vd, this.Jf.bind(this));
    this.T = b;
    b = new Pe(this.K, this.A);
    "2d" == a && (b = new cf(this.K, this.A));
    b.observe(this.T);
    this.N = b;
    L(window, "resize", this.ve, u, this)
};
w.add = function(a) { (a instanceof rg || a instanceof pg || a instanceof ng) && a.q();
    this.Ha.push(a);
    this.ub(a)
};
w.remove = function(a) { (!this.na || !this.a) && m(Error("The renderer was not initialized properly."));
    if (a != t) {
        dc(a);
        var b = this.Ha.length,
        c;
        for (c = 0; c < b; c++) if (this.Ha[c].qa == a.qa) return this.Ha[c] = t,
        this.Ha.splice(c, 1),
        q
    }
    return u
};
//对应于X.renderer.prototype.update_()
w.ub = function(a) { (!this.na || !this.a) && m(Error("The renderer was not initialized properly."));
    a != t && (ec(a, yd) || L(a, yd, this.tj.bind(this)), ec(a, zd) || L(a, zd, this.Ej.bind(this)), ec(a, Dd) || L(a, Dd, this.Ef.bind(this)), ec(a, Fd) || L(a, Fd, this.Gf.bind(this)), ec(a, Ed) || L(a, Ed, this.Ff.bind(this)))
};
w.get = function(a) {
    a == t && m(Error("Invalid object id."));
    for (var b = this.pb.I,
    c = b.length,
    e = 0,
    e = 0; e < c; e++) if (b[e].qa == a) return b[e];
    return t
};

//X.renderer.prototype.render
w.cc = function() { (!this.na || !this.a) && m(Error("The renderer was not initialized properly."));
    if (this.tg == t) {
        if (Bc(this.aa.Kc)) {
            if (this.R.PROGRESSBAR_ENABLED && !this.La && (this.La = new Hg(this.v, 3)), this.Zd = this.hd = u, this.tg = Jg(function() {
                this.tg = t;
                this.cc()
            }.bind(this), 100), !this.R.INTERMEDIATE_RENDERING) return
        } else if (!this.hd && !this.Zd && (this.Zd = q, eval("this.onShowtime()"), this.hd = q), this.La) {
            this.R.PROGRESSBAR_ENABLED && (this.La && !this.Qd) && (Ig(this.La), this.Qd = Jg(function() {
                this.Qd = t;
                this.La && (this.La.Fd(), this.La = t);
                this.cc()
            }.bind(this), 700));
            return
        }
        this.He = window.requestAnimationFrame(this.cc.bind(this));
        eval("this.onRender()");
        //debugger;
        this.dc(u, q);
        eval("this.afterRender()")
    }
};
w.lh = aa();
w.jh = aa();
w.yg = aa();
w.dc = aa();
w.Ta = function() {
    dc(this);
    ac(window, "resize", this.ve, u, this);
    window.cancelAnimationFrame(this.He);
    this.aa && (delete this.aa, this.aa = t);
    this.La && (this.La.Fd(), delete this.La, this.La = t);
    this.pb.clear();
    delete this.pb;
    this.Ha.length = 0;
    delete this.Ha;
    delete this.aa;
    this.aa = t;
    delete this.N;
    this.N = t;
    delete this.T;
    this.T = t;
    delete this.a;
    this.a = t;
    ge(this.na);
    delete this.na;
    this.na = t
};
function Lg(a, b, c, e, d, f, g, h) {
    var l, j;
    if (l = c.offsetParent) {
        var k = "HTML" == l.tagName || "BODY" == l.tagName;
        if (!k || "static" != pe(l, "position")) j = ue(l),
        k || (k = (k = ve(l)) && jb ? -l.scrollLeft: k && (!K || !Cb("8")) && "visible" != pe(l, "overflowX") ? l.scrollWidth - l.clientWidth - l.scrollLeft: l.scrollLeft, j = Yd(j, new Xd(k, l.scrollTop)))
    }
    l = j || new Xd;
    j = ue(a);
    k = ze(a);
    j = new me(j.x, j.y, k.width, k.height); (k = te(a)) && j.Tg(new me(k.left, k.top, k.right - k.left, k.bottom - k.top));
    var k = Zd(a),
    n = Zd(c);
    if (k.ka != n.ka) {
        var s = k.ka.body,
        n = n.ka.parentWindow || n.ka.defaultView,
        r = new Xd(0, 0),
        y = ae(s) ? ae(s).parentWindow || ae(s).defaultView: window,
        z = s;
        do {
            var F = y == n ? ue(z) : we(z);
            r.x += F.x;
            r.y += F.y
        } while ( y && y != n && ( z = y . frameElement ) && (y = y.parent));
        s = Yd(r, ue(s));
        K && !je(k) && (s = Yd(s, ke(k)));
        j.left += s.x;
        j.top += s.y
    }
    a = (b & 4 && ve(a) ? b ^ 2 : b) & -5;
    b = new Xd(a & 2 ? j.left + j.width: j.left, a & 1 ? j.top + j.height: j.top);
    b = Yd(b, l);
    d && (b.x += (a & 2 ? -1 : 1) * d.x, b.y += (a & 1 ? -1 : 1) * d.y);
    var G;
    if (g && (G = te(c))) G.top -= l.y,
    G.right -= l.x,
    G.bottom -= l.y,
    G.left -= l.x;
    return Mg(b, c, e, f, G, g, h)
}
function Mg(a, b, c, e, d, f, g) {
    a = a.l();
    var h = 0,
    l = (c & 4 && ve(b) ? c ^ 2 : c) & -5;
    c = ze(b);
    g = g ? g.l() : c.l();
    if (e || 0 != l) l & 2 ? a.x -= g.width + (e ? e.right: 0) : e && (a.x += e.left),
    l & 1 ? a.y -= g.height + (e ? e.bottom: 0) : e && (a.y += e.top);
    if (f) {
        if (d) {
            h = a;
            e = 0;
            if (65 == (f & 65) && (h.x < d.left || h.x >= d.right)) f &= -2;
            if (132 == (f & 132) && (h.y < d.top || h.y >= d.bottom)) f &= -5;
            h.x < d.left && f & 1 && (h.x = d.left, e |= 1);
            h.x < d.left && (h.x + g.width > d.right && f & 16) && (g.width = Math.max(g.width - (h.x + g.width - d.right), 0), e |= 4);
            h.x + g.width > d.right && f & 1 && (h.x = Math.max(d.right - g.width, d.left), e |= 1);
            f & 2 && (e |= (h.x < d.left ? 16 : 0) | (h.x + g.width > d.right ? 32 : 0));
            h.y < d.top && f & 4 && (h.y = d.top, e |= 2);
            h.y <= d.top && (h.y + g.height < d.bottom && f & 32) && (g.height = Math.max(g.height - (d.top - h.y), 0), h.y = 0, e |= 8);
            h.y >= d.top && (h.y + g.height > d.bottom && f & 32) && (g.height = Math.max(g.height - (h.y + g.height - d.bottom), 0), e |= 8);
            h.y + g.height > d.bottom && f & 4 && (h.y = Math.max(d.bottom - g.height, d.top), e |= 2);
            f & 8 && (e |= (h.y < d.top ? 64 : 0) | (h.y + g.height > d.bottom ? 128 : 0));
            h = e
        } else h = 256;
        if (h & 496) return h
    }
    f = a;
    d = jb && (ab || qb) && Cb("1.9");
    f instanceof Xd ? (a = f.x, f = f.y) : (a = f, f = p);
    b.style.left = ye(a, d);
    b.style.top = ye(f, d);
    if (! (c == g || (!c || !g ? 0 : c.width == g.width && c.height == g.height))) a = je(Zd(ae(b))),
    K && (!a || !Cb("8")) ? (c = b.style, a ? (K ? (a = De(b, "paddingLeft"), d = De(b, "paddingRight"), f = De(b, "paddingTop"), e = De(b, "paddingBottom"), a = new le(f, d, e, a)) : (a = oe(b, "paddingLeft"), d = oe(b, "paddingRight"), f = oe(b, "paddingTop"), e = oe(b, "paddingBottom"), a = new le(parseFloat(f), parseFloat(d), parseFloat(e), parseFloat(a))), K ? (d = Fe(b, "borderLeft"), f = Fe(b, "borderRight"), e = Fe(b, "borderTop"), b = Fe(b, "borderBottom"), b = new le(e, f, b, d)) : (d = oe(b, "borderLeftWidth"), f = oe(b, "borderRightWidth"), e = oe(b, "borderTopWidth"), b = oe(b, "borderBottomWidth"), b = new le(parseFloat(e), parseFloat(f), parseFloat(b), parseFloat(d))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height)) : (b = b.style, jb ? b.MozBoxSizing = "border-box": lb ? b.WebkitBoxSizing = "border-box": b.boxSizing = "border-box", b.width = Math.max(g.width, 0) + "px", b.height = Math.max(g.height, 0) + "px");
    return h
};
function Ng() {}
Ng.prototype.tb = aa();
function Og(a, b) {
    this.nf = a instanceof Xd ? a: new Xd(a, b)
}
C(Og, Ng);
Og.prototype.tb = function(a, b, c, e) {
    Lg(qe(a), 0, a, b, this.nf, c, t, e)
};
function Pg(a, b, c) {
    this.element = a;
    this.Fg = b;
    this.Tj = c
}
C(Pg, Ng);
Pg.prototype.tb = function(a, b, c) {
    Lg(this.element, this.Fg, a, b, p, c, this.Tj)
};
function Qg(a, b) {
    jc.call(this);
    this.Hb = new vg(this);
    this.Pf(a || t);
    b && (this.$c = b)
}
C(Qg, jc);
w = Qg.prototype;
w.H = t;
w.gi = q;
w.zg = t;
w.Ma = u;
w.ek = u;
w.wf = -1;
w.Wg = -1;
w.Pi = u;
w.wi = q;
w.$c = "toggle_display";
w.t = v("H");
w.Pf = function(a) {
    this.Ma && m(Error("Can not change this state of the popup while showing."));
    this.H = a
};
function Rg(a, b) {
    a.Ee && a.Ee.stop();
    a.re && a.re.stop();
    if (b) {
        if (!a.Ma && a.Df()) {
            a.H || m(Error("Caller must call setElement before trying to show the popup"));
            a.tb();
            var c = ae(a.H);
            a.Pi && xg(a.Hb, c, "keydown", a.rj, q);
            if (a.gi) if (xg(a.Hb, c, "mousedown", a.hh, q), K) {
                var e;
                try {
                    e = c.activeElement
                } catch(d) {}
                for (; e && "IFRAME" == e.nodeName;) {
                    try {
                        var f = e.contentDocument || e.contentWindow.document
                    } catch(g) {
                        break
                    }
                    c = f;
                    e = c.activeElement
                }
                xg(a.Hb, c, "mousedown", a.hh, q);
                xg(a.Hb, c, "deactivate", a.gh)
            } else xg(a.Hb, c, "blur", a.gh);
            "toggle_display" == a.$c ? (a.H.style.visibility = "visible", Be(a.H, q)) : "move_offscreen" == a.$c && a.tb();
            a.Ma = q;
            a.Ee ? ($b(a.Ee, "end", a.kh, u, a), a.Ee.play()) : a.kh()
        }
    } else Sg(a)
}
w.tb = ga;
function Sg(a, b) {
    if (!a.Ma || !a.dispatchEvent({
        type: "beforehide",
        target: b
    })) return u;
    a.Hb && a.Hb.Of();
    a.Ma = u;
    a.Wg = xa();
    a.re ? ($b(a.re, "end", wa(a.Eg, b), u, a), a.re.play()) : a.Eg(b);
    return q
}
w.Eg = function(a) {
    "toggle_display" == this.$c ? this.ek ? Jg(this.Og, 0, this) : this.Og() : "move_offscreen" == this.$c && (this.H.style.top = "-10000px");
    this.Hf(a)
};
w.Og = function() {
    this.H.style.visibility = "hidden";
    Be(this.H, u)
};
w.Df = function() {
    return this.dispatchEvent("beforeshow")
};
w.kh = function() {
    this.wf = xa();
    this.Wg = -1;
    this.dispatchEvent("show")
};
w.Hf = function(a) {
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
w.hh = function(a) {
    a = a.target; ! ie(this.H, a) && ((!this.zg || ie(this.zg, a)) && !(150 > xa() - this.wf)) && Sg(this, a)
};
w.rj = function(a) {
    27 == a.keyCode && Sg(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
w.gh = function(a) {
    if (this.wi) {
        var b = ae(this.H);
        if (K || ib) {
            if (a = b.activeElement, !a || ie(this.H, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > xa() - this.wf || Sg(this)
    }
};
function Tg(a, b) {
    this.Xj = 4;
    this.we = b || p;
    Qg.call(this, a)
}
C(Tg, Qg);
Tg.prototype.tb = function() {
    if (this.we) {
        var a = !this.Ma && "move_offscreen" != this.$c,
        b = this.t();
        a && (b.style.visibility = "hidden", Be(b, q));
        this.we.tb(b, this.Xj, this.Kl);
        a && Be(b, u)
    }
};
function Ug(a) {
    this.ga = new zc;
    a && this.df(a)
}
function Vg(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + qa(a) : b.substr(0, 1) + a
}
w = Ug.prototype;
w.sf = function() {
    return this.ga.sf()
};
w.add = function(a) {
    this.ga.set(Vg(a), a)
};
w.df = function(a) {
    a = yc(a);
    for (var b = a.length,
    c = 0; c < b; c++) this.add(a[c])
};
w.Of = function(a) {
    a = yc(a);
    for (var b = a.length,
    c = 0; c < b; c++) this.remove(a[c])
};
w.remove = function(a) {
    return this.ga.remove(Vg(a))
};
w.clear = function() {
    this.ga.clear()
};
w.contains = function(a) {
    a = Vg(a);
    return Cc(this.ga.ga, a)
};
w.Tg = function(a) {
    var b = new Ug;
    a = yc(a);
    for (var c = 0; c < a.length; c++) {
        var e = a[c];
        this.contains(e) && b.add(e)
    }
    return b
};
w.Dd = function() {
    return this.ga.Dd()
};
w.l = function() {
    return new Ug(this)
};
function Wg(a, b, c) {
    this.$b = c || (a ? Zd(be(a)) : Zd());
    Tg.call(this, this.$b.Wc("div", {
        style: "position:absolute;display:none;"
    }));
    this.of = new Xd(1, 1);
    this.je = new Ug;
    a && Xg(this, a);
    if (b != t) if (a = this.t(), "textContent" in a) a.textContent = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (; c = a.firstChild;) a.removeChild(c);
        a.appendChild(ae(a).createTextNode(String(b)))
    }
}
C(Wg, Tg);
var Yg = [];
w = Wg.prototype;
w.Sa = t;
w.className = "goog-tooltip";
w.yh = 500;
w.Oi = 0;
w.ne = v("$b");
function Xg(a, b) {
    b = be(b);
    a.je.add(b);
    L(b, "mouseover", a.Ni, u, a);
    L(b, "mouseout", a.Lg, u, a);
    L(b, "mousemove", a.Mi, u, a);
    L(b, "focus", a.Li, u, a);
    L(b, "blur", a.Lg, u, a)
}
w.Pf = function(a) {
    var b = this.t();
    b && ge(b);
    Wg.u.Pf.call(this, a);
    a && (b = this.$b.ka.body, b.insertBefore(a, b.lastChild))
};
w.Df = function() {
    if (!Qg.prototype.Df.call(this)) return u;
    if (this.anchor) for (var a, b = 0; a = Yg[b]; b++) ie(a.t(), this.anchor) || Rg(a, u);
    0 <= Ib(Yg, this) || Yg.push(this);
    a = this.t();
    a.className = this.className;
    Zg(this);
    L(a, "mouseover", this.Ng, u, this);
    L(a, "mouseout", this.Mg, u, this);
    $g(this);
    return q
};
w.Hf = function() {
    Nb(Yg, this);
    for (var a = this.t(), b, c = 0; b = Yg[c]; c++) b.anchor && ie(a, b.anchor) && Rg(b, u);
    this.nh && ah(this.nh);
    ac(a, "mouseover", this.Ng, u, this);
    ac(a, "mouseout", this.Mg, u, this);
    this.anchor = p;
    if (0 == (this.Kb ? this.Ma ? 4 : 1 : this.Yc ? 3 : this.Ma ? 2 : 0)) this.Be = u;
    Qg.prototype.Hf.call(this)
};
w.$g = function(a, b) {
    this.anchor == a && this.je.contains(this.anchor) && (this.Be || !this.Ul ? (Rg(this, u), this.Ma || (this.anchor = a, this.we = b || bh(this, 0) || p, this.Ma && this.tb(), Rg(this, q))) : this.anchor = p);
    this.Kb = p
};
w.ij = function(a) {
    this.Yc = p;
    a == this.anchor && (this.Sa == t || this.Sa != this.t() && !this.je.contains(this.Sa)) && (!this.Bg || !this.Bg.Sa) && Rg(this, u)
};
function ch(a, b) {
    var c = ke(a.$b);
    a.of.x = b.clientX + c.x;
    a.of.y = b.clientY + c.y
}
w.Ni = function(a) {
    var b = dh(this, a.target);
    this.Sa = b;
    Zg(this);
    b != this.anchor && (this.anchor = b, this.Kb || (this.Kb = Jg(va(this.$g, this, b, p), this.yh)), eh(this), ch(this, a))
};
function dh(a, b) {
    try {
        for (; b && !a.je.contains(b);) b = b.parentNode;
        return b
    } catch(c) {
        return t
    }
}
w.Mi = function(a) {
    ch(this, a);
    this.Be = q
};
w.Li = function(a) {
    this.Sa = a = dh(this, a.target);
    this.Be = q;
    if (this.anchor != a) {
        this.anchor = a;
        var b = bh(this, 1);
        Zg(this);
        this.Kb || (this.Kb = Jg(va(this.$g, this, a, b), this.yh));
        eh(this)
    }
};
function bh(a, b) {
    if (0 == b) {
        var c = a.of.l();
        return new fh(c)
    }
    return new gh(a.Sa)
}
function eh(a) {
    if (a.anchor) for (var b, c = 0; b = Yg[c]; c++) ie(b.t(), a.anchor) && (b.Bg = a, a.nh = b)
}
w.Lg = function(a) {
    var b = dh(this, a.target),
    c = dh(this, a.relatedTarget);
    b != c && (b == this.Sa && (this.Sa = t), $g(this), this.Be = u, this.Ma && (!a.relatedTarget || !ie(this.t(), a.relatedTarget)) ? ah(this) : this.anchor = p)
};
w.Ng = function() {
    var a = this.t();
    this.Sa != a && (Zg(this), this.Sa = a)
};
w.Mg = function(a) {
    var b = this.t();
    if (this.Sa == b && (!a.relatedTarget || !ie(b, a.relatedTarget))) this.Sa = t,
    ah(this)
};
function $g(a) {
    a.Kb && (fa.clearTimeout(a.Kb), a.Kb = p)
}
function ah(a) {
    if (2 == (a.Kb ? a.Ma ? 4 : 1 : a.Yc ? 3 : a.Ma ? 2 : 0)) a.Yc = Jg(va(a.ij, a, a.anchor), a.Oi)
}
function Zg(a) {
    a.Yc && (fa.clearTimeout(a.Yc), a.Yc = p)
}
function fh(a, b) {
    Og.call(this, a, b)
}
C(fh, Og);
fh.prototype.tb = function(a, b, c) {
    b = qe(a);
    b = te(b);
    c = c ? new le(c.top + 10, c.right, c.bottom, c.left + 10) : new le(10, 0, 0, 10);
    Mg(this.nf, a, 4, c, b, 9) & 496 && Mg(this.nf, a, 4, c, b, 5)
};
function gh(a) {
    Pg.call(this, a, 3)
}
C(gh, Pg);
gh.prototype.tb = function(a, b, c) {
    var e = new Xd(10, 0);
    Lg(this.element, this.Fg, a, b, e, c, 9) & 496 && Lg(this.element, 2, a, 1, e, c, 5)
};
function hh(a, b, c, e) {
    a == t && m(Error("No valid parent element.")); (!x(b) || !x(c)) && m(Error("Invalid coordinates.")); (e == t || !(e instanceof Je)) && m(Error("Invalid interactor."));
    Wg.call(this);
    this.f = "caption";
    this.ab = a;
    this.fe = b;
    this.ge = c;
    this.T = e;
    this.Fb = t;
    this.fc = [];
    a = ".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n";
    a += "  border: 1px solid infotext;\n";
    a += "  padding: 1px;\n";
    a += "  font-family: sans-serif;\n";
    a += "}";
    this.fc = [a];
    $b(e, Cd, this.Fd.bind(this));
    this.uf()
}
C(hh, Wg);
hh.prototype.uf = function() {
    var a = oe(this.ab, "position");
    if ("static" == a || "" == a) this.ab.style.position = "relative";
    var a = document.getElementsByTagName("head")[0],
    b = de("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(String(this.fc[0]));
    a.appendChild(b);
    b.appendChild(c);
    this.Fb = b;
    this.we = new Og(this.fe, this.ge) || p;
    this.Ma && this.tb();
    Rg(this, q);
    Xg(this, this.ab);
    this.t().classList.add("x-tooltip")
};
hh.prototype.Fd = function() {
    Rg(this, u);
    this.Fb && ge(this.Fb);
    this.t() && ge(this.t());
    this.Fb = t
};
function ih() {
    Kg.call(this);
    this.f = "renderer3D";
    this.md = this.pd = this.ld = this.od = this.kd = this.nd = this.Ye = this.Ze = t;
    this.z = [0, 0, 0];
    this.bd = [0, 0, 0];
    this.rg = t;
    this.Ie = new zc;
    this.xd = new zc;
    this.pc = new zc;
    this.qd = new zc;
    this.Ec = new zc;
    this.Pc = new zc;
    this.oc = new zc;
    this.wd = new zc;
    this.R = {
        PROGRESSBAR_ENABLED: q,
        PICKING_ENABLED: q,
        ORDERING_ENABLED: q,
        STATISTICS_ENABLED: u,
        INTERMEDIATE_RENDERING: u
    }
}
C(ih, Kg);
ih.prototype.__defineGetter__("config", v("R"));
w = ih.prototype;
w.Zj = function() {
    this.md = this.pd = this.ld = this.od = this.kd = this.nd = t;
    this.z = [0, 0, 0]
};
w.If = function(a) {
    ih.u.If.call(this, a);
    var b = a.fe;
    a = a.ge;
    var c = this.Mf(b, a);
    if (c = this.get(c)) if (c = c.Dc) {
        var e = we(this.v); (new hh(this.v, e.x + b + 10, e.y + a + 10, this.T)).t().innerHTML = c
    }
};
w.Ca = function() {
    ih.u.Ca.call(this, "experimental-webgl");
    try {
        if (this.a.viewport(0, 0, this.K, this.A), this.a.clearColor(this.bd[0], this.bd[1], this.bd[2], 0), this.a.enable(this.a.BLEND), this.a.blendEquation(this.a.FUNC_ADD), this.a.blendFunc(this.a.SRC_ALPHA, this.a.ONE_MINUS_SRC_ALPHA), this.a.enable(this.a.DEPTH_TEST), this.a.depthFunc(this.a.LEQUAL), this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT), this.R.PICKING_ENABLED) {
            var a = this.a.createFramebuffer(),
            b = this.a.createRenderbuffer(),
            c = this.a.createTexture();
            this.a.bindTexture(this.a.TEXTURE_2D, c);
            this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, this.K, this.A, 0, this.a.RGB, this.a.UNSIGNED_BYTE, t);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, a);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, b);
            this.a.renderbufferStorage(this.a.RENDERBUFFER, this.a.DEPTH_COMPONENT16, this.K, this.A);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, t);
            this.a.framebufferTexture2D(this.a.FRAMEBUFFER, this.a.COLOR_ATTACHMENT0, this.a.TEXTURE_2D, c, 0);
            this.a.framebufferRenderbuffer(this.a.FRAMEBUFFER, this.a.DEPTH_ATTACHMENT, this.a.RENDERBUFFER, b);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, t);
            this.rg = a
        }
    } catch(e) {
        m(Error("Exception while accessing GL Context!\n" + e))
    }
    a = new df; (this.na == t || this.a == t || this.N == t) && m(Error("Renderer was not initialized properly.")); (a == t || !(a instanceof df)) && m(Error("Could not add shaders."));
    b = Object.keys(ff);
    Object.keys(ef).every(function(a) {
        a = ef[a];
        return - 1 != this.ce.search(a) || -1 != this.Ud.search(a)
    }.bind(a)) || m(Error("Could not find all attributes in the shader sources."));
    b.every(function(a) {
        a = ff[a];
        return - 1 != this.ce.search(a) || -1 != this.Ud.search(a)
    }.bind(a)) || m(Error("Could not find all uniforms in the shader sources."));
    b = this.a.createShader(this.a.FRAGMENT_SHADER);
    c = this.a.createShader(this.a.VERTEX_SHADER);
    this.a.shaderSource(b, a.Ud);
    this.a.shaderSource(c, a.ce);
    this.a.compileShader(b);
    this.a.compileShader(c);
    this.a.getShaderParameter(b, this.a.COMPILE_STATUS) || m(Error("Fragement Shader compilation failed!\n" + this.a.getShaderInfoLog(b)));
    this.a.getShaderParameter(c, this.a.COMPILE_STATUS) || m(Error("Vertex Shader compilation failed!\n" + this.a.getShaderInfoLog(c)));
    var d = this.a.createProgram();
    this.a.attachShader(d, c);
    this.a.attachShader(d, b);
    this.a.linkProgram(d);
    this.a.getProgramParameter(d, this.a.LINK_STATUS) || m(Error("Could not create shader program!\n" + this.a.getShaderInfoLog(b) + "\n" + this.a.getShaderInfoLog(c) + "\n" + this.a.getProgramInfoLog(d)));
    this.a.useProgram(d);
    this.Ye = d;
    Object.keys(ef).forEach(function(a) {
        a = ef[a];
        this.Ie.set(a, this.a.getAttribLocation(this.Ye, a));
        this.a.enableVertexAttribArray(this.Ie.get(a))
    }.bind(this));
    Object.keys(ff).forEach(function(a) {
        a = ff[a];
        this.xd.set(a, this.a.getUniformLocation(this.Ye, a))
    }.bind(this));
    this.Ze = a
};
w.ub = function(a) {
    ih.u.ub.call(this, a);
    var b = u;
    if (a != t) {
        this.get(a.qa) && (b = q);
        var c = a.qa,
        e = a.h,
        d = a.n,
        f = a.pa,
        g = a.G,
        h = a.r,
        l = a.ja,
        j = a.xa,
        k = a.e,
        n = a.F;
        if (k != t && k.r != t && k.r.j) this.ub(k);
        else if (k != t && k.j && this.ub(k), j != t && j.r != t && j.r.j) this.aa.load(j, a);
        else if (g != t && g.r != t && g.r.j) this.aa.load(g, a);
        else {
            if (h != t && la(h)) if (a.yc != t) {
                if (a.yc.xf != h.length || !a.j) return
            } else {
                b = 0;
                c = h.length;
                for (b = 0; b < c; b++) this.aa.load(h[b], a);
                return
            } else {
                if (h != t && h.j) {
                    this.aa.load(a, a);
                    return
                }
                if (n != t && n.r != t && n.r.j) {
                    this.aa.load(n, a);
                    return
                }
            }
            if (0 < a.c.length) {
                h = a.c;
                j = h.length;
                for (k = k = 0; k < j; k++) this.ub(h[k])
            }
            if (e) {
                for (h = 0; this.Xd;) h++,
                window.console.log("Possible thread lock avoided: " + h);
                this.Xd = q;
                j = a instanceof Xe && a.yb instanceof hf;
                b && (g != t && g.j) && (h = this.oc.get(c), h != t && this.a.isBuffer(h.P) && this.a.deleteBuffer(h.P));
                h = t;
                g != t && (!b || g.j ? (h = a.nc, h == t && m(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), k = u, g.Wb && (k = q), this.a.pixelStorei(this.a.UNPACK_FLIP_Y_WEBGL, k), k = this.a.createTexture(), k.Si = g.ib, this.wd.set(g.qa, k), this.a.bindTexture(this.a.TEXTURE_2D, k), g.Wb ? (k = this.a.RGBA, g.hg && (k = this.a.LUMINANCE, this.a.pixelStorei(this.a.UNPACK_ALIGNMENT, 1)), this.a.texImage2D(this.a.TEXTURE_2D, 0, k, g.Xe, g.We, 0, k, this.a.UNSIGNED_BYTE, g.Wb)) : this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, this.a.RGBA, this.a.UNSIGNED_BYTE, k.Si), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE), j ? (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST)) : (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR)), this.a.bindTexture(this.a.TEXTURE_2D, t), k = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, k), this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(h), this.a.STATIC_DRAW), h = new Sd(k, h.length, 2), this.oc.set(c, h), g.j = u) : h = this.oc.get(c));
                jg(this.aa, 0.1);
                if (j) this.Xd = u,
                D.Da(this.f + ".update"),
                jg(this.aa, 0.9);
                else {
                    if (!b || e.j || l.j) {
                        j = l.Q;
                        g = D.g.ba(j, e.mb, e.nb, e.ob);
                        j = D.g.ba(j, e.jb, e.kb, e.lb);
                        if (this.nd === t || g.x < this.nd) this.nd = g.x;
                        if (this.kd === t || j.x > this.kd) this.kd = j.x;
                        if (this.od === t || g.y < this.od) this.od = g.y;
                        if (this.ld === t || j.y > this.ld) this.ld = j.y;
                        if (this.pd === t || g.d < this.pd) this.pd = g.d;
                        if (this.md === t || j.d > this.md) this.md = j.d;
                        this.z = [(this.nd + this.kd) / 2, (this.od + this.ld) / 2, (this.pd + this.md) / 2];
                        l.j = u
                    }
                    b && e.j && (l = this.pc.get(c), l != t && this.a.isBuffer(l.P) && this.a.deleteBuffer(l.P));
                    l = t; ! b || e.j ? (l = this.a.createBuffer(), e.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, l), this.a.bufferData(this.a.ARRAY_BUFFER, e.da, this.a.STATIC_DRAW), l = new Sd(l, e.count, 3), e.j = u) : l = this.pc.get(c);
                    jg(this.aa, 0.3);
                    b && d.j && (g = this.pc.get(c), g != t && this.a.isBuffer(g.P) && this.a.deleteBuffer(g.P));
                    g = t; ! b || d.j ? (g = this.a.createBuffer(), d.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, g), this.a.bufferData(this.a.ARRAY_BUFFER, d.da, this.a.STATIC_DRAW), g = new Sd(g, d.count, 3), d.j = u) : g = this.qd.get(c);
                    jg(this.aa, 0.3);
                    b && (f && f.j) && (d = this.Ec.get(c), d != t && this.a.isBuffer(d.P) && this.a.deleteBuffer(d.P));
                    d = t;
                    f && (!b || f.j ? (f.length != e.length && m(Error("Mismatch between points and point colors.")), d = this.a.createBuffer(), f.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, d), this.a.bufferData(this.a.ARRAY_BUFFER, f.da, this.a.STATIC_DRAW), d = new Sd(d, f.count, 3), f.j = u) : d = this.Ec.get(c));
                    jg(this.aa, 0.2);
                    b && (n && n.j) && (f = this.Pc.get(c), f != t && this.a.isBuffer(f.P) && this.a.deleteBuffer(f.P));
                    f = t;
                    n && (f = n.dd, !b || n.j ? (f.length != e.length && m(Error("Mismatch between points and scalars.")), e = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, e), this.a.bufferData(this.a.ARRAY_BUFFER, f, this.a.STATIC_DRAW), f = new Sd(e, f.length, 3), n.j = u) : f = this.Pc.get(c));
                    jg(this.aa, 0.1);
                    b || this.pb.add(a);
                    this.pc.set(c, l);
                    this.qd.set(c, g);
                    this.Ec.set(c, d);
                    this.oc.set(c, h);
                    this.Pc.set(c, f);
                    this.Xd = a.j = u
                }
            } else a.j = u
        }
    }
};
w.Mf = function(a, b) {
    if (this.R.PICKING_ENABLED) {
        this.dc(q, u);
        var c = new Uint8Array(4);
        this.a.readPixels(a, this.A - b, 1, 1, this.a.RGBA, this.a.UNSIGNED_BYTE, c);
        return c[0] + 255 * c[1] + 65025 * c[2]
    }
    return - 1
};
w.dc = function(a, b) {
    ih.u.dc.call(this, a, b);
    this.a.viewport(0, 0, this.K, this.A);
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    var c = this.pb.I,
    e = c.length;
    if (0 != e) {
        a ? this.a.bindFramebuffer(this.a.FRAMEBUFFER, this.rg) : this.a.bindFramebuffer(this.a.FRAMEBUFFER, t);
        var d = this.N.Ve,
        f = this.N.o;
        this.a.uniformMatrix4fv(this.xd.get("perspective"), u, d);
        this.a.uniformMatrix4fv(this.xd.get("view"), u, f);
        d = this.z;
        this.a.uniform3f(this.xd.get("center"), parseFloat(d[0]), parseFloat(d[1]), parseFloat(d[2]));
        f = this.Ha.length;
        for (d = 0; d < f; ++d) {
            var g = this.Ha[d];
            if (g instanceof P) {
                var h = D.g.ba(this.N.o, g.s[0] + g.b[0].i[0], g.s[1] + g.b[0].i[1], g.s[2] + g.b[0].i[2]),
                l = D.g.ba(this.N.o, g.s[0] - g.b[0].i[0], g.s[1] - g.b[0].i[1], g.s[2] - g.b[0].i[2]),
                j = Math.abs(h.d - l.d),
                h = D.g.ba(this.N.o, g.s[0] + g.b[1].i[0], g.s[1] + g.b[1].i[1], g.s[2] + g.b[1].i[2]),
                l = D.g.ba(this.N.o, g.s[0] - g.b[1].i[0], g.s[1] - g.b[1].i[1], g.s[2] + -g.b[1].i[2]),
                k = Math.abs(h.d - l.d),
                h = D.g.ba(this.N.o, g.s[0] + g.b[2].i[0], g.s[1] + g.b[2].i[1], g.s[2] + g.b[2].i[2]),
                l = D.g.ba(this.N.o, g.s[0] - g.b[2].i[0], g.s[1] - g.b[2].i[1], g.s[2] - g.b[2].i[2]),
                h = Math.max(j, k, Math.abs(h.d - l.d));
                h == j ? gf(g, 0) : h == k ? gf(g, 1) : gf(g, 2)
            }
        }
        if (this.R.ORDERING_ENABLED) {
            j = u;
            f = this.Ha;
            g = f.length - 1;
            do
            if (d = f[g], d instanceof P && d.Ra && -1 != d.X) {
                var j = d.c[d.X].c,
                k = d.X,
                h = D.g.ba(this.N.o, d.s[0] + d.b[k].B[0], d.s[1] + d.b[k].B[1], d.s[2] + d.b[k].B[2]),
                l = D.g.ba(this.N.o, d.s[0] - d.b[k].B[0], d.s[1] - d.b[k].B[1], d.s[2] - d.b[k].B[2]),
                h = h.d - l.d,
                l = Math.max(d.Cc[d.X], Math.max(d.Cc[d.X + 4], d.Cc[d.X + 8])),
                n = Math.min(d.Cc[d.X], Math.min(d.Cc[d.X + 4], d.Cc[d.X + 8]));
                if (0 > h * (l + n)) for (h = h = 0; h < d.ud[k] - 1; h++) j[h] && (j[h].za = d.za, j[h].ya = d.b[k].Sc * h);
                else for (h = d.ud[k] - 1; 0 <= h; h--) j[h] && (j[h].za = d.za, j[h].ya = (d.ud[k] - 1) * d.b[k].Sc - d.b[k].Sc * h);
                j = q
            }
            while (g--);
            f = this.pb.I;
            g = f.length - 1;
            do
            if (d = f[g], d.O && !(1 == d.za || d instanceof Xe)) j = d,
            k = d.h.Rd,
            d = D.g.ba(d.ja.Q, k[0], k[1], k[2]),
            d = D.g.ba(this.N.o, d.x, d.y, d.d),
            d = D.m.rf(this.N.ic, d),
            d = Math.round(1E3 * d) / 1E3,
            j.ya = d,
            j = q;
            while (g--);
            j && this.pb.sort()
        }
        if (f = !a && b != t && b && this.R.STATISTICS_ENABLED) var s = 0;
        var d = this.Ie,
        g = d.get("vertexPosition"),
        j = d.get("vertexNormal"),
        k = d.get("vertexColor"),
        h = d.get("vertexTexturePos"),
        l = d.get("vertexScalar"),
        d = this.xd,
        n = d.get("usePicking"),
        r = d.get("useObjectColor"),
        y = d.get("objectColor"),
        z = d.get("useScalars"),
        F = d.get("scalarsReplaceMode"),
        G = d.get("scalarsMin"),
        H = d.get("scalarsMax"),
        B = d.get("scalarsMinColor"),
        E = d.get("scalarsMaxColor"),
        I = d.get("scalarsInterpolation"),
        N = d.get("scalarsMinThreshold"),
        Q = d.get("scalarsMaxThreshold"),
        O = d.get("objectOpacity"),
        S = d.get("labelmapOpacity"),
        da = d.get("labelmapColor"),
        J = d.get("useTexture"),
        ba = d.get("useLabelMapTexture"),
        ka = d.get("textureSampler"),
        U = d.get("textureSampler2"),
        V = d.get("volumeLowerThreshold"),
        Ga = d.get("volumeUpperThreshold"),
        tb = d.get("volumeScalarMin"),
        ub = d.get("volumeScalarMax"),
        vb = d.get("volumeWindowLow"),
        kb = d.get("volumeWindowHigh"),
        Zc = d.get("volumeScalarMinColor"),
        mh = d.get("volumeScalarMaxColor"),
        Bg = d.get("volumeTexture"),
        nh = d.get("objectTransform"),
        oh = d.get("pointSize"),
        d = e;
        do {
            var ea = c[e - d];
            if (ea) {
                var ja = t;
                ea instanceof Xe && ea.yb && (ja = ea.yb);
                if (ea.O && (!ja || ja.O) && (!a || ea.rd)) {
                    var Ba = ea.qa,
                    cb = ea.jd,
                    nb = this.pc.get(Ba),
                    ob = this.qd.get(Ba),
                    Ze = this.Ec.get(Ba),
                    Kb = this.Pc.get(Ba),
                    $e = this.oc.get(Ba);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, nb.P);
                    this.a.vertexAttribPointer(g, nb.Ob, this.a.FLOAT, u, 0, 0);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, ob.P);
                    this.a.vertexAttribPointer(j, ob.Ob, this.a.FLOAT, u, 0, 0);
                    a ? this.a.uniform1i(n, q) : this.a.uniform1i(n, u);
                    Ze && !a && !cb ? (this.a.uniform1i(r, u), this.a.bindBuffer(this.a.ARRAY_BUFFER, Ze.P), this.a.vertexAttribPointer(k, Ze.Ob, this.a.FLOAT, u, 0, 0)) : (ob = 1, cb && !a && (ob = 0), this.a.uniform1i(r, ob), ob = ea.w, a && (ob = [Math.floor(Ba % 65025 % 255) / 255, Math.floor(Ba % 65025 / 255) / 255, Math.floor(Ba / 65025) / 255]), this.a.uniform3f(y, parseFloat(ob[0]), parseFloat(ob[1]), parseFloat(ob[2])), this.a.vertexAttribPointer(k, nb.Ob, this.a.FLOAT, u, 0, 0));
                    Kb && !a && !cb ? (this.a.uniform1i(z, q), this.a.uniform1i(F, ea.F.ug), Ba = ea.F.Rb, cb = ea.F.Pb, this.a.uniform3f(B, parseFloat(Ba[0]), parseFloat(Ba[1]), parseFloat(Ba[2])), this.a.uniform3f(E, parseFloat(cb[0]), parseFloat(cb[1]), parseFloat(cb[2])), this.a.uniform1f(N, parseFloat(ea.F.U)), this.a.uniform1f(Q, parseFloat(ea.F.W)), this.a.uniform1f(G, parseFloat(ea.F.ra)), this.a.uniform1f(H, parseFloat(ea.F.ia)), this.a.uniform1i(I, parseInt(ea.F.Le, 10)), this.a.bindBuffer(this.a.ARRAY_BUFFER, Kb.P), this.a.vertexAttribPointer(l, Kb.Ob, this.a.FLOAT, u, 0, 0)) : (this.a.uniform1i(z, u), this.a.vertexAttribPointer(l, nb.Ob, this.a.FLOAT, u, 0, 0));
                    this.a.uniform1f(O, parseFloat(ea.za));
                    ea.G && $e && !a ? (this.a.uniform1i(J, q), this.a.activeTexture(this.a.TEXTURE0), this.a.bindTexture(this.a.TEXTURE_2D, this.wd.get(ea.G.qa)), this.a.uniform1i(ka, 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, $e.P), this.a.vertexAttribPointer(h, $e.Ob, this.a.FLOAT, u, 0, 0), this.a.uniform1i(Bg, u)) : (this.a.uniform1i(J, u), this.a.vertexAttribPointer(h, nb.Ob, this.a.FLOAT, u, 0, 0));
                    ja && (this.a.uniform1i(Bg, q), this.a.uniform1f(V, ja.U), this.a.uniform1f(Ga, ja.W), this.a.uniform1f(tb, ja.ra), this.a.uniform1f(ub, ja.ia), Ba = ja.Rb, cb = ja.Pb, this.a.uniform3f(Zc, parseFloat(Ba[0]), parseFloat(Ba[1]), parseFloat(Ba[2])), this.a.uniform3f(mh, parseFloat(cb[0]), parseFloat(cb[1]), parseFloat(cb[2])), this.a.uniform1f(vb, ja.fa), this.a.uniform1f(kb, ja.ea), Kb = ja.e, this.a.uniform1i(ba, u), ja.Ra ? this.a.uniform1f(O, parseFloat(ja.za)) : Kb && Kb.O && (ja = ea.e.qa, this.a.uniform1i(ba, q), this.a.activeTexture(this.a.TEXTURE1), this.a.bindTexture(this.a.TEXTURE_2D, this.wd.get(ja)), this.a.uniform1i(U, 1), this.a.uniform1f(S, Kb.za), this.a.uniform4fv(da, Kb.$e)));
                    this.a.uniformMatrix4fv(nh, u, ea.ja.Q);
                    ja = 1;
                    "POINTS" == ea.Ia && (ja = ea.sd);
                    this.a.uniform1f(oh, ja);
                    ja = -1;
                    ea.Ia == id ? (ja = this.a.TRIANGLES, f && (s += nb.ed / 3)) : "LINES" == ea.Ia ? (this.a.lineWidth(ea.Lc), ja = this.a.LINES) : "POINTS" == ea.Ia ? ja = this.a.POINTS: "TRIANGLE_STRIPS" == ea.Ia ? (ja = this.a.TRIANGLE_STRIP, f && (s += nb.ed / 3)) : "POLYGONS" == ea.Ia && (ja = 0 == nb.ed % 3 ? this.a.TRIANGLES: this.a.TRIANGLE_FAN, f && (s += nb.ed / 3));
                    this.a.drawArrays(ja, 0, nb.ed)
                }
            }
        } while (-- d );
        f && Math.round(s)
    }
};
w.remove = function(a) {
    ih.u.remove.call(this, a);
    if (0 < a.c.length) for (var b = a.c,
    c = b.length,
    e = 0,
    e = 0; e < c; e++)"undefined" != typeof b[e] && this.remove(b[e]);
    b = a.qa;
    c = this.oc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    if (a.G && (c = this.wd.get(a.G.qa))) this.a.deleteTexture(c),
    this.wd.remove(a.G.qa);
    c = this.pc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.qd.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.Ec.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.Pc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    this.pc.remove(b);
    this.qd.remove(b);
    this.Ec.remove(b);
    this.oc.remove(b);
    this.Pc.remove(b);
    this.pb.remove(a);
    return q
};
w.Ta = function() {
    this.Ze = t;
    delete this.Ze;
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    ih.u.Ta.call(this)
};
ih.prototype.__defineGetter__("bgColor", v("bd"));
ih.prototype.__defineSetter__("bgColor", ca("bd"));
ih.prototype.Vj = function(a, b, c, e, d) {
    c != t || (c = 4);
    e != t || (e = 2);
    if (d == t) {
        d = this.Mf(a, b);
        if ( - 1 == d) return t;
        d = this.get(d);
        if (!d) return t
    }
    var f = Qe(this.N, 2 * (a / this.K) - 1, 2 * ((this.A - b) / this.A) - 1, 0);
    a = Qe(this.N, 2 * (a / this.K) - 1, 2 * ((this.A - b) / this.A) - 1, 1);
    f[0] += this.z[0];
    f[1] += this.z[1];
    f[2] += this.z[2];
    a[0] += this.z[0];
    a[1] += this.z[1];
    a[2] += this.z[2];
    b = [d.h.mb, d.h.nb, d.h.ob];
    var g = [d.h.jb, d.h.nb, d.h.ob],
    h = [d.h.jb, d.h.kb, d.h.ob],
    l = [d.h.mb, d.h.kb, d.h.ob],
    j = [d.h.mb, d.h.kb, d.h.lb],
    k = [d.h.mb, d.h.nb, d.h.lb],
    n = [d.h.jb, d.h.kb, d.h.lb],
    s = [d.h.jb, d.h.nb, d.h.lb];
    b = [D.g.ba(d.ja.Q, b[0], b[1], b[2]), D.g.ba(d.ja.Q, g[0], g[1], g[2]), D.g.ba(d.ja.Q, h[0], h[1], h[2]), D.g.ba(d.ja.Q, l[0], l[1], l[2]), D.g.ba(d.ja.Q, j[0], j[1], j[2]), D.g.ba(d.ja.Q, k[0], k[1], k[2]), D.g.ba(d.ja.Q, n[0], n[1], n[2]), D.g.ba(d.ja.Q, s[0], s[1], s[2])];
    var g = [Infinity, -Infinity, Infinity, -Infinity, Infinity, -Infinity],
    r;
    for (r in b) r = b[r],
    g = [Math.min(g[0], r.x), Math.max(g[1], r.x), Math.min(g[2], r.y), Math.max(g[3], r.y), Math.min(g[4], r.d), Math.max(g[5], r.d)];
    r = g;
    b = [];
    g = [];
    for (h = 0; 6 > h; h++) {
        var l = Math.floor(h / 2),
        j = (l + 1) % 3,
        k = (l + 2) % 3,
        s = (2 + 2 * l) % 6,
        y = (4 + 2 * l) % 6,
        z = (r[h] - f[l]) * (1 / a[l]);
        Infinity != z && -Infinity != z && (n = f[j] + a[j] * z, z = f[k] + a[k] * z, n >= r[s] && n <= r[s + 1] && z >= r[y] && z <= r[y + 1] ? (s = [], s[l] = r[h], s[j] = n, s[k] = z, b.push(s)) : (s = [], s[l] = r[h], s[j] = n, s[k] = z, g.push(s)))
    }
    a = [b, g];
    a = a[0];
    if (0 == a.length) return t;
    g = Array(2);
    for (r = 0; 2 > r; r++) b = a[r],
    g[r] = Math.sqrt((b[0] - f[0]) * (b[0] - f[0]) + (b[1] - f[1]) * (b[1] - f[1]) + (b[2] - f[2]) * (b[2] - f[2]));
    f = b = r = t;
    g[0] < g[1] ? (r = a[0], b = a[1]) : (r = a[1], b = a[0]);
    f = Math.sqrt((r[0] - b[0]) * (r[0] - b[0]) + (r[1] - b[1]) * (r[1] - b[1]) + (r[2] - b[2]) * (r[2] - b[2]));
    f /= c;
    a = r;
    r = [b[0] - r[0], b[1] - r[1], b[2] - r[2]];
    b = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
    g = [r[0] / b, r[1] / b, r[2] / b];
    h = d.h.da;
    l = h.length;
    for (r = 0; r < f; r += c) {
        a = [a[0] + c * g[0], a[1] + c * g[1], a[2] + c * g[2]];
        for (b = 0; b < l; b += 3) if (j = h[b], k = h[b + 1], n = h[b + 2], s = new D.m(j, k, n), s = D.g.ba(d.ja.Q, j, k, n), Math.sqrt((a[0] - s.x) * (a[0] - s.x) + (a[1] - s.y) * (a[1] - s.y) + (a[2] - s.d) * (a[2] - s.d)) <= e) return [s.x, s.y, s.d]
    }
    return t
};
A("X.renderer3D", ih);
A("X.renderer3D.prototype.init", ih.prototype.Ca);
A("X.renderer3D.prototype.add", ih.prototype.add);
A("X.renderer3D.prototype.onShowtime", ih.prototype.lh);
A("X.renderer3D.prototype.onRender", ih.prototype.jh);
A("X.renderer3D.prototype.get", ih.prototype.get);
A("X.renderer3D.prototype.render", ih.prototype.cc);
A("X.renderer3D.prototype.destroy", ih.prototype.Ta);
A("X.renderer3D.prototype.remove", ih.prototype.remove);
A("X.renderer3D.prototype.resetBoundingBox", ih.prototype.Zj);
A("X.renderer3D.prototype.resetViewAndRender", ih.prototype.Nd);
A("X.renderer3D.prototype.pick", ih.prototype.Mf);
A("X.renderer3D.prototype.pick3d", ih.prototype.Vj);
A("X.renderer3D.prototype.afterRender", ih.prototype.yg);
function jh() {
    Y.call(this);
    this.f = "mesh";
    Fa(this, new xc)
}
C(jh, Y);
A("X.mesh", jh);
function kh() {
    Y.call(this);
    this.f = "fibers";
    Fa(this, new xc)
}
C(kh, Y);
A("X.fibers", kh);
function lh() {
    Kg.call(this);
    this.f = "renderer2D";
    this.Qa = t;
    this.Fa = -1;
    this.Sb = [];
    this.kg = this.fd = this.fg = this.Vd = t;
    this.Rc = this.Uc = this.Qc = this.Tc = 0;
    this.ea = this.fa = this.W = this.U = this.Je = -1;
    this.lg = new Float32Array([ - 255, -255, -255, -255]);
    this.sg = q;
    this.xb = 1
}
C(lh, Kg);
w = lh.prototype;
w.remove = function(a) {
    lh.u.remove.call(this, a);
    this.pb.remove(a);
    return q
};
w.Gj = aa();
w.Qj = aa();
//X.renderer2D.prototype.onScroll_()
w.Jf = function(a) {
    lh.u.Jf.call(this, a);
    var b = this.Ha[0];
    if (b) {
        var c = "",
        c = 0 == this.Fa ? "indexX": 1 == this.Fa ? "indexY": "indexZ";
        b[c] = a.V ? b[c] + 1 : b[c] - 1;
        eval("this.onScroll();")
    }
};
w.Rj = function(a) {
    var b = this.Ha[0];
    if (b) {
        var c = b.ea - b.fa,
        e = c / 2,
        d = parseInt(c + c / 15 * -a.cf, 10);
        a = parseInt(e + e / 15 * a.Qe, 10);
        c == d && d++;
        e == a && a++;
        b.fa -= parseInt(e - a, 10);
        b.fa -= parseInt(c - d, 10);
        b.fa = Math.max(b.fa, b.ra);
        b.ea -= parseInt(e - a, 10);
        b.ea += parseInt(c - d, 10);
        b.ea = Math.min(b.ea, b.ia);
        eval("this.onWindowLevel();")
    }
};
lh.prototype.__defineGetter__("orientation", v("Qa"));
lh.prototype.__defineSetter__("orientation",
//下面这个匿名函数是X.renderer2D.prototype.__defineSetter__ 是X.renderer2D中orientation属性的set方法
function(a) {
    a = a.toUpperCase();
    "AXIAL" == a ? (a = "Z", this.Fa = 2) : "SAGITTAL" == a ? (a = "X", this.Fa = 0) : "CORONAL" == a && (a = "Y", this.Fa = 1);
    "X" != a && ("Y" != a && "Z" != a) && m(Error("Invalid orientation."));
    this.Qa = a
});
lh.prototype.__defineGetter__("radiological", v("sg"));
lh.prototype.__defineGetter__("normalizedScale", v("xb"));
lh.prototype.__defineGetter__("canvasWidth",
function() {
    return this.na.width
});
lh.prototype.__defineGetter__("canvasHeight",
function() {
    return this.na.height
});
lh.prototype.__defineGetter__("sliceWidth", v("Tc"));
lh.prototype.__defineGetter__("sliceHeight", v("Qc"));
lh.prototype.__defineSetter__("radiological", ca("sg"));
w = lh.prototype;
//X.renderer2D的init方法
w.Ca = function() {
    this.Qa || m(Error("No 2D orientation set."));
    lh.u.Ca.call(this, "2d"); //调用父类的init方法
    this.a.fillStyle = "rgba(50,50,50,0)";
    this.a.fillRect(0, 0, this.na.width, this.na.height);
    this.Vd = de("canvas");
    this.fd = de("canvas");
    this.fd.style.Cl = "pixelated";
    L(this.N, xd, this.Rj.bind(this))
};
w.ve = function() {
    lh.u.ve.call(this);
    ph(this)
};
w.Nd = function() {
    lh.u.Nd.call(this);
    ph(this);
    var a = this.Ha[0];
    a && (a.ea = a.ia, a.fa = a.ra)
};
w.update = function(a) {
    this.ub(a);
    this.Je = -1
};
//X.renderer2D.prototype.update_()
w.ub = function(a) {
    lh.u.ub.call(this, a);
    var b = u;
    this.get(a.qa) && (b = q);
    if (a instanceof P) {
        var c = a.r,
        e = a.e,
        d = a.xa;
        if (e != t && e.r != t && e.r.j) this.ub(e);
        else if (d != t && d.r != t && d.r.j) this.aa.load(d, a);
        else {
            if (c != t && la(c)) if (a.yc != t) {
                if (a.yc.xf != c.length) return
            } else {
                b = 0;
                e = c.length;
                for (b = 0; b < e; b++) this.aa.load(c[b], a);
                return
            } else if (c != t && c.j) {
                this.aa.load(a, a);
                return
            }
            this.Fa = "X" == this.Qa ? 0 : "Y" == this.Qa ? 1 : 2;
            debugger;
            this.bb = a.c[this.Fa].c;
            d = t;
            d = 0 == this.Fa ? a.indexX: 1 == this.Fa ? a.indexY: a.indexZ;
            c = a.c[this.Fa].c[d].jg;
            e = a.c[this.Fa].c[d].ig;
            this.Uc = a.c[this.Fa].c[d].Vc;
            this.Rc = a.c[this.Fa].c[d].Gc;
            this.Tc = c;
            this.Qc = e;
            d = this.Vd;
            d.width = c;
            d.height = e;
            var f = this.fd;
            f.width = c;
            f.height = e;
            this.fg = d.getContext("2d");
            this.kg = f.getContext("2d");
            b || (this.pb.add(a), ph(this))
        }
    }
};
function ph(a) {
    var b = Math.min(a.K / (a.Tc * a.Uc), a.A / (a.Qc * a.Rc));
    a.N.o[14] = b
}
w.Hj = aa();
w.Ih = function(a, b) {
    var c = this.Ha[0],
    e = this.N.o,
    d = t,
    f = this.Tc,
    g = this.Qc,
    h = t,
    l = t;
    if ("Y" == this.Qa) d = this.bb[parseInt(c.indexY, 10)],
    h = d.Vc,
    l = d.Gc,
    this.Sb[0] = "rgba(255,0,0,.3)",
    this.Sb[1] = "rgba(0,0,255,.3)";
    else if ("Z" == this.Qa) d = this.bb[parseInt(c.indexZ, 10)],
    h = d.Vc,
    l = d.Gc,
    this.Sb[0] = "rgba(255,0,0,.3)",
    this.Sb[1] = "rgba(0,255,0,.3)";
    else {
        d = this.bb[parseInt(c.indexX, 10)];
        h = d.Gc;
        l = d.Vc;
        this.Sb[0] = "rgba(0,255,0,.3)";
        this.Sb[1] = "rgba(0,0,255,.3)";
        var j = f,
        f = g,
        g = j
    }
    var k = 1 * e[12],
    e = -1 * e[13],
    j = [this.K / 2, this.A / 2],
    h = f * h * this.xb,
    l = g * l * this.xb,
    n = j[0] - h / 2,
    j = j[1] - l / 2,
    n = n + k * this.xb,
    j = j + e * this.xb;
    return a > n && a < n + h && b > j && b < j + l ? (k = (a - n) / h * f, e = (b - j) / l * g, l = d.ei[4], "X" == this.Qa ? (j = f - k, k = e, e = j) : "Y" == this.Qa ? k = f - k: "Z" == this.Qa && (k = f - k, e = g - e), k = d.di + k * d.Vc, e = d.Yh + e * d.Gc, k = Qc(k, e, l, 1), f = Rc(), cd(d.Rh, k, f), f = [Math.floor(f[0]), Math.floor(f[1]), Math.floor(f[2])], g = Rc(), cd(d.Sh, k, g), d = Math.round((c.b[0].i[0] * g[0] + c.b[0].i[1] * g[1] + c.b[0].i[2] * g[2] + c.b[0].Te) / c.b[0].Sc), d >= c.b[0].p ? d = c.b[0].p - 1 : 0 > d && (d = 0), k = Math.round((c.b[1].i[0] * g[0] + c.b[1].i[1] * g[1] + c.b[1].i[2] * g[2] + c.b[1].Te) / c.b[1].Sc), k >= c.b[1].p ? k = c.b[1].p - 1 : 0 > k && (k = 0), e = Math.round((c.b[2].i[0] * g[0] + c.b[2].i[1] * g[1] + c.b[2].i[2] * g[2] + c.b[2].Te) / c.b[2].Sc), e >= c.b[2].p ? e = c.b[2].p - 1 : 0 > e && (e = 0), [[d, k, e], [f[0], f[1], f[2]], [g[0], g[1], g[2]]]) : t
};
//X.renderer2D.prototype.render_
w.dc = function(a, b) {
    lh.u.dc.call(this, a, b);
    if (0 != this.pb.I.length) {
        var c = this.Ha[0],
        e = t,
        e = 0 == this.Fa ? c.indexX: 1 == this.Fa ? c.indexY: c.indexZ,
        d = this.bb[parseInt(e, 10)].jg,
        f = this.bb[parseInt(e, 10)].ig;
        this.Uc = this.bb[parseInt(e, 10)].Vc;
        this.Rc = this.bb[parseInt(e, 10)].Gc;
        this.Tc = d;
        this.Qc = f;
        var g = this.K,
        h = this.A,
        l = this.N.o;
        this.a.save();
        this.a.clearRect( - g, -h, 2 * g, 2 * h);
        this.a.restore();
        this.xb = Math.max(l[14], 1E-4);
        this.a.setTransform(this.xb, 0, 0, this.xb, 0, 0);
        var j = 1 * l[12],
        l = -1 * l[13],
        k = t;
        c.e && (k = c.e.$e);
        var n = this.bb[parseInt(e, 10)],
        s = n.G.Wb,
        n = n.e,
        r = t;
        n && (r = n.Wb);
        var y = this.Tc,
        z = this.Qc,
        F = this.fg,
        G = this.kg,
        H = F.getImageData(0, 0, y, z),
        B = G.getImageData(0, 0, y, z),
        E = H.data,
        I = B.data,
        N = E.length,
        Q = c.U,
        O = c.W,
        S = c.fa,
        da = c.ea;
        if (this.Je != e || this.U != Q || this.W != O || this.fa != S || this.ea != da || k && !tg(k, this.lg, 0)) {
            var J = this.Vd;
            J.width = d;
            J.height = f;
            J = this.fd;
            J.width = d;
            J.height = f;
            d = 0;
            do {
                var J = [0, 0, 0, 0], f = [0, 0, 0, 0], ba = s[d] / 255 * (c.ia - c.ra) + c.ra, ka = da - S, U = ka / 2 + S, V = 0, V = ba < U - ka / 2 ? 0 : ba > U + ka / 2 ? 255 : 255 * (ba - (U - ka / 2)) / ka;
                ba >= Q && ba <= O && (J = new R(c.Rb[0], c.Rb[1], c.Rb[2]), J = (new R(c.Pb[0], c.Pb[1], c.Pb[2])).scale(V).add(J.scale(255 - V)), J = [Math.floor(J.x), Math.floor(J.y), Math.floor(J.d), 255], n && ( - 255 == k[3] ? f = [r[d], r[d + 1], r[d + 2], r[d + 3]] : tg(k, r, d) && (f = [r[d], r[d + 1], r[d + 2], r[d + 3]])));
                "X" == this.Qa ? (E[d] = J[0], E[d + 1] = J[1], E[d + 2] = J[2], E[d + 3] = J[3], I[d] = f[0], I[d + 1] = f[1], I[d + 2] = f[2], I[d + 3] = f[3]) : "Y" == this.Qa ? (V = Math.floor(d / (4 * y)), V = 4 * V * y + (4 * (y - 1) - (d - 4 * V * y)), E[V] = J[0], E[V + 1] = J[1], E[V + 2] = J[2], E[V + 3] = J[3], I[V] = f[0], I[V + 1] = f[1], I[V + 2] = f[2], I[V + 3] = f[3]) : (V = N - 1 - d, E[V - 3] = J[0], E[V - 2] = J[1], E[V - 1] = J[2], E[V] = J[3], I[V - 3] = f[0], I[V - 2] = f[1], I[V - 1] = f[2], I[V] = f[3]);
                d += 4
            } while ( d < N );
            debugger;
            F.putImageData(H, 0, 0);
            G.putImageData(B, 0, 0);
            this.Je = e;
            this.U = Q;
            this.W = O;
            this.fa = S;
            this.ea = da;
            n && (this.lg = k)
        }
        this.a.globalAlpha = 1;
        this.a.translate(g / 2 / this.xb, h / 2 / this.xb);
        "X" == this.Qa && (this.a.rotate(0.5 * Math.PI), e = j, j = l, l = -e);
        j = -y * this.Uc / 2 + j;
        l = -z * this.Rc / 2 + l;
        this.a.drawImage(this.Vd, j, l, y * this.Uc, z * this.Rc);
        n && c.e.O && (this.a.globalAlpha = 1, this.a.drawImage(this.fd, j, l, y * this.Uc, z * this.Rc));
        if (this.R.SLICENAVIGATORS) if (this.na.style.cursor = "none", this.T.Yd && this.T.wg && !this.T.wb) {
            if (j = this.T.ua, j = this.Ih(j[0], j[1])) c.Cb = j[0][0],
            c.Db = j[0][1],
            c.Eb = j[0][2],
            c.q(u),
            this.onSliceNavigation(),
            this.a.setTransform(1, 0, 0, 1, 0, 0),
            this.a.beginPath(),
            this.a.moveTo(this.T.ua[0], 0),
            this.a.lineTo(this.T.ua[0], this.T.ua[1] - 1),
            this.a.moveTo(this.T.ua[0], this.T.ua[1] + 1),
            this.a.lineTo(this.T.ua[0], this.A),
            this.a.strokeStyle = this.Sb[0],
            this.a.stroke(),
            this.a.closePath(),
            this.a.beginPath(),
            this.a.moveTo(0, this.T.ua[1]),
            this.a.lineTo(this.T.ua[0] - 1, this.T.ua[1]),
            this.a.moveTo(this.T.ua[0] + 1, this.T.ua[1]),
            this.a.lineTo(this.K, this.T.ua[1]),
            this.a.strokeStyle = this.Sb[1],
            this.a.stroke(),
            this.a.closePath(),
            this.a.font = "10pt Arial",
            this.a.textAlign = "left",
            this.a.textBaseline = "top",
            this.a.fillStyle = "white",
            this.a.fillText("RAS: " + j[2][0].toFixed(2) + ", " + j[2][1].toFixed(2) + ", " + j[2][2].toFixed(2), 0, 0),
            y = n = l = "undefined",
            "undefined" != typeof c.$[j[1][2].toFixed(0)] && "undefined" != typeof c.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)] && (l = c.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)][j[1][0].toFixed(0)], c.L && (n = c.e.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)][j[1][0].toFixed(0)], c.e.cd && (y = c.e.cd.get(n), "undefined" != typeof y && (y = y[0])))),
            this.a.fillText("Background:  " + l + " (" + j[1][0].toFixed(0) + ", " + j[1][1].toFixed(0) + ", " + j[1][2].toFixed(0) + ")", 0, 15),
            c.L && this.a.fillText("Labelmap:  " + y + " (" + n + ")", 0, 30)
        } else this.na.style.cursor = "default"
    }
};
A("X.renderer2D", lh);
A("X.renderer2D.prototype.init", lh.prototype.Ca);
A("X.renderer2D.prototype.add", lh.prototype.add);
A("X.renderer2D.prototype.onShowtime", lh.prototype.lh);
A("X.renderer2D.prototype.onRender", lh.prototype.jh);
A("X.renderer2D.prototype.onScroll", lh.prototype.Gj);
A("X.renderer2D.prototype.onWindowLevel", lh.prototype.Qj);
A("X.renderer2D.prototype.get", lh.prototype.get);
A("X.renderer2D.prototype.resetViewAndRender", lh.prototype.Nd);
A("X.renderer2D.prototype.xy2ijk", lh.prototype.Ih);
A("X.renderer2D.prototype.render", lh.prototype.cc);
A("X.renderer2D.prototype.destroy", lh.prototype.Ta);
A("X.renderer2D.prototype.onSliceNavigation", lh.prototype.Hj);
A("X.renderer2D.prototype.afterRender", lh.prototype.yg);



function  InitializeAllParameters() {
	 Fk=0.7;
	 Bk=0.7;jl=800;dl=269;ll=0;kl=1527;
};