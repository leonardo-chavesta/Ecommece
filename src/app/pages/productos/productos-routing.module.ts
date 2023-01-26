import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'MiCarritoCompras',
        component:CarritoComprasComponent
      },
      {
        path:'GenerarProducto',
        component: CrearProductoComponent
      },
      {
        path:'detalle/:id',
        component:DetalleProductoComponent
      },
      {
        path:'ListMisProductos',
        component:MisProductosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
