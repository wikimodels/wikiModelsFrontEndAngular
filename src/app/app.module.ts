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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule 
  ],
  providers: [DynamicScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
