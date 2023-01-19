import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthInterface } from '../../../interfaces/auth.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  resulForm!: AuthInterface
  verif: boolean = true

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authSvc: AuthService
  ) { }
  ngOnInit(): void {
    this.loginForm = this.intiForm()
  }
  onSubmit(): void {
    this.authSvc.autentificarLogin(this.loginForm.value).subscribe((res: any) => {
      this.resulForm = res
      if (this.resulForm.message == 'Token generado correctamente.') {
        localStorage.setItem('ApplicationData', JSON.stringify(this.resulForm))
        this.verif = true
        window.location.href = '/home'
        
      }else{
        this.verif = false
      }
    })
  }
  intiForm(): FormGroup {
    return this.fb.group({
      correo: [''],
      contrasenia: ['']
    })
  }
}
