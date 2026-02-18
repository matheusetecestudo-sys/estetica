import { motion } from 'framer-motion';

const results = [
  {
    title: 'Harmonização de Perfil',
    desc: 'Equilíbrio e definição da linha da mandíbula com ácido hialurônico.',
    before: 'https://images.unsplash.com/photo-1570172033936-12c1b126d4d2?q=80&w=2070&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  }
];

const ResultsVibrant: React.FC = () => {
  return (
    <section id="resultados" className="results-vibrant">
      <div className="container">
        <div className="section-header">
          <span className="badge">GALERIA DE TRANSFORMAÇÕES</span>
          <h2>A Ciência da <span className="gradient-text-v">Mudança.</span></h2>
          <div className="vibrant-line"></div>
        </div>

        <div className="res-main-v">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="res-item-v"
            >
              <div className="comparison-v">
                <div className="img-box-v">
                  <img src={r.before} alt="Antes" />
                  <div className="tag-v">ANTES</div>
                </div>
                <div className="img-box-v">
                  <img src={r.after} alt="Depois" />
                  <div className="tag-v gold">DEPOIS</div>
                </div>
              </div>
              <div className="res-info-v">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <div className="cta-results">
                  <button className="btn-vibrant">Quero este resultado</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .results-vibrant {
          padding: var(--section-padding);
          background-color: var(--color-bg-soft);
        }

        .results-vibrant .gradient-text-v {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-gold) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: italic;
        }

        .res-main-v {
          max-width: 1100px;
          margin: 0 auto;
        }

        .comparison-v {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .img-box-v {
          position: relative;
          height: 650px;
          overflow: hidden;
          box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
        }

        .img-box-v img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tag-v {
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--color-dark);
          color: white;
          padding: 8px 18px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .tag-v.gold {
          background: var(--color-primary);
        }

        .res-info-v {
          text-align: center;
        }

        .res-info-v h3 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .res-info-v p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
        }

        .cta-results {
            margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .comparison-v { grid-template-columns: 1fr; }
          .img-box-v { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default ResultsVibrant;
