import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ModelCardComponent } from './model-card/model-card.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ServerErrorComponent } from './shared/components/server-error/server-error.component';
import { Ribbon2Component } from './ribbon2/ribbon2.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent},
    { path: 'ribbon2', loadChildren: () => import('./../app/ribbon2/ribbon2.module').then(m => m.Ribbon2Module)},
    { path: 'video/:video_id', component: VideoPlayerComponent },
    { path: 'modelcard/:model_id', component: ModelCardComponent },
    { path: 'article', loadChildren: () => import('./../app/article/article.module').then(m => m.ArticleModule)},
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



