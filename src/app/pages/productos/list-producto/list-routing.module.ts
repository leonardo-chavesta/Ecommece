import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductoComponent } from './list-producto.component';

const routes: Routes = [{ path: '', component: ListProductoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListarProductoRoutingModule { }
