const API_URL = `${import.meta.env.VITE_API_URL}/api/solicitudes`;

export const guardarSolicitud = async (solicitud) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solicitud),
    });

    if (!response.ok) {
      throw new Error(`Error en el servidor: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al guardar solicitud:", error);
    throw error;
  }
};
