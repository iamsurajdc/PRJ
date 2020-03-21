import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Std03CommonNounWorksheet1Component} from './std03-common-noun-worksheet1.component'
const routes: Routes = [
  { path: '', component: Std03CommonNounWorksheet1Component }, 

];
@NgModule({
  declarations: [Std03CommonNounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Std03CommonNounWorksheet1Module { }
