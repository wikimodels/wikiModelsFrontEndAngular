import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTileComponent } from './lazy-tile.component';

describe('LazyTileComponent', () => {
  let component: LazyTileComponent;
  let fixture: ComponentFixture<LazyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
