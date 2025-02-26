function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./CenterLogoBurgerMarkup.js", "./vendor.js", "./CenterLogoCompactMarkup.js", "./CenterLogoDetailedMarkup.js", "./LeftLogoBurgerMarkup.js", "./LeftLogoCompactMarkup.js", "./LeftLogoDetailedMarkup.js", "./LeftLogoSearchMarkup.js", "./LeftLogoTextMarkup.js"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import {
    u as me,
    c as x,
    ai as On,
    b as be,
    aj as ho,
    ak as vo,
    al as $n,
    F as An,
    g as Te,
    h as po,
    j as mo,
    am as Pn,
    l as bo,
    t as Dn,
    a0 as te,
    an as Z,
    m as Ee,
    r as Bn,
    w as Hn,
    I as sn,
    ao as Fn,
    ap as Vn,
    aq as Gn,
    ar as Nn,
    as as Un,
    at as qn,
    au as yn,
    v as Kn,
    av as _o,
    aw as jn,
    ax as zn,
    ay as I,
    az as ko,
    o as fo,
    p as an,
    aA as Cn,
    z as Xn,
    aB as Rn,
    aC as yo,
    V as Yn,
    a4 as le,
    a5 as _e,
    aD as ve,
    aE as wo,
    aF as ze,
    aG as R,
    aH as Qn,
    aI as So,
    aJ as Lo,
    aK as Mo,
    aL as To,
    aM as Co,
    aN as Io,
    aO as Eo,
    aP as Oo,
    aQ as $o,
    aR as Ao,
    aS as Po,
    aT as Do,
    aU as Bo,
    aV as Ho,
    aW as Fo,
    aX as Vo,
    aY as Go,
    aZ as No,
    a_ as Uo,
    a$ as qo,
    b0 as Ko,
    b1 as jo,
    b2 as zo,
    b3 as Xo,
    b4 as Ro,
    b5 as Yo,
    b6 as Qo,
    b7 as In,
    H as on
} from "./website.js";
import {
    p as U,
    v as ee,
    z as t,
    x as g,
    F as ne,
    y as oe,
    H as B,
    a7 as pe,
    S as T,
    s as X,
    t as ae,
    c as o,
    r as P,
    w as fn,
    o as Xe,
    n as Ke,
    M,
    L as F,
    A as O,
    Q as A,
    R as he,
    C as je,
    E as h,
    a8 as z,
    D as m,
    a0 as $e,
    G as fe,
    aa as re,
    ab as Jo,
    J as Jn,
    $ as Le,
    b as Me
} from "./vendor.js";
import {
    A as Zn
} from "./ActionLink.js";
import {
    _ as Wn
} from "./LanguageDropdownMenu.vue_vue_type_script_setup_true_lang.js";
import {
    _ as xn
} from "./PictureContainer.vue_vue_type_script_setup_true_lang.js";
import {
    P as Zo,
    E as Wo,
    b as xo,
    c as et,
    I as wn,
    d as eo,
    B as nt,
    e as ot,
    f as tt,
    g as at
} from "./website-icons.js";
const st = U({
        props: {
            languages: {
                required: !0,
                type: Array
            },
            selectedLanguage: {
                required: !0,
                type: String
            },
            visibleLanguages: {
                default: void 0,
                type: Array
            },
            isDeprecatedHeader: {
                required: !1,
                type: Boolean,
                default: !1
            }
        },
        setup() {
            const e = me(),
                n = x(),
                a = On(),
                l = be(e.$state),
                c = ho(n.isPreviewMode, a.profile.locale);
            return {
                i18n: l,
                navigateToTranslationPage: c,
                isLanguageDisabled: vo
            }
        }
    }),
    it = {
        class: "ins-header__language ins-header__language--row"
    },
    rt = ["aria-label", "onClick", "onKeydown", "textContent"];

function lt(e, n, a, l, c, u) {
    return t(), g("div", it, [(t(!0), g(ne, null, oe(e.languages, (s, d) => (t(), g("a", {
        key: d,
        tabindex: "0",
        role: "button",
        "aria-label": e.i18n(`Language.${s}_iso`),
        class: B(["ins-header__language-link", {
            "ins-header__icon": e.isDeprecatedHeader
        }, {
            "ins-header__icon--language": e.isDeprecatedHeader
        }, {
            "ins-header__language-link--active": s === e.selectedLanguage
        }, {
            "ins-header__language-link--disabled": e.isLanguageDisabled(s, e.visibleLanguages, e.selectedLanguage)
        }]),
        onClick: b => e.navigateToTranslationPage(s, e.visibleLanguages, e.selectedLanguage),
        onKeydown: pe(b => e.navigateToTranslationPage(s, e.visibleLanguages, e.selectedLanguage), ["enter"]),
        textContent: T(e.i18n(`Language.${s}_iso`))
    }, null, 42, rt))), 128))])
}
const no = ee(st, [
    ["render", lt]
]);

function ut(e) {
    switch (e) {
        case I.LEFT:
            return ko;
        default:
            return
    }
}

function ct(e, n) {
    var v, k, p, _, f, C, i, $, V, G, L, w;
    const a = { ...n == null ? void 0 : n.general,
            ...e.general,
            background: { ...(v = n == null ? void 0 : n.general) == null ? void 0 : v.background,
                ...(k = e.general) == null ? void 0 : k.background,
                solid: { ...(_ = (p = n == null ? void 0 : n.general) == null ? void 0 : p.background) == null ? void 0 : _.solid,
                    ...(C = (f = e.general) == null ? void 0 : f.background) == null ? void 0 : C.solid
                },
                gradient: { ...($ = (i = n == null ? void 0 : n.general) == null ? void 0 : i.background) == null ? void 0 : $.gradient,
                    ...(G = (V = e.general) == null ? void 0 : V.background) == null ? void 0 : G.gradient
                }
            }
        },
        l = { ...n == null ? void 0 : n.logo,
            ...e.logo,
            frame: { ...(L = n == null ? void 0 : n.logo) == null ? void 0 : L.frame,
                ...(w = e.logo) == null ? void 0 : w.frame
            }
        },
        c = { ...n == null ? void 0 : n.menu,
            ...e.menu
        },
        u = { ...n == null ? void 0 : n.phone,
            ...e.phone
        },
        s = { ...n == null ? void 0 : n.email,
            ...e.email
        },
        d = { ...n == null ? void 0 : n.search,
            ...e.search
        },
        b = { ...n == null ? void 0 : n.cart,
            ...e.cart
        },
        r = { ...n == null ? void 0 : n.actionLink,
            ...e.actionLink
        };
    return {
        layout: e.layout,
        general: a,
        logo: l,
        menu: c,
        phone: u,
        email: s,
        search: d,
        cart: b,
        actionLink: r
    }
}

function dt(e, n) {
    function a() {
        n.value = !0, Ke().then(() => {
            e.value !== void 0 && e.value.focus()
        })
    }
    return a
}

function gt(e) {
    function n() {
        e.value = !1
    }
    return n
}

function ht(e, n, a) {
    function l() {
        if (n.value === void 0) return;
        const u = n.value.value;
        yo(u);
        const s = `${a.value}?keyword=${encodeURIComponent(u)}`;
        window.open(s, e.value)
    }
    return l
}

function vt(e, n) {
    const a = Te();

    function l() {
        a.setBurgerMenuOpenState(!n.value), window.scrollTo({
            top: 0
        }), (e == null ? void 0 : e.value) !== void 0 && e.value.scrollTo({
            top: 0
        })
    }
    return l
}

function pt(e, n) {
    let a = [...fo(e.general), ...an("menu", e.menu), ...an("phone", e.phone), ...an("email", e.email), ...Cn("search", e.search), ...Cn("cart", e.cart), ...Xn("button", e.actionLink)];
    return n === Z.TEXT && (a = [...a, ...Rn("logo", e.logo)]), a
}

function mt(e, n) {
    const a = P(0),
        l = P(0),
        c = P(0),
        u = P(0);

    function s(v) {
        const k = v;
        n && n.value && k.deltaY && (k.preventDefault(), k.stopPropagation(), n.value.scrollLeft += k.deltaY)
    }

    function d() {
        var v;
        c.value = ((v = n == null ? void 0 : n.value) == null ? void 0 : v.scrollLeft) ? ? 0
    }

    function b() {
        var v, k, p, _, f, C, i;
        a.value = ((v = e == null ? void 0 : e.value) == null ? void 0 : v.offsetLeft) ? ? 0, u.value = ((k = n == null ? void 0 : n.value) == null ? void 0 : k.scrollWidth) ? ? 0, l.value = ((p = n == null ? void 0 : n.value) == null ? void 0 : p.offsetWidth) ? ? 0, n && n.value && u.value > l.value ? ((_ = n == null ? void 0 : n.value) == null || _.addEventListener("wheel", s), (f = n == null ? void 0 : n.value) == null || f.addEventListener("scroll", d)) : ((C = n == null ? void 0 : n.value) == null || C.removeEventListener("wheel", s), (i = n == null ? void 0 : n.value) == null || i.removeEventListener("scroll", d))
    }

    function r() {
        const v = Yn(b, 100);
        window.addEventListener("resize", v), b()
    }
    return {
        menuElementContainerOffsetLeft: a,
        menuElementWrapOffsetWidth: l,
        menuElementWrapScrollLeft: c,
        menuElementWrapScrollWidth: u,
        subscribeOnMenuOffsetChange: r
    }
}

