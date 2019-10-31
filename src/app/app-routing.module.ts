import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'video/:videoId', component: VideoPlayerComponent},
    // {path: 'training', component: TrainingComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

