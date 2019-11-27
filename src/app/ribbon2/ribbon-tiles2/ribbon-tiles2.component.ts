import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-tiles',
  templateUrl: './ribbon-tiles2.component.html',
  styleUrls: ['./ribbon-tiles2.component.css']
})
export class RibbonTiles2Component implements OnInit {

  @Input()tiles: [];
  constructor() { }

  ngOnInit() {
    console.log('TILES FROM SECTION RIBBON-TILES', this.tiles);
  }

}
