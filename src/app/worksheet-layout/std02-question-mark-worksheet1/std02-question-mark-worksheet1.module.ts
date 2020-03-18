import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02QuestionMarkWorksheet1Component } from './std02-question-mark-worksheet1.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02QuestionMarkWorksheet1Component }, 

];
@NgModule({
  declarations: [Std02QuestionMarkWorksheet1Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02QuestionMarkWorksheet1Module { }
