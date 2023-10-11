import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/Services/servicios.service';
import Swal from 'sweetalert2';
import { Mantenimientos } from 'src/app/interfaces/clases';

@Component({
  selector: 'app-vermantenimientos',
  templateUrl: './vermantenimientos.component.html',
  styleUrls: ['./vermantenimientos.component.css']
})
export class VermantenimientosComponent {

  public placasUsuario: string[] = [];
  public tiposMantenimiento: any[] = [];
  public Usuario: any = [];
  public Mantenimiento: any = [];
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

  ServicioModel = new Mantenimientos(0,0, 0, "", new Date(), "", "", true, "", 0);
  placaPredefinida: any;

  constructor(
    private serviceServices: ServiciosService,
    private RutaUser: ActivatedRoute
  ) {}

  formatearFecha(fecha: Date): string {
    const dia = ('0' + fecha.getDate()).slice(-2);
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    const anio = fecha.getFullYear();
    // Formatea la fecha en el formato ISO (YYYY-MM-DD)
    return `${anio}-${mes}-${dia}`;
  }

  ngOnInit(): void {
    // Inicializa la fecha en el formato deseado al cargar la página
    this.nuevoMantenimiento.MANTENIMIENTO_FECHA = new Date(this.formatearFecha(new Date()));

    this.obtenerDNIUsuario();
    this.getMantenimientos();
    this.getTiposMantenimiento();
    console.log(this.Usuario.UNIDADES_PLACA);
    console.log("jasjdakjsd");
    if (this.Usuario.UNIDADES_PLACA) {
      console.log("jasjdakjsd");
      this.nuevoMantenimiento.UNIDADES_PLACA = this.Usuario.UNIDADES_PLACA;
      this.placaPredefinida = this.Usuario.UNIDADES_PLACA; // Asigna el valor predefinido
    }
    // Resto de tu código
  }




// Luego, en tu método getTiposMantenimiento, configura el valor inicial si es necesario
getTiposMantenimiento() {
  this.serviceServices.getTiposMantenimientos().subscribe(
    (data) => {
      console.log(this.nuevoMantenimiento.UNIDADES_PLACA);
      console.log("kkk")
      if (data && Array.isArray(data.datos) && data.datos.length > 0) {
        this.tiposMantenimiento = data.datos.map((item) => item.TIPOSMANTE_ID);
        console.log(this.tiposMantenimiento);

        // Configura el valor inicial si lo deseas (por ejemplo, el primer elemento del arreglo)
        this.selectedTipoMantenimiento = this.tiposMantenimiento[0];
      } else {
        console.error('La estructura de la respuesta del servicio es incorrecta.');
      }
    },
    (error) => {
      console.error('Error al obtener la lista de tipos de mantenimiento: ', error);
    }
  );
}

  
  
  

obtenerDNIUsuario() {
  let USUARIOS_DNI = +this.RutaUser.snapshot.paramMap.get('User')!;
  // Convierte el DNI a una cadena de texto
  const DNIUsuario = USUARIOS_DNI;

  this.serviceServices.CargarUsuario(DNIUsuario).subscribe(Respuesta => {
    console.log(Respuesta);
    this.Usuario = Respuesta;
    const nombreUsuario = this.Usuario.USUARIO_NOMBRE;
    console.log(`Nombre del usuario: ${nombreUsuario}`);

    // Configura las propiedades cuando los datos estén disponibles
    if (this.Usuario.UNIDADES_PLACA) {
      console.log("Valor de UNIDADES_PLACA:", this.Usuario.UNIDADES_PLACA);
      this.nuevoMantenimiento.UNIDADES_PLACA = this.Usuario.UNIDADES_PLACA;
      this.placaPredefinida = this.Usuario.UNIDADES_PLACA;
    }
  });
}


  agregarMantenimiento() {
    // Llama al servicio de Firebase para agregar el nuevo mantenimiento
    this.serviceServices.agregarMantenimiento(this.nuevoMantenimiento).subscribe(
      (docRef) => {
        console.log('Mantenimiento agregado con ID: ', docRef.MANTENIMIENTO_ID);
        // Puedes hacer algo más aquí después de agregar el mantenimiento, como limpiar el formulario.
        this.nuevoMantenimiento = {
          MANTENIMIENTO_ID : 0,
          MANTENIMIENTO_KMAC: 0,
          MANTENIMIENTO_KMPROX: 0,
          MANTENIMIENTO_COMENTARIO: '',
          MANTENIMIENTO_FECHA: this.nuevoMantenimiento.MANTENIMIENTO_FECHA,
          MANTENIMIENTO_IMAGEN: '',
          MANTENIMIENTO_IMAGEN2: '',
          ESTADO: false,
          UNIDADES_PLACA: this.Usuario.UNIDADES_PLACA,
          TIPOSMANTE_ID: 0,
        };
        this.getMantenimientos();
      },
      (error) => {
        console.error('Error al agregar mantenimiento: ', error);
      }
    );
  }


  getMantenimientos() {
    // Llama al servicio para obtener la lista de mantenimientos
    this.serviceServices.getMantenimientos().subscribe(
      (data) => {
        console.log(data.datos); // Accede a la propiedad "datos"
        if (Array.isArray(data.datos)) {
          this.Mantenimiento = data.datos;
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
