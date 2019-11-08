import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLazyPictureComponent } from './article-lazy-picture.component';

describe('ArticleLazyPictureComponent', () => {
  let component: ArticleLazyPictureComponent;
  let fixture: ComponentFixture<ArticleLazyPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLazyPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLazyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
