import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ModelCardComponent } from './model-card/model-card.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import { Ribbon2Component } from './ribbon2/ribbon2.component';
import { VideoPlayer2Component } from './video-player2/video-player2.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent},
    { path: 'ribbon2', loadChildren: () => import('./../app/ribbon2/ribbon2.module').then(m => m.Ribbon2Module)},
    { path: 'ribbon3', loadChildren: () => import('./../app/ribbon3/ribbon3.module').then(m => m.Ribbon3Module)},
    { path: 'ribbon4', loadChildren: () => import('./../app/ribbon4/ribbon4.module').then(m => m.Ribbon4Module)},
    { path: 'video/:video_id', component: VideoPlayerComponent },
    { path: 'video2/:video_id', component: VideoPlayer2Component },

    { path: 'modelcard/:model_id', component: ModelCardComponent },
    { path: 'article', loadChildren: () => import('./../app/article/article.module').then(m => m.ArticleModule)},
    { path: 'article2', loadChildren: () => import('./../app/article2/article2.module').then(m => m.Article2Module)},
    { path: 'article3', loadChildren: () => import('./../app/article3/article3.module').then(m => m.Article3Module)},
    { path: 'video', loadChildren: () => import('./../app/video-player/video-player.module').then(m => m.VideoPlayerModule)},
    { path: 'video2', loadChildren: () => import('./../app/video-player2/video-player2.module').then(m => m.VideoPlayer2Module)},
    { path: 'error', component: ServerErrorComponent },    
    { path: '**', pathMatch : 'full', component: NotFoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}



