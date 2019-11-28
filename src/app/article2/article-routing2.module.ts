import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Article2Component } from './article2.component';
import { NgModule } from '@angular/core';

 

const routes: Routes = [
    { path: ':article_id', component: Article2Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRouting2Module { }