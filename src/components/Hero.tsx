import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Star, Users, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
export function Hero() {
  const whatsappLink =
  'https://wa.me/56984413571?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20IndicadoresVIP%20📈';
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Abstract Chart Lines SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 1000">
          
          <path
            d="M0,800 L100,750 L200,780 L300,600 L400,650 L500,400 L600,480 L700,200 L800,250 L900,100 L1000,150"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2" />
          
          <path
            d="M0,900 L150,850 L250,880 L350,700 L450,750 L550,500 L650,580 L750,300 L850,350 L1000,200"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="5,5" />
          
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">
              Educación Financiera Premium
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
            
            Aprende Trading con <br className="hidden md:block" />
            <span className="text-gradient-gold">IndicadoresVIP</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            
            Tu guía para entender el mercado, operar con disciplina y mejorar tu
            análisis. Construye una base sólida para tu libertad financiera.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            
            <a
              href="#guia"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg group">
              
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Descargar Guía Gratis</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              
              <MessageCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              <span>Hablar por WhatsApp</span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl mx-auto">
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl font-heading font-bold text-white mb-1">
                <AnimatedCounter end={12847} prefix="+" />
              </div>
              <span className="text-sm text-zinc-500">Descargas</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl font-heading font-bold text-white mb-1">
                <AnimatedCounter end={5200} prefix="+" />
              </div>
              <span className="text-sm text-zinc-500">Estudiantes</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="flex items-center gap-1 text-2xl font-heading font-bold text-white mb-1">
                4.9
                <Star className="w-5 h-5 text-gold fill-gold" />
              </div>
              <span className="text-sm text-zinc-500">Valoración</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}