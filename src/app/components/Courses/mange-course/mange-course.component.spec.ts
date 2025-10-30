import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCourseComponent } from './mange-course.component';

describe('MangeCourseComponent', () => {
  let component: MangeCourseComponent;
  let fixture: ComponentFixture<MangeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
