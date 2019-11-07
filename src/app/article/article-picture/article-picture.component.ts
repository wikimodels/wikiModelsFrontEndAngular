import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-picture',
  templateUrl: './article-picture.component.html',
  styleUrls: ['./article-picture.component.css']
})
export class ArticlePictureComponent implements OnInit {
  
  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('PICTURE', this.picture);
  }

}
