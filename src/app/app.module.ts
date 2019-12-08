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


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ModelCardComponent } from './model-card/model-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ArticleModule } from './article/article.module';
import { Article2Module } from './article2/article2.module';
import { Article3Module } from './article3/article3.module';
import { Article4Module } from './article4/article4.module';

import { RibbonModule } from './ribbon/ribbon.module';
import { Ribbon2Module } from './ribbon2/ribbon2.module';
import { Ribbon3Module } from './ribbon3/ribbon3.module';
import { Ribbon4Module } from './ribbon4/ribbon4.module';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { VideoPlayer2Module } from './video-player2/video-player2.module';
import { VideoPlayerModule } from './video-player/video-player.module';

// import { Article4Component } from './article4/article4.component';
// import { ArticleVideo4Component } from './article4/article-video4/article-video4.component';
// import { ArticleMusic4Component } from './article4/article-music4/article-music4.component';
// import { ArticleHeader4Component } from './article4/article-header4/article-header4.component';
// import { ArticleSection4Component } from './article4/article-section4/article-section4.component';
// import { ArticleCarousel4Component } from './article4/article-carousel4/article-carousel4.component';
// import { ArticlePicture4Component } from './article4/article-picture4/article-picture4.component';
// import { ArticleBanner4Component } from './article4/article-banner4/article-banner4.component';
// import { ArticleLazyBanner4Component } from './article4/article-lazy-banner4/article-lazy-banner4.component';
// import { ArticleText4Component } from './article4/article-text4/article-text4.component';
// import { ArticleLazyPicture4Component } from './article4/article-lazy-picture4/article-lazy-picture4.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModelCardComponent,
    // FooterComponent,
    // Article4Component,
    // ArticleVideo4Component,
    // ArticleMusic4Component,
    // ArticleHeader4Component,
    // ArticleSection4Component,
    // ArticleCarousel4Component,
    // ArticlePicture4Component,
    // ArticleBanner4Component,
    // ArticleLazyBanner4Component,
    // ArticleText4Component,
    // ArticleLazyPicture4Component,
    
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
    Article2Module,
    Article3Module,
    Article4Module,
    RibbonModule,
    Ribbon2Module,
    Ribbon3Module,
    Ribbon4Module,
    ErrorHandlerModule,
    LazyLoadImageModule,
    VideoPlayerModule,
    VideoPlayer2Module,
    CarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  // entryComponents: [TestSnackbarComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
