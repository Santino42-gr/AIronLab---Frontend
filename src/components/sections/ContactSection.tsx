'use client';

import { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiHabr } from 'react-icons/si';

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

const initialFormState: ContactForm = {
  name: '',
  email: '',
  phone: '',
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
          {/* Социальные сети */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Мы в социальных сетях</h3>
              <p className="text-gray-300 mb-8">Следите за нашими обновлениями и новостями в области ИИ</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* ВКонтакте */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#4680C2] hover:bg-[#5A8BC9] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.073 2H8.937C3.333 2 2 3.333 2 8.927v6.136C2 20.667 3.333 22 8.927 22h6.136C20.667 22 22 20.667 22 15.073V8.927C22 3.333 20.667 2 15.073 2zm3.073 14.133c-1.107.107-1.68.107-1.68.107s-2.72 0-3.52-.427c-.8-.427-1.04-2.56-1.04-2.56s1.12-.053 1.28-.48c.16-.427.16-1.173.16-1.173s-.64-.053-.8-.32c-.16-.267-.053-1.173-.053-1.173s.427-.053.533-.267c.107-.213.053-.64.053-.64s-.427 0-.587-.213c-.16-.213-.053-.907-.053-.907s.267-.053.427-.213c.16-.16.053-.533.053-.533s-.107-.053-.373-.213c-.267-.16-.213-.64-.213-.64s.267-.053.587-.213c.32-.16.213-.907.213-.907s-.053-.053-.267-.213c-.213-.16-.16-.587-.16-.587s.16-.053.373-.213c.213-.16.107-.587.107-.587S10.507 3.2 9.6 3.2s-.907 1.013-.907 1.013-.107.533.107.587c.213.053.373.053.373.053s.053.373-.16.587c-.213.213-.267.053-.267.053s.213.693-.213.907c-.427.213-.587.213-.587.213s.053.48-.213.64c-.267.16-.373.053-.373.053s-.107.427.053.64c.16.213.427.053.427.053s.107.693-.053.907c-.16.213-.587.053-.587.053s.053.587.053.8c0 .213-.16.267-.16.267s.747.053.587.267c-.16.213-.8.373-.8.373s.373 1.76.907 2.133c.533.373 2.827.32 2.827.32s1.013 0 1.333-.053c.32-.053.907-.373 1.227-1.013.32-.64.32-2.293.32-2.293s0-1.653-.32-2.293z"/>
                  </svg>
                  <span className="text-white font-medium">ВКонтакте</span>
                </a>

                {/* Telegram */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#0088CC] hover:bg-[#0099DD] rounded-xl transition-colors duration-200">
                  <FaTelegramPlane className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Telegram</span>
                </a>

                {/* VC.ru */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#FF6600] hover:bg-[#FF7711] rounded-xl transition-colors duration-200">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-[#FF6600] text-xs font-bold">VC</span>
                  </div>
                  <span className="text-white font-medium">VC.ru</span>
                </a>

                {/* Habr */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#65A3BE] hover:bg-[#76B4CF] rounded-xl transition-colors duration-200">
                  <SiHabr className="w-6 h-6 text-white" />
                  <span className="text-white font-medium">Habr</span>
                </a>

                {/* Teletype */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#1E1E1E] hover:bg-[#2E2E2E] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6h20v2H2zm2 4h16v2H4zm1 4h14v2H5z"/>
                  </svg>
                  <span className="text-white font-medium">Teletype</span>
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