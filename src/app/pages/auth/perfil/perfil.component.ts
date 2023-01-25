import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent {

  cerrarSesion():void {
    localStorage.removeItem('ApplicationData')
    window.location.href = '/home'
  }
}
