import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  options: {
    currency?: "USD" | "RUB" | "EUR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "USD", notation = "standard" } = options;

  const currencySymbols = {
    USD: "$",
    RUB: "₽",
    EUR: "€",
  };

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 0,
  }).format(price).replace(currency, currencySymbols[currency]);
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Высота фиксированного хедера
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
}

// Функция для правильного построения путей к изображениям
export function getImagePath(path: string): string {
  // Определяем платформу деплоя
  const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET;
  const isVercel = process.env.NEXT_PUBLIC_VERCEL === '1';
  
  // Для GitHub Pages нужен basePath '/AIronLab---Frontend'
  // Для reg.ru хостинга и Vercel basePath не нужен
  if (deployTarget === 'github') {
    return `/AIronLab---Frontend${path}`;
  }
  
  // Для hosting (reg.ru) и Vercel используем путь без basePath
  return path;
} 