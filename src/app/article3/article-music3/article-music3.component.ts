import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-music3',
  templateUrl: './article-music3.component.html',
  styleUrls: ['./article-music3.component.css']
})
export class ArticleMusic3Component implements OnInit {

  @Input()trackId: string;
  @Input()musicCoverUrl: string;
   
  constructor(){}

  ngOnInit() {
  }  
   
}
