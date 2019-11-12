import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-lazy-banner',
  templateUrl: './article-lazy-banner.component.html',
  styleUrls: ['./article-lazy-banner.component.css']
})
export class ArticleLazyBannerComponent implements OnInit {

  @Input() banner: any;
  defaultImage = '../../assets/img/ssdefault.jpg';

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
