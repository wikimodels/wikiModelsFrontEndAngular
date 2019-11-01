import { Component, OnInit } from '@angular/core';
import data from '../../ribbon.json';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

  sections: any;
  constructor() { }

  ngOnInit() {
    this.sections = data;
  }

}
