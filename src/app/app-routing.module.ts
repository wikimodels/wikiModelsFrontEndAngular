import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ModelCardComponent } from './model-card/model-card.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    // { path: 'article/:article_id', component: ArticleComponent },
    { path: 'video/:video_id', component: VideoPlayerComponent },
    { path: 'modelcard/:model_id', component: ModelCardComponent },
    {path: 'article', loadChildren: () => import('./../app/article/article.module').then(m => m.ArticleModule)}     
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}



