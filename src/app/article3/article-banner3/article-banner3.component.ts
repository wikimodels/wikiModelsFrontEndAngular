import { Component, OnInit, OnDestroy, Input, NgZone } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TestSnackbarComponent } from '../../ribbon2/test-snackbar/test-snackbar.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-article-banner3',
  templateUrl: './article-banner3.component.html',
  styleUrls: ['./article-banner3.component.css']
})
export class ArticleBanner3Component implements OnInit, OnDestroy {
  sub: Subscription;
  @Input() banner: any;


  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private zone: NgZone,
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };

      this.sub = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    }

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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
