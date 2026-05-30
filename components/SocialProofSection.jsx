// ============================================================
// components/SocialProofSection.jsx — Testimoni & Instagram Feed
// Testimoni pendek dari pelanggan nyata + mock Instagram feed
// dengan grid photo style yang aesthetic dan interaktif.
// ============================================================

// === MOCK INSTAGRAM POSTS ===
// Di produksi nyata, ini akan di-fetch dari Instagram API
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function SocialProofSection({ testimonials = [] }) {
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ message: '', rating: 5, product_bought: '', handle: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: session.user.name,
          handle: form.handle || `@${session.user.name.toLowerCase().replace(' ', '')}`,
          message: form.message,
          rating: form.rating,
          product_bought: form.product_bought,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('✓ Testimoni berhasil dikirim!');
        setTimeout(() => setShowForm(false), 2000);
      } else {
        setMessage('✗ ' + data.error);
      }
    } catch (err) {
      setMessage('✗ Terjadi kesalahan');
    }
    setLoading(false);
  };

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
      likes: 2847,
      handle: '@rara.drip',
      caption: 'new drip just landed 🔥',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80',
      likes: 1923,
      handle: '@kev.fits',
      caption: 'vintage mode activated ✨',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
      likes: 3401,
      handle: '@nadiaftr_',
      caption: 'y2k era is forever 🦋',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
      likes: 1654,
      handle: '@rizky.ootd',
      caption: 'minimal is the new black 🫧',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
      likes: 4129,
      handle: '@drip.official',
      caption: 'ss25 campaign 💥',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1548123378-bde4eca81d2d?w=400&q=80',
      likes: 2201,
      handle: '@style.gen',
      caption: 'bold never gets old ⚡',
    },
  ];

  // === STAR RATING COMPONENT ===
  function StarRating({ rating }) {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-white/20'} style={{ fontSize: '14px' }}>
            ★
          </span>
        ))}
      </div>
    );
  }

  // === TESTIMONIAL CARD ===
  function TestimonialCard({ testimonial }) {
    return (
      <div
        className="flex-shrink-0 w-72 md:w-80 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2"
        style={{
          background: 'var(--bg-700)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Quote icon */}
        <div
          className="text-3xl font-display font-800 mb-4 leading-none"
          style={{ color: 'var(--neon-pink)', fontFamily: 'var(--font-display)' }}
        >
          "
        </div>

        {/* Message */}
        <p
          className="text-white/80 text-sm leading-relaxed mb-5"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {testimonial.message}
        </p>

        {/* Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Product tag */}
        {testimonial.productBought && (
          <div
            className="mt-3 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full w-fit"
            style={{
              background: 'rgba(255, 45, 135, 0.1)',
              border: '1px solid rgba(255, 45, 135, 0.2)',
              color: 'var(--neon-pink)',
            }}
          >
            Bought: {testimonial.productBought}
          </div>
        )}

        {/* User info */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
          {testimonial.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover"
              style={{ border: '2px solid rgba(255, 45, 135, 0.4)' }}
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: 'var(--neon-pink)' }}
            >
              {testimonial.name[0]}
            </div>
          )}
          <div>
            <div className="text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
              {testimonial.name}
            </div>
            <div className="text-white/40 text-xs font-mono">{testimonial.handle}</div>
          </div>
          {/* Verified badge */}
          <div className="ml-auto">
            <span className="text-blue-400 text-sm">✓</span>
          </div>
        </div>
      </div>
    );
  }


  // Gunakan data dari props atau fallback ke mock data
  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    {
      id: 1,
      name: 'Rara Aulia',
      handle: '@rara.drip',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      message: 'Literally obsessed sama kualitasnya! Chrome Heart tee ini udah jadi favorit aku buat hangout. DRIP never miss fr 🔥',
      rating: 5,
      productBought: 'Chrome Heart Oversized Tee',
    },
    {
      id: 2,
      name: 'Kevin Santoso',
      handle: '@kev.fits',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      message: 'Vintage Denim Jacket-nya gila banget kualitasnya. Packaging juga rapi, pengiriman cepet. Highly recommend! ✨',
      rating: 5,
      productBought: 'Vintage Wash Denim Jacket',
    },
    {
      id: 3,
      name: 'Nadia Fitri',
      handle: '@nadiaftr_',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      message: 'Y2K Butterfly top sempurna banget buat festival kemaren! Banyak yang nanya beli dimana. 10/10 no cap 🦋',
      rating: 5,
      productBought: 'Y2K Butterfly Crop Top',
    },
    {
      id: 4,
      name: 'Rizky Pratama',
      handle: '@rizky.ootd',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      message: 'Clean Hoodie-nya emang ga ada duanya. Material tebal tapi ga gerah. Perfect daily wear!',
      rating: 5,
      productBought: 'Clean Fit Hoodie',
    },
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === TESTIMONIALS === */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10">
            <div className="flex-1">
              <div className="section-badge mb-4">
                <span>💬</span> Real Reviews
              </div>
              <h2
                className="font-display font-800 text-4xl md:text-5xl text-white leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Drip
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFE600, #FF2D87)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Don't Lie.
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div
                  className="font-display font-800 text-3xl"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-yellow)' }}
                >
                  4.9/5
                </div>
                <div className="text-xs text-white/40 font-mono">Based on 1,200+ reviews</div>
              </div>
              <StarRating rating={5} />
              {session && (
                <button
                  onClick={() => setShowForm(true)}
                  style={{ padding: '0.5rem 1rem', background: '#FF2D87', border: 'none', borderRadius: '20px', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  + Tulis Testimoni
                </button>
              )}
            </div>
          </div>

          {/* Horizontal scroll testimonials */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {displayTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>

        {/* === INSTAGRAM FEED === */}
        <div>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex-1">
              <div className="section-badge mb-3">
                <span>📸</span> @drip.official
              </div>
              <h2
                className="font-display font-800 text-3xl md:text-4xl text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Tag us for a
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF, #5B4BFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                > feature!
                </span>
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #FCAF45)',
                fontFamily: 'var(--font-display)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @drip.official
            </a>
          </div>

          {/* Instagram Grid - 3x2 */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl aspect-square block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-1">
                  <span className="text-white text-sm font-bold">❤️ {post.likes.toLocaleString()}</span>
                  <span className="text-white/70 text-xs font-mono">{post.handle}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Hashtag */}
          <div className="text-center mt-6">
            <span
              className="text-sm font-mono"
              style={{ color: 'var(--neon-pink)' }}
            >
              #DRIPxME · #DRIPStore · #GenZFashion · #StreetDRIP
            </span>
          </div>
        </div>
      </div>
      {/* POPUP FORM TESTIMONI */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, padding: '1rem' }}>
          <div style={{ background: '#1A1A1A', padding: '2rem', borderRadius: '16px', width: '100%', maxWidth: '500px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.3rem' }}>💬 Tulis Testimoni</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1.5rem' }}>×</button>
            </div>

            {message && (
              <div style={{ padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', background: message.includes('✓') ? 'rgba(57,255,20,0.1)' : 'rgba(255,45,135,0.1)', color: message.includes('✓') ? '#39FF14' : '#FF2D87' }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Rating */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Rating</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setForm({ ...form, rating: star })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: star <= form.rating ? '#FFE600' : '#333' }}>
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Pesan */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Ceritain pengalamanmu</label>
                <textarea placeholder="Produknya keren banget..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4}
                  style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white', resize: 'none' }} />
              </div>

              {/* Produk */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Produk yang dibeli (opsional)</label>
                <input type="text" placeholder="Chrome Heart Oversized Tee" value={form.product_bought} onChange={(e) => setForm({ ...form, product_bought: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
              </div>

              {/* Handle */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Instagram handle (opsional)</label>
                <input type="text" placeholder="@username" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
              </div>

              <button type="submit" disabled={loading}
                style={{ width: '100%', padding: '0.75rem', background: '#FF2D87', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                {loading ? 'Mengirim...' : 'Kirim Testimoni 🚀'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
