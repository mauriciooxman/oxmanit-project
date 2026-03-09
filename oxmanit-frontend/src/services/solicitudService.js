const API_URL = "http://localhost:8080/api/solicitudes";

export const guardarSolicitud = async (solicitud) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(solicitud),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error al guardar solicitud:", error);
  }
};
