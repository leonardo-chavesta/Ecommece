import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
})
export class MisProductosComponent implements OnInit {

  constructor (private productoSvc: ProductoService) {}
  get resuls() { return this.productoSvc.resultadosXIdUsuario }
  ngOnInit(): void {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!)
    const idUsuario = localStore?.data?.id
    this.productoSvc.buscarProductosPorIdUsuario(idUsuario)
    
  }



}
