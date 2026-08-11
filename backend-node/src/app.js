const express = require("express");
const cors = require("cors");

const requiredFields = ["nombre", "apellido", "correo", "servicio", "mensaje"];

function localDate() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
}

function createApp({ repository, emailService, whatsappService, verifyToken }) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => res.json({ status: "ok" }));

  app.get("/api/solicitudes", async (_req, res, next) => {
    try { res.json(await repository.findAll()); } catch (error) { next(error); }
  });

  app.post("/api/solicitudes", async (req, res, next) => {
    try {
      const missing = requiredFields.filter(
        (field) => typeof req.body[field] !== "string" || !req.body[field].trim()
      );
      if (missing.length) {
        return res.status(400).json({ error: `Campos requeridos: ${missing.join(", ")}` });
      }
      const solicitud = Object.fromEntries(
        requiredFields.map((field) => [field, req.body[field].trim()])
      );
      solicitud.fecha = localDate();
      const saved = await repository.create(solicitud);

      Promise.allSettled([
        emailService.sendConfirmation(saved.correo),
        emailService.sendAdminNotification(saved),
      ]).then((results) => {
        results.filter((result) => result.status === "rejected").forEach((result) =>
          console.error("No fue posible enviar un correo:", result.reason.message)
        );
      });
      res.status(200).json(saved);
    } catch (error) { next(error); }
  });

  app.delete("/api/solicitudes/:id", async (req, res, next) => {
    try {
      if (!/^\d+$/.test(req.params.id)) return res.status(400).json({ error: "ID inválido" });
      await repository.remove(Number(req.params.id));
      res.status(200).end();
    } catch (error) { next(error); }
  });

  app.get("/api/whatsapp/webhook", (req, res) => {
    if (req.query["hub.mode"] === "subscribe" && req.query["hub.verify_token"] === verifyToken) {
      return res.status(200).send(req.query["hub.challenge"]);
    }
    res.status(403).send("Token de verificación incorrecto");
  });

  app.post("/api/whatsapp/webhook", (req, res) => {
    res.status(200).send("EVENT_RECEIVED");
    const message = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    const text = message?.text?.body;
    if (message?.from && text) {
      whatsappService.sendMessage(
        message.from,
        `Hola, soy el asistente virtual de OxmanIT. Recibí tu mensaje: '${text}'.`
      ).catch((error) => console.error("Error enviando WhatsApp:", error.message));
    }
  });

  app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  });
  return app;
}

module.exports = { createApp, localDate };

