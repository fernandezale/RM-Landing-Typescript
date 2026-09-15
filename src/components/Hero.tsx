import EmblaCarousel from './EmblaCarousel'
import type { EmblaOptionsType } from 'embla-carousel' 

export interface HeroSlide {
  titulo: string,
  distintivo: string,
  descripcion: string,
  textoDestacado: string,
  imagen: string
}

interface HeroProps {
  whatsappNumber?: string;
}

const Hero = ({ whatsappNumber }: HeroProps) => {
  const HeroSlides : HeroSlide[] = [
  {
    titulo: 'Muebles de MDF a medida para tu hogar.',
    distintivo: 'Fabricación Directa de Barrio',
    descripcion: 'Diseñamos y fabricamos escritorios, racks y organizadores funcionales. Calidad de MDF premium y encastres precisos.',
    textoDestacado: 'Traé tus medidas o planos y lo armamos juntos.',
    imagen: '/IMG_5963.webp',

  },
  {
    titulo: 'Escritorios diseñados para tu productividad.',
    distintivo: 'Espacios de Trabajo',
    descripcion: 'Optimizá tu home office con soluciones robustas, pasacables integrados y terminaciones de primera.',
    textoDestacado: 'Adaptamos la altura y profundidad a tus requerimientos.',
    imagen: '/IMG_5963.png',
  },
  {
    titulo: 'Racks y estanterías a tu medida.',
    distintivo: 'Organización & Diseño',
    descripcion: 'Aprovechá al máximo cada rincón de tu living o dormitorio con muebles modulares en MDF.',
    textoDestacado: 'Estructuras firmes y acabados listos para pintar o laquear.',
    imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
  },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 1 }

  return(
    
    <section className="relative overflow-hidden bg-linear-to-b from-brand-light to-brand-accent/60">
      
      <EmblaCarousel heroSlides={HeroSlides} options={OPTIONS} whatsappNumber={whatsappNumber} />
      
    </section>
    );
}
export default Hero;

  