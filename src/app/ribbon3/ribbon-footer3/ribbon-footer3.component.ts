import { Component, OnInit } from '@angular/core';
import data from './ribbon-footer2.json';

@Component({
  selector: 'app-ribbon-footer3',
  templateUrl: './ribbon-footer3.component.html',
  styleUrls: ['./ribbon-footer3.component.css']
})
export class RibbonFooter3Component implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {     
      this.data = data;
      console.log('DATA FROM FOOTER', this. data);
  }
 
}
