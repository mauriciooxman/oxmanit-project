import FlowDiagram from "./FlowDiagram";
import "./Servicios.css";

const softwareFlowPaths = [
  { id: "ui-primary", d: "M58 45 H145 C160 45 160 28 176 28 H334", start: { x: 58, y: 45 }, duration: 3100, offset: 420 },
  { id: "ui-secondary", d: "M58 103 H145 C160 103 160 118 176 118 H334", start: { x: 58, y: 103 }, duration: 3400, offset: 1900 },
];

const automationFlowPaths = [
  { id: "trigger-api", d: "M42 76 H125 C142 76 142 38 160 38 H213", start: { x: 42, y: 76 }, duration: 2600, offset: 350 },
  { id: "trigger-data", d: "M125 76 C142 76 142 114 160 114 H213", start: { x: 125, y: 76 }, duration: 2700, offset: 1200, packet: false },
  { id: "api-done", d: "M242 38 C270 38 270 76 298 76", start: { x: 242, y: 38 }, duration: 2400, offset: 900, packet: false },
  { id: "data-done", d: "M242 114 C270 114 270 76 298 76", start: { x: 242, y: 114 }, duration: 2500, offset: 1650 },
];

const supportFlowPaths = [
  { id: "monitoring", d: "M18 122 C82 101 140 132 204 108 S298 118 342 90", start: { x: 18, y: 122 }, duration: 3600, offset: 800 },
];

const consultingFlowPaths = [
  { id: "diagnosis-architecture", d: "M105 60 H135", start: { x: 105, y: 60 }, duration: 2300, offset: 250 },
  { id: "architecture-scale", d: "M225 60 H255", start: { x: 225, y: 60 }, duration: 2300, offset: 1400 },
];

function ServiceLink() {
  return (
    <a className="service-card__link" href="#contacto">
      Ver enfoque <span aria-hidden="true">→</span>
    </a>
  );
}

function SoftwareVisual() {
  return (
    <div className="service-visual software-visual" aria-hidden="true">
      <div className="software-visual__bar">
        <span /><span /><span />
        <small>product.api</small>
      </div>
      <div className="software-visual__body">
        <div className="software-visual__sidebar"><span /><span /><span /></div>
        <div className="software-visual__modules">
          <span className="software-visual__module software-visual__module--wide" />
          <span className="software-visual__module" />
          <span className="software-visual__module" />
        </div>
        <FlowDiagram
          className="software-visual__flow"
          viewBox="0 0 360 146"
          paths={softwareFlowPaths}
        />
      </div>
      <div className="software-visual__tags"><span>React</span><span>Java</span><span>API</span></div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="service-visual automation-visual" aria-hidden="true">
      <FlowDiagram viewBox="0 0 360 150" paths={automationFlowPaths} />
      <span className="automation-visual__node automation-visual__node--start">Trigger</span>
      <span className="automation-visual__node automation-visual__node--one">API</span>
      <span className="automation-visual__node automation-visual__node--two">Data</span>
      <span className="automation-visual__node automation-visual__node--end">Done</span>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="service-visual support-visual" aria-hidden="true">
      <div className="support-visual__header"><span /> Monitoreo del sistema <small>Activo</small></div>
      <div className="support-visual__metrics">
        <div><small>Disponibilidad</small><strong>99.9%</strong><span><i /></span></div>
        <div><small>Rendimiento</small><strong>Óptimo</strong><span><i /></span></div>
      </div>
      <div className="support-visual__signal"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <FlowDiagram
        className="support-visual__flow"
        viewBox="0 0 360 140"
        paths={supportFlowPaths}
      />
    </div>
  );
}

function ConsultingVisual() {
  return (
    <div className="service-visual consulting-visual" aria-hidden="true">
      <FlowDiagram
        className="consulting-visual__flow"
        viewBox="0 0 360 120"
        paths={consultingFlowPaths}
      />
      <div className="consulting-visual__step"><small>01</small><span>Diagnóstico</span></div>
      <i />
      <div className="consulting-visual__step"><small>02</small><span>Arquitectura</span></div>
      <i />
      <div className="consulting-visual__step"><small>03</small><span>Escala</span></div>
    </div>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="services-section">
      <div className="services-section__inner">
        <header className="services-header">
          <div>
            <span className="services-header__eyebrow"><i /> 02 / Capacidades</span>
            <h2>Soluciones construidas para problemas reales.</h2>
          </div>
          <p>
            Diseñamos e implementamos tecnología que simplifica operaciones,
            conecta sistemas y crea nuevas oportunidades de crecimiento.
          </p>
        </header>

        <div className="services-bento">
          <article className="service-card service-card--software">
            <div className="service-card__content">
              <span className="service-card__number">01</span>
              <h3>Desarrollo de software</h3>
              <p>Productos digitales sólidos, diseñados alrededor de tu operación y preparados para evolucionar.</p>
              <ul>
                <li>Aplicaciones web</li><li>Plataformas</li><li>APIs</li><li>Software a medida</li>
              </ul>
              <ServiceLink />
            </div>
            <SoftwareVisual />
          </article>

          <article className="service-card service-card--automation">
            <div className="service-card__content">
              <span className="service-card__number">02</span>
              <h3>Automatización</h3>
              <p>Flujos conectados que reducen tareas manuales y mantienen cada proceso en movimiento.</p>
              <ul><li>Integraciones</li><li>Flujos operativos</li><li>Procesos automáticos</li></ul>
              <ServiceLink />
            </div>
            <AutomationVisual />
          </article>

          <article className="service-card service-card--support">
            <div className="service-card__content">
              <span className="service-card__number">03</span>
              <h3>Soporte IT</h3>
              <p>Continuidad técnica para equipos, sistemas y herramientas críticas de tu negocio.</p>
              <ul><li>Mantenimiento</li><li>Optimización</li><li>Hardware y software</li></ul>
              <ServiceLink />
            </div>
            <SupportVisual />
          </article>

          <article className="service-card service-card--consulting">
            <div className="service-card__content">
              <span className="service-card__number">04</span>
              <h3>Consultoría tecnológica</h3>
              <p>Decisiones técnicas con contexto, dirección y una arquitectura lista para escalar.</p>
              <ul><li>Diagnóstico</li><li>Arquitectura</li><li>Estrategia tecnológica</li></ul>
              <ServiceLink />
            </div>
            <ConsultingVisual />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
