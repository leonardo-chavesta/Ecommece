import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent implements OnInit  {

  miFormulario!: FormGroup

  

  constructor(
    private productoSvc: ProductoService,
    private fb: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.miFormulario = this.initForm()
  }
  onSubmit():void{
    this.productoSvc.postCrearProducto(this.miFormulario.value).subscribe(()=>this.router.navigate(['home']))
  }

  initForm():FormGroup{
    return this.fb.group({
      idCategoria: ['1'],
      nombre: [''],
      descripcion: [''],
      precio: ['']
    })
  }


}
