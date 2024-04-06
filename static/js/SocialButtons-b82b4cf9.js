import {j as s, g as o, h as e} from "./index-6a7a49be.js";
const a = ()=>s.jsxs("button", {
    className: "em--facebook-button",
    children: [s.jsx("span", {
        className: "icon",
        children: s.jsx(o, {
            src: e.googleIcon,
            className: "img-fluid",
            alt: "Google Icon"
        })
    }), s.jsx("span", {
        className: "text",
        children: "Google"
    })]
})
  , c = ()=>s.jsxs("button", {
    className: "em--google-button",
    children: [s.jsx("span", {
        className: "icon",
        children: s.jsx(o, {
            src: e.facebookIcon,
            className: "img-fluid",
            alt: "Facebook Icon"
        })
    }), s.jsx("span", {
        className: "text",
        children: "Facebook"
    })]
})
  , t = ()=>s.jsxs(s.Fragment, {
    children: [s.jsx(a, {}), s.jsx(c, {})]
});
export {t as S};
