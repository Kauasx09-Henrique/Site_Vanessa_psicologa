import React from 'react';
import './style/Footer.css'; // Vamos criar este arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna do Endereço */}
        <div className="footer-column">
          <h3>Escritório</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 
            Asa Norte<br />
           SHN Quadra 5, Bloco E - Asa Norte, Brasília - DF
          </p>
          <p>
            <i className="fas fa-clock"></i> 
            Segunda a Sexta: 9h às 18h
          </p>
        </div>
        
        {/* Coluna de Contato */}
        <div className="footer-column">
          <h3>Contato</h3>
          <p>
            <i className="fas fa-phone"></i> 
            (61) 99851-4838
          </p>
          <p>
            <i className="fas fa-envelope"></i> 
            contato@psicologa.com.br
          </p>
        </div>
        
        {/* Coluna de Redes Sociais */}
        <div className="footer-column">
          <h3>Siga-me</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/psivanessasousa/" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5561998514838&text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20sobre%20o%20consult%C3%B3rio%20e%20os%20atendimentos." 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="Facebook">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dra. Nome da Psicóloga. Todos os direitos reservados.</p>
        <p>CRP 01/21794</p>
      </div>
    </footer>
  );
};

export default Footer;