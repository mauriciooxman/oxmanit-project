const nodes = [
  { label: "Software", className: "hero-visual__node hero-visual__node--software" },
  { label: "Automation", className: "hero-visual__node hero-visual__node--automation" },
  { label: "IT Solutions", className: "hero-visual__node hero-visual__node--solutions" },
];

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span aria-hidden="true" />
            Software · Automatización · Soluciones IT
          </div>

          <h1>
            Construimos tecnología
            <span> que mueve tu negocio.</span>
          </h1>

          <p className="hero__description">
            Desarrollamos software, automatizamos procesos y creamos soluciones
            tecnológicas diseñadas para hacer crecer tu negocio.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contacto">
              Iniciar proyecto <span aria-hidden="true">→</span>
            </a>
            <a className="button button--secondary" href="#servicios">
              Explorar servicios
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Software, automatización y soluciones IT conectadas por Oxman IT">
          <div className="hero-visual__grid" aria-hidden="true" />
          <div className="hero-visual__status"><span /> Sistema operativo</div>

          <svg className="hero-visual__connections" viewBox="0 0 520 430" aria-hidden="true">
            <path d="M260 210 L260 95" />
            <path d="M260 210 L120 320" />
            <path d="M260 210 L400 320" />
            <circle cx="260" cy="152" r="3" />
            <circle cx="190" cy="265" r="3" />
            <circle cx="330" cy="265" r="3" />
          </svg>

          <div className="hero-visual__core">
            <span className="hero-visual__core-label">Core</span>
            <strong>Oxman IT</strong>
            <small>Build · Connect · Scale</small>
          </div>

          {nodes.map((node) => (
            <div className={node.className} key={node.label}>
              <span aria-hidden="true" />
              {node.label}
            </div>
          ))}

          <div className="hero-visual__stack" aria-hidden="true">
            <span>React</span><span>APIs</span><span>Java</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
