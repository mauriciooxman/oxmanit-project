const express = require("express");

function createWhatsappRoutes(controller) {
  const router = express.Router();
  router.get("/webhook", controller.verifyWebhook);
  router.post("/webhook", controller.receiveMessage);
  return router;
}

module.exports = { createWhatsappRoutes };

