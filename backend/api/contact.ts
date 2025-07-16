import { z } from 'zod'
import { createAdminClient } from '../lib/supabase-server'
import { ContactRequestInsert } from '../types/database'

// Схема валидации для контактной формы
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(100, 'Имя не должно превышать 100 символов'),
  email: z
    .string()
    .email('Некорректный email адрес')
    .max(255, 'Email не должен превышать 255 символов'),
  phone: z
    .string()
    .optional()
    .refine(
      (phone) => !phone || /^\+?[\d\s\-\(\)]{10,20}$/.test(phone),
      'Некорректный номер телефона'
    ),
  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(2000, 'Сообщение не должно превышать 2000 символов'),
  agreement: z
    .boolean()
    .refine((val) => val === true, 'Необходимо согласие на обработку данных'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Класс для работы с контактными заявками
export class ContactService {
  private supabase = createAdminClient()

  // Создание новой заявки
  async createContactRequest(
    formData: ContactFormData,
    metadata?: {
      source?: 'website' | 'telegram' | 'email'
      utmSource?: string
      utmMedium?: string
      utmCampaign?: string
      clientIP?: string
    }
  ) {
    // Валидируем данные
    const validatedData = contactFormSchema.parse(formData)

    // Подготавливаем данные для вставки
    const insertData: ContactRequestInsert = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      message: validatedData.message,
      source: metadata?.source || 'website',
      utm_source: metadata?.utmSource || null,
      utm_medium: metadata?.utmMedium || null,
      utm_campaign: metadata?.utmCampaign || null,
      status: 'new',
    }

    // Вставляем в базу данных
    const { data, error } = await this.supabase
      .from('contact_requests')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      throw new Error(`Ошибка создания заявки: ${error.message}`)
    }

    return data
  }

  // Получение всех заявок (для админки)
  async getAllContactRequests(
    filters?: {
      status?: 'new' | 'in_progress' | 'completed' | 'cancelled'
      source?: 'website' | 'telegram' | 'email'
      limit?: number
      offset?: number
    }
  ) {
    let query = this.supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (filters?.status) {
      query = query.eq('status', filters.status)
    }

    if (filters?.source) {
      query = query.eq('source', filters.source)
    }

    if (filters?.limit) {
      query = query.limit(filters.limit)
    }

    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1)
    }

    const { data, error } = await query

    if (error) {
      throw new Error(`Ошибка получения заявок: ${error.message}`)
    }

    return data
  }

  // Обновление статуса заявки
  async updateRequestStatus(
    id: string,
    status: 'new' | 'in_progress' | 'completed' | 'cancelled'
  ) {
    const { data, error } = await this.supabase
      .from('contact_requests')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      throw new Error(`Ошибка обновления статуса: ${error.message}`)
    }

    return data
  }

  // Получение статистики заявок
  async getContactRequestsStats() {
    const { data: totalRequests } = await this.supabase
      .from('contact_requests')
      .select('id', { count: 'exact' })

    const { data: newRequests } = await this.supabase
      .from('contact_requests')
      .select('id', { count: 'exact' })
      .eq('status', 'new')

    const { data: completedRequests } = await this.supabase
      .from('contact_requests')
      .select('id', { count: 'exact' })
      .eq('status', 'completed')

    // Получаем заявки за последние 30 дней
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: recentRequests } = await this.supabase
      .from('contact_requests')
      .select('id', { count: 'exact' })
      .gte('created_at', thirtyDaysAgo.toISOString())

    return {
      total: totalRequests?.length || 0,
      new: newRequests?.length || 0,
      completed: completedRequests?.length || 0,
      recent30Days: recentRequests?.length || 0,
    }
  }

  // Поиск заявок по email или имени
  async searchContactRequests(query: string) {
    const { data, error } = await this.supabase
      .from('contact_requests')
      .select('*')
      .or(`name.ilike.%${query}%,email.ilike.%${query}%`)
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) {
      throw new Error(`Ошибка поиска заявок: ${error.message}`)
    }

    return data
  }
}

// Создаем и экспортируем экземпляр сервиса
export const contactService = new ContactService() 