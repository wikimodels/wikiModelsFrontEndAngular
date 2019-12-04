import { Component, OnInit } from '@angular/core';
import data from './ribbon-footer4.json';

@Component({
  selector: 'app-ribbon-footer4',
  templateUrl: './ribbon-footer4.component.html',
  styleUrls: ['./ribbon-footer4.component.css']
})
export class RibbonFooter4Component implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {     
      this.data = data;
      console.log('DATA FROM FOOTER', this. data);
  }
 
}
