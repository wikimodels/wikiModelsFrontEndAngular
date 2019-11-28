import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article-text2',
  templateUrl: './article-text2.component.html',
  styleUrls: ['./article-text2.component.css']
})
export class ArticleText2Component implements OnInit {
  
  @Input()articleText: string;
  
  constructor() { }

  ngOnInit() {
  }

}
