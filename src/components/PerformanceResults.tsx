import { motion } from 'framer-motion';

const results = [
    {
        title: 'Restauração de Volume Facial',
        desc: 'Protocolo de MD Codes para suporte estrutural e lifting imediato com preenchedores.',
        before: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=2070&auto=format&fit=crop', // Placeholder representativo
        after: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop'   // Placeholder representativo
    },
    {
        title: 'Harmonização de Perfil',
        desc: 'Equilíbrio entre queixo e mandíbula para um contorno facial definido e elegante.',
        before: 'https://images.unsplash.com/photo-1570172033936-12c1b126d4d2?q=80&w=2070&auto=format&fit=crop', // Placeholder representativo
        after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'   // Placeholder representativo
    }
];

const PerformanceResults: React.FC = () => {
    return (
        <section id="resultados" className="performance-results">
            <div className="container">
                <div className="section-title center">
                    <span className="tagline">RESULTADOS REAIS</span>
                    <h2>A Arte da <span className="gold-text">Transformação</span></h2>
                    <p style={{ margin: '2rem auto', maxWidth: '700px' }}>
                        Resultados que preservam a identidade. Confira alguns dos nossos protocolos de maior sucesso.
                    </p>
                </div>

                <div className="results-grid">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            className="result-card"
                        >
                            <div className="result-images">
                                <div className="result-img-box">
                                    <img src={item.before} alt="Antes" />
                                    <span className="label">CONDIÇÃO INICIAL</span>
                                </div>
                                <div className="result-img-box">
                                    <img src={item.after} alt="Depois" />
                                    <span className="label">PÓS-PROTOCOLO</span>
                                </div>
                            </div>
                            <div className="result-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="legal-notice">
                    <p>* Resultados individuais podem variar. Imagens autorizadas para fins educativos.</p>
                </div>
            </div>

            <style>{`
        .performance-results {
          padding: var(--section-padding);
          background-color: var(--color-black);
        }

        .results-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
        }

        .result-card {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .result-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          position: relative;
        }

        .result-img-box {
          position: relative;
          height: 600px;
          overflow: hidden;
        }

        .result-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(40%);
        }

        .result-img-box:last-child img {
          filter: grayscale(0%);
        }

        .result-img-box .label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: white;
          background: rgba(11, 11, 13, 0.6);
          padding: 8px 15px;
          backdrop-filter: blur(5px);
        }

        .result-info h3 {
          font-size: 2.2rem;
          margin-bottom: 0.8rem;
          color: var(--color-white-warm);
        }

        .result-info p {
          font-size: 1rem;
          color: var(--color-text-muted);
        }

        .legal-notice {
          margin-top: 6rem;
          text-align: center;
          opacity: 0.5;
        }

        .legal-notice p {
          font-size: 0.8rem !important;
        }

        @media (max-width: 992px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
          .result-img-box {
            height: 400px;
          }
        }
      `}</style>
        </section>
    );
};

export default PerformanceResults;
