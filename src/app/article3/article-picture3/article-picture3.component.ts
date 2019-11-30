import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-picture3',
  templateUrl: './article-picture3.component.html',
  styleUrls: ['./article-picture3.component.css']
})
export class ArticlePicture3Component implements OnInit {
  
  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('PICTURE', this.picture);
  }

}
