import Header from './components/Header';
import Hero from './components/Hero';
import BrandPositioning from './components/BrandPositioning';
import EditorialServices from './components/EditorialServices';
import LuxuryDifferentiators from './components/LuxuryDifferentiators';
import PerformanceResults from './components/PerformanceResults';
import TestimonialsLuxury from './components/TestimonialsLuxury';
import ExperienceSection from './components/ExperienceSection';
import FinalCTA from './components/FinalCTA';
import FooterLuxury from './components/FooterLuxury';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <BrandPositioning />
        <LuxuryDifferentiators />
        <EditorialServices />
        <PerformanceResults />
        <TestimonialsLuxury />
        <ExperienceSection />
        <FinalCTA />
      </main>
      <FooterLuxury />

      {/* WhatsApp Fixed Button - Premium Version */}
      <a
        href="https://wa.me/5511999999999"
        className="whatsapp-premium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wa-text">CONVITE EXCLUSIVO</span>
        <div className="wa-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.584 5.768-5.766.001-3.18-2.587-5.766-5.764-5.766zm3.392 8.221c-.142.399-.833.723-1.141.774-.285.051-.613.082-.994-.039-.376-.121-.739-.214-1.273-.423-2.115-.83-3.484-2.99-3.59-3.131-.105-.141-.854-1.134-.854-2.162 0-1.028.528-1.535.739-1.746.211-.211.483-.263.633-.263.15 0 .301.002.433.007.135.006.314-.051.491.369.182.43.625 1.517.679 1.631.054.114.09.247.015.399-.075.152-.113.247-.225.377-.113.13-.237.289-.338.388-.113.11-.231.23-.1.455.131.226.584.965 1.255 1.562.865.772 1.594 1.012 1.819 1.125.226.113.357.094.49-.056.133-.15.572-.662.723-.888.151-.226.302-.189.508-.113.207.076 1.317.621 1.543.734.226.113.376.169.43.264.054.094.054.545-.088.944z" />
          </svg>
        </div>
      </a>

      <style>{`
        .whatsapp-premium {
          position: fixed;
          bottom: 40px;
          right: 40px;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          z-index: 1000;
        }

        .wa-text {
          background-color: var(--color-black);
          color: var(--color-nude);
          padding: 0.8rem 1.5rem;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          font-weight: 600;
          border: 1px solid rgba(214, 194, 176, 0.2);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateX(20px);
          transition: var(--transition-ultra);
        }

        .whatsapp-premium:hover .wa-text {
          opacity: 1;
          transform: translateX(0);
        }

        .wa-icon {
          width: 60px;
          height: 60px;
          background: var(--color-gold-metallic);
          color: var(--color-black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(179, 135, 40, 0.3);
          transition: var(--transition-ultra);
        }

        .whatsapp-premium:hover .wa-icon {
          transform: scale(1.1) rotate(15deg);
        }

        @media (max-width: 768px) {
          .wa-text { display: none; }
          .whatsapp-premium { bottom: 20px; right: 20px; }
          .wa-icon { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
}

export default App;
