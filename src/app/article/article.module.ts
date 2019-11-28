import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';

import { ArticleComponent } from './article.component';

import { ArticleVideoComponent } from './article-video/article-video.component';
import { ArticleMusicComponent } from './article-music/article-music.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleSectionComponent } from './article-section/article-section.component';
import { ArticlePictureComponent } from './article-picture/article-picture.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleLazyPictureComponent } from './article-lazy-picture/article-lazy-picture.component';
import { ArticleTextComponent } from './article-text/article-text.component';
import { ArticleLazyBannerComponent } from './article-lazy-banner/article-lazy-banner.component';
import { ArticleBannerComponent } from './article-banner/article-banner.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleBannerComponent,
    ArticleLazyBannerComponent,
    ArticleTextComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent,
    ArticleLazyPictureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    SharedModule,
    ArticleRoutingModule,
    LazyLoadImageModule

  ],
  exports: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleBannerComponent,
    ArticleLazyBannerComponent,
    ArticleTextComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent,
    ArticleLazyPictureComponent 
  ]
})
export class ArticleModule { }
