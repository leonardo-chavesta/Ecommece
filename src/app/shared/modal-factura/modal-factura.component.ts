import { Component,  OnInit } from '@angular/core';
import { CarritoProductosInterface } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-modal-factura',
  templateUrl: './modal-factura.component.html',
})
export class ModalFacturaComponent implements OnInit {
  resultadoDato: CarritoProductosInterface[] = this.resustadoCarrito
  fecha = new Date().toLocaleDateString()

  private localStore = JSON.parse(localStorage.getItem('ApplicationData')!)
  private idUsuario = this.localStore?.data?.id
  constructor(private readonly productoSvc: ProductoService) { }

  get resustadoCarrito(){return this.productoSvc.resultadoCarrito}
  get resultadoSubTotal(){return this.productoSvc.subTotal}
  get resultadoIgv(){return this.productoSvc.IGV}
  get resultadoTotal(){return this.productoSvc.total}



  ngOnInit(): void {
    this.productoSvc.listaCarritoProducto(this.idUsuario)
  
  }




  
}
