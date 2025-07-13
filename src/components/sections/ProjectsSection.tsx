"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Clock, 
  ExternalLink, 
  Play,
  ArrowRight,
  Star,
  Trophy,
  Target,
  ShoppingCart,
  Bot,
  BarChart3,
  Brain,
  Eye,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  description: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  technologies: string[];
  timeline: string;
  image: string;
  featured: boolean;
  status: "completed" | "ongoing";
}

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", name: "Все проекты", icon: <Briefcase className="h-4 w-4" /> },
    { id: "automation", name: "Автоматизация", icon: <Bot className="h-4 w-4" /> },
    { id: "analytics", name: "Аналитика", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "ml", name: "Машинное обучение", icon: <Brain className="h-4 w-4" /> },
    { id: "vision", name: "Компьютерное зрение", icon: <Eye className="h-4 w-4" /> }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "ИИ-ассистент для интернет-магазина",
      category: "automation",
      client: "Крупная e-commerce сеть",
      description: "Разработка умного чат-бота для автоматизации продаж, обработки заказов и консультации клиентов с интеграцией в CRM систему.",
      results: [
        { metric: "Рост конверсии", value: "185%", improvement: "+85%" },
        { metric: "Время ответа", value: "< 2 сек", improvement: "-95%" },
        { metric: "Обработка заявок", value: "24/7", improvement: "+200%" }
      ],
      technologies: ["OpenAI GPT", "Python", "FastAPI", "PostgreSQL", "React"],
      timeline: "3 месяца",
      image: "/api/placeholder/400/250",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "Система предиктивной аналитики",
      category: "analytics",
      client: "Производственная компания",
      description: "ML-модель для прогнозирования спроса, оптимизации запасов и планирования производства на основе исторических данных.",
      results: [
        { metric: "Точность прогнозов", value: "94%", improvement: "+34%" },
        { metric: "Сокращение запасов", value: "40%", improvement: "-40%" },
        { metric: "Экономия бюджета", value: "12М ₽", improvement: "+25%" }
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Airflow", "Tableau"],
      timeline: "4 месяца",
      image: "/api/placeholder/400/250",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "Рекомендательная система",
      category: "ml",
      client: "Медиа платформа",
      description: "Персонализированные рекомендации контента на базе машинного обучения для увеличения времени пребывания пользователей.",
      results: [
        { metric: "Время сессии", value: "+127%", improvement: "+127%" },
        { metric: "CTR", value: "8.4%", improvement: "+240%" },
        { metric: "Retention", value: "73%", improvement: "+45%" }
      ],
      technologies: ["PyTorch", "Redis", "Kafka", "MongoDB", "Docker"],
      timeline: "5 месяцев",
      image: "/api/placeholder/400/250",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Контроль качества на производстве",
      category: "vision",
      client: "Автомобильный завод",
      description: "Система компьютерного зрения для автоматического контроля качества деталей и выявления дефектов на конвейере.",
      results: [
        { metric: "Выявление дефектов", value: "99.2%", improvement: "+15%" },
        { metric: "Время проверки", value: "0.3 сек", improvement: "-98%" },
        { metric: "Снижение брака", value: "78%", improvement: "-78%" }
      ],
      technologies: ["OpenCV", "YOLO", "PyTorch", "FastAPI", "NVIDIA Jetson"],
      timeline: "6 месяцев",
      image: "/api/placeholder/400/250",
      featured: true,
      status: "ongoing"
    },
    {
      id: 5,
      title: "Аналитика клиентского поведения",
      category: "analytics",
      client: "Ритейл сеть",
      description: "Комплексная аналитическая платформа для отслеживания поведения покупателей и оптимизации маркетинговых кампаний.",
      results: [
        { metric: "ROI маркетинга", value: "320%", improvement: "+120%" },
        { metric: "Персонализация", value: "89%", improvement: "+89%" },
        { metric: "LTV клиентов", value: "+56%", improvement: "+56%" }
      ],
      technologies: ["Apache Spark", "Elasticsearch", "Kibana", "Python", "PostgreSQL"],
      timeline: "4 месяца",
      image: "/api/placeholder/400/250",
      featured: false,
      status: "completed"
    },
    {
      id: 6,
      title: "Автоматизация документооборота",
      category: "automation",
      client: "Финансовая организация",
      description: "RPA-решение для автоматической обработки документов, извлечения данных и интеграции с корпоративными системами.",
      results: [
        { metric: "Скорость обработки", value: "900%", improvement: "+800%" },
        { metric: "Точность данных", value: "99.7%", improvement: "+12%" },
        { metric: "Экономия времени", value: "80 ч/день", improvement: "-85%" }
      ],
      technologies: ["UiPath", "Python", "OCR", "SAP", "REST API"],
      timeline: "3 месяца",
      image: "/api/placeholder/400/250",
      featured: false,
      status: "completed"
    }
  ];

  // Фильтрация проектов
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Статистика
  const stats = {
    totalProjects: projects.length,
    completedProjects: projects.filter(p => p.status === "completed").length,
    avgImprovement: "156%",
    clientSatisfaction: "98%"
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-muted/30">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Заголовок секции */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">
              Наши достижения
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Проекты
            <span className="text-accent"> AIronLab</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Реальные кейсы внедрения ИИ-решений с измеримыми результатами для бизнеса
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-accent/10">
              <div className="text-2xl font-bold text-accent mb-1">{stats.totalProjects}+</div>
              <div className="text-sm text-foreground/60">Проектов</div>
            </div>
            <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-accent/10">
              <div className="text-2xl font-bold text-accent mb-1">{stats.avgImprovement}</div>
              <div className="text-sm text-foreground/60">Ср. улучшение</div>
            </div>
            <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-accent/10">
              <div className="text-2xl font-bold text-accent mb-1">{stats.clientSatisfaction}</div>
              <div className="text-sm text-foreground/60">Довольных клиентов</div>
            </div>
            <div className="text-center p-4 bg-white/40 backdrop-blur-sm rounded-2xl border border-accent/10">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Поддержка</div>
            </div>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-accent text-white border-accent shadow-lg scale-105"
                    : "bg-white/60 text-foreground/80 border-accent/20 hover:border-accent/40 hover:bg-white/80"
                }`}
              >
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>Топ проект</span>
                </div>
              )}

              {/* Status badge */}
              <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium ${
                project.status === "completed" 
                  ? "bg-green-100 text-green-800" 
                  : "bg-blue-100 text-blue-800"
              }`}>
                {project.status === "completed" ? "Завершен" : "В работе"}
              </div>

              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center">
                    {project.category === "automation" && <Bot className="h-10 w-10 text-accent" />}
                    {project.category === "analytics" && <BarChart3 className="h-10 w-10 text-accent" />}
                    {project.category === "ml" && <Brain className="h-10 w-10 text-accent" />}
                    {project.category === "vision" && <Eye className="h-10 w-10 text-accent" />}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Заголовок и клиент */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-2">{project.client}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Результаты */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="text-center p-2 bg-accent/5 rounded-lg">
                      <div className="text-sm font-bold text-accent">{result.value}</div>
                      <div className="text-xs text-foreground/60">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Технологии */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-accent/10 text-xs text-accent rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-accent/10 text-xs text-accent rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Срок выполнения */}
                <div className="flex items-center text-sm text-foreground/60 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{project.timeline}</span>
                </div>

                {/* Действия */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-2 text-accent font-medium hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-sm">Детали</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  
                  <button className="flex items-center space-x-1 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Кейс</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-accent/10 via-white/50 to-accent/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-accent/20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ваш проект может быть следующим!
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Обсудим ваши задачи и создадим решение, которое принесет измеримые результаты вашему бизнесу
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="relative overflow-hidden group min-w-[200px] shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Обсудить проект</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px] bg-white/50 backdrop-blur-sm border-foreground/20 hover:bg-white/70 hover:border-accent/40"
              >
                <span className="flex items-center space-x-2">
                  <Play className="h-5 w-5 text-accent" />
                  <span>Смотреть кейсы</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно детального просмотра */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                  <p className="text-accent font-medium">{selectedProject.client}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {selectedProject.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-accent/5 rounded-2xl">
                    <div className="text-2xl font-bold text-accent mb-1">{result.value}</div>
                    <div className="text-sm text-foreground/60 mb-1">{result.metric}</div>
                    <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                  </div>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Технологии:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center text-foreground/60">
                <Clock className="h-4 w-4 mr-2" />
                <span>Срок выполнения: {selectedProject.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}; 