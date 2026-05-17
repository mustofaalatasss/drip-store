// ============================================================
// components/CollectionsSection.jsx — Highlight Tren & Koleksi
// Cards modern dengan hover effects interaktif, warna bold
// dan cerah: neon pink, electric blue, pastel vibes.
// ============================================================

import Link from 'next/link';

// === DATA KOLEKSI ===
const collections = [
  {
    id: 1,
    name: 'STREET CODEX',
    slug: 'streetwear',
    description: 'Urban streets call for fits yang gak biasa. Bold, raw, dan unapologetic.',
    color: '#FF2D87',
    bgGradient: 'linear-gradient(145deg, #1A0515 0%, #2D0A24 100%)',
    accentColor: 'rgba(255, 45, 135, 0.15)',
    borderColor: 'rgba(255, 45, 135, 0.3)',
    emoji: '🔥',
    tag: 'Most Popular',
    itemCount: 48,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  },
  {
    id: 2,
    name: 'Y2K REVIVE',
    slug: 'y2k',
    description: 'Throwback vibes dengan twist futuristik. 2000s but make it fashion.',
    color: '#00F0FF',
    bgGradient: 'linear-gradient(145deg, #00141A 0%, #001F26 100%)',
    accentColor: 'rgba(0, 240, 255, 0.1)',
    borderColor: 'rgba(0, 240, 255, 0.3)',
    emoji: '✨',
    tag: 'Trending Now',
    itemCount: 32,
    image: 'https://images.unsplash.com/photo-1526720324-48b07e0f5e72?w=600&q=80',
  },
  {
    id: 3,
    name: 'QUIET LUXURY',
    slug: 'minimal',
    description: 'Less noise, more elegance. Clean cuts yang ngomong tanpa teriak.',
    color: '#D4B3FF',
    bgGradient: 'linear-gradient(145deg, #0D0A1A 0%, #160E26 100%)',
    accentColor: 'rgba(212, 179, 255, 0.1)',
    borderColor: 'rgba(212, 179, 255, 0.3)',
    emoji: '🫧',
    tag: 'New Season',
    itemCount: 25,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148e88b32e?w=600&q=80',
  },
  {
    id: 4,
    name: 'BOLD STATEMENT',
    slug: 'bold',
    description: 'Untuk yang berani tampil beda. Warna ekstrem, grafis maksimal.',
    color: '#39FF14',
    bgGradient: 'linear-gradient(145deg, #051400 0%, #0A2400 100%)',
    accentColor: 'rgba(57, 255, 20, 0.08)',
    borderColor: 'rgba(57, 255, 20, 0.3)',
    emoji: '⚡',
    tag: 'Limited Edition',
    itemCount: 19,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-24 md:py-32" style={{ background: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === SECTION HEADER === */}
        <div className="text-center mb-16">
          <div className="section-badge mb-4 mx-auto w-fit">
            <span>🎯</span> Curated Collections
          </div>
          <h2
            className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-none mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Find Your
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00F0FF 0%, #5B4BFF 50%, #FF2D87 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Aesthetic.
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Empat vibes, satu tujuan: bantuin lo nemu identity fashion yang beneran lo banget.
          </p>
        </div>

        {/* === COLLECTIONS GRID === */}
        {/* Layout: 2 kolom di tablet, 4 kolom di desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((col, index) => (
            <Link
              key={col.id}
              href={`#products`}
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer block"
              style={{
                background: col.bgGradient,
                border: `1px solid ${col.borderColor}`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: col.accentColor,
                  boxShadow: `inset 0 0 60px ${col.accentColor}`,
                }}
              />

              {/* === IMAGE AREA === */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 30%, ${col.bgGradient.includes('0D') ? '#0D0A1A' : col.bgGradient.split('100%')[0].split('(')[1].split(',')[1].trim()})`,
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />

                {/* Emoji floating */}
                <div
                  className="absolute top-4 left-4 text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                >
                  {col.emoji}
                </div>

                {/* Tag badge */}
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                  style={{
                    background: `${col.color}20`,
                    border: `1px solid ${col.color}50`,
                    color: col.color,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {col.tag}
                </div>
              </div>

              {/* === CONTENT === */}
              <div className="p-5 relative">
                {/* Item count */}
                <div
                  className="text-xs uppercase tracking-widest mb-2 font-mono"
                  style={{ color: `${col.color}80` }}
                >
                  {col.itemCount} Items
                </div>

                {/* Collection name */}
                <h3
                  className="font-display font-800 text-xl text-white mb-2 leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {col.name}
                </h3>

                {/* Description */}
                <p
                  className="text-xs text-white/50 leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {col.description}
                </p>

                {/* CTA Link */}
                <div
                  className="flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                  style={{ color: col.color, fontFamily: 'var(--font-display)' }}
                >
                  <span>Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${col.color}, transparent)` }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* === TRENDING MARQUEE BANNER === */}
        <div
          className="mt-16 py-4 overflow-hidden rounded-2xl"
          style={{
            background: 'rgba(255, 45, 135, 0.05)',
            border: '1px solid rgba(255, 45, 135, 0.15)',
          }}
        >
          <div
            className="flex gap-0 whitespace-nowrap"
            style={{ animation: 'marquee 20s linear infinite' }}
          >
            {/* Duplikasi 2x untuk loop seamless */}
            {Array(2).fill(null).map((_, i) => (
              <span key={i} className="flex gap-8 items-center">
                {['STREETWEAR DROPS', 'Y2K IS BACK', 'VINTAGE FINDS', 'LIMITED PIECES', 'NEW ARRIVALS', 'GEN Z APPROVED'].map((text) => (
                  <span key={text} className="flex items-center gap-6">
                    <span
                      className="text-sm font-display font-700 uppercase tracking-widest text-white/70"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {text}
                    </span>
                    <span style={{ color: 'var(--neon-pink)' }}>✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