function bt() {
    Te().setBurgerMenuOpenState(!1)
}
const _t = U({
        components: {
            ForceHydrateComponent: $n,
            PhoneIcon: Zo,
            EmailIcon: Wo,
            CartIcon: xo,
            SearchIcon: et,
            FontLoader: An,
            ActionLink: Zn,
            PictureContainer: xn,
            LanguageDropdownMenu: Wn,
            LanguageRowMenu: no
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            siteSettings: {
                required: !0,
                type: Object
            },
            profile: {
                required: !0,
                type: Object
            },
            content: {
                required: !0,
                type: Object
            },
            externalContent: {
                required: !0,
                type: Object
            },
            design: {
                required: !0,
                type: Object
            },
            viewportSettings: {
                required: !0,
                type: Object
            }
        },
        setup(e, {
            attrs: n
        }) {
            var Sn;
            const a = me(),
                l = x(),
                c = Te(),
                u = be(a.$state),
                {
                    visibleTranslationLanguages: s
                } = X(c),
                {
                    getLang: d
                } = X(l),
                {
                    siteSettings: b,
                    profile: r,
                    content: v
                } = ae(e),
                k = o(() => {
                    var y;
                    return (y = r.value) == null ? void 0 : y.storeName
                }),
                p = o(() => {
                    const y = ut(e.design.layout);
                    return ct(e.design, y)
                }),
                _ = P(),
                f = P(),
                {
                    windowScrollTop: C,
                    subscribeOnWindowScrollChange: i
                } = po(),
                {
                    tileOffsetTop: $,
                    tileOffsetHeight: V,
                    subscribeOnTileOffsetChange: G
                } = mo(_),
                {
                    cartItemCount: L,
                    cartNeedBounce: w,
                    subscribeOnCartChange: q
                } = Pn((Sn = r.value) == null ? void 0 : Sn.siteId),
                W = P(!1),
                ue = o(() => bo(W, e.viewportSettings, C.value, $.value, V.value)),
                se = o(() => {
                    var y, N, Q, J, Se;
                    return [(y = p.value.logo) == null ? void 0 : y.font, (N = p.value.menu) == null ? void 0 : N.font, (Q = p.value.phone) == null ? void 0 : Q.font, (J = p.value.email) == null ? void 0 : J.font, (Se = p.value.actionLink) == null ? void 0 : Se.font]
                }),
                ce = o(() => {
                    const y = pt(p.value, v.value.logo.type);
                    return Dn(`#${n.id}`, y)
                }),
                ie = l.isPreviewMode,
                de = o(() => te(ie)),
                E = o(() => c.isBurgerMenuOpened),
                Y = vt(f, E),
                ke = o(() => v.value.logo.type === Z.TEXT),
                ge = o(() => v.value.logo.type === Z.IMAGE),
                H = o(() => {
                    var N;
                    const y = (N = p.value.logo) == null ? void 0 : N.visible;
                    return ke.value ? y && Ee(v.value.logo.text) : ge.value ? y && v.value.logo.image !== void 0 : !1
                }),
                K = o(() => {
                    var Q, J, Se, Ln, Mn, Tn;
                    const y = (J = (Q = p.value.logo) == null ? void 0 : Q.frame) == null ? void 0 : J.visible,
                        N = (((Tn = (Mn = (Ln = (Se = p.value.logo) == null ? void 0 : Se.frame) == null ? void 0 : Ln.color) == null ? void 0 : Mn.hsl) == null ? void 0 : Tn.a) ? ? 1) === 0;
                    return y && !N
                }),
                Ce = o(() => v.value.logo.text),
                Ie = o(() => {
                    var y;
                    return (y = p.value.logo) == null ? void 0 : y.capitalization
                }),
                Ae = o(() => Bn(e.tileId, "logo-image")),
                Re = o(() => Ae.value !== void 0),
                Ye = o(() => Hn(Ae.value, v.value.logo.image)),
                Pe = [{
                    image1x: sn.url600,
                    image2x: sn.url600
                }],
                De = o(() => {
                    var y;
                    return ((y = e.externalContent.storeData) == null ? void 0 : y.categories) ? ? []
                }),
                Qe = o(() => e.externalContent.categoryTree ? ? []),
                rn = o(() => e.externalContent.brands ? ? []),
                Je = o(() => v.value.menu),
                Ze = o(() => p.value.menu),
                Be = Fn(De, Je, Ze, Qe, rn),
                He = o(() => {
                    var Q, J;
                    const y = (Q = p.value.phone) == null ? void 0 : Q.visible,
                        N = Ee((J = v.value.contactInfo) == null ? void 0 : J.phone);
                    return y && N
                }),
                Fe = o(() => {
                    var Q, J;
                    const y = (Q = p.value.email) == null ? void 0 : Q.visible,
                        N = Ee((J = v.value.contactInfo) == null ? void 0 : J.email);
                    return y && N
                }),
                Ve = o(() => {
                    var y;
                    return (y = r.value.featureFlags) == null ? void 0 : y.isBasicEcommerceEnabled
                }),
                Ge = o(() => {
                    var y;
                    return ((y = p.value.search) == null ? void 0 : y.visible) && Ve.value
                }),
                Oe = P(),
                Ne = P(!1),
                ln = dt(Oe, Ne),
                un = o(() => {
                    var y;
                    return (y = b.value) == null ? void 0 : y.content
                }),
                cn = o(() => d.value ? ? r.value.locale),
                Ue = o(() => Vn(r.value, un.value)),
                dn = o(() => {
                    var y, N;
                    return ((y = Ue.value) == null ? void 0 : y.length) !== void 0 && ((N = Ue.value) == null ? void 0 : N.length) > 1
                }),
                gn = Gn(),
                hn = o(() => Nn()),
                vn = o(() => Un()),
                We = o(() => qn()),
                pn = o(() => yn()),
                mn = ht(de, Oe, We),
                bn = gt(Ne),
                qe = o(() => {
                    var y;
                    return ((y = p.value.cart) == null ? void 0 : y.visible) && Ve.value
                }),
                xe = o(() => v.value.actionLink),
                en = o(() => p.value.actionLink),
                nn = o(() => Kn(xe, en)),
                S = P(),
                D = P(),
                {
                    menuElementContainerOffsetLeft: j,
                    menuElementWrapOffsetWidth: ye,
                    menuElementWrapScrollLeft: we,
                    menuElementWrapScrollWidth: _n,
                    subscribeOnMenuOffsetChange: ao
                } = mt(S, D),
                so = o(() => ({
                    left: `${Be.storeItemPosition-we.value+j.value}px`
                })),
                io = o(() => ({
                    left: `${we.value/_n.value*100}%`,
                    width: `${ye.value/_n.value*100}%`
                })),
                ro = o(() => ye.value < _n.value),
                lo = o(() => {
                    var y, N;
                    return ((N = (y = p.value.general) == null ? void 0 : y.background) == null ? void 0 : N.type) === _o.GRADIENT
                }),
                uo = o(() => {
                    var y, N, Q, J, Se;
                    return (((Se = (J = (Q = (N = (y = p.value.general) == null ? void 0 : y.background) == null ? void 0 : N.solid) == null ? void 0 : Q.color) == null ? void 0 : J.hsl) == null ? void 0 : Se.a) ? ? 1) < 1
                }),
                co = o(() => ie || H.value || Be.hasElement || He.value || Fe.value || Ge.value || qe.value || nn.value),
                go = o(() => e.viewportSettings.width);
            return fn(go, (y, N) => {
                N !== y && bt()
            }), Xe(() => {
                i(), G(), ao(), q()
            }), {
                i18n: u,
                tileRef: _,
                headerRef: f,
                fonts: se,
                styleSelector: ce,
                isPreview: ie,
                linkTarget: de,
                isBurgerMenuOpened: E,
                toggleMenu: Y,
                isTextLogo: ke,
                isImageLogo: ge,
                hasLogo: H,
                hasLogoFrame: K,
                logoText: Ce,
                logoCapitalizationType: Ie,
                CapitalizationType: jn,
                imageSet: Ye,
                imageBreakpointSet: Pe,
                isUploadingLogoImage: Re,
                storeCategories: De,
                menuElement: Be,
                hasPhone: He,
                hasEmail: Fe,
                hasSearch: Ge,
                searchInputRef: Oe,
                isSearchPanelOpened: Ne,
                openSearchPanel: ln,
                closeSearchPanel: bn,
                openSearchPage: mn,
                hasCart: qe,
                hasActionLink: nn,
                isTileShown: ue,
                actionLinkContent: xe,
                actionLinkDesign: en,
                menuElementContainerRef: S,
                menuElementWrapRef: D,
                activeMenuItemStyles: so,
                scrollerMarkerStyles: io,
                isLargeMenu: ro,
                isGradientBackground: lo,
                hasOpacityBackground: uo,
                cartItemCount: L,
                cartNeedBounce: w,
                storeName: k,
                tileNeedRender: co,
                onCartClick: gn,
                baseUrl: hn,
                cartUrl: vn,
                searchUrl: We,
                accountUrl: pn,
                languages: Ue,
                hasLanguages: dn,
                selectedLanguage: cn,
                visibleTranslationLanguages: s,
                TileType: zn
            }
        }
    }),
    kt = {
        class: "ins-tile__wrap ins-tile__animated"
    },
    ft = {
        ref: "headerRef",
        class: "ins-header"
    },
    yt = {
        class: "ins-header__wrap"
    },
    wt = ["aria-label"],
    St = h("div", {
        class: "ins-header__burger-menu"
    }, null, -1),
    Lt = {
        class: "ins-header__burger-label ins-header__burger-label--menu"
    },
    Mt = {
        class: "ins-header__burger-label ins-header__burger-label--close"
    },
    Tt = {
        class: "ins-header__search-button"
    },
    Ct = ["aria-label", "title", "placeholder"],
    It = {
        class: "ins-header__menu"
    },
    Et = ["href", "target"],
    Ot = {
        class: "ins-header__logo-text-inner"
    },
    $t = {
        key: 0,
        class: "ins-header__links-fade"
    },
    At = {
        ref: "menuElementWrapRef",
        class: "ins-header__links-wrap"
    },
    Pt = {
        class: "ins-header__links-inner"
    },
    Dt = h("div", {
        class: "ins-header__links-spacer"
    }, null, -1),
    Bt = ["onMouseenter", "onFocus"],
    Ht = ["href", "target", "onClick"],
    Ft = {
        key: 0,
        class: "ins-header__link-icon"
    },
    Vt = h("div", {
        class: "ins-header__links-spacer"
    }, null, -1),
    Gt = {
        class: "ins-header__scroller"
    },
    Nt = {
        class: "ins-header__droppable-wrap"
    },
    Ut = {
        class: "ins-header__droppable-bg"
    },
    qt = {
        class: "ins-header__droppable-inner"
    },
    Kt = {
        key: 0
    },
    jt = ["href", "target"],
    zt = {
        key: 1,
        class: "ins-header__droppable-footer"
    },
    Xt = {
        class: "ins-header__link"
    },
    Rt = ["href"],
    Yt = {
        class: "ins-header__link"
    },
    Qt = ["href"],
    Jt = {
        class: "ins-header__link"
    },
    Zt = ["href"],
    Wt = {
        key: 2,
        class: "ins-header__icons"
    },
    xt = {
        key: 2,
        class: "ins-header__social"
    },
    ea = ["href", "aria-label"],
    na = ["title"],
    oa = {
        class: "ins-header__icon-title"
    },
    ta = ["href", "aria-label"],
    aa = ["title"],
    sa = {
        class: "ins-header__icon-title"
    },
    ia = ["aria-label", "title"],
    ra = ["data-count", "aria-label", "title", "target", "href"];

