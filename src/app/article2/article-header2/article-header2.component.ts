import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-header2',
  templateUrl: './article-header2.component.html',
  styleUrls: ['./article-header2.component.css']
})
export class ArticleHeader2Component implements OnInit {

  @Input()headerImage: string;
  @Input()headerText: string;
  @Input()altImg: string;

  constructor() {
  }

  ngOnInit() {
  }

}
