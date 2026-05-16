import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Mountain } from
'lucide-react';
const benefits = [
{
  icon: GraduationCap,
  title: 'Aprende desde cero',
  description:
  'No necesitas experiencia previa. Te guiamos paso a paso desde los conceptos más básicos hasta estrategias avanzadas.'
},
{
  icon: Brain,
  title: 'Psicología del trading',
  description:
  'Domina tus emociones. Aprende a mantener la calma y tomar decisiones racionales en momentos de alta volatilidad.'
},
{
  icon: Shield,
  title: 'Gestión de riesgo',
  description:
  'Protege tu capital. Descubre cómo calcular el tamaño de tus posiciones y establecer stop losses efectivos.'
},
{
  icon: Target,
  title: 'Entradas de alta probabilidad',
  description:
  'Aprende a identificar configuraciones del mercado que ofrecen el mejor ratio riesgo-beneficio.'
},
{
  icon: TrendingUp,
  title: 'Análisis técnico',
  description:
  'Lee el mercado como un profesional. Domina la acción del precio, soportes, resistencias y patrones clave.'
},
{
  icon: Mountain,
  title: 'Disciplina y mentalidad',
  description:
  'Desarrolla la constancia necesaria para seguir tu plan de trading y alcanzar la rentabilidad a largo plazo.'
}];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
            className="text-3xl md:text-5xl font-heading font-bold mb-4">
            
            Lo que vas a <span className="text-gradient-gold">dominar</span>
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
              delay: 0.1
            }}
            className="text-zinc-400 max-w-2xl mx-auto">
            
            Nuestra metodología está diseñada para construir traders
            consistentes y disciplinados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="glass-card p-8 group hover:border-gold/30 transition-colors duration-300 relative overflow-hidden">
            
              {/* Hover Glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}