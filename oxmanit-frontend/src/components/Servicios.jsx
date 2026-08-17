import "./Servicios.css";

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
      </div>
      <div className="software-visual__tags"><span>React</span><span>Java</span><span>API</span></div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="service-visual automation-visual" aria-hidden="true">
      <svg viewBox="0 0 360 150">
        <path d="M42 76 H125 C142 76 142 38 160 38 H213" />
        <path d="M125 76 C142 76 142 114 160 114 H213" />
        <path d="M242 38 C270 38 270 76 298 76" />
        <path d="M242 114 C270 114 270 76 298 76" />
      </svg>
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
    </div>
  );
}

function ConsultingVisual() {
  return (
    <div className="service-visual consulting-visual" aria-hidden="true">
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
