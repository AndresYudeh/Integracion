import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Usuarios,
  Unidades,
  TiposMantenimientos,
  Rutas,
  Roles,
  Repostajes,
  Mantenimientos,
  Establecimientos,
} from '../interfaces/clases';
import {
  RespUsuarios,
  RespUnidades,
  RespEstablecimientos,
  RespRutas,
  RespRoles,
  RespRepostajes,
  RespTiposMantenimientos,
  RespMantenimientos,
} from '../interfaces/Servicios';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private apiUrl = 'http://localhost:3000/noveno/api';

  constructor(private http: HttpClient) {}

  // Usuarios
  getUsuarios() {
    return this.http.get<RespUsuarios>(`${this.apiUrl}/usuarios`);
  }

  CargarUsuario(USUARIO_DNI: number) {
    return this.http.get<Usuarios>(`${this.apiUrl}/usuarios/${USUARIO_DNI}`);
  }

  addUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>(`${this.apiUrl}/usuarios`, usuario);
  }

  updateUsuario(id: number, usuario: Usuarios) {
    return this.http.put<Usuarios>(`${this.apiUrl}/usuarios/${id}`, usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete<Usuarios>(`${this.apiUrl}/usuarios/${id}`);
  }

  // Unidades
  getUnidades() {
    return this.http.get<RespUnidades>(`${this.apiUrl}/unidades`);
  }

  addUnidad(unidad: Unidades) {
    return this.http.post<Unidades>(`${this.apiUrl}/unidades`, unidad);
  }

  updateUnidad(placa: string, unidad: Unidades) {
    return this.http.put<Unidades>(`${this.apiUrl}/unidades/${placa}`, unidad);
  }

  deleteUnidad(placa: string) {
    return this.http.delete<Unidades>(`${this.apiUrl}/unidades/${placa}`);
  }

  // TiposMantenimientos
  getTiposMantenimientos() {
    return this.http.get<RespTiposMantenimientos>(
      `${this.apiUrl}/tiposmantenimientos`,
    );
  }

  addTipoMantenimiento(tipoMantenimiento: TiposMantenimientos) {
    return this.http.post<TiposMantenimientos>(
      `${this.apiUrl}/tiposmantenimientos`,
      tipoMantenimiento,
    );
  }

  updateTipoMantenimiento(id: number, tipoMantenimiento: TiposMantenimientos) {
    return this.http.put<TiposMantenimientos>(
      `${this.apiUrl}/tiposmantenimientos/${id}`,
      tipoMantenimiento,
    );
  }

  deleteTipoMantenimiento(id: number) {
    return this.http.delete<TiposMantenimientos>(
      `${this.apiUrl}/tiposmantenimientos/${id}`,
    );
  }

  // Rutas
  getRutas() {
    return this.http.get<RespRutas>(`${this.apiUrl}/rutas`);
  }

  addRuta(ruta: Rutas) {
    return this.http.post<Rutas>(`${this.apiUrl}/rutas`, ruta);
  }

  updateRuta(id: number, ruta: Rutas) {
    return this.http.put<Rutas>(`${this.apiUrl}/rutas/${id}`, ruta);
  }

  deleteRuta(id: number) {
    return this.http.delete<Rutas>(`${this.apiUrl}/rutas/${id}`);
  }

  // Roles
  getRoles() {
    return this.http.get<RespRoles>(`${this.apiUrl}/roles`);
  }

  addRol(rol: Roles) {
    return this.http.post<Roles>(`${this.apiUrl}/roles`, rol);
  }

  updateRol(id: number, rol: Roles) {
    return this.http.put<Roles>(`${this.apiUrl}/roles/${id}`, rol);
  }

  deleteRol(id: number) {
    return this.http.delete<Roles>(`${this.apiUrl}/roles/${id}`);
  }

  // Repostaje
  getRepostajes() {
    return this.http.get<RespRepostajes>(`${this.apiUrl}/repostajes`);
  }

  addRepostaje(repostaje: Repostajes) {
    return this.http.post<Repostajes>(`${this.apiUrl}/repostajes`, repostaje);
  }

  updateRepostaje(id: string, repostaje: Repostajes) {
    return this.http.put<Repostajes>(
      `${this.apiUrl}/repostajes/${id}`,
      repostaje,
    );
  }

  deleteRepostaje(id: string) {
    return this.http.delete<Repostajes>(`${this.apiUrl}/repostajes/${id}`);
  }

  // Mantenimientos
  getMantenimientos() {
    return this.http.get<RespMantenimientos>(`${this.apiUrl}/mantenimientos`);
  }

  ConsultarMantenimientos(USUARIO_DNI: Number) {
    return this.http.get<RespMantenimientos>(
      `${this.apiUrl}/mantenimientos/${USUARIO_DNI}`,
    );
  }

  agregarMantenimiento(mantenimiento: Mantenimientos) {
    return this.http.post<Mantenimientos>(
      `${this.apiUrl}/mantenimientos`,
      mantenimiento,
    );
  }

  updateMantenimiento(id: string, mantenimiento: Mantenimientos) {
    return this.http.put<Mantenimientos>(
      `${this.apiUrl}/mantenimientos/${id}`,
      mantenimiento,
    );
  }

  deleteMantenimiento(id: string) {
    return this.http.delete<Mantenimientos>(
      `${this.apiUrl}/mantenimientos/${id}`,
    );
  }

  // Establecimientos
  getEstablecimientos() {
    return this.http.get<RespEstablecimientos>(
      `${this.apiUrl}/establecimientos`,
    );
  }

  addEstablecimiento(establecimiento: Establecimientos) {
    return this.http.post<Establecimientos>(
      `${this.apiUrl}/establecimientos`,
      establecimiento,
    );
  }

  updateEstablecimiento(id: number, establecimiento: Establecimientos) {
    return this.http.put<Establecimientos>(
      `${this.apiUrl}/establecimientos/${id}`,
      establecimiento,
    );
  }

  deleteEstablecimiento(id: number) {
    return this.http.delete<Establecimientos>(
      `${this.apiUrl}/establecimientos/${id}`,
    );
  }
}
