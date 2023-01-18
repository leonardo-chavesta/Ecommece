import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleProductoComponent } from './detalle-producto.component';



@NgModule({
  declarations: [
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleProductoModule { }
