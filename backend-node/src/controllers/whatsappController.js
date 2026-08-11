function createWhatsappController({ whatsappService, verifyToken }) {
  return {
    verifyWebhook(req, res) {
      if (
        req.query["hub.mode"] === "subscribe" &&
        req.query["hub.verify_token"] === verifyToken
      ) {
        return res.status(200).send(req.query["hub.challenge"]);
      }
      res.status(403).send("Token de verificación incorrecto");
    },

    receiveMessage(req, res) {
      // Meta necesita recibir rápidamente el OK para no reenviar el evento.
      res.status(200).send("EVENT_RECEIVED");
      const message = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      const text = message?.text?.body;
      if (message?.from && text) {
        whatsappService.sendMessage(
          message.from,
          `Hola, soy el asistente virtual de OxmanIT. Recibí tu mensaje: '${text}'.`
        ).catch((error) => console.error("Error enviando WhatsApp:", error.message));
      }
    },
  };
}

module.exports = { createWhatsappController };

