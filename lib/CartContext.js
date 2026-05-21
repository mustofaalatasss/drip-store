
import { createContext, useContext, useState } from 'react';

// 1. Buat "gudang" data
const CartContext = createContext();

// 2. Buat "penjaga gudang" yang menyimpan data keranjang
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Tambah produk ke keranjang
    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                // kalau sudah ada, tambah quantity
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // kalau belum ada, tambah baru
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Hitung total item di keranjang
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

// 3. Buat shortcut buat akses context
export function useCart() {
    return useContext(CartContext);
}