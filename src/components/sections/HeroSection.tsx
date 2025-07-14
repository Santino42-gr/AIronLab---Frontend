"use client";

import React from "react";
import { ArrowRight, Sparkles, Zap, Brain, Bot, Cpu, Eye, Network, Database, Activity, Layers, Lightbulb, CircuitBoard, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scrollToSection, getImagePath } from "@/lib/utils";

export const HeroSection: React.FC = () => {
  const handleCTAClick = () => {
    scrollToSection("contact");
  };

  const handleServicesClick = () => {
    scrollToSection("services");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-30"></div>
      </div>

      {/* ИИ интерактивные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ИИ иконки в рандомных позициях */}
        <div className="absolute top-[15%] left-[8%] animate-float group-hover:scale-110 transition-transform duration-300">
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Brain className="h-7 w-7 text-accent" />
          </div>
        </div>
        
        <div className="absolute top-[22%] right-[12%] animate-float-delayed group-hover:scale-110 transition-transform duration-300">
          <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="absolute top-[68%] left-[5%] animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "1.2s" }}>
          <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Bot className="h-8 w-8 text-accent" />
          </div>
        </div>

        <div className="absolute top-[75%] right-[7%] animate-float-delayed group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "0.8s" }}>
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Network className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="absolute top-[35%] left-[88%] animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "1.8s" }}>
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Eye className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="absolute top-[82%] left-[45%] animate-float-delayed group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "2.3s" }}>
          <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Database className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="absolute top-[8%] left-[65%] animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "0.5s" }}>
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Activity className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="absolute top-[45%] left-[2%] animate-float-delayed group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "1.5s" }}>
          <div className="p-3.5 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Layers className="h-7 w-7 text-primary" />
          </div>
        </div>

        <div className="absolute top-[58%] right-[25%] animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "2.1s" }}>
          <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <Lightbulb className="h-6 w-6 text-accent" />
          </div>
        </div>

        <div className="absolute top-[12%] left-[35%] animate-float-delayed group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: "1.7s" }}>
          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-primary/20 hover:bg-primary/20 hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto">
            <CircuitBoard className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Интерактивные частицы в рандомных позициях */}
        <div className="absolute top-[28%] left-[72%] w-2 h-2 bg-accent rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-[43%] right-[15%] w-3 h-3 bg-primary rounded-full animate-ping opacity-40" style={{ animationDelay: "1.3s" }}></div>
        <div className="absolute bottom-[28%] left-[18%] w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" style={{ animationDelay: "2.1s" }}></div>
        <div className="absolute bottom-[15%] right-[35%] w-3 h-3 bg-primary rounded-full animate-ping opacity-40" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute top-[38%] left-[93%] w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" style={{ animationDelay: "1.8s" }}></div>
        <div className="absolute bottom-[35%] right-[8%] w-3 h-3 bg-primary rounded-full animate-ping opacity-40" style={{ animationDelay: "1.1s" }}></div>
        <div className="absolute top-[52%] left-[78%] w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" style={{ animationDelay: "0.4s" }}></div>
        <div className="absolute bottom-[48%] left-[28%] w-3 h-3 bg-primary rounded-full animate-ping opacity-40" style={{ animationDelay: "2.5s" }}></div>

        {/* Геометрические фигуры с ИИ-тематикой */}
        <div className="absolute top-[25%] right-[22%] w-12 h-12 border-2 border-accent/30 rotate-45 animate-spin-slow hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto"></div>
        <div className="absolute top-[78%] left-[22%] w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto"></div>
        <div className="absolute top-[48%] right-[5%] w-10 h-10 border-2 border-primary/30 rounded-full animate-spin-slow hover:border-primary hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto" style={{ animationDelay: "3.2s" }}></div>
        <div className="absolute top-[65%] left-[68%] w-14 h-14 border-2 border-accent/30 rotate-12 animate-spin-slow hover:border-accent hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto" style={{ animationDelay: "1.8s" }}></div>
        <div className="absolute top-[18%] left-[82%] w-8 h-8 bg-gradient-to-r from-accent/20 to-primary/20 rotate-45 animate-pulse hover:scale-125 transition-all duration-300 cursor-pointer pointer-events-auto" style={{ animationDelay: "2.7s" }}></div>
        
        {/* ИИ звёздочки в рандомных позициях */}
        <div className="absolute top-[13%] left-[28%] animate-twinkle">
          <Star className="h-4 w-4 text-accent/60" />
        </div>
        <div className="absolute top-[85%] right-[28%] animate-twinkle" style={{ animationDelay: "1.8s" }}>
          <Star className="h-3 w-3 text-primary/60" />
        </div>
        <div className="absolute top-[32%] right-[45%] animate-twinkle" style={{ animationDelay: "1.2s" }}>
          <Star className="h-4 w-4 text-accent/60" />
        </div>
        <div className="absolute top-[72%] left-[75%] animate-twinkle" style={{ animationDelay: "2.8s" }}>
          <Star className="h-3 w-3 text-primary/60" />
        </div>
        <div className="absolute top-[55%] right-[82%] animate-twinkle" style={{ animationDelay: "2.2s" }}>
          <Star className="h-4 w-4 text-accent/60" />
        </div>
        <div className="absolute top-[88%] left-[85%] animate-twinkle" style={{ animationDelay: "0.9s" }}>
          <Star className="h-3 w-3 text-primary/60" />
        </div>
        <div className="absolute top-[5%] left-[52%] animate-twinkle" style={{ animationDelay: "3.1s" }}>
          <Star className="h-4 w-4 text-accent/60" />
        </div>
      </div>

      <div className="container-custom text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8 animate-slide-down shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <Zap className="h-4 w-4 text-accent animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">
            ИИ автоматизации для бизнеса
          </span>
        </div>

        {/* Заголовок с иконкой и интерактивными элементами */}
        <div className="relative">
          {/* Декоративные элементы вокруг заголовка */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s" }}></div>
          
          <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up hover:scale-105 transition-transform duration-500" style={{ animationDelay: "0.6s" }}>
            <img
              src={getImagePath("/images/icon.png")}
              alt="AIronLab Icon"
              className="h-16 md:h-20 object-contain hover:rotate-12 transition-transform duration-300"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              AIronLab
            </h1>
          </div>
        </div>

        {/* Подзаголовок с декоративными элементами */}
        <div className="relative">
          <div className="absolute -left-8 top-1/2 w-4 h-4 bg-accent/40 rounded-full animate-pulse"></div>
          <div className="absolute -right-8 top-1/2 w-4 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up hover:text-foreground/90 transition-colors duration-300" style={{ animationDelay: "0.9s" }}>
            Уникальные ИИ-решения для вашего бизнеса
          </p>
        </div>

        {/* Дополнительное описание с интерактивными элементами */}
        <div className="relative">
          <div className="absolute -top-2 left-1/4 animate-float">
            <Sparkles className="h-5 w-5 text-accent/50" />
          </div>
          <div className="absolute -bottom-2 right-1/4 animate-float-delayed">
            <Brain className="h-5 w-5 text-primary/50" />
          </div>
          
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in hover:text-foreground/80 transition-colors duration-300" style={{ animationDelay: "1.2s" }}>
            Автоматизируем процессы, анализируем данные в реальном времени и создаем персонализированный опыт для ваших клиентов
          </p>
        </div>

        {/* CTA кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "1.5s" }}>
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="relative overflow-hidden group min-w-[200px] shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Оставить заявку</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Анимированный фон */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button
            variant="outline"
            onClick={handleServicesClick}
            size="lg"
            className="relative overflow-hidden group min-w-[200px] bg-white/50 backdrop-blur-sm border-foreground/20 hover:bg-white/70 hover:border-accent/40"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <span>Наши услуги</span>
            </span>
          </Button>
        </div>

        {/* Статистика или дополнительная информация */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "1.8s" }}>
          <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-foreground/60">Успешных проектов</div>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-foreground/60">Поддержка клиентов</div>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-foreground/60">Время работы ИИ</div>
          </div>
        </div>
      </div>

    </section>
  );
}; 