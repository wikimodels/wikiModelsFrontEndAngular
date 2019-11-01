import { NgModule } from '@angular/core';
import { TileComponent } from './components/tile/tile.component';
import { MaterialModule } from '../material.module';
import { ArticleTextComponent } from './components/article-text/article-text.component';
import { ArticleBannerComponent } from './components/article-banner/article-banner.component';
import { YoutubePipe } from './pipes/youtube.pipe';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        MaterialModule,
        FormsModule,
        BrowserModule
    ],
    declarations: [
         TileComponent,
         ArticleTextComponent,
         ArticleBannerComponent,
         SafeHTMLPipe,
         YoutubePipe
    ],
    exports: [
        TileComponent,
        ArticleTextComponent,
        ArticleBannerComponent,
        SafeHTMLPipe,
        YoutubePipe
    ],
    providers:[DynamicScriptLoaderService, ]
})

export class SharedModule {}
