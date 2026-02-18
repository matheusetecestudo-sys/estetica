import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
    return (
        <section className="experience">
            <div className="experience-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="experience-text"
                >
                    <div className="section-title">
                        <span className="tagline">O AMBIENTE</span>
                        <h2>Sua jornada de <span className="gold-text">conforto e privacidade</span></h2>
                        <p>
                            Nossa clínica foi projetada para ser um santuário de bem-estar. Cada detalhe,
                            da iluminação suave à curadoria de aromas, foi pensado para oferecer uma
                            experiência de luxo que precede seu procedimento.
                        </p>
                    </div>
                </motion.div>

                <div className="experience-gallery">
                    <div className="gallery-main">
                        <img src="https://images.unsplash.com/photo-1629167268803-0ed91724a18e?q=80&w=2070&auto=format&fit=crop" alt="Clínica Interior" />
                    </div>
                    <div className="gallery-side">
                        <div className="side-img">
                            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop" alt="Detalhe Decoração" />
                        </div>
                        <div className="side-img">
                            <img src="https://images.unsplash.com/photo-1556228720-195a672e8a13?q=80&w=2070&auto=format&fit=crop" alt="Sala de Atendimento" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .experience {
          padding: var(--section-padding);
          background-color: var(--color- black);
        }

        .experience-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .experience-text {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .experience-gallery {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
          height: 800px;
        }

        .gallery-main, .side-img {
          overflow: hidden;
          position: relative;
        }

        .gallery-main img, .side-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-ultra);
          filter: brightness(0.7);
        }

        .gallery-main:hover img, .side-img:hover img {
          filter: brightness(1);
          transform: scale(1.02);
        }

        .gallery-side {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 992px) {
          .experience-gallery {
            grid-template-columns: 1fr;
            height: auto;
          }
          .gallery-main {
            height: 500px;
          }
          .side-img {
            height: 300px;
          }
        }
      `}</style>
        </section>
    );
};

export default ExperienceSection;
