import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.css']
})
export class ArticleTextComponent implements OnInit {
  
  @Input()articleText: string;
  
  constructor() { }

  ngOnInit() {
  }

}
