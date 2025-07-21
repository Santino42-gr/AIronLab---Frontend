import { BlogHeader } from '@/components/layout/BlogHeader';
import { LightFooter } from '@/components/layout/LightFooter';
import { Calendar, Clock, ArrowLeft, Tag, User, Share2, BookOpen } from 'lucide-react';
import { notFound } from 'next/navigation';

// Типы для статей
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  slug: string;
}

// Тестовые данные статей
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как ИИ изменит бизнес в 2025 году: 5 ключевых трендов',
    excerpt: 'Искусственный интеллект продолжает революционизировать различные отрасли. В этой статье мы рассматриваем ключевые тренды и возможности, которые определят будущее бизнеса в 2025 году.',
    content: `
      <h2>Введение</h2>
      <p>Искусственный интеллект (ИИ) уже не является технологией будущего — это реальность, которая активно трансформирует бизнес-процессы во всех отраслях. В 2025 году мы увидим еще более глубокую интеграцию ИИ в повседневные бизнес-операции.</p>
      
      <h2>1. Автоматизация принятия решений</h2>
      <p>Одним из ключевых трендов станет автоматизация принятия решений на основе данных. ИИ-системы будут анализировать большие объемы информации в реальном времени и предлагать оптимальные решения для бизнес-задач.</p>
      
      <h2>2. Персонализация клиентского опыта</h2>
      <p>ИИ позволит создавать уникальный опыт для каждого клиента, анализируя их поведение, предпочтения и историю взаимодействий с брендом.</p>
      
      <h2>3. Предиктивная аналитика</h2>
      <p>Машинное обучение поможет компаниям предсказывать рыночные тренды, спрос на продукты и потенциальные риски, что позволит принимать более обоснованные стратегические решения.</p>
      
      <h2>4. Автоматизация рутинных задач</h2>
      <p>Роботизация процессов (RPA) в сочетании с ИИ позволит автоматизировать до 70% рутинных задач, освобождая время сотрудников для более творческой и стратегической работы.</p>
      
      <h2>5. Умные чат-боты и виртуальные ассистенты</h2>
      <p>Развитие языковых моделей приведет к появлению более интеллектуальных и контекстно-осведомленных виртуальных помощников, способных решать сложные задачи клиентов.</p>
      
      <h2>Заключение</h2>
      <p>Компании, которые начнут внедрять ИИ-решения уже сейчас, получат значительное конкурентное преимущество в 2025 году. Ключ к успеху — постепенное внедрение технологий с фокусом на конкретные бизнес-задачи и измеряемые результаты.</p>
    `,
    author: 'Команда AIronLab',
    date: '2025-07-21',
    readTime: '8 мин',
    tags: ['ИИ', 'Бизнес', 'Тренды', 'Автоматизация'],
    image: '/images/blog/ai-business-2025.jpg',
    slug: 'ai-business-2025'
  },
  {
    id: '2',
    title: 'Автоматизация процессов с помощью ChatGPT: Практическое руководство',
    excerpt: 'Узнайте, как эффективно использовать ChatGPT для автоматизации рутинных задач в вашей компании. Практические примеры и пошаговые инструкции.',
    content: 'Полное содержание статьи...',
    author: 'Александр Смольников',
    date: '2025-07-15',
    readTime: '12 мин',
    tags: ['ChatGPT', 'Автоматизация', 'Практика'],
    image: '/images/blog/chatgpt-automation.jpg',
    slug: 'chatgpt-automation'
  },
  {
    id: '3',
    title: 'Машинное обучение для анализа данных: С чего начать',
    excerpt: 'Введение в машинное обучение для анализа бизнес-данных. Основные концепции, инструменты и первые шаги для внедрения ML в вашу компанию.',
    content: 'Полное содержание статьи...',
    author: 'Команда AIronLab',
    date: '2025-07-10',
    readTime: '15 мин',
    tags: ['ML', 'Анализ данных', 'Обучение'],
    image: '/images/blog/ml-data-analysis.jpg',
    slug: 'ml-data-analysis'
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogHeader />
      <main className="min-h-screen bg-white">
        {/* Hero секция статьи */}
        <div className="relative bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container-custom">
            {/* Навигация назад */}
            <div className="mb-8">
              <a
                href="/blog"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-accent transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Вернуться к блогу</span>
              </a>
            </div>

            {/* Заголовок и метаданные */}
            <div className="max-w-4xl mx-auto">
              {/* Теги */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Заголовок */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Метаданные */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('ru-RU', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Время чтения: {post.readTime}</span>
                </div>
              </div>

              {/* Краткое описание */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Кнопка поделиться */}
              <button className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors duration-200">
                <Share2 className="h-4 w-4" />
                <span>Поделиться</span>
              </button>
            </div>
          </div>
        </div>

        {/* Контент статьи */}
        <div className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Изображение статьи */}
              {post.image && (
                <div className="mb-12">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              )}

              {/* Текст статьи */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Автор */}
              <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                    <p className="text-gray-600">Эксперт по ИИ и автоматизации бизнес-процессов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LightFooter />
    </>
  );
} 