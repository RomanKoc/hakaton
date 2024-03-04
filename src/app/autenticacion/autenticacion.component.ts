import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { ServicioAutorizacionService } from '../servicio-autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {
  usuario: any;
  token: string = '';
  error: string = '';

  constructor(private servicioUsuarios: ServicioUsuariosService,
    private servicioAutorizacion: ServicioAutorizacionService,
    private router: Router) { }

  formularioAutentificar = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    const usuario = {
      email: this.formularioAutentificar.value.email,
      password: this.formularioAutentificar.value.password
    };

    if (this.formularioAutentificar.valid) {

      this.servicioUsuarios.loguearUsuario(usuario)
        .subscribe({
          next: (response: any) => {
            this.token = response['token'];
            console.log('Token:', this.token);
            this.error = '';
            this.servicioAutorizacion.guardarToken(this.token);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            this.error = error;
            /* console.error('Error al autentificar usuario:', error); */
          }
        });
      this.formularioAutentificar.reset();
    }
  }


}