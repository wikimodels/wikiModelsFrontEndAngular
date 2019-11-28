import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';

import { Article2Component } from './article2.component';
import { ArticleVideo2Component } from './article-video2/article-video2.component';
import { ArticleMusic2Component } from './article-music2/article-music2.component';
import { ArticleHeader2Component } from './article-header2/article-header2.component';
import { ArticleSection2Component } from './article-section2/article-section2.component';
import { ArticlePicture2Component } from './article-picture2/article-picture2.component';
import { ArticleRouting2Module } from './article-routing2.module';
import { ArticleLazyPicture2Component } from './article-lazy-picture2/article-lazy-picture2.component';
import { ArticleBanner2Component } from './article-banner2/article-banner2.component';
import { ArticleLazyBanner2Component } from './article-lazy-banner2/article-lazy-banner2.component';
import { ArticleText2Component } from './article-text2/article-text2.component';

@NgModule({
  declarations: [
    Article2Component,
    ArticleBanner2Component,
    ArticleLazyBanner2Component,
    ArticleText2Component,
    ArticleVideo2Component,
    ArticleMusic2Component,
    ArticleHeader2Component,
    ArticleSection2Component,
    ArticlePicture2Component,
    ArticleLazyPicture2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    ArticleRouting2Module,
    LazyLoadImageModule

  ],
  exports: [
    Article2Component,
    ArticleVideo2Component,
    ArticleMusic2Component,
    ArticleHeader2Component,
    ArticleSection2Component,
    ArticlePicture2Component,
    ArticleBanner2Component,
    ArticleLazyBanner2Component,
    ArticleText2Component,
    ArticleLazyPicture2Component 
  ]
})
export class Article2Module { }
