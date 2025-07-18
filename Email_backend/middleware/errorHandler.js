const { logger } = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error('Необработанная ошибка:', err);

  // Joi validation errors
  if (err.isJoi) {
    const errorMessage = err.details
      .map(detail => detail.message)
      .join('; ');
    
    return res.status(400).json({
      error: 'Ошибка валидации данных',
      message: errorMessage,
      code: 'VALIDATION_ERROR'
    });
  }

  // SMTP errors
  if (err.code === 'EAUTH' || err.code === 'ECONNECTION') {
    logger.error('SMTP ошибка:', err);
    return res.status(500).json({
      error: 'Ошибка почтового сервера',
      message: 'Не удалось отправить email. Попробуйте позже.',
      code: 'EMAIL_SERVICE_ERROR'
    });
  }

  // Rate limiting errors
  if (err.type === 'request.entity.too.large') {
    return res.status(413).json({
      error: 'Слишком большой размер запроса',
      code: 'PAYLOAD_TOO_LARGE'
    });
  }

  // Default error
  const statusCode = err.status || err.statusCode || 500;
  const message = process.env.NODE_ENV === 'development' 
    ? err.message 
    : 'Внутренняя ошибка сервера';

  res.status(statusCode).json({
    error: message,
    code: 'INTERNAL_ERROR',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = { errorHandler, asyncHandler }; 