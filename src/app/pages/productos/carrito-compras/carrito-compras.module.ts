import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComprasRoutingModule } from './carrito-compras-routing.module';
import { CarritoComprasComponent } from './carrito-compras.component';


@NgModule({
  declarations: [
    CarritoComprasComponent
  ],
  imports: [
    CommonModule,
    CarritoComprasRoutingModule
  ]
})
export class CarritoComprasModule { }
