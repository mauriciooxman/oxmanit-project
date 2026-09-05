package com.example.demo.Service;

import com.example.demo.Model.Solicitud;

import java.util.List;

public interface ISolicitudService {
    List<Solicitud> listaSolicitudes(); // lista de todas las solicitudes
    Solicitud guardarSolicitud(Solicitud solicitud); // guardar una solicitud
    void borrarSolicitudPorId(Long id); // Borrar solicitud por ID
}
