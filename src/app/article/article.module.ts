import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { ArticleComponent } from './article.component';
import { ArticleVideoComponent } from './article-video/article-video.component';
import { ArticleMusicComponent } from './article-music/article-music.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleSectionComponent } from './article-section/article-section.component';
import { MaterialModule } from '../material.module';
import { ArticlePictureComponent } from './article-picture/article-picture.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleLazyPictureComponent } from './article-lazy-picture/article-lazy-picture.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent,
    ArticleLazyPictureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule,      
    LayoutModule,
    SharedModule,
    ArticleRoutingModule,
    LazyLoadImageModule

  ],
  exports: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent,
    ArticleLazyPictureComponent
  ]
})
export class ArticleModule { }
