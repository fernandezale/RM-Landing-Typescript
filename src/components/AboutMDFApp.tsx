import React from 'react'
import { 
  PencilRuler, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Hammer, 
  Layers, 
  Recycle, 
  CheckCircle2 
} from 'lucide-react'

interface Advantage {
  id: string
  titulo: string
  descripcion: string
  icono: React.ElementType
}

const ADVANTAGES: Advantage[] = [
  {
    id: 'diseno',
    titulo: 'Diseño Exclusivo',
    descripcion: 'Adaptado completamente a las medidas de tus espacios.',
    icono: PencilRuler
  },
  {
    id: 'durabilidad',
    titulo: 'Alta Durabilidad',
    descripcion: 'Placas de MDF de alta densidad resistentes al uso diario.',
    icono: ShieldCheck
  },
  {
    id: 'acabados',
    titulo: 'Acabados Premium',
    descripcion: 'Superficies suaves e impecables listas para pintar o melamina.',
    icono: Sparkles
  },
  {
    id: 'sustentabilidad',
    titulo: 'Sustentabilidad',
    descripcion: 'Madera proveniente de fuentes y procesos responsables.',
    icono: Leaf
  },
  {
    id: 'ensamblado',
    titulo: 'Encastre Preciso',
    descripcion: 'Cortes exactos que garantizan estabilidad y encastre perfecto.',
    icono: Hammer
  },
  {
    id: 'materiales',
    titulo: 'Variedad de Texturas',
    descripcion: 'Amplia gama de colores y acabados en melamina.',
    icono: Layers
  },
  {
    id: 'mantenimiento',
    titulo: 'Fácil Limpieza',
    descripcion: 'Superficies no porosas simples de mantener y conservar.',
    icono: Recycle
  },
  {
    id: 'garantia',
    titulo: 'Calidad Garantizada',
    descripcion: 'Control exhaustivo en cada etapa de fabricación.',
    icono: CheckCircle2
  }
]

const AboutMDFApp = () => {
  return (
    <section id="nosotros" className="py-16 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-brand-dark tracking-tight uppercase mb-12">
          ¿Por qué elegir nuestros muebles de MDF?
        </h2>

        {/* Grid de Ventajas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ADVANTAGES.map((item) => {
            const Icon = item.icono
            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                {/* Contenedor del Ícono */}
                <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4 text-brand-dark">
                  <Icon className="w-7 h-7 text-brand-dark" />
                </div>

                {/* Título de la Ventaja */}
                <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-1">
                  {item.titulo}
                </h3>

                {/* Descripción Corta */}
                <p className="text-sm text-brand-dark/70 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutMDFApp