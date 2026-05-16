import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const testimonials = [
{
  name: 'Carlos M.',
  role: 'Trader Principiante',
  quote:
  'Ahora entiendo mejor el mercado. La guía me dio la base que necesitaba para dejar de operar al azar y empezar a analizar de verdad.',
  initial: 'C'
},
{
  name: 'María R.',
  role: 'Estudiante',
  quote:
  'Excelente guía para empezar. Explica conceptos complejos de una manera muy sencilla. El diseño y la estructura son top.',
  initial: 'M'
},
{
  name: 'Andrés P.',
  role: 'Emprendedor',
  quote:
  'Aprendí disciplina y análisis. Entendí que el trading es 80% psicología y gestión de riesgo. Totalmente recomendado.',
  initial: 'A'
},
{
  name: 'Laura G.',
  role: 'Trader Intermedio',
  quote:
  'Incluso teniendo algo de experiencia, encontré pepitas de oro en esta guía. Me ayudó a refinar mis entradas.',
  initial: 'L'
},
{
  name: 'Diego S.',
  role: 'Estudiante',
  quote:
  'El soporte por WhatsApp es increíble. Resolvieron mis dudas rápido y me guiaron en mis primeros pasos.',
  initial: 'D'
},
{
  name: 'Valentina T.',
  role: 'Profesional',
  quote:
  'Buscaba una fuente confiable de educación financiera y la encontré aquí. Cero humo, pura información de valor.',
  initial: 'V'
}];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-24 relative bg-zinc-900/30 border-t border-white/5">
      
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
            
            Lo que dicen nuestros{' '}
            <span className="text-gradient-gold">estudiantes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) =>
          <motion.div
            key={idx}
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
              delay: idx * 0.1
            }}
            className="glass-card p-8 relative">
            
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) =>
              <Star key={star} className="w-4 h-4 text-gold fill-gold" />
              )}
              </div>

              <p className="text-zinc-300 mb-8 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-bold font-heading">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <span className="text-zinc-500 text-xs">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}