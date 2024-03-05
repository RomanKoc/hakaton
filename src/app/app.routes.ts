import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SessionCerradaComponent } from './session-cerrada/session-cerrada.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'autenticacion', component: LoginComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: 'sesion-cerrada', component: SessionCerradaComponent },
    { path: '**', redirectTo: 'home' }
];
