import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RibbonsRestApiService } from './ribbons-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ribbon4',
  templateUrl: './ribbon4.component.html',
  styleUrls: ['./ribbon4.component.css']
})
export class Ribbon4Component implements OnInit, OnDestroy {

  sections: any;
  ribbonId = 'ribbon_4';
  sub: Subscription;
  routerSub: Subscription;
  ribbonDataRecieved = false;

  constructor(
    private ribbonsApi: RibbonsRestApiService,
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
      console.log('RIBBON-3', r);
      this.sections = r.sections;
      this.ribbonDataRecieved = true;
    }));
    this.isLoadingService.add(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routerSub.unsubscribe();
  }
}
