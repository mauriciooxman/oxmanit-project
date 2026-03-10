import Formulario from "../components/Formulario";
import Somos from "../components/Somos";
import Servicios from "../components/Servicios";
import Hero from "../components/Hero";
import logo from "../assets/Captura de pantalla 2026-03-10 134016.png";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <h1 style={{ margin: 0 }}>Oxman IT</h1>
        <img
          src={logo}
          alt="Oxman IT Logo"
          style={{
            height: "60px",
            width: "60px",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </div>
      <Hero />
      <Somos />
      <Servicios />
      <Formulario />
    </div>
  );
}

export default Home;
