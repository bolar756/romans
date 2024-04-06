import {j as s, g as i, e as x, L as g} from "./index-6a7a49be.js";
const p = ({id: e, width: d, height: n, decoding: o, src: t, alt: a, handle: c})=>{
    const r = "https://dummyimage.com/1000x600/fff/000.png&text=No+Image+Available"
      , m = l=>{
        l.target.src = r
    }
    ;
    return s.jsx(i, {
        id: e,
        width: d,
        height: n,
        decoding: o,
        src: t,
        className: "img-fluid",
        alt: a,
        onError: m,
        onClick: c
    })
}
  , j = (e,d)=>{
    const n = a=>{
        const c = a == null ? void 0 : a.substring(1);
        return c == null ? void 0 : c.replace("%3A", ":/")
    }
      , o = e.logo
      , t = n(o);
    return s.jsx(x, {
        className: "",
        md: "3",
        sm: "6",
        xs: "12",
        children: s.jsx("div", {
            className: "device__content",
            children: s.jsxs(g, {
                className: "box-design devices-box-design",
                to: `/sell/phonebrandid=${e.phonebrandid}`,
                target: "",
                children: [s.jsx("div", {
                    className: "device_text",
                    children: e.name
                }), s.jsx(p, {
                    width: "260",
                    height: "260",
                    decoding: "async",
                    src: t,
                    alt: `Emart ${e.name}`
                })]
            })
        })
    }, d)
}
;
export {j as D};
