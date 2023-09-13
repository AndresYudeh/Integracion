import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { Repostajes } from 'src/app/interfaces/Servicios'; // Asegúrate de importar la definición correcta

@Component({
  selector: 'app-repostajes',
  templateUrl: './repostajes.component.html',
  styleUrls: ['./repostajes.component.css'],
})
export class RepostajesComponent implements OnInit {
  public nuevoRepostaje: Repostajes = {
    REPOSTAJE_ID: 0, // Inicializa como 0
    REPOSTAJE_KMAC: 0,
    REPOSTAJE_COMENTARIO: '',
    ESTADO: false,
    UNIDADES_PLACA: '', // Inicializa como cadena vacía
    RUTAS_ID: 0,
  };

  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {
    // Obtener el último REPOSTAJE_ID registrado y establecerlo en nuevoRepostaje.REPOSTAJE_ID + 1
    this.serviceServices.getUltimoRepostajeId().subscribe(
      (ultimoId: number) => {
        this.nuevoRepostaje.REPOSTAJE_ID = ultimoId + 1;
      },
      (error) => {
        console.error('Error al obtener el último REPOSTAJE_ID: ', error);
      }
    );
  }

  agregarRepostaje() {
    // Llama al servicio para agregar el nuevo repostaje
    this.serviceServices.addRepostaje(this.nuevoRepostaje).subscribe(
      (repostajeAgregado: Repostajes) => {
        console.log('Repostaje agregado con ID: ', repostajeAgregado.REPOSTAJE_ID);
        // Puedes hacer algo más aquí después de agregar el repostaje, como limpiar el formulario.
        this.nuevoRepostaje = {
          REPOSTAJE_ID: this.nuevoRepostaje.REPOSTAJE_ID + 1, // Incrementa el REPOSTAJE_ID
          REPOSTAJE_KMAC: 0,
          REPOSTAJE_COMENTARIO: '',
          ESTADO: false,
          UNIDADES_PLACA: '', // Limpia la placa
          RUTAS_ID: 0,
        };
        // También puedes mostrar una notificación de éxito aquí si lo deseas.
      },
      (error) => {
        console.error('Error al agregar repostaje: ', error);
        // En caso de error, puedes mostrar una notificación de error aquí.
      }
    );
  }

  // Resto de tus funciones
}
