import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/Services/servicios.service';
import Swal from 'sweetalert2';
import {Reservas} from '../../interfaces/clases';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
     
})
export class PrincipalComponent implements OnInit {
public servicios: any=[]
public Establecimiento:any=[]
public Usuario:any=[]
public Reserva:any=[]
public Datos: any=[]
public Establecimientong:boolean=true
public clientesng:boolean=true
public serviciong:boolean=true
public carrosng:boolean=true
public trabajadoresng:boolean=true
public Reservang:boolean=false
ServicioModel = new Reservas(0,"",0,0,0,"","","")

  constructor(
    private serviceServices: ServiciosService,
    private RutaUser:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let CEDULA_USER= +this.RutaUser.snapshot.paramMap.get('User')!
    this.serviceServices.CargarUsuario(CEDULA_USER.toString()).subscribe(Respuesta=>{
      console.log(Respuesta)
      this.Usuario=Respuesta  
    }) 


  }

  EliminarReserva(id:number){
    this.serviceServices.EliminarReserva(id).subscribe(
      Resp=>{
        Swal.fire({
          title: 'Eliminado!!',
          text: 'La reserva a sido eliminada con exito',
        })
        this.VerReservas()
      }
    )
  }

  VerReservas(){
    console.log(this.Usuario.CLIENTE_CEDULA)
    this.serviceServices.ConsultarReservas(this.Usuario.CLIENTE_CEDULA).subscribe(
      res => {
        this.serviciong=false
        this.Reservang=true
        this.Reserva=res
        console.log(res)
        console.log(this.Reserva)
        if(this.Reserva.length==0){
          Swal.fire({
            title: 'Lo sentimos!',
            text: 'Por el momento no tienes ninguna Reserva.',
          })
        }
        
    },
    
    err =>{
      Swal.fire({
        title: 'Lo sentimos!',
        text: 'Por el momento no tienes ninguna Reserva.',
      })
    }
    )

  }
  GuardarReserva(name:HTMLInputElement, ced:HTMLInputElement, idser:HTMLInputElement, ename:HTMLInputElement, pre:HTMLInputElement, date:HTMLInputElement, time:HTMLInputElement, car:HTMLInputElement){
    this.serviceServices.CargarReservas().subscribe(Resp=>{
      this.Reserva=Resp
      let IdReserva=this.Reserva.length
      this.Reserva.forEach((reserva:any)=>{
        IdReserva=reserva.RESERVACION_ID
      })
      IdReserva=IdReserva +1;
          this.ServicioModel.RESERVACION_ID= IdReserva
          this.ServicioModel.CLIENTE_CEDULA = ced.placeholder
          this.ServicioModel.SERVICIO_ID = Number(idser.placeholder)
          this.ServicioModel.ESTABLECIMIENTO_ID = Number(ename.placeholder)
          this.ServicioModel.RESERVACION_PRECIO = Number(pre.placeholder)
          console.log(this.ServicioModel)

          this.serviceServices.GuardarReservas(this.ServicioModel).subscribe(
            res => {
                alert("La reserva ah sido guardada de forma exitosa!!");
              window.location.reload();
            },
            
            err =>{
              alert("Ha ocurrido un error intente nuevamente");
              window.location.reload();
            })
  })
  }


  mensaje () {

    Swal.fire({
      title: 'Proximamente!',
      text: 'Estamos trabajando en implementar nuevos servicios.',
      imageUrl: '../../../assets/images/prox.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
 
 


   MostrarServicios(NombreServicio:string){
    this.serviciong=true
    this.Reservang=false
    this.serviceServices.CargarServicios(NombreServicio).subscribe(Respuesta=>{

    this.servicios=Respuesta
    let num=0
      this.servicios.forEach((service: any) =>{
        this.serviceServices.CargarEstablecimiento(service.ESTABLECIMIENTO_NOMBRE).subscribe(Resp=>{
          this.Establecimiento=Resp
          this.servicios[num].ESTABLECIMIENTO_DESCRIPCION=`${this.Establecimiento.ESTABLECIMIENTO_DESCRIPCION}`
          //console.log(this.servicios[num].ESTABLECIMIENTO_DESCRIPCION);
          this.servicios[num].ESTABLECIMIENTO_ID=`${this.Establecimiento.ESTABLECIMIENTO_ID}`
          //console.log(this.servicios[num].ESTABLECIMIENTO_ID);

          num++;
        })
        
      })
    })
  }

  
  }
