import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit, OnDestroy {

  ratio = '3:3.37';
  sub: Subscription;
  @Input()cardAvatar: string;
  @Input()nickname: string;
  @Input()title: string;
  @Input()img: string;
  @Input()imglink: string;
  @Input()imgalt: string;
  @Input()articleId: string;
  @Input()videoId: string;
  @Input()modelCard: boolean;

  constructor(private router: Router, public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.sub = this.breakpointObserver
    .observe(['(max-width: 350px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.ratio = '1:1';
      } else {
        this.ratio = '3:3.75';
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

}
