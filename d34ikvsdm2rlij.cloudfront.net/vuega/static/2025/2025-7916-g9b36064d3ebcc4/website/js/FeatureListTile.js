import {
    bU as w,
    u as ve,
    b as Te,
    r as U,
    w as V,
    F as Ee,
    g as fe,
    c as $e,
    bV as ke,
    be,
    bg as Se,
    bW as Ie,
    bk as we,
    t as Ce,
    bB as Ae,
    bC as G,
    bS as J,
    bX as Fe,
    bY as h,
    o as Me,
    p as W,
    y as Z,
    I as A,
    E as x,
    H as ee
} from "./website.js";
import {
    _ as M
} from "./TileTitle.vue_vue_type_script_setup_true_lang.js";
import {
    t as qe,
    u as Be,
    v as Oe
} from "./website-icons.js";
import {
    p as b,
    v as S,
    M as g,
    z as t,
    x as n,
    A as L,
    D as l,
    E as v,
    F as $,
    y as k,
    H as y,
    a7 as ie,
    a8 as ne,
    t as q,
    r as F,
    c as r,
    ai as De,
    w as se,
    e as He,
    a0 as le,
    L as I,
    o as We,
    Q as Ue,
    R as Re,
    S as je,
    C as te,
    G as K
} from "./vendor.js";
import {
    _ as R
} from "./PictureContainer.vue_vue_type_script_setup_true_lang.js";
const Ne = b({
        components: {
            TileTitle: M,
            ChevronDownIcon: qe,
            Library365Icon: w
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            featureListElement: {
                required: !0,
                type: Object
            }
        }
    }),
    Pe = {
        class: "ins-tile__wrap"
    },
    Ge = ["id"],
    Ke = ["aria-expanded", "aria-controls", "onClick", "onKeydown"],
    Ve = {
        class: "ins-tile__item-title"
    },
    Qe = {
        key: 0,
        class: "ins-tile__bullet"
    },
    ze = {
        class: "ins-tile__feature-icon"
    },
    Xe = ["innerHTML"],
    Ye = {
        class: "ins-tile__accordion-button"
    },
    Je = ["id"],
    Ze = ["innerHTML"];

