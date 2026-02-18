
const team = [
  {
    name: "Dr. Matheus Estéticus",
    role: "Diretor Médico & Especialista em Injetáveis",
    crm: "CRM 12345 / RQE 6789",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop",
    bio: "Pós-graduado em Medicina Estética Avançada e palestrante em congressos nacionais."
  },
  {
    name: "Dra. Isabella Premium",
    role: "Dermatologista & Laser Expert",
    crm: "CRM 54321 / RQE 9876",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2000&auto=format&fit=crop",
    bio: "Doutora em Ciências Médicas pela USP, especialista em tecnologias de rejuvenescimento."
  }
];

const Team: React.FC = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="section-title">
          <span>Corpo Clínico</span>
          <h2>Especialistas de <span className="luxury-text-gradient">Referência</span></h2>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <span className="team-crm">{member.crm}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team {
          background-color: var(--color-off-white);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .team-image-wrapper {
          width: 350px;
          height: 450px;
          overflow: hidden;
          margin-bottom: 2rem;
          filter: grayscale(100%);
          transition: var(--transition-smooth);
        }

        .team-card:hover .team-image-wrapper {
          filter: grayscale(0%);
        }

        .team-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-info h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--color-graphite);
        }

        .team-role {
          display: block;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .team-crm {
          display: block;
          color: var(--color-warm-gray);
          font-size: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .team-info p {
          font-size: 1rem;
          color: var(--color-warm-gray);
          max-width: 300px;
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .team-image-wrapper {
            width: 100%;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
