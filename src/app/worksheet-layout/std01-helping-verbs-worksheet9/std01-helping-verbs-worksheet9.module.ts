import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01HelpingVerbsWorksheet9RoutingModule } from './std01-helping-verbs-worksheet9-routing.module';


import { RouterModule, Routes } from "@angular/router";
import { Std01HelpingVerbsWorksheet9Component } from './std01-helping-verbs-worksheet9.component';

const routes: Routes = [
    {
        path: "",
        component: Std01HelpingVerbsWorksheet9Component
    }
];

@NgModule({
    declarations: [Std01HelpingVerbsWorksheet9Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01HelpingVerbsWorksheet9Module { }