function xe(e, a, p, c, d, _) {
    const u = g("TileTitle"),
        o = g("Library365Icon"),
        s = g("ChevronDownIcon");
    return t(), n("div", Pe, [e.titleElement.hasElement ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), v("div", {
        class: y(["ins-tile__body", {
            "ins-tile__body--has-any-icon": e.featureListElement.hasAnyFeatureIcon
        }])
    }, [(t(!0), n($, null, k(e.featureListElement.itemList, i => (t(), n("div", {
        id: `${e.tileId}-${i.id}`,
        key: i.id,
        class: y(["ins-tile__item", e.featureListElement.isShowText(i.id) || i.isItemEditing ? "ins-tile__item--expand" : "ins-tile__item--collapse", {
            "ins-tile__item--with-icon": i.hasIcon
        }, {
            "ins-tile__item--with-description": i.hasDescription
        }, {
            "ins-tile__item--with-title": i.hasTitle
        }, {
            "ins-tile__item--editing": i.isItemEditing
        }, {
            "ins-tile__item--expand": !i.hasTitle && !i.hasIcon
        }])
    }, [i.hasTitle || i.hasIcon ? (t(), n("div", {
        key: 0,
        tabindex: "0",
        role: "button",
        "aria-expanded": e.featureListElement.isShowText(i.id) || i.isItemEditing,
        "aria-controls": i.id,
        class: "ins-tile__item-header",
        onClick: T => e.featureListElement.toggleShowText(i.id),
        onKeydown: ie(ne(T => e.featureListElement.toggleShowText(i.id), ["prevent"]), ["enter", "space"])
    }, [v("div", Ve, [e.featureListElement.hasAnyFeatureIcon ? (t(), n("div", Qe, [v("div", ze, [i.hasIcon ? (t(), L(o, {
        key: 0,
        "icon-id": i.icon
    }, null, 8, ["icon-id"])) : l("", !0)])])) : l("", !0), i.hasTitle ? (t(), n("div", {
        key: 1,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: i.title
    }, null, 8, Xe)) : l("", !0)]), v("div", Ye, [i.hasDescription ? (t(), L(s, {
        key: 0,
        role: "presentation"
    })) : l("", !0)])], 40, Ke)) : l("", !0), v("div", {
        id: i.id,
        class: "ins-tile__item-body"
    }, [v("div", {
        class: y({
            "ins-tile__feature-description-margin": e.featureListElement.hasAnyFeatureIcon
        })
    }, null, 2), i.hasDescription ? (t(), n("div", {
        key: 0,
        class: "ins-tile__feature-description",
        innerHTML: i.fullDescription
    }, null, 8, Ze)) : l("", !0)], 8, Je)], 10, Ge))), 128))], 2)])
}
const et = S(Ne, [
        ["render", xe]
    ]),
    tt = b({
        components: {
            TileTitle: M,
            Library365Icon: w,
            PictureContainer: R,
            CircleSolidIcon: Be,
            CircleOutlineIcon: Oe
        },
        props: {
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            featureListElement: {
                required: !0,
                type: Object
            },
            imageBreakpointSet: {
                required: !0,
                type: Array
            },
            tileType: {
                required: !1,
                default: void 0,
                type: String
            }
        },
        setup(e) {
            const a = ve(),
                {
                    featureListElement: p
                } = q(e),
                c = Te(a.$state),
                d = F(0),
                _ = r(() => p.value.itemList),
                u = r(() => ({
                    left: `${-100*d.value}%`
                })),
                o = i => {
                    d.value = i
                },
                s = De(o, 200);
            return se(_, (i, T) => {
                i.length < T.length && o(0)
            }), He(() => {
                const i = _.value.findIndex(T => T.isItemEditing);
                i !== -1 && o(i)
            }), {
                i18n: c,
                currentItem: d,
                changeItemThrottled: s,
                carouselStyle: u
            }
        }
    }),
    it = {
        class: "ins-tile__wrap"
    },
    nt = {
        class: "ins-tile__body"
    },
    st = ["aria-label", "onClick", "onKeydown"],
    lt = {
        key: 1
    },
    ot = {
        key: 0,
        class: "ins-tile__image"
    },
    at = {
        key: 1,
        class: "ins-tile__text-block"
    },
    rt = ["innerHTML"],
    ut = ["innerHTML"];

