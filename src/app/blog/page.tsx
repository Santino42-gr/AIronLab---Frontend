import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок блога */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">
                Блог AIronLab
              </h1>
              <p className="text-gray-400 text-lg">
                Статьи об искусственном интеллекте, автоматизации и технологиях будущего
              </p>
            </div>

            {/* Пример статьи */}
            <div className="bg-gray-800 rounded-2xl p-8 mb-8">
              <div className="mb-4">
                <span className="text-purple-400 text-sm">15 января 2025</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Как ИИ изменит бизнес в 2025 году
              </h2>
              <p className="text-gray-300 mb-6">
                Искусственный интеллект продолжает революционизировать различные отрасли. 
                В этой статье мы рассматриваем ключевые тренды и возможности...
              </p>
              <a
                href="/blog/ai-business-2025"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Читать далее →
              </a>
            </div>

            {/* Заглушка для будущих статей */}
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Больше статей скоро
              </h3>
              <p className="text-gray-400">
                Мы готовим для вас интересные материалы об ИИ и автоматизации
              </p>
            </div>

            {/* Кнопка возврата */}
            <div className="text-center mt-8">
              <a
                href="/"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Вернуться на главную
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 