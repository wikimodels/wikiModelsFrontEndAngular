import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { NgModule } from '@angular/core';

 

const routes: Routes = [
    { path: ':article_id', component: ArticleComponent },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }