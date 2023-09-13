import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios, Reservas, Trabajadores, Carros, Clientes, Establecimientos } from '../interfaces/clases';
import { RespEstablecimiento, RespServicios, RespCarros, RespClientes, RespTrabajadores, IReservas} from '../interfaces/Servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

   Url= 'http://localhost:8080/v1/sextoa';
  constructor(
    private http:HttpClient
  ) { }


  



/* CONSULTAS MICROSERVICIOS TRABAJADORES */
    ObtenerTrabajadores(TRABAJADOR_CEDULA:String){
      return this.http.get<RespTrabajadores>(`${this.Url}/api/trabajadores/${TRABAJADOR_CEDULA}`)
    }

    EliminarTrabajadores(TRABAJADOR_CEDULA:String){
      return this.http.delete<RespTrabajadores>(`${this.Url}/api/trabajadores/${TRABAJADOR_CEDULA}`)
    }
    GuardarTrabajadores(TrabajadoresModel:Trabajadores){
      return this.http.post(`${this.Url}/api/trabajadores/`,TrabajadoresModel)
    }
    ActualizarTrabajadores(TrabajadoresModel:Trabajadores){
      const cedula = TrabajadoresModel.TRABAJADOR_CEDULA
      return this.http.put(`${this.Url}/api/trabajadores/${cedula}`,TrabajadoresModel )
    }


  /**RESERVAS CRUD */
  GuardarReservas(ServicioModel:Reservas){
    return this.http.post(`${this.Url}/api/reservas/`,ServicioModel)
  }
  CargarReservas(){
    return this.http.get<Reservas>(`${this.Url}/api/reservas/`)
  }
  ConsultarReservas(CLIENTE_CEDULA:Number){
    return this.http.get<IReservas>(`${this.Url}/api/reservas/${CLIENTE_CEDULA}`)
  }
  EliminarReserva(RESERVACION_ID:number){
    return this.http.delete(`${this.Url}/api/reservas/${RESERVACION_ID}`)
  }
/* CLIENTE CRUD */
CargarUsuario(CLIENTE_CEDULA:String){
  return this.http.get<Clientes>(`${this.Url}/api/clientes/${CLIENTE_CEDULA}`)
}
  /* SERVICIOS CRUD */
  CargarServicios(SERVICIO_NOMBRE:String){
    return this.http.get<RespServicios>(`${this.Url}/api/servicios/${SERVICIO_NOMBRE}`)
  }
  
  EliminarServicios(SERVICIO_ID:Number){
    return this.http.delete<RespServicios>(`${this.Url}/api/servicios/${SERVICIO_ID}`)
  }

  GuardarServicios(ServicioModel:Servicios){
    return this.http.post(`${this.Url}/api/servicios/`,ServicioModel)
  }

  ActualizarServicios(ServicioModel:Servicios){
    const id = ServicioModel.SERVICIO_ID
    return this.http.put(`${this.Url}/api/servicios/${id}`, ServicioModel)
  }
  /* CARROS CRUD */
  CargarCarros(CARRO_PLACA:String){
    return this.http.get<RespCarros>(`${this.Url}/api/carros/${CARRO_PLACA}`)
  }
  EliminarCarros(CARRO_PLACA:String){
    return this.http.delete<RespCarros>(`${this.Url}/api/carros/${CARRO_PLACA}`)
  }
  GuardarCarros(CarrosModel:Carros){
    return this.http.post(`${this.Url}/api/carros/`,CarrosModel)
  }
  ActualizarCarros(CarrosModel:Carros){
    const placa = CarrosModel.CARRO_PLACA
    return this.http.put(`${this.Url}/api/carros/${placa}`,Carros)
  }
  /* ESTABLECIMIENTO CRUD */
  CargarEstablecimiento(ESTABLECIMIENTO_NOMBRE:String){
    return this.http.get<RespEstablecimiento>(`${this.Url}/api/establecimientos/${ESTABLECIMIENTO_NOMBRE}`)
  }
  EliminarEstablecimiento(ESTABLECIMIENTO_NOMBRE:Number){
    return this.http.delete<RespEstablecimiento>(`${this.Url}/api/establecimientos/${ESTABLECIMIENTO_NOMBRE}`)
  }
  GuardarEstablecimiento(EstablecimientoModel:Establecimientos){
    return this.http.post(`${this.Url}/api/establecimientos/`,EstablecimientoModel)
  }

  ActualizarEstablecimiento(EstablecimientoModel:Establecimientos){
    const id = EstablecimientoModel.ESTABLECIMIENTO_ID
    return this.http.put(`${this.Url}/api/establecimientos/${id}`, EstablecimientoModel)
  }

  /* CLIENTE CRUD */
  CargarClientes(CLIENTE_CEDULA:String){
    return this.http.get<RespClientes>(`${this.Url}/api/clientes/${CLIENTE_CEDULA}`)
  }
  EliminarClientes(CLIENTE_CEDULA:String){
    return this.http.delete<RespClientes>(`${this.Url}/api/clientes/${CLIENTE_CEDULA}`)
  }
  GuardarClientes(ClientesModel:Clientes){
    return this.http.post(`${this.Url}/api/clientes/`,ClientesModel)
  }

  ActualizarClientes(ClientesModel:Clientes){
    const id = ClientesModel.CLIENTE_CEDULA
    return this.http.put(`${this.Url}/api/clientes/${id}`,ClientesModel)
  }

}
