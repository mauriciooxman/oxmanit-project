import { useEffect } from "react";
import Home from "./pages/Home";
import "./styles/global.css";
import NavBar from "./components/Navbar";
import WhatsappButton from "./components/WhatsappButton";

function App() {
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

  return (
    <>
      <NavBar />
      <Home />
      <WhatsappButton />
    </>
  );
}

export default App;
