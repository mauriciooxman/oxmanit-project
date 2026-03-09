import Formulario from "../components/Formulario";
import Somos from "../components/Somos";
import Servicios from "../components/Servicios";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Oxman IT</h1>
      <Hero />
      <Somos />
      <Servicios />
      <Formulario />
    </div>
  );
}

export default Home;
