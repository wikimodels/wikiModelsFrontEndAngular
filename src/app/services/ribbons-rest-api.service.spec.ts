import { TestBed } from '@angular/core/testing';

import { RibbonsRestApiService } from './ribbons-rest-api.service';

describe('RibbonsRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RibbonsRestApiService = TestBed.get(RibbonsRestApiService);
    expect(service).toBeTruthy();
  });
});
