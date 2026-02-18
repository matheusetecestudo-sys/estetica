const FooterLuxury: React.FC = () => {
    return (
        <footer className="footer-lux">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="logo-main">ESTÉTICA</span>
                            <span className="logo-sub">AVANÇADA</span>
                        </div>
                        <p>Protocolos de excelência médica para <br />quem exige o extraordinário.</p>
                    </div>

                    <div className="footer-nav">
                        <div className="footer-col">
                            <h4>MENU</h4>
                            <a href="#procedimentos">Procedimentos</a>
                            <a href="#conceito">Conceito</a>
                            <a href="#resultados">Resultados</a>
                            <a href="#contato">Contato</a>
                        </div>

                        <div className="footer-col">
                            <h4>LEGAL</h4>
                            <a href="#">Privacidade</a>
                            <a href="#">Termos de Uso</a>
                            <a href="#">LGPD</a>
                        </div>

                        <div className="footer-col">
                            <h4>CONTATO</h4>
                            <p>Av. Brigadeiro Faria Lima, 2000 <br /> Itaim Bibi, São Paulo - SP</p>
                            <p>(11) 99999-9999</p>
                            <div className="socials">
                                <a href="#" className="social-link">INSTAGRAM</a>
                                <a href="#" className="social-link">FACEBOOK</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 CLÍNICA DE ESTÉTICA AVANÇADA. TODOS OS DIREITOS RESERVADOS.</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>

            <style>{`
        .footer-lux {
          padding: 100px 0 50px;
          background-color: #050505;
          border-top: 1px solid rgba(214, 194, 176, 0.05);
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 80px;
        }

        .footer-brand p {
          margin-top: 2rem;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }

        .footer-nav {
          display: flex;
          gap: 6rem;
        }

        .footer-col h4 {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          color: var(--color-gold-static);
          margin-bottom: 2.5rem;
          font-weight: 700;
        }

        .footer-col a, .footer-col p {
          display: block;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-decoration: none;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          font-weight: 300;
        }

        .footer-col a:hover {
          color: var(--color-white-warm);
        }

        .socials {
          margin-top: 2rem;
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          font-size: 0.7rem !important;
          letter-spacing: 0.2em !important;
          color: var(--color-nude) !important;
          font-weight: 600 !important;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.02);
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: #444;
        }

        @media (max-width: 992px) {
          .footer-top {
            flex-direction: column;
            gap: 4rem;
          }
          .footer-nav {
            flex-direction: column;
            gap: 3rem;
          }
        }
      `}</style>
        </footer>
    );
};

export default FooterLuxury;
