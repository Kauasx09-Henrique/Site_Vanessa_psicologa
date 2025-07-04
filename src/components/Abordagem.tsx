// src/components/Abordagem.tsx
import React from 'react';
import './style/Abordagem.css';


import videoURL from '../assets/Video/Video_Clinica.mp4'

const Abordagem = () => {
  // Dados sobre as abordagens terapêuticas com foco em pediatria
  const abordagens = [
    {
      titulo: "Análise do comportamento",
      icone: "fas fa-comments",
      descricao: "O principal objetivo da Análise do Comportamento é compreender como as pessoas agem e reagem em diferentes situações. A partir da identificação dessas relações entre comportamento e ambiente, é possível desenvolver estratégias eficazes para promover mudanças positivas na vida das pessoas — sempre com base em evidências científicas e princípios éticos.",
      beneficios: ["TDAH", "Altas Habilidades", "ANSIEDADE "]
    },
    {
      titulo: "Orientação parental ",
      icone: "fas fa-brain",
      descricao: "A orientação de pais, fundamentada na Análise do Comportamento, tem como objetivo fortalecer a relação entre pais e filhos por meio da compreensão e manejo dos comportamentos infantis. A proposta é auxiliar os responsáveis a identificarem padrões de comportamento, entenderem as causas e consequências dessas ações, e aplicarem estratégias eficazes para promover habilidades sociais, autonomia e desenvolvimento emocional saudável da criança — sempre com base em evidências científicas e respeito à individualidade de cada família.",
      beneficios: ["Conflitos familiares", "Problemas de comunicação", "Relação pais-filhos",]
    },

  ];

  return (
    <section id="abordagem" className="abordagem-section">
      <div className="container">
        <div className="section-header">
          <h2>Abordagem em Análise do comportamento</h2>
          <p>Especializada em intervenções terapêuticas para crianças e adolescentes, criando um espaço seguro para expressão e desenvolvimento emocional</p>
        </div>

        <div className="abordagem-grid">
          {abordagens.map((abordagem, index) => (
            <div className="abordagem-card" key={index}>
              <div className="card-icon">
                <i className={abordagem.icone}></i>
              </div>
              <h3>{abordagem.titulo}</h3>
              <p>{abordagem.descricao}</p>
              
              <div className="beneficios-container">
                <h4>Aplicações:</h4>
                <ul>
                  {abordagem.beneficios.map((beneficio, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-person-chalkboard"></i>
                      {beneficio}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="video-section">
          <div className="video-container">
            <div className="video-wrapper">
              {/* Vídeo local em loop */}
              <video 
                autoPlay
                loop
                muted
                playsInline
                controls
                className="video-player"
                poster="/videos/video-poster.jpg"  // Caminho para a imagem de poster
              >
                <source src={videoURL} type="video/mp4" />
                Seu navegador não suporta o vídeo.
              </video>
            </div>
            <div className="video-info">
              <h3>Minha Prática Clínica</h3>
              <p>
                Neste vídeo, compartilho minha abordagem terapêutica com crianças e adolescentes, mostrando como 
                criamos um ambiente acolhedor e lúdico para promover o desenvolvimento emocional saudável.
              </p>
              <div className="destaque-box">
                <i className="fas fa-quote-left"></i>
                <p>
                  "Cada criança tem uma linguagem única de expressão. Nosso papel é aprender a ouvir essa linguagem
                  e ajudar a traduzi-la para o mundo."
                </p>
              </div>
              
              <div className="cta-buttons">
              </div>
            </div>
          </div>
        </div>

        <div className="especializacoes-container">
          <h3>Áreas de Especialização</h3>
          <div className="especializacoes-grid">
            <div className="especializacao-item">
              <i className="fas fa-child"></i>
              <h4>Desenvolvimento Infantil</h4>
              <p>Acompanhamento de marcos do desenvolvimento e intervenção em atrasos</p>
            </div>
            <div className="especializacao-item">
              <i className="fas fa-school"></i>
              <h4>Dificuldades Escolares</h4>
              <p>Avaliação e intervenção em problemas de aprendizagem e adaptação escolar</p>
            </div>
            <div className="especializacao-item">
              <i className="fas fa-heart"></i>
              <h4>Saúde Emocional</h4>
              <p>Suporte para ansiedade, depressão infantil e regulação emocional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abordagem;