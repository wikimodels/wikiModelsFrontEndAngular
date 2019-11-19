import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RibbonComponent } from './ribbon.component';

const routes: Routes = [
    { path: '', component: RibbonComponent },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RibbonRoutingModule { }