import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonLazyTileComponent } from './ribbon-lazy-tile.component';

describe('RibbonLazyTileComponent', () => {
  let component: RibbonLazyTileComponent;
  let fixture: ComponentFixture<RibbonLazyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonLazyTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonLazyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
