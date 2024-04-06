import {c as p, a as d, u as h, j as e, C as u, R as x, e as j, F as f, I as o, B as w, f as y, o as b} from "./index-6a7a49be.js";
import {S as E} from "./SocialButtons-b82b4cf9.js";
const N = p({
    email: d().required("Email is a required field").email("Email is not valid!"),
    password: d().min(6, "Password must be at least 6 characters")
})
  , M = ()=>{
    var l, t, i, n, m;
    const {handleSubmit: c, register: r, formState: {errors: a}} = h({
        resolver: b(N)
    })
      , g = s=>{
        console.log(s)
    }
    ;
    return e.jsx("div", {
        className: "em--login-area",
        children: e.jsx(u, {
            children: e.jsx(x, {
                className: "justify-content-center",
                children: e.jsx(j, {
                    lg: 6,
                    md: 6,
                    sm: 12,
                    xs: 12,
                    children: e.jsxs("div", {
                        className: "em--login-card",
                        children: [e.jsx("h4", {
                            children: "Sign Up"
                        }), e.jsxs(f, {
                            className: "em--form em--login-form",
                            onSubmit: c(g),
                            children: [e.jsx(o, {
                                id: "fname",
                                label: "First Name",
                                type: "text",
                                handle: s=>console.log(s),
                                placeholder: "Enter your first name",
                                register: {
                                    ...r("firstname")
                                },
                                errorMessage: (l = a.firstname) == null ? void 0 : l.message
                            }), e.jsx(o, {
                                id: "lname",
                                label: "Last Name",
                                type: "text",
                                handle: s=>console.log(s),
                                placeholder: "Enter your last name",
                                register: {
                                    ...r("lastname")
                                },
                                errorMessage: (t = a.lastname) == null ? void 0 : t.message
                            }), e.jsx(o, {
                                id: "emaeil",
                                label: "Email",
                                type: "email",
                                handle: s=>console.log(s),
                                placeholder: "Enter your email",
                                register: {
                                    ...r("email")
                                },
                                errorMessage: (i = a.email) == null ? void 0 : i.message
                            }), e.jsx(o, {
                                id: "password",
                                label: "Password",
                                type: "password",
                                handle: s=>console.log(s),
                                placeholder: "Enter your password",
                                register: {
                                    ...r("password")
                                },
                                errorMessage: (n = a.password) == null ? void 0 : n.message
                            }), e.jsx(o, {
                                id: "c_password",
                                label: "Confirm Password",
                                type: "password",
                                handle: s=>console.log(s),
                                placeholder: "Enter your confirm password",
                                register: {
                                    ...r("password")
                                },
                                errorMessage: (m = a.c_password) == null ? void 0 : m.message
                            }), e.jsx(w, {
                                type: "em--primary-button btn",
                                children: "Register"
                            }), e.jsx(y, {
                                to: "/login",
                                type: "em--primary-button btn",
                                children: "Login"
                            })]
                        }), e.jsx("div", {
                            className: "em--button-login",
                            children: e.jsx(E, {})
                        })]
                    })
                })
            })
        })
    })
}
;
export {M as default};
