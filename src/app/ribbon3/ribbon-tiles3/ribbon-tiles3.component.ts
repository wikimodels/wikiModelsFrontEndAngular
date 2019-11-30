import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-tiles3',
  templateUrl: './ribbon-tiles3.component.html',
  styleUrls: ['./ribbon-tiles3.component.css']
})
export class RibbonTiles3Component implements OnInit {

  @Input()tiles: [];
  constructor() { }

  ngOnInit() {
    console.log('TILES FROM SECTION RIBBON-TILES', this.tiles);
  }

}
