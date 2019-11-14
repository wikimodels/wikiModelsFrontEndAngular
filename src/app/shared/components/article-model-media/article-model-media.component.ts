import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-model-media',
  templateUrl: './article-model-media.component.html',
  styleUrls: ['./article-model-media.component.css']
})
export class ArticleModelMediaComponent implements OnInit {
  
  @Input() tiles: any;
  
  constructor() { }

  ngOnInit() {
  }

}
