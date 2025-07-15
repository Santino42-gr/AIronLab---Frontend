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
  // Для рег.ру хостинга basePath НЕ нужен
  // (файлы размещаются в корне домена)
};

export default nextConfig; 