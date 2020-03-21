import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet2Component} from './std03-homophones-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet2Module { }
