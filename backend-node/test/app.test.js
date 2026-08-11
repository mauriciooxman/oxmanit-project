const test = require("node:test");
const assert = require("node:assert/strict");
const { once } = require("node:events");
const { createApp } = require("../src/app");

function fixture() {
  const rows = [];
  const calls = { confirmations: 0, admin: 0, whatsapp: [] };
  const app = createApp({
    repository: {
      findAll: async () => rows,
      create: async (value) => { const saved = { id: 1, ...value }; rows.push(saved); return saved; },
      remove: async () => true,
    },
    emailService: {
      sendConfirmation: async () => calls.confirmations++,
      sendAdminNotification: async () => calls.admin++,
    },
    whatsappService: { sendMessage: async (...args) => calls.whatsapp.push(args) },
    verifyToken: "secreto",
  });
  return { app, calls };
}

async function withServer(app, callback) {
  const server = app.listen(0);
  await once(server, "listening");
  try { await callback(`http://127.0.0.1:${server.address().port}`); }
  finally { server.close(); await once(server, "close"); }
}

test("crea y lista solicitudes manteniendo el contrato Java", async () => {
  const { app, calls } = fixture();
  await withServer(app, async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/solicitudes`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: "Ana", apellido: "Pérez", correo: "ana@example.com", servicio: "Desarrollo web", mensaje: "Cotización" }),
    });
    assert.equal(response.status, 200);
    const created = await response.json();
    assert.equal(created.id, 1);
    assert.match(created.fecha, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal((await (await fetch(`${baseUrl}/api/solicitudes`)).json()).length, 1);
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(calls.confirmations, 1);
    assert.equal(calls.admin, 1);
  });
});

test("valida campos requeridos", async () => {
  const { app } = fixture();
  await withServer(app, async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/solicitudes`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: '{"nombre":"Ana"}',
    });
    assert.equal(response.status, 400);
  });
});

test("verifica el webhook y responde mensajes entrantes", async () => {
  const { app, calls } = fixture();
  await withServer(app, async (baseUrl) => {
    const verify = await fetch(`${baseUrl}/api/whatsapp/webhook?hub.mode=subscribe&hub.verify_token=secreto&hub.challenge=123`);
    assert.equal(await verify.text(), "123");
    const event = await fetch(`${baseUrl}/api/whatsapp/webhook`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entry: [{ changes: [{ value: { messages: [{ from: "569123", text: { body: "Hola" } }] } }] }] }),
    });
    assert.equal(await event.text(), "EVENT_RECEIVED");
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(calls.whatsapp.length, 1);
  });
});

