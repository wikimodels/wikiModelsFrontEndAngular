import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile.component';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
         TileComponent
    ],
    exports: [
        TileComponent
    ]
})

export class SharedModule {}
