import { Award, Laptop, Users, Coffee, MapPin, Clock } from 'lucide-react';

const differentiators = [
  {
    icon: <Laptop size={32} />,
    title: 'Tecnologia Estéril',
    description: 'Equipamentos de última geração com manutenção preventiva rigorosa.'
  },
  {
    icon: <Award size={32} />,
    title: 'Protocolos de Luxo',
    description: 'Tratamentos baseados nas tendências mais sofisticadas da Europa e EUA.'
  },
  {
    icon: <Users size={32} />,
    title: 'Staff Especializado',
    description: 'Profissionais em constante atualização nos maiores congressos mundiais.'
  },
  {
    icon: <Coffee size={32} />,
    title: 'Welcome Experience',
    description: 'Ambiente planejado para oferecer conforto absoluto e privacidade.'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Localização Nobre',
    description: 'Acesso fácil em endereço privilegiado com estacionamento privativo.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Atendimento Pontual',
    description: 'Respeito total à sua agenda com horários rigorosamente cumpridos.'
  }
];

const Differentiators: React.FC = () => {
  return (
    <section className="differentiators section-padding">
      <div className="container">
        <div className="section-title">
          <span>Excelência em Cada Detalhe</span>
          <h2>Diferenciais de <span className="luxury-text-gradient">Alto Padrão</span></h2>
        </div>

        <div className="diff-grid">
          {differentiators.map((diff, index) => (
            <div key={index} className="diff-item">
              <div className="diff-icon-box">{diff.icon}</div>
              <div className="diff-text">
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .differentiators {
          background-color: var(--color-off-white);
        }

        .diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem 3rem;
        }

        .diff-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .diff-icon-box {
          background-color: var(--color-white);
          padding: 1.2rem;
          color: var(--color-gold);
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          flex-shrink: 0;
        }

        .diff-text h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--color-graphite);
        }

        .diff-text p {
          font-size: 0.95rem;
          color: var(--color-warm-gray);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .diff-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .diff-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Differentiators;
