import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ArticleTextComponent } from './components/article-text/article-text.component';
import { ArticleBannerComponent } from './components/article-banner/article-banner.component';
import { TileComponent } from './components/tile/tile.component';

import { YoutubePipe } from './pipes/youtube.pipe';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';
import { BackButtonDirective } from './directives/back-button.directive';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { LazyTileComponent } from './components/lazy-tile/lazy-tile.component';
import { ArticleLazyBannerComponent } from './components/article-lazy-banner/article-lazy-banner.component';

@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        LazyLoadImageModule,
        CommonModule,
        LayoutModule
    ],
    declarations: [
        TileComponent,
        ArticleTextComponent,
        ArticleBannerComponent,
        SafeHTMLPipe,
        YoutubePipe,
        BackButtonDirective,
        LazyImageComponent,
        LazyTileComponent,
        ArticleLazyBannerComponent
    ],
    exports: [
        TileComponent,
        ArticleTextComponent,
        ArticleBannerComponent,
        SafeHTMLPipe,
        YoutubePipe,
        BackButtonDirective,
        LazyImageComponent,
        LazyTileComponent,
        ArticleLazyBannerComponent
    ],
    providers: [DynamicScriptLoaderService]
})

export class SharedModule {}
