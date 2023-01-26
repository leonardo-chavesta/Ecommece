import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisProductosComponent } from './mis-productos.component';

const routes: Routes = [{path:'', component:MisProductosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisProductosRoutingModule { }
