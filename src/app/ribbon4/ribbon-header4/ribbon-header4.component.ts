import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-header4',
  templateUrl: './ribbon-header4.component.html',
  styleUrls: ['./ribbon-header4.component.css']
})
export class RibbonHeader4Component implements OnInit {

  @Input()header: any;
  constructor() { }

  ngOnInit() {
  }

}
