function createEmailService(config, http = fetch) {
  async function send({ to, subject, textContent }) {
    if (!config.apiKey || !config.sender || !to) {
      console.warn("Correo omitido: faltan credenciales o destinatario");
      return;
    }
    const response = await http("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": config.apiKey,
      },
      body: JSON.stringify({
        sender: { name: "Oxman IT", email: config.sender },
        to: [{ email: to }], subject, textContent,
      }),
    });
    if (!response.ok) throw new Error(`Brevo respondió con estado ${response.status}`);
  }

  return {
    sendConfirmation(correo) {
      return send({
        to: correo,
        subject: "Gracias por contactar a OxmanIT",
        textContent: "Muchas gracias por preferir a Oxman IT.\n\nEn las próximas horas alguien de nuestro equipo se pondrá en contacto contigo.",
      });
    },
    sendAdminNotification({ nombre, apellido, correo, servicio, mensaje }) {
      return send({
        to: config.admin,
        subject: "🔔 Nueva solicitud de servicio",
        textContent: `Has recibido una nueva solicitud desde la página web.\n\nNombre: ${nombre} ${apellido}\nCorreo: ${correo}\nServicio: ${servicio}\n\nMensaje:\n${mensaje}`,
      });
    },
  };
}

module.exports = { createEmailService };

