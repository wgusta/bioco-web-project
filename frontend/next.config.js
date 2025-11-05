/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PROCESSWIRE_API_URL: process.env.PROCESSWIRE_API_URL || 'https://staging.bioco.ch/api',
    MATOMO_URL: process.env.MATOMO_URL || '',
    MATOMO_SITE_ID: process.env.MATOMO_SITE_ID || '',
  },
  images: {
    domains: ['localhost', 'staging.bioco.ch', 'bioco.ch'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'staging.bioco.ch',
      },
      {
        protocol: 'https',
        hostname: 'bioco.ch',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
