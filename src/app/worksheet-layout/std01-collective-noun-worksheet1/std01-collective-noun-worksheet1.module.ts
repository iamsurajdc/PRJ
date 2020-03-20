import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet1RoutingModule } from './std01-collective-noun-worksheet1-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet1Component } from './std01-collective-noun-worksheet1.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet1Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet1Module { }
