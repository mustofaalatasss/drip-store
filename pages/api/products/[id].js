import { getDb } from '../../../lib/db';
import { products } from '../../../lib/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
    const db = getDb();
    const { id } = req.query;
    // Proteksi DELETE dan PUT
    if (req.method === 'DELETE' || req.method === 'PUT') {
        const adminPassword = req.headers['x-admin-password'];
        if (adminPassword !== process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, error: 'Unauthorized' });
        }
    }
    // === DELETE: Hapus produk ===
    if (req.method === 'DELETE') {
        await db.delete(products).where(eq(products.id, parseInt(id)));
        return res.status(200).json({ success: true, message: 'Produk dihapus!' });
    }

    // === PUT: Edit produk ===
    if (req.method === 'PUT') {
        const { name, price, stock, badge = 'NONE', description = '', discount = 0, image } = req.body;
        await db.update(products)
            .set({
                name,
                price: parseFloat(price),
                stock: parseInt(stock),
                badge,
                description,
                discount: parseInt(discount),
                image,
            })
            .where(eq(products.id, parseInt(id)));
        return res.status(200).json({ success: true, message: 'Produk diupdate!' });
    }

    return res.status(405).json({ success: false, error: 'Method not allowed' });
}