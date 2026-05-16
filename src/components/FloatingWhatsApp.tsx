import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function FloatingWhatsApp() {
  const whatsappLink =
  'https://wa.me/56984413571?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20IndicadoresVIP%20📈';
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 1,
        type: 'spring',
        stiffness: 200,
        damping: 20
      }}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-shadow group"
      aria-label="Contactar por WhatsApp">
      
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-dark border border-white/10 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Dudas? Escríbenos
      </div>
    </motion.a>);

}