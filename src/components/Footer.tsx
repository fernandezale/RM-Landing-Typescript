
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <span className="text-lg font-bold text-brand-light">RENUEVO MUEBLES</span>
            <p className="text-xs text-brand-muted mt-1">Muebles funcionales en fibra de madera de densidad media.</p>
          </div>

          <div className="flex justify-center space-x-6 text-xs text-brand-muted">
            <a href="#catalogo" className="hover:text-brand-light">Catálogo</a>
            <a href="#nosotros" className="hover:text-brand-light">Por qué MDF</a>
            <a href="#ultimos-trabajos" className="hover:text-brand-light">Últimos Trabajos</a>
            <a href="#ubicacion" className="hover:text-brand-light">Ubicación y Taller</a>
          </div>

          <div className="text-xs text-brand-muted md:text-right">
            © {new Date().getFullYear()} Taller MDF. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;