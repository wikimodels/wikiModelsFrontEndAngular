import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';

import { SliderService } from './video-player/slider.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { VideoPlayerComponent } from './video-player/video-player.component';
import { SliderComponent } from './video-player/slider/slider.component';
import { ModelCardComponent } from './model-card/model-card.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RibbonSectionComponent } from './ribbon/ribbon-section/ribbon-section.component';
import { RibbonTilesComponent } from './ribbon/ribbon-tiles/ribbon-tiles.component';
import { RibbonLazyTilesComponent } from './ribbon/ribbon-lazy-tiles/ribbon-lazy-tiles.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,  
    VideoPlayerComponent,
    SliderComponent,
    ModelCardComponent,
    RibbonComponent,
    RibbonSectionComponent,
    RibbonTilesComponent,
    RibbonLazyTilesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    ArticleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
