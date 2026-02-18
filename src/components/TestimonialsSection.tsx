import { motion } from 'framer-motion';

const reviews = [
    {
        author: "Amanda Cavalcanti",
        text: "A experiência no Instituto Reliana é indescritível. O atendimento é impecável e os resultados superaram qualquer expectativa. Sinto-me renovada e com a autoestima no topo.",
        location: "São Paulo, SP"
    },
    {
        author: "Mariana Silveira",
        text: "Fiz o protocolo de harmonização full face e o resultado ficou extremamente natural. Ninguém percebe que fiz algo, apenas dizem que estou muito mais radiante.",
        location: "Curitiba, PR"
    },
    {
        author: "Beatriz Fontes",
        text: "Espaço luxuoso e tecnologia de ponta. Me senti segura em cada etapa do procedimento. A Dra. Isabella é uma artista.",
        location: "Rio de Janeiro, RJ"
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="testimonials-inst">
            <div className="container">
                <div className="section-title-inst">
                    <span className="tag">DIFERENCIAL E RECONHECIMENTO</span>
                    <h2>A Opinião de <span className="inst-highlight">Nossas Pacientes.</span></h2>
                    <div className="divider-luxe"></div>
                </div>

                <div className="test-inst-grid">
                    {reviews.map((r, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="test-inst-card"
                        >
                            <div className="stars">★★★★★</div>
                            <p className="quote">"{r.text}"</p>
                            <div className="author-meta">
                                <strong>{r.author}</strong>
                                <span>{r.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-inst {
          padding: var(--section-padding);
          background: var(--color-bg-light);
        }

        .test-inst-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .test-inst-card {
          background: white;
          padding: 5rem 3.5rem;
          text-align: center;
          box-shadow: 0 30px 60px rgba(0,0,0,0.03);
          border-radius: 4px;
          border-bottom: 4px solid transparent;
          transition: var(--transition-smooth);
        }

        .test-inst-card:hover {
          transform: translateY(-10px);
          border-color: var(--color-primary);
          box-shadow: 0 40px 80px rgba(255, 0, 127, 0.1);
        }

        .stars {
          color: var(--color-gold);
          letter-spacing: 0.3em;
          font-size: 0.8rem;
          margin-bottom: 2.5rem;
        }

        .quote {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          line-height: 1.5;
          color: var(--color-dark);
          margin-bottom: 3.5rem;
          font-style: italic;
        }

        .author-meta {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .author-meta strong {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          color: var(--color-primary);
          text-transform: uppercase;
        }

        .author-meta span {
          font-size: 0.75rem;
          opacity: 0.6;
        }

        @media (max-width: 992px) {
          .test-inst-grid { grid-template-columns: 1fr; }
          .test-inst-card { padding: 3rem; }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;
