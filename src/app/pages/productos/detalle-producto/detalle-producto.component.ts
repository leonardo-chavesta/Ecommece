import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductoInterface } from 'src/app/interfaces/producto.interface';
import { ProductoService } from '../../../services/producto.service';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
})
export class DetalleProductoComponent implements OnInit{
 
  id! : number
  detalle!: ProductoInterface 
  constructor(
    private roter: ActivatedRoute,
    private productoSvc: ProductoService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.ObtenerDetalle()
  }

  ObtenerDetalle(): void{
    this.roter.params.pipe(take(1)).subscribe((params)=>{
      this.id = params['id'];
      this.productoSvc.getDetalleProducto(this.id).subscribe((res: ProductoInterface) => {
        this.detalle = res
      })
    })
  }
  EliminarProducto(): void{
    this.roter.params.pipe(take(1)).subscribe((params)=>{
      this.id = params['id'];
      this.productoSvc.eliminarProducto(this.id).subscribe(()=>this.router.navigate(['home']))
    })
  }
  EditarProducto():void{
    
  }

  
}
