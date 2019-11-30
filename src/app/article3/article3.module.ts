import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';

import { Article3Component } from './article3.component';
import { ArticleVideo3Component } from './article-video3/article-video3.component';
import { ArticleMusic3Component } from './article-music3/article-music3.component';
import { ArticleHeader3Component } from './article-header3/article-header3.component';
import { ArticleSection3Component } from './article-section3/article-section3.component';
import { ArticlePicture3Component } from './article-picture3/article-picture3.component';
import { ArticleRouting3Module } from './article-routing3.module';
import { ArticleLazyPicture3Component } from './article-lazy-picture3/article-lazy-picture3.component';
import { ArticleBanner3Component } from './article-banner3/article-banner3.component';
import { ArticleLazyBanner3Component } from './article-lazy-banner3/article-lazy-banner3.component';
import { ArticleText3Component } from './article-text3/article-text3.component';

@NgModule({
  declarations: [
    Article3Component,
    ArticleBanner3Component,
    ArticleLazyBanner3Component,
    ArticleText3Component,
    ArticleVideo3Component,
    ArticleMusic3Component,
    ArticleHeader3Component,
    ArticleSection3Component,
    ArticlePicture3Component,
    ArticleLazyPicture3Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    ArticleRouting3Module,
    LazyLoadImageModule

  ],
  exports: [
    Article3Component,
    ArticleVideo3Component,
    ArticleMusic3Component,
    ArticleHeader3Component,
    ArticleSection3Component,
    ArticlePicture3Component,
    ArticleBanner3Component,
    ArticleLazyBanner3Component,
    ArticleText3Component,
    ArticleLazyPicture3Component 
  ]
})
export class Article3Module { }
