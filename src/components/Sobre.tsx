// src/components/Sobre.tsx
import React from 'react';
import './style/Sobre.css';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-texto">
            <h2 className="sobre-titulo">Sobre Mim</h2>
            <p className="sobre-descricao">
              Eu tenho 28 anos, me formei em 2018, portanto tenho 7 anos de Formada.
              Tenho 6 anos de casada. E realizei um dos meus grandes sonhos, ser mãe. Tenho o Heitor que tem 5 anos e o Israel que tem 3 anos.
            </p>
            <p className="sobre-descricao">
              Eu escolhi a psicologia com o objetivo de ajudar o outro com suas questões emocionais, afim de oferecer qualidade de vida em diferentes contextos. Ao mesmo tempo que aprendi a interpretar comportamentos e entender as pessoas, conheci mais de mim mesma.
            </p>
            <div className="sobre-qualificacoes">
              <div className="qualificacao-item qualificacao-1">
                <span className="qualificacao-numero">7+</span>
                <span className="qualificacao-texto">Anos de Experiência</span>
              </div>
              <div className="qualificacao-item qualificacao-2">
                <span className="qualificacao-numero">100+</span>
                <span className="qualificacao-texto">Pacientes Atendidos</span>
              </div>
              <div className="qualificacao-item qualificacao-3">
                <span className="qualificacao-numero">5</span>
                <span className="qualificacao-texto">Especializações</span>
              </div>
            </div>
          </div>
          
          <div className="sobre-imagem-container">
            <div className="sobre-imagem-wrapper">
              <img 
                src="src/assets/Vanessa.png" 
                alt="Dra. Vanessa"
                className="sobre-imagem"
              />
              <div className="elemento-decorativo elemento-laranja"></div>
              <div className="elemento-decorativo elemento-azul"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;