import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  verific: boolean = false
  constructor() { }

  ngOnInit(): void {
    this.verificAutentificacion()
  }

  verificAutentificacion(): boolean {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!)
    if (localStore) {
      if (localStore.isSuccess) return this.verific = true
      
    }
    return this.verific = false
  }
}
