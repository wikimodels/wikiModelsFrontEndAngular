import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonLazyBannerComponent } from './ribbon-lazy-banner.component';

describe('RibbonLazyBannerComponent', () => {
  let component: RibbonLazyBannerComponent;
  let fixture: ComponentFixture<RibbonLazyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonLazyBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonLazyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
