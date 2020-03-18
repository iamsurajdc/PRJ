import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02VocabularyWorksheet9Component } from './std02-vocabulary-worksheet9.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02VocabularyWorksheet9Component }, 

];
@NgModule({
  declarations: [Std02VocabularyWorksheet9Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02VocabularyWorksheet9Module { }
