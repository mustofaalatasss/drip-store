// ============================================================
// lib/seed.js — Database Seeder
// Mengisi database dengan data dummy produk, kategori, dan
// testimoni untuk preview landing page.
// Jalankan dengan: node lib/seed.js
// ============================================================

const Database = require('better-sqlite3');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const { products, categories, testimonials } = require('./schema');
const path = require('path');

const DB_PATH = path.join(process.cwd(), 'drip-store.db');
const sqlite = new Database(DB_PATH);
sqlite.pragma('journal_mode = WAL');
const db = drizzle(sqlite);

// === DATA DUMMY: CATEGORIES ===
const categoryData = [
  { name: 'Streetwear', slug: 'streetwear', description: 'Urban vibes, street-ready fits', color: '#FF2D87', emoji: '🔥' },
  { name: 'Y2K', slug: 'y2k', description: 'Y2K nostalgia, futuristic throwback', color: '#00F0FF', emoji: '✨' },
  { name: 'Vintage', slug: 'vintage', description: 'Retro classics, timeless drip', color: '#FFE600', emoji: '🎯' },
  { name: 'Minimal', slug: 'minimal', description: 'Clean cuts, quiet luxury', color: '#D4B3FF', emoji: '🫧' },
  { name: 'Bold', slug: 'bold', description: 'Statement pieces, loud energy', color: '#39FF14', emoji: '⚡' },
];

// === DATA DUMMY: PRODUCTS ===
// Menggunakan Unsplash untuk gambar produk mock
const productData = [
  {
    name: 'Chrome Heart Oversized Tee',
    price: 389000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    stock: 42,
    category: 'streetwear',
    description: 'Oversized fit dengan print Chrome Heart aesthetic. Bahan premium 220gsm cotton.',
    badge: 'HOT',
    discount: 0,
    rating: 4.8,
    reviewCount: 234,
    isFeatured: true,
  },
  {
    name: 'Y2K Butterfly Crop Top',
    price: 259000,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    stock: 18,
    category: 'y2k',
    description: 'Crop top dengan embroidery butterfly Y2K style. Cocok untuk festival looks.',
    badge: 'NEW',
    discount: 0,
    rating: 4.9,
    reviewCount: 89,
    isFeatured: true,
  },
  {
    name: 'Vintage Wash Denim Jacket',
    price: 689000,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    stock: 7,
    category: 'vintage',
    description: 'Denim jacket dengan acid wash treatment. Limited pieces, hand-crafted.',
    badge: 'LIMITED',
    discount: 0,
    rating: 4.7,
    reviewCount: 156,
    isFeatured: true,
  },
  {
    name: 'Neon Cargo Pants',
    price: 459000,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    stock: 25,
    category: 'bold',
    description: 'Cargo pants dengan warna neon electric. Multiple pockets, adjustable waist.',
    badge: 'HOT',
    discount: 15,
    rating: 4.6,
    reviewCount: 178,
    isFeatured: false,
  },
  {
    name: 'Clean Fit Hoodie',
    price: 529000,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
    stock: 60,
    category: 'minimal',
    description: 'Hoodie minimalis dengan material fleece premium. Fit yang sempurna untuk daily.',
    badge: null,
    discount: 0,
    rating: 4.9,
    reviewCount: 412,
    isFeatured: false,
  },
  {
    name: 'Graphic Print Tee "DRIP"',
    price: 219000,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
    stock: 150,
    category: 'streetwear',
    description: 'Signature DRIP graphic tee dengan bold typography. Ekspresi diri tanpa batas.',
    badge: 'NEW',
    discount: 0,
    rating: 4.5,
    reviewCount: 67,
    isFeatured: false,
  },
  {
    name: 'Sheer Mesh Layer Top',
    price: 199000,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
    stock: 30,
    category: 'y2k',
    description: 'Sheer mesh top untuk layering looks. Bisa dipakai solo atau sebagai layer.',
    badge: null,
    discount: 20,
    rating: 4.4,
    reviewCount: 93,
    isFeatured: false,
  },
  {
    name: 'Vintage Band Tee Rework',
    price: 349000,
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=80',
    stock: 12,
    category: 'vintage',
    description: 'Reworked vintage band tee dengan custom distressing. Each piece is unique.',
    badge: 'LIMITED',
    discount: 0,
    rating: 5.0,
    reviewCount: 28,
    isFeatured: true,
  },
  {
    name: "Wibu anime",
    price: 150000,
    image: "https://images.unsplash.com/photo-1695827163486-b86eac571321?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stock: 20,
    category: "streetwear", // pilih salah satu
    description: "Deskripsi produk",
    badge: "NEW", // HOT / NEW / LIMITED / SALE / null
    discount: 0,
    rating: 4.5,
    reviewCount: 0,
    isFeatured: false,
  },
  {
    name: "Jacket Denim",
    price: 300000,
    image: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
    stock: 20,
    category: "vintage", // pilih salah satu
    description: "For winter",
    badge: "NEW", // HOT / NEW / LIMITED / SALE / null
    discount: 0,
    rating: 4.5,
    reviewCount: 0,
    isFeatured: false,
  },
];

