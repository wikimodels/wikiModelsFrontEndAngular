import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-section2',
  templateUrl: './ribbon-section2.component.html',
  styleUrls: ['./ribbon-section2.component.css']
})
export class RibbonSection2Component implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
    console.log('SECTION FROM RIBBON-SECTION', this.section)
  }

}
