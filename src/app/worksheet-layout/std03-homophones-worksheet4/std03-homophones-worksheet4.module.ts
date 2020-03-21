import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03HomophonesWorksheet4Component} from './std03-homophones-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03HomophonesWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03HomophonesWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03HomophonesWorksheet4Module { }
