import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartPulse, UserCheck } from 'lucide-react';

const WhyUs: React.FC = () => {
    const items = [
        { icon: <Award size={32} />, title: 'Alta Especialização', text: 'Equipe médica com sólida formação acadêmica e técnica.' },
        { icon: <ShieldCheck size={32} />, title: 'Segurança Total', text: 'Protocolos rigorosos e equipamentos certificados.' },
        { icon: <HeartPulse size={32} />, title: 'Resultados Naturais', text: 'Preservamos sua essência com harmonia e equilíbrio.' },
        { icon: <UserCheck size={32} />, title: 'Atendimento Individual', text: 'Planos de tratamento 100% personalizados.' }
    ];

    return (
        <section className="why-us">
            <div className="container">
                <div className="why-grid">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="why-item"
                        >
                            <div className="icon-box">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        .why-us {
          padding: 80px 0;
          background: var(--color-nude-light);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }
        .why-item {
          text-align: center;
        }
        .icon-box {
          color: var(--color-gold);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .why-item h4 {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-bottom: 0.8rem;
          color: var(--color-graphite);
        }
        .why-item p {
          font-size: 0.9rem;
          color: var(--color-text);
        }
        @media (max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
};

export default WhyUs;
