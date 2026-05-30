import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TestimoniPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({
        message: '',
        rating: 5,
        product_bought: '',
        handle: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Kalau belum login, suruh login dulu
    if (!session) {
        return (
            <div style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
                    <h2 style={{ marginBottom: '1rem' }}>Login dulu untuk kasih testimoni!</h2>
                    <Link href="/login" style={{ color: '#FF2D87', textDecoration: 'none' }}>Login sekarang →</Link>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: session.user.name,
                    handle: form.handle || `@${session.user.name.toLowerCase().replace(' ', '')}`,
                    message: form.message,
                    rating: form.rating,
                    product_bought: form.product_bought,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setMessage('✓ Testimoni berhasil dikirim! Terima kasih.');
                setTimeout(() => router.push('/'), 2000);
            } else {
                setMessage('✗ ' + data.error);
            }
        } catch (err) {
            setMessage('✗ Terjadi kesalahan');
        }
        setLoading(false);
    };

    return (
        <div style={{ background: '#0A0A0A', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ background: '#1A1A1A', padding: '2rem', borderRadius: '16px', width: '100%', maxWidth: '500px' }}>
                <Link href="/" style={{ color: '#FF2D87', textDecoration: 'none', fontSize: '0.9rem' }}>← Kembali</Link>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '1rem 0' }}>💬 Kasih Testimoni</h1>
                <p style={{ color: '#999', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Halo {session.user.name}! Ceritain pengalamanmu belanja di DRIP.</p>

                {message && (
                    <div style={{ padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', background: message.includes('✓') ? 'rgba(57,255,20,0.1)' : 'rgba(255,45,135,0.1)', color: message.includes('✓') ? '#39FF14' : '#FF2D87' }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Rating */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Rating</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setForm({ ...form, rating: star })}
                                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', color: star <= form.rating ? '#FFE600' : '#333' }}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pesan */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Ceritain pengalamanmu</label>
                        <textarea
                            placeholder="Produknya keren banget, pengiriman cepet..."
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                            rows={4}
                            style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white', resize: 'none', fontSize: '0.9rem' }}
                        />
                    </div>

                    {/* Produk yang dibeli */}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Produk yang dibeli (opsional)</label>
                        <input
                            type="text"
                            placeholder="Chrome Heart Oversized Tee"
                            value={form.product_bought}
                            onChange={(e) => setForm({ ...form, product_bought: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }}
                        />
                    </div>

                    {/* Handle Instagram */}
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Instagram handle (opsional)</label>
                        <input
                            type="text"
                            placeholder="@username"
                            value={form.handle}
                            onChange={(e) => setForm({ ...form, handle: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ width: '100%', padding: '0.75rem', background: '#FF2D87', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
                    >
                        {loading ? 'Mengirim...' : 'Kirim Testimoni 🚀'}
                    </button>
                </form>
            </div>
        </div>
    );
}