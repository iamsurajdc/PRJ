import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Std01RhymingWordsWorksheet3RoutingModule } from './std01-rhyming-words-worksheet3-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { Std01RhymingWordsWorksheet3Component } from './std01-rhyming-words-worksheet3.component';

const routes: Routes = [
    {
        path: "",
        component: Std01RhymingWordsWorksheet3Component
    }
];

@NgModule({
    declarations: [Std01RhymingWordsWorksheet3Component],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Std01RhymingWordsWorksheet3Module { }
