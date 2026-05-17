// ============================================================
// components/ProductGrid.jsx — Grid Produk Terbaru
// Menampilkan grid produk 3-4 kolom di desktop, responsive
// ke 1-2 kolom di mobile, dengan filter kategori.
// ============================================================

import { useState } from 'react';
import ProductCard from './ProductCard';

// Kategori filter tabs
const CATEGORIES = ['All', 'Streetwear', 'Y2K', 'Vintage', 'Minimal', 'Bold'];

export default function ProductGrid({ products = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Filter produk berdasarkan kategori aktif
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.toLowerCase() === activeCategory.toLowerCase();
  });

  // Sort produk
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <section id="products" className="py-24 md:py-32" style={{ background: 'var(--bg-900)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === SECTION HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12">
          <div className="flex-1">
            <div className="section-badge mb-4">
              <span>🛍️</span> Latest Drops
            </div>
            <h2
              className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Fresh <span
                style={{
                  background: 'linear-gradient(135deg, #FF2D87, #5B4BFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Fits</span>
              <br />Just Landed.
            </h2>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/40 font-mono uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-neon py-2 px-4 text-sm rounded-xl cursor-pointer w-auto"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <option value="featured" style={{ background: '#1A1A1A' }}>Featured</option>
              <option value="price-low" style={{ background: '#1A1A1A' }}>Price: Low to High</option>
              <option value="price-high" style={{ background: '#1A1A1A' }}>Price: High to Low</option>
              <option value="rating" style={{ background: '#1A1A1A' }}>Top Rated</option>
            </select>
          </div>
        </div>

        {/* === CATEGORY FILTER TABS === */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                background: activeCategory === cat
                  ? 'var(--neon-pink)'
                  : 'rgba(255,255,255,0.05)',
                color: activeCategory === cat ? 'white' : 'rgba(255,255,255,0.5)',
                border: `1px solid ${activeCategory === cat ? 'var(--neon-pink)' : 'rgba(255,255,255,0.08)'}`,
                boxShadow: activeCategory === cat ? '0 0 20px rgba(255, 45, 135, 0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* === PRODUCT GRID === */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                style={{
                  animation: `slideInUp 0.5s ease-out ${index * 0.08}s both`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-24">
            <div className="text-6xl mb-4">👕</div>
            <h3
              className="font-display font-700 text-xl text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              No fits found
            </h3>
            <p className="text-white/40 text-sm">
              Try a different category
            </p>
          </div>
        )}

        {/* === LOAD MORE BUTTON === */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-display font-bold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                fontFamily: 'var(--font-display)',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.03)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.85rem',
              }}
            >
              Load More Drip
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
