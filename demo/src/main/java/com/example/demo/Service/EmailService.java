package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    // Tomamos tu correo de Gmail y tu nueva API Key desde las variables de entorno
    @Value("${SPRING_MAIL_USERNAME}")
    private String remitente;

    @Value("${BREVO_API_KEY}")
    private String brevoApiKey;

    @Async
    public void enviarCorreoConfirmacion(String correoDestino) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            String url = "https://api.brevo.com/v3/smtp/email";

            // Configuramos los permisos para la API de Brevo
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);
            headers.set("accept", "application/json");

            // Armamos el cuerpo del correo
            Map<String, Object> body = new HashMap<>();

            // Quién lo envía
            Map<String, String> sender = new HashMap<>();
            sender.put("name", "Oxman IT");
            sender.put("email", remitente);
            body.put("sender", sender);

            // A quién va dirigido
            Map<String, String> to = new HashMap<>();
            to.put("email", correoDestino);
            body.put("to", List.of(to));

            // Asunto y Mensaje
            body.put("subject", "Gracias por contactar a OxmanIT");
            body.put("textContent", "Muchas gracias por preferir a Oxman IT.\n\nEn las próximas horas alguien de nuestro equipo se pondrá en contacto contigo.");
            // Versión HTML para el cliente; el logo público evita depender de rutas del backend.
            body.put("htmlContent", """
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Gracias por contactar a OxmanIT</title>
                    </head>
                    <body style="margin:0;padding:20px;background-color:#ffffff;color:#20252b;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;">
                      <p style="margin:0 0 16px;">Muchas gracias por preferir a Oxman IT.</p>
                      <p style="margin:0 0 24px;">En las próximas horas alguien de nuestro equipo se pondrá en contacto contigo.</p>
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;max-width:480px;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;background-color:#ffffff;color:#20252b;">
                        <tr>
                          <td style="border-top:1px solid #e2e6ea;padding:16px 0 12px;">
                            <img src="https://www.oxman.cl/logo.png" alt="Oxman IT" width="88" height="86" style="display:block;width:88px;height:86px;border:0;">
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 0 10px;border-bottom:2px solid #5bcffa;font-size:14px;line-height:21px;">
                            <strong style="font-size:16px;color:#20252b;">Mauricio Oxman</strong><br>
                            Oxman IT
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 0;font-size:13px;line-height:20px;color:#4b5563;">
                            Desarrollo de software · Automatización · Soporte IT
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0;font-size:13px;line-height:23px;">
                            <a href="https://www.oxman.cl" style="color:#20252b;text-decoration:underline;">www.oxman.cl</a><br>
                            <a href="https://wa.me/56993938138" style="color:#20252b;text-decoration:underline;">WhatsApp: +56 9 9393 8138</a>
                          </td>
                        </tr>
                      </table>
                    </body>
                    </html>
                    """);

            // Disparamos el correo a través del puerto 443 (¡Inbloqueable por Render!)
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, request, String.class);

            System.out.println("✅ Correo enviado exitosamente via Brevo API a: " + correoDestino);

        } catch (Exception e) {
            System.err.println("❌ Error al enviar el correo con Brevo API a " + correoDestino + ". Motivo: " + e.getMessage());
        }
    }

    @Async
    public void enviarNotificacionAdmin(
            String nombre,
            String apellido,
            String correo,
            String servicio,
            String mensaje) {

        try {

            RestTemplate restTemplate = new RestTemplate();
            String url = "https://api.brevo.com/v3/smtp/email";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);
            headers.set("accept", "application/json");

            Map<String, Object> body = new HashMap<>();

            // Remitente
            Map<String, String> sender = new HashMap<>();
            sender.put("name", "Oxman IT");
            sender.put("email", remitente);
            body.put("sender", sender);

            // Destinatario (TÚ)
            Map<String, String> to = new HashMap<>();
            to.put("email", remitente);
            body.put("to", List.of(to));

            body.put("subject", "🔔 Nueva solicitud de servicio");

            body.put("textContent",
                    "Has recibido una nueva solicitud desde la página web.\n\n" +
                            "Nombre: " + nombre + " " + apellido + "\n" +
                            "Correo: " + correo + "\n" +
                            "Servicio: " + servicio + "\n\n" +
                            "Mensaje:\n" +
                            mensaje
            );

            HttpEntity<Map<String, Object>> request =
                    new HttpEntity<>(body, headers);

            restTemplate.exchange(url, HttpMethod.POST, request, String.class);

            System.out.println("✅ Notificación enviada al administrador.");

        } catch (Exception e) {

            System.err.println("❌ Error enviando notificación al administrador: "
                    + e.getMessage());

        }
    }
}
