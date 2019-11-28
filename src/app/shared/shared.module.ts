import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { TileComponent } from './components/tile/tile.component';

import { YoutubePipe } from './pipes/youtube.pipe';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

import { DynamicScriptLoaderService } from './services/dynamic-script-loader.service';
import { BackButtonDirective } from './directives/back-button.directive';
import { LazyTileComponent } from './components/lazy-tile/lazy-tile.component';

import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

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
        SafeHTMLPipe,
        YoutubePipe,
        BackButtonDirective,
        LazyTileComponent,
        FooterComponent,
        NotFoundComponent,
        ServerErrorComponent
    ],
    exports: [
        TileComponent,
        SafeHTMLPipe,
        YoutubePipe,
        BackButtonDirective,
        LazyTileComponent,
        FooterComponent,
        NotFoundComponent,
        ServerErrorComponent
    ],
    providers: [DynamicScriptLoaderService]
})

export class SharedModule {}
