package com.example.demo.Controller;

import com.example.demo.Model.Solicitud;
import com.example.demo.Service.SolicitudService;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitudes")
@CrossOrigin("*")
public class SolicitudController {
    public final SolicitudService solicitudService;

    public SolicitudController(SolicitudService solicitudService) {
        this.solicitudService = solicitudService;
    }

    @GetMapping
    public List<Solicitud> traerListaDeSolicitudes(){
        return solicitudService.listaSolicitudes();
    }

    @PostMapping
    public Solicitud guardarSolicitud(@RequestBody Solicitud solicitud){
        return solicitudService.guardarSolicitud(solicitud);
    }
    @DeleteMapping("/{id}")
    public void eliminarSolicitud(@PathVariable Long id){
        solicitudService.BorrarSolicitudPorId(id);
    }
}
