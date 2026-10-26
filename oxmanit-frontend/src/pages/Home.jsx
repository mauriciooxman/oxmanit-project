import Formulario from "../components/Formulario";
import Somos from "../components/Somos";
import Servicios from "../components/Servicios";
import Hero from "../components/Hero";
import ProyectosPreview from "../components/ProyectosPreview";

function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ProyectosPreview />
      <Somos />
      <Formulario />
    </main>
  );
}

export default Home;
