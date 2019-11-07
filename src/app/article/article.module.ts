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

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule,      
    LayoutModule,
    SharedModule,
    ArticleRoutingModule

  ],
  exports: [
    ArticleComponent,
    ArticleVideoComponent,
    ArticleMusicComponent,
    ArticleHeaderComponent,
    ArticleSectionComponent,
    ArticlePictureComponent
  ]
})
export class ArticleModule { }
