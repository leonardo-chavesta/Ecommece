import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { ProductoInterface, BuscarProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public resultados: ProductoInterface[] = []
  constructor(private http: HttpClient) { }



  listaProductos():void {
    this.http.get<ProductoInterface[]>(environment.productoAPI).subscribe(res => {
      this.resultados = res
    })
  }
  listaProductosPorFiltro(formBody: BuscarProducto ) {
    this.http.post<ProductoInterface[]>(`${environment.productoAPI}/listarproductoasync/filtro`,formBody).subscribe(res => {
      this.resultados = res
    })
  }

  postCrearProducto(formBody: any){
    return this.http.post(`${environment.productoAPI}/CrearProducto`, formBody)
  }
  getDetalleProducto(id:number){
    return this.http.get<ProductoInterface>(`${environment.productoAPI}/ObtenerProducto/${id}`)
  }
  eliminarProducto(id:number){
    return this.http.delete(`${environment.productoAPI}/EliminarProducto/${id}`)
  }

}
