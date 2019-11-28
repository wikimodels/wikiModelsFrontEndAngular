import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service';
import { Slider2Component } from './slider2/slider2.component';
import { VideoPlayer2Component } from './video-player2.component';
import { Slider2Service } from './slider2.service';
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
        Slider2Component,
        VideoPlayer2Component 
    ],
    exports: [
        Slider2Component,
        VideoPlayer2Component
    ],
    providers: [Slider2Service]
})

export class VideoPlayer2Module {}
