import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-text3',
  templateUrl: './ribbon-text3.component.html',
  styleUrls: ['./ribbon-text3.component.css']
})
export class RibbonText3Component implements OnInit {
 
 @Input()articleText: string;

  constructor() { }

  ngOnInit() {
  }

}
