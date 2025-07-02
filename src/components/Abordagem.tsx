// src/components/Abordagem.tsx
import React from 'react';
import './style/Abordagem.css';


import videoURL from '../assets/Video/Video_Clinica.mp4'

const Abordagem = () => {
  // Dados sobre as abordagens terapêuticas com foco em pediatria
  const abordagens = [
    {
      titulo: "Terapia Cognitivo-Comportamental Infantil",
      icone: "fas fa-brain",
      descricao: "Abordagem focada em ajudar crianças a identificarem e modificarem padrões de pensamento e comportamento, desenvolvendo habilidades para lidar com desafios emocionais.",
      beneficios: ["Ansiedade infantil", "Fobias específicas", "TDAH", "Problemas de comportamento"]
    },
    {
      titulo: "Psicoterapia Lúdica",
      icone: "fas fa-gamepad",
      descricao: "Utiliza jogos, brincadeiras e atividades criativas como ferramentas terapêuticas para que a criança possa expressar sentimentos e conflitos de forma natural.",
      beneficios: ["Traumas infantis", "Dificuldades emocionais", "Processos de luto", "Separação dos pais"]
    },
    {
      titulo: "Terapia Familiar Sistêmica",
      icone: "fas fa-users",
      descricao: "Abordagem que envolve toda a família no processo terapêutico, trabalhando dinâmicas relacionais e padrões de comunicação para promover mudanças positivas.",
      beneficios: ["Conflitos familiares", "Problemas de comunicação", "Ajuste a mudanças", "Relação pais-filhos"]
    },

  ];

  return (
    <section id="abordagem" className="abordagem-section">
      <div className="container">
        <div className="section-header">
          <h2>Abordagem em Psicologia Pediátrica</h2>
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
                      <i className="fas fa-heart"></i>
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
                <a 
                  href="#contato"
                  className="agendar-btn"
                >
                  <i className="fas fa-calendar-check"></i> Agendar Consulta
                </a>
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