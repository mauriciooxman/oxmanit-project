import Formulario from "../components/Formulario";
import Somos from "../components/Somos";
import Servicios from "../components/Servicios";
import Hero from "../components/Hero";
import Proyectos from "../components/Proyectos";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Proyectos />
      <Somos />
      <Formulario />
      <Footer />
    </main>
  );
}

export default Home;
