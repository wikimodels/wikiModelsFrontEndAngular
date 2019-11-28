import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-lazy-banner2',
  templateUrl: './article-lazy-banner2.component.html',
  styleUrls: ['./article-lazy-banner2.component.css']
})
export class ArticleLazyBanner2Component implements OnInit {

  @Input() banner: any;
  defaultImage = 'http://www.cdn.wikimodels.club/assets/img/ssdefault.jpg';

  constructor(private router: Router) { }

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
}
