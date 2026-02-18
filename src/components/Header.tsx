import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`inst-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-flex">
          <div className="top-info">
            <span><MapPin size={14} /> Itaim Bibi, São Paulo</span>
            <span><Phone size={14} /> (11) 99999-9999</span>
          </div>
          <div className="top-social">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
          </div>
        </div>
      </div>

      <div className="main-nav-bar">
        <div className="container nav-flex">
          <div className="logo-inst">
            <a href="/">
              <span className="logo-luxe">RELIANA</span>
              <span className="logo-tag">INSTITUTO DE ESTÉTICA</span>
            </a>
          </div>

          <nav className="desktop-menu">
            <a href="#home">Home</a>
            <a href="#sobre">A Clínica</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#resultados">Resultados</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="nav-cta">
            <a href="https://wa.me/5511999999999" target="_blank" className="btn-wa-header">
              <MessageCircle size={18} />
              <span>FALAR NO WHATSAPP</span>
            </a>
            <button className="mobile-trigger" onClick={() => setIsMobileOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <div className={`mobile-modal ${isMobileOpen ? 'active' : ''}`}>
        <button className="close-trigger" onClick={() => setIsMobileOpen(false)}>
          <X size={35} />
        </button>
        <nav>
          <a href="#home" onClick={() => setIsMobileOpen(false)}>Início</a>
          <a href="#sobre" onClick={() => setIsMobileOpen(false)}>A Clínica</a>
          <a href="#tratamentos" onClick={() => setIsMobileOpen(false)}>Tratamentos</a>
          <a href="#resultados" onClick={() => setIsMobileOpen(false)}>Resultados</a>
          <a href="#contato" onClick={() => setIsMobileOpen(false)}>Contato</a>
          <a href="https://wa.me/5511999999999" className="wa-modal-btn">AGENDAR POR WHATSAPP</a>
        </nav>
      </div>

      <style>{`
        .inst-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .top-bar {
          background: var(--color-dark);
          color: white;
          padding: 8px 0;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          font-weight: 500;
        }

        .top-flex {
          display: flex;
          justify-content: space-between;
        }

        .top-info { display: flex; gap: 2rem; }
        .top-info span { display: flex; align-items: center; gap: 8px; }
        .top-social { display: flex; gap: 1.5rem; }
        .top-social a { color: var(--color-gold); font-weight: 700; text-decoration: none; }

        .main-nav-bar {
          background: white;
          padding: 1.5rem 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
          transition: var(--transition-smooth);
        }

        .scrolled .main-nav-bar {
          padding: 1rem 0;
        }

        .nav-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-inst a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .logo-luxe {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 900;
          color: var(--color-dark);
          line-height: 1;
        }

        .logo-tag {
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: var(--color-primary);
          font-weight: 800;
          margin-top: 5px;
        }

        .desktop-menu {
          display: flex;
          gap: 2.5rem;
        }

        .desktop-menu a {
          text-decoration: none;
          color: var(--color-dark);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: 0.3s;
        }

        .desktop-menu a:hover {
          color: var(--color-primary);
        }

        .btn-wa-header {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--gradient-vibrant);
          color: white;
          padding: 1rem 2rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.8rem;
          box-shadow: 0 10px 20px rgba(255, 0, 127, 0.2);
        }

        .mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--color-dark);
          cursor: pointer;
        }

        .mobile-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-dark);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;
        }

        .mobile-modal.active {
          visibility: visible;
          opacity: 1;
        }

        .close-trigger {
          position: absolute;
          top: 40px;
          right: 40px;
          background: none;
          border: none;
          color: white;
        }

        .mobile-modal nav {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          text-align: center;
        }

        .mobile-modal a {
          color: white;
          font-family: var(--font-serif);
          font-size: 2.5rem;
          text-decoration: none;
        }

        .wa-modal-btn {
          background: var(--gradient-vibrant) !important;
          font-family: var(--font-sans) !important;
          font-size: 1rem !important;
          padding: 1.5rem !important;
          font-weight: 800 !important;
        }

        @media (max-width: 1100px) {
          .desktop-menu { display: none; }
          .mobile-trigger { display: block; }
          .btn-wa-header { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
