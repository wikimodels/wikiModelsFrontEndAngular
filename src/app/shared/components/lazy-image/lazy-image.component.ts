import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input() defaultImage: string;
  @Input() image: string;
  
  constructor() { }

  ngOnInit() {
  }

}
