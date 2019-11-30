import { Component, OnInit, Input, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TestSnackbar3Component } from '../../test-snackbar3/test-snackbar3.component';
import data from './data.json';
@Component({
  selector: 'app-ribbon-tile3',
  templateUrl: './ribbon-tile3.component.html',
  styleUrls: ['./ribbon-tile3.component.css']
})
export class RibbonTile3Component implements OnInit, OnDestroy {

  ratio = '3:3.37';
  sub: Subscription;
  @Input()cardAvatar: string;
  @Input()nickname: string;
  @Input()title: string;
  @Input()img: string;
  @Input()imglink: string;
  @Input()altImg: string;
  @Input()articleId: string;
  @Input()videoId: string;
  @Input()modelCard: boolean;

  constructor(
    private zone: NgZone,
    private router: Router, 
    public breakpointObserver: BreakpointObserver,
    public snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.sub = this.breakpointObserver
    .observe(['(max-width: 350px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.ratio = '1:1';
      } else {
        this.ratio = '1:1';
      }
    });
    console.log('RATIO', this.ratio);
    
  }

  watchVideo() {
    this.router.navigate(['video', this.videoId]);
  }

  readArticle() {
    console.log();
    this.router.navigate(['article', this.articleId]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('SUB DESTROYED');
  }

  openSnackbar() {
    this.zone.run(() => {
      const config = new MatSnackBarConfig();
      config.data = data;
      config.verticalPosition = 'top';
      // config.direction = 'ltr';
      config.announcementMessage = 'SNACK BAR WORKS';
      config.horizontalPosition = 'center';
      config.panelClass = ['popup'];
      this.snackBar.openFromComponent(TestSnackbar3Component, config);
    });     
  }   

}
