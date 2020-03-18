import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02PrepositionsWorksheet3Component } from './std02-prepositions-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02PrepositionsWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02PrepositionsWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02PrepositionsWorksheet3Module { }
