import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { CargasComponent } from './cargas/cargas.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, LoadingComponent, CargasComponent, FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, LoadingComponent, CargasComponent, FooterComponent]
})
export class SharedModule { }
