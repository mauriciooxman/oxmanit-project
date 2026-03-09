package com.example.demo.Service;

import com.example.demo.Model.Solicitud;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ISolicitudService {
    public List<Solicitud> listaSolicitudes(); // lista de todas las solicitudes
    public Solicitud guardarSolicitud(Solicitud solicitud); // guardar una solicitud
    public void BorrarSolicitudPorId(Long id); // Borrar solicitud por ID
}
