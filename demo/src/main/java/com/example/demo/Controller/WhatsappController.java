package com.example.demo.Controller;

import com.example.demo.Service.WhatsappService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/whatsapp")
public class WhatsappController {

    // Inyectamos el token de verificación desde application.properties
    @Value("${whatsapp.meta.verify-token}")
    private String verifyToken;

    private final WhatsappService whatsappService;

    public WhatsappController(WhatsappService whatsappService) {
        this.whatsappService = whatsappService;
    }

    @GetMapping("/webhook")
    public ResponseEntity<String> verifyWebhook(
            @RequestParam(name = "hub.mode", required = false) String mode,
            @RequestParam(name = "hub.verify_token", required = false) String token,
            @RequestParam(name = "hub.challenge", required = false) String challenge) {

        if ("subscribe".equals(mode) && verifyToken.equals(token)) {
            System.out.println("Webhook verificado exitosamente!");
            return ResponseEntity.ok(challenge);
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Token de verificación incorrecto");
        }
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> receiveMessage(@RequestBody Map<String, Object> payload) {
        // 1. Esto nos va a mostrar en Render TODO el JSON real que manda Meta
        System.out.println("=== WEBHOOK RECIBIDO EN VIVO ===");
        System.out.println(payload);
        System.out.println("=================================");

        try {
            List<Map<String, Object>> entry = (List<Map<String, Object>>) payload.get("entry");
            if (entry != null && !entry.isEmpty()) {
                List<Map<String, Object>> changes = (List<Map<String, Object>>) entry.get(0).get("changes");
                if (changes != null && !changes.isEmpty()) {
                    Map<String, Object> value = (Map<String, Object>) changes.get(0).get("value");

                    if (value != null && value.containsKey("messages")) {
                        List<Map<String, Object>> messages = (List<Map<String, Object>>) value.get("messages");
                        Map<String, Object> message = messages.get(0);

                        String numeroRemitente = (String) message.get("from");
                        Map<String, Object> textNode = (Map<String, Object>) message.get("text");
                        String textoRecibido = (String) textNode.get("body");

                        System.out.println("-> PROCESANDO: Mensaje de " + numeroRemitente + ": " + textoRecibido);

                        String respuesta = "Hola, soy el asistente virtual de OxmanIT. Recibí tu mensaje: '" + textoRecibido + "'.";
                        whatsappService.enviarMensaje(numeroRemitente, respuesta);
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Error al procesar el mensaje: " + e.getMessage());
            e.printStackTrace(); // Esto pintará la línea exacta del error en Render
        }

        return ResponseEntity.ok("EVENT_RECEIVED");
    }
}