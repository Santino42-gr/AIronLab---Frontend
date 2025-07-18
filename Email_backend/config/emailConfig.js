const nodemailer = require('nodemailer');
const { logger } = require('../utils/logger');

// Создаем транспорт для рег.ру
const createTransporter = () => {
  const config = {
    host: process.env.SMTP_HOST || 'mail.hosting.reg.ru',
    port: parseInt(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_PORT === '465', // true для 465, false для других
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    // Упрощенные настройки для базового тестирования
    pool: false, // Отключаем пул для простоты
    // Увеличенные таймауты
    connectionTimeout: 60000, // 60 секунд
    greetingTimeout: 60000, // 60 секунд  
    socketTimeout: 60000, // 60 секунд
    // Простые настройки TLS
    tls: {
      rejectUnauthorized: false
    },
    // Отладка
    debug: true,
    logger: true
  };
  
  logger.info('🔧 Создание SMTP транспорта:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    user: config.auth.user
  });

  return nodemailer.createTransport(config);
};

// Проверяем подключение при запуске
const verifyConnection = async (transporter) => {
  try {
    logger.info('🔍 Проверяем SMTP соединение...');
    await transporter.verify();
    logger.info('✅ SMTP соединение проверено успешно');
    return true;
  } catch (error) {
    logger.error('❌ Ошибка SMTP соединения:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    return false;
  }
};

// Единственный экземпляр транспорта
let transporter = null;

const getTransporter = async () => {
  if (!transporter) {
    transporter = createTransporter();
    
    // Проверяем соединение только в development режиме
    if (process.env.NODE_ENV === 'development') {
      await verifyConnection(transporter);
    }
  }
  
  return transporter;
};

module.exports = { getTransporter, verifyConnection }; 