import {
    p as x,
    t as z,
    c as f,
    r as p,
    x as _,
    E as i,
    S as k,
    aa as t,
    D as E,
    A as F,
    H as s,
    a5 as V,
    ac as W,
    F as U,
    y as j,
    a0 as G,
    a7 as g,
    a8 as R,
    z as d,
    L as q
} from "./vendor.js";
import {
    u as J,
    c as Q,
    b as X,
    b8 as Y,
    ai as Z,
    aj as ee,
    b9 as ae,
    ba as ne,
    ak as B
} from "./website.js";
import {
    L as oe,
    h as se,
    i as te
} from "./website-icons.js";
const le = ["aria-label", "aria-expanded"],
    ie = {
        key: 0,
        class: "ins-tile__text"
    },
    re = ["aria-label", "onClick", "onKeydown"],
    ue = 6.5,
    fe = x({
        __name: "LanguageDropdownMenu",
        props: {
            tileType: {},
            isDeprecatedHeader: {
                type: Boolean,
                default: !1
            },
            languages: {
                default: void 0
            },
            selectedLanguage: {
                default: void 0
            },
            visibleLanguages: {
                default: void 0
            }
        },
        setup(H) {
            const M = H,
                N = J(),
                K = Q(),
                w = X(N.$state),
                T = Y(),
                {
                    tileType: D,
                    isDeprecatedHeader: m
                } = z(M),
                o = f(() => ae(D.value)),
                n = f(() => ne(D.value)),
                r = p(),
                S = p(),
                u = p(),
                h = p(!1),
                b = p({}),
                A = Z(),
                P = f(() => o.value ? -1 : n.value && u.value ? u.value.length : 0),
                I = f(() => {
                    if (o.value) return ["ins-header__language", "ins-header__language--dropdown", "ins-header__language--switch", {
                        "ins-header__icon": m.value
                    }, {
                        "ins-header__icon--language": m.value
                    }];
                    if (n.value) return ["ins-tile__link", "ins-footer__dropdown-button"]
                }),
                O = f(() => [{
                    "ins-footer__language-text": n.value
                }, {
                    "ins-header__language-text": o.value
                }]),
                y = () => {
                    r.value && (o.value && (b.value = {
                        top: `${r.value.offsetTop+r.value.offsetHeight}px`,
                        right: `${window.innerWidth-r.value.offsetLeft-r.value.clientWidth}px`
                    }), n.value && (b.value = {
                        bottom: `${window.innerHeight-r.value.getBoundingClientRect().top}px`,
                        left: `${r.value.offsetLeft+ue}px`
                    })), h.value = !0
                },
                L = () => {
                    var a, l;
                    (a = u.value) != null && a.some(e => e === document.activeElement) && ((l = S.value) == null || l.focus()), h.value = !1
                },
                $ = (a, l) => {
                    var c, v;
                    const e = a.key;
                    u.value && ((e === "ArrowUp" || e === "Tab" && a.shiftKey) && (l === 0 ? L() : (c = u.value[l - 1]) == null || c.focus()), (e === "ArrowDown" || e === "Tab" && !a.shiftKey) && (l === u.value.length - 1 ? L() : (v = u.value[l + 1]) == null || v.focus()))
                },
                C = ee(K.isPreviewMode, A.profile.locale);
            return (a, l) => (d(), _("nav", {
                ref_key: "dropdownMenuRef",
                ref: S,
                role: "navigation",
                tabindex: "0",
                onMouseenter: y,
                onMouseleave: L,
                onFocus: y,
                onBlur: e => {},
                onKeydown: [l[0] || (l[0] = g(R(e => $(e, P.value), ["prevent", "stop"]), ["down", "up"])), g(y, ["enter"]), g(L, ["esc"])]
            }, [i("div", {
                ref_key: "menuElementRef",
                ref: r,
                role: "button",
                "aria-label": t(w)("FooterHeader.SiteLanguage.Dropdown.ADA.context"),
                "aria-expanded": h.value,
                class: s(I.value)
            }, [n.value ? (d(), _("div", ie, k(t(w)("Footer.Language")), 1)) : E("", !0), t(m) ? (d(), F(te, {
                key: 1
            })) : (d(), F(oe, {
                key: 2,
                role: "presentation",
                class: s({
                    "ins-footer__icon": n.value
                })
            }, null, 8, ["class"])), i("span", {
                class: s([{
                    "ins-header__text": o.value
                }, {
                    "ins-tile__text": n.value
                }])
            }, k(t(w)(`Language.${a.selectedLanguage}_iso`)), 3), i("div", {
                class: s([{
                    "ins-header__arrow": o.value
                }, {
                    "ins-footer__arrow": n.value
                }])
            }, null, 2)], 10, le), V(i("div", {
                ref: "dropdownElement",
                class: s([{
                    "ins-header__dropdown": o.value
                }, {
                    "ins-footer__dropdown": n.value
                }]),
                style: G(b.value)
            }, [i("div", {
                class: s([{
                    "ins-header__dropdown-wrap": o.value
                }, {
                    "ins-footer__dropdown-wrap": n.value
                }])
            }, [i("div", {
                class: s([{
                    "ins-header__dropdown-bg": o.value
                }, {
                    "ins-footer__dropdown-bg": n.value
                }])
            }, [i("div", {
                class: s([{
                    "ins-header__dropdown-inner": o.value
                }, {
                    "ins-footer__dropdown-inner": n.value
                }])
            }, [(d(!0), _(U, null, j(a.languages, (e, c) => (d(), _("div", {
                key: c,
                class: s([{
                    "ins-header__dropdown-link": o.value
                }, {
                    "ins-footer__dropdown-link": n.value
                }])
            }, [i("a", {
                ref_for: !0,
                ref_key: "dropdownLinkRefs",
                ref: u,
                role: "button",
                tabindex: "0",
                "aria-label": t(T)(e, `Language.${e}`),
                class: s([{
                    "ins-header__dropdown-link-title": o.value
                }, {
                    "ins-footer__dropdown-link-title": n.value
                }, {
                    "ins-header__dropdown-link-title--disabled": t(B)(e, a.visibleLanguages, a.selectedLanguage) && o.value
                }, {
                    "ins-footer__dropdown-link-title--disabled": t(B)(e, a.visibleLanguages, a.selectedLanguage) && n.value
                }, {
                    "ins-header__dropdown-link-title--active": e === a.selectedLanguage && o.value
                }, {
                    "ins-footer__dropdown-link-title--active": e === a.selectedLanguage && n.value
                }]),
                onClick: v => t(C)(e, a.visibleLanguages, a.selectedLanguage),
                onKeydown: [g(v => t(C)(e, a.visibleLanguages, a.selectedLanguage), ["enter"]), g(R(v => $(v, c), ["prevent", "stop"]), ["up", "down", "tab"])]
            }, [i("span", {
                class: s([{
                    "ins-header__language-mark": o.value
                }, {
                    "ins-footer__language-mark": n.value
                }])
            }, k(t(w)(`Language.${e}_iso`)), 3), i("span", {
                class: s(O.value)
            }, k(t(T)(e, `Language.${e}`)), 3), a.selectedLanguage === e ? (d(), _("span", {
                key: 0,
                class: s([{
                    "ins-header__language-check": o.value
                }, {
                    "ins-footer__language-check": n.value
                }])
            }, [q(se)], 2)) : E("", !0)], 42, re)], 2))), 128))], 2)], 2)], 2)], 6), [
                [W, h.value]
            ])], 544))
        }
    });
export {
    fe as _
};