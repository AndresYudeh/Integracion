import { Component, OnInit } from '@angular/core';
import { Servicios, Clientes, Trabajadores, Carros, Establecimientos } from '../../interfaces/clases';
import Swal from 'sweetalert2';


import { ServiciosService } from 'src/app/Services/servicios.service';
@Component({
  selector: 'app-registrodatos',
  templateUrl: './registrodatos.component.html',
  styleUrls: ['./registrodatos.component.css']
})
export class RegistrodatosComponent implements OnInit {
  ServicioModel = new Servicios(0, "", 0, "", "")
  TrabajadoresModel = new Trabajadores("", "", "", "", "")
  CarrosModel = new Carros("","","","")
  ClientesModel = new Clientes("","","","")
  EstablecimientosModel = new Establecimientos("","","")
  public servicios: any=[]
  constructor(private serviceServices: ServiciosService) { }
  ngOnInit(): void {
  }
  //-----------------------------Servicios----------------------------------//
  RegistroServicio() {
    this.serviceServices.CargarServicios("").subscribe(Respuesta=>{
      this.servicios = Respuesta;
    let IdServicio=this.servicios.length
  this.servicios.forEach((servicio:any)=>{
    IdServicio=servicio.SERVICIO_ID
  })
  IdServicio=IdServicio +1;
  console.log(this.ServicioModel)
  this.ServicioModel.SERVICIO_ID= IdServicio
  this.serviceServices.GuardarServicios(this.ServicioModel).subscribe(
    res => {
      Swal.fire('Listo!','Creado con Exito!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )

      })
    

    
  }


  ActualizarServicio() {
    console.log(this.ServicioModel)
    this.serviceServices.ActualizarServicios(this.ServicioModel).subscribe(
      res => {
        Swal.fire('Listo!','Modificado exitosamente!','success', );
        window.location.reload();
      },
      err => {
        Swal.fire('Error!','Ha ocurrido un error! ','error', );
        window.location.reload();
      }

    )
  }




  //-----------------------------Clientes----------------------------------//
RegistroClientes() {
  console.log(this.ClientesModel)
  this.serviceServices.GuardarClientes(this.ClientesModel).subscribe(
    res => {
      Swal.fire('Listo!','Creado con Exito!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}


ActualizarClientes() {
  console.log(this.ClientesModel)
  this.serviceServices.ActualizarClientes(this.ClientesModel).subscribe(
    res => {
      Swal.fire('Listo!','Modificado exitosamente!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}
//-----------------------------Carros----------------------------------//
RegistroCarros() {
  console.log(this.CarrosModel)
  this.serviceServices.GuardarCarros(this.CarrosModel).subscribe(
    res => {
      Swal.fire('Listo!','Creado con Exito!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}


ActualizarCarros() {
  console.log(this.CarrosModel)
  this.serviceServices.ActualizarCarros(this.CarrosModel).subscribe(
    res => {
      Swal.fire('Listo!','Modificado exitosamente!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}
//-----------------------------Establecimientos----------------------------------//
RegistroEstablecimientos() {
  console.log(this.EstablecimientosModel)
  this.serviceServices.GuardarEstablecimiento(this.EstablecimientosModel).subscribe(
    res => {
      Swal.fire('Listo!','Creado con Exito!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}


ActualizarEstablecimientos() {
  console.log(this.EstablecimientosModel)
  this.serviceServices.ActualizarEstablecimiento(this.EstablecimientosModel).subscribe(
    res => {
      Swal.fire('Listo!','Modificado exitosamente!','success', );
      window.location.reload();
    },
    err => {
      Swal.fire('Error!','Ha ocurrido un error! ','error', );
      window.location.reload();
    }

  )
}
 

}
