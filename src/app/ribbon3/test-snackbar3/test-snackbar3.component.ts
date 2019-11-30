import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';
import { SnackbarComponent } from 'src/app/error-handler/snackbar/snackbar.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-test-snackbar3',
  templateUrl: './test-snackbar3.component.html',
  styleUrls: ['./test-snackbar3.component.css']
})
export class TestSnackbar3Component {
  mydata: any;

  constructor(
     
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private router: Router
  ) { }

 

  dismiss() {
    this.snackBarRef.dismiss();
  }

  goToLink(link) {
    console.log('LINK', link); 
    this.snackBarRef.dismiss();
    this.router.navigate([link]);
  }
}
