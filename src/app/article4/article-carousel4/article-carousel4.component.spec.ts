import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonCarousel4Component } from './ribbon-carousel4.component';

describe('RibbonCarousel4Component', () => {
  let component: RibbonCarousel4Component;
  let fixture: ComponentFixture<RibbonCarousel4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonCarousel4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonCarousel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
