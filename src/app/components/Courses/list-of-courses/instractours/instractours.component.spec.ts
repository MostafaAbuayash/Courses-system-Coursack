import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractoursComponent } from './instractours.component';

describe('InstractoursComponent', () => {
  let component: InstractoursComponent;
  let fixture: ComponentFixture<InstractoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstractoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstractoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
