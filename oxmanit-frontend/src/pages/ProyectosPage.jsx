import Proyectos from "../components/Proyectos";

function ProyectosPage() {
  return (
    <main className="projects-page">
      <header className="projects-page__hero">
        <span>Productos de Oxman IT</span>
        <h1 id="projects-page-title" tabIndex={-1}>Proyectos</h1>
        <p>
          Soluciones propias donde desarrollo, experiencia y criterio técnico
          se convierten en productos con un propósito claro.
        </p>
        <a className="button button--secondary" href="#top">Volver al inicio</a>
      </header>
      <Proyectos />
    </main>
  );
}

export default ProyectosPage;
