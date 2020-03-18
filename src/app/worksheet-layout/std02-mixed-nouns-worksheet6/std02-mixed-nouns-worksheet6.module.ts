import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedNounsWorksheet6Component } from './std02-mixed-nouns-worksheet6.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedNounsWorksheet6Component }, 

];
@NgModule({
  declarations: [Std02MixedNounsWorksheet6Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedNounsWorksheet6Module { }
