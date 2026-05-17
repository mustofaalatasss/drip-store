/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // === COLOR PALETTE - Gen Z Aesthetic ===
      colors: {
        neon: {
          neon: {
            pink: 'var(--neon-pink)',
            blue: 'var(--neon-blue)',
            yellow: 'var(--neon-yellow)',
            green: 'var(--neon-green)',
          },
          pastel: {
            pink: 'var(--pastel-pink)',
            blue: 'var(--pastel-blue)',
            purple: 'var(--pastel-purple)',
            peach: '#FFD4B3',
          },
        },
        dark: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
        },
        // Electric accent
        electric: '#5B4BFF',
      },
      // === FONTS ===
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      // === ANIMATIONS ===
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 20px #FF2D87, 0 0 40px #FF2D87' },
          '50%': { boxShadow: '0 0 40px #FF2D87, 0 0 80px #FF2D87' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      // === BACKGROUND GRADIENTS ===
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #FF2D87 0%, #5B4BFF 50%, #00F0FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
        'gradient-card': 'linear-gradient(145deg, #1A1A1A 0%, #222222 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A0A0A 0%, #1A0A2E 50%, #0A0A0A 100%)',
      },
      // === BORDER RADIUS ===
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
