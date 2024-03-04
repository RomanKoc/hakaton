import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  constructor(private http: HttpClient) { }

  retornarUsuarios(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  loguearUsuario(usuario: any){
    return this.http.post('https://reqres.in/api/login', usuario);
  }
  agregarUsuarios(name_param: number, job_param: string){
    return this.http.post("https://reqres.in/api/users",
      {name: name_param,
      job:job_param},
      {headers:{"Access-Control-Allow-Origin":"*"}});
  }

}
