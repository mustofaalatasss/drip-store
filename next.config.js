/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow external images for mock product images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

module.exports = nextConfig
