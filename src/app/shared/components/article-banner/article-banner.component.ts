import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.css']
})
export class ArticleBannerComponent implements OnInit {
   
  @Input() banner: {};


  constructor() { }

  ngOnInit() {
    console.log('BANNER', this.banner);
  }

}
