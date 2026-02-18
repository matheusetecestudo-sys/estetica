import { motion } from 'framer-motion';

const results = [
    {
        title: 'Harmonização de Perfil',
        desc: 'Redefinição da linha mandibular e mento, criando contornos marcantes e harmoniosos.',
        before: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop'
    },
    {
        title: 'Rejuvenescimento Facial Full Face',
        desc: 'Tratamento global para volumização e suavização de linhas de expressão profundas.',
        before: 'https://images.unsplash.com/photo-1570172033936-12c1b126d4d2?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    }
];

const ResultsSection: React.FC = () => {
    return (
        <section id="resultados" className="results-inst">
            <div className="container">
                <div className="section-title-inst">
                    <span className="tag">GALERIA DE TRANSFORMAÇÕES</span>
                    <h2>A Arte do <span className="inst-highlight">Resultado Natural.</span></h2>
                    <div className="divider-luxe"></div>
                </div>

                <div className="results-inst-grid">
                    {results.map((r, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="results-inst-card"
                        >
                            <div className="res-comparison">
                                <div className="res-side">
                                    <img src={r.before} alt="Antes" />
                                    <span className="res-label">ANTES</span>
                                </div>
                                <div className="res-side">
                                    <img src={r.after} alt="Depois" />
                                    <span className="res-label active">DEPOIS</span>
                                </div>
                            </div>
                            <div className="res-info-inst">
                                <h3>{r.title}</h3>
                                <p>{r.desc}</p>
                                <a href="https://wa.me/5511999999999" target="_blank" className="btn-whatsapp-inst">QUERO ESTE RESULTADO</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .results-inst {
          padding: var(--section-padding);
          background: white;
        }

        .results-inst-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 120px;
        }

        .results-inst-card {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .res-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 4rem;
        }

        .res-side {
          position: relative;
          height: 700px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
        }

        .res-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%) contrast(1.1);
        }

        .res-label {
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--color-dark);
          color: white;
          padding: 8px 18px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .res-label.active {
          background: var(--color-primary);
        }

        .res-info-inst h3 {
          font-size: 2.4rem;
          margin-bottom: 1rem;
        }

        .res-info-inst p {
          max-width: 700px;
          margin: 0 auto 3.5rem;
        }

        @media (max-width: 912px) {
          .res-comparison { grid-template-columns: 1fr; }
          .res-side { height: 450px; }
        }
      `}</style>
        </section>
    );
};

export default ResultsSection;