function la(e, n, a, l, c, u) {
    const s = M("FontLoader"),
        d = M("SearchIcon"),
        b = M("PictureContainer"),
        r = M("LanguageDropdownMenu"),
        v = M("LanguageRowMenu"),
        k = M("PhoneIcon"),
        p = M("EmailIcon"),
        _ = M("CartIcon"),
        f = M("ForceHydrateComponent"),
        C = M("ActionLink");
    return e.tileNeedRender ? (t(), g("header", {
        key: 0,
        ref: "tileRef",
        class: B(["ins-tile", "ins-tile--header", "ins-tile--left", {
            "ins-tile--shown": e.isTileShown
        }, {
            "ins-tile--open": e.isBurgerMenuOpened && (e.hasPhone || e.hasEmail || e.hasSearch || e.menuElement.hasElement || e.hasActionLink || e.hasLanguages)
        }, {
            "ins-tile--has-menu": e.menuElement.hasElement
        }]),
        role: "banner"
    }, [F(s, {
        fonts: e.fonts
    }, null, 8, ["fonts"]), (t(), O(je("style"), null, {
        default: A(() => [he(T(e.styleSelector), 1)]),
        _: 1
    })), h("div", kt, [h("div", ft, [h("div", yt, [e.hasPhone || e.hasEmail || e.hasSearch || e.menuElement.hasElement || e.hasActionLink || e.hasLanguages ? (t(), g("a", {
        key: 0,
        class: "ins-header__burger",
        "aria-label": e.i18n("ADA.Menu.Mobile"),
        href: "#menu",
        onKeydown: n[0] || (n[0] = pe((...i) => e.toggleMenu && e.toggleMenu(...i), ["enter"])),
        onClick: n[1] || (n[1] = z((...i) => e.toggleMenu && e.toggleMenu(...i), ["prevent"]))
    }, [St, h("div", Lt, T(e.i18n("Header.Menu")), 1), h("div", Mt, T(e.i18n("Header.Menu.Close.action")), 1)], 40, wt)) : m("", !0), e.hasSearch ? (t(), g("div", {
        key: 1,
        class: B(["ins-header__search", {
            "ins-header__search--open": e.isSearchPanelOpened
        }])
    }, [h("form", {
        class: "ins-header__search-wrap",
        role: "search",
        method: "get",
        onSubmit: n[4] || (n[4] = z((...i) => e.openSearchPage && e.openSearchPage(...i), ["prevent"]))
    }, [h("div", Tt, [F(d)]), h("input", {
        ref: "searchInputRef",
        class: "ins-header__search-field",
        type: "search",
        name: "keyword",
        value: "",
        autocomplete: "off",
        maxlength: "2048",
        "aria-label": e.i18n("ADA.Search.placeholder"),
        title: e.i18n("ADA.Search.placeholder"),
        placeholder: e.i18n("Header.Search.placeholder"),
        onBlur: n[2] || (n[2] = (...i) => e.closeSearchPanel && e.closeSearchPanel(...i)),
        onKeyup: n[3] || (n[3] = pe((...i) => e.closeSearchPanel && e.closeSearchPanel(...i), ["esc"]))
    }, null, 40, Ct)], 32)], 2)) : m("", !0), h("div", It, [e.hasLogo || e.isUploadingLogoImage ? (t(), g("div", {
        key: 0,
        class: B(["ins-header__logo", {
            "ins-header__logo--frame": e.hasLogoFrame && e.isTextLogo
        }])
    }, [h("a", {
        href: e.baseUrl,
        target: e.linkTarget,
        role: "button",
        class: "ins-header__logo-inner"
    }, [e.isTextLogo ? (t(), g("div", {
        key: 0,
        class: B(["ins-header__logo-text", {
            "ins-header__logo-text--all": e.logoCapitalizationType === e.CapitalizationType.ALL
        }, {
            "ins-header__logo-text--small": e.logoCapitalizationType === e.CapitalizationType.SMALL
        }])
    }, [h("div", Ot, T(e.logoText), 1)], 2)) : m("", !0), e.isImageLogo ? (t(), g("div", {
        key: 1,
        class: B(["ins-header__logo-image", {
            "ins-header__logo-image--loading": e.isUploadingLogoImage
        }])
    }, [F(b, {
        "image-set": e.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "use-inline-layout": !0,
        "has-thumbnail": !1,
        "has-background": !1,
        alt: e.storeName,
        class: "ins-header__logo-image-inner"
    }, null, 8, ["image-set", "image-breakpoint-set", "alt"])], 2)) : m("", !0)], 8, Et)], 2)) : m("", !0), e.menuElement.hasElement ? (t(), g("div", {
        key: 1,
        ref: "menuElementContainerRef",
        class: B(["ins-header__links", {
            "ins-header__links--menu-open": !1
        }, {
            "ins-header__links--large-menu": e.isLargeMenu
        }, {
            "ins-header__links--few": e.menuElement.itemList.length < 5
        }, {
            "ins-header__links--several": e.menuElement.itemList.length >= 5 && e.menuElement.itemList.length <= 6
        }, {
            "ins-header__links--alot": e.menuElement.itemList.length > 6
        }]),
        onMouseleave: n[6] || (n[6] = i => e.menuElement.setActiveMenuItem(i, void 0)),
        onBlur: n[7] || (n[7] = i => e.menuElement.setActiveMenuItem(i, void 0))
    }, [!e.isGradientBackground && !e.hasOpacityBackground ? (t(), g("div", $t)) : m("", !0), h("div", At, [h("nav", Pt, [Dt, (t(!0), g(ne, null, oe(e.menuElement.itemList, i => (t(), g("div", {
        key: i.id,
        class: B(["ins-header__link", {
            "ins-header__link--hover": e.menuElement.isActiveMenuItem(i)
        }]),
        onMouseenter: $ => e.menuElement.setActiveMenuItem($, i),
        onFocus: $ => e.menuElement.setActiveMenuItem($, i)
    }, [h("a", {
        class: "ins-header__link-title",
        role: "button",
        href: i.linkHref,
        target: e.linkTarget,
        onClick: i.performCustomAction
    }, [he(T(i.title) + " ", 1), i.hasSubmenu ? (t(), g("div", Ft)) : m("", !0)], 8, Ht)], 42, Bt))), 128)), Vt])], 512), h("div", Gt, [h("div", {
        ref: "scrollerMarker",
        class: "ins-header__scroller-marker",
        style: $e(e.scrollerMarkerStyles)
    }, null, 4)]), e.menuElement.activeMenuItem ? (t(), g("div", {
        key: 1,
        class: "ins-header__droppable",
        style: $e(e.activeMenuItemStyles)
    }, [h("div", Nt, [h("div", Ut, [h("div", qt, [e.menuElement.activeMenuItem.showStoreCategories ? (t(), g("div", Kt, [(t(!0), g(ne, null, oe(e.storeCategories, i => (t(), g("div", {
        key: i.id,
        class: "ins-header__link"
    }, [h("a", {
        class: "ins-header__link-title",
        href: i.url,
        target: e.linkTarget
    }, T(i.name), 9, jt)]))), 128))])) : m("", !0), e.menuElement.activeMenuItem ? (t(), g("div", zt, [h("div", Xt, [h("a", {
        class: "ins-header__link-title",
        role: "button",
        href: e.cartUrl,
        onClick: n[5] || (n[5] = z((...i) => e.onCartClick && e.onCartClick(...i), ["prevent"]))
    }, T(e.i18n("NavigationMenu.Cart")), 9, Rt)]), h("div", Yt, [h("a", {
        role: "button",
        class: "ins-header__link-title",
        href: e.searchUrl
    }, T(e.i18n("NavigationMenu.ProductSearch")), 9, Qt)]), h("div", Jt, [h("a", {
        role: "button",
        class: "ins-header__link-title",
        href: e.accountUrl
    }, T(e.i18n("NavigationMenu.Account")), 9, Zt)])])) : m("", !0)])])])], 4)) : m("", !0)], 34)) : m("", !0), e.hasPhone || e.hasEmail || e.hasCart || e.hasSearch || e.hasActionLink || e.hasLanguages ? (t(), g("div", Wt, [e.hasLanguages ? (t(), O(r, {
        key: 0,
        class: "ins-header__language--desktop",
        "selected-language": e.selectedLanguage,
        languages: e.languages,
        "visible-languages": e.visibleTranslationLanguages,
        "is-deprecated-header": !0,
        "tile-type": e.TileType.HEADER
    }, null, 8, ["selected-language", "languages", "visible-languages", "tile-type"])) : m("", !0), e.hasLanguages ? (t(), O(v, {
        key: 1,
        class: "ins-header__language--mobile ins-header__link",
        "selected-language": e.selectedLanguage,
        languages: e.languages,
        "visible-languages": e.visibleTranslationLanguages,
        "is-deprecated-header": !0
    }, null, 8, ["selected-language", "languages", "visible-languages"])) : m("", !0), e.hasPhone || e.hasEmail ? (t(), g("div", xt, [e.hasPhone ? (t(), g("a", {
        key: 0,
        role: "button",
        class: "ins-header__icon ins-header__icon--phone",
        href: `tel:${e.content.contactInfo.phone}`,
        "aria-label": e.i18n("ADA.Phone", !1, {
            "{phone}": e.content.contactInfo.phone
        })
    }, [h("span", {
        class: "ins-header__icon-icon",
        title: e.content.contactInfo.phone
    }, [F(k)], 8, na), h("span", oa, T(e.content.contactInfo.phone), 1)], 8, ea)) : m("", !0), e.hasEmail ? (t(), g("a", {
        key: 1,
        role: "button",
        class: "ins-header__icon ins-header__icon--email",
        href: `mailto:${e.content.contactInfo.email}`,
        "aria-label": e.i18n("ADA.Mail", !1, {
            "{mail}": e.content.contactInfo.email
        })
    }, [h("span", {
        class: "ins-header__icon-icon",
        title: e.content.contactInfo.email
    }, [F(p)], 8, aa), h("span", sa, T(e.content.contactInfo.email), 1)], 8, ta)) : m("", !0)])) : m("", !0), e.hasSearch ? (t(), g("a", {
        key: 3,
        class: "ins-header__icon ins-header__icon--search",
        href: "#search",
        role: "button",
        "aria-label": e.i18n("ADA.Search"),
        title: e.i18n("ADA.Search"),
        onKeydown: n[8] || (n[8] = pe((...i) => e.openSearchPanel && e.openSearchPanel(...i), ["enter"])),
        onClick: n[9] || (n[9] = z((...i) => e.openSearchPanel && e.openSearchPanel(...i), ["prevent"]))
    }, [F(d)], 40, ia)) : m("", !0), F(f, null, {
        default: A(() => [e.hasCart ? (t(), g("a", {
            key: 0,
            role: "button",
            class: B(["ins-header__icon ins-header__icon--cart", {
                "ins-header__icon--cart-empty": e.cartItemCount === 0
            }, {
                "ins-header__icon--cart-full": e.cartItemCount > 99
            }, {
                "ins-header__icon--bounce": e.cartNeedBounce
            }]),
            "data-count": e.cartItemCount,
            "aria-label": e.i18n("ADA.Cart"),
            title: e.i18n("ADA.Cart"),
            target: e.linkTarget,
            href: e.cartUrl,
            onClick: n[10] || (n[10] = z((...i) => e.onCartClick && e.onCartClick(...i), ["prevent"]))
        }, [F(_)], 10, ra)) : m("", !0)]),
        _: 1
    }), F(C, {
        content: e.actionLinkContent,
        design: e.actionLinkDesign,
        "preview-mode": e.isPreview,
        class: "ins-header__cta"
    }, null, 8, ["content", "design", "preview-mode"])])) : m("", !0)])])], 512)]), fe(e.$slots, "hover-label"), fe(e.$slots, "hovered-border"), fe(e.$slots, "selected-border")], 2)) : m("", !0)
}
const ua = ee(_t, [
        ["render", la]
    ]),
    ca = {
        class: "ins-header__dropdown-link-wrapper"
    },
    da = {
        class: "ins-header__dropdown-link",
        tabindex: "0"
    },
    ga = ["href", "target"],
    ha = U({
        __name: "BrandsDropdownListItem",
        props: {
            brandName: {},
            brandUrl: {}
        },
        setup(e) {
            const {
                brandUrl: n
            } = e, a = x(), {
                isPreviewMode: l,
                isTemplatePreviewMode: c
            } = X(a), u = o(() => te(l.value)), s = o(() => le(l.value, c.value, n)), d = o(() => _e(l.value, c.value, u.value));
            return (b, r) => (t(), g("div", ca, [h("div", da, [h("a", {
                class: "ins-header__dropdown-link-title",
                tabindex: "-1",
                href: s.value,
                target: d.value
            }, [h("p", null, T(b.brandName), 1)], 8, ga)])]))
        }
    }),
    va = {
        class: "ins-header__dropdown-wrap"
    },
    pa = {
        class: "ins-header__dropdown-bg"
    },
    ma = {
        key: 0,
        class: "ins-header__dropdown-subtitle"
    },
    ba = U({
        __name: "BrandDropdownList",
        props: {
            menuElement: {},
            activeMenuItemAlignment: {
                default: ve.RIGHT
            },
            left: {
                default: 0
            },
            top: {
                default: 0
            },
            width: {
                default: 0
            }
        },
        emits: ["closeDropdown"],
        setup(e, {
            emit: n
        }) {
            const a = e,
                l = n,
                c = me(),
                u = be(c.$state),
                {
                    menuElement: s,
                    left: d,
                    top: b,
                    width: r,
                    activeMenuItemAlignment: v
                } = ae(a),
                k = P(null),
                p = o(() => a.menuElement.menuBrandList || []),
                _ = o(() => {
                    var L;
                    return ((L = p.value) == null ? void 0 : L.length) > 0
                }),
                f = o(() => {
                    var L;
                    return ((L = p.value) == null ? void 0 : L.length) >= wo
                }),
                C = o(() => {
                    var L, w;
                    return {
                        "ins-header__dropdown": !0,
                        "ins-header__dropdown--right": v.value === ve.RIGHT,
                        "ins-header__dropdown--left": v.value === ve.LEFT,
                        "ins-header__dropdown--first": (L = s.value.activeMenuItem) == null ? void 0 : L.isFirstItem,
                        "ins-header__dropdown--last": (w = s.value.activeMenuItem) == null ? void 0 : w.isLastItem,
                        "ins-header__dropdown--1-col": p.value.length <= 20,
                        "ins-header__dropdown--3-col": p.value.length > 20
                    }
                }),
                i = o(() => ({
                    "--item-position-left": `${d.value}px`,
                    "--item-width": `${r.value}px`,
                    "--item-position-top": `${b.value}px`
                })),
                $ = L => {
                    l("closeDropdown"), Ke(() => {
                        s.value.setActiveMenuItem(L, s.value.activeMenuItem), s.value.setActiveDropdownMenu(void 0)
                    })
                },
                V = L => {
                    L.preventDefault(), $(L)
                },
                G = L => {
                    switch (L.code) {
                        case "Escape":
                            $(L);
                            break;
                        case "Tab":
                            L.shiftKey && V(L);
                            break
                    }
                };
            return (L, w) => _.value ? (t(), g("div", {
                key: 0,
                class: B(C.value),
                style: $e(i.value)
            }, [h("div", va, [h("div", pa, [f.value ? (t(), g("div", ma, T(re(u)("Header.Brands.PopularBrands").toUpperCase()), 1)) : m("", !0), h("div", {
                ref_key: "dropdownRef",
                ref: k,
                class: "ins-header__dropdown-inner",
                onKeydown: G
            }, [(t(!0), g(ne, null, oe(p.value, q => (t(), O(ha, {
                key: q.name,
                "brand-name": q.name,
                "brand-url": q.productsFilteredByBrandUrl,
                onClick: $
            }, null, 8, ["brand-name", "brand-url"]))), 128))], 544)])])], 6)) : m("", !0)
        }
    }),
    _a = U({
        name: "EcDropdownListItem",
        components: {
            ChevronRightIcon: wn.ChevronRightIcon
        },
        props: {
            category: {
                type: Object,
                required: !0
            },
            focusCategory: {
                type: Number,
                default: void 0
            },
            activeMenuItemAlignment: {
                type: String,
                default: ve.LEFT,
                enum: ve
            },
            shouldShowSubMenu: {
                required: !1,
                default: !1,
                type: Boolean
            }
        },
        emits: ["update:focusCategory"],
        setup(e, {
            emit: n
        }) {
            const a = P(void 0),
                l = x(),
                {
                    isPreviewMode: c,
                    isTemplatePreviewMode: u
                } = X(l),
                {
                    category: s,
                    shouldShowSubMenu: d,
                    focusCategory: b
                } = ae(e),
                r = o(() => s.value.children && s.value.children.length > 0),
                v = o(() => d.value && r.value),
                k = o(() => te(c.value)),
                p = o(() => le(c.value, u.value, s.value.urlPath)),
                _ = o(() => _e(c.value, u.value, k.value)),
                f = o(() => ["ins-header__dropdown-link-title", {
                    "ins-header__dropdown-link-title--active-subcategory": b.value === s.value.id
                }]),
                C = w => {
                    n("update:focusCategory", w)
                },
                i = w => {
                    const q = w.target;
                    q && q.closest(".ins-header__dropdown-link") || n("update:focusCategory", void 0)
                };
            return {
                hasSubMenu: v,
                computedLinkClass: f,
                hrefValue: p,
                targetValue: _,
                startMouseTracking: () => {
                    clearTimeout(a.value), C(s.value.id)
                },
                stopMouseTracking: w => {
                    clearTimeout(a.value), a.value = window.setTimeout(() => {
                        i(w)
                    }, 150)
                },
                startFocusTracking: () => {
                    C(s.value.id)
                },
                stopFocusTracking: w => {
                    i(w)
                },
                clearFocusCategory: i
            }
        }
    }),
    ka = ["href", "target"],
    fa = {
        key: 0,
        class: "ins-header__dropdown-link-arrow"
    };

function ya(e, n, a, l, c, u) {
    const s = M("ChevronRightIcon");
    return t(), g("div", {
        class: "ins-header__dropdown-link",
        tabindex: "0",
        onMouseenter: n[0] || (n[0] = (...d) => e.startMouseTracking && e.startMouseTracking(...d)),
        onMouseleave: n[1] || (n[1] = (...d) => e.stopMouseTracking && e.stopMouseTracking(...d)),
        onFocusin: n[2] || (n[2] = (...d) => e.startFocusTracking && e.startFocusTracking(...d)),
        onFocusout: n[3] || (n[3] = (...d) => e.stopFocusTracking && e.stopFocusTracking(...d)),
        onKeydown: n[4] || (n[4] = pe((...d) => e.clearFocusCategory && e.clearFocusCategory(...d), ["esc"]))
    }, [h("a", {
        class: B(e.computedLinkClass),
        tabindex: "-1",
        href: e.hrefValue,
        target: e.targetValue
    }, [h("p", null, T(e.category.name), 1), e.hasSubMenu ? (t(), g("span", fa, [F(s)])) : m("", !0)], 10, ka)], 32)
}
const oo = ee(_a, [
        ["render", ya]
    ]),
    wa = U({
        emits: ["update:focusCategory"],
        setup(e, {
            emit: n
        }) {
            const a = me(),
                l = x(),
                {
                    isPreviewMode: c,
                    isTemplatePreviewMode: u
                } = X(l),
                s = be(a.$state),
                d = o(() => te(u.value)),
                b = o(() => ze()),
                r = o(() => le(c.value, u.value, b.value)),
                v = o(() => _e(c.value, u.value, d.value));
            return {
                i18n: s,
                hrefValue: r,
                targetValue: v,
                resetFocusCategory: () => {
                    n("update:focusCategory", void 0)
                }
            }
        }
    }),
    Sa = {
        class: "ins-header__dropdown-link-wrapper"
    },
    La = ["href", "target"];

