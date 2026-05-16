import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2 } from 'lucide-react';
export function EbookMockup() {
  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto perspective-1000"
      initial={{
        opacity: 0,
        y: 50,
        rotateY: -10
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateY: -15
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}
      viewport={{
        once: true
      }}
      whileHover={{
        rotateY: -5,
        scale: 1.02,
        transition: {
          duration: 0.3
        }
      }}>
      
      {/* Glow behind book */}
      <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full transform -translate-y-10 scale-90"></div>

      {/* Book Container */}
      <div className="relative w-full aspect-[3/4] preserve-3d shadow-2xl shadow-gold/10">
        {/* Book Spine */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-zinc-900 to-zinc-800 transform -translate-x-full origin-right rotate-y-90 border-l border-y border-white/5 flex items-center justify-center overflow-hidden">
          <div className="text-gold/50 text-[10px] tracking-[0.3em] uppercase whitespace-nowrap transform -rotate-90">
            IndicadoresVIP • Guía de Trading
          </div>
        </div>

        {/* Book Pages (Right edge) */}
        <div className="absolute right-0 top-1 bottom-1 w-6 bg-gradient-to-r from-gray-200 to-white transform translate-x-full origin-left rotate-y-90 rounded-r-sm">
          {/* Page lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_1px,rgba(0,0,0,0.05)_1px)] bg-[size:100%_3px]"></div>
        </div>

        {/* Book Cover */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 rounded-r-md border border-white/10 overflow-hidden flex flex-col">
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

          {/* Candlestick background hint */}
          <div className="absolute top-1/4 right-0 opacity-10 text-gold transform scale-150">
            <BarChart2 size={200} strokeWidth={1} />
          </div>

          <div className="relative z-10 p-8 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-auto">
              <TrendingUp className="text-gold w-6 h-6" />
              <span className="text-white font-heading font-bold tracking-wider text-sm">
                IndicadoresVIP
              </span>
            </div>

            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-wider uppercase">
                Edición 2026
              </div>
              <h3 className="text-3xl font-heading font-bold text-white leading-tight">
                La Guía
                <br />
                Definitiva
                <br />
                <span className="text-gradient-gold">de Trading</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-[200px]">
                Conceptos esenciales, psicología y análisis técnico.
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-end">
              <div className="text-xs text-zinc-500 uppercase tracking-widest">
                Vol. 1
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-gold to-transparent"></div>
            </div>
          </div>

          {/* Cover Glossy Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </motion.div>);

}