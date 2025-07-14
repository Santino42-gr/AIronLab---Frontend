'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'technical' | 'security' | 'support';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    category: 'pricing',
    question: 'Сколько стоит разработка ИИ-решения?',
    answer: 'Стоимость зависит от сложности проекта: от 15,000₽ за шаблонные решения до 100,000₽+ за уникальные разработки. Мы предлагаем бесплатную консультацию для точной оценки вашего проекта.'
  },
  {
    id: '2',
    category: 'technical',
    question: 'Какие технологии вы используете?',
    answer: 'Мы работаем с передовыми технологиями: Python, TensorFlow, PyTorch, OpenAI API, Hugging Face, React, Node.js, Docker, Kubernetes. Выбор стека зависит от специфики вашего проекта.'
  },
  {
    id: '3',
    category: 'security',
    question: 'Как обеспечивается безопасность данных?',
    answer: 'Мы применяем шифрование AES-256, SSL/TLS протоколы, соблюдаем GDPR и 152-ФЗ. Все данные обрабатываются на защищённых серверах с регулярными аудитами безопасности.'
  },
  {
    id: '4',
    category: 'technical',
    question: 'Можете ли вы интегрировать ИИ с нашей CRM/ERP?',
    answer: 'Да, мы специализируемся на интеграции с любыми системами: 1C, SAP, Salesforce, amoCRM, Битрикс24 и другими. Используем REST API, webhooks и прямые подключения к базам данных.'
  },
  {
    id: '5',
    category: 'support',
    question: 'Какая техподдержка предоставляется после запуска?',
    answer: 'Предоставляем техподдержку от 30 до 90 дней в зависимости от тарифа. Включает мониторинг работы, исправление ошибок, консультации и обновления. Возможна расширенная поддержка по отдельному договору.'
  },
  {
    id: '6',
    category: 'pricing',
    question: 'Есть ли скидки для стартапов и некоммерческих организаций?',
    answer: 'Да! Предоставляем скидки до 30% для стартапов (до 2 лет работы) и до 50% для некоммерческих организаций. Также доступны специальные условия для образовательных учреждений.'
  },
  {
    id: '7',
    category: 'technical',
    question: 'Сколько времени занимает разработка ИИ-решения?',
    answer: 'Сроки варьируются: шаблонные решения — 1-2 недели, кастомная разработка — 1-2 месяца, сложные проекты с ML — 3-6 месяцев. Точные сроки определяем после анализа технического задания.'
  },
  {
    id: '8',
    category: 'security',
    question: 'Где хранятся данные? Можем ли мы использовать собственные серверы?',
    answer: 'Предлагаем различные варианты: облачное размещение в России, гибридные решения или полное развёртывание на ваших серверах. Все данные остаются под вашим контролем.'
  }
];

const categoryNames = {
  pricing: '💰 Цены и оплата',
  technical: '⚙️ Технические вопросы',
  security: '🔒 Безопасность',
  support: '🛠️ Поддержка'
};

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (itemId: string) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Часто задаваемые
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о разработке ИИ-решений, ценах и технологиях
          </p>
        </div>

        {/* Фильтры по категориям */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            📋 Все вопросы
          </button>
          {Object.entries(categoryNames).map(([key, name]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Accordion с вопросами */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Вопрос (кликабельный заголовок) */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                      item.category === 'pricing' ? 'from-green-400 to-emerald-500' :
                      item.category === 'technical' ? 'from-blue-400 to-cyan-500' :
                      item.category === 'security' ? 'from-red-400 to-pink-500' :
                      'from-purple-400 to-indigo-500'
                    }`}></div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  
                  {/* Иконка стрелки */}
                  <div className={`flex-shrink-0 w-6 h-6 transition-transform duration-300 ${
                    activeItem === item.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-full h-full text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Ответ (раскрывающийся контент) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок призыва к действию */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Наши эксперты готовы ответить на любые вопросы о ИИ-решениях и помочь с выбором оптимального решения для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Задать вопрос
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Написать нам
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 