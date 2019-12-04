import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonSectionComponent } from './ribbon-section2.component';

describe('RibbonSectionComponent', () => {
  let component: RibbonSectionComponent;
  let fixture: ComponentFixture<RibbonSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
