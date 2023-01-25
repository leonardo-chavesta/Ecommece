import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Carrito, ProductoInterface } from 'src/app/interfaces/producto.interface';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
})
export class DetalleProductoComponent implements OnInit {

  id!: number
  detalle!: ProductoInterface
  detalleCarrito!: Carrito
  validar: boolean = false
  constructor(
    private roter: ActivatedRoute,
    private productoSvc: ProductoService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.ObtenerDetalle()
  }
  ObtenerDetalle(): void {
    this.roter.params.pipe(take(1)).subscribe((params) => {
      this.id = params['id'];
      this.productoSvc.getDetalleProducto(this.id).subscribe((res: ProductoInterface) => {
        this.detalle = res
        console.log(this.verificarProductoUsuario(res))
        this.detalleCarrito = {
          Nombre: res.nombre,
          Descripcion: res.descripcion,
          Precio: res.precio,

        }
      })
    })
  }
  EliminarProducto(): void {
    this.roter.params.pipe(take(1)).subscribe((params) => {
      this.id = params['id'];
      this.productoSvc.eliminarProducto(this.id).subscribe(() => this.router.navigate(['home']))
    })
  }
  enviarProductoCarrito(): void {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!) ?? null
    if(localStore) {
      this.productoSvc.eviarCarrito(this.detalleCarrito).subscribe(() => this.router.navigate(['MiCarritoCompras']))
    }
    else{
      window.alert("Tiene Que Logear Primero")
      this.router.navigate(['/login'])
    }
  }

  verificarProductoUsuario(dato: any): boolean {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!) ?? null
    const idUsuario = localStore?.data?.id ?? null
    if (dato.idUsuario == idUsuario) return this.validar = true  
    return this.validar
  }
}
