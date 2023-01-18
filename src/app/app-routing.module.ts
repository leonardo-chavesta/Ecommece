import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    loadChildren: () => 
        import('./pages/productos/list-producto/list-producto.module').then(m => m.ListProductoModule)
  },
  {
    path:'detalle/:id',
    loadChildren: () => import('./pages/productos/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoModule)
  },
  {
    path:'GenerarProducto',
    loadChildren: () => import('./pages/productos/crear-producto/crear-producto.module').then(m => m.CrearProductoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
