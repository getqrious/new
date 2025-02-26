import {
    K as C,
    M as h
} from "./website.js";
import {
    a as b
} from "./website-icons.js";
import {
    p as v,
    c as i,
    t as y,
    v as L,
    M as T,
    z as s,
    x as A,
    A as d,
    Q as m,
    E as t,
    S as p,
    H as r,
    a8 as f,
    C as k,
    D as l,
    L as B
} from "./vendor.js";
const S = v({
        components: {
            ControlLinkIcon: b
        },
        props: {
            content: {
                required: !0,
                type: Object
            },
            design: {
                required: !0,
                type: Object
            },
            tag: {
                required: !1,
                type: String,
                default: C.A
            },
            buyButtonCustomTitle: {
                required: !1,
                type: String,
                default: void 0
            }
        },
        setup(e) {
            const o = i(() => e.content),
                a = i(() => e.design),
                c = h(o, a),
                u = i(() => {
                    var n;
                    return typeof e.buyButtonCustomTitle > "u" ? (n = o == null ? void 0 : o.value) == null ? void 0 : n.title : e.buyButtonCustomTitle
                });
            return { ...y(c),
                computedTitle: u
            }
        }
    }),
    w = {
        class: "ins-control__button"
    },
    _ = {
        class: "ins-control__wrap"
    },
    E = {
        class: "ins-control__text"
    },
    M = {
        class: "ins-control__wrap"
    },
    $ = {
        class: "ins-control__text"
    },
    q = {
        class: "ins-control__icon"
    };

function D(e, o, a, c, u, n) {
    const g = T("ControlLinkIcon");
    return e.hasElement ? (s(), A("div", {
        key: 0,
        class: r({
            "ins-button-wrap": e.isButton,
            "ins-link-wrap": e.isText
        })
    }, [e.isButton ? (s(), d(k(e.tag), {
        key: 0,
        tabindex: "0",
        role: "button",
        href: e.href,
        target: e.linkTarget,
        "aria-label": e.title,
        class: r({
            "ins-control": !0,
            "ins-control--button": !0,
            "ins-control--outline": e.isOutline,
            "ins-control--solid": e.isSolid,
            "ins-control--small": e.isSmall,
            "ins-control--medium": e.isMedium,
            "ins-control--large": e.isLarge,
            "ins-control--rect": e.isRect,
            "ins-control--pill": e.isPill,
            "ins-control--round": e.isRound
        }),
        onClick: f(e.performAction, ["prevent", "stop"])
    }, {
        default: m(() => [t("div", w, [t("div", _, [t("div", E, p(e.computedTitle), 1)])])]),
        _: 1
    }, 8, ["href", "target", "aria-label", "class", "onClick"])) : l("", !0), e.isText ? (s(), d(k(e.tag), {
        key: 1,
        role: "link",
        href: e.href,
        target: e.linkTarget,
        "aria-label": e.title,
        class: r({
            "ins-control": !0,
            "ins-control--link": !0,
            "ins-control--small": e.isSmall,
            "ins-control--medium": e.isMedium,
            "ins-control--large": e.isLarge
        }),
        tabindex: "0",
        onClick: f(e.performAction, ["prevent", "stop"])
    }, {
        default: m(() => [t("div", M, [t("div", $, p(e.title), 1), t("div", q, [B(g)])])]),
        _: 1
    }, 8, ["href", "target", "aria-label", "class", "onClick"])) : l("", !0)], 2)) : l("", !0)
}
const R = L(S, [
    ["render", D]
]);
export {
    R as A
};