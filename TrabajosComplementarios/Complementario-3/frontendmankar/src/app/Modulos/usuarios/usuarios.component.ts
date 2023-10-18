import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/Services/servicios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  Usuarios: any[] = []; // Aquí almacena la lista de usuarios
  Roles: any[] = []; // Aquí almacena la lista de roles
  nuevoUsuario: any = {}; // Aquí almacena los datos del nuevo usuario
  public tiposRoles: any[] = [];
  public selectedRoles: number | undefined;


  constructor(private serviceServices: ServiciosService) {}

  ngOnInit(): void {
    this.getUsuarios();
    this.getRoles();
  }

  getUsuarios() {
    this.serviceServices.getUsuarios().subscribe(
      (data: any) => {
        if (Array.isArray(data) && data.length > 0) {
          this.Usuarios = data;
        } else {
          console.error('La respuesta del servicio de usuarios no es válida.');
        }
      },
      (error) => {
        console.error('Error al obtener la lista de usuarios: ', error);
      }
    );
  }

  getRoles() {
    this.serviceServices.getRoles().subscribe(
      (data: any) => {
        if (data && Array.isArray(data.datos) && data.datos.length > 0) {
          this.Roles = data.datos;
          console.log(this.Roles);
          console.log("OQUGQEGWI")
        } else {
          console.error('La respuesta del servicio de roles no es válida.');
          this.selectedRoles =
            this.tiposRoles[0].ROLES_ID;
        }
      },
      (error) => {
        console.error('Error al obtener la lista de roles: ', error);
      }
    );
  }

  agregarUsuario() {
    this.serviceServices.addUsuario(this.nuevoUsuario).subscribe(
      (data: any) => {
        if (data && data.USUARIO_DNI) {
          console.log('Usuario agregado con DNI: ', data.USUARIO_DNI);
          this.nuevoUsuario = {}; // Limpia los campos del formulario
          this.getUsuarios(); // Actualiza la lista de usuarios
        } else {
          console.error('La respuesta del servicio no es válida.');
        }
      },
      (error) => {
        console.error('Error al agregar usuario: ', error);
      }
    );
  }
}
