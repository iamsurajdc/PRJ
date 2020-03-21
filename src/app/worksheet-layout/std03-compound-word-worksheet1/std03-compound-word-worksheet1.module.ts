import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet1Component} from './std03-compound-word-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet1Module { }
