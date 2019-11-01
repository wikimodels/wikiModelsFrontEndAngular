import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()cardAvatar: string;
  @Input()nickname: string;
  @Input()title: string;
  @Input()img: string;
  @Input()articleId: string;
  @Input()videoId: string;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  watchVideo() {
    this.router.navigate(['video', this.videoId]);
  }

  readArticle() {
    console.log();
    this.router.navigate(['video', this.videoId]);
  }
}
