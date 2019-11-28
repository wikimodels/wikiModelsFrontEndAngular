import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-section2',
  templateUrl: './article-section2.component.html',
  styleUrls: ['./article-section2.component.css']
})
export class ArticleSection2Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
  }
}
