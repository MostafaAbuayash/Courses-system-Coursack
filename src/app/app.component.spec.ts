import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have the 'plateform-courses' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('plateform-courses');
=======
  it(`should have the 'Courses-system-Coursack' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Courses-system-Coursack');
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, plateform-courses');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Courses-system-Coursack');
>>>>>>> 226235ff2605fd2ef25be326218fc1aa77b1914f
  });
});
