import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-picture3',
  templateUrl: './ribbon-lazy-picture3.component.html',
  styleUrls: ['./ribbon-lazy-picture3.component.css']
})
export class RibbonLazyPicture3Component implements OnInit {

  @Input()picture: any;
  @Input()defaultImage: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
