import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Segurança Médica',
      description: 'Protocolos rigorosos e equipe altamente qualificada para garantir sua saúde em primeiro lugar.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Resultados Naturais',
      description: 'Nossa filosofia preserva sua essência, realçando sua beleza única sem exageros.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Tecnologia de Ponta',
      description: 'Equipamentos de última geração certificados pelas maiores autoridades mundiais.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Atendimento Boutique',
      description: 'Uma jornada exclusiva e personalizada, do primeiro contato ao acompanhamento pós-procedimento.'
    }
  ];

  return (
    <section id="conceito" className="philosophy section-padding">
      <div className="container">
        <div className="section-title">
          <span>O Conceito</span>
          <h2>A Ciência da <span className="luxury-text-gradient">Sofisticação</span></h2>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-image-container">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
              alt="Ambiente da Clínica"
              className="philosophy-image"
            />
            <div className="experience-box">
              <h3>Experiência Única</h3>
              <p>Mais que uma clínica, um refúgio de bem-estar e luxo.</p>
            </div>
          </div>

          <div className="philosophy-content">
            <p className="description-lead">
              Acreditamos que a verdadeira beleza reside no equilíbrio. Nossa abordagem combina
              o rigor da medicina estética avançada com um olhar artístico refinado,
              proporcionando uma transformação que é notável, mas sempre natural.
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="value-item"
                >
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .section-padding {
          padding: var(--section-padding);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .philosophy-image-container {
          position: relative;
        }

        .philosophy-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 5px;
        }

        .experience-box {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background-color: var(--color-graphite);
          color: var(--color-off-white);
          padding: 3rem;
          max-width: 300px;
          border-radius: 2px;
        }

        .experience-box h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-gold);
        }

        .experience-box p {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .description-lead {
          font-size: 1.4rem;
          color: var(--color-graphite);
          margin-bottom: 4rem;
          font-family: var(--font-serif);
          line-height: 1.4;
          border-left: 3px solid var(--color-gold);
          padding-left: 2rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .value-item h4 {
          font-size: 1.2rem;
          margin: 1rem 0 0.5rem;
          color: var(--color-graphite);
        }

        .value-item p {
          font-size: 0.95rem;
          color: var(--color-warm-gray);
        }

        .value-icon {
          color: var(--color-gold);
        }

        @media (max-width: 992px) {
          .philosophy-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .experience-box {
            position: static;
            max-width: 100%;
            margin-top: 2rem;
          }

          .philosophy-image {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
