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
  listaCarritoProducto(): void {
    this.http.get<CarritoProductosInterface[]>(`${environment.carritoAPI}/Listar`).subscribe(res => {
      this.resultadoCarrito = res
    })
  }
  eliminarProductoDelCarrito(id: number) {
    return this.http.delete(`${environment.carritoAPI}/EliminarDelCarrito/${id}`)
  }

  buscarProductosPorIdUsuario(id: number){
    this.http.get<ProductoInterface[]>(`${environment.productoAPI}/BuscarProductoXIdUsuario/${id}`).subscribe(res => {
      this.resultadosXIdUsuario = res

      console.log(res)
    })
  }


}
