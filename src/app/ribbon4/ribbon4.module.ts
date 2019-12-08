import { RibbonRouting4Module } from './ribbon-routing4.module';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { Ribbon4Component } from './ribbon4.component';
import { RibbonSection4Component } from './ribbon-section4/ribbon-section4.component';
import { RibbonTiles4Component } from './ribbon-tiles4/ribbon-tiles4.component';
import { RibbonHeader4Component } from './ribbon-header4/ribbon-header4.component';
import { RibbonText4Component } from './ribbon-text4/ribbon-text4.component';
import { RibbonBanner4Component } from './ribbon-banner4/ribbon-banner4.component';
import { RibbonLazyBanner4Component } from './ribbon-lazy-banner4/ribbon-lazy-banner4.component';
import { RibbonPicture4Component } from './ribbon-picture4/ribbon-picture4.component';
import { RibbonLazyPicture4Component } from './ribbon-lazy-picture4/ribbon-lazy-picture4.component';
import { RibbonFooter4Component } from './ribbon-footer4/ribbon-footer4.component';
import { RibbonLazyTiles4Component } from './ribbon-lazy-tiles4/ribbon-lazy-tiles4.component';
import { RibbonLazyTile4Component } from './ribbon-lazy-tiles4/ribbon-lazy-tile4/ribbon-lazy-tile4.component';
import { SharedModule } from '../shared/shared.module';
import { TestSnackbar4Component } from './test-snackbar4/test-snackbar4.component';
import { RibbonsRestApiService } from './ribbons-rest-api.service';
import { RibbonTile4Component } from './ribbon-tiles4/ribbon-tile4/ribbon-tile4.component';
import { BottomSheet4Component } from './bottom-sheet4/bottom-sheet4.component';
import { RibbonFooterComponent } from './ribbon-footer/ribbon-footer.component';
 

@NgModule({
  declarations: [

    Ribbon4Component,
    RibbonSection4Component,
    RibbonLazyTile4Component,
    RibbonLazyTiles4Component,
    RibbonHeader4Component,
    RibbonText4Component,
    RibbonBanner4Component,
    RibbonLazyBanner4Component,
    RibbonTile4Component,
    RibbonTiles4Component,
    RibbonPicture4Component,
    RibbonLazyPicture4Component,
    RibbonFooter4Component,
    TestSnackbar4Component,
    BottomSheet4Component,
    RibbonFooterComponent
     

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CarouselModule,
    RibbonRouting4Module,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    LazyLoadImageModule,
    SharedModule
  ],
  exports: [
    Ribbon4Component,
    RibbonSection4Component,
    RibbonTiles4Component,
    RibbonLazyTiles4Component,
    RibbonLazyTile4Component,
    RibbonHeader4Component,
    RibbonText4Component,
    RibbonBanner4Component,
    RibbonLazyBanner4Component,
    RibbonTile4Component,
    RibbonPicture4Component,
    RibbonLazyPicture4Component,    
    TestSnackbar4Component,
    RibbonFooterComponent
    
],
entryComponents: [
  BottomSheet4Component    
],
  providers: [RibbonsRestApiService]
})
export class Ribbon4Module { }
