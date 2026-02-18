import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Procedures from './components/Procedures';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Procedures />
        <Differentiators />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 40px;
          right: 40px;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .whatsapp-float:hover {
          transform: scale(1.1) rotate(5deg);
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