// === DATA DUMMY: TESTIMONIALS ===
const testimonialData = [
  {
    name: 'Rara Aulia',
    handle: '@rara.drip',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    message: 'Literally obsessed sama kualitasnya! Chrome Heart tee ini udah jadi favorit aku buat hangout. DRIP never miss fr 🔥',
    rating: 5,
    productBought: 'Chrome Heart Oversized Tee',
  },
  {
    name: 'Kevin Santoso',
    handle: '@kev.fits',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    message: 'Vintage Denim Jacket-nya gila banget kualitasnya. Packaging juga rapi, pengiriman cepet. Highly recommend! ✨',
    rating: 5,
    productBought: 'Vintage Wash Denim Jacket',
  },
  {
    name: 'Nadia Fitri',
    handle: '@nadiaftr_',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    message: 'Y2K Butterfly top sempurna banget buat festival kemaren! Banyak yang nanya beli dimana. 10/10 no cap 🦋',
    rating: 5,
    productBought: 'Y2K Butterfly Crop Top',
  },
  {
    name: 'Rizky Pratama',
    handle: '@rizky.ootd',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    message: 'Clean Hoodie-nya emang ga ada duanya. Material tebal tapi ga gerah, warna awet gak luntur. Perfect daily wear!',
    rating: 5,
    productBought: 'Clean Fit Hoodie',
  },
];

// === FUNGSI SEED DATABASE ===
async function seed() {
  console.log('🌱 Seeding database...\n');

  try {
    // Buat tabel jika belum ada (sederhana dengan raw SQL)
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        description TEXT,
        color TEXT NOT NULL,
        emoji TEXT
      );

      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        image TEXT NOT NULL,
        stock INTEGER NOT NULL DEFAULT 0,
        category TEXT NOT NULL,
        description TEXT,
        badge TEXT,
        discount INTEGER DEFAULT 0,
        rating REAL DEFAULT 4.5,
        review_count INTEGER DEFAULT 0,
        is_featured INTEGER DEFAULT 0,
        created_at INTEGER
      );

      CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        handle TEXT NOT NULL,
        avatar TEXT,
        message TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        product_bought TEXT
      );

      CREATE TABLE IF NOT EXISTS newsletter (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        subscribed_at INTEGER
      );
    `);

    // Clear existing data
    sqlite.exec('DELETE FROM testimonials; DELETE FROM products; DELETE FROM categories;');

    // Insert categories
    console.log('📦 Inserting categories...');
    await db.insert(categories).values(categoryData);
    console.log(`   ✓ ${categoryData.length} categories inserted`);

    // Insert products
    console.log('👕 Inserting products...');
    const productsWithTimestamp = productData.map(p => ({
      ...p,
      createdAt: new Date(),
    }));
    await db.insert(products).values(productsWithTimestamp);
    console.log(`   ✓ ${productData.length} products inserted`);

    // Insert testimonials
    console.log('💬 Inserting testimonials...');
    await db.insert(testimonials).values(testimonialData);
    console.log(`   ✓ ${testimonialData.length} testimonials inserted`);

    console.log('\n✅ Database seeded successfully!');
    console.log('🚀 Run `npm run dev` to start the development server');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }

  sqlite.close();
}

seed();
