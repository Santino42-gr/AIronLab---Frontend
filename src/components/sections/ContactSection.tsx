'use client';

import { useState } from 'react';

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
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zM20.133 17.023c-.55.96-1.606 1.394-2.17 1.487-.563.093-2.357.093-2.357.093s-4.213.044-5.09-.482c-.877-.526-1.614-3.087-1.614-3.087s2.37-.07 2.696-.57c.327-.5.327-1.71.327-1.71s-1.27-.044-1.533-.438c-.264-.394-.132-1.71-.132-1.71s.83-.044 1.094-.394c.264-.35.132-1.184.132-1.184s-.83 0-1.138-.35c-.307-.35-.132-1.315-.132-1.315s.525-.044.83-.35c.307-.307.088-.92.088-.92s-.175-.044-.658-.35c-.482-.307-.395-.964-.395-.964s.482-.044 1.051-.35c.57-.307.395-1.315.395-1.315s-.088-.044-.482-.35c-.395-.307-.307-.877-.307-.877s.35-.044.746-.35c.395-.307.22-1.051.22-1.051S13.34 4.692 12 4.692c-1.34 0-1.34 1.491-1.34 1.491s-.175.744.22 1.051c.395.306.746.35.746.35s.088.57-.307.877c-.394.306-.482.35-.482.35s.438 1.008-.395 1.315c-.832.307-1.051.35-1.051.35s.088.657-.395.964c-.482.306-.658.35-.658.35s-.219.613.088.92c.307.306.83.35.83.35s.175.965-.132 1.315c-.307.35-1.138.35-1.138.35s.132.834.132 1.184c0 .35-.264.394-.264.394s1.358.044 1.094.394c-.264.35-1.533.57-1.533.57s.737 2.561 1.614 3.087c.877.526 5.09.482 5.09.482s1.794 0 2.357-.093c.564-.093 1.62-.526 2.17-1.487.55-.96.526-3.35.526-3.35s.024-2.39-.526-3.35z"/>
                  </svg>
                  <span className="text-white font-medium">ВКонтакте</span>
                </a>

                {/* Telegram */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#0088CC] hover:bg-[#0099DD] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.534-.432.664-.876.414l-2.42-1.783-1.166 1.123c-.13.13-.238.238-.488.238l.174-2.47 4.492-4.058c.196-.174-.042-.27-.304-.096l-5.544 3.486-2.388-.747c-.52-.162-.532-.52.108-.77l9.312-3.588c.434-.162.81.096.674.77z"/>
                  </svg>
                  <span className="text-white font-medium">Telegram</span>
                </a>

                {/* VC.ru */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#333333] hover:bg-[#444444] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.2 7.2h-1.8l-1.8 6L11 7.2H9.6L8 13.2 6.2 7.2H4.4l2.7 9.6h1.8l1.6-6 1.5 6h1.8L16.6 7.2z"/>
                  </svg>
                  <span className="text-white font-medium">VC.ru</span>
                </a>

                {/* Habr */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#65A3BE] hover:bg-[#76B4CF] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 6h3v4.5h-3V6zm-3 4.5h3V15H7.5v-4.5zm6 0h3V15h-3v-4.5z"/>
                  </svg>
                  <span className="text-white font-medium">Habr</span>
                </a>

                {/* Teletype */}
                <a href="#" className="flex items-center space-x-3 p-4 bg-[#1E1E1E] hover:bg-[#2E2E2E] rounded-xl transition-colors duration-200">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 7H6v2h12V7zm-2 4H8v2h8v-2zm-1 4H9v2h6v-2z"/>
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