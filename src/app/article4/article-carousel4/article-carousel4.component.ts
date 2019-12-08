import { Component, OnInit, Input, NgZone, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { ArticleBottomSheet4Component } from '../article-bottom-sheet4/article-bottom-sheet4.component';
 
@Component({
  selector: 'app-article-carousel4',
  templateUrl: './article-carousel4.component.html',
  styleUrls: ['./article-carousel4.component.css']
  
})
export class ArticleCarousel4Component implements OnInit {

 @Input()carousel: any; 
  
  customOptions: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    autoplay: false,
    autoplayTimeout: 4000,
    pullDrag: false,
    dots: false,
    navSpeed: 2000,
    autoHeight: true,
    margin: 10,
    stagePadding: 23,
    to: 2,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  constructor (
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private zone: NgZone,
  ) { }

  ngOnInit() {
  }

  openBottomSheet(data) {
    this.zone.run(() => {
      console.log('BOTTOM SHEET DATA: ', data);
      const config = new MatBottomSheetConfig();
      config.data = data;
      config.panelClass = ['bottom-sheet-popup'];
      config.hasBackdrop = true;
      this.bottomSheet.open(ArticleBottomSheet4Component, config);       
    });
  }
}
