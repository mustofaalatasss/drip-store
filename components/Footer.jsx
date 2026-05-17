// ============================================================
// components/Footer.jsx — Footer Minimalis DRIP Store
// Quick links, social media icons, dan newsletter signup form
// dengan aesthetic dark dan neon accent.
// ============================================================

import { useState } from 'react';
import Link from 'next/link';

// === SOCIAL MEDIA LINKS ===
const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.27 8.27 0 0 0 4.84 1.54V6.91a4.85 4.85 0 0 1-1.07-.22z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter/X',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    href: 'https://pinterest.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
];

// === FOOTER LINKS ===
const footerLinks = {
  Shop: [
    { label: 'New Arrivals', href: '#products' },
    { label: 'Streetwear', href: '#products' },
    { label: 'Y2K Collection', href: '#products' },
    { label: 'Vintage', href: '#products' },
    { label: 'Sale', href: '#products' },
  ],
  Info: [
    { label: 'About DRIP', href: '#about' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Sustainability', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Help: [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      }
    } catch {
      // Fallback untuk demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* === NEWSLETTER SECTION === */}
      <div
        className="py-16"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 45, 135, 0.05) 0%, rgba(91, 75, 255, 0.05) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="section-badge mb-4 mx-auto w-fit">
              <span>✉️</span> Newsletter
            </div>
            <h3
              className="font-display font-800 text-3xl md:text-4xl text-white mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Stay in the
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF2D87, #5B4BFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              > loop.</span>
            </h3>
            <p className="text-white/40 text-sm mb-8" style={{ fontFamily: 'var(--font-body)' }}>
              Dapetin early access ke drops terbaru, promo eksklusif, dan style tips langsung ke inbox lo.
            </p>

            {submitted ? (
              <div
                className="flex items-center justify-center gap-3 py-4 px-8 rounded-2xl"
                style={{
                  background: 'rgba(57, 255, 20, 0.1)',
                  border: '1px solid rgba(57, 255, 20, 0.3)',
                }}
              >
                <span style={{ color: '#39FF14' }}>✓</span>
                <span className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  You're in! Welcome to the DRIP fam 🔥
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-neon flex-1"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 px-6 py-4 rounded-2xl font-display font-bold text-sm text-white uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
                  style={{
                    background: 'var(--neon-pink)',
                    fontFamily: 'var(--font-display)',
                    boxShadow: '0 0 20px rgba(255, 45, 135, 0.3)',
                  }}
                >
                  {loading ? '...' : 'Subscribe'}
                </button>
              </form>
            )}

            <p className="text-white/20 text-xs mt-4 font-mono">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* === MAIN FOOTER CONTENT === */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* === BRAND COLUMN === */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-800 text-sm text-white"
                  style={{ background: 'var(--neon-pink)' }}
                >
                  D
                </div>
                <span
                  className="font-display font-800 text-xl text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  DRIP<span style={{ color: 'var(--neon-pink)' }}>.</span>
                </span>
              </div>

              <p
                className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Toko fashion Gen Z yang nggak pernah bikin bosan. Dari streetwear sampai Y2K, kami ada buat ekspresiin kamu.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* === LINK COLUMNS === */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4
                  className="font-display font-700 text-white text-sm mb-4 uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-white/30 font-mono"
            >
              © 2025 DRIP Store. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
