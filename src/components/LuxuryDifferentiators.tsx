import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Award } from 'lucide-react';

const LuxuryDifferentiators: React.FC = () => {
    const diffs = [
        {
            icon: <Shield size={32} strokeWidth={1} />,
            title: 'Segurança Médica',
            text: 'Protocolos hospitalares dentro de um ambiente boutique exclusivo.'
        },
        {
            icon: <Sparkles size={32} strokeWidth={1} />,
            title: 'Curadoria Artística',
            text: 'Cada plano é desenhado como uma obra de arte personalizada.'
        },
        {
            icon: <Zap size={32} strokeWidth={1} />,
            title: 'Vanguarda Tecnológica',
            text: 'Equipamentos de última geração certificados mundialmente.'
        },
        {
            icon: <Award size={32} strokeWidth={1} />,
            title: 'Staff de Elite',
            text: 'Especialistas em constante atualização nos maiores centros globais.'
        }
    ];

    return (
        <section className="luxury-diffs">
            <div className="container">
                <div className="luxury-diff-grid">
                    {diffs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="luxury-diff-item"
                        >
                            <div className="icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .luxury-diffs {
          padding: 100px 0;
          background-color: var(--color- black);
          border-top: 1px solid rgba(214, 194, 176, 0.1);
          border-bottom: 1px solid rgba(214, 194, 176, 0.1);
        }

        .luxury-diff-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4rem;
        }

        .luxury-diff-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon-wrapper {
          color: var(--color-nude);
          margin-bottom: 2rem;
          transition: var(--transition-ultra);
        }

        .luxury-diff-item:hover .icon-wrapper {
          transform: scale(1.1);
          color: var(--color-gold-static);
        }

        .luxury-diff-item h3 {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--color-white-warm);
          margin-bottom: 1rem;
        }

        .luxury-diff-item p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          max-width: 250px;
        }

        @media (max-width: 992px) {
          .luxury-diff-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .luxury-diff-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default LuxuryDifferentiators;
