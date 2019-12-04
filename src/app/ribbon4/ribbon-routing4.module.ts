import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Ribbon4Component } from './ribbon4.component';

const routes: Routes = [
    { path: '', component: Ribbon4Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RibbonRouting4Module { }