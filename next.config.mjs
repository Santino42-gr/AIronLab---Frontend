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
  // Убираем basePath и assetPrefix для обычного хостинга
  // Если у вас поддомен, раскомментируйте и настройте:
  // basePath: '/подпапка',
  // assetPrefix: '/подпапка/',
};

export default nextConfig; 