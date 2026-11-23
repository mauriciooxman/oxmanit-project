import Formulario from "../components/Formulario";
import Servicios from "../components/Servicios";
import Hero from "../components/Hero";
import ProyectosPreview from "../components/ProyectosPreview";

function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <ProyectosPreview />
      <Formulario />
    </main>
  );
}

export default Home;
