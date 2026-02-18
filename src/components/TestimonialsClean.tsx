import { motion } from 'framer-motion';

const testimonials = [
  {
    author: "CAROLINE MENDES",
    city: "São Paulo, SP",
    text: "O resultado da minha harmonização superou todas as expectativas. Não é apenas estética, é elevar a autoestima a um nível que eu não conhecia."
  },
  {
    author: "JULIANA FERREIRA",
    city: "Rio de Janeiro, RJ",
    text: "Espaço impecável, atendimento diferenciado e resultados extremamente naturais. É a melhor clínica que já visitei no Brasil."
  }
];

const TestimonialsVibrant: React.FC = () => {
  return (
    <section className="test-v">
      <div className="container">
        <div className="section-header">
          <span className="badge">RECONHECIMENTO</span>
          <h2>A Voz da <span className="gradient-text-v">Satisfação.</span></h2>
          <div className="vibrant-line"></div>
        </div>

        <div className="test-grid-v">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="test-card-v glass-box"
            >
              <div className="v-stars">★★★★★</div>
              <p className="v-quote">"{t.text}"</p>
              <div className="v-meta">
                <strong>{t.author}</strong>
                <span>{t.city}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .test-v {
          padding: var(--section-padding);
          background: #fff;
        }

        .gradient-text-v {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: italic;
        }

        .test-grid-v {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .test-card-v {
          padding: 5rem 4rem;
          border-radius: 4px;
          text-align: center;
        }

        .v-stars {
          color: var(--color-gold);
          letter-spacing: 0.3em;
          margin-bottom: 2.5rem;
          font-size: 0.9rem;
        }

        .v-quote {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          line-height: 1.5;
          color: var(--color-dark);
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .v-meta {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .v-meta strong {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          color: var(--color-primary);
        }

        .v-meta span {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }

        @media (max-width: 912px) {
          .test-grid-v { grid-template-columns: 1fr; }
          .test-card-v { padding: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsVibrant;
