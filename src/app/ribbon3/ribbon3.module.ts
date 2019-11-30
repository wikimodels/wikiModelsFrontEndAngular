import { RibbonRouting3Module } from './ribbon-routing3.module';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ribbon3Component } from './ribbon3.component';
import { RibbonSection3Component } from './ribbon-section3/ribbon-section3.component';
import { RibbonTile3Component } from './ribbon-tiles3/ribbon-tile3/ribbon-tile3.component';
import { RibbonTiles3Component } from './ribbon-tiles3/ribbon-tiles3.component';
import { RibbonHeader3Component } from './ribbon-header3/ribbon-header3.component';
import { RibbonText3Component } from './ribbon-text3/ribbon-text3.component';
import { RibbonBanner3Component } from './ribbon-banner3/ribbon-banner3.component';
import { RibbonLazyBanner3Component } from './ribbon-lazy-banner3/ribbon-lazy-banner3.component';
import { RibbonPicture3Component } from './ribbon-picture3/ribbon-picture3.component';
import { RibbonLazyPicture3Component } from './ribbon-lazy-picture3/ribbon-lazy-picture3.component';
import { RibbonFooter3Component } from './ribbon-footer3/ribbon-footer3.component';
import { RibbonLazyTiles3Component } from './ribbon-lazy-tiles3/ribbon-lazy-tiles3.component';
import { RibbonLazyTile3Component } from './ribbon-lazy-tiles3/ribbon-lazy-tile3/ribbon-lazy-tile3.component';
import { SharedModule } from '../shared/shared.module';
import { TestSnackbar3Component } from './test-snackbar3/test-snackbar3.component';
import { RibbonsRestApiService } from './ribbons-rest-api.service';



@NgModule({
  declarations: [
     
    Ribbon3Component,
    RibbonSection3Component,
    RibbonLazyTile3Component,
    RibbonLazyTiles3Component,
    RibbonHeader3Component,
    RibbonText3Component,
    RibbonBanner3Component,
    RibbonLazyBanner3Component,
    RibbonTile3Component,
    RibbonTiles3Component,
    RibbonPicture3Component,
    RibbonLazyPicture3Component,
    RibbonFooter3Component,
    TestSnackbar3Component
  ],
  imports: [     
    CommonModule,
    MaterialModule,
    RouterModule,
    RibbonRouting3Module,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,    
    LazyLoadImageModule,
    SharedModule
  ],
  exports: [
    Ribbon3Component,
    RibbonSection3Component,
    RibbonTiles3Component,
    RibbonLazyTiles3Component,
    RibbonLazyTile3Component,
    RibbonHeader3Component,
    RibbonText3Component,
    RibbonBanner3Component,
    RibbonLazyBanner3Component,
    RibbonTile3Component,
    RibbonPicture3Component,
    RibbonLazyPicture3Component,
    TestSnackbar3Component
    
],
entryComponents: [TestSnackbar3Component],
  providers: [RibbonsRestApiService] 
})
export class Ribbon3Module { }
