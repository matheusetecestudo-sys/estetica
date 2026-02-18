import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "A experiência na clínica superou todas as minhas expectativas. O resultado do Botox ficou extremamente natural, exatamente como eu desejava. O atendimento é impecável.",
    author: "M. Silveira",
    city: "São Paulo, SP"
  },
  {
    text: "O melhor investimento que já fiz na minha autoestima. A equipe é altamente profissional e me senti segura em cada etapa do procedimento de Harmonização.",
    author: "R. Cavalcanti",
    city: "Curitiba, PR"
  },
  {
    text: "Tecnologia de ponta e um ambiente acolhedor. Os resultados do tratamento corporal foram surpreendentes e muito rápidos.",
    author: "A. Fernandes",
    city: "Belo Horizonte, MG"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-title">
          <span>Depoimentos</span>
          <h2>A Voz da <span className="luxury-text-gradient">Satisfação</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <span className="name">{t.author}</span>
                <span className="city">{t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials {
          background-color: var(--color-white);
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .testimonial-card {
          padding: 4rem 2.5rem;
          background-color: var(--color-off-white);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .quote-icon {
          color: var(--color-gold);
          margin-bottom: 2rem;
          opacity: 0.5;
        }

        .testimonial-text {
          font-style: italic;
          font-size: 1.2rem;
          color: var(--color-graphite);
          margin-bottom: 2rem;
          font-family: var(--font-serif);
          line-height: 1.6;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .testimonial-author .name {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.85rem;
          color: var(--color-graphite);
        }

        .testimonial-author .city {
          font-size: 0.75rem;
          color: var(--color-warm-gray);
          margin-top: 0.3rem;
        }

        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
