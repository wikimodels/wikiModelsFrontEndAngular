import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article-text3',
  templateUrl: './article-text3.component.html',
  styleUrls: ['./article-text3.component.css']
})
export class ArticleText3Component implements OnInit {
  
  @Input()articleText: string;
  
  constructor() { }

  ngOnInit() {
  }

}
