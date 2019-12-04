import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonFooterComponent } from './ribbon-footer.component';

describe('RibbonFooterComponent', () => {
  let component: RibbonFooterComponent;
  let fixture: ComponentFixture<RibbonFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
