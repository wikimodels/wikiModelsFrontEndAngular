import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article-text4',
  templateUrl: './article-text4.component.html',
  styleUrls: ['./article-text4.component.css']
})
export class ArticleText4Component implements OnInit {
  
  @Input()articleText: string;
  
  constructor() { }

  ngOnInit() {
  }

}
