import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
})
export class CarritoComprasComponent implements OnInit {

  constructor(private readonly productoSvc: ProductoService) { }

  get resustadoCarrito(){return this.productoSvc.resultadoCarrito}
  
  ngOnInit(): void {
    this.productoSvc.listaCarritoProducto()
  }

  eliminarProducto(id:number){
    this.productoSvc.eliminarProductoDelCarrito(id).subscribe(() => this.productoSvc.listaCarritoProducto())
  }
}
