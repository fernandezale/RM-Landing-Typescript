import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    '¡Hola! Quisiera realizar una consulta sobre sus muebles de MDF a medida.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip promocional flotante */}
      {showTooltip && (
        <div className="mb-3 mr-1 bg-white text-brand-dark px-4 py-2.5 rounded-2xl shadow-xl border border-brand-light/60 flex items-center space-x-2 animate-bounce max-w-xs transition-all">
          <span className="text-xs font-semibold leading-snug">
            ¿Tenés dudas o medidas? <br />
            <span className="text-brand-accent font-bold">¡Escribinos por WhatsApp!</span>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Cerrar"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón flotante principal de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-105 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;

