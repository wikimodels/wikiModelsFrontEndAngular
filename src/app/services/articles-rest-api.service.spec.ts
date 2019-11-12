import { TestBed } from '@angular/core/testing';

import { ArticlesRestApiService } from './articles-rest-api.service';

describe('ArticlesRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesRestApiService = TestBed.get(ArticlesRestApiService);
    expect(service).toBeTruthy();
  });
});
