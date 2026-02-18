import { motion } from 'framer-motion';

const testimonials = [
    {
        author: "M. Silveira",
        city: "São Paulo, SP",
        text: "A Dra. Isabella é impecável. Fiz harmonização e o resultado ficou super natural. O atendimento de toda a equipe é de primeiro mundo."
    },
    {
        author: "A. Cavalcanti",
        city: "Curitiba, PR",
        text: "Ambiente maravilhoso e tecnologia de ponta. Me senti segura em cada etapa. Recomendo de olhos fechados para quem busca qualidade."
    }
];

const TestimonialsClean: React.FC = () => {
    return (
        <section className="test-clean">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Depoimentos</span>
                    <h2>A Opinião de <span className="gold-italic">Nossos Pacientes</span></h2>
                    <div className="gold-line"></div>
                </div>

                <div className="test-grid">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="test-card"
                        >
                            <div className="stars">★★★★★</div>
                            <p>"{t.text}"</p>
                            <div className="meta">
                                <strong>{t.author}</strong>
                                <span>{t.city}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .test-clean {
          padding: var(--section-padding);
          background: white;
        }

        .test-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .test-card {
          padding: 4rem 3rem;
          background: var(--color-off-white);
          border: 1px solid var(--color-border);
          text-align: center;
        }

        .stars {
          color: var(--color-gold);
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
          font-size: 0.8rem;
        }

        .test-card p {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-style: italic;
          color: var(--color-graphite);
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .meta {
          display: flex;
          flex-direction: column;
        }

        .meta strong {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.8rem;
          color: var(--color-graphite);
        }

        .meta span {
          font-size: 0.75rem;
          color: var(--color-text);
          opacity: 0.6;
          margin-top: 0.3rem;
        }

        @media (max-width: 768px) {
          .test-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsClean;
