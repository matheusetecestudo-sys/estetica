import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="contact section-padding">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-title" style={{ textAlign: 'left' }}>
              <span>Agende sua Visita</span>
              <h2>Sua <span className="luxury-text-gradient">Transformação</span> Começa Aqui</h2>
            </div>

            <p className="contact-desc">
              Estamos prontos para oferecer uma avaliação personalizada e desenhar
              o plano ideal para seus objetivos estéticos.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Endereço</h4>
                  <p>Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, São Paulo - SP</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>Telefone & WhatsApp</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>E-mail</h4>
                  <p>contato@clinicaestetica.com.br</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Facebook /></a>
            </div>
          </div>

          <div className="contact-map">
            {/* Google Maps Iframe Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.685!3d-23.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA2LjAiUyA0NsKwNDEnMDUuOSJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Localização da Clínica"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        .contact {
          background-color: var(--color-white);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--color-warm-gray);
          margin-bottom: 3rem;
          max-width: 500px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .contact-icon {
          color: var(--color-gold);
          flex-shrink: 0;
        }

        .contact-item h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-graphite);
          margin-bottom: 0.3rem;
        }

        .contact-item p {
          font-size: 1rem;
          color: var(--color-warm-gray);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border: 1px solid var(--color-nude);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-graphite);
          border-radius: 50%;
        }

        .social-icon:hover {
          background-color: var(--color-gold);
          color: white;
          border-color: var(--color-gold);
        }

        .contact-map {
          height: 600px;
          background-color: var(--color-off-white);
          border-radius: 4px;
          overflow: hidden;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-map {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
