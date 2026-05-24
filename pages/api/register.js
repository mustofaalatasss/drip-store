import { getDb } from '../../lib/db';
import { users } from '../../lib/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { name, email, password } = req.body;

    // Validasi input
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, error: 'Semua field wajib diisi!' });
    }

    if (password.length < 6) {
        return res.status(400).json({ success: false, error: 'Password minimal 6 karakter!' });
    }

    try {
        const db = getDb();

        // Cek email sudah terdaftar atau belum
        const existing = await db.select().from(users).where(eq(users.email, email));
        if (existing.length > 0) {
            return res.status(400).json({ success: false, error: 'Email sudah terdaftar!' });
        }

        // Enkripsi password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user baru
        const newUser = await db.insert(users).values({
            name,
            email,
            password: hashedPassword,
            role: 'user',
        }).returning();

        return res.status(201).json({ 
            success: true, 
            message: 'Registrasi berhasil!',
            user: { id: newUser[0].id, name: newUser[0].name, email: newUser[0].email }
        });

    } catch (error) {
        return res.status(500).json({ success: false, error: 'Terjadi kesalahan server' });
    }
}