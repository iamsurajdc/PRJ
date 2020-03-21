import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03AntonymsWorksheet4Component} from './std03-antonyms-worksheet4.component'
const routes: Routes = [
  { path: '', component: Std03AntonymsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std03AntonymsWorksheet4Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03AntonymsWorksheet4Module { }