function ct(e, a, p, c, d, _) {
    const u = g("TileTitle"),
        o = g("Library365Icon"),
        s = g("CircleSolidIcon"),
        i = g("CircleOutlineIcon"),
        T = g("PictureContainer");
    return t(), n("div", it, [v("div", nt, [e.titleElement.hasElement ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), e.featureListElement.hasAnyFeatureIcon || e.featureListElement.itemList.length > 1 ? (t(), n("div", {
        key: 1,
        class: y(["ins-tile__controls", {
            "ins-tile__controls--short": !(e.featureListElement.hasAnyFeatureDescription || e.featureListElement.hasAnyFeatureImage)
        }])
    }, [(t(!0), n($, null, k(e.featureListElement.itemList, (m, E) => (t(), n("div", {
        key: m.id,
        tabindex: "0",
        role: "button",
        "aria-label": e.i18n("CommonLabel.NextTab.Icon.ADA.context", !1, {
            "{count}": E + 1,
            "{countAll}": e.featureListElement.itemList.length
        }),
        class: y(["ins-tile__feature-icon", {
            "ins-tile__feature-icon--active": E === e.currentItem
        }, {
            "ins-tile__feature-icon--has-icon": m.hasIcon
        }, {
            "ins-tile__feature-icon--editing": m.isItemEditing
        }]),
        onClick: C => e.changeItemThrottled(E),
        onKeydown: ie(ne(C => e.changeItemThrottled(E), ["prevent"]), ["enter", "space"])
    }, [m.hasIcon ? (t(), L(o, {
        key: 0,
        "icon-id": m.icon
    }, null, 8, ["icon-id"])) : (t(), n("div", lt, [E === e.currentItem ? (t(), L(s, {
        key: 0
    })) : (t(), L(i, {
        key: 1
    }))]))], 42, st))), 128))], 2)) : l("", !0), e.featureListElement.hasElement ? (t(), n("div", {
        key: 2,
        class: "ins-tile__carousel",
        style: le(e.carouselStyle)
    }, [(t(!0), n($, null, k(e.featureListElement.itemList, (m, E) => (t(), n("div", {
        key: m.id,
        class: y(["ins-tile__item", {
            "ins-tile__item--active": E === e.currentItem
        }, {
            "ins-tile__item--editing": m.isItemEditing
        }, {
            "ins-tile__item--has-image": m.hasImage || m.isUploadingImage
        }, {
            "ins-tile__item--has-title": m.hasTitle
        }, {
            "ins-tile__item--has-description": m.hasDescription
        }])
    }, [m.hasImage || m.isUploadingImage ? (t(), n("div", ot, [I(T, {
        "image-set": m.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "has-thumbnail": !1,
        "allow-contain-layout": !0,
        class: y(["ins-tile__image-inner", {
            "ins-tile__image-inner--loading": m.isUploadingImage
        }])
    }, null, 8, ["image-set", "image-breakpoint-set", "class"])])) : l("", !0), m.hasTitle || m.hasDescription ? (t(), n("div", at, [m.hasTitle ? (t(), n("div", {
        key: 0,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: m.title
    }, null, 8, rt)) : l("", !0), m.hasDescription ? (t(), n("div", {
        key: 1,
        class: "ins-tile__feature-description",
        innerHTML: m.fullDescription
    }, null, 8, ut)) : l("", !0)])) : l("", !0)], 2))), 128))], 4)) : l("", !0)])])
}
const dt = S(tt, [
        ["render", ct]
    ]),
    mt = b({
        components: {
            PictureContainer: R,
            TileTitle: M,
            Library365Icon: w
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            imageElement: {
                required: !0,
                type: Object
            },
            imageBreakpointSet: {
                required: !0,
                type: Array
            },
            featureListElement: {
                required: !0,
                type: Object
            },
            tileType: {
                required: !1,
                default: void 0,
                type: String
            }
        },
        setup(e) {
            const {
                featureListElement: a,
                imageElement: p
            } = q(e), c = r(() => U(a.value.tileId, "image")), d = r(() => c.value !== void 0), _ = r(() => V(c.value, p.value.image)), u = r(() => {
                const o = !(p.value.hasElement || d.value),
                    s = a.value.itemList.length < 2;
                return o && s
            });
            return {
                isUploadingImage: d,
                isShowTitleInBody: u,
                imageSet: _
            }
        }
    }),
    pt = {
        class: "ins-tile__wrap"
    },
    _t = {
        key: 1,
        class: "ins-tile__image"
    },
    ht = ["id"],
    yt = {
        key: 0,
        class: "ins-tile__feature-icon"
    },
    gt = ["innerHTML"],
    Lt = ["innerHTML"];

function vt(e, a, p, c, d, _) {
    const u = g("TileTitle"),
        o = g("PictureContainer"),
        s = g("Library365Icon");
    return t(), n("div", pt, [e.titleElement.hasElement && !e.isShowTitleInBody ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), e.imageElement.hasElement || e.isUploadingImage ? (t(), n("div", _t, [I(o, {
        "image-set": e.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "has-thumbnail": !1,
        "allow-contain-layout": !0,
        class: y(["ins-tile__image-inner", {
            "ins-tile__image-inner--loading": e.isUploadingImage
        }])
    }, null, 8, ["image-set", "image-breakpoint-set", "class"])])) : l("", !0), v("div", {
        class: y(["ins-tile__body", {
            "ins-tile__body--has-image": e.imageElement.hasElement
        }, {
            "ins-tile__body--has-description": e.featureListElement.hasAnyFeatureDescription
        }, `ins-tile__body--has-${e.featureListElement.itemList.length}-items`])
    }, [e.titleElement.hasElement && e.isShowTitleInBody ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), (t(!0), n($, null, k(e.featureListElement.itemList, i => (t(), n("div", {
        key: i.id,
        id: `${e.tileId}-${i.id}`,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": i.isItemEditing
        }, {
            "ins-tile__item--with-icon": e.featureListElement.hasAnyFeatureIcon
        }])
    }, [e.featureListElement.hasAnyFeatureIcon ? (t(), n("div", yt, [i.hasIcon ? (t(), L(s, {
        key: 0,
        "icon-id": i.icon
    }, null, 8, ["icon-id"])) : l("", !0)])) : l("", !0), i.hasTitle ? (t(), n("div", {
        key: 1,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: i.title
    }, null, 8, gt)) : l("", !0), i.hasDescription ? (t(), n("div", {
        key: 2,
        class: "ins-tile__feature-description",
        innerHTML: i.shortDescription
    }, null, 8, Lt)) : l("", !0)], 10, ht))), 128))], 2)])
}
const Tt = S(mt, [
        ["render", vt]
    ]),
    Et = b({
        components: {
            TileTitle: M,
            PictureContainer: R,
            Library365Icon: w
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            hasTransparentBackground: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            imageElement: {
                required: !0,
                type: Object
            },
            imageBreakpointSet: {
                required: !0,
                type: Array
            },
            featureListElement: {
                required: !0,
                type: Object
            },
            tileType: {
                required: !1,
                default: void 0,
                type: String
            }
        },
        setup(e) {
            const {
                featureListElement: a,
                imageElement: p
            } = q(e), c = r(() => U(a.value.tileId, "image")), d = r(() => c.value !== void 0), _ = r(() => V(c.value, p.value.image)), u = r(() => {
                const o = !(p.value.hasElement || d.value),
                    s = a.value.itemList.length < 2;
                return o && s
            });
            return {
                isUploadingImage: d,
                isShowTitleInBody: u,
                imageSet: _
            }
        }
    }),
    ft = {
        class: y(["ins-tile__wrap"])
    },
    $t = {
        class: "ins-tile__header"
    },
    kt = {
        key: 0,
        class: "ins-tile__image"
    },
    bt = ["id"],
    St = {
        key: 0,
        class: "ins-tile__feature-icon"
    },
    It = {
        class: "ins-tile__text-block"
    },
    wt = ["innerHTML"],
    Ct = ["innerHTML"];

