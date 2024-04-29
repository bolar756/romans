import {c as b, a as d, r as t, u as v, b as S, d as y, j as e, C as N, R as E, e as L, F as u, I as g, P as p, L as P, B as k, f as B, o as F} from "./index-6a7a49be.js";
import {S as q} from "./SocialButtons-b82b4cf9.js";
const C = b({
    email: d().required("Email is a required field").email("Email is not valid!"),
    password: d().min(6, "Password must be at least 6 characters")
})
  , I = ()=>{
    var m, c;
    const [s,h] = t.useState("jack@example.com")
      , [a,x] = t.useState("qwerty")
      , {handleSubmit: j, register: o, formState: {errors: i}} = v({
        resolver: F(C)
    })
      , {login: f, isAuthenticated: l} = S()
      , n = y()
      , w = ()=>{
        s && a && f(s, a)
    }
    ;
    return t.useEffect(()=>{
        l && n("/evaluation")
    }
    , [l, n]),
    e.jsx("div", {
        className: "em--login-area",
        children: e.jsx(N, {
            children: e.jsx(E, {
                className: "justify-content-center",
                children: e.jsx(L, {
                    lg: 6,
                    md: 6,
                    sm: 12,
                    xs: 12,
                    children: e.jsxs("div", {
                        className: "em--login-card",
                        children: [e.jsx("h4", {
                            children: "Log in"
                        }), e.jsxs(u, {
                            className: "em--form em--login-form",
                            onSubmit: j(w),
                            children: [e.jsx(g, {
                                id: "email",
                                label: "Email",
                                type: "email",
                                handle: r=>h(r.target.value),
                                placeholder: p.email,
                                register: {
                                    ...o("email")
                                },
                                errorMessage: (m = i.email) == null ? void 0 : m.message,
                                value: s
                            }), e.jsx(g, {
                                id: "password",
                                label: "Password",
                                type: "password",
                                handle: r=>x(r.target.value),
                                placeholder: p.password,
                                register: {
                                    ...o("password")
                                },
                                errorMessage: (c = i.password) == null ? void 0 : c.message,
                                value: a
                            }), e.jsx(u.Group, {
                                className: "form-group group--inline",
                                children: e.jsx(P, {
                                    className: "forgot-link",
                                    to: "/",
                                    children: "Forgot Password?"
                                })
                            }), e.jsx(k, {
                                type: "em--primary-button btn",
                                children: "Login"
                            }), e.jsx(B, {
                                to: "/register",
                                type: "em--primary-button btn",
                                children: "Sign Up"
                            })]
                        }), e.jsx("div", {
                            className: "em--button-login",
                            children: e.jsx(q, {})
                        })]
                    })
                })
            })
        })
    })
}
;
export {I as default};
