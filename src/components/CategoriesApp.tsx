import { useState } from 'react';
import { ArrowLeft, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface CategoryItem {
  id: string;
  nombre: string;
  imagen: string;
  descripcion?: string;
}

export interface CategoryProduct {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'cocinas',
    nombre: 'Cocinas',
    imagen: '/Cocina8mini.webp',
    descripcion: 'Amoblamientos integrales'
  },
  {
    id: 'placards',
    nombre: 'Placards',
    imagen: '/Placard1.webp',
    descripcion: 'Vestidores y roperos'
  },
  {
    id: 'racks',
    nombre: 'Racks',
    imagen: '/RecientesRack.webp',
    descripcion: 'Muebles para TV y estar'
  },
  {
    id: 'escritorios',
    nombre: 'Escritorios',
    imagen: '/RecientesEscritorio.webp',
    descripcion: 'Espacios de trabajo'
  },
  {
    id: 'otros',
    nombre: 'Otros',
    imagen: '/Otros2.webp',
    descripcion: 'Diseños a medida'
  }
];

const PRODUCTS_BY_CATEGORY: Record<string, CategoryProduct[]> = {
  cocinas: [
    {
      id: 'coc-1',
      titulo: 'Amoblamiento con torre',
      descripcion: 'Diseño integral en MDF con tiradores de aluminio tipo MHT, cajoneras de cierre suave y alacena rebatible.',
      imagen: '/Cocina1.webp'
    },
    {
      id: 'coc-2',
      titulo: 'Cocina Integral Moderna',
      descripcion: 'Diseño e instalación de bajo mesadas en MDF con FAPLAC, alacena con puertas de vidrio y manijas de aluminio.',
      imagen: '/Cocina2.webp'
    },
    {
      id: 'coc-3',
      titulo: 'Alacenas de Vidrio y MDF',
      descripcion: 'Alacenas superiores con perfilería de aluminio y vidrio negro, con bajo mesada de alto contraste.',
      imagen: '/Cocina3.webp'
    },
    {
      id: 'coc-4',
      titulo: 'Amoblamiento Bajo Mesada & Alacena',
      descripcion: 'Bajo mesada y alacenas con melamina brillosa con manijas de aluminio y tiradores ocultos.',
      imagen: '/Cocina6.webp'
    }
  ],
  placards: [
    {
      id: 'pla-1',
      titulo: 'Placard de Puertas Corredizas de 2 modulos',
      descripcion: 'Estructura en MDF textura gris grafit0 con sectores de colgado y estantes.',
      imagen: '/Placard1.webp'
    },
    {
      id: 'pla-2',
      titulo: 'Placard de Puertas Corredizas de 4 modulos',
      descripcion: 'Estructura de piso a techo con guías de aluminio silenciosas y espacio optimizado.',
      imagen: '/Placard2.webp'
    },
    {
      id: 'pla-3',
      titulo: 'Placard de Puertas Corredizas',
      descripcion: 'Diseño funcional en color blanco con cajones inferiores para calzado y ropa.',
      imagen: '/Placard3mini.webp'
    },
    {
      id: 'pla-4',
      titulo: 'Placard de Puertas Corredizas',
      descripcion: 'Diseño practico en color blanco con cajones inferiores y sector de colgado.',
      imagen: '/Placard4.webp'
    }
  ],
  racks: [
    {
      id: 'rac-1',
      titulo: 'Rack TV  puertas corredizas y repisas',
      descripcion: 'Mueble de living listonado, luces LED cálidas, puertas corredizas y espacio de guardado.',
      imagen: '/Rack1.webp'
    },
    {
      id: 'rac-2',
      titulo: 'Panel de TV Integral de Pared',
      descripcion: 'Panel en listones de MDF con tiras LED y mueble bajo con estantes.',
      imagen: '/Rack2.webp'
    },
    {
      id: 'rac-3',
      titulo: 'Centro de Entretenimiento Modular',
      descripcion: 'Estructura combinada en melamina lisa y texturada con espacio para consolas y libros, mas iluminación LED.',
      imagen: '/RecientesRack.webp'
    },
    {
      id: 'rac-4',
      titulo: 'Rack TV Flotante con Repisas',
      descripcion: 'Mueble de living flotante con cajones y puerta de vidrio con repisas.',
      imagen: '/Rack3.webp'
    },
    {
      id: 'rac-5',
      titulo: 'Rack TV Flotante con Repisas',
      descripcion: 'Mueble de habitación flotante con pasacables ocultos y luces LED cálidas.',
      imagen: '/Rack4.webp'
    },
    {
      id: 'rac-6',
      titulo: 'Rack listonado con cajones y torre de estantes',
      descripcion: 'Estructura con textura de madera y listonado con espacios de guardado.',
      imagen: '/Rack5.webp'
    }
    
  ],
  escritorios: [
    {
      id: 'esc-1',
      titulo: 'Escritorio Home Office',
      descripcion: 'Escritorio con estante superior, iluminación LED y fondo listonado.',
      imagen: '/RecientesEscritorio.webp'
    },
    {
      id: 'esc-2',
      titulo: 'Escritorio de estudio',
      descripcion: 'Escritorio con cajoneras, torre de estantes y lugar de guardado superior con iluminación LED.',
      imagen: '/Escritorio1.webp'
    },
    {
      id: 'esc-3',
      titulo: 'Escritorio flotante con cajonera',
      descripcion: 'Escritorio con cajones y lugar de guardado superior.',
      imagen: '/Escritorio2.webp'
    }
    ,
    {
      id: 'esc-3',
      titulo: 'Amplio escritorio',
      descripcion: 'Escritorio con lugares de guardado, estantes y detalle listonado.',
      imagen: '/Escritorio3.webp'
    }
  ],
  otros: [
    {
      id: 'otr-1',
      titulo: 'Estantería / Recibidor de Entrada',
      descripcion: 'Mueble con gran capacidad de guardado con estantes y tiras LED.',
      imagen: '/Otros1.webp'
    },
    {
      id: 'otr-2',
      titulo: 'Vanitory de Baño a Medida',
      descripcion: 'Mueble suspendido resistente a la humedad con cajón profundo para ordenadores.',
      imagen: '/Otros2.webp'
    },
    {
      id: 'otr-3',
      titulo: 'Estantería / Recibidor de Entrada',
      descripcion: 'Mueble recibidor con puertas de vidrio con perfiles negros, lugar de guardado inferior y estantes.',
      imagen: '/Otros3.webp'
    },
    {
      id: 'otr-4',
      titulo: 'Tocador / Maquillador Flotante',
      descripcion: 'Mueble flotante con cajones, espejo, tiras LED y listonado de madera.',
      imagen: '/Otros4.webp'
    },
    {
      id: 'otr-5',
      titulo: 'Vanitory de Baño',
      descripcion: 'Mueble resistente a la humedad de MDF.',
      imagen: '/Otros5.webp'
    },
    {
      id: 'otr-6',
      titulo: 'Mesa de Noche Flotante',
      descripcion: 'Mueble de dormitorio minimalista con cajón oculto y acabado textura lisa.',
      imagen: '/Otros6.webp'
    }
  ]
};

