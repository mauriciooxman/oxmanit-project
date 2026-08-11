const express = require("express");

// Las rutas conectan cada URL con un método del controller.
function createSolicitudRoutes(controller) {
  const router = express.Router();
  router.get("/", controller.findAll);
  router.post("/", controller.create);
  router.delete("/:id", controller.remove);
  return router;
}

module.exports = { createSolicitudRoutes };

