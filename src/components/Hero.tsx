import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop"
          alt="Clínica de Estética de Luxo"
          className="hero-image"
        />
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-tagline"
          >
            Ciência, Arte e Exclusividade
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Realçando sua beleza com <br />
            <span className="luxury-text-gradient">naturalidade médica</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Protocolos de luxo personalizados para resultados sofisticados e duradouros.
            A tecnologia mais avançada do mundo a serviço da sua confiança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-buttons"
          >
            <button className="btn-premium solid">Agendar Avaliação</button>
            <button className="btn-premium">Conhecer Tratamentos</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-badges"
          >
            <div className="badge">
              <span className="badge-number">15+</span>
              <span className="badge-label">Anos de Excelência</span>
            </div>
            <div className="badge">
              <span className="badge-number">10k+</span>
              <span className="badge-label">Pacientes Satisfeitos</span>
            </div>
            <div className="badge">
              <span className="badge-number">MD</span>
              <span className="badge-label">Corpo Clínico Especializado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 800px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(247, 246, 244, 0.95) 0%, rgba(247, 246, 244, 0.6) 50%, rgba(255, 255, 255, 0) 100%);
        }

        .hero-content {
          z-index: 1;
        }

        .hero-text {
          max-width: 700px;
        }

        .hero-tagline {
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.85rem;
          color: var(--color-gold);
          display: block;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .hero-text h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-graphite);
        }

        .hero-text p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: var(--color-warm-gray);
          max-width: 550px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .hero-badges {
          display: flex;
          gap: 3rem;
          border-top: 1px solid rgba(198, 167, 94, 0.2);
          padding-top: 2rem;
        }

        .badge {
          display: flex;
          flex-direction: column;
        }

        .badge-number {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--color-gold);
          line-height: 1;
        }

        .badge-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-warm-gray);
          margin-top: 0.5rem;
        }

        @media (max-width: 992px) {
          .hero-overlay {
            background: linear-gradient(0deg, rgba(247, 246, 244, 1) 0%, rgba(247, 246, 244, 0.8) 100%);
          }
          .hero-text h1 {
            font-size: 3rem;
          }
          .hero-badges {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
