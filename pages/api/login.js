import { getDb } from '../../lib/db';
import { users } from '../../lib/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Email dan password wajib diisi!' });
    }

    try {
        const db = getDb();

        // Cari user berdasarkan email
        const result = await db.select().from(users).where(eq(users.email, email));
        if (result.length === 0) {
            return res.status(400).json({ success: false, error: 'Email tidak terdaftar!' });
        }

        const user = result[0];

        // Cek password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ success: false, error: 'Password salah!' });
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Login berhasil!',
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        });

    } catch (error) {
        return res.status(500).json({ success: false, error: 'Terjadi kesalahan server' });
    }
}