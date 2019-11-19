import { Component, OnInit } from '@angular/core';
import data from './ribbon-footer.json';

@Component({
  selector: 'app-ribbon-footer',
  templateUrl: './ribbon-footer.component.html',
  styleUrls: ['./ribbon-footer.component.css']
})
export class RibbonFooterComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {     
      this.data = data;
      console.log('DATA FROM FOOTER', this. data);
  }
 
}
