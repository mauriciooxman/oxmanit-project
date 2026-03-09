function Servicios() {
  return (
    <section id="servicios" className="container" style={{ padding: "60px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Nuestros Servicios
      </h2>

      <div className="servicios-grid">
        <div className="card">
          <h3>💻 Desarrollo Web</h3>
          <p>
            Creamos sitios web modernos, rápidos y adaptados a cualquier
            dispositivo para impulsar la presencia digital de tu empresa.
          </p>
        </div>

        <div className="card">
          <h3>⚙️ Automatización</h3>
          <p>
            Automatizamos procesos empresariales para mejorar la eficiencia y
            reducir errores operativos mediante soluciones tecnológicas.
          </p>
        </div>

        <div className="card">
          <h3>🖥️ Soporte IT</h3>
          <p>
            Ofrecemos soporte técnico, mantenimiento de sistemas y asistencia
            tecnológica para empresas y profesionales.
          </p>
        </div>

        <div className="card">
          <h3>📊 Consultoría Tecnológica</h3>
          <p>
            Asesoramos a empresas en la implementación de herramientas
            tecnológicas que optimicen sus procesos y crecimiento digital.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
