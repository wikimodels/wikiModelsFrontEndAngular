import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonLazyTilesComponent } from './ribbon-lazy-tiles.component';

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
