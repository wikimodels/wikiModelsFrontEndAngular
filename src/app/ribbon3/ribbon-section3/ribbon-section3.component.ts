import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-section3',
  templateUrl: './ribbon-section3.component.html',
  styleUrls: ['./ribbon-section3.component.css']
})
export class RibbonSection3Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
    console.log('SECTION FROM RIBBON-SECTION', this.section)
  }

}
