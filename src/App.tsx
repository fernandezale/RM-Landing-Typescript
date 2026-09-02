import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Hero from './components/Hero';
import './css/embla.css'


const WHATSAPP_NUMBER = '5493516072272';

function App() {

  return (
    <>
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />
      <section id="center">
        <Hero whatsappNumber={WHATSAPP_NUMBER}/>
      </section>
      <Footer />

    </>
  )
}

export default App
