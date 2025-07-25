// src/components/Sobre.tsx
import React from 'react';
import './style/Sobre.css';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-imagem-container">
            <div className="sobre-imagem-wrapper">
              <img
                src="/Vanessa.png"
                alt="Dra. Vanessa"
                className="sobre-imagem"
              />
              <div className="elemento-decorativo elemento-laranja"></div>
              <div className="elemento-decorativo elemento-azul"></div>
            </div>
          </div>
          
          <div className="sobre-texto">
            <h2 className="sobre-titulo">
              <span className="destaque-titulo">Conheça</span> a Psicóloga Vanessa Oliveira
            </h2>
            
            <div className="sobre-trajetoria">
              <div className="trajetoria-item">
                <div className="trajetoria-icone">🎓</div>
                <div>
                  <h3>Formação Acadêmica</h3>
                  <p>Me formei em Psicologia pelo Instituto de Educação Superior de Brasília (IESB), em 2018.</p>
                </div>
              </div>
              
              <div className="trajetoria-item">
                <div className="trajetoria-icone">👨‍👩‍👦‍👦</div>
                <div>
                  <h3>Vida Pessoal</h3>
                  <p>Sou casada desde 2017 e realizei um dos meus grandes sonhos, ser mãe.</p>
                </div>
              </div>
            </div>
            
            <div className="sobre-missao">
              <h3>Minha Missão Profissional</h3>
              <p>
                Escolhi a psicologia com o objetivo de ajudar pessoas com suas questões emocionais, oferecendo qualidade de vida em diferentes contextos. 
                Ao mesmo tempo que aprendi a interpretar comportamentos e entender as pessoas, descobri mais sobre mim mesma.
              </p>
            </div>
            
            <div className="sobre-qualificacoes">
              <h3>Minha Experiência</h3>
              <div className="qualificacoes-grid">
                <div className="qualificacao-item">
                  <span className="qualificacao-numero">7+</span>
                  <span className="qualificacao-texto">Anos de Experiência</span>
                </div>
                <div className="qualificacao-item">
                  <span className="qualificacao-numero">100+</span>
                  <span className="qualificacao-texto">Pacientes Atendidos</span>
                </div>
                <div className="qualificacao-item">
                  <span className="qualificacao-numero">2</span>
                  <span className="qualificacao-texto">Especializações</span>
                </div>
  
              </div>
            </div>
            
            </div>
          </div>
        </div>

    </section>
  );
};

export default Sobre;