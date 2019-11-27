import { RibbonRouting2Module } from './ribbon-routing2.module';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ribbon2Component } from './ribbon2.component';
import { RibbonSection2Component } from './ribbon-section2/ribbon-section2.component';
import { RibbonTile2Component } from './ribbon-tiles2/ribbon-tile2/ribbon-tile2.component';
import { RibbonTiles2Component } from './ribbon-tiles2/ribbon-tiles2.component';
import { RibbonHeader2Component } from './ribbon-header2/ribbon-header2.component';
import { RibbonText2Component } from './ribbon-text2/ribbon-text2.component';
import { RibbonBanner2Component } from './ribbon-banner2/ribbon-banner2.component';
import { RibbonLazyBanner2Component } from './ribbon-lazy-banner2/ribbon-lazy-banner2.component';
import { RibbonPicture2Component } from './ribbon-picture2/ribbon-picture2.component';
import { RibbonLazyPicture2Component } from './ribbon-lazy-picture2/ribbon-lazy-picture2.component';
import { RibbonFooter2Component } from './ribbon-footer2/ribbon-footer2.component';
import { RibbonLazyTiles2Component } from './ribbon-lazy-tiles2/ribbon-lazy-tiles2.component';
import { RibbonLazyTile2Component } from './ribbon-lazy-tiles2/ribbon-lazy-tile2/ribbon-lazy-tile2.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
     
    Ribbon2Component,
    RibbonSection2Component,
    RibbonLazyTile2Component,
    RibbonLazyTiles2Component,
    RibbonHeader2Component,
    RibbonText2Component,
    RibbonBanner2Component,
    RibbonLazyBanner2Component,
    RibbonTile2Component,
    RibbonTiles2Component,
    RibbonPicture2Component,
    RibbonLazyPicture2Component,
    RibbonFooter2Component,
  ],
  imports: [     
    CommonModule,
    MaterialModule,
    RouterModule,
    RibbonRouting2Module,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,    
    LazyLoadImageModule,
    SharedModule
  ],
  exports: [
    Ribbon2Component,
    RibbonSection2Component,
    RibbonTiles2Component,
    RibbonLazyTiles2Component,
    RibbonLazyTile2Component,
    RibbonHeader2Component,
    RibbonText2Component,
    RibbonBanner2Component,
    RibbonLazyBanner2Component,
    RibbonTile2Component,
    RibbonPicture2Component,
    RibbonLazyPicture2Component
],
  providers: [ ] 
})
export class Ribbon2Module { }
