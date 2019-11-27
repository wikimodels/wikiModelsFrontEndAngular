import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-text',
  templateUrl: './ribbon-text2.component.html',
  styleUrls: ['./ribbon-text2.component.css']
})
export class RibbonText2Component implements OnInit {
 
 @Input()articleText: string;

  constructor() { }

  ngOnInit() {
  }

}
