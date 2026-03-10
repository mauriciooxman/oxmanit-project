package com.example.demo.Service;

import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;

@Service
public class EmailService {
    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // @Async le dice a Spring: "Ejecuta esto en otro hilo de fondo y no hagas esperar al usuario"
    @Async
    public void enviarCorreoConfirmacion(String correo) {
        try {
            SimpleMailMessage mensaje = new SimpleMailMessage();
            mensaje.setTo(correo);
            mensaje.setSubject("Gracias por contactar a OxmanIT");
            mensaje.setText(
                    "Muchas gracias por preferir a Oxman IT.\n\n" +
                            "En las próximas horas alguien de nuestro equipo se pondrá en contacto contigo."
            );
            mailSender.send(mensaje);
            System.out.println("✅ Correo enviado exitosamente a: " + correo);

        } catch (MailException e) {
            // Si Render bloquea la salida, atrapamos el error aquí.
            // La aplicación no explota y el frontend recibe su respuesta exitosa igual.
            System.err.println("❌ Error al enviar el correo a " + correo + ". Motivo: " + e.getMessage());
        }
    }
}