function At(e, a, p, c, d, _) {
    const u = g("PictureContainer"),
        o = g("TileTitle"),
        s = g("Library365Icon");
    return t(), n("div", ft, [v("div", $t, [e.imageElement.hasElement || e.isUploadingImage ? (t(), n("div", kt, [I(u, {
        "image-set": e.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "has-thumbnail": !1,
        "allow-contain-layout": !0,
        class: y(["ins-tile__image-inner", {
            "ins-tile__image-inner--loading": e.isUploadingImage
        }])
    }, null, 8, ["image-set", "image-breakpoint-set", "class"])])) : l("", !0), e.titleElement.hasElement && !e.isShowTitleInBody ? (t(), L(o, {
        key: 1,
        class: y(["ins-tile__title", {
            "ins-tile__title-with-image": e.imageElement.hasElement || e.isUploadingImage
        }]),
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["class", "title", "is-first-tile-with-title"])) : l("", !0)]), v("div", {
        class: y(["ins-tile__body", `ins-tile__body--has-${e.featureListElement.itemList.length}-items`, {
            "ins-tile__body--has-description": e.featureListElement.hasAnyFeatureDescription
        }])
    }, [e.titleElement.hasElement && e.isShowTitleInBody ? (t(), L(o, {
        key: 0,
        class: y(["ins-tile__title", {
            "ins-tile__title-with-image": e.imageElement.hasElement || e.isUploadingImage
        }]),
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["class", "title", "is-first-tile-with-title"])) : l("", !0), (t(!0), n($, null, k(e.featureListElement.itemList, i => (t(), n("div", {
        key: i.id,
        id: `${e.tileId}-${i.id}`,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": i.isItemEditing
        }, {
            "ins-tile__item--with-icon": e.featureListElement.hasAnyFeatureIcon
        }])
    }, [e.featureListElement.hasAnyFeatureIcon ? (t(), n("div", St, [I(s, {
        "icon-id": i.icon
    }, null, 8, ["icon-id"])])) : l("", !0), v("div", It, [i.hasTitle ? (t(), n("div", {
        key: 0,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: i.title
    }, null, 8, wt)) : l("", !0), i.hasDescription ? (t(), n("div", {
        key: 1,
        class: "ins-tile__feature-description",
        innerHTML: i.shortDescription
    }, null, 8, Ct)) : l("", !0)])], 10, bt))), 128))], 2)])
}
const Ft = S(Et, [
        ["render", At]
    ]),
    Mt = b({
        components: {
            TileTitle: M,
            PictureContainer: R,
            Library365Icon: w
        },
        props: {
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            imageElement: {
                required: !0,
                type: Object
            },
            imageBreakpointSet: {
                required: !0,
                type: Array
            },
            featureListElement: {
                required: !0,
                type: Object
            },
            tileType: {
                required: !1,
                default: void 0,
                type: String
            }
        },
        setup(e) {
            const {
                featureListElement: a,
                imageElement: p
            } = q(e), c = r(() => a.value.itemList.length), d = r(() => U(a.value.tileId, "image")), _ = r(() => d.value !== void 0), u = r(() => V(d.value, p.value.image));
            return {
                countOfItems: c,
                isUploadingImage: _,
                imageSet: u
            }
        }
    }),
    qt = {
        class: "ins-tile__wrap"
    },
    Bt = {
        class: "ins-tile__body"
    },
    Ot = {
        key: 1,
        class: "ins-tile__image"
    },
    Dt = {
        class: "ins-tile__text-block"
    },
    Ht = ["id"],
    Wt = ["innerHTML"],
    Ut = ["innerHTML"];

