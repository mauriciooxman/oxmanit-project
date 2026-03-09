function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Oxman IT</h2>

      <ul style={styles.menu}>
        <li>
          <a href="#top">Inicio</a>
        </li>

        <li>
          <a href="#servicios">Servicios</a>
        </li>

        <li>
          <a href="#nosotros">Sobre Nosotros</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#020617",
    borderBottom: "1px solid #334155",
  },
  logo: {
    color: "#f5f8f6",
    margin: 0,
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    margin: 0,
  },
};

export default Navbar;
