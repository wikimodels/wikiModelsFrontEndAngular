import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-article-bottom-sheet4',
  templateUrl: './article-bottom-sheet4.component.html',
  styleUrls: ['./article-bottom-sheet4.component.css'],
  providers: [UtilService]
})
export class ArticleBottomSheet4Component implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    @Inject(DOCUMENT) private document: Document,    
    private bottomSheet: MatBottomSheet,
     
  ) { }

  ngOnInit() {
  }   

  goToLink(link) {
    this.bottomSheet.dismiss();
    setTimeout(() => {    
      this.document.location.href = link;    
    }, 300);
    
  }
}
