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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RibbonModule } from './ribbon/ribbon.module';
import { Ribbon2Module } from './ribbon2/ribbon2.module';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { TestSnackbarComponent } from './ribbon2/test-snackbar/test-snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,  
    VideoPlayerComponent,
    SliderComponent,
    ModelCardComponent,
    TestSnackbarComponent     
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
    RibbonModule,
    Ribbon2Module,
    ErrorHandlerModule,
    LazyLoadImageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  entryComponents: [TestSnackbarComponent],
  providers: [SliderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