const CategoriesApp = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<CategoryProduct | null>(null);

  const selectedCategory = CATEGORIES.find((cat) => cat.id === selectedCategoryId);
  const products = selectedCategoryId ? PRODUCTS_BY_CATEGORY[selectedCategoryId] || [] : [];

  return (
    <section id="catalogo" className="py-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {/* NIVEL 1: VISTA DE CATEGORÍAS */}
          {!selectedCategoryId ? (
            <motion.div
              key="categories-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <h2 className="text-3xl sm:text-4xl py-4 sm:py-6 font-extrabold text-brand-dark tracking-tight uppercase text-center">
                Nuestro Catálogo
              </h2>
              <p className="text-sm sm:text-base text-brand-dark/70 mb-8 text-center max-w-xl">
                Seleccioná una categoría para explorar nuestros diseños y modelos a medida.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 w-full">
                {CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                  >
                    {/* Tarjeta con imagen */}
                    <div className="w-full aspect-4/5 overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow relative">
                      <img
                        src={category.imagen}
                        alt={category.nombre}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>

                    {/* Texto debajo de la foto */}
                    <div className="mt-4 text-center">
                      <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-accent transition-colors">
                        {category.nombre}
                      </h3>
                      {category.descripcion && (
                        <p className="text-xs font-semibold sm:text-sm text-brand-dark/70 mt-0.5">
                          {category.descripcion}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* NIVEL 2: VISTA DE PRODUCTOS POR CATEGORÍA */
            <motion.div
              key="products-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {/* Barra superior con botón volver */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-light pb-4 mb-8">
                <button
                  onClick={() => setSelectedCategoryId(null)}
                  className="inline-flex items-center space-x-2 text-brand-dark hover:text-brand-accent font-semibold transition-colors group p-2 rounded-lg hover:bg-brand-light/40 w-fit"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>Volver a Categorías</span>
                </button>

                <div className="mt-2 sm:mt-0">
                  <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider block sm:inline">
                    Categoría seleccionada
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight uppercase">
                    {selectedCategory?.nombre}
                  </h2>
                </div>
              </div>

              {/* Grilla de Productos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="group flex flex-col cursor-pointer bg-white rounded-xl overflow-hidden border border-brand-light/60 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Marco de la imagen */}
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.imagen}
                        alt={product.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 [image-rendering:auto] backface-hidden"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-2.5 rounded-full text-brand-dark shadow-md">
                          <ZoomIn className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Contenido descriptivo */}
                    <div className="p-4 flex flex-col grow">
                      <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-accent transition-colors mb-1">
                        {product.titulo}
                      </h3>
                      <p className="text-xs font-semibold text-brand-dark/70 leading-relaxed line-clamp-3">
                        {product.descripcion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* MODAL LIGHTBOX (SOLO FOTO Y DETALLE, SIN BOTÓN DE WHATSAPP) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-colors shadow-md"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Imagen Ampliada */}
              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProduct.imagen}
                  alt={selectedProduct.titulo}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              {/* Pie con Título y Descripción (Sin botón WhatsApp) */}
              <div className="p-6 bg-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">
                  {selectedProduct.titulo}
                </h3>
                <p className="text-sm font-semibold text-brand-dark/80 max-w-2xl mx-auto leading-relaxed">
                  {selectedProduct.descripcion}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CategoriesApp;