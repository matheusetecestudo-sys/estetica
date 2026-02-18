import { motion } from 'framer-motion';

const TestimonialsLuxury: React.FC = () => {
    const reviews = [
        {
            name: "Mariana S.",
            text: "A precisão da Dra. Isabella é algo raro de se encontrar. O resultado do preenchimento labial ficou tão natural que ninguém percebeu que fiz algo, apenas que estou mais radiante.",
            location: "São Paulo, SP"
        },
        {
            name: "Ricardo F.",
            text: "Procurei a clínica para bioestimuladores e a experiência foi impecável. O atendimento boutique realmente faz a diferença para quem busca privacidade e excelência.",
            location: "Curitiba, PR"
        },
        {
            name: "Alessandra V.",
            text: "A clínica é outro nível. Do café de boas-vindas ao acompanhamento pós-procedimento, tudo transpira luxo e competência médica.",
            location: "Belo Horizonte, MG"
        }
    ];

    return (
        <section className="testimonials-lux">
            <div className="container">
                <div className="section-title center">
                    <span className="tagline">RECONHECIMENTO</span>
                    <h2>A voz da <span className="gold-text">exclusividade</span></h2>
                </div>

                <div className="reviews-grid">
                    {reviews.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="review-card"
                        >
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map(s => <span key={s} className="star">★</span>)}
                            </div>
                            <p className="review-text">"{item.text}"</p>
                            <div className="review-meta">
                                <span className="name">{item.name}</span>
                                <span className="loc">{item.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-lux {
          padding: var(--section-padding);
          background-color: var(--color- black);
          border-top: 1px solid rgba(214, 194, 176, 0.1);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .review-card {
          padding: 3.5rem 2.5rem;
          background-color: var(--color-gray-deep);
          border: 1px solid rgba(214, 194, 176, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition-ultra);
        }

        .review-card:hover {
          transform: translateY(-10px);
          border-color: rgba(214, 194, 176, 0.2);
          background-color: #151517;
        }

        .stars {
          color: var(--color-gold-static);
          font-size: 0.8rem;
          margin-bottom: 2rem;
          letter-spacing: 0.2em;
        }

        .review-text {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-style: italic;
          color: var(--color-white-warm);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .review-meta {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .review-meta .name {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color-nude);
          font-weight: 600;
        }

        .review-meta .loc {
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 992px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsLuxury;
