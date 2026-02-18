import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Conceito', href: '#conceito' },
    { name: 'Procedimentos', href: '#procedimentos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'A Clínica', href: '#clinica' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">CLÍNICA <span className="gold">ESTÉTICA</span></span>
          <span className="logo-sub">AVANÇADA</span>
        </div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+5511999999999" className="icon-link desktop-only">
            <Phone size={18} />
          </a>
          <a href="https://wa.me/5511999999999" className="icon-link whatsapp" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} />
          </a>
          <button className="btn-premium btn-small desktop-only">Agendar Avaliação</button>

          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-premium solid" style={{ marginTop: '2rem' }}>Agendar Avaliação</button>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }

        .header.scrolled {
          background-color: rgba(247, 246, 244, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-text {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .logo-text .gold {
          color: var(--color-gold);
        }

        .logo-sub {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          color: var(--color-warm-gray);
          margin-top: 0.2rem;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-graphite);
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-gold);
          transition: var(--transition-smooth);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .icon-link {
          color: var(--color-graphite);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .icon-link:hover {
          color: var(--color-gold);
        }

        .icon-link.whatsapp {
          color: #25D366;
        }

        .btn-small {
          padding: 0.6rem 1.5rem;
          font-size: 0.7rem;
        }

        .mobile-menu-toggle {
          display: none;
          color: var(--color-graphite);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-off-white);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-100%);
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav-link {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-graphite);
        }

        @media (max-width: 992px) {
          .desktop-nav, .desktop-only {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
