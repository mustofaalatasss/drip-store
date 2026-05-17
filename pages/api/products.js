// ============================================================
// pages/api/products.js — API Route: CRUD Produk
// Endpoint REST API untuk mengelola produk via Drizzle ORM.
// GET: ambil semua/filter produk
// POST: tambah produk baru
// ============================================================

import { getDb } from '../../lib/db';
import { products } from '../../lib/schema';
import { eq, like } from 'drizzle-orm';

export default async function handler(req, res) {
  const db = getDb();

  try {
    // === GET: Ambil daftar produk ===
    if (req.method === 'GET') {
      const { category, featured, search, limit = 20 } = req.query;

      let query = db.select().from(products);

      // Filter berdasarkan kategori
      if (category && category !== 'all') {
        query = db.select().from(products).where(eq(products.category, category));
      }

      // Filter featured products
      if (featured === 'true') {
        query = db.select().from(products).where(eq(products.isFeatured, true));
      }

      const result = await query;

      // Serialisasi createdAt timestamp
      const serialized = result.map((p) => ({
        ...p,
        createdAt: p.createdAt ? p.createdAt.toISOString() : null,
      }));

      return res.status(200).json({
        success: true,
        data: serialized,
        count: serialized.length,
      });
    }

    // === POST: Tambah produk baru ===
    if (req.method === 'POST') {
      const { name, price, image, stock, category, description, badge, discount } = req.body;

      // Validasi field wajib
      if (!name || !price || !image || !category) {
        return res.status(400).json({
          success: false,
          error: 'Fields name, price, image, dan category wajib diisi',
        });
      }

      const newProduct = await db.insert(products).values({
        name,
        price: parseFloat(price),
        image,
        stock: parseInt(stock) || 0,
        category,
        description,
        badge: badge || null,
        discount: parseInt(discount) || 0,
        createdAt: new Date(),
      }).returning();

      return res.status(201).json({
        success: true,
        data: newProduct[0],
        message: 'Produk berhasil ditambahkan',
      });
    }

    // Method tidak didukung
    return res.status(405).json({ success: false, error: 'Method not allowed' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message,
    });
  }
}
