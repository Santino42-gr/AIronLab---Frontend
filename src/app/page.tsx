"use client";

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <FAQSection />

      <section id="contact" className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-primary-foreground/80">Свяжитесь с нами</p>
        </div>
      </section>
    </main>
  );
} 