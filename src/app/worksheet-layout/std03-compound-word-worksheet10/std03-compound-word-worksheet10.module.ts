import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CompoundWordWorksheet10Component} from './std03-compound-word-worksheet10.component'
const routes: Routes = [
  { path: '', component: Std03CompoundWordWorksheet10Component }, 

];
@NgModule({
  declarations: [Std03CompoundWordWorksheet10Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CompoundWordWorksheet10Module { }
