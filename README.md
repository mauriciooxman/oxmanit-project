# Oxman IT

Aplicación web fullstack con frontend React, backend Node.js y base de datos MySQL.

## Desarrollo local

1. Copia `backend-node/.env.example` como `backend-node/.env` y configura las variables.
2. Instala dependencias con `npm install` y `npm --prefix backend-node install`.
3. Ejecuta frontend y backend con `npm run dev`.

El backend escucha en el puerto `8080` por defecto. Sus endpoints compatibles con Java son:

- `GET`, `POST /api/solicitudes`
- `DELETE /api/solicitudes/:id`
- `GET`, `POST /api/whatsapp/webhook`
- `GET /health`

El backend Spring Boot original permanece en `demo` y puede iniciarse con `npm run backend:java`.

## Estructura del backend Node.js

- `models/`: define la forma y validación de los datos (similar a `Model` en Java).
- `controllers/`: recibe las peticiones HTTP (similar a `@RestController`).
- `repositories/`: contiene el acceso SQL a MySQL (similar a `JpaRepository`).
- `routes/`: relaciona cada URL con un método del controller.
- `services/`: integraciones y lógica externa, como Brevo y WhatsApp.
- `config/`: conexión con la base de datos.
- `app.js`: configura Express y conecta las rutas.
- `server.js`: inicia la base de datos y el servidor HTTP.

Sitio: https://oxmanit-project-ku6i.vercel.app/
