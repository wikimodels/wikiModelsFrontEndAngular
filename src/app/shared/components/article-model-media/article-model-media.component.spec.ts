import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModelMediaComponent } from './article-model-media.component';

describe('ArticleModelMediaComponent', () => {
  let component: ArticleModelMediaComponent;
  let fixture: ComponentFixture<ArticleModelMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleModelMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleModelMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
