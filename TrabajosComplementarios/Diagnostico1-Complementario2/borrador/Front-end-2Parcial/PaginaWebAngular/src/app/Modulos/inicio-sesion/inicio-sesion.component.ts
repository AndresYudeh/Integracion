
import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clases';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {
public iniciong=false
public contrang= false
public exito=false
public InicioS:any=[]

ClienteModel = new Clientes("","","","")

  constructor(private ServicioInicioSesion:ServiciosService) { }

  ngOnInit(): void {
  }
InicioSesion(){
  
  console.log(this.ClienteModel.CLIENTE_CEDULA)
  this.ServicioInicioSesion.CargarUsuario(this.ClienteModel.CLIENTE_CEDULA).subscribe(Respuesta=>{

    if (Respuesta.CLIENTE_CONTRA==this.ClienteModel.CLIENTE_CONTRA) {
      
      this.exito=true
      window.location.href=`/principal/${Respuesta.CLIENTE_CEDULA}`
    }else{
      this.contrang=true
      setTimeout(function(){window.location.reload();}, 1000);
    } 
  },err =>{
    this.iniciong=true
    setTimeout(function(){window.location.reload();}, 1000);
  })
  
}
}
