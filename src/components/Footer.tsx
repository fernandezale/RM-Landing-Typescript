
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

          <div className="text-xs text-brand-muted md:text-right flex flex-col items-center md:items-end gap-2">
            <a
              href="https://www.instagram.com/renuevomuebles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguinos en Instagram"
              className="transition-transform hover:scale-110 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <defs>
                  <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497"/>
                    <stop offset="5%" stopColor="#fdf497"/>
                    <stop offset="45%" stopColor="#fd5949"/>
                    <stop offset="60%" stopColor="#d6249f"/>
                    <stop offset="90%" stopColor="#285AEB"/>
                  </radialGradient>
                </defs>
                <rect width="24" height="24" rx="5" fill="url(#ig-grad)"/>
                <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="white" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white"/>
              </svg>
            </a>
            <span>© {new Date().getFullYear()} Renuevo Muebles. Todos los derechos reservados.</span>

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