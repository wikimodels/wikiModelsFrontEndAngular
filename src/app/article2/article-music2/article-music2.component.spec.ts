import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMusicComponent } from './article-music.component';

describe('ArticleMusicComponent', () => {
  let component: ArticleMusicComponent;
  let fixture: ComponentFixture<ArticleMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
