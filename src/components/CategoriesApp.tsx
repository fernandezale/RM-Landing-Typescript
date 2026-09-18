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
    imagen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Amoblamientos integrales'
  },
  {
    id: 'placards',
    nombre: 'Placards',
    imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Vestidores y roperos'
  },
  {
    id: 'racks',
    nombre: 'Racks',
    imagen: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Muebles para TV y estar'
  },
  {
    id: 'escritorios',
    nombre: 'Escritorios',
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Espacios de trabajo'
  },
  {
    id: 'otros',
    nombre: 'Otros',
    imagen: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    descripcion: 'Diseños a medida'
  }
];

const PRODUCTS_BY_CATEGORY: Record<string, CategoryProduct[]> = {
  cocinas: [
    {
      id: 'coc-1',
      titulo: 'Amoblamiento Bajo Mesada & Alacena',
      descripcion: 'Diseño integral en MDF laqueado con tiradores ocultos tipo gola y cajoneras de cierre suave.',
      imagen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'coc-2',
      titulo: 'Isla Central Multifunción',
      descripcion: 'Isla con desayunador incorporado, módulos de guardado inferior y mesada de melamina reforzada.',
      imagen: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'coc-3',
      titulo: 'Torre de Horno y Despensero',
      descripcion: 'Módulo vertical para microondas, horno empotrable y despensero extensible con estantes ajustables.',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'coc-4',
      titulo: 'Alacenas de Vidrio y MDF',
      descripcion: 'Alacenas superiores con perfilería de aluminio, vidrio esmerilado y pistones a gas.',
      imagen: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80'
    }
  ],
  placards: [
    {
      id: 'pla-1',
      titulo: 'Vestidor Abierto Modular',
      descripcion: 'Estructura en MDF textura madera con sectores de colgado, pantalonera y estantes regulables.',
      imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'pla-2',
      titulo: 'Placard de Puertas Corredizas',
      descripcion: 'Ropero de piso a techo con espejo en hoja central y guías de aluminio silenciosas.',
      imagen: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'pla-3',
      titulo: 'Placard Infantil con Organizador',
      descripcion: 'Diseño funcional en colores pastel con cajones inferiores para juguetes y ropa.',
      imagen: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80'
    }
  ],
  racks: [
    {
      id: 'rac-1',
      titulo: 'Rack TV Flotante con Repisas',
      descripcion: 'Mueble de living flotante con pasacables ocultos, luces LED cálidas y puerta volcáble.',
      imagen: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'rac-2',
      titulo: 'Panel de TV Integral de Pared',
      descripcion: 'Panel en listones de MDF con repisa superior y mueble bajo con cajones de apertura press.',
      imagen: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'rac-3',
      titulo: 'Centro de Entretenimiento Modular',
      descripcion: 'Estructura combinada en melamina grafito y roble con espacio para consolas y libros.',
      imagen: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80'
    }
  ],
  escritorios: [
    {
      id: 'esc-1',
      titulo: 'Escritorio Ergonómico Home Office',
      descripcion: 'Mesa de trabajo amplia con cajonera rodante de 3 cajones y canaleta pasa-cables.',
      imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'esc-2',
      titulo: 'Escritorio Gamer en L',
      descripcion: 'Puesto esquinero reforzado en MDF ultra resistente con soporte para múltiples monitores.',
      imagen: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'esc-3',
      titulo: 'Puesto Doble de Trabajo',
      descripcion: 'Escritorio compartido de 2.40m con divisor acústico y organizadores de documentos.',
      imagen: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    }
  ],
  otros: [
    {
      id: 'otr-1',
      titulo: 'Vanitory de Baño a Medida',
      descripcion: 'Mueble suspendido resistente a la humedad con cajón profundo para ordenadores.',
      imagen: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'otr-2',
      titulo: 'Mesa de Noche Flotante',
      descripcion: 'Mueble de dormitorio minimalista con cajón oculto y acabado textura madera.',
      imagen: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'otr-3',
      titulo: 'Estantería / Recibidor de Entrada',
      descripcion: 'Mueble recibidor compacto con perchero incorporado, espejo y zapatero en MDF.',
      imagen: 'https://images.unsplash.com/photo-1538688422688-6644f6f1c4e7?auto=format&fit=crop&w=1000&q=80'
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
                        <p className="text-xs sm:text-sm text-brand-dark/70 mt-0.5">
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
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                      <p className="text-xs text-brand-dark/70 leading-relaxed line-clamp-3">
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
                <p className="text-sm text-brand-dark/80 max-w-2xl mx-auto leading-relaxed">
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