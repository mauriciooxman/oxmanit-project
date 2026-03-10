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

            // Disparamos el correo a través del puerto 443 (¡Inbloqueable por Render!)
            HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, request, String.class);

            System.out.println("✅ Correo enviado exitosamente via Brevo API a: " + correoDestino);

        } catch (Exception e) {
            System.err.println("❌ Error al enviar el correo con Brevo API a " + correoDestino + ". Motivo: " + e.getMessage());
        }
    }
}