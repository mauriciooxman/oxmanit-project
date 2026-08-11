const { Solicitud } = require("../models/Solicitud");

// El repository es la única capa que conoce las consultas SQL.
function createSolicitudRepository(pool) {
  return {
    async findAll() {
      const [rows] = await pool.execute(
        "SELECT id, nombre, apellido, correo, servicio, mensaje, fecha FROM solicitudes"
      );
      return rows.map((row) => new Solicitud(row));
    },

    async create(solicitud) {
      const { nombre, apellido, correo, servicio, mensaje, fecha } = solicitud;
      const [result] = await pool.execute(
        `INSERT INTO solicitudes (nombre, apellido, correo, servicio, mensaje, fecha)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, correo, servicio, mensaje, fecha]
      );
      return new Solicitud({ id: result.insertId, ...solicitud });
    },

    async remove(id) {
      const [result] = await pool.execute("DELETE FROM solicitudes WHERE id = ?", [id]);
      return result.affectedRows > 0;
    },
  };
}

module.exports = { createSolicitudRepository };

