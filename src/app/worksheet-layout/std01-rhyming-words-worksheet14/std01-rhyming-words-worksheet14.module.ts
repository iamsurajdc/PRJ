import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet14RoutingModule } from './std01-rhyming-words-worksheet14-routing.module';

import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet14Component } from './std01-rhyming-words-worksheet14.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet14Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet14Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})

export class Std01RhymingWordsWorksheet14Module { }
