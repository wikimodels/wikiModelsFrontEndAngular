import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DynamicScriptLoaderService } from './shared/dynamic-script-loader.service';
import { ArticleComponent } from './article/article.component';
import { ArticleVideoComponent } from './article/article-video/article-video.component';
import { ArticleMusicComponent } from './article/article-music/article-music.component';
import { ArticleHeaderComponent } from './article/article-header/article-header.component';
import { SafeHTMLPipe } from './shared/safe-html.pipe';
import { ArticleTextComponent } from './article/article-text/article-text.component';
import { ArticleBannerComponent } from './article/article-banner/article-banner.component';
import { ArticleSectionComponent } from './article/article-section/article-section.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SliderComponent } from './video-player/slider/slider.component';
import { YoutubePipe } from './video-player/youtube.pipe';
import { FormsModule } from '@angular/forms';
import { SliderService } from './video-player/slider.service';
import { ModelCardComponent } from './model-card/model-card.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    SafeHTMLPipe,
    ArticleTextComponent,
    ArticleBannerComponent,
    ArticleSectionComponent,
    VideoPlayerComponent,
    SliderComponent,
    YoutubePipe,
    ModelCardComponent
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
  providers: [DynamicScriptLoaderService, SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
