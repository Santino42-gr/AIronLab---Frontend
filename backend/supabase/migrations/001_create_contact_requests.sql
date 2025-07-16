-- Создание таблицы контактных заявок
-- Выполните эту миграцию в Supabase Dashboard или через CLI

-- Создаем ENUM типы
CREATE TYPE request_status AS ENUM ('new', 'in_progress', 'completed', 'cancelled');
CREATE TYPE request_source AS ENUM ('website', 'telegram', 'email');

-- Создаем таблицу контактных заявок
CREATE TABLE contact_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Контактная информация
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    
    -- Статус и источник заявки
    status request_status DEFAULT 'new' NOT NULL,
    source request_source DEFAULT 'website' NOT NULL,
    
    -- UTM метки для аналитики
    utm_source VARCHAR(100),
    utm_medium VARCHAR(100),
    utm_campaign VARCHAR(100),
    
    -- Метаданные
    client_ip INET,
    user_agent TEXT,
    
    -- Индексы для быстрого поиска
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_phone CHECK (phone IS NULL OR length(phone) >= 10)
);

-- Создаем индексы для оптимизации запросов
CREATE INDEX idx_contact_requests_created_at ON contact_requests(created_at DESC);
CREATE INDEX idx_contact_requests_status ON contact_requests(status);
CREATE INDEX idx_contact_requests_source ON contact_requests(source);
CREATE INDEX idx_contact_requests_email ON contact_requests(email);
CREATE INDEX idx_contact_requests_utm_source ON contact_requests(utm_source);

-- Функция для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Триггер для автоматического обновления updated_at
CREATE TRIGGER update_contact_requests_updated_at
    BEFORE UPDATE ON contact_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Настройка Row Level Security (RLS)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Политика: Анонимные пользователи могут только создавать заявки
CREATE POLICY "Анонимные пользователи могут создавать заявки" ON contact_requests
    FOR INSERT 
    WITH CHECK (true);

-- Политика: Только аутентифицированные админы могут читать все заявки
CREATE POLICY "Админы могут читать все заявки" ON contact_requests
    FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.email IN ('admin@aironlab.ru', 'sasha@aironlab.ru')
        )
    );

-- Политика: Только админы могут обновлять заявки
CREATE POLICY "Админы могут обновлять заявки" ON contact_requests
    FOR UPDATE 
    USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.email IN ('admin@aironlab.ru', 'sasha@aironlab.ru')
        )
    );

-- Комментарии к таблице и колонкам
COMMENT ON TABLE contact_requests IS 'Таблица контактных заявок с сайта';
COMMENT ON COLUMN contact_requests.id IS 'Уникальный идентификатор заявки';
COMMENT ON COLUMN contact_requests.name IS 'Имя отправителя';
COMMENT ON COLUMN contact_requests.email IS 'Email отправителя';
COMMENT ON COLUMN contact_requests.phone IS 'Телефон отправителя (опционально)';
COMMENT ON COLUMN contact_requests.message IS 'Текст сообщения';
COMMENT ON COLUMN contact_requests.status IS 'Статус обработки заявки';
COMMENT ON COLUMN contact_requests.source IS 'Источник заявки (сайт, телеграм, email)';
COMMENT ON COLUMN contact_requests.utm_source IS 'UTM source для аналитики';
COMMENT ON COLUMN contact_requests.utm_medium IS 'UTM medium для аналитики';
COMMENT ON COLUMN contact_requests.utm_campaign IS 'UTM campaign для аналитики'; 