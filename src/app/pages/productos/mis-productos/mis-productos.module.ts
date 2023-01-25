import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisProductosRoutingModule } from './mis-productos-routing.module';
import { MisProductosComponent } from './mis-productos.component';


@NgModule({
  declarations: [
    MisProductosComponent],
  imports: [
    CommonModule,
    MisProductosRoutingModule
  ]
})
export class MisProductosModule { }
