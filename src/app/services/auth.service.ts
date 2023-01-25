import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginInterface } from '../interfaces/login.inteface';
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
}



