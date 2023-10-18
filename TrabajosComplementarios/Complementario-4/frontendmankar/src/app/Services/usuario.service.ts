import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioDNIKey = 'usuarioDNI'; // La clave para el localStorage
  private usuarioPlaca: string | undefined;
  
  setUsuarioDNI(dni: number): void {
    localStorage.setItem(this.usuarioDNIKey, dni.toString()); // Convierte a cadena antes de guardar
  }
  setUsuarioPlaca(placa: string): void {
    this.usuarioPlaca = placa;
  }
  getUsuarioPlaca(): string | undefined {
    return this.usuarioPlaca;
  }

  getUsuarioDNI(): number | undefined {
    const dniStr = localStorage.getItem(this.usuarioDNIKey);
    if (dniStr) {
      return parseInt(dniStr, 10); // Convierte de cadena a número
    }
    return undefined; // Si no se encuentra en el localStorage
  }
}

