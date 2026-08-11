const mysql = require("mysql2/promise");

function createDatabase(config) {
  if (!config) throw new Error("Falta la variable SPRING_DATASOURCE_URL");
  const pool = mysql.createPool(config);
  return {
    async initialize() {
      await pool.execute(`CREATE TABLE IF NOT EXISTS solicitudes (
        id BIGINT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(255), apellido VARCHAR(255), correo VARCHAR(255),
        servicio VARCHAR(255), mensaje VARCHAR(255), fecha DATE,
        PRIMARY KEY (id)
      )`);
    },
    async findAll() {
      const [rows] = await pool.execute(
        "SELECT id, nombre, apellido, correo, servicio, mensaje, fecha FROM solicitudes"
      );
      return rows;
    },
    async create(solicitud) {
      const { nombre, apellido, correo, servicio, mensaje, fecha } = solicitud;
      const [result] = await pool.execute(
        `INSERT INTO solicitudes (nombre, apellido, correo, servicio, mensaje, fecha)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, correo, servicio, mensaje, fecha]
      );
      return { id: result.insertId, ...solicitud };
    },
    async remove(id) {
      const [result] = await pool.execute("DELETE FROM solicitudes WHERE id = ?", [id]);
      return result.affectedRows > 0;
    },
    close() { return pool.end(); },
  };
}

module.exports = { createDatabase };

