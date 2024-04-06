import {r as M, i as X, j as u, k as rt, l as Y, m as nt, h as j, C as Z, R as W, e as R, L as Oe, g as U, n as at, p as lt, D as ot, S as dt, q as A} from "./index-6a7a49be.js";
import {D as ct} from "./DevicesCard-4b67b579.js";
import {N as ut} from "./not-data-dfd9d3d1.js";
function je(e, t) {
    return Array.isArray(e) ? e.includes(t) : e === t
}
const Ae = M.createContext({});
Ae.displayName = "AccordionContext";
const ne = Ae
  , ze = M.forwardRef(({as: e="div", bsPrefix: t, className: i, children: s, eventKey: n, ...r},l)=>{
    const {activeEventKey: o} = M.useContext(ne);
    return t = X(t, "accordion-collapse"),
    u.jsx(rt, {
        ref: l,
        in: je(o, n),
        ...r,
        className: Y(i, t),
        children: u.jsx(e, {
            children: M.Children.only(s)
        })
    })
}
);
ze.displayName = "AccordionCollapse";
const Ne = ze
  , _e = M.createContext({
    eventKey: ""
});
_e.displayName = "AccordionItemContext";
const we = _e
  , Ge = M.forwardRef(({as: e="div", bsPrefix: t, className: i, onEnter: s, onEntering: n, onEntered: r, onExit: l, onExiting: o, onExited: a, ...d},f)=>{
    t = X(t, "accordion-body");
    const {eventKey: c} = M.useContext(we);
    return u.jsx(Ne, {
        eventKey: c,
        onEnter: s,
        onEntering: n,
        onEntered: r,
        onExit: l,
        onExiting: o,
        onExited: a,
        children: u.jsx(e, {
            ref: f,
            ...d,
            className: Y(i, t)
        })
    })
}
);
Ge.displayName = "AccordionBody";
const ft = Ge;
function pt(e, t) {
    const {activeEventKey: i, onSelect: s, alwaysOpen: n} = M.useContext(ne);
    return r=>{
        let l = e === i ? null : e;
        n && (Array.isArray(i) ? i.includes(e) ? l = i.filter(o=>o !== e) : l = [...i, e] : l = [e]),
        s == null || s(l, r),
        t == null || t(r)
    }
}
const De = M.forwardRef(({as: e="button", bsPrefix: t, className: i, onClick: s, ...n},r)=>{
    t = X(t, "accordion-button");
    const {eventKey: l} = M.useContext(we)
      , o = pt(l, s)
      , {activeEventKey: a} = M.useContext(ne);
    return e === "button" && (n.type = "button"),
    u.jsx(e, {
        ref: r,
        onClick: o,
        ...n,
        "aria-expanded": Array.isArray(a) ? a.includes(l) : l === a,
        className: Y(i, t, !je(a, l) && "collapsed")
    })
}
);
De.displayName = "AccordionButton";
const Be = De
  , Ve = M.forwardRef(({as: e="h2", bsPrefix: t, className: i, children: s, onClick: n, ...r},l)=>(t = X(t, "accordion-header"),
u.jsx(e, {
    ref: l,
    ...r,
    className: Y(i, t),
    children: u.jsx(Be, {
        onClick: n,
        children: s
    })
})));
Ve.displayName = "AccordionHeader";
const mt = Ve
  , Re = M.forwardRef(({as: e="div", bsPrefix: t, className: i, eventKey: s, ...n},r)=>{
    t = X(t, "accordion-item");
    const l = M.useMemo(()=>({
        eventKey: s
    }), [s]);
    return u.jsx(we.Provider, {
        value: l,
        children: u.jsx(e, {
            ref: r,
            ...n,
            className: Y(i, t)
        })
    })
}
);
Re.displayName = "AccordionItem";
const ht = Re
  , Fe = M.forwardRef((e,t)=>{
    const {as: i="div", activeKey: s, bsPrefix: n, className: r, onSelect: l, flush: o, alwaysOpen: a, ...d} = nt(e, {
        activeKey: "onSelect"
    })
      , f = X(n, "accordion")
      , c = M.useMemo(()=>({
        activeEventKey: s,
        onSelect: l,
        alwaysOpen: a
    }), [s, l, a]);
    return u.jsx(ne.Provider, {
        value: c,
        children: u.jsx(i, {
            ref: t,
            ...d,
            className: Y(r, f, o && `${f}-flush`)
        })
    })
}
);
Fe.displayName = "Accordion";
const ie = Object.assign(Fe, {
    Button: Be,
    Collapse: Ne,
    Item: ht,
    Header: mt,
    Body: ft
})
  , gt = [{
    id: 1,
    head: "100,000+",
    title: "Customers served",
    image: j.FeatureIcon
}, {
    id: 2,
    head: "3,500+",
    title: "Devices with live prices",
    image: j.FeatureIcon
}, {
    id: 3,
    head: "500+",
    title: "Electronic dealers compete to give you the best price",
    image: j.FeatureIcon
}, {
    id: 4,
    head: "4.8/5",
    title: "Customer rating",
    image: j.FeatureIcon
}]
  , vt = (e,t)=>u.jsx("div", {
    className: "d-md-flex flex-column em--why-list",
    children: u.jsxs("div", {
        className: "em--reason",
        children: [u.jsx("h3", {
            className: "",
            children: e.head
        }), u.jsx("span", {
            className: "text-primary ",
            children: e.title
        })]
    })
}, t)
  , wt = ()=>u.jsx("section", {
    className: "em--why-section em--section",
    children: u.jsx(Z, {
        children: u.jsxs(W, {
            className: "row align-items-center",
            children: [u.jsxs(R, {
                className: "col col-12 em--why-content",
                md: "6",
                children: [u.jsx("div", {
                    className: "inner-head",
                    children: "Better & Safer & Easier"
                }), u.jsx("div", {
                    className: "em--features-inline",
                    children: gt.map(vt)
                }), u.jsxs(Oe, {
                    className: "btn em--primary-button",
                    to: "/sell",
                    children: [u.jsx("span", {
                        className: "",
                        children: "Sell now"
                    }), u.jsx("span", {
                        className: "em--icon",
                        children: u.jsx(U, {
                            width: "15",
                            height: "14",
                            src: j.ArrowIconRight,
                            alt: "Right Arrow Icon"
                        })
                    })]
                })]
            }), u.jsx(R, {
                className: "col col-12 text-center",
                md: "6",
                children: u.jsx(U, {
                    src: j.FeatureImage,
                    className: "img-fluid",
                    width: "576",
                    height: "455",
                    alt: "Emart Phone Image"
                })
            })]
        })
    })
})
  , St = ()=>u.jsx(u.Fragment, {
    children: u.jsx("section", {
        className: "em--banner-section",
        children: u.jsx(Z, {
            children: u.jsx(W, {
                children: u.jsxs(R, {
                    md: 12,
                    children: [u.jsxs("div", {
                        className: "em--hero-title",
                        children: [u.jsxs("h2", {
                            children: ["Sell your used phone ", u.jsx("br", {}), "for", " ", u.jsxs("span", {
                                children: [" ", "Instant", " ", u.jsx(at, {
                                    sequence: ["Payment", 1e3, "Price", 1e3, "Pick up", 1e3],
                                    repeat: 1 / 0
                                })]
                            })]
                        }), u.jsx("p", {
                            children: "At Emartio.com, we specialize in the world of electronics, making it easier than ever to buy, sell, exchange, or evaluate your devices. Whether you're looking to upgrade to the latest smartphone, trade in your old mobile, or simply want to know the value of your gadgets, we've got you covered."
                        })]
                    }), u.jsx("div", {
                        className: "em--hero-image",
                        children: u.jsx("img", {
                            src: j.HeroImage,
                            alt: "Hero Image"
                        })
                    })]
                })
            })
        })
    })
})
  , xt = (e,t)=>u.jsx(M.Fragment, {
    children: u.jsxs("span", {
        className: "step__item",
        children: [u.jsx("span", {
            children: e.id
        }), u.jsx("p", {
            children: e.title
        })]
    })
}, t)
  , bt = ()=>{
    var r;
    const [e,t] = M.useState(null)
      , [i,s] = M.useState(!0);
    M.useEffect(()=>{
        window.scrollTo(0, 0),
        n()
    }
    , []);
    const n = async()=>{
        try {
            const l = await lt();
            t(l.data)
        } catch (l) {
            console.error("Error fetching data:", l)
        } finally {
            s(!1)
        }
    }
    ;
    return u.jsx(u.Fragment, {
        children: u.jsx("section", {
            className: "em--step-section em--section",
            children: u.jsx(Z, {
                children: u.jsx(W, {
                    children: u.jsxs(R, {
                        className: "col-md-12",
                        md: "12",
                        children: [u.jsx("div", {
                            className: "em--sub-head",
                            children: u.jsx("h2", {
                                className: "em--large-head",
                                children: "Sell your device in 3 easy steps"
                            })
                        }), u.jsx("div", {
                            className: "em--inline-features",
                            children: ot.map(xt)
                        }), u.jsxs(W, {
                            className: "device__section position-relative",
                            children: [i ? u.jsx(dt, {}) : e && e.results && ((r = e.results) != null && r.length) ? e.results.slice(0, 4).map(ct) : u.jsx(ut, {}), u.jsx(R, {
                                md: 12,
                                className: "text-center",
                                children: u.jsx(Oe, {
                                    to: "/sell",
                                    className: "em--primary-button",
                                    children: "See More"
                                })
                            })]
                        })]
                    })
                })
            })
        })
    })
}
  , Tt = [{
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 8,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 9,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 10,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 11,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}, {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique minima corporis. Repudiandae deserunt nulla ipsam soluta voluptas delectus earum tempora laborum minus amet vel similique dicta voluptatum iusto libero ratione tenetur saepe, exercitationem illum quam velit ducimus obcaecati?",
    name: "Mrunalini Bushell",
    product: "Sold used Samsung S22",
    image: j.ProductImage1
}];
function be(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function Se(e={}, t={}) {
    Object.keys(t).forEach(i=>{
        typeof e[i] > "u" ? e[i] = t[i] : be(t[i]) && be(e[i]) && Object.keys(t[i]).length > 0 && Se(e[i], t[i])
    }
    )
}
const $e = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
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
    }
};
function q() {
    const e = typeof document < "u" ? document : {};
    return Se(e, $e),
    e
}
const yt = {
    document: $e,
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
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
        null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function G() {
    const e = typeof window < "u" ? window : {};
    return Se(e, yt),
    e
}
function Et(e) {
    const t = e;
    Object.keys(t).forEach(i=>{
        try {
            t[i] = null
        } catch {}
        try {
            delete t[i]
        } catch {}
    }
    )
}
function me(e, t=0) {
    return setTimeout(e, t)
}
function re() {
    return Date.now()
}
function Ct(e) {
    const t = G();
    let i;
    return t.getComputedStyle && (i = t.getComputedStyle(e, null)),
    !i && e.currentStyle && (i = e.currentStyle),
    i || (i = e.style),
    i
}
function Mt(e, t="x") {
    const i = G();
    let s, n, r;
    const l = Ct(e);
    return i.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform,
    n.split(",").length > 6 && (n = n.split(", ").map(o=>o.replace(",", ".")).join(", ")),
    r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    s = r.toString().split(",")),
    t === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])),
    t === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])),
    n || 0
}
function ee(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function Pt(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function _(...e) {
    const t = Object(e[0])
      , i = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < e.length; s += 1) {
        const n = e[s];
        if (n != null && !Pt(n)) {
            const r = Object.keys(Object(n)).filter(l=>i.indexOf(l) < 0);
            for (let l = 0, o = r.length; l < o; l += 1) {
                const a = r[l]
                  , d = Object.getOwnPropertyDescriptor(n, a);
                d !== void 0 && d.enumerable && (ee(t[a]) && ee(n[a]) ? n[a].__swiper__ ? t[a] = n[a] : _(t[a], n[a]) : !ee(t[a]) && ee(n[a]) ? (t[a] = {},
                n[a].__swiper__ ? t[a] = n[a] : _(t[a], n[a])) : t[a] = n[a])
            }
        }
    }
    return t
}
function te(e, t, i) {
    e.style.setProperty(t, i)
}
function ke({swiper: e, targetPosition: t, side: i}) {
    const s = G()
      , n = -e.translate;
    let r = null, l;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
    s.cancelAnimationFrame(e.cssModeFrameID);
    const a = t > n ? "next" : "prev"
      , d = (c,m)=>a === "next" && c >= m || a === "prev" && c <= m
      , f = ()=>{
        l = new Date().getTime(),
        r === null && (r = l);
        const c = Math.max(Math.min((l - r) / o, 1), 0)
          , m = .5 - Math.cos(c * Math.PI) / 2;
        let p = n + m * (t - n);
        if (d(p, t) && (p = t),
        e.wrapperEl.scrollTo({
            [i]: p
        }),
        d(p, t)) {
            e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.scrollSnapType = "",
            setTimeout(()=>{
                e.wrapperEl.style.overflow = "",
                e.wrapperEl.scrollTo({
                    [i]: p
                })
            }
            ),
            s.cancelAnimationFrame(e.cssModeFrameID);
            return
        }
        e.cssModeFrameID = s.requestAnimationFrame(f)
    }
    ;
    f()
}
function V(e, t="") {
    return [...e.children].filter(i=>i.matches(t))
}
function It(e, t=[]) {
    const i = document.createElement(e);
    return i.classList.add(...Array.isArray(t) ? t : [t]),
    i
}
function Lt(e, t) {
    const i = [];
    for (; e.previousElementSibling; ) {
        const s = e.previousElementSibling;
        t ? s.matches(t) && i.push(s) : i.push(s),
        e = s
    }
    return i
}
function Ot(e, t) {
    const i = [];
    for (; e.nextElementSibling; ) {
        const s = e.nextElementSibling;
        t ? s.matches(t) && i.push(s) : i.push(s),
        e = s
    }
    return i
}
function F(e, t) {
    return G().getComputedStyle(e, null).getPropertyValue(t)
}
function Te(e) {
    let t = e, i;
    if (t) {
        for (i = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (i += 1);
        return i
    }
}
function jt(e, t) {
    const i = [];
    let s = e.parentElement;
    for (; s; )
        t ? s.matches(t) && i.push(s) : i.push(s),
        s = s.parentElement;
    return i
}
function ye(e, t, i) {
    const s = G();
    return i ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let de;
function At() {
    const e = G()
      , t = q();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function qe() {
    return de || (de = At()),
    de
}
let ce;
function zt({userAgent: e}={}) {
    const t = qe()
      , i = G()
      , s = i.navigator.platform
      , n = e || i.navigator.userAgent
      , r = {
        ios: !1,
        android: !1
    }
      , l = i.screen.width
      , o = i.screen.height
      , a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/)
      , c = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , m = s === "Win32";
    let p = s === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && p && t.touch && v.indexOf(`${l}x${o}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/),
    d || (d = [0, 1, "13_0_0"]),
    p = !1),
    a && !m && (r.os = "android",
    r.android = !0),
    (d || c || f) && (r.os = "ios",
    r.ios = !0),
    r
}
function Nt(e={}) {
    return ce || (ce = zt(e)),
    ce
}
let ue;
function _t() {
    const e = G();
    let t = !1;
    function i() {
        const s = e.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (i()) {
        const s = String(e.navigator.userAgent);
        if (s.includes("Version/")) {
            const [n,r] = s.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));
            t = n < 16 || n === 16 && r < 2
        }
    }
    return {
        isSafari: t || i(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function Gt() {
    return ue || (ue = _t()),
    ue
}
function Dt({swiper: e, on: t, emit: i}) {
    const s = G();
    let n = null
      , r = null;
    const l = ()=>{
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
        i("resize"))
    }
      , o = ()=>{
        !e || e.destroyed || !e.initialized || (n = new ResizeObserver(f=>{
            r = s.requestAnimationFrame(()=>{
                const {width: c, height: m} = e;
                let p = c
                  , v = m;
                f.forEach(({contentBoxSize: g, contentRect: S, target: h})=>{
                    h && h !== e.el || (p = S ? S.width : (g[0] || g).inlineSize,
                    v = S ? S.height : (g[0] || g).blockSize)
                }
                ),
                (p !== c || v !== m) && l()
            }
            )
        }
        ),
        n.observe(e.el))
    }
      , a = ()=>{
        r && s.cancelAnimationFrame(r),
        n && n.unobserve && e.el && (n.unobserve(e.el),
        n = null)
    }
      , d = ()=>{
        !e || e.destroyed || !e.initialized || i("orientationchange")
    }
    ;
    t("init", ()=>{
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            o();
            return
        }
        s.addEventListener("resize", l),
        s.addEventListener("orientationchange", d)
    }
    ),
    t("destroy", ()=>{
        a(),
        s.removeEventListener("resize", l),
        s.removeEventListener("orientationchange", d)
    }
    )
}
function Bt({swiper: e, extendParams: t, on: i, emit: s}) {
    const n = []
      , r = G()
      , l = (d,f={})=>{
        const c = r.MutationObserver || r.WebkitMutationObserver
          , m = new c(p=>{
            if (e.__preventObserver__)
                return;
            if (p.length === 1) {
                s("observerUpdate", p[0]);
                return
            }
            const v = function() {
                s("observerUpdate", p[0])
            };
            r.requestAnimationFrame ? r.requestAnimationFrame(v) : r.setTimeout(v, 0)
        }
        );
        m.observe(d, {
            attributes: typeof f.attributes > "u" ? !0 : f.attributes,
            childList: typeof f.childList > "u" ? !0 : f.childList,
            characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }),
        n.push(m)
    }
      , o = ()=>{
        if (e.params.observer) {
            if (e.params.observeParents) {
                const d = jt(e.el);
                for (let f = 0; f < d.length; f += 1)
                    l(d[f])
            }
            l(e.el, {
                childList: e.params.observeSlideChildren
            }),
            l(e.wrapperEl, {
                attributes: !1
            })
        }
    }
      , a = ()=>{
        n.forEach(d=>{
            d.disconnect()
        }
        ),
        n.splice(0, n.length)
    }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    i("init", o),
    i("destroy", a)
}
const Vt = {
    on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function")
            return s;
        const n = i ? "unshift" : "push";
        return e.split(" ").forEach(r=>{
            s.eventsListeners[r] || (s.eventsListeners[r] = []),
            s.eventsListeners[r][n](t)
        }
        ),
        s
    },
    once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function")
            return s;
        function n(...r) {
            s.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(s, r)
        }
        return n.__emitterProxy = t,
        s.on(e, n, i)
    },
    onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const s = t ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e),
        i
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1),
        t
    },
    off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || e.split(" ").forEach(s=>{
            typeof t > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n,r)=>{
                (n === t || n.__emitterProxy && n.__emitterProxy === t) && i.eventsListeners[s].splice(r, 1)
            }
            )
        }
        ),
        i
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let i, s, n;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (i = e[0],
        s = e.slice(1, e.length),
        n = t) : (i = e[0].events,
        s = e[0].data,
        n = e[0].context || t),
        s.unshift(n),
        (Array.isArray(i) ? i : i.split(" ")).forEach(l=>{
            t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(o=>{
                o.apply(n, [l, ...s])
            }
            ),
            t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach(o=>{
                o.apply(n, s)
            }
            )
        }
        ),
        t
    }
};
function Rt() {
    const e = this;
    let t, i;
    const s = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = s.clientWidth,
    typeof e.params.height < "u" && e.params.height !== null ? i = e.params.height : i = s.clientHeight,
    !(t === 0 && e.isHorizontal() || i === 0 && e.isVertical()) && (t = t - parseInt(F(s, "padding-left") || 0, 10) - parseInt(F(s, "padding-right") || 0, 10),
    i = i - parseInt(F(s, "padding-top") || 0, 10) - parseInt(F(s, "padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(i) && (i = 0),
    Object.assign(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i
    }))
}
function Ft() {
    const e = this;
    function t(w) {
        return e.isHorizontal() ? w : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[w]
    }
    function i(w, E) {
        return parseFloat(w.getPropertyValue(t(E)) || 0)
    }
    const s = e.params
      , {wrapperEl: n, slidesEl: r, size: l, rtlTranslate: o, wrongRTL: a} = e
      , d = e.virtual && s.virtual.enabled
      , f = d ? e.virtual.slides.length : e.slides.length
      , c = V(r, `.${e.params.slideClass}, swiper-slide`)
      , m = d ? e.virtual.slides.length : c.length;
    let p = [];
    const v = []
      , g = [];
    let S = s.slidesOffsetBefore;
    typeof S == "function" && (S = s.slidesOffsetBefore.call(e));
    let h = s.slidesOffsetAfter;
    typeof h == "function" && (h = s.slidesOffsetAfter.call(e));
    const P = e.snapGrid.length
      , b = e.slidesGrid.length;
    let x = s.spaceBetween
      , C = -S
      , y = 0
      , O = 0;
    if (typeof l > "u")
        return;
    typeof x == "string" && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * l : typeof x == "string" && (x = parseFloat(x)),
    e.virtualSize = -x,
    c.forEach(w=>{
        o ? w.style.marginLeft = "" : w.style.marginRight = "",
        w.style.marginBottom = "",
        w.style.marginTop = ""
    }
    ),
    s.centeredSlides && s.cssMode && (te(n, "--swiper-centered-offset-before", ""),
    te(n, "--swiper-centered-offset-after", ""));
    const T = s.grid && s.grid.rows > 1 && e.grid;
    T && e.grid.initSlides(m);
    let L;
    const ae = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(w=>typeof s.breakpoints[w].slidesPerView < "u").length > 0;
    for (let w = 0; w < m; w += 1) {
        L = 0;
        let E;
        if (c[w] && (E = c[w]),
        T && e.grid.updateSlide(w, E, m, t),
        !(c[w] && F(E, "display") === "none")) {
            if (s.slidesPerView === "auto") {
                ae && (c[w].style[t("width")] = "");
                const I = getComputedStyle(E)
                  , N = E.style.transform
                  , H = E.style.webkitTransform;
                if (N && (E.style.transform = "none"),
                H && (E.style.webkitTransform = "none"),
                s.roundLengths)
                    L = e.isHorizontal() ? ye(E, "width", !0) : ye(E, "height", !0);
                else {
                    const J = i(I, "width")
                      , le = i(I, "padding-left")
                      , oe = i(I, "padding-right")
                      , z = i(I, "margin-left")
                      , D = i(I, "margin-right")
                      , xe = I.getPropertyValue("box-sizing");
                    if (xe && xe === "border-box")
                        L = J + z + D;
                    else {
                        const {clientWidth: it, offsetWidth: st} = E;
                        L = J + le + oe + z + D + (st - it)
                    }
                }
                N && (E.style.transform = N),
                H && (E.style.webkitTransform = H),
                s.roundLengths && (L = Math.floor(L))
            } else
                L = (l - (s.slidesPerView - 1) * x) / s.slidesPerView,
                s.roundLengths && (L = Math.floor(L)),
                c[w] && (c[w].style[t("width")] = `${L}px`);
            c[w] && (c[w].swiperSlideSize = L),
            g.push(L),
            s.centeredSlides ? (C = C + L / 2 + y / 2 + x,
            y === 0 && w !== 0 && (C = C - l / 2 - x),
            w === 0 && (C = C - l / 2 - x),
            Math.abs(C) < 1 / 1e3 && (C = 0),
            s.roundLengths && (C = Math.floor(C)),
            O % s.slidesPerGroup === 0 && p.push(C),
            v.push(C)) : (s.roundLengths && (C = Math.floor(C)),
            (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 && p.push(C),
            v.push(C),
            C = C + L + x),
            e.virtualSize += L + x,
            y = L,
            O += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, l) + h,
    o && a && (s.effect === "slide" || s.effect === "coverflow") && (n.style.width = `${e.virtualSize + x}px`),
    s.setWrapperSize && (n.style[t("width")] = `${e.virtualSize + x}px`),
    T && e.grid.updateWrapperSize(L, p, t),
    !s.centeredSlides) {
        const w = [];
        for (let E = 0; E < p.length; E += 1) {
            let I = p[E];
            s.roundLengths && (I = Math.floor(I)),
            p[E] <= e.virtualSize - l && w.push(I)
        }
        p = w,
        Math.floor(e.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - l)
    }
    if (d && s.loop) {
        const w = g[0] + x;
        if (s.slidesPerGroup > 1) {
            const E = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
              , I = w * s.slidesPerGroup;
            for (let N = 0; N < E; N += 1)
                p.push(p[p.length - 1] + I)
        }
        for (let E = 0; E < e.virtual.slidesBefore + e.virtual.slidesAfter; E += 1)
            s.slidesPerGroup === 1 && p.push(p[p.length - 1] + w),
            v.push(v[v.length - 1] + w),
            e.virtualSize += w
    }
    if (p.length === 0 && (p = [0]),
    x !== 0) {
        const w = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((E,I)=>!s.cssMode || s.loop ? !0 : I !== c.length - 1).forEach(E=>{
            E.style[w] = `${x}px`
        }
        )
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let w = 0;
        g.forEach(I=>{
            w += I + (x || 0)
        }
        ),
        w -= x;
        const E = w - l;
        p = p.map(I=>I < 0 ? -S : I > E ? E + h : I)
    }
    if (s.centerInsufficientSlides) {
        let w = 0;
        if (g.forEach(E=>{
            w += E + (x || 0)
        }
        ),
        w -= x,
        w < l) {
            const E = (l - w) / 2;
            p.forEach((I,N)=>{
                p[N] = I - E
            }
            ),
            v.forEach((I,N)=>{
                v[N] = I + E
            }
            )
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: p,
        slidesGrid: v,
        slidesSizesGrid: g
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        te(n, "--swiper-centered-offset-before", `${-p[0]}px`),
        te(n, "--swiper-centered-offset-after", `${e.size / 2 - g[g.length - 1] / 2}px`);
        const w = -e.snapGrid[0]
          , E = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(I=>I + w),
        e.slidesGrid = e.slidesGrid.map(I=>I + E)
    }
    if (m !== f && e.emit("slidesLengthChange"),
    p.length !== P && (e.params.watchOverflow && e.checkOverflow(),
    e.emit("snapGridLengthChange")),
    v.length !== b && e.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && e.updateSlidesOffset(),
    !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const w = `${s.containerModifierClass}backface-hidden`
          , E = e.el.classList.contains(w);
        m <= s.maxBackfaceHiddenSlides ? E || e.el.classList.add(w) : E && e.el.classList.remove(w)
    }
}
function $t(e) {
    const t = this
      , i = []
      , s = t.virtual && t.params.virtual.enabled;
    let n = 0, r;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = o=>s ? t.slides[t.getSlideIndexByData(o)] : t.slides[o];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(o=>{
                i.push(o)
            }
            );
        else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const o = t.activeIndex + r;
                if (o > t.slides.length && !s)
                    break;
                i.push(l(o))
            }
    else
        i.push(l(t.activeIndex));
    for (r = 0; r < i.length; r += 1)
        if (typeof i[r] < "u") {
            const o = i[r].offsetHeight;
            n = o > n ? o : n
        }
    (n || n === 0) && (t.wrapperEl.style.height = `${n}px`)
}
function kt() {
    const e = this
      , t = e.slides
      , i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment()
}
function qt(e=this && this.translate || 0) {
    const t = this
      , i = t.params
      , {slides: s, rtlTranslate: n, snapGrid: r} = t;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    n && (l = e),
    s.forEach(a=>{
        a.classList.remove(i.slideVisibleClass)
    }
    ),
    t.visibleSlidesIndexes = [],
    t.visibleSlides = [];
    let o = i.spaceBetween;
    typeof o == "string" && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : typeof o == "string" && (o = parseFloat(o));
    for (let a = 0; a < s.length; a += 1) {
        const d = s[a];
        let f = d.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (f -= s[0].swiperSlideOffset);
        const c = (l + (i.centeredSlides ? t.minTranslate() : 0) - f) / (d.swiperSlideSize + o)
          , m = (l - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - f) / (d.swiperSlideSize + o)
          , p = -(l - f)
          , v = p + t.slidesSizesGrid[a];
        (p >= 0 && p < t.size - 1 || v > 1 && v <= t.size || p <= 0 && v >= t.size) && (t.visibleSlides.push(d),
        t.visibleSlidesIndexes.push(a),
        s[a].classList.add(i.slideVisibleClass)),
        d.progress = n ? -c : c,
        d.originalProgress = n ? -m : m
    }
}
function Ht(e) {
    const t = this;
    if (typeof e > "u") {
        const f = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * f || 0
    }
    const i = t.params
      , s = t.maxTranslate() - t.minTranslate();
    let {progress: n, isBeginning: r, isEnd: l, progressLoop: o} = t;
    const a = r
      , d = l;
    if (s === 0)
        n = 0,
        r = !0,
        l = !0;
    else {
        n = (e - t.minTranslate()) / s;
        const f = Math.abs(e - t.minTranslate()) < 1
          , c = Math.abs(e - t.maxTranslate()) < 1;
        r = f || n <= 0,
        l = c || n >= 1,
        f && (n = 0),
        c && (n = 1)
    }
    if (i.loop) {
        const f = t.getSlideIndexByData(0)
          , c = t.getSlideIndexByData(t.slides.length - 1)
          , m = t.slidesGrid[f]
          , p = t.slidesGrid[c]
          , v = t.slidesGrid[t.slidesGrid.length - 1]
          , g = Math.abs(e);
        g >= m ? o = (g - m) / v : o = (g + v - p) / v,
        o > 1 && (o -= 1)
    }
    Object.assign(t, {
        progress: n,
        progressLoop: o,
        isBeginning: r,
        isEnd: l
    }),
    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e),
    r && !a && t.emit("reachBeginning toEdge"),
    l && !d && t.emit("reachEnd toEdge"),
    (a && !r || d && !l) && t.emit("fromEdge"),
    t.emit("progress", n)
}
function Wt() {
    const e = this
      , {slides: t, params: i, slidesEl: s, activeIndex: n} = e
      , r = e.virtual && i.virtual.enabled
      , l = a=>V(s, `.${i.slideClass}${a}, swiper-slide${a}`)[0];
    t.forEach(a=>{
        a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
    }
    );
    let o;
    if (r)
        if (i.loop) {
            let a = n - e.virtual.slidesBefore;
            a < 0 && (a = e.virtual.slides.length + a),
            a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
            o = l(`[data-swiper-slide-index="${a}"]`)
        } else
            o = l(`[data-swiper-slide-index="${n}"]`);
    else
        o = t[n];
    if (o) {
        o.classList.add(i.slideActiveClass);
        let a = Ot(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !a && (a = t[0]),
        a && a.classList.add(i.slideNextClass);
        let d = Lt(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !d === 0 && (d = t[t.length - 1]),
        d && d.classList.add(i.slidePrevClass)
    }
    e.emitSlidesClasses()
}
const se = (e,t)=>{
    if (!e || e.destroyed || !e.params)
        return;
    const i = ()=>e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      , s = t.closest(i());
    if (s) {
        const n = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        n && n.remove()
    }
}
  , Ee = (e,t)=>{
    if (!e.slides[t])
        return;
    const i = e.slides[t].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading")
}
  , he = e=>{
    if (!e || e.destroyed || !e.params)
        return;
    let t = e.params.lazyPreloadPrevNext;
    const i = e.slides.length;
    if (!i || !t || t < 0)
        return;
    t = Math.min(t, i);
    const s = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
      , n = e.activeIndex
      , r = n + s - 1;
    if (e.params.rewind)
        for (let l = n - t; l <= r + t; l += 1) {
            const o = (l % i + i) % i;
            o !== n && o > r && Ee(e, o)
        }
    else
        for (let l = Math.max(r - t, 0); l <= Math.min(r + t, i - 1); l += 1)
            l !== n && l > r && Ee(e, l)
}
;
function Xt(e) {
    const {slidesGrid: t, params: i} = e
      , s = e.rtlTranslate ? e.translate : -e.translate;
    let n;
    for (let r = 0; r < t.length; r += 1)
        typeof t[r + 1] < "u" ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2 ? n = r : s >= t[r] && s < t[r + 1] && (n = r + 1) : s >= t[r] && (n = r);
    return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0),
    n
}
function Yt(e) {
    const t = this
      , i = t.rtlTranslate ? t.translate : -t.translate
      , {snapGrid: s, params: n, activeIndex: r, realIndex: l, snapIndex: o} = t;
    let a = e, d;
    const f = m=>{
        let p = m - t.virtual.slidesBefore;
        return p < 0 && (p = t.virtual.slides.length + p),
        p >= t.virtual.slides.length && (p -= t.virtual.slides.length),
        p
    }
    ;
    if (typeof a > "u" && (a = Xt(t)),
    s.indexOf(i) >= 0)
        d = s.indexOf(i);
    else {
        const m = Math.min(n.slidesPerGroupSkip, a);
        d = m + Math.floor((a - m) / n.slidesPerGroup)
    }
    if (d >= s.length && (d = s.length - 1),
    a === r) {
        d !== o && (t.snapIndex = d,
        t.emit("snapIndexChange")),
        t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = f(a));
        return
    }
    let c;
    t.virtual && n.virtual.enabled && n.loop ? c = f(a) : t.slides[a] ? c = parseInt(t.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : c = a,
    Object.assign(t, {
        previousSnapIndex: o,
        snapIndex: d,
        previousRealIndex: l,
        realIndex: c,
        previousIndex: r,
        activeIndex: a
    }),
    t.initialized && he(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    l !== c && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}
function Kt(e) {
    const t = this
      , i = t.params
      , s = e.closest(`.${i.slideClass}, swiper-slide`);
    let n = !1, r;
    if (s) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === s) {
                n = !0,
                r = l;
                break
            }
    }
    if (s && n)
        t.clickedSlide = s,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const Ut = {
    updateSize: Rt,
    updateSlides: Ft,
    updateAutoHeight: $t,
    updateSlidesOffset: kt,
    updateSlidesProgress: qt,
    updateProgress: Ht,
    updateSlidesClasses: Wt,
    updateActiveIndex: Yt,
    updateClickedSlide: Kt
};
function Qt(e=this.isHorizontal() ? "x" : "y") {
    const t = this
      , {params: i, rtlTranslate: s, translate: n, wrapperEl: r} = t;
    if (i.virtualTranslate)
        return s ? -n : n;
    if (i.cssMode)
        return n;
    let l = Mt(r, e);
    return l += t.cssOverflowAdjustment(),
    s && (l = -l),
    l || 0
}
function Zt(e, t) {
    const i = this
      , {rtlTranslate: s, params: n, wrapperEl: r, progress: l} = i;
    let o = 0
      , a = 0;
    const d = 0;
    i.isHorizontal() ? o = s ? -e : e : a = e,
    n.roundLengths && (o = Math.floor(o),
    a = Math.floor(a)),
    i.previousTranslate = i.translate,
    i.translate = i.isHorizontal() ? o : a,
    n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -a : n.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(),
    r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`);
    let f;
    const c = i.maxTranslate() - i.minTranslate();
    c === 0 ? f = 0 : f = (e - i.minTranslate()) / c,
    f !== l && i.updateProgress(e),
    i.emit("setTranslate", i.translate, t)
}
function Jt() {
    return -this.snapGrid[0]
}
function ei() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function ti(e=0, t=this.params.speed, i=!0, s=!0, n) {
    const r = this
      , {params: l, wrapperEl: o} = r;
    if (r.animating && l.preventInteractionOnTransition)
        return !1;
    const a = r.minTranslate()
      , d = r.maxTranslate();
    let f;
    if (s && e > a ? f = a : s && e < d ? f = d : f = e,
    r.updateProgress(f),
    l.cssMode) {
        const c = r.isHorizontal();
        if (t === 0)
            o[c ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!r.support.smoothScroll)
                return ke({
                    swiper: r,
                    targetPosition: -f,
                    side: c ? "left" : "top"
                }),
                !0;
            o.scrollTo({
                [c ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (r.setTransition(0),
    r.setTranslate(f),
    i && (r.emit("beforeTransitionStart", t, n),
    r.emit("transitionEnd"))) : (r.setTransition(t),
    r.setTranslate(f),
    i && (r.emit("beforeTransitionStart", t, n),
    r.emit("transitionStart")),
    r.animating || (r.animating = !0,
    r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(m) {
        !r || r.destroyed || m.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
        r.onTranslateToWrapperTransitionEnd = null,
        delete r.onTranslateToWrapperTransitionEnd,
        i && r.emit("transitionEnd"))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
    !0
}
const ii = {
    getTranslate: Qt,
    setTranslate: Zt,
    minTranslate: Jt,
    maxTranslate: ei,
    translateTo: ti
};
function si(e, t) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`),
    i.emit("setTransition", e, t)
}
function He({swiper: e, runCallbacks: t, direction: i, step: s}) {
    const {activeIndex: n, previousIndex: r} = e;
    let l = i;
    if (l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"),
    e.emit(`transition${s}`),
    t && n !== r) {
        if (l === "reset") {
            e.emit(`slideResetTransition${s}`);
            return
        }
        e.emit(`slideChangeTransition${s}`),
        l === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
    }
}
function ri(e=!0, t) {
    const i = this
      , {params: s} = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(),
    He({
        swiper: i,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }))
}
function ni(e=!0, t) {
    const i = this
      , {params: s} = i;
    i.animating = !1,
    !s.cssMode && (i.setTransition(0),
    He({
        swiper: i,
        runCallbacks: e,
        direction: t,
        step: "End"
    }))
}
const ai = {
    setTransition: si,
    transitionStart: ri,
    transitionEnd: ni
};
function li(e=0, t=this.params.speed, i=!0, s, n) {
    typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let l = e;
    l < 0 && (l = 0);
    const {params: o, snapGrid: a, slidesGrid: d, previousIndex: f, activeIndex: c, rtlTranslate: m, wrapperEl: p, enabled: v} = r;
    if (r.animating && o.preventInteractionOnTransition || !v && !s && !n)
        return !1;
    const g = Math.min(r.params.slidesPerGroupSkip, l);
    let S = g + Math.floor((l - g) / r.params.slidesPerGroup);
    S >= a.length && (S = a.length - 1);
    const h = -a[S];
    if (o.normalizeSlideIndex)
        for (let b = 0; b < d.length; b += 1) {
            const x = -Math.floor(h * 100)
              , C = Math.floor(d[b] * 100)
              , y = Math.floor(d[b + 1] * 100);
            typeof d[b + 1] < "u" ? x >= C && x < y - (y - C) / 2 ? l = b : x >= C && x < y && (l = b + 1) : x >= C && (l = b)
        }
    if (r.initialized && l !== c && (!r.allowSlideNext && h < r.translate && h < r.minTranslate() || !r.allowSlidePrev && h > r.translate && h > r.maxTranslate() && (c || 0) !== l))
        return !1;
    l !== (f || 0) && i && r.emit("beforeSlideChangeStart"),
    r.updateProgress(h);
    let P;
    if (l > c ? P = "next" : l < c ? P = "prev" : P = "reset",
    m && -h === r.translate || !m && h === r.translate)
        return r.updateActiveIndex(l),
        o.autoHeight && r.updateAutoHeight(),
        r.updateSlidesClasses(),
        o.effect !== "slide" && r.setTranslate(h),
        P !== "reset" && (r.transitionStart(i, P),
        r.transitionEnd(i, P)),
        !1;
    if (o.cssMode) {
        const b = r.isHorizontal()
          , x = m ? h : -h;
        if (t === 0) {
            const C = r.virtual && r.params.virtual.enabled;
            C && (r.wrapperEl.style.scrollSnapType = "none",
            r._immediateVirtual = !0),
            C && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
            requestAnimationFrame(()=>{
                p[b ? "scrollLeft" : "scrollTop"] = x
            }
            )) : p[b ? "scrollLeft" : "scrollTop"] = x,
            C && requestAnimationFrame(()=>{
                r.wrapperEl.style.scrollSnapType = "",
                r._immediateVirtual = !1
            }
            )
        } else {
            if (!r.support.smoothScroll)
                return ke({
                    swiper: r,
                    targetPosition: x,
                    side: b ? "left" : "top"
                }),
                !0;
            p.scrollTo({
                [b ? "left" : "top"]: x,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(t),
    r.setTranslate(h),
    r.updateActiveIndex(l),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(i, P),
    t === 0 ? r.transitionEnd(i, P) : r.animating || (r.animating = !0,
    r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(x) {
        !r || r.destroyed || x.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
        r.onSlideToWrapperTransitionEnd = null,
        delete r.onSlideToWrapperTransitionEnd,
        r.transitionEnd(i, P))
    }
    ),
    r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
    !0
}
function oi(e=0, t=this.params.speed, i=!0, s) {
    typeof e == "string" && (e = parseInt(e, 10));
    const n = this;
    let r = e;
    return n.params.loop && (n.virtual && n.params.virtual.enabled ? r = r + n.virtual.slidesBefore : r = n.getSlideIndexByData(r)),
    n.slideTo(r, t, i, s)
}
function di(e=this.params.speed, t=!0, i) {
    const s = this
      , {enabled: n, params: r, animating: l} = s;
    if (!n)
        return s;
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : o
      , d = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (l && !d && r.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "next"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    return r.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + a, e, t, i)
}
function ci(e=this.params.speed, t=!0, i) {
    const s = this
      , {params: n, snapGrid: r, slidesGrid: l, rtlTranslate: o, enabled: a, animating: d} = s;
    if (!a)
        return s;
    const f = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (d && !f && n.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
        s._clientLeft = s.wrapperEl.clientLeft
    }
    const c = o ? s.translate : -s.translate;
    function m(h) {
        return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
    }
    const p = m(c)
      , v = r.map(h=>m(h));
    let g = r[v.indexOf(p) - 1];
    if (typeof g > "u" && n.cssMode) {
        let h;
        r.forEach((P,b)=>{
            p >= P && (h = b)
        }
        ),
        typeof h < "u" && (g = r[h > 0 ? h - 1 : h])
    }
    let S = 0;
    if (typeof g < "u" && (S = l.indexOf(g),
    S < 0 && (S = s.activeIndex - 1),
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (S = S - s.slidesPerViewDynamic("previous", !0) + 1,
    S = Math.max(S, 0))),
    n.rewind && s.isBeginning) {
        const h = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(h, e, t, i)
    }
    return s.slideTo(S, e, t, i)
}
function ui(e=this.params.speed, t=!0, i) {
    const s = this;
    return s.slideTo(s.activeIndex, e, t, i)
}
function fi(e=this.params.speed, t=!0, i, s=.5) {
    const n = this;
    let r = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, r)
      , o = l + Math.floor((r - l) / n.params.slidesPerGroup)
      , a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[o]) {
        const d = n.snapGrid[o]
          , f = n.snapGrid[o + 1];
        a - d > (f - d) * s && (r += n.params.slidesPerGroup)
    } else {
        const d = n.snapGrid[o - 1]
          , f = n.snapGrid[o];
        a - d <= (f - d) * s && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0),
    r = Math.min(r, n.slidesGrid.length - 1),
    n.slideTo(r, e, t, i)
}
function pi() {
    const e = this
      , {params: t, slidesEl: i} = e
      , s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let n = e.clickedIndex, r;
    const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        t.centeredSlides ? n < e.loopedSlides - s / 2 || n > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(),
        n = e.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        me(()=>{
            e.slideTo(n)
        }
        )) : e.slideTo(n) : n > e.slides.length - s ? (e.loopFix(),
        n = e.getSlideIndex(V(i, `${l}[data-swiper-slide-index="${r}"]`)[0]),
        me(()=>{
            e.slideTo(n)
        }
        )) : e.slideTo(n)
    } else
        e.slideTo(n)
}
const mi = {
    slideTo: li,
    slideToLoop: oi,
    slideNext: di,
    slidePrev: ci,
    slideReset: ui,
    slideToClosest: fi,
    slideToClickedSlide: pi
};
function hi(e) {
    const t = this
      , {params: i, slidesEl: s} = t;
    if (!i.loop || t.virtual && t.params.virtual.enabled)
        return;
    V(s, `.${i.slideClass}, swiper-slide`).forEach((r,l)=>{
        r.setAttribute("data-swiper-slide-index", l)
    }
    ),
    t.loopFix({
        slideRealIndex: e,
        direction: i.centeredSlides ? void 0 : "next"
    })
}
function gi({slideRealIndex: e, slideTo: t=!0, direction: i, setTranslate: s, activeSlideIndex: n, byController: r, byMousewheel: l}={}) {
    const o = this;
    if (!o.params.loop)
        return;
    o.emit("beforeLoopFix");
    const {slides: a, allowSlidePrev: d, allowSlideNext: f, slidesEl: c, params: m} = o;
    if (o.allowSlidePrev = !0,
    o.allowSlideNext = !0,
    o.virtual && m.virtual.enabled) {
        t && (!m.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        o.allowSlidePrev = d,
        o.allowSlideNext = f,
        o.emit("loopFix");
        return
    }
    const p = m.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(m.slidesPerView, 10));
    let v = m.loopedSlides || p;
    v % m.slidesPerGroup !== 0 && (v += m.slidesPerGroup - v % m.slidesPerGroup),
    o.loopedSlides = v;
    const g = []
      , S = [];
    let h = o.activeIndex;
    typeof n > "u" ? n = o.getSlideIndex(o.slides.filter(y=>y.classList.contains(m.slideActiveClass))[0]) : h = n;
    const P = i === "next" || !i
      , b = i === "prev" || !i;
    let x = 0
      , C = 0;
    if (n < v) {
        x = Math.max(v - n, m.slidesPerGroup);
        for (let y = 0; y < v - n; y += 1) {
            const O = y - Math.floor(y / a.length) * a.length;
            g.push(a.length - O - 1)
        }
    } else if (n > o.slides.length - v * 2) {
        C = Math.max(n - (o.slides.length - v * 2), m.slidesPerGroup);
        for (let y = 0; y < C; y += 1) {
            const O = y - Math.floor(y / a.length) * a.length;
            S.push(O)
        }
    }
    if (b && g.forEach(y=>{
        o.slides[y].swiperLoopMoveDOM = !0,
        c.prepend(o.slides[y]),
        o.slides[y].swiperLoopMoveDOM = !1
    }
    ),
    P && S.forEach(y=>{
        o.slides[y].swiperLoopMoveDOM = !0,
        c.append(o.slides[y]),
        o.slides[y].swiperLoopMoveDOM = !1
    }
    ),
    o.recalcSlides(),
    m.slidesPerView === "auto" && o.updateSlides(),
    m.watchSlidesProgress && o.updateSlidesOffset(),
    t) {
        if (g.length > 0 && b)
            if (typeof e > "u") {
                const y = o.slidesGrid[h]
                  , T = o.slidesGrid[h + x] - y;
                l ? o.setTranslate(o.translate - T) : (o.slideTo(h + x, 0, !1, !0),
                s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += T))
            } else
                s && o.slideToLoop(e, 0, !1, !0);
        else if (S.length > 0 && P)
            if (typeof e > "u") {
                const y = o.slidesGrid[h]
                  , T = o.slidesGrid[h - C] - y;
                l ? o.setTranslate(o.translate - T) : (o.slideTo(h - C, 0, !1, !0),
                s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += T))
            } else
                o.slideToLoop(e, 0, !1, !0)
    }
    if (o.allowSlidePrev = d,
    o.allowSlideNext = f,
    o.controller && o.controller.control && !r) {
        const y = {
            slideRealIndex: e,
            slideTo: !1,
            direction: i,
            setTranslate: s,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(O=>{
            !O.destroyed && O.params.loop && O.loopFix(y)
        }
        ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(y)
    }
    o.emit("loopFix")
}
function vi() {
    const e = this
      , {params: t, slidesEl: i} = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const s = [];
    e.slides.forEach(n=>{
        const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
        s[r] = n
    }
    ),
    e.slides.forEach(n=>{
        n.removeAttribute("data-swiper-slide-index")
    }
    ),
    s.forEach(n=>{
        i.append(n)
    }
    ),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
const wi = {
    loopCreate: hi,
    loopFix: gi,
    loopDestroy: vi
};
function Si(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
    i.style.cursor = "move",
    i.style.cursor = e ? "grabbing" : "grab",
    t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1
    }
    )
}
function xi() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
    e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1
    }
    ))
}
const bi = {
    setGrabCursor: Si,
    unsetGrabCursor: xi
};
function Ti(e, t=this) {
    function i(s) {
        if (!s || s === q() || s === G())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const n = s.closest(e);
        return !n && !s.getRootNode ? null : n || i(s.getRootNode().host)
    }
    return i(t)
}
function yi(e) {
    const t = this
      , i = q()
      , s = G()
      , n = t.touchEventsData;
    n.evCache.push(e);
    const {params: r, touches: l, enabled: o} = t;
    if (!o || !r.simulateTouch && e.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition)
        return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let d = a.target;
    if (r.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d) || "which"in a && a.which === 3 || "button"in a && a.button > 0 || n.isTouched && n.isMoved)
        return;
    const f = !!r.noSwipingClass && r.noSwipingClass !== ""
      , c = e.composedPath ? e.composedPath() : e.path;
    f && a.target && a.target.shadowRoot && c && (d = c[0]);
    const m = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`
      , p = !!(a.target && a.target.shadowRoot);
    if (r.noSwiping && (p ? Ti(m, d) : d.closest(m))) {
        t.allowClick = !0;
        return
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler))
        return;
    l.currentX = a.pageX,
    l.currentY = a.pageY;
    const v = l.currentX
      , g = l.currentY
      , S = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
      , h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (S && (v <= h || v >= s.innerWidth - h))
        if (S === "prevent")
            e.preventDefault();
        else
            return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    l.startX = v,
    l.startY = g,
    n.touchStartTime = re(),
    t.allowClick = !0,
    t.updateSize(),
    t.swipeDirection = void 0,
    r.threshold > 0 && (n.allowThresholdMove = !1);
    let P = !0;
    d.matches(n.focusableElements) && (P = !1,
    d.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== d && i.activeElement.blur();
    const b = P && t.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || b) && !d.isContentEditable && a.preventDefault(),
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(),
    t.emit("touchStart", a)
}
function Ei(e) {
    const t = q()
      , i = this
      , s = i.touchEventsData
      , {params: n, touches: r, rtlTranslate: l, enabled: o} = i;
    if (!o || !n.simulateTouch && e.pointerType === "mouse")
        return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent),
    !s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
        return
    }
    const d = s.evCache.findIndex(y=>y.pointerId === a.pointerId);
    d >= 0 && (s.evCache[d] = a);
    const f = s.evCache.length > 1 ? s.evCache[0] : a
      , c = f.pageX
      , m = f.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = c,
        r.startY = m;
        return
    }
    if (!i.allowTouchMove) {
        a.target.matches(s.focusableElements) || (i.allowClick = !1),
        s.isTouched && (Object.assign(r, {
            startX: c,
            startY: m,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: c,
            currentY: m
        }),
        s.touchStartTime = re());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (i.isVertical()) {
            if (m < r.startY && i.translate <= i.maxTranslate() || m > r.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1,
                s.isMoved = !1;
                return
            }
        } else if (c < r.startX && i.translate <= i.maxTranslate() || c > r.startX && i.translate >= i.minTranslate())
            return
    }
    if (t.activeElement && a.target === t.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
        i.allowClick = !1;
        return
    }
    if (s.allowTouchCallbacks && i.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
        return;
    r.currentX = c,
    r.currentY = m;
    const p = r.currentX - r.startX
      , v = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(p ** 2 + v ** 2) < i.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let y;
        i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : p * p + v * v >= 25 && (y = Math.atan2(Math.abs(v), Math.abs(p)) * 180 / Math.PI,
        s.isScrolling = i.isHorizontal() ? y > n.touchAngle : 90 - y > n.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0),
    s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    i.allowClick = !1,
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let g = i.isHorizontal() ? p : v
      , S = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1),
    S = Math.abs(S) * (l ? 1 : -1)),
    r.diff = g,
    g *= n.touchRatio,
    l && (g = -g,
    S = -S);
    const h = i.touchesDirection;
    i.swipeDirection = g > 0 ? "prev" : "next",
    i.touchesDirection = S > 0 ? "prev" : "next";
    const P = i.params.loop && !n.cssMode;
    if (!s.isMoved) {
        if (P && i.loopFix({
            direction: i.swipeDirection
        }),
        s.startTranslate = i.getTranslate(),
        i.setTransition(0),
        i.animating) {
            const y = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0
            });
            i.wrapperEl.dispatchEvent(y)
        }
        s.allowMomentumBounce = !1,
        n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
        i.emit("sliderFirstMove", a)
    }
    let b;
    s.isMoved && h !== i.touchesDirection && P && Math.abs(g) >= 1 && (i.loopFix({
        direction: i.swipeDirection,
        setTranslate: !0
    }),
    b = !0),
    i.emit("sliderMove", a),
    s.isMoved = !0,
    s.currentTranslate = g + s.startTranslate;
    let x = !0
      , C = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (C = 0),
    g > 0 ? (P && !b && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    s.currentTranslate > i.minTranslate() && (x = !1,
    n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + g) ** C))) : g < 0 && (P && !b && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }),
    s.currentTranslate < i.maxTranslate() && (x = !1,
    n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - g) ** C))),
    x && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
        if (Math.abs(g) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                r.startX = r.currentX,
                r.startY = r.currentY,
                s.currentTranslate = s.startTranslate,
                r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(),
    i.updateSlidesClasses()),
    i.params.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate))
}
function Ci(e) {
    const t = this
      , i = t.touchEventsData
      , s = i.evCache.findIndex(b=>b.pointerId === e.pointerId);
    if (s >= 0 && i.evCache.splice(s, 1),
    ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && !(e.type === "pointercancel" && (t.browser.isSafari || t.browser.isWebView)))
        return;
    const {params: n, touches: r, rtlTranslate: l, slidesGrid: o, enabled: a} = t;
    if (!a || !n.simulateTouch && e.pointerType === "mouse")
        return;
    let d = e;
    if (d.originalEvent && (d = d.originalEvent),
    i.allowTouchCallbacks && t.emit("touchEnd", d),
    i.allowTouchCallbacks = !1,
    !i.isTouched) {
        i.isMoved && n.grabCursor && t.setGrabCursor(!1),
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    n.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const f = re()
      , c = f - i.touchStartTime;
    if (t.allowClick) {
        const b = d.path || d.composedPath && d.composedPath();
        t.updateClickedSlide(b && b[0] || d.target),
        t.emit("tap click", d),
        c < 300 && f - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
    }
    if (i.lastClickTime = re(),
    me(()=>{
        t.destroyed || (t.allowClick = !0)
    }
    ),
    !i.isTouched || !i.isMoved || !t.swipeDirection || r.diff === 0 || i.currentTranslate === i.startTranslate) {
        i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
        return
    }
    i.isTouched = !1,
    i.isMoved = !1,
    i.startMoving = !1;
    let m;
    if (n.followFinger ? m = l ? t.translate : -t.translate : m = -i.currentTranslate,
    n.cssMode)
        return;
    if (t.params.freeMode && n.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: m
        });
        return
    }
    let p = 0
      , v = t.slidesSizesGrid[0];
    for (let b = 0; b < o.length; b += b < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
        const x = b < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        typeof o[b + x] < "u" ? m >= o[b] && m < o[b + x] && (p = b,
        v = o[b + x] - o[b]) : m >= o[b] && (p = b,
        v = o[o.length - 1] - o[o.length - 2])
    }
    let g = null
      , S = null;
    n.rewind && (t.isBeginning ? S = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
    const h = (m - o[p]) / v
      , P = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (c > n.longSwipesMs) {
        if (!n.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (h >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? g : p + P) : t.slideTo(p)),
        t.swipeDirection === "prev" && (h > 1 - n.longSwipesRatio ? t.slideTo(p + P) : S !== null && h < 0 && Math.abs(h) > n.longSwipesRatio ? t.slideTo(S) : t.slideTo(p))
    } else {
        if (!n.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(p + P) : t.slideTo(p) : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : p + P),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : p))
    }
}
function Ce() {
    const e = this
      , {params: t, el: i} = e;
    if (i && i.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: s, allowSlidePrev: n, snapGrid: r} = e
      , l = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
    e.allowSlidePrev = !0,
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
    const o = l && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
    e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
    }
    , 500)),
    e.allowSlidePrev = n,
    e.allowSlideNext = s,
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function Mi(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
    e.stopImmediatePropagation())))
}
function Pi() {
    const e = this
      , {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
    if (!s)
        return;
    e.previousTranslate = e.translate,
    e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
    let n;
    const r = e.maxTranslate() - e.minTranslate();
    r === 0 ? n = 0 : n = (e.translate - e.minTranslate()) / r,
    n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1)
}
function Ii(e) {
    const t = this;
    se(t, e.target),
    !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update()
}
let Me = !1;
function Li() {}
const We = (e,t)=>{
    const i = q()
      , {params: s, el: n, wrapperEl: r, device: l} = e
      , o = !!s.nested
      , a = t === "on" ? "addEventListener" : "removeEventListener"
      , d = t;
    n[a]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
    i[a]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: o
    }),
    i[a]("pointerup", e.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointercancel", e.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointerout", e.onTouchEnd, {
        passive: !0
    }),
    i[a]("pointerleave", e.onTouchEnd, {
        passive: !0
    }),
    (s.preventClicks || s.preventClicksPropagation) && n[a]("click", e.onClick, !0),
    s.cssMode && r[a]("scroll", e.onScroll),
    s.updateOnWindowResize ? e[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ce, !0) : e[d]("observerUpdate", Ce, !0),
    n[a]("load", e.onLoad, {
        capture: !0
    })
}
;
function Oi() {
    const e = this
      , t = q()
      , {params: i} = e;
    e.onTouchStart = yi.bind(e),
    e.onTouchMove = Ei.bind(e),
    e.onTouchEnd = Ci.bind(e),
    i.cssMode && (e.onScroll = Pi.bind(e)),
    e.onClick = Mi.bind(e),
    e.onLoad = Ii.bind(e),
    Me || (t.addEventListener("touchstart", Li),
    Me = !0),
    We(e, "on")
}
function ji() {
    We(this, "off")
}
const Ai = {
    attachEvents: Oi,
    detachEvents: ji
}
  , Pe = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
