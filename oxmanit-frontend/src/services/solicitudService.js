// Cambiamos localhost por tu URL de Render
const API_URL = "https://oxmanit-api.onrender.com/api/solicitudes";

export const guardarSolicitud = async (solicitud) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solicitud),
    });

    // Es buena práctica verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error en el servidor: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al guardar solicitud:", error);
    throw error; // Lo relanzamos para que el componente que lo usa sepa que falló
  }
};
