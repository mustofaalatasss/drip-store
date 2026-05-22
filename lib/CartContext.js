
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Load cart dari localStorage saat pertama buka
    useEffect(() => {
        try {
            const saved = window.localStorage.getItem('drip-cart');
            if (saved) setCart(JSON.parse(saved));
        } catch (err) {
            console.log(err);
        }
    }, []);

    // Simpan cart ke localStorage setiap berubah
    useEffect(() => {
        try {
            window.localStorage.setItem('drip-cart', JSON.stringify(cart));
        } catch (err) {
            console.log(err);
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
};

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems,removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}