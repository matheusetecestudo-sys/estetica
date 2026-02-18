const FooterClean: React.FC = () => {
    return (
        <footer className="footer-clean">
            <div className="container">
                <div className="f-top">
                    <div className="f-brand">
                        <div className="nav-logo">
                            <span className="brand-name">CLÍNICA <span className="gold">ESTÉTICA</span></span>
                        </div>
                        <p>Especializada em harmonização facial e estética avançada de luxo.</p>
                    </div>

                    <div className="f-links">
                        <div className="col">
                            <h5>Institucional</h5>
                            <a href="#procedimentos">Tratamentos</a>
                            <a href="#clinica">A Clínica</a>
                            <a href="#resultados">Resultados</a>
                        </div>
                        <div className="col">
                            <h5>Atendimento</h5>
                            <p>Segunda a Sexta: 09h às 19h</p>
                            <p>Sábado: 09h às 13h</p>
                        </div>
                    </div>
                </div>

                <div className="f-bottom">
                    <p>&copy; 2024 Clínica de Estética Avançada. Todos os direitos reservados.</p>
                    <div className="legal">
                        <a href="#">Privacidade</a>
                        <a href="#">Termos</a>
                    </div>
                </div>
            </div>

            <style>{`
        .footer-clean {
          padding: 80px 0 40px;
          background: #1a1a1a;
          color: rgba(255,255,255,0.7);
        }

        .f-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .f-brand .brand-name {
          color: white;
          margin-bottom: 1.5rem;
          display: block;
        }

        .f-brand p {
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          max-width: 300px;
        }

        .f-links {
          display: flex;
          gap: 6rem;
        }

        .col h5 {
          color: white;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
        }

        .col a, .col p {
          display: block;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          margin-bottom: 1rem;
        }

        .col a:hover {
          color: var(--color-gold);
        }

        .f-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .legal {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .f-top { flex-direction: column; gap: 4rem; }
          .f-links { flex-direction: column; gap: 3rem; }
        }
      `}</style>
        </footer>
    );
};

export default FooterClean;
