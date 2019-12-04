import { Component, OnInit, Input, NgZone } from '@angular/core';
import { BottomSheet4Component } from '../bottom-sheet4/bottom-sheet4.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-ribbon-lazy-picture4',
  templateUrl: './ribbon-lazy-picture4.component.html',
  styleUrls: ['./ribbon-lazy-picture4.component.css']
})
export class RibbonLazyPicture4Component implements OnInit {

  @Input()picture: any;
  @Input()defaultImage: any;


  constructor(
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private zone: NgZone,
  ) { 
   
  }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

  openBottomSheet(data) {
    this.zone.run(() => {
      // const config = new MatSnackBarConfig();
      // config.data = data;
      // console.log('DATA: ', data);
      // config.verticalPosition = 'top';
      // // config.direction = 'ltr';
      // config.announcementMessage = 'SNACK BAR WORKS';
      // config.horizontalPosition = 'center';
      // config.panelClass = ['popup'];
      this.bottomSheet.open(BottomSheet4Component);
    });
  }

}
