import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  tokenKey: string = 'token';
  usuario!: { email: string, password: string };
  token: string = '';
  error: string = '';

  constructor(private servicioUsuarios: ApiService,
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
            /* console.log('Token:', this.token); */
            this.error = '';
            this.guardarToken(this.token);
            this.simpleAlert();
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
  guardarToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  simpleAlert() {
    Swal.fire('Autentificación', 'Usuario autentificado', 'success');
  }


}
