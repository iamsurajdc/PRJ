import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03DegressOfComparisonWorksheet1Component} from './std03-degress-of-comparison-worksheet1.component'
const routes: Routes = [
  { path: '', component:Std03DegressOfComparisonWorksheet1Component  }, 

];
@NgModule({
  declarations: [Std03DegressOfComparisonWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03DegressOfComparisonWorksheet1Module { }
