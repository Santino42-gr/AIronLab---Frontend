import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const calleo = localFont({
  src: [
    {
      path: '../../public/fonts/calleo/Calleo-Trial-Light-BF64af57e71df38.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-LightItalic-BF64af57e718965.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-Regular-BF64af57e70e654.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-Italic-BF64af57e7407c6.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-SemiBold-BF64af57e72a4d2.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-SemiBoldItalic-BF64af57e71e28c.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-Bold-BF64af57e71c4d3.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/calleo/Calleo-Trial-BoldItalic-BF64af57e71e05c.woff',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-calleo'
})

export const metadata: Metadata = {
  title: 'AIronLab - Автоматизация бизнеса с ИИ',
  description: 'Разрабатываем и внедряем решения искусственного интеллекта для автоматизации бизнес-процессов. Повышаем эффективность вашей компании с помощью передовых ИИ-технологий.',
  keywords: 'искусственный интеллект, ИИ, автоматизация, бизнес-процессы, машинное обучение, разработка',
  authors: [{ name: 'AIronLab Team' }],
  creator: 'AIronLab',
  publisher: 'AIronLab',
  robots: 'index, follow',
  metadataBase: new URL('https://aironlab.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://aironlab.ru',
    title: 'AIronLab - Автоматизация бизнеса с ИИ',
    description: 'Разрабатываем и внедряем решения искусственного интеллекта для автоматизации бизнес-процессов.',
    siteName: 'AIronLab',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIronLab - ИИ решения для бизнеса',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIronLab - Автоматизация бизнеса с ИИ',
    description: 'Разрабатываем и внедряем решения искусственного интеллекта для автоматизации бизнес-процессов.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/icon.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={calleo.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // КРИТИЧЕСКАЯ ЗАЩИТА ОТ СЛУЧАЙНОГО СКРОЛИНГА НА МОБИЛЬНЫХ
              (function() {
                function isMobile() {
                  return window.innerWidth <= 768;
                }

                function isInteractiveElement(element) {
                  if (!element) return false;
                  
                  // Проверяем интерактивные теги
                  const interactiveTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
                  if (interactiveTags.includes(element.tagName)) return true;
                  
                  // Проверяем data-clickable
                  if (element.hasAttribute('data-clickable') && element.getAttribute('data-clickable') === 'true') return true;
                  
                  // Проверяем role
                  if (element.getAttribute('role') === 'button') return true;
                  
                  return false;
                }

                function findInteractiveParent(element) {
                  let current = element;
                  while (current && current !== document.body) {
                    if (isInteractiveElement(current)) return current;
                    current = current.parentElement;
                  }
                  return null;
                }

                                 function isScrollContainer(element) {
                   let current = element;
                   while (current && current !== document.body) {
                     if (current.hasAttribute('data-scroll-container')) return true;
                     current = current.parentElement;
                   }
                   return false;
                 }

                 function blockEvent(event) {
                   if (!isMobile()) return;
                   
                   const target = event.target;
                   const interactiveParent = findInteractiveParent(target);
                   
                   // Разрешаем скролинг в scroll-контейнерах
                   if (isScrollContainer(target)) return;
                   
                   // Если нет интерактивного родителя - блокируем событие
                   if (!interactiveParent) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();
                     return false;
                   }
                 }

                // Добавляем обработчики после загрузки DOM
                document.addEventListener('DOMContentLoaded', function() {
                  if (isMobile()) {
                    // Блокируем touch события на неинтерактивных элементах
                    document.addEventListener('touchstart', blockEvent, { passive: false, capture: true });
                    document.addEventListener('touchend', blockEvent, { passive: false, capture: true });
                    document.addEventListener('click', blockEvent, { passive: false, capture: true });
                    
                    console.log('✅ Защита от случайного скролинга активирована');
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${calleo.className} antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
} 