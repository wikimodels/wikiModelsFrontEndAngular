import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RibbonsRestApiService } from '../services/ribbons-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-ribbon2',
  templateUrl: './ribbon2.component.html',
  styleUrls: ['./ribbon2.component.css']
})
export class Ribbon2Component implements OnInit, OnDestroy {

  sections: any;
  ribbonId = 'ribbon_2';
  sub: Subscription;

  constructor(
    private ribbonsApi: RibbonsRestApiService,
    private isLoadingService: IsLoadingService
    ) { }

  ngOnInit() {
    this.sub = (this.ribbonsApi.getRibbon(this.ribbonId).subscribe(r => {
      console.log('RIBBON-2', r)
      this.sections = r.sections;
    }));
    this.isLoadingService.add(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
