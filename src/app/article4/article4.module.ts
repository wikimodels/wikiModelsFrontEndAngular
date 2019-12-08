import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';

import { Article4Component } from './article4.component';
import { ArticleVideo4Component } from './article-video4/article-video4.component';
import { ArticleMusic4Component } from './article-music4/article-music4.component';
import { ArticleHeader4Component } from './article-header4/article-header4.component';
import { ArticleSection4Component } from './article-section4/article-section4.component';
import { ArticlePicture4Component } from './article-picture4/article-picture4.component';
import { ArticleRouting4Module } from './article-routing4.module';
import { ArticleLazyPicture4Component } from './article-lazy-picture4/article-lazy-picture4.component';
import { ArticleBanner4Component } from './article-banner4/article-banner4.component';
import { ArticleLazyBanner4Component } from './article-lazy-banner4/article-lazy-banner4.component';
import { ArticleText4Component } from './article-text4/article-text4.component';
import { ArticleCarousel4Component } from './article-carousel4/article-carousel4.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArticleBottomSheet4Component } from './article-bottom-sheet4/article-bottom-sheet4.component';
import { WINDOW_PROVIDERS } from '../window.providers';
import { ArticleFooterComponent } from './article-footer/article-footer.component';


@NgModule({
  declarations: [
    Article4Component,
    ArticleBanner4Component,
    ArticleLazyBanner4Component,
    ArticleText4Component,
    ArticleVideo4Component,
    ArticleCarousel4Component,
    ArticleMusic4Component,
    ArticleHeader4Component,
    ArticleSection4Component,
    ArticlePicture4Component,
    ArticleLazyPicture4Component,
    ArticleBottomSheet4Component,
    ArticleFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarouselModule,
    LayoutModule,
    SharedModule,
    ArticleRouting4Module,
    LazyLoadImageModule,
  ],
  exports: [
    Article4Component,
    ArticleVideo4Component,
    ArticleMusic4Component,
    ArticleHeader4Component,
    ArticleSection4Component,
    ArticleCarousel4Component,
    ArticlePicture4Component,
    ArticleBanner4Component,
    ArticleLazyBanner4Component,
    ArticleText4Component,
    ArticleBottomSheet4Component,
    ArticleLazyPicture4Component,
    ArticleFooterComponent
  ],
  entryComponents: [
    ArticleBottomSheet4Component
  ],
  providers: [
    WINDOW_PROVIDERS
  ]
})
export class Article4Module { }
