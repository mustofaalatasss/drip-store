import { getDb } from '../../lib/db';
import { testimonials } from '../../lib/schema';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, handle, message, rating, product_bought } = req.body;

    if (!name || !message || !rating) {
        return res.status(400).json({ success: false, error: 'Nama, pesan, dan rating wajib diisi!' });
    }

    try {
        const db = getDb();
        await db.insert(testimonials).values({
            name,
            handle: handle || '',
            avatar: '',
            message,
            rating: parseInt(rating),
            productBought: product_bought || '',
        });

        return res.status(200).json({ success: true, message: 'Testimoni berhasil dikirim!' });
    } catch (error) {
        return res.status(500).json({ success: false, error: 'Gagal simpan testimoni' });
    }
}