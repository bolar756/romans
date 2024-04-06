import {j as e, r as i, F as o, I as c, y as u, C as a, R as d, g as n, h as p} from "./index-6a7a49be.js";
const h = [{
    id: 1,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 2,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 3,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 4,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 5,
    url: "/",
    title: "Lorem Ipsum"
}]
  , x = [{
    id: 1,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 2,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 3,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 4,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 5,
    url: "/",
    title: "Lorem Ipsum"
}]
  , j = [{
    id: 1,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 2,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 3,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 4,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 5,
    url: "/",
    title: "Lorem Ipsum"
}]
  , L = [{
    id: 1,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 2,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 3,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 4,
    url: "/",
    title: "Lorem Ipsum"
}, {
    id: 5,
    url: "/",
    title: "Lorem Ipsum"
}]
  , s = (l,r)=>e.jsx(i.Fragment, {
    children: e.jsx("li", {
        children: e.jsx("a", {
            href: "/",
            className: "em--ft-link",
            children: l.title
        })
    })
}, r)
  , I = ()=>{
    const [l,r] = i.useState()
      , t = m=>{
        r(m.target.value)
    }
    ;
    return e.jsxs("div", {
        className: "em--subscribe-flex",
        children: [e.jsx("h4", {
            children: "Sign up to our newsletter!"
        }), e.jsxs(o.Group, {
            className: "form-subscribe",
            controlId: "",
            children: [e.jsx(c, {
                id: "subscribe",
                type: "text",
                handle: t,
                value: l,
                placeholder: "Enter your email"
            }), e.jsx(u, {
                className: "em--primary-button",
                children: "Subscribe"
            })]
        })]
    })
}
  , N = ()=>e.jsx("footer", {
    className: "em--footer-section",
    children: e.jsx(a, {
        children: e.jsx(d, {
            children: e.jsxs("div", {
                className: "col-md-12",
                children: [e.jsx(I, {}), e.jsxs("div", {
                    className: "em--footer-column",
                    children: [e.jsx("div", {
                        className: "em--ft-col",
                        children: e.jsx("div", {
                            className: "em--ft-logo",
                            children: e.jsx(n, {
                                src: p.greenLogo,
                                className: "img-fluid",
                                width: "200",
                                height: "100",
                                alt: "Emart Footer Logo"
                            })
                        })
                    }), e.jsxs("div", {
                        className: "em--ft-col",
                        children: [e.jsx("h4", {
                            children: "Sell Device"
                        }), e.jsx("ul", {
                            className: "em--ft-list",
                            children: h.map(s)
                        })]
                    }), e.jsxs("div", {
                        className: "em--ft-col",
                        children: [e.jsx("h4", {
                            children: "Services"
                        }), e.jsx("ul", {
                            className: "em--ft-list",
                            children: x.map(s)
                        })]
                    }), e.jsxs("div", {
                        className: "em--ft-col",
                        children: [e.jsx("h4", {
                            children: "Company"
                        }), e.jsx("ul", {
                            className: "em--ft-list",
                            children: j.map(s)
                        })]
                    }), e.jsxs("div", {
                        className: "em--ft-col",
                        children: [e.jsx("h4", {
                            children: "Help & Support"
                        }), e.jsx("ul", {
                            className: "em--ft-list",
                            children: L.map(s)
                        })]
                    })]
                })]
            })
        })
    })
});
export {N as default};
