/** @type {import('next').NextConfig} */

// Определяем платформу деплоя
const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'github';
const isHosting = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'hosting';
const isVercel = process.env.VERCEL === '1' || process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'vercel';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Условные настройки в зависимости от платформы
  ...(isGitHubPages && {
    // Настройки для GitHub Pages
    output: 'export',
    trailingSlash: true,
    basePath: '/AIronLab---Frontend',
    assetPrefix: '/AIronLab---Frontend/',
  }),
  ...(isHosting && {
    // Настройки для reg.ru хостинга
    output: 'export',
    trailingSlash: true,
  }),
  // Для Vercel используем стандартные настройки Next.js (без дополнительных опций)
  images: {
    unoptimized: isGitHubPages || isHosting, // Оптимизация изображений только на Vercel
  },
};

export default nextConfig; 