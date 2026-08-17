import "./Somos.css";

const principles = [
  {
    number: "01",
    title: "Claridad",
    description: "Entender el problema antes de escribir código.",
  },
  {
    number: "02",
    title: "Eficiencia",
    description: "Automatizar lo repetitivo y simplificar lo complejo.",
  },
  {
    number: "03",
    title: "Evolución",
    description: "Construir soluciones que puedan mantenerse y crecer.",
  },
];

const process = [
  {
    number: "01",
    label: "Explorar",
    title: "Descubrimiento",
    description:
      "Entendemos el problema, las necesidades y el contexto antes de definir una solución.",
  },
  {
    number: "02",
    label: "Diseñar",
    title: "Diseño",
    description:
      "Definimos la arquitectura, la experiencia y el enfoque técnico antes de construir.",
  },
  {
    number: "03",
    label: "Construir",
    title: "Desarrollo",
    description:
      "Construimos, integramos y validamos cada parte de la solución.",
  },
  {
    number: "04",
    label: "Entregar",
    title: "Entrega & soporte",
    description:
      "Implementamos la solución y acompañamos su evolución cuando el proyecto lo requiere.",
  },
];

function Somos() {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-section__inner">
        <header className="about-header">
          <span className="about-header__eyebrow">
            <i /> 04 / Oxman IT
          </span>
          <div>
            <h2>Tecnología con propósito, construida de principio a fin.</h2>
            <p>
              Creamos soluciones claras, mantenibles y preparadas para
              evolucionar junto a cada proyecto.
            </p>
          </div>
        </header>

        <div className="about-statement">
          <div className="about-statement__headline">
            <span aria-hidden="true"></span>
            <h3>No creemos en complicar la tecnología.</h3>
          </div>
          <div className="about-statement__copy">
            <p>
              La tecnología debe resolver problemas, no crear otros nuevos. En
              Oxman IT entendemos primero la necesidad, diseñamos una solución
              clara y construimos software capaz de crecer con el tiempo.
            </p>
            <p>
              Combinamos desarrollo, automatización, soporte y criterio técnico
              para convertir necesidades reales en herramientas útiles.
            </p>
          </div>
        </div>

        <div className="about-principles" aria-label="Principios de Oxman IT">
          {principles.map((principle) => (
            <article className="about-principle" key={principle.title}>
              <span>{principle.number}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="work-process">
          <header className="work-process__header">
            <div>
              <span className="work-process__label">Nuestro proceso</span>
              <h3>Cómo trabajamos</h3>
            </div>
            <p>
              Un proceso claro para avanzar desde el problema hasta una solución
              implementada y sostenible.
            </p>
          </header>

          <ol className="work-process__steps">
            {process.map((step) => (
              <li className="process-step" key={step.number}>
                <div className="process-step__track" aria-hidden="true">
                  <span>{step.number}</span>
                  <i />
                </div>
                <span className="process-step__label">{step.label}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Somos;
