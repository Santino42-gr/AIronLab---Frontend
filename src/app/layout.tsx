import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "AIronLab - Уникальные ИИ-решения для вашего бизнеса",
  description: "Мы создаем инновационные решения на основе искусственного интеллекта, которые помогают бизнесу расти и развиваться. Аналитика в реальном времени, автоматизация процессов и персонализация.",
  keywords: "ИИ, искусственный интеллект, AI, машинное обучение, автоматизация, бизнес решения",
  authors: [{ name: "AIronLab" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "AIronLab - Уникальные ИИ-решения для вашего бизнеса",
    description: "Инновационные решения на основе искусственного интеллекта для развития вашего бизнеса",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
} 