# 👕 DRIP. — Gen Z Fashion Store

> Toko baju online dengan landing page super modern dan nuansa Gen Z.
> Built with Next.js, TailwindCSS, dan Drizzle ORM + SQLite.

![DRIP Store](https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80)

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | SSR, Routing, API Routes |
| **TailwindCSS** | Utility-first styling |
| **Drizzle ORM** | Type-safe database ORM |
| **SQLite (better-sqlite3)** | Local database |
| **Google Fonts** | Syne + Plus Jakarta Sans |

---

## 📁 Struktur Folder

```
drip-store/
├── components/           # Komponen React reusable
│   ├── Navbar.jsx        # Navigation sticky dengan glass effect
│   ├── HeroSection.jsx   # Hero full-width dengan animasi
│   ├── ProductCard.jsx   # Kartu produk individual
│   ├── ProductGrid.jsx   # Grid produk dengan filter & sort
│   ├── CollectionsSection.jsx # Highlight koleksi/tren
│   ├── SocialProofSection.jsx # Testimoni + Instagram feed
│   └── Footer.jsx        # Footer dengan newsletter signup
│
├── lib/                  # Utilities & database layer
│   ├── schema.js         # Drizzle ORM schema (tabel database)
│   ├── db.js             # Koneksi database singleton
│   └── seed.js           # Seeder data dummy
│
├── pages/                # Next.js pages (SSR routing)
│   ├── _app.jsx          # Root app component
│   ├── index.jsx         # Landing page utama
│   └── api/
│       ├── products.js   # REST API: CRUD produk
│       └── newsletter.js # API: newsletter signup
│
├── styles/
│   └── globals.css       # Global styles + CSS variables
│
├── drizzle/              # Auto-generated migrations
├── drizzle.config.js     # Drizzle Kit config
├── next.config.js        # Next.js config
├── tailwind.config.js    # Tailwind dengan tema Gen Z
└── package.json
```

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Database

```bash
# Buat tabel dan isi dengan data dummy
node lib/seed.js
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🎨 Design System

### Color Palette

| Nama | Hex | Kegunaan |
|------|-----|---------|
| Neon Pink | `#FF2D87` | Primary accent, CTA buttons |
| Electric Blue | `#00F0FF` | Y2K collection accent |
| Electric Violet | `#5B4BFF` | Gradients, secondary |
| Neon Green | `#39FF14` | Bold collection accent |
| Neon Yellow | `#FFE600` | Vintage accent, stats |
| Dark 900 | `#0A0A0A` | Background utama |

### Typography

- **Display Font:** Syne (headings, logo, CTA)
- **Body Font:** Plus Jakarta Sans (body text, paragraphs)
- **Mono Font:** Space Mono (labels, tags, badges)

### Animasi

- Float animation untuk decorative elements
- Pulse neon untuk glow effects
- Marquee untuk trending ticker
- Slide-in-up untuk product cards
- Scale + shadow untuk hover states

---

## 📊 Database Schema

### `products` Table

| Kolom | Tipe | Keterangan |
|-------|------|-----------|
| `id` | INTEGER | Auto-increment primary key |
| `name` | TEXT | Nama produk |
| `price` | REAL | Harga dalam Rupiah |
| `image` | TEXT | URL gambar produk |
| `stock` | INTEGER | Jumlah stok |
| `category` | TEXT | streetwear/y2k/vintage/minimal/bold |
| `description` | TEXT | Deskripsi produk |
| `badge` | TEXT | HOT/NEW/LIMITED/SALE/null |
| `discount` | INTEGER | Persentase diskon (0-100) |
| `rating` | REAL | Rating 1-5 |
| `review_count` | INTEGER | Jumlah review |
| `is_featured` | INTEGER | Boolean (0/1) |
| `created_at` | INTEGER | Unix timestamp |

---

## 🔌 API Endpoints

### Products
- `GET /api/products` — Semua produk
- `GET /api/products?category=streetwear` — Filter by kategori
- `GET /api/products?featured=true` — Featured products only
- `POST /api/products` — Tambah produk baru

#### POST /api/products (Body):
```json
{
  "name": "Nama Produk",
  "price": 299000,
  "image": "https://...",
  "stock": 50,
  "category": "streetwear",
  "description": "Deskripsi produk",
  "badge": "NEW",
  "discount": 0
}
```

### Newsletter
- `POST /api/newsletter` — Subscribe email

---

## 🎯 Fitur Landing Page

1. **Hero Section** — Full-width dengan rotating text animasi, neon glow orbs, floating elements, dan stats social proof
2. **Product Grid** — 4 kolom di desktop, 2 di tablet, 1 di mobile. Filter by kategori, sort by harga/rating
3. **Collections** — 4 koleksi cards dengan hover effects bold: Streetwear, Y2K, Minimal, Bold
4. **Testimoni** — Horizontal scroll cards dengan avatar, rating, dan product tag
5. **Instagram Feed** — Mock grid 6 foto dengan hover overlay likes count
6. **Marquee Ticker** — Animated trending text banner
7. **Newsletter** — Form signup dengan validasi dan success state
8. **Footer** — Quick links, social media icons, copyright

---

## 🛠️ Pengembangan Lanjut

### Tambah Halaman Produk Individual
```bash
# Buat file: pages/products/[id].jsx
# Gunakan getServerSideProps untuk fetch produk by ID
```

### Tambah Authentication
```bash
npm install next-auth
```

### Deploy ke Vercel
```bash
npm install -g vercel
vercel
```

> **Note:** Untuk production, ganti SQLite dengan PostgreSQL/MySQL via Drizzle ORM (hanya perlu update driver di `lib/db.js`)

---

## 📝 Lisensi

MIT © 2025 DRIP Store. Dibuat dengan 🔥 dan banyak neon.
