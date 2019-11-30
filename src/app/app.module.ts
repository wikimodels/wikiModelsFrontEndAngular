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
import { Article2Module } from './article2/article2.module';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ModelCardComponent } from './model-card/model-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RibbonModule } from './ribbon/ribbon.module';
import { Ribbon2Module } from './ribbon2/ribbon2.module';
import { Ribbon3Module } from './ribbon3/ribbon3.module';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { VideoPlayer2Module } from './video-player2/video-player2.module';
import { VideoPlayerModule } from './video-player/video-player.module';
import { Article3Module } from './article3/article3.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
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
    SharedModule,
    ArticleModule,
    Article2Module,
    Article3Module,
    RibbonModule,
    Ribbon2Module,
    Ribbon3Module,
    ErrorHandlerModule,
    LazyLoadImageModule,
    VideoPlayerModule,
    VideoPlayer2Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  // entryComponents: [TestSnackbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
