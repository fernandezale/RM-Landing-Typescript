
const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-brand-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <span className="text-lg font-bold text-brand-light">Taller MDF <span className="text-brand-accent">Del Barrio</span></span>
            <p className="text-xs text-brand-muted mt-1">Muebles funcionales en fibra de madera de densidad media.</p>
          </div>

          <div className="flex justify-center space-x-6 text-xs text-brand-muted">
            <a href="#catalogo" className="hover:text-brand-light">Catálogo</a>
            <a href="#a-medida" className="hover:text-brand-light">A Medida</a>
            <a href="#taller" className="hover:text-brand-light">El Taller</a>
            <a href="#contacto" className="hover:text-brand-light">Contacto</a>
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