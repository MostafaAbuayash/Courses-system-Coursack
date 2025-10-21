import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaccComponent } from './studentacc.component';

describe('StudentaccComponent', () => {
  let component: StudentaccComponent;
  let fixture: ComponentFixture<StudentaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentaccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
