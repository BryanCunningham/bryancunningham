/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: true
  },
  // Only apply basePath and assetPrefix in production
  basePath: isProduction ? '/bryancunningham' : '',
  assetPrefix: isProduction ? '/bryancunningham/' : '',
  trailingSlash: false,
}

module.exports = nextConfig 