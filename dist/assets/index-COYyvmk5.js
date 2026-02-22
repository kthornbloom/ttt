var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
        new MutationObserver((i) => {
          for (const s of i) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function e(i) {
          const s = {};
          return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function n(i) {
          if (i.ep) return;
          i.ep = true;
          const s = e(i);
          fetch(i.href, s);
        }
      })();
      const Rl = "160", Fp = 0, yh = 1, Op = 2, Gd = 1, kd = 2, hi = 3, xi = 0, hn = 1, On = 2, yi = 0, Kr = 1, xh = 2, Sh = 3, bh = 4, Bp = 5, lr = 100, zp = 101, Hp = 102, Mh = 103, Eh = 104, Gp = 200, kp = 201, Vp = 202, Wp = 203, Qc = 204, tl = 205, jp = 206, Xp = 207, qp = 208, Yp = 209, Kp = 210, Jp = 211, $p = 212, Zp = 213, Qp = 214, tm = 0, em = 1, nm = 2, no = 3, im = 4, rm = 5, sm = 6, am = 7, Vd = 0, om = 1, cm = 2, Gi = 0, lm = 1, hm = 2, um = 3, Wd = 4, dm = 5, fm = 6, Th = "attached", pm = "detached", jd = 300, es = 301, ns = 302, el = 303, nl = 304, bo = 306, is = 1e3, ln = 1001, io = 1002, ze = 1003, il = 1004, Ja = 1005, on = 1006, Xd = 1007, vr = 1008, ki = 1009, mm = 1010, _m = 1011, Cl = 1012, qd = 1013, zi = 1014, _i = 1015, rs = 1016, Yd = 1017, Kd = 1018, mr = 1020, gm = 1021, Mn = 1023, wm = 1024, vm = 1025, _r = 1026, ss = 1027, ym = 1028, Jd = 1029, xm = 1030, $d = 1031, Zd = 1033, Yo = 33776, Ko = 33777, Jo = 33778, $o = 33779, Ah = 35840, Rh = 35841, Ch = 35842, Ph = 35843, Qd = 36196, Lh = 37492, Ih = 37496, Dh = 37808, Uh = 37809, Nh = 37810, Fh = 37811, Oh = 37812, Bh = 37813, zh = 37814, Hh = 37815, Gh = 37816, kh = 37817, Vh = 37818, Wh = 37819, jh = 37820, Xh = 37821, Zo = 36492, qh = 36494, Yh = 36495, Sm = 36283, Kh = 36284, Jh = 36285, $h = 36286, Vs = 2300, as = 2301, Qo = 2302, Zh = 2400, Qh = 2401, tu = 2402, bm = 2500, Mm = 0, tf = 1, rl = 2, ef = 3e3, gr = 3001, Em = 3200, Tm = 3201, nf = 0, Am = 1, En = "", Se = "srgb", ke = "srgb-linear", Pl = "display-p3", Mo = "display-p3-linear", ro = "linear", me = "srgb", so = "rec709", ao = "p3", Sr = 7680, eu = 519, Rm = 512, Cm = 513, Pm = 514, rf = 515, Lm = 516, Im = 517, Dm = 518, Um = 519, sl = 35044, nu = "300 es", al = 1035, gi = 2e3, oo = 2001;
      class ps {
        addEventListener(t, e) {
          this._listeners === void 0 && (this._listeners = {});
          const n = this._listeners;
          n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (this._listeners === void 0) return false;
          const n = this._listeners;
          return n[t] !== void 0 && n[t].indexOf(e) !== -1;
        }
        removeEventListener(t, e) {
          if (this._listeners === void 0) return;
          const i = this._listeners[t];
          if (i !== void 0) {
            const s = i.indexOf(e);
            s !== -1 && i.splice(s, 1);
          }
        }
        dispatchEvent(t) {
          if (this._listeners === void 0) return;
          const n = this._listeners[t.type];
          if (n !== void 0) {
            t.target = this;
            const i = n.slice(0);
            for (let s = 0, a = i.length; s < a; s++) i[s].call(this, t);
            t.target = null;
          }
        }
      }
      const Ye = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
      ];
      let iu = 1234567;
      const Jr = Math.PI / 180, os = 180 / Math.PI;
      function Hn() {
        const r = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
        return (Ye[r & 255] + Ye[r >> 8 & 255] + Ye[r >> 16 & 255] + Ye[r >> 24 & 255] + "-" + Ye[t & 255] + Ye[t >> 8 & 255] + "-" + Ye[t >> 16 & 15 | 64] + Ye[t >> 24 & 255] + "-" + Ye[e & 63 | 128] + Ye[e >> 8 & 255] + "-" + Ye[e >> 16 & 255] + Ye[e >> 24 & 255] + Ye[n & 255] + Ye[n >> 8 & 255] + Ye[n >> 16 & 255] + Ye[n >> 24 & 255]).toLowerCase();
      }
      function Xe(r, t, e) {
        return Math.max(t, Math.min(e, r));
      }
      function Ll(r, t) {
        return (r % t + t) % t;
      }
      function Nm(r, t, e, n, i) {
        return n + (r - t) * (i - n) / (e - t);
      }
      function Fm(r, t, e) {
        return r !== t ? (e - r) / (t - r) : 0;
      }
      function Bs(r, t, e) {
        return (1 - e) * r + e * t;
      }
      function Om(r, t, e, n) {
        return Bs(r, t, 1 - Math.exp(-e * n));
      }
      function Bm(r, t = 1) {
        return t - Math.abs(Ll(r, t * 2) - t);
      }
      function zm(r, t, e) {
        return r <= t ? 0 : r >= e ? 1 : (r = (r - t) / (e - t), r * r * (3 - 2 * r));
      }
      function Hm(r, t, e) {
        return r <= t ? 0 : r >= e ? 1 : (r = (r - t) / (e - t), r * r * r * (r * (r * 6 - 15) + 10));
      }
      function Gm(r, t) {
        return r + Math.floor(Math.random() * (t - r + 1));
      }
      function km(r, t) {
        return r + Math.random() * (t - r);
      }
      function Vm(r) {
        return r * (0.5 - Math.random());
      }
      function Wm(r) {
        r !== void 0 && (iu = r);
        let t = iu += 1831565813;
        return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
      }
      function jm(r) {
        return r * Jr;
      }
      function Xm(r) {
        return r * os;
      }
      function ol(r) {
        return (r & r - 1) === 0 && r !== 0;
      }
      function qm(r) {
        return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
      }
      function co(r) {
        return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
      }
      function Ym(r, t, e, n, i) {
        const s = Math.cos, a = Math.sin, o = s(e / 2), c = a(e / 2), l = s((t + n) / 2), h = a((t + n) / 2), u = s((t - n) / 2), d = a((t - n) / 2), p = s((n - t) / 2), _ = a((n - t) / 2);
        switch (i) {
          case "XYX":
            r.set(o * h, c * u, c * d, o * l);
            break;
          case "YZY":
            r.set(c * d, o * h, c * u, o * l);
            break;
          case "ZXZ":
            r.set(c * u, c * d, o * h, o * l);
            break;
          case "XZX":
            r.set(o * h, c * _, c * p, o * l);
            break;
          case "YXY":
            r.set(c * p, o * h, c * _, o * l);
            break;
          case "ZYZ":
            r.set(c * _, c * p, o * h, o * l);
            break;
          default:
            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
        }
      }
      function qn(r, t) {
        switch (t.constructor) {
          case Float32Array:
            return r;
          case Uint32Array:
            return r / 4294967295;
          case Uint16Array:
            return r / 65535;
          case Uint8Array:
            return r / 255;
          case Int32Array:
            return Math.max(r / 2147483647, -1);
          case Int16Array:
            return Math.max(r / 32767, -1);
          case Int8Array:
            return Math.max(r / 127, -1);
          default:
            throw new Error("Invalid component type.");
        }
      }
      function le(r, t) {
        switch (t.constructor) {
          case Float32Array:
            return r;
          case Uint32Array:
            return Math.round(r * 4294967295);
          case Uint16Array:
            return Math.round(r * 65535);
          case Uint8Array:
            return Math.round(r * 255);
          case Int32Array:
            return Math.round(r * 2147483647);
          case Int16Array:
            return Math.round(r * 32767);
          case Int8Array:
            return Math.round(r * 127);
          default:
            throw new Error("Invalid component type.");
        }
      }
      const sf = {
        DEG2RAD: Jr,
        RAD2DEG: os,
        generateUUID: Hn,
        clamp: Xe,
        euclideanModulo: Ll,
        mapLinear: Nm,
        inverseLerp: Fm,
        lerp: Bs,
        damp: Om,
        pingpong: Bm,
        smoothstep: zm,
        smootherstep: Hm,
        randInt: Gm,
        randFloat: km,
        randFloatSpread: Vm,
        seededRandom: Wm,
        degToRad: jm,
        radToDeg: Xm,
        isPowerOfTwo: ol,
        ceilPowerOfTwo: qm,
        floorPowerOfTwo: co,
        setQuaternionFromProperEuler: Ym,
        normalize: le,
        denormalize: qn
      };
      class Ot {
        constructor(t = 0, e = 0) {
          Ot.prototype.isVector2 = true, this.x = t, this.y = e;
        }
        get width() {
          return this.x;
        }
        set width(t) {
          this.x = t;
        }
        get height() {
          return this.y;
        }
        set height(t) {
          this.y = t;
        }
        set(t, e) {
          return this.x = t, this.y = e, this;
        }
        setScalar(t) {
          return this.x = t, this.y = t, this;
        }
        setX(t) {
          return this.x = t, this;
        }
        setY(t) {
          return this.y = t, this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y);
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this;
        }
        add(t) {
          return this.x += t.x, this.y += t.y, this;
        }
        addScalar(t) {
          return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t) {
          return this.x -= t.x, this.y -= t.y, this;
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
          return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this;
        }
        divide(t) {
          return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
          const e = this.x, n = this.y, i = t.elements;
          return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        }
        roundToZero() {
          return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (e === 0) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(Xe(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x, n = this.y - t.y;
          return e * e + n * n;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e) {
          return this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
          const n = Math.cos(e), i = Math.sin(e), s = this.x - t.x, a = this.y - t.y;
          return this.x = s * n - a * i + t.x, this.y = s * i + a * n + t.y, this;
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y;
        }
      }
      class Yt {
        constructor(t, e, n, i, s, a, o, c, l) {
          Yt.prototype.isMatrix3 = true, this.elements = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
          ], t !== void 0 && this.set(t, e, n, i, s, a, o, c, l);
        }
        set(t, e, n, i, s, a, o, c, l) {
          const h = this.elements;
          return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = s, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
          const e = this.elements, n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
        }
        extractBasis(t, e, n) {
          return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], p = n[5], _ = n[8], w = i[0], m = i[3], f = i[6], b = i[1], v = i[4], R = i[7], I = i[2], y = i[5], A = i[8];
          return s[0] = a * w + o * b + c * I, s[3] = a * m + o * v + c * y, s[6] = a * f + o * R + c * A, s[1] = l * w + h * b + u * I, s[4] = l * m + h * v + u * y, s[7] = l * f + h * R + u * A, s[2] = d * w + p * b + _ * I, s[5] = d * m + p * v + _ * y, s[8] = d * f + p * R + _ * A, this;
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
          const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
          return e * a * h - e * o * l - n * s * h + n * o * c + i * s * l - i * a * c;
        }
        invert() {
          const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, d = o * c - h * s, p = l * s - a * c, _ = e * u + n * d + i * p;
          if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const w = 1 / _;
          return t[0] = u * w, t[1] = (i * l - h * n) * w, t[2] = (o * n - i * a) * w, t[3] = d * w, t[4] = (h * e - i * c) * w, t[5] = (i * s - o * e) * w, t[6] = p * w, t[7] = (n * c - l * e) * w, t[8] = (a * e - n * s) * w, this;
        }
        transpose() {
          let t;
          const e = this.elements;
          return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, n, i, s, a, o) {
          const c = Math.cos(s), l = Math.sin(s);
          return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -i * l, i * c, -i * (-l * a + c * o) + o + e, 0, 0, 1), this;
        }
        scale(t, e) {
          return this.premultiply(tc.makeScale(t, e)), this;
        }
        rotate(t) {
          return this.premultiply(tc.makeRotation(-t)), this;
        }
        translate(t, e) {
          return this.premultiply(tc.makeTranslation(t, e)), this;
        }
        makeTranslation(t, e) {
          return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
        }
        makeRotation(t) {
          const e = Math.cos(t), n = Math.sin(t);
          return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
        }
        makeScale(t, e) {
          return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t) {
          const e = this.elements, n = t.elements;
          for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return false;
          return true;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
        }
        clone() {
          return new this.constructor().fromArray(this.elements);
        }
      }
      const tc = new Yt();
      function af(r) {
        for (let t = r.length - 1; t >= 0; --t) if (r[t] >= 65535) return true;
        return false;
      }
      function Ws(r) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", r);
      }
      function Km() {
        const r = Ws("canvas");
        return r.style.display = "block", r;
      }
      const ru = {};
      function zs(r) {
        r in ru || (ru[r] = true, console.warn(r));
      }
      const su = new Yt().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), au = new Yt().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), aa = {
        [ke]: {
          transfer: ro,
          primaries: so,
          toReference: (r) => r,
          fromReference: (r) => r
        },
        [Se]: {
          transfer: me,
          primaries: so,
          toReference: (r) => r.convertSRGBToLinear(),
          fromReference: (r) => r.convertLinearToSRGB()
        },
        [Mo]: {
          transfer: ro,
          primaries: ao,
          toReference: (r) => r.applyMatrix3(au),
          fromReference: (r) => r.applyMatrix3(su)
        },
        [Pl]: {
          transfer: me,
          primaries: ao,
          toReference: (r) => r.convertSRGBToLinear().applyMatrix3(au),
          fromReference: (r) => r.applyMatrix3(su).convertLinearToSRGB()
        }
      }, Jm = /* @__PURE__ */ new Set([
        ke,
        Mo
      ]), ie = {
        enabled: true,
        _workingColorSpace: ke,
        get workingColorSpace() {
          return this._workingColorSpace;
        },
        set workingColorSpace(r) {
          if (!Jm.has(r)) throw new Error(`Unsupported working color space, "${r}".`);
          this._workingColorSpace = r;
        },
        convert: function(r, t, e) {
          if (this.enabled === false || t === e || !t || !e) return r;
          const n = aa[t].toReference, i = aa[e].fromReference;
          return i(n(r));
        },
        fromWorkingColorSpace: function(r, t) {
          return this.convert(r, this._workingColorSpace, t);
        },
        toWorkingColorSpace: function(r, t) {
          return this.convert(r, t, this._workingColorSpace);
        },
        getPrimaries: function(r) {
          return aa[r].primaries;
        },
        getTransfer: function(r) {
          return r === En ? ro : aa[r].transfer;
        }
      };
      function $r(r) {
        return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
      }
      function ec(r) {
        return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
      }
      let br;
      class of {
        static getDataURL(t) {
          if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            br === void 0 && (br = Ws("canvas")), br.width = t.width, br.height = t.height;
            const n = br.getContext("2d");
            t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = br;
          }
          return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
          if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
            const e = Ws("canvas");
            e.width = t.width, e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height), s = i.data;
            for (let a = 0; a < s.length; a++) s[a] = $r(s[a] / 255) * 255;
            return n.putImageData(i, 0, 0), e;
          } else if (t.data) {
            const e = t.data.slice(0);
            for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor($r(e[n] / 255) * 255) : e[n] = $r(e[n]);
            return {
              data: e,
              width: t.width,
              height: t.height
            };
          } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
      }
      let $m = 0;
      class cf {
        constructor(t = null) {
          this.isSource = true, Object.defineProperty(this, "id", {
            value: $m++
          }), this.uuid = Hn(), this.data = t, this.version = 0;
        }
        set needsUpdate(t) {
          t === true && this.version++;
        }
        toJSON(t) {
          const e = t === void 0 || typeof t == "string";
          if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
          const n = {
            uuid: this.uuid,
            url: ""
          }, i = this.data;
          if (i !== null) {
            let s;
            if (Array.isArray(i)) {
              s = [];
              for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(nc(i[a].image)) : s.push(nc(i[a]));
            } else s = nc(i);
            n.url = s;
          }
          return e || (t.images[this.uuid] = n), n;
        }
      }
      function nc(r) {
        return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? of.getDataURL(r) : r.data ? {
          data: Array.from(r.data),
          width: r.width,
          height: r.height,
          type: r.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
      }
      let Zm = 0;
      class He extends ps {
        constructor(t = He.DEFAULT_IMAGE, e = He.DEFAULT_MAPPING, n = ln, i = ln, s = on, a = vr, o = Mn, c = ki, l = He.DEFAULT_ANISOTROPY, h = En) {
          super(), this.isTexture = true, Object.defineProperty(this, "id", {
            value: Zm++
          }), this.uuid = Hn(), this.name = "", this.source = new cf(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ot(0, 0), this.repeat = new Ot(1, 1), this.center = new Ot(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Yt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === gr ? Se : En), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
        }
        get image() {
          return this.source.data;
        }
        set image(t = null) {
          this.source.data = t;
        }
        updateMatrix() {
          this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
        }
        toJSON(t) {
          const e = t === void 0 || typeof t == "string";
          if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
          const n = {
            metadata: {
              version: 4.6,
              type: "Texture",
              generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [
              this.repeat.x,
              this.repeat.y
            ],
            offset: [
              this.offset.x,
              this.offset.y
            ],
            center: [
              this.center.x,
              this.center.y
            ],
            rotation: this.rotation,
            wrap: [
              this.wrapS,
              this.wrapT
            ],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
          };
          return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          });
        }
        transformUv(t) {
          if (this.mapping !== jd) return t;
          if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
            case is:
              t.x = t.x - Math.floor(t.x);
              break;
            case ln:
              t.x = t.x < 0 ? 0 : 1;
              break;
            case io:
              Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
              break;
          }
          if (t.y < 0 || t.y > 1) switch (this.wrapT) {
            case is:
              t.y = t.y - Math.floor(t.y);
              break;
            case ln:
              t.y = t.y < 0 ? 0 : 1;
              break;
            case io:
              Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
              break;
          }
          return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
          t === true && (this.version++, this.source.needsUpdate = true);
        }
        get encoding() {
          return zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Se ? gr : ef;
        }
        set encoding(t) {
          zs("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t === gr ? Se : En;
        }
      }
      He.DEFAULT_IMAGE = null;
      He.DEFAULT_MAPPING = jd;
      He.DEFAULT_ANISOTROPY = 1;
      class ne {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          ne.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = i;
        }
        get width() {
          return this.z;
        }
        set width(t) {
          this.z = t;
        }
        get height() {
          return this.w;
        }
        set height(t) {
          this.w = t;
        }
        set(t, e, n, i) {
          return this.x = t, this.y = e, this.z = n, this.w = i, this;
        }
        setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this.w = t, this;
        }
        setX(t) {
          return this.x = t, this;
        }
        setY(t) {
          return this.y = t, this;
        }
        setZ(t) {
          return this.z = t, this;
        }
        setW(t) {
          return this.w = t, this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
        }
        add(t) {
          return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
        }
        addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t) {
          return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
          return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
          const e = this.x, n = this.y, i = this.z, s = this.w, a = t.elements;
          return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * s, this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, n, i, s;
          const c = t.elements, l = c[0], h = c[4], u = c[8], d = c[1], p = c[5], _ = c[9], w = c[2], m = c[6], f = c[10];
          if (Math.abs(h - d) < 0.01 && Math.abs(u - w) < 0.01 && Math.abs(_ - m) < 0.01) {
            if (Math.abs(h + d) < 0.1 && Math.abs(u + w) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(l + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const v = (l + 1) / 2, R = (p + 1) / 2, I = (f + 1) / 2, y = (h + d) / 4, A = (u + w) / 4, B = (_ + m) / 4;
            return v > R && v > I ? v < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(v), i = y / n, s = A / n) : R > I ? R < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(R), n = y / i, s = B / i) : I < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(I), n = A / s, i = B / s), this.set(n, i, s, e), this;
          }
          let b = Math.sqrt((m - _) * (m - _) + (u - w) * (u - w) + (d - h) * (d - h));
          return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - _) / b, this.y = (u - w) / b, this.z = (d - h) / b, this.w = Math.acos((l + p + f - 1) / 2), this;
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
        }
        roundToZero() {
          return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e) {
          return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w;
        }
      }
      class Qm extends ps {
        constructor(t = 1, e = 1, n = {}) {
          super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = 1, this.scissor = new ne(0, 0, t, e), this.scissorTest = false, this.viewport = new ne(0, 0, t, e);
          const i = {
            width: t,
            height: e,
            depth: 1
          };
          n.encoding !== void 0 && (zs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === gr ? Se : En), n = Object.assign({
            generateMipmaps: false,
            internalFormat: null,
            minFilter: on,
            depthBuffer: true,
            stencilBuffer: false,
            depthTexture: null,
            samples: 0
          }, n), this.texture = new He(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
        }
        setSize(t, e, n = 1) {
          (this.width !== t || this.height !== e || this.depth !== n) && (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = true;
          const e = Object.assign({}, t.texture.image);
          return this.texture.source = new cf(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          });
        }
      }
      class Wi extends Qm {
        constructor(t = 1, e = 1, n = {}) {
          super(t, e, n), this.isWebGLRenderTarget = true;
        }
      }
      class lf extends He {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null), this.isDataArrayTexture = true, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
          }, this.magFilter = ze, this.minFilter = ze, this.wrapR = ln, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
        }
      }
      class t_ extends He {
        constructor(t = null, e = 1, n = 1, i = 1) {
          super(null), this.isData3DTexture = true, this.image = {
            data: t,
            width: e,
            height: n,
            depth: i
          }, this.magFilter = ze, this.minFilter = ze, this.wrapR = ln, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
        }
      }
      let vn = class {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = i;
        }
        static slerpFlat(t, e, n, i, s, a, o) {
          let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
          const d = s[a + 0], p = s[a + 1], _ = s[a + 2], w = s[a + 3];
          if (o === 0) {
            t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
            return;
          }
          if (o === 1) {
            t[e + 0] = d, t[e + 1] = p, t[e + 2] = _, t[e + 3] = w;
            return;
          }
          if (u !== w || c !== d || l !== p || h !== _) {
            let m = 1 - o;
            const f = c * d + l * p + h * _ + u * w, b = f >= 0 ? 1 : -1, v = 1 - f * f;
            if (v > Number.EPSILON) {
              const I = Math.sqrt(v), y = Math.atan2(I, f * b);
              m = Math.sin(m * y) / I, o = Math.sin(o * y) / I;
            }
            const R = o * b;
            if (c = c * m + d * R, l = l * m + p * R, h = h * m + _ * R, u = u * m + w * R, m === 1 - o) {
              const I = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
              c *= I, l *= I, h *= I, u *= I;
            }
          }
          t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
        }
        static multiplyQuaternionsFlat(t, e, n, i, s, a) {
          const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], p = s[a + 2], _ = s[a + 3];
          return t[e] = o * _ + h * u + c * p - l * d, t[e + 1] = c * _ + h * d + l * u - o * p, t[e + 2] = l * _ + h * p + o * d - c * u, t[e + 3] = h * _ - o * u - c * d - l * p, t;
        }
        get x() {
          return this._x;
        }
        set x(t) {
          this._x = t, this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          this._y = t, this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          this._z = t, this._onChangeCallback();
        }
        get w() {
          return this._w;
        }
        set w(t) {
          this._w = t, this._onChangeCallback();
        }
        set(t, e, n, i) {
          return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
          return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e = true) {
          const n = t._x, i = t._y, s = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(s / 2), d = c(n / 2), p = c(i / 2), _ = c(s / 2);
          switch (a) {
            case "XYZ":
              this._x = d * h * u + l * p * _, this._y = l * p * u - d * h * _, this._z = l * h * _ + d * p * u, this._w = l * h * u - d * p * _;
              break;
            case "YXZ":
              this._x = d * h * u + l * p * _, this._y = l * p * u - d * h * _, this._z = l * h * _ - d * p * u, this._w = l * h * u + d * p * _;
              break;
            case "ZXY":
              this._x = d * h * u - l * p * _, this._y = l * p * u + d * h * _, this._z = l * h * _ + d * p * u, this._w = l * h * u - d * p * _;
              break;
            case "ZYX":
              this._x = d * h * u - l * p * _, this._y = l * p * u + d * h * _, this._z = l * h * _ - d * p * u, this._w = l * h * u + d * p * _;
              break;
            case "YZX":
              this._x = d * h * u + l * p * _, this._y = l * p * u + d * h * _, this._z = l * h * _ - d * p * u, this._w = l * h * u - d * p * _;
              break;
            case "XZY":
              this._x = d * h * u - l * p * _, this._y = l * p * u - d * h * _, this._z = l * h * _ + d * p * u, this._w = l * h * u + d * p * _;
              break;
            default:
              console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
          }
          return e === true && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
          const n = e / 2, i = Math.sin(n);
          return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
          const e = t.elements, n = e[0], i = e[4], s = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], d = n + o + u;
          if (d > 0) {
            const p = 0.5 / Math.sqrt(d + 1);
            this._w = 0.25 / p, this._x = (h - c) * p, this._y = (s - l) * p, this._z = (a - i) * p;
          } else if (n > o && n > u) {
            const p = 2 * Math.sqrt(1 + n - o - u);
            this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + l) / p;
          } else if (o > u) {
            const p = 2 * Math.sqrt(1 + o - n - u);
            this._w = (s - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + h) / p;
          } else {
            const p = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - i) / p, this._x = (s + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
          }
          return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(Xe(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (n === 0) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this;
        }
        identity() {
          return this.set(0, 0, 0, 1);
        }
        invert() {
          return this.conjugate();
        }
        conjugate() {
          return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
        }
        dot(t) {
          return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
          return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
          let t = this.length();
          return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t) {
          return this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
          const n = t._x, i = t._y, s = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
          return this._x = n * h + a * o + i * l - s * c, this._y = i * h + a * c + s * o - n * l, this._z = s * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - s * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
          if (e === 0) return this;
          if (e === 1) return this.copy(t);
          const n = this._x, i = this._y, s = this._z, a = this._w;
          let o = a * t._w + n * t._x + i * t._y + s * t._z;
          if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this;
          const c = 1 - o * o;
          if (c <= Number.EPSILON) {
            const p = 1 - e;
            return this._w = p * a + e * this._w, this._x = p * n + e * this._x, this._y = p * i + e * this._y, this._z = p * s + e * this._z, this.normalize(), this;
          }
          const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, d = Math.sin(e * h) / l;
          return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n);
        }
        random() {
          const t = Math.random(), e = Math.sqrt(1 - t), n = Math.sqrt(t), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
          return this.set(e * Math.cos(i), n * Math.sin(s), n * Math.cos(s), e * Math.sin(i));
        }
        equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
          return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
          return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
        }
        toJSON() {
          return this.toArray();
        }
        _onChange(t) {
          return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {
        }
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._w;
        }
      }, C = class hf {
        constructor(t = 0, e = 0, n = 0) {
          hf.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
        }
        set(t, e, n) {
          return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
        }
        setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
          return this.x = t, this;
        }
        setY(t) {
          return this.y = t, this;
        }
        setZ(t) {
          return this.z = t, this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t) {
          return this.x += t.x, this.y += t.y, this.z += t.z, this;
        }
        addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t) {
          return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
        }
        subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t) {
          return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
        }
        multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
          return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
          return this.applyQuaternion(ou.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(ou.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
          const e = this.x, n = this.y, i = this.z, s = t.elements;
          return this.x = s[0] * e + s[3] * n + s[6] * i, this.y = s[1] * e + s[4] * n + s[7] * i, this.z = s[2] * e + s[5] * n + s[8] * i, this;
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
          const e = this.x, n = this.y, i = this.z, s = t.elements, a = 1 / (s[3] * e + s[7] * n + s[11] * i + s[15]);
          return this.x = (s[0] * e + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * e + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * e + s[6] * n + s[10] * i + s[14]) * a, this;
        }
        applyQuaternion(t) {
          const e = this.x, n = this.y, i = this.z, s = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * i - o * n), h = 2 * (o * e - s * i), u = 2 * (s * n - a * e);
          return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - s * u, this.z = i + c * u + s * h - a * l, this;
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
          const e = this.x, n = this.y, i = this.z, s = t.elements;
          return this.x = s[0] * e + s[4] * n + s[8] * i, this.y = s[1] * e + s[5] * n + s[9] * i, this.z = s[2] * e + s[6] * n + s[10] * i, this.normalize();
        }
        divide(t) {
          return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
        }
        clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
        }
        floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
        }
        ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
        }
        round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
        }
        roundToZero() {
          return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
        }
        negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
        }
        cross(t) {
          return this.crossVectors(this, t);
        }
        crossVectors(t, e) {
          const n = t.x, i = t.y, s = t.z, a = e.x, o = e.y, c = e.z;
          return this.x = i * c - s * o, this.y = s * a - n * c, this.z = n * o - i * a, this;
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (e === 0) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
          return ic.copy(this).projectOnVector(t), this.sub(ic);
        }
        reflect(t) {
          return this.sub(ic.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (e === 0) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(Xe(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
          return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
          return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
          return this.x = e, this.y = n, this.z = i, this;
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, e * 4);
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, e * 3);
        }
        setFromEuler(t) {
          return this.x = t._x, this.y = t._y, this.z = t._z, this;
        }
        setFromColor(t) {
          return this.x = t.r, this.y = t.g, this.z = t.b, this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e) {
          return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
          const t = (Math.random() - 0.5) * 2, e = Math.random() * Math.PI * 2, n = Math.sqrt(1 - t ** 2);
          return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z;
        }
      };
      const ic = new C(), ou = new vn();
      class Rn {
        constructor(t = new C(1 / 0, 1 / 0, 1 / 0), e = new C(-1 / 0, -1 / 0, -1 / 0)) {
          this.isBox3 = true, this.min = t, this.max = e;
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Pn.fromArray(t, e));
          return this;
        }
        setFromBufferAttribute(t) {
          this.makeEmpty();
          for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Pn.fromBufferAttribute(t, e));
          return this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = Pn.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = false) {
          return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
        }
        isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
        }
        getCenter(t) {
          return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = false) {
          t.updateWorldMatrix(false, false);
          const n = t.geometry;
          if (n !== void 0) {
            const s = n.getAttribute("position");
            if (e === true && s !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Pn) : Pn.fromBufferAttribute(s, a), Pn.applyMatrix4(t.matrixWorld), this.expandByPoint(Pn);
            else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), oa.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), oa.copy(n.boundingBox)), oa.applyMatrix4(t.matrixWorld), this.union(oa);
          }
          const i = t.children;
          for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], e);
          return this;
        }
        containsPoint(t) {
          return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
        }
        containsBox(t) {
          return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
        }
        getParameter(t, e) {
          return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
        }
        intersectsBox(t) {
          return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
        }
        intersectsSphere(t) {
          return this.clampPoint(t.center, Pn), Pn.distanceToSquared(t.center) <= t.radius * t.radius;
        }
        intersectsPlane(t) {
          let e, n;
          return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return false;
          this.getCenter(Ms), ca.subVectors(this.max, Ms), Mr.subVectors(t.a, Ms), Er.subVectors(t.b, Ms), Tr.subVectors(t.c, Ms), Ei.subVectors(Er, Mr), Ti.subVectors(Tr, Er), $i.subVectors(Mr, Tr);
          let e = [
            0,
            -Ei.z,
            Ei.y,
            0,
            -Ti.z,
            Ti.y,
            0,
            -$i.z,
            $i.y,
            Ei.z,
            0,
            -Ei.x,
            Ti.z,
            0,
            -Ti.x,
            $i.z,
            0,
            -$i.x,
            -Ei.y,
            Ei.x,
            0,
            -Ti.y,
            Ti.x,
            0,
            -$i.y,
            $i.x,
            0
          ];
          return !rc(e, Mr, Er, Tr, ca) || (e = [
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
          ], !rc(e, Mr, Er, Tr, ca)) ? false : (la.crossVectors(Ei, Ti), e = [
            la.x,
            la.y,
            la.z
          ], rc(e, Mr, Er, Tr, ca));
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return this.clampPoint(t, Pn).distanceTo(t);
        }
        getBoundingSphere(t) {
          return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Pn).length() * 0.5), t;
        }
        intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
          return this.isEmpty() ? this : (ii[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), ii[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), ii[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), ii[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), ii[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), ii[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), ii[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), ii[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(ii), this);
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      const ii = [
        new C(),
        new C(),
        new C(),
        new C(),
        new C(),
        new C(),
        new C(),
        new C()
      ], Pn = new C(), oa = new Rn(), Mr = new C(), Er = new C(), Tr = new C(), Ei = new C(), Ti = new C(), $i = new C(), Ms = new C(), ca = new C(), la = new C(), Zi = new C();
      function rc(r, t, e, n, i) {
        for (let s = 0, a = r.length - 3; s <= a; s += 3) {
          Zi.fromArray(r, s);
          const o = i.x * Math.abs(Zi.x) + i.y * Math.abs(Zi.y) + i.z * Math.abs(Zi.z), c = t.dot(Zi), l = e.dot(Zi), h = n.dot(Zi);
          if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return false;
        }
        return true;
      }
      const e_ = new Rn(), Es = new C(), sc = new C();
      class Cn {
        constructor(t = new C(), e = -1) {
          this.isSphere = true, this.center = t, this.radius = e;
        }
        set(t, e) {
          return this.center.copy(t), this.radius = e, this;
        }
        setFromPoints(t, e) {
          const n = this.center;
          e !== void 0 ? n.copy(e) : e_.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let s = 0, a = t.length; s < a; s++) i = Math.max(i, n.distanceToSquared(t[s]));
          return this.radius = Math.sqrt(i), this;
        }
        copy(t) {
          return this.center.copy(t.center), this.radius = t.radius, this;
        }
        isEmpty() {
          return this.radius < 0;
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), this.radius = -1, this;
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
          return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
        }
        getBoundingBox(t) {
          return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
        }
        applyMatrix4(t) {
          return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
        }
        translate(t) {
          return this.center.add(t), this;
        }
        expandByPoint(t) {
          if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
          Es.subVectors(t, this.center);
          const e = Es.lengthSq();
          if (e > this.radius * this.radius) {
            const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
            this.center.addScaledVector(Es, i / n), this.radius += i;
          }
          return this;
        }
        union(t) {
          return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (sc.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Es.copy(t.center).add(sc)), this.expandByPoint(Es.copy(t.center).sub(sc))), this);
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const ri = new C(), ac = new C(), ha = new C(), Ai = new C(), oc = new C(), ua = new C(), cc = new C();
      let Eo = class {
        constructor(t = new C(), e = new C(0, 0, -1)) {
          this.origin = t, this.direction = e;
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
          return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
        }
        at(t, e) {
          return e.copy(this.origin).addScaledVector(this.direction, t);
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
          return this.origin.copy(this.at(t, ri)), this;
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
          const e = ri.subVectors(t, this.origin).dot(this.direction);
          return e < 0 ? this.origin.distanceToSquared(t) : (ri.copy(this.origin).addScaledVector(this.direction, e), ri.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
          ac.copy(t).add(e).multiplyScalar(0.5), ha.copy(e).sub(t).normalize(), Ai.copy(this.origin).sub(ac);
          const s = t.distanceTo(e) * 0.5, a = -this.direction.dot(ha), o = Ai.dot(this.direction), c = -Ai.dot(ha), l = Ai.lengthSq(), h = Math.abs(1 - a * a);
          let u, d, p, _;
          if (h > 0) if (u = a * c - o, d = a * o - c, _ = s * h, u >= 0) if (d >= -_) if (d <= _) {
            const w = 1 / h;
            u *= w, d *= w, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else d = s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
          else d = -s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
          else d <= -_ ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l) : d <= _ ? (u = 0, d = Math.min(Math.max(-s, -c), s), p = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), p = -u * u + d * (d + 2 * c) + l);
          else d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * c) + l;
          return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ac).addScaledVector(ha, d), p;
        }
        intersectSphere(t, e) {
          ri.subVectors(t.center, this.origin);
          const n = ri.dot(this.direction), i = ri.dot(ri) - n * n, s = t.radius * t.radius;
          if (i > s) return null;
          const a = Math.sqrt(s - i), o = n - a, c = n + a;
          return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return n === null ? null : this.at(n, e);
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return e === 0 || t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
          let n, i, s, a, o, c;
          const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
          return l >= 0 ? (n = (t.min.x - d.x) * l, i = (t.max.x - d.x) * l) : (n = (t.max.x - d.x) * l, i = (t.min.x - d.x) * l), h >= 0 ? (s = (t.min.y - d.y) * h, a = (t.max.y - d.y) * h) : (s = (t.max.y - d.y) * h, a = (t.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (t.min.z - d.z) * u, c = (t.max.z - d.z) * u) : (o = (t.max.z - d.z) * u, c = (t.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, e);
        }
        intersectsBox(t) {
          return this.intersectBox(t, ri) !== null;
        }
        intersectTriangle(t, e, n, i, s) {
          oc.subVectors(e, t), ua.subVectors(n, t), cc.crossVectors(oc, ua);
          let a = this.direction.dot(cc), o;
          if (a > 0) {
            if (i) return null;
            o = 1;
          } else if (a < 0) o = -1, a = -a;
          else return null;
          Ai.subVectors(this.origin, t);
          const c = o * this.direction.dot(ua.crossVectors(Ai, ua));
          if (c < 0) return null;
          const l = o * this.direction.dot(oc.cross(Ai));
          if (l < 0 || c + l > a) return null;
          const h = -o * Ai.dot(cc);
          return h < 0 ? null : this.at(h / a, s);
        }
        applyMatrix4(t) {
          return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
        }
        equals(t) {
          return t.origin.equals(this.origin) && t.direction.equals(this.direction);
        }
        clone() {
          return new this.constructor().copy(this);
        }
      };
      class Bt {
        constructor(t, e, n, i, s, a, o, c, l, h, u, d, p, _, w, m) {
          Bt.prototype.isMatrix4 = true, this.elements = [
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          ], t !== void 0 && this.set(t, e, n, i, s, a, o, c, l, h, u, d, p, _, w, m);
        }
        set(t, e, n, i, s, a, o, c, l, h, u, d, p, _, w, m) {
          const f = this.elements;
          return f[0] = t, f[4] = e, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = c, f[2] = l, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = _, f[11] = w, f[15] = m, this;
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
          return new Bt().fromArray(this.elements);
        }
        copy(t) {
          const e = this.elements, n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
        }
        copyPosition(t) {
          const e = this.elements, n = t.elements;
          return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, n) {
          return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, n) {
          return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
          const e = this.elements, n = t.elements, i = 1 / Ar.setFromMatrixColumn(t, 0).length(), s = 1 / Ar.setFromMatrixColumn(t, 1).length(), a = 1 / Ar.setFromMatrixColumn(t, 2).length();
          return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * s, e[5] = n[5] * s, e[6] = n[6] * s, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
          const e = this.elements, n = t.x, i = t.y, s = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
          if (t.order === "XYZ") {
            const d = a * h, p = a * u, _ = o * h, w = o * u;
            e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = p + _ * l, e[5] = d - w * l, e[9] = -o * c, e[2] = w - d * l, e[6] = _ + p * l, e[10] = a * c;
          } else if (t.order === "YXZ") {
            const d = c * h, p = c * u, _ = l * h, w = l * u;
            e[0] = d + w * o, e[4] = _ * o - p, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = p * o - _, e[6] = w + d * o, e[10] = a * c;
          } else if (t.order === "ZXY") {
            const d = c * h, p = c * u, _ = l * h, w = l * u;
            e[0] = d - w * o, e[4] = -a * u, e[8] = _ + p * o, e[1] = p + _ * o, e[5] = a * h, e[9] = w - d * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
          } else if (t.order === "ZYX") {
            const d = a * h, p = a * u, _ = o * h, w = o * u;
            e[0] = c * h, e[4] = _ * l - p, e[8] = d * l + w, e[1] = c * u, e[5] = w * l + d, e[9] = p * l - _, e[2] = -l, e[6] = o * c, e[10] = a * c;
          } else if (t.order === "YZX") {
            const d = a * c, p = a * l, _ = o * c, w = o * l;
            e[0] = c * h, e[4] = w - d * u, e[8] = _ * u + p, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = p * u + _, e[10] = d - w * u;
          } else if (t.order === "XZY") {
            const d = a * c, p = a * l, _ = o * c, w = o * l;
            e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = d * u + w, e[5] = a * h, e[9] = p * u - _, e[2] = _ * u - p, e[6] = o * h, e[10] = w * u + d;
          }
          return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
          return this.compose(n_, t, i_);
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return dn.subVectors(t, e), dn.lengthSq() === 0 && (dn.z = 1), dn.normalize(), Ri.crossVectors(n, dn), Ri.lengthSq() === 0 && (Math.abs(n.z) === 1 ? dn.x += 1e-4 : dn.z += 1e-4, dn.normalize(), Ri.crossVectors(n, dn)), Ri.normalize(), da.crossVectors(dn, Ri), i[0] = Ri.x, i[4] = da.x, i[8] = dn.x, i[1] = Ri.y, i[5] = da.y, i[9] = dn.y, i[2] = Ri.z, i[6] = da.z, i[10] = dn.z, this;
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements, i = e.elements, s = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], p = n[13], _ = n[2], w = n[6], m = n[10], f = n[14], b = n[3], v = n[7], R = n[11], I = n[15], y = i[0], A = i[4], B = i[8], S = i[12], T = i[1], z = i[5], q = i[9], it = i[13], D = i[2], O = i[6], j = i[10], $ = i[14], K = i[3], Y = i[7], J = i[11], Q = i[15];
          return s[0] = a * y + o * T + c * D + l * K, s[4] = a * A + o * z + c * O + l * Y, s[8] = a * B + o * q + c * j + l * J, s[12] = a * S + o * it + c * $ + l * Q, s[1] = h * y + u * T + d * D + p * K, s[5] = h * A + u * z + d * O + p * Y, s[9] = h * B + u * q + d * j + p * J, s[13] = h * S + u * it + d * $ + p * Q, s[2] = _ * y + w * T + m * D + f * K, s[6] = _ * A + w * z + m * O + f * Y, s[10] = _ * B + w * q + m * j + f * J, s[14] = _ * S + w * it + m * $ + f * Q, s[3] = b * y + v * T + R * D + I * K, s[7] = b * A + v * z + R * O + I * Y, s[11] = b * B + v * q + R * j + I * J, s[15] = b * S + v * it + R * $ + I * Q, this;
        }
        multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
          const t = this.elements, e = t[0], n = t[4], i = t[8], s = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], d = t[10], p = t[14], _ = t[3], w = t[7], m = t[11], f = t[15];
          return _ * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * p - n * c * p) + w * (+e * c * p - e * l * d + s * a * d - i * a * p + i * l * h - s * c * h) + m * (+e * l * u - e * o * p - s * a * u + n * a * p + s * o * h - n * l * h) + f * (-i * o * h - e * c * u + e * o * d + i * a * u - n * a * d + n * c * h);
        }
        transpose() {
          const t = this.elements;
          let e;
          return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
        }
        invert() {
          const t = this.elements, e = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], d = t[10], p = t[11], _ = t[12], w = t[13], m = t[14], f = t[15], b = u * m * l - w * d * l + w * c * p - o * m * p - u * c * f + o * d * f, v = _ * d * l - h * m * l - _ * c * p + a * m * p + h * c * f - a * d * f, R = h * w * l - _ * u * l + _ * o * p - a * w * p - h * o * f + a * u * f, I = _ * u * c - h * w * c - _ * o * d + a * w * d + h * o * m - a * u * m, y = e * b + n * v + i * R + s * I;
          if (y === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const A = 1 / y;
          return t[0] = b * A, t[1] = (w * d * s - u * m * s - w * i * p + n * m * p + u * i * f - n * d * f) * A, t[2] = (o * m * s - w * c * s + w * i * l - n * m * l - o * i * f + n * c * f) * A, t[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * p - n * c * p) * A, t[4] = v * A, t[5] = (h * m * s - _ * d * s + _ * i * p - e * m * p - h * i * f + e * d * f) * A, t[6] = (_ * c * s - a * m * s - _ * i * l + e * m * l + a * i * f - e * c * f) * A, t[7] = (a * d * s - h * c * s + h * i * l - e * d * l - a * i * p + e * c * p) * A, t[8] = R * A, t[9] = (_ * u * s - h * w * s - _ * n * p + e * w * p + h * n * f - e * u * f) * A, t[10] = (a * w * s - _ * o * s + _ * n * l - e * w * l - a * n * f + e * o * f) * A, t[11] = (h * o * s - a * u * s - h * n * l + e * u * l + a * n * p - e * o * p) * A, t[12] = I * A, t[13] = (h * w * i - _ * u * i + _ * n * d - e * w * d - h * n * m + e * u * m) * A, t[14] = (_ * o * i - a * w * i - _ * n * c + e * w * c + a * n * m - e * o * m) * A, t[15] = (a * u * i - h * o * i + h * n * c - e * u * c - a * n * d + e * o * d) * A, this;
        }
        scale(t) {
          const e = this.elements, n = t.x, i = t.y, s = t.z;
          return e[0] *= n, e[4] *= i, e[8] *= s, e[1] *= n, e[5] *= i, e[9] *= s, e[2] *= n, e[6] *= i, e[10] *= s, e[3] *= n, e[7] *= i, e[11] *= s, this;
        }
        getMaxScaleOnAxis() {
          const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
          return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
          const e = Math.cos(t), n = Math.sin(t);
          return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
          const e = Math.cos(t), n = Math.sin(t);
          return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
          const e = Math.cos(t), n = Math.sin(t);
          return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e), i = Math.sin(e), s = 1 - n, a = t.x, o = t.y, c = t.z, l = s * a, h = s * o;
          return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, h * o + n, h * c - i * a, 0, l * c - i * o, h * c + i * a, s * c * c + n, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, s, a) {
          return this.set(1, n, s, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
          const i = this.elements, s = e._x, a = e._y, o = e._z, c = e._w, l = s + s, h = a + a, u = o + o, d = s * l, p = s * h, _ = s * u, w = a * h, m = a * u, f = o * u, b = c * l, v = c * h, R = c * u, I = n.x, y = n.y, A = n.z;
          return i[0] = (1 - (w + f)) * I, i[1] = (p + R) * I, i[2] = (_ - v) * I, i[3] = 0, i[4] = (p - R) * y, i[5] = (1 - (d + f)) * y, i[6] = (m + b) * y, i[7] = 0, i[8] = (_ + v) * A, i[9] = (m - b) * A, i[10] = (1 - (d + w)) * A, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
        }
        decompose(t, e, n) {
          const i = this.elements;
          let s = Ar.set(i[0], i[1], i[2]).length();
          const a = Ar.set(i[4], i[5], i[6]).length(), o = Ar.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (s = -s), t.x = i[12], t.y = i[13], t.z = i[14], Ln.copy(this);
          const l = 1 / s, h = 1 / a, u = 1 / o;
          return Ln.elements[0] *= l, Ln.elements[1] *= l, Ln.elements[2] *= l, Ln.elements[4] *= h, Ln.elements[5] *= h, Ln.elements[6] *= h, Ln.elements[8] *= u, Ln.elements[9] *= u, Ln.elements[10] *= u, e.setFromRotationMatrix(Ln), n.x = s, n.y = a, n.z = o, this;
        }
        makePerspective(t, e, n, i, s, a, o = gi) {
          const c = this.elements, l = 2 * s / (e - t), h = 2 * s / (n - i), u = (e + t) / (e - t), d = (n + i) / (n - i);
          let p, _;
          if (o === gi) p = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
          else if (o === oo) p = -a / (a - s), _ = -a * s / (a - s);
          else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
          return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
        }
        makeOrthographic(t, e, n, i, s, a, o = gi) {
          const c = this.elements, l = 1 / (e - t), h = 1 / (n - i), u = 1 / (a - s), d = (e + t) * l, p = (n + i) * h;
          let _, w;
          if (o === gi) _ = (a + s) * u, w = -2 * u;
          else if (o === oo) _ = s * u, w = -1 * u;
          else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
          return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = w, c[14] = -_, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
        }
        equals(t) {
          const e = this.elements, n = t.elements;
          for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return false;
          return true;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
        }
      }
      const Ar = new C(), Ln = new Bt(), n_ = new C(0, 0, 0), i_ = new C(1, 1, 1), Ri = new C(), da = new C(), dn = new C(), cu = new Bt(), lu = new vn();
      class To {
        constructor(t = 0, e = 0, n = 0, i = To.DEFAULT_ORDER) {
          this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = i;
        }
        get x() {
          return this._x;
        }
        set x(t) {
          this._x = t, this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          this._y = t, this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          this._z = t, this._onChangeCallback();
        }
        get order() {
          return this._order;
        }
        set order(t) {
          this._order = t, this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
          return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
          return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, n = true) {
          const i = t.elements, s = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
          switch (e) {
            case "XYZ":
              this._y = Math.asin(Xe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l), this._z = 0);
              break;
            case "YXZ":
              this._x = Math.asin(-Xe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
              break;
            case "ZXY":
              this._x = Math.asin(Xe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
              break;
            case "ZYX":
              this._y = Math.asin(-Xe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
              break;
            case "YZX":
              this._z = Math.asin(Xe(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, p));
              break;
            case "XZY":
              this._z = Math.asin(-Xe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
              break;
            default:
              console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
          }
          return this._order = e, n === true && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
          return cu.makeRotationFromQuaternion(t), this.setFromRotationMatrix(cu, e, n);
        }
        setFromVector3(t, e = this._order) {
          return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
          return lu.setFromEuler(this), this.setFromQuaternion(lu, t);
        }
        equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
          return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        _onChange(t) {
          return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {
        }
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._order;
        }
      }
      To.DEFAULT_ORDER = "XYZ";
      class uf {
        constructor() {
          this.mask = 1;
        }
        set(t) {
          this.mask = (1 << t | 0) >>> 0;
        }
        enable(t) {
          this.mask |= 1 << t | 0;
        }
        enableAll() {
          this.mask = -1;
        }
        toggle(t) {
          this.mask ^= 1 << t | 0;
        }
        disable(t) {
          this.mask &= ~(1 << t | 0);
        }
        disableAll() {
          this.mask = 0;
        }
        test(t) {
          return (this.mask & t.mask) !== 0;
        }
        isEnabled(t) {
          return (this.mask & (1 << t | 0)) !== 0;
        }
      }
      let r_ = 0;
      const hu = new C(), Rr = new vn(), si = new Bt(), fa = new C(), Ts = new C(), s_ = new C(), a_ = new vn(), uu = new C(1, 0, 0), du = new C(0, 1, 0), fu = new C(0, 0, 1), o_ = {
        type: "added"
      }, c_ = {
        type: "removed"
      };
      class be extends ps {
        constructor() {
          super(), this.isObject3D = true, Object.defineProperty(this, "id", {
            value: r_++
          }), this.uuid = Hn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = be.DEFAULT_UP.clone();
          const t = new C(), e = new To(), n = new vn(), i = new C(1, 1, 1);
          function s() {
            n.setFromEuler(e, false);
          }
          function a() {
            e.setFromQuaternion(n, void 0, false);
          }
          e._onChange(s), n._onChange(a), Object.defineProperties(this, {
            position: {
              configurable: true,
              enumerable: true,
              value: t
            },
            rotation: {
              configurable: true,
              enumerable: true,
              value: e
            },
            quaternion: {
              configurable: true,
              enumerable: true,
              value: n
            },
            scale: {
              configurable: true,
              enumerable: true,
              value: i
            },
            modelViewMatrix: {
              value: new Bt()
            },
            normalMatrix: {
              value: new Yt()
            }
          }), this.matrix = new Bt(), this.matrixWorld = new Bt(), this.matrixAutoUpdate = be.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new uf(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
        }
        onBeforeShadow() {
        }
        onAfterShadow() {
        }
        onBeforeRender() {
        }
        onAfterRender() {
        }
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, true);
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
          return Rr.setFromAxisAngle(t, e), this.quaternion.multiply(Rr), this;
        }
        rotateOnWorldAxis(t, e) {
          return Rr.setFromAxisAngle(t, e), this.quaternion.premultiply(Rr), this;
        }
        rotateX(t) {
          return this.rotateOnAxis(uu, t);
        }
        rotateY(t) {
          return this.rotateOnAxis(du, t);
        }
        rotateZ(t) {
          return this.rotateOnAxis(fu, t);
        }
        translateOnAxis(t, e) {
          return hu.copy(t).applyQuaternion(this.quaternion), this.position.add(hu.multiplyScalar(e)), this;
        }
        translateX(t) {
          return this.translateOnAxis(uu, t);
        }
        translateY(t) {
          return this.translateOnAxis(du, t);
        }
        translateZ(t) {
          return this.translateOnAxis(fu, t);
        }
        localToWorld(t) {
          return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
          return this.updateWorldMatrix(true, false), t.applyMatrix4(si.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, n) {
          t.isVector3 ? fa.copy(t) : fa.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(true, false), Ts.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? si.lookAt(Ts, fa, this.up) : si.lookAt(fa, Ts, this.up), this.quaternion.setFromRotationMatrix(si), i && (si.extractRotation(i.matrixWorld), Rr.setFromRotationMatrix(si), this.quaternion.premultiply(Rr.invert()));
        }
        add(t) {
          if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
            return this;
          }
          return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(o_)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
            return this;
          }
          const e = this.children.indexOf(t);
          return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(c_)), this;
        }
        removeFromParent() {
          const t = this.parent;
          return t !== null && t.remove(this), this;
        }
        clear() {
          return this.remove(...this.children);
        }
        attach(t) {
          return this.updateWorldMatrix(true, false), si.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), si.multiply(t.parent.matrixWorld)), t.applyMatrix4(si), this.add(t), t.updateWorldMatrix(false, true), this;
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const a = this.children[n].getObjectByProperty(t, e);
            if (a !== void 0) return a;
          }
        }
        getObjectsByProperty(t, e, n = []) {
          this[t] === e && n.push(this);
          const i = this.children;
          for (let s = 0, a = i.length; s < a; s++) i[s].getObjectsByProperty(t, e, n);
          return n;
        }
        getWorldPosition(t) {
          return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
          return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ts, t, s_), t;
        }
        getWorldScale(t) {
          return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ts, a_, t), t;
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(true, false);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {
        }
        traverse(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
          if (this.visible === false) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
          const e = this.parent;
          e !== null && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, t = true);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            (s.matrixWorldAutoUpdate === true || t === true) && s.updateMatrixWorld(t);
          }
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (t === true && n !== null && n.matrixWorldAutoUpdate === true && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === true) {
            const i = this.children;
            for (let s = 0, a = i.length; s < a; s++) {
              const o = i[s];
              o.matrixWorldAutoUpdate === true && o.updateWorldMatrix(false, true);
            }
          }
        }
        toJSON(t) {
          const e = t === void 0 || typeof t == "string", n = {};
          e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
          }, n.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
          });
          const i = {};
          i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
            boxInitialized: o.boxInitialized,
            boxMin: o.box.min.toArray(),
            boxMax: o.box.max.toArray(),
            sphereInitialized: o.sphereInitialized,
            sphereRadius: o.sphere.radius,
            sphereCenter: o.sphere.center.toArray()
          })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this.boundingSphere !== null && (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius
          }), this.boundingBox !== null && (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray()
          }));
          function s(o, c) {
            return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
          }
          if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(t.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
              const c = o.shapes;
              if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) {
                const u = c[l];
                s(t.shapes, u);
              }
              else s(t.shapes, c);
            }
          }
          if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
            const o = [];
            for (let c = 0, l = this.material.length; c < l; c++) o.push(s(t.materials, this.material[c]));
            i.material = o;
          } else i.material = s(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(t).object);
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
              const c = this.animations[o];
              i.animations.push(s(t.animations, c));
            }
          }
          if (e) {
            const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), p = a(t.animations), _ = a(t.nodes);
            o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
          }
          return n.object = i, n;
          function a(o) {
            const c = [];
            for (const l in o) {
              const h = o[l];
              delete h.metadata, c.push(h);
            }
            return c;
          }
        }
        clone(t) {
          return new this.constructor().copy(this, t);
        }
        copy(t, e = true) {
          if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
            const i = t.children[n];
            this.add(i.clone());
          }
          return this;
        }
      }
      be.DEFAULT_UP = new C(0, 1, 0);
      be.DEFAULT_MATRIX_AUTO_UPDATE = true;
      be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
      const In = new C(), ai = new C(), lc = new C(), oi = new C(), Cr = new C(), Pr = new C(), pu = new C(), hc = new C(), uc = new C(), dc = new C();
      let pa = false, Ns = class ar {
        constructor(t = new C(), e = new C(), n = new C()) {
          this.a = t, this.b = e, this.c = n;
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), In.subVectors(t, e), i.cross(In);
          const s = i.lengthSq();
          return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, s) {
          In.subVectors(i, e), ai.subVectors(n, e), lc.subVectors(t, e);
          const a = In.dot(In), o = In.dot(ai), c = In.dot(lc), l = ai.dot(ai), h = ai.dot(lc), u = a * l - o * o;
          if (u === 0) return s.set(0, 0, 0), null;
          const d = 1 / u, p = (l * c - o * h) * d, _ = (a * h - o * c) * d;
          return s.set(1 - p - _, _, p);
        }
        static containsPoint(t, e, n, i) {
          return this.getBarycoord(t, e, n, i, oi) === null ? false : oi.x >= 0 && oi.y >= 0 && oi.x + oi.y <= 1;
        }
        static getUV(t, e, n, i, s, a, o, c) {
          return pa === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), pa = true), this.getInterpolation(t, e, n, i, s, a, o, c);
        }
        static getInterpolation(t, e, n, i, s, a, o, c) {
          return this.getBarycoord(t, e, n, i, oi) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, oi.x), c.addScaledVector(a, oi.y), c.addScaledVector(o, oi.z), c);
        }
        static isFrontFacing(t, e, n, i) {
          return In.subVectors(n, e), ai.subVectors(t, e), In.cross(ai).dot(i) < 0;
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
          return In.subVectors(this.c, this.b), ai.subVectors(this.a, this.b), In.cross(ai).length() * 0.5;
        }
        getMidpoint(t) {
          return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
        }
        getNormal(t) {
          return ar.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
          return ar.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getUV(t, e, n, i, s) {
          return pa === false && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), pa = true), ar.getInterpolation(t, this.a, this.b, this.c, e, n, i, s);
        }
        getInterpolation(t, e, n, i, s) {
          return ar.getInterpolation(t, this.a, this.b, this.c, e, n, i, s);
        }
        containsPoint(t) {
          return ar.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
          return ar.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
          const n = this.a, i = this.b, s = this.c;
          let a, o;
          Cr.subVectors(i, n), Pr.subVectors(s, n), hc.subVectors(t, n);
          const c = Cr.dot(hc), l = Pr.dot(hc);
          if (c <= 0 && l <= 0) return e.copy(n);
          uc.subVectors(t, i);
          const h = Cr.dot(uc), u = Pr.dot(uc);
          if (h >= 0 && u <= h) return e.copy(i);
          const d = c * u - h * l;
          if (d <= 0 && c >= 0 && h <= 0) return a = c / (c - h), e.copy(n).addScaledVector(Cr, a);
          dc.subVectors(t, s);
          const p = Cr.dot(dc), _ = Pr.dot(dc);
          if (_ >= 0 && p <= _) return e.copy(s);
          const w = p * l - c * _;
          if (w <= 0 && l >= 0 && _ <= 0) return o = l / (l - _), e.copy(n).addScaledVector(Pr, o);
          const m = h * _ - p * u;
          if (m <= 0 && u - h >= 0 && p - _ >= 0) return pu.subVectors(s, i), o = (u - h) / (u - h + (p - _)), e.copy(i).addScaledVector(pu, o);
          const f = 1 / (m + w + d);
          return a = w * f, o = d * f, e.copy(n).addScaledVector(Cr, a).addScaledVector(Pr, o);
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
      };
      const df = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      }, Ci = {
        h: 0,
        s: 0,
        l: 0
      }, ma = {
        h: 0,
        s: 0,
        l: 0
      };
      function fc(r, t, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (t - r) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * 6 * (2 / 3 - e) : r;
      }
      class At {
        constructor(t, e, n) {
          return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
        }
        set(t, e, n) {
          if (e === void 0 && n === void 0) {
            const i = t;
            i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
          } else this.setRGB(t, e, n);
          return this;
        }
        setScalar(t) {
          return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t, e = Se) {
          return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, ie.toWorkingColorSpace(this, e), this;
        }
        setRGB(t, e, n, i = ie.workingColorSpace) {
          return this.r = t, this.g = e, this.b = n, ie.toWorkingColorSpace(this, i), this;
        }
        setHSL(t, e, n, i = ie.workingColorSpace) {
          if (t = Ll(t, 1), e = Xe(e, 0, 1), n = Xe(n, 0, 1), e === 0) this.r = this.g = this.b = n;
          else {
            const s = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - s;
            this.r = fc(a, s, t + 1 / 3), this.g = fc(a, s, t), this.b = fc(a, s, t - 1 / 3);
          }
          return ie.toWorkingColorSpace(this, i), this;
        }
        setStyle(t, e = Se) {
          function n(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
          }
          let i;
          if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
            let s;
            const a = i[1], o = i[2];
            switch (a) {
              case "rgb":
              case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
                break;
              case "hsl":
              case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
                break;
              default:
                console.warn("THREE.Color: Unknown color model " + t);
            }
          } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const s = i[1], a = s.length;
            if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
            if (a === 6) return this.setHex(parseInt(s, 16), e);
            console.warn("THREE.Color: Invalid hex color " + t);
          } else if (t && t.length > 0) return this.setColorName(t, e);
          return this;
        }
        setColorName(t, e = Se) {
          const n = df[t.toLowerCase()];
          return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
          return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
          return this.r = $r(t.r), this.g = $r(t.g), this.b = $r(t.b), this;
        }
        copyLinearToSRGB(t) {
          return this.r = ec(t.r), this.g = ec(t.g), this.b = ec(t.b), this;
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this;
        }
        getHex(t = Se) {
          return ie.fromWorkingColorSpace(Ke.copy(this), t), Math.round(Xe(Ke.r * 255, 0, 255)) * 65536 + Math.round(Xe(Ke.g * 255, 0, 255)) * 256 + Math.round(Xe(Ke.b * 255, 0, 255));
        }
        getHexString(t = Se) {
          return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = ie.workingColorSpace) {
          ie.fromWorkingColorSpace(Ke.copy(this), e);
          const n = Ke.r, i = Ke.g, s = Ke.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
          let c, l;
          const h = (o + a) / 2;
          if (o === a) c = 0, l = 0;
          else {
            const u = a - o;
            switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
              case n:
                c = (i - s) / u + (i < s ? 6 : 0);
                break;
              case i:
                c = (s - n) / u + 2;
                break;
              case s:
                c = (n - i) / u + 4;
                break;
            }
            c /= 6;
          }
          return t.h = c, t.s = l, t.l = h, t;
        }
        getRGB(t, e = ie.workingColorSpace) {
          return ie.fromWorkingColorSpace(Ke.copy(this), e), t.r = Ke.r, t.g = Ke.g, t.b = Ke.b, t;
        }
        getStyle(t = Se) {
          ie.fromWorkingColorSpace(Ke.copy(this), t);
          const e = Ke.r, n = Ke.g, i = Ke.b;
          return t !== Se ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
        }
        offsetHSL(t, e, n) {
          return this.getHSL(Ci), this.setHSL(Ci.h + t, Ci.s + e, Ci.l + n);
        }
        add(t) {
          return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
          return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
          return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
          return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
          return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
          return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
          return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, n) {
          return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
        }
        lerpHSL(t, e) {
          this.getHSL(Ci), t.getHSL(ma);
          const n = Bs(Ci.h, ma.h, e), i = Bs(Ci.s, ma.s, e), s = Bs(Ci.l, ma.l, e);
          return this.setHSL(n, i, s), this;
        }
        setFromVector3(t) {
          return this.r = t.x, this.g = t.y, this.b = t.z, this;
        }
        applyMatrix3(t) {
          const e = this.r, n = this.g, i = this.b, s = t.elements;
          return this.r = s[0] * e + s[3] * n + s[6] * i, this.g = s[1] * e + s[4] * n + s[7] * i, this.b = s[2] * e + s[5] * n + s[8] * i, this;
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
          return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
          return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
          return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
        }
        toJSON() {
          return this.getHex();
        }
        *[Symbol.iterator]() {
          yield this.r, yield this.g, yield this.b;
        }
      }
      const Ke = new At();
      At.NAMES = df;
      let l_ = 0;
      class Kn extends ps {
        constructor() {
          super(), this.isMaterial = true, Object.defineProperty(this, "id", {
            value: l_++
          }), this.uuid = Hn(), this.name = "", this.type = "Material", this.blending = Kr, this.side = xi, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Qc, this.blendDst = tl, this.blendEquation = lr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new At(0, 0, 0), this.blendAlpha = 0, this.depthFunc = no, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = eu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Sr, this.stencilZFail = Sr, this.stencilZPass = Sr, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
          return this._alphaTest;
        }
        set alphaTest(t) {
          this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
        }
        onBuild() {
        }
        onBeforeRender() {
        }
        onBeforeCompile() {
        }
        customProgramCacheKey() {
          return this.onBeforeCompile.toString();
        }
        setValues(t) {
          if (t !== void 0) for (const e in t) {
            const n = t[e];
            if (n === void 0) {
              console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
              continue;
            }
            const i = this[e];
            if (i === void 0) {
              console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
              continue;
            }
            i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
          }
        }
        toJSON(t) {
          const e = t === void 0 || typeof t == "string";
          e && (t = {
            textures: {},
            images: {}
          });
          const n = {
            metadata: {
              version: 4.6,
              type: "Material",
              generator: "Material.toJSON"
            }
          };
          n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Kr && (n.blending = this.blending), this.side !== xi && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Qc && (n.blendSrc = this.blendSrc), this.blendDst !== tl && (n.blendDst = this.blendDst), this.blendEquation !== lr && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== no && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== eu && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Sr && (n.stencilFail = this.stencilFail), this.stencilZFail !== Sr && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Sr && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
          function i(s) {
            const a = [];
            for (const o in s) {
              const c = s[o];
              delete c.metadata, a.push(c);
            }
            return a;
          }
          if (e) {
            const s = i(t.textures), a = i(t.images);
            s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
          }
          return n;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
          const e = t.clippingPlanes;
          let n = null;
          if (e !== null) {
            const i = e.length;
            n = new Array(i);
            for (let s = 0; s !== i; ++s) n[s] = e[s].clone();
          }
          return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          });
        }
        set needsUpdate(t) {
          t === true && this.version++;
        }
      }
      class Bn extends Kn {
        constructor(t) {
          super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new At(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Vd, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
        }
      }
      const Ce = new C(), _a = new Ot();
      class rn {
        constructor(t, e, n = false) {
          if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
          this.isBufferAttribute = true, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = sl, this._updateRange = {
            offset: 0,
            count: -1
          }, this.updateRanges = [], this.gpuType = _i, this.version = 0;
        }
        onUploadCallback() {
        }
        set needsUpdate(t) {
          t === true && this.version++;
        }
        get updateRange() {
          return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
        }
        setUsage(t) {
          return this.usage = t, this;
        }
        addUpdateRange(t, e) {
          this.updateRanges.push({
            start: t,
            count: e
          });
        }
        clearUpdateRanges() {
          this.updateRanges.length = 0;
        }
        copy(t) {
          return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
        }
        copyAt(t, e, n) {
          t *= this.itemSize, n *= e.itemSize;
          for (let i = 0, s = this.itemSize; i < s; i++) this.array[t + i] = e.array[n + i];
          return this;
        }
        copyArray(t) {
          return this.array.set(t), this;
        }
        applyMatrix3(t) {
          if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) _a.fromBufferAttribute(this, e), _a.applyMatrix3(t), this.setXY(e, _a.x, _a.y);
          else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) Ce.fromBufferAttribute(this, e), Ce.applyMatrix3(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
          return this;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++) Ce.fromBufferAttribute(this, e), Ce.applyMatrix4(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++) Ce.fromBufferAttribute(this, e), Ce.applyNormalMatrix(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++) Ce.fromBufferAttribute(this, e), Ce.transformDirection(t), this.setXYZ(e, Ce.x, Ce.y, Ce.z);
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        getComponent(t, e) {
          let n = this.array[t * this.itemSize + e];
          return this.normalized && (n = qn(n, this.array)), n;
        }
        setComponent(t, e, n) {
          return this.normalized && (n = le(n, this.array)), this.array[t * this.itemSize + e] = n, this;
        }
        getX(t) {
          let e = this.array[t * this.itemSize];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        setX(t, e) {
          return this.normalized && (e = le(e, this.array)), this.array[t * this.itemSize] = e, this;
        }
        getY(t) {
          let e = this.array[t * this.itemSize + 1];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        setY(t, e) {
          return this.normalized && (e = le(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
        }
        getZ(t) {
          let e = this.array[t * this.itemSize + 2];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        setZ(t, e) {
          return this.normalized && (e = le(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
        }
        getW(t) {
          let e = this.array[t * this.itemSize + 3];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        setW(t, e) {
          return this.normalized && (e = le(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
        }
        setXY(t, e, n) {
          return t *= this.itemSize, this.normalized && (e = le(e, this.array), n = le(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
          return t *= this.itemSize, this.normalized && (e = le(e, this.array), n = le(n, this.array), i = le(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, s) {
          return t *= this.itemSize, this.normalized && (e = le(e, this.array), n = le(n, this.array), i = le(i, this.array), s = le(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = s, this;
        }
        onUpload(t) {
          return this.onUploadCallback = t, this;
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
          };
          return this.name !== "" && (t.name = this.name), this.usage !== sl && (t.usage = this.usage), t;
        }
      }
      class ff extends rn {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }
      class pf extends rn {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n);
        }
      }
      class Ge extends rn {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n);
        }
      }
      let h_ = 0;
      const xn = new Bt(), pc = new be(), Lr = new C(), fn = new Rn(), As = new Rn(), Oe = new C();
      class sn extends ps {
        constructor() {
          super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", {
            value: h_++
          }), this.uuid = Hn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
            start: 0,
            count: 1 / 0
          }, this.userData = {};
        }
        getIndex() {
          return this.index;
        }
        setIndex(t) {
          return Array.isArray(t) ? this.index = new (af(t) ? pf : ff)(t, 1) : this.index = t, this;
        }
        getAttribute(t) {
          return this.attributes[t];
        }
        setAttribute(t, e) {
          return this.attributes[t] = e, this;
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this;
        }
        hasAttribute(t) {
          return this.attributes[t] !== void 0;
        }
        addGroup(t, e, n = 0) {
          this.groups.push({
            start: t,
            count: e,
            materialIndex: n
          });
        }
        clearGroups() {
          this.groups = [];
        }
        setDrawRange(t, e) {
          this.drawRange.start = t, this.drawRange.count = e;
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
          const n = this.attributes.normal;
          if (n !== void 0) {
            const s = new Yt().getNormalMatrix(t);
            n.applyNormalMatrix(s), n.needsUpdate = true;
          }
          const i = this.attributes.tangent;
          return i !== void 0 && (i.transformDirection(t), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        applyQuaternion(t) {
          return xn.makeRotationFromQuaternion(t), this.applyMatrix4(xn), this;
        }
        rotateX(t) {
          return xn.makeRotationX(t), this.applyMatrix4(xn), this;
        }
        rotateY(t) {
          return xn.makeRotationY(t), this.applyMatrix4(xn), this;
        }
        rotateZ(t) {
          return xn.makeRotationZ(t), this.applyMatrix4(xn), this;
        }
        translate(t, e, n) {
          return xn.makeTranslation(t, e, n), this.applyMatrix4(xn), this;
        }
        scale(t, e, n) {
          return xn.makeScale(t, e, n), this.applyMatrix4(xn), this;
        }
        lookAt(t) {
          return pc.lookAt(t), pc.updateMatrix(), this.applyMatrix4(pc.matrix), this;
        }
        center() {
          return this.computeBoundingBox(), this.boundingBox.getCenter(Lr).negate(), this.translate(Lr.x, Lr.y, Lr.z), this;
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            e.push(s.x, s.y, s.z || 0);
          }
          return this.setAttribute("position", new Ge(e, 3)), this;
        }
        computeBoundingBox() {
          this.boundingBox === null && (this.boundingBox = new Rn());
          const t = this.attributes.position, e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
            return;
          }
          if (t !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, i = e.length; n < i; n++) {
              const s = e[n];
              fn.setFromBufferAttribute(s), this.morphTargetsRelative ? (Oe.addVectors(this.boundingBox.min, fn.min), this.boundingBox.expandByPoint(Oe), Oe.addVectors(this.boundingBox.max, fn.max), this.boundingBox.expandByPoint(Oe)) : (this.boundingBox.expandByPoint(fn.min), this.boundingBox.expandByPoint(fn.max));
            }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
        }
        computeBoundingSphere() {
          this.boundingSphere === null && (this.boundingSphere = new Cn());
          const t = this.attributes.position, e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new C(), 1 / 0);
            return;
          }
          if (t) {
            const n = this.boundingSphere.center;
            if (fn.setFromBufferAttribute(t), e) for (let s = 0, a = e.length; s < a; s++) {
              const o = e[s];
              As.setFromBufferAttribute(o), this.morphTargetsRelative ? (Oe.addVectors(fn.min, As.min), fn.expandByPoint(Oe), Oe.addVectors(fn.max, As.max), fn.expandByPoint(Oe)) : (fn.expandByPoint(As.min), fn.expandByPoint(As.max));
            }
            fn.getCenter(n);
            let i = 0;
            for (let s = 0, a = t.count; s < a; s++) Oe.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(Oe));
            if (e) for (let s = 0, a = e.length; s < a; s++) {
              const o = e[s], c = this.morphTargetsRelative;
              for (let l = 0, h = o.count; l < h; l++) Oe.fromBufferAttribute(o, l), c && (Lr.fromBufferAttribute(t, l), Oe.add(Lr)), i = Math.max(i, n.distanceToSquared(Oe));
            }
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
          }
        }
        computeTangents() {
          const t = this.index, e = this.attributes;
          if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return;
          }
          const n = t.array, i = e.position.array, s = e.normal.array, a = e.uv.array, o = i.length / 3;
          this.hasAttribute("tangent") === false && this.setAttribute("tangent", new rn(new Float32Array(4 * o), 4));
          const c = this.getAttribute("tangent").array, l = [], h = [];
          for (let T = 0; T < o; T++) l[T] = new C(), h[T] = new C();
          const u = new C(), d = new C(), p = new C(), _ = new Ot(), w = new Ot(), m = new Ot(), f = new C(), b = new C();
          function v(T, z, q) {
            u.fromArray(i, T * 3), d.fromArray(i, z * 3), p.fromArray(i, q * 3), _.fromArray(a, T * 2), w.fromArray(a, z * 2), m.fromArray(a, q * 2), d.sub(u), p.sub(u), w.sub(_), m.sub(_);
            const it = 1 / (w.x * m.y - m.x * w.y);
            isFinite(it) && (f.copy(d).multiplyScalar(m.y).addScaledVector(p, -w.y).multiplyScalar(it), b.copy(p).multiplyScalar(w.x).addScaledVector(d, -m.x).multiplyScalar(it), l[T].add(f), l[z].add(f), l[q].add(f), h[T].add(b), h[z].add(b), h[q].add(b));
          }
          let R = this.groups;
          R.length === 0 && (R = [
            {
              start: 0,
              count: n.length
            }
          ]);
          for (let T = 0, z = R.length; T < z; ++T) {
            const q = R[T], it = q.start, D = q.count;
            for (let O = it, j = it + D; O < j; O += 3) v(n[O + 0], n[O + 1], n[O + 2]);
          }
          const I = new C(), y = new C(), A = new C(), B = new C();
          function S(T) {
            A.fromArray(s, T * 3), B.copy(A);
            const z = l[T];
            I.copy(z), I.sub(A.multiplyScalar(A.dot(z))).normalize(), y.crossVectors(B, z);
            const it = y.dot(h[T]) < 0 ? -1 : 1;
            c[T * 4] = I.x, c[T * 4 + 1] = I.y, c[T * 4 + 2] = I.z, c[T * 4 + 3] = it;
          }
          for (let T = 0, z = R.length; T < z; ++T) {
            const q = R[T], it = q.start, D = q.count;
            for (let O = it, j = it + D; O < j; O += 3) S(n[O + 0]), S(n[O + 1]), S(n[O + 2]);
          }
        }
        computeVertexNormals() {
          const t = this.index, e = this.getAttribute("position");
          if (e !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0) n = new rn(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
            else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
            const i = new C(), s = new C(), a = new C(), o = new C(), c = new C(), l = new C(), h = new C(), u = new C();
            if (t) for (let d = 0, p = t.count; d < p; d += 3) {
              const _ = t.getX(d + 0), w = t.getX(d + 1), m = t.getX(d + 2);
              i.fromBufferAttribute(e, _), s.fromBufferAttribute(e, w), a.fromBufferAttribute(e, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, _), c.fromBufferAttribute(n, w), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(w, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
            }
            else for (let d = 0, p = e.count; d < p; d += 3) i.fromBufferAttribute(e, d + 0), s.fromBufferAttribute(e, d + 1), a.fromBufferAttribute(e, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
            this.normalizeNormals(), n.needsUpdate = true;
          }
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++) Oe.fromBufferAttribute(t, e), Oe.normalize(), t.setXYZ(e, Oe.x, Oe.y, Oe.z);
        }
        toNonIndexed() {
          function t(o, c) {
            const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
            let p = 0, _ = 0;
            for (let w = 0, m = c.length; w < m; w++) {
              o.isInterleavedBufferAttribute ? p = c[w] * o.data.stride + o.offset : p = c[w] * h;
              for (let f = 0; f < h; f++) d[_++] = l[p++];
            }
            return new rn(d, h, u);
          }
          if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
          const e = new sn(), n = this.index.array, i = this.attributes;
          for (const o in i) {
            const c = i[o], l = t(c, n);
            e.setAttribute(o, l);
          }
          const s = this.morphAttributes;
          for (const o in s) {
            const c = [], l = s[o];
            for (let h = 0, u = l.length; h < u; h++) {
              const d = l[h], p = t(d, n);
              c.push(p);
            }
            e.morphAttributes[o] = c;
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const a = this.groups;
          for (let o = 0, c = a.length; o < c; o++) {
            const l = a[o];
            e.addGroup(l.start, l.count, l.materialIndex);
          }
          return e;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.6,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON"
            }
          };
          if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
            const c = this.parameters;
            for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
            return t;
          }
          t.data = {
            attributes: {}
          };
          const e = this.index;
          e !== null && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
          });
          const n = this.attributes;
          for (const c in n) {
            const l = n[c];
            t.data.attributes[c] = l.toJSON(t.data);
          }
          const i = {};
          let s = false;
          for (const c in this.morphAttributes) {
            const l = this.morphAttributes[c], h = [];
            for (let u = 0, d = l.length; u < d; u++) {
              const p = l[u];
              h.push(p.toJSON(t.data));
            }
            h.length > 0 && (i[c] = h, s = true);
          }
          s && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
          const a = this.groups;
          a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
          const o = this.boundingSphere;
          return o !== null && (t.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
          }), t;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
          const e = {};
          this.name = t.name;
          const n = t.index;
          n !== null && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const l in i) {
            const h = i[l];
            this.setAttribute(l, h.clone(e));
          }
          const s = t.morphAttributes;
          for (const l in s) {
            const h = [], u = s[l];
            for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(e));
            this.morphAttributes[l] = h;
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const a = t.groups;
          for (let l = 0, h = a.length; l < h; l++) {
            const u = a[l];
            this.addGroup(u.start, u.count, u.materialIndex);
          }
          const o = t.boundingBox;
          o !== null && (this.boundingBox = o.clone());
          const c = t.boundingSphere;
          return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          });
        }
      }
      const mu = new Bt(), Qi = new Eo(), ga = new Cn(), _u = new C(), Ir = new C(), Dr = new C(), Ur = new C(), mc = new C(), wa = new C(), va = new Ot(), ya = new Ot(), xa = new Ot(), gu = new C(), wu = new C(), vu = new C(), Sa = new C(), ba = new C();
      class Re extends be {
        constructor(t = new sn(), e = new Bn()) {
          super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
          return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        updateMorphTargets() {
          const e = this.geometry.morphAttributes, n = Object.keys(e);
          if (n.length > 0) {
            const i = e[n[0]];
            if (i !== void 0) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let s = 0, a = i.length; s < a; s++) {
                const o = i[s].name || String(s);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
              }
            }
          }
        }
        getVertexPosition(t, e) {
          const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
          e.fromBufferAttribute(i, t);
          const o = this.morphTargetInfluences;
          if (s && o) {
            wa.set(0, 0, 0);
            for (let c = 0, l = s.length; c < l; c++) {
              const h = o[c], u = s[c];
              h !== 0 && (mc.fromBufferAttribute(u, t), a ? wa.addScaledVector(mc, h) : wa.addScaledVector(mc.sub(e), h));
            }
            e.add(wa);
          }
          return e;
        }
        raycast(t, e) {
          const n = this.geometry, i = this.material, s = this.matrixWorld;
          i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ga.copy(n.boundingSphere), ga.applyMatrix4(s), Qi.copy(t.ray).recast(t.near), !(ga.containsPoint(Qi.origin) === false && (Qi.intersectSphere(ga, _u) === null || Qi.origin.distanceToSquared(_u) > (t.far - t.near) ** 2)) && (mu.copy(s).invert(), Qi.copy(t.ray).applyMatrix4(mu), !(n.boundingBox !== null && Qi.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, Qi)));
        }
        _computeIntersections(t, e, n) {
          let i;
          const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, p = s.drawRange;
          if (o !== null) if (Array.isArray(a)) for (let _ = 0, w = d.length; _ < w; _++) {
            const m = d[_], f = a[m.materialIndex], b = Math.max(m.start, p.start), v = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
            for (let R = b, I = v; R < I; R += 3) {
              const y = o.getX(R), A = o.getX(R + 1), B = o.getX(R + 2);
              i = Ma(this, f, t, n, l, h, u, y, A, B), i && (i.faceIndex = Math.floor(R / 3), i.face.materialIndex = m.materialIndex, e.push(i));
            }
          }
          else {
            const _ = Math.max(0, p.start), w = Math.min(o.count, p.start + p.count);
            for (let m = _, f = w; m < f; m += 3) {
              const b = o.getX(m), v = o.getX(m + 1), R = o.getX(m + 2);
              i = Ma(this, a, t, n, l, h, u, b, v, R), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
            }
          }
          else if (c !== void 0) if (Array.isArray(a)) for (let _ = 0, w = d.length; _ < w; _++) {
            const m = d[_], f = a[m.materialIndex], b = Math.max(m.start, p.start), v = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
            for (let R = b, I = v; R < I; R += 3) {
              const y = R, A = R + 1, B = R + 2;
              i = Ma(this, f, t, n, l, h, u, y, A, B), i && (i.faceIndex = Math.floor(R / 3), i.face.materialIndex = m.materialIndex, e.push(i));
            }
          }
          else {
            const _ = Math.max(0, p.start), w = Math.min(c.count, p.start + p.count);
            for (let m = _, f = w; m < f; m += 3) {
              const b = m, v = m + 1, R = m + 2;
              i = Ma(this, a, t, n, l, h, u, b, v, R), i && (i.faceIndex = Math.floor(m / 3), e.push(i));
            }
          }
        }
      }
      function u_(r, t, e, n, i, s, a, o) {
        let c;
        if (t.side === hn ? c = n.intersectTriangle(a, s, i, true, o) : c = n.intersectTriangle(i, s, a, t.side === xi, o), c === null) return null;
        ba.copy(o), ba.applyMatrix4(r.matrixWorld);
        const l = e.ray.origin.distanceTo(ba);
        return l < e.near || l > e.far ? null : {
          distance: l,
          point: ba.clone(),
          object: r
        };
      }
      function Ma(r, t, e, n, i, s, a, o, c, l) {
        r.getVertexPosition(o, Ir), r.getVertexPosition(c, Dr), r.getVertexPosition(l, Ur);
        const h = u_(r, t, e, n, Ir, Dr, Ur, Sa);
        if (h) {
          i && (va.fromBufferAttribute(i, o), ya.fromBufferAttribute(i, c), xa.fromBufferAttribute(i, l), h.uv = Ns.getInterpolation(Sa, Ir, Dr, Ur, va, ya, xa, new Ot())), s && (va.fromBufferAttribute(s, o), ya.fromBufferAttribute(s, c), xa.fromBufferAttribute(s, l), h.uv1 = Ns.getInterpolation(Sa, Ir, Dr, Ur, va, ya, xa, new Ot()), h.uv2 = h.uv1), a && (gu.fromBufferAttribute(a, o), wu.fromBufferAttribute(a, c), vu.fromBufferAttribute(a, l), h.normal = Ns.getInterpolation(Sa, Ir, Dr, Ur, gu, wu, vu, new C()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
          const u = {
            a: o,
            b: c,
            c: l,
            normal: new C(),
            materialIndex: 0
          };
          Ns.getNormal(Ir, Dr, Ur, u.normal), h.face = u;
        }
        return h;
      }
      class ms extends sn {
        constructor(t = 1, e = 1, n = 1, i = 1, s = 1, a = 1) {
          super(), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: i,
            heightSegments: s,
            depthSegments: a
          };
          const o = this;
          i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
          const c = [], l = [], h = [], u = [];
          let d = 0, p = 0;
          _("z", "y", "x", -1, -1, n, e, t, a, s, 0), _("z", "y", "x", 1, -1, n, e, -t, a, s, 1), _("x", "z", "y", 1, 1, t, n, e, i, a, 2), _("x", "z", "y", 1, -1, t, n, -e, i, a, 3), _("x", "y", "z", 1, -1, t, e, n, i, s, 4), _("x", "y", "z", -1, -1, t, e, -n, i, s, 5), this.setIndex(c), this.setAttribute("position", new Ge(l, 3)), this.setAttribute("normal", new Ge(h, 3)), this.setAttribute("uv", new Ge(u, 2));
          function _(w, m, f, b, v, R, I, y, A, B, S) {
            const T = R / A, z = I / B, q = R / 2, it = I / 2, D = y / 2, O = A + 1, j = B + 1;
            let $ = 0, K = 0;
            const Y = new C();
            for (let J = 0; J < j; J++) {
              const Q = J * z - it;
              for (let lt = 0; lt < O; lt++) {
                const X = lt * T - q;
                Y[w] = X * b, Y[m] = Q * v, Y[f] = D, l.push(Y.x, Y.y, Y.z), Y[w] = 0, Y[m] = 0, Y[f] = y > 0 ? 1 : -1, h.push(Y.x, Y.y, Y.z), u.push(lt / A), u.push(1 - J / B), $ += 1;
              }
            }
            for (let J = 0; J < B; J++) for (let Q = 0; Q < A; Q++) {
              const lt = d + Q + O * J, X = d + Q + O * (J + 1), Z = d + (Q + 1) + O * (J + 1), ut = d + (Q + 1) + O * J;
              c.push(lt, X, ut), c.push(X, Z, ut), K += 6;
            }
            o.addGroup(p, K, S), p += K, d += $;
          }
        }
        copy(t) {
          return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
          return new ms(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
        }
      }
      function cs(r) {
        const t = {};
        for (const e in r) {
          t[e] = {};
          for (const n in r[e]) {
            const i = r[e][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
          }
        }
        return t;
      }
      function tn(r) {
        const t = {};
        for (let e = 0; e < r.length; e++) {
          const n = cs(r[e]);
          for (const i in n) t[i] = n[i];
        }
        return t;
      }
      function d_(r) {
        const t = [];
        for (let e = 0; e < r.length; e++) t.push(r[e].clone());
        return t;
      }
      function mf(r) {
        return r.getRenderTarget() === null ? r.outputColorSpace : ie.workingColorSpace;
      }
      const Ao = {
        clone: cs,
        merge: tn
      };
      var f_ = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, p_ = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
      class Jn extends Kn {
        constructor(t) {
          super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = f_, this.fragmentShader = p_, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = {
            derivatives: false,
            fragDepth: false,
            drawBuffers: false,
            shaderTextureLOD: false,
            clipCullDistance: false
          }, this.defaultAttributeValues = {
            color: [
              1,
              1,
              1
            ],
            uv: [
              0,
              0
            ],
            uv1: [
              0,
              0
            ]
          }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = cs(t.uniforms), this.uniformsGroups = d_(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          e.glslVersion = this.glslVersion, e.uniforms = {};
          for (const i in this.uniforms) {
            const a = this.uniforms[i].value;
            a && a.isTexture ? e.uniforms[i] = {
              type: "t",
              value: a.toJSON(t).uuid
            } : a && a.isColor ? e.uniforms[i] = {
              type: "c",
              value: a.getHex()
            } : a && a.isVector2 ? e.uniforms[i] = {
              type: "v2",
              value: a.toArray()
            } : a && a.isVector3 ? e.uniforms[i] = {
              type: "v3",
              value: a.toArray()
            } : a && a.isVector4 ? e.uniforms[i] = {
              type: "v4",
              value: a.toArray()
            } : a && a.isMatrix3 ? e.uniforms[i] = {
              type: "m3",
              value: a.toArray()
            } : a && a.isMatrix4 ? e.uniforms[i] = {
              type: "m4",
              value: a.toArray()
            } : e.uniforms[i] = {
              value: a
            };
          }
          Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
          const n = {};
          for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
          return Object.keys(n).length > 0 && (e.extensions = n), e;
        }
      }
      class _f extends be {
        constructor() {
          super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Bt(), this.projectionMatrix = new Bt(), this.projectionMatrixInverse = new Bt(), this.coordinateSystem = gi;
        }
        copy(t, e) {
          return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
        }
        getWorldDirection(t) {
          return super.getWorldDirection(t).negate();
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        updateWorldMatrix(t, e) {
          super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      class nn extends _f {
        constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
          super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
        }
        copy(t, e) {
          return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
        }
        setFocalLength(t) {
          const e = 0.5 * this.getFilmHeight() / t;
          this.fov = os * 2 * Math.atan(e), this.updateProjectionMatrix();
        }
        getFocalLength() {
          const t = Math.tan(Jr * 0.5 * this.fov);
          return 0.5 * this.getFilmHeight() / t;
        }
        getEffectiveFOV() {
          return os * 2 * Math.atan(Math.tan(Jr * 0.5 * this.fov) / this.zoom);
        }
        getFilmWidth() {
          return this.filmGauge * Math.min(this.aspect, 1);
        }
        getFilmHeight() {
          return this.filmGauge / Math.max(this.aspect, 1);
        }
        setViewOffset(t, e, n, i, s, a) {
          this.aspect = t / e, this.view === null && (this.view = {
            enabled: true,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
        }
        clearViewOffset() {
          this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = this.near;
          let e = t * Math.tan(Jr * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, s = -0.5 * i;
          const a = this.view;
          if (this.view !== null && this.view.enabled) {
            const c = a.fullWidth, l = a.fullHeight;
            s += a.offsetX * i / c, e -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
          }
          const o = this.filmOffset;
          o !== 0 && (s += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
        }
      }
      const Nr = -90, Fr = 1;
      class m_ extends be {
        constructor(t, e, n) {
          super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
          const i = new nn(Nr, Fr, t, e);
          i.layers = this.layers, this.add(i);
          const s = new nn(Nr, Fr, t, e);
          s.layers = this.layers, this.add(s);
          const a = new nn(Nr, Fr, t, e);
          a.layers = this.layers, this.add(a);
          const o = new nn(Nr, Fr, t, e);
          o.layers = this.layers, this.add(o);
          const c = new nn(Nr, Fr, t, e);
          c.layers = this.layers, this.add(c);
          const l = new nn(Nr, Fr, t, e);
          l.layers = this.layers, this.add(l);
        }
        updateCoordinateSystem() {
          const t = this.coordinateSystem, e = this.children.concat(), [n, i, s, a, o, c] = e;
          for (const l of e) this.remove(l);
          if (t === gi) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
          else if (t === oo) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
          else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
          for (const l of e) this.add(l), l.updateMatrixWorld();
        }
        update(t, e) {
          this.parent === null && this.updateMatrixWorld();
          const { renderTarget: n, activeMipmapLevel: i } = this;
          this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
          const [s, a, o, c, l, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), p = t.getActiveMipmapLevel(), _ = t.xr.enabled;
          t.xr.enabled = false;
          const w = n.texture.generateMipmaps;
          n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, i), t.render(e, s), t.setRenderTarget(n, 1, i), t.render(e, a), t.setRenderTarget(n, 2, i), t.render(e, o), t.setRenderTarget(n, 3, i), t.render(e, c), t.setRenderTarget(n, 4, i), t.render(e, l), n.texture.generateMipmaps = w, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, p), t.xr.enabled = _, n.texture.needsPMREMUpdate = true;
        }
      }
      class gf extends He {
        constructor(t, e, n, i, s, a, o, c, l, h) {
          t = t !== void 0 ? t : [], e = e !== void 0 ? e : es, super(t, e, n, i, s, a, o, c, l, h), this.isCubeTexture = true, this.flipY = false;
        }
        get images() {
          return this.image;
        }
        set images(t) {
          this.image = t;
        }
      }
      class __ extends Wi {
        constructor(t = 1, e = {}) {
          super(t, t, e), this.isWebGLCubeRenderTarget = true;
          const n = {
            width: t,
            height: t,
            depth: 1
          }, i = [
            n,
            n,
            n,
            n,
            n,
            n
          ];
          e.encoding !== void 0 && (zs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e.colorSpace = e.encoding === gr ? Se : En), this.texture = new gf(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : on;
        }
        fromEquirectangularTexture(t, e) {
          this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
          const n = {
            uniforms: {
              tEquirect: {
                value: null
              }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
          }, i = new ms(5, 5, 5), s = new Jn({
            name: "CubemapFromEquirect",
            uniforms: cs(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: hn,
            blending: yi
          });
          s.uniforms.tEquirect.value = e;
          const a = new Re(i, s), o = e.minFilter;
          return e.minFilter === vr && (e.minFilter = on), new m_(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
        }
        clear(t, e, n, i) {
          const s = t.getRenderTarget();
          for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, i);
          t.setRenderTarget(s);
        }
      }
      const _c = new C(), g_ = new C(), w_ = new Yt();
      class or {
        constructor(t = new C(1, 0, 0), e = 0) {
          this.isPlane = true, this.normal = t, this.constant = e;
        }
        set(t, e) {
          return this.normal.copy(t), this.constant = e, this;
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), this.constant = i, this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
        }
        setFromCoplanarPoints(t, e, n) {
          const i = _c.subVectors(n, e).cross(g_.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
          return this.normal.copy(t.normal), this.constant = t.constant, this;
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), this.constant *= t, this;
        }
        negate() {
          return this.constant *= -1, this.normal.negate(), this;
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
          return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
        }
        intersectLine(t, e) {
          const n = t.delta(_c), i = this.normal.dot(n);
          if (i === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
          const s = -(t.start.dot(this.normal) + this.constant) / i;
          return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
          return e < 0 && n > 0 || n < 0 && e > 0;
        }
        intersectsBox(t) {
          return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
          const n = e || w_.getNormalMatrix(t), i = this.coplanarPoint(_c).applyMatrix4(t), s = this.normal.applyMatrix3(n).normalize();
          return this.constant = -i.dot(s), this;
        }
        translate(t) {
          return this.constant -= t.dot(this.normal), this;
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const tr = new Cn(), Ea = new C();
      class Il {
        constructor(t = new or(), e = new or(), n = new or(), i = new or(), s = new or(), a = new or()) {
          this.planes = [
            t,
            e,
            n,
            i,
            s,
            a
          ];
        }
        set(t, e, n, i, s, a) {
          const o = this.planes;
          return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
        }
        copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this;
        }
        setFromProjectionMatrix(t, e = gi) {
          const n = this.planes, i = t.elements, s = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], p = i[8], _ = i[9], w = i[10], m = i[11], f = i[12], b = i[13], v = i[14], R = i[15];
          if (n[0].setComponents(c - s, d - l, m - p, R - f).normalize(), n[1].setComponents(c + s, d + l, m + p, R + f).normalize(), n[2].setComponents(c + a, d + h, m + _, R + b).normalize(), n[3].setComponents(c - a, d - h, m - _, R - b).normalize(), n[4].setComponents(c - o, d - u, m - w, R - v).normalize(), e === gi) n[5].setComponents(c + o, d + u, m + w, R + v).normalize();
          else if (e === oo) n[5].setComponents(o, u, w, v).normalize();
          else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
          return this;
        }
        intersectsObject(t) {
          if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
          else {
            const e = t.geometry;
            e.boundingSphere === null && e.computeBoundingSphere(), tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
          }
          return this.intersectsSphere(tr);
        }
        intersectsSprite(t) {
          return tr.center.set(0, 0, 0), tr.radius = 0.7071067811865476, tr.applyMatrix4(t.matrixWorld), this.intersectsSphere(tr);
        }
        intersectsSphere(t) {
          const e = this.planes, n = t.center, i = -t.radius;
          for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(n) < i) return false;
          return true;
        }
        intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
            const i = e[n];
            if (Ea.x = i.normal.x > 0 ? t.max.x : t.min.x, Ea.y = i.normal.y > 0 ? t.max.y : t.min.y, Ea.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(Ea) < 0) return false;
          }
          return true;
        }
        containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
          return true;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      function wf() {
        let r = null, t = false, e = null, n = null;
        function i(s, a) {
          e(s, a), n = r.requestAnimationFrame(i);
        }
        return {
          start: function() {
            t !== true && e !== null && (n = r.requestAnimationFrame(i), t = true);
          },
          stop: function() {
            r.cancelAnimationFrame(n), t = false;
          },
          setAnimationLoop: function(s) {
            e = s;
          },
          setContext: function(s) {
            r = s;
          }
        };
      }
      function v_(r, t) {
        const e = t.isWebGL2, n = /* @__PURE__ */ new WeakMap();
        function i(l, h) {
          const u = l.array, d = l.usage, p = u.byteLength, _ = r.createBuffer();
          r.bindBuffer(h, _), r.bufferData(h, u, d), l.onUploadCallback();
          let w;
          if (u instanceof Float32Array) w = r.FLOAT;
          else if (u instanceof Uint16Array) if (l.isFloat16BufferAttribute) if (e) w = r.HALF_FLOAT;
          else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
          else w = r.UNSIGNED_SHORT;
          else if (u instanceof Int16Array) w = r.SHORT;
          else if (u instanceof Uint32Array) w = r.UNSIGNED_INT;
          else if (u instanceof Int32Array) w = r.INT;
          else if (u instanceof Int8Array) w = r.BYTE;
          else if (u instanceof Uint8Array) w = r.UNSIGNED_BYTE;
          else if (u instanceof Uint8ClampedArray) w = r.UNSIGNED_BYTE;
          else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
          return {
            buffer: _,
            type: w,
            bytesPerElement: u.BYTES_PER_ELEMENT,
            version: l.version,
            size: p
          };
        }
        function s(l, h, u) {
          const d = h.array, p = h._updateRange, _ = h.updateRanges;
          if (r.bindBuffer(u, l), p.count === -1 && _.length === 0 && r.bufferSubData(u, 0, d), _.length !== 0) {
            for (let w = 0, m = _.length; w < m; w++) {
              const f = _[w];
              e ? r.bufferSubData(u, f.start * d.BYTES_PER_ELEMENT, d, f.start, f.count) : r.bufferSubData(u, f.start * d.BYTES_PER_ELEMENT, d.subarray(f.start, f.start + f.count));
            }
            h.clearUpdateRanges();
          }
          p.count !== -1 && (e ? r.bufferSubData(u, p.offset * d.BYTES_PER_ELEMENT, d, p.offset, p.count) : r.bufferSubData(u, p.offset * d.BYTES_PER_ELEMENT, d.subarray(p.offset, p.offset + p.count)), p.count = -1), h.onUploadCallback();
        }
        function a(l) {
          return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
        }
        function o(l) {
          l.isInterleavedBufferAttribute && (l = l.data);
          const h = n.get(l);
          h && (r.deleteBuffer(h.buffer), n.delete(l));
        }
        function c(l, h) {
          if (l.isGLBufferAttribute) {
            const d = n.get(l);
            (!d || d.version < l.version) && n.set(l, {
              buffer: l.buffer,
              type: l.type,
              bytesPerElement: l.elementSize,
              version: l.version
            });
            return;
          }
          l.isInterleavedBufferAttribute && (l = l.data);
          const u = n.get(l);
          if (u === void 0) n.set(l, i(l, h));
          else if (u.version < l.version) {
            if (u.size !== l.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            s(u.buffer, l, h), u.version = l.version;
          }
        }
        return {
          get: a,
          remove: o,
          update: c
        };
      }
      class Zs extends sn {
        constructor(t = 1, e = 1, n = 1, i = 1) {
          super(), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: i
          };
          const s = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = t / o, d = e / c, p = [], _ = [], w = [], m = [];
          for (let f = 0; f < h; f++) {
            const b = f * d - a;
            for (let v = 0; v < l; v++) {
              const R = v * u - s;
              _.push(R, -b, 0), w.push(0, 0, 1), m.push(v / o), m.push(1 - f / c);
            }
          }
          for (let f = 0; f < c; f++) for (let b = 0; b < o; b++) {
            const v = b + l * f, R = b + l * (f + 1), I = b + 1 + l * (f + 1), y = b + 1 + l * f;
            p.push(v, R, y), p.push(R, I, y);
          }
          this.setIndex(p), this.setAttribute("position", new Ge(_, 3)), this.setAttribute("normal", new Ge(w, 3)), this.setAttribute("uv", new Ge(m, 2));
        }
        copy(t) {
          return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
          return new Zs(t.width, t.height, t.widthSegments, t.heightSegments);
        }
      }
      var y_ = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, x_ = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, S_ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, b_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, M_ = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, E_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, T_ = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, A_ = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, R_ = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, C_ = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, P_ = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, L_ = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, I_ = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, D_ = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, U_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, N_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, F_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, O_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, B_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, z_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, H_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, G_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, k_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, V_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, W_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, j_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, X_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, q_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Y_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, K_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, J_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );", $_ = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Z_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Q_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, tg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, eg = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ng = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, ig = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, rg = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, sg = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ag = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, og = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, cg = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, lg = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, hg = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ug = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, dg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, fg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, pg = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, mg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, _g = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, gg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, wg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, vg = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, yg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, xg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Sg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, bg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Mg = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Eg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Tg = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Ag = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Rg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Cg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Pg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Lg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Ig = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Dg = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Ug = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Ng = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Fg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, Og = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Bg = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, zg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Gg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, kg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Vg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, jg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Xg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, qg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Yg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Kg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Jg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, $g = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Zg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Qg = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, tw = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ew = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, nw = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, iw = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, rw = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, sw = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, aw = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ow = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, cw = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, lw = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, hw = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, uw = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, dw = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, fw = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, pw = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, mw = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, _w = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gw = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, ww = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
      const vw = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, yw = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, xw = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sw = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bw = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Mw = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ew = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Tw = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, Aw = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Rw = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Cw = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pw = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lw = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Iw = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Dw = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Uw = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nw = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fw = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ow = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Bw = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, zw = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Hw = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Gw = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kw = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vw = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ww = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jw = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xw = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qw = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Yw = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Kw = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Jw = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, $w = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Zw = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ht = {
        alphahash_fragment: y_,
        alphahash_pars_fragment: x_,
        alphamap_fragment: S_,
        alphamap_pars_fragment: b_,
        alphatest_fragment: M_,
        alphatest_pars_fragment: E_,
        aomap_fragment: T_,
        aomap_pars_fragment: A_,
        batching_pars_vertex: R_,
        batching_vertex: C_,
        begin_vertex: P_,
        beginnormal_vertex: L_,
        bsdfs: I_,
        iridescence_fragment: D_,
        bumpmap_pars_fragment: U_,
        clipping_planes_fragment: N_,
        clipping_planes_pars_fragment: F_,
        clipping_planes_pars_vertex: O_,
        clipping_planes_vertex: B_,
        color_fragment: z_,
        color_pars_fragment: H_,
        color_pars_vertex: G_,
        color_vertex: k_,
        common: V_,
        cube_uv_reflection_fragment: W_,
        defaultnormal_vertex: j_,
        displacementmap_pars_vertex: X_,
        displacementmap_vertex: q_,
        emissivemap_fragment: Y_,
        emissivemap_pars_fragment: K_,
        colorspace_fragment: J_,
        colorspace_pars_fragment: $_,
        envmap_fragment: Z_,
        envmap_common_pars_fragment: Q_,
        envmap_pars_fragment: tg,
        envmap_pars_vertex: eg,
        envmap_physical_pars_fragment: fg,
        envmap_vertex: ng,
        fog_vertex: ig,
        fog_pars_vertex: rg,
        fog_fragment: sg,
        fog_pars_fragment: ag,
        gradientmap_pars_fragment: og,
        lightmap_fragment: cg,
        lightmap_pars_fragment: lg,
        lights_lambert_fragment: hg,
        lights_lambert_pars_fragment: ug,
        lights_pars_begin: dg,
        lights_toon_fragment: pg,
        lights_toon_pars_fragment: mg,
        lights_phong_fragment: _g,
        lights_phong_pars_fragment: gg,
        lights_physical_fragment: wg,
        lights_physical_pars_fragment: vg,
        lights_fragment_begin: yg,
        lights_fragment_maps: xg,
        lights_fragment_end: Sg,
        logdepthbuf_fragment: bg,
        logdepthbuf_pars_fragment: Mg,
        logdepthbuf_pars_vertex: Eg,
        logdepthbuf_vertex: Tg,
        map_fragment: Ag,
        map_pars_fragment: Rg,
        map_particle_fragment: Cg,
        map_particle_pars_fragment: Pg,
        metalnessmap_fragment: Lg,
        metalnessmap_pars_fragment: Ig,
        morphcolor_vertex: Dg,
        morphnormal_vertex: Ug,
        morphtarget_pars_vertex: Ng,
        morphtarget_vertex: Fg,
        normal_fragment_begin: Og,
        normal_fragment_maps: Bg,
        normal_pars_fragment: zg,
        normal_pars_vertex: Hg,
        normal_vertex: Gg,
        normalmap_pars_fragment: kg,
        clearcoat_normal_fragment_begin: Vg,
        clearcoat_normal_fragment_maps: Wg,
        clearcoat_pars_fragment: jg,
        iridescence_pars_fragment: Xg,
        opaque_fragment: qg,
        packing: Yg,
        premultiplied_alpha_fragment: Kg,
        project_vertex: Jg,
        dithering_fragment: $g,
        dithering_pars_fragment: Zg,
        roughnessmap_fragment: Qg,
        roughnessmap_pars_fragment: tw,
        shadowmap_pars_fragment: ew,
        shadowmap_pars_vertex: nw,
        shadowmap_vertex: iw,
        shadowmask_pars_fragment: rw,
        skinbase_vertex: sw,
        skinning_pars_vertex: aw,
        skinning_vertex: ow,
        skinnormal_vertex: cw,
        specularmap_fragment: lw,
        specularmap_pars_fragment: hw,
        tonemapping_fragment: uw,
        tonemapping_pars_fragment: dw,
        transmission_fragment: fw,
        transmission_pars_fragment: pw,
        uv_pars_fragment: mw,
        uv_pars_vertex: _w,
        uv_vertex: gw,
        worldpos_vertex: ww,
        background_vert: vw,
        background_frag: yw,
        backgroundCube_vert: xw,
        backgroundCube_frag: Sw,
        cube_vert: bw,
        cube_frag: Mw,
        depth_vert: Ew,
        depth_frag: Tw,
        distanceRGBA_vert: Aw,
        distanceRGBA_frag: Rw,
        equirect_vert: Cw,
        equirect_frag: Pw,
        linedashed_vert: Lw,
        linedashed_frag: Iw,
        meshbasic_vert: Dw,
        meshbasic_frag: Uw,
        meshlambert_vert: Nw,
        meshlambert_frag: Fw,
        meshmatcap_vert: Ow,
        meshmatcap_frag: Bw,
        meshnormal_vert: zw,
        meshnormal_frag: Hw,
        meshphong_vert: Gw,
        meshphong_frag: kw,
        meshphysical_vert: Vw,
        meshphysical_frag: Ww,
        meshtoon_vert: jw,
        meshtoon_frag: Xw,
        points_vert: qw,
        points_frag: Yw,
        shadow_vert: Kw,
        shadow_frag: Jw,
        sprite_vert: $w,
        sprite_frag: Zw
      }, st = {
        common: {
          diffuse: {
            value: new At(16777215)
          },
          opacity: {
            value: 1
          },
          map: {
            value: null
          },
          mapTransform: {
            value: new Yt()
          },
          alphaMap: {
            value: null
          },
          alphaMapTransform: {
            value: new Yt()
          },
          alphaTest: {
            value: 0
          }
        },
        specularmap: {
          specularMap: {
            value: null
          },
          specularMapTransform: {
            value: new Yt()
          }
        },
        envmap: {
          envMap: {
            value: null
          },
          flipEnvMap: {
            value: -1
          },
          reflectivity: {
            value: 1
          },
          ior: {
            value: 1.5
          },
          refractionRatio: {
            value: 0.98
          }
        },
        aomap: {
          aoMap: {
            value: null
          },
          aoMapIntensity: {
            value: 1
          },
          aoMapTransform: {
            value: new Yt()
          }
        },
        lightmap: {
          lightMap: {
            value: null
          },
          lightMapIntensity: {
            value: 1
          },
          lightMapTransform: {
            value: new Yt()
          }
        },
        bumpmap: {
          bumpMap: {
            value: null
          },
          bumpMapTransform: {
            value: new Yt()
          },
          bumpScale: {
            value: 1
          }
        },
        normalmap: {
          normalMap: {
            value: null
          },
          normalMapTransform: {
            value: new Yt()
          },
          normalScale: {
            value: new Ot(1, 1)
          }
        },
        displacementmap: {
          displacementMap: {
            value: null
          },
          displacementMapTransform: {
            value: new Yt()
          },
          displacementScale: {
            value: 1
          },
          displacementBias: {
            value: 0
          }
        },
        emissivemap: {
          emissiveMap: {
            value: null
          },
          emissiveMapTransform: {
            value: new Yt()
          }
        },
        metalnessmap: {
          metalnessMap: {
            value: null
          },
          metalnessMapTransform: {
            value: new Yt()
          }
        },
        roughnessmap: {
          roughnessMap: {
            value: null
          },
          roughnessMapTransform: {
            value: new Yt()
          }
        },
        gradientmap: {
          gradientMap: {
            value: null
          }
        },
        fog: {
          fogDensity: {
            value: 25e-5
          },
          fogNear: {
            value: 1
          },
          fogFar: {
            value: 2e3
          },
          fogColor: {
            value: new At(16777215)
          }
        },
        lights: {
          ambientLightColor: {
            value: []
          },
          lightProbe: {
            value: []
          },
          directionalLights: {
            value: [],
            properties: {
              direction: {},
              color: {}
            }
          },
          directionalLightShadows: {
            value: [],
            properties: {
              shadowBias: {},
              shadowNormalBias: {},
              shadowRadius: {},
              shadowMapSize: {}
            }
          },
          directionalShadowMap: {
            value: []
          },
          directionalShadowMatrix: {
            value: []
          },
          spotLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              direction: {},
              distance: {},
              coneCos: {},
              penumbraCos: {},
              decay: {}
            }
          },
          spotLightShadows: {
            value: [],
            properties: {
              shadowBias: {},
              shadowNormalBias: {},
              shadowRadius: {},
              shadowMapSize: {}
            }
          },
          spotLightMap: {
            value: []
          },
          spotShadowMap: {
            value: []
          },
          spotLightMatrix: {
            value: []
          },
          pointLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              decay: {},
              distance: {}
            }
          },
          pointLightShadows: {
            value: [],
            properties: {
              shadowBias: {},
              shadowNormalBias: {},
              shadowRadius: {},
              shadowMapSize: {},
              shadowCameraNear: {},
              shadowCameraFar: {}
            }
          },
          pointShadowMap: {
            value: []
          },
          pointShadowMatrix: {
            value: []
          },
          hemisphereLights: {
            value: [],
            properties: {
              direction: {},
              skyColor: {},
              groundColor: {}
            }
          },
          rectAreaLights: {
            value: [],
            properties: {
              color: {},
              position: {},
              width: {},
              height: {}
            }
          },
          ltc_1: {
            value: null
          },
          ltc_2: {
            value: null
          }
        },
        points: {
          diffuse: {
            value: new At(16777215)
          },
          opacity: {
            value: 1
          },
          size: {
            value: 1
          },
          scale: {
            value: 1
          },
          map: {
            value: null
          },
          alphaMap: {
            value: null
          },
          alphaMapTransform: {
            value: new Yt()
          },
          alphaTest: {
            value: 0
          },
          uvTransform: {
            value: new Yt()
          }
        },
        sprite: {
          diffuse: {
            value: new At(16777215)
          },
          opacity: {
            value: 1
          },
          center: {
            value: new Ot(0.5, 0.5)
          },
          rotation: {
            value: 0
          },
          map: {
            value: null
          },
          mapTransform: {
            value: new Yt()
          },
          alphaMap: {
            value: null
          },
          alphaMapTransform: {
            value: new Yt()
          },
          alphaTest: {
            value: 0
          }
        }
      }, cn = {
        basic: {
          uniforms: tn([
            st.common,
            st.specularmap,
            st.envmap,
            st.aomap,
            st.lightmap,
            st.fog
          ]),
          vertexShader: Ht.meshbasic_vert,
          fragmentShader: Ht.meshbasic_frag
        },
        lambert: {
          uniforms: tn([
            st.common,
            st.specularmap,
            st.envmap,
            st.aomap,
            st.lightmap,
            st.emissivemap,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            st.fog,
            st.lights,
            {
              emissive: {
                value: new At(0)
              }
            }
          ]),
          vertexShader: Ht.meshlambert_vert,
          fragmentShader: Ht.meshlambert_frag
        },
        phong: {
          uniforms: tn([
            st.common,
            st.specularmap,
            st.envmap,
            st.aomap,
            st.lightmap,
            st.emissivemap,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            st.fog,
            st.lights,
            {
              emissive: {
                value: new At(0)
              },
              specular: {
                value: new At(1118481)
              },
              shininess: {
                value: 30
              }
            }
          ]),
          vertexShader: Ht.meshphong_vert,
          fragmentShader: Ht.meshphong_frag
        },
        standard: {
          uniforms: tn([
            st.common,
            st.envmap,
            st.aomap,
            st.lightmap,
            st.emissivemap,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            st.roughnessmap,
            st.metalnessmap,
            st.fog,
            st.lights,
            {
              emissive: {
                value: new At(0)
              },
              roughness: {
                value: 1
              },
              metalness: {
                value: 0
              },
              envMapIntensity: {
                value: 1
              }
            }
          ]),
          vertexShader: Ht.meshphysical_vert,
          fragmentShader: Ht.meshphysical_frag
        },
        toon: {
          uniforms: tn([
            st.common,
            st.aomap,
            st.lightmap,
            st.emissivemap,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            st.gradientmap,
            st.fog,
            st.lights,
            {
              emissive: {
                value: new At(0)
              }
            }
          ]),
          vertexShader: Ht.meshtoon_vert,
          fragmentShader: Ht.meshtoon_frag
        },
        matcap: {
          uniforms: tn([
            st.common,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            st.fog,
            {
              matcap: {
                value: null
              }
            }
          ]),
          vertexShader: Ht.meshmatcap_vert,
          fragmentShader: Ht.meshmatcap_frag
        },
        points: {
          uniforms: tn([
            st.points,
            st.fog
          ]),
          vertexShader: Ht.points_vert,
          fragmentShader: Ht.points_frag
        },
        dashed: {
          uniforms: tn([
            st.common,
            st.fog,
            {
              scale: {
                value: 1
              },
              dashSize: {
                value: 1
              },
              totalSize: {
                value: 2
              }
            }
          ]),
          vertexShader: Ht.linedashed_vert,
          fragmentShader: Ht.linedashed_frag
        },
        depth: {
          uniforms: tn([
            st.common,
            st.displacementmap
          ]),
          vertexShader: Ht.depth_vert,
          fragmentShader: Ht.depth_frag
        },
        normal: {
          uniforms: tn([
            st.common,
            st.bumpmap,
            st.normalmap,
            st.displacementmap,
            {
              opacity: {
                value: 1
              }
            }
          ]),
          vertexShader: Ht.meshnormal_vert,
          fragmentShader: Ht.meshnormal_frag
        },
        sprite: {
          uniforms: tn([
            st.sprite,
            st.fog
          ]),
          vertexShader: Ht.sprite_vert,
          fragmentShader: Ht.sprite_frag
        },
        background: {
          uniforms: {
            uvTransform: {
              value: new Yt()
            },
            t2D: {
              value: null
            },
            backgroundIntensity: {
              value: 1
            }
          },
          vertexShader: Ht.background_vert,
          fragmentShader: Ht.background_frag
        },
        backgroundCube: {
          uniforms: {
            envMap: {
              value: null
            },
            flipEnvMap: {
              value: -1
            },
            backgroundBlurriness: {
              value: 0
            },
            backgroundIntensity: {
              value: 1
            }
          },
          vertexShader: Ht.backgroundCube_vert,
          fragmentShader: Ht.backgroundCube_frag
        },
        cube: {
          uniforms: {
            tCube: {
              value: null
            },
            tFlip: {
              value: -1
            },
            opacity: {
              value: 1
            }
          },
          vertexShader: Ht.cube_vert,
          fragmentShader: Ht.cube_frag
        },
        equirect: {
          uniforms: {
            tEquirect: {
              value: null
            }
          },
          vertexShader: Ht.equirect_vert,
          fragmentShader: Ht.equirect_frag
        },
        distanceRGBA: {
          uniforms: tn([
            st.common,
            st.displacementmap,
            {
              referencePosition: {
                value: new C()
              },
              nearDistance: {
                value: 1
              },
              farDistance: {
                value: 1e3
              }
            }
          ]),
          vertexShader: Ht.distanceRGBA_vert,
          fragmentShader: Ht.distanceRGBA_frag
        },
        shadow: {
          uniforms: tn([
            st.lights,
            st.fog,
            {
              color: {
                value: new At(0)
              },
              opacity: {
                value: 1
              }
            }
          ]),
          vertexShader: Ht.shadow_vert,
          fragmentShader: Ht.shadow_frag
        }
      };
      cn.physical = {
        uniforms: tn([
          cn.standard.uniforms,
          {
            clearcoat: {
              value: 0
            },
            clearcoatMap: {
              value: null
            },
            clearcoatMapTransform: {
              value: new Yt()
            },
            clearcoatNormalMap: {
              value: null
            },
            clearcoatNormalMapTransform: {
              value: new Yt()
            },
            clearcoatNormalScale: {
              value: new Ot(1, 1)
            },
            clearcoatRoughness: {
              value: 0
            },
            clearcoatRoughnessMap: {
              value: null
            },
            clearcoatRoughnessMapTransform: {
              value: new Yt()
            },
            iridescence: {
              value: 0
            },
            iridescenceMap: {
              value: null
            },
            iridescenceMapTransform: {
              value: new Yt()
            },
            iridescenceIOR: {
              value: 1.3
            },
            iridescenceThicknessMinimum: {
              value: 100
            },
            iridescenceThicknessMaximum: {
              value: 400
            },
            iridescenceThicknessMap: {
              value: null
            },
            iridescenceThicknessMapTransform: {
              value: new Yt()
            },
            sheen: {
              value: 0
            },
            sheenColor: {
              value: new At(0)
            },
            sheenColorMap: {
              value: null
            },
            sheenColorMapTransform: {
              value: new Yt()
            },
            sheenRoughness: {
              value: 1
            },
            sheenRoughnessMap: {
              value: null
            },
            sheenRoughnessMapTransform: {
              value: new Yt()
            },
            transmission: {
              value: 0
            },
            transmissionMap: {
              value: null
            },
            transmissionMapTransform: {
              value: new Yt()
            },
            transmissionSamplerSize: {
              value: new Ot()
            },
            transmissionSamplerMap: {
              value: null
            },
            thickness: {
              value: 0
            },
            thicknessMap: {
              value: null
            },
            thicknessMapTransform: {
              value: new Yt()
            },
            attenuationDistance: {
              value: 0
            },
            attenuationColor: {
              value: new At(0)
            },
            specularColor: {
              value: new At(1, 1, 1)
            },
            specularColorMap: {
              value: null
            },
            specularColorMapTransform: {
              value: new Yt()
            },
            specularIntensity: {
              value: 1
            },
            specularIntensityMap: {
              value: null
            },
            specularIntensityMapTransform: {
              value: new Yt()
            },
            anisotropyVector: {
              value: new Ot()
            },
            anisotropyMap: {
              value: null
            },
            anisotropyMapTransform: {
              value: new Yt()
            }
          }
        ]),
        vertexShader: Ht.meshphysical_vert,
        fragmentShader: Ht.meshphysical_frag
      };
      const Ta = {
        r: 0,
        b: 0,
        g: 0
      };
      function Qw(r, t, e, n, i, s, a) {
        const o = new At(0);
        let c = s === true ? 0 : 1, l, h, u = null, d = 0, p = null;
        function _(m, f) {
          let b = false, v = f.isScene === true ? f.background : null;
          v && v.isTexture && (v = (f.backgroundBlurriness > 0 ? e : t).get(v)), v === null ? w(o, c) : v && v.isColor && (w(v, 1), b = true);
          const R = r.xr.getEnvironmentBlendMode();
          R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || b) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), v && (v.isCubeTexture || v.mapping === bo) ? (h === void 0 && (h = new Re(new ms(1, 1, 1), new Jn({
            name: "BackgroundCubeMaterial",
            uniforms: cs(cn.backgroundCube.uniforms),
            vertexShader: cn.backgroundCube.vertexShader,
            fragmentShader: cn.backgroundCube.fragmentShader,
            side: hn,
            depthTest: false,
            depthWrite: false,
            fog: false
          })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(I, y, A) {
            this.matrixWorld.copyPosition(A.matrixWorld);
          }, Object.defineProperty(h.material, "envMap", {
            get: function() {
              return this.uniforms.envMap.value;
            }
          }), i.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = ie.getTransfer(v.colorSpace) !== me, (u !== v || d !== v.version || p !== r.toneMapping) && (h.material.needsUpdate = true, u = v, d = v.version, p = r.toneMapping), h.layers.enableAll(), m.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new Re(new Zs(2, 2), new Jn({
            name: "BackgroundMaterial",
            uniforms: cs(cn.background.uniforms),
            vertexShader: cn.background.vertexShader,
            fragmentShader: cn.background.fragmentShader,
            side: xi,
            depthTest: false,
            depthWrite: false,
            fog: false
          })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
            get: function() {
              return this.uniforms.t2D.value;
            }
          }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = ie.getTransfer(v.colorSpace) !== me, v.matrixAutoUpdate === true && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || p !== r.toneMapping) && (l.material.needsUpdate = true, u = v, d = v.version, p = r.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
        }
        function w(m, f) {
          m.getRGB(Ta, mf(r)), n.buffers.color.setClear(Ta.r, Ta.g, Ta.b, f, a);
        }
        return {
          getClearColor: function() {
            return o;
          },
          setClearColor: function(m, f = 1) {
            o.set(m), c = f, w(o, c);
          },
          getClearAlpha: function() {
            return c;
          },
          setClearAlpha: function(m) {
            c = m, w(o, c);
          },
          render: _
        };
      }
      function tv(r, t, e, n) {
        const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : t.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, c = m(null);
        let l = c, h = false;
        function u(D, O, j, $, K) {
          let Y = false;
          if (a) {
            const J = w($, j, O);
            l !== J && (l = J, p(l.object)), Y = f(D, $, j, K), Y && b(D, $, j, K);
          } else {
            const J = O.wireframe === true;
            (l.geometry !== $.id || l.program !== j.id || l.wireframe !== J) && (l.geometry = $.id, l.program = j.id, l.wireframe = J, Y = true);
          }
          K !== null && e.update(K, r.ELEMENT_ARRAY_BUFFER), (Y || h) && (h = false, B(D, O, j, $), K !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(K).buffer));
        }
        function d() {
          return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
        }
        function p(D) {
          return n.isWebGL2 ? r.bindVertexArray(D) : s.bindVertexArrayOES(D);
        }
        function _(D) {
          return n.isWebGL2 ? r.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
        }
        function w(D, O, j) {
          const $ = j.wireframe === true;
          let K = o[D.id];
          K === void 0 && (K = {}, o[D.id] = K);
          let Y = K[O.id];
          Y === void 0 && (Y = {}, K[O.id] = Y);
          let J = Y[$];
          return J === void 0 && (J = m(d()), Y[$] = J), J;
        }
        function m(D) {
          const O = [], j = [], $ = [];
          for (let K = 0; K < i; K++) O[K] = 0, j[K] = 0, $[K] = 0;
          return {
            geometry: null,
            program: null,
            wireframe: false,
            newAttributes: O,
            enabledAttributes: j,
            attributeDivisors: $,
            object: D,
            attributes: {},
            index: null
          };
        }
        function f(D, O, j, $) {
          const K = l.attributes, Y = O.attributes;
          let J = 0;
          const Q = j.getAttributes();
          for (const lt in Q) if (Q[lt].location >= 0) {
            const Z = K[lt];
            let ut = Y[lt];
            if (ut === void 0 && (lt === "instanceMatrix" && D.instanceMatrix && (ut = D.instanceMatrix), lt === "instanceColor" && D.instanceColor && (ut = D.instanceColor)), Z === void 0 || Z.attribute !== ut || ut && Z.data !== ut.data) return true;
            J++;
          }
          return l.attributesNum !== J || l.index !== $;
        }
        function b(D, O, j, $) {
          const K = {}, Y = O.attributes;
          let J = 0;
          const Q = j.getAttributes();
          for (const lt in Q) if (Q[lt].location >= 0) {
            let Z = Y[lt];
            Z === void 0 && (lt === "instanceMatrix" && D.instanceMatrix && (Z = D.instanceMatrix), lt === "instanceColor" && D.instanceColor && (Z = D.instanceColor));
            const ut = {};
            ut.attribute = Z, Z && Z.data && (ut.data = Z.data), K[lt] = ut, J++;
          }
          l.attributes = K, l.attributesNum = J, l.index = $;
        }
        function v() {
          const D = l.newAttributes;
          for (let O = 0, j = D.length; O < j; O++) D[O] = 0;
        }
        function R(D) {
          I(D, 0);
        }
        function I(D, O) {
          const j = l.newAttributes, $ = l.enabledAttributes, K = l.attributeDivisors;
          j[D] = 1, $[D] === 0 && (r.enableVertexAttribArray(D), $[D] = 1), K[D] !== O && ((n.isWebGL2 ? r : t.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](D, O), K[D] = O);
        }
        function y() {
          const D = l.newAttributes, O = l.enabledAttributes;
          for (let j = 0, $ = O.length; j < $; j++) O[j] !== D[j] && (r.disableVertexAttribArray(j), O[j] = 0);
        }
        function A(D, O, j, $, K, Y, J) {
          J === true ? r.vertexAttribIPointer(D, O, j, K, Y) : r.vertexAttribPointer(D, O, j, $, K, Y);
        }
        function B(D, O, j, $) {
          if (n.isWebGL2 === false && (D.isInstancedMesh || $.isInstancedBufferGeometry) && t.get("ANGLE_instanced_arrays") === null) return;
          v();
          const K = $.attributes, Y = j.getAttributes(), J = O.defaultAttributeValues;
          for (const Q in Y) {
            const lt = Y[Q];
            if (lt.location >= 0) {
              let X = K[Q];
              if (X === void 0 && (Q === "instanceMatrix" && D.instanceMatrix && (X = D.instanceMatrix), Q === "instanceColor" && D.instanceColor && (X = D.instanceColor)), X !== void 0) {
                const Z = X.normalized, ut = X.itemSize, _t = e.get(X);
                if (_t === void 0) continue;
                const ft = _t.buffer, Rt = _t.type, Dt = _t.bytesPerElement, Et = n.isWebGL2 === true && (Rt === r.INT || Rt === r.UNSIGNED_INT || X.gpuType === qd);
                if (X.isInterleavedBufferAttribute) {
                  const Gt = X.data, H = Gt.stride, Je = X.offset;
                  if (Gt.isInstancedInterleavedBuffer) {
                    for (let bt = 0; bt < lt.locationSize; bt++) I(lt.location + bt, Gt.meshPerAttribute);
                    D.isInstancedMesh !== true && $._maxInstanceCount === void 0 && ($._maxInstanceCount = Gt.meshPerAttribute * Gt.count);
                  } else for (let bt = 0; bt < lt.locationSize; bt++) R(lt.location + bt);
                  r.bindBuffer(r.ARRAY_BUFFER, ft);
                  for (let bt = 0; bt < lt.locationSize; bt++) A(lt.location + bt, ut / lt.locationSize, Rt, Z, H * Dt, (Je + ut / lt.locationSize * bt) * Dt, Et);
                } else {
                  if (X.isInstancedBufferAttribute) {
                    for (let Gt = 0; Gt < lt.locationSize; Gt++) I(lt.location + Gt, X.meshPerAttribute);
                    D.isInstancedMesh !== true && $._maxInstanceCount === void 0 && ($._maxInstanceCount = X.meshPerAttribute * X.count);
                  } else for (let Gt = 0; Gt < lt.locationSize; Gt++) R(lt.location + Gt);
                  r.bindBuffer(r.ARRAY_BUFFER, ft);
                  for (let Gt = 0; Gt < lt.locationSize; Gt++) A(lt.location + Gt, ut / lt.locationSize, Rt, Z, ut * Dt, ut / lt.locationSize * Gt * Dt, Et);
                }
              } else if (J !== void 0) {
                const Z = J[Q];
                if (Z !== void 0) switch (Z.length) {
                  case 2:
                    r.vertexAttrib2fv(lt.location, Z);
                    break;
                  case 3:
                    r.vertexAttrib3fv(lt.location, Z);
                    break;
                  case 4:
                    r.vertexAttrib4fv(lt.location, Z);
                    break;
                  default:
                    r.vertexAttrib1fv(lt.location, Z);
                }
              }
            }
          }
          y();
        }
        function S() {
          q();
          for (const D in o) {
            const O = o[D];
            for (const j in O) {
              const $ = O[j];
              for (const K in $) _($[K].object), delete $[K];
              delete O[j];
            }
            delete o[D];
          }
        }
        function T(D) {
          if (o[D.id] === void 0) return;
          const O = o[D.id];
          for (const j in O) {
            const $ = O[j];
            for (const K in $) _($[K].object), delete $[K];
            delete O[j];
          }
          delete o[D.id];
        }
        function z(D) {
          for (const O in o) {
            const j = o[O];
            if (j[D.id] === void 0) continue;
            const $ = j[D.id];
            for (const K in $) _($[K].object), delete $[K];
            delete j[D.id];
          }
        }
        function q() {
          it(), h = true, l !== c && (l = c, p(l.object));
        }
        function it() {
          c.geometry = null, c.program = null, c.wireframe = false;
        }
        return {
          setup: u,
          reset: q,
          resetDefaultState: it,
          dispose: S,
          releaseStatesOfGeometry: T,
          releaseStatesOfProgram: z,
          initAttributes: v,
          enableAttribute: R,
          disableUnusedAttributes: y
        };
      }
      function ev(r, t, e, n) {
        const i = n.isWebGL2;
        let s;
        function a(h) {
          s = h;
        }
        function o(h, u) {
          r.drawArrays(s, h, u), e.update(u, s, 1);
        }
        function c(h, u, d) {
          if (d === 0) return;
          let p, _;
          if (i) p = r, _ = "drawArraysInstanced";
          else if (p = t.get("ANGLE_instanced_arrays"), _ = "drawArraysInstancedANGLE", p === null) {
            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
          }
          p[_](s, h, u, d), e.update(u, s, d);
        }
        function l(h, u, d) {
          if (d === 0) return;
          const p = t.get("WEBGL_multi_draw");
          if (p === null) for (let _ = 0; _ < d; _++) this.render(h[_], u[_]);
          else {
            p.multiDrawArraysWEBGL(s, h, 0, u, 0, d);
            let _ = 0;
            for (let w = 0; w < d; w++) _ += u[w];
            e.update(_, s, 1);
          }
        }
        this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
      }
      function nv(r, t, e) {
        let n;
        function i() {
          if (n !== void 0) return n;
          if (t.has("EXT_texture_filter_anisotropic") === true) {
            const A = t.get("EXT_texture_filter_anisotropic");
            n = r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          } else n = 0;
          return n;
        }
        function s(A) {
          if (A === "highp") {
            if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp";
            A = "mediump";
          }
          return A === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
        }
        const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
        let o = e.precision !== void 0 ? e.precision : "highp";
        const c = s(o);
        c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
        const l = a || t.has("WEBGL_draw_buffers"), h = e.logarithmicDepthBuffer === true, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = r.getParameter(r.MAX_TEXTURE_SIZE), _ = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), w = r.getParameter(r.MAX_VERTEX_ATTRIBS), m = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), b = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), v = d > 0, R = a || t.has("OES_texture_float"), I = v && R, y = a ? r.getParameter(r.MAX_SAMPLES) : 0;
        return {
          isWebGL2: a,
          drawBuffers: l,
          getMaxAnisotropy: i,
          getMaxPrecision: s,
          precision: o,
          logarithmicDepthBuffer: h,
          maxTextures: u,
          maxVertexTextures: d,
          maxTextureSize: p,
          maxCubemapSize: _,
          maxAttributes: w,
          maxVertexUniforms: m,
          maxVaryings: f,
          maxFragmentUniforms: b,
          vertexTextures: v,
          floatFragmentTextures: R,
          floatVertexTextures: I,
          maxSamples: y
        };
      }
      function iv(r) {
        const t = this;
        let e = null, n = 0, i = false, s = false;
        const a = new or(), o = new Yt(), c = {
          value: null,
          needsUpdate: false
        };
        this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
          const p = u.length !== 0 || d || n !== 0 || i;
          return i = d, n = u.length, p;
        }, this.beginShadows = function() {
          s = true, h(null);
        }, this.endShadows = function() {
          s = false;
        }, this.setGlobalState = function(u, d) {
          e = h(u, d, 0);
        }, this.setState = function(u, d, p) {
          const _ = u.clippingPlanes, w = u.clipIntersection, m = u.clipShadows, f = r.get(u);
          if (!i || _ === null || _.length === 0 || s && !m) s ? h(null) : l();
          else {
            const b = s ? 0 : n, v = b * 4;
            let R = f.clippingState || null;
            c.value = R, R = h(_, d, v, p);
            for (let I = 0; I !== v; ++I) R[I] = e[I];
            f.clippingState = R, this.numIntersection = w ? this.numPlanes : 0, this.numPlanes += b;
          }
        };
        function l() {
          c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
        }
        function h(u, d, p, _) {
          const w = u !== null ? u.length : 0;
          let m = null;
          if (w !== 0) {
            if (m = c.value, _ !== true || m === null) {
              const f = p + w * 4, b = d.matrixWorldInverse;
              o.getNormalMatrix(b), (m === null || m.length < f) && (m = new Float32Array(f));
              for (let v = 0, R = p; v !== w; ++v, R += 4) a.copy(u[v]).applyMatrix4(b, o), a.normal.toArray(m, R), m[R + 3] = a.constant;
            }
            c.value = m, c.needsUpdate = true;
          }
          return t.numPlanes = w, t.numIntersection = 0, m;
        }
      }
      function rv(r) {
        let t = /* @__PURE__ */ new WeakMap();
        function e(a, o) {
          return o === el ? a.mapping = es : o === nl && (a.mapping = ns), a;
        }
        function n(a) {
          if (a && a.isTexture) {
            const o = a.mapping;
            if (o === el || o === nl) if (t.has(a)) {
              const c = t.get(a).texture;
              return e(c, a.mapping);
            } else {
              const c = a.image;
              if (c && c.height > 0) {
                const l = new __(c.height / 2);
                return l.fromEquirectangularTexture(r, a), t.set(a, l), a.addEventListener("dispose", i), e(l.texture, a.mapping);
              } else return null;
            }
          }
          return a;
        }
        function i(a) {
          const o = a.target;
          o.removeEventListener("dispose", i);
          const c = t.get(o);
          c !== void 0 && (t.delete(o), c.dispose());
        }
        function s() {
          t = /* @__PURE__ */ new WeakMap();
        }
        return {
          get: n,
          dispose: s
        };
      }
      class Ro extends _f {
        constructor(t = -1, e = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
          super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
        }
        copy(t, e) {
          return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
        }
        setViewOffset(t, e, n, i, s, a) {
          this.view === null && (this.view = {
            enabled: true,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
          }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
        }
        clearViewOffset() {
          this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
        }
        updateProjectionMatrix() {
          const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
          let s = n - t, a = n + t, o = i + e, c = i - e;
          if (this.view !== null && this.view.enabled) {
            const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += l * this.view.offsetX, a = s + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
          }
          this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
        }
      }
      const Xr = 4, yu = [
        0.125,
        0.215,
        0.35,
        0.446,
        0.526,
        0.582
      ], hr = 20, gc = new Ro(), xu = new At();
      let wc = null, vc = 0, yc = 0;
      const cr = (1 + Math.sqrt(5)) / 2, Or = 1 / cr, Su = [
        new C(1, 1, 1),
        new C(-1, 1, 1),
        new C(1, 1, -1),
        new C(-1, 1, -1),
        new C(0, cr, Or),
        new C(0, cr, -Or),
        new C(Or, 0, cr),
        new C(-Or, 0, cr),
        new C(cr, Or, 0),
        new C(-cr, Or, 0)
      ];
      class bu {
        constructor(t) {
          this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
        }
        fromScene(t, e = 0, n = 0.1, i = 100) {
          wc = this._renderer.getRenderTarget(), vc = this._renderer.getActiveCubeFace(), yc = this._renderer.getActiveMipmapLevel(), this._setSize(256);
          const s = this._allocateTargets();
          return s.depthBuffer = true, this._sceneToCubeUV(t, n, i, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
        }
        fromEquirectangular(t, e = null) {
          return this._fromTexture(t, e);
        }
        fromCubemap(t, e = null) {
          return this._fromTexture(t, e);
        }
        compileCubemapShader() {
          this._cubemapMaterial === null && (this._cubemapMaterial = Tu(), this._compileMaterial(this._cubemapMaterial));
        }
        compileEquirectangularShader() {
          this._equirectMaterial === null && (this._equirectMaterial = Eu(), this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
        }
        _setSize(t) {
          this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
        }
        _dispose() {
          this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
          for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
        }
        _cleanup(t) {
          this._renderer.setRenderTarget(wc, vc, yc), t.scissorTest = false, Aa(t, 0, 0, t.width, t.height);
        }
        _fromTexture(t, e) {
          t.mapping === es || t.mapping === ns ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), wc = this._renderer.getRenderTarget(), vc = this._renderer.getActiveCubeFace(), yc = this._renderer.getActiveMipmapLevel();
          const n = e || this._allocateTargets();
          return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
        }
        _allocateTargets() {
          const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
            magFilter: on,
            minFilter: on,
            generateMipmaps: false,
            type: rs,
            format: Mn,
            colorSpace: ke,
            depthBuffer: false
          }, i = Mu(t, e, n);
          if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Mu(t, e, n);
            const { _lodMax: s } = this;
            ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = sv(s)), this._blurMaterial = av(s, t, e);
          }
          return i;
        }
        _compileMaterial(t) {
          const e = new Re(this._lodPlanes[0], t);
          this._renderer.compile(e, gc);
        }
        _sceneToCubeUV(t, e, n, i) {
          const o = new nn(90, 1, e, n), c = [
            1,
            -1,
            1,
            1,
            1,
            1
          ], l = [
            1,
            1,
            1,
            -1,
            -1,
            -1
          ], h = this._renderer, u = h.autoClear, d = h.toneMapping;
          h.getClearColor(xu), h.toneMapping = Gi, h.autoClear = false;
          const p = new Bn({
            name: "PMREM.Background",
            side: hn,
            depthWrite: false,
            depthTest: false
          }), _ = new Re(new ms(), p);
          let w = false;
          const m = t.background;
          m ? m.isColor && (p.color.copy(m), t.background = null, w = true) : (p.color.copy(xu), w = true);
          for (let f = 0; f < 6; f++) {
            const b = f % 3;
            b === 0 ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0)) : b === 1 ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
            const v = this._cubeSize;
            Aa(i, b * v, f > 2 ? v : 0, v, v), h.setRenderTarget(i), w && h.render(_, o), h.render(t, o);
          }
          _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = m;
        }
        _textureToCubeUV(t, e) {
          const n = this._renderer, i = t.mapping === es || t.mapping === ns;
          i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Tu()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Eu());
          const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Re(this._lodPlanes[0], s), o = s.uniforms;
          o.envMap.value = t;
          const c = this._cubeSize;
          Aa(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, gc);
        }
        _applyPMREM(t) {
          const e = this._renderer, n = e.autoClear;
          e.autoClear = false;
          for (let i = 1; i < this._lodPlanes.length; i++) {
            const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Su[(i - 1) % Su.length];
            this._blur(t, i - 1, i, s, a);
          }
          e.autoClear = n;
        }
        _blur(t, e, n, i, s) {
          const a = this._pingPongRenderTarget;
          this._halfBlur(t, a, e, n, i, "latitudinal", s), this._halfBlur(a, t, n, n, i, "longitudinal", s);
        }
        _halfBlur(t, e, n, i, s, a, o) {
          const c = this._renderer, l = this._blurMaterial;
          a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
          const h = 3, u = new Re(this._lodPlanes[i], l), d = l.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * hr - 1), w = s / _, m = isFinite(s) ? 1 + Math.floor(h * w) : hr;
          m > hr && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);
          const f = [];
          let b = 0;
          for (let A = 0; A < hr; ++A) {
            const B = A / w, S = Math.exp(-B * B / 2);
            f.push(S), A === 0 ? b += S : A < m && (b += 2 * S);
          }
          for (let A = 0; A < f.length; A++) f[A] = f[A] / b;
          d.envMap.value = t.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
          const { _lodMax: v } = this;
          d.dTheta.value = _, d.mipInt.value = v - n;
          const R = this._sizeLods[i], I = 3 * R * (i > v - Xr ? i - v + Xr : 0), y = 4 * (this._cubeSize - R);
          Aa(e, I, y, 3 * R, 2 * R), c.setRenderTarget(e), c.render(u, gc);
        }
      }
      function sv(r) {
        const t = [], e = [], n = [];
        let i = r;
        const s = r - Xr + 1 + yu.length;
        for (let a = 0; a < s; a++) {
          const o = Math.pow(2, i);
          e.push(o);
          let c = 1 / o;
          a > r - Xr ? c = yu[a - r + Xr - 1] : a === 0 && (c = 0), n.push(c);
          const l = 1 / (o - 2), h = -l, u = 1 + l, d = [
            h,
            h,
            u,
            h,
            u,
            u,
            h,
            h,
            u,
            u,
            h,
            u
          ], p = 6, _ = 6, w = 3, m = 2, f = 1, b = new Float32Array(w * _ * p), v = new Float32Array(m * _ * p), R = new Float32Array(f * _ * p);
          for (let y = 0; y < p; y++) {
            const A = y % 3 * 2 / 3 - 1, B = y > 2 ? 0 : -1, S = [
              A,
              B,
              0,
              A + 2 / 3,
              B,
              0,
              A + 2 / 3,
              B + 1,
              0,
              A,
              B,
              0,
              A + 2 / 3,
              B + 1,
              0,
              A,
              B + 1,
              0
            ];
            b.set(S, w * _ * y), v.set(d, m * _ * y);
            const T = [
              y,
              y,
              y,
              y,
              y,
              y
            ];
            R.set(T, f * _ * y);
          }
          const I = new sn();
          I.setAttribute("position", new rn(b, w)), I.setAttribute("uv", new rn(v, m)), I.setAttribute("faceIndex", new rn(R, f)), t.push(I), i > Xr && i--;
        }
        return {
          lodPlanes: t,
          sizeLods: e,
          sigmas: n
        };
      }
      function Mu(r, t, e) {
        const n = new Wi(r, t, e);
        return n.texture.mapping = bo, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
      }
      function Aa(r, t, e, n, i) {
        r.viewport.set(t, e, n, i), r.scissor.set(t, e, n, i);
      }
      function av(r, t, e) {
        const n = new Float32Array(hr), i = new C(0, 1, 0);
        return new Jn({
          name: "SphericalGaussianBlur",
          defines: {
            n: hr,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / e,
            CUBEUV_MAX_MIP: `${r}.0`
          },
          uniforms: {
            envMap: {
              value: null
            },
            samples: {
              value: 1
            },
            weights: {
              value: n
            },
            latitudinal: {
              value: false
            },
            dTheta: {
              value: 0
            },
            mipInt: {
              value: 0
            },
            poleAxis: {
              value: i
            }
          },
          vertexShader: Dl(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
          blending: yi,
          depthTest: false,
          depthWrite: false
        });
      }
      function Eu() {
        return new Jn({
          name: "EquirectangularToCubeUV",
          uniforms: {
            envMap: {
              value: null
            }
          },
          vertexShader: Dl(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
          blending: yi,
          depthTest: false,
          depthWrite: false
        });
      }
      function Tu() {
        return new Jn({
          name: "CubemapToCubeUV",
          uniforms: {
            envMap: {
              value: null
            },
            flipEnvMap: {
              value: -1
            }
          },
          vertexShader: Dl(),
          fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
          blending: yi,
          depthTest: false,
          depthWrite: false
        });
      }
      function Dl() {
        return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
      }
      function ov(r) {
        let t = /* @__PURE__ */ new WeakMap(), e = null;
        function n(o) {
          if (o && o.isTexture) {
            const c = o.mapping, l = c === el || c === nl, h = c === es || c === ns;
            if (l || h) if (o.isRenderTargetTexture && o.needsPMREMUpdate === true) {
              o.needsPMREMUpdate = false;
              let u = t.get(o);
              return e === null && (e = new bu(r)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), t.set(o, u), u.texture;
            } else {
              if (t.has(o)) return t.get(o).texture;
              {
                const u = o.image;
                if (l && u && u.height > 0 || h && u && i(u)) {
                  e === null && (e = new bu(r));
                  const d = l ? e.fromEquirectangular(o) : e.fromCubemap(o);
                  return t.set(o, d), o.addEventListener("dispose", s), d.texture;
                } else return null;
              }
            }
          }
          return o;
        }
        function i(o) {
          let c = 0;
          const l = 6;
          for (let h = 0; h < l; h++) o[h] !== void 0 && c++;
          return c === l;
        }
        function s(o) {
          const c = o.target;
          c.removeEventListener("dispose", s);
          const l = t.get(c);
          l !== void 0 && (t.delete(c), l.dispose());
        }
        function a() {
          t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
        }
        return {
          get: n,
          dispose: a
        };
      }
      function cv(r) {
        const t = {};
        function e(n) {
          if (t[n] !== void 0) return t[n];
          let i;
          switch (n) {
            case "WEBGL_depth_texture":
              i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
              break;
            case "EXT_texture_filter_anisotropic":
              i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
              break;
            case "WEBGL_compressed_texture_s3tc":
              i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
              break;
            case "WEBGL_compressed_texture_pvrtc":
              i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
              break;
            default:
              i = r.getExtension(n);
          }
          return t[n] = i, i;
        }
        return {
          has: function(n) {
            return e(n) !== null;
          },
          init: function(n) {
            n.isWebGL2 ? (e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance")) : (e("WEBGL_depth_texture"), e("OES_texture_float"), e("OES_texture_half_float"), e("OES_texture_half_float_linear"), e("OES_standard_derivatives"), e("OES_element_index_uint"), e("OES_vertex_array_object"), e("ANGLE_instanced_arrays")), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture");
          },
          get: function(n) {
            const i = e(n);
            return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
          }
        };
      }
      function lv(r, t, e, n) {
        const i = {}, s = /* @__PURE__ */ new WeakMap();
        function a(u) {
          const d = u.target;
          d.index !== null && t.remove(d.index);
          for (const _ in d.attributes) t.remove(d.attributes[_]);
          for (const _ in d.morphAttributes) {
            const w = d.morphAttributes[_];
            for (let m = 0, f = w.length; m < f; m++) t.remove(w[m]);
          }
          d.removeEventListener("dispose", a), delete i[d.id];
          const p = s.get(d);
          p && (t.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, e.memory.geometries--;
        }
        function o(u, d) {
          return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, e.memory.geometries++), d;
        }
        function c(u) {
          const d = u.attributes;
          for (const _ in d) t.update(d[_], r.ARRAY_BUFFER);
          const p = u.morphAttributes;
          for (const _ in p) {
            const w = p[_];
            for (let m = 0, f = w.length; m < f; m++) t.update(w[m], r.ARRAY_BUFFER);
          }
        }
        function l(u) {
          const d = [], p = u.index, _ = u.attributes.position;
          let w = 0;
          if (p !== null) {
            const b = p.array;
            w = p.version;
            for (let v = 0, R = b.length; v < R; v += 3) {
              const I = b[v + 0], y = b[v + 1], A = b[v + 2];
              d.push(I, y, y, A, A, I);
            }
          } else if (_ !== void 0) {
            const b = _.array;
            w = _.version;
            for (let v = 0, R = b.length / 3 - 1; v < R; v += 3) {
              const I = v + 0, y = v + 1, A = v + 2;
              d.push(I, y, y, A, A, I);
            }
          } else return;
          const m = new (af(d) ? pf : ff)(d, 1);
          m.version = w;
          const f = s.get(u);
          f && t.remove(f), s.set(u, m);
        }
        function h(u) {
          const d = s.get(u);
          if (d) {
            const p = u.index;
            p !== null && d.version < p.version && l(u);
          } else l(u);
          return s.get(u);
        }
        return {
          get: o,
          update: c,
          getWireframeAttribute: h
        };
      }
      function hv(r, t, e, n) {
        const i = n.isWebGL2;
        let s;
        function a(p) {
          s = p;
        }
        let o, c;
        function l(p) {
          o = p.type, c = p.bytesPerElement;
        }
        function h(p, _) {
          r.drawElements(s, _, o, p * c), e.update(_, s, 1);
        }
        function u(p, _, w) {
          if (w === 0) return;
          let m, f;
          if (i) m = r, f = "drawElementsInstanced";
          else if (m = t.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", m === null) {
            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            return;
          }
          m[f](s, _, o, p * c, w), e.update(_, s, w);
        }
        function d(p, _, w) {
          if (w === 0) return;
          const m = t.get("WEBGL_multi_draw");
          if (m === null) for (let f = 0; f < w; f++) this.render(p[f] / c, _[f]);
          else {
            m.multiDrawElementsWEBGL(s, _, 0, o, p, 0, w);
            let f = 0;
            for (let b = 0; b < w; b++) f += _[b];
            e.update(f, s, 1);
          }
        }
        this.setMode = a, this.setIndex = l, this.render = h, this.renderInstances = u, this.renderMultiDraw = d;
      }
      function uv(r) {
        const t = {
          geometries: 0,
          textures: 0
        }, e = {
          frame: 0,
          calls: 0,
          triangles: 0,
          points: 0,
          lines: 0
        };
        function n(s, a, o) {
          switch (e.calls++, a) {
            case r.TRIANGLES:
              e.triangles += o * (s / 3);
              break;
            case r.LINES:
              e.lines += o * (s / 2);
              break;
            case r.LINE_STRIP:
              e.lines += o * (s - 1);
              break;
            case r.LINE_LOOP:
              e.lines += o * s;
              break;
            case r.POINTS:
              e.points += o * s;
              break;
            default:
              console.error("THREE.WebGLInfo: Unknown draw mode:", a);
              break;
          }
        }
        function i() {
          e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
        }
        return {
          memory: t,
          render: e,
          programs: null,
          autoReset: true,
          reset: i,
          update: n
        };
      }
      function dv(r, t) {
        return r[0] - t[0];
      }
      function fv(r, t) {
        return Math.abs(t[1]) - Math.abs(r[1]);
      }
      function pv(r, t, e) {
        const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new ne(), o = [];
        for (let l = 0; l < 8; l++) o[l] = [
          l,
          0
        ];
        function c(l, h, u) {
          const d = l.morphTargetInfluences;
          if (t.isWebGL2 === true) {
            const p = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, _ = p !== void 0 ? p.length : 0;
            let w = s.get(h);
            if (w === void 0 || w.count !== _) {
              let D = function() {
                q.dispose(), s.delete(h), h.removeEventListener("dispose", D);
              };
              w !== void 0 && w.texture.dispose();
              const b = h.morphAttributes.position !== void 0, v = h.morphAttributes.normal !== void 0, R = h.morphAttributes.color !== void 0, I = h.morphAttributes.position || [], y = h.morphAttributes.normal || [], A = h.morphAttributes.color || [];
              let B = 0;
              b === true && (B = 1), v === true && (B = 2), R === true && (B = 3);
              let S = h.attributes.position.count * B, T = 1;
              S > t.maxTextureSize && (T = Math.ceil(S / t.maxTextureSize), S = t.maxTextureSize);
              const z = new Float32Array(S * T * 4 * _), q = new lf(z, S, T, _);
              q.type = _i, q.needsUpdate = true;
              const it = B * 4;
              for (let O = 0; O < _; O++) {
                const j = I[O], $ = y[O], K = A[O], Y = S * T * 4 * O;
                for (let J = 0; J < j.count; J++) {
                  const Q = J * it;
                  b === true && (a.fromBufferAttribute(j, J), z[Y + Q + 0] = a.x, z[Y + Q + 1] = a.y, z[Y + Q + 2] = a.z, z[Y + Q + 3] = 0), v === true && (a.fromBufferAttribute($, J), z[Y + Q + 4] = a.x, z[Y + Q + 5] = a.y, z[Y + Q + 6] = a.z, z[Y + Q + 7] = 0), R === true && (a.fromBufferAttribute(K, J), z[Y + Q + 8] = a.x, z[Y + Q + 9] = a.y, z[Y + Q + 10] = a.z, z[Y + Q + 11] = K.itemSize === 4 ? a.w : 1);
                }
              }
              w = {
                count: _,
                texture: q,
                size: new Ot(S, T)
              }, s.set(h, w), h.addEventListener("dispose", D);
            }
            let m = 0;
            for (let b = 0; b < d.length; b++) m += d[b];
            const f = h.morphTargetsRelative ? 1 : 1 - m;
            u.getUniforms().setValue(r, "morphTargetBaseInfluence", f), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", w.texture, e), u.getUniforms().setValue(r, "morphTargetsTextureSize", w.size);
          } else {
            const p = d === void 0 ? 0 : d.length;
            let _ = n[h.id];
            if (_ === void 0 || _.length !== p) {
              _ = [];
              for (let v = 0; v < p; v++) _[v] = [
                v,
                0
              ];
              n[h.id] = _;
            }
            for (let v = 0; v < p; v++) {
              const R = _[v];
              R[0] = v, R[1] = d[v];
            }
            _.sort(fv);
            for (let v = 0; v < 8; v++) v < p && _[v][1] ? (o[v][0] = _[v][0], o[v][1] = _[v][1]) : (o[v][0] = Number.MAX_SAFE_INTEGER, o[v][1] = 0);
            o.sort(dv);
            const w = h.morphAttributes.position, m = h.morphAttributes.normal;
            let f = 0;
            for (let v = 0; v < 8; v++) {
              const R = o[v], I = R[0], y = R[1];
              I !== Number.MAX_SAFE_INTEGER && y ? (w && h.getAttribute("morphTarget" + v) !== w[I] && h.setAttribute("morphTarget" + v, w[I]), m && h.getAttribute("morphNormal" + v) !== m[I] && h.setAttribute("morphNormal" + v, m[I]), i[v] = y, f += y) : (w && h.hasAttribute("morphTarget" + v) === true && h.deleteAttribute("morphTarget" + v), m && h.hasAttribute("morphNormal" + v) === true && h.deleteAttribute("morphNormal" + v), i[v] = 0);
            }
            const b = h.morphTargetsRelative ? 1 : 1 - f;
            u.getUniforms().setValue(r, "morphTargetBaseInfluence", b), u.getUniforms().setValue(r, "morphTargetInfluences", i);
          }
        }
        return {
          update: c
        };
      }
      function mv(r, t, e, n) {
        let i = /* @__PURE__ */ new WeakMap();
        function s(c) {
          const l = n.render.frame, h = c.geometry, u = t.get(c, h);
          if (i.get(u) !== l && (t.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === false && c.addEventListener("dispose", o), i.get(c) !== l && (e.update(c.instanceMatrix, r.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, r.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
            const d = c.skeleton;
            i.get(d) !== l && (d.update(), i.set(d, l));
          }
          return u;
        }
        function a() {
          i = /* @__PURE__ */ new WeakMap();
        }
        function o(c) {
          const l = c.target;
          l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
        }
        return {
          update: s,
          dispose: a
        };
      }
      class vf extends He {
        constructor(t, e, n, i, s, a, o, c, l, h) {
          if (h = h !== void 0 ? h : _r, h !== _r && h !== ss) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
          n === void 0 && h === _r && (n = zi), n === void 0 && h === ss && (n = mr), super(null, i, s, a, o, c, h, n, l), this.isDepthTexture = true, this.image = {
            width: t,
            height: e
          }, this.magFilter = o !== void 0 ? o : ze, this.minFilter = c !== void 0 ? c : ze, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
        }
        copy(t) {
          return super.copy(t), this.compareFunction = t.compareFunction, this;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
        }
      }
      const yf = new He(), xf = new vf(1, 1);
      xf.compareFunction = rf;
      const Sf = new lf(), bf = new t_(), Mf = new gf(), Au = [], Ru = [], Cu = new Float32Array(16), Pu = new Float32Array(9), Lu = new Float32Array(4);
      function _s(r, t, e) {
        const n = r[0];
        if (n <= 0 || n > 0) return r;
        const i = t * e;
        let s = Au[i];
        if (s === void 0 && (s = new Float32Array(i), Au[i] = s), t !== 0) {
          n.toArray(s, 0);
          for (let a = 1, o = 0; a !== t; ++a) o += e, r[a].toArray(s, o);
        }
        return s;
      }
      function Ie(r, t) {
        if (r.length !== t.length) return false;
        for (let e = 0, n = r.length; e < n; e++) if (r[e] !== t[e]) return false;
        return true;
      }
      function De(r, t) {
        for (let e = 0, n = t.length; e < n; e++) r[e] = t[e];
      }
      function Co(r, t) {
        let e = Ru[t];
        e === void 0 && (e = new Int32Array(t), Ru[t] = e);
        for (let n = 0; n !== t; ++n) e[n] = r.allocateTextureUnit();
        return e;
      }
      function _v(r, t) {
        const e = this.cache;
        e[0] !== t && (r.uniform1f(this.addr, t), e[0] = t);
      }
      function gv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
          if (Ie(e, t)) return;
          r.uniform2fv(this.addr, t), De(e, t);
        }
      }
      function wv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (r.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
        else {
          if (Ie(e, t)) return;
          r.uniform3fv(this.addr, t), De(e, t);
        }
      }
      function vv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
          if (Ie(e, t)) return;
          r.uniform4fv(this.addr, t), De(e, t);
        }
      }
      function yv(r, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
          if (Ie(e, t)) return;
          r.uniformMatrix2fv(this.addr, false, t), De(e, t);
        } else {
          if (Ie(e, n)) return;
          Lu.set(n), r.uniformMatrix2fv(this.addr, false, Lu), De(e, n);
        }
      }
      function xv(r, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
          if (Ie(e, t)) return;
          r.uniformMatrix3fv(this.addr, false, t), De(e, t);
        } else {
          if (Ie(e, n)) return;
          Pu.set(n), r.uniformMatrix3fv(this.addr, false, Pu), De(e, n);
        }
      }
      function Sv(r, t) {
        const e = this.cache, n = t.elements;
        if (n === void 0) {
          if (Ie(e, t)) return;
          r.uniformMatrix4fv(this.addr, false, t), De(e, t);
        } else {
          if (Ie(e, n)) return;
          Cu.set(n), r.uniformMatrix4fv(this.addr, false, Cu), De(e, n);
        }
      }
      function bv(r, t) {
        const e = this.cache;
        e[0] !== t && (r.uniform1i(this.addr, t), e[0] = t);
      }
      function Mv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
          if (Ie(e, t)) return;
          r.uniform2iv(this.addr, t), De(e, t);
        }
      }
      function Ev(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else {
          if (Ie(e, t)) return;
          r.uniform3iv(this.addr, t), De(e, t);
        }
      }
      function Tv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
          if (Ie(e, t)) return;
          r.uniform4iv(this.addr, t), De(e, t);
        }
      }
      function Av(r, t) {
        const e = this.cache;
        e[0] !== t && (r.uniform1ui(this.addr, t), e[0] = t);
      }
      function Rv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (r.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
        else {
          if (Ie(e, t)) return;
          r.uniform2uiv(this.addr, t), De(e, t);
        }
      }
      function Cv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (r.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
        else {
          if (Ie(e, t)) return;
          r.uniform3uiv(this.addr, t), De(e, t);
        }
      }
      function Pv(r, t) {
        const e = this.cache;
        if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (r.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
        else {
          if (Ie(e, t)) return;
          r.uniform4uiv(this.addr, t), De(e, t);
        }
      }
      function Lv(r, t, e) {
        const n = this.cache, i = e.allocateTextureUnit();
        n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
        const s = this.type === r.SAMPLER_2D_SHADOW ? xf : yf;
        e.setTexture2D(t || s, i);
      }
      function Iv(r, t, e) {
        const n = this.cache, i = e.allocateTextureUnit();
        n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || bf, i);
      }
      function Dv(r, t, e) {
        const n = this.cache, i = e.allocateTextureUnit();
        n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || Mf, i);
      }
      function Uv(r, t, e) {
        const n = this.cache, i = e.allocateTextureUnit();
        n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Sf, i);
      }
      function Nv(r) {
        switch (r) {
          case 5126:
            return _v;
          case 35664:
            return gv;
          case 35665:
            return wv;
          case 35666:
            return vv;
          case 35674:
            return yv;
          case 35675:
            return xv;
          case 35676:
            return Sv;
          case 5124:
          case 35670:
            return bv;
          case 35667:
          case 35671:
            return Mv;
          case 35668:
          case 35672:
            return Ev;
          case 35669:
          case 35673:
            return Tv;
          case 5125:
            return Av;
          case 36294:
            return Rv;
          case 36295:
            return Cv;
          case 36296:
            return Pv;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Lv;
          case 35679:
          case 36299:
          case 36307:
            return Iv;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Dv;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Uv;
        }
      }
      function Fv(r, t) {
        r.uniform1fv(this.addr, t);
      }
      function Ov(r, t) {
        const e = _s(t, this.size, 2);
        r.uniform2fv(this.addr, e);
      }
      function Bv(r, t) {
        const e = _s(t, this.size, 3);
        r.uniform3fv(this.addr, e);
      }
      function zv(r, t) {
        const e = _s(t, this.size, 4);
        r.uniform4fv(this.addr, e);
      }
      function Hv(r, t) {
        const e = _s(t, this.size, 4);
        r.uniformMatrix2fv(this.addr, false, e);
      }
      function Gv(r, t) {
        const e = _s(t, this.size, 9);
        r.uniformMatrix3fv(this.addr, false, e);
      }
      function kv(r, t) {
        const e = _s(t, this.size, 16);
        r.uniformMatrix4fv(this.addr, false, e);
      }
      function Vv(r, t) {
        r.uniform1iv(this.addr, t);
      }
      function Wv(r, t) {
        r.uniform2iv(this.addr, t);
      }
      function jv(r, t) {
        r.uniform3iv(this.addr, t);
      }
      function Xv(r, t) {
        r.uniform4iv(this.addr, t);
      }
      function qv(r, t) {
        r.uniform1uiv(this.addr, t);
      }
      function Yv(r, t) {
        r.uniform2uiv(this.addr, t);
      }
      function Kv(r, t) {
        r.uniform3uiv(this.addr, t);
      }
      function Jv(r, t) {
        r.uniform4uiv(this.addr, t);
      }
      function $v(r, t, e) {
        const n = this.cache, i = t.length, s = Co(e, i);
        Ie(n, s) || (r.uniform1iv(this.addr, s), De(n, s));
        for (let a = 0; a !== i; ++a) e.setTexture2D(t[a] || yf, s[a]);
      }
      function Zv(r, t, e) {
        const n = this.cache, i = t.length, s = Co(e, i);
        Ie(n, s) || (r.uniform1iv(this.addr, s), De(n, s));
        for (let a = 0; a !== i; ++a) e.setTexture3D(t[a] || bf, s[a]);
      }
      function Qv(r, t, e) {
        const n = this.cache, i = t.length, s = Co(e, i);
        Ie(n, s) || (r.uniform1iv(this.addr, s), De(n, s));
        for (let a = 0; a !== i; ++a) e.setTextureCube(t[a] || Mf, s[a]);
      }
      function ty(r, t, e) {
        const n = this.cache, i = t.length, s = Co(e, i);
        Ie(n, s) || (r.uniform1iv(this.addr, s), De(n, s));
        for (let a = 0; a !== i; ++a) e.setTexture2DArray(t[a] || Sf, s[a]);
      }
      function ey(r) {
        switch (r) {
          case 5126:
            return Fv;
          case 35664:
            return Ov;
          case 35665:
            return Bv;
          case 35666:
            return zv;
          case 35674:
            return Hv;
          case 35675:
            return Gv;
          case 35676:
            return kv;
          case 5124:
          case 35670:
            return Vv;
          case 35667:
          case 35671:
            return Wv;
          case 35668:
          case 35672:
            return jv;
          case 35669:
          case 35673:
            return Xv;
          case 5125:
            return qv;
          case 36294:
            return Yv;
          case 36295:
            return Kv;
          case 36296:
            return Jv;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return $v;
          case 35679:
          case 36299:
          case 36307:
            return Zv;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Qv;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return ty;
        }
      }
      class ny {
        constructor(t, e, n) {
          this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Nv(e.type);
        }
      }
      class iy {
        constructor(t, e, n) {
          this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = ey(e.type);
        }
      }
      class ry {
        constructor(t) {
          this.id = t, this.seq = [], this.map = {};
        }
        setValue(t, e, n) {
          const i = this.seq;
          for (let s = 0, a = i.length; s !== a; ++s) {
            const o = i[s];
            o.setValue(t, e[o.id], n);
          }
        }
      }
      const xc = /(\w+)(\])?(\[|\.)?/g;
      function Iu(r, t) {
        r.seq.push(t), r.map[t.id] = t;
      }
      function sy(r, t, e) {
        const n = r.name, i = n.length;
        for (xc.lastIndex = 0; ; ) {
          const s = xc.exec(n), a = xc.lastIndex;
          let o = s[1];
          const c = s[2] === "]", l = s[3];
          if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
            Iu(e, l === void 0 ? new ny(o, r, t) : new iy(o, r, t));
            break;
          } else {
            let u = e.map[o];
            u === void 0 && (u = new ry(o), Iu(e, u)), e = u;
          }
        }
      }
      class $a {
        constructor(t, e) {
          this.seq = [], this.map = {};
          const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
          for (let i = 0; i < n; ++i) {
            const s = t.getActiveUniform(e, i), a = t.getUniformLocation(e, s.name);
            sy(s, a, this);
          }
        }
        setValue(t, e, n, i) {
          const s = this.map[e];
          s !== void 0 && s.setValue(t, n, i);
        }
        setOptional(t, e, n) {
          const i = e[n];
          i !== void 0 && this.setValue(t, n, i);
        }
        static upload(t, e, n, i) {
          for (let s = 0, a = e.length; s !== a; ++s) {
            const o = e[s], c = n[o.id];
            c.needsUpdate !== false && o.setValue(t, c.value, i);
          }
        }
        static seqWithValue(t, e) {
          const n = [];
          for (let i = 0, s = t.length; i !== s; ++i) {
            const a = t[i];
            a.id in e && n.push(a);
          }
          return n;
        }
      }
      function Du(r, t, e) {
        const n = r.createShader(t);
        return r.shaderSource(n, e), r.compileShader(n), n;
      }
      const ay = 37297;
      let oy = 0;
      function cy(r, t) {
        const e = r.split(`
`), n = [], i = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
        for (let a = i; a < s; a++) {
          const o = a + 1;
          n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
        }
        return n.join(`
`);
      }
      function ly(r) {
        const t = ie.getPrimaries(ie.workingColorSpace), e = ie.getPrimaries(r);
        let n;
        switch (t === e ? n = "" : t === ao && e === so ? n = "LinearDisplayP3ToLinearSRGB" : t === so && e === ao && (n = "LinearSRGBToLinearDisplayP3"), r) {
          case ke:
          case Mo:
            return [
              n,
              "LinearTransferOETF"
            ];
          case Se:
          case Pl:
            return [
              n,
              "sRGBTransferOETF"
            ];
          default:
            return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [
              n,
              "LinearTransferOETF"
            ];
        }
      }
      function Uu(r, t, e) {
        const n = r.getShaderParameter(t, r.COMPILE_STATUS), i = r.getShaderInfoLog(t).trim();
        if (n && i === "") return "";
        const s = /ERROR: 0:(\d+)/.exec(i);
        if (s) {
          const a = parseInt(s[1]);
          return e.toUpperCase() + `

` + i + `

` + cy(r.getShaderSource(t), a);
        } else return i;
      }
      function hy(r, t) {
        const e = ly(t);
        return `vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
      }
      function uy(r, t) {
        let e;
        switch (t) {
          case lm:
            e = "Linear";
            break;
          case hm:
            e = "Reinhard";
            break;
          case um:
            e = "OptimizedCineon";
            break;
          case Wd:
            e = "ACESFilmic";
            break;
          case fm:
            e = "AgX";
            break;
          case dm:
            e = "Custom";
            break;
          default:
            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
        }
        return "vec3 " + r + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
      }
      function dy(r) {
        return [
          r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
          (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
          r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
          (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
        ].filter(qr).join(`
`);
      }
      function fy(r) {
        return [
          r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : ""
        ].filter(qr).join(`
`);
      }
      function py(r) {
        const t = [];
        for (const e in r) {
          const n = r[e];
          n !== false && t.push("#define " + e + " " + n);
        }
        return t.join(`
`);
      }
      function my(r, t) {
        const e = {}, n = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES);
        for (let i = 0; i < n; i++) {
          const s = r.getActiveAttrib(t, i), a = s.name;
          let o = 1;
          s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), e[a] = {
            type: s.type,
            location: r.getAttribLocation(t, a),
            locationSize: o
          };
        }
        return e;
      }
      function qr(r) {
        return r !== "";
      }
      function Nu(r, t) {
        const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
        return r.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
      }
      function Fu(r, t) {
        return r.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
      }
      const _y = /^[ \t]*#include +<([\w\d./]+)>/gm;
      function cl(r) {
        return r.replace(_y, wy);
      }
      const gy = /* @__PURE__ */ new Map([
        [
          "encodings_fragment",
          "colorspace_fragment"
        ],
        [
          "encodings_pars_fragment",
          "colorspace_pars_fragment"
        ],
        [
          "output_fragment",
          "opaque_fragment"
        ]
      ]);
      function wy(r, t) {
        let e = Ht[t];
        if (e === void 0) {
          const n = gy.get(t);
          if (n !== void 0) e = Ht[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
          else throw new Error("Can not resolve #include <" + t + ">");
        }
        return cl(e);
      }
      const vy = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
      function Ou(r) {
        return r.replace(vy, yy);
      }
      function yy(r, t, e, n) {
        let i = "";
        for (let s = parseInt(t); s < parseInt(e); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
        return i;
      }
      function Bu(r) {
        let t = "precision " + r.precision + ` float;
precision ` + r.precision + " int;";
        return r.precision === "highp" ? t += `
#define HIGH_PRECISION` : r.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
      }
      function xy(r) {
        let t = "SHADOWMAP_TYPE_BASIC";
        return r.shadowMapType === Gd ? t = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === kd ? t = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === hi && (t = "SHADOWMAP_TYPE_VSM"), t;
      }
      function Sy(r) {
        let t = "ENVMAP_TYPE_CUBE";
        if (r.envMap) switch (r.envMapMode) {
          case es:
          case ns:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case bo:
            t = "ENVMAP_TYPE_CUBE_UV";
            break;
        }
        return t;
      }
      function by(r) {
        let t = "ENVMAP_MODE_REFLECTION";
        if (r.envMap) switch (r.envMapMode) {
          case ns:
            t = "ENVMAP_MODE_REFRACTION";
            break;
        }
        return t;
      }
      function My(r) {
        let t = "ENVMAP_BLENDING_NONE";
        if (r.envMap) switch (r.combine) {
          case Vd:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case om:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case cm:
            t = "ENVMAP_BLENDING_ADD";
            break;
        }
        return t;
      }
      function Ey(r) {
        const t = r.envMapCubeUVHeight;
        if (t === null) return null;
        const e = Math.log2(t) - 2, n = 1 / t;
        return {
          texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
          texelHeight: n,
          maxMip: e
        };
      }
      function Ty(r, t, e, n) {
        const i = r.getContext(), s = e.defines;
        let a = e.vertexShader, o = e.fragmentShader;
        const c = xy(e), l = Sy(e), h = by(e), u = My(e), d = Ey(e), p = e.isWebGL2 ? "" : dy(e), _ = fy(e), w = py(s), m = i.createProgram();
        let f, b, v = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
        e.isRawShaderMaterial ? (f = [
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          w
        ].filter(qr).join(`
`), f.length > 0 && (f += `
`), b = [
          p,
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          w
        ].filter(qr).join(`
`), b.length > 0 && (b += `
`)) : (f = [
          Bu(e),
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          w,
          e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
          e.batching ? "#define USE_BATCHING" : "",
          e.instancing ? "#define USE_INSTANCING" : "",
          e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          e.useFog && e.fog ? "#define USE_FOG" : "",
          e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
          e.map ? "#define USE_MAP" : "",
          e.envMap ? "#define USE_ENVMAP" : "",
          e.envMap ? "#define " + h : "",
          e.lightMap ? "#define USE_LIGHTMAP" : "",
          e.aoMap ? "#define USE_AOMAP" : "",
          e.bumpMap ? "#define USE_BUMPMAP" : "",
          e.normalMap ? "#define USE_NORMALMAP" : "",
          e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
          e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          e.anisotropy ? "#define USE_ANISOTROPY" : "",
          e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          e.specularMap ? "#define USE_SPECULARMAP" : "",
          e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          e.metalnessMap ? "#define USE_METALNESSMAP" : "",
          e.alphaMap ? "#define USE_ALPHAMAP" : "",
          e.alphaHash ? "#define USE_ALPHAHASH" : "",
          e.transmission ? "#define USE_TRANSMISSION" : "",
          e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          e.mapUv ? "#define MAP_UV " + e.mapUv : "",
          e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
          e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
          e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
          e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
          e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
          e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
          e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
          e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
          e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
          e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
          e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
          e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
          e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
          e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
          e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
          e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
          e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
          e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
          e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
          e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
          e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
          e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
          e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "",
          e.vertexColors ? "#define USE_COLOR" : "",
          e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          e.vertexUv1s ? "#define USE_UV1" : "",
          e.vertexUv2s ? "#define USE_UV2" : "",
          e.vertexUv3s ? "#define USE_UV3" : "",
          e.pointsUvs ? "#define USE_POINTS_UV" : "",
          e.flatShading ? "#define FLAT_SHADED" : "",
          e.skinning ? "#define USE_SKINNING" : "",
          e.morphTargets ? "#define USE_MORPHTARGETS" : "",
          e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "",
          e.morphColors && e.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
          e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
          e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
          e.morphTargetsCount > 0 && e.isWebGL2 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
          e.doubleSided ? "#define DOUBLE_SIDED" : "",
          e.flipSided ? "#define FLIP_SIDED" : "",
          e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          e.shadowMapEnabled ? "#define " + c : "",
          e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          e.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "	attribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "	attribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_UV1",
          "	attribute vec2 uv1;",
          "#endif",
          "#ifdef USE_UV2",
          "	attribute vec2 uv2;",
          "#endif",
          "#ifdef USE_UV3",
          "	attribute vec2 uv3;",
          "#endif",
          "#ifdef USE_TANGENT",
          "	attribute vec4 tangent;",
          "#endif",
          "#if defined( USE_COLOR_ALPHA )",
          "	attribute vec4 color;",
          "#elif defined( USE_COLOR )",
          "	attribute vec3 color;",
          "#endif",
          "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
          "	attribute vec3 morphTarget0;",
          "	attribute vec3 morphTarget1;",
          "	attribute vec3 morphTarget2;",
          "	attribute vec3 morphTarget3;",
          "	#ifdef USE_MORPHNORMALS",
          "		attribute vec3 morphNormal0;",
          "		attribute vec3 morphNormal1;",
          "		attribute vec3 morphNormal2;",
          "		attribute vec3 morphNormal3;",
          "	#else",
          "		attribute vec3 morphTarget4;",
          "		attribute vec3 morphTarget5;",
          "		attribute vec3 morphTarget6;",
          "		attribute vec3 morphTarget7;",
          "	#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "	attribute vec4 skinIndex;",
          "	attribute vec4 skinWeight;",
          "#endif",
          `
`
        ].filter(qr).join(`
`), b = [
          p,
          Bu(e),
          "#define SHADER_TYPE " + e.shaderType,
          "#define SHADER_NAME " + e.shaderName,
          w,
          e.useFog && e.fog ? "#define USE_FOG" : "",
          e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
          e.map ? "#define USE_MAP" : "",
          e.matcap ? "#define USE_MATCAP" : "",
          e.envMap ? "#define USE_ENVMAP" : "",
          e.envMap ? "#define " + l : "",
          e.envMap ? "#define " + h : "",
          e.envMap ? "#define " + u : "",
          d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
          d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
          d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
          e.lightMap ? "#define USE_LIGHTMAP" : "",
          e.aoMap ? "#define USE_AOMAP" : "",
          e.bumpMap ? "#define USE_BUMPMAP" : "",
          e.normalMap ? "#define USE_NORMALMAP" : "",
          e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
          e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
          e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          e.anisotropy ? "#define USE_ANISOTROPY" : "",
          e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
          e.clearcoat ? "#define USE_CLEARCOAT" : "",
          e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          e.iridescence ? "#define USE_IRIDESCENCE" : "",
          e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
          e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
          e.specularMap ? "#define USE_SPECULARMAP" : "",
          e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
          e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
          e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          e.metalnessMap ? "#define USE_METALNESSMAP" : "",
          e.alphaMap ? "#define USE_ALPHAMAP" : "",
          e.alphaTest ? "#define USE_ALPHATEST" : "",
          e.alphaHash ? "#define USE_ALPHAHASH" : "",
          e.sheen ? "#define USE_SHEEN" : "",
          e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
          e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
          e.transmission ? "#define USE_TRANSMISSION" : "",
          e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
          e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "",
          e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
          e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
          e.vertexUv1s ? "#define USE_UV1" : "",
          e.vertexUv2s ? "#define USE_UV2" : "",
          e.vertexUv3s ? "#define USE_UV3" : "",
          e.pointsUvs ? "#define USE_POINTS_UV" : "",
          e.gradientMap ? "#define USE_GRADIENTMAP" : "",
          e.flatShading ? "#define FLAT_SHADED" : "",
          e.doubleSided ? "#define DOUBLE_SIDED" : "",
          e.flipSided ? "#define FLIP_SIDED" : "",
          e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          e.shadowMapEnabled ? "#define " + c : "",
          e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
          e.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
          e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
          e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          e.logarithmicDepthBuffer && e.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          e.toneMapping !== Gi ? "#define TONE_MAPPING" : "",
          e.toneMapping !== Gi ? Ht.tonemapping_pars_fragment : "",
          e.toneMapping !== Gi ? uy("toneMapping", e.toneMapping) : "",
          e.dithering ? "#define DITHERING" : "",
          e.opaque ? "#define OPAQUE" : "",
          Ht.colorspace_pars_fragment,
          hy("linearToOutputTexel", e.outputColorSpace),
          e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
          `
`
        ].filter(qr).join(`
`)), a = cl(a), a = Nu(a, e), a = Fu(a, e), o = cl(o), o = Nu(o, e), o = Fu(o, e), a = Ou(a), o = Ou(o), e.isWebGL2 && e.isRawShaderMaterial !== true && (v = `#version 300 es
`, f = [
          _,
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture"
        ].join(`
`) + `
` + f, b = [
          "precision mediump sampler2DArray;",
          "#define varying in",
          e.glslVersion === nu ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
          e.glslVersion === nu ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad"
        ].join(`
`) + `
` + b);
        const R = v + f + a, I = v + b + o, y = Du(i, i.VERTEX_SHADER, R), A = Du(i, i.FRAGMENT_SHADER, I);
        i.attachShader(m, y), i.attachShader(m, A), e.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, e.index0AttributeName) : e.morphTargets === true && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m);
        function B(q) {
          if (r.debug.checkShaderErrors) {
            const it = i.getProgramInfoLog(m).trim(), D = i.getShaderInfoLog(y).trim(), O = i.getShaderInfoLog(A).trim();
            let j = true, $ = true;
            if (i.getProgramParameter(m, i.LINK_STATUS) === false) if (j = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, m, y, A);
            else {
              const K = Uu(i, y, "vertex"), Y = Uu(i, A, "fragment");
              console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + `

Program Info Log: ` + it + `
` + K + `
` + Y);
            }
            else it !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", it) : (D === "" || O === "") && ($ = false);
            $ && (q.diagnostics = {
              runnable: j,
              programLog: it,
              vertexShader: {
                log: D,
                prefix: f
              },
              fragmentShader: {
                log: O,
                prefix: b
              }
            });
          }
          i.deleteShader(y), i.deleteShader(A), S = new $a(i, m), T = my(i, m);
        }
        let S;
        this.getUniforms = function() {
          return S === void 0 && B(this), S;
        };
        let T;
        this.getAttributes = function() {
          return T === void 0 && B(this), T;
        };
        let z = e.rendererExtensionParallelShaderCompile === false;
        return this.isReady = function() {
          return z === false && (z = i.getProgramParameter(m, ay)), z;
        }, this.destroy = function() {
          n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
        }, this.type = e.shaderType, this.name = e.shaderName, this.id = oy++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = y, this.fragmentShader = A, this;
      }
      let Ay = 0;
      class Ry {
        constructor() {
          this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
        }
        update(t) {
          const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
          return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
        }
        remove(t) {
          const e = this.materialCache.get(t);
          for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
          return this.materialCache.delete(t), this;
        }
        getVertexShaderID(t) {
          return this._getShaderStage(t.vertexShader).id;
        }
        getFragmentShaderID(t) {
          return this._getShaderStage(t.fragmentShader).id;
        }
        dispose() {
          this.shaderCache.clear(), this.materialCache.clear();
        }
        _getShaderCacheForMaterial(t) {
          const e = this.materialCache;
          let n = e.get(t);
          return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
        }
        _getShaderStage(t) {
          const e = this.shaderCache;
          let n = e.get(t);
          return n === void 0 && (n = new Cy(t), e.set(t, n)), n;
        }
      }
      class Cy {
        constructor(t) {
          this.id = Ay++, this.code = t, this.usedTimes = 0;
        }
      }
      function Py(r, t, e, n, i, s, a) {
        const o = new uf(), c = new Ry(), l = [], h = i.isWebGL2, u = i.logarithmicDepthBuffer, d = i.vertexTextures;
        let p = i.precision;
        const _ = {
          MeshDepthMaterial: "depth",
          MeshDistanceMaterial: "distanceRGBA",
          MeshNormalMaterial: "normal",
          MeshBasicMaterial: "basic",
          MeshLambertMaterial: "lambert",
          MeshPhongMaterial: "phong",
          MeshToonMaterial: "toon",
          MeshStandardMaterial: "physical",
          MeshPhysicalMaterial: "physical",
          MeshMatcapMaterial: "matcap",
          LineBasicMaterial: "basic",
          LineDashedMaterial: "dashed",
          PointsMaterial: "points",
          ShadowMaterial: "shadow",
          SpriteMaterial: "sprite"
        };
        function w(S) {
          return S === 0 ? "uv" : `uv${S}`;
        }
        function m(S, T, z, q, it) {
          const D = q.fog, O = it.geometry, j = S.isMeshStandardMaterial ? q.environment : null, $ = (S.isMeshStandardMaterial ? e : t).get(S.envMap || j), K = $ && $.mapping === bo ? $.image.height : null, Y = _[S.type];
          S.precision !== null && (p = i.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
          const J = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Q = J !== void 0 ? J.length : 0;
          let lt = 0;
          O.morphAttributes.position !== void 0 && (lt = 1), O.morphAttributes.normal !== void 0 && (lt = 2), O.morphAttributes.color !== void 0 && (lt = 3);
          let X, Z, ut, _t;
          if (Y) {
            const $e = cn[Y];
            X = $e.vertexShader, Z = $e.fragmentShader;
          } else X = S.vertexShader, Z = S.fragmentShader, c.update(S), ut = c.getVertexShaderID(S), _t = c.getFragmentShaderID(S);
          const ft = r.getRenderTarget(), Rt = it.isInstancedMesh === true, Dt = it.isBatchedMesh === true, Et = !!S.map, Gt = !!S.matcap, H = !!$, Je = !!S.aoMap, bt = !!S.lightMap, Ut = !!S.bumpMap, wt = !!S.normalMap, _e = !!S.displacementMap, kt = !!S.emissiveMap, E = !!S.metalnessMap, x = !!S.roughnessMap, k = S.anisotropy > 0, nt = S.clearcoat > 0, et = S.iridescence > 0, rt = S.sheen > 0, vt = S.transmission > 0, ht = k && !!S.anisotropyMap, pt = nt && !!S.clearcoatMap, Ct = nt && !!S.clearcoatNormalMap, Vt = nt && !!S.clearcoatRoughnessMap, tt = et && !!S.iridescenceMap, ce = et && !!S.iridescenceThicknessMap, $t = rt && !!S.sheenColorMap, It = rt && !!S.sheenRoughnessMap, xt = !!S.specularMap, mt = !!S.specularColorMap, zt = !!S.specularIntensityMap, se = vt && !!S.transmissionMap, Me = vt && !!S.thicknessMap, Xt = !!S.gradientMap, at = !!S.alphaMap, L = S.alphaTest > 0, ot = !!S.alphaHash, ct = !!S.extensions, Pt = !!O.attributes.uv1, Mt = !!O.attributes.uv2, he = !!O.attributes.uv3;
          let ue = Gi;
          return S.toneMapped && (ft === null || ft.isXRRenderTarget === true) && (ue = r.toneMapping), {
            isWebGL2: h,
            shaderID: Y,
            shaderType: S.type,
            shaderName: S.name,
            vertexShader: X,
            fragmentShader: Z,
            defines: S.defines,
            customVertexShaderID: ut,
            customFragmentShaderID: _t,
            isRawShaderMaterial: S.isRawShaderMaterial === true,
            glslVersion: S.glslVersion,
            precision: p,
            batching: Dt,
            instancing: Rt,
            instancingColor: Rt && it.instanceColor !== null,
            supportsVertexTextures: d,
            outputColorSpace: ft === null ? r.outputColorSpace : ft.isXRRenderTarget === true ? ft.texture.colorSpace : ke,
            map: Et,
            matcap: Gt,
            envMap: H,
            envMapMode: H && $.mapping,
            envMapCubeUVHeight: K,
            aoMap: Je,
            lightMap: bt,
            bumpMap: Ut,
            normalMap: wt,
            displacementMap: d && _e,
            emissiveMap: kt,
            normalMapObjectSpace: wt && S.normalMapType === Am,
            normalMapTangentSpace: wt && S.normalMapType === nf,
            metalnessMap: E,
            roughnessMap: x,
            anisotropy: k,
            anisotropyMap: ht,
            clearcoat: nt,
            clearcoatMap: pt,
            clearcoatNormalMap: Ct,
            clearcoatRoughnessMap: Vt,
            iridescence: et,
            iridescenceMap: tt,
            iridescenceThicknessMap: ce,
            sheen: rt,
            sheenColorMap: $t,
            sheenRoughnessMap: It,
            specularMap: xt,
            specularColorMap: mt,
            specularIntensityMap: zt,
            transmission: vt,
            transmissionMap: se,
            thicknessMap: Me,
            gradientMap: Xt,
            opaque: S.transparent === false && S.blending === Kr,
            alphaMap: at,
            alphaTest: L,
            alphaHash: ot,
            combine: S.combine,
            mapUv: Et && w(S.map.channel),
            aoMapUv: Je && w(S.aoMap.channel),
            lightMapUv: bt && w(S.lightMap.channel),
            bumpMapUv: Ut && w(S.bumpMap.channel),
            normalMapUv: wt && w(S.normalMap.channel),
            displacementMapUv: _e && w(S.displacementMap.channel),
            emissiveMapUv: kt && w(S.emissiveMap.channel),
            metalnessMapUv: E && w(S.metalnessMap.channel),
            roughnessMapUv: x && w(S.roughnessMap.channel),
            anisotropyMapUv: ht && w(S.anisotropyMap.channel),
            clearcoatMapUv: pt && w(S.clearcoatMap.channel),
            clearcoatNormalMapUv: Ct && w(S.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: Vt && w(S.clearcoatRoughnessMap.channel),
            iridescenceMapUv: tt && w(S.iridescenceMap.channel),
            iridescenceThicknessMapUv: ce && w(S.iridescenceThicknessMap.channel),
            sheenColorMapUv: $t && w(S.sheenColorMap.channel),
            sheenRoughnessMapUv: It && w(S.sheenRoughnessMap.channel),
            specularMapUv: xt && w(S.specularMap.channel),
            specularColorMapUv: mt && w(S.specularColorMap.channel),
            specularIntensityMapUv: zt && w(S.specularIntensityMap.channel),
            transmissionMapUv: se && w(S.transmissionMap.channel),
            thicknessMapUv: Me && w(S.thicknessMap.channel),
            alphaMapUv: at && w(S.alphaMap.channel),
            vertexTangents: !!O.attributes.tangent && (wt || k),
            vertexColors: S.vertexColors,
            vertexAlphas: S.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4,
            vertexUv1s: Pt,
            vertexUv2s: Mt,
            vertexUv3s: he,
            pointsUvs: it.isPoints === true && !!O.attributes.uv && (Et || at),
            fog: !!D,
            useFog: S.fog === true,
            fogExp2: D && D.isFogExp2,
            flatShading: S.flatShading === true,
            sizeAttenuation: S.sizeAttenuation === true,
            logarithmicDepthBuffer: u,
            skinning: it.isSkinnedMesh === true,
            morphTargets: O.morphAttributes.position !== void 0,
            morphNormals: O.morphAttributes.normal !== void 0,
            morphColors: O.morphAttributes.color !== void 0,
            morphTargetsCount: Q,
            morphTextureStride: lt,
            numDirLights: T.directional.length,
            numPointLights: T.point.length,
            numSpotLights: T.spot.length,
            numSpotLightMaps: T.spotLightMap.length,
            numRectAreaLights: T.rectArea.length,
            numHemiLights: T.hemi.length,
            numDirLightShadows: T.directionalShadowMap.length,
            numPointLightShadows: T.pointShadowMap.length,
            numSpotLightShadows: T.spotShadowMap.length,
            numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
            numLightProbes: T.numLightProbes,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: S.dithering,
            shadowMapEnabled: r.shadowMap.enabled && z.length > 0,
            shadowMapType: r.shadowMap.type,
            toneMapping: ue,
            useLegacyLights: r._useLegacyLights,
            decodeVideoTexture: Et && S.map.isVideoTexture === true && ie.getTransfer(S.map.colorSpace) === me,
            premultipliedAlpha: S.premultipliedAlpha,
            doubleSided: S.side === On,
            flipSided: S.side === hn,
            useDepthPacking: S.depthPacking >= 0,
            depthPacking: S.depthPacking || 0,
            index0AttributeName: S.index0AttributeName,
            extensionDerivatives: ct && S.extensions.derivatives === true,
            extensionFragDepth: ct && S.extensions.fragDepth === true,
            extensionDrawBuffers: ct && S.extensions.drawBuffers === true,
            extensionShaderTextureLOD: ct && S.extensions.shaderTextureLOD === true,
            extensionClipCullDistance: ct && S.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
            rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
            rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
            rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: S.customProgramCacheKey()
          };
        }
        function f(S) {
          const T = [];
          if (S.shaderID ? T.push(S.shaderID) : (T.push(S.customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0) for (const z in S.defines) T.push(z), T.push(S.defines[z]);
          return S.isRawShaderMaterial === false && (b(T, S), v(T, S), T.push(r.outputColorSpace)), T.push(S.customProgramCacheKey), T.join();
        }
        function b(S, T) {
          S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T.envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T.aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T.emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T.anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T.clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv), S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T.specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T.morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T.numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T.numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T.numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T.numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T.toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T.depthPacking);
        }
        function v(S, T) {
          o.disableAll(), T.isWebGL2 && o.enable(0), T.supportsVertexTextures && o.enable(1), T.instancing && o.enable(2), T.instancingColor && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), S.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.skinning && o.enable(4), T.morphTargets && o.enable(5), T.morphNormals && o.enable(6), T.morphColors && o.enable(7), T.premultipliedAlpha && o.enable(8), T.shadowMapEnabled && o.enable(9), T.useLegacyLights && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), S.push(o.mask);
        }
        function R(S) {
          const T = _[S.type];
          let z;
          if (T) {
            const q = cn[T];
            z = Ao.clone(q.uniforms);
          } else z = S.uniforms;
          return z;
        }
        function I(S, T) {
          let z;
          for (let q = 0, it = l.length; q < it; q++) {
            const D = l[q];
            if (D.cacheKey === T) {
              z = D, ++z.usedTimes;
              break;
            }
          }
          return z === void 0 && (z = new Ty(r, T, S, s), l.push(z)), z;
        }
        function y(S) {
          if (--S.usedTimes === 0) {
            const T = l.indexOf(S);
            l[T] = l[l.length - 1], l.pop(), S.destroy();
          }
        }
        function A(S) {
          c.remove(S);
        }
        function B() {
          c.dispose();
        }
        return {
          getParameters: m,
          getProgramCacheKey: f,
          getUniforms: R,
          acquireProgram: I,
          releaseProgram: y,
          releaseShaderCache: A,
          programs: l,
          dispose: B
        };
      }
      function Ly() {
        let r = /* @__PURE__ */ new WeakMap();
        function t(s) {
          let a = r.get(s);
          return a === void 0 && (a = {}, r.set(s, a)), a;
        }
        function e(s) {
          r.delete(s);
        }
        function n(s, a, o) {
          r.get(s)[a] = o;
        }
        function i() {
          r = /* @__PURE__ */ new WeakMap();
        }
        return {
          get: t,
          remove: e,
          update: n,
          dispose: i
        };
      }
      function Iy(r, t) {
        return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.material.id !== t.material.id ? r.material.id - t.material.id : r.z !== t.z ? r.z - t.z : r.id - t.id;
      }
      function zu(r, t) {
        return r.groupOrder !== t.groupOrder ? r.groupOrder - t.groupOrder : r.renderOrder !== t.renderOrder ? r.renderOrder - t.renderOrder : r.z !== t.z ? t.z - r.z : r.id - t.id;
      }
      function Hu() {
        const r = [];
        let t = 0;
        const e = [], n = [], i = [];
        function s() {
          t = 0, e.length = 0, n.length = 0, i.length = 0;
        }
        function a(u, d, p, _, w, m) {
          let f = r[t];
          return f === void 0 ? (f = {
            id: u.id,
            object: u,
            geometry: d,
            material: p,
            groupOrder: _,
            renderOrder: u.renderOrder,
            z: w,
            group: m
          }, r[t] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = _, f.renderOrder = u.renderOrder, f.z = w, f.group = m), t++, f;
        }
        function o(u, d, p, _, w, m) {
          const f = a(u, d, p, _, w, m);
          p.transmission > 0 ? n.push(f) : p.transparent === true ? i.push(f) : e.push(f);
        }
        function c(u, d, p, _, w, m) {
          const f = a(u, d, p, _, w, m);
          p.transmission > 0 ? n.unshift(f) : p.transparent === true ? i.unshift(f) : e.unshift(f);
        }
        function l(u, d) {
          e.length > 1 && e.sort(u || Iy), n.length > 1 && n.sort(d || zu), i.length > 1 && i.sort(d || zu);
        }
        function h() {
          for (let u = t, d = r.length; u < d; u++) {
            const p = r[u];
            if (p.id === null) break;
            p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
          }
        }
        return {
          opaque: e,
          transmissive: n,
          transparent: i,
          init: s,
          push: o,
          unshift: c,
          finish: h,
          sort: l
        };
      }
      function Dy() {
        let r = /* @__PURE__ */ new WeakMap();
        function t(n, i) {
          const s = r.get(n);
          let a;
          return s === void 0 ? (a = new Hu(), r.set(n, [
            a
          ])) : i >= s.length ? (a = new Hu(), s.push(a)) : a = s[i], a;
        }
        function e() {
          r = /* @__PURE__ */ new WeakMap();
        }
        return {
          get: t,
          dispose: e
        };
      }
      function Uy() {
        const r = {};
        return {
          get: function(t) {
            if (r[t.id] !== void 0) return r[t.id];
            let e;
            switch (t.type) {
              case "DirectionalLight":
                e = {
                  direction: new C(),
                  color: new At()
                };
                break;
              case "SpotLight":
                e = {
                  position: new C(),
                  direction: new C(),
                  color: new At(),
                  distance: 0,
                  coneCos: 0,
                  penumbraCos: 0,
                  decay: 0
                };
                break;
              case "PointLight":
                e = {
                  position: new C(),
                  color: new At(),
                  distance: 0,
                  decay: 0
                };
                break;
              case "HemisphereLight":
                e = {
                  direction: new C(),
                  skyColor: new At(),
                  groundColor: new At()
                };
                break;
              case "RectAreaLight":
                e = {
                  color: new At(),
                  position: new C(),
                  halfWidth: new C(),
                  halfHeight: new C()
                };
                break;
            }
            return r[t.id] = e, e;
          }
        };
      }
      function Ny() {
        const r = {};
        return {
          get: function(t) {
            if (r[t.id] !== void 0) return r[t.id];
            let e;
            switch (t.type) {
              case "DirectionalLight":
                e = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Ot()
                };
                break;
              case "SpotLight":
                e = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Ot()
                };
                break;
              case "PointLight":
                e = {
                  shadowBias: 0,
                  shadowNormalBias: 0,
                  shadowRadius: 1,
                  shadowMapSize: new Ot(),
                  shadowCameraNear: 1,
                  shadowCameraFar: 1e3
                };
                break;
            }
            return r[t.id] = e, e;
          }
        };
      }
      let Fy = 0;
      function Oy(r, t) {
        return (t.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (r.map ? 1 : 0);
      }
      function By(r, t) {
        const e = new Uy(), n = Ny(), i = {
          version: 0,
          hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
          },
          ambient: [
            0,
            0,
            0
          ],
          probe: [],
          directional: [],
          directionalShadow: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotLightMap: [],
          spotShadow: [],
          spotShadowMap: [],
          spotLightMatrix: [],
          rectArea: [],
          rectAreaLTC1: null,
          rectAreaLTC2: null,
          point: [],
          pointShadow: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
          numSpotLightShadowsWithMaps: 0,
          numLightProbes: 0
        };
        for (let h = 0; h < 9; h++) i.probe.push(new C());
        const s = new C(), a = new Bt(), o = new Bt();
        function c(h, u) {
          let d = 0, p = 0, _ = 0;
          for (let q = 0; q < 9; q++) i.probe[q].set(0, 0, 0);
          let w = 0, m = 0, f = 0, b = 0, v = 0, R = 0, I = 0, y = 0, A = 0, B = 0, S = 0;
          h.sort(Oy);
          const T = u === true ? Math.PI : 1;
          for (let q = 0, it = h.length; q < it; q++) {
            const D = h[q], O = D.color, j = D.intensity, $ = D.distance, K = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
            if (D.isAmbientLight) d += O.r * j * T, p += O.g * j * T, _ += O.b * j * T;
            else if (D.isLightProbe) {
              for (let Y = 0; Y < 9; Y++) i.probe[Y].addScaledVector(D.sh.coefficients[Y], j);
              S++;
            } else if (D.isDirectionalLight) {
              const Y = e.get(D);
              if (Y.color.copy(D.color).multiplyScalar(D.intensity * T), D.castShadow) {
                const J = D.shadow, Q = n.get(D);
                Q.shadowBias = J.bias, Q.shadowNormalBias = J.normalBias, Q.shadowRadius = J.radius, Q.shadowMapSize = J.mapSize, i.directionalShadow[w] = Q, i.directionalShadowMap[w] = K, i.directionalShadowMatrix[w] = D.shadow.matrix, R++;
              }
              i.directional[w] = Y, w++;
            } else if (D.isSpotLight) {
              const Y = e.get(D);
              Y.position.setFromMatrixPosition(D.matrixWorld), Y.color.copy(O).multiplyScalar(j * T), Y.distance = $, Y.coneCos = Math.cos(D.angle), Y.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), Y.decay = D.decay, i.spot[f] = Y;
              const J = D.shadow;
              if (D.map && (i.spotLightMap[A] = D.map, A++, J.updateMatrices(D), D.castShadow && B++), i.spotLightMatrix[f] = J.matrix, D.castShadow) {
                const Q = n.get(D);
                Q.shadowBias = J.bias, Q.shadowNormalBias = J.normalBias, Q.shadowRadius = J.radius, Q.shadowMapSize = J.mapSize, i.spotShadow[f] = Q, i.spotShadowMap[f] = K, y++;
              }
              f++;
            } else if (D.isRectAreaLight) {
              const Y = e.get(D);
              Y.color.copy(O).multiplyScalar(j), Y.halfWidth.set(D.width * 0.5, 0, 0), Y.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[b] = Y, b++;
            } else if (D.isPointLight) {
              const Y = e.get(D);
              if (Y.color.copy(D.color).multiplyScalar(D.intensity * T), Y.distance = D.distance, Y.decay = D.decay, D.castShadow) {
                const J = D.shadow, Q = n.get(D);
                Q.shadowBias = J.bias, Q.shadowNormalBias = J.normalBias, Q.shadowRadius = J.radius, Q.shadowMapSize = J.mapSize, Q.shadowCameraNear = J.camera.near, Q.shadowCameraFar = J.camera.far, i.pointShadow[m] = Q, i.pointShadowMap[m] = K, i.pointShadowMatrix[m] = D.shadow.matrix, I++;
              }
              i.point[m] = Y, m++;
            } else if (D.isHemisphereLight) {
              const Y = e.get(D);
              Y.skyColor.copy(D.color).multiplyScalar(j * T), Y.groundColor.copy(D.groundColor).multiplyScalar(j * T), i.hemi[v] = Y, v++;
            }
          }
          b > 0 && (t.isWebGL2 ? r.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = st.LTC_FLOAT_1, i.rectAreaLTC2 = st.LTC_FLOAT_2) : (i.rectAreaLTC1 = st.LTC_HALF_1, i.rectAreaLTC2 = st.LTC_HALF_2) : r.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = st.LTC_FLOAT_1, i.rectAreaLTC2 = st.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === true ? (i.rectAreaLTC1 = st.LTC_HALF_1, i.rectAreaLTC2 = st.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = p, i.ambient[2] = _;
          const z = i.hash;
          (z.directionalLength !== w || z.pointLength !== m || z.spotLength !== f || z.rectAreaLength !== b || z.hemiLength !== v || z.numDirectionalShadows !== R || z.numPointShadows !== I || z.numSpotShadows !== y || z.numSpotMaps !== A || z.numLightProbes !== S) && (i.directional.length = w, i.spot.length = f, i.rectArea.length = b, i.point.length = m, i.hemi.length = v, i.directionalShadow.length = R, i.directionalShadowMap.length = R, i.pointShadow.length = I, i.pointShadowMap.length = I, i.spotShadow.length = y, i.spotShadowMap.length = y, i.directionalShadowMatrix.length = R, i.pointShadowMatrix.length = I, i.spotLightMatrix.length = y + A - B, i.spotLightMap.length = A, i.numSpotLightShadowsWithMaps = B, i.numLightProbes = S, z.directionalLength = w, z.pointLength = m, z.spotLength = f, z.rectAreaLength = b, z.hemiLength = v, z.numDirectionalShadows = R, z.numPointShadows = I, z.numSpotShadows = y, z.numSpotMaps = A, z.numLightProbes = S, i.version = Fy++);
        }
        function l(h, u) {
          let d = 0, p = 0, _ = 0, w = 0, m = 0;
          const f = u.matrixWorldInverse;
          for (let b = 0, v = h.length; b < v; b++) {
            const R = h[b];
            if (R.isDirectionalLight) {
              const I = i.directional[d];
              I.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), I.direction.sub(s), I.direction.transformDirection(f), d++;
            } else if (R.isSpotLight) {
              const I = i.spot[_];
              I.position.setFromMatrixPosition(R.matrixWorld), I.position.applyMatrix4(f), I.direction.setFromMatrixPosition(R.matrixWorld), s.setFromMatrixPosition(R.target.matrixWorld), I.direction.sub(s), I.direction.transformDirection(f), _++;
            } else if (R.isRectAreaLight) {
              const I = i.rectArea[w];
              I.position.setFromMatrixPosition(R.matrixWorld), I.position.applyMatrix4(f), o.identity(), a.copy(R.matrixWorld), a.premultiply(f), o.extractRotation(a), I.halfWidth.set(R.width * 0.5, 0, 0), I.halfHeight.set(0, R.height * 0.5, 0), I.halfWidth.applyMatrix4(o), I.halfHeight.applyMatrix4(o), w++;
            } else if (R.isPointLight) {
              const I = i.point[p];
              I.position.setFromMatrixPosition(R.matrixWorld), I.position.applyMatrix4(f), p++;
            } else if (R.isHemisphereLight) {
              const I = i.hemi[m];
              I.direction.setFromMatrixPosition(R.matrixWorld), I.direction.transformDirection(f), m++;
            }
          }
        }
        return {
          setup: c,
          setupView: l,
          state: i
        };
      }
      function Gu(r, t) {
        const e = new By(r, t), n = [], i = [];
        function s() {
          n.length = 0, i.length = 0;
        }
        function a(u) {
          n.push(u);
        }
        function o(u) {
          i.push(u);
        }
        function c(u) {
          e.setup(n, u);
        }
        function l(u) {
          e.setupView(n, u);
        }
        return {
          init: s,
          state: {
            lightsArray: n,
            shadowsArray: i,
            lights: e
          },
          setupLights: c,
          setupLightsView: l,
          pushLight: a,
          pushShadow: o
        };
      }
      function zy(r, t) {
        let e = /* @__PURE__ */ new WeakMap();
        function n(s, a = 0) {
          const o = e.get(s);
          let c;
          return o === void 0 ? (c = new Gu(r, t), e.set(s, [
            c
          ])) : a >= o.length ? (c = new Gu(r, t), o.push(c)) : c = o[a], c;
        }
        function i() {
          e = /* @__PURE__ */ new WeakMap();
        }
        return {
          get: n,
          dispose: i
        };
      }
      class Hy extends Kn {
        constructor(t) {
          super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Em, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
        }
      }
      class Gy extends Kn {
        constructor(t) {
          super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
        }
      }
      const ky = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Vy = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
      function Wy(r, t, e) {
        let n = new Il();
        const i = new Ot(), s = new Ot(), a = new ne(), o = new Hy({
          depthPacking: Tm
        }), c = new Gy(), l = {}, h = e.maxTextureSize, u = {
          [xi]: hn,
          [hn]: xi,
          [On]: On
        }, d = new Jn({
          defines: {
            VSM_SAMPLES: 8
          },
          uniforms: {
            shadow_pass: {
              value: null
            },
            resolution: {
              value: new Ot()
            },
            radius: {
              value: 4
            }
          },
          vertexShader: ky,
          fragmentShader: Vy
        }), p = d.clone();
        p.defines.HORIZONTAL_PASS = 1;
        const _ = new sn();
        _.setAttribute("position", new rn(new Float32Array([
          -1,
          -1,
          0.5,
          3,
          -1,
          0.5,
          -1,
          3,
          0.5
        ]), 3));
        const w = new Re(_, d), m = this;
        this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Gd;
        let f = this.type;
        this.render = function(y, A, B) {
          if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || y.length === 0) return;
          const S = r.getRenderTarget(), T = r.getActiveCubeFace(), z = r.getActiveMipmapLevel(), q = r.state;
          q.setBlending(yi), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(true), q.setScissorTest(false);
          const it = f !== hi && this.type === hi, D = f === hi && this.type !== hi;
          for (let O = 0, j = y.length; O < j; O++) {
            const $ = y[O], K = $.shadow;
            if (K === void 0) {
              console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
              continue;
            }
            if (K.autoUpdate === false && K.needsUpdate === false) continue;
            i.copy(K.mapSize);
            const Y = K.getFrameExtents();
            if (i.multiply(Y), s.copy(K.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / Y.x), i.x = s.x * Y.x, K.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / Y.y), i.y = s.y * Y.y, K.mapSize.y = s.y)), K.map === null || it === true || D === true) {
              const Q = this.type !== hi ? {
                minFilter: ze,
                magFilter: ze
              } : {};
              K.map !== null && K.map.dispose(), K.map = new Wi(i.x, i.y, Q), K.map.texture.name = $.name + ".shadowMap", K.camera.updateProjectionMatrix();
            }
            r.setRenderTarget(K.map), r.clear();
            const J = K.getViewportCount();
            for (let Q = 0; Q < J; Q++) {
              const lt = K.getViewport(Q);
              a.set(s.x * lt.x, s.y * lt.y, s.x * lt.z, s.y * lt.w), q.viewport(a), K.updateMatrices($, Q), n = K.getFrustum(), R(A, B, K.camera, $, this.type);
            }
            K.isPointLightShadow !== true && this.type === hi && b(K, B), K.needsUpdate = false;
          }
          f = this.type, m.needsUpdate = false, r.setRenderTarget(S, T, z);
        };
        function b(y, A) {
          const B = t.update(w);
          d.defines.VSM_SAMPLES !== y.blurSamples && (d.defines.VSM_SAMPLES = y.blurSamples, p.defines.VSM_SAMPLES = y.blurSamples, d.needsUpdate = true, p.needsUpdate = true), y.mapPass === null && (y.mapPass = new Wi(i.x, i.y)), d.uniforms.shadow_pass.value = y.map.texture, d.uniforms.resolution.value = y.mapSize, d.uniforms.radius.value = y.radius, r.setRenderTarget(y.mapPass), r.clear(), r.renderBufferDirect(A, null, B, d, w, null), p.uniforms.shadow_pass.value = y.mapPass.texture, p.uniforms.resolution.value = y.mapSize, p.uniforms.radius.value = y.radius, r.setRenderTarget(y.map), r.clear(), r.renderBufferDirect(A, null, B, p, w, null);
        }
        function v(y, A, B, S) {
          let T = null;
          const z = B.isPointLight === true ? y.customDistanceMaterial : y.customDepthMaterial;
          if (z !== void 0) T = z;
          else if (T = B.isPointLight === true ? c : o, r.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
            const q = T.uuid, it = A.uuid;
            let D = l[q];
            D === void 0 && (D = {}, l[q] = D);
            let O = D[it];
            O === void 0 && (O = T.clone(), D[it] = O, A.addEventListener("dispose", I)), T = O;
          }
          if (T.visible = A.visible, T.wireframe = A.wireframe, S === hi ? T.side = A.shadowSide !== null ? A.shadowSide : A.side : T.side = A.shadowSide !== null ? A.shadowSide : u[A.side], T.alphaMap = A.alphaMap, T.alphaTest = A.alphaTest, T.map = A.map, T.clipShadows = A.clipShadows, T.clippingPlanes = A.clippingPlanes, T.clipIntersection = A.clipIntersection, T.displacementMap = A.displacementMap, T.displacementScale = A.displacementScale, T.displacementBias = A.displacementBias, T.wireframeLinewidth = A.wireframeLinewidth, T.linewidth = A.linewidth, B.isPointLight === true && T.isMeshDistanceMaterial === true) {
            const q = r.properties.get(T);
            q.light = B;
          }
          return T;
        }
        function R(y, A, B, S, T) {
          if (y.visible === false) return;
          if (y.layers.test(A.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && T === hi) && (!y.frustumCulled || n.intersectsObject(y))) {
            y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, y.matrixWorld);
            const it = t.update(y), D = y.material;
            if (Array.isArray(D)) {
              const O = it.groups;
              for (let j = 0, $ = O.length; j < $; j++) {
                const K = O[j], Y = D[K.materialIndex];
                if (Y && Y.visible) {
                  const J = v(y, Y, S, T);
                  y.onBeforeShadow(r, y, A, B, it, J, K), r.renderBufferDirect(B, null, it, J, y, K), y.onAfterShadow(r, y, A, B, it, J, K);
                }
              }
            } else if (D.visible) {
              const O = v(y, D, S, T);
              y.onBeforeShadow(r, y, A, B, it, O, null), r.renderBufferDirect(B, null, it, O, y, null), y.onAfterShadow(r, y, A, B, it, O, null);
            }
          }
          const q = y.children;
          for (let it = 0, D = q.length; it < D; it++) R(q[it], A, B, S, T);
        }
        function I(y) {
          y.target.removeEventListener("dispose", I);
          for (const B in l) {
            const S = l[B], T = y.target.uuid;
            T in S && (S[T].dispose(), delete S[T]);
          }
        }
      }
      function jy(r, t, e) {
        const n = e.isWebGL2;
        function i() {
          let L = false;
          const ot = new ne();
          let ct = null;
          const Pt = new ne(0, 0, 0, 0);
          return {
            setMask: function(Mt) {
              ct !== Mt && !L && (r.colorMask(Mt, Mt, Mt, Mt), ct = Mt);
            },
            setLocked: function(Mt) {
              L = Mt;
            },
            setClear: function(Mt, he, ue, Ne, $e) {
              $e === true && (Mt *= Ne, he *= Ne, ue *= Ne), ot.set(Mt, he, ue, Ne), Pt.equals(ot) === false && (r.clearColor(Mt, he, ue, Ne), Pt.copy(ot));
            },
            reset: function() {
              L = false, ct = null, Pt.set(-1, 0, 0, 0);
            }
          };
        }
        function s() {
          let L = false, ot = null, ct = null, Pt = null;
          return {
            setTest: function(Mt) {
              Mt ? Dt(r.DEPTH_TEST) : Et(r.DEPTH_TEST);
            },
            setMask: function(Mt) {
              ot !== Mt && !L && (r.depthMask(Mt), ot = Mt);
            },
            setFunc: function(Mt) {
              if (ct !== Mt) {
                switch (Mt) {
                  case tm:
                    r.depthFunc(r.NEVER);
                    break;
                  case em:
                    r.depthFunc(r.ALWAYS);
                    break;
                  case nm:
                    r.depthFunc(r.LESS);
                    break;
                  case no:
                    r.depthFunc(r.LEQUAL);
                    break;
                  case im:
                    r.depthFunc(r.EQUAL);
                    break;
                  case rm:
                    r.depthFunc(r.GEQUAL);
                    break;
                  case sm:
                    r.depthFunc(r.GREATER);
                    break;
                  case am:
                    r.depthFunc(r.NOTEQUAL);
                    break;
                  default:
                    r.depthFunc(r.LEQUAL);
                }
                ct = Mt;
              }
            },
            setLocked: function(Mt) {
              L = Mt;
            },
            setClear: function(Mt) {
              Pt !== Mt && (r.clearDepth(Mt), Pt = Mt);
            },
            reset: function() {
              L = false, ot = null, ct = null, Pt = null;
            }
          };
        }
        function a() {
          let L = false, ot = null, ct = null, Pt = null, Mt = null, he = null, ue = null, Ne = null, $e = null;
          return {
            setTest: function(de) {
              L || (de ? Dt(r.STENCIL_TEST) : Et(r.STENCIL_TEST));
            },
            setMask: function(de) {
              ot !== de && !L && (r.stencilMask(de), ot = de);
            },
            setFunc: function(de, Ze, Gn) {
              (ct !== de || Pt !== Ze || Mt !== Gn) && (r.stencilFunc(de, Ze, Gn), ct = de, Pt = Ze, Mt = Gn);
            },
            setOp: function(de, Ze, Gn) {
              (he !== de || ue !== Ze || Ne !== Gn) && (r.stencilOp(de, Ze, Gn), he = de, ue = Ze, Ne = Gn);
            },
            setLocked: function(de) {
              L = de;
            },
            setClear: function(de) {
              $e !== de && (r.clearStencil(de), $e = de);
            },
            reset: function() {
              L = false, ot = null, ct = null, Pt = null, Mt = null, he = null, ue = null, Ne = null, $e = null;
            }
          };
        }
        const o = new i(), c = new s(), l = new a(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
        let d = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), w = [], m = null, f = false, b = null, v = null, R = null, I = null, y = null, A = null, B = null, S = new At(0, 0, 0), T = 0, z = false, q = null, it = null, D = null, O = null, j = null;
        const $ = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        let K = false, Y = 0;
        const J = r.getParameter(r.VERSION);
        J.indexOf("WebGL") !== -1 ? (Y = parseFloat(/^WebGL (\d)/.exec(J)[1]), K = Y >= 1) : J.indexOf("OpenGL ES") !== -1 && (Y = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), K = Y >= 2);
        let Q = null, lt = {};
        const X = r.getParameter(r.SCISSOR_BOX), Z = r.getParameter(r.VIEWPORT), ut = new ne().fromArray(X), _t = new ne().fromArray(Z);
        function ft(L, ot, ct, Pt) {
          const Mt = new Uint8Array(4), he = r.createTexture();
          r.bindTexture(L, he), r.texParameteri(L, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(L, r.TEXTURE_MAG_FILTER, r.NEAREST);
          for (let ue = 0; ue < ct; ue++) n && (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ot, 0, r.RGBA, 1, 1, Pt, 0, r.RGBA, r.UNSIGNED_BYTE, Mt) : r.texImage2D(ot + ue, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, Mt);
          return he;
        }
        const Rt = {};
        Rt[r.TEXTURE_2D] = ft(r.TEXTURE_2D, r.TEXTURE_2D, 1), Rt[r.TEXTURE_CUBE_MAP] = ft(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Rt[r.TEXTURE_2D_ARRAY] = ft(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), Rt[r.TEXTURE_3D] = ft(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Dt(r.DEPTH_TEST), c.setFunc(no), kt(false), E(yh), Dt(r.CULL_FACE), wt(yi);
        function Dt(L) {
          d[L] !== true && (r.enable(L), d[L] = true);
        }
        function Et(L) {
          d[L] !== false && (r.disable(L), d[L] = false);
        }
        function Gt(L, ot) {
          return p[L] !== ot ? (r.bindFramebuffer(L, ot), p[L] = ot, n && (L === r.DRAW_FRAMEBUFFER && (p[r.FRAMEBUFFER] = ot), L === r.FRAMEBUFFER && (p[r.DRAW_FRAMEBUFFER] = ot)), true) : false;
        }
        function H(L, ot) {
          let ct = w, Pt = false;
          if (L) if (ct = _.get(ot), ct === void 0 && (ct = [], _.set(ot, ct)), L.isWebGLMultipleRenderTargets) {
            const Mt = L.texture;
            if (ct.length !== Mt.length || ct[0] !== r.COLOR_ATTACHMENT0) {
              for (let he = 0, ue = Mt.length; he < ue; he++) ct[he] = r.COLOR_ATTACHMENT0 + he;
              ct.length = Mt.length, Pt = true;
            }
          } else ct[0] !== r.COLOR_ATTACHMENT0 && (ct[0] = r.COLOR_ATTACHMENT0, Pt = true);
          else ct[0] !== r.BACK && (ct[0] = r.BACK, Pt = true);
          Pt && (e.isWebGL2 ? r.drawBuffers(ct) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct));
        }
        function Je(L) {
          return m !== L ? (r.useProgram(L), m = L, true) : false;
        }
        const bt = {
          [lr]: r.FUNC_ADD,
          [zp]: r.FUNC_SUBTRACT,
          [Hp]: r.FUNC_REVERSE_SUBTRACT
        };
        if (n) bt[Mh] = r.MIN, bt[Eh] = r.MAX;
        else {
          const L = t.get("EXT_blend_minmax");
          L !== null && (bt[Mh] = L.MIN_EXT, bt[Eh] = L.MAX_EXT);
        }
        const Ut = {
          [Gp]: r.ZERO,
          [kp]: r.ONE,
          [Vp]: r.SRC_COLOR,
          [Qc]: r.SRC_ALPHA,
          [Kp]: r.SRC_ALPHA_SATURATE,
          [qp]: r.DST_COLOR,
          [jp]: r.DST_ALPHA,
          [Wp]: r.ONE_MINUS_SRC_COLOR,
          [tl]: r.ONE_MINUS_SRC_ALPHA,
          [Yp]: r.ONE_MINUS_DST_COLOR,
          [Xp]: r.ONE_MINUS_DST_ALPHA,
          [Jp]: r.CONSTANT_COLOR,
          [$p]: r.ONE_MINUS_CONSTANT_COLOR,
          [Zp]: r.CONSTANT_ALPHA,
          [Qp]: r.ONE_MINUS_CONSTANT_ALPHA
        };
        function wt(L, ot, ct, Pt, Mt, he, ue, Ne, $e, de) {
          if (L === yi) {
            f === true && (Et(r.BLEND), f = false);
            return;
          }
          if (f === false && (Dt(r.BLEND), f = true), L !== Bp) {
            if (L !== b || de !== z) {
              if ((v !== lr || y !== lr) && (r.blendEquation(r.FUNC_ADD), v = lr, y = lr), de) switch (L) {
                case Kr:
                  r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
                  break;
                case xh:
                  r.blendFunc(r.ONE, r.ONE);
                  break;
                case Sh:
                  r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
                  break;
                case bh:
                  r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", L);
                  break;
              }
              else switch (L) {
                case Kr:
                  r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
                  break;
                case xh:
                  r.blendFunc(r.SRC_ALPHA, r.ONE);
                  break;
                case Sh:
                  r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
                  break;
                case bh:
                  r.blendFunc(r.ZERO, r.SRC_COLOR);
                  break;
                default:
                  console.error("THREE.WebGLState: Invalid blending: ", L);
                  break;
              }
              R = null, I = null, A = null, B = null, S.set(0, 0, 0), T = 0, b = L, z = de;
            }
            return;
          }
          Mt = Mt || ot, he = he || ct, ue = ue || Pt, (ot !== v || Mt !== y) && (r.blendEquationSeparate(bt[ot], bt[Mt]), v = ot, y = Mt), (ct !== R || Pt !== I || he !== A || ue !== B) && (r.blendFuncSeparate(Ut[ct], Ut[Pt], Ut[he], Ut[ue]), R = ct, I = Pt, A = he, B = ue), (Ne.equals(S) === false || $e !== T) && (r.blendColor(Ne.r, Ne.g, Ne.b, $e), S.copy(Ne), T = $e), b = L, z = false;
        }
        function _e(L, ot) {
          L.side === On ? Et(r.CULL_FACE) : Dt(r.CULL_FACE);
          let ct = L.side === hn;
          ot && (ct = !ct), kt(ct), L.blending === Kr && L.transparent === false ? wt(yi) : wt(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), o.setMask(L.colorWrite);
          const Pt = L.stencilWrite;
          l.setTest(Pt), Pt && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), k(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === true ? Dt(r.SAMPLE_ALPHA_TO_COVERAGE) : Et(r.SAMPLE_ALPHA_TO_COVERAGE);
        }
        function kt(L) {
          q !== L && (L ? r.frontFace(r.CW) : r.frontFace(r.CCW), q = L);
        }
        function E(L) {
          L !== Fp ? (Dt(r.CULL_FACE), L !== it && (L === yh ? r.cullFace(r.BACK) : L === Op ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Et(r.CULL_FACE), it = L;
        }
        function x(L) {
          L !== D && (K && r.lineWidth(L), D = L);
        }
        function k(L, ot, ct) {
          L ? (Dt(r.POLYGON_OFFSET_FILL), (O !== ot || j !== ct) && (r.polygonOffset(ot, ct), O = ot, j = ct)) : Et(r.POLYGON_OFFSET_FILL);
        }
        function nt(L) {
          L ? Dt(r.SCISSOR_TEST) : Et(r.SCISSOR_TEST);
        }
        function et(L) {
          L === void 0 && (L = r.TEXTURE0 + $ - 1), Q !== L && (r.activeTexture(L), Q = L);
        }
        function rt(L, ot, ct) {
          ct === void 0 && (Q === null ? ct = r.TEXTURE0 + $ - 1 : ct = Q);
          let Pt = lt[ct];
          Pt === void 0 && (Pt = {
            type: void 0,
            texture: void 0
          }, lt[ct] = Pt), (Pt.type !== L || Pt.texture !== ot) && (Q !== ct && (r.activeTexture(ct), Q = ct), r.bindTexture(L, ot || Rt[L]), Pt.type = L, Pt.texture = ot);
        }
        function vt() {
          const L = lt[Q];
          L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
        }
        function ht() {
          try {
            r.compressedTexImage2D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function pt() {
          try {
            r.compressedTexImage3D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function Ct() {
          try {
            r.texSubImage2D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function Vt() {
          try {
            r.texSubImage3D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function tt() {
          try {
            r.compressedTexSubImage2D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function ce() {
          try {
            r.compressedTexSubImage3D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function $t() {
          try {
            r.texStorage2D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function It() {
          try {
            r.texStorage3D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function xt() {
          try {
            r.texImage2D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function mt() {
          try {
            r.texImage3D.apply(r, arguments);
          } catch (L) {
            console.error("THREE.WebGLState:", L);
          }
        }
        function zt(L) {
          ut.equals(L) === false && (r.scissor(L.x, L.y, L.z, L.w), ut.copy(L));
        }
        function se(L) {
          _t.equals(L) === false && (r.viewport(L.x, L.y, L.z, L.w), _t.copy(L));
        }
        function Me(L, ot) {
          let ct = u.get(ot);
          ct === void 0 && (ct = /* @__PURE__ */ new WeakMap(), u.set(ot, ct));
          let Pt = ct.get(L);
          Pt === void 0 && (Pt = r.getUniformBlockIndex(ot, L.name), ct.set(L, Pt));
        }
        function Xt(L, ot) {
          const Pt = u.get(ot).get(L);
          h.get(ot) !== Pt && (r.uniformBlockBinding(ot, Pt, L.__bindingPointIndex), h.set(ot, Pt));
        }
        function at() {
          r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === true && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, Q = null, lt = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), w = [], m = null, f = false, b = null, v = null, R = null, I = null, y = null, A = null, B = null, S = new At(0, 0, 0), T = 0, z = false, q = null, it = null, D = null, O = null, j = null, ut.set(0, 0, r.canvas.width, r.canvas.height), _t.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), c.reset(), l.reset();
        }
        return {
          buffers: {
            color: o,
            depth: c,
            stencil: l
          },
          enable: Dt,
          disable: Et,
          bindFramebuffer: Gt,
          drawBuffers: H,
          useProgram: Je,
          setBlending: wt,
          setMaterial: _e,
          setFlipSided: kt,
          setCullFace: E,
          setLineWidth: x,
          setPolygonOffset: k,
          setScissorTest: nt,
          activeTexture: et,
          bindTexture: rt,
          unbindTexture: vt,
          compressedTexImage2D: ht,
          compressedTexImage3D: pt,
          texImage2D: xt,
          texImage3D: mt,
          updateUBOMapping: Me,
          uniformBlockBinding: Xt,
          texStorage2D: $t,
          texStorage3D: It,
          texSubImage2D: Ct,
          texSubImage3D: Vt,
          compressedTexSubImage2D: tt,
          compressedTexSubImage3D: ce,
          scissor: zt,
          viewport: se,
          reset: at
        };
      }
      function Xy(r, t, e, n, i, s, a) {
        const o = i.isWebGL2, c = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), h = /* @__PURE__ */ new WeakMap();
        let u;
        const d = /* @__PURE__ */ new WeakMap();
        let p = false;
        try {
          p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
        } catch {
        }
        function _(E, x) {
          return p ? new OffscreenCanvas(E, x) : Ws("canvas");
        }
        function w(E, x, k, nt) {
          let et = 1;
          if ((E.width > nt || E.height > nt) && (et = nt / Math.max(E.width, E.height)), et < 1 || x === true) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap) {
            const rt = x ? co : Math.floor, vt = rt(et * E.width), ht = rt(et * E.height);
            u === void 0 && (u = _(vt, ht));
            const pt = k ? _(vt, ht) : u;
            return pt.width = vt, pt.height = ht, pt.getContext("2d").drawImage(E, 0, 0, vt, ht), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + E.width + "x" + E.height + ") to (" + vt + "x" + ht + ")."), pt;
          } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + E.width + "x" + E.height + ")."), E;
          return E;
        }
        function m(E) {
          return ol(E.width) && ol(E.height);
        }
        function f(E) {
          return o ? false : E.wrapS !== ln || E.wrapT !== ln || E.minFilter !== ze && E.minFilter !== on;
        }
        function b(E, x) {
          return E.generateMipmaps && x && E.minFilter !== ze && E.minFilter !== on;
        }
        function v(E) {
          r.generateMipmap(E);
        }
        function R(E, x, k, nt, et = false) {
          if (o === false) return x;
          if (E !== null) {
            if (r[E] !== void 0) return r[E];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
          }
          let rt = x;
          if (x === r.RED && (k === r.FLOAT && (rt = r.R32F), k === r.HALF_FLOAT && (rt = r.R16F), k === r.UNSIGNED_BYTE && (rt = r.R8)), x === r.RED_INTEGER && (k === r.UNSIGNED_BYTE && (rt = r.R8UI), k === r.UNSIGNED_SHORT && (rt = r.R16UI), k === r.UNSIGNED_INT && (rt = r.R32UI), k === r.BYTE && (rt = r.R8I), k === r.SHORT && (rt = r.R16I), k === r.INT && (rt = r.R32I)), x === r.RG && (k === r.FLOAT && (rt = r.RG32F), k === r.HALF_FLOAT && (rt = r.RG16F), k === r.UNSIGNED_BYTE && (rt = r.RG8)), x === r.RGBA) {
            const vt = et ? ro : ie.getTransfer(nt);
            k === r.FLOAT && (rt = r.RGBA32F), k === r.HALF_FLOAT && (rt = r.RGBA16F), k === r.UNSIGNED_BYTE && (rt = vt === me ? r.SRGB8_ALPHA8 : r.RGBA8), k === r.UNSIGNED_SHORT_4_4_4_4 && (rt = r.RGBA4), k === r.UNSIGNED_SHORT_5_5_5_1 && (rt = r.RGB5_A1);
          }
          return (rt === r.R16F || rt === r.R32F || rt === r.RG16F || rt === r.RG32F || rt === r.RGBA16F || rt === r.RGBA32F) && t.get("EXT_color_buffer_float"), rt;
        }
        function I(E, x, k) {
          return b(E, k) === true || E.isFramebufferTexture && E.minFilter !== ze && E.minFilter !== on ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
        }
        function y(E) {
          return E === ze || E === il || E === Ja ? r.NEAREST : r.LINEAR;
        }
        function A(E) {
          const x = E.target;
          x.removeEventListener("dispose", A), S(x), x.isVideoTexture && h.delete(x);
        }
        function B(E) {
          const x = E.target;
          x.removeEventListener("dispose", B), z(x);
        }
        function S(E) {
          const x = n.get(E);
          if (x.__webglInit === void 0) return;
          const k = E.source, nt = d.get(k);
          if (nt) {
            const et = nt[x.__cacheKey];
            et.usedTimes--, et.usedTimes === 0 && T(E), Object.keys(nt).length === 0 && d.delete(k);
          }
          n.remove(E);
        }
        function T(E) {
          const x = n.get(E);
          r.deleteTexture(x.__webglTexture);
          const k = E.source, nt = d.get(k);
          delete nt[x.__cacheKey], a.memory.textures--;
        }
        function z(E) {
          const x = E.texture, k = n.get(E), nt = n.get(x);
          if (nt.__webglTexture !== void 0 && (r.deleteTexture(nt.__webglTexture), a.memory.textures--), E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget) for (let et = 0; et < 6; et++) {
            if (Array.isArray(k.__webglFramebuffer[et])) for (let rt = 0; rt < k.__webglFramebuffer[et].length; rt++) r.deleteFramebuffer(k.__webglFramebuffer[et][rt]);
            else r.deleteFramebuffer(k.__webglFramebuffer[et]);
            k.__webglDepthbuffer && r.deleteRenderbuffer(k.__webglDepthbuffer[et]);
          }
          else {
            if (Array.isArray(k.__webglFramebuffer)) for (let et = 0; et < k.__webglFramebuffer.length; et++) r.deleteFramebuffer(k.__webglFramebuffer[et]);
            else r.deleteFramebuffer(k.__webglFramebuffer);
            if (k.__webglDepthbuffer && r.deleteRenderbuffer(k.__webglDepthbuffer), k.__webglMultisampledFramebuffer && r.deleteFramebuffer(k.__webglMultisampledFramebuffer), k.__webglColorRenderbuffer) for (let et = 0; et < k.__webglColorRenderbuffer.length; et++) k.__webglColorRenderbuffer[et] && r.deleteRenderbuffer(k.__webglColorRenderbuffer[et]);
            k.__webglDepthRenderbuffer && r.deleteRenderbuffer(k.__webglDepthRenderbuffer);
          }
          if (E.isWebGLMultipleRenderTargets) for (let et = 0, rt = x.length; et < rt; et++) {
            const vt = n.get(x[et]);
            vt.__webglTexture && (r.deleteTexture(vt.__webglTexture), a.memory.textures--), n.remove(x[et]);
          }
          n.remove(x), n.remove(E);
        }
        let q = 0;
        function it() {
          q = 0;
        }
        function D() {
          const E = q;
          return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), q += 1, E;
        }
        function O(E) {
          const x = [];
          return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
        }
        function j(E, x) {
          const k = n.get(E);
          if (E.isVideoTexture && _e(E), E.isRenderTargetTexture === false && E.version > 0 && k.__version !== E.version) {
            const nt = E.image;
            if (nt === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (nt.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
              ut(k, E, x);
              return;
            }
          }
          e.bindTexture(r.TEXTURE_2D, k.__webglTexture, r.TEXTURE0 + x);
        }
        function $(E, x) {
          const k = n.get(E);
          if (E.version > 0 && k.__version !== E.version) {
            ut(k, E, x);
            return;
          }
          e.bindTexture(r.TEXTURE_2D_ARRAY, k.__webglTexture, r.TEXTURE0 + x);
        }
        function K(E, x) {
          const k = n.get(E);
          if (E.version > 0 && k.__version !== E.version) {
            ut(k, E, x);
            return;
          }
          e.bindTexture(r.TEXTURE_3D, k.__webglTexture, r.TEXTURE0 + x);
        }
        function Y(E, x) {
          const k = n.get(E);
          if (E.version > 0 && k.__version !== E.version) {
            _t(k, E, x);
            return;
          }
          e.bindTexture(r.TEXTURE_CUBE_MAP, k.__webglTexture, r.TEXTURE0 + x);
        }
        const J = {
          [is]: r.REPEAT,
          [ln]: r.CLAMP_TO_EDGE,
          [io]: r.MIRRORED_REPEAT
        }, Q = {
          [ze]: r.NEAREST,
          [il]: r.NEAREST_MIPMAP_NEAREST,
          [Ja]: r.NEAREST_MIPMAP_LINEAR,
          [on]: r.LINEAR,
          [Xd]: r.LINEAR_MIPMAP_NEAREST,
          [vr]: r.LINEAR_MIPMAP_LINEAR
        }, lt = {
          [Rm]: r.NEVER,
          [Um]: r.ALWAYS,
          [Cm]: r.LESS,
          [rf]: r.LEQUAL,
          [Pm]: r.EQUAL,
          [Dm]: r.GEQUAL,
          [Lm]: r.GREATER,
          [Im]: r.NOTEQUAL
        };
        function X(E, x, k) {
          if (k ? (r.texParameteri(E, r.TEXTURE_WRAP_S, J[x.wrapS]), r.texParameteri(E, r.TEXTURE_WRAP_T, J[x.wrapT]), (E === r.TEXTURE_3D || E === r.TEXTURE_2D_ARRAY) && r.texParameteri(E, r.TEXTURE_WRAP_R, J[x.wrapR]), r.texParameteri(E, r.TEXTURE_MAG_FILTER, Q[x.magFilter]), r.texParameteri(E, r.TEXTURE_MIN_FILTER, Q[x.minFilter])) : (r.texParameteri(E, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(E, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (E === r.TEXTURE_3D || E === r.TEXTURE_2D_ARRAY) && r.texParameteri(E, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (x.wrapS !== ln || x.wrapT !== ln) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(E, r.TEXTURE_MAG_FILTER, y(x.magFilter)), r.texParameteri(E, r.TEXTURE_MIN_FILTER, y(x.minFilter)), x.minFilter !== ze && x.minFilter !== on && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (r.texParameteri(E, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(E, r.TEXTURE_COMPARE_FUNC, lt[x.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
            const nt = t.get("EXT_texture_filter_anisotropic");
            if (x.magFilter === ze || x.minFilter !== Ja && x.minFilter !== vr || x.type === _i && t.has("OES_texture_float_linear") === false || o === false && x.type === rs && t.has("OES_texture_half_float_linear") === false) return;
            (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (r.texParameterf(E, nt.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy);
          }
        }
        function Z(E, x) {
          let k = false;
          E.__webglInit === void 0 && (E.__webglInit = true, x.addEventListener("dispose", A));
          const nt = x.source;
          let et = d.get(nt);
          et === void 0 && (et = {}, d.set(nt, et));
          const rt = O(x);
          if (rt !== E.__cacheKey) {
            et[rt] === void 0 && (et[rt] = {
              texture: r.createTexture(),
              usedTimes: 0
            }, a.memory.textures++, k = true), et[rt].usedTimes++;
            const vt = et[E.__cacheKey];
            vt !== void 0 && (et[E.__cacheKey].usedTimes--, vt.usedTimes === 0 && T(x)), E.__cacheKey = rt, E.__webglTexture = et[rt].texture;
          }
          return k;
        }
        function ut(E, x, k) {
          let nt = r.TEXTURE_2D;
          (x.isDataArrayTexture || x.isCompressedArrayTexture) && (nt = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (nt = r.TEXTURE_3D);
          const et = Z(E, x), rt = x.source;
          e.bindTexture(nt, E.__webglTexture, r.TEXTURE0 + k);
          const vt = n.get(rt);
          if (rt.version !== vt.__version || et === true) {
            e.activeTexture(r.TEXTURE0 + k);
            const ht = ie.getPrimaries(ie.workingColorSpace), pt = x.colorSpace === En ? null : ie.getPrimaries(x.colorSpace), Ct = x.colorSpace === En || ht === pt ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ct);
            const Vt = f(x) && m(x.image) === false;
            let tt = w(x.image, Vt, false, i.maxTextureSize);
            tt = kt(x, tt);
            const ce = m(tt) || o, $t = s.convert(x.format, x.colorSpace);
            let It = s.convert(x.type), xt = R(x.internalFormat, $t, It, x.colorSpace, x.isVideoTexture);
            X(nt, x, ce);
            let mt;
            const zt = x.mipmaps, se = o && x.isVideoTexture !== true && xt !== Qd, Me = vt.__version === void 0 || et === true, Xt = I(x, tt, ce);
            if (x.isDepthTexture) xt = r.DEPTH_COMPONENT, o ? x.type === _i ? xt = r.DEPTH_COMPONENT32F : x.type === zi ? xt = r.DEPTH_COMPONENT24 : x.type === mr ? xt = r.DEPTH24_STENCIL8 : xt = r.DEPTH_COMPONENT16 : x.type === _i && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === _r && xt === r.DEPTH_COMPONENT && x.type !== Cl && x.type !== zi && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = zi, It = s.convert(x.type)), x.format === ss && xt === r.DEPTH_COMPONENT && (xt = r.DEPTH_STENCIL, x.type !== mr && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = mr, It = s.convert(x.type))), Me && (se ? e.texStorage2D(r.TEXTURE_2D, 1, xt, tt.width, tt.height) : e.texImage2D(r.TEXTURE_2D, 0, xt, tt.width, tt.height, 0, $t, It, null));
            else if (x.isDataTexture) if (zt.length > 0 && ce) {
              se && Me && e.texStorage2D(r.TEXTURE_2D, Xt, xt, zt[0].width, zt[0].height);
              for (let at = 0, L = zt.length; at < L; at++) mt = zt[at], se ? e.texSubImage2D(r.TEXTURE_2D, at, 0, 0, mt.width, mt.height, $t, It, mt.data) : e.texImage2D(r.TEXTURE_2D, at, xt, mt.width, mt.height, 0, $t, It, mt.data);
              x.generateMipmaps = false;
            } else se ? (Me && e.texStorage2D(r.TEXTURE_2D, Xt, xt, tt.width, tt.height), e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, tt.width, tt.height, $t, It, tt.data)) : e.texImage2D(r.TEXTURE_2D, 0, xt, tt.width, tt.height, 0, $t, It, tt.data);
            else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
              se && Me && e.texStorage3D(r.TEXTURE_2D_ARRAY, Xt, xt, zt[0].width, zt[0].height, tt.depth);
              for (let at = 0, L = zt.length; at < L; at++) mt = zt[at], x.format !== Mn ? $t !== null ? se ? e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, at, 0, 0, 0, mt.width, mt.height, tt.depth, $t, mt.data, 0, 0) : e.compressedTexImage3D(r.TEXTURE_2D_ARRAY, at, xt, mt.width, mt.height, tt.depth, 0, mt.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : se ? e.texSubImage3D(r.TEXTURE_2D_ARRAY, at, 0, 0, 0, mt.width, mt.height, tt.depth, $t, It, mt.data) : e.texImage3D(r.TEXTURE_2D_ARRAY, at, xt, mt.width, mt.height, tt.depth, 0, $t, It, mt.data);
            } else {
              se && Me && e.texStorage2D(r.TEXTURE_2D, Xt, xt, zt[0].width, zt[0].height);
              for (let at = 0, L = zt.length; at < L; at++) mt = zt[at], x.format !== Mn ? $t !== null ? se ? e.compressedTexSubImage2D(r.TEXTURE_2D, at, 0, 0, mt.width, mt.height, $t, mt.data) : e.compressedTexImage2D(r.TEXTURE_2D, at, xt, mt.width, mt.height, 0, mt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : se ? e.texSubImage2D(r.TEXTURE_2D, at, 0, 0, mt.width, mt.height, $t, It, mt.data) : e.texImage2D(r.TEXTURE_2D, at, xt, mt.width, mt.height, 0, $t, It, mt.data);
            }
            else if (x.isDataArrayTexture) se ? (Me && e.texStorage3D(r.TEXTURE_2D_ARRAY, Xt, xt, tt.width, tt.height, tt.depth), e.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, tt.width, tt.height, tt.depth, $t, It, tt.data)) : e.texImage3D(r.TEXTURE_2D_ARRAY, 0, xt, tt.width, tt.height, tt.depth, 0, $t, It, tt.data);
            else if (x.isData3DTexture) se ? (Me && e.texStorage3D(r.TEXTURE_3D, Xt, xt, tt.width, tt.height, tt.depth), e.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, tt.width, tt.height, tt.depth, $t, It, tt.data)) : e.texImage3D(r.TEXTURE_3D, 0, xt, tt.width, tt.height, tt.depth, 0, $t, It, tt.data);
            else if (x.isFramebufferTexture) {
              if (Me) if (se) e.texStorage2D(r.TEXTURE_2D, Xt, xt, tt.width, tt.height);
              else {
                let at = tt.width, L = tt.height;
                for (let ot = 0; ot < Xt; ot++) e.texImage2D(r.TEXTURE_2D, ot, xt, at, L, 0, $t, It, null), at >>= 1, L >>= 1;
              }
            } else if (zt.length > 0 && ce) {
              se && Me && e.texStorage2D(r.TEXTURE_2D, Xt, xt, zt[0].width, zt[0].height);
              for (let at = 0, L = zt.length; at < L; at++) mt = zt[at], se ? e.texSubImage2D(r.TEXTURE_2D, at, 0, 0, $t, It, mt) : e.texImage2D(r.TEXTURE_2D, at, xt, $t, It, mt);
              x.generateMipmaps = false;
            } else se ? (Me && e.texStorage2D(r.TEXTURE_2D, Xt, xt, tt.width, tt.height), e.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, $t, It, tt)) : e.texImage2D(r.TEXTURE_2D, 0, xt, $t, It, tt);
            b(x, ce) && v(nt), vt.__version = rt.version, x.onUpdate && x.onUpdate(x);
          }
          E.__version = x.version;
        }
        function _t(E, x, k) {
          if (x.image.length !== 6) return;
          const nt = Z(E, x), et = x.source;
          e.bindTexture(r.TEXTURE_CUBE_MAP, E.__webglTexture, r.TEXTURE0 + k);
          const rt = n.get(et);
          if (et.version !== rt.__version || nt === true) {
            e.activeTexture(r.TEXTURE0 + k);
            const vt = ie.getPrimaries(ie.workingColorSpace), ht = x.colorSpace === En ? null : ie.getPrimaries(x.colorSpace), pt = x.colorSpace === En || vt === ht ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, pt);
            const Ct = x.isCompressedTexture || x.image[0].isCompressedTexture, Vt = x.image[0] && x.image[0].isDataTexture, tt = [];
            for (let at = 0; at < 6; at++) !Ct && !Vt ? tt[at] = w(x.image[at], false, true, i.maxCubemapSize) : tt[at] = Vt ? x.image[at].image : x.image[at], tt[at] = kt(x, tt[at]);
            const ce = tt[0], $t = m(ce) || o, It = s.convert(x.format, x.colorSpace), xt = s.convert(x.type), mt = R(x.internalFormat, It, xt, x.colorSpace), zt = o && x.isVideoTexture !== true, se = rt.__version === void 0 || nt === true;
            let Me = I(x, ce, $t);
            X(r.TEXTURE_CUBE_MAP, x, $t);
            let Xt;
            if (Ct) {
              zt && se && e.texStorage2D(r.TEXTURE_CUBE_MAP, Me, mt, ce.width, ce.height);
              for (let at = 0; at < 6; at++) {
                Xt = tt[at].mipmaps;
                for (let L = 0; L < Xt.length; L++) {
                  const ot = Xt[L];
                  x.format !== Mn ? It !== null ? zt ? e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L, 0, 0, ot.width, ot.height, It, ot.data) : e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L, mt, ot.width, ot.height, 0, ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : zt ? e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L, 0, 0, ot.width, ot.height, It, xt, ot.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L, mt, ot.width, ot.height, 0, It, xt, ot.data);
                }
              }
            } else {
              Xt = x.mipmaps, zt && se && (Xt.length > 0 && Me++, e.texStorage2D(r.TEXTURE_CUBE_MAP, Me, mt, tt[0].width, tt[0].height));
              for (let at = 0; at < 6; at++) if (Vt) {
                zt ? e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0, 0, 0, tt[at].width, tt[at].height, It, xt, tt[at].data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0, mt, tt[at].width, tt[at].height, 0, It, xt, tt[at].data);
                for (let L = 0; L < Xt.length; L++) {
                  const ct = Xt[L].image[at].image;
                  zt ? e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L + 1, 0, 0, ct.width, ct.height, It, xt, ct.data) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L + 1, mt, ct.width, ct.height, 0, It, xt, ct.data);
                }
              } else {
                zt ? e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0, 0, 0, It, xt, tt[at]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0, mt, It, xt, tt[at]);
                for (let L = 0; L < Xt.length; L++) {
                  const ot = Xt[L];
                  zt ? e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L + 1, 0, 0, It, xt, ot.image[at]) : e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + at, L + 1, mt, It, xt, ot.image[at]);
                }
              }
            }
            b(x, $t) && v(r.TEXTURE_CUBE_MAP), rt.__version = et.version, x.onUpdate && x.onUpdate(x);
          }
          E.__version = x.version;
        }
        function ft(E, x, k, nt, et, rt) {
          const vt = s.convert(k.format, k.colorSpace), ht = s.convert(k.type), pt = R(k.internalFormat, vt, ht, k.colorSpace);
          if (!n.get(x).__hasExternalTextures) {
            const Vt = Math.max(1, x.width >> rt), tt = Math.max(1, x.height >> rt);
            et === r.TEXTURE_3D || et === r.TEXTURE_2D_ARRAY ? e.texImage3D(et, rt, pt, Vt, tt, x.depth, 0, vt, ht, null) : e.texImage2D(et, rt, pt, Vt, tt, 0, vt, ht, null);
          }
          e.bindFramebuffer(r.FRAMEBUFFER, E), wt(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, nt, et, n.get(k).__webglTexture, 0, Ut(x)) : (et === r.TEXTURE_2D || et >= r.TEXTURE_CUBE_MAP_POSITIVE_X && et <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, nt, et, n.get(k).__webglTexture, rt), e.bindFramebuffer(r.FRAMEBUFFER, null);
        }
        function Rt(E, x, k) {
          if (r.bindRenderbuffer(r.RENDERBUFFER, E), x.depthBuffer && !x.stencilBuffer) {
            let nt = o === true ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
            if (k || wt(x)) {
              const et = x.depthTexture;
              et && et.isDepthTexture && (et.type === _i ? nt = r.DEPTH_COMPONENT32F : et.type === zi && (nt = r.DEPTH_COMPONENT24));
              const rt = Ut(x);
              wt(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, rt, nt, x.width, x.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, rt, nt, x.width, x.height);
            } else r.renderbufferStorage(r.RENDERBUFFER, nt, x.width, x.height);
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, E);
          } else if (x.depthBuffer && x.stencilBuffer) {
            const nt = Ut(x);
            k && wt(x) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, nt, r.DEPTH24_STENCIL8, x.width, x.height) : wt(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, nt, r.DEPTH24_STENCIL8, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, E);
          } else {
            const nt = x.isWebGLMultipleRenderTargets === true ? x.texture : [
              x.texture
            ];
            for (let et = 0; et < nt.length; et++) {
              const rt = nt[et], vt = s.convert(rt.format, rt.colorSpace), ht = s.convert(rt.type), pt = R(rt.internalFormat, vt, ht, rt.colorSpace), Ct = Ut(x);
              k && wt(x) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Ct, pt, x.width, x.height) : wt(x) ? c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Ct, pt, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, pt, x.width, x.height);
            }
          }
          r.bindRenderbuffer(r.RENDERBUFFER, null);
        }
        function Dt(E, x) {
          if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (e.bindFramebuffer(r.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), j(x.depthTexture, 0);
          const nt = n.get(x.depthTexture).__webglTexture, et = Ut(x);
          if (x.depthTexture.format === _r) wt(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, nt, 0, et) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, nt, 0);
          else if (x.depthTexture.format === ss) wt(x) ? c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, nt, 0, et) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, nt, 0);
          else throw new Error("Unknown depthTexture format");
        }
        function Et(E) {
          const x = n.get(E), k = E.isWebGLCubeRenderTarget === true;
          if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
            if (k) throw new Error("target.depthTexture not supported in Cube render targets");
            Dt(x.__webglFramebuffer, E);
          } else if (k) {
            x.__webglDepthbuffer = [];
            for (let nt = 0; nt < 6; nt++) e.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[nt]), x.__webglDepthbuffer[nt] = r.createRenderbuffer(), Rt(x.__webglDepthbuffer[nt], E, false);
          } else e.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = r.createRenderbuffer(), Rt(x.__webglDepthbuffer, E, false);
          e.bindFramebuffer(r.FRAMEBUFFER, null);
        }
        function Gt(E, x, k) {
          const nt = n.get(E);
          x !== void 0 && ft(nt.__webglFramebuffer, E, E.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), k !== void 0 && Et(E);
        }
        function H(E) {
          const x = E.texture, k = n.get(E), nt = n.get(x);
          E.addEventListener("dispose", B), E.isWebGLMultipleRenderTargets !== true && (nt.__webglTexture === void 0 && (nt.__webglTexture = r.createTexture()), nt.__version = x.version, a.memory.textures++);
          const et = E.isWebGLCubeRenderTarget === true, rt = E.isWebGLMultipleRenderTargets === true, vt = m(E) || o;
          if (et) {
            k.__webglFramebuffer = [];
            for (let ht = 0; ht < 6; ht++) if (o && x.mipmaps && x.mipmaps.length > 0) {
              k.__webglFramebuffer[ht] = [];
              for (let pt = 0; pt < x.mipmaps.length; pt++) k.__webglFramebuffer[ht][pt] = r.createFramebuffer();
            } else k.__webglFramebuffer[ht] = r.createFramebuffer();
          } else {
            if (o && x.mipmaps && x.mipmaps.length > 0) {
              k.__webglFramebuffer = [];
              for (let ht = 0; ht < x.mipmaps.length; ht++) k.__webglFramebuffer[ht] = r.createFramebuffer();
            } else k.__webglFramebuffer = r.createFramebuffer();
            if (rt) if (i.drawBuffers) {
              const ht = E.texture;
              for (let pt = 0, Ct = ht.length; pt < Ct; pt++) {
                const Vt = n.get(ht[pt]);
                Vt.__webglTexture === void 0 && (Vt.__webglTexture = r.createTexture(), a.memory.textures++);
              }
            } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
            if (o && E.samples > 0 && wt(E) === false) {
              const ht = rt ? x : [
                x
              ];
              k.__webglMultisampledFramebuffer = r.createFramebuffer(), k.__webglColorRenderbuffer = [], e.bindFramebuffer(r.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
              for (let pt = 0; pt < ht.length; pt++) {
                const Ct = ht[pt];
                k.__webglColorRenderbuffer[pt] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, k.__webglColorRenderbuffer[pt]);
                const Vt = s.convert(Ct.format, Ct.colorSpace), tt = s.convert(Ct.type), ce = R(Ct.internalFormat, Vt, tt, Ct.colorSpace, E.isXRRenderTarget === true), $t = Ut(E);
                r.renderbufferStorageMultisample(r.RENDERBUFFER, $t, ce, E.width, E.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + pt, r.RENDERBUFFER, k.__webglColorRenderbuffer[pt]);
              }
              r.bindRenderbuffer(r.RENDERBUFFER, null), E.depthBuffer && (k.__webglDepthRenderbuffer = r.createRenderbuffer(), Rt(k.__webglDepthRenderbuffer, E, true)), e.bindFramebuffer(r.FRAMEBUFFER, null);
            }
          }
          if (et) {
            e.bindTexture(r.TEXTURE_CUBE_MAP, nt.__webglTexture), X(r.TEXTURE_CUBE_MAP, x, vt);
            for (let ht = 0; ht < 6; ht++) if (o && x.mipmaps && x.mipmaps.length > 0) for (let pt = 0; pt < x.mipmaps.length; pt++) ft(k.__webglFramebuffer[ht][pt], E, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ht, pt);
            else ft(k.__webglFramebuffer[ht], E, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ht, 0);
            b(x, vt) && v(r.TEXTURE_CUBE_MAP), e.unbindTexture();
          } else if (rt) {
            const ht = E.texture;
            for (let pt = 0, Ct = ht.length; pt < Ct; pt++) {
              const Vt = ht[pt], tt = n.get(Vt);
              e.bindTexture(r.TEXTURE_2D, tt.__webglTexture), X(r.TEXTURE_2D, Vt, vt), ft(k.__webglFramebuffer, E, Vt, r.COLOR_ATTACHMENT0 + pt, r.TEXTURE_2D, 0), b(Vt, vt) && v(r.TEXTURE_2D);
            }
            e.unbindTexture();
          } else {
            let ht = r.TEXTURE_2D;
            if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (o ? ht = E.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), e.bindTexture(ht, nt.__webglTexture), X(ht, x, vt), o && x.mipmaps && x.mipmaps.length > 0) for (let pt = 0; pt < x.mipmaps.length; pt++) ft(k.__webglFramebuffer[pt], E, x, r.COLOR_ATTACHMENT0, ht, pt);
            else ft(k.__webglFramebuffer, E, x, r.COLOR_ATTACHMENT0, ht, 0);
            b(x, vt) && v(ht), e.unbindTexture();
          }
          E.depthBuffer && Et(E);
        }
        function Je(E) {
          const x = m(E) || o, k = E.isWebGLMultipleRenderTargets === true ? E.texture : [
            E.texture
          ];
          for (let nt = 0, et = k.length; nt < et; nt++) {
            const rt = k[nt];
            if (b(rt, x)) {
              const vt = E.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, ht = n.get(rt).__webglTexture;
              e.bindTexture(vt, ht), v(vt), e.unbindTexture();
            }
          }
        }
        function bt(E) {
          if (o && E.samples > 0 && wt(E) === false) {
            const x = E.isWebGLMultipleRenderTargets ? E.texture : [
              E.texture
            ], k = E.width, nt = E.height;
            let et = r.COLOR_BUFFER_BIT;
            const rt = [], vt = E.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ht = n.get(E), pt = E.isWebGLMultipleRenderTargets === true;
            if (pt) for (let Ct = 0; Ct < x.length; Ct++) e.bindFramebuffer(r.FRAMEBUFFER, ht.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ct, r.RENDERBUFFER, null), e.bindFramebuffer(r.FRAMEBUFFER, ht.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ct, r.TEXTURE_2D, null, 0);
            e.bindFramebuffer(r.READ_FRAMEBUFFER, ht.__webglMultisampledFramebuffer), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, ht.__webglFramebuffer);
            for (let Ct = 0; Ct < x.length; Ct++) {
              rt.push(r.COLOR_ATTACHMENT0 + Ct), E.depthBuffer && rt.push(vt);
              const Vt = ht.__ignoreDepthValues !== void 0 ? ht.__ignoreDepthValues : false;
              if (Vt === false && (E.depthBuffer && (et |= r.DEPTH_BUFFER_BIT), E.stencilBuffer && (et |= r.STENCIL_BUFFER_BIT)), pt && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, ht.__webglColorRenderbuffer[Ct]), Vt === true && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [
                vt
              ]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [
                vt
              ])), pt) {
                const tt = n.get(x[Ct]).__webglTexture;
                r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, tt, 0);
              }
              r.blitFramebuffer(0, 0, k, nt, 0, 0, k, nt, et, r.NEAREST), l && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, rt);
            }
            if (e.bindFramebuffer(r.READ_FRAMEBUFFER, null), e.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), pt) for (let Ct = 0; Ct < x.length; Ct++) {
              e.bindFramebuffer(r.FRAMEBUFFER, ht.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ct, r.RENDERBUFFER, ht.__webglColorRenderbuffer[Ct]);
              const Vt = n.get(x[Ct]).__webglTexture;
              e.bindFramebuffer(r.FRAMEBUFFER, ht.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Ct, r.TEXTURE_2D, Vt, 0);
            }
            e.bindFramebuffer(r.DRAW_FRAMEBUFFER, ht.__webglMultisampledFramebuffer);
          }
        }
        function Ut(E) {
          return Math.min(i.maxSamples, E.samples);
        }
        function wt(E) {
          const x = n.get(E);
          return o && E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
        }
        function _e(E) {
          const x = a.render.frame;
          h.get(E) !== x && (h.set(E, x), E.update());
        }
        function kt(E, x) {
          const k = E.colorSpace, nt = E.format, et = E.type;
          return E.isCompressedTexture === true || E.isVideoTexture === true || E.format === al || k !== ke && k !== En && (ie.getTransfer(k) === me ? o === false ? t.has("EXT_sRGB") === true && nt === Mn ? (E.format = al, E.minFilter = on, E.generateMipmaps = false) : x = of.sRGBToLinear(x) : (nt !== Mn || et !== ki) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)), x;
        }
        this.allocateTextureUnit = D, this.resetTextureUnits = it, this.setTexture2D = j, this.setTexture2DArray = $, this.setTexture3D = K, this.setTextureCube = Y, this.rebindTextures = Gt, this.setupRenderTarget = H, this.updateRenderTargetMipmap = Je, this.updateMultisampleRenderTarget = bt, this.setupDepthRenderbuffer = Et, this.setupFrameBufferTexture = ft, this.useMultisampledRTT = wt;
      }
      function qy(r, t, e) {
        const n = e.isWebGL2;
        function i(s, a = En) {
          let o;
          const c = ie.getTransfer(a);
          if (s === ki) return r.UNSIGNED_BYTE;
          if (s === Yd) return r.UNSIGNED_SHORT_4_4_4_4;
          if (s === Kd) return r.UNSIGNED_SHORT_5_5_5_1;
          if (s === mm) return r.BYTE;
          if (s === _m) return r.SHORT;
          if (s === Cl) return r.UNSIGNED_SHORT;
          if (s === qd) return r.INT;
          if (s === zi) return r.UNSIGNED_INT;
          if (s === _i) return r.FLOAT;
          if (s === rs) return n ? r.HALF_FLOAT : (o = t.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
          if (s === gm) return r.ALPHA;
          if (s === Mn) return r.RGBA;
          if (s === wm) return r.LUMINANCE;
          if (s === vm) return r.LUMINANCE_ALPHA;
          if (s === _r) return r.DEPTH_COMPONENT;
          if (s === ss) return r.DEPTH_STENCIL;
          if (s === al) return o = t.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
          if (s === ym) return r.RED;
          if (s === Jd) return r.RED_INTEGER;
          if (s === xm) return r.RG;
          if (s === $d) return r.RG_INTEGER;
          if (s === Zd) return r.RGBA_INTEGER;
          if (s === Yo || s === Ko || s === Jo || s === $o) if (c === me) if (o = t.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
            if (s === Yo) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
            if (s === Ko) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            if (s === Jo) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            if (s === $o) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
          } else return null;
          else if (o = t.get("WEBGL_compressed_texture_s3tc"), o !== null) {
            if (s === Yo) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (s === Ko) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (s === Jo) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (s === $o) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          } else return null;
          if (s === Ah || s === Rh || s === Ch || s === Ph) if (o = t.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
            if (s === Ah) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (s === Rh) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (s === Ch) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (s === Ph) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          } else return null;
          if (s === Qd) return o = t.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
          if (s === Lh || s === Ih) if (o = t.get("WEBGL_compressed_texture_etc"), o !== null) {
            if (s === Lh) return c === me ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
            if (s === Ih) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
          } else return null;
          if (s === Dh || s === Uh || s === Nh || s === Fh || s === Oh || s === Bh || s === zh || s === Hh || s === Gh || s === kh || s === Vh || s === Wh || s === jh || s === Xh) if (o = t.get("WEBGL_compressed_texture_astc"), o !== null) {
            if (s === Dh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (s === Uh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (s === Nh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (s === Fh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (s === Oh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (s === Bh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (s === zh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (s === Hh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (s === Gh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (s === kh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (s === Vh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (s === Wh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (s === jh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (s === Xh) return c === me ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
          } else return null;
          if (s === Zo || s === qh || s === Yh) if (o = t.get("EXT_texture_compression_bptc"), o !== null) {
            if (s === Zo) return c === me ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            if (s === qh) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
            if (s === Yh) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
          } else return null;
          if (s === Sm || s === Kh || s === Jh || s === $h) if (o = t.get("EXT_texture_compression_rgtc"), o !== null) {
            if (s === Zo) return o.COMPRESSED_RED_RGTC1_EXT;
            if (s === Kh) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
            if (s === Jh) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
            if (s === $h) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
          } else return null;
          return s === mr ? n ? r.UNSIGNED_INT_24_8 : (o = t.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null;
        }
        return {
          convert: i
        };
      }
      class Yy extends nn {
        constructor(t = []) {
          super(), this.isArrayCamera = true, this.cameras = t;
        }
      }
      class ur extends be {
        constructor() {
          super(), this.isGroup = true, this.type = "Group";
        }
      }
      const Ky = {
        type: "move"
      };
      class Sc {
        constructor() {
          this._targetRay = null, this._grip = null, this._hand = null;
        }
        getHandSpace() {
          return this._hand === null && (this._hand = new ur(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = {
            pinching: false
          }), this._hand;
        }
        getTargetRaySpace() {
          return this._targetRay === null && (this._targetRay = new ur(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new C()), this._targetRay;
        }
        getGripSpace() {
          return this._grip === null && (this._grip = new ur(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new C()), this._grip;
        }
        dispatchEvent(t) {
          return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
        }
        connect(t) {
          if (t && t.hand) {
            const e = this._hand;
            if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
          }
          return this.dispatchEvent({
            type: "connected",
            data: t
          }), this;
        }
        disconnect(t) {
          return this.dispatchEvent({
            type: "disconnected",
            data: t
          }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
        }
        update(t, e, n) {
          let i = null, s = null, a = null;
          const o = this._targetRay, c = this._grip, l = this._hand;
          if (t && e.session.visibilityState !== "visible-blurred") {
            if (l && t.hand) {
              a = true;
              for (const w of t.hand.values()) {
                const m = e.getJointPose(w, n), f = this._getHandJoint(l, w);
                m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
              }
              const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, _ = 5e-3;
              l.inputState.pinching && d > p + _ ? (l.inputState.pinching = false, this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this
              })) : !l.inputState.pinching && d <= p - _ && (l.inputState.pinching = true, this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this
              }));
            } else c !== null && t.gripSpace && (s = e.getPose(t.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, s.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = false, s.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = false));
            o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Ky)));
          }
          return o !== null && (o.visible = i !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
        }
        _getHandJoint(t, e) {
          if (t.joints[e.jointName] === void 0) {
            const n = new ur();
            n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
          }
          return t.joints[e.jointName];
        }
      }
      class Jy extends ps {
        constructor(t, e) {
          super();
          const n = this;
          let i = null, s = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, p = null, _ = null;
          const w = e.getContextAttributes();
          let m = null, f = null;
          const b = [], v = [], R = new Ot();
          let I = null;
          const y = new nn();
          y.layers.enable(1), y.viewport = new ne();
          const A = new nn();
          A.layers.enable(2), A.viewport = new ne();
          const B = [
            y,
            A
          ], S = new Yy();
          S.layers.enable(1), S.layers.enable(2);
          let T = null, z = null;
          this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
            let Z = b[X];
            return Z === void 0 && (Z = new Sc(), b[X] = Z), Z.getTargetRaySpace();
          }, this.getControllerGrip = function(X) {
            let Z = b[X];
            return Z === void 0 && (Z = new Sc(), b[X] = Z), Z.getGripSpace();
          }, this.getHand = function(X) {
            let Z = b[X];
            return Z === void 0 && (Z = new Sc(), b[X] = Z), Z.getHandSpace();
          };
          function q(X) {
            const Z = v.indexOf(X.inputSource);
            if (Z === -1) return;
            const ut = b[Z];
            ut !== void 0 && (ut.update(X.inputSource, X.frame, l || a), ut.dispatchEvent({
              type: X.type,
              data: X.inputSource
            }));
          }
          function it() {
            i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", it), i.removeEventListener("inputsourceschange", D);
            for (let X = 0; X < b.length; X++) {
              const Z = v[X];
              Z !== null && (v[X] = null, b[X].disconnect(Z));
            }
            T = null, z = null, t.setRenderTarget(m), p = null, d = null, u = null, i = null, f = null, lt.stop(), n.isPresenting = false, t.setPixelRatio(I), t.setSize(R.width, R.height, false), n.dispatchEvent({
              type: "sessionend"
            });
          }
          this.setFramebufferScaleFactor = function(X) {
            s = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
          }, this.setReferenceSpaceType = function(X) {
            o = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
          }, this.getReferenceSpace = function() {
            return l || a;
          }, this.setReferenceSpace = function(X) {
            l = X;
          }, this.getBaseLayer = function() {
            return d !== null ? d : p;
          }, this.getBinding = function() {
            return u;
          }, this.getFrame = function() {
            return _;
          }, this.getSession = function() {
            return i;
          }, this.setSession = async function(X) {
            if (i = X, i !== null) {
              if (m = t.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", it), i.addEventListener("inputsourceschange", D), w.xrCompatible !== true && await e.makeXRCompatible(), I = t.getPixelRatio(), t.getSize(R), i.renderState.layers === void 0 || t.capabilities.isWebGL2 === false) {
                const Z = {
                  antialias: i.renderState.layers === void 0 ? w.antialias : true,
                  alpha: true,
                  depth: w.depth,
                  stencil: w.stencil,
                  framebufferScaleFactor: s
                };
                p = new XRWebGLLayer(i, e, Z), i.updateRenderState({
                  baseLayer: p
                }), t.setPixelRatio(1), t.setSize(p.framebufferWidth, p.framebufferHeight, false), f = new Wi(p.framebufferWidth, p.framebufferHeight, {
                  format: Mn,
                  type: ki,
                  colorSpace: t.outputColorSpace,
                  stencilBuffer: w.stencil
                });
              } else {
                let Z = null, ut = null, _t = null;
                w.depth && (_t = w.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, Z = w.stencil ? ss : _r, ut = w.stencil ? mr : zi);
                const ft = {
                  colorFormat: e.RGBA8,
                  depthFormat: _t,
                  scaleFactor: s
                };
                u = new XRWebGLBinding(i, e), d = u.createProjectionLayer(ft), i.updateRenderState({
                  layers: [
                    d
                  ]
                }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, false), f = new Wi(d.textureWidth, d.textureHeight, {
                  format: Mn,
                  type: ki,
                  depthTexture: new vf(d.textureWidth, d.textureHeight, ut, void 0, void 0, void 0, void 0, void 0, void 0, Z),
                  stencilBuffer: w.stencil,
                  colorSpace: t.outputColorSpace,
                  samples: w.antialias ? 4 : 0
                });
                const Rt = t.properties.get(f);
                Rt.__ignoreDepthValues = d.ignoreDepthValues;
              }
              f.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), lt.setContext(i), lt.start(), n.isPresenting = true, n.dispatchEvent({
                type: "sessionstart"
              });
            }
          }, this.getEnvironmentBlendMode = function() {
            if (i !== null) return i.environmentBlendMode;
          };
          function D(X) {
            for (let Z = 0; Z < X.removed.length; Z++) {
              const ut = X.removed[Z], _t = v.indexOf(ut);
              _t >= 0 && (v[_t] = null, b[_t].disconnect(ut));
            }
            for (let Z = 0; Z < X.added.length; Z++) {
              const ut = X.added[Z];
              let _t = v.indexOf(ut);
              if (_t === -1) {
                for (let Rt = 0; Rt < b.length; Rt++) if (Rt >= v.length) {
                  v.push(ut), _t = Rt;
                  break;
                } else if (v[Rt] === null) {
                  v[Rt] = ut, _t = Rt;
                  break;
                }
                if (_t === -1) break;
              }
              const ft = b[_t];
              ft && ft.connect(ut);
            }
          }
          const O = new C(), j = new C();
          function $(X, Z, ut) {
            O.setFromMatrixPosition(Z.matrixWorld), j.setFromMatrixPosition(ut.matrixWorld);
            const _t = O.distanceTo(j), ft = Z.projectionMatrix.elements, Rt = ut.projectionMatrix.elements, Dt = ft[14] / (ft[10] - 1), Et = ft[14] / (ft[10] + 1), Gt = (ft[9] + 1) / ft[5], H = (ft[9] - 1) / ft[5], Je = (ft[8] - 1) / ft[0], bt = (Rt[8] + 1) / Rt[0], Ut = Dt * Je, wt = Dt * bt, _e = _t / (-Je + bt), kt = _e * -Je;
            Z.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(kt), X.translateZ(_e), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert();
            const E = Dt + _e, x = Et + _e, k = Ut - kt, nt = wt + (_t - kt), et = Gt * Et / x * E, rt = H * Et / x * E;
            X.projectionMatrix.makePerspective(k, nt, et, rt, E, x), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
          }
          function K(X, Z) {
            Z === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(Z.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
          }
          this.updateCamera = function(X) {
            if (i === null) return;
            S.near = A.near = y.near = X.near, S.far = A.far = y.far = X.far, (T !== S.near || z !== S.far) && (i.updateRenderState({
              depthNear: S.near,
              depthFar: S.far
            }), T = S.near, z = S.far);
            const Z = X.parent, ut = S.cameras;
            K(S, Z);
            for (let _t = 0; _t < ut.length; _t++) K(ut[_t], Z);
            ut.length === 2 ? $(S, y, A) : S.projectionMatrix.copy(y.projectionMatrix), Y(X, S, Z);
          };
          function Y(X, Z, ut) {
            ut === null ? X.matrix.copy(Z.matrixWorld) : (X.matrix.copy(ut.matrixWorld), X.matrix.invert(), X.matrix.multiply(Z.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(Z.projectionMatrix), X.projectionMatrixInverse.copy(Z.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = os * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
          }
          this.getCamera = function() {
            return S;
          }, this.getFoveation = function() {
            if (!(d === null && p === null)) return c;
          }, this.setFoveation = function(X) {
            c = X, d !== null && (d.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
          };
          let J = null;
          function Q(X, Z) {
            if (h = Z.getViewerPose(l || a), _ = Z, h !== null) {
              const ut = h.views;
              p !== null && (t.setRenderTargetFramebuffer(f, p.framebuffer), t.setRenderTarget(f));
              let _t = false;
              ut.length !== S.cameras.length && (S.cameras.length = 0, _t = true);
              for (let ft = 0; ft < ut.length; ft++) {
                const Rt = ut[ft];
                let Dt = null;
                if (p !== null) Dt = p.getViewport(Rt);
                else {
                  const Gt = u.getViewSubImage(d, Rt);
                  Dt = Gt.viewport, ft === 0 && (t.setRenderTargetTextures(f, Gt.colorTexture, d.ignoreDepthValues ? void 0 : Gt.depthStencilTexture), t.setRenderTarget(f));
                }
                let Et = B[ft];
                Et === void 0 && (Et = new nn(), Et.layers.enable(ft), Et.viewport = new ne(), B[ft] = Et), Et.matrix.fromArray(Rt.transform.matrix), Et.matrix.decompose(Et.position, Et.quaternion, Et.scale), Et.projectionMatrix.fromArray(Rt.projectionMatrix), Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(), Et.viewport.set(Dt.x, Dt.y, Dt.width, Dt.height), ft === 0 && (S.matrix.copy(Et.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), _t === true && S.cameras.push(Et);
              }
            }
            for (let ut = 0; ut < b.length; ut++) {
              const _t = v[ut], ft = b[ut];
              _t !== null && ft !== void 0 && ft.update(_t, Z, l || a);
            }
            J && J(X, Z), Z.detectedPlanes && n.dispatchEvent({
              type: "planesdetected",
              data: Z
            }), _ = null;
          }
          const lt = new wf();
          lt.setAnimationLoop(Q), this.setAnimationLoop = function(X) {
            J = X;
          }, this.dispose = function() {
          };
        }
      }
      function $y(r, t) {
        function e(m, f) {
          m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
        }
        function n(m, f) {
          f.color.getRGB(m.fogColor.value, mf(r)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
        }
        function i(m, f, b, v, R) {
          f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), u(m, f)) : f.isMeshPhongMaterial ? (s(m, f), h(m, f)) : f.isMeshStandardMaterial ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, R)) : f.isMeshMatcapMaterial ? (s(m, f), _(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), w(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? c(m, f, b, v) : f.isSpriteMaterial ? l(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
        }
        function s(m, f) {
          m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, e(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, e(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, e(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === hn && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, e(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === hn && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, e(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, e(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, e(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
          const b = t.get(f).envMap;
          if (b && (m.envMap.value = b, m.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap) {
            m.lightMap.value = f.lightMap;
            const v = r._useLegacyLights === true ? Math.PI : 1;
            m.lightMapIntensity.value = f.lightMapIntensity * v, e(f.lightMap, m.lightMapTransform);
          }
          f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, e(f.aoMap, m.aoMapTransform));
        }
        function a(m, f) {
          m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, e(f.map, m.mapTransform));
        }
        function o(m, f) {
          m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
        }
        function c(m, f, b, v) {
          m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * b, m.scale.value = v * 0.5, f.map && (m.map.value = f.map, e(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, e(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
        }
        function l(m, f) {
          m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, e(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, e(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
        }
        function h(m, f) {
          m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
        }
        function u(m, f) {
          f.gradientMap && (m.gradientMap.value = f.gradientMap);
        }
        function d(m, f) {
          m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, e(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, e(f.roughnessMap, m.roughnessMapTransform)), t.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
        }
        function p(m, f, b) {
          m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, e(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, e(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, e(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, e(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, e(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === hn && m.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, e(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, e(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, e(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, e(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, e(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, e(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, e(f.specularIntensityMap, m.specularIntensityMapTransform));
        }
        function _(m, f) {
          f.matcap && (m.matcap.value = f.matcap);
        }
        function w(m, f) {
          const b = t.get(f).light;
          m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
        }
        return {
          refreshFogUniforms: n,
          refreshMaterialUniforms: i
        };
      }
      function Zy(r, t, e, n) {
        let i = {}, s = {}, a = [];
        const o = e.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
        function c(b, v) {
          const R = v.program;
          n.uniformBlockBinding(b, R);
        }
        function l(b, v) {
          let R = i[b.id];
          R === void 0 && (_(b), R = h(b), i[b.id] = R, b.addEventListener("dispose", m));
          const I = v.program;
          n.updateUBOMapping(b, I);
          const y = t.render.frame;
          s[b.id] !== y && (d(b), s[b.id] = y);
        }
        function h(b) {
          const v = u();
          b.__bindingPointIndex = v;
          const R = r.createBuffer(), I = b.__size, y = b.usage;
          return r.bindBuffer(r.UNIFORM_BUFFER, R), r.bufferData(r.UNIFORM_BUFFER, I, y), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, v, R), R;
        }
        function u() {
          for (let b = 0; b < o; b++) if (a.indexOf(b) === -1) return a.push(b), b;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        }
        function d(b) {
          const v = i[b.id], R = b.uniforms, I = b.__cache;
          r.bindBuffer(r.UNIFORM_BUFFER, v);
          for (let y = 0, A = R.length; y < A; y++) {
            const B = Array.isArray(R[y]) ? R[y] : [
              R[y]
            ];
            for (let S = 0, T = B.length; S < T; S++) {
              const z = B[S];
              if (p(z, y, S, I) === true) {
                const q = z.__offset, it = Array.isArray(z.value) ? z.value : [
                  z.value
                ];
                let D = 0;
                for (let O = 0; O < it.length; O++) {
                  const j = it[O], $ = w(j);
                  typeof j == "number" || typeof j == "boolean" ? (z.__data[0] = j, r.bufferSubData(r.UNIFORM_BUFFER, q + D, z.__data)) : j.isMatrix3 ? (z.__data[0] = j.elements[0], z.__data[1] = j.elements[1], z.__data[2] = j.elements[2], z.__data[3] = 0, z.__data[4] = j.elements[3], z.__data[5] = j.elements[4], z.__data[6] = j.elements[5], z.__data[7] = 0, z.__data[8] = j.elements[6], z.__data[9] = j.elements[7], z.__data[10] = j.elements[8], z.__data[11] = 0) : (j.toArray(z.__data, D), D += $.storage / Float32Array.BYTES_PER_ELEMENT);
                }
                r.bufferSubData(r.UNIFORM_BUFFER, q, z.__data);
              }
            }
          }
          r.bindBuffer(r.UNIFORM_BUFFER, null);
        }
        function p(b, v, R, I) {
          const y = b.value, A = v + "_" + R;
          if (I[A] === void 0) return typeof y == "number" || typeof y == "boolean" ? I[A] = y : I[A] = y.clone(), true;
          {
            const B = I[A];
            if (typeof y == "number" || typeof y == "boolean") {
              if (B !== y) return I[A] = y, true;
            } else if (B.equals(y) === false) return B.copy(y), true;
          }
          return false;
        }
        function _(b) {
          const v = b.uniforms;
          let R = 0;
          const I = 16;
          for (let A = 0, B = v.length; A < B; A++) {
            const S = Array.isArray(v[A]) ? v[A] : [
              v[A]
            ];
            for (let T = 0, z = S.length; T < z; T++) {
              const q = S[T], it = Array.isArray(q.value) ? q.value : [
                q.value
              ];
              for (let D = 0, O = it.length; D < O; D++) {
                const j = it[D], $ = w(j), K = R % I;
                K !== 0 && I - K < $.boundary && (R += I - K), q.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = R, R += $.storage;
              }
            }
          }
          const y = R % I;
          return y > 0 && (R += I - y), b.__size = R, b.__cache = {}, this;
        }
        function w(b) {
          const v = {
            boundary: 0,
            storage: 0
          };
          return typeof b == "number" || typeof b == "boolean" ? (v.boundary = 4, v.storage = 4) : b.isVector2 ? (v.boundary = 8, v.storage = 8) : b.isVector3 || b.isColor ? (v.boundary = 16, v.storage = 12) : b.isVector4 ? (v.boundary = 16, v.storage = 16) : b.isMatrix3 ? (v.boundary = 48, v.storage = 48) : b.isMatrix4 ? (v.boundary = 64, v.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), v;
        }
        function m(b) {
          const v = b.target;
          v.removeEventListener("dispose", m);
          const R = a.indexOf(v.__bindingPointIndex);
          a.splice(R, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
        }
        function f() {
          for (const b in i) r.deleteBuffer(i[b]);
          a = [], i = {}, s = {};
        }
        return {
          bind: c,
          update: l,
          dispose: f
        };
      }
      class Ef {
        constructor(t = {}) {
          const { canvas: e = Km(), context: n = null, depth: i = true, stencil: s = true, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = t;
          this.isWebGLRenderer = true;
          let d;
          n !== null ? d = n.getContextAttributes().alpha : d = a;
          const p = new Uint32Array(4), _ = new Int32Array(4);
          let w = null, m = null;
          const f = [], b = [];
          this.domElement = e, this.debug = {
            checkShaderErrors: true,
            onShaderError: null
          }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Se, this._useLegacyLights = false, this.toneMapping = Gi, this.toneMappingExposure = 1;
          const v = this;
          let R = false, I = 0, y = 0, A = null, B = -1, S = null;
          const T = new ne(), z = new ne();
          let q = null;
          const it = new At(0);
          let D = 0, O = e.width, j = e.height, $ = 1, K = null, Y = null;
          const J = new ne(0, 0, O, j), Q = new ne(0, 0, O, j);
          let lt = false;
          const X = new Il();
          let Z = false, ut = false, _t = null;
          const ft = new Bt(), Rt = new Ot(), Dt = new C(), Et = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: true
          };
          function Gt() {
            return A === null ? $ : 1;
          }
          let H = n;
          function Je(M, F) {
            for (let V = 0; V < M.length; V++) {
              const W = M[V], G = e.getContext(W, F);
              if (G !== null) return G;
            }
            return null;
          }
          try {
            const M = {
              alpha: true,
              depth: i,
              stencil: s,
              antialias: o,
              premultipliedAlpha: c,
              preserveDrawingBuffer: l,
              powerPreference: h,
              failIfMajorPerformanceCaveat: u
            };
            if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Rl}`), e.addEventListener("webglcontextlost", at, false), e.addEventListener("webglcontextrestored", L, false), e.addEventListener("webglcontextcreationerror", ot, false), H === null) {
              const F = [
                "webgl2",
                "webgl",
                "experimental-webgl"
              ];
              if (v.isWebGL1Renderer === true && F.shift(), H = Je(F, M), H === null) throw Je(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            typeof WebGLRenderingContext < "u" && H instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), H.getShaderPrecisionFormat === void 0 && (H.getShaderPrecisionFormat = function() {
              return {
                rangeMin: 1,
                rangeMax: 1,
                precision: 1
              };
            });
          } catch (M) {
            throw console.error("THREE.WebGLRenderer: " + M.message), M;
          }
          let bt, Ut, wt, _e, kt, E, x, k, nt, et, rt, vt, ht, pt, Ct, Vt, tt, ce, $t, It, xt, mt, zt, se;
          function Me() {
            bt = new cv(H), Ut = new nv(H, bt, t), bt.init(Ut), mt = new qy(H, bt, Ut), wt = new jy(H, bt, Ut), _e = new uv(H), kt = new Ly(), E = new Xy(H, bt, wt, kt, Ut, mt, _e), x = new rv(v), k = new ov(v), nt = new v_(H, Ut), zt = new tv(H, bt, nt, Ut), et = new lv(H, nt, _e, zt), rt = new mv(H, et, nt, _e), $t = new pv(H, Ut, E), Vt = new iv(kt), vt = new Py(v, x, k, bt, Ut, zt, Vt), ht = new $y(v, kt), pt = new Dy(), Ct = new zy(bt, Ut), ce = new Qw(v, x, k, wt, rt, d, c), tt = new Wy(v, rt, Ut), se = new Zy(H, _e, Ut, wt), It = new ev(H, bt, _e, Ut), xt = new hv(H, bt, _e, Ut), _e.programs = vt.programs, v.capabilities = Ut, v.extensions = bt, v.properties = kt, v.renderLists = pt, v.shadowMap = tt, v.state = wt, v.info = _e;
          }
          Me();
          const Xt = new Jy(v, H);
          this.xr = Xt, this.getContext = function() {
            return H;
          }, this.getContextAttributes = function() {
            return H.getContextAttributes();
          }, this.forceContextLoss = function() {
            const M = bt.get("WEBGL_lose_context");
            M && M.loseContext();
          }, this.forceContextRestore = function() {
            const M = bt.get("WEBGL_lose_context");
            M && M.restoreContext();
          }, this.getPixelRatio = function() {
            return $;
          }, this.setPixelRatio = function(M) {
            M !== void 0 && ($ = M, this.setSize(O, j, false));
          }, this.getSize = function(M) {
            return M.set(O, j);
          }, this.setSize = function(M, F, V = true) {
            if (Xt.isPresenting) {
              console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
              return;
            }
            O = M, j = F, e.width = Math.floor(M * $), e.height = Math.floor(F * $), V === true && (e.style.width = M + "px", e.style.height = F + "px"), this.setViewport(0, 0, M, F);
          }, this.getDrawingBufferSize = function(M) {
            return M.set(O * $, j * $).floor();
          }, this.setDrawingBufferSize = function(M, F, V) {
            O = M, j = F, $ = V, e.width = Math.floor(M * V), e.height = Math.floor(F * V), this.setViewport(0, 0, M, F);
          }, this.getCurrentViewport = function(M) {
            return M.copy(T);
          }, this.getViewport = function(M) {
            return M.copy(J);
          }, this.setViewport = function(M, F, V, W) {
            M.isVector4 ? J.set(M.x, M.y, M.z, M.w) : J.set(M, F, V, W), wt.viewport(T.copy(J).multiplyScalar($).floor());
          }, this.getScissor = function(M) {
            return M.copy(Q);
          }, this.setScissor = function(M, F, V, W) {
            M.isVector4 ? Q.set(M.x, M.y, M.z, M.w) : Q.set(M, F, V, W), wt.scissor(z.copy(Q).multiplyScalar($).floor());
          }, this.getScissorTest = function() {
            return lt;
          }, this.setScissorTest = function(M) {
            wt.setScissorTest(lt = M);
          }, this.setOpaqueSort = function(M) {
            K = M;
          }, this.setTransparentSort = function(M) {
            Y = M;
          }, this.getClearColor = function(M) {
            return M.copy(ce.getClearColor());
          }, this.setClearColor = function() {
            ce.setClearColor.apply(ce, arguments);
          }, this.getClearAlpha = function() {
            return ce.getClearAlpha();
          }, this.setClearAlpha = function() {
            ce.setClearAlpha.apply(ce, arguments);
          }, this.clear = function(M = true, F = true, V = true) {
            let W = 0;
            if (M) {
              let G = false;
              if (A !== null) {
                const dt = A.texture.format;
                G = dt === Zd || dt === $d || dt === Jd;
              }
              if (G) {
                const dt = A.texture.type, yt = dt === ki || dt === zi || dt === Cl || dt === mr || dt === Yd || dt === Kd, Tt = ce.getClearColor(), Lt = ce.getClearAlpha(), Wt = Tt.r, Nt = Tt.g, Ft = Tt.b;
                yt ? (p[0] = Wt, p[1] = Nt, p[2] = Ft, p[3] = Lt, H.clearBufferuiv(H.COLOR, 0, p)) : (_[0] = Wt, _[1] = Nt, _[2] = Ft, _[3] = Lt, H.clearBufferiv(H.COLOR, 0, _));
              } else W |= H.COLOR_BUFFER_BIT;
            }
            F && (W |= H.DEPTH_BUFFER_BIT), V && (W |= H.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), H.clear(W);
          }, this.clearColor = function() {
            this.clear(true, false, false);
          }, this.clearDepth = function() {
            this.clear(false, true, false);
          }, this.clearStencil = function() {
            this.clear(false, false, true);
          }, this.dispose = function() {
            e.removeEventListener("webglcontextlost", at, false), e.removeEventListener("webglcontextrestored", L, false), e.removeEventListener("webglcontextcreationerror", ot, false), pt.dispose(), Ct.dispose(), kt.dispose(), x.dispose(), k.dispose(), rt.dispose(), zt.dispose(), se.dispose(), vt.dispose(), Xt.dispose(), Xt.removeEventListener("sessionstart", $e), Xt.removeEventListener("sessionend", de), _t && (_t.dispose(), _t = null), Ze.stop();
          };
          function at(M) {
            M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = true;
          }
          function L() {
            console.log("THREE.WebGLRenderer: Context Restored."), R = false;
            const M = _e.autoReset, F = tt.enabled, V = tt.autoUpdate, W = tt.needsUpdate, G = tt.type;
            Me(), _e.autoReset = M, tt.enabled = F, tt.autoUpdate = V, tt.needsUpdate = W, tt.type = G;
          }
          function ot(M) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
          }
          function ct(M) {
            const F = M.target;
            F.removeEventListener("dispose", ct), Pt(F);
          }
          function Pt(M) {
            Mt(M), kt.remove(M);
          }
          function Mt(M) {
            const F = kt.get(M).programs;
            F !== void 0 && (F.forEach(function(V) {
              vt.releaseProgram(V);
            }), M.isShaderMaterial && vt.releaseShaderCache(M));
          }
          this.renderBufferDirect = function(M, F, V, W, G, dt) {
            F === null && (F = Et);
            const yt = G.isMesh && G.matrixWorld.determinant() < 0, Tt = Ip(M, F, V, W, G);
            wt.setMaterial(W, yt);
            let Lt = V.index, Wt = 1;
            if (W.wireframe === true) {
              if (Lt = et.getWireframeAttribute(V), Lt === void 0) return;
              Wt = 2;
            }
            const Nt = V.drawRange, Ft = V.attributes.position;
            let Ae = Nt.start * Wt, un = (Nt.start + Nt.count) * Wt;
            dt !== null && (Ae = Math.max(Ae, dt.start * Wt), un = Math.min(un, (dt.start + dt.count) * Wt)), Lt !== null ? (Ae = Math.max(Ae, 0), un = Math.min(un, Lt.count)) : Ft != null && (Ae = Math.max(Ae, 0), un = Math.min(un, Ft.count));
            const Fe = un - Ae;
            if (Fe < 0 || Fe === 1 / 0) return;
            zt.setup(G, W, Tt, V, Lt);
            let ni, ge = It;
            if (Lt !== null && (ni = nt.get(Lt), ge = xt, ge.setIndex(ni)), G.isMesh) W.wireframe === true ? (wt.setLineWidth(W.wireframeLinewidth * Gt()), ge.setMode(H.LINES)) : ge.setMode(H.TRIANGLES);
            else if (G.isLine) {
              let qt = W.linewidth;
              qt === void 0 && (qt = 1), wt.setLineWidth(qt * Gt()), G.isLineSegments ? ge.setMode(H.LINES) : G.isLineLoop ? ge.setMode(H.LINE_LOOP) : ge.setMode(H.LINE_STRIP);
            } else G.isPoints ? ge.setMode(H.POINTS) : G.isSprite && ge.setMode(H.TRIANGLES);
            if (G.isBatchedMesh) ge.renderMultiDraw(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount);
            else if (G.isInstancedMesh) ge.renderInstances(Ae, Fe, G.count);
            else if (V.isInstancedBufferGeometry) {
              const qt = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, Wo = Math.min(V.instanceCount, qt);
              ge.renderInstances(Ae, Fe, Wo);
            } else ge.render(Ae, Fe);
          };
          function he(M, F, V) {
            M.transparent === true && M.side === On && M.forceSinglePass === false ? (M.side = hn, M.needsUpdate = true, sa(M, F, V), M.side = xi, M.needsUpdate = true, sa(M, F, V), M.side = On) : sa(M, F, V);
          }
          this.compile = function(M, F, V = null) {
            V === null && (V = M), m = Ct.get(V), m.init(), b.push(m), V.traverseVisible(function(G) {
              G.isLight && G.layers.test(F.layers) && (m.pushLight(G), G.castShadow && m.pushShadow(G));
            }), M !== V && M.traverseVisible(function(G) {
              G.isLight && G.layers.test(F.layers) && (m.pushLight(G), G.castShadow && m.pushShadow(G));
            }), m.setupLights(v._useLegacyLights);
            const W = /* @__PURE__ */ new Set();
            return M.traverse(function(G) {
              const dt = G.material;
              if (dt) if (Array.isArray(dt)) for (let yt = 0; yt < dt.length; yt++) {
                const Tt = dt[yt];
                he(Tt, V, G), W.add(Tt);
              }
              else he(dt, V, G), W.add(dt);
            }), b.pop(), m = null, W;
          }, this.compileAsync = function(M, F, V = null) {
            const W = this.compile(M, F, V);
            return new Promise((G) => {
              function dt() {
                if (W.forEach(function(yt) {
                  kt.get(yt).currentProgram.isReady() && W.delete(yt);
                }), W.size === 0) {
                  G(M);
                  return;
                }
                setTimeout(dt, 10);
              }
              bt.get("KHR_parallel_shader_compile") !== null ? dt() : setTimeout(dt, 10);
            });
          };
          let ue = null;
          function Ne(M) {
            ue && ue(M);
          }
          function $e() {
            Ze.stop();
          }
          function de() {
            Ze.start();
          }
          const Ze = new wf();
          Ze.setAnimationLoop(Ne), typeof self < "u" && Ze.setContext(self), this.setAnimationLoop = function(M) {
            ue = M, Xt.setAnimationLoop(M), M === null ? Ze.stop() : Ze.start();
          }, Xt.addEventListener("sessionstart", $e), Xt.addEventListener("sessionend", de), this.render = function(M, F) {
            if (F !== void 0 && F.isCamera !== true) {
              console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
              return;
            }
            if (R === true) return;
            M.matrixWorldAutoUpdate === true && M.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === true && F.updateMatrixWorld(), Xt.enabled === true && Xt.isPresenting === true && (Xt.cameraAutoUpdate === true && Xt.updateCamera(F), F = Xt.getCamera()), M.isScene === true && M.onBeforeRender(v, M, F, A), m = Ct.get(M, b.length), m.init(), b.push(m), ft.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), X.setFromProjectionMatrix(ft), ut = this.localClippingEnabled, Z = Vt.init(this.clippingPlanes, ut), w = pt.get(M, f.length), w.init(), f.push(w), Gn(M, F, 0, v.sortObjects), w.finish(), v.sortObjects === true && w.sort(K, Y), this.info.render.frame++, Z === true && Vt.beginShadows();
            const V = m.state.shadowsArray;
            if (tt.render(V, M, F), Z === true && Vt.endShadows(), this.info.autoReset === true && this.info.reset(), ce.render(w, M), m.setupLights(v._useLegacyLights), F.isArrayCamera) {
              const W = F.cameras;
              for (let G = 0, dt = W.length; G < dt; G++) {
                const yt = W[G];
                ph(w, M, yt, yt.viewport);
              }
            } else ph(w, M, F);
            A !== null && (E.updateMultisampleRenderTarget(A), E.updateRenderTargetMipmap(A)), M.isScene === true && M.onAfterRender(v, M, F), zt.resetDefaultState(), B = -1, S = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null, f.pop(), f.length > 0 ? w = f[f.length - 1] : w = null;
          };
          function Gn(M, F, V, W) {
            if (M.visible === false) return;
            if (M.layers.test(F.layers)) {
              if (M.isGroup) V = M.renderOrder;
              else if (M.isLOD) M.autoUpdate === true && M.update(F);
              else if (M.isLight) m.pushLight(M), M.castShadow && m.pushShadow(M);
              else if (M.isSprite) {
                if (!M.frustumCulled || X.intersectsSprite(M)) {
                  W && Dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);
                  const yt = rt.update(M), Tt = M.material;
                  Tt.visible && w.push(M, yt, Tt, V, Dt.z, null);
                }
              } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || X.intersectsObject(M))) {
                const yt = rt.update(M), Tt = M.material;
                if (W && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Dt.copy(M.boundingSphere.center)) : (yt.boundingSphere === null && yt.computeBoundingSphere(), Dt.copy(yt.boundingSphere.center)), Dt.applyMatrix4(M.matrixWorld).applyMatrix4(ft)), Array.isArray(Tt)) {
                  const Lt = yt.groups;
                  for (let Wt = 0, Nt = Lt.length; Wt < Nt; Wt++) {
                    const Ft = Lt[Wt], Ae = Tt[Ft.materialIndex];
                    Ae && Ae.visible && w.push(M, yt, Ae, V, Dt.z, Ft);
                  }
                } else Tt.visible && w.push(M, yt, Tt, V, Dt.z, null);
              }
            }
            const dt = M.children;
            for (let yt = 0, Tt = dt.length; yt < Tt; yt++) Gn(dt[yt], F, V, W);
          }
          function ph(M, F, V, W) {
            const G = M.opaque, dt = M.transmissive, yt = M.transparent;
            m.setupLightsView(V), Z === true && Vt.setGlobalState(v.clippingPlanes, V), dt.length > 0 && Lp(G, dt, F, V), W && wt.viewport(T.copy(W)), G.length > 0 && ra(G, F, V), dt.length > 0 && ra(dt, F, V), yt.length > 0 && ra(yt, F, V), wt.buffers.depth.setTest(true), wt.buffers.depth.setMask(true), wt.buffers.color.setMask(true), wt.setPolygonOffset(false);
          }
          function Lp(M, F, V, W) {
            if ((V.isScene === true ? V.overrideMaterial : null) !== null) return;
            const dt = Ut.isWebGL2;
            _t === null && (_t = new Wi(1, 1, {
              generateMipmaps: true,
              type: bt.has("EXT_color_buffer_half_float") ? rs : ki,
              minFilter: vr,
              samples: dt ? 4 : 0
            })), v.getDrawingBufferSize(Rt), dt ? _t.setSize(Rt.x, Rt.y) : _t.setSize(co(Rt.x), co(Rt.y));
            const yt = v.getRenderTarget();
            v.setRenderTarget(_t), v.getClearColor(it), D = v.getClearAlpha(), D < 1 && v.setClearColor(16777215, 0.5), v.clear();
            const Tt = v.toneMapping;
            v.toneMapping = Gi, ra(M, V, W), E.updateMultisampleRenderTarget(_t), E.updateRenderTargetMipmap(_t);
            let Lt = false;
            for (let Wt = 0, Nt = F.length; Wt < Nt; Wt++) {
              const Ft = F[Wt], Ae = Ft.object, un = Ft.geometry, Fe = Ft.material, ni = Ft.group;
              if (Fe.side === On && Ae.layers.test(W.layers)) {
                const ge = Fe.side;
                Fe.side = hn, Fe.needsUpdate = true, mh(Ae, V, W, un, Fe, ni), Fe.side = ge, Fe.needsUpdate = true, Lt = true;
              }
            }
            Lt === true && (E.updateMultisampleRenderTarget(_t), E.updateRenderTargetMipmap(_t)), v.setRenderTarget(yt), v.setClearColor(it, D), v.toneMapping = Tt;
          }
          function ra(M, F, V) {
            const W = F.isScene === true ? F.overrideMaterial : null;
            for (let G = 0, dt = M.length; G < dt; G++) {
              const yt = M[G], Tt = yt.object, Lt = yt.geometry, Wt = W === null ? yt.material : W, Nt = yt.group;
              Tt.layers.test(V.layers) && mh(Tt, F, V, Lt, Wt, Nt);
            }
          }
          function mh(M, F, V, W, G, dt) {
            M.onBeforeRender(v, F, V, W, G, dt), M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), G.onBeforeRender(v, F, V, W, M, dt), G.transparent === true && G.side === On && G.forceSinglePass === false ? (G.side = hn, G.needsUpdate = true, v.renderBufferDirect(V, F, W, G, M, dt), G.side = xi, G.needsUpdate = true, v.renderBufferDirect(V, F, W, G, M, dt), G.side = On) : v.renderBufferDirect(V, F, W, G, M, dt), M.onAfterRender(v, F, V, W, G, dt);
          }
          function sa(M, F, V) {
            F.isScene !== true && (F = Et);
            const W = kt.get(M), G = m.state.lights, dt = m.state.shadowsArray, yt = G.state.version, Tt = vt.getParameters(M, G.state, dt, F, V), Lt = vt.getProgramCacheKey(Tt);
            let Wt = W.programs;
            W.environment = M.isMeshStandardMaterial ? F.environment : null, W.fog = F.fog, W.envMap = (M.isMeshStandardMaterial ? k : x).get(M.envMap || W.environment), Wt === void 0 && (M.addEventListener("dispose", ct), Wt = /* @__PURE__ */ new Map(), W.programs = Wt);
            let Nt = Wt.get(Lt);
            if (Nt !== void 0) {
              if (W.currentProgram === Nt && W.lightsStateVersion === yt) return gh(M, Tt), Nt;
            } else Tt.uniforms = vt.getUniforms(M), M.onBuild(V, Tt, v), M.onBeforeCompile(Tt, v), Nt = vt.acquireProgram(Tt, Lt), Wt.set(Lt, Nt), W.uniforms = Tt.uniforms;
            const Ft = W.uniforms;
            return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === true) && (Ft.clippingPlanes = Vt.uniform), gh(M, Tt), W.needsLights = Up(M), W.lightsStateVersion = yt, W.needsLights && (Ft.ambientLightColor.value = G.state.ambient, Ft.lightProbe.value = G.state.probe, Ft.directionalLights.value = G.state.directional, Ft.directionalLightShadows.value = G.state.directionalShadow, Ft.spotLights.value = G.state.spot, Ft.spotLightShadows.value = G.state.spotShadow, Ft.rectAreaLights.value = G.state.rectArea, Ft.ltc_1.value = G.state.rectAreaLTC1, Ft.ltc_2.value = G.state.rectAreaLTC2, Ft.pointLights.value = G.state.point, Ft.pointLightShadows.value = G.state.pointShadow, Ft.hemisphereLights.value = G.state.hemi, Ft.directionalShadowMap.value = G.state.directionalShadowMap, Ft.directionalShadowMatrix.value = G.state.directionalShadowMatrix, Ft.spotShadowMap.value = G.state.spotShadowMap, Ft.spotLightMatrix.value = G.state.spotLightMatrix, Ft.spotLightMap.value = G.state.spotLightMap, Ft.pointShadowMap.value = G.state.pointShadowMap, Ft.pointShadowMatrix.value = G.state.pointShadowMatrix), W.currentProgram = Nt, W.uniformsList = null, Nt;
          }
          function _h(M) {
            if (M.uniformsList === null) {
              const F = M.currentProgram.getUniforms();
              M.uniformsList = $a.seqWithValue(F.seq, M.uniforms);
            }
            return M.uniformsList;
          }
          function gh(M, F) {
            const V = kt.get(M);
            V.outputColorSpace = F.outputColorSpace, V.batching = F.batching, V.instancing = F.instancing, V.instancingColor = F.instancingColor, V.skinning = F.skinning, V.morphTargets = F.morphTargets, V.morphNormals = F.morphNormals, V.morphColors = F.morphColors, V.morphTargetsCount = F.morphTargetsCount, V.numClippingPlanes = F.numClippingPlanes, V.numIntersection = F.numClipIntersection, V.vertexAlphas = F.vertexAlphas, V.vertexTangents = F.vertexTangents, V.toneMapping = F.toneMapping;
          }
          function Ip(M, F, V, W, G) {
            F.isScene !== true && (F = Et), E.resetTextureUnits();
            const dt = F.fog, yt = W.isMeshStandardMaterial ? F.environment : null, Tt = A === null ? v.outputColorSpace : A.isXRRenderTarget === true ? A.texture.colorSpace : ke, Lt = (W.isMeshStandardMaterial ? k : x).get(W.envMap || yt), Wt = W.vertexColors === true && !!V.attributes.color && V.attributes.color.itemSize === 4, Nt = !!V.attributes.tangent && (!!W.normalMap || W.anisotropy > 0), Ft = !!V.morphAttributes.position, Ae = !!V.morphAttributes.normal, un = !!V.morphAttributes.color;
            let Fe = Gi;
            W.toneMapped && (A === null || A.isXRRenderTarget === true) && (Fe = v.toneMapping);
            const ni = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, ge = ni !== void 0 ? ni.length : 0, qt = kt.get(W), Wo = m.state.lights;
            if (Z === true && (ut === true || M !== S)) {
              const yn = M === S && W.id === B;
              Vt.setState(W, M, yn);
            }
            let Ee = false;
            W.version === qt.__version ? (qt.needsLights && qt.lightsStateVersion !== Wo.state.version || qt.outputColorSpace !== Tt || G.isBatchedMesh && qt.batching === false || !G.isBatchedMesh && qt.batching === true || G.isInstancedMesh && qt.instancing === false || !G.isInstancedMesh && qt.instancing === true || G.isSkinnedMesh && qt.skinning === false || !G.isSkinnedMesh && qt.skinning === true || G.isInstancedMesh && qt.instancingColor === true && G.instanceColor === null || G.isInstancedMesh && qt.instancingColor === false && G.instanceColor !== null || qt.envMap !== Lt || W.fog === true && qt.fog !== dt || qt.numClippingPlanes !== void 0 && (qt.numClippingPlanes !== Vt.numPlanes || qt.numIntersection !== Vt.numIntersection) || qt.vertexAlphas !== Wt || qt.vertexTangents !== Nt || qt.morphTargets !== Ft || qt.morphNormals !== Ae || qt.morphColors !== un || qt.toneMapping !== Fe || Ut.isWebGL2 === true && qt.morphTargetsCount !== ge) && (Ee = true) : (Ee = true, qt.__version = W.version);
            let Ki = qt.currentProgram;
            Ee === true && (Ki = sa(W, F, G));
            let wh = false, bs = false, jo = false;
            const qe = Ki.getUniforms(), Ji = qt.uniforms;
            if (wt.useProgram(Ki.program) && (wh = true, bs = true, jo = true), W.id !== B && (B = W.id, bs = true), wh || S !== M) {
              qe.setValue(H, "projectionMatrix", M.projectionMatrix), qe.setValue(H, "viewMatrix", M.matrixWorldInverse);
              const yn = qe.map.cameraPosition;
              yn !== void 0 && yn.setValue(H, Dt.setFromMatrixPosition(M.matrixWorld)), Ut.logarithmicDepthBuffer && qe.setValue(H, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (W.isMeshPhongMaterial || W.isMeshToonMaterial || W.isMeshLambertMaterial || W.isMeshBasicMaterial || W.isMeshStandardMaterial || W.isShaderMaterial) && qe.setValue(H, "isOrthographic", M.isOrthographicCamera === true), S !== M && (S = M, bs = true, jo = true);
            }
            if (G.isSkinnedMesh) {
              qe.setOptional(H, G, "bindMatrix"), qe.setOptional(H, G, "bindMatrixInverse");
              const yn = G.skeleton;
              yn && (Ut.floatVertexTextures ? (yn.boneTexture === null && yn.computeBoneTexture(), qe.setValue(H, "boneTexture", yn.boneTexture, E)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
            }
            G.isBatchedMesh && (qe.setOptional(H, G, "batchingTexture"), qe.setValue(H, "batchingTexture", G._matricesTexture, E));
            const Xo = V.morphAttributes;
            if ((Xo.position !== void 0 || Xo.normal !== void 0 || Xo.color !== void 0 && Ut.isWebGL2 === true) && $t.update(G, V, Ki), (bs || qt.receiveShadow !== G.receiveShadow) && (qt.receiveShadow = G.receiveShadow, qe.setValue(H, "receiveShadow", G.receiveShadow)), W.isMeshGouraudMaterial && W.envMap !== null && (Ji.envMap.value = Lt, Ji.flipEnvMap.value = Lt.isCubeTexture && Lt.isRenderTargetTexture === false ? -1 : 1), bs && (qe.setValue(H, "toneMappingExposure", v.toneMappingExposure), qt.needsLights && Dp(Ji, jo), dt && W.fog === true && ht.refreshFogUniforms(Ji, dt), ht.refreshMaterialUniforms(Ji, W, $, j, _t), $a.upload(H, _h(qt), Ji, E)), W.isShaderMaterial && W.uniformsNeedUpdate === true && ($a.upload(H, _h(qt), Ji, E), W.uniformsNeedUpdate = false), W.isSpriteMaterial && qe.setValue(H, "center", G.center), qe.setValue(H, "modelViewMatrix", G.modelViewMatrix), qe.setValue(H, "normalMatrix", G.normalMatrix), qe.setValue(H, "modelMatrix", G.matrixWorld), W.isShaderMaterial || W.isRawShaderMaterial) {
              const yn = W.uniformsGroups;
              for (let qo = 0, Np = yn.length; qo < Np; qo++) if (Ut.isWebGL2) {
                const vh = yn[qo];
                se.update(vh, Ki), se.bind(vh, Ki);
              } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
            }
            return Ki;
          }
          function Dp(M, F) {
            M.ambientLightColor.needsUpdate = F, M.lightProbe.needsUpdate = F, M.directionalLights.needsUpdate = F, M.directionalLightShadows.needsUpdate = F, M.pointLights.needsUpdate = F, M.pointLightShadows.needsUpdate = F, M.spotLights.needsUpdate = F, M.spotLightShadows.needsUpdate = F, M.rectAreaLights.needsUpdate = F, M.hemisphereLights.needsUpdate = F;
          }
          function Up(M) {
            return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === true;
          }
          this.getActiveCubeFace = function() {
            return I;
          }, this.getActiveMipmapLevel = function() {
            return y;
          }, this.getRenderTarget = function() {
            return A;
          }, this.setRenderTargetTextures = function(M, F, V) {
            kt.get(M.texture).__webglTexture = F, kt.get(M.depthTexture).__webglTexture = V;
            const W = kt.get(M);
            W.__hasExternalTextures = true, W.__hasExternalTextures && (W.__autoAllocateDepthBuffer = V === void 0, W.__autoAllocateDepthBuffer || bt.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), W.__useRenderToTexture = false));
          }, this.setRenderTargetFramebuffer = function(M, F) {
            const V = kt.get(M);
            V.__webglFramebuffer = F, V.__useDefaultFramebuffer = F === void 0;
          }, this.setRenderTarget = function(M, F = 0, V = 0) {
            A = M, I = F, y = V;
            let W = true, G = null, dt = false, yt = false;
            if (M) {
              const Lt = kt.get(M);
              Lt.__useDefaultFramebuffer !== void 0 ? (wt.bindFramebuffer(H.FRAMEBUFFER, null), W = false) : Lt.__webglFramebuffer === void 0 ? E.setupRenderTarget(M) : Lt.__hasExternalTextures && E.rebindTextures(M, kt.get(M.texture).__webglTexture, kt.get(M.depthTexture).__webglTexture);
              const Wt = M.texture;
              (Wt.isData3DTexture || Wt.isDataArrayTexture || Wt.isCompressedArrayTexture) && (yt = true);
              const Nt = kt.get(M).__webglFramebuffer;
              M.isWebGLCubeRenderTarget ? (Array.isArray(Nt[F]) ? G = Nt[F][V] : G = Nt[F], dt = true) : Ut.isWebGL2 && M.samples > 0 && E.useMultisampledRTT(M) === false ? G = kt.get(M).__webglMultisampledFramebuffer : Array.isArray(Nt) ? G = Nt[V] : G = Nt, T.copy(M.viewport), z.copy(M.scissor), q = M.scissorTest;
            } else T.copy(J).multiplyScalar($).floor(), z.copy(Q).multiplyScalar($).floor(), q = lt;
            if (wt.bindFramebuffer(H.FRAMEBUFFER, G) && Ut.drawBuffers && W && wt.drawBuffers(M, G), wt.viewport(T), wt.scissor(z), wt.setScissorTest(q), dt) {
              const Lt = kt.get(M.texture);
              H.framebufferTexture2D(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, H.TEXTURE_CUBE_MAP_POSITIVE_X + F, Lt.__webglTexture, V);
            } else if (yt) {
              const Lt = kt.get(M.texture), Wt = F || 0;
              H.framebufferTextureLayer(H.FRAMEBUFFER, H.COLOR_ATTACHMENT0, Lt.__webglTexture, V || 0, Wt);
            }
            B = -1;
          }, this.readRenderTargetPixels = function(M, F, V, W, G, dt, yt) {
            if (!(M && M.isWebGLRenderTarget)) {
              console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
              return;
            }
            let Tt = kt.get(M).__webglFramebuffer;
            if (M.isWebGLCubeRenderTarget && yt !== void 0 && (Tt = Tt[yt]), Tt) {
              wt.bindFramebuffer(H.FRAMEBUFFER, Tt);
              try {
                const Lt = M.texture, Wt = Lt.format, Nt = Lt.type;
                if (Wt !== Mn && mt.convert(Wt) !== H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)) {
                  console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                  return;
                }
                const Ft = Nt === rs && (bt.has("EXT_color_buffer_half_float") || Ut.isWebGL2 && bt.has("EXT_color_buffer_float"));
                if (Nt !== ki && mt.convert(Nt) !== H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE) && !(Nt === _i && (Ut.isWebGL2 || bt.has("OES_texture_float") || bt.has("WEBGL_color_buffer_float"))) && !Ft) {
                  console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                  return;
                }
                F >= 0 && F <= M.width - W && V >= 0 && V <= M.height - G && H.readPixels(F, V, W, G, mt.convert(Wt), mt.convert(Nt), dt);
              } finally {
                const Lt = A !== null ? kt.get(A).__webglFramebuffer : null;
                wt.bindFramebuffer(H.FRAMEBUFFER, Lt);
              }
            }
          }, this.copyFramebufferToTexture = function(M, F, V = 0) {
            const W = Math.pow(2, -V), G = Math.floor(F.image.width * W), dt = Math.floor(F.image.height * W);
            E.setTexture2D(F, 0), H.copyTexSubImage2D(H.TEXTURE_2D, V, 0, 0, M.x, M.y, G, dt), wt.unbindTexture();
          }, this.copyTextureToTexture = function(M, F, V, W = 0) {
            const G = F.image.width, dt = F.image.height, yt = mt.convert(V.format), Tt = mt.convert(V.type);
            E.setTexture2D(V, 0), H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, V.flipY), H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, V.premultiplyAlpha), H.pixelStorei(H.UNPACK_ALIGNMENT, V.unpackAlignment), F.isDataTexture ? H.texSubImage2D(H.TEXTURE_2D, W, M.x, M.y, G, dt, yt, Tt, F.image.data) : F.isCompressedTexture ? H.compressedTexSubImage2D(H.TEXTURE_2D, W, M.x, M.y, F.mipmaps[0].width, F.mipmaps[0].height, yt, F.mipmaps[0].data) : H.texSubImage2D(H.TEXTURE_2D, W, M.x, M.y, yt, Tt, F.image), W === 0 && V.generateMipmaps && H.generateMipmap(H.TEXTURE_2D), wt.unbindTexture();
          }, this.copyTextureToTexture3D = function(M, F, V, W, G = 0) {
            if (v.isWebGL1Renderer) {
              console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
              return;
            }
            const dt = M.max.x - M.min.x + 1, yt = M.max.y - M.min.y + 1, Tt = M.max.z - M.min.z + 1, Lt = mt.convert(W.format), Wt = mt.convert(W.type);
            let Nt;
            if (W.isData3DTexture) E.setTexture3D(W, 0), Nt = H.TEXTURE_3D;
            else if (W.isDataArrayTexture || W.isCompressedArrayTexture) E.setTexture2DArray(W, 0), Nt = H.TEXTURE_2D_ARRAY;
            else {
              console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
              return;
            }
            H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL, W.flipY), H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha), H.pixelStorei(H.UNPACK_ALIGNMENT, W.unpackAlignment);
            const Ft = H.getParameter(H.UNPACK_ROW_LENGTH), Ae = H.getParameter(H.UNPACK_IMAGE_HEIGHT), un = H.getParameter(H.UNPACK_SKIP_PIXELS), Fe = H.getParameter(H.UNPACK_SKIP_ROWS), ni = H.getParameter(H.UNPACK_SKIP_IMAGES), ge = V.isCompressedTexture ? V.mipmaps[G] : V.image;
            H.pixelStorei(H.UNPACK_ROW_LENGTH, ge.width), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, ge.height), H.pixelStorei(H.UNPACK_SKIP_PIXELS, M.min.x), H.pixelStorei(H.UNPACK_SKIP_ROWS, M.min.y), H.pixelStorei(H.UNPACK_SKIP_IMAGES, M.min.z), V.isDataTexture || V.isData3DTexture ? H.texSubImage3D(Nt, G, F.x, F.y, F.z, dt, yt, Tt, Lt, Wt, ge.data) : V.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), H.compressedTexSubImage3D(Nt, G, F.x, F.y, F.z, dt, yt, Tt, Lt, ge.data)) : H.texSubImage3D(Nt, G, F.x, F.y, F.z, dt, yt, Tt, Lt, Wt, ge), H.pixelStorei(H.UNPACK_ROW_LENGTH, Ft), H.pixelStorei(H.UNPACK_IMAGE_HEIGHT, Ae), H.pixelStorei(H.UNPACK_SKIP_PIXELS, un), H.pixelStorei(H.UNPACK_SKIP_ROWS, Fe), H.pixelStorei(H.UNPACK_SKIP_IMAGES, ni), G === 0 && W.generateMipmaps && H.generateMipmap(Nt), wt.unbindTexture();
          }, this.initTexture = function(M) {
            M.isCubeTexture ? E.setTextureCube(M, 0) : M.isData3DTexture ? E.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? E.setTexture2DArray(M, 0) : E.setTexture2D(M, 0), wt.unbindTexture();
          }, this.resetState = function() {
            I = 0, y = 0, A = null, wt.reset(), zt.reset();
          }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
          }));
        }
        get coordinateSystem() {
          return gi;
        }
        get outputColorSpace() {
          return this._outputColorSpace;
        }
        set outputColorSpace(t) {
          this._outputColorSpace = t;
          const e = this.getContext();
          e.drawingBufferColorSpace = t === Pl ? "display-p3" : "srgb", e.unpackColorSpace = ie.workingColorSpace === Mo ? "display-p3" : "srgb";
        }
        get outputEncoding() {
          return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Se ? gr : ef;
        }
        set outputEncoding(t) {
          console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t === gr ? Se : ke;
        }
        get useLegacyLights() {
          return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
        }
        set useLegacyLights(t) {
          console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t;
        }
      }
      class Qy extends Ef {
      }
      Qy.prototype.isWebGL1Renderer = true;
      class Ul {
        constructor(t, e = 1, n = 1e3) {
          this.isFog = true, this.name = "", this.color = new At(t), this.near = e, this.far = n;
        }
        clone() {
          return new Ul(this.color, this.near, this.far);
        }
        toJSON() {
          return {
            type: "Fog",
            name: this.name,
            color: this.color.getHex(),
            near: this.near,
            far: this.far
          };
        }
      }
      class t0 extends be {
        constructor() {
          super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
            detail: this
          }));
        }
        copy(t, e) {
          return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e;
        }
      }
      class Tf {
        constructor(t, e) {
          this.isInterleavedBuffer = true, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = sl, this._updateRange = {
            offset: 0,
            count: -1
          }, this.updateRanges = [], this.version = 0, this.uuid = Hn();
        }
        onUploadCallback() {
        }
        set needsUpdate(t) {
          t === true && this.version++;
        }
        get updateRange() {
          return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
        }
        setUsage(t) {
          return this.usage = t, this;
        }
        addUpdateRange(t, e) {
          this.updateRanges.push({
            start: t,
            count: e
          });
        }
        clearUpdateRanges() {
          this.updateRanges.length = 0;
        }
        copy(t) {
          return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
        }
        copyAt(t, e, n) {
          t *= this.stride, n *= e.stride;
          for (let i = 0, s = this.stride; i < s; i++) this.array[t + i] = e.array[n + i];
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        clone(t) {
          t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Hn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
          const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
          return n.setUsage(this.usage), n;
        }
        onUpload(t) {
          return this.onUploadCallback = t, this;
        }
        toJSON(t) {
          return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Hn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
          };
        }
      }
      const Qe = new C();
      class wi {
        constructor(t, e, n, i = false) {
          this.isInterleavedBufferAttribute = true, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i;
        }
        get count() {
          return this.data.count;
        }
        get array() {
          return this.data.array;
        }
        set needsUpdate(t) {
          this.data.needsUpdate = t;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.data.count; e < n; e++) Qe.fromBufferAttribute(this, e), Qe.applyMatrix4(t), this.setXYZ(e, Qe.x, Qe.y, Qe.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++) Qe.fromBufferAttribute(this, e), Qe.applyNormalMatrix(t), this.setXYZ(e, Qe.x, Qe.y, Qe.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++) Qe.fromBufferAttribute(this, e), Qe.transformDirection(t), this.setXYZ(e, Qe.x, Qe.y, Qe.z);
          return this;
        }
        setX(t, e) {
          return this.normalized && (e = le(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
        }
        setY(t, e) {
          return this.normalized && (e = le(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
        }
        setZ(t, e) {
          return this.normalized && (e = le(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
        }
        setW(t, e) {
          return this.normalized && (e = le(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
        }
        getX(t) {
          let e = this.data.array[t * this.data.stride + this.offset];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        getY(t) {
          let e = this.data.array[t * this.data.stride + this.offset + 1];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        getZ(t) {
          let e = this.data.array[t * this.data.stride + this.offset + 2];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        getW(t) {
          let e = this.data.array[t * this.data.stride + this.offset + 3];
          return this.normalized && (e = qn(e, this.array)), e;
        }
        setXY(t, e, n) {
          return t = t * this.data.stride + this.offset, this.normalized && (e = le(e, this.array), n = le(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
        }
        setXYZ(t, e, n, i) {
          return t = t * this.data.stride + this.offset, this.normalized && (e = le(e, this.array), n = le(n, this.array), i = le(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
        }
        setXYZW(t, e, n, i, s) {
          return t = t * this.data.stride + this.offset, this.normalized && (e = le(e, this.array), n = le(n, this.array), i = le(i, this.array), s = le(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = s, this;
        }
        clone(t) {
          if (t === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const e = [];
            for (let n = 0; n < this.count; n++) {
              const i = n * this.data.stride + this.offset;
              for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[i + s]);
            }
            return new rn(new this.array.constructor(e), this.itemSize, this.normalized);
          } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new wi(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
        }
        toJSON(t) {
          if (t === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const e = [];
            for (let n = 0; n < this.count; n++) {
              const i = n * this.data.stride + this.offset;
              for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[i + s]);
            }
            return {
              itemSize: this.itemSize,
              type: this.array.constructor.name,
              array: e,
              normalized: this.normalized
            };
          } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
            isInterleavedBufferAttribute: true,
            itemSize: this.itemSize,
            data: this.data.uuid,
            offset: this.offset,
            normalized: this.normalized
          };
        }
      }
      const ku = new C(), Vu = new ne(), Wu = new ne(), e0 = new C(), ju = new Bt(), Ra = new C(), bc = new Cn(), Xu = new Bt(), Mc = new Eo();
      class n0 extends Re {
        constructor(t, e) {
          super(t, e), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = Th, this.bindMatrix = new Bt(), this.bindMatrixInverse = new Bt(), this.boundingBox = null, this.boundingSphere = null;
        }
        computeBoundingBox() {
          const t = this.geometry;
          this.boundingBox === null && (this.boundingBox = new Rn()), this.boundingBox.makeEmpty();
          const e = t.getAttribute("position");
          for (let n = 0; n < e.count; n++) this.getVertexPosition(n, Ra), this.boundingBox.expandByPoint(Ra);
        }
        computeBoundingSphere() {
          const t = this.geometry;
          this.boundingSphere === null && (this.boundingSphere = new Cn()), this.boundingSphere.makeEmpty();
          const e = t.getAttribute("position");
          for (let n = 0; n < e.count; n++) this.getVertexPosition(n, Ra), this.boundingSphere.expandByPoint(Ra);
        }
        copy(t, e) {
          return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
        }
        raycast(t, e) {
          const n = this.material, i = this.matrixWorld;
          n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), bc.copy(this.boundingSphere), bc.applyMatrix4(i), t.ray.intersectsSphere(bc) !== false && (Xu.copy(i).invert(), Mc.copy(t.ray).applyMatrix4(Xu), !(this.boundingBox !== null && Mc.intersectsBox(this.boundingBox) === false) && this._computeIntersections(t, e, Mc)));
        }
        getVertexPosition(t, e) {
          return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
        }
        bind(t, e) {
          this.skeleton = t, e === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
        }
        pose() {
          this.skeleton.pose();
        }
        normalizeSkinWeights() {
          const t = new ne(), e = this.geometry.attributes.skinWeight;
          for (let n = 0, i = e.count; n < i; n++) {
            t.fromBufferAttribute(e, n);
            const s = 1 / t.manhattanLength();
            s !== 1 / 0 ? t.multiplyScalar(s) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
          }
        }
        updateMatrixWorld(t) {
          super.updateMatrixWorld(t), this.bindMode === Th ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === pm ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
        }
        applyBoneTransform(t, e) {
          const n = this.skeleton, i = this.geometry;
          Vu.fromBufferAttribute(i.attributes.skinIndex, t), Wu.fromBufferAttribute(i.attributes.skinWeight, t), ku.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
          for (let s = 0; s < 4; s++) {
            const a = Wu.getComponent(s);
            if (a !== 0) {
              const o = Vu.getComponent(s);
              ju.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), e.addScaledVector(e0.copy(ku).applyMatrix4(ju), a);
            }
          }
          return e.applyMatrix4(this.bindMatrixInverse);
        }
        boneTransform(t, e) {
          return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."), this.applyBoneTransform(t, e);
        }
      }
      class Af extends be {
        constructor() {
          super(), this.isBone = true, this.type = "Bone";
        }
      }
      class i0 extends He {
        constructor(t = null, e = 1, n = 1, i, s, a, o, c, l = ze, h = ze, u, d) {
          super(null, a, o, c, l, h, i, s, u, d), this.isDataTexture = true, this.image = {
            data: t,
            width: e,
            height: n
          }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
        }
      }
      const qu = new Bt(), r0 = new Bt();
      class Nl {
        constructor(t = [], e = []) {
          this.uuid = Hn(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
        }
        init() {
          const t = this.bones, e = this.boneInverses;
          if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0) this.calculateInverses();
          else if (t.length !== e.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
            for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Bt());
          }
        }
        calculateInverses() {
          this.boneInverses.length = 0;
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const n = new Bt();
            this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
          }
        }
        pose() {
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const n = this.bones[t];
            n && n.matrixWorld.copy(this.boneInverses[t]).invert();
          }
          for (let t = 0, e = this.bones.length; t < e; t++) {
            const n = this.bones[t];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
          }
        }
        update() {
          const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
          for (let s = 0, a = t.length; s < a; s++) {
            const o = t[s] ? t[s].matrixWorld : r0;
            qu.multiplyMatrices(o, e[s]), qu.toArray(n, s * 16);
          }
          i !== null && (i.needsUpdate = true);
        }
        clone() {
          return new Nl(this.bones, this.boneInverses);
        }
        computeBoneTexture() {
          let t = Math.sqrt(this.bones.length * 4);
          t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
          const e = new Float32Array(t * t * 4);
          e.set(this.boneMatrices);
          const n = new i0(e, t, t, Mn, _i);
          return n.needsUpdate = true, this.boneMatrices = e, this.boneTexture = n, this;
        }
        getBoneByName(t) {
          for (let e = 0, n = this.bones.length; e < n; e++) {
            const i = this.bones[e];
            if (i.name === t) return i;
          }
        }
        dispose() {
          this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
        }
        fromJSON(t, e) {
          this.uuid = t.uuid;
          for (let n = 0, i = t.bones.length; n < i; n++) {
            const s = t.bones[n];
            let a = e[s];
            a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Af()), this.bones.push(a), this.boneInverses.push(new Bt().fromArray(t.boneInverses[n]));
          }
          return this.init(), this;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.6,
              type: "Skeleton",
              generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
          };
          t.uuid = this.uuid;
          const e = this.bones, n = this.boneInverses;
          for (let i = 0, s = e.length; i < s; i++) {
            const a = e[i];
            t.bones.push(a.uuid);
            const o = n[i];
            t.boneInverses.push(o.toArray());
          }
          return t;
        }
      }
      class ll extends rn {
        constructor(t, e, n, i = 1) {
          super(t, e, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
        }
        copy(t) {
          return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        toJSON() {
          const t = super.toJSON();
          return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = true, t;
        }
      }
      const Br = new Bt(), Yu = new Bt(), Ca = [], Ku = new Rn(), s0 = new Bt(), Rs = new Re(), Cs = new Cn();
      class a0 extends Re {
        constructor(t, e, n) {
          super(t, e), this.isInstancedMesh = true, this.instanceMatrix = new ll(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
          for (let i = 0; i < n; i++) this.setMatrixAt(i, s0);
        }
        computeBoundingBox() {
          const t = this.geometry, e = this.count;
          this.boundingBox === null && (this.boundingBox = new Rn()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
          for (let n = 0; n < e; n++) this.getMatrixAt(n, Br), Ku.copy(t.boundingBox).applyMatrix4(Br), this.boundingBox.union(Ku);
        }
        computeBoundingSphere() {
          const t = this.geometry, e = this.count;
          this.boundingSphere === null && (this.boundingSphere = new Cn()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
          for (let n = 0; n < e; n++) this.getMatrixAt(n, Br), Cs.copy(t.boundingSphere).applyMatrix4(Br), this.boundingSphere.union(Cs);
        }
        copy(t, e) {
          return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
        }
        getColorAt(t, e) {
          e.fromArray(this.instanceColor.array, t * 3);
        }
        getMatrixAt(t, e) {
          e.fromArray(this.instanceMatrix.array, t * 16);
        }
        raycast(t, e) {
          const n = this.matrixWorld, i = this.count;
          if (Rs.geometry = this.geometry, Rs.material = this.material, Rs.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Cs.copy(this.boundingSphere), Cs.applyMatrix4(n), t.ray.intersectsSphere(Cs) !== false)) for (let s = 0; s < i; s++) {
            this.getMatrixAt(s, Br), Yu.multiplyMatrices(n, Br), Rs.matrixWorld = Yu, Rs.raycast(t, Ca);
            for (let a = 0, o = Ca.length; a < o; a++) {
              const c = Ca[a];
              c.instanceId = s, c.object = this, e.push(c);
            }
            Ca.length = 0;
          }
        }
        setColorAt(t, e) {
          this.instanceColor === null && (this.instanceColor = new ll(new Float32Array(this.instanceMatrix.count * 3), 3)), e.toArray(this.instanceColor.array, t * 3);
        }
        setMatrixAt(t, e) {
          e.toArray(this.instanceMatrix.array, t * 16);
        }
        updateMorphTargets() {
        }
        dispose() {
          this.dispatchEvent({
            type: "dispose"
          });
        }
      }
      class Fl extends Kn {
        constructor(t) {
          super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new At(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
        }
      }
      const Ju = new C(), $u = new C(), Zu = new Bt(), Ec = new Eo(), Pa = new Cn();
      class Ol extends be {
        constructor(t = new sn(), e = new Fl()) {
          super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
          return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        computeLineDistances() {
          const t = this.geometry;
          if (t.index === null) {
            const e = t.attributes.position, n = [
              0
            ];
            for (let i = 1, s = e.count; i < s; i++) Ju.fromBufferAttribute(e, i - 1), $u.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += Ju.distanceTo($u);
            t.setAttribute("lineDistance", new Ge(n, 1));
          } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this;
        }
        raycast(t, e) {
          const n = this.geometry, i = this.matrixWorld, s = t.params.Line.threshold, a = n.drawRange;
          if (n.boundingSphere === null && n.computeBoundingSphere(), Pa.copy(n.boundingSphere), Pa.applyMatrix4(i), Pa.radius += s, t.ray.intersectsSphere(Pa) === false) return;
          Zu.copy(i).invert(), Ec.copy(t.ray).applyMatrix4(Zu);
          const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = new C(), h = new C(), u = new C(), d = new C(), p = this.isLineSegments ? 2 : 1, _ = n.index, m = n.attributes.position;
          if (_ !== null) {
            const f = Math.max(0, a.start), b = Math.min(_.count, a.start + a.count);
            for (let v = f, R = b - 1; v < R; v += p) {
              const I = _.getX(v), y = _.getX(v + 1);
              if (l.fromBufferAttribute(m, I), h.fromBufferAttribute(m, y), Ec.distanceSqToSegment(l, h, d, u) > c) continue;
              d.applyMatrix4(this.matrixWorld);
              const B = t.ray.origin.distanceTo(d);
              B < t.near || B > t.far || e.push({
                distance: B,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: v,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          } else {
            const f = Math.max(0, a.start), b = Math.min(m.count, a.start + a.count);
            for (let v = f, R = b - 1; v < R; v += p) {
              if (l.fromBufferAttribute(m, v), h.fromBufferAttribute(m, v + 1), Ec.distanceSqToSegment(l, h, d, u) > c) continue;
              d.applyMatrix4(this.matrixWorld);
              const y = t.ray.origin.distanceTo(d);
              y < t.near || y > t.far || e.push({
                distance: y,
                point: u.clone().applyMatrix4(this.matrixWorld),
                index: v,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        }
        updateMorphTargets() {
          const e = this.geometry.morphAttributes, n = Object.keys(e);
          if (n.length > 0) {
            const i = e[n[0]];
            if (i !== void 0) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let s = 0, a = i.length; s < a; s++) {
                const o = i[s].name || String(s);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
              }
            }
          }
        }
      }
      const Qu = new C(), td = new C();
      class Rf extends Ol {
        constructor(t, e) {
          super(t, e), this.isLineSegments = true, this.type = "LineSegments";
        }
        computeLineDistances() {
          const t = this.geometry;
          if (t.index === null) {
            const e = t.attributes.position, n = [];
            for (let i = 0, s = e.count; i < s; i += 2) Qu.fromBufferAttribute(e, i), td.fromBufferAttribute(e, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Qu.distanceTo(td);
            t.setAttribute("lineDistance", new Ge(n, 1));
          } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          return this;
        }
      }
      class o0 extends Ol {
        constructor(t, e) {
          super(t, e), this.isLineLoop = true, this.type = "LineLoop";
        }
      }
      class Cf extends Kn {
        constructor(t) {
          super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new At(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
        }
      }
      const ed = new Bt(), hl = new Eo(), La = new Cn(), Ia = new C();
      class c0 extends be {
        constructor(t = new sn(), e = new Cf()) {
          super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
        }
        copy(t, e) {
          return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
        }
        raycast(t, e) {
          const n = this.geometry, i = this.matrixWorld, s = t.params.Points.threshold, a = n.drawRange;
          if (n.boundingSphere === null && n.computeBoundingSphere(), La.copy(n.boundingSphere), La.applyMatrix4(i), La.radius += s, t.ray.intersectsSphere(La) === false) return;
          ed.copy(i).invert(), hl.copy(t.ray).applyMatrix4(ed);
          const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
          if (l !== null) {
            const d = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
            for (let _ = d, w = p; _ < w; _++) {
              const m = l.getX(_);
              Ia.fromBufferAttribute(u, m), nd(Ia, m, c, i, t, e, this);
            }
          } else {
            const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
            for (let _ = d, w = p; _ < w; _++) Ia.fromBufferAttribute(u, _), nd(Ia, _, c, i, t, e, this);
          }
        }
        updateMorphTargets() {
          const e = this.geometry.morphAttributes, n = Object.keys(e);
          if (n.length > 0) {
            const i = e[n[0]];
            if (i !== void 0) {
              this.morphTargetInfluences = [], this.morphTargetDictionary = {};
              for (let s = 0, a = i.length; s < a; s++) {
                const o = i[s].name || String(s);
                this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
              }
            }
          }
        }
      }
      function nd(r, t, e, n, i, s, a) {
        const o = hl.distanceSqToPoint(r);
        if (o < e) {
          const c = new C();
          hl.closestPointToPoint(r, c), c.applyMatrix4(n);
          const l = i.ray.origin.distanceTo(c);
          if (l < i.near || l > i.far) return;
          s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: c,
            index: t,
            face: null,
            object: a
          });
        }
      }
      class l0 extends He {
        constructor(t, e, n, i, s, a, o, c, l) {
          super(t, e, n, i, s, a, o, c, l), this.isCanvasTexture = true, this.needsUpdate = true;
        }
      }
      const Da = new C(), Ua = new C(), Tc = new C(), Na = new Ns();
      class h0 extends sn {
        constructor(t = null, e = 1) {
          if (super(), this.type = "EdgesGeometry", this.parameters = {
            geometry: t,
            thresholdAngle: e
          }, t !== null) {
            const i = Math.pow(10, 4), s = Math.cos(Jr * e), a = t.getIndex(), o = t.getAttribute("position"), c = a ? a.count : o.count, l = [
              0,
              0,
              0
            ], h = [
              "a",
              "b",
              "c"
            ], u = new Array(3), d = {}, p = [];
            for (let _ = 0; _ < c; _ += 3) {
              a ? (l[0] = a.getX(_), l[1] = a.getX(_ + 1), l[2] = a.getX(_ + 2)) : (l[0] = _, l[1] = _ + 1, l[2] = _ + 2);
              const { a: w, b: m, c: f } = Na;
              if (w.fromBufferAttribute(o, l[0]), m.fromBufferAttribute(o, l[1]), f.fromBufferAttribute(o, l[2]), Na.getNormal(Tc), u[0] = `${Math.round(w.x * i)},${Math.round(w.y * i)},${Math.round(w.z * i)}`, u[1] = `${Math.round(m.x * i)},${Math.round(m.y * i)},${Math.round(m.z * i)}`, u[2] = `${Math.round(f.x * i)},${Math.round(f.y * i)},${Math.round(f.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let b = 0; b < 3; b++) {
                const v = (b + 1) % 3, R = u[b], I = u[v], y = Na[h[b]], A = Na[h[v]], B = `${R}_${I}`, S = `${I}_${R}`;
                S in d && d[S] ? (Tc.dot(d[S].normal) <= s && (p.push(y.x, y.y, y.z), p.push(A.x, A.y, A.z)), d[S] = null) : B in d || (d[B] = {
                  index0: l[b],
                  index1: l[v],
                  normal: Tc.clone()
                });
              }
            }
            for (const _ in d) if (d[_]) {
              const { index0: w, index1: m } = d[_];
              Da.fromBufferAttribute(o, w), Ua.fromBufferAttribute(o, m), p.push(Da.x, Da.y, Da.z), p.push(Ua.x, Ua.y, Ua.z);
            }
            this.setAttribute("position", new Ge(p, 3));
          }
        }
        copy(t) {
          return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
      }
      class Zr extends sn {
        constructor(t = 1, e = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
          super(), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: n,
            phiStart: i,
            phiLength: s,
            thetaStart: a,
            thetaLength: o
          }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
          const c = Math.min(a + o, Math.PI);
          let l = 0;
          const h = [], u = new C(), d = new C(), p = [], _ = [], w = [], m = [];
          for (let f = 0; f <= n; f++) {
            const b = [], v = f / n;
            let R = 0;
            f === 0 && a === 0 ? R = 0.5 / e : f === n && c === Math.PI && (R = -0.5 / e);
            for (let I = 0; I <= e; I++) {
              const y = I / e;
              u.x = -t * Math.cos(i + y * s) * Math.sin(a + v * o), u.y = t * Math.cos(a + v * o), u.z = t * Math.sin(i + y * s) * Math.sin(a + v * o), _.push(u.x, u.y, u.z), d.copy(u).normalize(), w.push(d.x, d.y, d.z), m.push(y + R, 1 - v), b.push(l++);
            }
            h.push(b);
          }
          for (let f = 0; f < n; f++) for (let b = 0; b < e; b++) {
            const v = h[f][b + 1], R = h[f][b], I = h[f + 1][b], y = h[f + 1][b + 1];
            (f !== 0 || a > 0) && p.push(v, R, y), (f !== n - 1 || c < Math.PI) && p.push(R, I, y);
          }
          this.setIndex(p), this.setAttribute("position", new Ge(_, 3)), this.setAttribute("normal", new Ge(w, 3)), this.setAttribute("uv", new Ge(m, 2));
        }
        copy(t) {
          return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
        static fromJSON(t) {
          return new Zr(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
        }
      }
      class u0 extends sn {
        constructor(t = null) {
          if (super(), this.type = "WireframeGeometry", this.parameters = {
            geometry: t
          }, t !== null) {
            const e = [], n = /* @__PURE__ */ new Set(), i = new C(), s = new C();
            if (t.index !== null) {
              const a = t.attributes.position, o = t.index;
              let c = t.groups;
              c.length === 0 && (c = [
                {
                  start: 0,
                  count: o.count,
                  materialIndex: 0
                }
              ]);
              for (let l = 0, h = c.length; l < h; ++l) {
                const u = c[l], d = u.start, p = u.count;
                for (let _ = d, w = d + p; _ < w; _ += 3) for (let m = 0; m < 3; m++) {
                  const f = o.getX(_ + m), b = o.getX(_ + (m + 1) % 3);
                  i.fromBufferAttribute(a, f), s.fromBufferAttribute(a, b), id(i, s, n) === true && (e.push(i.x, i.y, i.z), e.push(s.x, s.y, s.z));
                }
              }
            } else {
              const a = t.attributes.position;
              for (let o = 0, c = a.count / 3; o < c; o++) for (let l = 0; l < 3; l++) {
                const h = 3 * o + l, u = 3 * o + (l + 1) % 3;
                i.fromBufferAttribute(a, h), s.fromBufferAttribute(a, u), id(i, s, n) === true && (e.push(i.x, i.y, i.z), e.push(s.x, s.y, s.z));
              }
            }
            this.setAttribute("position", new Ge(e, 3));
          }
        }
        copy(t) {
          return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
        }
      }
      function id(r, t, e) {
        const n = `${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;
        return e.has(n) === true || e.has(i) === true ? false : (e.add(n), e.add(i), true);
      }
      class gs extends Kn {
        constructor(t) {
          super(), this.isMeshStandardMaterial = true, this.defines = {
            STANDARD: ""
          }, this.type = "MeshStandardMaterial", this.color = new At(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new At(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = nf, this.normalScale = new Ot(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
        }
        copy(t) {
          return super.copy(t), this.defines = {
            STANDARD: ""
          }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
      }
      class bi extends gs {
        constructor(t) {
          super(), this.isMeshPhysicalMaterial = true, this.defines = {
            STANDARD: "",
            PHYSICAL: ""
          }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ot(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
            get: function() {
              return Xe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
            },
            set: function(e) {
              this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
            }
          }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [
            100,
            400
          ], this.iridescenceThicknessMap = null, this.sheenColor = new At(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new At(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new At(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
        }
        get anisotropy() {
          return this._anisotropy;
        }
        set anisotropy(t) {
          this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
        }
        get clearcoat() {
          return this._clearcoat;
        }
        set clearcoat(t) {
          this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
        }
        get iridescence() {
          return this._iridescence;
        }
        set iridescence(t) {
          this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
        }
        get sheen() {
          return this._sheen;
        }
        set sheen(t) {
          this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
        }
        get transmission() {
          return this._transmission;
        }
        set transmission(t) {
          this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
        }
        copy(t) {
          return super.copy(t), this.defines = {
            STANDARD: "",
            PHYSICAL: ""
          }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [
            ...t.iridescenceThicknessRange
          ], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
        }
      }
      function Fa(r, t, e) {
        return !r || !e && r.constructor === t ? r : typeof t.BYTES_PER_ELEMENT == "number" ? new t(r) : Array.prototype.slice.call(r);
      }
      function d0(r) {
        return ArrayBuffer.isView(r) && !(r instanceof DataView);
      }
      function f0(r) {
        function t(i, s) {
          return r[i] - r[s];
        }
        const e = r.length, n = new Array(e);
        for (let i = 0; i !== e; ++i) n[i] = i;
        return n.sort(t), n;
      }
      function rd(r, t, e) {
        const n = r.length, i = new r.constructor(n);
        for (let s = 0, a = 0; a !== n; ++s) {
          const o = e[s] * t;
          for (let c = 0; c !== t; ++c) i[a++] = r[o + c];
        }
        return i;
      }
      function Pf(r, t, e, n) {
        let i = 1, s = r[0];
        for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
        if (s === void 0) return;
        let a = s[n];
        if (a !== void 0) if (Array.isArray(a)) do
          a = s[n], a !== void 0 && (t.push(s.time), e.push.apply(e, a)), s = r[i++];
        while (s !== void 0);
        else if (a.toArray !== void 0) do
          a = s[n], a !== void 0 && (t.push(s.time), a.toArray(e, e.length)), s = r[i++];
        while (s !== void 0);
        else do
          a = s[n], a !== void 0 && (t.push(s.time), e.push(a)), s = r[i++];
        while (s !== void 0);
      }
      class Qs {
        constructor(t, e, n, i) {
          this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
        }
        evaluate(t) {
          const e = this.parameterPositions;
          let n = this._cachedIndex, i = e[n], s = e[n - 1];
          n: {
            t: {
              let a;
              e: {
                i: if (!(t < i)) {
                  for (let o = n + 2; ; ) {
                    if (i === void 0) {
                      if (t < s) break i;
                      return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                    }
                    if (n === o) break;
                    if (s = i, i = e[++n], t < i) break t;
                  }
                  a = e.length;
                  break e;
                }
                if (!(t >= s)) {
                  const o = e[1];
                  t < o && (n = 2, s = o);
                  for (let c = n - 2; ; ) {
                    if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
                    if (n === c) break;
                    if (i = s, s = e[--n - 1], t >= s) break t;
                  }
                  a = n, n = 0;
                  break e;
                }
                break n;
              }
              for (; n < a; ) {
                const o = n + a >>> 1;
                t < e[o] ? a = o : n = o + 1;
              }
              if (i = e[n], s = e[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (i === void 0) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
            }
            this._cachedIndex = n, this.intervalChanged_(n, s, i);
          }
          return this.interpolate_(n, s, t, i);
        }
        getSettings_() {
          return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
          const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = t * i;
          for (let a = 0; a !== i; ++a) e[a] = n[s + a];
          return e;
        }
        interpolate_() {
          throw new Error("call to abstract method");
        }
        intervalChanged_() {
        }
      }
      class p0 extends Qs {
        constructor(t, e, n, i) {
          super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
            endingStart: Zh,
            endingEnd: Zh
          };
        }
        intervalChanged_(t, e, n) {
          const i = this.parameterPositions;
          let s = t - 2, a = t + 1, o = i[s], c = i[a];
          if (o === void 0) switch (this.getSettings_().endingStart) {
            case Qh:
              s = t, o = 2 * e - n;
              break;
            case tu:
              s = i.length - 2, o = e + i[s] - i[s + 1];
              break;
            default:
              s = t, o = n;
          }
          if (c === void 0) switch (this.getSettings_().endingEnd) {
            case Qh:
              a = t, c = 2 * n - e;
              break;
            case tu:
              a = 1, c = n + i[1] - i[0];
              break;
            default:
              a = t - 1, c = e;
          }
          const l = (n - e) * 0.5, h = this.valueSize;
          this._weightPrev = l / (e - o), this._weightNext = l / (c - n), this._offsetPrev = s * h, this._offsetNext = a * h;
        }
        interpolate_(t, e, n, i) {
          const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, _ = (n - e) / (i - e), w = _ * _, m = w * _, f = -d * m + 2 * d * w - d * _, b = (1 + d) * m + (-1.5 - 2 * d) * w + (-0.5 + d) * _ + 1, v = (-1 - p) * m + (1.5 + p) * w + 0.5 * _, R = p * m - p * w;
          for (let I = 0; I !== o; ++I) s[I] = f * a[h + I] + b * a[l + I] + v * a[c + I] + R * a[u + I];
          return s;
        }
      }
      class m0 extends Qs {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = (n - e) / (i - e), u = 1 - h;
          for (let d = 0; d !== o; ++d) s[d] = a[l + d] * u + a[c + d] * h;
          return s;
        }
      }
      class _0 extends Qs {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t) {
          return this.copySampleValue_(t - 1);
        }
      }
      class ti {
        constructor(t, e, n, i) {
          if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
          if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
          this.name = t, this.times = Fa(e, this.TimeBufferType), this.values = Fa(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
          const e = t.constructor;
          let n;
          if (e.toJSON !== this.toJSON) n = e.toJSON(t);
          else {
            n = {
              name: t.name,
              times: Fa(t.times, Array),
              values: Fa(t.values, Array)
            };
            const i = t.getInterpolation();
            i !== t.DefaultInterpolation && (n.interpolation = i);
          }
          return n.type = t.ValueTypeName, n;
        }
        InterpolantFactoryMethodDiscrete(t) {
          return new _0(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
          return new m0(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
          return new p0(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
          let e;
          switch (t) {
            case Vs:
              e = this.InterpolantFactoryMethodDiscrete;
              break;
            case as:
              e = this.InterpolantFactoryMethodLinear;
              break;
            case Qo:
              e = this.InterpolantFactoryMethodSmooth;
              break;
          }
          if (e === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0) if (t !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
            else throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n), this;
          }
          return this.createInterpolant = e, this;
        }
        getInterpolation() {
          switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
              return Vs;
            case this.InterpolantFactoryMethodLinear:
              return as;
            case this.InterpolantFactoryMethodSmooth:
              return Qo;
          }
        }
        getValueSize() {
          return this.values.length / this.times.length;
        }
        shift(t) {
          if (t !== 0) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
          }
          return this;
        }
        scale(t) {
          if (t !== 1) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
          }
          return this;
        }
        trim(t, e) {
          const n = this.times, i = n.length;
          let s = 0, a = i - 1;
          for (; s !== i && n[s] < t; ) ++s;
          for (; a !== -1 && n[a] > e; ) --a;
          if (++a, s !== 0 || a !== i) {
            s >= a && (a = Math.max(a, 1), s = a - 1);
            const o = this.getValueSize();
            this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
          }
          return this;
        }
        validate() {
          let t = true;
          const e = this.getValueSize();
          e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = false);
          const n = this.times, i = this.values, s = n.length;
          s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = false);
          let a = null;
          for (let o = 0; o !== s; o++) {
            const c = n[o];
            if (typeof c == "number" && isNaN(c)) {
              console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), t = false;
              break;
            }
            if (a !== null && a > c) {
              console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), t = false;
              break;
            }
            a = c;
          }
          if (i !== void 0 && d0(i)) for (let o = 0, c = i.length; o !== c; ++o) {
            const l = i[o];
            if (isNaN(l)) {
              console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), t = false;
              break;
            }
          }
          return t;
        }
        optimize() {
          const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Qo, s = t.length - 1;
          let a = 1;
          for (let o = 1; o < s; ++o) {
            let c = false;
            const l = t[o], h = t[o + 1];
            if (l !== h && (o !== 1 || l !== t[0])) if (i) c = true;
            else {
              const u = o * n, d = u - n, p = u + n;
              for (let _ = 0; _ !== n; ++_) {
                const w = e[u + _];
                if (w !== e[d + _] || w !== e[p + _]) {
                  c = true;
                  break;
                }
              }
            }
            if (c) {
              if (o !== a) {
                t[a] = t[o];
                const u = o * n, d = a * n;
                for (let p = 0; p !== n; ++p) e[d + p] = e[u + p];
              }
              ++a;
            }
          }
          if (s > 0) {
            t[a] = t[s];
            for (let o = s * n, c = a * n, l = 0; l !== n; ++l) e[c + l] = e[o + l];
            ++a;
          }
          return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this;
        }
        clone() {
          const t = this.times.slice(), e = this.values.slice(), n = this.constructor, i = new n(this.name, t, e);
          return i.createInterpolant = this.createInterpolant, i;
        }
      }
      ti.prototype.TimeBufferType = Float32Array;
      ti.prototype.ValueBufferType = Float32Array;
      ti.prototype.DefaultInterpolation = as;
      class ws extends ti {
      }
      ws.prototype.ValueTypeName = "bool";
      ws.prototype.ValueBufferType = Array;
      ws.prototype.DefaultInterpolation = Vs;
      ws.prototype.InterpolantFactoryMethodLinear = void 0;
      ws.prototype.InterpolantFactoryMethodSmooth = void 0;
      class Lf extends ti {
      }
      Lf.prototype.ValueTypeName = "color";
      class ls extends ti {
      }
      ls.prototype.ValueTypeName = "number";
      class g0 extends Qs {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - e) / (i - e);
          let l = t * o;
          for (let h = l + o; l !== h; l += 4) vn.slerpFlat(s, 0, a, l - o, a, l, c);
          return s;
        }
      }
      class yr extends ti {
        InterpolantFactoryMethodLinear(t) {
          return new g0(this.times, this.values, this.getValueSize(), t);
        }
      }
      yr.prototype.ValueTypeName = "quaternion";
      yr.prototype.DefaultInterpolation = as;
      yr.prototype.InterpolantFactoryMethodSmooth = void 0;
      class vs extends ti {
      }
      vs.prototype.ValueTypeName = "string";
      vs.prototype.ValueBufferType = Array;
      vs.prototype.DefaultInterpolation = Vs;
      vs.prototype.InterpolantFactoryMethodLinear = void 0;
      vs.prototype.InterpolantFactoryMethodSmooth = void 0;
      class hs extends ti {
      }
      hs.prototype.ValueTypeName = "vector";
      class w0 {
        constructor(t, e = -1, n, i = bm) {
          this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = Hn(), this.duration < 0 && this.resetDuration();
        }
        static parse(t) {
          const e = [], n = t.tracks, i = 1 / (t.fps || 1);
          for (let a = 0, o = n.length; a !== o; ++a) e.push(y0(n[a]).scale(i));
          const s = new this(t.name, t.duration, e, t.blendMode);
          return s.uuid = t.uuid, s;
        }
        static toJSON(t) {
          const e = [], n = t.tracks, i = {
            name: t.name,
            duration: t.duration,
            tracks: e,
            uuid: t.uuid,
            blendMode: t.blendMode
          };
          for (let s = 0, a = n.length; s !== a; ++s) e.push(ti.toJSON(n[s]));
          return i;
        }
        static CreateFromMorphTargetSequence(t, e, n, i) {
          const s = e.length, a = [];
          for (let o = 0; o < s; o++) {
            let c = [], l = [];
            c.push((o + s - 1) % s, o, (o + 1) % s), l.push(0, 1, 0);
            const h = f0(c);
            c = rd(c, 1, h), l = rd(l, 1, h), !i && c[0] === 0 && (c.push(s), l.push(l[0])), a.push(new ls(".morphTargetInfluences[" + e[o].name + "]", c, l).scale(1 / n));
          }
          return new this(t, -1, a);
        }
        static findByName(t, e) {
          let n = t;
          if (!Array.isArray(t)) {
            const i = t;
            n = i.geometry && i.geometry.animations || i.animations;
          }
          for (let i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
          return null;
        }
        static CreateClipsFromMorphTargetSequences(t, e, n) {
          const i = {}, s = /^([\w-]*?)([\d]+)$/;
          for (let o = 0, c = t.length; o < c; o++) {
            const l = t[o], h = l.name.match(s);
            if (h && h.length > 1) {
              const u = h[1];
              let d = i[u];
              d || (i[u] = d = []), d.push(l);
            }
          }
          const a = [];
          for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], e, n));
          return a;
        }
        static parseAnimation(t, e) {
          if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
          const n = function(u, d, p, _, w) {
            if (p.length !== 0) {
              const m = [], f = [];
              Pf(p, m, f, _), m.length !== 0 && w.push(new u(d, m, f));
            }
          }, i = [], s = t.name || "default", a = t.fps || 30, o = t.blendMode;
          let c = t.length || -1;
          const l = t.hierarchy || [];
          for (let u = 0; u < l.length; u++) {
            const d = l[u].keys;
            if (!(!d || d.length === 0)) if (d[0].morphTargets) {
              const p = {};
              let _;
              for (_ = 0; _ < d.length; _++) if (d[_].morphTargets) for (let w = 0; w < d[_].morphTargets.length; w++) p[d[_].morphTargets[w]] = -1;
              for (const w in p) {
                const m = [], f = [];
                for (let b = 0; b !== d[_].morphTargets.length; ++b) {
                  const v = d[_];
                  m.push(v.time), f.push(v.morphTarget === w ? 1 : 0);
                }
                i.push(new ls(".morphTargetInfluence[" + w + "]", m, f));
              }
              c = p.length * a;
            } else {
              const p = ".bones[" + e[u].name + "]";
              n(hs, p + ".position", d, "pos", i), n(yr, p + ".quaternion", d, "rot", i), n(hs, p + ".scale", d, "scl", i);
            }
          }
          return i.length === 0 ? null : new this(s, c, i, o);
        }
        resetDuration() {
          const t = this.tracks;
          let e = 0;
          for (let n = 0, i = t.length; n !== i; ++n) {
            const s = this.tracks[n];
            e = Math.max(e, s.times[s.times.length - 1]);
          }
          return this.duration = e, this;
        }
        trim() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
          return this;
        }
        validate() {
          let t = true;
          for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
          return t;
        }
        optimize() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
          return this;
        }
        clone() {
          const t = [];
          for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
          return new this.constructor(this.name, this.duration, t, this.blendMode);
        }
        toJSON() {
          return this.constructor.toJSON(this);
        }
      }
      function v0(r) {
        switch (r.toLowerCase()) {
          case "scalar":
          case "double":
          case "float":
          case "number":
          case "integer":
            return ls;
          case "vector":
          case "vector2":
          case "vector3":
          case "vector4":
            return hs;
          case "color":
            return Lf;
          case "quaternion":
            return yr;
          case "bool":
          case "boolean":
            return ws;
          case "string":
            return vs;
        }
        throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
      }
      function y0(r) {
        if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
        const t = v0(r.type);
        if (r.times === void 0) {
          const e = [], n = [];
          Pf(r.keys, e, n, "value"), r.times = e, r.values = n;
        }
        return t.parse !== void 0 ? t.parse(r) : new t(r.name, r.times, r.values, r.interpolation);
      }
      const Hi = {
        enabled: false,
        files: {},
        add: function(r, t) {
          this.enabled !== false && (this.files[r] = t);
        },
        get: function(r) {
          if (this.enabled !== false) return this.files[r];
        },
        remove: function(r) {
          delete this.files[r];
        },
        clear: function() {
          this.files = {};
        }
      };
      class x0 {
        constructor(t, e, n) {
          const i = this;
          let s = false, a = 0, o = 0, c;
          const l = [];
          this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
            o++, s === false && i.onStart !== void 0 && i.onStart(h, a, o), s = true;
          }, this.itemEnd = function(h) {
            a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = false, i.onLoad !== void 0 && i.onLoad());
          }, this.itemError = function(h) {
            i.onError !== void 0 && i.onError(h);
          }, this.resolveURL = function(h) {
            return c ? c(h) : h;
          }, this.setURLModifier = function(h) {
            return c = h, this;
          }, this.addHandler = function(h, u) {
            return l.push(h, u), this;
          }, this.removeHandler = function(h) {
            const u = l.indexOf(h);
            return u !== -1 && l.splice(u, 2), this;
          }, this.getHandler = function(h) {
            for (let u = 0, d = l.length; u < d; u += 2) {
              const p = l[u], _ = l[u + 1];
              if (p.global && (p.lastIndex = 0), p.test(h)) return _;
            }
            return null;
          };
        }
      }
      const S0 = new x0();
      class ys {
        constructor(t) {
          this.manager = t !== void 0 ? t : S0, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {
        }
        loadAsync(t, e) {
          const n = this;
          return new Promise(function(i, s) {
            n.load(t, i, e, s);
          });
        }
        parse() {
        }
        setCrossOrigin(t) {
          return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
          return this.withCredentials = t, this;
        }
        setPath(t) {
          return this.path = t, this;
        }
        setResourcePath(t) {
          return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
          return this.requestHeader = t, this;
        }
      }
      ys.DEFAULT_MATERIAL_NAME = "__DEFAULT";
      const ci = {};
      class b0 extends Error {
        constructor(t, e) {
          super(t), this.response = e;
        }
      }
      class If extends ys {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
          const s = Hi.get(t);
          if (s !== void 0) return this.manager.itemStart(t), setTimeout(() => {
            e && e(s), this.manager.itemEnd(t);
          }, 0), s;
          if (ci[t] !== void 0) {
            ci[t].push({
              onLoad: e,
              onProgress: n,
              onError: i
            });
            return;
          }
          ci[t] = [], ci[t].push({
            onLoad: e,
            onProgress: n,
            onError: i
          });
          const a = new Request(t, {
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
          }), o = this.mimeType, c = this.responseType;
          fetch(a).then((l) => {
            if (l.status === 200 || l.status === 0) {
              if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
              const h = ci[t], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = d ? parseInt(d) : 0, _ = p !== 0;
              let w = 0;
              const m = new ReadableStream({
                start(f) {
                  b();
                  function b() {
                    u.read().then(({ done: v, value: R }) => {
                      if (v) f.close();
                      else {
                        w += R.byteLength;
                        const I = new ProgressEvent("progress", {
                          lengthComputable: _,
                          loaded: w,
                          total: p
                        });
                        for (let y = 0, A = h.length; y < A; y++) {
                          const B = h[y];
                          B.onProgress && B.onProgress(I);
                        }
                        f.enqueue(R), b();
                      }
                    });
                  }
                }
              });
              return new Response(m);
            } else throw new b0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
          }).then((l) => {
            switch (c) {
              case "arraybuffer":
                return l.arrayBuffer();
              case "blob":
                return l.blob();
              case "document":
                return l.text().then((h) => new DOMParser().parseFromString(h, o));
              case "json":
                return l.json();
              default:
                if (o === void 0) return l.text();
                {
                  const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
                  return l.arrayBuffer().then((_) => p.decode(_));
                }
            }
          }).then((l) => {
            Hi.add(t, l);
            const h = ci[t];
            delete ci[t];
            for (let u = 0, d = h.length; u < d; u++) {
              const p = h[u];
              p.onLoad && p.onLoad(l);
            }
          }).catch((l) => {
            const h = ci[t];
            if (h === void 0) throw this.manager.itemError(t), l;
            delete ci[t];
            for (let u = 0, d = h.length; u < d; u++) {
              const p = h[u];
              p.onError && p.onError(l);
            }
            this.manager.itemError(t);
          }).finally(() => {
            this.manager.itemEnd(t);
          }), this.manager.itemStart(t);
        }
        setResponseType(t) {
          return this.responseType = t, this;
        }
        setMimeType(t) {
          return this.mimeType = t, this;
        }
      }
      class M0 extends ys {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
          const s = this, a = Hi.get(t);
          if (a !== void 0) return s.manager.itemStart(t), setTimeout(function() {
            e && e(a), s.manager.itemEnd(t);
          }, 0), a;
          const o = Ws("img");
          function c() {
            h(), Hi.add(t, this), e && e(this), s.manager.itemEnd(t);
          }
          function l(u) {
            h(), i && i(u), s.manager.itemError(t), s.manager.itemEnd(t);
          }
          function h() {
            o.removeEventListener("load", c, false), o.removeEventListener("error", l, false);
          }
          return o.addEventListener("load", c, false), o.addEventListener("error", l, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(t), o.src = t, o;
        }
      }
      class Df extends ys {
        constructor(t) {
          super(t);
        }
        load(t, e, n, i) {
          const s = new He(), a = new M0(this.manager);
          return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
            s.image = o, s.needsUpdate = true, e !== void 0 && e(s);
          }, n, i), s;
        }
      }
      class Po extends be {
        constructor(t, e = 1) {
          super(), this.isLight = true, this.type = "Light", this.color = new At(t), this.intensity = e;
        }
        dispose() {
        }
        copy(t, e) {
          return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), e;
        }
      }
      const Ac = new Bt(), sd = new C(), ad = new C();
      class Bl {
        constructor(t) {
          this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ot(512, 512), this.map = null, this.mapPass = null, this.matrix = new Bt(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Il(), this._frameExtents = new Ot(1, 1), this._viewportCount = 1, this._viewports = [
            new ne(0, 0, 1, 1)
          ];
        }
        getViewportCount() {
          return this._viewportCount;
        }
        getFrustum() {
          return this._frustum;
        }
        updateMatrices(t) {
          const e = this.camera, n = this.matrix;
          sd.setFromMatrixPosition(t.matrixWorld), e.position.copy(sd), ad.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(ad), e.updateMatrixWorld(), Ac.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ac), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Ac);
        }
        getViewport(t) {
          return this._viewports[t];
        }
        getFrameExtents() {
          return this._frameExtents;
        }
        dispose() {
          this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
        }
        copy(t) {
          return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        toJSON() {
          const t = {};
          return this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
        }
      }
      class E0 extends Bl {
        constructor() {
          super(new nn(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
        }
        updateMatrices(t) {
          const e = this.camera, n = os * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = t.distance || e.far;
          (n !== e.fov || i !== e.aspect || s !== e.far) && (e.fov = n, e.aspect = i, e.far = s, e.updateProjectionMatrix()), super.updateMatrices(t);
        }
        copy(t) {
          return super.copy(t), this.focus = t.focus, this;
        }
      }
      class T0 extends Po {
        constructor(t, e, n = 0, i = Math.PI / 3, s = 0, a = 2) {
          super(t, e), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(be.DEFAULT_UP), this.updateMatrix(), this.target = new be(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new E0();
        }
        get power() {
          return this.intensity * Math.PI;
        }
        set power(t) {
          this.intensity = t / Math.PI;
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t, e) {
          return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
      }
      const od = new Bt(), Ps = new C(), Rc = new C();
      class A0 extends Bl {
        constructor() {
          super(new nn(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Ot(4, 2), this._viewportCount = 6, this._viewports = [
            new ne(2, 1, 1, 1),
            new ne(0, 1, 1, 1),
            new ne(3, 1, 1, 1),
            new ne(1, 1, 1, 1),
            new ne(3, 0, 1, 1),
            new ne(1, 0, 1, 1)
          ], this._cubeDirections = [
            new C(1, 0, 0),
            new C(-1, 0, 0),
            new C(0, 0, 1),
            new C(0, 0, -1),
            new C(0, 1, 0),
            new C(0, -1, 0)
          ], this._cubeUps = [
            new C(0, 1, 0),
            new C(0, 1, 0),
            new C(0, 1, 0),
            new C(0, 1, 0),
            new C(0, 0, 1),
            new C(0, 0, -1)
          ];
        }
        updateMatrices(t, e = 0) {
          const n = this.camera, i = this.matrix, s = t.distance || n.far;
          s !== n.far && (n.far = s, n.updateProjectionMatrix()), Ps.setFromMatrixPosition(t.matrixWorld), n.position.copy(Ps), Rc.copy(n.position), Rc.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(Rc), n.updateMatrixWorld(), i.makeTranslation(-Ps.x, -Ps.y, -Ps.z), od.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(od);
        }
      }
      class ul extends Po {
        constructor(t, e, n = 0, i = 2) {
          super(t, e), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new A0();
        }
        get power() {
          return this.intensity * 4 * Math.PI;
        }
        set power(t) {
          this.intensity = t / (4 * Math.PI);
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t, e) {
          return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
        }
      }
      class R0 extends Bl {
        constructor() {
          super(new Ro(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
        }
      }
      class Uf extends Po {
        constructor(t, e) {
          super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(be.DEFAULT_UP), this.updateMatrix(), this.target = new be(), this.shadow = new R0();
        }
        dispose() {
          this.shadow.dispose();
        }
        copy(t) {
          return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
        }
      }
      class C0 extends Po {
        constructor(t, e) {
          super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
        }
      }
      class Hs {
        static decodeText(t) {
          if (typeof TextDecoder < "u") return new TextDecoder().decode(t);
          let e = "";
          for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
          try {
            return decodeURIComponent(escape(e));
          } catch {
            return e;
          }
        }
        static extractUrlBase(t) {
          const e = t.lastIndexOf("/");
          return e === -1 ? "./" : t.slice(0, e + 1);
        }
        static resolveURL(t, e) {
          return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
        }
      }
      class P0 extends sn {
        constructor() {
          super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
        }
        copy(t) {
          return super.copy(t), this.instanceCount = t.instanceCount, this;
        }
        toJSON() {
          const t = super.toJSON();
          return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = true, t;
        }
      }
      class L0 extends ys {
        constructor(t) {
          super(t), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
            premultiplyAlpha: "none"
          };
        }
        setOptions(t) {
          return this.options = t, this;
        }
        load(t, e, n, i) {
          t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
          const s = this, a = Hi.get(t);
          if (a !== void 0) {
            if (s.manager.itemStart(t), a.then) {
              a.then((l) => {
                e && e(l), s.manager.itemEnd(t);
              }).catch((l) => {
                i && i(l);
              });
              return;
            }
            return setTimeout(function() {
              e && e(a), s.manager.itemEnd(t);
            }, 0), a;
          }
          const o = {};
          o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
          const c = fetch(t, o).then(function(l) {
            return l.blob();
          }).then(function(l) {
            return createImageBitmap(l, Object.assign(s.options, {
              colorSpaceConversion: "none"
            }));
          }).then(function(l) {
            return Hi.add(t, l), e && e(l), s.manager.itemEnd(t), l;
          }).catch(function(l) {
            i && i(l), Hi.remove(t), s.manager.itemError(t), s.manager.itemEnd(t);
          });
          Hi.add(t, c), s.manager.itemStart(t);
        }
      }
      class I0 {
        constructor(t = true) {
          this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
        }
        start() {
          this.startTime = cd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
        }
        stop() {
          this.getElapsedTime(), this.running = false, this.autoStart = false;
        }
        getElapsedTime() {
          return this.getDelta(), this.elapsedTime;
        }
        getDelta() {
          let t = 0;
          if (this.autoStart && !this.running) return this.start(), 0;
          if (this.running) {
            const e = cd();
            t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
          }
          return t;
        }
      }
      function cd() {
        return (typeof performance > "u" ? Date : performance).now();
      }
      const zl = "\\[\\]\\.:\\/", D0 = new RegExp("[" + zl + "]", "g"), Hl = "[^" + zl + "]", U0 = "[^" + zl.replace("\\.", "") + "]", N0 = /((?:WC+[\/:])*)/.source.replace("WC", Hl), F0 = /(WCOD+)?/.source.replace("WCOD", U0), O0 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Hl), B0 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Hl), z0 = new RegExp("^" + N0 + F0 + O0 + B0 + "$"), H0 = [
        "material",
        "materials",
        "bones",
        "map"
      ];
      class G0 {
        constructor(t, e, n) {
          const i = n || oe.parseTrackName(e);
          this._targetGroup = t, this._bindings = t.subscribe_(e, i);
        }
        getValue(t, e) {
          this.bind();
          const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
          i !== void 0 && i.getValue(t, e);
        }
        setValue(t, e) {
          const n = this._bindings;
          for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(t, e);
        }
        bind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind();
        }
        unbind() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind();
        }
      }
      class oe {
        constructor(t, e, n) {
          this.path = e, this.parsedPath = n || oe.parseTrackName(e), this.node = oe.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
        static create(t, e, n) {
          return t && t.isAnimationObjectGroup ? new oe.Composite(t, e, n) : new oe(t, e, n);
        }
        static sanitizeNodeName(t) {
          return t.replace(/\s/g, "_").replace(D0, "");
        }
        static parseTrackName(t) {
          const e = z0.exec(t);
          if (e === null) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const n = {
            nodeName: e[2],
            objectName: e[3],
            objectIndex: e[4],
            propertyName: e[5],
            propertyIndex: e[6]
          }, i = n.nodeName && n.nodeName.lastIndexOf(".");
          if (i !== void 0 && i !== -1) {
            const s = n.nodeName.substring(i + 1);
            H0.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
          }
          if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
          return n;
        }
        static findNode(t, e) {
          if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid) return t;
          if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (n !== void 0) return n;
          }
          if (t.children) {
            const n = function(s) {
              for (let a = 0; a < s.length; a++) {
                const o = s[a];
                if (o.name === e || o.uuid === e) return o;
                const c = n(o.children);
                if (c) return c;
              }
              return null;
            }, i = n(t.children);
            if (i) return i;
          }
          return null;
        }
        _getValue_unavailable() {
        }
        _setValue_unavailable() {
        }
        _getValue_direct(t, e) {
          t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, s = n.length; i !== s; ++i) t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
          t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
          this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
          this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
          this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = true;
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
          this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
        }
        _setValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, s = n.length; i !== s; ++i) n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, s = n.length; i !== s; ++i) n[i] = t[e++];
          this.targetObject.needsUpdate = true;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, s = n.length; i !== s; ++i) n[i] = t[e++];
          this.targetObject.matrixWorldNeedsUpdate = true;
        }
        _setValue_arrayElement(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = true;
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = true;
        }
        _setValue_fromArray(t, e) {
          this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = true;
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = true;
        }
        _getValue_unbound(t, e) {
          this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
          this.bind(), this.setValue(t, e);
        }
        bind() {
          let t = this.node;
          const e = this.parsedPath, n = e.objectName, i = e.propertyName;
          let s = e.propertyIndex;
          if (t || (t = oe.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
            console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            return;
          }
          if (n) {
            let l = e.objectIndex;
            switch (n) {
              case "materials":
                if (!t.material) {
                  console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  return;
                }
                if (!t.material.materials) {
                  console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                  return;
                }
                t = t.material.materials;
                break;
              case "bones":
                if (!t.skeleton) {
                  console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                  return;
                }
                t = t.skeleton.bones;
                for (let h = 0; h < t.length; h++) if (t[h].name === l) {
                  l = h;
                  break;
                }
                break;
              case "map":
                if ("map" in t) {
                  t = t.map;
                  break;
                }
                if (!t.material) {
                  console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  return;
                }
                if (!t.material.map) {
                  console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                  return;
                }
                t = t.material.map;
                break;
              default:
                if (t[n] === void 0) {
                  console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                  return;
                }
                t = t[n];
            }
            if (l !== void 0) {
              if (t[l] === void 0) {
                console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                return;
              }
              t = t[l];
            }
          }
          const a = t[i];
          if (a === void 0) {
            const l = e.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", t);
            return;
          }
          let o = this.Versioning.None;
          this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
          let c = this.BindingType.Direct;
          if (s !== void 0) {
            if (i === "morphTargetInfluences") {
              if (!t.geometry) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                return;
              }
              if (!t.geometry.morphAttributes) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                return;
              }
              t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
            }
            c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
          } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
          this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
        }
        unbind() {
          this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
        }
      }
      oe.Composite = G0;
      oe.prototype.BindingType = {
        Direct: 0,
        EntireArray: 1,
        ArrayElement: 2,
        HasFromToArray: 3
      };
      oe.prototype.Versioning = {
        None: 0,
        NeedsUpdate: 1,
        MatrixWorldNeedsUpdate: 2
      };
      oe.prototype.GetterByBindingType = [
        oe.prototype._getValue_direct,
        oe.prototype._getValue_array,
        oe.prototype._getValue_arrayElement,
        oe.prototype._getValue_toArray
      ];
      oe.prototype.SetterByBindingTypeAndVersioning = [
        [
          oe.prototype._setValue_direct,
          oe.prototype._setValue_direct_setNeedsUpdate,
          oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
        ],
        [
          oe.prototype._setValue_array,
          oe.prototype._setValue_array_setNeedsUpdate,
          oe.prototype._setValue_array_setMatrixWorldNeedsUpdate
        ],
        [
          oe.prototype._setValue_arrayElement,
          oe.prototype._setValue_arrayElement_setNeedsUpdate,
          oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
        ],
        [
          oe.prototype._setValue_fromArray,
          oe.prototype._setValue_fromArray_setNeedsUpdate,
          oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
        ]
      ];
      class dl extends Tf {
        constructor(t, e, n = 1) {
          super(t, e), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = n;
        }
        copy(t) {
          return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
        }
        clone(t) {
          const e = super.clone(t);
          return e.meshPerAttribute = this.meshPerAttribute, e;
        }
        toJSON(t) {
          const e = super.toJSON(t);
          return e.isInstancedInterleavedBuffer = true, e.meshPerAttribute = this.meshPerAttribute, e;
        }
      }
      const ld = new C(), Oa = new C();
      class k0 {
        constructor(t = new C(), e = new C()) {
          this.start = t, this.end = e;
        }
        set(t, e) {
          return this.start.copy(t), this.end.copy(e), this;
        }
        copy(t) {
          return this.start.copy(t.start), this.end.copy(t.end), this;
        }
        getCenter(t) {
          return t.addVectors(this.start, this.end).multiplyScalar(0.5);
        }
        delta(t) {
          return t.subVectors(this.end, this.start);
        }
        distanceSq() {
          return this.start.distanceToSquared(this.end);
        }
        distance() {
          return this.start.distanceTo(this.end);
        }
        at(t, e) {
          return this.delta(e).multiplyScalar(t).add(this.start);
        }
        closestPointToPointParameter(t, e) {
          ld.subVectors(t, this.start), Oa.subVectors(this.end, this.start);
          const n = Oa.dot(Oa);
          let s = Oa.dot(ld) / n;
          return e && (s = Xe(s, 0, 1)), s;
        }
        closestPointToPoint(t, e, n) {
          const i = this.closestPointToPointParameter(t, e);
          return this.delta(n).multiplyScalar(i).add(this.start);
        }
        applyMatrix4(t) {
          return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
        }
        equals(t) {
          return t.start.equals(this.start) && t.end.equals(this.end);
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
          revision: Rl
        }
      }));
      typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Rl);
      function hd(r, t) {
        if (t === Mm) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
        if (t === rl || t === tf) {
          let e = r.getIndex();
          if (e === null) {
            const a = [], o = r.getAttribute("position");
            if (o !== void 0) {
              for (let c = 0; c < o.count; c++) a.push(c);
              r.setIndex(a), e = r.getIndex();
            } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
          }
          const n = e.count - 2, i = [];
          if (t === rl) for (let a = 1; a <= n; a++) i.push(e.getX(0)), i.push(e.getX(a)), i.push(e.getX(a + 1));
          else for (let a = 0; a < n; a++) a % 2 === 0 ? (i.push(e.getX(a)), i.push(e.getX(a + 1)), i.push(e.getX(a + 2))) : (i.push(e.getX(a + 2)), i.push(e.getX(a + 1)), i.push(e.getX(a)));
          i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
          const s = r.clone();
          return s.setIndex(i), s.clearGroups(), s;
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), r;
      }
      class V0 extends ys {
        constructor(t) {
          super(t), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
            return new Y0(e);
          }), this.register(function(e) {
            return new ix(e);
          }), this.register(function(e) {
            return new rx(e);
          }), this.register(function(e) {
            return new sx(e);
          }), this.register(function(e) {
            return new J0(e);
          }), this.register(function(e) {
            return new $0(e);
          }), this.register(function(e) {
            return new Z0(e);
          }), this.register(function(e) {
            return new Q0(e);
          }), this.register(function(e) {
            return new q0(e);
          }), this.register(function(e) {
            return new tx(e);
          }), this.register(function(e) {
            return new K0(e);
          }), this.register(function(e) {
            return new nx(e);
          }), this.register(function(e) {
            return new ex(e);
          }), this.register(function(e) {
            return new j0(e);
          }), this.register(function(e) {
            return new ax(e);
          }), this.register(function(e) {
            return new ox(e);
          });
        }
        load(t, e, n, i) {
          const s = this;
          let a;
          if (this.resourcePath !== "") a = this.resourcePath;
          else if (this.path !== "") {
            const l = Hs.extractUrlBase(t);
            a = Hs.resolveURL(l, this.path);
          } else a = Hs.extractUrlBase(t);
          this.manager.itemStart(t);
          const o = function(l) {
            i ? i(l) : console.error(l), s.manager.itemError(t), s.manager.itemEnd(t);
          }, c = new If(this.manager);
          c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(t, function(l) {
            try {
              s.parse(l, a, function(h) {
                e(h), s.manager.itemEnd(t);
              }, o);
            } catch (h) {
              o(h);
            }
          }, n, o);
        }
        setDRACOLoader(t) {
          return this.dracoLoader = t, this;
        }
        setDDSLoader() {
          throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
        }
        setKTX2Loader(t) {
          return this.ktx2Loader = t, this;
        }
        setMeshoptDecoder(t) {
          return this.meshoptDecoder = t, this;
        }
        register(t) {
          return this.pluginCallbacks.indexOf(t) === -1 && this.pluginCallbacks.push(t), this;
        }
        unregister(t) {
          return this.pluginCallbacks.indexOf(t) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this;
        }
        parse(t, e, n, i) {
          let s;
          const a = {}, o = {}, c = new TextDecoder();
          if (typeof t == "string") s = JSON.parse(t);
          else if (t instanceof ArrayBuffer) if (c.decode(new Uint8Array(t, 0, 4)) === Nf) {
            try {
              a[Qt.KHR_BINARY_GLTF] = new cx(t);
            } catch (u) {
              i && i(u);
              return;
            }
            s = JSON.parse(a[Qt.KHR_BINARY_GLTF].content);
          } else s = JSON.parse(c.decode(t));
          else s = t;
          if (s.asset === void 0 || s.asset.version[0] < 2) {
            i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
          }
          const l = new xx(s, {
            path: e || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
          });
          l.fileLoader.setRequestHeader(this.requestHeader);
          for (let h = 0; h < this.pluginCallbacks.length; h++) {
            const u = this.pluginCallbacks[h](l);
            u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = true;
          }
          if (s.extensionsUsed) for (let h = 0; h < s.extensionsUsed.length; ++h) {
            const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
            switch (u) {
              case Qt.KHR_MATERIALS_UNLIT:
                a[u] = new X0();
                break;
              case Qt.KHR_DRACO_MESH_COMPRESSION:
                a[u] = new lx(s, this.dracoLoader);
                break;
              case Qt.KHR_TEXTURE_TRANSFORM:
                a[u] = new hx();
                break;
              case Qt.KHR_MESH_QUANTIZATION:
                a[u] = new ux();
                break;
              default:
                d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
            }
          }
          l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
        }
        parseAsync(t, e) {
          const n = this;
          return new Promise(function(i, s) {
            n.parse(t, e, i, s);
          });
        }
      }
      function W0() {
        let r = {};
        return {
          get: function(t) {
            return r[t];
          },
          add: function(t, e) {
            r[t] = e;
          },
          remove: function(t) {
            delete r[t];
          },
          removeAll: function() {
            r = {};
          }
        };
      }
      const Qt = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
      };
      class j0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_LIGHTS_PUNCTUAL, this.cache = {
            refs: {},
            uses: {}
          };
        }
        _markDefs() {
          const t = this.parser, e = this.parser.json.nodes || [];
          for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && t._addNodeRef(this.cache, s.extensions[this.name].light);
          }
        }
        _loadLight(t) {
          const e = this.parser, n = "light:" + t;
          let i = e.cache.get(n);
          if (i) return i;
          const s = e.json, c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[t];
          let l;
          const h = new At(16777215);
          c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], ke);
          const u = c.range !== void 0 ? c.range : 0;
          switch (c.type) {
            case "directional":
              l = new Uf(h), l.target.position.set(0, 0, -1), l.add(l.target);
              break;
            case "point":
              l = new ul(h), l.distance = u;
              break;
            case "spot":
              l = new T0(h), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
              break;
            default:
              throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
          }
          return l.position.set(0, 0, 0), l.decay = 2, Oi(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = e.createUniqueName(c.name || "light_" + t), i = Promise.resolve(l), e.cache.add(n, i), i;
        }
        getDependency(t, e) {
          if (t === "light") return this._loadLight(e);
        }
        createNodeAttachment(t) {
          const e = this, n = this.parser, s = n.json.nodes[t], o = (s.extensions && s.extensions[this.name] || {}).light;
          return o === void 0 ? null : this._loadLight(o).then(function(c) {
            return n._getNodeRef(e.cache, o, c);
          });
        }
      }
      class X0 {
        constructor() {
          this.name = Qt.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return Bn;
        }
        extendParams(t, e, n) {
          const i = [];
          t.color = new At(1, 1, 1), t.opacity = 1;
          const s = e.pbrMetallicRoughness;
          if (s) {
            if (Array.isArray(s.baseColorFactor)) {
              const a = s.baseColorFactor;
              t.color.setRGB(a[0], a[1], a[2], ke), t.opacity = a[3];
            }
            s.baseColorTexture !== void 0 && i.push(n.assignTexture(t, "map", s.baseColorTexture, Se));
          }
          return Promise.all(i);
        }
      }
      class q0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_EMISSIVE_STRENGTH;
        }
        extendMaterialParams(t, e) {
          const i = this.parser.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = i.extensions[this.name].emissiveStrength;
          return s !== void 0 && (e.emissiveIntensity = s), Promise.resolve();
        }
      }
      class Y0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_CLEARCOAT;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          if (a.clearcoatFactor !== void 0 && (e.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(e, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (e.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(e, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(e, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
            const o = a.clearcoatNormalTexture.scale;
            e.clearcoatNormalScale = new Ot(o, o);
          }
          return Promise.all(s);
        }
      }
      class K0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_IRIDESCENCE;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          return a.iridescenceFactor !== void 0 && (e.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(e, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (e.iridescenceIOR = a.iridescenceIor), e.iridescenceThicknessRange === void 0 && (e.iridescenceThicknessRange = [
            100,
            400
          ]), a.iridescenceThicknessMinimum !== void 0 && (e.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (e.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(e, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
        }
      }
      class J0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_SHEEN;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [];
          e.sheenColor = new At(0, 0, 0), e.sheenRoughness = 0, e.sheen = 1;
          const a = i.extensions[this.name];
          if (a.sheenColorFactor !== void 0) {
            const o = a.sheenColorFactor;
            e.sheenColor.setRGB(o[0], o[1], o[2], ke);
          }
          return a.sheenRoughnessFactor !== void 0 && (e.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(e, "sheenColorMap", a.sheenColorTexture, Se)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(e, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
        }
      }
      class $0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_TRANSMISSION;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          return a.transmissionFactor !== void 0 && (e.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(e, "transmissionMap", a.transmissionTexture)), Promise.all(s);
        }
      }
      class Z0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_VOLUME;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          e.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(e, "thicknessMap", a.thicknessTexture)), e.attenuationDistance = a.attenuationDistance || 1 / 0;
          const o = a.attenuationColor || [
            1,
            1,
            1
          ];
          return e.attenuationColor = new At().setRGB(o[0], o[1], o[2], ke), Promise.all(s);
        }
      }
      class Q0 {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_IOR;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const i = this.parser.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = i.extensions[this.name];
          return e.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
        }
      }
      class tx {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_SPECULAR;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          e.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(e, "specularIntensityMap", a.specularTexture));
          const o = a.specularColorFactor || [
            1,
            1,
            1
          ];
          return e.specularColor = new At().setRGB(o[0], o[1], o[2], ke), a.specularColorTexture !== void 0 && s.push(n.assignTexture(e, "specularColorMap", a.specularColorTexture, Se)), Promise.all(s);
        }
      }
      class ex {
        constructor(t) {
          this.parser = t, this.name = Qt.EXT_MATERIALS_BUMP;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          return e.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(e, "bumpMap", a.bumpTexture)), Promise.all(s);
        }
      }
      class nx {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_MATERIALS_ANISOTROPY;
        }
        getMaterialType(t) {
          const n = this.parser.json.materials[t];
          return !n.extensions || !n.extensions[this.name] ? null : bi;
        }
        extendMaterialParams(t, e) {
          const n = this.parser, i = n.json.materials[t];
          if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
          const s = [], a = i.extensions[this.name];
          return a.anisotropyStrength !== void 0 && (e.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (e.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(e, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
        }
      }
      class ix {
        constructor(t) {
          this.parser = t, this.name = Qt.KHR_TEXTURE_BASISU;
        }
        loadTexture(t) {
          const e = this.parser, n = e.json, i = n.textures[t];
          if (!i.extensions || !i.extensions[this.name]) return null;
          const s = i.extensions[this.name], a = e.options.ktx2Loader;
          if (!a) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null;
          }
          return e.loadTextureImage(t, s.source, a);
        }
      }
      class rx {
        constructor(t) {
          this.parser = t, this.name = Qt.EXT_TEXTURE_WEBP, this.isSupported = null;
        }
        loadTexture(t) {
          const e = this.name, n = this.parser, i = n.json, s = i.textures[t];
          if (!s.extensions || !s.extensions[e]) return null;
          const a = s.extensions[e], o = i.images[a.source];
          let c = n.textureLoader;
          if (o.uri) {
            const l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l);
          }
          return this.detectSupport().then(function(l) {
            if (l) return n.loadTextureImage(t, a.source, c);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(t);
          });
        }
        detectSupport() {
          return this.isSupported || (this.isSupported = new Promise(function(t) {
            const e = new Image();
            e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
              t(e.height === 1);
            };
          })), this.isSupported;
        }
      }
      class sx {
        constructor(t) {
          this.parser = t, this.name = Qt.EXT_TEXTURE_AVIF, this.isSupported = null;
        }
        loadTexture(t) {
          const e = this.name, n = this.parser, i = n.json, s = i.textures[t];
          if (!s.extensions || !s.extensions[e]) return null;
          const a = s.extensions[e], o = i.images[a.source];
          let c = n.textureLoader;
          if (o.uri) {
            const l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l);
          }
          return this.detectSupport().then(function(l) {
            if (l) return n.loadTextureImage(t, a.source, c);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            return n.loadTexture(t);
          });
        }
        detectSupport() {
          return this.isSupported || (this.isSupported = new Promise(function(t) {
            const e = new Image();
            e.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", e.onload = e.onerror = function() {
              t(e.height === 1);
            };
          })), this.isSupported;
        }
      }
      class ax {
        constructor(t) {
          this.name = Qt.EXT_MESHOPT_COMPRESSION, this.parser = t;
        }
        loadBufferView(t) {
          const e = this.parser.json, n = e.bufferViews[t];
          if (n.extensions && n.extensions[this.name]) {
            const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
            if (!a || !a.supported) {
              if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
              return null;
            }
            return s.then(function(o) {
              const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, c, l);
              return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
                return p.buffer;
              }) : a.ready.then(function() {
                const p = new ArrayBuffer(h * u);
                return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
              });
            });
          } else return null;
        }
      }
      class ox {
        constructor(t) {
          this.name = Qt.EXT_MESH_GPU_INSTANCING, this.parser = t;
        }
        createNodeMesh(t) {
          const e = this.parser.json, n = e.nodes[t];
          if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
          const i = e.meshes[n.mesh];
          for (const l of i.primitives) if (l.mode !== Sn.TRIANGLES && l.mode !== Sn.TRIANGLE_STRIP && l.mode !== Sn.TRIANGLE_FAN && l.mode !== void 0) return null;
          const a = n.extensions[this.name].attributes, o = [], c = {};
          for (const l in a) o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
          return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(t)), Promise.all(o).then((l) => {
            const h = l.pop(), u = h.isGroup ? h.children : [
              h
            ], d = l[0].count, p = [];
            for (const _ of u) {
              const w = new Bt(), m = new C(), f = new vn(), b = new C(1, 1, 1), v = new a0(_.geometry, _.material, d);
              for (let R = 0; R < d; R++) c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, R), c.ROTATION && f.fromBufferAttribute(c.ROTATION, R), c.SCALE && b.fromBufferAttribute(c.SCALE, R), v.setMatrixAt(R, w.compose(m, f, b));
              for (const R in c) if (R === "_COLOR_0") {
                const I = c[R];
                v.instanceColor = new ll(I.array, I.itemSize, I.normalized);
              } else R !== "TRANSLATION" && R !== "ROTATION" && R !== "SCALE" && _.geometry.setAttribute(R, c[R]);
              be.prototype.copy.call(v, _), this.parser.assignFinalMaterial(v), p.push(v);
            }
            return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
          }));
        }
      }
      const Nf = "glTF", Ls = 12, ud = {
        JSON: 1313821514,
        BIN: 5130562
      };
      class cx {
        constructor(t) {
          this.name = Qt.KHR_BINARY_GLTF, this.content = null, this.body = null;
          const e = new DataView(t, 0, Ls), n = new TextDecoder();
          if (this.header = {
            magic: n.decode(new Uint8Array(t.slice(0, 4))),
            version: e.getUint32(4, true),
            length: e.getUint32(8, true)
          }, this.header.magic !== Nf) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          const i = this.header.length - Ls, s = new DataView(t, Ls);
          let a = 0;
          for (; a < i; ) {
            const o = s.getUint32(a, true);
            a += 4;
            const c = s.getUint32(a, true);
            if (a += 4, c === ud.JSON) {
              const l = new Uint8Array(t, Ls + a, o);
              this.content = n.decode(l);
            } else if (c === ud.BIN) {
              const l = Ls + a;
              this.body = t.slice(l, l + o);
            }
            a += o;
          }
          if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class lx {
        constructor(t, e) {
          if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          this.name = Qt.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload();
        }
        decodePrimitive(t, e) {
          const n = this.json, i = this.dracoLoader, s = t.extensions[this.name].bufferView, a = t.extensions[this.name].attributes, o = {}, c = {}, l = {};
          for (const h in a) {
            const u = fl[h] || h.toLowerCase();
            o[u] = a[h];
          }
          for (const h in t.attributes) {
            const u = fl[h] || h.toLowerCase();
            if (a[h] !== void 0) {
              const d = n.accessors[t.attributes[h]], p = Qr[d.componentType];
              l[u] = p.name, c[u] = d.normalized === true;
            }
          }
          return e.getDependency("bufferView", s).then(function(h) {
            return new Promise(function(u, d) {
              i.decodeDracoFile(h, function(p) {
                for (const _ in p.attributes) {
                  const w = p.attributes[_], m = c[_];
                  m !== void 0 && (w.normalized = m);
                }
                u(p);
              }, o, l, ke, d);
            });
          });
        }
      }
      class hx {
        constructor() {
          this.name = Qt.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(t, e) {
          return (e.texCoord === void 0 || e.texCoord === t.channel) && e.offset === void 0 && e.rotation === void 0 && e.scale === void 0 || (t = t.clone(), e.texCoord !== void 0 && (t.channel = e.texCoord), e.offset !== void 0 && t.offset.fromArray(e.offset), e.rotation !== void 0 && (t.rotation = e.rotation), e.scale !== void 0 && t.repeat.fromArray(e.scale), t.needsUpdate = true), t;
        }
      }
      class ux {
        constructor() {
          this.name = Qt.KHR_MESH_QUANTIZATION;
        }
      }
      class Ff extends Qs {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        copySampleValue_(t) {
          const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = t * i * 3 + i;
          for (let a = 0; a !== i; a++) e[a] = n[s + a];
          return e;
        }
        interpolate_(t, e, n, i) {
          const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - e, u = (n - e) / h, d = u * u, p = d * u, _ = t * l, w = _ - l, m = -2 * p + 3 * d, f = p - d, b = 1 - m, v = f - d + u;
          for (let R = 0; R !== o; R++) {
            const I = a[w + R + o], y = a[w + R + c] * h, A = a[_ + R + o], B = a[_ + R] * h;
            s[R] = b * I + v * y + m * A + f * B;
          }
          return s;
        }
      }
      const dx = new vn();
      class fx extends Ff {
        interpolate_(t, e, n, i) {
          const s = super.interpolate_(t, e, n, i);
          return dx.fromArray(s).normalize().toArray(s), s;
        }
      }
      const Sn = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
      }, Qr = {
        5120: Int8Array,
        5121: Uint8Array,
        5122: Int16Array,
        5123: Uint16Array,
        5125: Uint32Array,
        5126: Float32Array
      }, dd = {
        9728: ze,
        9729: on,
        9984: il,
        9985: Xd,
        9986: Ja,
        9987: vr
      }, fd = {
        33071: ln,
        33648: io,
        10497: is
      }, Cc = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      }, fl = {
        POSITION: "position",
        NORMAL: "normal",
        TANGENT: "tangent",
        TEXCOORD_0: "uv",
        TEXCOORD_1: "uv1",
        TEXCOORD_2: "uv2",
        TEXCOORD_3: "uv3",
        COLOR_0: "color",
        WEIGHTS_0: "skinWeight",
        JOINTS_0: "skinIndex"
      }, Pi = {
        scale: "scale",
        translation: "position",
        rotation: "quaternion",
        weights: "morphTargetInfluences"
      }, px = {
        CUBICSPLINE: void 0,
        LINEAR: as,
        STEP: Vs
      }, Pc = {
        OPAQUE: "OPAQUE",
        MASK: "MASK",
        BLEND: "BLEND"
      };
      function mx(r) {
        return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new gs({
          color: 16777215,
          emissive: 0,
          metalness: 1,
          roughness: 1,
          transparent: false,
          depthTest: true,
          side: xi
        })), r.DefaultMaterial;
      }
      function er(r, t, e) {
        for (const n in e.extensions) r[n] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = e.extensions[n]);
      }
      function Oi(r, t) {
        t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(r.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
      }
      function _x(r, t, e) {
        let n = false, i = false, s = false;
        for (let l = 0, h = t.length; l < h; l++) {
          const u = t[l];
          if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (s = true), n && i && s) break;
        }
        if (!n && !i && !s) return Promise.resolve(r);
        const a = [], o = [], c = [];
        for (let l = 0, h = t.length; l < h; l++) {
          const u = t[l];
          if (n) {
            const d = u.POSITION !== void 0 ? e.getDependency("accessor", u.POSITION) : r.attributes.position;
            a.push(d);
          }
          if (i) {
            const d = u.NORMAL !== void 0 ? e.getDependency("accessor", u.NORMAL) : r.attributes.normal;
            o.push(d);
          }
          if (s) {
            const d = u.COLOR_0 !== void 0 ? e.getDependency("accessor", u.COLOR_0) : r.attributes.color;
            c.push(d);
          }
        }
        return Promise.all([
          Promise.all(a),
          Promise.all(o),
          Promise.all(c)
        ]).then(function(l) {
          const h = l[0], u = l[1], d = l[2];
          return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = true, r;
        });
      }
      function gx(r, t) {
        if (r.updateMorphTargets(), t.weights !== void 0) for (let e = 0, n = t.weights.length; e < n; e++) r.morphTargetInfluences[e] = t.weights[e];
        if (t.extras && Array.isArray(t.extras.targetNames)) {
          const e = t.extras.targetNames;
          if (r.morphTargetInfluences.length === e.length) {
            r.morphTargetDictionary = {};
            for (let n = 0, i = e.length; n < i; n++) r.morphTargetDictionary[e[n]] = n;
          } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
        }
      }
      function wx(r) {
        let t;
        const e = r.extensions && r.extensions[Qt.KHR_DRACO_MESH_COMPRESSION];
        if (e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Lc(e.attributes) : t = r.indices + ":" + Lc(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, i = r.targets.length; n < i; n++) t += ":" + Lc(r.targets[n]);
        return t;
      }
      function Lc(r) {
        let t = "";
        const e = Object.keys(r).sort();
        for (let n = 0, i = e.length; n < i; n++) t += e[n] + ":" + r[e[n]] + ";";
        return t;
      }
      function pl(r) {
        switch (r) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
        }
      }
      function vx(r) {
        return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
      }
      const yx = new Bt();
      class xx {
        constructor(t = {}, e = {}) {
          this.json = t, this.extensions = {}, this.plugins = {}, this.options = e, this.cache = new W0(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
            refs: {},
            uses: {}
          }, this.cameraCache = {
            refs: {},
            uses: {}
          }, this.lightCache = {
            refs: {},
            uses: {}
          }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
          let n = false, i = false, s = -1;
          typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Df(this.options.manager) : this.textureLoader = new L0(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new If(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
        }
        setExtensions(t) {
          this.extensions = t;
        }
        setPlugins(t) {
          this.plugins = t;
        }
        parse(t, e) {
          const n = this, i = this.json, s = this.extensions;
          this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
            return a._markDefs && a._markDefs();
          }), Promise.all(this._invokeAll(function(a) {
            return a.beforeRoot && a.beforeRoot();
          })).then(function() {
            return Promise.all([
              n.getDependencies("scene"),
              n.getDependencies("animation"),
              n.getDependencies("camera")
            ]);
          }).then(function(a) {
            const o = {
              scene: a[0][i.scene || 0],
              scenes: a[0],
              animations: a[1],
              cameras: a[2],
              asset: i.asset,
              parser: n,
              userData: {}
            };
            return er(s, o, i), Oi(o, i), Promise.all(n._invokeAll(function(c) {
              return c.afterRoot && c.afterRoot(o);
            })).then(function() {
              t(o);
            });
          }).catch(e);
        }
        _markDefs() {
          const t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [];
          for (let i = 0, s = e.length; i < s; i++) {
            const a = e[i].joints;
            for (let o = 0, c = a.length; o < c; o++) t[a[o]].isBone = true;
          }
          for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i];
            a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = true)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
          }
        }
        _addNodeRef(t, e) {
          e !== void 0 && (t.refs[e] === void 0 && (t.refs[e] = t.uses[e] = 0), t.refs[e]++);
        }
        _getNodeRef(t, e, n) {
          if (t.refs[e] <= 1) return n;
          const i = n.clone(), s = (a, o) => {
            const c = this.associations.get(a);
            c != null && this.associations.set(o, c);
            for (const [l, h] of a.children.entries()) s(h, o.children[l]);
          };
          return s(n, i), i.name += "_instance_" + t.uses[e]++, i;
        }
        _invokeOne(t) {
          const e = Object.values(this.plugins);
          e.push(this);
          for (let n = 0; n < e.length; n++) {
            const i = t(e[n]);
            if (i) return i;
          }
          return null;
        }
        _invokeAll(t) {
          const e = Object.values(this.plugins);
          e.unshift(this);
          const n = [];
          for (let i = 0; i < e.length; i++) {
            const s = t(e[i]);
            s && n.push(s);
          }
          return n;
        }
        getDependency(t, e) {
          const n = t + ":" + e;
          let i = this.cache.get(n);
          if (!i) {
            switch (t) {
              case "scene":
                i = this.loadScene(e);
                break;
              case "node":
                i = this._invokeOne(function(s) {
                  return s.loadNode && s.loadNode(e);
                });
                break;
              case "mesh":
                i = this._invokeOne(function(s) {
                  return s.loadMesh && s.loadMesh(e);
                });
                break;
              case "accessor":
                i = this.loadAccessor(e);
                break;
              case "bufferView":
                i = this._invokeOne(function(s) {
                  return s.loadBufferView && s.loadBufferView(e);
                });
                break;
              case "buffer":
                i = this.loadBuffer(e);
                break;
              case "material":
                i = this._invokeOne(function(s) {
                  return s.loadMaterial && s.loadMaterial(e);
                });
                break;
              case "texture":
                i = this._invokeOne(function(s) {
                  return s.loadTexture && s.loadTexture(e);
                });
                break;
              case "skin":
                i = this.loadSkin(e);
                break;
              case "animation":
                i = this._invokeOne(function(s) {
                  return s.loadAnimation && s.loadAnimation(e);
                });
                break;
              case "camera":
                i = this.loadCamera(e);
                break;
              default:
                if (i = this._invokeOne(function(s) {
                  return s != this && s.getDependency && s.getDependency(t, e);
                }), !i) throw new Error("Unknown type: " + t);
                break;
            }
            this.cache.add(n, i);
          }
          return i;
        }
        getDependencies(t) {
          let e = this.cache.get(t);
          if (!e) {
            const n = this, i = this.json[t + (t === "mesh" ? "es" : "s")] || [];
            e = Promise.all(i.map(function(s, a) {
              return n.getDependency(t, a);
            })), this.cache.add(t, e);
          }
          return e;
        }
        loadBuffer(t) {
          const e = this.json.buffers[t], n = this.fileLoader;
          if (e.type && e.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
          if (e.uri === void 0 && t === 0) return Promise.resolve(this.extensions[Qt.KHR_BINARY_GLTF].body);
          const i = this.options;
          return new Promise(function(s, a) {
            n.load(Hs.resolveURL(e.uri, i.path), s, void 0, function() {
              a(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'));
            });
          });
        }
        loadBufferView(t) {
          const e = this.json.bufferViews[t];
          return this.getDependency("buffer", e.buffer).then(function(n) {
            const i = e.byteLength || 0, s = e.byteOffset || 0;
            return n.slice(s, s + i);
          });
        }
        loadAccessor(t) {
          const e = this, n = this.json, i = this.json.accessors[t];
          if (i.bufferView === void 0 && i.sparse === void 0) {
            const a = Cc[i.type], o = Qr[i.componentType], c = i.normalized === true, l = new o(i.count * a);
            return Promise.resolve(new rn(l, a, c));
          }
          const s = [];
          return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
            const o = a[0], c = Cc[i.type], l = Qr[i.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, _ = i.normalized === true;
            let w, m;
            if (p && p !== u) {
              const f = Math.floor(d / p), b = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
              let v = e.cache.get(b);
              v || (w = new l(o, f * p, i.count * p / h), v = new Tf(w, p / h), e.cache.add(b, v)), m = new wi(v, c, d % p / h, _);
            } else o === null ? w = new l(i.count * c) : w = new l(o, d, i.count * c), m = new rn(w, c, _);
            if (i.sparse !== void 0) {
              const f = Cc.SCALAR, b = Qr[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, R = i.sparse.values.byteOffset || 0, I = new b(a[1], v, i.sparse.count * f), y = new l(a[2], R, i.sparse.count * c);
              o !== null && (m = new rn(m.array.slice(), m.itemSize, m.normalized));
              for (let A = 0, B = I.length; A < B; A++) {
                const S = I[A];
                if (m.setX(S, y[A * c]), c >= 2 && m.setY(S, y[A * c + 1]), c >= 3 && m.setZ(S, y[A * c + 2]), c >= 4 && m.setW(S, y[A * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
              }
            }
            return m;
          });
        }
        loadTexture(t) {
          const e = this.json, n = this.options, s = e.textures[t].source, a = e.images[s];
          let o = this.textureLoader;
          if (a.uri) {
            const c = n.manager.getHandler(a.uri);
            c !== null && (o = c);
          }
          return this.loadTextureImage(t, s, o);
        }
        loadTextureImage(t, e, n) {
          const i = this, s = this.json, a = s.textures[t], o = s.images[e], c = (o.uri || o.bufferView) + ":" + a.sampler;
          if (this.textureCache[c]) return this.textureCache[c];
          const l = this.loadImageSource(e, n).then(function(h) {
            h.flipY = false, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (h.name = o.uri);
            const d = (s.samplers || {})[a.sampler] || {};
            return h.magFilter = dd[d.magFilter] || on, h.minFilter = dd[d.minFilter] || vr, h.wrapS = fd[d.wrapS] || is, h.wrapT = fd[d.wrapT] || is, i.associations.set(h, {
              textures: t
            }), h;
          }).catch(function() {
            return null;
          });
          return this.textureCache[c] = l, l;
        }
        loadImageSource(t, e) {
          const n = this, i = this.json, s = this.options;
          if (this.sourceCache[t] !== void 0) return this.sourceCache[t].then((u) => u.clone());
          const a = i.images[t], o = self.URL || self.webkitURL;
          let c = a.uri || "", l = false;
          if (a.bufferView !== void 0) c = n.getDependency("bufferView", a.bufferView).then(function(u) {
            l = true;
            const d = new Blob([
              u
            ], {
              type: a.mimeType
            });
            return c = o.createObjectURL(d), c;
          });
          else if (a.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + t + " is missing URI and bufferView");
          const h = Promise.resolve(c).then(function(u) {
            return new Promise(function(d, p) {
              let _ = d;
              e.isImageBitmapLoader === true && (_ = function(w) {
                const m = new He(w);
                m.needsUpdate = true, d(m);
              }), e.load(Hs.resolveURL(u, s.path), _, void 0, p);
            });
          }).then(function(u) {
            return l === true && o.revokeObjectURL(c), u.userData.mimeType = a.mimeType || vx(a.uri), u;
          }).catch(function(u) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
          });
          return this.sourceCache[t] = h, h;
        }
        assignTexture(t, e, n, i) {
          const s = this;
          return this.getDependency("texture", n.index).then(function(a) {
            if (!a) return null;
            if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[Qt.KHR_TEXTURE_TRANSFORM]) {
              const o = n.extensions !== void 0 ? n.extensions[Qt.KHR_TEXTURE_TRANSFORM] : void 0;
              if (o) {
                const c = s.associations.get(a);
                a = s.extensions[Qt.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, c);
              }
            }
            return i !== void 0 && (a.colorSpace = i), t[e] = a, a;
          });
        }
        assignFinalMaterial(t) {
          const e = t.geometry;
          let n = t.material;
          const i = e.attributes.tangent === void 0, s = e.attributes.color !== void 0, a = e.attributes.normal === void 0;
          if (t.isPoints) {
            const o = "PointsMaterial:" + n.uuid;
            let c = this.cache.get(o);
            c || (c = new Cf(), Kn.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = false, this.cache.add(o, c)), n = c;
          } else if (t.isLine) {
            const o = "LineBasicMaterial:" + n.uuid;
            let c = this.cache.get(o);
            c || (c = new Fl(), Kn.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
          }
          if (i || s || a) {
            let o = "ClonedMaterial:" + n.uuid + ":";
            i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
            let c = this.cache.get(o);
            c || (c = n.clone(), s && (c.vertexColors = true), a && (c.flatShading = true), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
          }
          t.material = n;
        }
        getMaterialType() {
          return gs;
        }
        loadMaterial(t) {
          const e = this, n = this.json, i = this.extensions, s = n.materials[t];
          let a;
          const o = {}, c = s.extensions || {}, l = [];
          if (c[Qt.KHR_MATERIALS_UNLIT]) {
            const u = i[Qt.KHR_MATERIALS_UNLIT];
            a = u.getMaterialType(), l.push(u.extendParams(o, s, e));
          } else {
            const u = s.pbrMetallicRoughness || {};
            if (o.color = new At(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
              const d = u.baseColorFactor;
              o.color.setRGB(d[0], d[1], d[2], ke), o.opacity = d[3];
            }
            u.baseColorTexture !== void 0 && l.push(e.assignTexture(o, "map", u.baseColorTexture, Se)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(e.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), l.push(e.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
              return d.getMaterialType && d.getMaterialType(t);
            }), l.push(Promise.all(this._invokeAll(function(d) {
              return d.extendMaterialParams && d.extendMaterialParams(t, o);
            })));
          }
          s.doubleSided === true && (o.side = On);
          const h = s.alphaMode || Pc.OPAQUE;
          if (h === Pc.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, h === Pc.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Bn && (l.push(e.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Ot(1, 1), s.normalTexture.scale !== void 0)) {
            const u = s.normalTexture.scale;
            o.normalScale.set(u, u);
          }
          if (s.occlusionTexture !== void 0 && a !== Bn && (l.push(e.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Bn) {
            const u = s.emissiveFactor;
            o.emissive = new At().setRGB(u[0], u[1], u[2], ke);
          }
          return s.emissiveTexture !== void 0 && a !== Bn && l.push(e.assignTexture(o, "emissiveMap", s.emissiveTexture, Se)), Promise.all(l).then(function() {
            const u = new a(o);
            return s.name && (u.name = s.name), Oi(u, s), e.associations.set(u, {
              materials: t
            }), s.extensions && er(i, u, s), u;
          });
        }
        createUniqueName(t) {
          const e = oe.sanitizeNodeName(t || "");
          return e in this.nodeNamesUsed ? e + "_" + ++this.nodeNamesUsed[e] : (this.nodeNamesUsed[e] = 0, e);
        }
        loadGeometries(t) {
          const e = this, n = this.extensions, i = this.primitiveCache;
          function s(o) {
            return n[Qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, e).then(function(c) {
              return pd(c, o, e);
            });
          }
          const a = [];
          for (let o = 0, c = t.length; o < c; o++) {
            const l = t[o], h = wx(l), u = i[h];
            if (u) a.push(u.promise);
            else {
              let d;
              l.extensions && l.extensions[Qt.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = pd(new sn(), l, e), i[h] = {
                primitive: l,
                promise: d
              }, a.push(d);
            }
          }
          return Promise.all(a);
        }
        loadMesh(t) {
          const e = this, n = this.json, i = this.extensions, s = n.meshes[t], a = s.primitives, o = [];
          for (let c = 0, l = a.length; c < l; c++) {
            const h = a[c].material === void 0 ? mx(this.cache) : this.getDependency("material", a[c].material);
            o.push(h);
          }
          return o.push(e.loadGeometries(a)), Promise.all(o).then(function(c) {
            const l = c.slice(0, c.length - 1), h = c[c.length - 1], u = [];
            for (let p = 0, _ = h.length; p < _; p++) {
              const w = h[p], m = a[p];
              let f;
              const b = l[p];
              if (m.mode === Sn.TRIANGLES || m.mode === Sn.TRIANGLE_STRIP || m.mode === Sn.TRIANGLE_FAN || m.mode === void 0) f = s.isSkinnedMesh === true ? new n0(w, b) : new Re(w, b), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Sn.TRIANGLE_STRIP ? f.geometry = hd(f.geometry, tf) : m.mode === Sn.TRIANGLE_FAN && (f.geometry = hd(f.geometry, rl));
              else if (m.mode === Sn.LINES) f = new Rf(w, b);
              else if (m.mode === Sn.LINE_STRIP) f = new Ol(w, b);
              else if (m.mode === Sn.LINE_LOOP) f = new o0(w, b);
              else if (m.mode === Sn.POINTS) f = new c0(w, b);
              else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
              Object.keys(f.geometry.morphAttributes).length > 0 && gx(f, s), f.name = e.createUniqueName(s.name || "mesh_" + t), Oi(f, s), m.extensions && er(i, f, m), e.assignFinalMaterial(f), u.push(f);
            }
            for (let p = 0, _ = u.length; p < _; p++) e.associations.set(u[p], {
              meshes: t,
              primitives: p
            });
            if (u.length === 1) return s.extensions && er(i, u[0], s), u[0];
            const d = new ur();
            s.extensions && er(i, d, s), e.associations.set(d, {
              meshes: t
            });
            for (let p = 0, _ = u.length; p < _; p++) d.add(u[p]);
            return d;
          });
        }
        loadCamera(t) {
          let e;
          const n = this.json.cameras[t], i = n[n.type];
          if (!i) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
          }
          return n.type === "perspective" ? e = new nn(sf.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (e = new Ro(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (e.name = this.createUniqueName(n.name)), Oi(e, n), Promise.resolve(e);
        }
        loadSkin(t) {
          const e = this.json.skins[t], n = [];
          for (let i = 0, s = e.joints.length; i < s; i++) n.push(this._loadNodeShallow(e.joints[i]));
          return e.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", e.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
            const s = i.pop(), a = i, o = [], c = [];
            for (let l = 0, h = a.length; l < h; l++) {
              const u = a[l];
              if (u) {
                o.push(u);
                const d = new Bt();
                s !== null && d.fromArray(s.array, l * 16), c.push(d);
              } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[l]);
            }
            return new Nl(o, c);
          });
        }
        loadAnimation(t) {
          const e = this.json, n = this, i = e.animations[t], s = i.name ? i.name : "animation_" + t, a = [], o = [], c = [], l = [], h = [];
          for (let u = 0, d = i.channels.length; u < d; u++) {
            const p = i.channels[u], _ = i.samplers[p.sampler], w = p.target, m = w.node, f = i.parameters !== void 0 ? i.parameters[_.input] : _.input, b = i.parameters !== void 0 ? i.parameters[_.output] : _.output;
            w.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), c.push(this.getDependency("accessor", b)), l.push(_), h.push(w));
          }
          return Promise.all([
            Promise.all(a),
            Promise.all(o),
            Promise.all(c),
            Promise.all(l),
            Promise.all(h)
          ]).then(function(u) {
            const d = u[0], p = u[1], _ = u[2], w = u[3], m = u[4], f = [];
            for (let b = 0, v = d.length; b < v; b++) {
              const R = d[b], I = p[b], y = _[b], A = w[b], B = m[b];
              if (R === void 0) continue;
              R.updateMatrix && R.updateMatrix();
              const S = n._createAnimationTracks(R, I, y, A, B);
              if (S) for (let T = 0; T < S.length; T++) f.push(S[T]);
            }
            return new w0(s, void 0, f);
          });
        }
        createNodeMesh(t) {
          const e = this.json, n = this, i = e.nodes[t];
          return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
            const a = n._getNodeRef(n.meshCache, i.mesh, s);
            return i.weights !== void 0 && a.traverse(function(o) {
              if (o.isMesh) for (let c = 0, l = i.weights.length; c < l; c++) o.morphTargetInfluences[c] = i.weights[c];
            }), a;
          });
        }
        loadNode(t) {
          const e = this.json, n = this, i = e.nodes[t], s = n._loadNodeShallow(t), a = [], o = i.children || [];
          for (let l = 0, h = o.length; l < h; l++) a.push(n.getDependency("node", o[l]));
          const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
          return Promise.all([
            s,
            Promise.all(a),
            c
          ]).then(function(l) {
            const h = l[0], u = l[1], d = l[2];
            d !== null && h.traverse(function(p) {
              p.isSkinnedMesh && p.bind(d, yx);
            });
            for (let p = 0, _ = u.length; p < _; p++) h.add(u[p]);
            return h;
          });
        }
        _loadNodeShallow(t) {
          const e = this.json, n = this.extensions, i = this;
          if (this.nodeCache[t] !== void 0) return this.nodeCache[t];
          const s = e.nodes[t], a = s.name ? i.createUniqueName(s.name) : "", o = [], c = i._invokeOne(function(l) {
            return l.createNodeMesh && l.createNodeMesh(t);
          });
          return c && o.push(c), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
            return i._getNodeRef(i.cameraCache, s.camera, l);
          })), i._invokeAll(function(l) {
            return l.createNodeAttachment && l.createNodeAttachment(t);
          }).forEach(function(l) {
            o.push(l);
          }), this.nodeCache[t] = Promise.all(o).then(function(l) {
            let h;
            if (s.isBone === true ? h = new Af() : l.length > 1 ? h = new ur() : l.length === 1 ? h = l[0] : h = new be(), h !== l[0]) for (let u = 0, d = l.length; u < d; u++) h.add(l[u]);
            if (s.name && (h.userData.name = s.name, h.name = a), Oi(h, s), s.extensions && er(n, h, s), s.matrix !== void 0) {
              const u = new Bt();
              u.fromArray(s.matrix), h.applyMatrix4(u);
            } else s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
            return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = t, h;
          }), this.nodeCache[t];
        }
        loadScene(t) {
          const e = this.extensions, n = this.json.scenes[t], i = this, s = new ur();
          n.name && (s.name = i.createUniqueName(n.name)), Oi(s, n), n.extensions && er(e, s, n);
          const a = n.nodes || [], o = [];
          for (let c = 0, l = a.length; c < l; c++) o.push(i.getDependency("node", a[c]));
          return Promise.all(o).then(function(c) {
            for (let h = 0, u = c.length; h < u; h++) s.add(c[h]);
            const l = (h) => {
              const u = /* @__PURE__ */ new Map();
              for (const [d, p] of i.associations) (d instanceof Kn || d instanceof He) && u.set(d, p);
              return h.traverse((d) => {
                const p = i.associations.get(d);
                p != null && u.set(d, p);
              }), u;
            };
            return i.associations = l(s), s;
          });
        }
        _createAnimationTracks(t, e, n, i, s) {
          const a = [], o = t.name ? t.name : t.uuid, c = [];
          Pi[s.path] === Pi.weights ? t.traverse(function(d) {
            d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
          }) : c.push(o);
          let l;
          switch (Pi[s.path]) {
            case Pi.weights:
              l = ls;
              break;
            case Pi.rotation:
              l = yr;
              break;
            case Pi.position:
            case Pi.scale:
              l = hs;
              break;
            default:
              switch (n.itemSize) {
                case 1:
                  l = ls;
                  break;
                case 2:
                case 3:
                default:
                  l = hs;
                  break;
              }
              break;
          }
          const h = i.interpolation !== void 0 ? px[i.interpolation] : as, u = this._getArrayFromAccessor(n);
          for (let d = 0, p = c.length; d < p; d++) {
            const _ = new l(c[d] + "." + Pi[s.path], e.array, u, h);
            i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(_), a.push(_);
          }
          return a;
        }
        _getArrayFromAccessor(t) {
          let e = t.array;
          if (t.normalized) {
            const n = pl(e.constructor), i = new Float32Array(e.length);
            for (let s = 0, a = e.length; s < a; s++) i[s] = e[s] * n;
            e = i;
          }
          return e;
        }
        _createCubicSplineTrackInterpolant(t) {
          t.createInterpolant = function(n) {
            const i = this instanceof yr ? fx : Ff;
            return new i(this.times, this.values, this.getValueSize() / 3, n);
          }, t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
        }
      }
      function Sx(r, t, e) {
        const n = t.attributes, i = new Rn();
        if (n.POSITION !== void 0) {
          const o = e.json.accessors[n.POSITION], c = o.min, l = o.max;
          if (c !== void 0 && l !== void 0) {
            if (i.set(new C(c[0], c[1], c[2]), new C(l[0], l[1], l[2])), o.normalized) {
              const h = pl(Qr[o.componentType]);
              i.min.multiplyScalar(h), i.max.multiplyScalar(h);
            }
          } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
          }
        } else return;
        const s = t.targets;
        if (s !== void 0) {
          const o = new C(), c = new C();
          for (let l = 0, h = s.length; l < h; l++) {
            const u = s[l];
            if (u.POSITION !== void 0) {
              const d = e.json.accessors[u.POSITION], p = d.min, _ = d.max;
              if (p !== void 0 && _ !== void 0) {
                if (c.setX(Math.max(Math.abs(p[0]), Math.abs(_[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(_[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(_[2]))), d.normalized) {
                  const w = pl(Qr[d.componentType]);
                  c.multiplyScalar(w);
                }
                o.max(c);
              } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
          }
          i.expandByVector(o);
        }
        r.boundingBox = i;
        const a = new Cn();
        i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
      }
      function pd(r, t, e) {
        const n = t.attributes, i = [];
        function s(a, o) {
          return e.getDependency("accessor", a).then(function(c) {
            r.setAttribute(o, c);
          });
        }
        for (const a in n) {
          const o = fl[a] || a.toLowerCase();
          o in r.attributes || i.push(s(n[a], o));
        }
        if (t.indices !== void 0 && !r.index) {
          const a = e.getDependency("accessor", t.indices).then(function(o) {
            r.setIndex(o);
          });
          i.push(a);
        }
        return ie.workingColorSpace !== ke && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`), Oi(r, t), Sx(r, t, e), Promise.all(i).then(function() {
          return t.targets !== void 0 ? _x(r, t.targets, e) : r;
        });
      }
      const md = new Rn(), Ba = new C();
      class Of extends P0 {
        constructor() {
          super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
          const t = [
            -1,
            2,
            0,
            1,
            2,
            0,
            -1,
            1,
            0,
            1,
            1,
            0,
            -1,
            0,
            0,
            1,
            0,
            0,
            -1,
            -1,
            0,
            1,
            -1,
            0
          ], e = [
            -1,
            2,
            1,
            2,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -2,
            1,
            -2
          ], n = [
            0,
            2,
            1,
            2,
            3,
            1,
            2,
            4,
            3,
            4,
            5,
            3,
            4,
            6,
            5,
            6,
            7,
            5
          ];
          this.setIndex(n), this.setAttribute("position", new Ge(t, 3)), this.setAttribute("uv", new Ge(e, 2));
        }
        applyMatrix4(t) {
          const e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
          return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        setPositions(t) {
          let e;
          t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
          const n = new dl(e, 6, 1);
          return this.setAttribute("instanceStart", new wi(n, 3, 0)), this.setAttribute("instanceEnd", new wi(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
        }
        setColors(t) {
          let e;
          t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
          const n = new dl(e, 6, 1);
          return this.setAttribute("instanceColorStart", new wi(n, 3, 0)), this.setAttribute("instanceColorEnd", new wi(n, 3, 3)), this;
        }
        fromWireframeGeometry(t) {
          return this.setPositions(t.attributes.position.array), this;
        }
        fromEdgesGeometry(t) {
          return this.setPositions(t.attributes.position.array), this;
        }
        fromMesh(t) {
          return this.fromWireframeGeometry(new u0(t.geometry)), this;
        }
        fromLineSegments(t) {
          const e = t.geometry;
          return this.setPositions(e.attributes.position.array), this;
        }
        computeBoundingBox() {
          this.boundingBox === null && (this.boundingBox = new Rn());
          const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
          t !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(t), md.setFromBufferAttribute(e), this.boundingBox.union(md));
        }
        computeBoundingSphere() {
          this.boundingSphere === null && (this.boundingSphere = new Cn()), this.boundingBox === null && this.computeBoundingBox();
          const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
          if (t !== void 0 && e !== void 0) {
            const n = this.boundingSphere.center;
            this.boundingBox.getCenter(n);
            let i = 0;
            for (let s = 0, a = t.count; s < a; s++) Ba.fromBufferAttribute(t, s), i = Math.max(i, n.distanceToSquared(Ba)), Ba.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Ba));
            this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
          }
        }
        toJSON() {
        }
        applyMatrix(t) {
          return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
        }
      }
      st.line = {
        worldUnits: {
          value: 1
        },
        linewidth: {
          value: 1
        },
        resolution: {
          value: new Ot(1, 1)
        },
        dashOffset: {
          value: 0
        },
        dashScale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        gapSize: {
          value: 1
        }
      };
      cn.line = {
        uniforms: Ao.merge([
          st.common,
          st.fog,
          st.line
        ]),
        vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
        fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
      };
      class Gs extends Jn {
        constructor(t) {
          super({
            type: "LineMaterial",
            uniforms: Ao.clone(cn.line.uniforms),
            vertexShader: cn.line.vertexShader,
            fragmentShader: cn.line.fragmentShader,
            clipping: true
          }), this.isLineMaterial = true, this.setValues(t);
        }
        get color() {
          return this.uniforms.diffuse.value;
        }
        set color(t) {
          this.uniforms.diffuse.value = t;
        }
        get worldUnits() {
          return "WORLD_UNITS" in this.defines;
        }
        set worldUnits(t) {
          t === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
        }
        get linewidth() {
          return this.uniforms.linewidth.value;
        }
        set linewidth(t) {
          this.uniforms.linewidth && (this.uniforms.linewidth.value = t);
        }
        get dashed() {
          return "USE_DASH" in this.defines;
        }
        set dashed(t) {
          t === true !== this.dashed && (this.needsUpdate = true), t === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
        }
        get dashScale() {
          return this.uniforms.dashScale.value;
        }
        set dashScale(t) {
          this.uniforms.dashScale.value = t;
        }
        get dashSize() {
          return this.uniforms.dashSize.value;
        }
        set dashSize(t) {
          this.uniforms.dashSize.value = t;
        }
        get dashOffset() {
          return this.uniforms.dashOffset.value;
        }
        set dashOffset(t) {
          this.uniforms.dashOffset.value = t;
        }
        get gapSize() {
          return this.uniforms.gapSize.value;
        }
        set gapSize(t) {
          this.uniforms.gapSize.value = t;
        }
        get opacity() {
          return this.uniforms.opacity.value;
        }
        set opacity(t) {
          this.uniforms && (this.uniforms.opacity.value = t);
        }
        get resolution() {
          return this.uniforms.resolution.value;
        }
        set resolution(t) {
          this.uniforms.resolution.value.copy(t);
        }
        get alphaToCoverage() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        }
        set alphaToCoverage(t) {
          this.defines && (t === true !== this.alphaToCoverage && (this.needsUpdate = true), t === true ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = true) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = false));
        }
      }
      const _d = new C(), gd = new C(), Ve = new ne(), We = new ne(), kn = new ne(), Ic = new C(), Dc = new Bt(), je = new k0(), wd = new C(), za = new Rn(), Ha = new Cn(), Vn = new ne();
      let Yn, wr;
      function vd(r, t, e) {
        return Vn.set(0, 0, -t, 1).applyMatrix4(r.projectionMatrix), Vn.multiplyScalar(1 / Vn.w), Vn.x = wr / e.width, Vn.y = wr / e.height, Vn.applyMatrix4(r.projectionMatrixInverse), Vn.multiplyScalar(1 / Vn.w), Math.abs(Math.max(Vn.x, Vn.y));
      }
      function bx(r, t) {
        const e = r.matrixWorld, n = r.geometry, i = n.attributes.instanceStart, s = n.attributes.instanceEnd, a = Math.min(n.instanceCount, i.count);
        for (let o = 0, c = a; o < c; o++) {
          je.start.fromBufferAttribute(i, o), je.end.fromBufferAttribute(s, o), je.applyMatrix4(e);
          const l = new C(), h = new C();
          Yn.distanceSqToSegment(je.start, je.end, h, l), h.distanceTo(l) < wr * 0.5 && t.push({
            point: h,
            pointOnLine: l,
            distance: Yn.origin.distanceTo(h),
            object: r,
            face: null,
            faceIndex: o,
            uv: null,
            uv1: null
          });
        }
      }
      function Mx(r, t, e) {
        const n = t.projectionMatrix, s = r.material.resolution, a = r.matrixWorld, o = r.geometry, c = o.attributes.instanceStart, l = o.attributes.instanceEnd, h = Math.min(o.instanceCount, c.count), u = -t.near;
        Yn.at(1, kn), kn.w = 1, kn.applyMatrix4(t.matrixWorldInverse), kn.applyMatrix4(n), kn.multiplyScalar(1 / kn.w), kn.x *= s.x / 2, kn.y *= s.y / 2, kn.z = 0, Ic.copy(kn), Dc.multiplyMatrices(t.matrixWorldInverse, a);
        for (let d = 0, p = h; d < p; d++) {
          if (Ve.fromBufferAttribute(c, d), We.fromBufferAttribute(l, d), Ve.w = 1, We.w = 1, Ve.applyMatrix4(Dc), We.applyMatrix4(Dc), Ve.z > u && We.z > u) continue;
          if (Ve.z > u) {
            const v = Ve.z - We.z, R = (Ve.z - u) / v;
            Ve.lerp(We, R);
          } else if (We.z > u) {
            const v = We.z - Ve.z, R = (We.z - u) / v;
            We.lerp(Ve, R);
          }
          Ve.applyMatrix4(n), We.applyMatrix4(n), Ve.multiplyScalar(1 / Ve.w), We.multiplyScalar(1 / We.w), Ve.x *= s.x / 2, Ve.y *= s.y / 2, We.x *= s.x / 2, We.y *= s.y / 2, je.start.copy(Ve), je.start.z = 0, je.end.copy(We), je.end.z = 0;
          const w = je.closestPointToPointParameter(Ic, true);
          je.at(w, wd);
          const m = sf.lerp(Ve.z, We.z, w), f = m >= -1 && m <= 1, b = Ic.distanceTo(wd) < wr * 0.5;
          if (f && b) {
            je.start.fromBufferAttribute(c, d), je.end.fromBufferAttribute(l, d), je.start.applyMatrix4(a), je.end.applyMatrix4(a);
            const v = new C(), R = new C();
            Yn.distanceSqToSegment(je.start, je.end, R, v), e.push({
              point: R,
              pointOnLine: v,
              distance: Yn.origin.distanceTo(R),
              object: r,
              face: null,
              faceIndex: d,
              uv: null,
              uv1: null
            });
          }
        }
      }
      class Ex extends Re {
        constructor(t = new Of(), e = new Gs({
          color: Math.random() * 16777215
        })) {
          super(t, e), this.isLineSegments2 = true, this.type = "LineSegments2";
        }
        computeLineDistances() {
          const t = this.geometry, e = t.attributes.instanceStart, n = t.attributes.instanceEnd, i = new Float32Array(2 * e.count);
          for (let a = 0, o = 0, c = e.count; a < c; a++, o += 2) _d.fromBufferAttribute(e, a), gd.fromBufferAttribute(n, a), i[o] = o === 0 ? 0 : i[o - 1], i[o + 1] = i[o] + _d.distanceTo(gd);
          const s = new dl(i, 2, 1);
          return t.setAttribute("instanceDistanceStart", new wi(s, 1, 0)), t.setAttribute("instanceDistanceEnd", new wi(s, 1, 1)), this;
        }
        raycast(t, e) {
          const n = this.material.worldUnits, i = t.camera;
          i === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
          const s = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
          Yn = t.ray;
          const a = this.matrixWorld, o = this.geometry, c = this.material;
          wr = c.linewidth + s, o.boundingSphere === null && o.computeBoundingSphere(), Ha.copy(o.boundingSphere).applyMatrix4(a);
          let l;
          if (n) l = wr * 0.5;
          else {
            const u = Math.max(i.near, Ha.distanceToPoint(Yn.origin));
            l = vd(i, u, c.resolution);
          }
          if (Ha.radius += l, Yn.intersectsSphere(Ha) === false) return;
          o.boundingBox === null && o.computeBoundingBox(), za.copy(o.boundingBox).applyMatrix4(a);
          let h;
          if (n) h = wr * 0.5;
          else {
            const u = Math.max(i.near, za.distanceToPoint(Yn.origin));
            h = vd(i, u, c.resolution);
          }
          za.expandByScalar(h), Yn.intersectsBox(za) !== false && (n ? bx(this, e) : Mx(this, i, e));
        }
      }
      class Za extends Of {
        constructor() {
          super(), this.isLineGeometry = true, this.type = "LineGeometry";
        }
        setPositions(t) {
          const e = t.length - 3, n = new Float32Array(2 * e);
          for (let i = 0; i < e; i += 3) n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
          return super.setPositions(n), this;
        }
        setColors(t) {
          const e = t.length - 3, n = new Float32Array(2 * e);
          for (let i = 0; i < e; i += 3) n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
          return super.setColors(n), this;
        }
        fromLine(t) {
          const e = t.geometry;
          return this.setPositions(e.attributes.position.array), this;
        }
      }
      class Uc extends Ex {
        constructor(t = new Za(), e = new Gs({
          color: Math.random() * 16777215
        })) {
          super(t, e), this.isLine2 = true, this.type = "Line2";
        }
      }
      const Tx = {
        name: "CopyShader",
        uniforms: {
          tDiffuse: {
            value: null
          },
          opacity: {
            value: 1
          }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
      };
      class Lo {
        constructor() {
          this.isPass = true, this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
        }
        setSize() {
        }
        render() {
          console.error("THREE.Pass: .render() must be implemented in derived pass.");
        }
        dispose() {
        }
      }
      const Ax = new Ro(-1, 1, 1, -1, 0, 1);
      class Rx extends sn {
        constructor() {
          super(), this.setAttribute("position", new Ge([
            -1,
            3,
            0,
            -1,
            -1,
            0,
            3,
            -1,
            0
          ], 3)), this.setAttribute("uv", new Ge([
            0,
            2,
            0,
            0,
            2,
            0
          ], 2));
        }
      }
      const Cx = new Rx();
      class Px {
        constructor(t) {
          this._mesh = new Re(Cx, t);
        }
        dispose() {
          this._mesh.geometry.dispose();
        }
        render(t) {
          t.render(this._mesh, Ax);
        }
        get material() {
          return this._mesh.material;
        }
        set material(t) {
          this._mesh.material = t;
        }
      }
      class Gl extends Lo {
        constructor(t, e) {
          super(), this.textureID = e !== void 0 ? e : "tDiffuse", t instanceof Jn ? (this.uniforms = t.uniforms, this.material = t) : t && (this.uniforms = Ao.clone(t.uniforms), this.material = new Jn({
            name: t.name !== void 0 ? t.name : "unspecified",
            defines: Object.assign({}, t.defines),
            uniforms: this.uniforms,
            vertexShader: t.vertexShader,
            fragmentShader: t.fragmentShader
          })), this.fsQuad = new Px(this.material);
        }
        render(t, e, n) {
          this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (t.setRenderTarget(null), this.fsQuad.render(t)) : (t.setRenderTarget(e), this.clear && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), this.fsQuad.render(t));
        }
        dispose() {
          this.material.dispose(), this.fsQuad.dispose();
        }
      }
      class yd extends Lo {
        constructor(t, e) {
          super(), this.scene = t, this.camera = e, this.clear = true, this.needsSwap = false, this.inverse = false;
        }
        render(t, e, n) {
          const i = t.getContext(), s = t.state;
          s.buffers.color.setMask(false), s.buffers.depth.setMask(false), s.buffers.color.setLocked(true), s.buffers.depth.setLocked(true);
          let a, o;
          this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), s.buffers.stencil.setTest(true), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), s.buffers.stencil.setClear(o), s.buffers.stencil.setLocked(true), t.setRenderTarget(n), this.clear && t.clear(), t.render(this.scene, this.camera), t.setRenderTarget(e), this.clear && t.clear(), t.render(this.scene, this.camera), s.buffers.color.setLocked(false), s.buffers.depth.setLocked(false), s.buffers.color.setMask(true), s.buffers.depth.setMask(true), s.buffers.stencil.setLocked(false), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(true);
        }
      }
      class Lx extends Lo {
        constructor() {
          super(), this.needsSwap = false;
        }
        render(t) {
          t.state.buffers.stencil.setLocked(false), t.state.buffers.stencil.setTest(false);
        }
      }
      class Ix {
        constructor(t, e) {
          if (this.renderer = t, this._pixelRatio = t.getPixelRatio(), e === void 0) {
            const n = t.getSize(new Ot());
            this._width = n.width, this._height = n.height, e = new Wi(this._width * this._pixelRatio, this._height * this._pixelRatio, {
              type: rs
            }), e.texture.name = "EffectComposer.rt1";
          } else this._width = e.width, this._height = e.height;
          this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], this.copyPass = new Gl(Tx), this.copyPass.material.blending = yi, this.clock = new I0();
        }
        swapBuffers() {
          const t = this.readBuffer;
          this.readBuffer = this.writeBuffer, this.writeBuffer = t;
        }
        addPass(t) {
          this.passes.push(t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
        }
        insertPass(t, e) {
          this.passes.splice(e, 0, t), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
        }
        removePass(t) {
          const e = this.passes.indexOf(t);
          e !== -1 && this.passes.splice(e, 1);
        }
        isLastEnabledPass(t) {
          for (let e = t + 1; e < this.passes.length; e++) if (this.passes[e].enabled) return false;
          return true;
        }
        render(t) {
          t === void 0 && (t = this.clock.getDelta());
          const e = this.renderer.getRenderTarget();
          let n = false;
          for (let i = 0, s = this.passes.length; i < s; i++) {
            const a = this.passes[i];
            if (a.enabled !== false) {
              if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, t, n), a.needsSwap) {
                if (n) {
                  const o = this.renderer.getContext(), c = this.renderer.state.buffers.stencil;
                  c.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t), c.setFunc(o.EQUAL, 1, 4294967295);
                }
                this.swapBuffers();
              }
              yd !== void 0 && (a instanceof yd ? n = true : a instanceof Lx && (n = false));
            }
          }
          this.renderer.setRenderTarget(e);
        }
        reset(t) {
          if (t === void 0) {
            const e = this.renderer.getSize(new Ot());
            this._pixelRatio = this.renderer.getPixelRatio(), this._width = e.width, this._height = e.height, t = this.renderTarget1.clone(), t.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
          }
          this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
        }
        setSize(t, e) {
          this._width = t, this._height = e;
          const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
          this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
          for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
        }
        setPixelRatio(t) {
          this._pixelRatio = t, this.setSize(this._width, this._height);
        }
        dispose() {
          this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
        }
      }
      class Dx extends Lo {
        constructor(t, e, n = null, i = null, s = null) {
          super(), this.scene = t, this.camera = e, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new At();
        }
        render(t, e, n) {
          const i = t.autoClear;
          t.autoClear = false;
          let s, a;
          this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (t.getClearColor(this._oldClearColor), t.setClearColor(this.clearColor)), this.clearAlpha !== null && (s = t.getClearAlpha(), t.setClearAlpha(this.clearAlpha)), this.clearDepth == true && t.clearDepth(), t.setRenderTarget(this.renderToScreen ? null : n), this.clear === true && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), t.render(this.scene, this.camera), this.clearColor !== null && t.setClearColor(this._oldClearColor), this.clearAlpha !== null && t.setClearAlpha(s), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), t.autoClear = i;
        }
      }
      const Ux = {
        name: "HorizontalTiltShiftShader",
        uniforms: {
          tDiffuse: {
            value: null
          },
          h: {
            value: 1 / 512
          },
          r: {
            value: 0.35
          }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`
      }, Nx = {
        name: "VerticalTiltShiftShader",
        uniforms: {
          tDiffuse: {
            value: null
          },
          v: {
            value: 1 / 512
          },
          r: {
            value: 0.35
          }
        },
        vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
        fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`
      }, Fx = "/ttt/assets/rapier_wasm3d_bg-ap61jT-6.wasm", Ox = async (r = {}, t) => {
        let e;
        if (t.startsWith("data:")) {
          const n = t.replace(/^data:.*?base64,/, "");
          let i;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") i = Buffer.from(n, "base64");
          else if (typeof atob == "function") {
            const s = atob(n);
            i = new Uint8Array(s.length);
            for (let a = 0; a < s.length; a++) i[a] = s.charCodeAt(a);
          } else throw new Error("Cannot decode base64-encoded data URL");
          e = await WebAssembly.instantiate(i, r);
        } else {
          const n = await fetch(t), i = n.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm")) e = await WebAssembly.instantiateStreaming(n, r);
          else {
            const s = await n.arrayBuffer();
            e = await WebAssembly.instantiate(s, r);
          }
        }
        return e.instance.exports;
      }, ee = new Array(32).fill(void 0);
      ee.push(void 0, null, true, false);
      function re(r) {
        return ee[r];
      }
      let ks = ee.length;
      function Bx(r) {
        r < 36 || (ee[r] = ks, ks = r);
      }
      function js(r) {
        const t = re(r);
        return Bx(r), t;
      }
      function Le(r) {
        ks === ee.length && ee.push(ee.length + 1);
        const t = ks;
        return ks = ee[t], ee[t] = r, t;
      }
      function gt(r) {
        return r == null;
      }
      let Nc = new Float64Array();
      function lo() {
        return Nc.byteLength === 0 && (Nc = new Float64Array(xs.buffer)), Nc;
      }
      let Fc = new Int32Array();
      function fe() {
        return Fc.byteLength === 0 && (Fc = new Int32Array(xs.buffer)), Fc;
      }
      const zx = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
      let Bf = new zx("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Bf.decode();
      let Oc = new Uint8Array();
      function Hx() {
        return Oc.byteLength === 0 && (Oc = new Uint8Array(xs.buffer)), Oc;
      }
      function Gx(r, t) {
        return Bf.decode(Hx().subarray(r, r + t));
      }
      function P(r, t) {
        if (!(r instanceof t)) throw new Error(`expected instance of ${t.name}`);
        return r.ptr;
      }
      let Bc = new Float32Array();
      function Vi() {
        return Bc.byteLength === 0 && (Bc = new Float32Array(xs.buffer)), Bc;
      }
      let pe = 32;
      function we(r) {
        if (pe == 1) throw new Error("out of js stack");
        return ee[--pe] = r, pe;
      }
      function xd(r, t) {
        return Vi().subarray(r / 4, r / 4 + t);
      }
      let zc = new Uint32Array();
      function zf() {
        return zc.byteLength === 0 && (zc = new Uint32Array(xs.buffer)), zc;
      }
      function kx(r, t) {
        return zf().subarray(r / 4, r / 4 + t);
      }
      let mn = 0;
      function nr(r, t) {
        const e = t(r.length * 4);
        return Vi().set(r, e / 4), mn = r.length, e;
      }
      function Ga(r, t) {
        const e = t(r.length * 4);
        return zf().set(r, e / 4), mn = r.length, e;
      }
      function kl(r, t) {
        try {
          return r.apply(this, t);
        } catch (e) {
          yC(Le(e));
        }
      }
      const Io = Object.freeze({
        X: 0,
        0: "X",
        Y: 1,
        1: "Y",
        Z: 2,
        2: "Z",
        AngX: 3,
        3: "AngX",
        AngY: 4,
        4: "AngY",
        AngZ: 5,
        5: "AngZ"
      });
      class ji {
        static __wrap(t) {
          const e = Object.create(ji.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          yE(t);
        }
        constructor() {
          const t = xE();
          return ji.__wrap(t);
        }
      }
      class us {
        static __wrap(t) {
          const e = Object.create(us.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          kS(t);
        }
        constructor() {
          const t = VS();
          return us.__wrap(t);
        }
      }
      class Xs {
        static __wrap(t) {
          const e = Object.create(Xs.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          FS(t);
        }
        constructor() {
          const t = OS();
          return Xs.__wrap(t);
        }
        handle() {
          return ta(this.ptr);
        }
        translationApplied() {
          const t = BS(this.ptr);
          return U.__wrap(t);
        }
        translationRemaining() {
          const t = zS(this.ptr);
          return U.__wrap(t);
        }
        toi() {
          return xr(this.ptr);
        }
        worldWitness1() {
          const t = zo(this.ptr);
          return U.__wrap(t);
        }
        worldWitness2() {
          const t = HS(this.ptr);
          return U.__wrap(t);
        }
        worldNormal1() {
          const t = Kl(this.ptr);
          return U.__wrap(t);
        }
        worldNormal2() {
          const t = GS(this.ptr);
          return U.__wrap(t);
        }
      }
      class ye {
        static __wrap(t) {
          const e = Object.create(ye.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          IT(t);
        }
        coTranslation(t) {
          const e = SE(this.ptr, t);
          return U.__wrap(e);
        }
        coRotation(t) {
          const e = bE(this.ptr, t);
          return Kt.__wrap(e);
        }
        coSetTranslation(t, e, n, i) {
          ME(this.ptr, t, e, n, i);
        }
        coSetTranslationWrtParent(t, e, n, i) {
          EE(this.ptr, t, e, n, i);
        }
        coSetRotation(t, e, n, i, s) {
          TE(this.ptr, t, e, n, i, s);
        }
        coSetRotationWrtParent(t, e, n, i, s) {
          AE(this.ptr, t, e, n, i, s);
        }
        coIsSensor(t) {
          return RE(this.ptr, t) !== 0;
        }
        coShapeType(t) {
          return CE(this.ptr, t) >>> 0;
        }
        coHalfspaceNormal(t) {
          const e = PE(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        coHalfExtents(t) {
          const e = LE(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        coSetHalfExtents(t, e) {
          P(e, U), IE(this.ptr, t, e.ptr);
        }
        coRadius(t) {
          try {
            const i = te(-16);
            DE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = Vi()[i / 4 + 1];
            return e === 0 ? void 0 : n;
          } finally {
            te(16);
          }
        }
        coSetRadius(t, e) {
          UE(this.ptr, t, e);
        }
        coHalfHeight(t) {
          try {
            const i = te(-16);
            NE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = Vi()[i / 4 + 1];
            return e === 0 ? void 0 : n;
          } finally {
            te(16);
          }
        }
        coSetHalfHeight(t, e) {
          FE(this.ptr, t, e);
        }
        coRoundRadius(t) {
          try {
            const i = te(-16);
            OE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = Vi()[i / 4 + 1];
            return e === 0 ? void 0 : n;
          } finally {
            te(16);
          }
        }
        coSetRoundRadius(t, e) {
          BE(this.ptr, t, e);
        }
        coVertices(t) {
          try {
            const i = te(-16);
            zE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = fe()[i / 4 + 1];
            let s;
            return e !== 0 && (s = xd(e, n).slice(), Hc(e, n * 4)), s;
          } finally {
            te(16);
          }
        }
        coIndices(t) {
          try {
            const i = te(-16);
            HE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = fe()[i / 4 + 1];
            let s;
            return e !== 0 && (s = kx(e, n).slice(), Hc(e, n * 4)), s;
          } finally {
            te(16);
          }
        }
        coHeightfieldHeights(t) {
          try {
            const i = te(-16);
            GE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = fe()[i / 4 + 1];
            let s;
            return e !== 0 && (s = xd(e, n).slice(), Hc(e, n * 4)), s;
          } finally {
            te(16);
          }
        }
        coHeightfieldScale(t) {
          const e = kE(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        coHeightfieldNRows(t) {
          try {
            const i = te(-16);
            VE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = fe()[i / 4 + 1];
            return e === 0 ? void 0 : n >>> 0;
          } finally {
            te(16);
          }
        }
        coHeightfieldNCols(t) {
          try {
            const i = te(-16);
            WE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = fe()[i / 4 + 1];
            return e === 0 ? void 0 : n >>> 0;
          } finally {
            te(16);
          }
        }
        coParent(t) {
          try {
            const i = te(-16);
            jE(i, this.ptr, t);
            var e = fe()[i / 4 + 0], n = lo()[i / 8 + 1];
            return e === 0 ? void 0 : n;
          } finally {
            te(16);
          }
        }
        coSetEnabled(t, e) {
          XE(this.ptr, t, e);
        }
        coIsEnabled(t) {
          return qE(this.ptr, t) !== 0;
        }
        coFriction(t) {
          return YE(this.ptr, t);
        }
        coRestitution(t) {
          return KE(this.ptr, t);
        }
        coDensity(t) {
          return JE(this.ptr, t);
        }
        coMass(t) {
          return $E(this.ptr, t);
        }
        coVolume(t) {
          return ZE(this.ptr, t);
        }
        coCollisionGroups(t) {
          return QE(this.ptr, t) >>> 0;
        }
        coSolverGroups(t) {
          return tT(this.ptr, t) >>> 0;
        }
        coActiveHooks(t) {
          return eT(this.ptr, t) >>> 0;
        }
        coActiveCollisionTypes(t) {
          return nT(this.ptr, t);
        }
        coActiveEvents(t) {
          return iT(this.ptr, t) >>> 0;
        }
        coContactForceEventThreshold(t) {
          return rT(this.ptr, t);
        }
        coContainsPoint(t, e) {
          return P(e, U), sT(this.ptr, t, e.ptr) !== 0;
        }
        coCastShape(t, e, n, i, s, a, o, c) {
          P(e, U), P(n, St), P(i, U), P(s, Kt), P(a, U);
          const l = aT(this.ptr, t, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o, c);
          return l === 0 ? void 0 : Oo.__wrap(l);
        }
        coCastCollider(t, e, n, i, s, a) {
          P(e, U), P(i, U);
          const o = oT(this.ptr, t, e.ptr, n, i.ptr, s, a);
          return o === 0 ? void 0 : Fo.__wrap(o);
        }
        coIntersectsShape(t, e, n, i) {
          return P(e, St), P(n, U), P(i, Kt), cT(this.ptr, t, e.ptr, n.ptr, i.ptr) !== 0;
        }
        coContactShape(t, e, n, i, s) {
          P(e, St), P(n, U), P(i, Kt);
          const a = lT(this.ptr, t, e.ptr, n.ptr, i.ptr, s);
          return a === 0 ? void 0 : Ys.__wrap(a);
        }
        coContactCollider(t, e, n) {
          const i = hT(this.ptr, t, e, n);
          return i === 0 ? void 0 : Ys.__wrap(i);
        }
        coProjectPoint(t, e, n) {
          P(e, U);
          const i = uT(this.ptr, t, e.ptr, n);
          return Do.__wrap(i);
        }
        coIntersectsRay(t, e, n, i) {
          return P(e, U), P(n, U), dT(this.ptr, t, e.ptr, n.ptr, i) !== 0;
        }
        coCastRay(t, e, n, i, s) {
          return P(e, U), P(n, U), fT(this.ptr, t, e.ptr, n.ptr, i, s);
        }
        coCastRayAndGetNormal(t, e, n, i, s) {
          P(e, U), P(n, U);
          const a = pT(this.ptr, t, e.ptr, n.ptr, i, s);
          return a === 0 ? void 0 : No.__wrap(a);
        }
        coSetSensor(t, e) {
          mT(this.ptr, t, e);
        }
        coSetRestitution(t, e) {
          _T(this.ptr, t, e);
        }
        coSetFriction(t, e) {
          gT(this.ptr, t, e);
        }
        coFrictionCombineRule(t) {
          return wT(this.ptr, t) >>> 0;
        }
        coSetFrictionCombineRule(t, e) {
          vT(this.ptr, t, e);
        }
        coRestitutionCombineRule(t) {
          return yT(this.ptr, t) >>> 0;
        }
        coSetRestitutionCombineRule(t, e) {
          xT(this.ptr, t, e);
        }
        coSetCollisionGroups(t, e) {
          ST(this.ptr, t, e);
        }
        coSetSolverGroups(t, e) {
          bT(this.ptr, t, e);
        }
        coSetActiveHooks(t, e) {
          MT(this.ptr, t, e);
        }
        coSetActiveEvents(t, e) {
          ET(this.ptr, t, e);
        }
        coSetActiveCollisionTypes(t, e) {
          TT(this.ptr, t, e);
        }
        coSetShape(t, e) {
          P(e, St), AT(this.ptr, t, e.ptr);
        }
        coSetContactForceEventThreshold(t, e) {
          RT(this.ptr, t, e);
        }
        coSetDensity(t, e) {
          CT(this.ptr, t, e);
        }
        coSetMass(t, e) {
          PT(this.ptr, t, e);
        }
        coSetMassProperties(t, e, n, i, s) {
          P(n, U), P(i, U), P(s, Kt), LT(this.ptr, t, e, n.ptr, i.ptr, s.ptr);
        }
        constructor() {
          const t = DT();
          return ye.__wrap(t);
        }
        len() {
          return UT(this.ptr) >>> 0;
        }
        contains(t) {
          return Sd(this.ptr, t) !== 0;
        }
        createCollider(t, e, n, i, s, a, o, c, l, h, u, d, p, _, w, m, f, b, v, R, I, y, A, B) {
          try {
            const z = te(-16);
            P(e, St), P(n, U), P(i, Kt), P(o, U), P(c, U), P(l, Kt), P(B, Te), NT(z, this.ptr, t, e.ptr, n.ptr, i.ptr, s, a, o.ptr, c.ptr, l.ptr, h, u, d, p, _, w, m, f, b, v, R, I, y, A, B.ptr);
            var S = fe()[z / 4 + 0], T = lo()[z / 8 + 1];
            return S === 0 ? void 0 : T;
          } finally {
            te(16);
          }
        }
        remove(t, e, n, i) {
          P(e, Zn), P(n, Te), FT(this.ptr, t, e.ptr, n.ptr, i);
        }
        isHandleValid(t) {
          return Sd(this.ptr, t) !== 0;
        }
        forEachColliderHandle(t) {
          try {
            OT(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
      }
      class Vl {
        static __wrap(t) {
          const e = Object.create(Vl.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          CR(t);
        }
        collider1() {
          return ta(this.ptr);
        }
        collider2() {
          return PR(this.ptr);
        }
        total_force() {
          const t = Wf(this.ptr);
          return U.__wrap(t);
        }
        total_force_magnitude() {
          return LR(this.ptr);
        }
        max_force_direction() {
          const t = IR(this.ptr);
          return U.__wrap(t);
        }
        max_force_magnitude() {
          return DR(this.ptr);
        }
      }
      class Wl {
        static __wrap(t) {
          const e = Object.create(Wl.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          XT(t);
        }
        normal() {
          const t = $T(this.ptr);
          return U.__wrap(t);
        }
        local_n1() {
          const t = ZT(this.ptr);
          return U.__wrap(t);
        }
        local_n2() {
          const t = QT(this.ptr);
          return U.__wrap(t);
        }
        subshape1() {
          return tA(this.ptr) >>> 0;
        }
        subshape2() {
          return eA(this.ptr) >>> 0;
        }
        num_contacts() {
          return nA(this.ptr) >>> 0;
        }
        contact_local_p1(t) {
          const e = iA(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        contact_local_p2(t) {
          const e = rA(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        contact_dist(t) {
          return sA(this.ptr, t);
        }
        contact_fid1(t) {
          return aA(this.ptr, t) >>> 0;
        }
        contact_fid2(t) {
          return oA(this.ptr, t) >>> 0;
        }
        contact_impulse(t) {
          return cA(this.ptr, t);
        }
        contact_tangent_impulse_x(t) {
          return lA(this.ptr, t);
        }
        contact_tangent_impulse_y(t) {
          return hA(this.ptr, t);
        }
        num_solver_contacts() {
          return uA(this.ptr) >>> 0;
        }
        solver_contact_point(t) {
          const e = dA(this.ptr, t);
          return e === 0 ? void 0 : U.__wrap(e);
        }
        solver_contact_dist(t) {
          return fA(this.ptr, t);
        }
        solver_contact_friction(t) {
          return pA(this.ptr, t);
        }
        solver_contact_restitution(t) {
          return mA(this.ptr, t);
        }
        solver_contact_tangent_velocity(t) {
          const e = _A(this.ptr, t);
          return U.__wrap(e);
        }
      }
      class jl {
        static __wrap(t) {
          const e = Object.create(jl.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          fC(t);
        }
        collider1() {
          return qT(this.ptr);
        }
        collider2() {
          return YT(this.ptr);
        }
        numContactManifolds() {
          return KT(this.ptr) >>> 0;
        }
        contactManifold(t) {
          const e = JT(this.ptr, t);
          return e === 0 ? void 0 : Wl.__wrap(e);
        }
      }
      class ho {
        static __wrap(t) {
          const e = Object.create(ho.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          bR(t);
        }
        constructor() {
          const t = MR();
          return ho.__wrap(t);
        }
        vertices() {
          const t = ER(this.ptr);
          return js(t);
        }
        colors() {
          const t = TR(this.ptr);
          return js(t);
        }
        render(t, e, n, i, s) {
          P(t, Te), P(e, ye), P(n, $n), P(i, Qn), P(s, Si), AR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr);
        }
      }
      class Xl {
        static __wrap(t) {
          const e = Object.create(Xl.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          eC(t);
        }
        takeGravity() {
          const t = nC(this.ptr);
          return t === 0 ? void 0 : U.__wrap(t);
        }
        takeIntegrationParameters() {
          const t = iC(this.ptr);
          return t === 0 ? void 0 : Xi.__wrap(t);
        }
        takeIslandManager() {
          const t = rC(this.ptr);
          return t === 0 ? void 0 : Zn.__wrap(t);
        }
        takeBroadPhase() {
          const t = sC(this.ptr);
          return t === 0 ? void 0 : ji.__wrap(t);
        }
        takeNarrowPhase() {
          const t = aC(this.ptr);
          return t === 0 ? void 0 : Si.__wrap(t);
        }
        takeBodies() {
          const t = oC(this.ptr);
          return t === 0 ? void 0 : Te.__wrap(t);
        }
        takeColliders() {
          const t = cC(this.ptr);
          return t === 0 ? void 0 : ye.__wrap(t);
        }
        takeImpulseJoints() {
          const t = lC(this.ptr);
          return t === 0 ? void 0 : $n.__wrap(t);
        }
        takeMultibodyJoints() {
          const t = hC(this.ptr);
          return t === 0 ? void 0 : Qn.__wrap(t);
        }
      }
      class uo {
        static __wrap(t) {
          const e = Object.create(uo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          RR(t);
        }
        constructor(t) {
          const e = UR(t);
          return uo.__wrap(e);
        }
        drainCollisionEvents(t) {
          try {
            NR(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
        drainContactForceEvents(t) {
          try {
            FR(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
        clear() {
          OR(this.ptr);
        }
      }
      class Bi {
        static __wrap(t) {
          const e = Object.create(Bi.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          Fb(t);
        }
        static spherical(t, e) {
          P(t, U), P(e, U);
          const n = Ob(t.ptr, e.ptr);
          return Bi.__wrap(n);
        }
        static prismatic(t, e, n, i, s, a) {
          P(t, U), P(e, U), P(n, U);
          const o = Bb(t.ptr, e.ptr, n.ptr, i, s, a);
          return o === 0 ? void 0 : Bi.__wrap(o);
        }
        static fixed(t, e, n, i) {
          P(t, U), P(e, Kt), P(n, U), P(i, Kt);
          const s = zb(t.ptr, e.ptr, n.ptr, i.ptr);
          return Bi.__wrap(s);
        }
        static revolute(t, e, n) {
          P(t, U), P(e, U), P(n, U);
          const i = Hb(t.ptr, e.ptr, n.ptr);
          return i === 0 ? void 0 : Bi.__wrap(i);
        }
      }
      class $n {
        static __wrap(t) {
          const e = Object.create($n.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          lb(t);
        }
        jointType(t) {
          return WS(this.ptr, t) >>> 0;
        }
        jointBodyHandle1(t) {
          return jS(this.ptr, t);
        }
        jointBodyHandle2(t) {
          return XS(this.ptr, t);
        }
        jointFrameX1(t) {
          const e = qS(this.ptr, t);
          return Kt.__wrap(e);
        }
        jointFrameX2(t) {
          const e = YS(this.ptr, t);
          return Kt.__wrap(e);
        }
        jointAnchor1(t) {
          const e = KS(this.ptr, t);
          return U.__wrap(e);
        }
        jointAnchor2(t) {
          const e = JS(this.ptr, t);
          return U.__wrap(e);
        }
        jointSetAnchor1(t, e) {
          P(e, U), $S(this.ptr, t, e.ptr);
        }
        jointSetAnchor2(t, e) {
          P(e, U), ZS(this.ptr, t, e.ptr);
        }
        jointContactsEnabled(t) {
          return QS(this.ptr, t) !== 0;
        }
        jointSetContactsEnabled(t, e) {
          tb(this.ptr, t, e);
        }
        jointLimitsEnabled(t, e) {
          return eb(this.ptr, t, e) !== 0;
        }
        jointLimitsMin(t, e) {
          return nb(this.ptr, t, e);
        }
        jointLimitsMax(t, e) {
          return ib(this.ptr, t, e);
        }
        jointSetLimits(t, e, n, i) {
          rb(this.ptr, t, e, n, i);
        }
        jointConfigureMotorModel(t, e, n) {
          sb(this.ptr, t, e, n);
        }
        jointConfigureMotorVelocity(t, e, n, i) {
          ab(this.ptr, t, e, n, i);
        }
        jointConfigureMotorPosition(t, e, n, i, s) {
          ob(this.ptr, t, e, n, i, s);
        }
        jointConfigureMotor(t, e, n, i, s, a) {
          cb(this.ptr, t, e, n, i, s, a);
        }
        constructor() {
          const t = hb();
          return $n.__wrap(t);
        }
        createJoint(t, e, n, i) {
          return P(t, Bi), ub(this.ptr, t.ptr, e, n, i);
        }
        remove(t, e) {
          db(this.ptr, t, e);
        }
        len() {
          return fb(this.ptr) >>> 0;
        }
        contains(t) {
          return pb(this.ptr, t) !== 0;
        }
        forEachJointHandle(t) {
          try {
            mb(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(t, e) {
          try {
            _b(this.ptr, t, we(e));
          } finally {
            ee[pe++] = void 0;
          }
        }
      }
      class Xi {
        static __wrap(t) {
          const e = Object.create(Xi.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          gb(t);
        }
        constructor() {
          const t = wb();
          return Xi.__wrap(t);
        }
        get dt() {
          return Ho(this.ptr);
        }
        get erp() {
          return xr(this.ptr);
        }
        get allowedLinearError() {
          return vb(this.ptr);
        }
        get predictionDistance() {
          return yb(this.ptr);
        }
        get maxVelocityIterations() {
          return xb(this.ptr) >>> 0;
        }
        get maxVelocityFrictionIterations() {
          return Sb(this.ptr) >>> 0;
        }
        get maxStabilizationIterations() {
          return bb(this.ptr) >>> 0;
        }
        get minIslandSize() {
          return Mb(this.ptr) >>> 0;
        }
        get maxCcdSubsteps() {
          return Eb(this.ptr) >>> 0;
        }
        set dt(t) {
          Hf(this.ptr, t);
        }
        set erp(t) {
          Gf(this.ptr, t);
        }
        set allowedLinearError(t) {
          Tb(this.ptr, t);
        }
        set predictionDistance(t) {
          Ab(this.ptr, t);
        }
        set maxVelocityIterations(t) {
          Rb(this.ptr, t);
        }
        set maxVelocityFrictionIterations(t) {
          Cb(this.ptr, t);
        }
        set maxStabilizationIterations(t) {
          Pb(this.ptr, t);
        }
        set minIslandSize(t) {
          Lb(this.ptr, t);
        }
        set maxCcdSubsteps(t) {
          Ib(this.ptr, t);
        }
      }
      class Zn {
        static __wrap(t) {
          const e = Object.create(Zn.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          Db(t);
        }
        constructor() {
          const t = Ub();
          return Zn.__wrap(t);
        }
        forEachActiveRigidBodyHandle(t) {
          try {
            Nb(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
      }
      class fo {
        static __wrap(t) {
          const e = Object.create(fo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          uS(t);
        }
        constructor(t) {
          const e = dS(t);
          return fo.__wrap(e);
        }
        up() {
          const t = fS(this.ptr);
          return U.__wrap(t);
        }
        setUp(t) {
          P(t, U), pS(this.ptr, t.ptr);
        }
        offset() {
          return mS(this.ptr);
        }
        setOffset(t) {
          _S(this.ptr, t);
        }
        slideEnabled() {
          return gS(this.ptr) !== 0;
        }
        setSlideEnabled(t) {
          wS(this.ptr, t);
        }
        autostepMaxHeight() {
          try {
            const n = te(-16);
            vS(n, this.ptr);
            var t = fe()[n / 4 + 0], e = Vi()[n / 4 + 1];
            return t === 0 ? void 0 : e;
          } finally {
            te(16);
          }
        }
        autostepMinWidth() {
          try {
            const n = te(-16);
            yS(n, this.ptr);
            var t = fe()[n / 4 + 0], e = Vi()[n / 4 + 1];
            return t === 0 ? void 0 : e;
          } finally {
            te(16);
          }
        }
        autostepIncludesDynamicBodies() {
          const t = xS(this.ptr);
          return t === 16777215 ? void 0 : t !== 0;
        }
        autostepEnabled() {
          return SS(this.ptr) !== 0;
        }
        enableAutostep(t, e, n) {
          bS(this.ptr, t, e, n);
        }
        disableAutostep() {
          MS(this.ptr);
        }
        maxSlopeClimbAngle() {
          return ES(this.ptr);
        }
        setMaxSlopeClimbAngle(t) {
          TS(this.ptr, t);
        }
        minSlopeSlideAngle() {
          return AS(this.ptr);
        }
        setMinSlopeSlideAngle(t) {
          RS(this.ptr, t);
        }
        snapToGroundDistance() {
          try {
            const n = te(-16);
            CS(n, this.ptr);
            var t = fe()[n / 4 + 0], e = Vi()[n / 4 + 1];
            return t === 0 ? void 0 : e;
          } finally {
            te(16);
          }
        }
        enableSnapToGround(t) {
          PS(this.ptr, t);
        }
        disableSnapToGround() {
          LS(this.ptr);
        }
        snapToGroundEnabled() {
          return IS(this.ptr) !== 0;
        }
        computeColliderMovement(t, e, n, i, s, a, o, c, l, h, u) {
          try {
            P(e, Te), P(n, ye), P(i, qs), P(a, U), DS(this.ptr, t, e.ptr, n.ptr, i.ptr, s, a.ptr, o, !gt(c), gt(c) ? 0 : c, l, !gt(h), gt(h) ? 0 : h, we(u));
          } finally {
            ee[pe++] = void 0;
          }
        }
        computedMovement() {
          const t = Bo(this.ptr);
          return U.__wrap(t);
        }
        computedGrounded() {
          return Yl(this.ptr) !== 0;
        }
        numComputedCollisions() {
          return US(this.ptr) >>> 0;
        }
        computedCollision(t, e) {
          return P(e, Xs), NS(this.ptr, t, e.ptr) !== 0;
        }
      }
      class Qn {
        static __wrap(t) {
          const e = Object.create(Qn.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          $b(t);
        }
        jointType(t) {
          return Gb(this.ptr, t) >>> 0;
        }
        jointFrameX1(t) {
          const e = kb(this.ptr, t);
          return Kt.__wrap(e);
        }
        jointFrameX2(t) {
          const e = Vb(this.ptr, t);
          return Kt.__wrap(e);
        }
        jointAnchor1(t) {
          const e = Wb(this.ptr, t);
          return U.__wrap(e);
        }
        jointAnchor2(t) {
          const e = jb(this.ptr, t);
          return U.__wrap(e);
        }
        jointContactsEnabled(t) {
          return Xb(this.ptr, t) !== 0;
        }
        jointSetContactsEnabled(t, e) {
          qb(this.ptr, t, e);
        }
        jointLimitsEnabled(t, e) {
          return Yb(this.ptr, t, e) !== 0;
        }
        jointLimitsMin(t, e) {
          return Kb(this.ptr, t, e);
        }
        jointLimitsMax(t, e) {
          return Jb(this.ptr, t, e);
        }
        constructor() {
          const t = Zb();
          return Qn.__wrap(t);
        }
        createJoint(t, e, n, i) {
          return P(t, Bi), Qb(this.ptr, t.ptr, e, n, i);
        }
        remove(t, e) {
          tM(this.ptr, t, e);
        }
        contains(t) {
          return eM(this.ptr, t) !== 0;
        }
        forEachJointHandle(t) {
          try {
            nM(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
        forEachJointAttachedToRigidBody(t, e) {
          try {
            iM(this.ptr, t, we(e));
          } finally {
            ee[pe++] = void 0;
          }
        }
      }
      class Si {
        static __wrap(t) {
          const e = Object.create(Si.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          HT(t);
        }
        constructor() {
          const t = GT();
          return Si.__wrap(t);
        }
        contacts_with(t, e) {
          kT(this.ptr, t, Le(e));
        }
        contact_pair(t, e) {
          const n = VT(this.ptr, t, e);
          return n === 0 ? void 0 : jl.__wrap(n);
        }
        intersections_with(t, e) {
          WT(this.ptr, t, Le(e));
        }
        intersection_pair(t, e) {
          return jT(this.ptr, t, e) !== 0;
        }
      }
      class po {
        static __wrap(t) {
          const e = Object.create(po.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          BR(t);
        }
        constructor() {
          const t = zR();
          return po.__wrap(t);
        }
        step(t, e, n, i, s, a, o, c, l, h) {
          P(t, U), P(e, Xi), P(n, Zn), P(i, ji), P(s, Si), P(a, Te), P(o, ye), P(c, $n), P(l, Qn), P(h, us), HR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o.ptr, c.ptr, l.ptr, h.ptr);
        }
        stepWithEvents(t, e, n, i, s, a, o, c, l, h, u, d, p, _) {
          P(t, U), P(e, Xi), P(n, Zn), P(i, ji), P(s, Si), P(a, Te), P(o, ye), P(c, $n), P(l, Qn), P(h, us), P(u, uo), GR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o.ptr, c.ptr, l.ptr, h.ptr, u.ptr, Le(d), Le(p), Le(_));
        }
      }
      class mo {
        static __wrap(t) {
          const e = Object.create(mo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          wA(t);
        }
        colliderHandle() {
          return vA(this.ptr);
        }
        point() {
          const t = Bo(this.ptr);
          return U.__wrap(t);
        }
        isInside() {
          return Yl(this.ptr) !== 0;
        }
        featureType() {
          return yA(this.ptr) >>> 0;
        }
        featureId() {
          try {
            const n = te(-16);
            xA(n, this.ptr);
            var t = fe()[n / 4 + 0], e = fe()[n / 4 + 1];
            return t === 0 ? void 0 : e >>> 0;
          } finally {
            te(16);
          }
        }
      }
      class Do {
        static __wrap(t) {
          const e = Object.create(Do.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          gA(t);
        }
        point() {
          const t = Bo(this.ptr);
          return U.__wrap(t);
        }
        isInside() {
          return Yl(this.ptr) !== 0;
        }
      }
      class qs {
        static __wrap(t) {
          const e = Object.create(qs.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          kR(t);
        }
        constructor() {
          const t = VR();
          return qs.__wrap(t);
        }
        update(t, e) {
          P(t, Te), P(e, ye), WR(this.ptr, t.ptr, e.ptr);
        }
        castRay(t, e, n, i, s, a, o, c, l, h, u) {
          try {
            P(t, Te), P(e, ye), P(n, U), P(i, U);
            const d = jR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s, a, o, !gt(c), gt(c) ? 0 : c, !gt(l), gt(l) ? 0 : l, !gt(h), gt(h) ? 0 : h, we(u));
            return d === 0 ? void 0 : ql.__wrap(d);
          } finally {
            ee[pe++] = void 0;
          }
        }
        castRayAndGetNormal(t, e, n, i, s, a, o, c, l, h, u) {
          try {
            P(t, Te), P(e, ye), P(n, U), P(i, U);
            const d = XR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s, a, o, !gt(c), gt(c) ? 0 : c, !gt(l), gt(l) ? 0 : l, !gt(h), gt(h) ? 0 : h, we(u));
            return d === 0 ? void 0 : Uo.__wrap(d);
          } finally {
            ee[pe++] = void 0;
          }
        }
        intersectionsWithRay(t, e, n, i, s, a, o, c, l, h, u, d) {
          try {
            P(t, Te), P(e, ye), P(n, U), P(i, U), qR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s, a, we(o), c, !gt(l), gt(l) ? 0 : l, !gt(h), gt(h) ? 0 : h, !gt(u), gt(u) ? 0 : u, we(d));
          } finally {
            ee[pe++] = void 0, ee[pe++] = void 0;
          }
        }
        intersectionWithShape(t, e, n, i, s, a, o, c, l, h) {
          try {
            const p = te(-16);
            P(t, Te), P(e, ye), P(n, U), P(i, Kt), P(s, St), YR(p, this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a, !gt(o), gt(o) ? 0 : o, !gt(c), gt(c) ? 0 : c, !gt(l), gt(l) ? 0 : l, we(h));
            var u = fe()[p / 4 + 0], d = lo()[p / 8 + 1];
            return u === 0 ? void 0 : d;
          } finally {
            te(16), ee[pe++] = void 0;
          }
        }
        projectPoint(t, e, n, i, s, a, o, c, l) {
          try {
            P(t, Te), P(e, ye), P(n, U);
            const h = KR(this.ptr, t.ptr, e.ptr, n.ptr, i, s, !gt(a), gt(a) ? 0 : a, !gt(o), gt(o) ? 0 : o, !gt(c), gt(c) ? 0 : c, we(l));
            return h === 0 ? void 0 : mo.__wrap(h);
          } finally {
            ee[pe++] = void 0;
          }
        }
        projectPointAndGetFeature(t, e, n, i, s, a, o, c) {
          try {
            P(t, Te), P(e, ye), P(n, U);
            const l = JR(this.ptr, t.ptr, e.ptr, n.ptr, i, !gt(s), gt(s) ? 0 : s, !gt(a), gt(a) ? 0 : a, !gt(o), gt(o) ? 0 : o, we(c));
            return l === 0 ? void 0 : mo.__wrap(l);
          } finally {
            ee[pe++] = void 0;
          }
        }
        intersectionsWithPoint(t, e, n, i, s, a, o, c, l) {
          try {
            P(t, Te), P(e, ye), P(n, U), $R(this.ptr, t.ptr, e.ptr, n.ptr, we(i), s, !gt(a), gt(a) ? 0 : a, !gt(o), gt(o) ? 0 : o, !gt(c), gt(c) ? 0 : c, we(l));
          } finally {
            ee[pe++] = void 0, ee[pe++] = void 0;
          }
        }
        castShape(t, e, n, i, s, a, o, c, l, h, u, d, p) {
          try {
            P(t, Te), P(e, ye), P(n, U), P(i, Kt), P(s, U), P(a, St);
            const _ = ZR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o, c, l, !gt(h), gt(h) ? 0 : h, !gt(u), gt(u) ? 0 : u, !gt(d), gt(d) ? 0 : d, we(p));
            return _ === 0 ? void 0 : Fo.__wrap(_);
          } finally {
            ee[pe++] = void 0;
          }
        }
        intersectionsWithShape(t, e, n, i, s, a, o, c, l, h, u) {
          try {
            P(t, Te), P(e, ye), P(n, U), P(i, Kt), P(s, St), QR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, we(a), o, !gt(c), gt(c) ? 0 : c, !gt(l), gt(l) ? 0 : l, !gt(h), gt(h) ? 0 : h, we(u));
          } finally {
            ee[pe++] = void 0, ee[pe++] = void 0;
          }
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
          try {
            P(t, U), P(e, U), tC(this.ptr, t.ptr, e.ptr, we(n));
          } finally {
            ee[pe++] = void 0;
          }
        }
      }
      class Uo {
        static __wrap(t) {
          const e = Object.create(Uo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          pC(t);
        }
        colliderHandle() {
          return ta(this.ptr);
        }
        normal() {
          const t = EA(this.ptr);
          return U.__wrap(t);
        }
        toi() {
          return TA(this.ptr);
        }
        featureType() {
          return AA(this.ptr) >>> 0;
        }
        featureId() {
          try {
            const n = te(-16);
            RA(n, this.ptr);
            var t = fe()[n / 4 + 0], e = fe()[n / 4 + 1];
            return t === 0 ? void 0 : e >>> 0;
          } finally {
            te(16);
          }
        }
      }
      class ql {
        static __wrap(t) {
          const e = Object.create(ql.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          CA(t);
        }
        colliderHandle() {
          return ta(this.ptr);
        }
        toi() {
          return xr(this.ptr);
        }
      }
      class No {
        static __wrap(t) {
          const e = Object.create(No.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          SA(t);
        }
        normal() {
          const t = zo(this.ptr);
          return U.__wrap(t);
        }
        toi() {
          return xr(this.ptr);
        }
        featureType() {
          return bA(this.ptr) >>> 0;
        }
        featureId() {
          try {
            const n = te(-16);
            MA(n, this.ptr);
            var t = fe()[n / 4 + 0], e = fe()[n / 4 + 1];
            return t === 0 ? void 0 : e >>> 0;
          } finally {
            te(16);
          }
        }
      }
      class Te {
        static __wrap(t) {
          const e = Object.create(Te.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          dE(t);
        }
        rbTranslation(t) {
          const e = rM(this.ptr, t);
          return U.__wrap(e);
        }
        rbRotation(t) {
          const e = sM(this.ptr, t);
          return Kt.__wrap(e);
        }
        rbSleep(t) {
          aM(this.ptr, t);
        }
        rbIsSleeping(t) {
          return oM(this.ptr, t) !== 0;
        }
        rbIsMoving(t) {
          return cM(this.ptr, t) !== 0;
        }
        rbNextTranslation(t) {
          const e = lM(this.ptr, t);
          return U.__wrap(e);
        }
        rbNextRotation(t) {
          const e = hM(this.ptr, t);
          return Kt.__wrap(e);
        }
        rbSetTranslation(t, e, n, i, s) {
          uM(this.ptr, t, e, n, i, s);
        }
        rbSetRotation(t, e, n, i, s, a) {
          dM(this.ptr, t, e, n, i, s, a);
        }
        rbSetLinvel(t, e, n) {
          P(e, U), fM(this.ptr, t, e.ptr, n);
        }
        rbSetAngvel(t, e, n) {
          P(e, U), pM(this.ptr, t, e.ptr, n);
        }
        rbSetNextKinematicTranslation(t, e, n, i) {
          mM(this.ptr, t, e, n, i);
        }
        rbSetNextKinematicRotation(t, e, n, i, s) {
          _M(this.ptr, t, e, n, i, s);
        }
        rbRecomputeMassPropertiesFromColliders(t, e) {
          P(e, ye), gM(this.ptr, t, e.ptr);
        }
        rbSetAdditionalMass(t, e, n) {
          wM(this.ptr, t, e, n);
        }
        rbSetAdditionalMassProperties(t, e, n, i, s, a) {
          P(n, U), P(i, U), P(s, Kt), vM(this.ptr, t, e, n.ptr, i.ptr, s.ptr, a);
        }
        rbLinvel(t) {
          const e = yM(this.ptr, t);
          return U.__wrap(e);
        }
        rbAngvel(t) {
          const e = xM(this.ptr, t);
          return U.__wrap(e);
        }
        rbLockTranslations(t, e, n) {
          SM(this.ptr, t, e, n);
        }
        rbSetEnabledTranslations(t, e, n, i, s) {
          bM(this.ptr, t, e, n, i, s);
        }
        rbLockRotations(t, e, n) {
          MM(this.ptr, t, e, n);
        }
        rbSetEnabledRotations(t, e, n, i, s) {
          EM(this.ptr, t, e, n, i, s);
        }
        rbDominanceGroup(t) {
          return TM(this.ptr, t);
        }
        rbSetDominanceGroup(t, e) {
          AM(this.ptr, t, e);
        }
        rbEnableCcd(t, e) {
          RM(this.ptr, t, e);
        }
        rbMass(t) {
          return CM(this.ptr, t);
        }
        rbInvMass(t) {
          return PM(this.ptr, t);
        }
        rbEffectiveInvMass(t) {
          const e = LM(this.ptr, t);
          return U.__wrap(e);
        }
        rbLocalCom(t) {
          const e = IM(this.ptr, t);
          return U.__wrap(e);
        }
        rbWorldCom(t) {
          const e = DM(this.ptr, t);
          return U.__wrap(e);
        }
        rbInvPrincipalInertiaSqrt(t) {
          const e = UM(this.ptr, t);
          return U.__wrap(e);
        }
        rbPrincipalInertiaLocalFrame(t) {
          const e = NM(this.ptr, t);
          return Kt.__wrap(e);
        }
        rbPrincipalInertia(t) {
          const e = FM(this.ptr, t);
          return U.__wrap(e);
        }
        rbEffectiveWorldInvInertiaSqrt(t) {
          const e = OM(this.ptr, t);
          return _o.__wrap(e);
        }
        rbEffectiveAngularInertia(t) {
          const e = BM(this.ptr, t);
          return _o.__wrap(e);
        }
        rbWakeUp(t) {
          zM(this.ptr, t);
        }
        rbIsCcdEnabled(t) {
          return HM(this.ptr, t) !== 0;
        }
        rbNumColliders(t) {
          return GM(this.ptr, t) >>> 0;
        }
        rbCollider(t, e) {
          return kM(this.ptr, t, e);
        }
        rbBodyType(t) {
          return VM(this.ptr, t) >>> 0;
        }
        rbSetBodyType(t, e, n) {
          WM(this.ptr, t, e, n);
        }
        rbIsFixed(t) {
          return jM(this.ptr, t) !== 0;
        }
        rbIsKinematic(t) {
          return XM(this.ptr, t) !== 0;
        }
        rbIsDynamic(t) {
          return qM(this.ptr, t) !== 0;
        }
        rbLinearDamping(t) {
          return YM(this.ptr, t);
        }
        rbAngularDamping(t) {
          return KM(this.ptr, t);
        }
        rbSetLinearDamping(t, e) {
          JM(this.ptr, t, e);
        }
        rbSetAngularDamping(t, e) {
          $M(this.ptr, t, e);
        }
        rbSetEnabled(t, e) {
          ZM(this.ptr, t, e);
        }
        rbIsEnabled(t) {
          return QM(this.ptr, t) !== 0;
        }
        rbGravityScale(t) {
          return tE(this.ptr, t);
        }
        rbSetGravityScale(t, e, n) {
          eE(this.ptr, t, e, n);
        }
        rbResetForces(t, e) {
          nE(this.ptr, t, e);
        }
        rbResetTorques(t, e) {
          iE(this.ptr, t, e);
        }
        rbAddForce(t, e, n) {
          P(e, U), rE(this.ptr, t, e.ptr, n);
        }
        rbApplyImpulse(t, e, n) {
          P(e, U), sE(this.ptr, t, e.ptr, n);
        }
        rbAddTorque(t, e, n) {
          P(e, U), aE(this.ptr, t, e.ptr, n);
        }
        rbApplyTorqueImpulse(t, e, n) {
          P(e, U), oE(this.ptr, t, e.ptr, n);
        }
        rbAddForceAtPoint(t, e, n, i) {
          P(e, U), P(n, U), cE(this.ptr, t, e.ptr, n.ptr, i);
        }
        rbApplyImpulseAtPoint(t, e, n, i) {
          P(e, U), P(n, U), lE(this.ptr, t, e.ptr, n.ptr, i);
        }
        rbUserData(t) {
          return hE(this.ptr, t) >>> 0;
        }
        rbSetUserData(t, e) {
          uE(this.ptr, t, e);
        }
        constructor() {
          const t = fE();
          return Te.__wrap(t);
        }
        createRigidBody(t, e, n, i, s, a, o, c, l, h, u, d, p, _, w, m, f, b, v, R, I, y, A, B) {
          return P(e, U), P(n, Kt), P(o, U), P(c, U), P(l, U), P(h, U), P(u, Kt), pE(this.ptr, t, e.ptr, n.ptr, i, s, a, o.ptr, c.ptr, l.ptr, h.ptr, u.ptr, d, p, _, w, m, f, b, v, R, I, y, A, B);
        }
        remove(t, e, n, i, s) {
          P(e, Zn), P(n, ye), P(i, $n), P(s, Qn), mE(this.ptr, t, e.ptr, n.ptr, i.ptr, s.ptr);
        }
        len() {
          return _E(this.ptr) >>> 0;
        }
        contains(t) {
          return gE(this.ptr, t) !== 0;
        }
        forEachRigidBodyHandle(t) {
          try {
            wE(this.ptr, we(t));
          } finally {
            ee[pe++] = void 0;
          }
        }
        propagateModifiedBodyPositionsToColliders(t) {
          P(t, ye), vE(this.ptr, t.ptr);
        }
      }
      class Kt {
        static __wrap(t) {
          const e = Object.create(Kt.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          mC(t);
        }
        constructor(t, e, n, i) {
          const s = hR(t, e, n, i);
          return Kt.__wrap(s);
        }
        static identity() {
          const t = uR();
          return Kt.__wrap(t);
        }
        get x() {
          return Ho(this.ptr);
        }
        get y() {
          return Vf(this.ptr);
        }
        get z() {
          return xr(this.ptr);
        }
        get w() {
          return dR(this.ptr);
        }
      }
      class _o {
        static __wrap(t) {
          const e = Object.create(_o.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          gC(t);
        }
        elements() {
          const t = SR(this.ptr);
          return js(t);
        }
      }
      class go {
        static __wrap(t) {
          const e = Object.create(go.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          vC(t);
        }
        constructor() {
          const t = wC();
          return go.__wrap(t);
        }
        serializeAll(t, e, n, i, s, a, o, c, l) {
          P(t, U), P(e, Xi), P(n, Zn), P(i, ji), P(s, Si), P(a, Te), P(o, ye), P(c, $n), P(l, Qn);
          const h = uC(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o.ptr, c.ptr, l.ptr);
          return js(h);
        }
        deserializeAll(t) {
          const e = dC(this.ptr, Le(t));
          return e === 0 ? void 0 : Xl.__wrap(e);
        }
      }
      class St {
        static __wrap(t) {
          const e = Object.create(St.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          PA(t);
        }
        static cuboid(t, e, n) {
          const i = LA(t, e, n);
          return St.__wrap(i);
        }
        static roundCuboid(t, e, n, i) {
          const s = IA(t, e, n, i);
          return St.__wrap(s);
        }
        static ball(t) {
          const e = DA(t);
          return St.__wrap(e);
        }
        static halfspace(t) {
          P(t, U);
          const e = UA(t.ptr);
          return St.__wrap(e);
        }
        static capsule(t, e) {
          const n = NA(t, e);
          return St.__wrap(n);
        }
        static cylinder(t, e) {
          const n = FA(t, e);
          return St.__wrap(n);
        }
        static roundCylinder(t, e, n) {
          const i = OA(t, e, n);
          return St.__wrap(i);
        }
        static cone(t, e) {
          const n = BA(t, e);
          return St.__wrap(n);
        }
        static roundCone(t, e, n) {
          const i = zA(t, e, n);
          return St.__wrap(i);
        }
        static polyline(t, e) {
          const n = nr(t, Dn), i = mn, s = Ga(e, Dn), o = HA(n, i, s, mn);
          return St.__wrap(o);
        }
        static trimesh(t, e) {
          const n = nr(t, Dn), i = mn, s = Ga(e, Dn), o = GA(n, i, s, mn);
          return St.__wrap(o);
        }
        static heightfield(t, e, n, i) {
          const s = nr(n, Dn), a = mn;
          P(i, U);
          const o = kA(t, e, s, a, i.ptr);
          return St.__wrap(o);
        }
        static segment(t, e) {
          P(t, U), P(e, U);
          const n = VA(t.ptr, e.ptr);
          return St.__wrap(n);
        }
        static triangle(t, e, n) {
          P(t, U), P(e, U), P(n, U);
          const i = WA(t.ptr, e.ptr, n.ptr);
          return St.__wrap(i);
        }
        static roundTriangle(t, e, n, i) {
          P(t, U), P(e, U), P(n, U);
          const s = jA(t.ptr, e.ptr, n.ptr, i);
          return St.__wrap(s);
        }
        static convexHull(t) {
          const e = nr(t, Dn), i = XA(e, mn);
          return i === 0 ? void 0 : St.__wrap(i);
        }
        static roundConvexHull(t, e) {
          const n = nr(t, Dn), s = qA(n, mn, e);
          return s === 0 ? void 0 : St.__wrap(s);
        }
        static convexMesh(t, e) {
          const n = nr(t, Dn), i = mn, s = Ga(e, Dn), o = YA(n, i, s, mn);
          return o === 0 ? void 0 : St.__wrap(o);
        }
        static roundConvexMesh(t, e, n) {
          const i = nr(t, Dn), s = mn, a = Ga(e, Dn), c = KA(i, s, a, mn, n);
          return c === 0 ? void 0 : St.__wrap(c);
        }
        castShape(t, e, n, i, s, a, o, c, l) {
          P(t, U), P(e, Kt), P(n, U), P(i, St), P(s, U), P(a, Kt), P(o, U);
          const h = JA(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a.ptr, o.ptr, c, l);
          return h === 0 ? void 0 : Oo.__wrap(h);
        }
        intersectsShape(t, e, n, i, s) {
          return P(t, U), P(e, Kt), P(n, St), P(i, U), P(s, Kt), $A(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr) !== 0;
        }
        contactShape(t, e, n, i, s, a) {
          P(t, U), P(e, Kt), P(n, St), P(i, U), P(s, Kt);
          const o = ZA(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s.ptr, a);
          return o === 0 ? void 0 : Ys.__wrap(o);
        }
        containsPoint(t, e, n) {
          return P(t, U), P(e, Kt), P(n, U), QA(this.ptr, t.ptr, e.ptr, n.ptr) !== 0;
        }
        projectPoint(t, e, n, i) {
          P(t, U), P(e, Kt), P(n, U);
          const s = tR(this.ptr, t.ptr, e.ptr, n.ptr, i);
          return Do.__wrap(s);
        }
        intersectsRay(t, e, n, i, s) {
          return P(t, U), P(e, Kt), P(n, U), P(i, U), eR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s) !== 0;
        }
        castRay(t, e, n, i, s, a) {
          return P(t, U), P(e, Kt), P(n, U), P(i, U), nR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s, a);
        }
        castRayAndGetNormal(t, e, n, i, s, a) {
          P(t, U), P(e, Kt), P(n, U), P(i, U);
          const o = iR(this.ptr, t.ptr, e.ptr, n.ptr, i.ptr, s, a);
          return o === 0 ? void 0 : No.__wrap(o);
        }
      }
      class Fo {
        static __wrap(t) {
          const e = Object.create(Fo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          cR(t);
        }
        colliderHandle() {
          return ta(this.ptr);
        }
        toi() {
          return xr(this.ptr);
        }
        witness1() {
          const t = zo(this.ptr);
          return U.__wrap(t);
        }
        witness2() {
          const t = kf(this.ptr);
          return U.__wrap(t);
        }
        normal1() {
          const t = Kl(this.ptr);
          return U.__wrap(t);
        }
        normal2() {
          const t = lR(this.ptr);
          return U.__wrap(t);
        }
      }
      class Ys {
        static __wrap(t) {
          const e = Object.create(Ys.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          BT(t);
        }
        distance() {
          return zT(this.ptr);
        }
        point1() {
          const t = Bo(this.ptr);
          return U.__wrap(t);
        }
        point2() {
          const t = zo(this.ptr);
          return U.__wrap(t);
        }
        normal1() {
          const t = kf(this.ptr);
          return U.__wrap(t);
        }
        normal2() {
          const t = Kl(this.ptr);
          return U.__wrap(t);
        }
      }
      class Oo {
        static __wrap(t) {
          const e = Object.create(Oo.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          rR(t);
        }
        toi() {
          return Ho(this.ptr);
        }
        witness1() {
          const t = sR(this.ptr);
          return U.__wrap(t);
        }
        witness2() {
          const t = Wf(this.ptr);
          return U.__wrap(t);
        }
        normal1() {
          const t = aR(this.ptr);
          return U.__wrap(t);
        }
        normal2() {
          const t = oR(this.ptr);
          return U.__wrap(t);
        }
      }
      class U {
        static __wrap(t) {
          const e = Object.create(U.prototype);
          return e.ptr = t, e;
        }
        __destroy_into_raw() {
          const t = this.ptr;
          return this.ptr = 0, t;
        }
        free() {
          const t = this.__destroy_into_raw();
          _C(t);
        }
        static zero() {
          const t = fR();
          return U.__wrap(t);
        }
        constructor(t, e, n) {
          const i = pR(t, e, n);
          return U.__wrap(i);
        }
        get x() {
          return Ho(this.ptr);
        }
        set x(t) {
          Hf(this.ptr, t);
        }
        get y() {
          return Vf(this.ptr);
        }
        set y(t) {
          mR(this.ptr, t);
        }
        get z() {
          return xr(this.ptr);
        }
        set z(t) {
          Gf(this.ptr, t);
        }
        xyz() {
          const t = _R(this.ptr);
          return U.__wrap(t);
        }
        yxz() {
          const t = gR(this.ptr);
          return U.__wrap(t);
        }
        zxy() {
          const t = wR(this.ptr);
          return U.__wrap(t);
        }
        xzy() {
          const t = vR(this.ptr);
          return U.__wrap(t);
        }
        yzx() {
          const t = yR(this.ptr);
          return U.__wrap(t);
        }
        zyx() {
          const t = xR(this.ptr);
          return U.__wrap(t);
        }
      }
      function Vx(r) {
        js(r);
      }
      function Wx(r) {
        return Le(r);
      }
      function jx(r, t) {
        const e = re(t), n = typeof e == "number" ? e : void 0;
        lo()[r / 8 + 1] = gt(n) ? 0 : n, fe()[r / 4 + 0] = !gt(n);
      }
      function Xx(r) {
        const t = re(r);
        return typeof t == "boolean" ? t ? 1 : 0 : 2;
      }
      function qx(r) {
        return typeof re(r) == "function";
      }
      function Yx(r) {
        const t = Uo.__wrap(r);
        return Le(t);
      }
      function Kx(r) {
        const t = Vl.__wrap(r);
        return Le(t);
      }
      function Jx() {
        return kl(function(r, t, e) {
          const n = re(r).call(re(t), re(e));
          return Le(n);
        }, arguments);
      }
      function $x() {
        return kl(function(r, t, e, n) {
          const i = re(r).call(re(t), re(e), re(n));
          return Le(i);
        }, arguments);
      }
      function Zx() {
        return kl(function(r, t, e, n, i) {
          const s = re(r).call(re(t), re(e), re(n), re(i));
          return Le(s);
        }, arguments);
      }
      function Qx(r, t, e, n) {
        const i = re(r).bind(re(t), re(e), re(n));
        return Le(i);
      }
      function tS(r) {
        const t = re(r).buffer;
        return Le(t);
      }
      function eS(r, t, e) {
        const n = new Uint8Array(re(r), t >>> 0, e >>> 0);
        return Le(n);
      }
      function nS(r) {
        const t = new Uint8Array(re(r));
        return Le(t);
      }
      function iS(r, t, e) {
        re(r).set(re(t), e >>> 0);
      }
      function rS(r) {
        return re(r).length;
      }
      function sS(r, t, e) {
        const n = new Float32Array(re(r), t >>> 0, e >>> 0);
        return Le(n);
      }
      function aS(r, t, e) {
        re(r).set(re(t), e >>> 0);
      }
      function oS(r) {
        return re(r).length;
      }
      function cS(r) {
        const t = new Float32Array(r >>> 0);
        return Le(t);
      }
      function lS(r, t) {
        throw new Error(Gx(r, t));
      }
      function hS() {
        return Le(xs);
      }
      URL = globalThis.URL;
      const g = await Ox({
        "./rapier_wasm3d_bg.js": {
          __wbindgen_object_drop_ref: Vx,
          __wbindgen_number_new: Wx,
          __wbindgen_number_get: jx,
          __wbindgen_boolean_get: Xx,
          __wbindgen_is_function: qx,
          __wbg_rawraycolliderintersection_new: Yx,
          __wbg_rawcontactforceevent_new: Kx,
          __wbg_call_168da88779e35f61: Jx,
          __wbg_call_3999bee59e9f7719: $x,
          __wbg_call_e1f72c051cdab859: Zx,
          __wbg_bind_10dfe70e95d2a480: Qx,
          __wbg_buffer_3f3d764d4747d564: tS,
          __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: eS,
          __wbg_new_8c3f0052272a457a: nS,
          __wbg_set_83db9690f9353e79: iS,
          __wbg_length_9e1ae1900cb0fbd5: rS,
          __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4: sS,
          __wbg_set_0e0314cf6675c1b9: aS,
          __wbg_length_9a2deed95d22668d: oS,
          __wbg_newwithlength_a7168e4a1e8f5e12: cS,
          __wbindgen_throw: lS,
          __wbindgen_memory: hS
        }
      }, Fx), xs = g.memory;
      g.version;
      const uS = g.__wbg_rawkinematiccharactercontroller_free, dS = g.rawkinematiccharactercontroller_new, fS = g.rawkinematiccharactercontroller_up, pS = g.rawkinematiccharactercontroller_setUp, mS = g.rawkinematiccharactercontroller_offset, _S = g.rawkinematiccharactercontroller_setOffset, gS = g.rawkinematiccharactercontroller_slideEnabled, wS = g.rawkinematiccharactercontroller_setSlideEnabled, vS = g.rawkinematiccharactercontroller_autostepMaxHeight, yS = g.rawkinematiccharactercontroller_autostepMinWidth, xS = g.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, SS = g.rawkinematiccharactercontroller_autostepEnabled, bS = g.rawkinematiccharactercontroller_enableAutostep, MS = g.rawkinematiccharactercontroller_disableAutostep, ES = g.rawkinematiccharactercontroller_maxSlopeClimbAngle, TS = g.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, AS = g.rawkinematiccharactercontroller_minSlopeSlideAngle, RS = g.rawkinematiccharactercontroller_setMinSlopeSlideAngle, CS = g.rawkinematiccharactercontroller_snapToGroundDistance, PS = g.rawkinematiccharactercontroller_enableSnapToGround, LS = g.rawkinematiccharactercontroller_disableSnapToGround, IS = g.rawkinematiccharactercontroller_snapToGroundEnabled, DS = g.rawkinematiccharactercontroller_computeColliderMovement, Bo = g.rawkinematiccharactercontroller_computedMovement, Yl = g.rawkinematiccharactercontroller_computedGrounded, US = g.rawkinematiccharactercontroller_numComputedCollisions, NS = g.rawkinematiccharactercontroller_computedCollision, FS = g.__wbg_rawcharactercollision_free, OS = g.rawcharactercollision_new, ta = g.rawcharactercollision_handle, BS = g.rawcharactercollision_translationApplied, zS = g.rawcharactercollision_translationRemaining, xr = g.rawcharactercollision_toi, zo = g.rawcharactercollision_worldWitness1, HS = g.rawcharactercollision_worldWitness2, Kl = g.rawcharactercollision_worldNormal1, GS = g.rawcharactercollision_worldNormal2, kS = g.__wbg_rawccdsolver_free, VS = g.rawccdsolver_new, WS = g.rawimpulsejointset_jointType, jS = g.rawimpulsejointset_jointBodyHandle1, XS = g.rawimpulsejointset_jointBodyHandle2, qS = g.rawimpulsejointset_jointFrameX1, YS = g.rawimpulsejointset_jointFrameX2, KS = g.rawimpulsejointset_jointAnchor1, JS = g.rawimpulsejointset_jointAnchor2, $S = g.rawimpulsejointset_jointSetAnchor1, ZS = g.rawimpulsejointset_jointSetAnchor2, QS = g.rawimpulsejointset_jointContactsEnabled, tb = g.rawimpulsejointset_jointSetContactsEnabled, eb = g.rawimpulsejointset_jointLimitsEnabled, nb = g.rawimpulsejointset_jointLimitsMin, ib = g.rawimpulsejointset_jointLimitsMax, rb = g.rawimpulsejointset_jointSetLimits, sb = g.rawimpulsejointset_jointConfigureMotorModel, ab = g.rawimpulsejointset_jointConfigureMotorVelocity, ob = g.rawimpulsejointset_jointConfigureMotorPosition, cb = g.rawimpulsejointset_jointConfigureMotor, lb = g.__wbg_rawimpulsejointset_free, hb = g.rawimpulsejointset_new, ub = g.rawimpulsejointset_createJoint, db = g.rawimpulsejointset_remove, fb = g.rawimpulsejointset_len, pb = g.rawimpulsejointset_contains, mb = g.rawimpulsejointset_forEachJointHandle, _b = g.rawimpulsejointset_forEachJointAttachedToRigidBody, gb = g.__wbg_rawintegrationparameters_free, wb = g.rawintegrationparameters_new, Ho = g.rawintegrationparameters_dt, vb = g.rawintegrationparameters_allowedLinearError, yb = g.rawintegrationparameters_predictionDistance, xb = g.rawintegrationparameters_maxVelocityIterations, Sb = g.rawintegrationparameters_maxVelocityFrictionIterations, bb = g.rawintegrationparameters_maxStabilizationIterations, Mb = g.rawintegrationparameters_minIslandSize, Eb = g.rawintegrationparameters_maxCcdSubsteps, Hf = g.rawintegrationparameters_set_dt, Gf = g.rawintegrationparameters_set_erp, Tb = g.rawintegrationparameters_set_allowedLinearError, Ab = g.rawintegrationparameters_set_predictionDistance, Rb = g.rawintegrationparameters_set_maxVelocityIterations, Cb = g.rawintegrationparameters_set_maxVelocityFrictionIterations, Pb = g.rawintegrationparameters_set_maxStabilizationIterations, Lb = g.rawintegrationparameters_set_minIslandSize, Ib = g.rawintegrationparameters_set_maxCcdSubsteps, Db = g.__wbg_rawislandmanager_free, Ub = g.rawislandmanager_new, Nb = g.rawislandmanager_forEachActiveRigidBodyHandle, Fb = g.__wbg_rawgenericjoint_free, Ob = g.rawgenericjoint_spherical, Bb = g.rawgenericjoint_prismatic, zb = g.rawgenericjoint_fixed, Hb = g.rawgenericjoint_revolute, Gb = g.rawmultibodyjointset_jointType, kb = g.rawmultibodyjointset_jointFrameX1, Vb = g.rawmultibodyjointset_jointFrameX2, Wb = g.rawmultibodyjointset_jointAnchor1, jb = g.rawmultibodyjointset_jointAnchor2, Xb = g.rawmultibodyjointset_jointContactsEnabled, qb = g.rawmultibodyjointset_jointSetContactsEnabled, Yb = g.rawmultibodyjointset_jointLimitsEnabled, Kb = g.rawmultibodyjointset_jointLimitsMin, Jb = g.rawmultibodyjointset_jointLimitsMax, $b = g.__wbg_rawmultibodyjointset_free, Zb = g.rawmultibodyjointset_new, Qb = g.rawmultibodyjointset_createJoint, tM = g.rawmultibodyjointset_remove, eM = g.rawmultibodyjointset_contains, nM = g.rawmultibodyjointset_forEachJointHandle, iM = g.rawmultibodyjointset_forEachJointAttachedToRigidBody, rM = g.rawrigidbodyset_rbTranslation, sM = g.rawrigidbodyset_rbRotation, aM = g.rawrigidbodyset_rbSleep, oM = g.rawrigidbodyset_rbIsSleeping, cM = g.rawrigidbodyset_rbIsMoving, lM = g.rawrigidbodyset_rbNextTranslation, hM = g.rawrigidbodyset_rbNextRotation, uM = g.rawrigidbodyset_rbSetTranslation, dM = g.rawrigidbodyset_rbSetRotation, fM = g.rawrigidbodyset_rbSetLinvel, pM = g.rawrigidbodyset_rbSetAngvel, mM = g.rawrigidbodyset_rbSetNextKinematicTranslation, _M = g.rawrigidbodyset_rbSetNextKinematicRotation, gM = g.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, wM = g.rawrigidbodyset_rbSetAdditionalMass, vM = g.rawrigidbodyset_rbSetAdditionalMassProperties, yM = g.rawrigidbodyset_rbLinvel, xM = g.rawrigidbodyset_rbAngvel, SM = g.rawrigidbodyset_rbLockTranslations, bM = g.rawrigidbodyset_rbSetEnabledTranslations, MM = g.rawrigidbodyset_rbLockRotations, EM = g.rawrigidbodyset_rbSetEnabledRotations, TM = g.rawrigidbodyset_rbDominanceGroup, AM = g.rawrigidbodyset_rbSetDominanceGroup, RM = g.rawrigidbodyset_rbEnableCcd, CM = g.rawrigidbodyset_rbMass, PM = g.rawrigidbodyset_rbInvMass, LM = g.rawrigidbodyset_rbEffectiveInvMass, IM = g.rawrigidbodyset_rbLocalCom, DM = g.rawrigidbodyset_rbWorldCom, UM = g.rawrigidbodyset_rbInvPrincipalInertiaSqrt, NM = g.rawrigidbodyset_rbPrincipalInertiaLocalFrame, FM = g.rawrigidbodyset_rbPrincipalInertia, OM = g.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt, BM = g.rawrigidbodyset_rbEffectiveAngularInertia, zM = g.rawrigidbodyset_rbWakeUp, HM = g.rawrigidbodyset_rbIsCcdEnabled, GM = g.rawrigidbodyset_rbNumColliders, kM = g.rawrigidbodyset_rbCollider, VM = g.rawrigidbodyset_rbBodyType, WM = g.rawrigidbodyset_rbSetBodyType, jM = g.rawrigidbodyset_rbIsFixed, XM = g.rawrigidbodyset_rbIsKinematic, qM = g.rawrigidbodyset_rbIsDynamic, YM = g.rawrigidbodyset_rbLinearDamping, KM = g.rawrigidbodyset_rbAngularDamping, JM = g.rawrigidbodyset_rbSetLinearDamping, $M = g.rawrigidbodyset_rbSetAngularDamping, ZM = g.rawrigidbodyset_rbSetEnabled, QM = g.rawrigidbodyset_rbIsEnabled, tE = g.rawrigidbodyset_rbGravityScale, eE = g.rawrigidbodyset_rbSetGravityScale, nE = g.rawrigidbodyset_rbResetForces, iE = g.rawrigidbodyset_rbResetTorques, rE = g.rawrigidbodyset_rbAddForce, sE = g.rawrigidbodyset_rbApplyImpulse, aE = g.rawrigidbodyset_rbAddTorque, oE = g.rawrigidbodyset_rbApplyTorqueImpulse, cE = g.rawrigidbodyset_rbAddForceAtPoint, lE = g.rawrigidbodyset_rbApplyImpulseAtPoint, hE = g.rawrigidbodyset_rbUserData, uE = g.rawrigidbodyset_rbSetUserData, dE = g.__wbg_rawrigidbodyset_free, fE = g.rawrigidbodyset_new, pE = g.rawrigidbodyset_createRigidBody, mE = g.rawrigidbodyset_remove, _E = g.rawrigidbodyset_len, gE = g.rawrigidbodyset_contains, wE = g.rawrigidbodyset_forEachRigidBodyHandle, vE = g.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, yE = g.__wbg_rawbroadphase_free, xE = g.rawbroadphase_new, SE = g.rawcolliderset_coTranslation, bE = g.rawcolliderset_coRotation, ME = g.rawcolliderset_coSetTranslation, EE = g.rawcolliderset_coSetTranslationWrtParent, TE = g.rawcolliderset_coSetRotation, AE = g.rawcolliderset_coSetRotationWrtParent, RE = g.rawcolliderset_coIsSensor, CE = g.rawcolliderset_coShapeType, PE = g.rawcolliderset_coHalfspaceNormal, LE = g.rawcolliderset_coHalfExtents, IE = g.rawcolliderset_coSetHalfExtents, DE = g.rawcolliderset_coRadius, UE = g.rawcolliderset_coSetRadius, NE = g.rawcolliderset_coHalfHeight, FE = g.rawcolliderset_coSetHalfHeight, OE = g.rawcolliderset_coRoundRadius, BE = g.rawcolliderset_coSetRoundRadius, zE = g.rawcolliderset_coVertices, HE = g.rawcolliderset_coIndices, GE = g.rawcolliderset_coHeightfieldHeights, kE = g.rawcolliderset_coHeightfieldScale, VE = g.rawcolliderset_coHeightfieldNRows, WE = g.rawcolliderset_coHeightfieldNCols, jE = g.rawcolliderset_coParent, XE = g.rawcolliderset_coSetEnabled, qE = g.rawcolliderset_coIsEnabled, YE = g.rawcolliderset_coFriction, KE = g.rawcolliderset_coRestitution, JE = g.rawcolliderset_coDensity, $E = g.rawcolliderset_coMass, ZE = g.rawcolliderset_coVolume, QE = g.rawcolliderset_coCollisionGroups, tT = g.rawcolliderset_coSolverGroups, eT = g.rawcolliderset_coActiveHooks, nT = g.rawcolliderset_coActiveCollisionTypes, iT = g.rawcolliderset_coActiveEvents, rT = g.rawcolliderset_coContactForceEventThreshold, sT = g.rawcolliderset_coContainsPoint, aT = g.rawcolliderset_coCastShape, oT = g.rawcolliderset_coCastCollider, cT = g.rawcolliderset_coIntersectsShape, lT = g.rawcolliderset_coContactShape, hT = g.rawcolliderset_coContactCollider, uT = g.rawcolliderset_coProjectPoint, dT = g.rawcolliderset_coIntersectsRay, fT = g.rawcolliderset_coCastRay, pT = g.rawcolliderset_coCastRayAndGetNormal, mT = g.rawcolliderset_coSetSensor, _T = g.rawcolliderset_coSetRestitution, gT = g.rawcolliderset_coSetFriction, wT = g.rawcolliderset_coFrictionCombineRule, vT = g.rawcolliderset_coSetFrictionCombineRule, yT = g.rawcolliderset_coRestitutionCombineRule, xT = g.rawcolliderset_coSetRestitutionCombineRule, ST = g.rawcolliderset_coSetCollisionGroups, bT = g.rawcolliderset_coSetSolverGroups, MT = g.rawcolliderset_coSetActiveHooks, ET = g.rawcolliderset_coSetActiveEvents, TT = g.rawcolliderset_coSetActiveCollisionTypes, AT = g.rawcolliderset_coSetShape, RT = g.rawcolliderset_coSetContactForceEventThreshold, CT = g.rawcolliderset_coSetDensity, PT = g.rawcolliderset_coSetMass, LT = g.rawcolliderset_coSetMassProperties, IT = g.__wbg_rawcolliderset_free, DT = g.rawcolliderset_new, UT = g.rawcolliderset_len, Sd = g.rawcolliderset_contains, NT = g.rawcolliderset_createCollider, FT = g.rawcolliderset_remove, OT = g.rawcolliderset_forEachColliderHandle, BT = g.__wbg_rawshapecontact_free, zT = g.rawshapecontact_distance, HT = g.__wbg_rawnarrowphase_free, GT = g.rawnarrowphase_new, kT = g.rawnarrowphase_contacts_with, VT = g.rawnarrowphase_contact_pair, WT = g.rawnarrowphase_intersections_with, jT = g.rawnarrowphase_intersection_pair, XT = g.__wbg_rawcontactmanifold_free, qT = g.rawcontactpair_collider1, YT = g.rawcontactpair_collider2, KT = g.rawcontactpair_numContactManifolds, JT = g.rawcontactpair_contactManifold, $T = g.rawcontactmanifold_normal, ZT = g.rawcontactmanifold_local_n1, QT = g.rawcontactmanifold_local_n2, tA = g.rawcontactmanifold_subshape1, eA = g.rawcontactmanifold_subshape2, nA = g.rawcontactmanifold_num_contacts, iA = g.rawcontactmanifold_contact_local_p1, rA = g.rawcontactmanifold_contact_local_p2, sA = g.rawcontactmanifold_contact_dist, aA = g.rawcontactmanifold_contact_fid1, oA = g.rawcontactmanifold_contact_fid2, cA = g.rawcontactmanifold_contact_impulse, lA = g.rawcontactmanifold_contact_tangent_impulse_x, hA = g.rawcontactmanifold_contact_tangent_impulse_y, uA = g.rawcontactmanifold_num_solver_contacts, dA = g.rawcontactmanifold_solver_contact_point, fA = g.rawcontactmanifold_solver_contact_dist, pA = g.rawcontactmanifold_solver_contact_friction, mA = g.rawcontactmanifold_solver_contact_restitution, _A = g.rawcontactmanifold_solver_contact_tangent_velocity, gA = g.__wbg_rawpointprojection_free, wA = g.__wbg_rawpointcolliderprojection_free, vA = g.rawpointcolliderprojection_colliderHandle, yA = g.rawpointcolliderprojection_featureType, xA = g.rawpointcolliderprojection_featureId, SA = g.__wbg_rawrayintersection_free, bA = g.rawrayintersection_featureType, MA = g.rawrayintersection_featureId, EA = g.rawraycolliderintersection_normal, TA = g.rawraycolliderintersection_toi, AA = g.rawraycolliderintersection_featureType, RA = g.rawraycolliderintersection_featureId, CA = g.__wbg_rawraycollidertoi_free, PA = g.__wbg_rawshape_free, LA = g.rawshape_cuboid, IA = g.rawshape_roundCuboid, DA = g.rawshape_ball, UA = g.rawshape_halfspace, NA = g.rawshape_capsule, FA = g.rawshape_cylinder, OA = g.rawshape_roundCylinder, BA = g.rawshape_cone, zA = g.rawshape_roundCone, HA = g.rawshape_polyline, GA = g.rawshape_trimesh, kA = g.rawshape_heightfield, VA = g.rawshape_segment, WA = g.rawshape_triangle, jA = g.rawshape_roundTriangle, XA = g.rawshape_convexHull, qA = g.rawshape_roundConvexHull, YA = g.rawshape_convexMesh, KA = g.rawshape_roundConvexMesh, JA = g.rawshape_castShape, $A = g.rawshape_intersectsShape, ZA = g.rawshape_contactShape, QA = g.rawshape_containsPoint, tR = g.rawshape_projectPoint, eR = g.rawshape_intersectsRay, nR = g.rawshape_castRay, iR = g.rawshape_castRayAndGetNormal, rR = g.__wbg_rawshapetoi_free, sR = g.rawshapetoi_witness1, aR = g.rawshapetoi_normal1, oR = g.rawshapetoi_normal2, cR = g.__wbg_rawshapecollidertoi_free, kf = g.rawshapecollidertoi_witness2, lR = g.rawshapecollidertoi_normal2, hR = g.rawrotation_new, uR = g.rawrotation_identity, Vf = g.rawrotation_y, dR = g.rawrotation_w, fR = g.rawvector_zero, pR = g.rawvector_new, mR = g.rawvector_set_y, _R = g.rawvector_xyz, gR = g.rawvector_yxz, wR = g.rawvector_zxy, vR = g.rawvector_xzy, yR = g.rawvector_yzx, xR = g.rawvector_zyx, SR = g.rawsdpmatrix3_elements, bR = g.__wbg_rawdebugrenderpipeline_free, MR = g.rawdebugrenderpipeline_new, ER = g.rawdebugrenderpipeline_vertices, TR = g.rawdebugrenderpipeline_colors, AR = g.rawdebugrenderpipeline_render, RR = g.__wbg_raweventqueue_free, CR = g.__wbg_rawcontactforceevent_free, PR = g.rawcontactforceevent_collider2, Wf = g.rawcontactforceevent_total_force, LR = g.rawcontactforceevent_total_force_magnitude, IR = g.rawcontactforceevent_max_force_direction, DR = g.rawcontactforceevent_max_force_magnitude, UR = g.raweventqueue_new, NR = g.raweventqueue_drainCollisionEvents, FR = g.raweventqueue_drainContactForceEvents, OR = g.raweventqueue_clear, BR = g.__wbg_rawphysicspipeline_free, zR = g.rawphysicspipeline_new, HR = g.rawphysicspipeline_step, GR = g.rawphysicspipeline_stepWithEvents, kR = g.__wbg_rawquerypipeline_free, VR = g.rawquerypipeline_new, WR = g.rawquerypipeline_update, jR = g.rawquerypipeline_castRay, XR = g.rawquerypipeline_castRayAndGetNormal, qR = g.rawquerypipeline_intersectionsWithRay, YR = g.rawquerypipeline_intersectionWithShape, KR = g.rawquerypipeline_projectPoint, JR = g.rawquerypipeline_projectPointAndGetFeature, $R = g.rawquerypipeline_intersectionsWithPoint, ZR = g.rawquerypipeline_castShape, QR = g.rawquerypipeline_intersectionsWithShape, tC = g.rawquerypipeline_collidersWithAabbIntersectingAabb, eC = g.__wbg_rawdeserializedworld_free, nC = g.rawdeserializedworld_takeGravity, iC = g.rawdeserializedworld_takeIntegrationParameters, rC = g.rawdeserializedworld_takeIslandManager, sC = g.rawdeserializedworld_takeBroadPhase, aC = g.rawdeserializedworld_takeNarrowPhase, oC = g.rawdeserializedworld_takeBodies, cC = g.rawdeserializedworld_takeColliders, lC = g.rawdeserializedworld_takeImpulseJoints, hC = g.rawdeserializedworld_takeMultibodyJoints, uC = g.rawserializationpipeline_serializeAll, dC = g.rawserializationpipeline_deserializeAll, fC = g.__wbg_rawcontactpair_free, pC = g.__wbg_rawraycolliderintersection_free, mC = g.__wbg_rawrotation_free, _C = g.__wbg_rawvector_free, gC = g.__wbg_rawsdpmatrix3_free;
      g.rawvector_set_x;
      g.rawvector_set_z;
      g.rawpointprojection_isInside;
      g.rawpointcolliderprojection_isInside;
      g.rawcolliderset_isHandleValid;
      g.rawshapecontact_point1;
      g.rawshapecontact_point2;
      g.rawshapecontact_normal2;
      g.rawpointprojection_point;
      g.rawpointcolliderprojection_point;
      g.rawrayintersection_normal;
      g.rawshapecollidertoi_witness1;
      g.rawshapecontact_normal1;
      g.rawshapecollidertoi_normal1;
      g.rawshapetoi_witness2;
      const wC = g.rawserializationpipeline_new;
      g.rawintegrationparameters_erp;
      g.rawrayintersection_toi;
      g.rawraycollidertoi_toi;
      g.rawshapetoi_toi;
      g.rawshapecollidertoi_toi;
      g.rawrotation_x;
      g.rawrotation_z;
      g.rawvector_x;
      g.rawvector_y;
      g.rawvector_z;
      g.rawraycolliderintersection_colliderHandle;
      g.rawraycollidertoi_colliderHandle;
      g.rawshapecollidertoi_colliderHandle;
      g.rawcontactforceevent_collider1;
      const vC = g.__wbg_rawserializationpipeline_free, te = g.__wbindgen_add_to_stack_pointer, Hc = g.__wbindgen_free, Dn = g.__wbindgen_malloc, yC = g.__wbindgen_exn_store;
      class jf {
        constructor(t, e, n) {
          this.x = t, this.y = e, this.z = n;
        }
      }
      class N {
        static new(t, e, n) {
          return new jf(t, e, n);
        }
        static intoRaw(t) {
          return new U(t.x, t.y, t.z);
        }
        static zeros() {
          return N.new(0, 0, 0);
        }
        static fromRaw(t) {
          if (!t) return null;
          let e = N.new(t.x, t.y, t.z);
          return t.free(), e;
        }
        static copy(t, e) {
          t.x = e.x, t.y = e.y, t.z = e.z;
        }
      }
      class ml {
        constructor(t, e, n, i) {
          this.x = t, this.y = e, this.z = n, this.w = i;
        }
      }
      class Jt {
        static identity() {
          return new ml(0, 0, 0, 1);
        }
        static fromRaw(t) {
          if (!t) return null;
          let e = new ml(t.x, t.y, t.z, t.w);
          return t.free(), e;
        }
        static intoRaw(t) {
          return new Kt(t.x, t.y, t.z, t.w);
        }
        static copy(t, e) {
          t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w;
        }
      }
      class Xf {
        constructor(t) {
          this.elements = t;
        }
        get m11() {
          return this.elements[0];
        }
        get m12() {
          return this.elements[1];
        }
        get m21() {
          return this.m12;
        }
        get m13() {
          return this.elements[2];
        }
        get m31() {
          return this.m13;
        }
        get m22() {
          return this.elements[3];
        }
        get m23() {
          return this.elements[4];
        }
        get m32() {
          return this.m23;
        }
        get m33() {
          return this.elements[5];
        }
      }
      class _l {
        static fromRaw(t) {
          const e = new Xf(t.elements());
          return t.free(), e;
        }
      }
      var Un;
      (function(r) {
        r[r.Dynamic = 0] = "Dynamic", r[r.Fixed = 1] = "Fixed", r[r.KinematicPositionBased = 2] = "KinematicPositionBased", r[r.KinematicVelocityBased = 3] = "KinematicVelocityBased";
      })(Un || (Un = {}));
      class gl {
        constructor(t, e, n) {
          this.rawSet = t, this.colliderSet = e, this.handle = n;
        }
        finalizeDeserialization(t) {
          this.colliderSet = t;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        lockTranslations(t, e) {
          return this.rawSet.rbLockTranslations(this.handle, t, e);
        }
        lockRotations(t, e) {
          return this.rawSet.rbLockRotations(this.handle, t, e);
        }
        setEnabledTranslations(t, e, n, i) {
          return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, n, i);
        }
        restrictTranslations(t, e, n, i) {
          this.setEnabledTranslations(t, e, n, i);
        }
        setEnabledRotations(t, e, n, i) {
          return this.rawSet.rbSetEnabledRotations(this.handle, t, e, n, i);
        }
        restrictRotations(t, e, n, i) {
          this.setEnabledRotations(t, e, n, i);
        }
        dominanceGroup() {
          return this.rawSet.rbDominanceGroup(this.handle);
        }
        setDominanceGroup(t) {
          this.rawSet.rbSetDominanceGroup(this.handle, t);
        }
        enableCcd(t) {
          this.rawSet.rbEnableCcd(this.handle, t);
        }
        translation() {
          let t = this.rawSet.rbTranslation(this.handle);
          return N.fromRaw(t);
        }
        rotation() {
          let t = this.rawSet.rbRotation(this.handle);
          return Jt.fromRaw(t);
        }
        nextTranslation() {
          let t = this.rawSet.rbNextTranslation(this.handle);
          return N.fromRaw(t);
        }
        nextRotation() {
          let t = this.rawSet.rbNextRotation(this.handle);
          return Jt.fromRaw(t);
        }
        setTranslation(t, e) {
          this.rawSet.rbSetTranslation(this.handle, t.x, t.y, t.z, e);
        }
        setLinvel(t, e) {
          let n = N.intoRaw(t);
          this.rawSet.rbSetLinvel(this.handle, n, e), n.free();
        }
        gravityScale() {
          return this.rawSet.rbGravityScale(this.handle);
        }
        setGravityScale(t, e) {
          this.rawSet.rbSetGravityScale(this.handle, t, e);
        }
        setRotation(t, e) {
          this.rawSet.rbSetRotation(this.handle, t.x, t.y, t.z, t.w, e);
        }
        setAngvel(t, e) {
          let n = N.intoRaw(t);
          this.rawSet.rbSetAngvel(this.handle, n, e), n.free();
        }
        setNextKinematicTranslation(t) {
          this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
        }
        setNextKinematicRotation(t) {
          this.rawSet.rbSetNextKinematicRotation(this.handle, t.x, t.y, t.z, t.w);
        }
        linvel() {
          return N.fromRaw(this.rawSet.rbLinvel(this.handle));
        }
        angvel() {
          return N.fromRaw(this.rawSet.rbAngvel(this.handle));
        }
        mass() {
          return this.rawSet.rbMass(this.handle);
        }
        effectiveInvMass() {
          return N.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
        }
        invMass() {
          return this.rawSet.rbInvMass(this.handle);
        }
        localCom() {
          return N.fromRaw(this.rawSet.rbLocalCom(this.handle));
        }
        worldCom() {
          return N.fromRaw(this.rawSet.rbWorldCom(this.handle));
        }
        invPrincipalInertiaSqrt() {
          return N.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
        }
        principalInertia() {
          return N.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
        }
        principalInertiaLocalFrame() {
          return Jt.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
        }
        effectiveWorldInvInertiaSqrt() {
          return _l.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
        }
        effectiveAngularInertia() {
          return _l.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
        }
        sleep() {
          this.rawSet.rbSleep(this.handle);
        }
        wakeUp() {
          this.rawSet.rbWakeUp(this.handle);
        }
        isCcdEnabled() {
          return this.rawSet.rbIsCcdEnabled(this.handle);
        }
        numColliders() {
          return this.rawSet.rbNumColliders(this.handle);
        }
        collider(t) {
          return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
        }
        setEnabled(t) {
          this.rawSet.rbSetEnabled(this.handle, t);
        }
        isEnabled() {
          return this.rawSet.rbIsEnabled(this.handle);
        }
        bodyType() {
          return this.rawSet.rbBodyType(this.handle);
        }
        setBodyType(t, e) {
          return this.rawSet.rbSetBodyType(this.handle, t, e);
        }
        isSleeping() {
          return this.rawSet.rbIsSleeping(this.handle);
        }
        isMoving() {
          return this.rawSet.rbIsMoving(this.handle);
        }
        isFixed() {
          return this.rawSet.rbIsFixed(this.handle);
        }
        isKinematic() {
          return this.rawSet.rbIsKinematic(this.handle);
        }
        isDynamic() {
          return this.rawSet.rbIsDynamic(this.handle);
        }
        linearDamping() {
          return this.rawSet.rbLinearDamping(this.handle);
        }
        angularDamping() {
          return this.rawSet.rbAngularDamping(this.handle);
        }
        setLinearDamping(t) {
          this.rawSet.rbSetLinearDamping(this.handle, t);
        }
        recomputeMassPropertiesFromColliders() {
          this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
        }
        setAdditionalMass(t, e) {
          this.rawSet.rbSetAdditionalMass(this.handle, t, e);
        }
        setAdditionalMassProperties(t, e, n, i, s) {
          let a = N.intoRaw(e), o = N.intoRaw(n), c = Jt.intoRaw(i);
          this.rawSet.rbSetAdditionalMassProperties(this.handle, t, a, o, c, s), a.free(), o.free(), c.free();
        }
        setAngularDamping(t) {
          this.rawSet.rbSetAngularDamping(this.handle, t);
        }
        resetForces(t) {
          this.rawSet.rbResetForces(this.handle, t);
        }
        resetTorques(t) {
          this.rawSet.rbResetTorques(this.handle, t);
        }
        addForce(t, e) {
          const n = N.intoRaw(t);
          this.rawSet.rbAddForce(this.handle, n, e), n.free();
        }
        applyImpulse(t, e) {
          const n = N.intoRaw(t);
          this.rawSet.rbApplyImpulse(this.handle, n, e), n.free();
        }
        addTorque(t, e) {
          const n = N.intoRaw(t);
          this.rawSet.rbAddTorque(this.handle, n, e), n.free();
        }
        applyTorqueImpulse(t, e) {
          const n = N.intoRaw(t);
          this.rawSet.rbApplyTorqueImpulse(this.handle, n, e), n.free();
        }
        addForceAtPoint(t, e, n) {
          const i = N.intoRaw(t), s = N.intoRaw(e);
          this.rawSet.rbAddForceAtPoint(this.handle, i, s, n), i.free(), s.free();
        }
        applyImpulseAtPoint(t, e, n) {
          const i = N.intoRaw(t), s = N.intoRaw(e);
          this.rawSet.rbApplyImpulseAtPoint(this.handle, i, s, n), i.free(), s.free();
        }
      }
      class jn {
        constructor(t) {
          this.enabled = true, this.status = t, this.translation = N.zeros(), this.rotation = Jt.identity(), this.gravityScale = 1, this.linvel = N.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = N.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = N.zeros(), this.principalAngularInertia = N.zeros(), this.angularInertiaLocalFrame = Jt.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.dominanceGroup = 0;
        }
        static dynamic() {
          return new jn(Un.Dynamic);
        }
        static kinematicPositionBased() {
          return new jn(Un.KinematicPositionBased);
        }
        static kinematicVelocityBased() {
          return new jn(Un.KinematicVelocityBased);
        }
        static fixed() {
          return new jn(Un.Fixed);
        }
        static newDynamic() {
          return new jn(Un.Dynamic);
        }
        static newKinematicPositionBased() {
          return new jn(Un.KinematicPositionBased);
        }
        static newKinematicVelocityBased() {
          return new jn(Un.KinematicVelocityBased);
        }
        static newStatic() {
          return new jn(Un.Fixed);
        }
        setDominanceGroup(t) {
          return this.dominanceGroup = t, this;
        }
        setEnabled(t) {
          return this.enabled = t, this;
        }
        setTranslation(t, e, n) {
          if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The translation components must be numbers.");
          return this.translation = {
            x: t,
            y: e,
            z: n
          }, this;
        }
        setRotation(t) {
          return Jt.copy(this.rotation, t), this;
        }
        setGravityScale(t) {
          return this.gravityScale = t, this;
        }
        setAdditionalMass(t) {
          return this.mass = t, this.massOnly = true, this;
        }
        setLinvel(t, e, n) {
          if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The linvel components must be numbers.");
          return this.linvel = {
            x: t,
            y: e,
            z: n
          }, this;
        }
        setAngvel(t) {
          return N.copy(this.angvel, t), this;
        }
        setAdditionalMassProperties(t, e, n, i) {
          return this.mass = t, N.copy(this.centerOfMass, e), N.copy(this.principalAngularInertia, n), Jt.copy(this.angularInertiaLocalFrame, i), this.massOnly = false, this;
        }
        enabledTranslations(t, e, n) {
          return this.translationsEnabledX = t, this.translationsEnabledY = e, this.translationsEnabledZ = n, this;
        }
        restrictTranslations(t, e, n) {
          return this.enabledTranslations(t, e, n);
        }
        lockTranslations() {
          return this.enabledTranslations(false, false, false);
        }
        enabledRotations(t, e, n) {
          return this.rotationsEnabledX = t, this.rotationsEnabledY = e, this.rotationsEnabledZ = n, this;
        }
        restrictRotations(t, e, n) {
          return this.enabledRotations(t, e, n);
        }
        lockRotations() {
          return this.restrictRotations(false, false, false);
        }
        setLinearDamping(t) {
          return this.linearDamping = t, this;
        }
        setAngularDamping(t) {
          return this.angularDamping = t, this;
        }
        setCanSleep(t) {
          return this.canSleep = t, this;
        }
        setSleeping(t) {
          return this.sleeping = t, this;
        }
        setCcdEnabled(t) {
          return this.ccdEnabled = t, this;
        }
        setUserData(t) {
          return this.userData = t, this;
        }
      }
      class Go {
        constructor() {
          this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
        }
        set(t, e) {
          let n = this.index(t);
          for (; this.data.length <= n; ) this.data.push(null);
          this.data[n] == null && (this.size += 1), this.data[n] = e;
        }
        len() {
          return this.size;
        }
        delete(t) {
          let e = this.index(t);
          e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
        }
        clear() {
          this.data = new Array();
        }
        get(t) {
          let e = this.index(t);
          return e < this.data.length ? this.data[e] : null;
        }
        forEach(t) {
          for (const e of this.data) e != null && t(e);
        }
        getAll() {
          return this.data.filter((t) => t != null);
        }
        index(t) {
          return this.fconv[0] = t, this.uconv[0];
        }
      }
      class qf {
        constructor(t) {
          this.raw = t || new Te(), this.map = new Go(), t && t.forEachRigidBodyHandle((e) => {
            this.map.set(e, new gl(t, null, e));
          });
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        finalizeDeserialization(t) {
          this.map.forEach((e) => e.finalizeDeserialization(t));
        }
        createRigidBody(t, e) {
          let n = N.intoRaw(e.translation), i = Jt.intoRaw(e.rotation), s = N.intoRaw(e.linvel), a = N.intoRaw(e.centerOfMass), o = N.intoRaw(e.angvel), c = N.intoRaw(e.principalAngularInertia), l = Jt.intoRaw(e.angularInertiaLocalFrame), h = this.raw.createRigidBody(e.enabled, n, i, e.gravityScale, e.mass, e.massOnly, a, s, o, c, l, e.translationsEnabledX, e.translationsEnabledY, e.translationsEnabledZ, e.rotationsEnabledX, e.rotationsEnabledY, e.rotationsEnabledZ, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.ccdEnabled, e.dominanceGroup);
          n.free(), i.free(), s.free(), a.free(), o.free(), c.free(), l.free();
          const u = new gl(this.raw, t, h);
          return u.userData = e.userData, this.map.set(h, u), u;
        }
        remove(t, e, n, i, s) {
          for (let a = 0; a < this.raw.rbNumColliders(t); a += 1) n.unmap(this.raw.rbCollider(t, a));
          i.forEachJointHandleAttachedToRigidBody(t, (a) => i.unmap(a)), s.forEachJointHandleAttachedToRigidBody(t, (a) => s.unmap(a)), this.raw.remove(t, e.raw, n.raw, i.raw, s.raw), this.map.delete(t);
        }
        len() {
          return this.map.len();
        }
        contains(t) {
          return this.get(t) != null;
        }
        get(t) {
          return this.map.get(t);
        }
        forEach(t) {
          this.map.forEach(t);
        }
        forEachActiveRigidBody(t, e) {
          t.forEachActiveRigidBodyHandle((n) => {
            e(this.get(n));
          });
        }
        getAll() {
          return this.map.getAll();
        }
      }
      class Yf {
        constructor(t) {
          this.raw = t || new Xi();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        get dt() {
          return this.raw.dt;
        }
        get erp() {
          return this.raw.erp;
        }
        get allowedLinearError() {
          return this.raw.allowedLinearError;
        }
        get predictionDistance() {
          return this.raw.predictionDistance;
        }
        get maxVelocityIterations() {
          return this.raw.maxVelocityIterations;
        }
        get maxVelocityFrictionIterations() {
          return this.raw.maxVelocityFrictionIterations;
        }
        get maxStabilizationIterations() {
          return this.raw.maxStabilizationIterations;
        }
        get minIslandSize() {
          return this.raw.minIslandSize;
        }
        get maxCcdSubsteps() {
          return this.raw.maxCcdSubsteps;
        }
        set dt(t) {
          this.raw.dt = t;
        }
        set erp(t) {
          this.raw.erp = t;
        }
        set allowedLinearError(t) {
          this.raw.allowedLinearError = t;
        }
        set predictionDistance(t) {
          this.raw.predictionDistance = t;
        }
        set maxVelocityIterations(t) {
          this.raw.maxVelocityIterations = t;
        }
        set maxVelocityFrictionIterations(t) {
          this.raw.maxVelocityFrictionIterations = t;
        }
        set maxStabilizationIterations(t) {
          this.raw.maxStabilizationIterations = t;
        }
        set minIslandSize(t) {
          this.raw.minIslandSize = t;
        }
        set maxCcdSubsteps(t) {
          this.raw.maxCcdSubsteps = t;
        }
      }
      var zn;
      (function(r) {
        r[r.Revolute = 0] = "Revolute", r[r.Fixed = 1] = "Fixed", r[r.Prismatic = 2] = "Prismatic", r[r.Spherical = 3] = "Spherical";
      })(zn || (zn = {}));
      var wl;
      (function(r) {
        r[r.AccelerationBased = 0] = "AccelerationBased", r[r.ForceBased = 1] = "ForceBased";
      })(wl || (wl = {}));
      class qi {
        constructor(t, e, n) {
          this.rawSet = t, this.bodySet = e, this.handle = n;
        }
        static newTyped(t, e, n) {
          switch (t.jointType(n)) {
            case zn.Revolute:
              return new $f(t, e, n);
            case zn.Prismatic:
              return new Jf(t, e, n);
            case zn.Fixed:
              return new Kf(t, e, n);
            case zn.Spherical:
              return new Zf(t, e, n);
            default:
              return new qi(t, e, n);
          }
        }
        finalizeDeserialization(t) {
          this.bodySet = t;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        body1() {
          return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
        }
        body2() {
          return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
        }
        type() {
          return this.rawSet.jointType(this.handle);
        }
        frameX1() {
          return Jt.fromRaw(this.rawSet.jointFrameX1(this.handle));
        }
        frameX2() {
          return Jt.fromRaw(this.rawSet.jointFrameX2(this.handle));
        }
        anchor1() {
          return N.fromRaw(this.rawSet.jointAnchor1(this.handle));
        }
        anchor2() {
          return N.fromRaw(this.rawSet.jointAnchor2(this.handle));
        }
        setAnchor1(t) {
          const e = N.intoRaw(t);
          this.rawSet.jointSetAnchor1(this.handle, e), e.free();
        }
        setAnchor2(t) {
          const e = N.intoRaw(t);
          this.rawSet.jointSetAnchor2(this.handle, e), e.free();
        }
        setContactsEnabled(t) {
          this.rawSet.jointSetContactsEnabled(this.handle, t);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }
      class Jl extends qi {
        limitsEnabled() {
          return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
        }
        limitsMin() {
          return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
        }
        limitsMax() {
          return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
        }
        setLimits(t, e) {
          this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
        }
        configureMotorModel(t) {
          this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
        }
        configureMotorVelocity(t, e) {
          this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
        }
        configureMotorPosition(t, e, n) {
          this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, n);
        }
        configureMotor(t, e, n, i) {
          this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, n, i);
        }
      }
      class Kf extends qi {
      }
      class Jf extends Jl {
        rawAxis() {
          return Io.X;
        }
      }
      class $f extends Jl {
        rawAxis() {
          return Io.AngX;
        }
      }
      class Zf extends qi {
      }
      class Qf {
        constructor(t) {
          this.raw = t || new $n(), this.map = new Go(), t && t.forEachJointHandle((e) => {
            this.map.set(e, qi.newTyped(t, null, e));
          });
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        finalizeDeserialization(t) {
          this.map.forEach((e) => e.finalizeDeserialization(t));
        }
        createJoint(t, e, n, i, s) {
          const a = e.intoRaw(), o = this.raw.createJoint(a, n, i, s);
          a.free();
          let c = qi.newTyped(this.raw, t, o);
          return this.map.set(o, c), c;
        }
        remove(t, e) {
          this.raw.remove(t, e), this.unmap(t);
        }
        forEachJointHandleAttachedToRigidBody(t, e) {
          this.raw.forEachJointAttachedToRigidBody(t, e);
        }
        unmap(t) {
          this.map.delete(t);
        }
        len() {
          return this.map.len();
        }
        contains(t) {
          return this.get(t) != null;
        }
        get(t) {
          return this.map.get(t);
        }
        forEach(t) {
          this.map.forEach(t);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      class Yi {
        constructor(t, e) {
          this.rawSet = t, this.handle = e;
        }
        static newTyped(t, e) {
          switch (t.jointType(e)) {
            case zn.Revolute:
              return new np(t, e);
            case zn.Prismatic:
              return new ep(t, e);
            case zn.Fixed:
              return new tp(t, e);
            case zn.Spherical:
              return new ip(t, e);
            default:
              return new Yi(t, e);
          }
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        setContactsEnabled(t) {
          this.rawSet.jointSetContactsEnabled(this.handle, t);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }
      class $l extends Yi {
      }
      class tp extends Yi {
      }
      class ep extends $l {
        rawAxis() {
          return Io.X;
        }
      }
      class np extends $l {
        rawAxis() {
          return Io.AngX;
        }
      }
      class ip extends Yi {
      }
      class rp {
        constructor(t) {
          this.raw = t || new Qn(), this.map = new Go(), t && t.forEachJointHandle((e) => {
            this.map.set(e, Yi.newTyped(this.raw, e));
          });
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        createJoint(t, e, n, i) {
          const s = t.intoRaw(), a = this.raw.createJoint(s, e, n, i);
          s.free();
          let o = Yi.newTyped(this.raw, a);
          return this.map.set(a, o), o;
        }
        remove(t, e) {
          this.raw.remove(t, e), this.map.delete(t);
        }
        unmap(t) {
          this.map.delete(t);
        }
        len() {
          return this.map.len();
        }
        contains(t) {
          return this.get(t) != null;
        }
        get(t) {
          return this.map.get(t);
        }
        forEach(t) {
          this.map.forEach(t);
        }
        forEachJointHandleAttachedToRigidBody(t, e) {
          this.raw.forEachJointAttachedToRigidBody(t, e);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      var Ks;
      (function(r) {
        r[r.Average = 0] = "Average", r[r.Min = 1] = "Min", r[r.Multiply = 2] = "Multiply", r[r.Max = 3] = "Max";
      })(Ks || (Ks = {}));
      class sp {
        constructor(t) {
          this.raw = t || new us();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
      }
      class ap {
        constructor(t) {
          this.raw = t || new Zn();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        forEachActiveRigidBodyHandle(t) {
          this.raw.forEachActiveRigidBodyHandle(t);
        }
      }
      class op {
        constructor(t) {
          this.raw = t || new ji();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
      }
      class cp {
        constructor(t) {
          this.raw = t || new Si(), this.tempManifold = new lp(null);
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        contactsWith(t, e) {
          this.raw.contacts_with(t, e);
        }
        intersectionsWith(t, e) {
          this.raw.intersections_with(t, e);
        }
        contactPair(t, e, n) {
          const i = this.raw.contact_pair(t, e);
          if (i) {
            const s = i.collider1() != t;
            let a;
            for (a = 0; a < i.numContactManifolds(); ++a) this.tempManifold.raw = i.contactManifold(a), this.tempManifold.raw && n(this.tempManifold, s), this.tempManifold.free();
            i.free();
          }
        }
        intersectionPair(t, e) {
          return this.raw.intersection_pair(t, e);
        }
      }
      class lp {
        constructor(t) {
          this.raw = t;
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        normal() {
          return N.fromRaw(this.raw.normal());
        }
        localNormal1() {
          return N.fromRaw(this.raw.local_n1());
        }
        localNormal2() {
          return N.fromRaw(this.raw.local_n2());
        }
        subshape1() {
          return this.raw.subshape1();
        }
        subshape2() {
          return this.raw.subshape2();
        }
        numContacts() {
          return this.raw.num_contacts();
        }
        localContactPoint1(t) {
          return N.fromRaw(this.raw.contact_local_p1(t));
        }
        localContactPoint2(t) {
          return N.fromRaw(this.raw.contact_local_p2(t));
        }
        contactDist(t) {
          return this.raw.contact_dist(t);
        }
        contactFid1(t) {
          return this.raw.contact_fid1(t);
        }
        contactFid2(t) {
          return this.raw.contact_fid2(t);
        }
        contactImpulse(t) {
          return this.raw.contact_impulse(t);
        }
        contactTangentImpulseX(t) {
          return this.raw.contact_tangent_impulse_x(t);
        }
        contactTangentImpulseY(t) {
          return this.raw.contact_tangent_impulse_y(t);
        }
        numSolverContacts() {
          return this.raw.num_solver_contacts();
        }
        solverContactPoint(t) {
          return N.fromRaw(this.raw.solver_contact_point(t));
        }
        solverContactDist(t) {
          return this.raw.solver_contact_dist(t);
        }
        solverContactFriction(t) {
          return this.raw.solver_contact_friction(t);
        }
        solverContactRestitution(t) {
          return this.raw.solver_contact_restitution(t);
        }
        solverContactTangentVelocity(t) {
          return N.fromRaw(this.raw.solver_contact_tangent_velocity(t));
        }
      }
      class ds {
        constructor(t, e, n, i, s) {
          this.distance = t, this.point1 = e, this.point2 = n, this.normal1 = i, this.normal2 = s;
        }
        static fromRaw(t) {
          if (!t) return null;
          const e = new ds(t.distance(), N.fromRaw(t.point1()), N.fromRaw(t.point2()), N.fromRaw(t.normal1()), N.fromRaw(t.normal2()));
          return t.free(), e;
        }
      }
      var fs;
      (function(r) {
        r[r.Vertex = 0] = "Vertex", r[r.Edge = 1] = "Edge", r[r.Face = 2] = "Face", r[r.Unknown = 3] = "Unknown";
      })(fs || (fs = {}));
      class ea {
        constructor(t, e) {
          this.point = t, this.isInside = e;
        }
        static fromRaw(t) {
          if (!t) return null;
          const e = new ea(N.fromRaw(t.point()), t.isInside());
          return t.free(), e;
        }
      }
      class Js {
        constructor(t, e, n, i, s) {
          this.featureType = fs.Unknown, this.featureId = void 0, this.collider = t, this.point = e, this.isInside = n, s !== void 0 && (this.featureId = s), i !== void 0 && (this.featureType = i);
        }
        static fromRaw(t, e) {
          if (!e) return null;
          const n = new Js(t.get(e.colliderHandle()), N.fromRaw(e.point()), e.isInside(), e.featureType(), e.featureId());
          return e.free(), n;
        }
      }
      class xC {
        constructor(t, e) {
          this.origin = t, this.dir = e;
        }
        pointAt(t) {
          return {
            x: this.origin.x + this.dir.x * t,
            y: this.origin.y + this.dir.y * t,
            z: this.origin.z + this.dir.z * t
          };
        }
      }
      class na {
        constructor(t, e, n, i) {
          this.featureType = fs.Unknown, this.featureId = void 0, this.toi = t, this.normal = e, i !== void 0 && (this.featureId = i), n !== void 0 && (this.featureType = n);
        }
        static fromRaw(t) {
          if (!t) return null;
          const e = new na(t.toi(), N.fromRaw(t.normal()), t.featureType(), t.featureId());
          return t.free(), e;
        }
      }
      class $s {
        constructor(t, e, n, i, s) {
          this.featureType = fs.Unknown, this.featureId = void 0, this.collider = t, this.toi = e, this.normal = n, s !== void 0 && (this.featureId = s), i !== void 0 && (this.featureType = i);
        }
        static fromRaw(t, e) {
          if (!e) return null;
          const n = new $s(t.get(e.colliderHandle()), e.toi(), N.fromRaw(e.normal()), e.featureType(), e.featureId());
          return e.free(), n;
        }
      }
      class ko {
        constructor(t, e) {
          this.collider = t, this.toi = e;
        }
        static fromRaw(t, e) {
          if (!e) return null;
          const n = new ko(t.get(e.colliderHandle()), e.toi());
          return e.free(), n;
        }
      }
      class Ss {
        constructor(t, e, n, i, s) {
          this.toi = t, this.witness1 = e, this.witness2 = n, this.normal1 = i, this.normal2 = s;
        }
        static fromRaw(t, e) {
          if (!e) return null;
          const n = new Ss(e.toi(), N.fromRaw(e.witness1()), N.fromRaw(e.witness2()), N.fromRaw(e.normal1()), N.fromRaw(e.normal2()));
          return e.free(), n;
        }
      }
      class ia extends Ss {
        constructor(t, e, n, i, s, a) {
          super(e, n, i, s, a), this.collider = t;
        }
        static fromRaw(t, e) {
          if (!e) return null;
          const n = new ia(t.get(e.colliderHandle()), e.toi(), N.fromRaw(e.witness1()), N.fromRaw(e.witness2()), N.fromRaw(e.normal1()), N.fromRaw(e.normal2()));
          return e.free(), n;
        }
      }
      class Ue {
        static fromRaw(t, e) {
          const n = t.coShapeType(e);
          let i, s, a, o, c, l, h;
          switch (n) {
            case Zt.Ball:
              return new Zl(t.coRadius(e));
            case Zt.Cuboid:
              return i = t.coHalfExtents(e), new Ql(i.x, i.y, i.z);
            case Zt.RoundCuboid:
              return i = t.coHalfExtents(e), s = t.coRoundRadius(e), new th(i.x, i.y, i.z, s);
            case Zt.Capsule:
              return c = t.coHalfHeight(e), l = t.coRadius(e), new eh(c, l);
            case Zt.Segment:
              return a = t.coVertices(e), new nh(N.new(a[0], a[1], a[2]), N.new(a[3], a[4], a[5]));
            case Zt.Polyline:
              return a = t.coVertices(e), o = t.coIndices(e), new sh(a, o);
            case Zt.Triangle:
              return a = t.coVertices(e), new ih(N.new(a[0], a[1], a[2]), N.new(a[3], a[4], a[5]), N.new(a[6], a[7], a[8]));
            case Zt.RoundTriangle:
              return a = t.coVertices(e), s = t.coRoundRadius(e), new rh(N.new(a[0], a[1], a[2]), N.new(a[3], a[4], a[5]), N.new(a[6], a[7], a[8]), s);
            case Zt.HalfSpace:
              return h = N.fromRaw(t.coHalfspaceNormal(e)), new hp(h);
            case Zt.TriMesh:
              return a = t.coVertices(e), o = t.coIndices(e), new ah(a, o);
            case Zt.HeightField:
              const u = t.coHeightfieldScale(e), d = t.coHeightfieldHeights(e), p = t.coHeightfieldNRows(e), _ = t.coHeightfieldNCols(e);
              return new oh(p, _, d, u);
            case Zt.ConvexPolyhedron:
              return a = t.coVertices(e), o = t.coIndices(e), new wo(a, o);
            case Zt.RoundConvexPolyhedron:
              return a = t.coVertices(e), o = t.coIndices(e), s = t.coRoundRadius(e), new vo(a, o, s);
            case Zt.Cylinder:
              return c = t.coHalfHeight(e), l = t.coRadius(e), new ch(c, l);
            case Zt.RoundCylinder:
              return c = t.coHalfHeight(e), l = t.coRadius(e), s = t.coRoundRadius(e), new lh(c, l, s);
            case Zt.Cone:
              return c = t.coHalfHeight(e), l = t.coRadius(e), new hh(c, l);
            case Zt.RoundCone:
              return c = t.coHalfHeight(e), l = t.coRadius(e), s = t.coRoundRadius(e), new uh(c, l, s);
            default:
              throw new Error("unknown shape type: " + n);
          }
        }
        castShape(t, e, n, i, s, a, o, c, l) {
          let h = N.intoRaw(t), u = Jt.intoRaw(e), d = N.intoRaw(n), p = N.intoRaw(s), _ = Jt.intoRaw(a), w = N.intoRaw(o), m = this.intoRaw(), f = i.intoRaw(), b = Ss.fromRaw(null, m.castShape(h, u, d, f, p, _, w, c, l));
          return h.free(), u.free(), d.free(), p.free(), _.free(), w.free(), m.free(), f.free(), b;
        }
        intersectsShape(t, e, n, i, s) {
          let a = N.intoRaw(t), o = Jt.intoRaw(e), c = N.intoRaw(i), l = Jt.intoRaw(s), h = this.intoRaw(), u = n.intoRaw(), d = h.intersectsShape(a, o, u, c, l);
          return a.free(), o.free(), c.free(), l.free(), h.free(), u.free(), d;
        }
        contactShape(t, e, n, i, s, a) {
          let o = N.intoRaw(t), c = Jt.intoRaw(e), l = N.intoRaw(i), h = Jt.intoRaw(s), u = this.intoRaw(), d = n.intoRaw(), p = ds.fromRaw(u.contactShape(o, c, d, l, h, a));
          return o.free(), c.free(), l.free(), h.free(), u.free(), d.free(), p;
        }
        containsPoint(t, e, n) {
          let i = N.intoRaw(t), s = Jt.intoRaw(e), a = N.intoRaw(n), o = this.intoRaw(), c = o.containsPoint(i, s, a);
          return i.free(), s.free(), a.free(), o.free(), c;
        }
        projectPoint(t, e, n, i) {
          let s = N.intoRaw(t), a = Jt.intoRaw(e), o = N.intoRaw(n), c = this.intoRaw(), l = ea.fromRaw(c.projectPoint(s, a, o, i));
          return s.free(), a.free(), o.free(), c.free(), l;
        }
        intersectsRay(t, e, n, i) {
          let s = N.intoRaw(e), a = Jt.intoRaw(n), o = N.intoRaw(t.origin), c = N.intoRaw(t.dir), l = this.intoRaw(), h = l.intersectsRay(s, a, o, c, i);
          return s.free(), a.free(), o.free(), c.free(), l.free(), h;
        }
        castRay(t, e, n, i, s) {
          let a = N.intoRaw(e), o = Jt.intoRaw(n), c = N.intoRaw(t.origin), l = N.intoRaw(t.dir), h = this.intoRaw(), u = h.castRay(a, o, c, l, i, s);
          return a.free(), o.free(), c.free(), l.free(), h.free(), u;
        }
        castRayAndGetNormal(t, e, n, i, s) {
          let a = N.intoRaw(e), o = Jt.intoRaw(n), c = N.intoRaw(t.origin), l = N.intoRaw(t.dir), h = this.intoRaw(), u = na.fromRaw(h.castRayAndGetNormal(a, o, c, l, i, s));
          return a.free(), o.free(), c.free(), l.free(), h.free(), u;
        }
      }
      var Zt;
      (function(r) {
        r[r.Ball = 0] = "Ball", r[r.Cuboid = 1] = "Cuboid", r[r.Capsule = 2] = "Capsule", r[r.Segment = 3] = "Segment", r[r.Polyline = 4] = "Polyline", r[r.Triangle = 5] = "Triangle", r[r.TriMesh = 6] = "TriMesh", r[r.HeightField = 7] = "HeightField", r[r.ConvexPolyhedron = 9] = "ConvexPolyhedron", r[r.Cylinder = 10] = "Cylinder", r[r.Cone = 11] = "Cone", r[r.RoundCuboid = 12] = "RoundCuboid", r[r.RoundTriangle = 13] = "RoundTriangle", r[r.RoundCylinder = 14] = "RoundCylinder", r[r.RoundCone = 15] = "RoundCone", r[r.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", r[r.HalfSpace = 17] = "HalfSpace";
      })(Zt || (Zt = {}));
      class Zl extends Ue {
        constructor(t) {
          super(), this.type = Zt.Ball, this.radius = t;
        }
        intoRaw() {
          return St.ball(this.radius);
        }
      }
      class hp extends Ue {
        constructor(t) {
          super(), this.type = Zt.HalfSpace, this.normal = t;
        }
        intoRaw() {
          let t = N.intoRaw(this.normal), e = St.halfspace(t);
          return t.free(), e;
        }
      }
      class Ql extends Ue {
        constructor(t, e, n) {
          super(), this.type = Zt.Cuboid, this.halfExtents = N.new(t, e, n);
        }
        intoRaw() {
          return St.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
        }
      }
      class th extends Ue {
        constructor(t, e, n, i) {
          super(), this.type = Zt.RoundCuboid, this.halfExtents = N.new(t, e, n), this.borderRadius = i;
        }
        intoRaw() {
          return St.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
        }
      }
      class eh extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.Capsule, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
          return St.capsule(this.halfHeight, this.radius);
        }
      }
      class nh extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.Segment, this.a = t, this.b = e;
        }
        intoRaw() {
          let t = N.intoRaw(this.a), e = N.intoRaw(this.b), n = St.segment(t, e);
          return t.free(), e.free(), n;
        }
      }
      class ih extends Ue {
        constructor(t, e, n) {
          super(), this.type = Zt.Triangle, this.a = t, this.b = e, this.c = n;
        }
        intoRaw() {
          let t = N.intoRaw(this.a), e = N.intoRaw(this.b), n = N.intoRaw(this.c), i = St.triangle(t, e, n);
          return t.free(), e.free(), n.free(), i;
        }
      }
      class rh extends Ue {
        constructor(t, e, n, i) {
          super(), this.type = Zt.RoundTriangle, this.a = t, this.b = e, this.c = n, this.borderRadius = i;
        }
        intoRaw() {
          let t = N.intoRaw(this.a), e = N.intoRaw(this.b), n = N.intoRaw(this.c), i = St.roundTriangle(t, e, n, this.borderRadius);
          return t.free(), e.free(), n.free(), i;
        }
      }
      class sh extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.Polyline, this.vertices = t, this.indices = e ?? new Uint32Array(0);
        }
        intoRaw() {
          return St.polyline(this.vertices, this.indices);
        }
      }
      class ah extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.TriMesh, this.vertices = t, this.indices = e;
        }
        intoRaw() {
          return St.trimesh(this.vertices, this.indices);
        }
      }
      class wo extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.ConvexPolyhedron, this.vertices = t, this.indices = e;
        }
        intoRaw() {
          return this.indices ? St.convexMesh(this.vertices, this.indices) : St.convexHull(this.vertices);
        }
      }
      class vo extends Ue {
        constructor(t, e, n) {
          super(), this.type = Zt.RoundConvexPolyhedron, this.vertices = t, this.indices = e, this.borderRadius = n;
        }
        intoRaw() {
          return this.indices ? St.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : St.roundConvexHull(this.vertices, this.borderRadius);
        }
      }
      class oh extends Ue {
        constructor(t, e, n, i) {
          super(), this.type = Zt.HeightField, this.nrows = t, this.ncols = e, this.heights = n, this.scale = i;
        }
        intoRaw() {
          let t = N.intoRaw(this.scale), e = St.heightfield(this.nrows, this.ncols, this.heights, t);
          return t.free(), e;
        }
      }
      class ch extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.Cylinder, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
          return St.cylinder(this.halfHeight, this.radius);
        }
      }
      class lh extends Ue {
        constructor(t, e, n) {
          super(), this.type = Zt.RoundCylinder, this.borderRadius = n, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
          return St.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
        }
      }
      class hh extends Ue {
        constructor(t, e) {
          super(), this.type = Zt.Cone, this.halfHeight = t, this.radius = e;
        }
        intoRaw() {
          return St.cone(this.halfHeight, this.radius);
        }
      }
      class uh extends Ue {
        constructor(t, e, n) {
          super(), this.type = Zt.RoundCone, this.halfHeight = t, this.radius = e, this.borderRadius = n;
        }
        intoRaw() {
          return St.roundCone(this.halfHeight, this.radius, this.borderRadius);
        }
      }
      var yo;
      (function(r) {
        r[r.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", r[r.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", r[r.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", r[r.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", r[r.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", r[r.FIXED_FIXED = 32] = "FIXED_FIXED", r[r.DEFAULT = 15] = "DEFAULT", r[r.ALL = 60943] = "ALL";
      })(yo || (yo = {}));
      class vl {
        constructor(t, e, n, i) {
          this.colliderSet = t, this.handle = e, this._parent = n, this._shape = i;
        }
        finalizeDeserialization(t) {
          this.handle != null && (this._parent = t.get(this.colliderSet.raw.coParent(this.handle)));
        }
        ensureShapeIsCached() {
          this._shape || (this._shape = Ue.fromRaw(this.colliderSet.raw, this.handle));
        }
        get shape() {
          return this.ensureShapeIsCached(), this._shape;
        }
        isValid() {
          return this.colliderSet.raw.contains(this.handle);
        }
        translation() {
          return N.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
        }
        rotation() {
          return Jt.fromRaw(this.colliderSet.raw.coRotation(this.handle));
        }
        isSensor() {
          return this.colliderSet.raw.coIsSensor(this.handle);
        }
        setSensor(t) {
          this.colliderSet.raw.coSetSensor(this.handle, t);
        }
        setShape(t) {
          let e = t.intoRaw();
          this.colliderSet.raw.coSetShape(this.handle, e), e.free(), this._shape = t;
        }
        setEnabled(t) {
          this.colliderSet.raw.coSetEnabled(this.handle, t);
        }
        isEnabled() {
          return this.colliderSet.raw.coIsEnabled(this.handle);
        }
        setRestitution(t) {
          this.colliderSet.raw.coSetRestitution(this.handle, t);
        }
        setFriction(t) {
          this.colliderSet.raw.coSetFriction(this.handle, t);
        }
        frictionCombineRule() {
          return this.colliderSet.raw.coFrictionCombineRule(this.handle);
        }
        setFrictionCombineRule(t) {
          this.colliderSet.raw.coSetFrictionCombineRule(this.handle, t);
        }
        restitutionCombineRule() {
          return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
        }
        setRestitutionCombineRule(t) {
          this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, t);
        }
        setCollisionGroups(t) {
          this.colliderSet.raw.coSetCollisionGroups(this.handle, t);
        }
        setSolverGroups(t) {
          this.colliderSet.raw.coSetSolverGroups(this.handle, t);
        }
        activeHooks() {
          return this.colliderSet.raw.coActiveHooks(this.handle);
        }
        setActiveHooks(t) {
          this.colliderSet.raw.coSetActiveHooks(this.handle, t);
        }
        activeEvents() {
          return this.colliderSet.raw.coActiveEvents(this.handle);
        }
        setActiveEvents(t) {
          this.colliderSet.raw.coSetActiveEvents(this.handle, t);
        }
        activeCollisionTypes() {
          return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
        }
        setContactForceEventThreshold(t) {
          return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, t);
        }
        contactForceEventThreshold() {
          return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
        }
        setActiveCollisionTypes(t) {
          this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, t);
        }
        setDensity(t) {
          this.colliderSet.raw.coSetDensity(this.handle, t);
        }
        setMass(t) {
          this.colliderSet.raw.coSetMass(this.handle, t);
        }
        setMassProperties(t, e, n, i) {
          let s = N.intoRaw(e), a = N.intoRaw(n), o = Jt.intoRaw(i);
          this.colliderSet.raw.coSetMassProperties(this.handle, t, s, a, o), s.free(), a.free(), o.free();
        }
        setTranslation(t) {
          this.colliderSet.raw.coSetTranslation(this.handle, t.x, t.y, t.z);
        }
        setTranslationWrtParent(t) {
          this.colliderSet.raw.coSetTranslationWrtParent(this.handle, t.x, t.y, t.z);
        }
        setRotation(t) {
          this.colliderSet.raw.coSetRotation(this.handle, t.x, t.y, t.z, t.w);
        }
        setRotationWrtParent(t) {
          this.colliderSet.raw.coSetRotationWrtParent(this.handle, t.x, t.y, t.z, t.w);
        }
        shapeType() {
          return this.colliderSet.raw.coShapeType(this.handle);
        }
        halfExtents() {
          return N.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
        }
        setHalfExtents(t) {
          const e = N.intoRaw(t);
          this.colliderSet.raw.coSetHalfExtents(this.handle, e);
        }
        radius() {
          return this.colliderSet.raw.coRadius(this.handle);
        }
        setRadius(t) {
          this.colliderSet.raw.coSetRadius(this.handle, t);
        }
        roundRadius() {
          return this.colliderSet.raw.coRoundRadius(this.handle);
        }
        setRoundRadius(t) {
          this.colliderSet.raw.coSetRoundRadius(this.handle, t);
        }
        halfHeight() {
          return this.colliderSet.raw.coHalfHeight(this.handle);
        }
        setHalfHeight(t) {
          this.colliderSet.raw.coSetHalfHeight(this.handle, t);
        }
        vertices() {
          return this.colliderSet.raw.coVertices(this.handle);
        }
        indices() {
          return this.colliderSet.raw.coIndices(this.handle);
        }
        heightfieldHeights() {
          return this.colliderSet.raw.coHeightfieldHeights(this.handle);
        }
        heightfieldScale() {
          let t = this.colliderSet.raw.coHeightfieldScale(this.handle);
          return N.fromRaw(t);
        }
        heightfieldNRows() {
          return this.colliderSet.raw.coHeightfieldNRows(this.handle);
        }
        heightfieldNCols() {
          return this.colliderSet.raw.coHeightfieldNCols(this.handle);
        }
        parent() {
          return this._parent;
        }
        friction() {
          return this.colliderSet.raw.coFriction(this.handle);
        }
        restitution() {
          return this.colliderSet.raw.coRestitution(this.handle);
        }
        density() {
          return this.colliderSet.raw.coDensity(this.handle);
        }
        mass() {
          return this.colliderSet.raw.coMass(this.handle);
        }
        volume() {
          return this.colliderSet.raw.coVolume(this.handle);
        }
        collisionGroups() {
          return this.colliderSet.raw.coCollisionGroups(this.handle);
        }
        solverGroups() {
          return this.colliderSet.raw.coSolverGroups(this.handle);
        }
        containsPoint(t) {
          let e = N.intoRaw(t), n = this.colliderSet.raw.coContainsPoint(this.handle, e);
          return e.free(), n;
        }
        projectPoint(t, e) {
          let n = N.intoRaw(t), i = ea.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, n, e));
          return n.free(), i;
        }
        intersectsRay(t, e) {
          let n = N.intoRaw(t.origin), i = N.intoRaw(t.dir), s = this.colliderSet.raw.coIntersectsRay(this.handle, n, i, e);
          return n.free(), i.free(), s;
        }
        castShape(t, e, n, i, s, a, o) {
          let c = N.intoRaw(t), l = N.intoRaw(n), h = Jt.intoRaw(i), u = N.intoRaw(s), d = e.intoRaw(), p = Ss.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, c, d, l, h, u, a, o));
          return c.free(), l.free(), h.free(), u.free(), d.free(), p;
        }
        castCollider(t, e, n, i, s) {
          let a = N.intoRaw(t), o = N.intoRaw(n), c = ia.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, a, e.handle, o, i, s));
          return a.free(), o.free(), c;
        }
        intersectsShape(t, e, n) {
          let i = N.intoRaw(e), s = Jt.intoRaw(n), a = t.intoRaw(), o = this.colliderSet.raw.coIntersectsShape(this.handle, a, i, s);
          return i.free(), s.free(), a.free(), o;
        }
        contactShape(t, e, n, i) {
          let s = N.intoRaw(e), a = Jt.intoRaw(n), o = t.intoRaw(), c = ds.fromRaw(this.colliderSet.raw.coContactShape(this.handle, o, s, a, i));
          return s.free(), a.free(), o.free(), c;
        }
        contactCollider(t, e) {
          return ds.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, t.handle, e));
        }
        castRay(t, e, n) {
          let i = N.intoRaw(t.origin), s = N.intoRaw(t.dir), a = this.colliderSet.raw.coCastRay(this.handle, i, s, e, n);
          return i.free(), s.free(), a;
        }
        castRayAndGetNormal(t, e, n) {
          let i = N.intoRaw(t.origin), s = N.intoRaw(t.dir), a = na.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, i, s, e, n));
          return i.free(), s.free(), a;
        }
      }
      var dr;
      (function(r) {
        r[r.Density = 0] = "Density", r[r.Mass = 1] = "Mass", r[r.MassProps = 2] = "MassProps";
      })(dr || (dr = {}));
      class Pe {
        constructor(t) {
          this.enabled = true, this.shape = t, this.massPropsMode = dr.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = Jt.identity(), this.translation = N.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = Ks.Average, this.restitutionCombineRule = Ks.Average, this.activeCollisionTypes = yo.DEFAULT, this.activeEvents = 0, this.activeHooks = 0, this.mass = 0, this.centerOfMass = N.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = N.zeros(), this.angularInertiaLocalFrame = Jt.identity();
        }
        static ball(t) {
          const e = new Zl(t);
          return new Pe(e);
        }
        static capsule(t, e) {
          const n = new eh(t, e);
          return new Pe(n);
        }
        static segment(t, e) {
          const n = new nh(t, e);
          return new Pe(n);
        }
        static triangle(t, e, n) {
          const i = new ih(t, e, n);
          return new Pe(i);
        }
        static roundTriangle(t, e, n, i) {
          const s = new rh(t, e, n, i);
          return new Pe(s);
        }
        static polyline(t, e) {
          const n = new sh(t, e);
          return new Pe(n);
        }
        static trimesh(t, e) {
          const n = new ah(t, e);
          return new Pe(n);
        }
        static cuboid(t, e, n) {
          const i = new Ql(t, e, n);
          return new Pe(i);
        }
        static roundCuboid(t, e, n, i) {
          const s = new th(t, e, n, i);
          return new Pe(s);
        }
        static heightfield(t, e, n, i) {
          const s = new oh(t, e, n, i);
          return new Pe(s);
        }
        static cylinder(t, e) {
          const n = new ch(t, e);
          return new Pe(n);
        }
        static roundCylinder(t, e, n) {
          const i = new lh(t, e, n);
          return new Pe(i);
        }
        static cone(t, e) {
          const n = new hh(t, e);
          return new Pe(n);
        }
        static roundCone(t, e, n) {
          const i = new uh(t, e, n);
          return new Pe(i);
        }
        static convexHull(t) {
          const e = new wo(t, null);
          return new Pe(e);
        }
        static convexMesh(t, e) {
          const n = new wo(t, e);
          return new Pe(n);
        }
        static roundConvexHull(t, e) {
          const n = new vo(t, null, e);
          return new Pe(n);
        }
        static roundConvexMesh(t, e, n) {
          const i = new vo(t, e, n);
          return new Pe(i);
        }
        setTranslation(t, e, n) {
          if (typeof t != "number" || typeof e != "number" || typeof n != "number") throw TypeError("The translation components must be numbers.");
          return this.translation = {
            x: t,
            y: e,
            z: n
          }, this;
        }
        setRotation(t) {
          return Jt.copy(this.rotation, t), this;
        }
        setSensor(t) {
          return this.isSensor = t, this;
        }
        setEnabled(t) {
          return this.enabled = t, this;
        }
        setDensity(t) {
          return this.massPropsMode = dr.Density, this.density = t, this;
        }
        setMass(t) {
          return this.massPropsMode = dr.Mass, this.mass = t, this;
        }
        setMassProperties(t, e, n, i) {
          return this.massPropsMode = dr.MassProps, this.mass = t, N.copy(this.centerOfMass, e), N.copy(this.principalAngularInertia, n), Jt.copy(this.angularInertiaLocalFrame, i), this;
        }
        setRestitution(t) {
          return this.restitution = t, this;
        }
        setFriction(t) {
          return this.friction = t, this;
        }
        setFrictionCombineRule(t) {
          return this.frictionCombineRule = t, this;
        }
        setRestitutionCombineRule(t) {
          return this.restitutionCombineRule = t, this;
        }
        setCollisionGroups(t) {
          return this.collisionGroups = t, this;
        }
        setSolverGroups(t) {
          return this.solverGroups = t, this;
        }
        setActiveHooks(t) {
          return this.activeHooks = t, this;
        }
        setActiveEvents(t) {
          return this.activeEvents = t, this;
        }
        setActiveCollisionTypes(t) {
          return this.activeCollisionTypes = t, this;
        }
        setContactForceEventThreshold(t) {
          return this.contactForceEventThreshold = t, this;
        }
      }
      class up {
        constructor(t) {
          this.raw = t || new ye(), this.map = new Go(), t && t.forEachColliderHandle((e) => {
            this.map.set(e, new vl(this, e, null));
          });
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
        }
        castClosure(t) {
          return (e) => {
            if (t) return t(this.get(e));
          };
        }
        finalizeDeserialization(t) {
          this.map.forEach((e) => e.finalizeDeserialization(t));
        }
        createCollider(t, e, n) {
          let i = n != null && n != null;
          if (i && isNaN(n)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
          let s = e.shape.intoRaw(), a = N.intoRaw(e.translation), o = Jt.intoRaw(e.rotation), c = N.intoRaw(e.centerOfMass), l = N.intoRaw(e.principalAngularInertia), h = Jt.intoRaw(e.angularInertiaLocalFrame), u = this.raw.createCollider(e.enabled, s, a, o, e.massPropsMode, e.mass, c, l, h, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, i, i ? n : 0, t.raw);
          s.free(), a.free(), o.free(), c.free(), l.free(), h.free();
          let d = i ? t.get(n) : null, p = new vl(this, u, d, e.shape);
          return this.map.set(u, p), p;
        }
        remove(t, e, n, i) {
          this.raw.remove(t, e.raw, n.raw, i), this.unmap(t);
        }
        unmap(t) {
          this.map.delete(t);
        }
        get(t) {
          return this.map.get(t);
        }
        len() {
          return this.map.len();
        }
        contains(t) {
          return this.get(t) != null;
        }
        forEach(t) {
          this.map.forEach(t);
        }
        getAll() {
          return this.map.getAll();
        }
      }
      class dp {
        constructor(t) {
          this.raw = t || new po();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        step(t, e, n, i, s, a, o, c, l, h, u, d) {
          let p = N.intoRaw(t);
          u ? this.raw.stepWithEvents(p, e.raw, n.raw, i.raw, s.raw, a.raw, o.raw, c.raw, l.raw, h.raw, u.raw, d, d ? d.filterContactPair : null, d ? d.filterIntersectionPair : null) : this.raw.step(p, e.raw, n.raw, i.raw, s.raw, a.raw, o.raw, c.raw, l.raw, h.raw), p.free();
        }
      }
      var yl;
      (function(r) {
        r[r.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", r[r.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", r[r.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", r[r.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", r[r.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", r[r.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", r[r.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", r[r.ONLY_FIXED = 6] = "ONLY_FIXED";
      })(yl || (yl = {}));
      class fp {
        constructor(t) {
          this.raw = t || new qs();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        update(t, e) {
          this.raw.update(t.raw, e.raw);
        }
        castRay(t, e, n, i, s, a, o, c, l, h) {
          let u = N.intoRaw(n.origin), d = N.intoRaw(n.dir), p = ko.fromRaw(e, this.raw.castRay(t.raw, e.raw, u, d, i, s, a, o, c, l, h));
          return u.free(), d.free(), p;
        }
        castRayAndGetNormal(t, e, n, i, s, a, o, c, l, h) {
          let u = N.intoRaw(n.origin), d = N.intoRaw(n.dir), p = $s.fromRaw(e, this.raw.castRayAndGetNormal(t.raw, e.raw, u, d, i, s, a, o, c, l, h));
          return u.free(), d.free(), p;
        }
        intersectionsWithRay(t, e, n, i, s, a, o, c, l, h, u) {
          let d = N.intoRaw(n.origin), p = N.intoRaw(n.dir), _ = (w) => a($s.fromRaw(e, w));
          this.raw.intersectionsWithRay(t.raw, e.raw, d, p, i, s, _, o, c, l, h, u), d.free(), p.free();
        }
        intersectionWithShape(t, e, n, i, s, a, o, c, l, h) {
          let u = N.intoRaw(n), d = Jt.intoRaw(i), p = s.intoRaw(), _ = this.raw.intersectionWithShape(t.raw, e.raw, u, d, p, a, o, c, l, h);
          return u.free(), d.free(), p.free(), _;
        }
        projectPoint(t, e, n, i, s, a, o, c, l) {
          let h = N.intoRaw(n), u = Js.fromRaw(e, this.raw.projectPoint(t.raw, e.raw, h, i, s, a, o, c, l));
          return h.free(), u;
        }
        projectPointAndGetFeature(t, e, n, i, s, a, o, c) {
          let l = N.intoRaw(n), h = Js.fromRaw(e, this.raw.projectPointAndGetFeature(t.raw, e.raw, l, i, s, a, o, c));
          return l.free(), h;
        }
        intersectionsWithPoint(t, e, n, i, s, a, o, c, l) {
          let h = N.intoRaw(n);
          this.raw.intersectionsWithPoint(t.raw, e.raw, h, i, s, a, o, c, l), h.free();
        }
        castShape(t, e, n, i, s, a, o, c, l, h, u, d, p) {
          let _ = N.intoRaw(n), w = Jt.intoRaw(i), m = N.intoRaw(s), f = a.intoRaw(), b = ia.fromRaw(e, this.raw.castShape(t.raw, e.raw, _, w, m, f, o, c, l, h, u, d, p));
          return _.free(), w.free(), m.free(), f.free(), b;
        }
        intersectionsWithShape(t, e, n, i, s, a, o, c, l, h, u) {
          let d = N.intoRaw(n), p = Jt.intoRaw(i), _ = s.intoRaw();
          this.raw.intersectionsWithShape(t.raw, e.raw, d, p, _, a, o, c, l, h, u), d.free(), p.free(), _.free();
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
          let i = N.intoRaw(t), s = N.intoRaw(e);
          this.raw.collidersWithAabbIntersectingAabb(i, s, n), i.free(), s.free();
        }
      }
      class xl {
        constructor(t) {
          this.raw = t || new go();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0;
        }
        serializeAll(t, e, n, i, s, a, o, c, l) {
          let h = N.intoRaw(t);
          const u = this.raw.serializeAll(h, e.raw, n.raw, i.raw, s.raw, a.raw, o.raw, c.raw, l.raw);
          return h.free(), u;
        }
        deserializeAll(t) {
          return Vo.fromRaw(this.raw.deserializeAll(t));
        }
      }
      class pp {
        constructor(t, e) {
          this.vertices = t, this.colors = e;
        }
      }
      class mp {
        constructor(t) {
          this.raw = t || new ho();
        }
        free() {
          this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
        }
        render(t, e, n, i, s) {
          this.raw.render(t.raw, e.raw, n.raw, i.raw, s.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
        }
      }
      class _p {
      }
      class gp {
        constructor(t, e, n, i, s) {
          this.params = e, this.bodies = n, this.colliders = i, this.queries = s, this.raw = new fo(t), this.rawCharacterCollision = new Xs(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
        }
        free() {
          this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
        }
        up() {
          return this.raw.up();
        }
        setUp(t) {
          let e = N.intoRaw(t);
          return this.raw.setUp(e);
        }
        applyImpulsesToDynamicBodies() {
          return this._applyImpulsesToDynamicBodies;
        }
        setApplyImpulsesToDynamicBodies(t) {
          this._applyImpulsesToDynamicBodies = t;
        }
        characterMass() {
          return this._characterMass;
        }
        setCharacterMass(t) {
          this._characterMass = t;
        }
        offset() {
          return this.raw.offset();
        }
        setOffset(t) {
          this.raw.setOffset(t);
        }
        slideEnabled() {
          return this.raw.slideEnabled();
        }
        setSlideEnabled(t) {
          this.raw.setSlideEnabled(t);
        }
        autostepMaxHeight() {
          return this.raw.autostepMaxHeight();
        }
        autostepMinWidth() {
          return this.raw.autostepMinWidth();
        }
        autostepIncludesDynamicBodies() {
          return this.raw.autostepIncludesDynamicBodies();
        }
        autostepEnabled() {
          return this.raw.autostepEnabled();
        }
        enableAutostep(t, e, n) {
          this.raw.enableAutostep(t, e, n);
        }
        disableAutostep() {
          return this.raw.disableAutostep();
        }
        maxSlopeClimbAngle() {
          return this.raw.maxSlopeClimbAngle();
        }
        setMaxSlopeClimbAngle(t) {
          this.raw.setMaxSlopeClimbAngle(t);
        }
        minSlopeSlideAngle() {
          return this.raw.minSlopeSlideAngle();
        }
        setMinSlopeSlideAngle(t) {
          this.raw.setMinSlopeSlideAngle(t);
        }
        snapToGroundDistance() {
          return this.raw.snapToGroundDistance();
        }
        enableSnapToGround(t) {
          this.raw.enableSnapToGround(t);
        }
        disableSnapToGround() {
          this.raw.disableSnapToGround();
        }
        snapToGroundEnabled() {
          return this.raw.snapToGroundEnabled();
        }
        computeColliderMovement(t, e, n, i, s) {
          let a = N.intoRaw(e);
          this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, t.handle, a, this._applyImpulsesToDynamicBodies, this._characterMass, n, i, this.colliders.castClosure(s)), a.free();
        }
        computedMovement() {
          return N.fromRaw(this.raw.computedMovement());
        }
        computedGrounded() {
          return this.raw.computedGrounded();
        }
        numComputedCollisions() {
          return this.raw.numComputedCollisions();
        }
        computedCollision(t, e) {
          if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
            let n = this.rawCharacterCollision;
            return e = e ?? new _p(), e.translationApplied = N.fromRaw(n.translationApplied()), e.translationRemaining = N.fromRaw(n.translationRemaining()), e.toi = n.toi(), e.witness1 = N.fromRaw(n.worldWitness1()), e.witness2 = N.fromRaw(n.worldWitness2()), e.normal1 = N.fromRaw(n.worldNormal1()), e.normal2 = N.fromRaw(n.worldNormal2()), e.collider = this.colliders.get(n.handle()), e;
          } else return null;
        }
      }
      class Vo {
        constructor(t, e, n, i, s, a, o, c, l, h, u, d, p, _) {
          this.gravity = t, this.integrationParameters = new Yf(e), this.islands = new ap(n), this.broadPhase = new op(i), this.narrowPhase = new cp(s), this.bodies = new qf(a), this.colliders = new up(o), this.impulseJoints = new Qf(c), this.multibodyJoints = new rp(l), this.ccdSolver = new sp(h), this.queryPipeline = new fp(u), this.physicsPipeline = new dp(d), this.serializationPipeline = new xl(p), this.debugRenderPipeline = new mp(_), this.characterControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
        }
        free() {
          this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0;
        }
        static fromRaw(t) {
          return t ? new Vo(N.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
        }
        takeSnapshot() {
          return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        static restoreSnapshot(t) {
          return new xl().deserializeAll(t);
        }
        debugRender() {
          return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new pp(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
        }
        step(t, e) {
          this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e), this.queryPipeline.update(this.bodies, this.colliders);
        }
        propagateModifiedBodyPositionsToColliders() {
          this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
        }
        updateSceneQueries() {
          this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.bodies, this.colliders);
        }
        get timestep() {
          return this.integrationParameters.dt;
        }
        set timestep(t) {
          this.integrationParameters.dt = t;
        }
        get maxVelocityIterations() {
          return this.integrationParameters.maxVelocityIterations;
        }
        set maxVelocityIterations(t) {
          this.integrationParameters.maxVelocityIterations = t;
        }
        get maxVelocityFrictionIterations() {
          return this.integrationParameters.maxVelocityFrictionIterations;
        }
        set maxVelocityFrictionIterations(t) {
          this.integrationParameters.maxVelocityFrictionIterations = t;
        }
        get maxStabilizationIterations() {
          return this.integrationParameters.maxStabilizationIterations;
        }
        set maxStabilizationIterations(t) {
          this.integrationParameters.maxStabilizationIterations = t;
        }
        createRigidBody(t) {
          return this.bodies.createRigidBody(this.colliders, t);
        }
        createCharacterController(t) {
          let e = new gp(t, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
          return this.characterControllers.add(e), e;
        }
        removeCharacterController(t) {
          this.characterControllers.delete(t), t.free();
        }
        createCollider(t, e) {
          let n = e ? e.handle : void 0;
          return this.colliders.createCollider(this.bodies, t, n);
        }
        createImpulseJoint(t, e, n, i) {
          return this.impulseJoints.createJoint(this.bodies, t, e.handle, n.handle, i);
        }
        createMultibodyJoint(t, e, n, i) {
          return this.multibodyJoints.createJoint(t, e.handle, n.handle, i);
        }
        getRigidBody(t) {
          return this.bodies.get(t);
        }
        getCollider(t) {
          return this.colliders.get(t);
        }
        getImpulseJoint(t) {
          return this.impulseJoints.get(t);
        }
        getMultibodyJoint(t) {
          return this.multibodyJoints.get(t);
        }
        removeRigidBody(t) {
          this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
        }
        removeCollider(t, e) {
          this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
        }
        removeImpulseJoint(t, e) {
          this.impulseJoints && this.impulseJoints.remove(t.handle, e);
        }
        removeMultibodyJoint(t, e) {
          this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
        }
        forEachCollider(t) {
          this.colliders.forEach(t);
        }
        forEachRigidBody(t) {
          this.bodies.forEach(t);
        }
        forEachActiveRigidBody(t) {
          this.bodies.forEachActiveRigidBody(this.islands, t);
        }
        castRay(t, e, n, i, s, a, o, c) {
          return this.queryPipeline.castRay(this.bodies, this.colliders, t, e, n, i, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
        }
        castRayAndGetNormal(t, e, n, i, s, a, o, c) {
          return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, t, e, n, i, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
        }
        intersectionsWithRay(t, e, n, i, s, a, o, c, l) {
          this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, t, e, n, i, s, a, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
        }
        intersectionWithShape(t, e, n, i, s, a, o, c) {
          let l = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, t, e, n, i, s, a ? a.handle : null, o ? o.handle : null, this.colliders.castClosure(c));
          return l != null ? this.colliders.get(l) : null;
        }
        projectPoint(t, e, n, i, s, a, o) {
          return this.queryPipeline.projectPoint(this.bodies, this.colliders, t, e, n, i, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(o));
        }
        projectPointAndGetFeature(t, e, n, i, s, a) {
          return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, t, e, n, i ? i.handle : null, s ? s.handle : null, this.colliders.castClosure(a));
        }
        intersectionsWithPoint(t, e, n, i, s, a, o) {
          this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, t, this.colliders.castClosure(e), n, i, s ? s.handle : null, a ? a.handle : null, this.colliders.castClosure(o));
        }
        castShape(t, e, n, i, s, a, o, c, l, h, u) {
          return this.queryPipeline.castShape(this.bodies, this.colliders, t, e, n, i, s, a, o, c, l ? l.handle : null, h ? h.handle : null, this.colliders.castClosure(u));
        }
        intersectionsWithShape(t, e, n, i, s, a, o, c, l) {
          this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, t, e, n, this.colliders.castClosure(i), s, a, o ? o.handle : null, c ? c.handle : null, this.colliders.castClosure(l));
        }
        collidersWithAabbIntersectingAabb(t, e, n) {
          this.queryPipeline.collidersWithAabbIntersectingAabb(t, e, this.colliders.castClosure(n));
        }
        contactsWith(t, e) {
          this.narrowPhase.contactsWith(t.handle, this.colliders.castClosure(e));
        }
        intersectionsWith(t, e) {
          this.narrowPhase.intersectionsWith(t.handle, this.colliders.castClosure(e));
        }
        contactPair(t, e, n) {
          this.narrowPhase.contactPair(t.handle, e.handle, n);
        }
        intersectionPair(t, e) {
          return this.narrowPhase.intersectionPair(t.handle, e.handle);
        }
      }
      const Tn = Object.freeze(Object.defineProperty({
        __proto__: null,
        get ActiveCollisionTypes() {
          return yo;
        },
        Ball: Zl,
        BroadPhase: op,
        CCDSolver: sp,
        Capsule: eh,
        CharacterCollision: _p,
        get CoefficientCombineRule() {
          return Ks;
        },
        Collider: vl,
        ColliderDesc: Pe,
        ColliderSet: up,
        Cone: hh,
        ConvexPolyhedron: wo,
        Cuboid: Ql,
        Cylinder: ch,
        DebugRenderBuffers: pp,
        DebugRenderPipeline: mp,
        get FeatureType() {
          return fs;
        },
        FixedImpulseJoint: Kf,
        FixedMultibodyJoint: tp,
        HalfSpace: hp,
        Heightfield: oh,
        ImpulseJoint: qi,
        ImpulseJointSet: Qf,
        IntegrationParameters: Yf,
        IslandManager: ap,
        get JointType() {
          return zn;
        },
        KinematicCharacterController: gp,
        get MassPropsMode() {
          return dr;
        },
        get MotorModel() {
          return wl;
        },
        MultibodyJoint: Yi,
        MultibodyJointSet: rp,
        NarrowPhase: cp,
        PhysicsPipeline: dp,
        PointColliderProjection: Js,
        PointProjection: ea,
        Polyline: sh,
        PrismaticImpulseJoint: Jf,
        PrismaticMultibodyJoint: ep,
        Quaternion: ml,
        get QueryFilterFlags() {
          return yl;
        },
        QueryPipeline: fp,
        Ray: xC,
        RayColliderIntersection: $s,
        RayColliderToi: ko,
        RayIntersection: na,
        RevoluteImpulseJoint: $f,
        RevoluteMultibodyJoint: np,
        RigidBody: gl,
        RigidBodyDesc: jn,
        RigidBodySet: qf,
        get RigidBodyType() {
          return Un;
        },
        RotationOps: Jt,
        RoundCone: uh,
        RoundConvexPolyhedron: vo,
        RoundCuboid: th,
        RoundCylinder: lh,
        RoundTriangle: rh,
        SdpMatrix3: Xf,
        SdpMatrix3Ops: _l,
        Segment: nh,
        SerializationPipeline: xl,
        Shape: Ue,
        ShapeColliderTOI: ia,
        ShapeContact: ds,
        ShapeTOI: Ss,
        get ShapeType() {
          return Zt;
        },
        SphericalImpulseJoint: Zf,
        SphericalMultibodyJoint: ip,
        TempContactManifold: lp,
        TriMesh: ah,
        Triangle: ih,
        UnitImpulseJoint: Jl,
        UnitMultibodyJoint: $l,
        Vector3: jf,
        VectorOps: N,
        World: Vo
      }, Symbol.toStringTag, {
        value: "Module"
      })), vi = (r) => "/ttt/" + r.replace(/^\//, ""), An = new (window.AudioContext || window.webkitAudioContext)(), SC = false, bC = 20, MC = 20, Qa = 15, Gc = 1.8, bd = 1, EC = 1, TC = 5, wp = 2, AC = 5, RC = 1.8, Md = 4, Ed = 0.6, CC = 0.5, PC = 1, li = 25, kc = 80, LC = 400, vp = 20, IC = 3, Di = 1, DC = 0.2, UC = 0.3, NC = 0.08, zr = 40, Td = 20, Vc = 0.05, Ad = 60, FC = 0.15, Rd = 3, xo = 2, Sl = 0.3, ui = {
        x: 1,
        y: 1.75,
        z: 1.5
      }, di = {
        x: 0,
        y: 1.25,
        z: 0
      }, Cd = 2.5, OC = 0.15, BC = 0.12, Pd = 0.07, Ld = 0.5, zC = 0.7, Id = 10, yp = 100, xp = 100, Dd = 25, Wc = 25, Hr = 0.94, HC = 8, GC = 0.1, kC = 3, ka = 1, VC = 50, WC = 10, jC = 0.92, XC = 2, qC = 0.8, jc = new V0(), xe = new t0();
      xe.background = new At(2495351);
      xe.fog = new Ul(2495351, 20, 100);
      const fr = new nn(60, innerWidth / innerHeight, 0.1, 200), Mi = new Ef({
        antialias: true
      });
      Mi.setSize(innerWidth, innerHeight);
      Mi.shadowMap.enabled = true;
      Mi.shadowMap.type = kd;
      Mi.outputColorSpace = Se;
      Mi.toneMapping = Wd;
      Mi.toneMappingExposure = 1.2;
      document.body.appendChild(Mi.domElement);
      const So = new Ix(Mi);
      So.addPass(new Dx(xe, fr));
      const dh = new Gl(Ux), fh = new Gl(Nx);
      dh.uniforms.r.value = 0.5;
      fh.uniforms.r.value = 0.5;
      dh.uniforms.h.value = 0.5 / innerWidth * 10;
      fh.uniforms.v.value = 0.5 / innerHeight * 10;
      const ei = new Uf(16777215, 2);
      ei.position.set(20, 40, 20);
      ei.castShadow = true;
      ei.shadow.mapSize.set(2048, 2048);
      ei.shadow.camera.left = -60;
      ei.shadow.camera.right = 60;
      ei.shadow.camera.top = 60;
      ei.shadow.camera.bottom = -60;
      ei.shadow.camera.near = 0.5;
      ei.shadow.camera.far = 200;
      xe.add(ei);
      xe.add(new C0(16777215), 19);
      let wn, jt, ve, ts, Sp, Xn, bp, Mp, Ep, Tp, Ap, Va = null;
      const en = {};
      let Ud = 0, Xc = 0, qc = 0, Wa = 0, Nd = 0, Fd = 0, Fs = 0, Ui = 0, Gr = 0, Is = wp, kr = 0, mi = 1, to = vp, Ni = 0, Fi = false, pn = 0, Li = [], bn = null, Be = null, Fn = null, gn = null, fi = null, an = null, Nn = null, pr = null, eo = null, bl = false, Yr = null;
      const jr = [];
      let Yc = 0, ja = yp, ir = xp, _n = false, Vr = false, Od = 0, ae = null, Wn = null, Ml = null, Xa = 0, Bd = 0, qa = 0, Kc = {
        x: 0,
        z: 0
      }, Ds = [], Jc = {
        x: 0,
        y: 2,
        z: 0
      }, Wr = new C(0, 0, 0), Us = -1, rr = {
        x: 0,
        y: 0,
        z: 0
      }, sr = {
        x: 0,
        y: 0,
        z: 0
      };
      const YC = 0.7, zd = new Zr(0.2, 8, 8), KC = new gs({
        color: 16737792,
        emissive: 16729088,
        emissiveIntensity: 1.2
      }), JC = new Zs(xo, xo), $C = new Zs(Sl, Sl);
      let Ii = null, El = null, Ya = null, Rp = null, Tl = null, Al = null, Cp = null, pi = null;
      async function Os(r) {
        try {
          const t = await fetch(r);
          if (!t.ok) return null;
          const e = await t.arrayBuffer();
          return await An.decodeAudioData(e);
        } catch (t) {
          return console.warn("Audio load failed:", r, t.message), null;
        }
      }
      async function ZC() {
        El = await Os(vi("/assets/audio/engine.ogg"));
      }
      async function QC() {
        [Rp, Tl, Al, Cp] = await Promise.all([
          Os(vi("/assets/audio/hiss.mp3")),
          Os(vi("/assets/audio/laser.mp3")),
          Os(vi("/assets/audio/shot.wav")),
          Os(vi("/assets/audio/reload.mp3"))
        ]);
      }
      function Ka(r) {
        if (!r) return;
        const t = An.createBufferSource();
        t.buffer = r, t.connect(An.destination), t.start(0);
      }
      function t1() {
        !Tl || pi || (pi = An.createBufferSource(), pi.buffer = Tl, pi.loop = true, pi.connect(An.destination), pi.start(0));
      }
      function e1() {
        pi && (pi.stop(), pi = null);
      }
      function n1() {
        if (!El) return;
        const r = Math.abs(Ui), t = Math.min(r / Qa, 1);
        !Ii && t > 0 && (Ii = An.createBufferSource(), Ii.buffer = El, Ii.loop = true, Ya = An.createGain(), Ya.gain.value = 0, Ii.connect(Ya).connect(An.destination), Ii.start(0)), Ii && (Ii.playbackRate.value = 0.8 + t * 1.2, Ya.gain.value = 0.08 + t * 0.25);
      }
      function $c(r, t, e, n, i, s) {
        if (!r || t <= 0) return t;
        const a = Math.max(0, t - e);
        if (n === "primary" && i && s) {
          const o = Math.sqrt(i.x ** 2 + i.y ** 2 + i.z ** 2) || 1e-3, c = i.x / o, l = i.y / o, h = i.z / o;
          s.x += c * Wc, s.y += l * Wc, s.z += h * Wc;
        }
        return a;
      }
      function Hd(r, t, e, n) {
        if (!Yr) return;
        const i = e.dot(t) < 0 ? t : t.clone().negate(), s = n === xo ? JC : $C, a = new Bn({
          map: Yr,
          transparent: true,
          opacity: 0.95,
          depthWrite: true,
          polygonOffset: true,
          polygonOffsetFactor: -4,
          polygonOffsetUnits: -4,
          side: On
        }), o = new Re(s, a);
        o.position.copy(r).addScaledVector(i, 0.5), o.quaternion.setFromUnitVectors(new C(0, 0, 1), i), o.rotateOnWorldAxis(i, Math.random() * Math.PI * 2), o.renderOrder = 1, xe.add(o), jr.push({
          mesh: o,
          createdAt: performance.now() / 1e3
        });
      }
      function i1(r) {
        const t = r.clone();
        t.traverse((u) => {
          var _a2, _b2;
          u.isMesh && (u.material = (_a2 = u.material) == null ? void 0 : _a2.clone(), ((_b2 = u.material) == null ? void 0 : _b2.color) && u.material.color.multiplyScalar(0.6));
        });
        const e = t.getObjectByName("Body"), n = t.getObjectByName("Barrel"), i = t.getObjectByName("Wheel-FL"), s = t.getObjectByName("Wheel-FR"), a = t.getObjectByName("Wheel-BL"), o = t.getObjectByName("Wheel-BR"), c = Tn.ColliderDesc.cuboid(ui.x, ui.y, ui.z).setMass(200).setFriction(1.2).setRestitution(0.1).setTranslation(di.x, di.y, di.z), l = wn.createRigidBody(Tn.RigidBodyDesc.dynamic().enabledRotations(true, true, true).setLinearDamping(0).setAngularDamping(15)), h = wn.createCollider(c, l);
        return l.setTranslation({
          x: 15,
          y: 2,
          z: 15
        }, true), xe.add(t), {
          mesh: t,
          body: e,
          barrel: n,
          wFL: i,
          wFR: s,
          wBL: a,
          wBR: o,
          rigidBody: l,
          collider: h
        };
      }
      function Zc(r, t) {
        if (!r) return;
        const e = [];
        return r.traverse((n) => {
          var _a2;
          if (n.isMesh && n.geometry) {
            const i = new Re(n.geometry.clone(), ((_a2 = n.material) == null ? void 0 : _a2.clone()) ?? new Bn({
              color: 3355443
            }));
            i.position.setFromMatrixPosition(n.matrixWorld), i.quaternion.setFromRotationMatrix(n.matrix), i.scale.copy(n.getWorldScale(new C())), xe.add(i), e.push({
              mesh: i,
              vel: new C((Math.random() - 0.5) * 8, Math.random() * 6 + 4, (Math.random() - 0.5) * 8),
              rotVel: new C((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4)
            }), n.visible = false;
          }
        }), t && wn.removeRigidBody(t), xe.remove(r), e;
      }
      function r1(r, t) {
        const e = t ? r.clone().applyMatrix4(t) : r, n = e.attributes.position, i = new Float32Array(n.count * 3);
        for (let o = 0; o < n.count; o++) i[o * 3] = n.getX(o), i[o * 3 + 1] = n.getY(o), i[o * 3 + 2] = n.getZ(o);
        const s = e.index, a = s ? new Uint32Array(s.array) : new Uint32Array([
          ...Array(n.count).keys()
        ]);
        return {
          vertices: i,
          indices: a
        };
      }
      async function s1() {
        wn = new Tn.World(new Tn.Vector3(0, -9.81, 0));
        const t = (await jc.loadAsync(vi("/assets/levels/level-01.glb"))).scene;
        t.updateMatrixWorld(true), t.traverse((m) => {
          if (m.isMesh) {
            m.castShadow = m.receiveShadow = true;
            const { vertices: f, indices: b } = r1(m.geometry, m.matrixWorld), v = Tn.ColliderDesc.trimesh(f, b).setFriction(1).setRestitution(0.05);
            wn.createCollider(v);
          }
        }), xe.add(t), ve = (await jc.loadAsync(vi("/assets/characters/tank-01.glb"))).scene, ts = ve.getObjectByName("Body"), Xn = ve.getObjectByName("Barrel"), Mp = ve.getObjectByName("Wheel-FL"), Ep = ve.getObjectByName("Wheel-FR"), Tp = ve.getObjectByName("Wheel-BL"), Ap = ve.getObjectByName("Wheel-BR"), ts && (Sp = ts.position.y), Xn && (bp = Xn.position.z), ve.traverse((m) => {
          m.isMesh && (m.castShadow = m.receiveShadow = true);
        });
        const n = Tn.ColliderDesc.cuboid(ui.x, ui.y, ui.z).setMass(200).setFriction(1.2).setRestitution(0.1).setTranslation(di.x, di.y, di.z), i = new ms(ui.x * 2, ui.y * 2, ui.z * 2);
        Va = new Rf(new h0(i), new Fl({
          color: 65280
        })), Va.position.set(di.x, di.y, di.z), Va.visible = SC, ve.add(Va), jt = wn.createRigidBody(Tn.RigidBodyDesc.dynamic().enabledRotations(true, true, true).setLinearDamping(0).setAngularDamping(15)), wn.createCollider(n, jt), jt.setTranslation({
          x: 0,
          y: 2,
          z: 0
        }, true), xe.add(ve);
        const s = await jc.loadAsync(vi("/assets/characters/tank-02.glb")), a = i1(s.scene);
        ae = a.rigidBody, Wn = a.mesh, Ml = a.body, await ZC(), await QC();
        const o = new Zr(0.3, 8, 8), c = new Bn({
          color: 16755268,
          transparent: true,
          opacity: 1
        });
        bn = new Re(o, c), bn.visible = false, xe.add(bn);
        const l = new Zr(0.4, 12, 12), h = new gs({
          color: 16755268,
          emissive: 16737826,
          emissiveIntensity: 2,
          transparent: true,
          opacity: 1
        });
        Be = new Re(l, h), Be.visible = false, xe.add(Be), pr = new ul(16720418, 0, 12, 10), pr.position.set(0, 0, 0), xe.add(pr);
        const u = new Za(), d = new Gs({
          color: 16746496,
          linewidth: 0.12,
          worldUnits: true,
          vertexColors: true,
          resolution: new Ot(innerWidth, innerHeight)
        });
        Fn = new Uc(u, d), Fn.visible = false, xe.add(Fn);
        const p = new Gs({
          color: 16777215,
          linewidth: 0.08,
          worldUnits: true,
          transparent: true,
          opacity: Vc,
          resolution: new Ot(innerWidth, innerHeight)
        }), _ = new Gs({
          color: 16729156,
          linewidth: 0.08,
          worldUnits: true,
          transparent: true,
          opacity: Vc,
          resolution: new Ot(innerWidth, innerHeight)
        });
        gn = new Uc(new Za(), p), gn.visible = false, xe.add(gn), fi = new Re(new Zr(0.25, 12, 12), new Bn({
          color: 16777215,
          transparent: true,
          opacity: Vc
        })), fi.visible = false, xe.add(fi), an = new Uc(new Za(), _), an.visible = false, xe.add(an), Nn = new ul(16755302, 0, 15, 2), Nn.position.set(0, 0, 0), xe.add(Nn), new Df().load(vi("/assets/images/bullet-hole.png"), (m) => {
          Yr = m, m.wrapS = m.wrapT = ln;
        }, void 0, () => {
          const m = document.createElement("canvas");
          m.width = m.height = 64;
          const f = m.getContext("2d"), b = f.createRadialGradient(32, 32, 0, 32, 32, 32);
          b.addColorStop(0, "rgba(40,40,40,0.95)"), b.addColorStop(0.5, "rgba(20,20,20,0.6)"), b.addColorStop(1, "rgba(0,0,0,0)"), f.fillStyle = b, f.beginPath(), f.arc(32, 32, 32, 0, Math.PI * 2), f.fill(), Yr = new l0(m), Yr.wrapS = Yr.wrapT = ln;
        }), eo = document.createElement("div"), eo.style.cssText = "position:fixed;bottom:0;left:0;right:0;padding:8px;background:rgba(0,0,0,0.5);color:#fff;font:14px monospace;", document.body.appendChild(eo), window.addEventListener("resize", () => {
          var _a2, _b2, _c2;
          fr.aspect = innerWidth / innerHeight, fr.updateProjectionMatrix(), Mi.setSize(innerWidth, innerHeight), So.setSize(innerWidth, innerHeight), ((_a2 = Fn == null ? void 0 : Fn.material) == null ? void 0 : _a2.resolution) && Fn.material.resolution.set(innerWidth, innerHeight), ((_b2 = gn == null ? void 0 : gn.material) == null ? void 0 : _b2.resolution) && gn.material.resolution.set(innerWidth, innerHeight), ((_c2 = an == null ? void 0 : an.material) == null ? void 0 : _c2.resolution) && an.material.resolution.set(innerWidth, innerHeight), dh.uniforms.h.value = 1 / innerWidth * 2, fh.uniforms.v.value = 1 / innerHeight * 2;
        }), document.addEventListener("click", () => {
          An.state === "suspended" && An.resume();
        }, {
          once: true
        }), document.addEventListener("keydown", (m) => {
          if (An.state === "suspended" && An.resume(), en[m.code] = true, m.code === "Space") {
            m.preventDefault();
            const f = !_n && mi === 1 && to > 0 && Ni <= 0 && !m.repeat, b = !_n && mi === 2 && pn < Di && !Fi;
            (f || b) && (Fs = 1), f && (bl = true);
          }
          m.code === "Digit1" && (mi = 1), m.code === "Digit2" && (mi = 2);
        }), document.addEventListener("keyup", (m) => en[m.code] = false), Pp();
      }
      function Pp() {
        var _a2, _b2;
        requestAnimationFrame(Pp);
        const r = 0.016;
        if (jt && n1(), !jt && !ae) {
          for (const y of Ds) y.mesh.position.addScaledVector(y.vel, r), y.mesh.rotation.x += y.rotVel.x * r, y.mesh.rotation.y += y.rotVel.y * r, y.mesh.rotation.z += y.rotVel.z * r, y.vel.y -= 15 * r;
          fr.position.lerp(fr.position.clone().addScaledVector(new C(0, 0, 1), 0.5 * r), 0.02), So.render();
          return;
        }
        const t = jt ? jt.translation() : {
          x: 0,
          y: 0,
          z: 0
        }, e = !_n && jt && (en.KeyW ? Qa : en.KeyS ? -Qa : 0) || 0, n = !_n && jt && (en.KeyA ? Gc : en.KeyD ? -Gc : 0) || 0, i = !_n && (en.ShiftLeft || en.ShiftRight) && Is > 0 && kr <= 0;
        i ? (Is = Math.max(0, Is - r), Is <= 0 && (kr = AC)) : kr > 0 && (kr = Math.max(0, kr - r), kr <= 0 && (Is = wp));
        const s = i ? RC : 1, a = e !== 0 ? bd : EC, o = n !== 0 ? bd : TC;
        if (Ui += (e * s - Ui) * Math.min(1, a * r), Gr += (n - Gr) * Math.min(1, o * r), !_n && jt) if (en.ShiftRight) Wa = 0;
        else {
          const y = (en.ArrowDown ? 1 : 0) - (en.ArrowUp ? 1 : 0);
          Wa = Math.max(-Ld, Math.min(Ld, Wa + y * zC * r));
        }
        const c = jt ? jt.rotation() : {
          x: 0,
          y: 0,
          z: 0,
          w: 1
        }, l = new vn(c.x, c.y, c.z, c.w), h = new C(0, 0, -1).applyQuaternion(l);
        if (jt) {
          const y = jt.linvel();
          rr.x *= Hr, rr.y *= Hr, rr.z *= Hr, jt.setLinvel({
            x: h.x * Ui + rr.x,
            y: y.y + rr.y,
            z: h.z * Ui + rr.z
          }, true), jt.setAngvel({
            x: 0,
            y: Gr,
            z: 0
          }, true);
        }
        if (jt) {
          const y = new Tn.Ray({
            x: t.x,
            y: t.y + 1,
            z: t.z
          }, {
            x: 0,
            y: -1,
            z: 0
          }), A = wn.castRayAndGetNormal(y, 3, true, null, null, null, jt);
          if (A) {
            const B = new C(A.normal.x, A.normal.y, A.normal.z).normalize(), S = h.clone().projectOnPlane(B).normalize();
            if (S.lengthSq() > 1e-4) {
              const T = new C().crossVectors(S, B).normalize(), z = new Bt().makeBasis(T, B, S.clone().negate()), q = new vn().setFromRotationMatrix(z);
              l.slerp(q, Math.min(1, Cd * r)), jt.setRotation({
                x: l.x,
                y: l.y,
                z: l.z,
                w: l.w
              }, true);
            }
          }
        }
        if (ae && !Vr) {
          const y = ae.translation(), A = jt ? jt.translation() : y, B = new C(A.x - y.x, 0, A.z - y.z), S = B.length();
          B.normalize();
          const T = ae.rotation(), z = new C(0, 0, -1).applyQuaternion(new vn(T.x, T.y, T.z, T.w)), q = z.clone();
          q.y = 0, q.normalize();
          const it = new C().crossVectors(q, B), D = q.dot(B), O = new Tn.Ray({
            x: y.x + q.x * 0.5,
            y: y.y,
            z: y.z + q.z * 0.5
          }, {
            x: q.x,
            y: 0,
            z: q.z
          }), j = wn.castRay(O, XC, true, null, null, null, ae), $ = j && j.collider.parent() === jt, K = j && !$, Y = Math.sqrt((y.x - Kc.x) ** 2 + (y.z - Kc.z) ** 2);
          Kc = {
            x: y.x,
            y: y.y,
            z: y.z
          };
          let J = S > 8 ? kC : 0, Q = it.y > 0.1 ? ka : it.y < -0.1 ? -ka : 0;
          K || !$ && Y < 0.02 && J > 0 ? (qa += r, qa > qC * 0.3 && (J = -2, Q = it.y > 0 ? ka : -ka)) : qa = Math.max(0, qa - r * 2);
          const lt = ae.linvel();
          sr.x *= Hr, sr.y *= Hr, sr.z *= Hr, ae.setLinvel({
            x: q.x * J + sr.x,
            y: lt.y + sr.y,
            z: q.z * J + sr.z
          }, true), ae.setAngvel({
            x: 0,
            y: Q,
            z: 0
          }, true);
          const X = new Tn.Ray({
            x: y.x,
            y: y.y + 1,
            z: y.z
          }, {
            x: 0,
            y: -1,
            z: 0
          }), Z = wn.castRayAndGetNormal(X, 3, true, null, null, null, ae);
          if (Z) {
            const _t = new C(Z.normal.x, Z.normal.y, Z.normal.z).normalize(), ft = q.clone().projectOnPlane(_t).normalize();
            if (ft.lengthSq() > 1e-4) {
              const Rt = new C().crossVectors(ft, _t).normalize(), Dt = new Bt().makeBasis(Rt, _t, ft.clone().negate()), Et = new vn().setFromRotationMatrix(Dt), Gt = new vn(T.x, T.y, T.z, T.w);
              Gt.slerp(Et, Math.min(1, Cd * r)), ae.setRotation({
                x: Gt.x,
                y: Gt.y,
                z: Gt.z,
                w: Gt.w
              }, true);
            }
          }
          Xa = Math.max(0, Xa - r);
          const ut = D > jC;
          if (S < VC && S > 5 && Xa <= 0 && jt && !_n && ut) {
            Xa = WC, Wn.updateMatrixWorld(true);
            const _t = Wn.getObjectByName("Barrel"), ft = _t ? new C(0, 0, -0.5).applyMatrix4(_t.matrixWorld) : new C(y.x, y.y, y.z);
            Ka(Al);
            const Rt = ae.linvel();
            Li.push({
              mesh: new Re(zd, new gs({
                color: 16737792,
                emissive: 16729088,
                emissiveIntensity: 1.2
              })),
              pos: {
                x: ft.x,
                y: ft.y,
                z: ft.z
              },
              vel: {
                x: z.x * li + Rt.x,
                y: z.y * li + Rt.y,
                z: z.z * li + Rt.z
              },
              owner: "enemy"
            }), xe.add(Li[Li.length - 1].mesh);
          }
        }
        wn.step();
        const u = jt ? jt.translation() : {
          x: 0,
          y: 0,
          z: 0
        }, d = jt ? jt.rotation() : {
          x: 0,
          y: 0,
          z: 0,
          w: 1
        };
        if (ve && (ve.position.set(u.x, u.y, u.z), ve.quaternion.set(d.x, d.y, d.z, d.w)), Wn && ae) {
          const y = ae.translation(), A = ae.rotation();
          Wn.position.set(y.x, y.y, y.z), Wn.quaternion.set(A.x, A.y, A.z, A.w), Ml && (Bd += r * 370, Ml.position.y = 0.05 * Math.sin(Bd));
        }
        for (const y of Ds) y.mesh.position.addScaledVector(y.vel, r), y.mesh.rotation.x += y.rotVel.x * r, y.mesh.rotation.y += y.rotVel.y * r, y.mesh.rotation.z += y.rotVel.z * r, y.vel.y -= 15 * r;
        if (ts && ve) {
          Ud += r * 370, ts.position.y = (Sp ?? 0) + 0.05 * Math.sin(Ud);
          const y = -Gr / Gc * OC, A = -Ui / Qa * BC;
          Xc += (y - Xc) * Pd, qc += (A - qc) * Pd, ts.rotation.set(qc + Wa, 0, Xc);
        }
        ve && (Nd += (-Ui - Gr * Ed) * r * Md, Fd += (-Ui + Gr * Ed) * r * Md, [
          Mp,
          Tp
        ].forEach((y) => {
          y && (y.rotation.x = Nd);
        }), [
          Ep,
          Ap
        ].forEach((y) => {
          y && (y.rotation.x = Fd);
        })), Xn && !_n && ve && (mi === 2 && en.Space && pn < Di && !Fi && (Fs = 1), Fs = Math.max(0, Fs - PC * r), Xn.position.z = (bp ?? 0) + CC * Fs), ve && ve.updateMatrixWorld(true);
        const p = Xn && ve ? new C(0, 0, -0.5).applyMatrix4(Xn.matrixWorld) : new C(u.x, u.y, u.z), _ = Xn && ve ? new C(0, 0, -1).clone().transformDirection(Xn.matrixWorld) : new C(0, 0, -1);
        if (Nn && Nn.position.copy(p).addScaledVector(_.clone().normalize(), 1.5), !_n && jt && bl && to > 0 && Ni <= 0) {
          bl = false, to--, Ni = IC, Ka(Al), Ka(Cp);
          const y = jt.linvel();
          Li.push({
            mesh: new Re(zd, KC),
            pos: {
              x: p.x,
              y: p.y,
              z: p.z
            },
            vel: {
              x: _.x * li + y.x,
              y: _.y * li + y.y,
              z: _.z * li + y.z
            },
            owner: "player"
          }), xe.add(Li[Li.length - 1].mesh), bn.position.copy(p), bn.visible = true, Nn.intensity = 20;
        }
        if (bn && bn.visible && (bn.material.opacity = (bn.material.opacity ?? 1) - 8 * r, (bn.material.opacity ?? 0) <= 0 && (bn.visible = false, bn.material.opacity = 1)), Be && Us >= 0) {
          Us += r;
          const y = Math.min(1, Us / YC), A = 1 - (1 - y) * (1 - y);
          Be.scale.setScalar(0.4 + 2.6 * A);
          const B = A;
          Be.material.color.setHex(16755268).lerp(new At(1118481), B), Be.material.emissive.setHex(16737826).lerp(new At(0), B), Be.material.emissiveIntensity = 2 * (1 - B), Be.material.opacity = 1 - B, y >= 1 && (Be.visible = false, Us = -1, Be.material.color.setHex(16755268), Be.material.emissive.setHex(16737826), Be.material.emissiveIntensity = 2, Be.material.opacity = 1);
        }
        if (Nn && Nn.intensity > 0 && !(mi === 2 && en.Space && pn < Di && !Fi) && (Nn.intensity = Math.max(0, Nn.intensity - 120 * r)), !_n && jt && Xn && ve) {
          const y = _.clone().normalize();
          if (mi === 1) {
            gn.visible = true, an.visible = false, Wr.lerp(p, FC), Wr.distanceTo(p) > 5 && Wr.copy(p);
            const A = jt.linvel(), B = Wr.x, S = Wr.y, T = Wr.z, z = y.x * li + A.x, q = y.y * li + A.y, it = y.z * li + A.z, D = Id, O = q * q + 2 * D * S, j = O >= 0 ? (q + Math.sqrt(O)) / D : 999, K = 500 / (Math.sqrt(z * z + it * it) || 1e-3), Y = Math.min(j, K, 30), J = [];
            for (let lt = 0; lt <= Ad; lt++) {
              const X = lt / Ad * Y;
              J.push(B + z * X, S + q * X - 0.5 * D * X * X, T + it * X);
            }
            gn.geometry.setPositions(J), gn.geometry.attributes.position.needsUpdate = true, gn.material.resolution && gn.material.resolution.set(innerWidth, innerHeight);
            const Q = J.length - 3;
            fi.position.set(J[Q], J[Q + 1], J[Q + 2]), fi.visible = true;
          } else if (gn.visible = false, fi && (fi.visible = false), !en.Space || pn >= Di || Fi) {
            an.visible = true;
            const B = new C(p.x + y.x * zr, p.y + y.y * zr, p.z + y.z * zr);
            an.geometry.setPositions([
              p.x,
              p.y,
              p.z,
              B.x,
              B.y,
              B.z
            ]), an.geometry.attributes.position.needsUpdate = true, an.material.resolution && an.material.resolution.set(innerWidth, innerHeight);
          } else an.visible = false;
        } else gn && (gn.visible = false), fi && (fi.visible = false), an && (an.visible = false);
        Ni > 0 && (Ni = Math.max(0, Ni - r));
        const w = performance.now() / 1e3;
        for (let y = jr.length - 1; y >= 0; y--) {
          const A = w - jr[y].createdAt;
          if (A >= Rd) {
            const B = jr[y];
            xe.remove(B.mesh), B.mesh.material.dispose(), jr.splice(y, 1);
          } else {
            const B = Rd - 0.5;
            A > B && (jr[y].mesh.material.opacity = 0.95 * (1 - (A - B) / 0.5));
          }
        }
        const m = (y) => y.owner === "player" ? jt : ae;
        if (Li = Li.filter((y) => {
          const A = y.pos.x, B = y.pos.y, S = y.pos.z;
          y.vel.y -= Id * r, y.pos.x += y.vel.x * r, y.pos.y += y.vel.y * r, y.pos.z += y.vel.z * r, y.mesh.position.set(y.pos.x, y.pos.y, y.pos.z);
          const T = y.pos.x - A, z = y.pos.y - B, q = y.pos.z - S, it = Math.sqrt(T * T + z * z + q * q) || 1e-3, D = {
            x: T / it,
            y: z / it,
            z: q / it
          }, O = new Tn.Ray({
            x: A,
            y: B,
            z: S
          }, D), j = wn.castRayAndGetNormal(O, it + 0.3, true, null, null, null, m(y)), $ = Math.abs(y.pos.x) > kc * 2 || y.pos.y > LC || y.pos.y < -kc * 2 || Math.abs(y.pos.z) > kc * 2;
          if (j || $) {
            if (j) {
              const K = j.collider.parent();
              if (K === ae && y.owner === "player" && !Vr) ir = $c(ae, ir, Dd, "primary", D, sr), ir <= 0 && (Vr = true, Ds.push(...Zc(Wn, ae)), Wn = null, ae = null);
              else if (K === jt && y.owner === "enemy" && !_n) ja = $c(jt, ja, Dd, "primary", D, rr), ja <= 0 && (_n = true, Ds.push(...Zc(ve, jt)), ve = null, jt = null);
              else {
                const Y = new C(O.origin.x + O.dir.x * j.toi, O.origin.y + O.dir.y * j.toi, O.origin.z + O.dir.z * j.toi), J = new C(j.normal.x, j.normal.y, j.normal.z).normalize(), Q = new C(O.dir.x, O.dir.y, O.dir.z).normalize();
                Hd(Y, J, Q, xo), Be && (Be.position.copy(Y), Be.visible = true, Be.scale.setScalar(1), Us = 0);
              }
            }
            return xe.remove(y.mesh), false;
          }
          return true;
        }), !_n && mi === 2 && en.Space && pn < Di && !Fi) if (pn = Math.min(Di, pn + DC * r), pn >= Di && (Fi = true, Ka(Rp)), pn < Di) {
          t1(), Nn.intensity = 12;
          const y = _.clone().normalize(), A = new Tn.Ray({
            x: p.x,
            y: p.y,
            z: p.z
          }, {
            x: y.x,
            y: y.y,
            z: y.z
          }), B = wn.castRayAndGetNormal(A, zr, true, null, null, null, jt), S = B ? Math.max(0.05, Math.min(zr, B.toi)) : zr;
          if (pr.position.set(p.x + y.x * S, p.y + y.y * S, p.z + y.z * S), pr.intensity = 8, ((_b2 = (_a2 = B == null ? void 0 : B.collider) == null ? void 0 : _a2.parent) == null ? void 0 : _b2.call(_a2)) === ae && !Vr && w - Od >= GC && (Od = w, ir = $c(ae, ir, HC, "secondary", null, null), ir <= 0 && (Vr = true, Ds.push(...Zc(Wn, ae)), Wn = null, ae = null)), B && (ae == null || B.collider.parent() !== ae) && (Yc -= r) <= 0) {
            Yc = 0.1;
            const D = new C(A.origin.x + A.dir.x * B.toi, A.origin.y + A.dir.y * B.toi, A.origin.z + A.dir.z * B.toi), O = new C(B.normal.x, B.normal.y, B.normal.z).normalize(), j = new C(y.x, y.y, y.z);
            Hd(D, O, j, Sl);
          }
          const z = [], q = [], it = Date.now() * 0.02;
          for (let D = 0; D < Td; D++) {
            const O = D / (Td - 1);
            z.push(p.x + y.x * S * O, p.y + y.y * S * O, p.z + y.z * S * O);
            const j = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(it + (1 - O) * 8));
            q.push(j, j * 0.4, 0);
          }
          Fn.geometry.setPositions(z), Fn.geometry.setColors(q), Fn.material.resolution.set(innerWidth, innerHeight), Fn.visible = true;
        } else Fn.visible = false;
        else e1(), Fn.visible = false, pr && (pr.intensity = 0), Yc = 0, pn = Math.max(0, pn - (Fi ? NC : UC) * r), pn <= 0 && (Fi = false);
        const b = Ni > 0 ? ` | Cooldown: ${Ni.toFixed(1)}s` : "", v = ` | HP: ${ja}/${yp}`, R = ae || Vr ? ` | Enemy: ${ir}/${xp}` : "";
        eo.textContent = `Weapon: ${mi === 1 ? "Cannon" : "Laser"} | Ammo: ${to}/${vp}${b} | Heat: ${(pn * 100).toFixed(0)}%${v}${R}`, jt ? Jc = jt.translation() : ae && (Jc = ae.translation());
        const I = Jc;
        fr.position.lerp(new C(I.x, I.y + bC, I.z + MC), 0.08), fr.lookAt(I.x, I.y, I.z), So.render();
      }
      s1();
    })();
  }
});
export default require_stdin();
