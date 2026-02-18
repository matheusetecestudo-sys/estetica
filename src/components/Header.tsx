import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="nav-logo">
          <a href="/">
            <span className="brand-name">CLÍNICA <span className="gold">ESTÉTICA</span></span>
            <span className="brand-sub">DRA. ISABELLA PREMIUM</span>
          </a>
        </div>

        <nav className="nav-links desktop-only">
          <a href="#procedimentos">Tratamentos</a>
          <a href="#clinica">A Clínica</a>
          <a href="#resultados">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="nav-actions">
          <a href="https://wa.me/5511999999999" target="_blank" className="whatsapp-btn desktop-only">
            <MessageCircle size={20} />
            <span>Agendamento</span>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenu ? 'active' : ''}`}>
        <nav>
          <a href="#procedimentos" onClick={() => setMobileMenu(false)}>Tratamentos</a>
          <a href="#clinica" onClick={() => setMobileMenu(false)}>A Clínica</a>
          <a href="#resultados" onClick={() => setMobileMenu(false)}>Resultados</a>
          <a href="#contato" onClick={() => setMobileMenu(false)}>Contato</a>
          <a href="https://wa.me/5511999999999" className="mobile-cta">Agendar Consulta</a>
        </nav>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          border-bottom: 1px solid var(--color-border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo a {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          font-weight: 600;
          color: var(--color-graphite);
        }

        .brand-name .gold {
          color: var(--color-gold);
        }

        .brand-sub {
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: var(--color-text);
          margin-top: 0.2rem;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: var(--color-graphite);
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-gold);
          transition: var(--transition);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: var(--color-gold);
          color: white;
          padding: 0.7rem 1.5rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .whatsapp-btn:hover {
          background: var(--color-gold-dark);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-graphite);
          cursor: pointer;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-white);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(100%);
          transition: var(--transition);
        }

        .mobile-nav-overlay.active {
          transform: translateX(0);
        }

        .mobile-nav-overlay nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav-overlay a {
          font-size: 1.5rem;
          font-family: var(--font-serif);
          color: var(--color-graphite);
        }

        .mobile-cta {
          margin-top: 1rem;
          background: var(--color-gold);
          color: white !important;
          padding: 1rem 2rem;
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