function Rt(e, a, p, c, d, _) {
    const u = g("TileTitle"),
        o = g("PictureContainer"),
        s = g("Library365Icon");
    return t(), n("div", qt, [v("div", Bt, [e.titleElement.hasElement ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), e.imageElement.hasElement || e.isUploadingImage ? (t(), n("div", Ot, [I(o, {
        "image-set": e.imageSet,
        "image-breakpoint-set": e.imageBreakpointSet,
        "has-thumbnail": !1,
        "allow-contain-layout": !0,
        class: y(["ins-tile__image-inner", {
            "ins-tile__image-inner--loading": e.isUploadingImage
        }])
    }, null, 8, ["image-set", "image-breakpoint-set", "class"])])) : l("", !0), v("div", Dt, [(t(!0), n($, null, k(e.featureListElement.itemList, i => (t(), n("div", {
        id: `item-${i.id}`,
        key: i.id,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": i.isItemEditing
        }])
    }, [v("div", {
        class: y(["ins-tile__feature-icon", {
            "ins-tile__feature-icon--digit": !i.isIconVisible
        }])
    }, [e.featureListElement.hasAnyFeatureIcon ? (t(), L(s, {
        key: 0,
        "icon-id": i.icon
    }, null, 8, ["icon-id"])) : l("", !0)], 2), i.hasTitle ? (t(), n("div", {
        key: 0,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: i.title
    }, null, 8, Wt)) : l("", !0), i.hasDescription ? (t(), n("div", {
        key: 1,
        class: "ins-tile__feature-description",
        innerHTML: i.shortDescription
    }, null, 8, Ut)) : l("", !0)], 10, Ht))), 128))])])])
}
const jt = S(Mt, [
        ["render", Rt]
    ]),
    Nt = b({
        components: {
            Library365Icon: w
        },
        props: {
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            featureListElement: {
                required: !0,
                type: Object
            }
        },
        setup(e) {
            const {
                featureListElement: a
            } = q(e), p = F(), c = F(), d = F(0), _ = F(0), u = F(0), o = r(() => a.value.itemList), s = r(() => o.value.length), i = r(() => ({
                left: `${-1*u.value}px`
            }));
            let T = -1;
            const m = () => {
                    p.value !== void 0 && (u.value < p.value.scrollWidth / (_.value + 1) ? u.value += 1 : u.value = 0, T = requestAnimationFrame(m))
                },
                E = () => {
                    cancelAnimationFrame(T)
                },
                C = () => {
                    T = requestAnimationFrame(m)
                };
            return se(c, B => {
                var D;
                c.value === void 0 || B === void 0 || !((D = c.value) != null && D.scrollWidth) || (d.value = B.scrollWidth, _.value = Math.ceil(window.innerWidth / d.value) + 1)
            }), We(() => {
                c.value === void 0 || p.value === void 0 || (d.value = c.value.scrollWidth, _.value = Math.ceil(window.innerWidth / d.value) + 1, m())
            }), {
                wrapperRef: p,
                bodyRef: c,
                wrapperStyle: i,
                countOfClones: _,
                countOfItems: s,
                stopAutoScroll: E,
                resumeAutoScroll: C
            }
        }
    }),
    Pt = {
        key: 0,
        class: "ins-tile__feature-icon"
    },
    Gt = ["innerHTML"],
    Kt = {
        key: 0,
        class: "ins-tile__feature-icon"
    },
    Vt = ["innerHTML"];

