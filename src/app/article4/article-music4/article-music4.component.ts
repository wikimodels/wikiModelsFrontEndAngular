import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-music4',
  templateUrl: './article-music4.component.html',
  styleUrls: ['./article-music4.component.css']
})
export class ArticleMusic4Component implements OnInit {

  @Input()trackId: string;
  @Input()musicCoverUrl: string;
   
  constructor(){}

  ngOnInit() {
  }  
   
}
