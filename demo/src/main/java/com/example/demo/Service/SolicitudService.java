package com.example.demo.Service;

import com.example.demo.Model.Solicitud;
import com.example.demo.Repository.ISolicitudRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SolicitudService implements ISolicitudService {

    private final ISolicitudRepository iSolicitudRepository;
    private final EmailService emailService;

    public SolicitudService(ISolicitudRepository iSolicitudRepository,
                            EmailService emailService) {
        this.iSolicitudRepository = iSolicitudRepository;
        this.emailService = emailService;
    }

    @Override
    public List<Solicitud> listaSolicitudes() {
        return iSolicitudRepository.findAll();
    }

    @Override
    public Solicitud guardarSolicitud(Solicitud solicitud) {

        solicitud.setFecha(LocalDate.now());

        // Guardamos primero en la base de datos
        Solicitud solicitudGuardada = iSolicitudRepository.save(solicitud);

        // Correo de confirmación al cliente
        emailService.enviarCorreoConfirmacion(
                solicitudGuardada.getCorreo()
        );

        // Correo de notificación para el administrador
        emailService.enviarNotificacionAdmin(
                solicitudGuardada.getNombre(),
                solicitudGuardada.getApellido(),
                solicitudGuardada.getCorreo(),
                solicitudGuardada.getServicio(),
                solicitudGuardada.getMensaje()
        );

        return solicitudGuardada;
    }

    @Override
    public void BorrarSolicitudPorId(Long id) {
        iSolicitudRepository.deleteById(id);
    }
}