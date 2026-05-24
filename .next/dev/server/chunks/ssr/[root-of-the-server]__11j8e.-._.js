module.exports = [
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
// === TABEL: USERS ===
const users = pgTable('users', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    role: text('role').default('user'),
    createdAt: timestamp('created_at').defaultNow()
});
module.exports = {
    products,
    categories,
    testimonials,
    newsletter,
    users
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
"[project]/pages/products/[id].jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ProductDetail,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// pages/products/[id].jsx — Halaman Detail Produk
// Menampilkan detail lengkap satu produk
// Akses: localhost:3000/products/1
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__ = __turbopack_context__.i("[externals]/drizzle-orm [external] (drizzle-orm, esm_import, [project]/node_modules/drizzle-orm)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useLocalStorage.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
async function getServerSideProps({ params }) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getDb"])();
    const result = await db.select().from(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["products"]).where((0, __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["products"].id, parseInt(params.id)));
    if (!result[0]) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            product: {
                ...result[0],
                createdAt: result[0].createdAt ? result[0].createdAt.toISOString() : null
            }
        }
    };
}
function ProductDetail({ product }) {
    const discountedPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useLocalStorage"])(`wishlist-${product.id}`, false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            background: '#0A0A0A',
            minHeight: '100vh',
            color: 'white',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '1.5rem 2rem'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    style: {
                        color: '#FF2D87',
                        textDecoration: 'none',
                        fontSize: '0.9rem'
                    },
                    children: "← Kembali ke Toko"
                }, void 0, false, {
                    fileName: "[project]/pages/products/[id].jsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/products/[id].jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            borderRadius: '16px',
                            overflow: 'hidden',
                            aspectRatio: '3/4',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: product.image,
                                alt: product.name,
                                style: {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '1rem',
                                    left: '1rem',
                                    background: '#FF2D87',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '999px',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold'
                                },
                                children: product.badge
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/products/[id].jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#FF2D87',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                },
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#FFE600'
                                        },
                                        children: "★"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/products/[id].jsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#999',
                                            fontSize: '0.9rem'
                                        },
                                        children: [
                                            product.rating,
                                            " (",
                                            product.reviewCount,
                                            " reviews)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/products/[id].jsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            color: '#FF2D87'
                                        },
                                        children: [
                                            "Rp",
                                            discountedPrice.toLocaleString('id-ID')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/products/[id].jsx",
                                        lineNumber: 94,
                                        columnNumber: 25
                                    }, this),
                                    product.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#666',
                                                    textDecoration: 'line-through'
                                                },
                                                children: [
                                                    "Rp",
                                                    product.price.toLocaleString('id-ID')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/products/[id].jsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: 'rgba(255,45,135,0.2)',
                                                    color: '#FF2D87',
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.8rem'
                                                },
                                                children: [
                                                    "-",
                                                    product.discount,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/products/[id].jsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#999',
                                    lineHeight: 1.8,
                                    fontSize: '0.95rem'
                                },
                                children: product.description || 'Tidak ada deskripsi'
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    color: product.stock <= 10 ? '#FFE600' : '#39FF14',
                                    fontSize: '0.9rem'
                                },
                                children: product.stock <= 10 ? `⚠️ Stok terbatas: ${product.stock}` : `✓ Stok tersedia: ${product.stock}`
                            }, void 0, false, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                        href: "https://wa.link/z2ic79",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            flex: 1,
                                            padding: '1rem',
                                            background: '#25D366',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            textAlign: 'center'
                                        },
                                        children: "💬 Beli via WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/products/[id].jsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsWishlisted(!isWishlisted),
                                        style: {
                                            padding: '1rem',
                                            background: '#1A1A1A',
                                            border: '1px solid #333',
                                            borderRadius: '12px',
                                            color: mounted && isWishlisted ? '#FF2D87' : 'white',
                                            cursor: 'pointer',
                                            fontSize: '1.2rem'
                                        },
                                        children: mounted && isWishlisted ? '♥' : '♡'
                                    }, void 0, false, {
                                        fileName: "[project]/pages/products/[id].jsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/products/[id].jsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/products/[id].jsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/products/[id].jsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/products/[id].jsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11j8e.-._.js.map