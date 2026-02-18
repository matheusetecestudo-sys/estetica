import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-fem ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="nav-logo">
          <a href="/">
            <span className="brand-name">ESSENCE <span className="rose-text">ESTÉTICA</span></span>
            <span className="brand-sub">BELEZA & BEM-ESTAR</span>
          </a>
        </div>

        <nav className="nav-links desktop-only">
          <a href="#procedimentos">Tratamentos</a>
          <a href="#clinica">O Conceito</a>
          <a href="#resultados">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="nav-actions">
          <a href="#" className="social-icon desktop-only">
            <Instagram size={20} />
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" className="cta-rose-pill desktop-only">
            <MessageCircle size={18} />
            <span>Agendar Consulta</span>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-fem ${mobileMenu ? 'active' : ''}`}>
        <nav>
          <a href="#procedimentos" onClick={() => setMobileMenu(false)}>Tratamentos</a>
          <a href="#clinica" onClick={() => setMobileMenu(false)}>O Conceito</a>
          <a href="#resultados" onClick={() => setMobileMenu(false)}>Resultados</a>
          <a href="#contato" onClick={() => setMobileMenu(false)}>Contato</a>
          <a href="https://wa.me/5511999999999" className="mobile-cta-rose">Falar no WhatsApp</a>
        </nav>
      </div>

      <style>{`
        .navbar-fem {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2rem 0;
          z-index: 1000;
          transition: var(--transition);
        }

        .navbar-fem.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(15px);
          padding: 1.2rem 0;
          box-shadow: 0 4px 30px rgba(229, 177, 177, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          letter-spacing: 0.1em;
          color: var(--color-graphite);
        }

        .rose-text {
          color: var(--color-dusty-rose);
          font-style: italic;
        }

        .brand-sub {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.5em;
          color: var(--color-text);
          margin-top: 0.2rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
        }

        .nav-links a {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          color: var(--color-graphite);
          opacity: 0.8;
        }

        .nav-links a:hover {
          color: var(--color-dusty-rose);
          opacity: 1;
        }

        .cta-rose-pill {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--color-dusty-rose);
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: var(--transition);
        }

        .cta-rose-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(229, 177, 177, 0.4);
        }

        .social-icon {
          color: var(--color-text);
          margin-right: 1.5rem;
        }

        .social-icon:hover {
          color: var(--color-dusty-rose);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-graphite);
        }

        .mobile-nav-fem {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-rose-white);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          transition: var(--transition);
        }

        .mobile-nav-fem.active {
          transform: translateY(0);
        }

        .mobile-nav-fem nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        .mobile-nav-fem a {
          font-size: 1.8rem;
          font-family: var(--font-serif);
          color: var(--color-graphite);
        }

        .mobile-cta-rose {
          background: var(--color-dusty-rose);
          color: white !important;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          font-size: 1rem !important;
          font-family: var(--font-sans) !important;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Header;
