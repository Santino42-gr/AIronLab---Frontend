const Joi = require('joi');

const contactFormSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .trim()
    .required()
    .messages({
      'string.base': 'Имя должно быть строкой',
      'string.empty': 'Имя обязательно для заполнения',
      'string.min': 'Имя должно содержать минимум 2 символа',
      'string.max': 'Имя не должно превышать 100 символов',
      'any.required': 'Имя обязательно для заполнения'
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .lowercase()
    .required()
    .messages({
      'string.base': 'Email должен быть строкой',
      'string.empty': 'Email обязателен для заполнения',
      'string.email': 'Некорректный email адрес',
      'any.required': 'Email обязателен для заполнения'
    }),

  phone: Joi.string()
    .pattern(/^\+?[\d\s\-\(\)]{10,20}$/)
    .trim()
    .allow('')
    .optional()
    .messages({
      'string.base': 'Телефон должен быть строкой',
      'string.pattern.base': 'Некорректный номер телефона'
    }),

  message: Joi.string()
    .min(10)
    .max(2000)
    .trim()
    .required()
    .messages({
      'string.base': 'Сообщение должно быть строкой',
      'string.empty': 'Сообщение обязательно для заполнения',
      'string.min': 'Сообщение должно содержать минимум 10 символов',
      'string.max': 'Сообщение не должно превышать 2000 символов',
      'any.required': 'Сообщение обязательно для заполнения'
    }),

  agreement: Joi.boolean()
    .valid(true)
    .required()
    .messages({
      'boolean.base': 'Согласие должно быть булевым значением',
      'any.only': 'Необходимо согласие на обработку персональных данных',
      'any.required': 'Необходимо согласие на обработку персональных данных'
    }),

  // Дополнительные поля для анализа и отслеживания
  utm_source: Joi.string().trim().optional(),
  utm_medium: Joi.string().trim().optional(),
  utm_campaign: Joi.string().trim().optional(),
  utm_content: Joi.string().trim().optional(),
  utm_term: Joi.string().trim().optional(),
  referrer: Joi.string().uri().optional(),
  userAgent: Joi.string().optional()
});

const validateContactForm = (data) => {
  const { error, value } = contactFormSchema.validate(data, {
    abortEarly: false, // Показывать все ошибки сразу
    stripUnknown: true, // Удалять неизвестные поля
    convert: true // Автоматическое преобразование типов
  });

  if (error) {
    error.isJoi = true;
    throw error;
  }

  return value;
};

module.exports = { contactFormSchema, validateContactForm }; 