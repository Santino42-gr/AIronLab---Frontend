"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

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

      <div className="container-custom text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8 animate-slide-down shadow-lg">
          <Zap className="h-4 w-4 text-accent animate-pulse" />
          <span className="text-sm font-medium text-foreground/80">
            ИИ автоматизации для бизнеса
          </span>
        </div>



        {/* Заголовок с иконкой */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Image
            src="/images/icon.png"
            alt="AIronLab Icon"
            width={80}
            height={80}
            className="h-16 md:h-20 object-contain"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-black">
            AIronLab
          </h1>
        </div>

        {/* Подзаголовок */}
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.9s" }}>
          Уникальные ИИ-решения для вашего бизнеса
        </p>

        {/* Дополнительное описание */}
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "1.2s" }}>
          Автоматизируем процессы, анализируем данные в реальном времени и создаем персонализированный опыт для ваших клиентов
        </p>

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
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-foreground/60">Успешных проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-foreground/60">Поддержка клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-foreground/60">Время работы ИИ</div>
          </div>
        </div>
      </div>


    </section>
  );
}; 