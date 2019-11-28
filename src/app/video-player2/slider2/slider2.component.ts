import { Component, OnInit, Input } from '@angular/core';
import { Slider2Service } from '../slider2.service';
 

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.css']
})
export class Slider2Component implements OnInit {

  @Input() value: number;
  @Input() max: number;
  @Input() min: number;

  constructor(private sliderService: Slider2Service) { }

  ngOnInit() {
  }

  sendValue(value: number) {
    this.sliderService.sendSliderInput(value);
  }
}
