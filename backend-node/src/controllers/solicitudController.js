const { Solicitud } = require("../models/Solicitud");

// El controller traduce las peticiones HTTP en operaciones del repository/service.
function createSolicitudController({ repository, emailService }) {
  return {
    async findAll(_req, res, next) {
      try {
        res.json(await repository.findAll());
      } catch (error) {
        next(error);
      }
    },

    async create(req, res, next) {
      try {
        const saved = await repository.create(Solicitud.fromRequest(req.body));

        // Se ejecutan en segundo plano para no retrasar la respuesta del formulario.
        Promise.allSettled([
          emailService.sendConfirmation(saved.correo),
          emailService.sendAdminNotification(saved),
        ]).then((results) => {
          results.filter((result) => result.status === "rejected").forEach((result) =>
            console.error("No fue posible enviar un correo:", result.reason.message)
          );
        });

        res.status(200).json(saved);
      } catch (error) {
        next(error);
      }
    },

    async remove(req, res, next) {
      try {
        if (!/^\d+$/.test(req.params.id)) {
          return res.status(400).json({ error: "ID inválido" });
        }
        await repository.remove(Number(req.params.id));
        res.status(200).end();
      } catch (error) {
        next(error);
      }
    },
  };
}

module.exports = { createSolicitudController };

