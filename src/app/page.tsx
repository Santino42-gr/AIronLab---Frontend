"use client";

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />

      <section id="services" className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Услуги</h2>
          <p className="text-foreground/80">Наши ИИ-решения</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Проекты</h2>
          <p className="text-foreground/80">Наши успешные проекты</p>
        </div>
      </section>

      <section id="pricing" className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
          <p className="text-foreground/80">Выберите подходящий план</p>
        </div>
      </section>

      <section id="faq" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">FAQ</h2>
          <p className="text-foreground/80">Часто задаваемые вопросы</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-primary-foreground/80">Свяжитесь с нами</p>
        </div>
      </section>
    </main>
  );
} 