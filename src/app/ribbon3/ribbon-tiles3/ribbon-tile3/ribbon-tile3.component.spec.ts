import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonTileComponent } from './ribbon-tile2.component';

describe('RibbonTileComponent', () => {
  let component: RibbonTileComponent;
  let fixture: ComponentFixture<RibbonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
