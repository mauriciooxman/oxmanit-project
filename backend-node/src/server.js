const { loadConfig } = require("./config");
const { createDatabase } = require("./db");
const { createEmailService } = require("./services/emailService");
const { createWhatsappService } = require("./services/whatsappService");
const { createApp } = require("./app");

async function start() {
  const config = loadConfig();
  const repository = createDatabase(config.database);
  await repository.initialize();
  const app = createApp({
    repository,
    emailService: createEmailService(config.email),
    whatsappService: createWhatsappService(config.whatsapp),
    verifyToken: config.whatsapp.verifyToken,
  });
  const server = app.listen(config.port, () =>
    console.log(`Backend OxmanIT escuchando en el puerto ${config.port}`)
  );
  async function shutdown() {
    server.close(async () => {
      await repository.close();
      process.exit(0);
    });
  }
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

start().catch((error) => {
  console.error("No fue posible iniciar el backend:", error);
  process.exit(1);
});

