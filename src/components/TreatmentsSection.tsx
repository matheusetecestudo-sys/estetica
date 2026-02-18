import { motion } from 'framer-motion';

const treatments = [
    {
        title: 'Harmonização Facial Reliana',
        desc: 'Arquitetura facial avançada com MD Codes™ para um lifting estrutural imediato e reposicionamento de tecidos.',
        details: ['Preenchimento Full Face', 'MD Codes', 'Bioestimuladores'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Protocolos de Rejuvenescimento',
        desc: 'Tratamentos integrados de toxina botulínica e laser para uma pele descansada, iluminada e sem rugas.',
        details: ['Botox Preventivo', 'Laser Fracionado', 'Peelings Químicos'],
        image: 'https://images.unsplash.com/photo-1516549221187-fb9be309711c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Escultura Labial e de Contorno',
        desc: 'Volume russo e definição de contornos faciais com foco em equilíbrio e perfeição estética.',
        details: ['Preenchimento Labial', 'Mandíbula e Mentos', 'Rinomodelação'],
        image: 'https://images.unsplash.com/photo-1628178148526-b338a39ceda5?q=80&w=2070&auto=format&fit=crop'
    }
];

const TreatmentsSection: React.FC = () => {
    return (
        <section id="tratamentos" className="treat-inst">
            <div className="container">
                <div className="section-title-inst">
                    <span className="tag">PORTFÓLIO DE PROCEDIMENTOS</span>
                    <h2>A Ciência da <span className="inst-highlight">Beleza Real.</span></h2>
                    <div className="divider-luxe"></div>
                </div>

                <div className="treat-inst-list">
                    {treatments.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="treat-inst-card"
                        >
                            <div className="treat-image">
                                <img src={t.image} alt={t.title} />
                            </div>
                            <div className="treat-info">
                                <h3>{t.title}</h3>
                                <p>{t.desc}</p>
                                <div className="treat-details">
                                    {t.details.map((d, i) => (
                                        <span key={i} className="detail-tag">{d}</span>
                                    ))}
                                </div>
                                <a href="https://wa.me/5511999999999" target="_blank" className="btn-whatsapp-inst">RESERVAR PROTOCOLO</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .treat-inst {
          padding: var(--section-padding);
          background: var(--color-bg-light);
        }

        .treat-inst-list {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .treat-inst-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: white;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.05);
        }

        .treat-inst-card:nth-child(even) {
          direction: rtl;
        }

        .treat-inst-card:nth-child(even) .treat-info {
          direction: ltr;
        }

        .treat-image img {
          width: 100%;
          height: 100%;
          min-height: 600px;
          object-fit: cover;
        }

        .treat-info {
          padding: 6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .treat-info h3 {
          font-size: 2.8rem;
          margin-bottom: 2rem;
          color: var(--color-dark);
        }

        .treat-info p {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .treat-details {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 4rem;
        }

        .detail-tag {
          padding: 10px 20px;
          background: var(--color-bg-light);
          color: var(--color-primary);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: 2px;
        }

        @media (max-width: 992px) {
          .treat-inst-card { grid-template-columns: 1fr; direction: ltr !important; }
          .treat-info { padding: 3rem; }
          .treat-image img { min-height: 400px; }
        }
      `}</style>
        </section>
    );
};

export default TreatmentsSection;
