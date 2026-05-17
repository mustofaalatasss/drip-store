// ============================================================
// lib/schema.js — Drizzle ORM Schema
// Mendefinisikan struktur tabel database untuk produk, kategori,
// dan tabel pendukung lainnya menggunakan SQLite via Drizzle ORM.
// ============================================================

const { sqliteTable, text, integer, real } = require('drizzle-orm/sqlite-core');

// === TABEL: PRODUCTS ===
// Menyimpan seluruh data produk baju di toko DRIP
const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  price: real('price').notNull(),
  image: text('image').notNull(),
  stock: integer('stock').notNull().default(0),
  category: text('category').notNull(), // 'streetwear' | 'vintage' | 'y2k' | 'minimal' | 'bold'
  description: text('description'),
  badge: text('badge'), // 'NEW' | 'HOT' | 'LIMITED' | 'SALE' | null
  discount: integer('discount').default(0), // persentase diskon
  rating: real('rating').default(4.5),
  reviewCount: integer('review_count').default(0),
  isFeatured: integer('is_featured', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// === TABEL: CATEGORIES ===
// Kategori koleksi untuk filter produk
const categories = sqliteTable('categories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  color: text('color').notNull(), // warna accent untuk card
  emoji: text('emoji'),
});

// === TABEL: TESTIMONIALS ===
// Testimoni pelanggan untuk landing page
const testimonials = sqliteTable('testimonials', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  handle: text('handle').notNull(), // @username Instagram
  avatar: text('avatar'),
  message: text('message').notNull(),
  rating: integer('rating').default(5),
  productBought: text('product_bought'),
});

// === TABEL: NEWSLETTER ===
// Daftar email subscriber newsletter
const newsletter = sqliteTable('newsletter', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  subscribedAt: integer('subscribed_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

module.exports = { products, categories, testimonials, newsletter };
