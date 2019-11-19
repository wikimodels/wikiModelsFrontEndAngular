import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-text',
  templateUrl: './ribbon-text.component.html',
  styleUrls: ['./ribbon-text.component.css']
})
export class RibbonTextComponent implements OnInit {
 
 @Input()articleText: string;

  constructor() { }

  ngOnInit() {
  }

}
