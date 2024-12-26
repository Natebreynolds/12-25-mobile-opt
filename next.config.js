/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enhanced optimization features
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeFonts: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
    // Optimize bundle size
    modularizeImports: {
      'lucide-react': {
        transform: 'lucide-react/dist/esm/icons/{{member}}',
        preventFullImport: true,
      },
    },
  },
  // Reduce bundle size
  webpack: (config) => {
    config.optimization.minimize = true;
    config.optimization.usedExports = true;
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;