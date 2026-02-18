import { motion } from 'framer-motion';

const BrandPositioning: React.FC = () => {
    return (
        <section id="conceito" className="brand-positioning">
            <div className="container positioning-grid">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="positioning-content"
                >
                    <span className="tagline">MANIFESTO EXCLUSIVO</span>
                    <h2>Não realizamos procedimentos. Criamos versões <span className="gold-text">extraordinárias</span> de você.</h2>
                    <p>
                        Na interseção entre o rigor médico e a sensibilidade artística, desenvolvemos protocolos
                        que transcendem a estética comum. Cada face é uma tela única, e cada plano de
                        tratamento é uma obra personalizada para realçar sua essência, nunca para alterá-la.
                    </p>

                    <div className="founder-block">
                        <div className="founder-info">
                            <h3>Dra. Isabella Premium</h3>
                            <span className="founder-title">Diretora Clínica | CRM 12345</span>
                            <p className="founder-bio">
                                Especialista em Harmonização Facial Avançada com formação nas maiores capitais
                                da estética mundial. Sua filosofia foca em resultados imperceptíveis aos olhos,
                                mas notáveis na autoconfiança.
                            </p>
                        </div>
                        <div className="signature">
                            <span className="sign-text">Isabella Premium</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="positioning-image"
                >
                    <div className="image-frame">
                        <img
                            src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
                            alt="Dra. Isabella Premium"
                        />
                        <div className="frame-border"></div>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .brand-positioning {
          padding: var(--section-padding);
          background-color: var(--color-black);
          position: relative;
          overflow: hidden;
        }

        .positioning-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 8rem;
          align-items: center;
        }

        .positioning-content .tagline {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          letter-spacing: 0.5em;
          color: var(--color-nude);
          margin-bottom: 2rem;
          display: block;
        }

        .positioning-content h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 3rem;
          line-height: 1.2;
        }

        .positioning-content p {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 4rem;
          max-width: 650px;
        }

        .founder-block {
          border-top: 1px solid rgba(214, 194, 176, 0.1);
          padding-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .founder-info h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--color-white-warm);
        }

        .founder-title {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--color- gold-static);
          display: block;
          margin-bottom: 1.5rem;
        }

        .founder-bio {
          font-size: 1rem !important;
          max-width: 500px !important;
        }

        .signature {
          margin-top: 1rem;
        }

        .sign-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 2.5rem;
          color: var(--color-nude);
          opacity: 0.8;
        }

        .positioning-image {
          position: relative;
        }

        .image-frame {
          position: relative;
          width: 100%;
          height: 700px;
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 1;
          filter: grayscale(30%);
        }

        .frame-border {
          position: absolute;
          top: 30px;
          right: -30px;
          bottom: -30px;
          left: 30px;
          border: 1px solid var(--color-gold-static);
          z-index: 0;
        }

        @media (max-width: 992px) {
          .positioning-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }
          .image-frame {
            height: 500px;
          }
          .frame-border {
            display: none;
          }
        }
      `}</style>
        </section>
    );
};

export default BrandPositioning;
