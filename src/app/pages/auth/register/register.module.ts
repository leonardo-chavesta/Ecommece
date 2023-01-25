import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';


@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo Requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
