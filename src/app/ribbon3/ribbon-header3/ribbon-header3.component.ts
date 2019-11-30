import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-header3',
  templateUrl: './ribbon-header3.component.html',
  styleUrls: ['./ribbon-header3.component.css']
})
export class RibbonHeader3Component implements OnInit {

  @Input()header: any;
  constructor() { }

  ngOnInit() {
  }

}
