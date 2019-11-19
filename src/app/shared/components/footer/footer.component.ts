import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import data from './footer-data.json';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit() {     
      this.data = data;
      console.log('DATA FROM FOOTER', this. data);
  }
 
}
