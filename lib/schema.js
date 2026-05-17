// ============================================================
// lib/schema.js — Drizzle ORM Schema (PostgreSQL)
// ============================================================

const { pgTable, text, integer, real, boolean, timestamp } = require('drizzle-orm/pg-core');

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
  createdAt: timestamp('created_at').defaultNow(),
});

// === TABEL: CATEGORIES ===
const categories = pgTable('categories', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  color: text('color').notNull(),
  emoji: text('emoji'),
});

// === TABEL: TESTIMONIALS ===
const testimonials = pgTable('testimonials', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  name: text('name').notNull(),
  handle: text('handle').notNull(),
  avatar: text('avatar'),
  message: text('message').notNull(),
  rating: integer('rating').default(5),
  productBought: text('product_bought'),
});

// === TABEL: NEWSLETTER ===
const newsletter = pgTable('newsletter', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  email: text('email').notNull().unique(),
  subscribedAt: timestamp('subscribed_at').defaultNow(),
});

module.exports = { products, categories, testimonials, newsletter };