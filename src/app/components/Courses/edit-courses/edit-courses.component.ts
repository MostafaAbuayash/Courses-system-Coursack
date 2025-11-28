import { Component } from '@angular/core';
import { ContentComponent } from '../list-of-courses/content/content.component';
import { UsersComponent } from '../list-of-courses/users/users.component';
import { InstractoursComponent } from '../list-of-courses/instractours/instractours.component';
import { PricingComponent } from '../list-of-courses/pricing/pricing.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-courses',
  standalone: true,
  imports: [
    ContentComponent,
    UsersComponent,
    InstractoursComponent,
    PricingComponent,
    FormsModule,
  ],
  templateUrl: './edit-courses.component.html',
  styleUrl: './edit-courses.component.scss',
})
export class EditCoursesComponent {
  content: Number = 1;
  users: Number = 0;
  instractors: Number = 0;
  pricing: Number = 0;
  IdOfCourse: string | null = null;

  ReactCourse: any[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.IdOfCourse = this.route.snapshot.paramMap.get('id');
    console.log(this.IdOfCourse);
    const storedCourses = JSON.parse(
      localStorage.getItem('ReactCourse') || '[]'
    );
    if (storedCourses) {
      this.ReactCourse = storedCourses.find(
        (course: any) => course.id == this.IdOfCourse
      );
    }
    console.log(this.ReactCourse);
  }
}
