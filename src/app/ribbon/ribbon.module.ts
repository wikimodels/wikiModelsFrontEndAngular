import { RibbonRoutingModule } from './ribbon-routing.module';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RibbonComponent } from './ribbon.component';
import { RibbonSectionComponent } from './ribbon-section/ribbon-section.component';
import { RibbonTilesComponent } from './ribbon-tiles/ribbon-tiles.component';
import { RibbonTileComponent } from './ribbon-tiles/ribbon-tile/ribbon-tile.component';
import { RibbonHeaderComponent } from './ribbon-header/ribbon-header.component';
import { RibbonTextComponent } from './ribbon-text/ribbon-text.component';
import { RibbonBannerComponent } from './ribbon-banner/ribbon-banner.component';
import { RibbonLazyBannerComponent } from './ribbon-lazy-banner/ribbon-lazy-banner.component';
import { RibbonPictureComponent } from './ribbon-picture/ribbon-picture.component';
import { RibbonLazyPictureComponent } from './ribbon-lazy-picture/ribbon-lazy-picture.component';
import { RibbonFooterComponent } from './ribbon-footer/ribbon-footer.component';
import { RibbonLazyTilesComponent } from './ribbon-lazy-tiles/ribbon-lazy-tiles.component';
import { RibbonLazyTileComponent } from './ribbon-lazy-tiles/ribbon-lazy-tile/ribbon-lazy-tile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
     
    RibbonComponent,
    RibbonSectionComponent,
    RibbonTilesComponent,
    RibbonLazyTilesComponent,
    RibbonLazyTileComponent,
    RibbonHeaderComponent,
    RibbonTextComponent,
    RibbonBannerComponent,
    RibbonLazyBannerComponent,
    RibbonTileComponent,
    RibbonPictureComponent,
    RibbonLazyPictureComponent,
    RibbonFooterComponent,
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    RibbonRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,    
    LazyLoadImageModule,
    SharedModule
  ],
  exports: [
    RibbonComponent,
    RibbonSectionComponent,
    RibbonTilesComponent,
    RibbonLazyTilesComponent,
    RibbonLazyTileComponent,
    RibbonHeaderComponent,
    RibbonTextComponent,
    RibbonBannerComponent,
    RibbonLazyBannerComponent,
    RibbonTileComponent,
    RibbonPictureComponent,
    RibbonLazyPictureComponent
],
  providers: [ ] 
})
export class RibbonModule { }
