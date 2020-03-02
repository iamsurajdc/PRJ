import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupComponent } from 'src/app/signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
