// src/components/Contato.tsx - VERSÃO COM NOVO LAYOUT

import React, { useState, useEffect } from 'react';
import './style/Contato.css';

import imagemRecepcao from '../../public/Recepcao.jpeg'; 
import imagemSalaEspera from '../../public/Espera.jpeg'; 
import imagemConsultorio from '../../public/Consultorio.jpeg';


interface ImagemCarrossel {
  titulo: string;
  descricao: string;
  imagem: string;
  miniatura: string;
}

interface InfoClinica {
  nome: string;
  endereco: string;
  telefone: string;
  whatsapp: string;
  mapaEmbed: string;
}



const Contato = () => {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const imagens: ImagemCarrossel[] = [
    {
      titulo: "Recepção Confortável",
      descricao: "Ambiente acolhedor com atendimento personalizado para seu maior conforto.",
      imagem: imagemRecepcao,
      miniatura: imagemRecepcao
    },
    {
      titulo: "Sala de Espera Premium",
      descricao: "Espaço amplo e confortável com Wi-Fi.",
imagem: imagemSalaEspera,
      miniatura: imagemSalaEspera
    },
    {
      titulo: "Consultórios Modernos",
      descricao: "Aqui você encontra um ambiente tranquilo e seguro para falar sobre suas emoções, desafios e conquistas. Nosso objetivo é te ajudar a se conhecer melhor.",
      imagem: imagemConsultorio,
      miniatura: imagemConsultorio
    }
  ];

  const clinicaAsaNorte: InfoClinica = {
    nome: 'Asa Norte',
    endereco: 'SHN Quadra 5, Bloco E - Asa Norte, Brasília - DF, 70705-000',
    telefone: '(61) 3322-7788',
    whatsapp: '556198514838',
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.4770118898126!2d-47.88755608898233!3d-15.776622622769974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a397858c81963%3A0x695782782973748a!2sBras%C3%ADlia%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1720013284093!5m2!1spt-BR!2sbr"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagens.length]);

  const goToSlide = (index: number) => { setCurrentIndex(index); };
  const goToPrevSlide = () => { setCurrentIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length); };
  const goToNextSlide = () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length); };
  const abrirWhatsApp = () => {
    const mensagem = `Olá! Gostaria de agendar uma consulta na clínica ${clinicaAsaNorte.nome}.`;
    const url = `https://wa.me/${clinicaAsaNorte.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };


  return (
    <section id="contato" className="contato-section">
      <div className="container">
        <h2 className="section-titulo">Clínica Asa Norte</h2>
        <p className="section-subtitulo">Conheça nossas instalações e localização privilegiada</p>
        
      
        <div className="carrossel-wrapper">
          <div className="carrossel-container">
            <div 
              className="carrossel" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {imagens.map((imagem, index) => (
                <div key={index} className={`carrossel-item ${index === currentIndex ? 'active' : ''}`}>
                  <img src={imagem.imagem} alt={imagem.titulo} className="carrossel-img" />
                  <div className="carrossel-info">
                    <h3 className="carrossel-titulo">{imagem.titulo}</h3>
                    <p className="carrossel-desc">{imagem.descricao}</p>
                    <button className="carrossel-btn" onClick={abrirWhatsApp}>
                      <i className="fas fa-calendar-check"></i> Agendar Visita
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carrossel-controles">
              <button className="carrossel-btn-controle prev" onClick={goToPrevSlide}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="carrossel-btn-controle next" onClick={goToNextSlide}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="carrossel-indicadores">
              {imagens.map((_, index) => (
                <div 
                  key={index}
                  className={`indicador ${index === currentIndex ? 'ativo' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="carrossel-miniaturas">
            {imagens.map((imagem, index) => (
              <div 
                key={index}
                className={`miniatura ${index === currentIndex ? 'ativo' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={imagem.miniatura} alt={`Miniatura ${imagem.titulo}`} />
                <div className="miniatura-overlay">{imagem.titulo}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="info-mapa-container">
          <div className="local-detalhes">
            <h3 className="local-nome">{clinicaAsaNorte.nome}</h3>
            <div className="local-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>{clinicaAsaNorte.endereco}</p>
            </div>
            <div className="local-info-item">
              <i className="fas fa-phone"></i>
              <p>{clinicaAsaNorte.telefone}</p>
            </div>
            <div className="local-info-item">
              <i className="fas fa-clock"></i>
              <p>Segunda a Sexta: 8h às 19h<br/>Sábados: 8h às 14h</p>
            </div>
            <button className="botao-agendamento" onClick={abrirWhatsApp}>
              <i className="fas fa-calendar-check"></i>
              Agendar Consulta
            </button>
          </div>
          
          <div className="mapa-container">
            <iframe
              src={clinicaAsaNorte.mapaEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa da Clínica Asa Norte`}
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contato;