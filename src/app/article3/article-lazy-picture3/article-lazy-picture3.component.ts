import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-lazy-picture3',
  templateUrl: './article-lazy-picture3.component.html',
  styleUrls: ['./article-lazy-picture3.component.css']
})
export class ArticleLazyPicture3Component implements OnInit {
  
  @Input()picture: any;
  defaultImage = 'assets/img/ssdefault.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
