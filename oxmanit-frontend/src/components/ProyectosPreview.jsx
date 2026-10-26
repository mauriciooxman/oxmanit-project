import "./ProyectosPreview.css";

const projects = [
  {
    number: "01",
    title: "Oxman Ecommerce",
    description: "Demo de catálogo con búsqueda, precios por cantidad, existencias y carro de compras.",
  },
  {
    number: "02",
    title: "Oxman Game Optimizer",
    description: "Aplicación de escritorio para visualizar hardware y monitorear el sistema.",
  },
  {
    number: "03",
    title: "Oxman IT Platform",
    description: "Plataforma que conecta la presencia digital con solicitudes de clientes.",
  },
];

function ProyectosPreview() {
  return (
    <section className="projects-preview" aria-labelledby="projects-preview-title">
      <div className="container projects-preview__inner">
        <header className="projects-preview__header">
          <div>
            <span><i /> 03 / Proyectos</span>
            <h2 id="projects-preview-title">Productos creados para resolver.</h2>
          </div>
          <a className="button button--primary" href="#proyectos">
            Ver todos los proyectos <span aria-hidden="true">→</span>
          </a>
        </header>

        <div className="projects-preview__grid">
          {projects.map((project) => (
            <article className="projects-preview__card" key={project.title}>
              <span>{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProyectosPreview;
