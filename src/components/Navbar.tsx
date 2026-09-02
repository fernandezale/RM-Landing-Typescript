import { useState } from 'react';
import { Hammer, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  whatsappNumber: string;
}

const Navbar = ({ whatsappNumber }: NavbarProps) => {
   
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('¡Hola! Quisiera realizar una consulta sobre sus muebles de MDF a medida.')}`;
    
    return (
    <header className="sticky top-0 z-50 bg-brand-muted text-brand-dark shadow-lg border-b border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-brand-accent text-brand-light rounded-xl shadow-md">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight block text-brand-light">
                Taller MDF <span className="text-brand-accent">Del Barrio</span>
              </span>
              <span className="text-xs text-brand-muted tracking-wide">Mueblería & Diseño a Medida</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#catalogo" className="hover:text-brand-accent transition-colors">CATÁLOGO</a>
            <a href="#a-medida" className="hover:text-brand-accent transition-colors">ULTIMOS TRABAJOS</a>
            <a href="#taller" className="hover:text-brand-accent transition-colors">EL TALLER</a>
            <a href="#contacto" className="hover:text-brand-accent transition-colors">UBICACIÓN</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-brand-accent hover:bg-[#885442] text-brand-light px-5 py-2.5 rounded-xl font-medium transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-light hover:text-brand-accent focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-muted/20 px-4 pt-4 pb-6 space-y-3">
          <a href="#catalogo" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Catálogo</a>
          <a href="#a-medida" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Trabajos a Medida</a>
          <a href="#taller" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">El Taller</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium hover:text-brand-accent">Ubicación</a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 bg-brand-accent text-brand-light px-4 py-3 rounded-xl font-semibold shadow"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      )}
    </header>
    );

}

export default Navbar;