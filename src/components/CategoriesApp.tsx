import React from 'react';

export interface CategoryItem {
id: string;
nombre: string;
imagen: string;
descripcion?: string;
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

const CategoriesApp = () => {
return (


<section id="categorias" className="py-6 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-base py-4 sm:py-6 lg:py-8 sm:text-lg font-bold text-brand-dark">NUESTRAS COLECCIONES</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {CATEGORIES.map((category) => (
            <div
            key={category.id}
            className="group flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
            {/* Tarjeta con imagen */}
            <div className="w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                src={category.imagen}
                alt={category.nombre}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                />
            </div>

            {/* Texto debajo de la foto */}
            <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-bold text-brand-dark group-hover:text-brand-brown transition-colors">
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
    </div>
</section>


);
};

export default CategoriesApp;    