import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-vibrant">
      <div className="container">
        <div className="hero-flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span className="badge-vibrant">ESTÉTICA MÉDICA AVANÇADA</span>
            <h1>A ciência de ser <br /> <span className="gradient-text">Extraordinária.</span></h1>
            <p>
              Protocolos de luxo desenhados para mulheres que não aceitam o comum.
              Harmonização facial com precisão cirúrgica e resultados que impõem presença.
            </p>
            <div className="hero-btns-vibrant">
              <button className="btn-vibrant">Agende sua Experiência</button>
              <button className="btn-outline-vibrant">Ver Protocolos</button>
            </div>

            <div className="trust-badges">
              <div className="trust-item">
                <strong>+5.000</strong>
                <span>Pacientes Satisfeitas</span>
              </div>
              <div className="trust-item">
                <strong>Especialista</strong>
                <span>Títulos Internacionais</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: 'spring' }}
            className="hero-visual"
          >
            <div className="main-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfac44221d?q=80&w=2070&auto=format&fit=crop"
                alt="Mulher Empoderada"
                className="main-hero-img"
              />
              <div className="floating-card glass-box">
                <span className="rating">★★★★★</span>
                <p>Referência em resultados naturais em SP</p>
              </div>
            </div>
            <div className="decoration-blob"></div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-vibrant {
          min-height: 100vh;
          padding-top: 150px;
          padding-bottom: 100px;
          background: radial-gradient(circle at top right, rgba(189, 30, 81, 0.05) 0%, #fff 60%);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-flex {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .badge-vibrant {
          display: inline-block;
          color: var(--color-primary);
          font-weight: 800;
          letter-spacing: 0.3em;
          font-size: 0.85rem;
          margin-bottom: 2rem;
          background: rgba(189, 30, 81, 0.1);
          padding: 8px 20px;
          border-radius: 4px;
        }

        .hero-content h1 {
          font-size: clamp(3.5rem, 8vw, 6rem);
          margin-bottom: 2.5rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 60%, var(--color-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .hero-content p {
          font-size: 1.35rem;
          max-width: 600px;
          margin-bottom: 4rem;
          color: var(--color-text);
        }

        .hero-btns-vibrant {
          display: flex;
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .trust-badges {
          display: flex;
          gap: 4rem;
          border-top: 1px solid #eee;
          padding-top: 3rem;
        }

        .trust-item strong {
          display: block;
          font-size: 1.8rem;
          color: var(--color-primary);
          font-family: var(--font-serif);
        }

        .trust-item span {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .hero-visual {
          position: relative;
        }

        .main-image-wrapper {
          position: relative;
          z-index: 2;
        }

        .main-hero-img {
          width: 100%;
          height: 750px;
          object-fit: cover;
          border-radius: 4px;
          box-shadow: 30px 30px 0px var(--color-bg-soft);
        }

        .floating-card {
          position: absolute;
          bottom: 50px;
          left: -40px;
          padding: 2.5rem;
          border-radius: 4px;
          max-width: 250px;
          text-align: center;
        }

        .rating {
          color: var(--color-gold);
          display: block;
          margin-bottom: 1rem;
          letter-spacing: 0.2em;
        }

        .decoration-blob {
          position: absolute;
          top: -10%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: rgba(189, 30, 81, 0.05);
          filter: blur(100px);
          border-radius: 50%;
          z-index: 1;
        }

        @media (max-width: 1200px) {
          .hero-flex { grid-template-columns: 1fr; text-align: center; }
          .hero-content p, .hero-btns-vibrant, .trust-badges { margin-left: auto; margin-right: auto; justify-content: center; }
          .main-hero-img { height: 500px; }
          .floating-card { left: 50%; transform: translateX(-50%); bottom: -30px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
