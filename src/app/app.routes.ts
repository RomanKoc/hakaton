import { Routes } from '@angular/router';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ModalComponent } from './modal/modal.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'autenticacion', component: AutenticacionComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: '**', redirectTo: 'home'}
];
