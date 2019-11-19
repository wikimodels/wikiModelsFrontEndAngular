import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-picture',
  templateUrl: './ribbon-picture.component.html',
  styleUrls: ['./ribbon-picture.component.css']
})
export class RibbonPictureComponent implements OnInit {

  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
