import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IsLoadingService } from '@service-work/is-loading';
import { Router, NavigationEnd } from '@angular/router';
import { RibbonsRestApi2Service } from './ribbons-rest-api-2.service';

@Component({
  selector: 'app-ribbon2',
  templateUrl: './ribbon2.component.html',
  styleUrls: ['./ribbon2.component.css']
})
export class Ribbon2Component implements OnInit, OnDestroy {

  sections: any;
  ribbonId = 'ribbon_2';
  sub: Subscription;
  routerSub: Subscription;

  constructor(
    private ribbonsApi: RibbonsRestApi2Service,
    private isLoadingService: IsLoadingService,
    private router: Router
    ) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => {
        return false;
      };

      this.routerSub = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
     }

  ngOnInit() {
    this.sub = (this.ribbonsApi.getRibbon(this.ribbonId).subscribe(r => {
      console.log('RIBBON-2', r);
      this.sections = r.sections;
    }));
    this.isLoadingService.add(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routerSub.unsubscribe();
  }
}
