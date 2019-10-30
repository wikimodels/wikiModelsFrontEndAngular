import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/dynamic-script-loader.service';

@Component({
  selector: 'app-article-music',
  templateUrl: './article-music.component.html',
  styleUrls: ['./article-music.component.css']
})
export class ArticleMusicComponent implements OnInit {

  @Input()trackId: string;
  @Input()musicCoverUrl: string;
  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.loadScripts();
  }
  
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('async-common-iframe').then(d => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
