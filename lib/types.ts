
// ============================================================
// lib/types.ts — Type definitions untuk Drip Store
// ============================================================

// Tipe data Produk
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
    category: string;
    description?: string;
    badge?: string;
    discount?: number ;
    rating?: number;
    reviewCount?: number;
    isFeatured?: boolean;
    createdAt?: string | null;
}

// Tipe data Cart Item
export interface CartItem extends Product {
    quantity: number;
}

// Tipe data Form Admin
export interface ProductForm {
    name: string;
    price: string;
    image: string;
    stock: string;
    category: string;
    description: string;
    badge: string;
    discount: string;
}

// Tipe data Form Checkout
export interface CheckoutForm {
    nama: string;
    alamat: string;
    hp: string;
}