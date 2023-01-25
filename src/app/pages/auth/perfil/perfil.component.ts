import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DetalleUsuarioInterface } from '../../../interfaces/auth.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {

  resulUsuario!: DetalleUsuarioInterface

  constructor(private authSvc: AuthService) { }
  ngOnInit(): void {
    this.obtenerDetalleUsuario()
  }
  obtenerDetalleUsuario(): void {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!) ?? null
    const idUsuario = localStore.data.id ?? null
    this.authSvc.getDetalleUsuario(idUsuario).subscribe((res: DetalleUsuarioInterface) => {
      this.resulUsuario = res
      console.log(res)
    })

  }


  cerrarSesion(): void {
    localStorage.removeItem('ApplicationData')
    window.location.href = '/home'
  }
}
