const generateContactEmailHtml = (data) => {
  const { name, email, phone, message, utm_source, utm_medium, utm_campaign, referrer, userAgent } = data;
  const timestamp = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Новая заявка с сайта AIronLab</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f8fafc;
            color: #1a202c;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 40px 30px;
        }
        .field-group {
            margin-bottom: 30px;
            border-left: 4px solid #667eea;
            padding-left: 20px;
        }
        .field-label {
            font-weight: 600;
            color: #4a5568;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
        }
        .field-value {
            font-size: 16px;
            color: #1a202c;
            background-color: #f7fafc;
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        .message-field {
            background-color: #fff;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
        }
        .message-field .field-value {
            background-color: transparent;
            border: none;
            padding: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .metadata {
            background-color: #f7fafc;
            border-radius: 12px;
            padding: 20px;
            margin-top: 30px;
        }
        .metadata h3 {
            margin: 0 0 15px 0;
            color: #4a5568;
            font-size: 16px;
        }
        .metadata-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .metadata-item:last-child {
            border-bottom: none;
        }
        .metadata-label {
            font-weight: 500;
            color: #718096;
        }
        .metadata-value {
            color: #2d3748;
            text-align: right;
            max-width: 300px;
            word-break: break-all;
        }
        .footer {
            background-color: #2d3748;
            color: #cbd5e0;
            padding: 30px;
            text-align: center;
            font-size: 14px;
        }
        .footer a {
            color: #90cdf4;
            text-decoration: none;
        }
        .priority-high {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
        }
        .urgent-badge {
            display: inline-block;
            background-color: #ff6b6b;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Новая заявка</h1>
            <p>Получена с сайта AIronLab ${timestamp}</p>
        </div>
        
        <div class="content">
            <div class="field-group">
                <div class="field-label">👤 Имя клиента</div>
                <div class="field-value">${name}</div>
            </div>
            
            <div class="field-group">
                <div class="field-label">📧 Email</div>
                <div class="field-value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </div>
            </div>
            
            ${phone ? `
            <div class="field-group">
                <div class="field-label">📞 Телефон</div>
                <div class="field-value">
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                </div>
            </div>
            ` : ''}
            
            <div class="field-group">
                <div class="field-label">💬 Сообщение</div>
                <div class="message-field">
                    <div class="field-value">${message}</div>
                </div>
            </div>
            
            <div class="metadata">
                <h3>📊 Техническая информация</h3>
                <div class="metadata-item">
                    <span class="metadata-label">Время получения:</span>
                    <span class="metadata-value">${timestamp}</span>
                </div>
                ${utm_source ? `
                <div class="metadata-item">
                    <span class="metadata-label">Источник трафика:</span>
                    <span class="metadata-value">${utm_source}</span>
                </div>
                ` : ''}
                ${utm_medium ? `
                <div class="metadata-item">
                    <span class="metadata-label">Тип трафика:</span>
                    <span class="metadata-value">${utm_medium}</span>
                </div>
                ` : ''}
                ${utm_campaign ? `
                <div class="metadata-item">
                    <span class="metadata-label">Кампания:</span>
                    <span class="metadata-value">${utm_campaign}</span>
                </div>
                ` : ''}
                ${referrer ? `
                <div class="metadata-item">
                    <span class="metadata-label">Реферер:</span>
                    <span class="metadata-value">${referrer}</span>
                </div>
                ` : ''}
                ${userAgent ? `
                <div class="metadata-item">
                    <span class="metadata-label">User Agent:</span>
                    <span class="metadata-value">${userAgent.substring(0, 100)}${userAgent.length > 100 ? '...' : ''}</span>
                </div>
                ` : ''}
            </div>
        </div>
        
        <div class="footer">
            <p><strong>AIronLab</strong> | Разработка решений на основе ИИ</p>
            <p>
                <a href="mailto:${email}">Ответить клиенту</a> | 
                <a href="https://aironlab.ru">Сайт компании</a>
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

const generateContactEmailText = (data) => {
  const { name, email, phone, message, utm_source, utm_medium, utm_campaign } = data;
  const timestamp = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow'
  });

  return `
НОВАЯ ЗАЯВКА С САЙТА AIRONLAB
=====================================

👤 Имя: ${name}
📧 Email: ${email}
${phone ? `📞 Телефон: ${phone}` : ''}

💬 СООБЩЕНИЕ:
${message}

📊 ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ:
Время: ${timestamp}
${utm_source ? `Источник: ${utm_source}` : ''}
${utm_medium ? `Тип трафика: ${utm_medium}` : ''}
${utm_campaign ? `Кампания: ${utm_campaign}` : ''}

=====================================
AIronLab - Разработка решений на основе ИИ
  `;
};

module.exports = { generateContactEmailHtml, generateContactEmailText }; 