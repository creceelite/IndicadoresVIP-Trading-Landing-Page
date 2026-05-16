import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { GuideSection } from './components/GuideSection';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
export function App() {
  useEffect(() => {
    document.title = 'IndicadoresVIP | Aprende Trading y Educación Financiera';
  }, []);
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <GuideSection />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>);

}