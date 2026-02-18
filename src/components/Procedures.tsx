import { motion } from 'framer-motion';

const procedures = [
  {
    title: 'Harmonização Facial',
    category: 'Injetáveis',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    description: 'Equilíbrio e proporção facial com resultados naturais e elegantes.'
  },
  {
    title: 'Toxina Botulínica',
    category: 'Rejuvenescimento',
    image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop',
    description: 'Prevenção e suavização de linhas de expressão com precisão médica.'
  },
  {
    title: 'Bioestimuladores',
    category: 'Colágeno',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2070&auto=format&fit=crop',
    description: 'Estímulo natural da firmeza da pele para um lifting progressivo.'
  },
  {
    title: 'Lifting Facial',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfac44221d?q=80&w=2070&auto=format&fit=crop',
    description: 'Ultrassom microfocado de última geração para contorno impecável.'
  },
  {
    title: 'Lipo de Papada',
    category: 'Contorno',
    image: 'https://images.unsplash.com/photo-1628178148526-b338a39ceda5?q=80&w=2070&auto=format&fit=crop',
    description: 'Definição do ângulo da mandíbula com tecnologias minimamente invasivas.'
  },
  {
    title: 'Skincare Clínico',
    category: 'Protocolos',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a13?q=80&w=2070&auto=format&fit=crop',
    description: 'Tratamentos profundos para textura, brilho e saúde da derme.'
  }
];

const Procedures: React.FC = () => {
  return (
    <section id="procedimentos" className="procedures section-padding">
      <div className="container">
        <div className="section-title">
          <span>Excelência em Tratamentos</span>
          <h2>Protocolos <span className="luxury-text-gradient">Exclusivos</span></h2>
        </div>

        <div className="procedures-grid">
          {procedures.map((proc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="procedure-card"
            >
              <div className="procedure-image-wrapper">
                <img src={proc.image} alt={proc.title} className="procedure-image" />
                <div className="procedure-overlay">
                  <span className="procedure-category">{proc.category}</span>
                  <a href="#" className="procedure-link">Saiba Mais</a>
                </div>
              </div>
              <div className="procedure-info">
                <h3>{proc.title}</h3>
                <p>{proc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="procedures-footer">
          <button className="btn-premium">Ver Todos os Procedimentos</button>
        </div>
      </div>

      <style>{`
        .procedures {
          background-color: var(--color-white);
        }

        .procedures-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .procedure-card {
          display: flex;
          flex-direction: column;
          group: hover;
        }

        .procedure-image-wrapper {
          position: relative;
          height: 400px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .procedure-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .procedure-card:hover .procedure-image {
          transform: scale(1.1);
        }

        .procedure-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.4);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .procedure-card:hover .procedure-overlay {
          opacity: 1;
        }

        .procedure-category {
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        .procedure-link {
          color: white;
          border-bottom: 1px solid white;
          padding-bottom: 5px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .procedure-info h3 {
          font-size: 1.6rem;
          margin-bottom: 0.8rem;
          color: var(--color-graphite);
        }

        .procedure-info p {
          font-size: 0.95rem;
          color: var(--color-warm-gray);
          line-height: 1.5;
        }

        .procedures-footer {
          margin-top: 5rem;
          text-align: center;
        }

        @media (max-width: 992px) {
          .procedures-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .procedures-grid {
            grid-template-columns: 1fr;
          }
          .procedure-image-wrapper {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Procedures;
