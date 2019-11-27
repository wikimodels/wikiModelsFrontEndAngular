import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonLazyTilesComponent } from './ribbon-lazy-tiles2.component';

describe('RibbonLazyTilesComponent', () => {
  let component: RibbonLazyTilesComponent;
  let fixture: ComponentFixture<RibbonLazyTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonLazyTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonLazyTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
