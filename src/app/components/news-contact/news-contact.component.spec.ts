import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContactComponent } from './news-contact.component';

describe('NewsContactComponent', () => {
  let component: NewsContactComponent;
  let fixture: ComponentFixture<NewsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
