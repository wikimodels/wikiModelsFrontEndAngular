import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-section',
  templateUrl: './ribbon-section.component.html',
  styleUrls: ['./ribbon-section.component.css']
})
export class RibbonSectionComponent implements OnInit {

  @Input()section: any;
  constructor() { }

  ngOnInit() {
    console.log('SECTION FROM RIBBON-SECTION', this.section)
  }

}
