import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ribbon-banner',
  templateUrl: './ribbon-banner.component.html',
  styleUrls: ['./ribbon-banner.component.css']
})
export class RibbonBannerComponent implements OnInit {

  @Input() banner: any;


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