function Ma(e, n, a, l, c, u) {
    return t(), g("div", Sa, [h("div", {
        tabindex: "0",
        class: "ins-header__dropdown-link ins-header__dropdown-link--view-all",
        onFocusin: n[0] || (n[0] = (...s) => e.resetFocusCategory && e.resetFocusCategory(...s)),
        onMouseenter: n[1] || (n[1] = (...s) => e.resetFocusCategory && e.resetFocusCategory(...s))
    }, [h("a", {
        tabindex: "-1",
        class: "ins-header__dropdown-link-title",
        href: e.hrefValue,
        target: e.targetValue
    }, T(e.i18n("Header.ViewAll")), 9, La)], 32)])
}
const Ta = ee(wa, [
        ["render", Ma]
    ]),
    Ca = {
        class: "ins-header__dropdown ins-header__dropdown-subcategory ins-header__dropdown--1-col"
    },
    Ia = {
        class: "ins-header__dropdown-wrap"
    },
    Ea = {
        class: "ins-header__dropdown-bg"
    },
    Oa = {
        class: "ins-header__dropdown-inner"
    },
    $a = U({
        __name: "SubcategoryDropdownList",
        props: {
            category: {}
        },
        emits: ["update:focusCategory", "closeDropdown"],
        setup(e) {
            const n = e,
                {
                    category: a
                } = ae(n);
            return (l, c) => (t(), g("div", Ca, [h("div", Ia, [h("div", Ea, [h("div", Oa, [(t(!0), g(ne, null, oe(re(a).children, u => (t(), O(oo, {
                key: u.id,
                category: u,
                "focus-category": re(a).id
            }, null, 8, ["category", "focus-category"]))), 128))])])])]))
        }
    }),
    Aa = {
        class: "ins-header__dropdown-container"
    },
    Pa = {
        key: 0,
        class: "ins-header__dropdown-wrap"
    },
    Da = {
        class: "ins-header__dropdown-bg"
    },
    En = 20,
    Ba = 40,
    Ha = U({
        __name: "CategoryDropdownList",
        props: {
            menuElement: {},
            mode: {
                default: R.STORE
            },
            left: {
                default: 0
            },
            width: {
                default: 0
            },
            top: {
                default: 0
            },
            activeMenuItemAlignment: {
                default: ve.RIGHT
            }
        },
        emits: ["update:focusCategory", "closeDropdown"],
        setup(e, {
            emit: n
        }) {
            const a = e,
                l = n,
                c = P(null),
                u = P(void 0),
                {
                    mode: s,
                    left: d,
                    top: b,
                    width: r,
                    activeMenuItemAlignment: v
                } = ae(a),
                {
                    menuElement: k
                } = a,
                p = o(() => k.menuCategoriesList || []),
                _ = o(() => {
                    var E;
                    return ((E = p.value) == null ? void 0 : E.length) > 0
                }),
                f = o(() => s.value === R.CATEGORIES || s.value === R.STORE && p.value.length <= En),
                C = o(() => {
                    var E, Y;
                    return {
                        "ins-header__dropdown": !0,
                        "ins-header__dropdown--first": (E = k.activeMenuItem) == null ? void 0 : E.isFirstItem,
                        "ins-header__dropdown--last": (Y = k.activeMenuItem) == null ? void 0 : Y.isLastItem
                    }
                }),
                i = o(() => p.value.length > En && s.value === R.STORE),
                $ = o(() => ({
                    "ins-header__dropdown--1-col": !i.value,
                    "ins-header__dropdown--3-col": i.value
                })),
                V = o(() => ({
                    "--item-position-left": `${d.value}px`,
                    "--item-width": `${r.value}px`,
                    "--item-position-top": `${b.value}px`
                })),
                G = E => {
                    l("closeDropdown"), Ke(() => {
                        k.setActiveMenuItem(E, k.activeMenuItem), k.setActiveDropdownMenu(void 0)
                    })
                },
                L = E => {
                    E.preventDefault(), G(E)
                },
                w = E => {
                    switch (E.code) {
                        case "Escape":
                            G(E);
                            break;
                        case "Tab":
                            E.shiftKey && L(E);
                            break
                    }
                },
                q = E => {
                    u.value = E
                },
                W = o(() => {
                    if (u.value) return p.value.find(E => E.id === u.value)
                }),
                ue = o(() => {
                    var E;
                    return f.value && ((E = W.value) == null ? void 0 : E.children) && W.value.children.length > 0
                }),
                se = P(),
                ce = o(() => ({
                    top: `${se.value}px`
                })),
                ie = o(() => s.value === "STORE"),
                de = E => {
                    let Y = E;
                    ie.value && (Y += 1), se.value = Y * Ba
                };
            return (E, Y) => (t(), g("div", {
                class: B([C.value, {
                    "ins-header__dropdown--right": re(v) === re(ve).RIGHT
                }, {
                    "ins-header__dropdown--left": re(v) === re(ve).LEFT
                }, $.value]),
                style: $e(V.value)
            }, [h("div", Aa, [_.value ? (t(), g("div", Pa, [h("div", Da, [h("div", {
                ref_key: "dropdownRef",
                ref: c,
                class: "ins-header__dropdown-inner",
                onKeydown: w
            }, [ie.value ? (t(), O(Ta, {
                key: 0,
                "onUpdate:focusCategory": q
            })) : m("", !0), (t(!0), g(ne, null, oe(p.value, (ke, ge) => (t(), O(oo, {
                key: ke.id,
                category: ke,
                "focus-category": u.value,
                "active-menu-item-alignment": re(v),
                "should-show-sub-menu": f.value,
                "onUpdate:focusCategory": q,
                onMouseover: H => de(ge),
                onFocus: H => de(ge)
            }, null, 8, ["category", "focus-category", "active-menu-item-alignment", "should-show-sub-menu", "onMouseover", "onFocus"]))), 128))], 544)])])) : m("", !0), ue.value && W.value ? (t(), O($a, {
                key: 1,
                category: W.value,
                style: $e(ce.value),
                class: B(C.value)
            }, null, 8, ["category", "style", "class"])) : m("", !0)])], 6))
        }
    }),
    Fa = 500;

function Va(e, n) {
    const a = P(0),
        l = P(0),
        c = P(0),
        u = P(0),
        s = P(0),
        d = P(0);

    function b(p) {
        const _ = p;
        n && n.value && _.deltaY && (_.preventDefault(), _.stopPropagation(), n.value.scrollLeft += _.deltaY)
    }

    function r() {
        var p;
        s.value = ((p = n == null ? void 0 : n.value) == null ? void 0 : p.scrollLeft) ? ? 0
    }

    function v() {
        var p, _, f, C, i, $, V, G, L;
        a.value = ((p = e == null ? void 0 : e.value) == null ? void 0 : p.offsetLeft) ? ? 0, l.value = ((_ = e == null ? void 0 : e.value) == null ? void 0 : _.offsetTop) ? ? 0, d.value = ((f = n == null ? void 0 : n.value) == null ? void 0 : f.scrollWidth) ? ? 0, c.value = ((C = n == null ? void 0 : n.value) == null ? void 0 : C.offsetWidth) ? ? 0, u.value = ((i = n == null ? void 0 : n.value) == null ? void 0 : i.offsetHeight) ? ? 0, n && n.value && d.value > c.value ? (($ = n == null ? void 0 : n.value) == null || $.addEventListener("wheel", b), (V = n == null ? void 0 : n.value) == null || V.addEventListener("scroll", r)) : ((G = n == null ? void 0 : n.value) == null || G.removeEventListener("wheel", b), (L = n == null ? void 0 : n.value) == null || L.removeEventListener("scroll", r))
    }

    function k() {
        const p = Yn(v, 100);
        window.addEventListener("resize", p), v()
    }
    return {
        menuElementContainerOffsetLeft: a,
        menuElementContainerOffsetTop: l,
        menuElementWrapOffsetWidth: c,
        menuElementWrapOffsetHeight: u,
        menuElementWrapScrollLeft: s,
        menuElementWrapScrollWidth: d,
        updateOffset: v,
        subscribeOnMenuOffsetChange: k
    }
}
const Ga = U({
        components: {
            BrandDropdownList: ba,
            CategoryDropdownList: Ha
        },
        props: {
            menuElement: {
                required: !0,
                type: Object
            },
            viewportSettings: {
                required: !0,
                type: Object
            },
            hasOpacityBackground: {
                required: !0,
                type: Boolean
            }
        },
        setup(e) {
            const n = me(),
                a = x(),
                {
                    isPreviewMode: l,
                    isTemplatePreviewMode: c
                } = X(a),
                u = be(n.$state),
                s = te(c.value),
                d = P(),
                b = P(),
                r = P(null),
                v = P([]),
                k = P(-1),
                p = H => ({
                    ref: K => {
                        K && (v.value[H] = K)
                    }
                }),
                {
                    menuElementContainerOffsetLeft: _,
                    menuElementContainerOffsetTop: f,
                    menuElementWrapOffsetWidth: C,
                    menuElementWrapOffsetHeight: i,
                    menuElementWrapScrollLeft: $,
                    menuElementWrapScrollWidth: V,
                    updateOffset: G,
                    subscribeOnMenuOffsetChange: L
                } = Va(d, b),
                w = o(() => {
                    const H = e.menuElement.storeItemPosition - $.value + _.value,
                        K = f.value + i.value;
                    return {
                        left: H,
                        width: e.menuElement.storeItemWidth,
                        top: K
                    }
                }),
                q = o(() => (e.viewportSettings.width ? ? 0) - w.value.left > Fa),
                W = o(() => q.value ? ve.LEFT : ve.RIGHT),
                ue = o(() => ({
                    left: `${$.value/V.value*100}%`,
                    width: `${C.value/V.value*100}%`
                })),
                se = o(() => C.value < V.value),
                ce = o(() => $.value !== 0),
                ie = o(() => $.value + C.value !== V.value),
                de = o(() => ze()),
                E = o(() => {
                    var H;
                    return ((H = e.menuElement.activeMenuItem) == null ? void 0 : H.type) === Qn.GO_TO_CATEGORY ? R.CATEGORIES : R.STORE
                }),
                Y = (H, K, Ce) => {
                    (["Space"].includes(H.code) || ["ArrowDown"].includes(H.code)) && (H.preventDefault(), H.stopPropagation(), e.menuElement.setActiveMenuItem(H, K), K.hasSubmenu && (e.menuElement.setActiveDropdownMenu(K), k.value = Ce, Ke(() => {
                        var Ie;
                        (Ie = r.value) == null || Ie.focus()
                    })))
                },
                ke = (H, K, Ce) => {
                    G(), H.type === "mouseenter" || H.type === "mouseleave" ? e.menuElement.setActiveMenuItem(H, K) : H instanceof KeyboardEvent && K && (G(), Y(H, K, Ce))
                },
                ge = () => {
                    Ke(() => {
                        var H;
                        k.value >= 0 && ((H = v.value[k.value]) == null || H.focus())
                    })
                };
            return Xe(() => {
                L()
            }), {
                i18n: u,
                isPreviewMode: l,
                isTemplatePreviewMode: c,
                getHrefValue: le,
                getTargetValue: _e,
                linkTarget: s,
                menuElementContainerRef: d,
                menuElementWrapRef: b,
                menuItemRefs: v,
                setMenuItemRef: p,
                setActiveMenuItem: ke,
                activeMenuItemStyles: w,
                activeMenuItemAlignment: W,
                scrollerMarkerStyles: ue,
                isLargeMenu: se,
                showStartFade: ce,
                showEndFade: ie,
                storeUrl: de,
                onKeydownMenuItem: Y,
                categoryDropdownListRef: r,
                activeMenuItemIndex: k,
                closeDropdownMenu: ge,
                menuDropdownMode: E
            }
        }
    }),
    Na = {
        ref: "menuElementWrapRef",
        class: "ins-header__menu-wrap"
    },
    Ua = {
        class: "ins-header__menu-inner"
    },
    qa = ["tabindex", "onMouseenter", "onFocus", "onKeydown"],
    Ka = ["href", "target", "aria-label", "onClick"],
    ja = {
        key: 0,
        class: "ins-header__menu-link-icon"
    },
    za = {
        class: "ins-header__scroller"
    };

