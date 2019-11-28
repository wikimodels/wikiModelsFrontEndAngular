import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-picture2',
  templateUrl: './article-picture2.component.html',
  styleUrls: ['./article-picture2.component.css']
})
export class ArticlePicture2Component implements OnInit {
  
  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('PICTURE', this.picture);
  }

}