function zi() {
    const e = this
      , {realIndex: t, initialized: i, params: s, el: n} = e
      , r = s.breakpoints;
    if (!r || r && Object.keys(r).length === 0)
        return;
    const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
    if (!l || e.currentBreakpoint === l)
        return;
    const a = (l in r ? r[l] : void 0) || e.originalParams
      , d = Pe(e, s)
      , f = Pe(e, a)
      , c = s.enabled;
    d && !f ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
    e.emitContainerClasses()) : !d && f && (n.classList.add(`${s.containerModifierClass}grid`),
    (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`),
    e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach(g=>{
        const S = s[g] && s[g].enabled
          , h = a[g] && a[g].enabled;
        S && !h && e[g].disable(),
        !S && h && e[g].enable()
    }
    );
    const m = a.direction && a.direction !== s.direction
      , p = s.loop && (a.slidesPerView !== s.slidesPerView || m);
    m && i && e.changeDirection(),
    _(e.params, a);
    const v = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
    c && !v ? e.disable() : !c && v && e.enable(),
    e.currentBreakpoint = l,
    e.emit("_beforeBreakpoint", a),
    p && i && (e.loopDestroy(),
    e.loopCreate(t),
    e.updateSlides()),
    e.emit("breakpoint", a)
}
function Ni(e, t="window", i) {
    if (!e || t === "container" && !i)
        return;
    let s = !1;
    const n = G()
      , r = t === "window" ? n.innerHeight : i.clientHeight
      , l = Object.keys(e).map(o=>{
        if (typeof o == "string" && o.indexOf("@") === 0) {
            const a = parseFloat(o.substr(1));
            return {
                value: r * a,
                point: o
            }
        }
        return {
            value: o,
            point: o
        }
    }
    );
    l.sort((o,a)=>parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const {point: a, value: d} = l[o];
        t === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a)
    }
    return s || "max"
}
const _i = {
    setBreakpoint: zi,
    getBreakpoint: Ni
};
function Gi(e, t) {
    const i = [];
    return e.forEach(s=>{
        typeof s == "object" ? Object.keys(s).forEach(n=>{
            s[n] && i.push(t + n)
        }
        ) : typeof s == "string" && i.push(t + s)
    }
    ),
    i
}
function Di() {
    const e = this
      , {classNames: t, params: i, rtl: s, el: n, device: r} = e
      , l = Gi(["initialized", i.direction, {
        "free-mode": e.params.freeMode && i.freeMode.enabled
    }, {
        autoheight: i.autoHeight
    }, {
        rtl: s
    }, {
        grid: i.grid && i.grid.rows > 1
    }, {
        "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
    }, {
        android: r.android
    }, {
        ios: r.ios
    }, {
        "css-mode": i.cssMode
    }, {
        centered: i.cssMode && i.centeredSlides
    }, {
        "watch-progress": i.watchSlidesProgress
    }], i.containerModifierClass);
    t.push(...l),
    n.classList.add(...t),
    e.emitContainerClasses()
}
function Bi() {
    const e = this
      , {el: t, classNames: i} = e;
    t.classList.remove(...i),
    e.emitContainerClasses()
}
const Vi = {
    addClasses: Di,
    removeClasses: Bi
};
function Ri() {
    const e = this
      , {isLocked: t, params: i} = e
      , {slidesOffsetBefore: s} = i;
    if (s) {
        const n = e.slides.length - 1
          , r = e.slidesGrid[n] + e.slidesSizesGrid[n] + s * 2;
        e.isLocked = e.size > r
    } else
        e.isLocked = e.snapGrid.length === 1;
    i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const Fi = {
    checkOverflow: Ri
}
  , Ie = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
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
    threshold: 5,
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
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
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
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function $i(e, t) {
    return function(s={}) {
        const n = Object.keys(s)[0]
          , r = s[n];
        if (typeof r != "object" || r === null) {
            _(t, s);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && e[n] === !0 && (e[n] = {
            auto: !0
        }),
        !(n in e && "enabled"in r)) {
            _(t, s);
            return
        }
        e[n] === !0 && (e[n] = {
            enabled: !0
        }),
        typeof e[n] == "object" && !("enabled"in e[n]) && (e[n].enabled = !0),
        e[n] || (e[n] = {
            enabled: !1
        }),
        _(t, s)
    }
}
const fe = {
    eventsEmitter: Vt,
    update: Ut,
    translate: ii,
    transition: ai,
    slide: mi,
    loop: wi,
    grabCursor: bi,
    events: Ai,
    breakpoints: _i,
    checkOverflow: Fi,
    classes: Vi
}
  , pe = {};
let Q = class B {
    constructor(...t) {
        let i, s;
        t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? s = t[0] : [i,s] = t,
        s || (s = {}),
        s = _({}, s),
        i && !s.el && (s.el = i);
        const n = q();
        if (s.el && typeof s.el == "string" && n.querySelectorAll(s.el).length > 1) {
            const a = [];
            return n.querySelectorAll(s.el).forEach(d=>{
                const f = _({}, s, {
                    el: d
                });
                a.push(new B(f))
            }
            ),
            a
        }
        const r = this;
        r.__swiper__ = !0,
        r.support = qe(),
        r.device = Nt({
            userAgent: s.userAgent
        }),
        r.browser = Gt(),
        r.eventsListeners = {},
        r.eventsAnyListeners = [],
        r.modules = [...r.__modules__],
        s.modules && Array.isArray(s.modules) && r.modules.push(...s.modules);
        const l = {};
        r.modules.forEach(a=>{
            a({
                params: s,
                swiper: r,
                extendParams: $i(s, l),
                on: r.on.bind(r),
                once: r.once.bind(r),
                off: r.off.bind(r),
                emit: r.emit.bind(r)
            })
        }
        );
        const o = _({}, Ie, l);
        return r.params = _({}, o, pe, s),
        r.originalParams = _({}, r.params),
        r.passedParams = _({}, s),
        r.params && r.params.on && Object.keys(r.params.on).forEach(a=>{
            r.on(a, r.params.on[a])
        }
        ),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        Object.assign(r, {
            enabled: r.params.enabled,
            el: i,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return r.params.direction === "horizontal"
            },
            isVertical() {
                return r.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
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
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: []
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
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
    }
    getSlideIndex(t) {
        const {slidesEl: i, params: s} = this
          , n = V(i, `.${s.slideClass}, swiper-slide`)
          , r = Te(n[0]);
        return Te(t) - r
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(i=>i.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
          , {slidesEl: i, params: s} = t;
        t.slides = V(i, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
        t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
        t.emit("disable"))
    }
    setProgress(t, i) {
        const s = this;
        t = Math.min(Math.max(t, 0), 1);
        const n = s.minTranslate()
          , l = (s.maxTranslate() - n) * t + n;
        s.translateTo(l, typeof i > "u" ? 0 : i),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const i = t.el.className.split(" ").filter(s=>s.indexOf("swiper") === 0 || s.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(t) {
        const i = this;
        return i.destroyed ? "" : t.className.split(" ").filter(s=>s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const i = [];
        t.slides.forEach(s=>{
            const n = t.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: n
            }),
            t.emit("_slideClass", s, n)
        }
        ),
        t.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(t="current", i=!1) {
        const s = this
          , {params: n, slides: r, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: d} = s;
        let f = 1;
        if (n.centeredSlides) {
            let c = r[d].swiperSlideSize, m;
            for (let p = d + 1; p < r.length; p += 1)
                r[p] && !m && (c += r[p].swiperSlideSize,
                f += 1,
                c > a && (m = !0));
            for (let p = d - 1; p >= 0; p -= 1)
                r[p] && !m && (c += r[p].swiperSlideSize,
                f += 1,
                c > a && (m = !0))
        } else if (t === "current")
            for (let c = d + 1; c < r.length; c += 1)
                (i ? l[c] + o[c] - l[d] < a : l[c] - l[d] < a) && (f += 1);
        else
            for (let c = d - 1; c >= 0; c -= 1)
                l[d] - l[c] < a && (f += 1);
        return f
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: i, params: s} = t;
        s.breakpoints && t.setBreakpoint(),
        [...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{
            l.complete && se(t, l)
        }
        ),
        t.updateSize(),
        t.updateSlides(),
        t.updateProgress(),
        t.updateSlidesClasses();
        function n() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate
              , o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(o),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        let r;
        if (t.params.freeMode && t.params.freeMode.enabled)
            n(),
            t.params.autoHeight && t.updateAutoHeight();
        else {
            if ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides) {
                const l = t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides;
                r = t.slideTo(l.length - 1, 0, !1, !0)
            } else
                r = t.slideTo(t.activeIndex, 0, !1, !0);
            r || n()
        }
        s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
        t.emit("update")
    }
    changeDirection(t, i=!0) {
        const s = this
          , n = s.params.direction;
        return t || (t = n === "horizontal" ? "vertical" : "horizontal"),
        t === n || t !== "horizontal" && t !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        s.params.direction = t,
        s.slides.forEach(r=>{
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }
        ),
        s.emit("changeDirection"),
        i && s.update()),
        s
    }
    changeLanguageDirection(t) {
        const i = this;
        i.rtl && t === "rtl" || !i.rtl && t === "ltr" || (i.rtl = t === "rtl",
        i.rtlTranslate = i.params.direction === "horizontal" && i.rtl,
        i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
        i.el.dir = "ltr"),
        i.update())
    }
    mount(t) {
        const i = this;
        if (i.mounted)
            return !0;
        let s = t || i.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
        !s)
            return !1;
        s.swiper = i,
        s.shadowEl && (i.isElement = !0);
        const n = ()=>`.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = (()=>s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : V(s, n())[0])();
        return !l && i.params.createElements && (l = It("div", i.params.wrapperClass),
        s.append(l),
        V(s, `.${i.params.slideClass}`).forEach(o=>{
            l.append(o)
        }
        )),
        Object.assign(i, {
            el: s,
            wrapperEl: l,
            slidesEl: i.isElement ? s : l,
            mounted: !0,
            rtl: s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl",
            rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl"),
            wrongRTL: F(l, "display") === "-webkit-box"
        }),
        !0
    }
    init(t) {
        const i = this;
        return i.initialized || i.mount(t) === !1 || (i.emit("beforeInit"),
        i.params.breakpoints && i.setBreakpoint(),
        i.addClasses(),
        i.updateSize(),
        i.updateSlides(),
        i.params.watchOverflow && i.checkOverflow(),
        i.params.grabCursor && i.enabled && i.setGrabCursor(),
        i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
        i.params.loop && i.loopCreate(),
        i.attachEvents(),
        [...i.el.querySelectorAll('[loading="lazy"]')].forEach(n=>{
            n.complete ? se(i, n) : n.addEventListener("load", r=>{
                se(i, r.target)
            }
            )
        }
        ),
        he(i),
        i.initialized = !0,
        he(i),
        i.emit("init"),
        i.emit("afterInit")),
        i
    }
    destroy(t=!0, i=!0) {
        const s = this
          , {params: n, el: r, wrapperEl: l, slides: o} = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
        s.initialized = !1,
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i && (s.removeClasses(),
        r.removeAttribute("style"),
        l.removeAttribute("style"),
        o && o.length && o.forEach(a=>{
            a.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass),
            a.removeAttribute("style"),
            a.removeAttribute("data-swiper-slide-index")
        }
        )),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach(a=>{
            s.off(a)
        }
        ),
        t !== !1 && (s.el.swiper = null,
        Et(s)),
        s.destroyed = !0),
        null
    }
    static extendDefaults(t) {
        _(pe, t)
    }
    static get extendedDefaults() {
        return pe
    }
    static get defaults() {
        return Ie
    }
    static installModule(t) {
        B.prototype.__modules__ || (B.prototype.__modules__ = []);
        const i = B.prototype.__modules__;
        typeof t == "function" && i.indexOf(t) < 0 && i.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(i=>B.installModule(i)),
        B) : (B.installModule(t),
        B)
    }
}
;
Object.keys(fe).forEach(e=>{
    Object.keys(fe[e]).forEach(t=>{
        Q.prototype[t] = fe[e][t]
    }
    )
}
);
Q.use([Dt, Bt]);
function k(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function $(e, t) {
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(s=>i.indexOf(s) < 0).forEach(s=>{
        typeof e[s] > "u" ? e[s] = t[s] : k(t[s]) && k(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : $(e[s], t[s]) : e[s] = t[s]
    }
    )
}
function Xe(e={}) {
    return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function Ye(e={}) {
    return e.pagination && typeof e.pagination.el > "u"
}
function Ke(e={}) {
    return e.scrollbar && typeof e.scrollbar.el > "u"
}
function Ue(e="") {
    const t = e.split(" ").map(s=>s.trim()).filter(s=>!!s)
      , i = [];
    return t.forEach(s=>{
        i.indexOf(s) < 0 && i.push(s)
    }
    ),
    i.join(" ")
}
function ki(e="") {
    return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
const Qe = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function qi(e={}, t=!0) {
    const i = {
        on: {}
    }
      , s = {}
      , n = {};
    $(i, Q.defaults),
    $(i, Q.extendedDefaults),
    i._emitClasses = !0,
    i.init = !1;
    const r = {}
      , l = Qe.map(a=>a.replace(/_/, ""))
      , o = Object.assign({}, e);
    return Object.keys(o).forEach(a=>{
        typeof e[a] > "u" || (l.indexOf(a) >= 0 ? k(e[a]) ? (i[a] = {},
        n[a] = {},
        $(i[a], e[a]),
        $(n[a], e[a])) : (i[a] = e[a],
        n[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a])
    }
    ),
    ["navigation", "pagination", "scrollbar"].forEach(a=>{
        i[a] === !0 && (i[a] = {}),
        i[a] === !1 && delete i[a]
    }
    ),
    {
        params: i,
        passedParams: n,
        rest: r,
        events: s
    }
}
function Hi({el: e, nextEl: t, prevEl: i, paginationEl: s, scrollbarEl: n, swiper: r}, l) {
    Xe(l) && t && i && (r.params.navigation.nextEl = t,
    r.originalParams.navigation.nextEl = t,
    r.params.navigation.prevEl = i,
    r.originalParams.navigation.prevEl = i),
    Ye(l) && s && (r.params.pagination.el = s,
    r.originalParams.pagination.el = s),
    Ke(l) && n && (r.params.scrollbar.el = n,
    r.originalParams.scrollbar.el = n),
    r.init(e)
}
function Wi(e, t, i, s, n) {
    const r = [];
    if (!t)
        return r;
    const l = a=>{
        r.indexOf(a) < 0 && r.push(a)
    }
    ;
    if (i && s) {
        const a = s.map(n)
          , d = i.map(n);
        a.join("") !== d.join("") && l("children"),
        s.length !== i.length && l("children")
    }
    return Qe.filter(a=>a[0] === "_").map(a=>a.replace(/_/, "")).forEach(a=>{
        if (a in e && a in t)
            if (k(e[a]) && k(t[a])) {
                const d = Object.keys(e[a])
                  , f = Object.keys(t[a]);
                d.length !== f.length ? l(a) : (d.forEach(c=>{
                    e[a][c] !== t[a][c] && l(a)
                }
                ),
                f.forEach(c=>{
                    e[a][c] !== t[a][c] && l(a)
                }
                ))
            } else
                e[a] !== t[a] && l(a)
    }
    ),
    r
}
function Ze(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function Je(e) {
    const t = [];
    return A.Children.toArray(e).forEach(i=>{
        Ze(i) ? t.push(i) : i.props && i.props.children && Je(i.props.children).forEach(s=>t.push(s))
    }
    ),
    t
}
function Xi(e) {
    const t = []
      , i = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };
    return A.Children.toArray(e).forEach(s=>{
        if (Ze(s))
            t.push(s);
        else if (s.props && s.props.slot && i[s.props.slot])
            i[s.props.slot].push(s);
        else if (s.props && s.props.children) {
            const n = Je(s.props.children);
            n.length > 0 ? n.forEach(r=>t.push(r)) : i["container-end"].push(s)
        } else
            i["container-end"].push(s)
    }
    ),
    {
        slides: t,
        slots: i
    }
}
function Yi({swiper: e, slides: t, passedParams: i, changedParams: s, nextEl: n, prevEl: r, scrollbarEl: l, paginationEl: o}) {
    const a = s.filter(T=>T !== "children" && T !== "direction" && T !== "wrapperClass")
      , {params: d, pagination: f, navigation: c, scrollbar: m, virtual: p, thumbs: v} = e;
    let g, S, h, P, b, x, C, y;
    s.includes("thumbs") && i.thumbs && i.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (g = !0),
    s.includes("controller") && i.controller && i.controller.control && d.controller && !d.controller.control && (S = !0),
    s.includes("pagination") && i.pagination && (i.pagination.el || o) && (d.pagination || d.pagination === !1) && f && !f.el && (h = !0),
    s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && m && !m.el && (P = !0),
    s.includes("navigation") && i.navigation && (i.navigation.prevEl || r) && (i.navigation.nextEl || n) && (d.navigation || d.navigation === !1) && c && !c.prevEl && !c.nextEl && (b = !0);
    const O = T=>{
        e[T] && (e[T].destroy(),
        T === "navigation" ? (e.isElement && (e[T].prevEl.remove(),
        e[T].nextEl.remove()),
        d[T].prevEl = void 0,
        d[T].nextEl = void 0,
        e[T].prevEl = void 0,
        e[T].nextEl = void 0) : (e.isElement && e[T].el.remove(),
        d[T].el = void 0,
        e[T].el = void 0))
    }
    ;
    s.includes("loop") && e.isElement && (d.loop && !i.loop ? x = !0 : !d.loop && i.loop ? C = !0 : y = !0),
    a.forEach(T=>{
        if (k(d[T]) && k(i[T]))
            $(d[T], i[T]),
            (T === "navigation" || T === "pagination" || T === "scrollbar") && "enabled"in i[T] && !i[T].enabled && O(T);
        else {
            const L = i[T];
            (L === !0 || L === !1) && (T === "navigation" || T === "pagination" || T === "scrollbar") ? L === !1 && O(T) : d[T] = i[T]
        }
    }
    ),
    a.includes("controller") && !S && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control),
    s.includes("children") && t && p && d.virtual.enabled && (p.slides = t,
    p.update(!0)),
    s.includes("children") && t && d.loop && (y = !0),
    g && v.init() && v.update(!0),
    S && (e.controller.control = d.controller.control),
    h && (e.isElement && (!o || typeof o == "string") && (o = document.createElement("div"),
    o.classList.add("swiper-pagination"),
    e.el.shadowEl.appendChild(o)),
    o && (d.pagination.el = o),
    f.init(),
    f.render(),
    f.update()),
    P && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
    l.classList.add("swiper-scrollbar"),
    e.el.shadowEl.appendChild(l)),
    l && (d.scrollbar.el = l),
    m.init(),
    m.updateSize(),
    m.setTranslate()),
    b && (e.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"),
    n.classList.add("swiper-button-next"),
    e.el.shadowEl.appendChild(n)),
    (!r || typeof r == "string") && (r = document.createElement("div"),
    r.classList.add("swiper-button-prev"),
    e.el.shadowEl.appendChild(r))),
    n && (d.navigation.nextEl = n),
    r && (d.navigation.prevEl = r),
    c.init(),
    c.update()),
    s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    s.includes("direction") && e.changeDirection(i.direction, !1),
    (x || y) && e.loopDestroy(),
    (C || y) && e.loopCreate(),
    e.update()
}
function Ki(e, t, i) {
    if (!i)
        return null;
    const s = f=>{
        let c = f;
        return f < 0 ? c = t.length + f : c >= t.length && (c = c - t.length),
        c
    }
      , n = e.isHorizontal() ? {
        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
    } : {
        top: `${i.offset}px`
    }
      , {from: r, to: l} = i
      , o = e.params.loop ? -t.length : 0
      , a = e.params.loop ? t.length * 2 : t.length
      , d = [];
    for (let f = o; f < a; f += 1)
        f >= r && f <= l && d.push(t[s(f)]);
    return d.map((f,c)=>A.cloneElement(f, {
        swiper: e,
        style: n,
        key: `slide-${c}`
    }))
}
const Ui = e=>{
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
;
function K(e, t) {
    return typeof window > "u" ? M.useEffect(e, t) : M.useLayoutEffect(e, t)
}
const Le = M.createContext(null)
  , Qi = M.createContext(null);
function ge() {
    return ge = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }
    ,
    ge.apply(this, arguments)
}
const et = M.forwardRef(function(e, t) {
    let {className: i, tag: s="div", wrapperTag: n="div", children: r, onSwiper: l, ...o} = e === void 0 ? {} : e
      , a = !1;
    const [d,f] = M.useState("swiper")
      , [c,m] = M.useState(null)
      , [p,v] = M.useState(!1)
      , g = M.useRef(!1)
      , S = M.useRef(null)
      , h = M.useRef(null)
      , P = M.useRef(null)
      , b = M.useRef(null)
      , x = M.useRef(null)
      , C = M.useRef(null)
      , y = M.useRef(null)
      , O = M.useRef(null)
      , {params: T, passedParams: L, rest: ae, events: w} = qi(o)
      , {slides: E, slots: I} = Xi(r)
      , N = ()=>{
        v(!p)
    }
    ;
    Object.assign(T.on, {
        _containerClasses(z, D) {
            f(D)
        }
    });
    const H = ()=>{
        Object.assign(T.on, w),
        a = !0;
        const z = {
            ...T
        };
        if (delete z.wrapperClass,
        h.current = new Q(z),
        h.current.virtual && h.current.params.virtual.enabled) {
            h.current.virtual.slides = E;
            const D = {
                cache: !1,
                slides: E,
                renderExternal: m,
                renderExternalUpdate: !1
            };
            $(h.current.params.virtual, D),
            $(h.current.originalParams.virtual, D)
        }
    }
    ;
    S.current || H(),
    h.current && h.current.on("_beforeBreakpoint", N);
    const J = ()=>{
        a || !w || !h.current || Object.keys(w).forEach(z=>{
            h.current.on(z, w[z])
        }
        )
    }
      , le = ()=>{
        !w || !h.current || Object.keys(w).forEach(z=>{
            h.current.off(z, w[z])
        }
        )
    }
    ;
    M.useEffect(()=>()=>{
        h.current && h.current.off("_beforeBreakpoint", N)
    }
    ),
    M.useEffect(()=>{
        !g.current && h.current && (h.current.emitSlidesClasses(),
        g.current = !0)
    }
    ),
    K(()=>{
        if (t && (t.current = S.current),
        !!S.current)
            return h.current.destroyed && H(),
            Hi({
                el: S.current,
                nextEl: x.current,
                prevEl: C.current,
                paginationEl: y.current,
                scrollbarEl: O.current,
                swiper: h.current
            }, T),
            l && l(h.current),
            ()=>{
                h.current && !h.current.destroyed && h.current.destroy(!0, !1)
            }
    }
    , []),
    K(()=>{
        J();
        const z = Wi(L, P.current, E, b.current, D=>D.key);
        return P.current = L,
        b.current = E,
        z.length && h.current && !h.current.destroyed && Yi({
            swiper: h.current,
            slides: E,
            passedParams: L,
            changedParams: z,
            nextEl: x.current,
            prevEl: C.current,
            scrollbarEl: O.current,
            paginationEl: y.current
        }),
        ()=>{
            le()
        }
    }
    ),
    K(()=>{
        Ui(h.current)
    }
    , [c]);
    function oe() {
        return T.virtual ? Ki(h.current, E, c) : E.map((z,D)=>A.cloneElement(z, {
            swiper: h.current,
            swiperSlideIndex: D
        }))
    }
    return A.createElement(s, ge({
        ref: S,
        className: Ue(`${d}${i ? ` ${i}` : ""}`)
    }, ae), A.createElement(Qi.Provider, {
        value: h.current
    }, I["container-start"], A.createElement(n, {
        className: ki(T.wrapperClass)
    }, I["wrapper-start"], oe(), I["wrapper-end"]), Xe(T) && A.createElement(A.Fragment, null, A.createElement("div", {
        ref: C,
        className: "swiper-button-prev"
    }), A.createElement("div", {
        ref: x,
        className: "swiper-button-next"
    })), Ke(T) && A.createElement("div", {
        ref: O,
        className: "swiper-scrollbar"
    }), Ye(T) && A.createElement("div", {
        ref: y,
        className: "swiper-pagination"
    }), I["container-end"]))
});
et.displayName = "Swiper";
function ve() {
    return ve = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }
    ,
    ve.apply(this, arguments)
}
const tt = M.forwardRef(function(e, t) {
    let {tag: i="div", children: s, className: n="", swiper: r, zoom: l, lazy: o, virtualIndex: a, swiperSlideIndex: d, ...f} = e === void 0 ? {} : e;
    const c = M.useRef(null)
      , [m,p] = M.useState("swiper-slide")
      , [v,g] = M.useState(!1);
    function S(x, C, y) {
        C === c.current && p(y)
    }
    K(()=>{
        if (typeof d < "u" && (c.current.swiperSlideIndex = d),
        t && (t.current = c.current),
        !(!c.current || !r)) {
            if (r.destroyed) {
                m !== "swiper-slide" && p("swiper-slide");
                return
            }
            return r.on("_slideClass", S),
            ()=>{
                r && r.off("_slideClass", S)
            }
        }
    }
    ),
    K(()=>{
        r && c.current && !r.destroyed && p(r.getSlideClasses(c.current))
    }
    , [r]);
    const h = {
        isActive: m.indexOf("swiper-slide-active") >= 0,
        isVisible: m.indexOf("swiper-slide-visible") >= 0,
        isPrev: m.indexOf("swiper-slide-prev") >= 0,
        isNext: m.indexOf("swiper-slide-next") >= 0
    }
      , P = ()=>typeof s == "function" ? s(h) : s
      , b = ()=>{
        g(!0)
    }
    ;
    return A.createElement(i, ve({
        ref: c,
        className: Ue(`${m}${n ? ` ${n}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: b
    }, f), l && A.createElement(Le.Provider, {
        value: h
    }, A.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof l == "number" ? l : void 0
    }, P(), o && !v && A.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !l && A.createElement(Le.Provider, {
        value: h
    }, P(), o && !v && A.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
tt.displayName = "SwiperSlide";
const Zi = (e,t)=>u.jsx(tt, {
    children: u.jsxs("div", {
        className: "testimonial-card d-flex flex-column align-items-center",
        children: [u.jsx("div", {
            className: "qoute-div pb-3 pb-lg-7",
            children: u.jsx(U, {
                width: "49",
                height: "48",
                decoding: "async",
                src: j.QuotesIcon,
                alt: "Quotes",
                className: "img-fluid"
            })
        }), u.jsx("div", {
            className: "user-review",
            children: u.jsx("p", {
                className: "user_review_text",
                children: e.title
            })
        }), u.jsxs("div", {
            className: "user-bio mt-6",
            children: [u.jsx("div", {
                className: "profile",
                children: u.jsx(U, {
                    width: "150",
                    height: "150",
                    decoding: "async",
                    src: e.image,
                    alt: "",
                    className: "w-100 mobile-img"
                })
            }), u.jsxs("div", {
                className: "userdata",
                children: [u.jsx("p", {
                    className: "user_text",
                    children: e.name
                }), u.jsx("p", {
                    className: "m-0",
                    children: e.product
                })]
            })]
        })]
    })
}, t)
  , Ji = ()=>u.jsx(u.Fragment, {
    children: u.jsx("section", {
        className: "em--testimonial-section em--section",
        children: u.jsx(Z, {
            children: u.jsxs(W, {
                children: [u.jsxs(R, {
                    lg: "12",
                    children: [u.jsx("div", {
                        className: "em--sub-head",
                        children: u.jsx("h2", {
                            className: "em--large-head",
                            children: "Testimonials"
                        })
                    }), u.jsx(et, {
                        className: "em--swiper-testimonial",
                        spaceBetween: 10,
                        slidesPerView: 1,
                        navigation: !0,
                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1440: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1960: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            2560: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            }
                        },
                        children: Tt.map(Zi)
                    })]
                }), u.jsx(R, {
                    lg: "12",
                    children: u.jsxs("div", {
                        className: "em--review-summary",
                        children: [u.jsx("div", {
                            className: "google-logo",
                            children: u.jsx(U, {
                                src: j.GoogleTagIcon,
                                width: "64",
                                height: "64",
                                className: "img-fluid",
                                alt: "Emart GoogleTag Icon"
                            })
                        }), u.jsxs("div", {
                            className: "review-stars-text",
                            children: [u.jsx("div", {
                                className: "stars-icon"
                            }), u.jsxs("div", {
                                className: "review-text pt-2",
                                children: [u.jsx("span", {
                                    children: "4.8/5"
                                }), u.jsx("span", {
                                    children: "400+ Google Reviews"
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    })
})
  , es = [{
    id: 1,
    heading: "How deos billing work?",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet eaque earum modi dolore placeat deleniti praesentium tempora ab voluptatibus.",
    value: "1"
}, {
    id: 2,
    heading: "Can I change my plan later?",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet eaque earum modi dolore placeat deleniti praesentium tempora ab voluptatibus.",
    value: "2"
}, {
    id: 3,
    heading: "How do I change my account email?",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eveniet eaque earum modi dolore placeat deleniti praesentium tempora ab voluptatibus.",
    value: "3"
}]
  , ts = (e,t)=>u.jsx(M.Fragment, {
    children: u.jsxs(ie.Item, {
        eventKey: e.value,
        children: [u.jsx(ie.Header, {
            children: e.heading
        }), u.jsx(ie.Body, {
            children: e.body
        })]
    })
}, t)
  , is = ()=>u.jsx("section", {
    className: "em--faq-section em--section",
    children: u.jsx(Z, {
        children: u.jsxs(W, {
            className: "justify-content-center",
            children: [u.jsx(R, {
                lg: 10,
                md: 10,
                sm: 12,
                xs: 12,
                children: u.jsxs("div", {
                    className: "sm--faq-content",
                    children: [u.jsx("h2", {
                        className: "em--large-head text-left",
                        children: "Frequently Asked Questions"
                    }), u.jsx("p", {
                        children: "Can’t find the answer you are looking for?"
                    })]
                })
            }), u.jsx(R, {
                lg: 10,
                md: 10,
                sm: 12,
                xs: 12,
                children: u.jsx("div", {
                    className: "em--faq-accordion",
                    children: u.jsx(ie, {
                        children: es.map(ts)
                    })
                })
            })]
        })
    })
})
  , as = ()=>u.jsxs(u.Fragment, {
    children: [u.jsx(St, {}), u.jsx(bt, {}), u.jsx(wt, {}), u.jsx(Ji, {}), u.jsx(is, {})]
});
export {as as default};
