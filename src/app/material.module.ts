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
        MatDividerModule,
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
];

@NgModule({
    imports: [modules],
    exports: [modules]
})
export class MaterialModule {}
