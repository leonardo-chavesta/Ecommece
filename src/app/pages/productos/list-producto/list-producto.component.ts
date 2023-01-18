import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoInterface } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html'
})
export class ListProductoComponent implements OnInit{
   data!: ProductoInterface[]
  constructor(private productoSvc: ProductoService){}
  
  get resuls(){ return this.productoSvc.resultados }
  
  ngOnInit(): void {
    this.productoSvc.listaProductos()
  }
  


}
