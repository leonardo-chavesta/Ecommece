import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ModalFacturaComponent } from './modal-factura/modal-factura.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { MisProductosComponent } from './mis-productos/mis-productos.component';


@NgModule({
  declarations: [
    CarritoComprasComponent,
    ModalFacturaComponent,
    CrearProductoComponent,
    DetalleProductoComponent,
    MisProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
