import { useState } from 'react'

// Типы для контактной формы (локальные, без бэкенда)
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  agreement: boolean
}

export interface UseContactFormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
}

export interface UseContactFormReturn extends UseContactFormState {
  submitForm: (data: ContactFormData) => Promise<void>
  resetForm: () => void
}

export function useContactForm(): UseContactFormReturn {
  const [state, setState] = useState<UseContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  })

  const submitForm = async (data: ContactFormData) => {
    setState({
      isSubmitting: true,
      isSuccess: false,
      error: null,
    })

    try {
      // Симуляция отправки (заглушка)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Логируем данные в консоль для демонстрации
      console.log('Данные формы (демо):', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        timestamp: new Date().toISOString()
      })

      setState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      })

      // Аналитика - отправляем событие в Google Analytics если подключен
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'contact_form',
          value: 1,
        })
      }

      // Яндекс.Метрика
      if (typeof window !== 'undefined' && (window as any).ym) {
        (window as any).ym(12345678, 'reachGoal', 'contact_form_submit')
      }

    } catch (error) {
      console.error('Contact form error:', error)
      
      setState({
        isSubmitting: false,
        isSuccess: false,
        error: error instanceof Error ? error.message : 'Произошла ошибка при отправке заявки',
      })
    }
  }

  const resetForm = () => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
    })
  }

  return {
    ...state,
    submitForm,
    resetForm,
  }
}

// Хук для получения UTM параметров из URL
export function useUTMParams() {
  if (typeof window === 'undefined') {
    return {}
  }

  const urlParams = new URLSearchParams(window.location.search)
  
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_content: urlParams.get('utm_content'),
    utm_term: urlParams.get('utm_term'),
  }
} 