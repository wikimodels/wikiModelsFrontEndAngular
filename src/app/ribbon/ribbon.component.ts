import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RibbonsRestApiService } from '../services/ribbons-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit, OnDestroy {

  sections: any;
  ribbonId = 'ribbon_1';
  sub: Subscription;

  constructor(
    private ribbonsApi: RibbonsRestApiService,
    private isLoadingService: IsLoadingService
    ) { }

  ngOnInit() {
    this.sub = (this.ribbonsApi.getRibbon(this.ribbonId).subscribe(r => this.sections = r.sections));
    this.isLoadingService.add(this.sub);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
