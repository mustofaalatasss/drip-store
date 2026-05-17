// ============================================================
// pages/_app.jsx — Root App Component
// Mengatur global styles dan layout wrapper untuk semua halaman.
// ============================================================

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
