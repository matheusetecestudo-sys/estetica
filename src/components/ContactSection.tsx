import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="contato" className="contact-inst">
            <div className="container">
                <div className="contact-inst-wrapper">
                    <div className="contact-inst-info">
                        <div className="section-title-inst" style={{ textAlign: 'left', marginBottom: '40px' }}>
                            <span className="tag">LOCALIZAÇÃO E ATENDIMENTO</span>
                            <h2>Sua melhor <br /> versão <span className="inst-highlight">espera por você.</span></h2>
                        </div>

                        <p className="contact-lead-inst">
                            Agende agora uma avaliação personalizada e descubra o protocolo ideal
                            para seus objetivos estéticos. Atendimento exclusivo com hora marcada.
                        </p>

                        <div className="info-inst-list">
                            <div className="info-inst-item">
                                <MapPin className="ic" size={24} />
                                <div>
                                    <h4>Onde estamos</h4>
                                    <p>Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, São Paulo - SP</p>
                                </div>
                            </div>
                            <div className="info-inst-item">
                                <Clock className="ic" size={24} />
                                <div>
                                    <h4>Horários de Atendimento</h4>
                                    <p>Segunda a Sexta: 09:00 - 19:00 | Sábado: 09:00 - 13:00</p>
                                </div>
                            </div>
                            <div className="info-inst-item">
                                <Phone className="ic" size={24} />
                                <div>
                                    <h4>Telefones</h4>
                                    <p>(11) 99999-9999 | (11) 3333-3333</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/5511999999999" target="_blank" className="btn-whatsapp-inst big-btn">
                            <MessageCircle size={28} />
                            AGENDAR CONSULTA AGORA
                        </a>
                    </div>

                    <div className="contact-inst-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.685!3d-23.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA2LjAiUyA0NsKwNDEnMDUuOSJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-inst {
          padding: var(--section-padding);
          background: white;
        }

        .contact-inst-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          background: white;
          border: 1px solid #eee;
          box-shadow: 0 50px 100px rgba(0,0,0,0.05);
        }

        .contact-inst-info {
          padding: 6rem;
        }

        .contact-lead-inst {
          font-size: 1.25rem;
          margin-bottom: 4rem;
        }

        .info-inst-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .info-inst-item {
          display: flex;
          gap: 1.5rem;
        }

        .info-inst-item .ic {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-inst-item h4 {
          text-transform: uppercase;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          color: var(--color-dark);
        }

        .big-btn {
          width: 100%;
          justify-content: center;
          padding: 1.5rem !important;
          font-size: 1.1rem !important;
        }

        .contact-inst-map {
          min-height: 600px;
        }

        @media (max-width: 1100px) {
          .contact-inst-wrapper { grid-template-columns: 1fr; }
          .contact-inst-info { padding: 3rem; }
          .contact-inst-map { height: 400px; min-height: 0; }
        }
      `}</style>
        </section>
    );
};

export default ContactSection;
