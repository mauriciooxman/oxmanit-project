import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Captura de pantalla 2026-03-10 134016.png";
import "./Navbar.css";

function Navbar({ currentHash }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const projectsActive = currentHash === "#proyectos" ||
    currentHash.startsWith("#proyectos/") ||
    currentHash === "#oxman-game-optimizer";

  useEffect(() => {
    const closeOnHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", closeOnHashChange);
    return () => window.removeEventListener("hashchange", closeOnHashChange);
  }, []);

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
            <li><a href="#top" aria-current={currentHash === "#top" ? "page" : undefined} onClick={closeMenu}>Inicio</a></li>
            <li><a href="#servicios" aria-current={currentHash === "#servicios" ? "page" : undefined} onClick={closeMenu}>Servicios</a></li>
            <li><a href="#proyectos" aria-current={projectsActive ? "page" : undefined} onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#nosotros" aria-current={currentHash === "#nosotros" ? "page" : undefined} onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#contacto" aria-current={currentHash === "#contacto" ? "page" : undefined} onClick={closeMenu}>Contacto</a></li>
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
