const Joi = require('joi');

// Схема валидации формы обратной связи
const contactFormSchema = Joi.object({
  name: Joi.string()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(100, 'Имя не должно превышать 100 символов')
    .required()
    .messages({
      'string.empty': 'Имя обязательно для заполнения',
      'string.min': 'Имя должно содержать минимум 2 символа',
      'string.max': 'Имя не должно превышать 100 символов',
      'any.required': 'Имя обязательно для заполнения'
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Введите корректный email адрес',
      'string.empty': 'Email обязателен для заполнения',
      'any.required': 'Email обязателен для заполнения'
    }),

  phone: Joi.string()
    .pattern(/^[\+]?[0-9\s\-\(\)]{10,20}$/)
    .optional()
    .allow('')
    .messages({
      'string.pattern.base': 'Введите корректный номер телефона'
    }),

  message: Joi.string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(2000, 'Сообщение не должно превышать 2000 символов')
    .required()
    .messages({
      'string.empty': 'Сообщение обязательно для заполнения',
      'string.min': 'Сообщение должно содержать минимум 10 символов',
      'string.max': 'Сообщение не должно превышать 2000 символов',
      'any.required': 'Сообщение обязательно для заполнения'
    }),

  agreement: Joi.boolean()
    .valid(true)
    .required()
    .messages({
      'any.only': 'Необходимо согласие на обработку персональных данных',
      'any.required': 'Необходимо согласие на обработку персональных данных'
    }),

  // UTM параметры (опциональные)
  utm_source: Joi.string().optional(),
  utm_medium: Joi.string().optional(),
  utm_campaign: Joi.string().optional(),
  utm_term: Joi.string().optional(),
  utm_content: Joi.string().optional(),

  // Метаданные (автоматически добавляются)
  referrer: Joi.string().optional(),
  userAgent: Joi.string().optional(),
  clientIP: Joi.string().optional()
});

// Функция валидации
const validateContactForm = (data) => {
  const { error, value } = contactFormSchema.validate(data, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    throw error;
  }

  return value;
};

module.exports = {
  validateContactForm,
  contactFormSchema
}; 