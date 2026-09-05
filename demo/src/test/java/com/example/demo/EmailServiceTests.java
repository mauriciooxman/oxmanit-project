package com.example.demo;

import com.example.demo.Service.EmailService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

class EmailServiceTests {
    @Test
    void confirmationAddsHtmlWithoutChangingDeliveryOrInternalNotification() {
        EmailService service = new EmailService();
        ReflectionTestUtils.setField(service, "remitente", "sender@example.com");
        ReflectionTestUtils.setField(service, "brevoApiKey", "test-key");

        // Intercept HTTP locally: no real recipients, credentials or Brevo calls.
        try (var clients = mockConstruction(RestTemplate.class, (client, context) ->
                when(client.exchange(anyString(), eq(HttpMethod.POST), any(HttpEntity.class), eq(String.class)))
                        .thenReturn(ResponseEntity.status(201).body("{\"messageId\":\"test\"}")))) {
            service.enviarCorreoConfirmacion("client@example.com");
            service.enviarNotificacionAdmin("Ana", "Perez", "client@example.com", "Software", "Consulta");

            assertEquals(2, clients.constructed().size());
            var confirmation = captureRequest(clients.constructed().get(0));
            var notification = captureRequest(clients.constructed().get(1));
            Map<?, ?> body = (Map<?, ?>) confirmation.getBody();
            assertNotNull(body);
            assertEquals(Map.of("name", "Oxman IT", "email", "sender@example.com"), body.get("sender"));
            assertEquals(List.of(Map.of("email", "client@example.com")), body.get("to"));
            assertEquals("Gracias por contactar a OxmanIT", body.get("subject"));
            assertFalse(body.containsKey("textContent"));
            String html = (String) body.get("htmlContent");
            assertNotNull(html);
            assertTrue(html.contains("Muchas gracias por preferir a Oxman IT."));
            assertTrue(html.contains("En las próximas horas alguien de nuestro equipo se pondrá en contacto contigo."));
            assertTrue(html.contains("src=\"https://www.oxman.cl/logo.png\""));
            assertTrue(html.contains("href=\"https://www.oxman.cl\""));
            assertTrue(html.contains("href=\"https://wa.me/56993938138\""));
            assertFalse(html.contains("src=\"/"));
            assertEquals("test-key", confirmation.getHeaders().getFirst("api-key"));

            Map<?, ?> adminBody = (Map<?, ?>) notification.getBody();
            assertNotNull(adminBody);
            assertEquals(List.of(Map.of("email", "sender@example.com")), adminBody.get("to"));
            assertEquals("🔔 Nueva solicitud de servicio", adminBody.get("subject"));
            assertEquals("Has recibido una nueva solicitud desde la página web.\n\nNombre: Ana Perez\nCorreo: client@example.com\nServicio: Software\n\nMensaje:\nConsulta", adminBody.get("textContent"));
            assertFalse(adminBody.containsKey("htmlContent"));
        }
    }

    private HttpEntity<?> captureRequest(RestTemplate client) {
        ArgumentCaptor<HttpEntity> request = ArgumentCaptor.forClass(HttpEntity.class);
        verify(client).exchange(eq("https://api.brevo.com/v3/smtp/email"), eq(HttpMethod.POST), request.capture(), eq(String.class));
        return request.getValue();
    }
}
