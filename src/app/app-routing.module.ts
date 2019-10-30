import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'article', component: ArticleComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'training', component: TrainingComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

