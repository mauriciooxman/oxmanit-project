const mysql = require("mysql2/promise");

// Equivale a la configuración de DataSource/JPA de Spring Boot.
function createDatabase(config) {
  if (!config) throw new Error("Falta la variable SPRING_DATASOURCE_URL");
  const pool = mysql.createPool(config);

  return {
    pool,
    async initialize() {
      await pool.execute(`CREATE TABLE IF NOT EXISTS solicitudes (
        id BIGINT NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(255), apellido VARCHAR(255), correo VARCHAR(255),
        servicio VARCHAR(255), mensaje VARCHAR(255), fecha DATE,
        PRIMARY KEY (id)
      )`);
    },
    close() {
      return pool.end();
    },
  };
}

module.exports = { createDatabase };

