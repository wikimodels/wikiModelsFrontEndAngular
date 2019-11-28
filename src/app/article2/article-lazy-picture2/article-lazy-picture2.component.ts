import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-lazy-picture2',
  templateUrl: './article-lazy-picture2.component.html',
  styleUrls: ['./article-lazy-picture2.component.css']
})
export class ArticleLazyPicture2Component implements OnInit {
  
  @Input()picture: any;
  defaultImage = 'assets/img/ssdefault.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
