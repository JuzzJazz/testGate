/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: '/testGate',
  assetPrefix: '/testGate/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
