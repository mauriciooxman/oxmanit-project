import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Captura de pantalla 2026-03-10 134016.png";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <div className="logo-container">

                <h2>Oxman IT</h2>

                <img src={logo} alt="Oxman IT" className="logo-img" />

            </div>

            <ul className={menuOpen ? "menu active" : "menu"}>

                <li>
                    <a href="#top" onClick={() => setMenuOpen(false)}>Inicio</a>
                </li>

                <li>
                    <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
                </li>

                <li>
                    <a href="#nosotros" onClick={() => setMenuOpen(false)}>Sobre Nosotros</a>
                </li>

                <li>
                    <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
                </li>

            </ul>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >

                {menuOpen ? <FaTimes /> : <FaBars />}

            </div>

        </nav>

    );

}

export default Navbar;