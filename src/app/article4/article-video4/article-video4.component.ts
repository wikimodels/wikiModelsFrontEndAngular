import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-video4',
  templateUrl: './article-video4.component.html',
  styleUrls: ['./article-video4.component.css']
})
export class ArticleVideo4Component implements OnInit {

  @Input() videoId: string;
  @Input() videoCoverUrl: string;
   
  // constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }
  constructor() {}

  ngOnInit() {
    // console.log('VIDEO ID FROM ARTICLE-VIDEO', this.videoId);
  }  

}
