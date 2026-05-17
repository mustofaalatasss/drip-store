// ============================================================
// pages/products/[id].jsx — Halaman Detail Produk
// Menampilkan detail lengkap satu produk
// Akses: localhost:3000/products/1
// ============================================================

import { getDb } from '../../lib/db';
import { products } from '../../lib/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

export async function getServerSideProps({ params }) {
    const db = getDb();
    const result = await db.select().from(products).where(eq(products.id, parseInt(params.id)));

    if (!result[0]) {
        return { notFound: true };
    }

    return {
        props: {
            product: {
                ...result[0],
                createdAt: result[0].createdAt ? result[0].createdAt.toISOString() : null,
            }
        }
    };
}

export default function ProductDetail({ product }) {
    const discountedPrice = product.discount
        ? product.price * (1 - product.discount / 100)
        : product.price;

    return (
        <div style={{ background: '#0A0A0A', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>

            {/* Back button */}
            <div style={{ padding: '1.5rem 2rem' }}>
                <Link href="/" style={{ color: '#FF2D87', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ← Kembali ke Toko
                </Link>
            </div>

            {/* Content */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>

                {/* Gambar */}
                <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', position: 'relative' }}>
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {product.badge && (
                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#FF2D87', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                            {product.badge}
                        </div>
                    )}
                </div>

                {/* Info Produk */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Kategori */}
                    <div style={{ color: '#FF2D87', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {product.category}
                    </div>

                    {/* Nama */}
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1.2 }}>
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#FFE600' }}>★</span>
                        <span style={{ color: '#999', fontSize: '0.9rem' }}>
                            {product.rating} ({product.reviewCount} reviews)
                        </span>
                    </div>

                    {/* Harga */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF2D87' }}>
                            Rp{discountedPrice.toLocaleString('id-ID')}
                        </span>
                        {product.discount > 0 && (
                            <>
                                <span style={{ color: '#666', textDecoration: 'line-through' }}>
                                    Rp{product.price.toLocaleString('id-ID')}
                                </span>
                                <span style={{ background: 'rgba(255,45,135,0.2)', color: '#FF2D87', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                                    -{product.discount}%
                                </span>
                            </>
                        )}
                    </div>

                    {/* Deskripsi */}
                    <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem' }}>
                        {product.description || 'Tidak ada deskripsi'}
                    </p>

                    {/* Stok */}
                    <div style={{ color: product.stock <= 10 ? '#FFE600' : '#39FF14', fontSize: '0.9rem' }}>
                        {product.stock <= 10 ? `⚠️ Stok terbatas: ${product.stock}` : `✓ Stok tersedia: ${product.stock}`}
                    </div>

                    {/* Tombol */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://wa.link/z2ic79"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ flex: 1, padding: '1rem', background: '#25D366', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}
                        >
                            💬 Beli via WhatsApp
                        </a>
                        <button style={{ padding: '1rem', background: '#1A1A1A', border: '1px solid #333', borderRadius: '12px', color: 'white', cursor: 'pointer' }}>
                            ♡
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
}