function Xa(e, n, a, l, c, u) {
    var b;
    const s = M("CategoryDropdownList"),
        d = M("BrandDropdownList");
    return e.menuElement.hasElement ? (t(), g("div", {
        key: 0,
        ref: "menuElementContainerRef",
        class: B(["ins-header__menu", {
            "ins-header__menu--large-menu": e.isLargeMenu
        }, {
            "ins-header__menu--few": e.menuElement.itemList.length < 5
        }, {
            "ins-header__menu--several": e.menuElement.itemList.length >= 5 && e.menuElement.itemList.length <= 6
        }, {
            "ins-header__menu--alot": e.menuElement.itemList.length > 6
        }]),
        onMouseleave: n[0] || (n[0] = r => e.menuElement.setActiveMenuItem(r, void 0)),
        onBlur: r => {}
    }, [e.hasOpacityBackground ? m("", !0) : (t(), g("div", {
        key: 0,
        class: B(["ins-header__menu-fade", {
            "ins-header__menu-fade--start": e.showStartFade
        }, {
            "ins-header__menu-fade--end": e.showEndFade
        }])
    }, null, 2)), h("div", Na, [h("nav", Ua, [(t(!0), g(ne, null, oe(e.menuElement.itemList, (r, v) => (t(), g("div", Jo({
        key: r.id
    }, e.setMenuItemRef(v), {
        ref_for: !0,
        ref: "menuItemRefs",
        tabindex: e.menuElement.activeDropdownMenu && e.activeMenuItemIndex !== v ? -1 : 0,
        class: ["ins-header__menu-link", {
            "ins-header__menu-link--hover": e.menuElement.isActiveMenuItem(r)
        }],
        onMouseenter: k => e.setActiveMenuItem(k, r, v),
        onFocus: k => e.setActiveMenuItem(k, r, v),
        onKeydown: k => e.onKeydownMenuItem(k, r, v)
    }), [h("a", {
        class: "ins-header__menu-link-title",
        tabindex: "-1",
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, r.linkHref),
        target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
        "aria-label": r.title,
        onClick: r.performCustomAction
    }, [he(T(r.title) + " ", 1), r.hasSubmenu ? (t(), g("div", ja)) : m("", !0)], 8, Ka)], 16, qa))), 128))])], 512), h("div", za, [h("div", {
        ref: "scrollerMarker",
        class: "ins-header__scroller-marker",
        style: $e(e.scrollerMarkerStyles)
    }, null, 4)]), e.menuElement.shouldShowSubMenu && e.menuElement.menuCategoriesList ? (t(), O(s, {
        ref: "categoryDropdownListRef",
        key: (b = e.menuElement.activeMenuItem) == null ? void 0 : b.id,
        "menu-element": e.menuElement,
        mode: e.menuDropdownMode,
        "active-menu-item-alignment": e.activeMenuItemAlignment,
        left: e.activeMenuItemStyles.left,
        width: e.activeMenuItemStyles.width,
        top: e.activeMenuItemStyles.top,
        onCloseDropdown: e.closeDropdownMenu
    }, null, 8, ["menu-element", "mode", "active-menu-item-alignment", "left", "width", "top", "onCloseDropdown"])) : m("", !0), e.menuElement.shouldShowBrandMenu && e.menuElement.menuBrandList ? (t(), O(d, {
        key: 2,
        "menu-element": e.menuElement,
        "active-menu-item-alignment": e.activeMenuItemAlignment,
        left: e.activeMenuItemStyles.left,
        width: e.activeMenuItemStyles.width,
        top: e.activeMenuItemStyles.top,
        onCloseDropdown: e.closeDropdownMenu
    }, null, 8, ["menu-element", "active-menu-item-alignment", "left", "width", "top", "onCloseDropdown"])) : m("", !0)], 34)) : m("", !0)
}
const Ra = ee(Ga, [
        ["render", Xa]
    ]),
    Ya = U({
        components: {
            PictureContainer: xn
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            content: {
                required: !0,
                type: Object
            },
            design: {
                required: !0,
                type: Object
            }
        },
        setup(e) {
            const n = me(),
                a = x(),
                l = On(),
                c = be(n.$state),
                {
                    isPreviewMode: u,
                    isTemplatePreviewMode: s
                } = X(a),
                {
                    profile: d
                } = X(l),
                b = o(() => {
                    var w;
                    return (w = d.value) == null ? void 0 : w.storeName
                }),
                r = o(() => te(s.value)),
                v = o(() => e.content.type === Z.TEXT),
                k = o(() => e.content.type === Z.IMAGE),
                p = o(() => Bn(e.tileId, "logo-image")),
                _ = o(() => {
                    const w = e.design.visible;
                    return !!p.value && !!w
                }),
                f = o(() => {
                    const w = e.design.visible;
                    return e.content.type === Z.TEXT ? w && Ee(e.content.text) : e.content.type === Z.IMAGE ? w && e.content.image !== void 0 : !1
                }),
                C = o(() => {
                    var W, ue, se, ce;
                    const w = (W = e.design.frame) == null ? void 0 : W.visible,
                        q = (((ce = (se = (ue = e.design.frame) == null ? void 0 : ue.color) == null ? void 0 : se.hsl) == null ? void 0 : ce.a) ? ? 1) === 0;
                    return w && !q
                }),
                i = o(() => e.content.text),
                $ = o(() => e.design.capitalization),
                V = o(() => Hn(p.value, e.content.image)),
                G = [{
                    image1x: sn.url200,
                    image2x: sn.url600
                }],
                L = o(() => Nn());
            return {
                i18n: c,
                storeName: b,
                isPreviewMode: u,
                isTemplatePreviewMode: s,
                getHrefValue: le,
                getTargetValue: _e,
                hasLogo: f,
                linkTarget: r,
                isTextLogo: v,
                isImageLogo: k,
                hasLogoFrame: C,
                logoText: i,
                logoCapitalizationType: $,
                CapitalizationType: jn,
                imageSet: V,
                imageBreakpointSet: G,
                uploadingLogoImage: p,
                isImageUploading: _,
                baseUrl: L
            }
        }
    }),
    Qa = ["href", "target"],
    Ja = {
        class: "ins-header__logo-text-inner"
    };

function Za(e, n, a, l, c, u) {
    const s = M("PictureContainer");
    return e.hasLogo || e.isImageUploading ? (t(), g("div", {
        key: 0,
        class: B(["ins-header__logo", {
            "ins-header__logo--frame": e.hasLogoFrame && e.isTextLogo
        }])
    }, [h("a", {
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.baseUrl),
        target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
        role: "button",
        class: "ins-header__logo-inner"
    }, [e.isTextLogo ? (t(), g("div", {
        key: 0,
        class: B(["ins-header__logo-text", {
            "ins-header__logo-text--all": e.logoCapitalizationType === e.CapitalizationType.ALL
        }, {
            "ins-header__logo-text--small": e.logoCapitalizationType === e.CapitalizationType.SMALL
        }])
    }, [h("div", Ja, T(e.logoText), 1)], 2)) : m("", !0), e.isImageLogo ? (t(), g("div", {
        key: 1,
        class: B(["ins-header__logo-image", {
            "ins-header__logo-image--loading": e.uploadingLogoImage
        }])
    }, [F(s, {
        "image-set": e.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "use-inline-layout": !0,
        "has-thumbnail": !1,
        "has-background": !1,
        alt: e.storeName,
        class: "ins-header__logo-image-inner"
    }, null, 8, ["image-set", "image-breakpoint-set", "alt"])], 2)) : m("", !0)], 8, Qa)], 2)) : m("", !0)
}
const Wa = ee(Ya, [
        ["render", Za]
    ]),
    xa = {
        class: "ins-header__search"
    },
    es = ["aria-label", "placeholder"],
    ns = ["aria-label"],
    os = U({
        __name: "SearchFormComponent",
        props: {
            forceFocus: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const n = e,
                a = me(),
                l = Te(),
                c = P(),
                u = be(a.$state),
                s = () => {
                    const r = c.value;
                    So(r == null ? void 0 : r.value)
                },
                d = () => {
                    l.setSearchPanelOpenState(!1)
                };

            function b() {
                var r;
                (r = c.value) == null || r.focus()
            }
            return Xe(() => {
                n.forceFocus && b()
            }), (r, v) => (t(), g("div", xa, [h("form", {
                role: "search",
                class: "ins-header__search-wrap",
                method: "get",
                onSubmit: z(s, ["prevent"])
            }, [h("input", {
                ref_key: "searchInputRef",
                ref: c,
                class: "ins-header__search-field",
                type: "search",
                enterkeyhint: "search",
                name: "keyword",
                value: "",
                autocomplete: "off",
                maxlength: "2048",
                "aria-label": re(u)("ADA.Search.placeholder"),
                placeholder: re(u)("Header.Search.placeholder"),
                onBlur: d,
                onKeyup: pe(d, ["esc"])
            }, null, 40, es), h("button", {
                type: "submit",
                "aria-label": re(u)("ADA.Search"),
                class: "ins-header__search-button"
            }, [F(eo)], 8, ns)], 32)]))
        }
    }),
    ts = U({
        components: {
            AppleMusicIcon: Lo,
            FacebookIcon: Mo,
            InstagramIcon: To,
            LinkedinIcon: Co,
            MessengerIcon: Io,
            PinterestIcon: Eo,
            SnapchatIcon: Oo,
            SpotifyIcon: $o,
            TelegramIcon: Ao,
            TiktokIcon: Po,
            TwitchIcon: Do,
            TwitterIcon: Bo,
            VkontakteIcon: Ho,
            WechatIcon: Fo,
            WhatsappIcon: Vo,
            YelpIcon: Go,
            YoutubeIcon: No,
            LineIcon: Uo,
            DiscordIcon: qo,
            ThreadsIcon: Ko,
            ViberIcon: jo
        },
        props: {
            socialProfileList: {
                required: !0,
                type: Array
            },
            isPreviewMode: {
                required: !0,
                type: Boolean
            },
            isTemplatePreviewMode: {
                required: !0,
                type: Boolean
            }
        },
        setup(e) {
            const {
                isPreviewMode: n
            } = ae(e);
            return {
                linkTarget: te(n.value),
                getHrefValue: le
            }
        }
    }),
    as = {
        class: "ins-header__social"
    },
    ss = ["href", "aria-label", "target"];

function is(e, n, a, l, c, u) {
    return t(), g("div", as, [(t(!0), g(ne, null, oe(e.socialProfileList, (s, d) => (t(), g("a", {
        key: d,
        role: "button",
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, s.link),
        "aria-label": s.type,
        target: e.linkTarget,
        class: B(["ins-header__icon", `ins-header__icon--${s.type}`])
    }, [(t(), O(je(s.icon)))], 10, ss))), 128))])
}
const rs = ee(ts, [
        ["render", is]
    ]),
    ls = {
        class: "ins-header__submenu-link"
    },
    us = ["href", "target"],
    cs = U({
        __name: "SidebarBrandItem",
        props: {
            brandName: {},
            brandUrl: {}
        },
        setup(e) {
            const {
                brandUrl: n
            } = e, a = x(), {
                isPreviewMode: l,
                isTemplatePreviewMode: c
            } = X(a), u = o(() => te(c.value)), s = o(() => le(l.value, c.value, n)), d = o(() => _e(l.value, c.value, u.value));
            return (b, r) => (t(), g("div", ls, [h("a", {
                class: "ins-header__submenu-link-title",
                href: s.value,
                target: d.value
            }, T(b.brandName), 9, us)]))
        }
    }),
    ds = {
        class: "ins-header__submenu"
    },
    gs = {
        key: 0
    },
    hs = U({
        __name: "SidebarBrandSubmenu",
        props: {
            menuElement: {}
        },
        setup(e) {
            const n = e,
                {
                    menuElement: a
                } = ae(n),
                l = o(() => a.value.menuBrandList || []),
                c = o(() => {
                    var u;
                    return ((u = l.value) == null ? void 0 : u.length) > 0
                });
            return (u, s) => (t(), g("div", ds, [c.value ? (t(), g("div", gs, [(t(!0), g(ne, null, oe(l.value, d => (t(), O(cs, {
                key: d.name,
                "brand-name": d.name,
                "brand-url": d.productsFilteredByBrandUrl
            }, null, 8, ["brand-name", "brand-url"]))), 128))])) : m("", !0)]))
        }
    }),
    vs = U({
        props: {
            level: {
                type: Number,
                required: !0
            },
            mode: {
                type: String,
                default: R.STORE,
                enum: R
            },
            link: {
                type: String,
                default: "",
                required: !0
            }
        },
        setup(e) {
            const n = me(),
                a = x(),
                {
                    isPreviewMode: l,
                    isTemplatePreviewMode: c
                } = X(a),
                {
                    level: u,
                    mode: s,
                    link: d
                } = ae(e),
                b = be(n.$state),
                r = o(() => te(c.value)),
                v = o(() => ze()),
                k = o(() => s.value === R.STORE && u.value === 0 ? v.value : d.value),
                p = o(() => le(l.value, c.value, k.value)),
                _ = o(() => _e(l.value, c.value, r.value)),
                f = o(() => ({
                    "ins-header__submenu-link": u.value === 0,
                    "ins-header__subsubmenu-link": u.value === 1
                })),
                C = o(() => ({
                    "ins-header__submenu-link-title": u.value === 0,
                    "ins-header__subsubmenu-link-title": u.value === 1
                }));
            return {
                i18n: b,
                hrefValue: p,
                targetValue: _,
                computedClass: f,
                computedLinkClass: C
            }
        }
    }),
    ps = ["href", "target"];

function ms(e, n, a, l, c, u) {
    return t(), g("div", {
        class: B(e.computedClass)
    }, [h("a", {
        class: B(e.computedLinkClass),
        href: e.hrefValue,
        target: e.targetValue
    }, T(e.i18n("Header.ViewAll")), 11, ps)], 2)
}
const to = ee(vs, [
        ["render", ms]
    ]),
    bs = U({
        components: {
            SidebarSubmenuViewAll: to,
            ChevronDownSmallIcon: wn.ChevronDownSmallIcon
        },
        props: {
            categoryItem: {
                type: Object,
                required: !0
            },
            menuElement: {
                type: Object,
                required: !0
            },
            level: {
                type: Number,
                required: !0
            },
            mode: {
                type: String,
                default: R.STORE,
                enum: R
            }
        },
        setup(e) {
            const n = x(),
                {
                    isPreviewMode: a,
                    isTemplatePreviewMode: l
                } = X(n),
                {
                    menuElement: c,
                    categoryItem: u,
                    level: s
                } = ae(e),
                d = o(() => te(l.value)),
                b = o(() => {
                    var i;
                    return u.value.children && ((i = u.value.children) == null ? void 0 : i.length) > 0 && s.value < 2
                }),
                r = o(() => le(a.value, l.value, u.value.urlPath)),
                v = o(() => _e(a.value, l.value, d.value)),
                k = o(() => ({
                    "ins-header__submenu-link": s.value === 1,
                    "ins-header__subsubmenu-link": s.value === 2
                })),
                p = o(() => ({
                    "ins-header__submenu-link-title": s.value === 1,
                    "ins-header__subsubmenu-link-title": s.value === 2
                })),
                _ = o(() => ({
                    "ins-header__sidebar-menu-link-icon": !0,
                    "ins-header__sidebar-menu-link-icon--open": c.value.isActiveVerticalMenuCategoryItem(u.value.id)
                }));
            return {
                computedClass: k,
                computedLinkClass: p,
                computedIconClass: _,
                handleKeydown: i => {
                    b.value && (i.key === "Enter" || i.key === " ") && (i.preventDefault(), i.stopPropagation(), c.value.toggleActiveVerticalMenuCategoryItem(u.value.id, b.value))
                },
                handleClick: i => {
                    b.value && (i.preventDefault(), i.stopPropagation(), c.value.toggleActiveVerticalMenuCategoryItem(u.value.id, b.value))
                },
                hasChildren: b,
                hrefValue: r,
                targetValue: v
            }
        }
    }),
    _s = ["href", "target"],
    ks = {
        key: 0,
        class: "ins-header__subsubmenu"
    },
    fs = {
        key: 0
    };

