/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Настройки для статического экспорта
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Настройки для GitHub Pages (нужны для корректной работы)
  basePath: '/AIronLab---Frontend',
  assetPrefix: '/AIronLab---Frontend/',
};

export default nextConfig; 