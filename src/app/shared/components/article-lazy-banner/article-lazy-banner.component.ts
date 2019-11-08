import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-lazy-banner',
  templateUrl: './article-lazy-banner.component.html',
  styleUrls: ['./article-lazy-banner.component.css']
})
export class ArticleLazyBannerComponent implements OnInit {

  @Input() banner: {};
  defaultImage = '../../assets/img/default-white-on-grey.jpg';

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
