import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const calleo = localFont({
  src: [
    {
      path: "../../public/fonts/calleo/Calleo-Trial-Light-BF64af57e71df38.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-LightItalic-BF64af57e718965.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-Regular-BF64af57e70e654.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-Italic-BF64af57e7407c6.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-SemiBold-BF64af57e72a4d2.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-SemiBoldItalic-BF64af57e71e28c.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-Bold-BF64af57e71c4d3.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/calleo/Calleo-Trial-BoldItalic-BF64af57e71e05c.woff",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-calleo"
});

export const metadata: Metadata = {
  title: "AIronLab - Уникальные ИИ-решения для вашего бизнеса",
  description: "Мы создаем инновационные решения на основе искусственного интеллекта, которые помогают бизнесу расти и развиваться. Аналитика в реальном времени, автоматизация процессов и персонализация.",
  keywords: "ИИ, искусственный интеллект, AI, машинное обучение, автоматизация, бизнес решения",
  authors: [{ name: "AIronLab" }],
  robots: "index, follow",
  openGraph: {
    title: "AIronLab - Уникальные ИИ-решения для вашего бизнеса",
    description: "Инновационные решения на основе искусственного интеллекта для развития вашего бизнеса",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={calleo.variable}>
      <body className={`${calleo.className} antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
} 