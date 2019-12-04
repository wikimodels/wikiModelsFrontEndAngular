import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheet4Component } from './bottom-sheet4.component';

describe('BottomSheet4Component', () => {
  let component: BottomSheet4Component;
  let fixture: ComponentFixture<BottomSheet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
