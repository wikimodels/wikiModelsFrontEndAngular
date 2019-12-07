import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-section4',
  templateUrl: './article-section4.component.html',
  styleUrls: ['./article-section4.component.css']
})
export class ArticleSection4Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
  }
}
