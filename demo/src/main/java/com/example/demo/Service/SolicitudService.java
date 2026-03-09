package com.example.demo.Service;

import com.example.demo.Model.Solicitud;
import com.example.demo.Repository.ISolicitudRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SolicitudService implements ISolicitudService{
    public final ISolicitudRepository iSolicitudRepository;

    public SolicitudService(ISolicitudRepository iSolicitudRepository) {
        this.iSolicitudRepository = iSolicitudRepository;
    }

    @Override
    public List<Solicitud> listaSolicitudes() {
        List<Solicitud> listaDeSolicitudes = iSolicitudRepository.findAll();
        return listaDeSolicitudes;
    }

    @Override
    public Solicitud guardarSolicitud(Solicitud solicitud) {
       return iSolicitudRepository.save(solicitud);
    }

    @Override
    public void BorrarSolicitudPorId(Long id) {
        iSolicitudRepository.deleteById(id);
    }
}
