/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: './lib/schema.js',
  out: './drizzle',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './drip-store.db',
  },
}
