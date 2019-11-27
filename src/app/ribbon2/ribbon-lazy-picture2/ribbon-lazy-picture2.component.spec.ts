import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonLazyPictureComponent } from './ribbon-lazy-picture.component2';

describe('RibbonLazyPictureComponent', () => {
  let component: RibbonLazyPictureComponent;
  let fixture: ComponentFixture<RibbonLazyPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonLazyPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonLazyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
