import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

// Стандартный формат ответа API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Создание успешного ответа
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    },
    { status }
  )
}

// Создание ответа с ошибкой
export function createErrorResponse(
  error: string,
  status: number = 500,
  details?: any
): NextResponse<ApiResponse> {
  console.error('API Error:', error, details)
  
  return NextResponse.json(
    {
      success: false,
      error,
    },
    { status }
  )
}

// Обработка различных типов ошибок
export function handleApiError(error: unknown): NextResponse<ApiResponse> {
  if (error instanceof ZodError) {
    return createErrorResponse(
      'Неверные данные в запросе',
      400,
      error.errors
    )
  }

  if (error instanceof Error) {
    return createErrorResponse(error.message, 500)
  }

  return createErrorResponse('Внутренняя ошибка сервера', 500)
}

// Валидация CORS для разрешенных доменов
export function validateOrigin(request: Request): boolean {
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'http://localhost:3000',
    'https://aironlab.ru',
    'https://santino42-gr.github.io'
  ]

  return !origin || allowedOrigins.includes(origin)
}

// Добавление CORS заголовков к ответу
export function addCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  )
  return response
}

// Логирование запросов
export function logRequest(
  method: string,
  path: string,
  body?: any,
  userId?: string
) {
  console.log(`[${new Date().toISOString()}] ${method} ${path}`, {
    body: body ? JSON.stringify(body).slice(0, 200) : undefined,
    userId,
  })
}

// Извлечение IP адреса из запроса
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

// Проверка rate limiting (простая реализация в памяти)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 10,
  windowMs: number = 60000 // 1 минута
): boolean {
  const now = Date.now()
  const record = requestCounts.get(identifier)

  if (!record || now > record.resetTime) {
    // Создаем новую запись или сбрасываем старую
    requestCounts.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
} 