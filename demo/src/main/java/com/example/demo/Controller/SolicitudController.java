package com.example.demo.Controller;

import com.example.demo.Model.Solicitud;
import com.example.demo.Service.EmailService;
import com.example.demo.Service.SolicitudService;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitudes")
@CrossOrigin("*")
public class SolicitudController {
    public final SolicitudService solicitudService;
    private final EmailService emailService;

    public SolicitudController(SolicitudService solicitudService, EmailService emailService) {
        this.solicitudService = solicitudService;
        this.emailService = emailService;
    }

    @GetMapping
    public List<Solicitud> traerListaDeSolicitudes(){
        return solicitudService.listaSolicitudes();
    }

    @PostMapping
    public Solicitud guardarSolicitud(@RequestBody Solicitud solicitud){
       Solicitud nuevaSolicitud = solicitudService.guardarSolicitud(solicitud);
        emailService.enviarCorreoConfirmacion(nuevaSolicitud.getCorreo());
        return nuevaSolicitud;
    }
    @DeleteMapping("/{id}")
    public void eliminarSolicitud(@PathVariable Long id){
        solicitudService.BorrarSolicitudPorId(id);
    }
}
