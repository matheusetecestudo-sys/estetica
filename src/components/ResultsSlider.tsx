import { motion } from 'framer-motion';

const results = [
    {
        title: 'Harmonização Facial',
        desc: 'Protocolo completo para suporte estrutural e rejuvenescimento.',
        before: 'https://images.unsplash.com/photo-1570172033936-12c1b126d4d2?q=80&w=2070&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    }
];

const ResultsSlider: React.FC = () => {
    return (
        <section id="resultados" className="results-slider">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Galeria de Resultados</span>
                    <h2>Transformações <span className="gold-italic">Reais</span></h2>
                    <div className="gold-line"></div>
                </div>

                <div className="res-grid">
                    {results.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="res-card"
                        >
                            <div className="res-images">
                                <div className="side">
                                    <span className="side-label">Antes</span>
                                    <img src={r.before} alt="Antes" />
                                </div>
                                <div className="side">
                                    <span className="side-label">Depois</span>
                                    <img src={r.after} alt="Depois" />
                                </div>
                            </div>
                            <div className="res-content">
                                <h3>{r.title}</h3>
                                <p>{r.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="legal-footer">* Resultados individuais podem variar. Procedimento realizado por médicos especialistas.</p>
            </div>

            <style>{`
        .results-slider {
          padding: var(--section-padding);
          background-color: var(--color-off-white);
        }

        .res-grid {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 1000px;
          margin: 0 auto;
        }

        .res-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .side {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .side-label {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 5px 15px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 10;
        }

        .res-content {
          text-align: center;
        }

        .res-content h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .legal-footer {
          margin-top: 5rem;
          text-align: center;
          font-size: 0.8rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .side { height: 400px; }
        }
      `}</style>
        </section>
    );
};

export default ResultsSlider;
