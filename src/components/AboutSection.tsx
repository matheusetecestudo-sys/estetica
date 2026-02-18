import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
    return (
        <section id="sobre" className="about-inst">
            <div className="container about-grid">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="about-image"
                >
                    <img
                        src="https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop"
                        alt="Dra. Isabella Premium"
                    />
                    <div className="experience-tag">
                        <strong>15+</strong>
                        <span>Anos de Experiência</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="about-text"
                >
                    <div className="section-title-inst" style={{ textAlign: 'left', marginBottom: '40px' }}>
                        <span className="tag">EQUIPE MÉDICA E INFRAESTRUTURA</span>
                        <h2>Excelência que <br /> gera <span className="inst-highlight">confiança.</span></h2>
                    </div>
                    <p>
                        O Instituto Reliana não é apenas uma clínica. É um centro de referência em estética avançada
                        e rejuvenescimento facial. Liderado pela Dra. Isabella Premium, nossa missão é entregar resultados
                        impecáveis através de uma abordagem humanizada e protocolos de segurança hospitalar.
                    </p>
                    <p style={{ marginTop: '2rem' }}>
                        Nossa estrutura foi desenhada para oferecer privacidade absoluta e o conforto que você merece.
                        Utilizamos apenas os insumos de maior prestígio mundial, garantindo que cada procedimento seja
                        uma obra de arte em segurança e resultado.
                    </p>
                    <div className="about-features">
                        <div className="feat-item">
                            <span className="dot"></span>
                            <strong>Certificação Internacional</strong>
                        </div>
                        <div className="feat-item">
                            <span className="dot"></span>
                            <strong>Protocolos Autorais Exclusivos</strong>
                        </div>
                        <div className="feat-item">
                            <span className="dot"></span>
                            <strong>Estrutura Boutique Premium</strong>
                        </div>
                    </div>
                    <a href="https://wa.me/5511999999999" target="_blank" className="btn-whatsapp-inst">CONHECER CONCEITO</a>
                </motion.div>
            </div>

            <style>{`
        .about-inst {
          padding: var(--section-padding);
          background: white;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image img {
          width: 100%;
          height: 700px;
          object-fit: cover;
          border-radius: 4px;
        }

        .experience-tag {
          position: absolute;
          top: -30px;
          left: -30px;
          background: var(--color-primary);
          color: white;
          padding: 2.5rem;
          text-align: center;
          border-radius: 4px;
          box-shadow: 20px 20px 50px rgba(255, 0, 127, 0.2);
        }

        .experience-tag strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 3rem;
          line-height: 1;
        }

        .experience-tag span {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin: 3.5rem 0;
        }

        .feat-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .feat-item .dot {
          width: 12px;
          height: 12px;
          background: var(--gradient-vibrant);
          border-radius: 2px;
        }

        .feat-item strong {
          font-size: 1.1rem;
          color: var(--color-dark);
          font-weight: 700;
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .about-image img { height: 500px; }
          .experience-tag { left: 20px; top: -20px; }
        }
      `}</style>
        </section>
    );
};

export default AboutSection;
