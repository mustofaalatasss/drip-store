import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const url = isLogin ? '/api/login' : '/api/register';
        const body = isLogin 
            ? { email: form.email, password: form.password }
            : { name: form.name, email: form.email, password: form.password };

        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            if (data.success) {
                setMessage('✓ ' + data.message);
                localStorage.setItem('user', JSON.stringify(data.user));
                setTimeout(() => router.push('/'), 1500);
            } else {
                setMessage('✗ ' + data.error);
            }
        } catch (err) {
            setMessage('✗ Terjadi kesalahan');
        }
        setLoading(false);
    };

    return (
        <div style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
            <div style={{ background: '#1A1A1A', padding: '2rem', borderRadius: '16px', width: '100%', maxWidth: '400px' }}>
                
                {/* Toggle Login/Register */}
                <div style={{ display: 'flex', marginBottom: '2rem', background: '#222', borderRadius: '8px', padding: '4px' }}>
                    <button onClick={() => setIsLogin(true)} style={{ flex: 1, padding: '0.5rem', background: isLogin ? '#FF2D87' : 'transparent', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
                        Login
                    </button>
                    <button onClick={() => setIsLogin(false)} style={{ flex: 1, padding: '0.5rem', background: !isLogin ? '#FF2D87' : 'transparent', border: 'none', borderRadius: '6px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
                        Register
                    </button>
                </div>

                <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {isLogin ? '👋 Welcome Back!' : '✨ Buat Akun Baru'}
                </h2>

                {message && (
                    <div style={{ padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', background: message.includes('✓') ? 'rgba(57,255,20,0.1)' : 'rgba(255,45,135,0.1)', color: message.includes('✓') ? '#39FF14' : '#FF2D87', fontSize: '0.9rem' }}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Nama</label>
                            <input type="text" placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required={!isLogin} style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
                        </div>
                    )}
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Email</label>
                        <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', color: '#999', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Password</label>
                        <input type="password" placeholder="Min. 6 karakter" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required style={{ width: '100%', padding: '0.75rem', background: '#222', border: '1px solid #333', borderRadius: '8px', color: 'white' }} />
                    </div>
                    <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.75rem', background: '#FF2D87', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                        {loading ? 'Loading...' : isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <Link href="/" style={{ color: '#FF2D87', textDecoration: 'none', fontSize: '0.9rem' }}>← Kembali ke toko</Link>
                </div>
            </div>
        </div>
    );
}