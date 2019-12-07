import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-lazy-picture4',
  templateUrl: './article-lazy-picture4.component.html',
  styleUrls: ['./article-lazy-picture4.component.css']
})
export class ArticleLazyPicture4Component implements OnInit {
  
  @Input()picture: any;
  defaultImage = 'assets/img/ssdefault.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
