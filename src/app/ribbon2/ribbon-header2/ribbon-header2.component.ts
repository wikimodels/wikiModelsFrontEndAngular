import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-header',
  templateUrl: './ribbon-header2.component.html',
  styleUrls: ['./ribbon-header2.component.css']
})
export class RibbonHeader2Component implements OnInit {

  @Input()header: any;
  constructor() { }

  ngOnInit() {
  }

}
