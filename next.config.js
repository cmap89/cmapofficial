/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'], // For YouTube thumbnails
  },
  // Optimize static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: false,
}

module.exports = nextConfig