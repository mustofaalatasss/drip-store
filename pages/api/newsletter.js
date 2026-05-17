// ============================================================
// pages/api/newsletter.js — API Route: Newsletter Signup
// Menerima email subscriber dan menyimpan ke database.
// ============================================================

import { getDb } from '../../lib/db';
import { newsletter } from '../../lib/schema';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validasi email
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Email tidak valid' });
  }

  try {
    const db = getDb();

    // Simpan email subscriber
    await db.insert(newsletter).values({
      email: email.toLowerCase().trim(),
      subscribedAt: new Date(),
    });

    return res.status(201).json({
      success: true,
      message: 'Berhasil subscribe newsletter DRIP!',
    });

  } catch (error) {
    // Email sudah terdaftar (UNIQUE constraint)
    if (error.message?.includes('UNIQUE')) {
      return res.status(409).json({
        success: false,
        error: 'Email sudah terdaftar di newsletter kami',
      });
    }

    console.error('Newsletter API Error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
