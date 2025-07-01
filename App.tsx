import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Importação dos componentes
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Sobre from './src/components/Sobre';
import Abordagem from './src/components/Abordagem';
import Contato from './src/components/Contato';
import Footer from './src/components/Footer';

function App() {
  // Função para abrir o WhatsApp
  const abrirWhatsApp = () => {
    const mensagem = "Olá! Gostaria de agendar uma consulta.";
    const numeroFormatado = "+556198514838".replace(/[^0-9+]/g, "");
    const url = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Navbar />
      
      {/* Botão flutuante do WhatsApp */}
      <div 
        className="whatsapp-float"
        onClick={abrirWhatsApp}
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </div>

      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="sobre">
          <Sobre />
        </section>
        
        <section id="abordagem">
          <Abordagem />
        </section>
        
        <section id="contato">
          <Contato />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;