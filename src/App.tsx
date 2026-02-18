import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import TreatmentsClean from './components/TreatmentsClean';
import ResultsSlider from './components/ResultsSlider';
import TestimonialsClean from './components/TestimonialsClean';
import ContactClean from './components/ContactClean';
import FooterClean from './components/FooterClean';

function App() {
  return (
    <div className="app-main">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <TreatmentsClean />
        <ResultsSlider />
        <TestimonialsClean />
        <ContactClean />
      </main>
      <FooterClean />

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/5511999999999"
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wa-pulse"></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.584 5.768-5.766.001-3.18-2.587-5.766-5.764-5.766zm3.392 8.221c-.142.399-.833.723-1.141.774-.285.051-.613.082-.994-.039-.376-.121-.739-.214-1.273-.423-2.115-.83-3.484-2.99-3.59-3.131-.105-.141-.854-1.134-.854-2.162 0-1.028.528-1.535.739-1.746.211-.211.483-.263.633-.263.15 0 .301.002.433.007.135.006.314-.051.491.369.182.43.625 1.517.679 1.631.054.114.09.247.015.399-.075.152-.113.247-.225.377-.113.13-.237.289-.338.388-.113.11-.231.23-.1.455.131.226.584.965 1.255 1.562.865.772 1.594 1.012 1.819 1.125.226.113.357.094.49-.056.133-.15.572-.662.723-.888.151-.226.302-.189.508-.113.207.076 1.317.621 1.543.734.226.113.376.169.43.264.054.094.054.545-.088.944z" />
        </svg>
      </a>

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          transition: transform 0.3s ease;
        }

        .wa-float:hover {
          transform: scale(1.1) rotate(10deg);
        }

        .wa-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          opacity: 0.6;
          z-index: -1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;
