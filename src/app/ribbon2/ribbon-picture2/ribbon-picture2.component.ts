import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-picture',
  templateUrl: './ribbon-picture2.component.html',
  styleUrls: ['./ribbon-picture2.component.css']
})
export class RibbonPicture2Component implements OnInit {

  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