function ys(e, n, a, l, c, u) {
    const s = M("ChevronDownSmallIcon"),
        d = M("SidebarSubmenuViewAll"),
        b = M("SidebarSubmenuItem", !0);
    return t(), g("div", {
        class: B(e.computedClass)
    }, [h("a", {
        class: B(e.computedLinkClass),
        href: e.hrefValue,
        target: e.targetValue,
        onKeydown: n[0] || (n[0] = (...r) => e.handleKeydown && e.handleKeydown(...r)),
        onClick: n[1] || (n[1] = (...r) => e.handleClick && e.handleClick(...r))
    }, [he(T(e.categoryItem.name) + " ", 1), e.hasChildren ? (t(), O(s, {
        key: 0,
        class: B(e.computedIconClass)
    }, null, 8, ["class"])) : m("", !0)], 42, _s), e.menuElement.isActiveVerticalMenuCategoryItem(e.categoryItem.id) && e.hasChildren ? (t(), g("div", ks, [F(d, {
        mode: e.mode,
        level: e.level,
        link: e.categoryItem.urlPath
    }, null, 8, ["mode", "level", "link"]), e.hasChildren ? (t(), g("div", fs, [(t(!0), g(ne, null, oe(e.categoryItem.children, r => (t(), O(b, {
        key: r.id,
        "category-item": r,
        "menu-element": e.menuElement,
        level: e.level + 1
    }, null, 8, ["category-item", "menu-element", "level"]))), 128))])) : m("", !0)])) : m("", !0)], 2)
}
const ws = ee(bs, [
        ["render", ys]
    ]),
    Ss = U({
        components: {
            SidebarSubmenuViewAll: to,
            SidebarSubmenuItem: ws
        },
        props: {
            menuElement: {
                type: Object,
                required: !0
            },
            mode: {
                type: String,
                default: R.STORE,
                enum: R
            },
            link: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const n = P(0),
                a = x(),
                {
                    menuElement: l
                } = ae(e),
                {
                    isPreviewMode: c,
                    isTemplatePreviewMode: u
                } = X(a),
                s = o(() => ze()),
                d = o(() => l.value.menuCategoriesList || []),
                b = o(() => {
                    var r;
                    return ((r = d.value) == null ? void 0 : r.length) > 0
                });
            return {
                level: n,
                isPreviewMode: c,
                isTemplatePreviewMode: u,
                categoriesList: d,
                hasCategories: b,
                storeUrl: s
            }
        }
    }),
    Ls = {
        class: "ins-header__submenu"
    },
    Ms = {
        key: 0
    };

function Ts(e, n, a, l, c, u) {
    const s = M("SidebarSubmenuViewAll"),
        d = M("SidebarSubmenuItem");
    return t(), g("div", Ls, [F(s, {
        level: e.level,
        mode: e.mode,
        link: e.link
    }, null, 8, ["level", "mode", "link"]), e.hasCategories ? (t(), g("div", Ms, [(t(!0), g(ne, null, oe(e.categoriesList, b => (t(), O(d, {
        key: b.id,
        "category-item": b,
        "menu-element": e.menuElement,
        level: e.level + 1
    }, null, 8, ["category-item", "menu-element", "level"]))), 128))])) : m("", !0)])
}
const Cs = ee(Ss, [
        ["render", Ts]
    ]),
    Is = U({
        components: {
            ChevronDownIcon: wn.ChevronDownIcon,
            SidebarSubmenu: Cs,
            SidebarBrandSubmenu: hs
        },
        props: {
            menuElement: {
                required: !0,
                type: Object
            },
            hasAccount: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const n = me(),
                a = x(),
                {
                    isTemplatePreviewMode: l,
                    isPreviewMode: c
                } = X(a),
                u = be(n.$state),
                {
                    menuElement: s
                } = ae(e),
                d = o(() => te(l.value)),
                b = o(() => ze()),
                r = o(() => yn()),
                v = (_, f) => {
                    _.preventDefault(), _.stopPropagation(), s.value.toggleActiveMenuItem(_, f)
                },
                k = (_, f) => {
                    (_.key === "Enter" || _.key === " ") && (_.preventDefault(), _.stopPropagation(), s.value.toggleActiveMenuItem(_, f))
                },
                p = o(() => {
                    var _;
                    return ((_ = s.value.activeMenuItem) == null ? void 0 : _.type) === Qn.GO_TO_CATEGORY ? R.CATEGORIES : R.STORE
                });
            return Jn(() => {
                s.value.setActiveDropdownMenu(void 0)
            }), {
                i18n: u,
                linkTarget: d,
                storeUrl: b,
                accountUrl: r,
                isPreviewMode: c,
                isTemplatePreviewMode: l,
                getHrefValue: le,
                getTargetValue: _e,
                handleMenuItemClick: v,
                handleMenuItemKeydown: k,
                menuDropdownMode: p
            }
        }
    }),
    Es = {
        key: 0,
        ref: "menuElementContainerRef",
        class: "ins-header__sidebar-menu"
    },
    Os = {
        ref: "menuElementWrapRef",
        class: "ins-header__sidebar-menu-wrap"
    },
    $s = {
        class: "ins-header__sidebar-menu-inner"
    },
    As = {
        key: 0
    },
    Ps = ["href", "target", "aria-label", "onClick", "onKeydown"],
    Ds = {
        key: 0
    },
    Bs = ["href", "target", "onClick", "onKeydown"],
    Hs = {
        class: "ins-header__sidebar-menu-link"
    },
    Fs = ["href", "target"];

function Vs(e, n, a, l, c, u) {
    const s = M("ChevronDownIcon"),
        d = M("SidebarSubmenu"),
        b = M("SidebarBrandSubmenu");
    return e.menuElement.hasElement || e.hasAccount ? (t(), g("div", Es, [h("div", Os, [h("nav", $s, [(t(!0), g(ne, null, oe(e.menuElement.itemList, r => (t(), g("div", {
        key: r.id,
        class: B(["ins-header__sidebar-menu-link", {
            "ins-header__sidebar-menu-link--open": e.menuElement.isActiveMenuItem(r)
        }])
    }, [r.hasSubmenu ? (t(), g("div", As, [h("a", {
        class: "ins-header__sidebar-menu-link-title",
        role: "button",
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, r.linkHref),
        target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
        "aria-label": r.title,
        onClick: v => e.handleMenuItemClick(v, r),
        onKeydown: v => e.handleMenuItemKeydown(v, r)
    }, [he(T(r.title) + " ", 1), r.hasSubmenu ? (t(), O(s, {
        key: 0,
        class: B(["ins-header__sidebar-menu-link-icon", {
            "ins-header__sidebar-menu-link-icon--open": e.menuElement.isActiveMenuItem(r)
        }])
    }, null, 8, ["class"])) : m("", !0)], 40, Ps), e.menuElement.isActiveMenuItem(r) ? (t(), g("div", Ds, [e.menuElement.menuCategoriesList !== void 0 ? (t(), O(d, {
        key: 0,
        "menu-item": r,
        link: r.linkHref,
        "menu-element": e.menuElement,
        mode: e.menuDropdownMode
    }, null, 8, ["menu-item", "link", "menu-element", "mode"])) : m("", !0), e.menuElement.shouldShowBrandMenu && e.menuElement.menuBrandList ? (t(), O(b, {
        key: 1,
        "menu-element": e.menuElement
    }, null, 8, ["menu-element"])) : m("", !0)])) : m("", !0)])) : (t(), g("a", {
        key: 1,
        class: "ins-header__sidebar-menu-link-title",
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, r.linkHref),
        target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
        onClick: r.performCustomAction,
        onKeydown: pe(r.performCustomAction, ["enter"])
    }, T(r.title), 41, Bs))], 2))), 128)), h("div", Hs, [e.hasAccount ? (t(), g("a", {
        key: 0,
        class: "ins-header__sidebar-menu-link-title",
        href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.accountUrl),
        target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget)
    }, T(e.i18n("Header.Account")), 9, Fs)) : m("", !0)])])], 512)], 512)) : m("", !0)
}
const Gs = ee(Is, [
    ["render", Vs]
]);

function Ns(e, n) {
    var s, d, b, r, v, k, p, _, f, C;
    const a = { ...n == null ? void 0 : n.panelBackground,
            ...e.panelBackground,
            transparent: { ...(s = n == null ? void 0 : n.panelBackground) == null ? void 0 : s.transparent,
                ...(d = e.panelBackground) == null ? void 0 : d.transparent
            },
            semiTransparent: { ...(b = n == null ? void 0 : n.panelBackground) == null ? void 0 : b.semiTransparent,
                ...(r = e.panelBackground) == null ? void 0 : r.semiTransparent
            },
            solid: { ...(v = n == null ? void 0 : n.panelBackground) == null ? void 0 : v.solid,
                ...(k = e.panelBackground) == null ? void 0 : k.solid
            }
        },
        l = { ...n == null ? void 0 : n.logo,
            ...e.logo,
            frame: { ...(p = n == null ? void 0 : n.logo) == null ? void 0 : p.frame,
                ...(_ = e.logo) == null ? void 0 : _.frame
            }
        },
        c = { ...n == null ? void 0 : n.menuAndIcons,
            ...e.menuAndIcons,
            visibilityTogglers: { ...(f = n == null ? void 0 : n.menuAndIcons) == null ? void 0 : f.visibilityTogglers,
                ...(C = e.menuAndIcons) == null ? void 0 : C.visibilityTogglers
            }
        },
        u = { ...n == null ? void 0 : n.actionLink,
            ...e.actionLink
        };
    return {
        layout: e.layout,
        panelBackground: a,
        logo: l,
        menuAndIcons: c,
        actionLink: u
    }
}

function Us(e) {
    switch (e) {
        case I.CENTER_LOGO_BURGER:
            return "center-logo-burger";
        case I.CENTER_LOGO_COMPACT:
            return "center-logo-compact";
        case I.CENTER_LOGO_DETAILED:
            return "center-logo-detailed";
        case I.LEFT_LOGO_BURGER:
            return "left-logo-burger";
        case I.LEFT_LOGO_COMPACT:
            return "left-logo-compact";
        case I.LEFT_LOGO_DETAILED:
            return "left-logo-detailed";
        case I.LEFT_LOGO_SEARCH:
            return "left-logo-search";
        case I.LEFT_LOGO_TEXT:
            return "left-logo-text";
        default:
            return "left-logo-compact"
    }
}

function qs(e) {
    const n = Te();

    function a() {
        n.setSearchPanelOpenState(!e.value), window.scrollTo({
            top: 0
        })
    }
    return a
}

function Ks(e, n) {
    const a = Te();

    function l() {
        a.setBurgerMenuOpenState(!1), document.body.removeEventListener("click", l)
    }

    function c() {
        a.setBurgerMenuOpenState(!0), document.body.addEventListener("click", l)
    }

    function u(s) {
        (typeof s == "boolean" ? s : !n.value) ? c(): l(), window.scrollTo({
            top: 0
        }), (e == null ? void 0 : e.value) !== void 0 && e.value.scrollTo({
            top: 0
        })
    }
    return u
}

function js(e, n) {
    let a = [...Qo(e.panelBackground), ...an("menu-and-icons", e.menuAndIcons), ...Xn("button", e.actionLink)];
    return n === Z.TEXT && (a = [...a, ...Rn("logo", e.logo)]), a
}

function kn(e) {
    var l, c, u, s, d, b;
    const n = ((u = (c = (l = e == null ? void 0 : e.image) == null ? void 0 : l.set) == null ? void 0 : c["default-1200x1200"]) == null ? void 0 : u.width) ? ? 0,
        a = ((b = (d = (s = e == null ? void 0 : e.image) == null ? void 0 : s.set) == null ? void 0 : d["default-1200x1200"]) == null ? void 0 : b.height) ? ? 0;
    return n && a ? Math.max(70, Math.min(90, a / n * 300)) : 70
}

function zs(e, n) {
    let a = 70,
        l = 60;
    switch (e) {
        case I.CENTER_LOGO_BURGER:
            {
                (n == null ? void 0 : n.type) === Z.IMAGE && (a = kn(n) + 30, l = 80);
                break
            }
        case I.CENTER_LOGO_COMPACT:
            (n == null ? void 0 : n.type) === Z.IMAGE && (a = kn(n) + 30, l = 90);
            break;
        case I.CENTER_LOGO_DETAILED:
            (n == null ? void 0 : n.type) === Z.IMAGE && (a = kn(n) + 10, l = 90);
            break;
        case I.LEFT_LOGO_BURGER:
        case I.LEFT_LOGO_COMPACT:
        case I.LEFT_LOGO_DETAILED:
        case I.LEFT_LOGO_SEARCH:
            break;
        case I.LEFT_LOGO_TEXT:
            (n == null ? void 0 : n.type) === Z.IMAGE ? (a = 60, l = 60) : (a = 50, l = 50);
            break
    }
    return `.ins-tile {--header-height-desktop: ${a};--header-height-mobile: ${l};}`
}

function Xs() {
    const e = Te();
    e.setBurgerMenuOpenState(!1), e.setSearchPanelOpenState(!1)
}

function Rs(e) {
    switch (e) {
        case I.CENTER_LOGO_BURGER:
            return "CenterLogoBurgerMarkup";
        case I.CENTER_LOGO_COMPACT:
            return "CenterLogoCompactMarkup";
        case I.CENTER_LOGO_DETAILED:
            return "CenterLogoDetailedMarkup";
        case I.LEFT_LOGO_BURGER:
            return "LeftLogoBurgerMarkup";
        case I.LEFT_LOGO_COMPACT:
            return "LeftLogoCompactMarkup";
        case I.LEFT_LOGO_DETAILED:
            return "LeftLogoDetailedMarkup";
        case I.LEFT_LOGO_SEARCH:
            return "LeftLogoSearchMarkup";
        case I.LEFT_LOGO_TEXT:
            return "LeftLogoTextMarkup";
        default:
            return "LeftLogoCompactMarkup"
    }
}

