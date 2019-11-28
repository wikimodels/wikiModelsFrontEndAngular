import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Slider2Service {

  constructor() { }
  private sliderValueSubj = new Subject<any>();

  sendSliderInput(sliderInput: number) {
    this.sliderValueSubj.next(sliderInput);
  }
  
  getSliderInput(): Observable<any> {
    return this.sliderValueSubj.asObservable();
  }
}


