import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonTilesComponent } from './ribbon-tiles.component';

describe('RibbonTilesComponent', () => {
  let component: RibbonTilesComponent;
  let fixture: ComponentFixture<RibbonTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
