import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Article3Component } from './article3.component';
import { NgModule } from '@angular/core';

 

const routes: Routes = [
    { path: ':article_id', component: Article3Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRouting3Module { }