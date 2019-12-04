import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-section4',
  templateUrl: './ribbon-section4.component.html',
  styleUrls: ['./ribbon-section4.component.css']
})
export class RibbonSection4Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
    console.log('SECTION FROM RIBBON-SECTION', this.section)
  }

}
