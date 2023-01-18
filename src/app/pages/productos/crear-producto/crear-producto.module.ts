import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearProductoRoutingModule } from './crear-producto-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearProductoComponent } from './crear-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CrearProductoRoutingModule
  ]
})
export class CrearProductoModule { }
