import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { EbookMockup } from './EbookMockup';
import { AnimatedCounter } from './AnimatedCounter';
export function GuideSection() {
  const pdfLink =
  'https://www.fxlifestyle.com/wp-content/uploads/2026/05/vip_indicators_trading_indicators_guide.pdf';
  const features = [
  'Conceptos básicos y terminología esencial',
  'Cómo leer e interpretar velas japonesas',
  'Estrategias de gestión de riesgo',
  'Configuración de indicadores clave'];

  return (
    <section
      id="guia"
      className="py-24 relative overflow-hidden bg-zinc-900/30 border-y border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mockup */}
          <div className="order-2 lg:order-1 flex justify-center">
            <EbookMockup />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">
              
              <span className="text-xs font-bold tracking-wider text-gold uppercase">
                Guía Gratuita
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              
              Descarga gratis la guía de{' '}
              <span className="text-gradient-gold">IndicadoresVIP</span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="text-lg text-zinc-400 mb-8">
              
              Acelera tu curva de aprendizaje. Hemos condensado años de
              experiencia en un manual práctico que te enseñará los conceptos
              esenciales para operar con confianza.
            </motion.p>

            <motion.ul
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3
              }}
              className="space-y-4 mb-10">
              
              {features.map((feature, idx) =>
              <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              )}
            </motion.ul>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4
              }}
              className="flex flex-col sm:flex-row items-center gap-6">
              
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg">
                
                <Download className="w-5 h-5" />
                <span>Descargar PDF</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-dark flex items-center justify-center">
                    
                      <span className="text-[10px] text-zinc-500">👤</span>
                    </div>
                  )}
                </div>
                <p>
                  Más de{' '}
                  <strong className="text-white">
                    <AnimatedCounter end={12800} prefix="+" />
                  </strong>{' '}
                  traders
                  <br />
                  ya la descargaron
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}