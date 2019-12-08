import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
// import data from '../../testData/articles.json';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service.js';
import { ArticlesRestApiService } from '../services/articles-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading';
import { ScrollService } from '../services/scroll.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article4.component.html',
  styleUrls: ['./article4.component.css'],
  providers: [DynamicScriptLoaderService, ScrollService]
})
export class Article4Component implements OnInit, AfterViewInit, OnDestroy {

  sections: any;
  articleId: string;
  articleDataRecieved = false;
  // navSub: Subscription;
  routerSub: Subscription;
  httpSub: Subscription;


  constructor(
    private articleApi: ArticlesRestApiService,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private isLoadingService: IsLoadingService,
    private scroll: ScrollService,
    readonly viewportScroller: ViewportScroller 
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

    this.routerSub = this.route.params
    .subscribe(params => this.articleId = params.article_id);

    this.httpSub = this.articleApi.getArticle(this.articleId)
    .subscribe( a => {
      this.sections = a.sections;
      this.loadScripts();
      // console.log('ARTICLE', a);
      this.articleDataRecieved = true;
    });
    this.isLoadingService.add(this.httpSub);       
  }

  ngAfterViewInit() {
    // console.log('CALLED $$$CROLL TO TOP');
    // this.scroll.scrollToTop();
    // this.viewportScroller.scrollToPosition([0, 0]);
    // window.scroll(0, 0);
  }


  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    this.httpSub.unsubscribe();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('async-youtube-iframe', 'async-common-iframe').then(d => {
      // Script Loaded Successfully
      // console.log('async-youtube-iframe loaded successfully');
      // console.log('async-common-iframe loaded successfully');
    }).catch(error => console.log(error));
  }

}
