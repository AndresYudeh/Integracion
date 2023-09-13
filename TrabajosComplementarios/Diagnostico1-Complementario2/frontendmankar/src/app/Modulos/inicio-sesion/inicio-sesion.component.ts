import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/clases';
import { ServiciosService } from 'src/app/Services/servicios.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {
  public iniciong = false;
  public contrang = false;
  public exito = false;
  public InicioS: any = [];

  usuarioModel = new Usuarios(0, "", "", "", true, "", 0);

  constructor(
    private ServicioInicioSesion: ServiciosService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {}

  InicioSesion() {
    // Convierte this.usuarioModel.USUARIO_DNI a una cadena antes de pasarlo como argumento
    const usuarioDNI = this.usuarioModel.USUARIO_DNI;

    this.ServicioInicioSesion.CargarUsuario(usuarioDNI).subscribe(
      (Respuesta) => {
        if (Respuesta.USUARIO_PASSWORD == this.usuarioModel.USUARIO_PASSWORD) {
          this.exito = true;
          // Almacenar el valor de Respuesta.USUARIO_DNI en el servicio
          console.log("KASKAFSJASJF");
          console.log(Respuesta.USUARIO_DNI);
          this.usuarioService.setUsuarioDNI(Respuesta.USUARIO_DNI);
          window.location.href = `/principal/${Respuesta.USUARIO_DNI}`;
        } else {
          this.contrang = true;
          setTimeout(function () {
            window.location.reload();
          }, 1000);
        }
      },
      (err) => {
        this.iniciong = true;
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      }
    );
  }
}
