// ============================================================
// pages/_app.jsx — Root App Component
// Mengatur global styles dan layout wrapper untuk semua halaman.
// ============================================================
import { CartProvider } from '../lib/CartContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}