import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-inst">
      <div className="container hero-inst-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-inst-text"
        >
          <span className="inst-tag">ALTA PERFORMANCE EM ESTÉTICA</span>
          <h1>Excelência Médica <br /> para sua <span className="inst-highlight">Beleza.</span></h1>
          <p>
            O Instituto Reliana une ciência, tecnologia de vanguarda e um olhar artístico
            para entregar protocolos exclusivos que transformam e rejuvenescem com naturalidade.
          </p>
          <div className="hero-inst-actions">
            <a href="https://wa.me/5511999999999" target="_blank" className="btn-whatsapp-inst">
              <MessageCircle size={24} />
              AGENDAR NO WHATSAPP
            </a>
            <a href="#tratamentos" className="btn-outline-inst">VER TRATAMENTOS</a>
          </div>

          <div className="inst-floating-results">
            <div className="res-mini-box">
              <span className="num">12k+</span>
              <span className="lab">Pacientes</span>
            </div>
            <div className="res-mini-box">
              <span className="num">15</span>
              <span className="lab">Premiações</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2 }}
          className="hero-inst-visual"
        >
          <div className="inst-image-stack">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfac44221d?q=80&w=2070&auto=format&fit=crop"
              alt="Estética de Elite"
            />
            <div className="badge-vibrant-luxe">
              <span>★ Referência Nacional em Estética Avançada</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-inst {
          min-height: 100vh;
          padding-top: 180px;
          padding-bottom: 100px;
          background: radial-gradient(circle at 10% 20%, rgba(255, 0, 127, 0.03) 0%, #fff 100%);
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-inst-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 6rem;
          align-items: center;
        }

        .inst-tag {
          display: block;
          font-size: 0.9rem;
          letter-spacing: 0.4em;
          color: var(--color-primary);
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .hero-inst-text h1 {
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          margin-bottom: 2.5rem;
          color: var(--color-dark);
        }

        .inst-highlight {
          color: var(--color-primary);
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .hero-inst-text p {
          font-size: 1.35rem;
          max-width: 620px;
          margin-bottom: 4rem;
          color: var(--color-text-muted);
        }

        .hero-inst-actions {
          display: flex;
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .inst-floating-results {
          display: flex;
          gap: 4rem;
          border-top: 1px solid #eee;
          padding-top: 3rem;
        }

        .res-mini-box {
          display: flex;
          flex-direction: column;
        }

        .res-mini-box .num {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--color-dark);
          font-weight: 900;
        }

        .res-mini-box .lab {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--color-primary);
        }

        .inst-image-stack {
          position: relative;
        }

        .inst-image-stack img {
          width: 100%;
          height: 800px;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 40px 40px 0 var(--color-bg-light);
        }

        .badge-vibrant-luxe {
          position: absolute;
          bottom: 50px;
          right: -30px;
          background: var(--color-dark);
          color: white;
          padding: 1.5rem 2.5rem;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          box-shadow: 20px 20px 50px rgba(0,0,0,0.2);
        }

        @media (max-width: 1200px) {
          .hero-inst-grid { grid-template-columns: 1fr; text-align: center; }
          .hero-inst-text p, .hero-inst-actions, .inst-floating-results { margin-left: auto; margin-right: auto; justify-content: center; }
          .inst-image-stack img { height: 500px; }
          .badge-vibrant-luxe { right: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
