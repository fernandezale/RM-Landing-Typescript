import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

const WHATSAPP_NUMBER = '5493516072272';

function App() {

  return (
    <>
      <Navbar whatsappNumber={WHATSAPP_NUMBER} />
      <section id="center">
        <div className="hero">
          <h1>Get started</h1>
        </div>
      </section>

    </>
  )
}

export default App
