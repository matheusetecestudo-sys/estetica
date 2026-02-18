import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const ContactClean: React.FC = () => {
    return (
        <section id="contato" className="contact-clean">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="section-header" style={{ textAlign: 'left' }}>
                            <span className="subtitle" style={{ marginLeft: 0 }}>Contato</span>
                            <h2 style={{ fontSize: '3rem' }}>Agende sua <span className="gold-italic">Avaliação</span></h2>
                            <div className="gold-line" style={{ margin: '1.5rem 0' }}></div>
                        </div>

                        <div className="info-list">
                            <div className="info-item">
                                <MapPin className="icon" />
                                <div>
                                    <h4>Onde estamos</h4>
                                    <p>Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, São Paulo - SP</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Phone className="icon" />
                                <div>
                                    <h4>Telefones</h4>
                                    <p>(11) 99999-9999 | (11) 3333-3333</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Mail className="icon" />
                                <div>
                                    <h4>E-mail</h4>
                                    <p>contato@clinicaestetica.com.br</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-box">
                            <a href="#"><Instagram /></a>
                            <a href="#"><Facebook /></a>
                        </div>
                    </div>

                    <div className="map-view">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.685!3d-23.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA2LjAiUyA0NsKwNDEnMDUuOSJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Maps"
                        ></iframe>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-clean {
          padding: var(--section-padding);
          background: var(--color-off-white);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin: 3rem 0;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
        }

        .info-item .icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .info-item h4 {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          color: var(--color-graphite);
        }

        .info-item p {
          font-size: 1rem;
          color: var(--color-text);
        }

        .social-box {
          display: flex;
          gap: 1.5rem;
        }

        .social-box a {
          width: 50px;
          height: 50px;
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-graphite);
          border-radius: 50%;
        }

        .social-box a:hover {
          background: var(--color-gold);
          color: white;
          border-color: var(--color-gold);
        }

        .map-view {
          height: 600px;
          border: 10px solid white;
          box-shadow: var(--shadow-soft);
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .map-view { height: 400px; }
        }
      `}</style>
        </section>
    );
};

export default ContactClean;
