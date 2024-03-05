import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-session-cerrada',
  standalone: true,
  imports: [],
  templateUrl: './session-cerrada.component.html',
  styleUrl: './session-cerrada.component.css'

})
export class SessionCerradaComponent {

  constructor(private router: Router) { }

  simpleAlert() {
    Swal.fire('Salir', 'Sesion cerrada correctamente', 'success');
  }

  ngOnInit() {
    this.simpleAlert();
    /* this.router.navigate(['/']); */
  }
}
