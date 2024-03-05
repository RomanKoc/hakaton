import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  conectado: boolean;

  constructor(private router: Router) {

    this.conectado = this.comprobarToken();

    if (this.conectado === false) {
      console.log('this.conectado ->', this.conectado);
      this.router.navigate(['/autenticacion'])
    } else {
      console.log('this.conectado ->', this.conectado);
      this.router.navigate(['/home']);
    }
  }

  comprobarToken(): boolean {
    return localStorage.getItem('token') !== null;
  }

  cerrarSesion() {
    alert('sesion cerrada');
    // No termina de funcionar..
    /* setTimeout(() => {
      this.router.navigate(['sesion-cerrada']);
    }, 2200); */
    localStorage.removeItem('token');
  }
  simpleAlert() {
    Swal.fire('Salir', 'Sesion cerrada correctamente', 'success')
  }

}
