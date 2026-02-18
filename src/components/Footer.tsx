const Footer: React.FC = () => {
  return (
    <footer className="footer-inst">
      <div className="container">
        <div className="footer-top-inst">
          <div className="footer-brand-inst">
            <span className="f-logo">RELIANA</span>
            <p>Instituto de Estética Avançada e Rejuvenescimento Facial. Ciência e Arte em harmonia.</p>
            <div className="f-social">
              <a href="#">INSTAGRAM</a>
              <a href="#">FACEBOOK</a>
              <a href="#">YOUTUBE</a>
            </div>
          </div>

          <div className="footer-nav-inst">
            <div className="f-col">
              <h5>Institucional</h5>
              <a href="#home">Home</a>
              <a href="#sobre">A Clínica</a>
              <a href="#tratamentos">Tratamentos</a>
              <a href="#resultados">Resultados</a>
            </div>
            <div className="f-col">
              <h5>Tratamentos</h5>
              <a href="#tratamentos">Harmonização Facial</a>
              <a href="#tratamentos">Toxina Botulínica</a>
              <a href="#tratamentos">Bioestimuladores</a>
              <a href="#tratamentos">Peelings de Luxe</a>
            </div>
            <div className="f-col">
              <h5>Contato</h5>
              <p>Av. Brigadeiro Faria Lima, 2000</p>
              <p>(11) 99999-9999</p>
              <p>contato@reliana.com.br</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-inst">
          <p>&copy; 2024 Instituto Reliana. Desenvolvido com foco em alta performance médica.</p>
          <div className="f-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-inst {
          background: var(--color-dark);
          color: white;
          padding: 100px 0 40px;
        }

        .footer-top-inst {
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
          gap: 4rem;
        }

        .footer-brand-inst {
          max-width: 400px;
        }

        .f-logo {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          font-weight: 900;
          display: block;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }

        .footer-brand-inst p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
        }

        .f-social {
          display: flex;
          gap: 2rem;
        }

        .f-social a {
          color: var(--color-gold);
          text-decoration: none;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .footer-nav-inst {
          display: flex;
          gap: 5rem;
        }

        .f-col h5 {
          color: white;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 2.5rem;
          font-weight: 800;
        }

        .f-col a, .f-col p {
          display: block;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 1.2rem;
        }

        .f-col a:hover {
          color: var(--color-primary);
        }

        .footer-bottom-inst {
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
        }

        .f-legal {
          display: flex;
          gap: 2rem;
        }

        .f-legal a {
          color: inherit;
          text-decoration: none;
        }

        @media (max-width: 1000px) {
          .footer-top-inst { flex-direction: column; }
          .footer-nav-inst { flex-direction: column; gap: 3rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
