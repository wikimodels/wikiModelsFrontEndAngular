import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-header4',
  templateUrl: './article-header4.component.html',
  styleUrls: ['./article-header4.component.css']
})
export class ArticleHeader4Component implements OnInit {

  @Input()headerImage: string;
  @Input()headerText: string;
  @Input()authorText: string;
  @Input()altImg: string;

  constructor() {
  }

  ngOnInit() {
  }

}
