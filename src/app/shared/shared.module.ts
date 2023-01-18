import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { CargasComponent } from './cargas/cargas.component';



@NgModule({
  declarations: [HeaderComponent, LoadingComponent, CargasComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, LoadingComponent, CargasComponent]
})
export class SharedModule { }
