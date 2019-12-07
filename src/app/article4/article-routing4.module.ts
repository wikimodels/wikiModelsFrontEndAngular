import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Article4Component } from './article4.component';
import { NgModule } from '@angular/core';

 

const routes: Routes = [
    { path: ':article_id', component: Article4Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRouting4Module { }