import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
    return (
        <section className="final-cta">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="cta-box"
                >
                    <span className="tagline">O MOMENTO É AGORA</span>
                    <h2>Sua melhor versão <br /> <span className="gold-text italic">começa aqui.</span></h2>
                    <p>
                        Agende uma avaliação personalizada com nossa equipe de especialistas e
                        descubra o plano ideal para seus objetivos.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-luxury primary big">Agendar Consulta de Luxo</button>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .final-cta {
          padding: var(--section-padding);
          background-color: var(--color- black);
        }

        .cta-box {
          background-color: var(--color-gray-deep);
          padding: 8rem 4rem;
          text-align: center;
          border: 1px solid rgba(214, 194, 176, 0.1);
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(179, 135, 40, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-box h2 {
          font-size: clamp(3rem, 7vw, 6rem);
          margin-bottom: 2rem;
        }

        .cta-box p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 4rem;
          color: var(--color-white-warm);
        }

        .big {
          padding: 1.5rem 4rem;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .cta-box {
            padding: 4rem 2rem;
          }
          .big {
            width: 100%;
            padding: 1.5rem 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default FinalCTA;
