module.exports = [
"[project]/components/Navbar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/Navbar.jsx — Navigation Bar
// Sticky navbar dengan glass morphism effect, cart icon,
// dan mobile hamburger menu.
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CartContext.js [ssr] (ecmascript)");
;
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const { totalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    // Tambah shadow/blur saat scroll
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const navLinks = [
        {
            label: 'Shop',
            href: '#products'
        },
        {
            label: 'Collections',
            href: '#collections'
        },
        {
            label: 'About',
            href: '#about'
        },
        {
            label: 'Lookbook',
            href: '#lookbook'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center font-display font-800 text-sm",
                                        style: {
                                            background: 'var(--neon-pink)',
                                            boxShadow: '0 0 15px rgba(255, 45, 135, 0.5)'
                                        },
                                        children: "D"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "font-display font-800 text-xl tracking-tight text-white group-hover:text-gradient-neon transition-all duration-300",
                                    style: {
                                        fontFamily: 'var(--font-display)'
                                    },
                                    children: [
                                        "DRIP",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--neon-pink)'
                                            },
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: "text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group",
                                    style: {
                                        fontFamily: 'var(--font-body)'
                                    },
                                    children: [
                                        link.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                                            style: {
                                                background: 'var(--neon-pink)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, link.label, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                cx: "11",
                                                cy: "11",
                                                r: "8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                                                x1: "21",
                                                y1: "21",
                                                x2: "16.65",
                                                y2: "16.65"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/checkout",
                                    className: "relative flex w-9 h-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "6",
                                                    x2: "21",
                                                    y2: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M16 10a4 4 0 01-8 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 95,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 92,
                                            columnNumber: 5
                                        }, this),
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs font-bold flex items-center justify-center",
                                            style: {
                                                background: 'var(--neon-pink)',
                                                fontSize: '10px'
                                            },
                                            children: totalItems
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 98,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 91,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#products",
                                    className: "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-display font-700 text-white transition-all duration-300 hover:-translate-y-0.5",
                                    style: {
                                        background: 'var(--neon-pink)',
                                        fontFamily: 'var(--font-display)',
                                        boxShadow: '0 0 20px rgba(255, 45, 135, 0.3)',
                                        fontWeight: 700,
                                        letterSpacing: '0.05em'
                                    },
                                    children: "Shop Now"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileOpen(!mobileOpen),
                                    className: "md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: `block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: `block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: `block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: `md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "pb-6 pt-2 flex flex-col gap-1 border-t border-white/5 mt-2",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: ()=>setMobileOpen(false),
                                    className: "px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium",
                                    children: link.label
                                }, link.label, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#products",
                                onClick: ()=>setMobileOpen(false),
                                className: "mt-3 mx-4 py-3 rounded-full text-center text-sm font-bold text-white",
                                style: {
                                    background: 'var(--neon-pink)'
                                },
                                children: "Shop Now"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeroSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/HeroSection.jsx — Hero Section Landing Page
// Full-width hero dengan animated background, teks catchy Gen Z,
// CTA animatif, dan floating decoration elements.
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
function HeroSection() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Rotating text untuk hero tagline
    const rotatingWords = [
        'AUTHENTIC',
        'DIFFERENT',
        'ICONIC',
        'LIMITLESS'
    ];
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [wordVisible, setWordVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setWordVisible(false);
            setTimeout(()=>{
                setWordIndex((prev)=>(prev + 1) % rotatingWords.length);
                setWordVisible(true);
            }, 300);
        }, 2500);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center overflow-hidden",
        style: {
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 50%, #0A0A0A 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none",
                style: {
                    background: 'var(--neon-pink)'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none",
                style: {
                    background: 'var(--electric)'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none",
                style: {
                    background: 'var(--neon-blue)'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5 pointer-events-none",
                style: {
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-28 right-8 md:right-24 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest",
                        style: {
                            animation: 'float 6s ease-in-out infinite',
                            background: 'rgba(255, 45, 135, 0.1)',
                            border: '1px solid rgba(255, 45, 135, 0.3)',
                            color: 'var(--neon-pink)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-current animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            "New Drop Weekly"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 left-6 md:left-16 text-2xl hidden md:block",
                        style: {
                            animation: 'float 8s ease-in-out infinite 1s'
                        },
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 left-8 md:left-20 w-16 h-16 rounded-full border-2 hidden md:block",
                        style: {
                            borderColor: 'var(--neon-blue)',
                            animation: 'float 7s ease-in-out infinite 0.5s',
                            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-40 right-6 md:right-20 glass px-4 py-3 rounded-2xl hidden sm:block",
                        style: {
                            animation: 'float 5s ease-in-out infinite 2s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/50 font-mono uppercase tracking-wider mb-1",
                                children: "Happy Customers"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-display font-800",
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    color: 'var(--neon-pink)'
                                },
                                children: "50K+"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `section-badge mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--neon-pink)'
                                    },
                                    children: "⚡"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                "SS25 Collection — Out Now"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: `font-display font-800 leading-none tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                            style: {
                                fontFamily: 'var(--font-display)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-2",
                                    children: "BE"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "block text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
                                    style: {
                                        background: 'linear-gradient(135deg, #ff2d2dff 0%, #e5ff00ff 50%, #09f731fd 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        transition: 'opacity 0.3s ease',
                                        opacity: wordVisible ? 1 : 0
                                    },
                                    children: rotatingWords[wordIndex]
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white",
                                    children: [
                                        "WITH DRIP",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--neon-pink)'
                                            },
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: `mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                            style: {
                                fontFamily: 'var(--font-body)'
                            },
                            children: [
                                "Streetwear, Y2K, Vintage, Bold — temukan gaya yang",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("em", {
                                    className: "not-italic",
                                    style: {
                                        color: 'var(--neon-pink)'
                                    },
                                    children: " ngobrol langsung "
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                "sama jiwa lo. No boring fits, ever."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `flex flex-wrap gap-4 mt-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#products",
                                    className: "group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-white overflow-hidden",
                                    style: {
                                        background: 'var(--neon-pink)',
                                        fontFamily: 'var(--font-display)',
                                        boxShadow: '0 0 30px rgba(255, 45, 135, 0.4)',
                                        letterSpacing: '0.05em',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            style: {
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "relative",
                                            children: "Shop Now"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "relative transition-transform duration-300 group-hover:translate-x-1",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#collections",
                                    className: "inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5",
                                    style: {
                                        fontFamily: 'var(--font-display)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        background: 'rgba(255,255,255,0.03)'
                                    },
                                    children: "View Lookbook"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: `flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                            children: [
                                {
                                    value: '50K+',
                                    label: 'Happy Customers'
                                },
                                {
                                    value: '200+',
                                    label: 'Unique Styles'
                                },
                                {
                                    value: '4.9★',
                                    label: 'Avg Rating'
                                }
                            ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-2xl md:text-3xl font-display font-800 text-white",
                                            style: {
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: stat.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-white/40 mt-1",
                                            style: {
                                                fontFamily: 'var(--font-body)'
                                            },
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.jsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.label, true, {
                                    fileName: "[project]/components/HeroSection.jsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/HeroSection.jsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HeroSection.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-xs text-white/30 uppercase tracking-widest font-mono",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-0.5 h-12",
                        style: {
                            background: 'linear-gradient(to bottom, rgba(255,45,135,0.8), transparent)',
                            animation: 'float 2s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.jsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.jsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSection.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/lib/useLocalStorage.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocalStorage",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useLocalStorage(key, initialValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return initialValue;
        //TURBOPACK unreachable
        ;
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log(err);
        }
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
}
}),
"[project]/components/ProductCard.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard,
    "formatPrice",
    ()=>formatPrice
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/ProductCard.jsx — Kartu Produk Individual
// Menampilkan gambar, nama, harga, badge, rating, dan tombol
// add to cart dengan hover effects yang interaktif.
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/CartContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLocalStorage.js [ssr] (ecmascript)");
;
;
;
;
;
;
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}
// === BADGE COLORS ===
const badgeConfig = {
    HOT: {
        bg: 'rgba(255, 45, 135, 0.9)',
        label: '🔥 HOT'
    },
    NEW: {
        bg: 'rgba(57, 255, 20, 0.9)',
        label: '✨ NEW'
    },
    LIMITED: {
        bg: 'rgba(255, 230, 0, 0.9)',
        label: '⚡ LIMITED'
    },
    SALE: {
        bg: 'rgba(91, 75, 255, 0.9)',
        label: '🏷️ SALE'
    }
};
function ProductCard({ product }) {
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useLocalStorage"])(`wishlist-${product.id}`, false);
    const [addedToCart, setAddedToCart] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const discountedPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$CartContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const handleAddToCart = (e)=>{
        e.preventDefault();
        addToCart(product);
        setAddedToCart(true);
        setTimeout(()=>setAddedToCart(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${product.id}`,
        className: "product-card group",
        style: {
            textDecoration: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden aspect-[3/4]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: product.image,
                        alt: product.name,
                        fill: true,
                        className: "object-cover transition-transform duration-700 group-hover:scale-110",
                        sizes: "(max-width: 768px) 50vw, 25vw"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    product.badge && badgeConfig[product.badge] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wide",
                        style: {
                            background: badgeConfig[product.badge].bg
                        },
                        children: badgeConfig[product.badge].label
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsWishlisted(!isWishlisted),
                        className: "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                        style: {
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(10px)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: isWishlisted ? '#FF2D87' : 'none',
                            stroke: isWishlisted ? '#FF2D87' : 'white',
                            strokeWidth: "2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCart,
                        className: "absolute bottom-3 left-3 right-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0",
                        style: {
                            background: addedToCart ? 'rgba(57, 255, 20, 0.9)' : 'var(--neon-pink)',
                            backdropFilter: 'blur(10px)',
                            fontFamily: 'var(--font-display)',
                            letterSpacing: '0.08em'
                        },
                        children: addedToCart ? '✓ Added!' : '+ Add to Cart'
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    product.stock <= 10 && product.stock > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-16 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-xs text-yellow-400 font-mono",
                            children: [
                                "Only ",
                                product.stock,
                                " left!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductCard.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-xs font-mono uppercase tracking-widest mb-2",
                        style: {
                            color: 'var(--neon-pink)'
                        },
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-white text-sm leading-tight mb-2 line-clamp-2 group-hover:text-white/80 transition-colors",
                        style: {
                            fontFamily: 'var(--font-body)'
                        },
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 text-xs",
                                children: "★"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs text-white/50 font-mono",
                                children: [
                                    product.rating,
                                    " (",
                                    product.reviewCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "font-display font-800 text-base",
                                style: {
                                    fontFamily: 'var(--font-display)',
                                    color: product.discount ? 'var(--neon-pink)' : 'white'
                                },
                                children: formatPrice(discountedPrice)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/30 line-through font-mono",
                                        children: formatPrice(product.price)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold px-1.5 py-0.5 rounded-md",
                                        style: {
                                            background: 'rgba(255, 45, 135, 0.2)',
                                            color: 'var(--neon-pink)'
                                        },
                                        children: [
                                            "-",
                                            product.discount,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProductCard.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductGrid.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/ProductGrid.jsx — Grid Produk Terbaru
// Menampilkan grid produk 3-4 kolom di desktop, responsive
// ke 1-2 kolom di mobile, dengan filter kategori.
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.jsx [ssr] (ecmascript)");
;
;
;
// Kategori filter tabs
const CATEGORIES = [
    'All',
    'Streetwear',
    'Y2K',
    'Vintage',
    'Minimal',
    'Bold'
];
function ProductGrid({ products = [] }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('All');
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('featured');
    const [minPrice, setMinPrice] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [maxPrice, setMaxPrice] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // Filter produk berdasarkan kategori aktif
    const filteredProducts = products.filter((p)=>{
        if (activeCategory === 'All') return true;
        return p.category.toLowerCase() === activeCategory.toLowerCase();
    });
    // Search
    const searchedProducts = filteredProducts.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    // Filter harga
    const priceFilteredProducts = searchedProducts.filter((p)=>{
        const min = minPrice ? parseInt(minPrice) : 0;
        const max = maxPrice ? parseInt(maxPrice) : Infinity;
        return p.price >= min && p.price <= max;
    });
    // Sort produk
    const sortedProducts = [
        ...priceFilteredProducts
    ].sort((a, b)=>{
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "products",
        className: "py-24 md:py-32",
        style: {
            background: 'var(--bg-900)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end gap-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "section-badge mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "🛍️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        " Latest Drops"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-none",
                                    style: {
                                        fontFamily: 'var(--font-display)'
                                    },
                                    children: [
                                        "Fresh ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                background: 'linear-gradient(135deg, #FF2D87, #5B4BFF)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            },
                                            children: "Fits"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        "Just Landed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/40 font-mono uppercase tracking-wider",
                                    children: "Sort:"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                    value: sortBy,
                                    onChange: (e)=>setSortBy(e.target.value),
                                    className: "input-neon py-2 px-4 text-sm rounded-xl cursor-pointer w-auto",
                                    style: {
                                        fontFamily: 'var(--font-mono)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: "featured",
                                            style: {
                                                background: '#1A1A1A'
                                            },
                                            children: "Featured"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: "price-low",
                                            style: {
                                                background: '#1A1A1A'
                                            },
                                            children: "Price: Low to High"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: "price-high",
                                            style: {
                                                background: '#1A1A1A'
                                            },
                                            children: "Price: High to Low"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                            value: "rating",
                                            style: {
                                                background: '#1A1A1A'
                                            },
                                            children: "Top Rated"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProductGrid.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "🔍 Search produk...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full md:w-72 px-5 py-3 rounded-xl text-white text-sm",
                            style: {
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                outline: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 85,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/40",
                                    children: "Harga:"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 87,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Min",
                                    value: minPrice,
                                    onChange: (e)=>setMinPrice(e.target.value),
                                    className: "w-28 px-4 py-3 rounded-xl text-white text-sm",
                                    style: {
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        outline: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 88,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-white/40",
                                    children: "—"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 89,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Max",
                                    value: maxPrice,
                                    onChange: (e)=>setMaxPrice(e.target.value),
                                    className: "w-28 px-4 py-3 rounded-xl text-white text-sm",
                                    style: {
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        outline: 'none'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 90,
                                    columnNumber: 9
                                }, this),
                                (minPrice || maxPrice) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMinPrice('');
                                        setMaxPrice('');
                                    },
                                    style: {
                                        color: '#FF2D87',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        background: 'none',
                                        border: 'none'
                                    },
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 91,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 86,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 84,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-10",
                    children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(cat),
                            className: "flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                            style: {
                                fontFamily: 'var(--font-body)',
                                background: activeCategory === cat ? 'var(--neon-pink)' : 'rgba(255,255,255,0.05)',
                                color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.5)',
                                border: `1px solid ${activeCategory === cat ? 'var(--neon-pink)' : 'rgba(255,255,255,0.08)'}`,
                                boxShadow: activeCategory === cat ? '0 0 20px rgba(255, 45, 135, 0.3)' : 'none'
                            },
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                sortedProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",
                    children: sortedProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                animation: `slideInUp 0.5s ease-out ${index * 0.08}s both`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                product: product
                            }, void 0, false, {
                                fileName: "[project]/components/ProductGrid.jsx",
                                lineNumber: 127,
                                columnNumber: 17
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this) : /* Empty state */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center py-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-4",
                            children: "👕"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            className: "font-display font-700 text-xl text-white mb-2",
                            style: {
                                fontFamily: 'var(--font-display)'
                            },
                            children: "No fits found"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-white/40 text-sm",
                            children: "Try a different category"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductGrid.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 133,
                    columnNumber: 11
                }, this),
                sortedProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "inline-flex items-center gap-3 px-10 py-4 rounded-full font-display font-bold text-white transition-all duration-300 hover:-translate-y-1",
                        style: {
                            fontFamily: 'var(--font-display)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            background: 'rgba(255,255,255,0.03)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontSize: '0.85rem'
                        },
                        children: [
                            "Load More Drip",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                    d: "M12 5v14M5 12l7 7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductGrid.jsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProductGrid.jsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductGrid.jsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ProductGrid.jsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductGrid.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductGrid.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CollectionsSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/CollectionsSection.jsx — Highlight Tren & Koleksi
// Cards modern dengan hover effects interaktif, warna bold
// dan cerah: neon pink, electric blue, pastel vibes.
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
// === DATA KOLEKSI ===
const collections = [
    {
        id: 1,
        name: 'STREET CODEX',
        slug: 'streetwear',
        description: 'Urban streets call for fits yang gak biasa. Bold, raw, dan unapologetic.',
        color: '#FF2D87',
        bgGradient: 'linear-gradient(145deg, #1A0515 0%, #2D0A24 100%)',
        accentColor: 'rgba(255, 45, 135, 0.15)',
        borderColor: 'rgba(255, 45, 135, 0.3)',
        emoji: '🔥',
        tag: 'Most Popular',
        itemCount: 48,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80'
    },
    {
        id: 2,
        name: 'Y2K REVIVE',
        slug: 'y2k',
        description: 'Throwback vibes dengan twist futuristik. 2000s but make it fashion.',
        color: '#00F0FF',
        bgGradient: 'linear-gradient(145deg, #00141A 0%, #001F26 100%)',
        accentColor: 'rgba(0, 240, 255, 0.1)',
        borderColor: 'rgba(0, 240, 255, 0.3)',
        emoji: '✨',
        tag: 'Trending Now',
        itemCount: 32,
        image: 'https://images.unsplash.com/photo-1526720324-48b07e0f5e72?w=600&q=80'
    },
    {
        id: 3,
        name: 'QUIET LUXURY',
        slug: 'minimal',
        description: 'Less noise, more elegance. Clean cuts yang ngomong tanpa teriak.',
        color: '#D4B3FF',
        bgGradient: 'linear-gradient(145deg, #0D0A1A 0%, #160E26 100%)',
        accentColor: 'rgba(212, 179, 255, 0.1)',
        borderColor: 'rgba(212, 179, 255, 0.3)',
        emoji: '🫧',
        tag: 'New Season',
        itemCount: 25,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148e88b32e?w=600&q=80'
    },
    {
        id: 4,
        name: 'BOLD STATEMENT',
        slug: 'bold',
        description: 'Untuk yang berani tampil beda. Warna ekstrem, grafis maksimal.',
        color: '#39FF14',
        bgGradient: 'linear-gradient(145deg, #051400 0%, #0A2400 100%)',
        accentColor: 'rgba(57, 255, 20, 0.08)',
        borderColor: 'rgba(57, 255, 20, 0.3)',
        emoji: '⚡',
        tag: 'Limited Edition',
        itemCount: 19,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
    }
];
function CollectionsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        id: "collections",
        className: "py-24 md:py-32",
        style: {
            background: '#0D0D0D'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "section-badge mb-4 mx-auto w-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "🎯"
                                }, void 0, false, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                " Curated Collections"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CollectionsSection.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: "font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-4",
                            style: {
                                fontFamily: 'var(--font-display)'
                            },
                            children: [
                                "Find Your",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: 'linear-gradient(135deg, #00F0FF 0%, #5B4BFF 50%, #FF2D87 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    },
                                    children: "Aesthetic."
                                }, void 0, false, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CollectionsSection.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-white/40 text-base max-w-lg mx-auto",
                            style: {
                                fontFamily: 'var(--font-body)'
                            },
                            children: "Empat vibes, satu tujuan: bantuin lo nemu identity fashion yang beneran lo banget."
                        }, void 0, false, {
                            fileName: "[project]/components/CollectionsSection.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CollectionsSection.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: collections.map((col, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `#products`,
                            className: "group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer block",
                            style: {
                                background: col.bgGradient,
                                border: `1px solid ${col.borderColor}`,
                                animationDelay: `${index * 0.1}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                    style: {
                                        background: col.accentColor,
                                        boxShadow: `inset 0 0 60px ${col.accentColor}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "relative h-52 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: col.image,
                                            alt: col.name,
                                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0",
                                            style: {
                                                background: `linear-gradient(to bottom, transparent 30%, ${col.bgGradient.includes('0D') ? '#0D0A1A' : col.bgGradient.split('100%')[0].split('(')[1].split(',')[1].trim()})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0",
                                            style: {
                                                background: 'rgba(0,0,0,0.3)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4 text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12",
                                            children: col.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                                            style: {
                                                background: `${col.color}20`,
                                                border: `1px solid ${col.color}50`,
                                                color: col.color,
                                                fontFamily: 'var(--font-mono)'
                                            },
                                            children: col.tag
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "p-5 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-widest mb-2 font-mono",
                                            style: {
                                                color: `${col.color}80`
                                            },
                                            children: [
                                                col.itemCount,
                                                " Items"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "font-display font-800 text-xl text-white mb-2 leading-tight",
                                            style: {
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: col.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50 leading-relaxed mb-4",
                                            style: {
                                                fontFamily: 'var(--font-body)'
                                            },
                                            children: col.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3",
                                            style: {
                                                color: col.color,
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: "Explore"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CollectionsSection.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CollectionsSection.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                            style: {
                                                background: `linear-gradient(90deg, transparent, ${col.color}, transparent)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CollectionsSection.jsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CollectionsSection.jsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, col.id, true, {
                            fileName: "[project]/components/CollectionsSection.jsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CollectionsSection.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mt-16 py-4 overflow-hidden rounded-2xl",
                    style: {
                        background: 'rgba(255, 45, 135, 0.05)',
                        border: '1px solid rgba(255, 45, 135, 0.15)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex gap-0 whitespace-nowrap",
                        style: {
                            animation: 'marquee 20s linear infinite'
                        },
                        children: Array(2).fill(null).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "flex gap-8 items-center",
                                children: [
                                    'STREETWEAR DROPS',
                                    'Y2K IS BACK',
                                    'VINTAGE FINDS',
                                    'LIMITED PIECES',
                                    'NEW ARRIVALS',
                                    'GEN Z APPROVED'
                                ].map((text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-display font-700 uppercase tracking-widest text-white/70",
                                                style: {
                                                    fontFamily: 'var(--font-display)'
                                                },
                                                children: text
                                            }, void 0, false, {
                                                fileName: "[project]/components/CollectionsSection.jsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'var(--neon-pink)'
                                                },
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CollectionsSection.jsx",
                                                lineNumber: 230,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, text, true, {
                                        fileName: "[project]/components/CollectionsSection.jsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this))
                            }, i, false, {
                                fileName: "[project]/components/CollectionsSection.jsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/CollectionsSection.jsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CollectionsSection.jsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CollectionsSection.jsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CollectionsSection.jsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/SocialProofSection.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialProofSection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
// ============================================================
// components/SocialProofSection.jsx — Testimoni & Instagram Feed
// Testimoni pendek dari pelanggan nyata + mock Instagram feed
// dengan grid photo style yang aesthetic dan interaktif.
// ============================================================
// === MOCK INSTAGRAM POSTS ===
// Di produksi nyata, ini akan di-fetch dari Instagram API
const instagramPosts = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
        likes: 2847,
        handle: '@rara.drip',
        caption: 'new drip just landed 🔥'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
        likes: 1923,
        handle: '@kev.fits',
        caption: 'vintage mode activated ✨'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
        likes: 3401,
        handle: '@nadiaftr_',
        caption: 'y2k era is forever 🦋'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
        likes: 1654,
        handle: '@rizky.ootd',
        caption: 'minimal is the new black 🫧'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
        likes: 4129,
        handle: '@drip.official',
        caption: 'ss25 campaign 💥'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1548123378-bde4eca81d2d?w=400&q=80',
        likes: 2201,
        handle: '@style.gen',
        caption: 'bold never gets old ⚡'
    }
];
// === STAR RATING COMPONENT ===
function StarRating({ rating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex gap-0.5",
        children: Array.from({
            length: 5
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                className: i < rating ? 'text-yellow-400' : 'text-white/20',
                style: {
                    fontSize: '14px'
                },
                children: "★"
            }, i, false, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 59,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/SocialProofSection.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
// === TESTIMONIAL CARD ===
function TestimonialCard({ testimonial }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "flex-shrink-0 w-72 md:w-80 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2",
        style: {
            background: 'var(--bg-700)',
            border: '1px solid rgba(255,255,255,0.06)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-3xl font-display font-800 mb-4 leading-none",
                style: {
                    color: 'var(--neon-pink)',
                    fontFamily: 'var(--font-display)'
                },
                children: '"'
            }, void 0, false, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-white/80 text-sm leading-relaxed mb-5",
                style: {
                    fontFamily: 'var(--font-body)'
                },
                children: testimonial.message
            }, void 0, false, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StarRating, {
                rating: testimonial.rating
            }, void 0, false, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            testimonial.productBought && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "mt-3 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full w-fit",
                style: {
                    background: 'rgba(255, 45, 135, 0.1)',
                    border: '1px solid rgba(255, 45, 135, 0.2)',
                    color: 'var(--neon-pink)'
                },
                children: [
                    "Bought: ",
                    testimonial.productBought
                ]
            }, void 0, true, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mt-4 pt-4 border-t border-white/5",
                children: [
                    testimonial.avatar ? // eslint-disable-next-line @next/next/no-img-element
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: testimonial.avatar,
                        alt: testimonial.name,
                        className: "w-10 h-10 rounded-full object-cover",
                        style: {
                            border: '2px solid rgba(255, 45, 135, 0.4)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/SocialProofSection.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                        style: {
                            background: 'var(--neon-pink)'
                        },
                        children: testimonial.name[0]
                    }, void 0, false, {
                        fileName: "[project]/components/SocialProofSection.jsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-white text-sm font-semibold",
                                style: {
                                    fontFamily: 'var(--font-body)'
                                },
                                children: testimonial.name
                            }, void 0, false, {
                                fileName: "[project]/components/SocialProofSection.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-white/40 text-xs font-mono",
                                children: testimonial.handle
                            }, void 0, false, {
                                fileName: "[project]/components/SocialProofSection.jsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SocialProofSection.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "ml-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-blue-400 text-sm",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SocialProofSection.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SocialProofSection.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SocialProofSection.jsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function SocialProofSection({ testimonials = [] }) {
    // Gunakan data dari props atau fallback ke mock data
    const displayTestimonials = testimonials.length > 0 ? testimonials : [
        {
            id: 1,
            name: 'Rara Aulia',
            handle: '@rara.drip',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
            message: 'Literally obsessed sama kualitasnya! Chrome Heart tee ini udah jadi favorit aku buat hangout. DRIP never miss fr 🔥',
            rating: 5,
            productBought: 'Chrome Heart Oversized Tee'
        },
        {
            id: 2,
            name: 'Kevin Santoso',
            handle: '@kev.fits',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
            message: 'Vintage Denim Jacket-nya gila banget kualitasnya. Packaging juga rapi, pengiriman cepet. Highly recommend! ✨',
            rating: 5,
            productBought: 'Vintage Wash Denim Jacket'
        },
        {
            id: 3,
            name: 'Nadia Fitri',
            handle: '@nadiaftr_',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
            message: 'Y2K Butterfly top sempurna banget buat festival kemaren! Banyak yang nanya beli dimana. 10/10 no cap 🦋',
            rating: 5,
            productBought: 'Y2K Butterfly Crop Top'
        },
        {
            id: 4,
            name: 'Rizky Pratama',
            handle: '@rizky.ootd',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
            message: 'Clean Hoodie-nya emang ga ada duanya. Material tebal tapi ga gerah. Perfect daily wear!',
            rating: 5,
            productBought: 'Clean Fit Hoodie'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: "py-24 md:py-32 overflow-hidden",
        style: {
            background: '#0A0A0A'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end gap-4 mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "section-badge mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: "💬"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                " Real Reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-800 text-4xl md:text-5xl text-white leading-none",
                                            style: {
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: [
                                                "The Drip",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: 'linear-gradient(135deg, #FFE600, #FF2D87)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text'
                                                    },
                                                    children: "Don't Lie."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "font-display font-800 text-3xl",
                                                    style: {
                                                        fontFamily: 'var(--font-display)',
                                                        color: 'var(--neon-yellow)'
                                                    },
                                                    children: "4.9/5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-white/40 font-mono",
                                                    children: "Based on 1,200+ reviews"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StarRating, {
                                            rating: 5
                                        }, void 0, false, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 overflow-x-auto scrollbar-hide pb-4",
                            children: displayTestimonials.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TestimonialCard, {
                                    testimonial: t
                                }, t.id, false, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SocialProofSection.jsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row sm:items-center gap-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "section-badge mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    children: "📸"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 17
                                                }, this),
                                                " @drip.official"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 241,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-800 text-3xl md:text-4xl text-white",
                                            style: {
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: [
                                                "Tag us for a",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        background: 'linear-gradient(135deg, #00F0FF, #5B4BFF)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text'
                                                    },
                                                    children: " feature!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://instagram.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5",
                                    style: {
                                        background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                                        fontFamily: 'var(--font-display)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SocialProofSection.jsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        "Follow @drip.official"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3",
                            children: instagramPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                    href: "https://instagram.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group relative overflow-hidden rounded-2xl aspect-square block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: post.image,
                                            alt: post.caption,
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm font-bold",
                                                    children: [
                                                        "❤️ ",
                                                        post.likes.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-white/70 text-xs font-mono",
                                                    children: post.handle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SocialProofSection.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SocialProofSection.jsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, post.id, true, {
                                    fileName: "[project]/components/SocialProofSection.jsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center mt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-sm font-mono",
                                style: {
                                    color: 'var(--neon-pink)'
                                },
                                children: "#DRIPxME · #DRIPStore · #GenZFashion · #StreetDRIP"
                            }, void 0, false, {
                                fileName: "[project]/components/SocialProofSection.jsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SocialProofSection.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SocialProofSection.jsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SocialProofSection.jsx",
            lineNumber: 186,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SocialProofSection.jsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// components/Footer.jsx — Footer Minimalis DRIP Store
// Quick links, social media icons, dan newsletter signup form
// dengan aesthetic dark dan neon accent.
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
// === SOCIAL MEDIA LINKS ===
const socials = [
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: 'TikTok',
        href: 'https://tiktok.com',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.27 8.27 0 0 0 4.84 1.54V6.91a4.85 4.85 0 0 1-1.07-.22z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: 'Twitter/X',
        href: 'https://twitter.com',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 34,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: 'Pinterest',
        href: 'https://pinterest.com',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Footer.jsx",
            lineNumber: 43,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// === FOOTER LINKS ===
const footerLinks = {
    Shop: [
        {
            label: 'New Arrivals',
            href: '#products'
        },
        {
            label: 'Streetwear',
            href: '#products'
        },
        {
            label: 'Y2K Collection',
            href: '#products'
        },
        {
            label: 'Vintage',
            href: '#products'
        },
        {
            label: 'Sale',
            href: '#products'
        }
    ],
    Info: [
        {
            label: 'About DRIP',
            href: '#about'
        },
        {
            label: 'Lookbook',
            href: '#lookbook'
        },
        {
            label: 'Sustainability',
            href: '#'
        },
        {
            label: 'Careers',
            href: '#'
        }
    ],
    Help: [
        {
            label: 'FAQ',
            href: '#'
        },
        {
            label: 'Shipping & Returns',
            href: '#'
        },
        {
            label: 'Size Guide',
            href: '#'
        },
        {
            label: 'Contact Us',
            href: '#'
        }
    ]
};
function Footer() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleNewsletter = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            });
            if (res.ok) {
                setSubmitted(true);
                setEmail('');
            }
        } catch  {
            // Fallback untuk demo
            setSubmitted(true);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        style: {
            background: '#080808',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-16",
                style: {
                    background: 'linear-gradient(135deg, rgba(255, 45, 135, 0.05) 0%, rgba(91, 75, 255, 0.05) 100%)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "section-badge mb-4 mx-auto w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "✉️"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    " Newsletter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "font-display font-800 text-3xl md:text-4xl text-white mb-3",
                                style: {
                                    fontFamily: 'var(--font-display)'
                                },
                                children: [
                                    "Stay in the",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: 'linear-gradient(135deg, #FF2D87, #5B4BFF)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                        },
                                        children: " loop."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-white/40 text-sm mb-8",
                                style: {
                                    fontFamily: 'var(--font-body)'
                                },
                                children: "Dapetin early access ke drops terbaru, promo eksklusif, dan style tips langsung ke inbox lo."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 py-4 px-8 rounded-2xl",
                                style: {
                                    background: 'rgba(57, 255, 20, 0.1)',
                                    border: '1px solid rgba(57, 255, 20, 0.3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#39FF14'
                                        },
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium",
                                        style: {
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: "You're in! Welcome to the DRIP fam 🔥"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: handleNewsletter,
                                className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        placeholder: "your@email.com",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        className: "input-neon flex-1",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "flex-shrink-0 px-6 py-4 rounded-2xl font-display font-bold text-sm text-white uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50",
                                        style: {
                                            background: 'var(--neon-pink)',
                                            fontFamily: 'var(--font-display)',
                                            boxShadow: '0 0 20px rgba(255, 45, 135, 0.3)'
                                        },
                                        children: loading ? '...' : 'Subscribe'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-white/20 text-xs mt-4 font-mono",
                                children: "No spam, unsubscribe anytime. We respect your privacy."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "col-span-2 md:col-span-4 lg:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg flex items-center justify-center font-display font-800 text-sm text-white",
                                                style: {
                                                    background: 'var(--neon-pink)'
                                                },
                                                children: "D"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Footer.jsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "font-display font-800 text-xl text-white",
                                                style: {
                                                    fontFamily: 'var(--font-display)'
                                                },
                                                children: [
                                                    "DRIP",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--neon-pink)'
                                                        },
                                                        children: "."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Footer.jsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 text-sm leading-relaxed mb-6 max-w-xs",
                                        style: {
                                            fontFamily: 'var(--font-body)'
                                        },
                                        children: "Toko fashion Gen Z yang nggak pernah bikin bosan. Dari streetwear sampai Y2K, kami ada buat ekspresiin kamu."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": social.name,
                                                className: "w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1",
                                                style: {
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.08)'
                                                },
                                                children: social.icon
                                            }, social.name, false, {
                                                fileName: "[project]/components/Footer.jsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            Object.entries(footerLinks).map(([heading, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                            className: "font-display font-700 text-white text-sm mb-4 uppercase tracking-widest",
                                            style: {
                                                fontFamily: 'var(--font-display)'
                                            },
                                            children: heading
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.jsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "text-sm text-white/40 hover:text-white transition-colors duration-200",
                                                        style: {
                                                            fontFamily: 'var(--font-body)'
                                                        },
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Footer.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, this)
                                                }, link.label, false, {
                                                    fileName: "[project]/components/Footer.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.jsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, heading, true, {
                                    fileName: "[project]/components/Footer.jsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid rgba(255,255,255,0.05)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/30 font-mono",
                                children: "© 2025 DRIP Store. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: [
                                    'Privacy Policy',
                                    'Terms of Service',
                                    'Cookie Policy'
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        className: "text-xs text-white/30 hover:text-white/60 transition-colors font-mono",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/Footer.jsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.jsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Footer.jsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Footer.jsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/schema.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// ============================================================
// lib/schema.js — Drizzle ORM Schema (PostgreSQL)
// ============================================================
const { pgTable, text, integer, real, boolean, timestamp } = __turbopack_context__.r("[externals]/drizzle-orm/pg-core [external] (drizzle-orm/pg-core, cjs, [project]/node_modules/drizzle-orm)");
// === TABEL: PRODUCTS ===
const products = pgTable('products', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    price: real('price').notNull(),
    image: text('image').notNull(),
    stock: integer('stock').notNull().default(0),
    category: text('category').notNull(),
    description: text('description'),
    badge: text('badge'),
    discount: integer('discount').default(0),
    rating: real('rating').default(4.5),
    reviewCount: integer('review_count').default(0),
    isFeatured: boolean('is_featured').default(false),
    createdAt: timestamp('created_at').defaultNow()
});
// === TABEL: CATEGORIES ===
const categories = pgTable('categories', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    color: text('color').notNull(),
    emoji: text('emoji')
});
// === TABEL: TESTIMONIALS ===
const testimonials = pgTable('testimonials', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    handle: text('handle').notNull(),
    avatar: text('avatar'),
    message: text('message').notNull(),
    rating: integer('rating').default(5),
    productBought: text('product_bought')
});
// === TABEL: NEWSLETTER ===
const newsletter = pgTable('newsletter', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    email: text('email').notNull().unique(),
    subscribedAt: timestamp('subscribed_at').defaultNow()
});
module.exports = {
    products,
    categories,
    testimonials,
    newsletter
};
}),
"[project]/lib/db.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// ============================================================
// lib/db.js — Koneksi Database (Neon PostgreSQL)
// ============================================================
const { neon } = __turbopack_context__.r("[externals]/@neondatabase/serverless [external] (@neondatabase/serverless, cjs, [project]/node_modules/@neondatabase/serverless)");
const { drizzle } = __turbopack_context__.r("[externals]/drizzle-orm/neon-http [external] (drizzle-orm/neon-http, cjs, [project]/node_modules/drizzle-orm)");
const schema = __turbopack_context__.r("[project]/lib/schema.js [ssr] (ecmascript)");
let db;
function getDb() {
    if (!db) {
        const sql = neon(process.env.DATABASE_URL);
        db = drizzle(sql, {
            schema
        });
    }
    return db;
}
module.exports = {
    getDb
};
}),
"[project]/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// pages/index.jsx — Landing Page Utama DRIP Store
// Mengintegrasikan semua komponen landing page dengan SSR data
// produk, kategori, dan testimoni dari database via Drizzle ORM.
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductGrid.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollectionsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CollectionsSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialProofSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SocialProofSection.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.jsx [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
async function getServerSideProps() {
    try {
        const { getDb } = __turbopack_context__.r("[project]/lib/db.js [ssr] (ecmascript)");
        const { products, testimonials } = __turbopack_context__.r("[project]/lib/schema.js [ssr] (ecmascript)");
        const db = getDb();
        const allProducts = await db.select().from(products);
        const allTestimonials = await db.select().from(testimonials);
        const serializedProducts = allProducts.map((p)=>({
                ...p,
                createdAt: p.createdAt ? p.createdAt.toISOString() : null
            }));
        return {
            props: {
                products: serializedProducts,
                testimonials: allTestimonials
            }
        };
    } catch (error) {
        return {
            props: {
                products: getDummyProducts(),
                testimonials: []
            }
        };
    }
}
// === FALLBACK DUMMY DATA (jika database belum di-seed) ===
function getDummyProducts() {
    return [
        {
            id: 1,
            name: 'Chrome Heart Oversized Tee',
            price: 389000,
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
            stock: 42,
            category: 'streetwear',
            description: 'Oversized fit dengan print Chrome Heart aesthetic.',
            badge: 'HOT',
            discount: 0,
            rating: 4.8,
            reviewCount: 234,
            isFeatured: true
        },
        {
            id: 2,
            name: 'Y2K Butterfly Crop Top',
            price: 259000,
            image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
            stock: 18,
            category: 'y2k',
            description: 'Crop top dengan embroidery butterfly Y2K style.',
            badge: 'NEW',
            discount: 0,
            rating: 4.9,
            reviewCount: 89,
            isFeatured: true
        },
        {
            id: 3,
            name: 'Vintage Wash Denim Jacket',
            price: 689000,
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
            stock: 7,
            category: 'vintage',
            description: 'Denim jacket dengan acid wash treatment.',
            badge: 'LIMITED',
            discount: 0,
            rating: 4.7,
            reviewCount: 156,
            isFeatured: true
        },
        {
            id: 4,
            name: 'Neon Cargo Pants',
            price: 459000,
            image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
            stock: 25,
            category: 'bold',
            description: 'Cargo pants dengan warna neon electric.',
            badge: 'HOT',
            discount: 15,
            rating: 4.6,
            reviewCount: 178,
            isFeatured: false
        },
        {
            id: 5,
            name: 'Clean Fit Hoodie',
            price: 529000,
            image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
            stock: 60,
            category: 'minimal',
            description: 'Hoodie minimalis dengan material fleece premium.',
            badge: null,
            discount: 0,
            rating: 4.9,
            reviewCount: 412,
            isFeatured: false
        },
        {
            id: 6,
            name: 'Graphic Print Tee "DRIP"',
            price: 219000,
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
            stock: 150,
            category: 'streetwear',
            description: 'Signature DRIP graphic tee dengan bold typography.',
            badge: 'NEW',
            discount: 0,
            rating: 4.5,
            reviewCount: 67,
            isFeatured: false
        },
        {
            id: 7,
            name: 'Sheer Mesh Layer Top',
            price: 199000,
            image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
            stock: 30,
            category: 'y2k',
            description: 'Sheer mesh top untuk layering looks.',
            badge: null,
            discount: 20,
            rating: 4.4,
            reviewCount: 93,
            isFeatured: false
        },
        {
            id: 8,
            name: 'Vintage Band Tee Rework',
            price: 349000,
            image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=80',
            stock: 12,
            category: 'vintage',
            description: 'Reworked vintage band tee dengan custom distressing.',
            badge: 'LIMITED',
            discount: 0,
            rating: 5.0,
            reviewCount: 28,
            isFeatured: true
        },
        {
            id: 9,
            name: 'Wibu anime',
            price: 150000,
            image: "https://images.unsplash.com/photo-1695827163486-b86eac571321?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stock: 20,
            category: "streetwear",
            description: "Deskripsi produk",
            badge: "NEW",
            discount: 0,
            rating: 4.5,
            reviewCount: 0,
            isFeatured: false
        }
    ];
}
function Home({ products, testimonials }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "DRIP. — Your Vibe, Your Style"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Toko fashion Gen Z. Streetwear, Y2K, Vintage & Bold. Find your drip."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: "DRIP. — Your Vibe, Your Style"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: "Toko fashion Gen Z terdepan di Indonesia."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "website"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👕</text></svg>"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#0A0A0A',
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductGrid$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        products: products
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CollectionsSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SocialProofSection$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        testimonials: testimonials
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p.29.g._.js.map