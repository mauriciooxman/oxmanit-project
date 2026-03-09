function Hero() {
  return (
    <section id="top" style={styles.hero}>
      <p style={styles.subtitle}>
        Soluciones tecnológicas modernas para empresas y emprendedores.
        Desarrollamos software, automatizamos procesos y brindamos soporte IT
        profesional.
      </p>

      <div style={styles.buttons}>
        <a href="#contacto" style={styles.primaryBtn}>
          Solicitar Servicio
        </a>

        <a href="#servicios" style={styles.secondaryBtn}>
          Ver Servicios
        </a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "100px 20px",
    backgroundColor: "#020617",
  },

  title: {
    fontSize: "48px",
    color: "#f4f7f5",
    marginBottom: "20px",
  },

  subtitle: {
    maxWidth: "700px",
    margin: "auto",
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  primaryBtn: {
    backgroundColor: "#f5f8f6",
    color: "#020617",
    padding: "12px 25px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "6px",
  },

  secondaryBtn: {
    border: "1px solid #f5f8f6",
    color: "#f5f8f6",
    padding: "12px 25px",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Hero;
