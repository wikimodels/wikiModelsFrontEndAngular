import { TestBed } from '@angular/core/testing';

import { SliderService } from './slider2.service';

describe('SliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SliderService = TestBed.get(SliderService);
    expect(service).toBeTruthy();
  });
});
