import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.css']
})
export class ArticleSectionComponent implements OnInit {

  @Input()section: {};
  constructor() { }

  ngOnInit() {
  }
}
