import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RibbonsRestApiService } from '../services/ribbons-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit, OnDestroy {

  sections: any;
  ribbonId = 'ribbon_1';
  sub: Subscription;
  routerSub: Subscription;

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
    this.sub = (this.ribbonsApi.getRibbon(this.ribbonId).subscribe(r => this.sections = r.sections));
    this.isLoadingService.add(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routerSub.unsubscribe();
  }
}
