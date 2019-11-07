import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.css']
})
export class ArticleBannerComponent implements OnInit {

  @Input() banner: {};


  constructor(private router: Router) { }

  ngOnInit() {
    console.log('BANNER', this.banner);
  }

  goToResource(link) {

    const keys = Object.keys(link);

    if (keys.includes('modelId')) {
      this.router.navigate(['modelcard', link.modelId]);
    }

    if (keys.includes('url')) {
      window.open(link.url, '_self');
    }
  }
}
