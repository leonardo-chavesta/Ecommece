import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { ProductoInterface, BuscarProducto, CarritoProductosInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public resultadoCarrito: CarritoProductosInterface[] = []
  public resultados: ProductoInterface[] = []
  public resultadosXIdUsuario: ProductoInterface[] = []

  public total: number = 0
  public IGV: number = 0
  public subTotal: number = 0

  constructor(private http: HttpClient) { }

  listaProductos(): void {
    this.http.get<ProductoInterface[]>(`${environment.productoAPI}/ListarProducto`).subscribe(res => {
      this.resultados = res
    })
  }
  listaProductosPorFiltro(formBody: BuscarProducto) {
    this.http.post<ProductoInterface[]>(`${environment.productoAPI}/listarproductoasync/filtro`, formBody).subscribe(res => {
      this.resultados = res
    })
  }

  postCrearProducto(formBody: any) {
    return this.http.post(`${environment.productoAPI}/CrearProducto`, formBody)
  }
  getDetalleProducto(id: number) {
    return this.http.get<ProductoInterface>(`${environment.productoAPI}/ObtenerProducto/${id}`)
  }
  eliminarProducto(id: number) {
    return this.http.delete(`${environment.productoAPI}/EliminarProducto/${id}`)
  }
  eviarCarrito(formBody: any) {
    return this.http.post(`${environment.carritoAPI}/CrearCarrito`, formBody)
  }
  listaCarritoProducto(id: number): void {
    this.http.get<CarritoProductosInterface[]>(`${environment.carritoAPI}/BuscarComprasXUsuario/${id}`).subscribe(res => {
      this.resultadoCarrito = res
      this.subTotal = res.reduce((acc, item) => {
        acc += item.precio
        return acc
      }, 0)
      this.IGV = this.total * 0.18
      this.total = this.subTotal + this.IGV
    })
  }
  eliminarProductoDelCarrito(id: number) {
    return this.http.delete(`${environment.carritoAPI}/EliminarDelCarrito/${id}`)
  }
  buscarProductosPorIdUsuario(id: number) {
    this.http.get<ProductoInterface[]>(`${environment.productoAPI}/BuscarProductoXIdUsuario/${id}`).subscribe(res => {
      this.resultadosXIdUsuario = res
      console.log(res)
    })
  }


}
