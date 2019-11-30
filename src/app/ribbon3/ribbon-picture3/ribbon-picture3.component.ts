import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-picture3',
  templateUrl: './ribbon-picture3.component.html',
  styleUrls: ['./ribbon-picture3.component.css']
})
export class RibbonPicture3Component implements OnInit {

  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
