import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Hero from './components/Hero';
import './css/embla.css'
import CategoriesApp from './components/CategoriesApp';
import AboutMDFApp from './components/AboutMDFApp';
import VideoShowcase from './components/VideoShowcase';
import PortfolioApp from './components/PortfolioApp';
import LocationApp from './components/LocationApp';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const WHATSAPP_NUMBER = '5493516072272';

function App() {

  return (
    <>
      <Navbar />
      <section id="center">
        <Hero whatsappNumber={WHATSAPP_NUMBER} />
        <CategoriesApp/>
        <AboutMDFApp/>
        <VideoShowcase />
        <PortfolioApp/>
        <LocationApp whatsappNumber={WHATSAPP_NUMBER} />
      </section>
      <Footer />
      <FloatingWhatsApp whatsappNumber={WHATSAPP_NUMBER} />
    </>
  )
}

export default App
