'use client';

import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  requestType: string;
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

const initialFormState: ContactForm = {
  name: '',
  email: '',
  phone: '',
  requestType: 'consultation',
  message: '',
  agreement: false
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email обязателен для заполнения';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения';
    } else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(form.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    if (!form.agreement) {
      newErrors.agreement = 'Необходимо согласие на обработку данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactForm, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Убираем ошибку при исправлении поля
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Здесь был бы реальный API запрос
      console.log('Форма отправлена:', form);
      
      setSubmitStatus('success');
      setForm(initialFormState);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Спасибо за обращение!</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ваша заявка успешно отправлена. Наш специалист свяжется с вами в течение 2 часов в рабочее время.
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              Отправить ещё заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Свяжитесь с нами
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              для консультации
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Обсудим ваш проект и подберём оптимальное ИИ-решение для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Контактная информация */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Контактная информация</h3>
              
              <div className="space-y-6">
                {/* Телефон */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Телефон</h4>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                    <p className="text-gray-400 text-sm">Звонки принимаем 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@aironlab.ru</p>
                    <p className="text-gray-400 text-sm">Ответим в течение 2 часов</p>
                  </div>
                </div>

                {/* Офис */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Офис</h4>
                    <p className="text-gray-300">г. Москва, ул. Инновационная, 15</p>
                    <p className="text-gray-400 text-sm">БЦ "Технопарк", офис 401</p>
                  </div>
                </div>

                {/* Время работы */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Время работы</h4>
                    <p className="text-gray-300">Пн-Пт: 9:00 - 19:00</p>
                    <p className="text-gray-400 text-sm">Сб-Вс: только экстренные случаи</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Мы в социальных сетях</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                  <span className="text-white font-bold">VK</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <span className="text-white font-bold">TG</span>
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors duration-200">
                  <span className="text-white font-bold">YT</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center hover:bg-blue-900 transition-colors duration-200">
                  <span className="text-white font-bold">LI</span>
                </a>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Оставьте заявку</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя */}
              <div>
                <label className="block text-white font-medium mb-2">Имя *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200`}
                  placeholder="Ваше имя"
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Телефон */}
              <div>
                <label className="block text-white font-medium mb-2">Телефон *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.phone ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200`}
                  placeholder="+7 (999) 123-45-67"
                  disabled={isSubmitting}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Тип запроса */}
              <div>
                <label className="block text-white font-medium mb-2">Тип запроса</label>
                <select
                  value={form.requestType}
                  onChange={(e) => handleInputChange('requestType', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  <option value="consultation" className="bg-gray-800">Консультация</option>
                  <option value="project" className="bg-gray-800">Обсуждение проекта</option>
                  <option value="support" className="bg-gray-800">Техническая поддержка</option>
                  <option value="partnership" className="bg-gray-800">Партнёрство</option>
                </select>
              </div>

              {/* Сообщение */}
              <div>
                <label className="block text-white font-medium mb-2">Сообщение *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none`}
                  placeholder="Расскажите о вашем проекте или задаче..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Согласие */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={form.agreement}
                  onChange={(e) => handleInputChange('agreement', e.target.checked)}
                  className="mt-1 w-5 h-5 text-blue-500 rounded focus:ring-blue-400 focus:ring-2"
                  disabled={isSubmitting}
                />
                <label htmlFor="agreement" className="text-gray-300 text-sm">
                  Я соглашаюсь с{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                    политикой обработки персональных данных
                  </a>{' '}
                  и даю согласие на обработку моих данных
                </label>
              </div>
              {errors.agreement && <p className="text-red-400 text-sm mt-1">{errors.agreement}</p>}

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Отправляем заявку...
                  </span>
                ) : (
                  'Отправить заявку'
                )}
              </button>

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                  <p className="text-red-300 text-center">
                    Произошла ошибка при отправке. Попробуйте ещё раз или свяжитесь с нами по телефону.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 