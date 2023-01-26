import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuscarProducto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  verific: boolean = false;
  miFormulario!: FormGroup;
  datosEnviarFiltro!: BuscarProducto
  constructor(private fb: FormBuilder, private productoSvc: ProductoService) { }
  get resuls() { return this.productoSvc.resultados }
  ngOnInit(): void {
    this.miFormulario = this.initForm();
    this.verificAutentificacion();
  }

  verificAutentificacion(): boolean {
    const localStore = JSON.parse(localStorage.getItem('ApplicationData')!);
    if (localStore) {
      if (localStore.isSuccess) return (this.verific = true);
    }
    return (this.verific = false);
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      categoria: [''],
    });
  }

  peticionPorFiltro(): BuscarProducto {
    return this.datosEnviarFiltro = {
      filtro: {
        nombre: this.miFormulario.value.nombre,
        categoria: this.miFormulario.value.categoria
      }
    };
  }


  enviarDatos(): void {
    this.productoSvc.listaProductosPorFiltro(this.peticionPorFiltro())
  }
}
