import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { Users, ThumbsUp, Star, Headset } from 'lucide-react';
const stats = [
{
  icon: Users,
  value: 5000,
  prefix: '+',
  suffix: '',
  label: 'Estudiantes activos'
},
{
  icon: ThumbsUp,
  value: 95,
  prefix: '',
  suffix: '%',
  label: 'Recomiendan la guía'
},
{
  icon: Star,
  value: 4.9,
  prefix: '',
  suffix: '',
  decimals: 1,
  label: 'Valoración promedio'
},
{
  icon: Headset,
  value: 24,
  prefix: '',
  suffix: '/7',
  label: 'Soporte a la comunidad'
}];

export function WhyUs() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
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
            className="text-3xl md:text-5xl font-heading font-bold mb-8">
            
            Por qué elegir{' '}
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
              delay: 0.1
            }}
            className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
            
            "IndicadoresVIP fue creado para ayudar a personas que quieren entrar
            al mundo del trading con más claridad, evitando errores comunes y
            aprendiendo paso a paso."
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1,
              duration: 0.4
            }}
            className="glass-card p-6 flex flex-col items-center text-center group">
            
              <stat.icon className="w-8 h-8 text-gold mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                <AnimatedCounter
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals} />
              
              </div>
              <div className="text-sm text-zinc-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}