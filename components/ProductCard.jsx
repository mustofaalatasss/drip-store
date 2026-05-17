// ============================================================
// components/ProductCard.jsx — Kartu Produk Individual
// Menampilkan gambar, nama, harga, badge, rating, dan tombol
// add to cart dengan hover effects yang interaktif.
// ============================================================

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Helper: format harga ke Rupiah
export function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

// === BADGE COLORS ===
const badgeConfig = {
  HOT: { bg: 'rgba(255, 45, 135, 0.9)', label: '🔥 HOT' },
  NEW: { bg: 'rgba(57, 255, 20, 0.9)', label: '✨ NEW' },
  LIMITED: { bg: 'rgba(255, 230, 0, 0.9)', label: '⚡ LIMITED' },
  SALE: { bg: 'rgba(91, 75, 255, 0.9)', label: '🏷️ SALE' },
};

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Link href={`/products/${product.id}`} className="product-card group" style={{ textDecoration: 'none' }}>
      {/* === IMAGE CONTAINER === */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* === BADGE === */}
        {product.badge && badgeConfig[product.badge] && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wide"
            style={{ background: badgeConfig[product.badge].bg }}
          >
            {badgeConfig[product.badge].label}
          </div>
        )}

        {/* === WISHLIST BUTTON === */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <svg
            width="14" height="14"
            viewBox="0 0 24 24"
            fill={isWishlisted ? '#FF2D87' : 'none'}
            stroke={isWishlisted ? '#FF2D87' : 'white'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* === QUICK ADD BUTTON (appears on hover) === */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          style={{
            background: addedToCart
              ? 'rgba(57, 255, 20, 0.9)'
              : 'var(--neon-pink)',
            backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.08em',
          }}
        >
          {addedToCart ? '✓ Added!' : '+ Add to Cart'}
        </button>

        {/* === STOCK WARNING === */}
        {product.stock <= 10 && product.stock > 0 && (
          <div className="absolute bottom-16 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-yellow-400 font-mono">
              Only {product.stock} left!
            </span>
          </div>
        )}
      </div>

      {/* === PRODUCT INFO === */}
      <div className="p-4">
        {/* Category tag */}
        <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--neon-pink)' }}>
          {product.category}
        </div>

        {/* Product name */}
        <h3
          className="font-semibold text-white text-sm leading-tight mb-2 line-clamp-2 group-hover:text-white/80 transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-xs text-white/50 font-mono">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span
            className="font-display font-800 text-base"
            style={{
              fontFamily: 'var(--font-display)',
              color: product.discount ? 'var(--neon-pink)' : 'white',
            }}
          >
            {formatPrice(discountedPrice)}
          </span>
          {product.discount > 0 && (
            <>
              <span className="text-xs text-white/30 line-through font-mono">
                {formatPrice(product.price)}
              </span>
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded-md"
                style={{ background: 'rgba(255, 45, 135, 0.2)', color: 'var(--neon-pink)' }}
              >
                -{product.discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
