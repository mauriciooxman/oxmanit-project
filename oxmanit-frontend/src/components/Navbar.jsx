import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Captura de pantalla 2026-03-10 134016.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#top" onClick={closeMenu}>
          <span className="navbar__mark" aria-hidden="true">
            <img src={logo} alt="" />
          </span>
          <span>OXMAN IT</span>
        </a>

        <div className="navbar__navigation">
          <ul
            id="primary-navigation"
            className={menuOpen ? "navbar__menu is-open" : "navbar__menu"}
          >
            <li><a href="#top" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
            <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
            <li className="navbar__mobile-cta">
              <a href="#contacto" onClick={closeMenu}>Iniciar proyecto</a>
            </li>
          </ul>

          <a className="navbar__cta" href="#contacto">Iniciar proyecto</a>

          <button
            className="navbar__toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
