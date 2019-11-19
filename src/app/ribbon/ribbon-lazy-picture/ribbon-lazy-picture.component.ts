import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-picture',
  templateUrl: './ribbon-lazy-picture.component.html',
  styleUrls: ['./ribbon-lazy-picture.component.css']
})
export class RibbonLazyPictureComponent implements OnInit {

  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
