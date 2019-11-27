import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TestSnackbarComponent } from '../test-snackbar/test-snackbar.component';

@Component({
  selector: 'app-ribbon-banner',
  templateUrl: './ribbon-banner2.component.html',
  styleUrls: ['./ribbon-banner2.component.css']
})
export class RibbonBanner2Component implements OnInit {

  @Input() banner: any;  

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
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

  openSnackbar(data) {
    this.zone.run(() => {
      const config = new MatSnackBarConfig();
      config.data = data;
      console.log('DATA: ', data);
      config.verticalPosition = 'top';
      // config.direction = 'ltr';
      config.announcementMessage = 'SNACK BAR WORKS';
      config.horizontalPosition = 'center';
      config.panelClass = ['popup'];
      this.snackBar.openFromComponent(TestSnackbarComponent, config);
    });
  }
}
