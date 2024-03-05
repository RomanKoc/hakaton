import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: any;
  pageUsers: number = 1;
  maxpageUsers: number = 1;

  constructor(private usuariosService: ApiService, private router: Router) {
    this.usuariosService.retornarUsuarios()
      .subscribe((result) => {
        if (result) {
          this.usuarios = result;
          console.log(this.usuarios);
        }
      });
  }
  masInfo(userId: number) {
    console.log('Usuario:', userId)
    this.router.navigate(['/user-detail', userId]);
  }

  agreagarForm = new FormGroup({
    name: new FormControl(''),
    job: new FormControl('')
  });

  agregarUsuario() {
    const user = {
      name: this.agreagarForm.value.name || '',
      job: this.agreagarForm.value.job || ''
    }
    this.usuariosService.agregarUsuario(user)
      .subscribe((result) => {
        console.log(result);
      });
    this.alerta(user.name);
  }

  alerta(nombre: string) {
    Swal.fire('Usuario Agregado', `El usuario ${nombre} sido agregado correctamente`, 'success');
  }
}
