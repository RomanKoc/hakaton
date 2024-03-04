import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutorizacionService {

  private tokenKey = 'token';

  constructor() { }

  comprobarToken(): boolean {
    return localStorage.getItem('token') !== null;
  }

  guardarToken(token: any) {
    console.log('guardado')
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken() {
    console.log('obtenido')
    return localStorage.getItem(this.tokenKey);
  }

  eliminarToken() {
    localStorage.removeItem(this.tokenKey);
  }

  comprobarSesion(token: any) {
    const tokenStorage = this.obtenerToken();
    if (tokenStorage === token) {
      return true;
    }
    return false;
  }


}
