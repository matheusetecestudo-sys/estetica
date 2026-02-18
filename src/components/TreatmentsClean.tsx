import { motion } from 'framer-motion';

const treatments = [
  {
    title: 'Harmonização Facial',
    category: 'REJUVENESCIMENTO',
    desc: 'Arquitetura facial sob medida para realçar sua essência com delicadeza.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Toxina Botulínica',
    category: 'RELAXAMENTO',
    desc: 'Suavização precisa para um olhar radiante e pele visivelmente mais jovem.',
    image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Lábios de Seda',
    category: 'HIDRATAÇÃO & VOLUME',
    desc: 'Contorno e volume desenhados para um sorriso irresistivelmente natural.',
    image: 'https://images.unsplash.com/photo-1628178148526-b338a39ceda5?q=80&w=2070&auto=format&fit=crop'
  }
];

const TreatmentsClean: React.FC = () => {
  return (
    <section id="procedimentos" className="treatments-fem">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nossos Rituais</span>
          <h2>Tratamentos que <span className="rose-italic">Inspiram Confiança</span></h2>
          <div className="rose-divider"></div>
        </div>

        <div className="treatments-grid-fem">
          {treatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="treatment-card-fem"
            >
              <div className="img-frame-fem">
                <img src={t.image} alt={t.title} />
                <span className="cat-tag">{t.category}</span>
              </div>
              <div className="info-fem">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <a href="#contato" className="btn-text-rose">Descobrir protocolo ➔</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .treatments-fem {
          padding: var(--section-padding);
          background: white;
        }

        .treatments-grid-fem {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }

        .treatment-card-fem {
          background: var(--color-rose-white);
          border-radius: 15px;
          overflow: hidden;
          transition: var(--transition);
          border: 1px solid var(--color-border);
        }

        .treatment-card-fem:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(229, 177, 177, 0.2);
          border-color: var(--color-dusty-rose);
        }

        .img-frame-fem {
          height: 400px;
          overflow: hidden;
          position: relative;
        }

        .img-frame-fem img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .treatment-card-fem:hover .img-frame-fem img {
          transform: scale(1.1);
        }

        .cat-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(5px);
          padding: 8px 15px;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--color-dusty-rose);
          border-radius: 5px;
        }

        .info-fem {
          padding: 3rem 2.5rem;
          text-align: center;
        }

        .info-fem h3 {
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
          color: var(--color-graphite);
        }

        .info-fem p {
          font-size: 1rem;
          color: var(--color-text);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .btn-text-rose {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 700;
          color: var(--color-dusty-rose);
        }

        @media (max-width: 992px) {
          .treatments-grid-fem { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default TreatmentsClean;
