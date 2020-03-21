import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CollectiveNounWorksheet2Component} from './std03-collective-noun-worksheet2.component'
const routes: Routes = [
  { path: '', component: Std03CollectiveNounWorksheet2Component }, 

];
@NgModule({
  declarations: [Std03CollectiveNounWorksheet2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CollectiveNounWorksheet2Module { }
