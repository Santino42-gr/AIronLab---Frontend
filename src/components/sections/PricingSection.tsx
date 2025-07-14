'use client';

import { useState } from 'react';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  color: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'template',
    name: 'Шаблонные решения',
    price: 'от 15 000',
    period: '₽',
    description: 'Готовые ИИ-решения для быстрого внедрения',
    features: [
      'Готовые чат-боты',
      'Базовая настройка',
      'Стандартная интеграция',
      'Техподдержка 30 дней',
      'Обучение команды',
      'Документация'
    ],
    buttonText: 'Начать с шаблона',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'custom',
    name: 'Кастомные решения',
    price: '30 000',
    period: '₽',
    description: 'Индивидуальная разработка под ваши задачи',
    features: [
      'Персональная разработка',
      'Адаптация под бизнес',
      'Кастомный дизайн',
      'Техподдержка 60 дней',
      'Личный менеджер',
      'Обновления 6 месяцев'
    ],
    popular: true,
    buttonText: 'Заказать разработку',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'integration',
    name: 'Решения с интеграциями',
    price: 'от 60 000',
    period: '₽',
    description: 'Комплексная интеграция с вашими системами',
    features: [
      'Интеграция с CRM/ERP',
      'API для сторонних систем',
      'Аналитика и отчеты',
      'Техподдержка 90 дней',
      'Консультации архитектора',
      'Масштабирование решения'
    ],
    buttonText: 'Обсудить интеграцию',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'unique',
    name: 'Уникальные решения',
    price: 'от 100 000',
    period: '₽',
    description: 'Эксклюзивные ИИ-решения с нуля',
    features: [
      'Полная разработка с нуля',
      'Собственные ML-модели',
      'Бессрочная лицензия',
      'Безлимитная поддержка',
      'Команда экспертов',
      'Права на исходный код'
    ],
    buttonText: 'Создать уникальное',
    color: 'from-orange-500 to-red-500'
  }
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // Здесь можно добавить логику для перехода к форме заказа
    console.log(`Выбран тариф: ${planId}`);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Выберите подходящий
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              тарифный план
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            От готовых шаблонов до эксклюзивных решений — у нас есть идеальный вариант для вашего бизнеса
          </p>
        </div>

        {/* Сетка тарифов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:bg-white/10 animate-fade-in ${
                plan.popular ? 'ring-2 ring-purple-500/50 bg-white/10' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge для популярного тарифа */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    🔥 Популярный
                  </span>
                </div>
              )}

              {/* Иконка тарифа */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {plan.id === 'template' && '📋'}
                    {plan.id === 'custom' && '🎨'}
                    {plan.id === 'integration' && '🔗'}
                    {plan.id === 'unique' && '✨'}
                  </span>
                </div>
              </div>

              {/* Информация о тарифе */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-lg text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Список функций */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Кнопка выбора */}
              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : hoveredPlan === plan.id
                    ? `bg-gradient-to-r ${plan.color} text-white`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>

              {/* Декоративный элемент при ховере */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="text-center">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-8">
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Без скрытых платежей</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Гарантия результата</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-6 h-6 text-purple-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Бесплатная консультация</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-lg">
            Не уверены какой тариф выбрать?{' '}
            <button className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
              Получите персональную консультацию
            </button>
          </p>
        </div>
      </div>
    </section>
  );
} 