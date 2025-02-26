import {
    N as v
} from "./website.js";
import {
    p as w,
    c as m,
    x as a,
    E as p,
    F as l,
    y,
    H as b,
    D as c,
    a0 as B,
    z as r
} from "./vendor.js";
const C = ["srcset", "media"],
    $ = ["srcset", "media"],
    N = ["src", "alt", "fetchpriority", "onload"],
    P = ["srcset", "media"],
    I = ["srcset", "media"],
    M = ["src", "alt", "fetchpriority", "onload"],
    z = w({
        __name: "PictureContainer",
        props: {
            imageSet: {},
            imageBreakpointSet: {},
            hasThumbnail: {
                type: Boolean,
                default: !0
            },
            hasBackground: {
                type: Boolean,
                default: !0
            },
            useBackgroundLayout: {
                type: Boolean,
                default: !1
            },
            useInlineLayout: {
                type: Boolean,
                default: !1
            },
            allowContainLayout: {
                type: Boolean,
                default: !1
            },
            forceContainLayout: {
                type: Boolean,
                default: !1
            },
            alt: {
                default: ""
            },
            fetchPriority: {
                default: v.LOW
            }
        },
        setup(k) {
            const u = k,
                g = (e, n) => {
                    var i, o, t;
                    return u.imageSet ? e.image1x && e.image2x ? `${(i=u.imageSet[e.image1x])==null?void 0:i[n]}, ${(o=u.imageSet[e.image2x])==null?void 0:o[n]} 2x` : `${(t=u.imageSet[e.image1x])==null?void 0:t[n]}` : ""
                },
                d = m(() => u.imageBreakpointSet === void 0 ? [] : Object.values(u.imageBreakpointSet).reverse().map(n => ({ ...n,
                    webpSrcSet: g(n, "webp"),
                    defaultSrcSet: g(n, "default")
                }))),
                f = m(() => u.useBackgroundLayout ? "this.parentNode.style.backgroundImage = 'url(' + this.currentSrc + ')';" : ""),
                L = m(() => u.hasThumbnail ? 'this.parentNode.nextElementSibling.style.display = "none"' : "");
            return (e, n) => {
                var i, o;
                return e.imageSet ? (r(), a("div", {
                    key: 0,
                    style: B({
                        backgroundColor: e.hasBackground ? e.imageSet.backgroundColor : "none"
                    })
                }, [p("picture", {
                    class: b({
                        "ins-picture ins-picture--full": !0,
                        "ins-picture--background": e.useBackgroundLayout,
                        "ins-picture--inline": e.useInlineLayout,
                        "ins-picture--contain": e.forceContainLayout || e.allowContainLayout && e.imageSet.simpleBackground
                    })
                }, [(r(!0), a(l, null, y(d.value, (t, s) => (r(), a("source", {
                    key: `imgwebp${s}`,
                    srcset: t.webpSrcSet,
                    media: t.breakpointMediaQuery,
                    type: "image/webp"
                }, null, 8, C))), 128)), (r(!0), a(l, null, y(d.value, (t, s) => (r(), a("source", {
                    key: `imgdefault${s}`,
                    srcset: t.defaultSrcSet,
                    media: t.breakpointMediaQuery
                }, null, 8, $))), 128)), p("img", {
                    src: (i = e.imageSet.url200) == null ? void 0 : i.default,
                    alt: e.alt,
                    fetchpriority: e.fetchPriority,
                    onload: `${f.value}${L.value}`
                }, null, 8, N)], 2), e.hasThumbnail ? (r(), a("picture", {
                    key: 0,
                    class: b({
                        "ins-picture ins-picture--thumb": !0,
                        "ins-picture--background": e.useBackgroundLayout,
                        "ins-picture--inline": e.useInlineLayout,
                        "ins-picture--contain": e.allowContainLayout && e.imageSet.simpleBackground
                    })
                }, [(r(!0), a(l, null, y(d.value, (t, s) => {
                    var h, S;
                    return r(), a(l, {
                        key: `thumbwebp${s}`
                    }, [t.thumbnail ? (r(), a("source", {
                        key: 0,
                        srcset: (h = e.imageSet[t.thumbnail]) == null ? void 0 : h.webp,
                        media: t.breakpointMediaQuery,
                        type: "image/webp"
                    }, null, 8, P)) : c("", !0), t.thumbnail ? (r(), a("source", {
                        key: 1,
                        srcset: (S = e.imageSet[t.thumbnail]) == null ? void 0 : S.default,
                        media: t.breakpointMediaQuery
                    }, null, 8, I)) : c("", !0)], 64)
                }), 128)), p("img", {
                    src: (o = e.imageSet.url200) == null ? void 0 : o.default,
                    alt: e.alt,
                    fetchpriority: e.fetchPriority,
                    onload: f.value
                }, null, 8, M)], 2)) : c("", !0)], 4)) : c("", !0)
            }
        }
    });
export {
    z as _
};