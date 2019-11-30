import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonHeaderComponent } from './ribbon-header.component';

describe('RibbonHeaderComponent', () => {
  let component: RibbonHeaderComponent;
  let fixture: ComponentFixture<RibbonHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
