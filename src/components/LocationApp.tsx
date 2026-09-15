import React from 'react';
import { MapPin, Clock, Truck, CalendarCheck } from 'lucide-react';

interface LocationAppProps {
  whatsappNumber: string;
}

const LocationApp: React.FC<LocationAppProps> = ({ whatsappNumber }) => {
  const appointmentUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    '¡Hola! Quisiera coordinar una cita para visitar el taller y consultar por muebles a medida.'
  )}`;

  return (
    <section id="ubicacion" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-accent uppercase bg-brand-accent/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Atención Personalizada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight uppercase">
            Nuestro Taller y Ubicación
          </h2>
          <p className="mt-3 text-base text-brand-dark/70">
            Visitános para conocer las texturas de MDF, muestras de melaminas y asesorarte con planos o medidas para tu hogar.
          </p>
        </div>

        {/* Grid Principal: Info + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjetas de Información */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Ubicación y Dirección */}
            <div className="bg-brand-light/30 p-6 rounded-2xl border border-brand-light flex items-start space-x-4 shadow-xs">
              <div className="p-3 bg-brand-accent text-white rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Dirección del Taller</h3>
                <p className="text-sm text-brand-dark/80 mt-1">
                  Asturias 2871, Córdoba Capital, Argentina.
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Asesoramiento individualizado en el taller.
                </p>
              </div>
            </div>

            {/* Horarios de Atención */}
            <div className="bg-brand-light/30 p-6 rounded-2xl border border-brand-light flex items-start space-x-4 shadow-xs">
              <div className="p-3 bg-brand-accent text-white rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Horarios de Atención</h3>
                <p className="text-sm text-brand-dark/80 mt-1">
                  <span className="font-semibold">Lunes a Viernes:</span> 09:00 a 17:00 hs
                </p>
                <p className="text-sm text-brand-dark/80">
                  <span className="font-semibold">Sábados:</span> 09:00 a 12:00 hs
                </p>
              </div>
            </div>

            {/* Zonas de Cobertura */}
            <div className="bg-brand-light/30 p-6 rounded-2xl border border-brand-light flex items-start space-x-4 shadow-xs">
              <div className="p-3 bg-brand-accent text-white rounded-xl shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Zonas de Envíos y Armado</h3>
                <p className="text-sm text-brand-dark/80 mt-1">
                 Instalación solo para Córdoba Capital y zonas aledañas. Envios todo el país.
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Disponemos de flete propio y equipo de montaje par Córdoba.
                </p>
              </div>
            </div>

            {/* Botón de Coordinar Visita */}
            <a
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 bg-brand-brown hover:bg-brand-dark text-white font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md text-center"
            >
              <CalendarCheck className="w-5 h-5 text-brand-accent" />
              <span>Consultanos por WhatsApp</span>
            </a>

          </div>

          {/* Mapa Interactivo Google Maps */}
          <div className="lg:col-span-7 min-h-[350px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-md border border-brand-light relative bg-gray-100">
            <iframe
              title="Mapa Ubicación Taller Córdoba"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2330966571203!2d-64.15145552478664!3d-31.435249197162758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2cd392794cb%3A0x9ae68f4707cf665e!2sAsturias%202871%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1789497790675!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationApp;
