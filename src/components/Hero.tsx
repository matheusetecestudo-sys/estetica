import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <div className="hero-overlay"></div>
        {/* Usando uma imagem de alta qualidade com efeito de zoom suave para simular vídeo cinematográfico */}
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfac44221d?q=80&w=2070&auto=format&fit=crop"
          alt="Clínica de Luxo"
          className="hero-media"
        />
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hero-tagline"
          >
            A CIÊNCIA DO REJUVENESCIMENTO
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Beleza que <br />
            <span className="gold-text italic">impõe presença.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Protocolos avançados e exclusivos para quem não aceita nada menos que a excelência médica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hero-actions"
          >
            <button className="btn-luxury primary">Agendar Avaliação</button>
            <button className="btn-luxury secondary">Falar no WhatsApp</button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: var(--color-black);
        }

        .hero-video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) grayscale(20%);
          transform: scale(1.1);
          animation: slowZoom 20s infinite alternate;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, rgba(11, 11, 13, 0.8) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-text-wrapper {
          max-width: 900px;
        }

        .hero-tagline {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--color-nude);
          display: block;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .hero h1 {
          font-size: clamp(4rem, 10vw, 8rem);
          margin-bottom: 2rem;
          line-height: 0.95;
        }

        .italic {
          font-style: italic;
        }

        .hero p {
          font-size: 1.4rem;
          margin-bottom: 4rem;
          max-width: 600px;
          color: var(--color-white-warm);
          opacity: 0.7;
        }

        .hero-actions {
          display: flex;
          gap: 2rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 1px solid rgba(214, 194, 176, 0.3);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .wheel {
          width: 2px;
          height: 6px;
          background: var(--color-gold-static);
          border-radius: 1px;
          animation: scrollWheel 2s infinite;
        }

        @keyframes scrollWheel {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(6px); }
          100% { opacity: 0; transform: translateY(12px); }
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero h1 {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
