import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01CollectiveNounWorksheet7RoutingModule } from './std01-collective-noun-worksheet7-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { Std01CollectiveNounWorksheet7Component } from './std01-collective-noun-worksheet7.component';


const routes: Routes = [
  {
    path: "",
    component: Std01CollectiveNounWorksheet7Component
  }
]

@NgModule({
  declarations: [Std01CollectiveNounWorksheet7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Std01CollectiveNounWorksheet7Module { }
