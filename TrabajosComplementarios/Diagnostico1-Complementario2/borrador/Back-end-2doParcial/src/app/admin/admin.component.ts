import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public servicios: any=[]
  public carros: any=[]
  public clientes: any=[]
  public Establecimientos:any=[]
  public Establecimientong:boolean=true
  public clientesng:boolean=true
  public serviciong:boolean=true
  public carrosng:boolean=true
  public trabajadores: any=[]
  public trabajadoresng:boolean=true
  
    constructor(
      private serviceServices: ServiciosService
      ) { }
  ngOnInit(): void {
  }

 
  tablitaservicios(){
    this.serviciong=true
    this.carrosng =false
    this.clientesng=false
    this.trabajadoresng=false
    this.Establecimientong=false
    this.serviceServices.CargarServicios("").subscribe(Respuesta=>{
    this.servicios = Respuesta;
    
    })
  }
  eliminarservicios(SERVICIO_ID:number) {
    console.log(SERVICIO_ID);
     this.serviceServices.EliminarServicios(SERVICIO_ID).subscribe(Respuesta=>{
      Swal.fire({icon: 'success', title: 'Elminado',text: `Servicio ${SERVICIO_ID} Satisfactoriamente`})
      this.tablitaservicios();
    }) 
  }

  tablitacarros(){
    this.carrosng =true
    this.serviciong=false
    this.clientesng=false
    this.trabajadoresng=false
    this.Establecimientong=false
    this.serviceServices.CargarCarros("").subscribe(Respuestacarros=>{
    this.carros = Respuestacarros;
    console.log(Respuestacarros);

    })
  }
  eliminarcarros(CARRO_PLACA:String) {
    this.serviceServices.EliminarCarros(CARRO_PLACA).subscribe(Respuesta=>{
      Swal.fire({icon: 'success', title: 'Elminado',text: `vehiculo : ${CARRO_PLACA} Satisfactoriamente`})
      this.tablitacarros();
    }) 
  }

  
  tablitaclientes(){
    this.clientesng=true
    this.serviciong=false
    this.carrosng= false
    this.trabajadoresng=false
    this.Establecimientong=false
    this.serviceServices.CargarClientes("").subscribe(Respuestaclientes=>{
    this.clientes = Respuestaclientes;
    console.log(Respuestaclientes);

    })
  }

  eliminarclientes(CLIENTE_CEDULA:string) {
    console.log(CLIENTE_CEDULA);
     this.serviceServices.EliminarClientes(CLIENTE_CEDULA).subscribe(Respuesta=>{
      Swal.fire({icon: 'success', title: 'Elminado',text: `Cliente ${CLIENTE_CEDULA} Satisfactoriamente`})
      this.tablitaclientes();
    }) 
  }

  tablitaestablecimiento(){
    this.Establecimientong=true
    this.serviciong=false
    this.carrosng= false
    this.clientesng=false
    this.serviceServices.CargarEstablecimiento("").subscribe(Respuestaestablecimiento=>{
    this.Establecimientos = Respuestaestablecimiento;
    console.log(Respuestaestablecimiento);
    })
  }
  
  eliminarestablecimiento(ESTABLECIMIENTO_ID:Number) {
    console.log(ESTABLECIMIENTO_ID);
     this.serviceServices.EliminarEstablecimiento(ESTABLECIMIENTO_ID).subscribe(Respuesta=>{
      Swal.fire({icon: 'success', title: 'Elminado',text: `Establecimiento ${ESTABLECIMIENTO_ID} Satisfactoriamente`})
      this.tablitaestablecimiento();
    }) 
  }
  
}
