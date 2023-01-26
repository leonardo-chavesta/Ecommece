import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFacturaComponent } from '../modal-factura/modal-factura.component';



@NgModule({
  declarations: [ModalFacturaComponent],
  imports: [
    CommonModule
  ],
  exports:[ModalFacturaComponent]

})
export class ModalFacturaModule { }
