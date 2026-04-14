/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    // Cloudflare doesn't support Next.js Image Optimization out of the box
    unoptimized: true,
  },
  trailingSlash: false,
}

module.exports = nextConfig