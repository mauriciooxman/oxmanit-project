import { useState } from "react";
import { guardarSolicitud } from "../services/solicitudService";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await guardarSolicitud(formData);

      console.log("Solicitud guardada:", respuesta);

      alert("Solicitud enviada correctamente");

      // limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        correo: "",
        servicio: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
      alert("Hubo un error al enviar la solicitud");
    }
  };

  return (
    <section id="contacto" className="container">
      <h2 style={{ textAlign: "center" }}>Contáctanos</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <select
          name="servicio"
          value={formData.servicio}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un servicio</option>

          <option value="Creación de software">Creación de software</option>
          <option value="Desarrollo web">Desarrollo web</option>
          <option value="Creación de chatbots">Creación de chatbots</option>
          <option value="Mantenimiento de hardware">
            Mantenimiento de hardware
          </option>
          <option value="Mantenimiento de programas">
            Mantenimiento de programas
          </option>
          <option value="Optimización de PC">Optimización de PC</option>
          <option value="Asesoría informática">Asesoría informática</option>
          <option value="Ayuda pedagógica gratuita">
            Ayuda pedagógica gratuita
          </option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Formulario;
