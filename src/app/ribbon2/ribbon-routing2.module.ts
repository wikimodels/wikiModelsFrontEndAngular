import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Ribbon2Component } from './ribbon2.component';

const routes: Routes = [
    { path: '', component: Ribbon2Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RibbonRouting2Module { }