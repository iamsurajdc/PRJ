import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SynonymsWorksheet3RoutingModule } from './std03-synonyms-worksheet3-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std03SynonymsWorksheet3Component } from './std03-synonyms-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SynonymsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std03SynonymsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SynonymsWorksheet3Module { }
