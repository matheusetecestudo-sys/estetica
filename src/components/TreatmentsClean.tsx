import { motion } from 'framer-motion';

const treatments = [
  {
    title: 'Harmonização Facial Premium',
    category: 'MÁXIMO REJUVENESCIMENTO',
    desc: 'Arquitetura facial avançada com MD Codes™ para um lifting estrutural imediato e natural.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Protocolo Fox Eyes',
    category: 'OLHAR SEDUTOR',
    desc: 'Técnica exclusiva de elevação do supercílio para um olhar descansado, aberto e marcante.',
    image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Sculpt & Glow Lips',
    category: 'HIDRATAÇÃO & VOLUME',
    desc: 'Volume russo e definição de contorno para lábios irresistíveis e hidratados 24h por dia.',
    image: 'https://images.unsplash.com/photo-1628178148526-b338a39ceda5?q=80&w=2070&auto=format&fit=crop'
  }
];

const TreatmentsVibrant: React.FC = () => {
  return (
    <section id="procedimentos" className="treatments-vibrant">
      <div className="container">
        <div className="section-header">
          <span className="badge">PORTFÓLIO DE PROCEDIMENTOS</span>
          <h2>A Radiância que <span className="gradient-text-v">Você Merece.</span></h2>
          <div className="vibrant-line"></div>
        </div>

        <div className="treatments-grid-v">
          {treatments.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="treatment-card-v"
            >
              <div className="card-image-v">
                <img src={t.image} alt={t.title} />
                <div className="overlay-v">
                  <button className="btn-vibrant-small">Saiba Tudo</button>
                </div>
                <div className="cat-badge-v">{t.category}</div>
              </div>
              <div className="card-info-v">
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .treatments-vibrant {
          padding: var(--section-padding);
          background: #fff;
        }

        .gradient-text-v {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        .treatments-grid-v {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
        }

        .treatment-card-v {
          position: relative;
          background: #fff;
          transition: var(--transition);
        }

        .card-image-v {
          position: relative;
          height: 550px;
          overflow: hidden;
          background: #000;
          border-radius: 4px;
        }

        .card-image-v img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s ease;
          opacity: 0.95;
        }

        .treatment-card-v:hover .card-image-v img {
          transform: scale(1.1);
          opacity: 0.7;
        }

        .overlay-v {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
          background: rgba(189, 30, 81, 0.2);
        }

        .treatment-card-v:hover .overlay-v {
          opacity: 1;
        }

        .btn-vibrant-small {
          padding: 1rem 2rem;
          background: white;
          color: var(--color-primary);
          border: none;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          cursor: pointer;
        }

        .cat-badge-v {
          position: absolute;
          bottom: 30px;
          left: 30px;
          background: var(--color-primary);
          color: white;
          padding: 8px 15px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          border-radius: 2px;
        }

        .card-info-v {
          padding: 2.5rem 0;
        }

        .card-info-v h3 {
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
        }

        .card-info-v p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-text-light);
        }

        @media (max-width: 992px) {
          .treatments-grid-v { grid-template-columns: 1fr; }
          .card-image-v { height: 450px; }
        }
      `}</style>
    </section>
  );
};

export default TreatmentsVibrant;
