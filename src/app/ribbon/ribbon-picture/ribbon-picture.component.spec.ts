import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonPictureComponent } from './ribbon-picture.component';

describe('RibbonPictureComponent', () => {
  let component: RibbonPictureComponent;
  let fixture: ComponentFixture<RibbonPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
