import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Instagram } from 'lucide-react';

const HeaderVibrant: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-vibrant ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content-v">
        <div className="nav-logo-v">
          <a href="/">
            <span className="logo-text-v">RELIANA <span className="highlight-v">ESTÉTICA</span></span>
            <span className="logo-tag-v">ALTA PERFORMANCE MÉDICA</span>
          </a>
        </div>

        <nav className="nav-links-v desktop-only">
          <a href="#procedimentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="nav-actions-v">
          <a href="#" className="social-link-v desktop-only"><Instagram size={22} /></a>
          <a href="https://wa.me/5511999999999" target="_blank" className="btn-vibrant-nav desktop-only">
            <MessageCircle size={18} />
            <span>Consultoria VIP</span>
          </a>
          <button className="mobile-toggle-v" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu-v ${mobileMenu ? 'active' : ''}`}>
        <nav>
          <a href="#procedimentos" onClick={() => setMobileMenu(false)}>Tratamentos</a>
          <a href="#resultados" onClick={() => setMobileMenu(false)}>Resultados</a>
          <a href="#contato" onClick={() => setMobileMenu(false)}>Contato</a>
          <a href="https://wa.me/5511999999999" className="mobile-cta-v">Falar Especialista</a>
        </nav>
      </div>

      <style>{`
        .navbar-vibrant {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2.5rem 0;
          z-index: 1000;
          transition: var(--transition);
        }

        .navbar-vibrant.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          padding: 1.2rem 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .nav-content-v {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text-v {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--color-dark);
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .highlight-v {
          color: var(--color-primary);
          font-style: italic;
        }

        .logo-tag-v {
          display: block;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: var(--color-text-light);
          margin-top: 5px;
          font-weight: 700;
        }

        .nav-links-v {
          display: flex;
          gap: 3.5rem;
        }

        .nav-links-v a {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: var(--color-dark);
        }

        .nav-links-v a:hover {
          color: var(--color-primary);
        }

        .btn-vibrant-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--color-primary);
          color: white;
          padding: 0.9rem 2rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .social-link-v {
          color: var(--color-dark);
          margin-right: 2rem;
        }

        .mobile-toggle-v {
          display: none;
          background: none;
          border: none;
          color: var(--color-dark);
        }

        .mobile-menu-v {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          height: 100vh;
          background: white;
          z-index: 999;
          padding: 100px 50px;
          transform: translateX(100%);
          transition: var(--transition);
          box-shadow: -20px 0 60px rgba(0,0,0,0.1);
        }

        .mobile-menu-v.active {
          transform: translateX(0);
        }

        .mobile-menu-v nav {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .mobile-menu-v a {
          font-size: 2.5rem;
          font-family: var(--font-serif);
          color: var(--color-dark);
        }

        .mobile-cta-v {
          background: var(--color-primary) !important;
          color: white !important;
          padding: 1.5rem;
          text-align: center;
          font-size: 1.2rem !important;
          font-family: var(--font-sans) !important;
          font-weight: 700;
        }

        @media (max-width: 992px) {
          .desktop-only { display: none; }
          .mobile-toggle-v { display: block; }
        }
      `}</style>
    </header>
  );
};

export default HeaderVibrant;
