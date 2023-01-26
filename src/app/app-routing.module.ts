import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductoComponent } from './pages/productos/list-producto/list-producto.component';

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
    path:'home',
    loadChildren: () => 
        import('./pages/productos/productos.module').then(m => m.ProductosModule)
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
    path:'Register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
