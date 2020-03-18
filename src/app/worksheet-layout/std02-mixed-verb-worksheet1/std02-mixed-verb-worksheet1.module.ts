import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02MixedVerbWorksheet1Component } from './std02-mixed-verb-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02MixedVerbWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02MixedVerbWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02MixedVerbWorksheet1Module { }
