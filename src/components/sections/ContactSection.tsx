'use client';

import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiHabr } from 'react-icons/si';
import { useContactForm } from '@/hooks/useContactForm';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreement: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agreement?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useContactForm();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Валидация имени
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Некорректный email адрес';
    }

    // Валидация телефона (опционально, но если заполнен - должен быть корректным)
    if (formData.phone.trim()) {
      const phoneRegex = /^\+?[\d\s\-\(\)]{10,20}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Некорректный номер телефона';
      }
    }

    // Валидация сообщения
    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    // Валидация согласия
    if (!formData.agreement) {
      newErrors.agreement = 'Необходимо согласие на обработку персональных данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Очищаем ошибку при изменении поля
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await submitForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim(),
        agreement: formData.agreement,
      });

      // Если успешно - очищаем форму
      if (!error) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          agreement: false,
        });
      }
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  // Если форма успешно отправлена
  if (isSuccess) {
    return (
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Заявка отправлена!
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Спасибо за обращение! Мы получили вашу заявку и свяжемся с вами в ближайшее время.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">⏰ Что дальше?</h3>
                  <ul className="text-blue-100 space-y-2 text-sm">
                    <li>• Мы изучим ваш запрос в течение 2 часов</li>
                    <li>• Свяжемся для уточнения деталей</li>
                    <li>• Подготовим персональное предложение</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">📞 Срочная связь</h3>
                  <div className="text-blue-100 space-y-2 text-sm">
                    <p>Telegram: @aironlab_support</p>
                    <p>Email: info@aironlab.ru</p>
                    <p>Время работы: 9:00-18:00 МСК</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  resetForm();
                }}
                className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                Отправить еще одну заявку
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Давайте обсудим ваш проект
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Расскажите о своих задачах, и мы предложим эффективное решение на основе ИИ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.05a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-blue-100">info@aironlab.ru</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <FaTelegramPlane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Telegram</p>
                      <p className="text-blue-100">@aironlab_team</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <SiHabr className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Habr</p>
                      <p className="text-blue-100">@aironlab</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-xl">
                  <h4 className="text-white font-semibold mb-3">⚡ Быстрая помощь</h4>
                  <p className="text-blue-100 text-sm">
                    Ответим в течение 2 часов в рабочее время (9:00-18:00 МСК).
                    В срочных случаях пишите в Telegram.
                  </p>
                </div>
              </div>
            </div>

            {/* Форма */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Отправить заявку</h3>
              
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Ваше имя"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="+7 (999) 123-45-67"
                    disabled={isSubmitting}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    }`}
                    placeholder="Расскажите о вашем проекте, задачах и ожиданиях..."
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreement"
                    checked={formData.agreement}
                    onChange={(e) => handleInputChange('agreement', e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="agreement" className="text-sm text-blue-100">
                    Я согласен на{' '}
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                      обработку персональных данных
                    </a>{' '}
                    и получение информационных сообщений *
                  </label>
                </div>
                {errors.agreement && <p className="text-sm text-red-400">{errors.agreement}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправляем...
                    </span>
                  ) : (
                    'Отправить заявку'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-blue-100">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 