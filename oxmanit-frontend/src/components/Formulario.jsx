import { useState } from "react";
import { guardarSolicitud } from "../services/solicitudService";
import FlowDiagram from "./FlowDiagram";
import "./Formulario.css";

const contactIdeaPaths = [{
  id: "idea-conversation",
  d: "M0 5 H100",
  start: { x: 0, y: 5 },
  duration: 1400,
  travelDuration: 1400,
  cycleDuration: 5600,
  offset: 0,
}];

const contactSolutionPaths = [{
  id: "conversation-solution",
  d: "M0 5 H100",
  start: { x: 0, y: 5 },
  duration: 1400,
  travelDuration: 1400,
  cycleDuration: 5600,
  offset: 2800,
}];

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    servicio: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEnviando(true);

    try {
      const respuesta = await guardarSolicitud(formData);

      console.log("Solicitud guardada:", respuesta);

      alert("Solicitud enviada correctamente");

      // Limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        correo: "",
        servicio: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar solicitud:", error);

      alert(
        "Hubo un error al enviar la solicitud. Por favor, intenta nuevamente.",
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-section__glow" aria-hidden="true" />
      <div className="contact-section__inner">
        <div className="contact-intro">
          <span className="contact-intro__eyebrow"><i /> 05 / Contacto</span>
          <h2>Construyamos algo juntos.</h2>
          <p>
            Cuéntanos qué necesitas y conversemos sobre cómo convertirlo en una
            solución tecnológica clara, útil y preparada para crecer.
          </p>

          <div className="contact-capabilities" aria-label="Capacidades">
            <div><span>Software</span><p>Aplicaciones y plataformas.</p></div>
            <div><span>Automatización</span><p>Procesos e integraciones.</p></div>
            <div><span>IT Solutions</span><p>Soporte y optimización.</p></div>
          </div>

          <div className="contact-flow" aria-hidden="true">
            <span>Idea</span>
            <span className="contact-flow__connector">
              <FlowDiagram
                viewBox="0 0 100 10"
                paths={contactIdeaPaths}
                intensity="subtle"
              />
            </span>
            <span>Conversación</span>
            <span className="contact-flow__connector">
              <FlowDiagram
                viewBox="0 0 100 10"
                paths={contactSolutionPaths}
                intensity="subtle"
              />
            </span>
            <span>Solución</span>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-panel__header">
            <div><span /> Nueva solicitud</div>
            <small>Solicitud de proyecto</small>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="contacto-nombre">Nombre</label>
                <input
                  id="contacto-nombre"
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  autoComplete="given-name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="contacto-apellido">Apellido</label>
                <input
                  id="contacto-apellido"
                  type="text"
                  name="apellido"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contacto-correo">Correo</label>
              <input
                id="contacto-correo"
                type="email"
                name="correo"
                placeholder="nombre@correo.com"
                value={formData.correo}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contacto-servicio">Servicio</label>
              <div className="form-field__select">
                <select
                  id="contacto-servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="CreaciÃ³n de software">Creación de software</option>
                  <option value="Desarrollo web">Desarrollo web</option>
                  <option value="CreaciÃ³n de chatbots">Creación de chatbots</option>
                  <option value="Mantenimiento de hardware">Mantenimiento de hardware</option>
                  <option value="Mantenimiento de programas">Mantenimiento de programas</option>
                  <option value="OptimizaciÃ³n de PC">Optimización de PC para GAMING</option>
                  <option value="AsesorÃ­a informÃ¡tica">Asesoría informática</option>
                  <option value="Ayuda pedagÃ³gica gratuita">Ayuda pedagógica gratuita</option>
                </select>
                <span aria-hidden="true" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contacto-mensaje">Mensaje</label>
              <textarea
                id="contacto-mensaje"
                name="mensaje"
                placeholder="Cuéntanos brevemente sobre tu proyecto"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-form__submit" type="submit" disabled={enviando}>
              <span>{enviando ? "Enviando..." : "Enviar solicitud"}</span>
              {!enviando && <i aria-hidden="true">→</i>}
            </button>

            <p className="contact-form__privacy">
              <span aria-hidden="true" /> Tu información se utiliza únicamente para responder a tu solicitud.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
