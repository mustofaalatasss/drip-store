// ============================================================
// components/HeroSection.jsx — Hero Section Landing Page
// Full-width hero dengan animated background, teks catchy Gen Z,
// CTA animatif, dan floating decoration elements.
// ============================================================

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rotating text untuk hero tagline
  const rotatingWords = ['AUTHENTIC', 'DIFFERENT', 'ICONIC', 'LIMITLESS'];
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setWordVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 50%, #0A0A0A 100%)' }}
    >
      {/* === BACKGROUND EFFECTS === */}

      {/* Gradient orbs (neon glow spots) */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'var(--neon-pink)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'var(--electric)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'var(--neon-blue)' }}
      />

      {/* Grid overlay pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* === FLOATING DECORATION ELEMENTS === */}
      {mounted && (
        <>
          {/* Floating badge — top right */}
          <div
            className="absolute top-28 right-8 md:right-24 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest"
            style={{
              animation: 'float 6s ease-in-out infinite',
              background: 'rgba(255, 45, 135, 0.1)',
              border: '1px solid rgba(255, 45, 135, 0.3)',
              color: 'var(--neon-pink)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            New Drop Weekly
          </div>

          {/* Floating star — left */}
          <div
            className="absolute top-1/3 left-6 md:left-16 text-2xl hidden md:block"
            style={{ animation: 'float 8s ease-in-out infinite 1s' }}
          >
            ✦
          </div>

          {/* Floating circle — bottom left */}
          <div
            className="absolute bottom-32 left-8 md:left-20 w-16 h-16 rounded-full border-2 hidden md:block"
            style={{
              borderColor: 'var(--neon-blue)',
              animation: 'float 7s ease-in-out infinite 0.5s',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
            }}
          />

          {/* Floating pill stat — right */}
          <div
            className="absolute bottom-40 right-6 md:right-20 glass px-4 py-3 rounded-2xl hidden sm:block"
            style={{ animation: 'float 5s ease-in-out infinite 2s' }}
          >
            <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">Happy Customers</div>
            <div
              className="text-2xl font-display font-800"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-pink)' }}
            >
              50K+
            </div>
          </div>
        </>
      )}

      {/* === MAIN CONTENT === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="max-w-5xl">

          {/* Kicker / eyebrow text */}
          <div
            className={`section-badge mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span style={{ color: 'var(--neon-pink)' }}>⚡</span>
            SS25 Collection — Out Now
          </div>

          {/* === MAIN HEADLINE === */}
          <h1
            className={`font-display font-800 leading-none tracking-tight transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {/* Line 1 */}
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-2">
              BE
            </span>

            {/* Line 2 — rotating word with neon gradient */}
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              style={{
                background: 'linear-gradient(135deg, #ff2d2dff 0%, #e5ff00ff 50%, #09f731fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'opacity 0.3s ease',
                opacity: wordVisible ? 1 : 0,
              }}
            >
              {rotatingWords[wordIndex]}
            </span>

            {/* Line 3 */}
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
              WITH DRIP
              <span style={{ color: 'var(--neon-pink)' }}>.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Streetwear, Y2K, Vintage, Bold — temukan gaya yang
            <em className="not-italic" style={{ color: 'var(--neon-pink)' }}> ngobrol langsung </em>
            sama jiwa lo. No boring fits, ever.
          </p>

          {/* === CTA BUTTONS === */}
          <div
            className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Primary CTA */}
            <Link
              href="#products"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-display font-bold text-white overflow-hidden"
              style={{
                background: 'var(--neon-pink)',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 0 30px rgba(255, 45, 135, 0.4)',
                letterSpacing: '0.05em',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
              }}
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%)',
                }}
              />
              <span className="relative">Shop Now</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#collections"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: 'var(--font-display)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              View Lookbook
            </Link>
          </div>

          {/* === SOCIAL PROOF STATS === */}
          <div
            className={`flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '200+', label: 'Unique Styles' },
              { value: '4.9★', label: 'Avg Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-display font-800 text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === SCROLL INDICATOR === */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 uppercase tracking-widest font-mono">Scroll</span>
        <div
          className="w-0.5 h-12"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,45,135,0.8), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
