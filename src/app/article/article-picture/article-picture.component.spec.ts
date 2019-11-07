import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePictureComponent } from './article-picture.component';

describe('ArticlePictureComponent', () => {
  let component: ArticlePictureComponent;
  let fixture: ComponentFixture<ArticlePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
