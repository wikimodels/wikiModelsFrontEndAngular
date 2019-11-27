import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-tiles',
  templateUrl: './ribbon-lazy-tiles2.component.html',
  styleUrls: ['./ribbon-lazy-tiles2.component.css']
})
export class RibbonLazyTiles2Component implements OnInit {

  @Input() tiles: [];
  
  constructor() { }

  ngOnInit() {
  }

}
