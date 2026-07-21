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

const isMobile = window.innerWidth <= 768;

const styles = {
  hero: {
    textAlign: "center",
    padding: isMobile ? "60px 20px" : "100px 20px",
    backgroundColor: "#020617",
  },

  subtitle: {
    maxWidth: "700px",
    margin: "0 auto 40px auto",
    fontSize: isMobile ? "16px" : "18px",
    lineHeight: "1.7",
    color: "#f5f8f6",
  },

  buttons: {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
  },

  primaryBtn: {
    backgroundColor: "#f5f8f6",
    color: "#020617",
    padding: "14px 30px",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "6px",
    width: isMobile ? "220px" : "auto",
    textAlign: "center",
  },

  secondaryBtn: {
    border: "1px solid #f5f8f6",
    color: "#f5f8f6",
    padding: "14px 30px",
    textDecoration: "none",
    borderRadius: "6px",
    width: isMobile ? "220px" : "auto",
    textAlign: "center",
  },
};

export default Hero;