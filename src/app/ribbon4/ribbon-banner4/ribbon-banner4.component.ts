import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { TestSnackbar4Component } from '../test-snackbar4/test-snackbar4.component'; 
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { BottomSheet4Component } from '../bottom-sheet4/bottom-sheet4.component';

@Component({
  selector: 'app-ribbon-banner4',
  templateUrl: './ribbon-banner4.component.html',
  styleUrls: ['./ribbon-banner4.component.css']
})
export class RibbonBanner4Component implements OnInit {

  @Input() banner: any;   

  constructor(
    private router: Router,
    public bottomSheet: MatBottomSheet,
    private zone: NgZone,
    ) { }

  ngOnInit() {
    console.log('BANNER', this.banner);
  }

  goToResource(link) {

    const keys = Object.keys(link);

    if (keys.includes('model_id')) {
      this.router.navigate(['modelcard', link.model_id]);
    }

    if (keys.includes('url')) {
      window.open(link.url, '_self');
    }       
  }

  openBottomSheet(data) {
    this.zone.run(() => {
      console.log('BOTTOM SHEET DATA: ', data);
      this.bottomSheet.open(BottomSheet4Component, data);
      const config = new MatBottomSheetConfig();
      config.data = data;
      config.panelClass = ['popup-bottom-sheet'];
      config.hasBackdrop = true;
      // config.data = data;
      // console.log('DATA: ', data);
      // config.verticalPosition = 'top';
      // config.direction = 'ltr';
      // config.announcementMessage = 'SNACK BAR WORKS';
      // config.horizontalPosition = 'center';
      // config.panelClass = ['popup'];
      // this.snackBar.openFromComponent(TestSnackbar4Component, config);
    });
  }
}
