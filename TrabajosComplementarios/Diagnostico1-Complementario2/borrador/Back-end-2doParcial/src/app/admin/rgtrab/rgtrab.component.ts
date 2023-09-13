import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../Services/servicios.service';
import {  Trabajadores } from '../../interfaces/clases';

/* import { ServiciosService } from '../src/app/Services/servicios.service'; */
import Swal from 'sweetalert2';



@Component({
  selector: 'app-rgtrab',
  templateUrl: './rgtrab.component.html',
  styleUrls: ['./rgtrab.component.css']
})
export class RgtrabComponent implements OnInit {

  TrabajadoresModel = new Trabajadores("", "", "", "", "")
  public trabajadores: any=[]
  public trabajadoresng:boolean=true
  

  constructor(
    private serviceServices: ServiciosService
    ) { }

  ngOnInit(): void {
  }

  tablitatrabajadores(){
    this.trabajadoresng=true

    this.serviceServices.ObtenerTrabajadores("").subscribe(Respuestatrabajadores=>{
    this.trabajadores = Respuestatrabajadores;
    console.log(Respuestatrabajadores);
    })
  }
  eliminartrabajadores(TRABAJADOR_CEDULA:string) {
    console.log(TRABAJADOR_CEDULA);
     this.serviceServices.EliminarTrabajadores(TRABAJADOR_CEDULA).subscribe(Respuesta=>{
      Swal.fire({icon: 'success', title: 'Elminado',text: `Servicio ${TRABAJADOR_CEDULA} Satisfactoriamente`})
      this.tablitatrabajadores();
    }) 
  }

  RegistroComentarioTrabajadores() {
    console.log(this.TrabajadoresModel)
    this.serviceServices.GuardarTrabajadores(this.TrabajadoresModel).subscribe(
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

  ActualizarComentarioTrabajadores() {
    console.log(this.TrabajadoresModel)
    this.serviceServices.ActualizarTrabajadores(this.TrabajadoresModel).subscribe(
      res => {
        Swal.fire('Listo!','Modificado con Exito!','success', );
        window.location.reload();
      },
      err => {
        Swal.fire('Error!','Ha ocurrido un error! ','error', );
        window.location.reload();
      }

    )
  }


  


}
