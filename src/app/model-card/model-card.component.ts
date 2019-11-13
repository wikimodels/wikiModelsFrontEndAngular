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
  ratio = '1:1';
  sub: Subscription;
  cardAvatar: string;
  nickname: string;
  title: string;
  img: string;
  imgalt: string;
  imglink: string;
  altImg: string;
  articleId: string;
  videoId: string;
   

  constructor(
    private route: ActivatedRoute, 
    public breakpointObserver: BreakpointObserver,
    private router: Router) { }

  ngOnInit() {
    this.routeSub = (this.route.params.subscribe(params => {
       
      console.log(params);
      this.model = models.find(m => m.model_id === params.model_id);
      this.cardAvatar = this.model.card_avatar;
      this.nickname = this.model.nickname;  
      this.title = this.model.title;
      this.img = this.model.img;
      this.imglink = this.model.imglink;
      this.altImg = this.model.alt_img;
      this.articleId = this.model.article_id;
      this.videoId = this.model.video_id;
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
        this.ratio = '1:1';
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
