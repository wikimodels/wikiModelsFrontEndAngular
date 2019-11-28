import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VideoPlayer2Component } from './video-player2.component';


 

const routes: Routes = [
    { path: ':video_id', component: VideoPlayer2Component },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRouting2Module {}