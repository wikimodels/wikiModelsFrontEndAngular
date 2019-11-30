import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Ribbon3Component } from './ribbon3.component';

const routes: Routes = [
    { path: '', component: Ribbon3Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RibbonRouting3Module { }