import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-music2',
  templateUrl: './article-music2.component.html',
  styleUrls: ['./article-music2.component.css']
})
export class ArticleMusic2Component implements OnInit {

  @Input()trackId: string;
  @Input()musicCoverUrl: string;
   
  constructor(){}

  ngOnInit() {
  }  
   
}
