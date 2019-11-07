import { Component, OnInit, OnDestroy } from '@angular/core';
import data from '../../testData/articles.json';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderService } from '../shared/services/dynamic-script-loader.service.js';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [DynamicScriptLoaderService]
})
export class ArticleComponent implements OnInit, OnDestroy {
   

  articles = data;
  sections: any;
  sub: Subscription;

   
  constructor(
    private route: ActivatedRoute,
    private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sections = this.articles.find(a => a.articleId === params.articleId).sections;
    });
    this.loadScripts();
    console.log(this.articles);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
