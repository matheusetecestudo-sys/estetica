import { Mail, MapPin, Phone, Instagram, Facebook, Clock } from 'lucide-react';

const ContactVibrant: React.FC = () => {
  return (
    <section id="contato" className="contact-vibrant">
      <div className="container">
        <div className="contact-box-v glass-box">
          <div className="contact-info-v">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
              <span className="badge">CONTATO EXCLUSIVO</span>
              <h2>Agende sua <br /> <span className="gradient-text-v">Experiência.</span></h2>
            </div>

            <p className="contact-lead">
              Nossa equipe está pronta para desenhar o seu plano de beleza personalizado.
              Entre em contato e agende sua consulta boutique.
            </p>

            <div className="info-list-v">
              <div className="info-item-v">
                <MapPin className="icon-v" />
                <div>
                  <h4>Onde estamos</h4>
                  <p>Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, São Paulo</p>
                </div>
              </div>
              <div className="info-item-v">
                <Clock className="icon-v" />
                <div>
                  <h4>Horários</h4>
                  <p>Seg a Sex: 09:00 - 19:00 | Sáb: 09:00 - 13:00</p>
                </div>
              </div>
              <div className="info-item-v">
                <Phone className="icon-v" />
                <div>
                  <h4>Telefones</h4>
                  <p>(11) 99999-9999 | (11) 3333-3333</p>
                </div>
              </div>
            </div>

            <div className="social-links-v">
              <a href="#" className="social-btn"><Instagram size={24} /></a>
              <a href="#" className="social-btn"><Facebook size={24} /></a>
            </div>
          </div>

          <div className="map-view-v">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.685!3d-23.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA2LjAiUyA0NsKwNDEnMDUuOSJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Location"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        .contact-vibrant {
          padding: var(--section-padding);
          background: #fff;
          position: relative;
        }

        .contact-box-v {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 4px;
        }

        .contact-info-v {
          padding: 6rem;
          background: #fff;
        }

        .contact-lead {
            margin-bottom: 3rem;
            font-size: 1.15rem;
        }

        .info-list-v {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .info-item-v {
          display: flex;
          gap: 1.5rem;
        }

        .icon-v {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-item-v h4 {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          color: var(--color-dark);
        }

        .info-item-v p {
          font-size: 1rem;
          color: var(--color-text-light);
        }

        .social-links-v {
          display: flex;
          gap: 1.5rem;
        }

        .social-btn {
          width: 55px;
          height: 55px;
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--color-dark);
          transition: var(--transition);
        }

        .social-btn:hover {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
          transform: rotate(15deg);
        }

        .map-view-v {
          height: 100%;
          min-height: 500px;
        }

        @media (max-width: 992px) {
          .contact-box-v { grid-template-columns: 1fr; }
          .contact-info-v { padding: 3rem; }
          .map-view-v { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default ContactVibrant;
