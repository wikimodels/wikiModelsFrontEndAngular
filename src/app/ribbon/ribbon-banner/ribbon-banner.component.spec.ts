import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonBannerComponent } from './ribbon-banner.component';

describe('RibbonBannerComponent', () => {
  let component: RibbonBannerComponent;
  let fixture: ComponentFixture<RibbonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
