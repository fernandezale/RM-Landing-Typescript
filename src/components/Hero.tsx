import React, { useState } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Ruler, Truck } from 'lucide-react';
import EmblaCarousel from './EmblaCarousel'
import type{ EmblaOptionsType } from 'embla-carousel' 

interface HeroSlide {
  titulo: string,
  distintivo: string,
  descripcion: string,
  textoDestacado: string,
  imagen: string
}

interface HeroProps {
  whatsappNumber: string;
}

const Hero = ({ whatsappNumber }: HeroProps) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('¡Hola! Quisiera solicitar un presupuesto para un mueble a medida.')}`;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const HeroSlides : HeroSlide[] = [
  {
    titulo: 'Muebles de MDF a medida para tu hogar.',
    distintivo: 'Fabricación Directa de Barrio',
    descripcion: 'Diseñamos y fabricamos escritorios, racks y organizadores funcionales. Calidad de MDF premium y encastres precisos.',
    textoDestacado: 'Traé tus medidas o planos y lo armamos juntos.',
    imagen: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',

  },
  {
    titulo: 'Escritorios diseñados para tu productividad.',
    distintivo: 'Espacios de Trabajo',
    descripcion: 'Optimizá tu home office con soluciones robustas, pasacables integrados y terminaciones de primera.',
    textoDestacado: 'Adaptamos la altura y profundidad a tus requerimientos.',
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    titulo: 'Racks y estanterías a tu medida.',
    distintivo: 'Organización & Diseño',
    descripcion: 'Aprovechá al máximo cada rincón de tu living o dormitorio con muebles modulares en MDF.',
    textoDestacado: 'Estructuras firmes y acabados listos para pintar o laquear.',
    imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
  },
  ];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HeroSlides.length - 1 ? 0 : prev + 1));
    console.log(currentSlide);
  };
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HeroSlides.length - 1 : prev -1));
    console.log(currentSlide);
  };

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 10 }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return(
    
    <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-b from-brand-light to-brand-accent/60">
      
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <button 
        onClick={previousSlide}
        className="p-2 rounded-full bg-brand-brown/40 hover:bg-brand-brown text-brand-light transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="p-2 rounded-full bg-brand-brown/40 hover:bg-brand-brown text-brand-light transition-colors"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-brown/10 text-brand-brown px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              <span>{HeroSlides[currentSlide].distintivo}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight tracking-tight">
              {HeroSlides[currentSlide].titulo}
            </h1>
            
            <p className="text-lg text-brand-dark/80 leading-relaxed">
              {HeroSlides[currentSlide].descripcion}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-brand-accent hover:bg-[#885442] text-brand-light px-7 py-4 rounded-xl font-bold text-base shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Presupuesto por WhatsApp</span>
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center space-x-2 bg-brand-brown hover:bg-brand-dark text-brand-light px-7 py-4 rounded-xl font-semibold text-base shadow transition-all"
              >
                <span>Ver Catálogo</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-muted/30">
              <div className="flex items-center space-x-2 text-xs font-medium text-brand-dark">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>MDF 18mm Resistente</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-brand-dark">
                <Ruler className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Cortes a Medida</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-brand-dark">
                <Truck className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Envío Local</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-brown">
              <img
                src={HeroSlides[currentSlide].imagen}
                alt="Taller de Muebles en MDF"
                className="w-full h-400px sm:h-480px object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to from-brand-dark/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-brand-light/95 backdrop-blur-sm p-4 rounded-2xl border border-brand-muted/40 shadow-lg">
                <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">Atención personalizada</p>
                <p className="text-sm font-bold text-brand-dark">Traé tus medidas o planos y lo armamos juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Hero;

  