import { Component } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-verrepostajes',
  templateUrl: './verrepostajes.component.html',
  styleUrls: ['./verrepostajes.component.css'],
})
export class VerrepostajesComponent {
  public Repostajes: any = []; // Aquí almacena la lista de repostajes

  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {
    this.getRepostajes();
  }
  getRepostajes() {
    // Llama a un servicio o realiza una solicitud HTTP para obtener la lista de repostajes
    this.serviceServices.getRepostajes().subscribe(
      (data) => {
        // Verifica que la respuesta sea válida y asigna los datos a la propiedad Repostajes
        if (Array.isArray(data.datos)) {
          this.Repostajes = data.datos;
        } else {
          console.error('La respuesta del servicio no es válida.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de repostajes: ', error);
      }
    );
  }

}
