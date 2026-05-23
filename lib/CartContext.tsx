
import { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product } from './types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    totalItems: number;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    totalItems: 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
            const saved = window.localStorage.getItem('drip-cart');
            if (saved) setCart(JSON.parse(saved));
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem('drip-cart', JSON.stringify(cart));
        } catch (err) {
            console.log(err);
        }
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}