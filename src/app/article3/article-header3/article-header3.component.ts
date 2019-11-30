import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-header3',
  templateUrl: './article-header3.component.html',
  styleUrls: ['./article-header3.component.css']
})
export class ArticleHeader3Component implements OnInit {

  @Input()headerImage: string;
  @Input()headerText: string;
  @Input()altImg: string;

  constructor() {
  }

  ngOnInit() {
  }

}
