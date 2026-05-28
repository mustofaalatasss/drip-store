// ============================================================
// pages/_app.jsx — Root App Component
// Mengatur global styles dan layout wrapper untuk semua halaman.
// ============================================================
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../lib/CartContext';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </SessionProvider>
    );
}