import FlowDiagram from "./FlowDiagram";
import GameOptimizerCapture from "./GameOptimizerPromo";
import "./Proyectos.css";

const platformRequestPaths = [
  { id: "frontend-api", d: "M6 0 V54", start: { x: 6, y: 0 }, duration: 2300, offset: 350 },
];

const platformPersistPaths = [
  { id: "api-database", d: "M6 0 V54", start: { x: 6, y: 0 }, duration: 2500, offset: 1450 },
];

function ProjectBadge() {
  return (
    <span className="project-badge">
      <i aria-hidden="true" /> Built by Oxman IT
    </span>
  );
}

function EcommerceVisual() {
  return (
    <figure className="ecommerce-capture">
      <img
        src="/images/oxman-ecommerce-catalogo.png"
        alt="Catálogo de demostración de Oxman Ecommerce con búsqueda, productos, precios por cantidad y existencias"
        width="1897"
        height="890"
        loading="lazy"
        decoding="async"
      />
      <figcaption>Demo local con productos y datos ficticios.</figcaption>
    </figure>
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
          <FlowDiagram
            className="platform-connector__flow"
            viewBox="0 0 12 54"
            paths={platformRequestPaths}
          />
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
          <FlowDiagram
            className="platform-connector__flow"
            viewBox="0 0 12 54"
            paths={platformPersistPaths}
          />
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
      {technologies.length > 0 && (
        <div className="project-details__technologies" aria-label="Tecnologías">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      )}
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
          <article
            id="oxman-ecommerce"
            className="project-showcase project-showcase--ecommerce"
            tabIndex={-1}
          >
            <ProjectDetails
              number="01"
              title="Oxman Ecommerce"
              category="Demo e-commerce"
              description="Demo local de catálogo con búsqueda y categorías, precios por cantidad, existencias y carro de compras."
              technologies={[]}
              capabilities={[
                "Catálogo",
                "Búsqueda",
                "Categorías",
                "Precios por cantidad",
                "Existencias",
                "Carro de compras",
              ]}
            />
            <div className="project-showcase__visual">
              <EcommerceVisual />
            </div>
          </article>

          <article
            id="oxman-game-optimizer"
            className="project-showcase project-showcase--optimizer"
            tabIndex={-1}
          >
            <ProjectDetails
              number="02"
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
              <GameOptimizerCapture />
            </div>
          </article>

          <article
            id="oxman-it-platform"
            className="project-showcase project-showcase--platform"
            tabIndex={-1}
          >
            <div className="project-showcase__visual">
              <PlatformVisual />
            </div>
            <ProjectDetails
              number="03"
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
