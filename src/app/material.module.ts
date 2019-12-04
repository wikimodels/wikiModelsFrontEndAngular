import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDividerModule 
    } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [
         
        MatMenuModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule,
        MatRippleModule,
        MatButtonModule,
        MatSidenavModule,
        MatDividerModule,
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatBottomSheetModule, 
        MatProgressSpinnerModule
];

@NgModule({
    imports: [modules],
    exports: [modules]
})
export class MaterialModule {}
