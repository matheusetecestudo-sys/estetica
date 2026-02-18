import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-clean">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-tag">EXCLUSIVIDADE & SEGURANÇA MÉDICA</span>
          <h1>Realçando sua <br /> <span className="gold-italic">beleza natural</span> com sofisticação.</h1>
          <p>
            Protocolos avançados de harmonização e rejuvenescimento facial
            conduzidos por especialistas, em um ambiente planejado para o seu conforto absoluto.
          </p>
          <div className="hero-btns">
            <a href="#contato" className="btn-gold">Agendar Avaliação</a>
            <a href="#procedimentos" className="btn-outline">Ver Tratamentos</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">12k+</span>
              <span className="stat-label">Procedimentos</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">MD</span>
              <span className="stat-label">Título de Especialista</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image-wrapper"
        >
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop"
              alt="Estética de Luxo"
            />
            <div className="floating-badge">
              <span className="gold">★ ★ ★ ★ ★</span>
              <p>Referência em São Paulo</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-clean {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          background: linear-gradient(135deg, #fff 0%, #fdfbf8 100%);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .hero-tag {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          color: var(--color-gold);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-text h1 {
          font-size: clamp(3rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2.5rem;
        }

        .gold-italic {
          color: var(--color-gold);
          font-style: italic;
        }

        .hero-text p {
          font-size: 1.25rem;
          margin-bottom: 3.5rem;
          max-width: 580px;
          color: var(--color-text);
        }

        .hero-btns {
          display: flex;
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .hero-stats {
          display: flex;
          gap: 3.5rem;
          border-top: 1px solid var(--color-border);
          padding-top: 2.5rem;
        }

        .stat-num {
          display: block;
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-gold);
          font-weight: 600;
        }

        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-text);
          opacity: 0.7;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .image-card {
          position: relative;
          padding: 1rem;
          background: white;
          box-shadow: 0 40px 80px rgba(0,0,0,0.08);
          border-radius: 4px;
        }

        .image-card img {
          width: 100%;
          height: 650px;
          object-fit: cover;
          border-radius: 2px;
        }

        .floating-badge {
          position: absolute;
          bottom: 40px;
          right: -30px;
          background: var(--color-graphite);
          color: white;
          padding: 1.5rem 2rem;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .floating-badge .gold {
          color: var(--color-gold);
          font-size: 0.8rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .floating-badge p {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: white;
        }

        @media (max-width: 1200px) {
          .hero-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .hero-text p, .hero-btns, .hero-stats { margin-left: auto; margin-right: auto; justify-content: center; }
          .image-card img { height: 500px; }
          .floating-badge { right: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
