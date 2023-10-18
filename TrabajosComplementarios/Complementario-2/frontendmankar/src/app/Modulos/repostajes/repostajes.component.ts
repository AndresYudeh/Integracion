import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { Repostajes } from 'src/app/interfaces/Servicios';

@Component({
  selector: 'app-repostajes',
  templateUrl: './repostajes.component.html',
  styleUrls: ['./repostajes.component.css'],
})
export class RepostajesComponent implements OnInit {
  public nuevoRepostaje: Repostajes = {
    REPOSTAJE_ID: 0,
    REPOSTAJE_KMAC: 0,
    REPOSTAJE_COMENTARIO: '',
    ESTADO: false,
    UNIDADES_PLACA: '',
    RUTAS_ID: 0,
  };

  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {}

  agregarRepostaje() {
    this.serviceServices.addRepostaje(this.nuevoRepostaje).subscribe(
      (repostajeAgregado: Repostajes) => {
        console.log(
          'Repostaje agregado con ID: ',
          repostajeAgregado.REPOSTAJE_ID,
        );
        this.nuevoRepostaje = {
          REPOSTAJE_ID: 0,
          REPOSTAJE_KMAC: 0,
          REPOSTAJE_COMENTARIO: '',
          ESTADO: false,
          UNIDADES_PLACA: '',
          RUTAS_ID: 0,
        };
      },
      (error) => {
        console.error('Error al agregar repostaje: ', error);
      }
    );
  }

  // Resto de tus funciones
}
