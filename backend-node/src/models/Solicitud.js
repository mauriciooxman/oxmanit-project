const REQUIRED_FIELDS = ["nombre", "apellido", "correo", "servicio", "mensaje"];

// En Node.js el modelo puede ser una clase normal. No necesita anotaciones como @Entity.
class Solicitud {
  constructor({ id, nombre, apellido, correo, servicio, mensaje, fecha }) {
    // Antes de guardar todavía no existe un ID; MySQL lo agrega posteriormente.
    if (id !== undefined) this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.servicio = servicio;
    this.mensaje = mensaje;
    this.fecha = fecha;
  }

  static fromRequest(body) {
    const missingFields = REQUIRED_FIELDS.filter(
      (field) => typeof body[field] !== "string" || !body[field].trim()
    );
    if (missingFields.length) {
      const error = new Error(`Campos requeridos: ${missingFields.join(", ")}`);
      error.status = 400;
      throw error;
    }

    const values = Object.fromEntries(
      REQUIRED_FIELDS.map((field) => [field, body[field].trim()])
    );
    return new Solicitud({ ...values, fecha: Solicitud.localDate() });
  }

  static localDate() {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
      .toISOString()
      .slice(0, 10);
  }
}

module.exports = { Solicitud };
