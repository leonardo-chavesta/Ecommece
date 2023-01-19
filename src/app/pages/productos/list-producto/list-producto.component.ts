import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoInterface } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html'
})
export class ListProductoComponent implements OnInit {
  data!: ProductoInterface[]
  verific: boolean = false
  constructor(private productoSvc: ProductoService) { }
  get resuls() { return this.productoSvc.resultados }

  ngOnInit(): void {
    this.productoSvc.listaProductos()
    console.log(this.verificAutentificacion())
  }

  verificAutentificacion(): boolean {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!)
    if (localStore) {
      if (localStore.message === 'Token generado correctamente.') return this.verific = true
    }
    return this.verific = false
  }



}
