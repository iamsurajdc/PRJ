import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03MixedTenseWorksheet2Component} from './std03-mixed-tense-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03MixedTenseWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03MixedTenseWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03MixedTenseWorksheet2Module { }
