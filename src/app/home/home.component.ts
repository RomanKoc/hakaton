import { Component } from '@angular/core';
import { ServicioAutorizacionService } from '../servicio-autorizacion.service';
import { ServicioUsuariosService } from '../servicio-usuarios.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios: any;
  pageUsers: number = 1;
  maxpageUsers: number = 1;

  constructor(private usuariosService: ServicioUsuariosService) {
    this.usuariosService.retornarUsuarios()
      .subscribe((result) => {
        if (result) {
          this.usuarios = result;
          console.log(this.usuarios);
        }
      });

  }


}





