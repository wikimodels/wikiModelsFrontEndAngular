import { Component, OnInit, Input } from '@angular/core';
import data from './footer-data.json';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
      this.data = data;
  }

}
