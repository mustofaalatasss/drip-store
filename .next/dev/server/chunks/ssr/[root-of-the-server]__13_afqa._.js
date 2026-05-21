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
"[project]/pages/admin.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// ============================================================
// pages/admin.jsx — Halaman Admin DRIP Store
// Kelola produk: lihat, tambah, edit, hapus
// Akses di: localhost:3000/admin
// ============================================================
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schema$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schema.js [ssr] (ecmascript)");
;
;
;
;
async function getServerSideProps() {
    try {
        const { getDb } = __turbopack_context__.r("[project]/lib/db.js [ssr] (ecmascript)");
        const { products } = __turbopack_context__.r("[project]/lib/schema.js [ssr] (ecmascript)");
        const db = getDb();
        const allProducts = await db.select().from(products);
        return {
            props: {
                initialProducts: allProducts.map((p)=>({
                        ...p,
                        createdAt: p.createdAt ? p.createdAt.toISOString() : null
                    }))
            }
        };
    } catch (error) {
        return {
            props: {
                initialProducts: []
            }
        };
    }
}
function AdminPage({ initialProducts }) {
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [productList, setProductList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialProducts);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        price: '',
        image: '',
        stock: '',
        category: 'streetwear',
        description: '',
        badge: '',
        discount: '0'
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [filterKategori, setFilterKategori] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('semua');
    const produkTampil = filterKategori === 'semua' ? productList : productList.filter((p)=>p.category === filterKategori);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (message) {
            const timer = setTimeout(()=>{
                setMessage('');
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        message
    ]);
    const totalHarga = produkTampil.reduce((total, p)=>total + p.price, 0);
    // === TAMBAH PRODUK ===
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setMessage('✓ Produk berhasil ditambahkan!');
                setProductList([
                    ...productList,
                    data.data
                ]);
                setForm({
                    name: '',
                    price: '',
                    image: '',
                    stock: '',
                    category: 'streetwear',
                    description: '',
                    badge: '',
                    discount: '0'
                });
            }
        } catch (err) {
            setMessage('✗ Gagal tambah produk');
        }
        setLoading(false);
    };
    // === HAPUS PRODUK ===
    const handleDelete = async (id)=>{
        if (!confirm('Yakin mau hapus produk ini?')) return;
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.success) {
                setProductList(productList.filter((p)=>p.id !== id));
                setMessage('✓ Produk berhasil dihapus!');
            } else {
                setMessage('✗ Gagal hapus produk');
            }
        } catch (err) {
            setMessage('✗ Gagal hapus produk: ' + err.message);
        }
    };
    // === EDIT PRODUK ===
    const handleEdit = (product)=>{
        setEditId(product.id);
        setForm({
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            category: product.category,
            description: product.description || '',
            badge: product.badge || '',
            discount: product.discount || '0'
        });
    };
    const handleUpdate = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`/api/products/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setMessage('✓ Produk berhasil diupdate!');
                setProductList(productList.map((p)=>p.id === editId ? {
                        ...p,
                        ...form
                    } : p));
                setEditId(null);
                setForm({
                    name: '',
                    price: '',
                    image: '',
                    stock: '',
                    category: 'streetwear',
                    description: '',
                    badge: '',
                    discount: '0'
                });
            } else {
                setMessage('✗ Gagal update produk');
            }
        } catch (err) {
            setMessage('✗ Gagal update produk: ' + err.message);
        }
        setLoading(false);
    };
    const handleCancel = ()=>{
        setEditId(null);
        setForm({
            name: '',
            price: '',
            image: '',
            stock: '',
            category: 'streetwear',
            description: '',
            badge: '',
            discount: '0'
        });
    };
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                background: '#0A0A0A',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#1A1A1A',
                    padding: '2rem',
                    borderRadius: '12px',
                    width: '300px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            color: 'white',
                            marginBottom: '1rem'
                        },
                        children: "🔐 Admin Access"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 156,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Jangan macam macam",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        style: {
                            width: '100%',
                            padding: '0.75rem',
                            background: '#222',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            color: 'white',
                            marginBottom: '1rem'
                        }
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 159,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (password === 'Kamu1234561') {
                                setIsAuthenticated(true);
                            } else {
                                alert('Password salah!');
                            }
                        },
                        style: {
                            width: '100%',
                            padding: '0.75rem',
                            background: '#FF2D87',
                            border: 'none',
                            borderRadius: '8px',
                            color: 'white',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        },
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.jsx",
                lineNumber: 155,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/admin.jsx",
            lineNumber: 154,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            background: '#0A0A0A',
            minHeight: '100vh',
            color: 'white',
            padding: '2rem',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem'
                },
                children: "🔧 DRIP Admin Panel"
            }, void 0, false, {
                fileName: "[project]/pages/admin.jsx",
                lineNumber: 185,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#1A1A1A',
                    border: '1px solid #FF2D87',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/pages/admin.jsx",
                lineNumber: 191,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#1A1A1A',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            marginBottom: '1rem',
                            color: '#FF2D87'
                        },
                        children: editId ? '✏️ Edit Produk' : '➕ Tambah Produk Baru'
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 198,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: editId ? handleUpdate : handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem'
                                },
                                children: [
                                    [
                                        {
                                            label: 'Nama Produk',
                                            key: 'name',
                                            type: 'text'
                                        },
                                        {
                                            label: 'Harga',
                                            key: 'price',
                                            type: 'number'
                                        },
                                        {
                                            label: 'Link Gambar',
                                            key: 'image',
                                            type: 'text'
                                        },
                                        {
                                            label: 'Stok',
                                            key: 'stock',
                                            type: 'number'
                                        },
                                        {
                                            label: 'Deskripsi',
                                            key: 'description',
                                            type: 'text'
                                        },
                                        {
                                            label: 'Diskon (%)',
                                            key: 'discount',
                                            type: 'number'
                                        }
                                    ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        marginBottom: '0.5rem',
                                                        color: '#999',
                                                        fontSize: '0.85rem'
                                                    },
                                                    children: field.label
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/admin.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: field.type,
                                                    value: form[field.key],
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            [field.key]: e.target.value
                                                        }),
                                                    required: [
                                                        'name',
                                                        'price',
                                                        'image',
                                                        'stock'
                                                    ].includes(field.key),
                                                    style: {
                                                        width: '100%',
                                                        padding: '0.75rem',
                                                        background: '#222',
                                                        border: '1px solid #333',
                                                        borderRadius: '8px',
                                                        color: 'white'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/admin.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, field.key, true, {
                                            fileName: "[project]/pages/admin.jsx",
                                            lineNumber: 211,
                                            columnNumber: 29
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    color: '#999',
                                                    fontSize: '0.85rem'
                                                },
                                                children: "Kategori"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 227,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                value: form.category,
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        category: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: '#222',
                                                    border: '1px solid #333',
                                                    borderRadius: '8px',
                                                    color: 'white'
                                                },
                                                children: [
                                                    'streetwear',
                                                    'y2k',
                                                    'vintage',
                                                    'minimal',
                                                    'bold'
                                                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: cat,
                                                        children: cat
                                                    }, cat, false, {
                                                        fileName: "[project]/pages/admin.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 230,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.jsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                style: {
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    color: '#999',
                                                    fontSize: '0.85rem'
                                                },
                                                children: "Badge"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                value: form.badge,
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        badge: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    background: '#222',
                                                    border: '1px solid #333',
                                                    borderRadius: '8px',
                                                    color: 'white'
                                                },
                                                children: [
                                                    '',
                                                    'NEW',
                                                    'HOT',
                                                    'LIMITED',
                                                    'SALE'
                                                ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                        value: b,
                                                        children: b || 'Tidak ada'
                                                    }, b, false, {
                                                        fileName: "[project]/pages/admin.jsx",
                                                        lineNumber: 252,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 246,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.jsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '1rem',
                                    display: 'flex',
                                    gap: '1rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        style: {
                                            padding: '0.75rem 2rem',
                                            background: '#FF2D87',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        },
                                        children: loading ? 'Loading...' : editId ? 'Update Produk' : 'Tambah Produk'
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.jsx",
                                        lineNumber: 259,
                                        columnNumber: 25
                                    }, this),
                                    editId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCancel,
                                        style: {
                                            padding: '0.75rem 2rem',
                                            background: '#333',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: 'white',
                                            cursor: 'pointer'
                                        },
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.jsx",
                                        lineNumber: 267,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.jsx",
                lineNumber: 197,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#1A1A1A',
                    borderRadius: '12px',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            padding: '1.5rem',
                            color: '#FF2D87',
                            borderBottom: '1px solid #333',
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: [
                                    "📦 Semua Produk (",
                                    productList.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '1rem',
                                    color: '#00F0FF'
                                },
                                children: [
                                    "Total: Rp",
                                    totalHarga.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 283,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 281,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '1rem 1.5rem',
                            display: 'flex',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                        },
                        children: [
                            'semua',
                            'streetwear',
                            'y2k',
                            'vintage',
                            'minimal',
                            'bold'
                        ].map((kat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilterKategori(kat),
                                style: {
                                    padding: '0.4rem 1rem',
                                    background: filterKategori === kat ? '#FF2D87' : '#333',
                                    border: 'none',
                                    borderRadius: '20px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontWeight: filterKategori === kat ? 'bold' : 'normal'
                                },
                                children: kat
                            }, kat, false, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 289,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 287,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    style: {
                                        background: '#222'
                                    },
                                    children: [
                                        'ID',
                                        'Nama',
                                        'Harga',
                                        'Stok',
                                        'Kategori',
                                        'Badge',
                                        'Aksi'
                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: '1rem',
                                                textAlign: 'left',
                                                color: '#999',
                                                fontSize: '0.85rem'
                                            },
                                            children: h
                                        }, h, false, {
                                            fileName: "[project]/pages/admin.jsx",
                                            lineNumber: 298,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.jsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 295,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                children: produkTampil.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #222'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    color: '#666'
                                                },
                                                children: p.id
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 305,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem'
                                                },
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 306,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    color: '#FF2D87'
                                                },
                                                children: [
                                                    "Rp",
                                                    p.price?.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 307,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem'
                                                },
                                                children: p.stock
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 308,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    color: '#00F0FF'
                                                },
                                                children: p.category
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 309,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem'
                                                },
                                                children: p.badge || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 310,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: '1rem',
                                                    display: 'flex',
                                                    gap: '0.5rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(p),
                                                        style: {
                                                            padding: '0.5rem 1rem',
                                                            background: '#5B4BFF',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            color: 'white',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/admin.jsx",
                                                        lineNumber: 312,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(p.id),
                                                        style: {
                                                            padding: '0.5rem 1rem',
                                                            background: '#FF2D87',
                                                            border: 'none',
                                                            borderRadius: '6px',
                                                            color: 'white',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Hapus"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/admin.jsx",
                                                        lineNumber: 318,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/admin.jsx",
                                                lineNumber: 311,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/pages/admin.jsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.jsx",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.jsx",
                        lineNumber: 294,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.jsx",
                lineNumber: 280,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.jsx",
        lineNumber: 184,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13_afqa._.js.map