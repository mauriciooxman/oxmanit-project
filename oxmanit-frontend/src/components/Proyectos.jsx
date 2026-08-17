import "./Proyectos.css";

function ProjectBadge() {
  return (
    <span className="project-badge">
      <i aria-hidden="true" /> Built by Oxman IT
    </span>
  );
}

function OptimizerVisual() {
  return (
    <div
      className="project-window optimizer-window"
      aria-label="Vista conceptual de Oxman Game Optimizer"
    >
      <div className="project-window__bar">
        <div className="project-window__controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>OXMAN GAME OPTIMIZER</span>
        <small>
          <i /> System active
        </small>
      </div>
      <div className="optimizer-window__layout">
        <aside aria-hidden="true">
          <strong>OX</strong>
          <span className="is-active" />
          <span />
          <span />
          <span />
        </aside>
        <div className="optimizer-window__dashboard">
          <header>
            <div>
              <small>Resumen del sistema</small>
              <strong>Rendimiento</strong>
            </div>
            <span>Live monitoring</span>
          </header>
          <div className="optimizer-metrics">
            <div className="optimizer-metric">
              <div>
                <span>CPU</span>
                <strong>
                  42<small>%</small>
                </strong>
              </div>
              <div className="optimizer-ring optimizer-ring--cpu">
                <i />
              </div>
              <footer>
                <span>Usage</span>
                <span>3.8 GHz</span>
              </footer>
            </div>
            <div className="optimizer-metric">
              <div>
                <span>Memory</span>
                <strong>
                  61<small>%</small>
                </strong>
              </div>
              <div className="optimizer-ring optimizer-ring--memory">
                <i />
              </div>
              <footer>
                <span>9.8 GB</span>
                <span>16 GB</span>
              </footer>
            </div>
          </div>
          <div className="optimizer-chart">
            <div>
              <span>System activity</span>
              <small>Last 60 seconds</small>
            </div>
            <div className="optimizer-chart__bars" aria-hidden="true">
              {[
                28, 42, 35, 58, 45, 72, 52, 66, 43, 61, 76, 55, 70, 48, 63, 82,
              ].map((height, index) => (
                <i key={index} style={{ "--bar-height": `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div
      className="project-window platform-window"
      aria-label="Arquitectura conceptual de Oxman IT Platform"
    >
      <div className="project-window__bar">
        <div className="project-window__controls" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>OXMAN IT / ARCHITECTURE</span>
        <small>
          <i /> Connected
        </small>
      </div>
      <div className="platform-flow">
        <div className="platform-flow__grid" aria-hidden="true" />
        <div className="platform-node platform-node--frontend">
          <small>01 / Interface</small>
          <strong>Frontend</strong>
          <span>React</span>
        </div>
        <div
          className="platform-connector platform-connector--one"
          aria-hidden="true"
        >
          <span>REQUEST</span>
          <i />
        </div>
        <div className="platform-node platform-node--api">
          <small>02 / Services</small>
          <strong>REST API</strong>
          <span>Spring Boot</span>
        </div>
        <div
          className="platform-connector platform-connector--two"
          aria-hidden="true"
        >
          <span>PERSIST</span>
          <i />
        </div>
        <div className="platform-node platform-node--database">
          <small>03 / Storage</small>
          <strong>Database</strong>
          <span>MySQL</span>
        </div>
        <div className="platform-flow__response" aria-hidden="true">
          <i /> Response / JSON
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({
  number,
  title,
  category,
  description,
  technologies,
  capabilities,
}) {
  return (
    <div className="project-details">
      <span className="project-details__number">{number}</span>
      <span className="project-details__category">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-details__technologies" aria-label="Tecnologías">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-details__capabilities">
        <small>Capacidades</small>
        <ul>
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
      <ProjectBadge />
    </div>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" className="projects-section">
      <div className="projects-section__inner">
        <header className="projects-header">
          <span className="projects-header__eyebrow">
            <i /> 03 / Selected work
          </span>
          <div>
            <h2>Tecnología real para el mundo real.</h2>
            <p>
              Productos propios donde ingeniería, automatización y experiencia
              de usuario se convierten en software funcional.
            </p>
          </div>
        </header>

        <div className="projects-list">
          <article className="project-showcase project-showcase--optimizer">
            <ProjectDetails
              number="01"
              title="Oxman Game Optimizer"
              category="Aplicación de escritorio"
              description="Aplicación de escritorio enfocada en visualizar el estado del hardware y facilitar el monitoreo del rendimiento del sistema."
              technologies={["Java", "JavaFX", "OSHI"]}
              capabilities={[
                "Monitoreo de hardware",
                "Métricas de CPU",
                "Métricas de memoria",
                "Optimización del sistema",
              ]}
            />
            <div className="project-showcase__visual">
              <OptimizerVisual />
            </div>
          </article>

          <article className="project-showcase project-showcase--platform">
            <div className="project-showcase__visual">
              <PlatformVisual />
            </div>
            <ProjectDetails
              number="02"
              title="Oxman IT Platform"
              category="Plataforma full stack"
              description="Plataforma web que conecta la presencia digital de Oxman IT con su infraestructura de servicios y solicitudes de clientes."
              technologies={["React", "Spring Boot", "MySQL"]}
              capabilities={[
                "Frontend moderno",
                "REST API",
                "Solicitudes de clientes",
                "Persistencia de datos",
              ]}
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