function tn(e) {
    var n, a, l;
    return (e == null ? void 0 : e.type) === In.TRANSPARENT ? 0 : (e == null ? void 0 : e.type) === In.SEMI_TRANSPARENT ? ((l = (a = (n = e == null ? void 0 : e.semiTransparent) == null ? void 0 : n.color) == null ? void 0 : a.hsl) == null ? void 0 : l.a) ? ? 1 : 1
}

function Ys(e, n, a, l, c) {
    if (a !== l || !c || !n) return !1;
    const u = n < on.L && ["navigationMenu", "menuAndIcons", "contactInfo", "socialIconList", "actionLink"].includes(c),
        s = n >= on.L && ["navigationMenu", "menuAndIcons", "contactInfo", "socialIconList"].includes(c),
        d = n < on.SXL && ["navigationMenu", "menuAndIcons", "contactInfo", "socialIconList", "actionLink"].includes(c),
        b = n >= on.SXL && ["navigationMenu", "menuAndIcons", "contactInfo", "socialIconList"].includes(c);
    switch (e) {
        case I.CENTER_LOGO_BURGER:
            return d || b;
        case I.CENTER_LOGO_COMPACT:
        case I.CENTER_LOGO_DETAILED:
            return d;
        case I.LEFT_LOGO_BURGER:
            return u || s;
        case I.LEFT_LOGO_COMPACT:
        case I.LEFT_LOGO_DETAILED:
        case I.LEFT_LOGO_SEARCH:
        case I.LEFT_LOGO_TEXT:
            return u;
        default:
            return !1
    }
}
const Qs = U({
        components: {
            ForceHydrateComponent: $n,
            BurgerIcon: nt,
            AccountIcon: ot,
            CartIcon: tt,
            SearchIcon: eo,
            CrossIcon: at,
            FontLoader: An,
            ActionLink: Zn,
            HorizontalMenuComponent: Ra,
            VerticalMenuComponent: Gs,
            LogoComponent: Wa,
            SearchFormComponent: os,
            SocialIconsComponent: rs,
            LanguageRowMenu: no,
            LanguageDropdownMenu: Wn,
            CenterLogoBurgerMarkup: Le(() => Me(() =>
                import ("./CenterLogoBurgerMarkup.js"), __vite__mapDeps([0, 1]),
                import.meta.url)),
            CenterLogoCompactMarkup: Le(() => Me(() =>
                import ("./CenterLogoCompactMarkup.js"), __vite__mapDeps([2, 1]),
                import.meta.url)),
            CenterLogoDetailedMarkup: Le(() => Me(() =>
                import ("./CenterLogoDetailedMarkup.js"), __vite__mapDeps([3, 1]),
                import.meta.url)),
            LeftLogoBurgerMarkup: Le(() => Me(() =>
                import ("./LeftLogoBurgerMarkup.js"), __vite__mapDeps([4, 1]),
                import.meta.url)),
            LeftLogoCompactMarkup: Le(() => Me(() =>
                import ("./LeftLogoCompactMarkup.js"), __vite__mapDeps([5, 1]),
                import.meta.url)),
            LeftLogoDetailedMarkup: Le(() => Me(() =>
                import ("./LeftLogoDetailedMarkup.js"), __vite__mapDeps([6, 1]),
                import.meta.url)),
            LeftLogoSearchMarkup: Le(() => Me(() =>
                import ("./LeftLogoSearchMarkup.js"), __vite__mapDeps([7, 1]),
                import.meta.url)),
            LeftLogoTextMarkup: Le(() => Me(() =>
                import ("./LeftLogoTextMarkup.js"), __vite__mapDeps([8, 1]),
                import.meta.url))
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            siteSettings: {
                required: !0,
                type: Object
            },
            profile: {
                required: !0,
                type: Object
            },
            content: {
                required: !0,
                type: Object
            },
            externalContent: {
                required: !0,
                type: Object
            },
            design: {
                required: !0,
                type: Object
            },
            viewportSettings: {
                required: !0,
                type: Object
            }
        },
        setup(e, {
            attrs: n
        }) {
            const a = Te(),
                l = x(),
                c = zo(),
                u = me(),
                s = be(u.$state),
                {
                    visibleTranslationLanguages: d
                } = X(a),
                {
                    isPreviewMode: b,
                    isTemplatePreviewMode: r
                } = X(l),
                {
                    pageSettings: v
                } = X(c),
                {
                    tileId: k,
                    siteSettings: p,
                    profile: _,
                    content: f,
                    viewportSettings: C
                } = ae(e),
                i = o(() => {
                    const S = Xo(e.design.layout);
                    return Ns(e.design, S)
                }),
                $ = P(),
                V = o(() => _.value.storeName),
                {
                    cartItemCount: G,
                    cartNeedBounce: L,
                    subscribeOnCartChange: w
                } = Pn(_.value.siteId),
                q = o(() => `ins-tile--${Us(i.value.layout)}`),
                W = o(() => {
                    var S, D, j;
                    return [(S = i.value.logo) == null ? void 0 : S.font, (D = i.value.menuAndIcons) == null ? void 0 : D.font, (j = i.value.actionLink) == null ? void 0 : j.font]
                }),
                ue = o(() => {
                    const S = js(i.value, f.value.logo.type);
                    return Dn(`#${n.id}`, S)
                }),
                se = o(() => zs(i.value.layout, f.value.logo)),
                ce = o(() => te(r.value)),
                ie = o(() => a.isBurgerMenuOpened),
                de = Ks($, ie),
                E = o(() => Ys(i.value.layout, C.value.width, k.value, a.focusedTileId, a.focusedTileItemId));
            fn(E, S => {
                de(S)
            });
            const Y = o(() => {
                    var D;
                    const S = (D = i.value.logo) == null ? void 0 : D.visible;
                    return f.value.logo.type === Z.TEXT ? S && Ee(f.value.logo.text) : f.value.logo.type === Z.IMAGE ? S && f.value.logo.image !== void 0 : !1
                }),
                ke = o(() => i.value.logo),
                ge = o(() => {
                    var S;
                    return ((S = e.externalContent.storeData) == null ? void 0 : S.categories) ? ? []
                }),
                H = o(() => e.externalContent.categoryTree ? ? []),
                K = o(() => e.externalContent.brands ? ? []),
                Ce = o(() => f.value.menu),
                Ie = o(() => i.value.menuAndIcons),
                Ae = Fn(ge, Ce, Ie, H, K),
                Re = o(() => {
                    var j, ye, we;
                    const S = (ye = (j = i.value.menuAndIcons) == null ? void 0 : j.visibilityTogglers) == null ? void 0 : ye.phone,
                        D = Ee((we = f.value.contactInfo) == null ? void 0 : we.phone);
                    return S && D
                }),
                Ye = o(() => {
                    var j, ye, we;
                    const S = (ye = (j = i.value.menuAndIcons) == null ? void 0 : j.visibilityTogglers) == null ? void 0 : ye.email,
                        D = Ee((we = f.value.contactInfo) == null ? void 0 : we.email);
                    return S && D
                }),
                Pe = o(() => {
                    var S;
                    return (S = _.value.featureFlags) == null ? void 0 : S.isBasicEcommerceEnabled
                }),
                De = o(() => {
                    var S, D;
                    return ((D = (S = i.value.menuAndIcons) == null ? void 0 : S.visibilityTogglers) == null ? void 0 : D.search) && Pe.value
                }),
                Qe = o(() => a.isSearchPanelOpened),
                rn = qs(Qe),
                Je = o(() => {
                    var S, D;
                    return ((D = (S = i.value.menuAndIcons) == null ? void 0 : S.visibilityTogglers) == null ? void 0 : D.cart) && Pe.value
                }),
                Ze = o(() => {
                    var S, D;
                    return ((D = (S = i.value.menuAndIcons) == null ? void 0 : S.visibilityTogglers) == null ? void 0 : D.account) && Pe.value
                }),
                Be = o(() => f.value.socialProfiles),
                He = Ro(Be, P(void 0), _),
                Fe = o(() => {
                    var S, D;
                    return He.atLeastOneIcon && ((D = (S = i.value.menuAndIcons) == null ? void 0 : S.visibilityTogglers) == null ? void 0 : D.social)
                }),
                Ve = o(() => f.value.actionLink),
                Ge = o(() => i.value.actionLink),
                Oe = o(() => Kn(Ve, Ge)),
                Ne = o(() => {
                    var S, D, j;
                    return tn(i.value.panelBackground) < .75 && (((j = (D = (S = i.value.menuAndIcons) == null ? void 0 : S.color) == null ? void 0 : D.hsl) == null ? void 0 : j.l) ? ? 0) < .5
                }),
                ln = o(() => {
                    var S, D, j;
                    return tn(i.value.panelBackground) < .75 && (((j = (D = (S = i.value.menuAndIcons) == null ? void 0 : S.color) == null ? void 0 : D.hsl) == null ? void 0 : j.l) ? ? 0) >= .5
                }),
                un = o(() => tn(i.value.panelBackground) < 1),
                cn = o(() => tn(i.value.panelBackground) === 0),
                Ue = o(() => b || Y.value || Ae.hasElement || Re.value || Ye.value || Fe.value || De.value || Ze.value || Je.value || Oe.value),
                dn = o(() => e.viewportSettings.width);
            fn(dn, () => {
                Xs()
            });
            const gn = o(() => Rs(i.value.layout)),
                hn = Gn(),
                vn = o(() => Un()),
                We = o(() => qn()),
                pn = o(() => yn()),
                mn = o(() => p.value.content),
                bn = o(() => l.getLang ? ? _.value.locale),
                qe = o(() => Vn(_.value, mn.value)),
                xe = o(() => {
                    var S;
                    return ((S = qe.value) == null ? void 0 : S.length) ? ? 0
                }),
                en = o(() => v.value.pageType === Yo.CUSTOM),
                nn = o(() => G.value === 0 && i.value.layout !== I.LEFT_LOGO_TEXT);
            return Xe(() => {
                w()
            }), {
                i18n: s,
                headerRef: $,
                layoutClass: q,
                fonts: W,
                styleSelector: ue,
                customHeightStyleSelector: se,
                isPreviewMode: b,
                isTemplatePreviewMode: r,
                linkTarget: ce,
                isBurgerMenuOpened: ie,
                toggleMenu: de,
                hasLogo: Y,
                storeCategories: ge,
                menuElement: Ae,
                hasPhone: Re,
                hasEmail: Ye,
                hasSearch: De,
                isSearchPanelOpened: Qe,
                toggleSearchPanel: rn,
                hasCart: Je,
                hasAccount: Ze,
                hasActionLink: Oe,
                socialProfilesElement: He,
                hasSocialProfiles: Fe,
                actionLinkContent: Ve,
                actionLinkDesign: Ge,
                hasOpacityBackground: un,
                hasTransparentBackground: cn,
                isLightSidebar: Ne,
                isDarkSidebar: ln,
                cartItemCount: G,
                cartNeedBounce: L,
                storeName: V,
                tileNeedRender: Ue,
                logoDesign: ke,
                menuDesign: Ie,
                layoutMarkupName: gn,
                isBurgerMenuOpenedByEditor: E,
                onCartClick: hn,
                cartUrl: vn,
                searchUrl: We,
                accountUrl: pn,
                languagesCount: xe,
                languages: qe,
                selectedLanguage: bn,
                visibleTranslationLanguages: d,
                getHrefValue: le,
                getTargetValue: _e,
                isCustomPage: en,
                isCartCounterHidden: nn,
                TileType: zn
            }
        }
    }),
    Js = {
        class: "ins-tile__wrap ins-tile__animated"
    },
    Zs = {
        ref: "headerRef",
        class: "ins-header"
    },
    Ws = ["href", "aria-label", "title"],
    xs = ["href", "aria-label", "title"],
    ei = ["href", "target", "aria-label"],
    ni = ["href", "target", "aria-label"],
    oi = ["data-count", "aria-label", "title", "target", "href"],
    ti = ["data-count", "aria-label", "title", "target", "href"],
    ai = {
        class: "ins-header__icon-text"
    },
    si = ["aria-label"],
    ii = {
        key: 1
    },
    ri = {
        key: 3
    },
    li = ["href", "aria-label"],
    ui = ["href", "aria-label"],
    ci = h("br", null, null, -1),
    di = ["href", "aria-label"],
    gi = ["href", "aria-label"],
    hi = h("br", null, null, -1),
    vi = {
        key: 0,
        class: "ins-header__sidebar ins-header__sidebar--search"
    };

