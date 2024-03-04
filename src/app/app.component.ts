import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServicioAutorizacionService } from './servicio-autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  conectado = false;

  constructor(private servicioAutorizacion: ServicioAutorizacionService, private router: Router) {

    this.conectado = this.servicioAutorizacion.comprobarToken();

    if (this.conectado === false) {
      console.log('this.conectado ->', this.conectado)
      this.router.navigate(['/autenticacion'])
    }else{
      console.log('this.conectado ->', this.conectado);
      this.router.navigate(['/home']);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
