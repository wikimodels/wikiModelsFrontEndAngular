import { Component, OnInit } from '@angular/core';
import data from './ribbon-footer2.json';

@Component({
  selector: 'app-ribbon-footer',
  templateUrl: './ribbon-footer2.component.html',
  styleUrls: ['./ribbon-footer2.component.css']
})
export class RibbonFooter2Component implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {     
      this.data = data;
      console.log('DATA FROM FOOTER', this. data);
  }
 
}
