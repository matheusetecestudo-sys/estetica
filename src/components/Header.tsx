import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-main">ESTÉTICA</span>
            <span className="logo-sub">AVANÇADA</span>
          </a>
        </div>

        <nav className="nav-desktop">
          <a href="#procedimentos" className="nav-link">Procedimentos</a>
          <a href="#conceito" className="nav-link">O Conceito</a>
          <a href="#resultados" className="nav-link">Resultados</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        <div className="header-cta">
          <a href="https://wa.me/5511999999999" target="_blank" className="btn-luxury secondary small">Agendar Agora</a>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2.5rem 0;
          z-index: 1000;
          transition: var(--transition-ultra);
        }

        .header.scrolled {
          padding: 1.25rem 0;
          background-color: rgba(11, 11, 13, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(214, 194, 176, 0.1);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .logo-main {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-white-warm);
          letter-spacing: 0.1em;
          line-height: 1;
        }

        .logo-sub {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          color: var(--color-nude);
          letter-spacing: 0.5em;
          margin-top: 0.3rem;
          font-weight: 300;
        }

        .nav-desktop {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-white-warm);
          text-decoration: none;
          font-weight: 300;
          position: relative;
          opacity: 0.8;
          transition: var(--transition-ultra);
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--color-nude);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold-metallic);
          transition: var(--transition-ultra);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .small {
          padding: 0.75rem 1.5rem;
          font-size: 0.65rem;
        }

        @media (max-width: 992px) {
          .nav-desktop {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
