import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
// import data from '../../testData/articles.json';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service.js';
import { ArticlesRestApiService } from '../services/articles-rest-api.service';
import { IsLoadingService } from '@service-work/is-loading'; 

@Component({
  selector: 'app-article',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.css'],
  providers: [DynamicScriptLoaderService]
})
export class Article3Component implements OnInit, OnDestroy {

  modelData = {modelNickname: '', modelInsta: '' };  
  sections: any;
  articleId: string;
  routerSub: Subscription;
  httpSub: Subscription;
  articleDataRecieved = false;


  constructor(
    private articleApi: ArticlesRestApiService,
    private route: ActivatedRoute,
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private isLoadingService: IsLoadingService ) {

    }

  ngOnInit() {
    this.routerSub = this.route.params
    .subscribe(params => this.articleId = params.article_id);

    this.httpSub = this.articleApi.getArticle(this.articleId)
    .subscribe( a => {
      this.sections = a.sections;
      this.loadScripts();
      console.log('ARTICLE', a);
      this.modelData = {modelNickname: a.model_nickname, modelInsta: a.model_insta};
      // console.log('MODEL DATA IN ARTICLE', this.modelData);
      this.articleDataRecieved = true;
    });
    this.isLoadingService.add(this.httpSub);
  }


  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
    // this.httpSub.unsubscribe();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('async-youtube-iframe', 'async-common-iframe').then(d => {
      // Script Loaded Successfully
      console.log('async-youtube-iframe loaded successfully');
      console.log('async-common-iframe loaded successfully');
    }).catch(error => console.log(error));
  }

}
