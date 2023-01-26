import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
})
export class CarritoComprasComponent implements OnInit {
  private localStore = JSON.parse(localStorage.getItem('ApplicationData')!)
  private idUsuario = this.localStore?.data?.id
  total!: any 
  constructor(private readonly productoSvc: ProductoService) { }

  get resustadoCarrito(){return this.productoSvc.resultadoCarrito}

  
  ngOnInit(): void {
    this.productoSvc.listaCarritoProducto(this.idUsuario)
    this.obtenerResultadoTotal()
  }
  obtenerResultadoTotal(): void{
   console.log(this.resustadoCarrito)
  }
  eliminarProducto(id:number){
    this.productoSvc.eliminarProductoDelCarrito(id).subscribe(() => this.productoSvc.listaCarritoProducto(this.idUsuario))
  }
}
