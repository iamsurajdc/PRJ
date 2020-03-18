import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std02HelpingVerbsWorksheet4Component } from './std02-helping-verbs-worksheet4.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: Std02HelpingVerbsWorksheet4Component }, 

];
@NgModule({
  declarations: [Std02HelpingVerbsWorksheet4Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class Std02HelpingVerbsWorksheet4Module { }
