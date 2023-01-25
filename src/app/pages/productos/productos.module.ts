import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
