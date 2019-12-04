import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-tiles4',
  templateUrl: './ribbon-tiles4.component.html',
  styleUrls: ['./ribbon-tiles4.component.css']
})
export class RibbonTiles4Component implements OnInit {

  @Input()tiles: [];
  constructor() { }

  ngOnInit() {
    console.log('TILES FROM SECTION RIBBON-TILES', this.tiles);
  }

}
