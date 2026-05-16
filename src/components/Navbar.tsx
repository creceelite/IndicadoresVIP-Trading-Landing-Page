import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, MessageCircle, Menu, X } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const whatsappLink =
  'https://wa.me/56984413571?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20IndicadoresVIP%20📈';
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold/40 transition-colors">
            <TrendingUp className="text-gold w-6 h-6" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-white">
            Indicadores<span className="text-gold">VIP</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#beneficios"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            
            Beneficios
          </a>
          <a
            href="#guia"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            
            Guía Gratis
          </a>
          <a
            href="#testimonios"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            
            Testimonios
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all duration-300 text-sm font-medium">
            
            <MessageCircle className="w-4 h-4 text-gold" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-dark border-b border-white/10 overflow-hidden">
          
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 py-2">
              
                Beneficios
              </a>
              <a
              href="#guia"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 py-2">
              
                Guía Gratis
              </a>
              <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 py-2">
              
                Testimonios
              </a>
              <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gold text-dark font-semibold mt-4">
              
                <MessageCircle className="w-5 h-5" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}