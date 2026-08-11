const express = require("express");
const cors = require("cors");
const { createSolicitudController } = require("./controllers/solicitudController");
const { createWhatsappController } = require("./controllers/whatsappController");
const { createSolicitudRoutes } = require("./routes/solicitudRoutes");
const { createWhatsappRoutes } = require("./routes/whatsappRoutes");

// app.js ensambla las capas. Es parecido al trabajo automático de Spring Boot.
function createApp({ repository, emailService, whatsappService, verifyToken }) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const solicitudController = createSolicitudController({ repository, emailService });
  const whatsappController = createWhatsappController({ whatsappService, verifyToken });

  app.get("/health", (_req, res) => res.json({ status: "ok" }));
  app.use("/api/solicitudes", createSolicitudRoutes(solicitudController));
  app.use("/api/whatsapp", createWhatsappRoutes(whatsappController));

  app.use((error, _req, res, _next) => {
    if (!error.status || error.status >= 500) console.error(error);
    res.status(error.status || 500).json({
      error: error.status ? error.message : "Error interno del servidor",
    });
  });
  return app;
}

module.exports = { createApp };
