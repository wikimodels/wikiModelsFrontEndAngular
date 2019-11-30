import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-section3',
  templateUrl: './article-section3.component.html',
  styleUrls: ['./article-section3.component.css']
})
export class ArticleSection3Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
  }
}
