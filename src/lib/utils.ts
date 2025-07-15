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
  // Для рег.ру хостинга basePath не нужен (файлы в корне домена)
  // Для GitHub Pages нужен basePath '/AIronLab---Frontend'
  // Проверяем переменную окружения NEXT_PUBLIC_DEPLOY_TARGET
  const deployTarget = process.env.NEXT_PUBLIC_DEPLOY_TARGET;
  const basePath = deployTarget === 'hosting' ? '' : '/AIronLab---Frontend';
  return `${basePath}${path}`;
} 