// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Sobre Nós</h3>
          <p>Consultório de psicologia especializado em oferecer atendimento humanizado e personalizado para cada paciente, promovendo saúde mental e bem-estar.</p>
          
          <h3>Siga-me</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/psivanessasousa/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5561998514838&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20consult%C3%B3rio%20e%20os%20atendimentos." 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Horário de Atendimento</h3>
          <div className="footer-contact-item">
            <FaClock className="footer-icon" />
            <span>Segunda a Sexta: 8:00 - 18:00</span>
          </div>
          <div className="footer-contact-item">
            <FaClock className="footer-icon" />
            <span>Sábado: 9:00 - 12:00</span>
          </div>
          <div className="footer-contact-item">
            <FaClock className="footer-icon" />
            <span>Domingo: Fechado</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Asa Norte, Brasília - DF</span>
          </div>
          <div className="footer-contact-item">
            <FaPhone className="footer-icon" />
            <span>(61) 99851-4838</span>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <span>contato@psivanessasousa.com</span>
          </div>
          <div className="footer-contact-item">
            <FaClock className="footer-icon" />
            <span>Agendamento Online</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Vanessa Sousa Psicologia. Todos os direitos reservados.</p>
        <p><FaHeart className="heart-icon" /> Desenvolvido com dedicação ao bem-estar mental</p>
      </div>
    </footer>
  );
};

export default Footer;