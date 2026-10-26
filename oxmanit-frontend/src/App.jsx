import { useEffect, useMemo, useState } from "react";
import Home from "./pages/Home";
import ProyectosPage from "./pages/ProyectosPage";
import "./styles/global.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";

const projectHashes = new Set([
  "#proyectos",
  "#proyectos/oxman-ecommerce",
  "#proyectos/oxman-game-optimizer",
  "#proyectos/oxman-it-platform",
  "#oxman-game-optimizer",
]);

const projectTargets = {
  "#proyectos": "projects-page-title",
  "#proyectos/oxman-ecommerce": "oxman-ecommerce",
  "#proyectos/oxman-game-optimizer": "oxman-game-optimizer",
  "#proyectos/oxman-it-platform": "oxman-it-platform",
  "#oxman-game-optimizer": "oxman-game-optimizer",
};

const homeTargets = new Set(["top", "servicios", "nosotros", "contacto"]);

function getHash() {
  return window.location.hash || "#top";
}

function App() {
  const [currentHash, setCurrentHash] = useState(getHash);

  useEffect(() => {
    const despertarServidor = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/health`,
        );

        if (response.ok) {
          console.log("OxmanIT API activa");
        }
      } catch {
        console.log("OxmanIT API iniciándose...");
      }
    };

    despertarServidor();
  }, []);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(getHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isProjectsView = useMemo(
    () => projectHashes.has(currentHash),
    [currentHash],
  );

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const homeId = currentHash.slice(1);
      const targetId = isProjectsView
        ? projectTargets[currentHash]
        : homeTargets.has(homeId) ? homeId : "top";
      const target = document.getElementById(targetId);

      if (!target) return;
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      if (!target.matches("a, button, input, select, textarea, [tabindex]")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [currentHash, isProjectsView]);

  return (
    <>
      <NavBar currentHash={currentHash} />
      {isProjectsView ? <ProyectosPage /> : <Home />}
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
