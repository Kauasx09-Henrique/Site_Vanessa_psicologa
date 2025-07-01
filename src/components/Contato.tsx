import React, { useState } from 'react';
import './style/Contato.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contato = () => {
  const [localizacaoAtiva, setLocalizacaoAtiva] = useState<'aguas_claras' | 'asa_norte'>('aguas_claras');

  // Dados das localizações
  const locais = {
    aguas_claras: {
      nome: 'Águas Claras',
      endereco: 'Av. das Araucárias, 1200 - Lote 1245, Águas Claras, Brasília - DF, 71936-540',
      telefone: '(61) 3344-5566',
      whatsapp: '556183032828', 
      foto: "https://maps.app.goo.gl/bbP217mBmCZpXJBa9",
      mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.1764265005984!2d-48.03525780755664!3d-15.838041447492182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3361b50f187d%3A0xb5b33356a905ac35!2sMB%20Pediatria!5e0!3m2!1spt-BR!2sbr!4v1751383935797!5m2!1spt-BR!2sbr"
    },
    asa_norte: {
      nome: 'Asa Norte',
      endereco: 'SHN Quadra 5, Bloco E - Asa Norte, Brasília - DF, 70705-000',
      telefone: '(61) 3322-7788',
      whatsapp: '556198514838', 
      foto: "https://maps.app.goo.gl/bbP217mBmCZpXJBa9",
      mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.398331034368!2d-47.88769764311617!3d-15.78293690093215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b8f15b986ad%3A0xd79269115c934594!2sEdif%C3%ADcio%20Bras%C3%ADlia%20Radio%20Center%20Asa%20norte.!5e0!3m2!1spt-BR!2sbr!4v1751386612126!5m2!1spt-BR!2sbr"
    }
  };

  const localAtual = locais[localizacaoAtiva];

  // Função para abrir o WhatsApp
  const abrirWhatsApp = () => {
    const mensagem = `Olá! Gostaria de agendar uma consulta na clínica ${localAtual.nome}.`;
    const url = `https://wa.me/${localAtual.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="contato-section">
      <div className="container">
        <h2 className="section-titulo">Nossas Clínicas</h2>
        <p className="section-subtitulo">Escolha a unidade mais próxima de você</p>
        
        <div className="localizacao-botoes">
          <button 
            className={localizacaoAtiva === 'aguas_claras' ? 'ativo' : ''}
            onClick={() => setLocalizacaoAtiva('aguas_claras')}
          >
            Águas Claras
          </button>
          <button 
            className={localizacaoAtiva === 'asa_norte' ? 'ativo' : ''}
            onClick={() => setLocalizacaoAtiva('asa_norte')}
          >
            Asa Norte
          </button>
        </div>
        
        <div className="local-info-container">
          <div className="local-detalhes">
            <h3 className="local-nome">{localAtual.nome}</h3>
            <div className="local-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>{localAtual.endereco}</p>
            </div>
            <div className="local-info-item">
              <i className="fas fa-phone"></i>
              <p>{localAtual.telefone}</p>
            </div>
            <div className="local-info-item">
              <i className="fas fa-clock"></i>
              <p>Segunda a Sexta: 8h às 19h<br/>Sábados: 8h às 14h</p>
            </div>
            
            <button 
              className="botao-agendamento"
              onClick={abrirWhatsApp}
            >
              <i className="fas fa-calendar-check"></i>
              Agendar Consulta
            </button>
          </div>
          
          <div className="local-visual">
            <div className="mapa-container">
              <iframe
                src={localAtual.mapaEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de ${localAtual.nome}`}
              ></iframe>
            </div>
            
            <div className="foto-container">
              <img 
                src={localAtual.foto} 
                alt={`Clínica ${localAtual.nome}`} 
                className="foto-real"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;