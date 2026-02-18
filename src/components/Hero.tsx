import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-fem">
      <div className="container hero-grid-fem">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-image-block"
        >
          <div className="image-luxury-frame">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfac44221d?q=80&w=2070&auto=format&fit=crop"
              alt="Estética Feminina"
            />
            <div className="rose-overlay-card">
              <span className="stars">★★★★★</span>
              <p>Beleza com naturalidade</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-text-fem"
        >
          <span className="tag-line">ARQUITETURA DA BELEZA</span>
          <h1>Você, na sua <br /> <span className="rose-italic">melhor versão.</span></h1>
          <p>
            Protocolos exclusivos de harmonização facial e tratamentos corporais
            desenhados para realçar o que você tem de mais único.
          </p>
          <div className="hero-actions-fem">
            <a href="#contato" className="btn-rose">Agendar Avaliação</a>
            <a href="#procedimentos" className="btn-outline-rose">Conhecer</a>
          </div>

          <div className="social-proof-fem">
            <div className="avatars">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="User" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop" alt="User" />
              <div className="plus-others">+1k</div>
            </div>
            <p>Mais de 1.000 vidas transformadas este ano</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-fem {
          min-height: 100vh;
          background: var(--color-rose-white);
          display: flex;
          align-items: center;
          padding-top: 120px;
          overflow: hidden;
        }

        .hero-grid-fem {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }

        .tag-line {
          display: block;
          font-size: 0.85rem;
          letter-spacing: 0.4em;
          color: var(--color-dusty-rose);
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .hero-text-fem h1 {
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          line-height: 1;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }

        .rose-italic {
          color: var(--color-dusty-rose);
          font-style: italic;
        }

        .hero-text-fem p {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 3.5rem;
          max-width: 550px;
        }

        .hero-actions-fem {
          display: flex;
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .image-luxury-frame {
          position: relative;
          padding-right: 40px;
          padding-bottom: 40px;
        }

        .image-luxury-frame img {
          width: 100%;
          height: 700px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 20px 20px 60px rgba(229, 177, 177, 0.15);
        }

        .rose-overlay-card {
          position: absolute;
          bottom: 0;
          right: 0;
          background: white;
          padding: 2.5rem;
          border-radius: 10px;
          box-shadow: -10px -10px 40px rgba(229, 177, 177, 0.2);
          text-align: center;
        }

        .stars {
          color: #FFD700;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.8rem;
          letter-spacing: 0.2em;
        }

        .rose-overlay-card p {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          color: var(--color-graphite);
        }

        .social-proof-fem {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .avatars {
          display: flex;
          align-items: center;
        }

        .avatars img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 3px solid white;
          margin-left: -15px;
        }

        .avatars img:first-child { margin-left: 0; }

        .plus-others {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: var(--color-soft-pink);
          color: var(--color-dusty-rose);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          border: 3px solid white;
          margin-left: -15px;
        }

        .social-proof-fem p {
          font-size: 0.85rem;
          margin-bottom: 0;
          opacity: 0.7;
        }

        @media (max-width: 1200px) {
          .hero-grid-fem { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .hero-text-fem p, .hero-actions-fem, .social-proof-fem { margin-left: auto; margin-right: auto; justify-content: center; }
          .image-luxury-frame { max-width: 600px; margin: 0 auto; padding-right: 0; }
          .image-luxury-frame img { height: 500px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
