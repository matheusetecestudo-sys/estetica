import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import TreatmentsSection from './components/TreatmentsSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-institutional">
      <Header />
      <main>
        <Hero />

        {/* Institutional Trust Banner */}
        <section className="inst-banner-ribbon">
          <div className="container ribbon-flex">
            <div className="ribbon-item">
              <strong>15+ ANOS</strong>
              <span>Referência Médica</span>
            </div>
            <div className="ribbon-item">
              <strong>ISO 9001</strong>
              <span>Qualidade Certificada</span>
            </div>
            <div className="ribbon-item">
              <strong>CURADORIA</strong>
              <span>Equipamentos de Ponta</span>
            </div>
            <div className="ribbon-item">
              <strong>MD CODES™</strong>
              <span>Técnica Avançada</span>
            </div>
          </div>
        </section>

        <AboutSection />
        <TreatmentsSection />
        <ResultsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Persistent Ultra-Vibrant WhatsApp CTA */}
      <a
        href="https://wa.me/5511999999999"
        className="wa-inst-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wa-inst-text">FALE COM UM ESPECIALISTA AGORA</span>
        <div className="wa-inst-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.584 5.768-5.766.001-3.18-2.587-5.766-5.764-5.766zm3.392 8.221c-.142.399-.833.723-1.141.774-.285.051-.613.082-.994-.039-.376-.121-.739-.214-1.273-.423-2.115-.83-3.484-2.99-3.59-3.131-.105-.141-.854-1.134-.854-2.162 0-1.028.528-1.535.739-1.746.211-.211.483-.263.633-.263.15 0 .301.002.433.007.135.006.314-.051.491.369.182.43.625 1.517.679 1.631.054.114.09.247.015.399-.075.152-.113.247-.225.377-.113.13-.237.289-.338.388-.113.11-.231.23-.1.455.131.226.584.965 1.255 1.562.865.772 1.594 1.012 1.819 1.125.226.113.357.094.49-.056.133-.15.572-.662.723-.888.151-.226.302-.189.508-.113.207.076 1.317.621 1.543.734.226.113.376.169.43.264.054.094.054.545-.088.944z" />
          </svg>
        </div>
      </a>

      <style>{`
        .inst-banner-ribbon {
          background: var(--color-dark);
          color: white;
          padding: 60px 0;
        }

        .ribbon-flex {
          display: flex;
          justify-content: space-between;
          text-align: center;
        }

        .ribbon-item {
          display: flex;
          flex-direction: column;
        }

        .ribbon-item strong {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--color-gold);
          letter-spacing: -0.01em;
        }

        .ribbon-item span {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.6;
          font-weight: 700;
        }

        .wa-inst-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          text-decoration: none;
          z-index: 2000;
        }

        .wa-inst-text {
          background: white;
          color: var(--color-dark);
          padding: 1.2rem 2.5rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          font-size: 0.85rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-left: 4px solid var(--color-primary);
          opacity: 0;
          transform: translateX(20px);
          transition: var(--transition-smooth);
        }

        .wa-inst-float:hover .wa-inst-text {
          opacity: 1;
          transform: translateX(0);
        }

        .wa-inst-icon {
          width: 75px;
          height: 75px;
          background: var(--gradient-vibrant);
          color: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(255, 0, 127, 0.3);
          transition: var(--transition-smooth);
        }

        .wa-inst-float:hover .wa-inst-icon {
          transform: scale(1.1) rotate(15deg);
        }

        @media (max-width: 992px) {
          .ribbon-flex { flex-direction: column; gap: 3rem; }
          .wa-inst-text { display: none; }
          .wa-inst-float { bottom: 20px; right: 20px; }
          .wa-inst-icon { width: 60px; height: 60px; }
        }
      `}</style>
    </div>
  );
}

export default App;
