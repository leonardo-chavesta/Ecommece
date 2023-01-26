import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComprasRoutingModule } from './carrito-compras-routing.module';
import { CarritoComprasComponent } from './carrito-compras.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CarritoComprasComponent
  ],
  imports: [
    CommonModule,
    CarritoComprasRoutingModule,
    SharedModule,
  ]
})
export class CarritoComprasModule { }
