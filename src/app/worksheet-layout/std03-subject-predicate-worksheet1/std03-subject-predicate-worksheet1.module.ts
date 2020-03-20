import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std03SubjectPredicateWorksheet1RoutingModule } from './std03-subject-predicate-worksheet1-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std03SubjectPredicateWorksheet1Component } from './std03-subject-predicate-worksheet1.component';

const routes: Routes = [
    {
        path: "",
        component: Std03SubjectPredicateWorksheet1Component
    }
];

@NgModule({
    declarations: [Std03SubjectPredicateWorksheet1Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std03SubjectPredicateWorksheet1Module { }
