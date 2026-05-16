import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function FinalCTA() {
  const whatsappLink =
  'https://wa.me/56984413571?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20IndicadoresVIP%20📈';
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gold/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-3xl mx-auto glass-card p-12 md:p-16 border-gold/20">
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            El trading cambia cuando tienes una{' '}
            <span className="text-gradient-gold">guía correcta.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            No operes a ciegas. Únete a nuestra comunidad y da el primer paso
            hacia tu rentabilidad hoy mismo.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold hover:bg-gold-light text-dark font-bold text-lg rounded-xl transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg group">
            
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span>Hablar por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>);

}