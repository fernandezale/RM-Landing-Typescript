import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
   
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/70 backdrop-blur-md border-b border-brand-brown/30 text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-brand-accent text-brand-light rounded-xl shadow-md">
              <img 
                src="/FotoLogoFondoNegro3-removebg-preview.svg" 
                alt="Nombre del Local - Muebles en MDF" 
                className="h-20 w-20 object-contain"  
              />
            </div>
            <div>
              <span className="font-montserrat text-xl font-medium tracking-tight block text-brand-light">
                Muebles a medida
              </span>
              
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
            <a href="#catalogo" className="hover:text-brand-accent transition-colors">CATÁLOGO</a>
            <a href="#nosotros" className="hover:text-brand-accent transition-colors">POR QUÉ MDF</a>
            <a href="#ultimos-trabajos" className="hover:text-brand-accent transition-colors">ÚLTIMOS TRABAJOS</a>
            <a href="#ubicacion" className="hover:text-brand-accent transition-colors">UBICACIÓN</a>
          </nav>


          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-light hover:text-brand-accent focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-muted/20 px-4 pt-4 pb-6 space-y-3">
          <a href="#catalogo" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Catálogo</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Por qué MDF</a>
          <a href="#ultimos-trabajos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Últimos Trabajos</a>
          <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Ubicación</a>
        </div>
      )}
    </header>
    );

}

export default Navbar;