function createWhatsappService(config, http = fetch) {
  return {
    async sendMessage(to, message) {
      if (!config.accessToken || !config.phoneId) {
        console.warn("WhatsApp omitido: faltan credenciales");
        return;
      }
      const response = await http(
        `https://graph.facebook.com/${config.apiVersion}/${config.phoneId}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.accessToken}`,
          },
          body: JSON.stringify({
            messaging_product: "whatsapp", to, type: "text", text: { body: message },
          }),
        }
      );
      if (!response.ok) throw new Error(`Meta respondió con estado ${response.status}`);
    },
  };
}

module.exports = { createWhatsappService };
