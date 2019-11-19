import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-header',
  templateUrl: './ribbon-header.component.html',
  styleUrls: ['./ribbon-header.component.css']
})
export class RibbonHeaderComponent implements OnInit {

  @Input()header: any;
  constructor() { }

  ngOnInit() {
  }

}
