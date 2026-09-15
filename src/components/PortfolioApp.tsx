import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface Project {
  id: string
  titulo: string
  descripcion: string
  imagen: string
}

const PROJECTS: Project[] = [
  {
    id: '1',
    titulo: 'Cocina Integral Moderna',
    descripcion: 'Diseño e instalación de bajo mesadas y alacenas en MDF con acabado en melamina grafito y tiradores invisibles.',
    imagen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    titulo: 'Rack TV y Biblioteca',
    descripcion: 'Mueble de living a medida con espacio para cableado oculto, repisas flotantes y modulos inferiores de guardado.',
    imagen: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    titulo: 'Escritorio Home Office',
    descripcion: 'Puesto de trabajo ergonómico con cajonera móvil, pasacables integrados y terminación de MDF textura madera cálida.',
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80'
  }
]

const PortfolioApp = () => {
  const [selectedImage, setSelectedImage] = useState<Project | null>(null)

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-brand-dark tracking-tight uppercase mb-12">
          Proyectos Recientes
        </h2>

        {/* Grid Responsive de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Marco de la Imagen interactivo */}
              <div 
                onClick={() => setSelectedImage(project)}
                className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-sm mb-4 cursor-pointer"
              >
                <img
                  src={project.imagen}
                  alt={project.titulo}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay al pasar el cursor */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 p-2 rounded-full text-brand-dark">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Título y Descripción */}
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {project.titulo}
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed max-w-sm">
                {project.descripcion}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox para agrandar la imagen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón para cerrar */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagen ampliada */}
            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img 
                src={selectedImage.imagen} 
                alt={selectedImage.titulo} 
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Pie del Modal con la descripción */}
            <div className="p-6 bg-white text-center">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">
                {selectedImage.titulo}
              </h3>
              <p className="text-brand-dark/80 text-sm max-w-2xl mx-auto leading-relaxed">
                {selectedImage.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortfolioApp