// src/components/Hero.tsx
import React from 'react';
import './style/Hero.css'; // Lembre-se que criamos um CSS para ele

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-headline">
          Cuidado, acolhimento e transformação
        </h1>
        <p className="hero-subheadline">
          Psicoterapia online e presencial para o seu bem-estar. Encontre um espaço seguro para se redescobrir.
        </p>
        <a href="#contato" className="hero-cta-button">
    
        </a>
      </div>
    </section>
  );
};

export default Hero; 