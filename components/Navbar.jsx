// ============================================================
// components/Navbar.jsx — Navigation Bar
// Sticky navbar dengan glass morphism effect, cart icon,
// dan mobile hamburger menu.
// ============================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../lib/CartContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  // Tambah shadow/blur saat scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '#products' },
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Lookbook', href: '#lookbook' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* === LOGO === */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Logo mark */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-800 text-sm"
                style={{ background: 'var(--neon-pink)', boxShadow: '0 0 15px rgba(255, 45, 135, 0.5)' }}
              >
                D
              </div>
            </div>
            <span
              className="font-display font-800 text-xl tracking-tight text-white group-hover:text-gradient-neon transition-all duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              DRIP<span style={{ color: 'var(--neon-pink)' }}>.</span>
            </span>
          </Link>

          {/* === DESKTOP NAV LINKS === */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
                {/* Underline hover effect */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: 'var(--neon-pink)' }}
                />
              </Link>
            ))}
          </div>

          {/* === RIGHT ACTIONS === */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            {/* Cart */}
            <button className="relative flex w-9 h-9 items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {/* Cart count badge */}
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ background: 'var(--neon-pink)', fontSize: '10px' }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* CTA Button (Desktop) */}
            <Link
              href="#products"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-display font-700 text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'var(--neon-pink)',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 0 20px rgba(255, 45, 135, 0.3)',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              Shop Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 w-9 h-9 items-center justify-center"
            >
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* === MOBILE MENU === */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-6 pt-2 flex flex-col gap-1 border-t border-white/5 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#products"
              onClick={() => setMobileOpen(false)}
              className="mt-3 mx-4 py-3 rounded-full text-center text-sm font-bold text-white"
              style={{ background: 'var(--neon-pink)' }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