function pi(e, n, a, l, c, u) {
    const s = M("FontLoader"),
        d = M("LogoComponent"),
        b = M("HorizontalMenuComponent"),
        r = M("VerticalMenuComponent"),
        v = M("SearchIcon"),
        k = M("CrossIcon"),
        p = M("SearchFormComponent"),
        _ = M("SocialIconsComponent"),
        f = M("AccountIcon"),
        C = M("CartIcon"),
        i = M("ForceHydrateComponent"),
        $ = M("ActionLink"),
        V = M("BurgerIcon"),
        G = M("LanguageDropdownMenu"),
        L = M("LanguageRowMenu");
    return e.tileNeedRender ? (t(), g("header", {
        key: 0,
        class: B(["ins-tile", "ins-tile--header", e.layoutClass, {
            "ins-tile--open-menu": e.isBurgerMenuOpened
        }, {
            "ins-tile--open-search": e.isSearchPanelOpened
        }, {
            "ins-tile--has-opacity": e.hasOpacityBackground && !e.isCustomPage
        }, {
            "ins-tile--full-opacity": e.hasTransparentBackground && !e.isCustomPage
        }, {
            "ins-tile--dark-sidebar": e.isDarkSidebar
        }, {
            "ins-tile--light-sidebar": e.isLightSidebar
        }, {
            "ins-tile--adapted-background": e.isCustomPage
        }]),
        role: "banner"
    }, [F(s, {
        fonts: e.fonts
    }, null, 8, ["fonts"]), (t(), O(je("style"), null, {
        default: A(() => [he(T(e.styleSelector) + " " + T(e.customHeightStyleSelector), 1)]),
        _: 1
    })), h("div", Js, [h("div", Zs, [(t(), O(je(e.layoutMarkupName), {
        key: e.layoutMarkupName,
        "is-burger-menu-opened": e.isBurgerMenuOpened
    }, {
        logo: A(() => [F(d, {
            "tile-id": e.tileId,
            content: e.content.logo,
            design: e.logoDesign
        }, null, 8, ["tile-id", "content", "design"])]),
        menu: A(() => [F(b, {
            "menu-element": e.menuElement,
            "viewport-settings": e.viewportSettings,
            "has-opacity-background": e.hasOpacityBackground
        }, null, 8, ["menu-element", "viewport-settings", "has-opacity-background"])]),
        "sidebar-menu": A(() => [F(r, {
            "menu-element": e.menuElement,
            "has-account": e.hasAccount
        }, null, 8, ["menu-element", "has-account"])]),
        searchIcon: A(() => [e.hasSearch ? (t(), g("a", {
            key: 0,
            class: "ins-header__icon ins-header__icon--search",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.searchUrl),
            role: "button",
            "aria-label": e.i18n("ADA.Search"),
            title: e.i18n("ADA.Search"),
            onKeydown: n[0] || (n[0] = pe(z((...w) => e.toggleSearchPanel && e.toggleSearchPanel(...w), ["prevent"]), ["enter", "space"])),
            onClick: n[1] || (n[1] = z((...w) => e.toggleSearchPanel && e.toggleSearchPanel(...w), ["prevent"])),
            onMousedown: n[2] || (n[2] = z(() => {}, ["prevent"]))
        }, [e.isSearchPanelOpened ? m("", !0) : (t(), O(v, {
            key: 0
        })), e.isSearchPanelOpened ? (t(), O(k, {
            key: 1
        })) : m("", !0)], 40, Ws)) : m("", !0)]),
        searchFormDesktop: A(() => [e.hasSearch ? (t(), O(p, {
            key: 0,
            class: "ins-header__search--desktop"
        })) : m("", !0)]),
        searchFormMobile: A(() => [e.hasSearch ? (t(), O(p, {
            key: 0,
            class: "ins-header__search--mobile"
        })) : m("", !0)]),
        searchText: A(() => [e.hasSearch ? (t(), g("a", {
            key: 0,
            class: "ins-header__icon ins-header__text--search",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.searchUrl),
            role: "button",
            "aria-label": e.i18n("ADA.Search"),
            title: e.i18n("ADA.Search"),
            onKeydown: n[3] || (n[3] = pe((...w) => e.toggleSearchPanel && e.toggleSearchPanel(...w), ["enter"])),
            onClick: n[4] || (n[4] = z((...w) => e.toggleSearchPanel && e.toggleSearchPanel(...w), ["prevent"])),
            onMousedown: n[5] || (n[5] = z(() => {}, ["prevent"]))
        }, T(e.i18n("Header.Search")), 41, xs)) : m("", !0)]),
        socialIconsDesktop: A(() => [e.hasSocialProfiles ? (t(), O(_, {
            key: 0,
            "social-profile-list": e.socialProfilesElement.iconList,
            "is-preview-mode": e.isPreviewMode,
            "is-template-preview-mode": e.isTemplatePreviewMode,
            class: "ins-header__social--desktop"
        }, null, 8, ["social-profile-list", "is-preview-mode", "is-template-preview-mode"])) : m("", !0)]),
        socialIconsMobile: A(() => [e.hasSocialProfiles ? (t(), O(_, {
            key: 0,
            "social-profile-list": e.socialProfilesElement.iconList,
            "is-preview-mode": e.isPreviewMode,
            "is-template-preview-mode": e.isTemplatePreviewMode,
            class: "ins-header__social--mobile"
        }, null, 8, ["social-profile-list", "is-preview-mode", "is-template-preview-mode"])) : m("", !0)]),
        accountIcon: A(() => [e.hasAccount ? (t(), g("a", {
            key: 0,
            class: "ins-header__icon ins-header__icon--account",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.accountUrl),
            target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
            role: "button",
            "aria-label": e.i18n("ADA.Account")
        }, [F(f)], 8, ei)) : m("", !0)]),
        accountText: A(() => [e.hasAccount ? (t(), g("a", {
            key: 0,
            class: "ins-header__icon ins-header__icon--account",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.accountUrl),
            target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
            role: "button",
            "aria-label": e.i18n("ADA.Account")
        }, T(e.i18n("Header.Account")), 9, ni)) : m("", !0)]),
        cartIcon: A(() => [F(i, null, {
            default: A(() => [e.hasCart ? (t(), g("a", {
                key: 0,
                role: "button",
                class: B(["ins-header__icon ins-header__icon--cart", {
                    "ins-header__icon--cart-empty": e.isCartCounterHidden
                }, {
                    "ins-header__icon--cart-full": e.cartItemCount > 99
                }, {
                    "ins-header__icon--bounce": e.cartNeedBounce && e.cartItemCount !== 0
                }]),
                "data-count": e.cartItemCount,
                "aria-label": e.i18n("ADA.Cart"),
                title: e.i18n("ADA.Cart"),
                target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
                href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.cartUrl),
                onClick: n[6] || (n[6] = z((...w) => e.onCartClick && e.onCartClick(...w), ["prevent"]))
            }, [F(C)], 10, oi)) : m("", !0)]),
            _: 1
        })]),
        cartText: A(() => [F(i, null, {
            default: A(() => [e.hasCart ? (t(), g("a", {
                key: 0,
                role: "link",
                class: B(["ins-header__icon ins-header__icon--cart", "ins-header__icon--cart-text", {
                    "ins-header__icon--cart-empty": e.isCartCounterHidden
                }, {
                    "ins-header__icon--cart-full": e.cartItemCount > 99
                }, {
                    "ins-header__icon--bounce": e.cartNeedBounce
                }]),
                "data-count": e.cartItemCount,
                "aria-label": e.i18n("ADA.Cart"),
                title: e.i18n("ADA.Cart"),
                target: e.getTargetValue(e.isPreviewMode, e.isTemplatePreviewMode, e.linkTarget),
                href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, e.cartUrl),
                onClick: n[7] || (n[7] = z((...w) => e.onCartClick && e.onCartClick(...w), ["prevent"]))
            }, [h("div", ai, T(e.i18n("Header.Cart")), 1)], 10, ti)) : m("", !0)]),
            _: 1
        })]),
        ctaDesktop: A(() => [F($, {
            content: e.actionLinkContent,
            design: e.actionLinkDesign,
            "preview-mode": e.isPreviewMode,
            class: "ins-header__cta ins-header__cta--desktop"
        }, null, 8, ["content", "design", "preview-mode"])]),
        ctaMobile: A(() => [F($, {
            content: e.actionLinkContent,
            design: e.actionLinkDesign,
            "preview-mode": e.isPreviewMode,
            class: "ins-header__cta ins-header__cta--mobile"
        }, null, 8, ["content", "design", "preview-mode"])]),
        burgerIcon: A(() => [h("a", {
            class: "ins-header__icon ins-header__icon--burger",
            href: "#menu",
            role: "button",
            "aria-label": e.i18n("ADA.Menu.Mobile"),
            onKeydown: n[8] || (n[8] = pe(z(w => e.toggleMenu(!e.isBurgerMenuOpened), ["prevent"]), ["enter", "space"])),
            onClick: n[9] || (n[9] = z(w => e.toggleMenu(!e.isBurgerMenuOpened), ["prevent", "stop"])),
            onMousedown: n[10] || (n[10] = z(() => {}, ["prevent"]))
        }, [e.isBurgerMenuOpened ? m("", !0) : (t(), O(V, {
            key: 0
        })), e.isBurgerMenuOpened ? m("", !0) : (t(), g("span", ii, T(e.i18n("Header.Menu")), 1)), e.isBurgerMenuOpened ? (t(), O(k, {
            key: 2
        })) : m("", !0), e.isBurgerMenuOpened ? (t(), g("span", ri, T(e.i18n("Header.Menu.Close.action")), 1)) : m("", !0)], 40, si)]),
        phoneDesktop: A(() => [e.hasPhone ? (t(), g("a", {
            key: 0,
            class: "ins-header__phone ins-header__phone--desktop",
            role: "button",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, `tel:${e.content.contactInfo.phone}`),
            "aria-label": e.i18n("ADA.Phone", !1, {
                "{phone}": e.content.contactInfo.phone
            })
        }, T(e.content.contactInfo.phone), 9, li)) : m("", !0)]),
        phoneMobile: A(() => [e.hasPhone ? (t(), g("a", {
            key: 0,
            class: "ins-header__phone ins-header__phone--mobile",
            role: "button",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, `tel:${e.content.contactInfo.phone}`),
            "aria-label": e.i18n("ADA.Phone", !1, {
                "{phone}": e.content.contactInfo.phone
            })
        }, [he(T(e.i18n("Header.Phone")) + ":", 1), ci, he(" " + T(e.content.contactInfo.phone), 1)], 8, ui)) : m("", !0)]),
        emailDesktop: A(() => [e.hasEmail ? (t(), g("a", {
            key: 0,
            class: "ins-header__email ins-header__email--desktop",
            role: "button",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, `mailto:${e.content.contactInfo.email}`),
            "aria-label": e.i18n("ADA.Mail", !1, {
                "{mail}": e.content.contactInfo.email
            })
        }, T(e.content.contactInfo.email), 9, di)) : m("", !0)]),
        emailMobile: A(() => [e.hasEmail ? (t(), g("a", {
            key: 0,
            class: "ins-header__email ins-header__email--mobile",
            role: "button",
            href: e.getHrefValue(e.isPreviewMode, e.isTemplatePreviewMode, `mailto:${e.content.contactInfo.email}`),
            "aria-label": e.i18n("ADA.Mail", !1, {
                "{mail}": e.content.contactInfo.email
            })
        }, [he(T(e.i18n("Header.Email")) + ":", 1), hi, he(" " + T(e.content.contactInfo.email), 1)], 8, gi)) : m("", !0)]),
        searchPanel: A(() => [e.isSearchPanelOpened ? (t(), g("div", vi, [F(p, {
            "force-focus": !0
        })])) : m("", !0)]),
        languageSelectDesktop: A(() => [e.languagesCount > 3 ? (t(), O(G, {
            key: 0,
            class: "ins-header__language--desktop",
            "selected-language": e.selectedLanguage,
            languages: e.languages,
            "visible-languages": e.visibleTranslationLanguages,
            "tile-type": e.TileType.HEADER
        }, null, 8, ["selected-language", "languages", "visible-languages", "tile-type"])) : m("", !0), e.languagesCount > 1 && e.languagesCount <= 3 ? (t(), O(L, {
            key: 1,
            class: "ins-header__language--desktop",
            "selected-language": e.selectedLanguage,
            languages: e.languages,
            "visible-languages": e.visibleTranslationLanguages
        }, null, 8, ["selected-language", "languages", "visible-languages"])) : m("", !0)]),
        languageSelectMobile: A(() => [e.languagesCount > 1 ? (t(), O(L, {
            key: 0,
            class: "ins-header__language--mobile",
            "selected-language": e.selectedLanguage,
            languages: e.languages,
            "visible-languages": e.visibleTranslationLanguages
        }, null, 8, ["selected-language", "languages", "visible-languages"])) : m("", !0)]),
        _: 1
    }, 8, ["is-burger-menu-opened"]))], 512)]), fe(e.$slots, "hover-label"), fe(e.$slots, "hovered-border"), fe(e.$slots, "selected-border")], 2)) : m("", !0)
}
const mi = ee(Qs, [
        ["render", pi]
    ]),
    bi = U({
        components: {
            HeaderTile2020: ua,
            HeaderTile2021: mi
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            siteSettings: {
                required: !0,
                type: Object
            },
            profile: {
                required: !0,
                type: Object
            },
            content: {
                required: !0,
                type: Object
            },
            externalContent: {
                required: !0,
                type: Object
            },
            design: {
                required: !0,
                type: Object
            },
            viewportSettings: {
                required: !0,
                type: Object
            }
        },
        emits: ["tile-loaded", "tile-unloaded"],
        setup(e, {
            emit: n
        }) {
            const a = o(() => e.design.layout === I.LEFT ? "HeaderTile2020" : "HeaderTile2021");
            return Xe(() => {
                n("tile-loaded")
            }), Jn(() => {
                n("tile-unloaded")
            }), {
                component: a
            }
        }
    }),
    _i = bi;

function ki(e, n, a, l, c, u) {
    return t(), O(je(e.component), {
        id: `tile-${e.tileId}`,
        "tile-id": e.tileId,
        profile: e.profile,
        "site-settings": e.siteSettings,
        content: e.content,
        "external-content": e.externalContent,
        design: e.design,
        "viewport-settings": e.viewportSettings
    }, {
        "hover-label": A(() => [fe(e.$slots, "hover-label")]),
        "hovered-border": A(() => [fe(e.$slots, "hovered-border")]),
        "selected-border": A(() => [fe(e.$slots, "selected-border")]),
        _: 3
    }, 8, ["id", "tile-id", "profile", "site-settings", "content", "external-content", "design", "viewport-settings"])
}
const Ti = ee(_i, [
    ["render", ki]
]);
export {
    Ti as
    default
};