import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-tiles',
  templateUrl: './ribbon-tiles.component.html',
  styleUrls: ['./ribbon-tiles.component.css']
})
export class RibbonTilesComponent implements OnInit {

  @Input()tiles: [];
  constructor() { }

  ngOnInit() {
    console.log('TILES FROM SECTION RIBBON-TILES', this.tiles);
  }

}
