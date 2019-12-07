import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { TestSnackbar4Component } from '../test-snackbar4/test-snackbar4.component';
import {MatBottomSheet, MatBottomSheetRef, MatBottomSheetConfig} from '@angular/material/bottom-sheet';
import { BottomSheet4Component } from '../bottom-sheet4/bottom-sheet4.component';
@Component({
  selector: 'app-ribbon-picture4',
  templateUrl: './ribbon-picture4.component.html',
  styleUrls: ['./ribbon-picture4.component.css']
})
export class RibbonPicture4Component implements OnInit {

  @Input()picture: any;


  constructor(
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
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

  dismiss() {
    this.bottomSheet.dismiss();
  }

  openBottomSheet(data) {
    this.zone.run(() => {
      console.log('BOTTOM SHEET DATA: ', data);
      const config = new MatBottomSheetConfig();
      config.data = data;
      config.panelClass = ['bottom-sheet-popup'];
      config.hasBackdrop = true;
      this.bottomSheet.open(BottomSheet4Component, config);

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
