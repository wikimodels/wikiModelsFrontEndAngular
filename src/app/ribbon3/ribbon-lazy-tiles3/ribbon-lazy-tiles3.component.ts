import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-tiles3',
  templateUrl: './ribbon-lazy-tiles3.component.html',
  styleUrls: ['./ribbon-lazy-tiles3.component.css']
})
export class RibbonLazyTiles3Component implements OnInit {

  @Input() tiles: [];
  
  constructor() { }

  ngOnInit() {
  }

}
