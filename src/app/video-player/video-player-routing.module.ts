import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { VideoPlayerComponent } from './video-player.component';


 

const routes: Routes = [
    { path: ':video_id', component: VideoPlayerComponent },
     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule {}