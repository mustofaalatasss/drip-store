// ============================================================
// lib/db.js — Koneksi Database (Neon PostgreSQL)
// ============================================================

const { neon } = require('@neondatabase/serverless');
const { drizzle } = require('drizzle-orm/neon-http');
const schema = require('./schema');

let db;

function getDb() {
  if (!db) {
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql, { schema });
  }
  return db;
}

module.exports = { getDb };