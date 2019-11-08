import { Component, OnInit, Input } from '@angular/core';
import { DynamicScriptLoaderService } from '../../shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-article-music',
  templateUrl: './article-music.component.html',
  styleUrls: ['./article-music.component.css']
})
export class ArticleMusicComponent implements OnInit {

  @Input()trackId: string;
  @Input()musicCoverUrl: string;
   
  constructor(){}

  ngOnInit() {
  }  
   
}