function Qt(e, a, p, c, d, _) {
    const u = g("Library365Icon");
    return t(), n("div", {
        ref: "wrapperRef",
        class: "ins-tile__wrap",
        style: le(e.wrapperStyle),
        onMouseenter: a[0] || (a[0] = (...o) => e.stopAutoScroll && e.stopAutoScroll(...o)),
        onMouseleave: a[1] || (a[1] = (...o) => e.resumeAutoScroll && e.resumeAutoScroll(...o)),
        onFocus: a[2] || (a[2] = (...o) => e.stopAutoScroll && e.stopAutoScroll(...o)),
        onBlur: a[3] || (a[3] = (...o) => e.resumeAutoScroll && e.resumeAutoScroll(...o))
    }, [e.featureListElement.hasElement ? (t(), n("div", {
        key: 0,
        ref: "bodyRef",
        class: y(["ins-tile__body", {
            "ins-tile__body--has-icon": e.featureListElement.hasAnyFeatureIcon
        }])
    }, [(t(!0), n($, null, k(e.featureListElement.itemList, o => (t(), n("div", {
        key: o.id,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": o.isItemEditing
        }])
    }, [o.hasIcon ? (t(), n("span", Pt, [I(u, {
        "icon-id": o.icon
    }, null, 8, ["icon-id"])])) : l("", !0), o.hasTitle ? (t(), n("span", {
        key: 1,
        class: "ins-tile__feature-title",
        innerHTML: o.title
    }, null, 8, Gt)) : l("", !0)], 2))), 128)), (t(!0), n($, null, k(e.countOfClones, o => (t(), n($, null, [(t(!0), n($, null, k(e.featureListElement.itemList, s => (t(), n("div", {
        key: `${s.id}-${o}`,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": s.isItemEditing
        }])
    }, [s.hasIcon ? (t(), n("span", Kt, [s.hasIcon ? (t(), L(u, {
        key: 0,
        "icon-id": s.icon
    }, null, 8, ["icon-id"])) : l("", !0)])) : l("", !0), s.hasTitle ? (t(), n("span", {
        key: 1,
        class: "ins-tile__feature-title",
        innerHTML: s.title
    }, null, 8, Vt)) : l("", !0)], 2))), 128))], 64))), 256))], 2)) : l("", !0)], 36)
}
const zt = S(Nt, [
        ["render", Qt]
    ]),
    Xt = b({
        components: {
            TileTitle: M,
            Library365Icon: w
        },
        props: {
            tileId: {
                required: !0,
                type: String
            },
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            titleElement: {
                required: !0,
                type: Object
            },
            featureListElement: {
                required: !0,
                type: Object
            }
        }
    }),
    Yt = {
        class: "ins-tile__wrap"
    },
    Jt = {
        key: 1,
        class: "ins-tile__body"
    },
    Zt = ["id"],
    xt = {
        class: "ins-tile__feature-info"
    },
    ei = {
        key: 0,
        class: "ins-tile__feature-icon"
    },
    ti = ["innerHTML"],
    ii = ["innerHTML"];

function ni(e, a, p, c, d, _) {
    const u = g("TileTitle"),
        o = g("Library365Icon");
    return t(), n("div", Yt, [e.titleElement.hasElement ? (t(), L(u, {
        key: 0,
        class: "ins-tile__title",
        title: e.titleElement.text,
        "is-first-tile-with-title": e.isFirstTileWithTitle
    }, null, 8, ["title", "is-first-tile-with-title"])) : l("", !0), e.featureListElement.hasElement ? (t(), n("div", Jt, [(t(!0), n($, null, k(e.featureListElement.itemList, s => (t(), n("div", {
        id: `${e.tileId}-${s.id}`,
        key: s.id,
        class: y(["ins-tile__item", {
            "ins-tile__item--editing": s.isItemEditing
        }, {
            "ins-tile__item--has-icon": s.hasIcon
        }])
    }, [v("div", xt, [e.featureListElement.hasAnyFeatureIcon ? (t(), n("div", ei, [s.hasIcon ? (t(), L(o, {
        key: 0,
        "icon-id": s.icon
    }, null, 8, ["icon-id"])) : l("", !0)])) : l("", !0), e.featureListElement.hasAnyFeatureTitle ? (t(), n("div", {
        key: 1,
        role: "heading",
        "aria-level": "2",
        class: "ins-tile__feature-title",
        innerHTML: s.title
    }, null, 8, ti)) : l("", !0)]), e.featureListElement.hasAnyFeatureDescription ? (t(), n("div", {
        key: 0,
        class: "ins-tile__feature-description",
        innerHTML: s.fullDescription
    }, null, 8, ii)) : l("", !0)], 10, Zt))), 128))])) : l("", !0)])
}
const si = S(Xt, [
    ["render", ni]
]);

