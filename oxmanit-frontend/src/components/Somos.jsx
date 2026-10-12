import FlowDiagram from "./FlowDiagram";
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
    label: "Comprender",
    title: "Análisis",
    description:
      "Escuchamos tus necesidades, analizamos el contexto y definimos qué debe resolver la solución para tu negocio.",
  },
  {
    number: "02",
    label: "Organizar",
    title: "Planificación",
    description:
      "Acordamos el alcance, las prioridades y las entregas para avanzar con objetivos claros y expectativas compartidas.",
  },
  {
    number: "03",
    label: "Diseñar",
    title: "Arquitectura",
    description:
      "Definimos cómo se conectan los componentes y elegimos una base técnica segura, mantenible y preparada para crecer.",
  },
  {
    number: "04",
    label: "Construir",
    title: "Desarrollo",
    description:
      "Construimos e integramos la solución en entregas progresivas, con revisiones para mantener el trabajo alineado con tus necesidades.",
  },
  {
    number: "05",
    label: "Verificar",
    title: "Pruebas y validación",
    description:
      "Comprobamos el funcionamiento y revisamos contigo los resultados frente a lo acordado, corrigiendo los problemas antes de la entrega.",
  },
];

const processStageInterval = 1800;
const processCycleDuration = (process.length - 1) * processStageInterval;
const processTravelDuration = 1600;
const processNodeDelays = process.map((_, index) => index * processStageInterval / 1000);

const processHorizontalPaths = process.slice(0, -1).map((_, index) => [{
  id: `process-horizontal-${index}`,
  d: "M0 5 H100",
  start: { x: 0, y: 5 },
  duration: processTravelDuration,
  travelDuration: processTravelDuration,
  cycleDuration: processCycleDuration,
  offset: (processCycleDuration - index * processStageInterval) % processCycleDuration,
}]);

const processVerticalPaths = process.slice(0, -1).map((_, index) => [{
  id: `process-vertical-${index}`,
  d: "M5 0 V100",
  start: { x: 5, y: 0 },
  duration: processTravelDuration,
  travelDuration: processTravelDuration,
  cycleDuration: processCycleDuration,
  offset: (processCycleDuration - index * processStageInterval) % processCycleDuration,
}]);

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

          <ol className="work-process__steps" role="list" style={{ "--process-cycle-duration": `${processCycleDuration}ms` }}>
            {process.map((step, index) => (
              <li className="process-step" key={step.number}>
                <div className="process-step__track" aria-hidden="true">
                  <span style={{ "--process-node-delay": `${processNodeDelays[index]}s` }}>{step.number}</span>
                  {index < process.length - 1 && (
                    <span className="process-step__connector">
                      <FlowDiagram
                        className="process-step__flow process-step__flow--horizontal"
                        viewBox="0 0 100 10"
                        paths={processHorizontalPaths[index]}
                        intensity="subtle"
                      />
                      <FlowDiagram
                        className="process-step__flow process-step__flow--vertical"
                        viewBox="0 0 10 100"
                        paths={processVerticalPaths[index]}
                        intensity="subtle"
                      />
                    </span>
                  )}
                </div>
                <span className="process-step__label">{step.label}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="work-process__support">
            Usamos BMAD como herramienta de apoyo para organizar proyectos y
            estructurar el trabajo. Su uso no implica certificación ni asociación
            oficial con sus creadores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Somos;
