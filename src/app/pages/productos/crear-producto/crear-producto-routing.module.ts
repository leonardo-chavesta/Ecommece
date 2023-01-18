import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto.component';

const routes: Routes = [{ path: '', component: CrearProductoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrearProductoRoutingModule { }
