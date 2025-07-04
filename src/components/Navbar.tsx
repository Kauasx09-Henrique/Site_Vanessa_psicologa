// src/components/Navbar.jsx
import React, { useState } from 'react';
import './style/Navbar.css'; // Usaremos o mesmo arquivo de estilo
import logo from '../../public/logo-clinica.png'; // Importe a imagem do logo


function Navbar() {
  // Estado para controlar a visibilidade do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#inicio" className="nav-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        Dra. Vanessa Oliveira
      </a>

      
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#inicio" onClick={toggleMenu}>Início</a>
        </li>
        <li className="nav-item">
          <a href="#sobre" onClick={toggleMenu}>Sobre Mim</a>
        </li>
        <li className="nav-item">
          <a href="#abordagem" onClick={toggleMenu}>Especialidade</a>
        </li>
        <li className="nav-item">
          <a href="#contato" className="nav-button" onClick={toggleMenu}>Local de Atendimento</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;