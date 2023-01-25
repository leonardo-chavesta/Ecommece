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
  },
  {
    path:'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'perfil',
    loadChildren: () => import('./pages/auth/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path:'MiCarritoCompras',
    loadChildren: () => import('./pages/productos/carrito-compras/carrito-compras.module').then(m => m.CarritoComprasModule)
  },
  {
    path:'ListMisProductos',
    loadChildren: () => import('./pages/productos/mis-productos/mis-productos.module').then(m => m.MisProductosModule)
  },
  {
    path:'Register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