function li(e, a) {
    const p = Ae(e.general, a.general),
        c = G(e == null ? void 0 : e.title, a.title),
        d = J(e.image, a.image),
        _ = G(e.featureTitle, a.featureTitle),
        u = G(e.featureDescription, a.featureDescription),
        o = J(e.featureImage, a.featureImage),
        s = Fe(e.featureIcon, a.featureIcon);
    return {
        layout: a.layout,
        general: p,
        title: c,
        image: d,
        featureTitle: _,
        featureDescription: u,
        featureImage: o,
        featureIcon: s
    }
}

function oi(e) {
    switch (e) {
        case h.CLASSIC_CENTER:
            return "classic-center";
        case h.CLASSIC_LEFT:
            return "classic-left";
        case h.ACCORDION:
            return "accordion";
        case h.MINIMAL:
            return "minimal";
        case h.SMALL_ICONS:
            return "small-icons";
        case h.CAROUSEL:
            return "carousel";
        case h.IMAGE_LEFT:
            return "image-left";
        case h.IMAGE_RIGHT:
            return "image-right";
        default:
            throw new Error(`Unknown layout type. Current layout is ${e}`)
    }
}

function ai(e) {
    switch (e) {
        case h.CLASSIC_CENTER:
            return "classic-center-layout";
        case h.CLASSIC_LEFT:
            return "classic-left-layout";
        case h.ACCORDION:
            return "accordion-layout";
        case h.MINIMAL:
            return "minimal-layout";
        case h.SMALL_ICONS:
            return "small-icons-layout";
        case h.CAROUSEL:
            return "carousel-layout";
        case h.IMAGE_LEFT:
        case h.IMAGE_RIGHT:
            return "image-layout";
        default:
            throw new Error(`Unknown layout type. Current layout is ${e}`)
    }
}

function ri(e) {
    return [...Me(e.general), ...W("title", e.title), ...Z("image", e.image), ...W("feature-title", e.featureTitle), ...W("feature-description", e.featureDescription), ...W("feature-icon", e.featureIcon), ...Z("feature-image", e.featureImage)]
}

function ui() {
    return [{
        image1x: A.url600,
        image2x: A.url1200
    }, {
        image1x: A.url1200,
        image2x: A.url2000,
        breakpointMediaQuery: x(ee.S)
    }, {
        image1x: A.url2000,
        image2x: A.url2000,
        breakpointMediaQuery: x(ee.L)
    }]
}

