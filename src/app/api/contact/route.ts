import { NextRequest } from 'next/server'
import { contactService } from '../../../../backend/api/contact'
import { 
  createSuccessResponse, 
  createErrorResponse, 
  handleApiError,
  addCorsHeaders,
  checkRateLimit,
  getClientIP,
  logRequest
} from '../../../../backend/utils/api-helpers'

// Обработка POST запросов для создания заявки
export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request)
    
    // Проверяем rate limiting
    if (!checkRateLimit(clientIP, 5, 60000)) { // 5 запросов в минуту
      return createErrorResponse(
        'Слишком много запросов. Попробуйте через минуту.',
        429
      )
    }

    // Получаем данные из запроса
    const body = await request.json()
    
    logRequest('POST', '/api/contact', body)

    // Извлекаем UTM параметры из URL
    const url = new URL(request.url)
    const utmParams = {
      utm_source: url.searchParams.get('utm_source'),
      utm_medium: url.searchParams.get('utm_medium'),
      utm_campaign: url.searchParams.get('utm_campaign'),
    }

    // Объединяем данные формы с UTM параметрами
    const contactData = {
      ...body,
      ...utmParams,
    }

    // Проверяем доступность Supabase
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.warn('Supabase not configured - logging contact request instead')
      console.log('Contact request:', contactData)
      
      return createSuccessResponse(
        { message: 'Заявка получена (тестовый режим)' },
        'Заявка успешно отправлена'
      )
    }

    // Создаем заявку через сервис
    const result = await contactService.createContactRequest(contactData)

    const response = createSuccessResponse(
      result,
      'Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.'
    )

    return addCorsHeaders(response)

  } catch (error) {
    console.error('Contact API error:', error)
    return handleApiError(error)
  }
}

// Обработка GET запросов для получения заявок (только для админов)
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const status = url.searchParams.get('status') as any
    const source = url.searchParams.get('source') as any
    const limit = url.searchParams.get('limit')
    const offset = url.searchParams.get('offset')

    logRequest('GET', '/api/contact')

    // В реальном приложении здесь должна быть проверка авторизации
    // const { user } = await getUser(request)
    // if (!user || user.role !== 'admin') {
    //   return createErrorResponse('Доступ запрещен', 403)
    // }

    const filters = {
      status: status || undefined,
      source: source || undefined,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
    }

    const requests = await contactService.getAllContactRequests(filters)
    
    const response = createSuccessResponse(requests)
    return addCorsHeaders(response)
  } catch (error) {
    const errorResponse = handleApiError(error)
    return addCorsHeaders(errorResponse)
  }
}

// Обработка OPTIONS запросов (CORS preflight)
export async function OPTIONS(request: NextRequest) {
  const response = new Response(null, { status: 200 })
  return addCorsHeaders(response)
} 