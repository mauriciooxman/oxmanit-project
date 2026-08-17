import logo from "../assets/Captura de pantalla 2026-03-10 134016.png";
import "./Footer.css";

const footerLinks = [
  { label: "Inicio", href: "#top" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__grid" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a href="#top" aria-label="Oxman IT, volver al inicio">
              <span><img src={logo} alt="" /></span>
              OXMAN IT
            </a>
            <p>Software, automatización y soluciones IT construidas para evolucionar.</p>
          </div>

          <nav className="site-footer__navigation" aria-label="Navegación del pie de página">
            {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </nav>
        </div>

        <div className="site-footer__capabilities">
          <span aria-hidden="true" /> Software · Automatización · Soluciones IT
        </div>

        <div className="site-footer__bottom">
          <div>
            <span>© {currentYear} Oxman IT</span>
            <span>Construido con atención al detalle.</span>
          </div>
          <a href="#top">Volver arriba <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
