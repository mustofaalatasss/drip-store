
// ============================================================
// pages/admin.tsx — Halaman Admin DRIP Store
// ============================================================

import { useState, useEffect } from 'react';
import { Product, ProductForm } from '../lib/types';

export async function getServerSideProps() {
    try {
        const { getDb } = require('../lib/db');
        const { products } = require('../lib/schema');
        const db = getDb();
        const allProducts = await db.select().from(products);
        return {
            props: {
                initialProducts: allProducts.map((p: Product) => ({
                    ...p,
                    createdAt: p.createdAt ? p.createdAt.toString() : null,
                })),
            },
        };
    } catch (error) {
        return { props: { initialProducts: [] } };
    }
}

const EMPTY_FORM: ProductForm = {
    name: '', price: '', image: '', stock: '',
    category: 'streetwear', description: '', badge: '', discount: '0',
};

export default function AdminPage({ initialProducts }: { initialProducts: Product[] }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [productList, setProductList] = useState<Product[]>(initialProducts);
    const [form, setForm] = useState<ProductForm>(EMPTY_FORM);
    const [editId, setEditId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [filterKategori, setFilterKategori] = useState<string>('semua');

    const produkTampil = filterKategori === 'semua' ? productList : productList.filter((p) => p.category === filterKategori);
    const totalHarga = produkTampil.reduce((total, p) => total + p.price, 0);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setMessage('✓ Produk berhasil ditambahkan!');
                setProductList([...productList, data.data]);
                setForm(EMPTY_FORM);
            }
        } catch (err) {
            setMessage('✗ Gagal tambah produk');
        }
        setLoading(false);
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Yakin mau hapus produk ini?')) return;
        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) {
                setProductList(productList.filter((p) => p.id !== id));
                setMessage('✓ Produk berhasil dihapus!');
            } else {
                setMessage('✗ Gagal hapus produk');
            }
        } catch (err: unknown) {
            setMessage('✗ Gagal hapus produk');
        }
    };

    const handleEdit = (product: Product) => {
        setEditId(product.id);
        setForm({
            name: product.name,
            price: String(product.price),
            image: product.image,
            stock: String(product.stock),
            category: product.category,
            description: product.description || '',
            badge: product.badge || '',
            discount: String(product.discount || '0'),
        });
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`/api/products/${editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setMessage('✓ Produk berhasil diupdate!');
                setProductList(productList.map((p) => p.id === editId ? { ...p, ...form, price: Number(form.price), stock: Number(form.stock), discount: Number(form.discount) } : p));
                setForm(EMPTY_FORM);
            } else {
                setMessage('✗ Gagal update produk');
            }
        } catch (err: unknown) {
            setMessage('✗ Gagal update produk');
        }
        setLoading(false);
    };

    const handleCancel = () => {
        setEditId(null);
        setForm(EMPTY_FORM);
    };

    if (!isAuthenticated) {
        return (
            <div style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#1A1A1A', padding: '2rem', borderRadius: '12px', width: '300px' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>🔐 Admin Access</h2>
                    <input
                        type="password"
                        placeholder="Jangan macam macam"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white', marginBottom: '1rem' }}
                    />
                    <button
                        onClick={() => { if (password === 'Kamu1234561') { setIsAuthenticated(true); } else { alert('Password salah!'); } }}
                        style={{ width: '100%', padding: '0.75rem', background: '#FF2D87', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ background: '#0A0A0A', minHeight: '100vh', color: 'white', padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>🔧 DRIP Admin Panel</h1>

            {message && (
                <div style={{ background: '#1A1A1A', border: '1px solid #FF2D87', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    {message}
                </div>
            )}

            <div style={{ background: '#1A1A1A', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: '#FF2D87' }}>
                    {editId ? '✏️ Edit Produk' : '➕ Tambah Produk Baru'}
                </h2>
                <form onSubmit={editId ? handleUpdate : handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {[
                            { label: 'Nama Produk', key: 'name', type: 'text' },
                            { label: 'Harga', key: 'price', type: 'number' },
                            { label: 'Link Gambar', key: 'image', type: 'text' },
                            { label: 'Stok', key: 'stock', type: 'number' },
                            { label: 'Deskripsi', key: 'description', type: 'text' },
                            { label: 'Diskon (%)', key: 'discount', type: 'number' },
                        ].map((field) => (
                            <div key={field.key}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#999', fontSize: '0.85rem' }}>{field.label}</label>
                                <input
                                    type={field.type}
                                    value={form[field.key as keyof ProductForm]}
                                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                    required={['name', 'price', 'image', 'stock'].includes(field.key)}
                                    style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }}
                                />
                            </div>
                        ))}
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#999', fontSize: '0.85rem' }}>Kategori</label>
                            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }}>
                                {['streetwear', 'y2k', 'vintage', 'minimal', 'bold'].map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#999', fontSize: '0.85rem' }}>Badge</label>
                            <select value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }}>
                                {['', 'NEW', 'HOT', 'LIMITED', 'SALE'].map((b) => (<option key={b} value={b}>{b || 'Tidak ada'}</option>))}
                            </select>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        <button type="submit" disabled={loading} style={{ padding: '0.75rem 2rem', background: '#FF2D87', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                            {loading ? 'Loading...' : editId ? 'Update Produk' : 'Tambah Produk'}
                        </button>
                        {editId && (
                            <button type="button" onClick={handleCancel} style={{ padding: '0.75rem 2rem', background: '#333', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer' }}>
                                Batal
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div style={{ background: '#1A1A1A', borderRadius: '12px', overflow: 'hidden' }}>
                <h2 style={{ padding: '1.5rem', color: '#FF2D87', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                    <span>📦 Semua Produk ({productList.length})</span>
                    <span style={{ fontSize: '1rem', color: '#00F0FF' }}>Total: Rp{totalHarga.toLocaleString()}</span>
                </h2>
                <div style={{ padding: '1rem 1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['semua', 'streetwear', 'y2k', 'vintage', 'minimal', 'bold'].map((kat) => (
                        <button key={kat} onClick={() => setFilterKategori(kat)} style={{ padding: '0.4rem 1rem', background: filterKategori === kat ? '#FF2D87' : '#333', border: 'none', borderRadius: '20px', color: 'white', cursor: 'pointer', fontWeight: filterKategori === kat ? 'bold' : 'normal' }}>
                            {kat}
                        </button>
                    ))}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#222' }}>
                            {['ID', 'Nama', 'Harga', 'Stok', 'Kategori', 'Badge', 'Aksi'].map((h) => (
                                <th key={h} style={{ padding: '1rem', textAlign: 'left', color: '#999', fontSize: '0.85rem' }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {produkTampil.map((p) => (
                            <tr key={p.id} style={{ borderBottom: '1px solid #222' }}>
                                <td style={{ padding: '1rem', color: '#666' }}>{p.id}</td>
                                <td style={{ padding: '1rem' }}>{p.name}</td>
                                <td style={{ padding: '1rem', color: '#FF2D87' }}>Rp{p.price?.toLocaleString()}</td>
                                <td style={{ padding: '1rem' }}>{p.stock}</td>
                                <td style={{ padding: '1rem', color: '#00F0FF' }}>{p.category}</td>
                                <td style={{ padding: '1rem' }}>{p.badge || '-'}</td>
                                <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button onClick={() => handleEdit(p)} style={{ padding: '0.5rem 1rem', background: '#5B4BFF', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>Edit</button>
                                    <button onClick={() => handleDelete(p.id)} style={{ padding: '0.5rem 1rem', background: '#FF2D87', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer' }}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}