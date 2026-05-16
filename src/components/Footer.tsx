import React from 'react';
import { TrendingUp, Instagram, Facebook, Twitter } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20">
              <TrendingUp className="text-gold w-5 h-5" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              Indicadores<span className="text-gold">VIP</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-gold hover:bg-white/10 transition-all">
              
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-gold hover:bg-white/10 transition-all">
              
              <Facebook className="w-5 h-5" />
            </a>
            {/* Using Twitter icon as placeholder for TikTok since lucide doesn't have tiktok by default, or we can just use text */}
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-gold hover:bg-white/10 transition-all font-bold text-sm">
              
              TK
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 text-center md:text-left">
          <p className="max-w-2xl">
            <strong>Disclaimer:</strong> El trading implica riesgos
            significativos y puede no ser adecuado para todos los inversores. El
            alto grado de apalancamiento puede trabajar tanto a su favor como en
            su contra. Este contenido es solo educativo y no constituye asesoría
            financiera.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} IndicadoresVIP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>);

}