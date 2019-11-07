import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import models from '../../testData/models.json';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.css']
})
export class ModelCardComponent implements OnInit, OnDestroy {
  model: any;
  // modelCard: boolean;
  routeSub: Subscription;
  // routeQuerySub: Subscription;
  ratio = '3:3.37';
  sub: Subscription;
  cardAvatar: string;
  nickname: string;
  title: string;
  img: string;
  imglink: string;
  altimg: string;
  articleId: string;
  videoId: string;
   

  constructor(
    private route: ActivatedRoute, 
    public breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit() {
    this.routeSub = (this.route.params.subscribe(params => {
       
      console.log(params);
      this.model = models.find(m => m.modelId === params.modelId);
      this.cardAvatar = this.model.cardAvatar;
      this.nickname = this.model.nickname;  
      this.title = this.model.title;
      this.img = this.model.img;
      this.imglink = this.model.imglink;
      this.altimg = this.model.altimg;
      this.articleId = this.model.articleId;
      this.videoId = this.model.videoId;
      // this.modelCard = params.modelCard;
      console.log('MODEL FROM CARD-MODEL COMPONENT', this.model);
      // console.log('MODEL CARD FROM TILE COMPONENT', this.modelCard);
    }));
    // this.routeQuerySub = (this.route.queryParams.subscribe(params => {       
    //   console.log('QUERY PARAMS', params);
    //   this.modelCard = params.modelCard;
    //   console.log('MODEL CARD FROM TILE COMPONENT', this.modelCard);
    // }));

    this.sub = this.breakpointObserver
    .observe(['(max-width: 350px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.ratio = '1:1';
      } else {
        this.ratio = '3:3.75';
      }
    });
    console.log('RATIO', this.ratio);
  } 

  watchVideo() {
    this.router.navigate(['video', this.videoId]);
  }

  readArticle() {
    console.log();
    this.router.navigate(['article', this.articleId]);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    // this.routeQuerySub.unsubscribe();
  }
}
