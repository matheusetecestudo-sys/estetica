import { motion } from 'framer-motion';

const treatments = [
    {
        title: 'Harmonização Facial',
        desc: 'Arquitetura facial personalizada para realçar seus traços com equilíbrio e naturalidade.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Toxina Botulínica',
        desc: 'A suavização precisa de linhas de expressão para um olhar descansado e juventude duradoura.',
        image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Bioestimuladores de Colágeno',
        desc: 'Tratamento que desperta a firmeza natural da pele de dentro para fora.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2070&auto=format&fit=crop'
    }
];

const TreatmentsClean: React.FC = () => {
    return (
        <section id="procedimentos" className="treatments-clean">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Nossos Protocolos</span>
                    <h2>Tratamentos de <span className="gold-italic">Alta Performance</span></h2>
                    <div className="gold-line"></div>
                </div>

                <div className="treatments-grid">
                    {treatments.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="treatment-card"
                        >
                            <div className="img-holder">
                                <img src={t.image} alt={t.title} />
                            </div>
                            <div className="card-info">
                                <h3>{t.title}</h3>
                                <p>{t.desc}</p>
                                <a href="#contato" className="link-more">Saiba Mais ➔</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .treatments-clean {
          padding: var(--section-padding);
          background: white;
        }

        .treatments-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .treatment-card {
          background: white;
          border: 1px solid var(--color-border);
          transition: var(--transition);
          overflow: hidden;
        }

        .treatment-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
          border-color: var(--color-gold);
        }

        .img-holder {
          height: 350px;
          overflow: hidden;
        }

        .img-holder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .treatment-card:hover .img-holder img {
          transform: scale(1.1);
        }

        .card-info {
          padding: 2.5rem;
          text-align: center;
        }

        .card-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--color-graphite);
        }

        .card-info p {
          font-size: 0.95rem;
          color: var(--color-text);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .link-more {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: var(--color-gold);
        }

        @media (max-width: 992px) {
          .treatments-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
        </section>
    );
};

export default TreatmentsClean;
