import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import TreatmentsVibrant from './components/TreatmentsClean';
import ResultsVibrant from './components/ResultsSlider';
import TestimonialsVibrant from './components/TestimonialsClean';
import ContactVibrant from './components/ContactClean';
import FooterClean from './components/FooterClean';

function App() {
  return (
    <div className="app-main-v">
      <Header />
      <main>
        <Hero />

        <WhyUs />
        <TreatmentsVibrant />

        <section className="manifesto-vibrant">
          <div className="container">
            <h2 className="manifesto-text">
              “Beleza não é sobre mudar quem você é, mas sobre <span className="highlight-m">libertar quem você sempre foi.</span>”
            </h2>
          </div>
        </section>

        <ResultsVibrant />
        <TestimonialsVibrant />
        <ContactVibrant />
      </main>

      <FooterClean />

      {/* Premium WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        className="wa-vibrant-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wa-v-pulse"></div>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.584 5.768-5.766.001-3.18-2.587-5.766-5.764-5.766zm3.392 8.221c-.142.399-.833.723-1.141.774-.285.051-.613.082-.994-.039-.376-.121-.739-.214-1.273-.423-2.115-.83-3.484-2.99-3.59-3.131-.105-.141-.854-1.134-.854-2.162 0-1.028.528-1.535.739-1.746.211-.211.483-.263.633-.263.15 0 .301.002.433.007.135.006.314-.051.491.369.182.43.625 1.517.679 1.631.054.114.09.247.015.399-.075.152-.113.247-.225.377-.113.13-.237.289-.338.388-.113.11-.231.23-.1.455.131.226.584.965 1.255 1.562.865.772 1.594 1.012 1.819 1.125.226.113.357.094.49-.056.133-.15.572-.662.723-.888.151-.226.302-.189.508-.113.207.076 1.317.621 1.543.734.226.113.376.169.43.264.054.094.054.545-.088.944z" />
        </svg>
        <span className="wa-v-label">AGENDAR VISITA</span>
      </a>

      <style>{`
        .manifesto-vibrant {
          padding: 120px 0;
          background: var(--color-bg-soft);
          text-align: center;
          border-top: 1px solid rgba(189, 30, 81, 0.05);
          border-bottom: 1px solid rgba(189, 30, 81, 0.05);
        }

        .manifesto-text {
          font-size: clamp(2rem, 5vw, 3.5rem);
          max-width: 1000px;
          margin: 0 auto;
          line-height: 1.3;
          font-weight: 500;
        }

        .highlight-m {
          color: var(--color-primary);
          font-style: italic;
        }

        .wa-vibrant-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          height: 70px;
          background: var(--color-primary);
          color: white;
          display: flex;
          align-items: center;
          padding: 0 30px;
          gap: 15px;
          border-radius: 4px;
          z-index: 1000;
          box-shadow: 0 20px 40px rgba(189, 30, 81, 0.3);
          transition: var(--transition);
          text-decoration: none;
        }

        .wa-v-label {
          font-weight: 800;
          letter-spacing: 0.15em;
          font-size: 0.85rem;
        }

        .wa-vibrant-float:hover {
          transform: translateY(-5px) scale(1.05);
          background: var(--color-dark);
        }

        .wa-v-pulse {
          position: absolute;
          inset: 0;
          background: var(--color-primary);
          border-radius: 4px;
          z-index: -1;
          animation: waPulseV 2s infinite;
        }

        @keyframes waPulseV {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2, 1.4); opacity: 0; }
        }

        @media (max-width: 768px) {
          .wa-v-label { display: none; }
          .wa-vibrant-float { padding: 0 20px; right: 20px; bottom: 20px; width: 60px; height: 60px; justify-content: center; }
        }
      `}</style>
    </div>
  );
}

export default App;
