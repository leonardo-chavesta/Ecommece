import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductoRoutingModule } from './list-routing.module';
import { ListProductoComponent } from './list-producto.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListProductoComponent
  ],
  imports: [
    ListarProductoRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ListProductoModule { }
