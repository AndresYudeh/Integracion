import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { Mantenimientos, RespMantenimientos, TiposMantenimientos, RespTiposMantenimientos } from 'src/app/interfaces/Servicios';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {

  public placasUsuario: string[] = [];
  public tiposMantenimiento: TiposMantenimientos[] = [];
  public Usuario: any = {};
  public Mantenimiento: Mantenimientos[] = [];
  public Mantenimientong: boolean = false;
  public selectedTipoMantenimiento: number | undefined; 

  nuevoMantenimiento: Mantenimientos = {
    MANTENIMIENTO_ID: 0,
    MANTENIMIENTO_KMAC: 0,
    MANTENIMIENTO_KMPROX: 0,
    MANTENIMIENTO_COMENTARIO: '',
    MANTENIMIENTO_FECHA: new Date(),
    MANTENIMIENTO_IMAGEN: '',
    MANTENIMIENTO_IMAGEN2: '',
    ESTADO: false,
    UNIDADES_PLACA: '',
    TIPOSMANTE_ID: 0,
  };

  placaPredefinida: any;

  constructor(
    private serviceServices: ServiciosService,
    private RutaUser: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerDNIUsuario();
    this.getMantenimientos();
    this.getTiposMantenimiento();
    // Resto de tu código
  }

  // Formatea la fecha en el formato deseado
  formatearFecha(fecha: Date): string {
    const dia = ('0' + fecha.getDate()).slice(-2);
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const anio = fecha.getFullYear();
    return `${anio}-${mes}-${dia}`;
  }

  // Obtiene la lista de tipos de mantenimiento
  getTiposMantenimiento() {
    this.serviceServices.getTiposMantenimientos().subscribe(
      (data: RespTiposMantenimientos) => {
        if (data && Array.isArray(data.tiposMantenimientos) && data.tiposMantenimientos.length > 0) {
          this.tiposMantenimiento = data.tiposMantenimientos;
          // Configura el valor inicial si lo deseas
          this.selectedTipoMantenimiento = this.tiposMantenimiento[0]?.TIPOSMANTE_ID;
        } else {
          console.error('La estructura de la respuesta del servicio es incorrecta.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de tipos de mantenimiento: ', error);
      }
    );
  }

  // Obtiene el DNI del usuario desde la URL y carga sus datos
  obtenerDNIUsuario() {
    let USUARIOS_DNI = +this.RutaUser.snapshot.paramMap.get('User')!;
    // Convierte el DNI a una cadena de texto
    const DNIUsuario = USUARIOS_DNI;

    this.serviceServices.CargarUsuario(DNIUsuario).subscribe((Respuesta: any) => {
      this.Usuario = Respuesta;
      // Configura las propiedades cuando los datos estén disponibles
      if (this.Usuario.UNIDADES_PLACA) {
        this.nuevoMantenimiento.UNIDADES_PLACA = this.Usuario.UNIDADES_PLACA;
        this.placaPredefinida = this.Usuario.UNIDADES_PLACA;
      }
    });
  }

  // Agrega un nuevo mantenimiento
  agregarMantenimiento() {
    this.serviceServices.agregarMantenimiento(this.nuevoMantenimiento).subscribe(
      (docRef: any) => {
        console.log('Mantenimiento agregado con ID: ', docRef.MANTENIMIENTO_ID);
        // Puedes hacer algo más aquí después de agregar el mantenimiento, como limpiar el formulario.
        this.nuevoMantenimiento = {
          MANTENIMIENTO_ID: 0,
          MANTENIMIENTO_KMAC: 0,
          MANTENIMIENTO_KMPROX: 0,
          MANTENIMIENTO_COMENTARIO: '',
          MANTENIMIENTO_FECHA: new Date(),
          MANTENIMIENTO_IMAGEN: '',
          MANTENIMIENTO_IMAGEN2: '',
          ESTADO: false,
          UNIDADES_PLACA: this.Usuario.UNIDADES_PLACA,
          TIPOSMANTE_ID: this.selectedTipoMantenimiento || 0,
        };
        this.getMantenimientos();
      },
      (error) => {
        console.error('Error al agregar mantenimiento: ', error);
      }
    );
  }

  // Obtiene la lista de mantenimientos
  getMantenimientos() {
    this.serviceServices.getMantenimientos().subscribe(
      (data: RespMantenimientos) => {
        if (data && Array.isArray(data.mantenimientos)) {
          this.Mantenimiento = data.mantenimientos;
        } else {
          console.error('La respuesta del servicio no es un arreglo válido.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de mantenimientos: ', error);
      }
    );
  }

  // Resto de tus funciones
}
