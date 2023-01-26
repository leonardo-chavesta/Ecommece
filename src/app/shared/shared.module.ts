import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';
import { CargasComponent } from './cargas/cargas.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalFacturaComponent } from './modal-factura/modal-factura.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    CargasComponent,
    FooterComponent,
    ModalFacturaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    CargasComponent,
    FooterComponent,
    ModalFacturaComponent]
})
export class SharedModule { }
