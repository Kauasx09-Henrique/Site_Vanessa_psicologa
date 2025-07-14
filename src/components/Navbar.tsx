// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './style/Navbar.css'; // O novo CSS que será fornecido abaixo
import logo from '../../public/logo-clinica.png'; // Importe a imagem do logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Função para alternar o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu (útil para mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efeito para detectar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      // Adiciona a classe 'scroll', handleScroll);
    };
  }, []);

  return (
    // A classe 'scrolled' é adicionada dinamicamente
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="nav-logo" onClick={closeMenu}>
        <img src={logo} alt="Logo da Clínica Vanessa Oliveira" className="logo-image" />
        <span>Psicóloga<br/>Vanessa Oliveira</span>
      </a>

      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#inicio" onClick={closeMenu}>Início</a>
        </li>
        <li className="nav-item">
          <a href="#sobre" onClick={closeMenu}>Sobre Mim</a>
        </li>
        <li className="nav-item">
          <a href="#abordagem" onClick={closeMenu}>Especialidade</a>
        </li>
        <li className="nav-item">
          <a href="#contato" className="nav-button" onClick={closeMenu}>
            Atendimento
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
