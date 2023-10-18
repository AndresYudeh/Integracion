import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { Unidades } from 'src/app/interfaces/Servicios';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
})
export class UnidadesComponent implements OnInit {
  public nuevaUnidad: Unidades = {
    UNIDADES_PLACA: '',
    UNIDADES_NUMERO: 0,
    UNIDADES_COLOR: '',
    UNIDADES_MATRICULA: '',
    UNIDADES_ANO: 0,
    ESTADO: true,
    ESTABLECIMIENTO_ID: 0,
    USUARIO_DNI: 0,
  };

  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {}

  agregarUnidad() {
    this.serviceServices.addUnidad(this.nuevaUnidad).subscribe(
      (unidadAgregada: Unidades) => {
        console.log('Unidad agregada con Placa: ', unidadAgregada.UNIDADES_PLACA);
        this.nuevaUnidad = {
          UNIDADES_PLACA: '',
          UNIDADES_NUMERO: 0,
          UNIDADES_COLOR: '',
          UNIDADES_MATRICULA: '',
          UNIDADES_ANO: 0,
          ESTADO: true,
          ESTABLECIMIENTO_ID: 0,
          USUARIO_DNI: 0,
        };
      },
      (error) => {
        console.error('Error al agregar unidad: ', error);
      }
    );
  }

  // Resto de tus funciones
}
