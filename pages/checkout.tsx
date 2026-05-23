import { CheckoutForm } from '../lib/types';
import { useCart } from '../lib/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
    const { cart, totalItems,removeFromCart } = useCart();
    const [form, setForm] = useState<CheckoutForm>({ nama: '', alamat: '', hp: '' });

    const totalHarga = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleOrder = () => {
        if (!form.nama || !form.alamat || !form.hp) {
            alert('Isi semua data dulu ya!');
            return;
        }
        const pesanan = cart.map((item) => `- ${item.name} x${item.quantity} = Rp${(item.price * item.quantity).toLocaleString('id-ID')}`).join('\n');
        const pesan = `Halo, saya mau order:\n\n${pesanan}\n\nTotal: Rp${totalHarga.toLocaleString('id-ID')}\n\nNama: ${form.nama}\nAlamat: ${form.alamat}\nHP: ${form.hp}`;
        window.open(`https://api.whatsapp.com/send?phone=6287868036735`, '_blank');
    };

    if (totalItems === 0) {
        return (
            <div style={{ background: '#0A0A0A', minHeight: '100vh', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '4rem' }}>🛒</div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Keranjang kosong!</h2>
                <Link href="/" style={{ color: '#FF2D87', textDecoration: 'none' }}>← Kembali belanja</Link>
            </div>
        );
    }

    return (
        <div style={{ background: '#0A0A0A', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', padding: '2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>

                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                    <Link href="/" style={{ color: '#FF2D87', textDecoration: 'none', fontSize: '0.9rem' }}>← Kembali belanja</Link>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>🛒 Checkout</h1>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                    {/* List Produk */}
                    <div>
                        <h2 style={{ color: '#FF2D87', marginBottom: '1rem' }}>Pesanan kamu:</h2>
                        {cart.map((item) => (
                            <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', background: '#1A1A1A', padding: '1rem', borderRadius: '12px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.name}</div>
                                    <div style={{ color: '#999', fontSize: '0.8rem' }}>x{item.quantity}</div>
                                    <div style={{ color: '#FF2D87', fontSize: '0.9rem' }}>Rp{(item.price * item.quantity).toLocaleString('id-ID')}</div>
                                </div>
                            </div>
                        ))}
                        <div style={{ borderTop: '1px solid #333', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                            <span>Total</span>
                            <span style={{ color: '#FF2D87' }}>Rp{totalHarga.toLocaleString('id-ID')}</span>
                        </div>
                    </div>

                    {cart.map((item) => (
    <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', background: '#1A1A1A', padding: '1rem', borderRadius: '12px', alignItems: 'center' }}>
        <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.name}</div>
            <div style={{ color: '#999', fontSize: '0.8rem' }}>x{item.quantity}</div>
            <div style={{ color: '#FF2D87', fontSize: '0.9rem' }}>Rp{(item.price * item.quantity).toLocaleString('id-ID')}</div>
        </div>
        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: '1px solid #FF2D87', color: '#FF2D87', borderRadius: '8px', padding: '0.4rem 0.8rem', cursor: 'pointer', fontSize: '0.8rem' }}>
            Hapus
        </button>
    </div>
))}

                    {/* Form */}
                    <div>
                        <h2 style={{ color: '#FF2D87', marginBottom: '1rem' }}>Data pengiriman:</h2>
                        {[
                            { label: 'Nama Lengkap', key: 'nama', placeholder: 'John Doe' },
                            { label: 'Alamat', key: 'alamat', placeholder: 'Jl. Contoh No. 1' },
                            { label: 'Nomor HP', key: 'hp', placeholder: '08xxxxxxxxxx' },
                        ].map((field) => (
                            <div key={field.key} style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#999', fontSize: '0.85rem' }}>{field.label}</label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder}
                                    value={form[field.key]}
                                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', background: '#1A1A1A', border: '1px solid #333', borderRadius: '8px', color: 'white', fontSize: '0.9rem' }}
                                />
                            </div>
                        ))}
                        <button
                            onClick={handleOrder}
                            style={{ width: '100%', padding: '1rem', background: '#25D366', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem' }}
                        >
                            💬 Order via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}