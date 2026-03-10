package com.example.demo.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class EmailService {
    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void enviarCorreoConfirmacion(String correo) {
        SimpleMailMessage mensaje = new SimpleMailMessage();
            mensaje.setTo(correo);
            mensaje.setSubject("Gracias por contactar a OxmanIT");
        mensaje.setText(
                "Muchas gracias por preferir a Oxman IT.\n\n" +
                        "En las próximas horas alguien de nuestro equipo se pondrá en contacto contigo."
        );
        mailSender.send(mensaje);

    }
}
