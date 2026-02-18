import { motion } from 'framer-motion';

const treatments = [
    {
        title: 'Harmonização Facial',
        desc: 'Arquitetura facial personalizada para realçar seus traços naturais com equilíbrio.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Toxina Botulínica',
        desc: 'O ápice da precisão médica para um olhar descansado e juventude preservada.',
        image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Bioestimuladores',
        desc: 'Despertando a regeneração natural do colágeno para firmeza e textura impecáveis.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Laser & Tecnologias',
        desc: 'Fótons de alta precisão para correção de imperfeições e renovação dérmica profunda.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Preenchimento Labial',
        desc: 'Volume e contorno desenhados com arte para lábios que expressam sofisticação.',
        image: 'https://images.unsplash.com/photo-1628178148526-b338a39ceda5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Protocolos Exclusivos',
        desc: 'Combinações secretas e autorais para quem exige resultados extraordinários.',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a13?q=80&w=2070&auto=format&fit=crop'
    }
];

const EditorialServices: React.FC = () => {
    return (
        <section id="procedimentos" className="services">
            <div className="container">
                <div className="section-title">
                    <span className="tagline">PORTFÓLIO DE EXCELÊNCIA</span>
                    <h2>Protocolos de <span className="gold-text">Alto Ticket</span></h2>
                </div>

                <div className="services-editorial-grid">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="service-item"
                        >
                            <div className="service-image-container">
                                <img src={item.image} alt={item.title} />
                                <div className="service-overlay">
                                    <button className="btn-luxury secondary">Saiba Mais</button>
                                </div>
                            </div>
                            <div className="service-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .services {
          padding: var(--section-padding);
          background-color: var(--color- black);
        }

        .services-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6rem 3rem;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-image-container {
          position: relative;
          height: 500px;
          width: 100%;
          overflow: hidden;
          background-color: var(--color-gray-deep);
        }

        .service-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-ultra);
          filter: grayscale(20%);
        }

        .service-item:hover .service-image-container img {
          transform: scale(1.05);
          filter: grayscale(0%);
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 11, 13, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-ultra);
        }

        .service-item:hover .service-overlay {
          opacity: 1;
        }

        .service-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-white-warm);
        }

        .service-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }

        @media (max-width: 992px) {
          .services-editorial-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-editorial-grid {
            grid-template-columns: 1fr;
          }
          .service-image-container {
            height: 400px;
          }
        }
      `}</style>
        </section>
    );
};

export default EditorialServices;
