import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { TileComponent } from './shared/tile/tile.component';
import { ModelCardComponent } from './model-card/model-card.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent},
    { path: 'home', component: HomeComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'video/:videoId', component: VideoPlayerComponent },
    { path: 'modelcard/:modelId', component: ModelCardComponent },

    // {path: 'training', component: TrainingComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

