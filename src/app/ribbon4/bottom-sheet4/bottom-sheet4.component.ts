import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet4',
  templateUrl: './bottom-sheet4.component.html',
  styleUrls: ['./bottom-sheet4.component.css']
})
export class BottomSheet4Component implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheet: MatBottomSheet,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  dismiss() {
    this.bottomSheet.dismiss();
  }

  goToLink(link) {
    console.log('BOTTOM SHEET LINK', link); 
    this.router.navigate([link]);
    setTimeout(() => {
      this.bottomSheet.dismiss();
    }, 300);
    
  }
}