function ci(e) {
    switch (e) {
        case h.CLASSIC_CENTER:
        case h.CLASSIC_LEFT:
        case h.MINIMAL:
            return 2500;
        case h.IMAGE_LEFT:
        case h.IMAGE_RIGHT:
            return 1500;
        case h.CAROUSEL:
        case h.SMALL_ICONS:
        case h.ACCORDION:
            return 0;
        default:
            throw new Error(`Unknown layout type. Current layout is ${e}`)
    }
}
const di = b({
        components: {
            FontLoader: Ee,
            ClassicCenterLayout: Tt,
            ClassicLeftLayout: Ft,
            AccordionLayout: et,
            MinimalLayout: zt,
            SmallIconsLayout: si,
            CarouselLayout: dt,
            ImageLayout: jt
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
            content: {
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
            },
            isFirstTileWithTitle: {
                required: !0,
                type: Boolean
            },
            isBackgroundSamePrev: {
                required: !0,
                type: Boolean
            },
            tileType: {
                required: !1,
                default: void 0,
                type: String
            }
        },
        setup(e, {
            attrs: a,
            emit: p
        }) {
            const c = fe(),
                d = $e(),
                {
                    tileId: _,
                    content: u,
                    siteSettings: o
                } = q(e),
                s = r(() => {
                    const f = ke(e.design.layout);
                    return li(f, e.design)
                }),
                i = r(() => s.value.general),
                T = r(() => ci(s.value.layout)),
                m = r(() => u.value.title),
                E = r(() => s.value.title),
                C = be(m, E),
                B = r(() => {
                    var f;
                    return (f = u.value) == null ? void 0 : f.image
                }),
                D = r(() => s.value.image),
                Q = Se(B, D),
                z = r(() => u.value.features),
                j = r(() => s.value.featureTitle),
                N = r(() => s.value.featureDescription),
                X = r(() => s.value.featureImage),
                Y = r(() => s.value.featureIcon),
                P = Ie(_, o, T, z, j, N, X, Y),
                {
                    tileElementRef: oe,
                    isTileShown: ae,
                    hasTransparentBackground: re
                } = we(p, e.viewportSettings, o, i),
                ue = d.isPreviewMode,
                ce = r(() => ue || C.hasElement || Q.hasElement || P.hasElement),
                de = r(() => {
                    var f, O;
                    return c.focusedTileId === e.tileId && ((O = (f = z.value) == null ? void 0 : f.items) == null ? void 0 : O.filter(H => H.id === c.focusedTileItemId).length) !== 0
                }),
                me = r(() => `ins-tile--${oi(s.value.layout)}`),
                pe = r(() => ai(s.value.layout)),
                _e = r(() => {
                    var f, O, H;
                    return [(f = E.value) == null ? void 0 : f.font, (O = j.value) == null ? void 0 : O.font, (H = N.value) == null ? void 0 : H.font]
                }),
                he = r(() => {
                    const f = ri(s.value);
                    return Ce(`#${a.id}`, f)
                }),
                ye = r(() => ui()),
                ge = r(() => U(P.tileId, "image")),
                Le = r(() => ge.value !== void 0);
            return {
                titleElement: C,
                imageElement: Q,
                featureTitleDesign: j,
                featureDescriptionDesign: N,
                featureIconDesign: Y,
                featureImageDesign: X,
                featureListElement: P,
                tileElementRef: oe,
                isTileShown: ae,
                hasTransparentBackground: re,
                tileNeedRender: ce,
                isTileAnyItemEditing: de,
                layoutClass: me,
                layoutComponent: pe,
                fonts: _e,
                styleSelector: he,
                imageBreakpointSet: ye,
                isUploadingImage: Le
            }
        }
    }),
    mi = di,
    pi = ["aria-label"];

function _i(e, a, p, c, d, _) {
    const u = g("FontLoader");
    return e.tileNeedRender ? (t(), n("div", {
        key: 0,
        ref: "tileElementRef",
        role: "region",
        "aria-label": e.content.title,
        class: y(["ins-tile", "ins-tile--feature-list", e.layoutClass, {
            "ins-tile--shown": e.isTileShown
        }, {
            "ins-tile--has-photo": e.imageElement.hasElement || e.isUploadingImage
        }, {
            "ins-tile--has-title": e.titleElement.hasElement
        }, {
            "ins-tile--editing": e.isTileAnyItemEditing
        }, {
            "ins-tile--same-prev-background": e.isBackgroundSamePrev
        }])
    }, [I(u, {
        fonts: e.fonts
    }, null, 8, ["fonts"]), (t(), L(te("style"), null, {
        default: Ue(() => [Re(je(e.styleSelector), 1)]),
        _: 1
    })), (t(), L(te(e.layoutComponent), {
        "tile-id": e.tileId,
        "is-first-tile-with-title": e.isFirstTileWithTitle,
        "has-transparent-background": e.hasTransparentBackground,
        "image-breakpoint-set": e.imageBreakpointSet,
        "title-element": e.titleElement,
        "image-element": e.imageElement,
        "feature-list-element": e.featureListElement,
        "viewport-settings": e.viewportSettings,
        "tile-type": e.tileType
    }, null, 8, ["tile-id", "is-first-tile-with-title", "has-transparent-background", "image-breakpoint-set", "title-element", "image-element", "feature-list-element", "viewport-settings", "tile-type"])), K(e.$slots, "hover-label"), K(e.$slots, "hovered-border"), K(e.$slots, "selected-border")], 10, pi)) : l("", !0)
}
const Ti = S(mi, [
    ["render", _i]
]);
export {
    Ti as
    default
};