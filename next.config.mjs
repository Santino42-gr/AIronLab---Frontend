/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Настройки для GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Базовый путь для GitHub Pages (замените на название вашего репо)
  basePath: process.env.NODE_ENV === 'production' ? '/AIronLab---Frontend' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AIronLab---Frontend/' : '',
};

export default nextConfig; 