import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-lazy-picture',
  templateUrl: './article-lazy-picture.component.html',
  styleUrls: ['./article-lazy-picture.component.css']
})
export class ArticleLazyPictureComponent implements OnInit {
  
  @Input()picture: any;
  defaultImage = '../../assets/img/ssdefault.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}
