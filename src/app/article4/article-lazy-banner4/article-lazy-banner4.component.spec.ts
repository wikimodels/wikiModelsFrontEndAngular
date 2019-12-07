import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLazyBannerComponent } from './article-lazy-banner.component';

describe('ArticleLazyBannerComponent', () => {
  let component: ArticleLazyBannerComponent;
  let fixture: ComponentFixture<ArticleLazyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLazyBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLazyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
