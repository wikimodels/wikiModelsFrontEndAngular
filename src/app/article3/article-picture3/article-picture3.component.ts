import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TestSnackbar3Component } from '../../ribbon3/test-snackbar3/test-snackbar3.component';

@Component({
  selector: 'app-article-picture3',
  templateUrl: './article-picture3.component.html',
  styleUrls: ['./article-picture3.component.css']
})
export class ArticlePicture3Component implements OnInit {
  
  @Input()picture: any;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    console.log('PICTURE', this.picture);
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
      this.snackBar.openFromComponent(TestSnackbar3Component, config);
    });
  }    
}
