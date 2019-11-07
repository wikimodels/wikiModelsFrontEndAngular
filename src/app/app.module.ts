import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { SliderService } from './video-player/slider.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleVideoComponent } from './article/article-video/article-video.component';
import { ArticleMusicComponent } from './article/article-music/article-music.component';
import { ArticleHeaderComponent } from './article/article-header/article-header.component';
import { ArticleSectionComponent } from './article/article-section/article-section.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SliderComponent } from './video-player/slider/slider.component';
import { ModelCardComponent } from './model-card/model-card.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { RibbonSectionComponent } from './ribbon/ribbon-section/ribbon-section.component';
import { RibbonTilesComponent } from './ribbon/ribbon-tiles/ribbon-tiles.component';
import { ArticlePictureComponent } from './article/article-picture/article-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,   
    ArticleSectionComponent,
    VideoPlayerComponent,
    SliderComponent,
    ModelCardComponent,
    RibbonComponent,
    RibbonSectionComponent,
    RibbonTilesComponent,
    ArticlePictureComponent
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
    SharedModule
  ],
  exports: [],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
