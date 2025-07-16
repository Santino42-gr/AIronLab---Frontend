// Типы для базы данных Supabase
// Этот файл будет автоматически генерироваться командой: supabase gen types typescript

export interface Database {
  public: {
    Tables: {
      // Таблица заявок с сайта
      contact_requests: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          message: string
          status: 'new' | 'in_progress' | 'completed' | 'cancelled'
          source: 'website' | 'telegram' | 'email'
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          message: string
          status?: 'new' | 'in_progress' | 'completed' | 'cancelled'
          source?: 'website' | 'telegram' | 'email'
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          message?: string
          status?: 'new' | 'in_progress' | 'completed' | 'cancelled'
          source?: 'website' | 'telegram' | 'email'
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
        }
      }
      
      // Таблица статей блога
      blog_posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          published: boolean
          author_id: string | null
          featured_image: string | null
          tags: string[] | null
          meta_title: string | null
          meta_description: string | null
          views_count: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          published?: boolean
          author_id?: string | null
          featured_image?: string | null
          tags?: string[] | null
          meta_title?: string | null
          meta_description?: string | null
          views_count?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          published?: boolean
          author_id?: string | null
          featured_image?: string | null
          tags?: string[] | null
          meta_title?: string | null
          meta_description?: string | null
          views_count?: number
        }
      }

      // Таблица пользователей (профили)
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'admin' | 'editor' | 'user'
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'editor' | 'user'
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'editor' | 'user'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      request_status: 'new' | 'in_progress' | 'completed' | 'cancelled'
      request_source: 'website' | 'telegram' | 'email'
      user_role: 'admin' | 'editor' | 'user'
    }
  }
}

// Вспомогательные типы
export type ContactRequest = Database['public']['Tables']['contact_requests']['Row']
export type ContactRequestInsert = Database['public']['Tables']['contact_requests']['Insert']
export type ContactRequestUpdate = Database['public']['Tables']['contact_requests']['Update']

export type BlogPost = Database['public']['Tables']['blog_posts']['Row']
export type BlogPostInsert = Database['public']['Tables']['blog_posts']['Insert']
export type BlogPostUpdate = Database['public']['Tables']['blog_posts']['Update']

export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'] 