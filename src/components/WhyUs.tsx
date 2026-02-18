import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Heart } from 'lucide-react';

const WhyUsVibrant: React.FC = () => {
  const items = [
    {
      icon: <Award size={40} />,
      title: 'Excelência Médica',
      text: 'Membros das principais sociedades brasileiras e internacionais de estética.'
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Segurança Máxima',
      text: 'Rigor hospitalar e insumos de primeira linha certificados pela ANVISA.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Alta Tecnologia',
      text: 'Os lasers e tecnologias mais avançados do mercado mundial.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Cuidado Humano',
      text: 'Acompanhamento pós-procedimento dedicado e personalizado.'
    }
  ];

  return (
    <section className="why-us-vibrant">
      <div className="container">
        <div className="why-grid-v">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="why-item-v"
            >
              <div className="icon-box-v">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .why-us-vibrant {
          padding: 100px 0;
          background: var(--color-dark);
          color: white;
        }
        .why-grid-v {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4rem;
        }
        .why-item-v {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        .why-item-v:hover {
          background: rgba(189, 30, 81, 0.1);
          border-color: var(--color-primary);
          transform: translateY(-10px);
        }
        .icon-box-v {
          color: var(--color-primary);
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
        .why-item-v h4 {
          color: white;
          font-family: var(--font-sans);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }
        .why-item-v p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        @media (max-width: 992px) {
          .why-grid-v { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .why-grid-v { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default WhyUsVibrant;
