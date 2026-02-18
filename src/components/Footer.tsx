
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <span className="logo-text">CLÍNICA <span className="gold">ESTÉTICA</span></span>
              <span className="logo-sub">AVANÇADA</span>
            </div>
            <p className="footer-tagline">
              Excelência médica e artística para realçar sua beleza natural.
            </p>
          </div>

          <div className="footer-links">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#conceito">O Conceito</a></li>
              <li><a href="#procedimentos">Procedimentos</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#clinica">A Clínica</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Tratamentos</h4>
            <ul>
              <li><a href="#">Harmonização Facial</a></li>
              <li><a href="#">Bioestimuladores</a></li>
              <li><a href="#">Toxina Botulínica</a></li>
              <li><a href="#">Tratamentos Corporais</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Receba novidades e conteúdos exclusivos sobre estética avançada.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Seu melhor e-mail" />
              <button type="submit" className="newsletter-btn">Enviar</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Clínica de Estética Avançada. Todos os direitos reservados.</p>
          <div className="legal-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-graphite);
          color: var(--color-off-white);
          padding: 6rem 0 3rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-logo {
          margin-bottom: 1.5rem;
        }

        .footer-logo .logo-text {
          color: white;
        }

        .footer-tagline {
          font-size: 0.95rem;
          color: var(--color-warm-gray);
          max-width: 300px;
        }

        .footer-links h4, .footer-newsletter h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-gold);
          margin-bottom: 2rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links a {
          font-size: 0.95rem;
          color: var(--color-warm-gray);
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-newsletter p {
          font-size: 0.9rem;
          color: var(--color-warm-gray);
          margin-bottom: 1.5rem;
        }

        .newsletter-form {
          display: flex;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .newsletter-form input {
          background: transparent;
          border: none;
          padding: 1rem 0;
          color: white;
          width: 100%;
          font-family: var(--font-sans);
        }

        .newsletter-form input:focus {
          outline: none;
        }

        .newsletter-btn {
          color: var(--color-gold);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .footer-bottom {
          padding-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--color-warm-gray);
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
