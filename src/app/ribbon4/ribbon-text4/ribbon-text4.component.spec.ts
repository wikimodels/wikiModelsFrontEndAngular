import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonTextComponent } from './ribbon-text2.component';

describe('RibbonTextComponent', () => {
  let component: RibbonTextComponent;
  let fixture: ComponentFixture<RibbonTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
