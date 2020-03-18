import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02VocabularyWorksheet3Component } from './std02-vocabulary-worksheet3.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02VocabularyWorksheet3Component }, 

];
@NgModule({
  declarations: [Std02VocabularyWorksheet3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02VocabularyWorksheet3Module { }
