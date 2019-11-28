import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { SliderComponent } from './slider/slider.component';
import { VideoPlayerComponent } from './video-player.component';
import { SliderService } from './slider.service';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
 
 
@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        CommonModule,
        LayoutModule,
        SharedModule,
        FlexLayoutModule
    ],
    declarations: [
        SliderComponent,
        VideoPlayerComponent 
    ],
    exports: [
        SliderComponent,
        VideoPlayerComponent
    ],
    providers: [SliderService]
})

export class VideoPlayerModule {}
