// ============================================================
// lib/db.js — Koneksi Database
// Membuat dan mengekspor instance Drizzle ORM yang terhubung
// ke database SQLite lokal via better-sqlite3.
// ============================================================

const Database = require('better-sqlite3');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const schema = require('./schema');
const path = require('path');

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
    
    db = drizzle(sqlite, { schema });
  }
  return db;
}

module.exports = { getDb };
