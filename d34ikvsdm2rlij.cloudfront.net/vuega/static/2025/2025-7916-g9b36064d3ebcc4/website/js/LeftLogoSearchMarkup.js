import {
    p as n,
    v as i,
    z as r,
    x as t,
    E as o,
    G as e,
    a8 as l,
    D as d
} from "./vendor.js";
const h = n({
        props: {
            isBurgerMenuOpened: {
                required: !0,
                type: Boolean
            }
        }
    }),
    c = h,
    p = {
        class: "ins-header__wrap"
    },
    _ = {
        class: "ins-header__inner"
    },
    $ = {
        class: "ins-header__row"
    },
    u = {
        class: "ins-header__left"
    },
    m = {
        class: "ins-header__right"
    },
    f = {
        class: "ins-header__row"
    },
    g = {
        class: "ins-header__left"
    },
    k = {
        class: "ins-header__right"
    };

function v(s, a, M, b, B, D) {
    return r(), t("div", p, [o("div", _, [o("div", $, [o("div", u, [e(s.$slots, "logo"), e(s.$slots, "searchFormDesktop")]), o("div", m, [e(s.$slots, "ctaDesktop"), e(s.$slots, "languageSelectDesktop"), e(s.$slots, "accountIcon"), e(s.$slots, "searchIcon"), e(s.$slots, "cartIcon"), e(s.$slots, "burgerIcon")])]), o("div", f, [o("div", g, [e(s.$slots, "menu")]), o("div", k, [e(s.$slots, "phoneDesktop"), e(s.$slots, "emailDesktop")])])]), s.isBurgerMenuOpened ? (r(), t("div", {
        key: 0,
        class: "ins-header__sidebar ins-header__sidebar--menu",
        onClick: a[0] || (a[0] = l(() => {}, ["stop"]))
    }, [e(s.$slots, "languageSelectMobile"), e(s.$slots, "sidebar-menu"), e(s.$slots, "searchFormMobile"), e(s.$slots, "phoneMobile"), e(s.$slots, "emailMobile"), e(s.$slots, "ctaMobile")])) : d("", !0), e(s.$slots, "searchPanel")])
}
const w = i(c, [
    ["render", v]
]);
export {
    w as
    default
};