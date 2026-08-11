require("dotenv").config();

function parseJdbcUrl(value) {
  if (!value) return null;
  const url = new URL(value.replace(/^jdbc:/, ""));
  return {
    host: url.hostname,
    port: Number(url.port || 3306),
    database: url.pathname.replace(/^\//, ""),
    ssl: url.searchParams.get("useSSL") === "true" ? {} : undefined,
  };
}

function loadConfig(env = process.env) {
  const database = parseJdbcUrl(env.SPRING_DATASOURCE_URL);
  return {
    port: Number(env.PORT || 8080),
    database: database && {
      ...database,
      user: env.SPRING_DATASOURCE_USERNAME,
      password: env.SPRING_DATASOURCE_PASSWORD,
      waitForConnections: true,
      connectionLimit: 10,
      dateStrings: true,
    },
    email: {
      apiKey: env.BREVO_API_KEY,
      sender: env.SPRING_MAIL_USERNAME,
      admin: env.ADMIN_EMAIL || env.SPRING_MAIL_USERNAME,
    },
    whatsapp: {
      accessToken: env.WHATSAPP_ACCESS_TOKEN,
      phoneId: env.WHATSAPP_PHONE_ID,
      verifyToken: env.WHATSAPP_VERIFY_TOKEN,
      apiVersion: env.META_GRAPH_API_VERSION || "v25.0",
    },
  };
}

module.exports = { loadConfig, parseJdbcUrl };

