import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginInterface, RegisterInterface, DetalleUsuarioInterface } from '../interfaces/auth.interface';
import { environment } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  autentificarLogin(formBody: LoginInterface) {
    return this.http.post(`${environment.authApi}/Generate/Token`, formBody);
  }
  registrarUsuario(formBody: RegisterInterface) {
    console.log("DatoAPI =>",formBody ) 
    return this.http.post(`${environment.authApi}/Register`, formBody);
  }
  getDetalleUsuario(id: number) {
    return this.http.get<DetalleUsuarioInterface>(`${environment.authApi}/ObtenerUsuario/${id}`)
  }

}



