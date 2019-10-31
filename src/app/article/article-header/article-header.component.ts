import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()headerImage: string;
  @Input()headerText: string;

  constructor() {
  }

  ngOnInit() {
  }

}
