import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-text4',
  templateUrl: './ribbon-text4.component.html',
  styleUrls: ['./ribbon-text4.component.css']
})
export class RibbonText4Component implements OnInit {
 
 @Input()articleText: string;

  constructor() { }

  ngOnInit() {
  }

}
