// ============================================================
// pages/index.jsx — Landing Page Utama DRIP Store
// Mengintegrasikan semua komponen landing page dengan SSR data
// produk, kategori, dan testimoni dari database via Drizzle ORM.
// ============================================================

import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CollectionsSection from '../components/CollectionsSection';
import SocialProofSection from '../components/SocialProofSection';
import Footer from '../components/Footer';

// === SSR: Ambil data dari database via Drizzle ORM ===
// === SSR: Langsung pakai Dummy Data karena DB dimatikan sementara ===
export async function getServerSideProps() {
  try {
    const { getDb } = require('../lib/db');
    const { products, testimonials } = require('../lib/schema');
    const db = getDb();

    const allProducts = await db.select().from(products);
    const allTestimonials = await db.select().from(testimonials);

    const serializedProducts = allProducts.map((p) => ({
      ...p,
      createdAt: p.createdAt ? p.createdAt.toISOString() : null,
    }));

    return {
      props: {
        products: serializedProducts,
        testimonials: allTestimonials,
      },
    };
  } catch (error) {
    return {
      props: {
        products: getDummyProducts(),
        testimonials: [],
      },
    };
  }
}


// === FALLBACK DUMMY DATA (jika database belum di-seed) ===
function getDummyProducts() {
  return [
    {
      id: 1,
      name: 'Chrome Heart Oversized Tee',
      price: 389000,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      stock: 42,
      category: 'streetwear',
      description: 'Oversized fit dengan print Chrome Heart aesthetic.',
      badge: 'HOT',
      discount: 0,
      rating: 4.8,
      reviewCount: 234,
      isFeatured: true,
    },
    {
      id: 2,
      name: 'Y2K Butterfly Crop Top',
      price: 259000,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      stock: 18,
      category: 'y2k',
      description: 'Crop top dengan embroidery butterfly Y2K style.',
      badge: 'NEW',
      discount: 0,
      rating: 4.9,
      reviewCount: 89,
      isFeatured: true,
    },
    {
      id: 3,
      name: 'Vintage Wash Denim Jacket',
      price: 689000,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
      stock: 7,
      category: 'vintage',
      description: 'Denim jacket dengan acid wash treatment.',
      badge: 'LIMITED',
      discount: 0,
      rating: 4.7,
      reviewCount: 156,
      isFeatured: true,
    },
    {
      id: 4,
      name: 'Neon Cargo Pants',
      price: 459000,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      stock: 25,
      category: 'bold',
      description: 'Cargo pants dengan warna neon electric.',
      badge: 'HOT',
      discount: 15,
      rating: 4.6,
      reviewCount: 178,
      isFeatured: false,
    },
    {
      id: 5,
      name: 'Clean Fit Hoodie',
      price: 529000,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
      stock: 60,
      category: 'minimal',
      description: 'Hoodie minimalis dengan material fleece premium.',
      badge: null,
      discount: 0,
      rating: 4.9,
      reviewCount: 412,
      isFeatured: false,
    },
    {
      id: 6,
      name: 'Graphic Print Tee "DRIP"',
      price: 219000,
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
      stock: 150,
      category: 'streetwear',
      description: 'Signature DRIP graphic tee dengan bold typography.',
      badge: 'NEW',
      discount: 0,
      rating: 4.5,
      reviewCount: 67,
      isFeatured: false,
    },
    {
      id: 7,
      name: 'Sheer Mesh Layer Top',
      price: 199000,
      image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80',
      stock: 30,
      category: 'y2k',
      description: 'Sheer mesh top untuk layering looks.',
      badge: null,
      discount: 20,
      rating: 4.4,
      reviewCount: 93,
      isFeatured: false,
    },
    {
      id: 8,
      name: 'Vintage Band Tee Rework',
      price: 349000,
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&q=80',
      stock: 12,
      category: 'vintage',
      description: 'Reworked vintage band tee dengan custom distressing.',
      badge: 'LIMITED',
      discount: 0,
      rating: 5.0,
      reviewCount: 28,
      isFeatured: true,
    },
    {
      id: 9,
      name: 'Wibu anime',
      price: 150000,
      image: "https://images.unsplash.com/photo-1695827163486-b86eac571321?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stock: 20,
      category: "streetwear", // pilih salah satu
      description: "Deskripsi produk",
      badge: "NEW", // HOT / NEW / LIMITED / SALE / null
      discount: 0,
      rating: 4.5,
      reviewCount: 0,
      isFeatured: false,
    },
  ];
}

// === MAIN PAGE COMPONENT ===
export default function Home({ products, testimonials }) {
  return (
    <>
      <Head>
        <title>DRIP. — Your Vibe, Your Style</title>
        <meta name="description" content="Toko fashion Gen Z. Streetwear, Y2K, Vintage & Bold. Find your drip." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:title" content="DRIP. — Your Vibe, Your Style" />
        <meta property="og:description" content="Toko fashion Gen Z terdepan di Indonesia." />
        <meta property="og:type" content="website" />
        {/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👕</text></svg>" />
      </Head>

      {/* === PAGE LAYOUT === */}
      <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>

        {/* Sticky Navigation */}
        <Navbar />

        {/* 1. Hero Section — Full-width dengan animasi */}
        <HeroSection />

        {/* 2. Product Grid — Latest drops dengan filter & sort */}
        <ProductGrid products={products} />

        {/* 3. Collections Highlight — Bold style cards */}
        <CollectionsSection />

        {/* 4. Social Proof — Testimoni + Instagram Feed */}
        <SocialProofSection testimonials={testimonials} />

        {/* 5. Footer — Quick links, sosial, newsletter */}
        <Footer />
      </div>
    </>
  );
}
