module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/schema.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

// ============================================================
// lib/schema.js — Drizzle ORM Schema
// Mendefinisikan struktur tabel database untuk produk, kategori,
// dan tabel pendukung lainnya menggunakan SQLite via Drizzle ORM.
// ============================================================
const { sqliteTable, text, integer, real } = __turbopack_context__.r("[externals]/drizzle-orm/sqlite-core [external] (drizzle-orm/sqlite-core, cjs, [project]/node_modules/drizzle-orm)");
// === TABEL: PRODUCTS ===
// Menyimpan seluruh data produk baju di toko DRIP
const products = sqliteTable('products', {
    id: integer('id').primaryKey({
        autoIncrement: true
    }),
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
    isFeatured: integer('is_featured', {
        mode: 'boolean'
    }).default(false),
    createdAt: integer('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
// === TABEL: CATEGORIES ===
// Kategori koleksi untuk filter produk
const categories = sqliteTable('categories', {
    id: integer('id').primaryKey({
        autoIncrement: true
    }),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    description: text('description'),
    color: text('color').notNull(),
    emoji: text('emoji')
});
// === TABEL: TESTIMONIALS ===
// Testimoni pelanggan untuk landing page
const testimonials = sqliteTable('testimonials', {
    id: integer('id').primaryKey({
        autoIncrement: true
    }),
    name: text('name').notNull(),
    handle: text('handle').notNull(),
    avatar: text('avatar'),
    message: text('message').notNull(),
    rating: integer('rating').default(5),
    productBought: text('product_bought')
});
// === TABEL: NEWSLETTER ===
// Daftar email subscriber newsletter
const newsletter = sqliteTable('newsletter', {
    id: integer('id').primaryKey({
        autoIncrement: true
    }),
    email: text('email').notNull().unique(),
    subscribedAt: integer('subscribed_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
module.exports = {
    products,
    categories,
    testimonials,
    newsletter
};
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/db.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

// ============================================================
// lib/db.js — Koneksi Database
// Membuat dan mengekspor instance Drizzle ORM yang terhubung
// ke database SQLite lokal via better-sqlite3.
// ============================================================
const Database = __turbopack_context__.r("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
const { drizzle } = __turbopack_context__.r("[externals]/drizzle-orm/better-sqlite3 [external] (drizzle-orm/better-sqlite3, cjs, [project]/node_modules/drizzle-orm)");
const schema = __turbopack_context__.r("[project]/lib/schema.js [api] (ecmascript)");
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
// Lokasi file database SQLite
const DB_PATH = path.join(process.cwd(), 'drip-store.db');
// === SINGLETON PATTERN ===
// Gunakan satu instance database untuk menghindari multiple connections
let db;
function getDb() {
    if (!db) {
        const sqlite = new Database(DB_PATH);
        // Aktifkan WAL mode untuk performa lebih baik
        sqlite.pragma('journal_mode = WAL');
        sqlite.pragma('foreign_keys = ON');
        db = drizzle(sqlite, {
            schema
        });
    }
    return db;
}
module.exports = {
    getDb
};
}),
"[project]/pages/api/products/[id].js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__ = __turbopack_context__.i("[externals]/drizzle-orm [external] (drizzle-orm, esm_import, [project]/node_modules/drizzle-orm)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function handler(req, res) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["getDb"])();
    const { id } = req.query;
    // === DELETE: Hapus produk ===
    if (req.method === 'DELETE') {
        await db.delete(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$api$5d$__$28$ecmascript$29$__["products"]).where((0, __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$api$5d$__$28$ecmascript$29$__["products"].id, parseInt(id)));
        return res.status(200).json({
            success: true,
            message: 'Produk dihapus!'
        });
    }
    // === PUT: Edit produk ===
    if (req.method === 'PUT') {
        const { name, price, stock, badge, description, discount, image } = req.body;
        await db.update(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$api$5d$__$28$ecmascript$29$__["products"]).set({
            name,
            price: parseFloat(price),
            stock: parseInt(stock),
            badge,
            description,
            discount: parseInt(discount),
            image
        }).where((0, __TURBOPACK__imported__module__$5b$externals$5d2f$drizzle$2d$orm__$5b$external$5d$__$28$drizzle$2d$orm$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$api$5d$__$28$ecmascript$29$__["products"].id, parseInt(id)));
        return res.status(200).json({
            success: true,
            message: 'Produk diupdate!'
        });
    }
    return res.status(405).json({
        success: false,
        error: 'Method not allowed'
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0s.fdk0._.js.map