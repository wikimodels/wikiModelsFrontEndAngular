import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-video2',
  templateUrl: './article-video2.component.html',
  styleUrls: ['./article-video2.component.css']
})
export class ArticleVideo2Component implements OnInit {

  @Input() videoId: string;
  @Input() videoCoverUrl: string;
   
  // constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }
  constructor() {}

  ngOnInit() {
    console.log('VIDEO ID FROM ARTICLE-VIDEO', this.videoId);
  }

  // private loadScripts() {
  //   // You can load multiple scripts by just providing the key as argument into load method of the service
  //   this.dynamicScriptLoader.load('async-youtube-iframe').then(d => {
  //     // Script Loaded Successfully
  //     console.log('async-youtube-iframe loaded successfully');
  //   }).catch(error => console.log(error));
  // }

}
