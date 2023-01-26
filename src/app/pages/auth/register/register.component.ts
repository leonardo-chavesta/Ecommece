import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from 'src/app/interfaces/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles:[]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  resulForm!: AuthInterface
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.registerForm = this.intiForm()
  }

  onSubmit():void{
    this.authSvc.registrarUsuario(this.registerForm.value).subscribe((res: any) => {
      this.resulForm = res
      if(this.resulForm.isSuccess){
        window.alert("Registro Completo")
        this.router.navigate(['/login']) 
      }
      else window.alert(`Error al registrarse ${this.resulForm.message}` )  
    })
  }
  intiForm(): FormGroup {
    return this.fb.group({
      nombre: ['',Validators.required],
      correo: ['',Validators.required],
      contrasenia: ['',Validators.required],
      direccion: ['',Validators.required],
      telefono: ['',Validators.required],
      fechaNacimiento: ['',Validators.required],
      idRoles: [1]
    })
  }
}
