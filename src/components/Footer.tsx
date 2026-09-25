
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Contenido Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <span className="text-lg font-bold text-brand-light">RENUEVO MUEBLES</span>
            <p className="text-xs text-brand-muted mt-1">Muebles funcionales en fibra de madera de densidad media.</p>
          </div>

          <div className="flex justify-center space-x-6 text-xs text-brand-muted">
            <a href="#catalogo" className="hover:text-brand-light transition-colors">Catálogo</a>
            <a href="#nosotros" className="hover:text-brand-light transition-colors">Por qué MDF</a>
            <a href="#ultimos-trabajos" className="hover:text-brand-light transition-colors">Últimos Trabajos</a>
            <a href="#ubicacion" className="hover:text-brand-light transition-colors">Ubicación y Taller</a>
          </div>

          <div className="text-xs text-brand-muted md:text-right">
            © {new Date().getFullYear()} Renuevo Muebles. Todos los derechos reservados.
          </div>
        </div>

        {/* Sub-footer sutil para Créditos de Desarrollo */}
        <div className="mt-8 pt-6 border-t border-brand-brown/40 flex flex-col sm:flex-row justify-between items-center text-[11px] text-brand-muted/70 gap-2">
          <span>Diseño y Desarrollo Web por Alexis Fernández</span>
          <a 
            href="https://fernandezale.github.io/pages/PaginaFrontend.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-light underline decoration-brand-muted/40 underline-offset-2 transition-colors"
          >
            3516072272 / Portafolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;