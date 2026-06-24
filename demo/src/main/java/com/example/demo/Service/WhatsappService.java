package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class WhatsappService {

    // Inyectamos los valores desde application.properties
    @Value("${whatsapp.meta.access-token}")
    private String accessToken;

    @Value("${whatsapp.meta.phone-id}")
    private String phoneId;

    public void enviarMensaje(String numeroDestino, String mensajeTexto) {
        RestTemplate restTemplate = new RestTemplate();

        // Construimos la URL dinámicamente con el ID del teléfono
        String metaApiUrl = "https://graph.facebook.com/v25.0/" + phoneId + "/messages";

        // 1. Configurar los Headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(accessToken);

        // 2. Construir el cuerpo del mensaje (JSON)
        Map<String, Object> body = new HashMap<>();
        body.put("messaging_product", "whatsapp");
        body.put("to", numeroDestino);
        body.put("type", "text");

        Map<String, String> textNode = new HashMap<>();
        textNode.put("body", mensajeTexto);
        body.put("text", textNode);

        // 3. Hacer la petición POST a Meta
        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(metaApiUrl, request, String.class);
            System.out.println("Mensaje enviado con éxito: " + response.getBody());
        } catch (Exception e) {
            System.err.println("Error al enviar el mensaje de WhatsApp: " + e.getMessage());
        }
    }
}