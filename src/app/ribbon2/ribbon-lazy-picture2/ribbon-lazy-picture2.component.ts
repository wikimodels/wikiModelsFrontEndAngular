import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-picture',
  templateUrl: './ribbon-lazy-picture2.component.html',
  styleUrls: ['./ribbon-lazy-picture2.component.css']
})
export class RibbonLazyPicture2Component implements OnInit {

  @Input()picture: any;


  constructor() { }

  ngOnInit() {
    console.log('RIBBON PICTURE', this.picture);
  }

}
