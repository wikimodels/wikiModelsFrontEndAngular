import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() value: number;
  @Input() max: number;
  @Input() min: number;

  constructor(private sliderService: SliderService) { }

  ngOnInit() {
  }

  sendValue(value: number) {
    this.sliderService.sendSliderInput(value);
  }
}
