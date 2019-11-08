import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-lazy-tiles',
  templateUrl: './ribbon-lazy-tiles.component.html',
  styleUrls: ['./ribbon-lazy-tiles.component.css']
})
export class RibbonLazyTilesComponent implements OnInit {

  @Input() tiles: [];
  
  constructor() { }

  ngOnInit() {
  }

}
