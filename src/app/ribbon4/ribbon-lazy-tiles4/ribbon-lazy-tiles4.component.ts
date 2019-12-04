import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-tiles4',
  templateUrl: './ribbon-lazy-tiles4.component.html',
  styleUrls: ['./ribbon-lazy-tiles4.component.css']
})
export class RibbonLazyTiles4Component implements OnInit {

  @Input() tiles: [];
  
  constructor() { }

  ngOnInit() {
  }

}
