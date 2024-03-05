import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements Usuario {
  id!: number;
  avatar!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
  
  usuario!: Usuario;
  usuarios: any;

  constructor(private usuariosService: ApiService, private router: ActivatedRoute) {
    this.usuariosService.retornarUsuarios()
      .subscribe((result) => {
        if (result) {
          this.usuarios = result;
          this.obtenerUsuario();
        }
      });

    this.router.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')!);
    });
  }

  obtenerUsuario() {
    if (this.usuarios && this.usuarios.data) {
      this.usuario = this.usuarios.data.find((usuario: { id: number; }) => usuario.id === this.id);
    }
  }
}
