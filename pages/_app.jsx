// ============================================================
// pages/_app.jsx — Root App Component
// Mengatur global styles dan layout wrapper untuk semua halaman.
// ============================================================
import { CartProvider } from '../lib/CartContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}